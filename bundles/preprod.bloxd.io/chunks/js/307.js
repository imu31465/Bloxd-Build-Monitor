export const id = 307;
export const ids = [307];
export const modules = {
  53776: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => jW,
      g: () => LW,
      h: () => PW,
      i: () => wW
    });
    var mW = OW(38369),
      EW = OW(39938),
      NW = OW(39931);

    function PW(WW, iW, OW, mW) {
      const EW = NW.A;
      iW.fill(0), WW.gravity.toArray(iW, EW.gravity), WW.colorDead.toArray(iW, EW.colorDead), OW[EW.ramp] = WW.useRampGradients ? 1 : 0;
      const PW = WW.getColorGradients(),
        LW = xW(WW, PW, "colour", mW);
      OW[EW.colorCount] = LW;
      for (let NW = 0; NW < LW; NW++) {
        var cW;
        const WW = PW[lW(PW, NW)];
        iW[EW.colorPositions + NW] = WW.gradient, WW.color1.toArray(iW, EW.color1 + 4 * NW), (null !== (cW = WW.color2) && void 0 !== cW ? cW : WW.color1).toArray(iW, EW.color2 + 4 * NW)
      }
      const wW = WW.getVelocityGradients(),
        tW = xW(WW, wW, "Sj", mW);
      OW[EW.velocityCount] = tW;
      for (let NW = 0; NW < tW; NW++) kW(iW, EW.Sj + 4 * NW, wW[lW(wW, NW)]);
      const ZW = WW.useRampGradients ? WW.getColorRemapGradients() : null,
        AW = xW(WW, ZW, "colour remap", mW);
      OW[EW.remapCount] = AW;
      for (let NW = 0; NW < AW; NW++) kW(iW, EW.remap + 4 * NW, ZW[lW(ZW, NW)])
    }

    function LW() {
      return {
        key: [],
        texels: new Uint8Array(4 * NW.l)
      }
    }
    const cW = [];

    function wW(WW, iW) {
      return tW(WW, cW), !UW(cW, iW.key) && (iW.key.length = 0, iW.key.push(...cW), iW.key.length > 0 && function(WW, iW) {
        for (let OW = 0; OW < NW.l; OW++) EW.m.GetCurrentGradient(OW / NW.l, WW, ((WW, iW, OW) => {
          mW.Color3.LerpToRef(WW.color, iW.color, OW, ZW)
        })), iW[4 * OW] = 255 * ZW.r, iW[4 * OW + 1] = 255 * ZW.g, iW[4 * OW + 2] = 255 * ZW.b, iW[4 * OW + 3] = 255
      }(WW.getRampGradients(), iW.texels), !0)
    }

    function tW(WW, iW) {
      iW.length = 0;
      const OW = WW.useRampGradients ? WW.getRampGradients() : null;
      if (null !== OW && void 0 !== OW && OW.length) {
        iW.push(OW.length);
        for (const WW of OW) iW.push(WW.gradient, WW.color.r, WW.color.g, WW.color.b)
      }
    }
    const ZW = new mW.Color3;

    function xW(WW, iW, OW, mW) {
      return iW ? iW.length > NW.c ? (mW(`particleStops:${OW}`, `GPU particles use the first 2 and last ${NW.c-2} of more than ${NW.c} ${OW} gradient stops (${WW.name})`), NW.c) : iW.length : 0
    }

    function lW(WW, iW) {
      return iW < 2 || WW.length <= NW.c ? iW : WW.length - NW.c + iW
    }
    const AW = new Float32Array(NW.t),
      bW = new Uint32Array(AW.buffer);

    function jW(WW, iW, OW) {
      return PW(WW, AW, bW, OW), iW && UW(bW, iW) ? null : bW.slice()
    }

    function UW(WW, iW) {
      if (WW.length !== iW.length) return !1;
      for (let OW = 0; OW < WW.length; OW++)
        if (WW[OW] !== iW[OW]) return !1;
      return !0
    }

    function kW(WW, iW, OW) {
      var mW;
      WW[iW] = OW.gradient, WW[iW + 1] = OW.factor1, WW[iW + 2] = null !== (mW = OW.factor2) && void 0 !== mW ? mW : OW.factor1
    }
  },
  42633: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      const mW = iW * iW * 4,
        EW = WW[0].layers,
        NW = EW * (WW.length - 1) + WW[WW.length - 1].layers,
        PW = new Uint8Array(NW * mW);
      WW.forEach(((iW, OW) => {
        const NW = OW + 1 < WW.length ? Math.min(iW.layers, EW) : iW.layers;
        PW.set(new Uint8Array(iW.pixels.buffer, iW.pixels.byteOffset, NW * mW), OW * EW * mW)
      }));
      const LW = Math.max(1, Math.min(NW, OW || NW));
      if (LW === NW) return [{
        pixels: PW,
        layers: NW
      }];
      const cW = [];
      for (let wW = 0; wW < NW; wW += LW) {
        const WW = Math.min(NW, wW + LW);
        cW.push({
          pixels: PW.slice(wW * mW, WW * mW),
          layers: WW - wW
        })
      }
      return cW
    }
    OW.d(iW, {
      e: () => mW,
      i: () => NW
    });
    const EW = new WeakMap;

    function NW(WW, iW, OW) {
      var mW, NW;
      const PW = null !== (mW = EW.get(WW)) && void 0 !== mW ? mW : new Map;
      EW.set(WW, PW);
      const LW = null !== (NW = PW.get(iW[0])) && void 0 !== NW ? NW : [];
      PW.set(iW[0], LW);
      const cW = LW.find((WW => WW.urls.length === iW.length && WW.urls.every(((WW, OW) => WW === iW[OW]))));
      if (cW) return cW.built;
      const wW = {
        urls: [...iW],
        built: OW()
      };
      return LW.push(wW), wW.built.catch((() => {
        LW.splice(LW.indexOf(wW), 1)
      })), wW.built
    }
  },
  53774: (WW, iW, OW) => {
    function mW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const iW = new Set;
      return (OW, mW) => {
        iW.has(OW) || (iW.add(OW), console.warn(WW + mW))
      }
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  53817: (WW, iW, OW) => {
    OW.d(iW, {
      createLiteRendererAsync: () => pc,
      liteBabylonBackend: () => pW,
      setPipelineFailureHook: () => Li
    });
    var mW = OW(38369),
      EW = OW(38691),
      NW = OW(39083),
      PW = OW(38427),
      LW = OW(39095);
    class cW extends LW.b {
      constructor() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        super(...iW), this.color = new mW.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: iW[0].bD().getUniqueId(),
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
          needAlphaBlendingForMesh: WW => WW.visibility < 1 || WW.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const wW = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      tW = WW => 1 << wW.indexOf(WW),
      ZW = tW("VERTEXCOLOR"),
      xW = tW("INSTANCES"),
      lW = tW("THIN_INSTANCES"),
      AW = tW("INSTANCESCOLOR"),
      bW = tW("FOG"),
      jW = tW("LITE_FRONT_LAYER");

    function UW(WW, iW, OW, mW) {
      let EW = 0;
      return WW.isVerticesDataPresent("color") && (EW |= ZW), "none" !== iW && (EW |= xW), "thin" === iW && (EW |= lW, WW.isVerticesDataPresent("instanceColor") && (EW |= AW)), mW.fogEnabled && WW.applyFog && 0 !== mW.fogMode && (EW |= bW), OW >= 1 && (EW |= jW), EW
    }

    function kW(WW, iW) {
      WW.updateColor4("color", iW.color, iW.alpha)
    }
    var sW = OW(39017),
      MW = OW(38511),
      KW = OW(38437),
      SW = OW(38388),
      YW = OW(39004),
      yW = OW(39011),
      TW = OW(38419),
      JW = OW(38425),
      hW = OW(38431);
    const HW = SW.e.GLSL;
    class nW {
      constructor(WW, iW) {
        this.name = WW, this.rb = iW, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.jD = {
          addOnce: WW => {
            this.disposers.push(WW)
          }
        }, this.uniqueId = iW.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      bD() {
        return this.rb
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
      needAlphaBlendingForMesh(WW) {
        return (0, TW.W)(this.model, WW.visibility, WW.hasVertexAlpha)
      }
      needAlphaTestingForMesh(WW) {
        return (0, TW.Y)(this.model, WW.visibility, WW.hasVertexAlpha)
      }
      dispose() {
        (0, MW.k)(this);
        for (const WW of this.disposers.splice(0)) WW()
      }
      get model() {
        return (0, TW.bb)(this)
      }
    }
    const uW = new WeakSet;

    function oW(WW) {
      return uW.has(WW)
    }

    function dW(WW) {
      uW.add(WW)
    }
    const eW = {
      create: (WW, iW) => ((0, KW.w)(WW, new nW(WW.name, iW)), JW.d.defines()),
      write: () => {},
      addFeature: (WW, iW) => {
        const OW = WW.mirror;
        iW.feature === yW.l && iW.state.dirLightCount > 0 && (WW.disableLighting = !0, (0, TW._)(WW)), "BLOXD_LIGHTING" in iW.defines && (0, MW.i)(OW), iW.feature === YW.e && ((0, sW.h)(iW.state, HW), function(WW, iW) {
          const OW = WW.bD().VA();
          setTimeout((() => {
            OW.atlasArrays(iW.sources).then((OW => {
              (0, sW.d)(WW, iW, OW.map((WW => ({
                atlas: WW,
                layers: WW.layers
              }))), OW[0].layerWidth, HW)
            })).catch((WW => {
              console.error("Failed to build the atlas's texture arrays", WW)
            }))
          }))
        }(OW, iW.state))
      },
      texture: (WW, iW, OW) => {
        let {
          data: mW,
          sets: EW
        } = OW;
        var NW;
        (dW(WW), mW) && (WW.uvSet = null !== (NW = null === EW || void 0 === EW ? void 0 : EW.coordinatesIndex) && void 0 !== NW ? NW : 0, (0, KW.db)(WW.matrix, null !== EW && void 0 !== EW ? EW : {}))
      },
      cube: dW,
      canvas: (WW, iW, OW) => {
        let {
          width: mW,
          height: EW,
          mipmaps: NW,
          samplingMode: PW = hW.k.trilinear,
          hasAlpha: LW = !1,
          wrap: cW = hW.e.clamp
        } = OW;
        const wW = WW.VA().createCanvas(mW, EW),
          tW = new hW.n("2d", {
            kind: "canvas",
            width: mW,
            height: EW,
            canvas: wW
          }, {
            samplingMode: PW,
            wrapU: cW,
            wrapV: cW,
            noMipmap: !NW,
            invertY: !0
          });
        return tW.hasAlpha = LW, dW(tW), tW
      }
    };
    var vW = OW(38526),
      gW = OW(38276);
    class DW {
      constructor(WW, iW, OW) {
        this.engine = WW, this.clearColor = iW, this.ambientColor = OW, this.onBeforeRenderObservable = new gW.e, this.onBeforeCameraRenderObservable = new gW.e, this.onAfterRenderObservable = new gW.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.vY = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      VA() {
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
      addPendingData(WW) {
        this.pending.push(WW)
      }
      removePendingData(WW) {
        const iW = this.pending.indexOf(WW); - 1 !== iW && this.pending.splice(iW, 1)
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

    function VW() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const pW = {
      rOW: VW,
      pEW: (WW, iW) => {
        const OW = new DW(WW.engine, mW.c.FromArray(iW.clearColor), mW.Color3.FromArray(iW.ambientColor));
        (0, PW.c)(eW, OW), WW.rb = OW,
          function(WW, iW) {
            const OW = Object.assign((0, vW.g)(WW, "camera"), {
              layerMask: 268435455
            });
            WW.model.nodes.setWorldSource(OW.row, WW.model.view.worldMatrix), WW.camera = iW.activeCamera = OW
          }(WW, OW), (0, EW.g)(WW, ((WW, iW, OW) => (0, NW.k)(WW, iW, OW, LW.b)))
      },
      vEW: () => {},
      setBabylonFog: () => {},
      CEW: VW,
      REW: () => {},
      linesFromArrays: (WW, iW, OW) => (0, NW.k)(WW, iW, OW, cW),
      zb: () => {},
      qEW: VW
    };
    var fW = OW(53868),
      CW = OW(53878),
      XW = OW(53891);
    class BW {
      constructor(WW) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const iW = new Promise((WW => {
          this.refused = WW
        }));
        this.deviceLost = Promise.race([WW, iW]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(WW) {
        (function(WW) {
          const {
            name: iW,
            message: OW
          } = null !== WW && void 0 !== WW ? WW : {};
          return "InvalidStateError" === iW && "string" === typeof OW && OW.startsWith("GPUDevice.")
        })(WW) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: WW.message,
          framesRefused: !0
        }))
      }
    }
    var qW = OW(42633),
      RW = OW(39948);

    function GW(WW) {
      return Math.max(4, 4 * Math.ceil(WW / 4))
    }

    function IW(WW, iW, OW, mW) {
      const EW = WW.createBuffer({
        label: mW,
        size: GW(iW.byteLength),
        usage: OW,
        mappedAtCreation: !0
      });
      return new Uint8Array(EW.getMappedRange(), 0, iW.byteLength).set(new Uint8Array(iW.buffer, iW.byteOffset, iW.byteLength)), EW.unmap(), EW
    }

    function aW(WW, iW) {
      return Math.floor(Math.log2(Math.max(WW, iW))) + 1
    }

    function rW(WW, iW, OW, mW, EW, NW) {
      const PW = WW.createTexture({
          label: NW,
          size: {
            width: OW,
            height: mW,
            depthOrArrayLayers: EW
          },
          format: "rgba8unorm",
          mipLevelCount: aW(OW, mW),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        LW = (iW, OW, mW, NW) => {
          WW.queue.writeTexture({
            texture: PW,
            mipLevel: OW
          }, iW, {
            bytesPerRow: 4 * mW,
            rowsPerImage: NW
          }, {
            width: mW,
            height: NW,
            depthOrArrayLayers: EW
          })
        };
      LW(iW, 0, OW, mW);
      let cW = 1;
      for (const wW of function*(WW, iW, OW, mW) {
          let EW = WW,
            NW = iW,
            PW = OW;
          for (; NW > 1 || PW > 1;) {
            const WW = Math.max(1, NW >> 1),
              iW = Math.max(1, PW >> 1),
              OW = new Uint8Array(WW * iW * mW * 4),
              LW = 4 * NW;
            let cW = 0;
            for (let wW = 0; wW < mW; wW++) {
              const mW = wW * LW * PW;
              for (let wW = 0; wW < iW; wW++) {
                const iW = mW + Math.min(2 * wW, PW - 1) * LW,
                  tW = mW + Math.min(2 * wW + 1, PW - 1) * LW;
                for (let mW = 0; mW < WW; mW++) {
                  const WW = 4 * Math.min(2 * mW, NW - 1),
                    PW = 4 * Math.min(2 * mW + 1, NW - 1);
                  for (let mW = 0; mW < 4; mW++) OW[cW++] = EW[iW + WW + mW] + EW[iW + PW + mW] + EW[tW + WW + mW] + EW[tW + PW + mW] + 2 >> 2
                }
              }
            }
            yield {
              data: OW,
              width: WW,
              height: iW
            }, EW = OW, NW = WW, PW = iW
          }
        }(iW, OW, mW, EW)) LW(wW.data, cW++, wW.width, wW.height);
      return PW
    }
    const zW = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function FW(WW) {
      if (WW.startsWith("data:")) {
        const iW = WW.search(/[;,]/);
        return `data:${iW>5?WW.slice(5,iW):""} URL of ${WW.length} characters`
      }
      return WW.length > 80 ? `${WW.slice(0,80)}...` : WW
    }
    async function QW(WW) {
      const iW = await fetch(WW);
      if (!iW.ok) throw new Error(`${FW(WW)}: ${iW.status} ${iW.statusText}`);
      return createImageBitmap(await iW.blob(), zW)
    }
    async function Wi(WW) {
      const iW = await QW(WW),
        OW = new OffscreenCanvas(iW.width, iW.height),
        mW = OW.getContext("2d", {
          willReadFrequently: !0
        });
      if (!mW) throw new Error("No 2D context to decode an image");
      mW.drawImage(iW, 0, 0);
      const {
        data: EW
      } = mW.getImageData(0, 0, iW.width, iW.height);
      return iW.close(), {
        pixels: new Uint8Array(EW.buffer, EW.byteOffset, EW.byteLength),
        width: OW.width,
        height: OW.height
      }
    }

    function ii(WW, iW) {
      return (0, qW.i)(WW, iW.urls, (async () => {
        const OW = await Promise.all(iW.urls.map((async (WW, OW) => {
            var mW, EW, NW, PW, LW;
            return null !== (PW = null !== (EW = null === (NW = iW.pixels) || void 0 === NW ? void 0 : NW[OW]) && void 0 !== EW ? EW : null, LW = iW.layerWidth, mW = null !== PW && void 0 !== PW && PW.byteLength && LW && PW.byteLength % (LW * LW * 4) === 0 ? {
              pixels: PW,
              layerWidth: LW,
              layers: PW.byteLength / (LW * LW * 4)
            } : null) && void 0 !== mW ? mW : await async function(WW) {
              const {
                pixels: iW,
                width: OW
              } = await Wi(WW);
              return {
                pixels: iW,
                layerWidth: OW,
                layers: iW.byteLength / (OW * OW * 4)
              }
            }(WW)
          }))),
          mW = OW[0].layerWidth;
        return (0, qW.e)(OW, mW, WW.limits.maxTextureArrayLayers).map(((OW, EW) => {
          let {
            pixels: NW,
            layers: PW
          } = OW;
          return {
            texture: rW(WW, NW, mW, mW, PW, `atlas-${EW}-${FW(iW.urls[0])}`),
            layerWidth: mW,
            layers: PW
          }
        }))
      }))
    }
    const Oi = new Map([
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
      mi = new Map([
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

    function Ei(WW) {
      for (const iW of (0, RW.h)(WW))
        if (!mi.has((0, RW.e)(iW))) return !1;
      return !0
    }

    function Ni(WW) {
      const iW = mi.get(WW);
      if (!iW) return null;
      const [OW, mW, EW] = iW;
      return {
        srcFactor: Oi.get(OW),
        dstFactor: Oi.get(mW),
        operation: EW
      }
    }
    let Pi = null;

    function Li(WW) {
      Pi = WW
    }
    const ci = new WeakSet;

    function wi(WW) {
      return ci.has(WW)
    }

    function ti(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var NW;
      wi(WW) || (null === (NW = Pi) || void 0 === NW || NW(iW, OW, mW, EW))
    }
    class Zi {
      constructor(WW) {
        this.resources = WW, this.matrixKey = {
          aZ: 0
        }, this.attributesKey = {
          aZ: 0
        }, this.inputs = Object.create(null);
        for (let iW = 0; iW < 4; iW++) this.inputs[`world${iW}`] = new Ai(this.matrixKey, 16 * iW, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(WW, iW) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, WW, !0), iW && this.resources.vertexBufferCreated(this.attributesKey, iW, !0)
      }
    }
    class xi extends Zi {
      constructor(WW, iW, OW) {
        super(WW), this.mesh = iW, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const mW = this.inputs;
        let EW = 0;
        for (const {
            size: PW
          }
          of OW) EW += PW;
        for (const {
            name: PW,
            offset: LW,
            size: cW,
            type: wW
          }
          of OW) mW[PW] = new Ai(this.attributesKey, 4 * LW, 4 * EW, cW, !0, wW);
        this.rowStride = EW, WW.p_.set(iW, this);
        const NW = iW.isVerticesDataPresent;
        iW.isVerticesDataPresent = (WW, OW) => WW in mW || NW.call(iW, WW, OW)
      }
      attach(WW, iW) {
        this.matrices = WW, this.attributes = iW, this.bind(WW, iW), this.mirror(WW, WW.length, WW.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      ZWW(WW) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, WW ? 64 * WW : void 0)
      }
      xWW() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(WW, iW) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * WW, 16 * iW)
      }
      attributeRows(WW, iW) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, WW * this.rowStride, iW * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(WW, iW, OW) {
        const mW = this.mesh._thinInstanceDataStorage;
        mW.matrixData = WW, mW.matrixBufferSize = iW, mW.worldMatrices = null, mW.instancesCount = OW
      }
    }
    class li extends Zi {
      constructor(WW, iW, OW) {
        var mW, EW, NW, PW;
        super(WW), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (mW = null === OW || void 0 === OW ? void 0 : OW.interleavedKinds) && void 0 !== mW ? mW : null, this.offsets = null !== (EW = null === OW || void 0 === OW ? void 0 : OW.interleavedOffsets) && void 0 !== EW ? EW : [], this.rowStride = null !== (NW = null === OW || void 0 === OW ? void 0 : OW.interleavedRowStride) && void 0 !== NW ? NW : 0, null === (PW = this.layout) || void 0 === PW || PW.forEach(((WW, iW) => {
          this.inputs[WW] = new Ai(this.attributesKey, 4 * this.offsets[iW], 4 * this.rowStride, OW.strides[WW])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), WW.batchUploads.set(iW, this), iW.jD.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(WW) {
        const iW = this.packedBatch;
        return iW.renderSelf ? 0 === WW ? this.packedSource : iW.instances[WW - 1] : iW.instances[WW]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(WW, iW, OW, mW) {
        const EW = (iW.renderSelf ? 1 : 0) + iW.rows.length;
        if (this.frame = mW, this.count = EW, this.packedSource = WW, this.packedBatch = iW, 0 === EW) return;
        if (WW.getWorldMatrix(), 16 * EW > this.matrices.length) {
          let WW = this.matrices.length / 16;
          for (; WW < EW;) WW *= 2;
          this.matrices = new Float32Array(16 * WW), this.attributes &&= new Float32Array(WW * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let NW = 0;
        iW.renderSelf && this.packRow(NW++, WW, iW.row, OW);
        for (let PW = 0; PW < iW.rows.length; PW++) this.packRow(NW++, iW.instances[PW], iW.rows[PW], OW);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * EW), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, EW * this.rowStride)
      }
      packRow(WW, iW, OW, mW) {
        const EW = this.matrices;
        if (OW < 0) EW.set(iW.getWorldMatrix().m, 16 * WW);
        else
          for (let wW = 0; wW < 16; wW++) EW[16 * WW + wW] = mW[16 * OW + wW];
        const NW = this.attributes;
        if (!NW) return;
        const PW = iW.bV,
          LW = this.layout;
        for (let wW = 0; wW < LW.length; wW++) {
          var cW;
          const iW = null !== (cW = PW[LW[wW]]) && void 0 !== cW ? cW : 0,
            OW = WW * this.rowStride + this.offsets[wW];
          iW.toArray ? iW.toArray(NW, OW) : iW.copyToArray ? iW.copyToArray(NW, OW) : NW[OW] = iW
        }
      }
    }
    class Ai {
      constructor(WW, iW, OW, mW) {
        let EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = WW, this.byteOffset = iW, this.byteStride = OW, this.size = mW, this.instanced = EW, this.type = NW, this.normalized = PW
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
    const bi = "CANVAS_ALPHA_ONE",
      ji = `override ${bi}: bool = false;`,
      Ui = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function ki(WW, iW, OW) {
      var mW;
      let EW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const NW = null !== (mW = iW._colorFormat) && void 0 !== mW ? mW : "bgra8unorm",
        PW = EW ? 15 : 0;
      return OW ? {
        ...WW,
        targets: [{
          format: NW,
          blend: {
            color: OW,
            alpha: Ui
          },
          writeMask: PW
        }]
      } : {
        ...WW,
        constants: {
          ...WW.constants,
          [bi]: 1
        },
        targets: [{
          format: NW,
          writeMask: PW
        }]
      }
    }

    function si(WW, iW) {
      WW._renderables.push(iW)
    }

    function Mi(WW) {
      return WW._device
    }

    function Ki(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = WW._frameGraph) || void 0 === OW ? void 0 : OW._tasks) && void 0 !== iW ? iW : []
    }

    function Si(WW) {
      return WW._currentEncoder
    }

    function Yi(WW) {
      return WW.createBindGroupLayout({
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
    const yi = "greater-equal",
      Ti = 2e5,
      Ji = 1e5,
      Hi = new WeakMap;

    function ni(WW, iW) {
      let OW = Hi.get(WW);
      if (!OW) {
        OW = {
          module: WW.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Hi.set(WW, OW)
      }
      const mW = `${iW._colorFormat}|${iW._depthStencilFormat}|${iW._sampleCount}`;
      let EW = OW.pipelines.get(mW);
      if (!EW) {
        var NW;
        const {
          module: PW
        } = OW;
        EW = WW.createRenderPipeline({
          label: `placeholder ${mW}`,
          layout: WW.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: PW,
            entryPoint: "v"
          },
          fragment: {
            module: PW,
            entryPoint: "f",
            targets: [{
              format: null !== (NW = iW._colorFormat) && void 0 !== NW ? NW : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: iW._depthStencilFormat ? {
            format: iW._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: iW._sampleCount
          }
        }), OW.pipelines.set(mW, EW)
      }
      return EW
    }

    function ui(WW, iW, OW) {
      const mW = iW.eye,
        EW = iW.viewMatrix;
      WW[0] = mW[0] + EW[2] * OW, WW[1] = mW[1] + EW[6] * OW, WW[2] = mW[2] + EW[10] * OW
    }
    var oi = OW(39145),
      di = OW(53774),
      ei = OW(38405);
    const vi = Math.PI,
      gi = vi / 1.95,
      Di = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Vi = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((WW => {
        let [iW, OW] = WW;
        return .434 * vi * Math.pow(2 * vi / iW, 2) * OW
      }));

    function fi(WW, iW, OW) {
      const {
        up: mW,
        mieDirectionalG: EW
      } = WW, NW = 1 - Bi(1 - Math.exp(iW[1] / 45e4), 0, 1), PW = WW.rayleigh - (1 - NW), LW = Math.hypot(iW[0], iW[1], iW[2]), cW = LW > 0 ? 1 / LW : 0, wW = OW.sunDir;
      for (let lW = 0; lW < 3; lW++) wW[lW] = iW[lW] * cW;
      const tW = wW[0] * mW[0] + wW[1] * mW[1] + wW[2] * mW[2],
        ZW = 1e3 * Math.max(0, 1 - Math.exp(-(gi - Math.acos(Bi(tW, -1, 1))) / 1.5));
      OW.sunE = ZW;
      const xW = .2 * WW.turbidity * 1e-17 * WW.mieCoefficient;
      for (let lW = 0; lW < 3; lW++) {
        const WW = Di[lW] * PW,
          iW = Vi[lW] * xW,
          mW = ZW / (WW + iW);
        OW.inScatterR[lW] = WW * mW, OW.inScatterM[lW] = iW * mW, OW.extinctionBeta[lW] = 8400 * WW + 1250 * iW
      }
      return OW.sunsetMix = Bi(Math.pow(1 - tW, 5), 0, 1), OW.sunDiscE = 19e3 * ZW, OW.mieScale = (1 - EW * EW) / (4 * vi), OW.mieBase = 1 + EW * EW, OW.mieSlope = 2 * EW, OW
    }
    const Ci = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Xi = 1 / function(WW) {
      const {
        A: iW,
        B: OW,
        C: mW,
        D: EW,
        E: NW,
        F: PW
      } = Ci;
      return (WW * (iW * WW + mW * OW) + EW * NW) / (WW * (iW * WW + OW) + EW * PW) - NW / PW
    }(1e3);

    function Bi(WW, iW, OW) {
      return Math.min(Math.max(WW, iW), OW)
    }
    const qi = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Ri(WW, iW) {
      const OW = new Map(iW),
        mW = [],
        EW = [],
        NW = () => 0 === EW.length || EW[EW.length - 1].active;
      let PW = null;
      const LW = () => {
        const WW = [...OW].filter((WW => {
            let [, iW] = WW;
            return !0 !== iW
          })),
          iW = WW.map((WW => {
            let [iW] = WW;
            return iW
          })).join("|");
        PW = WW.length ? new RegExp(`\\b(${iW})\\b`, "g") : null
      };
      LW();
      for (const cW of WW.split("\n")) {
        const WW = qi.exec(cW);
        if (!WW) {
          NW() && mW.push(PW ? Gi(cW, PW, OW) : cW);
          continue
        }
        const iW = WW[1],
          wW = WW[2].trim();
        if ("ifdef" === iW || "ifndef" === iW || "if" === iW) {
          const WW = NW(),
            mW = "if" === iW ? Ii(wW, OW) : OW.has(wW) === ("ifdef" === iW);
          EW.push({
            active: WW && mW,
            parentActive: WW,
            taken: mW
          })
        } else if ("elif" === iW || "else" === iW) {
          const WW = EW[EW.length - 1];
          if (!WW) throw new Error(`#${iW} without #if`);
          const mW = !WW.taken && ("else" === iW || Ii(wW, OW));
          WW.active = WW.parentActive && mW, WW.taken = WW.taken || mW
        } else if ("endif" === iW) {
          if (!EW.pop()) throw new Error("#endif without #if")
        } else if (NW()) {
          const [WW, ...mW] = wW.split(/\s+/);
          "undef" === iW ? OW.delete(WW) : OW.set(WW, !mW.length || mW.join(" ")), LW()
        }
      }
      if (EW.length) throw new Error("Unterminated #if");
      return mW.join("\n")
    }

    function Gi(WW, iW, OW) {
      return WW.replace(iW, (WW => {
        const iW = OW.get(WW);
        return "string" === typeof iW ? iW : WW
      }))
    }

    function Ii(WW, iW) {
      var OW;
      const mW = null !== (OW = WW.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== OW ? OW : [];
      let EW = 0;
      const NW = () => mW[EW],
        PW = () => mW[EW++],
        LW = WW => {
          const OW = /^\d/.test(WW) ? WW : iW.get(WW);
          return "string" === typeof OW ? parseInt(OW) : Number.NaN
        },
        cW = () => {
          const WW = PW();
          if ("!" === WW) return !cW();
          if ("(" === WW) {
            const WW = tW();
            return PW(), WW
          }
          if ("defined" === WW) {
            const WW = "(" === NW();
            WW && PW();
            const OW = PW();
            return WW && PW(), iW.has(OW)
          }
          const OW = NW();
          if ("==" === OW || "!=" === OW || ">" === OW || "<" === OW || ">=" === OW || "<=" === OW) {
            PW();
            const iW = LW(WW),
              mW = LW(PW());
            if (Number.isNaN(iW) || Number.isNaN(mW)) return !1;
            switch (OW) {
              case "==":
                return iW === mW;
              case "!=":
                return iW !== mW;
              case ">":
                return iW > mW;
              case "<":
                return iW < mW;
              case ">=":
                return iW >= mW;
              default:
                return iW <= mW
            }
          }
          return iW.has(WW)
        },
        wW = () => {
          let WW = cW();
          for (;
            "&&" === NW();) {
            PW();
            const iW = cW();
            WW = WW && iW
          }
          return WW
        },
        tW = () => {
          let WW = wW();
          for (;
            "||" === NW();) {
            PW();
            const iW = wW();
            WW = WW || iW
          }
          return WW
        },
        ZW = tW();
      if (EW !== mW.length) throw new Error(`Cannot evaluate #if ${WW}`);
      return ZW
    }
    var ai = OW(38493),
      ri = OW(38596),
      zi = OW(38598),
      Fi = OW(42321),
      Qi = OW(39983);
    const WO = 32,
      iO = [10, 3, 10],
      OO = [21, 7, 21],
      mO = OO[0] * OO[1] * OO[2],
      EO = 0,
      NO = 1,
      PO = 2,
      LO = 3,
      cO = 64,
      wO = 512,
      tO = 4 * mO,
      ZO = 1536,
      xO = tO + mO * ZO,
      lO = 1073741824,
      AO = xO + 1;

    function bO(WW, iW) {
      const OW = WW % iW;
      return OW < 0 ? OW + iW : OW
    }

    function jO(WW, iW, OW) {
      return mW = bO(WW, OO[0]), EW = bO(iW, OO[1]), NW = bO(OW, OO[2]), mW + OO[0] * (EW + OO[1] * NW);
      var mW, EW, NW
    }

    function UO(WW, iW, OW) {
      return WW + 8 * (iW + 8 * OW)
    }

    function kO(WW, iW, OW) {
      return WW + 4 * (iW + 4 * OW)
    }
    const sO = 65535,
      MO = 0,
      KO = 1,
      SO = 2,
      YO = 3;

    function yO(WW) {
      return Math.ceil(WW * WW / 32)
    }
    const TO = 8192,
      JO = 1 << 18,
      hO = 65536,
      HO = 294912,
      nO = 128,
      uO = 4096,
      oO = 16,
      dO = 16385,
      eO = 81921,
      vO = 147457,
      gO = 4194304;
    const DO = [0, 0, 0],
      VO = [0, 0, 0];

    function pO(WW, iW, OW, mW) {
      ! function(WW, iW, OW) {
        const [mW, EW, NW] = [WW[0], WW[1], WW[2]];
        let PW, LW, cW;
        Math.abs(EW) < .99 ? (PW = NW, LW = 0, cW = -mW) : (PW = -EW, LW = mW, cW = 0);
        const wW = Math.hypot(PW, LW, cW);
        iW[0] = PW / wW, iW[1] = LW / wW, iW[2] = cW / wW, OW[0] = EW * iW[2] - NW * iW[1], OW[1] = NW * iW[0] - mW * iW[2], OW[2] = mW * iW[1] - EW * iW[0]
      }(mW, DO, VO);
      const EW = 1 / 32;
      for (const [NW, PW] of [
          [0, DO],
          [4, VO]
        ]) {
        for (let OW = 0; OW < 3; OW++) WW[iW + NW + OW] = PW[OW] * EW;
        WW[iW + NW + 3] = -(PW[0] * OW[0] + PW[1] * OW[1] + PW[2] * OW[2]) * EW
      }
    }
    class fO {
      constructor() {
        this.words = new Uint32Array(vO), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      kZ(WW, iW) {
        this.parts = 0, this.refs = 0, this.view = WW, this.viewAt = iW;
        const OW = WW[iW + 1] * WW[iW + 6] - WW[iW + 2] * WW[iW + 5],
          mW = WW[iW + 2] * WW[iW + 4] - WW[iW] * WW[iW + 6],
          EW = WW[iW] * WW[iW + 5] - WW[iW + 1] * WW[iW + 4],
          NW = Math.hypot(OW, mW, EW) || 1;
        this.light[0] = OW / NW, this.light[1] = mW / NW, this.light[2] = EW / NW
      }
      add(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= uO || ! function(WW, iW, OW) {
            const mW = WW[iW],
              EW = WW[iW + 1],
              NW = WW[iW + 2],
              PW = WW[iW + 3],
              LW = WW[iW + 4],
              cW = WW[iW + 5],
              wW = WW[iW + 6],
              tW = WW[iW + 7],
              ZW = WW[iW + 8],
              xW = WW[iW + 9],
              lW = WW[iW + 10],
              AW = WW[iW + 11],
              bW = WW[iW + 12],
              jW = WW[iW + 13],
              UW = WW[iW + 14],
              kW = WW[iW + 15],
              sW = mW * cW - EW * LW,
              MW = mW * wW - NW * LW,
              KW = mW * tW - PW * LW,
              SW = EW * wW - NW * cW,
              YW = EW * tW - PW * cW,
              yW = NW * tW - PW * wW,
              TW = ZW * jW - xW * bW,
              JW = ZW * UW - lW * bW,
              hW = ZW * kW - AW * bW,
              HW = xW * UW - lW * jW,
              nW = xW * kW - AW * jW,
              uW = lW * kW - AW * UW,
              oW = sW * uW - MW * nW + KW * HW + SW * hW - YW * JW + yW * TW;
            if (!(Math.abs(oW) > 1e-12)) return !1;
            const dW = 1 / oW;
            return OW[0] = (cW * uW - wW * nW + tW * HW) * dW, OW[1] = (NW * nW - EW * uW - PW * HW) * dW, OW[2] = (jW * yW - UW * YW + kW * SW) * dW, OW[3] = (lW * YW - xW * yW - AW * SW) * dW, OW[4] = (wW * hW - LW * uW - tW * JW) * dW, OW[5] = (mW * uW - NW * hW + PW * JW) * dW, OW[6] = (UW * KW - bW * yW - kW * MW) * dW, OW[7] = (ZW * yW - lW * KW + AW * MW) * dW, OW[8] = (LW * nW - cW * hW + tW * TW) * dW, OW[9] = (EW * hW - mW * nW - PW * TW) * dW, OW[10] = (bW * YW - jW * KW + kW * sW) * dW, OW[11] = (xW * KW - ZW * YW - AW * sW) * dW, OW[12] = (cW * JW - LW * HW - wW * TW) * dW, OW[13] = (mW * HW - EW * JW + NW * TW) * dW, OW[14] = (jW * MW - bW * SW - UW * sW) * dW, OW[15] = (ZW * SW - xW * MW + lW * sW) * dW, !0
          }(iW, OW, this.inverse)) return;
        const {
          view: mW,
          viewAt: EW
        } = this, NW = OW;
        let PW = 1 / 0,
          LW = 1 / 0,
          cW = -1 / 0,
          wW = -1 / 0,
          tW = -1 / 0;
        const [ZW, xW, lW] = this.light;
        for (let KW = 0; KW < 8; KW++) {
          const OW = 1 & KW ? WW.hi[0] : WW.lo[0],
            AW = 2 & KW ? WW.hi[1] : WW.lo[1],
            bW = 4 & KW ? WW.hi[2] : WW.lo[2],
            jW = OW * iW[NW] + AW * iW[NW + 4] + bW * iW[NW + 8] + iW[NW + 12],
            UW = OW * iW[NW + 1] + AW * iW[NW + 5] + bW * iW[NW + 9] + iW[NW + 13],
            kW = OW * iW[NW + 2] + AW * iW[NW + 6] + bW * iW[NW + 10] + iW[NW + 14],
            sW = mW[EW] * jW + mW[EW + 1] * UW + mW[EW + 2] * kW + mW[EW + 3],
            MW = mW[EW + 4] * jW + mW[EW + 5] * UW + mW[EW + 6] * kW + mW[EW + 7];
          PW = Math.min(PW, sW), LW = Math.min(LW, MW), cW = Math.max(cW, sW), wW = Math.max(wW, MW), tW = Math.max(tW, ZW * jW + xW * UW + lW * kW)
        }
        if (cW < -1 || wW < -1 || PW >= 1 || LW >= 1) return;
        const AW = this.parts++,
          bW = this.rects;
        bW[4 * AW] = CO(PW), bW[4 * AW + 1] = CO(LW), bW[4 * AW + 2] = CO(cW), bW[4 * AW + 3] = CO(wW);
        const jW = this.inverse,
          {
            cell: UW,
            dims: kW,
            lo: sW
          } = WW,
          MW = eO + AW * oO;
        for (let KW = 0; KW < 3; KW++) this.floats[MW + 4 * KW] = jW[KW] / UW, this.floats[MW + 4 * KW + 1] = jW[4 + KW] / UW, this.floats[MW + 4 * KW + 2] = jW[8 + KW] / UW, this.floats[MW + 4 * KW + 3] = (jW[12 + KW] - sW[KW]) / UW;
        this.words[MW + 12] = WW.at, this.floats[MW + 13] = tW + .001 * (1 + Math.abs(tW)), this.words[MW + 14] = kW[0] | kW[1] << 8 | kW[2] << 16
      }
      finish() {
        const WW = nO,
          {
            counts: iW,
            rects: OW,
            words: mW
          } = this;
        iW.fill(0);
        let EW = 0,
          NW = 0;
        for (; NW < this.parts; NW++) {
          const mW = 4 * NW,
            PW = (OW[mW + 2] - OW[mW] + 1) * (OW[mW + 3] - OW[mW + 1] + 1);
          if (EW + PW > 65536) break;
          EW += PW;
          for (let EW = OW[mW + 1]; EW <= OW[mW + 3]; EW++)
            for (let NW = OW[mW]; NW <= OW[mW + 2]; NW++) iW[EW * WW + NW]++
        }
        let PW = 0;
        for (let cW = 0; cW < 16384; cW++) mW[cW] = PW, PW += iW[cW], iW[cW] = mW[cW];
        mW[16384] = PW;
        for (let cW = 0; cW < NW; cW++) {
          const EW = 4 * cW;
          for (let NW = OW[EW + 1]; NW <= OW[EW + 3]; NW++)
            for (let PW = OW[EW]; PW <= OW[EW + 2]; PW++) mW[dO + iW[NW * WW + PW]++] = cW
        }
        const LW = this.floats;
        for (let cW = 0; cW < 16384; cW++) {
          const WW = dO + mW[cW],
            iW = WW + Math.min(mW[cW + 1] - mW[cW], 64);
          for (let OW = WW + 1; OW < iW; OW++) {
            const iW = mW[OW],
              EW = LW[81934 + iW * oO];
            let NW = OW - 1;
            for (; NW >= WW && LW[81934 + mW[NW] * oO] < EW; NW--) mW[NW + 1] = mW[NW];
            mW[NW + 1] = iW
          }
        }
        this.refs = EW
      }
    }

    function CO(WW) {
      return Math.min(127, Math.max(0, Math.floor((.5 * WW + .5) * nO)))
    }

    function XO(WW, iW, OW, mW, EW) {
      for (let NW = 0; NW < 4; NW++)
        for (let PW = 0; PW < 4; PW++) EW[4 * NW + PW] = WW[iW + 4 * NW] * OW[mW + PW] + WW[iW + 4 * NW + 1] * OW[mW + 4 + PW] + WW[iW + 4 * NW + 2] * OW[mW + 8 + PW] + WW[iW + 4 * NW + 3] * OW[mW + 12 + PW]
    }

    function BO(WW, iW, OW, mW, EW) {
      const NW = WW[0] - iW,
        PW = WW[1] - OW,
        LW = WW[2] - mW,
        cW = WW[3] - iW,
        wW = WW[4] - OW,
        tW = WW[5] - mW,
        ZW = WW[6] - iW,
        xW = WW[7] - OW,
        lW = WW[8] - mW;
      if (Math.min(NW, cW, ZW) > EW || Math.max(NW, cW, ZW) < -EW) return !1;
      if (Math.min(PW, wW, xW) > EW || Math.max(PW, wW, xW) < -EW) return !1;
      if (Math.min(LW, tW, lW) > EW || Math.max(LW, tW, lW) < -EW) return !1;
      const AW = cW - NW,
        bW = wW - PW,
        jW = tW - LW,
        UW = ZW - cW,
        kW = xW - wW,
        sW = lW - tW,
        MW = bW * sW - jW * kW,
        KW = jW * UW - AW * sW,
        SW = AW * kW - bW * UW;
      if (Math.abs(MW * NW + KW * PW + SW * LW) > EW * (Math.abs(MW) + Math.abs(KW) + Math.abs(SW))) return !1;
      const YW = [AW, bW, jW, UW, kW, sW, NW - ZW, PW - xW, LW - lW];
      for (let yW = 0; yW < 3; yW++) {
        const WW = YW[3 * yW],
          iW = YW[3 * yW + 1],
          OW = YW[3 * yW + 2];
        for (let mW = 0; mW < 3; mW++) {
          const AW = 0 === mW ? 0 : 1 === mW ? OW : -iW,
            bW = 0 === mW ? -OW : 1 === mW ? 0 : WW,
            jW = 0 === mW ? iW : 1 === mW ? -WW : 0,
            UW = AW * NW + bW * PW + jW * LW,
            kW = AW * cW + bW * wW + jW * tW,
            sW = AW * ZW + bW * xW + jW * lW,
            MW = EW * (Math.abs(AW) + Math.abs(bW) + Math.abs(jW));
          if (Math.min(UW, kW, sW) > MW || Math.max(UW, kW, sW) < -MW) return !1
        }
      }
      return !0
    }
    const qO = new Float32Array(1);
    new Uint32Array(qO.buffer);
    var RO = OW(39987);

    function GO(WW) {
      const [iW, OW, mW] = RO.t;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${WW.group}) @binding(${WW.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${iW-1}, ${OW-1}, ${mW-1});\n}\n`
    }

    function IO(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [EW, NW, PW] = OO, [LW, cW, wW] = iO, tW = Math.log2(WO), ZW = mW ? "var<private> bloxdSpCrossed: bool;\n" : "", xW = mW ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${WW.group}) @binding(${WW.El}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${WW.group}) @binding(${WW.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${OW?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${ZW}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${KO}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${SO}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${OW?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${YO}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${EW}, ${NW}, ${PW});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${EW} * (s.y + ${NW} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${LW}, ${cW}, ${wW}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${tW}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${LO}u) {\n\t\treturn named && state == ${PO}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${tO}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${xO}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${iW?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${iW?`\t\tif (exits && step > 0 && step % ${zO} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${tW}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${EO}u || kind == ${NO}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${PO}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${tO}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${xW}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const aO = {
      group: 0,
      uniform: 0,
      El: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function rO() {
      const WW = aO;
      return `${GO(WW)}${IO(WW,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${RO.e}>,\n}\n@group(${WW.group}) @binding(${WW.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${WW.group}) @binding(${WW.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${RO.m})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${RO.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${RO.i}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const zO = 2;
    const FO = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function QO(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const mW = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${iW.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        EW = "trace" === OW || "lit" === OW,
        NW = "maskEdge" === OW ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        PW = EW ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${iW.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${iW.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===OW?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${NW};\n`;
      return `${mW}${WW.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${EW?function(){const[WW,iW,OW]=RO.t;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${WW}.0, ${iW}.0, ${OW}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${PW}}\n`:""}${WW.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${iW.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${iW.renderOffset});\n}\n`:""}`
    }
    const Wm = "bloxdSpOwnTexture";

    function im(WW) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${WW.texture}) - 1u)))`
    }
    const Om = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${oi.g.map((WW=>{let[iW,OW]=WW;return`\tbloxdSpOut.${iW} = (bloxdSpWord & ${OW}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function mm(WW) {
      return `bloxdSpFlags(${WW})`
    }
    const Em = `${Fi.j}.eyePosition`;

    function Nm(WW, iW, OW, mW, EW) {
      const NW = WW.indexOf(iW);
      if (NW < 0 || WW.indexOf(iW, NW + 1) >= 0) throw new Error(`Lite's ${EW} program changed at the shader pack ${mW} hook: ${NW<0?"no":"more than one"} anchor (lite/${EW}ShaderPack.ts)`);
      return WW.slice(0, NW) + OW + WW.slice(NW + iW.length)
    }

    function Pm(WW) {
      return WW.sunShadow || WW.airShadow
    }

    function Lm(WW, iW) {
      return iW && Pm(WW)
    }
    const cm = {
      group: Fi.f,
      ...Fi.o
    };

    function wm(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Pm(WW)) return "";
      if (iW) {
        const iW = cm,
          EW = "trace" === OW || "lit" === OW;
        let NW = "";
        WW.sunShadow && (NW = EW ? `${IO(iW,!0,"lit"===OW)}${mW=iW,`@group(${mW.group}) @binding(${mW.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${mW.group}) @binding(${mW.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(WW, iW, OW) {
          const mW = `@group(${WW}) @binding(${iW}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return OW ? `${mW}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${FO}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((WW=>`\t{\n\t\tlet o = vec2i(${WW});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : mW
        }(iW.group, Fi.q, "maskEdge" === OW));
        const PW = {
          shadowDirection: `${Fi.j}.shadowDirection`,
          renderOffset: `${Fi.j}.renderOffset`,
          eyePosition: `${Fi.j}.eyePosition`
        };
        return `${GO(iW)}${NW}${function(WW){const[iW,OW,mW]=RO.t;return`@group(${WW.group}) @binding(${WW.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${WW.group}) @binding(${WW.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${iW}.0, ${OW}.0, ${mW}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(iW)}${QO(WW,PW,OW)}`
      }
      var mW;
      return `${WW.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${WW.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function tm(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!iW) return "";
      const NW = (PW = "fragmentInputs.vPositionW", LW = WW.sunShadow ? {
        normal: OW,
        flags: mW
      } : null, `\n\tbloxdSpShadowPosition = ${PW};\n${LW?`\tbloxdSpShadowNormal = normalize(${LW.normal});\n\tbloxdSpShadowEmissive = (${LW.flags} & ${oi.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${LW.flags} & ${oi.i}u) != 0u;\n`:""}`);
      var PW, LW;
      return WW.sunShadow && ("mask" === EW || "maskEdge" === EW) ? `${NW}${cW="fragmentInputs.position",wW="maskEdge"===EW,`\n\tbloxdSpShadowPixel = vec2i(${cW}.xy);\n${wW?`\tbloxdSpShadowZ = ${cW}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${cW}.z), dpdy(${cW}.z));\n`:""}`}` : NW;
      var cW, wW
    }
    const Zm = "bloxdSpTextureRotation",
      xm = "bloxdSpTextureLayers",
      lm = `@group(${Fi.f}) @binding(${Fi.t}) var<storage, read> ${xm}: array<u32>;\n`;

    function Am(WW) {
      return `\tvertexOutputs.vPackTexture = ${xm}[min(u32(${WW}), arrayLength(&${xm}) - 1u)];\n`
    }

    function bm(WW) {
      return void 0 !== WW.uv
    }

    function jm(WW) {
      if (!WW) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (bm(WW)) return function(WW) {
        const {
          texture: iW,
          cells: OW,
          layers: mW
        } = WW, EW = `textureDimensions(${iW}, bloxdSpLevel)`, NW = OW ? `max(vec2u(vec2f(${EW}) / ${OW}), vec2u(1u))` : EW, PW = OW ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${NW};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${OW}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${OW}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${iW}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${EW} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${NW};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${iW}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let LW;
        if (OW)
          if (1 === mW.length) LW = `\treturn bloxdSpOwnTexel(${mW[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const WW = mW.length - 1;
            LW = `\tvar bloxdSpColour = bloxdSpOwnTexel(${mW[WW]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let iW = WW - 1; iW >= 0; iW--) LW += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${mW[iW]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            LW += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else LW = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${WW.id?`var<private> ${Wm}: u32;\n`:""}${PW}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${im(WW)};\n\treturn ${NW};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${WW.id?Wm:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${im(WW)};\n${LW}}\n`
      }(WW);
      const iW = WW,
        OW = WW => {
          const OW = WW > 0 ? `bloxdSpLayer - ${iW.layers*WW}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${WW}, ${iW.sampler}, bloxdSpTurned, ${OW}, round(bloxdSpMipLevel));`
        };
      let mW = "";
      for (let NW = 0; NW < iW.count - 1; NW++) mW += `\tif (bloxdSpLayer < ${iW.layers*(NW+1)}u) {\n\t\t${OW(NW)}\n\t}\n`;
      const EW = iW.frame ? `${iW.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Zm}: u32;\n${lm}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Zm} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Zm} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Zm} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${EW}${mW}\t${OW(iW.count-1)}\n}\n`
    }

    function Um(WW, iW, OW) {
      return !!WW.surface && "bloxdDefaultSurface" !== WW.surface && function(WW, iW) {
        return "liquid" === iW || !WW
      }(iW, OW)
    }

    function km(WW, iW) {
      return WW.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${iW.vertexLocalPosition}, ${mm(iW.vertexFlags)});\n\t\tlet bloxdSpVertex = ${WW.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function sm(WW, iW, OW, mW, EW) {
      if (!WW.surface) return "";
      const NW = (WW, iW) => `\n\tlet bloxdSpTexelUV = ${WW};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${iW}) - 1u));`;
      let PW = "",
        LW = "0u, 0u, vec2f(0.0), 0.0";
      const cW = mW && bm(mW) ? mW : null,
        wW = mW && !bm(mW) ? mW : null;
      if (cW) {
        PW = `${cW.id?`\n\tlet bloxdSpTexture = ${cW.id};\n\t${Wm} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${cW.uv};${NW(function(WW,iW){var OW;return`${null!==(OW=WW.levelUv)&&void 0!==OW?OW:WW.cells?`${iW} / ${WW.cells}`:iW} * vec2f(textureDimensions(${WW.texture}))`}(cW,"bloxdSpUv"),cW.texture)}`, LW = (cW.id ? `${Wm}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else wW && (PW = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Zm} = bloxdSpTexture >> 16u;${NW(`fragmentInputs.vMainUV1 * ${(0,ai.ob)(wW.width)}`,"textureAtlas0")}`, LW = `bloxdSpTexture & 0xffffu, ${Zm}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const tW = EW.overlayColour,
        ZW = tW ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        xW = "bloxdDefaultSurface" !== WW.surface || tW ? `\n\tbaseColor = vec4f(${ZW}, baseColor.a);` : "",
        lW = Um(WW, iW, OW) ? `\n\t${EW.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${PW}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${EW.alpha}, ${EW.enchantTier}, ${EW.enchantColour}, ${EW.enchantSpeed}, ${null!==tW&&void 0!==tW?tW:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${EW.normal}, ${EW.localPosition}, ${mm(EW.flags)}, ${LW});\n\tlet bloxdSpSurface = ${WW.surface}(bloxdSpSurfaceIn);${xW}${lW}\n`
    }
    const Mm = "bloxdSpLightIn";

    function Km(WW, iW, OW, mW) {
      if (!WW.light) return "";
      const {
        lambert: EW,
        diffuse: NW,
        emissive: PW,
        ambient: LW,
        fogColour: cW,
        fogAlpha: wW,
        normal: tW,
        glow: ZW
      } = mW, xW = [`${ai.n}.rgb`, `${ai.n}.w`, "uniforms.uAmbientLightColour", "uniforms.uSkyLightColour", ai.j], lW = ["vec3f(0.0)", "1.0", "vec3f(1.0)", "vec3f(1.0)", "vec3f(0.0)"];

      function AW(WW, iW) {
        return null === ZW ? WW : `mix(${WW}, ${iW}, ${ZW})`
      }
      const bW = (iW ? xW.map(((WW, iW) => AW(WW, lW[iW]))) : lW).join(", "),
        jW = OW ? AW(EW, "0.0") : "0.0";
      return `\tvar ${Mm} = BloxdLightIn(vec3f(0.0), ${jW}, ${NW}, ${AW(PW,"vec3f(1.0)")}, ${LW}, ${bW}, ${cW}, ${wW}, fragmentInputs.vPositionW, ${tW}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Mm}.litColour = bloxdLitColour(bloxdSpSurface, ${Mm});\n`
    }

    function Sm(WW) {
      return WW.light ? `\n\t{\n\t\tlet bloxdSpLight = ${WW.light}(bloxdSpSurface, ${Mm});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Ym = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      ym = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      Tm = "\treturn color;\n}",
      Jm = {
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
    const hm = Object.freeze({});

    function Hm(WW) {
      var iW;
      return !(null === (iW = (0, Qi.i)(WW)) || void 0 === iW || !iW.sceneDepth)
    }

    function nm(WW) {
      const iW = (0, Qi.i)(WW);
      return !!iW && Um(iW.hooks, iW.strict, iW.program)
    }

    function um(WW, iW, OW, mW) {
      return Nm(WW, iW, OW, mW, "terrain")
    }

    function om(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const NW = function(WW) {
          return (0, Qi.e)(WW.packVariant, WW.liquid ? "liquid" : "terrain")
        }(WW),
        {
          hooks: PW
        } = NW,
        LW = Lm(NW, mW),
        cW = "edge" === EW ? "maskEdge" : "plain" === EW ? "mask" : "trace",
        wW = km(PW, Jm);
      wW && (iW = um(iW, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${wW}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const tW = "atlas" === WW.texture ? {
          count: WW.atlasCount,
          layers: WW.atlasLayers,
          width: WW.N_,
          sampler: "atlasSampler",
          frame: WW.animated ? OW : null
        } : null,
        ZW = `${NW.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${tm(NW,LW,Jm.normal,Jm.flags,cW)}${sm(PW,NW.strict,NW.program,tW,Jm)}`;
      ZW && (iW = um(iW, Ym, `${Ym.slice(0,-1)}${ZW}`, "surface"));
      const xW = Sm(PW);
      return xW && (iW = um(iW, ym, `${Km(PW,WW.lighting,WW.dirLightCount>0,Jm)}${ym}`, "light input"), iW = um(iW, Tm, `${xW.slice(1)}${Tm}`, "light")), `${(0,Fi.z)()}${NW.sceneDepth?`@group(${Fi.f}) @binding(${Fi.m}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Em};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${wm(NW,LW,cW)}${jm(tW)}${Om}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${NW.code}${iW}`
    }
    const dm = SW.e.WGSL;

    function em(WW) {
      return void 0 !== WW.packVariant
    }
    const gm = {
        aEW: 0,
        rEW: 4,
        zEW: 8,
        FEW: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Dm = gm.aoLevels + 4,
      Vm = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      pm = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      fm = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Cm = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Xm = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      Bm = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      qm = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      Rm = 0,
      Gm = 3,
      Im = 4,
      am = 5,
      rm = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${ri.d}, ${ri.d}, corner == 0u || corner == 3u);\n\tlet dv = select(-${ri.d}, ${ri.d}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      zm = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((WW=>zi.c>>WW&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Fm = {
      hZ: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: WW => `animDataPerTex[${WW}]`
    };

    function Qm(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fm;
      return `\n\tlet atlasIdxIn = ${WW};\n\tlet animTick = ${OW.hZ};\n\tlet animTickStride = ${OW.stride};\n\tlet numAnimTextures = ${OW.count};\n\t${(0,YW.c)(SW.e.WGSL,OW.perTexture)}\n\t${iW}animLayer;\n`
    }

    function WE(WW) {
      const iW = (iW, OW) => {
        const mW = iW > 0 ? `fragmentInputs.texAtlasIndex - ${WW.atlasLayers.toFixed(1)} * ${iW.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${OW?"textureSampleLevel":"textureSample"}(textureAtlas${iW}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${mW}))${OW?", atlasLod":""})`
      };
      if (1 === WW.atlasCount) return `baseColor = ${iW(0,!1)};`;
      let OW = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,ai.ob)(WW.N_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let mW = 0; mW < WW.atlasCount; mW++) {
        const EW = WW.atlasLayers * (mW + 1) - .5;
        OW += `${mW>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,ai.ob)(EW)}) {\n\t\tbaseColor = ${iW(mW,!0)};\n\t}`
      }
      return OW
    }

    function iE(WW) {
      return `terrain-${WW.texture}${"atlas"===WW.texture?WW.atlasCount:""}${WW.animated?"-anim":""}${WW.alphaTest?"-test":""}${WW.lighting?"-lit":""}-dir${WW.dirLightCount}${WW.packed?"-packed":""}${em(WW)?`-sp${WW.packVariant}`:""}${WW.liquid?"-liquid":""}${WW.resting?"-rest":""}`
    }

    function OE(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const mW = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const OW = "none" !== WW.texture,
          mW = "atlas" === WW.texture,
          EW = WW.dirLightCount > 0,
          NW = em(WW);
        if (WW.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${WW.dirLightCount}`);
        let PW = 1,
          LW = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (mW) {
          WW.animated && (LW += `@group(2) @binding(${PW++}) var<storage, read> animDataPerTex: array<f32>;\n`), LW += `@group(2) @binding(${PW++}) var atlasSampler: sampler;\n`;
          for (let iW = 0; iW < WW.atlasCount; iW++) LW += `@group(2) @binding(${PW++}) var textureAtlas${iW}: texture_2d_array<f32>;\n`
        } else "single" === WW.texture && (LW += `@group(2) @binding(${PW++}) var diffuseSamplerSampler: sampler;\n`, LW += `@group(2) @binding(${PW++}) var diffuseSampler: texture_2d<f32>;\n`);
        const cW = function(WW) {
            const iW = qm,
              OW = "none" !== WW.texture,
              mW = "atlas" === WW.texture,
              EW = em(WW);
            return WW.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${OW?"uv: vec2f,":""}\n\t${mW?"texAtlasIndices: f32,":""}\n\t${WW.lighting?"aPackedLightLevels: f32,":""}\n\t${EW?"blockFlagWords: vec2u,":""}\n}\n${rm}\n${zm}\n${"single"===WW.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${OW?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===WW.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${mW?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${WW.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${EW?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${iW.position}) position: vec3f,\n\t@location(${iW.normal}) normal: vec4f,\n\t@location(${iW.color}) color: vec4f,\n\t${OW?`@location(${iW.uv}) uv: vec2f,`:""}\n\t${WW.lighting?`@location(${iW.packedLight}) aPackedLightLevels: f32,`:""}\n\t${EW?`@location(${iW.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(WW),
          wW = `\n${Cm}\n${pm}\n${fm}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${LW}\n${ji}\n${cW.declarations}\nstruct Varyings {\n\t${"none"===iW?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${WW.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${EW?"@location(5) vTerrainLambert: f32,":""}\n\t${OW?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${mW?"@location(7) texAtlasIndex: f32,":""}\n\t${WW.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${NW?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${NW&&mW?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${WW.resting?"":(0,ai.v)(dm)}\n${Bm}\n\n@vertex\nfn mainVertex(${cW.parameter}) -> Varyings {\n\t${cW.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${NW?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${oi.d.placed}u;`:""}\n\t${NW&&mW?Am("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${WW.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${OW?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${mW?function(WW){return WW?Qm("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(WW.animated):""}\n\t${"single"===WW.texture&&WW.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,ai.cb)(dm)}\n\t${(0,ai.N)(dm,WW.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${WW.resting?"":Xm}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${mW?WE(WW):""}\n\t${"single"===WW.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${OW?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${WW.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${EW?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${bi}));\n\t${em(WW)?(0,ai.jb)(SW.e.WGSL):(0,ai.V)(dm)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          tW = new Set;
        WW.lighting && tW.add("BLOXD_LIGHTING");
        EW && tW.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Ri(wW, new Map([...tW].map((WW => [WW, !0]))))
      }(WW, OW);
      if (!em(WW)) return mW;
      const EW = om(WW, mW, Qm, iW, OW);
      return "none" === OW ? EW : `${EW}${function(WW){const iW="none"!==WW.texture&&WW.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${WW.resting?"":Xm}\n\t${WW.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${iW&&"atlas"===WW.texture?WE(WW):""}\n\t${iW&&"single"===WW.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${iW?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${oi.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(WW)}`
    }
    const mE = new Map([
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

    function EE(WW, iW) {
      const OW = new Map;
      let mW = 0;
      const EW = [],
        NW = [],
        PW = [];
      for (const wW of iW) {
        var LW, cW;
        const iW = null !== (LW = wW.type.trim().split(/\s+/).pop()) && void 0 !== LW ? LW : wW.type,
          tW = mE.get(iW);
        if (!tW) throw new Error(`Lite: no uniform layout for ${wW.name}: ${wW.type}`);
        const ZW = null !== (cW = wW.arraySize) && void 0 !== cW ? cW : 0,
          xW = ZW ? 4 : tW.align;
        mW = Math.ceil(mW / xW) * xW;
        const lW = ZW ? 4 * Math.ceil(tW.floats / 4) : tW.floats;
        if (OW.set(wW.name, {
            offset: mW,
            floats: tW.floats,
            arraySize: ZW,
            stride: lW
          }), ZW && tW.floats <= 2) {
          const iW = `${WW}_${PW.length}_strided`;
          NW.push(`struct ${iW} {\n\t@size(16) el: ${tW.wgsl},\n}`), PW.push(wW.name), EW.push(`\t@align(16) ${wW.name}: array<${iW}, ${ZW}>,`)
        } else ZW ? EW.push(`\t@align(16) ${wW.name}: array<${tW.wgsl}, ${ZW}>,`) : EW.push(`\t${wW.name}: ${tW.wgsl},`);
        mW += ZW ? lW * ZW : tW.floats
      }
      return {
        slots: OW,
        floats: Math.max(4, 4 * Math.ceil(mW / 4)),
        wgsl: `${NW.join("\n")}\nstruct ${WW} {\n${EW.join("\n")}\n}\n`,
        stridedArrays: PW
      }
    }
    const NE = [{
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
      PE = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      LE = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function cE(WW, iW) {
      return `#if defined(${WW}) && ${WW}DIRECTUV == 0\nvarying v${iW}UV: vec2f;\n#endif`
    }

    function wE(WW, iW, OW) {
      return `#if defined(${WW}) && ${WW}DIRECTUV == 0\nif (uniforms.v${iW}Infos.x==0.)\n{vertexOutputs.v${iW}UV= (uniforms.${OW}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${iW}UV= (uniforms.${OW}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function tE(WW, iW, OW) {
      return `#ifdef ${WW}\n#if ${WW}DIRECTUV == 1\n#define v${iW}UV vMainUV1\n#elif ${WW}DIRECTUV == 2\n#define v${iW}UV vMainUV2\n#else\nvarying v${iW}UV: vec2f;\n#endif\nvar ${OW}SamplerSampler: sampler;\nvar ${OW}Sampler: texture_2d<f32>;\n#endif`
    }
    const ZE = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      xE = 256,
      lE = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      AE = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      bE = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      jE = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      UE = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      kE = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      sE = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      ME = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${AE}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${cE("OPACITY","Opacity")}\n${cE("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${sE}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${bE}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${wE("OPACITY","Opacity","opacity")}\n${wE("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${jE}\n#define CUSTOM_VERTEX_MAIN_END\n${UE}\n}\n`;
    const KE = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${tE("OPACITY","Opacity","opacity")}\n${tE("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${sE}\n${kE}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((WW,iW)=>function(WW){const iW=`
    frame.lights[LITE_LIGHT$ {
        WW
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      WW
    }\
    nvar diffuse$ {
      WW
    }: vec4f = $ {
      iW
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      WW
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      iW
    }.vLightData, diffuse$ {
      WW
    }.rgb, $ {
      iW
    }.vLightSpecular.rgb, diffuse$ {
      WW
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(iW))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, SE = /^([gimus]+)!/, YE = new Set;

    function yE(WW) {
      YE.has(WW) || (YE.add(WW), console.warn(`Lite: no place for plugin code at ${WW} in the standard shader: it is left out`))
    }

    function TE(WW, iW) {
      let OW = WW;
      const mW = new Map;
      for (const [NW, PW] of iW) {
        var EW;
        mW.set(NW, `${null!==(EW=mW.get(NW))&&void 0!==EW?EW:""}${PW}\n`)
      }
      for (const [NW, PW] of mW) {
        if (!NW.startsWith("!")) {
          const WW = `#define ${NW}`;
          if (!OW.includes(WW)) {
            yE(NW);
            continue
          }
          OW = OW.replace(WW, (() => `\n${PW}\n${WW}`));
          continue
        }
        let WW = NW.substring(1),
          iW = "g";
        if (WW.startsWith("!")) iW = "", WW = WW.substring(1);
        else {
          const OW = SE.exec(WW);
          OW && (iW = OW[1], WW = WW.substring(iW.length + 1))
        }
        const mW = new RegExp(WW, iW.includes("g") ? iW : `${iW}g`);
        let EW = mW.exec(OW);
        for (EW || yE(NW); EW;) {
          const WW = EW,
            iW = PW.replace(/\$(\d+)/g, ((iW, OW) => Number(OW) < WW.length ? WW[Number(OW)] : ""));
          OW = OW.substring(0, WW.index) + iW + OW.substring(WW.index + WW[0].length), mW.lastIndex = WW.index + iW.length, EW = mW.exec(OW)
        }
      }
      return OW
    }
    const JE = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      hE = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      HE = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function nE(WW) {
      const iW = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let OW = WW.replace(JE, ((WW, OW, mW, EW, NW, PW) => ("attribute" === OW ? iW.attributes.push({
        name: NW,
        type: PW
      }) : void 0 === OW ? iW.varyings.push({
        name: NW,
        type: PW,
        interpolation: oE(PW, mW, EW)
      }) : iW.uniforms.push({
        name: NW,
        type: uE(PW)
      }), "")));
      return OW = OW.replace(hE, ((WW, OW) => (iW.samplers.add(OW), ""))), OW = OW.replace(HE, ((WW, OW, mW) => (iW.textures.push({
        name: OW,
        type: mW
      }), ""))), iW.body = OW, iW
    }

    function uE(WW) {
      const iW = WW.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        OW = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(iW);
      if (!OW) throw new Error(`Lite: unsupported uniform type ${WW}`);
      return OW
    }

    function oE(WW, iW, OW) {
      return void 0 === iW && void 0 === OW ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(WW.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === iW ? "@interpolate(flat) " : `@interpolate(${null!==iW&&void 0!==iW?iW:"perspective"}, ${null!==OW&&void 0!==OW?OW:"center"}) `
    }

    function dE(WW) {
      return DE({
        defines: WW.defines,
        vertex: TE(ME, WW.vertexCode),
        fragment: TE(KE, WW.fragmentCode),
        members: [...NE, ...WW.defines.has("OPACITY") ? PE : [], ...WW.defines.has("EMISSIVE") ? LE : [], ...WW.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function eE(WW) {
      const iW = WW.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (iW === WW) throw new Error("Lite: fragment main has no return");
      return iW
    }
    const vE = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${AE}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${bE}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${jE}\n${UE}\n}\n`,
      gE = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${kE}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function DE(WW) {
      const iW = WW.defines,
        OW = nE(Ri(WW.vertex, iW)),
        mW = nE(Ri(WW.fragment, iW)),
        EW = new Map;
      for (const sW of [...OW.varyings, ...mW.varyings]) EW.has(sW.name) || EW.set(sW.name, sW);
      const NW = [...EW.values()].map(((WW, iW) => `\t@location(${iW}) ${WW.interpolation}${WW.name}: ${WW.type},`)),
        PW = [...WW.members];
      for (const sW of [...OW.uniforms, ...mW.uniforms]) PW.some((WW => WW.name === sW.name)) || PW.push(sW);
      const LW = EE(WW.structName, PW),
        cW = [],
        wW = [];
      let tW = 1;
      const ZW = new Set;
      for (const sW of [...OW.textures, ...mW.textures]) {
        if (ZW.has(sW.name)) continue;
        ZW.add(sW.name);
        const WW = `${sW.name}Sampler`,
          iW = tW++,
          OW = tW++,
          mW = sW.type.startsWith("texture_2d_array") ? "2d-array" : sW.type.startsWith("texture_cube") ? "cube" : "2d";
        cW.push({
          name: sW.name,
          binding: iW,
          samplerBinding: OW,
          dimension: mW
        }), wW.push(`@group(2) @binding(${iW}) var ${sW.name}: ${sW.type};`), wW.push(`@group(2) @binding(${OW}) var ${WW}: sampler;`)
      }
      for (const sW of [...OW.samplers, ...mW.samplers])
        if (!ZW.has(sW.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${sW} has no texture`);
      const xW = [Cm, lE, LW.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${WW.structName};`, ...wW].join("\n"),
        lW = OW.attributes,
        AW = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...OW.attributes.map(((WW, iW) => `\t@location(${iW}) ${WW.name}: ${WW.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        bW = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...NW, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        jW = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...mW.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...NW, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", ji, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${bi}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        UW = WW => {
          for (const iW of LW.stridedArrays) WW = WW.replace(new RegExp(`\\b${iW}\\s*\\[(.*?)\\]`, "g"), `${iW}[$1].el`);
          return WW
        };
      return {
        vertex: `${xW}\n${AW}\n${bW}\n${UW(OW.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${xW}\n${jW}\n${eE((kW=UW(mW.body),kW.includes("fragmentInputs.position")?kW.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):kW))}`,
        attributes: lW,
        material: LW,
        textures: cW
      };
      var kW
    }
    const VE = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      pE = WW => ({
        name: WW,
        type: "vec3"
      }),
      fE = WW => ({
        name: WW,
        type: "float"
      }),
      CE = EE("EarthSkyUniforms", [pE("viewFrom"), fE("exposureScale"), pE("zenithOffset"), fE("fogOn"), pE("up"), fE("ditherOn"), pE("sun"), fE("turbidity"), pE("tint"), fE("rayleigh"), pE("sunDir"), fE("mieStrength"), pE("inScatterR"), fE("mieFocus"), pE("inScatterM"), fE("sunE"), pE("extinctionBeta"), fE("sunsetMix"), fE("mieScale"), fE("mieBase"), fE("mieSlope"), fE("sunDiscE"), fE("exposure")]),
      XE = `${Cm}\n${lE}\n${CE.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      BE = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${VE.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      qE = `\n${ji}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Ci).map((WW=>{let[iW,OW]=WW;return`const TONE_${iW}: f32 = ${OW};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Xi};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${bi}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var RE = OW(38235);
    const GE = new RE.fA,
      IE = new RE.fA,
      aE = new RE.Quaternion,
      rE = new Float64Array(3),
      zE = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      FE = new Float64Array(16);

    function QE(WW, iW, OW) {
      const mW = OW.worldMatrix;
      var EW;
      WW.updateFloat3("viewFrom", mW[12], mW[13], mW[14]), WW.updateFloatsFrom("zenithOffset", iW.cameraOffset, 0, 3), WW.updateFloatsFrom("up", iW.up, 0, 3), iW.luminance > 0 && (WW.updateFloat("exposure", iW.luminance), WW.updateFloat("exposureScale", (EW = iW.luminance, Math.log2(2 / Math.pow(EW, 4))))), WW.updateFloat("turbidity", iW.turbidity), WW.updateFloat("rayleigh", iW.rayleigh), WW.updateFloat("mieStrength", iW.mieCoefficient), WW.updateFloat("mieFocus", iW.mieDirectionalG), WW.updateFloatsFrom("tint", iW.tint, 0, 3), WW.updateFloat("fogOn", iW.fog && OW.fogEnabled && 0 !== OW.fogMode ? 1 : 0), WW.updateFloat("ditherOn", iW.dithering ? 1 : 0);
      const NW = iW.sunPosition;
      if (GE.set(NW[0], NW[1], NW[2]), !iW.useSunPosition) {
        const WW = Math.PI * (iW.inclination - .5),
          OW = 2 * Math.PI * (iW.azimuth - .5);
        GE.set(iW.distance * Math.cos(OW) * Math.cos(WW), iW.distance * Math.sin(-WW), iW.distance * Math.sin(OW) * Math.cos(WW)), RE.Quaternion.FromUnitVectorsToRef(RE.fA.UpReadOnly, IE.set(iW.up[0], iW.up[1], iW.up[2]), aE), GE.rotateByQuaternionToRef(aE, GE)
      }
      WW.updateVector3("sun", GE), rE[0] = GE.x, rE[1] = GE.y, rE[2] = GE.z;
      const PW = fi(iW, rE, zE);
      WW.updateFloatsFrom("sunDir", PW.sunDir, 0, 3), WW.updateFloat("sunE", PW.sunE), WW.updateFloatsFrom("inScatterR", PW.inScatterR, 0, 3), WW.updateFloatsFrom("inScatterM", PW.inScatterM, 0, 3), WW.updateFloatsFrom("extinctionBeta", PW.extinctionBeta, 0, 3), WW.updateFloat("sunsetMix", PW.sunsetMix), WW.updateFloat("sunDiscE", PW.sunDiscE), WW.updateFloat("mieScale", PW.mieScale), WW.updateFloat("mieBase", PW.mieBase), WW.updateFloat("mieSlope", PW.mieSlope)
    }

    function WN(WW, iW) {
      const OW = FE;
      OW[0] = iW.far, OW[5] = iW.far, OW[10] = iW.far, OW[15] = 1;
      const mW = WW.infiniteDistance;
      for (let EW = 0; EW < 3; EW++) OW[12 + EW] = WW.position[EW] + (mW ? iW.worldMatrix[12 + EW] : 0);
      return FE
    }
    class iN {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(WW, iW, OW, mW, EW) {
        OW !== this.pipeline && (WW.setPipeline(OW), this.pipeline = OW), WW.setBindGroup(1, mW, [EW]);
        const NW = iW.material.bindGroup;
        NW !== this.materialGroup && (WW.setBindGroup(2, NW), this.materialGroup = NW);
        const PW = iW.program.packGroup;
        PW && PW !== this.packGroup && (WW.setBindGroup(Fi.f, PW), this.packGroup = PW);
        const {
          vertexBuffers: LW,
          vertexOffsets: cW
        } = this;
        for (let wW = 0; wW < iW.vertexBuffers.length; wW++) LW[wW] === iW.vertexBuffers[wW] && cW[wW] === iW.vertexOffsets[wW] || (WW.setVertexBuffer(wW, iW.vertexBuffers[wW], iW.vertexOffsets[wW]), LW[wW] = iW.vertexBuffers[wW], cW[wW] = iW.vertexOffsets[wW]);
        iW.indexBuffer && iW.indexBuffer !== this.indexBuffer && (WW.setIndexBuffer(iW.indexBuffer, iW.indexFormat), this.indexBuffer = iW.indexBuffer)
      }
    }
    class ON {
      constructor(WW, iW, OW, mW) {
        this.modelMeshes = WW, this.Y5 = iW, this.maker = OW, this.warnOnce = mW, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (WW, iW) => {
          (iW < -1 || iW > 1) && this.warnOnce(`group:${iW}`, `rendering group ${iW} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(WW) {
        this.collectGroup(WW, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(WW, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(WW, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Y5.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(mN), this.transparentDraws.sort(EN)
      }
      collectGroup(WW, iW, OW, mW, EW) {
        const NW = this.modelMeshes.group(iW),
          PW = this.Y5.group(iW),
          LW = 0 === iW ? null === PW || void 0 === PW ? void 0 : PW.opaque : void 0;
        this.collectList(WW, null === NW || void 0 === NW ? void 0 : NW.opaque, LW || null === PW || void 0 === PW ? void 0 : PW.opaque, iW, !1, OW, EW), LW && (this.Y5.drawn += this.maker.bundleDraws(WW, LW, iW)), this.collectList(WW, null === NW || void 0 === NW ? void 0 : NW.alphaTest, void 0, iW, !1, OW, EW), this.collectList(WW, null === NW || void 0 === NW ? void 0 : NW.transparent, null === PW || void 0 === PW ? void 0 : PW.transparent, iW, !0, mW, EW)
      }
      collectList(WW, iW, OW, mW, EW, NW, PW) {
        var LW;
        const cW = NW.length;
        iW && this.maker.pushDraws(WW, iW.units, iW.units.length, mW, EW, NW, iW.rows), OW && (this.Y5.drawn += this.maker.pushDraws(WW, OW, OW.length, mW, EW, NW));
        const wW = EW ? null === (LW = this.modelMeshes.group(mW)) || void 0 === LW ? void 0 : LW.text : void 0;
        wW && this.maker.pushDraws(WW, wW.units, wW.units.length, mW, !0, NW, wW.rows), PW && NN(NW, cW)
      }
    }

    function mN(WW, iW) {
      return WW.program.id - iW.program.id || WW.material.owner.uniqueId - iW.material.owner.uniqueId
    }

    function EN(WW, iW) {
      return WW.material.owner.uniqueId - iW.material.owner.uniqueId
    }

    function NN(WW, iW) {
      for (let OW = iW + 1; OW < WW.length; OW++) {
        const mW = WW[OW];
        let EW = OW - 1;
        for (; EW >= iW && EN(WW[EW], mW) > 0; EW--) WW[EW + 1] = WW[EW];
        WW[EW + 1] = mW
      }
    }
    const PN = {};

    function LN(WW) {
      return WW.hasThinInstances ? "thin" : WW.QEW || WW._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function cN(WW, iW, OW) {
      return WW ? (OW._needUVs = !0, WW.optimizeUVAllocation && (0, hW.L)(WW.matrix) ? (OW[`${iW}DIRECTUV`] = WW.uvSet + 1, OW[`MAINUV${WW.uvSet+1}`] = !0) : OW[`${iW}DIRECTUV`] = 0, !0) : (OW[`${iW}DIRECTUV`] = 0, !1)
    }

    function wN(WW) {
      const iW = new Map;
      for (const OW in WW) {
        if (95 === OW.charCodeAt(0)) continue;
        const mW = WW[OW],
          EW = typeof mW;
        "number" === EW || "string" === EW ? iW.set(OW, String(mW)) : mW && "function" !== EW && iW.set(OW, !0)
      }
      return iW
    }

    function tN(WW) {
      const iW = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: OW
        }
        of WW.features)
        for (const WW in OW) iW[WW] = OW[WW];
      return iW
    }

    function ZN(WW) {
      const iW = WW.parts.geometry;
      return null !== iW && void 0 !== iW && iW.live ? iW : null
    }

    function xN(WW) {
      var iW;
      return null !== (iW = ZN(WW)) && void 0 !== iW ? iW : PN
    }
    class lN {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = WW, this.warnOnce = iW, this.programWithModel = OW, this.packFailed = mW, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(WW, iW, OW, mW, EW) {
        const NW = iW.owner;
        let PW = this.drawStates.get(iW);
        if (!PW) {
          const WW = iW.parts.materials[iW.range];
          if (!WW) return this.warnOnce("model", `${OW.name} on ${NW.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          PW = {
            defines: tN(WW),
            model: WW,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: EW,
            groupId: mW,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(iW, PW)
        }
        if (this.programCurrent(PW, iW, EW, mW)) return PW.program;
        const {
          model: LW
        } = PW, cW = xN(iW), wW = this.instanceLayout(NW, EW), tW = this.definesBits(NW);
        if (!this.prepareModelDefines(WW, NW, LW, PW.defines, mW, EW)) return null;
        PW.instancing = EW, PW.groupId = mW, PW.modelVersion = LW.version, PW.geometry = cW, PW.instanceLayout = wW, PW.definesBits = tW;
        const ZW = function(WW) {
          let iW = "";
          for (const [OW, mW] of WW) iW += !0 === mW ? `${OW};` : `${OW}=${mW};`;
          return iW
        }(wN(PW.defines));
        return ZW === PW.definesKey && PW.packVariant === this.modelPackVariant && PW.program && !this.packFailed(PW.program) || (PW.definesKey = ZW, PW.packVariant = this.modelPackVariant, PW.program = this.programWithModel(LW, PW.defines, ZW)), PW.program
      }
      programCurrent(WW, iW, OW, mW) {
        return null !== WW.program && !this.packFailed(WW.program) && WW.instancing === OW && WW.groupId === mW && this.definesHold(WW, iW, OW)
      }
      definesHold(WW, iW, OW) {
        return WW.modelVersion === WW.model.version && WW.geometry === xN(iW) && WW.instanceLayout === this.instanceLayout(iW.owner, OW) && WW.definesBits === this.definesBits(iW.owner) && WW.packVariant === this.modelPackVariant
      }
      modelPackKind(WW) {
        var iW;
        return 0 === this.modelPackVariant ? null : null !== (iW = (0, TW.v)(WW, yW.l.name)) && void 0 !== iW && iW.active ? "placed" : WW.item ? "item" : WW.lifeform ? "lifeform" : WW.box ? "box" : null
      }
      instanceLayout(WW, iW) {
        var OW, mW, EW;
        return "thin" === iW ? null !== (EW = this.resources.p_.get(WW)) && void 0 !== EW ? EW : null : "instanced" === iW && null !== (OW = null === (mW = WW._userInstancedBuffersStorage) || void 0 === mW ? void 0 : mW.interleavedKinds) && void 0 !== OW ? OW : null
      }
      definesBits(WW) {
        const iW = this.view;
        return (WW.visibility < 1 ? 1 : 0) | (WW.hasVertexAlpha ? 2 : 0) | (WW.applyFog ? 4 : 0) | (WW.useVertexColors ? 8 : 0) | (WW.nonUniformScaling ? 16 : 0) | (iW.fogEnabled && 0 !== iW.fogMode ? 32 : 0) | (iW.lightsEnabled ? 64 : 0) | iW.lightCount << 7
      }
      prepareLightDefines(WW, iW, OW) {
        let mW = 0;
        if (this.view.lightsEnabled && !iW) {
          const iW = Math.min(OW, 4);
          for (; mW < this.view.lightCount && (WW[`LIGHT${mW}`] = !0, WW[`LITE_LIGHT${mW}_SLOT`] = mW, mW++, WW._needNormals = !0, mW !== iW););
        }
        for (let EW = mW; EW < 4; EW++) WW[`LIGHT${EW}`] = !1, WW[`LITE_LIGHT${EW}_SLOT`] = void 0
      }
      prepareModelDefines(WW, iW, OW, mW, EW, NW) {
        const {
          features: PW
        } = OW;
        mW._needNormals = !1, mW._needUVs = !1;
        const LW = this.view;
        this.prepareLightDefines(mW, OW.disableLighting, OW.maxSimultaneousLights), mW.MAINUV1 = !1, mW.MAINUV2 = !1;
        const cW = OW.diffuseTexture;
        cW ? (mW._needUVs = !0, mW.DIFFUSE = !0, cW.optimizeUVAllocation && (0, hW.L)(cW.matrix) ? (mW.DIFFUSEDIRECTUV = cW.uvSet + 1, mW[`MAINUV${cW.uvSet+1}`] = !0) : mW.DIFFUSEDIRECTUV = 0, cW.uvSet > 1 && this.warnOnce(`uvset:${OW.name}`, `${OW.name} samples UV set ${cW.uvSet+1}, which is not supported`)) : (mW.DIFFUSE = !1, mW.DIFFUSEDIRECTUV = 0);
        const wW = OW.opacityTexture,
          tW = OW.emissiveTexture;
        mW.OPACITY = cN(wW, "OPACITY", mW), mW.OPACITYRGB = null !== wW && wW.getAlphaFromRGB, mW.EMISSIVE = cN(tW, "EMISSIVE", mW), (wW && wW.uvSet > 1 || tW && tW.uvSet > 1) && this.warnOnce(`uvset:${OW.name}`, `${OW.name} samples a UV set past 2, which is not supported`);
        const ZW = OW.reflectionTexture,
          xW = null !== ZW;
        if (xW) {
          if (!this.resources.boundTexture(ZW)) return !1;
          mW._needNormals = !0
        }
        mW.REFLECTION = xW, mW.REFLECTIONMAP_3D = xW, mW.REFLECTIONMAP_SKYBOX = xW, mW.REFLECTIONMAP_OPPOSITEZ = xW && (WW.useRightHandedSystem ? !ZW.invertZ : ZW.invertZ), mW.ROUGHNESS = xW && OW.roughness > 0, mW.REFLECTIONOVERALPHA = xW && OW.useReflectionOverAlpha, mW.LITE_REFLECTION_LUMINANCE = xW && "cube" === ZW.source.kind && ZW.source.luminance, (iW.skeleton || iW.morphTargetManager) && this.warnOnce(`skin:${iW.name}`, `${iW.name} has bones or morph targets, which are not supported`), mW.FOG = OW.fogEnabled && iW.applyFog && LW.fogEnabled && 0 !== LW.fogMode, mW.NONUNIFORMSCALING = iW.nonUniformScaling;
        const {
          visibility: lW,
          hasVertexAlpha: AW
        } = iW;
        mW.ALPHATEST = (0, TW.Y)(OW, lW, AW), mW.ALPHAFROMDIFFUSE = (0, TW.jb)(OW), mW.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== OW.transparencyMode, mW.ALPHABLEND = null === OW.transparencyMode || (0, TW.W)(OW, lW, AW), mW.PREMULTIPLYALPHA = 7 === OW.alphaMode || 8 === OW.alphaMode, mW.EMISSIVEASILLUMINATION = OW.useEmissiveAsIllumination, mW.LINKEMISSIVEWITHDIFFUSE = OW.linkEmissiveWithDiffuse, mW.TWOSIDEDLIGHTING = !OW.backFaceCulling && OW.twoSidedLighting, mW.INSTANCES = "none" !== NW, mW.THIN_INSTANCES = "thin" === NW, mW.LITE_FRONT_LAYER = EW >= 1;
        for (const {
            feature: YW,
            state: yW,
            active: TW
          }
          of PW) {
          var bW, jW;
          if (TW) null === (bW = (jW = (0, ei.i)(YW)).prepareDefinesBeforeAttributes) || void 0 === bW || bW.call(jW, yW, mW, WW, iW)
        }
        this.modelPackKind(OW) && (mW._needNormals = !0), mW.NORMAL = mW._needNormals && iW.isVerticesDataPresent("normal"), mW.UV1 = mW._needUVs && iW.isVerticesDataPresent("uv"), mW.UV2 = mW._needUVs && iW.isVerticesDataPresent("uv2");
        const UW = iW.useVertexColors && iW.isVerticesDataPresent("color");
        mW.VERTEXCOLOR = UW, mW.VERTEXALPHA = iW.hasVertexAlpha && UW, mW.INSTANCESCOLOR = "none" !== NW && iW.isVerticesDataPresent("instanceColor");
        for (const {
            feature: YW,
            state: yW,
            active: TW
          }
          of PW) {
          var kW, sW;
          if (TW) null === (kW = (sW = (0, ei.i)(YW)).prepareDefines) || void 0 === kW || kW.call(sW, yW, mW, WW, iW, OW)
        }
        const MW = WW.VA();
        for (const {
            feature: YW,
            state: yW,
            active: TW
          }
          of PW) {
          var KW, SW;
          if (TW && !1 === (null === (KW = (SW = (0, ei.i)(YW)).isReadyForSubMesh) || void 0 === KW ? void 0 : KW.call(SW, yW, mW, WW, MW))) return !1
        }
        return !0
      }
    }

    function AN(WW, iW, OW) {
      return WW.codeVersion !== iW.version && function(WW, iW) {
        const OW = [],
          mW = [];
        for (const {
            feature: xW,
            state: lW,
            active: AW
          }
          of iW.features) {
          var EW, NW, PW, LW;
          if (AW) bN(null === (EW = (NW = (0, ei.i)(xW)).getCustomCode) || void 0 === EW ? void 0 : EW.call(NW, lW, "vertex", SW.e.WGSL), OW), bN(null === (PW = (LW = (0, ei.i)(xW)).getCustomCode) || void 0 === PW ? void 0 : PW.call(LW, lW, "fragment", SW.e.WGSL), mW)
        }
        const cW = [];
        for (const {
            feature: xW,
            state: lW
          }
          of iW.features) {
          var wW, tW;
          const WW = null === (wW = (tW = (0, ei.i)(xW)).getUniforms) || void 0 === wW ? void 0 : wW.call(tW, lW, SW.e.WGSL);
          for (const iW of null !== (ZW = null === WW || void 0 === WW ? void 0 : WW.ubo) && void 0 !== ZW ? ZW : []) {
            var ZW;
            iW.size && iW.type && cW.push({
              name: iW.name,
              type: iW.type,
              arraySize: iW.arraySize
            })
          }
        }
        WW.vertexCode = OW, WW.fragmentCode = mW, WW.pluginUniforms = cW, WW.codeKey = JSON.stringify([OW, mW, cW]), WW.codeVersion = iW.version
      }(WW, iW), `${OW}#${WW.codeKey}`
    }

    function bN(WW, iW) {
      if (WW)
        for (const OW in WW) WW[OW] && iW.push([OW, WW[OW]])
    }
    const jN = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class UN {
      constructor(WW) {
        this.warnOnce = WW, this.states = new Map
      }
      renderState(WW, iW, OW, mW) {
        var EW;
        let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          PW = null !== (EW = WW.sideOrientation) && void 0 !== EW ? EW : iW.sideOrientation;
        iW._getWorldMatrixDeterminant() < 0 && (PW = 0 === PW ? 1 : 0);
        const LW = "triangle-list" === NW,
          cW = OW ? WW.alphaMode : 0,
          wW = (!OW || (0 === cW || WW.forceDepthWrite)) && !WW.disableDepthWrite,
          tW = LW && WW.backFaceCulling ? WW.cullBackFaces ? "back" : "front" : "none",
          ZW = LW && 0 !== PW ? "ccw" : "cw",
          xW = WW.depthFunction,
          lW = LW ? WW.zOffset : 0,
          AW = LW ? WW.zOffsetUnits : 0,
          bW = !WW.disableColorWrite;
        return mW && mW.alphaMode === cW && mW.depthWrite === wW && mW.depthFunction === xW && mW.cullMode === tW && mW.frontFace === ZW && mW.zOffset === lW && mW.zOffsetUnits === AW && mW.colourWrite === bW && mW.topology === NW ? mW : this.stateFor(cW, wW, xW, tW, ZW, lW, AW, bW, NW)
      }
      stateFor(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = `${WW}|${iW}|${OW}|${mW}|${EW}|${NW}|${PW}|${LW}|${cW}`;
        let tW = this.states.get(wW);
        if (!tW) {
          var ZW;
          const xW = WW ? Ni(WW) : null;
          WW && !xW && this.warnOnce(`alpha:${WW}`, `alpha mode ${WW} is not supported`), tW = {
            key: wW,
            alphaMode: WW,
            depthFunction: OW,
            zOffset: NW,
            zOffsetUnits: PW,
            topology: cW,
            blend: xW,
            depthWrite: iW,
            depthCompare: OW && null !== (ZW = jN.get(OW)) && void 0 !== ZW ? ZW : null,
            cullMode: mW,
            frontFace: EW,
            depthBias: -PW,
            depthBiasSlopeScale: -NW,
            colourWrite: LW
          }, this.states.set(wW, tW)
        }
        return tW
      }
    }
    var kN = OW(38518);

    function sN(WW) {
      if (!WW.frozen) return -1;
      let iW = WW.version;
      for (const {
          feature: OW,
          state: mW,
          active: EW
        }
        of WW.features) {
        if (!EW || !OW.bind) continue;
        const WW = (0, ei.i)(OW).uniformsVersion;
        if (!WW) return -1;
        iW += WW(mW)
      }
      return iW
    }
    class MN {
      constructor(WW, iW, OW) {
        this.slots = WW, this.data = iW, this.textures = OW, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(WW, iW) {
        this.write4(WW, iW, 0, 0, 0, 1)
      }
      updateFloat2(WW, iW, OW) {
        this.write4(WW, iW, OW, 0, 0, 2)
      }
      updateFloat3(WW, iW, OW, mW) {
        this.write4(WW, iW, OW, mW, 0, 3)
      }
      updateFloat4(WW, iW, OW, mW, EW) {
        this.write4(WW, iW, OW, mW, EW, 4)
      }
      updateVector3(WW, iW) {
        this.write4(WW, iW.x, iW.y, iW.z, 0, 3)
      }
      updateVector4(WW, iW) {
        this.write4(WW, iW.x, iW.y, iW.z, iW.w, 4)
      }
      updateColor3(WW, iW) {
        this.write4(WW, iW.r, iW.g, iW.b, 0, 3)
      }
      updateColor4(WW, iW, OW) {
        this.write4(WW, iW.r, iW.g, iW.b, OW, 4)
      }
      updateFloatsFrom(WW, iW, OW, mW) {
        const EW = this.slots.get(WW);
        if (!EW) return;
        const NW = this.data,
          PW = EW.offset;
        for (let LW = 0; LW < mW; LW++) NW[PW + LW] = iW[OW + LW]
      }
      updateFloat3TimesFloats(WW, iW, OW, mW) {
        const EW = this.slots.get(WW);
        if (!EW) return;
        const NW = this.data,
          PW = EW.offset;
        NW[PW] = iW[OW] * mW[0], NW[PW + 1] = iW[OW + 1] * mW[1], NW[PW + 2] = iW[OW + 2] * mW[2]
      }
      tWW(WW, iW) {
        const OW = this.slots.get(WW);
        OW && this.data.set(iW.m, OW.offset)
      }
      updateMatrixFloats(WW, iW) {
        const OW = this.slots.get(WW);
        OW && this.data.set(iW, OW.offset)
      }
      updateFloatArray(WW, iW) {
        const OW = this.slots.get(WW);
        if (!OW) return;
        if (!OW.arraySize || OW.stride === OW.floats) return void this.data.set(iW, OW.offset);
        const mW = Math.min(iW.length, OW.floats * OW.arraySize);
        for (let EW = 0; EW < mW; EW++) this.data[OW.offset + Math.floor(EW / OW.floats) * OW.stride + EW % OW.floats] = iW[EW]
      }
      updateArray(WW, iW) {
        this.updateFloatArray(WW, iW)
      }
      setTexture(WW, iW) {
        this.textures.set(WW, iW), this.expected.delete(WW)
      }
      expectTexture(WW) {
        this.textures.set(WW, null), this.expected.add(WW)
      }
      write4(WW, iW, OW, mW, EW, NW) {
        const PW = this.slots.get(WW);
        if (!PW) return;
        const LW = this.data,
          cW = PW.offset;
        LW[cW] = iW, NW > 1 && (LW[cW + 1] = OW), NW > 2 && (LW[cW + 2] = mW), NW > 3 && (LW[cW + 3] = EW)
      }
    }

    function KN(WW, iW) {
      const OW = ZE,
        mW = kN.f,
        EW = WW.lights,
        NW = Math.min(WW.lightCount, 8);
      for (let PW = 0; PW < NW; PW++) {
        const WW = OW.lights + PW * OW.lightStride,
          NW = PW * kN.b;
        iW[WW] = EW[NW + mW.vector], iW[WW + 1] = EW[NW + mW.vector + 1], iW[WW + 2] = EW[NW + mW.vector + 2], iW[WW + 3] = EW[NW + mW.kind] === kN.d.directional ? 1 : 0, iW[WW + 4] = EW[NW + mW.diffuse], iW[WW + 5] = EW[NW + mW.diffuse + 1], iW[WW + 6] = EW[NW + mW.diffuse + 2], iW[WW + 7] = EW[NW + mW.range], iW[WW + 8] = EW[NW + mW.specular], iW[WW + 9] = EW[NW + mW.specular + 1], iW[WW + 10] = EW[NW + mW.specular + 2], iW[WW + 11] = EW[NW + mW.range]
      }
      iW[OW.fogInfos] = WW.fogMode, iW[OW.fogInfos + 1] = WW.fogStart, iW[OW.fogInfos + 2] = WW.fogEnd, iW[OW.fogInfos + 3] = WW.fogDensity, iW[OW.fogColour] = WW.fogColour[0], iW[OW.fogColour + 1] = WW.fogColour[1], iW[OW.fogColour + 2] = WW.fogColour[2], iW[OW.outputHeight] = WW.renderHeight, iW[OW.animTick] = WW.animTick, iW[OW.timeMs] = WW.timeMs
    }
    class SN {
      constructor(WW) {
        this.instancesOf = WW
      }
      refreshModelUniforms(WW, iW, OW, mW) {
        const EW = sN(OW);
        if (EW >= 0 && EW === iW.heldVersion && iW.textures.get("diffuseSampler") === OW.diffuseTexture && iW.textures.get("reflectionCubeSampler") === OW.reflectionTexture && iW.textures.get("opacitySampler") === OW.opacityTexture && iW.textures.get("emissiveSampler") === OW.emissiveTexture) return !0;
        if (EW < 0)
          for (const NW of this.instancesOf(OW)) NW.heldVersion = -1;
        return this.writeModelUniforms(WW, iW, OW, mW), iW.heldVersion = EW, !1
      }
      writeModelUniforms(WW, iW, OW, mW) {
        const {
          ubo: EW
        } = iW, NW = OW.diffuseTexture, PW = OW.diffuseColor;
        EW.updateFloat4("vDiffuseColor", PW[0], PW[1], PW[2], OW.alpha), NW && (EW.updateFloat2("vDiffuseInfos", NW.uvSet, NW.level), EW.updateMatrixFloats("diffuseMatrix", NW.matrix)), EW.updateFloat("alphaCutOff", OW.alphaCutOff), EW.updateFloatsFrom("vEmissiveColor", OW.emissiveColor, 0, 3), EW.updateFloat3TimesFloats("vAmbientColor", mW.ambientColour, 0, OW.ambientColor);
        const LW = OW.specularColor;
        EW.updateFloat4("vSpecularColor", LW[0], LW[1], LW[2], OW.specularPower), EW.setTexture("diffuseSampler", NW);
        const cW = OW.opacityTexture;
        cW && (EW.updateFloat2("vOpacityInfos", cW.uvSet, cW.level), EW.updateMatrixFloats("opacityMatrix", cW.matrix)), EW.setTexture("opacitySampler", cW);
        const wW = OW.emissiveTexture;
        wW && (EW.updateFloat2("vEmissiveInfos", wW.uvSet, wW.level), EW.updateMatrixFloats("emissiveMatrix", wW.matrix)), EW.setTexture("emissiveSampler", wW);
        const tW = OW.reflectionTexture;
        tW && EW.updateMatrixFloats("reflectionMatrix", tW.matrix), EW.updateFloat2("vReflectionInfos", tW ? tW.level * WW.iblIntensity : 0, OW.roughness), EW.setTexture("reflectionCubeSampler", tW);
        const ZW = WW.VA();
        for (const {
            feature: AW,
            state: bW,
            active: jW
          }
          of OW.features) {
          var xW, lW;
          if (jW) null === (xW = (lW = (0, ei.i)(AW)).bind) || void 0 === xW || xW.call(lW, bW, EW, WW, ZW)
        }
      }
    }

    function YN(WW) {
      const iW = WW.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(iW) ? "u32" : /i32|^vec\di$/.test(iW) ? "i32" : "f32"
    }

    function yN(WW, iW) {
      const OW = WW.getSize(),
        mW = YN(iW),
        EW = WW => 4 === OW ? `${WW}x4` : 2 === OW ? `${WW}x2` : null;
      if ("f32" === mW) {
        if (5126 === WW.type) return 1 === OW ? "float32" : OW >= 2 && OW <= 4 ? `float32x${OW}` : null;
        if (!WW.normalized) return null;
        switch (WW.type) {
          case 5121:
            return EW("unorm8");
          case 5120:
            return EW("snorm8");
          case 5123:
            return EW("unorm16");
          case 5122:
            return EW("snorm16")
        }
        return null
      }
      const NW = "u32" === mW ? "uint" : "sint";
      switch (WW.type) {
        case 5125:
        case 5124:
          return 1 === OW ? `${NW}32` : OW <= 4 ? `${NW}32x${OW}` : null;
        case 5121:
        case 5120:
          return EW(`${NW}8`);
        case 5123:
        case 5122:
          return EW(`${NW}16`)
      }
      return null
    }

    function TN(WW) {
      var iW;
      const OW = /(8|16|32)(?:x(\d))?$/.exec(WW);
      return OW ? Number(OW[1]) / 8 * Number(null !== (iW = OW[2]) && void 0 !== iW ? iW : 1) : 4
    }
    class JN {
      constructor(WW, iW, OW) {
        this.resources = WW, this.limits = iW, this.warnOnce = OW, this.layouts = new Map
      }
      resolveInputs(WW, iW, OW, mW) {
        const EW = [],
          NW = OW.program.attributes,
          PW = [];
        for (let tW = 0; tW < NW.length; tW++) {
          const OW = NW[tW],
            LW = OW.optional ? null : this.resources.vertexInput(WW, OW.name, mW);
          if (!LW) {
            const WW = YN(OW.type),
              iW = "u32" === WW ? "uint32x4" : "i32" === WW ? "sint32x4" : "float32x4";
            PW.push(null);
            const mW = EW.find((WW => null === WW.data));
            mW ? mW.attributes.push({
              shaderLocation: tW,
              offset: 0,
              format: iW
            }) : EW.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: tW,
                offset: 0,
                format: iW
              }]
            });
            continue
          }
          const cW = LW.getBuffer();
          PW.push(LW);
          const wW = yN(LW, OW.type);
          if (!wW) return this.warnOnce(`format:${iW}:${OW.name}`, `${iW}'s ${OW.name} (type ${LW.type}, size ${LW.getSize()}) has no WebGPU vertex format`), null;
          const ZW = LW.getIsInstanced() ? "instance" : "vertex",
            xW = LW.byteStride,
            lW = TN(wW),
            AW = EW.find((WW => WW.data === cW && WW.stride === xW && WW.step === ZW && LW.byteOffset >= WW.base && LW.byteOffset - WW.base + lW <= xW));
          AW ? AW.attributes.push({
            shaderLocation: tW,
            offset: LW.byteOffset - AW.base,
            format: wW
          }) : EW.push({
            data: cW,
            base: LW.byteOffset,
            stride: xW,
            step: ZW,
            attributes: [{
              shaderLocation: tW,
              offset: 0,
              format: wW
            }]
          })
        }
        if (EW.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${iW}`, `${iW} needs ${EW.length} vertex buffers`), null;
        let LW = "";
        for (const tW of EW) {
          LW += `${tW.stride}${"instance"===tW.step?"i":"v"}`;
          for (const WW of tW.attributes) LW += `,${WW.shaderLocation}:${WW.offset}:${WW.format}`;
          LW += ";"
        }
        let cW = this.layouts.get(LW);
        cW || (cW = {
          key: LW,
          buffers: EW.map((WW => ({
            arrayStride: WW.stride,
            stepMode: WW.step,
            attributes: WW.attributes
          }))),
          instanceEnds: EW.map((WW => {
            let iW = -1;
            if ("instance" === WW.step)
              for (const OW of WW.attributes) iW = Math.max(iW, OW.offset + TN(OW.format));
            return iW
          }))
        }, this.layouts.set(LW, cW));
        const wW = EW.map((WW => WW.base));
        return {
          program: OW,
          sources: PW,
          layout: cW,
          slotData: EW.map((WW => WW.data)),
          B5: wW,
          buffers: [],
          offsets: wW,
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

    function hN(WW, iW, OW, mW) {
      const EW = iW.program.program.attributes;
      for (let NW = 0; NW < EW.length; NW++) {
        if ((EW[NW].optional ? null : OW.vertexInput(WW, EW[NW].name, mW)) !== iW.sources[NW]) return !1
      }
      return !0
    }
    const HN = 64;
    class nN {
      constructor(WW, iW, OW, mW) {
        this.device = WW, this.layout = iW, this.frameBuffer = OW, this.label = mW, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(WW) {
        if (WW * HN <= this.data.length) return !1;
        let iW = 2 * this.data.length;
        for (; WW * HN > iW;) iW *= 2;
        const OW = new Float32Array(iW);
        return OW.set(this.data), this.data = OW, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const EW = this.data,
          NW = WW * HN;
        let PW = EW[NW + 16] !== OW;
        for (let LW = 0; LW < 16 && !PW; LW++) PW = EW[NW + LW] !== iW[mW + LW];
        if (PW) {
          for (let WW = 0; WW < 16; WW++) EW[NW + WW] = iW[mW + WW];
          EW[NW + 16] = OW
        }
        return PW
      }
      upload(WW, iW) {
        this.device.queue.writeBuffer(this.buffer, WW * xE, this.data, WW * HN, (iW - WW) * HN)
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

    function uN(WW) {
      return WW.gpu[hW.g.lite] ??= WW.materials.map(((iW, OW) => ({
        parts: WW,
        range: OW,
        owner: WW.owner
      })))
    }

    function oN(WW) {
      var iW, OW, mW;
      return null !== (iW = null !== (OW = null === (mW = WW.parts.materials[WW.range]) || void 0 === mW ? void 0 : mW.mirror) && void 0 !== OW ? OW : WW.owner.material) && void 0 !== iW ? iW : null
    }
    const dN = ["opaque", "alphaTest", "transparent", "text"];

    function eN(WW) {
      for (const iW of dN) WW[iW].units.length = 0, WW[iW].rows.length = 0
    }
    class vN {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, di.b)("Lite: ")
      }
      attach(WW, iW) {
        this.model = WW, this.mirror = iW
      }
      get worlds() {
        return this.model.nodes.oZ
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(WW) {
        return this.groups.get(WW)
      }
      forEachGroup(WW) {
        this.groups.forEach(WW)
      }
      forEachSelected(WW) {
        for (const [iW, OW] of this.groups)
          for (const mW of dN)
            for (const EW of OW[mW].units) WW(EW.owner, "text" === mW ? "transparent" : mW, iW)
      }
      select(WW, iW) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(eN);
        const {
          model: OW,
          mirror: mW
        } = this;
        if (!OW || !mW || !WW) return;
        this.rows.length < OW.nodes.aZ && (this.rows = new Int32Array(OW.nodes.aZ));
        const EW = this.rows,
          NW = OW.meshes;
        for (let LW = 0; LW < NW.looseCount; LW++) {
          const WW = NW.loose[LW],
            OW = mW.nodes[WW];
          OW && !OW.isBlocked && OW.isEnabled() && !OW.YZ.hasAZeroComponent && NW.selects(WW, iW.frustum) && (this.activate(OW, WW), this.selectedCount++)
        }
        const PW = NW.selectTextPlanes(iW.frustum, EW);
        for (let LW = 0; LW < PW; LW++) {
          const iW = EW[LW],
            NW = mW.nodes[iW],
            PW = OW.meshes.parts[iW];
          if (!NW.isVisible || !(NW.visibility > 0) || 0 === (NW.layerMask & WW.layerMask) || !PW) continue;
          const cW = this.groupOf(OW.meshes.layer[iW]).text;
          for (const WW of uN(PW)) cW.units.push(WW), cW.rows.push(iW);
          this.selectedCount++
        }
      }
      instanceBatch(WW) {
        const iW = this.batchOf(WW);
        return iW.dispatched || (iW.dispatched = iW.renderSelf = !0, iW.row = this.rowOf(WW)), iW
      }
      rowOf(WW) {
        return WW.row
      }
      activate(WW, iW) {
        if (!WW.KD) {
          const OW = WW;
          if (OW.QEW) {
            const WW = this.batchOf(OW);
            WW.dispatched = !0, WW.renderSelf = !0, WW.row = iW
          }
          return void this.dispatch(OW, iW, iW)
        }
        const OW = WW,
          mW = OW.WNW;
        if (mW._getWorldMatrixDeterminant() >= 0 !== OW._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${mW.name}`, `A mirrored InstancedMesh of ${mW.name} is not drawn yet`);
        const EW = this.batchOf(mW);
        EW.instances.push(OW), EW.rows.push(iW), EW.dispatched || (EW.dispatched = !0, this.dispatch(mW, iW, this.rowOf(mW)))
      }
      batchOf(WW) {
        let iW = this.batches.get(WW);
        return iW || (iW = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(WW, iW)), iW.frame !== this.frame && (iW.frame = this.frame, iW.dispatched = !1, iW.renderSelf = !1, iW.instances.length = 0, iW.rows.length = 0), iW
      }
      dispatch(WW, iW, OW) {
        const {
          layer: mW,
          parts: EW
        } = this.model.meshes;
        if (!EW[iW]) return;
        const NW = this.groupOf(mW[iW]),
          PW = WW;
        for (const LW of uN(EW[iW])) {
          const WW = oN(LW);
          if (!WW) continue;
          const iW = WW.needAlphaBlendingForMesh(PW) ? NW.transparent : WW.needAlphaTestingForMesh(PW) ? NW.alphaTest : NW.opaque;
          iW.units.push(LW), iW.rows.push(OW)
        }
      }
      groupOf(WW) {
        let iW = this.groups.get(WW);
        return iW || (iW = {
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
        }, this.groups.set(WW, iW)), iW
      }
    }

    function gN(WW) {
      WW.opaque.length = 0, WW.transparent.length = 0
    }
    class DN {
      constructor() {
        this.BL = new Map, this.enabled = [], this.groups = new Map, this.EZ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(WW) {
        if (this.BL.has(WW)) return;
        const iW = {
          mesh: WW,
          observer: WW.onEffectiveEnabledStateChangedObservable.add((WW => {
            this.WK(iW, WW)
          })),
          index: -1,
          steady: null
        };
        this.BL.set(WW, iW), this.WK(iW, WW.isEnabled())
      }
      remove(WW) {
        const iW = this.BL.get(WW);
        iW && (iW.observer.remove(!0), this.WK(iW, !1), this.BL.delete(WW))
      }
      dropSteady() {
        for (const WW of this.BL.values()) WW.steady = null
      }
      base(WW) {
        return this.BL.get(WW)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          BL: this.BL.size
        }
      }
      forEachSelected(WW) {
        for (const [iW, OW] of this.groups) {
          for (const mW of OW.opaque) WW(mW.owner, "opaque", iW);
          for (const mW of OW.transparent) WW(mW.owner, "transparent", iW)
        }
        for (const iW of this.EZ) WW(iW.mesh, "opaque", 0)
      }
      group(WW) {
        return this.groups.get(WW)
      }
      forEachGroup(WW) {
        this.groups.forEach(WW)
      }
      select(WW, iW) {
        if (this.drawn = 0, this.selected = 0, this.EZ.length = 0, this.groups.forEach(gN), !WW) return;
        const OW = this.enabled;
        for (let mW = 0; mW < OW.length; mW++) {
          const EW = OW[mW];
          if (EW.steady && iW(EW, WW)) {
            this.selected++, this.EZ.push(EW);
            continue
          }
          const NW = EW.mesh;
          if (NW.isBlocked || NW.YZ.hasAZeroComponent) continue;
          if (!NW.isVisible || NW.visibility <= 0 || 0 === (NW.layerMask & WW.layerMask)) continue;
          if (NW.QEW) {
            this.warned.has(NW.name) || (this.warned.add(NW.name), console.warn(`Lite: thin instance base ${NW.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: PW
          } = NW;
          if (!PW) continue;
          NW.computeWorldMatrix(), this.selected++;
          const LW = this.listsFor(NW.renderingGroupId);
          for (const WW of uN(PW)) {
            const iW = oN(WW);
            iW && (iW.needAlphaBlendingForMesh(NW) ? LW.transparent.push(WW) : LW.opaque.push(WW))
          }
        }
      }
      WK(WW, iW) {
        if (iW === WW.index >= 0) return;
        WW.steady = null;
        const OW = this.enabled;
        if (iW) WW.index = OW.length, OW.push(WW);
        else {
          const iW = OW.pop();
          iW !== WW && (OW[WW.index] = iW, iW.index = WW.index), WW.index = -1
        }
      }
      listsFor(WW) {
        let iW = this.groups.get(WW);
        return iW || (iW = {
          opaque: [],
          transparent: []
        }, this.groups.set(WW, iW)), iW
      }
    }
    var VN = OW(40933);
    class pN {
      constructor() {
        this.bundle = null, this.stale = !0, this.BL = new Set
      }
    }
    class fN {
      constructor(WW, iW, OW) {
        this.device = WW, this.slots = iW, this.host = OW, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new pN, this.ZH = new pN, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new iN, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = WW => {
          WW.seen !== this.frame && (WW.draw && (WW.draw = null, this.args[5 * WW.slot + 1] = 0, this.argsDirty = !0, this.ZH.stale ||= WW.ZH), this.frame - WW.seen > 120 && (this.records.delete(WW.unit), this.freeSlots.push(WW.slot), WW.recorded && (this.bundleOf(WW).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(WW) {
          var iW, OW;
          let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (iW = null === (OW = globalThis.navigator) || void 0 === OW ? void 0 : OW.userAgent) && void 0 !== iW ? iW : "";
          const EW = WW.adapterInfo;
          return "intel" === (null === EW || void 0 === EW ? void 0 : EW.vendor) && "gen-12lp" === EW.architecture && mW.includes("Windows")
        }(WW), (0, VN.E)(this.direct)
      }
      AY() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, VN.E)(this.directThisFrame)
      }
      add(WW, iW, OW, mW) {
        let EW = this.records.get(WW);
        return EW || (EW = this.createRecord(WW), this.records.set(WW, EW)), EW.recorded && XN(EW, iW) || (this.bundleOf(EW).stale = !0), this.place(EW, iW, OW, mW), EW
      }
      bundleOf(WW) {
        return WW.ZH ? this.ZH : this.main
      }
      addAgain(WW, iW, OW, mW) {
        WW.recorded || (this.bundleOf(WW).stale = !0), this.place(WW, iW, OW, mW)
      }
      place(WW, iW, OW, mW) {
        WW.seen = this.frame, WW.ZH && null === WW.draw && (this.ZH.stale = !0), WW.draw = iW, this.drawn++, OW && this.slots.write(WW.slot, OW, mW) && (this.slotsFrom = Math.min(this.slotsFrom, WW.slot), this.slotsTo = Math.max(this.slotsTo, WW.slot));
        const EW = this.args,
          NW = 5 * WW.slot;
        EW[NW] === iW.count && EW[NW + 1] === iW.instances && EW[NW + 2] === iW.first || (EW[NW] = iW.count, EW[NW + 1] = iW.instances, EW[NW + 2] = iW.first, this.argsDirty = !0, this.ZH.stale ||= WW.ZH)
      }
      SZ() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(WW) {
        for (const iW of this.records.values()) iW.draw && iW.seen === this.frame && !iW.ZH && WW(iW.draw, this.slots.data, iW.slot * xE / 4)
      }
      resourceDestroyed(WW) {
        this.main.stale ||= this.main.BL.has(WW), this.ZH.stale ||= this.ZH.BL.has(WW)
      }
      execute(WW, iW, OW) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(WW, iW, OW, "direct"), this.drawn;
        const mW = this.host.sceneGroup(iW);
        if (!mW) return this.main.bundle = null, this.ZH.bundle = null, this.recordedSceneGroup = null, this.encode(WW, iW, OW, "direct"), this.drawn;
        this.recordedTarget === OW && this.recordedSceneGroup === mW || (this.recordedTarget = OW, this.recordedSceneGroup = mW, this.main.stale = !0, this.ZH.stale = !0);
        const EW = this.main,
          NW = this.ZH;
        let PW = !1;
        !EW.stale && EW.bundle || (EW.bundle = this.record(iW, OW, mW, "indirect"), PW = !0);
        const LW = (0, VN.i)();
        return (NW.stale || this.rangedEpoch !== LW) && (this.rangedEpoch = LW, NW.bundle = this.drawsRanged() ? this.record(iW, OW, mW, "ZH") : this.noRangedBundle(), PW = !0), PW && (this.bundles = NW.bundle ? [EW.bundle, NW.bundle] : [EW.bundle]), WW.executeBundles(this.bundles), WW.setBindGroup(0, mW), this.drawn
      }
      record(WW, iW, OW, mW) {
        const EW = this.device.createRenderBundleEncoder({
          label: "ZH" === mW ? "thin-bases-ranged" : "thin-bases",
          colorFormats: WW._colorFormat ? [WW._colorFormat] : [],
          depthStencilFormat: WW._depthStencilFormat,
          sampleCount: WW._sampleCount
        });
        return EW.setBindGroup(0, OW), this.encode(EW, WW, iW, mW), EW.finish()
      }
      noRangedBundle() {
        for (const WW of this.records.values()) WW.ZH && (WW.recorded = !1);
        return this.ZH.BL.clear(), this.ZH.stale = !1, null
      }
      drawsRanged() {
        for (const WW of this.records.values())
          if (WW.ZH && WW.draw) return !0;
        return !1
      }
      encode(WW, iW, OW, mW) {
        const EW = [];
        for (const cW of this.records.values()) "direct" !== mW && cW.ZH !== ("ZH" === mW) || (cW.recorded = !1, cW.draw && EW.push(cW));
        EW.sort(BN);
        const NW = "direct" === mW ? null : "ZH" === mW ? this.ZH : this.main;
        null === NW || void 0 === NW || NW.BL.clear(), this.binder.reset();
        let PW = !1;
        for (const cW of EW) {
          var LW;
          const EW = cW.draw,
            wW = this.host.pipelineFor(EW, iW, OW);
          if (!wW) {
            this.host.pipelineCompiling(EW, OW) ? PW = !0 : NW && this.keep(cW, EW, NW.BL);
            continue
          }
          let tW;
          if (cW.ZH && "indirect" !== mW) {
            const WW = cW.unit.owner;
            tW = "direct" === mW && (0, VN.p)(WW) || (0, VN.k)(WW) || void 0
          }
          if (NW && this.keep(cW, EW, NW.BL), 0 === (null === (LW = tW) || void 0 === LW ? void 0 : LW.count)) continue;
          this.binder.bind(WW, EW, wW, this.slots.bindGroup, cW.slot * xE);
          const ZW = 5 * cW.slot;
          if ("indirect" === mW) {
            EW.indexBuffer ? WW.drawIndexedIndirect(this.argsBuffer, 4 * ZW) : WW.drawIndirect(this.argsBuffer, 4 * ZW);
            continue
          }
          const xW = this.args;
          tW ? CN(WW, null !== EW.indexBuffer, xW, ZW, tW) : EW.indexBuffer ? WW.drawIndexed(xW[ZW], xW[ZW + 1], xW[ZW + 2], 0, 0) : WW.draw(xW[ZW], xW[ZW + 1], xW[ZW + 2], 0)
        }
        NW && (NW.stale = PW)
      }
      keep(WW, iW, OW) {
        WW.recorded = !0, WW.pipelineKey = iW.pipelineKey, WW.materialGroup = iW.material.bindGroup, WW.vertexBuffers.length = 0, WW.vertexBuffers.push(...iW.vertexBuffers), WW.vertexOffsets = iW.vertexOffsets, WW.indexBuffer = iW.indexBuffer, WW.indexFormat = iW.indexFormat;
        for (const mW of iW.vertexBuffers) OW.add(mW);
        iW.indexBuffer && OW.add(iW.indexBuffer), OW.add(iW.material.buffer);
        for (const mW of iW.material.bound) mW && OW.add(mW)
      }
      createRecord(WW) {
        let iW = this.freeSlots.pop();
        return void 0 === iW && (iW = this.slotCount++, this.grow()), {
          unit: WW,
          slot: iW,
          ZH: void 0 !== (0, VN.k)(WW.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.ZH.stale = !0), 5 * this.slotCount > this.args.length) {
          const WW = new Uint32Array(2 * this.args.length);
          WW.set(this.args), this.args = WW, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function CN(WW, iW, OW, mW, EW) {
      const NW = OW[mW + 1],
        PW = EW.data;
      for (let LW = 0; LW < EW.count; LW++) {
        const EW = Math.min(PW[2 * LW], NW),
          cW = Math.min(PW[2 * LW + 1], NW - EW);
        0 !== cW && (iW ? WW.drawIndexed(OW[mW], cW, OW[mW + 2], 0, EW) : WW.draw(OW[mW], cW, OW[mW + 2], EW))
      }
    }

    function XN(WW, iW) {
      if (WW.pipelineKey !== iW.pipelineKey || WW.materialGroup !== iW.material.bindGroup || WW.indexBuffer !== iW.indexBuffer || WW.indexFormat !== iW.indexFormat || WW.vertexOffsets !== iW.vertexOffsets || WW.vertexBuffers.length !== iW.vertexBuffers.length) return !1;
      for (let OW = 0; OW < WW.vertexBuffers.length; OW++)
        if (WW.vertexBuffers[OW] !== iW.vertexBuffers[OW]) return !1;
      return !0
    }

    function BN(WW, iW) {
      return mN(WW.draw, iW.draw)
    }
    const qN = new WeakMap,
      RN = {
        depth: !1,
        sunShadow: !1
      };

    function GN(WW, iW) {
      let OW = qN.get(WW);
      OW || (OW = new Map, qN.set(WW, OW));
      const mW = `${iW.depth?"-depth":""}${iW.sunShadow?"-shadow":""}${iW.shadowMask?"-mask":""}`;
      let EW = OW.get(mW);
      if (!EW) {
        const NW = [{
          binding: Fi.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Fi.g
          }
        }, {
          binding: Fi.t,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        iW.depth && NW.push({
          binding: Fi.m,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), iW.sunShadow && NW.push(... function() {
          const WW = GPUShaderStage.FRAGMENT,
            iW = Fi.o;
          return [{
            binding: iW.uniform,
            visibility: WW,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: iW.El,
            visibility: WW,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: iW.special,
            visibility: WW,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: iW.volume,
            visibility: WW,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: iW.sampler,
            visibility: WW,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: iW.entities,
            visibility: WW,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: iW.entityGrids,
            visibility: WW,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), iW.shadowMask && NW.push({
          binding: Fi.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), EW = WW.createBindGroupLayout({
          label: `${iW.depth?"terrain-":""}shader-pack-inputs${mW}`,
          entries: NW
        }), OW.set(mW, EW)
      }
      return EW
    }

    function IN(WW) {
      return GN(WW, RN)
    }

    function aN(WW, iW) {
      if (!iW) return !1;
      const OW = (0, Qi.i)(WW);
      return !!OW && Lm(OW, iW)
    }

    function rN(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!em(iW)) return [];
      return [GN(WW, {
        depth: Hm(iW.packVariant),
        sunShadow: aN(iW.packVariant, OW),
        shadowMask: mW
      })]
    }
    class zN {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = WW, this.sunShadow = OW, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Fi.g), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = WW.createBuffer({
          label: "shader-pack-inputs",
          size: Fi.g,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const mW = (0, Fi.x)(iW);
        this.textures = WW.createBuffer({
          label: "shader-pack-textures",
          size: mW.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), WW.queue.writeBuffer(this.textures, 0, mW), this.bindGroup = WW.createBindGroup({
          label: "shader-pack-inputs",
          layout: IN(WW),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Fi.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Fi.t,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(WW, iW, OW) {
        (0, Fi.D)(this.data, {
          seconds: WW.seconds(),
          lit: OW,
          renderOffset: WW.renderOffset(),
          vWW: WW.vWW(),
          eyePosition: iW,
          shadowDirection: WW.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const mW = iW ? this.sunShadow : null;
        if ((iW || OW) && !mW) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!WW && !mW) return this.bindGroup;
        (WW && WW !== this.depthView || OW && OW !== this.maskView) && (this.depthView = null !== WW && void 0 !== WW ? WW : this.depthView, this.maskView = null !== OW && void 0 !== OW ? OW : this.maskView, this.groups.clear());
        const EW = (WW ? 1 : 0) | (mW ? 2 : 0) | (OW ? 4 : 0);
        let NW = this.groups.get(EW);
        if (!NW) {
          const iW = this.entries();
          WW && iW.push({
            binding: Fi.m,
            resource: WW
          }), mW && iW.push(...mW.entries()), OW && iW.push({
            binding: Fi.q,
            resource: OW
          }), NW = this.device.createBindGroup({
            label: `${WW||OW?"terrain-":""}shader-pack-inputs${WW?"-depth":""}${mW?"-shadow":""}${OW?"-mask":""}`,
            layout: GN(this.device, {
              depth: !!WW,
              sunShadow: !!mW,
              shadowMask: !!OW
            }),
            entries: iW
          }), this.groups.set(EW, NW)
        }
        return NW
      }
      bind(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        WW.setBindGroup(Fi.f, this.bindGroupFor(iW, OW, mW))
      }
    }

    function FN(WW, iW, OW) {
      if (WW.gpuVersion === iW.gpuBuffersVersion) return !0;
      let mW;
      do {
        if (mW = iW.gpuBuffersVersion, !QN(WW, iW, OW)) return !1
      } while (iW.gpuBuffersVersion !== mW);
      return WW.gpuVersion = mW, WW.fitInstances = 0, !0
    }

    function QN(WW, iW, OW) {
      let mW = null;
      for (let NW = 0; NW < WW.slotData.length; NW++) {
        var EW;
        const PW = WW.slotData[NW],
          LW = PW ? iW.gpuBuffer(PW) : OW;
        if (!LW) return !1;
        PW && WW.layout.instanceEnds[NW] < 0 && iW.cover(PW, Number.POSITIVE_INFINITY), WW.buffers[NW] = LW;
        const cW = WW.B5[NW] + (PW ? iW.gpuOffset(PW) : 0);
        cW !== (null !== (EW = mW) && void 0 !== EW ? EW : WW.offsets)[NW] && (mW ??= WW.offsets.slice(), mW[NW] = cW), WW.ends[NW] = PW ? iW.gpuEnd(PW) : LW.size
      }
      return mW && (WW.offsets = mW), !0
    }

    function WP(WW, iW, OW, mW) {
      if (iW <= WW.fitInstances) return null;
      const {
        layout: EW,
        ends: NW,
        offsets: PW,
        slotData: LW,
        B5: cW
      } = WW;
      let wW = !1;
      for (let tW = 0; tW < EW.buffers.length; tW++) {
        const WW = EW.instanceEnds[tW];
        if (WW < 0) continue;
        const mW = (iW - 1) * EW.buffers[tW].arrayStride + WW;
        if (NW[tW] - PW[tW] < mW) return {
          index: tW,
          needed: mW
        };
        const ZW = LW[tW];
        ZW && OW.cover(ZW, cW[tW] + mW) && (wW = !0)
      }
      return wW && FN(WW, OW, mW), WW.fitInstances = iW, null
    }
    var iP = OW(38995),
      OP = OW(39025);
    const mP = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      EP = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      NP = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      PP = `((vertexInputs.aPackedLightLevels >> 16u) | ${oi.d.placed}u)`,
      LP = "u32(vertexInputs.aShaderPackItem.x)",
      cP = `${oi.d.lifeform}u`;

    function wP(WW) {
      return "item" === WW.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const tP = "bloxdSpEnchant",
      ZP = "floor(finalWorld[3].xyz)";

    function xP(WW, iW, OW) {
      return "placed" === iW.kind && WW.reads[OW].includes("bloxdFragmentBlockPosition")
    }

    function lP(WW, iW) {
      let [OW, mW] = WW;
      return OW === iW.point && mW === iW.code
    }

    function AP(WW, iW) {
      var OW;
      return null === (OW = WW.find((WW => WW[iW]))) || void 0 === OW ? void 0 : OW[iW]
    }

    function bP(WW, iW) {
      const OW = AP(WW, "texture"),
        mW = AP(WW, "enchantTier"),
        EW = AP(WW, "glow"),
        NW = AP(WW, "overlay"),
        PW = NW ? iW.filter((WW => lP(WW, NW))).length : 0;
      return NW && 1 === PW ? {
        texture: OW,
        overlay: NW,
        enchantTier: mW,
        glow: EW
      } : {
        texture: OW,
        enchantTier: mW,
        glow: EW
      }
    }

    function jP(WW) {
      if ("item" === WW.kind) {
        return {
          vertexFlags: `(${LP} & 0xffffu)`,
          varying: "vPackItem",
          value: LP,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return WW.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: PP,
        varying: "vPackFlags",
        value: PP,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function UP(WW) {
      return "lifeform" === WW.kind ? cP : "0u"
    }

    function kP(WW) {
      return !!WW.BLOXD_PLUGIN_ENCHANTMENT
    }

    function sP(WW, iW) {
      const {
        enchantTier: OW
      } = iW;
      return OW && kP(iW.defines) && "lifeform" === iW.kind && TP(WW, "enchantTier") ? OW : null
    }

    function MP(WW, iW) {
      return kP(iW.defines) && TP(WW, "enchantSpeed")
    }

    function KP(WW) {
      const {
        overlay: iW,
        defines: OW
      } = WW;
      if (!iW || !OW.DIFFUSE) return null;
      const mW = OW.VERTEXCOLOR || OW.INSTANCESCOLOR && OW.INSTANCES;
      return `vec4f(${iW.colour}.rgb * uniforms.vDiffuseInfos.y${mW?" * fragmentInputs.vColor.rgb":""}, ${iW.colour}.a)`
    }
    const SP = "fragmentInputs.vPackTexture";

    function YP(WW) {
      const {
        atlas: iW,
        defines: OW,
        texture: mW
      } = WW;
      if (iW || !OW.DIFFUSE) return null;
      if (mW) return {
        texture: "diffuseSampler",
        ...mW
      };
      const EW = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===OW.DIFFUSEDIRECTUV?"vMainUV1":2===OW.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== WW.kind) return EW;
      if (!OW.BLOXD_PLUGIN_ANIMATED) return {
        ...EW,
        id: SP
      };
      const NW = SW.e.WGSL,
        PW = (0, SW.Ib)(NW, "uAnimStatesNum"),
        LW = (0, SW.hb)(NW, (0, iP.f)(NW), PW),
        cW = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${PW})`,
        layers: [LW],
        uv: `vec2f(${cW}.x, ${cW}.y * ${PW} - ${LW})`,
        levelUv: cW,
        id: SP
      }
    }

    function yP(WW, iW) {
      return "box" === iW.kind && !!WW.hooks.surface && null !== YP(iW)
    }

    function TP(WW, iW) {
      return WW.reads.fragment.includes(iW)
    }

    function JP(WW) {
      return !!WW.BLOXD_LIGHTING && !WW.BLOXD_UNLIT
    }

    function hP(WW, iW, OW, mW) {
      const EW = WW.filter((WW => {
        let [OW, mW] = WW;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === OW && mW === iW
      }));
      if (1 !== EW.length) throw new Error(`A model program for shader packs has ${0===EW.length?"no":"more than one"} ${mW} code before fog (lite/modelShaderPack.ts)`);
      return WW.map((WW => WW === EW[0] ? [WW[0], OW] : WW))
    }

    function HP(WW, iW, OW, mW) {
      const {
        hooks: EW
      } = WW, {
        kind: NW,
        defines: PW
      } = iW, LW = [...OW];
      var cW;
      iW.atlas && EW.surface && LW.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Am("atlasIdxIn")]), "item" === NW && LW.push(["CUSTOM_VERTEX_DEFINITIONS", (0, SW.g)(SW.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), yP(WW, iW) && LW.push(["CUSTOM_VERTEX_DEFINITIONS", (0, SW.g)(SW.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (cW = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${xm}[min(u32(${cW}) - 1u, arrayLength(&${xm}) - 1u)], ${cW} > 0.5);\n`)]);
      const wW = jP(iW);
      wW && (EW.surface || EW.light) && LW.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${wW.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${wW.varying} = ${wW.value};`]);
      let tW = mW;
      if (xP(WW, iW, "fragment") && (LW.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${ZP});`]), tW = [...tW, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), TP(WW, "localPosition") && LW.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${wP(iW)};`]), kP(PW) && EW.surface) {
        MP(WW, iW) && LW.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const OW = sP(WW, iW);
        OW && LW.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${OW});`]);
        const mW = (0, SW.ub)(SW.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        tW = [...hP(tW, (0, OP.g)(SW.e.WGSL), mW, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, OP.b)(tP)]]
      }
      const {
        overlay: ZW
      } = iW;
      ZW && KP(iW) && EW.surface && (tW = tW.filter((WW => !lP(WW, ZW))));
      const xW = EW.light ? function(WW) {
        return "placed" === WW.kind ? {
          name: "terrain",
          engine: (0, ai.V)(SW.e.WGSL),
          pack: (0, ai.jb)(SW.e.WGSL)
        } : WW.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, ai.P)(SW.e.WGSL),
          pack: (0, ai.gb)(SW.e.WGSL)
        } : null
      }(iW) : null;
      if (xW && (tW = hP(tW, xW.engine, xW.pack, `${xW.name} light`), "placed" !== NW && JP(PW))) {
        const WW = PW.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, SW.Ib)(SW.e.WGSL, "uEntityLightLevels") : (0, SW.Pb)(SW.e.WGSL, "aLightLevels");
        LW.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${ai.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, ai.hb)(SW.e.WGSL, WW)])
      }
      return {
        vertexCode: LW,
        fragmentCode: tW
      }
    }

    function nP(WW, iW, OW, mW) {
      return Nm(WW, iW, OW, mW, "model")
    }
    const uP = "\t@builtin(position) position: vec4f,\n";

    function oP(WW, iW) {
      const OW = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(WW)[0];
      return `${OW}${iW}${WW.slice(OW.length)}`
    }

    function dP(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: EW
      } = iW, NW = Lm(iW, mW), {
        kind: PW,
        defines: LW
      } = OW, cW = function(WW, iW) {
        var OW, mW, EW, NW;
        const {
          defines: PW
        } = iW, LW = jP(iW), cW = !!PW.FOG, wW = kP(PW), tW = null !== (OW = null === LW || void 0 === LW ? void 0 : LW.enchantTier) && void 0 !== OW ? OW : sP(WW, iW) ? "fragmentInputs.vPackEnchantTier" : "0u", ZW = "lifeform" === iW.kind && !PW.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (mW = null === LW || void 0 === LW ? void 0 : LW.vertexFlags) && void 0 !== mW ? mW : UP(iW),
          vertexLocalPosition: wP(iW),
          flags: null !== (EW = null === LW || void 0 === LW ? void 0 : LW.flags) && void 0 !== EW ? EW : UP(iW),
          normal: "normalW",
          alpha: ZW ? "alpha * baseColor.a" : "alpha",
          alphaOut: ZW ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: cW ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: cW ? "1.0 - fog" : "0.0",
          enchantTier: tW,
          enchantColour: wW ? `${tP}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: MP(WW, iW) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: TP(WW, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: KP(iW),
          glow: null !== (NW = iW.glow) && void 0 !== NW ? NW : null
        }
      }(iW, OW), wW = WW.textures.filter((WW => /^textureAtlas\d+$/.test(WW.name))).length, tW = OW.atlas && wW > 0 ? {
        count: wW,
        layers: OW.atlas.layers,
        width: OW.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: WW.material.slots.has("uAnimDataPerTex") ? (iW, OW) => Qm(iW, OW, function(WW) {
          const iW = WW.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            hZ: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: WW => `uniforms.uAnimDataPerTex[${WW}]${iW}`
          }
        }(WW)) : null
      } : null, ZW = "placed" === PW ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", xW = null !== tW && void 0 !== tW ? tW : YP(OW), lW = function(WW, OW) {
        let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Fi.z)()}${wm(iW,OW)}${mW}${jm(WW)}${Om}${ZW}${iW.code}`
      };
      let {
        vertex: AW,
        fragment: bW
      } = WW;
      const jW = km(EW, cW);
      if (jW) {
        const WW = xP(iW, OW, "vertex") ? `\tbloxdSpCell = ${ZP};\n` : "";
        AW = nP(AW, mP, `${WW}${jW.slice(1)}${mP}`, "vertex")
      }
      const UW = `${tm(iW,NW,function(WW,iW){return iW.TWOSIDEDLIGHTING?WW:`select(-(${WW}), ${WW}, fragmentInputs.frontFacing)`}(cW.normal,LW),cW.flags)}${sm(EW,iW.strict,iW.program,xW,cW)}`;
      UW && (bW = nP(bW, EP, `${UW.slice(1)}${EP}`, "surface")), NW && iW.sunShadow && !LW.TWOSIDEDLIGHTING && (bW = nP(bW, uP, `${uP}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const kW = Sm(EW);
      if (kW) {
        const WW = Km(EW, JP(LW), !0, cW);
        bW = nP(bW, NP, `${WW}${kW.slice(1)}${NP}`, "light")
      }
      const sW = yP(iW, OW) ? lm : "";
      return {
        ...WW,
        vertex: oP(AW, lW(tW, !1, sW)),
        fragment: oP(bW, lW(xW, NW))
      }
    }
    const eP = {
      name: "earthSky",
      uniqueId: -1
    };
    class vP {
      constructor(WW, iW) {
        this.resources = WW, this.epoch = iW, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const WW of this.instances.values()) WW.released = !0, this.resources.destroyBuffer(WW.buffer);
        this.instances.clear()
      }
    }

    function gP(WW) {
      return WW.failed && null !== WW.packGroup
    }
    class DP {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new DN,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new vN;
        this.device = WW, this.resources = iW, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Y5 = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new iN, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new SN((WW => this.modelSlot(WW).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, di.b)("Lite: "), this.renderStates = new UN(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (WW, iW) => this.keepSteady(WW, iW), this.lists = void 0, this.slotCount = 0, this.Y5 = mW, this.modelMeshes = EW, this.lists = new ON(EW, mW, this, this.warnOnce), this.drawDefines = new lN(iW, this.warnOnce, ((WW, iW, OW) => this.programWithModel(WW, iW, OW)), gP), this.vertexLayouts = new JN(iW, WW.limits, this.warnOnce), this.sceneLayout = Yi(WW), this.frameLayout = WW.createBindGroupLayout({
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
        }), this.frameBuffer = WW.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new nN(WW, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = WW.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new fN(WW, new nN(WW, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (WW, iW, OW) => this.pipelineFor(WW, iW, OW),
          pipelineCompiling: (WW, iW) => !WW.program.failed && !1 !== this.pipelines.get(`${WW.pipelineKey}|${iW}`),
          sceneGroup: WW => {
            const iW = OW(WW);
            return iW || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), iW
          }
        }), iW.onDestroy = WW => {
          this.thinBundle.resourceDestroyed(WW)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const EW = {
          order: WW,
          isTransparent: iW,
          _direct: !iW,
          bind: (WW, iW) => this.createBinding(EW, iW, OW, mW)
        };
        return EW
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(WW, iW, OW) {
        var mW;
        let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = iW, this.drawDefines.view = iW, this.thinBundle.AY(), this.writeFrameUniforms();
        const NW = null !== (mW = null === EW || void 0 === EW ? void 0 : EW.defineFor("model")) && void 0 !== mW ? mW : 0;
        this.drawDefines.modelPackVariant = NW, EW && 0 !== NW && (this.packInputs ??= new zN(this.device, EW.textureLayers(), this.sunShadow), this.packInputs.write(EW, iW.eye, EW.qb())), this.lists.clear(), this.slotCount = 0;
        const PW = WW.activeCamera;
        this.Y5.select(PW, this.keepSteadyBase), this.modelMeshes.select(PW, iW), OW && this.pushEarthSky(OW), this.lists.collect(WW), this.thinBundle.SZ(), this.uploadMeshSlots()
      }
      pushDraws(WW, iW, OW, mW, EW, NW) {
        let PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const LW = NW.length;
        for (let cW = 0; cW < OW; cW++) {
          const OW = iW[cW];
          let LW = this.retainedDraw(WW, OW, mW, EW);
          if (void 0 === LW && (LW = this.drawFor(WW, OW, mW, EW), this.retain(OW, LW)), LW) {
            const WW = OW.owner,
              iW = PW ? PW[cW] : -1;
            LW.slotOffset = iW < 0 ? this.writeMeshSlot(WW.getWorldMatrix().m, WW.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[iW], 16 * iW), NW.push(LW)
          }
        }
        return NW.length - LW
      }
      bundleDraws(WW, iW, OW) {
        let mW = 0;
        for (const EW of iW) {
          let iW = this.retainedDraw(WW, EW, OW, !1);
          const NW = void 0 !== iW;
          if (void 0 === iW && (iW = this.drawFor(WW, EW, OW, !1), this.retain(EW, iW)), iW) {
            const WW = EW.owner,
              OW = this.thinBundle.add(EW, iW, WW.getWorldMatrix().m, WW.visibility);
            NW && this.steadyFrom(EW, iW, OW), mW++
          }
        }
        return mW
      }
      steadyFrom(WW, iW, OW) {
        const mW = WW.owner,
          EW = this.Y5.base(mW),
          NW = mW.material,
          {
            drawState: PW,
            instance: LW
          } = iW.inputs.retained;
        if (!EW || !NW || 1 !== WW.parts.materials.length || oN(WW) !== NW) return;
        const cW = EW.steady ??= {
          unit: WW,
          material: NW,
          visibility: 1,
          draw: iW,
          record: OW,
          drawState: PW,
          instance: LW,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        cW.unit = WW, cW.material = NW, cW.visibility = mW.visibility, cW.draw = iW, cW.record = OW, cW.drawState = PW, cW.instance = LW, cW.bindGroup = LW.bindGroup, cW.gpuVersion = this.resources.gpuBuffersVersion, cW.fitInstances = iW.inputs.fitInstances, cW.worldFlag = mW.getWorldMatrix().updateFlag, cW.handedFrame = this.frame
      }
      keepSteady(WW, iW) {
        const OW = WW.steady;
        if (OW.handedFrame !== this.frame - 1 || (this.frame + OW.phase) % 8 === 0) return !1;
        const mW = WW.mesh,
          {
            unit: EW,
            draw: NW,
            instance: PW,
            drawState: LW
          } = OW,
          cW = mW.forcedInstanceCount || mW.OWW;
        if (!mW.isVisible || mW.QEW || mW.visibility !== OW.visibility || 0 === (mW.layerMask & iW.layerMask) || mW.material !== OW.material || 0 !== mW.renderingGroupId || mW.hasVertexAlpha || !this.drawDefines.definesHold(LW, EW, LW.instancing) || OW.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(NW.inputs, EW, LW.instancing, NW.program) || NW.program.failed || PW.released || cW <= 0 || cW > OW.fitInstances) return !1;
        if (PW.frame !== this.frame && this.bindMaterial(PW, this.modelUniforms.refreshModelUniforms(mW.bD(), PW, PW.model, this.view)), !PW.bindable || PW.bindGroup !== OW.bindGroup) return !1;
        const wW = mW.computeWorldMatrix(),
          tW = wW.updateFlag !== OW.worldFlag;
        return OW.worldFlag = wW.updateFlag, NW.instances = cW, this.thinBundle.addAgain(OW.record, NW, tW ? wW.m : null, OW.visibility), OW.handedFrame = this.frame, this.Y5.drawn++, !0
      }
      retainedDraw(WW, iW, OW, mW) {
        const EW = this.inputs.get(iW),
          NW = null === EW || void 0 === EW ? void 0 : EW.retained;
        if (!EW || !NW) return;
        const {
          drawState: PW,
          program: LW,
          instance: cW,
          instancing: wW
        } = NW, tW = iW.owner;
        if (LN(tW) !== wW) return;
        const ZW = this.instanceCount(tW, wW);
        if (ZW <= 0) return null;
        if (cW.released || LW.failed || PW.program !== LW || !this.drawDefines.programCurrent(PW, iW, wW, OW) || !this.inputsStamped(EW, iW, wW, LW) || tW.isUnIndexed !== NW.unIndexed || this.indexKey(iW) !== NW.indexData) return;
        if (NW.indexBuffer && NW.gpuVersion !== this.resources.gpuBuffersVersion) {
          const WW = this.resources.gpuBuffer(NW.indexData);
          if (!WW) return;
          NW.indexBuffer = WW, NW.gpuVersion = this.resources.gpuBuffersVersion
        }
        let xW = !1;
        if (cW.frame !== this.frame && (xW = this.modelUniforms.refreshModelUniforms(WW, cW, cW.model, this.view)), !this.bindMaterial(cW, xW) || !this.withGpuBuffers(EW) || !this.instanceBuffersFit(tW.name, EW, ZW)) return null;
        const lW = this.makeDraw(LW, EW, this.renderStates.renderState(PW.model, tW, mW, EW.state), cW, ZW);
        return this.setRange(lW, iW, NW.indexBuffer, NW.indexData), lW
      }
      retain(WW, iW) {
        const OW = this.drawDefines.drawStates.get(WW);
        if (!iW || !OW || OW.program !== iW.program) {
          const iW = this.inputs.get(WW);
          return void(iW && (iW.retained = null))
        }
        const mW = WW.owner,
          EW = OW.instancing,
          NW = this.indexKey(WW),
          PW = iW.inputs.retained;
        PW ? (PW.drawState = OW, PW.instancing = EW, PW.program = iW.program, PW.instance = iW.material, PW.indexData = NW, PW.unIndexed = mW.isUnIndexed, PW.indexBuffer = iW.indexBuffer, PW.gpuVersion = this.resources.gpuBuffersVersion) : iW.inputs.retained = {
          drawState: OW,
          instancing: EW,
          program: iW.program,
          instance: iW.material,
          indexData: NW,
          unIndexed: mW.isUnIndexed,
          indexBuffer: iW.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(WW, iW, OW, mW) {
        const EW = iW.owner,
          NW = oN(iW);
        if (!NW) return null;
        const PW = NW.getClassName();
        let LW = null;
        if (function(WW) {
            return "LinesMesh" === WW.getClassName()
          }(EW)) {
          if (! function(WW) {
              return "ShaderMaterial" === WW.getClassName() && "color" === WW.shaderPath
            }(NW)) return this.warnOnce(`lines:${PW}`, `A LinesMesh with a ${PW} is not drawn yet (${NW.name})`), null;
          LW = EW
        } else if ("StandardMaterial" !== PW && "LiteMaterial" !== PW) return this.warnOnce(`class:${PW}`, `${PW} is not drawn yet (${NW.name})`), null;
        const cW = LN(EW),
          wW = this.instanceCount(EW, cW);
        if (wW <= 0) return null;
        const tW = LW ? this.lineProgramFor(EW, OW, cW) : this.drawDefines.programFor(WW, iW, NW, OW, cW);
        if (!tW || tW.failed) return null;
        const ZW = LW ? null : this.drawDefines.drawStates.get(iW).model,
          xW = ZW ? this.modelInstance(ZW, tW) : this.materialInstance(EW, tW);
        let lW = !1;
        if (xW.frame !== this.frame && (LW ? kW(xW.ubo, LW) : lW = this.modelUniforms.refreshModelUniforms(WW, xW, xW.model, this.view)), !this.bindMaterial(xW, lW)) return null;
        const AW = this.meshInputs(iW, tW, cW);
        if (!AW || !this.instanceBuffersFit(EW.name, AW, wW)) return null;
        const bW = this.indexKey(iW);
        let jW = null;
        if (bW && !EW.isUnIndexed && (jW = this.resources.gpuBuffer(bW), !jW)) return null;
        const UW = this.renderStates.renderState(null !== ZW && void 0 !== ZW ? ZW : NW, EW, mW, AW.state, LW ? "line-list" : "triangle-list"),
          sW = this.makeDraw(tW, AW, UW, xW, wW);
        return this.setRange(sW, iW, jW, bW), sW
      }
      indexKey(WW) {
        const iW = ZN(WW);
        return iW ? this.resources.modelIndex(iW) : null
      }
      setRange(WW, iW, OW, mW) {
        OW && (WW.indexBuffer = OW, WW.indexFormat = this.resources.indexFormat(mW));
        const EW = 4 * iW.range + (OW ? 0 : 2);
        WW.unit = iW, WW.first = iW.parts.kj[EW], WW.count = iW.parts.kj[EW + 1]
      }
      makeDraw(WW, iW, OW, mW, EW) {
        iW.state !== OW && (iW.state = OW, iW.pipelineKey = `${WW.id}|${iW.layout.key}|${OW.key}`, iW.pipeline = null);
        const NW = iW.draw ??= {
          program: WW,
          inputs: iW,
          pipelineKey: "",
          layout: iW.layout,
          state: OW,
          material: mW,
          slotOffset: 0,
          vertexBuffers: iW.buffers,
          vertexOffsets: iW.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: EW,
          unit: null
        };
        return NW.program = WW, NW.pipelineKey = iW.pipelineKey, NW.state = OW, NW.material = mW, NW.vertexOffsets = iW.offsets, NW.indexBuffer = null, NW.instances = EW, NW
      }
      instanceCount(WW, iW) {
        switch (iW) {
          case "thin":
            return WW.forcedInstanceCount || WW.OWW;
          case "instanced":
            return this.prepareInstances(WW);
          case "none":
            return 1
        }
      }
      prepareInstances(WW) {
        const iW = function(WW, iW) {
          const OW = iW._userInstancedBuffersStorage,
            mW = WW.batchUploads.get(iW);
          if (mW) {
            var EW;
            if (mW.layout === (null !== (EW = null === OW || void 0 === OW ? void 0 : OW.interleavedKinds) && void 0 !== EW ? EW : null)) return mW;
            mW.release()
          }
          return new li(WW, iW, OW)
        }(this.resources, WW);
        return iW.frame !== this.frame && iW.pack(WW, this.modelMeshes.instanceBatch(WW), this.modelMeshes.worlds, this.frame), iW.count
      }
      programWithModel(WW, iW, OW) {
        const mW = this.modelSlot(WW),
          EW = AN(mW, WW, OW),
          NW = this.drawDefines.modelPackKind(WW),
          PW = NW ? function(WW, iW, OW, mW) {
            const EW = (0, TW.v)(WW, YW.e.name),
              NW = [];
            for (const {
                feature: cW,
                state: wW,
                active: tW
              }
              of WW.features) {
              var PW, LW;
              const WW = tW ? null === (PW = (LW = (0, ei.i)(cW)).kA) || void 0 === PW ? void 0 : PW.call(LW, wW) : void 0;
              WW && NW.push(WW)
            }
            return {
              kind: iW,
              atlas: null !== EW && void 0 !== EW && EW.active ? (0, YW.b)(EW.state) : null,
              defines: OW,
              ...bP(NW, mW)
            }
          }(WW, NW, iW, mW.fragmentCode) : null;
        if (PW && function(WW) {
            const iW = WW.defines;
            return (null === WW.atlas || !!iW.DIFFUSE && 1 === iW.DIFFUSEDIRECTUV) && !!iW.NORMAL && !iW.REFLECTION && !iW.EMISSIVEASILLUMINATION && !iW.LINKEMISSIVEWITHDIFFUSE
          }(PW)) {
          const OW = this.modelPackProgram(WW, iW, `${EW}#${NW}#sp${this.drawDefines.modelPackVariant}`, mW, PW);
          if (OW && !OW.failed) return OW
        }
        const LW = this.programs.get(EW);
        if (LW || this.unbuildable.has(EW)) return null !== LW && void 0 !== LW ? LW : null;
        let cW;
        try {
          cW = dE({
            defines: wN(iW),
            vertexCode: mW.vertexCode,
            fragmentCode: mW.fragmentCode,
            pluginUniforms: mW.pluginUniforms
          })
        } catch (wW) {
          return this.unbuildable.add(EW), this.warnOnce(`build:${EW}`, `could not build a program for ${WW.name}: ${String(wW)}`), null
        }
        return this.createProgram(EW, cW, "standard")
      }
      modelPackProgram(WW, iW, OW, mW, EW) {
        const NW = this.programs.get(OW);
        if (NW || this.unbuildable.has(OW)) return null !== NW && void 0 !== NW ? NW : null;
        const PW = this.drawDefines.modelPackVariant;
        let LW;
        try {
          const WW = function(WW) {
              return (0, Qi.e)(WW, "model")
            }(PW),
            OW = HP(WW, EW, mW.vertexCode, mW.fragmentCode);
          LW = dP(dE({
            defines: wN(iW),
            ...OW,
            pluginUniforms: mW.pluginUniforms
          }), WW, EW, !!this.sunShadow)
        } catch (tW) {
          return this.unbuildable.add(OW), this.warnOnce(`build:${OW}`, `could not build a shader pack program for ${WW.name}, which draws without the pack: ${String(tW)}`), null
        }
        const cW = aN(PW, !!this.sunShadow),
          wW = {
            group: this.packInputs.bindGroupFor(null, cW),
            layout: GN(this.device, {
              depth: !1,
              sunShadow: cW
            })
          };
        return this.createProgram(OW, LW, function(WW) {
          return `standard-sp${WW}`
        }(PW), wW)
      }
      lineProgramFor(WW, iW, OW) {
        const mW = UW(WW, OW, iW, this.view);
        let EW = this.linePrograms.get(mW);
        var NW;
        return EW || (EW = this.createProgram(`lines#${mW}`, (NW = function(WW) {
          const iW = new Map;
          for (let OW = 0; OW < wW.length; OW++) WW & 1 << OW && iW.set(wW[OW], !0);
          return iW
        }(mW), DE({
          defines: NW,
          vertex: vE,
          fragment: gE,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(mW, EW)), EW
      }
      createProgram(WW, iW, OW) {
        var mW;
        let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const NW = this.nextProgramId++,
          PW = `${OW}-${NW}`,
          LW = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          cW = [{
            binding: 0,
            visibility: LW,
            buffer: {
              type: "uniform"
            }
          }];
        for (const ZW of iW.textures) cW.push({
          binding: ZW.binding,
          visibility: LW,
          texture: {
            viewDimension: ZW.dimension
          }
        }), cW.push({
          binding: ZW.samplerBinding,
          visibility: LW,
          sampler: {}
        });
        const wW = this.device.createBindGroupLayout({
            label: PW,
            entries: cW
          }),
          tW = {
            key: WW,
            id: NW,
            kind: OW,
            program: iW,
            vertex: this.device.createShaderModule({
              label: `${PW}-vertex`,
              code: iW.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${PW}-fragment`,
              code: iW.fragment
            }),
            materialLayout: wW,
            pipelineLayout: this.device.createPipelineLayout({
              label: PW,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, wW, ...EW ? [EW.layout] : []]
            }),
            packGroup: null !== (mW = null === EW || void 0 === EW ? void 0 : EW.group) && void 0 !== mW ? mW : null,
            failed: !1
          };
        return this.programs.set(WW, tW), tW
      }
      writeFrameUniforms() {
        const WW = this.frameUniforms;
        KN(this.view, WW), this.device.queue.writeBuffer(this.frameBuffer, 0, WW)
      }
      materialInstance(WW, iW) {
        let OW = this.materials.get(WW);
        if (!OW) {
          const iW = new Map;
          this.materials.set(WW, iW);
          const {
            resources: mW,
            materials: EW
          } = this;
          WW.jD.addOnce((() => {
            for (const WW of iW.values()) WW.released = !0, mW.destroyBuffer(WW.buffer);
            EW.delete(WW)
          })), OW = iW
        }
        let mW = OW.get(iW.key);
        return mW || (mW = this.newMaterialInstance(WW, null, iW), OW.set(iW.key, mW)), mW
      }
      modelInstance(WW, iW) {
        const OW = this.modelSlot(WW);
        let mW = OW.instances.get(iW.key);
        return mW || (mW = this.newMaterialInstance(WW, WW, iW), OW.instances.set(iW.key, mW)), mW
      }
      modelSlot(WW) {
        var iW;
        let OW = WW.gpu[hW.g.lite];
        return (null === (iW = OW) || void 0 === iW ? void 0 : iW.epoch) !== this.resources.epoch && (OW = new vP(this.resources, this.resources.epoch), WW.gpu[hW.g.lite] = OW), OW
      }
      newMaterialInstance(WW, iW, OW) {
        const mW = OW.program.material.floats,
          EW = new Float32Array(mW),
          NW = new Map;
        return {
          owner: WW,
          model: iW,
          program: OW,
          data: EW,
          uploaded: new Float32Array(mW).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${WW.name}-uniforms`,
            size: Math.max(16, 4 * mW),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: NW,
          ubo: new MN(OW.program.material.slots, EW, NW),
          bindGroup: null,
          bound: new Array(2 * OW.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(WW) {
        var iW;
        const OW = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: XE + BE,
            fragment: XE + qE,
            attributes: [],
            material: CE,
            textures: []
          }, "earthSky"),
          mW = this.earthSkyUniforms ??= this.newMaterialInstance(eP, null, OW);
        this.earthSkyFrom !== WW && (this.earthSkyFrom = WW, mW.data.fill(0)), QE(mW.ubo, WW, this.view);
        const EW = this.vertexInputs(OW, eP, "earthSky", OW, null);
        if (OW.failed || !EW || !this.bindMaterial(mW, !1)) return;
        const NW = null !== (iW = EW.state) && void 0 !== iW ? iW : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          PW = this.makeDraw(OW, EW, NW, mW, 1);
        PW.count = VE.length;
        const LW = WN(WW, this.view);
        PW.slotOffset = this.writeMeshSlot(LW, 1), this.lists.skyDraws.push(PW)
      }
      uploadIfChanged(WW) {
        const {
          data: iW,
          uploaded: OW
        } = WW;
        for (let mW = 0; mW < iW.length; mW++)
          if (iW[mW] !== OW[mW]) return OW.set(iW), void this.device.queue.writeBuffer(WW.buffer, 0, iW)
      }
      bindMaterial(WW, iW) {
        return WW.frame !== this.frame && (WW.frame = this.frame, iW || this.uploadIfChanged(WW), WW.bindable = this.bindTextures(WW)), WW.bindable
      }
      bindTextures(WW) {
        const {
          program: iW,
          bound: OW
        } = WW, mW = iW.program.textures;
        let EW = !WW.bindGroup,
          NW = !0;
        for (let PW = 0; PW < mW.length; PW++) {
          const iW = WW.textures.get(mW[PW].name),
            LW = iW ? this.resources.boundTexture(iW) : null;
          LW ? OW[2 * PW] === LW.view && OW[2 * PW + 1] === LW.sampler || (OW[2 * PW] = LW.view, OW[2 * PW + 1] = LW.sampler, EW = !0) : (iW || WW.ubo.expected.has(mW[PW].name) || this.warnOnce(`texture:${WW.owner.name}:${mW[PW].name}`, `${WW.owner.name} has no ${mW[PW].name}`), NW = !1)
        }
        if (!NW) return EW && (WW.bindGroup = null), !1;
        if (EW) {
          const EW = [{
            binding: 0,
            resource: {
              buffer: WW.buffer
            }
          }];
          for (let WW = 0; WW < mW.length; WW++) EW.push({
            binding: mW[WW].binding,
            resource: OW[2 * WW]
          }), EW.push({
            binding: mW[WW].samplerBinding,
            resource: OW[2 * WW + 1]
          });
          WW.bindGroup = this.device.createBindGroup({
            label: `${WW.owner.name}-material`,
            layout: iW.materialLayout,
            entries: EW
          })
        }
        return !0
      }
      writeMeshSlot(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, WW, iW, OW), this.slotCount++ * xE
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(WW, iW, OW, mW, EW) {
        let NW = this.inputs.get(WW);
        if (!NW || NW.program !== mW || !hN(iW, NW, this.resources, EW)) {
          var PW;
          if (NW = null !== (PW = this.vertexLayouts.resolveInputs(iW, OW, mW, EW)) && void 0 !== PW ? PW : void 0, !NW) return null;
          this.inputs.set(WW, NW)
        }
        return this.withGpuBuffers(NW)
      }
      meshInputs(WW, iW, OW) {
        const mW = this.inputs.get(WW);
        if (mW && this.inputsStamped(mW, WW, OW, iW)) return this.withGpuBuffers(mW);
        const EW = WW.owner,
          NW = ZN(WW),
          PW = this.vertexInputs(WW, EW, EW.name, iW, NW);
        return PW && (PW.geometry = xN(WW), PW.instanceLayout = this.drawDefines.instanceLayout(EW, OW)), PW
      }
      inputsStamped(WW, iW, OW, mW) {
        return function(WW, iW, OW, mW) {
          return WW.program === OW && WW.geometry === xN(iW) && WW.instanceLayout === mW
        }(WW, iW, mW, this.drawDefines.instanceLayout(iW.owner, OW))
      }
      withGpuBuffers(WW) {
        return FN(WW, this.resources, this.zeroBuffer) ? WW : null
      }
      instanceBuffersFit(WW, iW, OW) {
        const mW = WP(iW, OW, this.resources, this.zeroBuffer);
        if (mW) {
          const EW = iW.ends[mW.index] - iW.offsets[mW.index] + iW.B5[mW.index];
          return this.warnOnce(`overrun:${WW}`, `${WW} draws ${OW} instances from a ${EW}-byte buffer (${mW.needed} needed)`), !1
        }
        return !0
      }
      createBinding(WW, iW, OW, mW) {
        const EW = `${iW._colorFormat}|${iW._depthStencilFormat}|${iW._depthCompare}|${iW._sampleCount}`,
          NW = ni(this.device, iW);
        if (WW === this.skyLastRenderable) {
          let OW = null;
          return {
            renderable: WW,
            pipeline: NW,
            draw: WW => OW ? this.drawSky(WW, iW, EW, OW) : 0,
            update: WW => {
              OW = WW
            }
          }
        }
        return {
          renderable: WW,
          pipeline: NW,
          draw: WW => (mW ? mW.execute(WW, iW, EW) : 0) + this.drawList(WW, iW, EW, OW)
        }
      }
      drawSky(WW, iW, OW, mW) {
        const EW = this.lists.skyDraws,
          NW = EW.length > 0;
        if (NW) {
          var PW;
          const OW = (null !== (PW = iW._depthCompare) && void 0 !== PW ? PW : yi).startsWith("greater") ? 0 : 1;
          WW.setViewport(0, 0, mW.targetWidth, mW.targetHeight, OW, OW)
        }
        const LW = this.drawList(WW, iW, OW, EW);
        return NW && WW.setViewport(0, 0, mW.targetWidth, mW.targetHeight, 0, 1), LW
      }
      drawList(WW, iW, OW, mW) {
        let EW = 0;
        const NW = this.binder;
        NW.reset();
        for (const PW of mW) {
          const mW = this.pipelineFor(PW, iW, OW);
          mW && (NW.bind(WW, PW, mW, this.meshSlots.bindGroup, PW.slotOffset), PW.indexBuffer ? WW.drawIndexed(PW.count, PW.instances, PW.first, 0, 0) : WW.draw(PW.count, PW.instances, PW.first, 0), EW++)
        }
        return EW
      }
      pipelineFor(WW, iW, OW) {
        var mW, EW;
        if (WW.program.failed) return null;
        const NW = WW.inputs;
        if (NW.pipeline && NW.pipelineTarget === OW) return NW.pipeline;
        const PW = `${WW.pipelineKey}|${OW}`,
          LW = this.pipelines.get(PW);
        if (void 0 !== LW) return LW && (NW.pipeline = LW, NW.pipelineTarget = OW), LW || null;
        this.pipelines.set(PW, null);
        const {
          program: cW,
          layout: wW,
          state: tW
        } = WW, ZW = {
          label: `standard-${cW.id}`,
          layout: cW.pipelineLayout,
          vertex: {
            module: cW.vertex,
            entryPoint: "main",
            buffers: wW.buffers
          },
          fragment: ki({
            module: cW.fragment,
            entryPoint: "main"
          }, iW, tW.blend, tW.colourWrite),
          depthStencil: iW._depthStencilFormat ? {
            format: iW._depthStencilFormat,
            depthCompare: null !== (mW = null !== (EW = tW.depthCompare) && void 0 !== EW ? EW : iW._depthCompare) && void 0 !== mW ? mW : yi,
            depthWriteEnabled: tW.depthWrite,
            depthBias: tW.depthBias,
            depthBiasSlopeScale: tW.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: iW._sampleCount
          },
          primitive: {
            topology: tW.topology,
            frontFace: tW.frontFace,
            cullMode: tW.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(ZW).then((WW => {
          this.compiling--, this.pipelines.set(PW, WW)
        }), (WW => {
          this.compiling--, this.reportFailure(cW, PW, WW)
        })), null
      }
      forEachSunShadowCaster(WW) {
        const iW = this.caster,
          OW = (OW, mW, EW) => {
            const NW = OW.unit && function(WW) {
              const iW = WW.material.model;
              return null !== iW && (iW.lifeform || iW.item) && iW.castsSunShadow && "triangle-list" === WW.state.topology
            }(OW) ? ZN(OW.unit) : null;
            if (!NW) return;
            const PW = OW.unit.owner;
            switch (iW.geometry = NW, iW.skip = PW.noSunShadowVertices, iW.indexed = null !== OW.indexBuffer, iW.first = OW.first, iW.count = OW.count, iW.oZ = mW, iW.worldAt = EW, iW.instances = null, iW.instanceCount = 1, iW.thin = !1, LN(PW)) {
              case "thin": {
                const WW = PW._thinInstanceDataStorage.matrixData;
                if (!WW) return;
                iW.instances = WW, iW.instanceCount = Math.min(OW.instances, WW.length / 16), iW.thin = !0;
                break
              }
              case "instanced": {
                const WW = this.resources.batchUploads.get(PW);
                if (!WW || WW.frame !== this.frame || !this.writeBatchCasters(WW)) return;
                break
              }
            }
            WW(iW)
          };
        for (const mW of this.lists.opaqueDraws) OW(mW, this.meshSlots.data, mW.slotOffset / 4);
        this.thinBundle.forEachDrawn(OW)
      }
      writeBatchCasters(WW) {
        const {
          caster: iW
        } = this, OW = WW.packedMatrices, mW = WW.count;
        iW.instances = OW, iW.instanceCount = mW;
        let EW = -1;
        for (let NW = 0; NW < mW; NW++) {
          const iW = VP(WW.packedRowMesh(NW));
          iW && EW < 0 ? (this.casterWorlds.length < 16 * mW && (this.casterWorlds = new Float32Array(OW.length)), this.casterWorlds.set(OW.subarray(0, 16 * NW)), EW = NW) : !iW && EW >= 0 && (this.casterWorlds.set(OW.subarray(16 * NW, 16 * NW + 16), 16 * EW), EW++)
        }
        return EW >= 0 && (iW.instances = this.casterWorlds, iW.instanceCount = EW), iW.instanceCount > 0
      }
      async reportFailure(WW, iW, OW) {
        const mW = [];
        let EW = !0;
        for (const [NW, PW] of [
            ["vertex", WW.vertex],
            ["fragment", WW.fragment]
          ]) {
          const WW = await PW.getCompilationInfo();
          for (const iW of WW.messages) EW &&= "error" !== iW.type, mW.push(`${NW}:${iW.lineNum}:${iW.linePos} ${iW.type}: ${iW.message}`)
        }
        if (EW && !WW.packGroup) return this.pipelines.set(iW, !1), console.error(`Lite: pipeline ${iW} failed`, OW), void ti(this.device, "mesh", WW.kind, OW);
        WW.failed || (WW.failed = !0, console.error(`Lite: program ${WW.id} failed`, OW, mW.join("\n"), {
          program: WW.program,
          key: WW.key
        }), ti(this.device, "mesh", WW.kind, OW, EW ? null : mW[0]))
      }
    }

    function VP(WW) {
      var iW, OW;
      const mW = null === (iW = WW.bV) || void 0 === iW || null === (OW = iW.aShaderPackItem) || void 0 === OW ? void 0 : OW.x;
      return void 0 !== mW && 0 !== (mW & oi.i)
    }
    var pP = OW(53857),
      fP = OW(53859),
      CP = OW(53862),
      XP = OW(53819);
    const BP = [0, 3, 1, 4, 2, 5];

    function qP(WW, iW, OW, mW, EW) {
      const NW = OW[0].width;
      try {
        return EW ? function(WW, iW, OW) {
          const mW = (0, XP.c)(WW, OW, OW, 6);
          for (let EW = 0; EW < 6; EW++)(0, XP.d)(WW, mW, EW, iW[BP[EW]], {
            invertY: !1
          });
          return mW.texture
        }(WW, OW, NW) : function(WW, iW, OW, mW) {
          const EW = WW.createTexture({
            label: "sink-cube",
            size: {
              width: OW,
              height: OW,
              depthOrArrayLayers: 6
            },
            format: mW,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let NW = 0; NW < 6; NW++) WW.queue.copyExternalImageToTexture({
            source: iW[BP[NW]]
          }, {
            texture: EW,
            origin: {
              x: 0,
              y: 0,
              z: NW
            }
          }, {
            width: OW,
            height: OW
          });
          return EW
        }(iW, OW, NW, 1 === mW ? "r8unorm" : "rgba8unorm")
      } finally {
        RP(OW)
      }
    }

    function RP(WW) {
      for (const iW of null !== WW && void 0 !== WW ? WW : []) null === iW || void 0 === iW || iW.close()
    }
    async function GP(WW) {
      const iW = [],
        OW = [];
      if (await Promise.all(WW.map(((WW, mW) => (iW[mW] = null, WW.then((WW => {
          iW[mW] = WW
        }), (WW => {
          OW.push(WW)
        })))))), OW.length > 0) throw RP(iW), OW[0];
      return iW
    }
    class IP {
      constructor(WW) {
        this.aZ = WW, this.starts = [], this.lengths = [], this.used = 0, WW > 0 && (this.starts.push(0), this.lengths.push(WW))
      }
      allocate(WW) {
        const {
          starts: iW,
          lengths: OW
        } = this;
        for (let mW = 0; mW < iW.length; mW++) {
          if (OW[mW] < WW) continue;
          const EW = iW[mW];
          return OW[mW] === WW ? (iW.splice(mW, 1), OW.splice(mW, 1)) : (iW[mW] += WW, OW[mW] -= WW), this.used += WW, EW
        }
        return -1
      }
      free(WW, iW) {
        this.used -= iW;
        const OW = Math.min(WW + iW, this.aZ);
        OW > WW && this.release(WW, OW - WW)
      }
      grow(WW) {
        const iW = this.aZ;
        this.aZ = WW, this.release(iW, WW - iW)
      }
      truncate(WW) {
        const {
          starts: iW,
          lengths: OW
        } = this;
        for (let mW = iW.length - 1; mW >= 0 && iW[mW] + OW[mW] > WW; mW--) iW[mW] >= WW ? (iW.splice(mW, 1), OW.splice(mW, 1)) : OW[mW] = WW - iW[mW];
        this.aZ = WW
      }
      release(WW, iW) {
        const {
          starts: OW,
          lengths: mW
        } = this;
        let EW = 0,
          NW = OW.length;
        for (; EW < NW;) {
          const iW = EW + NW >> 1;
          OW[iW] < WW ? EW = iW + 1 : NW = iW
        }
        const PW = EW,
          LW = PW > 0 && OW[PW - 1] + mW[PW - 1] === WW,
          cW = PW < OW.length && WW + iW === OW[PW];
        LW && cW ? (mW[PW - 1] += iW + mW[PW], OW.splice(PW, 1), mW.splice(PW, 1)) : LW ? mW[PW - 1] += iW : cW ? (OW[PW] = WW, mW[PW] += iW) : (OW.splice(PW, 0, WW), mW.splice(PW, 0, iW))
      }
    }
    const aP = 256;
    class rP {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = WW, this.onReplaced = iW, this.mergeGap = OW, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.kj = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const EW = Math.max(aP, Math.ceil(mW / aP) * aP);
        this.bytes = new Uint8Array(EW), this.words = new Uint32Array(this.bytes.buffer), this.kj = new IP(EW / aP)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(WW) {
        return Math.max(1, Math.ceil(WW / aP)) * aP
      }
      allocate(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW;
        const mW = rP.slotBytes(WW),
          EW = mW / aP;
        let NW = this.kj.allocate(EW);
        NW < 0 && (this.grow(this.kj.aZ + EW), NW = this.kj.allocate(EW));
        const PW = NW * aP;
        return this.growTo(PW + Math.max(OW, mW)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, PW, PW + mW), iW && this.bytes.set(new Uint8Array(iW.buffer, iW.byteOffset, Math.min(iW.byteLength, mW)), PW), this.markDirty(PW, PW + mW), PW
      }
      growTo(WW) {
        const iW = Math.ceil(WW / aP);
        iW > this.kj.aZ && this.grow(iW)
      }
      free(WW, iW) {
        this.freed.push(WW, iW)
      }
      write(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (mW <= 0) return;
        mW <= 1024 && 0 === (3 & (WW | OW | mW)) ? this.copyWords(WW >> 2, iW.buffer, OW >> 2, mW >> 2) : this.bytes.set(new Uint8Array(iW.buffer, OW, mW), WW);
        let NW = WW + mW;
        if (EW) {
          const iW = WW + 4 * Math.ceil(mW / 4);
          this.bytes.fill(0, NW, iW), NW = iW
        }
        this.markDirty(WW, NW)
      }
      copyWords(WW, iW, OW, mW) {
        let EW = this.sourceWords.get(iW);
        EW || (EW = new Uint32Array(iW, 0, iW.byteLength >> 2), this.sourceWords.set(iW, EW));
        const NW = this.words;
        for (let PW = 0; PW < mW; PW++) NW[WW + PW] = EW[OW + PW]
      }
      move(WW, iW, OW) {
        this.bytes.copyWithin(iW, WW, WW + OW), this.markDirty(iW, iW + OW)
      }
      flush() {
        for (const iW of this.retired) this.onReplaced(iW), iW.destroy();
        this.retired.length = 0;
        const WW = this.dirtyStarts.length;
        if (WW > 0) {
          const {
            dirtyStarts: iW,
            dirtyEnds: OW,
            order: mW
          } = this;
          mW.length = WW;
          for (let LW = 0; LW < WW; LW++) mW[LW] = LW;
          WW > 1 && mW.sort(((WW, OW) => iW[WW] - iW[OW]));
          const EW = this.mergeGap;
          let NW = iW[mW[0]],
            PW = OW[mW[0]];
          for (let LW = 1; LW < WW; LW++) {
            const WW = mW[LW];
            iW[WW] - PW <= EW ? PW = Math.max(PW, OW[WW]) : (this.send(NW, PW), NW = iW[WW], PW = OW[WW])
          }
          this.send(NW, PW), iW.length = 0, OW.length = 0
        }
        this.holding = !1
      }
      SZ() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const WW = this.freed;
        for (let iW = 0; iW < WW.length; iW += 2) this.kj.free(WW[iW] / aP, WW[iW + 1] / aP);
        WW.length = 0
      }
      send(WW, iW) {
        this.device.queue.writeBuffer(this.gpu, WW, this.bytes.buffer, WW, iW - WW);
        for (const OW of this.replaced) {
          const mW = Math.min(iW, OW.size);
          mW > WW && this.device.queue.writeBuffer(OW, WW, this.bytes.buffer, WW, mW - WW)
        }
      }
      markDirty(WW, iW) {
        WW &= -4, iW = iW + 3 & -4, this.holding ? (this.dirtyStarts.push(WW), this.dirtyEnds.push(iW)) : this.send(WW, iW)
      }
      grow(WW) {
        const iW = this.kj.aZ,
          OW = Math.max(2 * iW, WW),
          mW = new Uint8Array(OW * aP);
        mW.set(this.bytes);
        const EW = this.gpu;
        this.gpu = this.createGpu(mW.byteLength), this.bytes = mW, this.words = new Uint32Array(mW.buffer), this.kj.grow(OW), EW && (this.replaced.push(EW), this.onReplaced(EW)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, iW * aP)
      }
      createGpu(WW) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: WW,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function zP(WW) {
      return Array.isArray(WW) ? new Float32Array(WW) : WW
    }

    function FP(WW, iW, OW, mW, EW) {
      const NW = GW(EW),
        PW = Math.min(EW, mW.byteLength);
      if (NW === PW && mW.byteOffset % 4 === 0) return void WW.queue.writeBuffer(iW, OW, mW.buffer, mW.byteOffset, NW);
      const LW = new Uint8Array(NW);
      LW.set(new Uint8Array(mW.buffer, mW.byteOffset, PW)), WW.queue.writeBuffer(iW, OW, LW)
    }

    function QP(WW, iW, OW) {
      const mW = "linear",
        EW = "nearest";
      let NW = EW,
        PW = EW,
        LW = "nearest",
        cW = !iW;
      switch (WW) {
        case 11:
          NW = mW, PW = mW;
          break;
        case 3:
          NW = mW, PW = mW, LW = iW ? "linear" : "nearest";
          break;
        case 8:
          LW = iW ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          PW = mW;
          break;
        case 6:
          PW = mW, LW = iW ? "linear" : "nearest";
          break;
        case 7:
          PW = mW, cW = !0;
          break;
        case 9:
          NW = mW;
          break;
        case 10:
          NW = mW, LW = iW ? "linear" : "nearest";
          break;
        case 2:
          NW = mW, PW = mW, OW > 1 ? (LW = "linear", cW = !1) : cW = !0;
          break;
        case 12:
          NW = mW, cW = !0;
          break;
        default:
          cW = !0
      }
      return OW > 1 && !cW ? {
        magFilter: mW,
        minFilter: mW,
        mipmapFilter: "linear",
        maxAnisotropy: OW
      } : {
        magFilter: NW,
        minFilter: PW,
        mipmapFilter: LW,
        ...cW ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function WL(WW) {
      return 0 === WW ? "clamp-to-edge" : 2 === WW ? "mirror-repeat" : "repeat"
    }
    class iL {
      constructor(WW, iW) {
        let {
          vertexArena: OW = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = WW, this.device = iW, this.buffers = new WeakMap, this.p_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = OW ? this.createArena() : null
      }
      createArena() {
        return new rP(this.device, (WW => {
          var iW;
          null === (iW = this.onDestroy) || void 0 === iW || iW.call(this, WW), this.gpuBuffersVersion++
        }))
      }
      rebind(WW, iW) {
        this.engine = WW, this.device = iW, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const OW of this.liveUploads) OW.rebind();
        for (const OW of this.rebindWaiters.splice(0)) OW()
      }
      flushUploads() {
        var WW;
        null === (WW = this.arena) || void 0 === WW || WW.flush()
      }
      endUploadFrame() {
        var WW;
        null === (WW = this.arena) || void 0 === WW || WW.SZ()
      }
      vertexBufferCreated(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OW ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(WW);
        const EW = zP(iW);
        WW.aZ = EW.byteLength, this.buffers.set(WW, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: OW && null !== this.arena,
          pending: EW,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: mW
        })
      }
      vertexBufferUpdated(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        const EW = this.buffers.get(WW);
        if (!EW) return;
        const NW = zP(iW),
          PW = void 0 === mW ? NW.byteLength : Math.min(mW, NW.byteLength);
        this.update(EW, NW, OW, PW)
      }
      vertexBufferFloatsUpdated(WW, iW, OW, mW) {
        const EW = this.buffers.get(WW);
        if (!EW) return;
        const NW = OW * Float32Array.BYTES_PER_ELEMENT,
          PW = (mW - OW) * Float32Array.BYTES_PER_ELEMENT;
        EW.slot >= 0 && PW > 0 && NW + PW <= EW.size ? this.writeSlot(EW, NW, iW, iW.byteOffset + NW, PW, !1) : EW.gpu && PW > 0 && NW + PW <= EW.gpu.size ? this.device.queue.writeBuffer(EW.gpu, NW, iW.buffer, iW.byteOffset + NW, PW) : this.update(EW, iW.subarray(OW, mW), NW, PW)
      }
      indexBufferCreated(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(WW);
        const mW = function(WW) {
          if (WW instanceof Uint16Array || WW instanceof Uint32Array) return WW;
          for (let iW = 0; iW < WW.length; iW++)
            if (WW[iW] >= 65535) return new Uint32Array(WW);
          return new Uint16Array(WW)
        }(iW);
        WW.is32Bits = 4 === mW.BYTES_PER_ELEMENT, WW.aZ = mW.byteLength, this.buffers.set(WW, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: mW,
          ownsPending: mW !== iW,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: OW
        })
      }
      bufferDeleted(WW) {
        const iW = this.buffers.get(WW);
        null !== iW && void 0 !== iW && iW.gpu ? (this.destroyBuffer(iW.gpu), this.gpuBuffersVersion++) : iW && iW.slot >= 0 && (this.arena.free(iW.slot, iW.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(WW)
      }
      update(WW, iW, OW, mW) {
        if (WW.slot >= 0) this.updateSlot(WW, iW, OW, mW);
        else if (WW.gpu) {
          if (OW + GW(mW) > WW.gpu.size) {
            const iW = this.device.createBuffer({
                label: WW.label,
                size: GW(Math.max(2 * WW.gpu.size, OW + mW)),
                usage: WW.usage | GPUBufferUsage.COPY_SRC
              }),
              EW = this.device.createCommandEncoder();
            EW.copyBufferToBuffer(WW.gpu, 0, iW, 0, WW.gpu.size), this.device.queue.submit([EW.finish()]), this.destroyBuffer(WW.gpu), this.gpuBuffersVersion++, WW.gpu = iW
          }
          FP(this.device, WW.gpu, OW, iW, mW)
        } else {
          const NW = new Uint8Array(iW.buffer, iW.byteOffset, mW),
            PW = WW.pending;
          if (PW && WW.ownsPending && OW + mW <= PW.byteLength) new Uint8Array(PW.buffer, PW.byteOffset, PW.byteLength).set(NW, OW);
          else if (PW && 0 === OW && mW === PW.byteLength && iW.byteLength === mW) WW.pending = iW, WW.ownsPending = !1;
          else {
            var EW;
            const iW = new Uint8Array(Math.max(null !== (EW = null === PW || void 0 === PW ? void 0 : PW.byteLength) && void 0 !== EW ? EW : 0, OW + mW));
            PW && iW.set(new Uint8Array(PW.buffer, PW.byteOffset, PW.byteLength)), iW.set(NW, OW), WW.pending = iW, WW.ownsPending = !0
          }
        }
      }
      updateSlot(WW, iW, OW, mW) {
        const EW = this.arena;
        OW + GW(mW) > WW.size && (WW.size = GW(Math.max(2 * WW.size, OW + mW)), EW.growTo(WW.slot + WW.size), this.gpuBuffersVersion++), 0 === mW ? this.writeSlot(WW, OW, mL, 0, 4, !1) : this.writeSlot(WW, OW, iW, iW.byteOffset, mW, !0)
      }
      writeSlot(WW, iW, OW, mW, EW, NW) {
        const PW = iW + (NW ? GW(EW) : EW);
        PW > WW.slotBytes && this.moveSlot(WW, PW), this.arena.write(WW.slot + iW, OW, mW, EW, NW)
      }
      moveSlot(WW, iW) {
        const OW = this.arena,
          mW = rP.slotBytes(Math.max(iW, Math.min(2 * WW.slotBytes, WW.size))),
          EW = OW.allocate(mW, null, WW.size);
        OW.move(WW.slot, EW, WW.slotBytes), OW.free(WW.slot, WW.slotBytes), WW.slot = EW, WW.slotBytes = mW, this.gpuBuffersVersion++
      }
      cover(WW, iW) {
        const OW = this.buffers.get(WW);
        if (!OW || OW.slot < 0) return !1;
        const mW = Math.min(iW, OW.size);
        return !(mW <= OW.slotBytes) && (this.moveSlot(OW, mW), !0)
      }
      destroyBuffer(WW) {
        var iW;
        null === (iW = this.onDestroy) || void 0 === iW || iW.call(this, WW), WW.destroy()
      }
      gpuBuffer(WW) {
        const iW = this.buffers.get(WW);
        if (!iW) return null;
        if (iW.slot >= 0) return this.arena.buffer;
        if (iW.arena && iW.pending) {
          const WW = iW.pending,
            OW = this.arena;
          return iW.size = GW(WW.byteLength), iW.slotBytes = rP.slotBytes(function(WW) {
            const iW = new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength);
            let OW = iW.length;
            if (WW.byteOffset % 4 === 0) {
              for (; OW % 4 !== 0 && 0 === iW[OW - 1];) OW--;
              if (OW % 4 === 0) {
                const iW = new Uint32Array(WW.buffer, WW.byteOffset, OW / 4);
                let mW = iW.length;
                for (; mW > 0 && 0 === iW[mW - 1];) mW--;
                OW = 4 * mW
              }
            }
            for (; OW > 0 && 0 === iW[OW - 1];) OW--;
            return OW
          }(WW)), iW.slot = OW.allocate(iW.slotBytes, WW, iW.size), iW.pending = null, OW.buffer
        }
        if (!iW.gpu && iW.pending) {
          const WW = iW.pending;
          iW.gpu = this.device.createBuffer({
            label: iW.label,
            size: GW(WW.byteLength),
            usage: iW.usage
          }), FP(this.device, iW.gpu, 0, WW, WW.byteLength), iW.pending = null
        }
        return iW.gpu
      }
      gpuOffset(WW) {
        var iW, OW;
        const mW = null !== (iW = null === (OW = this.buffers.get(WW)) || void 0 === OW ? void 0 : OW.slot) && void 0 !== iW ? iW : -1;
        return mW < 0 ? 0 : mW
      }
      gpuEnd(WW) {
        var iW, OW;
        const mW = this.buffers.get(WW);
        return mW ? mW.slot >= 0 ? mW.slot + mW.size : null !== (iW = null === (OW = mW.gpu) || void 0 === OW ? void 0 : OW.size) && void 0 !== iW ? iW : 0 : 0
      }
      vertexInput(WW, iW, OW) {
        var mW, EW, NW, PW;
        return null !== (mW = null !== (EW = OW && this.modelInput(OW, iW)) && void 0 !== EW ? EW : null === (NW = null !== (PW = this.p_.get(WW)) && void 0 !== PW ? PW : this.batchUploads.get(WW)) || void 0 === NW ? void 0 : NW.inputs[iW]) && void 0 !== mW ? mW : null
      }
      modelInput(WW, iW) {
        const OW = this.geometrySlot(WW);
        let mW = OW.inputs.get(iW);
        if (void 0 === mW) {
          const EW = WW.vertexAttributes.find((WW => WW.kind === iW));
          mW = EW ? new Ai(this.modelKey(OW, EW.data, !1), EW.offset, EW.stride, EW.components, !1, EW.glType, EW.isNormalized) : null, OW.inputs.set(iW, mW)
        }
        return mW
      }
      modelIndex(WW) {
        return WW.indexData && this.modelKey(this.geometrySlot(WW), WW.indexData, !0)
      }
      geometrySlot(WW) {
        var iW;
        let OW = WW.gpu[hW.g.lite];
        if ((null === (iW = OW) || void 0 === iW ? void 0 : iW.epoch) !== this.epoch) {
          const iW = new Map,
            mW = () => {
              for (const WW of iW.values()) this.bufferDeleted(WW)
            },
            EW = WW => {
              const OW = iW.get(WW);
              OW && this.vertexBufferUpdated(OW, WW)
            };
          OW = {
            keys: iW,
            inputs: new Map,
            release: mW,
            updated: EW,
            epoch: this.epoch
          }, WW.gpu[hW.g.lite] = OW
        }
        return OW
      }
      modelKey(WW, iW, OW) {
        let mW = WW.keys.get(iW);
        if (!mW) {
          if (OW) {
            const WW = {
              aZ: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(WW, iW, "model-indices"), mW = WW
          } else mW = {
            aZ: 0
          }, this.vertexBufferCreated(mW, iW, !1, "model-vertices");
          WW.keys.set(iW, mW)
        }
        return mW
      }
      indexFormat(WW) {
        return WW.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(WW, iW) {
        --WW.refs > 0 || (this.releaseTexture(WW), RP(WW.images), null !== iW && this.textures.delete(iW))
      }
      load(WW, iW) {
        const {
          epoch: OW
        } = this, mW = iW.decoded = async function(WW) {
          if ("cube" === WW.kind) return async function(WW) {
            if (6 !== WW.length) throw new Error(`${WW.length} files where six faces were expected`);
            const iW = await GP(WW.map((WW => QW(WW)))),
              OW = iW[0].width;
            return GP(iW.map((async WW => {
              if (WW.width === OW && WW.height === OW) return WW;
              try {
                return await createImageBitmap(WW, {
                  ...zW,
                  resizeWidth: OW,
                  resizeHeight: OW
                })
              } finally {
                WW.close()
              }
            })))
          }(WW.files);
          if ("data" === WW.kind && WW.data) return [await createImageBitmap(new Blob([WW.data]), zW)];
          return [await QW(OL(WW))]
        }(WW.source).then((WW => {
          0 === iW.refs || OW !== this.epoch ? RP(WW) : iW.images = WW
        }));
        this.track(iW, OL(WW.source), mW, (() => {
          iW.wanted && !iW.failed && iW.refs > 0 && this.upload(WW, iW)
        }))
      }
      canvasUpdated(WW, iW, OW) {
        const {
          state: mW
        } = this.textureSlot(WW);
        mW.dynamicSource = {
          invertY: iW,
          premultiplied: OW
        }, mW.dynamic && this.pushDynamic(WW.source, mW)
      }
      async atlasArrays(WW) {
        const {
          device: iW,
          epoch: OW
        } = this;
        let mW;
        try {
          mW = await ii(iW, WW)
        } catch (NW) {
          if (OW === this.epoch) {
            if (!wi(iW)) throw NW;
            await new Promise((WW => {
              this.rebindWaiters.push(WW)
            }))
          }
          return this.atlasArrays(WW)
        }
        if (mW.forEach(((iW, OW) => {
            this.atlasSources.has(iW) || this.atlasSources.set(iW, {
              sources: WW,
              index: OW,
              stride: mW[0].layers
            })
          })), OW !== this.epoch) return mW;
        const EW = (0, pP.b)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const PW of mW) this.atlasBindings.has(PW) || this.atlasBindings.set(PW, {
          view: PW.texture.createView({
            dimension: "2d-array"
          }),
          sampler: EW
        });
        return mW
      }
      boundTexture(WW) {
        const iW = this.atlasBindings.get(WW);
        if (iW) return iW;
        const OW = this.atlasSources.get(WW);
        if (OW) return this.rebuildAtlas(WW, OW), null;
        const mW = WW;
        if (mW.released) return null;
        const EW = this.textureSlot(mW, !0),
          {
            state: NW
          } = EW;
        if (!NW.view && (NW.wanted = !0, NW.loading || NW.failed || this.upload(mW, NW), !NW.view)) return null;
        const PW = this.chosenSampler(mW, EW),
          LW = EW.bound;
        return LW && LW.view === NW.view && LW.sampler === PW ? LW : (EW.bound = {
          view: NW.view,
          sampler: PW
        }, EW.bound)
      }
      rebuildAtlas(WW, iW) {
        let {
          sources: OW,
          index: mW,
          stride: EW
        } = iW;
        if (this.atlasRebuilds.has(WW)) return;
        this.atlasRebuilds.add(WW);
        const {
          epoch: NW
        } = this;
        this.atlasArrays(OW).then((iW => {
          iW[0].layers === EW && iW[mW] ? NW === this.epoch && this.atlasBindings.set(WW, this.atlasBindings.get(iW[mW])) : console.error(`Lite: the new device splits the atlas ${FW(OW.urls[0])} into other arrays than its materials read`)
        }), (WW => {
          console.error(`Lite: could not build the atlas ${FW(OW.urls[0])} again on a new device`, WW)
        }))
      }
      textureLoaded(WW) {
        var iW, OW;
        return null !== (iW = null === (OW = this.heldSlot(WW)) || void 0 === OW ? void 0 : OW.state.decoded) && void 0 !== iW ? iW : null
      }
      textureFailed(WW) {
        var iW;
        return !0 === (null === (iW = this.heldSlot(WW)) || void 0 === iW ? void 0 : iW.state.failed)
      }
      heldSlot(WW) {
        const iW = WW.gpu[hW.g.lite];
        return (null === iW || void 0 === iW ? void 0 : iW.epoch) === this.epoch ? iW : void 0
      }
      chosenSampler(WW, iW) {
        const {
          samplingMode: OW,
          wrapU: mW,
          wrapV: EW
        } = WW.sampler, NW = iW.state.hasMips, PW = function(WW, iW) {
          const {
            bilinear: OW,
            trilinear: mW
          } = hW.k;
          return !iW && WW !== OW || 11 !== WW && WW !== mW && WW !== OW ? 1 : 4
        }(OW, NW), LW = iW.sampler;
        if (LW && LW.samplingMode === OW && LW.hasMips === NW && LW.anisotropy === PW && LW.wrapU === mW && LW.wrapV === EW) return LW.sampler;
        const cW = this.samplerFor(OW, NW, PW, mW, EW);
        return iW.sampler = {
          samplingMode: OW,
          hasMips: NW,
          anisotropy: PW,
          wrapU: mW,
          wrapV: EW,
          sampler: cW
        }, cW
      }
      releaseTexture(WW) {
        var iW, OW;
        WW.view && (null === (OW = this.onDestroy) || void 0 === OW || OW.call(this, WW.view));
        null === (iW = WW.destroy) || void 0 === iW || iW.call(WW)
      }
      textureSlot(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = WW.gpu[hW.g.lite];
        if ((null === OW || void 0 === OW ? void 0 : OW.epoch) === this.epoch) return OW;
        const mW = function(WW) {
          let {
            source: iW,
            sampler: OW
          } = WW;
          return "canvas" === iW.kind ? null : `${iW.kind}|${OL(iW)}|${OW.noMipmap}|${OW.samplingMode}|${OW.invertY}`
        }(WW);
        let EW = null === mW ? void 0 : this.textures.get(mW);
        var NW;
        EW || (EW = {
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
          dynamicSource: null !== (NW = null === OW || void 0 === OW ? void 0 : OW.state.dynamicSource) && void 0 !== NW ? NW : null
        }, null !== mW && (this.textures.set(mW, EW), this.load(WW, EW), iW && !OW && this.firstBindDecodes++));
        EW.refs++;
        const PW = EW,
          {
            epoch: LW
          } = this,
          cW = {
            state: EW,
            bound: null,
            sampler: null,
            release: () => {
              LW === this.epoch && this.releaseSlot(PW, mW)
            },
            epoch: LW
          };
        return WW.gpu[hW.g.lite] = cW, cW
      }
      samplerFor(WW, iW, OW, mW, EW) {
        const NW = `${WW}|${iW}|${OW}|${mW}|${EW}`;
        let PW = this.samplers.get(NW);
        if (!PW) {
          const LW = {
            ...QP(WW, iW, OW),
            addressModeU: WL(mW),
            addressModeV: WL(EW)
          };
          PW = (0, pP.b)(this.engine, LW), this.samplers.set(NW, PW)
        }
        return PW
      }
      upload(WW, iW) {
        const {
          source: OW,
          sampler: mW
        } = WW;
        iW.hasMips = !mW.noMipmap, "canvas" === OW.kind ? this.createDynamic(OW, iW) : "cube" === OW.kind ? this.uploadCube(iW, OW.luminance) : this.uploadImage(iW, !0 === mW.invertY, OW.url)
      }
      uploadImage(WW, iW, OW) {
        const [mW] = WW.images;
        WW.images = null;
        const {
          epoch: EW
        } = this, NW = (0, fP.e)(this.engine, mW, {
          mipMaps: WW.hasMips,
          invertY: iW,
          srgb: !1
        }).then((iW => {
          mW.close(), 0 !== WW.refs && EW === this.epoch ? (WW.view = iW.view, WW.destroy = iW.texture.destroy.bind(iW.texture)) : iW.texture.destroy()
        }));
        this.track(WW, OW, NW)
      }
      track(WW, iW, OW, mW) {
        const {
          epoch: EW
        } = this;
        WW.loading = !0, this.pending++, OW.catch((OW => {
          EW === this.epoch && (WW.failed = !0, console.warn(`Lite: could not load texture ${FW(iW)}`, OW))
        })).finally((() => {
          EW === this.epoch && (WW.loading = !1, this.pending--, null === mW || void 0 === mW || mW())
        }))
      }
      uploadCube(WW, iW) {
        const OW = WW.images;
        WW.images = null;
        const mW = qP(this.engine, this.device, OW, (0, hW.z)(iW), WW.hasMips);
        WW.view = mW.createView({
          dimension: "cube"
        }), WW.destroy = () => {
          mW.destroy()
        }
      }
      createDynamic(WW, iW) {
        const {
          canvas: OW
        } = WW, mW = (0, CP.e)(this.engine, Math.max(1, OW.width), Math.max(1, OW.height), {
          mipMaps: iW.hasMips,
          srgb: !1
        });
        iW.dynamic = mW, iW.view = mW.view, iW.destroy = () => {
          mW.texture.destroy()
        }, this.pushDynamic(WW, iW)
      }
      pushDynamic(WW, iW) {
        const OW = iW.dynamicSource,
          mW = iW.dynamic,
          {
            canvas: EW
          } = WW;
        if (OW && mW && 0 !== EW.width && 0 !== EW.height) return EW.width !== mW.width || EW.height !== mW.height ? (this.releaseTexture(iW), iW.dynamic = null, iW.view = null, void this.createDynamic(WW, iW)) : void(0, CP.f)(this.engine, mW, EW, {
          invertY: OW.invertY,
          premultiplyAlpha: OW.premultiplied
        })
      }
    }

    function OL(WW) {
      return "cube" === WW.kind ? WW.rootUrl : "canvas" === WW.kind ? "canvas" : WW.url
    }
    const mL = new Uint8Array(4);
    var EL = OW(39976);

    function NL(WW) {
      const iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      WW._colorAttachment.storeOp = WW._targetSignature._sampleCount > 1 ? iW : "store";
      const OW = WW._renderPassDescriptor.depthStencilAttachment;
      OW && (OW.depthStoreOp = iW, OW.stencilStoreOp && (OW.stencilStoreOp = iW))
    }
    var PL = OW(38939),
      LL = OW(38470),
      cL = OW(38549),
      wL = OW(40939);
    const tL = new Float64Array([1, 1, 1]),
      ZL = new Float64Array([0, 1, 0]),
      xL = new Float64Array(4),
      lL = new Float32Array(16),
      AL = new Float64Array(3),
      bL = new Float64Array(4);

    function jL(WW, iW, OW) {
      WW.fov = iW.fov, WW.near = iW.near, WW.far = iW.far, WW.renderWidth = OW.renderWidth, WW.renderHeight = OW.renderHeight, (0, cL.u)(iW.holderRotation, 0, xL, 0), (0, cL.e)(tL, 0, xL, 0, iW.holderPosition, 0, lL);
      const mW = iW.f4;
      AL[0] = mW[0], AL[1] = mW[1], AL[2] = mW[2] + 1;
      const EW = WW.viewMatrix;
      (0, cL.l)(mW, AL, ZL, EW), (0, cL.j)(EW, 0, EW), (0, cL.p)(EW, lL, 0, EW), (0, cL.j)(EW, 0, EW);
      const NW = WW.worldMatrix;
      (0, cL.j)(EW, 0, NW), WW.eye[0] = NW[12], WW.eye[1] = NW[13], WW.eye[2] = NW[14], bL[0] = WW.fov, bL[1] = WW.renderWidth / WW.renderHeight, bL[2] = WW.near, bL[3] = WW.far, (0, cL.s)(bL, WW.projectionMatrix), (0, cL.p)(EW, WW.projectionMatrix, 0, WW.viewProjectionMatrix), (0, wL.i)(WW.viewProjectionMatrix, WW.frustum)
    }

    function UL(WW, iW) {
      let OW = WW.frustumPlanes;
      OW || (OW = WW.frustumPlanes = Array.from({
        length: 6
      }, (() => new PL.c(0, 0, 0, 0))));
      for (let mW = 0; mW < 6; mW++) {
        const WW = OW[mW].normal;
        WW._x = iW[4 * mW], WW._y = iW[4 * mW + 1], WW._z = iW[4 * mW + 2], WW._isDirty = !0, OW[mW].d = iW[4 * mW + 3]
      }
    }

    function kL(WW, iW) {
      const OW = iW.clearColor;
      WW.clearColour[0] = OW.r, WW.clearColour[1] = OW.g, WW.clearColour[2] = OW.b, WW.clearColour[3] = OW.a;
      const mW = iW.ambientColor;
      WW.ambientColour[0] = mW.r, WW.ambientColour[1] = mW.g, WW.ambientColour[2] = mW.b, WW.animationRatio = iW.animationRatio, WW.frameId = iW.frameId, WW.version++
    }

    function sL(WW) {
      const iW = WW.model.view;
      return iW.animTick = (0, LL.h)(), iW.timeMs = performance.now(), kL(iW, WW.rb), WW.model.update(iW.frameId), iW
    }

    function ML(WW) {
      const iW = WW.rb,
        {
          view: OW,
          o4: mW
        } = WW.model;
      return jL(OW, mW, iW.VA()), iW.onBeforeRenderObservable.notifyObservers(iW), UL(iW, OW.frustum), iW.onBeforeCameraRenderObservable.notifyObservers(iW.activeCamera), sL(WW)
    }
    var KL = OW(38514),
      SL = OW(38616),
      YL = OW(38989);

    function yL(WW) {
      var iW, OW;
      const mW = (0, TW.bb)(WW);
      if (!mW || mW.diffuseTexture && (0, YL.i)(WW)) return null;
      const EW = null === (iW = (0, TW.v)(mW, YW.e.name)) || void 0 === iW ? void 0 : iW.state,
        NW = null === (OW = (0, TW.v)(mW, iP.e.name)) || void 0 === OW ? void 0 : OW.state,
        PW = new Float32Array(16);
      return function(WW, iW, OW, mW) {
        var EW, NW;
        const PW = Vm;
        mW.set(WW.diffuseColor, PW.diffuse), mW[PW.diffuse + 3] = WW.alpha, mW.set(WW.ambientColor, PW.ambientAndCutoff), mW[PW.ambientAndCutoff + 3] = WW.alphaCutOff, mW.set(WW.emissiveColor, PW.emissiveAndLevel), mW[PW.emissiveAndLevel + 3] = null !== (EW = null === (NW = WW.diffuseTexture) || void 0 === NW ? void 0 : NW.level) && void 0 !== EW ? EW : 1, null !== iW && void 0 !== iW && iW.animDataPerTex ? (mW[PW.anim + 1] = LL.d, mW[PW.anim + 2] = iW.animDataPerTex.length / 3 - 1) : OW && (mW[PW.anim + 1] = OW.numAnimStates, mW[PW.anim + 2] = OW.ticksPerAnimState)
      }(mW, EW, NW, PW), {
        model: mW,
        atlas: EW,
        texture: EW ? "atlas" : mW.diffuseTexture ? "single" : "none",
        animated: EW ? !!EW.animDataPerTex : !!NW,
        liquid: (0, YL.l)(WW),
        customRenderMat: (0, YL.i)(WW),
        uniformData: PW
      }
    }
    var TL = OW(3923);
    class JL {
      constructor(WW) {
        this.units = WW, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var WW;
        this.buffer.destroy(), null === (WW = this.twin) || void 0 === WW || WW.destroy()
      }
    }
    class hL {
      constructor(WW, iW) {
        this.arena = WW, this.kj = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.kj = new IP(iW);
        const OW = new JL(iW);
        OW.buffer = this.createBuffer(OW, !1), this.backings.push(OW), this.refresh()
      }
      get aZ() {
        return this.kj.aZ
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
        let WW = 0;
        for (const iW of this.backings) WW += iW.units * (this.arena.unitBytes + (iW.twin ? this.arena.twinUnitBytes : 0));
        return WW
      }
      holds(WW) {
        return WW.start + WW.length <= this.usable
      }
      lost(WW) {
        return this.dropped || WW.start + WW.length > this.aZ
      }
      write(WW, iW) {
        const {
          device: OW,
          unitBytes: mW
        } = this.arena;
        for (const EW of this.backings) {
          const NW = (EW.units - WW.start) * mW;
          NW > 0 && OW.queue.writeBuffer(EW.buffer, WW.start * mW, iW, 0, Math.min(iW.byteLength, NW))
        }
      }
      writeLight(WW, iW) {
        const {
          device: OW,
          twinUnitBytes: mW,
          verticesPerUnit: EW
        } = this.arena, {
          light: NW,
          count: PW
        } = this.arena.twinLight(iW, Math.min(iW.length, WW.length * EW));
        for (const LW of this.backings) {
          LW.twin || (LW.twin = this.createBuffer(LW, !0));
          const iW = (LW.units - WW.start) * EW;
          iW > 0 && OW.queue.writeBuffer(LW.twin, WW.start * mW, NW, 0, Math.min(PW, iW))
        }
      }
      grow(WW) {
        this.arena.assertNotDrawing();
        const {
          device: iW,
          unitBytes: OW,
          label: mW
        } = this.arena, EW = this.backings[this.backings.length - 1], NW = new JL(WW), PW = iW.createCommandEncoder({
          label: `${mW}-grow`
        });
        NW.buffer = this.createBuffer(NW, !1), PW.copyBufferToBuffer(EW.buffer, 0, NW.buffer, 0, EW.units * OW), EW.twin && (NW.twin = this.createBuffer(NW, !0), PW.copyBufferToBuffer(EW.twin, 0, NW.twin, 0, EW.units * this.arena.twinUnitBytes)), iW.queue.submit([PW.finish()]), this.backings.push(NW), this.kj.grow(WW)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const WW of this.backings) WW.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(WW, iW) {
        const {
          device: OW,
          unitBytes: mW,
          twinUnitBytes: EW,
          usage: NW,
          label: PW
        } = this.arena;
        OW.pushErrorScope("out-of-memory");
        const LW = OW.createBuffer({
          label: iW ? `${PW}-light` : PW,
          size: WW.units * (iW ? EW : mW),
          usage: (iW ? this.arena.twinUsage : NW) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, OW.popErrorScope().then((OW => {
          this.arena.awaitingVerdict--, this.settle(WW, iW, !OW, !0)
        }), (OW => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${PW} buffer, taken as failed: ${String(OW)}`), this.settle(WW, iW, !1, !1)
        })), LW
      }
      settle(WW, iW, OW, mW) {
        const EW = this.backings.indexOf(WW);
        if (!(this.dropped || EW < 0)) {
          if (!OW) {
            if (mW && this.arena.ranOutOfMemory(WW.units, WW.units * (iW ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === EW) return void this.drop();
            for (const WW of this.backings.splice(EW)) WW.destroy();
            return this.kj.truncate(this.backings[EW - 1].units), this.growable = !1, void this.promote()
          }
          iW ? WW.twinReady = !0 : (WW.bufferReady = !0, this.arena.allocatedBuffer(WW.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: WW
        } = this;
        let iW = 0;
        for (; iW + 1 < WW.length && WW[iW].ready && WW[iW + 1].ready;) iW++;
        for (const OW of WW.splice(0, iW)) OW.destroy();
        this.refresh()
      }
      refresh() {
        const WW = this.backings[0];
        this.buffer = WW.buffer, this.twin = WW.twinReady ? WW.twin : null, this.usable = !this.dropped && WW.bufferReady ? WW.units : 0
      }
    }
    class HL {
      constructor(WW, iW, OW, mW) {
        let {
          verticesPerUnit: EW = 1,
          twinUsage: NW = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = WW, this.unitBytes = iW, this.usage = OW, this.label = mW, this.pages = [], this.KZ = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, di.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), iW % 4 !== 0) throw new Error(`${mW}: ${iW}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = EW, this.twinUsage = NW, this.twinValueBytes = EW > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * EW
      }
      twinLight(WW, iW) {
        if (4 === this.twinValueBytes) return this.widened.length < iW && (this.widened = new Float32Array(Math.max(iW, 2 * this.widened.length))), this.widened.set(WW.subarray(0, iW)), {
          light: this.widened,
          count: iW
        };
        const OW = iW % this.verticesPerUnit;
        if (0 === OW) return {
          light: WW,
          count: iW
        };
        const mW = iW - OW + this.verticesPerUnit;
        return this.padded.length < mW && (this.padded = new Uint16Array(Math.max(mW, 2 * this.padded.length))), this.padded.set(WW.subarray(0, iW)), this.padded.fill(0, iW, mW), {
          light: this.padded,
          count: mW
        }
      }
      allocate(WW) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), WW > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const EW of this.pages) {
          const iW = EW.kj.allocate(WW);
          if (iW >= 0) return {
            page: EW,
            start: iW,
            length: WW
          }
        }
        const iW = this.pages[this.pages.length - 1];
        if (null !== iW && void 0 !== iW && iW.canGrow) {
          const OW = Math.min(this.ceiling, Math.max(2 * iW.aZ, iW.aZ + WW));
          if (OW - iW.aZ >= WW) return iW.grow(OW), {
            page: iW,
            start: iW.kj.allocate(WW),
            length: WW
          }
        }
        iW && iW !== this.pages[0] && 0 === iW.kj.used && iW.drop();
        const OW = Math.floor(1048576 / this.unitBytes),
          mW = new hL(this, Math.max(WW, Math.min(this.ceiling, OW)));
        return this.pages.push(mW), {
          page: mW,
          start: mW.kj.allocate(WW),
          length: WW
        }
      }
      free(WW) {
        this.assertNotDrawing();
        const {
          page: iW
        } = WW;
        iW.kj.free(WW.start, WW.length), 0 === iW.kj.used && iW !== this.pages[0] && iW !== this.pages[this.pages.length - 1] && iW.drop()
      }
      retire() {
        for (const WW of this.pages) WW.retire()
      }
      remove(WW) {
        const iW = this.pages.indexOf(WW);
        iW >= 0 && this.pages.splice(iW, 1)
      }
      ranOutOfMemory(WW, iW) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${iW}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, WW), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, WW) / 2));
        const OW = performance.now();
        OW >= this.shortageUntil && (this.forgetFailedAt = OW + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = OW + 1e3)
      }
      allocatedBuffer(WW) {
        WW >= this.failed && (this.failed = 1 / 0);
        const iW = Math.min(2 * WW, Math.floor((WW + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, iW))
      }
      stats() {
        let WW = 0,
          iW = 0,
          OW = 0,
          mW = 0;
        for (const EW of this.pages) WW += EW.aZ, iW += EW.kj.used, OW += EW.hasTwin ? EW.aZ * this.twinUnitBytes : 0, mW += EW.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: WW * this.unitBytes,
          usedBytes: iW * this.unitBytes,
          twinBytes: OW,
          allocatedBytes: mW
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: WW,
          maxStorageBufferBindingSize: iW
        } = this.device.limits;
        let OW = Math.floor(Math.min(67108864, WW) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (OW = Math.min(OW, Math.floor(iW / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (OW = Math.min(OW, Math.floor(iW / this.twinUnitBytes))), OW
      }
    }
    const nL = 16383;

    function uL(WW, iW, OW, mW, EW) {
      let NW = 0;
      for (let PW = OW; PW < mW; PW += nL) WW.drawIndexed(6 * Math.min(nL, mW - PW), 1, 0, iW + 4 * PW, EW), NW++;
      return NW
    }
    class oL {
      constructor(WW, iW) {
        this.recordsGroup = iW, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const OW = ri.e.strideWithoutAtlas;
        this.vertexArena = new HL(WW, OW, GPUBufferUsage.VERTEX, `terrain-vertices-${OW}`), this.quadArena = new HL(WW, SL.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const mW = (0, zi.g)(new Uint16Array(98298), nL);
        this.quadPattern = WW.createBuffer({
          label: "terrain-quad-pattern",
          size: mW.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), WW.queue.writeBuffer(this.quadPattern, 0, mW)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(WW, iW) {
        const OW = iW.packedVertices,
          mW = OW ? this.quadArena.allocate(WW.faceCount) : this.vertexArena.allocate(WW.vertexCount);
        if (!mW) return !1;
        WW.vertices = mW;
        const EW = OW ? new Uint8Array(OW.buffer, OW.byteOffset, OW.byteLength) : new Uint8Array(iW.vertices);
        return mW.page.write(mW, EW), !0
      }
      setLight(WW, iW) {
        const {
          vertices: OW
        } = WW;
        OW && 0 !== iW.length && OW.page.live && (iW.length < WW.vertexCount ? OW.page.arena.warnOnce("shortLight", `a part's ${iW.length} light values are fewer than its ${WW.vertexCount} vertices, so its light is left as it was`) : (OW.page.writeLight(OW, iW), WW.lit = !0))
      }
      lightFullSky(WW, iW) {
        this.fullSky.length < iW && (this.fullSky = new Uint16Array(Math.max(iW, 4096)).fill(TL.k));
        for (const OW of WW) {
          const WW = OW.vertices;
          WW.page.live && (WW.page.writeLight(WW, this.fullSky), OW.lit = !0)
        }
      }
      backed(WW) {
        const {
          vertices: iW
        } = WW;
        return !!iW && iW.page.holds(iW)
      }
      lost(WW) {
        const {
          vertices: iW
        } = WW;
        return !!iW && iW.page.lost(iW)
      }
      release(WW) {
        WW.vertices && WW.vertices.page.arena.free(WW.vertices), WW.vertices = null, WW.lit = !1
      }
      setDrawing(WW) {
        this.forgetBound()
      }
      draw(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : iW.faceCount;
        const NW = iW.vertices,
          PW = NW.page,
          LW = OW ? PW.twin : null;
        if (!PW.holds(NW) || OW && !LW) return 0;
        const {
          verticesPerUnit: cW
        } = PW.arena;
        let wW = NW.start * cW;
        this.boundPattern || (WW.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const tW = mW + EW;
        if (cW > 1) return PW.buffer === this.boundRecords && LW === this.boundRecordsLight || (WW.setBindGroup(1, this.recordsGroup(PW.buffer, LW)), this.boundRecords = PW.buffer, this.boundRecordsLight = LW), uL(WW, wW, mW, tW, iW.slot);
        PW.buffer !== this.boundVertices && (WW.setVertexBuffer(0, PW.buffer), this.boundVertices = PW.buffer), LW && LW !== this.boundLight && (WW.setVertexBuffer(1, LW), this.boundLight = LW);
        const ZW = iW.faceCount;
        return tW <= ZW ? uL(WW, wW, mW, tW, iW.slot) : uL(WW, wW, mW, ZW, iW.slot) + uL(WW, wW, Math.max(mW, ZW) - ZW, tW - ZW, iW.slot)
      }
      get buffersAwaitingVerdict() {
        let WW = 0;
        for (const iW of this.arenas()) WW += iW.awaitingVerdict;
        return WW
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class dL {
      constructor(WW, iW, OW, mW) {
        this.device = WW, this.splitBefore = iW, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = WW.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const EW = WW.createShaderModule({
          label: "scene-depth-copy",
          code: (NW = OW._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${NW?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var NW;
        WW.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: EW,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: EW,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((WW => {
          this.pipeline = WW, this.building = !1
        }), (WW => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", WW)
        })), OW._executeWithTransmission = () => this.execute(OW, mW)
      }
      get compiling() {
        return this.building
      }
      setWanted(WW) {
        this.wanted = WW
      }
      setPlanes(WW, iW) {
        WW === this.near && iW === this.far || (this.near = WW, this.far = iW, this.unproject[0] = WW / (iW - WW), this.unproject[1] = iW * WW / (iW - WW), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var WW, iW;
        return null !== (WW = null === (iW = this.copy) || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null
      }
      execute(WW, iW) {
        var OW;
        null === (OW = this.retired) || void 0 === OW || OW.destroy(), this.retired = null;
        const mW = Si(iW),
          EW = WW._transparentBindings,
          NW = this.wanted && this.pipeline ? this.splitIndex(EW) : -1,
          PW = WW._colorAttachment,
          LW = PW.resolveTarget;
        NW >= 0 && (PW.resolveTarget = void 0, NL(WW, !0));
        let cW = mW.beginRenderPass(WW._renderPassDescriptor);
        cW.setBindGroup(0, WW._sceneBG);
        let wW = this.drawList(cW, iW, WW._opaqueBindings, 0, WW._opaqueBindings.length);
        if (wW += this.drawList(cW, iW, WW._directBindings, 0, WW._directBindings.length), wW += this.drawList(cW, iW, EW, 0, NW >= 0 ? NW : EW.length), cW.end(), NW < 0) return wW;
        NL(WW);
        const tW = WW._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: ZW,
            stencilLoadOp: xW
          } = tW,
          lW = PW.loadOp;
        PW.resolveTarget = LW;
        try {
          this.copyDepth(mW, WW), PW.loadOp = "load", tW.depthLoadOp = "load", xW && (tW.stencilLoadOp = "load"), cW = mW.beginRenderPass(WW._renderPassDescriptor), cW.setBindGroup(0, WW._sceneBG), wW += this.drawList(cW, iW, EW, NW, EW.length), cW.end()
        } finally {
          PW.loadOp = lW, tW.depthLoadOp = ZW, tW.stencilLoadOp = xW
        }
        return wW
      }
      splitIndex(WW) {
        for (let iW = 0; iW < WW.length; iW++)
          if (WW[iW].renderable === this.splitBefore) return iW;
        return -1
      }
      drawList(WW, iW, OW, mW, EW) {
        let NW = null,
          PW = 0;
        for (let LW = mW; LW < EW; LW++) {
          const mW = OW[LW],
            EW = mW.renderable.mesh;
          EW && !1 === EW.visible || (mW.pipeline !== NW && (WW.setPipeline(mW.pipeline), NW = mW.pipeline), PW += mW.draw(WW, iW))
        }
        return PW
      }
      copyDepth(WW, iW) {
        var OW, mW;
        const EW = (null !== (OW = iW._config.depth) && void 0 !== OW ? OW : iW._config.rt)._depthTexture,
          NW = (null === (mW = this.copy) || void 0 === mW ? void 0 : mW.source) === EW ? this.copy : this.remakeCopy(EW),
          PW = WW.beginRenderPass(NW.pass);
        PW.setPipeline(this.pipeline), PW.setBindGroup(0, NW.bindGroup), PW.draw(3), PW.end()
      }
      remakeCopy(WW) {
        var iW, OW;
        this.retired = null !== (iW = null === (OW = this.copy) || void 0 === OW ? void 0 : OW.texture) && void 0 !== iW ? iW : null;
        const mW = this.device.createTexture({
            label: "scene-depth",
            size: [WW.width, WW.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          EW = mW.createView(),
          NW = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: WW.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          PW = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: EW,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: WW,
          texture: mW,
          view: EW,
          bindGroup: NW,
          pass: PW
        }, this.copy
      }
    }
    const eL = "rgba8unorm";

    function vL(WW) {
      return WW ? 15 : 1
    }
    class gL {
      constructor(WW, iW, OW, mW) {
        this.device = WW, this.terrain = mW, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = iW._targetSignature._sampleCount > 1, this.cameraBuffer = WW.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = WW.createBindGroupLayout({
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
        const EW = WW.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = WW.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: EW,
          entries: []
        });
        const NW = WW.createShaderModule({
          label: "sun-shadow-mask",
          code: (PW = this.edge, `${(0,Fi.z)()}${wm({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${PW?FO:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${vL(PW)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${PW?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var PW;
        WW.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: WW.createPipelineLayout({
            bindGroupLayouts: [this.layout, EW, EW, GN(WW, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: NW,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: NW,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((WW => {
          this.pipeline = WW, this.building = !1
        }), (WW => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", WW)
        }));
        const LW = iW._executeWithTransmission;
        iW._executeWithTransmission = WW => this.execute(iW, OW, (() => LW ? LW(WW) : function(WW, iW) {
          const OW = Si(iW).beginRenderPass(WW._renderPassDescriptor);
          OW.setBindGroup(0, WW._sceneBG);
          let mW = DL(OW, iW, WW._opaqueBindings);
          return mW += DL(OW, iW, WW._directBindings), mW += DL(OW, iW, WW._transparentBindings), OW.end(), mW
        }(iW, OW)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var WW, iW;
        return null !== (WW = null === (iW = this.targets) || void 0 === iW ? void 0 : iW.maskView) && void 0 !== WW ? WW : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(WW) {
        ! function(WW, iW) {
          const OW = WW.worldMatrix,
            mW = WW.projectionMatrix,
            EW = 1 / mW[0],
            NW = 1 / mW[5],
            PW = WW.far * WW.near / (WW.far - WW.near);
          iW[0] = WW.eye[0], iW[1] = WW.eye[1], iW[2] = WW.eye[2], iW[3] = 2 ** -23 / PW, iW[4] = OW[0] * EW, iW[5] = OW[1] * EW, iW[6] = OW[2] * EW, iW[7] = PW, iW[8] = OW[4] * NW, iW[9] = OW[5] * NW, iW[10] = OW[6] * NW, iW[11] = WW.near / (WW.far - WW.near), iW[12] = OW[8], iW[13] = OW[9], iW[14] = OW[10], iW[15] = 0
        }(WW, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(WW, iW, OW) {
        if (this.retire(), !this.terrain.readsMask) return OW();
        const mW = this.targetsFor(WW),
          EW = Si(iW),
          NW = WW._renderPassDescriptor.depthStencilAttachment;
        this.edge || (mW.prepass.depthStencilAttachment.view = NW.view);
        const PW = this.terrain.drawPrepass(EW, mW.prepass, WW._sceneBG);
        if (0 === PW) return OW();
        if (this.trace(EW, mW), this.edge) return PW + 1 + OW();
        const {
          depthLoadOp: LW,
          stencilLoadOp: cW
        } = NW;
        NW.depthLoadOp = "load", cW && (NW.stencilLoadOp = "load");
        try {
          return PW + 1 + OW()
        } finally {
          NW.depthLoadOp = LW, NW.stencilLoadOp = cW
        }
      }
      trace(WW, iW) {
        const OW = this.terrain.sunShadowGroup(),
          mW = WW.beginRenderPass(iW.trace);
        this.pipeline && OW && (mW.setPipeline(this.pipeline), mW.setBindGroup(0, iW.bindGroup), mW.setBindGroup(1, this.empty), mW.setBindGroup(2, this.empty), mW.setBindGroup(3, OW), mW.draw(3)), mW.end()
      }
      retire() {
        const WW = this.retired;
        var iW;
        WW && (WW.mask.destroy(), WW.normals.destroy(), null === (iW = WW.depth) || void 0 === iW || iW.destroy(), this.retired = null)
      }
      targetsFor(WW) {
        var iW, OW;
        const mW = (null !== (iW = WW._config.depth) && void 0 !== iW ? iW : WW._config.rt)._depthTexture;
        return (null === (OW = this.targets) || void 0 === OW ? void 0 : OW.source) === mW ? this.targets : this.remake(WW, mW)
      }
      remake(WW, iW) {
        var OW;
        this.retired = this.targets;
        const mW = [iW.width, iW.height],
          EW = this.device.createTexture({
            label: "sun-shadow-mask",
            size: mW,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          NW = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: mW,
            format: eL,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          PW = null !== (OW = WW._targetSignature._depthStencilFormat) && void 0 !== OW ? OW : iW.format,
          LW = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: mW,
            format: PW,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          cW = WW._renderPassDescriptor.depthStencilAttachment,
          wW = PW.includes("stencil"),
          tW = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: NW.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: LW ? LW.createView() : cW.view,
              depthClearValue: cW.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...wW ? {
                stencilClearValue: cW.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          ZW = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== LW && void 0 !== LW ? LW : iW).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: NW.createView()
            }]
          }),
          xW = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: EW.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [vL(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: iW,
          mask: EW,
          maskView: EW.createView(),
          normals: NW,
          depth: LW,
          bindGroup: ZW,
          prepass: tW,
          trace: xW
        }, this.targets
      }
    }

    function DL(WW, iW, OW) {
      let mW = null,
        EW = 0;
      for (const NW of OW) {
        const OW = NW.renderable.mesh;
        OW && !1 === OW.visible || (NW.pipeline !== mW && (WW.setPipeline(NW.pipeline), mW = NW.pipeline), EW += NW.draw(WW, iW))
      }
      return EW
    }
    const VL = 6e4,
      pL = {
        status: "ok"
      },
      fL = {
        status: "skipped"
      };
    async function CL(WW, iW) {
      const {
        isCancelled: OW
      } = WW;
      if (OW()) return {
        status: "uW"
      };
      const {
        target: mW
      } = iW;
      if (!mW) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const EW = [],
        NW = Promise.all(Array.from(new Set(WW.materials), (async OW => {
          EW.push(await async function(WW, iW, OW, mW) {
            const EW = {
              lighting: WW.lighting,
              dirLightCount: Math.min(WW.dirLightCount, 4),
              kA: WW.runtime
            };
            try {
              const NW = iW.material(mW);
              return NW && em(iW.programKey(NW, !1, EW)) ? (await NW.ready, WW.isCancelled() ? pL : NW.bindGroupLayout ? await async function(WW, iW, OW, mW) {
                const {
                  device: EW
                } = WW;
                let NW, PW;
                EW.pushErrorScope("validation");
                try {
                  NW = WW.pipelineBuild(iW, OW, mW)
                } finally {
                  PW = EW.popErrorScope().catch((() => null))
                }
                const [LW, cW] = await Promise.all([PW, NW.built.then((() => null), (WW => null !== WW && void 0 !== WW ? WW : new Error("pipeline failed")))]);
                if (!LW && !cW) return pL;
                const wW = await XL(NW.module),
                  tW = wW.length > 0 ? wW.map((WW => `${NW.name} ${WW.lineNum}:${WW.linePos}: ${WW.message}`)).join("\n") : `${NW.name}: ${BL(null!==cW&&void 0!==cW?cW:LW)}`;
                return {
                  status: "failed",
                  material: iW.model.name,
                  message: tW
                }
              }(iW, NW, iW.programKey(NW, "none" !== NW.texture, EW), OW): (console.warn(`Shader pack: skipped the compile check for "${mW.name}", whose textures failed to load`), fL)) : pL
            } catch (NW) {
              return {
                status: "failed",
                material: mW.name,
                message: BL(NW)
              }
            }
          }(WW, iW, mW, OW))
        }))),
        PW = function(WW, iW) {
          let OW, mW, EW = !1;
          const NW = new Promise((NW => {
            var PW;
            OW = setTimeout((() => {
              NW("timeout")
            }), null !== (PW = iW.timeoutMs) && void 0 !== PW ? PW : VL), mW = setInterval((() => {
              iW.isCancelled() && NW("uW")
            }), 50), WW.lost.then((() => {
              EW = !0, NW("lost")
            }))
          }));
          return {
            signal: NW,
            lost: () => EW,
            dispose: () => {
              clearTimeout(OW), clearInterval(mW)
            }
          }
        }(iW.device, WW);
      let LW;
      try {
        LW = await Promise.race([NW.then((() => "done")), PW.signal])
      } finally {
        PW.dispose()
      }
      if ("uW" === LW || OW()) return {
        status: "uW"
      };
      const cW = EW.find((WW => "failed" === WW.status));
      return cW && "lost" !== LW && !PW.lost() && await new Promise((WW => {
        setTimeout(WW, 0)
      })), "lost" === LW || PW.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : cW ? {
        status: "failed",
        failure: {
          material: cW.material,
          message: cW.message
        }
      } : "timeout" === LW ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(wW=WW.timeoutMs)&&void 0!==wW?wW:VL)/1e3} s`), {
        status: "skipped"
      }) : EW.some((WW => "skipped" === WW.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var wW
    }
    async function XL(WW) {
      if (!WW) return [];
      try {
        return (await WW.getCompilationInfo()).messages.filter((WW => "error" === WW.type))
      } catch {
        return []
      }
    }

    function BL(WW) {
      var iW;
      return null !== (iW = null === WW || void 0 === WW ? void 0 : WW.message) && void 0 !== iW ? iW : String(WW)
    }

    function qL(WW, iW, OW, mW, EW) {
      em(iW) ? XL(mW).then((iW => {
        const [mW] = iW;
        ti(WW, "terrain", OW, EW, mW ? `${mW.lineNum}:${mW.linePos} error: ${mW.message}` : null)
      })) : ti(WW, "terrain", OW, EW)
    }
    var RL = OW(38623),
      GL = OW(38631),
      IL = OW(38645),
      aL = OW(3911);

    function rL(WW, iW, OW, mW, EW) {
      const NW = Math.hypot(OW[0], OW[1], OW[2]);
      if (!(NW > 0)) return;
      const PW = [OW[0] / NW, OW[1] / NW, OW[2] / NW],
        LW = [Math.floor(iW[0]), Math.floor(iW[1]), Math.floor(iW[2])],
        cW = [0, 0, 0],
        wW = [1 / 0, 1 / 0, 1 / 0],
        tW = [1 / 0, 1 / 0, 1 / 0];
      for (let lW = 0; lW < 3; lW++) PW[lW] > 0 ? (cW[lW] = 1, wW[lW] = (LW[lW] + 1 - iW[lW]) / PW[lW], tW[lW] = 1 / PW[lW]) : PW[lW] < 0 && (cW[lW] = -1, wW[lW] = (LW[lW] - iW[lW]) / PW[lW], tW[lW] = -1 / PW[lW]);
      const {
        jZ: ZW
      } = WW;
      let xW = WW.jR(LW[0], LW[1], LW[2]);
      for (;;) {
        const iW = wW[0] < wW[1] ? wW[0] < wW[2] ? 0 : 2 : wW[1] < wW[2] ? 1 : 2;
        if (wW[iW] > mW) return;
        const OW = cW[iW] > 0 ? LW[iW] + 1 : LW[iW];
        LW[iW] += cW[iW], wW[iW] += tW[iW];
        const NW = WW.jR(LW[0], LW[1], LW[2]),
          PW = NW !== xW && !(WW.opaque[xW] && WW.opaque[NW]);
        if (PW) {
          const mW = [LW[0], LW[1], LW[2]];
          mW[iW] = OW;
          const NW = Math.floor(mW[0] / ZW),
            PW = Math.floor(mW[1] / ZW),
            cW = Math.floor(mW[2] / ZW);
          !WW.isDrawn(NW, PW, cW) && WW.hasParts(NW, PW, cW) && EW.add(`${NW},${PW},${cW}`)
        }
        if (PW && WW.occluders[NW]) return;
        xW = NW
      }
    }

    function zL(WW, iW) {
      return WW.group - iW.group || WW.nearest - iW.nearest
    }
    class FL {
      constructor(WW, iW) {
        this.device = WW, this.Lk = iW, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var WW;
        const iW = null !== (WW = this.free.pop()) && void 0 !== WW ? WW : this.next++;
        if (8 * iW >= this.data.length) {
          const WW = new Float32Array(2 * this.data.length);
          WW.set(this.data), this.data = WW, this.words = new Uint32Array(WW.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Lk()
        }
        return iW
      }
      release(WW) {
        this.free.push(WW)
      }
      set(WW, iW, OW, mW, EW) {
        const NW = 8 * WW + Rm;
        this.data[NW] = iW, this.data[NW + 1] = OW, this.data[NW + 2] = mW, this.setVisibility(WW, EW)
      }
      setVisibility(WW, iW) {
        this.data[8 * WW + Gm] = iW, this.markDirty(WW, WW)
      }
      setFaces(WW, iW, OW) {
        const mW = 8 * WW;
        this.words[mW + Im] = iW, this.words[mW + am] = OW, this.markDirty(WW, WW)
      }
      markDirty(WW, iW) {
        this.dirtyMin = Math.min(this.dirtyMin, WW), this.dirtyMax = Math.max(this.dirtyMax, iW)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const QL = qm,
      Wc = !0;
    const ic = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: QL.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Oc = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class mc {
      constructor(WW) {
        this.device = WW, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Dm), this.dirLightUniforms = this.frameUniforms.subarray(gm.dirLights, gm.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, di.b)(), this.faceGroups = !0, this.visibilityGraph = Wc, this.visCull = Wc, this.visCheck = !1, this.visCullMinDistance = IL.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Lc, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.kA = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new oL(WW, ((WW, iW) => this.recordsGroup(WW, iW))), this.slots = new FL(WW, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = Yi(WW), this.frameLayout = WW.createBindGroupLayout({
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
        }), this.frameBuffer = WW.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = WW.createSampler({
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
          bind: (WW, iW) => this.createBinding(this.opaqueRenderable, iW, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (WW, iW) => this.createBinding(this.transparentRenderable, iW, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(WW, iW) {
        this.sceneDepth = new dL(this.device, this.transparentRenderable, WW, iW)
      }
      createFrameBindGroup() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== WW && void 0 !== WW ? WW : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== iW && void 0 !== iW ? iW : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(WW, iW) {
        const OW = null !== iW && void 0 !== iW ? iW : WW;
        let mW = this.recordsGroups.get(OW);
        return mW || (mW = this.createFrameBindGroup(WW, iW), this.recordsGroups.set(OW, mW)), mW
      }
      setChunkMesh(WW, iW, OW) {
        var mW;
        let EW = this.chunks.get(WW);
        EW ? this.geometry.release(EW) : (EW = {
          mesh: WW,
          slot: this.slots.allocate(),
          origin: [OW[0], OW[1], OW[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: WW.visibility,
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
        }, this.chunks.set(WW, EW), this.writeSlot(EW)), EW.material = WW.material ? this.materialFor(WW.material) : null, EW.packed = !!iW.packedVertices, EW.vertexCount = (0, SL.f)(iW), EW.faceCount = EW.vertexCount / 4;
        const NW = null !== (mW = iW.faceGroups) && void 0 !== mW ? mW : null;
        if (EW.faceGroups = NW, NW) {
          const WW = RL.o;
          EW.planePX = NW[WW], EW.planeNX = NW[WW + 1], EW.planePY = NW[WW + 2], EW.planeNY = NW[WW + 3], EW.planePZ = NW[WW + 4], EW.planeNZ = NW[WW + 5]
        }
        this.drawWhole(EW), 0 !== EW.faceCount && (this.geometry.set(EW, iW) ? (EW.packed && this.slots.setFaces(EW.slot, EW.vertices.start + EW.faceCount, EW.faceCount), iW.KA && this.setChunkMeshLight(WW, iW.KA)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${EW.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(WW, iW) {
        const OW = this.chunks.get(WW);
        OW && this.geometry.setLight(OW, iW)
      }
      drawStats() {
        let WW = this.transparent.length;
        for (const iW of this.opaqueBatches) WW += iW.meshes.length;
        return {
          drawn: WW,
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
      removeChunkMesh(WW) {
        const iW = this.chunks.get(WW);
        iW && (this.geometry.release(iW), this.slots.release(iW.slot), this.chunks.delete(WW))
      }
      remeshLost(WW, iW) {
        this.geometry.release(iW), iW.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** iW.lostRemeshes++);
        const OW = WW.oZ,
          [mW, EW, NW] = OW.KmW(iW.origin[0], iW.origin[1], iW.origin[2]),
          PW = OW.Tb.Jb(mW, EW, NW);
        PW && (PW.Yb = !0, PW.Hb = !0, OW.yb(PW, !1))
      }
      chooseFaceRanges(WW, iW, OW) {
        const mW = this.faceRanges;
        WW.faceMask = OW, WW.rangeCount = (0, GL.o)(iW, OW, mW), WW.first0 = mW[0], WW.count0 = mW[1], WW.first1 = mW[2], WW.count1 = mW[3]
      }
      drawWhole(WW) {
        WW.faceMask = -1, WW.faceEpoch = -1, WW.rangeCount = 1, WW.first0 = 0, WW.count0 = WW.faceCount
      }
      writeSlot(WW) {
        const [iW, OW, mW] = this.originOffset;
        this.slots.set(WW.slot, WW.origin[0] - iW, WW.origin[1] - OW, WW.origin[2] - mW, WW.visibility)
      }
      materialFor(WW) {
        const iW = this.materials.get(WW);
        if (iW) return iW;
        const OW = yL(WW);
        if (!OW) return this.warnOnce(`material:${WW.name}`, `Lite terrain cannot draw material "${WW.name}"; its chunks are skipped.`), null;
        const {
          model: mW,
          atlas: EW,
          texture: NW,
          animated: PW,
          uniformData: LW
        } = OW, cW = {
          id: this.materials.size,
          model: mW,
          texture: NW,
          animated: PW,
          uniformData: LW,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${WW.name}`,
            size: LW.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: OW.liquid,
          customRenderMat: OW.customRenderMat,
          atlasCount: 0,
          N_: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(WW, cW), this.device.queue.writeBuffer(cW.uniformBuffer, 0, LW), cW.ready = this.createMaterialBindGroup(cW, EW).catch((iW => {
          console.error(`Lite terrain failed to load the textures of material "${WW.name}"`, iW)
        })), cW
      }
      materialLayout(WW) {
        const iW = function(WW) {
            const iW = ["uniforms"];
            if ("atlas" === WW.texture) {
              WW.animated && iW.push("animData"), iW.push("sampler");
              for (let OW = 0; OW < WW.atlasCount; OW++) iW.push("textureArray")
            } else "single" === WW.texture && iW.push("sampler", "texture");
            return iW
          }(WW),
          OW = iW.join(",");
        let mW = this.materialLayouts.get(OW);
        if (!mW) {
          const WW = GPUShaderStage.FRAGMENT;
          mW = this.device.createBindGroupLayout({
            label: `terrain-material-${OW}`,
            entries: iW.map(((iW, OW) => {
              switch (iW) {
                case "uniforms":
                  return {
                    binding: OW, visibility: GPUShaderStage.VERTEX | WW, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: OW, visibility: GPUShaderStage.VERTEX | WW, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: OW, visibility: WW, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: OW, visibility: WW, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: OW, visibility: WW, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(OW, mW)
        }
        return mW
      }
      async createMaterialBindGroup(WW, iW) {
        const OW = [{
          buffer: WW.uniformBuffer
        }];
        if (iW) {
          const mW = await ii(this.device, iW.sources);
          WW.atlasCount = mW.length, WW.N_ = mW[0].layerWidth, WW.atlasLayers = mW[0].layers, iW.animDataPerTex && OW.push({
            buffer: IW(this.device, Float32Array.from(iW.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), OW.push(this.sampler);
          for (const WW of mW) OW.push(WW.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === WW.texture) {
          const {
            url: iW
          } = WW.model.diffuseTexture.source, {
            pixels: mW,
            width: EW,
            height: NW
          } = await Wi(iW);
          OW.push(this.sampler), OW.push(rW(this.device, mW, EW, NW, 1, `terrain-${iW}`).createView({
            dimension: "2d"
          }))
        }
        const mW = this.materialLayout(this.programKey(WW, !1));
        WW.bindGroupLayout = mW, WW.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${WW.model.name}`,
          layout: mW,
          entries: OW.map(((WW, iW) => ({
            binding: iW,
            resource: WW
          })))
        })
      }
      programKey(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const mW = OW ? OW.lighting : this.lighting,
          EW = OW ? OW.kA : this.kA,
          NW = {
            texture: WW.texture,
            atlasCount: WW.atlasCount,
            N_: WW.N_,
            atlasLayers: WW.atlasLayers,
            animated: WW.animated,
            alphaTest: WW.model.transparencyMode === TW.n.alphaTest,
            lighting: mW,
            dirLightCount: OW ? OW.dirLightCount : this.dirLightCount,
            packed: iW
          };
        if (!EW) return NW;
        const PW = this.shaderPackFields(WW, EW),
          LW = "atlas" === WW.texture && WW.model.transparencyMode === TW.n.opaque && nm(PW.packVariant);
        return {
          ...NW,
          ...PW,
          alphaTest: NW.alphaTest || LW
        }
      }
      shaderPackFields(WW, iW) {
        const OW = this.packVariant(WW, iW);
        return void 0 === OW ? hm : {
          packVariant: OW,
          liquid: WW.liquid
        }
      }
      packVariant(WW, iW) {
        return WW.customRenderMat ? void 0 : function(WW, iW) {
          const OW = WW ? WW.defineFor(iW ? "liquid" : "terrain") : 0;
          return 0 === OW ? void 0 : OW
        }(iW, WW.liquid)
      }
      isBlended(WW) {
        return WW.model.transparencyMode === TW.n.alphaBlend
      }
      shaderModule(WW, iW) {
        let OW = this.modules.get(WW);
        return OW || (OW = this.device.createShaderModule({
          label: iW,
          code: WW
        }), this.modules.set(WW, OW)), OW
      }
      pipelineFor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!WW.bindGroupLayout) return null;
        if (!mW) return this.pipelineOf(WW, iW, OW);
        const EW = this.pipelineIdNow(WW, iW, !0, OW),
          NW = this.pipelines.get(EW);
        if (NW) return NW;
        const PW = this.pipelineOf(WW, iW, OW);
        return PW && void 0 === NW && this.startPipeline(EW, WW, {
          ...this.programKey(WW, iW),
          resting: mW
        }, OW), PW
      }
      pipelineOf(WW, iW, OW) {
        const mW = this.pipelineIdNow(WW, iW, !1, OW),
          EW = this.pipelines.get(mW);
        return void 0 !== EW ? EW : (this.startPipeline(mW, WW, this.programKey(WW, iW), OW), null)
      }
      pipelineIdNow(WW, iW, OW, mW) {
        const {
          lighting: EW,
          dirLightCount: NW
        } = this, {
          transparencyMode: PW,
          backFaceCulling: LW
        } = WW.model, cW = this.packVariant(WW, this.kA), wW = (iW ? 2 : 0) + (OW ? 1 : 0), tW = WW.pipelineIds[wW];
        if (null !== tW && tW.lighting === EW && tW.dirLightCount === NW && tW.packVariant === cW && tW.transparencyMode === PW && tW.cull === LW && tW.atlasCount === WW.atlasCount && tW.N_ === WW.N_ && tW.atlasLayers === WW.atlasLayers && tW.colorFormat === mW._colorFormat && tW.depthStencilFormat === mW._depthStencilFormat && tW.sampleCount === mW._sampleCount) return tW.id;
        const ZW = this.programKey(WW, iW),
          xW = this.pipelineId(WW, OW ? {
            ...ZW,
            resting: OW
          } : ZW, mW);
        return WW.pipelineIds[wW] = {
          id: xW,
          lighting: EW,
          dirLightCount: NW,
          packVariant: cW,
          transparencyMode: PW,
          cull: LW,
          atlasCount: WW.atlasCount,
          N_: WW.N_,
          atlasLayers: WW.atlasLayers,
          colorFormat: mW._colorFormat,
          depthStencilFormat: mW._depthStencilFormat,
          sampleCount: mW._sampleCount
        }, xW
      }
      pipelineId(WW, iW, OW) {
        return Ec(iW, this.isBlended(WW), WW.model.backFaceCulling, OW)
      }
      pipelineBuild(WW, iW, OW) {
        var mW;
        const EW = this.pipelineId(WW, iW, OW);
        return null !== (mW = this.builds.get(EW)) && void 0 !== mW ? mW : this.startPipeline(EW, WW, iW, OW)
      }
      startPipeline(WW, iW, OW, mW) {
        var EW;
        this.pipelines.set(WW, null);
        const NW = iE(OW),
          PW = this.isBlended(iW),
          LW = this.shadowMask && mW._depthStencilFormat ? function(WW, iW, OW, mW) {
            if (void 0 === WW.packVariant || WW.liquid || iW) return "none";
            const EW = (0, Qi.i)(WW.packVariant);
            return null === EW || void 0 === EW || !EW.sunShadow || !Lm(EW, OW) || EW.discards || WW.alphaTest && nm(WW.packVariant) ? "none" : mW ? "edge" : "plain"
          }(OW, PW, !!this.sunShadow, mW._sampleCount > 1) : "none";
        let cW;
        try {
          cW = OE(OW, !!this.sunShadow, LW)
        } catch (jW) {
          if (!em(OW)) throw jW;
          return this.failedPackBuild(WW, OW, NW, jW)
        }
        const wW = this.shaderModule(cW, NW),
          tW = [];
        OW.packed || (tW.push(function(WW, iW) {
          const OW = [{
            shaderLocation: QL.position,
            offset: ri.e.mE,
            format: "float32x3"
          }, {
            shaderLocation: QL.normal,
            offset: ri.e.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: QL.color,
            offset: ri.e.colorOffset,
            format: "unorm8x4"
          }];
          return WW && OW.push({
            shaderLocation: QL.uv,
            offset: ri.e.uvOffset,
            format: "float32x2"
          }), iW && OW.push({
            shaderLocation: QL.blockFlagWords,
            offset: ri.e.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: ri.e.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: OW
          }
        }("none" !== OW.texture, em(OW))), OW.lighting && tW.push(ic));
        const ZW = iW.model.backFaceCulling,
          xW = {
            label: NW,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, iW.bindGroupLayout, ...rN(this.device, OW, !!this.sunShadow, "none" !== LW)]
            }),
            vertex: {
              module: wW,
              entryPoint: "mainVertex",
              buffers: tW
            },
            fragment: ki({
              module: wW,
              entryPoint: "mainFragment"
            }, mW, PW ? Oc : null),
            depthStencil: mW._depthStencilFormat ? {
              format: mW._depthStencilFormat,
              depthCompare: null !== (EW = mW._depthCompare) && void 0 !== EW ? EW : yi,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: mW._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: ZW ? "back" : "none"
            }
          },
          lW = OW.resting ? 0 : 1;
        this.compiling += lW;
        const AW = "none" === LW ? this.device.createRenderPipelineAsync(xW) : this.startMaskPipelines(wW, xW, "edge" === LW);
        AW.then((iW => {
          this.compiling -= lW, this.pipelines.set(WW, iW)
        }), (WW => {
          this.compiling -= lW, console.error(`Lite terrain pipeline ${NW} failed`, WW), qL(this.device, OW, NW, wW, WW)
        }));
        const bW = {
          name: NW,
          module: wW,
          built: AW
        };
        return this.builds.set(WW, bW), bW
      }
      startMaskPipelines(WW, iW, OW) {
        const mW = iW.depthStencil,
          EW = this.device.createRenderPipelineAsync(OW ? iW : {
            ...iW,
            depthStencil: {
              ...mW,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          NW = this.device.createRenderPipelineAsync({
            ...iW,
            label: `${iW.label}-prepass`,
            fragment: {
              module: WW,
              entryPoint: "prepassFragment",
              targets: [{
                format: eL
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([EW, NW]).then((WW => {
          let [iW, OW] = WW;
          return this.prepassOf.set(iW, OW), this.maskPipelines++, iW
        }))
      }
      failedPackBuild(WW, iW, OW, mW) {
        console.error(`Lite terrain pipeline ${OW} failed`, mW), qL(this.device, iW, OW, null, mW);
        const EW = Promise.reject(mW);
        EW.catch((() => {}));
        const NW = {
          name: OW,
          module: null,
          built: EW
        };
        return this.builds.set(WW, NW), NW
      }
      checkShaderPack(WW) {
        return CL(WW, {
          device: this.device,
          target: this.target,
          material: WW => this.materialFor(WW),
          programKey: (WW, iW, OW) => this.programKey(WW, iW, OW),
          pipelineBuild: (WW, iW, OW) => this.pipelineBuild(WW, iW, OW)
        })
      }
      createBinding(WW, iW, OW) {
        return this.target = iW, {
          renderable: WW,
          pipeline: ni(this.device, iW),
          draw: WW => {
            this.geometry.setDrawing(!0);
            try {
              return OW ? this.drawTransparent(WW, iW) : this.drawOpaque(WW, iW)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(WW, iW) {
        var OW, mW, EW, NW;
        const {
          Hx: PW
        } = WW;
        this.lighting = WW.qb;
        const LW = (0, KL.p)(iW);
        this.dirLightCount = Math.min(LW, 4), this.kA = null !== (OW = PW.kA) && void 0 !== OW ? OW : null, LW > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(WW, iW), this.animateMaterials(iW.animTick);
        const cW = PW.Wl,
          wW = cW[0] !== this.originOffset[0] || cW[1] !== this.originOffset[1] || cW[2] !== this.originOffset[2];
        wW && (this.originOffset[0] = cW[0], this.originOffset[1] = cW[1], this.originOffset[2] = cW[2]);
        const tW = iW.eye;
        this.eye[0] = tW[0], this.eye[1] = tW[1], this.eye[2] = tW[2], this.writeShaderPackInputs();
        const ZW = iW.projectionMatrix,
          xW = 0 === ZW[15];
        let lW = 0;
        (wW || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: AW
        } = this;
        ui(this.transparentRenderable._worldCenter, iW, Ji), this.resetBatches(xW), this.transparent.length = 0, this.unlit.length = 0;
        const bW = PW.oZ.UZ,
          jW = bW / 2 * Math.sqrt(3);
        let UW = 0;
        const kW = !!this.kA && Hm(this.kA.defineFor("liquid"));
        let sW = !1;
        const MW = null !== (mW = null === (EW = PW.bY) || void 0 === EW ? void 0 : EW.visibility) && void 0 !== mW ? mW : null,
          KW = this.visCull && xW && 0 === this.compiling && null !== MW && PW.oZ.lEW[0] >= this.visCullMinDistance ? this.target : null,
          SW = this.visPassable,
          YW = this.visCandidates,
          yW = this.visCandidateBatches;
        SW.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let TW = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let JW = 0;
        const hW = (WW, OW) => {
          if (!OW) return this.transparent.push(WW), void(JW += 2 * WW.faceCount);
          if (null !== WW.faceGroups && OW.faceCull) {
            if (0 === lW && (lW = (0, GL.e)(ZW, iW.renderWidth, iW.renderHeight), lW !== this.faceFocalPx && (this.faceFocalPx = lW, AW = ++this.faceEpoch)), WW.faceEpoch !== AW) {
              WW.faceEpoch = AW;
              const iW = Math.sqrt(WW.distance) + jW,
                OW = (0, GL.j)(WW.planePX, WW.planeNX, WW.planePY, WW.planeNY, WW.planePZ, WW.planeNZ, this.eye[0] - (WW.origin[0] - this.originOffset[0]), this.eye[1] - (WW.origin[1] - this.originOffset[1]), this.eye[2] - (WW.origin[2] - this.originOffset[2]), (0, GL.h)(iW, lW));
              OW !== WW.faceMask && this.chooseFaceRanges(WW, WW.faceGroups, OW)
            }
            if (0 === WW.rangeCount) return
          } else - 1 !== WW.faceMask && this.drawWhole(WW);
          OW.meshes.push(WW), JW += 2 * ((WW.rangeCount > 0 ? WW.count0 : 0) + (WW.rangeCount > 1 ? WW.count1 : 0))
        };
        for (const nW of this.chunks.values()) {
          wW && this.writeSlot(nW);
          const WW = nW.mesh.visibility;
          WW !== nW.visibility && (nW.visibility = WW, this.slots.setVisibility(nW.slot, WW));
          const {
            material: OW
          } = nW;
          this.geometry.lost(nW) && performance.now() >= nW.lostRetryAt && this.remeshLost(PW, nW);
          const mW = !(null === OW || void 0 === OW || !OW.bindGroup) && this.geometry.backed(nW),
            EW = mW && this.lighting && !nW.vertices.page.twin;
          if (KW && (Number.isNaN(nW.key) && (nW.ci = Math.floor(nW.origin[0] / bW), nW.cj = Math.floor(nW.origin[1] / bW), nW.ck = Math.floor(nW.origin[2] / bW), nW.key = (0, aL.e)(nW.ci, nW.cj, nW.ck)), (!mW || WW < 1 || EW || !this.batchDraws(OW, nW.packed, KW)) && this.visSeeThrough(nW, KW) && SW.add(nW.key)), !mW) continue;
          EW || (nW.lostRemeshes = 0);
          const NW = nW.origin[0] - this.originOffset[0],
            LW = nW.origin[1] - this.originOffset[1],
            cW = nW.origin[2] - this.originOffset[2];
          if (!(0, wL.e)(iW.frustum, NW, LW, cW, bW)) continue;
          const tW = NW + bW / 2 - this.eye[0],
            ZW = LW + bW / 2 - this.eye[1],
            lW = cW + bW / 2 - this.eye[2];
          if (nW.distance = tW * tW + ZW * ZW + lW * lW, this.lighting && !nW.lit && (UW = Math.max(UW, nW.vertexCount), this.unlit.push(nW)), EW) continue;
          const AW = this.isBlended(OW) ? null : this.batchFor(OW, nW.packed, nW.vertices.page, 1 === WW, xW);
          KW ? (YW[TW] = nW, yW[TW++] = AW) : hW(nW, AW)
        }
        const HW = KW ? this.sweepVisibility(WW, iW, MW) : null;
        null === (NW = (0, VN.q)(PW)) || void 0 === NW || NW.update(iW.frustum, this.originOffset, bW, HW);
        for (let nW = 0; nW < TW; nW++) {
          const WW = YW[nW];
          !HW || HW.isDrawn(WW.ci, WW.cj, WW.ck) ? hW(WW, yW[nW]) : (this.visCulledParts++, this.visCulledTriangles += 2 * WW.faceCount)
        }
        for (const nW of this.transparent) sW ||= kW && nW.material.liquid && !nW.material.customRenderMat;
        this.submittedTriangles = JW, HW && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(WW, iW, HW)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(sW) : sW && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && UW > 0 && this.geometry.lightFullSky(this.unlit, UW);
        for (const nW of this.opaqueBatches) this.chunkSorter.sort(nW.meshes, 1) || nW.meshes.sort(Nc);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Pc)
      }
      sweepVisibility(WW, iW, OW) {
        const {
          oZ: mW
        } = WW.Hx, EW = mW.UZ, NW = this.visPassable, PW = this.eye[0] + this.originOffset[0], LW = this.eye[1] + this.originOffset[1], cW = this.eye[2] + this.originOffset[2];
        if (!OW.eyeClear(PW, LW, cW, iW.near, iW.projectionMatrix, mW)) return null;
        const [wW, tW] = mW.lEW, ZW = OW.update(PW, LW, cW, EW, wW, tW, NW);
        return this.visSweeps = OW.sweeps, ZW ? OW : null
      }
      visSeeThrough(WW, iW) {
        const {
          material: OW
        } = WW;
        return (!OW || !this.isBlended(OW)) && (WW.mesh.visibility < 1 || !(null !== OW && void 0 !== OW && OW.bindGroup) || WW.faceCount > 0 && (!this.geometry.backed(WW) || this.lighting && !WW.vertices.page.twin) || !this.batchDraws(OW, WW.packed, iW))
      }
      batchDraws(WW, iW, OW) {
        var mW;
        const EW = iW ? 2 : 0;
        if (WW === this.visDrawsMaterial && function(WW, iW) {
            return 0 !== (WW & 1 << iW)
          }(this.visDrawsBits, EW)) return 0 !== (this.visDrawsBits & 2 << EW);
        let NW = null !== (mW = this.visBatchDraws.get(WW)) && void 0 !== mW ? mW : 0;
        if (!(NW & 1 << EW)) {
          NW |= 1 << EW | (!!WW.bindGroupLayout && this.canDraw(WW, iW) && !!this.pipelines.get(this.pipelineIdNow(WW, iW, !1, OW)) ? 2 << EW : 0), this.visBatchDraws.set(WW, NW)
        }
        return this.visDrawsMaterial = WW, this.visDrawsBits = NW, 0 !== (NW & 2 << EW)
      }
      runVisCheck(WW, iW, OW) {
        const {
          Hx: mW
        } = WW, {
          oZ: EW
        } = mW, NW = EW.UZ, PW = new Set;
        for (const lW of this.chunks.values()) PW.add(lW.key);
        const LW = RE.Matrix.FromArray(iW.viewProjectionMatrix).invert(),
          [cW, wW, tW] = this.originOffset,
          ZW = new RE.fA,
          xW = function(WW, iW, OW, mW) {
            const EW = new Set;
            for (let NW = 0; NW < 27; NW++)
              for (let PW = 0; PW < 48; PW++) {
                const LW = OW((PW + .5) / 48 * 2 - 1, (NW + .5) / 27 * 2 - 1);
                rL(WW, iW, [LW[0] - iW[0], LW[1] - iW[1], LW[2] - iW[2]], mW, EW)
              }
            return EW
          }({
            jR: (WW, iW, OW) => EW.jR(WW, iW, OW),
            occluders: OW.occluders,
            opaque: OW.opaque,
            jZ: NW,
            isDrawn: (WW, iW, mW) => OW.isDrawn(WW, iW, mW),
            hasParts: (WW, iW, OW) => PW.has((0, aL.e)(WW, iW, OW))
          }, [this.eye[0] + cW, this.eye[1] + wW, this.eye[2] + tW], ((WW, iW) => (RE.fA.TransformCoordinatesFromFloatsToRef(WW, iW, .5, LW, ZW), [ZW.x + cW, ZW.y + wW, ZW.z + tW])), (EW.lEW[0] + 1) * NW);
        this.visViolations = xW.size;
        for (const lW of xW) this.warnOnce(`vis:${lW}`, `Lite terrain cave culling skipped chunk ${lW}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var WW;
        null !== (WW = this.kA) && void 0 !== WW && WW.isRunning() && (this.shaderPackInputs ??= new zN(this.device, this.kA.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.kA, this.eye, this.lighting))
      }
      bindShaderPackInputs(WW, iW, OW) {
        var mW, EW, NW, PW;
        let LW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const cW = this.packVariant(iW, OW);
        if (void 0 === cW) return;
        this.shaderPackInputs || (this.shaderPackInputs = new zN(this.device, OW.textureLayers(), this.sunShadow), this.shaderPackInputs.write(OW, this.eye, this.lighting));
        const wW = Hm(cW) ? null !== (mW = null === (EW = this.sceneDepth) || void 0 === EW ? void 0 : EW.view) && void 0 !== mW ? mW : this.standIn() : null,
          tW = LW ? null !== (NW = null === (PW = this.shadowMask) || void 0 === PW ? void 0 : PW.view) && void 0 !== NW ? NW : this.standIn() : null;
        this.shaderPackInputs.bind(WW, wW, aN(cW, !!this.sunShadow), tW)
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
        var WW, iW;
        return null !== (WW = null === (iW = this.shaderPackInputs) || void 0 === iW ? void 0 : iW.bindGroupFor(null, !0)) && void 0 !== WW ? WW : null
      }
      resetBatches(WW) {
        const iW = this.opaqueBatches;
        let OW = 0;
        for (const mW of iW) mW.meshes.length > 0 && (mW.meshes.length = 0, mW.faceCull = this.batchFaceCull(mW.material, WW), iW[OW++] = mW);
        iW.length = OW
      }
      orderBatches() {
        const WW = this.opaqueBatches;
        for (let iW = 0; iW < WW.length; iW++) {
          const OW = WW[iW];
          OW.group = iW;
          for (let mW = 0; mW < iW; mW++) {
            const iW = WW[mW];
            if (iW.material === OW.material && iW.packed === OW.packed) {
              OW.group = iW.group;
              break
            }
          }
          OW.nearest = OW.meshes.length > 0 ? OW.meshes[0].distance : 1 / 0
        }
        WW.sort(zL)
      }
      batchFor(WW, iW, OW, mW, EW) {
        for (const PW of this.opaqueBatches)
          if (PW.material === WW && PW.packed === iW && PW.page === OW && PW.resting === mW) return PW;
        const NW = {
          material: WW,
          packed: iW,
          page: OW,
          resting: mW,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(WW, EW)
        };
        return this.opaqueBatches.push(NW), NW
      }
      batchFaceCull(WW, iW) {
        return !(!iW || !(0, RL.w)(WW.model)) && (!this.kA || ! function(WW) {
          var iW;
          return !(null === (iW = (0, Qi.i)(WW)) || void 0 === iW || !iW.movesVertices)
        }(this.packVariant(WW, this.kA)))
      }
      writeFrameUniforms(WW, iW) {
        const OW = this.frameUniforms,
          mW = gm;
        if ((0, KL.s)(WW, OW), OW[mW.fogInfos] = iW.fogEnabled ? iW.fogMode : 0, OW[mW.fogInfos + 1] = iW.fogStart, OW[mW.fogInfos + 2] = iW.fogEnd, OW[mW.fogInfos + 3] = iW.fogDensity, OW.set(iW.fogColour, mW.fogColour), OW[mW.outputHeight] = iW.renderHeight, OW.set(iW.ambientColour, mW.sceneAmbient), (0, KL.o)(iW, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const iW = (0, SL.h)(WW.cb, WW.eA, WW.vA);
          for (let WW = 0; WW < 4; WW++) OW[mW.aoLevels + WW] = iW[WW] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, OW)
      }
      animateMaterials(WW) {
        const iW = Vm.anim;
        for (const OW of this.materials.values()) OW.animated && (OW.uniformData[iW] = WW, this.device.queue.writeBuffer(OW.uniformBuffer, 4 * iW, OW.uniformData, iW, 1))
      }
      canDraw(WW, iW) {
        return !("atlas" === WW.texture && !iW) || (this.warnOnce(`stride:${WW.id}`, `Lite terrain: material "${WW.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(WW, iW) {
        let OW = 0;
        WW.setBindGroup(1, this.frameBindGroup);
        for (const mW of this.opaqueBatches) {
          if (!mW.meshes.length || !this.canDraw(mW.material, mW.packed)) continue;
          const EW = this.pipelineFor(mW.material, mW.packed, iW, mW.resting);
          EW && (WW.setPipeline(EW), WW.setBindGroup(2, mW.material.bindGroup), this.kA && this.bindShaderPackInputs(WW, mW.material, this.kA, this.prepassOf.has(EW)), OW += this.drawBatch(WW, mW))
        }
        return OW
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(WW, iW, OW) {
        const mW = this.target,
          EW = this.kA;
        if (!mW || !EW || 0 === this.maskPipelines) return 0;
        let NW = 0,
          PW = null;
        this.geometry.setDrawing(!0);
        try {
          for (const LW of this.opaqueBatches) {
            if (!LW.meshes.length || !this.canDraw(LW.material, LW.packed)) continue;
            const cW = this.pipelineFor(LW.material, LW.packed, mW, LW.resting),
              wW = cW && this.prepassOf.get(cW);
            wW && (PW || (PW = WW.beginRenderPass(iW), PW.setBindGroup(0, OW), PW.setBindGroup(1, this.frameBindGroup)), PW.setPipeline(wW), PW.setBindGroup(2, LW.material.bindGroup), this.bindShaderPackInputs(PW, LW.material, EW, !0), NW += this.drawBatch(PW, LW))
          }
        } finally {
          var LW;
          null === (LW = PW) || void 0 === LW || LW.end(), this.geometry.setDrawing(!1)
        }
        return NW
      }
      drawBatch(WW, iW) {
        let OW = 0;
        for (const mW of iW.meshes) {
          const {
            rangeCount: iW
          } = mW;
          iW > 0 && (OW += this.geometry.draw(WW, mW, this.lighting, mW.first0, mW.count0), iW > 1 && (OW += this.geometry.draw(WW, mW, this.lighting, mW.first1, mW.count1)))
        }
        return OW
      }
      drawTransparent(WW, iW) {
        let OW = 0,
          mW = null,
          EW = null;
        WW.setBindGroup(1, this.frameBindGroup);
        for (const NW of this.transparent) {
          const PW = NW.material;
          if (!this.canDraw(PW, NW.packed)) continue;
          const LW = this.pipelineFor(PW, NW.packed, iW);
          LW && (LW !== mW && (WW.setPipeline(LW), mW = LW, this.kA && this.bindShaderPackInputs(WW, PW, this.kA)), PW !== EW && (WW.setBindGroup(2, PW.bindGroup), EW = PW), OW += this.geometry.draw(WW, NW, this.lighting))
        }
        return OW
      }
    }

    function Ec(WW, iW, OW, mW) {
      return `${iE(WW)}|${WW.atlasLayers}|${WW.N_}|${iW}|${OW}|${mW._colorFormat}|${mW._depthStencilFormat}|${mW._sampleCount}`
    }

    function Nc(WW, iW) {
      return WW.distance - iW.distance
    }

    function Pc(WW, iW) {
      return iW.distance - WW.distance
    }
    class Lc {
      constructor() {
        this.left = []
      }
      sort(WW, iW) {
        for (let OW = 0; OW < WW.length; OW++) {
          const iW = WW[OW].distance;
          if (iW - iW !== 0) return !1
        }
        return this.sortRange(WW, 0, WW.length, iW), !0
      }
      sortRange(WW, iW, OW, mW) {
        if (OW - iW <= 16) {
          for (let EW = iW + 1; EW < OW; EW++) {
            const OW = WW[EW],
              NW = mW * OW.distance;
            let PW = EW - 1;
            for (; PW >= iW && mW * WW[PW].distance > NW; PW--) WW[PW + 1] = WW[PW];
            WW[PW + 1] = OW
          }
          return
        }
        const EW = iW + OW >>> 1;
        if (this.sortRange(WW, iW, EW, mW), this.sortRange(WW, EW, OW, mW), mW * WW[EW - 1].distance <= mW * WW[EW].distance) return;
        const {
          left: NW
        } = this, PW = EW - iW;
        for (let tW = 0; tW < PW; tW++) NW[tW] = WW[iW + tW];
        let LW = 0,
          cW = EW,
          wW = iW;
        for (; LW < PW && cW < OW;) WW[wW++] = mW * WW[cW].distance < mW * NW[LW].distance ? WW[cW++] : NW[LW++];
        for (; LW < PW;) WW[wW++] = NW[LW++]
      }
    }
    const cc = Math.ceil(102);

    function wc(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : iW;
      const NW = Math.min(iW, OW),
        PW = new Uint32Array(yO(mW));
      for (let LW = 0; LW < mW; LW++) {
        const iW = Math.floor(LW * NW / mW),
          OW = Math.max(iW + 1, Math.floor((LW + 1) * NW / mW));
        for (let cW = 0; cW < mW; cW++) {
          const wW = Math.floor(cW * NW / mW),
            tW = Math.max(wW + 1, Math.floor((cW + 1) * NW / mW));
          let ZW = 0;
          for (let mW = iW; mW < OW; mW++)
            for (let iW = wW; iW < tW; iW++) WW[mW * EW + iW] >= cc && ZW++;
          if (2 * ZW >= (OW - iW) * (tW - wW)) {
            const WW = cW + mW * LW;
            PW[WW >>> 5] |= 1 << (31 & WW)
          }
        }
      }
      return PW
    }

    function tc(WW) {
      return Math.max(1, Math.min(16, WW))
    }
    class Zc {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = WW, this.loadTexture = iW, this.warn = OW, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(WW, iW) {
        return (WW.zC !== this.builtVersion || this.blockCaster.length !== iW) && (this.build(WW, iW), !0)
      }
      build(WW, iW) {
        this.builtVersion = WW.zC;
        const OW = new Uint16Array(iW),
          mW = new Map;
        for (let EW = 1; EW < iW; EW++) {
          const iW = this.classify(WW, EW, mW);
          if (null === iW || iW === sO) {
            OW[EW] = null === iW ? 0 : sO;
            continue
          }
          let NW = this.byKey.get(iW.key);
          void 0 === NW && (NW = this.allocate(iW), this.byKey.set(iW.key, NW)), OW[EW] = NW
        }
        this.blockCaster = OW, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(WW, iW) {
        const OW = WW.T_[iW];
        if ("function" !== typeof OW) return OW;
        try {
          return OW()
        } catch (mW) {
          return this.warnOnce(`Sun shadows: no caster option for block ${iW}: ${mW instanceof Error?mW.message:String(mW)}`), null
        }
      }
      classify(WW, iW, OW) {
        const mW = this.option(WW, iW);
        if ("none" === mW) return null;
        if (mW && mW.planes.length > 0) {
          const WW = mW.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(WW)}`,
            planes: WW
          }
        }
        if (WW.ol[iW]) return null;
        const EW = WW.el[iW] ? WW.yX(iW) : null;
        if (EW && EW.length >= 6) {
          const WW = function(WW) {
            const iW = new Uint32Array(16);
            for (let OW = 0; OW + 6 <= WW.length; OW += 6) {
              const mW = [0, 1, 2].map((iW => Math.max(0, Math.ceil(8 * WW[OW + iW] - .5)))),
                EW = [0, 1, 2].map((iW => Math.min(7, Math.floor(8 * WW[OW + iW + 3] - .5))));
              for (let WW = mW[2]; WW <= EW[2]; WW++)
                for (let OW = mW[1]; OW <= EW[1]; OW++)
                  for (let NW = mW[0]; NW <= EW[0]; NW++) {
                    const mW = NW + 8 * (OW + 8 * WW);
                    iW[mW >>> 5] |= 1 << (31 & mW)
                  }
            }
            return iW
          }(EW);
          return function(WW) {
            return WW.every((WW => 4294967295 === WW))
          }(WW) ? sO : WW.every((WW => 0 === WW)) ? null : {
            kind: "shape",
            key: `shape:${WW.join(",")}`,
            mask: WW
          }
        }
        if (WW.lT[iW] || !WW.tb[iW]) return null;
        const NW = [0, 1, 2, 3, 4, 5].map((mW => {
          const EW = WW.Zb[6 * iW + mW];
          let NW = OW.get(EW);
          return void 0 === NW && (NW = function(WW) {
            if (!WW || WW.Kb) return null;
            const {
              E_: iW,
              N_: OW,
              m_: mW
            } = WW;
            if (!iW || !OW || !(OW > 0) || void 0 === mW || !(mW >= 0)) return null;
            const EW = iW[0],
              NW = OW * OW * 4;
            if (!EW || EW.byteLength < NW) return null;
            const PW = Math.floor(EW.byteLength / NW),
              LW = iW[Math.floor(mW / PW)];
            if (!LW) return null;
            const cW = new Uint8Array(LW.buffer, LW.byteOffset, LW.byteLength),
              wW = mW % PW * NW;
            if (wW + NW > cW.length) return null;
            const tW = new Uint8Array(OW * OW);
            let ZW = !1;
            for (let xW = 0; xW < tW.length; xW++) tW[xW] = cW[wW + 4 * xW + 3], ZW ||= tW[xW] < cc;
            return ZW ? {
              alpha: tW,
              width: OW
            } : null
          }(WW.Mb(EW)), OW.set(EW, NW)), NW
        }));
        if (NW.every((WW => null === WW))) return sO;
        const PW = tc(Math.max(...NW.map((WW => {
            var iW;
            return null !== (iW = null === WW || void 0 === WW ? void 0 : WW.width) && void 0 !== iW ? iW : 1
          })))),
          LW = new Uint32Array(yO(PW)).fill(4294967295),
          cW = NW.map((WW => null === WW ? LW : wc(WW.alpha, WW.width, WW.width, PW)));
        return {
          kind: "cutout",
          key: `cutout:${PW}:${cW.map((WW=>WW.join(","))).join("|")}`,
          size: PW,
          faces: cW
        }
      }
      allocate(WW) {
        if (this.nextCaster >= TO) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const iW = this.nextCaster++;
        if (this.writeCaster(iW, MO, 0, 0, 0), "shape" === WW.kind) {
          const OW = this.allocateMask(WW.mask.length);
          OW >= 0 && (this.sink(OW, WW.mask), this.writeCaster(iW, KO, OW, 0, 8))
        } else if ("cutout" === WW.kind) {
          const OW = yO(WW.size),
            mW = this.allocateMask(6 * OW);
          if (mW >= 0) {
            const EW = new Uint32Array(6 * OW);
            WW.faces.forEach(((WW, iW) => {
              EW.set(WW, iW * OW)
            })), this.sink(mW, EW), this.writeCaster(iW, YO, mW, 0, WW.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(iW, WW.planes).finally((() => {
          this.planesLoading--
        })));
        return iW
      }
      async loadPlanes(WW, iW) {
        const OW = await Promise.all(iW.map((WW => this.texture(WW.texture))));
        if (OW.some((WW => null === WW))) return;
        const mW = OW,
          EW = tc(Math.max(...mW.map((WW => Math.min(WW.width, WW.height))))),
          NW = yO(EW),
          PW = this.allocateMask(iW.length * (4 + NW));
        if (PW < 0) return;
        const LW = new Uint32Array(iW.length * (4 + NW)),
          cW = 4 * iW.length;
        iW.forEach(((WW, iW) => {
          const OW = PW + cW + iW * NW;
          LW.set(function(WW, iW) {
            const [OW, mW] = WW.tangent, EW = Math.hypot(OW, mW) || 1, NW = OW / EW, PW = mW / EW, LW = WW.centre[0] * PW - WW.centre[1] * NW, cW = new Uint32Array(4);
            return new Float32Array(cW.buffer, 0, 3).set([NW, PW, LW]), cW[3] = iW, cW
          }(WW, OW), 4 * iW), LW.set(wc(mW[iW].alpha, mW[iW].width, mW[iW].height, EW), cW + iW * NW)
        })), this.sink(PW, LW), this.writeCaster(WW, SO, PW, iW.length, EW)
      }
      texture(WW) {
        let iW = this.textures.get(WW);
        return iW || (iW = this.loadTexture(WW).catch((iW => (this.warn(`Sun shadows: no mask for ${WW}: ${iW instanceof Error?iW.message:String(iW)}`), null))), this.textures.set(WW, iW)), iW
      }
      allocateMask(WW) {
        if (this.nextMaskWord + WW > JO) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const iW = 32768 + this.nextMaskWord;
        return this.nextMaskWord += WW, iW
      }
      writeCaster(WW, iW, OW, mW, EW) {
        this.sink(0 + 4 * WW, Uint32Array.of(iW, OW, mW, EW))
      }
      warnOnce(WW) {
        this.warned.has(WW) || (this.warned.add(WW), this.warn(WW))
      }
    }
    var xc = OW(3884);

    function lc(WW) {
      return !WW.Yb && !WW.jy && !WW.QA
    }

    function Ac() {
      return {
        bricks: new Uint32Array(ZO),
        cells: new Uint16Array(32768),
        special: new Uint8Array(wO)
      }
    }
    class bc {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = WW, this.writeVoxels = iW, this.writePool = OW, this.warn = mW, this.eyeChunk = null, this.slotChunk = new Array(mO).fill(null), this.slotVersion = new Float64Array(mO).fill(-1), this.slotPool = new Array(mO).fill(null), this.starved = new Uint8Array(mO), this.queue = [], this.queued = new Uint8Array(mO), this.queueSorted = !0, this.freePool = new Uint32Array(hO), this.freeCount = hO, this.casterTable = null, this.warnedPool = !1, this.scratch = Ac(), this.victimScratch = Ac(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * mO), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let EW = 0; EW < hO; EW++) this.freePool[EW] = 65535 - EW
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return hO - this.freeCount
      }
      chunkAdded(WW) {
        if (null === this.eyeChunk || !this.inRadius(WW.i, WW.j, WW.k)) return;
        const iW = jO(WW.i, WW.j, WW.k);
        this.slotChunk[iW] = WW, this.slotVersion[iW] = -1, this.enqueue(iW)
      }
      update(WW, iW, OW) {
        const mW = this.casters.blockCaster;
        if (mW !== this.casterTable) {
          this.casterTable = mW;
          for (let WW = 0; WW < mO; WW++) this.slotVersion[WW] = -1, this.slotChunk[WW] && this.enqueue(WW)
        }
        const EW = Math.floor(WW[0] / 32),
          NW = Math.floor(WW[1] / 32),
          PW = Math.floor(WW[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== EW || this.eyeChunk[1] !== NW || this.eyeChunk[2] !== PW) && (this.eyeChunk = [EW, NW, PW], this.follow(iW), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let LW = 0; LW < mO; LW++) {
          const WW = this.slotChunk[LW];
          WW && (WW.Ay || WW.Ob !== this.slotVersion[LW]) && this.enqueue(LW)
        }
        this.drain(OW), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(WW, iW) {
        this.records.set(iW, 4 * WW), this.windowTopStale = !0, this.writeVoxels(4 * WW, iW)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const WW = this.records;
        let iW = -1 / 0;
        for (let mW = 0; mW < WW.length; mW += 4) {
          const OW = 255 & WW[mW + 3];
          OW !== PO && OW !== LO || !this.inRadius(WW[mW], WW[mW + 1], WW[mW + 2]) || (iW = Math.max(iW, WW[mW + 1] * WO + (WW[mW + 3] >>> 8)))
        }
        const OW = iW === -1 / 0 ? 1 : iW + lO;
        OW !== this.windowTop[0] && (this.windowTop[0] = OW, this.writeVoxels(xO, this.windowTop))
      }
      follow(WW) {
        const iW = this.eyeChunk,
          [OW, mW, EW] = iO;
        for (let PW = -EW; PW <= EW; PW++)
          for (let EW = -mW; EW <= mW; EW++)
            for (let mW = -OW; mW <= OW; mW++) {
              var NW;
              const OW = iW[0] + mW,
                LW = iW[1] + EW,
                cW = iW[2] + PW,
                wW = jO(OW, LW, cW),
                tW = this.slotChunk[wW];
              if (tW && !tW.Ay && tW.i === OW && tW.j === LW && tW.k === cW) continue;
              const ZW = null !== (NW = WW(OW, LW, cW)) && void 0 !== NW ? NW : null;
              tW && (tW.i !== OW || tW.j !== LW || tW.k !== cW) && this.slotPool[wW] && (this.release(wW), this.record.fill(0), this.writeRecord(wW, this.record)), this.slotChunk[wW] = ZW, this.slotVersion[wW] = -1, (ZW || tW) && this.enqueue(wW)
            }
      }
      requeueStarved() {
        for (let WW = 0; WW < mO; WW++) this.starved[WW] && this.slotChunk[WW] && this.enqueue(WW)
      }
      enqueue(WW) {
        this.queued[WW] || (this.queued[WW] = 1, this.queue.push(WW), this.queueSorted = !1)
      }
      drain(WW) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const WW = new Map;
          for (const iW of this.queue) WW.set(iW, this.slotDistance(iW));
          this.queue.sort(((iW, OW) => WW.get(OW) - WW.get(iW))), this.queueSorted = !0
        }
        const iW = performance.now();
        let OW = 0;
        const mW = [];
        for (; this.queue.length > 0 && (0 === OW || performance.now() - iW < WW);) {
          const WW = this.queue.pop(),
            iW = this.slotChunk[WW];
          !iW || iW.Ay || lc(iW) ? (this.queued[WW] = 0, this.encodeSlot(WW), OW++) : mW.push(WW)
        }
        for (let EW = mW.length - 1; EW >= 0; EW--) this.queue.push(mW[EW])
      }
      slotDistance(WW) {
        const iW = this.slotChunk[WW],
          OW = this.eyeChunk;
        return iW ? Math.max(Math.abs(iW.i - OW[0]), Math.abs(iW.j - OW[1]), Math.abs(iW.k - OW[2])) : 0
      }
      inRadius(WW, iW, OW) {
        const mW = this.eyeChunk,
          [EW, NW, PW] = iO;
        return Math.abs(WW - mW[0]) <= EW && Math.abs(iW - mW[1]) <= NW && Math.abs(OW - mW[2]) <= PW
      }
      release(WW) {
        const iW = this.slotPool[WW];
        if (iW) {
          for (let WW = iW.length - 1; WW >= 0; WW--) this.freePool[this.freeCount++] = iW[WW];
          this.slotPool[WW] = null
        }
      }
      encodeSlot(WW) {
        var iW, OW, mW, EW, NW;
        let PW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          LW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const cW = null !== (iW = null === (OW = this.slotPool[WW]) || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0;
        this.release(WW), this.starved[WW] = 0;
        const wW = this.slotChunk[WW],
          tW = this.record;
        if (!wW || wW.Ay || !wW.El) return this.slotChunk[WW] = null, this.slotVersion[WW] = -1, tW.fill(0), this.writeRecord(WW, tW), void(cW > 0 && this.requeueStarved());
        this.slotVersion[WW] = wW.Ob;
        const ZW = this.encodeBricks(wW, WW, PW, LW);
        tW[0] = wW.i, tW[1] = wW.j, tW[2] = wW.k, tW[3] = ZW, this.writeRecord(WW, tW), null === (mW = this.encoded) || void 0 === mW || mW.call(this, wW), LW && (null !== (EW = null === (NW = this.slotPool[WW]) || void 0 === NW ? void 0 : NW.length) && void 0 !== EW ? EW : 0) < cW && this.requeueStarved()
      }
      encodeBricks(WW, iW, OW, mW) {
        if (WW.YA) return NO;
        const EW = this.casters.blockCaster,
          {
            data: NW,
            stride: PW,
            offset: LW
          } = WW.El,
          [cW, wW, tW] = PW,
          ZW = WO,
          {
            bricks: xW,
            cells: lW,
            special: AW
          } = OW;
        xW.fill(0), AW.fill(0);
        let bW = 0,
          jW = 0,
          UW = 0;
        for (let kW = 0; kW < ZW; kW++) {
          const iW = kW >> 2,
            OW = 3 & kW,
            mW = WW.zl[kW],
            PW = mW === xc.i ? -1 : mW < EW.length ? EW[mW] : 0;
          if (0 !== PW)
            for (let WW = 0; WW < ZW; WW++) {
              const mW = WW >> 2,
                sW = 3 & WW;
              let MW = LW + WW * cW + kW * wW;
              for (let WW = 0; WW < ZW; WW++, MW += tW) {
                let LW = PW;
                if (LW < 0) {
                  const WW = NW[MW];
                  if (LW = WW < EW.length ? EW[WW] : 0, 0 === LW) continue
                }
                const cW = UO(mW, iW, WW >> 2),
                  wW = kO(sW, OW, 3 & WW);
                xW[3 * cW + (wW >>> 5)] |= 1 << (31 & wW), lW[cW * cO + wW] = LW, bW++, UW = kW, LW === sO ? jW++ : AW[cW] = 1
              }
            }
        }
        return 0 === bW ? NO : 32768 === jW ? PO | UW << 8 : (this.writePoolEntries(iW, OW, mW), this.writeVoxels(tO + iW * ZO, xW), LO | UW << 8)
      }
      writePoolEntries(WW, iW, OW) {
        const {
          bricks: mW,
          cells: EW,
          special: NW
        } = iW, PW = this.entry;
        let LW = 0;
        for (let tW = 0; tW < wO; tW++) LW += NW[tW];
        if (0 === LW) return;
        OW && this.freeCount < LW && this.evictBeyond(WW, LW);
        const cW = new Uint32Array(OW ? Math.min(LW, this.freeCount) : 0);
        let wW = 0;
        for (let tW = 0; tW < wO; tW++) {
          if (!NW[tW]) continue;
          const OW = 3 * tW;
          if (wW === cW.length) {
            this.dropSpecials(iW, tW), this.starved[WW] = 1;
            continue
          }
          const LW = this.freePool[--this.freeCount];
          cW[wW++] = LW;
          for (let WW = 0; WW < cO; WW++) {
            const iW = mW[OW + (WW >>> 5)] >>> (31 & WW) & 1 ? EW[tW * cO + WW] : 0;
            1 & WW ? PW[WW >> 1] |= iW << 16 : PW[WW >> 1] = iW
          }
          mW[OW + 2] = LW + 1, this.writePool(HO + 32 * LW, PW)
        }
        cW.length > 0 && (this.slotPool[WW] = cW)
      }
      evictBeyond(WW, iW) {
        const OW = this.slotDistance(WW),
          mW = [];
        for (let EW = 0; EW < mO; EW++) EW !== WW && this.slotPool[EW] && this.slotDistance(EW) > OW && mW.push(EW);
        mW.sort(((WW, iW) => this.slotDistance(iW) - this.slotDistance(WW)));
        for (const EW of mW) {
          if (this.freeCount >= iW) return;
          const WW = this.slotChunk[EW];
          WW && !WW.Ay && WW.El && (WW.Ob === this.slotVersion[EW] || lc(WW)) && this.encodeSlot(EW, this.victimScratch, !1)
        }
      }
      dropSpecials(WW, iW) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const OW = 3 * iW;
        for (let mW = 0; mW < cO; mW++) WW.cells[iW * cO + mW] !== sO && (WW.bricks[OW + (mW >>> 5)] &= ~(1 << (31 & mW)))
      }
    }
    var jc = OW(38562);
    class Uc {
      constructor(WW) {
        this.device = WW, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new fO, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.oZ = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = WW.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = WW.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(WW, iW, OW) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: mW
        } = this;
        mW.kZ(WW, iW), OW.forEachSunShadowCaster((WW => {
          this.add(WW)
        })), mW.finish();
        const EW = 0 === mW.parts;
        if (EW && this.uploadedEmpty) return;
        this.uploadedEmpty = EW;
        const {
          queue: NW
        } = this.device, {
          words: PW
        } = mW;
        NW.writeBuffer(this.frameBuffer, 0, PW, 0, 16385), mW.refs > 0 && NW.writeBuffer(this.frameBuffer, 65540, PW, dO, mW.refs), EW || NW.writeBuffer(this.frameBuffer, 327684, PW, eO, mW.parts * oO)
      }
      add(WW) {
        const iW = this.gridFor(WW);
        if (!iW) return;
        const {
          frame: OW
        } = this, {
          oZ: mW,
          worldAt: EW,
          instances: NW,
          instanceCount: PW,
          thin: LW
        } = WW;
        if (NW)
          for (let cW = 0; cW < PW; cW++) LW ? (XO(NW, 16 * cW, mW, EW, this.oZ), OW.add(iW, this.oZ)) : OW.add(iW, NW, 16 * cW);
        else OW.add(iW, mW, EW)
      }
      gridFor(WW) {
        let {
          geometry: iW,
          indexed: OW,
          first: mW,
          count: EW,
          skip: NW
        } = WW, PW = this.grids.get(iW);
        PW || (PW = new Map, this.grids.set(iW, PW));
        const LW = `${OW?mW:-1-mW}:${EW}:${null!==NW&&void 0!==NW?NW:""}`;
        let cW = PW.get(LW);
        if (void 0 !== cW || this.gridsFull) return cW;
        const wW = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = wW + 2;
        else if (wW > this.bakeDeadline) return;
        return cW = this.bake(iW, OW, mW, EW, NW), void 0 !== cW && PW.set(LW, cW), cW
      }
      bake(WW, iW, OW, mW, EW) {
        const NW = WW.vertexAttributes.find((WW => "position" === WW.kind)),
          PW = NW ? function(WW, iW, OW, mW) {
            let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const NW = WW => iW ? iW[OW + WW] : OW + WW,
              PW = WW => null !== EW && [0, 1, 2].some((iW => {
                const OW = NW(WW + iW);
                return OW >= EW[0] && OW < EW[1]
              })),
              LW = [1 / 0, 1 / 0, 1 / 0],
              cW = [-1 / 0, -1 / 0, -1 / 0];
            for (let kW = 0; kW + 2 < mW; kW += 3)
              if (!PW(kW))
                for (let iW = 0; iW < 3; iW++) {
                  const OW = NW(kW + iW);
                  for (let iW = 0; iW < 3; iW++) LW[iW] = Math.min(LW[iW], WW[3 * OW + iW]), cW[iW] = Math.max(cW[iW], WW[3 * OW + iW])
                }
            const wW = Math.max(cW[0] - LW[0], cW[1] - LW[1], cW[2] - LW[2]);
            if (!(wW > 0)) return null;
            const tW = wW / 64,
              ZW = [0, 0, 0],
              xW = [0, 0, 0],
              lW = [0, 0, 0];
            for (let kW = 0; kW < 3; kW++) ZW[kW] = Math.min(65, Math.ceil((cW[kW] - LW[kW]) / tW) + 1), xW[kW] = LW[kW] - tW / 2, lW[kW] = xW[kW] + ZW[kW] * tW;
            const AW = new Uint32Array(Math.ceil(ZW[0] * ZW[1] * ZW[2] / 32)),
              bW = new Float64Array(9),
              jW = [0, 0, 0],
              UW = [0, 0, 0];
            for (let kW = 0; kW + 2 < mW; kW += 3)
              if (!PW(kW)) {
                for (let iW = 0; iW < 3; iW++) {
                  const OW = NW(kW + iW);
                  for (let mW = 0; mW < 3; mW++) bW[3 * iW + mW] = WW[3 * OW + mW]
                }
                for (let WW = 0; WW < 3; WW++) {
                  const iW = Math.min(bW[WW], bW[3 + WW], bW[6 + WW]),
                    OW = Math.max(bW[WW], bW[3 + WW], bW[6 + WW]);
                  jW[WW] = Math.max(0, Math.floor((iW - xW[WW]) / tW - 1e-6)), UW[WW] = Math.min(ZW[WW] - 1, Math.floor((OW - xW[WW]) / tW + 1e-6))
                }
                for (let WW = jW[2]; WW <= UW[2]; WW++)
                  for (let iW = jW[1]; iW <= UW[1]; iW++)
                    for (let OW = jW[0]; OW <= UW[0]; OW++)
                      if (BO(bW, xW[0] + (OW + .5) * tW, xW[1] + (iW + .5) * tW, xW[2] + (WW + .5) * tW, tW / 2)) {
                        const mW = OW + ZW[0] * (iW + ZW[1] * WW);
                        AW[mW >>> 5] |= 1 << (31 & mW)
                      }
              } return {
              words: AW,
              lo: xW,
              hi: lW,
              cell: tW,
              dims: ZW
            }
          }((0, jc.h)(NW, WW.vertexCount), iW ? WW.indexData : null, OW, mW, EW) : null;
        if (!PW) return null;
        const {
          words: LW,
          ...cW
        } = PW;
        if (this.gridTop + LW.length > gO) return void(this.gridsFull = !0);
        const wW = this.gridTop;
        return this.gridTop += LW.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * wW, LW), {
          ...cW,
          at: wW
        }
      }
    }
    const kc = Math.cos(1 * Math.PI / 180);

    function sc(WW, iW) {
      return WW[0] * iW[0] + WW[1] * iW[1] + WW[2] * iW[2] < kc
    }
    async function Mc(WW) {
      const {
        pixels: iW,
        width: OW,
        height: mW
      } = await Wi(WW), EW = new Uint8Array(OW * mW);
      for (let NW = 0; NW < EW.length; NW++) EW[NW] = iW[4 * NW + 3];
      return {
        width: OW,
        height: mW,
        alpha: EW
      }
    }
    class Kc {
      constructor(WW, iW) {
        this.device = WW, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(RO.p), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = WW.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = WW.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * AO,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = WW.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [OW, mW, EW] = RO.t;
        this.volume = WW.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: OW,
            height: mW,
            depthOrArrayLayers: EW
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = WW.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = WW.createBuffer({
          label: "sun-shadow-volume-work",
          size: RO.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = iW ? new Uc(WW) : null, this.entityStandIn = iW ? null : WW.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var WW;
        null === (WW = this.stopWindow) || void 0 === WW || WW.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var WW, iW;
        const OW = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || OW.push("Lite sun shadow volume pipeline compiling");
        const mW = null !== (WW = null === (iW = this.casters) || void 0 === iW ? void 0 : iW.planesLoading) && void 0 !== WW ? WW : 0;
        return mW > 0 && OW.push(`${mW} Lite sun shadow plane casters loading their textures`), OW
      }
      entries() {
        var WW, iW, OW, mW;
        const EW = Fi.o;
        return [{
          binding: EW.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: EW.El,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: EW.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: EW.volume,
          resource: this.volumeView
        }, {
          binding: EW.sampler,
          resource: this.volumeSampler
        }, {
          binding: EW.entities,
          resource: {
            buffer: null !== (WW = null === (iW = this.entities) || void 0 === iW ? void 0 : iW.frameBuffer) && void 0 !== WW ? WW : this.entityStandIn
          }
        }, {
          binding: EW.entityGrids,
          resource: {
            buffer: null !== (OW = null === (mW = this.entities) || void 0 === mW ? void 0 : mW.gridBuffer) && void 0 !== OW ? OW : this.entityStandIn
          }
        }]
      }
      prepare(WW, iW, OW) {
        var mW;
        this.entitiesThisFrame = !1;
        const EW = null !== (mW = null === OW || void 0 === OW ? void 0 : OW.sunShadowReach()) && void 0 !== mW ? mW : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!OW || !EW.sunShadow && !EW.airShadow) return void(this.volumeHolds = null);
        if (WW.oZ.UZ !== WO) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${WW.oZ.UZ}; everything is lit.`)));
        const NW = this.start(WW);
        this.casters.update(WW.ZZ, WW.ZZ.el.length);
        const PW = WW.Wl;
        for (let xW = 0; xW < 3; xW++) this.eye[xW] = iW[xW] + PW[xW];
        const LW = (0, RO.D)(this.eye);
        this.staleNear = LW;
        const cW = WW.oZ.Tb;
        NW.update(this.eye, ((WW, iW, OW) => cW.Jb(WW, iW, OW)), 1);
        const wW = (0, RO.x)(OW.vWW()),
          tW = NW.eyeChunk,
          ZW = this.uniformInts;
        for (let xW = 0; xW < 3; xW++) ZW[xW] = tW[xW], ZW[4 + xW] = LW[xW];
        this.entitiesThisFrame = null !== this.entities && EW.sunShadow, this.entitiesThisFrame && pO(this.uniformFloats, 8, iW, wW), null !== this.volumeHolds && (this.castersWritten || sc(wW, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(LW, wW, tW)
      }
      markStale(WW) {
        const iW = this.staleNear,
          OW = WO,
          mW = [WW.i * OW, WW.j * OW, WW.k * OW];
        for (let NW = 0; NW < 3; NW++)
          if (mW[NW] + OW <= iW[NW] - OW || mW[NW] >= iW[NW] + RO.t[NW] + OW) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const EW = this.stale;
        for (let NW = 0; NW < EW.length; NW += 4)
          if (EW[NW] === WW.i && EW[NW + 1] === WW.j && EW[NW + 2] === WW.k) return void(EW[NW + 3] = this.swept);
        if (16 === EW.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        EW.push(WW.i, WW.j, WW.k, this.swept)
      }
      writeStale() {
        const WW = this.swept,
          iW = this.stale;
        this.staleAll && WW - this.staleAllSwept >= RO.k && (this.staleAll = !1, iW.length = 0);
        let OW = 0;
        for (let EW = 0; EW < iW.length; EW += 4)
          if (WW - iW[EW + 3] < RO.k) {
            for (let WW = 0; WW < 4; WW++) iW[OW + WW] = iW[EW + WW];
            OW += 4
          } iW.length = OW;
        const mW = this.uniformInts;
        mW[3] = this.staleAll ? 5 : OW / 4;
        for (let EW = 0; EW < 4; EW++)
          for (let WW = 0; WW < 3; WW++) mW[16 + 4 * EW + WW] = 4 * EW < OW ? iW[4 * EW + WW] * WO : 0
      }
      writeUniform() {
        const WW = this.uniformInts;
        let iW = this.uniformWritten;
        if (iW) {
          let OW = !0;
          for (let mW = 0; mW < WW.length && OW; mW++) OW = WW[mW] === iW[mW];
          if (OW) return
        }
        iW ??= this.uniformWritten = new Int32Array(WW.length), iW.set(WW), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(WW) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, WW)
      }
      computeVolume(WW, iW, OW) {
        const mW = this.buildVolumePass();
        if (!mW) return void(this.volumeHolds = null);
        const EW = (0, RO.A)(this.volumeHolds, WW);
        this.volumeHolds = WW;
        const NW = 1 === EW.length && EW[0].size.every(((WW, iW) => WW === RO.t[iW])),
          PW = this.sweptChunk,
          LW = this.sweptLight,
          cW = iW[0] !== LW[0] || iW[1] !== LW[1] || iW[2] !== LW[2],
          wW = OW[0] !== PW[0] || OW[1] !== PW[1] || OW[2] !== PW[2],
          tW = cW && sc(iW, LW);
        if ((NW || this.written || wW || tW) && (this.fastLeft = RO.k), NW || this.written || cW || wW) {
          this.written = !1;
          for (let WW = 0; WW < 3; WW++) PW[WW] = OW[WW], LW[WW] = iW[WW];
          this.sweepLeft = NW ? 0 : RO.k
        }
        if (NW ? this.swept += RO.k : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, EW.push(...(0, RO.F)(WW, this.slice)), this.slice = (this.slice + 1) % RO.k, this.swept++), 0 === EW.length) return;
        const ZW = (0, RO.J)(this.workData, iW, EW);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const xW = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          lW = xW.beginComputePass({
            label: "sun-shadow-volume"
          });
        lW.setPipeline(mW.pipeline), lW.setBindGroup(aO.group, mW.bindGroup), lW.dispatchWorkgroups(Math.ceil(ZW / RO.m)), lW.end(), this.device.queue.submit([xW.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const WW = aO,
          iW = GPUShaderStage.COMPUTE,
          OW = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: WW.uniform,
              visibility: iW,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: WW.El,
              visibility: iW,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: WW.special,
              visibility: iW,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: WW.work,
              visibility: iW,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: WW.volume,
              visibility: iW,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          mW = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: OW,
            entries: [{
              binding: WW.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: WW.El,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: WW.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: WW.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: WW.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [OW]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: rO()
            }),
            entryPoint: "main"
          }
        }).then((WW => {
          this.volumePass = {
            pipeline: WW,
            bindGroup: mW
          }
        }), (WW => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(WW)}`)
        })), null
      }
      start(WW) {
        if (this.window) return this.window;
        const iW = (WW, iW) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * WW, iW)
        };
        this.casters = new Zc(((WW, OW) => {
          this.castersWritten = !0, iW(WW, OW)
        }), Mc);
        const OW = new bc(this.casters, ((WW, iW) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * WW, iW)
        }), iW);
        OW.encoded = WW => {
          this.markStale(WW)
        };
        const mW = WW => {
          OW.chunkAdded(WW)
        };
        return WW.oZ.on("chunkAdded", mW), this.stopWindow = () => {
          WW.oZ.removeListener("chunkAdded", mW)
        }, this.window = OW, OW
      }
    }
    var Sc = OW(39925),
      Yc = OW(39931);
    const yc = 0,
      Tc = 3,
      Jc = 4,
      hc = 5;

    function Hc(WW, iW, OW, mW) {
      WW.drawOffset(iW, mW + yc), iW[mW + Tc] = WW.drawTime(), OW[mW + Jc] = WW.ring.drawStart(), OW[mW + hc] = WW.ring.drawCount()
    }
    const nc = `\n${Cm}\n\nconst MAX_STOPS = ${Yc.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Yc.c/4}>,\n\tcolor1: array<vec4f, ${Yc.c}>,\n\tcolor2: array<vec4f, ${Yc.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Yc.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Yc.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var uc = OW(53776);
    class oc {
      constructor(WW, iW, OW, mW) {
        this.device = WW, this.system = iW, this.frameIndex = OW, this.bindings = mW, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, uc.g)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (WW, iW) => {
          this.device.queue.writeBuffer(this.ring, WW * Yc.g * 4, this.system.ring.records, WW * Yc.g, (iW - WW) * Yc.g)
        };
        const {
          name: EW
        } = iW;
        this.ring = WW.createBuffer({
          label: `particles-${EW}`,
          size: iW.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = WW.createBuffer({
          label: `particles-uniforms-${EW}`,
          size: 4 * Yc.t,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(WW) {
        const iW = (0, uc.c)(this.system, this.uniformBits, WW);
        iW && (this.uniformBits = iW, this.device.queue.writeBuffer(this.uniforms, 0, iW))
      }
      bind() {
        const {
          system: WW
        } = this, iW = this.texture;
        (0, uc.i)(WW, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${WW.name}`,
          size: [Yc.l, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Yc.l
        }, [Yc.l, 1]));
        const OW = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === iW.view && this.boundSampler === iW.sampler && this.boundRamp === OW || (this.boundView = iW.view, this.boundSampler = iW.sampler, this.boundRamp = OW, this.bindGroup = this.device.createBindGroup({
          label: `particles-${WW.name}`,
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
            resource: iW.sampler
          }, {
            binding: 3,
            resource: iW.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: OW
          }]
        }))
      }
      destroy() {
        var WW;
        this.ring.destroy(), this.uniforms.destroy(), null === (WW = this.ramp) || void 0 === WW || WW.destroy()
      }
    }
    class dc {
      constructor(WW, iW) {
        this.device = WW, this.resources = iW, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, di.b)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (WW, iW) => (this.bindTarget(iW), {
            renderable: this.renderable,
            pipeline: ni(this.device, iW),
            draw: WW => iW === this.preparedTarget ? this.draw(WW) : 0
          })
        }
      }
      rebind(WW) {
        this.device = WW, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [iW, OW] of this.systems) {
          const mW = new oc(WW, iW, OW.frameIndex, this.bindings),
            EW = iW.ring.drawCount();
          EW > 0 && mW.upload(0, EW), this.systems.set(iW, mW)
        }
      }
      build() {
        const {
          device: WW
        } = this, iW = WW.createBindGroupLayout({
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
        this.frameLayout = WW.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = WW.createPipelineLayout({
          bindGroupLayouts: [Yi(WW), iW, this.frameLayout]
        }), this.module = WW.createShaderModule({
          label: "particles",
          code: nc
        });
        const OW = WW.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        WW.queue.writeTexture({
          texture: OW
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: iW,
          rampSampler: WW.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: OW.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get ONW() {
        return this.systems.size
      }
      reset() {
        for (const WW of this.systems.keys()) WW.reset()
      }
      describePendingWork() {
        return (0, Sc.g)(this.systems.keys(), "Lite")
      }
      wV(WW, iW) {
        const OW = new Sc.d(WW, iW, this);
        return this.systems.set(OW, new oc(this.device, OW, this.allocateFrameIndex(), this.bindings)), OW
      }
      YWW(WW, iW) {
        for (const OW of this.systems.keys()) OW.YWW(WW, iW)
      }
      canDraw(WW) {
        const iW = this.systems.get(WW),
          OW = WW.texture ? this.resources.boundTexture(WW.texture) : null;
        if (!iW || !OW || !this.targetPipelines) return !1;
        if (iW.texture = OW, iW.pipelines.length = 0, !Ei(WW.blendMode)) return this.warnOnce(`blend:${WW.blendMode}`, `particle blend mode ${WW.blendMode} is not drawn (${WW.name})`), !0;
        const mW = (0, RW.h)(WW.blendMode);
        for (const EW of mW) {
          const WW = this.pipelineFor(EW);
          if (!1 === WW) return iW.pipelines.length = 0, !0;
          WW && iW.pipelines.push(WW)
        }
        return iW.pipelines.length === mW.length
      }
      disposeStopped(WW) {
        WW.dispose()
      }
      remove(WW) {
        const iW = this.systems.get(WW);
        iW && (this.systems.delete(WW), iW.destroy(), this.freeFrameIndices.push(iW.frameIndex))
      }
      prepare(WW) {
        const iW = WW.animationRatio || 1;
        ui(this.renderable._worldCenter, WW, Ti), this.preparedTarget = this.target, this.draws.length = 0;
        let OW = 0;
        for (const mW of this.systems.values()) {
          const WW = mW.system;
          if (!WW.animateIfActive(iW)) continue;
          if (WW.ring.takeUploads(mW.upload), !WW.hasLiveParticles() || 0 === mW.pipelines.length) continue;
          mW.writeUniforms(this.warnOnce), mW.bind();
          const EW = 64 * mW.frameIndex;
          mW.count = WW.ring.drawCount(), Hc(WW, this.frameData, this.frameBits, EW), OW = Math.max(OW, EW + 64), this.draws.push(mW)
        }
        OW > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, OW)
      }
      draw(WW) {
        let iW = 0,
          OW = null;
        for (const mW of this.draws) {
          WW.setBindGroup(1, mW.bindGroup), WW.setBindGroup(2, this.frameBindGroup, [256 * mW.frameIndex]);
          for (const EW of mW.pipelines) EW !== OW && (WW.setPipeline(EW), OW = EW), WW.draw(4, mW.count), iW++
        }
        return iW
      }
      bindTarget(WW) {
        this.target = WW;
        const iW = `${WW._colorFormat}|${WW._depthStencilFormat}|${WW._depthCompare}|${WW._sampleCount}`;
        let OW = this.pipelines.get(iW);
        OW || (OW = new Map, this.pipelines.set(iW, OW)), this.targetPipelines = OW
      }
      pipelineFor(WW) {
        var iW;
        const OW = this.targetPipelines,
          mW = OW.get(WW);
        if (void 0 !== mW) return mW;
        OW.set(WW, null);
        const EW = this.target,
          NW = WW === RW.b,
          PW = null !== (iW = EW._depthCompare) && void 0 !== iW ? iW : yi,
          {
            device: LW
          } = this;
        return LW.createRenderPipelineAsync({
          label: `particles-${WW}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: ki({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: NW ? 1 : 0
            }
          }, EW, Ni((0, RW.e)(WW))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: EW._depthStencilFormat ? {
            format: EW._depthStencilFormat,
            depthCompare: PW,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: EW._sampleCount
          }
        }).then((iW => {
          OW.set(WW, iW)
        }), (iW => {
          OW.set(WW, !1), console.error("Lite particle pipeline failed", iW), ti(LW, "particles", `blend-${WW}`, iW)
        })), null
      }
      allocateFrameIndex() {
        const WW = this.freeFrameIndices.pop();
        if (void 0 !== WW) return WW;
        const iW = this.nextFrameIndex++;
        if (64 * (iW + 1) > this.frameData.length) {
          const WW = new Float32Array(2 * this.frameData.length);
          WW.set(this.frameData), this.frameData = WW, this.frameBits = new Uint32Array(WW.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return iW
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
    class ec {
      constructor(WW, iW, OW, mW, EW) {
        this.lite = WW, this.canvas = iW, this.info = OW, this.resources = EW, this.nmW = !1, this.needPOTTextures = !1, this.o_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = iW.width, this.renderHeight = iW.height, this.caps = {
          maxTextureSize: mW.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: mW.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(WW) {
        this.lite = WW, (0, fW.p)(WW, this.renderWidth, this.renderHeight)
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
      setSize(WW, iW) {
        if (this.renderWidth === WW && this.renderHeight === iW) return !1;
        const OW = this.renderWidth,
          mW = this.renderHeight;
        this.renderWidth = WW, this.renderHeight = iW;
        const EW = this.lite;
        if (null === EW) return !0;
        try {
          (0, fW.p)(EW, WW, iW)
        } catch (NW) {
          if (NW instanceof DOMException && "InvalidStateError" === NW.name) {
            this.renderWidth = OW, this.renderHeight = mW;
            try {
              (0, fW.p)(EW, OW, mW)
            } catch {
              this.canvas.width = OW, this.canvas.height = mW
            }
            return console.warn("WebGPU could not allocate render targets for resize", WW, iW, NW.message), !1
          }
          throw NW
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
      AY() {
        const WW = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : WW - this.lastFrameTime, this.lastFrameTime = WW
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(WW, iW) {
        const OW = document.createElement("canvas");
        return OW.width = WW, OW.height = iW, OW
      }
      p_(WW, iW) {
        var OW;
        return null !== (OW = this.resources.p_.get(WW)) && void 0 !== OW ? OW : new xi(this.resources, WW, iW)
      }
      atlasArrays(WW) {
        return this.resources.atlasArrays(WW)
      }
    }
    class vc {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(WW) {
        this.fov = WW.fov, this.nearPlane = WW.near, this.farPlane = WW.far;
        const iW = WW.worldMatrix;
        for (let OW = 0; OW < 16; OW++)
          if (this.worldMatrix[OW] !== iW[OW]) return this.worldMatrix.set(iW), void this.worldMatrixVersion++
      }
    }
    class gc {
      constructor(WW, iW, OW, mW) {
        this.canvas = iW, this.options = OW, this.AOW = void 0, this.backendName = "WebGPU (Lite)", this.Y5 = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new vc, this.lastFrameTime = 0, this.engine = void 0, this.rb = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.TZ = null, this.firstTerrain = null, this.trialFrames = 0, this.install(WW);
        const {
          resources: EW,
          meshes: NW
        } = WW;
        this.resources = EW, this.particles = WW.particles, this.AOW = new ec(WW.engine, iW, mW, WW.device.limits, EW), (0, hW.H)({
          BL: WW => {
            oW(WW) && EW.textureSlot(WW)
          },
          loaded: WW => oW(WW) ? EW.textureLoaded(WW) : null,
          canvasUpdated: (WW, iW, OW) => {
            oW(WW) && EW.canvasUpdated(WW, iW, OW)
          }
        }), this.Y5 = NW.Y5, this.modelMeshes = NW.modelMeshes
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
      install(WW) {
        this.engine = WW.engine, this.rb = WW.rb, this.sceneTask = WW.sceneTask, this.device = WW.device, this.liteTerrain = WW.terrain, this.meshes = WW.meshes, this.sunShadow = WW.sunShadow;
        const iW = new BW(WW.device.lost);
        this.refusals = iW, iW.deviceLost.then((() => {
          var iW;
          iW = WW.device, ci.add(iW)
        })), WW.rb.camera = this.camera
      }
      async rebuild() {
        var WW, iW, OW, mW, EW;
        const NW = await fc();
        this.halted = !0, this.liteTerrain.retire(), null === (WW = this.sunShadow) || void 0 === WW || WW.dispose(), this.AOW.detach();
        try {
          (0, CW.b)(this.engine)
        } catch (tW) {
          console.warn("Lite: disposing the lost device's engine threw", tW)
        }
        const PW = {
            width: this.AOW.renderWidth,
            height: this.AOW.renderHeight
          },
          LW = await Cc(this.canvas, this.options, PW, NW),
          cW = Mi(LW),
          wW = Xc(cW);
        try {
          this.resources.rebind(LW, cW), this.particles.rebind(cW), this.Y5.dropSteady();
          const WW = {
              resources: this.resources,
              particles: this.particles,
              Y5: this.Y5,
              modelMeshes: this.modelMeshes
            },
            iW = await Bc(LW, cW, this.options, WW),
            OW = wW();
          if (null !== OW) throw new Error(`WebGPU device lost while Lite was rebuilding (${OW.reason}): ${OW.message}`);
          const {
            r: mW,
            g: EW,
            b: NW
          } = this.rb.clearColor;
          this.install(iW), this.setClearColour(mW, EW, NW), this.AOW.rebind(LW)
        } catch (tW) {
          throw cW.destroy(), tW
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (iW = this.TZ) || void 0 === iW || iW.resize(), null === (OW = this.TZ) || void 0 === OW || null === (mW = OW.Hx) || void 0 === mW || null === (EW = mW.bY) || void 0 === EW || EW.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((WW, iW) => {
          this.firstTerrain = {
            drawn: WW,
            failed: iW
          }
        }))
      }
      get castsEntitySunShadows() {
        var WW, iW;
        return null !== (WW = null === (iW = this.sunShadow) || void 0 === iW ? void 0 : iW.tracesEntities) && void 0 !== WW && WW
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(WW) {
        this.TZ = WW, this.modelMeshes.attach(WW.model, WW.sceneMirror);
        const iW = WW.rb;
        this.setClearColour(iW.clearColor.r, iW.clearColor.g, iW.clearColor.b), iW.draw = () => {
          this.drawFrame(WW, iW)
        }
      }
      get KZ() {
        return !this.refusals.lost && !this.halted
      }
      render(WW) {
        if (this.KZ) {
          try {
            this.AOW.AY(), WW.rb.render()
          } catch (iW) {
            throw this.refusals.frameFailed(iW), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(iW), this.firstTerrain = null), iW
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var WW, iW, OW, mW;
        const EW = [...this.particles.describePendingWork(), ...null !== (WW = null === (iW = this.sunShadow) || void 0 === iW ? void 0 : iW.describePendingWork()) && void 0 !== WW ? WW : []],
          NW = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (OW = this.terrain.sceneDepth) && void 0 !== OW && OW.compiling ? 1 : 0) + (null !== (mW = this.terrain.shadowMask) && void 0 !== mW && mW.compiling ? 1 : 0);
        NW > 0 && EW.push(`${NW} Lite pipelines compiling`);
        const PW = this.terrain.buffersAwaitingVerdict;
        PW > 0 && EW.push(`${PW} Lite terrain buffers awaiting their out-of-memory verdict`);
        const LW = this.resources.texturesLoading;
        return LW > 0 && EW.push(`${LW} Lite textures loading`), EW
      }
      prepareTexture(WW) {
        return null !== this.resources.boundTexture(WW) || this.resources.textureFailed(WW)
      }
      drawFrame(WW, iW) {
        var OW, mW, EW, NW, PW, LW;
        const cW = ML(WW);
        this.camera.copyFromView(cW), this.setClearColour(cW.clearColour[0], cW.clearColour[1], cW.clearColour[2]), null === (OW = this.sunShadow) || void 0 === OW || OW.prepare(WW.Hx, cW.eye, null !== (mW = WW.Hx.kA) && void 0 !== mW ? mW : null), this.terrain.prepare(WW, cW), null === (EW = this.terrain.sceneDepth) || void 0 === EW || EW.setPlanes(cW.near, cW.far), null === (NW = this.terrain.shadowMask) || void 0 === NW || NW.prepare(cW), NL(this.sceneTask), this.meshes.prepare(iW, cW, WW.model.earthSky, null !== (PW = WW.Hx.kA) && void 0 !== PW ? PW : null), this.particles.prepare(cW);
        const wW = performance.now();
        this.resources.flushUploads(), null === (LW = this.sunShadow) || void 0 === LW || LW.traceEntities(this.meshes);
        try {
          (0, fW.o)(this.engine, this.lastFrameTime > 0 ? wW - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = wW, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(wW), this.firstTerrain = null)
      }
      setClearColour(WW, iW, OW) {
        const mW = this.rb.clearColor;
        mW.r = WW, mW.g = iW, mW.b = OW, mW.a = 1
      }
    }

    function Dc(WW) {
      const iW = {};
      for (const OW in WW.limits) {
        const mW = WW.limits[OW];
        "number" === typeof mW && (iW[OW] = mW)
      }
      return iW
    }
    const Vc = "WebGPU device lost while Lite was starting";
    async function pc(WW, iW) {
      const OW = await fc(),
        mW = OW.info,
        EW = {
          vendor: (null === mW || void 0 === mW ? void 0 : mW.vendor) || "unknown vendor",
          renderer: (null === mW || void 0 === mW ? void 0 : mW.architecture) || "unknown renderer",
          version: (null === mW || void 0 === mW ? void 0 : mW.description) || "unknown version"
        };
      WW.style.background = "black";
      const NW = await Cc(WW, iW, iW.bufferSize, OW),
        PW = Mi(NW),
        LW = Xc(PW);
      try {
        const OW = new gc(await Bc(NW, PW, iW, null), WW, iW, EW),
          mW = LW();
        if (null !== mW) {
          const {
            reason: WW,
            message: iW
          } = mW;
          throw Object.assign(new Error(`${Vc} (${WW}): ${iW}`), {
            fallbackReason: Vc
          })
        }
        return OW
      } catch (cW) {
        throw PW.destroy(), null === LW() ? cW : (0, EL.f)(cW, "device")
      }
    }
    async function fc() {
      const WW = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!WW) throw (0, EL.f)(new Error("No WebGPU adapter"), "no_adapter");
      return WW
    }
    async function Cc(WW, iW, OW, mW) {
      let EW;
      try {
        EW = await (0, fW.f)(WW, {
          msaaSamples: iW.ROW ? 4 : 1,
          requiredLimits: Dc(mW),
          alphaMode: "premultiplied"
        })
      } catch (PW) {
        throw (0, EL.f)(PW, "#47" === (null === (NW = PW) || void 0 === NW ? void 0 : NW.message) ? "no_adapter" : "device")
      }
      var NW;
      return null !== OW && (0, fW.p)(EW, OW.width, OW.height), EW
    }

    function Xc(WW) {
      let iW = null;
      return WW.lost.then((WW => {
        iW = WW, console.error(`WebGPU device lost (${WW.reason}): ${WW.message}`)
      })), () => iW
    }
    async function Bc(WW, iW, OW, mW) {
      var EW, NW;
      let {
        sceneDepth: PW,
        sunShadow: LW
      } = OW;
      const cW = (0, XW.c)(WW),
        wW = null !== (EW = null === mW || void 0 === mW ? void 0 : mW.resources) && void 0 !== EW ? EW : new iL(WW, iW),
        tW = new mc(iW),
        ZW = new DP(iW, wW, (WW => function(WW, iW) {
          for (const mW of Ki(WW)) {
            var OW;
            if (mW._targetSignature === iW) return null !== (OW = mW._sceneBG) && void 0 !== OW ? OW : null
          }
          return null
        }(cW, WW)), null === mW || void 0 === mW ? void 0 : mW.Y5, null === mW || void 0 === mW ? void 0 : mW.modelMeshes),
        xW = null !== (NW = null === mW || void 0 === mW ? void 0 : mW.particles) && void 0 !== NW ? NW : new dc(iW, wW);
      for (const bW of function(WW, iW, OW) {
          return [iW.opaqueRenderable, WW.opaqueRenderable, WW.skyLastRenderable, OW.renderable, iW.transparentRenderable, WW.transparentRenderable, WW.frontRenderable]
        }(ZW, tW, xW)) si(cW, bW);
      const lW = function(WW) {
        for (const iW of Ki(WW))
          if ("rb" === iW.name) return iW;
        throw new Error("Lite: the scene has no render task named scene")
      }(cW);
      PW && tW.installSceneDepth(lW, WW);
      const AW = LW ? new Kc(iW, LW.entities) : null;
      return tW.sunShadow = AW, AW && null !== LW && void 0 !== LW && LW.entities && (tW.shadowMask = new gL(iW, lW, WW, tW)), ZW.sunShadow = AW, await (0, XW.e)(cW), {
        engine: WW,
        rb: cW,
        sceneTask: lW,
        device: iW,
        terrain: tW,
        meshes: ZW,
        sunShadow: AW,
        resources: wW,
        particles: xW
      }
    }
  },
  42321: (WW, iW, OW) => {
    OW.d(iW, {
      D: () => AW,
      e: () => EW,
      f: () => mW,
      g: () => xW,
      j: () => tW,
      l: () => jW,
      m: () => NW,
      o: () => LW,
      q: () => cW,
      t: () => PW,
      x: () => bW,
      z: () => lW
    });
    const mW = 3,
      EW = 0,
      NW = 1,
      PW = 2,
      LW = {
        uniform: 3,
        El: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      cW = 10,
      wW = "BloxdPackInputs",
      tW = "bloxdPackInputs",
      ZW = [{
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
      xW = 80;

    function lW() {
      const WW = ZW.map((WW => {
        let {
          name: iW,
          type: OW
        } = WW;
        return `    ${iW}: ${OW},\n`
      })).join("");
      return `struct ${wW} {\n${WW}}\n@group(${mW}) @binding(${EW}) var<uniform> ${tW}: ${wW};\n`
    }

    function AW(WW, iW) {
      const OW = new DataView(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, xW),
        [mW, EW, NW, PW, LW, cW] = ZW;
      OW.setFloat32(mW.offset, iW.seconds, !0), OW.setUint32(EW.offset, iW.lit ? 1 : 0, !0);
      for (let wW = 0; wW < 3; wW++) OW.setInt32(NW.offset + 4 * wW, iW.renderOffset[wW], !0), OW.setFloat32(PW.offset + 4 * wW, iW.vWW[wW], !0), OW.setFloat32(LW.offset + 4 * wW, iW.eyePosition[wW], !0), OW.setFloat32(cW.offset + 4 * wW, iW.shadowDirection[wW], !0)
    }

    function bW(WW) {
      const iW = new Uint32Array(Math.max(1, WW.length));
      return WW.forEach(((WW, OW) => {
        let {
          id: mW,
          rotation: EW
        } = WW;
        iW[OW] = 65535 & mW | (3 & EW) << 16
      })), iW
    }
    const jW = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);