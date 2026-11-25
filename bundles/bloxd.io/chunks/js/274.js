export const id = 274;
export const ids = [274];
export const modules = {
  42043: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => dG,
      f: () => kG,
      i: () => yG,
      m: () => YG
    });
    var wG = ZG(37618),
      SG = ZG(39116),
      LG = ZG(39111);

    function yG(GG, bG, ZG, wG) {
      const SG = LG.t;
      bG.fill(0), GG.gravity.toArray(bG, SG.gravity), GG.colorDead.toArray(bG, SG.colorDead), ZG[SG.ramp] = GG.useRampGradients ? 1 : 0;
      const yG = GG.getColorGradients(),
        kG = fG(GG, yG, "colour", wG);
      ZG[SG.colorCount] = kG;
      for (let LG = 0; LG < kG; LG++) {
        var UG;
        const GG = yG[QG(yG, LG)];
        bG[SG.colorPositions + LG] = GG.gradient, GG.color1.toArray(bG, SG.color1 + 4 * LG), (null !== (UG = GG.color2) && void 0 !== UG ? UG : GG.color1).toArray(bG, SG.color2 + 4 * LG)
      }
      const YG = GG.getVelocityGradients(),
        VG = fG(GG, YG, "Sd", wG);
      ZG[SG.velocityCount] = VG;
      for (let LG = 0; LG < VG; LG++) rG(bG, SG.Sd + 4 * LG, YG[QG(YG, LG)]);
      const pG = GG.useRampGradients ? GG.getColorRemapGradients() : null,
        KG = fG(GG, pG, "colour remap", wG);
      ZG[SG.remapCount] = KG;
      for (let LG = 0; LG < KG; LG++) rG(bG, SG.remap + 4 * LG, pG[QG(pG, LG)])
    }

    function kG() {
      return {
        key: [],
        texels: new Uint8Array(4 * LG.f)
      }
    }
    const UG = [];

    function YG(GG, bG) {
      return VG(GG, UG), !JG(UG, bG.key) && (bG.key.length = 0, bG.key.push(...UG), bG.key.length > 0 && function(GG, bG) {
        for (let ZG = 0; ZG < LG.f; ZG++) SG.m.GetCurrentGradient(ZG / LG.f, GG, ((GG, bG, ZG) => {
          wG.Color3.LerpToRef(GG.color, bG.color, ZG, pG)
        })), bG[4 * ZG] = 255 * pG.r, bG[4 * ZG + 1] = 255 * pG.g, bG[4 * ZG + 2] = 255 * pG.b, bG[4 * ZG + 3] = 255
      }(GG.getRampGradients(), bG.texels), !0)
    }

    function VG(GG, bG) {
      bG.length = 0;
      const ZG = GG.useRampGradients ? GG.getRampGradients() : null;
      if (null !== ZG && void 0 !== ZG && ZG.length) {
        bG.push(ZG.length);
        for (const GG of ZG) bG.push(GG.gradient, GG.color.r, GG.color.g, GG.color.b)
      }
    }
    const pG = new wG.Color3;

    function fG(GG, bG, ZG, wG) {
      return bG ? bG.length > LG.b ? (wG(`particleStops:${ZG}`, `GPU particles use the first 2 and last ${LG.b-2} of more than ${LG.b} ${ZG} gradient stops (${GG.name})`), LG.b) : bG.length : 0
    }

    function QG(GG, bG) {
      return bG < 2 || GG.length <= LG.b ? bG : GG.length - LG.b + bG
    }
    const KG = new Float32Array(LG.m),
      hG = new Uint32Array(KG.buffer);

    function dG(GG, bG, ZG) {
      return yG(GG, KG, hG, ZG), bG && JG(hG, bG) ? null : hG.slice()
    }

    function JG(GG, bG) {
      if (GG.length !== bG.length) return !1;
      for (let ZG = 0; ZG < GG.length; ZG++)
        if (GG[ZG] !== bG[ZG]) return !1;
      return !0
    }

    function rG(GG, bG, ZG) {
      var wG;
      GG[bG] = ZG.gradient, GG[bG + 1] = ZG.factor1, GG[bG + 2] = null !== (wG = ZG.factor2) && void 0 !== wG ? wG : ZG.factor1
    }
  },
  41544: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      const wG = bG * bG * 4,
        SG = GG[0].layers,
        LG = SG * (GG.length - 1) + GG[GG.length - 1].layers,
        yG = new Uint8Array(LG * wG);
      GG.forEach(((bG, ZG) => {
        const LG = ZG + 1 < GG.length ? Math.min(bG.layers, SG) : bG.layers;
        yG.set(new Uint8Array(bG.pixels.buffer, bG.pixels.byteOffset, LG * wG), ZG * SG * wG)
      }));
      const kG = Math.max(1, Math.min(LG, ZG || LG));
      if (kG === LG) return [{
        pixels: yG,
        layers: LG
      }];
      const UG = [];
      for (let YG = 0; YG < LG; YG += kG) {
        const GG = Math.min(LG, YG + kG);
        UG.push({
          pixels: yG.slice(YG * wG, GG * wG),
          layers: GG - YG
        })
      }
      return UG
    }
    ZG.d(bG, {
      c: () => wG,
      g: () => LG
    });
    const SG = new WeakMap;

    function LG(GG, bG, ZG) {
      var wG, LG;
      const yG = null !== (wG = SG.get(GG)) && void 0 !== wG ? wG : new Map;
      SG.set(GG, yG);
      const kG = null !== (LG = yG.get(bG[0])) && void 0 !== LG ? LG : [];
      yG.set(bG[0], kG);
      const UG = kG.find((GG => GG.urls.length === bG.length && GG.urls.every(((GG, ZG) => GG === bG[ZG]))));
      if (UG) return UG.built;
      const YG = {
        urls: [...bG],
        built: ZG()
      };
      return kG.push(YG), YG.built.catch((() => {
        kG.splice(kG.indexOf(YG), 1)
      })), YG.built
    }
  },
  42035: (GG, bG, ZG) => {
    function wG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const bG = new Set;
      return (ZG, wG) => {
        bG.has(ZG) || (bG.add(ZG), console.warn(GG + wG))
      }
    }
    ZG.d(bG, {
      e: () => wG
    })
  },
  42070: (GG, bG, ZG) => {
    ZG.d(bG, {
      createLiteRendererAsync: () => MU,
      liteBabylonBackend: () => sG,
      setPipelineFailureHook: () => kb
    });
    var wG = ZG(37618),
      SG = ZG(37993),
      LG = ZG(38304),
      yG = ZG(37559),
      kG = ZG(38318);
    class UG extends kG.e {
      constructor() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        super(...bG), this.color = new wG.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: bG[0].Dv().getUniqueId(),
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
          needAlphaBlendingForMesh: GG => GG.visibility < 1 || GG.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const YG = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      VG = GG => 1 << YG.indexOf(GG),
      pG = VG("VERTEXCOLOR"),
      fG = VG("INSTANCES"),
      QG = VG("THIN_INSTANCES"),
      KG = VG("INSTANCESCOLOR"),
      hG = VG("FOG"),
      dG = VG("LITE_FRONT_LAYER");

    function JG(GG, bG, ZG, wG) {
      let SG = 0;
      return GG.isVerticesDataPresent("color") && (SG |= pG), "none" !== bG && (SG |= fG), "thin" === bG && (SG |= QG, GG.isVerticesDataPresent("instanceColor") && (SG |= KG)), wG.fogEnabled && GG.applyFog && 0 !== wG.fogMode && (SG |= hG), ZG >= 1 && (SG |= dG), SG
    }

    function rG(GG, bG) {
      GG.updateColor4("color", bG.color, bG.alpha)
    }
    var zG = ZG(38248),
      EG = ZG(37788),
      oG = ZG(37647),
      XG = ZG(37532),
      uG = ZG(38234),
      iG = ZG(38243),
      CG = ZG(37550),
      WG = ZG(37556),
      mG = ZG(37567);
    const IG = XG.c.GLSL;
    class FG {
      constructor(GG, bG) {
        this.name = GG, this.Ah = bG, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Gl = {
          addOnce: GG => {
            this.disposers.push(GG)
          }
        }, this.uniqueId = bG.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      Dv() {
        return this.Ah
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
      needAlphaBlendingForMesh(GG) {
        return (0, CG.U)(this.model, GG.visibility, GG.hasVertexAlpha)
      }
      needAlphaTestingForMesh(GG) {
        return (0, CG.Y)(this.model, GG.visibility, GG.hasVertexAlpha)
      }
      dispose() {
        (0, EG.k)(this);
        for (const GG of this.disposers.splice(0)) GG()
      }
      get model() {
        return (0, CG.eb)(this)
      }
    }
    const vG = new WeakSet;

    function aG(GG) {
      return vG.has(GG)
    }

    function cG(GG) {
      vG.add(GG)
    }
    const lG = {
      create: (GG, bG) => ((0, oG.r)(GG, new FG(GG.name, bG)), WG.b.defines()),
      write: () => {},
      addFeature: (GG, bG) => {
        const ZG = GG.mirror;
        bG.feature === iG.l && bG.state.dirLightCount > 0 && (GG.disableLighting = !0, (0, CG.cb)(GG)), "BLOXD_LIGHTING" in bG.defines && (0, EG.h)(ZG), bG.feature === uG.i && ((0, zG.k)(bG.state, IG), function(GG, bG) {
          const ZG = GG.Dv().CK();
          setTimeout((() => {
            ZG.atlasArrays(bG.sources).then((ZG => {
              (0, zG.c)(GG, bG, ZG.map((GG => ({
                atlas: GG,
                layers: GG.layers
              }))), ZG[0].layerWidth, IG)
            })).catch((GG => {
              console.error("Failed to build the atlas's texture arrays", GG)
            }))
          }))
        }(ZG, bG.state))
      },
      texture: (GG, bG, ZG) => {
        let {
          data: wG,
          sets: SG
        } = ZG;
        var LG;
        (cG(GG), wG) && (GG.uvSet = null !== (LG = null === SG || void 0 === SG ? void 0 : SG.coordinatesIndex) && void 0 !== LG ? LG : 0, (0, oG.Y)(GG.matrix, null !== SG && void 0 !== SG ? SG : {}))
      },
      cube: cG,
      canvas: (GG, bG, ZG) => {
        let {
          width: wG,
          height: SG,
          mipmaps: LG,
          samplingMode: yG = mG.g.trilinear,
          hasAlpha: kG = !1,
          wrap: UG = mG.c.clamp
        } = ZG;
        const YG = GG.CK().createCanvas(wG, SG),
          VG = new mG.k("2d", {
            kind: "canvas",
            width: wG,
            height: SG,
            canvas: YG
          }, {
            samplingMode: yG,
            wrapU: UG,
            wrapV: UG,
            noMipmap: !LG,
            invertY: !0
          });
        return VG.hasAlpha = kG, cG(VG), VG
      }
    };
    var jG = ZG(37808),
      PG = ZG(37465);
    class MG {
      constructor(GG, bG, ZG) {
        this.engine = GG, this.clearColor = bG, this.ambientColor = ZG, this.onBeforeRenderObservable = new PG.c, this.onBeforeCameraRenderObservable = new PG.c, this.onAfterRenderObservable = new PG.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.lE = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      CK() {
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
      addPendingData(GG) {
        this.pending.push(GG)
      }
      removePendingData(GG) {
        const bG = this.pending.indexOf(GG); - 1 !== bG && this.pending.splice(bG, 1)
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

    function AG() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const sG = {
      gZG: AG,
      USG: (GG, bG) => {
        const ZG = new MG(GG.engine, wG.e.FromArray(bG.clearColor), wG.Color3.FromArray(bG.ambientColor));
        (0, yG.c)(lG, ZG), GG.Ah = ZG,
          function(GG, bG) {
            const ZG = Object.assign((0, jG.f)(GG, "camera"), {
              layerMask: 268435455
            });
            GG.model.nodes.setWorldSource(ZG.row, GG.model.view.worldMatrix), GG.camera = bG.activeCamera = ZG
          }(GG, ZG), (0, SG.i)(GG, ((GG, bG, ZG) => (0, LG.g)(GG, bG, ZG, kG.e)))
      },
      SSG: () => {},
      setBabylonFog: () => {},
      VSG: AG,
      KSG: () => {},
      linesFromArrays: (GG, bG, ZG) => (0, LG.g)(GG, bG, ZG, UG),
      sh: () => {},
      QSG: AG
    };
    var qG = ZG(42141),
      nG = ZG(42150),
      gG = ZG(42161);
    class eG {
      constructor(GG) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const bG = new Promise((GG => {
          this.refused = GG
        }));
        this.deviceLost = Promise.race([GG, bG]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(GG) {
        (function(GG) {
          const {
            name: bG,
            message: ZG
          } = null !== GG && void 0 !== GG ? GG : {};
          return "InvalidStateError" === bG && "string" === typeof ZG && ZG.startsWith("GPUDevice.")
        })(GG) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: GG.message,
          framesRefused: !0
        }))
      }
    }
    var RG = ZG(41544),
      TG = ZG(39121);

    function HG(GG) {
      return Math.max(4, 4 * Math.ceil(GG / 4))
    }

    function tG(GG, bG, ZG, wG) {
      const SG = GG.createBuffer({
        label: wG,
        size: HG(bG.byteLength),
        usage: ZG,
        mappedAtCreation: !0
      });
      return new Uint8Array(SG.getMappedRange(), 0, bG.byteLength).set(new Uint8Array(bG.buffer, bG.byteOffset, bG.byteLength)), SG.unmap(), SG
    }

    function DG(GG, bG) {
      return Math.floor(Math.log2(Math.max(GG, bG))) + 1
    }

    function NG(GG, bG, ZG, wG, SG, LG) {
      const yG = GG.createTexture({
          label: LG,
          size: {
            width: ZG,
            height: wG,
            depthOrArrayLayers: SG
          },
          format: "rgba8unorm",
          mipLevelCount: DG(ZG, wG),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        kG = (bG, ZG, wG, LG) => {
          GG.queue.writeTexture({
            texture: yG,
            mipLevel: ZG
          }, bG, {
            bytesPerRow: 4 * wG,
            rowsPerImage: LG
          }, {
            width: wG,
            height: LG,
            depthOrArrayLayers: SG
          })
        };
      kG(bG, 0, ZG, wG);
      let UG = 1;
      for (const YG of function*(GG, bG, ZG, wG) {
          let SG = GG,
            LG = bG,
            yG = ZG;
          for (; LG > 1 || yG > 1;) {
            const GG = Math.max(1, LG >> 1),
              bG = Math.max(1, yG >> 1),
              ZG = new Uint8Array(GG * bG * wG * 4),
              kG = 4 * LG;
            let UG = 0;
            for (let YG = 0; YG < wG; YG++) {
              const wG = YG * kG * yG;
              for (let YG = 0; YG < bG; YG++) {
                const bG = wG + Math.min(2 * YG, yG - 1) * kG,
                  VG = wG + Math.min(2 * YG + 1, yG - 1) * kG;
                for (let wG = 0; wG < GG; wG++) {
                  const GG = 4 * Math.min(2 * wG, LG - 1),
                    yG = 4 * Math.min(2 * wG + 1, LG - 1);
                  for (let wG = 0; wG < 4; wG++) ZG[UG++] = SG[bG + GG + wG] + SG[bG + yG + wG] + SG[VG + GG + wG] + SG[VG + yG + wG] + 2 >> 2
                }
              }
            }
            yield {
              data: ZG,
              width: GG,
              height: bG
            }, SG = ZG, LG = GG, yG = bG
          }
        }(bG, ZG, wG, SG)) kG(YG.data, UG++, YG.width, YG.height);
      return yG
    }
    const OG = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function xG(GG) {
      if (GG.startsWith("data:")) {
        const bG = GG.search(/[;,]/);
        return `data:${bG>5?GG.slice(5,bG):""} URL of ${GG.length} characters`
      }
      return GG.length > 80 ? `${GG.slice(0,80)}...` : GG
    }
    async function BG(GG) {
      const bG = await fetch(GG);
      if (!bG.ok) throw new Error(`${xG(GG)}: ${bG.status} ${bG.statusText}`);
      return createImageBitmap(await bG.blob(), OG)
    }
    async function Gb(GG) {
      const bG = await BG(GG),
        ZG = new OffscreenCanvas(bG.width, bG.height),
        wG = ZG.getContext("2d", {
          willReadFrequently: !0
        });
      if (!wG) throw new Error("No 2D context to decode an image");
      wG.drawImage(bG, 0, 0);
      const {
        data: SG
      } = wG.getImageData(0, 0, bG.width, bG.height);
      return bG.close(), {
        pixels: new Uint8Array(SG.buffer, SG.byteOffset, SG.byteLength),
        width: ZG.width,
        height: ZG.height
      }
    }

    function bb(GG, bG) {
      return (0, RG.g)(GG, bG.urls, (async () => {
        const ZG = await Promise.all(bG.urls.map((async (GG, ZG) => {
            var wG, SG, LG, yG, kG;
            return null !== (yG = null !== (SG = null === (LG = bG.pixels) || void 0 === LG ? void 0 : LG[ZG]) && void 0 !== SG ? SG : null, kG = bG.layerWidth, wG = null !== yG && void 0 !== yG && yG.byteLength && kG && yG.byteLength % (kG * kG * 4) === 0 ? {
              pixels: yG,
              layerWidth: kG,
              layers: yG.byteLength / (kG * kG * 4)
            } : null) && void 0 !== wG ? wG : await async function(GG) {
              const {
                pixels: bG,
                width: ZG
              } = await Gb(GG);
              return {
                pixels: bG,
                layerWidth: ZG,
                layers: bG.byteLength / (ZG * ZG * 4)
              }
            }(GG)
          }))),
          wG = ZG[0].layerWidth;
        return (0, RG.c)(ZG, wG, GG.limits.maxTextureArrayLayers).map(((ZG, SG) => {
          let {
            pixels: LG,
            layers: yG
          } = ZG;
          return {
            texture: NG(GG, LG, wG, wG, yG, `atlas-${SG}-${xG(bG.urls[0])}`),
            layerWidth: wG,
            layers: yG
          }
        }))
      }))
    }
    const Zb = new Map([
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
      wb = new Map([
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

    function Sb(GG) {
      for (const bG of (0, TG.o)(GG))
        if (!wb.has((0, TG.k)(bG))) return !1;
      return !0
    }

    function Lb(GG) {
      const bG = wb.get(GG);
      if (!bG) return null;
      const [ZG, wG, SG] = bG;
      return {
        srcFactor: Zb.get(ZG),
        dstFactor: Zb.get(wG),
        operation: SG
      }
    }
    let yb = null;

    function kb(GG) {
      yb = GG
    }
    const Ub = new WeakSet;

    function Yb(GG) {
      return Ub.has(GG)
    }

    function Vb(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var LG;
      Yb(GG) || (null === (LG = yb) || void 0 === LG || LG(bG, ZG, wG, SG))
    }
    class pb {
      constructor(GG) {
        this.resources = GG, this.matrixKey = {
          rp: 0
        }, this.attributesKey = {
          rp: 0
        }, this.inputs = Object.create(null);
        for (let bG = 0; bG < 4; bG++) this.inputs[`world${bG}`] = new Kb(this.matrixKey, 16 * bG, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(GG, bG) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, GG, !0), bG && this.resources.vertexBufferCreated(this.attributesKey, bG, !0)
      }
    }
    class fb extends pb {
      constructor(GG, bG, ZG) {
        super(GG), this.mesh = bG, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const wG = this.inputs;
        let SG = 0;
        for (const {
            size: yG
          }
          of ZG) SG += yG;
        for (const {
            name: yG,
            offset: kG,
            size: UG,
            type: YG
          }
          of ZG) wG[yG] = new Kb(this.attributesKey, 4 * kG, 4 * SG, UG, !0, YG);
        this.rowStride = SG, GG.j_.set(bG, this);
        const LG = bG.isVerticesDataPresent;
        bG.isVerticesDataPresent = (GG, ZG) => GG in wG || LG.call(bG, GG, ZG)
      }
      attach(GG, bG) {
        this.matrices = GG, this.attributes = bG, this.bind(GG, bG), this.mirror(GG, GG.length, GG.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      T6(GG) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, GG ? 64 * GG : void 0)
      }
      GGG() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(GG, bG) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * GG, 16 * bG)
      }
      attributeRows(GG, bG) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, GG * this.rowStride, bG * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(GG, bG, ZG) {
        const wG = this.mesh._thinInstanceDataStorage;
        wG.matrixData = GG, wG.matrixBufferSize = bG, wG.worldMatrices = null, wG.instancesCount = ZG
      }
    }
    class Qb extends pb {
      constructor(GG, bG, ZG) {
        var wG, SG, LG, yG;
        super(GG), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.interleavedKinds) && void 0 !== wG ? wG : null, this.offsets = null !== (SG = null === ZG || void 0 === ZG ? void 0 : ZG.interleavedOffsets) && void 0 !== SG ? SG : [], this.rowStride = null !== (LG = null === ZG || void 0 === ZG ? void 0 : ZG.interleavedRowStride) && void 0 !== LG ? LG : 0, null === (yG = this.layout) || void 0 === yG || yG.forEach(((GG, bG) => {
          this.inputs[GG] = new Kb(this.attributesKey, 4 * this.offsets[bG], 4 * this.rowStride, ZG.strides[GG])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), GG.batchUploads.set(bG, this), bG.Gl.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(GG) {
        const bG = this.packedBatch;
        return bG.renderSelf ? 0 === GG ? this.packedSource : bG.instances[GG - 1] : bG.instances[GG]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(GG, bG, ZG, wG) {
        const SG = (bG.renderSelf ? 1 : 0) + bG.rows.length;
        if (this.frame = wG, this.count = SG, this.packedSource = GG, this.packedBatch = bG, 0 === SG) return;
        if (GG.getWorldMatrix(), 16 * SG > this.matrices.length) {
          let GG = this.matrices.length / 16;
          for (; GG < SG;) GG *= 2;
          this.matrices = new Float32Array(16 * GG), this.attributes &&= new Float32Array(GG * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let LG = 0;
        bG.renderSelf && this.packRow(LG++, GG, bG.row, ZG);
        for (let yG = 0; yG < bG.rows.length; yG++) this.packRow(LG++, bG.instances[yG], bG.rows[yG], ZG);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * SG), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, SG * this.rowStride)
      }
      packRow(GG, bG, ZG, wG) {
        const SG = this.matrices;
        if (ZG < 0) SG.set(bG.getWorldMatrix().m, 16 * GG);
        else
          for (let YG = 0; YG < 16; YG++) SG[16 * GG + YG] = wG[16 * ZG + YG];
        const LG = this.attributes;
        if (!LG) return;
        const yG = bG.hA,
          kG = this.layout;
        for (let YG = 0; YG < kG.length; YG++) {
          var UG;
          const bG = null !== (UG = yG[kG[YG]]) && void 0 !== UG ? UG : 0,
            ZG = GG * this.rowStride + this.offsets[YG];
          bG.toArray ? bG.toArray(LG, ZG) : bG.copyToArray ? bG.copyToArray(LG, ZG) : LG[ZG] = bG
        }
      }
    }
    class Kb {
      constructor(GG, bG, ZG, wG) {
        let SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = GG, this.byteOffset = bG, this.byteStride = ZG, this.size = wG, this.instanced = SG, this.type = LG, this.normalized = yG
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
    const hb = "CANVAS_ALPHA_ONE",
      db = `override ${hb}: bool = false;`,
      Jb = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function rb(GG, bG, ZG) {
      var wG;
      let SG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const LG = null !== (wG = bG._colorFormat) && void 0 !== wG ? wG : "bgra8unorm",
        yG = SG ? 15 : 0;
      return ZG ? {
        ...GG,
        targets: [{
          format: LG,
          blend: {
            color: ZG,
            alpha: Jb
          },
          writeMask: yG
        }]
      } : {
        ...GG,
        constants: {
          ...GG.constants,
          [hb]: 1
        },
        targets: [{
          format: LG,
          writeMask: yG
        }]
      }
    }

    function zb(GG, bG) {
      GG._renderables.push(bG)
    }

    function Eb(GG) {
      return GG._device
    }

    function ob(GG) {
      var bG, ZG;
      return null !== (bG = null === (ZG = GG._frameGraph) || void 0 === ZG ? void 0 : ZG._tasks) && void 0 !== bG ? bG : []
    }

    function Xb(GG) {
      return GG._currentEncoder
    }

    function ub(GG) {
      return GG.createBindGroupLayout({
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
    const ib = "greater-equal",
      Cb = 2e5,
      Wb = 1e5,
      mb = new WeakMap;

    function Ib(GG, bG) {
      let ZG = mb.get(GG);
      if (!ZG) {
        ZG = {
          module: GG.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, mb.set(GG, ZG)
      }
      const wG = `${bG._colorFormat}|${bG._depthStencilFormat}|${bG._sampleCount}`;
      let SG = ZG.pipelines.get(wG);
      if (!SG) {
        var LG;
        const {
          module: yG
        } = ZG;
        SG = GG.createRenderPipeline({
          label: `placeholder ${wG}`,
          layout: GG.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: yG,
            entryPoint: "v"
          },
          fragment: {
            module: yG,
            entryPoint: "f",
            targets: [{
              format: null !== (LG = bG._colorFormat) && void 0 !== LG ? LG : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: bG._depthStencilFormat ? {
            format: bG._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: bG._sampleCount
          }
        }), ZG.pipelines.set(wG, SG)
      }
      return SG
    }

    function Fb(GG, bG, ZG) {
      const wG = bG.eye,
        SG = bG.viewMatrix;
      GG[0] = wG[0] + SG[2] * ZG, GG[1] = wG[1] + SG[6] * ZG, GG[2] = wG[2] + SG[10] * ZG
    }
    var vb = ZG(38363),
      ab = ZG(42035),
      cb = ZG(37547);
    const lb = Math.PI,
      jb = lb / 1.95,
      Pb = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Mb = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((GG => {
        let [bG, ZG] = GG;
        return .434 * lb * Math.pow(2 * lb / bG, 2) * ZG
      }));

    function Ab(GG, bG, ZG) {
      const {
        up: wG,
        mieDirectionalG: SG
      } = GG, LG = 1 - nb(1 - Math.exp(bG[1] / 45e4), 0, 1), yG = GG.rayleigh - (1 - LG), kG = Math.hypot(bG[0], bG[1], bG[2]), UG = kG > 0 ? 1 / kG : 0, YG = ZG.sunDir;
      for (let QG = 0; QG < 3; QG++) YG[QG] = bG[QG] * UG;
      const VG = YG[0] * wG[0] + YG[1] * wG[1] + YG[2] * wG[2],
        pG = 1e3 * Math.max(0, 1 - Math.exp(-(jb - Math.acos(nb(VG, -1, 1))) / 1.5));
      ZG.sunE = pG;
      const fG = .2 * GG.turbidity * 1e-17 * GG.mieCoefficient;
      for (let QG = 0; QG < 3; QG++) {
        const GG = Pb[QG] * yG,
          bG = Mb[QG] * fG,
          wG = pG / (GG + bG);
        ZG.inScatterR[QG] = GG * wG, ZG.inScatterM[QG] = bG * wG, ZG.extinctionBeta[QG] = 8400 * GG + 1250 * bG
      }
      return ZG.sunsetMix = nb(Math.pow(1 - VG, 5), 0, 1), ZG.sunDiscE = 19e3 * pG, ZG.mieScale = (1 - SG * SG) / (4 * lb), ZG.mieBase = 1 + SG * SG, ZG.mieSlope = 2 * SG, ZG
    }
    const sb = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const qb = 1 / function(GG) {
      const {
        A: bG,
        B: ZG,
        C: wG,
        D: SG,
        E: LG,
        F: yG
      } = sb;
      return (GG * (bG * GG + wG * ZG) + SG * LG) / (GG * (bG * GG + ZG) + SG * yG) - LG / yG
    }(1e3);

    function nb(GG, bG, ZG) {
      return Math.min(Math.max(GG, bG), ZG)
    }
    const gb = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function eb(GG, bG) {
      const ZG = new Map(bG),
        wG = [],
        SG = [],
        LG = () => 0 === SG.length || SG[SG.length - 1].active;
      let yG = null;
      const kG = () => {
        const GG = [...ZG].filter((GG => {
            let [, bG] = GG;
            return !0 !== bG
          })),
          bG = GG.map((GG => {
            let [bG] = GG;
            return bG
          })).join("|");
        yG = GG.length ? new RegExp(`\\b(${bG})\\b`, "g") : null
      };
      kG();
      for (const UG of GG.split("\n")) {
        const GG = gb.exec(UG);
        if (!GG) {
          LG() && wG.push(yG ? Rb(UG, yG, ZG) : UG);
          continue
        }
        const bG = GG[1],
          YG = GG[2].trim();
        if ("ifdef" === bG || "ifndef" === bG || "if" === bG) {
          const GG = LG(),
            wG = "if" === bG ? Tb(YG, ZG) : ZG.has(YG) === ("ifdef" === bG);
          SG.push({
            active: GG && wG,
            parentActive: GG,
            taken: wG
          })
        } else if ("elif" === bG || "else" === bG) {
          const GG = SG[SG.length - 1];
          if (!GG) throw new Error(`#${bG} without #if`);
          const wG = !GG.taken && ("else" === bG || Tb(YG, ZG));
          GG.active = GG.parentActive && wG, GG.taken = GG.taken || wG
        } else if ("endif" === bG) {
          if (!SG.pop()) throw new Error("#endif without #if")
        } else if (LG()) {
          const [GG, ...wG] = YG.split(/\s+/);
          "undef" === bG ? ZG.delete(GG) : ZG.set(GG, !wG.length || wG.join(" ")), kG()
        }
      }
      if (SG.length) throw new Error("Unterminated #if");
      return wG.join("\n")
    }

    function Rb(GG, bG, ZG) {
      return GG.replace(bG, (GG => {
        const bG = ZG.get(GG);
        return "string" === typeof bG ? bG : GG
      }))
    }

    function Tb(GG, bG) {
      var ZG;
      const wG = null !== (ZG = GG.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== ZG ? ZG : [];
      let SG = 0;
      const LG = () => wG[SG],
        yG = () => wG[SG++],
        kG = GG => {
          const ZG = /^\d/.test(GG) ? GG : bG.get(GG);
          return "string" === typeof ZG ? parseInt(ZG) : Number.NaN
        },
        UG = () => {
          const GG = yG();
          if ("!" === GG) return !UG();
          if ("(" === GG) {
            const GG = VG();
            return yG(), GG
          }
          if ("defined" === GG) {
            const GG = "(" === LG();
            GG && yG();
            const ZG = yG();
            return GG && yG(), bG.has(ZG)
          }
          const ZG = LG();
          if ("==" === ZG || "!=" === ZG || ">" === ZG || "<" === ZG || ">=" === ZG || "<=" === ZG) {
            yG();
            const bG = kG(GG),
              wG = kG(yG());
            if (Number.isNaN(bG) || Number.isNaN(wG)) return !1;
            switch (ZG) {
              case "==":
                return bG === wG;
              case "!=":
                return bG !== wG;
              case ">":
                return bG > wG;
              case "<":
                return bG < wG;
              case ">=":
                return bG >= wG;
              default:
                return bG <= wG
            }
          }
          return bG.has(GG)
        },
        YG = () => {
          let GG = UG();
          for (;
            "&&" === LG();) {
            yG();
            const bG = UG();
            GG = GG && bG
          }
          return GG
        },
        VG = () => {
          let GG = YG();
          for (;
            "||" === LG();) {
            yG();
            const bG = YG();
            GG = GG || bG
          }
          return GG
        },
        pG = VG();
      if (SG !== wG.length) throw new Error(`Cannot evaluate #if ${GG}`);
      return pG
    }
    var Hb = ZG(37541),
      tb = ZG(37885),
      Db = ZG(37892),
      Nb = ZG(41084),
      Ob = ZG(39158);
    const xb = 32,
      Bb = [10, 3, 10],
      GZ = [21, 7, 21],
      bZ = GZ[0] * GZ[1] * GZ[2],
      ZZ = 0,
      wZ = 1,
      SZ = 2,
      LZ = 3,
      yZ = 64,
      kZ = 512,
      UZ = 4 * bZ,
      YZ = 1536,
      VZ = UZ + bZ * YZ,
      pZ = 1073741824,
      fZ = VZ + 1;

    function QZ(GG, bG) {
      const ZG = GG % bG;
      return ZG < 0 ? ZG + bG : ZG
    }

    function KZ(GG, bG, ZG) {
      return wG = QZ(GG, GZ[0]), SG = QZ(bG, GZ[1]), LG = QZ(ZG, GZ[2]), wG + GZ[0] * (SG + GZ[1] * LG);
      var wG, SG, LG
    }

    function hZ(GG, bG, ZG) {
      return GG + 8 * (bG + 8 * ZG)
    }

    function dZ(GG, bG, ZG) {
      return GG + 4 * (bG + 4 * ZG)
    }
    const JZ = 65535,
      rZ = 0,
      zZ = 1,
      EZ = 2,
      oZ = 3;

    function XZ(GG) {
      return Math.ceil(GG * GG / 32)
    }
    const uZ = 8192,
      iZ = 1 << 18,
      CZ = 65536,
      WZ = 294912,
      mZ = 128,
      IZ = 4096,
      FZ = 16,
      vZ = 16385,
      aZ = 81921,
      cZ = 147457,
      lZ = 4194304;
    const jZ = [0, 0, 0],
      PZ = [0, 0, 0];

    function MZ(GG, bG, ZG, wG) {
      ! function(GG, bG, ZG) {
        const [wG, SG, LG] = [GG[0], GG[1], GG[2]];
        let yG, kG, UG;
        Math.abs(SG) < .99 ? (yG = LG, kG = 0, UG = -wG) : (yG = -SG, kG = wG, UG = 0);
        const YG = Math.hypot(yG, kG, UG);
        bG[0] = yG / YG, bG[1] = kG / YG, bG[2] = UG / YG, ZG[0] = SG * bG[2] - LG * bG[1], ZG[1] = LG * bG[0] - wG * bG[2], ZG[2] = wG * bG[1] - SG * bG[0]
      }(wG, jZ, PZ);
      const SG = 1 / 32;
      for (const [LG, yG] of [
          [0, jZ],
          [4, PZ]
        ]) {
        for (let ZG = 0; ZG < 3; ZG++) GG[bG + LG + ZG] = yG[ZG] * SG;
        GG[bG + LG + 3] = -(yG[0] * ZG[0] + yG[1] * ZG[1] + yG[2] * ZG[2]) * SG
      }
    }
    class AZ {
      constructor() {
        this.words = new Uint32Array(cZ), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      hQ(GG, bG) {
        this.parts = 0, this.refs = 0, this.view = GG, this.viewAt = bG;
        const ZG = GG[bG + 1] * GG[bG + 6] - GG[bG + 2] * GG[bG + 5],
          wG = GG[bG + 2] * GG[bG + 4] - GG[bG] * GG[bG + 6],
          SG = GG[bG] * GG[bG + 5] - GG[bG + 1] * GG[bG + 4],
          LG = Math.hypot(ZG, wG, SG) || 1;
        this.light[0] = ZG / LG, this.light[1] = wG / LG, this.light[2] = SG / LG
      }
      add(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= IZ || ! function(GG, bG, ZG) {
            const wG = GG[bG],
              SG = GG[bG + 1],
              LG = GG[bG + 2],
              yG = GG[bG + 3],
              kG = GG[bG + 4],
              UG = GG[bG + 5],
              YG = GG[bG + 6],
              VG = GG[bG + 7],
              pG = GG[bG + 8],
              fG = GG[bG + 9],
              QG = GG[bG + 10],
              KG = GG[bG + 11],
              hG = GG[bG + 12],
              dG = GG[bG + 13],
              JG = GG[bG + 14],
              rG = GG[bG + 15],
              zG = wG * UG - SG * kG,
              EG = wG * YG - LG * kG,
              oG = wG * VG - yG * kG,
              XG = SG * YG - LG * UG,
              uG = SG * VG - yG * UG,
              iG = LG * VG - yG * YG,
              CG = pG * dG - fG * hG,
              WG = pG * JG - QG * hG,
              mG = pG * rG - KG * hG,
              IG = fG * JG - QG * dG,
              FG = fG * rG - KG * dG,
              vG = QG * rG - KG * JG,
              aG = zG * vG - EG * FG + oG * IG + XG * mG - uG * WG + iG * CG;
            if (!(Math.abs(aG) > 1e-12)) return !1;
            const cG = 1 / aG;
            return ZG[0] = (UG * vG - YG * FG + VG * IG) * cG, ZG[1] = (LG * FG - SG * vG - yG * IG) * cG, ZG[2] = (dG * iG - JG * uG + rG * XG) * cG, ZG[3] = (QG * uG - fG * iG - KG * XG) * cG, ZG[4] = (YG * mG - kG * vG - VG * WG) * cG, ZG[5] = (wG * vG - LG * mG + yG * WG) * cG, ZG[6] = (JG * oG - hG * iG - rG * EG) * cG, ZG[7] = (pG * iG - QG * oG + KG * EG) * cG, ZG[8] = (kG * FG - UG * mG + VG * CG) * cG, ZG[9] = (SG * mG - wG * FG - yG * CG) * cG, ZG[10] = (hG * uG - dG * oG + rG * zG) * cG, ZG[11] = (fG * oG - pG * uG - KG * zG) * cG, ZG[12] = (UG * WG - kG * IG - YG * CG) * cG, ZG[13] = (wG * IG - SG * WG + LG * CG) * cG, ZG[14] = (dG * EG - hG * XG - JG * zG) * cG, ZG[15] = (pG * XG - fG * EG + QG * zG) * cG, !0
          }(bG, ZG, this.inverse)) return;
        const {
          view: wG,
          viewAt: SG
        } = this, LG = ZG;
        let yG = 1 / 0,
          kG = 1 / 0,
          UG = -1 / 0,
          YG = -1 / 0,
          VG = -1 / 0;
        const [pG, fG, QG] = this.light;
        for (let oG = 0; oG < 8; oG++) {
          const ZG = 1 & oG ? GG.hi[0] : GG.lo[0],
            KG = 2 & oG ? GG.hi[1] : GG.lo[1],
            hG = 4 & oG ? GG.hi[2] : GG.lo[2],
            dG = ZG * bG[LG] + KG * bG[LG + 4] + hG * bG[LG + 8] + bG[LG + 12],
            JG = ZG * bG[LG + 1] + KG * bG[LG + 5] + hG * bG[LG + 9] + bG[LG + 13],
            rG = ZG * bG[LG + 2] + KG * bG[LG + 6] + hG * bG[LG + 10] + bG[LG + 14],
            zG = wG[SG] * dG + wG[SG + 1] * JG + wG[SG + 2] * rG + wG[SG + 3],
            EG = wG[SG + 4] * dG + wG[SG + 5] * JG + wG[SG + 6] * rG + wG[SG + 7];
          yG = Math.min(yG, zG), kG = Math.min(kG, EG), UG = Math.max(UG, zG), YG = Math.max(YG, EG), VG = Math.max(VG, pG * dG + fG * JG + QG * rG)
        }
        if (UG < -1 || YG < -1 || yG >= 1 || kG >= 1) return;
        const KG = this.parts++,
          hG = this.rects;
        hG[4 * KG] = sZ(yG), hG[4 * KG + 1] = sZ(kG), hG[4 * KG + 2] = sZ(UG), hG[4 * KG + 3] = sZ(YG);
        const dG = this.inverse,
          {
            cell: JG,
            dims: rG,
            lo: zG
          } = GG,
          EG = aZ + KG * FZ;
        for (let oG = 0; oG < 3; oG++) this.floats[EG + 4 * oG] = dG[oG] / JG, this.floats[EG + 4 * oG + 1] = dG[4 + oG] / JG, this.floats[EG + 4 * oG + 2] = dG[8 + oG] / JG, this.floats[EG + 4 * oG + 3] = (dG[12 + oG] - zG[oG]) / JG;
        this.words[EG + 12] = GG.at, this.floats[EG + 13] = VG + .001 * (1 + Math.abs(VG)), this.words[EG + 14] = rG[0] | rG[1] << 8 | rG[2] << 16
      }
      finish() {
        const GG = mZ,
          {
            counts: bG,
            rects: ZG,
            words: wG
          } = this;
        bG.fill(0);
        let SG = 0,
          LG = 0;
        for (; LG < this.parts; LG++) {
          const wG = 4 * LG,
            yG = (ZG[wG + 2] - ZG[wG] + 1) * (ZG[wG + 3] - ZG[wG + 1] + 1);
          if (SG + yG > 65536) break;
          SG += yG;
          for (let SG = ZG[wG + 1]; SG <= ZG[wG + 3]; SG++)
            for (let LG = ZG[wG]; LG <= ZG[wG + 2]; LG++) bG[SG * GG + LG]++
        }
        let yG = 0;
        for (let UG = 0; UG < 16384; UG++) wG[UG] = yG, yG += bG[UG], bG[UG] = wG[UG];
        wG[16384] = yG;
        for (let UG = 0; UG < LG; UG++) {
          const SG = 4 * UG;
          for (let LG = ZG[SG + 1]; LG <= ZG[SG + 3]; LG++)
            for (let yG = ZG[SG]; yG <= ZG[SG + 2]; yG++) wG[vZ + bG[LG * GG + yG]++] = UG
        }
        const kG = this.floats;
        for (let UG = 0; UG < 16384; UG++) {
          const GG = vZ + wG[UG],
            bG = GG + Math.min(wG[UG + 1] - wG[UG], 64);
          for (let ZG = GG + 1; ZG < bG; ZG++) {
            const bG = wG[ZG],
              SG = kG[81934 + bG * FZ];
            let LG = ZG - 1;
            for (; LG >= GG && kG[81934 + wG[LG] * FZ] < SG; LG--) wG[LG + 1] = wG[LG];
            wG[LG + 1] = bG
          }
        }
        this.refs = SG
      }
    }

    function sZ(GG) {
      return Math.min(127, Math.max(0, Math.floor((.5 * GG + .5) * mZ)))
    }

    function qZ(GG, bG, ZG, wG, SG) {
      for (let LG = 0; LG < 4; LG++)
        for (let yG = 0; yG < 4; yG++) SG[4 * LG + yG] = GG[bG + 4 * LG] * ZG[wG + yG] + GG[bG + 4 * LG + 1] * ZG[wG + 4 + yG] + GG[bG + 4 * LG + 2] * ZG[wG + 8 + yG] + GG[bG + 4 * LG + 3] * ZG[wG + 12 + yG]
    }

    function nZ(GG, bG, ZG, wG, SG) {
      const LG = GG[0] - bG,
        yG = GG[1] - ZG,
        kG = GG[2] - wG,
        UG = GG[3] - bG,
        YG = GG[4] - ZG,
        VG = GG[5] - wG,
        pG = GG[6] - bG,
        fG = GG[7] - ZG,
        QG = GG[8] - wG;
      if (Math.min(LG, UG, pG) > SG || Math.max(LG, UG, pG) < -SG) return !1;
      if (Math.min(yG, YG, fG) > SG || Math.max(yG, YG, fG) < -SG) return !1;
      if (Math.min(kG, VG, QG) > SG || Math.max(kG, VG, QG) < -SG) return !1;
      const KG = UG - LG,
        hG = YG - yG,
        dG = VG - kG,
        JG = pG - UG,
        rG = fG - YG,
        zG = QG - VG,
        EG = hG * zG - dG * rG,
        oG = dG * JG - KG * zG,
        XG = KG * rG - hG * JG;
      if (Math.abs(EG * LG + oG * yG + XG * kG) > SG * (Math.abs(EG) + Math.abs(oG) + Math.abs(XG))) return !1;
      const uG = [KG, hG, dG, JG, rG, zG, LG - pG, yG - fG, kG - QG];
      for (let iG = 0; iG < 3; iG++) {
        const GG = uG[3 * iG],
          bG = uG[3 * iG + 1],
          ZG = uG[3 * iG + 2];
        for (let wG = 0; wG < 3; wG++) {
          const KG = 0 === wG ? 0 : 1 === wG ? ZG : -bG,
            hG = 0 === wG ? -ZG : 1 === wG ? 0 : GG,
            dG = 0 === wG ? bG : 1 === wG ? -GG : 0,
            JG = KG * LG + hG * yG + dG * kG,
            rG = KG * UG + hG * YG + dG * VG,
            zG = KG * pG + hG * fG + dG * QG,
            EG = SG * (Math.abs(KG) + Math.abs(hG) + Math.abs(dG));
          if (Math.min(JG, rG, zG) > EG || Math.max(JG, rG, zG) < -EG) return !1
        }
      }
      return !0
    }
    const gZ = new Float32Array(1);
    new Uint32Array(gZ.buffer);
    var eZ = ZG(39163);

    function RZ(GG) {
      const [bG, ZG, wG] = eZ.t;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${GG.group}) @binding(${GG.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${bG-1}, ${ZG-1}, ${wG-1});\n}\n`
    }

    function TZ(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [SG, LG, yG] = GZ, [kG, UG, YG] = Bb, VG = Math.log2(xb), pG = wG ? "var<private> bloxdSpCrossed: bool;\n" : "", fG = wG ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${GG.group}) @binding(${GG.Wf}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${GG.group}) @binding(${GG.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${ZG?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${pG}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${zZ}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${EZ}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${ZG?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${oZ}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${SG}, ${LG}, ${yG});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${SG} * (s.y + ${LG} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${kG}, ${UG}, ${YG}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${VG}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${LZ}u) {\n\t\treturn named && state == ${SZ}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${UZ}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${VZ}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${bG?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${bG?`\t\tif (exits && step > 0 && step % ${DZ} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${VG}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${ZZ}u || kind == ${wZ}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${SZ}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${UZ}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${fG}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const HZ = {
      group: 0,
      uniform: 0,
      Wf: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function tZ() {
      const GG = HZ;
      return `${RZ(GG)}${TZ(GG,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${eZ.e}>,\n}\n@group(${GG.group}) @binding(${GG.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${GG.group}) @binding(${GG.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${eZ.o})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${eZ.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${eZ.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const DZ = 2;
    const NZ = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function OZ(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const wG = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${bG.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        SG = "trace" === ZG || "lit" === ZG,
        LG = "maskEdge" === ZG ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        yG = SG ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${bG.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${bG.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===ZG?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${LG};\n`;
      return `${wG}${GG.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${SG?function(){const[GG,bG,ZG]=eZ.t;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${GG}.0, ${bG}.0, ${ZG}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${yG}}\n`:""}${GG.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${bG.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${bG.renderOffset});\n}\n`:""}`
    }
    const xZ = "bloxdSpOwnTexture";

    function BZ(GG) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${GG.texture}) - 1u)))`
    }
    const Gw = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${vb.f.map((GG=>{let[bG,ZG]=GG;return`\tbloxdSpOut.${bG} = (bloxdSpWord & ${ZG}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function bw(GG) {
      return `bloxdSpFlags(${GG})`
    }
    const Zw = `${Nb.i}.eyePosition`;

    function ww(GG, bG, ZG, wG, SG) {
      const LG = GG.indexOf(bG);
      if (LG < 0 || GG.indexOf(bG, LG + 1) >= 0) throw new Error(`Lite's ${SG} program changed at the shader pack ${wG} hook: ${LG<0?"no":"more than one"} anchor (lite/${SG}ShaderPack.ts)`);
      return GG.slice(0, LG) + ZG + GG.slice(LG + bG.length)
    }

    function Sw(GG) {
      return GG.sunShadow || GG.airShadow
    }

    function Lw(GG, bG) {
      return bG && Sw(GG)
    }
    const yw = {
      group: Nb.f,
      ...Nb.m
    };

    function kw(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Sw(GG)) return "";
      if (bG) {
        const bG = yw,
          SG = "trace" === ZG || "lit" === ZG;
        let LG = "";
        GG.sunShadow && (LG = SG ? `${TZ(bG,!0,"lit"===ZG)}${wG=bG,`@group(${wG.group}) @binding(${wG.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${wG.group}) @binding(${wG.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(GG, bG, ZG) {
          const wG = `@group(${GG}) @binding(${bG}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return ZG ? `${wG}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${NZ}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((GG=>`\t{\n\t\tlet o = vec2i(${GG});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : wG
        }(bG.group, Nb.q, "maskEdge" === ZG));
        const yG = {
          shadowDirection: `${Nb.i}.shadowDirection`,
          renderOffset: `${Nb.i}.renderOffset`,
          eyePosition: `${Nb.i}.eyePosition`
        };
        return `${RZ(bG)}${LG}${function(GG){const[bG,ZG,wG]=eZ.t;return`@group(${GG.group}) @binding(${GG.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${GG.group}) @binding(${GG.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${bG}.0, ${ZG}.0, ${wG}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(bG)}${OZ(GG,yG,ZG)}`
      }
      var wG;
      return `${GG.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${GG.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Uw(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!bG) return "";
      const LG = (yG = "fragmentInputs.vPositionW", kG = GG.sunShadow ? {
        normal: ZG,
        flags: wG
      } : null, `\n\tbloxdSpShadowPosition = ${yG};\n${kG?`\tbloxdSpShadowNormal = normalize(${kG.normal});\n\tbloxdSpShadowEmissive = (${kG.flags} & ${vb.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${kG.flags} & ${vb.j}u) != 0u;\n`:""}`);
      var yG, kG;
      return GG.sunShadow && ("mask" === SG || "maskEdge" === SG) ? `${LG}${UG="fragmentInputs.position",YG="maskEdge"===SG,`\n\tbloxdSpShadowPixel = vec2i(${UG}.xy);\n${YG?`\tbloxdSpShadowZ = ${UG}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${UG}.z), dpdy(${UG}.z));\n`:""}`}` : LG;
      var UG, YG
    }
    const Yw = "bloxdSpTextureRotation",
      Vw = "bloxdSpTextureLayers",
      pw = `@group(${Nb.f}) @binding(${Nb.u}) var<storage, read> ${Vw}: array<u32>;\n`;

    function fw(GG) {
      return `\tvertexOutputs.vPackTexture = ${Vw}[min(u32(${GG}), arrayLength(&${Vw}) - 1u)];\n`
    }

    function Qw(GG) {
      return void 0 !== GG.uv
    }

    function Kw(GG) {
      if (!GG) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Qw(GG)) return function(GG) {
        const {
          texture: bG,
          cells: ZG,
          layers: wG
        } = GG, SG = `textureDimensions(${bG}, bloxdSpLevel)`, LG = ZG ? `max(vec2u(vec2f(${SG}) / ${ZG}), vec2u(1u))` : SG, yG = ZG ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${LG};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${ZG}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${ZG}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${bG}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${SG} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${LG};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${bG}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let kG;
        if (ZG)
          if (1 === wG.length) kG = `\treturn bloxdSpOwnTexel(${wG[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const GG = wG.length - 1;
            kG = `\tvar bloxdSpColour = bloxdSpOwnTexel(${wG[GG]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let bG = GG - 1; bG >= 0; bG--) kG += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${wG[bG]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            kG += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else kG = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${GG.id?`var<private> ${xZ}: u32;\n`:""}${yG}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${BZ(GG)};\n\treturn ${LG};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${GG.id?xZ:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${BZ(GG)};\n${kG}}\n`
      }(GG);
      const bG = GG,
        ZG = GG => {
          const ZG = GG > 0 ? `bloxdSpLayer - ${bG.layers*GG}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${GG}, ${bG.sampler}, bloxdSpTurned, ${ZG}, round(bloxdSpMipLevel));`
        };
      let wG = "";
      for (let LG = 0; LG < bG.count - 1; LG++) wG += `\tif (bloxdSpLayer < ${bG.layers*(LG+1)}u) {\n\t\t${ZG(LG)}\n\t}\n`;
      const SG = bG.frame ? `${bG.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Yw}: u32;\n${pw}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Yw} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Yw} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Yw} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${SG}${wG}\t${ZG(bG.count-1)}\n}\n`
    }

    function hw(GG, bG, ZG) {
      return !!GG.surface && "bloxdDefaultSurface" !== GG.surface && function(GG, bG) {
        return "liquid" === bG || !GG
      }(bG, ZG)
    }

    function dw(GG, bG) {
      return GG.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${bG.vertexLocalPosition}, ${bw(bG.vertexFlags)});\n\t\tlet bloxdSpVertex = ${GG.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Jw(GG, bG, ZG, wG, SG) {
      if (!GG.surface) return "";
      const LG = (GG, bG) => `\n\tlet bloxdSpTexelUV = ${GG};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${bG}) - 1u));`;
      let yG = "",
        kG = "0u, 0u, vec2f(0.0), 0.0";
      const UG = wG && Qw(wG) ? wG : null,
        YG = wG && !Qw(wG) ? wG : null;
      if (UG) {
        yG = `${UG.id?`\n\tlet bloxdSpTexture = ${UG.id};\n\t${xZ} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${UG.uv};${LG(function(GG,bG){var ZG;return`${null!==(ZG=GG.levelUv)&&void 0!==ZG?ZG:GG.cells?`${bG} / ${GG.cells}`:bG} * vec2f(textureDimensions(${GG.texture}))`}(UG,"bloxdSpUv"),UG.texture)}`, kG = (UG.id ? `${xZ}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else YG && (yG = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Yw} = bloxdSpTexture >> 16u;${LG(`fragmentInputs.vMainUV1 * ${(0,Hb.tb)(YG.width)}`,"textureAtlas0")}`, kG = `bloxdSpTexture & 0xffffu, ${Yw}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const VG = SG.overlayColour,
        pG = VG ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        fG = "bloxdDefaultSurface" !== GG.surface || VG ? `\n\tbaseColor = vec4f(${pG}, baseColor.a);` : "",
        QG = hw(GG, bG, ZG) ? `\n\t${SG.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${yG}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${SG.alpha}, ${SG.enchantTier}, ${SG.enchantColour}, ${SG.enchantSpeed}, ${null!==VG&&void 0!==VG?VG:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${SG.normal}, ${SG.localPosition}, ${bw(SG.flags)}, ${kG});\n\tlet bloxdSpSurface = ${GG.surface}(bloxdSpSurfaceIn);${fG}${QG}\n`
    }
    const rw = "bloxdSpLightIn";

    function zw(GG, bG, ZG, wG) {
      if (!GG.light) return "";
      const SG = bG ? `${Hb.k}.rgb, ${Hb.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Hb.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: LG,
          diffuse: yG,
          emissive: kG,
          ambient: UG,
          fogColour: YG,
          fogAlpha: VG,
          normal: pG
        } = wG;
      return `\tvar ${rw} = BloxdLightIn(vec3f(0.0), ${ZG?LG:"0.0"}, ${yG}, ${kG}, ${UG}, ${SG}, ${YG}, ${VG}, fragmentInputs.vPositionW, ${pG}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${rw}.litColour = bloxdLitColour(bloxdSpSurface, ${rw});\n`
    }

    function Ew(GG) {
      return GG.light ? `\n\t{\n\t\tlet bloxdSpLight = ${GG.light}(bloxdSpSurface, ${rw});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const ow = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      Xw = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      uw = "\treturn color;\n}",
      iw = {
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
    const Cw = Object.freeze({});

    function Ww(GG) {
      var bG;
      return !(null === (bG = (0, Ob.e)(GG)) || void 0 === bG || !bG.sceneDepth)
    }

    function mw(GG) {
      const bG = (0, Ob.e)(GG);
      return !!bG && hw(bG.hooks, bG.strict, bG.program)
    }

    function Iw(GG, bG, ZG, wG) {
      return ww(GG, bG, ZG, wG, "terrain")
    }

    function Fw(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const LG = function(GG) {
          return (0, Ob.c)(GG.packVariant, GG.liquid ? "liquid" : "terrain")
        }(GG),
        {
          hooks: yG
        } = LG,
        kG = Lw(LG, wG),
        UG = "edge" === SG ? "maskEdge" : "plain" === SG ? "mask" : "trace",
        YG = dw(yG, iw);
      YG && (bG = Iw(bG, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${YG}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const VG = "atlas" === GG.texture ? {
          count: GG.atlasCount,
          layers: GG.atlasLayers,
          width: GG.N9,
          sampler: "atlasSampler",
          frame: GG.animated ? ZG : null
        } : null,
        pG = `${LG.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Uw(LG,kG,iw.normal,iw.flags,UG)}${Jw(yG,LG.strict,LG.program,VG,iw)}`;
      pG && (bG = Iw(bG, ow, `${ow.slice(0,-1)}${pG}`, "surface"));
      const fG = Ew(yG);
      return fG && (bG = Iw(bG, Xw, `${zw(yG,GG.lighting,GG.dirLightCount>0,iw)}${Xw}`, "light input"), bG = Iw(bG, uw, `${fG.slice(1)}${uw}`, "light")), `${(0,Nb.x)()}${LG.sceneDepth?`@group(${Nb.f}) @binding(${Nb.l}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Zw};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${kw(LG,kG,UG)}${Kw(VG)}${Gw}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${LG.code}${bG}`
    }
    const vw = XG.c.WGSL;

    function aw(GG) {
      return void 0 !== GG.packVariant
    }
    const lw = {
        hSG: 0,
        dSG: 4,
        JSG: 8,
        rSG: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      jw = lw.aoLevels + 4,
      Pw = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Mw = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      Aw = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      sw = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      qw = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      nw = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      gw = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      ew = 0,
      Rw = 3,
      Tw = 4,
      Hw = 5,
      tw = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${tb.d}, ${tb.d}, corner == 0u || corner == 3u);\n\tlet dv = select(-${tb.d}, ${tb.d}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Dw = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((GG=>Db.e>>GG&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Nw = {
      Tp: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: GG => `animDataPerTex[${GG}]`
    };

    function Ow(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nw;
      return `\n\tlet atlasIdxIn = ${GG};\n\tlet animTick = ${ZG.Tp};\n\tlet animTickStride = ${ZG.stride};\n\tlet numAnimTextures = ${ZG.count};\n\t${(0,uG.e)(XG.c.WGSL,ZG.perTexture)}\n\t${bG}animLayer;\n`
    }

    function xw(GG) {
      const bG = (bG, ZG) => {
        const wG = bG > 0 ? `fragmentInputs.texAtlasIndex - ${GG.atlasLayers.toFixed(1)} * ${bG.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${ZG?"textureSampleLevel":"textureSample"}(textureAtlas${bG}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${wG}))${ZG?", atlasLod":""})`
      };
      if (1 === GG.atlasCount) return `baseColor = ${bG(0,!1)};`;
      let ZG = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Hb.tb)(GG.N9)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let wG = 0; wG < GG.atlasCount; wG++) {
        const SG = GG.atlasLayers * (wG + 1) - .5;
        ZG += `${wG>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Hb.tb)(SG)}) {\n\t\tbaseColor = ${bG(wG,!0)};\n\t}`
      }
      return ZG
    }

    function Bw(GG) {
      return `terrain-${GG.texture}${"atlas"===GG.texture?GG.atlasCount:""}${GG.animated?"-anim":""}${GG.alphaTest?"-test":""}${GG.lighting?"-lit":""}-dir${GG.dirLightCount}${GG.packed?"-packed":""}${aw(GG)?`-sp${GG.packVariant}`:""}${GG.liquid?"-liquid":""}${GG.resting?"-rest":""}`
    }

    function GS(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const wG = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const ZG = "none" !== GG.texture,
          wG = "atlas" === GG.texture,
          SG = GG.dirLightCount > 0,
          LG = aw(GG);
        if (GG.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${GG.dirLightCount}`);
        let yG = 1,
          kG = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (wG) {
          GG.animated && (kG += `@group(2) @binding(${yG++}) var<storage, read> animDataPerTex: array<f32>;\n`), kG += `@group(2) @binding(${yG++}) var atlasSampler: sampler;\n`;
          for (let bG = 0; bG < GG.atlasCount; bG++) kG += `@group(2) @binding(${yG++}) var textureAtlas${bG}: texture_2d_array<f32>;\n`
        } else "single" === GG.texture && (kG += `@group(2) @binding(${yG++}) var diffuseSamplerSampler: sampler;\n`, kG += `@group(2) @binding(${yG++}) var diffuseSampler: texture_2d<f32>;\n`);
        const UG = function(GG) {
            const bG = gw,
              ZG = "none" !== GG.texture,
              wG = "atlas" === GG.texture,
              SG = aw(GG);
            return GG.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${ZG?"uv: vec2f,":""}\n\t${wG?"texAtlasIndices: f32,":""}\n\t${GG.lighting?"aPackedLightLevels: f32,":""}\n\t${SG?"blockFlagWords: vec2u,":""}\n}\n${tw}\n${Dw}\n${"single"===GG.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${ZG?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===GG.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${wG?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${GG.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${SG?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${bG.position}) position: vec3f,\n\t@location(${bG.normal}) normal: vec4f,\n\t@location(${bG.color}) color: vec4f,\n\t${ZG?`@location(${bG.uv}) uv: vec2f,`:""}\n\t${GG.lighting?`@location(${bG.packedLight}) aPackedLightLevels: f32,`:""}\n\t${SG?`@location(${bG.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(GG),
          YG = `\n${sw}\n${Mw}\n${Aw}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${kG}\n${db}\n${UG.declarations}\nstruct Varyings {\n\t${"none"===bG?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${GG.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${SG?"@location(5) vTerrainLambert: f32,":""}\n\t${ZG?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${wG?"@location(7) texAtlasIndex: f32,":""}\n\t${GG.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${LG?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${LG&&wG?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${GG.resting?"":(0,Hb.t)(vw)}\n${nw}\n\n@vertex\nfn mainVertex(${UG.parameter}) -> Varyings {\n\t${UG.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${LG?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${vb.c.placed}u;`:""}\n\t${LG&&wG?fw("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${GG.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${ZG?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${wG?function(GG){return GG?Ow("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(GG.animated):""}\n\t${"single"===GG.texture&&GG.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Hb.cb)(vw)}\n\t${(0,Hb.J)(vw,GG.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${GG.resting?"":qw}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${wG?xw(GG):""}\n\t${"single"===GG.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ZG?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${GG.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${SG?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${hb}));\n\t${aw(GG)?(0,Hb.ob)(XG.c.WGSL):(0,Hb.S)(vw)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          VG = new Set;
        GG.lighting && VG.add("BLOXD_LIGHTING");
        SG && VG.add("BLOXD_TERRAIN_DIRECTIONAL");
        return eb(YG, new Map([...VG].map((GG => [GG, !0]))))
      }(GG, ZG);
      if (!aw(GG)) return wG;
      const SG = Fw(GG, wG, Ow, bG, ZG);
      return "none" === ZG ? SG : `${SG}${function(GG){const bG="none"!==GG.texture&&GG.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${GG.resting?"":qw}\n\t${GG.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${bG&&"atlas"===GG.texture?xw(GG):""}\n\t${bG&&"single"===GG.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${bG?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${vb.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(GG)}`
    }
    const bS = new Map([
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

    function ZS(GG, bG) {
      const ZG = new Map;
      let wG = 0;
      const SG = [],
        LG = [],
        yG = [];
      for (const YG of bG) {
        var kG, UG;
        const bG = null !== (kG = YG.type.trim().split(/\s+/).pop()) && void 0 !== kG ? kG : YG.type,
          VG = bS.get(bG);
        if (!VG) throw new Error(`Lite: no uniform layout for ${YG.name}: ${YG.type}`);
        const pG = null !== (UG = YG.arraySize) && void 0 !== UG ? UG : 0,
          fG = pG ? 4 : VG.align;
        wG = Math.ceil(wG / fG) * fG;
        const QG = pG ? 4 * Math.ceil(VG.floats / 4) : VG.floats;
        if (ZG.set(YG.name, {
            offset: wG,
            floats: VG.floats,
            arraySize: pG,
            stride: QG
          }), pG && VG.floats <= 2) {
          const bG = `${GG}_${yG.length}_strided`;
          LG.push(`struct ${bG} {\n\t@size(16) el: ${VG.wgsl},\n}`), yG.push(YG.name), SG.push(`\t@align(16) ${YG.name}: array<${bG}, ${pG}>,`)
        } else pG ? SG.push(`\t@align(16) ${YG.name}: array<${VG.wgsl}, ${pG}>,`) : SG.push(`\t${YG.name}: ${VG.wgsl},`);
        wG += pG ? QG * pG : VG.floats
      }
      return {
        slots: ZG,
        floats: Math.max(4, 4 * Math.ceil(wG / 4)),
        wgsl: `${LG.join("\n")}\nstruct ${GG} {\n${SG.join("\n")}\n}\n`,
        stridedArrays: yG
      }
    }
    const wS = [{
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
      SS = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      LS = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function yS(GG, bG) {
      return `#if defined(${GG}) && ${GG}DIRECTUV == 0\nvarying v${bG}UV: vec2f;\n#endif`
    }

    function kS(GG, bG, ZG) {
      return `#if defined(${GG}) && ${GG}DIRECTUV == 0\nif (uniforms.v${bG}Infos.x==0.)\n{vertexOutputs.v${bG}UV= (uniforms.${ZG}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${bG}UV= (uniforms.${ZG}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function US(GG, bG, ZG) {
      return `#ifdef ${GG}\n#if ${GG}DIRECTUV == 1\n#define v${bG}UV vMainUV1\n#elif ${GG}DIRECTUV == 2\n#define v${bG}UV vMainUV2\n#else\nvarying v${bG}UV: vec2f;\n#endif\nvar ${ZG}SamplerSampler: sampler;\nvar ${ZG}Sampler: texture_2d<f32>;\n#endif`
    }
    const YS = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      VS = 256,
      pS = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      fS = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      QS = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      KS = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      hS = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      dS = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      JS = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      rS = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${fS}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${yS("OPACITY","Opacity")}\n${yS("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${JS}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${QS}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${kS("OPACITY","Opacity","opacity")}\n${kS("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${KS}\n#define CUSTOM_VERTEX_MAIN_END\n${hS}\n}\n`;
    const zS = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${US("OPACITY","Opacity","opacity")}\n${US("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${JS}\n${dS}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((GG,bG)=>function(GG){const bG=`
    frame.lights[LITE_LIGHT$ {
        GG
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      GG
    }\
    nvar diffuse$ {
      GG
    }: vec4f = $ {
      bG
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      GG
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      bG
    }.vLightData, diffuse$ {
      GG
    }.rgb, $ {
      bG
    }.vLightSpecular.rgb, diffuse$ {
      GG
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(bG))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, ES = /^([gimus]+)!/, oS = new Set;

    function XS(GG) {
      oS.has(GG) || (oS.add(GG), console.warn(`Lite: no place for plugin code at ${GG} in the standard shader: it is left out`))
    }

    function uS(GG, bG) {
      let ZG = GG;
      const wG = new Map;
      for (const [LG, yG] of bG) {
        var SG;
        wG.set(LG, `${null!==(SG=wG.get(LG))&&void 0!==SG?SG:""}${yG}\n`)
      }
      for (const [LG, yG] of wG) {
        if (!LG.startsWith("!")) {
          const GG = `#define ${LG}`;
          if (!ZG.includes(GG)) {
            XS(LG);
            continue
          }
          ZG = ZG.replace(GG, (() => `\n${yG}\n${GG}`));
          continue
        }
        let GG = LG.substring(1),
          bG = "g";
        if (GG.startsWith("!")) bG = "", GG = GG.substring(1);
        else {
          const ZG = ES.exec(GG);
          ZG && (bG = ZG[1], GG = GG.substring(bG.length + 1))
        }
        const wG = new RegExp(GG, bG.includes("g") ? bG : `${bG}g`);
        let SG = wG.exec(ZG);
        for (SG || XS(LG); SG;) {
          const GG = SG,
            bG = yG.replace(/\$(\d+)/g, ((bG, ZG) => Number(ZG) < GG.length ? GG[Number(ZG)] : ""));
          ZG = ZG.substring(0, GG.index) + bG + ZG.substring(GG.index + GG[0].length), wG.lastIndex = GG.index + bG.length, SG = wG.exec(ZG)
        }
      }
      return ZG
    }
    const iS = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      CS = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      WS = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function mS(GG) {
      const bG = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let ZG = GG.replace(iS, ((GG, ZG, wG, SG, LG, yG) => ("attribute" === ZG ? bG.attributes.push({
        name: LG,
        type: yG
      }) : void 0 === ZG ? bG.varyings.push({
        name: LG,
        type: yG,
        interpolation: FS(yG, wG, SG)
      }) : bG.uniforms.push({
        name: LG,
        type: IS(yG)
      }), "")));
      return ZG = ZG.replace(CS, ((GG, ZG) => (bG.samplers.add(ZG), ""))), ZG = ZG.replace(WS, ((GG, ZG, wG) => (bG.textures.push({
        name: ZG,
        type: wG
      }), ""))), bG.body = ZG, bG
    }

    function IS(GG) {
      const bG = GG.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        ZG = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(bG);
      if (!ZG) throw new Error(`Lite: unsupported uniform type ${GG}`);
      return ZG
    }

    function FS(GG, bG, ZG) {
      return void 0 === bG && void 0 === ZG ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(GG.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === bG ? "@interpolate(flat) " : `@interpolate(${null!==bG&&void 0!==bG?bG:"perspective"}, ${null!==ZG&&void 0!==ZG?ZG:"center"}) `
    }

    function vS(GG) {
      return jS({
        defines: GG.defines,
        vertex: uS(rS, GG.vertexCode),
        fragment: uS(zS, GG.fragmentCode),
        members: [...wS, ...GG.defines.has("OPACITY") ? SS : [], ...GG.defines.has("EMISSIVE") ? LS : [], ...GG.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function aS(GG) {
      const bG = GG.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (bG === GG) throw new Error("Lite: fragment main has no return");
      return bG
    }
    const cS = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${fS}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${QS}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${KS}\n${hS}\n}\n`,
      lS = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${dS}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function jS(GG) {
      const bG = GG.defines,
        ZG = mS(eb(GG.vertex, bG)),
        wG = mS(eb(GG.fragment, bG)),
        SG = new Map;
      for (const zG of [...ZG.varyings, ...wG.varyings]) SG.has(zG.name) || SG.set(zG.name, zG);
      const LG = [...SG.values()].map(((GG, bG) => `\t@location(${bG}) ${GG.interpolation}${GG.name}: ${GG.type},`)),
        yG = [...GG.members];
      for (const zG of [...ZG.uniforms, ...wG.uniforms]) yG.some((GG => GG.name === zG.name)) || yG.push(zG);
      const kG = ZS(GG.structName, yG),
        UG = [],
        YG = [];
      let VG = 1;
      const pG = new Set;
      for (const zG of [...ZG.textures, ...wG.textures]) {
        if (pG.has(zG.name)) continue;
        pG.add(zG.name);
        const GG = `${zG.name}Sampler`,
          bG = VG++,
          ZG = VG++,
          wG = zG.type.startsWith("texture_2d_array") ? "2d-array" : zG.type.startsWith("texture_cube") ? "cube" : "2d";
        UG.push({
          name: zG.name,
          binding: bG,
          samplerBinding: ZG,
          dimension: wG
        }), YG.push(`@group(2) @binding(${bG}) var ${zG.name}: ${zG.type};`), YG.push(`@group(2) @binding(${ZG}) var ${GG}: sampler;`)
      }
      for (const zG of [...ZG.samplers, ...wG.samplers])
        if (!pG.has(zG.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${zG} has no texture`);
      const fG = [sw, pS, kG.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${GG.structName};`, ...YG].join("\n"),
        QG = ZG.attributes,
        KG = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...ZG.attributes.map(((GG, bG) => `\t@location(${bG}) ${GG.name}: ${GG.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        hG = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...LG, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        dG = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...wG.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...LG, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", db, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${hb}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        JG = GG => {
          for (const bG of kG.stridedArrays) GG = GG.replace(new RegExp(`\\b${bG}\\s*\\[(.*?)\\]`, "g"), `${bG}[$1].el`);
          return GG
        };
      return {
        vertex: `${fG}\n${KG}\n${hG}\n${JG(ZG.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${fG}\n${dG}\n${aS((rG=JG(wG.body),rG.includes("fragmentInputs.position")?rG.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):rG))}`,
        attributes: QG,
        material: kG,
        textures: UG
      };
      var rG
    }
    const PS = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      MS = GG => ({
        name: GG,
        type: "vec3"
      }),
      AS = GG => ({
        name: GG,
        type: "float"
      }),
      sS = ZS("EarthSkyUniforms", [MS("viewFrom"), AS("exposureScale"), MS("zenithOffset"), AS("fogOn"), MS("up"), AS("ditherOn"), MS("sun"), AS("turbidity"), MS("tint"), AS("rayleigh"), MS("sunDir"), AS("mieStrength"), MS("inScatterR"), AS("mieFocus"), MS("inScatterM"), AS("sunE"), MS("extinctionBeta"), AS("sunsetMix"), AS("mieScale"), AS("mieBase"), AS("mieSlope"), AS("sunDiscE"), AS("exposure")]),
      qS = `${sw}\n${pS}\n${sS.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      nS = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${PS.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      gS = `\n${db}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(sb).map((GG=>{let[bG,ZG]=GG;return`const TONE_${bG}: f32 = ${ZG};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${qb};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${hb}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var eS = ZG(37432);
    const RS = new eS.mK,
      TS = new eS.mK,
      HS = new eS.Quaternion,
      tS = new Float64Array(3),
      DS = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      NS = new Float64Array(16);

    function OS(GG, bG, ZG) {
      const wG = ZG.worldMatrix;
      var SG;
      GG.updateFloat3("viewFrom", wG[12], wG[13], wG[14]), GG.updateFloatsFrom("zenithOffset", bG.cameraOffset, 0, 3), GG.updateFloatsFrom("up", bG.up, 0, 3), bG.luminance > 0 && (GG.updateFloat("exposure", bG.luminance), GG.updateFloat("exposureScale", (SG = bG.luminance, Math.log2(2 / Math.pow(SG, 4))))), GG.updateFloat("turbidity", bG.turbidity), GG.updateFloat("rayleigh", bG.rayleigh), GG.updateFloat("mieStrength", bG.mieCoefficient), GG.updateFloat("mieFocus", bG.mieDirectionalG), GG.updateFloatsFrom("tint", bG.tint, 0, 3), GG.updateFloat("fogOn", bG.fog && ZG.fogEnabled && 0 !== ZG.fogMode ? 1 : 0), GG.updateFloat("ditherOn", bG.dithering ? 1 : 0);
      const LG = bG.sunPosition;
      if (RS.set(LG[0], LG[1], LG[2]), !bG.useSunPosition) {
        const GG = Math.PI * (bG.inclination - .5),
          ZG = 2 * Math.PI * (bG.azimuth - .5);
        RS.set(bG.distance * Math.cos(ZG) * Math.cos(GG), bG.distance * Math.sin(-GG), bG.distance * Math.sin(ZG) * Math.cos(GG)), eS.Quaternion.FromUnitVectorsToRef(eS.mK.UpReadOnly, TS.set(bG.up[0], bG.up[1], bG.up[2]), HS), RS.rotateByQuaternionToRef(HS, RS)
      }
      GG.updateVector3("sun", RS), tS[0] = RS.x, tS[1] = RS.y, tS[2] = RS.z;
      const yG = Ab(bG, tS, DS);
      GG.updateFloatsFrom("sunDir", yG.sunDir, 0, 3), GG.updateFloat("sunE", yG.sunE), GG.updateFloatsFrom("inScatterR", yG.inScatterR, 0, 3), GG.updateFloatsFrom("inScatterM", yG.inScatterM, 0, 3), GG.updateFloatsFrom("extinctionBeta", yG.extinctionBeta, 0, 3), GG.updateFloat("sunsetMix", yG.sunsetMix), GG.updateFloat("sunDiscE", yG.sunDiscE), GG.updateFloat("mieScale", yG.mieScale), GG.updateFloat("mieBase", yG.mieBase), GG.updateFloat("mieSlope", yG.mieSlope)
    }

    function xS(GG, bG) {
      const ZG = NS;
      ZG[0] = bG.far, ZG[5] = bG.far, ZG[10] = bG.far, ZG[15] = 1;
      const wG = GG.infiniteDistance;
      for (let SG = 0; SG < 3; SG++) ZG[12 + SG] = GG.position[SG] + (wG ? bG.worldMatrix[12 + SG] : 0);
      return NS
    }
    class BS {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(GG, bG, ZG, wG, SG) {
        ZG !== this.pipeline && (GG.setPipeline(ZG), this.pipeline = ZG), GG.setBindGroup(1, wG, [SG]);
        const LG = bG.material.bindGroup;
        LG !== this.materialGroup && (GG.setBindGroup(2, LG), this.materialGroup = LG);
        const yG = bG.program.packGroup;
        yG && yG !== this.packGroup && (GG.setBindGroup(Nb.f, yG), this.packGroup = yG);
        const {
          vertexBuffers: kG,
          vertexOffsets: UG
        } = this;
        for (let YG = 0; YG < bG.vertexBuffers.length; YG++) kG[YG] === bG.vertexBuffers[YG] && UG[YG] === bG.vertexOffsets[YG] || (GG.setVertexBuffer(YG, bG.vertexBuffers[YG], bG.vertexOffsets[YG]), kG[YG] = bG.vertexBuffers[YG], UG[YG] = bG.vertexOffsets[YG]);
        bG.indexBuffer && bG.indexBuffer !== this.indexBuffer && (GG.setIndexBuffer(bG.indexBuffer, bG.indexFormat), this.indexBuffer = bG.indexBuffer)
      }
    }
    class GL {
      constructor(GG, bG, ZG, wG) {
        this.modelMeshes = GG, this.Z5 = bG, this.maker = ZG, this.warnOnce = wG, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (GG, bG) => {
          (bG < -1 || bG > 1) && this.warnOnce(`group:${bG}`, `rendering group ${bG} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(GG) {
        this.collectGroup(GG, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(GG, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(GG, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Z5.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(bL), this.transparentDraws.sort(ZL)
      }
      collectGroup(GG, bG, ZG, wG, SG) {
        const LG = this.modelMeshes.group(bG),
          yG = this.Z5.group(bG),
          kG = 0 === bG ? null === yG || void 0 === yG ? void 0 : yG.opaque : void 0;
        this.collectList(GG, null === LG || void 0 === LG ? void 0 : LG.opaque, kG || null === yG || void 0 === yG ? void 0 : yG.opaque, bG, !1, ZG, SG), kG && (this.Z5.drawn += this.maker.bundleDraws(GG, kG, bG)), this.collectList(GG, null === LG || void 0 === LG ? void 0 : LG.alphaTest, void 0, bG, !1, ZG, SG), this.collectList(GG, null === LG || void 0 === LG ? void 0 : LG.transparent, null === yG || void 0 === yG ? void 0 : yG.transparent, bG, !0, wG, SG)
      }
      collectList(GG, bG, ZG, wG, SG, LG, yG) {
        var kG;
        const UG = LG.length;
        bG && this.maker.pushDraws(GG, bG.units, bG.units.length, wG, SG, LG, bG.rows), ZG && (this.Z5.drawn += this.maker.pushDraws(GG, ZG, ZG.length, wG, SG, LG));
        const YG = SG ? null === (kG = this.modelMeshes.group(wG)) || void 0 === kG ? void 0 : kG.text : void 0;
        YG && this.maker.pushDraws(GG, YG.units, YG.units.length, wG, !0, LG, YG.rows), yG && wL(LG, UG)
      }
    }

    function bL(GG, bG) {
      return GG.program.id - bG.program.id || GG.material.owner.uniqueId - bG.material.owner.uniqueId
    }

    function ZL(GG, bG) {
      return GG.material.owner.uniqueId - bG.material.owner.uniqueId
    }

    function wL(GG, bG) {
      for (let ZG = bG + 1; ZG < GG.length; ZG++) {
        const wG = GG[ZG];
        let SG = ZG - 1;
        for (; SG >= bG && ZL(GG[SG], wG) > 0; SG--) GG[SG + 1] = GG[SG];
        GG[SG + 1] = wG
      }
    }
    const SL = {};

    function LL(GG) {
      return GG.hasThinInstances ? "thin" : GG.zSG || GG._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function yL(GG, bG, ZG) {
      return GG ? (ZG._needUVs = !0, GG.optimizeUVAllocation && (0, mG.C)(GG.matrix) ? (ZG[`${bG}DIRECTUV`] = GG.uvSet + 1, ZG[`MAINUV${GG.uvSet+1}`] = !0) : ZG[`${bG}DIRECTUV`] = 0, !0) : (ZG[`${bG}DIRECTUV`] = 0, !1)
    }

    function kL(GG) {
      const bG = new Map;
      for (const ZG in GG) {
        if (95 === ZG.charCodeAt(0)) continue;
        const wG = GG[ZG],
          SG = typeof wG;
        "number" === SG || "string" === SG ? bG.set(ZG, String(wG)) : wG && "function" !== SG && bG.set(ZG, !0)
      }
      return bG
    }

    function UL(GG) {
      const bG = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: ZG
        }
        of GG.features)
        for (const GG in ZG) bG[GG] = ZG[GG];
      return bG
    }

    function YL(GG) {
      const bG = GG.parts.geometry;
      return null !== bG && void 0 !== bG && bG.live ? bG : null
    }

    function VL(GG) {
      var bG;
      return null !== (bG = YL(GG)) && void 0 !== bG ? bG : SL
    }
    class pL {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = GG, this.warnOnce = bG, this.programWithModel = ZG, this.packFailed = wG, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(GG, bG, ZG, wG, SG) {
        const LG = bG.owner;
        let yG = this.drawStates.get(bG);
        if (!yG) {
          const GG = bG.parts.materials[bG.range];
          if (!GG) return this.warnOnce("model", `${ZG.name} on ${LG.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          yG = {
            defines: UL(GG),
            model: GG,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: SG,
            groupId: wG,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(bG, yG)
        }
        if (this.programCurrent(yG, bG, SG, wG)) return yG.program;
        const {
          model: kG
        } = yG, UG = VL(bG), YG = this.instanceLayout(LG, SG), VG = this.definesBits(LG);
        if (!this.prepareModelDefines(GG, LG, kG, yG.defines, wG, SG)) return null;
        yG.instancing = SG, yG.groupId = wG, yG.modelVersion = kG.version, yG.geometry = UG, yG.instanceLayout = YG, yG.definesBits = VG;
        const pG = function(GG) {
          let bG = "";
          for (const [ZG, wG] of GG) bG += !0 === wG ? `${ZG};` : `${ZG}=${wG};`;
          return bG
        }(kL(yG.defines));
        return pG === yG.definesKey && yG.packVariant === this.modelPackVariant && yG.program && !this.packFailed(yG.program) || (yG.definesKey = pG, yG.packVariant = this.modelPackVariant, yG.program = this.programWithModel(kG, yG.defines, pG)), yG.program
      }
      programCurrent(GG, bG, ZG, wG) {
        return null !== GG.program && !this.packFailed(GG.program) && GG.instancing === ZG && GG.groupId === wG && this.definesHold(GG, bG, ZG)
      }
      definesHold(GG, bG, ZG) {
        return GG.modelVersion === GG.model.version && GG.geometry === VL(bG) && GG.instanceLayout === this.instanceLayout(bG.owner, ZG) && GG.definesBits === this.definesBits(bG.owner) && GG.packVariant === this.modelPackVariant
      }
      modelPackKind(GG) {
        var bG;
        return 0 === this.modelPackVariant ? null : null !== (bG = (0, CG.z)(GG, iG.l.name)) && void 0 !== bG && bG.active ? "placed" : GG.item ? "item" : GG.lifeform ? "lifeform" : GG.box ? "box" : null
      }
      instanceLayout(GG, bG) {
        var ZG, wG, SG;
        return "thin" === bG ? null !== (SG = this.resources.j_.get(GG)) && void 0 !== SG ? SG : null : "instanced" === bG && null !== (ZG = null === (wG = GG._userInstancedBuffersStorage) || void 0 === wG ? void 0 : wG.interleavedKinds) && void 0 !== ZG ? ZG : null
      }
      definesBits(GG) {
        const bG = this.view;
        return (GG.visibility < 1 ? 1 : 0) | (GG.hasVertexAlpha ? 2 : 0) | (GG.applyFog ? 4 : 0) | (GG.useVertexColors ? 8 : 0) | (GG.nonUniformScaling ? 16 : 0) | (bG.fogEnabled && 0 !== bG.fogMode ? 32 : 0) | (bG.lightsEnabled ? 64 : 0) | bG.lightCount << 7
      }
      prepareLightDefines(GG, bG, ZG) {
        let wG = 0;
        if (this.view.lightsEnabled && !bG) {
          const bG = Math.min(ZG, 4);
          for (; wG < this.view.lightCount && (GG[`LIGHT${wG}`] = !0, GG[`LITE_LIGHT${wG}_SLOT`] = wG, wG++, GG._needNormals = !0, wG !== bG););
        }
        for (let SG = wG; SG < 4; SG++) GG[`LIGHT${SG}`] = !1, GG[`LITE_LIGHT${SG}_SLOT`] = void 0
      }
      prepareModelDefines(GG, bG, ZG, wG, SG, LG) {
        const {
          features: yG
        } = ZG;
        wG._needNormals = !1, wG._needUVs = !1;
        const kG = this.view;
        this.prepareLightDefines(wG, ZG.disableLighting, ZG.maxSimultaneousLights), wG.MAINUV1 = !1, wG.MAINUV2 = !1;
        const UG = ZG.diffuseTexture;
        UG ? (wG._needUVs = !0, wG.DIFFUSE = !0, UG.optimizeUVAllocation && (0, mG.C)(UG.matrix) ? (wG.DIFFUSEDIRECTUV = UG.uvSet + 1, wG[`MAINUV${UG.uvSet+1}`] = !0) : wG.DIFFUSEDIRECTUV = 0, UG.uvSet > 1 && this.warnOnce(`uvset:${ZG.name}`, `${ZG.name} samples UV set ${UG.uvSet+1}, which is not supported`)) : (wG.DIFFUSE = !1, wG.DIFFUSEDIRECTUV = 0);
        const YG = ZG.opacityTexture,
          VG = ZG.emissiveTexture;
        wG.OPACITY = yL(YG, "OPACITY", wG), wG.OPACITYRGB = null !== YG && YG.getAlphaFromRGB, wG.EMISSIVE = yL(VG, "EMISSIVE", wG), (YG && YG.uvSet > 1 || VG && VG.uvSet > 1) && this.warnOnce(`uvset:${ZG.name}`, `${ZG.name} samples a UV set past 2, which is not supported`);
        const pG = ZG.reflectionTexture,
          fG = null !== pG;
        if (fG) {
          if (!this.resources.boundTexture(pG)) return !1;
          wG._needNormals = !0
        }
        wG.REFLECTION = fG, wG.REFLECTIONMAP_3D = fG, wG.REFLECTIONMAP_SKYBOX = fG, wG.REFLECTIONMAP_OPPOSITEZ = fG && (GG.useRightHandedSystem ? !pG.invertZ : pG.invertZ), wG.ROUGHNESS = fG && ZG.roughness > 0, wG.REFLECTIONOVERALPHA = fG && ZG.useReflectionOverAlpha, wG.LITE_REFLECTION_LUMINANCE = fG && "cube" === pG.source.kind && pG.source.luminance, (bG.skeleton || bG.morphTargetManager) && this.warnOnce(`skin:${bG.name}`, `${bG.name} has bones or morph targets, which are not supported`), wG.FOG = ZG.fogEnabled && bG.applyFog && kG.fogEnabled && 0 !== kG.fogMode, wG.NONUNIFORMSCALING = bG.nonUniformScaling;
        const {
          visibility: QG,
          hasVertexAlpha: KG
        } = bG;
        wG.ALPHATEST = (0, CG.Y)(ZG, QG, KG), wG.ALPHAFROMDIFFUSE = (0, CG.kb)(ZG), wG.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== ZG.transparencyMode, wG.ALPHABLEND = null === ZG.transparencyMode || (0, CG.U)(ZG, QG, KG), wG.PREMULTIPLYALPHA = 7 === ZG.alphaMode || 8 === ZG.alphaMode, wG.EMISSIVEASILLUMINATION = ZG.useEmissiveAsIllumination, wG.LINKEMISSIVEWITHDIFFUSE = ZG.linkEmissiveWithDiffuse, wG.TWOSIDEDLIGHTING = !ZG.backFaceCulling && ZG.twoSidedLighting, wG.INSTANCES = "none" !== LG, wG.THIN_INSTANCES = "thin" === LG, wG.LITE_FRONT_LAYER = SG >= 1;
        for (const {
            feature: uG,
            state: iG,
            active: CG
          }
          of yG) {
          var hG, dG;
          if (CG) null === (hG = (dG = (0, cb.j)(uG)).prepareDefinesBeforeAttributes) || void 0 === hG || hG.call(dG, iG, wG, GG, bG)
        }
        this.modelPackKind(ZG) && (wG._needNormals = !0), wG.NORMAL = wG._needNormals && bG.isVerticesDataPresent("normal"), wG.UV1 = wG._needUVs && bG.isVerticesDataPresent("uv"), wG.UV2 = wG._needUVs && bG.isVerticesDataPresent("uv2");
        const JG = bG.useVertexColors && bG.isVerticesDataPresent("color");
        wG.VERTEXCOLOR = JG, wG.VERTEXALPHA = bG.hasVertexAlpha && JG, wG.INSTANCESCOLOR = "none" !== LG && bG.isVerticesDataPresent("instanceColor");
        for (const {
            feature: uG,
            state: iG,
            active: CG
          }
          of yG) {
          var rG, zG;
          if (CG) null === (rG = (zG = (0, cb.j)(uG)).prepareDefines) || void 0 === rG || rG.call(zG, iG, wG, GG, bG, ZG)
        }
        const EG = GG.CK();
        for (const {
            feature: uG,
            state: iG,
            active: CG
          }
          of yG) {
          var oG, XG;
          if (CG && !1 === (null === (oG = (XG = (0, cb.j)(uG)).isReadyForSubMesh) || void 0 === oG ? void 0 : oG.call(XG, iG, wG, GG, EG))) return !1
        }
        return !0
      }
    }

    function fL(GG, bG, ZG) {
      return GG.codeVersion !== bG.version && function(GG, bG) {
        const ZG = [],
          wG = [];
        for (const {
            feature: fG,
            state: QG,
            active: KG
          }
          of bG.features) {
          var SG, LG, yG, kG;
          if (KG) QL(null === (SG = (LG = (0, cb.j)(fG)).getCustomCode) || void 0 === SG ? void 0 : SG.call(LG, QG, "vertex", XG.c.WGSL), ZG), QL(null === (yG = (kG = (0, cb.j)(fG)).getCustomCode) || void 0 === yG ? void 0 : yG.call(kG, QG, "fragment", XG.c.WGSL), wG)
        }
        const UG = [];
        for (const {
            feature: fG,
            state: QG
          }
          of bG.features) {
          var YG, VG;
          const GG = null === (YG = (VG = (0, cb.j)(fG)).getUniforms) || void 0 === YG ? void 0 : YG.call(VG, QG, XG.c.WGSL);
          for (const bG of null !== (pG = null === GG || void 0 === GG ? void 0 : GG.ubo) && void 0 !== pG ? pG : []) {
            var pG;
            bG.size && bG.type && UG.push({
              name: bG.name,
              type: bG.type,
              arraySize: bG.arraySize
            })
          }
        }
        GG.vertexCode = ZG, GG.fragmentCode = wG, GG.pluginUniforms = UG, GG.codeKey = JSON.stringify([ZG, wG, UG]), GG.codeVersion = bG.version
      }(GG, bG), `${ZG}#${GG.codeKey}`
    }

    function QL(GG, bG) {
      if (GG)
        for (const ZG in GG) GG[ZG] && bG.push([ZG, GG[ZG]])
    }
    const KL = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class hL {
      constructor(GG) {
        this.warnOnce = GG, this.states = new Map
      }
      renderState(GG, bG, ZG, wG) {
        var SG;
        let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          yG = null !== (SG = GG.sideOrientation) && void 0 !== SG ? SG : bG.sideOrientation;
        bG._getWorldMatrixDeterminant() < 0 && (yG = 0 === yG ? 1 : 0);
        const kG = "triangle-list" === LG,
          UG = ZG ? GG.alphaMode : 0,
          YG = (!ZG || (0 === UG || GG.forceDepthWrite)) && !GG.disableDepthWrite,
          VG = kG && GG.backFaceCulling ? GG.cullBackFaces ? "back" : "front" : "none",
          pG = kG && 0 !== yG ? "ccw" : "cw",
          fG = GG.depthFunction,
          QG = kG ? GG.zOffset : 0,
          KG = kG ? GG.zOffsetUnits : 0,
          hG = !GG.disableColorWrite;
        return wG && wG.alphaMode === UG && wG.depthWrite === YG && wG.depthFunction === fG && wG.cullMode === VG && wG.frontFace === pG && wG.zOffset === QG && wG.zOffsetUnits === KG && wG.colourWrite === hG && wG.topology === LG ? wG : this.stateFor(UG, YG, fG, VG, pG, QG, KG, hG, LG)
      }
      stateFor(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = `${GG}|${bG}|${ZG}|${wG}|${SG}|${LG}|${yG}|${kG}|${UG}`;
        let VG = this.states.get(YG);
        if (!VG) {
          var pG;
          const fG = GG ? Lb(GG) : null;
          GG && !fG && this.warnOnce(`alpha:${GG}`, `alpha mode ${GG} is not supported`), VG = {
            key: YG,
            alphaMode: GG,
            depthFunction: ZG,
            zOffset: LG,
            zOffsetUnits: yG,
            topology: UG,
            blend: fG,
            depthWrite: bG,
            depthCompare: ZG && null !== (pG = KL.get(ZG)) && void 0 !== pG ? pG : null,
            cullMode: wG,
            frontFace: SG,
            depthBias: -yG,
            depthBiasSlopeScale: -LG,
            colourWrite: kG
          }, this.states.set(YG, VG)
        }
        return VG
      }
    }
    var dL = ZG(37800);

    function JL(GG) {
      if (!GG.frozen) return -1;
      let bG = GG.version;
      for (const {
          feature: ZG,
          state: wG,
          active: SG
        }
        of GG.features) {
        if (!SG || !ZG.bind) continue;
        const GG = (0, cb.j)(ZG).uniformsVersion;
        if (!GG) return -1;
        bG += GG(wG)
      }
      return bG
    }
    class rL {
      constructor(GG, bG, ZG) {
        this.slots = GG, this.data = bG, this.textures = ZG, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(GG, bG) {
        this.write4(GG, bG, 0, 0, 0, 1)
      }
      updateFloat2(GG, bG, ZG) {
        this.write4(GG, bG, ZG, 0, 0, 2)
      }
      updateFloat3(GG, bG, ZG, wG) {
        this.write4(GG, bG, ZG, wG, 0, 3)
      }
      updateFloat4(GG, bG, ZG, wG, SG) {
        this.write4(GG, bG, ZG, wG, SG, 4)
      }
      updateVector3(GG, bG) {
        this.write4(GG, bG.x, bG.y, bG.z, 0, 3)
      }
      updateVector4(GG, bG) {
        this.write4(GG, bG.x, bG.y, bG.z, bG.w, 4)
      }
      updateColor3(GG, bG) {
        this.write4(GG, bG.r, bG.g, bG.b, 0, 3)
      }
      updateColor4(GG, bG, ZG) {
        this.write4(GG, bG.r, bG.g, bG.b, ZG, 4)
      }
      updateFloatsFrom(GG, bG, ZG, wG) {
        const SG = this.slots.get(GG);
        if (!SG) return;
        const LG = this.data,
          yG = SG.offset;
        for (let kG = 0; kG < wG; kG++) LG[yG + kG] = bG[ZG + kG]
      }
      updateFloat3TimesFloats(GG, bG, ZG, wG) {
        const SG = this.slots.get(GG);
        if (!SG) return;
        const LG = this.data,
          yG = SG.offset;
        LG[yG] = bG[ZG] * wG[0], LG[yG + 1] = bG[ZG + 1] * wG[1], LG[yG + 2] = bG[ZG + 2] * wG[2]
      }
      R6(GG, bG) {
        const ZG = this.slots.get(GG);
        ZG && this.data.set(bG.m, ZG.offset)
      }
      updateMatrixFloats(GG, bG) {
        const ZG = this.slots.get(GG);
        ZG && this.data.set(bG, ZG.offset)
      }
      updateFloatArray(GG, bG) {
        const ZG = this.slots.get(GG);
        if (!ZG) return;
        if (!ZG.arraySize || ZG.stride === ZG.floats) return void this.data.set(bG, ZG.offset);
        const wG = Math.min(bG.length, ZG.floats * ZG.arraySize);
        for (let SG = 0; SG < wG; SG++) this.data[ZG.offset + Math.floor(SG / ZG.floats) * ZG.stride + SG % ZG.floats] = bG[SG]
      }
      updateArray(GG, bG) {
        this.updateFloatArray(GG, bG)
      }
      setTexture(GG, bG) {
        this.textures.set(GG, bG), this.expected.delete(GG)
      }
      expectTexture(GG) {
        this.textures.set(GG, null), this.expected.add(GG)
      }
      write4(GG, bG, ZG, wG, SG, LG) {
        const yG = this.slots.get(GG);
        if (!yG) return;
        const kG = this.data,
          UG = yG.offset;
        kG[UG] = bG, LG > 1 && (kG[UG + 1] = ZG), LG > 2 && (kG[UG + 2] = wG), LG > 3 && (kG[UG + 3] = SG)
      }
    }

    function zL(GG, bG) {
      const ZG = YS,
        wG = dL.j,
        SG = GG.lights,
        LG = Math.min(GG.lightCount, 8);
      for (let yG = 0; yG < LG; yG++) {
        const GG = ZG.lights + yG * ZG.lightStride,
          LG = yG * dL.d;
        bG[GG] = SG[LG + wG.vector], bG[GG + 1] = SG[LG + wG.vector + 1], bG[GG + 2] = SG[LG + wG.vector + 2], bG[GG + 3] = SG[LG + wG.kind] === dL.h.directional ? 1 : 0, bG[GG + 4] = SG[LG + wG.diffuse], bG[GG + 5] = SG[LG + wG.diffuse + 1], bG[GG + 6] = SG[LG + wG.diffuse + 2], bG[GG + 7] = SG[LG + wG.range], bG[GG + 8] = SG[LG + wG.specular], bG[GG + 9] = SG[LG + wG.specular + 1], bG[GG + 10] = SG[LG + wG.specular + 2], bG[GG + 11] = SG[LG + wG.range]
      }
      bG[ZG.fogInfos] = GG.fogMode, bG[ZG.fogInfos + 1] = GG.fogStart, bG[ZG.fogInfos + 2] = GG.fogEnd, bG[ZG.fogInfos + 3] = GG.fogDensity, bG[ZG.fogColour] = GG.fogColour[0], bG[ZG.fogColour + 1] = GG.fogColour[1], bG[ZG.fogColour + 2] = GG.fogColour[2], bG[ZG.outputHeight] = GG.renderHeight, bG[ZG.animTick] = GG.animTick, bG[ZG.timeMs] = GG.timeMs
    }
    class EL {
      constructor(GG) {
        this.instancesOf = GG
      }
      refreshModelUniforms(GG, bG, ZG, wG) {
        const SG = JL(ZG);
        if (SG >= 0 && SG === bG.heldVersion && bG.textures.get("diffuseSampler") === ZG.diffuseTexture && bG.textures.get("reflectionCubeSampler") === ZG.reflectionTexture && bG.textures.get("opacitySampler") === ZG.opacityTexture && bG.textures.get("emissiveSampler") === ZG.emissiveTexture) return !0;
        if (SG < 0)
          for (const LG of this.instancesOf(ZG)) LG.heldVersion = -1;
        return this.writeModelUniforms(GG, bG, ZG, wG), bG.heldVersion = SG, !1
      }
      writeModelUniforms(GG, bG, ZG, wG) {
        const {
          ubo: SG
        } = bG, LG = ZG.diffuseTexture, yG = ZG.diffuseColor;
        SG.updateFloat4("vDiffuseColor", yG[0], yG[1], yG[2], ZG.alpha), LG && (SG.updateFloat2("vDiffuseInfos", LG.uvSet, LG.level), SG.updateMatrixFloats("diffuseMatrix", LG.matrix)), SG.updateFloat("alphaCutOff", ZG.alphaCutOff), SG.updateFloatsFrom("vEmissiveColor", ZG.emissiveColor, 0, 3), SG.updateFloat3TimesFloats("vAmbientColor", wG.ambientColour, 0, ZG.ambientColor);
        const kG = ZG.specularColor;
        SG.updateFloat4("vSpecularColor", kG[0], kG[1], kG[2], ZG.specularPower), SG.setTexture("diffuseSampler", LG);
        const UG = ZG.opacityTexture;
        UG && (SG.updateFloat2("vOpacityInfos", UG.uvSet, UG.level), SG.updateMatrixFloats("opacityMatrix", UG.matrix)), SG.setTexture("opacitySampler", UG);
        const YG = ZG.emissiveTexture;
        YG && (SG.updateFloat2("vEmissiveInfos", YG.uvSet, YG.level), SG.updateMatrixFloats("emissiveMatrix", YG.matrix)), SG.setTexture("emissiveSampler", YG);
        const VG = ZG.reflectionTexture;
        VG && SG.updateMatrixFloats("reflectionMatrix", VG.matrix), SG.updateFloat2("vReflectionInfos", VG ? VG.level * GG.iblIntensity : 0, ZG.roughness), SG.setTexture("reflectionCubeSampler", VG);
        const pG = GG.CK();
        for (const {
            feature: KG,
            state: hG,
            active: dG
          }
          of ZG.features) {
          var fG, QG;
          if (dG) null === (fG = (QG = (0, cb.j)(KG)).bind) || void 0 === fG || fG.call(QG, hG, SG, GG, pG)
        }
      }
    }

    function oL(GG) {
      const bG = GG.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(bG) ? "u32" : /i32|^vec\di$/.test(bG) ? "i32" : "f32"
    }

    function XL(GG, bG) {
      const ZG = GG.getSize(),
        wG = oL(bG),
        SG = GG => 4 === ZG ? `${GG}x4` : 2 === ZG ? `${GG}x2` : null;
      if ("f32" === wG) {
        if (5126 === GG.type) return 1 === ZG ? "float32" : ZG >= 2 && ZG <= 4 ? `float32x${ZG}` : null;
        if (!GG.normalized) return null;
        switch (GG.type) {
          case 5121:
            return SG("unorm8");
          case 5120:
            return SG("snorm8");
          case 5123:
            return SG("unorm16");
          case 5122:
            return SG("snorm16")
        }
        return null
      }
      const LG = "u32" === wG ? "uint" : "sint";
      switch (GG.type) {
        case 5125:
        case 5124:
          return 1 === ZG ? `${LG}32` : ZG <= 4 ? `${LG}32x${ZG}` : null;
        case 5121:
        case 5120:
          return SG(`${LG}8`);
        case 5123:
        case 5122:
          return SG(`${LG}16`)
      }
      return null
    }

    function uL(GG) {
      var bG;
      const ZG = /(8|16|32)(?:x(\d))?$/.exec(GG);
      return ZG ? Number(ZG[1]) / 8 * Number(null !== (bG = ZG[2]) && void 0 !== bG ? bG : 1) : 4
    }
    class iL {
      constructor(GG, bG, ZG) {
        this.resources = GG, this.limits = bG, this.warnOnce = ZG, this.layouts = new Map
      }
      resolveInputs(GG, bG, ZG, wG) {
        const SG = [],
          LG = ZG.program.attributes,
          yG = [];
        for (let VG = 0; VG < LG.length; VG++) {
          const ZG = LG[VG],
            kG = ZG.optional ? null : this.resources.vertexInput(GG, ZG.name, wG);
          if (!kG) {
            const GG = oL(ZG.type),
              bG = "u32" === GG ? "uint32x4" : "i32" === GG ? "sint32x4" : "float32x4";
            yG.push(null);
            const wG = SG.find((GG => null === GG.data));
            wG ? wG.attributes.push({
              shaderLocation: VG,
              offset: 0,
              format: bG
            }) : SG.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: VG,
                offset: 0,
                format: bG
              }]
            });
            continue
          }
          const UG = kG.getBuffer();
          yG.push(kG);
          const YG = XL(kG, ZG.type);
          if (!YG) return this.warnOnce(`format:${bG}:${ZG.name}`, `${bG}'s ${ZG.name} (type ${kG.type}, size ${kG.getSize()}) has no WebGPU vertex format`), null;
          const pG = kG.getIsInstanced() ? "instance" : "vertex",
            fG = kG.byteStride,
            QG = uL(YG),
            KG = SG.find((GG => GG.data === UG && GG.stride === fG && GG.step === pG && kG.byteOffset >= GG.base && kG.byteOffset - GG.base + QG <= fG));
          KG ? KG.attributes.push({
            shaderLocation: VG,
            offset: kG.byteOffset - KG.base,
            format: YG
          }) : SG.push({
            data: UG,
            base: kG.byteOffset,
            stride: fG,
            step: pG,
            attributes: [{
              shaderLocation: VG,
              offset: 0,
              format: YG
            }]
          })
        }
        if (SG.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${bG}`, `${bG} needs ${SG.length} vertex buffers`), null;
        let kG = "";
        for (const VG of SG) {
          kG += `${VG.stride}${"instance"===VG.step?"i":"v"}`;
          for (const GG of VG.attributes) kG += `,${GG.shaderLocation}:${GG.offset}:${GG.format}`;
          kG += ";"
        }
        let UG = this.layouts.get(kG);
        UG || (UG = {
          key: kG,
          buffers: SG.map((GG => ({
            arrayStride: GG.stride,
            stepMode: GG.step,
            attributes: GG.attributes
          }))),
          instanceEnds: SG.map((GG => {
            let bG = -1;
            if ("instance" === GG.step)
              for (const ZG of GG.attributes) bG = Math.max(bG, ZG.offset + uL(ZG.format));
            return bG
          }))
        }, this.layouts.set(kG, UG));
        const YG = SG.map((GG => GG.base));
        return {
          program: ZG,
          sources: yG,
          layout: UG,
          slotData: SG.map((GG => GG.data)),
          i5: YG,
          buffers: [],
          offsets: YG,
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

    function CL(GG, bG, ZG, wG) {
      const SG = bG.program.program.attributes;
      for (let LG = 0; LG < SG.length; LG++) {
        if ((SG[LG].optional ? null : ZG.vertexInput(GG, SG[LG].name, wG)) !== bG.sources[LG]) return !1
      }
      return !0
    }
    const WL = 64;
    class mL {
      constructor(GG, bG, ZG, wG) {
        this.device = GG, this.layout = bG, this.frameBuffer = ZG, this.label = wG, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(GG) {
        if (GG * WL <= this.data.length) return !1;
        let bG = 2 * this.data.length;
        for (; GG * WL > bG;) bG *= 2;
        const ZG = new Float32Array(bG);
        return ZG.set(this.data), this.data = ZG, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SG = this.data,
          LG = GG * WL;
        let yG = SG[LG + 16] !== ZG;
        for (let kG = 0; kG < 16 && !yG; kG++) yG = SG[LG + kG] !== bG[wG + kG];
        if (yG) {
          for (let GG = 0; GG < 16; GG++) SG[LG + GG] = bG[wG + GG];
          SG[LG + 16] = ZG
        }
        return yG
      }
      upload(GG, bG) {
        this.device.queue.writeBuffer(this.buffer, GG * VS, this.data, GG * WL, (bG - GG) * WL)
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

    function IL(GG) {
      return GG.gpu[mG.e.lite] ??= GG.materials.map(((bG, ZG) => ({
        parts: GG,
        range: ZG,
        owner: GG.owner
      })))
    }

    function FL(GG) {
      var bG, ZG, wG;
      return null !== (bG = null !== (ZG = null === (wG = GG.parts.materials[GG.range]) || void 0 === wG ? void 0 : wG.mirror) && void 0 !== ZG ? ZG : GG.owner.material) && void 0 !== bG ? bG : null
    }
    const vL = ["opaque", "alphaTest", "transparent", "text"];

    function aL(GG) {
      for (const bG of vL) GG[bG].units.length = 0, GG[bG].rows.length = 0
    }
    class cL {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, ab.e)("Lite: ")
      }
      attach(GG, bG) {
        this.model = GG, this.mirror = bG
      }
      get worlds() {
        return this.model.nodes.Op
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(GG) {
        return this.groups.get(GG)
      }
      forEachGroup(GG) {
        this.groups.forEach(GG)
      }
      forEachSelected(GG) {
        for (const [bG, ZG] of this.groups)
          for (const wG of vL)
            for (const SG of ZG[wG].units) GG(SG.owner, "text" === wG ? "transparent" : wG, bG)
      }
      select(GG, bG) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(aL);
        const {
          model: ZG,
          mirror: wG
        } = this;
        if (!ZG || !wG || !GG) return;
        this.rows.length < ZG.nodes.rp && (this.rows = new Int32Array(ZG.nodes.rp));
        const SG = this.rows,
          LG = ZG.meshes;
        for (let kG = 0; kG < LG.looseCount; kG++) {
          const GG = LG.loose[kG],
            ZG = wG.nodes[GG];
          ZG && !ZG.isBlocked && ZG.isEnabled() && !ZG.nY.hasAZeroComponent && LG.selects(GG, bG.frustum) && (this.activate(ZG, GG), this.selectedCount++)
        }
        const yG = LG.selectTextPlanes(bG.frustum, SG);
        for (let kG = 0; kG < yG; kG++) {
          const bG = SG[kG],
            LG = wG.nodes[bG],
            yG = ZG.meshes.parts[bG];
          if (!LG.isVisible || !(LG.visibility > 0) || 0 === (LG.layerMask & GG.layerMask) || !yG) continue;
          const UG = this.groupOf(ZG.meshes.layer[bG]).text;
          for (const GG of IL(yG)) UG.units.push(GG), UG.rows.push(bG);
          this.selectedCount++
        }
      }
      instanceBatch(GG) {
        const bG = this.batchOf(GG);
        return bG.dispatched || (bG.dispatched = bG.renderSelf = !0, bG.row = this.rowOf(GG)), bG
      }
      rowOf(GG) {
        return GG.row
      }
      activate(GG, bG) {
        if (!GG.Ul) {
          const ZG = GG;
          if (ZG.zSG) {
            const GG = this.batchOf(ZG);
            GG.dispatched = !0, GG.renderSelf = !0, GG.row = bG
          }
          return void this.dispatch(ZG, bG, bG)
        }
        const ZG = GG,
          wG = ZG.ESG;
        if (wG._getWorldMatrixDeterminant() >= 0 !== ZG._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${wG.name}`, `A mirrored InstancedMesh of ${wG.name} is not drawn yet`);
        const SG = this.batchOf(wG);
        SG.instances.push(ZG), SG.rows.push(bG), SG.dispatched || (SG.dispatched = !0, this.dispatch(wG, bG, this.rowOf(wG)))
      }
      batchOf(GG) {
        let bG = this.batches.get(GG);
        return bG || (bG = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(GG, bG)), bG.frame !== this.frame && (bG.frame = this.frame, bG.dispatched = !1, bG.renderSelf = !1, bG.instances.length = 0, bG.rows.length = 0), bG
      }
      dispatch(GG, bG, ZG) {
        const {
          layer: wG,
          parts: SG
        } = this.model.meshes;
        if (!SG[bG]) return;
        const LG = this.groupOf(wG[bG]),
          yG = GG;
        for (const kG of IL(SG[bG])) {
          const GG = FL(kG);
          if (!GG) continue;
          const bG = GG.needAlphaBlendingForMesh(yG) ? LG.transparent : GG.needAlphaTestingForMesh(yG) ? LG.alphaTest : LG.opaque;
          bG.units.push(kG), bG.rows.push(ZG)
        }
      }
      groupOf(GG) {
        let bG = this.groups.get(GG);
        return bG || (bG = {
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
        }, this.groups.set(GG, bG)), bG
      }
    }

    function lL(GG) {
      GG.opaque.length = 0, GG.transparent.length = 0
    }
    class jL {
      constructor() {
        this.Ik = new Map, this.enabled = [], this.groups = new Map, this.vQ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(GG) {
        if (this.Ik.has(GG)) return;
        const bG = {
          mesh: GG,
          observer: GG.onEffectiveEnabledStateChangedObservable.add((GG => {
            this.DW(bG, GG)
          })),
          index: -1,
          steady: null
        };
        this.Ik.set(GG, bG), this.DW(bG, GG.isEnabled())
      }
      remove(GG) {
        const bG = this.Ik.get(GG);
        bG && (bG.observer.remove(!0), this.DW(bG, !1), this.Ik.delete(GG))
      }
      dropSteady() {
        for (const GG of this.Ik.values()) GG.steady = null
      }
      base(GG) {
        return this.Ik.get(GG)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Ik: this.Ik.size
        }
      }
      forEachSelected(GG) {
        for (const [bG, ZG] of this.groups) {
          for (const wG of ZG.opaque) GG(wG.owner, "opaque", bG);
          for (const wG of ZG.transparent) GG(wG.owner, "transparent", bG)
        }
        for (const bG of this.vQ) GG(bG.mesh, "opaque", 0)
      }
      group(GG) {
        return this.groups.get(GG)
      }
      forEachGroup(GG) {
        this.groups.forEach(GG)
      }
      select(GG, bG) {
        if (this.drawn = 0, this.selected = 0, this.vQ.length = 0, this.groups.forEach(lL), !GG) return;
        const ZG = this.enabled;
        for (let wG = 0; wG < ZG.length; wG++) {
          const SG = ZG[wG];
          if (SG.steady && bG(SG, GG)) {
            this.selected++, this.vQ.push(SG);
            continue
          }
          const LG = SG.mesh;
          if (LG.isBlocked || LG.nY.hasAZeroComponent) continue;
          if (!LG.isVisible || LG.visibility <= 0 || 0 === (LG.layerMask & GG.layerMask)) continue;
          if (LG.zSG) {
            this.warned.has(LG.name) || (this.warned.add(LG.name), console.warn(`Lite: thin instance base ${LG.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: yG
          } = LG;
          if (!yG) continue;
          LG.computeWorldMatrix(), this.selected++;
          const kG = this.listsFor(LG.renderingGroupId);
          for (const GG of IL(yG)) {
            const bG = FL(GG);
            bG && (bG.needAlphaBlendingForMesh(LG) ? kG.transparent.push(GG) : kG.opaque.push(GG))
          }
        }
      }
      DW(GG, bG) {
        if (bG === GG.index >= 0) return;
        GG.steady = null;
        const ZG = this.enabled;
        if (bG) GG.index = ZG.length, ZG.push(GG);
        else {
          const bG = ZG.pop();
          bG !== GG && (ZG[GG.index] = bG, bG.index = GG.index), GG.index = -1
        }
      }
      listsFor(GG) {
        let bG = this.groups.get(GG);
        return bG || (bG = {
          opaque: [],
          transparent: []
        }, this.groups.set(GG, bG)), bG
      }
    }
    var PL = ZG(39967);
    class ML {
      constructor() {
        this.bundle = null, this.stale = !0, this.Ik = new Set
      }
    }
    class AL {
      constructor(GG, bG, ZG) {
        this.device = GG, this.slots = bG, this.host = ZG, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new ML, this.qI = new ML, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new BS, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = GG => {
          GG.seen !== this.frame && (GG.draw && (GG.draw = null, this.args[5 * GG.slot + 1] = 0, this.argsDirty = !0, this.qI.stale ||= GG.qI), this.frame - GG.seen > 120 && (this.records.delete(GG.unit), this.freeSlots.push(GG.slot), GG.recorded && (this.bundleOf(GG).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(GG) {
          var bG, ZG;
          let wG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (bG = null === (ZG = globalThis.navigator) || void 0 === ZG ? void 0 : ZG.userAgent) && void 0 !== bG ? bG : "";
          const SG = GG.adapterInfo;
          return "intel" === (null === SG || void 0 === SG ? void 0 : SG.vendor) && "gen-12lp" === SG.architecture && wG.includes("Windows")
        }(GG), (0, PL.N)(this.direct)
      }
      yE() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, PL.N)(this.directThisFrame)
      }
      add(GG, bG, ZG, wG) {
        let SG = this.records.get(GG);
        return SG || (SG = this.createRecord(GG), this.records.set(GG, SG)), SG.recorded && qL(SG, bG) || (this.bundleOf(SG).stale = !0), this.place(SG, bG, ZG, wG), SG
      }
      bundleOf(GG) {
        return GG.qI ? this.qI : this.main
      }
      addAgain(GG, bG, ZG, wG) {
        GG.recorded || (this.bundleOf(GG).stale = !0), this.place(GG, bG, ZG, wG)
      }
      place(GG, bG, ZG, wG) {
        GG.seen = this.frame, GG.qI && null === GG.draw && (this.qI.stale = !0), GG.draw = bG, this.drawn++, ZG && this.slots.write(GG.slot, ZG, wG) && (this.slotsFrom = Math.min(this.slotsFrom, GG.slot), this.slotsTo = Math.max(this.slotsTo, GG.slot));
        const SG = this.args,
          LG = 5 * GG.slot;
        SG[LG] === bG.count && SG[LG + 1] === bG.instances && SG[LG + 2] === bG.first || (SG[LG] = bG.count, SG[LG + 1] = bG.instances, SG[LG + 2] = bG.first, this.argsDirty = !0, this.qI.stale ||= GG.qI)
      }
      kE() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(GG) {
        for (const bG of this.records.values()) bG.draw && bG.seen === this.frame && !bG.qI && GG(bG.draw, this.slots.data, bG.slot * VS / 4)
      }
      resourceDestroyed(GG) {
        this.main.stale ||= this.main.Ik.has(GG), this.qI.stale ||= this.qI.Ik.has(GG)
      }
      execute(GG, bG, ZG) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(GG, bG, ZG, "direct"), this.drawn;
        const wG = this.host.sceneGroup(bG);
        if (!wG) return this.main.bundle = null, this.qI.bundle = null, this.recordedSceneGroup = null, this.encode(GG, bG, ZG, "direct"), this.drawn;
        this.recordedTarget === ZG && this.recordedSceneGroup === wG || (this.recordedTarget = ZG, this.recordedSceneGroup = wG, this.main.stale = !0, this.qI.stale = !0);
        const SG = this.main,
          LG = this.qI;
        let yG = !1;
        !SG.stale && SG.bundle || (SG.bundle = this.record(bG, ZG, wG, "indirect"), yG = !0);
        const kG = (0, PL.o)();
        return (LG.stale || this.rangedEpoch !== kG) && (this.rangedEpoch = kG, LG.bundle = this.drawsRanged() ? this.record(bG, ZG, wG, "qI") : this.noRangedBundle(), yG = !0), yG && (this.bundles = LG.bundle ? [SG.bundle, LG.bundle] : [SG.bundle]), GG.executeBundles(this.bundles), GG.setBindGroup(0, wG), this.drawn
      }
      record(GG, bG, ZG, wG) {
        const SG = this.device.createRenderBundleEncoder({
          label: "qI" === wG ? "thin-bases-ranged" : "thin-bases",
          colorFormats: GG._colorFormat ? [GG._colorFormat] : [],
          depthStencilFormat: GG._depthStencilFormat,
          sampleCount: GG._sampleCount
        });
        return SG.setBindGroup(0, ZG), this.encode(SG, GG, bG, wG), SG.finish()
      }
      noRangedBundle() {
        for (const GG of this.records.values()) GG.qI && (GG.recorded = !1);
        return this.qI.Ik.clear(), this.qI.stale = !1, null
      }
      drawsRanged() {
        for (const GG of this.records.values())
          if (GG.qI && GG.draw) return !0;
        return !1
      }
      encode(GG, bG, ZG, wG) {
        const SG = [];
        for (const UG of this.records.values()) "direct" !== wG && UG.qI !== ("qI" === wG) || (UG.recorded = !1, UG.draw && SG.push(UG));
        SG.sort(nL);
        const LG = "direct" === wG ? null : "qI" === wG ? this.qI : this.main;
        null === LG || void 0 === LG || LG.Ik.clear(), this.binder.reset();
        let yG = !1;
        for (const UG of SG) {
          var kG;
          const SG = UG.draw,
            YG = this.host.pipelineFor(SG, bG, ZG);
          if (!YG) {
            this.host.pipelineCompiling(SG, ZG) ? yG = !0 : LG && this.keep(UG, SG, LG.Ik);
            continue
          }
          let VG;
          if (UG.qI && "indirect" !== wG) {
            const GG = UG.unit.owner;
            VG = "direct" === wG && (0, PL.A)(GG) || (0, PL.q)(GG) || void 0
          }
          if (LG && this.keep(UG, SG, LG.Ik), 0 === (null === (kG = VG) || void 0 === kG ? void 0 : kG.count)) continue;
          this.binder.bind(GG, SG, YG, this.slots.bindGroup, UG.slot * VS);
          const pG = 5 * UG.slot;
          if ("indirect" === wG) {
            SG.indexBuffer ? GG.drawIndexedIndirect(this.argsBuffer, 4 * pG) : GG.drawIndirect(this.argsBuffer, 4 * pG);
            continue
          }
          const fG = this.args;
          VG ? sL(GG, null !== SG.indexBuffer, fG, pG, VG) : SG.indexBuffer ? GG.drawIndexed(fG[pG], fG[pG + 1], fG[pG + 2], 0, 0) : GG.draw(fG[pG], fG[pG + 1], fG[pG + 2], 0)
        }
        LG && (LG.stale = yG)
      }
      keep(GG, bG, ZG) {
        GG.recorded = !0, GG.pipelineKey = bG.pipelineKey, GG.materialGroup = bG.material.bindGroup, GG.vertexBuffers.length = 0, GG.vertexBuffers.push(...bG.vertexBuffers), GG.vertexOffsets = bG.vertexOffsets, GG.indexBuffer = bG.indexBuffer, GG.indexFormat = bG.indexFormat;
        for (const wG of bG.vertexBuffers) ZG.add(wG);
        bG.indexBuffer && ZG.add(bG.indexBuffer), ZG.add(bG.material.buffer);
        for (const wG of bG.material.bound) wG && ZG.add(wG)
      }
      createRecord(GG) {
        let bG = this.freeSlots.pop();
        return void 0 === bG && (bG = this.slotCount++, this.grow()), {
          unit: GG,
          slot: bG,
          qI: void 0 !== (0, PL.q)(GG.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.qI.stale = !0), 5 * this.slotCount > this.args.length) {
          const GG = new Uint32Array(2 * this.args.length);
          GG.set(this.args), this.args = GG, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function sL(GG, bG, ZG, wG, SG) {
      const LG = ZG[wG + 1],
        yG = SG.data;
      for (let kG = 0; kG < SG.count; kG++) {
        const SG = Math.min(yG[2 * kG], LG),
          UG = Math.min(yG[2 * kG + 1], LG - SG);
        0 !== UG && (bG ? GG.drawIndexed(ZG[wG], UG, ZG[wG + 2], 0, SG) : GG.draw(ZG[wG], UG, ZG[wG + 2], SG))
      }
    }

    function qL(GG, bG) {
      if (GG.pipelineKey !== bG.pipelineKey || GG.materialGroup !== bG.material.bindGroup || GG.indexBuffer !== bG.indexBuffer || GG.indexFormat !== bG.indexFormat || GG.vertexOffsets !== bG.vertexOffsets || GG.vertexBuffers.length !== bG.vertexBuffers.length) return !1;
      for (let ZG = 0; ZG < GG.vertexBuffers.length; ZG++)
        if (GG.vertexBuffers[ZG] !== bG.vertexBuffers[ZG]) return !1;
      return !0
    }

    function nL(GG, bG) {
      return bL(GG.draw, bG.draw)
    }
    const gL = new WeakMap,
      eL = {
        depth: !1,
        sunShadow: !1
      };

    function RL(GG, bG) {
      let ZG = gL.get(GG);
      ZG || (ZG = new Map, gL.set(GG, ZG));
      const wG = `${bG.depth?"-depth":""}${bG.sunShadow?"-shadow":""}${bG.shadowMask?"-mask":""}`;
      let SG = ZG.get(wG);
      if (!SG) {
        const LG = [{
          binding: Nb.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Nb.h
          }
        }, {
          binding: Nb.u,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        bG.depth && LG.push({
          binding: Nb.l,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), bG.sunShadow && LG.push(... function() {
          const GG = GPUShaderStage.FRAGMENT,
            bG = Nb.m;
          return [{
            binding: bG.uniform,
            visibility: GG,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: bG.Wf,
            visibility: GG,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: bG.special,
            visibility: GG,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: bG.volume,
            visibility: GG,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: bG.sampler,
            visibility: GG,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: bG.entities,
            visibility: GG,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: bG.entityGrids,
            visibility: GG,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), bG.shadowMask && LG.push({
          binding: Nb.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), SG = GG.createBindGroupLayout({
          label: `${bG.depth?"terrain-":""}shader-pack-inputs${wG}`,
          entries: LG
        }), ZG.set(wG, SG)
      }
      return SG
    }

    function TL(GG) {
      return RL(GG, eL)
    }

    function HL(GG, bG) {
      if (!bG) return !1;
      const ZG = (0, Ob.e)(GG);
      return !!ZG && Lw(ZG, bG)
    }

    function tL(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!aw(bG)) return [];
      return [RL(GG, {
        depth: Ww(bG.packVariant),
        sunShadow: HL(bG.packVariant, ZG),
        shadowMask: wG
      })]
    }
    class DL {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = GG, this.sunShadow = ZG, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Nb.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = GG.createBuffer({
          label: "shader-pack-inputs",
          size: Nb.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const wG = (0, Nb.v)(bG);
        this.textures = GG.createBuffer({
          label: "shader-pack-textures",
          size: wG.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), GG.queue.writeBuffer(this.textures, 0, wG), this.bindGroup = GG.createBindGroup({
          label: "shader-pack-inputs",
          layout: TL(GG),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Nb.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Nb.u,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(GG, bG, ZG) {
        (0, Nb.A)(this.data, {
          seconds: GG.seconds(),
          lit: ZG,
          renderOffset: GG.renderOffset(),
          XGG: GG.XGG(),
          eyePosition: bG,
          shadowDirection: GG.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wG = bG ? this.sunShadow : null;
        if ((bG || ZG) && !wG) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!GG && !wG) return this.bindGroup;
        (GG && GG !== this.depthView || ZG && ZG !== this.maskView) && (this.depthView = null !== GG && void 0 !== GG ? GG : this.depthView, this.maskView = null !== ZG && void 0 !== ZG ? ZG : this.maskView, this.groups.clear());
        const SG = (GG ? 1 : 0) | (wG ? 2 : 0) | (ZG ? 4 : 0);
        let LG = this.groups.get(SG);
        if (!LG) {
          const bG = this.entries();
          GG && bG.push({
            binding: Nb.l,
            resource: GG
          }), wG && bG.push(...wG.entries()), ZG && bG.push({
            binding: Nb.q,
            resource: ZG
          }), LG = this.device.createBindGroup({
            label: `${GG||ZG?"terrain-":""}shader-pack-inputs${GG?"-depth":""}${wG?"-shadow":""}${ZG?"-mask":""}`,
            layout: RL(this.device, {
              depth: !!GG,
              sunShadow: !!wG,
              shadowMask: !!ZG
            }),
            entries: bG
          }), this.groups.set(SG, LG)
        }
        return LG
      }
      bind(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        GG.setBindGroup(Nb.f, this.bindGroupFor(bG, ZG, wG))
      }
    }

    function NL(GG, bG, ZG) {
      if (GG.gpuVersion === bG.gpuBuffersVersion) return !0;
      let wG;
      do {
        if (wG = bG.gpuBuffersVersion, !OL(GG, bG, ZG)) return !1
      } while (bG.gpuBuffersVersion !== wG);
      return GG.gpuVersion = wG, GG.fitInstances = 0, !0
    }

    function OL(GG, bG, ZG) {
      let wG = null;
      for (let LG = 0; LG < GG.slotData.length; LG++) {
        var SG;
        const yG = GG.slotData[LG],
          kG = yG ? bG.gpuBuffer(yG) : ZG;
        if (!kG) return !1;
        yG && GG.layout.instanceEnds[LG] < 0 && bG.cover(yG, Number.POSITIVE_INFINITY), GG.buffers[LG] = kG;
        const UG = GG.i5[LG] + (yG ? bG.gpuOffset(yG) : 0);
        UG !== (null !== (SG = wG) && void 0 !== SG ? SG : GG.offsets)[LG] && (wG ??= GG.offsets.slice(), wG[LG] = UG), GG.ends[LG] = yG ? bG.gpuEnd(yG) : kG.size
      }
      return wG && (GG.offsets = wG), !0
    }

    function xL(GG, bG, ZG, wG) {
      if (bG <= GG.fitInstances) return null;
      const {
        layout: SG,
        ends: LG,
        offsets: yG,
        slotData: kG,
        i5: UG
      } = GG;
      let YG = !1;
      for (let VG = 0; VG < SG.buffers.length; VG++) {
        const GG = SG.instanceEnds[VG];
        if (GG < 0) continue;
        const wG = (bG - 1) * SG.buffers[VG].arrayStride + GG;
        if (LG[VG] - yG[VG] < wG) return {
          index: VG,
          needed: wG
        };
        const pG = kG[VG];
        pG && ZG.cover(pG, UG[VG] + wG) && (YG = !0)
      }
      return YG && NL(GG, ZG, wG), GG.fitInstances = bG, null
    }
    var BL = ZG(38218),
      Gy = ZG(38256);
    const by = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Zy = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      wy = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Sy = `((vertexInputs.aPackedLightLevels >> 16u) | ${vb.c.placed}u)`,
      Ly = "u32(vertexInputs.aShaderPackItem.x)",
      yy = `${vb.c.lifeform}u`;

    function ky(GG) {
      return "item" === GG.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Uy = "bloxdSpEnchant",
      Yy = "floor(finalWorld[3].xyz)";

    function Vy(GG, bG, ZG) {
      return "placed" === bG.kind && GG.reads[ZG].includes("bloxdFragmentBlockPosition")
    }

    function py(GG, bG) {
      let [ZG, wG] = GG;
      return ZG === bG.point && wG === bG.code
    }

    function fy(GG, bG) {
      var ZG, wG, SG;
      const LG = null === (ZG = GG.find((GG => GG.texture))) || void 0 === ZG ? void 0 : ZG.texture,
        yG = null === (wG = GG.find((GG => GG.enchantTier))) || void 0 === wG ? void 0 : wG.enchantTier,
        kG = null === (SG = GG.find((GG => GG.overlay))) || void 0 === SG ? void 0 : SG.overlay,
        UG = kG ? bG.filter((GG => py(GG, kG))).length : 0;
      return kG && 1 === UG ? {
        texture: LG,
        overlay: kG,
        enchantTier: yG
      } : {
        texture: LG,
        enchantTier: yG
      }
    }

    function Qy(GG) {
      if ("item" === GG.kind) {
        return {
          vertexFlags: `(${Ly} & 0xffffu)`,
          varying: "vPackItem",
          value: Ly,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return GG.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Sy,
        varying: "vPackFlags",
        value: Sy,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Ky(GG) {
      return "lifeform" === GG.kind ? yy : "0u"
    }

    function hy(GG) {
      return !!GG.BLOXD_PLUGIN_ENCHANTMENT
    }

    function dy(GG, bG) {
      const {
        enchantTier: ZG
      } = bG;
      return ZG && hy(bG.defines) && "lifeform" === bG.kind && Xy(GG, "enchantTier") ? ZG : null
    }

    function Jy(GG, bG) {
      return hy(bG.defines) && Xy(GG, "enchantSpeed")
    }

    function ry(GG) {
      const {
        overlay: bG,
        defines: ZG
      } = GG;
      if (!bG || !ZG.DIFFUSE) return null;
      const wG = ZG.VERTEXCOLOR || ZG.INSTANCESCOLOR && ZG.INSTANCES;
      return `vec4f(${bG.colour}.rgb * uniforms.vDiffuseInfos.y${wG?" * fragmentInputs.vColor.rgb":""}, ${bG.colour}.a)`
    }
    const zy = "fragmentInputs.vPackTexture";

    function Ey(GG) {
      const {
        atlas: bG,
        defines: ZG,
        texture: wG
      } = GG;
      if (bG || !ZG.DIFFUSE) return null;
      if (wG) return {
        texture: "diffuseSampler",
        ...wG
      };
      const SG = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===ZG.DIFFUSEDIRECTUV?"vMainUV1":2===ZG.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== GG.kind) return SG;
      if (!ZG.BLOXD_PLUGIN_ANIMATED) return {
        ...SG,
        id: zy
      };
      const LG = XG.c.WGSL,
        yG = (0, XG.ub)(LG, "uAnimStatesNum"),
        kG = (0, XG.Z)(LG, (0, BL.e)(LG), yG),
        UG = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${yG})`,
        layers: [kG],
        uv: `vec2f(${UG}.x, ${UG}.y * ${yG} - ${kG})`,
        levelUv: UG,
        id: zy
      }
    }

    function oy(GG, bG) {
      return "box" === bG.kind && !!GG.hooks.surface && null !== Ey(bG)
    }

    function Xy(GG, bG) {
      return GG.reads.fragment.includes(bG)
    }

    function uy(GG) {
      return !!GG.BLOXD_LIGHTING && !GG.BLOXD_UNLIT
    }

    function iy(GG, bG, ZG, wG) {
      const SG = GG.filter((GG => {
        let [ZG, wG] = GG;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === ZG && wG === bG
      }));
      if (1 !== SG.length) throw new Error(`A model program for shader packs has ${0===SG.length?"no":"more than one"} ${wG} code before fog (lite/modelShaderPack.ts)`);
      return GG.map((GG => GG === SG[0] ? [GG[0], ZG] : GG))
    }

    function Cy(GG, bG, ZG, wG) {
      const {
        hooks: SG
      } = GG, {
        kind: LG,
        defines: yG
      } = bG, kG = [...ZG];
      var UG;
      bG.atlas && SG.surface && kG.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", fw("atlasIdxIn")]), "item" === LG && kG.push(["CUSTOM_VERTEX_DEFINITIONS", (0, XG.g)(XG.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), oy(GG, bG) && kG.push(["CUSTOM_VERTEX_DEFINITIONS", (0, XG.g)(XG.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (UG = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Vw}[min(u32(${UG}) - 1u, arrayLength(&${Vw}) - 1u)], ${UG} > 0.5);\n`)]);
      const YG = Qy(bG);
      YG && (SG.surface || SG.light) && kG.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${YG.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${YG.varying} = ${YG.value};`]);
      let VG = wG;
      if (Vy(GG, bG, "fragment") && (kG.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Yy});`]), VG = [...VG, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Xy(GG, "localPosition") && kG.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${ky(bG)};`]), hy(yG) && SG.surface) {
        Jy(GG, bG) && kG.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const ZG = dy(GG, bG);
        ZG && kG.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${ZG});`]);
        const wG = (0, XG.mb)(XG.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        VG = [...iy(VG, (0, Gy.j)(XG.c.WGSL), wG, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Gy.e)(Uy)]]
      }
      const {
        overlay: pG
      } = bG;
      pG && ry(bG) && SG.surface && (VG = VG.filter((GG => !py(GG, pG))));
      const fG = SG.light ? function(GG) {
        return "placed" === GG.kind ? {
          name: "terrain",
          engine: (0, Hb.S)(XG.c.WGSL),
          pack: (0, Hb.ob)(XG.c.WGSL)
        } : GG.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Hb.K)(XG.c.WGSL),
          pack: (0, Hb.hb)(XG.c.WGSL)
        } : null
      }(bG) : null;
      if (fG && (VG = iy(VG, fG.engine, fG.pack, `${fG.name} light`), "placed" !== LG && uy(yG))) {
        const GG = yG.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, XG.ub)(XG.c.WGSL, "uEntityLightLevels") : (0, XG.Cb)(XG.c.WGSL, "aLightLevels");
        kG.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Hb.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Hb.kb)(XG.c.WGSL, GG)])
      }
      return {
        vertexCode: kG,
        fragmentCode: VG
      }
    }

    function Wy(GG, bG, ZG, wG) {
      return ww(GG, bG, ZG, wG, "model")
    }
    const my = "\t@builtin(position) position: vec4f,\n";

    function Iy(GG, bG) {
      const ZG = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(GG)[0];
      return `${ZG}${bG}${GG.slice(ZG.length)}`
    }

    function Fy(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: SG
      } = bG, LG = Lw(bG, wG), {
        kind: yG,
        defines: kG
      } = ZG, UG = function(GG, bG) {
        var ZG, wG, SG;
        const {
          defines: LG
        } = bG, yG = Qy(bG), kG = !!LG.FOG, UG = hy(LG), YG = null !== (ZG = null === yG || void 0 === yG ? void 0 : yG.enchantTier) && void 0 !== ZG ? ZG : dy(GG, bG) ? "fragmentInputs.vPackEnchantTier" : "0u", VG = "lifeform" === bG.kind && !LG.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (wG = null === yG || void 0 === yG ? void 0 : yG.vertexFlags) && void 0 !== wG ? wG : Ky(bG),
          vertexLocalPosition: ky(bG),
          flags: null !== (SG = null === yG || void 0 === yG ? void 0 : yG.flags) && void 0 !== SG ? SG : Ky(bG),
          normal: "normalW",
          alpha: VG ? "alpha * baseColor.a" : "alpha",
          alphaOut: VG ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: kG ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: kG ? "1.0 - fog" : "0.0",
          enchantTier: YG,
          enchantColour: UG ? `${Uy}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Jy(GG, bG) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Xy(GG, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: ry(bG)
        }
      }(bG, ZG), YG = GG.textures.filter((GG => /^textureAtlas\d+$/.test(GG.name))).length, VG = ZG.atlas && YG > 0 ? {
        count: YG,
        layers: ZG.atlas.layers,
        width: ZG.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: GG.material.slots.has("uAnimDataPerTex") ? (bG, ZG) => Ow(bG, ZG, function(GG) {
          const bG = GG.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Tp: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: GG => `uniforms.uAnimDataPerTex[${GG}]${bG}`
          }
        }(GG)) : null
      } : null, pG = "placed" === yG ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", fG = null !== VG && void 0 !== VG ? VG : Ey(ZG), QG = function(GG, ZG) {
        let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Nb.x)()}${kw(bG,ZG)}${wG}${Kw(GG)}${Gw}${pG}${bG.code}`
      };
      let {
        vertex: KG,
        fragment: hG
      } = GG;
      const dG = dw(SG, UG);
      if (dG) {
        const GG = Vy(bG, ZG, "vertex") ? `\tbloxdSpCell = ${Yy};\n` : "";
        KG = Wy(KG, by, `${GG}${dG.slice(1)}${by}`, "vertex")
      }
      const JG = `${Uw(bG,LG,function(GG,bG){return bG.TWOSIDEDLIGHTING?GG:`select(-(${GG}), ${GG}, fragmentInputs.frontFacing)`}(UG.normal,kG),UG.flags)}${Jw(SG,bG.strict,bG.program,fG,UG)}`;
      JG && (hG = Wy(hG, Zy, `${JG.slice(1)}${Zy}`, "surface")), LG && bG.sunShadow && !kG.TWOSIDEDLIGHTING && (hG = Wy(hG, my, `${my}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const rG = Ew(SG);
      if (rG) {
        const GG = zw(SG, uy(kG), !0, UG);
        hG = Wy(hG, wy, `${GG}${rG.slice(1)}${wy}`, "light")
      }
      const zG = oy(bG, ZG) ? pw : "";
      return {
        ...GG,
        vertex: Iy(KG, QG(VG, !1, zG)),
        fragment: Iy(hG, QG(fG, LG))
      }
    }
    const vy = {
      name: "earthSky",
      uniqueId: -1
    };
    class ay {
      constructor(GG, bG) {
        this.resources = GG, this.epoch = bG, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const GG of this.instances.values()) GG.released = !0, this.resources.destroyBuffer(GG.buffer);
        this.instances.clear()
      }
    }

    function cy(GG) {
      return GG.failed && null !== GG.packGroup
    }
    class ly {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jL,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new cL;
        this.device = GG, this.resources = bG, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Z5 = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new BS, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new EL((GG => this.modelSlot(GG).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, ab.e)("Lite: "), this.renderStates = new hL(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (GG, bG) => this.keepSteady(GG, bG), this.lists = void 0, this.slotCount = 0, this.Z5 = wG, this.modelMeshes = SG, this.lists = new GL(SG, wG, this, this.warnOnce), this.drawDefines = new pL(bG, this.warnOnce, ((GG, bG, ZG) => this.programWithModel(GG, bG, ZG)), cy), this.vertexLayouts = new iL(bG, GG.limits, this.warnOnce), this.sceneLayout = ub(GG), this.frameLayout = GG.createBindGroupLayout({
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
        }), this.frameBuffer = GG.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new mL(GG, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = GG.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new AL(GG, new mL(GG, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (GG, bG, ZG) => this.pipelineFor(GG, bG, ZG),
          pipelineCompiling: (GG, bG) => !GG.program.failed && !1 !== this.pipelines.get(`${GG.pipelineKey}|${bG}`),
          sceneGroup: GG => {
            const bG = ZG(GG);
            return bG || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), bG
          }
        }), bG.onDestroy = GG => {
          this.thinBundle.resourceDestroyed(GG)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const SG = {
          order: GG,
          isTransparent: bG,
          _direct: !bG,
          bind: (GG, bG) => this.createBinding(SG, bG, ZG, wG)
        };
        return SG
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(GG, bG, ZG) {
        var wG;
        let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = bG, this.drawDefines.view = bG, this.thinBundle.yE(), this.writeFrameUniforms();
        const LG = null !== (wG = null === SG || void 0 === SG ? void 0 : SG.defineFor("model")) && void 0 !== wG ? wG : 0;
        this.drawDefines.modelPackVariant = LG, SG && 0 !== LG && (this.packInputs ??= new DL(this.device, SG.textureLayers(), this.sunShadow), this.packInputs.write(SG, bG.eye, SG.Fh())), this.lists.clear(), this.slotCount = 0;
        const yG = GG.activeCamera;
        this.Z5.select(yG, this.keepSteadyBase), this.modelMeshes.select(yG, bG), ZG && this.pushEarthSky(ZG), this.lists.collect(GG), this.thinBundle.kE(), this.uploadMeshSlots()
      }
      pushDraws(GG, bG, ZG, wG, SG, LG) {
        let yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const kG = LG.length;
        for (let UG = 0; UG < ZG; UG++) {
          const ZG = bG[UG];
          let kG = this.retainedDraw(GG, ZG, wG, SG);
          if (void 0 === kG && (kG = this.drawFor(GG, ZG, wG, SG), this.retain(ZG, kG)), kG) {
            const GG = ZG.owner,
              bG = yG ? yG[UG] : -1;
            kG.slotOffset = bG < 0 ? this.writeMeshSlot(GG.getWorldMatrix().m, GG.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[bG], 16 * bG), LG.push(kG)
          }
        }
        return LG.length - kG
      }
      bundleDraws(GG, bG, ZG) {
        let wG = 0;
        for (const SG of bG) {
          let bG = this.retainedDraw(GG, SG, ZG, !1);
          const LG = void 0 !== bG;
          if (void 0 === bG && (bG = this.drawFor(GG, SG, ZG, !1), this.retain(SG, bG)), bG) {
            const GG = SG.owner,
              ZG = this.thinBundle.add(SG, bG, GG.getWorldMatrix().m, GG.visibility);
            LG && this.steadyFrom(SG, bG, ZG), wG++
          }
        }
        return wG
      }
      steadyFrom(GG, bG, ZG) {
        const wG = GG.owner,
          SG = this.Z5.base(wG),
          LG = wG.material,
          {
            drawState: yG,
            instance: kG
          } = bG.inputs.retained;
        if (!SG || !LG || 1 !== GG.parts.materials.length || FL(GG) !== LG) return;
        const UG = SG.steady ??= {
          unit: GG,
          material: LG,
          visibility: 1,
          draw: bG,
          record: ZG,
          drawState: yG,
          instance: kG,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        UG.unit = GG, UG.material = LG, UG.visibility = wG.visibility, UG.draw = bG, UG.record = ZG, UG.drawState = yG, UG.instance = kG, UG.bindGroup = kG.bindGroup, UG.gpuVersion = this.resources.gpuBuffersVersion, UG.fitInstances = bG.inputs.fitInstances, UG.worldFlag = wG.getWorldMatrix().updateFlag, UG.handedFrame = this.frame
      }
      keepSteady(GG, bG) {
        const ZG = GG.steady;
        if (ZG.handedFrame !== this.frame - 1 || (this.frame + ZG.phase) % 8 === 0) return !1;
        const wG = GG.mesh,
          {
            unit: SG,
            draw: LG,
            instance: yG,
            drawState: kG
          } = ZG,
          UG = wG.forcedInstanceCount || wG.B5;
        if (!wG.isVisible || wG.zSG || wG.visibility !== ZG.visibility || 0 === (wG.layerMask & bG.layerMask) || wG.material !== ZG.material || 0 !== wG.renderingGroupId || wG.hasVertexAlpha || !this.drawDefines.definesHold(kG, SG, kG.instancing) || ZG.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(LG.inputs, SG, kG.instancing, LG.program) || LG.program.failed || yG.released || UG <= 0 || UG > ZG.fitInstances) return !1;
        if (yG.frame !== this.frame && this.bindMaterial(yG, this.modelUniforms.refreshModelUniforms(wG.Dv(), yG, yG.model, this.view)), !yG.bindable || yG.bindGroup !== ZG.bindGroup) return !1;
        const YG = wG.computeWorldMatrix(),
          VG = YG.updateFlag !== ZG.worldFlag;
        return ZG.worldFlag = YG.updateFlag, LG.instances = UG, this.thinBundle.addAgain(ZG.record, LG, VG ? YG.m : null, ZG.visibility), ZG.handedFrame = this.frame, this.Z5.drawn++, !0
      }
      retainedDraw(GG, bG, ZG, wG) {
        const SG = this.inputs.get(bG),
          LG = null === SG || void 0 === SG ? void 0 : SG.retained;
        if (!SG || !LG) return;
        const {
          drawState: yG,
          program: kG,
          instance: UG,
          instancing: YG
        } = LG, VG = bG.owner;
        if (LL(VG) !== YG) return;
        const pG = this.instanceCount(VG, YG);
        if (pG <= 0) return null;
        if (UG.released || kG.failed || yG.program !== kG || !this.drawDefines.programCurrent(yG, bG, YG, ZG) || !this.inputsStamped(SG, bG, YG, kG) || VG.isUnIndexed !== LG.unIndexed || this.indexKey(bG) !== LG.indexData) return;
        if (LG.indexBuffer && LG.gpuVersion !== this.resources.gpuBuffersVersion) {
          const GG = this.resources.gpuBuffer(LG.indexData);
          if (!GG) return;
          LG.indexBuffer = GG, LG.gpuVersion = this.resources.gpuBuffersVersion
        }
        let fG = !1;
        if (UG.frame !== this.frame && (fG = this.modelUniforms.refreshModelUniforms(GG, UG, UG.model, this.view)), !this.bindMaterial(UG, fG) || !this.withGpuBuffers(SG) || !this.instanceBuffersFit(VG.name, SG, pG)) return null;
        const QG = this.makeDraw(kG, SG, this.renderStates.renderState(yG.model, VG, wG, SG.state), UG, pG);
        return this.setRange(QG, bG, LG.indexBuffer, LG.indexData), QG
      }
      retain(GG, bG) {
        const ZG = this.drawDefines.drawStates.get(GG);
        if (!bG || !ZG || ZG.program !== bG.program) {
          const bG = this.inputs.get(GG);
          return void(bG && (bG.retained = null))
        }
        const wG = GG.owner,
          SG = ZG.instancing,
          LG = this.indexKey(GG),
          yG = bG.inputs.retained;
        yG ? (yG.drawState = ZG, yG.instancing = SG, yG.program = bG.program, yG.instance = bG.material, yG.indexData = LG, yG.unIndexed = wG.isUnIndexed, yG.indexBuffer = bG.indexBuffer, yG.gpuVersion = this.resources.gpuBuffersVersion) : bG.inputs.retained = {
          drawState: ZG,
          instancing: SG,
          program: bG.program,
          instance: bG.material,
          indexData: LG,
          unIndexed: wG.isUnIndexed,
          indexBuffer: bG.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(GG, bG, ZG, wG) {
        const SG = bG.owner,
          LG = FL(bG);
        if (!LG) return null;
        const yG = LG.getClassName();
        let kG = null;
        if (function(GG) {
            return "LinesMesh" === GG.getClassName()
          }(SG)) {
          if (! function(GG) {
              return "ShaderMaterial" === GG.getClassName() && "color" === GG.shaderPath
            }(LG)) return this.warnOnce(`lines:${yG}`, `A LinesMesh with a ${yG} is not drawn yet (${LG.name})`), null;
          kG = SG
        } else if ("StandardMaterial" !== yG && "LiteMaterial" !== yG) return this.warnOnce(`class:${yG}`, `${yG} is not drawn yet (${LG.name})`), null;
        const UG = LL(SG),
          YG = this.instanceCount(SG, UG);
        if (YG <= 0) return null;
        const VG = kG ? this.lineProgramFor(SG, ZG, UG) : this.drawDefines.programFor(GG, bG, LG, ZG, UG);
        if (!VG || VG.failed) return null;
        const pG = kG ? null : this.drawDefines.drawStates.get(bG).model,
          fG = pG ? this.modelInstance(pG, VG) : this.materialInstance(SG, VG);
        let QG = !1;
        if (fG.frame !== this.frame && (kG ? rG(fG.ubo, kG) : QG = this.modelUniforms.refreshModelUniforms(GG, fG, fG.model, this.view)), !this.bindMaterial(fG, QG)) return null;
        const KG = this.meshInputs(bG, VG, UG);
        if (!KG || !this.instanceBuffersFit(SG.name, KG, YG)) return null;
        const hG = this.indexKey(bG);
        let dG = null;
        if (hG && !SG.isUnIndexed && (dG = this.resources.gpuBuffer(hG), !dG)) return null;
        const JG = this.renderStates.renderState(null !== pG && void 0 !== pG ? pG : LG, SG, wG, KG.state, kG ? "line-list" : "triangle-list"),
          zG = this.makeDraw(VG, KG, JG, fG, YG);
        return this.setRange(zG, bG, dG, hG), zG
      }
      indexKey(GG) {
        const bG = YL(GG);
        return bG ? this.resources.modelIndex(bG) : null
      }
      setRange(GG, bG, ZG, wG) {
        ZG && (GG.indexBuffer = ZG, GG.indexFormat = this.resources.indexFormat(wG));
        const SG = 4 * bG.range + (ZG ? 0 : 2);
        GG.unit = bG, GG.first = bG.parts.Bh[SG], GG.count = bG.parts.Bh[SG + 1]
      }
      makeDraw(GG, bG, ZG, wG, SG) {
        bG.state !== ZG && (bG.state = ZG, bG.pipelineKey = `${GG.id}|${bG.layout.key}|${ZG.key}`, bG.pipeline = null);
        const LG = bG.draw ??= {
          program: GG,
          inputs: bG,
          pipelineKey: "",
          layout: bG.layout,
          state: ZG,
          material: wG,
          slotOffset: 0,
          vertexBuffers: bG.buffers,
          vertexOffsets: bG.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: SG,
          unit: null
        };
        return LG.program = GG, LG.pipelineKey = bG.pipelineKey, LG.state = ZG, LG.material = wG, LG.vertexOffsets = bG.offsets, LG.indexBuffer = null, LG.instances = SG, LG
      }
      instanceCount(GG, bG) {
        switch (bG) {
          case "thin":
            return GG.forcedInstanceCount || GG.B5;
          case "instanced":
            return this.prepareInstances(GG);
          case "none":
            return 1
        }
      }
      prepareInstances(GG) {
        const bG = function(GG, bG) {
          const ZG = bG._userInstancedBuffersStorage,
            wG = GG.batchUploads.get(bG);
          if (wG) {
            var SG;
            if (wG.layout === (null !== (SG = null === ZG || void 0 === ZG ? void 0 : ZG.interleavedKinds) && void 0 !== SG ? SG : null)) return wG;
            wG.release()
          }
          return new Qb(GG, bG, ZG)
        }(this.resources, GG);
        return bG.frame !== this.frame && bG.pack(GG, this.modelMeshes.instanceBatch(GG), this.modelMeshes.worlds, this.frame), bG.count
      }
      programWithModel(GG, bG, ZG) {
        const wG = this.modelSlot(GG),
          SG = fL(wG, GG, ZG),
          LG = this.drawDefines.modelPackKind(GG),
          yG = LG ? function(GG, bG, ZG, wG) {
            const SG = (0, CG.z)(GG, uG.i.name),
              LG = [];
            for (const {
                feature: UG,
                state: YG,
                active: VG
              }
              of GG.features) {
              var yG, kG;
              const GG = VG ? null === (yG = (kG = (0, cb.j)(UG)).OQ) || void 0 === yG ? void 0 : yG.call(kG, YG) : void 0;
              GG && LG.push(GG)
            }
            return {
              kind: bG,
              atlas: null !== SG && void 0 !== SG && SG.active ? (0, uG.b)(SG.state) : null,
              defines: ZG,
              ...fy(LG, wG)
            }
          }(GG, LG, bG, wG.fragmentCode) : null;
        if (yG && function(GG) {
            const bG = GG.defines;
            return (null === GG.atlas || !!bG.DIFFUSE && 1 === bG.DIFFUSEDIRECTUV) && !!bG.NORMAL && !bG.REFLECTION && !bG.EMISSIVEASILLUMINATION && !bG.LINKEMISSIVEWITHDIFFUSE
          }(yG)) {
          const ZG = this.modelPackProgram(GG, bG, `${SG}#${LG}#sp${this.drawDefines.modelPackVariant}`, wG, yG);
          if (ZG && !ZG.failed) return ZG
        }
        const kG = this.programs.get(SG);
        if (kG || this.unbuildable.has(SG)) return null !== kG && void 0 !== kG ? kG : null;
        let UG;
        try {
          UG = vS({
            defines: kL(bG),
            vertexCode: wG.vertexCode,
            fragmentCode: wG.fragmentCode,
            pluginUniforms: wG.pluginUniforms
          })
        } catch (YG) {
          return this.unbuildable.add(SG), this.warnOnce(`build:${SG}`, `could not build a program for ${GG.name}: ${String(YG)}`), null
        }
        return this.createProgram(SG, UG, "standard")
      }
      modelPackProgram(GG, bG, ZG, wG, SG) {
        const LG = this.programs.get(ZG);
        if (LG || this.unbuildable.has(ZG)) return null !== LG && void 0 !== LG ? LG : null;
        const yG = this.drawDefines.modelPackVariant;
        let kG;
        try {
          const GG = function(GG) {
              return (0, Ob.c)(GG, "model")
            }(yG),
            ZG = Cy(GG, SG, wG.vertexCode, wG.fragmentCode);
          kG = Fy(vS({
            defines: kL(bG),
            ...ZG,
            pluginUniforms: wG.pluginUniforms
          }), GG, SG, !!this.sunShadow)
        } catch (VG) {
          return this.unbuildable.add(ZG), this.warnOnce(`build:${ZG}`, `could not build a shader pack program for ${GG.name}, which draws without the pack: ${String(VG)}`), null
        }
        const UG = HL(yG, !!this.sunShadow),
          YG = {
            group: this.packInputs.bindGroupFor(null, UG),
            layout: RL(this.device, {
              depth: !1,
              sunShadow: UG
            })
          };
        return this.createProgram(ZG, kG, function(GG) {
          return `standard-sp${GG}`
        }(yG), YG)
      }
      lineProgramFor(GG, bG, ZG) {
        const wG = JG(GG, ZG, bG, this.view);
        let SG = this.linePrograms.get(wG);
        var LG;
        return SG || (SG = this.createProgram(`lines#${wG}`, (LG = function(GG) {
          const bG = new Map;
          for (let ZG = 0; ZG < YG.length; ZG++) GG & 1 << ZG && bG.set(YG[ZG], !0);
          return bG
        }(wG), jS({
          defines: LG,
          vertex: cS,
          fragment: lS,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(wG, SG)), SG
      }
      createProgram(GG, bG, ZG) {
        var wG;
        let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const LG = this.nextProgramId++,
          yG = `${ZG}-${LG}`,
          kG = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          UG = [{
            binding: 0,
            visibility: kG,
            buffer: {
              type: "uniform"
            }
          }];
        for (const pG of bG.textures) UG.push({
          binding: pG.binding,
          visibility: kG,
          texture: {
            viewDimension: pG.dimension
          }
        }), UG.push({
          binding: pG.samplerBinding,
          visibility: kG,
          sampler: {}
        });
        const YG = this.device.createBindGroupLayout({
            label: yG,
            entries: UG
          }),
          VG = {
            key: GG,
            id: LG,
            kind: ZG,
            program: bG,
            vertex: this.device.createShaderModule({
              label: `${yG}-vertex`,
              code: bG.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${yG}-fragment`,
              code: bG.fragment
            }),
            materialLayout: YG,
            pipelineLayout: this.device.createPipelineLayout({
              label: yG,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, YG, ...SG ? [SG.layout] : []]
            }),
            packGroup: null !== (wG = null === SG || void 0 === SG ? void 0 : SG.group) && void 0 !== wG ? wG : null,
            failed: !1
          };
        return this.programs.set(GG, VG), VG
      }
      writeFrameUniforms() {
        const GG = this.frameUniforms;
        zL(this.view, GG), this.device.queue.writeBuffer(this.frameBuffer, 0, GG)
      }
      materialInstance(GG, bG) {
        let ZG = this.materials.get(GG);
        if (!ZG) {
          const bG = new Map;
          this.materials.set(GG, bG);
          const {
            resources: wG,
            materials: SG
          } = this;
          GG.Gl.addOnce((() => {
            for (const GG of bG.values()) GG.released = !0, wG.destroyBuffer(GG.buffer);
            SG.delete(GG)
          })), ZG = bG
        }
        let wG = ZG.get(bG.key);
        return wG || (wG = this.newMaterialInstance(GG, null, bG), ZG.set(bG.key, wG)), wG
      }
      modelInstance(GG, bG) {
        const ZG = this.modelSlot(GG);
        let wG = ZG.instances.get(bG.key);
        return wG || (wG = this.newMaterialInstance(GG, GG, bG), ZG.instances.set(bG.key, wG)), wG
      }
      modelSlot(GG) {
        var bG;
        let ZG = GG.gpu[mG.e.lite];
        return (null === (bG = ZG) || void 0 === bG ? void 0 : bG.epoch) !== this.resources.epoch && (ZG = new ay(this.resources, this.resources.epoch), GG.gpu[mG.e.lite] = ZG), ZG
      }
      newMaterialInstance(GG, bG, ZG) {
        const wG = ZG.program.material.floats,
          SG = new Float32Array(wG),
          LG = new Map;
        return {
          owner: GG,
          model: bG,
          program: ZG,
          data: SG,
          uploaded: new Float32Array(wG).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${GG.name}-uniforms`,
            size: Math.max(16, 4 * wG),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: LG,
          ubo: new rL(ZG.program.material.slots, SG, LG),
          bindGroup: null,
          bound: new Array(2 * ZG.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(GG) {
        var bG;
        const ZG = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: qS + nS,
            fragment: qS + gS,
            attributes: [],
            material: sS,
            textures: []
          }, "earthSky"),
          wG = this.earthSkyUniforms ??= this.newMaterialInstance(vy, null, ZG);
        this.earthSkyFrom !== GG && (this.earthSkyFrom = GG, wG.data.fill(0)), OS(wG.ubo, GG, this.view);
        const SG = this.vertexInputs(ZG, vy, "earthSky", ZG, null);
        if (ZG.failed || !SG || !this.bindMaterial(wG, !1)) return;
        const LG = null !== (bG = SG.state) && void 0 !== bG ? bG : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          yG = this.makeDraw(ZG, SG, LG, wG, 1);
        yG.count = PS.length;
        const kG = xS(GG, this.view);
        yG.slotOffset = this.writeMeshSlot(kG, 1), this.lists.skyDraws.push(yG)
      }
      uploadIfChanged(GG) {
        const {
          data: bG,
          uploaded: ZG
        } = GG;
        for (let wG = 0; wG < bG.length; wG++)
          if (bG[wG] !== ZG[wG]) return ZG.set(bG), void this.device.queue.writeBuffer(GG.buffer, 0, bG)
      }
      bindMaterial(GG, bG) {
        return GG.frame !== this.frame && (GG.frame = this.frame, bG || this.uploadIfChanged(GG), GG.bindable = this.bindTextures(GG)), GG.bindable
      }
      bindTextures(GG) {
        const {
          program: bG,
          bound: ZG
        } = GG, wG = bG.program.textures;
        let SG = !GG.bindGroup,
          LG = !0;
        for (let yG = 0; yG < wG.length; yG++) {
          const bG = GG.textures.get(wG[yG].name),
            kG = bG ? this.resources.boundTexture(bG) : null;
          kG ? ZG[2 * yG] === kG.view && ZG[2 * yG + 1] === kG.sampler || (ZG[2 * yG] = kG.view, ZG[2 * yG + 1] = kG.sampler, SG = !0) : (bG || GG.ubo.expected.has(wG[yG].name) || this.warnOnce(`texture:${GG.owner.name}:${wG[yG].name}`, `${GG.owner.name} has no ${wG[yG].name}`), LG = !1)
        }
        if (!LG) return SG && (GG.bindGroup = null), !1;
        if (SG) {
          const SG = [{
            binding: 0,
            resource: {
              buffer: GG.buffer
            }
          }];
          for (let GG = 0; GG < wG.length; GG++) SG.push({
            binding: wG[GG].binding,
            resource: ZG[2 * GG]
          }), SG.push({
            binding: wG[GG].samplerBinding,
            resource: ZG[2 * GG + 1]
          });
          GG.bindGroup = this.device.createBindGroup({
            label: `${GG.owner.name}-material`,
            layout: bG.materialLayout,
            entries: SG
          })
        }
        return !0
      }
      writeMeshSlot(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, GG, bG, ZG), this.slotCount++ * VS
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(GG, bG, ZG, wG, SG) {
        let LG = this.inputs.get(GG);
        if (!LG || LG.program !== wG || !CL(bG, LG, this.resources, SG)) {
          var yG;
          if (LG = null !== (yG = this.vertexLayouts.resolveInputs(bG, ZG, wG, SG)) && void 0 !== yG ? yG : void 0, !LG) return null;
          this.inputs.set(GG, LG)
        }
        return this.withGpuBuffers(LG)
      }
      meshInputs(GG, bG, ZG) {
        const wG = this.inputs.get(GG);
        if (wG && this.inputsStamped(wG, GG, ZG, bG)) return this.withGpuBuffers(wG);
        const SG = GG.owner,
          LG = YL(GG),
          yG = this.vertexInputs(GG, SG, SG.name, bG, LG);
        return yG && (yG.geometry = VL(GG), yG.instanceLayout = this.drawDefines.instanceLayout(SG, ZG)), yG
      }
      inputsStamped(GG, bG, ZG, wG) {
        return function(GG, bG, ZG, wG) {
          return GG.program === ZG && GG.geometry === VL(bG) && GG.instanceLayout === wG
        }(GG, bG, wG, this.drawDefines.instanceLayout(bG.owner, ZG))
      }
      withGpuBuffers(GG) {
        return NL(GG, this.resources, this.zeroBuffer) ? GG : null
      }
      instanceBuffersFit(GG, bG, ZG) {
        const wG = xL(bG, ZG, this.resources, this.zeroBuffer);
        if (wG) {
          const SG = bG.ends[wG.index] - bG.offsets[wG.index] + bG.i5[wG.index];
          return this.warnOnce(`overrun:${GG}`, `${GG} draws ${ZG} instances from a ${SG}-byte buffer (${wG.needed} needed)`), !1
        }
        return !0
      }
      createBinding(GG, bG, ZG, wG) {
        const SG = `${bG._colorFormat}|${bG._depthStencilFormat}|${bG._depthCompare}|${bG._sampleCount}`,
          LG = Ib(this.device, bG);
        if (GG === this.skyLastRenderable) {
          let ZG = null;
          return {
            renderable: GG,
            pipeline: LG,
            draw: GG => ZG ? this.drawSky(GG, bG, SG, ZG) : 0,
            update: GG => {
              ZG = GG
            }
          }
        }
        return {
          renderable: GG,
          pipeline: LG,
          draw: GG => (wG ? wG.execute(GG, bG, SG) : 0) + this.drawList(GG, bG, SG, ZG)
        }
      }
      drawSky(GG, bG, ZG, wG) {
        const SG = this.lists.skyDraws,
          LG = SG.length > 0;
        if (LG) {
          var yG;
          const ZG = (null !== (yG = bG._depthCompare) && void 0 !== yG ? yG : ib).startsWith("greater") ? 0 : 1;
          GG.setViewport(0, 0, wG.targetWidth, wG.targetHeight, ZG, ZG)
        }
        const kG = this.drawList(GG, bG, ZG, SG);
        return LG && GG.setViewport(0, 0, wG.targetWidth, wG.targetHeight, 0, 1), kG
      }
      drawList(GG, bG, ZG, wG) {
        let SG = 0;
        const LG = this.binder;
        LG.reset();
        for (const yG of wG) {
          const wG = this.pipelineFor(yG, bG, ZG);
          wG && (LG.bind(GG, yG, wG, this.meshSlots.bindGroup, yG.slotOffset), yG.indexBuffer ? GG.drawIndexed(yG.count, yG.instances, yG.first, 0, 0) : GG.draw(yG.count, yG.instances, yG.first, 0), SG++)
        }
        return SG
      }
      pipelineFor(GG, bG, ZG) {
        var wG, SG;
        if (GG.program.failed) return null;
        const LG = GG.inputs;
        if (LG.pipeline && LG.pipelineTarget === ZG) return LG.pipeline;
        const yG = `${GG.pipelineKey}|${ZG}`,
          kG = this.pipelines.get(yG);
        if (void 0 !== kG) return kG && (LG.pipeline = kG, LG.pipelineTarget = ZG), kG || null;
        this.pipelines.set(yG, null);
        const {
          program: UG,
          layout: YG,
          state: VG
        } = GG, pG = {
          label: `standard-${UG.id}`,
          layout: UG.pipelineLayout,
          vertex: {
            module: UG.vertex,
            entryPoint: "main",
            buffers: YG.buffers
          },
          fragment: rb({
            module: UG.fragment,
            entryPoint: "main"
          }, bG, VG.blend, VG.colourWrite),
          depthStencil: bG._depthStencilFormat ? {
            format: bG._depthStencilFormat,
            depthCompare: null !== (wG = null !== (SG = VG.depthCompare) && void 0 !== SG ? SG : bG._depthCompare) && void 0 !== wG ? wG : ib,
            depthWriteEnabled: VG.depthWrite,
            depthBias: VG.depthBias,
            depthBiasSlopeScale: VG.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: bG._sampleCount
          },
          primitive: {
            topology: VG.topology,
            frontFace: VG.frontFace,
            cullMode: VG.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(pG).then((GG => {
          this.compiling--, this.pipelines.set(yG, GG)
        }), (GG => {
          this.compiling--, this.reportFailure(UG, yG, GG)
        })), null
      }
      forEachSunShadowCaster(GG) {
        const bG = this.caster,
          ZG = (ZG, wG, SG) => {
            const LG = ZG.unit && function(GG) {
              const bG = GG.material.model;
              return null !== bG && (bG.lifeform || bG.item) && bG.castsSunShadow && "triangle-list" === GG.state.topology
            }(ZG) ? YL(ZG.unit) : null;
            if (!LG) return;
            const yG = ZG.unit.owner;
            switch (bG.geometry = LG, bG.skip = yG.noSunShadowVertices, bG.indexed = null !== ZG.indexBuffer, bG.first = ZG.first, bG.count = ZG.count, bG.Op = wG, bG.worldAt = SG, bG.instances = null, bG.instanceCount = 1, bG.thin = !1, LL(yG)) {
              case "thin": {
                const GG = yG._thinInstanceDataStorage.matrixData;
                if (!GG) return;
                bG.instances = GG, bG.instanceCount = Math.min(ZG.instances, GG.length / 16), bG.thin = !0;
                break
              }
              case "instanced": {
                const GG = this.resources.batchUploads.get(yG);
                if (!GG || GG.frame !== this.frame || !this.writeBatchCasters(GG)) return;
                break
              }
            }
            GG(bG)
          };
        for (const wG of this.lists.opaqueDraws) ZG(wG, this.meshSlots.data, wG.slotOffset / 4);
        this.thinBundle.forEachDrawn(ZG)
      }
      writeBatchCasters(GG) {
        const {
          caster: bG
        } = this, ZG = GG.packedMatrices, wG = GG.count;
        bG.instances = ZG, bG.instanceCount = wG;
        let SG = -1;
        for (let LG = 0; LG < wG; LG++) {
          const bG = jy(GG.packedRowMesh(LG));
          bG && SG < 0 ? (this.casterWorlds.length < 16 * wG && (this.casterWorlds = new Float32Array(ZG.length)), this.casterWorlds.set(ZG.subarray(0, 16 * LG)), SG = LG) : !bG && SG >= 0 && (this.casterWorlds.set(ZG.subarray(16 * LG, 16 * LG + 16), 16 * SG), SG++)
        }
        return SG >= 0 && (bG.instances = this.casterWorlds, bG.instanceCount = SG), bG.instanceCount > 0
      }
      async reportFailure(GG, bG, ZG) {
        const wG = [];
        let SG = !0;
        for (const [LG, yG] of [
            ["vertex", GG.vertex],
            ["fragment", GG.fragment]
          ]) {
          const GG = await yG.getCompilationInfo();
          for (const bG of GG.messages) SG &&= "error" !== bG.type, wG.push(`${LG}:${bG.lineNum}:${bG.linePos} ${bG.type}: ${bG.message}`)
        }
        if (SG && !GG.packGroup) return this.pipelines.set(bG, !1), console.error(`Lite: pipeline ${bG} failed`, ZG), void Vb(this.device, "mesh", GG.kind, ZG);
        GG.failed || (GG.failed = !0, console.error(`Lite: program ${GG.id} failed`, ZG, wG.join("\n"), {
          program: GG.program,
          key: GG.key
        }), Vb(this.device, "mesh", GG.kind, ZG, SG ? null : wG[0]))
      }
    }

    function jy(GG) {
      var bG, ZG;
      const wG = null === (bG = GG.hA) || void 0 === bG || null === (ZG = bG.aShaderPackItem) || void 0 === ZG ? void 0 : ZG.x;
      return void 0 !== wG && 0 !== (wG & vb.j)
    }
    var Py = ZG(42129),
      My = ZG(42133),
      Ay = ZG(42135),
      sy = ZG(42079);
    const qy = [0, 3, 1, 4, 2, 5];

    function ny(GG, bG, ZG, wG, SG) {
      const LG = ZG[0].width;
      try {
        return SG ? function(GG, bG, ZG) {
          const wG = (0, sy.e)(GG, ZG, ZG, 6);
          for (let SG = 0; SG < 6; SG++)(0, sy.f)(GG, wG, SG, bG[qy[SG]], {
            invertY: !1
          });
          return wG.texture
        }(GG, ZG, LG) : function(GG, bG, ZG, wG) {
          const SG = GG.createTexture({
            label: "sink-cube",
            size: {
              width: ZG,
              height: ZG,
              depthOrArrayLayers: 6
            },
            format: wG,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let LG = 0; LG < 6; LG++) GG.queue.copyExternalImageToTexture({
            source: bG[qy[LG]]
          }, {
            texture: SG,
            origin: {
              x: 0,
              y: 0,
              z: LG
            }
          }, {
            width: ZG,
            height: ZG
          });
          return SG
        }(bG, ZG, LG, 1 === wG ? "r8unorm" : "rgba8unorm")
      } finally {
        gy(ZG)
      }
    }

    function gy(GG) {
      for (const bG of null !== GG && void 0 !== GG ? GG : []) null === bG || void 0 === bG || bG.close()
    }
    async function ey(GG) {
      const bG = [],
        ZG = [];
      if (await Promise.all(GG.map(((GG, wG) => (bG[wG] = null, GG.then((GG => {
          bG[wG] = GG
        }), (GG => {
          ZG.push(GG)
        })))))), ZG.length > 0) throw gy(bG), ZG[0];
      return bG
    }
    class Ry {
      constructor(GG) {
        this.rp = GG, this.starts = [], this.lengths = [], this.used = 0, GG > 0 && (this.starts.push(0), this.lengths.push(GG))
      }
      allocate(GG) {
        const {
          starts: bG,
          lengths: ZG
        } = this;
        for (let wG = 0; wG < bG.length; wG++) {
          if (ZG[wG] < GG) continue;
          const SG = bG[wG];
          return ZG[wG] === GG ? (bG.splice(wG, 1), ZG.splice(wG, 1)) : (bG[wG] += GG, ZG[wG] -= GG), this.used += GG, SG
        }
        return -1
      }
      free(GG, bG) {
        this.used -= bG;
        const ZG = Math.min(GG + bG, this.rp);
        ZG > GG && this.release(GG, ZG - GG)
      }
      grow(GG) {
        const bG = this.rp;
        this.rp = GG, this.release(bG, GG - bG)
      }
      truncate(GG) {
        const {
          starts: bG,
          lengths: ZG
        } = this;
        for (let wG = bG.length - 1; wG >= 0 && bG[wG] + ZG[wG] > GG; wG--) bG[wG] >= GG ? (bG.splice(wG, 1), ZG.splice(wG, 1)) : ZG[wG] = GG - bG[wG];
        this.rp = GG
      }
      release(GG, bG) {
        const {
          starts: ZG,
          lengths: wG
        } = this;
        let SG = 0,
          LG = ZG.length;
        for (; SG < LG;) {
          const bG = SG + LG >> 1;
          ZG[bG] < GG ? SG = bG + 1 : LG = bG
        }
        const yG = SG,
          kG = yG > 0 && ZG[yG - 1] + wG[yG - 1] === GG,
          UG = yG < ZG.length && GG + bG === ZG[yG];
        kG && UG ? (wG[yG - 1] += bG + wG[yG], ZG.splice(yG, 1), wG.splice(yG, 1)) : kG ? wG[yG - 1] += bG : UG ? (ZG[yG] = GG, wG[yG] += bG) : (ZG.splice(yG, 0, GG), wG.splice(yG, 0, bG))
      }
    }
    const Ty = 256;
    class Hy {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = GG, this.onReplaced = bG, this.mergeGap = ZG, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.Bh = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const SG = Math.max(Ty, Math.ceil(wG / Ty) * Ty);
        this.bytes = new Uint8Array(SG), this.words = new Uint32Array(this.bytes.buffer), this.Bh = new Ry(SG / Ty)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(GG) {
        return Math.max(1, Math.ceil(GG / Ty)) * Ty
      }
      allocate(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GG;
        const wG = Hy.slotBytes(GG),
          SG = wG / Ty;
        let LG = this.Bh.allocate(SG);
        LG < 0 && (this.grow(this.Bh.rp + SG), LG = this.Bh.allocate(SG));
        const yG = LG * Ty;
        return this.growTo(yG + Math.max(ZG, wG)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, yG, yG + wG), bG && this.bytes.set(new Uint8Array(bG.buffer, bG.byteOffset, Math.min(bG.byteLength, wG)), yG), this.markDirty(yG, yG + wG), yG
      }
      growTo(GG) {
        const bG = Math.ceil(GG / Ty);
        bG > this.Bh.rp && this.grow(bG)
      }
      free(GG, bG) {
        this.freed.push(GG, bG)
      }
      write(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (wG <= 0) return;
        wG <= 1024 && 0 === (3 & (GG | ZG | wG)) ? this.copyWords(GG >> 2, bG.buffer, ZG >> 2, wG >> 2) : this.bytes.set(new Uint8Array(bG.buffer, ZG, wG), GG);
        let LG = GG + wG;
        if (SG) {
          const bG = GG + 4 * Math.ceil(wG / 4);
          this.bytes.fill(0, LG, bG), LG = bG
        }
        this.markDirty(GG, LG)
      }
      copyWords(GG, bG, ZG, wG) {
        let SG = this.sourceWords.get(bG);
        SG || (SG = new Uint32Array(bG, 0, bG.byteLength >> 2), this.sourceWords.set(bG, SG));
        const LG = this.words;
        for (let yG = 0; yG < wG; yG++) LG[GG + yG] = SG[ZG + yG]
      }
      move(GG, bG, ZG) {
        this.bytes.copyWithin(bG, GG, GG + ZG), this.markDirty(bG, bG + ZG)
      }
      flush() {
        for (const bG of this.retired) this.onReplaced(bG), bG.destroy();
        this.retired.length = 0;
        const GG = this.dirtyStarts.length;
        if (GG > 0) {
          const {
            dirtyStarts: bG,
            dirtyEnds: ZG,
            order: wG
          } = this;
          wG.length = GG;
          for (let kG = 0; kG < GG; kG++) wG[kG] = kG;
          GG > 1 && wG.sort(((GG, ZG) => bG[GG] - bG[ZG]));
          const SG = this.mergeGap;
          let LG = bG[wG[0]],
            yG = ZG[wG[0]];
          for (let kG = 1; kG < GG; kG++) {
            const GG = wG[kG];
            bG[GG] - yG <= SG ? yG = Math.max(yG, ZG[GG]) : (this.send(LG, yG), LG = bG[GG], yG = ZG[GG])
          }
          this.send(LG, yG), bG.length = 0, ZG.length = 0
        }
        this.holding = !1
      }
      kE() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const GG = this.freed;
        for (let bG = 0; bG < GG.length; bG += 2) this.Bh.free(GG[bG] / Ty, GG[bG + 1] / Ty);
        GG.length = 0
      }
      send(GG, bG) {
        this.device.queue.writeBuffer(this.gpu, GG, this.bytes.buffer, GG, bG - GG);
        for (const ZG of this.replaced) {
          const wG = Math.min(bG, ZG.size);
          wG > GG && this.device.queue.writeBuffer(ZG, GG, this.bytes.buffer, GG, wG - GG)
        }
      }
      markDirty(GG, bG) {
        GG &= -4, bG = bG + 3 & -4, this.holding ? (this.dirtyStarts.push(GG), this.dirtyEnds.push(bG)) : this.send(GG, bG)
      }
      grow(GG) {
        const bG = this.Bh.rp,
          ZG = Math.max(2 * bG, GG),
          wG = new Uint8Array(ZG * Ty);
        wG.set(this.bytes);
        const SG = this.gpu;
        this.gpu = this.createGpu(wG.byteLength), this.bytes = wG, this.words = new Uint32Array(wG.buffer), this.Bh.grow(ZG), SG && (this.replaced.push(SG), this.onReplaced(SG)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, bG * Ty)
      }
      createGpu(GG) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: GG,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function ty(GG) {
      return Array.isArray(GG) ? new Float32Array(GG) : GG
    }

    function Dy(GG, bG, ZG, wG, SG) {
      const LG = HG(SG),
        yG = Math.min(SG, wG.byteLength);
      if (LG === yG && wG.byteOffset % 4 === 0) return void GG.queue.writeBuffer(bG, ZG, wG.buffer, wG.byteOffset, LG);
      const kG = new Uint8Array(LG);
      kG.set(new Uint8Array(wG.buffer, wG.byteOffset, yG)), GG.queue.writeBuffer(bG, ZG, kG)
    }

    function Ny(GG, bG, ZG) {
      const wG = "linear",
        SG = "nearest";
      let LG = SG,
        yG = SG,
        kG = "nearest",
        UG = !bG;
      switch (GG) {
        case 11:
          LG = wG, yG = wG;
          break;
        case 3:
          LG = wG, yG = wG, kG = bG ? "linear" : "nearest";
          break;
        case 8:
          kG = bG ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          yG = wG;
          break;
        case 6:
          yG = wG, kG = bG ? "linear" : "nearest";
          break;
        case 7:
          yG = wG, UG = !0;
          break;
        case 9:
          LG = wG;
          break;
        case 10:
          LG = wG, kG = bG ? "linear" : "nearest";
          break;
        case 2:
          LG = wG, yG = wG, ZG > 1 ? (kG = "linear", UG = !1) : UG = !0;
          break;
        case 12:
          LG = wG, UG = !0;
          break;
        default:
          UG = !0
      }
      return ZG > 1 && !UG ? {
        magFilter: wG,
        minFilter: wG,
        mipmapFilter: "linear",
        maxAnisotropy: ZG
      } : {
        magFilter: LG,
        minFilter: yG,
        mipmapFilter: kG,
        ...UG ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Oy(GG) {
      return 0 === GG ? "clamp-to-edge" : 2 === GG ? "mirror-repeat" : "repeat"
    }
    class xy {
      constructor(GG, bG) {
        let {
          vertexArena: ZG = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = GG, this.device = bG, this.buffers = new WeakMap, this.j_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = ZG ? this.createArena() : null
      }
      createArena() {
        return new Hy(this.device, (GG => {
          var bG;
          null === (bG = this.onDestroy) || void 0 === bG || bG.call(this, GG), this.gpuBuffersVersion++
        }))
      }
      rebind(GG, bG) {
        this.engine = GG, this.device = bG, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const ZG of this.liveUploads) ZG.rebind();
        for (const ZG of this.rebindWaiters.splice(0)) ZG()
      }
      flushUploads() {
        var GG;
        null === (GG = this.arena) || void 0 === GG || GG.flush()
      }
      endUploadFrame() {
        var GG;
        null === (GG = this.arena) || void 0 === GG || GG.kE()
      }
      vertexBufferCreated(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZG ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(GG);
        const SG = ty(bG);
        GG.rp = SG.byteLength, this.buffers.set(GG, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: ZG && null !== this.arena,
          pending: SG,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: wG
        })
      }
      vertexBufferUpdated(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        const SG = this.buffers.get(GG);
        if (!SG) return;
        const LG = ty(bG),
          yG = void 0 === wG ? LG.byteLength : Math.min(wG, LG.byteLength);
        this.update(SG, LG, ZG, yG)
      }
      vertexBufferFloatsUpdated(GG, bG, ZG, wG) {
        const SG = this.buffers.get(GG);
        if (!SG) return;
        const LG = ZG * Float32Array.BYTES_PER_ELEMENT,
          yG = (wG - ZG) * Float32Array.BYTES_PER_ELEMENT;
        SG.slot >= 0 && yG > 0 && LG + yG <= SG.size ? this.writeSlot(SG, LG, bG, bG.byteOffset + LG, yG, !1) : SG.gpu && yG > 0 && LG + yG <= SG.gpu.size ? this.device.queue.writeBuffer(SG.gpu, LG, bG.buffer, bG.byteOffset + LG, yG) : this.update(SG, bG.subarray(ZG, wG), LG, yG)
      }
      indexBufferCreated(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(GG);
        const wG = function(GG) {
          if (GG instanceof Uint16Array || GG instanceof Uint32Array) return GG;
          for (let bG = 0; bG < GG.length; bG++)
            if (GG[bG] >= 65535) return new Uint32Array(GG);
          return new Uint16Array(GG)
        }(bG);
        GG.is32Bits = 4 === wG.BYTES_PER_ELEMENT, GG.rp = wG.byteLength, this.buffers.set(GG, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: wG,
          ownsPending: wG !== bG,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: ZG
        })
      }
      bufferDeleted(GG) {
        const bG = this.buffers.get(GG);
        null !== bG && void 0 !== bG && bG.gpu ? (this.destroyBuffer(bG.gpu), this.gpuBuffersVersion++) : bG && bG.slot >= 0 && (this.arena.free(bG.slot, bG.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(GG)
      }
      update(GG, bG, ZG, wG) {
        if (GG.slot >= 0) this.updateSlot(GG, bG, ZG, wG);
        else if (GG.gpu) {
          if (ZG + HG(wG) > GG.gpu.size) {
            const bG = this.device.createBuffer({
                label: GG.label,
                size: HG(Math.max(2 * GG.gpu.size, ZG + wG)),
                usage: GG.usage | GPUBufferUsage.COPY_SRC
              }),
              SG = this.device.createCommandEncoder();
            SG.copyBufferToBuffer(GG.gpu, 0, bG, 0, GG.gpu.size), this.device.queue.submit([SG.finish()]), this.destroyBuffer(GG.gpu), this.gpuBuffersVersion++, GG.gpu = bG
          }
          Dy(this.device, GG.gpu, ZG, bG, wG)
        } else {
          const LG = new Uint8Array(bG.buffer, bG.byteOffset, wG),
            yG = GG.pending;
          if (yG && GG.ownsPending && ZG + wG <= yG.byteLength) new Uint8Array(yG.buffer, yG.byteOffset, yG.byteLength).set(LG, ZG);
          else if (yG && 0 === ZG && wG === yG.byteLength && bG.byteLength === wG) GG.pending = bG, GG.ownsPending = !1;
          else {
            var SG;
            const bG = new Uint8Array(Math.max(null !== (SG = null === yG || void 0 === yG ? void 0 : yG.byteLength) && void 0 !== SG ? SG : 0, ZG + wG));
            yG && bG.set(new Uint8Array(yG.buffer, yG.byteOffset, yG.byteLength)), bG.set(LG, ZG), GG.pending = bG, GG.ownsPending = !0
          }
        }
      }
      updateSlot(GG, bG, ZG, wG) {
        const SG = this.arena;
        ZG + HG(wG) > GG.size && (GG.size = HG(Math.max(2 * GG.size, ZG + wG)), SG.growTo(GG.slot + GG.size), this.gpuBuffersVersion++), 0 === wG ? this.writeSlot(GG, ZG, Gk, 0, 4, !1) : this.writeSlot(GG, ZG, bG, bG.byteOffset, wG, !0)
      }
      writeSlot(GG, bG, ZG, wG, SG, LG) {
        const yG = bG + (LG ? HG(SG) : SG);
        yG > GG.slotBytes && this.moveSlot(GG, yG), this.arena.write(GG.slot + bG, ZG, wG, SG, LG)
      }
      moveSlot(GG, bG) {
        const ZG = this.arena,
          wG = Hy.slotBytes(Math.max(bG, Math.min(2 * GG.slotBytes, GG.size))),
          SG = ZG.allocate(wG, null, GG.size);
        ZG.move(GG.slot, SG, GG.slotBytes), ZG.free(GG.slot, GG.slotBytes), GG.slot = SG, GG.slotBytes = wG, this.gpuBuffersVersion++
      }
      cover(GG, bG) {
        const ZG = this.buffers.get(GG);
        if (!ZG || ZG.slot < 0) return !1;
        const wG = Math.min(bG, ZG.size);
        return !(wG <= ZG.slotBytes) && (this.moveSlot(ZG, wG), !0)
      }
      destroyBuffer(GG) {
        var bG;
        null === (bG = this.onDestroy) || void 0 === bG || bG.call(this, GG), GG.destroy()
      }
      gpuBuffer(GG) {
        const bG = this.buffers.get(GG);
        if (!bG) return null;
        if (bG.slot >= 0) return this.arena.buffer;
        if (bG.arena && bG.pending) {
          const GG = bG.pending,
            ZG = this.arena;
          return bG.size = HG(GG.byteLength), bG.slotBytes = Hy.slotBytes(function(GG) {
            const bG = new Uint8Array(GG.buffer, GG.byteOffset, GG.byteLength);
            let ZG = bG.length;
            if (GG.byteOffset % 4 === 0) {
              for (; ZG % 4 !== 0 && 0 === bG[ZG - 1];) ZG--;
              if (ZG % 4 === 0) {
                const bG = new Uint32Array(GG.buffer, GG.byteOffset, ZG / 4);
                let wG = bG.length;
                for (; wG > 0 && 0 === bG[wG - 1];) wG--;
                ZG = 4 * wG
              }
            }
            for (; ZG > 0 && 0 === bG[ZG - 1];) ZG--;
            return ZG
          }(GG)), bG.slot = ZG.allocate(bG.slotBytes, GG, bG.size), bG.pending = null, ZG.buffer
        }
        if (!bG.gpu && bG.pending) {
          const GG = bG.pending;
          bG.gpu = this.device.createBuffer({
            label: bG.label,
            size: HG(GG.byteLength),
            usage: bG.usage
          }), Dy(this.device, bG.gpu, 0, GG, GG.byteLength), bG.pending = null
        }
        return bG.gpu
      }
      gpuOffset(GG) {
        var bG, ZG;
        const wG = null !== (bG = null === (ZG = this.buffers.get(GG)) || void 0 === ZG ? void 0 : ZG.slot) && void 0 !== bG ? bG : -1;
        return wG < 0 ? 0 : wG
      }
      gpuEnd(GG) {
        var bG, ZG;
        const wG = this.buffers.get(GG);
        return wG ? wG.slot >= 0 ? wG.slot + wG.size : null !== (bG = null === (ZG = wG.gpu) || void 0 === ZG ? void 0 : ZG.size) && void 0 !== bG ? bG : 0 : 0
      }
      vertexInput(GG, bG, ZG) {
        var wG, SG, LG, yG;
        return null !== (wG = null !== (SG = ZG && this.modelInput(ZG, bG)) && void 0 !== SG ? SG : null === (LG = null !== (yG = this.j_.get(GG)) && void 0 !== yG ? yG : this.batchUploads.get(GG)) || void 0 === LG ? void 0 : LG.inputs[bG]) && void 0 !== wG ? wG : null
      }
      modelInput(GG, bG) {
        const ZG = this.geometrySlot(GG);
        let wG = ZG.inputs.get(bG);
        if (void 0 === wG) {
          const SG = GG.vertexAttributes.find((GG => GG.kind === bG));
          wG = SG ? new Kb(this.modelKey(ZG, SG.data, !1), SG.offset, SG.stride, SG.components, !1, SG.glType, SG.isNormalized) : null, ZG.inputs.set(bG, wG)
        }
        return wG
      }
      modelIndex(GG) {
        return GG.indexData && this.modelKey(this.geometrySlot(GG), GG.indexData, !0)
      }
      geometrySlot(GG) {
        var bG;
        let ZG = GG.gpu[mG.e.lite];
        if ((null === (bG = ZG) || void 0 === bG ? void 0 : bG.epoch) !== this.epoch) {
          const bG = new Map,
            wG = () => {
              for (const GG of bG.values()) this.bufferDeleted(GG)
            },
            SG = GG => {
              const ZG = bG.get(GG);
              ZG && this.vertexBufferUpdated(ZG, GG)
            };
          ZG = {
            keys: bG,
            inputs: new Map,
            release: wG,
            updated: SG,
            epoch: this.epoch
          }, GG.gpu[mG.e.lite] = ZG
        }
        return ZG
      }
      modelKey(GG, bG, ZG) {
        let wG = GG.keys.get(bG);
        if (!wG) {
          if (ZG) {
            const GG = {
              rp: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(GG, bG, "model-indices"), wG = GG
          } else wG = {
            rp: 0
          }, this.vertexBufferCreated(wG, bG, !1, "model-vertices");
          GG.keys.set(bG, wG)
        }
        return wG
      }
      indexFormat(GG) {
        return GG.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(GG, bG) {
        --GG.refs > 0 || (this.releaseTexture(GG), gy(GG.images), null !== bG && this.textures.delete(bG))
      }
      load(GG, bG) {
        const {
          epoch: ZG
        } = this, wG = bG.decoded = async function(GG) {
          if ("cube" === GG.kind) return async function(GG) {
            if (6 !== GG.length) throw new Error(`${GG.length} files where six faces were expected`);
            const bG = await ey(GG.map((GG => BG(GG)))),
              ZG = bG[0].width;
            return ey(bG.map((async GG => {
              if (GG.width === ZG && GG.height === ZG) return GG;
              try {
                return await createImageBitmap(GG, {
                  ...OG,
                  resizeWidth: ZG,
                  resizeHeight: ZG
                })
              } finally {
                GG.close()
              }
            })))
          }(GG.files);
          if ("data" === GG.kind && GG.data) return [await createImageBitmap(new Blob([GG.data]), OG)];
          return [await BG(By(GG))]
        }(GG.source).then((GG => {
          0 === bG.refs || ZG !== this.epoch ? gy(GG) : bG.images = GG
        }));
        this.track(bG, By(GG.source), wG, (() => {
          bG.wanted && !bG.failed && bG.refs > 0 && this.upload(GG, bG)
        }))
      }
      canvasUpdated(GG, bG, ZG) {
        const {
          state: wG
        } = this.textureSlot(GG);
        wG.dynamicSource = {
          invertY: bG,
          premultiplied: ZG
        }, wG.dynamic && this.pushDynamic(GG.source, wG)
      }
      async atlasArrays(GG) {
        const {
          device: bG,
          epoch: ZG
        } = this;
        let wG;
        try {
          wG = await bb(bG, GG)
        } catch (LG) {
          if (ZG === this.epoch) {
            if (!Yb(bG)) throw LG;
            await new Promise((GG => {
              this.rebindWaiters.push(GG)
            }))
          }
          return this.atlasArrays(GG)
        }
        if (wG.forEach(((bG, ZG) => {
            this.atlasSources.has(bG) || this.atlasSources.set(bG, {
              sources: GG,
              index: ZG,
              stride: wG[0].layers
            })
          })), ZG !== this.epoch) return wG;
        const SG = (0, Py.e)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const yG of wG) this.atlasBindings.has(yG) || this.atlasBindings.set(yG, {
          view: yG.texture.createView({
            dimension: "2d-array"
          }),
          sampler: SG
        });
        return wG
      }
      boundTexture(GG) {
        const bG = this.atlasBindings.get(GG);
        if (bG) return bG;
        const ZG = this.atlasSources.get(GG);
        if (ZG) return this.rebuildAtlas(GG, ZG), null;
        const wG = GG;
        if (wG.released) return null;
        const SG = this.textureSlot(wG, !0),
          {
            state: LG
          } = SG;
        if (!LG.view && (LG.wanted = !0, LG.loading || LG.failed || this.upload(wG, LG), !LG.view)) return null;
        const yG = this.chosenSampler(wG, SG),
          kG = SG.bound;
        return kG && kG.view === LG.view && kG.sampler === yG ? kG : (SG.bound = {
          view: LG.view,
          sampler: yG
        }, SG.bound)
      }
      rebuildAtlas(GG, bG) {
        let {
          sources: ZG,
          index: wG,
          stride: SG
        } = bG;
        if (this.atlasRebuilds.has(GG)) return;
        this.atlasRebuilds.add(GG);
        const {
          epoch: LG
        } = this;
        this.atlasArrays(ZG).then((bG => {
          bG[0].layers === SG && bG[wG] ? LG === this.epoch && this.atlasBindings.set(GG, this.atlasBindings.get(bG[wG])) : console.error(`Lite: the new device splits the atlas ${xG(ZG.urls[0])} into other arrays than its materials read`)
        }), (GG => {
          console.error(`Lite: could not build the atlas ${xG(ZG.urls[0])} again on a new device`, GG)
        }))
      }
      textureLoaded(GG) {
        var bG, ZG;
        return null !== (bG = null === (ZG = this.heldSlot(GG)) || void 0 === ZG ? void 0 : ZG.state.decoded) && void 0 !== bG ? bG : null
      }
      textureFailed(GG) {
        var bG;
        return !0 === (null === (bG = this.heldSlot(GG)) || void 0 === bG ? void 0 : bG.state.failed)
      }
      heldSlot(GG) {
        const bG = GG.gpu[mG.e.lite];
        return (null === bG || void 0 === bG ? void 0 : bG.epoch) === this.epoch ? bG : void 0
      }
      chosenSampler(GG, bG) {
        const {
          samplingMode: ZG,
          wrapU: wG,
          wrapV: SG
        } = GG.sampler, LG = bG.state.hasMips, yG = function(GG, bG) {
          const {
            bilinear: ZG,
            trilinear: wG
          } = mG.g;
          return !bG && GG !== ZG || 11 !== GG && GG !== wG && GG !== ZG ? 1 : 4
        }(ZG, LG), kG = bG.sampler;
        if (kG && kG.samplingMode === ZG && kG.hasMips === LG && kG.anisotropy === yG && kG.wrapU === wG && kG.wrapV === SG) return kG.sampler;
        const UG = this.samplerFor(ZG, LG, yG, wG, SG);
        return bG.sampler = {
          samplingMode: ZG,
          hasMips: LG,
          anisotropy: yG,
          wrapU: wG,
          wrapV: SG,
          sampler: UG
        }, UG
      }
      releaseTexture(GG) {
        var bG, ZG;
        GG.view && (null === (ZG = this.onDestroy) || void 0 === ZG || ZG.call(this, GG.view));
        null === (bG = GG.destroy) || void 0 === bG || bG.call(GG)
      }
      textureSlot(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = GG.gpu[mG.e.lite];
        if ((null === ZG || void 0 === ZG ? void 0 : ZG.epoch) === this.epoch) return ZG;
        const wG = function(GG) {
          let {
            source: bG,
            sampler: ZG
          } = GG;
          return "canvas" === bG.kind ? null : `${bG.kind}|${By(bG)}|${ZG.noMipmap}|${ZG.samplingMode}|${ZG.invertY}`
        }(GG);
        let SG = null === wG ? void 0 : this.textures.get(wG);
        var LG;
        SG || (SG = {
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
          dynamicSource: null !== (LG = null === ZG || void 0 === ZG ? void 0 : ZG.state.dynamicSource) && void 0 !== LG ? LG : null
        }, null !== wG && (this.textures.set(wG, SG), this.load(GG, SG), bG && !ZG && this.firstBindDecodes++));
        SG.refs++;
        const yG = SG,
          {
            epoch: kG
          } = this,
          UG = {
            state: SG,
            bound: null,
            sampler: null,
            release: () => {
              kG === this.epoch && this.releaseSlot(yG, wG)
            },
            epoch: kG
          };
        return GG.gpu[mG.e.lite] = UG, UG
      }
      samplerFor(GG, bG, ZG, wG, SG) {
        const LG = `${GG}|${bG}|${ZG}|${wG}|${SG}`;
        let yG = this.samplers.get(LG);
        if (!yG) {
          const kG = {
            ...Ny(GG, bG, ZG),
            addressModeU: Oy(wG),
            addressModeV: Oy(SG)
          };
          yG = (0, Py.e)(this.engine, kG), this.samplers.set(LG, yG)
        }
        return yG
      }
      upload(GG, bG) {
        const {
          source: ZG,
          sampler: wG
        } = GG;
        bG.hasMips = !wG.noMipmap, "canvas" === ZG.kind ? this.createDynamic(ZG, bG) : "cube" === ZG.kind ? this.uploadCube(bG, ZG.luminance) : this.uploadImage(bG, !0 === wG.invertY, ZG.url)
      }
      uploadImage(GG, bG, ZG) {
        const [wG] = GG.images;
        GG.images = null;
        const {
          epoch: SG
        } = this, LG = (0, My.d)(this.engine, wG, {
          mipMaps: GG.hasMips,
          invertY: bG,
          srgb: !1
        }).then((bG => {
          wG.close(), 0 !== GG.refs && SG === this.epoch ? (GG.view = bG.view, GG.destroy = bG.texture.destroy.bind(bG.texture)) : bG.texture.destroy()
        }));
        this.track(GG, ZG, LG)
      }
      track(GG, bG, ZG, wG) {
        const {
          epoch: SG
        } = this;
        GG.loading = !0, this.pending++, ZG.catch((ZG => {
          SG === this.epoch && (GG.failed = !0, console.warn(`Lite: could not load texture ${xG(bG)}`, ZG))
        })).finally((() => {
          SG === this.epoch && (GG.loading = !1, this.pending--, null === wG || void 0 === wG || wG())
        }))
      }
      uploadCube(GG, bG) {
        const ZG = GG.images;
        GG.images = null;
        const wG = ny(this.engine, this.device, ZG, (0, mG.v)(bG), GG.hasMips);
        GG.view = wG.createView({
          dimension: "cube"
        }), GG.destroy = () => {
          wG.destroy()
        }
      }
      createDynamic(GG, bG) {
        const {
          canvas: ZG
        } = GG, wG = (0, Ay.c)(this.engine, Math.max(1, ZG.width), Math.max(1, ZG.height), {
          mipMaps: bG.hasMips,
          srgb: !1
        });
        bG.dynamic = wG, bG.view = wG.view, bG.destroy = () => {
          wG.texture.destroy()
        }, this.pushDynamic(GG, bG)
      }
      pushDynamic(GG, bG) {
        const ZG = bG.dynamicSource,
          wG = bG.dynamic,
          {
            canvas: SG
          } = GG;
        if (ZG && wG && 0 !== SG.width && 0 !== SG.height) return SG.width !== wG.width || SG.height !== wG.height ? (this.releaseTexture(bG), bG.dynamic = null, bG.view = null, void this.createDynamic(GG, bG)) : void(0, Ay.e)(this.engine, wG, SG, {
          invertY: ZG.invertY,
          premultiplyAlpha: ZG.premultiplied
        })
      }
    }

    function By(GG) {
      return "cube" === GG.kind ? GG.rootUrl : "canvas" === GG.kind ? "canvas" : GG.url
    }
    const Gk = new Uint8Array(4);
    var bk = ZG(39152);

    function Zk(GG) {
      const bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      GG._colorAttachment.storeOp = GG._targetSignature._sampleCount > 1 ? bG : "store";
      const ZG = GG._renderPassDescriptor.depthStencilAttachment;
      ZG && (ZG.depthStoreOp = bG, ZG.stencilStoreOp && (ZG.stencilStoreOp = bG))
    }
    var wk = ZG(38175),
      Sk = ZG(38225),
      Lk = ZG(37835),
      yk = ZG(39970);
    const kk = new Float64Array([1, 1, 1]),
      Uk = new Float64Array([0, 1, 0]),
      Yk = new Float64Array(4),
      Vk = new Float32Array(16),
      pk = new Float64Array(3),
      fk = new Float64Array(4);

    function Qk(GG, bG, ZG) {
      GG.fov = bG.fov, GG.near = bG.near, GG.far = bG.far, GG.renderWidth = ZG.renderWidth, GG.renderHeight = ZG.renderHeight, (0, Lk.s)(bG.holderRotation, 0, Yk, 0), (0, Lk.d)(kk, 0, Yk, 0, bG.holderPosition, 0, Vk);
      const wG = bG.I3;
      pk[0] = wG[0], pk[1] = wG[1], pk[2] = wG[2] + 1;
      const SG = GG.viewMatrix;
      (0, Lk.j)(wG, pk, Uk, SG), (0, Lk.g)(SG, 0, SG), (0, Lk.n)(SG, Vk, 0, SG), (0, Lk.g)(SG, 0, SG);
      const LG = GG.worldMatrix;
      (0, Lk.g)(SG, 0, LG), GG.eye[0] = LG[12], GG.eye[1] = LG[13], GG.eye[2] = LG[14], fk[0] = GG.fov, fk[1] = GG.renderWidth / GG.renderHeight, fk[2] = GG.near, fk[3] = GG.far, (0, Lk.q)(fk, GG.projectionMatrix), (0, Lk.n)(SG, GG.projectionMatrix, 0, GG.viewProjectionMatrix), (0, yk.g)(GG.viewProjectionMatrix, GG.frustum)
    }

    function Kk(GG, bG) {
      let ZG = GG.frustumPlanes;
      ZG || (ZG = GG.frustumPlanes = Array.from({
        length: 6
      }, (() => new wk.b(0, 0, 0, 0))));
      for (let wG = 0; wG < 6; wG++) {
        const GG = ZG[wG].normal;
        GG._x = bG[4 * wG], GG._y = bG[4 * wG + 1], GG._z = bG[4 * wG + 2], GG._isDirty = !0, ZG[wG].d = bG[4 * wG + 3]
      }
    }

    function hk(GG, bG) {
      const ZG = bG.clearColor;
      GG.clearColour[0] = ZG.r, GG.clearColour[1] = ZG.g, GG.clearColour[2] = ZG.b, GG.clearColour[3] = ZG.a;
      const wG = bG.ambientColor;
      GG.ambientColour[0] = wG.r, GG.ambientColour[1] = wG.g, GG.ambientColour[2] = wG.b, GG.animationRatio = bG.animationRatio, GG.frameId = bG.frameId, GG.version++
    }

    function dk(GG) {
      const bG = GG.model.view;
      return bG.animTick = (0, Sk.e)(), bG.timeMs = performance.now(), hk(bG, GG.Ah), GG.model.update(bG.frameId), bG
    }

    function Jk(GG) {
      const bG = GG.Ah,
        {
          view: ZG,
          o3: wG
        } = GG.model;
      return Qk(ZG, wG, bG.CK()), bG.onBeforeRenderObservable.notifyObservers(bG), Kk(bG, ZG.frustum), bG.onBeforeCameraRenderObservable.notifyObservers(bG.activeCamera), dk(GG)
    }
    var rk = ZG(37793),
      zk = ZG(37910),
      Ek = ZG(38214);

    function Xk(GG) {
      var bG, ZG;
      const wG = (0, CG.eb)(GG);
      if (!wG || wG.diffuseTexture && (0, Ek.g)(GG)) return null;
      const SG = null === (bG = (0, CG.z)(wG, uG.i.name)) || void 0 === bG ? void 0 : bG.state,
        LG = null === (ZG = (0, CG.z)(wG, BL.c.name)) || void 0 === ZG ? void 0 : ZG.state,
        yG = new Float32Array(16);
      return function(GG, bG, ZG, wG) {
        var SG, LG;
        const yG = Pw;
        wG.set(GG.diffuseColor, yG.diffuse), wG[yG.diffuse + 3] = GG.alpha, wG.set(GG.ambientColor, yG.ambientAndCutoff), wG[yG.ambientAndCutoff + 3] = GG.alphaCutOff, wG.set(GG.emissiveColor, yG.emissiveAndLevel), wG[yG.emissiveAndLevel + 3] = null !== (SG = null === (LG = GG.diffuseTexture) || void 0 === LG ? void 0 : LG.level) && void 0 !== SG ? SG : 1, null !== bG && void 0 !== bG && bG.animDataPerTex ? (wG[yG.anim + 1] = Sk.d, wG[yG.anim + 2] = bG.animDataPerTex.length / 3 - 1) : ZG && (wG[yG.anim + 1] = ZG.numAnimStates, wG[yG.anim + 2] = ZG.ticksPerAnimState)
      }(wG, SG, LG, yG), {
        model: wG,
        atlas: SG,
        texture: SG ? "atlas" : wG.diffuseTexture ? "single" : "none",
        animated: SG ? !!SG.animDataPerTex : !!LG,
        liquid: (0, Ek.k)(GG),
        customRenderMat: (0, Ek.g)(GG),
        uniformData: yG
      }
    }
    var uk = ZG(2865);
    class ik {
      constructor(GG) {
        this.units = GG, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var GG;
        this.buffer.destroy(), null === (GG = this.twin) || void 0 === GG || GG.destroy()
      }
    }
    class Ck {
      constructor(GG, bG) {
        this.arena = GG, this.Bh = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.Bh = new Ry(bG);
        const ZG = new ik(bG);
        ZG.buffer = this.createBuffer(ZG, !1), this.backings.push(ZG), this.refresh()
      }
      get rp() {
        return this.Bh.rp
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
        let GG = 0;
        for (const bG of this.backings) GG += bG.units * (this.arena.unitBytes + (bG.twin ? this.arena.twinUnitBytes : 0));
        return GG
      }
      holds(GG) {
        return GG.start + GG.length <= this.usable
      }
      lost(GG) {
        return this.dropped || GG.start + GG.length > this.rp
      }
      write(GG, bG) {
        const {
          device: ZG,
          unitBytes: wG
        } = this.arena;
        for (const SG of this.backings) {
          const LG = (SG.units - GG.start) * wG;
          LG > 0 && ZG.queue.writeBuffer(SG.buffer, GG.start * wG, bG, 0, Math.min(bG.byteLength, LG))
        }
      }
      writeLight(GG, bG) {
        const {
          device: ZG,
          twinUnitBytes: wG,
          verticesPerUnit: SG
        } = this.arena, {
          light: LG,
          count: yG
        } = this.arena.twinLight(bG, Math.min(bG.length, GG.length * SG));
        for (const kG of this.backings) {
          kG.twin || (kG.twin = this.createBuffer(kG, !0));
          const bG = (kG.units - GG.start) * SG;
          bG > 0 && ZG.queue.writeBuffer(kG.twin, GG.start * wG, LG, 0, Math.min(yG, bG))
        }
      }
      grow(GG) {
        this.arena.assertNotDrawing();
        const {
          device: bG,
          unitBytes: ZG,
          label: wG
        } = this.arena, SG = this.backings[this.backings.length - 1], LG = new ik(GG), yG = bG.createCommandEncoder({
          label: `${wG}-grow`
        });
        LG.buffer = this.createBuffer(LG, !1), yG.copyBufferToBuffer(SG.buffer, 0, LG.buffer, 0, SG.units * ZG), SG.twin && (LG.twin = this.createBuffer(LG, !0), yG.copyBufferToBuffer(SG.twin, 0, LG.twin, 0, SG.units * this.arena.twinUnitBytes)), bG.queue.submit([yG.finish()]), this.backings.push(LG), this.Bh.grow(GG)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const GG of this.backings) GG.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(GG, bG) {
        const {
          device: ZG,
          unitBytes: wG,
          twinUnitBytes: SG,
          usage: LG,
          label: yG
        } = this.arena;
        ZG.pushErrorScope("out-of-memory");
        const kG = ZG.createBuffer({
          label: bG ? `${yG}-light` : yG,
          size: GG.units * (bG ? SG : wG),
          usage: (bG ? this.arena.twinUsage : LG) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, ZG.popErrorScope().then((ZG => {
          this.arena.awaitingVerdict--, this.settle(GG, bG, !ZG, !0)
        }), (ZG => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${yG} buffer, taken as failed: ${String(ZG)}`), this.settle(GG, bG, !1, !1)
        })), kG
      }
      settle(GG, bG, ZG, wG) {
        const SG = this.backings.indexOf(GG);
        if (!(this.dropped || SG < 0)) {
          if (!ZG) {
            if (wG && this.arena.ranOutOfMemory(GG.units, GG.units * (bG ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === SG) return void this.drop();
            for (const GG of this.backings.splice(SG)) GG.destroy();
            return this.Bh.truncate(this.backings[SG - 1].units), this.growable = !1, void this.promote()
          }
          bG ? GG.twinReady = !0 : (GG.bufferReady = !0, this.arena.allocatedBuffer(GG.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: GG
        } = this;
        let bG = 0;
        for (; bG + 1 < GG.length && GG[bG].ready && GG[bG + 1].ready;) bG++;
        for (const ZG of GG.splice(0, bG)) ZG.destroy();
        this.refresh()
      }
      refresh() {
        const GG = this.backings[0];
        this.buffer = GG.buffer, this.twin = GG.twinReady ? GG.twin : null, this.usable = !this.dropped && GG.bufferReady ? GG.units : 0
      }
    }
    class Wk {
      constructor(GG, bG, ZG, wG) {
        let {
          verticesPerUnit: SG = 1,
          twinUsage: LG = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = GG, this.unitBytes = bG, this.usage = ZG, this.label = wG, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, ab.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), bG % 4 !== 0) throw new Error(`${wG}: ${bG}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = SG, this.twinUsage = LG, this.twinValueBytes = SG > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * SG
      }
      twinLight(GG, bG) {
        if (4 === this.twinValueBytes) return this.widened.length < bG && (this.widened = new Float32Array(Math.max(bG, 2 * this.widened.length))), this.widened.set(GG.subarray(0, bG)), {
          light: this.widened,
          count: bG
        };
        const ZG = bG % this.verticesPerUnit;
        if (0 === ZG) return {
          light: GG,
          count: bG
        };
        const wG = bG - ZG + this.verticesPerUnit;
        return this.padded.length < wG && (this.padded = new Uint16Array(Math.max(wG, 2 * this.padded.length))), this.padded.set(GG.subarray(0, bG)), this.padded.fill(0, bG, wG), {
          light: this.padded,
          count: wG
        }
      }
      allocate(GG) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), GG > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const SG of this.pages) {
          const bG = SG.Bh.allocate(GG);
          if (bG >= 0) return {
            page: SG,
            start: bG,
            length: GG
          }
        }
        const bG = this.pages[this.pages.length - 1];
        if (null !== bG && void 0 !== bG && bG.canGrow) {
          const ZG = Math.min(this.ceiling, Math.max(2 * bG.rp, bG.rp + GG));
          if (ZG - bG.rp >= GG) return bG.grow(ZG), {
            page: bG,
            start: bG.Bh.allocate(GG),
            length: GG
          }
        }
        bG && bG !== this.pages[0] && 0 === bG.Bh.used && bG.drop();
        const ZG = Math.floor(1048576 / this.unitBytes),
          wG = new Ck(this, Math.max(GG, Math.min(this.ceiling, ZG)));
        return this.pages.push(wG), {
          page: wG,
          start: wG.Bh.allocate(GG),
          length: GG
        }
      }
      free(GG) {
        this.assertNotDrawing();
        const {
          page: bG
        } = GG;
        bG.Bh.free(GG.start, GG.length), 0 === bG.Bh.used && bG !== this.pages[0] && bG !== this.pages[this.pages.length - 1] && bG.drop()
      }
      retire() {
        for (const GG of this.pages) GG.retire()
      }
      remove(GG) {
        const bG = this.pages.indexOf(GG);
        bG >= 0 && this.pages.splice(bG, 1)
      }
      ranOutOfMemory(GG, bG) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${bG}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, GG), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, GG) / 2));
        const ZG = performance.now();
        ZG >= this.shortageUntil && (this.forgetFailedAt = ZG + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = ZG + 1e3)
      }
      allocatedBuffer(GG) {
        GG >= this.failed && (this.failed = 1 / 0);
        const bG = Math.min(2 * GG, Math.floor((GG + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, bG))
      }
      stats() {
        let GG = 0,
          bG = 0,
          ZG = 0,
          wG = 0;
        for (const SG of this.pages) GG += SG.rp, bG += SG.Bh.used, ZG += SG.hasTwin ? SG.rp * this.twinUnitBytes : 0, wG += SG.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: GG * this.unitBytes,
          usedBytes: bG * this.unitBytes,
          twinBytes: ZG,
          allocatedBytes: wG
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: GG,
          maxStorageBufferBindingSize: bG
        } = this.device.limits;
        let ZG = Math.floor(Math.min(67108864, GG) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (ZG = Math.min(ZG, Math.floor(bG / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (ZG = Math.min(ZG, Math.floor(bG / this.twinUnitBytes))), ZG
      }
    }
    const mk = 16383;

    function Ik(GG, bG, ZG, wG, SG) {
      let LG = 0;
      for (let yG = ZG; yG < wG; yG += mk) GG.drawIndexed(6 * Math.min(mk, wG - yG), 1, 0, bG + 4 * yG, SG), LG++;
      return LG
    }
    class Fk {
      constructor(GG, bG) {
        this.recordsGroup = bG, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const ZG = tb.f.strideWithoutAtlas;
        this.vertexArena = new Wk(GG, ZG, GPUBufferUsage.VERTEX, `terrain-vertices-${ZG}`), this.quadArena = new Wk(GG, zk.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const wG = (0, Db.f)(new Uint16Array(98298), mk);
        this.quadPattern = GG.createBuffer({
          label: "terrain-quad-pattern",
          size: wG.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), GG.queue.writeBuffer(this.quadPattern, 0, wG)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(GG, bG) {
        const ZG = bG.packedVertices,
          wG = ZG ? this.quadArena.allocate(GG.faceCount) : this.vertexArena.allocate(GG.vertexCount);
        if (!wG) return !1;
        GG.vertices = wG;
        const SG = ZG ? new Uint8Array(ZG.buffer, ZG.byteOffset, ZG.byteLength) : new Uint8Array(bG.vertices);
        return wG.page.write(wG, SG), !0
      }
      setLight(GG, bG) {
        const {
          vertices: ZG
        } = GG;
        ZG && 0 !== bG.length && ZG.page.live && (bG.length < GG.vertexCount ? ZG.page.arena.warnOnce("shortLight", `a part's ${bG.length} light values are fewer than its ${GG.vertexCount} vertices, so its light is left as it was`) : (ZG.page.writeLight(ZG, bG), GG.lit = !0))
      }
      lightFullSky(GG, bG) {
        this.fullSky.length < bG && (this.fullSky = new Uint16Array(Math.max(bG, 4096)).fill(uk.k));
        for (const ZG of GG) {
          const GG = ZG.vertices;
          GG.page.live && (GG.page.writeLight(GG, this.fullSky), ZG.lit = !0)
        }
      }
      backed(GG) {
        const {
          vertices: bG
        } = GG;
        return !!bG && bG.page.holds(bG)
      }
      lost(GG) {
        const {
          vertices: bG
        } = GG;
        return !!bG && bG.page.lost(bG)
      }
      release(GG) {
        GG.vertices && GG.vertices.page.arena.free(GG.vertices), GG.vertices = null, GG.lit = !1
      }
      setDrawing(GG) {
        this.forgetBound()
      }
      draw(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bG.faceCount;
        const LG = bG.vertices,
          yG = LG.page,
          kG = ZG ? yG.twin : null;
        if (!yG.holds(LG) || ZG && !kG) return 0;
        const {
          verticesPerUnit: UG
        } = yG.arena;
        let YG = LG.start * UG;
        this.boundPattern || (GG.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const VG = wG + SG;
        if (UG > 1) return yG.buffer === this.boundRecords && kG === this.boundRecordsLight || (GG.setBindGroup(1, this.recordsGroup(yG.buffer, kG)), this.boundRecords = yG.buffer, this.boundRecordsLight = kG), Ik(GG, YG, wG, VG, bG.slot);
        yG.buffer !== this.boundVertices && (GG.setVertexBuffer(0, yG.buffer), this.boundVertices = yG.buffer), kG && kG !== this.boundLight && (GG.setVertexBuffer(1, kG), this.boundLight = kG);
        const pG = bG.faceCount;
        return VG <= pG ? Ik(GG, YG, wG, VG, bG.slot) : Ik(GG, YG, wG, pG, bG.slot) + Ik(GG, YG, Math.max(wG, pG) - pG, VG - pG, bG.slot)
      }
      get buffersAwaitingVerdict() {
        let GG = 0;
        for (const bG of this.arenas()) GG += bG.awaitingVerdict;
        return GG
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class vk {
      constructor(GG, bG, ZG, wG) {
        this.device = GG, this.splitBefore = bG, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = GG.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const SG = GG.createShaderModule({
          label: "scene-depth-copy",
          code: (LG = ZG._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${LG?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var LG;
        GG.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: SG,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: SG,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((GG => {
          this.pipeline = GG, this.building = !1
        }), (GG => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", GG)
        })), ZG._executeWithTransmission = () => this.execute(ZG, wG)
      }
      get compiling() {
        return this.building
      }
      setWanted(GG) {
        this.wanted = GG
      }
      setPlanes(GG, bG) {
        GG === this.near && bG === this.far || (this.near = GG, this.far = bG, this.unproject[0] = GG / (bG - GG), this.unproject[1] = bG * GG / (bG - GG), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var GG, bG;
        return null !== (GG = null === (bG = this.copy) || void 0 === bG ? void 0 : bG.view) && void 0 !== GG ? GG : null
      }
      execute(GG, bG) {
        var ZG;
        null === (ZG = this.retired) || void 0 === ZG || ZG.destroy(), this.retired = null;
        const wG = Xb(bG),
          SG = GG._transparentBindings,
          LG = this.wanted && this.pipeline ? this.splitIndex(SG) : -1,
          yG = GG._colorAttachment,
          kG = yG.resolveTarget;
        LG >= 0 && (yG.resolveTarget = void 0, Zk(GG, !0));
        let UG = wG.beginRenderPass(GG._renderPassDescriptor);
        UG.setBindGroup(0, GG._sceneBG);
        let YG = this.drawList(UG, bG, GG._opaqueBindings, 0, GG._opaqueBindings.length);
        if (YG += this.drawList(UG, bG, GG._directBindings, 0, GG._directBindings.length), YG += this.drawList(UG, bG, SG, 0, LG >= 0 ? LG : SG.length), UG.end(), LG < 0) return YG;
        Zk(GG);
        const VG = GG._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: pG,
            stencilLoadOp: fG
          } = VG,
          QG = yG.loadOp;
        yG.resolveTarget = kG;
        try {
          this.copyDepth(wG, GG), yG.loadOp = "load", VG.depthLoadOp = "load", fG && (VG.stencilLoadOp = "load"), UG = wG.beginRenderPass(GG._renderPassDescriptor), UG.setBindGroup(0, GG._sceneBG), YG += this.drawList(UG, bG, SG, LG, SG.length), UG.end()
        } finally {
          yG.loadOp = QG, VG.depthLoadOp = pG, VG.stencilLoadOp = fG
        }
        return YG
      }
      splitIndex(GG) {
        for (let bG = 0; bG < GG.length; bG++)
          if (GG[bG].renderable === this.splitBefore) return bG;
        return -1
      }
      drawList(GG, bG, ZG, wG, SG) {
        let LG = null,
          yG = 0;
        for (let kG = wG; kG < SG; kG++) {
          const wG = ZG[kG],
            SG = wG.renderable.mesh;
          SG && !1 === SG.visible || (wG.pipeline !== LG && (GG.setPipeline(wG.pipeline), LG = wG.pipeline), yG += wG.draw(GG, bG))
        }
        return yG
      }
      copyDepth(GG, bG) {
        var ZG, wG;
        const SG = (null !== (ZG = bG._config.depth) && void 0 !== ZG ? ZG : bG._config.rt)._depthTexture,
          LG = (null === (wG = this.copy) || void 0 === wG ? void 0 : wG.source) === SG ? this.copy : this.remakeCopy(SG),
          yG = GG.beginRenderPass(LG.pass);
        yG.setPipeline(this.pipeline), yG.setBindGroup(0, LG.bindGroup), yG.draw(3), yG.end()
      }
      remakeCopy(GG) {
        var bG, ZG;
        this.retired = null !== (bG = null === (ZG = this.copy) || void 0 === ZG ? void 0 : ZG.texture) && void 0 !== bG ? bG : null;
        const wG = this.device.createTexture({
            label: "scene-depth",
            size: [GG.width, GG.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          SG = wG.createView(),
          LG = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: GG.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          yG = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: SG,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: GG,
          texture: wG,
          view: SG,
          bindGroup: LG,
          pass: yG
        }, this.copy
      }
    }
    const ak = "rgba8unorm";

    function ck(GG) {
      return GG ? 15 : 1
    }
    class lk {
      constructor(GG, bG, ZG, wG) {
        this.device = GG, this.terrain = wG, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = bG._targetSignature._sampleCount > 1, this.cameraBuffer = GG.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = GG.createBindGroupLayout({
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
        const SG = GG.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = GG.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: SG,
          entries: []
        });
        const LG = GG.createShaderModule({
          label: "sun-shadow-mask",
          code: (yG = this.edge, `${(0,Nb.x)()}${kw({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${yG?NZ:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${ck(yG)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${yG?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var yG;
        GG.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: GG.createPipelineLayout({
            bindGroupLayouts: [this.layout, SG, SG, RL(GG, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: LG,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: LG,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((GG => {
          this.pipeline = GG, this.building = !1
        }), (GG => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", GG)
        }));
        const kG = bG._executeWithTransmission;
        bG._executeWithTransmission = GG => this.execute(bG, ZG, (() => kG ? kG(GG) : function(GG, bG) {
          const ZG = Xb(bG).beginRenderPass(GG._renderPassDescriptor);
          ZG.setBindGroup(0, GG._sceneBG);
          let wG = jk(ZG, bG, GG._opaqueBindings);
          return wG += jk(ZG, bG, GG._directBindings), wG += jk(ZG, bG, GG._transparentBindings), ZG.end(), wG
        }(bG, ZG)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var GG, bG;
        return null !== (GG = null === (bG = this.targets) || void 0 === bG ? void 0 : bG.maskView) && void 0 !== GG ? GG : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(GG) {
        ! function(GG, bG) {
          const ZG = GG.worldMatrix,
            wG = GG.projectionMatrix,
            SG = 1 / wG[0],
            LG = 1 / wG[5],
            yG = GG.far * GG.near / (GG.far - GG.near);
          bG[0] = GG.eye[0], bG[1] = GG.eye[1], bG[2] = GG.eye[2], bG[3] = 2 ** -23 / yG, bG[4] = ZG[0] * SG, bG[5] = ZG[1] * SG, bG[6] = ZG[2] * SG, bG[7] = yG, bG[8] = ZG[4] * LG, bG[9] = ZG[5] * LG, bG[10] = ZG[6] * LG, bG[11] = GG.near / (GG.far - GG.near), bG[12] = ZG[8], bG[13] = ZG[9], bG[14] = ZG[10], bG[15] = 0
        }(GG, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(GG, bG, ZG) {
        if (this.retire(), !this.terrain.readsMask) return ZG();
        const wG = this.targetsFor(GG),
          SG = Xb(bG),
          LG = GG._renderPassDescriptor.depthStencilAttachment;
        this.edge || (wG.prepass.depthStencilAttachment.view = LG.view);
        const yG = this.terrain.drawPrepass(SG, wG.prepass, GG._sceneBG);
        if (0 === yG) return ZG();
        if (this.trace(SG, wG), this.edge) return yG + 1 + ZG();
        const {
          depthLoadOp: kG,
          stencilLoadOp: UG
        } = LG;
        LG.depthLoadOp = "load", UG && (LG.stencilLoadOp = "load");
        try {
          return yG + 1 + ZG()
        } finally {
          LG.depthLoadOp = kG, LG.stencilLoadOp = UG
        }
      }
      trace(GG, bG) {
        const ZG = this.terrain.sunShadowGroup(),
          wG = GG.beginRenderPass(bG.trace);
        this.pipeline && ZG && (wG.setPipeline(this.pipeline), wG.setBindGroup(0, bG.bindGroup), wG.setBindGroup(1, this.empty), wG.setBindGroup(2, this.empty), wG.setBindGroup(3, ZG), wG.draw(3)), wG.end()
      }
      retire() {
        const GG = this.retired;
        var bG;
        GG && (GG.mask.destroy(), GG.normals.destroy(), null === (bG = GG.depth) || void 0 === bG || bG.destroy(), this.retired = null)
      }
      targetsFor(GG) {
        var bG, ZG;
        const wG = (null !== (bG = GG._config.depth) && void 0 !== bG ? bG : GG._config.rt)._depthTexture;
        return (null === (ZG = this.targets) || void 0 === ZG ? void 0 : ZG.source) === wG ? this.targets : this.remake(GG, wG)
      }
      remake(GG, bG) {
        var ZG;
        this.retired = this.targets;
        const wG = [bG.width, bG.height],
          SG = this.device.createTexture({
            label: "sun-shadow-mask",
            size: wG,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          LG = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: wG,
            format: ak,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          yG = null !== (ZG = GG._targetSignature._depthStencilFormat) && void 0 !== ZG ? ZG : bG.format,
          kG = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: wG,
            format: yG,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          UG = GG._renderPassDescriptor.depthStencilAttachment,
          YG = yG.includes("stencil"),
          VG = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: LG.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: kG ? kG.createView() : UG.view,
              depthClearValue: UG.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...YG ? {
                stencilClearValue: UG.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          pG = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== kG && void 0 !== kG ? kG : bG).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: LG.createView()
            }]
          }),
          fG = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: SG.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [ck(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: bG,
          mask: SG,
          maskView: SG.createView(),
          normals: LG,
          depth: kG,
          bindGroup: pG,
          prepass: VG,
          trace: fG
        }, this.targets
      }
    }

    function jk(GG, bG, ZG) {
      let wG = null,
        SG = 0;
      for (const LG of ZG) {
        const ZG = LG.renderable.mesh;
        ZG && !1 === ZG.visible || (LG.pipeline !== wG && (GG.setPipeline(LG.pipeline), wG = LG.pipeline), SG += LG.draw(GG, bG))
      }
      return SG
    }
    const Pk = 6e4,
      Mk = {
        status: "ok"
      },
      Ak = {
        status: "skipped"
      };
    async function sk(GG, bG) {
      const {
        isCancelled: ZG
      } = GG;
      if (ZG()) return {
        status: "RZ"
      };
      const {
        target: wG
      } = bG;
      if (!wG) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const SG = [],
        LG = Promise.all(Array.from(new Set(GG.materials), (async ZG => {
          SG.push(await async function(GG, bG, ZG, wG) {
            const SG = {
              lighting: GG.lighting,
              dirLightCount: Math.min(GG.dirLightCount, 4),
              OQ: GG.runtime
            };
            try {
              const LG = bG.material(wG);
              return LG && aw(bG.programKey(LG, !1, SG)) ? (await LG.ready, GG.isCancelled() ? Mk : LG.bindGroupLayout ? await async function(GG, bG, ZG, wG) {
                const {
                  device: SG
                } = GG;
                let LG, yG;
                SG.pushErrorScope("validation");
                try {
                  LG = GG.pipelineBuild(bG, ZG, wG)
                } finally {
                  yG = SG.popErrorScope().catch((() => null))
                }
                const [kG, UG] = await Promise.all([yG, LG.built.then((() => null), (GG => null !== GG && void 0 !== GG ? GG : new Error("pipeline failed")))]);
                if (!kG && !UG) return Mk;
                const YG = await qk(LG.module),
                  VG = YG.length > 0 ? YG.map((GG => `${LG.name} ${GG.lineNum}:${GG.linePos}: ${GG.message}`)).join("\n") : `${LG.name}: ${nk(null!==UG&&void 0!==UG?UG:kG)}`;
                return {
                  status: "failed",
                  material: bG.model.name,
                  message: VG
                }
              }(bG, LG, bG.programKey(LG, "none" !== LG.texture, SG), ZG): (console.warn(`Shader pack: skipped the compile check for "${wG.name}", whose textures failed to load`), Ak)) : Mk
            } catch (LG) {
              return {
                status: "failed",
                material: wG.name,
                message: nk(LG)
              }
            }
          }(GG, bG, wG, ZG))
        }))),
        yG = function(GG, bG) {
          let ZG, wG, SG = !1;
          const LG = new Promise((LG => {
            var yG;
            ZG = setTimeout((() => {
              LG("timeout")
            }), null !== (yG = bG.timeoutMs) && void 0 !== yG ? yG : Pk), wG = setInterval((() => {
              bG.isCancelled() && LG("RZ")
            }), 50), GG.lost.then((() => {
              SG = !0, LG("lost")
            }))
          }));
          return {
            signal: LG,
            lost: () => SG,
            dispose: () => {
              clearTimeout(ZG), clearInterval(wG)
            }
          }
        }(bG.device, GG);
      let kG;
      try {
        kG = await Promise.race([LG.then((() => "done")), yG.signal])
      } finally {
        yG.dispose()
      }
      if ("RZ" === kG || ZG()) return {
        status: "RZ"
      };
      const UG = SG.find((GG => "failed" === GG.status));
      return UG && "lost" !== kG && !yG.lost() && await new Promise((GG => {
        setTimeout(GG, 0)
      })), "lost" === kG || yG.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : UG ? {
        status: "failed",
        failure: {
          material: UG.material,
          message: UG.message
        }
      } : "timeout" === kG ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(YG=GG.timeoutMs)&&void 0!==YG?YG:Pk)/1e3} s`), {
        status: "skipped"
      }) : SG.some((GG => "skipped" === GG.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var YG
    }
    async function qk(GG) {
      if (!GG) return [];
      try {
        return (await GG.getCompilationInfo()).messages.filter((GG => "error" === GG.type))
      } catch {
        return []
      }
    }

    function nk(GG) {
      var bG;
      return null !== (bG = null === GG || void 0 === GG ? void 0 : GG.message) && void 0 !== bG ? bG : String(GG)
    }

    function gk(GG, bG, ZG, wG, SG) {
      aw(bG) ? qk(wG).then((bG => {
        const [wG] = bG;
        Vb(GG, "terrain", ZG, SG, wG ? `${wG.lineNum}:${wG.linePos} error: ${wG.message}` : null)
      })) : Vb(GG, "terrain", ZG, SG)
    }
    var ek = ZG(37918),
      Rk = ZG(37928),
      Tk = ZG(37941),
      Hk = ZG(2854);

    function tk(GG, bG, ZG, wG, SG) {
      const LG = Math.hypot(ZG[0], ZG[1], ZG[2]);
      if (!(LG > 0)) return;
      const yG = [ZG[0] / LG, ZG[1] / LG, ZG[2] / LG],
        kG = [Math.floor(bG[0]), Math.floor(bG[1]), Math.floor(bG[2])],
        UG = [0, 0, 0],
        YG = [1 / 0, 1 / 0, 1 / 0],
        VG = [1 / 0, 1 / 0, 1 / 0];
      for (let QG = 0; QG < 3; QG++) yG[QG] > 0 ? (UG[QG] = 1, YG[QG] = (kG[QG] + 1 - bG[QG]) / yG[QG], VG[QG] = 1 / yG[QG]) : yG[QG] < 0 && (UG[QG] = -1, YG[QG] = (kG[QG] - bG[QG]) / yG[QG], VG[QG] = -1 / yG[QG]);
      const {
        rK: pG
      } = GG;
      let fG = GG.KD(kG[0], kG[1], kG[2]);
      for (;;) {
        const bG = YG[0] < YG[1] ? YG[0] < YG[2] ? 0 : 2 : YG[1] < YG[2] ? 1 : 2;
        if (YG[bG] > wG) return;
        const ZG = UG[bG] > 0 ? kG[bG] + 1 : kG[bG];
        kG[bG] += UG[bG], YG[bG] += VG[bG];
        const LG = GG.KD(kG[0], kG[1], kG[2]),
          yG = LG !== fG && !(GG.opaque[fG] && GG.opaque[LG]);
        if (yG) {
          const wG = [kG[0], kG[1], kG[2]];
          wG[bG] = ZG;
          const LG = Math.floor(wG[0] / pG),
            yG = Math.floor(wG[1] / pG),
            UG = Math.floor(wG[2] / pG);
          !GG.isDrawn(LG, yG, UG) && GG.hasParts(LG, yG, UG) && SG.add(`${LG},${yG},${UG}`)
        }
        if (yG && GG.occluders[LG]) return;
        fG = LG
      }
    }

    function Dk(GG, bG) {
      return GG.group - bG.group || GG.nearest - bG.nearest
    }
    class Nk {
      constructor(GG, bG) {
        this.device = GG, this.PJ = bG, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var GG;
        const bG = null !== (GG = this.free.pop()) && void 0 !== GG ? GG : this.next++;
        if (8 * bG >= this.data.length) {
          const GG = new Float32Array(2 * this.data.length);
          GG.set(this.data), this.data = GG, this.words = new Uint32Array(GG.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.PJ()
        }
        return bG
      }
      release(GG) {
        this.free.push(GG)
      }
      set(GG, bG, ZG, wG, SG) {
        const LG = 8 * GG + ew;
        this.data[LG] = bG, this.data[LG + 1] = ZG, this.data[LG + 2] = wG, this.setVisibility(GG, SG)
      }
      setVisibility(GG, bG) {
        this.data[8 * GG + Rw] = bG, this.markDirty(GG, GG)
      }
      setFaces(GG, bG, ZG) {
        const wG = 8 * GG;
        this.words[wG + Tw] = bG, this.words[wG + Hw] = ZG, this.markDirty(GG, GG)
      }
      markDirty(GG, bG) {
        this.dirtyMin = Math.min(this.dirtyMin, GG), this.dirtyMax = Math.max(this.dirtyMax, bG)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Ok = gw,
      xk = !0;
    const Bk = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Ok.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      GU = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class bU {
      constructor(GG) {
        this.device = GG, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(jw), this.dirLightUniforms = this.frameUniforms.subarray(lw.dirLights, lw.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, ab.e)(), this.faceGroups = !0, this.visibilityGraph = xk, this.visCull = xk, this.visCheck = !1, this.visCullMinDistance = Tk.d, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new LU, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.OQ = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Fk(GG, ((GG, bG) => this.recordsGroup(GG, bG))), this.slots = new Nk(GG, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = ub(GG), this.frameLayout = GG.createBindGroupLayout({
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
        }), this.frameBuffer = GG.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = GG.createSampler({
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
          bind: (GG, bG) => this.createBinding(this.opaqueRenderable, bG, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (GG, bG) => this.createBinding(this.transparentRenderable, bG, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(GG, bG) {
        this.sceneDepth = new vk(this.device, this.transparentRenderable, GG, bG)
      }
      createFrameBindGroup() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== GG && void 0 !== GG ? GG : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== bG && void 0 !== bG ? bG : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(GG, bG) {
        const ZG = null !== bG && void 0 !== bG ? bG : GG;
        let wG = this.recordsGroups.get(ZG);
        return wG || (wG = this.createFrameBindGroup(GG, bG), this.recordsGroups.set(ZG, wG)), wG
      }
      setChunkMesh(GG, bG, ZG) {
        var wG;
        let SG = this.chunks.get(GG);
        SG ? this.geometry.release(SG) : (SG = {
          mesh: GG,
          slot: this.slots.allocate(),
          origin: [ZG[0], ZG[1], ZG[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: GG.visibility,
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
        }, this.chunks.set(GG, SG), this.writeSlot(SG)), SG.material = GG.material ? this.materialFor(GG.material) : null, SG.packed = !!bG.packedVertices, SG.vertexCount = (0, zk.d)(bG), SG.faceCount = SG.vertexCount / 4;
        const LG = null !== (wG = bG.faceGroups) && void 0 !== wG ? wG : null;
        if (SG.faceGroups = LG, LG) {
          const GG = ek.i;
          SG.planePX = LG[GG], SG.planeNX = LG[GG + 1], SG.planePY = LG[GG + 2], SG.planeNY = LG[GG + 3], SG.planePZ = LG[GG + 4], SG.planeNZ = LG[GG + 5]
        }
        this.drawWhole(SG), 0 !== SG.faceCount && (this.geometry.set(SG, bG) ? (SG.packed && this.slots.setFaces(SG.slot, SG.vertices.start + SG.faceCount, SG.faceCount), bG.LK && this.setChunkMeshLight(GG, bG.LK)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${SG.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(GG, bG) {
        const ZG = this.chunks.get(GG);
        ZG && this.geometry.setLight(ZG, bG)
      }
      drawStats() {
        let GG = this.transparent.length;
        for (const bG of this.opaqueBatches) GG += bG.meshes.length;
        return {
          drawn: GG,
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
      removeChunkMesh(GG) {
        const bG = this.chunks.get(GG);
        bG && (this.geometry.release(bG), this.slots.release(bG.slot), this.chunks.delete(GG))
      }
      remeshLost(GG, bG) {
        this.geometry.release(bG), bG.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** bG.lostRemeshes++);
        const ZG = GG.Op,
          [wG, SG, LG] = ZG.hwG(bG.origin[0], bG.origin[1], bG.origin[2]),
          yG = ZG.Qh.Kh(wG, SG, LG);
        yG && (yG.ph = !0, yG.dh = !0, ZG.fh(yG, !1))
      }
      chooseFaceRanges(GG, bG, ZG) {
        const wG = this.faceRanges;
        GG.faceMask = ZG, GG.rangeCount = (0, Rk.q)(bG, ZG, wG), GG.first0 = wG[0], GG.count0 = wG[1], GG.first1 = wG[2], GG.count1 = wG[3]
      }
      drawWhole(GG) {
        GG.faceMask = -1, GG.faceEpoch = -1, GG.rangeCount = 1, GG.first0 = 0, GG.count0 = GG.faceCount
      }
      writeSlot(GG) {
        const [bG, ZG, wG] = this.originOffset;
        this.slots.set(GG.slot, GG.origin[0] - bG, GG.origin[1] - ZG, GG.origin[2] - wG, GG.visibility)
      }
      materialFor(GG) {
        const bG = this.materials.get(GG);
        if (bG) return bG;
        const ZG = Xk(GG);
        if (!ZG) return this.warnOnce(`material:${GG.name}`, `Lite terrain cannot draw material "${GG.name}"; its chunks are skipped.`), null;
        const {
          model: wG,
          atlas: SG,
          texture: LG,
          animated: yG,
          uniformData: kG
        } = ZG, UG = {
          id: this.materials.size,
          model: wG,
          texture: LG,
          animated: yG,
          uniformData: kG,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${GG.name}`,
            size: kG.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: ZG.liquid,
          customRenderMat: ZG.customRenderMat,
          atlasCount: 0,
          N9: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(GG, UG), this.device.queue.writeBuffer(UG.uniformBuffer, 0, kG), UG.ready = this.createMaterialBindGroup(UG, SG).catch((bG => {
          console.error(`Lite terrain failed to load the textures of material "${GG.name}"`, bG)
        })), UG
      }
      materialLayout(GG) {
        const bG = function(GG) {
            const bG = ["uniforms"];
            if ("atlas" === GG.texture) {
              GG.animated && bG.push("animData"), bG.push("sampler");
              for (let ZG = 0; ZG < GG.atlasCount; ZG++) bG.push("textureArray")
            } else "single" === GG.texture && bG.push("sampler", "texture");
            return bG
          }(GG),
          ZG = bG.join(",");
        let wG = this.materialLayouts.get(ZG);
        if (!wG) {
          const GG = GPUShaderStage.FRAGMENT;
          wG = this.device.createBindGroupLayout({
            label: `terrain-material-${ZG}`,
            entries: bG.map(((bG, ZG) => {
              switch (bG) {
                case "uniforms":
                  return {
                    binding: ZG, visibility: GPUShaderStage.VERTEX | GG, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: ZG, visibility: GPUShaderStage.VERTEX | GG, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: ZG, visibility: GG, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: ZG, visibility: GG, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: ZG, visibility: GG, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(ZG, wG)
        }
        return wG
      }
      async createMaterialBindGroup(GG, bG) {
        const ZG = [{
          buffer: GG.uniformBuffer
        }];
        if (bG) {
          const wG = await bb(this.device, bG.sources);
          GG.atlasCount = wG.length, GG.N9 = wG[0].layerWidth, GG.atlasLayers = wG[0].layers, bG.animDataPerTex && ZG.push({
            buffer: tG(this.device, Float32Array.from(bG.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), ZG.push(this.sampler);
          for (const GG of wG) ZG.push(GG.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === GG.texture) {
          const {
            url: bG
          } = GG.model.diffuseTexture.source, {
            pixels: wG,
            width: SG,
            height: LG
          } = await Gb(bG);
          ZG.push(this.sampler), ZG.push(NG(this.device, wG, SG, LG, 1, `terrain-${bG}`).createView({
            dimension: "2d"
          }))
        }
        const wG = this.materialLayout(this.programKey(GG, !1));
        GG.bindGroupLayout = wG, GG.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${GG.model.name}`,
          layout: wG,
          entries: ZG.map(((GG, bG) => ({
            binding: bG,
            resource: GG
          })))
        })
      }
      programKey(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wG = ZG ? ZG.lighting : this.lighting,
          SG = ZG ? ZG.OQ : this.OQ,
          LG = {
            texture: GG.texture,
            atlasCount: GG.atlasCount,
            N9: GG.N9,
            atlasLayers: GG.atlasLayers,
            animated: GG.animated,
            alphaTest: GG.model.transparencyMode === CG.q.alphaTest,
            lighting: wG,
            dirLightCount: ZG ? ZG.dirLightCount : this.dirLightCount,
            packed: bG
          };
        if (!SG) return LG;
        const yG = this.shaderPackFields(GG, SG),
          kG = "atlas" === GG.texture && GG.model.transparencyMode === CG.q.opaque && mw(yG.packVariant);
        return {
          ...LG,
          ...yG,
          alphaTest: LG.alphaTest || kG
        }
      }
      shaderPackFields(GG, bG) {
        const ZG = this.packVariant(GG, bG);
        return void 0 === ZG ? Cw : {
          packVariant: ZG,
          liquid: GG.liquid
        }
      }
      packVariant(GG, bG) {
        return GG.customRenderMat ? void 0 : function(GG, bG) {
          const ZG = GG ? GG.defineFor(bG ? "liquid" : "terrain") : 0;
          return 0 === ZG ? void 0 : ZG
        }(bG, GG.liquid)
      }
      isBlended(GG) {
        return GG.model.transparencyMode === CG.q.alphaBlend
      }
      shaderModule(GG, bG) {
        let ZG = this.modules.get(GG);
        return ZG || (ZG = this.device.createShaderModule({
          label: bG,
          code: GG
        }), this.modules.set(GG, ZG)), ZG
      }
      pipelineFor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!GG.bindGroupLayout) return null;
        if (!wG) return this.pipelineOf(GG, bG, ZG);
        const SG = this.pipelineIdNow(GG, bG, !0, ZG),
          LG = this.pipelines.get(SG);
        if (LG) return LG;
        const yG = this.pipelineOf(GG, bG, ZG);
        return yG && void 0 === LG && this.startPipeline(SG, GG, {
          ...this.programKey(GG, bG),
          resting: wG
        }, ZG), yG
      }
      pipelineOf(GG, bG, ZG) {
        const wG = this.pipelineIdNow(GG, bG, !1, ZG),
          SG = this.pipelines.get(wG);
        return void 0 !== SG ? SG : (this.startPipeline(wG, GG, this.programKey(GG, bG), ZG), null)
      }
      pipelineIdNow(GG, bG, ZG, wG) {
        const {
          lighting: SG,
          dirLightCount: LG
        } = this, {
          transparencyMode: yG,
          backFaceCulling: kG
        } = GG.model, UG = this.packVariant(GG, this.OQ), YG = (bG ? 2 : 0) + (ZG ? 1 : 0), VG = GG.pipelineIds[YG];
        if (null !== VG && VG.lighting === SG && VG.dirLightCount === LG && VG.packVariant === UG && VG.transparencyMode === yG && VG.cull === kG && VG.atlasCount === GG.atlasCount && VG.N9 === GG.N9 && VG.atlasLayers === GG.atlasLayers && VG.colorFormat === wG._colorFormat && VG.depthStencilFormat === wG._depthStencilFormat && VG.sampleCount === wG._sampleCount) return VG.id;
        const pG = this.programKey(GG, bG),
          fG = this.pipelineId(GG, ZG ? {
            ...pG,
            resting: ZG
          } : pG, wG);
        return GG.pipelineIds[YG] = {
          id: fG,
          lighting: SG,
          dirLightCount: LG,
          packVariant: UG,
          transparencyMode: yG,
          cull: kG,
          atlasCount: GG.atlasCount,
          N9: GG.N9,
          atlasLayers: GG.atlasLayers,
          colorFormat: wG._colorFormat,
          depthStencilFormat: wG._depthStencilFormat,
          sampleCount: wG._sampleCount
        }, fG
      }
      pipelineId(GG, bG, ZG) {
        return ZU(bG, this.isBlended(GG), GG.model.backFaceCulling, ZG)
      }
      pipelineBuild(GG, bG, ZG) {
        var wG;
        const SG = this.pipelineId(GG, bG, ZG);
        return null !== (wG = this.builds.get(SG)) && void 0 !== wG ? wG : this.startPipeline(SG, GG, bG, ZG)
      }
      startPipeline(GG, bG, ZG, wG) {
        var SG;
        this.pipelines.set(GG, null);
        const LG = Bw(ZG),
          yG = this.isBlended(bG),
          kG = this.shadowMask && wG._depthStencilFormat ? function(GG, bG, ZG, wG) {
            if (void 0 === GG.packVariant || GG.liquid || bG) return "none";
            const SG = (0, Ob.e)(GG.packVariant);
            return null === SG || void 0 === SG || !SG.sunShadow || !Lw(SG, ZG) || SG.discards || GG.alphaTest && mw(GG.packVariant) ? "none" : wG ? "edge" : "plain"
          }(ZG, yG, !!this.sunShadow, wG._sampleCount > 1) : "none";
        let UG;
        try {
          UG = GS(ZG, !!this.sunShadow, kG)
        } catch (dG) {
          if (!aw(ZG)) throw dG;
          return this.failedPackBuild(GG, ZG, LG, dG)
        }
        const YG = this.shaderModule(UG, LG),
          VG = [];
        ZG.packed || (VG.push(function(GG, bG) {
          const ZG = [{
            shaderLocation: Ok.position,
            offset: tb.f.vZ,
            format: "float32x3"
          }, {
            shaderLocation: Ok.normal,
            offset: tb.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Ok.color,
            offset: tb.f.colorOffset,
            format: "unorm8x4"
          }];
          return GG && ZG.push({
            shaderLocation: Ok.uv,
            offset: tb.f.uvOffset,
            format: "float32x2"
          }), bG && ZG.push({
            shaderLocation: Ok.blockFlagWords,
            offset: tb.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: tb.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: ZG
          }
        }("none" !== ZG.texture, aw(ZG))), ZG.lighting && VG.push(Bk));
        const pG = bG.model.backFaceCulling,
          fG = {
            label: LG,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, bG.bindGroupLayout, ...tL(this.device, ZG, !!this.sunShadow, "none" !== kG)]
            }),
            vertex: {
              module: YG,
              entryPoint: "mainVertex",
              buffers: VG
            },
            fragment: rb({
              module: YG,
              entryPoint: "mainFragment"
            }, wG, yG ? GU : null),
            depthStencil: wG._depthStencilFormat ? {
              format: wG._depthStencilFormat,
              depthCompare: null !== (SG = wG._depthCompare) && void 0 !== SG ? SG : ib,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: wG._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: pG ? "back" : "none"
            }
          },
          QG = ZG.resting ? 0 : 1;
        this.compiling += QG;
        const KG = "none" === kG ? this.device.createRenderPipelineAsync(fG) : this.startMaskPipelines(YG, fG, "edge" === kG);
        KG.then((bG => {
          this.compiling -= QG, this.pipelines.set(GG, bG)
        }), (GG => {
          this.compiling -= QG, console.error(`Lite terrain pipeline ${LG} failed`, GG), gk(this.device, ZG, LG, YG, GG)
        }));
        const hG = {
          name: LG,
          module: YG,
          built: KG
        };
        return this.builds.set(GG, hG), hG
      }
      startMaskPipelines(GG, bG, ZG) {
        const wG = bG.depthStencil,
          SG = this.device.createRenderPipelineAsync(ZG ? bG : {
            ...bG,
            depthStencil: {
              ...wG,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          LG = this.device.createRenderPipelineAsync({
            ...bG,
            label: `${bG.label}-prepass`,
            fragment: {
              module: GG,
              entryPoint: "prepassFragment",
              targets: [{
                format: ak
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([SG, LG]).then((GG => {
          let [bG, ZG] = GG;
          return this.prepassOf.set(bG, ZG), this.maskPipelines++, bG
        }))
      }
      failedPackBuild(GG, bG, ZG, wG) {
        console.error(`Lite terrain pipeline ${ZG} failed`, wG), gk(this.device, bG, ZG, null, wG);
        const SG = Promise.reject(wG);
        SG.catch((() => {}));
        const LG = {
          name: ZG,
          module: null,
          built: SG
        };
        return this.builds.set(GG, LG), LG
      }
      checkShaderPack(GG) {
        return sk(GG, {
          device: this.device,
          target: this.target,
          material: GG => this.materialFor(GG),
          programKey: (GG, bG, ZG) => this.programKey(GG, bG, ZG),
          pipelineBuild: (GG, bG, ZG) => this.pipelineBuild(GG, bG, ZG)
        })
      }
      createBinding(GG, bG, ZG) {
        return this.target = bG, {
          renderable: GG,
          pipeline: Ib(this.device, bG),
          draw: GG => {
            this.geometry.setDrawing(!0);
            try {
              return ZG ? this.drawTransparent(GG, bG) : this.drawOpaque(GG, bG)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(GG, bG) {
        var ZG, wG, SG, LG;
        const {
          wf: yG
        } = GG;
        this.lighting = GG.Fh;
        const kG = (0, rk.x)(bG);
        this.dirLightCount = Math.min(kG, 4), this.OQ = null !== (ZG = yG.OQ) && void 0 !== ZG ? ZG : null, kG > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(GG, bG), this.animateMaterials(bG.animTick);
        const UG = yG.zf,
          YG = UG[0] !== this.originOffset[0] || UG[1] !== this.originOffset[1] || UG[2] !== this.originOffset[2];
        YG && (this.originOffset[0] = UG[0], this.originOffset[1] = UG[1], this.originOffset[2] = UG[2]);
        const VG = bG.eye;
        this.eye[0] = VG[0], this.eye[1] = VG[1], this.eye[2] = VG[2], this.writeShaderPackInputs();
        const pG = bG.projectionMatrix,
          fG = 0 === pG[15];
        let QG = 0;
        (YG || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: KG
        } = this;
        Fb(this.transparentRenderable._worldCenter, bG, Wb), this.resetBatches(fG), this.transparent.length = 0, this.unlit.length = 0;
        const hG = yG.Op.sGG,
          dG = hG / 2 * Math.sqrt(3);
        let JG = 0;
        const rG = !!this.OQ && Ww(this.OQ.defineFor("liquid"));
        let zG = !1;
        const EG = null !== (wG = null === (SG = yG.QE) || void 0 === SG ? void 0 : SG.visibility) && void 0 !== wG ? wG : null,
          oG = this.visCull && fG && 0 === this.compiling && null !== EG && yG.Op.PwG[0] >= this.visCullMinDistance ? this.target : null,
          XG = this.visPassable,
          uG = this.visCandidates,
          iG = this.visCandidateBatches;
        XG.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let CG = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let WG = 0;
        const mG = (GG, ZG) => {
          if (!ZG) return this.transparent.push(GG), void(WG += 2 * GG.faceCount);
          if (null !== GG.faceGroups && ZG.faceCull) {
            if (0 === QG && (QG = (0, Rk.d)(pG, bG.renderWidth, bG.renderHeight), QG !== this.faceFocalPx && (this.faceFocalPx = QG, KG = ++this.faceEpoch)), GG.faceEpoch !== KG) {
              GG.faceEpoch = KG;
              const bG = Math.sqrt(GG.distance) + dG,
                ZG = (0, Rk.k)(GG.planePX, GG.planeNX, GG.planePY, GG.planeNY, GG.planePZ, GG.planeNZ, this.eye[0] - (GG.origin[0] - this.originOffset[0]), this.eye[1] - (GG.origin[1] - this.originOffset[1]), this.eye[2] - (GG.origin[2] - this.originOffset[2]), (0, Rk.h)(bG, QG));
              ZG !== GG.faceMask && this.chooseFaceRanges(GG, GG.faceGroups, ZG)
            }
            if (0 === GG.rangeCount) return
          } else - 1 !== GG.faceMask && this.drawWhole(GG);
          ZG.meshes.push(GG), WG += 2 * ((GG.rangeCount > 0 ? GG.count0 : 0) + (GG.rangeCount > 1 ? GG.count1 : 0))
        };
        for (const FG of this.chunks.values()) {
          YG && this.writeSlot(FG);
          const GG = FG.mesh.visibility;
          GG !== FG.visibility && (FG.visibility = GG, this.slots.setVisibility(FG.slot, GG));
          const {
            material: ZG
          } = FG;
          this.geometry.lost(FG) && performance.now() >= FG.lostRetryAt && this.remeshLost(yG, FG);
          const wG = !(null === ZG || void 0 === ZG || !ZG.bindGroup) && this.geometry.backed(FG),
            SG = wG && this.lighting && !FG.vertices.page.twin;
          if (oG && (Number.isNaN(FG.key) && (FG.ci = Math.floor(FG.origin[0] / hG), FG.cj = Math.floor(FG.origin[1] / hG), FG.ck = Math.floor(FG.origin[2] / hG), FG.key = (0, Hk.g)(FG.ci, FG.cj, FG.ck)), (!wG || GG < 1 || SG || !this.batchDraws(ZG, FG.packed, oG)) && this.visSeeThrough(FG, oG) && XG.add(FG.key)), !wG) continue;
          SG || (FG.lostRemeshes = 0);
          const LG = FG.origin[0] - this.originOffset[0],
            kG = FG.origin[1] - this.originOffset[1],
            UG = FG.origin[2] - this.originOffset[2];
          if (!(0, yk.e)(bG.frustum, LG, kG, UG, hG)) continue;
          const VG = LG + hG / 2 - this.eye[0],
            pG = kG + hG / 2 - this.eye[1],
            QG = UG + hG / 2 - this.eye[2];
          if (FG.distance = VG * VG + pG * pG + QG * QG, this.lighting && !FG.lit && (JG = Math.max(JG, FG.vertexCount), this.unlit.push(FG)), SG) continue;
          const KG = this.isBlended(ZG) ? null : this.batchFor(ZG, FG.packed, FG.vertices.page, 1 === GG, fG);
          oG ? (uG[CG] = FG, iG[CG++] = KG) : mG(FG, KG)
        }
        const IG = oG ? this.sweepVisibility(GG, bG, EG) : null;
        null === (LG = (0, PL.B)(yG)) || void 0 === LG || LG.update(bG.frustum, this.originOffset, hG, IG);
        for (let FG = 0; FG < CG; FG++) {
          const GG = uG[FG];
          !IG || IG.isDrawn(GG.ci, GG.cj, GG.ck) ? mG(GG, iG[FG]) : (this.visCulledParts++, this.visCulledTriangles += 2 * GG.faceCount)
        }
        for (const FG of this.transparent) zG ||= rG && FG.material.liquid && !FG.material.customRenderMat;
        this.submittedTriangles = WG, IG && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(GG, bG, IG)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(zG) : zG && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && JG > 0 && this.geometry.lightFullSky(this.unlit, JG);
        for (const FG of this.opaqueBatches) this.chunkSorter.sort(FG.meshes, 1) || FG.meshes.sort(wU);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(SU)
      }
      sweepVisibility(GG, bG, ZG) {
        const {
          Op: wG
        } = GG.wf, SG = wG.sGG, LG = this.visPassable, yG = this.eye[0] + this.originOffset[0], kG = this.eye[1] + this.originOffset[1], UG = this.eye[2] + this.originOffset[2];
        if (!ZG.eyeClear(yG, kG, UG, bG.near, bG.projectionMatrix, wG)) return null;
        const [YG, VG] = wG.PwG, pG = ZG.update(yG, kG, UG, SG, YG, VG, LG);
        return this.visSweeps = ZG.sweeps, pG ? ZG : null
      }
      visSeeThrough(GG, bG) {
        const {
          material: ZG
        } = GG;
        return (!ZG || !this.isBlended(ZG)) && (GG.mesh.visibility < 1 || !(null !== ZG && void 0 !== ZG && ZG.bindGroup) || GG.faceCount > 0 && (!this.geometry.backed(GG) || this.lighting && !GG.vertices.page.twin) || !this.batchDraws(ZG, GG.packed, bG))
      }
      batchDraws(GG, bG, ZG) {
        var wG;
        const SG = bG ? 2 : 0;
        if (GG === this.visDrawsMaterial && function(GG, bG) {
            return 0 !== (GG & 1 << bG)
          }(this.visDrawsBits, SG)) return 0 !== (this.visDrawsBits & 2 << SG);
        let LG = null !== (wG = this.visBatchDraws.get(GG)) && void 0 !== wG ? wG : 0;
        if (!(LG & 1 << SG)) {
          LG |= 1 << SG | (!!GG.bindGroupLayout && this.canDraw(GG, bG) && !!this.pipelines.get(this.pipelineIdNow(GG, bG, !1, ZG)) ? 2 << SG : 0), this.visBatchDraws.set(GG, LG)
        }
        return this.visDrawsMaterial = GG, this.visDrawsBits = LG, 0 !== (LG & 2 << SG)
      }
      runVisCheck(GG, bG, ZG) {
        const {
          wf: wG
        } = GG, {
          Op: SG
        } = wG, LG = SG.sGG, yG = new Set;
        for (const QG of this.chunks.values()) yG.add(QG.key);
        const kG = eS.Matrix.FromArray(bG.viewProjectionMatrix).invert(),
          [UG, YG, VG] = this.originOffset,
          pG = new eS.mK,
          fG = function(GG, bG, ZG, wG) {
            const SG = new Set;
            for (let LG = 0; LG < 27; LG++)
              for (let yG = 0; yG < 48; yG++) {
                const kG = ZG((yG + .5) / 48 * 2 - 1, (LG + .5) / 27 * 2 - 1);
                tk(GG, bG, [kG[0] - bG[0], kG[1] - bG[1], kG[2] - bG[2]], wG, SG)
              }
            return SG
          }({
            KD: (GG, bG, ZG) => SG.KD(GG, bG, ZG),
            occluders: ZG.occluders,
            opaque: ZG.opaque,
            rK: LG,
            isDrawn: (GG, bG, wG) => ZG.isDrawn(GG, bG, wG),
            hasParts: (GG, bG, ZG) => yG.has((0, Hk.g)(GG, bG, ZG))
          }, [this.eye[0] + UG, this.eye[1] + YG, this.eye[2] + VG], ((GG, bG) => (eS.mK.TransformCoordinatesFromFloatsToRef(GG, bG, .5, kG, pG), [pG.x + UG, pG.y + YG, pG.z + VG])), (SG.PwG[0] + 1) * LG);
        this.visViolations = fG.size;
        for (const QG of fG) this.warnOnce(`vis:${QG}`, `Lite terrain cave culling skipped chunk ${QG}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var GG;
        null !== (GG = this.OQ) && void 0 !== GG && GG.isRunning() && (this.shaderPackInputs ??= new DL(this.device, this.OQ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.OQ, this.eye, this.lighting))
      }
      bindShaderPackInputs(GG, bG, ZG) {
        var wG, SG, LG, yG;
        let kG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const UG = this.packVariant(bG, ZG);
        if (void 0 === UG) return;
        this.shaderPackInputs || (this.shaderPackInputs = new DL(this.device, ZG.textureLayers(), this.sunShadow), this.shaderPackInputs.write(ZG, this.eye, this.lighting));
        const YG = Ww(UG) ? null !== (wG = null === (SG = this.sceneDepth) || void 0 === SG ? void 0 : SG.view) && void 0 !== wG ? wG : this.standIn() : null,
          VG = kG ? null !== (LG = null === (yG = this.shadowMask) || void 0 === yG ? void 0 : yG.view) && void 0 !== LG ? LG : this.standIn() : null;
        this.shaderPackInputs.bind(GG, YG, HL(UG, !!this.sunShadow), VG)
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
        var GG, bG;
        return null !== (GG = null === (bG = this.shaderPackInputs) || void 0 === bG ? void 0 : bG.bindGroupFor(null, !0)) && void 0 !== GG ? GG : null
      }
      resetBatches(GG) {
        const bG = this.opaqueBatches;
        let ZG = 0;
        for (const wG of bG) wG.meshes.length > 0 && (wG.meshes.length = 0, wG.faceCull = this.batchFaceCull(wG.material, GG), bG[ZG++] = wG);
        bG.length = ZG
      }
      orderBatches() {
        const GG = this.opaqueBatches;
        for (let bG = 0; bG < GG.length; bG++) {
          const ZG = GG[bG];
          ZG.group = bG;
          for (let wG = 0; wG < bG; wG++) {
            const bG = GG[wG];
            if (bG.material === ZG.material && bG.packed === ZG.packed) {
              ZG.group = bG.group;
              break
            }
          }
          ZG.nearest = ZG.meshes.length > 0 ? ZG.meshes[0].distance : 1 / 0
        }
        GG.sort(Dk)
      }
      batchFor(GG, bG, ZG, wG, SG) {
        for (const yG of this.opaqueBatches)
          if (yG.material === GG && yG.packed === bG && yG.page === ZG && yG.resting === wG) return yG;
        const LG = {
          material: GG,
          packed: bG,
          page: ZG,
          resting: wG,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(GG, SG)
        };
        return this.opaqueBatches.push(LG), LG
      }
      batchFaceCull(GG, bG) {
        return !(!bG || !(0, ek.n)(GG.model)) && (!this.OQ || ! function(GG) {
          var bG;
          return !(null === (bG = (0, Ob.e)(GG)) || void 0 === bG || !bG.movesVertices)
        }(this.packVariant(GG, this.OQ)))
      }
      writeFrameUniforms(GG, bG) {
        const ZG = this.frameUniforms,
          wG = lw;
        if ((0, rk.B)(GG, ZG), ZG[wG.fogInfos] = bG.fogEnabled ? bG.fogMode : 0, ZG[wG.fogInfos + 1] = bG.fogStart, ZG[wG.fogInfos + 2] = bG.fogEnd, ZG[wG.fogInfos + 3] = bG.fogDensity, ZG.set(bG.fogColour, wG.fogColour), ZG[wG.outputHeight] = bG.renderHeight, ZG.set(bG.ambientColour, wG.sceneAmbient), (0, rk.t)(bG, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const bG = (0, zk.g)(GG.DK, GG.oK, GG.XK);
          for (let GG = 0; GG < 4; GG++) ZG[wG.aoLevels + GG] = bG[GG] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, ZG)
      }
      animateMaterials(GG) {
        const bG = Pw.anim;
        for (const ZG of this.materials.values()) ZG.animated && (ZG.uniformData[bG] = GG, this.device.queue.writeBuffer(ZG.uniformBuffer, 4 * bG, ZG.uniformData, bG, 1))
      }
      canDraw(GG, bG) {
        return !("atlas" === GG.texture && !bG) || (this.warnOnce(`stride:${GG.id}`, `Lite terrain: material "${GG.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(GG, bG) {
        let ZG = 0;
        GG.setBindGroup(1, this.frameBindGroup);
        for (const wG of this.opaqueBatches) {
          if (!wG.meshes.length || !this.canDraw(wG.material, wG.packed)) continue;
          const SG = this.pipelineFor(wG.material, wG.packed, bG, wG.resting);
          SG && (GG.setPipeline(SG), GG.setBindGroup(2, wG.material.bindGroup), this.OQ && this.bindShaderPackInputs(GG, wG.material, this.OQ, this.prepassOf.has(SG)), ZG += this.drawBatch(GG, wG))
        }
        return ZG
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(GG, bG, ZG) {
        const wG = this.target,
          SG = this.OQ;
        if (!wG || !SG || 0 === this.maskPipelines) return 0;
        let LG = 0,
          yG = null;
        this.geometry.setDrawing(!0);
        try {
          for (const kG of this.opaqueBatches) {
            if (!kG.meshes.length || !this.canDraw(kG.material, kG.packed)) continue;
            const UG = this.pipelineFor(kG.material, kG.packed, wG, kG.resting),
              YG = UG && this.prepassOf.get(UG);
            YG && (yG || (yG = GG.beginRenderPass(bG), yG.setBindGroup(0, ZG), yG.setBindGroup(1, this.frameBindGroup)), yG.setPipeline(YG), yG.setBindGroup(2, kG.material.bindGroup), this.bindShaderPackInputs(yG, kG.material, SG, !0), LG += this.drawBatch(yG, kG))
          }
        } finally {
          var kG;
          null === (kG = yG) || void 0 === kG || kG.end(), this.geometry.setDrawing(!1)
        }
        return LG
      }
      drawBatch(GG, bG) {
        let ZG = 0;
        for (const wG of bG.meshes) {
          const {
            rangeCount: bG
          } = wG;
          bG > 0 && (ZG += this.geometry.draw(GG, wG, this.lighting, wG.first0, wG.count0), bG > 1 && (ZG += this.geometry.draw(GG, wG, this.lighting, wG.first1, wG.count1)))
        }
        return ZG
      }
      drawTransparent(GG, bG) {
        let ZG = 0,
          wG = null,
          SG = null;
        GG.setBindGroup(1, this.frameBindGroup);
        for (const LG of this.transparent) {
          const yG = LG.material;
          if (!this.canDraw(yG, LG.packed)) continue;
          const kG = this.pipelineFor(yG, LG.packed, bG);
          kG && (kG !== wG && (GG.setPipeline(kG), wG = kG, this.OQ && this.bindShaderPackInputs(GG, yG, this.OQ)), yG !== SG && (GG.setBindGroup(2, yG.bindGroup), SG = yG), ZG += this.geometry.draw(GG, LG, this.lighting))
        }
        return ZG
      }
    }

    function ZU(GG, bG, ZG, wG) {
      return `${Bw(GG)}|${GG.atlasLayers}|${GG.N9}|${bG}|${ZG}|${wG._colorFormat}|${wG._depthStencilFormat}|${wG._sampleCount}`
    }

    function wU(GG, bG) {
      return GG.distance - bG.distance
    }

    function SU(GG, bG) {
      return bG.distance - GG.distance
    }
    class LU {
      constructor() {
        this.left = []
      }
      sort(GG, bG) {
        for (let ZG = 0; ZG < GG.length; ZG++) {
          const bG = GG[ZG].distance;
          if (bG - bG !== 0) return !1
        }
        return this.sortRange(GG, 0, GG.length, bG), !0
      }
      sortRange(GG, bG, ZG, wG) {
        if (ZG - bG <= 16) {
          for (let SG = bG + 1; SG < ZG; SG++) {
            const ZG = GG[SG],
              LG = wG * ZG.distance;
            let yG = SG - 1;
            for (; yG >= bG && wG * GG[yG].distance > LG; yG--) GG[yG + 1] = GG[yG];
            GG[yG + 1] = ZG
          }
          return
        }
        const SG = bG + ZG >>> 1;
        if (this.sortRange(GG, bG, SG, wG), this.sortRange(GG, SG, ZG, wG), wG * GG[SG - 1].distance <= wG * GG[SG].distance) return;
        const {
          left: LG
        } = this, yG = SG - bG;
        for (let VG = 0; VG < yG; VG++) LG[VG] = GG[bG + VG];
        let kG = 0,
          UG = SG,
          YG = bG;
        for (; kG < yG && UG < ZG;) GG[YG++] = wG * GG[UG].distance < wG * LG[kG].distance ? GG[UG++] : LG[kG++];
        for (; kG < yG;) GG[YG++] = LG[kG++]
      }
    }
    const yU = Math.ceil(102);

    function kU(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bG;
      const LG = Math.min(bG, ZG),
        yG = new Uint32Array(XZ(wG));
      for (let kG = 0; kG < wG; kG++) {
        const bG = Math.floor(kG * LG / wG),
          ZG = Math.max(bG + 1, Math.floor((kG + 1) * LG / wG));
        for (let UG = 0; UG < wG; UG++) {
          const YG = Math.floor(UG * LG / wG),
            VG = Math.max(YG + 1, Math.floor((UG + 1) * LG / wG));
          let pG = 0;
          for (let wG = bG; wG < ZG; wG++)
            for (let bG = YG; bG < VG; bG++) GG[wG * SG + bG] >= yU && pG++;
          if (2 * pG >= (ZG - bG) * (VG - YG)) {
            const GG = UG + wG * kG;
            yG[GG >>> 5] |= 1 << (31 & GG)
          }
        }
      }
      return yG
    }

    function UU(GG) {
      return Math.max(1, Math.min(16, GG))
    }
    class YU {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = GG, this.loadTexture = bG, this.warn = ZG, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(GG, bG) {
        return (GG.pT !== this.builtVersion || this.blockCaster.length !== bG) && (this.build(GG, bG), !0)
      }
      build(GG, bG) {
        this.builtVersion = GG.pT;
        const ZG = new Uint16Array(bG),
          wG = new Map;
        for (let SG = 1; SG < bG; SG++) {
          const bG = this.classify(GG, SG, wG);
          if (null === bG || bG === JZ) {
            ZG[SG] = null === bG ? 0 : JZ;
            continue
          }
          let LG = this.byKey.get(bG.key);
          void 0 === LG && (LG = this.allocate(bG), this.byKey.set(bG.key, LG)), ZG[SG] = LG
        }
        this.blockCaster = ZG, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(GG, bG) {
        const ZG = GG.E_[bG];
        if ("function" !== typeof ZG) return ZG;
        try {
          return ZG()
        } catch (wG) {
          return this.warnOnce(`Sun shadows: no caster option for block ${bG}: ${wG instanceof Error?wG.message:String(wG)}`), null
        }
      }
      classify(GG, bG, ZG) {
        const wG = this.option(GG, bG);
        if ("none" === wG) return null;
        if (wG && wG.planes.length > 0) {
          const GG = wG.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(GG)}`,
            planes: GG
          }
        }
        if (GG.kQ[bG]) return null;
        const SG = GG.YQ[bG] ? GG.XT(bG) : null;
        if (SG && SG.length >= 6) {
          const GG = function(GG) {
            const bG = new Uint32Array(16);
            for (let ZG = 0; ZG + 6 <= GG.length; ZG += 6) {
              const wG = [0, 1, 2].map((bG => Math.max(0, Math.ceil(8 * GG[ZG + bG] - .5)))),
                SG = [0, 1, 2].map((bG => Math.min(7, Math.floor(8 * GG[ZG + bG + 3] - .5))));
              for (let GG = wG[2]; GG <= SG[2]; GG++)
                for (let ZG = wG[1]; ZG <= SG[1]; ZG++)
                  for (let LG = wG[0]; LG <= SG[0]; LG++) {
                    const wG = LG + 8 * (ZG + 8 * GG);
                    bG[wG >>> 5] |= 1 << (31 & wG)
                  }
            }
            return bG
          }(SG);
          return function(GG) {
            return GG.every((GG => 4294967295 === GG))
          }(GG) ? JZ : GG.every((GG => 0 === GG)) ? null : {
            kind: "shape",
            key: `shape:${GG.join(",")}`,
            mask: GG
          }
        }
        if (GG.zC[bG] || !GG.NK[bG]) return null;
        const LG = [0, 1, 2, 3, 4, 5].map((wG => {
          const SG = GG.xK[6 * bG + wG];
          let LG = ZG.get(SG);
          return void 0 === LG && (LG = function(GG) {
            if (!GG || GG.Yh) return null;
            const {
              I9: bG,
              N9: ZG,
              W9: wG
            } = GG;
            if (!bG || !ZG || !(ZG > 0) || void 0 === wG || !(wG >= 0)) return null;
            const SG = bG[0],
              LG = ZG * ZG * 4;
            if (!SG || SG.byteLength < LG) return null;
            const yG = Math.floor(SG.byteLength / LG),
              kG = bG[Math.floor(wG / yG)];
            if (!kG) return null;
            const UG = new Uint8Array(kG.buffer, kG.byteOffset, kG.byteLength),
              YG = wG % yG * LG;
            if (YG + LG > UG.length) return null;
            const VG = new Uint8Array(ZG * ZG);
            let pG = !1;
            for (let fG = 0; fG < VG.length; fG++) VG[fG] = UG[YG + 4 * fG + 3], pG ||= VG[fG] < yU;
            return pG ? {
              alpha: VG,
              width: ZG
            } : null
          }(GG.Uh(SG)), ZG.set(SG, LG)), LG
        }));
        if (LG.every((GG => null === GG))) return JZ;
        const yG = UU(Math.max(...LG.map((GG => {
            var bG;
            return null !== (bG = null === GG || void 0 === GG ? void 0 : GG.width) && void 0 !== bG ? bG : 1
          })))),
          kG = new Uint32Array(XZ(yG)).fill(4294967295),
          UG = LG.map((GG => null === GG ? kG : kU(GG.alpha, GG.width, GG.width, yG)));
        return {
          kind: "cutout",
          key: `cutout:${yG}:${UG.map((GG=>GG.join(","))).join("|")}`,
          size: yG,
          faces: UG
        }
      }
      allocate(GG) {
        if (this.nextCaster >= uZ) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const bG = this.nextCaster++;
        if (this.writeCaster(bG, rZ, 0, 0, 0), "shape" === GG.kind) {
          const ZG = this.allocateMask(GG.mask.length);
          ZG >= 0 && (this.sink(ZG, GG.mask), this.writeCaster(bG, zZ, ZG, 0, 8))
        } else if ("cutout" === GG.kind) {
          const ZG = XZ(GG.size),
            wG = this.allocateMask(6 * ZG);
          if (wG >= 0) {
            const SG = new Uint32Array(6 * ZG);
            GG.faces.forEach(((GG, bG) => {
              SG.set(GG, bG * ZG)
            })), this.sink(wG, SG), this.writeCaster(bG, oZ, wG, 0, GG.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(bG, GG.planes).finally((() => {
          this.planesLoading--
        })));
        return bG
      }
      async loadPlanes(GG, bG) {
        const ZG = await Promise.all(bG.map((GG => this.texture(GG.texture))));
        if (ZG.some((GG => null === GG))) return;
        const wG = ZG,
          SG = UU(Math.max(...wG.map((GG => Math.min(GG.width, GG.height))))),
          LG = XZ(SG),
          yG = this.allocateMask(bG.length * (4 + LG));
        if (yG < 0) return;
        const kG = new Uint32Array(bG.length * (4 + LG)),
          UG = 4 * bG.length;
        bG.forEach(((GG, bG) => {
          const ZG = yG + UG + bG * LG;
          kG.set(function(GG, bG) {
            const [ZG, wG] = GG.tangent, SG = Math.hypot(ZG, wG) || 1, LG = ZG / SG, yG = wG / SG, kG = GG.centre[0] * yG - GG.centre[1] * LG, UG = new Uint32Array(4);
            return new Float32Array(UG.buffer, 0, 3).set([LG, yG, kG]), UG[3] = bG, UG
          }(GG, ZG), 4 * bG), kG.set(kU(wG[bG].alpha, wG[bG].width, wG[bG].height, SG), UG + bG * LG)
        })), this.sink(yG, kG), this.writeCaster(GG, EZ, yG, bG.length, SG)
      }
      texture(GG) {
        let bG = this.textures.get(GG);
        return bG || (bG = this.loadTexture(GG).catch((bG => (this.warn(`Sun shadows: no mask for ${GG}: ${bG instanceof Error?bG.message:String(bG)}`), null))), this.textures.set(GG, bG)), bG
      }
      allocateMask(GG) {
        if (this.nextMaskWord + GG > iZ) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const bG = 32768 + this.nextMaskWord;
        return this.nextMaskWord += GG, bG
      }
      writeCaster(GG, bG, ZG, wG, SG) {
        this.sink(0 + 4 * GG, Uint32Array.of(bG, ZG, wG, SG))
      }
      warnOnce(GG) {
        this.warned.has(GG) || (this.warned.add(GG), this.warn(GG))
      }
    }
    var VU = ZG(2829);

    function pU(GG) {
      return !GG.ph && !GG.bC && !GG.sK
    }

    function fU() {
      return {
        bricks: new Uint32Array(YZ),
        cells: new Uint16Array(32768),
        special: new Uint8Array(kZ)
      }
    }
    class QU {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = GG, this.writeVoxels = bG, this.writePool = ZG, this.warn = wG, this.eyeChunk = null, this.slotChunk = new Array(bZ).fill(null), this.slotVersion = new Float64Array(bZ).fill(-1), this.slotPool = new Array(bZ).fill(null), this.starved = new Uint8Array(bZ), this.queue = [], this.queued = new Uint8Array(bZ), this.queueSorted = !0, this.freePool = new Uint32Array(CZ), this.freeCount = CZ, this.casterTable = null, this.warnedPool = !1, this.scratch = fU(), this.victimScratch = fU(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * bZ), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let SG = 0; SG < CZ; SG++) this.freePool[SG] = 65535 - SG
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return CZ - this.freeCount
      }
      chunkAdded(GG) {
        if (null === this.eyeChunk || !this.inRadius(GG.i, GG.j, GG.k)) return;
        const bG = KZ(GG.i, GG.j, GG.k);
        this.slotChunk[bG] = GG, this.slotVersion[bG] = -1, this.enqueue(bG)
      }
      update(GG, bG, ZG) {
        const wG = this.casters.blockCaster;
        if (wG !== this.casterTable) {
          this.casterTable = wG;
          for (let GG = 0; GG < bZ; GG++) this.slotVersion[GG] = -1, this.slotChunk[GG] && this.enqueue(GG)
        }
        const SG = Math.floor(GG[0] / 32),
          LG = Math.floor(GG[1] / 32),
          yG = Math.floor(GG[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== SG || this.eyeChunk[1] !== LG || this.eyeChunk[2] !== yG) && (this.eyeChunk = [SG, LG, yG], this.follow(bG), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let kG = 0; kG < bZ; kG++) {
          const GG = this.slotChunk[kG];
          GG && (GG.Tu || GG.gK !== this.slotVersion[kG]) && this.enqueue(kG)
        }
        this.drain(ZG), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(GG, bG) {
        this.records.set(bG, 4 * GG), this.windowTopStale = !0, this.writeVoxels(4 * GG, bG)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const GG = this.records;
        let bG = -1 / 0;
        for (let wG = 0; wG < GG.length; wG += 4) {
          const ZG = 255 & GG[wG + 3];
          ZG !== SZ && ZG !== LZ || !this.inRadius(GG[wG], GG[wG + 1], GG[wG + 2]) || (bG = Math.max(bG, GG[wG + 1] * xb + (GG[wG + 3] >>> 8)))
        }
        const ZG = bG === -1 / 0 ? 1 : bG + pZ;
        ZG !== this.windowTop[0] && (this.windowTop[0] = ZG, this.writeVoxels(VZ, this.windowTop))
      }
      follow(GG) {
        const bG = this.eyeChunk,
          [ZG, wG, SG] = Bb;
        for (let yG = -SG; yG <= SG; yG++)
          for (let SG = -wG; SG <= wG; SG++)
            for (let wG = -ZG; wG <= ZG; wG++) {
              var LG;
              const ZG = bG[0] + wG,
                kG = bG[1] + SG,
                UG = bG[2] + yG,
                YG = KZ(ZG, kG, UG),
                VG = this.slotChunk[YG];
              if (VG && !VG.Tu && VG.i === ZG && VG.j === kG && VG.k === UG) continue;
              const pG = null !== (LG = GG(ZG, kG, UG)) && void 0 !== LG ? LG : null;
              VG && (VG.i !== ZG || VG.j !== kG || VG.k !== UG) && this.slotPool[YG] && (this.release(YG), this.record.fill(0), this.writeRecord(YG, this.record)), this.slotChunk[YG] = pG, this.slotVersion[YG] = -1, (pG || VG) && this.enqueue(YG)
            }
      }
      requeueStarved() {
        for (let GG = 0; GG < bZ; GG++) this.starved[GG] && this.slotChunk[GG] && this.enqueue(GG)
      }
      enqueue(GG) {
        this.queued[GG] || (this.queued[GG] = 1, this.queue.push(GG), this.queueSorted = !1)
      }
      drain(GG) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const GG = new Map;
          for (const bG of this.queue) GG.set(bG, this.slotDistance(bG));
          this.queue.sort(((bG, ZG) => GG.get(ZG) - GG.get(bG))), this.queueSorted = !0
        }
        const bG = performance.now();
        let ZG = 0;
        const wG = [];
        for (; this.queue.length > 0 && (0 === ZG || performance.now() - bG < GG);) {
          const GG = this.queue.pop(),
            bG = this.slotChunk[GG];
          !bG || bG.Tu || pU(bG) ? (this.queued[GG] = 0, this.encodeSlot(GG), ZG++) : wG.push(GG)
        }
        for (let SG = wG.length - 1; SG >= 0; SG--) this.queue.push(wG[SG])
      }
      slotDistance(GG) {
        const bG = this.slotChunk[GG],
          ZG = this.eyeChunk;
        return bG ? Math.max(Math.abs(bG.i - ZG[0]), Math.abs(bG.j - ZG[1]), Math.abs(bG.k - ZG[2])) : 0
      }
      inRadius(GG, bG, ZG) {
        const wG = this.eyeChunk,
          [SG, LG, yG] = Bb;
        return Math.abs(GG - wG[0]) <= SG && Math.abs(bG - wG[1]) <= LG && Math.abs(ZG - wG[2]) <= yG
      }
      release(GG) {
        const bG = this.slotPool[GG];
        if (bG) {
          for (let GG = bG.length - 1; GG >= 0; GG--) this.freePool[this.freeCount++] = bG[GG];
          this.slotPool[GG] = null
        }
      }
      encodeSlot(GG) {
        var bG, ZG, wG, SG, LG;
        let yG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          kG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const UG = null !== (bG = null === (ZG = this.slotPool[GG]) || void 0 === ZG ? void 0 : ZG.length) && void 0 !== bG ? bG : 0;
        this.release(GG), this.starved[GG] = 0;
        const YG = this.slotChunk[GG],
          VG = this.record;
        if (!YG || YG.Tu || !YG.Wf) return this.slotChunk[GG] = null, this.slotVersion[GG] = -1, VG.fill(0), this.writeRecord(GG, VG), void(UG > 0 && this.requeueStarved());
        this.slotVersion[GG] = YG.gK;
        const pG = this.encodeBricks(YG, GG, yG, kG);
        VG[0] = YG.i, VG[1] = YG.j, VG[2] = YG.k, VG[3] = pG, this.writeRecord(GG, VG), null === (wG = this.encoded) || void 0 === wG || wG.call(this, YG), kG && (null !== (SG = null === (LG = this.slotPool[GG]) || void 0 === LG ? void 0 : LG.length) && void 0 !== SG ? SG : 0) < UG && this.requeueStarved()
      }
      encodeBricks(GG, bG, ZG, wG) {
        if (GG.kK) return wZ;
        const SG = this.casters.blockCaster,
          {
            data: LG,
            stride: yG,
            offset: kG
          } = GG.Wf,
          [UG, YG, VG] = yG,
          pG = xb,
          {
            bricks: fG,
            cells: QG,
            special: KG
          } = ZG;
        fG.fill(0), KG.fill(0);
        let hG = 0,
          dG = 0,
          JG = 0;
        for (let rG = 0; rG < pG; rG++) {
          const bG = rG >> 2,
            ZG = 3 & rG,
            wG = GG.WQ[rG],
            yG = wG === VU.c ? -1 : wG < SG.length ? SG[wG] : 0;
          if (0 !== yG)
            for (let GG = 0; GG < pG; GG++) {
              const wG = GG >> 2,
                zG = 3 & GG;
              let EG = kG + GG * UG + rG * YG;
              for (let GG = 0; GG < pG; GG++, EG += VG) {
                let kG = yG;
                if (kG < 0) {
                  const GG = LG[EG];
                  if (kG = GG < SG.length ? SG[GG] : 0, 0 === kG) continue
                }
                const UG = hZ(wG, bG, GG >> 2),
                  YG = dZ(zG, ZG, 3 & GG);
                fG[3 * UG + (YG >>> 5)] |= 1 << (31 & YG), QG[UG * yZ + YG] = kG, hG++, JG = rG, kG === JZ ? dG++ : KG[UG] = 1
              }
            }
        }
        return 0 === hG ? wZ : 32768 === dG ? SZ | JG << 8 : (this.writePoolEntries(bG, ZG, wG), this.writeVoxels(UZ + bG * YZ, fG), LZ | JG << 8)
      }
      writePoolEntries(GG, bG, ZG) {
        const {
          bricks: wG,
          cells: SG,
          special: LG
        } = bG, yG = this.entry;
        let kG = 0;
        for (let VG = 0; VG < kZ; VG++) kG += LG[VG];
        if (0 === kG) return;
        ZG && this.freeCount < kG && this.evictBeyond(GG, kG);
        const UG = new Uint32Array(ZG ? Math.min(kG, this.freeCount) : 0);
        let YG = 0;
        for (let VG = 0; VG < kZ; VG++) {
          if (!LG[VG]) continue;
          const ZG = 3 * VG;
          if (YG === UG.length) {
            this.dropSpecials(bG, VG), this.starved[GG] = 1;
            continue
          }
          const kG = this.freePool[--this.freeCount];
          UG[YG++] = kG;
          for (let GG = 0; GG < yZ; GG++) {
            const bG = wG[ZG + (GG >>> 5)] >>> (31 & GG) & 1 ? SG[VG * yZ + GG] : 0;
            1 & GG ? yG[GG >> 1] |= bG << 16 : yG[GG >> 1] = bG
          }
          wG[ZG + 2] = kG + 1, this.writePool(WZ + 32 * kG, yG)
        }
        UG.length > 0 && (this.slotPool[GG] = UG)
      }
      evictBeyond(GG, bG) {
        const ZG = this.slotDistance(GG),
          wG = [];
        for (let SG = 0; SG < bZ; SG++) SG !== GG && this.slotPool[SG] && this.slotDistance(SG) > ZG && wG.push(SG);
        wG.sort(((GG, bG) => this.slotDistance(bG) - this.slotDistance(GG)));
        for (const SG of wG) {
          if (this.freeCount >= bG) return;
          const GG = this.slotChunk[SG];
          GG && !GG.Tu && GG.Wf && (GG.gK === this.slotVersion[SG] || pU(GG)) && this.encodeSlot(SG, this.victimScratch, !1)
        }
      }
      dropSpecials(GG, bG) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const ZG = 3 * bG;
        for (let wG = 0; wG < yZ; wG++) GG.cells[bG * yZ + wG] !== JZ && (GG.bricks[ZG + (wG >>> 5)] &= ~(1 << (31 & wG)))
      }
    }
    var KU = ZG(37845);
    class hU {
      constructor(GG) {
        this.device = GG, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new AZ, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Op = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = GG.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = GG.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(GG, bG, ZG) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: wG
        } = this;
        wG.hQ(GG, bG), ZG.forEachSunShadowCaster((GG => {
          this.add(GG)
        })), wG.finish();
        const SG = 0 === wG.parts;
        if (SG && this.uploadedEmpty) return;
        this.uploadedEmpty = SG;
        const {
          queue: LG
        } = this.device, {
          words: yG
        } = wG;
        LG.writeBuffer(this.frameBuffer, 0, yG, 0, 16385), wG.refs > 0 && LG.writeBuffer(this.frameBuffer, 65540, yG, vZ, wG.refs), SG || LG.writeBuffer(this.frameBuffer, 327684, yG, aZ, wG.parts * FZ)
      }
      add(GG) {
        const bG = this.gridFor(GG);
        if (!bG) return;
        const {
          frame: ZG
        } = this, {
          Op: wG,
          worldAt: SG,
          instances: LG,
          instanceCount: yG,
          thin: kG
        } = GG;
        if (LG)
          for (let UG = 0; UG < yG; UG++) kG ? (qZ(LG, 16 * UG, wG, SG, this.Op), ZG.add(bG, this.Op)) : ZG.add(bG, LG, 16 * UG);
        else ZG.add(bG, wG, SG)
      }
      gridFor(GG) {
        let {
          geometry: bG,
          indexed: ZG,
          first: wG,
          count: SG,
          skip: LG
        } = GG, yG = this.grids.get(bG);
        yG || (yG = new Map, this.grids.set(bG, yG));
        const kG = `${ZG?wG:-1-wG}:${SG}:${null!==LG&&void 0!==LG?LG:""}`;
        let UG = yG.get(kG);
        if (void 0 !== UG || this.gridsFull) return UG;
        const YG = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = YG + 2;
        else if (YG > this.bakeDeadline) return;
        return UG = this.bake(bG, ZG, wG, SG, LG), void 0 !== UG && yG.set(kG, UG), UG
      }
      bake(GG, bG, ZG, wG, SG) {
        const LG = GG.vertexAttributes.find((GG => "position" === GG.kind)),
          yG = LG ? function(GG, bG, ZG, wG) {
            let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const LG = GG => bG ? bG[ZG + GG] : ZG + GG,
              yG = GG => null !== SG && [0, 1, 2].some((bG => {
                const ZG = LG(GG + bG);
                return ZG >= SG[0] && ZG < SG[1]
              })),
              kG = [1 / 0, 1 / 0, 1 / 0],
              UG = [-1 / 0, -1 / 0, -1 / 0];
            for (let rG = 0; rG + 2 < wG; rG += 3)
              if (!yG(rG))
                for (let bG = 0; bG < 3; bG++) {
                  const ZG = LG(rG + bG);
                  for (let bG = 0; bG < 3; bG++) kG[bG] = Math.min(kG[bG], GG[3 * ZG + bG]), UG[bG] = Math.max(UG[bG], GG[3 * ZG + bG])
                }
            const YG = Math.max(UG[0] - kG[0], UG[1] - kG[1], UG[2] - kG[2]);
            if (!(YG > 0)) return null;
            const VG = YG / 64,
              pG = [0, 0, 0],
              fG = [0, 0, 0],
              QG = [0, 0, 0];
            for (let rG = 0; rG < 3; rG++) pG[rG] = Math.min(65, Math.ceil((UG[rG] - kG[rG]) / VG) + 1), fG[rG] = kG[rG] - VG / 2, QG[rG] = fG[rG] + pG[rG] * VG;
            const KG = new Uint32Array(Math.ceil(pG[0] * pG[1] * pG[2] / 32)),
              hG = new Float64Array(9),
              dG = [0, 0, 0],
              JG = [0, 0, 0];
            for (let rG = 0; rG + 2 < wG; rG += 3)
              if (!yG(rG)) {
                for (let bG = 0; bG < 3; bG++) {
                  const ZG = LG(rG + bG);
                  for (let wG = 0; wG < 3; wG++) hG[3 * bG + wG] = GG[3 * ZG + wG]
                }
                for (let GG = 0; GG < 3; GG++) {
                  const bG = Math.min(hG[GG], hG[3 + GG], hG[6 + GG]),
                    ZG = Math.max(hG[GG], hG[3 + GG], hG[6 + GG]);
                  dG[GG] = Math.max(0, Math.floor((bG - fG[GG]) / VG - 1e-6)), JG[GG] = Math.min(pG[GG] - 1, Math.floor((ZG - fG[GG]) / VG + 1e-6))
                }
                for (let GG = dG[2]; GG <= JG[2]; GG++)
                  for (let bG = dG[1]; bG <= JG[1]; bG++)
                    for (let ZG = dG[0]; ZG <= JG[0]; ZG++)
                      if (nZ(hG, fG[0] + (ZG + .5) * VG, fG[1] + (bG + .5) * VG, fG[2] + (GG + .5) * VG, VG / 2)) {
                        const wG = ZG + pG[0] * (bG + pG[1] * GG);
                        KG[wG >>> 5] |= 1 << (31 & wG)
                      }
              } return {
              words: KG,
              lo: fG,
              hi: QG,
              cell: VG,
              dims: pG
            }
          }((0, KU.j)(LG, GG.vertexCount), bG ? GG.indexData : null, ZG, wG, SG) : null;
        if (!yG) return null;
        const {
          words: kG,
          ...UG
        } = yG;
        if (this.gridTop + kG.length > lZ) return void(this.gridsFull = !0);
        const YG = this.gridTop;
        return this.gridTop += kG.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * YG, kG), {
          ...UG,
          at: YG
        }
      }
    }
    const dU = Math.cos(1 * Math.PI / 180);

    function JU(GG, bG) {
      return GG[0] * bG[0] + GG[1] * bG[1] + GG[2] * bG[2] < dU
    }
    async function rU(GG) {
      const {
        pixels: bG,
        width: ZG,
        height: wG
      } = await Gb(GG), SG = new Uint8Array(ZG * wG);
      for (let LG = 0; LG < SG.length; LG++) SG[LG] = bG[4 * LG + 3];
      return {
        width: ZG,
        height: wG,
        alpha: SG
      }
    }
    class zU {
      constructor(GG, bG) {
        this.device = GG, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(eZ.q), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = GG.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = GG.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * fZ,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = GG.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [ZG, wG, SG] = eZ.t;
        this.volume = GG.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: ZG,
            height: wG,
            depthOrArrayLayers: SG
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = GG.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = GG.createBuffer({
          label: "sun-shadow-volume-work",
          size: eZ.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = bG ? new hU(GG) : null, this.entityStandIn = bG ? null : GG.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var GG;
        null === (GG = this.stopWindow) || void 0 === GG || GG.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var GG, bG;
        const ZG = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || ZG.push("Lite sun shadow volume pipeline compiling");
        const wG = null !== (GG = null === (bG = this.casters) || void 0 === bG ? void 0 : bG.planesLoading) && void 0 !== GG ? GG : 0;
        return wG > 0 && ZG.push(`${wG} Lite sun shadow plane casters loading their textures`), ZG
      }
      entries() {
        var GG, bG, ZG, wG;
        const SG = Nb.m;
        return [{
          binding: SG.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: SG.Wf,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: SG.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: SG.volume,
          resource: this.volumeView
        }, {
          binding: SG.sampler,
          resource: this.volumeSampler
        }, {
          binding: SG.entities,
          resource: {
            buffer: null !== (GG = null === (bG = this.entities) || void 0 === bG ? void 0 : bG.frameBuffer) && void 0 !== GG ? GG : this.entityStandIn
          }
        }, {
          binding: SG.entityGrids,
          resource: {
            buffer: null !== (ZG = null === (wG = this.entities) || void 0 === wG ? void 0 : wG.gridBuffer) && void 0 !== ZG ? ZG : this.entityStandIn
          }
        }]
      }
      prepare(GG, bG, ZG) {
        var wG;
        this.entitiesThisFrame = !1;
        const SG = null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.sunShadowReach()) && void 0 !== wG ? wG : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!ZG || !SG.sunShadow && !SG.airShadow) return void(this.volumeHolds = null);
        if (GG.Op.sGG !== xb) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${GG.Op.sGG}; everything is lit.`)));
        const LG = this.start(GG);
        this.casters.update(GG.LQ, GG.LQ.YQ.length);
        const yG = GG.zf;
        for (let fG = 0; fG < 3; fG++) this.eye[fG] = bG[fG] + yG[fG];
        const kG = (0, eZ.A)(this.eye);
        this.staleNear = kG;
        const UG = GG.Op.Qh;
        LG.update(this.eye, ((GG, bG, ZG) => UG.Kh(GG, bG, ZG)), 1);
        const YG = (0, eZ.v)(ZG.XGG()),
          VG = LG.eyeChunk,
          pG = this.uniformInts;
        for (let fG = 0; fG < 3; fG++) pG[fG] = VG[fG], pG[4 + fG] = kG[fG];
        this.entitiesThisFrame = null !== this.entities && SG.sunShadow, this.entitiesThisFrame && MZ(this.uniformFloats, 8, bG, YG), null !== this.volumeHolds && (this.castersWritten || JU(YG, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(kG, YG, VG)
      }
      markStale(GG) {
        const bG = this.staleNear,
          ZG = xb,
          wG = [GG.i * ZG, GG.j * ZG, GG.k * ZG];
        for (let LG = 0; LG < 3; LG++)
          if (wG[LG] + ZG <= bG[LG] - ZG || wG[LG] >= bG[LG] + eZ.t[LG] + ZG) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const SG = this.stale;
        for (let LG = 0; LG < SG.length; LG += 4)
          if (SG[LG] === GG.i && SG[LG + 1] === GG.j && SG[LG + 2] === GG.k) return void(SG[LG + 3] = this.swept);
        if (16 === SG.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        SG.push(GG.i, GG.j, GG.k, this.swept)
      }
      writeStale() {
        const GG = this.swept,
          bG = this.stale;
        this.staleAll && GG - this.staleAllSwept >= eZ.k && (this.staleAll = !1, bG.length = 0);
        let ZG = 0;
        for (let SG = 0; SG < bG.length; SG += 4)
          if (GG - bG[SG + 3] < eZ.k) {
            for (let GG = 0; GG < 4; GG++) bG[ZG + GG] = bG[SG + GG];
            ZG += 4
          } bG.length = ZG;
        const wG = this.uniformInts;
        wG[3] = this.staleAll ? 5 : ZG / 4;
        for (let SG = 0; SG < 4; SG++)
          for (let GG = 0; GG < 3; GG++) wG[16 + 4 * SG + GG] = 4 * SG < ZG ? bG[4 * SG + GG] * xb : 0
      }
      writeUniform() {
        const GG = this.uniformInts;
        let bG = this.uniformWritten;
        if (bG) {
          let ZG = !0;
          for (let wG = 0; wG < GG.length && ZG; wG++) ZG = GG[wG] === bG[wG];
          if (ZG) return
        }
        bG ??= this.uniformWritten = new Int32Array(GG.length), bG.set(GG), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(GG) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, GG)
      }
      computeVolume(GG, bG, ZG) {
        const wG = this.buildVolumePass();
        if (!wG) return void(this.volumeHolds = null);
        const SG = (0, eZ.x)(this.volumeHolds, GG);
        this.volumeHolds = GG;
        const LG = 1 === SG.length && SG[0].size.every(((GG, bG) => GG === eZ.t[bG])),
          yG = this.sweptChunk,
          kG = this.sweptLight,
          UG = bG[0] !== kG[0] || bG[1] !== kG[1] || bG[2] !== kG[2],
          YG = ZG[0] !== yG[0] || ZG[1] !== yG[1] || ZG[2] !== yG[2],
          VG = UG && JU(bG, kG);
        if ((LG || this.written || YG || VG) && (this.fastLeft = eZ.k), LG || this.written || UG || YG) {
          this.written = !1;
          for (let GG = 0; GG < 3; GG++) yG[GG] = ZG[GG], kG[GG] = bG[GG];
          this.sweepLeft = LG ? 0 : eZ.k
        }
        if (LG ? this.swept += eZ.k : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, SG.push(...(0, eZ.E)(GG, this.slice)), this.slice = (this.slice + 1) % eZ.k, this.swept++), 0 === SG.length) return;
        const pG = (0, eZ.F)(this.workData, bG, SG);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const fG = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          QG = fG.beginComputePass({
            label: "sun-shadow-volume"
          });
        QG.setPipeline(wG.pipeline), QG.setBindGroup(HZ.group, wG.bindGroup), QG.dispatchWorkgroups(Math.ceil(pG / eZ.o)), QG.end(), this.device.queue.submit([fG.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const GG = HZ,
          bG = GPUShaderStage.COMPUTE,
          ZG = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: GG.uniform,
              visibility: bG,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: GG.Wf,
              visibility: bG,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: GG.special,
              visibility: bG,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: GG.work,
              visibility: bG,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: GG.volume,
              visibility: bG,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          wG = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: ZG,
            entries: [{
              binding: GG.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: GG.Wf,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: GG.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: GG.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: GG.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [ZG]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: tZ()
            }),
            entryPoint: "main"
          }
        }).then((GG => {
          this.volumePass = {
            pipeline: GG,
            bindGroup: wG
          }
        }), (GG => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(GG)}`)
        })), null
      }
      start(GG) {
        if (this.window) return this.window;
        const bG = (GG, bG) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * GG, bG)
        };
        this.casters = new YU(((GG, ZG) => {
          this.castersWritten = !0, bG(GG, ZG)
        }), rU);
        const ZG = new QU(this.casters, ((GG, bG) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * GG, bG)
        }), bG);
        ZG.encoded = GG => {
          this.markStale(GG)
        };
        const wG = GG => {
          ZG.chunkAdded(GG)
        };
        return GG.Op.on("chunkAdded", wG), this.stopWindow = () => {
          GG.Op.removeListener("chunkAdded", wG)
        }, this.window = ZG, ZG
      }
    }
    var EU = ZG(39106),
      oU = ZG(39111);
    const XU = 0,
      uU = 3,
      iU = 4,
      CU = 5;

    function WU(GG, bG, ZG, wG) {
      GG.drawOffset(bG, wG + XU), bG[wG + uU] = GG.drawTime(), ZG[wG + iU] = GG.ring.drawStart(), ZG[wG + CU] = GG.ring.drawCount()
    }
    const mU = `\n${sw}\n\nconst MAX_STOPS = ${oU.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${oU.b/4}>,\n\tcolor1: array<vec4f, ${oU.b}>,\n\tcolor2: array<vec4f, ${oU.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${oU.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${oU.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var IU = ZG(42043);
    class FU {
      constructor(GG, bG, ZG, wG) {
        this.device = GG, this.system = bG, this.frameIndex = ZG, this.bindings = wG, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, IU.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (GG, bG) => {
          this.device.queue.writeBuffer(this.ring, GG * oU.c * 4, this.system.ring.records, GG * oU.c, (bG - GG) * oU.c)
        };
        const {
          name: SG
        } = bG;
        this.ring = GG.createBuffer({
          label: `particles-${SG}`,
          size: bG.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = GG.createBuffer({
          label: `particles-uniforms-${SG}`,
          size: 4 * oU.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(GG) {
        const bG = (0, IU.c)(this.system, this.uniformBits, GG);
        bG && (this.uniformBits = bG, this.device.queue.writeBuffer(this.uniforms, 0, bG))
      }
      bind() {
        const {
          system: GG
        } = this, bG = this.texture;
        (0, IU.m)(GG, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${GG.name}`,
          size: [oU.f, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * oU.f
        }, [oU.f, 1]));
        const ZG = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === bG.view && this.boundSampler === bG.sampler && this.boundRamp === ZG || (this.boundView = bG.view, this.boundSampler = bG.sampler, this.boundRamp = ZG, this.bindGroup = this.device.createBindGroup({
          label: `particles-${GG.name}`,
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
            resource: bG.sampler
          }, {
            binding: 3,
            resource: bG.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: ZG
          }]
        }))
      }
      destroy() {
        var GG;
        this.ring.destroy(), this.uniforms.destroy(), null === (GG = this.ramp) || void 0 === GG || GG.destroy()
      }
    }
    class vU {
      constructor(GG, bG) {
        this.device = GG, this.resources = bG, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, ab.e)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (GG, bG) => (this.bindTarget(bG), {
            renderable: this.renderable,
            pipeline: Ib(this.device, bG),
            draw: GG => bG === this.preparedTarget ? this.draw(GG) : 0
          })
        }
      }
      rebind(GG) {
        this.device = GG, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [bG, ZG] of this.systems) {
          const wG = new FU(GG, bG, ZG.frameIndex, this.bindings),
            SG = bG.ring.drawCount();
          SG > 0 && wG.upload(0, SG), this.systems.set(bG, wG)
        }
      }
      build() {
        const {
          device: GG
        } = this, bG = GG.createBindGroupLayout({
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
        this.frameLayout = GG.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = GG.createPipelineLayout({
          bindGroupLayouts: [ub(GG), bG, this.frameLayout]
        }), this.module = GG.createShaderModule({
          label: "particles",
          code: mU
        });
        const ZG = GG.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        GG.queue.writeTexture({
          texture: ZG
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: bG,
          rampSampler: GG.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: ZG.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get XSG() {
        return this.systems.size
      }
      reset() {
        for (const GG of this.systems.keys()) GG.reset()
      }
      describePendingWork() {
        return (0, EU.c)(this.systems.keys(), "Lite")
      }
      rM(GG, bG) {
        const ZG = new EU.b(GG, bG, this);
        return this.systems.set(ZG, new FU(this.device, ZG, this.allocateFrameIndex(), this.bindings)), ZG
      }
      pGG(GG, bG) {
        for (const ZG of this.systems.keys()) ZG.pGG(GG, bG)
      }
      canDraw(GG) {
        const bG = this.systems.get(GG),
          ZG = GG.texture ? this.resources.boundTexture(GG.texture) : null;
        if (!bG || !ZG || !this.targetPipelines) return !1;
        if (bG.texture = ZG, bG.pipelines.length = 0, !Sb(GG.blendMode)) return this.warnOnce(`blend:${GG.blendMode}`, `particle blend mode ${GG.blendMode} is not drawn (${GG.name})`), !0;
        const wG = (0, TG.o)(GG.blendMode);
        for (const SG of wG) {
          const GG = this.pipelineFor(SG);
          if (!1 === GG) return bG.pipelines.length = 0, !0;
          GG && bG.pipelines.push(GG)
        }
        return bG.pipelines.length === wG.length
      }
      disposeStopped(GG) {
        GG.dispose()
      }
      remove(GG) {
        const bG = this.systems.get(GG);
        bG && (this.systems.delete(GG), bG.destroy(), this.freeFrameIndices.push(bG.frameIndex))
      }
      prepare(GG) {
        const bG = GG.animationRatio || 1;
        Fb(this.renderable._worldCenter, GG, Cb), this.preparedTarget = this.target, this.draws.length = 0;
        let ZG = 0;
        for (const wG of this.systems.values()) {
          const GG = wG.system;
          if (!GG.animateIfActive(bG)) continue;
          if (GG.ring.takeUploads(wG.upload), !GG.hasLiveParticles() || 0 === wG.pipelines.length) continue;
          wG.writeUniforms(this.warnOnce), wG.bind();
          const SG = 64 * wG.frameIndex;
          wG.count = GG.ring.drawCount(), WU(GG, this.frameData, this.frameBits, SG), ZG = Math.max(ZG, SG + 64), this.draws.push(wG)
        }
        ZG > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, ZG)
      }
      draw(GG) {
        let bG = 0,
          ZG = null;
        for (const wG of this.draws) {
          GG.setBindGroup(1, wG.bindGroup), GG.setBindGroup(2, this.frameBindGroup, [256 * wG.frameIndex]);
          for (const SG of wG.pipelines) SG !== ZG && (GG.setPipeline(SG), ZG = SG), GG.draw(4, wG.count), bG++
        }
        return bG
      }
      bindTarget(GG) {
        this.target = GG;
        const bG = `${GG._colorFormat}|${GG._depthStencilFormat}|${GG._depthCompare}|${GG._sampleCount}`;
        let ZG = this.pipelines.get(bG);
        ZG || (ZG = new Map, this.pipelines.set(bG, ZG)), this.targetPipelines = ZG
      }
      pipelineFor(GG) {
        var bG;
        const ZG = this.targetPipelines,
          wG = ZG.get(GG);
        if (void 0 !== wG) return wG;
        ZG.set(GG, null);
        const SG = this.target,
          LG = GG === TG.e,
          yG = null !== (bG = SG._depthCompare) && void 0 !== bG ? bG : ib,
          {
            device: kG
          } = this;
        return kG.createRenderPipelineAsync({
          label: `particles-${GG}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: rb({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: LG ? 1 : 0
            }
          }, SG, Lb((0, TG.k)(GG))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: SG._depthStencilFormat ? {
            format: SG._depthStencilFormat,
            depthCompare: yG,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: SG._sampleCount
          }
        }).then((bG => {
          ZG.set(GG, bG)
        }), (bG => {
          ZG.set(GG, !1), console.error("Lite particle pipeline failed", bG), Vb(kG, "particles", `blend-${GG}`, bG)
        })), null
      }
      allocateFrameIndex() {
        const GG = this.freeFrameIndices.pop();
        if (void 0 !== GG) return GG;
        const bG = this.nextFrameIndex++;
        if (64 * (bG + 1) > this.frameData.length) {
          const GG = new Float32Array(2 * this.frameData.length);
          GG.set(this.frameData), this.frameData = GG, this.frameBits = new Uint32Array(GG.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return bG
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
    class aU {
      constructor(GG, bG, ZG, wG, SG) {
        this.lite = GG, this.canvas = bG, this.info = ZG, this.resources = SG, this.iwG = !1, this.needPOTTextures = !1, this.F_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = bG.width, this.renderHeight = bG.height, this.caps = {
          maxTextureSize: wG.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: wG.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(GG) {
        this.lite = GG, (0, qG.r)(GG, this.renderWidth, this.renderHeight)
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
      setSize(GG, bG) {
        if (this.renderWidth === GG && this.renderHeight === bG) return !1;
        const ZG = this.renderWidth,
          wG = this.renderHeight;
        this.renderWidth = GG, this.renderHeight = bG;
        const SG = this.lite;
        if (null === SG) return !0;
        try {
          (0, qG.r)(SG, GG, bG)
        } catch (LG) {
          if (LG instanceof DOMException && "InvalidStateError" === LG.name) {
            this.renderWidth = ZG, this.renderHeight = wG;
            try {
              (0, qG.r)(SG, ZG, wG)
            } catch {
              this.canvas.width = ZG, this.canvas.height = wG
            }
            return console.warn("WebGPU could not allocate render targets for resize", GG, bG, LG.message), !1
          }
          throw LG
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
      yE() {
        const GG = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : GG - this.lastFrameTime, this.lastFrameTime = GG
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(GG, bG) {
        const ZG = document.createElement("canvas");
        return ZG.width = GG, ZG.height = bG, ZG
      }
      j_(GG, bG) {
        var ZG;
        return null !== (ZG = this.resources.j_.get(GG)) && void 0 !== ZG ? ZG : new fb(this.resources, GG, bG)
      }
      atlasArrays(GG) {
        return this.resources.atlasArrays(GG)
      }
    }
    class cU {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(GG) {
        this.fov = GG.fov, this.nearPlane = GG.near, this.farPlane = GG.far;
        const bG = GG.worldMatrix;
        for (let ZG = 0; ZG < 16; ZG++)
          if (this.worldMatrix[ZG] !== bG[ZG]) return this.worldMatrix.set(bG), void this.worldMatrixVersion++
      }
    }
    class lU {
      constructor(GG, bG, ZG, wG) {
        this.canvas = bG, this.options = ZG, this.LZG = void 0, this.backendName = "WebGPU (Lite)", this.Z5 = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new cU, this.lastFrameTime = 0, this.engine = void 0, this.Ah = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.HK = null, this.firstTerrain = null, this.trialFrames = 0, this.install(GG);
        const {
          resources: SG,
          meshes: LG
        } = GG;
        this.resources = SG, this.particles = GG.particles, this.LZG = new aU(GG.engine, bG, wG, GG.device.limits, SG), (0, mG.B)({
          Ik: GG => {
            aG(GG) && SG.textureSlot(GG)
          },
          loaded: GG => aG(GG) ? SG.textureLoaded(GG) : null,
          canvasUpdated: (GG, bG, ZG) => {
            aG(GG) && SG.canvasUpdated(GG, bG, ZG)
          }
        }), this.Z5 = LG.Z5, this.modelMeshes = LG.modelMeshes
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
      install(GG) {
        this.engine = GG.engine, this.Ah = GG.Ah, this.sceneTask = GG.sceneTask, this.device = GG.device, this.liteTerrain = GG.terrain, this.meshes = GG.meshes, this.sunShadow = GG.sunShadow;
        const bG = new eG(GG.device.lost);
        this.refusals = bG, bG.deviceLost.then((() => {
          var bG;
          bG = GG.device, Ub.add(bG)
        })), GG.Ah.camera = this.camera
      }
      async rebuild() {
        var GG, bG, ZG, wG, SG;
        const LG = await AU();
        this.halted = !0, this.liteTerrain.retire(), null === (GG = this.sunShadow) || void 0 === GG || GG.dispose(), this.LZG.detach();
        try {
          (0, nG.e)(this.engine)
        } catch (VG) {
          console.warn("Lite: disposing the lost device's engine threw", VG)
        }
        const yG = {
            width: this.LZG.renderWidth,
            height: this.LZG.renderHeight
          },
          kG = await sU(this.canvas, this.options, yG, LG),
          UG = Eb(kG),
          YG = qU(UG);
        try {
          this.resources.rebind(kG, UG), this.particles.rebind(UG), this.Z5.dropSteady();
          const GG = {
              resources: this.resources,
              particles: this.particles,
              Z5: this.Z5,
              modelMeshes: this.modelMeshes
            },
            bG = await nU(kG, UG, this.options, GG),
            ZG = YG();
          if (null !== ZG) throw new Error(`WebGPU device lost while Lite was rebuilding (${ZG.reason}): ${ZG.message}`);
          const {
            r: wG,
            g: SG,
            b: LG
          } = this.Ah.clearColor;
          this.install(bG), this.setClearColour(wG, SG, LG), this.LZG.rebind(kG)
        } catch (VG) {
          throw UG.destroy(), VG
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (bG = this.HK) || void 0 === bG || bG.resize(), null === (ZG = this.HK) || void 0 === ZG || null === (wG = ZG.wf) || void 0 === wG || null === (SG = wG.QE) || void 0 === SG || SG.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((GG, bG) => {
          this.firstTerrain = {
            drawn: GG,
            failed: bG
          }
        }))
      }
      get castsEntitySunShadows() {
        var GG, bG;
        return null !== (GG = null === (bG = this.sunShadow) || void 0 === bG ? void 0 : bG.tracesEntities) && void 0 !== GG && GG
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(GG) {
        this.HK = GG, this.modelMeshes.attach(GG.model, GG.sceneMirror);
        const bG = GG.Ah;
        this.setClearColour(bG.clearColor.r, bG.clearColor.g, bG.clearColor.b), bG.draw = () => {
          this.drawFrame(GG, bG)
        }
      }
      render(GG) {
        if (!this.refusals.lost && !this.halted) {
          try {
            this.LZG.yE(), GG.Ah.render()
          } catch (bG) {
            throw this.refusals.frameFailed(bG), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(bG), this.firstTerrain = null), bG
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var GG, bG, ZG, wG;
        const SG = [...this.particles.describePendingWork(), ...null !== (GG = null === (bG = this.sunShadow) || void 0 === bG ? void 0 : bG.describePendingWork()) && void 0 !== GG ? GG : []],
          LG = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (ZG = this.terrain.sceneDepth) && void 0 !== ZG && ZG.compiling ? 1 : 0) + (null !== (wG = this.terrain.shadowMask) && void 0 !== wG && wG.compiling ? 1 : 0);
        LG > 0 && SG.push(`${LG} Lite pipelines compiling`);
        const yG = this.terrain.buffersAwaitingVerdict;
        yG > 0 && SG.push(`${yG} Lite terrain buffers awaiting their out-of-memory verdict`);
        const kG = this.resources.texturesLoading;
        return kG > 0 && SG.push(`${kG} Lite textures loading`), SG
      }
      prepareTexture(GG) {
        return null !== this.resources.boundTexture(GG) || this.resources.textureFailed(GG)
      }
      drawFrame(GG, bG) {
        var ZG, wG, SG, LG, yG, kG;
        const UG = Jk(GG);
        this.camera.copyFromView(UG), this.setClearColour(UG.clearColour[0], UG.clearColour[1], UG.clearColour[2]), null === (ZG = this.sunShadow) || void 0 === ZG || ZG.prepare(GG.wf, UG.eye, null !== (wG = GG.wf.OQ) && void 0 !== wG ? wG : null), this.terrain.prepare(GG, UG), null === (SG = this.terrain.sceneDepth) || void 0 === SG || SG.setPlanes(UG.near, UG.far), null === (LG = this.terrain.shadowMask) || void 0 === LG || LG.prepare(UG), Zk(this.sceneTask), this.meshes.prepare(bG, UG, GG.model.earthSky, null !== (yG = GG.wf.OQ) && void 0 !== yG ? yG : null), this.particles.prepare(UG);
        const YG = performance.now();
        this.resources.flushUploads(), null === (kG = this.sunShadow) || void 0 === kG || kG.traceEntities(this.meshes);
        try {
          (0, qG.o)(this.engine, this.lastFrameTime > 0 ? YG - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = YG, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(YG), this.firstTerrain = null)
      }
      setClearColour(GG, bG, ZG) {
        const wG = this.Ah.clearColor;
        wG.r = GG, wG.g = bG, wG.b = ZG, wG.a = 1
      }
    }

    function jU(GG) {
      const bG = {};
      for (const ZG in GG.limits) {
        const wG = GG.limits[ZG];
        "number" === typeof wG && (bG[ZG] = wG)
      }
      return bG
    }
    const PU = "WebGPU device lost while Lite was starting";
    async function MU(GG, bG) {
      const ZG = await AU(),
        wG = ZG.info,
        SG = {
          vendor: (null === wG || void 0 === wG ? void 0 : wG.vendor) || "unknown vendor",
          renderer: (null === wG || void 0 === wG ? void 0 : wG.architecture) || "unknown renderer",
          version: (null === wG || void 0 === wG ? void 0 : wG.description) || "unknown version"
        };
      GG.style.background = "black";
      const LG = await sU(GG, bG, bG.bufferSize, ZG),
        yG = Eb(LG),
        kG = qU(yG);
      try {
        const ZG = new lU(await nU(LG, yG, bG, null), GG, bG, SG),
          wG = kG();
        if (null !== wG) {
          const {
            reason: GG,
            message: bG
          } = wG;
          throw Object.assign(new Error(`${PU} (${GG}): ${bG}`), {
            fallbackReason: PU
          })
        }
        return ZG
      } catch (UG) {
        throw yG.destroy(), null === kG() ? UG : (0, bk.f)(UG, "device")
      }
    }
    async function AU() {
      const GG = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!GG) throw (0, bk.f)(new Error("No WebGPU adapter"), "no_adapter");
      return GG
    }
    async function sU(GG, bG, ZG, wG) {
      let SG;
      try {
        SG = await (0, qG.e)(GG, {
          msaaSamples: bG.MZG ? 4 : 1,
          requiredLimits: jU(wG),
          alphaMode: "premultiplied"
        })
      } catch (yG) {
        throw (0, bk.f)(yG, "#47" === (null === (LG = yG) || void 0 === LG ? void 0 : LG.message) ? "no_adapter" : "device")
      }
      var LG;
      return null !== ZG && (0, qG.r)(SG, ZG.width, ZG.height), SG
    }

    function qU(GG) {
      let bG = null;
      return GG.lost.then((GG => {
        bG = GG, console.error(`WebGPU device lost (${GG.reason}): ${GG.message}`)
      })), () => bG
    }
    async function nU(GG, bG, ZG, wG) {
      var SG, LG;
      let {
        sceneDepth: yG,
        sunShadow: kG
      } = ZG;
      const UG = (0, gG.e)(GG),
        YG = null !== (SG = null === wG || void 0 === wG ? void 0 : wG.resources) && void 0 !== SG ? SG : new xy(GG, bG),
        VG = new bU(bG),
        pG = new ly(bG, YG, (GG => function(GG, bG) {
          for (const wG of ob(GG)) {
            var ZG;
            if (wG._targetSignature === bG) return null !== (ZG = wG._sceneBG) && void 0 !== ZG ? ZG : null
          }
          return null
        }(UG, GG)), null === wG || void 0 === wG ? void 0 : wG.Z5, null === wG || void 0 === wG ? void 0 : wG.modelMeshes),
        fG = null !== (LG = null === wG || void 0 === wG ? void 0 : wG.particles) && void 0 !== LG ? LG : new vU(bG, YG);
      for (const hG of function(GG, bG, ZG) {
          return [bG.opaqueRenderable, GG.opaqueRenderable, GG.skyLastRenderable, ZG.renderable, bG.transparentRenderable, GG.transparentRenderable, GG.frontRenderable]
        }(pG, VG, fG)) zb(UG, hG);
      const QG = function(GG) {
        for (const bG of ob(GG))
          if ("Ah" === bG.name) return bG;
        throw new Error("Lite: the scene has no render task named scene")
      }(UG);
      yG && VG.installSceneDepth(QG, GG);
      const KG = kG ? new zU(bG, kG.entities) : null;
      return VG.sunShadow = KG, KG && null !== kG && void 0 !== kG && kG.entities && (VG.shadowMask = new lk(bG, QG, GG, VG)), pG.sunShadow = KG, await (0, gG.f)(UG), {
        engine: GG,
        Ah: UG,
        sceneTask: QG,
        device: bG,
        terrain: VG,
        meshes: pG,
        sunShadow: KG,
        resources: YG,
        particles: fG
      }
    }
  },
  41084: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => KG,
      b: () => SG,
      f: () => wG,
      h: () => fG,
      i: () => VG,
      j: () => dG,
      l: () => LG,
      m: () => kG,
      q: () => UG,
      u: () => yG,
      v: () => hG,
      x: () => QG
    });
    const wG = 3,
      SG = 0,
      LG = 1,
      yG = 2,
      kG = {
        uniform: 3,
        Wf: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      UG = 10,
      YG = "BloxdPackInputs",
      VG = "bloxdPackInputs",
      pG = [{
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
      fG = 80;

    function QG() {
      const GG = pG.map((GG => {
        let {
          name: bG,
          type: ZG
        } = GG;
        return `    ${bG}: ${ZG},\n`
      })).join("");
      return `struct ${YG} {\n${GG}}\n@group(${wG}) @binding(${SG}) var<uniform> ${VG}: ${YG};\n`
    }

    function KG(GG, bG) {
      const ZG = new DataView(GG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, fG),
        [wG, SG, LG, yG, kG, UG] = pG;
      ZG.setFloat32(wG.offset, bG.seconds, !0), ZG.setUint32(SG.offset, bG.lit ? 1 : 0, !0);
      for (let YG = 0; YG < 3; YG++) ZG.setInt32(LG.offset + 4 * YG, bG.renderOffset[YG], !0), ZG.setFloat32(yG.offset + 4 * YG, bG.XGG[YG], !0), ZG.setFloat32(kG.offset + 4 * YG, bG.eyePosition[YG], !0), ZG.setFloat32(UG.offset + 4 * YG, bG.shadowDirection[YG], !0)
    }

    function hG(GG) {
      const bG = new Uint32Array(Math.max(1, GG.length));
      return GG.forEach(((GG, ZG) => {
        let {
          id: wG,
          rotation: SG
        } = GG;
        bG[ZG] = 65535 & wG | (3 & SG) << 16
      })), bG
    }
    const dG = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);