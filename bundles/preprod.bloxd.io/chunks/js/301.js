export const id = 301;
export const ids = [301];
export const modules = {
  45075: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH,
      c: () => tH,
      d: () => hH,
      f: () => CH
    });
    var AH = LH(38071),
      rH = LH(39627),
      SH = LH(39624);

    function hH(HH, BH, LH, AH) {
      const rH = SH.x;
      BH.fill(0), HH.gravity.toArray(BH, rH.gravity), HH.colorDead.toArray(BH, rH.colorDead), LH[rH.ramp] = HH.useRampGradients ? 1 : 0;
      const hH = HH.getColorGradients(),
        tH = GH(HH, hH, "colour", AH);
      LH[rH.colorCount] = tH;
      for (let SH = 0; SH < tH; SH++) {
        var zH;
        const HH = hH[YH(hH, SH)];
        BH[rH.colorPositions + SH] = HH.gradient, HH.color1.toArray(BH, rH.color1 + 4 * SH), (null !== (zH = HH.color2) && void 0 !== zH ? zH : HH.color1).toArray(BH, rH.color2 + 4 * SH)
      }
      const CH = HH.getVelocityGradients(),
        EH = GH(HH, CH, "EW", AH);
      LH[rH.velocityCount] = EH;
      for (let SH = 0; SH < EH; SH++) xH(BH, rH.EW + 4 * SH, CH[YH(CH, SH)]);
      const XH = HH.useRampGradients ? HH.getColorRemapGradients() : null,
        uH = GH(HH, XH, "colour remap", AH);
      LH[rH.remapCount] = uH;
      for (let SH = 0; SH < uH; SH++) xH(BH, rH.remap + 4 * SH, XH[YH(XH, SH)])
    }

    function tH() {
      return {
        key: [],
        texels: new Uint8Array(4 * SH.k)
      }
    }
    const zH = [];

    function CH(HH, BH) {
      return EH(HH, zH), !MH(zH, BH.key) && (BH.key.length = 0, BH.key.push(...zH), BH.key.length > 0 && function(HH, BH) {
        for (let LH = 0; LH < SH.k; LH++) rH.o.GetCurrentGradient(LH / SH.k, HH, ((HH, BH, LH) => {
          AH.Color3.LerpToRef(HH.color, BH.color, LH, XH)
        })), BH[4 * LH] = 255 * XH.r, BH[4 * LH + 1] = 255 * XH.g, BH[4 * LH + 2] = 255 * XH.b, BH[4 * LH + 3] = 255
      }(HH.getRampGradients(), BH.texels), !0)
    }

    function EH(HH, BH) {
      BH.length = 0;
      const LH = HH.useRampGradients ? HH.getRampGradients() : null;
      if (null !== LH && void 0 !== LH && LH.length) {
        BH.push(LH.length);
        for (const HH of LH) BH.push(HH.gradient, HH.color.r, HH.color.g, HH.color.b)
      }
    }
    const XH = new AH.Color3;

    function GH(HH, BH, LH, AH) {
      return BH ? BH.length > SH.b ? (AH(`particleStops:${LH}`, `GPU particles use the first 2 and last ${SH.b-2} of more than ${SH.b} ${LH} gradient stops (${HH.name})`), SH.b) : BH.length : 0
    }

    function YH(HH, BH) {
      return BH < 2 || HH.length <= SH.b ? BH : HH.length - SH.b + BH
    }
    const uH = new Float32Array(SH.r),
      QH = new Uint32Array(uH.buffer);

    function WH(HH, BH, LH) {
      return hH(HH, uH, QH, LH), BH && MH(QH, BH) ? null : QH.slice()
    }

    function MH(HH, BH) {
      if (HH.length !== BH.length) return !1;
      for (let LH = 0; LH < HH.length; LH++)
        if (HH[LH] !== BH[LH]) return !1;
      return !0
    }

    function xH(HH, BH, LH) {
      var AH;
      HH[BH] = LH.gradient, HH[BH + 1] = LH.factor1, HH[BH + 2] = null !== (AH = LH.factor2) && void 0 !== AH ? AH : LH.factor1
    }
  },
  42449: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      const AH = BH * BH * 4,
        rH = HH[0].layers,
        SH = rH * (HH.length - 1) + HH[HH.length - 1].layers,
        hH = new Uint8Array(SH * AH);
      HH.forEach(((BH, LH) => {
        const SH = LH + 1 < HH.length ? Math.min(BH.layers, rH) : BH.layers;
        hH.set(new Uint8Array(BH.pixels.buffer, BH.pixels.byteOffset, SH * AH), LH * rH * AH)
      }));
      const tH = Math.max(1, Math.min(SH, LH || SH));
      if (tH === SH) return [{
        pixels: hH,
        layers: SH
      }];
      const zH = [];
      for (let CH = 0; CH < SH; CH += tH) {
        const HH = Math.min(SH, CH + tH);
        zH.push({
          pixels: hH.slice(CH * AH, HH * AH),
          layers: HH - CH
        })
      }
      return zH
    }
    LH.d(BH, {
      c: () => AH,
      d: () => SH
    });
    const rH = new WeakMap;

    function SH(HH, BH, LH) {
      var AH, SH;
      const hH = null !== (AH = rH.get(HH)) && void 0 !== AH ? AH : new Map;
      rH.set(HH, hH);
      const tH = null !== (SH = hH.get(BH[0])) && void 0 !== SH ? SH : [];
      hH.set(BH[0], tH);
      const zH = tH.find((HH => HH.urls.length === BH.length && HH.urls.every(((HH, LH) => HH === BH[LH]))));
      if (zH) return zH.built;
      const CH = {
        urls: [...BH],
        built: LH()
      };
      return tH.push(CH), CH.built.catch((() => {
        tH.splice(tH.indexOf(CH), 1)
      })), CH.built
    }
  },
  45067: (HH, BH, LH) => {
    function AH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const BH = new Set;
      return (LH, AH) => {
        BH.has(LH) || (BH.add(LH), console.warn(HH + AH))
      }
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  45129: (HH, BH, LH) => {
    LH.d(BH, {
      createLiteRendererAsync: () => qz,
      liteBabylonBackend: () => RH,
      setPipelineFailureHook: () => tB
    });
    var AH = LH(38071),
      rH = LH(38362),
      SH = LH(38785),
      hH = LH(38131),
      tH = LH(38797);
    class zH extends tH.b {
      constructor() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        super(...BH), this.color = new AH.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: BH[0].yN().getUniqueId(),
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
          needAlphaBlendingForMesh: HH => HH.visibility < 1 || HH.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const CH = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      EH = HH => 1 << CH.indexOf(HH),
      XH = EH("VERTEXCOLOR"),
      GH = EH("INSTANCES"),
      YH = EH("THIN_INSTANCES"),
      uH = EH("INSTANCESCOLOR"),
      QH = EH("FOG"),
      WH = EH("LITE_FRONT_LAYER");

    function MH(HH, BH, LH, AH) {
      let rH = 0;
      return HH.isVerticesDataPresent("color") && (rH |= XH), "none" !== BH && (rH |= GH), "thin" === BH && (rH |= YH, HH.isVerticesDataPresent("instanceColor") && (rH |= uH)), AH.fogEnabled && HH.applyFog && 0 !== AH.fogMode && (rH |= QH), LH >= 1 && (rH |= WH), rH
    }

    function xH(HH, BH) {
      HH.updateColor4("color", BH.color, BH.alpha)
    }
    var vH = LH(38705),
      PH = LH(38194),
      TH = LH(38141),
      UH = LH(38086),
      VH = LH(38687),
      OH = LH(38697),
      bH = LH(38118),
      kH = LH(38126),
      mH = LH(38135);
    const oH = UH.c.GLSL;
    class IH {
      constructor(HH, BH) {
        this.name = HH, this.NQ = BH, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.uR = {
          addOnce: HH => {
            this.disposers.push(HH)
          }
        }, this.uniqueId = BH.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      yN() {
        return this.NQ
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
      needAlphaBlendingForMesh(HH) {
        return (0, bH.N)(this.model, HH.visibility, HH.hasVertexAlpha)
      }
      needAlphaTestingForMesh(HH) {
        return (0, bH.O)(this.model, HH.visibility, HH.hasVertexAlpha)
      }
      dispose() {
        (0, PH.o)(this);
        for (const HH of this.disposers.splice(0)) HH()
      }
      get model() {
        return (0, bH.V)(this)
      }
    }
    const fH = new WeakSet;

    function lH(HH) {
      return fH.has(HH)
    }

    function KH(HH) {
      fH.add(HH)
    }
    const cH = {
      create: (HH, BH) => ((0, TH.m)(HH, new IH(HH.name, BH)), kH.c.defines()),
      write: () => {},
      addFeature: (HH, BH) => {
        const LH = HH.mirror;
        BH.feature === OH.h && BH.state.dirLightCount > 0 && (HH.disableLighting = !0, (0, bH.T)(HH)), "BLOXD_LIGHTING" in BH.defines && (0, PH.k)(LH), BH.feature === VH.g && ((0, vH.l)(BH.state, oH), function(HH, BH) {
          const LH = HH.yN().Iu();
          setTimeout((() => {
            LH.atlasArrays(BH.sources).then((LH => {
              (0, vH.b)(HH, BH, LH.map((HH => ({
                atlas: HH,
                layers: HH.layers
              }))), LH[0].layerWidth, oH)
            })).catch((HH => {
              console.error("Failed to build the atlas's texture arrays", HH)
            }))
          }))
        }(LH, BH.state))
      },
      texture: (HH, BH, LH) => {
        let {
          data: AH,
          sets: rH
        } = LH;
        var SH;
        (KH(HH), AH) && (HH.uvSet = null !== (SH = null === rH || void 0 === rH ? void 0 : rH.coordinatesIndex) && void 0 !== SH ? SH : 0, (0, TH.W)(HH.matrix, null !== rH && void 0 !== rH ? rH : {}))
      },
      cube: KH,
      canvas: (HH, BH, LH) => {
        let {
          width: AH,
          height: rH,
          mipmaps: SH,
          samplingMode: hH = mH.f.trilinear,
          hasAlpha: tH = !1,
          wrap: zH = mH.c.clamp
        } = LH;
        const CH = HH.Iu().createCanvas(AH, rH),
          EH = new mH.g("2d", {
            kind: "canvas",
            width: AH,
            height: rH,
            canvas: CH
          }, {
            samplingMode: hH,
            wrapU: zH,
            wrapV: zH,
            noMipmap: !SH,
            invertY: !0
          });
        return EH.hasAlpha = tH, KH(EH), EH
      }
    };
    var eH = LH(38222),
      qH = LH(37997);
    class gH {
      constructor(HH, BH, LH) {
        this.engine = HH, this.clearColor = BH, this.ambientColor = LH, this.onBeforeRenderObservable = new qH.d, this.onBeforeCameraRenderObservable = new qH.d, this.onAfterRenderObservable = new qH.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.dU = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Iu() {
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
      addPendingData(HH) {
        this.pending.push(HH)
      }
      removePendingData(HH) {
        const BH = this.pending.indexOf(HH); - 1 !== BH && this.pending.splice(BH, 1)
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

    function NH() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const RH = {
      lAH: NH,
      yrH: (HH, BH) => {
        const LH = new gH(HH.engine, AH.d.FromArray(BH.clearColor), AH.Color3.FromArray(BH.ambientColor));
        (0, hH.d)(cH, LH), HH.NQ = LH,
          function(HH, BH) {
            const LH = Object.assign((0, eH.i)(HH, "camera"), {
              layerMask: 268435455
            });
            HH.model.nodes.setWorldSource(LH.row, HH.model.view.worldMatrix), HH.camera = BH.activeCamera = LH
          }(HH, LH), (0, rH.g)(HH, ((HH, BH, LH) => (0, SH.f)(HH, BH, LH, tH.b)))
      },
      arH: () => {},
      setBabylonFog: () => {},
      BSH: NH,
      SSH: () => {},
      linesFromArrays: (HH, BH, LH) => (0, SH.f)(HH, BH, LH, zH),
      RQ: () => {},
      rSH: NH
    };
    var jH = LH(45183),
      nH = LH(45196),
      FH = LH(45209);
    class DH {
      constructor(HH) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const BH = new Promise((HH => {
          this.refused = HH
        }));
        this.deviceLost = Promise.race([HH, BH]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(HH) {
        (function(HH) {
          const {
            name: BH,
            message: LH
          } = null !== HH && void 0 !== HH ? HH : {};
          return "InvalidStateError" === BH && "string" === typeof LH && LH.startsWith("GPUDevice.")
        })(HH) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: HH.message,
          framesRefused: !0
        }))
      }
    }
    var wH = LH(42449),
      ZH = LH(39640);

    function dH(HH) {
      return Math.max(4, 4 * Math.ceil(HH / 4))
    }

    function aH(HH, BH, LH, AH) {
      const rH = HH.createBuffer({
        label: AH,
        size: dH(BH.byteLength),
        usage: LH,
        mappedAtCreation: !0
      });
      return new Uint8Array(rH.getMappedRange(), 0, BH.byteLength).set(new Uint8Array(BH.buffer, BH.byteOffset, BH.byteLength)), rH.unmap(), rH
    }

    function sH(HH, BH) {
      return Math.floor(Math.log2(Math.max(HH, BH))) + 1
    }

    function JH(HH, BH, LH, AH, rH, SH) {
      const hH = HH.createTexture({
          label: SH,
          size: {
            width: LH,
            height: AH,
            depthOrArrayLayers: rH
          },
          format: "rgba8unorm",
          mipLevelCount: sH(LH, AH),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        tH = (BH, LH, AH, SH) => {
          HH.queue.writeTexture({
            texture: hH,
            mipLevel: LH
          }, BH, {
            bytesPerRow: 4 * AH,
            rowsPerImage: SH
          }, {
            width: AH,
            height: SH,
            depthOrArrayLayers: rH
          })
        };
      tH(BH, 0, LH, AH);
      let zH = 1;
      for (const CH of function*(HH, BH, LH, AH) {
          let rH = HH,
            SH = BH,
            hH = LH;
          for (; SH > 1 || hH > 1;) {
            const HH = Math.max(1, SH >> 1),
              BH = Math.max(1, hH >> 1),
              LH = new Uint8Array(HH * BH * AH * 4),
              tH = 4 * SH;
            let zH = 0;
            for (let CH = 0; CH < AH; CH++) {
              const AH = CH * tH * hH;
              for (let CH = 0; CH < BH; CH++) {
                const BH = AH + Math.min(2 * CH, hH - 1) * tH,
                  EH = AH + Math.min(2 * CH + 1, hH - 1) * tH;
                for (let AH = 0; AH < HH; AH++) {
                  const HH = 4 * Math.min(2 * AH, SH - 1),
                    hH = 4 * Math.min(2 * AH + 1, SH - 1);
                  for (let AH = 0; AH < 4; AH++) LH[zH++] = rH[BH + HH + AH] + rH[BH + hH + AH] + rH[EH + HH + AH] + rH[EH + hH + AH] + 2 >> 2
                }
              }
            }
            yield {
              data: LH,
              width: HH,
              height: BH
            }, rH = LH, SH = HH, hH = BH
          }
        }(BH, LH, AH, rH)) tH(CH.data, zH++, CH.width, CH.height);
      return hH
    }
    const iH = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function pH(HH) {
      if (HH.startsWith("data:")) {
        const BH = HH.search(/[;,]/);
        return `data:${BH>5?HH.slice(5,BH):""} URL of ${HH.length} characters`
      }
      return HH.length > 80 ? `${HH.slice(0,80)}...` : HH
    }
    async function yH(HH) {
      const BH = await fetch(HH);
      if (!BH.ok) throw new Error(`${pH(HH)}: ${BH.status} ${BH.statusText}`);
      return createImageBitmap(await BH.blob(), iH)
    }
    async function HB(HH) {
      const BH = await yH(HH),
        LH = new OffscreenCanvas(BH.width, BH.height),
        AH = LH.getContext("2d", {
          willReadFrequently: !0
        });
      if (!AH) throw new Error("No 2D context to decode an image");
      AH.drawImage(BH, 0, 0);
      const {
        data: rH
      } = AH.getImageData(0, 0, BH.width, BH.height);
      return BH.close(), {
        pixels: new Uint8Array(rH.buffer, rH.byteOffset, rH.byteLength),
        width: LH.width,
        height: LH.height
      }
    }

    function BB(HH, BH) {
      return (0, wH.d)(HH, BH.urls, (async () => {
        const LH = await Promise.all(BH.urls.map((async (HH, LH) => {
            var AH, rH, SH, hH, tH;
            return null !== (hH = null !== (rH = null === (SH = BH.pixels) || void 0 === SH ? void 0 : SH[LH]) && void 0 !== rH ? rH : null, tH = BH.layerWidth, AH = null !== hH && void 0 !== hH && hH.byteLength && tH && hH.byteLength % (tH * tH * 4) === 0 ? {
              pixels: hH,
              layerWidth: tH,
              layers: hH.byteLength / (tH * tH * 4)
            } : null) && void 0 !== AH ? AH : await async function(HH) {
              const {
                pixels: BH,
                width: LH
              } = await HB(HH);
              return {
                pixels: BH,
                layerWidth: LH,
                layers: BH.byteLength / (LH * LH * 4)
              }
            }(HH)
          }))),
          AH = LH[0].layerWidth;
        return (0, wH.c)(LH, AH, HH.limits.maxTextureArrayLayers).map(((LH, rH) => {
          let {
            pixels: SH,
            layers: hH
          } = LH;
          return {
            texture: JH(HH, SH, AH, AH, hH, `atlas-${rH}-${pH(BH.urls[0])}`),
            layerWidth: AH,
            layers: hH
          }
        }))
      }))
    }
    const LB = new Map([
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
      AB = new Map([
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

    function rB(HH) {
      for (const BH of (0, ZH.k)(HH))
        if (!AB.has((0, ZH.j)(BH))) return !1;
      return !0
    }

    function SB(HH) {
      const BH = AB.get(HH);
      if (!BH) return null;
      const [LH, AH, rH] = BH;
      return {
        srcFactor: LB.get(LH),
        dstFactor: LB.get(AH),
        operation: rH
      }
    }
    let hB = null;

    function tB(HH) {
      hB = HH
    }
    const zB = new WeakSet;

    function CB(HH) {
      return zB.has(HH)
    }

    function EB(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var SH;
      CB(HH) || (null === (SH = hB) || void 0 === SH || SH(BH, LH, AH, rH))
    }
    class XB {
      constructor(HH) {
        this.resources = HH, this.matrixKey = {
          aX: 0
        }, this.attributesKey = {
          aX: 0
        }, this.inputs = Object.create(null);
        for (let BH = 0; BH < 4; BH++) this.inputs[`world${BH}`] = new uB(this.matrixKey, 16 * BH, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(HH, BH) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, HH, !0), BH && this.resources.vertexBufferCreated(this.attributesKey, BH, !0)
      }
    }
    class GB extends XB {
      constructor(HH, BH, LH) {
        super(HH), this.mesh = BH, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const AH = this.inputs;
        let rH = 0;
        for (const {
            size: hH
          }
          of LH) rH += hH;
        for (const {
            name: hH,
            offset: tH,
            size: zH,
            type: CH
          }
          of LH) AH[hH] = new uB(this.attributesKey, 4 * tH, 4 * rH, zH, !0, CH);
        this.rowStride = rH, HH.YHH.set(BH, this);
        const SH = BH.isVerticesDataPresent;
        BH.isVerticesDataPresent = (HH, LH) => HH in AH || SH.call(BH, HH, LH)
      }
      attach(HH, BH) {
        this.matrices = HH, this.attributes = BH, this.bind(HH, BH), this.mirror(HH, HH.length, HH.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      ZHH(HH) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, HH ? 64 * HH : void 0)
      }
      dHH() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(HH, BH) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * HH, 16 * BH)
      }
      attributeRows(HH, BH) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, HH * this.rowStride, BH * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(HH, BH, LH) {
        const AH = this.mesh._thinInstanceDataStorage;
        AH.matrixData = HH, AH.matrixBufferSize = BH, AH.worldMatrices = null, AH.instancesCount = LH
      }
    }
    class YB extends XB {
      constructor(HH, BH, LH) {
        var AH, rH, SH, hH;
        super(HH), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (AH = null === LH || void 0 === LH ? void 0 : LH.interleavedKinds) && void 0 !== AH ? AH : null, this.offsets = null !== (rH = null === LH || void 0 === LH ? void 0 : LH.interleavedOffsets) && void 0 !== rH ? rH : [], this.rowStride = null !== (SH = null === LH || void 0 === LH ? void 0 : LH.interleavedRowStride) && void 0 !== SH ? SH : 0, null === (hH = this.layout) || void 0 === hH || hH.forEach(((HH, BH) => {
          this.inputs[HH] = new uB(this.attributesKey, 4 * this.offsets[BH], 4 * this.rowStride, LH.strides[HH])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), HH.batchUploads.set(BH, this), BH.uR.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(HH) {
        const BH = this.packedBatch;
        return BH.renderSelf ? 0 === HH ? this.packedSource : BH.instances[HH - 1] : BH.instances[HH]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(HH, BH, LH, AH) {
        const rH = (BH.renderSelf ? 1 : 0) + BH.rows.length;
        if (this.frame = AH, this.count = rH, this.packedSource = HH, this.packedBatch = BH, 0 === rH) return;
        if (HH.getWorldMatrix(), 16 * rH > this.matrices.length) {
          let HH = this.matrices.length / 16;
          for (; HH < rH;) HH *= 2;
          this.matrices = new Float32Array(16 * HH), this.attributes &&= new Float32Array(HH * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let SH = 0;
        BH.renderSelf && this.packRow(SH++, HH, BH.row, LH);
        for (let hH = 0; hH < BH.rows.length; hH++) this.packRow(SH++, BH.instances[hH], BH.rows[hH], LH);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * rH), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, rH * this.rowStride)
      }
      packRow(HH, BH, LH, AH) {
        const rH = this.matrices;
        if (LH < 0) rH.set(BH.getWorldMatrix().m, 16 * HH);
        else
          for (let CH = 0; CH < 16; CH++) rH[16 * HH + CH] = AH[16 * LH + CH];
        const SH = this.attributes;
        if (!SH) return;
        const hH = BH.kF,
          tH = this.layout;
        for (let CH = 0; CH < tH.length; CH++) {
          var zH;
          const BH = null !== (zH = hH[tH[CH]]) && void 0 !== zH ? zH : 0,
            LH = HH * this.rowStride + this.offsets[CH];
          BH.toArray ? BH.toArray(SH, LH) : BH.copyToArray ? BH.copyToArray(SH, LH) : SH[LH] = BH
        }
      }
    }
    class uB {
      constructor(HH, BH, LH, AH) {
        let rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = HH, this.byteOffset = BH, this.byteStride = LH, this.size = AH, this.instanced = rH, this.type = SH, this.normalized = hH
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
    const QB = "CANVAS_ALPHA_ONE",
      WB = `override ${QB}: bool = false;`,
      MB = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function xB(HH, BH, LH) {
      var AH;
      let rH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const SH = null !== (AH = BH._colorFormat) && void 0 !== AH ? AH : "bgra8unorm",
        hH = rH ? 15 : 0;
      return LH ? {
        ...HH,
        targets: [{
          format: SH,
          blend: {
            color: LH,
            alpha: MB
          },
          writeMask: hH
        }]
      } : {
        ...HH,
        constants: {
          ...HH.constants,
          [QB]: 1
        },
        targets: [{
          format: SH,
          writeMask: hH
        }]
      }
    }

    function vB(HH, BH) {
      HH._renderables.push(BH)
    }

    function PB(HH) {
      return HH._device
    }

    function TB(HH) {
      var BH, LH;
      return null !== (BH = null === (LH = HH._frameGraph) || void 0 === LH ? void 0 : LH._tasks) && void 0 !== BH ? BH : []
    }

    function UB(HH) {
      return HH._currentEncoder
    }

    function VB(HH) {
      return HH.createBindGroupLayout({
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
    const OB = "greater-equal",
      bB = 2e5,
      kB = 1e5,
      mB = new WeakMap;

    function oB(HH, BH) {
      let LH = mB.get(HH);
      if (!LH) {
        LH = {
          module: HH.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, mB.set(HH, LH)
      }
      const AH = `${BH._colorFormat}|${BH._depthStencilFormat}|${BH._sampleCount}`;
      let rH = LH.pipelines.get(AH);
      if (!rH) {
        var SH;
        const {
          module: hH
        } = LH;
        rH = HH.createRenderPipeline({
          label: `placeholder ${AH}`,
          layout: HH.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: hH,
            entryPoint: "v"
          },
          fragment: {
            module: hH,
            entryPoint: "f",
            targets: [{
              format: null !== (SH = BH._colorFormat) && void 0 !== SH ? SH : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: BH._depthStencilFormat ? {
            format: BH._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: BH._sampleCount
          }
        }), LH.pipelines.set(AH, rH)
      }
      return rH
    }

    function IB(HH, BH, LH) {
      const AH = BH.eye,
        rH = BH.viewMatrix;
      HH[0] = AH[0] + rH[2] * LH, HH[1] = AH[1] + rH[6] * LH, HH[2] = AH[2] + rH[10] * LH
    }
    var fB = LH(38833),
      lB = LH(45067),
      KB = LH(38098);
    const cB = Math.PI,
      eB = cB / 1.95,
      qB = [5e-4 / 94, 125e-7, 5e-4 / 18],
      gB = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((HH => {
        let [BH, LH] = HH;
        return .434 * cB * Math.pow(2 * cB / BH, 2) * LH
      }));

    function NB(HH, BH, LH) {
      const {
        up: AH,
        mieDirectionalG: rH
      } = HH, SH = 1 - nB(1 - Math.exp(BH[1] / 45e4), 0, 1), hH = HH.rayleigh - (1 - SH), tH = Math.hypot(BH[0], BH[1], BH[2]), zH = tH > 0 ? 1 / tH : 0, CH = LH.sunDir;
      for (let YH = 0; YH < 3; YH++) CH[YH] = BH[YH] * zH;
      const EH = CH[0] * AH[0] + CH[1] * AH[1] + CH[2] * AH[2],
        XH = 1e3 * Math.max(0, 1 - Math.exp(-(eB - Math.acos(nB(EH, -1, 1))) / 1.5));
      LH.sunE = XH;
      const GH = .2 * HH.turbidity * 1e-17 * HH.mieCoefficient;
      for (let YH = 0; YH < 3; YH++) {
        const HH = qB[YH] * hH,
          BH = gB[YH] * GH,
          AH = XH / (HH + BH);
        LH.inScatterR[YH] = HH * AH, LH.inScatterM[YH] = BH * AH, LH.extinctionBeta[YH] = 8400 * HH + 1250 * BH
      }
      return LH.sunsetMix = nB(Math.pow(1 - EH, 5), 0, 1), LH.sunDiscE = 19e3 * XH, LH.mieScale = (1 - rH * rH) / (4 * cB), LH.mieBase = 1 + rH * rH, LH.mieSlope = 2 * rH, LH
    }
    const RB = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const jB = 1 / function(HH) {
      const {
        A: BH,
        B: LH,
        C: AH,
        D: rH,
        E: SH,
        F: hH
      } = RB;
      return (HH * (BH * HH + AH * LH) + rH * SH) / (HH * (BH * HH + LH) + rH * hH) - SH / hH
    }(1e3);

    function nB(HH, BH, LH) {
      return Math.min(Math.max(HH, BH), LH)
    }
    const FB = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function DB(HH, BH) {
      const LH = new Map(BH),
        AH = [],
        rH = [],
        SH = () => 0 === rH.length || rH[rH.length - 1].active;
      let hH = null;
      const tH = () => {
        const HH = [...LH].filter((HH => {
            let [, BH] = HH;
            return !0 !== BH
          })),
          BH = HH.map((HH => {
            let [BH] = HH;
            return BH
          })).join("|");
        hH = HH.length ? new RegExp(`\\b(${BH})\\b`, "g") : null
      };
      tH();
      for (const zH of HH.split("\n")) {
        const HH = FB.exec(zH);
        if (!HH) {
          SH() && AH.push(hH ? wB(zH, hH, LH) : zH);
          continue
        }
        const BH = HH[1],
          CH = HH[2].trim();
        if ("ifdef" === BH || "ifndef" === BH || "if" === BH) {
          const HH = SH(),
            AH = "if" === BH ? ZB(CH, LH) : LH.has(CH) === ("ifdef" === BH);
          rH.push({
            active: HH && AH,
            parentActive: HH,
            taken: AH
          })
        } else if ("elif" === BH || "else" === BH) {
          const HH = rH[rH.length - 1];
          if (!HH) throw new Error(`#${BH} without #if`);
          const AH = !HH.taken && ("else" === BH || ZB(CH, LH));
          HH.active = HH.parentActive && AH, HH.taken = HH.taken || AH
        } else if ("endif" === BH) {
          if (!rH.pop()) throw new Error("#endif without #if")
        } else if (SH()) {
          const [HH, ...AH] = CH.split(/\s+/);
          "undef" === BH ? LH.delete(HH) : LH.set(HH, !AH.length || AH.join(" ")), tH()
        }
      }
      if (rH.length) throw new Error("Unterminated #if");
      return AH.join("\n")
    }

    function wB(HH, BH, LH) {
      return HH.replace(BH, (HH => {
        const BH = LH.get(HH);
        return "string" === typeof BH ? BH : HH
      }))
    }

    function ZB(HH, BH) {
      var LH;
      const AH = null !== (LH = HH.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== LH ? LH : [];
      let rH = 0;
      const SH = () => AH[rH],
        hH = () => AH[rH++],
        tH = HH => {
          const LH = /^\d/.test(HH) ? HH : BH.get(HH);
          return "string" === typeof LH ? parseInt(LH) : Number.NaN
        },
        zH = () => {
          const HH = hH();
          if ("!" === HH) return !zH();
          if ("(" === HH) {
            const HH = EH();
            return hH(), HH
          }
          if ("defined" === HH) {
            const HH = "(" === SH();
            HH && hH();
            const LH = hH();
            return HH && hH(), BH.has(LH)
          }
          const LH = SH();
          if ("==" === LH || "!=" === LH || ">" === LH || "<" === LH || ">=" === LH || "<=" === LH) {
            hH();
            const BH = tH(HH),
              AH = tH(hH());
            if (Number.isNaN(BH) || Number.isNaN(AH)) return !1;
            switch (LH) {
              case "==":
                return BH === AH;
              case "!=":
                return BH !== AH;
              case ">":
                return BH > AH;
              case "<":
                return BH < AH;
              case ">=":
                return BH >= AH;
              default:
                return BH <= AH
            }
          }
          return BH.has(HH)
        },
        CH = () => {
          let HH = zH();
          for (;
            "&&" === SH();) {
            hH();
            const BH = zH();
            HH = HH && BH
          }
          return HH
        },
        EH = () => {
          let HH = CH();
          for (;
            "||" === SH();) {
            hH();
            const BH = CH();
            HH = HH || BH
          }
          return HH
        },
        XH = EH();
      if (rH !== AH.length) throw new Error(`Cannot evaluate #if ${HH}`);
      return XH
    }
    var dB = LH(38183),
      aB = LH(38283),
      sB = LH(38286),
      JB = LH(42020),
      iB = LH(39682);
    const pB = 32,
      yB = [10, 3, 10],
      HL = [21, 7, 21],
      BL = HL[0] * HL[1] * HL[2],
      LL = 0,
      AL = 1,
      rL = 2,
      SL = 3,
      hL = 64,
      tL = 512,
      zL = 4 * BL,
      CL = 1536,
      EL = zL + BL * CL,
      XL = 1073741824,
      GL = EL + 1;

    function YL(HH, BH) {
      const LH = HH % BH;
      return LH < 0 ? LH + BH : LH
    }

    function uL(HH, BH, LH) {
      return AH = YL(HH, HL[0]), rH = YL(BH, HL[1]), SH = YL(LH, HL[2]), AH + HL[0] * (rH + HL[1] * SH);
      var AH, rH, SH
    }

    function QL(HH, BH, LH) {
      return HH + 8 * (BH + 8 * LH)
    }

    function WL(HH, BH, LH) {
      return HH + 4 * (BH + 4 * LH)
    }
    const ML = 65535,
      xL = 0,
      vL = 1,
      PL = 2,
      TL = 3;

    function UL(HH) {
      return Math.ceil(HH * HH / 32)
    }
    const VL = 8192,
      OL = 1 << 18,
      bL = 65536,
      kL = 294912,
      mL = 128,
      oL = 4096,
      IL = 16,
      fL = 16385,
      lL = 81921,
      KL = 147457,
      cL = 4194304;
    const eL = [0, 0, 0],
      qL = [0, 0, 0];

    function gL(HH, BH, LH, AH) {
      ! function(HH, BH, LH) {
        const [AH, rH, SH] = [HH[0], HH[1], HH[2]];
        let hH, tH, zH;
        Math.abs(rH) < .99 ? (hH = SH, tH = 0, zH = -AH) : (hH = -rH, tH = AH, zH = 0);
        const CH = Math.hypot(hH, tH, zH);
        BH[0] = hH / CH, BH[1] = tH / CH, BH[2] = zH / CH, LH[0] = rH * BH[2] - SH * BH[1], LH[1] = SH * BH[0] - AH * BH[2], LH[2] = AH * BH[1] - rH * BH[0]
      }(AH, eL, qL);
      const rH = 1 / 32;
      for (const [SH, hH] of [
          [0, eL],
          [4, qL]
        ]) {
        for (let LH = 0; LH < 3; LH++) HH[BH + SH + LH] = hH[LH] * rH;
        HH[BH + SH + 3] = -(hH[0] * LH[0] + hH[1] * LH[1] + hH[2] * LH[2]) * rH
      }
    }
    class NL {
      constructor() {
        this.words = new Uint32Array(KL), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      PX(HH, BH) {
        this.parts = 0, this.refs = 0, this.view = HH, this.viewAt = BH;
        const LH = HH[BH + 1] * HH[BH + 6] - HH[BH + 2] * HH[BH + 5],
          AH = HH[BH + 2] * HH[BH + 4] - HH[BH] * HH[BH + 6],
          rH = HH[BH] * HH[BH + 5] - HH[BH + 1] * HH[BH + 4],
          SH = Math.hypot(LH, AH, rH) || 1;
        this.light[0] = LH / SH, this.light[1] = AH / SH, this.light[2] = rH / SH
      }
      add(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= oL || ! function(HH, BH, LH) {
            const AH = HH[BH],
              rH = HH[BH + 1],
              SH = HH[BH + 2],
              hH = HH[BH + 3],
              tH = HH[BH + 4],
              zH = HH[BH + 5],
              CH = HH[BH + 6],
              EH = HH[BH + 7],
              XH = HH[BH + 8],
              GH = HH[BH + 9],
              YH = HH[BH + 10],
              uH = HH[BH + 11],
              QH = HH[BH + 12],
              WH = HH[BH + 13],
              MH = HH[BH + 14],
              xH = HH[BH + 15],
              vH = AH * zH - rH * tH,
              PH = AH * CH - SH * tH,
              TH = AH * EH - hH * tH,
              UH = rH * CH - SH * zH,
              VH = rH * EH - hH * zH,
              OH = SH * EH - hH * CH,
              bH = XH * WH - GH * QH,
              kH = XH * MH - YH * QH,
              mH = XH * xH - uH * QH,
              oH = GH * MH - YH * WH,
              IH = GH * xH - uH * WH,
              fH = YH * xH - uH * MH,
              lH = vH * fH - PH * IH + TH * oH + UH * mH - VH * kH + OH * bH;
            if (!(Math.abs(lH) > 1e-12)) return !1;
            const KH = 1 / lH;
            return LH[0] = (zH * fH - CH * IH + EH * oH) * KH, LH[1] = (SH * IH - rH * fH - hH * oH) * KH, LH[2] = (WH * OH - MH * VH + xH * UH) * KH, LH[3] = (YH * VH - GH * OH - uH * UH) * KH, LH[4] = (CH * mH - tH * fH - EH * kH) * KH, LH[5] = (AH * fH - SH * mH + hH * kH) * KH, LH[6] = (MH * TH - QH * OH - xH * PH) * KH, LH[7] = (XH * OH - YH * TH + uH * PH) * KH, LH[8] = (tH * IH - zH * mH + EH * bH) * KH, LH[9] = (rH * mH - AH * IH - hH * bH) * KH, LH[10] = (QH * VH - WH * TH + xH * vH) * KH, LH[11] = (GH * TH - XH * VH - uH * vH) * KH, LH[12] = (zH * kH - tH * oH - CH * bH) * KH, LH[13] = (AH * oH - rH * kH + SH * bH) * KH, LH[14] = (WH * PH - QH * UH - MH * vH) * KH, LH[15] = (XH * UH - GH * PH + YH * vH) * KH, !0
          }(BH, LH, this.inverse)) return;
        const {
          view: AH,
          viewAt: rH
        } = this, SH = LH;
        let hH = 1 / 0,
          tH = 1 / 0,
          zH = -1 / 0,
          CH = -1 / 0,
          EH = -1 / 0;
        const [XH, GH, YH] = this.light;
        for (let TH = 0; TH < 8; TH++) {
          const LH = 1 & TH ? HH.hi[0] : HH.lo[0],
            uH = 2 & TH ? HH.hi[1] : HH.lo[1],
            QH = 4 & TH ? HH.hi[2] : HH.lo[2],
            WH = LH * BH[SH] + uH * BH[SH + 4] + QH * BH[SH + 8] + BH[SH + 12],
            MH = LH * BH[SH + 1] + uH * BH[SH + 5] + QH * BH[SH + 9] + BH[SH + 13],
            xH = LH * BH[SH + 2] + uH * BH[SH + 6] + QH * BH[SH + 10] + BH[SH + 14],
            vH = AH[rH] * WH + AH[rH + 1] * MH + AH[rH + 2] * xH + AH[rH + 3],
            PH = AH[rH + 4] * WH + AH[rH + 5] * MH + AH[rH + 6] * xH + AH[rH + 7];
          hH = Math.min(hH, vH), tH = Math.min(tH, PH), zH = Math.max(zH, vH), CH = Math.max(CH, PH), EH = Math.max(EH, XH * WH + GH * MH + YH * xH)
        }
        if (zH < -1 || CH < -1 || hH >= 1 || tH >= 1) return;
        const uH = this.parts++,
          QH = this.rects;
        QH[4 * uH] = RL(hH), QH[4 * uH + 1] = RL(tH), QH[4 * uH + 2] = RL(zH), QH[4 * uH + 3] = RL(CH);
        const WH = this.inverse,
          {
            cell: MH,
            dims: xH,
            lo: vH
          } = HH,
          PH = lL + uH * IL;
        for (let TH = 0; TH < 3; TH++) this.floats[PH + 4 * TH] = WH[TH] / MH, this.floats[PH + 4 * TH + 1] = WH[4 + TH] / MH, this.floats[PH + 4 * TH + 2] = WH[8 + TH] / MH, this.floats[PH + 4 * TH + 3] = (WH[12 + TH] - vH[TH]) / MH;
        this.words[PH + 12] = HH.at, this.floats[PH + 13] = EH + .001 * (1 + Math.abs(EH)), this.words[PH + 14] = xH[0] | xH[1] << 8 | xH[2] << 16
      }
      finish() {
        const HH = mL,
          {
            counts: BH,
            rects: LH,
            words: AH
          } = this;
        BH.fill(0);
        let rH = 0,
          SH = 0;
        for (; SH < this.parts; SH++) {
          const AH = 4 * SH,
            hH = (LH[AH + 2] - LH[AH] + 1) * (LH[AH + 3] - LH[AH + 1] + 1);
          if (rH + hH > 65536) break;
          rH += hH;
          for (let rH = LH[AH + 1]; rH <= LH[AH + 3]; rH++)
            for (let SH = LH[AH]; SH <= LH[AH + 2]; SH++) BH[rH * HH + SH]++
        }
        let hH = 0;
        for (let zH = 0; zH < 16384; zH++) AH[zH] = hH, hH += BH[zH], BH[zH] = AH[zH];
        AH[16384] = hH;
        for (let zH = 0; zH < SH; zH++) {
          const rH = 4 * zH;
          for (let SH = LH[rH + 1]; SH <= LH[rH + 3]; SH++)
            for (let hH = LH[rH]; hH <= LH[rH + 2]; hH++) AH[fL + BH[SH * HH + hH]++] = zH
        }
        const tH = this.floats;
        for (let zH = 0; zH < 16384; zH++) {
          const HH = fL + AH[zH],
            BH = HH + Math.min(AH[zH + 1] - AH[zH], 64);
          for (let LH = HH + 1; LH < BH; LH++) {
            const BH = AH[LH],
              rH = tH[81934 + BH * IL];
            let SH = LH - 1;
            for (; SH >= HH && tH[81934 + AH[SH] * IL] < rH; SH--) AH[SH + 1] = AH[SH];
            AH[SH + 1] = BH
          }
        }
        this.refs = rH
      }
    }

    function RL(HH) {
      return Math.min(127, Math.max(0, Math.floor((.5 * HH + .5) * mL)))
    }

    function jL(HH, BH, LH, AH, rH) {
      for (let SH = 0; SH < 4; SH++)
        for (let hH = 0; hH < 4; hH++) rH[4 * SH + hH] = HH[BH + 4 * SH] * LH[AH + hH] + HH[BH + 4 * SH + 1] * LH[AH + 4 + hH] + HH[BH + 4 * SH + 2] * LH[AH + 8 + hH] + HH[BH + 4 * SH + 3] * LH[AH + 12 + hH]
    }

    function nL(HH, BH, LH, AH, rH) {
      const SH = HH[0] - BH,
        hH = HH[1] - LH,
        tH = HH[2] - AH,
        zH = HH[3] - BH,
        CH = HH[4] - LH,
        EH = HH[5] - AH,
        XH = HH[6] - BH,
        GH = HH[7] - LH,
        YH = HH[8] - AH;
      if (Math.min(SH, zH, XH) > rH || Math.max(SH, zH, XH) < -rH) return !1;
      if (Math.min(hH, CH, GH) > rH || Math.max(hH, CH, GH) < -rH) return !1;
      if (Math.min(tH, EH, YH) > rH || Math.max(tH, EH, YH) < -rH) return !1;
      const uH = zH - SH,
        QH = CH - hH,
        WH = EH - tH,
        MH = XH - zH,
        xH = GH - CH,
        vH = YH - EH,
        PH = QH * vH - WH * xH,
        TH = WH * MH - uH * vH,
        UH = uH * xH - QH * MH;
      if (Math.abs(PH * SH + TH * hH + UH * tH) > rH * (Math.abs(PH) + Math.abs(TH) + Math.abs(UH))) return !1;
      const VH = [uH, QH, WH, MH, xH, vH, SH - XH, hH - GH, tH - YH];
      for (let OH = 0; OH < 3; OH++) {
        const HH = VH[3 * OH],
          BH = VH[3 * OH + 1],
          LH = VH[3 * OH + 2];
        for (let AH = 0; AH < 3; AH++) {
          const uH = 0 === AH ? 0 : 1 === AH ? LH : -BH,
            QH = 0 === AH ? -LH : 1 === AH ? 0 : HH,
            WH = 0 === AH ? BH : 1 === AH ? -HH : 0,
            MH = uH * SH + QH * hH + WH * tH,
            xH = uH * zH + QH * CH + WH * EH,
            vH = uH * XH + QH * GH + WH * YH,
            PH = rH * (Math.abs(uH) + Math.abs(QH) + Math.abs(WH));
          if (Math.min(MH, xH, vH) > PH || Math.max(MH, xH, vH) < -PH) return !1
        }
      }
      return !0
    }
    const FL = new Float32Array(1);
    new Uint32Array(FL.buffer);
    var DL = LH(39686);

    function wL(HH) {
      const [BH, LH, AH] = DL.m;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${HH.group}) @binding(${HH.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${BH-1}, ${LH-1}, ${AH-1});\n}\n`
    }

    function ZL(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [rH, SH, hH] = HL, [tH, zH, CH] = yB, EH = Math.log2(pB), XH = AH ? "var<private> bloxdSpCrossed: bool;\n" : "", GH = AH ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${HH.group}) @binding(${HH.aG}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${HH.group}) @binding(${HH.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${LH?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${XH}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${vL}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${PL}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${LH?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${TL}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${rH}, ${SH}, ${hH});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${rH} * (s.y + ${SH} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${tH}, ${zH}, ${CH}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${EH}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${SL}u) {\n\t\treturn named && state == ${rL}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${zL}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${EL}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${BH?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${BH?`\t\tif (exits && step > 0 && step % ${sL} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${EH}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${LL}u || kind == ${AL}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${rL}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${zL}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${GH}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const dL = {
      group: 0,
      uniform: 0,
      aG: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function aL() {
      const HH = dL;
      return `${wL(HH)}${ZL(HH,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${DL.c}>,\n}\n@group(${HH.group}) @binding(${HH.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${HH.group}) @binding(${HH.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${DL.h})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${DL.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${DL.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const sL = 2;
    const JL = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function iL(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const AH = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${BH.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        rH = "trace" === LH || "lit" === LH,
        SH = "maskEdge" === LH ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        hH = rH ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${BH.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${BH.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===LH?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${SH};\n`;
      return `${AH}${HH.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${rH?function(){const[HH,BH,LH]=DL.m;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${HH}.0, ${BH}.0, ${LH}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${hH}}\n`:""}${HH.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${BH.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${BH.renderOffset});\n}\n`:""}`
    }
    const pL = "bloxdSpOwnTexture";

    function yL(HH) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${HH.texture}) - 1u)))`
    }
    const HA = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${fB.g.map((HH=>{let[BH,LH]=HH;return`\tbloxdSpOut.${BH} = (bloxdSpWord & ${LH}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function BA(HH) {
      return `bloxdSpFlags(${HH})`
    }
    const LA = `${JB.o}.eyePosition`;

    function AA(HH, BH, LH, AH, rH) {
      const SH = HH.indexOf(BH);
      if (SH < 0 || HH.indexOf(BH, SH + 1) >= 0) throw new Error(`Lite's ${rH} program changed at the shader pack ${AH} hook: ${SH<0?"no":"more than one"} anchor (lite/${rH}ShaderPack.ts)`);
      return HH.slice(0, SH) + LH + HH.slice(SH + BH.length)
    }

    function rA(HH) {
      return HH.sunShadow || HH.airShadow
    }

    function SA(HH, BH) {
      return BH && rA(HH)
    }
    const hA = {
      group: JB.g,
      ...JB.w
    };

    function tA(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!rA(HH)) return "";
      if (BH) {
        const BH = hA,
          rH = "trace" === LH || "lit" === LH;
        let SH = "";
        HH.sunShadow && (SH = rH ? `${ZL(BH,!0,"lit"===LH)}${AH=BH,`@group(${AH.group}) @binding(${AH.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${AH.group}) @binding(${AH.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(HH, BH, LH) {
          const AH = `@group(${HH}) @binding(${BH}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return LH ? `${AH}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${JL}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((HH=>`\t{\n\t\tlet o = vec2i(${HH});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : AH
        }(BH.group, JB.y, "maskEdge" === LH));
        const hH = {
          shadowDirection: `${JB.o}.shadowDirection`,
          renderOffset: `${JB.o}.renderOffset`,
          eyePosition: `${JB.o}.eyePosition`
        };
        return `${wL(BH)}${SH}${function(HH){const[BH,LH,AH]=DL.m;return`@group(${HH.group}) @binding(${HH.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${HH.group}) @binding(${HH.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${BH}.0, ${LH}.0, ${AH}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(BH)}${iL(HH,hH,LH)}`
      }
      var AH;
      return `${HH.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${HH.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function zA(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!BH) return "";
      const SH = (hH = "fragmentInputs.vPositionW", tH = HH.sunShadow ? {
        normal: LH,
        flags: AH
      } : null, `\n\tbloxdSpShadowPosition = ${hH};\n${tH?`\tbloxdSpShadowNormal = normalize(${tH.normal});\n\tbloxdSpShadowEmissive = (${tH.flags} & ${fB.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${tH.flags} & ${fB.i}u) != 0u;\n`:""}`);
      var hH, tH;
      return HH.sunShadow && ("mask" === rH || "maskEdge" === rH) ? `${SH}${zH="fragmentInputs.position",CH="maskEdge"===rH,`\n\tbloxdSpShadowPixel = vec2i(${zH}.xy);\n${CH?`\tbloxdSpShadowZ = ${zH}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${zH}.z), dpdy(${zH}.z));\n`:""}`}` : SH;
      var zH, CH
    }
    const CA = "bloxdSpTextureRotation",
      EA = "bloxdSpTextureLayers",
      XA = `@group(${JB.g}) @binding(${JB.A}) var<storage, read> ${EA}: array<u32>;\n`;

    function GA(HH) {
      return `\tvertexOutputs.vPackTexture = ${EA}[min(u32(${HH}), arrayLength(&${EA}) - 1u)];\n`
    }

    function YA(HH) {
      return void 0 !== HH.uv
    }

    function uA(HH) {
      if (!HH) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (YA(HH)) return function(HH) {
        const {
          texture: BH,
          cells: LH,
          layers: AH
        } = HH, rH = `textureDimensions(${BH}, bloxdSpLevel)`, SH = LH ? `max(vec2u(vec2f(${rH}) / ${LH}), vec2u(1u))` : rH, hH = LH ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${SH};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${LH}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${LH}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${BH}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${rH} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${SH};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${BH}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let tH;
        if (LH)
          if (1 === AH.length) tH = `\treturn bloxdSpOwnTexel(${AH[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const HH = AH.length - 1;
            tH = `\tvar bloxdSpColour = bloxdSpOwnTexel(${AH[HH]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let BH = HH - 1; BH >= 0; BH--) tH += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${AH[BH]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            tH += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else tH = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${HH.id?`var<private> ${pL}: u32;\n`:""}${hH}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${yL(HH)};\n\treturn ${SH};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${HH.id?pL:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${yL(HH)};\n${tH}}\n`
      }(HH);
      const BH = HH,
        LH = HH => {
          const LH = HH > 0 ? `bloxdSpLayer - ${BH.layers*HH}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${HH}, ${BH.sampler}, bloxdSpTurned, ${LH}, round(bloxdSpMipLevel));`
        };
      let AH = "";
      for (let SH = 0; SH < BH.count - 1; SH++) AH += `\tif (bloxdSpLayer < ${BH.layers*(SH+1)}u) {\n\t\t${LH(SH)}\n\t}\n`;
      const rH = BH.frame ? `${BH.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${CA}: u32;\n${XA}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${CA} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${CA} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${CA} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${rH}${AH}\t${LH(BH.count-1)}\n}\n`
    }

    function QA(HH, BH, LH) {
      return !!HH.surface && "bloxdDefaultSurface" !== HH.surface && function(HH, BH) {
        return "liquid" === BH || !HH
      }(BH, LH)
    }

    function WA(HH, BH) {
      return HH.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${BH.vertexLocalPosition}, ${BA(BH.vertexFlags)});\n\t\tlet bloxdSpVertex = ${HH.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function MA(HH, BH, LH, AH, rH) {
      if (!HH.surface) return "";
      const SH = (HH, BH) => `\n\tlet bloxdSpTexelUV = ${HH};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${BH}) - 1u));`;
      let hH = "",
        tH = "0u, 0u, vec2f(0.0), 0.0";
      const zH = AH && YA(AH) ? AH : null,
        CH = AH && !YA(AH) ? AH : null;
      if (zH) {
        hH = `${zH.id?`\n\tlet bloxdSpTexture = ${zH.id};\n\t${pL} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${zH.uv};${SH(function(HH,BH){var LH;return`${null!==(LH=HH.levelUv)&&void 0!==LH?LH:HH.cells?`${BH} / ${HH.cells}`:BH} * vec2f(textureDimensions(${HH.texture}))`}(zH,"bloxdSpUv"),zH.texture)}`, tH = (zH.id ? `${pL}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else CH && (hH = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${CA} = bloxdSpTexture >> 16u;${SH(`fragmentInputs.vMainUV1 * ${(0,dB.zb)(CH.width)}`,"textureAtlas0")}`, tH = `bloxdSpTexture & 0xffffu, ${CA}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const EH = rH.overlayColour,
        XH = EH ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        GH = "bloxdDefaultSurface" !== HH.surface || EH ? `\n\tbaseColor = vec4f(${XH}, baseColor.a);` : "",
        YH = QA(HH, BH, LH) ? `\n\t${rH.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${hH}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${rH.alpha}, ${rH.enchantTier}, ${rH.enchantColour}, ${rH.enchantSpeed}, ${null!==EH&&void 0!==EH?EH:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${rH.normal}, ${rH.localPosition}, ${BA(rH.flags)}, ${tH});\n\tlet bloxdSpSurface = ${HH.surface}(bloxdSpSurfaceIn);${GH}${YH}\n`
    }
    const xA = "bloxdSpLightIn";

    function vA(HH, BH, LH, AH) {
      if (!HH.light) return "";
      const rH = BH ? `${dB.j}.rgb, ${dB.j}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${dB.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: SH,
          diffuse: hH,
          emissive: tH,
          ambient: zH,
          fogColour: CH,
          fogAlpha: EH,
          normal: XH
        } = AH;
      return `\tvar ${xA} = BloxdLightIn(vec3f(0.0), ${LH?SH:"0.0"}, ${hH}, ${tH}, ${zH}, ${rH}, ${CH}, ${EH}, fragmentInputs.vPositionW, ${XH}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${xA}.litColour = bloxdLitColour(bloxdSpSurface, ${xA});\n`
    }

    function PA(HH) {
      return HH.light ? `\n\t{\n\t\tlet bloxdSpLight = ${HH.light}(bloxdSpSurface, ${xA});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const TA = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      UA = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      VA = "\treturn color;\n}",
      OA = {
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
    const bA = Object.freeze({});

    function kA(HH) {
      var BH;
      return !(null === (BH = (0, iB.c)(HH)) || void 0 === BH || !BH.sceneDepth)
    }

    function mA(HH) {
      const BH = (0, iB.c)(HH);
      return !!BH && QA(BH.hooks, BH.strict, BH.program)
    }

    function oA(HH, BH, LH, AH) {
      return AA(HH, BH, LH, AH, "terrain")
    }

    function IA(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const SH = function(HH) {
          return (0, iB.b)(HH.packVariant, HH.liquid ? "liquid" : "terrain")
        }(HH),
        {
          hooks: hH
        } = SH,
        tH = SA(SH, AH),
        zH = "edge" === rH ? "maskEdge" : "plain" === rH ? "mask" : "trace",
        CH = WA(hH, OA);
      CH && (BH = oA(BH, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${CH}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const EH = "atlas" === HH.texture ? {
          count: HH.atlasCount,
          layers: HH.atlasLayers,
          width: HH.o9,
          sampler: "atlasSampler",
          frame: HH.animated ? LH : null
        } : null,
        XH = `${SH.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${zA(SH,tH,OA.normal,OA.flags,zH)}${MA(hH,SH.strict,SH.program,EH,OA)}`;
      XH && (BH = oA(BH, TA, `${TA.slice(0,-1)}${XH}`, "surface"));
      const GH = PA(hH);
      return GH && (BH = oA(BH, UA, `${vA(hH,HH.lighting,HH.dirLightCount>0,OA)}${UA}`, "light input"), BH = oA(BH, VA, `${GH.slice(1)}${VA}`, "light")), `${(0,JB.H)()}${SH.sceneDepth?`@group(${JB.g}) @binding(${JB.v}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${LA};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${tA(SH,tH,zH)}${uA(EH)}${HA}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${SH.code}${BH}`
    }
    const fA = UH.c.WGSL;

    function lA(HH) {
      return void 0 !== HH.packVariant
    }
    const KA = {
        hSH: 0,
        tSH: 4,
        zSH: 8,
        CSH: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      cA = KA.aoLevels + 4,
      eA = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      qA = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      gA = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      NA = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      RA = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      jA = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      nA = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      FA = 0,
      DA = 3,
      wA = 4,
      ZA = 5,
      dA = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${aB.d}, ${aB.d}, corner == 0u || corner == 3u);\n\tlet dv = select(-${aB.d}, ${aB.d}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      aA = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((HH=>sB.c>>HH&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const sA = {
      IX: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: HH => `animDataPerTex[${HH}]`
    };

    function JA(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sA;
      return `\n\tlet atlasIdxIn = ${HH};\n\tlet animTick = ${LH.IX};\n\tlet animTickStride = ${LH.stride};\n\tlet numAnimTextures = ${LH.count};\n\t${(0,VH.e)(UH.c.WGSL,LH.perTexture)}\n\t${BH}animLayer;\n`
    }

    function iA(HH) {
      const BH = (BH, LH) => {
        const AH = BH > 0 ? `fragmentInputs.texAtlasIndex - ${HH.atlasLayers.toFixed(1)} * ${BH.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${LH?"textureSampleLevel":"textureSample"}(textureAtlas${BH}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${AH}))${LH?", atlasLod":""})`
      };
      if (1 === HH.atlasCount) return `baseColor = ${BH(0,!1)};`;
      let LH = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,dB.zb)(HH.o9)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let AH = 0; AH < HH.atlasCount; AH++) {
        const rH = HH.atlasLayers * (AH + 1) - .5;
        LH += `${AH>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,dB.zb)(rH)}) {\n\t\tbaseColor = ${BH(AH,!0)};\n\t}`
      }
      return LH
    }

    function pA(HH) {
      return `terrain-${HH.texture}${"atlas"===HH.texture?HH.atlasCount:""}${HH.animated?"-anim":""}${HH.alphaTest?"-test":""}${HH.lighting?"-lit":""}-dir${HH.dirLightCount}${HH.packed?"-packed":""}${lA(HH)?`-sp${HH.packVariant}`:""}${HH.liquid?"-liquid":""}${HH.resting?"-rest":""}`
    }

    function yA(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const AH = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const LH = "none" !== HH.texture,
          AH = "atlas" === HH.texture,
          rH = HH.dirLightCount > 0,
          SH = lA(HH);
        if (HH.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${HH.dirLightCount}`);
        let hH = 1,
          tH = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (AH) {
          HH.animated && (tH += `@group(2) @binding(${hH++}) var<storage, read> animDataPerTex: array<f32>;\n`), tH += `@group(2) @binding(${hH++}) var atlasSampler: sampler;\n`;
          for (let BH = 0; BH < HH.atlasCount; BH++) tH += `@group(2) @binding(${hH++}) var textureAtlas${BH}: texture_2d_array<f32>;\n`
        } else "single" === HH.texture && (tH += `@group(2) @binding(${hH++}) var diffuseSamplerSampler: sampler;\n`, tH += `@group(2) @binding(${hH++}) var diffuseSampler: texture_2d<f32>;\n`);
        const zH = function(HH) {
            const BH = nA,
              LH = "none" !== HH.texture,
              AH = "atlas" === HH.texture,
              rH = lA(HH);
            return HH.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${LH?"uv: vec2f,":""}\n\t${AH?"texAtlasIndices: f32,":""}\n\t${HH.lighting?"aPackedLightLevels: f32,":""}\n\t${rH?"blockFlagWords: vec2u,":""}\n}\n${dA}\n${aA}\n${"single"===HH.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${LH?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===HH.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${AH?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${HH.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${rH?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${BH.position}) position: vec3f,\n\t@location(${BH.normal}) normal: vec4f,\n\t@location(${BH.color}) color: vec4f,\n\t${LH?`@location(${BH.uv}) uv: vec2f,`:""}\n\t${HH.lighting?`@location(${BH.packedLight}) aPackedLightLevels: f32,`:""}\n\t${rH?`@location(${BH.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(HH),
          CH = `\n${NA}\n${qA}\n${gA}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${tH}\n${WB}\n${zH.declarations}\nstruct Varyings {\n\t${"none"===BH?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${HH.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${rH?"@location(5) vTerrainLambert: f32,":""}\n\t${LH?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${AH?"@location(7) texAtlasIndex: f32,":""}\n\t${HH.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${SH?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${SH&&AH?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${HH.resting?"":(0,dB.s)(fA)}\n${jA}\n\n@vertex\nfn mainVertex(${zH.parameter}) -> Varyings {\n\t${zH.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${SH?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${fB.d.placed}u;`:""}\n\t${SH&&AH?GA("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${HH.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${LH?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${AH?function(HH){return HH?JA("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(HH.animated):""}\n\t${"single"===HH.texture&&HH.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,dB.jb)(fA)}\n\t${(0,dB.L)(fA,HH.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${HH.resting?"":RA}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${AH?iA(HH):""}\n\t${"single"===HH.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${LH?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${HH.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${rH?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${QB}));\n\t${lA(HH)?(0,dB.ub)(UH.c.WGSL):(0,dB._)(fA)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          EH = new Set;
        HH.lighting && EH.add("BLOXD_LIGHTING");
        rH && EH.add("BLOXD_TERRAIN_DIRECTIONAL");
        return DB(CH, new Map([...EH].map((HH => [HH, !0]))))
      }(HH, LH);
      if (!lA(HH)) return AH;
      const rH = IA(HH, AH, JA, BH, LH);
      return "none" === LH ? rH : `${rH}${function(HH){const BH="none"!==HH.texture&&HH.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${HH.resting?"":RA}\n\t${HH.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${BH&&"atlas"===HH.texture?iA(HH):""}\n\t${BH&&"single"===HH.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${BH?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${fB.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(HH)}`
    }
    const Hr = new Map([
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

    function Br(HH, BH) {
      const LH = new Map;
      let AH = 0;
      const rH = [],
        SH = [],
        hH = [];
      for (const CH of BH) {
        var tH, zH;
        const BH = null !== (tH = CH.type.trim().split(/\s+/).pop()) && void 0 !== tH ? tH : CH.type,
          EH = Hr.get(BH);
        if (!EH) throw new Error(`Lite: no uniform layout for ${CH.name}: ${CH.type}`);
        const XH = null !== (zH = CH.arraySize) && void 0 !== zH ? zH : 0,
          GH = XH ? 4 : EH.align;
        AH = Math.ceil(AH / GH) * GH;
        const YH = XH ? 4 * Math.ceil(EH.floats / 4) : EH.floats;
        if (LH.set(CH.name, {
            offset: AH,
            floats: EH.floats,
            arraySize: XH,
            stride: YH
          }), XH && EH.floats <= 2) {
          const BH = `${HH}_${hH.length}_strided`;
          SH.push(`struct ${BH} {\n\t@size(16) el: ${EH.wgsl},\n}`), hH.push(CH.name), rH.push(`\t@align(16) ${CH.name}: array<${BH}, ${XH}>,`)
        } else XH ? rH.push(`\t@align(16) ${CH.name}: array<${EH.wgsl}, ${XH}>,`) : rH.push(`\t${CH.name}: ${EH.wgsl},`);
        AH += XH ? YH * XH : EH.floats
      }
      return {
        slots: LH,
        floats: Math.max(4, 4 * Math.ceil(AH / 4)),
        wgsl: `${SH.join("\n")}\nstruct ${HH} {\n${rH.join("\n")}\n}\n`,
        stridedArrays: hH
      }
    }
    const Lr = [{
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
      Ar = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      rr = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Sr(HH, BH) {
      return `#if defined(${HH}) && ${HH}DIRECTUV == 0\nvarying v${BH}UV: vec2f;\n#endif`
    }

    function hr(HH, BH, LH) {
      return `#if defined(${HH}) && ${HH}DIRECTUV == 0\nif (uniforms.v${BH}Infos.x==0.)\n{vertexOutputs.v${BH}UV= (uniforms.${LH}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${BH}UV= (uniforms.${LH}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function tr(HH, BH, LH) {
      return `#ifdef ${HH}\n#if ${HH}DIRECTUV == 1\n#define v${BH}UV vMainUV1\n#elif ${HH}DIRECTUV == 2\n#define v${BH}UV vMainUV2\n#else\nvarying v${BH}UV: vec2f;\n#endif\nvar ${LH}SamplerSampler: sampler;\nvar ${LH}Sampler: texture_2d<f32>;\n#endif`
    }
    const zr = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Cr = 256,
      Er = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Xr = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Gr = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      Yr = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      ur = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Qr = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      Wr = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Mr = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Xr}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Sr("OPACITY","Opacity")}\n${Sr("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${Wr}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Gr}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${hr("OPACITY","Opacity","opacity")}\n${hr("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Yr}\n#define CUSTOM_VERTEX_MAIN_END\n${ur}\n}\n`;
    const xr = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${tr("OPACITY","Opacity","opacity")}\n${tr("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${Wr}\n${Qr}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((HH,BH)=>function(HH){const BH=`
    frame.lights[LITE_LIGHT$ {
        HH
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      HH
    }\
    nvar diffuse$ {
      HH
    }: vec4f = $ {
      BH
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      HH
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      BH
    }.vLightData, diffuse$ {
      HH
    }.rgb, $ {
      BH
    }.vLightSpecular.rgb, diffuse$ {
      HH
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(BH))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, vr = /^([gimus]+)!/, Pr = new Set;

    function Tr(HH) {
      Pr.has(HH) || (Pr.add(HH), console.warn(`Lite: no place for plugin code at ${HH} in the standard shader: it is left out`))
    }

    function Ur(HH, BH) {
      let LH = HH;
      const AH = new Map;
      for (const [SH, hH] of BH) {
        var rH;
        AH.set(SH, `${null!==(rH=AH.get(SH))&&void 0!==rH?rH:""}${hH}\n`)
      }
      for (const [SH, hH] of AH) {
        if (!SH.startsWith("!")) {
          const HH = `#define ${SH}`;
          if (!LH.includes(HH)) {
            Tr(SH);
            continue
          }
          LH = LH.replace(HH, (() => `\n${hH}\n${HH}`));
          continue
        }
        let HH = SH.substring(1),
          BH = "g";
        if (HH.startsWith("!")) BH = "", HH = HH.substring(1);
        else {
          const LH = vr.exec(HH);
          LH && (BH = LH[1], HH = HH.substring(BH.length + 1))
        }
        const AH = new RegExp(HH, BH.includes("g") ? BH : `${BH}g`);
        let rH = AH.exec(LH);
        for (rH || Tr(SH); rH;) {
          const HH = rH,
            BH = hH.replace(/\$(\d+)/g, ((BH, LH) => Number(LH) < HH.length ? HH[Number(LH)] : ""));
          LH = LH.substring(0, HH.index) + BH + LH.substring(HH.index + HH[0].length), AH.lastIndex = HH.index + BH.length, rH = AH.exec(LH)
        }
      }
      return LH
    }
    const Vr = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Or = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      br = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function kr(HH) {
      const BH = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let LH = HH.replace(Vr, ((HH, LH, AH, rH, SH, hH) => ("attribute" === LH ? BH.attributes.push({
        name: SH,
        type: hH
      }) : void 0 === LH ? BH.varyings.push({
        name: SH,
        type: hH,
        interpolation: or(hH, AH, rH)
      }) : BH.uniforms.push({
        name: SH,
        type: mr(hH)
      }), "")));
      return LH = LH.replace(Or, ((HH, LH) => (BH.samplers.add(LH), ""))), LH = LH.replace(br, ((HH, LH, AH) => (BH.textures.push({
        name: LH,
        type: AH
      }), ""))), BH.body = LH, BH
    }

    function mr(HH) {
      const BH = HH.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        LH = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(BH);
      if (!LH) throw new Error(`Lite: unsupported uniform type ${HH}`);
      return LH
    }

    function or(HH, BH, LH) {
      return void 0 === BH && void 0 === LH ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(HH.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === BH ? "@interpolate(flat) " : `@interpolate(${null!==BH&&void 0!==BH?BH:"perspective"}, ${null!==LH&&void 0!==LH?LH:"center"}) `
    }

    function Ir(HH) {
      return cr({
        defines: HH.defines,
        vertex: Ur(Mr, HH.vertexCode),
        fragment: Ur(xr, HH.fragmentCode),
        members: [...Lr, ...HH.defines.has("OPACITY") ? Ar : [], ...HH.defines.has("EMISSIVE") ? rr : [], ...HH.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function fr(HH) {
      const BH = HH.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (BH === HH) throw new Error("Lite: fragment main has no return");
      return BH
    }
    const lr = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Xr}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Gr}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Yr}\n${ur}\n}\n`,
      Kr = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Qr}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function cr(HH) {
      const BH = HH.defines,
        LH = kr(DB(HH.vertex, BH)),
        AH = kr(DB(HH.fragment, BH)),
        rH = new Map;
      for (const vH of [...LH.varyings, ...AH.varyings]) rH.has(vH.name) || rH.set(vH.name, vH);
      const SH = [...rH.values()].map(((HH, BH) => `\t@location(${BH}) ${HH.interpolation}${HH.name}: ${HH.type},`)),
        hH = [...HH.members];
      for (const vH of [...LH.uniforms, ...AH.uniforms]) hH.some((HH => HH.name === vH.name)) || hH.push(vH);
      const tH = Br(HH.structName, hH),
        zH = [],
        CH = [];
      let EH = 1;
      const XH = new Set;
      for (const vH of [...LH.textures, ...AH.textures]) {
        if (XH.has(vH.name)) continue;
        XH.add(vH.name);
        const HH = `${vH.name}Sampler`,
          BH = EH++,
          LH = EH++,
          AH = vH.type.startsWith("texture_2d_array") ? "2d-array" : vH.type.startsWith("texture_cube") ? "cube" : "2d";
        zH.push({
          name: vH.name,
          binding: BH,
          samplerBinding: LH,
          dimension: AH
        }), CH.push(`@group(2) @binding(${BH}) var ${vH.name}: ${vH.type};`), CH.push(`@group(2) @binding(${LH}) var ${HH}: sampler;`)
      }
      for (const vH of [...LH.samplers, ...AH.samplers])
        if (!XH.has(vH.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${vH} has no texture`);
      const GH = [NA, Er, tH.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${HH.structName};`, ...CH].join("\n"),
        YH = LH.attributes,
        uH = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...LH.attributes.map(((HH, BH) => `\t@location(${BH}) ${HH.name}: ${HH.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        QH = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...SH, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        WH = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...AH.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...SH, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", WB, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${QB}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        MH = HH => {
          for (const BH of tH.stridedArrays) HH = HH.replace(new RegExp(`\\b${BH}\\s*\\[(.*?)\\]`, "g"), `${BH}[$1].el`);
          return HH
        };
      return {
        vertex: `${GH}\n${uH}\n${QH}\n${MH(LH.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${GH}\n${WH}\n${fr((xH=MH(AH.body),xH.includes("fragmentInputs.position")?xH.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):xH))}`,
        attributes: YH,
        material: tH,
        textures: zH
      };
      var xH
    }
    const er = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      qr = HH => ({
        name: HH,
        type: "vec3"
      }),
      gr = HH => ({
        name: HH,
        type: "float"
      }),
      Nr = Br("EarthSkyUniforms", [qr("viewFrom"), gr("exposureScale"), qr("zenithOffset"), gr("fogOn"), qr("up"), gr("ditherOn"), qr("sun"), gr("turbidity"), qr("tint"), gr("rayleigh"), qr("sunDir"), gr("mieStrength"), qr("inScatterR"), gr("mieFocus"), qr("inScatterM"), gr("sunE"), qr("extinctionBeta"), gr("sunsetMix"), gr("mieScale"), gr("mieBase"), gr("mieSlope"), gr("sunDiscE"), gr("exposure")]),
      Rr = `${NA}\n${Er}\n${Nr.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      jr = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${er.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      nr = `\n${WB}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(RB).map((HH=>{let[BH,LH]=HH;return`const TONE_${BH}: f32 = ${LH};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${jB};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${QB}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Fr = LH(37961);
    const Dr = new Fr.lu,
      wr = new Fr.lu,
      Zr = new Fr.Quaternion,
      dr = new Float64Array(3),
      ar = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      sr = new Float64Array(16);

    function Jr(HH, BH, LH) {
      const AH = LH.worldMatrix;
      var rH;
      HH.updateFloat3("viewFrom", AH[12], AH[13], AH[14]), HH.updateFloatsFrom("zenithOffset", BH.cameraOffset, 0, 3), HH.updateFloatsFrom("up", BH.up, 0, 3), BH.luminance > 0 && (HH.updateFloat("exposure", BH.luminance), HH.updateFloat("exposureScale", (rH = BH.luminance, Math.log2(2 / Math.pow(rH, 4))))), HH.updateFloat("turbidity", BH.turbidity), HH.updateFloat("rayleigh", BH.rayleigh), HH.updateFloat("mieStrength", BH.mieCoefficient), HH.updateFloat("mieFocus", BH.mieDirectionalG), HH.updateFloatsFrom("tint", BH.tint, 0, 3), HH.updateFloat("fogOn", BH.fog && LH.fogEnabled && 0 !== LH.fogMode ? 1 : 0), HH.updateFloat("ditherOn", BH.dithering ? 1 : 0);
      const SH = BH.sunPosition;
      if (Dr.set(SH[0], SH[1], SH[2]), !BH.useSunPosition) {
        const HH = Math.PI * (BH.inclination - .5),
          LH = 2 * Math.PI * (BH.azimuth - .5);
        Dr.set(BH.distance * Math.cos(LH) * Math.cos(HH), BH.distance * Math.sin(-HH), BH.distance * Math.sin(LH) * Math.cos(HH)), Fr.Quaternion.FromUnitVectorsToRef(Fr.lu.UpReadOnly, wr.set(BH.up[0], BH.up[1], BH.up[2]), Zr), Dr.rotateByQuaternionToRef(Zr, Dr)
      }
      HH.updateVector3("sun", Dr), dr[0] = Dr.x, dr[1] = Dr.y, dr[2] = Dr.z;
      const hH = NB(BH, dr, ar);
      HH.updateFloatsFrom("sunDir", hH.sunDir, 0, 3), HH.updateFloat("sunE", hH.sunE), HH.updateFloatsFrom("inScatterR", hH.inScatterR, 0, 3), HH.updateFloatsFrom("inScatterM", hH.inScatterM, 0, 3), HH.updateFloatsFrom("extinctionBeta", hH.extinctionBeta, 0, 3), HH.updateFloat("sunsetMix", hH.sunsetMix), HH.updateFloat("sunDiscE", hH.sunDiscE), HH.updateFloat("mieScale", hH.mieScale), HH.updateFloat("mieBase", hH.mieBase), HH.updateFloat("mieSlope", hH.mieSlope)
    }

    function ir(HH, BH) {
      const LH = sr;
      LH[0] = BH.far, LH[5] = BH.far, LH[10] = BH.far, LH[15] = 1;
      const AH = HH.infiniteDistance;
      for (let rH = 0; rH < 3; rH++) LH[12 + rH] = HH.position[rH] + (AH ? BH.worldMatrix[12 + rH] : 0);
      return sr
    }
    class pr {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(HH, BH, LH, AH, rH) {
        LH !== this.pipeline && (HH.setPipeline(LH), this.pipeline = LH), HH.setBindGroup(1, AH, [rH]);
        const SH = BH.material.bindGroup;
        SH !== this.materialGroup && (HH.setBindGroup(2, SH), this.materialGroup = SH);
        const hH = BH.program.packGroup;
        hH && hH !== this.packGroup && (HH.setBindGroup(JB.g, hH), this.packGroup = hH);
        const {
          vertexBuffers: tH,
          vertexOffsets: zH
        } = this;
        for (let CH = 0; CH < BH.vertexBuffers.length; CH++) tH[CH] === BH.vertexBuffers[CH] && zH[CH] === BH.vertexOffsets[CH] || (HH.setVertexBuffer(CH, BH.vertexBuffers[CH], BH.vertexOffsets[CH]), tH[CH] = BH.vertexBuffers[CH], zH[CH] = BH.vertexOffsets[CH]);
        BH.indexBuffer && BH.indexBuffer !== this.indexBuffer && (HH.setIndexBuffer(BH.indexBuffer, BH.indexFormat), this.indexBuffer = BH.indexBuffer)
      }
    }
    class yr {
      constructor(HH, BH, LH, AH) {
        this.modelMeshes = HH, this.fHH = BH, this.maker = LH, this.warnOnce = AH, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (HH, BH) => {
          (BH < -1 || BH > 1) && this.warnOnce(`group:${BH}`, `rendering group ${BH} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(HH) {
        this.collectGroup(HH, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(HH, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(HH, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.fHH.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(HS), this.transparentDraws.sort(BS)
      }
      collectGroup(HH, BH, LH, AH, rH) {
        const SH = this.modelMeshes.group(BH),
          hH = this.fHH.group(BH),
          tH = 0 === BH ? null === hH || void 0 === hH ? void 0 : hH.opaque : void 0;
        this.collectList(HH, null === SH || void 0 === SH ? void 0 : SH.opaque, tH || null === hH || void 0 === hH ? void 0 : hH.opaque, BH, !1, LH, rH), tH && (this.fHH.drawn += this.maker.bundleDraws(HH, tH, BH)), this.collectList(HH, null === SH || void 0 === SH ? void 0 : SH.alphaTest, void 0, BH, !1, LH, rH), this.collectList(HH, null === SH || void 0 === SH ? void 0 : SH.transparent, null === hH || void 0 === hH ? void 0 : hH.transparent, BH, !0, AH, rH)
      }
      collectList(HH, BH, LH, AH, rH, SH, hH) {
        var tH;
        const zH = SH.length;
        BH && this.maker.pushDraws(HH, BH.units, BH.units.length, AH, rH, SH, BH.rows), LH && (this.fHH.drawn += this.maker.pushDraws(HH, LH, LH.length, AH, rH, SH));
        const CH = rH ? null === (tH = this.modelMeshes.group(AH)) || void 0 === tH ? void 0 : tH.text : void 0;
        CH && this.maker.pushDraws(HH, CH.units, CH.units.length, AH, !0, SH, CH.rows), hH && LS(SH, zH)
      }
    }

    function HS(HH, BH) {
      return HH.program.id - BH.program.id || HH.material.owner.uniqueId - BH.material.owner.uniqueId
    }

    function BS(HH, BH) {
      return HH.material.owner.uniqueId - BH.material.owner.uniqueId
    }

    function LS(HH, BH) {
      for (let LH = BH + 1; LH < HH.length; LH++) {
        const AH = HH[LH];
        let rH = LH - 1;
        for (; rH >= BH && BS(HH[rH], AH) > 0; rH--) HH[rH + 1] = HH[rH];
        HH[rH + 1] = AH
      }
    }
    const AS = {};

    function rS(HH) {
      return HH.hasThinInstances ? "thin" : HH.ESH || HH._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function SS(HH, BH, LH) {
      return HH ? (LH._needUVs = !0, HH.optimizeUVAllocation && (0, mH.E)(HH.matrix) ? (LH[`${BH}DIRECTUV`] = HH.uvSet + 1, LH[`MAINUV${HH.uvSet+1}`] = !0) : LH[`${BH}DIRECTUV`] = 0, !0) : (LH[`${BH}DIRECTUV`] = 0, !1)
    }

    function hS(HH) {
      const BH = new Map;
      for (const LH in HH) {
        if (95 === LH.charCodeAt(0)) continue;
        const AH = HH[LH],
          rH = typeof AH;
        "number" === rH || "string" === rH ? BH.set(LH, String(AH)) : AH && "function" !== rH && BH.set(LH, !0)
      }
      return BH
    }

    function tS(HH) {
      const BH = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: LH
        }
        of HH.features)
        for (const HH in LH) BH[HH] = LH[HH];
      return BH
    }

    function zS(HH) {
      const BH = HH.parts.geometry;
      return null !== BH && void 0 !== BH && BH.live ? BH : null
    }

    function CS(HH) {
      var BH;
      return null !== (BH = zS(HH)) && void 0 !== BH ? BH : AS
    }
    class ES {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = HH, this.warnOnce = BH, this.programWithModel = LH, this.packFailed = AH, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(HH, BH, LH, AH, rH) {
        const SH = BH.owner;
        let hH = this.drawStates.get(BH);
        if (!hH) {
          const HH = BH.parts.materials[BH.range];
          if (!HH) return this.warnOnce("model", `${LH.name} on ${SH.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          hH = {
            defines: tS(HH),
            model: HH,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: rH,
            groupId: AH,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(BH, hH)
        }
        if (this.programCurrent(hH, BH, rH, AH)) return hH.program;
        const {
          model: tH
        } = hH, zH = CS(BH), CH = this.instanceLayout(SH, rH), EH = this.definesBits(SH);
        if (!this.prepareModelDefines(HH, SH, tH, hH.defines, AH, rH)) return null;
        hH.instancing = rH, hH.groupId = AH, hH.modelVersion = tH.version, hH.geometry = zH, hH.instanceLayout = CH, hH.definesBits = EH;
        const XH = function(HH) {
          let BH = "";
          for (const [LH, AH] of HH) BH += !0 === AH ? `${LH};` : `${LH}=${AH};`;
          return BH
        }(hS(hH.defines));
        return XH === hH.definesKey && hH.packVariant === this.modelPackVariant && hH.program && !this.packFailed(hH.program) || (hH.definesKey = XH, hH.packVariant = this.modelPackVariant, hH.program = this.programWithModel(tH, hH.defines, XH)), hH.program
      }
      programCurrent(HH, BH, LH, AH) {
        return null !== HH.program && !this.packFailed(HH.program) && HH.instancing === LH && HH.groupId === AH && this.definesHold(HH, BH, LH)
      }
      definesHold(HH, BH, LH) {
        return HH.modelVersion === HH.model.version && HH.geometry === CS(BH) && HH.instanceLayout === this.instanceLayout(BH.owner, LH) && HH.definesBits === this.definesBits(BH.owner) && HH.packVariant === this.modelPackVariant
      }
      modelPackKind(HH) {
        var BH;
        return 0 === this.modelPackVariant ? null : null !== (BH = (0, bH.s)(HH, OH.h.name)) && void 0 !== BH && BH.active ? "placed" : HH.item ? "item" : HH.lifeform ? "lifeform" : HH.box ? "box" : null
      }
      instanceLayout(HH, BH) {
        var LH, AH, rH;
        return "thin" === BH ? null !== (rH = this.resources.YHH.get(HH)) && void 0 !== rH ? rH : null : "instanced" === BH && null !== (LH = null === (AH = HH._userInstancedBuffersStorage) || void 0 === AH ? void 0 : AH.interleavedKinds) && void 0 !== LH ? LH : null
      }
      definesBits(HH) {
        const BH = this.view;
        return (HH.visibility < 1 ? 1 : 0) | (HH.hasVertexAlpha ? 2 : 0) | (HH.applyFog ? 4 : 0) | (HH.useVertexColors ? 8 : 0) | (HH.nonUniformScaling ? 16 : 0) | (BH.fogEnabled && 0 !== BH.fogMode ? 32 : 0) | (BH.lightsEnabled ? 64 : 0) | BH.lightCount << 7
      }
      prepareLightDefines(HH, BH, LH) {
        let AH = 0;
        if (this.view.lightsEnabled && !BH) {
          const BH = Math.min(LH, 4);
          for (; AH < this.view.lightCount && (HH[`LIGHT${AH}`] = !0, HH[`LITE_LIGHT${AH}_SLOT`] = AH, AH++, HH._needNormals = !0, AH !== BH););
        }
        for (let rH = AH; rH < 4; rH++) HH[`LIGHT${rH}`] = !1, HH[`LITE_LIGHT${rH}_SLOT`] = void 0
      }
      prepareModelDefines(HH, BH, LH, AH, rH, SH) {
        const {
          features: hH
        } = LH;
        AH._needNormals = !1, AH._needUVs = !1;
        const tH = this.view;
        this.prepareLightDefines(AH, LH.disableLighting, LH.maxSimultaneousLights), AH.MAINUV1 = !1, AH.MAINUV2 = !1;
        const zH = LH.diffuseTexture;
        zH ? (AH._needUVs = !0, AH.DIFFUSE = !0, zH.optimizeUVAllocation && (0, mH.E)(zH.matrix) ? (AH.DIFFUSEDIRECTUV = zH.uvSet + 1, AH[`MAINUV${zH.uvSet+1}`] = !0) : AH.DIFFUSEDIRECTUV = 0, zH.uvSet > 1 && this.warnOnce(`uvset:${LH.name}`, `${LH.name} samples UV set ${zH.uvSet+1}, which is not supported`)) : (AH.DIFFUSE = !1, AH.DIFFUSEDIRECTUV = 0);
        const CH = LH.opacityTexture,
          EH = LH.emissiveTexture;
        AH.OPACITY = SS(CH, "OPACITY", AH), AH.OPACITYRGB = null !== CH && CH.getAlphaFromRGB, AH.EMISSIVE = SS(EH, "EMISSIVE", AH), (CH && CH.uvSet > 1 || EH && EH.uvSet > 1) && this.warnOnce(`uvset:${LH.name}`, `${LH.name} samples a UV set past 2, which is not supported`);
        const XH = LH.reflectionTexture,
          GH = null !== XH;
        if (GH) {
          if (!this.resources.boundTexture(XH)) return !1;
          AH._needNormals = !0
        }
        AH.REFLECTION = GH, AH.REFLECTIONMAP_3D = GH, AH.REFLECTIONMAP_SKYBOX = GH, AH.REFLECTIONMAP_OPPOSITEZ = GH && (HH.useRightHandedSystem ? !XH.invertZ : XH.invertZ), AH.ROUGHNESS = GH && LH.roughness > 0, AH.REFLECTIONOVERALPHA = GH && LH.useReflectionOverAlpha, AH.LITE_REFLECTION_LUMINANCE = GH && "cube" === XH.source.kind && XH.source.luminance, (BH.skeleton || BH.morphTargetManager) && this.warnOnce(`skin:${BH.name}`, `${BH.name} has bones or morph targets, which are not supported`), AH.FOG = LH.fogEnabled && BH.applyFog && tH.fogEnabled && 0 !== tH.fogMode, AH.NONUNIFORMSCALING = BH.nonUniformScaling;
        const {
          visibility: YH,
          hasVertexAlpha: uH
        } = BH;
        AH.ALPHATEST = (0, bH.O)(LH, YH, uH), AH.ALPHAFROMDIFFUSE = (0, bH.ab)(LH), AH.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== LH.transparencyMode, AH.ALPHABLEND = null === LH.transparencyMode || (0, bH.N)(LH, YH, uH), AH.PREMULTIPLYALPHA = 7 === LH.alphaMode || 8 === LH.alphaMode, AH.EMISSIVEASILLUMINATION = LH.useEmissiveAsIllumination, AH.LINKEMISSIVEWITHDIFFUSE = LH.linkEmissiveWithDiffuse, AH.TWOSIDEDLIGHTING = !LH.backFaceCulling && LH.twoSidedLighting, AH.INSTANCES = "none" !== SH, AH.THIN_INSTANCES = "thin" === SH, AH.LITE_FRONT_LAYER = rH >= 1;
        for (const {
            feature: VH,
            state: OH,
            active: bH
          }
          of hH) {
          var QH, WH;
          if (bH) null === (QH = (WH = (0, KB.h)(VH)).prepareDefinesBeforeAttributes) || void 0 === QH || QH.call(WH, OH, AH, HH, BH)
        }
        this.modelPackKind(LH) && (AH._needNormals = !0), AH.NORMAL = AH._needNormals && BH.isVerticesDataPresent("normal"), AH.UV1 = AH._needUVs && BH.isVerticesDataPresent("uv"), AH.UV2 = AH._needUVs && BH.isVerticesDataPresent("uv2");
        const MH = BH.useVertexColors && BH.isVerticesDataPresent("color");
        AH.VERTEXCOLOR = MH, AH.VERTEXALPHA = BH.hasVertexAlpha && MH, AH.INSTANCESCOLOR = "none" !== SH && BH.isVerticesDataPresent("instanceColor");
        for (const {
            feature: VH,
            state: OH,
            active: bH
          }
          of hH) {
          var xH, vH;
          if (bH) null === (xH = (vH = (0, KB.h)(VH)).prepareDefines) || void 0 === xH || xH.call(vH, OH, AH, HH, BH, LH)
        }
        const PH = HH.Iu();
        for (const {
            feature: VH,
            state: OH,
            active: bH
          }
          of hH) {
          var TH, UH;
          if (bH && !1 === (null === (TH = (UH = (0, KB.h)(VH)).isReadyForSubMesh) || void 0 === TH ? void 0 : TH.call(UH, OH, AH, HH, PH))) return !1
        }
        return !0
      }
    }

    function XS(HH, BH, LH) {
      return HH.codeVersion !== BH.version && function(HH, BH) {
        const LH = [],
          AH = [];
        for (const {
            feature: GH,
            state: YH,
            active: uH
          }
          of BH.features) {
          var rH, SH, hH, tH;
          if (uH) GS(null === (rH = (SH = (0, KB.h)(GH)).getCustomCode) || void 0 === rH ? void 0 : rH.call(SH, YH, "vertex", UH.c.WGSL), LH), GS(null === (hH = (tH = (0, KB.h)(GH)).getCustomCode) || void 0 === hH ? void 0 : hH.call(tH, YH, "fragment", UH.c.WGSL), AH)
        }
        const zH = [];
        for (const {
            feature: GH,
            state: YH
          }
          of BH.features) {
          var CH, EH;
          const HH = null === (CH = (EH = (0, KB.h)(GH)).getUniforms) || void 0 === CH ? void 0 : CH.call(EH, YH, UH.c.WGSL);
          for (const BH of null !== (XH = null === HH || void 0 === HH ? void 0 : HH.ubo) && void 0 !== XH ? XH : []) {
            var XH;
            BH.size && BH.type && zH.push({
              name: BH.name,
              type: BH.type,
              arraySize: BH.arraySize
            })
          }
        }
        HH.vertexCode = LH, HH.fragmentCode = AH, HH.pluginUniforms = zH, HH.codeKey = JSON.stringify([LH, AH, zH]), HH.codeVersion = BH.version
      }(HH, BH), `${LH}#${HH.codeKey}`
    }

    function GS(HH, BH) {
      if (HH)
        for (const LH in HH) HH[LH] && BH.push([LH, HH[LH]])
    }
    const YS = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class uS {
      constructor(HH) {
        this.warnOnce = HH, this.states = new Map
      }
      renderState(HH, BH, LH, AH) {
        var rH;
        let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          hH = null !== (rH = HH.sideOrientation) && void 0 !== rH ? rH : BH.sideOrientation;
        BH._getWorldMatrixDeterminant() < 0 && (hH = 0 === hH ? 1 : 0);
        const tH = "triangle-list" === SH,
          zH = LH ? HH.alphaMode : 0,
          CH = (!LH || (0 === zH || HH.forceDepthWrite)) && !HH.disableDepthWrite,
          EH = tH && HH.backFaceCulling ? HH.cullBackFaces ? "back" : "front" : "none",
          XH = tH && 0 !== hH ? "ccw" : "cw",
          GH = HH.depthFunction,
          YH = tH ? HH.zOffset : 0,
          uH = tH ? HH.zOffsetUnits : 0,
          QH = !HH.disableColorWrite;
        return AH && AH.alphaMode === zH && AH.depthWrite === CH && AH.depthFunction === GH && AH.cullMode === EH && AH.frontFace === XH && AH.zOffset === YH && AH.zOffsetUnits === uH && AH.colourWrite === QH && AH.topology === SH ? AH : this.stateFor(zH, CH, GH, EH, XH, YH, uH, QH, SH)
      }
      stateFor(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = `${HH}|${BH}|${LH}|${AH}|${rH}|${SH}|${hH}|${tH}|${zH}`;
        let EH = this.states.get(CH);
        if (!EH) {
          var XH;
          const GH = HH ? SB(HH) : null;
          HH && !GH && this.warnOnce(`alpha:${HH}`, `alpha mode ${HH} is not supported`), EH = {
            key: CH,
            alphaMode: HH,
            depthFunction: LH,
            zOffset: SH,
            zOffsetUnits: hH,
            topology: zH,
            blend: GH,
            depthWrite: BH,
            depthCompare: LH && null !== (XH = YS.get(LH)) && void 0 !== XH ? XH : null,
            cullMode: AH,
            frontFace: rH,
            depthBias: -hH,
            depthBiasSlopeScale: -SH,
            colourWrite: tH
          }, this.states.set(CH, EH)
        }
        return EH
      }
    }
    var QS = LH(38206);

    function WS(HH) {
      if (!HH.frozen) return -1;
      let BH = HH.version;
      for (const {
          feature: LH,
          state: AH,
          active: rH
        }
        of HH.features) {
        if (!rH || !LH.bind) continue;
        const HH = (0, KB.h)(LH).uniformsVersion;
        if (!HH) return -1;
        BH += HH(AH)
      }
      return BH
    }
    class MS {
      constructor(HH, BH, LH) {
        this.slots = HH, this.data = BH, this.textures = LH, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(HH, BH) {
        this.write4(HH, BH, 0, 0, 0, 1)
      }
      updateFloat2(HH, BH, LH) {
        this.write4(HH, BH, LH, 0, 0, 2)
      }
      updateFloat3(HH, BH, LH, AH) {
        this.write4(HH, BH, LH, AH, 0, 3)
      }
      updateFloat4(HH, BH, LH, AH, rH) {
        this.write4(HH, BH, LH, AH, rH, 4)
      }
      updateVector3(HH, BH) {
        this.write4(HH, BH.x, BH.y, BH.z, 0, 3)
      }
      updateVector4(HH, BH) {
        this.write4(HH, BH.x, BH.y, BH.z, BH.w, 4)
      }
      updateColor3(HH, BH) {
        this.write4(HH, BH.r, BH.g, BH.b, 0, 3)
      }
      updateColor4(HH, BH, LH) {
        this.write4(HH, BH.r, BH.g, BH.b, LH, 4)
      }
      updateFloatsFrom(HH, BH, LH, AH) {
        const rH = this.slots.get(HH);
        if (!rH) return;
        const SH = this.data,
          hH = rH.offset;
        for (let tH = 0; tH < AH; tH++) SH[hH + tH] = BH[LH + tH]
      }
      updateFloat3TimesFloats(HH, BH, LH, AH) {
        const rH = this.slots.get(HH);
        if (!rH) return;
        const SH = this.data,
          hH = rH.offset;
        SH[hH] = BH[LH] * AH[0], SH[hH + 1] = BH[LH + 1] * AH[1], SH[hH + 2] = BH[LH + 2] * AH[2]
      }
      wHH(HH, BH) {
        const LH = this.slots.get(HH);
        LH && this.data.set(BH.m, LH.offset)
      }
      updateMatrixFloats(HH, BH) {
        const LH = this.slots.get(HH);
        LH && this.data.set(BH, LH.offset)
      }
      updateFloatArray(HH, BH) {
        const LH = this.slots.get(HH);
        if (!LH) return;
        if (!LH.arraySize || LH.stride === LH.floats) return void this.data.set(BH, LH.offset);
        const AH = Math.min(BH.length, LH.floats * LH.arraySize);
        for (let rH = 0; rH < AH; rH++) this.data[LH.offset + Math.floor(rH / LH.floats) * LH.stride + rH % LH.floats] = BH[rH]
      }
      updateArray(HH, BH) {
        this.updateFloatArray(HH, BH)
      }
      setTexture(HH, BH) {
        this.textures.set(HH, BH), this.expected.delete(HH)
      }
      expectTexture(HH) {
        this.textures.set(HH, null), this.expected.add(HH)
      }
      write4(HH, BH, LH, AH, rH, SH) {
        const hH = this.slots.get(HH);
        if (!hH) return;
        const tH = this.data,
          zH = hH.offset;
        tH[zH] = BH, SH > 1 && (tH[zH + 1] = LH), SH > 2 && (tH[zH + 2] = AH), SH > 3 && (tH[zH + 3] = rH)
      }
    }

    function xS(HH, BH) {
      const LH = zr,
        AH = QS.j,
        rH = HH.lights,
        SH = Math.min(HH.lightCount, 8);
      for (let hH = 0; hH < SH; hH++) {
        const HH = LH.lights + hH * LH.lightStride,
          SH = hH * QS.e;
        BH[HH] = rH[SH + AH.vector], BH[HH + 1] = rH[SH + AH.vector + 1], BH[HH + 2] = rH[SH + AH.vector + 2], BH[HH + 3] = rH[SH + AH.kind] === QS.f.directional ? 1 : 0, BH[HH + 4] = rH[SH + AH.diffuse], BH[HH + 5] = rH[SH + AH.diffuse + 1], BH[HH + 6] = rH[SH + AH.diffuse + 2], BH[HH + 7] = rH[SH + AH.range], BH[HH + 8] = rH[SH + AH.specular], BH[HH + 9] = rH[SH + AH.specular + 1], BH[HH + 10] = rH[SH + AH.specular + 2], BH[HH + 11] = rH[SH + AH.range]
      }
      BH[LH.fogInfos] = HH.fogMode, BH[LH.fogInfos + 1] = HH.fogStart, BH[LH.fogInfos + 2] = HH.fogEnd, BH[LH.fogInfos + 3] = HH.fogDensity, BH[LH.fogColour] = HH.fogColour[0], BH[LH.fogColour + 1] = HH.fogColour[1], BH[LH.fogColour + 2] = HH.fogColour[2], BH[LH.outputHeight] = HH.renderHeight, BH[LH.animTick] = HH.animTick, BH[LH.timeMs] = HH.timeMs
    }
    class vS {
      constructor(HH) {
        this.instancesOf = HH
      }
      refreshModelUniforms(HH, BH, LH, AH) {
        const rH = WS(LH);
        if (rH >= 0 && rH === BH.heldVersion && BH.textures.get("diffuseSampler") === LH.diffuseTexture && BH.textures.get("reflectionCubeSampler") === LH.reflectionTexture && BH.textures.get("opacitySampler") === LH.opacityTexture && BH.textures.get("emissiveSampler") === LH.emissiveTexture) return !0;
        if (rH < 0)
          for (const SH of this.instancesOf(LH)) SH.heldVersion = -1;
        return this.writeModelUniforms(HH, BH, LH, AH), BH.heldVersion = rH, !1
      }
      writeModelUniforms(HH, BH, LH, AH) {
        const {
          ubo: rH
        } = BH, SH = LH.diffuseTexture, hH = LH.diffuseColor;
        rH.updateFloat4("vDiffuseColor", hH[0], hH[1], hH[2], LH.alpha), SH && (rH.updateFloat2("vDiffuseInfos", SH.uvSet, SH.level), rH.updateMatrixFloats("diffuseMatrix", SH.matrix)), rH.updateFloat("alphaCutOff", LH.alphaCutOff), rH.updateFloatsFrom("vEmissiveColor", LH.emissiveColor, 0, 3), rH.updateFloat3TimesFloats("vAmbientColor", AH.ambientColour, 0, LH.ambientColor);
        const tH = LH.specularColor;
        rH.updateFloat4("vSpecularColor", tH[0], tH[1], tH[2], LH.specularPower), rH.setTexture("diffuseSampler", SH);
        const zH = LH.opacityTexture;
        zH && (rH.updateFloat2("vOpacityInfos", zH.uvSet, zH.level), rH.updateMatrixFloats("opacityMatrix", zH.matrix)), rH.setTexture("opacitySampler", zH);
        const CH = LH.emissiveTexture;
        CH && (rH.updateFloat2("vEmissiveInfos", CH.uvSet, CH.level), rH.updateMatrixFloats("emissiveMatrix", CH.matrix)), rH.setTexture("emissiveSampler", CH);
        const EH = LH.reflectionTexture;
        EH && rH.updateMatrixFloats("reflectionMatrix", EH.matrix), rH.updateFloat2("vReflectionInfos", EH ? EH.level * HH.iblIntensity : 0, LH.roughness), rH.setTexture("reflectionCubeSampler", EH);
        const XH = HH.Iu();
        for (const {
            feature: uH,
            state: QH,
            active: WH
          }
          of LH.features) {
          var GH, YH;
          if (WH) null === (GH = (YH = (0, KB.h)(uH)).bind) || void 0 === GH || GH.call(YH, QH, rH, HH, XH)
        }
      }
    }

    function PS(HH) {
      const BH = HH.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(BH) ? "u32" : /i32|^vec\di$/.test(BH) ? "i32" : "f32"
    }

    function TS(HH, BH) {
      const LH = HH.getSize(),
        AH = PS(BH),
        rH = HH => 4 === LH ? `${HH}x4` : 2 === LH ? `${HH}x2` : null;
      if ("f32" === AH) {
        if (5126 === HH.type) return 1 === LH ? "float32" : LH >= 2 && LH <= 4 ? `float32x${LH}` : null;
        if (!HH.normalized) return null;
        switch (HH.type) {
          case 5121:
            return rH("unorm8");
          case 5120:
            return rH("snorm8");
          case 5123:
            return rH("unorm16");
          case 5122:
            return rH("snorm16")
        }
        return null
      }
      const SH = "u32" === AH ? "uint" : "sint";
      switch (HH.type) {
        case 5125:
        case 5124:
          return 1 === LH ? `${SH}32` : LH <= 4 ? `${SH}32x${LH}` : null;
        case 5121:
        case 5120:
          return rH(`${SH}8`);
        case 5123:
        case 5122:
          return rH(`${SH}16`)
      }
      return null
    }

    function US(HH) {
      var BH;
      const LH = /(8|16|32)(?:x(\d))?$/.exec(HH);
      return LH ? Number(LH[1]) / 8 * Number(null !== (BH = LH[2]) && void 0 !== BH ? BH : 1) : 4
    }
    class VS {
      constructor(HH, BH, LH) {
        this.resources = HH, this.limits = BH, this.warnOnce = LH, this.layouts = new Map
      }
      resolveInputs(HH, BH, LH, AH) {
        const rH = [],
          SH = LH.program.attributes,
          hH = [];
        for (let EH = 0; EH < SH.length; EH++) {
          const LH = SH[EH],
            tH = LH.optional ? null : this.resources.vertexInput(HH, LH.name, AH);
          if (!tH) {
            const HH = PS(LH.type),
              BH = "u32" === HH ? "uint32x4" : "i32" === HH ? "sint32x4" : "float32x4";
            hH.push(null);
            const AH = rH.find((HH => null === HH.data));
            AH ? AH.attributes.push({
              shaderLocation: EH,
              offset: 0,
              format: BH
            }) : rH.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: EH,
                offset: 0,
                format: BH
              }]
            });
            continue
          }
          const zH = tH.getBuffer();
          hH.push(tH);
          const CH = TS(tH, LH.type);
          if (!CH) return this.warnOnce(`format:${BH}:${LH.name}`, `${BH}'s ${LH.name} (type ${tH.type}, size ${tH.getSize()}) has no WebGPU vertex format`), null;
          const XH = tH.getIsInstanced() ? "instance" : "vertex",
            GH = tH.byteStride,
            YH = US(CH),
            uH = rH.find((HH => HH.data === zH && HH.stride === GH && HH.step === XH && tH.byteOffset >= HH.base && tH.byteOffset - HH.base + YH <= GH));
          uH ? uH.attributes.push({
            shaderLocation: EH,
            offset: tH.byteOffset - uH.base,
            format: CH
          }) : rH.push({
            data: zH,
            base: tH.byteOffset,
            stride: GH,
            step: XH,
            attributes: [{
              shaderLocation: EH,
              offset: 0,
              format: CH
            }]
          })
        }
        if (rH.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${BH}`, `${BH} needs ${rH.length} vertex buffers`), null;
        let tH = "";
        for (const EH of rH) {
          tH += `${EH.stride}${"instance"===EH.step?"i":"v"}`;
          for (const HH of EH.attributes) tH += `,${HH.shaderLocation}:${HH.offset}:${HH.format}`;
          tH += ";"
        }
        let zH = this.layouts.get(tH);
        zH || (zH = {
          key: tH,
          buffers: rH.map((HH => ({
            arrayStride: HH.stride,
            stepMode: HH.step,
            attributes: HH.attributes
          }))),
          instanceEnds: rH.map((HH => {
            let BH = -1;
            if ("instance" === HH.step)
              for (const LH of HH.attributes) BH = Math.max(BH, LH.offset + US(LH.format));
            return BH
          }))
        }, this.layouts.set(tH, zH));
        const CH = rH.map((HH => HH.base));
        return {
          program: LH,
          sources: hH,
          layout: zH,
          slotData: rH.map((HH => HH.data)),
          cHH: CH,
          buffers: [],
          offsets: CH,
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

    function OS(HH, BH, LH, AH) {
      const rH = BH.program.program.attributes;
      for (let SH = 0; SH < rH.length; SH++) {
        if ((rH[SH].optional ? null : LH.vertexInput(HH, rH[SH].name, AH)) !== BH.sources[SH]) return !1
      }
      return !0
    }
    const bS = 64;
    class kS {
      constructor(HH, BH, LH, AH) {
        this.device = HH, this.layout = BH, this.frameBuffer = LH, this.label = AH, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(HH) {
        if (HH * bS <= this.data.length) return !1;
        let BH = 2 * this.data.length;
        for (; HH * bS > BH;) BH *= 2;
        const LH = new Float32Array(BH);
        return LH.set(this.data), this.data = LH, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const rH = this.data,
          SH = HH * bS;
        let hH = rH[SH + 16] !== LH;
        for (let tH = 0; tH < 16 && !hH; tH++) hH = rH[SH + tH] !== BH[AH + tH];
        if (hH) {
          for (let HH = 0; HH < 16; HH++) rH[SH + HH] = BH[AH + HH];
          rH[SH + 16] = LH
        }
        return hH
      }
      upload(HH, BH) {
        this.device.queue.writeBuffer(this.buffer, HH * Cr, this.data, HH * bS, (BH - HH) * bS)
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

    function mS(HH) {
      return HH.gpu[mH.d.lite] ??= HH.materials.map(((BH, LH) => ({
        parts: HH,
        range: LH,
        owner: HH.owner
      })))
    }

    function oS(HH) {
      var BH, LH, AH;
      return null !== (BH = null !== (LH = null === (AH = HH.parts.materials[HH.range]) || void 0 === AH ? void 0 : AH.mirror) && void 0 !== LH ? LH : HH.owner.material) && void 0 !== BH ? BH : null
    }
    const IS = ["opaque", "alphaTest", "transparent", "text"];

    function fS(HH) {
      for (const BH of IS) HH[BH].units.length = 0, HH[BH].rows.length = 0
    }
    class lS {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, lB.e)("Lite: ")
      }
      attach(HH, BH) {
        this.model = HH, this.mirror = BH
      }
      get worlds() {
        return this.model.nodes.cX
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(HH) {
        return this.groups.get(HH)
      }
      forEachGroup(HH) {
        this.groups.forEach(HH)
      }
      forEachSelected(HH) {
        for (const [BH, LH] of this.groups)
          for (const AH of IS)
            for (const rH of LH[AH].units) HH(rH.owner, "text" === AH ? "transparent" : AH, BH)
      }
      select(HH, BH) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(fS);
        const {
          model: LH,
          mirror: AH
        } = this;
        if (!LH || !AH || !HH) return;
        this.rows.length < LH.nodes.aX && (this.rows = new Int32Array(LH.nodes.aX));
        const rH = this.rows,
          SH = LH.meshes;
        for (let tH = 0; tH < SH.looseCount; tH++) {
          const HH = SH.loose[tH],
            LH = AH.nodes[HH];
          LH && !LH.isBlocked && LH.isEnabled() && !LH.bX.hasAZeroComponent && SH.selects(HH, BH.frustum) && (this.activate(LH, HH), this.selectedCount++)
        }
        const hH = SH.selectTextPlanes(BH.frustum, rH);
        for (let tH = 0; tH < hH; tH++) {
          const BH = rH[tH],
            SH = AH.nodes[BH],
            hH = LH.meshes.parts[BH];
          if (!SH.isVisible || !(SH.visibility > 0) || 0 === (SH.layerMask & HH.layerMask) || !hH) continue;
          const zH = this.groupOf(LH.meshes.layer[BH]).text;
          for (const HH of mS(hH)) zH.units.push(HH), zH.rows.push(BH);
          this.selectedCount++
        }
      }
      instanceBatch(HH) {
        const BH = this.batchOf(HH);
        return BH.dispatched || (BH.dispatched = BH.renderSelf = !0, BH.row = this.rowOf(HH)), BH
      }
      rowOf(HH) {
        return HH.row
      }
      activate(HH, BH) {
        if (!HH.xR) {
          const LH = HH;
          if (LH.ESH) {
            const HH = this.batchOf(LH);
            HH.dispatched = !0, HH.renderSelf = !0, HH.row = BH
          }
          return void this.dispatch(LH, BH, BH)
        }
        const LH = HH,
          AH = LH.XSH;
        if (AH._getWorldMatrixDeterminant() >= 0 !== LH._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${AH.name}`, `A mirrored InstancedMesh of ${AH.name} is not drawn yet`);
        const rH = this.batchOf(AH);
        rH.instances.push(LH), rH.rows.push(BH), rH.dispatched || (rH.dispatched = !0, this.dispatch(AH, BH, this.rowOf(AH)))
      }
      batchOf(HH) {
        let BH = this.batches.get(HH);
        return BH || (BH = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(HH, BH)), BH.frame !== this.frame && (BH.frame = this.frame, BH.dispatched = !1, BH.renderSelf = !1, BH.instances.length = 0, BH.rows.length = 0), BH
      }
      dispatch(HH, BH, LH) {
        const {
          layer: AH,
          parts: rH
        } = this.model.meshes;
        if (!rH[BH]) return;
        const SH = this.groupOf(AH[BH]),
          hH = HH;
        for (const tH of mS(rH[BH])) {
          const HH = oS(tH);
          if (!HH) continue;
          const BH = HH.needAlphaBlendingForMesh(hH) ? SH.transparent : HH.needAlphaTestingForMesh(hH) ? SH.alphaTest : SH.opaque;
          BH.units.push(tH), BH.rows.push(LH)
        }
      }
      groupOf(HH) {
        let BH = this.groups.get(HH);
        return BH || (BH = {
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
        }, this.groups.set(HH, BH)), BH
      }
    }

    function KS(HH) {
      HH.opaque.length = 0, HH.transparent.length = 0
    }
    class cS {
      constructor() {
        this.LX = new Map, this.enabled = [], this.groups = new Map, this.hX = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(HH) {
        if (this.LX.has(HH)) return;
        const BH = {
          mesh: HH,
          observer: HH.onEffectiveEnabledStateChangedObservable.add((HH => {
            this.vI(BH, HH)
          })),
          index: -1,
          steady: null
        };
        this.LX.set(HH, BH), this.vI(BH, HH.isEnabled())
      }
      remove(HH) {
        const BH = this.LX.get(HH);
        BH && (BH.observer.remove(!0), this.vI(BH, !1), this.LX.delete(HH))
      }
      dropSteady() {
        for (const HH of this.LX.values()) HH.steady = null
      }
      base(HH) {
        return this.LX.get(HH)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          LX: this.LX.size
        }
      }
      forEachSelected(HH) {
        for (const [BH, LH] of this.groups) {
          for (const AH of LH.opaque) HH(AH.owner, "opaque", BH);
          for (const AH of LH.transparent) HH(AH.owner, "transparent", BH)
        }
        for (const BH of this.hX) HH(BH.mesh, "opaque", 0)
      }
      group(HH) {
        return this.groups.get(HH)
      }
      forEachGroup(HH) {
        this.groups.forEach(HH)
      }
      select(HH, BH) {
        if (this.drawn = 0, this.selected = 0, this.hX.length = 0, this.groups.forEach(KS), !HH) return;
        const LH = this.enabled;
        for (let AH = 0; AH < LH.length; AH++) {
          const rH = LH[AH];
          if (rH.steady && BH(rH, HH)) {
            this.selected++, this.hX.push(rH);
            continue
          }
          const SH = rH.mesh;
          if (SH.isBlocked || SH.bX.hasAZeroComponent) continue;
          if (!SH.isVisible || SH.visibility <= 0 || 0 === (SH.layerMask & HH.layerMask)) continue;
          if (SH.ESH) {
            this.warned.has(SH.name) || (this.warned.add(SH.name), console.warn(`Lite: thin instance base ${SH.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: hH
          } = SH;
          if (!hH) continue;
          SH.computeWorldMatrix(), this.selected++;
          const tH = this.listsFor(SH.renderingGroupId);
          for (const HH of mS(hH)) {
            const BH = oS(HH);
            BH && (BH.needAlphaBlendingForMesh(SH) ? tH.transparent.push(HH) : tH.opaque.push(HH))
          }
        }
      }
      vI(HH, BH) {
        if (BH === HH.index >= 0) return;
        HH.steady = null;
        const LH = this.enabled;
        if (BH) HH.index = LH.length, LH.push(HH);
        else {
          const BH = LH.pop();
          BH !== HH && (LH[HH.index] = BH, BH.index = HH.index), HH.index = -1
        }
      }
      listsFor(HH) {
        let BH = this.groups.get(HH);
        return BH || (BH = {
          opaque: [],
          transparent: []
        }, this.groups.set(HH, BH)), BH
      }
    }
    var eS = LH(40630);
    class qS {
      constructor() {
        this.bundle = null, this.stale = !0, this.LX = new Set
      }
    }
    class gS {
      constructor(HH, BH, LH) {
        this.device = HH, this.slots = BH, this.host = LH, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new qS, this.mq = new qS, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new pr, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = HH => {
          HH.seen !== this.frame && (HH.draw && (HH.draw = null, this.args[5 * HH.slot + 1] = 0, this.argsDirty = !0, this.mq.stale ||= HH.mq), this.frame - HH.seen > 120 && (this.records.delete(HH.unit), this.freeSlots.push(HH.slot), HH.recorded && (this.bundleOf(HH).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(HH) {
          var BH, LH;
          let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (BH = null === (LH = globalThis.navigator) || void 0 === LH ? void 0 : LH.userAgent) && void 0 !== BH ? BH : "";
          const rH = HH.adapterInfo;
          return "intel" === (null === rH || void 0 === rH ? void 0 : rH.vendor) && "gen-12lp" === rH.architecture && AH.includes("Windows")
        }(HH), (0, eS.N)(this.direct)
      }
      WU() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, eS.N)(this.directThisFrame)
      }
      add(HH, BH, LH, AH) {
        let rH = this.records.get(HH);
        return rH || (rH = this.createRecord(HH), this.records.set(HH, rH)), rH.recorded && RS(rH, BH) || (this.bundleOf(rH).stale = !0), this.place(rH, BH, LH, AH), rH
      }
      bundleOf(HH) {
        return HH.mq ? this.mq : this.main
      }
      addAgain(HH, BH, LH, AH) {
        HH.recorded || (this.bundleOf(HH).stale = !0), this.place(HH, BH, LH, AH)
      }
      place(HH, BH, LH, AH) {
        HH.seen = this.frame, HH.mq && null === HH.draw && (this.mq.stale = !0), HH.draw = BH, this.drawn++, LH && this.slots.write(HH.slot, LH, AH) && (this.slotsFrom = Math.min(this.slotsFrom, HH.slot), this.slotsTo = Math.max(this.slotsTo, HH.slot));
        const rH = this.args,
          SH = 5 * HH.slot;
        rH[SH] === BH.count && rH[SH + 1] === BH.instances && rH[SH + 2] === BH.first || (rH[SH] = BH.count, rH[SH + 1] = BH.instances, rH[SH + 2] = BH.first, this.argsDirty = !0, this.mq.stale ||= HH.mq)
      }
      OX() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(HH) {
        for (const BH of this.records.values()) BH.draw && BH.seen === this.frame && !BH.mq && HH(BH.draw, this.slots.data, BH.slot * Cr / 4)
      }
      resourceDestroyed(HH) {
        this.main.stale ||= this.main.LX.has(HH), this.mq.stale ||= this.mq.LX.has(HH)
      }
      execute(HH, BH, LH) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(HH, BH, LH, "direct"), this.drawn;
        const AH = this.host.sceneGroup(BH);
        if (!AH) return this.main.bundle = null, this.mq.bundle = null, this.recordedSceneGroup = null, this.encode(HH, BH, LH, "direct"), this.drawn;
        this.recordedTarget === LH && this.recordedSceneGroup === AH || (this.recordedTarget = LH, this.recordedSceneGroup = AH, this.main.stale = !0, this.mq.stale = !0);
        const rH = this.main,
          SH = this.mq;
        let hH = !1;
        !rH.stale && rH.bundle || (rH.bundle = this.record(BH, LH, AH, "indirect"), hH = !0);
        const tH = (0, eS.m)();
        return (SH.stale || this.rangedEpoch !== tH) && (this.rangedEpoch = tH, SH.bundle = this.drawsRanged() ? this.record(BH, LH, AH, "mq") : this.noRangedBundle(), hH = !0), hH && (this.bundles = SH.bundle ? [rH.bundle, SH.bundle] : [rH.bundle]), HH.executeBundles(this.bundles), HH.setBindGroup(0, AH), this.drawn
      }
      record(HH, BH, LH, AH) {
        const rH = this.device.createRenderBundleEncoder({
          label: "mq" === AH ? "thin-bases-ranged" : "thin-bases",
          colorFormats: HH._colorFormat ? [HH._colorFormat] : [],
          depthStencilFormat: HH._depthStencilFormat,
          sampleCount: HH._sampleCount
        });
        return rH.setBindGroup(0, LH), this.encode(rH, HH, BH, AH), rH.finish()
      }
      noRangedBundle() {
        for (const HH of this.records.values()) HH.mq && (HH.recorded = !1);
        return this.mq.LX.clear(), this.mq.stale = !1, null
      }
      drawsRanged() {
        for (const HH of this.records.values())
          if (HH.mq && HH.draw) return !0;
        return !1
      }
      encode(HH, BH, LH, AH) {
        const rH = [];
        for (const zH of this.records.values()) "direct" !== AH && zH.mq !== ("mq" === AH) || (zH.recorded = !1, zH.draw && rH.push(zH));
        rH.sort(jS);
        const SH = "direct" === AH ? null : "mq" === AH ? this.mq : this.main;
        null === SH || void 0 === SH || SH.LX.clear(), this.binder.reset();
        let hH = !1;
        for (const zH of rH) {
          var tH;
          const rH = zH.draw,
            CH = this.host.pipelineFor(rH, BH, LH);
          if (!CH) {
            this.host.pipelineCompiling(rH, LH) ? hH = !0 : SH && this.keep(zH, rH, SH.LX);
            continue
          }
          let EH;
          if (zH.mq && "indirect" !== AH) {
            const HH = zH.unit.owner;
            EH = "direct" === AH && (0, eS.y)(HH) || (0, eS.p)(HH) || void 0
          }
          if (SH && this.keep(zH, rH, SH.LX), 0 === (null === (tH = EH) || void 0 === tH ? void 0 : tH.count)) continue;
          this.binder.bind(HH, rH, CH, this.slots.bindGroup, zH.slot * Cr);
          const XH = 5 * zH.slot;
          if ("indirect" === AH) {
            rH.indexBuffer ? HH.drawIndexedIndirect(this.argsBuffer, 4 * XH) : HH.drawIndirect(this.argsBuffer, 4 * XH);
            continue
          }
          const GH = this.args;
          EH ? NS(HH, null !== rH.indexBuffer, GH, XH, EH) : rH.indexBuffer ? HH.drawIndexed(GH[XH], GH[XH + 1], GH[XH + 2], 0, 0) : HH.draw(GH[XH], GH[XH + 1], GH[XH + 2], 0)
        }
        SH && (SH.stale = hH)
      }
      keep(HH, BH, LH) {
        HH.recorded = !0, HH.pipelineKey = BH.pipelineKey, HH.materialGroup = BH.material.bindGroup, HH.vertexBuffers.length = 0, HH.vertexBuffers.push(...BH.vertexBuffers), HH.vertexOffsets = BH.vertexOffsets, HH.indexBuffer = BH.indexBuffer, HH.indexFormat = BH.indexFormat;
        for (const AH of BH.vertexBuffers) LH.add(AH);
        BH.indexBuffer && LH.add(BH.indexBuffer), LH.add(BH.material.buffer);
        for (const AH of BH.material.bound) AH && LH.add(AH)
      }
      createRecord(HH) {
        let BH = this.freeSlots.pop();
        return void 0 === BH && (BH = this.slotCount++, this.grow()), {
          unit: HH,
          slot: BH,
          mq: void 0 !== (0, eS.p)(HH.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.mq.stale = !0), 5 * this.slotCount > this.args.length) {
          const HH = new Uint32Array(2 * this.args.length);
          HH.set(this.args), this.args = HH, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function NS(HH, BH, LH, AH, rH) {
      const SH = LH[AH + 1],
        hH = rH.data;
      for (let tH = 0; tH < rH.count; tH++) {
        const rH = Math.min(hH[2 * tH], SH),
          zH = Math.min(hH[2 * tH + 1], SH - rH);
        0 !== zH && (BH ? HH.drawIndexed(LH[AH], zH, LH[AH + 2], 0, rH) : HH.draw(LH[AH], zH, LH[AH + 2], rH))
      }
    }

    function RS(HH, BH) {
      if (HH.pipelineKey !== BH.pipelineKey || HH.materialGroup !== BH.material.bindGroup || HH.indexBuffer !== BH.indexBuffer || HH.indexFormat !== BH.indexFormat || HH.vertexOffsets !== BH.vertexOffsets || HH.vertexBuffers.length !== BH.vertexBuffers.length) return !1;
      for (let LH = 0; LH < HH.vertexBuffers.length; LH++)
        if (HH.vertexBuffers[LH] !== BH.vertexBuffers[LH]) return !1;
      return !0
    }

    function jS(HH, BH) {
      return HS(HH.draw, BH.draw)
    }
    const nS = new WeakMap,
      FS = {
        depth: !1,
        sunShadow: !1
      };

    function DS(HH, BH) {
      let LH = nS.get(HH);
      LH || (LH = new Map, nS.set(HH, LH));
      const AH = `${BH.depth?"-depth":""}${BH.sunShadow?"-shadow":""}${BH.shadowMask?"-mask":""}`;
      let rH = LH.get(AH);
      if (!rH) {
        const SH = [{
          binding: JB.d,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: JB.k
          }
        }, {
          binding: JB.A,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        BH.depth && SH.push({
          binding: JB.v,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), BH.sunShadow && SH.push(... function() {
          const HH = GPUShaderStage.FRAGMENT,
            BH = JB.w;
          return [{
            binding: BH.uniform,
            visibility: HH,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: BH.aG,
            visibility: HH,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: BH.special,
            visibility: HH,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: BH.volume,
            visibility: HH,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: BH.sampler,
            visibility: HH,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: BH.entities,
            visibility: HH,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: BH.entityGrids,
            visibility: HH,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), BH.shadowMask && SH.push({
          binding: JB.y,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), rH = HH.createBindGroupLayout({
          label: `${BH.depth?"terrain-":""}shader-pack-inputs${AH}`,
          entries: SH
        }), LH.set(AH, rH)
      }
      return rH
    }

    function wS(HH) {
      return DS(HH, FS)
    }

    function ZS(HH, BH) {
      if (!BH) return !1;
      const LH = (0, iB.c)(HH);
      return !!LH && SA(LH, BH)
    }

    function dS(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!lA(BH)) return [];
      return [DS(HH, {
        depth: kA(BH.packVariant),
        sunShadow: ZS(BH.packVariant, LH),
        shadowMask: AH
      })]
    }
    class aS {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = HH, this.sunShadow = LH, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(JB.k), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = HH.createBuffer({
          label: "shader-pack-inputs",
          size: JB.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const AH = (0, JB.D)(BH);
        this.textures = HH.createBuffer({
          label: "shader-pack-textures",
          size: AH.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), HH.queue.writeBuffer(this.textures, 0, AH), this.bindGroup = HH.createBindGroup({
          label: "shader-pack-inputs",
          layout: wS(HH),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: JB.d,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: JB.A,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(HH, BH, LH) {
        (0, JB.L)(this.data, {
          seconds: HH.seconds(),
          lit: LH,
          renderOffset: HH.renderOffset(),
          QBH: HH.QBH(),
          eyePosition: BH,
          shadowDirection: HH.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const AH = BH ? this.sunShadow : null;
        if ((BH || LH) && !AH) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!HH && !AH) return this.bindGroup;
        (HH && HH !== this.depthView || LH && LH !== this.maskView) && (this.depthView = null !== HH && void 0 !== HH ? HH : this.depthView, this.maskView = null !== LH && void 0 !== LH ? LH : this.maskView, this.groups.clear());
        const rH = (HH ? 1 : 0) | (AH ? 2 : 0) | (LH ? 4 : 0);
        let SH = this.groups.get(rH);
        if (!SH) {
          const BH = this.entries();
          HH && BH.push({
            binding: JB.v,
            resource: HH
          }), AH && BH.push(...AH.entries()), LH && BH.push({
            binding: JB.y,
            resource: LH
          }), SH = this.device.createBindGroup({
            label: `${HH||LH?"terrain-":""}shader-pack-inputs${HH?"-depth":""}${AH?"-shadow":""}${LH?"-mask":""}`,
            layout: DS(this.device, {
              depth: !!HH,
              sunShadow: !!AH,
              shadowMask: !!LH
            }),
            entries: BH
          }), this.groups.set(rH, SH)
        }
        return SH
      }
      bind(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        HH.setBindGroup(JB.g, this.bindGroupFor(BH, LH, AH))
      }
    }

    function sS(HH, BH, LH) {
      if (HH.gpuVersion === BH.gpuBuffersVersion) return !0;
      let AH;
      do {
        if (AH = BH.gpuBuffersVersion, !JS(HH, BH, LH)) return !1
      } while (BH.gpuBuffersVersion !== AH);
      return HH.gpuVersion = AH, HH.fitInstances = 0, !0
    }

    function JS(HH, BH, LH) {
      let AH = null;
      for (let SH = 0; SH < HH.slotData.length; SH++) {
        var rH;
        const hH = HH.slotData[SH],
          tH = hH ? BH.gpuBuffer(hH) : LH;
        if (!tH) return !1;
        hH && HH.layout.instanceEnds[SH] < 0 && BH.cover(hH, Number.POSITIVE_INFINITY), HH.buffers[SH] = tH;
        const zH = HH.cHH[SH] + (hH ? BH.gpuOffset(hH) : 0);
        zH !== (null !== (rH = AH) && void 0 !== rH ? rH : HH.offsets)[SH] && (AH ??= HH.offsets.slice(), AH[SH] = zH), HH.ends[SH] = hH ? BH.gpuEnd(hH) : tH.size
      }
      return AH && (HH.offsets = AH), !0
    }

    function iS(HH, BH, LH, AH) {
      if (BH <= HH.fitInstances) return null;
      const {
        layout: rH,
        ends: SH,
        offsets: hH,
        slotData: tH,
        cHH: zH
      } = HH;
      let CH = !1;
      for (let EH = 0; EH < rH.buffers.length; EH++) {
        const HH = rH.instanceEnds[EH];
        if (HH < 0) continue;
        const AH = (BH - 1) * rH.buffers[EH].arrayStride + HH;
        if (SH[EH] - hH[EH] < AH) return {
          index: EH,
          needed: AH
        };
        const XH = tH[EH];
        XH && LH.cover(XH, zH[EH] + AH) && (CH = !0)
      }
      return CH && sS(HH, LH, AH), HH.fitInstances = BH, null
    }
    var pS = LH(38681),
      yS = LH(38713);
    const Hh = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Bh = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Lh = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Ah = `((vertexInputs.aPackedLightLevels >> 16u) | ${fB.d.placed}u)`,
      rh = "u32(vertexInputs.aShaderPackItem.x)",
      Sh = `${fB.d.lifeform}u`;

    function hh(HH) {
      return "item" === HH.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const th = "bloxdSpEnchant",
      zh = "floor(finalWorld[3].xyz)";

    function Ch(HH, BH, LH) {
      return "placed" === BH.kind && HH.reads[LH].includes("bloxdFragmentBlockPosition")
    }

    function Eh(HH, BH) {
      let [LH, AH] = HH;
      return LH === BH.point && AH === BH.code
    }

    function Xh(HH, BH) {
      var LH, AH, rH;
      const SH = null === (LH = HH.find((HH => HH.texture))) || void 0 === LH ? void 0 : LH.texture,
        hH = null === (AH = HH.find((HH => HH.enchantTier))) || void 0 === AH ? void 0 : AH.enchantTier,
        tH = null === (rH = HH.find((HH => HH.overlay))) || void 0 === rH ? void 0 : rH.overlay,
        zH = tH ? BH.filter((HH => Eh(HH, tH))).length : 0;
      return tH && 1 === zH ? {
        texture: SH,
        overlay: tH,
        enchantTier: hH
      } : {
        texture: SH,
        enchantTier: hH
      }
    }

    function Gh(HH) {
      if ("item" === HH.kind) {
        return {
          vertexFlags: `(${rh} & 0xffffu)`,
          varying: "vPackItem",
          value: rh,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return HH.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Ah,
        varying: "vPackFlags",
        value: Ah,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Yh(HH) {
      return "lifeform" === HH.kind ? Sh : "0u"
    }

    function uh(HH) {
      return !!HH.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Qh(HH, BH) {
      const {
        enchantTier: LH
      } = BH;
      return LH && uh(BH.defines) && "lifeform" === BH.kind && Th(HH, "enchantTier") ? LH : null
    }

    function Wh(HH, BH) {
      return uh(BH.defines) && Th(HH, "enchantSpeed")
    }

    function Mh(HH) {
      const {
        overlay: BH,
        defines: LH
      } = HH;
      if (!BH || !LH.DIFFUSE) return null;
      const AH = LH.VERTEXCOLOR || LH.INSTANCESCOLOR && LH.INSTANCES;
      return `vec4f(${BH.colour}.rgb * uniforms.vDiffuseInfos.y${AH?" * fragmentInputs.vColor.rgb":""}, ${BH.colour}.a)`
    }
    const xh = "fragmentInputs.vPackTexture";

    function vh(HH) {
      const {
        atlas: BH,
        defines: LH,
        texture: AH
      } = HH;
      if (BH || !LH.DIFFUSE) return null;
      if (AH) return {
        texture: "diffuseSampler",
        ...AH
      };
      const rH = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===LH.DIFFUSEDIRECTUV?"vMainUV1":2===LH.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== HH.kind) return rH;
      if (!LH.BLOXD_PLUGIN_ANIMATED) return {
        ...rH,
        id: xh
      };
      const SH = UH.c.WGSL,
        hH = (0, UH.Cb)(SH, "uAnimStatesNum"),
        tH = (0, UH.eb)(SH, (0, pS.g)(SH), hH),
        zH = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${hH})`,
        layers: [tH],
        uv: `vec2f(${zH}.x, ${zH}.y * ${hH} - ${tH})`,
        levelUv: zH,
        id: xh
      }
    }

    function Ph(HH, BH) {
      return "box" === BH.kind && !!HH.hooks.surface && null !== vh(BH)
    }

    function Th(HH, BH) {
      return HH.reads.fragment.includes(BH)
    }

    function Uh(HH) {
      return !!HH.BLOXD_LIGHTING && !HH.BLOXD_UNLIT
    }

    function Vh(HH, BH, LH, AH) {
      const rH = HH.filter((HH => {
        let [LH, AH] = HH;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === LH && AH === BH
      }));
      if (1 !== rH.length) throw new Error(`A model program for shader packs has ${0===rH.length?"no":"more than one"} ${AH} code before fog (lite/modelShaderPack.ts)`);
      return HH.map((HH => HH === rH[0] ? [HH[0], LH] : HH))
    }

    function Oh(HH, BH, LH, AH) {
      const {
        hooks: rH
      } = HH, {
        kind: SH,
        defines: hH
      } = BH, tH = [...LH];
      var zH;
      BH.atlas && rH.surface && tH.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", GA("atlasIdxIn")]), "item" === SH && tH.push(["CUSTOM_VERTEX_DEFINITIONS", (0, UH.d)(UH.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Ph(HH, BH) && tH.push(["CUSTOM_VERTEX_DEFINITIONS", (0, UH.d)(UH.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (zH = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${EA}[min(u32(${zH}) - 1u, arrayLength(&${EA}) - 1u)], ${zH} > 0.5);\n`)]);
      const CH = Gh(BH);
      CH && (rH.surface || rH.light) && tH.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${CH.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${CH.varying} = ${CH.value};`]);
      let EH = AH;
      if (Ch(HH, BH, "fragment") && (tH.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${zh});`]), EH = [...EH, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Th(HH, "localPosition") && tH.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${hh(BH)};`]), uh(hH) && rH.surface) {
        Wh(HH, BH) && tH.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const LH = Qh(HH, BH);
        LH && tH.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${LH});`]);
        const AH = (0, UH.ob)(UH.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        EH = [...Vh(EH, (0, yS.j)(UH.c.WGSL), AH, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, yS.d)(th)]]
      }
      const {
        overlay: XH
      } = BH;
      XH && Mh(BH) && rH.surface && (EH = EH.filter((HH => !Eh(HH, XH))));
      const GH = rH.light ? function(HH) {
        return "placed" === HH.kind ? {
          name: "terrain",
          engine: (0, dB._)(UH.c.WGSL),
          pack: (0, dB.ub)(UH.c.WGSL)
        } : HH.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, dB.P)(UH.c.WGSL),
          pack: (0, dB.pb)(UH.c.WGSL)
        } : null
      }(BH) : null;
      if (GH && (EH = Vh(EH, GH.engine, GH.pack, `${GH.name} light`), "placed" !== SH && Uh(hH))) {
        const HH = hH.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, UH.Cb)(UH.c.WGSL, "uEntityLightLevels") : (0, UH.Lb)(UH.c.WGSL, "aLightLevels");
        tH.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${dB.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, dB.qb)(UH.c.WGSL, HH)])
      }
      return {
        vertexCode: tH,
        fragmentCode: EH
      }
    }

    function bh(HH, BH, LH, AH) {
      return AA(HH, BH, LH, AH, "model")
    }
    const kh = "\t@builtin(position) position: vec4f,\n";

    function mh(HH, BH) {
      const LH = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(HH)[0];
      return `${LH}${BH}${HH.slice(LH.length)}`
    }

    function oh(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: rH
      } = BH, SH = SA(BH, AH), {
        kind: hH,
        defines: tH
      } = LH, zH = function(HH, BH) {
        var LH, AH, rH;
        const {
          defines: SH
        } = BH, hH = Gh(BH), tH = !!SH.FOG, zH = uh(SH), CH = null !== (LH = null === hH || void 0 === hH ? void 0 : hH.enchantTier) && void 0 !== LH ? LH : Qh(HH, BH) ? "fragmentInputs.vPackEnchantTier" : "0u", EH = "lifeform" === BH.kind && !SH.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (AH = null === hH || void 0 === hH ? void 0 : hH.vertexFlags) && void 0 !== AH ? AH : Yh(BH),
          vertexLocalPosition: hh(BH),
          flags: null !== (rH = null === hH || void 0 === hH ? void 0 : hH.flags) && void 0 !== rH ? rH : Yh(BH),
          normal: "normalW",
          alpha: EH ? "alpha * baseColor.a" : "alpha",
          alphaOut: EH ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: tH ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: tH ? "1.0 - fog" : "0.0",
          enchantTier: CH,
          enchantColour: zH ? `${th}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Wh(HH, BH) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Th(HH, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Mh(BH)
        }
      }(BH, LH), CH = HH.textures.filter((HH => /^textureAtlas\d+$/.test(HH.name))).length, EH = LH.atlas && CH > 0 ? {
        count: CH,
        layers: LH.atlas.layers,
        width: LH.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: HH.material.slots.has("uAnimDataPerTex") ? (BH, LH) => JA(BH, LH, function(HH) {
          const BH = HH.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            IX: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: HH => `uniforms.uAnimDataPerTex[${HH}]${BH}`
          }
        }(HH)) : null
      } : null, XH = "placed" === hH ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", GH = null !== EH && void 0 !== EH ? EH : vh(LH), YH = function(HH, LH) {
        let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,JB.H)()}${tA(BH,LH)}${AH}${uA(HH)}${HA}${XH}${BH.code}`
      };
      let {
        vertex: uH,
        fragment: QH
      } = HH;
      const WH = WA(rH, zH);
      if (WH) {
        const HH = Ch(BH, LH, "vertex") ? `\tbloxdSpCell = ${zh};\n` : "";
        uH = bh(uH, Hh, `${HH}${WH.slice(1)}${Hh}`, "vertex")
      }
      const MH = `${zA(BH,SH,function(HH,BH){return BH.TWOSIDEDLIGHTING?HH:`select(-(${HH}), ${HH}, fragmentInputs.frontFacing)`}(zH.normal,tH),zH.flags)}${MA(rH,BH.strict,BH.program,GH,zH)}`;
      MH && (QH = bh(QH, Bh, `${MH.slice(1)}${Bh}`, "surface")), SH && BH.sunShadow && !tH.TWOSIDEDLIGHTING && (QH = bh(QH, kh, `${kh}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const xH = PA(rH);
      if (xH) {
        const HH = vA(rH, Uh(tH), !0, zH);
        QH = bh(QH, Lh, `${HH}${xH.slice(1)}${Lh}`, "light")
      }
      const vH = Ph(BH, LH) ? XA : "";
      return {
        ...HH,
        vertex: mh(uH, YH(EH, !1, vH)),
        fragment: mh(QH, YH(GH, SH))
      }
    }
    const Ih = {
      name: "earthSky",
      uniqueId: -1
    };
    class fh {
      constructor(HH, BH) {
        this.resources = HH, this.epoch = BH, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const HH of this.instances.values()) HH.released = !0, this.resources.destroyBuffer(HH.buffer);
        this.instances.clear()
      }
    }

    function lh(HH) {
      return HH.failed && null !== HH.packGroup
    }
    class Kh {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new cS,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new lS;
        this.device = HH, this.resources = BH, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.fHH = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new pr, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new vS((HH => this.modelSlot(HH).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, lB.e)("Lite: "), this.renderStates = new uS(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (HH, BH) => this.keepSteady(HH, BH), this.lists = void 0, this.slotCount = 0, this.fHH = AH, this.modelMeshes = rH, this.lists = new yr(rH, AH, this, this.warnOnce), this.drawDefines = new ES(BH, this.warnOnce, ((HH, BH, LH) => this.programWithModel(HH, BH, LH)), lh), this.vertexLayouts = new VS(BH, HH.limits, this.warnOnce), this.sceneLayout = VB(HH), this.frameLayout = HH.createBindGroupLayout({
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
        }), this.frameBuffer = HH.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new kS(HH, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = HH.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new gS(HH, new kS(HH, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (HH, BH, LH) => this.pipelineFor(HH, BH, LH),
          pipelineCompiling: (HH, BH) => !HH.program.failed && !1 !== this.pipelines.get(`${HH.pipelineKey}|${BH}`),
          sceneGroup: HH => {
            const BH = LH(HH);
            return BH || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), BH
          }
        }), BH.onDestroy = HH => {
          this.thinBundle.resourceDestroyed(HH)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const rH = {
          order: HH,
          isTransparent: BH,
          _direct: !BH,
          bind: (HH, BH) => this.createBinding(rH, BH, LH, AH)
        };
        return rH
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(HH, BH, LH) {
        var AH;
        let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = BH, this.drawDefines.view = BH, this.thinBundle.WU(), this.writeFrameUniforms();
        const SH = null !== (AH = null === rH || void 0 === rH ? void 0 : rH.defineFor("model")) && void 0 !== AH ? AH : 0;
        this.drawDefines.modelPackVariant = SH, rH && 0 !== SH && (this.packInputs ??= new aS(this.device, rH.textureLayers(), this.sunShadow), this.packInputs.write(rH, BH.eye, rH.KQ())), this.lists.clear(), this.slotCount = 0;
        const hH = HH.activeCamera;
        this.fHH.select(hH, this.keepSteadyBase), this.modelMeshes.select(hH, BH), LH && this.pushEarthSky(LH), this.lists.collect(HH), this.thinBundle.OX(), this.uploadMeshSlots()
      }
      pushDraws(HH, BH, LH, AH, rH, SH) {
        let hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const tH = SH.length;
        for (let zH = 0; zH < LH; zH++) {
          const LH = BH[zH];
          let tH = this.retainedDraw(HH, LH, AH, rH);
          if (void 0 === tH && (tH = this.drawFor(HH, LH, AH, rH), this.retain(LH, tH)), tH) {
            const HH = LH.owner,
              BH = hH ? hH[zH] : -1;
            tH.slotOffset = BH < 0 ? this.writeMeshSlot(HH.getWorldMatrix().m, HH.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[BH], 16 * BH), SH.push(tH)
          }
        }
        return SH.length - tH
      }
      bundleDraws(HH, BH, LH) {
        let AH = 0;
        for (const rH of BH) {
          let BH = this.retainedDraw(HH, rH, LH, !1);
          const SH = void 0 !== BH;
          if (void 0 === BH && (BH = this.drawFor(HH, rH, LH, !1), this.retain(rH, BH)), BH) {
            const HH = rH.owner,
              LH = this.thinBundle.add(rH, BH, HH.getWorldMatrix().m, HH.visibility);
            SH && this.steadyFrom(rH, BH, LH), AH++
          }
        }
        return AH
      }
      steadyFrom(HH, BH, LH) {
        const AH = HH.owner,
          rH = this.fHH.base(AH),
          SH = AH.material,
          {
            drawState: hH,
            instance: tH
          } = BH.inputs.retained;
        if (!rH || !SH || 1 !== HH.parts.materials.length || oS(HH) !== SH) return;
        const zH = rH.steady ??= {
          unit: HH,
          material: SH,
          visibility: 1,
          draw: BH,
          record: LH,
          drawState: hH,
          instance: tH,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        zH.unit = HH, zH.material = SH, zH.visibility = AH.visibility, zH.draw = BH, zH.record = LH, zH.drawState = hH, zH.instance = tH, zH.bindGroup = tH.bindGroup, zH.gpuVersion = this.resources.gpuBuffersVersion, zH.fitInstances = BH.inputs.fitInstances, zH.worldFlag = AH.getWorldMatrix().updateFlag, zH.handedFrame = this.frame
      }
      keepSteady(HH, BH) {
        const LH = HH.steady;
        if (LH.handedFrame !== this.frame - 1 || (this.frame + LH.phase) % 8 === 0) return !1;
        const AH = HH.mesh,
          {
            unit: rH,
            draw: SH,
            instance: hH,
            drawState: tH
          } = LH,
          zH = AH.forcedInstanceCount || AH.gHH;
        if (!AH.isVisible || AH.ESH || AH.visibility !== LH.visibility || 0 === (AH.layerMask & BH.layerMask) || AH.material !== LH.material || 0 !== AH.renderingGroupId || AH.hasVertexAlpha || !this.drawDefines.definesHold(tH, rH, tH.instancing) || LH.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(SH.inputs, rH, tH.instancing, SH.program) || SH.program.failed || hH.released || zH <= 0 || zH > LH.fitInstances) return !1;
        if (hH.frame !== this.frame && this.bindMaterial(hH, this.modelUniforms.refreshModelUniforms(AH.yN(), hH, hH.model, this.view)), !hH.bindable || hH.bindGroup !== LH.bindGroup) return !1;
        const CH = AH.computeWorldMatrix(),
          EH = CH.updateFlag !== LH.worldFlag;
        return LH.worldFlag = CH.updateFlag, SH.instances = zH, this.thinBundle.addAgain(LH.record, SH, EH ? CH.m : null, LH.visibility), LH.handedFrame = this.frame, this.fHH.drawn++, !0
      }
      retainedDraw(HH, BH, LH, AH) {
        const rH = this.inputs.get(BH),
          SH = null === rH || void 0 === rH ? void 0 : rH.retained;
        if (!rH || !SH) return;
        const {
          drawState: hH,
          program: tH,
          instance: zH,
          instancing: CH
        } = SH, EH = BH.owner;
        if (rS(EH) !== CH) return;
        const XH = this.instanceCount(EH, CH);
        if (XH <= 0) return null;
        if (zH.released || tH.failed || hH.program !== tH || !this.drawDefines.programCurrent(hH, BH, CH, LH) || !this.inputsStamped(rH, BH, CH, tH) || EH.isUnIndexed !== SH.unIndexed || this.indexKey(BH) !== SH.indexData) return;
        if (SH.indexBuffer && SH.gpuVersion !== this.resources.gpuBuffersVersion) {
          const HH = this.resources.gpuBuffer(SH.indexData);
          if (!HH) return;
          SH.indexBuffer = HH, SH.gpuVersion = this.resources.gpuBuffersVersion
        }
        let GH = !1;
        if (zH.frame !== this.frame && (GH = this.modelUniforms.refreshModelUniforms(HH, zH, zH.model, this.view)), !this.bindMaterial(zH, GH) || !this.withGpuBuffers(rH) || !this.instanceBuffersFit(EH.name, rH, XH)) return null;
        const YH = this.makeDraw(tH, rH, this.renderStates.renderState(hH.model, EH, AH, rH.state), zH, XH);
        return this.setRange(YH, BH, SH.indexBuffer, SH.indexData), YH
      }
      retain(HH, BH) {
        const LH = this.drawDefines.drawStates.get(HH);
        if (!BH || !LH || LH.program !== BH.program) {
          const BH = this.inputs.get(HH);
          return void(BH && (BH.retained = null))
        }
        const AH = HH.owner,
          rH = LH.instancing,
          SH = this.indexKey(HH),
          hH = BH.inputs.retained;
        hH ? (hH.drawState = LH, hH.instancing = rH, hH.program = BH.program, hH.instance = BH.material, hH.indexData = SH, hH.unIndexed = AH.isUnIndexed, hH.indexBuffer = BH.indexBuffer, hH.gpuVersion = this.resources.gpuBuffersVersion) : BH.inputs.retained = {
          drawState: LH,
          instancing: rH,
          program: BH.program,
          instance: BH.material,
          indexData: SH,
          unIndexed: AH.isUnIndexed,
          indexBuffer: BH.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(HH, BH, LH, AH) {
        const rH = BH.owner,
          SH = oS(BH);
        if (!SH) return null;
        const hH = SH.getClassName();
        let tH = null;
        if (function(HH) {
            return "LinesMesh" === HH.getClassName()
          }(rH)) {
          if (! function(HH) {
              return "ShaderMaterial" === HH.getClassName() && "color" === HH.shaderPath
            }(SH)) return this.warnOnce(`lines:${hH}`, `A LinesMesh with a ${hH} is not drawn yet (${SH.name})`), null;
          tH = rH
        } else if ("StandardMaterial" !== hH && "LiteMaterial" !== hH) return this.warnOnce(`class:${hH}`, `${hH} is not drawn yet (${SH.name})`), null;
        const zH = rS(rH),
          CH = this.instanceCount(rH, zH);
        if (CH <= 0) return null;
        const EH = tH ? this.lineProgramFor(rH, LH, zH) : this.drawDefines.programFor(HH, BH, SH, LH, zH);
        if (!EH || EH.failed) return null;
        const XH = tH ? null : this.drawDefines.drawStates.get(BH).model,
          GH = XH ? this.modelInstance(XH, EH) : this.materialInstance(rH, EH);
        let YH = !1;
        if (GH.frame !== this.frame && (tH ? xH(GH.ubo, tH) : YH = this.modelUniforms.refreshModelUniforms(HH, GH, GH.model, this.view)), !this.bindMaterial(GH, YH)) return null;
        const uH = this.meshInputs(BH, EH, zH);
        if (!uH || !this.instanceBuffersFit(rH.name, uH, CH)) return null;
        const QH = this.indexKey(BH);
        let WH = null;
        if (QH && !rH.isUnIndexed && (WH = this.resources.gpuBuffer(QH), !WH)) return null;
        const MH = this.renderStates.renderState(null !== XH && void 0 !== XH ? XH : SH, rH, AH, uH.state, tH ? "line-list" : "triangle-list"),
          vH = this.makeDraw(EH, uH, MH, GH, CH);
        return this.setRange(vH, BH, WH, QH), vH
      }
      indexKey(HH) {
        const BH = zS(HH);
        return BH ? this.resources.modelIndex(BH) : null
      }
      setRange(HH, BH, LH, AH) {
        LH && (HH.indexBuffer = LH, HH.indexFormat = this.resources.indexFormat(AH));
        const rH = 4 * BH.range + (LH ? 0 : 2);
        HH.unit = BH, HH.first = BH.parts.rW[rH], HH.count = BH.parts.rW[rH + 1]
      }
      makeDraw(HH, BH, LH, AH, rH) {
        BH.state !== LH && (BH.state = LH, BH.pipelineKey = `${HH.id}|${BH.layout.key}|${LH.key}`, BH.pipeline = null);
        const SH = BH.draw ??= {
          program: HH,
          inputs: BH,
          pipelineKey: "",
          layout: BH.layout,
          state: LH,
          material: AH,
          slotOffset: 0,
          vertexBuffers: BH.buffers,
          vertexOffsets: BH.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: rH,
          unit: null
        };
        return SH.program = HH, SH.pipelineKey = BH.pipelineKey, SH.state = LH, SH.material = AH, SH.vertexOffsets = BH.offsets, SH.indexBuffer = null, SH.instances = rH, SH
      }
      instanceCount(HH, BH) {
        switch (BH) {
          case "thin":
            return HH.forcedInstanceCount || HH.gHH;
          case "instanced":
            return this.prepareInstances(HH);
          case "none":
            return 1
        }
      }
      prepareInstances(HH) {
        const BH = function(HH, BH) {
          const LH = BH._userInstancedBuffersStorage,
            AH = HH.batchUploads.get(BH);
          if (AH) {
            var rH;
            if (AH.layout === (null !== (rH = null === LH || void 0 === LH ? void 0 : LH.interleavedKinds) && void 0 !== rH ? rH : null)) return AH;
            AH.release()
          }
          return new YB(HH, BH, LH)
        }(this.resources, HH);
        return BH.frame !== this.frame && BH.pack(HH, this.modelMeshes.instanceBatch(HH), this.modelMeshes.worlds, this.frame), BH.count
      }
      programWithModel(HH, BH, LH) {
        const AH = this.modelSlot(HH),
          rH = XS(AH, HH, LH),
          SH = this.drawDefines.modelPackKind(HH),
          hH = SH ? function(HH, BH, LH, AH) {
            const rH = (0, bH.s)(HH, VH.g.name),
              SH = [];
            for (const {
                feature: zH,
                state: CH,
                active: EH
              }
              of HH.features) {
              var hH, tH;
              const HH = EH ? null === (hH = (tH = (0, KB.h)(zH)).Cu) || void 0 === hH ? void 0 : hH.call(tH, CH) : void 0;
              HH && SH.push(HH)
            }
            return {
              kind: BH,
              atlas: null !== rH && void 0 !== rH && rH.active ? (0, VH.b)(rH.state) : null,
              defines: LH,
              ...Xh(SH, AH)
            }
          }(HH, SH, BH, AH.fragmentCode) : null;
        if (hH && function(HH) {
            const BH = HH.defines;
            return (null === HH.atlas || !!BH.DIFFUSE && 1 === BH.DIFFUSEDIRECTUV) && !!BH.NORMAL && !BH.REFLECTION && !BH.EMISSIVEASILLUMINATION && !BH.LINKEMISSIVEWITHDIFFUSE
          }(hH)) {
          const LH = this.modelPackProgram(HH, BH, `${rH}#${SH}#sp${this.drawDefines.modelPackVariant}`, AH, hH);
          if (LH && !LH.failed) return LH
        }
        const tH = this.programs.get(rH);
        if (tH || this.unbuildable.has(rH)) return null !== tH && void 0 !== tH ? tH : null;
        let zH;
        try {
          zH = Ir({
            defines: hS(BH),
            vertexCode: AH.vertexCode,
            fragmentCode: AH.fragmentCode,
            pluginUniforms: AH.pluginUniforms
          })
        } catch (CH) {
          return this.unbuildable.add(rH), this.warnOnce(`build:${rH}`, `could not build a program for ${HH.name}: ${String(CH)}`), null
        }
        return this.createProgram(rH, zH, "standard")
      }
      modelPackProgram(HH, BH, LH, AH, rH) {
        const SH = this.programs.get(LH);
        if (SH || this.unbuildable.has(LH)) return null !== SH && void 0 !== SH ? SH : null;
        const hH = this.drawDefines.modelPackVariant;
        let tH;
        try {
          const HH = function(HH) {
              return (0, iB.b)(HH, "model")
            }(hH),
            LH = Oh(HH, rH, AH.vertexCode, AH.fragmentCode);
          tH = oh(Ir({
            defines: hS(BH),
            ...LH,
            pluginUniforms: AH.pluginUniforms
          }), HH, rH, !!this.sunShadow)
        } catch (EH) {
          return this.unbuildable.add(LH), this.warnOnce(`build:${LH}`, `could not build a shader pack program for ${HH.name}, which draws without the pack: ${String(EH)}`), null
        }
        const zH = ZS(hH, !!this.sunShadow),
          CH = {
            group: this.packInputs.bindGroupFor(null, zH),
            layout: DS(this.device, {
              depth: !1,
              sunShadow: zH
            })
          };
        return this.createProgram(LH, tH, function(HH) {
          return `standard-sp${HH}`
        }(hH), CH)
      }
      lineProgramFor(HH, BH, LH) {
        const AH = MH(HH, LH, BH, this.view);
        let rH = this.linePrograms.get(AH);
        var SH;
        return rH || (rH = this.createProgram(`lines#${AH}`, (SH = function(HH) {
          const BH = new Map;
          for (let LH = 0; LH < CH.length; LH++) HH & 1 << LH && BH.set(CH[LH], !0);
          return BH
        }(AH), cr({
          defines: SH,
          vertex: lr,
          fragment: Kr,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(AH, rH)), rH
      }
      createProgram(HH, BH, LH) {
        var AH;
        let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const SH = this.nextProgramId++,
          hH = `${LH}-${SH}`,
          tH = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          zH = [{
            binding: 0,
            visibility: tH,
            buffer: {
              type: "uniform"
            }
          }];
        for (const XH of BH.textures) zH.push({
          binding: XH.binding,
          visibility: tH,
          texture: {
            viewDimension: XH.dimension
          }
        }), zH.push({
          binding: XH.samplerBinding,
          visibility: tH,
          sampler: {}
        });
        const CH = this.device.createBindGroupLayout({
            label: hH,
            entries: zH
          }),
          EH = {
            key: HH,
            id: SH,
            kind: LH,
            program: BH,
            vertex: this.device.createShaderModule({
              label: `${hH}-vertex`,
              code: BH.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${hH}-fragment`,
              code: BH.fragment
            }),
            materialLayout: CH,
            pipelineLayout: this.device.createPipelineLayout({
              label: hH,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, CH, ...rH ? [rH.layout] : []]
            }),
            packGroup: null !== (AH = null === rH || void 0 === rH ? void 0 : rH.group) && void 0 !== AH ? AH : null,
            failed: !1
          };
        return this.programs.set(HH, EH), EH
      }
      writeFrameUniforms() {
        const HH = this.frameUniforms;
        xS(this.view, HH), this.device.queue.writeBuffer(this.frameBuffer, 0, HH)
      }
      materialInstance(HH, BH) {
        let LH = this.materials.get(HH);
        if (!LH) {
          const BH = new Map;
          this.materials.set(HH, BH);
          const {
            resources: AH,
            materials: rH
          } = this;
          HH.uR.addOnce((() => {
            for (const HH of BH.values()) HH.released = !0, AH.destroyBuffer(HH.buffer);
            rH.delete(HH)
          })), LH = BH
        }
        let AH = LH.get(BH.key);
        return AH || (AH = this.newMaterialInstance(HH, null, BH), LH.set(BH.key, AH)), AH
      }
      modelInstance(HH, BH) {
        const LH = this.modelSlot(HH);
        let AH = LH.instances.get(BH.key);
        return AH || (AH = this.newMaterialInstance(HH, HH, BH), LH.instances.set(BH.key, AH)), AH
      }
      modelSlot(HH) {
        var BH;
        let LH = HH.gpu[mH.d.lite];
        return (null === (BH = LH) || void 0 === BH ? void 0 : BH.epoch) !== this.resources.epoch && (LH = new fh(this.resources, this.resources.epoch), HH.gpu[mH.d.lite] = LH), LH
      }
      newMaterialInstance(HH, BH, LH) {
        const AH = LH.program.material.floats,
          rH = new Float32Array(AH),
          SH = new Map;
        return {
          owner: HH,
          model: BH,
          program: LH,
          data: rH,
          uploaded: new Float32Array(AH).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${HH.name}-uniforms`,
            size: Math.max(16, 4 * AH),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: SH,
          ubo: new MS(LH.program.material.slots, rH, SH),
          bindGroup: null,
          bound: new Array(2 * LH.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(HH) {
        var BH;
        const LH = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Rr + jr,
            fragment: Rr + nr,
            attributes: [],
            material: Nr,
            textures: []
          }, "earthSky"),
          AH = this.earthSkyUniforms ??= this.newMaterialInstance(Ih, null, LH);
        this.earthSkyFrom !== HH && (this.earthSkyFrom = HH, AH.data.fill(0)), Jr(AH.ubo, HH, this.view);
        const rH = this.vertexInputs(LH, Ih, "earthSky", LH, null);
        if (LH.failed || !rH || !this.bindMaterial(AH, !1)) return;
        const SH = null !== (BH = rH.state) && void 0 !== BH ? BH : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          hH = this.makeDraw(LH, rH, SH, AH, 1);
        hH.count = er.length;
        const tH = ir(HH, this.view);
        hH.slotOffset = this.writeMeshSlot(tH, 1), this.lists.skyDraws.push(hH)
      }
      uploadIfChanged(HH) {
        const {
          data: BH,
          uploaded: LH
        } = HH;
        for (let AH = 0; AH < BH.length; AH++)
          if (BH[AH] !== LH[AH]) return LH.set(BH), void this.device.queue.writeBuffer(HH.buffer, 0, BH)
      }
      bindMaterial(HH, BH) {
        return HH.frame !== this.frame && (HH.frame = this.frame, BH || this.uploadIfChanged(HH), HH.bindable = this.bindTextures(HH)), HH.bindable
      }
      bindTextures(HH) {
        const {
          program: BH,
          bound: LH
        } = HH, AH = BH.program.textures;
        let rH = !HH.bindGroup,
          SH = !0;
        for (let hH = 0; hH < AH.length; hH++) {
          const BH = HH.textures.get(AH[hH].name),
            tH = BH ? this.resources.boundTexture(BH) : null;
          tH ? LH[2 * hH] === tH.view && LH[2 * hH + 1] === tH.sampler || (LH[2 * hH] = tH.view, LH[2 * hH + 1] = tH.sampler, rH = !0) : (BH || HH.ubo.expected.has(AH[hH].name) || this.warnOnce(`texture:${HH.owner.name}:${AH[hH].name}`, `${HH.owner.name} has no ${AH[hH].name}`), SH = !1)
        }
        if (!SH) return rH && (HH.bindGroup = null), !1;
        if (rH) {
          const rH = [{
            binding: 0,
            resource: {
              buffer: HH.buffer
            }
          }];
          for (let HH = 0; HH < AH.length; HH++) rH.push({
            binding: AH[HH].binding,
            resource: LH[2 * HH]
          }), rH.push({
            binding: AH[HH].samplerBinding,
            resource: LH[2 * HH + 1]
          });
          HH.bindGroup = this.device.createBindGroup({
            label: `${HH.owner.name}-material`,
            layout: BH.materialLayout,
            entries: rH
          })
        }
        return !0
      }
      writeMeshSlot(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, HH, BH, LH), this.slotCount++ * Cr
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(HH, BH, LH, AH, rH) {
        let SH = this.inputs.get(HH);
        if (!SH || SH.program !== AH || !OS(BH, SH, this.resources, rH)) {
          var hH;
          if (SH = null !== (hH = this.vertexLayouts.resolveInputs(BH, LH, AH, rH)) && void 0 !== hH ? hH : void 0, !SH) return null;
          this.inputs.set(HH, SH)
        }
        return this.withGpuBuffers(SH)
      }
      meshInputs(HH, BH, LH) {
        const AH = this.inputs.get(HH);
        if (AH && this.inputsStamped(AH, HH, LH, BH)) return this.withGpuBuffers(AH);
        const rH = HH.owner,
          SH = zS(HH),
          hH = this.vertexInputs(HH, rH, rH.name, BH, SH);
        return hH && (hH.geometry = CS(HH), hH.instanceLayout = this.drawDefines.instanceLayout(rH, LH)), hH
      }
      inputsStamped(HH, BH, LH, AH) {
        return function(HH, BH, LH, AH) {
          return HH.program === LH && HH.geometry === CS(BH) && HH.instanceLayout === AH
        }(HH, BH, AH, this.drawDefines.instanceLayout(BH.owner, LH))
      }
      withGpuBuffers(HH) {
        return sS(HH, this.resources, this.zeroBuffer) ? HH : null
      }
      instanceBuffersFit(HH, BH, LH) {
        const AH = iS(BH, LH, this.resources, this.zeroBuffer);
        if (AH) {
          const rH = BH.ends[AH.index] - BH.offsets[AH.index] + BH.cHH[AH.index];
          return this.warnOnce(`overrun:${HH}`, `${HH} draws ${LH} instances from a ${rH}-byte buffer (${AH.needed} needed)`), !1
        }
        return !0
      }
      createBinding(HH, BH, LH, AH) {
        const rH = `${BH._colorFormat}|${BH._depthStencilFormat}|${BH._depthCompare}|${BH._sampleCount}`,
          SH = oB(this.device, BH);
        if (HH === this.skyLastRenderable) {
          let LH = null;
          return {
            renderable: HH,
            pipeline: SH,
            draw: HH => LH ? this.drawSky(HH, BH, rH, LH) : 0,
            update: HH => {
              LH = HH
            }
          }
        }
        return {
          renderable: HH,
          pipeline: SH,
          draw: HH => (AH ? AH.execute(HH, BH, rH) : 0) + this.drawList(HH, BH, rH, LH)
        }
      }
      drawSky(HH, BH, LH, AH) {
        const rH = this.lists.skyDraws,
          SH = rH.length > 0;
        if (SH) {
          var hH;
          const LH = (null !== (hH = BH._depthCompare) && void 0 !== hH ? hH : OB).startsWith("greater") ? 0 : 1;
          HH.setViewport(0, 0, AH.targetWidth, AH.targetHeight, LH, LH)
        }
        const tH = this.drawList(HH, BH, LH, rH);
        return SH && HH.setViewport(0, 0, AH.targetWidth, AH.targetHeight, 0, 1), tH
      }
      drawList(HH, BH, LH, AH) {
        let rH = 0;
        const SH = this.binder;
        SH.reset();
        for (const hH of AH) {
          const AH = this.pipelineFor(hH, BH, LH);
          AH && (SH.bind(HH, hH, AH, this.meshSlots.bindGroup, hH.slotOffset), hH.indexBuffer ? HH.drawIndexed(hH.count, hH.instances, hH.first, 0, 0) : HH.draw(hH.count, hH.instances, hH.first, 0), rH++)
        }
        return rH
      }
      pipelineFor(HH, BH, LH) {
        var AH, rH;
        if (HH.program.failed) return null;
        const SH = HH.inputs;
        if (SH.pipeline && SH.pipelineTarget === LH) return SH.pipeline;
        const hH = `${HH.pipelineKey}|${LH}`,
          tH = this.pipelines.get(hH);
        if (void 0 !== tH) return tH && (SH.pipeline = tH, SH.pipelineTarget = LH), tH || null;
        this.pipelines.set(hH, null);
        const {
          program: zH,
          layout: CH,
          state: EH
        } = HH, XH = {
          label: `standard-${zH.id}`,
          layout: zH.pipelineLayout,
          vertex: {
            module: zH.vertex,
            entryPoint: "main",
            buffers: CH.buffers
          },
          fragment: xB({
            module: zH.fragment,
            entryPoint: "main"
          }, BH, EH.blend, EH.colourWrite),
          depthStencil: BH._depthStencilFormat ? {
            format: BH._depthStencilFormat,
            depthCompare: null !== (AH = null !== (rH = EH.depthCompare) && void 0 !== rH ? rH : BH._depthCompare) && void 0 !== AH ? AH : OB,
            depthWriteEnabled: EH.depthWrite,
            depthBias: EH.depthBias,
            depthBiasSlopeScale: EH.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: BH._sampleCount
          },
          primitive: {
            topology: EH.topology,
            frontFace: EH.frontFace,
            cullMode: EH.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(XH).then((HH => {
          this.compiling--, this.pipelines.set(hH, HH)
        }), (HH => {
          this.compiling--, this.reportFailure(zH, hH, HH)
        })), null
      }
      forEachSunShadowCaster(HH) {
        const BH = this.caster,
          LH = (LH, AH, rH) => {
            const SH = LH.unit && function(HH) {
              const BH = HH.material.model;
              return null !== BH && (BH.lifeform || BH.item) && BH.castsSunShadow && "triangle-list" === HH.state.topology
            }(LH) ? zS(LH.unit) : null;
            if (!SH) return;
            const hH = LH.unit.owner;
            switch (BH.geometry = SH, BH.skip = hH.noSunShadowVertices, BH.indexed = null !== LH.indexBuffer, BH.first = LH.first, BH.count = LH.count, BH.cX = AH, BH.worldAt = rH, BH.instances = null, BH.instanceCount = 1, BH.thin = !1, rS(hH)) {
              case "thin": {
                const HH = hH._thinInstanceDataStorage.matrixData;
                if (!HH) return;
                BH.instances = HH, BH.instanceCount = Math.min(LH.instances, HH.length / 16), BH.thin = !0;
                break
              }
              case "instanced": {
                const HH = this.resources.batchUploads.get(hH);
                if (!HH || HH.frame !== this.frame || !this.writeBatchCasters(HH)) return;
                break
              }
            }
            HH(BH)
          };
        for (const AH of this.lists.opaqueDraws) LH(AH, this.meshSlots.data, AH.slotOffset / 4);
        this.thinBundle.forEachDrawn(LH)
      }
      writeBatchCasters(HH) {
        const {
          caster: BH
        } = this, LH = HH.packedMatrices, AH = HH.count;
        BH.instances = LH, BH.instanceCount = AH;
        let rH = -1;
        for (let SH = 0; SH < AH; SH++) {
          const BH = ch(HH.packedRowMesh(SH));
          BH && rH < 0 ? (this.casterWorlds.length < 16 * AH && (this.casterWorlds = new Float32Array(LH.length)), this.casterWorlds.set(LH.subarray(0, 16 * SH)), rH = SH) : !BH && rH >= 0 && (this.casterWorlds.set(LH.subarray(16 * SH, 16 * SH + 16), 16 * rH), rH++)
        }
        return rH >= 0 && (BH.instances = this.casterWorlds, BH.instanceCount = rH), BH.instanceCount > 0
      }
      async reportFailure(HH, BH, LH) {
        const AH = [];
        let rH = !0;
        for (const [SH, hH] of [
            ["vertex", HH.vertex],
            ["fragment", HH.fragment]
          ]) {
          const HH = await hH.getCompilationInfo();
          for (const BH of HH.messages) rH &&= "error" !== BH.type, AH.push(`${SH}:${BH.lineNum}:${BH.linePos} ${BH.type}: ${BH.message}`)
        }
        if (rH && !HH.packGroup) return this.pipelines.set(BH, !1), console.error(`Lite: pipeline ${BH} failed`, LH), void EB(this.device, "mesh", HH.kind, LH);
        HH.failed || (HH.failed = !0, console.error(`Lite: program ${HH.id} failed`, LH, AH.join("\n"), {
          program: HH.program,
          key: HH.key
        }), EB(this.device, "mesh", HH.kind, LH, rH ? null : AH[0]))
      }
    }

    function ch(HH) {
      var BH, LH;
      const AH = null === (BH = HH.kF) || void 0 === BH || null === (LH = BH.aShaderPackItem) || void 0 === LH ? void 0 : LH.x;
      return void 0 !== AH && 0 !== (AH & fB.i)
    }
    var eh = LH(45160),
      qh = LH(45168),
      gh = LH(45174),
      Nh = LH(45132);
    const Rh = [0, 3, 1, 4, 2, 5];

    function jh(HH, BH, LH, AH, rH) {
      const SH = LH[0].width;
      try {
        return rH ? function(HH, BH, LH) {
          const AH = (0, Nh.c)(HH, LH, LH, 6);
          for (let rH = 0; rH < 6; rH++)(0, Nh.e)(HH, AH, rH, BH[Rh[rH]], {
            invertY: !1
          });
          return AH.texture
        }(HH, LH, SH) : function(HH, BH, LH, AH) {
          const rH = HH.createTexture({
            label: "sink-cube",
            size: {
              width: LH,
              height: LH,
              depthOrArrayLayers: 6
            },
            format: AH,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let SH = 0; SH < 6; SH++) HH.queue.copyExternalImageToTexture({
            source: BH[Rh[SH]]
          }, {
            texture: rH,
            origin: {
              x: 0,
              y: 0,
              z: SH
            }
          }, {
            width: LH,
            height: LH
          });
          return rH
        }(BH, LH, SH, 1 === AH ? "r8unorm" : "rgba8unorm")
      } finally {
        nh(LH)
      }
    }

    function nh(HH) {
      for (const BH of null !== HH && void 0 !== HH ? HH : []) null === BH || void 0 === BH || BH.close()
    }
    async function Fh(HH) {
      const BH = [],
        LH = [];
      if (await Promise.all(HH.map(((HH, AH) => (BH[AH] = null, HH.then((HH => {
          BH[AH] = HH
        }), (HH => {
          LH.push(HH)
        })))))), LH.length > 0) throw nh(BH), LH[0];
      return BH
    }
    class Dh {
      constructor(HH) {
        this.aX = HH, this.starts = [], this.lengths = [], this.used = 0, HH > 0 && (this.starts.push(0), this.lengths.push(HH))
      }
      allocate(HH) {
        const {
          starts: BH,
          lengths: LH
        } = this;
        for (let AH = 0; AH < BH.length; AH++) {
          if (LH[AH] < HH) continue;
          const rH = BH[AH];
          return LH[AH] === HH ? (BH.splice(AH, 1), LH.splice(AH, 1)) : (BH[AH] += HH, LH[AH] -= HH), this.used += HH, rH
        }
        return -1
      }
      free(HH, BH) {
        this.used -= BH;
        const LH = Math.min(HH + BH, this.aX);
        LH > HH && this.release(HH, LH - HH)
      }
      grow(HH) {
        const BH = this.aX;
        this.aX = HH, this.release(BH, HH - BH)
      }
      truncate(HH) {
        const {
          starts: BH,
          lengths: LH
        } = this;
        for (let AH = BH.length - 1; AH >= 0 && BH[AH] + LH[AH] > HH; AH--) BH[AH] >= HH ? (BH.splice(AH, 1), LH.splice(AH, 1)) : LH[AH] = HH - BH[AH];
        this.aX = HH
      }
      release(HH, BH) {
        const {
          starts: LH,
          lengths: AH
        } = this;
        let rH = 0,
          SH = LH.length;
        for (; rH < SH;) {
          const BH = rH + SH >> 1;
          LH[BH] < HH ? rH = BH + 1 : SH = BH
        }
        const hH = rH,
          tH = hH > 0 && LH[hH - 1] + AH[hH - 1] === HH,
          zH = hH < LH.length && HH + BH === LH[hH];
        tH && zH ? (AH[hH - 1] += BH + AH[hH], LH.splice(hH, 1), AH.splice(hH, 1)) : tH ? AH[hH - 1] += BH : zH ? (LH[hH] = HH, AH[hH] += BH) : (LH.splice(hH, 0, HH), AH.splice(hH, 0, BH))
      }
    }
    const wh = 256;
    class Zh {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = HH, this.onReplaced = BH, this.mergeGap = LH, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.rW = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const rH = Math.max(wh, Math.ceil(AH / wh) * wh);
        this.bytes = new Uint8Array(rH), this.words = new Uint32Array(this.bytes.buffer), this.rW = new Dh(rH / wh)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(HH) {
        return Math.max(1, Math.ceil(HH / wh)) * wh
      }
      allocate(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH;
        const AH = Zh.slotBytes(HH),
          rH = AH / wh;
        let SH = this.rW.allocate(rH);
        SH < 0 && (this.grow(this.rW.aX + rH), SH = this.rW.allocate(rH));
        const hH = SH * wh;
        return this.growTo(hH + Math.max(LH, AH)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, hH, hH + AH), BH && this.bytes.set(new Uint8Array(BH.buffer, BH.byteOffset, Math.min(BH.byteLength, AH)), hH), this.markDirty(hH, hH + AH), hH
      }
      growTo(HH) {
        const BH = Math.ceil(HH / wh);
        BH > this.rW.aX && this.grow(BH)
      }
      free(HH, BH) {
        this.freed.push(HH, BH)
      }
      write(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (AH <= 0) return;
        AH <= 1024 && 0 === (3 & (HH | LH | AH)) ? this.copyWords(HH >> 2, BH.buffer, LH >> 2, AH >> 2) : this.bytes.set(new Uint8Array(BH.buffer, LH, AH), HH);
        let SH = HH + AH;
        if (rH) {
          const BH = HH + 4 * Math.ceil(AH / 4);
          this.bytes.fill(0, SH, BH), SH = BH
        }
        this.markDirty(HH, SH)
      }
      copyWords(HH, BH, LH, AH) {
        let rH = this.sourceWords.get(BH);
        rH || (rH = new Uint32Array(BH, 0, BH.byteLength >> 2), this.sourceWords.set(BH, rH));
        const SH = this.words;
        for (let hH = 0; hH < AH; hH++) SH[HH + hH] = rH[LH + hH]
      }
      move(HH, BH, LH) {
        this.bytes.copyWithin(BH, HH, HH + LH), this.markDirty(BH, BH + LH)
      }
      flush() {
        for (const BH of this.retired) this.onReplaced(BH), BH.destroy();
        this.retired.length = 0;
        const HH = this.dirtyStarts.length;
        if (HH > 0) {
          const {
            dirtyStarts: BH,
            dirtyEnds: LH,
            order: AH
          } = this;
          AH.length = HH;
          for (let tH = 0; tH < HH; tH++) AH[tH] = tH;
          HH > 1 && AH.sort(((HH, LH) => BH[HH] - BH[LH]));
          const rH = this.mergeGap;
          let SH = BH[AH[0]],
            hH = LH[AH[0]];
          for (let tH = 1; tH < HH; tH++) {
            const HH = AH[tH];
            BH[HH] - hH <= rH ? hH = Math.max(hH, LH[HH]) : (this.send(SH, hH), SH = BH[HH], hH = LH[HH])
          }
          this.send(SH, hH), BH.length = 0, LH.length = 0
        }
        this.holding = !1
      }
      OX() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const HH = this.freed;
        for (let BH = 0; BH < HH.length; BH += 2) this.rW.free(HH[BH] / wh, HH[BH + 1] / wh);
        HH.length = 0
      }
      send(HH, BH) {
        this.device.queue.writeBuffer(this.gpu, HH, this.bytes.buffer, HH, BH - HH);
        for (const LH of this.replaced) {
          const AH = Math.min(BH, LH.size);
          AH > HH && this.device.queue.writeBuffer(LH, HH, this.bytes.buffer, HH, AH - HH)
        }
      }
      markDirty(HH, BH) {
        HH &= -4, BH = BH + 3 & -4, this.holding ? (this.dirtyStarts.push(HH), this.dirtyEnds.push(BH)) : this.send(HH, BH)
      }
      grow(HH) {
        const BH = this.rW.aX,
          LH = Math.max(2 * BH, HH),
          AH = new Uint8Array(LH * wh);
        AH.set(this.bytes);
        const rH = this.gpu;
        this.gpu = this.createGpu(AH.byteLength), this.bytes = AH, this.words = new Uint32Array(AH.buffer), this.rW.grow(LH), rH && (this.replaced.push(rH), this.onReplaced(rH)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, BH * wh)
      }
      createGpu(HH) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: HH,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function dh(HH) {
      return Array.isArray(HH) ? new Float32Array(HH) : HH
    }

    function ah(HH, BH, LH, AH, rH) {
      const SH = dH(rH),
        hH = Math.min(rH, AH.byteLength);
      if (SH === hH && AH.byteOffset % 4 === 0) return void HH.queue.writeBuffer(BH, LH, AH.buffer, AH.byteOffset, SH);
      const tH = new Uint8Array(SH);
      tH.set(new Uint8Array(AH.buffer, AH.byteOffset, hH)), HH.queue.writeBuffer(BH, LH, tH)
    }

    function sh(HH, BH, LH) {
      const AH = "linear",
        rH = "nearest";
      let SH = rH,
        hH = rH,
        tH = "nearest",
        zH = !BH;
      switch (HH) {
        case 11:
          SH = AH, hH = AH;
          break;
        case 3:
          SH = AH, hH = AH, tH = BH ? "linear" : "nearest";
          break;
        case 8:
          tH = BH ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          hH = AH;
          break;
        case 6:
          hH = AH, tH = BH ? "linear" : "nearest";
          break;
        case 7:
          hH = AH, zH = !0;
          break;
        case 9:
          SH = AH;
          break;
        case 10:
          SH = AH, tH = BH ? "linear" : "nearest";
          break;
        case 2:
          SH = AH, hH = AH, LH > 1 ? (tH = "linear", zH = !1) : zH = !0;
          break;
        case 12:
          SH = AH, zH = !0;
          break;
        default:
          zH = !0
      }
      return LH > 1 && !zH ? {
        magFilter: AH,
        minFilter: AH,
        mipmapFilter: "linear",
        maxAnisotropy: LH
      } : {
        magFilter: SH,
        minFilter: hH,
        mipmapFilter: tH,
        ...zH ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Jh(HH) {
      return 0 === HH ? "clamp-to-edge" : 2 === HH ? "mirror-repeat" : "repeat"
    }
    class ih {
      constructor(HH, BH) {
        let {
          vertexArena: LH = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = HH, this.device = BH, this.buffers = new WeakMap, this.YHH = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = LH ? this.createArena() : null
      }
      createArena() {
        return new Zh(this.device, (HH => {
          var BH;
          null === (BH = this.onDestroy) || void 0 === BH || BH.call(this, HH), this.gpuBuffersVersion++
        }))
      }
      rebind(HH, BH) {
        this.engine = HH, this.device = BH, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const LH of this.liveUploads) LH.rebind();
        for (const LH of this.rebindWaiters.splice(0)) LH()
      }
      flushUploads() {
        var HH;
        null === (HH = this.arena) || void 0 === HH || HH.flush()
      }
      endUploadFrame() {
        var HH;
        null === (HH = this.arena) || void 0 === HH || HH.OX()
      }
      vertexBufferCreated(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LH ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(HH);
        const rH = dh(BH);
        HH.aX = rH.byteLength, this.buffers.set(HH, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: LH && null !== this.arena,
          pending: rH,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: AH
        })
      }
      vertexBufferUpdated(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        const rH = this.buffers.get(HH);
        if (!rH) return;
        const SH = dh(BH),
          hH = void 0 === AH ? SH.byteLength : Math.min(AH, SH.byteLength);
        this.update(rH, SH, LH, hH)
      }
      vertexBufferFloatsUpdated(HH, BH, LH, AH) {
        const rH = this.buffers.get(HH);
        if (!rH) return;
        const SH = LH * Float32Array.BYTES_PER_ELEMENT,
          hH = (AH - LH) * Float32Array.BYTES_PER_ELEMENT;
        rH.slot >= 0 && hH > 0 && SH + hH <= rH.size ? this.writeSlot(rH, SH, BH, BH.byteOffset + SH, hH, !1) : rH.gpu && hH > 0 && SH + hH <= rH.gpu.size ? this.device.queue.writeBuffer(rH.gpu, SH, BH.buffer, BH.byteOffset + SH, hH) : this.update(rH, BH.subarray(LH, AH), SH, hH)
      }
      indexBufferCreated(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(HH);
        const AH = function(HH) {
          if (HH instanceof Uint16Array || HH instanceof Uint32Array) return HH;
          for (let BH = 0; BH < HH.length; BH++)
            if (HH[BH] >= 65535) return new Uint32Array(HH);
          return new Uint16Array(HH)
        }(BH);
        HH.is32Bits = 4 === AH.BYTES_PER_ELEMENT, HH.aX = AH.byteLength, this.buffers.set(HH, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: AH,
          ownsPending: AH !== BH,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: LH
        })
      }
      bufferDeleted(HH) {
        const BH = this.buffers.get(HH);
        null !== BH && void 0 !== BH && BH.gpu ? (this.destroyBuffer(BH.gpu), this.gpuBuffersVersion++) : BH && BH.slot >= 0 && (this.arena.free(BH.slot, BH.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(HH)
      }
      update(HH, BH, LH, AH) {
        if (HH.slot >= 0) this.updateSlot(HH, BH, LH, AH);
        else if (HH.gpu) {
          if (LH + dH(AH) > HH.gpu.size) {
            const BH = this.device.createBuffer({
                label: HH.label,
                size: dH(Math.max(2 * HH.gpu.size, LH + AH)),
                usage: HH.usage | GPUBufferUsage.COPY_SRC
              }),
              rH = this.device.createCommandEncoder();
            rH.copyBufferToBuffer(HH.gpu, 0, BH, 0, HH.gpu.size), this.device.queue.submit([rH.finish()]), this.destroyBuffer(HH.gpu), this.gpuBuffersVersion++, HH.gpu = BH
          }
          ah(this.device, HH.gpu, LH, BH, AH)
        } else {
          const SH = new Uint8Array(BH.buffer, BH.byteOffset, AH),
            hH = HH.pending;
          if (hH && HH.ownsPending && LH + AH <= hH.byteLength) new Uint8Array(hH.buffer, hH.byteOffset, hH.byteLength).set(SH, LH);
          else if (hH && 0 === LH && AH === hH.byteLength && BH.byteLength === AH) HH.pending = BH, HH.ownsPending = !1;
          else {
            var rH;
            const BH = new Uint8Array(Math.max(null !== (rH = null === hH || void 0 === hH ? void 0 : hH.byteLength) && void 0 !== rH ? rH : 0, LH + AH));
            hH && BH.set(new Uint8Array(hH.buffer, hH.byteOffset, hH.byteLength)), BH.set(SH, LH), HH.pending = BH, HH.ownsPending = !0
          }
        }
      }
      updateSlot(HH, BH, LH, AH) {
        const rH = this.arena;
        LH + dH(AH) > HH.size && (HH.size = dH(Math.max(2 * HH.size, LH + AH)), rH.growTo(HH.slot + HH.size), this.gpuBuffersVersion++), 0 === AH ? this.writeSlot(HH, LH, yh, 0, 4, !1) : this.writeSlot(HH, LH, BH, BH.byteOffset, AH, !0)
      }
      writeSlot(HH, BH, LH, AH, rH, SH) {
        const hH = BH + (SH ? dH(rH) : rH);
        hH > HH.slotBytes && this.moveSlot(HH, hH), this.arena.write(HH.slot + BH, LH, AH, rH, SH)
      }
      moveSlot(HH, BH) {
        const LH = this.arena,
          AH = Zh.slotBytes(Math.max(BH, Math.min(2 * HH.slotBytes, HH.size))),
          rH = LH.allocate(AH, null, HH.size);
        LH.move(HH.slot, rH, HH.slotBytes), LH.free(HH.slot, HH.slotBytes), HH.slot = rH, HH.slotBytes = AH, this.gpuBuffersVersion++
      }
      cover(HH, BH) {
        const LH = this.buffers.get(HH);
        if (!LH || LH.slot < 0) return !1;
        const AH = Math.min(BH, LH.size);
        return !(AH <= LH.slotBytes) && (this.moveSlot(LH, AH), !0)
      }
      destroyBuffer(HH) {
        var BH;
        null === (BH = this.onDestroy) || void 0 === BH || BH.call(this, HH), HH.destroy()
      }
      gpuBuffer(HH) {
        const BH = this.buffers.get(HH);
        if (!BH) return null;
        if (BH.slot >= 0) return this.arena.buffer;
        if (BH.arena && BH.pending) {
          const HH = BH.pending,
            LH = this.arena;
          return BH.size = dH(HH.byteLength), BH.slotBytes = Zh.slotBytes(function(HH) {
            const BH = new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength);
            let LH = BH.length;
            if (HH.byteOffset % 4 === 0) {
              for (; LH % 4 !== 0 && 0 === BH[LH - 1];) LH--;
              if (LH % 4 === 0) {
                const BH = new Uint32Array(HH.buffer, HH.byteOffset, LH / 4);
                let AH = BH.length;
                for (; AH > 0 && 0 === BH[AH - 1];) AH--;
                LH = 4 * AH
              }
            }
            for (; LH > 0 && 0 === BH[LH - 1];) LH--;
            return LH
          }(HH)), BH.slot = LH.allocate(BH.slotBytes, HH, BH.size), BH.pending = null, LH.buffer
        }
        if (!BH.gpu && BH.pending) {
          const HH = BH.pending;
          BH.gpu = this.device.createBuffer({
            label: BH.label,
            size: dH(HH.byteLength),
            usage: BH.usage
          }), ah(this.device, BH.gpu, 0, HH, HH.byteLength), BH.pending = null
        }
        return BH.gpu
      }
      gpuOffset(HH) {
        var BH, LH;
        const AH = null !== (BH = null === (LH = this.buffers.get(HH)) || void 0 === LH ? void 0 : LH.slot) && void 0 !== BH ? BH : -1;
        return AH < 0 ? 0 : AH
      }
      gpuEnd(HH) {
        var BH, LH;
        const AH = this.buffers.get(HH);
        return AH ? AH.slot >= 0 ? AH.slot + AH.size : null !== (BH = null === (LH = AH.gpu) || void 0 === LH ? void 0 : LH.size) && void 0 !== BH ? BH : 0 : 0
      }
      vertexInput(HH, BH, LH) {
        var AH, rH, SH, hH;
        return null !== (AH = null !== (rH = LH && this.modelInput(LH, BH)) && void 0 !== rH ? rH : null === (SH = null !== (hH = this.YHH.get(HH)) && void 0 !== hH ? hH : this.batchUploads.get(HH)) || void 0 === SH ? void 0 : SH.inputs[BH]) && void 0 !== AH ? AH : null
      }
      modelInput(HH, BH) {
        const LH = this.geometrySlot(HH);
        let AH = LH.inputs.get(BH);
        if (void 0 === AH) {
          const rH = HH.vertexAttributes.find((HH => HH.kind === BH));
          AH = rH ? new uB(this.modelKey(LH, rH.data, !1), rH.offset, rH.stride, rH.components, !1, rH.glType, rH.isNormalized) : null, LH.inputs.set(BH, AH)
        }
        return AH
      }
      modelIndex(HH) {
        return HH.indexData && this.modelKey(this.geometrySlot(HH), HH.indexData, !0)
      }
      geometrySlot(HH) {
        var BH;
        let LH = HH.gpu[mH.d.lite];
        if ((null === (BH = LH) || void 0 === BH ? void 0 : BH.epoch) !== this.epoch) {
          const BH = new Map,
            AH = () => {
              for (const HH of BH.values()) this.bufferDeleted(HH)
            },
            rH = HH => {
              const LH = BH.get(HH);
              LH && this.vertexBufferUpdated(LH, HH)
            };
          LH = {
            keys: BH,
            inputs: new Map,
            release: AH,
            updated: rH,
            epoch: this.epoch
          }, HH.gpu[mH.d.lite] = LH
        }
        return LH
      }
      modelKey(HH, BH, LH) {
        let AH = HH.keys.get(BH);
        if (!AH) {
          if (LH) {
            const HH = {
              aX: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(HH, BH, "model-indices"), AH = HH
          } else AH = {
            aX: 0
          }, this.vertexBufferCreated(AH, BH, !1, "model-vertices");
          HH.keys.set(BH, AH)
        }
        return AH
      }
      indexFormat(HH) {
        return HH.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(HH, BH) {
        --HH.refs > 0 || (this.releaseTexture(HH), nh(HH.images), null !== BH && this.textures.delete(BH))
      }
      load(HH, BH) {
        const {
          epoch: LH
        } = this, AH = BH.decoded = async function(HH) {
          if ("cube" === HH.kind) return async function(HH) {
            if (6 !== HH.length) throw new Error(`${HH.length} files where six faces were expected`);
            const BH = await Fh(HH.map((HH => yH(HH)))),
              LH = BH[0].width;
            return Fh(BH.map((async HH => {
              if (HH.width === LH && HH.height === LH) return HH;
              try {
                return await createImageBitmap(HH, {
                  ...iH,
                  resizeWidth: LH,
                  resizeHeight: LH
                })
              } finally {
                HH.close()
              }
            })))
          }(HH.files);
          if ("data" === HH.kind && HH.data) return [await createImageBitmap(new Blob([HH.data]), iH)];
          return [await yH(ph(HH))]
        }(HH.source).then((HH => {
          0 === BH.refs || LH !== this.epoch ? nh(HH) : BH.images = HH
        }));
        this.track(BH, ph(HH.source), AH, (() => {
          BH.wanted && !BH.failed && BH.refs > 0 && this.upload(HH, BH)
        }))
      }
      canvasUpdated(HH, BH, LH) {
        const {
          state: AH
        } = this.textureSlot(HH);
        AH.dynamicSource = {
          invertY: BH,
          premultiplied: LH
        }, AH.dynamic && this.pushDynamic(HH.source, AH)
      }
      async atlasArrays(HH) {
        const {
          device: BH,
          epoch: LH
        } = this;
        let AH;
        try {
          AH = await BB(BH, HH)
        } catch (SH) {
          if (LH === this.epoch) {
            if (!CB(BH)) throw SH;
            await new Promise((HH => {
              this.rebindWaiters.push(HH)
            }))
          }
          return this.atlasArrays(HH)
        }
        if (AH.forEach(((BH, LH) => {
            this.atlasSources.has(BH) || this.atlasSources.set(BH, {
              sources: HH,
              index: LH,
              stride: AH[0].layers
            })
          })), LH !== this.epoch) return AH;
        const rH = (0, eh.e)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const hH of AH) this.atlasBindings.has(hH) || this.atlasBindings.set(hH, {
          view: hH.texture.createView({
            dimension: "2d-array"
          }),
          sampler: rH
        });
        return AH
      }
      boundTexture(HH) {
        const BH = this.atlasBindings.get(HH);
        if (BH) return BH;
        const LH = this.atlasSources.get(HH);
        if (LH) return this.rebuildAtlas(HH, LH), null;
        const AH = HH;
        if (AH.released) return null;
        const rH = this.textureSlot(AH, !0),
          {
            state: SH
          } = rH;
        if (!SH.view && (SH.wanted = !0, SH.loading || SH.failed || this.upload(AH, SH), !SH.view)) return null;
        const hH = this.chosenSampler(AH, rH),
          tH = rH.bound;
        return tH && tH.view === SH.view && tH.sampler === hH ? tH : (rH.bound = {
          view: SH.view,
          sampler: hH
        }, rH.bound)
      }
      rebuildAtlas(HH, BH) {
        let {
          sources: LH,
          index: AH,
          stride: rH
        } = BH;
        if (this.atlasRebuilds.has(HH)) return;
        this.atlasRebuilds.add(HH);
        const {
          epoch: SH
        } = this;
        this.atlasArrays(LH).then((BH => {
          BH[0].layers === rH && BH[AH] ? SH === this.epoch && this.atlasBindings.set(HH, this.atlasBindings.get(BH[AH])) : console.error(`Lite: the new device splits the atlas ${pH(LH.urls[0])} into other arrays than its materials read`)
        }), (HH => {
          console.error(`Lite: could not build the atlas ${pH(LH.urls[0])} again on a new device`, HH)
        }))
      }
      textureLoaded(HH) {
        var BH, LH;
        return null !== (BH = null === (LH = this.heldSlot(HH)) || void 0 === LH ? void 0 : LH.state.decoded) && void 0 !== BH ? BH : null
      }
      textureFailed(HH) {
        var BH;
        return !0 === (null === (BH = this.heldSlot(HH)) || void 0 === BH ? void 0 : BH.state.failed)
      }
      heldSlot(HH) {
        const BH = HH.gpu[mH.d.lite];
        return (null === BH || void 0 === BH ? void 0 : BH.epoch) === this.epoch ? BH : void 0
      }
      chosenSampler(HH, BH) {
        const {
          samplingMode: LH,
          wrapU: AH,
          wrapV: rH
        } = HH.sampler, SH = BH.state.hasMips, hH = function(HH, BH) {
          const {
            bilinear: LH,
            trilinear: AH
          } = mH.f;
          return !BH && HH !== LH || 11 !== HH && HH !== AH && HH !== LH ? 1 : 4
        }(LH, SH), tH = BH.sampler;
        if (tH && tH.samplingMode === LH && tH.hasMips === SH && tH.anisotropy === hH && tH.wrapU === AH && tH.wrapV === rH) return tH.sampler;
        const zH = this.samplerFor(LH, SH, hH, AH, rH);
        return BH.sampler = {
          samplingMode: LH,
          hasMips: SH,
          anisotropy: hH,
          wrapU: AH,
          wrapV: rH,
          sampler: zH
        }, zH
      }
      releaseTexture(HH) {
        var BH, LH;
        HH.view && (null === (LH = this.onDestroy) || void 0 === LH || LH.call(this, HH.view));
        null === (BH = HH.destroy) || void 0 === BH || BH.call(HH)
      }
      textureSlot(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = HH.gpu[mH.d.lite];
        if ((null === LH || void 0 === LH ? void 0 : LH.epoch) === this.epoch) return LH;
        const AH = function(HH) {
          let {
            source: BH,
            sampler: LH
          } = HH;
          return "canvas" === BH.kind ? null : `${BH.kind}|${ph(BH)}|${LH.noMipmap}|${LH.samplingMode}|${LH.invertY}`
        }(HH);
        let rH = null === AH ? void 0 : this.textures.get(AH);
        var SH;
        rH || (rH = {
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
          dynamicSource: null !== (SH = null === LH || void 0 === LH ? void 0 : LH.state.dynamicSource) && void 0 !== SH ? SH : null
        }, null !== AH && (this.textures.set(AH, rH), this.load(HH, rH), BH && !LH && this.firstBindDecodes++));
        rH.refs++;
        const hH = rH,
          {
            epoch: tH
          } = this,
          zH = {
            state: rH,
            bound: null,
            sampler: null,
            release: () => {
              tH === this.epoch && this.releaseSlot(hH, AH)
            },
            epoch: tH
          };
        return HH.gpu[mH.d.lite] = zH, zH
      }
      samplerFor(HH, BH, LH, AH, rH) {
        const SH = `${HH}|${BH}|${LH}|${AH}|${rH}`;
        let hH = this.samplers.get(SH);
        if (!hH) {
          const tH = {
            ...sh(HH, BH, LH),
            addressModeU: Jh(AH),
            addressModeV: Jh(rH)
          };
          hH = (0, eh.e)(this.engine, tH), this.samplers.set(SH, hH)
        }
        return hH
      }
      upload(HH, BH) {
        const {
          source: LH,
          sampler: AH
        } = HH;
        BH.hasMips = !AH.noMipmap, "canvas" === LH.kind ? this.createDynamic(LH, BH) : "cube" === LH.kind ? this.uploadCube(BH, LH.luminance) : this.uploadImage(BH, !0 === AH.invertY, LH.url)
      }
      uploadImage(HH, BH, LH) {
        const [AH] = HH.images;
        HH.images = null;
        const {
          epoch: rH
        } = this, SH = (0, qh.c)(this.engine, AH, {
          mipMaps: HH.hasMips,
          invertY: BH,
          srgb: !1
        }).then((BH => {
          AH.close(), 0 !== HH.refs && rH === this.epoch ? (HH.view = BH.view, HH.destroy = BH.texture.destroy.bind(BH.texture)) : BH.texture.destroy()
        }));
        this.track(HH, LH, SH)
      }
      track(HH, BH, LH, AH) {
        const {
          epoch: rH
        } = this;
        HH.loading = !0, this.pending++, LH.catch((LH => {
          rH === this.epoch && (HH.failed = !0, console.warn(`Lite: could not load texture ${pH(BH)}`, LH))
        })).finally((() => {
          rH === this.epoch && (HH.loading = !1, this.pending--, null === AH || void 0 === AH || AH())
        }))
      }
      uploadCube(HH, BH) {
        const LH = HH.images;
        HH.images = null;
        const AH = jh(this.engine, this.device, LH, (0, mH.s)(BH), HH.hasMips);
        HH.view = AH.createView({
          dimension: "cube"
        }), HH.destroy = () => {
          AH.destroy()
        }
      }
      createDynamic(HH, BH) {
        const {
          canvas: LH
        } = HH, AH = (0, gh.e)(this.engine, Math.max(1, LH.width), Math.max(1, LH.height), {
          mipMaps: BH.hasMips,
          srgb: !1
        });
        BH.dynamic = AH, BH.view = AH.view, BH.destroy = () => {
          AH.texture.destroy()
        }, this.pushDynamic(HH, BH)
      }
      pushDynamic(HH, BH) {
        const LH = BH.dynamicSource,
          AH = BH.dynamic,
          {
            canvas: rH
          } = HH;
        if (LH && AH && 0 !== rH.width && 0 !== rH.height) return rH.width !== AH.width || rH.height !== AH.height ? (this.releaseTexture(BH), BH.dynamic = null, BH.view = null, void this.createDynamic(HH, BH)) : void(0, gh.g)(this.engine, AH, rH, {
          invertY: LH.invertY,
          premultiplyAlpha: LH.premultiplied
        })
      }
    }

    function ph(HH) {
      return "cube" === HH.kind ? HH.rootUrl : "canvas" === HH.kind ? "canvas" : HH.url
    }
    const yh = new Uint8Array(4);
    var Ht = LH(39677);

    function Bt(HH) {
      const BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      HH._colorAttachment.storeOp = HH._targetSignature._sampleCount > 1 ? BH : "store";
      const LH = HH._renderPassDescriptor.depthStencilAttachment;
      LH && (LH.depthStoreOp = BH, LH.stencilStoreOp && (LH.stencilStoreOp = BH))
    }
    var Lt = LH(38619),
      At = LH(38684),
      rt = LH(38241),
      St = LH(40634);
    const ht = new Float64Array([1, 1, 1]),
      tt = new Float64Array([0, 1, 0]),
      zt = new Float64Array(4),
      Ct = new Float32Array(16),
      Et = new Float64Array(3),
      Xt = new Float64Array(4);

    function Gt(HH, BH, LH) {
      HH.fov = BH.fov, HH.near = BH.near, HH.far = BH.far, HH.renderWidth = LH.renderWidth, HH.renderHeight = LH.renderHeight, (0, rt.t)(BH.holderRotation, 0, zt, 0), (0, rt.e)(ht, 0, zt, 0, BH.holderPosition, 0, Ct);
      const AH = BH.R_;
      Et[0] = AH[0], Et[1] = AH[1], Et[2] = AH[2] + 1;
      const rH = HH.viewMatrix;
      (0, rt.k)(AH, Et, tt, rH), (0, rt.j)(rH, 0, rH), (0, rt.l)(rH, Ct, 0, rH), (0, rt.j)(rH, 0, rH);
      const SH = HH.worldMatrix;
      (0, rt.j)(rH, 0, SH), HH.eye[0] = SH[12], HH.eye[1] = SH[13], HH.eye[2] = SH[14], Xt[0] = HH.fov, Xt[1] = HH.renderWidth / HH.renderHeight, Xt[2] = HH.near, Xt[3] = HH.far, (0, rt.p)(Xt, HH.projectionMatrix), (0, rt.l)(rH, HH.projectionMatrix, 0, HH.viewProjectionMatrix), (0, St.g)(HH.viewProjectionMatrix, HH.frustum)
    }

    function Yt(HH, BH) {
      let LH = HH.frustumPlanes;
      LH || (LH = HH.frustumPlanes = Array.from({
        length: 6
      }, (() => new Lt.d(0, 0, 0, 0))));
      for (let AH = 0; AH < 6; AH++) {
        const HH = LH[AH].normal;
        HH._x = BH[4 * AH], HH._y = BH[4 * AH + 1], HH._z = BH[4 * AH + 2], HH._isDirty = !0, LH[AH].d = BH[4 * AH + 3]
      }
    }

    function ut(HH, BH) {
      const LH = BH.clearColor;
      HH.clearColour[0] = LH.r, HH.clearColour[1] = LH.g, HH.clearColour[2] = LH.b, HH.clearColour[3] = LH.a;
      const AH = BH.ambientColor;
      HH.ambientColour[0] = AH.r, HH.ambientColour[1] = AH.g, HH.ambientColour[2] = AH.b, HH.animationRatio = BH.animationRatio, HH.frameId = BH.frameId, HH.version++
    }

    function Qt(HH) {
      const BH = HH.model.view;
      return BH.animTick = (0, At.f)(), BH.timeMs = performance.now(), ut(BH, HH.NQ), HH.model.update(BH.frameId), BH
    }

    function Wt(HH) {
      const BH = HH.NQ,
        {
          view: LH,
          N_: AH
        } = HH.model;
      return Gt(LH, AH, BH.Iu()), BH.onBeforeRenderObservable.notifyObservers(BH), Yt(BH, LH.frustum), BH.onBeforeCameraRenderObservable.notifyObservers(BH.activeCamera), Qt(HH)
    }
    var Mt = LH(38202),
      xt = LH(38299),
      vt = LH(38675);

    function Pt(HH) {
      var BH, LH;
      const AH = (0, bH.V)(HH);
      if (!AH || AH.diffuseTexture && (0, vt.g)(HH)) return null;
      const rH = null === (BH = (0, bH.s)(AH, VH.g.name)) || void 0 === BH ? void 0 : BH.state,
        SH = null === (LH = (0, bH.s)(AH, pS.c.name)) || void 0 === LH ? void 0 : LH.state,
        hH = new Float32Array(16);
      return function(HH, BH, LH, AH) {
        var rH, SH;
        const hH = eA;
        AH.set(HH.diffuseColor, hH.diffuse), AH[hH.diffuse + 3] = HH.alpha, AH.set(HH.ambientColor, hH.ambientAndCutoff), AH[hH.ambientAndCutoff + 3] = HH.alphaCutOff, AH.set(HH.emissiveColor, hH.emissiveAndLevel), AH[hH.emissiveAndLevel + 3] = null !== (rH = null === (SH = HH.diffuseTexture) || void 0 === SH ? void 0 : SH.level) && void 0 !== rH ? rH : 1, null !== BH && void 0 !== BH && BH.animDataPerTex ? (AH[hH.anim + 1] = At.d, AH[hH.anim + 2] = BH.animDataPerTex.length / 3 - 1) : LH && (AH[hH.anim + 1] = LH.numAnimStates, AH[hH.anim + 2] = LH.ticksPerAnimState)
      }(AH, rH, SH, hH), {
        model: AH,
        atlas: rH,
        texture: rH ? "atlas" : AH.diffuseTexture ? "single" : "none",
        animated: rH ? !!rH.animDataPerTex : !!SH,
        liquid: (0, vt.i)(HH),
        customRenderMat: (0, vt.g)(HH),
        uniformData: hH
      }
    }
    var Tt = LH(3166);
    class Ut {
      constructor(HH) {
        this.units = HH, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var HH;
        this.buffer.destroy(), null === (HH = this.twin) || void 0 === HH || HH.destroy()
      }
    }
    class Vt {
      constructor(HH, BH) {
        this.arena = HH, this.rW = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.rW = new Dh(BH);
        const LH = new Ut(BH);
        LH.buffer = this.createBuffer(LH, !1), this.backings.push(LH), this.refresh()
      }
      get aX() {
        return this.rW.aX
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
        let HH = 0;
        for (const BH of this.backings) HH += BH.units * (this.arena.unitBytes + (BH.twin ? this.arena.twinUnitBytes : 0));
        return HH
      }
      holds(HH) {
        return HH.start + HH.length <= this.usable
      }
      lost(HH) {
        return this.dropped || HH.start + HH.length > this.aX
      }
      write(HH, BH) {
        const {
          device: LH,
          unitBytes: AH
        } = this.arena;
        for (const rH of this.backings) {
          const SH = (rH.units - HH.start) * AH;
          SH > 0 && LH.queue.writeBuffer(rH.buffer, HH.start * AH, BH, 0, Math.min(BH.byteLength, SH))
        }
      }
      writeLight(HH, BH) {
        const {
          device: LH,
          twinUnitBytes: AH,
          verticesPerUnit: rH
        } = this.arena, {
          light: SH,
          count: hH
        } = this.arena.twinLight(BH, Math.min(BH.length, HH.length * rH));
        for (const tH of this.backings) {
          tH.twin || (tH.twin = this.createBuffer(tH, !0));
          const BH = (tH.units - HH.start) * rH;
          BH > 0 && LH.queue.writeBuffer(tH.twin, HH.start * AH, SH, 0, Math.min(hH, BH))
        }
      }
      grow(HH) {
        this.arena.assertNotDrawing();
        const {
          device: BH,
          unitBytes: LH,
          label: AH
        } = this.arena, rH = this.backings[this.backings.length - 1], SH = new Ut(HH), hH = BH.createCommandEncoder({
          label: `${AH}-grow`
        });
        SH.buffer = this.createBuffer(SH, !1), hH.copyBufferToBuffer(rH.buffer, 0, SH.buffer, 0, rH.units * LH), rH.twin && (SH.twin = this.createBuffer(SH, !0), hH.copyBufferToBuffer(rH.twin, 0, SH.twin, 0, rH.units * this.arena.twinUnitBytes)), BH.queue.submit([hH.finish()]), this.backings.push(SH), this.rW.grow(HH)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const HH of this.backings) HH.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(HH, BH) {
        const {
          device: LH,
          unitBytes: AH,
          twinUnitBytes: rH,
          usage: SH,
          label: hH
        } = this.arena;
        LH.pushErrorScope("out-of-memory");
        const tH = LH.createBuffer({
          label: BH ? `${hH}-light` : hH,
          size: HH.units * (BH ? rH : AH),
          usage: (BH ? this.arena.twinUsage : SH) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, LH.popErrorScope().then((LH => {
          this.arena.awaitingVerdict--, this.settle(HH, BH, !LH, !0)
        }), (LH => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${hH} buffer, taken as failed: ${String(LH)}`), this.settle(HH, BH, !1, !1)
        })), tH
      }
      settle(HH, BH, LH, AH) {
        const rH = this.backings.indexOf(HH);
        if (!(this.dropped || rH < 0)) {
          if (!LH) {
            if (AH && this.arena.ranOutOfMemory(HH.units, HH.units * (BH ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === rH) return void this.drop();
            for (const HH of this.backings.splice(rH)) HH.destroy();
            return this.rW.truncate(this.backings[rH - 1].units), this.growable = !1, void this.promote()
          }
          BH ? HH.twinReady = !0 : (HH.bufferReady = !0, this.arena.allocatedBuffer(HH.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: HH
        } = this;
        let BH = 0;
        for (; BH + 1 < HH.length && HH[BH].ready && HH[BH + 1].ready;) BH++;
        for (const LH of HH.splice(0, BH)) LH.destroy();
        this.refresh()
      }
      refresh() {
        const HH = this.backings[0];
        this.buffer = HH.buffer, this.twin = HH.twinReady ? HH.twin : null, this.usable = !this.dropped && HH.bufferReady ? HH.units : 0
      }
    }
    class Ot {
      constructor(HH, BH, LH, AH) {
        let {
          verticesPerUnit: rH = 1,
          twinUsage: SH = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = HH, this.unitBytes = BH, this.usage = LH, this.label = AH, this.pages = [], this.VX = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, lB.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), BH % 4 !== 0) throw new Error(`${AH}: ${BH}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = rH, this.twinUsage = SH, this.twinValueBytes = rH > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * rH
      }
      twinLight(HH, BH) {
        if (4 === this.twinValueBytes) return this.widened.length < BH && (this.widened = new Float32Array(Math.max(BH, 2 * this.widened.length))), this.widened.set(HH.subarray(0, BH)), {
          light: this.widened,
          count: BH
        };
        const LH = BH % this.verticesPerUnit;
        if (0 === LH) return {
          light: HH,
          count: BH
        };
        const AH = BH - LH + this.verticesPerUnit;
        return this.padded.length < AH && (this.padded = new Uint16Array(Math.max(AH, 2 * this.padded.length))), this.padded.set(HH.subarray(0, BH)), this.padded.fill(0, BH, AH), {
          light: this.padded,
          count: AH
        }
      }
      allocate(HH) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), HH > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const rH of this.pages) {
          const BH = rH.rW.allocate(HH);
          if (BH >= 0) return {
            page: rH,
            start: BH,
            length: HH
          }
        }
        const BH = this.pages[this.pages.length - 1];
        if (null !== BH && void 0 !== BH && BH.canGrow) {
          const LH = Math.min(this.ceiling, Math.max(2 * BH.aX, BH.aX + HH));
          if (LH - BH.aX >= HH) return BH.grow(LH), {
            page: BH,
            start: BH.rW.allocate(HH),
            length: HH
          }
        }
        BH && BH !== this.pages[0] && 0 === BH.rW.used && BH.drop();
        const LH = Math.floor(1048576 / this.unitBytes),
          AH = new Vt(this, Math.max(HH, Math.min(this.ceiling, LH)));
        return this.pages.push(AH), {
          page: AH,
          start: AH.rW.allocate(HH),
          length: HH
        }
      }
      free(HH) {
        this.assertNotDrawing();
        const {
          page: BH
        } = HH;
        BH.rW.free(HH.start, HH.length), 0 === BH.rW.used && BH !== this.pages[0] && BH !== this.pages[this.pages.length - 1] && BH.drop()
      }
      retire() {
        for (const HH of this.pages) HH.retire()
      }
      remove(HH) {
        const BH = this.pages.indexOf(HH);
        BH >= 0 && this.pages.splice(BH, 1)
      }
      ranOutOfMemory(HH, BH) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${BH}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, HH), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, HH) / 2));
        const LH = performance.now();
        LH >= this.shortageUntil && (this.forgetFailedAt = LH + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = LH + 1e3)
      }
      allocatedBuffer(HH) {
        HH >= this.failed && (this.failed = 1 / 0);
        const BH = Math.min(2 * HH, Math.floor((HH + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, BH))
      }
      stats() {
        let HH = 0,
          BH = 0,
          LH = 0,
          AH = 0;
        for (const rH of this.pages) HH += rH.aX, BH += rH.rW.used, LH += rH.hasTwin ? rH.aX * this.twinUnitBytes : 0, AH += rH.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: HH * this.unitBytes,
          usedBytes: BH * this.unitBytes,
          twinBytes: LH,
          allocatedBytes: AH
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: HH,
          maxStorageBufferBindingSize: BH
        } = this.device.limits;
        let LH = Math.floor(Math.min(67108864, HH) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (LH = Math.min(LH, Math.floor(BH / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (LH = Math.min(LH, Math.floor(BH / this.twinUnitBytes))), LH
      }
    }
    const bt = 16383;

    function kt(HH, BH, LH, AH, rH) {
      let SH = 0;
      for (let hH = LH; hH < AH; hH += bt) HH.drawIndexed(6 * Math.min(bt, AH - hH), 1, 0, BH + 4 * hH, rH), SH++;
      return SH
    }
    class mt {
      constructor(HH, BH) {
        this.recordsGroup = BH, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const LH = aB.g.strideWithoutAtlas;
        this.vertexArena = new Ot(HH, LH, GPUBufferUsage.VERTEX, `terrain-vertices-${LH}`), this.quadArena = new Ot(HH, xt.c, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const AH = (0, sB.g)(new Uint16Array(98298), bt);
        this.quadPattern = HH.createBuffer({
          label: "terrain-quad-pattern",
          size: AH.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), HH.queue.writeBuffer(this.quadPattern, 0, AH)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(HH, BH) {
        const LH = BH.packedVertices,
          AH = LH ? this.quadArena.allocate(HH.faceCount) : this.vertexArena.allocate(HH.vertexCount);
        if (!AH) return !1;
        HH.vertices = AH;
        const rH = LH ? new Uint8Array(LH.buffer, LH.byteOffset, LH.byteLength) : new Uint8Array(BH.vertices);
        return AH.page.write(AH, rH), !0
      }
      setLight(HH, BH) {
        const {
          vertices: LH
        } = HH;
        LH && 0 !== BH.length && LH.page.live && (BH.length < HH.vertexCount ? LH.page.arena.warnOnce("shortLight", `a part's ${BH.length} light values are fewer than its ${HH.vertexCount} vertices, so its light is left as it was`) : (LH.page.writeLight(LH, BH), HH.lit = !0))
      }
      lightFullSky(HH, BH) {
        this.fullSky.length < BH && (this.fullSky = new Uint16Array(Math.max(BH, 4096)).fill(Tt.g));
        for (const LH of HH) {
          const HH = LH.vertices;
          HH.page.live && (HH.page.writeLight(HH, this.fullSky), LH.lit = !0)
        }
      }
      backed(HH) {
        const {
          vertices: BH
        } = HH;
        return !!BH && BH.page.holds(BH)
      }
      lost(HH) {
        const {
          vertices: BH
        } = HH;
        return !!BH && BH.page.lost(BH)
      }
      release(HH) {
        HH.vertices && HH.vertices.page.arena.free(HH.vertices), HH.vertices = null, HH.lit = !1
      }
      setDrawing(HH) {
        this.forgetBound()
      }
      draw(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BH.faceCount;
        const SH = BH.vertices,
          hH = SH.page,
          tH = LH ? hH.twin : null;
        if (!hH.holds(SH) || LH && !tH) return 0;
        const {
          verticesPerUnit: zH
        } = hH.arena;
        let CH = SH.start * zH;
        this.boundPattern || (HH.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const EH = AH + rH;
        if (zH > 1) return hH.buffer === this.boundRecords && tH === this.boundRecordsLight || (HH.setBindGroup(1, this.recordsGroup(hH.buffer, tH)), this.boundRecords = hH.buffer, this.boundRecordsLight = tH), kt(HH, CH, AH, EH, BH.slot);
        hH.buffer !== this.boundVertices && (HH.setVertexBuffer(0, hH.buffer), this.boundVertices = hH.buffer), tH && tH !== this.boundLight && (HH.setVertexBuffer(1, tH), this.boundLight = tH);
        const XH = BH.faceCount;
        return EH <= XH ? kt(HH, CH, AH, EH, BH.slot) : kt(HH, CH, AH, XH, BH.slot) + kt(HH, CH, Math.max(AH, XH) - XH, EH - XH, BH.slot)
      }
      get buffersAwaitingVerdict() {
        let HH = 0;
        for (const BH of this.arenas()) HH += BH.awaitingVerdict;
        return HH
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class ot {
      constructor(HH, BH, LH, AH) {
        this.device = HH, this.splitBefore = BH, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = HH.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const rH = HH.createShaderModule({
          label: "scene-depth-copy",
          code: (SH = LH._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${SH?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var SH;
        HH.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: rH,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: rH,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((HH => {
          this.pipeline = HH, this.building = !1
        }), (HH => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", HH)
        })), LH._executeWithTransmission = () => this.execute(LH, AH)
      }
      get compiling() {
        return this.building
      }
      setWanted(HH) {
        this.wanted = HH
      }
      setPlanes(HH, BH) {
        HH === this.near && BH === this.far || (this.near = HH, this.far = BH, this.unproject[0] = HH / (BH - HH), this.unproject[1] = BH * HH / (BH - HH), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var HH, BH;
        return null !== (HH = null === (BH = this.copy) || void 0 === BH ? void 0 : BH.view) && void 0 !== HH ? HH : null
      }
      execute(HH, BH) {
        var LH;
        null === (LH = this.retired) || void 0 === LH || LH.destroy(), this.retired = null;
        const AH = UB(BH),
          rH = HH._transparentBindings,
          SH = this.wanted && this.pipeline ? this.splitIndex(rH) : -1,
          hH = HH._colorAttachment,
          tH = hH.resolveTarget;
        SH >= 0 && (hH.resolveTarget = void 0, Bt(HH, !0));
        let zH = AH.beginRenderPass(HH._renderPassDescriptor);
        zH.setBindGroup(0, HH._sceneBG);
        let CH = this.drawList(zH, BH, HH._opaqueBindings, 0, HH._opaqueBindings.length);
        if (CH += this.drawList(zH, BH, HH._directBindings, 0, HH._directBindings.length), CH += this.drawList(zH, BH, rH, 0, SH >= 0 ? SH : rH.length), zH.end(), SH < 0) return CH;
        Bt(HH);
        const EH = HH._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: XH,
            stencilLoadOp: GH
          } = EH,
          YH = hH.loadOp;
        hH.resolveTarget = tH;
        try {
          this.copyDepth(AH, HH), hH.loadOp = "load", EH.depthLoadOp = "load", GH && (EH.stencilLoadOp = "load"), zH = AH.beginRenderPass(HH._renderPassDescriptor), zH.setBindGroup(0, HH._sceneBG), CH += this.drawList(zH, BH, rH, SH, rH.length), zH.end()
        } finally {
          hH.loadOp = YH, EH.depthLoadOp = XH, EH.stencilLoadOp = GH
        }
        return CH
      }
      splitIndex(HH) {
        for (let BH = 0; BH < HH.length; BH++)
          if (HH[BH].renderable === this.splitBefore) return BH;
        return -1
      }
      drawList(HH, BH, LH, AH, rH) {
        let SH = null,
          hH = 0;
        for (let tH = AH; tH < rH; tH++) {
          const AH = LH[tH],
            rH = AH.renderable.mesh;
          rH && !1 === rH.visible || (AH.pipeline !== SH && (HH.setPipeline(AH.pipeline), SH = AH.pipeline), hH += AH.draw(HH, BH))
        }
        return hH
      }
      copyDepth(HH, BH) {
        var LH, AH;
        const rH = (null !== (LH = BH._config.depth) && void 0 !== LH ? LH : BH._config.rt)._depthTexture,
          SH = (null === (AH = this.copy) || void 0 === AH ? void 0 : AH.source) === rH ? this.copy : this.remakeCopy(rH),
          hH = HH.beginRenderPass(SH.pass);
        hH.setPipeline(this.pipeline), hH.setBindGroup(0, SH.bindGroup), hH.draw(3), hH.end()
      }
      remakeCopy(HH) {
        var BH, LH;
        this.retired = null !== (BH = null === (LH = this.copy) || void 0 === LH ? void 0 : LH.texture) && void 0 !== BH ? BH : null;
        const AH = this.device.createTexture({
            label: "scene-depth",
            size: [HH.width, HH.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          rH = AH.createView(),
          SH = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: HH.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          hH = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: rH,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: HH,
          texture: AH,
          view: rH,
          bindGroup: SH,
          pass: hH
        }, this.copy
      }
    }
    const It = "rgba8unorm";

    function ft(HH) {
      return HH ? 15 : 1
    }
    class lt {
      constructor(HH, BH, LH, AH) {
        this.device = HH, this.terrain = AH, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = BH._targetSignature._sampleCount > 1, this.cameraBuffer = HH.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = HH.createBindGroupLayout({
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
        const rH = HH.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = HH.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: rH,
          entries: []
        });
        const SH = HH.createShaderModule({
          label: "sun-shadow-mask",
          code: (hH = this.edge, `${(0,JB.H)()}${tA({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${hH?JL:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${ft(hH)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${hH?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var hH;
        HH.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: HH.createPipelineLayout({
            bindGroupLayouts: [this.layout, rH, rH, DS(HH, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: SH,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: SH,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((HH => {
          this.pipeline = HH, this.building = !1
        }), (HH => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", HH)
        }));
        const tH = BH._executeWithTransmission;
        BH._executeWithTransmission = HH => this.execute(BH, LH, (() => tH ? tH(HH) : function(HH, BH) {
          const LH = UB(BH).beginRenderPass(HH._renderPassDescriptor);
          LH.setBindGroup(0, HH._sceneBG);
          let AH = Kt(LH, BH, HH._opaqueBindings);
          return AH += Kt(LH, BH, HH._directBindings), AH += Kt(LH, BH, HH._transparentBindings), LH.end(), AH
        }(BH, LH)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var HH, BH;
        return null !== (HH = null === (BH = this.targets) || void 0 === BH ? void 0 : BH.maskView) && void 0 !== HH ? HH : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(HH) {
        ! function(HH, BH) {
          const LH = HH.worldMatrix,
            AH = HH.projectionMatrix,
            rH = 1 / AH[0],
            SH = 1 / AH[5],
            hH = HH.far * HH.near / (HH.far - HH.near);
          BH[0] = HH.eye[0], BH[1] = HH.eye[1], BH[2] = HH.eye[2], BH[3] = 2 ** -23 / hH, BH[4] = LH[0] * rH, BH[5] = LH[1] * rH, BH[6] = LH[2] * rH, BH[7] = hH, BH[8] = LH[4] * SH, BH[9] = LH[5] * SH, BH[10] = LH[6] * SH, BH[11] = HH.near / (HH.far - HH.near), BH[12] = LH[8], BH[13] = LH[9], BH[14] = LH[10], BH[15] = 0
        }(HH, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(HH, BH, LH) {
        if (this.retire(), !this.terrain.readsMask) return LH();
        const AH = this.targetsFor(HH),
          rH = UB(BH),
          SH = HH._renderPassDescriptor.depthStencilAttachment;
        this.edge || (AH.prepass.depthStencilAttachment.view = SH.view);
        const hH = this.terrain.drawPrepass(rH, AH.prepass, HH._sceneBG);
        if (0 === hH) return LH();
        if (this.trace(rH, AH), this.edge) return hH + 1 + LH();
        const {
          depthLoadOp: tH,
          stencilLoadOp: zH
        } = SH;
        SH.depthLoadOp = "load", zH && (SH.stencilLoadOp = "load");
        try {
          return hH + 1 + LH()
        } finally {
          SH.depthLoadOp = tH, SH.stencilLoadOp = zH
        }
      }
      trace(HH, BH) {
        const LH = this.terrain.sunShadowGroup(),
          AH = HH.beginRenderPass(BH.trace);
        this.pipeline && LH && (AH.setPipeline(this.pipeline), AH.setBindGroup(0, BH.bindGroup), AH.setBindGroup(1, this.empty), AH.setBindGroup(2, this.empty), AH.setBindGroup(3, LH), AH.draw(3)), AH.end()
      }
      retire() {
        const HH = this.retired;
        var BH;
        HH && (HH.mask.destroy(), HH.normals.destroy(), null === (BH = HH.depth) || void 0 === BH || BH.destroy(), this.retired = null)
      }
      targetsFor(HH) {
        var BH, LH;
        const AH = (null !== (BH = HH._config.depth) && void 0 !== BH ? BH : HH._config.rt)._depthTexture;
        return (null === (LH = this.targets) || void 0 === LH ? void 0 : LH.source) === AH ? this.targets : this.remake(HH, AH)
      }
      remake(HH, BH) {
        var LH;
        this.retired = this.targets;
        const AH = [BH.width, BH.height],
          rH = this.device.createTexture({
            label: "sun-shadow-mask",
            size: AH,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          SH = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: AH,
            format: It,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          hH = null !== (LH = HH._targetSignature._depthStencilFormat) && void 0 !== LH ? LH : BH.format,
          tH = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: AH,
            format: hH,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          zH = HH._renderPassDescriptor.depthStencilAttachment,
          CH = hH.includes("stencil"),
          EH = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: SH.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: tH ? tH.createView() : zH.view,
              depthClearValue: zH.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...CH ? {
                stencilClearValue: zH.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          XH = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== tH && void 0 !== tH ? tH : BH).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: SH.createView()
            }]
          }),
          GH = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: rH.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [ft(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: BH,
          mask: rH,
          maskView: rH.createView(),
          normals: SH,
          depth: tH,
          bindGroup: XH,
          prepass: EH,
          trace: GH
        }, this.targets
      }
    }

    function Kt(HH, BH, LH) {
      let AH = null,
        rH = 0;
      for (const SH of LH) {
        const LH = SH.renderable.mesh;
        LH && !1 === LH.visible || (SH.pipeline !== AH && (HH.setPipeline(SH.pipeline), AH = SH.pipeline), rH += SH.draw(HH, BH))
      }
      return rH
    }
    const ct = 6e4,
      et = {
        status: "ok"
      },
      qt = {
        status: "skipped"
      };
    async function gt(HH, BH) {
      const {
        isCancelled: LH
      } = HH;
      if (LH()) return {
        status: "xB"
      };
      const {
        target: AH
      } = BH;
      if (!AH) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const rH = [],
        SH = Promise.all(Array.from(new Set(HH.materials), (async LH => {
          rH.push(await async function(HH, BH, LH, AH) {
            const rH = {
              lighting: HH.lighting,
              dirLightCount: Math.min(HH.dirLightCount, 4),
              Cu: HH.runtime
            };
            try {
              const SH = BH.material(AH);
              return SH && lA(BH.programKey(SH, !1, rH)) ? (await SH.ready, HH.isCancelled() ? et : SH.bindGroupLayout ? await async function(HH, BH, LH, AH) {
                const {
                  device: rH
                } = HH;
                let SH, hH;
                rH.pushErrorScope("validation");
                try {
                  SH = HH.pipelineBuild(BH, LH, AH)
                } finally {
                  hH = rH.popErrorScope().catch((() => null))
                }
                const [tH, zH] = await Promise.all([hH, SH.built.then((() => null), (HH => null !== HH && void 0 !== HH ? HH : new Error("pipeline failed")))]);
                if (!tH && !zH) return et;
                const CH = await Nt(SH.module),
                  EH = CH.length > 0 ? CH.map((HH => `${SH.name} ${HH.lineNum}:${HH.linePos}: ${HH.message}`)).join("\n") : `${SH.name}: ${Rt(null!==zH&&void 0!==zH?zH:tH)}`;
                return {
                  status: "failed",
                  material: BH.model.name,
                  message: EH
                }
              }(BH, SH, BH.programKey(SH, "none" !== SH.texture, rH), LH): (console.warn(`Shader pack: skipped the compile check for "${AH.name}", whose textures failed to load`), qt)) : et
            } catch (SH) {
              return {
                status: "failed",
                material: AH.name,
                message: Rt(SH)
              }
            }
          }(HH, BH, AH, LH))
        }))),
        hH = function(HH, BH) {
          let LH, AH, rH = !1;
          const SH = new Promise((SH => {
            var hH;
            LH = setTimeout((() => {
              SH("timeout")
            }), null !== (hH = BH.timeoutMs) && void 0 !== hH ? hH : ct), AH = setInterval((() => {
              BH.isCancelled() && SH("xB")
            }), 50), HH.lost.then((() => {
              rH = !0, SH("lost")
            }))
          }));
          return {
            signal: SH,
            lost: () => rH,
            dispose: () => {
              clearTimeout(LH), clearInterval(AH)
            }
          }
        }(BH.device, HH);
      let tH;
      try {
        tH = await Promise.race([SH.then((() => "done")), hH.signal])
      } finally {
        hH.dispose()
      }
      if ("xB" === tH || LH()) return {
        status: "xB"
      };
      const zH = rH.find((HH => "failed" === HH.status));
      return zH && "lost" !== tH && !hH.lost() && await new Promise((HH => {
        setTimeout(HH, 0)
      })), "lost" === tH || hH.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : zH ? {
        status: "failed",
        failure: {
          material: zH.material,
          message: zH.message
        }
      } : "timeout" === tH ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(CH=HH.timeoutMs)&&void 0!==CH?CH:ct)/1e3} s`), {
        status: "skipped"
      }) : rH.some((HH => "skipped" === HH.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var CH
    }
    async function Nt(HH) {
      if (!HH) return [];
      try {
        return (await HH.getCompilationInfo()).messages.filter((HH => "error" === HH.type))
      } catch {
        return []
      }
    }

    function Rt(HH) {
      var BH;
      return null !== (BH = null === HH || void 0 === HH ? void 0 : HH.message) && void 0 !== BH ? BH : String(HH)
    }

    function jt(HH, BH, LH, AH, rH) {
      lA(BH) ? Nt(AH).then((BH => {
        const [AH] = BH;
        EB(HH, "terrain", LH, rH, AH ? `${AH.lineNum}:${AH.linePos} error: ${AH.message}` : null)
      })) : EB(HH, "terrain", LH, rH)
    }
    var nt = LH(38302),
      Ft = LH(38308),
      Dt = LH(38319),
      wt = LH(3150);

    function Zt(HH, BH, LH, AH, rH) {
      const SH = Math.hypot(LH[0], LH[1], LH[2]);
      if (!(SH > 0)) return;
      const hH = [LH[0] / SH, LH[1] / SH, LH[2] / SH],
        tH = [Math.floor(BH[0]), Math.floor(BH[1]), Math.floor(BH[2])],
        zH = [0, 0, 0],
        CH = [1 / 0, 1 / 0, 1 / 0],
        EH = [1 / 0, 1 / 0, 1 / 0];
      for (let YH = 0; YH < 3; YH++) hH[YH] > 0 ? (zH[YH] = 1, CH[YH] = (tH[YH] + 1 - BH[YH]) / hH[YH], EH[YH] = 1 / hH[YH]) : hH[YH] < 0 && (zH[YH] = -1, CH[YH] = (tH[YH] - BH[YH]) / hH[YH], EH[YH] = -1 / hH[YH]);
      const {
        xX: XH
      } = HH;
      let GH = HH.Ip(tH[0], tH[1], tH[2]);
      for (;;) {
        const BH = CH[0] < CH[1] ? CH[0] < CH[2] ? 0 : 2 : CH[1] < CH[2] ? 1 : 2;
        if (CH[BH] > AH) return;
        const LH = zH[BH] > 0 ? tH[BH] + 1 : tH[BH];
        tH[BH] += zH[BH], CH[BH] += EH[BH];
        const SH = HH.Ip(tH[0], tH[1], tH[2]),
          hH = SH !== GH && !(HH.opaque[GH] && HH.opaque[SH]);
        if (hH) {
          const AH = [tH[0], tH[1], tH[2]];
          AH[BH] = LH;
          const SH = Math.floor(AH[0] / XH),
            hH = Math.floor(AH[1] / XH),
            zH = Math.floor(AH[2] / XH);
          !HH.isDrawn(SH, hH, zH) && HH.hasParts(SH, hH, zH) && rH.add(`${SH},${hH},${zH}`)
        }
        if (hH && HH.occluders[SH]) return;
        GH = SH
      }
    }

    function dt(HH, BH) {
      return HH.group - BH.group || HH.nearest - BH.nearest
    }
    class st {
      constructor(HH, BH) {
        this.device = HH, this.Av = BH, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var HH;
        const BH = null !== (HH = this.free.pop()) && void 0 !== HH ? HH : this.next++;
        if (8 * BH >= this.data.length) {
          const HH = new Float32Array(2 * this.data.length);
          HH.set(this.data), this.data = HH, this.words = new Uint32Array(HH.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Av()
        }
        return BH
      }
      release(HH) {
        this.free.push(HH)
      }
      set(HH, BH, LH, AH, rH) {
        const SH = 8 * HH + FA;
        this.data[SH] = BH, this.data[SH + 1] = LH, this.data[SH + 2] = AH, this.setVisibility(HH, rH)
      }
      setVisibility(HH, BH) {
        this.data[8 * HH + DA] = BH, this.markDirty(HH, HH)
      }
      setFaces(HH, BH, LH) {
        const AH = 8 * HH;
        this.words[AH + wA] = BH, this.words[AH + ZA] = LH, this.markDirty(HH, HH)
      }
      markDirty(HH, BH) {
        this.dirtyMin = Math.min(this.dirtyMin, HH), this.dirtyMax = Math.max(this.dirtyMax, BH)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Jt = nA,
      it = !0;
    const pt = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Jt.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      yt = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Hz {
      constructor(HH) {
        this.device = HH, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(cA), this.dirLightUniforms = this.frameUniforms.subarray(KA.dirLights, KA.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, lB.e)(), this.faceGroups = !0, this.visibilityGraph = it, this.visCull = it, this.visCheck = !1, this.visCullMinDistance = Dt.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new rz, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Cu = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new mt(HH, ((HH, BH) => this.recordsGroup(HH, BH))), this.slots = new st(HH, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = VB(HH), this.frameLayout = HH.createBindGroupLayout({
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
        }), this.frameBuffer = HH.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = HH.createSampler({
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
          bind: (HH, BH) => this.createBinding(this.opaqueRenderable, BH, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (HH, BH) => this.createBinding(this.transparentRenderable, BH, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(HH, BH) {
        this.sceneDepth = new ot(this.device, this.transparentRenderable, HH, BH)
      }
      createFrameBindGroup() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== HH && void 0 !== HH ? HH : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== BH && void 0 !== BH ? BH : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(HH, BH) {
        const LH = null !== BH && void 0 !== BH ? BH : HH;
        let AH = this.recordsGroups.get(LH);
        return AH || (AH = this.createFrameBindGroup(HH, BH), this.recordsGroups.set(LH, AH)), AH
      }
      setChunkMesh(HH, BH, LH) {
        var AH;
        let rH = this.chunks.get(HH);
        rH ? this.geometry.release(rH) : (rH = {
          mesh: HH,
          slot: this.slots.allocate(),
          origin: [LH[0], LH[1], LH[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: HH.visibility,
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
        }, this.chunks.set(HH, rH), this.writeSlot(rH)), rH.material = HH.material ? this.materialFor(HH.material) : null, rH.packed = !!BH.packedVertices, rH.vertexCount = (0, xt.d)(BH), rH.faceCount = rH.vertexCount / 4;
        const SH = null !== (AH = BH.faceGroups) && void 0 !== AH ? AH : null;
        if (rH.faceGroups = SH, SH) {
          const HH = nt.q;
          rH.planePX = SH[HH], rH.planeNX = SH[HH + 1], rH.planePY = SH[HH + 2], rH.planeNY = SH[HH + 3], rH.planePZ = SH[HH + 4], rH.planeNZ = SH[HH + 5]
        }
        this.drawWhole(rH), 0 !== rH.faceCount && (this.geometry.set(rH, BH) ? (rH.packed && this.slots.setFaces(rH.slot, rH.vertices.start + rH.faceCount, rH.faceCount), BH.Gu && this.setChunkMeshLight(HH, BH.Gu)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${rH.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(HH, BH) {
        const LH = this.chunks.get(HH);
        LH && this.geometry.setLight(LH, BH)
      }
      drawStats() {
        let HH = this.transparent.length;
        for (const BH of this.opaqueBatches) HH += BH.meshes.length;
        return {
          drawn: HH,
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
      removeChunkMesh(HH) {
        const BH = this.chunks.get(HH);
        BH && (this.geometry.release(BH), this.slots.release(BH.slot), this.chunks.delete(HH))
      }
      remeshLost(HH, BH) {
        this.geometry.release(BH), BH.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** BH.lostRemeshes++);
        const LH = HH.cX,
          [AH, rH, SH] = LH.hrH(BH.origin[0], BH.origin[1], BH.origin[2]),
          hH = LH.WQ.MQ(AH, rH, SH);
        hH && (hH.uQ = !0, hH.vQ = !0, LH.QQ(hH, !1))
      }
      chooseFaceRanges(HH, BH, LH) {
        const AH = this.faceRanges;
        HH.faceMask = LH, HH.rangeCount = (0, Ft.o)(BH, LH, AH), HH.first0 = AH[0], HH.count0 = AH[1], HH.first1 = AH[2], HH.count1 = AH[3]
      }
      drawWhole(HH) {
        HH.faceMask = -1, HH.faceEpoch = -1, HH.rangeCount = 1, HH.first0 = 0, HH.count0 = HH.faceCount
      }
      writeSlot(HH) {
        const [BH, LH, AH] = this.originOffset;
        this.slots.set(HH.slot, HH.origin[0] - BH, HH.origin[1] - LH, HH.origin[2] - AH, HH.visibility)
      }
      materialFor(HH) {
        const BH = this.materials.get(HH);
        if (BH) return BH;
        const LH = Pt(HH);
        if (!LH) return this.warnOnce(`material:${HH.name}`, `Lite terrain cannot draw material "${HH.name}"; its chunks are skipped.`), null;
        const {
          model: AH,
          atlas: rH,
          texture: SH,
          animated: hH,
          uniformData: tH
        } = LH, zH = {
          id: this.materials.size,
          model: AH,
          texture: SH,
          animated: hH,
          uniformData: tH,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${HH.name}`,
            size: tH.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: LH.liquid,
          customRenderMat: LH.customRenderMat,
          atlasCount: 0,
          o9: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(HH, zH), this.device.queue.writeBuffer(zH.uniformBuffer, 0, tH), zH.ready = this.createMaterialBindGroup(zH, rH).catch((BH => {
          console.error(`Lite terrain failed to load the textures of material "${HH.name}"`, BH)
        })), zH
      }
      materialLayout(HH) {
        const BH = function(HH) {
            const BH = ["uniforms"];
            if ("atlas" === HH.texture) {
              HH.animated && BH.push("animData"), BH.push("sampler");
              for (let LH = 0; LH < HH.atlasCount; LH++) BH.push("textureArray")
            } else "single" === HH.texture && BH.push("sampler", "texture");
            return BH
          }(HH),
          LH = BH.join(",");
        let AH = this.materialLayouts.get(LH);
        if (!AH) {
          const HH = GPUShaderStage.FRAGMENT;
          AH = this.device.createBindGroupLayout({
            label: `terrain-material-${LH}`,
            entries: BH.map(((BH, LH) => {
              switch (BH) {
                case "uniforms":
                  return {
                    binding: LH, visibility: GPUShaderStage.VERTEX | HH, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: LH, visibility: GPUShaderStage.VERTEX | HH, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: LH, visibility: HH, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: LH, visibility: HH, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: LH, visibility: HH, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(LH, AH)
        }
        return AH
      }
      async createMaterialBindGroup(HH, BH) {
        const LH = [{
          buffer: HH.uniformBuffer
        }];
        if (BH) {
          const AH = await BB(this.device, BH.sources);
          HH.atlasCount = AH.length, HH.o9 = AH[0].layerWidth, HH.atlasLayers = AH[0].layers, BH.animDataPerTex && LH.push({
            buffer: aH(this.device, Float32Array.from(BH.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), LH.push(this.sampler);
          for (const HH of AH) LH.push(HH.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === HH.texture) {
          const {
            url: BH
          } = HH.model.diffuseTexture.source, {
            pixels: AH,
            width: rH,
            height: SH
          } = await HB(BH);
          LH.push(this.sampler), LH.push(JH(this.device, AH, rH, SH, 1, `terrain-${BH}`).createView({
            dimension: "2d"
          }))
        }
        const AH = this.materialLayout(this.programKey(HH, !1));
        HH.bindGroupLayout = AH, HH.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${HH.model.name}`,
          layout: AH,
          entries: LH.map(((HH, BH) => ({
            binding: BH,
            resource: HH
          })))
        })
      }
      programKey(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const AH = LH ? LH.lighting : this.lighting,
          rH = LH ? LH.Cu : this.Cu,
          SH = {
            texture: HH.texture,
            atlasCount: HH.atlasCount,
            o9: HH.o9,
            atlasLayers: HH.atlasLayers,
            animated: HH.animated,
            alphaTest: HH.model.transparencyMode === bH.o.alphaTest,
            lighting: AH,
            dirLightCount: LH ? LH.dirLightCount : this.dirLightCount,
            packed: BH
          };
        if (!rH) return SH;
        const hH = this.shaderPackFields(HH, rH),
          tH = "atlas" === HH.texture && HH.model.transparencyMode === bH.o.opaque && mA(hH.packVariant);
        return {
          ...SH,
          ...hH,
          alphaTest: SH.alphaTest || tH
        }
      }
      shaderPackFields(HH, BH) {
        const LH = this.packVariant(HH, BH);
        return void 0 === LH ? bA : {
          packVariant: LH,
          liquid: HH.liquid
        }
      }
      packVariant(HH, BH) {
        return HH.customRenderMat ? void 0 : function(HH, BH) {
          const LH = HH ? HH.defineFor(BH ? "liquid" : "terrain") : 0;
          return 0 === LH ? void 0 : LH
        }(BH, HH.liquid)
      }
      isBlended(HH) {
        return HH.model.transparencyMode === bH.o.alphaBlend
      }
      shaderModule(HH, BH) {
        let LH = this.modules.get(HH);
        return LH || (LH = this.device.createShaderModule({
          label: BH,
          code: HH
        }), this.modules.set(HH, LH)), LH
      }
      pipelineFor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!HH.bindGroupLayout) return null;
        if (!AH) return this.pipelineOf(HH, BH, LH);
        const rH = this.pipelineIdNow(HH, BH, !0, LH),
          SH = this.pipelines.get(rH);
        if (SH) return SH;
        const hH = this.pipelineOf(HH, BH, LH);
        return hH && void 0 === SH && this.startPipeline(rH, HH, {
          ...this.programKey(HH, BH),
          resting: AH
        }, LH), hH
      }
      pipelineOf(HH, BH, LH) {
        const AH = this.pipelineIdNow(HH, BH, !1, LH),
          rH = this.pipelines.get(AH);
        return void 0 !== rH ? rH : (this.startPipeline(AH, HH, this.programKey(HH, BH), LH), null)
      }
      pipelineIdNow(HH, BH, LH, AH) {
        const {
          lighting: rH,
          dirLightCount: SH
        } = this, {
          transparencyMode: hH,
          backFaceCulling: tH
        } = HH.model, zH = this.packVariant(HH, this.Cu), CH = (BH ? 2 : 0) + (LH ? 1 : 0), EH = HH.pipelineIds[CH];
        if (null !== EH && EH.lighting === rH && EH.dirLightCount === SH && EH.packVariant === zH && EH.transparencyMode === hH && EH.cull === tH && EH.atlasCount === HH.atlasCount && EH.o9 === HH.o9 && EH.atlasLayers === HH.atlasLayers && EH.colorFormat === AH._colorFormat && EH.depthStencilFormat === AH._depthStencilFormat && EH.sampleCount === AH._sampleCount) return EH.id;
        const XH = this.programKey(HH, BH),
          GH = this.pipelineId(HH, LH ? {
            ...XH,
            resting: LH
          } : XH, AH);
        return HH.pipelineIds[CH] = {
          id: GH,
          lighting: rH,
          dirLightCount: SH,
          packVariant: zH,
          transparencyMode: hH,
          cull: tH,
          atlasCount: HH.atlasCount,
          o9: HH.o9,
          atlasLayers: HH.atlasLayers,
          colorFormat: AH._colorFormat,
          depthStencilFormat: AH._depthStencilFormat,
          sampleCount: AH._sampleCount
        }, GH
      }
      pipelineId(HH, BH, LH) {
        return Bz(BH, this.isBlended(HH), HH.model.backFaceCulling, LH)
      }
      pipelineBuild(HH, BH, LH) {
        var AH;
        const rH = this.pipelineId(HH, BH, LH);
        return null !== (AH = this.builds.get(rH)) && void 0 !== AH ? AH : this.startPipeline(rH, HH, BH, LH)
      }
      startPipeline(HH, BH, LH, AH) {
        var rH;
        this.pipelines.set(HH, null);
        const SH = pA(LH),
          hH = this.isBlended(BH),
          tH = this.shadowMask && AH._depthStencilFormat ? function(HH, BH, LH, AH) {
            if (void 0 === HH.packVariant || HH.liquid || BH) return "none";
            const rH = (0, iB.c)(HH.packVariant);
            return null === rH || void 0 === rH || !rH.sunShadow || !SA(rH, LH) || rH.discards || HH.alphaTest && mA(HH.packVariant) ? "none" : AH ? "edge" : "plain"
          }(LH, hH, !!this.sunShadow, AH._sampleCount > 1) : "none";
        let zH;
        try {
          zH = yA(LH, !!this.sunShadow, tH)
        } catch (WH) {
          if (!lA(LH)) throw WH;
          return this.failedPackBuild(HH, LH, SH, WH)
        }
        const CH = this.shaderModule(zH, SH),
          EH = [];
        LH.packed || (EH.push(function(HH, BH) {
          const LH = [{
            shaderLocation: Jt.position,
            offset: aB.g.TH,
            format: "float32x3"
          }, {
            shaderLocation: Jt.normal,
            offset: aB.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Jt.color,
            offset: aB.g.colorOffset,
            format: "unorm8x4"
          }];
          return HH && LH.push({
            shaderLocation: Jt.uv,
            offset: aB.g.uvOffset,
            format: "float32x2"
          }), BH && LH.push({
            shaderLocation: Jt.blockFlagWords,
            offset: aB.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: aB.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: LH
          }
        }("none" !== LH.texture, lA(LH))), LH.lighting && EH.push(pt));
        const XH = BH.model.backFaceCulling,
          GH = {
            label: SH,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, BH.bindGroupLayout, ...dS(this.device, LH, !!this.sunShadow, "none" !== tH)]
            }),
            vertex: {
              module: CH,
              entryPoint: "mainVertex",
              buffers: EH
            },
            fragment: xB({
              module: CH,
              entryPoint: "mainFragment"
            }, AH, hH ? yt : null),
            depthStencil: AH._depthStencilFormat ? {
              format: AH._depthStencilFormat,
              depthCompare: null !== (rH = AH._depthCompare) && void 0 !== rH ? rH : OB,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: AH._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: XH ? "back" : "none"
            }
          },
          YH = LH.resting ? 0 : 1;
        this.compiling += YH;
        const uH = "none" === tH ? this.device.createRenderPipelineAsync(GH) : this.startMaskPipelines(CH, GH, "edge" === tH);
        uH.then((BH => {
          this.compiling -= YH, this.pipelines.set(HH, BH)
        }), (HH => {
          this.compiling -= YH, console.error(`Lite terrain pipeline ${SH} failed`, HH), jt(this.device, LH, SH, CH, HH)
        }));
        const QH = {
          name: SH,
          module: CH,
          built: uH
        };
        return this.builds.set(HH, QH), QH
      }
      startMaskPipelines(HH, BH, LH) {
        const AH = BH.depthStencil,
          rH = this.device.createRenderPipelineAsync(LH ? BH : {
            ...BH,
            depthStencil: {
              ...AH,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          SH = this.device.createRenderPipelineAsync({
            ...BH,
            label: `${BH.label}-prepass`,
            fragment: {
              module: HH,
              entryPoint: "prepassFragment",
              targets: [{
                format: It
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([rH, SH]).then((HH => {
          let [BH, LH] = HH;
          return this.prepassOf.set(BH, LH), this.maskPipelines++, BH
        }))
      }
      failedPackBuild(HH, BH, LH, AH) {
        console.error(`Lite terrain pipeline ${LH} failed`, AH), jt(this.device, BH, LH, null, AH);
        const rH = Promise.reject(AH);
        rH.catch((() => {}));
        const SH = {
          name: LH,
          module: null,
          built: rH
        };
        return this.builds.set(HH, SH), SH
      }
      checkShaderPack(HH) {
        return gt(HH, {
          device: this.device,
          target: this.target,
          material: HH => this.materialFor(HH),
          programKey: (HH, BH, LH) => this.programKey(HH, BH, LH),
          pipelineBuild: (HH, BH, LH) => this.pipelineBuild(HH, BH, LH)
        })
      }
      createBinding(HH, BH, LH) {
        return this.target = BH, {
          renderable: HH,
          pipeline: oB(this.device, BH),
          draw: HH => {
            this.geometry.setDrawing(!0);
            try {
              return LH ? this.drawTransparent(HH, BH) : this.drawOpaque(HH, BH)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(HH, BH) {
        var LH, AH, rH, SH;
        const {
          bG: hH
        } = HH;
        this.lighting = HH.KQ;
        const tH = (0, Mt.w)(BH);
        this.dirLightCount = Math.min(tH, 4), this.Cu = null !== (LH = hH.Cu) && void 0 !== LH ? LH : null, tH > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(HH, BH), this.animateMaterials(BH.animTick);
        const zH = hH.DG,
          CH = zH[0] !== this.originOffset[0] || zH[1] !== this.originOffset[1] || zH[2] !== this.originOffset[2];
        CH && (this.originOffset[0] = zH[0], this.originOffset[1] = zH[1], this.originOffset[2] = zH[2]);
        const EH = BH.eye;
        this.eye[0] = EH[0], this.eye[1] = EH[1], this.eye[2] = EH[2], this.writeShaderPackInputs();
        const XH = BH.projectionMatrix,
          GH = 0 === XH[15];
        let YH = 0;
        (CH || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: uH
        } = this;
        IB(this.transparentRenderable._worldCenter, BH, kB), this.resetBatches(GH), this.transparent.length = 0, this.unlit.length = 0;
        const QH = hH.cX.vX,
          WH = QH / 2 * Math.sqrt(3);
        let MH = 0;
        const xH = !!this.Cu && kA(this.Cu.defineFor("liquid"));
        let vH = !1;
        const PH = null !== (AH = null === (rH = hH.vU) || void 0 === rH ? void 0 : rH.visibility) && void 0 !== AH ? AH : null,
          TH = this.visCull && GH && 0 === this.compiling && null !== PH && hH.cX.brH[0] >= this.visCullMinDistance ? this.target : null,
          UH = this.visPassable,
          VH = this.visCandidates,
          OH = this.visCandidateBatches;
        UH.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let bH = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let kH = 0;
        const mH = (HH, LH) => {
          if (!LH) return this.transparent.push(HH), void(kH += 2 * HH.faceCount);
          if (null !== HH.faceGroups && LH.faceCull) {
            if (0 === YH && (YH = (0, Ft.d)(XH, BH.renderWidth, BH.renderHeight), YH !== this.faceFocalPx && (this.faceFocalPx = YH, uH = ++this.faceEpoch)), HH.faceEpoch !== uH) {
              HH.faceEpoch = uH;
              const BH = Math.sqrt(HH.distance) + WH,
                LH = (0, Ft.i)(HH.planePX, HH.planeNX, HH.planePY, HH.planeNY, HH.planePZ, HH.planeNZ, this.eye[0] - (HH.origin[0] - this.originOffset[0]), this.eye[1] - (HH.origin[1] - this.originOffset[1]), this.eye[2] - (HH.origin[2] - this.originOffset[2]), (0, Ft.h)(BH, YH));
              LH !== HH.faceMask && this.chooseFaceRanges(HH, HH.faceGroups, LH)
            }
            if (0 === HH.rangeCount) return
          } else - 1 !== HH.faceMask && this.drawWhole(HH);
          LH.meshes.push(HH), kH += 2 * ((HH.rangeCount > 0 ? HH.count0 : 0) + (HH.rangeCount > 1 ? HH.count1 : 0))
        };
        for (const IH of this.chunks.values()) {
          CH && this.writeSlot(IH);
          const HH = IH.mesh.visibility;
          HH !== IH.visibility && (IH.visibility = HH, this.slots.setVisibility(IH.slot, HH));
          const {
            material: LH
          } = IH;
          this.geometry.lost(IH) && performance.now() >= IH.lostRetryAt && this.remeshLost(hH, IH);
          const AH = !(null === LH || void 0 === LH || !LH.bindGroup) && this.geometry.backed(IH),
            rH = AH && this.lighting && !IH.vertices.page.twin;
          if (TH && (Number.isNaN(IH.key) && (IH.ci = Math.floor(IH.origin[0] / QH), IH.cj = Math.floor(IH.origin[1] / QH), IH.ck = Math.floor(IH.origin[2] / QH), IH.key = (0, wt.e)(IH.ci, IH.cj, IH.ck)), (!AH || HH < 1 || rH || !this.batchDraws(LH, IH.packed, TH)) && this.visSeeThrough(IH, TH) && UH.add(IH.key)), !AH) continue;
          rH || (IH.lostRemeshes = 0);
          const SH = IH.origin[0] - this.originOffset[0],
            tH = IH.origin[1] - this.originOffset[1],
            zH = IH.origin[2] - this.originOffset[2];
          if (!(0, St.e)(BH.frustum, SH, tH, zH, QH)) continue;
          const EH = SH + QH / 2 - this.eye[0],
            XH = tH + QH / 2 - this.eye[1],
            YH = zH + QH / 2 - this.eye[2];
          if (IH.distance = EH * EH + XH * XH + YH * YH, this.lighting && !IH.lit && (MH = Math.max(MH, IH.vertexCount), this.unlit.push(IH)), rH) continue;
          const uH = this.isBlended(LH) ? null : this.batchFor(LH, IH.packed, IH.vertices.page, 1 === HH, GH);
          TH ? (VH[bH] = IH, OH[bH++] = uH) : mH(IH, uH)
        }
        const oH = TH ? this.sweepVisibility(HH, BH, PH) : null;
        null === (SH = (0, eS.A)(hH)) || void 0 === SH || SH.update(BH.frustum, this.originOffset, QH, oH);
        for (let IH = 0; IH < bH; IH++) {
          const HH = VH[IH];
          !oH || oH.isDrawn(HH.ci, HH.cj, HH.ck) ? mH(HH, OH[IH]) : (this.visCulledParts++, this.visCulledTriangles += 2 * HH.faceCount)
        }
        for (const IH of this.transparent) vH ||= xH && IH.material.liquid && !IH.material.customRenderMat;
        this.submittedTriangles = kH, oH && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(HH, BH, oH)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(vH) : vH && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && MH > 0 && this.geometry.lightFullSky(this.unlit, MH);
        for (const IH of this.opaqueBatches) this.chunkSorter.sort(IH.meshes, 1) || IH.meshes.sort(Lz);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Az)
      }
      sweepVisibility(HH, BH, LH) {
        const {
          cX: AH
        } = HH.bG, rH = AH.vX, SH = this.visPassable, hH = this.eye[0] + this.originOffset[0], tH = this.eye[1] + this.originOffset[1], zH = this.eye[2] + this.originOffset[2];
        if (!LH.eyeClear(hH, tH, zH, BH.near, BH.projectionMatrix, AH)) return null;
        const [CH, EH] = AH.brH, XH = LH.update(hH, tH, zH, rH, CH, EH, SH);
        return this.visSweeps = LH.sweeps, XH ? LH : null
      }
      visSeeThrough(HH, BH) {
        const {
          material: LH
        } = HH;
        return (!LH || !this.isBlended(LH)) && (HH.mesh.visibility < 1 || !(null !== LH && void 0 !== LH && LH.bindGroup) || HH.faceCount > 0 && (!this.geometry.backed(HH) || this.lighting && !HH.vertices.page.twin) || !this.batchDraws(LH, HH.packed, BH))
      }
      batchDraws(HH, BH, LH) {
        var AH;
        const rH = BH ? 2 : 0;
        if (HH === this.visDrawsMaterial && function(HH, BH) {
            return 0 !== (HH & 1 << BH)
          }(this.visDrawsBits, rH)) return 0 !== (this.visDrawsBits & 2 << rH);
        let SH = null !== (AH = this.visBatchDraws.get(HH)) && void 0 !== AH ? AH : 0;
        if (!(SH & 1 << rH)) {
          SH |= 1 << rH | (!!HH.bindGroupLayout && this.canDraw(HH, BH) && !!this.pipelines.get(this.pipelineIdNow(HH, BH, !1, LH)) ? 2 << rH : 0), this.visBatchDraws.set(HH, SH)
        }
        return this.visDrawsMaterial = HH, this.visDrawsBits = SH, 0 !== (SH & 2 << rH)
      }
      runVisCheck(HH, BH, LH) {
        const {
          bG: AH
        } = HH, {
          cX: rH
        } = AH, SH = rH.vX, hH = new Set;
        for (const YH of this.chunks.values()) hH.add(YH.key);
        const tH = Fr.Matrix.FromArray(BH.viewProjectionMatrix).invert(),
          [zH, CH, EH] = this.originOffset,
          XH = new Fr.lu,
          GH = function(HH, BH, LH, AH) {
            const rH = new Set;
            for (let SH = 0; SH < 27; SH++)
              for (let hH = 0; hH < 48; hH++) {
                const tH = LH((hH + .5) / 48 * 2 - 1, (SH + .5) / 27 * 2 - 1);
                Zt(HH, BH, [tH[0] - BH[0], tH[1] - BH[1], tH[2] - BH[2]], AH, rH)
              }
            return rH
          }({
            Ip: (HH, BH, LH) => rH.Ip(HH, BH, LH),
            occluders: LH.occluders,
            opaque: LH.opaque,
            xX: SH,
            isDrawn: (HH, BH, AH) => LH.isDrawn(HH, BH, AH),
            hasParts: (HH, BH, LH) => hH.has((0, wt.e)(HH, BH, LH))
          }, [this.eye[0] + zH, this.eye[1] + CH, this.eye[2] + EH], ((HH, BH) => (Fr.lu.TransformCoordinatesFromFloatsToRef(HH, BH, .5, tH, XH), [XH.x + zH, XH.y + CH, XH.z + EH])), (rH.brH[0] + 1) * SH);
        this.visViolations = GH.size;
        for (const YH of GH) this.warnOnce(`vis:${YH}`, `Lite terrain cave culling skipped chunk ${YH}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var HH;
        null !== (HH = this.Cu) && void 0 !== HH && HH.isRunning() && (this.shaderPackInputs ??= new aS(this.device, this.Cu.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Cu, this.eye, this.lighting))
      }
      bindShaderPackInputs(HH, BH, LH) {
        var AH, rH, SH, hH;
        let tH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zH = this.packVariant(BH, LH);
        if (void 0 === zH) return;
        this.shaderPackInputs || (this.shaderPackInputs = new aS(this.device, LH.textureLayers(), this.sunShadow), this.shaderPackInputs.write(LH, this.eye, this.lighting));
        const CH = kA(zH) ? null !== (AH = null === (rH = this.sceneDepth) || void 0 === rH ? void 0 : rH.view) && void 0 !== AH ? AH : this.standIn() : null,
          EH = tH ? null !== (SH = null === (hH = this.shadowMask) || void 0 === hH ? void 0 : hH.view) && void 0 !== SH ? SH : this.standIn() : null;
        this.shaderPackInputs.bind(HH, CH, ZS(zH, !!this.sunShadow), EH)
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
        var HH, BH;
        return null !== (HH = null === (BH = this.shaderPackInputs) || void 0 === BH ? void 0 : BH.bindGroupFor(null, !0)) && void 0 !== HH ? HH : null
      }
      resetBatches(HH) {
        const BH = this.opaqueBatches;
        let LH = 0;
        for (const AH of BH) AH.meshes.length > 0 && (AH.meshes.length = 0, AH.faceCull = this.batchFaceCull(AH.material, HH), BH[LH++] = AH);
        BH.length = LH
      }
      orderBatches() {
        const HH = this.opaqueBatches;
        for (let BH = 0; BH < HH.length; BH++) {
          const LH = HH[BH];
          LH.group = BH;
          for (let AH = 0; AH < BH; AH++) {
            const BH = HH[AH];
            if (BH.material === LH.material && BH.packed === LH.packed) {
              LH.group = BH.group;
              break
            }
          }
          LH.nearest = LH.meshes.length > 0 ? LH.meshes[0].distance : 1 / 0
        }
        HH.sort(dt)
      }
      batchFor(HH, BH, LH, AH, rH) {
        for (const hH of this.opaqueBatches)
          if (hH.material === HH && hH.packed === BH && hH.page === LH && hH.resting === AH) return hH;
        const SH = {
          material: HH,
          packed: BH,
          page: LH,
          resting: AH,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(HH, rH)
        };
        return this.opaqueBatches.push(SH), SH
      }
      batchFaceCull(HH, BH) {
        return !(!BH || !(0, nt.v)(HH.model)) && (!this.Cu || ! function(HH) {
          var BH;
          return !(null === (BH = (0, iB.c)(HH)) || void 0 === BH || !BH.movesVertices)
        }(this.packVariant(HH, this.Cu)))
      }
      writeFrameUniforms(HH, BH) {
        const LH = this.frameUniforms,
          AH = KA;
        if ((0, Mt.A)(HH, LH), LH[AH.fogInfos] = BH.fogEnabled ? BH.fogMode : 0, LH[AH.fogInfos + 1] = BH.fogStart, LH[AH.fogInfos + 2] = BH.fogEnd, LH[AH.fogInfos + 3] = BH.fogDensity, LH.set(BH.fogColour, AH.fogColour), LH[AH.outputHeight] = BH.renderHeight, LH.set(BH.ambientColour, AH.sceneAmbient), (0, Mt.t)(BH, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const BH = (0, xt.g)(HH.HQ, HH.Ou, HH.ku);
          for (let HH = 0; HH < 4; HH++) LH[AH.aoLevels + HH] = BH[HH] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, LH)
      }
      animateMaterials(HH) {
        const BH = eA.anim;
        for (const LH of this.materials.values()) LH.animated && (LH.uniformData[BH] = HH, this.device.queue.writeBuffer(LH.uniformBuffer, 4 * BH, LH.uniformData, BH, 1))
      }
      canDraw(HH, BH) {
        return !("atlas" === HH.texture && !BH) || (this.warnOnce(`stride:${HH.id}`, `Lite terrain: material "${HH.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(HH, BH) {
        let LH = 0;
        HH.setBindGroup(1, this.frameBindGroup);
        for (const AH of this.opaqueBatches) {
          if (!AH.meshes.length || !this.canDraw(AH.material, AH.packed)) continue;
          const rH = this.pipelineFor(AH.material, AH.packed, BH, AH.resting);
          rH && (HH.setPipeline(rH), HH.setBindGroup(2, AH.material.bindGroup), this.Cu && this.bindShaderPackInputs(HH, AH.material, this.Cu, this.prepassOf.has(rH)), LH += this.drawBatch(HH, AH))
        }
        return LH
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(HH, BH, LH) {
        const AH = this.target,
          rH = this.Cu;
        if (!AH || !rH || 0 === this.maskPipelines) return 0;
        let SH = 0,
          hH = null;
        this.geometry.setDrawing(!0);
        try {
          for (const tH of this.opaqueBatches) {
            if (!tH.meshes.length || !this.canDraw(tH.material, tH.packed)) continue;
            const zH = this.pipelineFor(tH.material, tH.packed, AH, tH.resting),
              CH = zH && this.prepassOf.get(zH);
            CH && (hH || (hH = HH.beginRenderPass(BH), hH.setBindGroup(0, LH), hH.setBindGroup(1, this.frameBindGroup)), hH.setPipeline(CH), hH.setBindGroup(2, tH.material.bindGroup), this.bindShaderPackInputs(hH, tH.material, rH, !0), SH += this.drawBatch(hH, tH))
          }
        } finally {
          var tH;
          null === (tH = hH) || void 0 === tH || tH.end(), this.geometry.setDrawing(!1)
        }
        return SH
      }
      drawBatch(HH, BH) {
        let LH = 0;
        for (const AH of BH.meshes) {
          const {
            rangeCount: BH
          } = AH;
          BH > 0 && (LH += this.geometry.draw(HH, AH, this.lighting, AH.first0, AH.count0), BH > 1 && (LH += this.geometry.draw(HH, AH, this.lighting, AH.first1, AH.count1)))
        }
        return LH
      }
      drawTransparent(HH, BH) {
        let LH = 0,
          AH = null,
          rH = null;
        HH.setBindGroup(1, this.frameBindGroup);
        for (const SH of this.transparent) {
          const hH = SH.material;
          if (!this.canDraw(hH, SH.packed)) continue;
          const tH = this.pipelineFor(hH, SH.packed, BH);
          tH && (tH !== AH && (HH.setPipeline(tH), AH = tH, this.Cu && this.bindShaderPackInputs(HH, hH, this.Cu)), hH !== rH && (HH.setBindGroup(2, hH.bindGroup), rH = hH), LH += this.geometry.draw(HH, SH, this.lighting))
        }
        return LH
      }
    }

    function Bz(HH, BH, LH, AH) {
      return `${pA(HH)}|${HH.atlasLayers}|${HH.o9}|${BH}|${LH}|${AH._colorFormat}|${AH._depthStencilFormat}|${AH._sampleCount}`
    }

    function Lz(HH, BH) {
      return HH.distance - BH.distance
    }

    function Az(HH, BH) {
      return BH.distance - HH.distance
    }
    class rz {
      constructor() {
        this.left = []
      }
      sort(HH, BH) {
        for (let LH = 0; LH < HH.length; LH++) {
          const BH = HH[LH].distance;
          if (BH - BH !== 0) return !1
        }
        return this.sortRange(HH, 0, HH.length, BH), !0
      }
      sortRange(HH, BH, LH, AH) {
        if (LH - BH <= 16) {
          for (let rH = BH + 1; rH < LH; rH++) {
            const LH = HH[rH],
              SH = AH * LH.distance;
            let hH = rH - 1;
            for (; hH >= BH && AH * HH[hH].distance > SH; hH--) HH[hH + 1] = HH[hH];
            HH[hH + 1] = LH
          }
          return
        }
        const rH = BH + LH >>> 1;
        if (this.sortRange(HH, BH, rH, AH), this.sortRange(HH, rH, LH, AH), AH * HH[rH - 1].distance <= AH * HH[rH].distance) return;
        const {
          left: SH
        } = this, hH = rH - BH;
        for (let EH = 0; EH < hH; EH++) SH[EH] = HH[BH + EH];
        let tH = 0,
          zH = rH,
          CH = BH;
        for (; tH < hH && zH < LH;) HH[CH++] = AH * HH[zH].distance < AH * SH[tH].distance ? HH[zH++] : SH[tH++];
        for (; tH < hH;) HH[CH++] = SH[tH++]
      }
    }
    const Sz = Math.ceil(102);

    function hz(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BH;
      const SH = Math.min(BH, LH),
        hH = new Uint32Array(UL(AH));
      for (let tH = 0; tH < AH; tH++) {
        const BH = Math.floor(tH * SH / AH),
          LH = Math.max(BH + 1, Math.floor((tH + 1) * SH / AH));
        for (let zH = 0; zH < AH; zH++) {
          const CH = Math.floor(zH * SH / AH),
            EH = Math.max(CH + 1, Math.floor((zH + 1) * SH / AH));
          let XH = 0;
          for (let AH = BH; AH < LH; AH++)
            for (let BH = CH; BH < EH; BH++) HH[AH * rH + BH] >= Sz && XH++;
          if (2 * XH >= (LH - BH) * (EH - CH)) {
            const HH = zH + AH * tH;
            hH[HH >>> 5] |= 1 << (31 & HH)
          }
        }
      }
      return hH
    }

    function tz(HH) {
      return Math.max(1, Math.min(16, HH))
    }
    class zz {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = HH, this.loadTexture = BH, this.warn = LH, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(HH, BH) {
        return (HH.iZ !== this.builtVersion || this.blockCaster.length !== BH) && (this.build(HH, BH), !0)
      }
      build(HH, BH) {
        this.builtVersion = HH.iZ;
        const LH = new Uint16Array(BH),
          AH = new Map;
        for (let rH = 1; rH < BH; rH++) {
          const BH = this.classify(HH, rH, AH);
          if (null === BH || BH === ML) {
            LH[rH] = null === BH ? 0 : ML;
            continue
          }
          let SH = this.byKey.get(BH.key);
          void 0 === SH && (SH = this.allocate(BH), this.byKey.set(BH.key, SH)), LH[rH] = SH
        }
        this.blockCaster = LH, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(HH, BH) {
        const LH = HH.hHH[BH];
        if ("function" !== typeof LH) return LH;
        try {
          return LH()
        } catch (AH) {
          return this.warnOnce(`Sun shadows: no caster option for block ${BH}: ${AH instanceof Error?AH.message:String(AH)}`), null
        }
      }
      classify(HH, BH, LH) {
        const AH = this.option(HH, BH);
        if ("none" === AH) return null;
        if (AH && AH.planes.length > 0) {
          const HH = AH.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(HH)}`,
            planes: HH
          }
        }
        if (HH.TY[BH]) return null;
        const rH = HH.VY[BH] ? HH.LJ(BH) : null;
        if (rH && rH.length >= 6) {
          const HH = function(HH) {
            const BH = new Uint32Array(16);
            for (let LH = 0; LH + 6 <= HH.length; LH += 6) {
              const AH = [0, 1, 2].map((BH => Math.max(0, Math.ceil(8 * HH[LH + BH] - .5)))),
                rH = [0, 1, 2].map((BH => Math.min(7, Math.floor(8 * HH[LH + BH + 3] - .5))));
              for (let HH = AH[2]; HH <= rH[2]; HH++)
                for (let LH = AH[1]; LH <= rH[1]; LH++)
                  for (let SH = AH[0]; SH <= rH[0]; SH++) {
                    const AH = SH + 8 * (LH + 8 * HH);
                    BH[AH >>> 5] |= 1 << (31 & AH)
                  }
            }
            return BH
          }(rH);
          return function(HH) {
            return HH.every((HH => 4294967295 === HH))
          }(HH) ? ML : HH.every((HH => 0 === HH)) ? null : {
            kind: "shape",
            key: `shape:${HH.join(",")}`,
            mask: HH
          }
        }
        if (HH.JV[BH] || !HH.BQ[BH]) return null;
        const SH = [0, 1, 2, 3, 4, 5].map((AH => {
          const rH = HH.LQ[6 * BH + AH];
          let SH = LH.get(rH);
          return void 0 === SH && (SH = function(HH) {
            if (!HH || HH.GQ) return null;
            const {
              W9: BH,
              o9: LH,
              R7: AH
            } = HH;
            if (!BH || !LH || !(LH > 0) || void 0 === AH || !(AH >= 0)) return null;
            const rH = BH[0],
              SH = LH * LH * 4;
            if (!rH || rH.byteLength < SH) return null;
            const hH = Math.floor(rH.byteLength / SH),
              tH = BH[Math.floor(AH / hH)];
            if (!tH) return null;
            const zH = new Uint8Array(tH.buffer, tH.byteOffset, tH.byteLength),
              CH = AH % hH * SH;
            if (CH + SH > zH.length) return null;
            const EH = new Uint8Array(LH * LH);
            let XH = !1;
            for (let GH = 0; GH < EH.length; GH++) EH[GH] = zH[CH + 4 * GH + 3], XH ||= EH[GH] < Sz;
            return XH ? {
              alpha: EH,
              width: LH
            } : null
          }(HH.XQ(rH)), LH.set(rH, SH)), SH
        }));
        if (SH.every((HH => null === HH))) return ML;
        const hH = tz(Math.max(...SH.map((HH => {
            var BH;
            return null !== (BH = null === HH || void 0 === HH ? void 0 : HH.width) && void 0 !== BH ? BH : 1
          })))),
          tH = new Uint32Array(UL(hH)).fill(4294967295),
          zH = SH.map((HH => null === HH ? tH : hz(HH.alpha, HH.width, HH.width, hH)));
        return {
          kind: "cutout",
          key: `cutout:${hH}:${zH.map((HH=>HH.join(","))).join("|")}`,
          size: hH,
          faces: zH
        }
      }
      allocate(HH) {
        if (this.nextCaster >= VL) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const BH = this.nextCaster++;
        if (this.writeCaster(BH, xL, 0, 0, 0), "shape" === HH.kind) {
          const LH = this.allocateMask(HH.mask.length);
          LH >= 0 && (this.sink(LH, HH.mask), this.writeCaster(BH, vL, LH, 0, 8))
        } else if ("cutout" === HH.kind) {
          const LH = UL(HH.size),
            AH = this.allocateMask(6 * LH);
          if (AH >= 0) {
            const rH = new Uint32Array(6 * LH);
            HH.faces.forEach(((HH, BH) => {
              rH.set(HH, BH * LH)
            })), this.sink(AH, rH), this.writeCaster(BH, TL, AH, 0, HH.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(BH, HH.planes).finally((() => {
          this.planesLoading--
        })));
        return BH
      }
      async loadPlanes(HH, BH) {
        const LH = await Promise.all(BH.map((HH => this.texture(HH.texture))));
        if (LH.some((HH => null === HH))) return;
        const AH = LH,
          rH = tz(Math.max(...AH.map((HH => Math.min(HH.width, HH.height))))),
          SH = UL(rH),
          hH = this.allocateMask(BH.length * (4 + SH));
        if (hH < 0) return;
        const tH = new Uint32Array(BH.length * (4 + SH)),
          zH = 4 * BH.length;
        BH.forEach(((HH, BH) => {
          const LH = hH + zH + BH * SH;
          tH.set(function(HH, BH) {
            const [LH, AH] = HH.tangent, rH = Math.hypot(LH, AH) || 1, SH = LH / rH, hH = AH / rH, tH = HH.centre[0] * hH - HH.centre[1] * SH, zH = new Uint32Array(4);
            return new Float32Array(zH.buffer, 0, 3).set([SH, hH, tH]), zH[3] = BH, zH
          }(HH, LH), 4 * BH), tH.set(hz(AH[BH].alpha, AH[BH].width, AH[BH].height, rH), zH + BH * SH)
        })), this.sink(hH, tH), this.writeCaster(HH, PL, hH, BH.length, rH)
      }
      texture(HH) {
        let BH = this.textures.get(HH);
        return BH || (BH = this.loadTexture(HH).catch((BH => (this.warn(`Sun shadows: no mask for ${HH}: ${BH instanceof Error?BH.message:String(BH)}`), null))), this.textures.set(HH, BH)), BH
      }
      allocateMask(HH) {
        if (this.nextMaskWord + HH > OL) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const BH = 32768 + this.nextMaskWord;
        return this.nextMaskWord += HH, BH
      }
      writeCaster(HH, BH, LH, AH, rH) {
        this.sink(0 + 4 * HH, Uint32Array.of(BH, LH, AH, rH))
      }
      warnOnce(HH) {
        this.warned.has(HH) || (this.warned.add(HH), this.warn(HH))
      }
    }
    var Cz = LH(3122);

    function Ez(HH) {
      return !HH.uQ && !HH.oV && !HH.Du
    }

    function Xz() {
      return {
        bricks: new Uint32Array(CL),
        cells: new Uint16Array(32768),
        special: new Uint8Array(tL)
      }
    }
    class Gz {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = HH, this.writeVoxels = BH, this.writePool = LH, this.warn = AH, this.eyeChunk = null, this.slotChunk = new Array(BL).fill(null), this.slotVersion = new Float64Array(BL).fill(-1), this.slotPool = new Array(BL).fill(null), this.starved = new Uint8Array(BL), this.queue = [], this.queued = new Uint8Array(BL), this.queueSorted = !0, this.freePool = new Uint32Array(bL), this.freeCount = bL, this.casterTable = null, this.warnedPool = !1, this.scratch = Xz(), this.victimScratch = Xz(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * BL), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let rH = 0; rH < bL; rH++) this.freePool[rH] = 65535 - rH
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return bL - this.freeCount
      }
      chunkAdded(HH) {
        if (null === this.eyeChunk || !this.inRadius(HH.i, HH.j, HH.k)) return;
        const BH = uL(HH.i, HH.j, HH.k);
        this.slotChunk[BH] = HH, this.slotVersion[BH] = -1, this.enqueue(BH)
      }
      update(HH, BH, LH) {
        const AH = this.casters.blockCaster;
        if (AH !== this.casterTable) {
          this.casterTable = AH;
          for (let HH = 0; HH < BL; HH++) this.slotVersion[HH] = -1, this.slotChunk[HH] && this.enqueue(HH)
        }
        const rH = Math.floor(HH[0] / 32),
          SH = Math.floor(HH[1] / 32),
          hH = Math.floor(HH[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== rH || this.eyeChunk[1] !== SH || this.eyeChunk[2] !== hH) && (this.eyeChunk = [rH, SH, hH], this.follow(BH), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let tH = 0; tH < BL; tH++) {
          const HH = this.slotChunk[tH];
          HH && (HH.mV || HH.au !== this.slotVersion[tH]) && this.enqueue(tH)
        }
        this.drain(LH), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(HH, BH) {
        this.records.set(BH, 4 * HH), this.windowTopStale = !0, this.writeVoxels(4 * HH, BH)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const HH = this.records;
        let BH = -1 / 0;
        for (let AH = 0; AH < HH.length; AH += 4) {
          const LH = 255 & HH[AH + 3];
          LH !== rL && LH !== SL || !this.inRadius(HH[AH], HH[AH + 1], HH[AH + 2]) || (BH = Math.max(BH, HH[AH + 1] * pB + (HH[AH + 3] >>> 8)))
        }
        const LH = BH === -1 / 0 ? 1 : BH + XL;
        LH !== this.windowTop[0] && (this.windowTop[0] = LH, this.writeVoxels(EL, this.windowTop))
      }
      follow(HH) {
        const BH = this.eyeChunk,
          [LH, AH, rH] = yB;
        for (let hH = -rH; hH <= rH; hH++)
          for (let rH = -AH; rH <= AH; rH++)
            for (let AH = -LH; AH <= LH; AH++) {
              var SH;
              const LH = BH[0] + AH,
                tH = BH[1] + rH,
                zH = BH[2] + hH,
                CH = uL(LH, tH, zH),
                EH = this.slotChunk[CH];
              if (EH && !EH.mV && EH.i === LH && EH.j === tH && EH.k === zH) continue;
              const XH = null !== (SH = HH(LH, tH, zH)) && void 0 !== SH ? SH : null;
              EH && (EH.i !== LH || EH.j !== tH || EH.k !== zH) && this.slotPool[CH] && (this.release(CH), this.record.fill(0), this.writeRecord(CH, this.record)), this.slotChunk[CH] = XH, this.slotVersion[CH] = -1, (XH || EH) && this.enqueue(CH)
            }
      }
      requeueStarved() {
        for (let HH = 0; HH < BL; HH++) this.starved[HH] && this.slotChunk[HH] && this.enqueue(HH)
      }
      enqueue(HH) {
        this.queued[HH] || (this.queued[HH] = 1, this.queue.push(HH), this.queueSorted = !1)
      }
      drain(HH) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const HH = new Map;
          for (const BH of this.queue) HH.set(BH, this.slotDistance(BH));
          this.queue.sort(((BH, LH) => HH.get(LH) - HH.get(BH))), this.queueSorted = !0
        }
        const BH = performance.now();
        let LH = 0;
        const AH = [];
        for (; this.queue.length > 0 && (0 === LH || performance.now() - BH < HH);) {
          const HH = this.queue.pop(),
            BH = this.slotChunk[HH];
          !BH || BH.mV || Ez(BH) ? (this.queued[HH] = 0, this.encodeSlot(HH), LH++) : AH.push(HH)
        }
        for (let rH = AH.length - 1; rH >= 0; rH--) this.queue.push(AH[rH])
      }
      slotDistance(HH) {
        const BH = this.slotChunk[HH],
          LH = this.eyeChunk;
        return BH ? Math.max(Math.abs(BH.i - LH[0]), Math.abs(BH.j - LH[1]), Math.abs(BH.k - LH[2])) : 0
      }
      inRadius(HH, BH, LH) {
        const AH = this.eyeChunk,
          [rH, SH, hH] = yB;
        return Math.abs(HH - AH[0]) <= rH && Math.abs(BH - AH[1]) <= SH && Math.abs(LH - AH[2]) <= hH
      }
      release(HH) {
        const BH = this.slotPool[HH];
        if (BH) {
          for (let HH = BH.length - 1; HH >= 0; HH--) this.freePool[this.freeCount++] = BH[HH];
          this.slotPool[HH] = null
        }
      }
      encodeSlot(HH) {
        var BH, LH, AH, rH, SH;
        let hH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          tH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const zH = null !== (BH = null === (LH = this.slotPool[HH]) || void 0 === LH ? void 0 : LH.length) && void 0 !== BH ? BH : 0;
        this.release(HH), this.starved[HH] = 0;
        const CH = this.slotChunk[HH],
          EH = this.record;
        if (!CH || CH.mV || !CH.aG) return this.slotChunk[HH] = null, this.slotVersion[HH] = -1, EH.fill(0), this.writeRecord(HH, EH), void(zH > 0 && this.requeueStarved());
        this.slotVersion[HH] = CH.au;
        const XH = this.encodeBricks(CH, HH, hH, tH);
        EH[0] = CH.i, EH[1] = CH.j, EH[2] = CH.k, EH[3] = XH, this.writeRecord(HH, EH), null === (AH = this.encoded) || void 0 === AH || AH.call(this, CH), tH && (null !== (rH = null === (SH = this.slotPool[HH]) || void 0 === SH ? void 0 : SH.length) && void 0 !== rH ? rH : 0) < zH && this.requeueStarved()
      }
      encodeBricks(HH, BH, LH, AH) {
        if (HH.uu) return AL;
        const rH = this.casters.blockCaster,
          {
            data: SH,
            stride: hH,
            offset: tH
          } = HH.aG,
          [zH, CH, EH] = hH,
          XH = pB,
          {
            bricks: GH,
            cells: YH,
            special: uH
          } = LH;
        GH.fill(0), uH.fill(0);
        let QH = 0,
          WH = 0,
          MH = 0;
        for (let xH = 0; xH < XH; xH++) {
          const BH = xH >> 2,
            LH = 3 & xH,
            AH = HH.jY[xH],
            hH = AH === Cz.f ? -1 : AH < rH.length ? rH[AH] : 0;
          if (0 !== hH)
            for (let HH = 0; HH < XH; HH++) {
              const AH = HH >> 2,
                vH = 3 & HH;
              let PH = tH + HH * zH + xH * CH;
              for (let HH = 0; HH < XH; HH++, PH += EH) {
                let tH = hH;
                if (tH < 0) {
                  const HH = SH[PH];
                  if (tH = HH < rH.length ? rH[HH] : 0, 0 === tH) continue
                }
                const zH = QL(AH, BH, HH >> 2),
                  CH = WL(vH, LH, 3 & HH);
                GH[3 * zH + (CH >>> 5)] |= 1 << (31 & CH), YH[zH * hL + CH] = tH, QH++, MH = xH, tH === ML ? WH++ : uH[zH] = 1
              }
            }
        }
        return 0 === QH ? AL : 32768 === WH ? rL | MH << 8 : (this.writePoolEntries(BH, LH, AH), this.writeVoxels(zL + BH * CL, GH), SL | MH << 8)
      }
      writePoolEntries(HH, BH, LH) {
        const {
          bricks: AH,
          cells: rH,
          special: SH
        } = BH, hH = this.entry;
        let tH = 0;
        for (let EH = 0; EH < tL; EH++) tH += SH[EH];
        if (0 === tH) return;
        LH && this.freeCount < tH && this.evictBeyond(HH, tH);
        const zH = new Uint32Array(LH ? Math.min(tH, this.freeCount) : 0);
        let CH = 0;
        for (let EH = 0; EH < tL; EH++) {
          if (!SH[EH]) continue;
          const LH = 3 * EH;
          if (CH === zH.length) {
            this.dropSpecials(BH, EH), this.starved[HH] = 1;
            continue
          }
          const tH = this.freePool[--this.freeCount];
          zH[CH++] = tH;
          for (let HH = 0; HH < hL; HH++) {
            const BH = AH[LH + (HH >>> 5)] >>> (31 & HH) & 1 ? rH[EH * hL + HH] : 0;
            1 & HH ? hH[HH >> 1] |= BH << 16 : hH[HH >> 1] = BH
          }
          AH[LH + 2] = tH + 1, this.writePool(kL + 32 * tH, hH)
        }
        zH.length > 0 && (this.slotPool[HH] = zH)
      }
      evictBeyond(HH, BH) {
        const LH = this.slotDistance(HH),
          AH = [];
        for (let rH = 0; rH < BL; rH++) rH !== HH && this.slotPool[rH] && this.slotDistance(rH) > LH && AH.push(rH);
        AH.sort(((HH, BH) => this.slotDistance(BH) - this.slotDistance(HH)));
        for (const rH of AH) {
          if (this.freeCount >= BH) return;
          const HH = this.slotChunk[rH];
          HH && !HH.mV && HH.aG && (HH.au === this.slotVersion[rH] || Ez(HH)) && this.encodeSlot(rH, this.victimScratch, !1)
        }
      }
      dropSpecials(HH, BH) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const LH = 3 * BH;
        for (let AH = 0; AH < hL; AH++) HH.cells[BH * hL + AH] !== ML && (HH.bricks[LH + (AH >>> 5)] &= ~(1 << (31 & AH)))
      }
    }
    var Yz = LH(38251);
    class uz {
      constructor(HH) {
        this.device = HH, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new NL, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.cX = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = HH.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = HH.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(HH, BH, LH) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: AH
        } = this;
        AH.PX(HH, BH), LH.forEachSunShadowCaster((HH => {
          this.add(HH)
        })), AH.finish();
        const rH = 0 === AH.parts;
        if (rH && this.uploadedEmpty) return;
        this.uploadedEmpty = rH;
        const {
          queue: SH
        } = this.device, {
          words: hH
        } = AH;
        SH.writeBuffer(this.frameBuffer, 0, hH, 0, 16385), AH.refs > 0 && SH.writeBuffer(this.frameBuffer, 65540, hH, fL, AH.refs), rH || SH.writeBuffer(this.frameBuffer, 327684, hH, lL, AH.parts * IL)
      }
      add(HH) {
        const BH = this.gridFor(HH);
        if (!BH) return;
        const {
          frame: LH
        } = this, {
          cX: AH,
          worldAt: rH,
          instances: SH,
          instanceCount: hH,
          thin: tH
        } = HH;
        if (SH)
          for (let zH = 0; zH < hH; zH++) tH ? (jL(SH, 16 * zH, AH, rH, this.cX), LH.add(BH, this.cX)) : LH.add(BH, SH, 16 * zH);
        else LH.add(BH, AH, rH)
      }
      gridFor(HH) {
        let {
          geometry: BH,
          indexed: LH,
          first: AH,
          count: rH,
          skip: SH
        } = HH, hH = this.grids.get(BH);
        hH || (hH = new Map, this.grids.set(BH, hH));
        const tH = `${LH?AH:-1-AH}:${rH}:${null!==SH&&void 0!==SH?SH:""}`;
        let zH = hH.get(tH);
        if (void 0 !== zH || this.gridsFull) return zH;
        const CH = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = CH + 2;
        else if (CH > this.bakeDeadline) return;
        return zH = this.bake(BH, LH, AH, rH, SH), void 0 !== zH && hH.set(tH, zH), zH
      }
      bake(HH, BH, LH, AH, rH) {
        const SH = HH.vertexAttributes.find((HH => "position" === HH.kind)),
          hH = SH ? function(HH, BH, LH, AH) {
            let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const SH = HH => BH ? BH[LH + HH] : LH + HH,
              hH = HH => null !== rH && [0, 1, 2].some((BH => {
                const LH = SH(HH + BH);
                return LH >= rH[0] && LH < rH[1]
              })),
              tH = [1 / 0, 1 / 0, 1 / 0],
              zH = [-1 / 0, -1 / 0, -1 / 0];
            for (let xH = 0; xH + 2 < AH; xH += 3)
              if (!hH(xH))
                for (let BH = 0; BH < 3; BH++) {
                  const LH = SH(xH + BH);
                  for (let BH = 0; BH < 3; BH++) tH[BH] = Math.min(tH[BH], HH[3 * LH + BH]), zH[BH] = Math.max(zH[BH], HH[3 * LH + BH])
                }
            const CH = Math.max(zH[0] - tH[0], zH[1] - tH[1], zH[2] - tH[2]);
            if (!(CH > 0)) return null;
            const EH = CH / 64,
              XH = [0, 0, 0],
              GH = [0, 0, 0],
              YH = [0, 0, 0];
            for (let xH = 0; xH < 3; xH++) XH[xH] = Math.min(65, Math.ceil((zH[xH] - tH[xH]) / EH) + 1), GH[xH] = tH[xH] - EH / 2, YH[xH] = GH[xH] + XH[xH] * EH;
            const uH = new Uint32Array(Math.ceil(XH[0] * XH[1] * XH[2] / 32)),
              QH = new Float64Array(9),
              WH = [0, 0, 0],
              MH = [0, 0, 0];
            for (let xH = 0; xH + 2 < AH; xH += 3)
              if (!hH(xH)) {
                for (let BH = 0; BH < 3; BH++) {
                  const LH = SH(xH + BH);
                  for (let AH = 0; AH < 3; AH++) QH[3 * BH + AH] = HH[3 * LH + AH]
                }
                for (let HH = 0; HH < 3; HH++) {
                  const BH = Math.min(QH[HH], QH[3 + HH], QH[6 + HH]),
                    LH = Math.max(QH[HH], QH[3 + HH], QH[6 + HH]);
                  WH[HH] = Math.max(0, Math.floor((BH - GH[HH]) / EH - 1e-6)), MH[HH] = Math.min(XH[HH] - 1, Math.floor((LH - GH[HH]) / EH + 1e-6))
                }
                for (let HH = WH[2]; HH <= MH[2]; HH++)
                  for (let BH = WH[1]; BH <= MH[1]; BH++)
                    for (let LH = WH[0]; LH <= MH[0]; LH++)
                      if (nL(QH, GH[0] + (LH + .5) * EH, GH[1] + (BH + .5) * EH, GH[2] + (HH + .5) * EH, EH / 2)) {
                        const AH = LH + XH[0] * (BH + XH[1] * HH);
                        uH[AH >>> 5] |= 1 << (31 & AH)
                      }
              } return {
              words: uH,
              lo: GH,
              hi: YH,
              cell: EH,
              dims: XH
            }
          }((0, Yz.l)(SH, HH.vertexCount), BH ? HH.indexData : null, LH, AH, rH) : null;
        if (!hH) return null;
        const {
          words: tH,
          ...zH
        } = hH;
        if (this.gridTop + tH.length > cL) return void(this.gridsFull = !0);
        const CH = this.gridTop;
        return this.gridTop += tH.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * CH, tH), {
          ...zH,
          at: CH
        }
      }
    }
    const Qz = Math.cos(1 * Math.PI / 180);

    function Wz(HH, BH) {
      return HH[0] * BH[0] + HH[1] * BH[1] + HH[2] * BH[2] < Qz
    }
    async function Mz(HH) {
      const {
        pixels: BH,
        width: LH,
        height: AH
      } = await HB(HH), rH = new Uint8Array(LH * AH);
      for (let SH = 0; SH < rH.length; SH++) rH[SH] = BH[4 * SH + 3];
      return {
        width: LH,
        height: AH,
        alpha: rH
      }
    }
    class xz {
      constructor(HH, BH) {
        this.device = HH, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(DL.j), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = HH.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = HH.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * GL,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = HH.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [LH, AH, rH] = DL.m;
        this.volume = HH.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: LH,
            height: AH,
            depthOrArrayLayers: rH
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = HH.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = HH.createBuffer({
          label: "sun-shadow-volume-work",
          size: DL.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = BH ? new uz(HH) : null, this.entityStandIn = BH ? null : HH.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var HH;
        null === (HH = this.stopWindow) || void 0 === HH || HH.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var HH, BH;
        const LH = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || LH.push("Lite sun shadow volume pipeline compiling");
        const AH = null !== (HH = null === (BH = this.casters) || void 0 === BH ? void 0 : BH.planesLoading) && void 0 !== HH ? HH : 0;
        return AH > 0 && LH.push(`${AH} Lite sun shadow plane casters loading their textures`), LH
      }
      entries() {
        var HH, BH, LH, AH;
        const rH = JB.w;
        return [{
          binding: rH.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: rH.aG,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: rH.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: rH.volume,
          resource: this.volumeView
        }, {
          binding: rH.sampler,
          resource: this.volumeSampler
        }, {
          binding: rH.entities,
          resource: {
            buffer: null !== (HH = null === (BH = this.entities) || void 0 === BH ? void 0 : BH.frameBuffer) && void 0 !== HH ? HH : this.entityStandIn
          }
        }, {
          binding: rH.entityGrids,
          resource: {
            buffer: null !== (LH = null === (AH = this.entities) || void 0 === AH ? void 0 : AH.gridBuffer) && void 0 !== LH ? LH : this.entityStandIn
          }
        }]
      }
      prepare(HH, BH, LH) {
        var AH;
        this.entitiesThisFrame = !1;
        const rH = null !== (AH = null === LH || void 0 === LH ? void 0 : LH.sunShadowReach()) && void 0 !== AH ? AH : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!LH || !rH.sunShadow && !rH.airShadow) return void(this.volumeHolds = null);
        if (HH.cX.vX !== pB) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${HH.cX.vX}; everything is lit.`)));
        const SH = this.start(HH);
        this.casters.update(HH.YX, HH.YX.VY.length);
        const hH = HH.DG;
        for (let GH = 0; GH < 3; GH++) this.eye[GH] = BH[GH] + hH[GH];
        const tH = (0, DL.u)(this.eye);
        this.staleNear = tH;
        const zH = HH.cX.WQ;
        SH.update(this.eye, ((HH, BH, LH) => zH.MQ(HH, BH, LH)), 1);
        const CH = (0, DL.q)(LH.QBH()),
          EH = SH.eyeChunk,
          XH = this.uniformInts;
        for (let GH = 0; GH < 3; GH++) XH[GH] = EH[GH], XH[4 + GH] = tH[GH];
        this.entitiesThisFrame = null !== this.entities && rH.sunShadow, this.entitiesThisFrame && gL(this.uniformFloats, 8, BH, CH), null !== this.volumeHolds && (this.castersWritten || Wz(CH, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(tH, CH, EH)
      }
      markStale(HH) {
        const BH = this.staleNear,
          LH = pB,
          AH = [HH.i * LH, HH.j * LH, HH.k * LH];
        for (let SH = 0; SH < 3; SH++)
          if (AH[SH] + LH <= BH[SH] - LH || AH[SH] >= BH[SH] + DL.m[SH] + LH) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const rH = this.stale;
        for (let SH = 0; SH < rH.length; SH += 4)
          if (rH[SH] === HH.i && rH[SH + 1] === HH.j && rH[SH + 2] === HH.k) return void(rH[SH + 3] = this.swept);
        if (16 === rH.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        rH.push(HH.i, HH.j, HH.k, this.swept)
      }
      writeStale() {
        const HH = this.swept,
          BH = this.stale;
        this.staleAll && HH - this.staleAllSwept >= DL.g && (this.staleAll = !1, BH.length = 0);
        let LH = 0;
        for (let rH = 0; rH < BH.length; rH += 4)
          if (HH - BH[rH + 3] < DL.g) {
            for (let HH = 0; HH < 4; HH++) BH[LH + HH] = BH[rH + HH];
            LH += 4
          } BH.length = LH;
        const AH = this.uniformInts;
        AH[3] = this.staleAll ? 5 : LH / 4;
        for (let rH = 0; rH < 4; rH++)
          for (let HH = 0; HH < 3; HH++) AH[16 + 4 * rH + HH] = 4 * rH < LH ? BH[4 * rH + HH] * pB : 0
      }
      writeUniform() {
        const HH = this.uniformInts;
        let BH = this.uniformWritten;
        if (BH) {
          let LH = !0;
          for (let AH = 0; AH < HH.length && LH; AH++) LH = HH[AH] === BH[AH];
          if (LH) return
        }
        BH ??= this.uniformWritten = new Int32Array(HH.length), BH.set(HH), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(HH) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, HH)
      }
      computeVolume(HH, BH, LH) {
        const AH = this.buildVolumePass();
        if (!AH) return void(this.volumeHolds = null);
        const rH = (0, DL.t)(this.volumeHolds, HH);
        this.volumeHolds = HH;
        const SH = 1 === rH.length && rH[0].size.every(((HH, BH) => HH === DL.m[BH])),
          hH = this.sweptChunk,
          tH = this.sweptLight,
          zH = BH[0] !== tH[0] || BH[1] !== tH[1] || BH[2] !== tH[2],
          CH = LH[0] !== hH[0] || LH[1] !== hH[1] || LH[2] !== hH[2],
          EH = zH && Wz(BH, tH);
        if ((SH || this.written || CH || EH) && (this.fastLeft = DL.g), SH || this.written || zH || CH) {
          this.written = !1;
          for (let HH = 0; HH < 3; HH++) hH[HH] = LH[HH], tH[HH] = BH[HH];
          this.sweepLeft = SH ? 0 : DL.g
        }
        if (SH ? this.swept += DL.g : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, rH.push(...(0, DL.v)(HH, this.slice)), this.slice = (this.slice + 1) % DL.g, this.swept++), 0 === rH.length) return;
        const XH = (0, DL.x)(this.workData, BH, rH);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const GH = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          YH = GH.beginComputePass({
            label: "sun-shadow-volume"
          });
        YH.setPipeline(AH.pipeline), YH.setBindGroup(dL.group, AH.bindGroup), YH.dispatchWorkgroups(Math.ceil(XH / DL.h)), YH.end(), this.device.queue.submit([GH.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const HH = dL,
          BH = GPUShaderStage.COMPUTE,
          LH = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: HH.uniform,
              visibility: BH,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: HH.aG,
              visibility: BH,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: HH.special,
              visibility: BH,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: HH.work,
              visibility: BH,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: HH.volume,
              visibility: BH,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          AH = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: LH,
            entries: [{
              binding: HH.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: HH.aG,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: HH.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: HH.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: HH.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [LH]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: aL()
            }),
            entryPoint: "main"
          }
        }).then((HH => {
          this.volumePass = {
            pipeline: HH,
            bindGroup: AH
          }
        }), (HH => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(HH)}`)
        })), null
      }
      start(HH) {
        if (this.window) return this.window;
        const BH = (HH, BH) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * HH, BH)
        };
        this.casters = new zz(((HH, LH) => {
          this.castersWritten = !0, BH(HH, LH)
        }), Mz);
        const LH = new Gz(this.casters, ((HH, BH) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * HH, BH)
        }), BH);
        LH.encoded = HH => {
          this.markStale(HH)
        };
        const AH = HH => {
          LH.chunkAdded(HH)
        };
        return HH.cX.on("chunkAdded", AH), this.stopWindow = () => {
          HH.cX.removeListener("chunkAdded", AH)
        }, this.window = LH, LH
      }
    }
    var vz = LH(39619),
      Pz = LH(39624);
    const Tz = 0,
      Uz = 3,
      Vz = 4,
      Oz = 5;

    function bz(HH, BH, LH, AH) {
      HH.drawOffset(BH, AH + Tz), BH[AH + Uz] = HH.drawTime(), LH[AH + Vz] = HH.ring.drawStart(), LH[AH + Oz] = HH.ring.drawCount()
    }
    const kz = `\n${NA}\n\nconst MAX_STOPS = ${Pz.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Pz.b/4}>,\n\tcolor1: array<vec4f, ${Pz.b}>,\n\tcolor2: array<vec4f, ${Pz.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Pz.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Pz.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var mz = LH(45075);
    class oz {
      constructor(HH, BH, LH, AH) {
        this.device = HH, this.system = BH, this.frameIndex = LH, this.bindings = AH, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, mz.c)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (HH, BH) => {
          this.device.queue.writeBuffer(this.ring, HH * Pz.c * 4, this.system.ring.records, HH * Pz.c, (BH - HH) * Pz.c)
        };
        const {
          name: rH
        } = BH;
        this.ring = HH.createBuffer({
          label: `particles-${rH}`,
          size: BH.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = HH.createBuffer({
          label: `particles-uniforms-${rH}`,
          size: 4 * Pz.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(HH) {
        const BH = (0, mz.b)(this.system, this.uniformBits, HH);
        BH && (this.uniformBits = BH, this.device.queue.writeBuffer(this.uniforms, 0, BH))
      }
      bind() {
        const {
          system: HH
        } = this, BH = this.texture;
        (0, mz.f)(HH, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${HH.name}`,
          size: [Pz.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Pz.k
        }, [Pz.k, 1]));
        const LH = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === BH.view && this.boundSampler === BH.sampler && this.boundRamp === LH || (this.boundView = BH.view, this.boundSampler = BH.sampler, this.boundRamp = LH, this.bindGroup = this.device.createBindGroup({
          label: `particles-${HH.name}`,
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
            resource: BH.sampler
          }, {
            binding: 3,
            resource: BH.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: LH
          }]
        }))
      }
      destroy() {
        var HH;
        this.ring.destroy(), this.uniforms.destroy(), null === (HH = this.ramp) || void 0 === HH || HH.destroy()
      }
    }
    class Iz {
      constructor(HH, BH) {
        this.device = HH, this.resources = BH, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, lB.e)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (HH, BH) => (this.bindTarget(BH), {
            renderable: this.renderable,
            pipeline: oB(this.device, BH),
            draw: HH => BH === this.preparedTarget ? this.draw(HH) : 0
          })
        }
      }
      rebind(HH) {
        this.device = HH, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [BH, LH] of this.systems) {
          const AH = new oz(HH, BH, LH.frameIndex, this.bindings),
            rH = BH.ring.drawCount();
          rH > 0 && AH.upload(0, rH), this.systems.set(BH, AH)
        }
      }
      build() {
        const {
          device: HH
        } = this, BH = HH.createBindGroupLayout({
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
        this.frameLayout = HH.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = HH.createPipelineLayout({
          bindGroupLayouts: [VB(HH), BH, this.frameLayout]
        }), this.module = HH.createShaderModule({
          label: "particles",
          code: kz
        });
        const LH = HH.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        HH.queue.writeTexture({
          texture: LH
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: BH,
          rampSampler: HH.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: LH.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get YSH() {
        return this.systems.size
      }
      reset() {
        for (const HH of this.systems.keys()) HH.reset()
      }
      describePendingWork() {
        return (0, vz.e)(this.systems.keys(), "Lite")
      }
      XF(HH, BH) {
        const LH = new vz.b(HH, BH, this);
        return this.systems.set(LH, new oz(this.device, LH, this.allocateFrameIndex(), this.bindings)), LH
      }
      rBH(HH, BH) {
        for (const LH of this.systems.keys()) LH.rBH(HH, BH)
      }
      canDraw(HH) {
        const BH = this.systems.get(HH),
          LH = HH.texture ? this.resources.boundTexture(HH.texture) : null;
        if (!BH || !LH || !this.targetPipelines) return !1;
        if (BH.texture = LH, BH.pipelines.length = 0, !rB(HH.blendMode)) return this.warnOnce(`blend:${HH.blendMode}`, `particle blend mode ${HH.blendMode} is not drawn (${HH.name})`), !0;
        const AH = (0, ZH.k)(HH.blendMode);
        for (const rH of AH) {
          const HH = this.pipelineFor(rH);
          if (!1 === HH) return BH.pipelines.length = 0, !0;
          HH && BH.pipelines.push(HH)
        }
        return BH.pipelines.length === AH.length
      }
      disposeStopped(HH) {
        HH.dispose()
      }
      remove(HH) {
        const BH = this.systems.get(HH);
        BH && (this.systems.delete(HH), BH.destroy(), this.freeFrameIndices.push(BH.frameIndex))
      }
      prepare(HH) {
        const BH = HH.animationRatio || 1;
        IB(this.renderable._worldCenter, HH, bB), this.preparedTarget = this.target, this.draws.length = 0;
        let LH = 0;
        for (const AH of this.systems.values()) {
          const HH = AH.system;
          if (!HH.animateIfActive(BH)) continue;
          if (HH.ring.takeUploads(AH.upload), !HH.hasLiveParticles() || 0 === AH.pipelines.length) continue;
          AH.writeUniforms(this.warnOnce), AH.bind();
          const rH = 64 * AH.frameIndex;
          AH.count = HH.ring.drawCount(), bz(HH, this.frameData, this.frameBits, rH), LH = Math.max(LH, rH + 64), this.draws.push(AH)
        }
        LH > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, LH)
      }
      draw(HH) {
        let BH = 0,
          LH = null;
        for (const AH of this.draws) {
          HH.setBindGroup(1, AH.bindGroup), HH.setBindGroup(2, this.frameBindGroup, [256 * AH.frameIndex]);
          for (const rH of AH.pipelines) rH !== LH && (HH.setPipeline(rH), LH = rH), HH.draw(4, AH.count), BH++
        }
        return BH
      }
      bindTarget(HH) {
        this.target = HH;
        const BH = `${HH._colorFormat}|${HH._depthStencilFormat}|${HH._depthCompare}|${HH._sampleCount}`;
        let LH = this.pipelines.get(BH);
        LH || (LH = new Map, this.pipelines.set(BH, LH)), this.targetPipelines = LH
      }
      pipelineFor(HH) {
        var BH;
        const LH = this.targetPipelines,
          AH = LH.get(HH);
        if (void 0 !== AH) return AH;
        LH.set(HH, null);
        const rH = this.target,
          SH = HH === ZH.e,
          hH = null !== (BH = rH._depthCompare) && void 0 !== BH ? BH : OB,
          {
            device: tH
          } = this;
        return tH.createRenderPipelineAsync({
          label: `particles-${HH}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: xB({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: SH ? 1 : 0
            }
          }, rH, SB((0, ZH.j)(HH))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: rH._depthStencilFormat ? {
            format: rH._depthStencilFormat,
            depthCompare: hH,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: rH._sampleCount
          }
        }).then((BH => {
          LH.set(HH, BH)
        }), (BH => {
          LH.set(HH, !1), console.error("Lite particle pipeline failed", BH), EB(tH, "particles", `blend-${HH}`, BH)
        })), null
      }
      allocateFrameIndex() {
        const HH = this.freeFrameIndices.pop();
        if (void 0 !== HH) return HH;
        const BH = this.nextFrameIndex++;
        if (64 * (BH + 1) > this.frameData.length) {
          const HH = new Float32Array(2 * this.frameData.length);
          HH.set(this.frameData), this.frameData = HH, this.frameBits = new Uint32Array(HH.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return BH
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
    class fz {
      constructor(HH, BH, LH, AH, rH) {
        this.lite = HH, this.canvas = BH, this.info = LH, this.resources = rH, this.WrH = !1, this.needPOTTextures = !1, this.EHH = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = BH.width, this.renderHeight = BH.height, this.caps = {
          maxTextureSize: AH.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: AH.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(HH) {
        this.lite = HH, (0, jH.t)(HH, this.renderWidth, this.renderHeight)
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
      setSize(HH, BH) {
        if (this.renderWidth === HH && this.renderHeight === BH) return !1;
        const LH = this.renderWidth,
          AH = this.renderHeight;
        this.renderWidth = HH, this.renderHeight = BH;
        const rH = this.lite;
        if (null === rH) return !0;
        try {
          (0, jH.t)(rH, HH, BH)
        } catch (SH) {
          if (SH instanceof DOMException && "InvalidStateError" === SH.name) {
            this.renderWidth = LH, this.renderHeight = AH;
            try {
              (0, jH.t)(rH, LH, AH)
            } catch {
              this.canvas.width = LH, this.canvas.height = AH
            }
            return console.warn("WebGPU could not allocate render targets for resize", HH, BH, SH.message), !1
          }
          throw SH
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
      WU() {
        const HH = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : HH - this.lastFrameTime, this.lastFrameTime = HH
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(HH, BH) {
        const LH = document.createElement("canvas");
        return LH.width = HH, LH.height = BH, LH
      }
      YHH(HH, BH) {
        var LH;
        return null !== (LH = this.resources.YHH.get(HH)) && void 0 !== LH ? LH : new GB(this.resources, HH, BH)
      }
      atlasArrays(HH) {
        return this.resources.atlasArrays(HH)
      }
    }
    class lz {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(HH) {
        this.fov = HH.fov, this.nearPlane = HH.near, this.farPlane = HH.far;
        const BH = HH.worldMatrix;
        for (let LH = 0; LH < 16; LH++)
          if (this.worldMatrix[LH] !== BH[LH]) return this.worldMatrix.set(BH), void this.worldMatrixVersion++
      }
    }
    class Kz {
      constructor(HH, BH, LH, AH) {
        this.canvas = BH, this.options = LH, this.sLH = void 0, this.backendName = "WebGPU (Lite)", this.fHH = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new lz, this.lastFrameTime = 0, this.engine = void 0, this.NQ = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.mX = null, this.firstTerrain = null, this.trialFrames = 0, this.install(HH);
        const {
          resources: rH,
          meshes: SH
        } = HH;
        this.resources = rH, this.particles = HH.particles, this.sLH = new fz(HH.engine, BH, AH, HH.device.limits, rH), (0, mH.C)({
          LX: HH => {
            lH(HH) && rH.textureSlot(HH)
          },
          loaded: HH => lH(HH) ? rH.textureLoaded(HH) : null,
          canvasUpdated: (HH, BH, LH) => {
            lH(HH) && rH.canvasUpdated(HH, BH, LH)
          }
        }), this.fHH = SH.fHH, this.modelMeshes = SH.modelMeshes
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
      install(HH) {
        this.engine = HH.engine, this.NQ = HH.NQ, this.sceneTask = HH.sceneTask, this.device = HH.device, this.liteTerrain = HH.terrain, this.meshes = HH.meshes, this.sunShadow = HH.sunShadow;
        const BH = new DH(HH.device.lost);
        this.refusals = BH, BH.deviceLost.then((() => {
          var BH;
          BH = HH.device, zB.add(BH)
        })), HH.NQ.camera = this.camera
      }
      async rebuild() {
        var HH, BH, LH, AH, rH;
        const SH = await gz();
        this.halted = !0, this.liteTerrain.retire(), null === (HH = this.sunShadow) || void 0 === HH || HH.dispose(), this.sLH.detach();
        try {
          (0, nH.d)(this.engine)
        } catch (EH) {
          console.warn("Lite: disposing the lost device's engine threw", EH)
        }
        const hH = {
            width: this.sLH.renderWidth,
            height: this.sLH.renderHeight
          },
          tH = await Nz(this.canvas, this.options, hH, SH),
          zH = PB(tH),
          CH = Rz(zH);
        try {
          this.resources.rebind(tH, zH), this.particles.rebind(zH), this.fHH.dropSteady();
          const HH = {
              resources: this.resources,
              particles: this.particles,
              fHH: this.fHH,
              modelMeshes: this.modelMeshes
            },
            BH = await jz(tH, zH, this.options, HH),
            LH = CH();
          if (null !== LH) throw new Error(`WebGPU device lost while Lite was rebuilding (${LH.reason}): ${LH.message}`);
          const {
            r: AH,
            g: rH,
            b: SH
          } = this.NQ.clearColor;
          this.install(BH), this.setClearColour(AH, rH, SH), this.sLH.rebind(tH)
        } catch (EH) {
          throw zH.destroy(), EH
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (BH = this.mX) || void 0 === BH || BH.resize(), null === (LH = this.mX) || void 0 === LH || null === (AH = LH.bG) || void 0 === AH || null === (rH = AH.vU) || void 0 === rH || rH.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((HH, BH) => {
          this.firstTerrain = {
            drawn: HH,
            failed: BH
          }
        }))
      }
      get castsEntitySunShadows() {
        var HH, BH;
        return null !== (HH = null === (BH = this.sunShadow) || void 0 === BH ? void 0 : BH.tracesEntities) && void 0 !== HH && HH
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(HH) {
        this.mX = HH, this.modelMeshes.attach(HH.model, HH.sceneMirror);
        const BH = HH.NQ;
        this.setClearColour(BH.clearColor.r, BH.clearColor.g, BH.clearColor.b), BH.draw = () => {
          this.drawFrame(HH, BH)
        }
      }
      get VX() {
        return !this.refusals.lost && !this.halted
      }
      render(HH) {
        if (this.VX) {
          try {
            this.sLH.WU(), HH.NQ.render()
          } catch (BH) {
            throw this.refusals.frameFailed(BH), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(BH), this.firstTerrain = null), BH
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var HH, BH, LH, AH;
        const rH = [...this.particles.describePendingWork(), ...null !== (HH = null === (BH = this.sunShadow) || void 0 === BH ? void 0 : BH.describePendingWork()) && void 0 !== HH ? HH : []],
          SH = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (LH = this.terrain.sceneDepth) && void 0 !== LH && LH.compiling ? 1 : 0) + (null !== (AH = this.terrain.shadowMask) && void 0 !== AH && AH.compiling ? 1 : 0);
        SH > 0 && rH.push(`${SH} Lite pipelines compiling`);
        const hH = this.terrain.buffersAwaitingVerdict;
        hH > 0 && rH.push(`${hH} Lite terrain buffers awaiting their out-of-memory verdict`);
        const tH = this.resources.texturesLoading;
        return tH > 0 && rH.push(`${tH} Lite textures loading`), rH
      }
      prepareTexture(HH) {
        return null !== this.resources.boundTexture(HH) || this.resources.textureFailed(HH)
      }
      drawFrame(HH, BH) {
        var LH, AH, rH, SH, hH, tH;
        const zH = Wt(HH);
        this.camera.copyFromView(zH), this.setClearColour(zH.clearColour[0], zH.clearColour[1], zH.clearColour[2]), null === (LH = this.sunShadow) || void 0 === LH || LH.prepare(HH.bG, zH.eye, null !== (AH = HH.bG.Cu) && void 0 !== AH ? AH : null), this.terrain.prepare(HH, zH), null === (rH = this.terrain.sceneDepth) || void 0 === rH || rH.setPlanes(zH.near, zH.far), null === (SH = this.terrain.shadowMask) || void 0 === SH || SH.prepare(zH), Bt(this.sceneTask), this.meshes.prepare(BH, zH, HH.model.earthSky, null !== (hH = HH.bG.Cu) && void 0 !== hH ? hH : null), this.particles.prepare(zH);
        const CH = performance.now();
        this.resources.flushUploads(), null === (tH = this.sunShadow) || void 0 === tH || tH.traceEntities(this.meshes);
        try {
          (0, jH.p)(this.engine, this.lastFrameTime > 0 ? CH - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = CH, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(CH), this.firstTerrain = null)
      }
      setClearColour(HH, BH, LH) {
        const AH = this.NQ.clearColor;
        AH.r = HH, AH.g = BH, AH.b = LH, AH.a = 1
      }
    }

    function cz(HH) {
      const BH = {};
      for (const LH in HH.limits) {
        const AH = HH.limits[LH];
        "number" === typeof AH && (BH[LH] = AH)
      }
      return BH
    }
    const ez = "WebGPU device lost while Lite was starting";
    async function qz(HH, BH) {
      const LH = await gz(),
        AH = LH.info,
        rH = {
          vendor: (null === AH || void 0 === AH ? void 0 : AH.vendor) || "unknown vendor",
          renderer: (null === AH || void 0 === AH ? void 0 : AH.architecture) || "unknown renderer",
          version: (null === AH || void 0 === AH ? void 0 : AH.description) || "unknown version"
        };
      HH.style.background = "black";
      const SH = await Nz(HH, BH, BH.bufferSize, LH),
        hH = PB(SH),
        tH = Rz(hH);
      try {
        const LH = new Kz(await jz(SH, hH, BH, null), HH, BH, rH),
          AH = tH();
        if (null !== AH) {
          const {
            reason: HH,
            message: BH
          } = AH;
          throw Object.assign(new Error(`${ez} (${HH}): ${BH}`), {
            fallbackReason: ez
          })
        }
        return LH
      } catch (zH) {
        throw hH.destroy(), null === tH() ? zH : (0, Ht.e)(zH, "device")
      }
    }
    async function gz() {
      const HH = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!HH) throw (0, Ht.e)(new Error("No WebGPU adapter"), "no_adapter");
      return HH
    }
    async function Nz(HH, BH, LH, AH) {
      let rH;
      try {
        rH = await (0, jH.h)(HH, {
          msaaSamples: BH.mAH ? 4 : 1,
          requiredLimits: cz(AH),
          alphaMode: "premultiplied"
        })
      } catch (hH) {
        throw (0, Ht.e)(hH, "#47" === (null === (SH = hH) || void 0 === SH ? void 0 : SH.message) ? "no_adapter" : "device")
      }
      var SH;
      return null !== LH && (0, jH.t)(rH, LH.width, LH.height), rH
    }

    function Rz(HH) {
      let BH = null;
      return HH.lost.then((HH => {
        BH = HH, console.error(`WebGPU device lost (${HH.reason}): ${HH.message}`)
      })), () => BH
    }
    async function jz(HH, BH, LH, AH) {
      var rH, SH;
      let {
        sceneDepth: hH,
        sunShadow: tH
      } = LH;
      const zH = (0, FH.c)(HH),
        CH = null !== (rH = null === AH || void 0 === AH ? void 0 : AH.resources) && void 0 !== rH ? rH : new ih(HH, BH),
        EH = new Hz(BH),
        XH = new Kh(BH, CH, (HH => function(HH, BH) {
          for (const AH of TB(HH)) {
            var LH;
            if (AH._targetSignature === BH) return null !== (LH = AH._sceneBG) && void 0 !== LH ? LH : null
          }
          return null
        }(zH, HH)), null === AH || void 0 === AH ? void 0 : AH.fHH, null === AH || void 0 === AH ? void 0 : AH.modelMeshes),
        GH = null !== (SH = null === AH || void 0 === AH ? void 0 : AH.particles) && void 0 !== SH ? SH : new Iz(BH, CH);
      for (const QH of function(HH, BH, LH) {
          return [BH.opaqueRenderable, HH.opaqueRenderable, HH.skyLastRenderable, LH.renderable, BH.transparentRenderable, HH.transparentRenderable, HH.frontRenderable]
        }(XH, EH, GH)) vB(zH, QH);
      const YH = function(HH) {
        for (const BH of TB(HH))
          if ("NQ" === BH.name) return BH;
        throw new Error("Lite: the scene has no render task named scene")
      }(zH);
      hH && EH.installSceneDepth(YH, HH);
      const uH = tH ? new xz(BH, tH.entities) : null;
      return EH.sunShadow = uH, uH && null !== tH && void 0 !== tH && tH.entities && (EH.shadowMask = new lt(BH, YH, HH, EH)), XH.sunShadow = uH, await (0, FH.d)(zH), {
        engine: HH,
        NQ: zH,
        sceneTask: YH,
        device: BH,
        terrain: EH,
        meshes: XH,
        sunShadow: uH,
        resources: CH,
        particles: GH
      }
    }
  },
  42020: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => hH,
      D: () => QH,
      H: () => YH,
      L: () => uH,
      d: () => rH,
      g: () => AH,
      k: () => GH,
      o: () => EH,
      r: () => WH,
      v: () => SH,
      w: () => tH,
      y: () => zH
    });
    const AH = 3,
      rH = 0,
      SH = 1,
      hH = 2,
      tH = {
        uniform: 3,
        aG: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      zH = 10,
      CH = "BloxdPackInputs",
      EH = "bloxdPackInputs",
      XH = [{
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
      GH = 80;

    function YH() {
      const HH = XH.map((HH => {
        let {
          name: BH,
          type: LH
        } = HH;
        return `    ${BH}: ${LH},\n`
      })).join("");
      return `struct ${CH} {\n${HH}}\n@group(${AH}) @binding(${rH}) var<uniform> ${EH}: ${CH};\n`
    }

    function uH(HH, BH) {
      const LH = new DataView(HH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, GH),
        [AH, rH, SH, hH, tH, zH] = XH;
      LH.setFloat32(AH.offset, BH.seconds, !0), LH.setUint32(rH.offset, BH.lit ? 1 : 0, !0);
      for (let CH = 0; CH < 3; CH++) LH.setInt32(SH.offset + 4 * CH, BH.renderOffset[CH], !0), LH.setFloat32(hH.offset + 4 * CH, BH.QBH[CH], !0), LH.setFloat32(tH.offset + 4 * CH, BH.eyePosition[CH], !0), LH.setFloat32(zH.offset + 4 * CH, BH.shadowDirection[CH], !0)
    }

    function QH(HH) {
      const BH = new Uint32Array(Math.max(1, HH.length));
      return HH.forEach(((HH, LH) => {
        let {
          id: AH,
          rotation: rH
        } = HH;
        BH[LH] = 65535 & AH | (3 & rH) << 16
      })), BH
    }
    const WH = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);