export const id = 308;
export const ids = [308];
export const modules = {
  53794: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Fb,
      f: () => gb,
      i: () => Vb,
      m: () => Lb
    });
    var eb = Mb(38401),
      Hb = Mb(40004),
      pb = Mb(39998);

    function Vb(bb, wb, Mb, eb) {
      const Hb = pb.v;
      wb.fill(0), bb.gravity.toArray(wb, Hb.gravity), bb.colorDead.toArray(wb, Hb.colorDead), Mb[Hb.ramp] = bb.useRampGradients ? 1 : 0;
      const Vb = bb.getColorGradients(),
        gb = Ub(bb, Vb, "colour", eb);
      Mb[Hb.colorCount] = gb;
      for (let pb = 0; pb < gb; pb++) {
        var lb;
        const bb = Vb[tb(Vb, pb)];
        wb[Hb.colorPositions + pb] = bb.gradient, bb.color1.toArray(wb, Hb.color1 + 4 * pb), (null !== (lb = bb.color2) && void 0 !== lb ? lb : bb.color1).toArray(wb, Hb.color2 + 4 * pb)
      }
      const Lb = bb.getVelocityGradients(),
        Ib = Ub(bb, Lb, "UF", eb);
      Mb[Hb.velocityCount] = Ib;
      for (let pb = 0; pb < Ib; pb++) sb(wb, Hb.UF + 4 * pb, Lb[tb(Lb, pb)]);
      const Ob = bb.useRampGradients ? bb.getColorRemapGradients() : null,
        Cb = Ub(bb, Ob, "colour remap", eb);
      Mb[Hb.remapCount] = Cb;
      for (let pb = 0; pb < Cb; pb++) sb(wb, Hb.remap + 4 * pb, Ob[tb(Ob, pb)])
    }

    function gb() {
      return {
        key: [],
        texels: new Uint8Array(4 * pb.k)
      }
    }
    const lb = [];

    function Lb(bb, wb) {
      return Ib(bb, lb), !Bb(lb, wb.key) && (wb.key.length = 0, wb.key.push(...lb), wb.key.length > 0 && function(bb, wb) {
        for (let Mb = 0; Mb < pb.k; Mb++) Hb.j.GetCurrentGradient(Mb / pb.k, bb, ((bb, wb, Mb) => {
          eb.Color3.LerpToRef(bb.color, wb.color, Mb, Ob)
        })), wb[4 * Mb] = 255 * Ob.r, wb[4 * Mb + 1] = 255 * Ob.g, wb[4 * Mb + 2] = 255 * Ob.b, wb[4 * Mb + 3] = 255
      }(bb.getRampGradients(), wb.texels), !0)
    }

    function Ib(bb, wb) {
      wb.length = 0;
      const Mb = bb.useRampGradients ? bb.getRampGradients() : null;
      if (null !== Mb && void 0 !== Mb && Mb.length) {
        wb.push(Mb.length);
        for (const bb of Mb) wb.push(bb.gradient, bb.color.r, bb.color.g, bb.color.b)
      }
    }
    const Ob = new eb.Color3;

    function Ub(bb, wb, Mb, eb) {
      return wb ? wb.length > pb.d ? (eb(`particleStops:${Mb}`, `GPU particles use the first 2 and last ${pb.d-2} of more than ${pb.d} ${Mb} gradient stops (${bb.name})`), pb.d) : wb.length : 0
    }

    function tb(bb, wb) {
      return wb < 2 || bb.length <= pb.d ? wb : bb.length - pb.d + wb
    }
    const Cb = new Float32Array(pb.r),
      Eb = new Uint32Array(Cb.buffer);

    function Fb(bb, wb, Mb) {
      return Vb(bb, Cb, Eb, Mb), wb && Bb(Eb, wb) ? null : Eb.slice()
    }

    function Bb(bb, wb) {
      if (bb.length !== wb.length) return !1;
      for (let Mb = 0; Mb < bb.length; Mb++)
        if (bb[Mb] !== wb[Mb]) return !1;
      return !0
    }

    function sb(bb, wb, Mb) {
      var eb;
      bb[wb] = Mb.gradient, bb[wb + 1] = Mb.factor1, bb[wb + 2] = null !== (eb = Mb.factor2) && void 0 !== eb ? eb : Mb.factor1
    }
  },
  42829: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      const eb = wb * wb * 4,
        Hb = bb[0].layers,
        pb = Hb * (bb.length - 1) + bb[bb.length - 1].layers,
        Vb = new Uint8Array(pb * eb);
      bb.forEach(((wb, Mb) => {
        const pb = Mb + 1 < bb.length ? Math.min(wb.layers, Hb) : wb.layers;
        Vb.set(new Uint8Array(wb.pixels.buffer, wb.pixels.byteOffset, pb * eb), Mb * Hb * eb)
      }));
      const gb = Math.max(1, Math.min(pb, Mb || pb));
      if (gb === pb) return [{
        pixels: Vb,
        layers: pb
      }];
      const lb = [];
      for (let Lb = 0; Lb < pb; Lb += gb) {
        const bb = Math.min(pb, Lb + gb);
        lb.push({
          pixels: Vb.slice(Lb * eb, bb * eb),
          layers: bb - Lb
        })
      }
      return lb
    }
    Mb.d(wb, {
      b: () => eb,
      e: () => pb
    });
    const Hb = new WeakMap;

    function pb(bb, wb, Mb) {
      var eb, pb;
      const Vb = null !== (eb = Hb.get(bb)) && void 0 !== eb ? eb : new Map;
      Hb.set(bb, Vb);
      const gb = null !== (pb = Vb.get(wb[0])) && void 0 !== pb ? pb : [];
      Vb.set(wb[0], gb);
      const lb = gb.find((bb => bb.urls.length === wb.length && bb.urls.every(((bb, Mb) => bb === wb[Mb]))));
      if (lb) return lb.built;
      const Lb = {
        urls: [...wb],
        built: Mb()
      };
      return gb.push(Lb), Lb.built.catch((() => {
        gb.splice(gb.indexOf(Lb), 1)
      })), Lb.built
    }
  },
  53790: (bb, wb, Mb) => {
    function eb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const wb = new Set;
      return (Mb, eb) => {
        wb.has(Mb) || (wb.add(Mb), console.warn(bb + eb))
      }
    }
    Mb.d(wb, {
      d: () => eb
    })
  },
  53857: (bb, wb, Mb) => {
    Mb.d(wb, {
      createLiteRendererAsync: () => Nl,
      liteBabylonBackend: () => vb,
      setPipelineFailureHook: () => gw
    });
    var eb = Mb(38401),
      Hb = Mb(38743),
      pb = Mb(39139),
      Vb = Mb(38462),
      gb = Mb(39153);
    class lb extends gb.d {
      constructor() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        super(...wb), this.color = new eb.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: wb[0].RJ().getUniqueId(),
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
          needAlphaBlendingForMesh: bb => bb.visibility < 1 || bb.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Lb = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Ib = bb => 1 << Lb.indexOf(bb),
      Ob = Ib("VERTEXCOLOR"),
      Ub = Ib("INSTANCES"),
      tb = Ib("THIN_INSTANCES"),
      Cb = Ib("INSTANCESCOLOR"),
      Eb = Ib("FOG"),
      Fb = Ib("LITE_FRONT_LAYER");

    function Bb(bb, wb, Mb, eb) {
      let Hb = 0;
      return bb.isVerticesDataPresent("color") && (Hb |= Ob), "none" !== wb && (Hb |= Ub), "thin" === wb && (Hb |= tb, bb.isVerticesDataPresent("instanceColor") && (Hb |= Cb)), eb.fogEnabled && bb.applyFog && 0 !== eb.fogMode && (Hb |= Eb), Mb >= 1 && (Hb |= Fb), Hb
    }

    function sb(bb, wb) {
      bb.updateColor4("color", wb.color, wb.alpha)
    }
    var mb = Mb(39072),
      hb = Mb(38547),
      zb = Mb(38473),
      Xb = Mb(38419),
      xb = Mb(39056),
      jb = Mb(39068),
      Kb = Mb(38449),
      rb = Mb(38458),
      Rb = Mb(38468);
    const Db = Xb.b.GLSL;
    class cb {
      constructor(bb, wb) {
        this.name = bb, this.JE = wb, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.vJ = {
          addOnce: bb => {
            this.disposers.push(bb)
          }
        }, this.uniqueId = wb.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      RJ() {
        return this.JE
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
      needAlphaBlendingForMesh(bb) {
        return (0, Kb.O)(this.model, bb.visibility, bb.hasVertexAlpha)
      }
      needAlphaTestingForMesh(bb) {
        return (0, Kb.R)(this.model, bb.visibility, bb.hasVertexAlpha)
      }
      dispose() {
        (0, hb.j)(this);
        for (const bb of this.disposers.splice(0)) bb()
      }
      get model() {
        return (0, Kb.ab)(this)
      }
    }
    const Yb = new WeakSet;

    function Zb(bb) {
      return Yb.has(bb)
    }

    function fb(bb) {
      Yb.add(bb)
    }
    const Ab = {
      create: (bb, wb) => ((0, zb.o)(bb, new cb(bb.name, wb)), rb.e.defines()),
      write: () => {},
      addFeature: (bb, wb) => {
        const Mb = bb.mirror;
        wb.feature === jb.g && wb.state.dirLightCount > 0 && (bb.disableLighting = !0, (0, Kb.Z)(bb)), "BLOXD_LIGHTING" in wb.defines && (0, hb.g)(Mb), wb.feature === xb.i && ((0, mb.g)(wb.state, Db), function(bb, wb) {
          const Mb = bb.RJ().DC();
          setTimeout((() => {
            Mb.atlasArrays(wb.sources).then((Mb => {
              (0, mb.b)(bb, wb, Mb.map((bb => ({
                atlas: bb,
                layers: bb.layers
              }))), Mb[0].layerWidth, Db)
            })).catch((bb => {
              console.error("Failed to build the atlas's texture arrays", bb)
            }))
          }))
        }(Mb, wb.state))
      },
      texture: (bb, wb, Mb) => {
        let {
          data: eb,
          sets: Hb
        } = Mb;
        var pb;
        (fb(bb), eb) && (bb.uvSet = null !== (pb = null === Hb || void 0 === Hb ? void 0 : Hb.coordinatesIndex) && void 0 !== pb ? pb : 0, (0, zb.fb)(bb.matrix, null !== Hb && void 0 !== Hb ? Hb : {}))
      },
      cube: fb,
      canvas: (bb, wb, Mb) => {
        let {
          width: eb,
          height: Hb,
          mipmaps: pb,
          samplingMode: Vb = Rb.j.trilinear,
          hasAlpha: gb = !1,
          wrap: lb = Rb.c.clamp
        } = Mb;
        const Lb = bb.DC().createCanvas(eb, Hb),
          Ib = new Rb.n("2d", {
            kind: "canvas",
            width: eb,
            height: Hb,
            canvas: Lb
          }, {
            samplingMode: Vb,
            wrapU: lb,
            wrapV: lb,
            noMipmap: !pb,
            invertY: !0
          });
        return Ib.hasAlpha = gb, fb(Ib), Ib
      }
    };
    var Wb = Mb(38563),
      Jb = Mb(38318);
    class Sb {
      constructor(bb, wb, Mb) {
        this.engine = bb, this.clearColor = wb, this.ambientColor = Mb, this.onBeforeRenderObservable = new Jb.b, this.onBeforeCameraRenderObservable = new Jb.b, this.onAfterRenderObservable = new Jb.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.kR = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      DC() {
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
      addPendingData(bb) {
        this.pending.push(bb)
      }
      removePendingData(bb) {
        const wb = this.pending.indexOf(bb); - 1 !== wb && this.pending.splice(wb, 1)
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

    function Nb() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const vb = {
      ueb: Nb,
      Jpb: (bb, wb) => {
        const Mb = new Sb(bb.engine, eb.c.FromArray(wb.clearColor), eb.Color3.FromArray(wb.ambientColor));
        (0, Vb.b)(Ab, Mb), bb.JE = Mb,
          function(bb, wb) {
            const Mb = Object.assign((0, Wb.f)(bb, "camera"), {
              layerMask: 268435455
            });
            bb.model.nodes.setWorldSource(Mb.row, bb.model.view.worldMatrix), bb.camera = wb.activeCamera = Mb
          }(bb, Mb), (0, Hb.i)(bb, ((bb, wb, Mb) => (0, pb.k)(bb, wb, Mb, gb.d)))
      },
      Zpb: () => {},
      setBabylonFog: () => {},
      Npb: Nb,
      qpb: () => {},
      linesFromArrays: (bb, wb, Mb) => (0, pb.k)(bb, wb, Mb, lb),
      SE: () => {},
      Gpb: Nb
    };
    var Qb = Mb(53922),
      Gb = Mb(53933),
      qb = Mb(53941);
    class ab {
      constructor(bb) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const wb = new Promise((bb => {
          this.refused = bb
        }));
        this.deviceLost = Promise.race([bb, wb]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(bb) {
        (function(bb) {
          const {
            name: wb,
            message: Mb
          } = null !== bb && void 0 !== bb ? bb : {};
          return "InvalidStateError" === wb && "string" === typeof Mb && Mb.startsWith("GPUDevice.")
        })(bb) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: bb.message,
          framesRefused: !0
        }))
      }
    }
    var ib = Mb(42829),
      ub = Mb(40009);

    function db(bb) {
      return Math.max(4, 4 * Math.ceil(bb / 4))
    }

    function Pb(bb, wb, Mb, eb) {
      const Hb = bb.createBuffer({
        label: eb,
        size: db(wb.byteLength),
        usage: Mb,
        mappedAtCreation: !0
      });
      return new Uint8Array(Hb.getMappedRange(), 0, wb.byteLength).set(new Uint8Array(wb.buffer, wb.byteOffset, wb.byteLength)), Hb.unmap(), Hb
    }

    function nb(bb, wb) {
      return Math.floor(Math.log2(Math.max(bb, wb))) + 1
    }

    function yb(bb, wb, Mb, eb, Hb, pb) {
      const Vb = bb.createTexture({
          label: pb,
          size: {
            width: Mb,
            height: eb,
            depthOrArrayLayers: Hb
          },
          format: "rgba8unorm",
          mipLevelCount: nb(Mb, eb),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        gb = (wb, Mb, eb, pb) => {
          bb.queue.writeTexture({
            texture: Vb,
            mipLevel: Mb
          }, wb, {
            bytesPerRow: 4 * eb,
            rowsPerImage: pb
          }, {
            width: eb,
            height: pb,
            depthOrArrayLayers: Hb
          })
        };
      gb(wb, 0, Mb, eb);
      let lb = 1;
      for (const Lb of function*(bb, wb, Mb, eb) {
          let Hb = bb,
            pb = wb,
            Vb = Mb;
          for (; pb > 1 || Vb > 1;) {
            const bb = Math.max(1, pb >> 1),
              wb = Math.max(1, Vb >> 1),
              Mb = new Uint8Array(bb * wb * eb * 4),
              gb = 4 * pb;
            let lb = 0;
            for (let Lb = 0; Lb < eb; Lb++) {
              const eb = Lb * gb * Vb;
              for (let Lb = 0; Lb < wb; Lb++) {
                const wb = eb + Math.min(2 * Lb, Vb - 1) * gb,
                  Ib = eb + Math.min(2 * Lb + 1, Vb - 1) * gb;
                for (let eb = 0; eb < bb; eb++) {
                  const bb = 4 * Math.min(2 * eb, pb - 1),
                    Vb = 4 * Math.min(2 * eb + 1, pb - 1);
                  for (let eb = 0; eb < 4; eb++) Mb[lb++] = Hb[wb + bb + eb] + Hb[wb + Vb + eb] + Hb[Ib + bb + eb] + Hb[Ib + Vb + eb] + 2 >> 2
                }
              }
            }
            yield {
              data: Mb,
              width: bb,
              height: wb
            }, Hb = Mb, pb = bb, Vb = wb
          }
        }(wb, Mb, eb, Hb)) gb(Lb.data, lb++, Lb.width, Lb.height);
      return Vb
    }
    const ob = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function Tb(bb) {
      if (bb.startsWith("data:")) {
        const wb = bb.search(/[;,]/);
        return `data:${wb>5?bb.slice(5,wb):""} URL of ${bb.length} characters`
      }
      return bb.length > 80 ? `${bb.slice(0,80)}...` : bb
    }
    async function kb(bb) {
      const wb = await fetch(bb);
      if (!wb.ok) throw new Error(`${Tb(bb)}: ${wb.status} ${wb.statusText}`);
      return createImageBitmap(await wb.blob(), ob)
    }
    async function bw(bb) {
      const wb = await kb(bb),
        Mb = new OffscreenCanvas(wb.width, wb.height),
        eb = Mb.getContext("2d", {
          willReadFrequently: !0
        });
      if (!eb) throw new Error("No 2D context to decode an image");
      eb.drawImage(wb, 0, 0);
      const {
        data: Hb
      } = eb.getImageData(0, 0, wb.width, wb.height);
      return wb.close(), {
        pixels: new Uint8Array(Hb.buffer, Hb.byteOffset, Hb.byteLength),
        width: Mb.width,
        height: Mb.height
      }
    }

    function ww(bb, wb) {
      return (0, ib.e)(bb, wb.urls, (async () => {
        const Mb = await Promise.all(wb.urls.map((async (bb, Mb) => {
            var eb, Hb, pb, Vb, gb;
            return null !== (Vb = null !== (Hb = null === (pb = wb.pixels) || void 0 === pb ? void 0 : pb[Mb]) && void 0 !== Hb ? Hb : null, gb = wb.layerWidth, eb = null !== Vb && void 0 !== Vb && Vb.byteLength && gb && Vb.byteLength % (gb * gb * 4) === 0 ? {
              pixels: Vb,
              layerWidth: gb,
              layers: Vb.byteLength / (gb * gb * 4)
            } : null) && void 0 !== eb ? eb : await async function(bb) {
              const {
                pixels: wb,
                width: Mb
              } = await bw(bb);
              return {
                pixels: wb,
                layerWidth: Mb,
                layers: wb.byteLength / (Mb * Mb * 4)
              }
            }(bb)
          }))),
          eb = Mb[0].layerWidth;
        return (0, ib.b)(Mb, eb, bb.limits.maxTextureArrayLayers).map(((Mb, Hb) => {
          let {
            pixels: pb,
            layers: Vb
          } = Mb;
          return {
            texture: yb(bb, pb, eb, eb, Vb, `atlas-${Hb}-${Tb(wb.urls[0])}`),
            layerWidth: eb,
            layers: Vb
          }
        }))
      }))
    }
    const Mw = new Map([
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
      ew = new Map([
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

    function Hw(bb) {
      for (const wb of (0, ub.l)(bb))
        if (!ew.has((0, ub.i)(wb))) return !1;
      return !0
    }

    function pw(bb) {
      const wb = ew.get(bb);
      if (!wb) return null;
      const [Mb, eb, Hb] = wb;
      return {
        srcFactor: Mw.get(Mb),
        dstFactor: Mw.get(eb),
        operation: Hb
      }
    }
    let Vw = null;

    function gw(bb) {
      Vw = bb
    }
    const lw = new WeakSet;

    function Lw(bb) {
      return lw.has(bb)
    }

    function Iw(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var pb;
      Lw(bb) || (null === (pb = Vw) || void 0 === pb || pb(wb, Mb, eb, Hb))
    }
    class Ow {
      constructor(bb) {
        this.resources = bb, this.matrixKey = {
          qO: 0
        }, this.attributesKey = {
          qO: 0
        }, this.inputs = Object.create(null);
        for (let wb = 0; wb < 4; wb++) this.inputs[`world${wb}`] = new Cw(this.matrixKey, 16 * wb, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(bb, wb) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, bb, !0), wb && this.resources.vertexBufferCreated(this.attributesKey, wb, !0)
      }
    }
    class Uw extends Ow {
      constructor(bb, wb, Mb) {
        super(bb), this.mesh = wb, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const eb = this.inputs;
        let Hb = 0;
        for (const {
            size: Vb
          }
          of Mb) Hb += Vb;
        for (const {
            name: Vb,
            offset: gb,
            size: lb,
            type: Lb
          }
          of Mb) eb[Vb] = new Cw(this.attributesKey, 4 * gb, 4 * Hb, lb, !0, Lb);
        this.rowStride = Hb, bb.Cbb.set(wb, this);
        const pb = wb.isVerticesDataPresent;
        wb.isVerticesDataPresent = (bb, Mb) => bb in eb || pb.call(wb, bb, Mb)
      }
      attach(bb, wb) {
        this.matrices = bb, this.attributes = wb, this.bind(bb, wb), this.mirror(bb, bb.length, bb.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      bwb(bb) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, bb ? 64 * bb : void 0)
      }
      wwb() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(bb, wb) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * bb, 16 * wb)
      }
      attributeRows(bb, wb) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, bb * this.rowStride, wb * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(bb, wb, Mb) {
        const eb = this.mesh._thinInstanceDataStorage;
        eb.matrixData = bb, eb.matrixBufferSize = wb, eb.worldMatrices = null, eb.instancesCount = Mb
      }
    }
    class tw extends Ow {
      constructor(bb, wb, Mb) {
        var eb, Hb, pb, Vb;
        super(bb), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.interleavedKinds) && void 0 !== eb ? eb : null, this.offsets = null !== (Hb = null === Mb || void 0 === Mb ? void 0 : Mb.interleavedOffsets) && void 0 !== Hb ? Hb : [], this.rowStride = null !== (pb = null === Mb || void 0 === Mb ? void 0 : Mb.interleavedRowStride) && void 0 !== pb ? pb : 0, null === (Vb = this.layout) || void 0 === Vb || Vb.forEach(((bb, wb) => {
          this.inputs[bb] = new Cw(this.attributesKey, 4 * this.offsets[wb], 4 * this.rowStride, Mb.strides[bb])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), bb.batchUploads.set(wb, this), wb.vJ.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(bb) {
        const wb = this.packedBatch;
        return wb.renderSelf ? 0 === bb ? this.packedSource : wb.instances[bb - 1] : wb.instances[bb]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(bb, wb, Mb, eb) {
        const Hb = (wb.renderSelf ? 1 : 0) + wb.rows.length;
        if (this.frame = eb, this.count = Hb, this.packedSource = bb, this.packedBatch = wb, 0 === Hb) return;
        if (bb.getWorldMatrix(), 16 * Hb > this.matrices.length) {
          let bb = this.matrices.length / 16;
          for (; bb < Hb;) bb *= 2;
          this.matrices = new Float32Array(16 * bb), this.attributes &&= new Float32Array(bb * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let pb = 0;
        wb.renderSelf && this.packRow(pb++, bb, wb.row, Mb);
        for (let Vb = 0; Vb < wb.rows.length; Vb++) this.packRow(pb++, wb.instances[Vb], wb.rows[Vb], Mb);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Hb), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Hb * this.rowStride)
      }
      packRow(bb, wb, Mb, eb) {
        const Hb = this.matrices;
        if (Mb < 0) Hb.set(wb.getWorldMatrix().m, 16 * bb);
        else
          for (let Lb = 0; Lb < 16; Lb++) Hb[16 * bb + Lb] = eb[16 * Mb + Lb];
        const pb = this.attributes;
        if (!pb) return;
        const Vb = wb.hN,
          gb = this.layout;
        for (let Lb = 0; Lb < gb.length; Lb++) {
          var lb;
          const wb = null !== (lb = Vb[gb[Lb]]) && void 0 !== lb ? lb : 0,
            Mb = bb * this.rowStride + this.offsets[Lb];
          wb.toArray ? wb.toArray(pb, Mb) : wb.copyToArray ? wb.copyToArray(pb, Mb) : pb[Mb] = wb
        }
      }
    }
    class Cw {
      constructor(bb, wb, Mb, eb) {
        let Hb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = bb, this.byteOffset = wb, this.byteStride = Mb, this.size = eb, this.instanced = Hb, this.type = pb, this.normalized = Vb
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
    const Ew = "CANVAS_ALPHA_ONE",
      Fw = `override ${Ew}: bool = false;`,
      Bw = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function sw(bb, wb, Mb) {
      var eb;
      let Hb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const pb = null !== (eb = wb._colorFormat) && void 0 !== eb ? eb : "bgra8unorm",
        Vb = Hb ? 15 : 0;
      return Mb ? {
        ...bb,
        targets: [{
          format: pb,
          blend: {
            color: Mb,
            alpha: Bw
          },
          writeMask: Vb
        }]
      } : {
        ...bb,
        constants: {
          ...bb.constants,
          [Ew]: 1
        },
        targets: [{
          format: pb,
          writeMask: Vb
        }]
      }
    }

    function mw(bb, wb) {
      bb._renderables.push(wb)
    }

    function hw(bb) {
      return bb._device
    }

    function zw(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = bb._frameGraph) || void 0 === Mb ? void 0 : Mb._tasks) && void 0 !== wb ? wb : []
    }

    function Xw(bb) {
      return bb._currentEncoder
    }

    function xw(bb) {
      return bb.createBindGroupLayout({
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
    const jw = "greater-equal",
      Kw = 2e5,
      rw = 1e5,
      Rw = new WeakMap;

    function Dw(bb, wb) {
      let Mb = Rw.get(bb);
      if (!Mb) {
        Mb = {
          module: bb.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Rw.set(bb, Mb)
      }
      const eb = `${wb._colorFormat}|${wb._depthStencilFormat}|${wb._sampleCount}`;
      let Hb = Mb.pipelines.get(eb);
      if (!Hb) {
        var pb;
        const {
          module: Vb
        } = Mb;
        Hb = bb.createRenderPipeline({
          label: `placeholder ${eb}`,
          layout: bb.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Vb,
            entryPoint: "v"
          },
          fragment: {
            module: Vb,
            entryPoint: "f",
            targets: [{
              format: null !== (pb = wb._colorFormat) && void 0 !== pb ? pb : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: wb._depthStencilFormat ? {
            format: wb._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: wb._sampleCount
          }
        }), Mb.pipelines.set(eb, Hb)
      }
      return Hb
    }

    function Yw(bb, wb, Mb) {
      const eb = wb.eye,
        Hb = wb.viewMatrix;
      bb[0] = eb[0] + Hb[2] * Mb, bb[1] = eb[1] + Hb[6] * Mb, bb[2] = eb[2] + Hb[10] * Mb
    }
    var Zw = Mb(39207),
      fw = Mb(53790),
      Aw = Mb(38432);
    const Ww = Math.PI,
      Jw = Ww / 1.95,
      Sw = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Nw = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((bb => {
        let [wb, Mb] = bb;
        return .434 * Ww * Math.pow(2 * Ww / wb, 2) * Mb
      }));

    function vw(bb, wb, Mb) {
      const {
        up: eb,
        mieDirectionalG: Hb
      } = bb, pb = 1 - qw(1 - Math.exp(wb[1] / 45e4), 0, 1), Vb = bb.rayleigh - (1 - pb), gb = Math.hypot(wb[0], wb[1], wb[2]), lb = gb > 0 ? 1 / gb : 0, Lb = Mb.sunDir;
      for (let tb = 0; tb < 3; tb++) Lb[tb] = wb[tb] * lb;
      const Ib = Lb[0] * eb[0] + Lb[1] * eb[1] + Lb[2] * eb[2],
        Ob = 1e3 * Math.max(0, 1 - Math.exp(-(Jw - Math.acos(qw(Ib, -1, 1))) / 1.5));
      Mb.sunE = Ob;
      const Ub = .2 * bb.turbidity * 1e-17 * bb.mieCoefficient;
      for (let tb = 0; tb < 3; tb++) {
        const bb = Sw[tb] * Vb,
          wb = Nw[tb] * Ub,
          eb = Ob / (bb + wb);
        Mb.inScatterR[tb] = bb * eb, Mb.inScatterM[tb] = wb * eb, Mb.extinctionBeta[tb] = 8400 * bb + 1250 * wb
      }
      return Mb.sunsetMix = qw(Math.pow(1 - Ib, 5), 0, 1), Mb.sunDiscE = 19e3 * Ob, Mb.mieScale = (1 - Hb * Hb) / (4 * Ww), Mb.mieBase = 1 + Hb * Hb, Mb.mieSlope = 2 * Hb, Mb
    }
    const Qw = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Gw = 1 / function(bb) {
      const {
        A: wb,
        B: Mb,
        C: eb,
        D: Hb,
        E: pb,
        F: Vb
      } = Qw;
      return (bb * (wb * bb + eb * Mb) + Hb * pb) / (bb * (wb * bb + Mb) + Hb * Vb) - pb / Vb
    }(1e3);

    function qw(bb, wb, Mb) {
      return Math.min(Math.max(bb, wb), Mb)
    }
    const aw = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function iw(bb, wb) {
      const Mb = new Map(wb),
        eb = [],
        Hb = [],
        pb = () => 0 === Hb.length || Hb[Hb.length - 1].active;
      let Vb = null;
      const gb = () => {
        const bb = [...Mb].filter((bb => {
            let [, wb] = bb;
            return !0 !== wb
          })),
          wb = bb.map((bb => {
            let [wb] = bb;
            return wb
          })).join("|");
        Vb = bb.length ? new RegExp(`\\b(${wb})\\b`, "g") : null
      };
      gb();
      for (const lb of bb.split("\n")) {
        const bb = aw.exec(lb);
        if (!bb) {
          pb() && eb.push(Vb ? uw(lb, Vb, Mb) : lb);
          continue
        }
        const wb = bb[1],
          Lb = bb[2].trim();
        if ("ifdef" === wb || "ifndef" === wb || "if" === wb) {
          const bb = pb(),
            eb = "if" === wb ? dw(Lb, Mb) : Mb.has(Lb) === ("ifdef" === wb);
          Hb.push({
            active: bb && eb,
            parentActive: bb,
            taken: eb
          })
        } else if ("elif" === wb || "else" === wb) {
          const bb = Hb[Hb.length - 1];
          if (!bb) throw new Error(`#${wb} without #if`);
          const eb = !bb.taken && ("else" === wb || dw(Lb, Mb));
          bb.active = bb.parentActive && eb, bb.taken = bb.taken || eb
        } else if ("endif" === wb) {
          if (!Hb.pop()) throw new Error("#endif without #if")
        } else if (pb()) {
          const [bb, ...eb] = Lb.split(/\s+/);
          "undef" === wb ? Mb.delete(bb) : Mb.set(bb, !eb.length || eb.join(" ")), gb()
        }
      }
      if (Hb.length) throw new Error("Unterminated #if");
      return eb.join("\n")
    }

    function uw(bb, wb, Mb) {
      return bb.replace(wb, (bb => {
        const wb = Mb.get(bb);
        return "string" === typeof wb ? wb : bb
      }))
    }

    function dw(bb, wb) {
      var Mb;
      const eb = null !== (Mb = bb.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== Mb ? Mb : [];
      let Hb = 0;
      const pb = () => eb[Hb],
        Vb = () => eb[Hb++],
        gb = bb => {
          const Mb = /^\d/.test(bb) ? bb : wb.get(bb);
          return "string" === typeof Mb ? parseInt(Mb) : Number.NaN
        },
        lb = () => {
          const bb = Vb();
          if ("!" === bb) return !lb();
          if ("(" === bb) {
            const bb = Ib();
            return Vb(), bb
          }
          if ("defined" === bb) {
            const bb = "(" === pb();
            bb && Vb();
            const Mb = Vb();
            return bb && Vb(), wb.has(Mb)
          }
          const Mb = pb();
          if ("==" === Mb || "!=" === Mb || ">" === Mb || "<" === Mb || ">=" === Mb || "<=" === Mb) {
            Vb();
            const wb = gb(bb),
              eb = gb(Vb());
            if (Number.isNaN(wb) || Number.isNaN(eb)) return !1;
            switch (Mb) {
              case "==":
                return wb === eb;
              case "!=":
                return wb !== eb;
              case ">":
                return wb > eb;
              case "<":
                return wb < eb;
              case ">=":
                return wb >= eb;
              default:
                return wb <= eb
            }
          }
          return wb.has(bb)
        },
        Lb = () => {
          let bb = lb();
          for (;
            "&&" === pb();) {
            Vb();
            const wb = lb();
            bb = bb && wb
          }
          return bb
        },
        Ib = () => {
          let bb = Lb();
          for (;
            "||" === pb();) {
            Vb();
            const wb = Lb();
            bb = bb || wb
          }
          return bb
        },
        Ob = Ib();
      if (Hb !== eb.length) throw new Error(`Cannot evaluate #if ${bb}`);
      return Ob
    }
    var Pw = Mb(38526),
      nw = Mb(38637),
      yw = Mb(38643),
      ow = Mb(42488),
      Tw = Mb(40056);
    const kw = 32,
      bM = [10, 3, 10],
      wM = [21, 7, 21],
      MM = wM[0] * wM[1] * wM[2],
      eM = 0,
      HM = 1,
      pM = 2,
      VM = 3,
      gM = 64,
      lM = 512,
      LM = 4 * MM,
      IM = 1536,
      OM = LM + MM * IM,
      UM = 1073741824,
      tM = OM + 1;

    function CM(bb, wb) {
      const Mb = bb % wb;
      return Mb < 0 ? Mb + wb : Mb
    }

    function EM(bb, wb, Mb) {
      return eb = CM(bb, wM[0]), Hb = CM(wb, wM[1]), pb = CM(Mb, wM[2]), eb + wM[0] * (Hb + wM[1] * pb);
      var eb, Hb, pb
    }

    function FM(bb, wb, Mb) {
      return bb + 8 * (wb + 8 * Mb)
    }

    function BM(bb, wb, Mb) {
      return bb + 4 * (wb + 4 * Mb)
    }
    const sM = 65535,
      mM = 0,
      hM = 1,
      zM = 2,
      XM = 3;

    function xM(bb) {
      return Math.ceil(bb * bb / 32)
    }
    const jM = 8192,
      KM = 1 << 18,
      rM = 65536,
      RM = 294912,
      DM = 128,
      cM = 4096,
      YM = 16,
      ZM = 16385,
      fM = 81921,
      AM = 147457,
      WM = 4194304;
    const JM = [0, 0, 0],
      SM = [0, 0, 0];

    function NM(bb, wb, Mb, eb) {
      ! function(bb, wb, Mb) {
        const [eb, Hb, pb] = [bb[0], bb[1], bb[2]];
        let Vb, gb, lb;
        Math.abs(Hb) < .99 ? (Vb = pb, gb = 0, lb = -eb) : (Vb = -Hb, gb = eb, lb = 0);
        const Lb = Math.hypot(Vb, gb, lb);
        wb[0] = Vb / Lb, wb[1] = gb / Lb, wb[2] = lb / Lb, Mb[0] = Hb * wb[2] - pb * wb[1], Mb[1] = pb * wb[0] - eb * wb[2], Mb[2] = eb * wb[1] - Hb * wb[0]
      }(eb, JM, SM);
      const Hb = 1 / 32;
      for (const [pb, Vb] of [
          [0, JM],
          [4, SM]
        ]) {
        for (let Mb = 0; Mb < 3; Mb++) bb[wb + pb + Mb] = Vb[Mb] * Hb;
        bb[wb + pb + 3] = -(Vb[0] * Mb[0] + Vb[1] * Mb[1] + Vb[2] * Mb[2]) * Hb
      }
    }
    class vM {
      constructor() {
        this.words = new Uint32Array(AM), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      LO(bb, wb) {
        this.parts = 0, this.refs = 0, this.view = bb, this.viewAt = wb;
        const Mb = bb[wb + 1] * bb[wb + 6] - bb[wb + 2] * bb[wb + 5],
          eb = bb[wb + 2] * bb[wb + 4] - bb[wb] * bb[wb + 6],
          Hb = bb[wb] * bb[wb + 5] - bb[wb + 1] * bb[wb + 4],
          pb = Math.hypot(Mb, eb, Hb) || 1;
        this.light[0] = Mb / pb, this.light[1] = eb / pb, this.light[2] = Hb / pb
      }
      add(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= cM || ! function(bb, wb, Mb) {
            const eb = bb[wb],
              Hb = bb[wb + 1],
              pb = bb[wb + 2],
              Vb = bb[wb + 3],
              gb = bb[wb + 4],
              lb = bb[wb + 5],
              Lb = bb[wb + 6],
              Ib = bb[wb + 7],
              Ob = bb[wb + 8],
              Ub = bb[wb + 9],
              tb = bb[wb + 10],
              Cb = bb[wb + 11],
              Eb = bb[wb + 12],
              Fb = bb[wb + 13],
              Bb = bb[wb + 14],
              sb = bb[wb + 15],
              mb = eb * lb - Hb * gb,
              hb = eb * Lb - pb * gb,
              zb = eb * Ib - Vb * gb,
              Xb = Hb * Lb - pb * lb,
              xb = Hb * Ib - Vb * lb,
              jb = pb * Ib - Vb * Lb,
              Kb = Ob * Fb - Ub * Eb,
              rb = Ob * Bb - tb * Eb,
              Rb = Ob * sb - Cb * Eb,
              Db = Ub * Bb - tb * Fb,
              cb = Ub * sb - Cb * Fb,
              Yb = tb * sb - Cb * Bb,
              Zb = mb * Yb - hb * cb + zb * Db + Xb * Rb - xb * rb + jb * Kb;
            if (!(Math.abs(Zb) > 1e-12)) return !1;
            const fb = 1 / Zb;
            return Mb[0] = (lb * Yb - Lb * cb + Ib * Db) * fb, Mb[1] = (pb * cb - Hb * Yb - Vb * Db) * fb, Mb[2] = (Fb * jb - Bb * xb + sb * Xb) * fb, Mb[3] = (tb * xb - Ub * jb - Cb * Xb) * fb, Mb[4] = (Lb * Rb - gb * Yb - Ib * rb) * fb, Mb[5] = (eb * Yb - pb * Rb + Vb * rb) * fb, Mb[6] = (Bb * zb - Eb * jb - sb * hb) * fb, Mb[7] = (Ob * jb - tb * zb + Cb * hb) * fb, Mb[8] = (gb * cb - lb * Rb + Ib * Kb) * fb, Mb[9] = (Hb * Rb - eb * cb - Vb * Kb) * fb, Mb[10] = (Eb * xb - Fb * zb + sb * mb) * fb, Mb[11] = (Ub * zb - Ob * xb - Cb * mb) * fb, Mb[12] = (lb * rb - gb * Db - Lb * Kb) * fb, Mb[13] = (eb * Db - Hb * rb + pb * Kb) * fb, Mb[14] = (Fb * hb - Eb * Xb - Bb * mb) * fb, Mb[15] = (Ob * Xb - Ub * hb + tb * mb) * fb, !0
          }(wb, Mb, this.inverse)) return;
        const {
          view: eb,
          viewAt: Hb
        } = this, pb = Mb;
        let Vb = 1 / 0,
          gb = 1 / 0,
          lb = -1 / 0,
          Lb = -1 / 0,
          Ib = -1 / 0;
        const [Ob, Ub, tb] = this.light;
        for (let zb = 0; zb < 8; zb++) {
          const Mb = 1 & zb ? bb.hi[0] : bb.lo[0],
            Cb = 2 & zb ? bb.hi[1] : bb.lo[1],
            Eb = 4 & zb ? bb.hi[2] : bb.lo[2],
            Fb = Mb * wb[pb] + Cb * wb[pb + 4] + Eb * wb[pb + 8] + wb[pb + 12],
            Bb = Mb * wb[pb + 1] + Cb * wb[pb + 5] + Eb * wb[pb + 9] + wb[pb + 13],
            sb = Mb * wb[pb + 2] + Cb * wb[pb + 6] + Eb * wb[pb + 10] + wb[pb + 14],
            mb = eb[Hb] * Fb + eb[Hb + 1] * Bb + eb[Hb + 2] * sb + eb[Hb + 3],
            hb = eb[Hb + 4] * Fb + eb[Hb + 5] * Bb + eb[Hb + 6] * sb + eb[Hb + 7];
          Vb = Math.min(Vb, mb), gb = Math.min(gb, hb), lb = Math.max(lb, mb), Lb = Math.max(Lb, hb), Ib = Math.max(Ib, Ob * Fb + Ub * Bb + tb * sb)
        }
        if (lb < -1 || Lb < -1 || Vb >= 1 || gb >= 1) return;
        const Cb = this.parts++,
          Eb = this.rects;
        Eb[4 * Cb] = QM(Vb), Eb[4 * Cb + 1] = QM(gb), Eb[4 * Cb + 2] = QM(lb), Eb[4 * Cb + 3] = QM(Lb);
        const Fb = this.inverse,
          {
            cell: Bb,
            dims: sb,
            lo: mb
          } = bb,
          hb = fM + Cb * YM;
        for (let zb = 0; zb < 3; zb++) this.floats[hb + 4 * zb] = Fb[zb] / Bb, this.floats[hb + 4 * zb + 1] = Fb[4 + zb] / Bb, this.floats[hb + 4 * zb + 2] = Fb[8 + zb] / Bb, this.floats[hb + 4 * zb + 3] = (Fb[12 + zb] - mb[zb]) / Bb;
        this.words[hb + 12] = bb.at, this.floats[hb + 13] = Ib + .001 * (1 + Math.abs(Ib)), this.words[hb + 14] = sb[0] | sb[1] << 8 | sb[2] << 16
      }
      finish() {
        const bb = DM,
          {
            counts: wb,
            rects: Mb,
            words: eb
          } = this;
        wb.fill(0);
        let Hb = 0,
          pb = 0;
        for (; pb < this.parts; pb++) {
          const eb = 4 * pb,
            Vb = (Mb[eb + 2] - Mb[eb] + 1) * (Mb[eb + 3] - Mb[eb + 1] + 1);
          if (Hb + Vb > 65536) break;
          Hb += Vb;
          for (let Hb = Mb[eb + 1]; Hb <= Mb[eb + 3]; Hb++)
            for (let pb = Mb[eb]; pb <= Mb[eb + 2]; pb++) wb[Hb * bb + pb]++
        }
        let Vb = 0;
        for (let lb = 0; lb < 16384; lb++) eb[lb] = Vb, Vb += wb[lb], wb[lb] = eb[lb];
        eb[16384] = Vb;
        for (let lb = 0; lb < pb; lb++) {
          const Hb = 4 * lb;
          for (let pb = Mb[Hb + 1]; pb <= Mb[Hb + 3]; pb++)
            for (let Vb = Mb[Hb]; Vb <= Mb[Hb + 2]; Vb++) eb[ZM + wb[pb * bb + Vb]++] = lb
        }
        const gb = this.floats;
        for (let lb = 0; lb < 16384; lb++) {
          const bb = ZM + eb[lb],
            wb = bb + Math.min(eb[lb + 1] - eb[lb], 64);
          for (let Mb = bb + 1; Mb < wb; Mb++) {
            const wb = eb[Mb],
              Hb = gb[81934 + wb * YM];
            let pb = Mb - 1;
            for (; pb >= bb && gb[81934 + eb[pb] * YM] < Hb; pb--) eb[pb + 1] = eb[pb];
            eb[pb + 1] = wb
          }
        }
        this.refs = Hb
      }
    }

    function QM(bb) {
      return Math.min(127, Math.max(0, Math.floor((.5 * bb + .5) * DM)))
    }

    function GM(bb, wb, Mb, eb, Hb) {
      for (let pb = 0; pb < 4; pb++)
        for (let Vb = 0; Vb < 4; Vb++) Hb[4 * pb + Vb] = bb[wb + 4 * pb] * Mb[eb + Vb] + bb[wb + 4 * pb + 1] * Mb[eb + 4 + Vb] + bb[wb + 4 * pb + 2] * Mb[eb + 8 + Vb] + bb[wb + 4 * pb + 3] * Mb[eb + 12 + Vb]
    }

    function qM(bb, wb, Mb, eb, Hb) {
      const pb = bb[0] - wb,
        Vb = bb[1] - Mb,
        gb = bb[2] - eb,
        lb = bb[3] - wb,
        Lb = bb[4] - Mb,
        Ib = bb[5] - eb,
        Ob = bb[6] - wb,
        Ub = bb[7] - Mb,
        tb = bb[8] - eb;
      if (Math.min(pb, lb, Ob) > Hb || Math.max(pb, lb, Ob) < -Hb) return !1;
      if (Math.min(Vb, Lb, Ub) > Hb || Math.max(Vb, Lb, Ub) < -Hb) return !1;
      if (Math.min(gb, Ib, tb) > Hb || Math.max(gb, Ib, tb) < -Hb) return !1;
      const Cb = lb - pb,
        Eb = Lb - Vb,
        Fb = Ib - gb,
        Bb = Ob - lb,
        sb = Ub - Lb,
        mb = tb - Ib,
        hb = Eb * mb - Fb * sb,
        zb = Fb * Bb - Cb * mb,
        Xb = Cb * sb - Eb * Bb;
      if (Math.abs(hb * pb + zb * Vb + Xb * gb) > Hb * (Math.abs(hb) + Math.abs(zb) + Math.abs(Xb))) return !1;
      const xb = [Cb, Eb, Fb, Bb, sb, mb, pb - Ob, Vb - Ub, gb - tb];
      for (let jb = 0; jb < 3; jb++) {
        const bb = xb[3 * jb],
          wb = xb[3 * jb + 1],
          Mb = xb[3 * jb + 2];
        for (let eb = 0; eb < 3; eb++) {
          const Cb = 0 === eb ? 0 : 1 === eb ? Mb : -wb,
            Eb = 0 === eb ? -Mb : 1 === eb ? 0 : bb,
            Fb = 0 === eb ? wb : 1 === eb ? -bb : 0,
            Bb = Cb * pb + Eb * Vb + Fb * gb,
            sb = Cb * lb + Eb * Lb + Fb * Ib,
            mb = Cb * Ob + Eb * Ub + Fb * tb,
            hb = Hb * (Math.abs(Cb) + Math.abs(Eb) + Math.abs(Fb));
          if (Math.min(Bb, sb, mb) > hb || Math.max(Bb, sb, mb) < -hb) return !1
        }
      }
      return !0
    }
    const aM = new Float32Array(1);
    new Uint32Array(aM.buffer);
    var iM = Mb(40061);

    function uM(bb) {
      const [wb, Mb, eb] = iM.p;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${bb.group}) @binding(${bb.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${wb-1}, ${Mb-1}, ${eb-1});\n}\n`
    }

    function dM(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Hb, pb, Vb] = wM, [gb, lb, Lb] = bM, Ib = Math.log2(kw), Ob = eb ? "var<private> bloxdSpCrossed: bool;\n" : "", Ub = eb ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${bb.group}) @binding(${bb.GU}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${bb.group}) @binding(${bb.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${Mb?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Ob}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${hM}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${zM}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${Mb?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${XM}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Hb}, ${pb}, ${Vb});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Hb} * (s.y + ${pb} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${gb}, ${lb}, ${Lb}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Ib}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${VM}u) {\n\t\treturn named && state == ${pM}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${LM}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${OM}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${wb?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${wb?`\t\tif (exits && step > 0 && step % ${yM} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Ib}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${eM}u || kind == ${HM}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${pM}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${LM}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Ub}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const PM = {
      group: 0,
      uniform: 0,
      GU: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function nM() {
      const bb = PM;
      return `${uM(bb)}${dM(bb,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${iM.b}>,\n}\n@group(${bb.group}) @binding(${bb.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${bb.group}) @binding(${bb.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${iM.j})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${iM.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${iM.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const yM = 2;
    const oM = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function TM(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const eb = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${wb.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Hb = "trace" === Mb || "lit" === Mb,
        pb = "maskEdge" === Mb ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Vb = Hb ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${wb.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${wb.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===Mb?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${pb};\n`;
      return `${eb}${bb.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Hb?function(){const[bb,wb,Mb]=iM.p;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${bb}.0, ${wb}.0, ${Mb}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Vb}}\n`:""}${bb.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${wb.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${wb.renderOffset});\n}\n`:""}`
    }
    const kM = "bloxdSpOwnTexture";

    function be(bb) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${bb.texture}) - 1u)))`
    }
    const we = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Zw.i.map((bb=>{let[wb,Mb]=bb;return`\tbloxdSpOut.${wb} = (bloxdSpWord & ${Mb}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Me(bb) {
      return `bloxdSpFlags(${bb})`
    }
    const ee = `${ow.l}.eyePosition`;

    function He(bb, wb, Mb, eb, Hb) {
      const pb = bb.indexOf(wb);
      if (pb < 0 || bb.indexOf(wb, pb + 1) >= 0) throw new Error(`Lite's ${Hb} program changed at the shader pack ${eb} hook: ${pb<0?"no":"more than one"} anchor (lite/${Hb}ShaderPack.ts)`);
      return bb.slice(0, pb) + Mb + bb.slice(pb + wb.length)
    }

    function pe(bb) {
      return bb.sunShadow || bb.airShadow
    }

    function Ve(bb, wb) {
      return wb && pe(bb)
    }
    const ge = {
      group: ow.g,
      ...ow.u
    };

    function le(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!pe(bb)) return "";
      if (wb) {
        const wb = ge,
          Hb = "trace" === Mb || "lit" === Mb;
        let pb = "";
        bb.sunShadow && (pb = Hb ? `${dM(wb,!0,"lit"===Mb)}${eb=wb,`@group(${eb.group}) @binding(${eb.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${eb.group}) @binding(${eb.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(bb, wb, Mb) {
          const eb = `@group(${bb}) @binding(${wb}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return Mb ? `${eb}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${oM}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((bb=>`\t{\n\t\tlet o = vec2i(${bb});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : eb
        }(wb.group, ow.v, "maskEdge" === Mb));
        const Vb = {
          shadowDirection: `${ow.l}.shadowDirection`,
          renderOffset: `${ow.l}.renderOffset`,
          eyePosition: `${ow.l}.eyePosition`
        };
        return `${uM(wb)}${pb}${function(bb){const[wb,Mb,eb]=iM.p;return`@group(${bb.group}) @binding(${bb.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${bb.group}) @binding(${bb.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${wb}.0, ${Mb}.0, ${eb}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(wb)}${TM(bb,Vb,Mb)}`
      }
      var eb;
      return `${bb.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${bb.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Le(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!wb) return "";
      const pb = (Vb = "fragmentInputs.vPositionW", gb = bb.sunShadow ? {
        normal: Mb,
        flags: eb
      } : null, `\n\tbloxdSpShadowPosition = ${Vb};\n${gb?`\tbloxdSpShadowNormal = normalize(${gb.normal});\n\tbloxdSpShadowEmissive = (${gb.flags} & ${Zw.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${gb.flags} & ${Zw.l}u) != 0u;\n`:""}`);
      var Vb, gb;
      return bb.sunShadow && ("mask" === Hb || "maskEdge" === Hb) ? `${pb}${lb="fragmentInputs.position",Lb="maskEdge"===Hb,`\n\tbloxdSpShadowPixel = vec2i(${lb}.xy);\n${Lb?`\tbloxdSpShadowZ = ${lb}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${lb}.z), dpdy(${lb}.z));\n`:""}`}` : pb;
      var lb, Lb
    }
    const Ie = "bloxdSpTextureRotation",
      Oe = "bloxdSpTextureLayers",
      Ue = `@group(${ow.g}) @binding(${ow.x}) var<storage, read> ${Oe}: array<u32>;\n`;

    function te(bb) {
      return `\tvertexOutputs.vPackTexture = ${Oe}[min(u32(${bb}), arrayLength(&${Oe}) - 1u)];\n`
    }

    function Ce(bb) {
      return void 0 !== bb.uv
    }

    function Ee(bb) {
      if (!bb) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Ce(bb)) return function(bb) {
        const {
          texture: wb,
          cells: Mb,
          layers: eb
        } = bb, Hb = `textureDimensions(${wb}, bloxdSpLevel)`, pb = Mb ? `max(vec2u(vec2f(${Hb}) / ${Mb}), vec2u(1u))` : Hb, Vb = Mb ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${pb};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${Mb}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${Mb}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${wb}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Hb} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${pb};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${wb}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let gb;
        if (Mb)
          if (1 === eb.length) gb = `\treturn bloxdSpOwnTexel(${eb[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const bb = eb.length - 1;
            gb = `\tvar bloxdSpColour = bloxdSpOwnTexel(${eb[bb]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let wb = bb - 1; wb >= 0; wb--) gb += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${eb[wb]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            gb += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else gb = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${bb.id?`var<private> ${kM}: u32;\n`:""}${Vb}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${be(bb)};\n\treturn ${pb};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${bb.id?kM:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${be(bb)};\n${gb}}\n`
      }(bb);
      const wb = bb,
        Mb = bb => {
          const Mb = bb > 0 ? `bloxdSpLayer - ${wb.layers*bb}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${bb}, ${wb.sampler}, bloxdSpTurned, ${Mb}, round(bloxdSpMipLevel));`
        };
      let eb = "";
      for (let pb = 0; pb < wb.count - 1; pb++) eb += `\tif (bloxdSpLayer < ${wb.layers*(pb+1)}u) {\n\t\t${Mb(pb)}\n\t}\n`;
      const Hb = wb.frame ? `${wb.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Ie}: u32;\n${Ue}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Ie} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Ie} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Ie} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Hb}${eb}\t${Mb(wb.count-1)}\n}\n`
    }

    function Fe(bb, wb, Mb) {
      return !!bb.surface && "bloxdDefaultSurface" !== bb.surface && function(bb, wb) {
        return "liquid" === wb || !bb
      }(wb, Mb)
    }

    function Be(bb, wb) {
      return bb.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${wb.vertexLocalPosition}, ${Me(wb.vertexFlags)});\n\t\tlet bloxdSpVertex = ${bb.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function se(bb, wb, Mb, eb, Hb) {
      if (!bb.surface) return "";
      const pb = (bb, wb) => `\n\tlet bloxdSpTexelUV = ${bb};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${wb}) - 1u));`;
      let Vb = "",
        gb = "0u, 0u, vec2f(0.0), 0.0";
      const lb = eb && Ce(eb) ? eb : null,
        Lb = eb && !Ce(eb) ? eb : null;
      if (lb) {
        Vb = `${lb.id?`\n\tlet bloxdSpTexture = ${lb.id};\n\t${kM} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${lb.uv};${pb(function(bb,wb){var Mb;return`${null!==(Mb=bb.levelUv)&&void 0!==Mb?Mb:bb.cells?`${wb} / ${bb.cells}`:wb} * vec2f(textureDimensions(${bb.texture}))`}(lb,"bloxdSpUv"),lb.texture)}`, gb = (lb.id ? `${kM}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Lb && (Vb = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Ie} = bloxdSpTexture >> 16u;${pb(`fragmentInputs.vMainUV1 * ${(0,Pw.mb)(Lb.width)}`,"textureAtlas0")}`, gb = `bloxdSpTexture & 0xffffu, ${Ie}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Ib = Hb.overlayColour,
        Ob = Ib ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Ub = "bloxdDefaultSurface" !== bb.surface || Ib ? `\n\tbaseColor = vec4f(${Ob}, baseColor.a);` : "",
        tb = Fe(bb, wb, Mb) ? `\n\t${Hb.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Vb}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Hb.alpha}, ${Hb.enchantTier}, ${Hb.enchantColour}, ${Hb.enchantSpeed}, ${null!==Ib&&void 0!==Ib?Ib:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Hb.normal}, ${Hb.localPosition}, ${Me(Hb.flags)}, ${gb});\n\tlet bloxdSpSurface = ${bb.surface}(bloxdSpSurfaceIn);${Ub}${tb}\n`
    }
    const me = "bloxdSpLightIn";

    function he(bb, wb, Mb, eb) {
      if (!bb.light) return "";
      const {
        lambert: Hb,
        diffuse: pb,
        emissive: Vb,
        ambient: gb,
        fogColour: lb,
        fogAlpha: Lb,
        normal: Ib,
        glow: Ob
      } = eb, Ub = [`${Pw.m}.rgb`, `${Pw.m}.w`, "uniforms.uAmbientLightColour", "uniforms.uSkyLightColour", Pw.j], tb = ["vec3f(0.0)", "1.0", "vec3f(1.0)", "vec3f(1.0)", "vec3f(0.0)"];

      function Cb(bb, wb) {
        return null === Ob ? bb : `mix(${bb}, ${wb}, ${Ob})`
      }
      const Eb = (wb ? Ub.map(((bb, wb) => Cb(bb, tb[wb]))) : tb).join(", "),
        Fb = Mb ? Cb(Hb, "0.0") : "0.0";
      return `\tvar ${me} = BloxdLightIn(vec3f(0.0), ${Fb}, ${pb}, ${Cb(Vb,"vec3f(1.0)")}, ${gb}, ${Eb}, ${lb}, ${Lb}, fragmentInputs.vPositionW, ${Ib}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${me}.litColour = bloxdLitColour(bloxdSpSurface, ${me});\n`
    }

    function ze(bb) {
      return bb.light ? `\n\t{\n\t\tlet bloxdSpLight = ${bb.light}(bloxdSpSurface, ${me});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Xe = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      xe = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      je = "\treturn color;\n}",
      Ke = {
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
    const re = Object.freeze({});

    function Re(bb) {
      var wb;
      return !(null === (wb = (0, Tw.i)(bb)) || void 0 === wb || !wb.sceneDepth)
    }

    function De(bb) {
      const wb = (0, Tw.i)(bb);
      return !!wb && Fe(wb.hooks, wb.strict, wb.program)
    }

    function ce(bb, wb, Mb, eb) {
      return He(bb, wb, Mb, eb, "terrain")
    }

    function Ye(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const pb = function(bb) {
          return (0, Tw.e)(bb.packVariant, bb.liquid ? "liquid" : "terrain")
        }(bb),
        {
          hooks: Vb
        } = pb,
        gb = Ve(pb, eb),
        lb = "edge" === Hb ? "maskEdge" : "plain" === Hb ? "mask" : "trace",
        Lb = Be(Vb, Ke);
      Lb && (wb = ce(wb, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Lb}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Ib = "atlas" === bb.texture ? {
          count: bb.atlasCount,
          layers: bb.atlasLayers,
          width: bb.W4,
          sampler: "atlasSampler",
          frame: bb.animated ? Mb : null
        } : null,
        Ob = `${pb.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Le(pb,gb,Ke.normal,Ke.flags,lb)}${se(Vb,pb.strict,pb.program,Ib,Ke)}`;
      Ob && (wb = ce(wb, Xe, `${Xe.slice(0,-1)}${Ob}`, "surface"));
      const Ub = ze(Vb);
      return Ub && (wb = ce(wb, xe, `${he(Vb,bb.lighting,bb.dirLightCount>0,Ke)}${xe}`, "light input"), wb = ce(wb, je, `${Ub.slice(1)}${je}`, "light")), `${(0,ow.C)()}${pb.sceneDepth?`@group(${ow.g}) @binding(${ow.r}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${ee};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${le(pb,gb,lb)}${Ee(Ib)}${we}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${pb.code}${wb}`
    }
    const Ze = Xb.b.WGSL;

    function fe(bb) {
      return void 0 !== bb.packVariant
    }
    const Ae = {
        upb: 0,
        dpb: 4,
        Ppb: 8,
        npb: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      We = Ae.aoLevels + 4,
      Je = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Se = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      Ne = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      ve = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Qe = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      Ge = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      qe = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      ae = 0,
      ie = 3,
      ue = 4,
      de = 5,
      Pe = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${nw.e}, ${nw.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${nw.e}, ${nw.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      ne = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((bb=>yw.c>>bb&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const ye = {
      sO: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: bb => `animDataPerTex[${bb}]`
    };

    function oe(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ye;
      return `\n\tlet atlasIdxIn = ${bb};\n\tlet animTick = ${Mb.sO};\n\tlet animTickStride = ${Mb.stride};\n\tlet numAnimTextures = ${Mb.count};\n\t${(0,xb.g)(Xb.b.WGSL,Mb.perTexture)}\n\t${wb}animLayer;\n`
    }

    function Te(bb) {
      const wb = (wb, Mb) => {
        const eb = wb > 0 ? `fragmentInputs.texAtlasIndex - ${bb.atlasLayers.toFixed(1)} * ${wb.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${Mb?"textureSampleLevel":"textureSample"}(textureAtlas${wb}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${eb}))${Mb?", atlasLod":""})`
      };
      if (1 === bb.atlasCount) return `baseColor = ${wb(0,!1)};`;
      let Mb = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Pw.mb)(bb.W4)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let eb = 0; eb < bb.atlasCount; eb++) {
        const Hb = bb.atlasLayers * (eb + 1) - .5;
        Mb += `${eb>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Pw.mb)(Hb)}) {\n\t\tbaseColor = ${wb(eb,!0)};\n\t}`
      }
      return Mb
    }

    function ke(bb) {
      return `terrain-${bb.texture}${"atlas"===bb.texture?bb.atlasCount:""}${bb.animated?"-anim":""}${bb.alphaTest?"-test":""}${bb.lighting?"-lit":""}-dir${bb.dirLightCount}${bb.packed?"-packed":""}${fe(bb)?`-sp${bb.packVariant}`:""}${bb.liquid?"-liquid":""}${bb.resting?"-rest":""}`
    }

    function bH(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const eb = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const Mb = "none" !== bb.texture,
          eb = "atlas" === bb.texture,
          Hb = bb.dirLightCount > 0,
          pb = fe(bb);
        if (bb.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${bb.dirLightCount}`);
        let Vb = 1,
          gb = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (eb) {
          bb.animated && (gb += `@group(2) @binding(${Vb++}) var<storage, read> animDataPerTex: array<f32>;\n`), gb += `@group(2) @binding(${Vb++}) var atlasSampler: sampler;\n`;
          for (let wb = 0; wb < bb.atlasCount; wb++) gb += `@group(2) @binding(${Vb++}) var textureAtlas${wb}: texture_2d_array<f32>;\n`
        } else "single" === bb.texture && (gb += `@group(2) @binding(${Vb++}) var diffuseSamplerSampler: sampler;\n`, gb += `@group(2) @binding(${Vb++}) var diffuseSampler: texture_2d<f32>;\n`);
        const lb = function(bb) {
            const wb = qe,
              Mb = "none" !== bb.texture,
              eb = "atlas" === bb.texture,
              Hb = fe(bb);
            return bb.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${Mb?"uv: vec2f,":""}\n\t${eb?"texAtlasIndices: f32,":""}\n\t${bb.lighting?"aPackedLightLevels: f32,":""}\n\t${Hb?"blockFlagWords: vec2u,":""}\n}\n${Pe}\n${ne}\n${"single"===bb.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${Mb?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===bb.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${eb?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${bb.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Hb?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${wb.position}) position: vec3f,\n\t@location(${wb.normal}) normal: vec4f,\n\t@location(${wb.color}) color: vec4f,\n\t${Mb?`@location(${wb.uv}) uv: vec2f,`:""}\n\t${bb.lighting?`@location(${wb.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Hb?`@location(${wb.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(bb),
          Lb = `\n${ve}\n${Se}\n${Ne}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${gb}\n${Fw}\n${lb.declarations}\nstruct Varyings {\n\t${"none"===wb?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${bb.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Hb?"@location(5) vTerrainLambert: f32,":""}\n\t${Mb?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${eb?"@location(7) texAtlasIndex: f32,":""}\n\t${bb.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${pb?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${pb&&eb?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${bb.resting?"":(0,Pw.s)(Ze)}\n${Ge}\n\n@vertex\nfn mainVertex(${lb.parameter}) -> Varyings {\n\t${lb.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${pb?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Zw.e.placed}u;`:""}\n\t${pb&&eb?te("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${bb.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${Mb?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${eb?function(bb){return bb?oe("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(bb.animated):""}\n\t${"single"===bb.texture&&bb.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Pw._)(Ze)}\n\t${(0,Pw.E)(Ze,bb.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${bb.resting?"":Qe}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${eb?Te(bb):""}\n\t${"single"===bb.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Mb?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${bb.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Hb?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Ew}));\n\t${fe(bb)?(0,Pw.eb)(Xb.b.WGSL):(0,Pw.Q)(Ze)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Ib = new Set;
        bb.lighting && Ib.add("BLOXD_LIGHTING");
        Hb && Ib.add("BLOXD_TERRAIN_DIRECTIONAL");
        return iw(Lb, new Map([...Ib].map((bb => [bb, !0]))))
      }(bb, Mb);
      if (!fe(bb)) return eb;
      const Hb = Ye(bb, eb, oe, wb, Mb);
      return "none" === Mb ? Hb : `${Hb}${function(bb){const wb="none"!==bb.texture&&bb.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${bb.resting?"":Qe}\n\t${bb.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${wb&&"atlas"===bb.texture?Te(bb):""}\n\t${wb&&"single"===bb.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${wb?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Zw.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(bb)}`
    }
    const wH = new Map([
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

    function MH(bb, wb) {
      const Mb = new Map;
      let eb = 0;
      const Hb = [],
        pb = [],
        Vb = [];
      for (const Lb of wb) {
        var gb, lb;
        const wb = null !== (gb = Lb.type.trim().split(/\s+/).pop()) && void 0 !== gb ? gb : Lb.type,
          Ib = wH.get(wb);
        if (!Ib) throw new Error(`Lite: no uniform layout for ${Lb.name}: ${Lb.type}`);
        const Ob = null !== (lb = Lb.arraySize) && void 0 !== lb ? lb : 0,
          Ub = Ob ? 4 : Ib.align;
        eb = Math.ceil(eb / Ub) * Ub;
        const tb = Ob ? 4 * Math.ceil(Ib.floats / 4) : Ib.floats;
        if (Mb.set(Lb.name, {
            offset: eb,
            floats: Ib.floats,
            arraySize: Ob,
            stride: tb
          }), Ob && Ib.floats <= 2) {
          const wb = `${bb}_${Vb.length}_strided`;
          pb.push(`struct ${wb} {\n\t@size(16) el: ${Ib.wgsl},\n}`), Vb.push(Lb.name), Hb.push(`\t@align(16) ${Lb.name}: array<${wb}, ${Ob}>,`)
        } else Ob ? Hb.push(`\t@align(16) ${Lb.name}: array<${Ib.wgsl}, ${Ob}>,`) : Hb.push(`\t${Lb.name}: ${Ib.wgsl},`);
        eb += Ob ? tb * Ob : Ib.floats
      }
      return {
        slots: Mb,
        floats: Math.max(4, 4 * Math.ceil(eb / 4)),
        wgsl: `${pb.join("\n")}\nstruct ${bb} {\n${Hb.join("\n")}\n}\n`,
        stridedArrays: Vb
      }
    }
    const eH = [{
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
      HH = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      pH = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function VH(bb, wb) {
      return `#if defined(${bb}) && ${bb}DIRECTUV == 0\nvarying v${wb}UV: vec2f;\n#endif`
    }

    function gH(bb, wb, Mb) {
      return `#if defined(${bb}) && ${bb}DIRECTUV == 0\nif (uniforms.v${wb}Infos.x==0.)\n{vertexOutputs.v${wb}UV= (uniforms.${Mb}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${wb}UV= (uniforms.${Mb}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function lH(bb, wb, Mb) {
      return `#ifdef ${bb}\n#if ${bb}DIRECTUV == 1\n#define v${wb}UV vMainUV1\n#elif ${bb}DIRECTUV == 2\n#define v${wb}UV vMainUV2\n#else\nvarying v${wb}UV: vec2f;\n#endif\nvar ${Mb}SamplerSampler: sampler;\nvar ${Mb}Sampler: texture_2d<f32>;\n#endif`
    }
    const LH = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      IH = 256,
      OH = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      UH = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      tH = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      CH = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      EH = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      FH = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      BH = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      sH = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${UH}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${VH("OPACITY","Opacity")}\n${VH("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${BH}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${tH}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${gH("OPACITY","Opacity","opacity")}\n${gH("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${CH}\n#define CUSTOM_VERTEX_MAIN_END\n${EH}\n}\n`;
    const mH = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${lH("OPACITY","Opacity","opacity")}\n${lH("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${BH}\n${FH}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((bb,wb)=>function(bb){const wb=`
    frame.lights[LITE_LIGHT$ {
        bb
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      bb
    }\
    nvar diffuse$ {
      bb
    }: vec4f = $ {
      wb
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      bb
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      wb
    }.vLightData, diffuse$ {
      bb
    }.rgb, $ {
      wb
    }.vLightSpecular.rgb, diffuse$ {
      bb
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(wb))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, hH = /^([gimus]+)!/, zH = new Set;

    function XH(bb) {
      zH.has(bb) || (zH.add(bb), console.warn(`Lite: no place for plugin code at ${bb} in the standard shader: it is left out`))
    }

    function xH(bb, wb) {
      let Mb = bb;
      const eb = new Map;
      for (const [pb, Vb] of wb) {
        var Hb;
        eb.set(pb, `${null!==(Hb=eb.get(pb))&&void 0!==Hb?Hb:""}${Vb}\n`)
      }
      for (const [pb, Vb] of eb) {
        if (!pb.startsWith("!")) {
          const bb = `#define ${pb}`;
          if (!Mb.includes(bb)) {
            XH(pb);
            continue
          }
          Mb = Mb.replace(bb, (() => `\n${Vb}\n${bb}`));
          continue
        }
        let bb = pb.substring(1),
          wb = "g";
        if (bb.startsWith("!")) wb = "", bb = bb.substring(1);
        else {
          const Mb = hH.exec(bb);
          Mb && (wb = Mb[1], bb = bb.substring(wb.length + 1))
        }
        const eb = new RegExp(bb, wb.includes("g") ? wb : `${wb}g`);
        let Hb = eb.exec(Mb);
        for (Hb || XH(pb); Hb;) {
          const bb = Hb,
            wb = Vb.replace(/\$(\d+)/g, ((wb, Mb) => Number(Mb) < bb.length ? bb[Number(Mb)] : ""));
          Mb = Mb.substring(0, bb.index) + wb + Mb.substring(bb.index + bb[0].length), eb.lastIndex = bb.index + wb.length, Hb = eb.exec(Mb)
        }
      }
      return Mb
    }
    const jH = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      KH = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      rH = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function RH(bb) {
      const wb = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let Mb = bb.replace(jH, ((bb, Mb, eb, Hb, pb, Vb) => ("attribute" === Mb ? wb.attributes.push({
        name: pb,
        type: Vb
      }) : void 0 === Mb ? wb.varyings.push({
        name: pb,
        type: Vb,
        interpolation: cH(Vb, eb, Hb)
      }) : wb.uniforms.push({
        name: pb,
        type: DH(Vb)
      }), "")));
      return Mb = Mb.replace(KH, ((bb, Mb) => (wb.samplers.add(Mb), ""))), Mb = Mb.replace(rH, ((bb, Mb, eb) => (wb.textures.push({
        name: Mb,
        type: eb
      }), ""))), wb.body = Mb, wb
    }

    function DH(bb) {
      const wb = bb.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        Mb = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(wb);
      if (!Mb) throw new Error(`Lite: unsupported uniform type ${bb}`);
      return Mb
    }

    function cH(bb, wb, Mb) {
      return void 0 === wb && void 0 === Mb ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(bb.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === wb ? "@interpolate(flat) " : `@interpolate(${null!==wb&&void 0!==wb?wb:"perspective"}, ${null!==Mb&&void 0!==Mb?Mb:"center"}) `
    }

    function YH(bb) {
      return WH({
        defines: bb.defines,
        vertex: xH(sH, bb.vertexCode),
        fragment: xH(mH, bb.fragmentCode),
        members: [...eH, ...bb.defines.has("OPACITY") ? HH : [], ...bb.defines.has("EMISSIVE") ? pH : [], ...bb.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function ZH(bb) {
      const wb = bb.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (wb === bb) throw new Error("Lite: fragment main has no return");
      return wb
    }
    const fH = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${UH}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${tH}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${CH}\n${EH}\n}\n`,
      AH = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${FH}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function WH(bb) {
      const wb = bb.defines,
        Mb = RH(iw(bb.vertex, wb)),
        eb = RH(iw(bb.fragment, wb)),
        Hb = new Map;
      for (const mb of [...Mb.varyings, ...eb.varyings]) Hb.has(mb.name) || Hb.set(mb.name, mb);
      const pb = [...Hb.values()].map(((bb, wb) => `\t@location(${wb}) ${bb.interpolation}${bb.name}: ${bb.type},`)),
        Vb = [...bb.members];
      for (const mb of [...Mb.uniforms, ...eb.uniforms]) Vb.some((bb => bb.name === mb.name)) || Vb.push(mb);
      const gb = MH(bb.structName, Vb),
        lb = [],
        Lb = [];
      let Ib = 1;
      const Ob = new Set;
      for (const mb of [...Mb.textures, ...eb.textures]) {
        if (Ob.has(mb.name)) continue;
        Ob.add(mb.name);
        const bb = `${mb.name}Sampler`,
          wb = Ib++,
          Mb = Ib++,
          eb = mb.type.startsWith("texture_2d_array") ? "2d-array" : mb.type.startsWith("texture_cube") ? "cube" : "2d";
        lb.push({
          name: mb.name,
          binding: wb,
          samplerBinding: Mb,
          dimension: eb
        }), Lb.push(`@group(2) @binding(${wb}) var ${mb.name}: ${mb.type};`), Lb.push(`@group(2) @binding(${Mb}) var ${bb}: sampler;`)
      }
      for (const mb of [...Mb.samplers, ...eb.samplers])
        if (!Ob.has(mb.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${mb} has no texture`);
      const Ub = [ve, OH, gb.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${bb.structName};`, ...Lb].join("\n"),
        tb = Mb.attributes,
        Cb = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Mb.attributes.map(((bb, wb) => `\t@location(${wb}) ${bb.name}: ${bb.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Eb = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...pb, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        Fb = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...eb.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...pb, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Fw, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Ew}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Bb = bb => {
          for (const wb of gb.stridedArrays) bb = bb.replace(new RegExp(`\\b${wb}\\s*\\[(.*?)\\]`, "g"), `${wb}[$1].el`);
          return bb
        };
      return {
        vertex: `${Ub}\n${Cb}\n${Eb}\n${Bb(Mb.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Ub}\n${Fb}\n${ZH((sb=Bb(eb.body),sb.includes("fragmentInputs.position")?sb.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):sb))}`,
        attributes: tb,
        material: gb,
        textures: lb
      };
      var sb
    }
    const JH = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      SH = bb => ({
        name: bb,
        type: "vec3"
      }),
      NH = bb => ({
        name: bb,
        type: "float"
      }),
      vH = MH("EarthSkyUniforms", [SH("viewFrom"), NH("exposureScale"), SH("zenithOffset"), NH("fogOn"), SH("up"), NH("ditherOn"), SH("sun"), NH("turbidity"), SH("tint"), NH("rayleigh"), SH("sunDir"), NH("mieStrength"), SH("inScatterR"), NH("mieFocus"), SH("inScatterM"), NH("sunE"), SH("extinctionBeta"), NH("sunsetMix"), NH("mieScale"), NH("mieBase"), NH("mieSlope"), NH("sunDiscE"), NH("exposure")]),
      QH = `${ve}\n${OH}\n${vH.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      GH = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${JH.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      qH = `\n${Fw}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Qw).map((bb=>{let[wb,Mb]=bb;return`const TONE_${wb}: f32 = ${Mb};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Gw};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Ew}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var aH = Mb(38281);
    const iH = new aH.YC,
      uH = new aH.YC,
      dH = new aH.Quaternion,
      PH = new Float64Array(3),
      nH = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      yH = new Float64Array(16);

    function oH(bb, wb, Mb) {
      const eb = Mb.worldMatrix;
      var Hb;
      bb.updateFloat3("viewFrom", eb[12], eb[13], eb[14]), bb.updateFloatsFrom("zenithOffset", wb.cameraOffset, 0, 3), bb.updateFloatsFrom("up", wb.up, 0, 3), wb.luminance > 0 && (bb.updateFloat("exposure", wb.luminance), bb.updateFloat("exposureScale", (Hb = wb.luminance, Math.log2(2 / Math.pow(Hb, 4))))), bb.updateFloat("turbidity", wb.turbidity), bb.updateFloat("rayleigh", wb.rayleigh), bb.updateFloat("mieStrength", wb.mieCoefficient), bb.updateFloat("mieFocus", wb.mieDirectionalG), bb.updateFloatsFrom("tint", wb.tint, 0, 3), bb.updateFloat("fogOn", wb.fog && Mb.fogEnabled && 0 !== Mb.fogMode ? 1 : 0), bb.updateFloat("ditherOn", wb.dithering ? 1 : 0);
      const pb = wb.sunPosition;
      if (iH.set(pb[0], pb[1], pb[2]), !wb.useSunPosition) {
        const bb = Math.PI * (wb.inclination - .5),
          Mb = 2 * Math.PI * (wb.azimuth - .5);
        iH.set(wb.distance * Math.cos(Mb) * Math.cos(bb), wb.distance * Math.sin(-bb), wb.distance * Math.sin(Mb) * Math.cos(bb)), aH.Quaternion.FromUnitVectorsToRef(aH.YC.UpReadOnly, uH.set(wb.up[0], wb.up[1], wb.up[2]), dH), iH.rotateByQuaternionToRef(dH, iH)
      }
      bb.updateVector3("sun", iH), PH[0] = iH.x, PH[1] = iH.y, PH[2] = iH.z;
      const Vb = vw(wb, PH, nH);
      bb.updateFloatsFrom("sunDir", Vb.sunDir, 0, 3), bb.updateFloat("sunE", Vb.sunE), bb.updateFloatsFrom("inScatterR", Vb.inScatterR, 0, 3), bb.updateFloatsFrom("inScatterM", Vb.inScatterM, 0, 3), bb.updateFloatsFrom("extinctionBeta", Vb.extinctionBeta, 0, 3), bb.updateFloat("sunsetMix", Vb.sunsetMix), bb.updateFloat("sunDiscE", Vb.sunDiscE), bb.updateFloat("mieScale", Vb.mieScale), bb.updateFloat("mieBase", Vb.mieBase), bb.updateFloat("mieSlope", Vb.mieSlope)
    }

    function TH(bb, wb) {
      const Mb = yH;
      Mb[0] = wb.far, Mb[5] = wb.far, Mb[10] = wb.far, Mb[15] = 1;
      const eb = bb.infiniteDistance;
      for (let Hb = 0; Hb < 3; Hb++) Mb[12 + Hb] = bb.position[Hb] + (eb ? wb.worldMatrix[12 + Hb] : 0);
      return yH
    }
    class kH {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(bb, wb, Mb, eb, Hb) {
        Mb !== this.pipeline && (bb.setPipeline(Mb), this.pipeline = Mb), bb.setBindGroup(1, eb, [Hb]);
        const pb = wb.material.bindGroup;
        pb !== this.materialGroup && (bb.setBindGroup(2, pb), this.materialGroup = pb);
        const Vb = wb.program.packGroup;
        Vb && Vb !== this.packGroup && (bb.setBindGroup(ow.g, Vb), this.packGroup = Vb);
        const {
          vertexBuffers: gb,
          vertexOffsets: lb
        } = this;
        for (let Lb = 0; Lb < wb.vertexBuffers.length; Lb++) gb[Lb] === wb.vertexBuffers[Lb] && lb[Lb] === wb.vertexOffsets[Lb] || (bb.setVertexBuffer(Lb, wb.vertexBuffers[Lb], wb.vertexOffsets[Lb]), gb[Lb] = wb.vertexBuffers[Lb], lb[Lb] = wb.vertexOffsets[Lb]);
        wb.indexBuffer && wb.indexBuffer !== this.indexBuffer && (bb.setIndexBuffer(wb.indexBuffer, wb.indexFormat), this.indexBuffer = wb.indexBuffer)
      }
    }
    class bp {
      constructor(bb, wb, Mb, eb) {
        this.modelMeshes = bb, this.Sbb = wb, this.maker = Mb, this.warnOnce = eb, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (bb, wb) => {
          (wb < -1 || wb > 1) && this.warnOnce(`group:${wb}`, `rendering group ${wb} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(bb) {
        this.collectGroup(bb, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(bb, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(bb, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Sbb.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(wp), this.transparentDraws.sort(Mp)
      }
      collectGroup(bb, wb, Mb, eb, Hb) {
        const pb = this.modelMeshes.group(wb),
          Vb = this.Sbb.group(wb),
          gb = 0 === wb ? null === Vb || void 0 === Vb ? void 0 : Vb.opaque : void 0;
        this.collectList(bb, null === pb || void 0 === pb ? void 0 : pb.opaque, gb || null === Vb || void 0 === Vb ? void 0 : Vb.opaque, wb, !1, Mb, Hb), gb && (this.Sbb.drawn += this.maker.bundleDraws(bb, gb, wb)), this.collectList(bb, null === pb || void 0 === pb ? void 0 : pb.alphaTest, void 0, wb, !1, Mb, Hb), this.collectList(bb, null === pb || void 0 === pb ? void 0 : pb.transparent, null === Vb || void 0 === Vb ? void 0 : Vb.transparent, wb, !0, eb, Hb)
      }
      collectList(bb, wb, Mb, eb, Hb, pb, Vb) {
        var gb;
        const lb = pb.length;
        wb && this.maker.pushDraws(bb, wb.units, wb.units.length, eb, Hb, pb, wb.rows), Mb && (this.Sbb.drawn += this.maker.pushDraws(bb, Mb, Mb.length, eb, Hb, pb));
        const Lb = Hb ? null === (gb = this.modelMeshes.group(eb)) || void 0 === gb ? void 0 : gb.text : void 0;
        Lb && this.maker.pushDraws(bb, Lb.units, Lb.units.length, eb, !0, pb, Lb.rows), Vb && ep(pb, lb)
      }
    }

    function wp(bb, wb) {
      return bb.program.id - wb.program.id || bb.material.owner.uniqueId - wb.material.owner.uniqueId
    }

    function Mp(bb, wb) {
      return bb.material.owner.uniqueId - wb.material.owner.uniqueId
    }

    function ep(bb, wb) {
      for (let Mb = wb + 1; Mb < bb.length; Mb++) {
        const eb = bb[Mb];
        let Hb = Mb - 1;
        for (; Hb >= wb && Mp(bb[Hb], eb) > 0; Hb--) bb[Hb + 1] = bb[Hb];
        bb[Hb + 1] = eb
      }
    }
    const Hp = {};

    function pp(bb) {
      return bb.hasThinInstances ? "thin" : bb.ypb || bb._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Vp(bb, wb, Mb) {
      return bb ? (Mb._needUVs = !0, bb.optimizeUVAllocation && (0, Rb.D)(bb.matrix) ? (Mb[`${wb}DIRECTUV`] = bb.uvSet + 1, Mb[`MAINUV${bb.uvSet+1}`] = !0) : Mb[`${wb}DIRECTUV`] = 0, !0) : (Mb[`${wb}DIRECTUV`] = 0, !1)
    }

    function gp(bb) {
      const wb = new Map;
      for (const Mb in bb) {
        if (95 === Mb.charCodeAt(0)) continue;
        const eb = bb[Mb],
          Hb = typeof eb;
        "number" === Hb || "string" === Hb ? wb.set(Mb, String(eb)) : eb && "function" !== Hb && wb.set(Mb, !0)
      }
      return wb
    }

    function lp(bb) {
      const wb = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: Mb
        }
        of bb.features)
        for (const bb in Mb) wb[bb] = Mb[bb];
      return wb
    }

    function Lp(bb) {
      const wb = bb.parts.geometry;
      return null !== wb && void 0 !== wb && wb.live ? wb : null
    }

    function Ip(bb) {
      var wb;
      return null !== (wb = Lp(bb)) && void 0 !== wb ? wb : Hp
    }
    class Op {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = bb, this.warnOnce = wb, this.programWithModel = Mb, this.packFailed = eb, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(bb, wb, Mb, eb, Hb) {
        const pb = wb.owner;
        let Vb = this.drawStates.get(wb);
        if (!Vb) {
          const bb = wb.parts.materials[wb.range];
          if (!bb) return this.warnOnce("model", `${Mb.name} on ${pb.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Vb = {
            defines: lp(bb),
            model: bb,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Hb,
            groupId: eb,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(wb, Vb)
        }
        if (this.programCurrent(Vb, wb, Hb, eb)) return Vb.program;
        const {
          model: gb
        } = Vb, lb = Ip(wb), Lb = this.instanceLayout(pb, Hb), Ib = this.definesBits(pb);
        if (!this.prepareModelDefines(bb, pb, gb, Vb.defines, eb, Hb)) return null;
        Vb.instancing = Hb, Vb.groupId = eb, Vb.modelVersion = gb.version, Vb.geometry = lb, Vb.instanceLayout = Lb, Vb.definesBits = Ib;
        const Ob = function(bb) {
          let wb = "";
          for (const [Mb, eb] of bb) wb += !0 === eb ? `${Mb};` : `${Mb}=${eb};`;
          return wb
        }(gp(Vb.defines));
        return Ob === Vb.definesKey && Vb.packVariant === this.modelPackVariant && Vb.program && !this.packFailed(Vb.program) || (Vb.definesKey = Ob, Vb.packVariant = this.modelPackVariant, Vb.program = this.programWithModel(gb, Vb.defines, Ob)), Vb.program
      }
      programCurrent(bb, wb, Mb, eb) {
        return null !== bb.program && !this.packFailed(bb.program) && bb.instancing === Mb && bb.groupId === eb && this.definesHold(bb, wb, Mb)
      }
      definesHold(bb, wb, Mb) {
        return bb.modelVersion === bb.model.version && bb.geometry === Ip(wb) && bb.instanceLayout === this.instanceLayout(wb.owner, Mb) && bb.definesBits === this.definesBits(wb.owner) && bb.packVariant === this.modelPackVariant
      }
      modelPackKind(bb) {
        var wb;
        return 0 === this.modelPackVariant ? null : null !== (wb = (0, Kb.w)(bb, jb.g.name)) && void 0 !== wb && wb.active ? "placed" : bb.item ? "item" : bb.lifeform ? "lifeform" : bb.box ? "box" : null
      }
      instanceLayout(bb, wb) {
        var Mb, eb, Hb;
        return "thin" === wb ? null !== (Hb = this.resources.Cbb.get(bb)) && void 0 !== Hb ? Hb : null : "instanced" === wb && null !== (Mb = null === (eb = bb._userInstancedBuffersStorage) || void 0 === eb ? void 0 : eb.interleavedKinds) && void 0 !== Mb ? Mb : null
      }
      definesBits(bb) {
        const wb = this.view;
        return (bb.visibility < 1 ? 1 : 0) | (bb.hasVertexAlpha ? 2 : 0) | (bb.applyFog ? 4 : 0) | (bb.useVertexColors ? 8 : 0) | (bb.nonUniformScaling ? 16 : 0) | (wb.fogEnabled && 0 !== wb.fogMode ? 32 : 0) | (wb.lightsEnabled ? 64 : 0) | wb.lightCount << 7
      }
      prepareLightDefines(bb, wb, Mb) {
        let eb = 0;
        if (this.view.lightsEnabled && !wb) {
          const wb = Math.min(Mb, 4);
          for (; eb < this.view.lightCount && (bb[`LIGHT${eb}`] = !0, bb[`LITE_LIGHT${eb}_SLOT`] = eb, eb++, bb._needNormals = !0, eb !== wb););
        }
        for (let Hb = eb; Hb < 4; Hb++) bb[`LIGHT${Hb}`] = !1, bb[`LITE_LIGHT${Hb}_SLOT`] = void 0
      }
      prepareModelDefines(bb, wb, Mb, eb, Hb, pb) {
        const {
          features: Vb
        } = Mb;
        eb._needNormals = !1, eb._needUVs = !1;
        const gb = this.view;
        this.prepareLightDefines(eb, Mb.disableLighting, Mb.maxSimultaneousLights), eb.MAINUV1 = !1, eb.MAINUV2 = !1;
        const lb = Mb.diffuseTexture;
        lb ? (eb._needUVs = !0, eb.DIFFUSE = !0, lb.optimizeUVAllocation && (0, Rb.D)(lb.matrix) ? (eb.DIFFUSEDIRECTUV = lb.uvSet + 1, eb[`MAINUV${lb.uvSet+1}`] = !0) : eb.DIFFUSEDIRECTUV = 0, lb.uvSet > 1 && this.warnOnce(`uvset:${Mb.name}`, `${Mb.name} samples UV set ${lb.uvSet+1}, which is not supported`)) : (eb.DIFFUSE = !1, eb.DIFFUSEDIRECTUV = 0);
        const Lb = Mb.opacityTexture,
          Ib = Mb.emissiveTexture;
        eb.OPACITY = Vp(Lb, "OPACITY", eb), eb.OPACITYRGB = null !== Lb && Lb.getAlphaFromRGB, eb.EMISSIVE = Vp(Ib, "EMISSIVE", eb), (Lb && Lb.uvSet > 1 || Ib && Ib.uvSet > 1) && this.warnOnce(`uvset:${Mb.name}`, `${Mb.name} samples a UV set past 2, which is not supported`);
        const Ob = Mb.reflectionTexture,
          Ub = null !== Ob;
        if (Ub) {
          if (!this.resources.boundTexture(Ob)) return !1;
          eb._needNormals = !0
        }
        eb.REFLECTION = Ub, eb.REFLECTIONMAP_3D = Ub, eb.REFLECTIONMAP_SKYBOX = Ub, eb.REFLECTIONMAP_OPPOSITEZ = Ub && (bb.useRightHandedSystem ? !Ob.invertZ : Ob.invertZ), eb.ROUGHNESS = Ub && Mb.roughness > 0, eb.REFLECTIONOVERALPHA = Ub && Mb.useReflectionOverAlpha, eb.LITE_REFLECTION_LUMINANCE = Ub && "cube" === Ob.source.kind && Ob.source.luminance, (wb.skeleton || wb.morphTargetManager) && this.warnOnce(`skin:${wb.name}`, `${wb.name} has bones or morph targets, which are not supported`), eb.FOG = Mb.fogEnabled && wb.applyFog && gb.fogEnabled && 0 !== gb.fogMode, eb.NONUNIFORMSCALING = wb.nonUniformScaling;
        const {
          visibility: tb,
          hasVertexAlpha: Cb
        } = wb;
        eb.ALPHATEST = (0, Kb.R)(Mb, tb, Cb), eb.ALPHAFROMDIFFUSE = (0, Kb.gb)(Mb), eb.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Mb.transparencyMode, eb.ALPHABLEND = null === Mb.transparencyMode || (0, Kb.O)(Mb, tb, Cb), eb.PREMULTIPLYALPHA = 7 === Mb.alphaMode || 8 === Mb.alphaMode, eb.EMISSIVEASILLUMINATION = Mb.useEmissiveAsIllumination, eb.LINKEMISSIVEWITHDIFFUSE = Mb.linkEmissiveWithDiffuse, eb.TWOSIDEDLIGHTING = !Mb.backFaceCulling && Mb.twoSidedLighting, eb.INSTANCES = "none" !== pb, eb.THIN_INSTANCES = "thin" === pb, eb.LITE_FRONT_LAYER = Hb >= 1;
        for (const {
            feature: xb,
            state: jb,
            active: Kb
          }
          of Vb) {
          var Eb, Fb;
          if (Kb) null === (Eb = (Fb = (0, Aw.e)(xb)).prepareDefinesBeforeAttributes) || void 0 === Eb || Eb.call(Fb, jb, eb, bb, wb)
        }
        this.modelPackKind(Mb) && (eb._needNormals = !0), eb.NORMAL = eb._needNormals && wb.isVerticesDataPresent("normal"), eb.UV1 = eb._needUVs && wb.isVerticesDataPresent("uv"), eb.UV2 = eb._needUVs && wb.isVerticesDataPresent("uv2");
        const Bb = wb.useVertexColors && wb.isVerticesDataPresent("color");
        eb.VERTEXCOLOR = Bb, eb.VERTEXALPHA = wb.hasVertexAlpha && Bb, eb.INSTANCESCOLOR = "none" !== pb && wb.isVerticesDataPresent("instanceColor");
        for (const {
            feature: xb,
            state: jb,
            active: Kb
          }
          of Vb) {
          var sb, mb;
          if (Kb) null === (sb = (mb = (0, Aw.e)(xb)).prepareDefines) || void 0 === sb || sb.call(mb, jb, eb, bb, wb, Mb)
        }
        const hb = bb.DC();
        for (const {
            feature: xb,
            state: jb,
            active: Kb
          }
          of Vb) {
          var zb, Xb;
          if (Kb && !1 === (null === (zb = (Xb = (0, Aw.e)(xb)).isReadyForSubMesh) || void 0 === zb ? void 0 : zb.call(Xb, jb, eb, bb, hb))) return !1
        }
        return !0
      }
    }

    function Up(bb, wb, Mb) {
      return bb.codeVersion !== wb.version && function(bb, wb) {
        const Mb = [],
          eb = [];
        for (const {
            feature: Ub,
            state: tb,
            active: Cb
          }
          of wb.features) {
          var Hb, pb, Vb, gb;
          if (Cb) tp(null === (Hb = (pb = (0, Aw.e)(Ub)).getCustomCode) || void 0 === Hb ? void 0 : Hb.call(pb, tb, "vertex", Xb.b.WGSL), Mb), tp(null === (Vb = (gb = (0, Aw.e)(Ub)).getCustomCode) || void 0 === Vb ? void 0 : Vb.call(gb, tb, "fragment", Xb.b.WGSL), eb)
        }
        const lb = [];
        for (const {
            feature: Ub,
            state: tb
          }
          of wb.features) {
          var Lb, Ib;
          const bb = null === (Lb = (Ib = (0, Aw.e)(Ub)).getUniforms) || void 0 === Lb ? void 0 : Lb.call(Ib, tb, Xb.b.WGSL);
          for (const wb of null !== (Ob = null === bb || void 0 === bb ? void 0 : bb.ubo) && void 0 !== Ob ? Ob : []) {
            var Ob;
            wb.size && wb.type && lb.push({
              name: wb.name,
              type: wb.type,
              arraySize: wb.arraySize
            })
          }
        }
        bb.vertexCode = Mb, bb.fragmentCode = eb, bb.pluginUniforms = lb, bb.codeKey = JSON.stringify([Mb, eb, lb]), bb.codeVersion = wb.version
      }(bb, wb), `${Mb}#${bb.codeKey}`
    }

    function tp(bb, wb) {
      if (bb)
        for (const Mb in bb) bb[Mb] && wb.push([Mb, bb[Mb]])
    }
    const Cp = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Ep {
      constructor(bb) {
        this.warnOnce = bb, this.states = new Map
      }
      renderState(bb, wb, Mb, eb) {
        var Hb;
        let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Vb = null !== (Hb = bb.sideOrientation) && void 0 !== Hb ? Hb : wb.sideOrientation;
        wb._getWorldMatrixDeterminant() < 0 && (Vb = 0 === Vb ? 1 : 0);
        const gb = "triangle-list" === pb,
          lb = Mb ? bb.alphaMode : 0,
          Lb = (!Mb || (0 === lb || bb.forceDepthWrite)) && !bb.disableDepthWrite,
          Ib = gb && bb.backFaceCulling ? bb.cullBackFaces ? "back" : "front" : "none",
          Ob = gb && 0 !== Vb ? "ccw" : "cw",
          Ub = bb.depthFunction,
          tb = gb ? bb.zOffset : 0,
          Cb = gb ? bb.zOffsetUnits : 0,
          Eb = !bb.disableColorWrite;
        return eb && eb.alphaMode === lb && eb.depthWrite === Lb && eb.depthFunction === Ub && eb.cullMode === Ib && eb.frontFace === Ob && eb.zOffset === tb && eb.zOffsetUnits === Cb && eb.colourWrite === Eb && eb.topology === pb ? eb : this.stateFor(lb, Lb, Ub, Ib, Ob, tb, Cb, Eb, pb)
      }
      stateFor(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = `${bb}|${wb}|${Mb}|${eb}|${Hb}|${pb}|${Vb}|${gb}|${lb}`;
        let Ib = this.states.get(Lb);
        if (!Ib) {
          var Ob;
          const Ub = bb ? pw(bb) : null;
          bb && !Ub && this.warnOnce(`alpha:${bb}`, `alpha mode ${bb} is not supported`), Ib = {
            key: Lb,
            alphaMode: bb,
            depthFunction: Mb,
            zOffset: pb,
            zOffsetUnits: Vb,
            topology: lb,
            blend: Ub,
            depthWrite: wb,
            depthCompare: Mb && null !== (Ob = Cp.get(Mb)) && void 0 !== Ob ? Ob : null,
            cullMode: eb,
            frontFace: Hb,
            depthBias: -Vb,
            depthBiasSlopeScale: -pb,
            colourWrite: gb
          }, this.states.set(Lb, Ib)
        }
        return Ib
      }
    }
    var Fp = Mb(38560);

    function Bp(bb) {
      if (!bb.frozen) return -1;
      let wb = bb.version;
      for (const {
          feature: Mb,
          state: eb,
          active: Hb
        }
        of bb.features) {
        if (!Hb || !Mb.bind) continue;
        const bb = (0, Aw.e)(Mb).uniformsVersion;
        if (!bb) return -1;
        wb += bb(eb)
      }
      return wb
    }
    class sp {
      constructor(bb, wb, Mb) {
        this.slots = bb, this.data = wb, this.textures = Mb, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(bb, wb) {
        this.write4(bb, wb, 0, 0, 0, 1)
      }
      updateFloat2(bb, wb, Mb) {
        this.write4(bb, wb, Mb, 0, 0, 2)
      }
      updateFloat3(bb, wb, Mb, eb) {
        this.write4(bb, wb, Mb, eb, 0, 3)
      }
      updateFloat4(bb, wb, Mb, eb, Hb) {
        this.write4(bb, wb, Mb, eb, Hb, 4)
      }
      updateVector3(bb, wb) {
        this.write4(bb, wb.x, wb.y, wb.z, 0, 3)
      }
      updateVector4(bb, wb) {
        this.write4(bb, wb.x, wb.y, wb.z, wb.w, 4)
      }
      updateColor3(bb, wb) {
        this.write4(bb, wb.r, wb.g, wb.b, 0, 3)
      }
      updateColor4(bb, wb, Mb) {
        this.write4(bb, wb.r, wb.g, wb.b, Mb, 4)
      }
      updateFloatsFrom(bb, wb, Mb, eb) {
        const Hb = this.slots.get(bb);
        if (!Hb) return;
        const pb = this.data,
          Vb = Hb.offset;
        for (let gb = 0; gb < eb; gb++) pb[Vb + gb] = wb[Mb + gb]
      }
      updateFloat3TimesFloats(bb, wb, Mb, eb) {
        const Hb = this.slots.get(bb);
        if (!Hb) return;
        const pb = this.data,
          Vb = Hb.offset;
        pb[Vb] = wb[Mb] * eb[0], pb[Vb + 1] = wb[Mb + 1] * eb[1], pb[Vb + 2] = wb[Mb + 2] * eb[2]
      }
      kbb(bb, wb) {
        const Mb = this.slots.get(bb);
        Mb && this.data.set(wb.m, Mb.offset)
      }
      updateMatrixFloats(bb, wb) {
        const Mb = this.slots.get(bb);
        Mb && this.data.set(wb, Mb.offset)
      }
      updateFloatArray(bb, wb) {
        const Mb = this.slots.get(bb);
        if (!Mb) return;
        if (!Mb.arraySize || Mb.stride === Mb.floats) return void this.data.set(wb, Mb.offset);
        const eb = Math.min(wb.length, Mb.floats * Mb.arraySize);
        for (let Hb = 0; Hb < eb; Hb++) this.data[Mb.offset + Math.floor(Hb / Mb.floats) * Mb.stride + Hb % Mb.floats] = wb[Hb]
      }
      updateArray(bb, wb) {
        this.updateFloatArray(bb, wb)
      }
      setTexture(bb, wb) {
        this.textures.set(bb, wb), this.expected.delete(bb)
      }
      expectTexture(bb) {
        this.textures.set(bb, null), this.expected.add(bb)
      }
      write4(bb, wb, Mb, eb, Hb, pb) {
        const Vb = this.slots.get(bb);
        if (!Vb) return;
        const gb = this.data,
          lb = Vb.offset;
        gb[lb] = wb, pb > 1 && (gb[lb + 1] = Mb), pb > 2 && (gb[lb + 2] = eb), pb > 3 && (gb[lb + 3] = Hb)
      }
    }

    function mp(bb, wb) {
      const Mb = LH,
        eb = Fp.h,
        Hb = bb.lights,
        pb = Math.min(bb.lightCount, 8);
      for (let Vb = 0; Vb < pb; Vb++) {
        const bb = Mb.lights + Vb * Mb.lightStride,
          pb = Vb * Fp.c;
        wb[bb] = Hb[pb + eb.vector], wb[bb + 1] = Hb[pb + eb.vector + 1], wb[bb + 2] = Hb[pb + eb.vector + 2], wb[bb + 3] = Hb[pb + eb.kind] === Fp.f.directional ? 1 : 0, wb[bb + 4] = Hb[pb + eb.diffuse], wb[bb + 5] = Hb[pb + eb.diffuse + 1], wb[bb + 6] = Hb[pb + eb.diffuse + 2], wb[bb + 7] = Hb[pb + eb.range], wb[bb + 8] = Hb[pb + eb.specular], wb[bb + 9] = Hb[pb + eb.specular + 1], wb[bb + 10] = Hb[pb + eb.specular + 2], wb[bb + 11] = Hb[pb + eb.range]
      }
      wb[Mb.fogInfos] = bb.fogMode, wb[Mb.fogInfos + 1] = bb.fogStart, wb[Mb.fogInfos + 2] = bb.fogEnd, wb[Mb.fogInfos + 3] = bb.fogDensity, wb[Mb.fogColour] = bb.fogColour[0], wb[Mb.fogColour + 1] = bb.fogColour[1], wb[Mb.fogColour + 2] = bb.fogColour[2], wb[Mb.outputHeight] = bb.renderHeight, wb[Mb.animTick] = bb.animTick, wb[Mb.timeMs] = bb.timeMs
    }
    class hp {
      constructor(bb) {
        this.instancesOf = bb
      }
      refreshModelUniforms(bb, wb, Mb, eb) {
        const Hb = Bp(Mb);
        if (Hb >= 0 && Hb === wb.heldVersion && wb.textures.get("diffuseSampler") === Mb.diffuseTexture && wb.textures.get("reflectionCubeSampler") === Mb.reflectionTexture && wb.textures.get("opacitySampler") === Mb.opacityTexture && wb.textures.get("emissiveSampler") === Mb.emissiveTexture) return !0;
        if (Hb < 0)
          for (const pb of this.instancesOf(Mb)) pb.heldVersion = -1;
        return this.writeModelUniforms(bb, wb, Mb, eb), wb.heldVersion = Hb, !1
      }
      writeModelUniforms(bb, wb, Mb, eb) {
        const {
          ubo: Hb
        } = wb, pb = Mb.diffuseTexture, Vb = Mb.diffuseColor;
        Hb.updateFloat4("vDiffuseColor", Vb[0], Vb[1], Vb[2], Mb.alpha), pb && (Hb.updateFloat2("vDiffuseInfos", pb.uvSet, pb.level), Hb.updateMatrixFloats("diffuseMatrix", pb.matrix)), Hb.updateFloat("alphaCutOff", Mb.alphaCutOff), Hb.updateFloatsFrom("vEmissiveColor", Mb.emissiveColor, 0, 3), Hb.updateFloat3TimesFloats("vAmbientColor", eb.ambientColour, 0, Mb.ambientColor);
        const gb = Mb.specularColor;
        Hb.updateFloat4("vSpecularColor", gb[0], gb[1], gb[2], Mb.specularPower), Hb.setTexture("diffuseSampler", pb);
        const lb = Mb.opacityTexture;
        lb && (Hb.updateFloat2("vOpacityInfos", lb.uvSet, lb.level), Hb.updateMatrixFloats("opacityMatrix", lb.matrix)), Hb.setTexture("opacitySampler", lb);
        const Lb = Mb.emissiveTexture;
        Lb && (Hb.updateFloat2("vEmissiveInfos", Lb.uvSet, Lb.level), Hb.updateMatrixFloats("emissiveMatrix", Lb.matrix)), Hb.setTexture("emissiveSampler", Lb);
        const Ib = Mb.reflectionTexture;
        Ib && Hb.updateMatrixFloats("reflectionMatrix", Ib.matrix), Hb.updateFloat2("vReflectionInfos", Ib ? Ib.level * bb.iblIntensity : 0, Mb.roughness), Hb.setTexture("reflectionCubeSampler", Ib);
        const Ob = bb.DC();
        for (const {
            feature: Cb,
            state: Eb,
            active: Fb
          }
          of Mb.features) {
          var Ub, tb;
          if (Fb) null === (Ub = (tb = (0, Aw.e)(Cb)).bind) || void 0 === Ub || Ub.call(tb, Eb, Hb, bb, Ob)
        }
      }
    }

    function zp(bb) {
      const wb = bb.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(wb) ? "u32" : /i32|^vec\di$/.test(wb) ? "i32" : "f32"
    }

    function Xp(bb, wb) {
      const Mb = bb.getSize(),
        eb = zp(wb),
        Hb = bb => 4 === Mb ? `${bb}x4` : 2 === Mb ? `${bb}x2` : null;
      if ("f32" === eb) {
        if (5126 === bb.type) return 1 === Mb ? "float32" : Mb >= 2 && Mb <= 4 ? `float32x${Mb}` : null;
        if (!bb.normalized) return null;
        switch (bb.type) {
          case 5121:
            return Hb("unorm8");
          case 5120:
            return Hb("snorm8");
          case 5123:
            return Hb("unorm16");
          case 5122:
            return Hb("snorm16")
        }
        return null
      }
      const pb = "u32" === eb ? "uint" : "sint";
      switch (bb.type) {
        case 5125:
        case 5124:
          return 1 === Mb ? `${pb}32` : Mb <= 4 ? `${pb}32x${Mb}` : null;
        case 5121:
        case 5120:
          return Hb(`${pb}8`);
        case 5123:
        case 5122:
          return Hb(`${pb}16`)
      }
      return null
    }

    function xp(bb) {
      var wb;
      const Mb = /(8|16|32)(?:x(\d))?$/.exec(bb);
      return Mb ? Number(Mb[1]) / 8 * Number(null !== (wb = Mb[2]) && void 0 !== wb ? wb : 1) : 4
    }
    class jp {
      constructor(bb, wb, Mb) {
        this.resources = bb, this.limits = wb, this.warnOnce = Mb, this.layouts = new Map
      }
      resolveInputs(bb, wb, Mb, eb) {
        const Hb = [],
          pb = Mb.program.attributes,
          Vb = [];
        for (let Ib = 0; Ib < pb.length; Ib++) {
          const Mb = pb[Ib],
            gb = Mb.optional ? null : this.resources.vertexInput(bb, Mb.name, eb);
          if (!gb) {
            const bb = zp(Mb.type),
              wb = "u32" === bb ? "uint32x4" : "i32" === bb ? "sint32x4" : "float32x4";
            Vb.push(null);
            const eb = Hb.find((bb => null === bb.data));
            eb ? eb.attributes.push({
              shaderLocation: Ib,
              offset: 0,
              format: wb
            }) : Hb.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Ib,
                offset: 0,
                format: wb
              }]
            });
            continue
          }
          const lb = gb.getBuffer();
          Vb.push(gb);
          const Lb = Xp(gb, Mb.type);
          if (!Lb) return this.warnOnce(`format:${wb}:${Mb.name}`, `${wb}'s ${Mb.name} (type ${gb.type}, size ${gb.getSize()}) has no WebGPU vertex format`), null;
          const Ob = gb.getIsInstanced() ? "instance" : "vertex",
            Ub = gb.byteStride,
            tb = xp(Lb),
            Cb = Hb.find((bb => bb.data === lb && bb.stride === Ub && bb.step === Ob && gb.byteOffset >= bb.base && gb.byteOffset - bb.base + tb <= Ub));
          Cb ? Cb.attributes.push({
            shaderLocation: Ib,
            offset: gb.byteOffset - Cb.base,
            format: Lb
          }) : Hb.push({
            data: lb,
            base: gb.byteOffset,
            stride: Ub,
            step: Ob,
            attributes: [{
              shaderLocation: Ib,
              offset: 0,
              format: Lb
            }]
          })
        }
        if (Hb.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${wb}`, `${wb} needs ${Hb.length} vertex buffers`), null;
        let gb = "";
        for (const Ib of Hb) {
          gb += `${Ib.stride}${"instance"===Ib.step?"i":"v"}`;
          for (const bb of Ib.attributes) gb += `,${bb.shaderLocation}:${bb.offset}:${bb.format}`;
          gb += ";"
        }
        let lb = this.layouts.get(gb);
        lb || (lb = {
          key: gb,
          buffers: Hb.map((bb => ({
            arrayStride: bb.stride,
            stepMode: bb.step,
            attributes: bb.attributes
          }))),
          instanceEnds: Hb.map((bb => {
            let wb = -1;
            if ("instance" === bb.step)
              for (const Mb of bb.attributes) wb = Math.max(wb, Mb.offset + xp(Mb.format));
            return wb
          }))
        }, this.layouts.set(gb, lb));
        const Lb = Hb.map((bb => bb.base));
        return {
          program: Mb,
          sources: Vb,
          layout: lb,
          slotData: Hb.map((bb => bb.data)),
          Qbb: Lb,
          buffers: [],
          offsets: Lb,
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

    function Kp(bb, wb, Mb, eb) {
      const Hb = wb.program.program.attributes;
      for (let pb = 0; pb < Hb.length; pb++) {
        if ((Hb[pb].optional ? null : Mb.vertexInput(bb, Hb[pb].name, eb)) !== wb.sources[pb]) return !1
      }
      return !0
    }
    const rp = 64;
    class Rp {
      constructor(bb, wb, Mb, eb) {
        this.device = bb, this.layout = wb, this.frameBuffer = Mb, this.label = eb, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(bb) {
        if (bb * rp <= this.data.length) return !1;
        let wb = 2 * this.data.length;
        for (; bb * rp > wb;) wb *= 2;
        const Mb = new Float32Array(wb);
        return Mb.set(this.data), this.data = Mb, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Hb = this.data,
          pb = bb * rp;
        let Vb = Hb[pb + 16] !== Mb;
        for (let gb = 0; gb < 16 && !Vb; gb++) Vb = Hb[pb + gb] !== wb[eb + gb];
        if (Vb) {
          for (let bb = 0; bb < 16; bb++) Hb[pb + bb] = wb[eb + bb];
          Hb[pb + 16] = Mb
        }
        return Vb
      }
      upload(bb, wb) {
        this.device.queue.writeBuffer(this.buffer, bb * IH, this.data, bb * rp, (wb - bb) * rp)
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

    function Dp(bb) {
      return bb.gpu[Rb.g.lite] ??= bb.materials.map(((wb, Mb) => ({
        parts: bb,
        range: Mb,
        owner: bb.owner
      })))
    }

    function cp(bb) {
      var wb, Mb, eb;
      return null !== (wb = null !== (Mb = null === (eb = bb.parts.materials[bb.range]) || void 0 === eb ? void 0 : eb.mirror) && void 0 !== Mb ? Mb : bb.owner.material) && void 0 !== wb ? wb : null
    }
    const Yp = ["opaque", "alphaTest", "transparent", "text"];

    function Zp(bb) {
      for (const wb of Yp) bb[wb].units.length = 0, bb[wb].rows.length = 0
    }
    class fp {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, fw.d)("Lite: ")
      }
      attach(bb, wb) {
        this.model = bb, this.mirror = wb
      }
      get worlds() {
        return this.model.nodes.XO
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(bb) {
        return this.groups.get(bb)
      }
      forEachGroup(bb) {
        this.groups.forEach(bb)
      }
      forEachSelected(bb) {
        for (const [wb, Mb] of this.groups)
          for (const eb of Yp)
            for (const Hb of Mb[eb].units) bb(Hb.owner, "text" === eb ? "transparent" : eb, wb)
      }
      select(bb, wb) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(Zp);
        const {
          model: Mb,
          mirror: eb
        } = this;
        if (!Mb || !eb || !bb) return;
        this.rows.length < Mb.nodes.qO && (this.rows = new Int32Array(Mb.nodes.qO));
        const Hb = this.rows,
          pb = Mb.meshes;
        for (let gb = 0; gb < pb.looseCount; gb++) {
          const bb = pb.loose[gb],
            Mb = eb.nodes[bb];
          Mb && !Mb.isBlocked && Mb.isEnabled() && !Mb.CO.hasAZeroComponent && pb.selects(bb, wb.frustum) && (this.activate(Mb, bb), this.selectedCount++)
        }
        const Vb = pb.selectTextPlanes(wb.frustum, Hb);
        for (let gb = 0; gb < Vb; gb++) {
          const wb = Hb[gb],
            pb = eb.nodes[wb],
            Vb = Mb.meshes.parts[wb];
          if (!pb.isVisible || !(pb.visibility > 0) || 0 === (pb.layerMask & bb.layerMask) || !Vb) continue;
          const lb = this.groupOf(Mb.meshes.layer[wb]).text;
          for (const bb of Dp(Vb)) lb.units.push(bb), lb.rows.push(wb);
          this.selectedCount++
        }
      }
      instanceBatch(bb) {
        const wb = this.batchOf(bb);
        return wb.dispatched || (wb.dispatched = wb.renderSelf = !0, wb.row = this.rowOf(bb)), wb
      }
      rowOf(bb) {
        return bb.row
      }
      activate(bb, wb) {
        if (!bb.QJ) {
          const Mb = bb;
          if (Mb.ypb) {
            const bb = this.batchOf(Mb);
            bb.dispatched = !0, bb.renderSelf = !0, bb.row = wb
          }
          return void this.dispatch(Mb, wb, wb)
        }
        const Mb = bb,
          eb = Mb.opb;
        if (eb._getWorldMatrixDeterminant() >= 0 !== Mb._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${eb.name}`, `A mirrored InstancedMesh of ${eb.name} is not drawn yet`);
        const Hb = this.batchOf(eb);
        Hb.instances.push(Mb), Hb.rows.push(wb), Hb.dispatched || (Hb.dispatched = !0, this.dispatch(eb, wb, this.rowOf(eb)))
      }
      batchOf(bb) {
        let wb = this.batches.get(bb);
        return wb || (wb = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(bb, wb)), wb.frame !== this.frame && (wb.frame = this.frame, wb.dispatched = !1, wb.renderSelf = !1, wb.instances.length = 0, wb.rows.length = 0), wb
      }
      dispatch(bb, wb, Mb) {
        const {
          layer: eb,
          parts: Hb
        } = this.model.meshes;
        if (!Hb[wb]) return;
        const pb = this.groupOf(eb[wb]),
          Vb = bb;
        for (const gb of Dp(Hb[wb])) {
          const bb = cp(gb);
          if (!bb) continue;
          const wb = bb.needAlphaBlendingForMesh(Vb) ? pb.transparent : bb.needAlphaTestingForMesh(Vb) ? pb.alphaTest : pb.opaque;
          wb.units.push(gb), wb.rows.push(Mb)
        }
      }
      groupOf(bb) {
        let wb = this.groups.get(bb);
        return wb || (wb = {
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
        }, this.groups.set(bb, wb)), wb
      }
    }

    function Ap(bb) {
      bb.opaque.length = 0, bb.transparent.length = 0
    }
    class Wp {
      constructor() {
        this.dg = new Map, this.enabled = [], this.groups = new Map, this.nI = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(bb) {
        if (this.dg.has(bb)) return;
        const wb = {
          mesh: bb,
          observer: bb.onEffectiveEnabledStateChangedObservable.add((bb => {
            this.Bx(wb, bb)
          })),
          index: -1,
          steady: null
        };
        this.dg.set(bb, wb), this.Bx(wb, bb.isEnabled())
      }
      remove(bb) {
        const wb = this.dg.get(bb);
        wb && (wb.observer.remove(!0), this.Bx(wb, !1), this.dg.delete(bb))
      }
      dropSteady() {
        for (const bb of this.dg.values()) bb.steady = null
      }
      base(bb) {
        return this.dg.get(bb)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          dg: this.dg.size
        }
      }
      forEachSelected(bb) {
        for (const [wb, Mb] of this.groups) {
          for (const eb of Mb.opaque) bb(eb.owner, "opaque", wb);
          for (const eb of Mb.transparent) bb(eb.owner, "transparent", wb)
        }
        for (const wb of this.nI) bb(wb.mesh, "opaque", 0)
      }
      group(bb) {
        return this.groups.get(bb)
      }
      forEachGroup(bb) {
        this.groups.forEach(bb)
      }
      select(bb, wb) {
        if (this.drawn = 0, this.selected = 0, this.nI.length = 0, this.groups.forEach(Ap), !bb) return;
        const Mb = this.enabled;
        for (let eb = 0; eb < Mb.length; eb++) {
          const Hb = Mb[eb];
          if (Hb.steady && wb(Hb, bb)) {
            this.selected++, this.nI.push(Hb);
            continue
          }
          const pb = Hb.mesh;
          if (pb.isBlocked || pb.CO.hasAZeroComponent) continue;
          if (!pb.isVisible || pb.visibility <= 0 || 0 === (pb.layerMask & bb.layerMask)) continue;
          if (pb.ypb) {
            this.warned.has(pb.name) || (this.warned.add(pb.name), console.warn(`Lite: thin instance base ${pb.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Vb
          } = pb;
          if (!Vb) continue;
          pb.computeWorldMatrix(), this.selected++;
          const gb = this.listsFor(pb.renderingGroupId);
          for (const bb of Dp(Vb)) {
            const wb = cp(bb);
            wb && (wb.needAlphaBlendingForMesh(pb) ? gb.transparent.push(bb) : gb.opaque.push(bb))
          }
        }
      }
      Bx(bb, wb) {
        if (wb === bb.index >= 0) return;
        bb.steady = null;
        const Mb = this.enabled;
        if (wb) bb.index = Mb.length, Mb.push(bb);
        else {
          const wb = Mb.pop();
          wb !== bb && (Mb[bb.index] = wb, wb.index = bb.index), bb.index = -1
        }
      }
      listsFor(bb) {
        let wb = this.groups.get(bb);
        return wb || (wb = {
          opaque: [],
          transparent: []
        }, this.groups.set(bb, wb)), wb
      }
    }
    var Jp = Mb(41057);
    class Sp {
      constructor() {
        this.bundle = null, this.stale = !0, this.dg = new Set
      }
    }
    class Np {
      constructor(bb, wb, Mb) {
        this.device = bb, this.slots = wb, this.host = Mb, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Sp, this.zW = new Sp, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new kH, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = bb => {
          bb.seen !== this.frame && (bb.draw && (bb.draw = null, this.args[5 * bb.slot + 1] = 0, this.argsDirty = !0, this.zW.stale ||= bb.zW), this.frame - bb.seen > 120 && (this.records.delete(bb.unit), this.freeSlots.push(bb.slot), bb.recorded && (this.bundleOf(bb).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(bb) {
          var wb, Mb;
          let eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (wb = null === (Mb = globalThis.navigator) || void 0 === Mb ? void 0 : Mb.userAgent) && void 0 !== wb ? wb : "";
          const Hb = bb.adapterInfo;
          return "intel" === (null === Hb || void 0 === Hb ? void 0 : Hb.vendor) && "gen-12lp" === Hb.architecture && eb.includes("Windows")
        }(bb), (0, Jp.N)(this.direct)
      }
      jR() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Jp.N)(this.directThisFrame)
      }
      add(bb, wb, Mb, eb) {
        let Hb = this.records.get(bb);
        return Hb || (Hb = this.createRecord(bb), this.records.set(bb, Hb)), Hb.recorded && Qp(Hb, wb) || (this.bundleOf(Hb).stale = !0), this.place(Hb, wb, Mb, eb), Hb
      }
      bundleOf(bb) {
        return bb.zW ? this.zW : this.main
      }
      addAgain(bb, wb, Mb, eb) {
        bb.recorded || (this.bundleOf(bb).stale = !0), this.place(bb, wb, Mb, eb)
      }
      place(bb, wb, Mb, eb) {
        bb.seen = this.frame, bb.zW && null === bb.draw && (this.zW.stale = !0), bb.draw = wb, this.drawn++, Mb && this.slots.write(bb.slot, Mb, eb) && (this.slotsFrom = Math.min(this.slotsFrom, bb.slot), this.slotsTo = Math.max(this.slotsTo, bb.slot));
        const Hb = this.args,
          pb = 5 * bb.slot;
        Hb[pb] === wb.count && Hb[pb + 1] === wb.instances && Hb[pb + 2] === wb.first || (Hb[pb] = wb.count, Hb[pb + 1] = wb.instances, Hb[pb + 2] = wb.first, this.argsDirty = !0, this.zW.stale ||= bb.zW)
      }
      tO() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(bb) {
        for (const wb of this.records.values()) wb.draw && wb.seen === this.frame && !wb.zW && bb(wb.draw, this.slots.data, wb.slot * IH / 4)
      }
      resourceDestroyed(bb) {
        this.main.stale ||= this.main.dg.has(bb), this.zW.stale ||= this.zW.dg.has(bb)
      }
      execute(bb, wb, Mb) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(bb, wb, Mb, "direct"), this.drawn;
        const eb = this.host.sceneGroup(wb);
        if (!eb) return this.main.bundle = null, this.zW.bundle = null, this.recordedSceneGroup = null, this.encode(bb, wb, Mb, "direct"), this.drawn;
        this.recordedTarget === Mb && this.recordedSceneGroup === eb || (this.recordedTarget = Mb, this.recordedSceneGroup = eb, this.main.stale = !0, this.zW.stale = !0);
        const Hb = this.main,
          pb = this.zW;
        let Vb = !1;
        !Hb.stale && Hb.bundle || (Hb.bundle = this.record(wb, Mb, eb, "indirect"), Vb = !0);
        const gb = (0, Jp.m)();
        return (pb.stale || this.rangedEpoch !== gb) && (this.rangedEpoch = gb, pb.bundle = this.drawsRanged() ? this.record(wb, Mb, eb, "zW") : this.noRangedBundle(), Vb = !0), Vb && (this.bundles = pb.bundle ? [Hb.bundle, pb.bundle] : [Hb.bundle]), bb.executeBundles(this.bundles), bb.setBindGroup(0, eb), this.drawn
      }
      record(bb, wb, Mb, eb) {
        const Hb = this.device.createRenderBundleEncoder({
          label: "zW" === eb ? "thin-bases-ranged" : "thin-bases",
          colorFormats: bb._colorFormat ? [bb._colorFormat] : [],
          depthStencilFormat: bb._depthStencilFormat,
          sampleCount: bb._sampleCount
        });
        return Hb.setBindGroup(0, Mb), this.encode(Hb, bb, wb, eb), Hb.finish()
      }
      noRangedBundle() {
        for (const bb of this.records.values()) bb.zW && (bb.recorded = !1);
        return this.zW.dg.clear(), this.zW.stale = !1, null
      }
      drawsRanged() {
        for (const bb of this.records.values())
          if (bb.zW && bb.draw) return !0;
        return !1
      }
      encode(bb, wb, Mb, eb) {
        const Hb = [];
        for (const lb of this.records.values()) "direct" !== eb && lb.zW !== ("zW" === eb) || (lb.recorded = !1, lb.draw && Hb.push(lb));
        Hb.sort(Gp);
        const pb = "direct" === eb ? null : "zW" === eb ? this.zW : this.main;
        null === pb || void 0 === pb || pb.dg.clear(), this.binder.reset();
        let Vb = !1;
        for (const lb of Hb) {
          var gb;
          const Hb = lb.draw,
            Lb = this.host.pipelineFor(Hb, wb, Mb);
          if (!Lb) {
            this.host.pipelineCompiling(Hb, Mb) ? Vb = !0 : pb && this.keep(lb, Hb, pb.dg);
            continue
          }
          let Ib;
          if (lb.zW && "indirect" !== eb) {
            const bb = lb.unit.owner;
            Ib = "direct" === eb && (0, Jp.y)(bb) || (0, Jp.p)(bb) || void 0
          }
          if (pb && this.keep(lb, Hb, pb.dg), 0 === (null === (gb = Ib) || void 0 === gb ? void 0 : gb.count)) continue;
          this.binder.bind(bb, Hb, Lb, this.slots.bindGroup, lb.slot * IH);
          const Ob = 5 * lb.slot;
          if ("indirect" === eb) {
            Hb.indexBuffer ? bb.drawIndexedIndirect(this.argsBuffer, 4 * Ob) : bb.drawIndirect(this.argsBuffer, 4 * Ob);
            continue
          }
          const Ub = this.args;
          Ib ? vp(bb, null !== Hb.indexBuffer, Ub, Ob, Ib) : Hb.indexBuffer ? bb.drawIndexed(Ub[Ob], Ub[Ob + 1], Ub[Ob + 2], 0, 0) : bb.draw(Ub[Ob], Ub[Ob + 1], Ub[Ob + 2], 0)
        }
        pb && (pb.stale = Vb)
      }
      keep(bb, wb, Mb) {
        bb.recorded = !0, bb.pipelineKey = wb.pipelineKey, bb.materialGroup = wb.material.bindGroup, bb.vertexBuffers.length = 0, bb.vertexBuffers.push(...wb.vertexBuffers), bb.vertexOffsets = wb.vertexOffsets, bb.indexBuffer = wb.indexBuffer, bb.indexFormat = wb.indexFormat;
        for (const eb of wb.vertexBuffers) Mb.add(eb);
        wb.indexBuffer && Mb.add(wb.indexBuffer), Mb.add(wb.material.buffer);
        for (const eb of wb.material.bound) eb && Mb.add(eb)
      }
      createRecord(bb) {
        let wb = this.freeSlots.pop();
        return void 0 === wb && (wb = this.slotCount++, this.grow()), {
          unit: bb,
          slot: wb,
          zW: void 0 !== (0, Jp.p)(bb.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.zW.stale = !0), 5 * this.slotCount > this.args.length) {
          const bb = new Uint32Array(2 * this.args.length);
          bb.set(this.args), this.args = bb, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function vp(bb, wb, Mb, eb, Hb) {
      const pb = Mb[eb + 1],
        Vb = Hb.data;
      for (let gb = 0; gb < Hb.count; gb++) {
        const Hb = Math.min(Vb[2 * gb], pb),
          lb = Math.min(Vb[2 * gb + 1], pb - Hb);
        0 !== lb && (wb ? bb.drawIndexed(Mb[eb], lb, Mb[eb + 2], 0, Hb) : bb.draw(Mb[eb], lb, Mb[eb + 2], Hb))
      }
    }

    function Qp(bb, wb) {
      if (bb.pipelineKey !== wb.pipelineKey || bb.materialGroup !== wb.material.bindGroup || bb.indexBuffer !== wb.indexBuffer || bb.indexFormat !== wb.indexFormat || bb.vertexOffsets !== wb.vertexOffsets || bb.vertexBuffers.length !== wb.vertexBuffers.length) return !1;
      for (let Mb = 0; Mb < bb.vertexBuffers.length; Mb++)
        if (bb.vertexBuffers[Mb] !== wb.vertexBuffers[Mb]) return !1;
      return !0
    }

    function Gp(bb, wb) {
      return wp(bb.draw, wb.draw)
    }
    const qp = new WeakMap,
      ap = {
        depth: !1,
        sunShadow: !1
      };

    function ip(bb, wb) {
      let Mb = qp.get(bb);
      Mb || (Mb = new Map, qp.set(bb, Mb));
      const eb = `${wb.depth?"-depth":""}${wb.sunShadow?"-shadow":""}${wb.shadowMask?"-mask":""}`;
      let Hb = Mb.get(eb);
      if (!Hb) {
        const pb = [{
          binding: ow.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: ow.j
          }
        }, {
          binding: ow.x,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        wb.depth && pb.push({
          binding: ow.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), wb.sunShadow && pb.push(... function() {
          const bb = GPUShaderStage.FRAGMENT,
            wb = ow.u;
          return [{
            binding: wb.uniform,
            visibility: bb,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: wb.GU,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: wb.special,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: wb.volume,
            visibility: bb,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: wb.sampler,
            visibility: bb,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: wb.entities,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: wb.entityGrids,
            visibility: bb,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), wb.shadowMask && pb.push({
          binding: ow.v,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Hb = bb.createBindGroupLayout({
          label: `${wb.depth?"terrain-":""}shader-pack-inputs${eb}`,
          entries: pb
        }), Mb.set(eb, Hb)
      }
      return Hb
    }

    function dp(bb) {
      return ip(bb, ap)
    }

    function Pp(bb, wb) {
      if (!wb) return !1;
      const Mb = (0, Tw.i)(bb);
      return !!Mb && Ve(Mb, wb)
    }

    function np(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!fe(wb)) return [];
      return [ip(bb, {
        depth: Re(wb.packVariant),
        sunShadow: Pp(wb.packVariant, Mb),
        shadowMask: eb
      })]
    }
    class yp {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = bb, this.sunShadow = Mb, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(ow.j), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = bb.createBuffer({
          label: "shader-pack-inputs",
          size: ow.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const eb = (0, ow.B)(wb);
        this.textures = bb.createBuffer({
          label: "shader-pack-textures",
          size: eb.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), bb.queue.writeBuffer(this.textures, 0, eb), this.bindGroup = bb.createBindGroup({
          label: "shader-pack-inputs",
          layout: dp(bb),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: ow.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: ow.x,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(bb, wb, Mb) {
        (0, ow.E)(this.data, {
          seconds: bb.seconds(),
          lit: Mb,
          renderOffset: bb.renderOffset(),
          jwb: bb.jwb(),
          eyePosition: wb,
          shadowDirection: bb.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const eb = wb ? this.sunShadow : null;
        if ((wb || Mb) && !eb) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!bb && !eb) return this.bindGroup;
        (bb && bb !== this.depthView || Mb && Mb !== this.maskView) && (this.depthView = null !== bb && void 0 !== bb ? bb : this.depthView, this.maskView = null !== Mb && void 0 !== Mb ? Mb : this.maskView, this.groups.clear());
        const Hb = (bb ? 1 : 0) | (eb ? 2 : 0) | (Mb ? 4 : 0);
        let pb = this.groups.get(Hb);
        if (!pb) {
          const wb = this.entries();
          bb && wb.push({
            binding: ow.r,
            resource: bb
          }), eb && wb.push(...eb.entries()), Mb && wb.push({
            binding: ow.v,
            resource: Mb
          }), pb = this.device.createBindGroup({
            label: `${bb||Mb?"terrain-":""}shader-pack-inputs${bb?"-depth":""}${eb?"-shadow":""}${Mb?"-mask":""}`,
            layout: ip(this.device, {
              depth: !!bb,
              sunShadow: !!eb,
              shadowMask: !!Mb
            }),
            entries: wb
          }), this.groups.set(Hb, pb)
        }
        return pb
      }
      bind(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        bb.setBindGroup(ow.g, this.bindGroupFor(wb, Mb, eb))
      }
    }

    function op(bb, wb, Mb) {
      if (bb.gpuVersion === wb.gpuBuffersVersion) return !0;
      let eb;
      do {
        if (eb = wb.gpuBuffersVersion, !Tp(bb, wb, Mb)) return !1
      } while (wb.gpuBuffersVersion !== eb);
      return bb.gpuVersion = eb, bb.fitInstances = 0, !0
    }

    function Tp(bb, wb, Mb) {
      let eb = null;
      for (let pb = 0; pb < bb.slotData.length; pb++) {
        var Hb;
        const Vb = bb.slotData[pb],
          gb = Vb ? wb.gpuBuffer(Vb) : Mb;
        if (!gb) return !1;
        Vb && bb.layout.instanceEnds[pb] < 0 && wb.cover(Vb, Number.POSITIVE_INFINITY), bb.buffers[pb] = gb;
        const lb = bb.Qbb[pb] + (Vb ? wb.gpuOffset(Vb) : 0);
        lb !== (null !== (Hb = eb) && void 0 !== Hb ? Hb : bb.offsets)[pb] && (eb ??= bb.offsets.slice(), eb[pb] = lb), bb.ends[pb] = Vb ? wb.gpuEnd(Vb) : gb.size
      }
      return eb && (bb.offsets = eb), !0
    }

    function kp(bb, wb, Mb, eb) {
      if (wb <= bb.fitInstances) return null;
      const {
        layout: Hb,
        ends: pb,
        offsets: Vb,
        slotData: gb,
        Qbb: lb
      } = bb;
      let Lb = !1;
      for (let Ib = 0; Ib < Hb.buffers.length; Ib++) {
        const bb = Hb.instanceEnds[Ib];
        if (bb < 0) continue;
        const eb = (wb - 1) * Hb.buffers[Ib].arrayStride + bb;
        if (pb[Ib] - Vb[Ib] < eb) return {
          index: Ib,
          needed: eb
        };
        const Ob = gb[Ib];
        Ob && Mb.cover(Ob, lb[Ib] + eb) && (Lb = !0)
      }
      return Lb && op(bb, Mb, eb), bb.fitInstances = wb, null
    }
    var bV = Mb(39054),
      wV = Mb(39079);
    const MV = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      eV = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      HV = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      pV = `((vertexInputs.aPackedLightLevels >> 16u) | ${Zw.e.placed}u)`,
      VV = "u32(vertexInputs.aShaderPackItem.x)",
      gV = `${Zw.e.lifeform}u`;

    function lV(bb) {
      return "item" === bb.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const LV = "bloxdSpEnchant",
      IV = "floor(finalWorld[3].xyz)";

    function OV(bb, wb, Mb) {
      return "placed" === wb.kind && bb.reads[Mb].includes("bloxdFragmentBlockPosition")
    }

    function UV(bb, wb) {
      let [Mb, eb] = bb;
      return Mb === wb.point && eb === wb.code
    }

    function tV(bb, wb) {
      var Mb;
      return null === (Mb = bb.find((bb => bb[wb]))) || void 0 === Mb ? void 0 : Mb[wb]
    }

    function CV(bb, wb) {
      const Mb = tV(bb, "texture"),
        eb = tV(bb, "enchantTier"),
        Hb = tV(bb, "glow"),
        pb = tV(bb, "overlay"),
        Vb = pb ? wb.filter((bb => UV(bb, pb))).length : 0;
      return pb && 1 === Vb ? {
        texture: Mb,
        overlay: pb,
        enchantTier: eb,
        glow: Hb
      } : {
        texture: Mb,
        enchantTier: eb,
        glow: Hb
      }
    }

    function EV(bb) {
      if ("item" === bb.kind) {
        return {
          vertexFlags: `(${VV} & 0xffffu)`,
          varying: "vPackItem",
          value: VV,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return bb.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: pV,
        varying: "vPackFlags",
        value: pV,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function FV(bb) {
      return "lifeform" === bb.kind ? gV : "0u"
    }

    function BV(bb) {
      return !!bb.BLOXD_PLUGIN_ENCHANTMENT
    }

    function sV(bb, wb) {
      const {
        enchantTier: Mb
      } = wb;
      return Mb && BV(wb.defines) && "lifeform" === wb.kind && jV(bb, "enchantTier") ? Mb : null
    }

    function mV(bb, wb) {
      return BV(wb.defines) && jV(bb, "enchantSpeed")
    }

    function hV(bb) {
      const {
        overlay: wb,
        defines: Mb
      } = bb;
      if (!wb || !Mb.DIFFUSE) return null;
      const eb = Mb.VERTEXCOLOR || Mb.INSTANCESCOLOR && Mb.INSTANCES;
      return `vec4f(${wb.colour}.rgb * uniforms.vDiffuseInfos.y${eb?" * fragmentInputs.vColor.rgb":""}, ${wb.colour}.a)`
    }
    const zV = "fragmentInputs.vPackTexture";

    function XV(bb) {
      const {
        atlas: wb,
        defines: Mb,
        texture: eb
      } = bb;
      if (wb || !Mb.DIFFUSE) return null;
      if (eb) return {
        texture: "diffuseSampler",
        ...eb
      };
      const Hb = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===Mb.DIFFUSEDIRECTUV?"vMainUV1":2===Mb.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== bb.kind) return Hb;
      if (!Mb.BLOXD_PLUGIN_ANIMATED) return {
        ...Hb,
        id: zV
      };
      const pb = Xb.b.WGSL,
        Vb = (0, Xb.sb)(pb, "uAnimStatesNum"),
        gb = (0, Xb._)(pb, (0, bV.g)(pb), Vb),
        lb = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Vb})`,
        layers: [gb],
        uv: `vec2f(${lb}.x, ${lb}.y * ${Vb} - ${gb})`,
        levelUv: lb,
        id: zV
      }
    }

    function xV(bb, wb) {
      return "box" === wb.kind && !!bb.hooks.surface && null !== XV(wb)
    }

    function jV(bb, wb) {
      return bb.reads.fragment.includes(wb)
    }

    function KV(bb) {
      return !!bb.BLOXD_LIGHTING && !bb.BLOXD_UNLIT
    }

    function rV(bb, wb, Mb, eb) {
      const Hb = bb.filter((bb => {
        let [Mb, eb] = bb;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === Mb && eb === wb
      }));
      if (1 !== Hb.length) throw new Error(`A model program for shader packs has ${0===Hb.length?"no":"more than one"} ${eb} code before fog (lite/modelShaderPack.ts)`);
      return bb.map((bb => bb === Hb[0] ? [bb[0], Mb] : bb))
    }

    function RV(bb, wb, Mb, eb) {
      const {
        hooks: Hb
      } = bb, {
        kind: pb,
        defines: Vb
      } = wb, gb = [...Mb];
      var lb;
      wb.atlas && Hb.surface && gb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", te("atlasIdxIn")]), "item" === pb && gb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Xb.d)(Xb.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), xV(bb, wb) && gb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Xb.d)(Xb.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (lb = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Oe}[min(u32(${lb}) - 1u, arrayLength(&${Oe}) - 1u)], ${lb} > 0.5);\n`)]);
      const Lb = EV(wb);
      Lb && (Hb.surface || Hb.light) && gb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Lb.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Lb.varying} = ${Lb.value};`]);
      let Ib = eb;
      if (OV(bb, wb, "fragment") && (gb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${IV});`]), Ib = [...Ib, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), jV(bb, "localPosition") && gb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${lV(wb)};`]), BV(Vb) && Hb.surface) {
        mV(bb, wb) && gb.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const Mb = sV(bb, wb);
        Mb && gb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Mb});`]);
        const eb = (0, Xb.gb)(Xb.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Ib = [...rV(Ib, (0, wV.i)(Xb.b.WGSL), eb, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, wV.d)(LV)]]
      }
      const {
        overlay: Ob
      } = wb;
      Ob && hV(wb) && Hb.surface && (Ib = Ib.filter((bb => !UV(bb, Ob))));
      const Ub = Hb.light ? function(bb) {
        return "placed" === bb.kind ? {
          name: "terrain",
          engine: (0, Pw.Q)(Xb.b.WGSL),
          pack: (0, Pw.eb)(Xb.b.WGSL)
        } : bb.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Pw.I)(Xb.b.WGSL),
          pack: (0, Pw.bb)(Xb.b.WGSL)
        } : null
      }(wb) : null;
      if (Ub && (Ib = rV(Ib, Ub.engine, Ub.pack, `${Ub.name} light`), "placed" !== pb && KV(Vb))) {
        const bb = Vb.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, Xb.sb)(Xb.b.WGSL, "uEntityLightLevels") : (0, Xb.zb)(Xb.b.WGSL, "aLightLevels");
        gb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Pw.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Pw.cb)(Xb.b.WGSL, bb)])
      }
      return {
        vertexCode: gb,
        fragmentCode: Ib
      }
    }

    function DV(bb, wb, Mb, eb) {
      return He(bb, wb, Mb, eb, "model")
    }
    const cV = "\t@builtin(position) position: vec4f,\n";

    function YV(bb, wb) {
      const Mb = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(bb)[0];
      return `${Mb}${wb}${bb.slice(Mb.length)}`
    }

    function ZV(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Hb
      } = wb, pb = Ve(wb, eb), {
        kind: Vb,
        defines: gb
      } = Mb, lb = function(bb, wb) {
        var Mb, eb, Hb, pb;
        const {
          defines: Vb
        } = wb, gb = EV(wb), lb = !!Vb.FOG, Lb = BV(Vb), Ib = null !== (Mb = null === gb || void 0 === gb ? void 0 : gb.enchantTier) && void 0 !== Mb ? Mb : sV(bb, wb) ? "fragmentInputs.vPackEnchantTier" : "0u", Ob = "lifeform" === wb.kind && !Vb.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (eb = null === gb || void 0 === gb ? void 0 : gb.vertexFlags) && void 0 !== eb ? eb : FV(wb),
          vertexLocalPosition: lV(wb),
          flags: null !== (Hb = null === gb || void 0 === gb ? void 0 : gb.flags) && void 0 !== Hb ? Hb : FV(wb),
          normal: "normalW",
          alpha: Ob ? "alpha * baseColor.a" : "alpha",
          alphaOut: Ob ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: lb ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: lb ? "1.0 - fog" : "0.0",
          enchantTier: Ib,
          enchantColour: Lb ? `${LV}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: mV(bb, wb) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: jV(bb, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: hV(wb),
          glow: null !== (pb = wb.glow) && void 0 !== pb ? pb : null
        }
      }(wb, Mb), Lb = bb.textures.filter((bb => /^textureAtlas\d+$/.test(bb.name))).length, Ib = Mb.atlas && Lb > 0 ? {
        count: Lb,
        layers: Mb.atlas.layers,
        width: Mb.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: bb.material.slots.has("uAnimDataPerTex") ? (wb, Mb) => oe(wb, Mb, function(bb) {
          const wb = bb.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            sO: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: bb => `uniforms.uAnimDataPerTex[${bb}]${wb}`
          }
        }(bb)) : null
      } : null, Ob = "placed" === Vb ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Ub = null !== Ib && void 0 !== Ib ? Ib : XV(Mb), tb = function(bb, Mb) {
        let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,ow.C)()}${le(wb,Mb)}${eb}${Ee(bb)}${we}${Ob}${wb.code}`
      };
      let {
        vertex: Cb,
        fragment: Eb
      } = bb;
      const Fb = Be(Hb, lb);
      if (Fb) {
        const bb = OV(wb, Mb, "vertex") ? `\tbloxdSpCell = ${IV};\n` : "";
        Cb = DV(Cb, MV, `${bb}${Fb.slice(1)}${MV}`, "vertex")
      }
      const Bb = `${Le(wb,pb,function(bb,wb){return wb.TWOSIDEDLIGHTING?bb:`select(-(${bb}), ${bb}, fragmentInputs.frontFacing)`}(lb.normal,gb),lb.flags)}${se(Hb,wb.strict,wb.program,Ub,lb)}`;
      Bb && (Eb = DV(Eb, eV, `${Bb.slice(1)}${eV}`, "surface")), pb && wb.sunShadow && !gb.TWOSIDEDLIGHTING && (Eb = DV(Eb, cV, `${cV}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const sb = ze(Hb);
      if (sb) {
        const bb = he(Hb, KV(gb), !0, lb);
        Eb = DV(Eb, HV, `${bb}${sb.slice(1)}${HV}`, "light")
      }
      const mb = xV(wb, Mb) ? Ue : "";
      return {
        ...bb,
        vertex: YV(Cb, tb(Ib, !1, mb)),
        fragment: YV(Eb, tb(Ub, pb))
      }
    }
    const fV = {
      name: "earthSky",
      uniqueId: -1
    };
    class AV {
      constructor(bb, wb) {
        this.resources = bb, this.epoch = wb, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const bb of this.instances.values()) bb.released = !0, this.resources.destroyBuffer(bb.buffer);
        this.instances.clear()
      }
    }

    function WV(bb) {
      return bb.failed && null !== bb.packGroup
    }
    class JV {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wp,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new fp;
        this.device = bb, this.resources = wb, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Sbb = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new kH, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new hp((bb => this.modelSlot(bb).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, fw.d)("Lite: "), this.renderStates = new Ep(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (bb, wb) => this.keepSteady(bb, wb), this.lists = void 0, this.slotCount = 0, this.Sbb = eb, this.modelMeshes = Hb, this.lists = new bp(Hb, eb, this, this.warnOnce), this.drawDefines = new Op(wb, this.warnOnce, ((bb, wb, Mb) => this.programWithModel(bb, wb, Mb)), WV), this.vertexLayouts = new jp(wb, bb.limits, this.warnOnce), this.sceneLayout = xw(bb), this.frameLayout = bb.createBindGroupLayout({
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
        }), this.frameBuffer = bb.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Rp(bb, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = bb.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Np(bb, new Rp(bb, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (bb, wb, Mb) => this.pipelineFor(bb, wb, Mb),
          pipelineCompiling: (bb, wb) => !bb.program.failed && !1 !== this.pipelines.get(`${bb.pipelineKey}|${wb}`),
          sceneGroup: bb => {
            const wb = Mb(bb);
            return wb || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), wb
          }
        }), wb.onDestroy = bb => {
          this.thinBundle.resourceDestroyed(bb)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Hb = {
          order: bb,
          isTransparent: wb,
          _direct: !wb,
          bind: (bb, wb) => this.createBinding(Hb, wb, Mb, eb)
        };
        return Hb
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(bb, wb, Mb) {
        var eb;
        let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = wb, this.drawDefines.view = wb, this.thinBundle.jR(), this.writeFrameUniforms();
        const pb = null !== (eb = null === Hb || void 0 === Hb ? void 0 : Hb.defineFor("model")) && void 0 !== eb ? eb : 0;
        this.drawDefines.modelPackVariant = pb, Hb && 0 !== pb && (this.packInputs ??= new yp(this.device, Hb.textureLayers(), this.sunShadow), this.packInputs.write(Hb, wb.eye, Hb.YE())), this.lists.clear(), this.slotCount = 0;
        const Vb = bb.activeCamera;
        this.Sbb.select(Vb, this.keepSteadyBase), this.modelMeshes.select(Vb, wb), Mb && this.pushEarthSky(Mb), this.lists.collect(bb), this.thinBundle.tO(), this.uploadMeshSlots()
      }
      pushDraws(bb, wb, Mb, eb, Hb, pb) {
        let Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const gb = pb.length;
        for (let lb = 0; lb < Mb; lb++) {
          const Mb = wb[lb];
          let gb = this.retainedDraw(bb, Mb, eb, Hb);
          if (void 0 === gb && (gb = this.drawFor(bb, Mb, eb, Hb), this.retain(Mb, gb)), gb) {
            const bb = Mb.owner,
              wb = Vb ? Vb[lb] : -1;
            gb.slotOffset = wb < 0 ? this.writeMeshSlot(bb.getWorldMatrix().m, bb.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[wb], 16 * wb), pb.push(gb)
          }
        }
        return pb.length - gb
      }
      bundleDraws(bb, wb, Mb) {
        let eb = 0;
        for (const Hb of wb) {
          let wb = this.retainedDraw(bb, Hb, Mb, !1);
          const pb = void 0 !== wb;
          if (void 0 === wb && (wb = this.drawFor(bb, Hb, Mb, !1), this.retain(Hb, wb)), wb) {
            const bb = Hb.owner,
              Mb = this.thinBundle.add(Hb, wb, bb.getWorldMatrix().m, bb.visibility);
            pb && this.steadyFrom(Hb, wb, Mb), eb++
          }
        }
        return eb
      }
      steadyFrom(bb, wb, Mb) {
        const eb = bb.owner,
          Hb = this.Sbb.base(eb),
          pb = eb.material,
          {
            drawState: Vb,
            instance: gb
          } = wb.inputs.retained;
        if (!Hb || !pb || 1 !== bb.parts.materials.length || cp(bb) !== pb) return;
        const lb = Hb.steady ??= {
          unit: bb,
          material: pb,
          visibility: 1,
          draw: wb,
          record: Mb,
          drawState: Vb,
          instance: gb,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        lb.unit = bb, lb.material = pb, lb.visibility = eb.visibility, lb.draw = wb, lb.record = Mb, lb.drawState = Vb, lb.instance = gb, lb.bindGroup = gb.bindGroup, lb.gpuVersion = this.resources.gpuBuffersVersion, lb.fitInstances = wb.inputs.fitInstances, lb.worldFlag = eb.getWorldMatrix().updateFlag, lb.handedFrame = this.frame
      }
      keepSteady(bb, wb) {
        const Mb = bb.steady;
        if (Mb.handedFrame !== this.frame - 1 || (this.frame + Mb.phase) % 8 === 0) return !1;
        const eb = bb.mesh,
          {
            unit: Hb,
            draw: pb,
            instance: Vb,
            drawState: gb
          } = Mb,
          lb = eb.forcedInstanceCount || eb.ibb;
        if (!eb.isVisible || eb.ypb || eb.visibility !== Mb.visibility || 0 === (eb.layerMask & wb.layerMask) || eb.material !== Mb.material || 0 !== eb.renderingGroupId || eb.hasVertexAlpha || !this.drawDefines.definesHold(gb, Hb, gb.instancing) || Mb.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(pb.inputs, Hb, gb.instancing, pb.program) || pb.program.failed || Vb.released || lb <= 0 || lb > Mb.fitInstances) return !1;
        if (Vb.frame !== this.frame && this.bindMaterial(Vb, this.modelUniforms.refreshModelUniforms(eb.RJ(), Vb, Vb.model, this.view)), !Vb.bindable || Vb.bindGroup !== Mb.bindGroup) return !1;
        const Lb = eb.computeWorldMatrix(),
          Ib = Lb.updateFlag !== Mb.worldFlag;
        return Mb.worldFlag = Lb.updateFlag, pb.instances = lb, this.thinBundle.addAgain(Mb.record, pb, Ib ? Lb.m : null, Mb.visibility), Mb.handedFrame = this.frame, this.Sbb.drawn++, !0
      }
      retainedDraw(bb, wb, Mb, eb) {
        const Hb = this.inputs.get(wb),
          pb = null === Hb || void 0 === Hb ? void 0 : Hb.retained;
        if (!Hb || !pb) return;
        const {
          drawState: Vb,
          program: gb,
          instance: lb,
          instancing: Lb
        } = pb, Ib = wb.owner;
        if (pp(Ib) !== Lb) return;
        const Ob = this.instanceCount(Ib, Lb);
        if (Ob <= 0) return null;
        if (lb.released || gb.failed || Vb.program !== gb || !this.drawDefines.programCurrent(Vb, wb, Lb, Mb) || !this.inputsStamped(Hb, wb, Lb, gb) || Ib.isUnIndexed !== pb.unIndexed || this.indexKey(wb) !== pb.indexData) return;
        if (pb.indexBuffer && pb.gpuVersion !== this.resources.gpuBuffersVersion) {
          const bb = this.resources.gpuBuffer(pb.indexData);
          if (!bb) return;
          pb.indexBuffer = bb, pb.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Ub = !1;
        if (lb.frame !== this.frame && (Ub = this.modelUniforms.refreshModelUniforms(bb, lb, lb.model, this.view)), !this.bindMaterial(lb, Ub) || !this.withGpuBuffers(Hb) || !this.instanceBuffersFit(Ib.name, Hb, Ob)) return null;
        const tb = this.makeDraw(gb, Hb, this.renderStates.renderState(Vb.model, Ib, eb, Hb.state), lb, Ob);
        return this.setRange(tb, wb, pb.indexBuffer, pb.indexData), tb
      }
      retain(bb, wb) {
        const Mb = this.drawDefines.drawStates.get(bb);
        if (!wb || !Mb || Mb.program !== wb.program) {
          const wb = this.inputs.get(bb);
          return void(wb && (wb.retained = null))
        }
        const eb = bb.owner,
          Hb = Mb.instancing,
          pb = this.indexKey(bb),
          Vb = wb.inputs.retained;
        Vb ? (Vb.drawState = Mb, Vb.instancing = Hb, Vb.program = wb.program, Vb.instance = wb.material, Vb.indexData = pb, Vb.unIndexed = eb.isUnIndexed, Vb.indexBuffer = wb.indexBuffer, Vb.gpuVersion = this.resources.gpuBuffersVersion) : wb.inputs.retained = {
          drawState: Mb,
          instancing: Hb,
          program: wb.program,
          instance: wb.material,
          indexData: pb,
          unIndexed: eb.isUnIndexed,
          indexBuffer: wb.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(bb, wb, Mb, eb) {
        const Hb = wb.owner,
          pb = cp(wb);
        if (!pb) return null;
        const Vb = pb.getClassName();
        let gb = null;
        if (function(bb) {
            return "LinesMesh" === bb.getClassName()
          }(Hb)) {
          if (! function(bb) {
              return "ShaderMaterial" === bb.getClassName() && "color" === bb.shaderPath
            }(pb)) return this.warnOnce(`lines:${Vb}`, `A LinesMesh with a ${Vb} is not drawn yet (${pb.name})`), null;
          gb = Hb
        } else if ("StandardMaterial" !== Vb && "LiteMaterial" !== Vb) return this.warnOnce(`class:${Vb}`, `${Vb} is not drawn yet (${pb.name})`), null;
        const lb = pp(Hb),
          Lb = this.instanceCount(Hb, lb);
        if (Lb <= 0) return null;
        const Ib = gb ? this.lineProgramFor(Hb, Mb, lb) : this.drawDefines.programFor(bb, wb, pb, Mb, lb);
        if (!Ib || Ib.failed) return null;
        const Ob = gb ? null : this.drawDefines.drawStates.get(wb).model,
          Ub = Ob ? this.modelInstance(Ob, Ib) : this.materialInstance(Hb, Ib);
        let tb = !1;
        if (Ub.frame !== this.frame && (gb ? sb(Ub.ubo, gb) : tb = this.modelUniforms.refreshModelUniforms(bb, Ub, Ub.model, this.view)), !this.bindMaterial(Ub, tb)) return null;
        const Cb = this.meshInputs(wb, Ib, lb);
        if (!Cb || !this.instanceBuffersFit(Hb.name, Cb, Lb)) return null;
        const Eb = this.indexKey(wb);
        let Fb = null;
        if (Eb && !Hb.isUnIndexed && (Fb = this.resources.gpuBuffer(Eb), !Fb)) return null;
        const Bb = this.renderStates.renderState(null !== Ob && void 0 !== Ob ? Ob : pb, Hb, eb, Cb.state, gb ? "line-list" : "triangle-list"),
          mb = this.makeDraw(Ib, Cb, Bb, Ub, Lb);
        return this.setRange(mb, wb, Fb, Eb), mb
      }
      indexKey(bb) {
        const wb = Lp(bb);
        return wb ? this.resources.modelIndex(wb) : null
      }
      setRange(bb, wb, Mb, eb) {
        Mb && (bb.indexBuffer = Mb, bb.indexFormat = this.resources.indexFormat(eb));
        const Hb = 4 * wb.range + (Mb ? 0 : 2);
        bb.unit = wb, bb.first = wb.parts.gF[Hb], bb.count = wb.parts.gF[Hb + 1]
      }
      makeDraw(bb, wb, Mb, eb, Hb) {
        wb.state !== Mb && (wb.state = Mb, wb.pipelineKey = `${bb.id}|${wb.layout.key}|${Mb.key}`, wb.pipeline = null);
        const pb = wb.draw ??= {
          program: bb,
          inputs: wb,
          pipelineKey: "",
          layout: wb.layout,
          state: Mb,
          material: eb,
          slotOffset: 0,
          vertexBuffers: wb.buffers,
          vertexOffsets: wb.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Hb,
          unit: null
        };
        return pb.program = bb, pb.pipelineKey = wb.pipelineKey, pb.state = Mb, pb.material = eb, pb.vertexOffsets = wb.offsets, pb.indexBuffer = null, pb.instances = Hb, pb
      }
      instanceCount(bb, wb) {
        switch (wb) {
          case "thin":
            return bb.forcedInstanceCount || bb.ibb;
          case "instanced":
            return this.prepareInstances(bb);
          case "none":
            return 1
        }
      }
      prepareInstances(bb) {
        const wb = function(bb, wb) {
          const Mb = wb._userInstancedBuffersStorage,
            eb = bb.batchUploads.get(wb);
          if (eb) {
            var Hb;
            if (eb.layout === (null !== (Hb = null === Mb || void 0 === Mb ? void 0 : Mb.interleavedKinds) && void 0 !== Hb ? Hb : null)) return eb;
            eb.release()
          }
          return new tw(bb, wb, Mb)
        }(this.resources, bb);
        return wb.frame !== this.frame && wb.pack(bb, this.modelMeshes.instanceBatch(bb), this.modelMeshes.worlds, this.frame), wb.count
      }
      programWithModel(bb, wb, Mb) {
        const eb = this.modelSlot(bb),
          Hb = Up(eb, bb, Mb),
          pb = this.drawDefines.modelPackKind(bb),
          Vb = pb ? function(bb, wb, Mb, eb) {
            const Hb = (0, Kb.w)(bb, xb.i.name),
              pb = [];
            for (const {
                feature: lb,
                state: Lb,
                active: Ib
              }
              of bb.features) {
              var Vb, gb;
              const bb = Ib ? null === (Vb = (gb = (0, Aw.e)(lb)).LC) || void 0 === Vb ? void 0 : Vb.call(gb, Lb) : void 0;
              bb && pb.push(bb)
            }
            return {
              kind: wb,
              atlas: null !== Hb && void 0 !== Hb && Hb.active ? (0, xb.c)(Hb.state) : null,
              defines: Mb,
              ...CV(pb, eb)
            }
          }(bb, pb, wb, eb.fragmentCode) : null;
        if (Vb && function(bb) {
            const wb = bb.defines;
            return (null === bb.atlas || !!wb.DIFFUSE && 1 === wb.DIFFUSEDIRECTUV) && !!wb.NORMAL && !wb.REFLECTION && !wb.EMISSIVEASILLUMINATION && !wb.LINKEMISSIVEWITHDIFFUSE
          }(Vb)) {
          const Mb = this.modelPackProgram(bb, wb, `${Hb}#${pb}#sp${this.drawDefines.modelPackVariant}`, eb, Vb);
          if (Mb && !Mb.failed) return Mb
        }
        const gb = this.programs.get(Hb);
        if (gb || this.unbuildable.has(Hb)) return null !== gb && void 0 !== gb ? gb : null;
        let lb;
        try {
          lb = YH({
            defines: gp(wb),
            vertexCode: eb.vertexCode,
            fragmentCode: eb.fragmentCode,
            pluginUniforms: eb.pluginUniforms
          })
        } catch (Lb) {
          return this.unbuildable.add(Hb), this.warnOnce(`build:${Hb}`, `could not build a program for ${bb.name}: ${String(Lb)}`), null
        }
        return this.createProgram(Hb, lb, "standard")
      }
      modelPackProgram(bb, wb, Mb, eb, Hb) {
        const pb = this.programs.get(Mb);
        if (pb || this.unbuildable.has(Mb)) return null !== pb && void 0 !== pb ? pb : null;
        const Vb = this.drawDefines.modelPackVariant;
        let gb;
        try {
          const bb = function(bb) {
              return (0, Tw.e)(bb, "model")
            }(Vb),
            Mb = RV(bb, Hb, eb.vertexCode, eb.fragmentCode);
          gb = ZV(YH({
            defines: gp(wb),
            ...Mb,
            pluginUniforms: eb.pluginUniforms
          }), bb, Hb, !!this.sunShadow)
        } catch (Ib) {
          return this.unbuildable.add(Mb), this.warnOnce(`build:${Mb}`, `could not build a shader pack program for ${bb.name}, which draws without the pack: ${String(Ib)}`), null
        }
        const lb = Pp(Vb, !!this.sunShadow),
          Lb = {
            group: this.packInputs.bindGroupFor(null, lb),
            layout: ip(this.device, {
              depth: !1,
              sunShadow: lb
            })
          };
        return this.createProgram(Mb, gb, function(bb) {
          return `standard-sp${bb}`
        }(Vb), Lb)
      }
      lineProgramFor(bb, wb, Mb) {
        const eb = Bb(bb, Mb, wb, this.view);
        let Hb = this.linePrograms.get(eb);
        var pb;
        return Hb || (Hb = this.createProgram(`lines#${eb}`, (pb = function(bb) {
          const wb = new Map;
          for (let Mb = 0; Mb < Lb.length; Mb++) bb & 1 << Mb && wb.set(Lb[Mb], !0);
          return wb
        }(eb), WH({
          defines: pb,
          vertex: fH,
          fragment: AH,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(eb, Hb)), Hb
      }
      createProgram(bb, wb, Mb) {
        var eb;
        let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pb = this.nextProgramId++,
          Vb = `${Mb}-${pb}`,
          gb = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          lb = [{
            binding: 0,
            visibility: gb,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Ob of wb.textures) lb.push({
          binding: Ob.binding,
          visibility: gb,
          texture: {
            viewDimension: Ob.dimension
          }
        }), lb.push({
          binding: Ob.samplerBinding,
          visibility: gb,
          sampler: {}
        });
        const Lb = this.device.createBindGroupLayout({
            label: Vb,
            entries: lb
          }),
          Ib = {
            key: bb,
            id: pb,
            kind: Mb,
            program: wb,
            vertex: this.device.createShaderModule({
              label: `${Vb}-vertex`,
              code: wb.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Vb}-fragment`,
              code: wb.fragment
            }),
            materialLayout: Lb,
            pipelineLayout: this.device.createPipelineLayout({
              label: Vb,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Lb, ...Hb ? [Hb.layout] : []]
            }),
            packGroup: null !== (eb = null === Hb || void 0 === Hb ? void 0 : Hb.group) && void 0 !== eb ? eb : null,
            failed: !1
          };
        return this.programs.set(bb, Ib), Ib
      }
      writeFrameUniforms() {
        const bb = this.frameUniforms;
        mp(this.view, bb), this.device.queue.writeBuffer(this.frameBuffer, 0, bb)
      }
      materialInstance(bb, wb) {
        let Mb = this.materials.get(bb);
        if (!Mb) {
          const wb = new Map;
          this.materials.set(bb, wb);
          const {
            resources: eb,
            materials: Hb
          } = this;
          bb.vJ.addOnce((() => {
            for (const bb of wb.values()) bb.released = !0, eb.destroyBuffer(bb.buffer);
            Hb.delete(bb)
          })), Mb = wb
        }
        let eb = Mb.get(wb.key);
        return eb || (eb = this.newMaterialInstance(bb, null, wb), Mb.set(wb.key, eb)), eb
      }
      modelInstance(bb, wb) {
        const Mb = this.modelSlot(bb);
        let eb = Mb.instances.get(wb.key);
        return eb || (eb = this.newMaterialInstance(bb, bb, wb), Mb.instances.set(wb.key, eb)), eb
      }
      modelSlot(bb) {
        var wb;
        let Mb = bb.gpu[Rb.g.lite];
        return (null === (wb = Mb) || void 0 === wb ? void 0 : wb.epoch) !== this.resources.epoch && (Mb = new AV(this.resources, this.resources.epoch), bb.gpu[Rb.g.lite] = Mb), Mb
      }
      newMaterialInstance(bb, wb, Mb) {
        const eb = Mb.program.material.floats,
          Hb = new Float32Array(eb),
          pb = new Map;
        return {
          owner: bb,
          model: wb,
          program: Mb,
          data: Hb,
          uploaded: new Float32Array(eb).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${bb.name}-uniforms`,
            size: Math.max(16, 4 * eb),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: pb,
          ubo: new sp(Mb.program.material.slots, Hb, pb),
          bindGroup: null,
          bound: new Array(2 * Mb.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(bb) {
        var wb;
        const Mb = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: QH + GH,
            fragment: QH + qH,
            attributes: [],
            material: vH,
            textures: []
          }, "earthSky"),
          eb = this.earthSkyUniforms ??= this.newMaterialInstance(fV, null, Mb);
        this.earthSkyFrom !== bb && (this.earthSkyFrom = bb, eb.data.fill(0)), oH(eb.ubo, bb, this.view);
        const Hb = this.vertexInputs(Mb, fV, "earthSky", Mb, null);
        if (Mb.failed || !Hb || !this.bindMaterial(eb, !1)) return;
        const pb = null !== (wb = Hb.state) && void 0 !== wb ? wb : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Vb = this.makeDraw(Mb, Hb, pb, eb, 1);
        Vb.count = JH.length;
        const gb = TH(bb, this.view);
        Vb.slotOffset = this.writeMeshSlot(gb, 1), this.lists.skyDraws.push(Vb)
      }
      uploadIfChanged(bb) {
        const {
          data: wb,
          uploaded: Mb
        } = bb;
        for (let eb = 0; eb < wb.length; eb++)
          if (wb[eb] !== Mb[eb]) return Mb.set(wb), void this.device.queue.writeBuffer(bb.buffer, 0, wb)
      }
      bindMaterial(bb, wb) {
        return bb.frame !== this.frame && (bb.frame = this.frame, wb || this.uploadIfChanged(bb), bb.bindable = this.bindTextures(bb)), bb.bindable
      }
      bindTextures(bb) {
        const {
          program: wb,
          bound: Mb
        } = bb, eb = wb.program.textures;
        let Hb = !bb.bindGroup,
          pb = !0;
        for (let Vb = 0; Vb < eb.length; Vb++) {
          const wb = bb.textures.get(eb[Vb].name),
            gb = wb ? this.resources.boundTexture(wb) : null;
          gb ? Mb[2 * Vb] === gb.view && Mb[2 * Vb + 1] === gb.sampler || (Mb[2 * Vb] = gb.view, Mb[2 * Vb + 1] = gb.sampler, Hb = !0) : (wb || bb.ubo.expected.has(eb[Vb].name) || this.warnOnce(`texture:${bb.owner.name}:${eb[Vb].name}`, `${bb.owner.name} has no ${eb[Vb].name}`), pb = !1)
        }
        if (!pb) return Hb && (bb.bindGroup = null), !1;
        if (Hb) {
          const Hb = [{
            binding: 0,
            resource: {
              buffer: bb.buffer
            }
          }];
          for (let bb = 0; bb < eb.length; bb++) Hb.push({
            binding: eb[bb].binding,
            resource: Mb[2 * bb]
          }), Hb.push({
            binding: eb[bb].samplerBinding,
            resource: Mb[2 * bb + 1]
          });
          bb.bindGroup = this.device.createBindGroup({
            label: `${bb.owner.name}-material`,
            layout: wb.materialLayout,
            entries: Hb
          })
        }
        return !0
      }
      writeMeshSlot(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, bb, wb, Mb), this.slotCount++ * IH
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(bb, wb, Mb, eb, Hb) {
        let pb = this.inputs.get(bb);
        if (!pb || pb.program !== eb || !Kp(wb, pb, this.resources, Hb)) {
          var Vb;
          if (pb = null !== (Vb = this.vertexLayouts.resolveInputs(wb, Mb, eb, Hb)) && void 0 !== Vb ? Vb : void 0, !pb) return null;
          this.inputs.set(bb, pb)
        }
        return this.withGpuBuffers(pb)
      }
      meshInputs(bb, wb, Mb) {
        const eb = this.inputs.get(bb);
        if (eb && this.inputsStamped(eb, bb, Mb, wb)) return this.withGpuBuffers(eb);
        const Hb = bb.owner,
          pb = Lp(bb),
          Vb = this.vertexInputs(bb, Hb, Hb.name, wb, pb);
        return Vb && (Vb.geometry = Ip(bb), Vb.instanceLayout = this.drawDefines.instanceLayout(Hb, Mb)), Vb
      }
      inputsStamped(bb, wb, Mb, eb) {
        return function(bb, wb, Mb, eb) {
          return bb.program === Mb && bb.geometry === Ip(wb) && bb.instanceLayout === eb
        }(bb, wb, eb, this.drawDefines.instanceLayout(wb.owner, Mb))
      }
      withGpuBuffers(bb) {
        return op(bb, this.resources, this.zeroBuffer) ? bb : null
      }
      instanceBuffersFit(bb, wb, Mb) {
        const eb = kp(wb, Mb, this.resources, this.zeroBuffer);
        if (eb) {
          const Hb = wb.ends[eb.index] - wb.offsets[eb.index] + wb.Qbb[eb.index];
          return this.warnOnce(`overrun:${bb}`, `${bb} draws ${Mb} instances from a ${Hb}-byte buffer (${eb.needed} needed)`), !1
        }
        return !0
      }
      createBinding(bb, wb, Mb, eb) {
        const Hb = `${wb._colorFormat}|${wb._depthStencilFormat}|${wb._depthCompare}|${wb._sampleCount}`,
          pb = Dw(this.device, wb);
        if (bb === this.skyLastRenderable) {
          let Mb = null;
          return {
            renderable: bb,
            pipeline: pb,
            draw: bb => Mb ? this.drawSky(bb, wb, Hb, Mb) : 0,
            update: bb => {
              Mb = bb
            }
          }
        }
        return {
          renderable: bb,
          pipeline: pb,
          draw: bb => (eb ? eb.execute(bb, wb, Hb) : 0) + this.drawList(bb, wb, Hb, Mb)
        }
      }
      drawSky(bb, wb, Mb, eb) {
        const Hb = this.lists.skyDraws,
          pb = Hb.length > 0;
        if (pb) {
          var Vb;
          const Mb = (null !== (Vb = wb._depthCompare) && void 0 !== Vb ? Vb : jw).startsWith("greater") ? 0 : 1;
          bb.setViewport(0, 0, eb.targetWidth, eb.targetHeight, Mb, Mb)
        }
        const gb = this.drawList(bb, wb, Mb, Hb);
        return pb && bb.setViewport(0, 0, eb.targetWidth, eb.targetHeight, 0, 1), gb
      }
      drawList(bb, wb, Mb, eb) {
        let Hb = 0;
        const pb = this.binder;
        pb.reset();
        for (const Vb of eb) {
          const eb = this.pipelineFor(Vb, wb, Mb);
          eb && (pb.bind(bb, Vb, eb, this.meshSlots.bindGroup, Vb.slotOffset), Vb.indexBuffer ? bb.drawIndexed(Vb.count, Vb.instances, Vb.first, 0, 0) : bb.draw(Vb.count, Vb.instances, Vb.first, 0), Hb++)
        }
        return Hb
      }
      pipelineFor(bb, wb, Mb) {
        var eb, Hb;
        if (bb.program.failed) return null;
        const pb = bb.inputs;
        if (pb.pipeline && pb.pipelineTarget === Mb) return pb.pipeline;
        const Vb = `${bb.pipelineKey}|${Mb}`,
          gb = this.pipelines.get(Vb);
        if (void 0 !== gb) return gb && (pb.pipeline = gb, pb.pipelineTarget = Mb), gb || null;
        this.pipelines.set(Vb, null);
        const {
          program: lb,
          layout: Lb,
          state: Ib
        } = bb, Ob = {
          label: `standard-${lb.id}`,
          layout: lb.pipelineLayout,
          vertex: {
            module: lb.vertex,
            entryPoint: "main",
            buffers: Lb.buffers
          },
          fragment: sw({
            module: lb.fragment,
            entryPoint: "main"
          }, wb, Ib.blend, Ib.colourWrite),
          depthStencil: wb._depthStencilFormat ? {
            format: wb._depthStencilFormat,
            depthCompare: null !== (eb = null !== (Hb = Ib.depthCompare) && void 0 !== Hb ? Hb : wb._depthCompare) && void 0 !== eb ? eb : jw,
            depthWriteEnabled: Ib.depthWrite,
            depthBias: Ib.depthBias,
            depthBiasSlopeScale: Ib.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: wb._sampleCount
          },
          primitive: {
            topology: Ib.topology,
            frontFace: Ib.frontFace,
            cullMode: Ib.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Ob).then((bb => {
          this.compiling--, this.pipelines.set(Vb, bb)
        }), (bb => {
          this.compiling--, this.reportFailure(lb, Vb, bb)
        })), null
      }
      forEachSunShadowCaster(bb) {
        const wb = this.caster,
          Mb = (Mb, eb, Hb) => {
            const pb = Mb.unit && function(bb) {
              const wb = bb.material.model;
              return null !== wb && (wb.lifeform || wb.item) && wb.castsSunShadow && "triangle-list" === bb.state.topology
            }(Mb) ? Lp(Mb.unit) : null;
            if (!pb) return;
            const Vb = Mb.unit.owner;
            switch (wb.geometry = pb, wb.skip = Vb.noSunShadowVertices, wb.indexed = null !== Mb.indexBuffer, wb.first = Mb.first, wb.count = Mb.count, wb.XO = eb, wb.worldAt = Hb, wb.instances = null, wb.instanceCount = 1, wb.thin = !1, pp(Vb)) {
              case "thin": {
                const bb = Vb._thinInstanceDataStorage.matrixData;
                if (!bb) return;
                wb.instances = bb, wb.instanceCount = Math.min(Mb.instances, bb.length / 16), wb.thin = !0;
                break
              }
              case "instanced": {
                const bb = this.resources.batchUploads.get(Vb);
                if (!bb || bb.frame !== this.frame || !this.writeBatchCasters(bb)) return;
                break
              }
            }
            bb(wb)
          };
        for (const eb of this.lists.opaqueDraws) Mb(eb, this.meshSlots.data, eb.slotOffset / 4);
        this.thinBundle.forEachDrawn(Mb)
      }
      writeBatchCasters(bb) {
        const {
          caster: wb
        } = this, Mb = bb.packedMatrices, eb = bb.count;
        wb.instances = Mb, wb.instanceCount = eb;
        let Hb = -1;
        for (let pb = 0; pb < eb; pb++) {
          const wb = SV(bb.packedRowMesh(pb));
          wb && Hb < 0 ? (this.casterWorlds.length < 16 * eb && (this.casterWorlds = new Float32Array(Mb.length)), this.casterWorlds.set(Mb.subarray(0, 16 * pb)), Hb = pb) : !wb && Hb >= 0 && (this.casterWorlds.set(Mb.subarray(16 * pb, 16 * pb + 16), 16 * Hb), Hb++)
        }
        return Hb >= 0 && (wb.instances = this.casterWorlds, wb.instanceCount = Hb), wb.instanceCount > 0
      }
      async reportFailure(bb, wb, Mb) {
        const eb = [];
        let Hb = !0;
        for (const [pb, Vb] of [
            ["vertex", bb.vertex],
            ["fragment", bb.fragment]
          ]) {
          const bb = await Vb.getCompilationInfo();
          for (const wb of bb.messages) Hb &&= "error" !== wb.type, eb.push(`${pb}:${wb.lineNum}:${wb.linePos} ${wb.type}: ${wb.message}`)
        }
        if (Hb && !bb.packGroup) return this.pipelines.set(wb, !1), console.error(`Lite: pipeline ${wb} failed`, Mb), void Iw(this.device, "mesh", bb.kind, Mb);
        bb.failed || (bb.failed = !0, console.error(`Lite: program ${bb.id} failed`, Mb, eb.join("\n"), {
          program: bb.program,
          key: bb.key
        }), Iw(this.device, "mesh", bb.kind, Mb, Hb ? null : eb[0]))
      }
    }

    function SV(bb) {
      var wb, Mb;
      const eb = null === (wb = bb.hN) || void 0 === wb || null === (Mb = wb.aShaderPackItem) || void 0 === Mb ? void 0 : Mb.x;
      return void 0 !== eb && 0 !== (eb & Zw.l)
    }
    var NV = Mb(53900),
      vV = Mb(53909),
      QV = Mb(53913),
      GV = Mb(53865);
    const qV = [0, 3, 1, 4, 2, 5];

    function aV(bb, wb, Mb, eb, Hb) {
      const pb = Mb[0].width;
      try {
        return Hb ? function(bb, wb, Mb) {
          const eb = (0, GV.d)(bb, Mb, Mb, 6);
          for (let Hb = 0; Hb < 6; Hb++)(0, GV.h)(bb, eb, Hb, wb[qV[Hb]], {
            invertY: !1
          });
          return eb.texture
        }(bb, Mb, pb) : function(bb, wb, Mb, eb) {
          const Hb = bb.createTexture({
            label: "sink-cube",
            size: {
              width: Mb,
              height: Mb,
              depthOrArrayLayers: 6
            },
            format: eb,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let pb = 0; pb < 6; pb++) bb.queue.copyExternalImageToTexture({
            source: wb[qV[pb]]
          }, {
            texture: Hb,
            origin: {
              x: 0,
              y: 0,
              z: pb
            }
          }, {
            width: Mb,
            height: Mb
          });
          return Hb
        }(wb, Mb, pb, 1 === eb ? "r8unorm" : "rgba8unorm")
      } finally {
        iV(Mb)
      }
    }

    function iV(bb) {
      for (const wb of null !== bb && void 0 !== bb ? bb : []) null === wb || void 0 === wb || wb.close()
    }
    async function uV(bb) {
      const wb = [],
        Mb = [];
      if (await Promise.all(bb.map(((bb, eb) => (wb[eb] = null, bb.then((bb => {
          wb[eb] = bb
        }), (bb => {
          Mb.push(bb)
        })))))), Mb.length > 0) throw iV(wb), Mb[0];
      return wb
    }
    class dV {
      constructor(bb) {
        this.qO = bb, this.starts = [], this.lengths = [], this.used = 0, bb > 0 && (this.starts.push(0), this.lengths.push(bb))
      }
      allocate(bb) {
        const {
          starts: wb,
          lengths: Mb
        } = this;
        for (let eb = 0; eb < wb.length; eb++) {
          if (Mb[eb] < bb) continue;
          const Hb = wb[eb];
          return Mb[eb] === bb ? (wb.splice(eb, 1), Mb.splice(eb, 1)) : (wb[eb] += bb, Mb[eb] -= bb), this.used += bb, Hb
        }
        return -1
      }
      free(bb, wb) {
        this.used -= wb;
        const Mb = Math.min(bb + wb, this.qO);
        Mb > bb && this.release(bb, Mb - bb)
      }
      grow(bb) {
        const wb = this.qO;
        this.qO = bb, this.release(wb, bb - wb)
      }
      truncate(bb) {
        const {
          starts: wb,
          lengths: Mb
        } = this;
        for (let eb = wb.length - 1; eb >= 0 && wb[eb] + Mb[eb] > bb; eb--) wb[eb] >= bb ? (wb.splice(eb, 1), Mb.splice(eb, 1)) : Mb[eb] = bb - wb[eb];
        this.qO = bb
      }
      release(bb, wb) {
        const {
          starts: Mb,
          lengths: eb
        } = this;
        let Hb = 0,
          pb = Mb.length;
        for (; Hb < pb;) {
          const wb = Hb + pb >> 1;
          Mb[wb] < bb ? Hb = wb + 1 : pb = wb
        }
        const Vb = Hb,
          gb = Vb > 0 && Mb[Vb - 1] + eb[Vb - 1] === bb,
          lb = Vb < Mb.length && bb + wb === Mb[Vb];
        gb && lb ? (eb[Vb - 1] += wb + eb[Vb], Mb.splice(Vb, 1), eb.splice(Vb, 1)) : gb ? eb[Vb - 1] += wb : lb ? (Mb[Vb] = bb, eb[Vb] += wb) : (Mb.splice(Vb, 0, bb), eb.splice(Vb, 0, wb))
      }
    }
    const PV = 256;
    class nV {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = bb, this.onReplaced = wb, this.mergeGap = Mb, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.gF = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Hb = Math.max(PV, Math.ceil(eb / PV) * PV);
        this.bytes = new Uint8Array(Hb), this.words = new Uint32Array(this.bytes.buffer), this.gF = new dV(Hb / PV)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(bb) {
        return Math.max(1, Math.ceil(bb / PV)) * PV
      }
      allocate(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb;
        const eb = nV.slotBytes(bb),
          Hb = eb / PV;
        let pb = this.gF.allocate(Hb);
        pb < 0 && (this.grow(this.gF.qO + Hb), pb = this.gF.allocate(Hb));
        const Vb = pb * PV;
        return this.growTo(Vb + Math.max(Mb, eb)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Vb, Vb + eb), wb && this.bytes.set(new Uint8Array(wb.buffer, wb.byteOffset, Math.min(wb.byteLength, eb)), Vb), this.markDirty(Vb, Vb + eb), Vb
      }
      growTo(bb) {
        const wb = Math.ceil(bb / PV);
        wb > this.gF.qO && this.grow(wb)
      }
      free(bb, wb) {
        this.freed.push(bb, wb)
      }
      write(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (eb <= 0) return;
        eb <= 1024 && 0 === (3 & (bb | Mb | eb)) ? this.copyWords(bb >> 2, wb.buffer, Mb >> 2, eb >> 2) : this.bytes.set(new Uint8Array(wb.buffer, Mb, eb), bb);
        let pb = bb + eb;
        if (Hb) {
          const wb = bb + 4 * Math.ceil(eb / 4);
          this.bytes.fill(0, pb, wb), pb = wb
        }
        this.markDirty(bb, pb)
      }
      copyWords(bb, wb, Mb, eb) {
        let Hb = this.sourceWords.get(wb);
        Hb || (Hb = new Uint32Array(wb, 0, wb.byteLength >> 2), this.sourceWords.set(wb, Hb));
        const pb = this.words;
        for (let Vb = 0; Vb < eb; Vb++) pb[bb + Vb] = Hb[Mb + Vb]
      }
      move(bb, wb, Mb) {
        this.bytes.copyWithin(wb, bb, bb + Mb), this.markDirty(wb, wb + Mb)
      }
      flush() {
        for (const wb of this.retired) this.onReplaced(wb), wb.destroy();
        this.retired.length = 0;
        const bb = this.dirtyStarts.length;
        if (bb > 0) {
          const {
            dirtyStarts: wb,
            dirtyEnds: Mb,
            order: eb
          } = this;
          eb.length = bb;
          for (let gb = 0; gb < bb; gb++) eb[gb] = gb;
          bb > 1 && eb.sort(((bb, Mb) => wb[bb] - wb[Mb]));
          const Hb = this.mergeGap;
          let pb = wb[eb[0]],
            Vb = Mb[eb[0]];
          for (let gb = 1; gb < bb; gb++) {
            const bb = eb[gb];
            wb[bb] - Vb <= Hb ? Vb = Math.max(Vb, Mb[bb]) : (this.send(pb, Vb), pb = wb[bb], Vb = Mb[bb])
          }
          this.send(pb, Vb), wb.length = 0, Mb.length = 0
        }
        this.holding = !1
      }
      tO() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const bb = this.freed;
        for (let wb = 0; wb < bb.length; wb += 2) this.gF.free(bb[wb] / PV, bb[wb + 1] / PV);
        bb.length = 0
      }
      send(bb, wb) {
        this.device.queue.writeBuffer(this.gpu, bb, this.bytes.buffer, bb, wb - bb);
        for (const Mb of this.replaced) {
          const eb = Math.min(wb, Mb.size);
          eb > bb && this.device.queue.writeBuffer(Mb, bb, this.bytes.buffer, bb, eb - bb)
        }
      }
      markDirty(bb, wb) {
        bb &= -4, wb = wb + 3 & -4, this.holding ? (this.dirtyStarts.push(bb), this.dirtyEnds.push(wb)) : this.send(bb, wb)
      }
      grow(bb) {
        const wb = this.gF.qO,
          Mb = Math.max(2 * wb, bb),
          eb = new Uint8Array(Mb * PV);
        eb.set(this.bytes);
        const Hb = this.gpu;
        this.gpu = this.createGpu(eb.byteLength), this.bytes = eb, this.words = new Uint32Array(eb.buffer), this.gF.grow(Mb), Hb && (this.replaced.push(Hb), this.onReplaced(Hb)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, wb * PV)
      }
      createGpu(bb) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: bb,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function yV(bb) {
      return Array.isArray(bb) ? new Float32Array(bb) : bb
    }

    function oV(bb, wb, Mb, eb, Hb) {
      const pb = db(Hb),
        Vb = Math.min(Hb, eb.byteLength);
      if (pb === Vb && eb.byteOffset % 4 === 0) return void bb.queue.writeBuffer(wb, Mb, eb.buffer, eb.byteOffset, pb);
      const gb = new Uint8Array(pb);
      gb.set(new Uint8Array(eb.buffer, eb.byteOffset, Vb)), bb.queue.writeBuffer(wb, Mb, gb)
    }

    function TV(bb, wb, Mb) {
      const eb = "linear",
        Hb = "nearest";
      let pb = Hb,
        Vb = Hb,
        gb = "nearest",
        lb = !wb;
      switch (bb) {
        case 11:
          pb = eb, Vb = eb;
          break;
        case 3:
          pb = eb, Vb = eb, gb = wb ? "linear" : "nearest";
          break;
        case 8:
          gb = wb ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Vb = eb;
          break;
        case 6:
          Vb = eb, gb = wb ? "linear" : "nearest";
          break;
        case 7:
          Vb = eb, lb = !0;
          break;
        case 9:
          pb = eb;
          break;
        case 10:
          pb = eb, gb = wb ? "linear" : "nearest";
          break;
        case 2:
          pb = eb, Vb = eb, Mb > 1 ? (gb = "linear", lb = !1) : lb = !0;
          break;
        case 12:
          pb = eb, lb = !0;
          break;
        default:
          lb = !0
      }
      return Mb > 1 && !lb ? {
        magFilter: eb,
        minFilter: eb,
        mipmapFilter: "linear",
        maxAnisotropy: Mb
      } : {
        magFilter: pb,
        minFilter: Vb,
        mipmapFilter: gb,
        ...lb ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function kV(bb) {
      return 0 === bb ? "clamp-to-edge" : 2 === bb ? "mirror-repeat" : "repeat"
    }
    class bg {
      constructor(bb, wb) {
        let {
          vertexArena: Mb = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = bb, this.device = wb, this.buffers = new WeakMap, this.Cbb = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = Mb ? this.createArena() : null
      }
      createArena() {
        return new nV(this.device, (bb => {
          var wb;
          null === (wb = this.onDestroy) || void 0 === wb || wb.call(this, bb), this.gpuBuffersVersion++
        }))
      }
      rebind(bb, wb) {
        this.engine = bb, this.device = wb, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const Mb of this.liveUploads) Mb.rebind();
        for (const Mb of this.rebindWaiters.splice(0)) Mb()
      }
      flushUploads() {
        var bb;
        null === (bb = this.arena) || void 0 === bb || bb.flush()
      }
      endUploadFrame() {
        var bb;
        null === (bb = this.arena) || void 0 === bb || bb.tO()
      }
      vertexBufferCreated(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Mb ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(bb);
        const Hb = yV(wb);
        bb.qO = Hb.byteLength, this.buffers.set(bb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: Mb && null !== this.arena,
          pending: Hb,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: eb
        })
      }
      vertexBufferUpdated(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        const Hb = this.buffers.get(bb);
        if (!Hb) return;
        const pb = yV(wb),
          Vb = void 0 === eb ? pb.byteLength : Math.min(eb, pb.byteLength);
        this.update(Hb, pb, Mb, Vb)
      }
      vertexBufferFloatsUpdated(bb, wb, Mb, eb) {
        const Hb = this.buffers.get(bb);
        if (!Hb) return;
        const pb = Mb * Float32Array.BYTES_PER_ELEMENT,
          Vb = (eb - Mb) * Float32Array.BYTES_PER_ELEMENT;
        Hb.slot >= 0 && Vb > 0 && pb + Vb <= Hb.size ? this.writeSlot(Hb, pb, wb, wb.byteOffset + pb, Vb, !1) : Hb.gpu && Vb > 0 && pb + Vb <= Hb.gpu.size ? this.device.queue.writeBuffer(Hb.gpu, pb, wb.buffer, wb.byteOffset + pb, Vb) : this.update(Hb, wb.subarray(Mb, eb), pb, Vb)
      }
      indexBufferCreated(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(bb);
        const eb = function(bb) {
          if (bb instanceof Uint16Array || bb instanceof Uint32Array) return bb;
          for (let wb = 0; wb < bb.length; wb++)
            if (bb[wb] >= 65535) return new Uint32Array(bb);
          return new Uint16Array(bb)
        }(wb);
        bb.is32Bits = 4 === eb.BYTES_PER_ELEMENT, bb.qO = eb.byteLength, this.buffers.set(bb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: eb,
          ownsPending: eb !== wb,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Mb
        })
      }
      bufferDeleted(bb) {
        const wb = this.buffers.get(bb);
        null !== wb && void 0 !== wb && wb.gpu ? (this.destroyBuffer(wb.gpu), this.gpuBuffersVersion++) : wb && wb.slot >= 0 && (this.arena.free(wb.slot, wb.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(bb)
      }
      update(bb, wb, Mb, eb) {
        if (bb.slot >= 0) this.updateSlot(bb, wb, Mb, eb);
        else if (bb.gpu) {
          if (Mb + db(eb) > bb.gpu.size) {
            const wb = this.device.createBuffer({
                label: bb.label,
                size: db(Math.max(2 * bb.gpu.size, Mb + eb)),
                usage: bb.usage | GPUBufferUsage.COPY_SRC
              }),
              Hb = this.device.createCommandEncoder();
            Hb.copyBufferToBuffer(bb.gpu, 0, wb, 0, bb.gpu.size), this.device.queue.submit([Hb.finish()]), this.destroyBuffer(bb.gpu), this.gpuBuffersVersion++, bb.gpu = wb
          }
          oV(this.device, bb.gpu, Mb, wb, eb)
        } else {
          const pb = new Uint8Array(wb.buffer, wb.byteOffset, eb),
            Vb = bb.pending;
          if (Vb && bb.ownsPending && Mb + eb <= Vb.byteLength) new Uint8Array(Vb.buffer, Vb.byteOffset, Vb.byteLength).set(pb, Mb);
          else if (Vb && 0 === Mb && eb === Vb.byteLength && wb.byteLength === eb) bb.pending = wb, bb.ownsPending = !1;
          else {
            var Hb;
            const wb = new Uint8Array(Math.max(null !== (Hb = null === Vb || void 0 === Vb ? void 0 : Vb.byteLength) && void 0 !== Hb ? Hb : 0, Mb + eb));
            Vb && wb.set(new Uint8Array(Vb.buffer, Vb.byteOffset, Vb.byteLength)), wb.set(pb, Mb), bb.pending = wb, bb.ownsPending = !0
          }
        }
      }
      updateSlot(bb, wb, Mb, eb) {
        const Hb = this.arena;
        Mb + db(eb) > bb.size && (bb.size = db(Math.max(2 * bb.size, Mb + eb)), Hb.growTo(bb.slot + bb.size), this.gpuBuffersVersion++), 0 === eb ? this.writeSlot(bb, Mb, Mg, 0, 4, !1) : this.writeSlot(bb, Mb, wb, wb.byteOffset, eb, !0)
      }
      writeSlot(bb, wb, Mb, eb, Hb, pb) {
        const Vb = wb + (pb ? db(Hb) : Hb);
        Vb > bb.slotBytes && this.moveSlot(bb, Vb), this.arena.write(bb.slot + wb, Mb, eb, Hb, pb)
      }
      moveSlot(bb, wb) {
        const Mb = this.arena,
          eb = nV.slotBytes(Math.max(wb, Math.min(2 * bb.slotBytes, bb.size))),
          Hb = Mb.allocate(eb, null, bb.size);
        Mb.move(bb.slot, Hb, bb.slotBytes), Mb.free(bb.slot, bb.slotBytes), bb.slot = Hb, bb.slotBytes = eb, this.gpuBuffersVersion++
      }
      cover(bb, wb) {
        const Mb = this.buffers.get(bb);
        if (!Mb || Mb.slot < 0) return !1;
        const eb = Math.min(wb, Mb.size);
        return !(eb <= Mb.slotBytes) && (this.moveSlot(Mb, eb), !0)
      }
      destroyBuffer(bb) {
        var wb;
        null === (wb = this.onDestroy) || void 0 === wb || wb.call(this, bb), bb.destroy()
      }
      gpuBuffer(bb) {
        const wb = this.buffers.get(bb);
        if (!wb) return null;
        if (wb.slot >= 0) return this.arena.buffer;
        if (wb.arena && wb.pending) {
          const bb = wb.pending,
            Mb = this.arena;
          return wb.size = db(bb.byteLength), wb.slotBytes = nV.slotBytes(function(bb) {
            const wb = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength);
            let Mb = wb.length;
            if (bb.byteOffset % 4 === 0) {
              for (; Mb % 4 !== 0 && 0 === wb[Mb - 1];) Mb--;
              if (Mb % 4 === 0) {
                const wb = new Uint32Array(bb.buffer, bb.byteOffset, Mb / 4);
                let eb = wb.length;
                for (; eb > 0 && 0 === wb[eb - 1];) eb--;
                Mb = 4 * eb
              }
            }
            for (; Mb > 0 && 0 === wb[Mb - 1];) Mb--;
            return Mb
          }(bb)), wb.slot = Mb.allocate(wb.slotBytes, bb, wb.size), wb.pending = null, Mb.buffer
        }
        if (!wb.gpu && wb.pending) {
          const bb = wb.pending;
          wb.gpu = this.device.createBuffer({
            label: wb.label,
            size: db(bb.byteLength),
            usage: wb.usage
          }), oV(this.device, wb.gpu, 0, bb, bb.byteLength), wb.pending = null
        }
        return wb.gpu
      }
      gpuOffset(bb) {
        var wb, Mb;
        const eb = null !== (wb = null === (Mb = this.buffers.get(bb)) || void 0 === Mb ? void 0 : Mb.slot) && void 0 !== wb ? wb : -1;
        return eb < 0 ? 0 : eb
      }
      gpuEnd(bb) {
        var wb, Mb;
        const eb = this.buffers.get(bb);
        return eb ? eb.slot >= 0 ? eb.slot + eb.size : null !== (wb = null === (Mb = eb.gpu) || void 0 === Mb ? void 0 : Mb.size) && void 0 !== wb ? wb : 0 : 0
      }
      vertexInput(bb, wb, Mb) {
        var eb, Hb, pb, Vb;
        return null !== (eb = null !== (Hb = Mb && this.modelInput(Mb, wb)) && void 0 !== Hb ? Hb : null === (pb = null !== (Vb = this.Cbb.get(bb)) && void 0 !== Vb ? Vb : this.batchUploads.get(bb)) || void 0 === pb ? void 0 : pb.inputs[wb]) && void 0 !== eb ? eb : null
      }
      modelInput(bb, wb) {
        const Mb = this.geometrySlot(bb);
        let eb = Mb.inputs.get(wb);
        if (void 0 === eb) {
          const Hb = bb.vertexAttributes.find((bb => bb.kind === wb));
          eb = Hb ? new Cw(this.modelKey(Mb, Hb.data, !1), Hb.offset, Hb.stride, Hb.components, !1, Hb.glType, Hb.isNormalized) : null, Mb.inputs.set(wb, eb)
        }
        return eb
      }
      modelIndex(bb) {
        return bb.indexData && this.modelKey(this.geometrySlot(bb), bb.indexData, !0)
      }
      geometrySlot(bb) {
        var wb;
        let Mb = bb.gpu[Rb.g.lite];
        if ((null === (wb = Mb) || void 0 === wb ? void 0 : wb.epoch) !== this.epoch) {
          const wb = new Map,
            eb = () => {
              for (const bb of wb.values()) this.bufferDeleted(bb)
            },
            Hb = bb => {
              const Mb = wb.get(bb);
              Mb && this.vertexBufferUpdated(Mb, bb)
            };
          Mb = {
            keys: wb,
            inputs: new Map,
            release: eb,
            updated: Hb,
            epoch: this.epoch
          }, bb.gpu[Rb.g.lite] = Mb
        }
        return Mb
      }
      modelKey(bb, wb, Mb) {
        let eb = bb.keys.get(wb);
        if (!eb) {
          if (Mb) {
            const bb = {
              qO: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(bb, wb, "model-indices"), eb = bb
          } else eb = {
            qO: 0
          }, this.vertexBufferCreated(eb, wb, !1, "model-vertices");
          bb.keys.set(wb, eb)
        }
        return eb
      }
      indexFormat(bb) {
        return bb.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(bb, wb) {
        --bb.refs > 0 || (this.releaseTexture(bb), iV(bb.images), null !== wb && this.textures.delete(wb))
      }
      load(bb, wb) {
        const {
          epoch: Mb
        } = this, eb = wb.decoded = async function(bb) {
          if ("cube" === bb.kind) return async function(bb) {
            if (6 !== bb.length) throw new Error(`${bb.length} files where six faces were expected`);
            const wb = await uV(bb.map((bb => kb(bb)))),
              Mb = wb[0].width;
            return uV(wb.map((async bb => {
              if (bb.width === Mb && bb.height === Mb) return bb;
              try {
                return await createImageBitmap(bb, {
                  ...ob,
                  resizeWidth: Mb,
                  resizeHeight: Mb
                })
              } finally {
                bb.close()
              }
            })))
          }(bb.files);
          if ("data" === bb.kind && bb.data) return [await createImageBitmap(new Blob([bb.data]), ob)];
          return [await kb(wg(bb))]
        }(bb.source).then((bb => {
          0 === wb.refs || Mb !== this.epoch ? iV(bb) : wb.images = bb
        }));
        this.track(wb, wg(bb.source), eb, (() => {
          wb.wanted && !wb.failed && wb.refs > 0 && this.upload(bb, wb)
        }))
      }
      canvasUpdated(bb, wb, Mb) {
        const {
          state: eb
        } = this.textureSlot(bb);
        eb.dynamicSource = {
          invertY: wb,
          premultiplied: Mb
        }, eb.dynamic && this.pushDynamic(bb.source, eb)
      }
      async atlasArrays(bb) {
        const {
          device: wb,
          epoch: Mb
        } = this;
        let eb;
        try {
          eb = await ww(wb, bb)
        } catch (pb) {
          if (Mb === this.epoch) {
            if (!Lw(wb)) throw pb;
            await new Promise((bb => {
              this.rebindWaiters.push(bb)
            }))
          }
          return this.atlasArrays(bb)
        }
        if (eb.forEach(((wb, Mb) => {
            this.atlasSources.has(wb) || this.atlasSources.set(wb, {
              sources: bb,
              index: Mb,
              stride: eb[0].layers
            })
          })), Mb !== this.epoch) return eb;
        const Hb = (0, NV.c)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const Vb of eb) this.atlasBindings.has(Vb) || this.atlasBindings.set(Vb, {
          view: Vb.texture.createView({
            dimension: "2d-array"
          }),
          sampler: Hb
        });
        return eb
      }
      boundTexture(bb) {
        const wb = this.atlasBindings.get(bb);
        if (wb) return wb;
        const Mb = this.atlasSources.get(bb);
        if (Mb) return this.rebuildAtlas(bb, Mb), null;
        const eb = bb;
        if (eb.released) return null;
        const Hb = this.textureSlot(eb, !0),
          {
            state: pb
          } = Hb;
        if (!pb.view && (pb.wanted = !0, pb.loading || pb.failed || this.upload(eb, pb), !pb.view)) return null;
        const Vb = this.chosenSampler(eb, Hb),
          gb = Hb.bound;
        return gb && gb.view === pb.view && gb.sampler === Vb ? gb : (Hb.bound = {
          view: pb.view,
          sampler: Vb
        }, Hb.bound)
      }
      rebuildAtlas(bb, wb) {
        let {
          sources: Mb,
          index: eb,
          stride: Hb
        } = wb;
        if (this.atlasRebuilds.has(bb)) return;
        this.atlasRebuilds.add(bb);
        const {
          epoch: pb
        } = this;
        this.atlasArrays(Mb).then((wb => {
          wb[0].layers === Hb && wb[eb] ? pb === this.epoch && this.atlasBindings.set(bb, this.atlasBindings.get(wb[eb])) : console.error(`Lite: the new device splits the atlas ${Tb(Mb.urls[0])} into other arrays than its materials read`)
        }), (bb => {
          console.error(`Lite: could not build the atlas ${Tb(Mb.urls[0])} again on a new device`, bb)
        }))
      }
      textureLoaded(bb) {
        var wb, Mb;
        return null !== (wb = null === (Mb = this.heldSlot(bb)) || void 0 === Mb ? void 0 : Mb.state.decoded) && void 0 !== wb ? wb : null
      }
      textureFailed(bb) {
        var wb;
        return !0 === (null === (wb = this.heldSlot(bb)) || void 0 === wb ? void 0 : wb.state.failed)
      }
      heldSlot(bb) {
        const wb = bb.gpu[Rb.g.lite];
        return (null === wb || void 0 === wb ? void 0 : wb.epoch) === this.epoch ? wb : void 0
      }
      chosenSampler(bb, wb) {
        const {
          samplingMode: Mb,
          wrapU: eb,
          wrapV: Hb
        } = bb.sampler, pb = wb.state.hasMips, Vb = function(bb, wb) {
          const {
            bilinear: Mb,
            trilinear: eb
          } = Rb.j;
          return !wb && bb !== Mb || 11 !== bb && bb !== eb && bb !== Mb ? 1 : 4
        }(Mb, pb), gb = wb.sampler;
        if (gb && gb.samplingMode === Mb && gb.hasMips === pb && gb.anisotropy === Vb && gb.wrapU === eb && gb.wrapV === Hb) return gb.sampler;
        const lb = this.samplerFor(Mb, pb, Vb, eb, Hb);
        return wb.sampler = {
          samplingMode: Mb,
          hasMips: pb,
          anisotropy: Vb,
          wrapU: eb,
          wrapV: Hb,
          sampler: lb
        }, lb
      }
      releaseTexture(bb) {
        var wb, Mb;
        bb.view && (null === (Mb = this.onDestroy) || void 0 === Mb || Mb.call(this, bb.view));
        null === (wb = bb.destroy) || void 0 === wb || wb.call(bb)
      }
      textureSlot(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = bb.gpu[Rb.g.lite];
        if ((null === Mb || void 0 === Mb ? void 0 : Mb.epoch) === this.epoch) return Mb;
        const eb = function(bb) {
          let {
            source: wb,
            sampler: Mb
          } = bb;
          return "canvas" === wb.kind ? null : `${wb.kind}|${wg(wb)}|${Mb.noMipmap}|${Mb.samplingMode}|${Mb.invertY}`
        }(bb);
        let Hb = null === eb ? void 0 : this.textures.get(eb);
        var pb;
        Hb || (Hb = {
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
          dynamicSource: null !== (pb = null === Mb || void 0 === Mb ? void 0 : Mb.state.dynamicSource) && void 0 !== pb ? pb : null
        }, null !== eb && (this.textures.set(eb, Hb), this.load(bb, Hb), wb && !Mb && this.firstBindDecodes++));
        Hb.refs++;
        const Vb = Hb,
          {
            epoch: gb
          } = this,
          lb = {
            state: Hb,
            bound: null,
            sampler: null,
            release: () => {
              gb === this.epoch && this.releaseSlot(Vb, eb)
            },
            epoch: gb
          };
        return bb.gpu[Rb.g.lite] = lb, lb
      }
      samplerFor(bb, wb, Mb, eb, Hb) {
        const pb = `${bb}|${wb}|${Mb}|${eb}|${Hb}`;
        let Vb = this.samplers.get(pb);
        if (!Vb) {
          const gb = {
            ...TV(bb, wb, Mb),
            addressModeU: kV(eb),
            addressModeV: kV(Hb)
          };
          Vb = (0, NV.c)(this.engine, gb), this.samplers.set(pb, Vb)
        }
        return Vb
      }
      upload(bb, wb) {
        const {
          source: Mb,
          sampler: eb
        } = bb;
        wb.hasMips = !eb.noMipmap, "canvas" === Mb.kind ? this.createDynamic(Mb, wb) : "cube" === Mb.kind ? this.uploadCube(wb, Mb.luminance) : this.uploadImage(wb, !0 === eb.invertY, Mb.url)
      }
      uploadImage(bb, wb, Mb) {
        const [eb] = bb.images;
        bb.images = null;
        const {
          epoch: Hb
        } = this, pb = (0, vV.b)(this.engine, eb, {
          mipMaps: bb.hasMips,
          invertY: wb,
          srgb: !1
        }).then((wb => {
          eb.close(), 0 !== bb.refs && Hb === this.epoch ? (bb.view = wb.view, bb.destroy = wb.texture.destroy.bind(wb.texture)) : wb.texture.destroy()
        }));
        this.track(bb, Mb, pb)
      }
      track(bb, wb, Mb, eb) {
        const {
          epoch: Hb
        } = this;
        bb.loading = !0, this.pending++, Mb.catch((Mb => {
          Hb === this.epoch && (bb.failed = !0, console.warn(`Lite: could not load texture ${Tb(wb)}`, Mb))
        })).finally((() => {
          Hb === this.epoch && (bb.loading = !1, this.pending--, null === eb || void 0 === eb || eb())
        }))
      }
      uploadCube(bb, wb) {
        const Mb = bb.images;
        bb.images = null;
        const eb = aV(this.engine, this.device, Mb, (0, Rb.w)(wb), bb.hasMips);
        bb.view = eb.createView({
          dimension: "cube"
        }), bb.destroy = () => {
          eb.destroy()
        }
      }
      createDynamic(bb, wb) {
        const {
          canvas: Mb
        } = bb, eb = (0, QV.b)(this.engine, Math.max(1, Mb.width), Math.max(1, Mb.height), {
          mipMaps: wb.hasMips,
          srgb: !1
        });
        wb.dynamic = eb, wb.view = eb.view, wb.destroy = () => {
          eb.texture.destroy()
        }, this.pushDynamic(bb, wb)
      }
      pushDynamic(bb, wb) {
        const Mb = wb.dynamicSource,
          eb = wb.dynamic,
          {
            canvas: Hb
          } = bb;
        if (Mb && eb && 0 !== Hb.width && 0 !== Hb.height) return Hb.width !== eb.width || Hb.height !== eb.height ? (this.releaseTexture(wb), wb.dynamic = null, wb.view = null, void this.createDynamic(bb, wb)) : void(0, QV.e)(this.engine, eb, Hb, {
          invertY: Mb.invertY,
          premultiplyAlpha: Mb.premultiplied
        })
      }
    }

    function wg(bb) {
      return "cube" === bb.kind ? bb.rootUrl : "canvas" === bb.kind ? "canvas" : bb.url
    }
    const Mg = new Uint8Array(4);
    var eg = Mb(40052);

    function Hg(bb) {
      const wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      bb._colorAttachment.storeOp = bb._targetSignature._sampleCount > 1 ? wb : "store";
      const Mb = bb._renderPassDescriptor.depthStencilAttachment;
      Mb && (Mb.depthStoreOp = wb, Mb.stencilStoreOp && (Mb.stencilStoreOp = wb))
    }
    var pg = Mb(39001),
      Vg = Mb(38514),
      gg = Mb(38584),
      lg = Mb(41065);
    const Lg = new Float64Array([1, 1, 1]),
      Ig = new Float64Array([0, 1, 0]),
      Og = new Float64Array(4),
      Ug = new Float32Array(16),
      tg = new Float64Array(3),
      Cg = new Float64Array(4);

    function Eg(bb, wb, Mb) {
      bb.fov = wb.fov, bb.near = wb.near, bb.far = wb.far, bb.renderWidth = Mb.renderWidth, bb.renderHeight = Mb.renderHeight, (0, gg.z)(wb.holderRotation, 0, Og, 0), (0, gg.e)(Lg, 0, Og, 0, wb.holderPosition, 0, Ug);
      const eb = wb.k_;
      tg[0] = eb[0], tg[1] = eb[1], tg[2] = eb[2] + 1;
      const Hb = bb.viewMatrix;
      (0, gg.p)(eb, tg, Ig, Hb), (0, gg.l)(Hb, 0, Hb), (0, gg.t)(Hb, Ug, 0, Hb), (0, gg.l)(Hb, 0, Hb);
      const pb = bb.worldMatrix;
      (0, gg.l)(Hb, 0, pb), bb.eye[0] = pb[12], bb.eye[1] = pb[13], bb.eye[2] = pb[14], Cg[0] = bb.fov, Cg[1] = bb.renderWidth / bb.renderHeight, Cg[2] = bb.near, Cg[3] = bb.far, (0, gg.w)(Cg, bb.projectionMatrix), (0, gg.t)(Hb, bb.projectionMatrix, 0, bb.viewProjectionMatrix), (0, lg.f)(bb.viewProjectionMatrix, bb.frustum)
    }

    function Fg(bb, wb) {
      let Mb = bb.frustumPlanes;
      Mb || (Mb = bb.frustumPlanes = Array.from({
        length: 6
      }, (() => new pg.d(0, 0, 0, 0))));
      for (let eb = 0; eb < 6; eb++) {
        const bb = Mb[eb].normal;
        bb._x = wb[4 * eb], bb._y = wb[4 * eb + 1], bb._z = wb[4 * eb + 2], bb._isDirty = !0, Mb[eb].d = wb[4 * eb + 3]
      }
    }

    function Bg(bb, wb) {
      const Mb = wb.clearColor;
      bb.clearColour[0] = Mb.r, bb.clearColour[1] = Mb.g, bb.clearColour[2] = Mb.b, bb.clearColour[3] = Mb.a;
      const eb = wb.ambientColor;
      bb.ambientColour[0] = eb.r, bb.ambientColour[1] = eb.g, bb.ambientColour[2] = eb.b, bb.animationRatio = wb.animationRatio, bb.frameId = wb.frameId, bb.version++
    }

    function sg(bb) {
      const wb = bb.model.view;
      return wb.animTick = (0, Vg.f)(), wb.timeMs = performance.now(), Bg(wb, bb.JE), bb.model.update(wb.frameId), wb
    }

    function mg(bb) {
      const wb = bb.JE,
        {
          view: Mb,
          T_: eb
        } = bb.model;
      return Eg(Mb, eb, wb.DC()), wb.onBeforeRenderObservable.notifyObservers(wb), Fg(wb, Mb.frustum), wb.onBeforeCameraRenderObservable.notifyObservers(wb.activeCamera), sg(bb)
    }
    var hg = Mb(38552),
      zg = Mb(38663),
      Xg = Mb(39052);

    function xg(bb) {
      var wb, Mb;
      const eb = (0, Kb.ab)(bb);
      if (!eb || eb.diffuseTexture && (0, Xg.g)(bb)) return null;
      const Hb = null === (wb = (0, Kb.w)(eb, xb.i.name)) || void 0 === wb ? void 0 : wb.state,
        pb = null === (Mb = (0, Kb.w)(eb, bV.c.name)) || void 0 === Mb ? void 0 : Mb.state,
        Vb = new Float32Array(16);
      return function(bb, wb, Mb, eb) {
        var Hb, pb;
        const Vb = Je;
        eb.set(bb.diffuseColor, Vb.diffuse), eb[Vb.diffuse + 3] = bb.alpha, eb.set(bb.ambientColor, Vb.ambientAndCutoff), eb[Vb.ambientAndCutoff + 3] = bb.alphaCutOff, eb.set(bb.emissiveColor, Vb.emissiveAndLevel), eb[Vb.emissiveAndLevel + 3] = null !== (Hb = null === (pb = bb.diffuseTexture) || void 0 === pb ? void 0 : pb.level) && void 0 !== Hb ? Hb : 1, null !== wb && void 0 !== wb && wb.animDataPerTex ? (eb[Vb.anim + 1] = Vg.b, eb[Vb.anim + 2] = wb.animDataPerTex.length / 3 - 1) : Mb && (eb[Vb.anim + 1] = Mb.numAnimStates, eb[Vb.anim + 2] = Mb.ticksPerAnimState)
      }(eb, Hb, pb, Vb), {
        model: eb,
        atlas: Hb,
        texture: Hb ? "atlas" : eb.diffuseTexture ? "single" : "none",
        animated: Hb ? !!Hb.animDataPerTex : !!pb,
        liquid: (0, Xg.h)(bb),
        customRenderMat: (0, Xg.g)(bb),
        uniformData: Vb
      }
    }
    var jg = Mb(4120);
    class Kg {
      constructor(bb) {
        this.units = bb, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var bb;
        this.buffer.destroy(), null === (bb = this.twin) || void 0 === bb || bb.destroy()
      }
    }
    class rg {
      constructor(bb, wb) {
        this.arena = bb, this.gF = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.gF = new dV(wb);
        const Mb = new Kg(wb);
        Mb.buffer = this.createBuffer(Mb, !1), this.backings.push(Mb), this.refresh()
      }
      get qO() {
        return this.gF.qO
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
        let bb = 0;
        for (const wb of this.backings) bb += wb.units * (this.arena.unitBytes + (wb.twin ? this.arena.twinUnitBytes : 0));
        return bb
      }
      holds(bb) {
        return bb.start + bb.length <= this.usable
      }
      lost(bb) {
        return this.dropped || bb.start + bb.length > this.qO
      }
      write(bb, wb) {
        const {
          device: Mb,
          unitBytes: eb
        } = this.arena;
        for (const Hb of this.backings) {
          const pb = (Hb.units - bb.start) * eb;
          pb > 0 && Mb.queue.writeBuffer(Hb.buffer, bb.start * eb, wb, 0, Math.min(wb.byteLength, pb))
        }
      }
      writeLight(bb, wb) {
        const {
          device: Mb,
          twinUnitBytes: eb,
          verticesPerUnit: Hb
        } = this.arena, {
          light: pb,
          count: Vb
        } = this.arena.twinLight(wb, Math.min(wb.length, bb.length * Hb));
        for (const gb of this.backings) {
          gb.twin || (gb.twin = this.createBuffer(gb, !0));
          const wb = (gb.units - bb.start) * Hb;
          wb > 0 && Mb.queue.writeBuffer(gb.twin, bb.start * eb, pb, 0, Math.min(Vb, wb))
        }
      }
      grow(bb) {
        this.arena.assertNotDrawing();
        const {
          device: wb,
          unitBytes: Mb,
          label: eb
        } = this.arena, Hb = this.backings[this.backings.length - 1], pb = new Kg(bb), Vb = wb.createCommandEncoder({
          label: `${eb}-grow`
        });
        pb.buffer = this.createBuffer(pb, !1), Vb.copyBufferToBuffer(Hb.buffer, 0, pb.buffer, 0, Hb.units * Mb), Hb.twin && (pb.twin = this.createBuffer(pb, !0), Vb.copyBufferToBuffer(Hb.twin, 0, pb.twin, 0, Hb.units * this.arena.twinUnitBytes)), wb.queue.submit([Vb.finish()]), this.backings.push(pb), this.gF.grow(bb)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const bb of this.backings) bb.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(bb, wb) {
        const {
          device: Mb,
          unitBytes: eb,
          twinUnitBytes: Hb,
          usage: pb,
          label: Vb
        } = this.arena;
        Mb.pushErrorScope("out-of-memory");
        const gb = Mb.createBuffer({
          label: wb ? `${Vb}-light` : Vb,
          size: bb.units * (wb ? Hb : eb),
          usage: (wb ? this.arena.twinUsage : pb) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, Mb.popErrorScope().then((Mb => {
          this.arena.awaitingVerdict--, this.settle(bb, wb, !Mb, !0)
        }), (Mb => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Vb} buffer, taken as failed: ${String(Mb)}`), this.settle(bb, wb, !1, !1)
        })), gb
      }
      settle(bb, wb, Mb, eb) {
        const Hb = this.backings.indexOf(bb);
        if (!(this.dropped || Hb < 0)) {
          if (!Mb) {
            if (eb && this.arena.ranOutOfMemory(bb.units, bb.units * (wb ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Hb) return void this.drop();
            for (const bb of this.backings.splice(Hb)) bb.destroy();
            return this.gF.truncate(this.backings[Hb - 1].units), this.growable = !1, void this.promote()
          }
          wb ? bb.twinReady = !0 : (bb.bufferReady = !0, this.arena.allocatedBuffer(bb.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: bb
        } = this;
        let wb = 0;
        for (; wb + 1 < bb.length && bb[wb].ready && bb[wb + 1].ready;) wb++;
        for (const Mb of bb.splice(0, wb)) Mb.destroy();
        this.refresh()
      }
      refresh() {
        const bb = this.backings[0];
        this.buffer = bb.buffer, this.twin = bb.twinReady ? bb.twin : null, this.usable = !this.dropped && bb.bufferReady ? bb.units : 0
      }
    }
    class Rg {
      constructor(bb, wb, Mb, eb) {
        let {
          verticesPerUnit: Hb = 1,
          twinUsage: pb = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = bb, this.unitBytes = wb, this.usage = Mb, this.label = eb, this.pages = [], this.UO = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, fw.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), wb % 4 !== 0) throw new Error(`${eb}: ${wb}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Hb, this.twinUsage = pb, this.twinValueBytes = Hb > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Hb
      }
      twinLight(bb, wb) {
        if (4 === this.twinValueBytes) return this.widened.length < wb && (this.widened = new Float32Array(Math.max(wb, 2 * this.widened.length))), this.widened.set(bb.subarray(0, wb)), {
          light: this.widened,
          count: wb
        };
        const Mb = wb % this.verticesPerUnit;
        if (0 === Mb) return {
          light: bb,
          count: wb
        };
        const eb = wb - Mb + this.verticesPerUnit;
        return this.padded.length < eb && (this.padded = new Uint16Array(Math.max(eb, 2 * this.padded.length))), this.padded.set(bb.subarray(0, wb)), this.padded.fill(0, wb, eb), {
          light: this.padded,
          count: eb
        }
      }
      allocate(bb) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), bb > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Hb of this.pages) {
          const wb = Hb.gF.allocate(bb);
          if (wb >= 0) return {
            page: Hb,
            start: wb,
            length: bb
          }
        }
        const wb = this.pages[this.pages.length - 1];
        if (null !== wb && void 0 !== wb && wb.canGrow) {
          const Mb = Math.min(this.ceiling, Math.max(2 * wb.qO, wb.qO + bb));
          if (Mb - wb.qO >= bb) return wb.grow(Mb), {
            page: wb,
            start: wb.gF.allocate(bb),
            length: bb
          }
        }
        wb && wb !== this.pages[0] && 0 === wb.gF.used && wb.drop();
        const Mb = Math.floor(1048576 / this.unitBytes),
          eb = new rg(this, Math.max(bb, Math.min(this.ceiling, Mb)));
        return this.pages.push(eb), {
          page: eb,
          start: eb.gF.allocate(bb),
          length: bb
        }
      }
      free(bb) {
        this.assertNotDrawing();
        const {
          page: wb
        } = bb;
        wb.gF.free(bb.start, bb.length), 0 === wb.gF.used && wb !== this.pages[0] && wb !== this.pages[this.pages.length - 1] && wb.drop()
      }
      retire() {
        for (const bb of this.pages) bb.retire()
      }
      remove(bb) {
        const wb = this.pages.indexOf(bb);
        wb >= 0 && this.pages.splice(wb, 1)
      }
      ranOutOfMemory(bb, wb) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${wb}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, bb), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, bb) / 2));
        const Mb = performance.now();
        Mb >= this.shortageUntil && (this.forgetFailedAt = Mb + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = Mb + 1e3)
      }
      allocatedBuffer(bb) {
        bb >= this.failed && (this.failed = 1 / 0);
        const wb = Math.min(2 * bb, Math.floor((bb + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, wb))
      }
      stats() {
        let bb = 0,
          wb = 0,
          Mb = 0,
          eb = 0;
        for (const Hb of this.pages) bb += Hb.qO, wb += Hb.gF.used, Mb += Hb.hasTwin ? Hb.qO * this.twinUnitBytes : 0, eb += Hb.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: bb * this.unitBytes,
          usedBytes: wb * this.unitBytes,
          twinBytes: Mb,
          allocatedBytes: eb
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: bb,
          maxStorageBufferBindingSize: wb
        } = this.device.limits;
        let Mb = Math.floor(Math.min(67108864, bb) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (Mb = Math.min(Mb, Math.floor(wb / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (Mb = Math.min(Mb, Math.floor(wb / this.twinUnitBytes))), Mb
      }
    }
    const Dg = 16383;

    function cg(bb, wb, Mb, eb, Hb) {
      let pb = 0;
      for (let Vb = Mb; Vb < eb; Vb += Dg) bb.drawIndexed(6 * Math.min(Dg, eb - Vb), 1, 0, wb + 4 * Vb, Hb), pb++;
      return pb
    }
    class Yg {
      constructor(bb, wb) {
        this.recordsGroup = wb, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const Mb = nw.f.strideWithoutAtlas;
        this.vertexArena = new Rg(bb, Mb, GPUBufferUsage.VERTEX, `terrain-vertices-${Mb}`), this.quadArena = new Rg(bb, zg.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const eb = (0, yw.e)(new Uint16Array(98298), Dg);
        this.quadPattern = bb.createBuffer({
          label: "terrain-quad-pattern",
          size: eb.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), bb.queue.writeBuffer(this.quadPattern, 0, eb)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(bb, wb) {
        const Mb = wb.packedVertices,
          eb = Mb ? this.quadArena.allocate(bb.faceCount) : this.vertexArena.allocate(bb.vertexCount);
        if (!eb) return !1;
        bb.vertices = eb;
        const Hb = Mb ? new Uint8Array(Mb.buffer, Mb.byteOffset, Mb.byteLength) : new Uint8Array(wb.vertices);
        return eb.page.write(eb, Hb), !0
      }
      setLight(bb, wb) {
        const {
          vertices: Mb
        } = bb;
        Mb && 0 !== wb.length && Mb.page.live && (wb.length < bb.vertexCount ? Mb.page.arena.warnOnce("shortLight", `a part's ${wb.length} light values are fewer than its ${bb.vertexCount} vertices, so its light is left as it was`) : (Mb.page.writeLight(Mb, wb), bb.lit = !0))
      }
      lightFullSky(bb, wb) {
        this.fullSky.length < wb && (this.fullSky = new Uint16Array(Math.max(wb, 4096)).fill(jg.j));
        for (const Mb of bb) {
          const bb = Mb.vertices;
          bb.page.live && (bb.page.writeLight(bb, this.fullSky), Mb.lit = !0)
        }
      }
      backed(bb) {
        const {
          vertices: wb
        } = bb;
        return !!wb && wb.page.holds(wb)
      }
      lost(bb) {
        const {
          vertices: wb
        } = bb;
        return !!wb && wb.page.lost(wb)
      }
      release(bb) {
        bb.vertices && bb.vertices.page.arena.free(bb.vertices), bb.vertices = null, bb.lit = !1
      }
      setDrawing(bb) {
        this.forgetBound()
      }
      draw(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wb.faceCount;
        const pb = wb.vertices,
          Vb = pb.page,
          gb = Mb ? Vb.twin : null;
        if (!Vb.holds(pb) || Mb && !gb) return 0;
        const {
          verticesPerUnit: lb
        } = Vb.arena;
        let Lb = pb.start * lb;
        this.boundPattern || (bb.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Ib = eb + Hb;
        if (lb > 1) return Vb.buffer === this.boundRecords && gb === this.boundRecordsLight || (bb.setBindGroup(1, this.recordsGroup(Vb.buffer, gb)), this.boundRecords = Vb.buffer, this.boundRecordsLight = gb), cg(bb, Lb, eb, Ib, wb.slot);
        Vb.buffer !== this.boundVertices && (bb.setVertexBuffer(0, Vb.buffer), this.boundVertices = Vb.buffer), gb && gb !== this.boundLight && (bb.setVertexBuffer(1, gb), this.boundLight = gb);
        const Ob = wb.faceCount;
        return Ib <= Ob ? cg(bb, Lb, eb, Ib, wb.slot) : cg(bb, Lb, eb, Ob, wb.slot) + cg(bb, Lb, Math.max(eb, Ob) - Ob, Ib - Ob, wb.slot)
      }
      get buffersAwaitingVerdict() {
        let bb = 0;
        for (const wb of this.arenas()) bb += wb.awaitingVerdict;
        return bb
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Zg {
      constructor(bb, wb, Mb, eb) {
        this.device = bb, this.splitBefore = wb, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = bb.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Hb = bb.createShaderModule({
          label: "scene-depth-copy",
          code: (pb = Mb._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${pb?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var pb;
        bb.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Hb,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Hb,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((bb => {
          this.pipeline = bb, this.building = !1
        }), (bb => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", bb)
        })), Mb._executeWithTransmission = () => this.execute(Mb, eb)
      }
      get compiling() {
        return this.building
      }
      setWanted(bb) {
        this.wanted = bb
      }
      setPlanes(bb, wb) {
        bb === this.near && wb === this.far || (this.near = bb, this.far = wb, this.unproject[0] = bb / (wb - bb), this.unproject[1] = wb * bb / (wb - bb), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var bb, wb;
        return null !== (bb = null === (wb = this.copy) || void 0 === wb ? void 0 : wb.view) && void 0 !== bb ? bb : null
      }
      execute(bb, wb) {
        var Mb;
        null === (Mb = this.retired) || void 0 === Mb || Mb.destroy(), this.retired = null;
        const eb = Xw(wb),
          Hb = bb._transparentBindings,
          pb = this.wanted && this.pipeline ? this.splitIndex(Hb) : -1,
          Vb = bb._colorAttachment,
          gb = Vb.resolveTarget;
        pb >= 0 && (Vb.resolveTarget = void 0, Hg(bb, !0));
        let lb = eb.beginRenderPass(bb._renderPassDescriptor);
        lb.setBindGroup(0, bb._sceneBG);
        let Lb = this.drawList(lb, wb, bb._opaqueBindings, 0, bb._opaqueBindings.length);
        if (Lb += this.drawList(lb, wb, bb._directBindings, 0, bb._directBindings.length), Lb += this.drawList(lb, wb, Hb, 0, pb >= 0 ? pb : Hb.length), lb.end(), pb < 0) return Lb;
        Hg(bb);
        const Ib = bb._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Ob,
            stencilLoadOp: Ub
          } = Ib,
          tb = Vb.loadOp;
        Vb.resolveTarget = gb;
        try {
          this.copyDepth(eb, bb), Vb.loadOp = "load", Ib.depthLoadOp = "load", Ub && (Ib.stencilLoadOp = "load"), lb = eb.beginRenderPass(bb._renderPassDescriptor), lb.setBindGroup(0, bb._sceneBG), Lb += this.drawList(lb, wb, Hb, pb, Hb.length), lb.end()
        } finally {
          Vb.loadOp = tb, Ib.depthLoadOp = Ob, Ib.stencilLoadOp = Ub
        }
        return Lb
      }
      splitIndex(bb) {
        for (let wb = 0; wb < bb.length; wb++)
          if (bb[wb].renderable === this.splitBefore) return wb;
        return -1
      }
      drawList(bb, wb, Mb, eb, Hb) {
        let pb = null,
          Vb = 0;
        for (let gb = eb; gb < Hb; gb++) {
          const eb = Mb[gb],
            Hb = eb.renderable.mesh;
          Hb && !1 === Hb.visible || (eb.pipeline !== pb && (bb.setPipeline(eb.pipeline), pb = eb.pipeline), Vb += eb.draw(bb, wb))
        }
        return Vb
      }
      copyDepth(bb, wb) {
        var Mb, eb;
        const Hb = (null !== (Mb = wb._config.depth) && void 0 !== Mb ? Mb : wb._config.rt)._depthTexture,
          pb = (null === (eb = this.copy) || void 0 === eb ? void 0 : eb.source) === Hb ? this.copy : this.remakeCopy(Hb),
          Vb = bb.beginRenderPass(pb.pass);
        Vb.setPipeline(this.pipeline), Vb.setBindGroup(0, pb.bindGroup), Vb.draw(3), Vb.end()
      }
      remakeCopy(bb) {
        var wb, Mb;
        this.retired = null !== (wb = null === (Mb = this.copy) || void 0 === Mb ? void 0 : Mb.texture) && void 0 !== wb ? wb : null;
        const eb = this.device.createTexture({
            label: "scene-depth",
            size: [bb.width, bb.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Hb = eb.createView(),
          pb = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: bb.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Vb = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Hb,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: bb,
          texture: eb,
          view: Hb,
          bindGroup: pb,
          pass: Vb
        }, this.copy
      }
    }
    const fg = "rgba8unorm";

    function Ag(bb) {
      return bb ? 15 : 1
    }
    class Wg {
      constructor(bb, wb, Mb, eb) {
        this.device = bb, this.terrain = eb, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = wb._targetSignature._sampleCount > 1, this.cameraBuffer = bb.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = bb.createBindGroupLayout({
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
        const Hb = bb.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = bb.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Hb,
          entries: []
        });
        const pb = bb.createShaderModule({
          label: "sun-shadow-mask",
          code: (Vb = this.edge, `${(0,ow.C)()}${le({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Vb?oM:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Ag(Vb)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Vb?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Vb;
        bb.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: bb.createPipelineLayout({
            bindGroupLayouts: [this.layout, Hb, Hb, ip(bb, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: pb,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: pb,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((bb => {
          this.pipeline = bb, this.building = !1
        }), (bb => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", bb)
        }));
        const gb = wb._executeWithTransmission;
        wb._executeWithTransmission = bb => this.execute(wb, Mb, (() => gb ? gb(bb) : function(bb, wb) {
          const Mb = Xw(wb).beginRenderPass(bb._renderPassDescriptor);
          Mb.setBindGroup(0, bb._sceneBG);
          let eb = Jg(Mb, wb, bb._opaqueBindings);
          return eb += Jg(Mb, wb, bb._directBindings), eb += Jg(Mb, wb, bb._transparentBindings), Mb.end(), eb
        }(wb, Mb)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var bb, wb;
        return null !== (bb = null === (wb = this.targets) || void 0 === wb ? void 0 : wb.maskView) && void 0 !== bb ? bb : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(bb) {
        ! function(bb, wb) {
          const Mb = bb.worldMatrix,
            eb = bb.projectionMatrix,
            Hb = 1 / eb[0],
            pb = 1 / eb[5],
            Vb = bb.far * bb.near / (bb.far - bb.near);
          wb[0] = bb.eye[0], wb[1] = bb.eye[1], wb[2] = bb.eye[2], wb[3] = 2 ** -23 / Vb, wb[4] = Mb[0] * Hb, wb[5] = Mb[1] * Hb, wb[6] = Mb[2] * Hb, wb[7] = Vb, wb[8] = Mb[4] * pb, wb[9] = Mb[5] * pb, wb[10] = Mb[6] * pb, wb[11] = bb.near / (bb.far - bb.near), wb[12] = Mb[8], wb[13] = Mb[9], wb[14] = Mb[10], wb[15] = 0
        }(bb, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(bb, wb, Mb) {
        if (this.retire(), !this.terrain.readsMask) return Mb();
        const eb = this.targetsFor(bb),
          Hb = Xw(wb),
          pb = bb._renderPassDescriptor.depthStencilAttachment;
        this.edge || (eb.prepass.depthStencilAttachment.view = pb.view);
        const Vb = this.terrain.drawPrepass(Hb, eb.prepass, bb._sceneBG);
        if (0 === Vb) return Mb();
        if (this.trace(Hb, eb), this.edge) return Vb + 1 + Mb();
        const {
          depthLoadOp: gb,
          stencilLoadOp: lb
        } = pb;
        pb.depthLoadOp = "load", lb && (pb.stencilLoadOp = "load");
        try {
          return Vb + 1 + Mb()
        } finally {
          pb.depthLoadOp = gb, pb.stencilLoadOp = lb
        }
      }
      trace(bb, wb) {
        const Mb = this.terrain.sunShadowGroup(),
          eb = bb.beginRenderPass(wb.trace);
        this.pipeline && Mb && (eb.setPipeline(this.pipeline), eb.setBindGroup(0, wb.bindGroup), eb.setBindGroup(1, this.empty), eb.setBindGroup(2, this.empty), eb.setBindGroup(3, Mb), eb.draw(3)), eb.end()
      }
      retire() {
        const bb = this.retired;
        var wb;
        bb && (bb.mask.destroy(), bb.normals.destroy(), null === (wb = bb.depth) || void 0 === wb || wb.destroy(), this.retired = null)
      }
      targetsFor(bb) {
        var wb, Mb;
        const eb = (null !== (wb = bb._config.depth) && void 0 !== wb ? wb : bb._config.rt)._depthTexture;
        return (null === (Mb = this.targets) || void 0 === Mb ? void 0 : Mb.source) === eb ? this.targets : this.remake(bb, eb)
      }
      remake(bb, wb) {
        var Mb;
        this.retired = this.targets;
        const eb = [wb.width, wb.height],
          Hb = this.device.createTexture({
            label: "sun-shadow-mask",
            size: eb,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          pb = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: eb,
            format: fg,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Vb = null !== (Mb = bb._targetSignature._depthStencilFormat) && void 0 !== Mb ? Mb : wb.format,
          gb = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: eb,
            format: Vb,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          lb = bb._renderPassDescriptor.depthStencilAttachment,
          Lb = Vb.includes("stencil"),
          Ib = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: pb.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: gb ? gb.createView() : lb.view,
              depthClearValue: lb.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Lb ? {
                stencilClearValue: lb.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Ob = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== gb && void 0 !== gb ? gb : wb).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: pb.createView()
            }]
          }),
          Ub = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Hb.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Ag(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: wb,
          mask: Hb,
          maskView: Hb.createView(),
          normals: pb,
          depth: gb,
          bindGroup: Ob,
          prepass: Ib,
          trace: Ub
        }, this.targets
      }
    }

    function Jg(bb, wb, Mb) {
      let eb = null,
        Hb = 0;
      for (const pb of Mb) {
        const Mb = pb.renderable.mesh;
        Mb && !1 === Mb.visible || (pb.pipeline !== eb && (bb.setPipeline(pb.pipeline), eb = pb.pipeline), Hb += pb.draw(bb, wb))
      }
      return Hb
    }
    const Sg = 6e4,
      Ng = {
        status: "ok"
      },
      vg = {
        status: "skipped"
      };
    async function Qg(bb, wb) {
      const {
        isCancelled: Mb
      } = bb;
      if (Mb()) return {
        status: "Yb"
      };
      const {
        target: eb
      } = wb;
      if (!eb) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Hb = [],
        pb = Promise.all(Array.from(new Set(bb.materials), (async Mb => {
          Hb.push(await async function(bb, wb, Mb, eb) {
            const Hb = {
              lighting: bb.lighting,
              dirLightCount: Math.min(bb.dirLightCount, 4),
              LC: bb.runtime
            };
            try {
              const pb = wb.material(eb);
              return pb && fe(wb.programKey(pb, !1, Hb)) ? (await pb.ready, bb.isCancelled() ? Ng : pb.bindGroupLayout ? await async function(bb, wb, Mb, eb) {
                const {
                  device: Hb
                } = bb;
                let pb, Vb;
                Hb.pushErrorScope("validation");
                try {
                  pb = bb.pipelineBuild(wb, Mb, eb)
                } finally {
                  Vb = Hb.popErrorScope().catch((() => null))
                }
                const [gb, lb] = await Promise.all([Vb, pb.built.then((() => null), (bb => null !== bb && void 0 !== bb ? bb : new Error("pipeline failed")))]);
                if (!gb && !lb) return Ng;
                const Lb = await Gg(pb.module),
                  Ib = Lb.length > 0 ? Lb.map((bb => `${pb.name} ${bb.lineNum}:${bb.linePos}: ${bb.message}`)).join("\n") : `${pb.name}: ${qg(null!==lb&&void 0!==lb?lb:gb)}`;
                return {
                  status: "failed",
                  material: wb.model.name,
                  message: Ib
                }
              }(wb, pb, wb.programKey(pb, "none" !== pb.texture, Hb), Mb): (console.warn(`Shader pack: skipped the compile check for "${eb.name}", whose textures failed to load`), vg)) : Ng
            } catch (pb) {
              return {
                status: "failed",
                material: eb.name,
                message: qg(pb)
              }
            }
          }(bb, wb, eb, Mb))
        }))),
        Vb = function(bb, wb) {
          let Mb, eb, Hb = !1;
          const pb = new Promise((pb => {
            var Vb;
            Mb = setTimeout((() => {
              pb("timeout")
            }), null !== (Vb = wb.timeoutMs) && void 0 !== Vb ? Vb : Sg), eb = setInterval((() => {
              wb.isCancelled() && pb("Yb")
            }), 50), bb.lost.then((() => {
              Hb = !0, pb("lost")
            }))
          }));
          return {
            signal: pb,
            lost: () => Hb,
            dispose: () => {
              clearTimeout(Mb), clearInterval(eb)
            }
          }
        }(wb.device, bb);
      let gb;
      try {
        gb = await Promise.race([pb.then((() => "done")), Vb.signal])
      } finally {
        Vb.dispose()
      }
      if ("Yb" === gb || Mb()) return {
        status: "Yb"
      };
      const lb = Hb.find((bb => "failed" === bb.status));
      return lb && "lost" !== gb && !Vb.lost() && await new Promise((bb => {
        setTimeout(bb, 0)
      })), "lost" === gb || Vb.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : lb ? {
        status: "failed",
        failure: {
          material: lb.material,
          message: lb.message
        }
      } : "timeout" === gb ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Lb=bb.timeoutMs)&&void 0!==Lb?Lb:Sg)/1e3} s`), {
        status: "skipped"
      }) : Hb.some((bb => "skipped" === bb.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Lb
    }
    async function Gg(bb) {
      if (!bb) return [];
      try {
        return (await bb.getCompilationInfo()).messages.filter((bb => "error" === bb.type))
      } catch {
        return []
      }
    }

    function qg(bb) {
      var wb;
      return null !== (wb = null === bb || void 0 === bb ? void 0 : bb.message) && void 0 !== wb ? wb : String(bb)
    }

    function ag(bb, wb, Mb, eb, Hb) {
      fe(wb) ? Gg(eb).then((wb => {
        const [eb] = wb;
        Iw(bb, "terrain", Mb, Hb, eb ? `${eb.lineNum}:${eb.linePos} error: ${eb.message}` : null)
      })) : Iw(bb, "terrain", Mb, Hb)
    }
    var ig = Mb(38668),
      ug = Mb(38678),
      dg = Mb(38690),
      Pg = Mb(4111);

    function ng(bb, wb, Mb, eb, Hb) {
      const pb = Math.hypot(Mb[0], Mb[1], Mb[2]);
      if (!(pb > 0)) return;
      const Vb = [Mb[0] / pb, Mb[1] / pb, Mb[2] / pb],
        gb = [Math.floor(wb[0]), Math.floor(wb[1]), Math.floor(wb[2])],
        lb = [0, 0, 0],
        Lb = [1 / 0, 1 / 0, 1 / 0],
        Ib = [1 / 0, 1 / 0, 1 / 0];
      for (let tb = 0; tb < 3; tb++) Vb[tb] > 0 ? (lb[tb] = 1, Lb[tb] = (gb[tb] + 1 - wb[tb]) / Vb[tb], Ib[tb] = 1 / Vb[tb]) : Vb[tb] < 0 && (lb[tb] = -1, Lb[tb] = (gb[tb] - wb[tb]) / Vb[tb], Ib[tb] = -1 / Vb[tb]);
      const {
        gO: Ob
      } = bb;
      let Ub = bb.Vk(gb[0], gb[1], gb[2]);
      for (;;) {
        const wb = Lb[0] < Lb[1] ? Lb[0] < Lb[2] ? 0 : 2 : Lb[1] < Lb[2] ? 1 : 2;
        if (Lb[wb] > eb) return;
        const Mb = lb[wb] > 0 ? gb[wb] + 1 : gb[wb];
        gb[wb] += lb[wb], Lb[wb] += Ib[wb];
        const pb = bb.Vk(gb[0], gb[1], gb[2]),
          Vb = pb !== Ub && !(bb.opaque[Ub] && bb.opaque[pb]);
        if (Vb) {
          const eb = [gb[0], gb[1], gb[2]];
          eb[wb] = Mb;
          const pb = Math.floor(eb[0] / Ob),
            Vb = Math.floor(eb[1] / Ob),
            lb = Math.floor(eb[2] / Ob);
          !bb.isDrawn(pb, Vb, lb) && bb.hasParts(pb, Vb, lb) && Hb.add(`${pb},${Vb},${lb}`)
        }
        if (Vb && bb.occluders[pb]) return;
        Ub = pb
      }
    }

    function yg(bb, wb) {
      return bb.group - wb.group || bb.nearest - wb.nearest
    }
    class og {
      constructor(bb, wb) {
        this.device = bb, this.Rm = wb, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var bb;
        const wb = null !== (bb = this.free.pop()) && void 0 !== bb ? bb : this.next++;
        if (8 * wb >= this.data.length) {
          const bb = new Float32Array(2 * this.data.length);
          bb.set(this.data), this.data = bb, this.words = new Uint32Array(bb.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Rm()
        }
        return wb
      }
      release(bb) {
        this.free.push(bb)
      }
      set(bb, wb, Mb, eb, Hb) {
        const pb = 8 * bb + ae;
        this.data[pb] = wb, this.data[pb + 1] = Mb, this.data[pb + 2] = eb, this.setVisibility(bb, Hb)
      }
      setVisibility(bb, wb) {
        this.data[8 * bb + ie] = wb, this.markDirty(bb, bb)
      }
      setFaces(bb, wb, Mb) {
        const eb = 8 * bb;
        this.words[eb + ue] = wb, this.words[eb + de] = Mb, this.markDirty(bb, bb)
      }
      markDirty(bb, wb) {
        this.dirtyMin = Math.min(this.dirtyMin, bb), this.dirtyMax = Math.max(this.dirtyMax, wb)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Tg = qe,
      kg = !0;
    const bl = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Tg.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      wl = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Ml {
      constructor(bb) {
        this.device = bb, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(We), this.dirLightUniforms = this.frameUniforms.subarray(Ae.dirLights, Ae.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, fw.d)(), this.faceGroups = !0, this.visibilityGraph = kg, this.visCull = kg, this.visCheck = !1, this.visCullMinDistance = dg.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Vl, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.LC = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Yg(bb, ((bb, wb) => this.recordsGroup(bb, wb))), this.slots = new og(bb, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = xw(bb), this.frameLayout = bb.createBindGroupLayout({
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
        }), this.frameBuffer = bb.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = bb.createSampler({
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
          bind: (bb, wb) => this.createBinding(this.opaqueRenderable, wb, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (bb, wb) => this.createBinding(this.transparentRenderable, wb, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(bb, wb) {
        this.sceneDepth = new Zg(this.device, this.transparentRenderable, bb, wb)
      }
      createFrameBindGroup() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== bb && void 0 !== bb ? bb : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== wb && void 0 !== wb ? wb : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(bb, wb) {
        const Mb = null !== wb && void 0 !== wb ? wb : bb;
        let eb = this.recordsGroups.get(Mb);
        return eb || (eb = this.createFrameBindGroup(bb, wb), this.recordsGroups.set(Mb, eb)), eb
      }
      setChunkMesh(bb, wb, Mb) {
        var eb;
        let Hb = this.chunks.get(bb);
        Hb ? this.geometry.release(Hb) : (Hb = {
          mesh: bb,
          slot: this.slots.allocate(),
          origin: [Mb[0], Mb[1], Mb[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: bb.visibility,
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
        }, this.chunks.set(bb, Hb), this.writeSlot(Hb)), Hb.material = bb.material ? this.materialFor(bb.material) : null, Hb.packed = !!wb.packedVertices, Hb.vertexCount = (0, zg.h)(wb), Hb.faceCount = Hb.vertexCount / 4;
        const pb = null !== (eb = wb.faceGroups) && void 0 !== eb ? eb : null;
        if (Hb.faceGroups = pb, pb) {
          const bb = ig.l;
          Hb.planePX = pb[bb], Hb.planeNX = pb[bb + 1], Hb.planePY = pb[bb + 2], Hb.planeNY = pb[bb + 3], Hb.planePZ = pb[bb + 4], Hb.planeNZ = pb[bb + 5]
        }
        this.drawWhole(Hb), 0 !== Hb.faceCount && (this.geometry.set(Hb, wb) ? (Hb.packed && this.slots.setFaces(Hb.slot, Hb.vertices.start + Hb.faceCount, Hb.faceCount), wb.UC && this.setChunkMeshLight(bb, wb.UC)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Hb.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(bb, wb) {
        const Mb = this.chunks.get(bb);
        Mb && this.geometry.setLight(Mb, wb)
      }
      drawStats() {
        let bb = this.transparent.length;
        for (const wb of this.opaqueBatches) bb += wb.meshes.length;
        return {
          drawn: bb,
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
      removeChunkMesh(bb) {
        const wb = this.chunks.get(bb);
        wb && (this.geometry.release(wb), this.slots.release(wb.slot), this.chunks.delete(bb))
      }
      remeshLost(bb, wb) {
        this.geometry.release(wb), wb.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** wb.lostRemeshes++);
        const Mb = bb.XO,
          [eb, Hb, pb] = Mb.sHb(wb.origin[0], wb.origin[1], wb.origin[2]),
          Vb = Mb.CE.EE(eb, Hb, pb);
        Vb && (Vb.UE = !0, Vb.BE = !0, Mb.tE(Vb, !1))
      }
      chooseFaceRanges(bb, wb, Mb) {
        const eb = this.faceRanges;
        bb.faceMask = Mb, bb.rangeCount = (0, ug.m)(wb, Mb, eb), bb.first0 = eb[0], bb.count0 = eb[1], bb.first1 = eb[2], bb.count1 = eb[3]
      }
      drawWhole(bb) {
        bb.faceMask = -1, bb.faceEpoch = -1, bb.rangeCount = 1, bb.first0 = 0, bb.count0 = bb.faceCount
      }
      writeSlot(bb) {
        const [wb, Mb, eb] = this.originOffset;
        this.slots.set(bb.slot, bb.origin[0] - wb, bb.origin[1] - Mb, bb.origin[2] - eb, bb.visibility)
      }
      materialFor(bb) {
        const wb = this.materials.get(bb);
        if (wb) return wb;
        const Mb = xg(bb);
        if (!Mb) return this.warnOnce(`material:${bb.name}`, `Lite terrain cannot draw material "${bb.name}"; its chunks are skipped.`), null;
        const {
          model: eb,
          atlas: Hb,
          texture: pb,
          animated: Vb,
          uniformData: gb
        } = Mb, lb = {
          id: this.materials.size,
          model: eb,
          texture: pb,
          animated: Vb,
          uniformData: gb,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${bb.name}`,
            size: gb.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: Mb.liquid,
          customRenderMat: Mb.customRenderMat,
          atlasCount: 0,
          W4: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(bb, lb), this.device.queue.writeBuffer(lb.uniformBuffer, 0, gb), lb.ready = this.createMaterialBindGroup(lb, Hb).catch((wb => {
          console.error(`Lite terrain failed to load the textures of material "${bb.name}"`, wb)
        })), lb
      }
      materialLayout(bb) {
        const wb = function(bb) {
            const wb = ["uniforms"];
            if ("atlas" === bb.texture) {
              bb.animated && wb.push("animData"), wb.push("sampler");
              for (let Mb = 0; Mb < bb.atlasCount; Mb++) wb.push("textureArray")
            } else "single" === bb.texture && wb.push("sampler", "texture");
            return wb
          }(bb),
          Mb = wb.join(",");
        let eb = this.materialLayouts.get(Mb);
        if (!eb) {
          const bb = GPUShaderStage.FRAGMENT;
          eb = this.device.createBindGroupLayout({
            label: `terrain-material-${Mb}`,
            entries: wb.map(((wb, Mb) => {
              switch (wb) {
                case "uniforms":
                  return {
                    binding: Mb, visibility: GPUShaderStage.VERTEX | bb, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: Mb, visibility: GPUShaderStage.VERTEX | bb, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: Mb, visibility: bb, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: Mb, visibility: bb, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: Mb, visibility: bb, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(Mb, eb)
        }
        return eb
      }
      async createMaterialBindGroup(bb, wb) {
        const Mb = [{
          buffer: bb.uniformBuffer
        }];
        if (wb) {
          const eb = await ww(this.device, wb.sources);
          bb.atlasCount = eb.length, bb.W4 = eb[0].layerWidth, bb.atlasLayers = eb[0].layers, wb.animDataPerTex && Mb.push({
            buffer: Pb(this.device, Float32Array.from(wb.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), Mb.push(this.sampler);
          for (const bb of eb) Mb.push(bb.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === bb.texture) {
          const {
            url: wb
          } = bb.model.diffuseTexture.source, {
            pixels: eb,
            width: Hb,
            height: pb
          } = await bw(wb);
          Mb.push(this.sampler), Mb.push(yb(this.device, eb, Hb, pb, 1, `terrain-${wb}`).createView({
            dimension: "2d"
          }))
        }
        const eb = this.materialLayout(this.programKey(bb, !1));
        bb.bindGroupLayout = eb, bb.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${bb.model.name}`,
          layout: eb,
          entries: Mb.map(((bb, wb) => ({
            binding: wb,
            resource: bb
          })))
        })
      }
      programKey(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const eb = Mb ? Mb.lighting : this.lighting,
          Hb = Mb ? Mb.LC : this.LC,
          pb = {
            texture: bb.texture,
            atlasCount: bb.atlasCount,
            W4: bb.W4,
            atlasLayers: bb.atlasLayers,
            animated: bb.animated,
            alphaTest: bb.model.transparencyMode === Kb.s.alphaTest,
            lighting: eb,
            dirLightCount: Mb ? Mb.dirLightCount : this.dirLightCount,
            packed: wb
          };
        if (!Hb) return pb;
        const Vb = this.shaderPackFields(bb, Hb),
          gb = "atlas" === bb.texture && bb.model.transparencyMode === Kb.s.opaque && De(Vb.packVariant);
        return {
          ...pb,
          ...Vb,
          alphaTest: pb.alphaTest || gb
        }
      }
      shaderPackFields(bb, wb) {
        const Mb = this.packVariant(bb, wb);
        return void 0 === Mb ? re : {
          packVariant: Mb,
          liquid: bb.liquid
        }
      }
      packVariant(bb, wb) {
        return bb.customRenderMat ? void 0 : function(bb, wb) {
          const Mb = bb ? bb.defineFor(wb ? "liquid" : "terrain") : 0;
          return 0 === Mb ? void 0 : Mb
        }(wb, bb.liquid)
      }
      isBlended(bb) {
        return bb.model.transparencyMode === Kb.s.alphaBlend
      }
      shaderModule(bb, wb) {
        let Mb = this.modules.get(bb);
        return Mb || (Mb = this.device.createShaderModule({
          label: wb,
          code: bb
        }), this.modules.set(bb, Mb)), Mb
      }
      pipelineFor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!bb.bindGroupLayout) return null;
        if (!eb) return this.pipelineOf(bb, wb, Mb);
        const Hb = this.pipelineIdNow(bb, wb, !0, Mb),
          pb = this.pipelines.get(Hb);
        if (pb) return pb;
        const Vb = this.pipelineOf(bb, wb, Mb);
        return Vb && void 0 === pb && this.startPipeline(Hb, bb, {
          ...this.programKey(bb, wb),
          resting: eb
        }, Mb), Vb
      }
      pipelineOf(bb, wb, Mb) {
        const eb = this.pipelineIdNow(bb, wb, !1, Mb),
          Hb = this.pipelines.get(eb);
        return void 0 !== Hb ? Hb : (this.startPipeline(eb, bb, this.programKey(bb, wb), Mb), null)
      }
      pipelineIdNow(bb, wb, Mb, eb) {
        const {
          lighting: Hb,
          dirLightCount: pb
        } = this, {
          transparencyMode: Vb,
          backFaceCulling: gb
        } = bb.model, lb = this.packVariant(bb, this.LC), Lb = (wb ? 2 : 0) + (Mb ? 1 : 0), Ib = bb.pipelineIds[Lb];
        if (null !== Ib && Ib.lighting === Hb && Ib.dirLightCount === pb && Ib.packVariant === lb && Ib.transparencyMode === Vb && Ib.cull === gb && Ib.atlasCount === bb.atlasCount && Ib.W4 === bb.W4 && Ib.atlasLayers === bb.atlasLayers && Ib.colorFormat === eb._colorFormat && Ib.depthStencilFormat === eb._depthStencilFormat && Ib.sampleCount === eb._sampleCount) return Ib.id;
        const Ob = this.programKey(bb, wb),
          Ub = this.pipelineId(bb, Mb ? {
            ...Ob,
            resting: Mb
          } : Ob, eb);
        return bb.pipelineIds[Lb] = {
          id: Ub,
          lighting: Hb,
          dirLightCount: pb,
          packVariant: lb,
          transparencyMode: Vb,
          cull: gb,
          atlasCount: bb.atlasCount,
          W4: bb.W4,
          atlasLayers: bb.atlasLayers,
          colorFormat: eb._colorFormat,
          depthStencilFormat: eb._depthStencilFormat,
          sampleCount: eb._sampleCount
        }, Ub
      }
      pipelineId(bb, wb, Mb) {
        return el(wb, this.isBlended(bb), bb.model.backFaceCulling, Mb)
      }
      pipelineBuild(bb, wb, Mb) {
        var eb;
        const Hb = this.pipelineId(bb, wb, Mb);
        return null !== (eb = this.builds.get(Hb)) && void 0 !== eb ? eb : this.startPipeline(Hb, bb, wb, Mb)
      }
      startPipeline(bb, wb, Mb, eb) {
        var Hb;
        this.pipelines.set(bb, null);
        const pb = ke(Mb),
          Vb = this.isBlended(wb),
          gb = this.shadowMask && eb._depthStencilFormat ? function(bb, wb, Mb, eb) {
            if (void 0 === bb.packVariant || bb.liquid || wb) return "none";
            const Hb = (0, Tw.i)(bb.packVariant);
            return null === Hb || void 0 === Hb || !Hb.sunShadow || !Ve(Hb, Mb) || Hb.discards || bb.alphaTest && De(bb.packVariant) ? "none" : eb ? "edge" : "plain"
          }(Mb, Vb, !!this.sunShadow, eb._sampleCount > 1) : "none";
        let lb;
        try {
          lb = bH(Mb, !!this.sunShadow, gb)
        } catch (Fb) {
          if (!fe(Mb)) throw Fb;
          return this.failedPackBuild(bb, Mb, pb, Fb)
        }
        const Lb = this.shaderModule(lb, pb),
          Ib = [];
        Mb.packed || (Ib.push(function(bb, wb) {
          const Mb = [{
            shaderLocation: Tg.position,
            offset: nw.f.pH,
            format: "float32x3"
          }, {
            shaderLocation: Tg.normal,
            offset: nw.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Tg.color,
            offset: nw.f.colorOffset,
            format: "unorm8x4"
          }];
          return bb && Mb.push({
            shaderLocation: Tg.uv,
            offset: nw.f.uvOffset,
            format: "float32x2"
          }), wb && Mb.push({
            shaderLocation: Tg.blockFlagWords,
            offset: nw.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: nw.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: Mb
          }
        }("none" !== Mb.texture, fe(Mb))), Mb.lighting && Ib.push(bl));
        const Ob = wb.model.backFaceCulling,
          Ub = {
            label: pb,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, wb.bindGroupLayout, ...np(this.device, Mb, !!this.sunShadow, "none" !== gb)]
            }),
            vertex: {
              module: Lb,
              entryPoint: "mainVertex",
              buffers: Ib
            },
            fragment: sw({
              module: Lb,
              entryPoint: "mainFragment"
            }, eb, Vb ? wl : null),
            depthStencil: eb._depthStencilFormat ? {
              format: eb._depthStencilFormat,
              depthCompare: null !== (Hb = eb._depthCompare) && void 0 !== Hb ? Hb : jw,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: eb._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Ob ? "back" : "none"
            }
          },
          tb = Mb.resting ? 0 : 1;
        this.compiling += tb;
        const Cb = "none" === gb ? this.device.createRenderPipelineAsync(Ub) : this.startMaskPipelines(Lb, Ub, "edge" === gb);
        Cb.then((wb => {
          this.compiling -= tb, this.pipelines.set(bb, wb)
        }), (bb => {
          this.compiling -= tb, console.error(`Lite terrain pipeline ${pb} failed`, bb), ag(this.device, Mb, pb, Lb, bb)
        }));
        const Eb = {
          name: pb,
          module: Lb,
          built: Cb
        };
        return this.builds.set(bb, Eb), Eb
      }
      startMaskPipelines(bb, wb, Mb) {
        const eb = wb.depthStencil,
          Hb = this.device.createRenderPipelineAsync(Mb ? wb : {
            ...wb,
            depthStencil: {
              ...eb,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          pb = this.device.createRenderPipelineAsync({
            ...wb,
            label: `${wb.label}-prepass`,
            fragment: {
              module: bb,
              entryPoint: "prepassFragment",
              targets: [{
                format: fg
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Hb, pb]).then((bb => {
          let [wb, Mb] = bb;
          return this.prepassOf.set(wb, Mb), this.maskPipelines++, wb
        }))
      }
      failedPackBuild(bb, wb, Mb, eb) {
        console.error(`Lite terrain pipeline ${Mb} failed`, eb), ag(this.device, wb, Mb, null, eb);
        const Hb = Promise.reject(eb);
        Hb.catch((() => {}));
        const pb = {
          name: Mb,
          module: null,
          built: Hb
        };
        return this.builds.set(bb, pb), pb
      }
      checkShaderPack(bb) {
        return Qg(bb, {
          device: this.device,
          target: this.target,
          material: bb => this.materialFor(bb),
          programKey: (bb, wb, Mb) => this.programKey(bb, wb, Mb),
          pipelineBuild: (bb, wb, Mb) => this.pipelineBuild(bb, wb, Mb)
        })
      }
      createBinding(bb, wb, Mb) {
        return this.target = wb, {
          renderable: bb,
          pipeline: Dw(this.device, wb),
          draw: bb => {
            this.geometry.setDrawing(!0);
            try {
              return Mb ? this.drawTransparent(bb, wb) : this.drawOpaque(bb, wb)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(bb, wb) {
        var Mb, eb, Hb, pb;
        const {
          hU: Vb
        } = bb;
        this.lighting = bb.YE;
        const gb = (0, hg.u)(wb);
        this.dirLightCount = Math.min(gb, 4), this.LC = null !== (Mb = Vb.LC) && void 0 !== Mb ? Mb : null, gb > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(bb, wb), this.animateMaterials(wb.animTick);
        const lb = Vb.SU,
          Lb = lb[0] !== this.originOffset[0] || lb[1] !== this.originOffset[1] || lb[2] !== this.originOffset[2];
        Lb && (this.originOffset[0] = lb[0], this.originOffset[1] = lb[1], this.originOffset[2] = lb[2]);
        const Ib = wb.eye;
        this.eye[0] = Ib[0], this.eye[1] = Ib[1], this.eye[2] = Ib[2], this.writeShaderPackInputs();
        const Ob = wb.projectionMatrix,
          Ub = 0 === Ob[15];
        let tb = 0;
        (Lb || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Cb
        } = this;
        Yw(this.transparentRenderable._worldCenter, wb, rw), this.resetBatches(Ub), this.transparent.length = 0, this.unlit.length = 0;
        const Eb = Vb.XO.lO,
          Fb = Eb / 2 * Math.sqrt(3);
        let Bb = 0;
        const sb = !!this.LC && Re(this.LC.defineFor("liquid"));
        let mb = !1;
        const hb = null !== (eb = null === (Hb = Vb.fR) || void 0 === Hb ? void 0 : Hb.visibility) && void 0 !== eb ? eb : null,
          zb = this.visCull && Ub && 0 === this.compiling && null !== hb && Vb.XO.Lpb[0] >= this.visCullMinDistance ? this.target : null,
          Xb = this.visPassable,
          xb = this.visCandidates,
          jb = this.visCandidateBatches;
        Xb.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Kb = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let rb = 0;
        const Rb = (bb, Mb) => {
          if (!Mb) return this.transparent.push(bb), void(rb += 2 * bb.faceCount);
          if (null !== bb.faceGroups && Mb.faceCull) {
            if (0 === tb && (tb = (0, ug.c)(Ob, wb.renderWidth, wb.renderHeight), tb !== this.faceFocalPx && (this.faceFocalPx = tb, Cb = ++this.faceEpoch)), bb.faceEpoch !== Cb) {
              bb.faceEpoch = Cb;
              const wb = Math.sqrt(bb.distance) + Fb,
                Mb = (0, ug.j)(bb.planePX, bb.planeNX, bb.planePY, bb.planeNY, bb.planePZ, bb.planeNZ, this.eye[0] - (bb.origin[0] - this.originOffset[0]), this.eye[1] - (bb.origin[1] - this.originOffset[1]), this.eye[2] - (bb.origin[2] - this.originOffset[2]), (0, ug.g)(wb, tb));
              Mb !== bb.faceMask && this.chooseFaceRanges(bb, bb.faceGroups, Mb)
            }
            if (0 === bb.rangeCount) return
          } else - 1 !== bb.faceMask && this.drawWhole(bb);
          Mb.meshes.push(bb), rb += 2 * ((bb.rangeCount > 0 ? bb.count0 : 0) + (bb.rangeCount > 1 ? bb.count1 : 0))
        };
        for (const cb of this.chunks.values()) {
          Lb && this.writeSlot(cb);
          const bb = cb.mesh.visibility;
          bb !== cb.visibility && (cb.visibility = bb, this.slots.setVisibility(cb.slot, bb));
          const {
            material: Mb
          } = cb;
          this.geometry.lost(cb) && performance.now() >= cb.lostRetryAt && this.remeshLost(Vb, cb);
          const eb = !(null === Mb || void 0 === Mb || !Mb.bindGroup) && this.geometry.backed(cb),
            Hb = eb && this.lighting && !cb.vertices.page.twin;
          if (zb && (Number.isNaN(cb.key) && (cb.ci = Math.floor(cb.origin[0] / Eb), cb.cj = Math.floor(cb.origin[1] / Eb), cb.ck = Math.floor(cb.origin[2] / Eb), cb.key = (0, Pg.g)(cb.ci, cb.cj, cb.ck)), (!eb || bb < 1 || Hb || !this.batchDraws(Mb, cb.packed, zb)) && this.visSeeThrough(cb, zb) && Xb.add(cb.key)), !eb) continue;
          Hb || (cb.lostRemeshes = 0);
          const pb = cb.origin[0] - this.originOffset[0],
            gb = cb.origin[1] - this.originOffset[1],
            lb = cb.origin[2] - this.originOffset[2];
          if (!(0, lg.e)(wb.frustum, pb, gb, lb, Eb)) continue;
          const Ib = pb + Eb / 2 - this.eye[0],
            Ob = gb + Eb / 2 - this.eye[1],
            tb = lb + Eb / 2 - this.eye[2];
          if (cb.distance = Ib * Ib + Ob * Ob + tb * tb, this.lighting && !cb.lit && (Bb = Math.max(Bb, cb.vertexCount), this.unlit.push(cb)), Hb) continue;
          const Cb = this.isBlended(Mb) ? null : this.batchFor(Mb, cb.packed, cb.vertices.page, 1 === bb, Ub);
          zb ? (xb[Kb] = cb, jb[Kb++] = Cb) : Rb(cb, Cb)
        }
        const Db = zb ? this.sweepVisibility(bb, wb, hb) : null;
        null === (pb = (0, Jp.C)(Vb)) || void 0 === pb || pb.update(wb.frustum, this.originOffset, Eb, Db);
        for (let cb = 0; cb < Kb; cb++) {
          const bb = xb[cb];
          !Db || Db.isDrawn(bb.ci, bb.cj, bb.ck) ? Rb(bb, jb[cb]) : (this.visCulledParts++, this.visCulledTriangles += 2 * bb.faceCount)
        }
        for (const cb of this.transparent) mb ||= sb && cb.material.liquid && !cb.material.customRenderMat;
        this.submittedTriangles = rb, Db && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(bb, wb, Db)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(mb) : mb && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Bb > 0 && this.geometry.lightFullSky(this.unlit, Bb);
        for (const cb of this.opaqueBatches) this.chunkSorter.sort(cb.meshes, 1) || cb.meshes.sort(Hl);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(pl)
      }
      sweepVisibility(bb, wb, Mb) {
        const {
          XO: eb
        } = bb.hU, Hb = eb.lO, pb = this.visPassable, Vb = this.eye[0] + this.originOffset[0], gb = this.eye[1] + this.originOffset[1], lb = this.eye[2] + this.originOffset[2];
        if (!Mb.eyeClear(Vb, gb, lb, wb.near, wb.projectionMatrix, eb)) return null;
        const [Lb, Ib] = eb.Lpb, Ob = Mb.update(Vb, gb, lb, Hb, Lb, Ib, pb);
        return this.visSweeps = Mb.sweeps, Ob ? Mb : null
      }
      visSeeThrough(bb, wb) {
        const {
          material: Mb
        } = bb;
        return (!Mb || !this.isBlended(Mb)) && (bb.mesh.visibility < 1 || !(null !== Mb && void 0 !== Mb && Mb.bindGroup) || bb.faceCount > 0 && (!this.geometry.backed(bb) || this.lighting && !bb.vertices.page.twin) || !this.batchDraws(Mb, bb.packed, wb))
      }
      batchDraws(bb, wb, Mb) {
        var eb;
        const Hb = wb ? 2 : 0;
        if (bb === this.visDrawsMaterial && function(bb, wb) {
            return 0 !== (bb & 1 << wb)
          }(this.visDrawsBits, Hb)) return 0 !== (this.visDrawsBits & 2 << Hb);
        let pb = null !== (eb = this.visBatchDraws.get(bb)) && void 0 !== eb ? eb : 0;
        if (!(pb & 1 << Hb)) {
          pb |= 1 << Hb | (!!bb.bindGroupLayout && this.canDraw(bb, wb) && !!this.pipelines.get(this.pipelineIdNow(bb, wb, !1, Mb)) ? 2 << Hb : 0), this.visBatchDraws.set(bb, pb)
        }
        return this.visDrawsMaterial = bb, this.visDrawsBits = pb, 0 !== (pb & 2 << Hb)
      }
      runVisCheck(bb, wb, Mb) {
        const {
          hU: eb
        } = bb, {
          XO: Hb
        } = eb, pb = Hb.lO, Vb = new Set;
        for (const tb of this.chunks.values()) Vb.add(tb.key);
        const gb = aH.Matrix.FromArray(wb.viewProjectionMatrix).invert(),
          [lb, Lb, Ib] = this.originOffset,
          Ob = new aH.YC,
          Ub = function(bb, wb, Mb, eb) {
            const Hb = new Set;
            for (let pb = 0; pb < 27; pb++)
              for (let Vb = 0; Vb < 48; Vb++) {
                const gb = Mb((Vb + .5) / 48 * 2 - 1, (pb + .5) / 27 * 2 - 1);
                ng(bb, wb, [gb[0] - wb[0], gb[1] - wb[1], gb[2] - wb[2]], eb, Hb)
              }
            return Hb
          }({
            Vk: (bb, wb, Mb) => Hb.Vk(bb, wb, Mb),
            occluders: Mb.occluders,
            opaque: Mb.opaque,
            gO: pb,
            isDrawn: (bb, wb, eb) => Mb.isDrawn(bb, wb, eb),
            hasParts: (bb, wb, Mb) => Vb.has((0, Pg.g)(bb, wb, Mb))
          }, [this.eye[0] + lb, this.eye[1] + Lb, this.eye[2] + Ib], ((bb, wb) => (aH.YC.TransformCoordinatesFromFloatsToRef(bb, wb, .5, gb, Ob), [Ob.x + lb, Ob.y + Lb, Ob.z + Ib])), (Hb.Lpb[0] + 1) * pb);
        this.visViolations = Ub.size;
        for (const tb of Ub) this.warnOnce(`vis:${tb}`, `Lite terrain cave culling skipped chunk ${tb}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var bb;
        null !== (bb = this.LC) && void 0 !== bb && bb.isRunning() && (this.shaderPackInputs ??= new yp(this.device, this.LC.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.LC, this.eye, this.lighting))
      }
      bindShaderPackInputs(bb, wb, Mb) {
        var eb, Hb, pb, Vb;
        let gb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const lb = this.packVariant(wb, Mb);
        if (void 0 === lb) return;
        this.shaderPackInputs || (this.shaderPackInputs = new yp(this.device, Mb.textureLayers(), this.sunShadow), this.shaderPackInputs.write(Mb, this.eye, this.lighting));
        const Lb = Re(lb) ? null !== (eb = null === (Hb = this.sceneDepth) || void 0 === Hb ? void 0 : Hb.view) && void 0 !== eb ? eb : this.standIn() : null,
          Ib = gb ? null !== (pb = null === (Vb = this.shadowMask) || void 0 === Vb ? void 0 : Vb.view) && void 0 !== pb ? pb : this.standIn() : null;
        this.shaderPackInputs.bind(bb, Lb, Pp(lb, !!this.sunShadow), Ib)
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
        var bb, wb;
        return null !== (bb = null === (wb = this.shaderPackInputs) || void 0 === wb ? void 0 : wb.bindGroupFor(null, !0)) && void 0 !== bb ? bb : null
      }
      resetBatches(bb) {
        const wb = this.opaqueBatches;
        let Mb = 0;
        for (const eb of wb) eb.meshes.length > 0 && (eb.meshes.length = 0, eb.faceCull = this.batchFaceCull(eb.material, bb), wb[Mb++] = eb);
        wb.length = Mb
      }
      orderBatches() {
        const bb = this.opaqueBatches;
        for (let wb = 0; wb < bb.length; wb++) {
          const Mb = bb[wb];
          Mb.group = wb;
          for (let eb = 0; eb < wb; eb++) {
            const wb = bb[eb];
            if (wb.material === Mb.material && wb.packed === Mb.packed) {
              Mb.group = wb.group;
              break
            }
          }
          Mb.nearest = Mb.meshes.length > 0 ? Mb.meshes[0].distance : 1 / 0
        }
        bb.sort(yg)
      }
      batchFor(bb, wb, Mb, eb, Hb) {
        for (const Vb of this.opaqueBatches)
          if (Vb.material === bb && Vb.packed === wb && Vb.page === Mb && Vb.resting === eb) return Vb;
        const pb = {
          material: bb,
          packed: wb,
          page: Mb,
          resting: eb,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(bb, Hb)
        };
        return this.opaqueBatches.push(pb), pb
      }
      batchFaceCull(bb, wb) {
        return !(!wb || !(0, ig.o)(bb.model)) && (!this.LC || ! function(bb) {
          var wb;
          return !(null === (wb = (0, Tw.i)(bb)) || void 0 === wb || !wb.movesVertices)
        }(this.packVariant(bb, this.LC)))
      }
      writeFrameUniforms(bb, wb) {
        const Mb = this.frameUniforms,
          eb = Ae;
        if ((0, hg.y)(bb, Mb), Mb[eb.fogInfos] = wb.fogEnabled ? wb.fogMode : 0, Mb[eb.fogInfos + 1] = wb.fogStart, Mb[eb.fogInfos + 2] = wb.fogEnd, Mb[eb.fogInfos + 3] = wb.fogDensity, Mb.set(wb.fogColour, eb.fogColour), Mb[eb.outputHeight] = wb.renderHeight, Mb.set(wb.ambientColour, eb.sceneAmbient), (0, hg.t)(wb, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const wb = (0, zg.i)(bb.TC, bb.jC, bb.KC);
          for (let bb = 0; bb < 4; bb++) Mb[eb.aoLevels + bb] = wb[bb] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, Mb)
      }
      animateMaterials(bb) {
        const wb = Je.anim;
        for (const Mb of this.materials.values()) Mb.animated && (Mb.uniformData[wb] = bb, this.device.queue.writeBuffer(Mb.uniformBuffer, 4 * wb, Mb.uniformData, wb, 1))
      }
      canDraw(bb, wb) {
        return !("atlas" === bb.texture && !wb) || (this.warnOnce(`stride:${bb.id}`, `Lite terrain: material "${bb.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(bb, wb) {
        let Mb = 0;
        bb.setBindGroup(1, this.frameBindGroup);
        for (const eb of this.opaqueBatches) {
          if (!eb.meshes.length || !this.canDraw(eb.material, eb.packed)) continue;
          const Hb = this.pipelineFor(eb.material, eb.packed, wb, eb.resting);
          Hb && (bb.setPipeline(Hb), bb.setBindGroup(2, eb.material.bindGroup), this.LC && this.bindShaderPackInputs(bb, eb.material, this.LC, this.prepassOf.has(Hb)), Mb += this.drawBatch(bb, eb))
        }
        return Mb
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(bb, wb, Mb) {
        const eb = this.target,
          Hb = this.LC;
        if (!eb || !Hb || 0 === this.maskPipelines) return 0;
        let pb = 0,
          Vb = null;
        this.geometry.setDrawing(!0);
        try {
          for (const gb of this.opaqueBatches) {
            if (!gb.meshes.length || !this.canDraw(gb.material, gb.packed)) continue;
            const lb = this.pipelineFor(gb.material, gb.packed, eb, gb.resting),
              Lb = lb && this.prepassOf.get(lb);
            Lb && (Vb || (Vb = bb.beginRenderPass(wb), Vb.setBindGroup(0, Mb), Vb.setBindGroup(1, this.frameBindGroup)), Vb.setPipeline(Lb), Vb.setBindGroup(2, gb.material.bindGroup), this.bindShaderPackInputs(Vb, gb.material, Hb, !0), pb += this.drawBatch(Vb, gb))
          }
        } finally {
          var gb;
          null === (gb = Vb) || void 0 === gb || gb.end(), this.geometry.setDrawing(!1)
        }
        return pb
      }
      drawBatch(bb, wb) {
        let Mb = 0;
        for (const eb of wb.meshes) {
          const {
            rangeCount: wb
          } = eb;
          wb > 0 && (Mb += this.geometry.draw(bb, eb, this.lighting, eb.first0, eb.count0), wb > 1 && (Mb += this.geometry.draw(bb, eb, this.lighting, eb.first1, eb.count1)))
        }
        return Mb
      }
      drawTransparent(bb, wb) {
        let Mb = 0,
          eb = null,
          Hb = null;
        bb.setBindGroup(1, this.frameBindGroup);
        for (const pb of this.transparent) {
          const Vb = pb.material;
          if (!this.canDraw(Vb, pb.packed)) continue;
          const gb = this.pipelineFor(Vb, pb.packed, wb);
          gb && (gb !== eb && (bb.setPipeline(gb), eb = gb, this.LC && this.bindShaderPackInputs(bb, Vb, this.LC)), Vb !== Hb && (bb.setBindGroup(2, Vb.bindGroup), Hb = Vb), Mb += this.geometry.draw(bb, pb, this.lighting))
        }
        return Mb
      }
    }

    function el(bb, wb, Mb, eb) {
      return `${ke(bb)}|${bb.atlasLayers}|${bb.W4}|${wb}|${Mb}|${eb._colorFormat}|${eb._depthStencilFormat}|${eb._sampleCount}`
    }

    function Hl(bb, wb) {
      return bb.distance - wb.distance
    }

    function pl(bb, wb) {
      return wb.distance - bb.distance
    }
    class Vl {
      constructor() {
        this.left = []
      }
      sort(bb, wb) {
        for (let Mb = 0; Mb < bb.length; Mb++) {
          const wb = bb[Mb].distance;
          if (wb - wb !== 0) return !1
        }
        return this.sortRange(bb, 0, bb.length, wb), !0
      }
      sortRange(bb, wb, Mb, eb) {
        if (Mb - wb <= 16) {
          for (let Hb = wb + 1; Hb < Mb; Hb++) {
            const Mb = bb[Hb],
              pb = eb * Mb.distance;
            let Vb = Hb - 1;
            for (; Vb >= wb && eb * bb[Vb].distance > pb; Vb--) bb[Vb + 1] = bb[Vb];
            bb[Vb + 1] = Mb
          }
          return
        }
        const Hb = wb + Mb >>> 1;
        if (this.sortRange(bb, wb, Hb, eb), this.sortRange(bb, Hb, Mb, eb), eb * bb[Hb - 1].distance <= eb * bb[Hb].distance) return;
        const {
          left: pb
        } = this, Vb = Hb - wb;
        for (let Ib = 0; Ib < Vb; Ib++) pb[Ib] = bb[wb + Ib];
        let gb = 0,
          lb = Hb,
          Lb = wb;
        for (; gb < Vb && lb < Mb;) bb[Lb++] = eb * bb[lb].distance < eb * pb[gb].distance ? bb[lb++] : pb[gb++];
        for (; gb < Vb;) bb[Lb++] = pb[gb++]
      }
    }
    const gl = Math.ceil(102);

    function ll(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wb;
      const pb = Math.min(wb, Mb),
        Vb = new Uint32Array(xM(eb));
      for (let gb = 0; gb < eb; gb++) {
        const wb = Math.floor(gb * pb / eb),
          Mb = Math.max(wb + 1, Math.floor((gb + 1) * pb / eb));
        for (let lb = 0; lb < eb; lb++) {
          const Lb = Math.floor(lb * pb / eb),
            Ib = Math.max(Lb + 1, Math.floor((lb + 1) * pb / eb));
          let Ob = 0;
          for (let eb = wb; eb < Mb; eb++)
            for (let wb = Lb; wb < Ib; wb++) bb[eb * Hb + wb] >= gl && Ob++;
          if (2 * Ob >= (Mb - wb) * (Ib - Lb)) {
            const bb = lb + eb * gb;
            Vb[bb >>> 5] |= 1 << (31 & bb)
          }
        }
      }
      return Vb
    }

    function Ll(bb) {
      return Math.max(1, Math.min(16, bb))
    }
    class Il {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = bb, this.loadTexture = wb, this.warn = Mb, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(bb, wb) {
        return (bb.hq !== this.builtVersion || this.blockCaster.length !== wb) && (this.build(bb, wb), !0)
      }
      build(bb, wb) {
        this.builtVersion = bb.hq;
        const Mb = new Uint16Array(wb),
          eb = new Map;
        for (let Hb = 1; Hb < wb; Hb++) {
          const wb = this.classify(bb, Hb, eb);
          if (null === wb || wb === sM) {
            Mb[Hb] = null === wb ? 0 : sM;
            continue
          }
          let pb = this.byKey.get(wb.key);
          void 0 === pb && (pb = this.allocate(wb), this.byKey.set(wb.key, pb)), Mb[Hb] = pb
        }
        this.blockCaster = Mb, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(bb, wb) {
        const Mb = bb.gbb[wb];
        if ("function" !== typeof Mb) return Mb;
        try {
          return Mb()
        } catch (eb) {
          return this.warnOnce(`Sun shadows: no caster option for block ${wb}: ${eb instanceof Error?eb.message:String(eb)}`), null
        }
      }
      classify(bb, wb, Mb) {
        const eb = this.option(bb, wb);
        if ("none" === eb) return null;
        if (eb && eb.planes.length > 0) {
          const bb = eb.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(bb)}`,
            planes: bb
          }
        }
        if (bb.Bt[wb]) return null;
        const Hb = bb.zt[wb] ? bb.Aq(wb) : null;
        if (Hb && Hb.length >= 6) {
          const bb = function(bb) {
            const wb = new Uint32Array(16);
            for (let Mb = 0; Mb + 6 <= bb.length; Mb += 6) {
              const eb = [0, 1, 2].map((wb => Math.max(0, Math.ceil(8 * bb[Mb + wb] - .5)))),
                Hb = [0, 1, 2].map((wb => Math.min(7, Math.floor(8 * bb[Mb + wb + 3] - .5))));
              for (let bb = eb[2]; bb <= Hb[2]; bb++)
                for (let Mb = eb[1]; Mb <= Hb[1]; Mb++)
                  for (let pb = eb[0]; pb <= Hb[0]; pb++) {
                    const eb = pb + 8 * (Mb + 8 * bb);
                    wb[eb >>> 5] |= 1 << (31 & eb)
                  }
            }
            return wb
          }(Hb);
          return function(bb) {
            return bb.every((bb => 4294967295 === bb))
          }(bb) ? sM : bb.every((bb => 0 === bb)) ? null : {
            kind: "shape",
            key: `shape:${bb.join(",")}`,
            mask: bb
          }
        }
        if (bb.VY[wb] || !bb.kC[wb]) return null;
        const pb = [0, 1, 2, 3, 4, 5].map((eb => {
          const Hb = bb.bE[6 * wb + eb];
          let pb = Mb.get(Hb);
          return void 0 === pb && (pb = function(bb) {
            if (!bb || bb.IE) return null;
            const {
              A4: wb,
              W4: Mb,
              f4: eb
            } = bb;
            if (!wb || !Mb || !(Mb > 0) || void 0 === eb || !(eb >= 0)) return null;
            const Hb = wb[0],
              pb = Mb * Mb * 4;
            if (!Hb || Hb.byteLength < pb) return null;
            const Vb = Math.floor(Hb.byteLength / pb),
              gb = wb[Math.floor(eb / Vb)];
            if (!gb) return null;
            const lb = new Uint8Array(gb.buffer, gb.byteOffset, gb.byteLength),
              Lb = eb % Vb * pb;
            if (Lb + pb > lb.length) return null;
            const Ib = new Uint8Array(Mb * Mb);
            let Ob = !1;
            for (let Ub = 0; Ub < Ib.length; Ub++) Ib[Ub] = lb[Lb + 4 * Ub + 3], Ob ||= Ib[Ub] < gl;
            return Ob ? {
              alpha: Ib,
              width: Mb
            } : null
          }(bb.LE(Hb)), Mb.set(Hb, pb)), pb
        }));
        if (pb.every((bb => null === bb))) return sM;
        const Vb = Ll(Math.max(...pb.map((bb => {
            var wb;
            return null !== (wb = null === bb || void 0 === bb ? void 0 : bb.width) && void 0 !== wb ? wb : 1
          })))),
          gb = new Uint32Array(xM(Vb)).fill(4294967295),
          lb = pb.map((bb => null === bb ? gb : ll(bb.alpha, bb.width, bb.width, Vb)));
        return {
          kind: "cutout",
          key: `cutout:${Vb}:${lb.map((bb=>bb.join(","))).join("|")}`,
          size: Vb,
          faces: lb
        }
      }
      allocate(bb) {
        if (this.nextCaster >= jM) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const wb = this.nextCaster++;
        if (this.writeCaster(wb, mM, 0, 0, 0), "shape" === bb.kind) {
          const Mb = this.allocateMask(bb.mask.length);
          Mb >= 0 && (this.sink(Mb, bb.mask), this.writeCaster(wb, hM, Mb, 0, 8))
        } else if ("cutout" === bb.kind) {
          const Mb = xM(bb.size),
            eb = this.allocateMask(6 * Mb);
          if (eb >= 0) {
            const Hb = new Uint32Array(6 * Mb);
            bb.faces.forEach(((bb, wb) => {
              Hb.set(bb, wb * Mb)
            })), this.sink(eb, Hb), this.writeCaster(wb, XM, eb, 0, bb.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(wb, bb.planes).finally((() => {
          this.planesLoading--
        })));
        return wb
      }
      async loadPlanes(bb, wb) {
        const Mb = await Promise.all(wb.map((bb => this.texture(bb.texture))));
        if (Mb.some((bb => null === bb))) return;
        const eb = Mb,
          Hb = Ll(Math.max(...eb.map((bb => Math.min(bb.width, bb.height))))),
          pb = xM(Hb),
          Vb = this.allocateMask(wb.length * (4 + pb));
        if (Vb < 0) return;
        const gb = new Uint32Array(wb.length * (4 + pb)),
          lb = 4 * wb.length;
        wb.forEach(((bb, wb) => {
          const Mb = Vb + lb + wb * pb;
          gb.set(function(bb, wb) {
            const [Mb, eb] = bb.tangent, Hb = Math.hypot(Mb, eb) || 1, pb = Mb / Hb, Vb = eb / Hb, gb = bb.centre[0] * Vb - bb.centre[1] * pb, lb = new Uint32Array(4);
            return new Float32Array(lb.buffer, 0, 3).set([pb, Vb, gb]), lb[3] = wb, lb
          }(bb, Mb), 4 * wb), gb.set(ll(eb[wb].alpha, eb[wb].width, eb[wb].height, Hb), lb + wb * pb)
        })), this.sink(Vb, gb), this.writeCaster(bb, zM, Vb, wb.length, Hb)
      }
      texture(bb) {
        let wb = this.textures.get(bb);
        return wb || (wb = this.loadTexture(bb).catch((wb => (this.warn(`Sun shadows: no mask for ${bb}: ${wb instanceof Error?wb.message:String(wb)}`), null))), this.textures.set(bb, wb)), wb
      }
      allocateMask(bb) {
        if (this.nextMaskWord + bb > KM) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const wb = 32768 + this.nextMaskWord;
        return this.nextMaskWord += bb, wb
      }
      writeCaster(bb, wb, Mb, eb, Hb) {
        this.sink(0 + 4 * bb, Uint32Array.of(wb, Mb, eb, Hb))
      }
      warnOnce(bb) {
        this.warned.has(bb) || (this.warned.add(bb), this.warn(bb))
      }
    }
    var Ol = Mb(4081);

    function Ul(bb) {
      return !bb.UE && !bb.ZD && !bb.aC
    }

    function tl() {
      return {
        bricks: new Uint32Array(IM),
        cells: new Uint16Array(32768),
        special: new Uint8Array(lM)
      }
    }
    class Cl {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = bb, this.writeVoxels = wb, this.writePool = Mb, this.warn = eb, this.eyeChunk = null, this.slotChunk = new Array(MM).fill(null), this.slotVersion = new Float64Array(MM).fill(-1), this.slotPool = new Array(MM).fill(null), this.starved = new Uint8Array(MM), this.queue = [], this.queued = new Uint8Array(MM), this.queueSorted = !0, this.freePool = new Uint32Array(rM), this.freeCount = rM, this.casterTable = null, this.warnedPool = !1, this.scratch = tl(), this.victimScratch = tl(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * MM), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Hb = 0; Hb < rM; Hb++) this.freePool[Hb] = 65535 - Hb
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return rM - this.freeCount
      }
      chunkAdded(bb) {
        if (null === this.eyeChunk || !this.inRadius(bb.i, bb.j, bb.k)) return;
        const wb = EM(bb.i, bb.j, bb.k);
        this.slotChunk[wb] = bb, this.slotVersion[wb] = -1, this.enqueue(wb)
      }
      update(bb, wb, Mb) {
        const eb = this.casters.blockCaster;
        if (eb !== this.casterTable) {
          this.casterTable = eb;
          for (let bb = 0; bb < MM; bb++) this.slotVersion[bb] = -1, this.slotChunk[bb] && this.enqueue(bb)
        }
        const Hb = Math.floor(bb[0] / 32),
          pb = Math.floor(bb[1] / 32),
          Vb = Math.floor(bb[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Hb || this.eyeChunk[1] !== pb || this.eyeChunk[2] !== Vb) && (this.eyeChunk = [Hb, pb, Vb], this.follow(wb), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let gb = 0; gb < MM; gb++) {
          const bb = this.slotChunk[gb];
          bb && (bb.RD || bb.dC !== this.slotVersion[gb]) && this.enqueue(gb)
        }
        this.drain(Mb), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(bb, wb) {
        this.records.set(wb, 4 * bb), this.windowTopStale = !0, this.writeVoxels(4 * bb, wb)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const bb = this.records;
        let wb = -1 / 0;
        for (let eb = 0; eb < bb.length; eb += 4) {
          const Mb = 255 & bb[eb + 3];
          Mb !== pM && Mb !== VM || !this.inRadius(bb[eb], bb[eb + 1], bb[eb + 2]) || (wb = Math.max(wb, bb[eb + 1] * kw + (bb[eb + 3] >>> 8)))
        }
        const Mb = wb === -1 / 0 ? 1 : wb + UM;
        Mb !== this.windowTop[0] && (this.windowTop[0] = Mb, this.writeVoxels(OM, this.windowTop))
      }
      follow(bb) {
        const wb = this.eyeChunk,
          [Mb, eb, Hb] = bM;
        for (let Vb = -Hb; Vb <= Hb; Vb++)
          for (let Hb = -eb; Hb <= eb; Hb++)
            for (let eb = -Mb; eb <= Mb; eb++) {
              var pb;
              const Mb = wb[0] + eb,
                gb = wb[1] + Hb,
                lb = wb[2] + Vb,
                Lb = EM(Mb, gb, lb),
                Ib = this.slotChunk[Lb];
              if (Ib && !Ib.RD && Ib.i === Mb && Ib.j === gb && Ib.k === lb) continue;
              const Ob = null !== (pb = bb(Mb, gb, lb)) && void 0 !== pb ? pb : null;
              Ib && (Ib.i !== Mb || Ib.j !== gb || Ib.k !== lb) && this.slotPool[Lb] && (this.release(Lb), this.record.fill(0), this.writeRecord(Lb, this.record)), this.slotChunk[Lb] = Ob, this.slotVersion[Lb] = -1, (Ob || Ib) && this.enqueue(Lb)
            }
      }
      requeueStarved() {
        for (let bb = 0; bb < MM; bb++) this.starved[bb] && this.slotChunk[bb] && this.enqueue(bb)
      }
      enqueue(bb) {
        this.queued[bb] || (this.queued[bb] = 1, this.queue.push(bb), this.queueSorted = !1)
      }
      drain(bb) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const bb = new Map;
          for (const wb of this.queue) bb.set(wb, this.slotDistance(wb));
          this.queue.sort(((wb, Mb) => bb.get(Mb) - bb.get(wb))), this.queueSorted = !0
        }
        const wb = performance.now();
        let Mb = 0;
        const eb = [];
        for (; this.queue.length > 0 && (0 === Mb || performance.now() - wb < bb);) {
          const bb = this.queue.pop(),
            wb = this.slotChunk[bb];
          !wb || wb.RD || Ul(wb) ? (this.queued[bb] = 0, this.encodeSlot(bb), Mb++) : eb.push(bb)
        }
        for (let Hb = eb.length - 1; Hb >= 0; Hb--) this.queue.push(eb[Hb])
      }
      slotDistance(bb) {
        const wb = this.slotChunk[bb],
          Mb = this.eyeChunk;
        return wb ? Math.max(Math.abs(wb.i - Mb[0]), Math.abs(wb.j - Mb[1]), Math.abs(wb.k - Mb[2])) : 0
      }
      inRadius(bb, wb, Mb) {
        const eb = this.eyeChunk,
          [Hb, pb, Vb] = bM;
        return Math.abs(bb - eb[0]) <= Hb && Math.abs(wb - eb[1]) <= pb && Math.abs(Mb - eb[2]) <= Vb
      }
      release(bb) {
        const wb = this.slotPool[bb];
        if (wb) {
          for (let bb = wb.length - 1; bb >= 0; bb--) this.freePool[this.freeCount++] = wb[bb];
          this.slotPool[bb] = null
        }
      }
      encodeSlot(bb) {
        var wb, Mb, eb, Hb, pb;
        let Vb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          gb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const lb = null !== (wb = null === (Mb = this.slotPool[bb]) || void 0 === Mb ? void 0 : Mb.length) && void 0 !== wb ? wb : 0;
        this.release(bb), this.starved[bb] = 0;
        const Lb = this.slotChunk[bb],
          Ib = this.record;
        if (!Lb || Lb.RD || !Lb.GU) return this.slotChunk[bb] = null, this.slotVersion[bb] = -1, Ib.fill(0), this.writeRecord(bb, Ib), void(lb > 0 && this.requeueStarved());
        this.slotVersion[bb] = Lb.dC;
        const Ob = this.encodeBricks(Lb, bb, Vb, gb);
        Ib[0] = Lb.i, Ib[1] = Lb.j, Ib[2] = Lb.k, Ib[3] = Ob, this.writeRecord(bb, Ib), null === (eb = this.encoded) || void 0 === eb || eb.call(this, Lb), gb && (null !== (Hb = null === (pb = this.slotPool[bb]) || void 0 === pb ? void 0 : pb.length) && void 0 !== Hb ? Hb : 0) < lb && this.requeueStarved()
      }
      encodeBricks(bb, wb, Mb, eb) {
        if (bb.CC) return HM;
        const Hb = this.casters.blockCaster,
          {
            data: pb,
            stride: Vb,
            offset: gb
          } = bb.GU,
          [lb, Lb, Ib] = Vb,
          Ob = kw,
          {
            bricks: Ub,
            cells: tb,
            special: Cb
          } = Mb;
        Ub.fill(0), Cb.fill(0);
        let Eb = 0,
          Fb = 0,
          Bb = 0;
        for (let sb = 0; sb < Ob; sb++) {
          const wb = sb >> 2,
            Mb = 3 & sb,
            eb = bb.vt[sb],
            Vb = eb === Ol.g ? -1 : eb < Hb.length ? Hb[eb] : 0;
          if (0 !== Vb)
            for (let bb = 0; bb < Ob; bb++) {
              const eb = bb >> 2,
                mb = 3 & bb;
              let hb = gb + bb * lb + sb * Lb;
              for (let bb = 0; bb < Ob; bb++, hb += Ib) {
                let gb = Vb;
                if (gb < 0) {
                  const bb = pb[hb];
                  if (gb = bb < Hb.length ? Hb[bb] : 0, 0 === gb) continue
                }
                const lb = FM(eb, wb, bb >> 2),
                  Lb = BM(mb, Mb, 3 & bb);
                Ub[3 * lb + (Lb >>> 5)] |= 1 << (31 & Lb), tb[lb * gM + Lb] = gb, Eb++, Bb = sb, gb === sM ? Fb++ : Cb[lb] = 1
              }
            }
        }
        return 0 === Eb ? HM : 32768 === Fb ? pM | Bb << 8 : (this.writePoolEntries(wb, Mb, eb), this.writeVoxels(LM + wb * IM, Ub), VM | Bb << 8)
      }
      writePoolEntries(bb, wb, Mb) {
        const {
          bricks: eb,
          cells: Hb,
          special: pb
        } = wb, Vb = this.entry;
        let gb = 0;
        for (let Ib = 0; Ib < lM; Ib++) gb += pb[Ib];
        if (0 === gb) return;
        Mb && this.freeCount < gb && this.evictBeyond(bb, gb);
        const lb = new Uint32Array(Mb ? Math.min(gb, this.freeCount) : 0);
        let Lb = 0;
        for (let Ib = 0; Ib < lM; Ib++) {
          if (!pb[Ib]) continue;
          const Mb = 3 * Ib;
          if (Lb === lb.length) {
            this.dropSpecials(wb, Ib), this.starved[bb] = 1;
            continue
          }
          const gb = this.freePool[--this.freeCount];
          lb[Lb++] = gb;
          for (let bb = 0; bb < gM; bb++) {
            const wb = eb[Mb + (bb >>> 5)] >>> (31 & bb) & 1 ? Hb[Ib * gM + bb] : 0;
            1 & bb ? Vb[bb >> 1] |= wb << 16 : Vb[bb >> 1] = wb
          }
          eb[Mb + 2] = gb + 1, this.writePool(RM + 32 * gb, Vb)
        }
        lb.length > 0 && (this.slotPool[bb] = lb)
      }
      evictBeyond(bb, wb) {
        const Mb = this.slotDistance(bb),
          eb = [];
        for (let Hb = 0; Hb < MM; Hb++) Hb !== bb && this.slotPool[Hb] && this.slotDistance(Hb) > Mb && eb.push(Hb);
        eb.sort(((bb, wb) => this.slotDistance(wb) - this.slotDistance(bb)));
        for (const Hb of eb) {
          if (this.freeCount >= wb) return;
          const bb = this.slotChunk[Hb];
          bb && !bb.RD && bb.GU && (bb.dC === this.slotVersion[Hb] || Ul(bb)) && this.encodeSlot(Hb, this.victimScratch, !1)
        }
      }
      dropSpecials(bb, wb) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const Mb = 3 * wb;
        for (let eb = 0; eb < gM; eb++) bb.cells[wb * gM + eb] !== sM && (bb.bricks[Mb + (eb >>> 5)] &= ~(1 << (31 & eb)))
      }
    }
    var El = Mb(38599);
    class Fl {
      constructor(bb) {
        this.device = bb, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new vM, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.XO = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = bb.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = bb.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(bb, wb, Mb) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: eb
        } = this;
        eb.LO(bb, wb), Mb.forEachSunShadowCaster((bb => {
          this.add(bb)
        })), eb.finish();
        const Hb = 0 === eb.parts;
        if (Hb && this.uploadedEmpty) return;
        this.uploadedEmpty = Hb;
        const {
          queue: pb
        } = this.device, {
          words: Vb
        } = eb;
        pb.writeBuffer(this.frameBuffer, 0, Vb, 0, 16385), eb.refs > 0 && pb.writeBuffer(this.frameBuffer, 65540, Vb, ZM, eb.refs), Hb || pb.writeBuffer(this.frameBuffer, 327684, Vb, fM, eb.parts * YM)
      }
      add(bb) {
        const wb = this.gridFor(bb);
        if (!wb) return;
        const {
          frame: Mb
        } = this, {
          XO: eb,
          worldAt: Hb,
          instances: pb,
          instanceCount: Vb,
          thin: gb
        } = bb;
        if (pb)
          for (let lb = 0; lb < Vb; lb++) gb ? (GM(pb, 16 * lb, eb, Hb, this.XO), Mb.add(wb, this.XO)) : Mb.add(wb, pb, 16 * lb);
        else Mb.add(wb, eb, Hb)
      }
      gridFor(bb) {
        let {
          geometry: wb,
          indexed: Mb,
          first: eb,
          count: Hb,
          skip: pb
        } = bb, Vb = this.grids.get(wb);
        Vb || (Vb = new Map, this.grids.set(wb, Vb));
        const gb = `${Mb?eb:-1-eb}:${Hb}:${null!==pb&&void 0!==pb?pb:""}`;
        let lb = Vb.get(gb);
        if (void 0 !== lb || this.gridsFull) return lb;
        const Lb = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Lb + 2;
        else if (Lb > this.bakeDeadline) return;
        return lb = this.bake(wb, Mb, eb, Hb, pb), void 0 !== lb && Vb.set(gb, lb), lb
      }
      bake(bb, wb, Mb, eb, Hb) {
        const pb = bb.vertexAttributes.find((bb => "position" === bb.kind)),
          Vb = pb ? function(bb, wb, Mb, eb) {
            let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const pb = bb => wb ? wb[Mb + bb] : Mb + bb,
              Vb = bb => null !== Hb && [0, 1, 2].some((wb => {
                const Mb = pb(bb + wb);
                return Mb >= Hb[0] && Mb < Hb[1]
              })),
              gb = [1 / 0, 1 / 0, 1 / 0],
              lb = [-1 / 0, -1 / 0, -1 / 0];
            for (let sb = 0; sb + 2 < eb; sb += 3)
              if (!Vb(sb))
                for (let wb = 0; wb < 3; wb++) {
                  const Mb = pb(sb + wb);
                  for (let wb = 0; wb < 3; wb++) gb[wb] = Math.min(gb[wb], bb[3 * Mb + wb]), lb[wb] = Math.max(lb[wb], bb[3 * Mb + wb])
                }
            const Lb = Math.max(lb[0] - gb[0], lb[1] - gb[1], lb[2] - gb[2]);
            if (!(Lb > 0)) return null;
            const Ib = Lb / 64,
              Ob = [0, 0, 0],
              Ub = [0, 0, 0],
              tb = [0, 0, 0];
            for (let sb = 0; sb < 3; sb++) Ob[sb] = Math.min(65, Math.ceil((lb[sb] - gb[sb]) / Ib) + 1), Ub[sb] = gb[sb] - Ib / 2, tb[sb] = Ub[sb] + Ob[sb] * Ib;
            const Cb = new Uint32Array(Math.ceil(Ob[0] * Ob[1] * Ob[2] / 32)),
              Eb = new Float64Array(9),
              Fb = [0, 0, 0],
              Bb = [0, 0, 0];
            for (let sb = 0; sb + 2 < eb; sb += 3)
              if (!Vb(sb)) {
                for (let wb = 0; wb < 3; wb++) {
                  const Mb = pb(sb + wb);
                  for (let eb = 0; eb < 3; eb++) Eb[3 * wb + eb] = bb[3 * Mb + eb]
                }
                for (let bb = 0; bb < 3; bb++) {
                  const wb = Math.min(Eb[bb], Eb[3 + bb], Eb[6 + bb]),
                    Mb = Math.max(Eb[bb], Eb[3 + bb], Eb[6 + bb]);
                  Fb[bb] = Math.max(0, Math.floor((wb - Ub[bb]) / Ib - 1e-6)), Bb[bb] = Math.min(Ob[bb] - 1, Math.floor((Mb - Ub[bb]) / Ib + 1e-6))
                }
                for (let bb = Fb[2]; bb <= Bb[2]; bb++)
                  for (let wb = Fb[1]; wb <= Bb[1]; wb++)
                    for (let Mb = Fb[0]; Mb <= Bb[0]; Mb++)
                      if (qM(Eb, Ub[0] + (Mb + .5) * Ib, Ub[1] + (wb + .5) * Ib, Ub[2] + (bb + .5) * Ib, Ib / 2)) {
                        const eb = Mb + Ob[0] * (wb + Ob[1] * bb);
                        Cb[eb >>> 5] |= 1 << (31 & eb)
                      }
              } return {
              words: Cb,
              lo: Ub,
              hi: tb,
              cell: Ib,
              dims: Ob
            }
          }((0, El.g)(pb, bb.vertexCount), wb ? bb.indexData : null, Mb, eb, Hb) : null;
        if (!Vb) return null;
        const {
          words: gb,
          ...lb
        } = Vb;
        if (this.gridTop + gb.length > WM) return void(this.gridsFull = !0);
        const Lb = this.gridTop;
        return this.gridTop += gb.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Lb, gb), {
          ...lb,
          at: Lb
        }
      }
    }
    const Bl = Math.cos(1 * Math.PI / 180);

    function sl(bb, wb) {
      return bb[0] * wb[0] + bb[1] * wb[1] + bb[2] * wb[2] < Bl
    }
    async function ml(bb) {
      const {
        pixels: wb,
        width: Mb,
        height: eb
      } = await bw(bb), Hb = new Uint8Array(Mb * eb);
      for (let pb = 0; pb < Hb.length; pb++) Hb[pb] = wb[4 * pb + 3];
      return {
        width: Mb,
        height: eb,
        alpha: Hb
      }
    }
    class hl {
      constructor(bb, wb) {
        this.device = bb, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(iM.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = bb.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = bb.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * tM,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = bb.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [Mb, eb, Hb] = iM.p;
        this.volume = bb.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: Mb,
            height: eb,
            depthOrArrayLayers: Hb
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = bb.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = bb.createBuffer({
          label: "sun-shadow-volume-work",
          size: iM.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = wb ? new Fl(bb) : null, this.entityStandIn = wb ? null : bb.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var bb;
        null === (bb = this.stopWindow) || void 0 === bb || bb.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var bb, wb;
        const Mb = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || Mb.push("Lite sun shadow volume pipeline compiling");
        const eb = null !== (bb = null === (wb = this.casters) || void 0 === wb ? void 0 : wb.planesLoading) && void 0 !== bb ? bb : 0;
        return eb > 0 && Mb.push(`${eb} Lite sun shadow plane casters loading their textures`), Mb
      }
      entries() {
        var bb, wb, Mb, eb;
        const Hb = ow.u;
        return [{
          binding: Hb.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Hb.GU,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Hb.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Hb.volume,
          resource: this.volumeView
        }, {
          binding: Hb.sampler,
          resource: this.volumeSampler
        }, {
          binding: Hb.entities,
          resource: {
            buffer: null !== (bb = null === (wb = this.entities) || void 0 === wb ? void 0 : wb.frameBuffer) && void 0 !== bb ? bb : this.entityStandIn
          }
        }, {
          binding: Hb.entityGrids,
          resource: {
            buffer: null !== (Mb = null === (eb = this.entities) || void 0 === eb ? void 0 : eb.gridBuffer) && void 0 !== Mb ? Mb : this.entityStandIn
          }
        }]
      }
      prepare(bb, wb, Mb) {
        var eb;
        this.entitiesThisFrame = !1;
        const Hb = null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.sunShadowReach()) && void 0 !== eb ? eb : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!Mb || !Hb.sunShadow && !Hb.airShadow) return void(this.volumeHolds = null);
        if (bb.XO.lO !== kw) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${bb.XO.lO}; everything is lit.`)));
        const pb = this.start(bb);
        this.casters.update(bb.MO, bb.MO.zt.length);
        const Vb = bb.SU;
        for (let Ub = 0; Ub < 3; Ub++) this.eye[Ub] = wb[Ub] + Vb[Ub];
        const gb = (0, iM.w)(this.eye);
        this.staleNear = gb;
        const lb = bb.XO.CE;
        pb.update(this.eye, ((bb, wb, Mb) => lb.EE(bb, wb, Mb)), 1);
        const Lb = (0, iM.s)(Mb.jwb()),
          Ib = pb.eyeChunk,
          Ob = this.uniformInts;
        for (let Ub = 0; Ub < 3; Ub++) Ob[Ub] = Ib[Ub], Ob[4 + Ub] = gb[Ub];
        this.entitiesThisFrame = null !== this.entities && Hb.sunShadow, this.entitiesThisFrame && NM(this.uniformFloats, 8, wb, Lb), null !== this.volumeHolds && (this.castersWritten || sl(Lb, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(gb, Lb, Ib)
      }
      markStale(bb) {
        const wb = this.staleNear,
          Mb = kw,
          eb = [bb.i * Mb, bb.j * Mb, bb.k * Mb];
        for (let pb = 0; pb < 3; pb++)
          if (eb[pb] + Mb <= wb[pb] - Mb || eb[pb] >= wb[pb] + iM.p[pb] + Mb) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Hb = this.stale;
        for (let pb = 0; pb < Hb.length; pb += 4)
          if (Hb[pb] === bb.i && Hb[pb + 1] === bb.j && Hb[pb + 2] === bb.k) return void(Hb[pb + 3] = this.swept);
        if (16 === Hb.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Hb.push(bb.i, bb.j, bb.k, this.swept)
      }
      writeStale() {
        const bb = this.swept,
          wb = this.stale;
        this.staleAll && bb - this.staleAllSwept >= iM.f && (this.staleAll = !1, wb.length = 0);
        let Mb = 0;
        for (let Hb = 0; Hb < wb.length; Hb += 4)
          if (bb - wb[Hb + 3] < iM.f) {
            for (let bb = 0; bb < 4; bb++) wb[Mb + bb] = wb[Hb + bb];
            Mb += 4
          } wb.length = Mb;
        const eb = this.uniformInts;
        eb[3] = this.staleAll ? 5 : Mb / 4;
        for (let Hb = 0; Hb < 4; Hb++)
          for (let bb = 0; bb < 3; bb++) eb[16 + 4 * Hb + bb] = 4 * Hb < Mb ? wb[4 * Hb + bb] * kw : 0
      }
      writeUniform() {
        const bb = this.uniformInts;
        let wb = this.uniformWritten;
        if (wb) {
          let Mb = !0;
          for (let eb = 0; eb < bb.length && Mb; eb++) Mb = bb[eb] === wb[eb];
          if (Mb) return
        }
        wb ??= this.uniformWritten = new Int32Array(bb.length), wb.set(bb), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(bb) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, bb)
      }
      computeVolume(bb, wb, Mb) {
        const eb = this.buildVolumePass();
        if (!eb) return void(this.volumeHolds = null);
        const Hb = (0, iM.v)(this.volumeHolds, bb);
        this.volumeHolds = bb;
        const pb = 1 === Hb.length && Hb[0].size.every(((bb, wb) => bb === iM.p[wb])),
          Vb = this.sweptChunk,
          gb = this.sweptLight,
          lb = wb[0] !== gb[0] || wb[1] !== gb[1] || wb[2] !== gb[2],
          Lb = Mb[0] !== Vb[0] || Mb[1] !== Vb[1] || Mb[2] !== Vb[2],
          Ib = lb && sl(wb, gb);
        if ((pb || this.written || Lb || Ib) && (this.fastLeft = iM.f), pb || this.written || lb || Lb) {
          this.written = !1;
          for (let bb = 0; bb < 3; bb++) Vb[bb] = Mb[bb], gb[bb] = wb[bb];
          this.sweepLeft = pb ? 0 : iM.f
        }
        if (pb ? this.swept += iM.f : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Hb.push(...(0, iM.y)(bb, this.slice)), this.slice = (this.slice + 1) % iM.f, this.swept++), 0 === Hb.length) return;
        const Ob = (0, iM.C)(this.workData, wb, Hb);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Ub = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          tb = Ub.beginComputePass({
            label: "sun-shadow-volume"
          });
        tb.setPipeline(eb.pipeline), tb.setBindGroup(PM.group, eb.bindGroup), tb.dispatchWorkgroups(Math.ceil(Ob / iM.j)), tb.end(), this.device.queue.submit([Ub.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const bb = PM,
          wb = GPUShaderStage.COMPUTE,
          Mb = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: bb.uniform,
              visibility: wb,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: bb.GU,
              visibility: wb,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: bb.special,
              visibility: wb,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: bb.work,
              visibility: wb,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: bb.volume,
              visibility: wb,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          eb = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: Mb,
            entries: [{
              binding: bb.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: bb.GU,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: bb.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: bb.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: bb.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [Mb]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: nM()
            }),
            entryPoint: "main"
          }
        }).then((bb => {
          this.volumePass = {
            pipeline: bb,
            bindGroup: eb
          }
        }), (bb => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(bb)}`)
        })), null
      }
      start(bb) {
        if (this.window) return this.window;
        const wb = (bb, wb) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * bb, wb)
        };
        this.casters = new Il(((bb, Mb) => {
          this.castersWritten = !0, wb(bb, Mb)
        }), ml);
        const Mb = new Cl(this.casters, ((bb, wb) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * bb, wb)
        }), wb);
        Mb.encoded = bb => {
          this.markStale(bb)
        };
        const eb = bb => {
          Mb.chunkAdded(bb)
        };
        return bb.XO.on("chunkAdded", eb), this.stopWindow = () => {
          bb.XO.removeListener("chunkAdded", eb)
        }, this.window = Mb, Mb
      }
    }
    var zl = Mb(39992),
      Xl = Mb(39998);
    const xl = 0,
      jl = 3,
      Kl = 4,
      rl = 5;

    function Rl(bb, wb, Mb, eb) {
      bb.drawOffset(wb, eb + xl), wb[eb + jl] = bb.drawTime(), Mb[eb + Kl] = bb.ring.drawStart(), Mb[eb + rl] = bb.ring.drawCount()
    }
    const Dl = `\n${ve}\n\nconst MAX_STOPS = ${Xl.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Xl.d/4}>,\n\tcolor1: array<vec4f, ${Xl.d}>,\n\tcolor2: array<vec4f, ${Xl.d}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Xl.d}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Xl.d}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var cl = Mb(53794);
    class Yl {
      constructor(bb, wb, Mb, eb) {
        this.device = bb, this.system = wb, this.frameIndex = Mb, this.bindings = eb, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, cl.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (bb, wb) => {
          this.device.queue.writeBuffer(this.ring, bb * Xl.g * 4, this.system.ring.records, bb * Xl.g, (wb - bb) * Xl.g)
        };
        const {
          name: Hb
        } = wb;
        this.ring = bb.createBuffer({
          label: `particles-${Hb}`,
          size: wb.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = bb.createBuffer({
          label: `particles-uniforms-${Hb}`,
          size: 4 * Xl.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(bb) {
        const wb = (0, cl.b)(this.system, this.uniformBits, bb);
        wb && (this.uniformBits = wb, this.device.queue.writeBuffer(this.uniforms, 0, wb))
      }
      bind() {
        const {
          system: bb
        } = this, wb = this.texture;
        (0, cl.m)(bb, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${bb.name}`,
          size: [Xl.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Xl.k
        }, [Xl.k, 1]));
        const Mb = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === wb.view && this.boundSampler === wb.sampler && this.boundRamp === Mb || (this.boundView = wb.view, this.boundSampler = wb.sampler, this.boundRamp = Mb, this.bindGroup = this.device.createBindGroup({
          label: `particles-${bb.name}`,
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
            resource: wb.sampler
          }, {
            binding: 3,
            resource: wb.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: Mb
          }]
        }))
      }
      destroy() {
        var bb;
        this.ring.destroy(), this.uniforms.destroy(), null === (bb = this.ramp) || void 0 === bb || bb.destroy()
      }
    }
    class Zl {
      constructor(bb, wb) {
        this.device = bb, this.resources = wb, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, fw.d)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (bb, wb) => (this.bindTarget(wb), {
            renderable: this.renderable,
            pipeline: Dw(this.device, wb),
            draw: bb => wb === this.preparedTarget ? this.draw(bb) : 0
          })
        }
      }
      rebind(bb) {
        this.device = bb, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [wb, Mb] of this.systems) {
          const eb = new Yl(bb, wb, Mb.frameIndex, this.bindings),
            Hb = wb.ring.drawCount();
          Hb > 0 && eb.upload(0, Hb), this.systems.set(wb, eb)
        }
      }
      build() {
        const {
          device: bb
        } = this, wb = bb.createBindGroupLayout({
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
        this.frameLayout = bb.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = bb.createPipelineLayout({
          bindGroupLayouts: [xw(bb), wb, this.frameLayout]
        }), this.module = bb.createShaderModule({
          label: "particles",
          code: Dl
        });
        const Mb = bb.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        bb.queue.writeTexture({
          texture: Mb
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: wb,
          rampSampler: bb.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Mb.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get kpb() {
        return this.systems.size
      }
      reset() {
        for (const bb of this.systems.keys()) bb.reset()
      }
      describePendingWork() {
        return (0, zl.g)(this.systems.keys(), "Lite")
      }
      lN(bb, wb) {
        const Mb = new zl.e(bb, wb, this);
        return this.systems.set(Mb, new Yl(this.device, Mb, this.allocateFrameIndex(), this.bindings)), Mb
      }
      Uwb(bb, wb) {
        for (const Mb of this.systems.keys()) Mb.Uwb(bb, wb)
      }
      canDraw(bb) {
        const wb = this.systems.get(bb),
          Mb = bb.texture ? this.resources.boundTexture(bb.texture) : null;
        if (!wb || !Mb || !this.targetPipelines) return !1;
        if (wb.texture = Mb, wb.pipelines.length = 0, !Hw(bb.blendMode)) return this.warnOnce(`blend:${bb.blendMode}`, `particle blend mode ${bb.blendMode} is not drawn (${bb.name})`), !0;
        const eb = (0, ub.l)(bb.blendMode);
        for (const Hb of eb) {
          const bb = this.pipelineFor(Hb);
          if (!1 === bb) return wb.pipelines.length = 0, !0;
          bb && wb.pipelines.push(bb)
        }
        return wb.pipelines.length === eb.length
      }
      disposeStopped(bb) {
        bb.dispose()
      }
      remove(bb) {
        const wb = this.systems.get(bb);
        wb && (this.systems.delete(bb), wb.destroy(), this.freeFrameIndices.push(wb.frameIndex))
      }
      prepare(bb) {
        const wb = bb.animationRatio || 1;
        Yw(this.renderable._worldCenter, bb, Kw), this.preparedTarget = this.target, this.draws.length = 0;
        let Mb = 0;
        for (const eb of this.systems.values()) {
          const bb = eb.system;
          if (!bb.animateIfActive(wb)) continue;
          if (bb.ring.takeUploads(eb.upload), !bb.hasLiveParticles() || 0 === eb.pipelines.length) continue;
          eb.writeUniforms(this.warnOnce), eb.bind();
          const Hb = 64 * eb.frameIndex;
          eb.count = bb.ring.drawCount(), Rl(bb, this.frameData, this.frameBits, Hb), Mb = Math.max(Mb, Hb + 64), this.draws.push(eb)
        }
        Mb > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, Mb)
      }
      draw(bb) {
        let wb = 0,
          Mb = null;
        for (const eb of this.draws) {
          bb.setBindGroup(1, eb.bindGroup), bb.setBindGroup(2, this.frameBindGroup, [256 * eb.frameIndex]);
          for (const Hb of eb.pipelines) Hb !== Mb && (bb.setPipeline(Hb), Mb = Hb), bb.draw(4, eb.count), wb++
        }
        return wb
      }
      bindTarget(bb) {
        this.target = bb;
        const wb = `${bb._colorFormat}|${bb._depthStencilFormat}|${bb._depthCompare}|${bb._sampleCount}`;
        let Mb = this.pipelines.get(wb);
        Mb || (Mb = new Map, this.pipelines.set(wb, Mb)), this.targetPipelines = Mb
      }
      pipelineFor(bb) {
        var wb;
        const Mb = this.targetPipelines,
          eb = Mb.get(bb);
        if (void 0 !== eb) return eb;
        Mb.set(bb, null);
        const Hb = this.target,
          pb = bb === ub.b,
          Vb = null !== (wb = Hb._depthCompare) && void 0 !== wb ? wb : jw,
          {
            device: gb
          } = this;
        return gb.createRenderPipelineAsync({
          label: `particles-${bb}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: sw({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: pb ? 1 : 0
            }
          }, Hb, pw((0, ub.i)(bb))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Hb._depthStencilFormat ? {
            format: Hb._depthStencilFormat,
            depthCompare: Vb,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Hb._sampleCount
          }
        }).then((wb => {
          Mb.set(bb, wb)
        }), (wb => {
          Mb.set(bb, !1), console.error("Lite particle pipeline failed", wb), Iw(gb, "particles", `blend-${bb}`, wb)
        })), null
      }
      allocateFrameIndex() {
        const bb = this.freeFrameIndices.pop();
        if (void 0 !== bb) return bb;
        const wb = this.nextFrameIndex++;
        if (64 * (wb + 1) > this.frameData.length) {
          const bb = new Float32Array(2 * this.frameData.length);
          bb.set(this.frameData), this.frameData = bb, this.frameBits = new Uint32Array(bb.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return wb
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
    class fl {
      constructor(bb, wb, Mb, eb, Hb) {
        this.lite = bb, this.canvas = wb, this.info = Mb, this.resources = Hb, this.rHb = !1, this.needPOTTextures = !1, this.Obb = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = wb.width, this.renderHeight = wb.height, this.caps = {
          maxTextureSize: eb.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: eb.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(bb) {
        this.lite = bb, (0, Qb.q)(bb, this.renderWidth, this.renderHeight)
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
      setSize(bb, wb) {
        if (this.renderWidth === bb && this.renderHeight === wb) return !1;
        const Mb = this.renderWidth,
          eb = this.renderHeight;
        this.renderWidth = bb, this.renderHeight = wb;
        const Hb = this.lite;
        if (null === Hb) return !0;
        try {
          (0, Qb.q)(Hb, bb, wb)
        } catch (pb) {
          if (pb instanceof DOMException && "InvalidStateError" === pb.name) {
            this.renderWidth = Mb, this.renderHeight = eb;
            try {
              (0, Qb.q)(Hb, Mb, eb)
            } catch {
              this.canvas.width = Mb, this.canvas.height = eb
            }
            return console.warn("WebGPU could not allocate render targets for resize", bb, wb, pb.message), !1
          }
          throw pb
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
      jR() {
        const bb = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : bb - this.lastFrameTime, this.lastFrameTime = bb
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(bb, wb) {
        const Mb = document.createElement("canvas");
        return Mb.width = bb, Mb.height = wb, Mb
      }
      Cbb(bb, wb) {
        var Mb;
        return null !== (Mb = this.resources.Cbb.get(bb)) && void 0 !== Mb ? Mb : new Uw(this.resources, bb, wb)
      }
      atlasArrays(bb) {
        return this.resources.atlasArrays(bb)
      }
    }
    class Al {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(bb) {
        this.fov = bb.fov, this.nearPlane = bb.near, this.farPlane = bb.far;
        const wb = bb.worldMatrix;
        for (let Mb = 0; Mb < 16; Mb++)
          if (this.worldMatrix[Mb] !== wb[Mb]) return this.worldMatrix.set(wb), void this.worldMatrixVersion++
      }
    }
    class Wl {
      constructor(bb, wb, Mb, eb) {
        this.canvas = wb, this.options = Mb, this.peb = void 0, this.backendName = "WebGPU (Lite)", this.Sbb = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Al, this.lastFrameTime = 0, this.engine = void 0, this.JE = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.FO = null, this.firstTerrain = null, this.trialFrames = 0, this.install(bb);
        const {
          resources: Hb,
          meshes: pb
        } = bb;
        this.resources = Hb, this.particles = bb.particles, this.peb = new fl(bb.engine, wb, eb, bb.device.limits, Hb), (0, Rb.C)({
          dg: bb => {
            Zb(bb) && Hb.textureSlot(bb)
          },
          loaded: bb => Zb(bb) ? Hb.textureLoaded(bb) : null,
          canvasUpdated: (bb, wb, Mb) => {
            Zb(bb) && Hb.canvasUpdated(bb, wb, Mb)
          }
        }), this.Sbb = pb.Sbb, this.modelMeshes = pb.modelMeshes
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
      install(bb) {
        this.engine = bb.engine, this.JE = bb.JE, this.sceneTask = bb.sceneTask, this.device = bb.device, this.liteTerrain = bb.terrain, this.meshes = bb.meshes, this.sunShadow = bb.sunShadow;
        const wb = new ab(bb.device.lost);
        this.refusals = wb, wb.deviceLost.then((() => {
          var wb;
          wb = bb.device, lw.add(wb)
        })), bb.JE.camera = this.camera
      }
      async rebuild() {
        var bb, wb, Mb, eb, Hb;
        const pb = await vl();
        this.halted = !0, this.liteTerrain.retire(), null === (bb = this.sunShadow) || void 0 === bb || bb.dispose(), this.peb.detach();
        try {
          (0, Gb.e)(this.engine)
        } catch (Ib) {
          console.warn("Lite: disposing the lost device's engine threw", Ib)
        }
        const Vb = {
            width: this.peb.renderWidth,
            height: this.peb.renderHeight
          },
          gb = await Ql(this.canvas, this.options, Vb, pb),
          lb = hw(gb),
          Lb = Gl(lb);
        try {
          this.resources.rebind(gb, lb), this.particles.rebind(lb), this.Sbb.dropSteady();
          const bb = {
              resources: this.resources,
              particles: this.particles,
              Sbb: this.Sbb,
              modelMeshes: this.modelMeshes
            },
            wb = await ql(gb, lb, this.options, bb),
            Mb = Lb();
          if (null !== Mb) throw new Error(`WebGPU device lost while Lite was rebuilding (${Mb.reason}): ${Mb.message}`);
          const {
            r: eb,
            g: Hb,
            b: pb
          } = this.JE.clearColor;
          this.install(wb), this.setClearColour(eb, Hb, pb), this.peb.rebind(gb)
        } catch (Ib) {
          throw lb.destroy(), Ib
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (wb = this.FO) || void 0 === wb || wb.resize(), null === (Mb = this.FO) || void 0 === Mb || null === (eb = Mb.hU) || void 0 === eb || null === (Hb = eb.fR) || void 0 === Hb || Hb.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((bb, wb) => {
          this.firstTerrain = {
            drawn: bb,
            failed: wb
          }
        }))
      }
      get castsEntitySunShadows() {
        var bb, wb;
        return null !== (bb = null === (wb = this.sunShadow) || void 0 === wb ? void 0 : wb.tracesEntities) && void 0 !== bb && bb
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(bb) {
        this.FO = bb, this.modelMeshes.attach(bb.model, bb.sceneMirror);
        const wb = bb.JE;
        this.setClearColour(wb.clearColor.r, wb.clearColor.g, wb.clearColor.b), wb.draw = () => {
          this.drawFrame(bb, wb)
        }
      }
      get UO() {
        return !this.refusals.lost && !this.halted
      }
      render(bb) {
        if (this.UO) {
          try {
            this.peb.jR(), bb.JE.render()
          } catch (wb) {
            throw this.refusals.frameFailed(wb), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(wb), this.firstTerrain = null), wb
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var bb, wb, Mb, eb;
        const Hb = [...this.particles.describePendingWork(), ...null !== (bb = null === (wb = this.sunShadow) || void 0 === wb ? void 0 : wb.describePendingWork()) && void 0 !== bb ? bb : []],
          pb = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Mb = this.terrain.sceneDepth) && void 0 !== Mb && Mb.compiling ? 1 : 0) + (null !== (eb = this.terrain.shadowMask) && void 0 !== eb && eb.compiling ? 1 : 0);
        pb > 0 && Hb.push(`${pb} Lite pipelines compiling`);
        const Vb = this.terrain.buffersAwaitingVerdict;
        Vb > 0 && Hb.push(`${Vb} Lite terrain buffers awaiting their out-of-memory verdict`);
        const gb = this.resources.texturesLoading;
        return gb > 0 && Hb.push(`${gb} Lite textures loading`), Hb
      }
      prepareTexture(bb) {
        return null !== this.resources.boundTexture(bb) || this.resources.textureFailed(bb)
      }
      drawFrame(bb, wb) {
        var Mb, eb, Hb, pb, Vb, gb;
        const lb = mg(bb);
        this.camera.copyFromView(lb), this.setClearColour(lb.clearColour[0], lb.clearColour[1], lb.clearColour[2]), null === (Mb = this.sunShadow) || void 0 === Mb || Mb.prepare(bb.hU, lb.eye, null !== (eb = bb.hU.LC) && void 0 !== eb ? eb : null), this.terrain.prepare(bb, lb), null === (Hb = this.terrain.sceneDepth) || void 0 === Hb || Hb.setPlanes(lb.near, lb.far), null === (pb = this.terrain.shadowMask) || void 0 === pb || pb.prepare(lb), Hg(this.sceneTask), this.meshes.prepare(wb, lb, bb.model.earthSky, null !== (Vb = bb.hU.LC) && void 0 !== Vb ? Vb : null), this.particles.prepare(lb);
        const Lb = performance.now();
        this.resources.flushUploads(), null === (gb = this.sunShadow) || void 0 === gb || gb.traceEntities(this.meshes);
        try {
          (0, Qb.m)(this.engine, this.lastFrameTime > 0 ? Lb - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Lb, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(Lb), this.firstTerrain = null)
      }
      setClearColour(bb, wb, Mb) {
        const eb = this.JE.clearColor;
        eb.r = bb, eb.g = wb, eb.b = Mb, eb.a = 1
      }
    }

    function Jl(bb) {
      const wb = {};
      for (const Mb in bb.limits) {
        const eb = bb.limits[Mb];
        "number" === typeof eb && (wb[Mb] = eb)
      }
      return wb
    }
    const Sl = "WebGPU device lost while Lite was starting";
    async function Nl(bb, wb) {
      const Mb = await vl(),
        eb = Mb.info,
        Hb = {
          vendor: (null === eb || void 0 === eb ? void 0 : eb.vendor) || "unknown vendor",
          renderer: (null === eb || void 0 === eb ? void 0 : eb.architecture) || "unknown renderer",
          version: (null === eb || void 0 === eb ? void 0 : eb.description) || "unknown version"
        };
      bb.style.background = "black";
      const pb = await Ql(bb, wb, wb.bufferSize, Mb),
        Vb = hw(pb),
        gb = Gl(Vb);
      try {
        const Mb = new Wl(await ql(pb, Vb, wb, null), bb, wb, Hb),
          eb = gb();
        if (null !== eb) {
          const {
            reason: bb,
            message: wb
          } = eb;
          throw Object.assign(new Error(`${Sl} (${bb}): ${wb}`), {
            fallbackReason: Sl
          })
        }
        return Mb
      } catch (lb) {
        throw Vb.destroy(), null === gb() ? lb : (0, eg.f)(lb, "device")
      }
    }
    async function vl() {
      const bb = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!bb) throw (0, eg.f)(new Error("No WebGPU adapter"), "no_adapter");
      return bb
    }
    async function Ql(bb, wb, Mb, eb) {
      let Hb;
      try {
        Hb = await (0, Qb.g)(bb, {
          msaaSamples: wb.Geb ? 4 : 1,
          requiredLimits: Jl(eb),
          alphaMode: "premultiplied"
        })
      } catch (Vb) {
        throw (0, eg.f)(Vb, "#47" === (null === (pb = Vb) || void 0 === pb ? void 0 : pb.message) ? "no_adapter" : "device")
      }
      var pb;
      return null !== Mb && (0, Qb.q)(Hb, Mb.width, Mb.height), Hb
    }

    function Gl(bb) {
      let wb = null;
      return bb.lost.then((bb => {
        wb = bb, console.error(`WebGPU device lost (${bb.reason}): ${bb.message}`)
      })), () => wb
    }
    async function ql(bb, wb, Mb, eb) {
      var Hb, pb;
      let {
        sceneDepth: Vb,
        sunShadow: gb
      } = Mb;
      const lb = (0, qb.c)(bb),
        Lb = null !== (Hb = null === eb || void 0 === eb ? void 0 : eb.resources) && void 0 !== Hb ? Hb : new bg(bb, wb),
        Ib = new Ml(wb),
        Ob = new JV(wb, Lb, (bb => function(bb, wb) {
          for (const eb of zw(bb)) {
            var Mb;
            if (eb._targetSignature === wb) return null !== (Mb = eb._sceneBG) && void 0 !== Mb ? Mb : null
          }
          return null
        }(lb, bb)), null === eb || void 0 === eb ? void 0 : eb.Sbb, null === eb || void 0 === eb ? void 0 : eb.modelMeshes),
        Ub = null !== (pb = null === eb || void 0 === eb ? void 0 : eb.particles) && void 0 !== pb ? pb : new Zl(wb, Lb);
      for (const Eb of function(bb, wb, Mb) {
          return [wb.opaqueRenderable, bb.opaqueRenderable, bb.skyLastRenderable, Mb.renderable, wb.transparentRenderable, bb.transparentRenderable, bb.frontRenderable]
        }(Ob, Ib, Ub)) mw(lb, Eb);
      const tb = function(bb) {
        for (const wb of zw(bb))
          if ("JE" === wb.name) return wb;
        throw new Error("Lite: the scene has no render task named scene")
      }(lb);
      Vb && Ib.installSceneDepth(tb, bb);
      const Cb = gb ? new hl(wb, gb.entities) : null;
      return Ib.sunShadow = Cb, Cb && null !== gb && void 0 !== gb && gb.entities && (Ib.shadowMask = new Wg(wb, tb, bb, Ib)), Ob.sunShadow = Cb, await (0, qb.f)(lb), {
        engine: bb,
        JE: lb,
        sceneTask: tb,
        device: wb,
        terrain: Ib,
        meshes: Ob,
        sunShadow: Cb,
        resources: Lb,
        particles: Ub
      }
    }
  },
  42488: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => Eb,
      C: () => tb,
      E: () => Cb,
      c: () => Hb,
      g: () => eb,
      j: () => Ub,
      l: () => Ib,
      p: () => Fb,
      r: () => pb,
      u: () => gb,
      v: () => lb,
      x: () => Vb
    });
    const eb = 3,
      Hb = 0,
      pb = 1,
      Vb = 2,
      gb = {
        uniform: 3,
        GU: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      lb = 10,
      Lb = "BloxdPackInputs",
      Ib = "bloxdPackInputs",
      Ob = [{
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
      Ub = 80;

    function tb() {
      const bb = Ob.map((bb => {
        let {
          name: wb,
          type: Mb
        } = bb;
        return `    ${wb}: ${Mb},\n`
      })).join("");
      return `struct ${Lb} {\n${bb}}\n@group(${eb}) @binding(${Hb}) var<uniform> ${Ib}: ${Lb};\n`
    }

    function Cb(bb, wb) {
      const Mb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Ub),
        [eb, Hb, pb, Vb, gb, lb] = Ob;
      Mb.setFloat32(eb.offset, wb.seconds, !0), Mb.setUint32(Hb.offset, wb.lit ? 1 : 0, !0);
      for (let Lb = 0; Lb < 3; Lb++) Mb.setInt32(pb.offset + 4 * Lb, wb.renderOffset[Lb], !0), Mb.setFloat32(Vb.offset + 4 * Lb, wb.jwb[Lb], !0), Mb.setFloat32(gb.offset + 4 * Lb, wb.eyePosition[Lb], !0), Mb.setFloat32(lb.offset + 4 * Lb, wb.shadowDirection[Lb], !0)
    }

    function Eb(bb) {
      const wb = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, Mb) => {
        let {
          id: eb,
          rotation: Hb
        } = bb;
        wb[Mb] = 65535 & eb | (3 & Hb) << 16
      })), wb
    }
    const Fb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);