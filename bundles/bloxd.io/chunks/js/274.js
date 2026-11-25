export const id = 274;
export const ids = [274];
export const modules = {
  41870: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu,
      h: () => lu,
      i: () => Xu,
      l: () => fu
    });
    var su = ju(37671),
      Uu = ju(39056),
      Zu = ju(39052);

    function Xu(uu, Eu, ju, su) {
      const Uu = Zu.v;
      Eu.fill(0), uu.gravity.toArray(Eu, Uu.gravity), uu.colorDead.toArray(Eu, Uu.colorDead), ju[Uu.ramp] = uu.useRampGradients ? 1 : 0;
      const Xu = uu.getColorGradients(),
        lu = cu(uu, Xu, "colour", su);
      ju[Uu.colorCount] = lu;
      for (let Zu = 0; Zu < lu; Zu++) {
        var qu;
        const uu = Xu[Nu(Xu, Zu)];
        Eu[Uu.colorPositions + Zu] = uu.gradient, uu.color1.toArray(Eu, Uu.color1 + 4 * Zu), (null !== (qu = uu.color2) && void 0 !== qu ? qu : uu.color1).toArray(Eu, Uu.color2 + 4 * Zu)
      }
      const fu = uu.getVelocityGradients(),
        Cu = cu(uu, fu, "RY", su);
      ju[Uu.velocityCount] = Cu;
      for (let Zu = 0; Zu < Cu; Zu++) gu(Eu, Uu.RY + 4 * Zu, fu[Nu(fu, Zu)]);
      const bu = uu.useRampGradients ? uu.getColorRemapGradients() : null,
        Ou = cu(uu, bu, "colour remap", su);
      ju[Uu.remapCount] = Ou;
      for (let Zu = 0; Zu < Ou; Zu++) gu(Eu, Uu.remap + 4 * Zu, bu[Nu(bu, Zu)])
    }

    function lu() {
      return {
        key: [],
        texels: new Uint8Array(4 * Zu.j)
      }
    }
    const qu = [];

    function fu(uu, Eu) {
      return Cu(uu, qu), !Du(qu, Eu.key) && (Eu.key.length = 0, Eu.key.push(...qu), Eu.key.length > 0 && function(uu, Eu) {
        for (let ju = 0; ju < Zu.j; ju++) Uu.m.GetCurrentGradient(ju / Zu.j, uu, ((uu, Eu, ju) => {
          su.Color3.LerpToRef(uu.color, Eu.color, ju, bu)
        })), Eu[4 * ju] = 255 * bu.r, Eu[4 * ju + 1] = 255 * bu.g, Eu[4 * ju + 2] = 255 * bu.b, Eu[4 * ju + 3] = 255
      }(uu.getRampGradients(), Eu.texels), !0)
    }

    function Cu(uu, Eu) {
      Eu.length = 0;
      const ju = uu.useRampGradients ? uu.getRampGradients() : null;
      if (null !== ju && void 0 !== ju && ju.length) {
        Eu.push(ju.length);
        for (const uu of ju) Eu.push(uu.gradient, uu.color.r, uu.color.g, uu.color.b)
      }
    }
    const bu = new su.Color3;

    function cu(uu, Eu, ju, su) {
      return Eu ? Eu.length > Zu.b ? (su(`particleStops:${ju}`, `GPU particles use the first 2 and last ${Zu.b-2} of more than ${Zu.b} ${ju} gradient stops (${uu.name})`), Zu.b) : Eu.length : 0
    }

    function Nu(uu, Eu) {
      return Eu < 2 || uu.length <= Zu.b ? Eu : uu.length - Zu.b + Eu
    }
    const Ou = new Float32Array(Zu.p),
      Yu = new Uint32Array(Ou.buffer);

    function hu(uu, Eu, ju) {
      return Xu(uu, Ou, Yu, ju), Eu && Du(Yu, Eu) ? null : Yu.slice()
    }

    function Du(uu, Eu) {
      if (uu.length !== Eu.length) return !1;
      for (let ju = 0; ju < uu.length; ju++)
        if (uu[ju] !== Eu[ju]) return !1;
      return !0
    }

    function gu(uu, Eu, ju) {
      var su;
      uu[Eu] = ju.gradient, uu[Eu + 1] = ju.factor1, uu[Eu + 2] = null !== (su = ju.factor2) && void 0 !== su ? su : ju.factor1
    }
  },
  41373: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      const su = Eu * Eu * 4,
        Uu = uu[0].layers,
        Zu = Uu * (uu.length - 1) + uu[uu.length - 1].layers,
        Xu = new Uint8Array(Zu * su);
      uu.forEach(((Eu, ju) => {
        const Zu = ju + 1 < uu.length ? Math.min(Eu.layers, Uu) : Eu.layers;
        Xu.set(new Uint8Array(Eu.pixels.buffer, Eu.pixels.byteOffset, Zu * su), ju * Uu * su)
      }));
      const lu = Math.max(1, Math.min(Zu, ju || Zu));
      if (lu === Zu) return [{
        pixels: Xu,
        layers: Zu
      }];
      const qu = [];
      for (let fu = 0; fu < Zu; fu += lu) {
        const uu = Math.min(Zu, fu + lu);
        qu.push({
          pixels: Xu.slice(fu * su, uu * su),
          layers: uu - fu
        })
      }
      return qu
    }
    ju.d(Eu, {
      e: () => su,
      g: () => Zu
    });
    const Uu = new WeakMap;

    function Zu(uu, Eu, ju) {
      var su, Zu;
      const Xu = null !== (su = Uu.get(uu)) && void 0 !== su ? su : new Map;
      Uu.set(uu, Xu);
      const lu = null !== (Zu = Xu.get(Eu[0])) && void 0 !== Zu ? Zu : [];
      Xu.set(Eu[0], lu);
      const qu = lu.find((uu => uu.urls.length === Eu.length && uu.urls.every(((uu, ju) => uu === Eu[ju]))));
      if (qu) return qu.built;
      const fu = {
        urls: [...Eu],
        built: ju()
      };
      return lu.push(fu), fu.built.catch((() => {
        lu.splice(lu.indexOf(fu), 1)
      })), fu.built
    }
  },
  41861: (uu, Eu, ju) => {
    function su() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Eu = new Set;
      return (ju, su) => {
        Eu.has(ju) || (Eu.add(ju), console.warn(uu + su))
      }
    }
    ju.d(Eu, {
      d: () => su
    })
  },
  41900: (uu, Eu, ju) => {
    ju.d(Eu, {
      createLiteRendererAsync: () => iq,
      liteBabylonBackend: () => Su,
      setPipelineFailureHook: () => lE
    });
    var su = ju(37671),
      Uu = ju(37993),
      Zu = ju(38298),
      Xu = ju(37621),
      lu = ju(38306);
    class qu extends lu.e {
      constructor() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        super(...Eu), this.color = new su.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Eu[0].hV().getUniqueId(),
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
          needAlphaBlendingForMesh: uu => uu.visibility < 1 || uu.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const fu = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Cu = uu => 1 << fu.indexOf(uu),
      bu = Cu("VERTEXCOLOR"),
      cu = Cu("INSTANCES"),
      Nu = Cu("THIN_INSTANCES"),
      Ou = Cu("INSTANCESCOLOR"),
      Yu = Cu("FOG"),
      hu = Cu("LITE_FRONT_LAYER");

    function Du(uu, Eu, ju, su) {
      let Uu = 0;
      return uu.isVerticesDataPresent("color") && (Uu |= bu), "none" !== Eu && (Uu |= cu), "thin" === Eu && (Uu |= Nu, uu.isVerticesDataPresent("instanceColor") && (Uu |= Ou)), su.fogEnabled && uu.applyFog && 0 !== su.fogMode && (Uu |= Yu), ju >= 1 && (Uu |= hu), Uu
    }

    function gu(uu, Eu) {
      uu.updateColor4("color", Eu.color, Eu.alpha)
    }
    var Mu = ju(38232),
      eu = ju(37816),
      Gu = ju(37704),
      pu = ju(37582),
      wu = ju(38218),
      Ju = ju(38226),
      du = ju(37603),
      au = ju(37612),
      Pu = ju(37630);
    const ou = pu.c.GLSL;
    class ku {
      constructor(uu, Eu) {
        this.name = uu, this.vY = Eu, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.wV = {
          addOnce: uu => {
            this.disposers.push(uu)
          }
        }, this.uniqueId = Eu.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      hV() {
        return this.vY
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
      needAlphaBlendingForMesh(uu) {
        return (0, du.S)(this.model, uu.visibility, uu.hasVertexAlpha)
      }
      needAlphaTestingForMesh(uu) {
        return (0, du.W)(this.model, uu.visibility, uu.hasVertexAlpha)
      }
      dispose() {
        (0, eu.k)(this);
        for (const uu of this.disposers.splice(0)) uu()
      }
      get model() {
        return (0, du.$)(this)
      }
    }
    const mu = new WeakSet;

    function vu(uu) {
      return mu.has(uu)
    }

    function Ku(uu) {
      mu.add(uu)
    }
    const Vu = {
      create: (uu, Eu) => ((0, Gu.s)(uu, new ku(uu.name, Eu)), au.c.defines()),
      write: () => {},
      addFeature: (uu, Eu) => {
        const ju = uu.mirror;
        Eu.feature === Ju.h && Eu.state.dirLightCount > 0 && (uu.disableLighting = !0, (0, du.Z)(uu)), "BLOXD_LIGHTING" in Eu.defines && (0, eu.h)(ju), Eu.feature === wu.h && ((0, Mu.i)(Eu.state, ou), function(uu, Eu) {
          const ju = uu.hV().wO();
          setTimeout((() => {
            ju.atlasArrays(Eu.sources).then((ju => {
              (0, Mu.b)(uu, Eu, ju.map((uu => ({
                atlas: uu,
                layers: uu.layers
              }))), ju[0].layerWidth, ou)
            })).catch((uu => {
              console.error("Failed to build the atlas's texture arrays", uu)
            }))
          }))
        }(ju, Eu.state))
      },
      texture: (uu, Eu, ju) => {
        let {
          data: su,
          sets: Uu
        } = ju;
        var Zu;
        (Ku(uu), su) && (uu.uvSet = null !== (Zu = null === Uu || void 0 === Uu ? void 0 : Uu.coordinatesIndex) && void 0 !== Zu ? Zu : 0, (0, Gu.bb)(uu.matrix, null !== Uu && void 0 !== Uu ? Uu : {}))
      },
      cube: Ku,
      canvas: (uu, Eu, ju) => {
        let {
          width: su,
          height: Uu,
          mipmaps: Zu,
          samplingMode: Xu = Pu.i.trilinear,
          hasAlpha: lu = !1,
          wrap: qu = Pu.e.clamp
        } = ju;
        const fu = uu.wO().createCanvas(su, Uu),
          Cu = new Pu.l("2d", {
            kind: "canvas",
            width: su,
            height: Uu,
            canvas: fu
          }, {
            samplingMode: Xu,
            wrapU: qu,
            wrapV: qu,
            noMipmap: !Zu,
            invertY: !0
          });
        return Cu.hasAlpha = lu, Ku(Cu), Cu
      }
    };
    var ru = ju(37837),
      Qu = ju(37514);
    class iu {
      constructor(uu, Eu, ju) {
        this.engine = uu, this.clearColor = Eu, this.ambientColor = ju, this.onBeforeRenderObservable = new Qu.d, this.onBeforeCameraRenderObservable = new Qu.d, this.onAfterRenderObservable = new Qu.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.WG = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      wO() {
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
      addPendingData(uu) {
        this.pending.push(uu)
      }
      removePendingData(uu) {
        const Eu = this.pending.indexOf(uu); - 1 !== Eu && this.pending.splice(Eu, 1)
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

    function Wu() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const Su = {
      oju: Wu,
      zsu: (uu, Eu) => {
        const ju = new iu(uu.engine, su.b.FromArray(Eu.clearColor), su.Color3.FromArray(Eu.ambientColor));
        (0, Xu.b)(Vu, ju), uu.vY = ju,
          function(uu, Eu) {
            const ju = Object.assign((0, ru.j)(uu, "camera"), {
              layerMask: 268435455
            });
            uu.model.nodes.setWorldSource(ju.row, uu.model.view.worldMatrix), uu.camera = Eu.activeCamera = ju
          }(uu, ju), (0, Uu.h)(uu, ((uu, Eu, ju) => (0, Zu.h)(uu, Eu, ju, lu.e)))
      },
      Hsu: () => {},
      setBabylonFog: () => {},
      uUu: Wu,
      UUu: () => {},
      linesFromArrays: (uu, Eu, ju) => (0, Zu.h)(uu, Eu, ju, qu),
      KY: () => {},
      sUu: Wu
    };
    var Iu = ju(41959),
      Fu = ju(41972),
      Bu = ju(41984);
    class Lu {
      constructor(uu) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const Eu = new Promise((uu => {
          this.refused = uu
        }));
        this.deviceLost = Promise.race([uu, Eu]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(uu) {
        (function(uu) {
          const {
            name: Eu,
            message: ju
          } = null !== uu && void 0 !== uu ? uu : {};
          return "InvalidStateError" === Eu && "string" === typeof ju && ju.startsWith("GPUDevice.")
        })(uu) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: uu.message,
          framesRefused: !0
        }))
      }
    }
    var tu = ju(41373),
      xu = ju(39065);

    function Tu(uu) {
      return Math.max(4, 4 * Math.ceil(uu / 4))
    }

    function Hu(uu, Eu, ju, su) {
      const Uu = uu.createBuffer({
        label: su,
        size: Tu(Eu.byteLength),
        usage: ju,
        mappedAtCreation: !0
      });
      return new Uint8Array(Uu.getMappedRange(), 0, Eu.byteLength).set(new Uint8Array(Eu.buffer, Eu.byteOffset, Eu.byteLength)), Uu.unmap(), Uu
    }

    function Au(uu, Eu) {
      return Math.floor(Math.log2(Math.max(uu, Eu))) + 1
    }

    function nu(uu, Eu, ju, su, Uu, Zu) {
      const Xu = uu.createTexture({
          label: Zu,
          size: {
            width: ju,
            height: su,
            depthOrArrayLayers: Uu
          },
          format: "rgba8unorm",
          mipLevelCount: Au(ju, su),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        lu = (Eu, ju, su, Zu) => {
          uu.queue.writeTexture({
            texture: Xu,
            mipLevel: ju
          }, Eu, {
            bytesPerRow: 4 * su,
            rowsPerImage: Zu
          }, {
            width: su,
            height: Zu,
            depthOrArrayLayers: Uu
          })
        };
      lu(Eu, 0, ju, su);
      let qu = 1;
      for (const fu of function*(uu, Eu, ju, su) {
          let Uu = uu,
            Zu = Eu,
            Xu = ju;
          for (; Zu > 1 || Xu > 1;) {
            const uu = Math.max(1, Zu >> 1),
              Eu = Math.max(1, Xu >> 1),
              ju = new Uint8Array(uu * Eu * su * 4),
              lu = 4 * Zu;
            let qu = 0;
            for (let fu = 0; fu < su; fu++) {
              const su = fu * lu * Xu;
              for (let fu = 0; fu < Eu; fu++) {
                const Eu = su + Math.min(2 * fu, Xu - 1) * lu,
                  Cu = su + Math.min(2 * fu + 1, Xu - 1) * lu;
                for (let su = 0; su < uu; su++) {
                  const uu = 4 * Math.min(2 * su, Zu - 1),
                    Xu = 4 * Math.min(2 * su + 1, Zu - 1);
                  for (let su = 0; su < 4; su++) ju[qu++] = Uu[Eu + uu + su] + Uu[Eu + Xu + su] + Uu[Cu + uu + su] + Uu[Cu + Xu + su] + 2 >> 2
                }
              }
            }
            yield {
              data: ju,
              width: uu,
              height: Eu
            }, Uu = ju, Zu = uu, Xu = Eu
          }
        }(Eu, ju, su, Uu)) lu(fu.data, qu++, fu.width, fu.height);
      return Xu
    }
    const yu = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function zu(uu) {
      if (uu.startsWith("data:")) {
        const Eu = uu.search(/[;,]/);
        return `data:${Eu>5?uu.slice(5,Eu):""} URL of ${uu.length} characters`
      }
      return uu.length > 80 ? `${uu.slice(0,80)}...` : uu
    }
    async function Ru(uu) {
      const Eu = await fetch(uu);
      if (!Eu.ok) throw new Error(`${zu(uu)}: ${Eu.status} ${Eu.statusText}`);
      return createImageBitmap(await Eu.blob(), yu)
    }
    async function uE(uu) {
      const Eu = await Ru(uu),
        ju = new OffscreenCanvas(Eu.width, Eu.height),
        su = ju.getContext("2d", {
          willReadFrequently: !0
        });
      if (!su) throw new Error("No 2D context to decode an image");
      su.drawImage(Eu, 0, 0);
      const {
        data: Uu
      } = su.getImageData(0, 0, Eu.width, Eu.height);
      return Eu.close(), {
        pixels: new Uint8Array(Uu.buffer, Uu.byteOffset, Uu.byteLength),
        width: ju.width,
        height: ju.height
      }
    }

    function EE(uu, Eu) {
      return (0, tu.g)(uu, Eu.urls, (async () => {
        const ju = await Promise.all(Eu.urls.map((async (uu, ju) => {
            var su, Uu, Zu, Xu, lu;
            return null !== (Xu = null !== (Uu = null === (Zu = Eu.pixels) || void 0 === Zu ? void 0 : Zu[ju]) && void 0 !== Uu ? Uu : null, lu = Eu.layerWidth, su = null !== Xu && void 0 !== Xu && Xu.byteLength && lu && Xu.byteLength % (lu * lu * 4) === 0 ? {
              pixels: Xu,
              layerWidth: lu,
              layers: Xu.byteLength / (lu * lu * 4)
            } : null) && void 0 !== su ? su : await async function(uu) {
              const {
                pixels: Eu,
                width: ju
              } = await uE(uu);
              return {
                pixels: Eu,
                layerWidth: ju,
                layers: Eu.byteLength / (ju * ju * 4)
              }
            }(uu)
          }))),
          su = ju[0].layerWidth;
        return (0, tu.e)(ju, su, uu.limits.maxTextureArrayLayers).map(((ju, Uu) => {
          let {
            pixels: Zu,
            layers: Xu
          } = ju;
          return {
            texture: nu(uu, Zu, su, su, Xu, `atlas-${Uu}-${zu(Eu.urls[0])}`),
            layerWidth: su,
            layers: Xu
          }
        }))
      }))
    }
    const jE = new Map([
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
      sE = new Map([
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

    function UE(uu) {
      for (const Eu of (0, xu.k)(uu))
        if (!sE.has((0, xu.j)(Eu))) return !1;
      return !0
    }

    function ZE(uu) {
      const Eu = sE.get(uu);
      if (!Eu) return null;
      const [ju, su, Uu] = Eu;
      return {
        srcFactor: jE.get(ju),
        dstFactor: jE.get(su),
        operation: Uu
      }
    }
    let XE = null;

    function lE(uu) {
      XE = uu
    }
    const qE = new WeakSet;

    function fE(uu) {
      return qE.has(uu)
    }

    function CE(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var Zu;
      fE(uu) || (null === (Zu = XE) || void 0 === Zu || Zu(Eu, ju, su, Uu))
    }
    class bE {
      constructor(uu) {
        this.resources = uu, this.matrixKey = {
          Mb: 0
        }, this.attributesKey = {
          Mb: 0
        }, this.inputs = Object.create(null);
        for (let Eu = 0; Eu < 4; Eu++) this.inputs[`world${Eu}`] = new OE(this.matrixKey, 16 * Eu, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(uu, Eu) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, uu, !0), Eu && this.resources.vertexBufferCreated(this.attributesKey, Eu, !0)
      }
    }
    class cE extends bE {
      constructor(uu, Eu, ju) {
        super(uu), this.mesh = Eu, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const su = this.inputs;
        let Uu = 0;
        for (const {
            size: Xu
          }
          of ju) Uu += Xu;
        for (const {
            name: Xu,
            offset: lu,
            size: qu,
            type: fu
          }
          of ju) su[Xu] = new OE(this.attributesKey, 4 * lu, 4 * Uu, qu, !0, fu);
        this.rowStride = Uu, uu.E_.set(Eu, this);
        const Zu = Eu.isVerticesDataPresent;
        Eu.isVerticesDataPresent = (uu, ju) => uu in su || Zu.call(Eu, uu, ju)
      }
      attach(uu, Eu) {
        this.matrices = uu, this.attributes = Eu, this.bind(uu, Eu), this.mirror(uu, uu.length, uu.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      R_(uu) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, uu ? 64 * uu : void 0)
      }
      E1() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(uu, Eu) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * uu, 16 * Eu)
      }
      attributeRows(uu, Eu) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, uu * this.rowStride, Eu * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(uu, Eu, ju) {
        const su = this.mesh._thinInstanceDataStorage;
        su.matrixData = uu, su.matrixBufferSize = Eu, su.worldMatrices = null, su.instancesCount = ju
      }
    }
    class NE extends bE {
      constructor(uu, Eu, ju) {
        var su, Uu, Zu, Xu;
        super(uu), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (su = null === ju || void 0 === ju ? void 0 : ju.interleavedKinds) && void 0 !== su ? su : null, this.offsets = null !== (Uu = null === ju || void 0 === ju ? void 0 : ju.interleavedOffsets) && void 0 !== Uu ? Uu : [], this.rowStride = null !== (Zu = null === ju || void 0 === ju ? void 0 : ju.interleavedRowStride) && void 0 !== Zu ? Zu : 0, null === (Xu = this.layout) || void 0 === Xu || Xu.forEach(((uu, Eu) => {
          this.inputs[uu] = new OE(this.attributesKey, 4 * this.offsets[Eu], 4 * this.rowStride, ju.strides[uu])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), uu.batchUploads.set(Eu, this), Eu.wV.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(uu) {
        const Eu = this.packedBatch;
        return Eu.renderSelf ? 0 === uu ? this.packedSource : Eu.instances[uu - 1] : Eu.instances[uu]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(uu, Eu, ju, su) {
        const Uu = (Eu.renderSelf ? 1 : 0) + Eu.rows.length;
        if (this.frame = su, this.count = Uu, this.packedSource = uu, this.packedBatch = Eu, 0 === Uu) return;
        if (uu.getWorldMatrix(), 16 * Uu > this.matrices.length) {
          let uu = this.matrices.length / 16;
          for (; uu < Uu;) uu *= 2;
          this.matrices = new Float32Array(16 * uu), this.attributes &&= new Float32Array(uu * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Zu = 0;
        Eu.renderSelf && this.packRow(Zu++, uu, Eu.row, ju);
        for (let Xu = 0; Xu < Eu.rows.length; Xu++) this.packRow(Zu++, Eu.instances[Xu], Eu.rows[Xu], ju);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Uu), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Uu * this.rowStride)
      }
      packRow(uu, Eu, ju, su) {
        const Uu = this.matrices;
        if (ju < 0) Uu.set(Eu.getWorldMatrix().m, 16 * uu);
        else
          for (let fu = 0; fu < 16; fu++) Uu[16 * uu + fu] = su[16 * ju + fu];
        const Zu = this.attributes;
        if (!Zu) return;
        const Xu = Eu.Hr,
          lu = this.layout;
        for (let fu = 0; fu < lu.length; fu++) {
          var qu;
          const Eu = null !== (qu = Xu[lu[fu]]) && void 0 !== qu ? qu : 0,
            ju = uu * this.rowStride + this.offsets[fu];
          Eu.toArray ? Eu.toArray(Zu, ju) : Eu.copyToArray ? Eu.copyToArray(Zu, ju) : Zu[ju] = Eu
        }
      }
    }
    class OE {
      constructor(uu, Eu, ju, su) {
        let Uu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = uu, this.byteOffset = Eu, this.byteStride = ju, this.size = su, this.instanced = Uu, this.type = Zu, this.normalized = Xu
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
    const YE = "CANVAS_ALPHA_ONE",
      hE = `override ${YE}: bool = false;`,
      DE = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function gE(uu, Eu, ju) {
      var su;
      let Uu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Zu = null !== (su = Eu._colorFormat) && void 0 !== su ? su : "bgra8unorm",
        Xu = Uu ? 15 : 0;
      return ju ? {
        ...uu,
        targets: [{
          format: Zu,
          blend: {
            color: ju,
            alpha: DE
          },
          writeMask: Xu
        }]
      } : {
        ...uu,
        constants: {
          ...uu.constants,
          [YE]: 1
        },
        targets: [{
          format: Zu,
          writeMask: Xu
        }]
      }
    }

    function ME(uu, Eu) {
      uu._renderables.push(Eu)
    }

    function eE(uu) {
      return uu._device
    }

    function GE(uu) {
      var Eu, ju;
      return null !== (Eu = null === (ju = uu._frameGraph) || void 0 === ju ? void 0 : ju._tasks) && void 0 !== Eu ? Eu : []
    }

    function pE(uu) {
      return uu._currentEncoder
    }

    function wE(uu) {
      return uu.createBindGroupLayout({
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
    const JE = "greater-equal",
      dE = 2e5,
      aE = 1e5,
      PE = new WeakMap;

    function oE(uu, Eu) {
      let ju = PE.get(uu);
      if (!ju) {
        ju = {
          module: uu.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, PE.set(uu, ju)
      }
      const su = `${Eu._colorFormat}|${Eu._depthStencilFormat}|${Eu._sampleCount}`;
      let Uu = ju.pipelines.get(su);
      if (!Uu) {
        var Zu;
        const {
          module: Xu
        } = ju;
        Uu = uu.createRenderPipeline({
          label: `placeholder ${su}`,
          layout: uu.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Xu,
            entryPoint: "v"
          },
          fragment: {
            module: Xu,
            entryPoint: "f",
            targets: [{
              format: null !== (Zu = Eu._colorFormat) && void 0 !== Zu ? Zu : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Eu._depthStencilFormat ? {
            format: Eu._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Eu._sampleCount
          }
        }), ju.pipelines.set(su, Uu)
      }
      return Uu
    }

    function kE(uu, Eu, ju) {
      const su = Eu.eye,
        Uu = Eu.viewMatrix;
      uu[0] = su[0] + Uu[2] * ju, uu[1] = su[1] + Uu[6] * ju, uu[2] = su[2] + Uu[10] * ju
    }
    var mE = ju(38344),
      vE = ju(41861),
      KE = ju(37595);
    const VE = Math.PI,
      rE = VE / 1.95,
      QE = [5e-4 / 94, 125e-7, 5e-4 / 18],
      iE = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((uu => {
        let [Eu, ju] = uu;
        return .434 * VE * Math.pow(2 * VE / Eu, 2) * ju
      }));

    function WE(uu, Eu, ju) {
      const {
        up: su,
        mieDirectionalG: Uu
      } = uu, Zu = 1 - FE(1 - Math.exp(Eu[1] / 45e4), 0, 1), Xu = uu.rayleigh - (1 - Zu), lu = Math.hypot(Eu[0], Eu[1], Eu[2]), qu = lu > 0 ? 1 / lu : 0, fu = ju.sunDir;
      for (let Nu = 0; Nu < 3; Nu++) fu[Nu] = Eu[Nu] * qu;
      const Cu = fu[0] * su[0] + fu[1] * su[1] + fu[2] * su[2],
        bu = 1e3 * Math.max(0, 1 - Math.exp(-(rE - Math.acos(FE(Cu, -1, 1))) / 1.5));
      ju.sunE = bu;
      const cu = .2 * uu.turbidity * 1e-17 * uu.mieCoefficient;
      for (let Nu = 0; Nu < 3; Nu++) {
        const uu = QE[Nu] * Xu,
          Eu = iE[Nu] * cu,
          su = bu / (uu + Eu);
        ju.inScatterR[Nu] = uu * su, ju.inScatterM[Nu] = Eu * su, ju.extinctionBeta[Nu] = 8400 * uu + 1250 * Eu
      }
      return ju.sunsetMix = FE(Math.pow(1 - Cu, 5), 0, 1), ju.sunDiscE = 19e3 * bu, ju.mieScale = (1 - Uu * Uu) / (4 * VE), ju.mieBase = 1 + Uu * Uu, ju.mieSlope = 2 * Uu, ju
    }
    const SE = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const IE = 1 / function(uu) {
      const {
        A: Eu,
        B: ju,
        C: su,
        D: Uu,
        E: Zu,
        F: Xu
      } = SE;
      return (uu * (Eu * uu + su * ju) + Uu * Zu) / (uu * (Eu * uu + ju) + Uu * Xu) - Zu / Xu
    }(1e3);

    function FE(uu, Eu, ju) {
      return Math.min(Math.max(uu, Eu), ju)
    }
    const BE = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function LE(uu, Eu) {
      const ju = new Map(Eu),
        su = [],
        Uu = [],
        Zu = () => 0 === Uu.length || Uu[Uu.length - 1].active;
      let Xu = null;
      const lu = () => {
        const uu = [...ju].filter((uu => {
            let [, Eu] = uu;
            return !0 !== Eu
          })),
          Eu = uu.map((uu => {
            let [Eu] = uu;
            return Eu
          })).join("|");
        Xu = uu.length ? new RegExp(`\\b(${Eu})\\b`, "g") : null
      };
      lu();
      for (const qu of uu.split("\n")) {
        const uu = BE.exec(qu);
        if (!uu) {
          Zu() && su.push(Xu ? tE(qu, Xu, ju) : qu);
          continue
        }
        const Eu = uu[1],
          fu = uu[2].trim();
        if ("ifdef" === Eu || "ifndef" === Eu || "if" === Eu) {
          const uu = Zu(),
            su = "if" === Eu ? xE(fu, ju) : ju.has(fu) === ("ifdef" === Eu);
          Uu.push({
            active: uu && su,
            parentActive: uu,
            taken: su
          })
        } else if ("elif" === Eu || "else" === Eu) {
          const uu = Uu[Uu.length - 1];
          if (!uu) throw new Error(`#${Eu} without #if`);
          const su = !uu.taken && ("else" === Eu || xE(fu, ju));
          uu.active = uu.parentActive && su, uu.taken = uu.taken || su
        } else if ("endif" === Eu) {
          if (!Uu.pop()) throw new Error("#endif without #if")
        } else if (Zu()) {
          const [uu, ...su] = fu.split(/\s+/);
          "undef" === Eu ? ju.delete(uu) : ju.set(uu, !su.length || su.join(" ")), lu()
        }
      }
      if (Uu.length) throw new Error("Unterminated #if");
      return su.join("\n")
    }

    function tE(uu, Eu, ju) {
      return uu.replace(Eu, (uu => {
        const Eu = ju.get(uu);
        return "string" === typeof Eu ? Eu : uu
      }))
    }

    function xE(uu, Eu) {
      var ju;
      const su = null !== (ju = uu.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== ju ? ju : [];
      let Uu = 0;
      const Zu = () => su[Uu],
        Xu = () => su[Uu++],
        lu = uu => {
          const ju = /^\d/.test(uu) ? uu : Eu.get(uu);
          return "string" === typeof ju ? parseInt(ju) : Number.NaN
        },
        qu = () => {
          const uu = Xu();
          if ("!" === uu) return !qu();
          if ("(" === uu) {
            const uu = Cu();
            return Xu(), uu
          }
          if ("defined" === uu) {
            const uu = "(" === Zu();
            uu && Xu();
            const ju = Xu();
            return uu && Xu(), Eu.has(ju)
          }
          const ju = Zu();
          if ("==" === ju || "!=" === ju || ">" === ju || "<" === ju || ">=" === ju || "<=" === ju) {
            Xu();
            const Eu = lu(uu),
              su = lu(Xu());
            if (Number.isNaN(Eu) || Number.isNaN(su)) return !1;
            switch (ju) {
              case "==":
                return Eu === su;
              case "!=":
                return Eu !== su;
              case ">":
                return Eu > su;
              case "<":
                return Eu < su;
              case ">=":
                return Eu >= su;
              default:
                return Eu <= su
            }
          }
          return Eu.has(uu)
        },
        fu = () => {
          let uu = qu();
          for (;
            "&&" === Zu();) {
            Xu();
            const Eu = qu();
            uu = uu && Eu
          }
          return uu
        },
        Cu = () => {
          let uu = fu();
          for (;
            "||" === Zu();) {
            Xu();
            const Eu = fu();
            uu = uu || Eu
          }
          return uu
        },
        bu = Cu();
      if (Uu !== su.length) throw new Error(`Cannot evaluate #if ${uu}`);
      return bu
    }
    var TE = ju(37589),
      HE = ju(37907),
      AE = ju(37909),
      nE = ju(40952),
      yE = ju(39095);
    const zE = 32,
      RE = [10, 3, 10],
      uj = [21, 7, 21],
      Ej = uj[0] * uj[1] * uj[2],
      jj = 0,
      sj = 1,
      Uj = 2,
      Zj = 3,
      Xj = 64,
      lj = 512,
      qj = 4 * Ej,
      fj = 1536,
      Cj = qj + Ej * fj,
      bj = 1073741824,
      cj = Cj + 1;

    function Nj(uu, Eu) {
      const ju = uu % Eu;
      return ju < 0 ? ju + Eu : ju
    }

    function Oj(uu, Eu, ju) {
      return su = Nj(uu, uj[0]), Uu = Nj(Eu, uj[1]), Zu = Nj(ju, uj[2]), su + uj[0] * (Uu + uj[1] * Zu);
      var su, Uu, Zu
    }

    function Yj(uu, Eu, ju) {
      return uu + 8 * (Eu + 8 * ju)
    }

    function hj(uu, Eu, ju) {
      return uu + 4 * (Eu + 4 * ju)
    }
    const Dj = 65535,
      gj = 0,
      Mj = 1,
      ej = 2,
      Gj = 3;

    function pj(uu) {
      return Math.ceil(uu * uu / 32)
    }
    const wj = 8192,
      Jj = 1 << 18,
      dj = 65536,
      aj = 294912,
      Pj = 128,
      oj = 4096,
      kj = 16,
      mj = 16385,
      vj = 81921,
      Kj = 147457,
      Vj = 4194304;
    const rj = [0, 0, 0],
      Qj = [0, 0, 0];

    function ij(uu, Eu, ju, su) {
      ! function(uu, Eu, ju) {
        const [su, Uu, Zu] = [uu[0], uu[1], uu[2]];
        let Xu, lu, qu;
        Math.abs(Uu) < .99 ? (Xu = Zu, lu = 0, qu = -su) : (Xu = -Uu, lu = su, qu = 0);
        const fu = Math.hypot(Xu, lu, qu);
        Eu[0] = Xu / fu, Eu[1] = lu / fu, Eu[2] = qu / fu, ju[0] = Uu * Eu[2] - Zu * Eu[1], ju[1] = Zu * Eu[0] - su * Eu[2], ju[2] = su * Eu[1] - Uu * Eu[0]
      }(su, rj, Qj);
      const Uu = 1 / 32;
      for (const [Zu, Xu] of [
          [0, rj],
          [4, Qj]
        ]) {
        for (let ju = 0; ju < 3; ju++) uu[Eu + Zu + ju] = Xu[ju] * Uu;
        uu[Eu + Zu + 3] = -(Xu[0] * ju[0] + Xu[1] * ju[1] + Xu[2] * ju[2]) * Uu
      }
    }
    class Wj {
      constructor() {
        this.words = new Uint32Array(Kj), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      NN(uu, Eu) {
        this.parts = 0, this.refs = 0, this.view = uu, this.viewAt = Eu;
        const ju = uu[Eu + 1] * uu[Eu + 6] - uu[Eu + 2] * uu[Eu + 5],
          su = uu[Eu + 2] * uu[Eu + 4] - uu[Eu] * uu[Eu + 6],
          Uu = uu[Eu] * uu[Eu + 5] - uu[Eu + 1] * uu[Eu + 4],
          Zu = Math.hypot(ju, su, Uu) || 1;
        this.light[0] = ju / Zu, this.light[1] = su / Zu, this.light[2] = Uu / Zu
      }
      add(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= oj || ! function(uu, Eu, ju) {
            const su = uu[Eu],
              Uu = uu[Eu + 1],
              Zu = uu[Eu + 2],
              Xu = uu[Eu + 3],
              lu = uu[Eu + 4],
              qu = uu[Eu + 5],
              fu = uu[Eu + 6],
              Cu = uu[Eu + 7],
              bu = uu[Eu + 8],
              cu = uu[Eu + 9],
              Nu = uu[Eu + 10],
              Ou = uu[Eu + 11],
              Yu = uu[Eu + 12],
              hu = uu[Eu + 13],
              Du = uu[Eu + 14],
              gu = uu[Eu + 15],
              Mu = su * qu - Uu * lu,
              eu = su * fu - Zu * lu,
              Gu = su * Cu - Xu * lu,
              pu = Uu * fu - Zu * qu,
              wu = Uu * Cu - Xu * qu,
              Ju = Zu * Cu - Xu * fu,
              du = bu * hu - cu * Yu,
              au = bu * Du - Nu * Yu,
              Pu = bu * gu - Ou * Yu,
              ou = cu * Du - Nu * hu,
              ku = cu * gu - Ou * hu,
              mu = Nu * gu - Ou * Du,
              vu = Mu * mu - eu * ku + Gu * ou + pu * Pu - wu * au + Ju * du;
            if (!(Math.abs(vu) > 1e-12)) return !1;
            const Ku = 1 / vu;
            return ju[0] = (qu * mu - fu * ku + Cu * ou) * Ku, ju[1] = (Zu * ku - Uu * mu - Xu * ou) * Ku, ju[2] = (hu * Ju - Du * wu + gu * pu) * Ku, ju[3] = (Nu * wu - cu * Ju - Ou * pu) * Ku, ju[4] = (fu * Pu - lu * mu - Cu * au) * Ku, ju[5] = (su * mu - Zu * Pu + Xu * au) * Ku, ju[6] = (Du * Gu - Yu * Ju - gu * eu) * Ku, ju[7] = (bu * Ju - Nu * Gu + Ou * eu) * Ku, ju[8] = (lu * ku - qu * Pu + Cu * du) * Ku, ju[9] = (Uu * Pu - su * ku - Xu * du) * Ku, ju[10] = (Yu * wu - hu * Gu + gu * Mu) * Ku, ju[11] = (cu * Gu - bu * wu - Ou * Mu) * Ku, ju[12] = (qu * au - lu * ou - fu * du) * Ku, ju[13] = (su * ou - Uu * au + Zu * du) * Ku, ju[14] = (hu * eu - Yu * pu - Du * Mu) * Ku, ju[15] = (bu * pu - cu * eu + Nu * Mu) * Ku, !0
          }(Eu, ju, this.inverse)) return;
        const {
          view: su,
          viewAt: Uu
        } = this, Zu = ju;
        let Xu = 1 / 0,
          lu = 1 / 0,
          qu = -1 / 0,
          fu = -1 / 0,
          Cu = -1 / 0;
        const [bu, cu, Nu] = this.light;
        for (let Gu = 0; Gu < 8; Gu++) {
          const ju = 1 & Gu ? uu.hi[0] : uu.lo[0],
            Ou = 2 & Gu ? uu.hi[1] : uu.lo[1],
            Yu = 4 & Gu ? uu.hi[2] : uu.lo[2],
            hu = ju * Eu[Zu] + Ou * Eu[Zu + 4] + Yu * Eu[Zu + 8] + Eu[Zu + 12],
            Du = ju * Eu[Zu + 1] + Ou * Eu[Zu + 5] + Yu * Eu[Zu + 9] + Eu[Zu + 13],
            gu = ju * Eu[Zu + 2] + Ou * Eu[Zu + 6] + Yu * Eu[Zu + 10] + Eu[Zu + 14],
            Mu = su[Uu] * hu + su[Uu + 1] * Du + su[Uu + 2] * gu + su[Uu + 3],
            eu = su[Uu + 4] * hu + su[Uu + 5] * Du + su[Uu + 6] * gu + su[Uu + 7];
          Xu = Math.min(Xu, Mu), lu = Math.min(lu, eu), qu = Math.max(qu, Mu), fu = Math.max(fu, eu), Cu = Math.max(Cu, bu * hu + cu * Du + Nu * gu)
        }
        if (qu < -1 || fu < -1 || Xu >= 1 || lu >= 1) return;
        const Ou = this.parts++,
          Yu = this.rects;
        Yu[4 * Ou] = Sj(Xu), Yu[4 * Ou + 1] = Sj(lu), Yu[4 * Ou + 2] = Sj(qu), Yu[4 * Ou + 3] = Sj(fu);
        const hu = this.inverse,
          {
            cell: Du,
            dims: gu,
            lo: Mu
          } = uu,
          eu = vj + Ou * kj;
        for (let Gu = 0; Gu < 3; Gu++) this.floats[eu + 4 * Gu] = hu[Gu] / Du, this.floats[eu + 4 * Gu + 1] = hu[4 + Gu] / Du, this.floats[eu + 4 * Gu + 2] = hu[8 + Gu] / Du, this.floats[eu + 4 * Gu + 3] = (hu[12 + Gu] - Mu[Gu]) / Du;
        this.words[eu + 12] = uu.at, this.floats[eu + 13] = Cu + .001 * (1 + Math.abs(Cu)), this.words[eu + 14] = gu[0] | gu[1] << 8 | gu[2] << 16
      }
      finish() {
        const uu = Pj,
          {
            counts: Eu,
            rects: ju,
            words: su
          } = this;
        Eu.fill(0);
        let Uu = 0,
          Zu = 0;
        for (; Zu < this.parts; Zu++) {
          const su = 4 * Zu,
            Xu = (ju[su + 2] - ju[su] + 1) * (ju[su + 3] - ju[su + 1] + 1);
          if (Uu + Xu > 65536) break;
          Uu += Xu;
          for (let Uu = ju[su + 1]; Uu <= ju[su + 3]; Uu++)
            for (let Zu = ju[su]; Zu <= ju[su + 2]; Zu++) Eu[Uu * uu + Zu]++
        }
        let Xu = 0;
        for (let qu = 0; qu < 16384; qu++) su[qu] = Xu, Xu += Eu[qu], Eu[qu] = su[qu];
        su[16384] = Xu;
        for (let qu = 0; qu < Zu; qu++) {
          const Uu = 4 * qu;
          for (let Zu = ju[Uu + 1]; Zu <= ju[Uu + 3]; Zu++)
            for (let Xu = ju[Uu]; Xu <= ju[Uu + 2]; Xu++) su[mj + Eu[Zu * uu + Xu]++] = qu
        }
        const lu = this.floats;
        for (let qu = 0; qu < 16384; qu++) {
          const uu = mj + su[qu],
            Eu = uu + Math.min(su[qu + 1] - su[qu], 64);
          for (let ju = uu + 1; ju < Eu; ju++) {
            const Eu = su[ju],
              Uu = lu[81934 + Eu * kj];
            let Zu = ju - 1;
            for (; Zu >= uu && lu[81934 + su[Zu] * kj] < Uu; Zu--) su[Zu + 1] = su[Zu];
            su[Zu + 1] = Eu
          }
        }
        this.refs = Uu
      }
    }

    function Sj(uu) {
      return Math.min(127, Math.max(0, Math.floor((.5 * uu + .5) * Pj)))
    }

    function Ij(uu, Eu, ju, su, Uu) {
      for (let Zu = 0; Zu < 4; Zu++)
        for (let Xu = 0; Xu < 4; Xu++) Uu[4 * Zu + Xu] = uu[Eu + 4 * Zu] * ju[su + Xu] + uu[Eu + 4 * Zu + 1] * ju[su + 4 + Xu] + uu[Eu + 4 * Zu + 2] * ju[su + 8 + Xu] + uu[Eu + 4 * Zu + 3] * ju[su + 12 + Xu]
    }

    function Fj(uu, Eu, ju, su, Uu) {
      const Zu = uu[0] - Eu,
        Xu = uu[1] - ju,
        lu = uu[2] - su,
        qu = uu[3] - Eu,
        fu = uu[4] - ju,
        Cu = uu[5] - su,
        bu = uu[6] - Eu,
        cu = uu[7] - ju,
        Nu = uu[8] - su;
      if (Math.min(Zu, qu, bu) > Uu || Math.max(Zu, qu, bu) < -Uu) return !1;
      if (Math.min(Xu, fu, cu) > Uu || Math.max(Xu, fu, cu) < -Uu) return !1;
      if (Math.min(lu, Cu, Nu) > Uu || Math.max(lu, Cu, Nu) < -Uu) return !1;
      const Ou = qu - Zu,
        Yu = fu - Xu,
        hu = Cu - lu,
        Du = bu - qu,
        gu = cu - fu,
        Mu = Nu - Cu,
        eu = Yu * Mu - hu * gu,
        Gu = hu * Du - Ou * Mu,
        pu = Ou * gu - Yu * Du;
      if (Math.abs(eu * Zu + Gu * Xu + pu * lu) > Uu * (Math.abs(eu) + Math.abs(Gu) + Math.abs(pu))) return !1;
      const wu = [Ou, Yu, hu, Du, gu, Mu, Zu - bu, Xu - cu, lu - Nu];
      for (let Ju = 0; Ju < 3; Ju++) {
        const uu = wu[3 * Ju],
          Eu = wu[3 * Ju + 1],
          ju = wu[3 * Ju + 2];
        for (let su = 0; su < 3; su++) {
          const Ou = 0 === su ? 0 : 1 === su ? ju : -Eu,
            Yu = 0 === su ? -ju : 1 === su ? 0 : uu,
            hu = 0 === su ? Eu : 1 === su ? -uu : 0,
            Du = Ou * Zu + Yu * Xu + hu * lu,
            gu = Ou * qu + Yu * fu + hu * Cu,
            Mu = Ou * bu + Yu * cu + hu * Nu,
            eu = Uu * (Math.abs(Ou) + Math.abs(Yu) + Math.abs(hu));
          if (Math.min(Du, gu, Mu) > eu || Math.max(Du, gu, Mu) < -eu) return !1
        }
      }
      return !0
    }
    const Bj = new Float32Array(1);
    new Uint32Array(Bj.buffer);
    var Lj = ju(39101);

    function tj(uu) {
      const [Eu, ju, su] = Lj.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${uu.group}) @binding(${uu.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Eu-1}, ${ju-1}, ${su-1});\n}\n`
    }

    function xj(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Uu, Zu, Xu] = uj, [lu, qu, fu] = RE, Cu = Math.log2(zE), bu = su ? "var<private> bloxdSpCrossed: bool;\n" : "", cu = su ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${uu.group}) @binding(${uu.ac}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${uu.group}) @binding(${uu.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${ju?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${bu}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Mj}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${ej}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${ju?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Gj}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Uu}, ${Zu}, ${Xu});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Uu} * (s.y + ${Zu} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${lu}, ${qu}, ${fu}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Cu}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Zj}u) {\n\t\treturn named && state == ${Uj}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${qj}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Cj}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Eu?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Eu?`\t\tif (exits && step > 0 && step % ${Aj} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Cu}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${jj}u || kind == ${sj}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Uj}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${qj}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${cu}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Tj = {
      group: 0,
      uniform: 0,
      ac: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Hj() {
      const uu = Tj;
      return `${tj(uu)}${xj(uu,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Lj.b}>,\n}\n@group(${uu.group}) @binding(${uu.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${uu.group}) @binding(${uu.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Lj.j})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Lj.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Lj.f}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Aj = 2;
    const nj = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function yj(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const su = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Eu.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Uu = "trace" === ju || "lit" === ju,
        Zu = "maskEdge" === ju ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Xu = Uu ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Eu.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Eu.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===ju?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Zu};\n`;
      return `${su}${uu.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Uu?function(){const[uu,Eu,ju]=Lj.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${uu}.0, ${Eu}.0, ${ju}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Xu}}\n`:""}${uu.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Eu.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Eu.renderOffset});\n}\n`:""}`
    }
    const zj = "bloxdSpOwnTexture";

    function Rj(uu) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${uu.texture}) - 1u)))`
    }
    const us = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${mE.e.map((uu=>{let[Eu,ju]=uu;return`\tbloxdSpOut.${Eu} = (bloxdSpWord & ${ju}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Es(uu) {
      return `bloxdSpFlags(${uu})`
    }
    const ss = `${nE.i}.eyePosition`;

    function Us(uu, Eu, ju, su, Uu) {
      const Zu = uu.indexOf(Eu);
      if (Zu < 0 || uu.indexOf(Eu, Zu + 1) >= 0) throw new Error(`Lite's ${Uu} program changed at the shader pack ${su} hook: ${Zu<0?"no":"more than one"} anchor (lite/${Uu}ShaderPack.ts)`);
      return uu.slice(0, Zu) + ju + uu.slice(Zu + Eu.length)
    }

    function Zs(uu) {
      return uu.sunShadow || uu.airShadow
    }

    function Xs(uu, Eu) {
      return Eu && Zs(uu)
    }
    const ls = {
      group: nE.f,
      ...nE.o
    };

    function qs(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Zs(uu)) return "";
      if (Eu) {
        const Eu = ls,
          Uu = "trace" === ju || "lit" === ju;
        let Zu = "";
        uu.sunShadow && (Zu = Uu ? `${xj(Eu,!0,"lit"===ju)}${su=Eu,`@group(${su.group}) @binding(${su.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${su.group}) @binding(${su.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(uu, Eu, ju) {
          const su = `@group(${uu}) @binding(${Eu}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return ju ? `${su}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${nj}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((uu=>`\t{\n\t\tlet o = vec2i(${uu});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : su
        }(Eu.group, nE.q, "maskEdge" === ju));
        const Xu = {
          shadowDirection: `${nE.i}.shadowDirection`,
          renderOffset: `${nE.i}.renderOffset`,
          eyePosition: `${nE.i}.eyePosition`
        };
        return `${tj(Eu)}${Zu}${function(uu){const[Eu,ju,su]=Lj.o;return`@group(${uu.group}) @binding(${uu.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${uu.group}) @binding(${uu.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Eu}.0, ${ju}.0, ${su}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Eu)}${yj(uu,Xu,ju)}`
      }
      var su;
      return `${uu.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${uu.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function fs(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Eu) return "";
      const Zu = (Xu = "fragmentInputs.vPositionW", lu = uu.sunShadow ? {
        normal: ju,
        flags: su
      } : null, `\n\tbloxdSpShadowPosition = ${Xu};\n${lu?`\tbloxdSpShadowNormal = normalize(${lu.normal});\n\tbloxdSpShadowEmissive = (${lu.flags} & ${mE.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${lu.flags} & ${mE.h}u) != 0u;\n`:""}`);
      var Xu, lu;
      return uu.sunShadow && ("mask" === Uu || "maskEdge" === Uu) ? `${Zu}${qu="fragmentInputs.position",fu="maskEdge"===Uu,`\n\tbloxdSpShadowPixel = vec2i(${qu}.xy);\n${fu?`\tbloxdSpShadowZ = ${qu}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${qu}.z), dpdy(${qu}.z));\n`:""}`}` : Zu;
      var qu, fu
    }
    const Cs = "bloxdSpTextureRotation",
      bs = "bloxdSpTextureLayers",
      cs = `@group(${nE.f}) @binding(${nE.t}) var<storage, read> ${bs}: array<u32>;\n`;

    function Ns(uu) {
      return `\tvertexOutputs.vPackTexture = ${bs}[min(u32(${uu}), arrayLength(&${bs}) - 1u)];\n`
    }

    function Os(uu) {
      return void 0 !== uu.uv
    }

    function Ys(uu) {
      if (!uu) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Os(uu)) return function(uu) {
        const {
          texture: Eu,
          cells: ju,
          layers: su
        } = uu, Uu = `textureDimensions(${Eu}, bloxdSpLevel)`, Zu = ju ? `max(vec2u(vec2f(${Uu}) / ${ju}), vec2u(1u))` : Uu, Xu = ju ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Zu};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${ju}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${ju}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Eu}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Uu} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Zu};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Eu}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let lu;
        if (ju)
          if (1 === su.length) lu = `\treturn bloxdSpOwnTexel(${su[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const uu = su.length - 1;
            lu = `\tvar bloxdSpColour = bloxdSpOwnTexel(${su[uu]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Eu = uu - 1; Eu >= 0; Eu--) lu += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${su[Eu]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            lu += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else lu = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${uu.id?`var<private> ${zj}: u32;\n`:""}${Xu}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Rj(uu)};\n\treturn ${Zu};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${uu.id?zj:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Rj(uu)};\n${lu}}\n`
      }(uu);
      const Eu = uu,
        ju = uu => {
          const ju = uu > 0 ? `bloxdSpLayer - ${Eu.layers*uu}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${uu}, ${Eu.sampler}, bloxdSpTurned, ${ju}, round(bloxdSpMipLevel));`
        };
      let su = "";
      for (let Zu = 0; Zu < Eu.count - 1; Zu++) su += `\tif (bloxdSpLayer < ${Eu.layers*(Zu+1)}u) {\n\t\t${ju(Zu)}\n\t}\n`;
      const Uu = Eu.frame ? `${Eu.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Cs}: u32;\n${cs}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Cs} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Cs} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Cs} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Uu}${su}\t${ju(Eu.count-1)}\n}\n`
    }

    function hs(uu, Eu, ju) {
      return !!uu.surface && "bloxdDefaultSurface" !== uu.surface && function(uu, Eu) {
        return "liquid" === Eu || !uu
      }(Eu, ju)
    }

    function Ds(uu, Eu) {
      return uu.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Eu.vertexLocalPosition}, ${Es(Eu.vertexFlags)});\n\t\tlet bloxdSpVertex = ${uu.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function gs(uu, Eu, ju, su, Uu) {
      if (!uu.surface) return "";
      const Zu = (uu, Eu) => `\n\tlet bloxdSpTexelUV = ${uu};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Eu}) - 1u));`;
      let Xu = "",
        lu = "0u, 0u, vec2f(0.0), 0.0";
      const qu = su && Os(su) ? su : null,
        fu = su && !Os(su) ? su : null;
      if (qu) {
        Xu = `${qu.id?`\n\tlet bloxdSpTexture = ${qu.id};\n\t${zj} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${qu.uv};${Zu(function(uu,Eu){var ju;return`${null!==(ju=uu.levelUv)&&void 0!==ju?ju:uu.cells?`${Eu} / ${uu.cells}`:Eu} * vec2f(textureDimensions(${uu.texture}))`}(qu,"bloxdSpUv"),qu.texture)}`, lu = (qu.id ? `${zj}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else fu && (Xu = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Cs} = bloxdSpTexture >> 16u;${Zu(`fragmentInputs.vMainUV1 * ${(0,TE.fb)(fu.width)}`,"textureAtlas0")}`, lu = `bloxdSpTexture & 0xffffu, ${Cs}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Cu = Uu.overlayColour,
        bu = Cu ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        cu = "bloxdDefaultSurface" !== uu.surface || Cu ? `\n\tbaseColor = vec4f(${bu}, baseColor.a);` : "",
        Nu = hs(uu, Eu, ju) ? `\n\t${Uu.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Xu}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Uu.alpha}, ${Uu.enchantTier}, ${Uu.enchantColour}, ${Uu.enchantSpeed}, ${null!==Cu&&void 0!==Cu?Cu:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Uu.normal}, ${Uu.localPosition}, ${Es(Uu.flags)}, ${lu});\n\tlet bloxdSpSurface = ${uu.surface}(bloxdSpSurfaceIn);${cu}${Nu}\n`
    }
    const Ms = "bloxdSpLightIn";

    function es(uu, Eu, ju, su) {
      if (!uu.light) return "";
      const Uu = Eu ? `${TE.j}.rgb, ${TE.j}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${TE.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Zu,
          diffuse: Xu,
          emissive: lu,
          ambient: qu,
          fogColour: fu,
          fogAlpha: Cu,
          normal: bu
        } = su;
      return `\tvar ${Ms} = BloxdLightIn(vec3f(0.0), ${ju?Zu:"0.0"}, ${Xu}, ${lu}, ${qu}, ${Uu}, ${fu}, ${Cu}, fragmentInputs.vPositionW, ${bu}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Ms}.litColour = bloxdLitColour(bloxdSpSurface, ${Ms});\n`
    }

    function Gs(uu) {
      return uu.light ? `\n\t{\n\t\tlet bloxdSpLight = ${uu.light}(bloxdSpSurface, ${Ms});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const ps = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      ws = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      ds = "\treturn color;\n}",
      as = {
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
    const Ps = Object.freeze({});

    function os(uu) {
      var Eu;
      return !(null === (Eu = (0, yE.i)(uu)) || void 0 === Eu || !Eu.sceneDepth)
    }

    function ks(uu) {
      const Eu = (0, yE.i)(uu);
      return !!Eu && hs(Eu.hooks, Eu.strict, Eu.program)
    }

    function ms(uu, Eu, ju, su) {
      return Us(uu, Eu, ju, su, "terrain")
    }

    function vs(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Zu = function(uu) {
          return (0, yE.e)(uu.packVariant, uu.liquid ? "liquid" : "terrain")
        }(uu),
        {
          hooks: Xu
        } = Zu,
        lu = Xs(Zu, su),
        qu = "edge" === Uu ? "maskEdge" : "plain" === Uu ? "mask" : "trace",
        fu = Ds(Xu, as);
      fu && (Eu = ms(Eu, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${fu}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Cu = "atlas" === uu.texture ? {
          count: uu.atlasCount,
          layers: uu.atlasLayers,
          width: uu.I5,
          sampler: "atlasSampler",
          frame: uu.animated ? ju : null
        } : null,
        bu = `${Zu.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${fs(Zu,lu,as.normal,as.flags,qu)}${gs(Xu,Zu.strict,Zu.program,Cu,as)}`;
      bu && (Eu = ms(Eu, ps, `${ps.slice(0,-1)}${bu}`, "surface"));
      const cu = Gs(Xu);
      return cu && (Eu = ms(Eu, ws, `${es(Xu,uu.lighting,uu.dirLightCount>0,as)}${ws}`, "light input"), Eu = ms(Eu, ds, `${cu.slice(1)}${ds}`, "light")), `${(0,nE.z)()}${Zu.sceneDepth?`@group(${nE.f}) @binding(${nE.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${ss};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${qs(Zu,lu,qu)}${Ys(Cu)}${us}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Zu.code}${Eu}`
    }
    const Ks = pu.c.WGSL;

    function Vs(uu) {
      return void 0 !== uu.packVariant
    }
    const rs = {
        ZUu: 0,
        XUu: 4,
        lUu: 8,
        qUu: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Qs = rs.aoLevels + 4,
      is = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Ws = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      Ss = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Is = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Fs = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      Bs = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Ls = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      ts = 0,
      xs = 3,
      Ts = 4,
      Hs = 5,
      As = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${HE.d}, ${HE.d}, corner == 0u || corner == 3u);\n\tlet dv = select(-${HE.d}, ${HE.d}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      ns = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((uu=>AE.e>>uu&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const ys = {
      Tb: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: uu => `animDataPerTex[${uu}]`
    };

    function zs(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ys;
      return `\n\tlet atlasIdxIn = ${uu};\n\tlet animTick = ${ju.Tb};\n\tlet animTickStride = ${ju.stride};\n\tlet numAnimTextures = ${ju.count};\n\t${(0,wu.d)(pu.c.WGSL,ju.perTexture)}\n\t${Eu}animLayer;\n`
    }

    function Rs(uu) {
      const Eu = (Eu, ju) => {
        const su = Eu > 0 ? `fragmentInputs.texAtlasIndex - ${uu.atlasLayers.toFixed(1)} * ${Eu.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${ju?"textureSampleLevel":"textureSample"}(textureAtlas${Eu}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${su}))${ju?", atlasLod":""})`
      };
      if (1 === uu.atlasCount) return `baseColor = ${Eu(0,!1)};`;
      let ju = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,TE.fb)(uu.I5)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let su = 0; su < uu.atlasCount; su++) {
        const Uu = uu.atlasLayers * (su + 1) - .5;
        ju += `${su>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,TE.fb)(Uu)}) {\n\t\tbaseColor = ${Eu(su,!0)};\n\t}`
      }
      return ju
    }

    function uU(uu) {
      return `terrain-${uu.texture}${"atlas"===uu.texture?uu.atlasCount:""}${uu.animated?"-anim":""}${uu.alphaTest?"-test":""}${uu.lighting?"-lit":""}-dir${uu.dirLightCount}${uu.packed?"-packed":""}${Vs(uu)?`-sp${uu.packVariant}`:""}${uu.liquid?"-liquid":""}${uu.resting?"-rest":""}`
    }

    function EU(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const su = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const ju = "none" !== uu.texture,
          su = "atlas" === uu.texture,
          Uu = uu.dirLightCount > 0,
          Zu = Vs(uu);
        if (uu.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${uu.dirLightCount}`);
        let Xu = 1,
          lu = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (su) {
          uu.animated && (lu += `@group(2) @binding(${Xu++}) var<storage, read> animDataPerTex: array<f32>;\n`), lu += `@group(2) @binding(${Xu++}) var atlasSampler: sampler;\n`;
          for (let Eu = 0; Eu < uu.atlasCount; Eu++) lu += `@group(2) @binding(${Xu++}) var textureAtlas${Eu}: texture_2d_array<f32>;\n`
        } else "single" === uu.texture && (lu += `@group(2) @binding(${Xu++}) var diffuseSamplerSampler: sampler;\n`, lu += `@group(2) @binding(${Xu++}) var diffuseSampler: texture_2d<f32>;\n`);
        const qu = function(uu) {
            const Eu = Ls,
              ju = "none" !== uu.texture,
              su = "atlas" === uu.texture,
              Uu = Vs(uu);
            return uu.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${ju?"uv: vec2f,":""}\n\t${su?"texAtlasIndices: f32,":""}\n\t${uu.lighting?"aPackedLightLevels: f32,":""}\n\t${Uu?"blockFlagWords: vec2u,":""}\n}\n${As}\n${ns}\n${"single"===uu.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${ju?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===uu.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${su?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${uu.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Uu?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Eu.position}) position: vec3f,\n\t@location(${Eu.normal}) normal: vec4f,\n\t@location(${Eu.color}) color: vec4f,\n\t${ju?`@location(${Eu.uv}) uv: vec2f,`:""}\n\t${uu.lighting?`@location(${Eu.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Uu?`@location(${Eu.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(uu),
          fu = `\n${Is}\n${Ws}\n${Ss}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${lu}\n${hE}\n${qu.declarations}\nstruct Varyings {\n\t${"none"===Eu?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${uu.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Uu?"@location(5) vTerrainLambert: f32,":""}\n\t${ju?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${su?"@location(7) texAtlasIndex: f32,":""}\n\t${uu.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Zu?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Zu&&su?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${uu.resting?"":(0,TE.q)(Ks)}\n${Bs}\n\n@vertex\nfn mainVertex(${qu.parameter}) -> Varyings {\n\t${qu.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Zu?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${mE.c.placed}u;`:""}\n\t${Zu&&su?Ns("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${uu.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${ju?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${su?function(uu){return uu?zs("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(uu.animated):""}\n\t${"single"===uu.texture&&uu.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,TE.S)(Ks)}\n\t${(0,TE.z)(Ks,uu.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${uu.resting?"":Fs}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${su?Rs(uu):""}\n\t${"single"===uu.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ju?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${uu.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Uu?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${YE}));\n\t${Vs(uu)?(0,TE.$)(pu.c.WGSL):(0,TE.E)(Ks)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Cu = new Set;
        uu.lighting && Cu.add("BLOXD_LIGHTING");
        Uu && Cu.add("BLOXD_TERRAIN_DIRECTIONAL");
        return LE(fu, new Map([...Cu].map((uu => [uu, !0]))))
      }(uu, ju);
      if (!Vs(uu)) return su;
      const Uu = vs(uu, su, zs, Eu, ju);
      return "none" === ju ? Uu : `${Uu}${function(uu){const Eu="none"!==uu.texture&&uu.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${uu.resting?"":Fs}\n\t${uu.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Eu&&"atlas"===uu.texture?Rs(uu):""}\n\t${Eu&&"single"===uu.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Eu?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${mE.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(uu)}`
    }
    const jU = new Map([
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

    function sU(uu, Eu) {
      const ju = new Map;
      let su = 0;
      const Uu = [],
        Zu = [],
        Xu = [];
      for (const fu of Eu) {
        var lu, qu;
        const Eu = null !== (lu = fu.type.trim().split(/\s+/).pop()) && void 0 !== lu ? lu : fu.type,
          Cu = jU.get(Eu);
        if (!Cu) throw new Error(`Lite: no uniform layout for ${fu.name}: ${fu.type}`);
        const bu = null !== (qu = fu.arraySize) && void 0 !== qu ? qu : 0,
          cu = bu ? 4 : Cu.align;
        su = Math.ceil(su / cu) * cu;
        const Nu = bu ? 4 * Math.ceil(Cu.floats / 4) : Cu.floats;
        if (ju.set(fu.name, {
            offset: su,
            floats: Cu.floats,
            arraySize: bu,
            stride: Nu
          }), bu && Cu.floats <= 2) {
          const Eu = `${uu}_${Xu.length}_strided`;
          Zu.push(`struct ${Eu} {\n\t@size(16) el: ${Cu.wgsl},\n}`), Xu.push(fu.name), Uu.push(`\t@align(16) ${fu.name}: array<${Eu}, ${bu}>,`)
        } else bu ? Uu.push(`\t@align(16) ${fu.name}: array<${Cu.wgsl}, ${bu}>,`) : Uu.push(`\t${fu.name}: ${Cu.wgsl},`);
        su += bu ? Nu * bu : Cu.floats
      }
      return {
        slots: ju,
        floats: Math.max(4, 4 * Math.ceil(su / 4)),
        wgsl: `${Zu.join("\n")}\nstruct ${uu} {\n${Uu.join("\n")}\n}\n`,
        stridedArrays: Xu
      }
    }
    const UU = [{
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
      ZU = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      XU = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function lU(uu, Eu) {
      return `#if defined(${uu}) && ${uu}DIRECTUV == 0\nvarying v${Eu}UV: vec2f;\n#endif`
    }

    function qU(uu, Eu, ju) {
      return `#if defined(${uu}) && ${uu}DIRECTUV == 0\nif (uniforms.v${Eu}Infos.x==0.)\n{vertexOutputs.v${Eu}UV= (uniforms.${ju}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Eu}UV= (uniforms.${ju}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function fU(uu, Eu, ju) {
      return `#ifdef ${uu}\n#if ${uu}DIRECTUV == 1\n#define v${Eu}UV vMainUV1\n#elif ${uu}DIRECTUV == 2\n#define v${Eu}UV vMainUV2\n#else\nvarying v${Eu}UV: vec2f;\n#endif\nvar ${ju}SamplerSampler: sampler;\nvar ${ju}Sampler: texture_2d<f32>;\n#endif`
    }
    const CU = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      bU = 256,
      cU = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      NU = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      OU = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      YU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      hU = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      DU = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      gU = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      MU = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${NU}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${lU("OPACITY","Opacity")}\n${lU("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${gU}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${OU}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${qU("OPACITY","Opacity","opacity")}\n${qU("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${YU}\n#define CUSTOM_VERTEX_MAIN_END\n${hU}\n}\n`;
    const eU = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${fU("OPACITY","Opacity","opacity")}\n${fU("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${gU}\n${DU}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((uu,Eu)=>function(uu){const Eu=`
    frame.lights[LITE_LIGHT$ {
        uu
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      uu
    }\
    nvar diffuse$ {
      uu
    }: vec4f = $ {
      Eu
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      uu
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Eu
    }.vLightData, diffuse$ {
      uu
    }.rgb, $ {
      Eu
    }.vLightSpecular.rgb, diffuse$ {
      uu
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Eu))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, GU = /^([gimus]+)!/, pU = new Set;

    function wU(uu) {
      pU.has(uu) || (pU.add(uu), console.warn(`Lite: no place for plugin code at ${uu} in the standard shader: it is left out`))
    }

    function JU(uu, Eu) {
      let ju = uu;
      const su = new Map;
      for (const [Zu, Xu] of Eu) {
        var Uu;
        su.set(Zu, `${null!==(Uu=su.get(Zu))&&void 0!==Uu?Uu:""}${Xu}\n`)
      }
      for (const [Zu, Xu] of su) {
        if (!Zu.startsWith("!")) {
          const uu = `#define ${Zu}`;
          if (!ju.includes(uu)) {
            wU(Zu);
            continue
          }
          ju = ju.replace(uu, (() => `\n${Xu}\n${uu}`));
          continue
        }
        let uu = Zu.substring(1),
          Eu = "g";
        if (uu.startsWith("!")) Eu = "", uu = uu.substring(1);
        else {
          const ju = GU.exec(uu);
          ju && (Eu = ju[1], uu = uu.substring(Eu.length + 1))
        }
        const su = new RegExp(uu, Eu.includes("g") ? Eu : `${Eu}g`);
        let Uu = su.exec(ju);
        for (Uu || wU(Zu); Uu;) {
          const uu = Uu,
            Eu = Xu.replace(/\$(\d+)/g, ((Eu, ju) => Number(ju) < uu.length ? uu[Number(ju)] : ""));
          ju = ju.substring(0, uu.index) + Eu + ju.substring(uu.index + uu[0].length), su.lastIndex = uu.index + Eu.length, Uu = su.exec(ju)
        }
      }
      return ju
    }
    const dU = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      aU = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      PU = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function oU(uu) {
      const Eu = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let ju = uu.replace(dU, ((uu, ju, su, Uu, Zu, Xu) => ("attribute" === ju ? Eu.attributes.push({
        name: Zu,
        type: Xu
      }) : void 0 === ju ? Eu.varyings.push({
        name: Zu,
        type: Xu,
        interpolation: mU(Xu, su, Uu)
      }) : Eu.uniforms.push({
        name: Zu,
        type: kU(Xu)
      }), "")));
      return ju = ju.replace(aU, ((uu, ju) => (Eu.samplers.add(ju), ""))), ju = ju.replace(PU, ((uu, ju, su) => (Eu.textures.push({
        name: ju,
        type: su
      }), ""))), Eu.body = ju, Eu
    }

    function kU(uu) {
      const Eu = uu.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        ju = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Eu);
      if (!ju) throw new Error(`Lite: unsupported uniform type ${uu}`);
      return ju
    }

    function mU(uu, Eu, ju) {
      return void 0 === Eu && void 0 === ju ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(uu.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Eu ? "@interpolate(flat) " : `@interpolate(${null!==Eu&&void 0!==Eu?Eu:"perspective"}, ${null!==ju&&void 0!==ju?ju:"center"}) `
    }

    function vU(uu) {
      return QU({
        defines: uu.defines,
        vertex: JU(MU, uu.vertexCode),
        fragment: JU(eU, uu.fragmentCode),
        members: [...UU, ...uu.defines.has("OPACITY") ? ZU : [], ...uu.defines.has("EMISSIVE") ? XU : [], ...uu.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function KU(uu) {
      const Eu = uu.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Eu === uu) throw new Error("Lite: fragment main has no return");
      return Eu
    }
    const VU = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${NU}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${OU}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${YU}\n${hU}\n}\n`,
      rU = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${DU}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function QU(uu) {
      const Eu = uu.defines,
        ju = oU(LE(uu.vertex, Eu)),
        su = oU(LE(uu.fragment, Eu)),
        Uu = new Map;
      for (const Mu of [...ju.varyings, ...su.varyings]) Uu.has(Mu.name) || Uu.set(Mu.name, Mu);
      const Zu = [...Uu.values()].map(((uu, Eu) => `\t@location(${Eu}) ${uu.interpolation}${uu.name}: ${uu.type},`)),
        Xu = [...uu.members];
      for (const Mu of [...ju.uniforms, ...su.uniforms]) Xu.some((uu => uu.name === Mu.name)) || Xu.push(Mu);
      const lu = sU(uu.structName, Xu),
        qu = [],
        fu = [];
      let Cu = 1;
      const bu = new Set;
      for (const Mu of [...ju.textures, ...su.textures]) {
        if (bu.has(Mu.name)) continue;
        bu.add(Mu.name);
        const uu = `${Mu.name}Sampler`,
          Eu = Cu++,
          ju = Cu++,
          su = Mu.type.startsWith("texture_2d_array") ? "2d-array" : Mu.type.startsWith("texture_cube") ? "cube" : "2d";
        qu.push({
          name: Mu.name,
          binding: Eu,
          samplerBinding: ju,
          dimension: su
        }), fu.push(`@group(2) @binding(${Eu}) var ${Mu.name}: ${Mu.type};`), fu.push(`@group(2) @binding(${ju}) var ${uu}: sampler;`)
      }
      for (const Mu of [...ju.samplers, ...su.samplers])
        if (!bu.has(Mu.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Mu} has no texture`);
      const cu = [Is, cU, lu.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${uu.structName};`, ...fu].join("\n"),
        Nu = ju.attributes,
        Ou = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...ju.attributes.map(((uu, Eu) => `\t@location(${Eu}) ${uu.name}: ${uu.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Yu = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Zu, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        hu = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...su.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Zu, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", hE, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${YE}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Du = uu => {
          for (const Eu of lu.stridedArrays) uu = uu.replace(new RegExp(`\\b${Eu}\\s*\\[(.*?)\\]`, "g"), `${Eu}[$1].el`);
          return uu
        };
      return {
        vertex: `${cu}\n${Ou}\n${Yu}\n${Du(ju.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${cu}\n${hu}\n${KU((gu=Du(su.body),gu.includes("fragmentInputs.position")?gu.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):gu))}`,
        attributes: Nu,
        material: lu,
        textures: qu
      };
      var gu
    }
    const iU = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      WU = uu => ({
        name: uu,
        type: "vec3"
      }),
      SU = uu => ({
        name: uu,
        type: "float"
      }),
      IU = sU("EarthSkyUniforms", [WU("viewFrom"), SU("exposureScale"), WU("zenithOffset"), SU("fogOn"), WU("up"), SU("ditherOn"), WU("sun"), SU("turbidity"), WU("tint"), SU("rayleigh"), WU("sunDir"), SU("mieStrength"), WU("inScatterR"), SU("mieFocus"), WU("inScatterM"), SU("sunE"), WU("extinctionBeta"), SU("sunsetMix"), SU("mieScale"), SU("mieBase"), SU("mieSlope"), SU("sunDiscE"), SU("exposure")]),
      FU = `${Is}\n${cU}\n${IU.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      BU = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${iU.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      LU = `\n${hE}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(SE).map((uu=>{let[Eu,ju]=uu;return`const TONE_${Eu}: f32 = ${ju};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${IE};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${YE}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var tU = ju(37488);
    const xU = new tU.dO,
      TU = new tU.dO,
      HU = new tU.Quaternion,
      AU = new Float64Array(3),
      nU = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      yU = new Float64Array(16);

    function zU(uu, Eu, ju) {
      const su = ju.worldMatrix;
      var Uu;
      uu.updateFloat3("viewFrom", su[12], su[13], su[14]), uu.updateFloatsFrom("zenithOffset", Eu.cameraOffset, 0, 3), uu.updateFloatsFrom("up", Eu.up, 0, 3), Eu.luminance > 0 && (uu.updateFloat("exposure", Eu.luminance), uu.updateFloat("exposureScale", (Uu = Eu.luminance, Math.log2(2 / Math.pow(Uu, 4))))), uu.updateFloat("turbidity", Eu.turbidity), uu.updateFloat("rayleigh", Eu.rayleigh), uu.updateFloat("mieStrength", Eu.mieCoefficient), uu.updateFloat("mieFocus", Eu.mieDirectionalG), uu.updateFloatsFrom("tint", Eu.tint, 0, 3), uu.updateFloat("fogOn", Eu.fog && ju.fogEnabled && 0 !== ju.fogMode ? 1 : 0), uu.updateFloat("ditherOn", Eu.dithering ? 1 : 0);
      const Zu = Eu.sunPosition;
      if (xU.set(Zu[0], Zu[1], Zu[2]), !Eu.useSunPosition) {
        const uu = Math.PI * (Eu.inclination - .5),
          ju = 2 * Math.PI * (Eu.azimuth - .5);
        xU.set(Eu.distance * Math.cos(ju) * Math.cos(uu), Eu.distance * Math.sin(-uu), Eu.distance * Math.sin(ju) * Math.cos(uu)), tU.Quaternion.FromUnitVectorsToRef(tU.dO.UpReadOnly, TU.set(Eu.up[0], Eu.up[1], Eu.up[2]), HU), xU.rotateByQuaternionToRef(HU, xU)
      }
      uu.updateVector3("sun", xU), AU[0] = xU.x, AU[1] = xU.y, AU[2] = xU.z;
      const Xu = WE(Eu, AU, nU);
      uu.updateFloatsFrom("sunDir", Xu.sunDir, 0, 3), uu.updateFloat("sunE", Xu.sunE), uu.updateFloatsFrom("inScatterR", Xu.inScatterR, 0, 3), uu.updateFloatsFrom("inScatterM", Xu.inScatterM, 0, 3), uu.updateFloatsFrom("extinctionBeta", Xu.extinctionBeta, 0, 3), uu.updateFloat("sunsetMix", Xu.sunsetMix), uu.updateFloat("sunDiscE", Xu.sunDiscE), uu.updateFloat("mieScale", Xu.mieScale), uu.updateFloat("mieBase", Xu.mieBase), uu.updateFloat("mieSlope", Xu.mieSlope)
    }

    function RU(uu, Eu) {
      const ju = yU;
      ju[0] = Eu.far, ju[5] = Eu.far, ju[10] = Eu.far, ju[15] = 1;
      const su = uu.infiniteDistance;
      for (let Uu = 0; Uu < 3; Uu++) ju[12 + Uu] = uu.position[Uu] + (su ? Eu.worldMatrix[12 + Uu] : 0);
      return yU
    }
    class uZ {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(uu, Eu, ju, su, Uu) {
        ju !== this.pipeline && (uu.setPipeline(ju), this.pipeline = ju), uu.setBindGroup(1, su, [Uu]);
        const Zu = Eu.material.bindGroup;
        Zu !== this.materialGroup && (uu.setBindGroup(2, Zu), this.materialGroup = Zu);
        const Xu = Eu.program.packGroup;
        Xu && Xu !== this.packGroup && (uu.setBindGroup(nE.f, Xu), this.packGroup = Xu);
        const {
          vertexBuffers: lu,
          vertexOffsets: qu
        } = this;
        for (let fu = 0; fu < Eu.vertexBuffers.length; fu++) lu[fu] === Eu.vertexBuffers[fu] && qu[fu] === Eu.vertexOffsets[fu] || (uu.setVertexBuffer(fu, Eu.vertexBuffers[fu], Eu.vertexOffsets[fu]), lu[fu] = Eu.vertexBuffers[fu], qu[fu] = Eu.vertexOffsets[fu]);
        Eu.indexBuffer && Eu.indexBuffer !== this.indexBuffer && (uu.setIndexBuffer(Eu.indexBuffer, Eu.indexFormat), this.indexBuffer = Eu.indexBuffer)
      }
    }
    class EZ {
      constructor(uu, Eu, ju, su) {
        this.modelMeshes = uu, this.m_ = Eu, this.maker = ju, this.warnOnce = su, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (uu, Eu) => {
          (Eu < -1 || Eu > 1) && this.warnOnce(`group:${Eu}`, `rendering group ${Eu} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(uu) {
        this.collectGroup(uu, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(uu, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(uu, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.m_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(jZ), this.transparentDraws.sort(sZ)
      }
      collectGroup(uu, Eu, ju, su, Uu) {
        const Zu = this.modelMeshes.group(Eu),
          Xu = this.m_.group(Eu),
          lu = 0 === Eu ? null === Xu || void 0 === Xu ? void 0 : Xu.opaque : void 0;
        this.collectList(uu, null === Zu || void 0 === Zu ? void 0 : Zu.opaque, lu || null === Xu || void 0 === Xu ? void 0 : Xu.opaque, Eu, !1, ju, Uu), lu && (this.m_.drawn += this.maker.bundleDraws(uu, lu, Eu)), this.collectList(uu, null === Zu || void 0 === Zu ? void 0 : Zu.alphaTest, void 0, Eu, !1, ju, Uu), this.collectList(uu, null === Zu || void 0 === Zu ? void 0 : Zu.transparent, null === Xu || void 0 === Xu ? void 0 : Xu.transparent, Eu, !0, su, Uu)
      }
      collectList(uu, Eu, ju, su, Uu, Zu, Xu) {
        var lu;
        const qu = Zu.length;
        Eu && this.maker.pushDraws(uu, Eu.units, Eu.units.length, su, Uu, Zu, Eu.rows), ju && (this.m_.drawn += this.maker.pushDraws(uu, ju, ju.length, su, Uu, Zu));
        const fu = Uu ? null === (lu = this.modelMeshes.group(su)) || void 0 === lu ? void 0 : lu.text : void 0;
        fu && this.maker.pushDraws(uu, fu.units, fu.units.length, su, !0, Zu, fu.rows), Xu && UZ(Zu, qu)
      }
    }

    function jZ(uu, Eu) {
      return uu.program.id - Eu.program.id || uu.material.owner.uniqueId - Eu.material.owner.uniqueId
    }

    function sZ(uu, Eu) {
      return uu.material.owner.uniqueId - Eu.material.owner.uniqueId
    }

    function UZ(uu, Eu) {
      for (let ju = Eu + 1; ju < uu.length; ju++) {
        const su = uu[ju];
        let Uu = ju - 1;
        for (; Uu >= Eu && sZ(uu[Uu], su) > 0; Uu--) uu[Uu + 1] = uu[Uu];
        uu[Uu + 1] = su
      }
    }
    const ZZ = {};

    function XZ(uu) {
      return uu.hasThinInstances ? "thin" : uu.fUu || uu._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function lZ(uu, Eu, ju) {
      return uu ? (ju._needUVs = !0, uu.optimizeUVAllocation && (0, Pu.F)(uu.matrix) ? (ju[`${Eu}DIRECTUV`] = uu.uvSet + 1, ju[`MAINUV${uu.uvSet+1}`] = !0) : ju[`${Eu}DIRECTUV`] = 0, !0) : (ju[`${Eu}DIRECTUV`] = 0, !1)
    }

    function qZ(uu) {
      const Eu = new Map;
      for (const ju in uu) {
        if (95 === ju.charCodeAt(0)) continue;
        const su = uu[ju],
          Uu = typeof su;
        "number" === Uu || "string" === Uu ? Eu.set(ju, String(su)) : su && "function" !== Uu && Eu.set(ju, !0)
      }
      return Eu
    }

    function fZ(uu) {
      const Eu = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: ju
        }
        of uu.features)
        for (const uu in ju) Eu[uu] = ju[uu];
      return Eu
    }

    function CZ(uu) {
      const Eu = uu.parts.geometry;
      return null !== Eu && void 0 !== Eu && Eu.live ? Eu : null
    }

    function bZ(uu) {
      var Eu;
      return null !== (Eu = CZ(uu)) && void 0 !== Eu ? Eu : ZZ
    }
    class cZ {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = uu, this.warnOnce = Eu, this.programWithModel = ju, this.packFailed = su, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(uu, Eu, ju, su, Uu) {
        const Zu = Eu.owner;
        let Xu = this.drawStates.get(Eu);
        if (!Xu) {
          const uu = Eu.parts.materials[Eu.range];
          if (!uu) return this.warnOnce("model", `${ju.name} on ${Zu.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Xu = {
            defines: fZ(uu),
            model: uu,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Uu,
            groupId: su,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Eu, Xu)
        }
        if (this.programCurrent(Xu, Eu, Uu, su)) return Xu.program;
        const {
          model: lu
        } = Xu, qu = bZ(Eu), fu = this.instanceLayout(Zu, Uu), Cu = this.definesBits(Zu);
        if (!this.prepareModelDefines(uu, Zu, lu, Xu.defines, su, Uu)) return null;
        Xu.instancing = Uu, Xu.groupId = su, Xu.modelVersion = lu.version, Xu.geometry = qu, Xu.instanceLayout = fu, Xu.definesBits = Cu;
        const bu = function(uu) {
          let Eu = "";
          for (const [ju, su] of uu) Eu += !0 === su ? `${ju};` : `${ju}=${su};`;
          return Eu
        }(qZ(Xu.defines));
        return bu === Xu.definesKey && Xu.packVariant === this.modelPackVariant && Xu.program && !this.packFailed(Xu.program) || (Xu.definesKey = bu, Xu.packVariant = this.modelPackVariant, Xu.program = this.programWithModel(lu, Xu.defines, bu)), Xu.program
      }
      programCurrent(uu, Eu, ju, su) {
        return null !== uu.program && !this.packFailed(uu.program) && uu.instancing === ju && uu.groupId === su && this.definesHold(uu, Eu, ju)
      }
      definesHold(uu, Eu, ju) {
        return uu.modelVersion === uu.model.version && uu.geometry === bZ(Eu) && uu.instanceLayout === this.instanceLayout(Eu.owner, ju) && uu.definesBits === this.definesBits(Eu.owner) && uu.packVariant === this.modelPackVariant
      }
      modelPackKind(uu) {
        var Eu;
        return 0 === this.modelPackVariant ? null : null !== (Eu = (0, du.z)(uu, Ju.h.name)) && void 0 !== Eu && Eu.active ? "placed" : uu.item ? "item" : uu.lifeform ? "lifeform" : uu.box ? "box" : null
      }
      instanceLayout(uu, Eu) {
        var ju, su, Uu;
        return "thin" === Eu ? null !== (Uu = this.resources.E_.get(uu)) && void 0 !== Uu ? Uu : null : "instanced" === Eu && null !== (ju = null === (su = uu._userInstancedBuffersStorage) || void 0 === su ? void 0 : su.interleavedKinds) && void 0 !== ju ? ju : null
      }
      definesBits(uu) {
        const Eu = this.view;
        return (uu.visibility < 1 ? 1 : 0) | (uu.hasVertexAlpha ? 2 : 0) | (uu.applyFog ? 4 : 0) | (uu.useVertexColors ? 8 : 0) | (uu.nonUniformScaling ? 16 : 0) | (Eu.fogEnabled && 0 !== Eu.fogMode ? 32 : 0) | (Eu.lightsEnabled ? 64 : 0) | Eu.lightCount << 7
      }
      prepareLightDefines(uu, Eu, ju) {
        let su = 0;
        if (this.view.lightsEnabled && !Eu) {
          const Eu = Math.min(ju, 4);
          for (; su < this.view.lightCount && (uu[`LIGHT${su}`] = !0, uu[`LITE_LIGHT${su}_SLOT`] = su, su++, uu._needNormals = !0, su !== Eu););
        }
        for (let Uu = su; Uu < 4; Uu++) uu[`LIGHT${Uu}`] = !1, uu[`LITE_LIGHT${Uu}_SLOT`] = void 0
      }
      prepareModelDefines(uu, Eu, ju, su, Uu, Zu) {
        const {
          features: Xu
        } = ju;
        su._needNormals = !1, su._needUVs = !1;
        const lu = this.view;
        this.prepareLightDefines(su, ju.disableLighting, ju.maxSimultaneousLights), su.MAINUV1 = !1, su.MAINUV2 = !1;
        const qu = ju.diffuseTexture;
        qu ? (su._needUVs = !0, su.DIFFUSE = !0, qu.optimizeUVAllocation && (0, Pu.F)(qu.matrix) ? (su.DIFFUSEDIRECTUV = qu.uvSet + 1, su[`MAINUV${qu.uvSet+1}`] = !0) : su.DIFFUSEDIRECTUV = 0, qu.uvSet > 1 && this.warnOnce(`uvset:${ju.name}`, `${ju.name} samples UV set ${qu.uvSet+1}, which is not supported`)) : (su.DIFFUSE = !1, su.DIFFUSEDIRECTUV = 0);
        const fu = ju.opacityTexture,
          Cu = ju.emissiveTexture;
        su.OPACITY = lZ(fu, "OPACITY", su), su.OPACITYRGB = null !== fu && fu.getAlphaFromRGB, su.EMISSIVE = lZ(Cu, "EMISSIVE", su), (fu && fu.uvSet > 1 || Cu && Cu.uvSet > 1) && this.warnOnce(`uvset:${ju.name}`, `${ju.name} samples a UV set past 2, which is not supported`);
        const bu = ju.reflectionTexture,
          cu = null !== bu;
        if (cu) {
          if (!this.resources.boundTexture(bu)) return !1;
          su._needNormals = !0
        }
        su.REFLECTION = cu, su.REFLECTIONMAP_3D = cu, su.REFLECTIONMAP_SKYBOX = cu, su.REFLECTIONMAP_OPPOSITEZ = cu && (uu.useRightHandedSystem ? !bu.invertZ : bu.invertZ), su.ROUGHNESS = cu && ju.roughness > 0, su.REFLECTIONOVERALPHA = cu && ju.useReflectionOverAlpha, su.LITE_REFLECTION_LUMINANCE = cu && "cube" === bu.source.kind && bu.source.luminance, (Eu.skeleton || Eu.morphTargetManager) && this.warnOnce(`skin:${Eu.name}`, `${Eu.name} has bones or morph targets, which are not supported`), su.FOG = ju.fogEnabled && Eu.applyFog && lu.fogEnabled && 0 !== lu.fogMode, su.NONUNIFORMSCALING = Eu.nonUniformScaling;
        const {
          visibility: Nu,
          hasVertexAlpha: Ou
        } = Eu;
        su.ALPHATEST = (0, du.W)(ju, Nu, Ou), su.ALPHAFROMDIFFUSE = (0, du.fb)(ju), su.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== ju.transparencyMode, su.ALPHABLEND = null === ju.transparencyMode || (0, du.S)(ju, Nu, Ou), su.PREMULTIPLYALPHA = 7 === ju.alphaMode || 8 === ju.alphaMode, su.EMISSIVEASILLUMINATION = ju.useEmissiveAsIllumination, su.LINKEMISSIVEWITHDIFFUSE = ju.linkEmissiveWithDiffuse, su.TWOSIDEDLIGHTING = !ju.backFaceCulling && ju.twoSidedLighting, su.INSTANCES = "none" !== Zu, su.THIN_INSTANCES = "thin" === Zu, su.LITE_FRONT_LAYER = Uu >= 1;
        for (const {
            feature: wu,
            state: Ju,
            active: du
          }
          of Xu) {
          var Yu, hu;
          if (du) null === (Yu = (hu = (0, KE.h)(wu)).prepareDefinesBeforeAttributes) || void 0 === Yu || Yu.call(hu, Ju, su, uu, Eu)
        }
        this.modelPackKind(ju) && (su._needNormals = !0), su.NORMAL = su._needNormals && Eu.isVerticesDataPresent("normal"), su.UV1 = su._needUVs && Eu.isVerticesDataPresent("uv"), su.UV2 = su._needUVs && Eu.isVerticesDataPresent("uv2");
        const Du = Eu.useVertexColors && Eu.isVerticesDataPresent("color");
        su.VERTEXCOLOR = Du, su.VERTEXALPHA = Eu.hasVertexAlpha && Du, su.INSTANCESCOLOR = "none" !== Zu && Eu.isVerticesDataPresent("instanceColor");
        for (const {
            feature: wu,
            state: Ju,
            active: du
          }
          of Xu) {
          var gu, Mu;
          if (du) null === (gu = (Mu = (0, KE.h)(wu)).prepareDefines) || void 0 === gu || gu.call(Mu, Ju, su, uu, Eu, ju)
        }
        const eu = uu.wO();
        for (const {
            feature: wu,
            state: Ju,
            active: du
          }
          of Xu) {
          var Gu, pu;
          if (du && !1 === (null === (Gu = (pu = (0, KE.h)(wu)).isReadyForSubMesh) || void 0 === Gu ? void 0 : Gu.call(pu, Ju, su, uu, eu))) return !1
        }
        return !0
      }
    }

    function NZ(uu, Eu, ju) {
      return uu.codeVersion !== Eu.version && function(uu, Eu) {
        const ju = [],
          su = [];
        for (const {
            feature: cu,
            state: Nu,
            active: Ou
          }
          of Eu.features) {
          var Uu, Zu, Xu, lu;
          if (Ou) OZ(null === (Uu = (Zu = (0, KE.h)(cu)).getCustomCode) || void 0 === Uu ? void 0 : Uu.call(Zu, Nu, "vertex", pu.c.WGSL), ju), OZ(null === (Xu = (lu = (0, KE.h)(cu)).getCustomCode) || void 0 === Xu ? void 0 : Xu.call(lu, Nu, "fragment", pu.c.WGSL), su)
        }
        const qu = [];
        for (const {
            feature: cu,
            state: Nu
          }
          of Eu.features) {
          var fu, Cu;
          const uu = null === (fu = (Cu = (0, KE.h)(cu)).getUniforms) || void 0 === fu ? void 0 : fu.call(Cu, Nu, pu.c.WGSL);
          for (const Eu of null !== (bu = null === uu || void 0 === uu ? void 0 : uu.ubo) && void 0 !== bu ? bu : []) {
            var bu;
            Eu.size && Eu.type && qu.push({
              name: Eu.name,
              type: Eu.type,
              arraySize: Eu.arraySize
            })
          }
        }
        uu.vertexCode = ju, uu.fragmentCode = su, uu.pluginUniforms = qu, uu.codeKey = JSON.stringify([ju, su, qu]), uu.codeVersion = Eu.version
      }(uu, Eu), `${ju}#${uu.codeKey}`
    }

    function OZ(uu, Eu) {
      if (uu)
        for (const ju in uu) uu[ju] && Eu.push([ju, uu[ju]])
    }
    const YZ = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class hZ {
      constructor(uu) {
        this.warnOnce = uu, this.states = new Map
      }
      renderState(uu, Eu, ju, su) {
        var Uu;
        let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Xu = null !== (Uu = uu.sideOrientation) && void 0 !== Uu ? Uu : Eu.sideOrientation;
        Eu._getWorldMatrixDeterminant() < 0 && (Xu = 0 === Xu ? 1 : 0);
        const lu = "triangle-list" === Zu,
          qu = ju ? uu.alphaMode : 0,
          fu = (!ju || (0 === qu || uu.forceDepthWrite)) && !uu.disableDepthWrite,
          Cu = lu && uu.backFaceCulling ? uu.cullBackFaces ? "back" : "front" : "none",
          bu = lu && 0 !== Xu ? "ccw" : "cw",
          cu = uu.depthFunction,
          Nu = lu ? uu.zOffset : 0,
          Ou = lu ? uu.zOffsetUnits : 0,
          Yu = !uu.disableColorWrite;
        return su && su.alphaMode === qu && su.depthWrite === fu && su.depthFunction === cu && su.cullMode === Cu && su.frontFace === bu && su.zOffset === Nu && su.zOffsetUnits === Ou && su.colourWrite === Yu && su.topology === Zu ? su : this.stateFor(qu, fu, cu, Cu, bu, Nu, Ou, Yu, Zu)
      }
      stateFor(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = `${uu}|${Eu}|${ju}|${su}|${Uu}|${Zu}|${Xu}|${lu}|${qu}`;
        let Cu = this.states.get(fu);
        if (!Cu) {
          var bu;
          const cu = uu ? ZE(uu) : null;
          uu && !cu && this.warnOnce(`alpha:${uu}`, `alpha mode ${uu} is not supported`), Cu = {
            key: fu,
            alphaMode: uu,
            depthFunction: ju,
            zOffset: Zu,
            zOffsetUnits: Xu,
            topology: qu,
            blend: cu,
            depthWrite: Eu,
            depthCompare: ju && null !== (bu = YZ.get(ju)) && void 0 !== bu ? bu : null,
            cullMode: su,
            frontFace: Uu,
            depthBias: -Xu,
            depthBiasSlopeScale: -Zu,
            colourWrite: lu
          }, this.states.set(fu, Cu)
        }
        return Cu
      }
    }
    var DZ = ju(37830);

    function gZ(uu) {
      if (!uu.frozen) return -1;
      let Eu = uu.version;
      for (const {
          feature: ju,
          state: su,
          active: Uu
        }
        of uu.features) {
        if (!Uu || !ju.bind) continue;
        const uu = (0, KE.h)(ju).uniformsVersion;
        if (!uu) return -1;
        Eu += uu(su)
      }
      return Eu
    }
    class MZ {
      constructor(uu, Eu, ju) {
        this.slots = uu, this.data = Eu, this.textures = ju, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(uu, Eu) {
        this.write4(uu, Eu, 0, 0, 0, 1)
      }
      updateFloat2(uu, Eu, ju) {
        this.write4(uu, Eu, ju, 0, 0, 2)
      }
      updateFloat3(uu, Eu, ju, su) {
        this.write4(uu, Eu, ju, su, 0, 3)
      }
      updateFloat4(uu, Eu, ju, su, Uu) {
        this.write4(uu, Eu, ju, su, Uu, 4)
      }
      updateVector3(uu, Eu) {
        this.write4(uu, Eu.x, Eu.y, Eu.z, 0, 3)
      }
      updateVector4(uu, Eu) {
        this.write4(uu, Eu.x, Eu.y, Eu.z, Eu.w, 4)
      }
      updateColor3(uu, Eu) {
        this.write4(uu, Eu.r, Eu.g, Eu.b, 0, 3)
      }
      updateColor4(uu, Eu, ju) {
        this.write4(uu, Eu.r, Eu.g, Eu.b, ju, 4)
      }
      updateFloatsFrom(uu, Eu, ju, su) {
        const Uu = this.slots.get(uu);
        if (!Uu) return;
        const Zu = this.data,
          Xu = Uu.offset;
        for (let lu = 0; lu < su; lu++) Zu[Xu + lu] = Eu[ju + lu]
      }
      updateFloat3TimesFloats(uu, Eu, ju, su) {
        const Uu = this.slots.get(uu);
        if (!Uu) return;
        const Zu = this.data,
          Xu = Uu.offset;
        Zu[Xu] = Eu[ju] * su[0], Zu[Xu + 1] = Eu[ju + 1] * su[1], Zu[Xu + 2] = Eu[ju + 2] * su[2]
      }
      y_(uu, Eu) {
        const ju = this.slots.get(uu);
        ju && this.data.set(Eu.m, ju.offset)
      }
      updateMatrixFloats(uu, Eu) {
        const ju = this.slots.get(uu);
        ju && this.data.set(Eu, ju.offset)
      }
      updateFloatArray(uu, Eu) {
        const ju = this.slots.get(uu);
        if (!ju) return;
        if (!ju.arraySize || ju.stride === ju.floats) return void this.data.set(Eu, ju.offset);
        const su = Math.min(Eu.length, ju.floats * ju.arraySize);
        for (let Uu = 0; Uu < su; Uu++) this.data[ju.offset + Math.floor(Uu / ju.floats) * ju.stride + Uu % ju.floats] = Eu[Uu]
      }
      updateArray(uu, Eu) {
        this.updateFloatArray(uu, Eu)
      }
      setTexture(uu, Eu) {
        this.textures.set(uu, Eu), this.expected.delete(uu)
      }
      expectTexture(uu) {
        this.textures.set(uu, null), this.expected.add(uu)
      }
      write4(uu, Eu, ju, su, Uu, Zu) {
        const Xu = this.slots.get(uu);
        if (!Xu) return;
        const lu = this.data,
          qu = Xu.offset;
        lu[qu] = Eu, Zu > 1 && (lu[qu + 1] = ju), Zu > 2 && (lu[qu + 2] = su), Zu > 3 && (lu[qu + 3] = Uu)
      }
    }

    function eZ(uu, Eu) {
      const ju = CU,
        su = DZ.f,
        Uu = uu.lights,
        Zu = Math.min(uu.lightCount, 8);
      for (let Xu = 0; Xu < Zu; Xu++) {
        const uu = ju.lights + Xu * ju.lightStride,
          Zu = Xu * DZ.c;
        Eu[uu] = Uu[Zu + su.vector], Eu[uu + 1] = Uu[Zu + su.vector + 1], Eu[uu + 2] = Uu[Zu + su.vector + 2], Eu[uu + 3] = Uu[Zu + su.kind] === DZ.d.directional ? 1 : 0, Eu[uu + 4] = Uu[Zu + su.diffuse], Eu[uu + 5] = Uu[Zu + su.diffuse + 1], Eu[uu + 6] = Uu[Zu + su.diffuse + 2], Eu[uu + 7] = Uu[Zu + su.range], Eu[uu + 8] = Uu[Zu + su.specular], Eu[uu + 9] = Uu[Zu + su.specular + 1], Eu[uu + 10] = Uu[Zu + su.specular + 2], Eu[uu + 11] = Uu[Zu + su.range]
      }
      Eu[ju.fogInfos] = uu.fogMode, Eu[ju.fogInfos + 1] = uu.fogStart, Eu[ju.fogInfos + 2] = uu.fogEnd, Eu[ju.fogInfos + 3] = uu.fogDensity, Eu[ju.fogColour] = uu.fogColour[0], Eu[ju.fogColour + 1] = uu.fogColour[1], Eu[ju.fogColour + 2] = uu.fogColour[2], Eu[ju.outputHeight] = uu.renderHeight, Eu[ju.animTick] = uu.animTick, Eu[ju.timeMs] = uu.timeMs
    }
    class GZ {
      constructor(uu) {
        this.instancesOf = uu
      }
      refreshModelUniforms(uu, Eu, ju, su) {
        const Uu = gZ(ju);
        if (Uu >= 0 && Uu === Eu.heldVersion && Eu.textures.get("diffuseSampler") === ju.diffuseTexture && Eu.textures.get("reflectionCubeSampler") === ju.reflectionTexture && Eu.textures.get("opacitySampler") === ju.opacityTexture && Eu.textures.get("emissiveSampler") === ju.emissiveTexture) return !0;
        if (Uu < 0)
          for (const Zu of this.instancesOf(ju)) Zu.heldVersion = -1;
        return this.writeModelUniforms(uu, Eu, ju, su), Eu.heldVersion = Uu, !1
      }
      writeModelUniforms(uu, Eu, ju, su) {
        const {
          ubo: Uu
        } = Eu, Zu = ju.diffuseTexture, Xu = ju.diffuseColor;
        Uu.updateFloat4("vDiffuseColor", Xu[0], Xu[1], Xu[2], ju.alpha), Zu && (Uu.updateFloat2("vDiffuseInfos", Zu.uvSet, Zu.level), Uu.updateMatrixFloats("diffuseMatrix", Zu.matrix)), Uu.updateFloat("alphaCutOff", ju.alphaCutOff), Uu.updateFloatsFrom("vEmissiveColor", ju.emissiveColor, 0, 3), Uu.updateFloat3TimesFloats("vAmbientColor", su.ambientColour, 0, ju.ambientColor);
        const lu = ju.specularColor;
        Uu.updateFloat4("vSpecularColor", lu[0], lu[1], lu[2], ju.specularPower), Uu.setTexture("diffuseSampler", Zu);
        const qu = ju.opacityTexture;
        qu && (Uu.updateFloat2("vOpacityInfos", qu.uvSet, qu.level), Uu.updateMatrixFloats("opacityMatrix", qu.matrix)), Uu.setTexture("opacitySampler", qu);
        const fu = ju.emissiveTexture;
        fu && (Uu.updateFloat2("vEmissiveInfos", fu.uvSet, fu.level), Uu.updateMatrixFloats("emissiveMatrix", fu.matrix)), Uu.setTexture("emissiveSampler", fu);
        const Cu = ju.reflectionTexture;
        Cu && Uu.updateMatrixFloats("reflectionMatrix", Cu.matrix), Uu.updateFloat2("vReflectionInfos", Cu ? Cu.level * uu.iblIntensity : 0, ju.roughness), Uu.setTexture("reflectionCubeSampler", Cu);
        const bu = uu.wO();
        for (const {
            feature: Ou,
            state: Yu,
            active: hu
          }
          of ju.features) {
          var cu, Nu;
          if (hu) null === (cu = (Nu = (0, KE.h)(Ou)).bind) || void 0 === cu || cu.call(Nu, Yu, Uu, uu, bu)
        }
      }
    }

    function pZ(uu) {
      const Eu = uu.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Eu) ? "u32" : /i32|^vec\di$/.test(Eu) ? "i32" : "f32"
    }

    function wZ(uu, Eu) {
      const ju = uu.getSize(),
        su = pZ(Eu),
        Uu = uu => 4 === ju ? `${uu}x4` : 2 === ju ? `${uu}x2` : null;
      if ("f32" === su) {
        if (5126 === uu.type) return 1 === ju ? "float32" : ju >= 2 && ju <= 4 ? `float32x${ju}` : null;
        if (!uu.normalized) return null;
        switch (uu.type) {
          case 5121:
            return Uu("unorm8");
          case 5120:
            return Uu("snorm8");
          case 5123:
            return Uu("unorm16");
          case 5122:
            return Uu("snorm16")
        }
        return null
      }
      const Zu = "u32" === su ? "uint" : "sint";
      switch (uu.type) {
        case 5125:
        case 5124:
          return 1 === ju ? `${Zu}32` : ju <= 4 ? `${Zu}32x${ju}` : null;
        case 5121:
        case 5120:
          return Uu(`${Zu}8`);
        case 5123:
        case 5122:
          return Uu(`${Zu}16`)
      }
      return null
    }

    function JZ(uu) {
      var Eu;
      const ju = /(8|16|32)(?:x(\d))?$/.exec(uu);
      return ju ? Number(ju[1]) / 8 * Number(null !== (Eu = ju[2]) && void 0 !== Eu ? Eu : 1) : 4
    }
    class dZ {
      constructor(uu, Eu, ju) {
        this.resources = uu, this.limits = Eu, this.warnOnce = ju, this.layouts = new Map
      }
      resolveInputs(uu, Eu, ju, su) {
        const Uu = [],
          Zu = ju.program.attributes,
          Xu = [];
        for (let Cu = 0; Cu < Zu.length; Cu++) {
          const ju = Zu[Cu],
            lu = ju.optional ? null : this.resources.vertexInput(uu, ju.name, su);
          if (!lu) {
            const uu = pZ(ju.type),
              Eu = "u32" === uu ? "uint32x4" : "i32" === uu ? "sint32x4" : "float32x4";
            Xu.push(null);
            const su = Uu.find((uu => null === uu.data));
            su ? su.attributes.push({
              shaderLocation: Cu,
              offset: 0,
              format: Eu
            }) : Uu.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Cu,
                offset: 0,
                format: Eu
              }]
            });
            continue
          }
          const qu = lu.getBuffer();
          Xu.push(lu);
          const fu = wZ(lu, ju.type);
          if (!fu) return this.warnOnce(`format:${Eu}:${ju.name}`, `${Eu}'s ${ju.name} (type ${lu.type}, size ${lu.getSize()}) has no WebGPU vertex format`), null;
          const bu = lu.getIsInstanced() ? "instance" : "vertex",
            cu = lu.byteStride,
            Nu = JZ(fu),
            Ou = Uu.find((uu => uu.data === qu && uu.stride === cu && uu.step === bu && lu.byteOffset >= uu.base && lu.byteOffset - uu.base + Nu <= cu));
          Ou ? Ou.attributes.push({
            shaderLocation: Cu,
            offset: lu.byteOffset - Ou.base,
            format: fu
          }) : Uu.push({
            data: qu,
            base: lu.byteOffset,
            stride: cu,
            step: bu,
            attributes: [{
              shaderLocation: Cu,
              offset: 0,
              format: fu
            }]
          })
        }
        if (Uu.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Eu}`, `${Eu} needs ${Uu.length} vertex buffers`), null;
        let lu = "";
        for (const Cu of Uu) {
          lu += `${Cu.stride}${"instance"===Cu.step?"i":"v"}`;
          for (const uu of Cu.attributes) lu += `,${uu.shaderLocation}:${uu.offset}:${uu.format}`;
          lu += ";"
        }
        let qu = this.layouts.get(lu);
        qu || (qu = {
          key: lu,
          buffers: Uu.map((uu => ({
            arrayStride: uu.stride,
            stepMode: uu.step,
            attributes: uu.attributes
          }))),
          instanceEnds: Uu.map((uu => {
            let Eu = -1;
            if ("instance" === uu.step)
              for (const ju of uu.attributes) Eu = Math.max(Eu, ju.offset + JZ(ju.format));
            return Eu
          }))
        }, this.layouts.set(lu, qu));
        const fu = Uu.map((uu => uu.base));
        return {
          program: ju,
          sources: Xu,
          layout: qu,
          slotData: Uu.map((uu => uu.data)),
          Q_: fu,
          buffers: [],
          offsets: fu,
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

    function aZ(uu, Eu, ju, su) {
      const Uu = Eu.program.program.attributes;
      for (let Zu = 0; Zu < Uu.length; Zu++) {
        if ((Uu[Zu].optional ? null : ju.vertexInput(uu, Uu[Zu].name, su)) !== Eu.sources[Zu]) return !1
      }
      return !0
    }
    const PZ = 64;
    class oZ {
      constructor(uu, Eu, ju, su) {
        this.device = uu, this.layout = Eu, this.frameBuffer = ju, this.label = su, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(uu) {
        if (uu * PZ <= this.data.length) return !1;
        let Eu = 2 * this.data.length;
        for (; uu * PZ > Eu;) Eu *= 2;
        const ju = new Float32Array(Eu);
        return ju.set(this.data), this.data = ju, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Uu = this.data,
          Zu = uu * PZ;
        let Xu = Uu[Zu + 16] !== ju;
        for (let lu = 0; lu < 16 && !Xu; lu++) Xu = Uu[Zu + lu] !== Eu[su + lu];
        if (Xu) {
          for (let uu = 0; uu < 16; uu++) Uu[Zu + uu] = Eu[su + uu];
          Uu[Zu + 16] = ju
        }
        return Xu
      }
      upload(uu, Eu) {
        this.device.queue.writeBuffer(this.buffer, uu * bU, this.data, uu * PZ, (Eu - uu) * PZ)
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

    function kZ(uu) {
      return uu.gpu[Pu.f.lite] ??= uu.materials.map(((Eu, ju) => ({
        parts: uu,
        range: ju,
        owner: uu.owner
      })))
    }

    function mZ(uu) {
      var Eu, ju, su;
      return null !== (Eu = null !== (ju = null === (su = uu.parts.materials[uu.range]) || void 0 === su ? void 0 : su.mirror) && void 0 !== ju ? ju : uu.owner.material) && void 0 !== Eu ? Eu : null
    }
    const vZ = ["opaque", "alphaTest", "transparent", "text"];

    function KZ(uu) {
      for (const Eu of vZ) uu[Eu].units.length = 0, uu[Eu].rows.length = 0
    }
    class VZ {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, vE.d)("Lite: ")
      }
      attach(uu, Eu) {
        this.model = uu, this.mirror = Eu
      }
      get worlds() {
        return this.model.nodes.zb
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(uu) {
        return this.groups.get(uu)
      }
      forEachGroup(uu) {
        this.groups.forEach(uu)
      }
      forEachSelected(uu) {
        for (const [Eu, ju] of this.groups)
          for (const su of vZ)
            for (const Uu of ju[su].units) uu(Uu.owner, "text" === su ? "transparent" : su, Eu)
      }
      select(uu, Eu) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(KZ);
        const {
          model: ju,
          mirror: su
        } = this;
        if (!ju || !su || !uu) return;
        this.rows.length < ju.nodes.Mb && (this.rows = new Int32Array(ju.nodes.Mb));
        const Uu = this.rows,
          Zu = ju.meshes;
        for (let lu = 0; lu < Zu.looseCount; lu++) {
          const uu = Zu.loose[lu],
            ju = su.nodes[uu];
          ju && !ju.isBlocked && ju.isEnabled() && !ju.Of.hasAZeroComponent && Zu.selects(uu, Eu.frustum) && (this.activate(ju, uu), this.selectedCount++)
        }
        const Xu = Zu.selectTextPlanes(Eu.frustum, Uu);
        for (let lu = 0; lu < Xu; lu++) {
          const Eu = Uu[lu],
            Zu = su.nodes[Eu],
            Xu = ju.meshes.parts[Eu];
          if (!Zu.isVisible || !(Zu.visibility > 0) || 0 === (Zu.layerMask & uu.layerMask) || !Xu) continue;
          const qu = this.groupOf(ju.meshes.layer[Eu]).text;
          for (const uu of kZ(Xu)) qu.units.push(uu), qu.rows.push(Eu);
          this.selectedCount++
        }
      }
      instanceBatch(uu) {
        const Eu = this.batchOf(uu);
        return Eu.dispatched || (Eu.dispatched = Eu.renderSelf = !0, Eu.row = this.rowOf(uu)), Eu
      }
      rowOf(uu) {
        return uu.row
      }
      activate(uu, Eu) {
        if (!uu.JV) {
          const ju = uu;
          if (ju.fUu) {
            const uu = this.batchOf(ju);
            uu.dispatched = !0, uu.renderSelf = !0, uu.row = Eu
          }
          return void this.dispatch(ju, Eu, Eu)
        }
        const ju = uu,
          su = ju.CUu;
        if (su._getWorldMatrixDeterminant() >= 0 !== ju._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${su.name}`, `A mirrored InstancedMesh of ${su.name} is not drawn yet`);
        const Uu = this.batchOf(su);
        Uu.instances.push(ju), Uu.rows.push(Eu), Uu.dispatched || (Uu.dispatched = !0, this.dispatch(su, Eu, this.rowOf(su)))
      }
      batchOf(uu) {
        let Eu = this.batches.get(uu);
        return Eu || (Eu = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(uu, Eu)), Eu.frame !== this.frame && (Eu.frame = this.frame, Eu.dispatched = !1, Eu.renderSelf = !1, Eu.instances.length = 0, Eu.rows.length = 0), Eu
      }
      dispatch(uu, Eu, ju) {
        const {
          layer: su,
          parts: Uu
        } = this.model.meshes;
        if (!Uu[Eu]) return;
        const Zu = this.groupOf(su[Eu]),
          Xu = uu;
        for (const lu of kZ(Uu[Eu])) {
          const uu = mZ(lu);
          if (!uu) continue;
          const Eu = uu.needAlphaBlendingForMesh(Xu) ? Zu.transparent : uu.needAlphaTestingForMesh(Xu) ? Zu.alphaTest : Zu.opaque;
          Eu.units.push(lu), Eu.rows.push(ju)
        }
      }
      groupOf(uu) {
        let Eu = this.groups.get(uu);
        return Eu || (Eu = {
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
        }, this.groups.set(uu, Eu)), Eu
      }
    }

    function rZ(uu) {
      uu.opaque.length = 0, uu.transparent.length = 0
    }
    class QZ {
      constructor() {
        this.dl = new Map, this.enabled = [], this.groups = new Map, this.oN = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(uu) {
        if (this.dl.has(uu)) return;
        const Eu = {
          mesh: uu,
          observer: uu.onEffectiveEnabledStateChangedObservable.add((uu => {
            this.Wk(Eu, uu)
          })),
          index: -1,
          steady: null
        };
        this.dl.set(uu, Eu), this.Wk(Eu, uu.isEnabled())
      }
      remove(uu) {
        const Eu = this.dl.get(uu);
        Eu && (Eu.observer.remove(!0), this.Wk(Eu, !1), this.dl.delete(uu))
      }
      dropSteady() {
        for (const uu of this.dl.values()) uu.steady = null
      }
      base(uu) {
        return this.dl.get(uu)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          dl: this.dl.size
        }
      }
      forEachSelected(uu) {
        for (const [Eu, ju] of this.groups) {
          for (const su of ju.opaque) uu(su.owner, "opaque", Eu);
          for (const su of ju.transparent) uu(su.owner, "transparent", Eu)
        }
        for (const Eu of this.oN) uu(Eu.mesh, "opaque", 0)
      }
      group(uu) {
        return this.groups.get(uu)
      }
      forEachGroup(uu) {
        this.groups.forEach(uu)
      }
      select(uu, Eu) {
        if (this.drawn = 0, this.selected = 0, this.oN.length = 0, this.groups.forEach(rZ), !uu) return;
        const ju = this.enabled;
        for (let su = 0; su < ju.length; su++) {
          const Uu = ju[su];
          if (Uu.steady && Eu(Uu, uu)) {
            this.selected++, this.oN.push(Uu);
            continue
          }
          const Zu = Uu.mesh;
          if (Zu.isBlocked || Zu.Of.hasAZeroComponent) continue;
          if (!Zu.isVisible || Zu.visibility <= 0 || 0 === (Zu.layerMask & uu.layerMask)) continue;
          if (Zu.fUu) {
            this.warned.has(Zu.name) || (this.warned.add(Zu.name), console.warn(`Lite: thin instance base ${Zu.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Xu
          } = Zu;
          if (!Xu) continue;
          Zu.computeWorldMatrix(), this.selected++;
          const lu = this.listsFor(Zu.renderingGroupId);
          for (const uu of kZ(Xu)) {
            const Eu = mZ(uu);
            Eu && (Eu.needAlphaBlendingForMesh(Zu) ? lu.transparent.push(uu) : lu.opaque.push(uu))
          }
        }
      }
      Wk(uu, Eu) {
        if (Eu === uu.index >= 0) return;
        uu.steady = null;
        const ju = this.enabled;
        if (Eu) uu.index = ju.length, ju.push(uu);
        else {
          const Eu = ju.pop();
          Eu !== uu && (ju[uu.index] = Eu, Eu.index = uu.index), uu.index = -1
        }
      }
      listsFor(uu) {
        let Eu = this.groups.get(uu);
        return Eu || (Eu = {
          opaque: [],
          transparent: []
        }, this.groups.set(uu, Eu)), Eu
      }
    }
    var iZ = ju(39881);
    class WZ {
      constructor() {
        this.bundle = null, this.stale = !0, this.dl = new Set
      }
    }
    class SZ {
      constructor(uu, Eu, ju) {
        this.device = uu, this.slots = Eu, this.host = ju, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new WZ, this.sK = new WZ, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new uZ, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = uu => {
          uu.seen !== this.frame && (uu.draw && (uu.draw = null, this.args[5 * uu.slot + 1] = 0, this.argsDirty = !0, this.sK.stale ||= uu.sK), this.frame - uu.seen > 120 && (this.records.delete(uu.unit), this.freeSlots.push(uu.slot), uu.recorded && (this.bundleOf(uu).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(uu) {
          var Eu, ju;
          let su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Eu = null === (ju = globalThis.navigator) || void 0 === ju ? void 0 : ju.userAgent) && void 0 !== Eu ? Eu : "";
          const Uu = uu.adapterInfo;
          return "intel" === (null === Uu || void 0 === Uu ? void 0 : Uu.vendor) && "gen-12lp" === Uu.architecture && su.includes("Windows")
        }(uu), (0, iZ.D)(this.direct)
      }
      wG() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, iZ.D)(this.directThisFrame)
      }
      add(uu, Eu, ju, su) {
        let Uu = this.records.get(uu);
        return Uu || (Uu = this.createRecord(uu), this.records.set(uu, Uu)), Uu.recorded && FZ(Uu, Eu) || (this.bundleOf(Uu).stale = !0), this.place(Uu, Eu, ju, su), Uu
      }
      bundleOf(uu) {
        return uu.sK ? this.sK : this.main
      }
      addAgain(uu, Eu, ju, su) {
        uu.recorded || (this.bundleOf(uu).stale = !0), this.place(uu, Eu, ju, su)
      }
      place(uu, Eu, ju, su) {
        uu.seen = this.frame, uu.sK && null === uu.draw && (this.sK.stale = !0), uu.draw = Eu, this.drawn++, ju && this.slots.write(uu.slot, ju, su) && (this.slotsFrom = Math.min(this.slotsFrom, uu.slot), this.slotsTo = Math.max(this.slotsTo, uu.slot));
        const Uu = this.args,
          Zu = 5 * uu.slot;
        Uu[Zu] === Eu.count && Uu[Zu + 1] === Eu.instances && Uu[Zu + 2] === Eu.first || (Uu[Zu] = Eu.count, Uu[Zu + 1] = Eu.instances, Uu[Zu + 2] = Eu.first, this.argsDirty = !0, this.sK.stale ||= uu.sK)
      }
      JG() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(uu) {
        for (const Eu of this.records.values()) Eu.draw && Eu.seen === this.frame && !Eu.sK && uu(Eu.draw, this.slots.data, Eu.slot * bU / 4)
      }
      resourceDestroyed(uu) {
        this.main.stale ||= this.main.dl.has(uu), this.sK.stale ||= this.sK.dl.has(uu)
      }
      execute(uu, Eu, ju) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(uu, Eu, ju, "direct"), this.drawn;
        const su = this.host.sceneGroup(Eu);
        if (!su) return this.main.bundle = null, this.sK.bundle = null, this.recordedSceneGroup = null, this.encode(uu, Eu, ju, "direct"), this.drawn;
        this.recordedTarget === ju && this.recordedSceneGroup === su || (this.recordedTarget = ju, this.recordedSceneGroup = su, this.main.stale = !0, this.sK.stale = !0);
        const Uu = this.main,
          Zu = this.sK;
        let Xu = !1;
        !Uu.stale && Uu.bundle || (Uu.bundle = this.record(Eu, ju, su, "indirect"), Xu = !0);
        const lu = (0, iZ.i)();
        return (Zu.stale || this.rangedEpoch !== lu) && (this.rangedEpoch = lu, Zu.bundle = this.drawsRanged() ? this.record(Eu, ju, su, "sK") : this.noRangedBundle(), Xu = !0), Xu && (this.bundles = Zu.bundle ? [Uu.bundle, Zu.bundle] : [Uu.bundle]), uu.executeBundles(this.bundles), uu.setBindGroup(0, su), this.drawn
      }
      record(uu, Eu, ju, su) {
        const Uu = this.device.createRenderBundleEncoder({
          label: "sK" === su ? "thin-bases-ranged" : "thin-bases",
          colorFormats: uu._colorFormat ? [uu._colorFormat] : [],
          depthStencilFormat: uu._depthStencilFormat,
          sampleCount: uu._sampleCount
        });
        return Uu.setBindGroup(0, ju), this.encode(Uu, uu, Eu, su), Uu.finish()
      }
      noRangedBundle() {
        for (const uu of this.records.values()) uu.sK && (uu.recorded = !1);
        return this.sK.dl.clear(), this.sK.stale = !1, null
      }
      drawsRanged() {
        for (const uu of this.records.values())
          if (uu.sK && uu.draw) return !0;
        return !1
      }
      encode(uu, Eu, ju, su) {
        const Uu = [];
        for (const qu of this.records.values()) "direct" !== su && qu.sK !== ("sK" === su) || (qu.recorded = !1, qu.draw && Uu.push(qu));
        Uu.sort(BZ);
        const Zu = "direct" === su ? null : "sK" === su ? this.sK : this.main;
        null === Zu || void 0 === Zu || Zu.dl.clear(), this.binder.reset();
        let Xu = !1;
        for (const qu of Uu) {
          var lu;
          const Uu = qu.draw,
            fu = this.host.pipelineFor(Uu, Eu, ju);
          if (!fu) {
            this.host.pipelineCompiling(Uu, ju) ? Xu = !0 : Zu && this.keep(qu, Uu, Zu.dl);
            continue
          }
          let Cu;
          if (qu.sK && "indirect" !== su) {
            const uu = qu.unit.owner;
            Cu = "direct" === su && (0, iZ.r)(uu) || (0, iZ.l)(uu) || void 0
          }
          if (Zu && this.keep(qu, Uu, Zu.dl), 0 === (null === (lu = Cu) || void 0 === lu ? void 0 : lu.count)) continue;
          this.binder.bind(uu, Uu, fu, this.slots.bindGroup, qu.slot * bU);
          const bu = 5 * qu.slot;
          if ("indirect" === su) {
            Uu.indexBuffer ? uu.drawIndexedIndirect(this.argsBuffer, 4 * bu) : uu.drawIndirect(this.argsBuffer, 4 * bu);
            continue
          }
          const cu = this.args;
          Cu ? IZ(uu, null !== Uu.indexBuffer, cu, bu, Cu) : Uu.indexBuffer ? uu.drawIndexed(cu[bu], cu[bu + 1], cu[bu + 2], 0, 0) : uu.draw(cu[bu], cu[bu + 1], cu[bu + 2], 0)
        }
        Zu && (Zu.stale = Xu)
      }
      keep(uu, Eu, ju) {
        uu.recorded = !0, uu.pipelineKey = Eu.pipelineKey, uu.materialGroup = Eu.material.bindGroup, uu.vertexBuffers.length = 0, uu.vertexBuffers.push(...Eu.vertexBuffers), uu.vertexOffsets = Eu.vertexOffsets, uu.indexBuffer = Eu.indexBuffer, uu.indexFormat = Eu.indexFormat;
        for (const su of Eu.vertexBuffers) ju.add(su);
        Eu.indexBuffer && ju.add(Eu.indexBuffer), ju.add(Eu.material.buffer);
        for (const su of Eu.material.bound) su && ju.add(su)
      }
      createRecord(uu) {
        let Eu = this.freeSlots.pop();
        return void 0 === Eu && (Eu = this.slotCount++, this.grow()), {
          unit: uu,
          slot: Eu,
          sK: void 0 !== (0, iZ.l)(uu.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.sK.stale = !0), 5 * this.slotCount > this.args.length) {
          const uu = new Uint32Array(2 * this.args.length);
          uu.set(this.args), this.args = uu, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function IZ(uu, Eu, ju, su, Uu) {
      const Zu = ju[su + 1],
        Xu = Uu.data;
      for (let lu = 0; lu < Uu.count; lu++) {
        const Uu = Math.min(Xu[2 * lu], Zu),
          qu = Math.min(Xu[2 * lu + 1], Zu - Uu);
        0 !== qu && (Eu ? uu.drawIndexed(ju[su], qu, ju[su + 2], 0, Uu) : uu.draw(ju[su], qu, ju[su + 2], Uu))
      }
    }

    function FZ(uu, Eu) {
      if (uu.pipelineKey !== Eu.pipelineKey || uu.materialGroup !== Eu.material.bindGroup || uu.indexBuffer !== Eu.indexBuffer || uu.indexFormat !== Eu.indexFormat || uu.vertexOffsets !== Eu.vertexOffsets || uu.vertexBuffers.length !== Eu.vertexBuffers.length) return !1;
      for (let ju = 0; ju < uu.vertexBuffers.length; ju++)
        if (uu.vertexBuffers[ju] !== Eu.vertexBuffers[ju]) return !1;
      return !0
    }

    function BZ(uu, Eu) {
      return jZ(uu.draw, Eu.draw)
    }
    const LZ = new WeakMap,
      tZ = {
        depth: !1,
        sunShadow: !1
      };

    function xZ(uu, Eu) {
      let ju = LZ.get(uu);
      ju || (ju = new Map, LZ.set(uu, ju));
      const su = `${Eu.depth?"-depth":""}${Eu.sunShadow?"-shadow":""}${Eu.shadowMask?"-mask":""}`;
      let Uu = ju.get(su);
      if (!Uu) {
        const Zu = [{
          binding: nE.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: nE.g
          }
        }, {
          binding: nE.t,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Eu.depth && Zu.push({
          binding: nE.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Eu.sunShadow && Zu.push(... function() {
          const uu = GPUShaderStage.FRAGMENT,
            Eu = nE.o;
          return [{
            binding: Eu.uniform,
            visibility: uu,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Eu.ac,
            visibility: uu,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Eu.special,
            visibility: uu,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Eu.volume,
            visibility: uu,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Eu.sampler,
            visibility: uu,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Eu.entities,
            visibility: uu,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Eu.entityGrids,
            visibility: uu,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Eu.shadowMask && Zu.push({
          binding: nE.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Uu = uu.createBindGroupLayout({
          label: `${Eu.depth?"terrain-":""}shader-pack-inputs${su}`,
          entries: Zu
        }), ju.set(su, Uu)
      }
      return Uu
    }

    function TZ(uu) {
      return xZ(uu, tZ)
    }

    function HZ(uu, Eu) {
      if (!Eu) return !1;
      const ju = (0, yE.i)(uu);
      return !!ju && Xs(ju, Eu)
    }

    function AZ(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Vs(Eu)) return [];
      return [xZ(uu, {
        depth: os(Eu.packVariant),
        sunShadow: HZ(Eu.packVariant, ju),
        shadowMask: su
      })]
    }
    class nZ {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = uu, this.sunShadow = ju, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(nE.g), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = uu.createBuffer({
          label: "shader-pack-inputs",
          size: nE.g,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const su = (0, nE.w)(Eu);
        this.textures = uu.createBuffer({
          label: "shader-pack-textures",
          size: su.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), uu.queue.writeBuffer(this.textures, 0, su), this.bindGroup = uu.createBindGroup({
          label: "shader-pack-inputs",
          layout: TZ(uu),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: nE.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: nE.t,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(uu, Eu, ju) {
        (0, nE.D)(this.data, {
          seconds: uu.seconds(),
          lit: ju,
          renderOffset: uu.renderOffset(),
          fuu: uu.fuu(),
          eyePosition: Eu,
          shadowDirection: uu.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const su = Eu ? this.sunShadow : null;
        if ((Eu || ju) && !su) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!uu && !su) return this.bindGroup;
        (uu && uu !== this.depthView || ju && ju !== this.maskView) && (this.depthView = null !== uu && void 0 !== uu ? uu : this.depthView, this.maskView = null !== ju && void 0 !== ju ? ju : this.maskView, this.groups.clear());
        const Uu = (uu ? 1 : 0) | (su ? 2 : 0) | (ju ? 4 : 0);
        let Zu = this.groups.get(Uu);
        if (!Zu) {
          const Eu = this.entries();
          uu && Eu.push({
            binding: nE.n,
            resource: uu
          }), su && Eu.push(...su.entries()), ju && Eu.push({
            binding: nE.q,
            resource: ju
          }), Zu = this.device.createBindGroup({
            label: `${uu||ju?"terrain-":""}shader-pack-inputs${uu?"-depth":""}${su?"-shadow":""}${ju?"-mask":""}`,
            layout: xZ(this.device, {
              depth: !!uu,
              sunShadow: !!su,
              shadowMask: !!ju
            }),
            entries: Eu
          }), this.groups.set(Uu, Zu)
        }
        return Zu
      }
      bind(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        uu.setBindGroup(nE.f, this.bindGroupFor(Eu, ju, su))
      }
    }

    function yZ(uu, Eu, ju) {
      if (uu.gpuVersion === Eu.gpuBuffersVersion) return !0;
      let su;
      do {
        if (su = Eu.gpuBuffersVersion, !zZ(uu, Eu, ju)) return !1
      } while (Eu.gpuBuffersVersion !== su);
      return uu.gpuVersion = su, uu.fitInstances = 0, !0
    }

    function zZ(uu, Eu, ju) {
      let su = null;
      for (let Zu = 0; Zu < uu.slotData.length; Zu++) {
        var Uu;
        const Xu = uu.slotData[Zu],
          lu = Xu ? Eu.gpuBuffer(Xu) : ju;
        if (!lu) return !1;
        Xu && uu.layout.instanceEnds[Zu] < 0 && Eu.cover(Xu, Number.POSITIVE_INFINITY), uu.buffers[Zu] = lu;
        const qu = uu.Q_[Zu] + (Xu ? Eu.gpuOffset(Xu) : 0);
        qu !== (null !== (Uu = su) && void 0 !== Uu ? Uu : uu.offsets)[Zu] && (su ??= uu.offsets.slice(), su[Zu] = qu), uu.ends[Zu] = Xu ? Eu.gpuEnd(Xu) : lu.size
      }
      return su && (uu.offsets = su), !0
    }

    function RZ(uu, Eu, ju, su) {
      if (Eu <= uu.fitInstances) return null;
      const {
        layout: Uu,
        ends: Zu,
        offsets: Xu,
        slotData: lu,
        Q_: qu
      } = uu;
      let fu = !1;
      for (let Cu = 0; Cu < Uu.buffers.length; Cu++) {
        const uu = Uu.instanceEnds[Cu];
        if (uu < 0) continue;
        const su = (Eu - 1) * Uu.buffers[Cu].arrayStride + uu;
        if (Zu[Cu] - Xu[Cu] < su) return {
          index: Cu,
          needed: su
        };
        const bu = lu[Cu];
        bu && ju.cover(bu, qu[Cu] + su) && (fu = !0)
      }
      return fu && yZ(uu, ju, su), uu.fitInstances = Eu, null
    }
    var uX = ju(38209),
      EX = ju(38236);
    const jX = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      sX = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      UX = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      ZX = `((vertexInputs.aPackedLightLevels >> 16u) | ${mE.c.placed}u)`,
      XX = "u32(vertexInputs.aShaderPackItem.x)",
      lX = `${mE.c.lifeform}u`;

    function qX(uu) {
      return "item" === uu.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const fX = "bloxdSpEnchant",
      CX = "floor(finalWorld[3].xyz)";

    function bX(uu, Eu, ju) {
      return "placed" === Eu.kind && uu.reads[ju].includes("bloxdFragmentBlockPosition")
    }

    function cX(uu, Eu) {
      let [ju, su] = uu;
      return ju === Eu.point && su === Eu.code
    }

    function NX(uu, Eu) {
      var ju, su, Uu;
      const Zu = null === (ju = uu.find((uu => uu.texture))) || void 0 === ju ? void 0 : ju.texture,
        Xu = null === (su = uu.find((uu => uu.enchantTier))) || void 0 === su ? void 0 : su.enchantTier,
        lu = null === (Uu = uu.find((uu => uu.overlay))) || void 0 === Uu ? void 0 : Uu.overlay,
        qu = lu ? Eu.filter((uu => cX(uu, lu))).length : 0;
      return lu && 1 === qu ? {
        texture: Zu,
        overlay: lu,
        enchantTier: Xu
      } : {
        texture: Zu,
        enchantTier: Xu
      }
    }

    function OX(uu) {
      if ("item" === uu.kind) {
        return {
          vertexFlags: `(${XX} & 0xffffu)`,
          varying: "vPackItem",
          value: XX,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return uu.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: ZX,
        varying: "vPackFlags",
        value: ZX,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function YX(uu) {
      return "lifeform" === uu.kind ? lX : "0u"
    }

    function hX(uu) {
      return !!uu.BLOXD_PLUGIN_ENCHANTMENT
    }

    function DX(uu, Eu) {
      const {
        enchantTier: ju
      } = Eu;
      return ju && hX(Eu.defines) && "lifeform" === Eu.kind && wX(uu, "enchantTier") ? ju : null
    }

    function gX(uu, Eu) {
      return hX(Eu.defines) && wX(uu, "enchantSpeed")
    }

    function MX(uu) {
      const {
        overlay: Eu,
        defines: ju
      } = uu;
      if (!Eu || !ju.DIFFUSE) return null;
      const su = ju.VERTEXCOLOR || ju.INSTANCESCOLOR && ju.INSTANCES;
      return `vec4f(${Eu.colour}.rgb * uniforms.vDiffuseInfos.y${su?" * fragmentInputs.vColor.rgb":""}, ${Eu.colour}.a)`
    }
    const eX = "fragmentInputs.vPackTexture";

    function GX(uu) {
      const {
        atlas: Eu,
        defines: ju,
        texture: su
      } = uu;
      if (Eu || !ju.DIFFUSE) return null;
      if (su) return {
        texture: "diffuseSampler",
        ...su
      };
      const Uu = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===ju.DIFFUSEDIRECTUV?"vMainUV1":2===ju.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== uu.kind) return Uu;
      if (!ju.BLOXD_PLUGIN_ANIMATED) return {
        ...Uu,
        id: eX
      };
      const Zu = pu.c.WGSL,
        Xu = (0, pu.Ab)(Zu, "uAnimStatesNum"),
        lu = (0, pu.gb)(Zu, (0, uX.f)(Zu), Xu),
        qu = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Xu})`,
        layers: [lu],
        uv: `vec2f(${qu}.x, ${qu}.y * ${Xu} - ${lu})`,
        levelUv: qu,
        id: eX
      }
    }

    function pX(uu, Eu) {
      return "box" === Eu.kind && !!uu.hooks.surface && null !== GX(Eu)
    }

    function wX(uu, Eu) {
      return uu.reads.fragment.includes(Eu)
    }

    function JX(uu) {
      return !!uu.BLOXD_LIGHTING && !uu.BLOXD_UNLIT
    }

    function dX(uu, Eu, ju, su) {
      const Uu = uu.filter((uu => {
        let [ju, su] = uu;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === ju && su === Eu
      }));
      if (1 !== Uu.length) throw new Error(`A model program for shader packs has ${0===Uu.length?"no":"more than one"} ${su} code before fog (lite/modelShaderPack.ts)`);
      return uu.map((uu => uu === Uu[0] ? [uu[0], ju] : uu))
    }

    function aX(uu, Eu, ju, su) {
      const {
        hooks: Uu
      } = uu, {
        kind: Zu,
        defines: Xu
      } = Eu, lu = [...ju];
      var qu;
      Eu.atlas && Uu.surface && lu.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Ns("atlasIdxIn")]), "item" === Zu && lu.push(["CUSTOM_VERTEX_DEFINITIONS", (0, pu.g)(pu.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), pX(uu, Eu) && lu.push(["CUSTOM_VERTEX_DEFINITIONS", (0, pu.g)(pu.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (qu = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${bs}[min(u32(${qu}) - 1u, arrayLength(&${bs}) - 1u)], ${qu} > 0.5);\n`)]);
      const fu = OX(Eu);
      fu && (Uu.surface || Uu.light) && lu.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${fu.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${fu.varying} = ${fu.value};`]);
      let Cu = su;
      if (bX(uu, Eu, "fragment") && (lu.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${CX});`]), Cu = [...Cu, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), wX(uu, "localPosition") && lu.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${qX(Eu)};`]), hX(Xu) && Uu.surface) {
        gX(uu, Eu) && lu.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const ju = DX(uu, Eu);
        ju && lu.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${ju});`]);
        const su = (0, pu.tb)(pu.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Cu = [...dX(Cu, (0, EX.j)(pu.c.WGSL), su, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, EX.b)(fX)]]
      }
      const {
        overlay: bu
      } = Eu;
      bu && MX(Eu) && Uu.surface && (Cu = Cu.filter((uu => !cX(uu, bu))));
      const cu = Uu.light ? function(uu) {
        return "placed" === uu.kind ? {
          name: "terrain",
          engine: (0, TE.E)(pu.c.WGSL),
          pack: (0, TE.$)(pu.c.WGSL)
        } : uu.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, TE.A)(pu.c.WGSL),
          pack: (0, TE.X)(pu.c.WGSL)
        } : null
      }(Eu) : null;
      if (cu && (Cu = dX(Cu, cu.engine, cu.pack, `${cu.name} light`), "placed" !== Zu && JX(Xu))) {
        const uu = Xu.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, pu.Ab)(pu.c.WGSL, "uEntityLightLevels") : (0, pu.Fb)(pu.c.WGSL, "aLightLevels");
        lu.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${TE.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, TE._)(pu.c.WGSL, uu)])
      }
      return {
        vertexCode: lu,
        fragmentCode: Cu
      }
    }

    function PX(uu, Eu, ju, su) {
      return Us(uu, Eu, ju, su, "model")
    }
    const oX = "\t@builtin(position) position: vec4f,\n";

    function kX(uu, Eu) {
      const ju = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(uu)[0];
      return `${ju}${Eu}${uu.slice(ju.length)}`
    }

    function mX(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Uu
      } = Eu, Zu = Xs(Eu, su), {
        kind: Xu,
        defines: lu
      } = ju, qu = function(uu, Eu) {
        var ju, su, Uu;
        const {
          defines: Zu
        } = Eu, Xu = OX(Eu), lu = !!Zu.FOG, qu = hX(Zu), fu = null !== (ju = null === Xu || void 0 === Xu ? void 0 : Xu.enchantTier) && void 0 !== ju ? ju : DX(uu, Eu) ? "fragmentInputs.vPackEnchantTier" : "0u", Cu = "lifeform" === Eu.kind && !Zu.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (su = null === Xu || void 0 === Xu ? void 0 : Xu.vertexFlags) && void 0 !== su ? su : YX(Eu),
          vertexLocalPosition: qX(Eu),
          flags: null !== (Uu = null === Xu || void 0 === Xu ? void 0 : Xu.flags) && void 0 !== Uu ? Uu : YX(Eu),
          normal: "normalW",
          alpha: Cu ? "alpha * baseColor.a" : "alpha",
          alphaOut: Cu ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: lu ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: lu ? "1.0 - fog" : "0.0",
          enchantTier: fu,
          enchantColour: qu ? `${fX}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: gX(uu, Eu) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: wX(uu, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: MX(Eu)
        }
      }(Eu, ju), fu = uu.textures.filter((uu => /^textureAtlas\d+$/.test(uu.name))).length, Cu = ju.atlas && fu > 0 ? {
        count: fu,
        layers: ju.atlas.layers,
        width: ju.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: uu.material.slots.has("uAnimDataPerTex") ? (Eu, ju) => zs(Eu, ju, function(uu) {
          const Eu = uu.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Tb: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: uu => `uniforms.uAnimDataPerTex[${uu}]${Eu}`
          }
        }(uu)) : null
      } : null, bu = "placed" === Xu ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", cu = null !== Cu && void 0 !== Cu ? Cu : GX(ju), Nu = function(uu, ju) {
        let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,nE.z)()}${qs(Eu,ju)}${su}${Ys(uu)}${us}${bu}${Eu.code}`
      };
      let {
        vertex: Ou,
        fragment: Yu
      } = uu;
      const hu = Ds(Uu, qu);
      if (hu) {
        const uu = bX(Eu, ju, "vertex") ? `\tbloxdSpCell = ${CX};\n` : "";
        Ou = PX(Ou, jX, `${uu}${hu.slice(1)}${jX}`, "vertex")
      }
      const Du = `${fs(Eu,Zu,function(uu,Eu){return Eu.TWOSIDEDLIGHTING?uu:`select(-(${uu}), ${uu}, fragmentInputs.frontFacing)`}(qu.normal,lu),qu.flags)}${gs(Uu,Eu.strict,Eu.program,cu,qu)}`;
      Du && (Yu = PX(Yu, sX, `${Du.slice(1)}${sX}`, "surface")), Zu && Eu.sunShadow && !lu.TWOSIDEDLIGHTING && (Yu = PX(Yu, oX, `${oX}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const gu = Gs(Uu);
      if (gu) {
        const uu = es(Uu, JX(lu), !0, qu);
        Yu = PX(Yu, UX, `${uu}${gu.slice(1)}${UX}`, "light")
      }
      const Mu = pX(Eu, ju) ? cs : "";
      return {
        ...uu,
        vertex: kX(Ou, Nu(Cu, !1, Mu)),
        fragment: kX(Yu, Nu(cu, Zu))
      }
    }
    const vX = {
      name: "earthSky",
      uniqueId: -1
    };
    class KX {
      constructor(uu, Eu) {
        this.resources = uu, this.epoch = Eu, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const uu of this.instances.values()) uu.released = !0, this.resources.destroyBuffer(uu.buffer);
        this.instances.clear()
      }
    }

    function VX(uu) {
      return uu.failed && null !== uu.packGroup
    }
    class rX {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QZ,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new VZ;
        this.device = uu, this.resources = Eu, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.m_ = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new uZ, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new GZ((uu => this.modelSlot(uu).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, vE.d)("Lite: "), this.renderStates = new hZ(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (uu, Eu) => this.keepSteady(uu, Eu), this.lists = void 0, this.slotCount = 0, this.m_ = su, this.modelMeshes = Uu, this.lists = new EZ(Uu, su, this, this.warnOnce), this.drawDefines = new cZ(Eu, this.warnOnce, ((uu, Eu, ju) => this.programWithModel(uu, Eu, ju)), VX), this.vertexLayouts = new dZ(Eu, uu.limits, this.warnOnce), this.sceneLayout = wE(uu), this.frameLayout = uu.createBindGroupLayout({
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
        }), this.frameBuffer = uu.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new oZ(uu, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = uu.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new SZ(uu, new oZ(uu, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (uu, Eu, ju) => this.pipelineFor(uu, Eu, ju),
          pipelineCompiling: (uu, Eu) => !uu.program.failed && !1 !== this.pipelines.get(`${uu.pipelineKey}|${Eu}`),
          sceneGroup: uu => {
            const Eu = ju(uu);
            return Eu || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Eu
          }
        }), Eu.onDestroy = uu => {
          this.thinBundle.resourceDestroyed(uu)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Uu = {
          order: uu,
          isTransparent: Eu,
          _direct: !Eu,
          bind: (uu, Eu) => this.createBinding(Uu, Eu, ju, su)
        };
        return Uu
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(uu, Eu, ju) {
        var su;
        let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Eu, this.drawDefines.view = Eu, this.thinBundle.wG(), this.writeFrameUniforms();
        const Zu = null !== (su = null === Uu || void 0 === Uu ? void 0 : Uu.defineFor("model")) && void 0 !== su ? su : 0;
        this.drawDefines.modelPackVariant = Zu, Uu && 0 !== Zu && (this.packInputs ??= new nZ(this.device, Uu.textureLayers(), this.sunShadow), this.packInputs.write(Uu, Eu.eye, Uu.aY())), this.lists.clear(), this.slotCount = 0;
        const Xu = uu.activeCamera;
        this.m_.select(Xu, this.keepSteadyBase), this.modelMeshes.select(Xu, Eu), ju && this.pushEarthSky(ju), this.lists.collect(uu), this.thinBundle.JG(), this.uploadMeshSlots()
      }
      pushDraws(uu, Eu, ju, su, Uu, Zu) {
        let Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const lu = Zu.length;
        for (let qu = 0; qu < ju; qu++) {
          const ju = Eu[qu];
          let lu = this.retainedDraw(uu, ju, su, Uu);
          if (void 0 === lu && (lu = this.drawFor(uu, ju, su, Uu), this.retain(ju, lu)), lu) {
            const uu = ju.owner,
              Eu = Xu ? Xu[qu] : -1;
            lu.slotOffset = Eu < 0 ? this.writeMeshSlot(uu.getWorldMatrix().m, uu.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Eu], 16 * Eu), Zu.push(lu)
          }
        }
        return Zu.length - lu
      }
      bundleDraws(uu, Eu, ju) {
        let su = 0;
        for (const Uu of Eu) {
          let Eu = this.retainedDraw(uu, Uu, ju, !1);
          const Zu = void 0 !== Eu;
          if (void 0 === Eu && (Eu = this.drawFor(uu, Uu, ju, !1), this.retain(Uu, Eu)), Eu) {
            const uu = Uu.owner,
              ju = this.thinBundle.add(Uu, Eu, uu.getWorldMatrix().m, uu.visibility);
            Zu && this.steadyFrom(Uu, Eu, ju), su++
          }
        }
        return su
      }
      steadyFrom(uu, Eu, ju) {
        const su = uu.owner,
          Uu = this.m_.base(su),
          Zu = su.material,
          {
            drawState: Xu,
            instance: lu
          } = Eu.inputs.retained;
        if (!Uu || !Zu || 1 !== uu.parts.materials.length || mZ(uu) !== Zu) return;
        const qu = Uu.steady ??= {
          unit: uu,
          material: Zu,
          visibility: 1,
          draw: Eu,
          record: ju,
          drawState: Xu,
          instance: lu,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        qu.unit = uu, qu.material = Zu, qu.visibility = su.visibility, qu.draw = Eu, qu.record = ju, qu.drawState = Xu, qu.instance = lu, qu.bindGroup = lu.bindGroup, qu.gpuVersion = this.resources.gpuBuffersVersion, qu.fitInstances = Eu.inputs.fitInstances, qu.worldFlag = su.getWorldMatrix().updateFlag, qu.handedFrame = this.frame
      }
      keepSteady(uu, Eu) {
        const ju = uu.steady;
        if (ju.handedFrame !== this.frame - 1 || (this.frame + ju.phase) % 8 === 0) return !1;
        const su = uu.mesh,
          {
            unit: Uu,
            draw: Zu,
            instance: Xu,
            drawState: lu
          } = ju,
          qu = su.forcedInstanceCount || su.F_;
        if (!su.isVisible || su.fUu || su.visibility !== ju.visibility || 0 === (su.layerMask & Eu.layerMask) || su.material !== ju.material || 0 !== su.renderingGroupId || su.hasVertexAlpha || !this.drawDefines.definesHold(lu, Uu, lu.instancing) || ju.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Zu.inputs, Uu, lu.instancing, Zu.program) || Zu.program.failed || Xu.released || qu <= 0 || qu > ju.fitInstances) return !1;
        if (Xu.frame !== this.frame && this.bindMaterial(Xu, this.modelUniforms.refreshModelUniforms(su.hV(), Xu, Xu.model, this.view)), !Xu.bindable || Xu.bindGroup !== ju.bindGroup) return !1;
        const fu = su.computeWorldMatrix(),
          Cu = fu.updateFlag !== ju.worldFlag;
        return ju.worldFlag = fu.updateFlag, Zu.instances = qu, this.thinBundle.addAgain(ju.record, Zu, Cu ? fu.m : null, ju.visibility), ju.handedFrame = this.frame, this.m_.drawn++, !0
      }
      retainedDraw(uu, Eu, ju, su) {
        const Uu = this.inputs.get(Eu),
          Zu = null === Uu || void 0 === Uu ? void 0 : Uu.retained;
        if (!Uu || !Zu) return;
        const {
          drawState: Xu,
          program: lu,
          instance: qu,
          instancing: fu
        } = Zu, Cu = Eu.owner;
        if (XZ(Cu) !== fu) return;
        const bu = this.instanceCount(Cu, fu);
        if (bu <= 0) return null;
        if (qu.released || lu.failed || Xu.program !== lu || !this.drawDefines.programCurrent(Xu, Eu, fu, ju) || !this.inputsStamped(Uu, Eu, fu, lu) || Cu.isUnIndexed !== Zu.unIndexed || this.indexKey(Eu) !== Zu.indexData) return;
        if (Zu.indexBuffer && Zu.gpuVersion !== this.resources.gpuBuffersVersion) {
          const uu = this.resources.gpuBuffer(Zu.indexData);
          if (!uu) return;
          Zu.indexBuffer = uu, Zu.gpuVersion = this.resources.gpuBuffersVersion
        }
        let cu = !1;
        if (qu.frame !== this.frame && (cu = this.modelUniforms.refreshModelUniforms(uu, qu, qu.model, this.view)), !this.bindMaterial(qu, cu) || !this.withGpuBuffers(Uu) || !this.instanceBuffersFit(Cu.name, Uu, bu)) return null;
        const Nu = this.makeDraw(lu, Uu, this.renderStates.renderState(Xu.model, Cu, su, Uu.state), qu, bu);
        return this.setRange(Nu, Eu, Zu.indexBuffer, Zu.indexData), Nu
      }
      retain(uu, Eu) {
        const ju = this.drawDefines.drawStates.get(uu);
        if (!Eu || !ju || ju.program !== Eu.program) {
          const Eu = this.inputs.get(uu);
          return void(Eu && (Eu.retained = null))
        }
        const su = uu.owner,
          Uu = ju.instancing,
          Zu = this.indexKey(uu),
          Xu = Eu.inputs.retained;
        Xu ? (Xu.drawState = ju, Xu.instancing = Uu, Xu.program = Eu.program, Xu.instance = Eu.material, Xu.indexData = Zu, Xu.unIndexed = su.isUnIndexed, Xu.indexBuffer = Eu.indexBuffer, Xu.gpuVersion = this.resources.gpuBuffersVersion) : Eu.inputs.retained = {
          drawState: ju,
          instancing: Uu,
          program: Eu.program,
          instance: Eu.material,
          indexData: Zu,
          unIndexed: su.isUnIndexed,
          indexBuffer: Eu.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(uu, Eu, ju, su) {
        const Uu = Eu.owner,
          Zu = mZ(Eu);
        if (!Zu) return null;
        const Xu = Zu.getClassName();
        let lu = null;
        if (function(uu) {
            return "LinesMesh" === uu.getClassName()
          }(Uu)) {
          if (! function(uu) {
              return "ShaderMaterial" === uu.getClassName() && "color" === uu.shaderPath
            }(Zu)) return this.warnOnce(`lines:${Xu}`, `A LinesMesh with a ${Xu} is not drawn yet (${Zu.name})`), null;
          lu = Uu
        } else if ("StandardMaterial" !== Xu && "LiteMaterial" !== Xu) return this.warnOnce(`class:${Xu}`, `${Xu} is not drawn yet (${Zu.name})`), null;
        const qu = XZ(Uu),
          fu = this.instanceCount(Uu, qu);
        if (fu <= 0) return null;
        const Cu = lu ? this.lineProgramFor(Uu, ju, qu) : this.drawDefines.programFor(uu, Eu, Zu, ju, qu);
        if (!Cu || Cu.failed) return null;
        const bu = lu ? null : this.drawDefines.drawStates.get(Eu).model,
          cu = bu ? this.modelInstance(bu, Cu) : this.materialInstance(Uu, Cu);
        let Nu = !1;
        if (cu.frame !== this.frame && (lu ? gu(cu.ubo, lu) : Nu = this.modelUniforms.refreshModelUniforms(uu, cu, cu.model, this.view)), !this.bindMaterial(cu, Nu)) return null;
        const Ou = this.meshInputs(Eu, Cu, qu);
        if (!Ou || !this.instanceBuffersFit(Uu.name, Ou, fu)) return null;
        const Yu = this.indexKey(Eu);
        let hu = null;
        if (Yu && !Uu.isUnIndexed && (hu = this.resources.gpuBuffer(Yu), !hu)) return null;
        const Du = this.renderStates.renderState(null !== bu && void 0 !== bu ? bu : Zu, Uu, su, Ou.state, lu ? "line-list" : "triangle-list"),
          Mu = this.makeDraw(Cu, Ou, Du, cu, fu);
        return this.setRange(Mu, Eu, hu, Yu), Mu
      }
      indexKey(uu) {
        const Eu = CZ(uu);
        return Eu ? this.resources.modelIndex(Eu) : null
      }
      setRange(uu, Eu, ju, su) {
        ju && (uu.indexBuffer = ju, uu.indexFormat = this.resources.indexFormat(su));
        const Uu = 4 * Eu.range + (ju ? 0 : 2);
        uu.unit = Eu, uu.first = Eu.parts.HY[Uu], uu.count = Eu.parts.HY[Uu + 1]
      }
      makeDraw(uu, Eu, ju, su, Uu) {
        Eu.state !== ju && (Eu.state = ju, Eu.pipelineKey = `${uu.id}|${Eu.layout.key}|${ju.key}`, Eu.pipeline = null);
        const Zu = Eu.draw ??= {
          program: uu,
          inputs: Eu,
          pipelineKey: "",
          layout: Eu.layout,
          state: ju,
          material: su,
          slotOffset: 0,
          vertexBuffers: Eu.buffers,
          vertexOffsets: Eu.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Uu,
          unit: null
        };
        return Zu.program = uu, Zu.pipelineKey = Eu.pipelineKey, Zu.state = ju, Zu.material = su, Zu.vertexOffsets = Eu.offsets, Zu.indexBuffer = null, Zu.instances = Uu, Zu
      }
      instanceCount(uu, Eu) {
        switch (Eu) {
          case "thin":
            return uu.forcedInstanceCount || uu.F_;
          case "instanced":
            return this.prepareInstances(uu);
          case "none":
            return 1
        }
      }
      prepareInstances(uu) {
        const Eu = function(uu, Eu) {
          const ju = Eu._userInstancedBuffersStorage,
            su = uu.batchUploads.get(Eu);
          if (su) {
            var Uu;
            if (su.layout === (null !== (Uu = null === ju || void 0 === ju ? void 0 : ju.interleavedKinds) && void 0 !== Uu ? Uu : null)) return su;
            su.release()
          }
          return new NE(uu, Eu, ju)
        }(this.resources, uu);
        return Eu.frame !== this.frame && Eu.pack(uu, this.modelMeshes.instanceBatch(uu), this.modelMeshes.worlds, this.frame), Eu.count
      }
      programWithModel(uu, Eu, ju) {
        const su = this.modelSlot(uu),
          Uu = NZ(su, uu, ju),
          Zu = this.drawDefines.modelPackKind(uu),
          Xu = Zu ? function(uu, Eu, ju, su) {
            const Uu = (0, du.z)(uu, wu.h.name),
              Zu = [];
            for (const {
                feature: qu,
                state: fu,
                active: Cu
              }
              of uu.features) {
              var Xu, lu;
              const uu = Cu ? null === (Xu = (lu = (0, KE.h)(qu)).AN) || void 0 === Xu ? void 0 : Xu.call(lu, fu) : void 0;
              uu && Zu.push(uu)
            }
            return {
              kind: Eu,
              atlas: null !== Uu && void 0 !== Uu && Uu.active ? (0, wu.c)(Uu.state) : null,
              defines: ju,
              ...NX(Zu, su)
            }
          }(uu, Zu, Eu, su.fragmentCode) : null;
        if (Xu && function(uu) {
            const Eu = uu.defines;
            return (null === uu.atlas || !!Eu.DIFFUSE && 1 === Eu.DIFFUSEDIRECTUV) && !!Eu.NORMAL && !Eu.REFLECTION && !Eu.EMISSIVEASILLUMINATION && !Eu.LINKEMISSIVEWITHDIFFUSE
          }(Xu)) {
          const ju = this.modelPackProgram(uu, Eu, `${Uu}#${Zu}#sp${this.drawDefines.modelPackVariant}`, su, Xu);
          if (ju && !ju.failed) return ju
        }
        const lu = this.programs.get(Uu);
        if (lu || this.unbuildable.has(Uu)) return null !== lu && void 0 !== lu ? lu : null;
        let qu;
        try {
          qu = vU({
            defines: qZ(Eu),
            vertexCode: su.vertexCode,
            fragmentCode: su.fragmentCode,
            pluginUniforms: su.pluginUniforms
          })
        } catch (fu) {
          return this.unbuildable.add(Uu), this.warnOnce(`build:${Uu}`, `could not build a program for ${uu.name}: ${String(fu)}`), null
        }
        return this.createProgram(Uu, qu, "standard")
      }
      modelPackProgram(uu, Eu, ju, su, Uu) {
        const Zu = this.programs.get(ju);
        if (Zu || this.unbuildable.has(ju)) return null !== Zu && void 0 !== Zu ? Zu : null;
        const Xu = this.drawDefines.modelPackVariant;
        let lu;
        try {
          const uu = function(uu) {
              return (0, yE.e)(uu, "model")
            }(Xu),
            ju = aX(uu, Uu, su.vertexCode, su.fragmentCode);
          lu = mX(vU({
            defines: qZ(Eu),
            ...ju,
            pluginUniforms: su.pluginUniforms
          }), uu, Uu, !!this.sunShadow)
        } catch (Cu) {
          return this.unbuildable.add(ju), this.warnOnce(`build:${ju}`, `could not build a shader pack program for ${uu.name}, which draws without the pack: ${String(Cu)}`), null
        }
        const qu = HZ(Xu, !!this.sunShadow),
          fu = {
            group: this.packInputs.bindGroupFor(null, qu),
            layout: xZ(this.device, {
              depth: !1,
              sunShadow: qu
            })
          };
        return this.createProgram(ju, lu, function(uu) {
          return `standard-sp${uu}`
        }(Xu), fu)
      }
      lineProgramFor(uu, Eu, ju) {
        const su = Du(uu, ju, Eu, this.view);
        let Uu = this.linePrograms.get(su);
        var Zu;
        return Uu || (Uu = this.createProgram(`lines#${su}`, (Zu = function(uu) {
          const Eu = new Map;
          for (let ju = 0; ju < fu.length; ju++) uu & 1 << ju && Eu.set(fu[ju], !0);
          return Eu
        }(su), QU({
          defines: Zu,
          vertex: VU,
          fragment: rU,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(su, Uu)), Uu
      }
      createProgram(uu, Eu, ju) {
        var su;
        let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Zu = this.nextProgramId++,
          Xu = `${ju}-${Zu}`,
          lu = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          qu = [{
            binding: 0,
            visibility: lu,
            buffer: {
              type: "uniform"
            }
          }];
        for (const bu of Eu.textures) qu.push({
          binding: bu.binding,
          visibility: lu,
          texture: {
            viewDimension: bu.dimension
          }
        }), qu.push({
          binding: bu.samplerBinding,
          visibility: lu,
          sampler: {}
        });
        const fu = this.device.createBindGroupLayout({
            label: Xu,
            entries: qu
          }),
          Cu = {
            key: uu,
            id: Zu,
            kind: ju,
            program: Eu,
            vertex: this.device.createShaderModule({
              label: `${Xu}-vertex`,
              code: Eu.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Xu}-fragment`,
              code: Eu.fragment
            }),
            materialLayout: fu,
            pipelineLayout: this.device.createPipelineLayout({
              label: Xu,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, fu, ...Uu ? [Uu.layout] : []]
            }),
            packGroup: null !== (su = null === Uu || void 0 === Uu ? void 0 : Uu.group) && void 0 !== su ? su : null,
            failed: !1
          };
        return this.programs.set(uu, Cu), Cu
      }
      writeFrameUniforms() {
        const uu = this.frameUniforms;
        eZ(this.view, uu), this.device.queue.writeBuffer(this.frameBuffer, 0, uu)
      }
      materialInstance(uu, Eu) {
        let ju = this.materials.get(uu);
        if (!ju) {
          const Eu = new Map;
          this.materials.set(uu, Eu);
          const {
            resources: su,
            materials: Uu
          } = this;
          uu.wV.addOnce((() => {
            for (const uu of Eu.values()) uu.released = !0, su.destroyBuffer(uu.buffer);
            Uu.delete(uu)
          })), ju = Eu
        }
        let su = ju.get(Eu.key);
        return su || (su = this.newMaterialInstance(uu, null, Eu), ju.set(Eu.key, su)), su
      }
      modelInstance(uu, Eu) {
        const ju = this.modelSlot(uu);
        let su = ju.instances.get(Eu.key);
        return su || (su = this.newMaterialInstance(uu, uu, Eu), ju.instances.set(Eu.key, su)), su
      }
      modelSlot(uu) {
        var Eu;
        let ju = uu.gpu[Pu.f.lite];
        return (null === (Eu = ju) || void 0 === Eu ? void 0 : Eu.epoch) !== this.resources.epoch && (ju = new KX(this.resources, this.resources.epoch), uu.gpu[Pu.f.lite] = ju), ju
      }
      newMaterialInstance(uu, Eu, ju) {
        const su = ju.program.material.floats,
          Uu = new Float32Array(su),
          Zu = new Map;
        return {
          owner: uu,
          model: Eu,
          program: ju,
          data: Uu,
          uploaded: new Float32Array(su).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${uu.name}-uniforms`,
            size: Math.max(16, 4 * su),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Zu,
          ubo: new MZ(ju.program.material.slots, Uu, Zu),
          bindGroup: null,
          bound: new Array(2 * ju.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(uu) {
        var Eu;
        const ju = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: FU + BU,
            fragment: FU + LU,
            attributes: [],
            material: IU,
            textures: []
          }, "earthSky"),
          su = this.earthSkyUniforms ??= this.newMaterialInstance(vX, null, ju);
        this.earthSkyFrom !== uu && (this.earthSkyFrom = uu, su.data.fill(0)), zU(su.ubo, uu, this.view);
        const Uu = this.vertexInputs(ju, vX, "earthSky", ju, null);
        if (ju.failed || !Uu || !this.bindMaterial(su, !1)) return;
        const Zu = null !== (Eu = Uu.state) && void 0 !== Eu ? Eu : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Xu = this.makeDraw(ju, Uu, Zu, su, 1);
        Xu.count = iU.length;
        const lu = RU(uu, this.view);
        Xu.slotOffset = this.writeMeshSlot(lu, 1), this.lists.skyDraws.push(Xu)
      }
      uploadIfChanged(uu) {
        const {
          data: Eu,
          uploaded: ju
        } = uu;
        for (let su = 0; su < Eu.length; su++)
          if (Eu[su] !== ju[su]) return ju.set(Eu), void this.device.queue.writeBuffer(uu.buffer, 0, Eu)
      }
      bindMaterial(uu, Eu) {
        return uu.frame !== this.frame && (uu.frame = this.frame, Eu || this.uploadIfChanged(uu), uu.bindable = this.bindTextures(uu)), uu.bindable
      }
      bindTextures(uu) {
        const {
          program: Eu,
          bound: ju
        } = uu, su = Eu.program.textures;
        let Uu = !uu.bindGroup,
          Zu = !0;
        for (let Xu = 0; Xu < su.length; Xu++) {
          const Eu = uu.textures.get(su[Xu].name),
            lu = Eu ? this.resources.boundTexture(Eu) : null;
          lu ? ju[2 * Xu] === lu.view && ju[2 * Xu + 1] === lu.sampler || (ju[2 * Xu] = lu.view, ju[2 * Xu + 1] = lu.sampler, Uu = !0) : (Eu || uu.ubo.expected.has(su[Xu].name) || this.warnOnce(`texture:${uu.owner.name}:${su[Xu].name}`, `${uu.owner.name} has no ${su[Xu].name}`), Zu = !1)
        }
        if (!Zu) return Uu && (uu.bindGroup = null), !1;
        if (Uu) {
          const Uu = [{
            binding: 0,
            resource: {
              buffer: uu.buffer
            }
          }];
          for (let uu = 0; uu < su.length; uu++) Uu.push({
            binding: su[uu].binding,
            resource: ju[2 * uu]
          }), Uu.push({
            binding: su[uu].samplerBinding,
            resource: ju[2 * uu + 1]
          });
          uu.bindGroup = this.device.createBindGroup({
            label: `${uu.owner.name}-material`,
            layout: Eu.materialLayout,
            entries: Uu
          })
        }
        return !0
      }
      writeMeshSlot(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, uu, Eu, ju), this.slotCount++ * bU
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(uu, Eu, ju, su, Uu) {
        let Zu = this.inputs.get(uu);
        if (!Zu || Zu.program !== su || !aZ(Eu, Zu, this.resources, Uu)) {
          var Xu;
          if (Zu = null !== (Xu = this.vertexLayouts.resolveInputs(Eu, ju, su, Uu)) && void 0 !== Xu ? Xu : void 0, !Zu) return null;
          this.inputs.set(uu, Zu)
        }
        return this.withGpuBuffers(Zu)
      }
      meshInputs(uu, Eu, ju) {
        const su = this.inputs.get(uu);
        if (su && this.inputsStamped(su, uu, ju, Eu)) return this.withGpuBuffers(su);
        const Uu = uu.owner,
          Zu = CZ(uu),
          Xu = this.vertexInputs(uu, Uu, Uu.name, Eu, Zu);
        return Xu && (Xu.geometry = bZ(uu), Xu.instanceLayout = this.drawDefines.instanceLayout(Uu, ju)), Xu
      }
      inputsStamped(uu, Eu, ju, su) {
        return function(uu, Eu, ju, su) {
          return uu.program === ju && uu.geometry === bZ(Eu) && uu.instanceLayout === su
        }(uu, Eu, su, this.drawDefines.instanceLayout(Eu.owner, ju))
      }
      withGpuBuffers(uu) {
        return yZ(uu, this.resources, this.zeroBuffer) ? uu : null
      }
      instanceBuffersFit(uu, Eu, ju) {
        const su = RZ(Eu, ju, this.resources, this.zeroBuffer);
        if (su) {
          const Uu = Eu.ends[su.index] - Eu.offsets[su.index] + Eu.Q_[su.index];
          return this.warnOnce(`overrun:${uu}`, `${uu} draws ${ju} instances from a ${Uu}-byte buffer (${su.needed} needed)`), !1
        }
        return !0
      }
      createBinding(uu, Eu, ju, su) {
        const Uu = `${Eu._colorFormat}|${Eu._depthStencilFormat}|${Eu._depthCompare}|${Eu._sampleCount}`,
          Zu = oE(this.device, Eu);
        if (uu === this.skyLastRenderable) {
          let ju = null;
          return {
            renderable: uu,
            pipeline: Zu,
            draw: uu => ju ? this.drawSky(uu, Eu, Uu, ju) : 0,
            update: uu => {
              ju = uu
            }
          }
        }
        return {
          renderable: uu,
          pipeline: Zu,
          draw: uu => (su ? su.execute(uu, Eu, Uu) : 0) + this.drawList(uu, Eu, Uu, ju)
        }
      }
      drawSky(uu, Eu, ju, su) {
        const Uu = this.lists.skyDraws,
          Zu = Uu.length > 0;
        if (Zu) {
          var Xu;
          const ju = (null !== (Xu = Eu._depthCompare) && void 0 !== Xu ? Xu : JE).startsWith("greater") ? 0 : 1;
          uu.setViewport(0, 0, su.targetWidth, su.targetHeight, ju, ju)
        }
        const lu = this.drawList(uu, Eu, ju, Uu);
        return Zu && uu.setViewport(0, 0, su.targetWidth, su.targetHeight, 0, 1), lu
      }
      drawList(uu, Eu, ju, su) {
        let Uu = 0;
        const Zu = this.binder;
        Zu.reset();
        for (const Xu of su) {
          const su = this.pipelineFor(Xu, Eu, ju);
          su && (Zu.bind(uu, Xu, su, this.meshSlots.bindGroup, Xu.slotOffset), Xu.indexBuffer ? uu.drawIndexed(Xu.count, Xu.instances, Xu.first, 0, 0) : uu.draw(Xu.count, Xu.instances, Xu.first, 0), Uu++)
        }
        return Uu
      }
      pipelineFor(uu, Eu, ju) {
        var su, Uu;
        if (uu.program.failed) return null;
        const Zu = uu.inputs;
        if (Zu.pipeline && Zu.pipelineTarget === ju) return Zu.pipeline;
        const Xu = `${uu.pipelineKey}|${ju}`,
          lu = this.pipelines.get(Xu);
        if (void 0 !== lu) return lu && (Zu.pipeline = lu, Zu.pipelineTarget = ju), lu || null;
        this.pipelines.set(Xu, null);
        const {
          program: qu,
          layout: fu,
          state: Cu
        } = uu, bu = {
          label: `standard-${qu.id}`,
          layout: qu.pipelineLayout,
          vertex: {
            module: qu.vertex,
            entryPoint: "main",
            buffers: fu.buffers
          },
          fragment: gE({
            module: qu.fragment,
            entryPoint: "main"
          }, Eu, Cu.blend, Cu.colourWrite),
          depthStencil: Eu._depthStencilFormat ? {
            format: Eu._depthStencilFormat,
            depthCompare: null !== (su = null !== (Uu = Cu.depthCompare) && void 0 !== Uu ? Uu : Eu._depthCompare) && void 0 !== su ? su : JE,
            depthWriteEnabled: Cu.depthWrite,
            depthBias: Cu.depthBias,
            depthBiasSlopeScale: Cu.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Eu._sampleCount
          },
          primitive: {
            topology: Cu.topology,
            frontFace: Cu.frontFace,
            cullMode: Cu.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(bu).then((uu => {
          this.compiling--, this.pipelines.set(Xu, uu)
        }), (uu => {
          this.compiling--, this.reportFailure(qu, Xu, uu)
        })), null
      }
      forEachSunShadowCaster(uu) {
        const Eu = this.caster,
          ju = (ju, su, Uu) => {
            const Zu = ju.unit && function(uu) {
              const Eu = uu.material.model;
              return null !== Eu && (Eu.lifeform || Eu.item) && Eu.castsSunShadow && "triangle-list" === uu.state.topology
            }(ju) ? CZ(ju.unit) : null;
            if (!Zu) return;
            const Xu = ju.unit.owner;
            switch (Eu.geometry = Zu, Eu.skip = Xu.noSunShadowVertices, Eu.indexed = null !== ju.indexBuffer, Eu.first = ju.first, Eu.count = ju.count, Eu.zb = su, Eu.worldAt = Uu, Eu.instances = null, Eu.instanceCount = 1, Eu.thin = !1, XZ(Xu)) {
              case "thin": {
                const uu = Xu._thinInstanceDataStorage.matrixData;
                if (!uu) return;
                Eu.instances = uu, Eu.instanceCount = Math.min(ju.instances, uu.length / 16), Eu.thin = !0;
                break
              }
              case "instanced": {
                const uu = this.resources.batchUploads.get(Xu);
                if (!uu || uu.frame !== this.frame || !this.writeBatchCasters(uu)) return;
                break
              }
            }
            uu(Eu)
          };
        for (const su of this.lists.opaqueDraws) ju(su, this.meshSlots.data, su.slotOffset / 4);
        this.thinBundle.forEachDrawn(ju)
      }
      writeBatchCasters(uu) {
        const {
          caster: Eu
        } = this, ju = uu.packedMatrices, su = uu.count;
        Eu.instances = ju, Eu.instanceCount = su;
        let Uu = -1;
        for (let Zu = 0; Zu < su; Zu++) {
          const Eu = QX(uu.packedRowMesh(Zu));
          Eu && Uu < 0 ? (this.casterWorlds.length < 16 * su && (this.casterWorlds = new Float32Array(ju.length)), this.casterWorlds.set(ju.subarray(0, 16 * Zu)), Uu = Zu) : !Eu && Uu >= 0 && (this.casterWorlds.set(ju.subarray(16 * Zu, 16 * Zu + 16), 16 * Uu), Uu++)
        }
        return Uu >= 0 && (Eu.instances = this.casterWorlds, Eu.instanceCount = Uu), Eu.instanceCount > 0
      }
      async reportFailure(uu, Eu, ju) {
        const su = [];
        let Uu = !0;
        for (const [Zu, Xu] of [
            ["vertex", uu.vertex],
            ["fragment", uu.fragment]
          ]) {
          const uu = await Xu.getCompilationInfo();
          for (const Eu of uu.messages) Uu &&= "error" !== Eu.type, su.push(`${Zu}:${Eu.lineNum}:${Eu.linePos} ${Eu.type}: ${Eu.message}`)
        }
        if (Uu && !uu.packGroup) return this.pipelines.set(Eu, !1), console.error(`Lite: pipeline ${Eu} failed`, ju), void CE(this.device, "mesh", uu.kind, ju);
        uu.failed || (uu.failed = !0, console.error(`Lite: program ${uu.id} failed`, ju, su.join("\n"), {
          program: uu.program,
          key: uu.key
        }), CE(this.device, "mesh", uu.kind, ju, Uu ? null : su[0]))
      }
    }

    function QX(uu) {
      var Eu, ju;
      const su = null === (Eu = uu.Hr) || void 0 === Eu || null === (ju = Eu.aShaderPackItem) || void 0 === ju ? void 0 : ju.x;
      return void 0 !== su && 0 !== (su & mE.h)
    }
    var iX = ju(41938),
      WX = ju(41943),
      SX = ju(41951),
      IX = ju(41906);
    const FX = [0, 3, 1, 4, 2, 5];

    function BX(uu, Eu, ju, su, Uu) {
      const Zu = ju[0].width;
      try {
        return Uu ? function(uu, Eu, ju) {
          const su = (0, IX.c)(uu, ju, ju, 6);
          for (let Uu = 0; Uu < 6; Uu++)(0, IX.d)(uu, su, Uu, Eu[FX[Uu]], {
            invertY: !1
          });
          return su.texture
        }(uu, ju, Zu) : function(uu, Eu, ju, su) {
          const Uu = uu.createTexture({
            label: "sink-cube",
            size: {
              width: ju,
              height: ju,
              depthOrArrayLayers: 6
            },
            format: su,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Zu = 0; Zu < 6; Zu++) uu.queue.copyExternalImageToTexture({
            source: Eu[FX[Zu]]
          }, {
            texture: Uu,
            origin: {
              x: 0,
              y: 0,
              z: Zu
            }
          }, {
            width: ju,
            height: ju
          });
          return Uu
        }(Eu, ju, Zu, 1 === su ? "r8unorm" : "rgba8unorm")
      } finally {
        LX(ju)
      }
    }

    function LX(uu) {
      for (const Eu of null !== uu && void 0 !== uu ? uu : []) null === Eu || void 0 === Eu || Eu.close()
    }
    async function tX(uu) {
      const Eu = [],
        ju = [];
      if (await Promise.all(uu.map(((uu, su) => (Eu[su] = null, uu.then((uu => {
          Eu[su] = uu
        }), (uu => {
          ju.push(uu)
        })))))), ju.length > 0) throw LX(Eu), ju[0];
      return Eu
    }
    class xX {
      constructor(uu) {
        this.Mb = uu, this.starts = [], this.lengths = [], this.used = 0, uu > 0 && (this.starts.push(0), this.lengths.push(uu))
      }
      allocate(uu) {
        const {
          starts: Eu,
          lengths: ju
        } = this;
        for (let su = 0; su < Eu.length; su++) {
          if (ju[su] < uu) continue;
          const Uu = Eu[su];
          return ju[su] === uu ? (Eu.splice(su, 1), ju.splice(su, 1)) : (Eu[su] += uu, ju[su] -= uu), this.used += uu, Uu
        }
        return -1
      }
      free(uu, Eu) {
        this.used -= Eu;
        const ju = Math.min(uu + Eu, this.Mb);
        ju > uu && this.release(uu, ju - uu)
      }
      grow(uu) {
        const Eu = this.Mb;
        this.Mb = uu, this.release(Eu, uu - Eu)
      }
      truncate(uu) {
        const {
          starts: Eu,
          lengths: ju
        } = this;
        for (let su = Eu.length - 1; su >= 0 && Eu[su] + ju[su] > uu; su--) Eu[su] >= uu ? (Eu.splice(su, 1), ju.splice(su, 1)) : ju[su] = uu - Eu[su];
        this.Mb = uu
      }
      release(uu, Eu) {
        const {
          starts: ju,
          lengths: su
        } = this;
        let Uu = 0,
          Zu = ju.length;
        for (; Uu < Zu;) {
          const Eu = Uu + Zu >> 1;
          ju[Eu] < uu ? Uu = Eu + 1 : Zu = Eu
        }
        const Xu = Uu,
          lu = Xu > 0 && ju[Xu - 1] + su[Xu - 1] === uu,
          qu = Xu < ju.length && uu + Eu === ju[Xu];
        lu && qu ? (su[Xu - 1] += Eu + su[Xu], ju.splice(Xu, 1), su.splice(Xu, 1)) : lu ? su[Xu - 1] += Eu : qu ? (ju[Xu] = uu, su[Xu] += Eu) : (ju.splice(Xu, 0, uu), su.splice(Xu, 0, Eu))
      }
    }
    const TX = 256;
    class HX {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = uu, this.onReplaced = Eu, this.mergeGap = ju, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.HY = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Uu = Math.max(TX, Math.ceil(su / TX) * TX);
        this.bytes = new Uint8Array(Uu), this.words = new Uint32Array(this.bytes.buffer), this.HY = new xX(Uu / TX)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(uu) {
        return Math.max(1, Math.ceil(uu / TX)) * TX
      }
      allocate(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu;
        const su = HX.slotBytes(uu),
          Uu = su / TX;
        let Zu = this.HY.allocate(Uu);
        Zu < 0 && (this.grow(this.HY.Mb + Uu), Zu = this.HY.allocate(Uu));
        const Xu = Zu * TX;
        return this.growTo(Xu + Math.max(ju, su)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Xu, Xu + su), Eu && this.bytes.set(new Uint8Array(Eu.buffer, Eu.byteOffset, Math.min(Eu.byteLength, su)), Xu), this.markDirty(Xu, Xu + su), Xu
      }
      growTo(uu) {
        const Eu = Math.ceil(uu / TX);
        Eu > this.HY.Mb && this.grow(Eu)
      }
      free(uu, Eu) {
        this.freed.push(uu, Eu)
      }
      write(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (su <= 0) return;
        su <= 1024 && 0 === (3 & (uu | ju | su)) ? this.copyWords(uu >> 2, Eu.buffer, ju >> 2, su >> 2) : this.bytes.set(new Uint8Array(Eu.buffer, ju, su), uu);
        let Zu = uu + su;
        if (Uu) {
          const Eu = uu + 4 * Math.ceil(su / 4);
          this.bytes.fill(0, Zu, Eu), Zu = Eu
        }
        this.markDirty(uu, Zu)
      }
      copyWords(uu, Eu, ju, su) {
        let Uu = this.sourceWords.get(Eu);
        Uu || (Uu = new Uint32Array(Eu, 0, Eu.byteLength >> 2), this.sourceWords.set(Eu, Uu));
        const Zu = this.words;
        for (let Xu = 0; Xu < su; Xu++) Zu[uu + Xu] = Uu[ju + Xu]
      }
      move(uu, Eu, ju) {
        this.bytes.copyWithin(Eu, uu, uu + ju), this.markDirty(Eu, Eu + ju)
      }
      flush() {
        for (const Eu of this.retired) this.onReplaced(Eu), Eu.destroy();
        this.retired.length = 0;
        const uu = this.dirtyStarts.length;
        if (uu > 0) {
          const {
            dirtyStarts: Eu,
            dirtyEnds: ju,
            order: su
          } = this;
          su.length = uu;
          for (let lu = 0; lu < uu; lu++) su[lu] = lu;
          uu > 1 && su.sort(((uu, ju) => Eu[uu] - Eu[ju]));
          const Uu = this.mergeGap;
          let Zu = Eu[su[0]],
            Xu = ju[su[0]];
          for (let lu = 1; lu < uu; lu++) {
            const uu = su[lu];
            Eu[uu] - Xu <= Uu ? Xu = Math.max(Xu, ju[uu]) : (this.send(Zu, Xu), Zu = Eu[uu], Xu = ju[uu])
          }
          this.send(Zu, Xu), Eu.length = 0, ju.length = 0
        }
        this.holding = !1
      }
      JG() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const uu = this.freed;
        for (let Eu = 0; Eu < uu.length; Eu += 2) this.HY.free(uu[Eu] / TX, uu[Eu + 1] / TX);
        uu.length = 0
      }
      send(uu, Eu) {
        this.device.queue.writeBuffer(this.gpu, uu, this.bytes.buffer, uu, Eu - uu);
        for (const ju of this.replaced) {
          const su = Math.min(Eu, ju.size);
          su > uu && this.device.queue.writeBuffer(ju, uu, this.bytes.buffer, uu, su - uu)
        }
      }
      markDirty(uu, Eu) {
        uu &= -4, Eu = Eu + 3 & -4, this.holding ? (this.dirtyStarts.push(uu), this.dirtyEnds.push(Eu)) : this.send(uu, Eu)
      }
      grow(uu) {
        const Eu = this.HY.Mb,
          ju = Math.max(2 * Eu, uu),
          su = new Uint8Array(ju * TX);
        su.set(this.bytes);
        const Uu = this.gpu;
        this.gpu = this.createGpu(su.byteLength), this.bytes = su, this.words = new Uint32Array(su.buffer), this.HY.grow(ju), Uu && (this.replaced.push(Uu), this.onReplaced(Uu)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Eu * TX)
      }
      createGpu(uu) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: uu,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function AX(uu) {
      return Array.isArray(uu) ? new Float32Array(uu) : uu
    }

    function nX(uu, Eu, ju, su, Uu) {
      const Zu = Tu(Uu),
        Xu = Math.min(Uu, su.byteLength);
      if (Zu === Xu && su.byteOffset % 4 === 0) return void uu.queue.writeBuffer(Eu, ju, su.buffer, su.byteOffset, Zu);
      const lu = new Uint8Array(Zu);
      lu.set(new Uint8Array(su.buffer, su.byteOffset, Xu)), uu.queue.writeBuffer(Eu, ju, lu)
    }

    function yX(uu, Eu, ju) {
      const su = "linear",
        Uu = "nearest";
      let Zu = Uu,
        Xu = Uu,
        lu = "nearest",
        qu = !Eu;
      switch (uu) {
        case 11:
          Zu = su, Xu = su;
          break;
        case 3:
          Zu = su, Xu = su, lu = Eu ? "linear" : "nearest";
          break;
        case 8:
          lu = Eu ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Xu = su;
          break;
        case 6:
          Xu = su, lu = Eu ? "linear" : "nearest";
          break;
        case 7:
          Xu = su, qu = !0;
          break;
        case 9:
          Zu = su;
          break;
        case 10:
          Zu = su, lu = Eu ? "linear" : "nearest";
          break;
        case 2:
          Zu = su, Xu = su, ju > 1 ? (lu = "linear", qu = !1) : qu = !0;
          break;
        case 12:
          Zu = su, qu = !0;
          break;
        default:
          qu = !0
      }
      return ju > 1 && !qu ? {
        magFilter: su,
        minFilter: su,
        mipmapFilter: "linear",
        maxAnisotropy: ju
      } : {
        magFilter: Zu,
        minFilter: Xu,
        mipmapFilter: lu,
        ...qu ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function zX(uu) {
      return 0 === uu ? "clamp-to-edge" : 2 === uu ? "mirror-repeat" : "repeat"
    }
    class RX {
      constructor(uu, Eu) {
        let {
          vertexArena: ju = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = uu, this.device = Eu, this.buffers = new WeakMap, this.E_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = ju ? this.createArena() : null
      }
      createArena() {
        return new HX(this.device, (uu => {
          var Eu;
          null === (Eu = this.onDestroy) || void 0 === Eu || Eu.call(this, uu), this.gpuBuffersVersion++
        }))
      }
      rebind(uu, Eu) {
        this.engine = uu, this.device = Eu, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const ju of this.liveUploads) ju.rebind();
        for (const ju of this.rebindWaiters.splice(0)) ju()
      }
      flushUploads() {
        var uu;
        null === (uu = this.arena) || void 0 === uu || uu.flush()
      }
      endUploadFrame() {
        var uu;
        null === (uu = this.arena) || void 0 === uu || uu.JG()
      }
      vertexBufferCreated(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ju ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(uu);
        const Uu = AX(Eu);
        uu.Mb = Uu.byteLength, this.buffers.set(uu, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: ju && null !== this.arena,
          pending: Uu,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: su
        })
      }
      vertexBufferUpdated(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        const Uu = this.buffers.get(uu);
        if (!Uu) return;
        const Zu = AX(Eu),
          Xu = void 0 === su ? Zu.byteLength : Math.min(su, Zu.byteLength);
        this.update(Uu, Zu, ju, Xu)
      }
      vertexBufferFloatsUpdated(uu, Eu, ju, su) {
        const Uu = this.buffers.get(uu);
        if (!Uu) return;
        const Zu = ju * Float32Array.BYTES_PER_ELEMENT,
          Xu = (su - ju) * Float32Array.BYTES_PER_ELEMENT;
        Uu.slot >= 0 && Xu > 0 && Zu + Xu <= Uu.size ? this.writeSlot(Uu, Zu, Eu, Eu.byteOffset + Zu, Xu, !1) : Uu.gpu && Xu > 0 && Zu + Xu <= Uu.gpu.size ? this.device.queue.writeBuffer(Uu.gpu, Zu, Eu.buffer, Eu.byteOffset + Zu, Xu) : this.update(Uu, Eu.subarray(ju, su), Zu, Xu)
      }
      indexBufferCreated(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(uu);
        const su = function(uu) {
          if (uu instanceof Uint16Array || uu instanceof Uint32Array) return uu;
          for (let Eu = 0; Eu < uu.length; Eu++)
            if (uu[Eu] >= 65535) return new Uint32Array(uu);
          return new Uint16Array(uu)
        }(Eu);
        uu.is32Bits = 4 === su.BYTES_PER_ELEMENT, uu.Mb = su.byteLength, this.buffers.set(uu, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: su,
          ownsPending: su !== Eu,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: ju
        })
      }
      bufferDeleted(uu) {
        const Eu = this.buffers.get(uu);
        null !== Eu && void 0 !== Eu && Eu.gpu ? (this.destroyBuffer(Eu.gpu), this.gpuBuffersVersion++) : Eu && Eu.slot >= 0 && (this.arena.free(Eu.slot, Eu.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(uu)
      }
      update(uu, Eu, ju, su) {
        if (uu.slot >= 0) this.updateSlot(uu, Eu, ju, su);
        else if (uu.gpu) {
          if (ju + Tu(su) > uu.gpu.size) {
            const Eu = this.device.createBuffer({
                label: uu.label,
                size: Tu(Math.max(2 * uu.gpu.size, ju + su)),
                usage: uu.usage | GPUBufferUsage.COPY_SRC
              }),
              Uu = this.device.createCommandEncoder();
            Uu.copyBufferToBuffer(uu.gpu, 0, Eu, 0, uu.gpu.size), this.device.queue.submit([Uu.finish()]), this.destroyBuffer(uu.gpu), this.gpuBuffersVersion++, uu.gpu = Eu
          }
          nX(this.device, uu.gpu, ju, Eu, su)
        } else {
          const Zu = new Uint8Array(Eu.buffer, Eu.byteOffset, su),
            Xu = uu.pending;
          if (Xu && uu.ownsPending && ju + su <= Xu.byteLength) new Uint8Array(Xu.buffer, Xu.byteOffset, Xu.byteLength).set(Zu, ju);
          else if (Xu && 0 === ju && su === Xu.byteLength && Eu.byteLength === su) uu.pending = Eu, uu.ownsPending = !1;
          else {
            var Uu;
            const Eu = new Uint8Array(Math.max(null !== (Uu = null === Xu || void 0 === Xu ? void 0 : Xu.byteLength) && void 0 !== Uu ? Uu : 0, ju + su));
            Xu && Eu.set(new Uint8Array(Xu.buffer, Xu.byteOffset, Xu.byteLength)), Eu.set(Zu, ju), uu.pending = Eu, uu.ownsPending = !0
          }
        }
      }
      updateSlot(uu, Eu, ju, su) {
        const Uu = this.arena;
        ju + Tu(su) > uu.size && (uu.size = Tu(Math.max(2 * uu.size, ju + su)), Uu.growTo(uu.slot + uu.size), this.gpuBuffersVersion++), 0 === su ? this.writeSlot(uu, ju, El, 0, 4, !1) : this.writeSlot(uu, ju, Eu, Eu.byteOffset, su, !0)
      }
      writeSlot(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Eu + (Zu ? Tu(Uu) : Uu);
        Xu > uu.slotBytes && this.moveSlot(uu, Xu), this.arena.write(uu.slot + Eu, ju, su, Uu, Zu)
      }
      moveSlot(uu, Eu) {
        const ju = this.arena,
          su = HX.slotBytes(Math.max(Eu, Math.min(2 * uu.slotBytes, uu.size))),
          Uu = ju.allocate(su, null, uu.size);
        ju.move(uu.slot, Uu, uu.slotBytes), ju.free(uu.slot, uu.slotBytes), uu.slot = Uu, uu.slotBytes = su, this.gpuBuffersVersion++
      }
      cover(uu, Eu) {
        const ju = this.buffers.get(uu);
        if (!ju || ju.slot < 0) return !1;
        const su = Math.min(Eu, ju.size);
        return !(su <= ju.slotBytes) && (this.moveSlot(ju, su), !0)
      }
      destroyBuffer(uu) {
        var Eu;
        null === (Eu = this.onDestroy) || void 0 === Eu || Eu.call(this, uu), uu.destroy()
      }
      gpuBuffer(uu) {
        const Eu = this.buffers.get(uu);
        if (!Eu) return null;
        if (Eu.slot >= 0) return this.arena.buffer;
        if (Eu.arena && Eu.pending) {
          const uu = Eu.pending,
            ju = this.arena;
          return Eu.size = Tu(uu.byteLength), Eu.slotBytes = HX.slotBytes(function(uu) {
            const Eu = new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength);
            let ju = Eu.length;
            if (uu.byteOffset % 4 === 0) {
              for (; ju % 4 !== 0 && 0 === Eu[ju - 1];) ju--;
              if (ju % 4 === 0) {
                const Eu = new Uint32Array(uu.buffer, uu.byteOffset, ju / 4);
                let su = Eu.length;
                for (; su > 0 && 0 === Eu[su - 1];) su--;
                ju = 4 * su
              }
            }
            for (; ju > 0 && 0 === Eu[ju - 1];) ju--;
            return ju
          }(uu)), Eu.slot = ju.allocate(Eu.slotBytes, uu, Eu.size), Eu.pending = null, ju.buffer
        }
        if (!Eu.gpu && Eu.pending) {
          const uu = Eu.pending;
          Eu.gpu = this.device.createBuffer({
            label: Eu.label,
            size: Tu(uu.byteLength),
            usage: Eu.usage
          }), nX(this.device, Eu.gpu, 0, uu, uu.byteLength), Eu.pending = null
        }
        return Eu.gpu
      }
      gpuOffset(uu) {
        var Eu, ju;
        const su = null !== (Eu = null === (ju = this.buffers.get(uu)) || void 0 === ju ? void 0 : ju.slot) && void 0 !== Eu ? Eu : -1;
        return su < 0 ? 0 : su
      }
      gpuEnd(uu) {
        var Eu, ju;
        const su = this.buffers.get(uu);
        return su ? su.slot >= 0 ? su.slot + su.size : null !== (Eu = null === (ju = su.gpu) || void 0 === ju ? void 0 : ju.size) && void 0 !== Eu ? Eu : 0 : 0
      }
      vertexInput(uu, Eu, ju) {
        var su, Uu, Zu, Xu;
        return null !== (su = null !== (Uu = ju && this.modelInput(ju, Eu)) && void 0 !== Uu ? Uu : null === (Zu = null !== (Xu = this.E_.get(uu)) && void 0 !== Xu ? Xu : this.batchUploads.get(uu)) || void 0 === Zu ? void 0 : Zu.inputs[Eu]) && void 0 !== su ? su : null
      }
      modelInput(uu, Eu) {
        const ju = this.geometrySlot(uu);
        let su = ju.inputs.get(Eu);
        if (void 0 === su) {
          const Uu = uu.vertexAttributes.find((uu => uu.kind === Eu));
          su = Uu ? new OE(this.modelKey(ju, Uu.data, !1), Uu.offset, Uu.stride, Uu.components, !1, Uu.glType, Uu.isNormalized) : null, ju.inputs.set(Eu, su)
        }
        return su
      }
      modelIndex(uu) {
        return uu.indexData && this.modelKey(this.geometrySlot(uu), uu.indexData, !0)
      }
      geometrySlot(uu) {
        var Eu;
        let ju = uu.gpu[Pu.f.lite];
        if ((null === (Eu = ju) || void 0 === Eu ? void 0 : Eu.epoch) !== this.epoch) {
          const Eu = new Map,
            su = () => {
              for (const uu of Eu.values()) this.bufferDeleted(uu)
            },
            Uu = uu => {
              const ju = Eu.get(uu);
              ju && this.vertexBufferUpdated(ju, uu)
            };
          ju = {
            keys: Eu,
            inputs: new Map,
            release: su,
            updated: Uu,
            epoch: this.epoch
          }, uu.gpu[Pu.f.lite] = ju
        }
        return ju
      }
      modelKey(uu, Eu, ju) {
        let su = uu.keys.get(Eu);
        if (!su) {
          if (ju) {
            const uu = {
              Mb: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(uu, Eu, "model-indices"), su = uu
          } else su = {
            Mb: 0
          }, this.vertexBufferCreated(su, Eu, !1, "model-vertices");
          uu.keys.set(Eu, su)
        }
        return su
      }
      indexFormat(uu) {
        return uu.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(uu, Eu) {
        --uu.refs > 0 || (this.releaseTexture(uu), LX(uu.images), null !== Eu && this.textures.delete(Eu))
      }
      load(uu, Eu) {
        const {
          epoch: ju
        } = this, su = Eu.decoded = async function(uu) {
          if ("cube" === uu.kind) return async function(uu) {
            if (6 !== uu.length) throw new Error(`${uu.length} files where six faces were expected`);
            const Eu = await tX(uu.map((uu => Ru(uu)))),
              ju = Eu[0].width;
            return tX(Eu.map((async uu => {
              if (uu.width === ju && uu.height === ju) return uu;
              try {
                return await createImageBitmap(uu, {
                  ...yu,
                  resizeWidth: ju,
                  resizeHeight: ju
                })
              } finally {
                uu.close()
              }
            })))
          }(uu.files);
          if ("data" === uu.kind && uu.data) return [await createImageBitmap(new Blob([uu.data]), yu)];
          return [await Ru(ul(uu))]
        }(uu.source).then((uu => {
          0 === Eu.refs || ju !== this.epoch ? LX(uu) : Eu.images = uu
        }));
        this.track(Eu, ul(uu.source), su, (() => {
          Eu.wanted && !Eu.failed && Eu.refs > 0 && this.upload(uu, Eu)
        }))
      }
      canvasUpdated(uu, Eu, ju) {
        const {
          state: su
        } = this.textureSlot(uu);
        su.dynamicSource = {
          invertY: Eu,
          premultiplied: ju
        }, su.dynamic && this.pushDynamic(uu.source, su)
      }
      async atlasArrays(uu) {
        const {
          device: Eu,
          epoch: ju
        } = this;
        let su;
        try {
          su = await EE(Eu, uu)
        } catch (Zu) {
          if (ju === this.epoch) {
            if (!fE(Eu)) throw Zu;
            await new Promise((uu => {
              this.rebindWaiters.push(uu)
            }))
          }
          return this.atlasArrays(uu)
        }
        if (su.forEach(((Eu, ju) => {
            this.atlasSources.has(Eu) || this.atlasSources.set(Eu, {
              sources: uu,
              index: ju,
              stride: su[0].layers
            })
          })), ju !== this.epoch) return su;
        const Uu = (0, iX.e)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const Xu of su) this.atlasBindings.has(Xu) || this.atlasBindings.set(Xu, {
          view: Xu.texture.createView({
            dimension: "2d-array"
          }),
          sampler: Uu
        });
        return su
      }
      boundTexture(uu) {
        const Eu = this.atlasBindings.get(uu);
        if (Eu) return Eu;
        const ju = this.atlasSources.get(uu);
        if (ju) return this.rebuildAtlas(uu, ju), null;
        const su = uu;
        if (su.released) return null;
        const Uu = this.textureSlot(su, !0),
          {
            state: Zu
          } = Uu;
        if (!Zu.view && (Zu.wanted = !0, Zu.loading || Zu.failed || this.upload(su, Zu), !Zu.view)) return null;
        const Xu = this.chosenSampler(su, Uu),
          lu = Uu.bound;
        return lu && lu.view === Zu.view && lu.sampler === Xu ? lu : (Uu.bound = {
          view: Zu.view,
          sampler: Xu
        }, Uu.bound)
      }
      rebuildAtlas(uu, Eu) {
        let {
          sources: ju,
          index: su,
          stride: Uu
        } = Eu;
        if (this.atlasRebuilds.has(uu)) return;
        this.atlasRebuilds.add(uu);
        const {
          epoch: Zu
        } = this;
        this.atlasArrays(ju).then((Eu => {
          Eu[0].layers === Uu && Eu[su] ? Zu === this.epoch && this.atlasBindings.set(uu, this.atlasBindings.get(Eu[su])) : console.error(`Lite: the new device splits the atlas ${zu(ju.urls[0])} into other arrays than its materials read`)
        }), (uu => {
          console.error(`Lite: could not build the atlas ${zu(ju.urls[0])} again on a new device`, uu)
        }))
      }
      textureLoaded(uu) {
        var Eu, ju;
        return null !== (Eu = null === (ju = this.heldSlot(uu)) || void 0 === ju ? void 0 : ju.state.decoded) && void 0 !== Eu ? Eu : null
      }
      textureFailed(uu) {
        var Eu;
        return !0 === (null === (Eu = this.heldSlot(uu)) || void 0 === Eu ? void 0 : Eu.state.failed)
      }
      heldSlot(uu) {
        const Eu = uu.gpu[Pu.f.lite];
        return (null === Eu || void 0 === Eu ? void 0 : Eu.epoch) === this.epoch ? Eu : void 0
      }
      chosenSampler(uu, Eu) {
        const {
          samplingMode: ju,
          wrapU: su,
          wrapV: Uu
        } = uu.sampler, Zu = Eu.state.hasMips, Xu = function(uu, Eu) {
          const {
            bilinear: ju,
            trilinear: su
          } = Pu.i;
          return !Eu && uu !== ju || 11 !== uu && uu !== su && uu !== ju ? 1 : 4
        }(ju, Zu), lu = Eu.sampler;
        if (lu && lu.samplingMode === ju && lu.hasMips === Zu && lu.anisotropy === Xu && lu.wrapU === su && lu.wrapV === Uu) return lu.sampler;
        const qu = this.samplerFor(ju, Zu, Xu, su, Uu);
        return Eu.sampler = {
          samplingMode: ju,
          hasMips: Zu,
          anisotropy: Xu,
          wrapU: su,
          wrapV: Uu,
          sampler: qu
        }, qu
      }
      releaseTexture(uu) {
        var Eu, ju;
        uu.view && (null === (ju = this.onDestroy) || void 0 === ju || ju.call(this, uu.view));
        null === (Eu = uu.destroy) || void 0 === Eu || Eu.call(uu)
      }
      textureSlot(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = uu.gpu[Pu.f.lite];
        if ((null === ju || void 0 === ju ? void 0 : ju.epoch) === this.epoch) return ju;
        const su = function(uu) {
          let {
            source: Eu,
            sampler: ju
          } = uu;
          return "canvas" === Eu.kind ? null : `${Eu.kind}|${ul(Eu)}|${ju.noMipmap}|${ju.samplingMode}|${ju.invertY}`
        }(uu);
        let Uu = null === su ? void 0 : this.textures.get(su);
        var Zu;
        Uu || (Uu = {
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
          dynamicSource: null !== (Zu = null === ju || void 0 === ju ? void 0 : ju.state.dynamicSource) && void 0 !== Zu ? Zu : null
        }, null !== su && (this.textures.set(su, Uu), this.load(uu, Uu), Eu && !ju && this.firstBindDecodes++));
        Uu.refs++;
        const Xu = Uu,
          {
            epoch: lu
          } = this,
          qu = {
            state: Uu,
            bound: null,
            sampler: null,
            release: () => {
              lu === this.epoch && this.releaseSlot(Xu, su)
            },
            epoch: lu
          };
        return uu.gpu[Pu.f.lite] = qu, qu
      }
      samplerFor(uu, Eu, ju, su, Uu) {
        const Zu = `${uu}|${Eu}|${ju}|${su}|${Uu}`;
        let Xu = this.samplers.get(Zu);
        if (!Xu) {
          const lu = {
            ...yX(uu, Eu, ju),
            addressModeU: zX(su),
            addressModeV: zX(Uu)
          };
          Xu = (0, iX.e)(this.engine, lu), this.samplers.set(Zu, Xu)
        }
        return Xu
      }
      upload(uu, Eu) {
        const {
          source: ju,
          sampler: su
        } = uu;
        Eu.hasMips = !su.noMipmap, "canvas" === ju.kind ? this.createDynamic(ju, Eu) : "cube" === ju.kind ? this.uploadCube(Eu, ju.luminance) : this.uploadImage(Eu, !0 === su.invertY, ju.url)
      }
      uploadImage(uu, Eu, ju) {
        const [su] = uu.images;
        uu.images = null;
        const {
          epoch: Uu
        } = this, Zu = (0, WX.d)(this.engine, su, {
          mipMaps: uu.hasMips,
          invertY: Eu,
          srgb: !1
        }).then((Eu => {
          su.close(), 0 !== uu.refs && Uu === this.epoch ? (uu.view = Eu.view, uu.destroy = Eu.texture.destroy.bind(Eu.texture)) : Eu.texture.destroy()
        }));
        this.track(uu, ju, Zu)
      }
      track(uu, Eu, ju, su) {
        const {
          epoch: Uu
        } = this;
        uu.loading = !0, this.pending++, ju.catch((ju => {
          Uu === this.epoch && (uu.failed = !0, console.warn(`Lite: could not load texture ${zu(Eu)}`, ju))
        })).finally((() => {
          Uu === this.epoch && (uu.loading = !1, this.pending--, null === su || void 0 === su || su())
        }))
      }
      uploadCube(uu, Eu) {
        const ju = uu.images;
        uu.images = null;
        const su = BX(this.engine, this.device, ju, (0, Pu.x)(Eu), uu.hasMips);
        uu.view = su.createView({
          dimension: "cube"
        }), uu.destroy = () => {
          su.destroy()
        }
      }
      createDynamic(uu, Eu) {
        const {
          canvas: ju
        } = uu, su = (0, SX.d)(this.engine, Math.max(1, ju.width), Math.max(1, ju.height), {
          mipMaps: Eu.hasMips,
          srgb: !1
        });
        Eu.dynamic = su, Eu.view = su.view, Eu.destroy = () => {
          su.texture.destroy()
        }, this.pushDynamic(uu, Eu)
      }
      pushDynamic(uu, Eu) {
        const ju = Eu.dynamicSource,
          su = Eu.dynamic,
          {
            canvas: Uu
          } = uu;
        if (ju && su && 0 !== Uu.width && 0 !== Uu.height) return Uu.width !== su.width || Uu.height !== su.height ? (this.releaseTexture(Eu), Eu.dynamic = null, Eu.view = null, void this.createDynamic(uu, Eu)) : void(0, SX.e)(this.engine, su, Uu, {
          invertY: ju.invertY,
          premultiplyAlpha: ju.premultiplied
        })
      }
    }

    function ul(uu) {
      return "cube" === uu.kind ? uu.rootUrl : "canvas" === uu.kind ? "canvas" : uu.url
    }
    const El = new Uint8Array(4);
    var jl = ju(39093);

    function sl(uu) {
      const Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      uu._colorAttachment.storeOp = uu._targetSignature._sampleCount > 1 ? Eu : "store";
      const ju = uu._renderPassDescriptor.depthStencilAttachment;
      ju && (ju.depthStoreOp = Eu, ju.stencilStoreOp && (ju.stencilStoreOp = Eu))
    }
    var Ul = ju(38154),
      Zl = ju(38211),
      Xl = ju(37854),
      ll = ju(39887);
    const ql = new Float64Array([1, 1, 1]),
      fl = new Float64Array([0, 1, 0]),
      Cl = new Float64Array(4),
      bl = new Float32Array(16),
      cl = new Float64Array(3),
      Nl = new Float64Array(4);

    function Ol(uu, Eu, ju) {
      uu.fov = Eu.fov, uu.near = Eu.near, uu.far = Eu.far, uu.renderWidth = ju.renderWidth, uu.renderHeight = ju.renderHeight, (0, Xl.p)(Eu.holderRotation, 0, Cl, 0), (0, Xl.d)(ql, 0, Cl, 0, Eu.holderPosition, 0, bl);
      const su = Eu.jR;
      cl[0] = su[0], cl[1] = su[1], cl[2] = su[2] + 1;
      const Uu = uu.viewMatrix;
      (0, Xl.i)(su, cl, fl, Uu), (0, Xl.f)(Uu, 0, Uu), (0, Xl.j)(Uu, bl, 0, Uu), (0, Xl.f)(Uu, 0, Uu);
      const Zu = uu.worldMatrix;
      (0, Xl.f)(Uu, 0, Zu), uu.eye[0] = Zu[12], uu.eye[1] = Zu[13], uu.eye[2] = Zu[14], Nl[0] = uu.fov, Nl[1] = uu.renderWidth / uu.renderHeight, Nl[2] = uu.near, Nl[3] = uu.far, (0, Xl.l)(Nl, uu.projectionMatrix), (0, Xl.j)(Uu, uu.projectionMatrix, 0, uu.viewProjectionMatrix), (0, ll.h)(uu.viewProjectionMatrix, uu.frustum)
    }

    function Yl(uu, Eu) {
      let ju = uu.frustumPlanes;
      ju || (ju = uu.frustumPlanes = Array.from({
        length: 6
      }, (() => new Ul.d(0, 0, 0, 0))));
      for (let su = 0; su < 6; su++) {
        const uu = ju[su].normal;
        uu._x = Eu[4 * su], uu._y = Eu[4 * su + 1], uu._z = Eu[4 * su + 2], uu._isDirty = !0, ju[su].d = Eu[4 * su + 3]
      }
    }

    function hl(uu, Eu) {
      const ju = Eu.clearColor;
      uu.clearColour[0] = ju.r, uu.clearColour[1] = ju.g, uu.clearColour[2] = ju.b, uu.clearColour[3] = ju.a;
      const su = Eu.ambientColor;
      uu.ambientColour[0] = su.r, uu.ambientColour[1] = su.g, uu.ambientColour[2] = su.b, uu.animationRatio = Eu.animationRatio, uu.frameId = Eu.frameId, uu.version++
    }

    function Dl(uu) {
      const Eu = uu.model.view;
      return Eu.animTick = (0, Zl.e)(), Eu.timeMs = performance.now(), hl(Eu, uu.vY), uu.model.update(Eu.frameId), Eu
    }

    function gl(uu) {
      const Eu = uu.vY,
        {
          view: ju,
          uR: su
        } = uu.model;
      return Ol(ju, su, Eu.wO()), Eu.onBeforeRenderObservable.notifyObservers(Eu), Yl(Eu, ju.frustum), Eu.onBeforeCameraRenderObservable.notifyObservers(Eu.activeCamera), Dl(uu)
    }
    var Ml = ju(37821),
      el = ju(37922),
      Gl = ju(38206);

    function pl(uu) {
      var Eu, ju;
      const su = (0, du.$)(uu);
      if (!su || su.diffuseTexture && (0, Gl.h)(uu)) return null;
      const Uu = null === (Eu = (0, du.z)(su, wu.h.name)) || void 0 === Eu ? void 0 : Eu.state,
        Zu = null === (ju = (0, du.z)(su, uX.c.name)) || void 0 === ju ? void 0 : ju.state,
        Xu = new Float32Array(16);
      return function(uu, Eu, ju, su) {
        var Uu, Zu;
        const Xu = is;
        su.set(uu.diffuseColor, Xu.diffuse), su[Xu.diffuse + 3] = uu.alpha, su.set(uu.ambientColor, Xu.ambientAndCutoff), su[Xu.ambientAndCutoff + 3] = uu.alphaCutOff, su.set(uu.emissiveColor, Xu.emissiveAndLevel), su[Xu.emissiveAndLevel + 3] = null !== (Uu = null === (Zu = uu.diffuseTexture) || void 0 === Zu ? void 0 : Zu.level) && void 0 !== Uu ? Uu : 1, null !== Eu && void 0 !== Eu && Eu.animDataPerTex ? (su[Xu.anim + 1] = Zl.b, su[Xu.anim + 2] = Eu.animDataPerTex.length / 3 - 1) : ju && (su[Xu.anim + 1] = ju.numAnimStates, su[Xu.anim + 2] = ju.ticksPerAnimState)
      }(su, Uu, Zu, Xu), {
        model: su,
        atlas: Uu,
        texture: Uu ? "atlas" : su.diffuseTexture ? "single" : "none",
        animated: Uu ? !!Uu.animDataPerTex : !!Zu,
        liquid: (0, Gl.j)(uu),
        customRenderMat: (0, Gl.h)(uu),
        uniformData: Xu
      }
    }
    var wl = ju(3012);
    class Jl {
      constructor(uu) {
        this.units = uu, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var uu;
        this.buffer.destroy(), null === (uu = this.twin) || void 0 === uu || uu.destroy()
      }
    }
    class dl {
      constructor(uu, Eu) {
        this.arena = uu, this.HY = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.HY = new xX(Eu);
        const ju = new Jl(Eu);
        ju.buffer = this.createBuffer(ju, !1), this.backings.push(ju), this.refresh()
      }
      get Mb() {
        return this.HY.Mb
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
        let uu = 0;
        for (const Eu of this.backings) uu += Eu.units * (this.arena.unitBytes + (Eu.twin ? this.arena.twinUnitBytes : 0));
        return uu
      }
      holds(uu) {
        return uu.start + uu.length <= this.usable
      }
      lost(uu) {
        return this.dropped || uu.start + uu.length > this.Mb
      }
      write(uu, Eu) {
        const {
          device: ju,
          unitBytes: su
        } = this.arena;
        for (const Uu of this.backings) {
          const Zu = (Uu.units - uu.start) * su;
          Zu > 0 && ju.queue.writeBuffer(Uu.buffer, uu.start * su, Eu, 0, Math.min(Eu.byteLength, Zu))
        }
      }
      writeLight(uu, Eu) {
        const {
          device: ju,
          twinUnitBytes: su,
          verticesPerUnit: Uu
        } = this.arena, {
          light: Zu,
          count: Xu
        } = this.arena.twinLight(Eu, Math.min(Eu.length, uu.length * Uu));
        for (const lu of this.backings) {
          lu.twin || (lu.twin = this.createBuffer(lu, !0));
          const Eu = (lu.units - uu.start) * Uu;
          Eu > 0 && ju.queue.writeBuffer(lu.twin, uu.start * su, Zu, 0, Math.min(Xu, Eu))
        }
      }
      grow(uu) {
        this.arena.assertNotDrawing();
        const {
          device: Eu,
          unitBytes: ju,
          label: su
        } = this.arena, Uu = this.backings[this.backings.length - 1], Zu = new Jl(uu), Xu = Eu.createCommandEncoder({
          label: `${su}-grow`
        });
        Zu.buffer = this.createBuffer(Zu, !1), Xu.copyBufferToBuffer(Uu.buffer, 0, Zu.buffer, 0, Uu.units * ju), Uu.twin && (Zu.twin = this.createBuffer(Zu, !0), Xu.copyBufferToBuffer(Uu.twin, 0, Zu.twin, 0, Uu.units * this.arena.twinUnitBytes)), Eu.queue.submit([Xu.finish()]), this.backings.push(Zu), this.HY.grow(uu)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const uu of this.backings) uu.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(uu, Eu) {
        const {
          device: ju,
          unitBytes: su,
          twinUnitBytes: Uu,
          usage: Zu,
          label: Xu
        } = this.arena;
        ju.pushErrorScope("out-of-memory");
        const lu = ju.createBuffer({
          label: Eu ? `${Xu}-light` : Xu,
          size: uu.units * (Eu ? Uu : su),
          usage: (Eu ? this.arena.twinUsage : Zu) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, ju.popErrorScope().then((ju => {
          this.arena.awaitingVerdict--, this.settle(uu, Eu, !ju, !0)
        }), (ju => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Xu} buffer, taken as failed: ${String(ju)}`), this.settle(uu, Eu, !1, !1)
        })), lu
      }
      settle(uu, Eu, ju, su) {
        const Uu = this.backings.indexOf(uu);
        if (!(this.dropped || Uu < 0)) {
          if (!ju) {
            if (su && this.arena.ranOutOfMemory(uu.units, uu.units * (Eu ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Uu) return void this.drop();
            for (const uu of this.backings.splice(Uu)) uu.destroy();
            return this.HY.truncate(this.backings[Uu - 1].units), this.growable = !1, void this.promote()
          }
          Eu ? uu.twinReady = !0 : (uu.bufferReady = !0, this.arena.allocatedBuffer(uu.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: uu
        } = this;
        let Eu = 0;
        for (; Eu + 1 < uu.length && uu[Eu].ready && uu[Eu + 1].ready;) Eu++;
        for (const ju of uu.splice(0, Eu)) ju.destroy();
        this.refresh()
      }
      refresh() {
        const uu = this.backings[0];
        this.buffer = uu.buffer, this.twin = uu.twinReady ? uu.twin : null, this.usable = !this.dropped && uu.bufferReady ? uu.units : 0
      }
    }
    class al {
      constructor(uu, Eu, ju, su) {
        let {
          verticesPerUnit: Uu = 1,
          twinUsage: Zu = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = uu, this.unitBytes = Eu, this.usage = ju, this.label = su, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, vE.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Eu % 4 !== 0) throw new Error(`${su}: ${Eu}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Uu, this.twinUsage = Zu, this.twinValueBytes = Uu > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Uu
      }
      twinLight(uu, Eu) {
        if (4 === this.twinValueBytes) return this.widened.length < Eu && (this.widened = new Float32Array(Math.max(Eu, 2 * this.widened.length))), this.widened.set(uu.subarray(0, Eu)), {
          light: this.widened,
          count: Eu
        };
        const ju = Eu % this.verticesPerUnit;
        if (0 === ju) return {
          light: uu,
          count: Eu
        };
        const su = Eu - ju + this.verticesPerUnit;
        return this.padded.length < su && (this.padded = new Uint16Array(Math.max(su, 2 * this.padded.length))), this.padded.set(uu.subarray(0, Eu)), this.padded.fill(0, Eu, su), {
          light: this.padded,
          count: su
        }
      }
      allocate(uu) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), uu > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Uu of this.pages) {
          const Eu = Uu.HY.allocate(uu);
          if (Eu >= 0) return {
            page: Uu,
            start: Eu,
            length: uu
          }
        }
        const Eu = this.pages[this.pages.length - 1];
        if (null !== Eu && void 0 !== Eu && Eu.canGrow) {
          const ju = Math.min(this.ceiling, Math.max(2 * Eu.Mb, Eu.Mb + uu));
          if (ju - Eu.Mb >= uu) return Eu.grow(ju), {
            page: Eu,
            start: Eu.HY.allocate(uu),
            length: uu
          }
        }
        Eu && Eu !== this.pages[0] && 0 === Eu.HY.used && Eu.drop();
        const ju = Math.floor(1048576 / this.unitBytes),
          su = new dl(this, Math.max(uu, Math.min(this.ceiling, ju)));
        return this.pages.push(su), {
          page: su,
          start: su.HY.allocate(uu),
          length: uu
        }
      }
      free(uu) {
        this.assertNotDrawing();
        const {
          page: Eu
        } = uu;
        Eu.HY.free(uu.start, uu.length), 0 === Eu.HY.used && Eu !== this.pages[0] && Eu !== this.pages[this.pages.length - 1] && Eu.drop()
      }
      retire() {
        for (const uu of this.pages) uu.retire()
      }
      remove(uu) {
        const Eu = this.pages.indexOf(uu);
        Eu >= 0 && this.pages.splice(Eu, 1)
      }
      ranOutOfMemory(uu, Eu) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Eu}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, uu), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, uu) / 2));
        const ju = performance.now();
        ju >= this.shortageUntil && (this.forgetFailedAt = ju + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = ju + 1e3)
      }
      allocatedBuffer(uu) {
        uu >= this.failed && (this.failed = 1 / 0);
        const Eu = Math.min(2 * uu, Math.floor((uu + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Eu))
      }
      stats() {
        let uu = 0,
          Eu = 0,
          ju = 0,
          su = 0;
        for (const Uu of this.pages) uu += Uu.Mb, Eu += Uu.HY.used, ju += Uu.hasTwin ? Uu.Mb * this.twinUnitBytes : 0, su += Uu.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: uu * this.unitBytes,
          usedBytes: Eu * this.unitBytes,
          twinBytes: ju,
          allocatedBytes: su
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: uu,
          maxStorageBufferBindingSize: Eu
        } = this.device.limits;
        let ju = Math.floor(Math.min(67108864, uu) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (ju = Math.min(ju, Math.floor(Eu / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (ju = Math.min(ju, Math.floor(Eu / this.twinUnitBytes))), ju
      }
    }
    const Pl = 16383;

    function ol(uu, Eu, ju, su, Uu) {
      let Zu = 0;
      for (let Xu = ju; Xu < su; Xu += Pl) uu.drawIndexed(6 * Math.min(Pl, su - Xu), 1, 0, Eu + 4 * Xu, Uu), Zu++;
      return Zu
    }
    class kl {
      constructor(uu, Eu) {
        this.recordsGroup = Eu, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const ju = HE.g.strideWithoutAtlas;
        this.vertexArena = new al(uu, ju, GPUBufferUsage.VERTEX, `terrain-vertices-${ju}`), this.quadArena = new al(uu, el.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const su = (0, AE.f)(new Uint16Array(98298), Pl);
        this.quadPattern = uu.createBuffer({
          label: "terrain-quad-pattern",
          size: su.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), uu.queue.writeBuffer(this.quadPattern, 0, su)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(uu, Eu) {
        const ju = Eu.packedVertices,
          su = ju ? this.quadArena.allocate(uu.faceCount) : this.vertexArena.allocate(uu.vertexCount);
        if (!su) return !1;
        uu.vertices = su;
        const Uu = ju ? new Uint8Array(ju.buffer, ju.byteOffset, ju.byteLength) : new Uint8Array(Eu.vertices);
        return su.page.write(su, Uu), !0
      }
      setLight(uu, Eu) {
        const {
          vertices: ju
        } = uu;
        ju && 0 !== Eu.length && ju.page.live && (Eu.length < uu.vertexCount ? ju.page.arena.warnOnce("shortLight", `a part's ${Eu.length} light values are fewer than its ${uu.vertexCount} vertices, so its light is left as it was`) : (ju.page.writeLight(ju, Eu), uu.lit = !0))
      }
      lightFullSky(uu, Eu) {
        this.fullSky.length < Eu && (this.fullSky = new Uint16Array(Math.max(Eu, 4096)).fill(wl.g));
        for (const ju of uu) {
          const uu = ju.vertices;
          uu.page.live && (uu.page.writeLight(uu, this.fullSky), ju.lit = !0)
        }
      }
      backed(uu) {
        const {
          vertices: Eu
        } = uu;
        return !!Eu && Eu.page.holds(Eu)
      }
      lost(uu) {
        const {
          vertices: Eu
        } = uu;
        return !!Eu && Eu.page.lost(Eu)
      }
      release(uu) {
        uu.vertices && uu.vertices.page.arena.free(uu.vertices), uu.vertices = null, uu.lit = !1
      }
      setDrawing(uu) {
        this.forgetBound()
      }
      draw(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Eu.faceCount;
        const Zu = Eu.vertices,
          Xu = Zu.page,
          lu = ju ? Xu.twin : null;
        if (!Xu.holds(Zu) || ju && !lu) return 0;
        const {
          verticesPerUnit: qu
        } = Xu.arena;
        let fu = Zu.start * qu;
        this.boundPattern || (uu.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Cu = su + Uu;
        if (qu > 1) return Xu.buffer === this.boundRecords && lu === this.boundRecordsLight || (uu.setBindGroup(1, this.recordsGroup(Xu.buffer, lu)), this.boundRecords = Xu.buffer, this.boundRecordsLight = lu), ol(uu, fu, su, Cu, Eu.slot);
        Xu.buffer !== this.boundVertices && (uu.setVertexBuffer(0, Xu.buffer), this.boundVertices = Xu.buffer), lu && lu !== this.boundLight && (uu.setVertexBuffer(1, lu), this.boundLight = lu);
        const bu = Eu.faceCount;
        return Cu <= bu ? ol(uu, fu, su, Cu, Eu.slot) : ol(uu, fu, su, bu, Eu.slot) + ol(uu, fu, Math.max(su, bu) - bu, Cu - bu, Eu.slot)
      }
      get buffersAwaitingVerdict() {
        let uu = 0;
        for (const Eu of this.arenas()) uu += Eu.awaitingVerdict;
        return uu
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class ml {
      constructor(uu, Eu, ju, su) {
        this.device = uu, this.splitBefore = Eu, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = uu.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Uu = uu.createShaderModule({
          label: "scene-depth-copy",
          code: (Zu = ju._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Zu?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Zu;
        uu.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Uu,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Uu,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((uu => {
          this.pipeline = uu, this.building = !1
        }), (uu => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", uu)
        })), ju._executeWithTransmission = () => this.execute(ju, su)
      }
      get compiling() {
        return this.building
      }
      setWanted(uu) {
        this.wanted = uu
      }
      setPlanes(uu, Eu) {
        uu === this.near && Eu === this.far || (this.near = uu, this.far = Eu, this.unproject[0] = uu / (Eu - uu), this.unproject[1] = Eu * uu / (Eu - uu), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.copy) || void 0 === Eu ? void 0 : Eu.view) && void 0 !== uu ? uu : null
      }
      execute(uu, Eu) {
        var ju;
        null === (ju = this.retired) || void 0 === ju || ju.destroy(), this.retired = null;
        const su = pE(Eu),
          Uu = uu._transparentBindings,
          Zu = this.wanted && this.pipeline ? this.splitIndex(Uu) : -1,
          Xu = uu._colorAttachment,
          lu = Xu.resolveTarget;
        Zu >= 0 && (Xu.resolveTarget = void 0, sl(uu, !0));
        let qu = su.beginRenderPass(uu._renderPassDescriptor);
        qu.setBindGroup(0, uu._sceneBG);
        let fu = this.drawList(qu, Eu, uu._opaqueBindings, 0, uu._opaqueBindings.length);
        if (fu += this.drawList(qu, Eu, uu._directBindings, 0, uu._directBindings.length), fu += this.drawList(qu, Eu, Uu, 0, Zu >= 0 ? Zu : Uu.length), qu.end(), Zu < 0) return fu;
        sl(uu);
        const Cu = uu._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: bu,
            stencilLoadOp: cu
          } = Cu,
          Nu = Xu.loadOp;
        Xu.resolveTarget = lu;
        try {
          this.copyDepth(su, uu), Xu.loadOp = "load", Cu.depthLoadOp = "load", cu && (Cu.stencilLoadOp = "load"), qu = su.beginRenderPass(uu._renderPassDescriptor), qu.setBindGroup(0, uu._sceneBG), fu += this.drawList(qu, Eu, Uu, Zu, Uu.length), qu.end()
        } finally {
          Xu.loadOp = Nu, Cu.depthLoadOp = bu, Cu.stencilLoadOp = cu
        }
        return fu
      }
      splitIndex(uu) {
        for (let Eu = 0; Eu < uu.length; Eu++)
          if (uu[Eu].renderable === this.splitBefore) return Eu;
        return -1
      }
      drawList(uu, Eu, ju, su, Uu) {
        let Zu = null,
          Xu = 0;
        for (let lu = su; lu < Uu; lu++) {
          const su = ju[lu],
            Uu = su.renderable.mesh;
          Uu && !1 === Uu.visible || (su.pipeline !== Zu && (uu.setPipeline(su.pipeline), Zu = su.pipeline), Xu += su.draw(uu, Eu))
        }
        return Xu
      }
      copyDepth(uu, Eu) {
        var ju, su;
        const Uu = (null !== (ju = Eu._config.depth) && void 0 !== ju ? ju : Eu._config.rt)._depthTexture,
          Zu = (null === (su = this.copy) || void 0 === su ? void 0 : su.source) === Uu ? this.copy : this.remakeCopy(Uu),
          Xu = uu.beginRenderPass(Zu.pass);
        Xu.setPipeline(this.pipeline), Xu.setBindGroup(0, Zu.bindGroup), Xu.draw(3), Xu.end()
      }
      remakeCopy(uu) {
        var Eu, ju;
        this.retired = null !== (Eu = null === (ju = this.copy) || void 0 === ju ? void 0 : ju.texture) && void 0 !== Eu ? Eu : null;
        const su = this.device.createTexture({
            label: "scene-depth",
            size: [uu.width, uu.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Uu = su.createView(),
          Zu = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: uu.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Xu = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Uu,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: uu,
          texture: su,
          view: Uu,
          bindGroup: Zu,
          pass: Xu
        }, this.copy
      }
    }
    const vl = "rgba8unorm";

    function Kl(uu) {
      return uu ? 15 : 1
    }
    class Vl {
      constructor(uu, Eu, ju, su) {
        this.device = uu, this.terrain = su, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Eu._targetSignature._sampleCount > 1, this.cameraBuffer = uu.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = uu.createBindGroupLayout({
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
        const Uu = uu.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = uu.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Uu,
          entries: []
        });
        const Zu = uu.createShaderModule({
          label: "sun-shadow-mask",
          code: (Xu = this.edge, `${(0,nE.z)()}${qs({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Xu?nj:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Kl(Xu)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Xu?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Xu;
        uu.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: uu.createPipelineLayout({
            bindGroupLayouts: [this.layout, Uu, Uu, xZ(uu, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Zu,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Zu,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((uu => {
          this.pipeline = uu, this.building = !1
        }), (uu => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", uu)
        }));
        const lu = Eu._executeWithTransmission;
        Eu._executeWithTransmission = uu => this.execute(Eu, ju, (() => lu ? lu(uu) : function(uu, Eu) {
          const ju = pE(Eu).beginRenderPass(uu._renderPassDescriptor);
          ju.setBindGroup(0, uu._sceneBG);
          let su = rl(ju, Eu, uu._opaqueBindings);
          return su += rl(ju, Eu, uu._directBindings), su += rl(ju, Eu, uu._transparentBindings), ju.end(), su
        }(Eu, ju)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.targets) || void 0 === Eu ? void 0 : Eu.maskView) && void 0 !== uu ? uu : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(uu) {
        ! function(uu, Eu) {
          const ju = uu.worldMatrix,
            su = uu.projectionMatrix,
            Uu = 1 / su[0],
            Zu = 1 / su[5],
            Xu = uu.far * uu.near / (uu.far - uu.near);
          Eu[0] = uu.eye[0], Eu[1] = uu.eye[1], Eu[2] = uu.eye[2], Eu[3] = 2 ** -23 / Xu, Eu[4] = ju[0] * Uu, Eu[5] = ju[1] * Uu, Eu[6] = ju[2] * Uu, Eu[7] = Xu, Eu[8] = ju[4] * Zu, Eu[9] = ju[5] * Zu, Eu[10] = ju[6] * Zu, Eu[11] = uu.near / (uu.far - uu.near), Eu[12] = ju[8], Eu[13] = ju[9], Eu[14] = ju[10], Eu[15] = 0
        }(uu, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(uu, Eu, ju) {
        if (this.retire(), !this.terrain.readsMask) return ju();
        const su = this.targetsFor(uu),
          Uu = pE(Eu),
          Zu = uu._renderPassDescriptor.depthStencilAttachment;
        this.edge || (su.prepass.depthStencilAttachment.view = Zu.view);
        const Xu = this.terrain.drawPrepass(Uu, su.prepass, uu._sceneBG);
        if (0 === Xu) return ju();
        if (this.trace(Uu, su), this.edge) return Xu + 1 + ju();
        const {
          depthLoadOp: lu,
          stencilLoadOp: qu
        } = Zu;
        Zu.depthLoadOp = "load", qu && (Zu.stencilLoadOp = "load");
        try {
          return Xu + 1 + ju()
        } finally {
          Zu.depthLoadOp = lu, Zu.stencilLoadOp = qu
        }
      }
      trace(uu, Eu) {
        const ju = this.terrain.sunShadowGroup(),
          su = uu.beginRenderPass(Eu.trace);
        this.pipeline && ju && (su.setPipeline(this.pipeline), su.setBindGroup(0, Eu.bindGroup), su.setBindGroup(1, this.empty), su.setBindGroup(2, this.empty), su.setBindGroup(3, ju), su.draw(3)), su.end()
      }
      retire() {
        const uu = this.retired;
        var Eu;
        uu && (uu.mask.destroy(), uu.normals.destroy(), null === (Eu = uu.depth) || void 0 === Eu || Eu.destroy(), this.retired = null)
      }
      targetsFor(uu) {
        var Eu, ju;
        const su = (null !== (Eu = uu._config.depth) && void 0 !== Eu ? Eu : uu._config.rt)._depthTexture;
        return (null === (ju = this.targets) || void 0 === ju ? void 0 : ju.source) === su ? this.targets : this.remake(uu, su)
      }
      remake(uu, Eu) {
        var ju;
        this.retired = this.targets;
        const su = [Eu.width, Eu.height],
          Uu = this.device.createTexture({
            label: "sun-shadow-mask",
            size: su,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Zu = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: su,
            format: vl,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Xu = null !== (ju = uu._targetSignature._depthStencilFormat) && void 0 !== ju ? ju : Eu.format,
          lu = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: su,
            format: Xu,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          qu = uu._renderPassDescriptor.depthStencilAttachment,
          fu = Xu.includes("stencil"),
          Cu = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Zu.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: lu ? lu.createView() : qu.view,
              depthClearValue: qu.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...fu ? {
                stencilClearValue: qu.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          bu = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== lu && void 0 !== lu ? lu : Eu).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Zu.createView()
            }]
          }),
          cu = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Uu.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Kl(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Eu,
          mask: Uu,
          maskView: Uu.createView(),
          normals: Zu,
          depth: lu,
          bindGroup: bu,
          prepass: Cu,
          trace: cu
        }, this.targets
      }
    }

    function rl(uu, Eu, ju) {
      let su = null,
        Uu = 0;
      for (const Zu of ju) {
        const ju = Zu.renderable.mesh;
        ju && !1 === ju.visible || (Zu.pipeline !== su && (uu.setPipeline(Zu.pipeline), su = Zu.pipeline), Uu += Zu.draw(uu, Eu))
      }
      return Uu
    }
    const Ql = 6e4,
      il = {
        status: "ok"
      },
      Wl = {
        status: "skipped"
      };
    async function Sl(uu, Eu) {
      const {
        isCancelled: ju
      } = uu;
      if (ju()) return {
        status: "Lj"
      };
      const {
        target: su
      } = Eu;
      if (!su) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Uu = [],
        Zu = Promise.all(Array.from(new Set(uu.materials), (async ju => {
          Uu.push(await async function(uu, Eu, ju, su) {
            const Uu = {
              lighting: uu.lighting,
              dirLightCount: Math.min(uu.dirLightCount, 4),
              AN: uu.runtime
            };
            try {
              const Zu = Eu.material(su);
              return Zu && Vs(Eu.programKey(Zu, !1, Uu)) ? (await Zu.ready, uu.isCancelled() ? il : Zu.bindGroupLayout ? await async function(uu, Eu, ju, su) {
                const {
                  device: Uu
                } = uu;
                let Zu, Xu;
                Uu.pushErrorScope("validation");
                try {
                  Zu = uu.pipelineBuild(Eu, ju, su)
                } finally {
                  Xu = Uu.popErrorScope().catch((() => null))
                }
                const [lu, qu] = await Promise.all([Xu, Zu.built.then((() => null), (uu => null !== uu && void 0 !== uu ? uu : new Error("pipeline failed")))]);
                if (!lu && !qu) return il;
                const fu = await Il(Zu.module),
                  Cu = fu.length > 0 ? fu.map((uu => `${Zu.name} ${uu.lineNum}:${uu.linePos}: ${uu.message}`)).join("\n") : `${Zu.name}: ${Fl(null!==qu&&void 0!==qu?qu:lu)}`;
                return {
                  status: "failed",
                  material: Eu.model.name,
                  message: Cu
                }
              }(Eu, Zu, Eu.programKey(Zu, "none" !== Zu.texture, Uu), ju): (console.warn(`Shader pack: skipped the compile check for "${su.name}", whose textures failed to load`), Wl)) : il
            } catch (Zu) {
              return {
                status: "failed",
                material: su.name,
                message: Fl(Zu)
              }
            }
          }(uu, Eu, su, ju))
        }))),
        Xu = function(uu, Eu) {
          let ju, su, Uu = !1;
          const Zu = new Promise((Zu => {
            var Xu;
            ju = setTimeout((() => {
              Zu("timeout")
            }), null !== (Xu = Eu.timeoutMs) && void 0 !== Xu ? Xu : Ql), su = setInterval((() => {
              Eu.isCancelled() && Zu("Lj")
            }), 50), uu.lost.then((() => {
              Uu = !0, Zu("lost")
            }))
          }));
          return {
            signal: Zu,
            lost: () => Uu,
            dispose: () => {
              clearTimeout(ju), clearInterval(su)
            }
          }
        }(Eu.device, uu);
      let lu;
      try {
        lu = await Promise.race([Zu.then((() => "done")), Xu.signal])
      } finally {
        Xu.dispose()
      }
      if ("Lj" === lu || ju()) return {
        status: "Lj"
      };
      const qu = Uu.find((uu => "failed" === uu.status));
      return qu && "lost" !== lu && !Xu.lost() && await new Promise((uu => {
        setTimeout(uu, 0)
      })), "lost" === lu || Xu.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : qu ? {
        status: "failed",
        failure: {
          material: qu.material,
          message: qu.message
        }
      } : "timeout" === lu ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(fu=uu.timeoutMs)&&void 0!==fu?fu:Ql)/1e3} s`), {
        status: "skipped"
      }) : Uu.some((uu => "skipped" === uu.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var fu
    }
    async function Il(uu) {
      if (!uu) return [];
      try {
        return (await uu.getCompilationInfo()).messages.filter((uu => "error" === uu.type))
      } catch {
        return []
      }
    }

    function Fl(uu) {
      var Eu;
      return null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.message) && void 0 !== Eu ? Eu : String(uu)
    }

    function Bl(uu, Eu, ju, su, Uu) {
      Vs(Eu) ? Il(su).then((Eu => {
        const [su] = Eu;
        CE(uu, "terrain", ju, Uu, su ? `${su.lineNum}:${su.linePos} error: ${su.message}` : null)
      })) : CE(uu, "terrain", ju, Uu)
    }
    var Ll = ju(37931),
      tl = ju(37941),
      xl = ju(37954),
      Tl = ju(2999);

    function Hl(uu, Eu, ju, su, Uu) {
      const Zu = Math.hypot(ju[0], ju[1], ju[2]);
      if (!(Zu > 0)) return;
      const Xu = [ju[0] / Zu, ju[1] / Zu, ju[2] / Zu],
        lu = [Math.floor(Eu[0]), Math.floor(Eu[1]), Math.floor(Eu[2])],
        qu = [0, 0, 0],
        fu = [1 / 0, 1 / 0, 1 / 0],
        Cu = [1 / 0, 1 / 0, 1 / 0];
      for (let Nu = 0; Nu < 3; Nu++) Xu[Nu] > 0 ? (qu[Nu] = 1, fu[Nu] = (lu[Nu] + 1 - Eu[Nu]) / Xu[Nu], Cu[Nu] = 1 / Xu[Nu]) : Xu[Nu] < 0 && (qu[Nu] = -1, fu[Nu] = (lu[Nu] - Eu[Nu]) / Xu[Nu], Cu[Nu] = -1 / Xu[Nu]);
      const {
        hO: bu
      } = uu;
      let cu = uu.dL(lu[0], lu[1], lu[2]);
      for (;;) {
        const Eu = fu[0] < fu[1] ? fu[0] < fu[2] ? 0 : 2 : fu[1] < fu[2] ? 1 : 2;
        if (fu[Eu] > su) return;
        const ju = qu[Eu] > 0 ? lu[Eu] + 1 : lu[Eu];
        lu[Eu] += qu[Eu], fu[Eu] += Cu[Eu];
        const Zu = uu.dL(lu[0], lu[1], lu[2]),
          Xu = Zu !== cu && !(uu.opaque[cu] && uu.opaque[Zu]);
        if (Xu) {
          const su = [lu[0], lu[1], lu[2]];
          su[Eu] = ju;
          const Zu = Math.floor(su[0] / bu),
            Xu = Math.floor(su[1] / bu),
            qu = Math.floor(su[2] / bu);
          !uu.isDrawn(Zu, Xu, qu) && uu.hasParts(Zu, Xu, qu) && Uu.add(`${Zu},${Xu},${qu}`)
        }
        if (Xu && uu.occluders[Zu]) return;
        cu = Zu
      }
    }

    function Al(uu, Eu) {
      return uu.group - Eu.group || uu.nearest - Eu.nearest
    }
    class nl {
      constructor(uu, Eu) {
        this.device = uu, this.rD = Eu, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var uu;
        const Eu = null !== (uu = this.free.pop()) && void 0 !== uu ? uu : this.next++;
        if (8 * Eu >= this.data.length) {
          const uu = new Float32Array(2 * this.data.length);
          uu.set(this.data), this.data = uu, this.words = new Uint32Array(uu.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.rD()
        }
        return Eu
      }
      release(uu) {
        this.free.push(uu)
      }
      set(uu, Eu, ju, su, Uu) {
        const Zu = 8 * uu + ts;
        this.data[Zu] = Eu, this.data[Zu + 1] = ju, this.data[Zu + 2] = su, this.setVisibility(uu, Uu)
      }
      setVisibility(uu, Eu) {
        this.data[8 * uu + xs] = Eu, this.markDirty(uu, uu)
      }
      setFaces(uu, Eu, ju) {
        const su = 8 * uu;
        this.words[su + Ts] = Eu, this.words[su + Hs] = ju, this.markDirty(uu, uu)
      }
      markDirty(uu, Eu) {
        this.dirtyMin = Math.min(this.dirtyMin, uu), this.dirtyMax = Math.max(this.dirtyMax, Eu)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const yl = Ls,
      zl = !0;
    const Rl = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: yl.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      uq = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Eq {
      constructor(uu) {
        this.device = uu, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Qs), this.dirLightUniforms = this.frameUniforms.subarray(rs.dirLights, rs.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, vE.d)(), this.faceGroups = !0, this.visibilityGraph = zl, this.visCull = zl, this.visCheck = !1, this.visCullMinDistance = xl.d, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Zq, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.AN = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new kl(uu, ((uu, Eu) => this.recordsGroup(uu, Eu))), this.slots = new nl(uu, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = wE(uu), this.frameLayout = uu.createBindGroupLayout({
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
        }), this.frameBuffer = uu.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = uu.createSampler({
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
          bind: (uu, Eu) => this.createBinding(this.opaqueRenderable, Eu, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (uu, Eu) => this.createBinding(this.transparentRenderable, Eu, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(uu, Eu) {
        this.sceneDepth = new ml(this.device, this.transparentRenderable, uu, Eu)
      }
      createFrameBindGroup() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== uu && void 0 !== uu ? uu : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Eu && void 0 !== Eu ? Eu : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(uu, Eu) {
        const ju = null !== Eu && void 0 !== Eu ? Eu : uu;
        let su = this.recordsGroups.get(ju);
        return su || (su = this.createFrameBindGroup(uu, Eu), this.recordsGroups.set(ju, su)), su
      }
      setChunkMesh(uu, Eu, ju) {
        var su;
        let Uu = this.chunks.get(uu);
        Uu ? this.geometry.release(Uu) : (Uu = {
          mesh: uu,
          slot: this.slots.allocate(),
          origin: [ju[0], ju[1], ju[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: uu.visibility,
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
        }, this.chunks.set(uu, Uu), this.writeSlot(Uu)), Uu.material = uu.material ? this.materialFor(uu.material) : null, Uu.packed = !!Eu.packedVertices, Uu.vertexCount = (0, el.g)(Eu), Uu.faceCount = Uu.vertexCount / 4;
        const Zu = null !== (su = Eu.faceGroups) && void 0 !== su ? su : null;
        if (Uu.faceGroups = Zu, Zu) {
          const uu = Ll.k;
          Uu.planePX = Zu[uu], Uu.planeNX = Zu[uu + 1], Uu.planePY = Zu[uu + 2], Uu.planeNY = Zu[uu + 3], Uu.planePZ = Zu[uu + 4], Uu.planeNZ = Zu[uu + 5]
        }
        this.drawWhole(Uu), 0 !== Uu.faceCount && (this.geometry.set(Uu, Eu) ? (Uu.packed && this.slots.setFaces(Uu.slot, Uu.vertices.start + Uu.faceCount, Uu.faceCount), Eu.sO && this.setChunkMeshLight(uu, Eu.sO)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Uu.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(uu, Eu) {
        const ju = this.chunks.get(uu);
        ju && this.geometry.setLight(ju, Eu)
      }
      drawStats() {
        let uu = this.transparent.length;
        for (const Eu of this.opaqueBatches) uu += Eu.meshes.length;
        return {
          drawn: uu,
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
      removeChunkMesh(uu) {
        const Eu = this.chunks.get(uu);
        Eu && (this.geometry.release(Eu), this.slots.release(Eu.slot), this.chunks.delete(uu))
      }
      remeshLost(uu, Eu) {
        this.geometry.release(Eu), Eu.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Eu.lostRemeshes++);
        const ju = uu.zb,
          [su, Uu, Zu] = ju.Esu(Eu.origin[0], Eu.origin[1], Eu.origin[2]),
          Xu = ju.CY.bY(su, Uu, Zu);
        Xu && (Xu.qY = !0, Xu.NY = !0, ju.fY(Xu, !1))
      }
      chooseFaceRanges(uu, Eu, ju) {
        const su = this.faceRanges;
        uu.faceMask = ju, uu.rangeCount = (0, tl.j)(Eu, ju, su), uu.first0 = su[0], uu.count0 = su[1], uu.first1 = su[2], uu.count1 = su[3]
      }
      drawWhole(uu) {
        uu.faceMask = -1, uu.faceEpoch = -1, uu.rangeCount = 1, uu.first0 = 0, uu.count0 = uu.faceCount
      }
      writeSlot(uu) {
        const [Eu, ju, su] = this.originOffset;
        this.slots.set(uu.slot, uu.origin[0] - Eu, uu.origin[1] - ju, uu.origin[2] - su, uu.visibility)
      }
      materialFor(uu) {
        const Eu = this.materials.get(uu);
        if (Eu) return Eu;
        const ju = pl(uu);
        if (!ju) return this.warnOnce(`material:${uu.name}`, `Lite terrain cannot draw material "${uu.name}"; its chunks are skipped.`), null;
        const {
          model: su,
          atlas: Uu,
          texture: Zu,
          animated: Xu,
          uniformData: lu
        } = ju, qu = {
          id: this.materials.size,
          model: su,
          texture: Zu,
          animated: Xu,
          uniformData: lu,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${uu.name}`,
            size: lu.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: ju.liquid,
          customRenderMat: ju.customRenderMat,
          atlasCount: 0,
          I5: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(uu, qu), this.device.queue.writeBuffer(qu.uniformBuffer, 0, lu), qu.ready = this.createMaterialBindGroup(qu, Uu).catch((Eu => {
          console.error(`Lite terrain failed to load the textures of material "${uu.name}"`, Eu)
        })), qu
      }
      materialLayout(uu) {
        const Eu = function(uu) {
            const Eu = ["uniforms"];
            if ("atlas" === uu.texture) {
              uu.animated && Eu.push("animData"), Eu.push("sampler");
              for (let ju = 0; ju < uu.atlasCount; ju++) Eu.push("textureArray")
            } else "single" === uu.texture && Eu.push("sampler", "texture");
            return Eu
          }(uu),
          ju = Eu.join(",");
        let su = this.materialLayouts.get(ju);
        if (!su) {
          const uu = GPUShaderStage.FRAGMENT;
          su = this.device.createBindGroupLayout({
            label: `terrain-material-${ju}`,
            entries: Eu.map(((Eu, ju) => {
              switch (Eu) {
                case "uniforms":
                  return {
                    binding: ju, visibility: GPUShaderStage.VERTEX | uu, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: ju, visibility: GPUShaderStage.VERTEX | uu, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: ju, visibility: uu, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: ju, visibility: uu, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: ju, visibility: uu, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(ju, su)
        }
        return su
      }
      async createMaterialBindGroup(uu, Eu) {
        const ju = [{
          buffer: uu.uniformBuffer
        }];
        if (Eu) {
          const su = await EE(this.device, Eu.sources);
          uu.atlasCount = su.length, uu.I5 = su[0].layerWidth, uu.atlasLayers = su[0].layers, Eu.animDataPerTex && ju.push({
            buffer: Hu(this.device, Float32Array.from(Eu.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), ju.push(this.sampler);
          for (const uu of su) ju.push(uu.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === uu.texture) {
          const {
            url: Eu
          } = uu.model.diffuseTexture.source, {
            pixels: su,
            width: Uu,
            height: Zu
          } = await uE(Eu);
          ju.push(this.sampler), ju.push(nu(this.device, su, Uu, Zu, 1, `terrain-${Eu}`).createView({
            dimension: "2d"
          }))
        }
        const su = this.materialLayout(this.programKey(uu, !1));
        uu.bindGroupLayout = su, uu.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${uu.model.name}`,
          layout: su,
          entries: ju.map(((uu, Eu) => ({
            binding: Eu,
            resource: uu
          })))
        })
      }
      programKey(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const su = ju ? ju.lighting : this.lighting,
          Uu = ju ? ju.AN : this.AN,
          Zu = {
            texture: uu.texture,
            atlasCount: uu.atlasCount,
            I5: uu.I5,
            atlasLayers: uu.atlasLayers,
            animated: uu.animated,
            alphaTest: uu.model.transparencyMode === du.q.alphaTest,
            lighting: su,
            dirLightCount: ju ? ju.dirLightCount : this.dirLightCount,
            packed: Eu
          };
        if (!Uu) return Zu;
        const Xu = this.shaderPackFields(uu, Uu),
          lu = "atlas" === uu.texture && uu.model.transparencyMode === du.q.opaque && ks(Xu.packVariant);
        return {
          ...Zu,
          ...Xu,
          alphaTest: Zu.alphaTest || lu
        }
      }
      shaderPackFields(uu, Eu) {
        const ju = this.packVariant(uu, Eu);
        return void 0 === ju ? Ps : {
          packVariant: ju,
          liquid: uu.liquid
        }
      }
      packVariant(uu, Eu) {
        return uu.customRenderMat ? void 0 : function(uu, Eu) {
          const ju = uu ? uu.defineFor(Eu ? "liquid" : "terrain") : 0;
          return 0 === ju ? void 0 : ju
        }(Eu, uu.liquid)
      }
      isBlended(uu) {
        return uu.model.transparencyMode === du.q.alphaBlend
      }
      shaderModule(uu, Eu) {
        let ju = this.modules.get(uu);
        return ju || (ju = this.device.createShaderModule({
          label: Eu,
          code: uu
        }), this.modules.set(uu, ju)), ju
      }
      pipelineFor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!uu.bindGroupLayout) return null;
        if (!su) return this.pipelineOf(uu, Eu, ju);
        const Uu = this.pipelineIdNow(uu, Eu, !0, ju),
          Zu = this.pipelines.get(Uu);
        if (Zu) return Zu;
        const Xu = this.pipelineOf(uu, Eu, ju);
        return Xu && void 0 === Zu && this.startPipeline(Uu, uu, {
          ...this.programKey(uu, Eu),
          resting: su
        }, ju), Xu
      }
      pipelineOf(uu, Eu, ju) {
        const su = this.pipelineIdNow(uu, Eu, !1, ju),
          Uu = this.pipelines.get(su);
        return void 0 !== Uu ? Uu : (this.startPipeline(su, uu, this.programKey(uu, Eu), ju), null)
      }
      pipelineIdNow(uu, Eu, ju, su) {
        const {
          lighting: Uu,
          dirLightCount: Zu
        } = this, {
          transparencyMode: Xu,
          backFaceCulling: lu
        } = uu.model, qu = this.packVariant(uu, this.AN), fu = (Eu ? 2 : 0) + (ju ? 1 : 0), Cu = uu.pipelineIds[fu];
        if (null !== Cu && Cu.lighting === Uu && Cu.dirLightCount === Zu && Cu.packVariant === qu && Cu.transparencyMode === Xu && Cu.cull === lu && Cu.atlasCount === uu.atlasCount && Cu.I5 === uu.I5 && Cu.atlasLayers === uu.atlasLayers && Cu.colorFormat === su._colorFormat && Cu.depthStencilFormat === su._depthStencilFormat && Cu.sampleCount === su._sampleCount) return Cu.id;
        const bu = this.programKey(uu, Eu),
          cu = this.pipelineId(uu, ju ? {
            ...bu,
            resting: ju
          } : bu, su);
        return uu.pipelineIds[fu] = {
          id: cu,
          lighting: Uu,
          dirLightCount: Zu,
          packVariant: qu,
          transparencyMode: Xu,
          cull: lu,
          atlasCount: uu.atlasCount,
          I5: uu.I5,
          atlasLayers: uu.atlasLayers,
          colorFormat: su._colorFormat,
          depthStencilFormat: su._depthStencilFormat,
          sampleCount: su._sampleCount
        }, cu
      }
      pipelineId(uu, Eu, ju) {
        return jq(Eu, this.isBlended(uu), uu.model.backFaceCulling, ju)
      }
      pipelineBuild(uu, Eu, ju) {
        var su;
        const Uu = this.pipelineId(uu, Eu, ju);
        return null !== (su = this.builds.get(Uu)) && void 0 !== su ? su : this.startPipeline(Uu, uu, Eu, ju)
      }
      startPipeline(uu, Eu, ju, su) {
        var Uu;
        this.pipelines.set(uu, null);
        const Zu = uU(ju),
          Xu = this.isBlended(Eu),
          lu = this.shadowMask && su._depthStencilFormat ? function(uu, Eu, ju, su) {
            if (void 0 === uu.packVariant || uu.liquid || Eu) return "none";
            const Uu = (0, yE.i)(uu.packVariant);
            return null === Uu || void 0 === Uu || !Uu.sunShadow || !Xs(Uu, ju) || Uu.discards || uu.alphaTest && ks(uu.packVariant) ? "none" : su ? "edge" : "plain"
          }(ju, Xu, !!this.sunShadow, su._sampleCount > 1) : "none";
        let qu;
        try {
          qu = EU(ju, !!this.sunShadow, lu)
        } catch (hu) {
          if (!Vs(ju)) throw hu;
          return this.failedPackBuild(uu, ju, Zu, hu)
        }
        const fu = this.shaderModule(qu, Zu),
          Cu = [];
        ju.packed || (Cu.push(function(uu, Eu) {
          const ju = [{
            shaderLocation: yl.position,
            offset: HE.g.mj,
            format: "float32x3"
          }, {
            shaderLocation: yl.normal,
            offset: HE.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: yl.color,
            offset: HE.g.colorOffset,
            format: "unorm8x4"
          }];
          return uu && ju.push({
            shaderLocation: yl.uv,
            offset: HE.g.uvOffset,
            format: "float32x2"
          }), Eu && ju.push({
            shaderLocation: yl.blockFlagWords,
            offset: HE.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: HE.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: ju
          }
        }("none" !== ju.texture, Vs(ju))), ju.lighting && Cu.push(Rl));
        const bu = Eu.model.backFaceCulling,
          cu = {
            label: Zu,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Eu.bindGroupLayout, ...AZ(this.device, ju, !!this.sunShadow, "none" !== lu)]
            }),
            vertex: {
              module: fu,
              entryPoint: "mainVertex",
              buffers: Cu
            },
            fragment: gE({
              module: fu,
              entryPoint: "mainFragment"
            }, su, Xu ? uq : null),
            depthStencil: su._depthStencilFormat ? {
              format: su._depthStencilFormat,
              depthCompare: null !== (Uu = su._depthCompare) && void 0 !== Uu ? Uu : JE,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: su._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: bu ? "back" : "none"
            }
          },
          Nu = ju.resting ? 0 : 1;
        this.compiling += Nu;
        const Ou = "none" === lu ? this.device.createRenderPipelineAsync(cu) : this.startMaskPipelines(fu, cu, "edge" === lu);
        Ou.then((Eu => {
          this.compiling -= Nu, this.pipelines.set(uu, Eu)
        }), (uu => {
          this.compiling -= Nu, console.error(`Lite terrain pipeline ${Zu} failed`, uu), Bl(this.device, ju, Zu, fu, uu)
        }));
        const Yu = {
          name: Zu,
          module: fu,
          built: Ou
        };
        return this.builds.set(uu, Yu), Yu
      }
      startMaskPipelines(uu, Eu, ju) {
        const su = Eu.depthStencil,
          Uu = this.device.createRenderPipelineAsync(ju ? Eu : {
            ...Eu,
            depthStencil: {
              ...su,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Zu = this.device.createRenderPipelineAsync({
            ...Eu,
            label: `${Eu.label}-prepass`,
            fragment: {
              module: uu,
              entryPoint: "prepassFragment",
              targets: [{
                format: vl
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Uu, Zu]).then((uu => {
          let [Eu, ju] = uu;
          return this.prepassOf.set(Eu, ju), this.maskPipelines++, Eu
        }))
      }
      failedPackBuild(uu, Eu, ju, su) {
        console.error(`Lite terrain pipeline ${ju} failed`, su), Bl(this.device, Eu, ju, null, su);
        const Uu = Promise.reject(su);
        Uu.catch((() => {}));
        const Zu = {
          name: ju,
          module: null,
          built: Uu
        };
        return this.builds.set(uu, Zu), Zu
      }
      checkShaderPack(uu) {
        return Sl(uu, {
          device: this.device,
          target: this.target,
          material: uu => this.materialFor(uu),
          programKey: (uu, Eu, ju) => this.programKey(uu, Eu, ju),
          pipelineBuild: (uu, Eu, ju) => this.pipelineBuild(uu, Eu, ju)
        })
      }
      createBinding(uu, Eu, ju) {
        return this.target = Eu, {
          renderable: uu,
          pipeline: oE(this.device, Eu),
          draw: uu => {
            this.geometry.setDrawing(!0);
            try {
              return ju ? this.drawTransparent(uu, Eu) : this.drawOpaque(uu, Eu)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(uu, Eu) {
        var ju, su, Uu, Zu;
        const {
          Uc: Xu
        } = uu;
        this.lighting = uu.aY;
        const lu = (0, Ml.x)(Eu);
        this.dirLightCount = Math.min(lu, 4), this.AN = null !== (ju = Xu.AN) && void 0 !== ju ? ju : null, lu > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(uu, Eu), this.animateMaterials(Eu.animTick);
        const qu = Xu.ec,
          fu = qu[0] !== this.originOffset[0] || qu[1] !== this.originOffset[1] || qu[2] !== this.originOffset[2];
        fu && (this.originOffset[0] = qu[0], this.originOffset[1] = qu[1], this.originOffset[2] = qu[2]);
        const Cu = Eu.eye;
        this.eye[0] = Cu[0], this.eye[1] = Cu[1], this.eye[2] = Cu[2], this.writeShaderPackInputs();
        const bu = Eu.projectionMatrix,
          cu = 0 === bu[15];
        let Nu = 0;
        (fu || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Ou
        } = this;
        kE(this.transparentRenderable._worldCenter, Eu, aE), this.resetBatches(cu), this.transparent.length = 0, this.unlit.length = 0;
        const Yu = Xu.zb.duu,
          hu = Yu / 2 * Math.sqrt(3);
        let Du = 0;
        const gu = !!this.AN && os(this.AN.defineFor("liquid"));
        let Mu = !1;
        const eu = null !== (su = null === (Uu = Xu.mG) || void 0 === Uu ? void 0 : Uu.visibility) && void 0 !== su ? su : null,
          Gu = this.visCull && cu && 0 === this.compiling && null !== eu && Xu.zb.Jsu[0] >= this.visCullMinDistance ? this.target : null,
          pu = this.visPassable,
          wu = this.visCandidates,
          Ju = this.visCandidateBatches;
        pu.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let du = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let au = 0;
        const Pu = (uu, ju) => {
          if (!ju) return this.transparent.push(uu), void(au += 2 * uu.faceCount);
          if (null !== uu.faceGroups && ju.faceCull) {
            if (0 === Nu && (Nu = (0, tl.b)(bu, Eu.renderWidth, Eu.renderHeight), Nu !== this.faceFocalPx && (this.faceFocalPx = Nu, Ou = ++this.faceEpoch)), uu.faceEpoch !== Ou) {
              uu.faceEpoch = Ou;
              const Eu = Math.sqrt(uu.distance) + hu,
                ju = (0, tl.g)(uu.planePX, uu.planeNX, uu.planePY, uu.planeNY, uu.planePZ, uu.planeNZ, this.eye[0] - (uu.origin[0] - this.originOffset[0]), this.eye[1] - (uu.origin[1] - this.originOffset[1]), this.eye[2] - (uu.origin[2] - this.originOffset[2]), (0, tl.d)(Eu, Nu));
              ju !== uu.faceMask && this.chooseFaceRanges(uu, uu.faceGroups, ju)
            }
            if (0 === uu.rangeCount) return
          } else - 1 !== uu.faceMask && this.drawWhole(uu);
          ju.meshes.push(uu), au += 2 * ((uu.rangeCount > 0 ? uu.count0 : 0) + (uu.rangeCount > 1 ? uu.count1 : 0))
        };
        for (const ku of this.chunks.values()) {
          fu && this.writeSlot(ku);
          const uu = ku.mesh.visibility;
          uu !== ku.visibility && (ku.visibility = uu, this.slots.setVisibility(ku.slot, uu));
          const {
            material: ju
          } = ku;
          this.geometry.lost(ku) && performance.now() >= ku.lostRetryAt && this.remeshLost(Xu, ku);
          const su = !(null === ju || void 0 === ju || !ju.bindGroup) && this.geometry.backed(ku),
            Uu = su && this.lighting && !ku.vertices.page.twin;
          if (Gu && (Number.isNaN(ku.key) && (ku.ci = Math.floor(ku.origin[0] / Yu), ku.cj = Math.floor(ku.origin[1] / Yu), ku.ck = Math.floor(ku.origin[2] / Yu), ku.key = (0, Tl.k)(ku.ci, ku.cj, ku.ck)), (!su || uu < 1 || Uu || !this.batchDraws(ju, ku.packed, Gu)) && this.visSeeThrough(ku, Gu) && pu.add(ku.key)), !su) continue;
          Uu || (ku.lostRemeshes = 0);
          const Zu = ku.origin[0] - this.originOffset[0],
            lu = ku.origin[1] - this.originOffset[1],
            qu = ku.origin[2] - this.originOffset[2];
          if (!(0, ll.e)(Eu.frustum, Zu, lu, qu, Yu)) continue;
          const Cu = Zu + Yu / 2 - this.eye[0],
            bu = lu + Yu / 2 - this.eye[1],
            Nu = qu + Yu / 2 - this.eye[2];
          if (ku.distance = Cu * Cu + bu * bu + Nu * Nu, this.lighting && !ku.lit && (Du = Math.max(Du, ku.vertexCount), this.unlit.push(ku)), Uu) continue;
          const Ou = this.isBlended(ju) ? null : this.batchFor(ju, ku.packed, ku.vertices.page, 1 === uu, cu);
          Gu ? (wu[du] = ku, Ju[du++] = Ou) : Pu(ku, Ou)
        }
        const ou = Gu ? this.sweepVisibility(uu, Eu, eu) : null;
        null === (Zu = (0, iZ.u)(Xu)) || void 0 === Zu || Zu.update(Eu.frustum, this.originOffset, Yu, ou);
        for (let ku = 0; ku < du; ku++) {
          const uu = wu[ku];
          !ou || ou.isDrawn(uu.ci, uu.cj, uu.ck) ? Pu(uu, Ju[ku]) : (this.visCulledParts++, this.visCulledTriangles += 2 * uu.faceCount)
        }
        for (const ku of this.transparent) Mu ||= gu && ku.material.liquid && !ku.material.customRenderMat;
        this.submittedTriangles = au, ou && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(uu, Eu, ou)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Mu) : Mu && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Du > 0 && this.geometry.lightFullSky(this.unlit, Du);
        for (const ku of this.opaqueBatches) this.chunkSorter.sort(ku.meshes, 1) || ku.meshes.sort(sq);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Uq)
      }
      sweepVisibility(uu, Eu, ju) {
        const {
          zb: su
        } = uu.Uc, Uu = su.duu, Zu = this.visPassable, Xu = this.eye[0] + this.originOffset[0], lu = this.eye[1] + this.originOffset[1], qu = this.eye[2] + this.originOffset[2];
        if (!ju.eyeClear(Xu, lu, qu, Eu.near, Eu.projectionMatrix, su)) return null;
        const [fu, Cu] = su.Jsu, bu = ju.update(Xu, lu, qu, Uu, fu, Cu, Zu);
        return this.visSweeps = ju.sweeps, bu ? ju : null
      }
      visSeeThrough(uu, Eu) {
        const {
          material: ju
        } = uu;
        return (!ju || !this.isBlended(ju)) && (uu.mesh.visibility < 1 || !(null !== ju && void 0 !== ju && ju.bindGroup) || uu.faceCount > 0 && (!this.geometry.backed(uu) || this.lighting && !uu.vertices.page.twin) || !this.batchDraws(ju, uu.packed, Eu))
      }
      batchDraws(uu, Eu, ju) {
        var su;
        const Uu = Eu ? 2 : 0;
        if (uu === this.visDrawsMaterial && function(uu, Eu) {
            return 0 !== (uu & 1 << Eu)
          }(this.visDrawsBits, Uu)) return 0 !== (this.visDrawsBits & 2 << Uu);
        let Zu = null !== (su = this.visBatchDraws.get(uu)) && void 0 !== su ? su : 0;
        if (!(Zu & 1 << Uu)) {
          Zu |= 1 << Uu | (!!uu.bindGroupLayout && this.canDraw(uu, Eu) && !!this.pipelines.get(this.pipelineIdNow(uu, Eu, !1, ju)) ? 2 << Uu : 0), this.visBatchDraws.set(uu, Zu)
        }
        return this.visDrawsMaterial = uu, this.visDrawsBits = Zu, 0 !== (Zu & 2 << Uu)
      }
      runVisCheck(uu, Eu, ju) {
        const {
          Uc: su
        } = uu, {
          zb: Uu
        } = su, Zu = Uu.duu, Xu = new Set;
        for (const Nu of this.chunks.values()) Xu.add(Nu.key);
        const lu = tU.Matrix.FromArray(Eu.viewProjectionMatrix).invert(),
          [qu, fu, Cu] = this.originOffset,
          bu = new tU.dO,
          cu = function(uu, Eu, ju, su) {
            const Uu = new Set;
            for (let Zu = 0; Zu < 27; Zu++)
              for (let Xu = 0; Xu < 48; Xu++) {
                const lu = ju((Xu + .5) / 48 * 2 - 1, (Zu + .5) / 27 * 2 - 1);
                Hl(uu, Eu, [lu[0] - Eu[0], lu[1] - Eu[1], lu[2] - Eu[2]], su, Uu)
              }
            return Uu
          }({
            dL: (uu, Eu, ju) => Uu.dL(uu, Eu, ju),
            occluders: ju.occluders,
            opaque: ju.opaque,
            hO: Zu,
            isDrawn: (uu, Eu, su) => ju.isDrawn(uu, Eu, su),
            hasParts: (uu, Eu, ju) => Xu.has((0, Tl.k)(uu, Eu, ju))
          }, [this.eye[0] + qu, this.eye[1] + fu, this.eye[2] + Cu], ((uu, Eu) => (tU.dO.TransformCoordinatesFromFloatsToRef(uu, Eu, .5, lu, bu), [bu.x + qu, bu.y + fu, bu.z + Cu])), (Uu.Jsu[0] + 1) * Zu);
        this.visViolations = cu.size;
        for (const Nu of cu) this.warnOnce(`vis:${Nu}`, `Lite terrain cave culling skipped chunk ${Nu}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var uu;
        null !== (uu = this.AN) && void 0 !== uu && uu.isRunning() && (this.shaderPackInputs ??= new nZ(this.device, this.AN.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.AN, this.eye, this.lighting))
      }
      bindShaderPackInputs(uu, Eu, ju) {
        var su, Uu, Zu, Xu;
        let lu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qu = this.packVariant(Eu, ju);
        if (void 0 === qu) return;
        this.shaderPackInputs || (this.shaderPackInputs = new nZ(this.device, ju.textureLayers(), this.sunShadow), this.shaderPackInputs.write(ju, this.eye, this.lighting));
        const fu = os(qu) ? null !== (su = null === (Uu = this.sceneDepth) || void 0 === Uu ? void 0 : Uu.view) && void 0 !== su ? su : this.standIn() : null,
          Cu = lu ? null !== (Zu = null === (Xu = this.shadowMask) || void 0 === Xu ? void 0 : Xu.view) && void 0 !== Zu ? Zu : this.standIn() : null;
        this.shaderPackInputs.bind(uu, fu, HZ(qu, !!this.sunShadow), Cu)
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
        var uu, Eu;
        return null !== (uu = null === (Eu = this.shaderPackInputs) || void 0 === Eu ? void 0 : Eu.bindGroupFor(null, !0)) && void 0 !== uu ? uu : null
      }
      resetBatches(uu) {
        const Eu = this.opaqueBatches;
        let ju = 0;
        for (const su of Eu) su.meshes.length > 0 && (su.meshes.length = 0, su.faceCull = this.batchFaceCull(su.material, uu), Eu[ju++] = su);
        Eu.length = ju
      }
      orderBatches() {
        const uu = this.opaqueBatches;
        for (let Eu = 0; Eu < uu.length; Eu++) {
          const ju = uu[Eu];
          ju.group = Eu;
          for (let su = 0; su < Eu; su++) {
            const Eu = uu[su];
            if (Eu.material === ju.material && Eu.packed === ju.packed) {
              ju.group = Eu.group;
              break
            }
          }
          ju.nearest = ju.meshes.length > 0 ? ju.meshes[0].distance : 1 / 0
        }
        uu.sort(Al)
      }
      batchFor(uu, Eu, ju, su, Uu) {
        for (const Xu of this.opaqueBatches)
          if (Xu.material === uu && Xu.packed === Eu && Xu.page === ju && Xu.resting === su) return Xu;
        const Zu = {
          material: uu,
          packed: Eu,
          page: ju,
          resting: su,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(uu, Uu)
        };
        return this.opaqueBatches.push(Zu), Zu
      }
      batchFaceCull(uu, Eu) {
        return !(!Eu || !(0, Ll.o)(uu.model)) && (!this.AN || ! function(uu) {
          var Eu;
          return !(null === (Eu = (0, yE.i)(uu)) || void 0 === Eu || !Eu.movesVertices)
        }(this.packVariant(uu, this.AN)))
      }
      writeFrameUniforms(uu, Eu) {
        const ju = this.frameUniforms,
          su = rs;
        if ((0, Ml.y)(uu, ju), ju[su.fogInfos] = Eu.fogEnabled ? Eu.fogMode : 0, ju[su.fogInfos + 1] = Eu.fogStart, ju[su.fogInfos + 2] = Eu.fogEnd, ju[su.fogInfos + 3] = Eu.fogDensity, ju.set(Eu.fogColour, su.fogColour), ju[su.outputHeight] = Eu.renderHeight, ju.set(Eu.ambientColour, su.sceneAmbient), (0, Ml.t)(Eu, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Eu = (0, el.j)(uu.TO, uu.MO, uu.eO);
          for (let uu = 0; uu < 4; uu++) ju[su.aoLevels + uu] = Eu[uu] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, ju)
      }
      animateMaterials(uu) {
        const Eu = is.anim;
        for (const ju of this.materials.values()) ju.animated && (ju.uniformData[Eu] = uu, this.device.queue.writeBuffer(ju.uniformBuffer, 4 * Eu, ju.uniformData, Eu, 1))
      }
      canDraw(uu, Eu) {
        return !("atlas" === uu.texture && !Eu) || (this.warnOnce(`stride:${uu.id}`, `Lite terrain: material "${uu.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(uu, Eu) {
        let ju = 0;
        uu.setBindGroup(1, this.frameBindGroup);
        for (const su of this.opaqueBatches) {
          if (!su.meshes.length || !this.canDraw(su.material, su.packed)) continue;
          const Uu = this.pipelineFor(su.material, su.packed, Eu, su.resting);
          Uu && (uu.setPipeline(Uu), uu.setBindGroup(2, su.material.bindGroup), this.AN && this.bindShaderPackInputs(uu, su.material, this.AN, this.prepassOf.has(Uu)), ju += this.drawBatch(uu, su))
        }
        return ju
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(uu, Eu, ju) {
        const su = this.target,
          Uu = this.AN;
        if (!su || !Uu || 0 === this.maskPipelines) return 0;
        let Zu = 0,
          Xu = null;
        this.geometry.setDrawing(!0);
        try {
          for (const lu of this.opaqueBatches) {
            if (!lu.meshes.length || !this.canDraw(lu.material, lu.packed)) continue;
            const qu = this.pipelineFor(lu.material, lu.packed, su, lu.resting),
              fu = qu && this.prepassOf.get(qu);
            fu && (Xu || (Xu = uu.beginRenderPass(Eu), Xu.setBindGroup(0, ju), Xu.setBindGroup(1, this.frameBindGroup)), Xu.setPipeline(fu), Xu.setBindGroup(2, lu.material.bindGroup), this.bindShaderPackInputs(Xu, lu.material, Uu, !0), Zu += this.drawBatch(Xu, lu))
          }
        } finally {
          var lu;
          null === (lu = Xu) || void 0 === lu || lu.end(), this.geometry.setDrawing(!1)
        }
        return Zu
      }
      drawBatch(uu, Eu) {
        let ju = 0;
        for (const su of Eu.meshes) {
          const {
            rangeCount: Eu
          } = su;
          Eu > 0 && (ju += this.geometry.draw(uu, su, this.lighting, su.first0, su.count0), Eu > 1 && (ju += this.geometry.draw(uu, su, this.lighting, su.first1, su.count1)))
        }
        return ju
      }
      drawTransparent(uu, Eu) {
        let ju = 0,
          su = null,
          Uu = null;
        uu.setBindGroup(1, this.frameBindGroup);
        for (const Zu of this.transparent) {
          const Xu = Zu.material;
          if (!this.canDraw(Xu, Zu.packed)) continue;
          const lu = this.pipelineFor(Xu, Zu.packed, Eu);
          lu && (lu !== su && (uu.setPipeline(lu), su = lu, this.AN && this.bindShaderPackInputs(uu, Xu, this.AN)), Xu !== Uu && (uu.setBindGroup(2, Xu.bindGroup), Uu = Xu), ju += this.geometry.draw(uu, Zu, this.lighting))
        }
        return ju
      }
    }

    function jq(uu, Eu, ju, su) {
      return `${uU(uu)}|${uu.atlasLayers}|${uu.I5}|${Eu}|${ju}|${su._colorFormat}|${su._depthStencilFormat}|${su._sampleCount}`
    }

    function sq(uu, Eu) {
      return uu.distance - Eu.distance
    }

    function Uq(uu, Eu) {
      return Eu.distance - uu.distance
    }
    class Zq {
      constructor() {
        this.left = []
      }
      sort(uu, Eu) {
        for (let ju = 0; ju < uu.length; ju++) {
          const Eu = uu[ju].distance;
          if (Eu - Eu !== 0) return !1
        }
        return this.sortRange(uu, 0, uu.length, Eu), !0
      }
      sortRange(uu, Eu, ju, su) {
        if (ju - Eu <= 16) {
          for (let Uu = Eu + 1; Uu < ju; Uu++) {
            const ju = uu[Uu],
              Zu = su * ju.distance;
            let Xu = Uu - 1;
            for (; Xu >= Eu && su * uu[Xu].distance > Zu; Xu--) uu[Xu + 1] = uu[Xu];
            uu[Xu + 1] = ju
          }
          return
        }
        const Uu = Eu + ju >>> 1;
        if (this.sortRange(uu, Eu, Uu, su), this.sortRange(uu, Uu, ju, su), su * uu[Uu - 1].distance <= su * uu[Uu].distance) return;
        const {
          left: Zu
        } = this, Xu = Uu - Eu;
        for (let Cu = 0; Cu < Xu; Cu++) Zu[Cu] = uu[Eu + Cu];
        let lu = 0,
          qu = Uu,
          fu = Eu;
        for (; lu < Xu && qu < ju;) uu[fu++] = su * uu[qu].distance < su * Zu[lu].distance ? uu[qu++] : Zu[lu++];
        for (; lu < Xu;) uu[fu++] = Zu[lu++]
      }
    }
    const Xq = Math.ceil(102);

    function lq(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Eu;
      const Zu = Math.min(Eu, ju),
        Xu = new Uint32Array(pj(su));
      for (let lu = 0; lu < su; lu++) {
        const Eu = Math.floor(lu * Zu / su),
          ju = Math.max(Eu + 1, Math.floor((lu + 1) * Zu / su));
        for (let qu = 0; qu < su; qu++) {
          const fu = Math.floor(qu * Zu / su),
            Cu = Math.max(fu + 1, Math.floor((qu + 1) * Zu / su));
          let bu = 0;
          for (let su = Eu; su < ju; su++)
            for (let Eu = fu; Eu < Cu; Eu++) uu[su * Uu + Eu] >= Xq && bu++;
          if (2 * bu >= (ju - Eu) * (Cu - fu)) {
            const uu = qu + su * lu;
            Xu[uu >>> 5] |= 1 << (31 & uu)
          }
        }
      }
      return Xu
    }

    function qq(uu) {
      return Math.max(1, Math.min(16, uu))
    }
    class fq {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = uu, this.loadTexture = Eu, this.warn = ju, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(uu, Eu) {
        return (uu.YF !== this.builtVersion || this.blockCaster.length !== Eu) && (this.build(uu, Eu), !0)
      }
      build(uu, Eu) {
        this.builtVersion = uu.YF;
        const ju = new Uint16Array(Eu),
          su = new Map;
        for (let Uu = 1; Uu < Eu; Uu++) {
          const Eu = this.classify(uu, Uu, su);
          if (null === Eu || Eu === Dj) {
            ju[Uu] = null === Eu ? 0 : Dj;
            continue
          }
          let Zu = this.byKey.get(Eu.key);
          void 0 === Zu && (Zu = this.allocate(Eu), this.byKey.set(Eu.key, Zu)), ju[Uu] = Zu
        }
        this.blockCaster = ju, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(uu, Eu) {
        const ju = uu.N9[Eu];
        if ("function" !== typeof ju) return ju;
        try {
          return ju()
        } catch (su) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Eu}: ${su instanceof Error?su.message:String(su)}`), null
        }
      }
      classify(uu, Eu, ju) {
        const su = this.option(uu, Eu);
        if ("none" === su) return null;
        if (su && su.planes.length > 0) {
          const uu = su.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(uu)}`,
            planes: uu
          }
        }
        if (uu.ZN[Eu]) return null;
        const Uu = uu.lN[Eu] ? uu.kF(Eu) : null;
        if (Uu && Uu.length >= 6) {
          const uu = function(uu) {
            const Eu = new Uint32Array(16);
            for (let ju = 0; ju + 6 <= uu.length; ju += 6) {
              const su = [0, 1, 2].map((Eu => Math.max(0, Math.ceil(8 * uu[ju + Eu] - .5)))),
                Uu = [0, 1, 2].map((Eu => Math.min(7, Math.floor(8 * uu[ju + Eu + 3] - .5))));
              for (let uu = su[2]; uu <= Uu[2]; uu++)
                for (let ju = su[1]; ju <= Uu[1]; ju++)
                  for (let Zu = su[0]; Zu <= Uu[0]; Zu++) {
                    const su = Zu + 8 * (ju + 8 * uu);
                    Eu[su >>> 5] |= 1 << (31 & su)
                  }
            }
            return Eu
          }(Uu);
          return function(uu) {
            return uu.every((uu => 4294967295 === uu))
          }(uu) ? Dj : uu.every((uu => 0 === uu)) ? null : {
            kind: "shape",
            key: `shape:${uu.join(",")}`,
            mask: uu
          }
        }
        if (uu.NJ[Eu] || !uu.HO[Eu]) return null;
        const Zu = [0, 1, 2, 3, 4, 5].map((su => {
          const Uu = uu.nO[6 * Eu + su];
          let Zu = ju.get(Uu);
          return void 0 === Zu && (Zu = function(uu) {
            if (!uu || uu.XY) return null;
            const {
              i5: Eu,
              I5: ju,
              o5: su
            } = uu;
            if (!Eu || !ju || !(ju > 0) || void 0 === su || !(su >= 0)) return null;
            const Uu = Eu[0],
              Zu = ju * ju * 4;
            if (!Uu || Uu.byteLength < Zu) return null;
            const Xu = Math.floor(Uu.byteLength / Zu),
              lu = Eu[Math.floor(su / Xu)];
            if (!lu) return null;
            const qu = new Uint8Array(lu.buffer, lu.byteOffset, lu.byteLength),
              fu = su % Xu * Zu;
            if (fu + Zu > qu.length) return null;
            const Cu = new Uint8Array(ju * ju);
            let bu = !1;
            for (let cu = 0; cu < Cu.length; cu++) Cu[cu] = qu[fu + 4 * cu + 3], bu ||= Cu[cu] < Xq;
            return bu ? {
              alpha: Cu,
              width: ju
            } : null
          }(uu.ZY(Uu)), ju.set(Uu, Zu)), Zu
        }));
        if (Zu.every((uu => null === uu))) return Dj;
        const Xu = qq(Math.max(...Zu.map((uu => {
            var Eu;
            return null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.width) && void 0 !== Eu ? Eu : 1
          })))),
          lu = new Uint32Array(pj(Xu)).fill(4294967295),
          qu = Zu.map((uu => null === uu ? lu : lq(uu.alpha, uu.width, uu.width, Xu)));
        return {
          kind: "cutout",
          key: `cutout:${Xu}:${qu.map((uu=>uu.join(","))).join("|")}`,
          size: Xu,
          faces: qu
        }
      }
      allocate(uu) {
        if (this.nextCaster >= wj) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Eu = this.nextCaster++;
        if (this.writeCaster(Eu, gj, 0, 0, 0), "shape" === uu.kind) {
          const ju = this.allocateMask(uu.mask.length);
          ju >= 0 && (this.sink(ju, uu.mask), this.writeCaster(Eu, Mj, ju, 0, 8))
        } else if ("cutout" === uu.kind) {
          const ju = pj(uu.size),
            su = this.allocateMask(6 * ju);
          if (su >= 0) {
            const Uu = new Uint32Array(6 * ju);
            uu.faces.forEach(((uu, Eu) => {
              Uu.set(uu, Eu * ju)
            })), this.sink(su, Uu), this.writeCaster(Eu, Gj, su, 0, uu.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Eu, uu.planes).finally((() => {
          this.planesLoading--
        })));
        return Eu
      }
      async loadPlanes(uu, Eu) {
        const ju = await Promise.all(Eu.map((uu => this.texture(uu.texture))));
        if (ju.some((uu => null === uu))) return;
        const su = ju,
          Uu = qq(Math.max(...su.map((uu => Math.min(uu.width, uu.height))))),
          Zu = pj(Uu),
          Xu = this.allocateMask(Eu.length * (4 + Zu));
        if (Xu < 0) return;
        const lu = new Uint32Array(Eu.length * (4 + Zu)),
          qu = 4 * Eu.length;
        Eu.forEach(((uu, Eu) => {
          const ju = Xu + qu + Eu * Zu;
          lu.set(function(uu, Eu) {
            const [ju, su] = uu.tangent, Uu = Math.hypot(ju, su) || 1, Zu = ju / Uu, Xu = su / Uu, lu = uu.centre[0] * Xu - uu.centre[1] * Zu, qu = new Uint32Array(4);
            return new Float32Array(qu.buffer, 0, 3).set([Zu, Xu, lu]), qu[3] = Eu, qu
          }(uu, ju), 4 * Eu), lu.set(lq(su[Eu].alpha, su[Eu].width, su[Eu].height, Uu), qu + Eu * Zu)
        })), this.sink(Xu, lu), this.writeCaster(uu, ej, Xu, Eu.length, Uu)
      }
      texture(uu) {
        let Eu = this.textures.get(uu);
        return Eu || (Eu = this.loadTexture(uu).catch((Eu => (this.warn(`Sun shadows: no mask for ${uu}: ${Eu instanceof Error?Eu.message:String(Eu)}`), null))), this.textures.set(uu, Eu)), Eu
      }
      allocateMask(uu) {
        if (this.nextMaskWord + uu > Jj) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Eu = 32768 + this.nextMaskWord;
        return this.nextMaskWord += uu, Eu
      }
      writeCaster(uu, Eu, ju, su, Uu) {
        this.sink(0 + 4 * uu, Uint32Array.of(Eu, ju, su, Uu))
      }
      warnOnce(uu) {
        this.warned.has(uu) || (this.warned.add(uu), this.warn(uu))
      }
    }
    var Cq = ju(2969);

    function bq(uu) {
      return !uu.qY && !uu.pw && !uu.iO
    }

    function cq() {
      return {
        bricks: new Uint32Array(fj),
        cells: new Uint16Array(32768),
        special: new Uint8Array(lj)
      }
    }
    class Nq {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = uu, this.writeVoxels = Eu, this.writePool = ju, this.warn = su, this.eyeChunk = null, this.slotChunk = new Array(Ej).fill(null), this.slotVersion = new Float64Array(Ej).fill(-1), this.slotPool = new Array(Ej).fill(null), this.starved = new Uint8Array(Ej), this.queue = [], this.queued = new Uint8Array(Ej), this.queueSorted = !0, this.freePool = new Uint32Array(dj), this.freeCount = dj, this.casterTable = null, this.warnedPool = !1, this.scratch = cq(), this.victimScratch = cq(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Ej), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Uu = 0; Uu < dj; Uu++) this.freePool[Uu] = 65535 - Uu
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return dj - this.freeCount
      }
      chunkAdded(uu) {
        if (null === this.eyeChunk || !this.inRadius(uu.i, uu.j, uu.k)) return;
        const Eu = Oj(uu.i, uu.j, uu.k);
        this.slotChunk[Eu] = uu, this.slotVersion[Eu] = -1, this.enqueue(Eu)
      }
      update(uu, Eu, ju) {
        const su = this.casters.blockCaster;
        if (su !== this.casterTable) {
          this.casterTable = su;
          for (let uu = 0; uu < Ej; uu++) this.slotVersion[uu] = -1, this.slotChunk[uu] && this.enqueue(uu)
        }
        const Uu = Math.floor(uu[0] / 32),
          Zu = Math.floor(uu[1] / 32),
          Xu = Math.floor(uu[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Uu || this.eyeChunk[1] !== Zu || this.eyeChunk[2] !== Xu) && (this.eyeChunk = [Uu, Zu, Xu], this.follow(Eu), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let lu = 0; lu < Ej; lu++) {
          const uu = this.slotChunk[lu];
          uu && (uu.Gw || uu.IO !== this.slotVersion[lu]) && this.enqueue(lu)
        }
        this.drain(ju), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(uu, Eu) {
        this.records.set(Eu, 4 * uu), this.windowTopStale = !0, this.writeVoxels(4 * uu, Eu)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const uu = this.records;
        let Eu = -1 / 0;
        for (let su = 0; su < uu.length; su += 4) {
          const ju = 255 & uu[su + 3];
          ju !== Uj && ju !== Zj || !this.inRadius(uu[su], uu[su + 1], uu[su + 2]) || (Eu = Math.max(Eu, uu[su + 1] * zE + (uu[su + 3] >>> 8)))
        }
        const ju = Eu === -1 / 0 ? 1 : Eu + bj;
        ju !== this.windowTop[0] && (this.windowTop[0] = ju, this.writeVoxels(Cj, this.windowTop))
      }
      follow(uu) {
        const Eu = this.eyeChunk,
          [ju, su, Uu] = RE;
        for (let Xu = -Uu; Xu <= Uu; Xu++)
          for (let Uu = -su; Uu <= su; Uu++)
            for (let su = -ju; su <= ju; su++) {
              var Zu;
              const ju = Eu[0] + su,
                lu = Eu[1] + Uu,
                qu = Eu[2] + Xu,
                fu = Oj(ju, lu, qu),
                Cu = this.slotChunk[fu];
              if (Cu && !Cu.Gw && Cu.i === ju && Cu.j === lu && Cu.k === qu) continue;
              const bu = null !== (Zu = uu(ju, lu, qu)) && void 0 !== Zu ? Zu : null;
              Cu && (Cu.i !== ju || Cu.j !== lu || Cu.k !== qu) && this.slotPool[fu] && (this.release(fu), this.record.fill(0), this.writeRecord(fu, this.record)), this.slotChunk[fu] = bu, this.slotVersion[fu] = -1, (bu || Cu) && this.enqueue(fu)
            }
      }
      requeueStarved() {
        for (let uu = 0; uu < Ej; uu++) this.starved[uu] && this.slotChunk[uu] && this.enqueue(uu)
      }
      enqueue(uu) {
        this.queued[uu] || (this.queued[uu] = 1, this.queue.push(uu), this.queueSorted = !1)
      }
      drain(uu) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const uu = new Map;
          for (const Eu of this.queue) uu.set(Eu, this.slotDistance(Eu));
          this.queue.sort(((Eu, ju) => uu.get(ju) - uu.get(Eu))), this.queueSorted = !0
        }
        const Eu = performance.now();
        let ju = 0;
        const su = [];
        for (; this.queue.length > 0 && (0 === ju || performance.now() - Eu < uu);) {
          const uu = this.queue.pop(),
            Eu = this.slotChunk[uu];
          !Eu || Eu.Gw || bq(Eu) ? (this.queued[uu] = 0, this.encodeSlot(uu), ju++) : su.push(uu)
        }
        for (let Uu = su.length - 1; Uu >= 0; Uu--) this.queue.push(su[Uu])
      }
      slotDistance(uu) {
        const Eu = this.slotChunk[uu],
          ju = this.eyeChunk;
        return Eu ? Math.max(Math.abs(Eu.i - ju[0]), Math.abs(Eu.j - ju[1]), Math.abs(Eu.k - ju[2])) : 0
      }
      inRadius(uu, Eu, ju) {
        const su = this.eyeChunk,
          [Uu, Zu, Xu] = RE;
        return Math.abs(uu - su[0]) <= Uu && Math.abs(Eu - su[1]) <= Zu && Math.abs(ju - su[2]) <= Xu
      }
      release(uu) {
        const Eu = this.slotPool[uu];
        if (Eu) {
          for (let uu = Eu.length - 1; uu >= 0; uu--) this.freePool[this.freeCount++] = Eu[uu];
          this.slotPool[uu] = null
        }
      }
      encodeSlot(uu) {
        var Eu, ju, su, Uu, Zu;
        let Xu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          lu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const qu = null !== (Eu = null === (ju = this.slotPool[uu]) || void 0 === ju ? void 0 : ju.length) && void 0 !== Eu ? Eu : 0;
        this.release(uu), this.starved[uu] = 0;
        const fu = this.slotChunk[uu],
          Cu = this.record;
        if (!fu || fu.Gw || !fu.ac) return this.slotChunk[uu] = null, this.slotVersion[uu] = -1, Cu.fill(0), this.writeRecord(uu, Cu), void(qu > 0 && this.requeueStarved());
        this.slotVersion[uu] = fu.IO;
        const bu = this.encodeBricks(fu, uu, Xu, lu);
        Cu[0] = fu.i, Cu[1] = fu.j, Cu[2] = fu.k, Cu[3] = bu, this.writeRecord(uu, Cu), null === (su = this.encoded) || void 0 === su || su.call(this, fu), lu && (null !== (Uu = null === (Zu = this.slotPool[uu]) || void 0 === Zu ? void 0 : Zu.length) && void 0 !== Uu ? Uu : 0) < qu && this.requeueStarved()
      }
      encodeBricks(uu, Eu, ju, su) {
        if (uu.ZO) return sj;
        const Uu = this.casters.blockCaster,
          {
            data: Zu,
            stride: Xu,
            offset: lu
          } = uu.ac,
          [qu, fu, Cu] = Xu,
          bu = zE,
          {
            bricks: cu,
            cells: Nu,
            special: Ou
          } = ju;
        cu.fill(0), Ou.fill(0);
        let Yu = 0,
          hu = 0,
          Du = 0;
        for (let gu = 0; gu < bu; gu++) {
          const Eu = gu >> 2,
            ju = 3 & gu,
            su = uu.JN[gu],
            Xu = su === Cq.f ? -1 : su < Uu.length ? Uu[su] : 0;
          if (0 !== Xu)
            for (let uu = 0; uu < bu; uu++) {
              const su = uu >> 2,
                Mu = 3 & uu;
              let eu = lu + uu * qu + gu * fu;
              for (let uu = 0; uu < bu; uu++, eu += Cu) {
                let lu = Xu;
                if (lu < 0) {
                  const uu = Zu[eu];
                  if (lu = uu < Uu.length ? Uu[uu] : 0, 0 === lu) continue
                }
                const qu = Yj(su, Eu, uu >> 2),
                  fu = hj(Mu, ju, 3 & uu);
                cu[3 * qu + (fu >>> 5)] |= 1 << (31 & fu), Nu[qu * Xj + fu] = lu, Yu++, Du = gu, lu === Dj ? hu++ : Ou[qu] = 1
              }
            }
        }
        return 0 === Yu ? sj : 32768 === hu ? Uj | Du << 8 : (this.writePoolEntries(Eu, ju, su), this.writeVoxels(qj + Eu * fj, cu), Zj | Du << 8)
      }
      writePoolEntries(uu, Eu, ju) {
        const {
          bricks: su,
          cells: Uu,
          special: Zu
        } = Eu, Xu = this.entry;
        let lu = 0;
        for (let Cu = 0; Cu < lj; Cu++) lu += Zu[Cu];
        if (0 === lu) return;
        ju && this.freeCount < lu && this.evictBeyond(uu, lu);
        const qu = new Uint32Array(ju ? Math.min(lu, this.freeCount) : 0);
        let fu = 0;
        for (let Cu = 0; Cu < lj; Cu++) {
          if (!Zu[Cu]) continue;
          const ju = 3 * Cu;
          if (fu === qu.length) {
            this.dropSpecials(Eu, Cu), this.starved[uu] = 1;
            continue
          }
          const lu = this.freePool[--this.freeCount];
          qu[fu++] = lu;
          for (let uu = 0; uu < Xj; uu++) {
            const Eu = su[ju + (uu >>> 5)] >>> (31 & uu) & 1 ? Uu[Cu * Xj + uu] : 0;
            1 & uu ? Xu[uu >> 1] |= Eu << 16 : Xu[uu >> 1] = Eu
          }
          su[ju + 2] = lu + 1, this.writePool(aj + 32 * lu, Xu)
        }
        qu.length > 0 && (this.slotPool[uu] = qu)
      }
      evictBeyond(uu, Eu) {
        const ju = this.slotDistance(uu),
          su = [];
        for (let Uu = 0; Uu < Ej; Uu++) Uu !== uu && this.slotPool[Uu] && this.slotDistance(Uu) > ju && su.push(Uu);
        su.sort(((uu, Eu) => this.slotDistance(Eu) - this.slotDistance(uu)));
        for (const Uu of su) {
          if (this.freeCount >= Eu) return;
          const uu = this.slotChunk[Uu];
          uu && !uu.Gw && uu.ac && (uu.IO === this.slotVersion[Uu] || bq(uu)) && this.encodeSlot(Uu, this.victimScratch, !1)
        }
      }
      dropSpecials(uu, Eu) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const ju = 3 * Eu;
        for (let su = 0; su < Xj; su++) uu.cells[Eu * Xj + su] !== Dj && (uu.bricks[ju + (su >>> 5)] &= ~(1 << (31 & su)))
      }
    }
    var Oq = ju(37867);
    class Yq {
      constructor(uu) {
        this.device = uu, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Wj, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.zb = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = uu.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = uu.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(uu, Eu, ju) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: su
        } = this;
        su.NN(uu, Eu), ju.forEachSunShadowCaster((uu => {
          this.add(uu)
        })), su.finish();
        const Uu = 0 === su.parts;
        if (Uu && this.uploadedEmpty) return;
        this.uploadedEmpty = Uu;
        const {
          queue: Zu
        } = this.device, {
          words: Xu
        } = su;
        Zu.writeBuffer(this.frameBuffer, 0, Xu, 0, 16385), su.refs > 0 && Zu.writeBuffer(this.frameBuffer, 65540, Xu, mj, su.refs), Uu || Zu.writeBuffer(this.frameBuffer, 327684, Xu, vj, su.parts * kj)
      }
      add(uu) {
        const Eu = this.gridFor(uu);
        if (!Eu) return;
        const {
          frame: ju
        } = this, {
          zb: su,
          worldAt: Uu,
          instances: Zu,
          instanceCount: Xu,
          thin: lu
        } = uu;
        if (Zu)
          for (let qu = 0; qu < Xu; qu++) lu ? (Ij(Zu, 16 * qu, su, Uu, this.zb), ju.add(Eu, this.zb)) : ju.add(Eu, Zu, 16 * qu);
        else ju.add(Eu, su, Uu)
      }
      gridFor(uu) {
        let {
          geometry: Eu,
          indexed: ju,
          first: su,
          count: Uu,
          skip: Zu
        } = uu, Xu = this.grids.get(Eu);
        Xu || (Xu = new Map, this.grids.set(Eu, Xu));
        const lu = `${ju?su:-1-su}:${Uu}:${null!==Zu&&void 0!==Zu?Zu:""}`;
        let qu = Xu.get(lu);
        if (void 0 !== qu || this.gridsFull) return qu;
        const fu = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = fu + 2;
        else if (fu > this.bakeDeadline) return;
        return qu = this.bake(Eu, ju, su, Uu, Zu), void 0 !== qu && Xu.set(lu, qu), qu
      }
      bake(uu, Eu, ju, su, Uu) {
        const Zu = uu.vertexAttributes.find((uu => "position" === uu.kind)),
          Xu = Zu ? function(uu, Eu, ju, su) {
            let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Zu = uu => Eu ? Eu[ju + uu] : ju + uu,
              Xu = uu => null !== Uu && [0, 1, 2].some((Eu => {
                const ju = Zu(uu + Eu);
                return ju >= Uu[0] && ju < Uu[1]
              })),
              lu = [1 / 0, 1 / 0, 1 / 0],
              qu = [-1 / 0, -1 / 0, -1 / 0];
            for (let gu = 0; gu + 2 < su; gu += 3)
              if (!Xu(gu))
                for (let Eu = 0; Eu < 3; Eu++) {
                  const ju = Zu(gu + Eu);
                  for (let Eu = 0; Eu < 3; Eu++) lu[Eu] = Math.min(lu[Eu], uu[3 * ju + Eu]), qu[Eu] = Math.max(qu[Eu], uu[3 * ju + Eu])
                }
            const fu = Math.max(qu[0] - lu[0], qu[1] - lu[1], qu[2] - lu[2]);
            if (!(fu > 0)) return null;
            const Cu = fu / 64,
              bu = [0, 0, 0],
              cu = [0, 0, 0],
              Nu = [0, 0, 0];
            for (let gu = 0; gu < 3; gu++) bu[gu] = Math.min(65, Math.ceil((qu[gu] - lu[gu]) / Cu) + 1), cu[gu] = lu[gu] - Cu / 2, Nu[gu] = cu[gu] + bu[gu] * Cu;
            const Ou = new Uint32Array(Math.ceil(bu[0] * bu[1] * bu[2] / 32)),
              Yu = new Float64Array(9),
              hu = [0, 0, 0],
              Du = [0, 0, 0];
            for (let gu = 0; gu + 2 < su; gu += 3)
              if (!Xu(gu)) {
                for (let Eu = 0; Eu < 3; Eu++) {
                  const ju = Zu(gu + Eu);
                  for (let su = 0; su < 3; su++) Yu[3 * Eu + su] = uu[3 * ju + su]
                }
                for (let uu = 0; uu < 3; uu++) {
                  const Eu = Math.min(Yu[uu], Yu[3 + uu], Yu[6 + uu]),
                    ju = Math.max(Yu[uu], Yu[3 + uu], Yu[6 + uu]);
                  hu[uu] = Math.max(0, Math.floor((Eu - cu[uu]) / Cu - 1e-6)), Du[uu] = Math.min(bu[uu] - 1, Math.floor((ju - cu[uu]) / Cu + 1e-6))
                }
                for (let uu = hu[2]; uu <= Du[2]; uu++)
                  for (let Eu = hu[1]; Eu <= Du[1]; Eu++)
                    for (let ju = hu[0]; ju <= Du[0]; ju++)
                      if (Fj(Yu, cu[0] + (ju + .5) * Cu, cu[1] + (Eu + .5) * Cu, cu[2] + (uu + .5) * Cu, Cu / 2)) {
                        const su = ju + bu[0] * (Eu + bu[1] * uu);
                        Ou[su >>> 5] |= 1 << (31 & su)
                      }
              } return {
              words: Ou,
              lo: cu,
              hi: Nu,
              cell: Cu,
              dims: bu
            }
          }((0, Oq.j)(Zu, uu.vertexCount), Eu ? uu.indexData : null, ju, su, Uu) : null;
        if (!Xu) return null;
        const {
          words: lu,
          ...qu
        } = Xu;
        if (this.gridTop + lu.length > Vj) return void(this.gridsFull = !0);
        const fu = this.gridTop;
        return this.gridTop += lu.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * fu, lu), {
          ...qu,
          at: fu
        }
      }
    }
    const hq = Math.cos(1 * Math.PI / 180);

    function Dq(uu, Eu) {
      return uu[0] * Eu[0] + uu[1] * Eu[1] + uu[2] * Eu[2] < hq
    }
    async function gq(uu) {
      const {
        pixels: Eu,
        width: ju,
        height: su
      } = await uE(uu), Uu = new Uint8Array(ju * su);
      for (let Zu = 0; Zu < Uu.length; Zu++) Uu[Zu] = Eu[4 * Zu + 3];
      return {
        width: ju,
        height: su,
        alpha: Uu
      }
    }
    class Mq {
      constructor(uu, Eu) {
        this.device = uu, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Lj.m), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = uu.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = uu.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * cj,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = uu.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [ju, su, Uu] = Lj.o;
        this.volume = uu.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: ju,
            height: su,
            depthOrArrayLayers: Uu
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = uu.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = uu.createBuffer({
          label: "sun-shadow-volume-work",
          size: Lj.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Eu ? new Yq(uu) : null, this.entityStandIn = Eu ? null : uu.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var uu;
        null === (uu = this.stopWindow) || void 0 === uu || uu.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var uu, Eu;
        const ju = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || ju.push("Lite sun shadow volume pipeline compiling");
        const su = null !== (uu = null === (Eu = this.casters) || void 0 === Eu ? void 0 : Eu.planesLoading) && void 0 !== uu ? uu : 0;
        return su > 0 && ju.push(`${su} Lite sun shadow plane casters loading their textures`), ju
      }
      entries() {
        var uu, Eu, ju, su;
        const Uu = nE.o;
        return [{
          binding: Uu.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Uu.ac,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Uu.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Uu.volume,
          resource: this.volumeView
        }, {
          binding: Uu.sampler,
          resource: this.volumeSampler
        }, {
          binding: Uu.entities,
          resource: {
            buffer: null !== (uu = null === (Eu = this.entities) || void 0 === Eu ? void 0 : Eu.frameBuffer) && void 0 !== uu ? uu : this.entityStandIn
          }
        }, {
          binding: Uu.entityGrids,
          resource: {
            buffer: null !== (ju = null === (su = this.entities) || void 0 === su ? void 0 : su.gridBuffer) && void 0 !== ju ? ju : this.entityStandIn
          }
        }]
      }
      prepare(uu, Eu, ju) {
        var su;
        this.entitiesThisFrame = !1;
        const Uu = null !== (su = null === ju || void 0 === ju ? void 0 : ju.sunShadowReach()) && void 0 !== su ? su : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!ju || !Uu.sunShadow && !Uu.airShadow) return void(this.volumeHolds = null);
        if (uu.zb.duu !== zE) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${uu.zb.duu}; everything is lit.`)));
        const Zu = this.start(uu);
        this.casters.update(uu.sN, uu.sN.lN.length);
        const Xu = uu.ec;
        for (let cu = 0; cu < 3; cu++) this.eye[cu] = Eu[cu] + Xu[cu];
        const lu = (0, Lj.v)(this.eye);
        this.staleNear = lu;
        const qu = uu.zb.CY;
        Zu.update(this.eye, ((uu, Eu, ju) => qu.bY(uu, Eu, ju)), 1);
        const fu = (0, Lj.q)(ju.fuu()),
          Cu = Zu.eyeChunk,
          bu = this.uniformInts;
        for (let cu = 0; cu < 3; cu++) bu[cu] = Cu[cu], bu[4 + cu] = lu[cu];
        this.entitiesThisFrame = null !== this.entities && Uu.sunShadow, this.entitiesThisFrame && ij(this.uniformFloats, 8, Eu, fu), null !== this.volumeHolds && (this.castersWritten || Dq(fu, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(lu, fu, Cu)
      }
      markStale(uu) {
        const Eu = this.staleNear,
          ju = zE,
          su = [uu.i * ju, uu.j * ju, uu.k * ju];
        for (let Zu = 0; Zu < 3; Zu++)
          if (su[Zu] + ju <= Eu[Zu] - ju || su[Zu] >= Eu[Zu] + Lj.o[Zu] + ju) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Uu = this.stale;
        for (let Zu = 0; Zu < Uu.length; Zu += 4)
          if (Uu[Zu] === uu.i && Uu[Zu + 1] === uu.j && Uu[Zu + 2] === uu.k) return void(Uu[Zu + 3] = this.swept);
        if (16 === Uu.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Uu.push(uu.i, uu.j, uu.k, this.swept)
      }
      writeStale() {
        const uu = this.swept,
          Eu = this.stale;
        this.staleAll && uu - this.staleAllSwept >= Lj.h && (this.staleAll = !1, Eu.length = 0);
        let ju = 0;
        for (let Uu = 0; Uu < Eu.length; Uu += 4)
          if (uu - Eu[Uu + 3] < Lj.h) {
            for (let uu = 0; uu < 4; uu++) Eu[ju + uu] = Eu[Uu + uu];
            ju += 4
          } Eu.length = ju;
        const su = this.uniformInts;
        su[3] = this.staleAll ? 5 : ju / 4;
        for (let Uu = 0; Uu < 4; Uu++)
          for (let uu = 0; uu < 3; uu++) su[16 + 4 * Uu + uu] = 4 * Uu < ju ? Eu[4 * Uu + uu] * zE : 0
      }
      writeUniform() {
        const uu = this.uniformInts;
        let Eu = this.uniformWritten;
        if (Eu) {
          let ju = !0;
          for (let su = 0; su < uu.length && ju; su++) ju = uu[su] === Eu[su];
          if (ju) return
        }
        Eu ??= this.uniformWritten = new Int32Array(uu.length), Eu.set(uu), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(uu) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, uu)
      }
      computeVolume(uu, Eu, ju) {
        const su = this.buildVolumePass();
        if (!su) return void(this.volumeHolds = null);
        const Uu = (0, Lj.r)(this.volumeHolds, uu);
        this.volumeHolds = uu;
        const Zu = 1 === Uu.length && Uu[0].size.every(((uu, Eu) => uu === Lj.o[Eu])),
          Xu = this.sweptChunk,
          lu = this.sweptLight,
          qu = Eu[0] !== lu[0] || Eu[1] !== lu[1] || Eu[2] !== lu[2],
          fu = ju[0] !== Xu[0] || ju[1] !== Xu[1] || ju[2] !== Xu[2],
          Cu = qu && Dq(Eu, lu);
        if ((Zu || this.written || fu || Cu) && (this.fastLeft = Lj.h), Zu || this.written || qu || fu) {
          this.written = !1;
          for (let uu = 0; uu < 3; uu++) Xu[uu] = ju[uu], lu[uu] = Eu[uu];
          this.sweepLeft = Zu ? 0 : Lj.h
        }
        if (Zu ? this.swept += Lj.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Uu.push(...(0, Lj.x)(uu, this.slice)), this.slice = (this.slice + 1) % Lj.h, this.swept++), 0 === Uu.length) return;
        const bu = (0, Lj.B)(this.workData, Eu, Uu);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const cu = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Nu = cu.beginComputePass({
            label: "sun-shadow-volume"
          });
        Nu.setPipeline(su.pipeline), Nu.setBindGroup(Tj.group, su.bindGroup), Nu.dispatchWorkgroups(Math.ceil(bu / Lj.j)), Nu.end(), this.device.queue.submit([cu.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const uu = Tj,
          Eu = GPUShaderStage.COMPUTE,
          ju = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: uu.uniform,
              visibility: Eu,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: uu.ac,
              visibility: Eu,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: uu.special,
              visibility: Eu,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: uu.work,
              visibility: Eu,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: uu.volume,
              visibility: Eu,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          su = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: ju,
            entries: [{
              binding: uu.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: uu.ac,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: uu.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: uu.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: uu.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [ju]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Hj()
            }),
            entryPoint: "main"
          }
        }).then((uu => {
          this.volumePass = {
            pipeline: uu,
            bindGroup: su
          }
        }), (uu => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(uu)}`)
        })), null
      }
      start(uu) {
        if (this.window) return this.window;
        const Eu = (uu, Eu) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * uu, Eu)
        };
        this.casters = new fq(((uu, ju) => {
          this.castersWritten = !0, Eu(uu, ju)
        }), gq);
        const ju = new Nq(this.casters, ((uu, Eu) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * uu, Eu)
        }), Eu);
        ju.encoded = uu => {
          this.markStale(uu)
        };
        const su = uu => {
          ju.chunkAdded(uu)
        };
        return uu.zb.on("chunkAdded", su), this.stopWindow = () => {
          uu.zb.removeListener("chunkAdded", su)
        }, this.window = ju, ju
      }
    }
    var eq = ju(39046),
      Gq = ju(39052);
    const pq = 0,
      wq = 3,
      Jq = 4,
      dq = 5;

    function aq(uu, Eu, ju, su) {
      uu.drawOffset(Eu, su + pq), Eu[su + wq] = uu.drawTime(), ju[su + Jq] = uu.ring.drawStart(), ju[su + dq] = uu.ring.drawCount()
    }
    const Pq = `\n${Is}\n\nconst MAX_STOPS = ${Gq.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Gq.b/4}>,\n\tcolor1: array<vec4f, ${Gq.b}>,\n\tcolor2: array<vec4f, ${Gq.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Gq.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Gq.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var oq = ju(41870);
    class kq {
      constructor(uu, Eu, ju, su) {
        this.device = uu, this.system = Eu, this.frameIndex = ju, this.bindings = su, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, oq.h)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (uu, Eu) => {
          this.device.queue.writeBuffer(this.ring, uu * Gq.e * 4, this.system.ring.records, uu * Gq.e, (Eu - uu) * Gq.e)
        };
        const {
          name: Uu
        } = Eu;
        this.ring = uu.createBuffer({
          label: `particles-${Uu}`,
          size: Eu.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = uu.createBuffer({
          label: `particles-uniforms-${Uu}`,
          size: 4 * Gq.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(uu) {
        const Eu = (0, oq.e)(this.system, this.uniformBits, uu);
        Eu && (this.uniformBits = Eu, this.device.queue.writeBuffer(this.uniforms, 0, Eu))
      }
      bind() {
        const {
          system: uu
        } = this, Eu = this.texture;
        (0, oq.l)(uu, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${uu.name}`,
          size: [Gq.j, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Gq.j
        }, [Gq.j, 1]));
        const ju = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Eu.view && this.boundSampler === Eu.sampler && this.boundRamp === ju || (this.boundView = Eu.view, this.boundSampler = Eu.sampler, this.boundRamp = ju, this.bindGroup = this.device.createBindGroup({
          label: `particles-${uu.name}`,
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
            resource: Eu.sampler
          }, {
            binding: 3,
            resource: Eu.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: ju
          }]
        }))
      }
      destroy() {
        var uu;
        this.ring.destroy(), this.uniforms.destroy(), null === (uu = this.ramp) || void 0 === uu || uu.destroy()
      }
    }
    class mq {
      constructor(uu, Eu) {
        this.device = uu, this.resources = Eu, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, vE.d)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (uu, Eu) => (this.bindTarget(Eu), {
            renderable: this.renderable,
            pipeline: oE(this.device, Eu),
            draw: uu => Eu === this.preparedTarget ? this.draw(uu) : 0
          })
        }
      }
      rebind(uu) {
        this.device = uu, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [Eu, ju] of this.systems) {
          const su = new kq(uu, Eu, ju.frameIndex, this.bindings),
            Uu = Eu.ring.drawCount();
          Uu > 0 && su.upload(0, Uu), this.systems.set(Eu, su)
        }
      }
      build() {
        const {
          device: uu
        } = this, Eu = uu.createBindGroupLayout({
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
        this.frameLayout = uu.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = uu.createPipelineLayout({
          bindGroupLayouts: [wE(uu), Eu, this.frameLayout]
        }), this.module = uu.createShaderModule({
          label: "particles",
          code: Pq
        });
        const ju = uu.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        uu.queue.writeTexture({
          texture: ju
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: Eu,
          rampSampler: uu.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: ju.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get cUu() {
        return this.systems.size
      }
      reset() {
        for (const uu of this.systems.keys()) uu.reset()
      }
      describePendingWork() {
        return (0, eq.g)(this.systems.keys(), "Lite")
      }
      Kr(uu, Eu) {
        const ju = new eq.c(uu, Eu, this);
        return this.systems.set(ju, new kq(this.device, ju, this.allocateFrameIndex(), this.bindings)), ju
      }
      I6(uu, Eu) {
        for (const ju of this.systems.keys()) ju.I6(uu, Eu)
      }
      canDraw(uu) {
        const Eu = this.systems.get(uu),
          ju = uu.texture ? this.resources.boundTexture(uu.texture) : null;
        if (!Eu || !ju || !this.targetPipelines) return !1;
        if (Eu.texture = ju, Eu.pipelines.length = 0, !UE(uu.blendMode)) return this.warnOnce(`blend:${uu.blendMode}`, `particle blend mode ${uu.blendMode} is not drawn (${uu.name})`), !0;
        const su = (0, xu.k)(uu.blendMode);
        for (const Uu of su) {
          const uu = this.pipelineFor(Uu);
          if (!1 === uu) return Eu.pipelines.length = 0, !0;
          uu && Eu.pipelines.push(uu)
        }
        return Eu.pipelines.length === su.length
      }
      disposeStopped(uu) {
        uu.dispose()
      }
      remove(uu) {
        const Eu = this.systems.get(uu);
        Eu && (this.systems.delete(uu), Eu.destroy(), this.freeFrameIndices.push(Eu.frameIndex))
      }
      prepare(uu) {
        const Eu = uu.animationRatio || 1;
        kE(this.renderable._worldCenter, uu, dE), this.preparedTarget = this.target, this.draws.length = 0;
        let ju = 0;
        for (const su of this.systems.values()) {
          const uu = su.system;
          if (!uu.animateIfActive(Eu)) continue;
          if (uu.ring.takeUploads(su.upload), !uu.hasLiveParticles() || 0 === su.pipelines.length) continue;
          su.writeUniforms(this.warnOnce), su.bind();
          const Uu = 64 * su.frameIndex;
          su.count = uu.ring.drawCount(), aq(uu, this.frameData, this.frameBits, Uu), ju = Math.max(ju, Uu + 64), this.draws.push(su)
        }
        ju > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, ju)
      }
      draw(uu) {
        let Eu = 0,
          ju = null;
        for (const su of this.draws) {
          uu.setBindGroup(1, su.bindGroup), uu.setBindGroup(2, this.frameBindGroup, [256 * su.frameIndex]);
          for (const Uu of su.pipelines) Uu !== ju && (uu.setPipeline(Uu), ju = Uu), uu.draw(4, su.count), Eu++
        }
        return Eu
      }
      bindTarget(uu) {
        this.target = uu;
        const Eu = `${uu._colorFormat}|${uu._depthStencilFormat}|${uu._depthCompare}|${uu._sampleCount}`;
        let ju = this.pipelines.get(Eu);
        ju || (ju = new Map, this.pipelines.set(Eu, ju)), this.targetPipelines = ju
      }
      pipelineFor(uu) {
        var Eu;
        const ju = this.targetPipelines,
          su = ju.get(uu);
        if (void 0 !== su) return su;
        ju.set(uu, null);
        const Uu = this.target,
          Zu = uu === xu.e,
          Xu = null !== (Eu = Uu._depthCompare) && void 0 !== Eu ? Eu : JE,
          {
            device: lu
          } = this;
        return lu.createRenderPipelineAsync({
          label: `particles-${uu}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: gE({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Zu ? 1 : 0
            }
          }, Uu, ZE((0, xu.j)(uu))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Uu._depthStencilFormat ? {
            format: Uu._depthStencilFormat,
            depthCompare: Xu,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Uu._sampleCount
          }
        }).then((Eu => {
          ju.set(uu, Eu)
        }), (Eu => {
          ju.set(uu, !1), console.error("Lite particle pipeline failed", Eu), CE(lu, "particles", `blend-${uu}`, Eu)
        })), null
      }
      allocateFrameIndex() {
        const uu = this.freeFrameIndices.pop();
        if (void 0 !== uu) return uu;
        const Eu = this.nextFrameIndex++;
        if (64 * (Eu + 1) > this.frameData.length) {
          const uu = new Float32Array(2 * this.frameData.length);
          uu.set(this.frameData), this.frameData = uu, this.frameBits = new Uint32Array(uu.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Eu
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
    class vq {
      constructor(uu, Eu, ju, su, Uu) {
        this.lite = uu, this.canvas = Eu, this.info = ju, this.resources = Uu, this.bsu = !1, this.needPOTTextures = !1, this.W9 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Eu.width, this.renderHeight = Eu.height, this.caps = {
          maxTextureSize: su.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: su.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(uu) {
        this.lite = uu, (0, Iu.q)(uu, this.renderWidth, this.renderHeight)
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
      setSize(uu, Eu) {
        if (this.renderWidth === uu && this.renderHeight === Eu) return !1;
        const ju = this.renderWidth,
          su = this.renderHeight;
        this.renderWidth = uu, this.renderHeight = Eu;
        const Uu = this.lite;
        if (null === Uu) return !0;
        try {
          (0, Iu.q)(Uu, uu, Eu)
        } catch (Zu) {
          if (Zu instanceof DOMException && "InvalidStateError" === Zu.name) {
            this.renderWidth = ju, this.renderHeight = su;
            try {
              (0, Iu.q)(Uu, ju, su)
            } catch {
              this.canvas.width = ju, this.canvas.height = su
            }
            return console.warn("WebGPU could not allocate render targets for resize", uu, Eu, Zu.message), !1
          }
          throw Zu
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
      wG() {
        const uu = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : uu - this.lastFrameTime, this.lastFrameTime = uu
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(uu, Eu) {
        const ju = document.createElement("canvas");
        return ju.width = uu, ju.height = Eu, ju
      }
      E_(uu, Eu) {
        var ju;
        return null !== (ju = this.resources.E_.get(uu)) && void 0 !== ju ? ju : new cE(this.resources, uu, Eu)
      }
      atlasArrays(uu) {
        return this.resources.atlasArrays(uu)
      }
    }
    class Kq {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(uu) {
        this.fov = uu.fov, this.nearPlane = uu.near, this.farPlane = uu.far;
        const Eu = uu.worldMatrix;
        for (let ju = 0; ju < 16; ju++)
          if (this.worldMatrix[ju] !== Eu[ju]) return this.worldMatrix.set(Eu), void this.worldMatrixVersion++
      }
    }
    class Vq {
      constructor(uu, Eu, ju, su) {
        this.canvas = Eu, this.options = ju, this.TEu = void 0, this.backendName = "WebGPU (Lite)", this.m_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Kq, this.lastFrameTime = 0, this.engine = void 0, this.vY = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.tO = null, this.firstTerrain = null, this.trialFrames = 0, this.install(uu);
        const {
          resources: Uu,
          meshes: Zu
        } = uu;
        this.resources = Uu, this.particles = uu.particles, this.TEu = new vq(uu.engine, Eu, su, uu.device.limits, Uu), (0, Pu.E)({
          dl: uu => {
            vu(uu) && Uu.textureSlot(uu)
          },
          loaded: uu => vu(uu) ? Uu.textureLoaded(uu) : null,
          canvasUpdated: (uu, Eu, ju) => {
            vu(uu) && Uu.canvasUpdated(uu, Eu, ju)
          }
        }), this.m_ = Zu.m_, this.modelMeshes = Zu.modelMeshes
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
      install(uu) {
        this.engine = uu.engine, this.vY = uu.vY, this.sceneTask = uu.sceneTask, this.device = uu.device, this.liteTerrain = uu.terrain, this.meshes = uu.meshes, this.sunShadow = uu.sunShadow;
        const Eu = new Lu(uu.device.lost);
        this.refusals = Eu, Eu.deviceLost.then((() => {
          var Eu;
          Eu = uu.device, qE.add(Eu)
        })), uu.vY.camera = this.camera
      }
      async rebuild() {
        var uu, Eu, ju, su, Uu;
        const Zu = await Wq();
        this.halted = !0, this.liteTerrain.retire(), null === (uu = this.sunShadow) || void 0 === uu || uu.dispose(), this.TEu.detach();
        try {
          (0, Fu.e)(this.engine)
        } catch (Cu) {
          console.warn("Lite: disposing the lost device's engine threw", Cu)
        }
        const Xu = {
            width: this.TEu.renderWidth,
            height: this.TEu.renderHeight
          },
          lu = await Sq(this.canvas, this.options, Xu, Zu),
          qu = eE(lu),
          fu = Iq(qu);
        try {
          this.resources.rebind(lu, qu), this.particles.rebind(qu), this.m_.dropSteady();
          const uu = {
              resources: this.resources,
              particles: this.particles,
              m_: this.m_,
              modelMeshes: this.modelMeshes
            },
            Eu = await Fq(lu, qu, this.options, uu),
            ju = fu();
          if (null !== ju) throw new Error(`WebGPU device lost while Lite was rebuilding (${ju.reason}): ${ju.message}`);
          const {
            r: su,
            g: Uu,
            b: Zu
          } = this.vY.clearColor;
          this.install(Eu), this.setClearColour(su, Uu, Zu), this.TEu.rebind(lu)
        } catch (Cu) {
          throw qu.destroy(), Cu
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (Eu = this.tO) || void 0 === Eu || Eu.resize(), null === (ju = this.tO) || void 0 === ju || null === (su = ju.Uc) || void 0 === su || null === (Uu = su.mG) || void 0 === Uu || Uu.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((uu, Eu) => {
          this.firstTerrain = {
            drawn: uu,
            failed: Eu
          }
        }))
      }
      get castsEntitySunShadows() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.sunShadow) || void 0 === Eu ? void 0 : Eu.tracesEntities) && void 0 !== uu && uu
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(uu) {
        this.tO = uu, this.modelMeshes.attach(uu.model, uu.sceneMirror);
        const Eu = uu.vY;
        this.setClearColour(Eu.clearColor.r, Eu.clearColor.g, Eu.clearColor.b), Eu.draw = () => {
          this.drawFrame(uu, Eu)
        }
      }
      render(uu) {
        if (!this.refusals.lost && !this.halted) {
          try {
            this.TEu.wG(), uu.vY.render()
          } catch (Eu) {
            throw this.refusals.frameFailed(Eu), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(Eu), this.firstTerrain = null), Eu
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var uu, Eu, ju, su;
        const Uu = [...this.particles.describePendingWork(), ...null !== (uu = null === (Eu = this.sunShadow) || void 0 === Eu ? void 0 : Eu.describePendingWork()) && void 0 !== uu ? uu : []],
          Zu = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (ju = this.terrain.sceneDepth) && void 0 !== ju && ju.compiling ? 1 : 0) + (null !== (su = this.terrain.shadowMask) && void 0 !== su && su.compiling ? 1 : 0);
        Zu > 0 && Uu.push(`${Zu} Lite pipelines compiling`);
        const Xu = this.terrain.buffersAwaitingVerdict;
        Xu > 0 && Uu.push(`${Xu} Lite terrain buffers awaiting their out-of-memory verdict`);
        const lu = this.resources.texturesLoading;
        return lu > 0 && Uu.push(`${lu} Lite textures loading`), Uu
      }
      prepareTexture(uu) {
        return null !== this.resources.boundTexture(uu) || this.resources.textureFailed(uu)
      }
      drawFrame(uu, Eu) {
        var ju, su, Uu, Zu, Xu, lu;
        const qu = gl(uu);
        this.camera.copyFromView(qu), this.setClearColour(qu.clearColour[0], qu.clearColour[1], qu.clearColour[2]), null === (ju = this.sunShadow) || void 0 === ju || ju.prepare(uu.Uc, qu.eye, null !== (su = uu.Uc.AN) && void 0 !== su ? su : null), this.terrain.prepare(uu, qu), null === (Uu = this.terrain.sceneDepth) || void 0 === Uu || Uu.setPlanes(qu.near, qu.far), null === (Zu = this.terrain.shadowMask) || void 0 === Zu || Zu.prepare(qu), sl(this.sceneTask), this.meshes.prepare(Eu, qu, uu.model.earthSky, null !== (Xu = uu.Uc.AN) && void 0 !== Xu ? Xu : null), this.particles.prepare(qu);
        const fu = performance.now();
        this.resources.flushUploads(), null === (lu = this.sunShadow) || void 0 === lu || lu.traceEntities(this.meshes);
        try {
          (0, Iu.m)(this.engine, this.lastFrameTime > 0 ? fu - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = fu, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(fu), this.firstTerrain = null)
      }
      setClearColour(uu, Eu, ju) {
        const su = this.vY.clearColor;
        su.r = uu, su.g = Eu, su.b = ju, su.a = 1
      }
    }

    function rq(uu) {
      const Eu = {};
      for (const ju in uu.limits) {
        const su = uu.limits[ju];
        "number" === typeof su && (Eu[ju] = su)
      }
      return Eu
    }
    const Qq = "WebGPU device lost while Lite was starting";
    async function iq(uu, Eu) {
      const ju = await Wq(),
        su = ju.info,
        Uu = {
          vendor: (null === su || void 0 === su ? void 0 : su.vendor) || "unknown vendor",
          renderer: (null === su || void 0 === su ? void 0 : su.architecture) || "unknown renderer",
          version: (null === su || void 0 === su ? void 0 : su.description) || "unknown version"
        };
      uu.style.background = "black";
      const Zu = await Sq(uu, Eu, Eu.bufferSize, ju),
        Xu = eE(Zu),
        lu = Iq(Xu);
      try {
        const ju = new Vq(await Fq(Zu, Xu, Eu, null), uu, Eu, Uu),
          su = lu();
        if (null !== su) {
          const {
            reason: uu,
            message: Eu
          } = su;
          throw Object.assign(new Error(`${Qq} (${uu}): ${Eu}`), {
            fallbackReason: Qq
          })
        }
        return ju
      } catch (qu) {
        throw Xu.destroy(), null === lu() ? qu : (0, jl.h)(qu, "device")
      }
    }
    async function Wq() {
      const uu = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!uu) throw (0, jl.h)(new Error("No WebGPU adapter"), "no_adapter");
      return uu
    }
    async function Sq(uu, Eu, ju, su) {
      let Uu;
      try {
        Uu = await (0, Iu.g)(uu, {
          msaaSamples: Eu.Jju ? 4 : 1,
          requiredLimits: rq(su),
          alphaMode: "premultiplied"
        })
      } catch (Xu) {
        throw (0, jl.h)(Xu, "#47" === (null === (Zu = Xu) || void 0 === Zu ? void 0 : Zu.message) ? "no_adapter" : "device")
      }
      var Zu;
      return null !== ju && (0, Iu.q)(Uu, ju.width, ju.height), Uu
    }

    function Iq(uu) {
      let Eu = null;
      return uu.lost.then((uu => {
        Eu = uu, console.error(`WebGPU device lost (${uu.reason}): ${uu.message}`)
      })), () => Eu
    }
    async function Fq(uu, Eu, ju, su) {
      var Uu, Zu;
      let {
        sceneDepth: Xu,
        sunShadow: lu
      } = ju;
      const qu = (0, Bu.d)(uu),
        fu = null !== (Uu = null === su || void 0 === su ? void 0 : su.resources) && void 0 !== Uu ? Uu : new RX(uu, Eu),
        Cu = new Eq(Eu),
        bu = new rX(Eu, fu, (uu => function(uu, Eu) {
          for (const su of GE(uu)) {
            var ju;
            if (su._targetSignature === Eu) return null !== (ju = su._sceneBG) && void 0 !== ju ? ju : null
          }
          return null
        }(qu, uu)), null === su || void 0 === su ? void 0 : su.m_, null === su || void 0 === su ? void 0 : su.modelMeshes),
        cu = null !== (Zu = null === su || void 0 === su ? void 0 : su.particles) && void 0 !== Zu ? Zu : new mq(Eu, fu);
      for (const Yu of function(uu, Eu, ju) {
          return [Eu.opaqueRenderable, uu.opaqueRenderable, uu.skyLastRenderable, ju.renderable, Eu.transparentRenderable, uu.transparentRenderable, uu.frontRenderable]
        }(bu, Cu, cu)) ME(qu, Yu);
      const Nu = function(uu) {
        for (const Eu of GE(uu))
          if ("vY" === Eu.name) return Eu;
        throw new Error("Lite: the scene has no render task named scene")
      }(qu);
      Xu && Cu.installSceneDepth(Nu, uu);
      const Ou = lu ? new Mq(Eu, lu.entities) : null;
      return Cu.sunShadow = Ou, Ou && null !== lu && void 0 !== lu && lu.entities && (Cu.shadowMask = new Vl(Eu, Nu, uu, Cu)), bu.sunShadow = Ou, await (0, Bu.f)(qu), {
        engine: uu,
        vY: qu,
        sceneTask: Nu,
        device: Eu,
        terrain: Cu,
        meshes: bu,
        sunShadow: Ou,
        resources: fu,
        particles: cu
      }
    }
  },
  40952: (uu, Eu, ju) => {
    ju.d(Eu, {
      D: () => Ou,
      b: () => Uu,
      f: () => su,
      g: () => cu,
      i: () => Cu,
      k: () => hu,
      n: () => Zu,
      o: () => lu,
      q: () => qu,
      t: () => Xu,
      w: () => Yu,
      z: () => Nu
    });
    const su = 3,
      Uu = 0,
      Zu = 1,
      Xu = 2,
      lu = {
        uniform: 3,
        ac: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qu = 10,
      fu = "BloxdPackInputs",
      Cu = "bloxdPackInputs",
      bu = [{
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
      cu = 80;

    function Nu() {
      const uu = bu.map((uu => {
        let {
          name: Eu,
          type: ju
        } = uu;
        return `    ${Eu}: ${ju},\n`
      })).join("");
      return `struct ${fu} {\n${uu}}\n@group(${su}) @binding(${Uu}) var<uniform> ${Cu}: ${fu};\n`
    }

    function Ou(uu, Eu) {
      const ju = new DataView(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, cu),
        [su, Uu, Zu, Xu, lu, qu] = bu;
      ju.setFloat32(su.offset, Eu.seconds, !0), ju.setUint32(Uu.offset, Eu.lit ? 1 : 0, !0);
      for (let fu = 0; fu < 3; fu++) ju.setInt32(Zu.offset + 4 * fu, Eu.renderOffset[fu], !0), ju.setFloat32(Xu.offset + 4 * fu, Eu.fuu[fu], !0), ju.setFloat32(lu.offset + 4 * fu, Eu.eyePosition[fu], !0), ju.setFloat32(qu.offset + 4 * fu, Eu.shadowDirection[fu], !0)
    }

    function Yu(uu) {
      const Eu = new Uint32Array(Math.max(1, uu.length));
      return uu.forEach(((uu, ju) => {
        let {
          id: su,
          rotation: Uu
        } = uu;
        Eu[ju] = 65535 & su | (3 & Uu) << 16
      })), Eu
    }
    const hu = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);