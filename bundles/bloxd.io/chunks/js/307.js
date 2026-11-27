export const id = 307;
export const ids = [307];
export const modules = {
  53594: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => LR,
      d: () => qR,
      e: () => ZR,
      g: () => fR
    });
    var yR = GR(38329),
      tR = GR(39941),
      uR = GR(39934);

    function ZR(RR, JR, GR, yR) {
      const tR = uR.x;
      JR.fill(0), RR.gravity.toArray(JR, tR.gravity), RR.colorDead.toArray(JR, tR.colorDead), GR[tR.ramp] = RR.useRampGradients ? 1 : 0;
      const ZR = RR.getColorGradients(),
        qR = wR(RR, ZR, "colour", yR);
      GR[tR.colorCount] = qR;
      for (let uR = 0; uR < qR; uR++) {
        var iR;
        const RR = ZR[rR(ZR, uR)];
        JR[tR.colorPositions + uR] = RR.gradient, RR.color1.toArray(JR, tR.color1 + 4 * uR), (null !== (iR = RR.color2) && void 0 !== iR ? iR : RR.color1).toArray(JR, tR.color2 + 4 * uR)
      }
      const fR = RR.getVelocityGradients(),
        VR = wR(RR, fR, "BL", yR);
      GR[tR.velocityCount] = VR;
      for (let uR = 0; uR < VR; uR++) UR(JR, tR.BL + 4 * uR, fR[rR(fR, uR)]);
      const KR = RR.useRampGradients ? RR.getColorRemapGradients() : null,
        eR = wR(RR, KR, "colour remap", yR);
      GR[tR.remapCount] = eR;
      for (let uR = 0; uR < eR; uR++) UR(JR, tR.remap + 4 * uR, KR[rR(KR, uR)])
    }

    function qR() {
      return {
        key: [],
        texels: new Uint8Array(4 * uR.o)
      }
    }
    const iR = [];

    function fR(RR, JR) {
      return VR(RR, iR), !nR(iR, JR.key) && (JR.key.length = 0, JR.key.push(...iR), JR.key.length > 0 && function(RR, JR) {
        for (let GR = 0; GR < uR.o; GR++) tR.m.GetCurrentGradient(GR / uR.o, RR, ((RR, JR, GR) => {
          yR.Color3.LerpToRef(RR.color, JR.color, GR, KR)
        })), JR[4 * GR] = 255 * KR.r, JR[4 * GR + 1] = 255 * KR.g, JR[4 * GR + 2] = 255 * KR.b, JR[4 * GR + 3] = 255
      }(RR.getRampGradients(), JR.texels), !0)
    }

    function VR(RR, JR) {
      JR.length = 0;
      const GR = RR.useRampGradients ? RR.getRampGradients() : null;
      if (null !== GR && void 0 !== GR && GR.length) {
        JR.push(GR.length);
        for (const RR of GR) JR.push(RR.gradient, RR.color.r, RR.color.g, RR.color.b)
      }
    }
    const KR = new yR.Color3;

    function wR(RR, JR, GR, yR) {
      return JR ? JR.length > uR.c ? (yR(`particleStops:${GR}`, `GPU particles use the first 2 and last ${uR.c-2} of more than ${uR.c} ${GR} gradient stops (${RR.name})`), uR.c) : JR.length : 0
    }

    function rR(RR, JR) {
      return JR < 2 || RR.length <= uR.c ? JR : RR.length - uR.c + JR
    }
    const eR = new Float32Array(uR.t),
      aR = new Uint32Array(eR.buffer);

    function LR(RR, JR, GR) {
      return ZR(RR, eR, aR, GR), JR && nR(aR, JR) ? null : aR.slice()
    }

    function nR(RR, JR) {
      if (RR.length !== JR.length) return !1;
      for (let GR = 0; GR < RR.length; GR++)
        if (RR[GR] !== JR[GR]) return !1;
      return !0
    }

    function UR(RR, JR, GR) {
      var yR;
      RR[JR] = GR.gradient, RR[JR + 1] = GR.factor1, RR[JR + 2] = null !== (yR = GR.factor2) && void 0 !== yR ? yR : GR.factor1
    }
  },
  42704: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      const yR = JR * JR * 4,
        tR = RR[0].layers,
        uR = tR * (RR.length - 1) + RR[RR.length - 1].layers,
        ZR = new Uint8Array(uR * yR);
      RR.forEach(((JR, GR) => {
        const uR = GR + 1 < RR.length ? Math.min(JR.layers, tR) : JR.layers;
        ZR.set(new Uint8Array(JR.pixels.buffer, JR.pixels.byteOffset, uR * yR), GR * tR * yR)
      }));
      const qR = Math.max(1, Math.min(uR, GR || uR));
      if (qR === uR) return [{
        pixels: ZR,
        layers: uR
      }];
      const iR = [];
      for (let fR = 0; fR < uR; fR += qR) {
        const RR = Math.min(uR, fR + qR);
        iR.push({
          pixels: ZR.slice(fR * yR, RR * yR),
          layers: RR - fR
        })
      }
      return iR
    }
    GR.d(JR, {
      b: () => yR,
      c: () => uR
    });
    const tR = new WeakMap;

    function uR(RR, JR, GR) {
      var yR, uR;
      const ZR = null !== (yR = tR.get(RR)) && void 0 !== yR ? yR : new Map;
      tR.set(RR, ZR);
      const qR = null !== (uR = ZR.get(JR[0])) && void 0 !== uR ? uR : [];
      ZR.set(JR[0], qR);
      const iR = qR.find((RR => RR.urls.length === JR.length && RR.urls.every(((RR, GR) => RR === JR[GR]))));
      if (iR) return iR.built;
      const fR = {
        urls: [...JR],
        built: GR()
      };
      return qR.push(fR), fR.built.catch((() => {
        qR.splice(qR.indexOf(fR), 1)
      })), fR.built
    }
  },
  53589: (RR, JR, GR) => {
    function yR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const JR = new Set;
      return (GR, yR) => {
        JR.has(GR) || (JR.add(GR), console.warn(RR + yR))
      }
    }
    GR.d(JR, {
      d: () => yR
    })
  },
  53647: (RR, JR, GR) => {
    GR.d(JR, {
      createLiteRendererAsync: () => Pi,
      liteBabylonBackend: () => IR,
      setPipelineFailureHook: () => qJ
    });
    var yR = GR(38329),
      tR = GR(38675),
      uR = GR(39055),
      ZR = GR(38391),
      qR = GR(39069);
    class iR extends qR.c {
      constructor() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        super(...JR), this.color = new yR.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: JR[0].jH().getUniqueId(),
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
          needAlphaBlendingForMesh: RR => RR.visibility < 1 || RR.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const fR = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      VR = RR => 1 << fR.indexOf(RR),
      KR = VR("VERTEXCOLOR"),
      wR = VR("INSTANCES"),
      rR = VR("THIN_INSTANCES"),
      eR = VR("INSTANCESCOLOR"),
      aR = VR("FOG"),
      LR = VR("LITE_FRONT_LAYER");

    function nR(RR, JR, GR, yR) {
      let tR = 0;
      return RR.isVerticesDataPresent("color") && (tR |= KR), "none" !== JR && (tR |= wR), "thin" === JR && (tR |= rR, RR.isVerticesDataPresent("instanceColor") && (tR |= eR)), yR.fogEnabled && RR.applyFog && 0 !== yR.fogMode && (tR |= aR), GR >= 1 && (tR |= LR), tR
    }

    function UR(RR, JR) {
      RR.updateColor4("color", JR.color, JR.alpha)
    }
    var WR = GR(39007),
      AR = GR(38475),
      CR = GR(38406),
      XR = GR(38358),
      MR = GR(38988),
      BR = GR(38998),
      lR = GR(38382),
      pR = GR(38386),
      gR = GR(38397);
    const bR = XR.c.GLSL;
    class vR {
      constructor(RR, JR) {
        this.name = RR, this.tL = JR, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.YH = {
          addOnce: RR => {
            this.disposers.push(RR)
          }
        }, this.uniqueId = JR.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      jH() {
        return this.tL
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
      needAlphaBlendingForMesh(RR) {
        return (0, lR.V)(this.model, RR.visibility, RR.hasVertexAlpha)
      }
      needAlphaTestingForMesh(RR) {
        return (0, lR.W)(this.model, RR.visibility, RR.hasVertexAlpha)
      }
      dispose() {
        (0, AR.l)(this);
        for (const RR of this.disposers.splice(0)) RR()
      }
      get model() {
        return (0, lR.bb)(this)
      }
    }
    const OR = new WeakSet;

    function xR(RR) {
      return OR.has(RR)
    }

    function NR(RR) {
      OR.add(RR)
    }
    const DR = {
      create: (RR, JR) => ((0, CR.t)(RR, new vR(RR.name, JR)), pR.e.defines()),
      write: () => {},
      addFeature: (RR, JR) => {
        const GR = RR.mirror;
        JR.feature === BR.h && JR.state.dirLightCount > 0 && (RR.disableLighting = !0, (0, lR._)(RR)), "BLOXD_LIGHTING" in JR.defines && (0, AR.j)(GR), JR.feature === MR.j && ((0, WR.l)(JR.state, bR), function(RR, JR) {
          const GR = RR.jH().ke();
          setTimeout((() => {
            GR.atlasArrays(JR.sources).then((GR => {
              (0, WR.e)(RR, JR, GR.map((RR => ({
                atlas: RR,
                layers: RR.layers
              }))), GR[0].layerWidth, bR)
            })).catch((RR => {
              console.error("Failed to build the atlas's texture arrays", RR)
            }))
          }))
        }(GR, JR.state))
      },
      texture: (RR, JR, GR) => {
        let {
          data: yR,
          sets: tR
        } = GR;
        var uR;
        (NR(RR), yR) && (RR.uvSet = null !== (uR = null === tR || void 0 === tR ? void 0 : tR.coordinatesIndex) && void 0 !== uR ? uR : 0, (0, CR.gb)(RR.matrix, null !== tR && void 0 !== tR ? tR : {}))
      },
      cube: NR,
      canvas: (RR, JR, GR) => {
        let {
          width: yR,
          height: tR,
          mipmaps: uR,
          samplingMode: ZR = gR.f.trilinear,
          hasAlpha: qR = !1,
          wrap: iR = gR.c.clamp
        } = GR;
        const fR = RR.ke().createCanvas(yR, tR),
          VR = new gR.i("2d", {
            kind: "canvas",
            width: yR,
            height: tR,
            canvas: fR
          }, {
            samplingMode: ZR,
            wrapU: iR,
            wrapV: iR,
            noMipmap: !uR,
            invertY: !0
          });
        return VR.hasAlpha = qR, NR(VR), VR
      }
    };
    var HR = GR(38489),
      oR = GR(38233);
    class cR {
      constructor(RR, JR, GR) {
        this.engine = RR, this.clearColor = JR, this.ambientColor = GR, this.onBeforeRenderObservable = new oR.b, this.onBeforeCameraRenderObservable = new oR.b, this.onAfterRenderObservable = new oR.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.pM = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      ke() {
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
      addPendingData(RR) {
        this.pending.push(RR)
      }
      removePendingData(RR) {
        const JR = this.pending.indexOf(RR); - 1 !== JR && this.pending.splice(JR, 1)
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

    function PR() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const IR = {
      oyR: PR,
      BuR: (RR, JR) => {
        const GR = new cR(RR.engine, yR.e.FromArray(JR.clearColor), yR.Color3.FromArray(JR.ambientColor));
        (0, ZR.b)(DR, GR), RR.tL = GR,
          function(RR, JR) {
            const GR = Object.assign((0, HR.g)(RR, "camera"), {
              layerMask: 268435455
            });
            RR.model.nodes.setWorldSource(GR.row, RR.model.view.worldMatrix), RR.camera = JR.activeCamera = GR
          }(RR, GR), (0, tR.i)(RR, ((RR, JR, GR) => (0, uR.j)(RR, JR, GR, qR.c)))
      },
      AuR: () => {},
      setBabylonFog: () => {},
      puR: PR,
      OuR: () => {},
      linesFromArrays: (RR, JR, GR) => (0, uR.j)(RR, JR, GR, iR),
      uL: () => {},
      vuR: PR
    };
    var mR = GR(53716),
      zR = GR(53728),
      SR = GR(53737);
    class jR {
      constructor(RR) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const JR = new Promise((RR => {
          this.refused = RR
        }));
        this.deviceLost = Promise.race([RR, JR]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(RR) {
        (function(RR) {
          const {
            name: JR,
            message: GR
          } = null !== RR && void 0 !== RR ? RR : {};
          return "InvalidStateError" === JR && "string" === typeof GR && GR.startsWith("GPUDevice.")
        })(RR) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: RR.message,
          framesRefused: !0
        }))
      }
    }
    var dR = GR(42704),
      ER = GR(39950);

    function YR(RR) {
      return Math.max(4, 4 * Math.ceil(RR / 4))
    }

    function kR(RR, JR, GR, yR) {
      const tR = RR.createBuffer({
        label: yR,
        size: YR(JR.byteLength),
        usage: GR,
        mappedAtCreation: !0
      });
      return new Uint8Array(tR.getMappedRange(), 0, JR.byteLength).set(new Uint8Array(JR.buffer, JR.byteOffset, JR.byteLength)), tR.unmap(), tR
    }

    function QR(RR, JR) {
      return Math.floor(Math.log2(Math.max(RR, JR))) + 1
    }

    function FR(RR, JR, GR, yR, tR, uR) {
      const ZR = RR.createTexture({
          label: uR,
          size: {
            width: GR,
            height: yR,
            depthOrArrayLayers: tR
          },
          format: "rgba8unorm",
          mipLevelCount: QR(GR, yR),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        qR = (JR, GR, yR, uR) => {
          RR.queue.writeTexture({
            texture: ZR,
            mipLevel: GR
          }, JR, {
            bytesPerRow: 4 * yR,
            rowsPerImage: uR
          }, {
            width: yR,
            height: uR,
            depthOrArrayLayers: tR
          })
        };
      qR(JR, 0, GR, yR);
      let iR = 1;
      for (const fR of function*(RR, JR, GR, yR) {
          let tR = RR,
            uR = JR,
            ZR = GR;
          for (; uR > 1 || ZR > 1;) {
            const RR = Math.max(1, uR >> 1),
              JR = Math.max(1, ZR >> 1),
              GR = new Uint8Array(RR * JR * yR * 4),
              qR = 4 * uR;
            let iR = 0;
            for (let fR = 0; fR < yR; fR++) {
              const yR = fR * qR * ZR;
              for (let fR = 0; fR < JR; fR++) {
                const JR = yR + Math.min(2 * fR, ZR - 1) * qR,
                  VR = yR + Math.min(2 * fR + 1, ZR - 1) * qR;
                for (let yR = 0; yR < RR; yR++) {
                  const RR = 4 * Math.min(2 * yR, uR - 1),
                    ZR = 4 * Math.min(2 * yR + 1, uR - 1);
                  for (let yR = 0; yR < 4; yR++) GR[iR++] = tR[JR + RR + yR] + tR[JR + ZR + yR] + tR[VR + RR + yR] + tR[VR + ZR + yR] + 2 >> 2
                }
              }
            }
            yield {
              data: GR,
              width: RR,
              height: JR
            }, tR = GR, uR = RR, ZR = JR
          }
        }(JR, GR, yR, tR)) qR(fR.data, iR++, fR.width, fR.height);
      return ZR
    }
    const TR = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function sR(RR) {
      if (RR.startsWith("data:")) {
        const JR = RR.search(/[;,]/);
        return `data:${JR>5?RR.slice(5,JR):""} URL of ${RR.length} characters`
      }
      return RR.length > 80 ? `${RR.slice(0,80)}...` : RR
    }
    async function hR(RR) {
      const JR = await fetch(RR);
      if (!JR.ok) throw new Error(`${sR(RR)}: ${JR.status} ${JR.statusText}`);
      return createImageBitmap(await JR.blob(), TR)
    }
    async function RJ(RR) {
      const JR = await hR(RR),
        GR = new OffscreenCanvas(JR.width, JR.height),
        yR = GR.getContext("2d", {
          willReadFrequently: !0
        });
      if (!yR) throw new Error("No 2D context to decode an image");
      yR.drawImage(JR, 0, 0);
      const {
        data: tR
      } = yR.getImageData(0, 0, JR.width, JR.height);
      return JR.close(), {
        pixels: new Uint8Array(tR.buffer, tR.byteOffset, tR.byteLength),
        width: GR.width,
        height: GR.height
      }
    }

    function JJ(RR, JR) {
      return (0, dR.c)(RR, JR.urls, (async () => {
        const GR = await Promise.all(JR.urls.map((async (RR, GR) => {
            var yR, tR, uR, ZR, qR;
            return null !== (ZR = null !== (tR = null === (uR = JR.pixels) || void 0 === uR ? void 0 : uR[GR]) && void 0 !== tR ? tR : null, qR = JR.layerWidth, yR = null !== ZR && void 0 !== ZR && ZR.byteLength && qR && ZR.byteLength % (qR * qR * 4) === 0 ? {
              pixels: ZR,
              layerWidth: qR,
              layers: ZR.byteLength / (qR * qR * 4)
            } : null) && void 0 !== yR ? yR : await async function(RR) {
              const {
                pixels: JR,
                width: GR
              } = await RJ(RR);
              return {
                pixels: JR,
                layerWidth: GR,
                layers: JR.byteLength / (GR * GR * 4)
              }
            }(RR)
          }))),
          yR = GR[0].layerWidth;
        return (0, dR.b)(GR, yR, RR.limits.maxTextureArrayLayers).map(((GR, tR) => {
          let {
            pixels: uR,
            layers: ZR
          } = GR;
          return {
            texture: FR(RR, uR, yR, yR, ZR, `atlas-${tR}-${sR(JR.urls[0])}`),
            layerWidth: yR,
            layers: ZR
          }
        }))
      }))
    }
    const GJ = new Map([
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
      yJ = new Map([
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

    function tJ(RR) {
      for (const JR of (0, ER.m)(RR))
        if (!yJ.has((0, ER.i)(JR))) return !1;
      return !0
    }

    function uJ(RR) {
      const JR = yJ.get(RR);
      if (!JR) return null;
      const [GR, yR, tR] = JR;
      return {
        srcFactor: GJ.get(GR),
        dstFactor: GJ.get(yR),
        operation: tR
      }
    }
    let ZJ = null;

    function qJ(RR) {
      ZJ = RR
    }
    const iJ = new WeakSet;

    function fJ(RR) {
      return iJ.has(RR)
    }

    function VJ(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var uR;
      fJ(RR) || (null === (uR = ZJ) || void 0 === uR || uR(JR, GR, yR, tR))
    }
    class KJ {
      constructor(RR) {
        this.resources = RR, this.matrixKey = {
          hK: 0
        }, this.attributesKey = {
          hK: 0
        }, this.inputs = Object.create(null);
        for (let JR = 0; JR < 4; JR++) this.inputs[`world${JR}`] = new eJ(this.matrixKey, 16 * JR, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(RR, JR) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, RR, !0), JR && this.resources.vertexBufferCreated(this.attributesKey, JR, !0)
      }
    }
    class wJ extends KJ {
      constructor(RR, JR, GR) {
        super(RR), this.mesh = JR, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const yR = this.inputs;
        let tR = 0;
        for (const {
            size: ZR
          }
          of GR) tR += ZR;
        for (const {
            name: ZR,
            offset: qR,
            size: iR,
            type: fR
          }
          of GR) yR[ZR] = new eJ(this.attributesKey, 4 * qR, 4 * tR, iR, !0, fR);
        this.rowStride = tR, RR.LRR.set(JR, this);
        const uR = JR.isVerticesDataPresent;
        JR.isVerticesDataPresent = (RR, GR) => RR in yR || uR.call(JR, RR, GR)
      }
      attach(RR, JR) {
        this.matrices = RR, this.attributes = JR, this.bind(RR, JR), this.mirror(RR, RR.length, RR.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      TRR(RR) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, RR ? 64 * RR : void 0)
      }
      sRR() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(RR, JR) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * RR, 16 * JR)
      }
      attributeRows(RR, JR) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, RR * this.rowStride, JR * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(RR, JR, GR) {
        const yR = this.mesh._thinInstanceDataStorage;
        yR.matrixData = RR, yR.matrixBufferSize = JR, yR.worldMatrices = null, yR.instancesCount = GR
      }
    }
    class rJ extends KJ {
      constructor(RR, JR, GR) {
        var yR, tR, uR, ZR;
        super(RR), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (yR = null === GR || void 0 === GR ? void 0 : GR.interleavedKinds) && void 0 !== yR ? yR : null, this.offsets = null !== (tR = null === GR || void 0 === GR ? void 0 : GR.interleavedOffsets) && void 0 !== tR ? tR : [], this.rowStride = null !== (uR = null === GR || void 0 === GR ? void 0 : GR.interleavedRowStride) && void 0 !== uR ? uR : 0, null === (ZR = this.layout) || void 0 === ZR || ZR.forEach(((RR, JR) => {
          this.inputs[RR] = new eJ(this.attributesKey, 4 * this.offsets[JR], 4 * this.rowStride, GR.strides[RR])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), RR.batchUploads.set(JR, this), JR.YH.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(RR) {
        const JR = this.packedBatch;
        return JR.renderSelf ? 0 === RR ? this.packedSource : JR.instances[RR - 1] : JR.instances[RR]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(RR, JR, GR, yR) {
        const tR = (JR.renderSelf ? 1 : 0) + JR.rows.length;
        if (this.frame = yR, this.count = tR, this.packedSource = RR, this.packedBatch = JR, 0 === tR) return;
        if (RR.getWorldMatrix(), 16 * tR > this.matrices.length) {
          let RR = this.matrices.length / 16;
          for (; RR < tR;) RR *= 2;
          this.matrices = new Float32Array(16 * RR), this.attributes &&= new Float32Array(RR * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let uR = 0;
        JR.renderSelf && this.packRow(uR++, RR, JR.row, GR);
        for (let ZR = 0; ZR < JR.rows.length; ZR++) this.packRow(uR++, JR.instances[ZR], JR.rows[ZR], GR);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * tR), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, tR * this.rowStride)
      }
      packRow(RR, JR, GR, yR) {
        const tR = this.matrices;
        if (GR < 0) tR.set(JR.getWorldMatrix().m, 16 * RR);
        else
          for (let fR = 0; fR < 16; fR++) tR[16 * RR + fR] = yR[16 * GR + fR];
        const uR = this.attributes;
        if (!uR) return;
        const ZR = JR.Im,
          qR = this.layout;
        for (let fR = 0; fR < qR.length; fR++) {
          var iR;
          const JR = null !== (iR = ZR[qR[fR]]) && void 0 !== iR ? iR : 0,
            GR = RR * this.rowStride + this.offsets[fR];
          JR.toArray ? JR.toArray(uR, GR) : JR.copyToArray ? JR.copyToArray(uR, GR) : uR[GR] = JR
        }
      }
    }
    class eJ {
      constructor(RR, JR, GR, yR) {
        let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = RR, this.byteOffset = JR, this.byteStride = GR, this.size = yR, this.instanced = tR, this.type = uR, this.normalized = ZR
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
    const aJ = "CANVAS_ALPHA_ONE",
      LJ = `override ${aJ}: bool = false;`,
      nJ = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function UJ(RR, JR, GR) {
      var yR;
      let tR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const uR = null !== (yR = JR._colorFormat) && void 0 !== yR ? yR : "bgra8unorm",
        ZR = tR ? 15 : 0;
      return GR ? {
        ...RR,
        targets: [{
          format: uR,
          blend: {
            color: GR,
            alpha: nJ
          },
          writeMask: ZR
        }]
      } : {
        ...RR,
        constants: {
          ...RR.constants,
          [aJ]: 1
        },
        targets: [{
          format: uR,
          writeMask: ZR
        }]
      }
    }

    function WJ(RR, JR) {
      RR._renderables.push(JR)
    }

    function AJ(RR) {
      return RR._device
    }

    function CJ(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = RR._frameGraph) || void 0 === GR ? void 0 : GR._tasks) && void 0 !== JR ? JR : []
    }

    function XJ(RR) {
      return RR._currentEncoder
    }

    function MJ(RR) {
      return RR.createBindGroupLayout({
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
    const BJ = "greater-equal",
      lJ = 2e5,
      pJ = 1e5,
      gJ = new WeakMap;

    function bJ(RR, JR) {
      let GR = gJ.get(RR);
      if (!GR) {
        GR = {
          module: RR.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, gJ.set(RR, GR)
      }
      const yR = `${JR._colorFormat}|${JR._depthStencilFormat}|${JR._sampleCount}`;
      let tR = GR.pipelines.get(yR);
      if (!tR) {
        var uR;
        const {
          module: ZR
        } = GR;
        tR = RR.createRenderPipeline({
          label: `placeholder ${yR}`,
          layout: RR.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: ZR,
            entryPoint: "v"
          },
          fragment: {
            module: ZR,
            entryPoint: "f",
            targets: [{
              format: null !== (uR = JR._colorFormat) && void 0 !== uR ? uR : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: JR._depthStencilFormat ? {
            format: JR._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: JR._sampleCount
          }
        }), GR.pipelines.set(yR, tR)
      }
      return tR
    }

    function vJ(RR, JR, GR) {
      const yR = JR.eye,
        tR = JR.viewMatrix;
      RR[0] = yR[0] + tR[2] * GR, RR[1] = yR[1] + tR[6] * GR, RR[2] = yR[2] + tR[10] * GR
    }
    var OJ = GR(39125),
      xJ = GR(53589),
      NJ = GR(38366);
    const DJ = Math.PI,
      HJ = DJ / 1.95,
      oJ = [5e-4 / 94, 125e-7, 5e-4 / 18],
      cJ = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((RR => {
        let [JR, GR] = RR;
        return .434 * DJ * Math.pow(2 * DJ / JR, 2) * GR
      }));

    function PJ(RR, JR, GR) {
      const {
        up: yR,
        mieDirectionalG: tR
      } = RR, uR = 1 - zJ(1 - Math.exp(JR[1] / 45e4), 0, 1), ZR = RR.rayleigh - (1 - uR), qR = Math.hypot(JR[0], JR[1], JR[2]), iR = qR > 0 ? 1 / qR : 0, fR = GR.sunDir;
      for (let rR = 0; rR < 3; rR++) fR[rR] = JR[rR] * iR;
      const VR = fR[0] * yR[0] + fR[1] * yR[1] + fR[2] * yR[2],
        KR = 1e3 * Math.max(0, 1 - Math.exp(-(HJ - Math.acos(zJ(VR, -1, 1))) / 1.5));
      GR.sunE = KR;
      const wR = .2 * RR.turbidity * 1e-17 * RR.mieCoefficient;
      for (let rR = 0; rR < 3; rR++) {
        const RR = oJ[rR] * ZR,
          JR = cJ[rR] * wR,
          yR = KR / (RR + JR);
        GR.inScatterR[rR] = RR * yR, GR.inScatterM[rR] = JR * yR, GR.extinctionBeta[rR] = 8400 * RR + 1250 * JR
      }
      return GR.sunsetMix = zJ(Math.pow(1 - VR, 5), 0, 1), GR.sunDiscE = 19e3 * KR, GR.mieScale = (1 - tR * tR) / (4 * DJ), GR.mieBase = 1 + tR * tR, GR.mieSlope = 2 * tR, GR
    }
    const IJ = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const mJ = 1 / function(RR) {
      const {
        A: JR,
        B: GR,
        C: yR,
        D: tR,
        E: uR,
        F: ZR
      } = IJ;
      return (RR * (JR * RR + yR * GR) + tR * uR) / (RR * (JR * RR + GR) + tR * ZR) - uR / ZR
    }(1e3);

    function zJ(RR, JR, GR) {
      return Math.min(Math.max(RR, JR), GR)
    }
    const SJ = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function jJ(RR, JR) {
      const GR = new Map(JR),
        yR = [],
        tR = [],
        uR = () => 0 === tR.length || tR[tR.length - 1].active;
      let ZR = null;
      const qR = () => {
        const RR = [...GR].filter((RR => {
            let [, JR] = RR;
            return !0 !== JR
          })),
          JR = RR.map((RR => {
            let [JR] = RR;
            return JR
          })).join("|");
        ZR = RR.length ? new RegExp(`\\b(${JR})\\b`, "g") : null
      };
      qR();
      for (const iR of RR.split("\n")) {
        const RR = SJ.exec(iR);
        if (!RR) {
          uR() && yR.push(ZR ? dJ(iR, ZR, GR) : iR);
          continue
        }
        const JR = RR[1],
          fR = RR[2].trim();
        if ("ifdef" === JR || "ifndef" === JR || "if" === JR) {
          const RR = uR(),
            yR = "if" === JR ? EJ(fR, GR) : GR.has(fR) === ("ifdef" === JR);
          tR.push({
            active: RR && yR,
            parentActive: RR,
            taken: yR
          })
        } else if ("elif" === JR || "else" === JR) {
          const RR = tR[tR.length - 1];
          if (!RR) throw new Error(`#${JR} without #if`);
          const yR = !RR.taken && ("else" === JR || EJ(fR, GR));
          RR.active = RR.parentActive && yR, RR.taken = RR.taken || yR
        } else if ("endif" === JR) {
          if (!tR.pop()) throw new Error("#endif without #if")
        } else if (uR()) {
          const [RR, ...yR] = fR.split(/\s+/);
          "undef" === JR ? GR.delete(RR) : GR.set(RR, !yR.length || yR.join(" ")), qR()
        }
      }
      if (tR.length) throw new Error("Unterminated #if");
      return yR.join("\n")
    }

    function dJ(RR, JR, GR) {
      return RR.replace(JR, (RR => {
        const JR = GR.get(RR);
        return "string" === typeof JR ? JR : RR
      }))
    }

    function EJ(RR, JR) {
      var GR;
      const yR = null !== (GR = RR.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== GR ? GR : [];
      let tR = 0;
      const uR = () => yR[tR],
        ZR = () => yR[tR++],
        qR = RR => {
          const GR = /^\d/.test(RR) ? RR : JR.get(RR);
          return "string" === typeof GR ? parseInt(GR) : Number.NaN
        },
        iR = () => {
          const RR = ZR();
          if ("!" === RR) return !iR();
          if ("(" === RR) {
            const RR = VR();
            return ZR(), RR
          }
          if ("defined" === RR) {
            const RR = "(" === uR();
            RR && ZR();
            const GR = ZR();
            return RR && ZR(), JR.has(GR)
          }
          const GR = uR();
          if ("==" === GR || "!=" === GR || ">" === GR || "<" === GR || ">=" === GR || "<=" === GR) {
            ZR();
            const JR = qR(RR),
              yR = qR(ZR());
            if (Number.isNaN(JR) || Number.isNaN(yR)) return !1;
            switch (GR) {
              case "==":
                return JR === yR;
              case "!=":
                return JR !== yR;
              case ">":
                return JR > yR;
              case "<":
                return JR < yR;
              case ">=":
                return JR >= yR;
              default:
                return JR <= yR
            }
          }
          return JR.has(RR)
        },
        fR = () => {
          let RR = iR();
          for (;
            "&&" === uR();) {
            ZR();
            const JR = iR();
            RR = RR && JR
          }
          return RR
        },
        VR = () => {
          let RR = fR();
          for (;
            "||" === uR();) {
            ZR();
            const JR = fR();
            RR = RR || JR
          }
          return RR
        },
        KR = VR();
      if (tR !== yR.length) throw new Error(`Cannot evaluate #if ${RR}`);
      return KR
    }
    var YJ = GR(38456),
      kJ = GR(38585),
      QJ = GR(38588),
      FJ = GR(42342),
      TJ = GR(39981);
    const sJ = 32,
      hJ = [10, 3, 10],
      RG = [21, 7, 21],
      JG = RG[0] * RG[1] * RG[2],
      GG = 0,
      yG = 1,
      tG = 2,
      uG = 3,
      ZG = 64,
      qG = 512,
      iG = 4 * JG,
      fG = 1536,
      VG = iG + JG * fG,
      KG = 1073741824,
      wG = VG + 1;

    function rG(RR, JR) {
      const GR = RR % JR;
      return GR < 0 ? GR + JR : GR
    }

    function eG(RR, JR, GR) {
      return yR = rG(RR, RG[0]), tR = rG(JR, RG[1]), uR = rG(GR, RG[2]), yR + RG[0] * (tR + RG[1] * uR);
      var yR, tR, uR
    }

    function aG(RR, JR, GR) {
      return RR + 8 * (JR + 8 * GR)
    }

    function LG(RR, JR, GR) {
      return RR + 4 * (JR + 4 * GR)
    }
    const nG = 65535,
      UG = 0,
      WG = 1,
      AG = 2,
      CG = 3;

    function XG(RR) {
      return Math.ceil(RR * RR / 32)
    }
    const MG = 8192,
      BG = 1 << 18,
      lG = 65536,
      pG = 294912,
      gG = 128,
      bG = 4096,
      vG = 16,
      OG = 16385,
      xG = 81921,
      NG = 147457,
      DG = 4194304;
    const HG = [0, 0, 0],
      oG = [0, 0, 0];

    function cG(RR, JR, GR, yR) {
      ! function(RR, JR, GR) {
        const [yR, tR, uR] = [RR[0], RR[1], RR[2]];
        let ZR, qR, iR;
        Math.abs(tR) < .99 ? (ZR = uR, qR = 0, iR = -yR) : (ZR = -tR, qR = yR, iR = 0);
        const fR = Math.hypot(ZR, qR, iR);
        JR[0] = ZR / fR, JR[1] = qR / fR, JR[2] = iR / fR, GR[0] = tR * JR[2] - uR * JR[1], GR[1] = uR * JR[0] - yR * JR[2], GR[2] = yR * JR[1] - tR * JR[0]
      }(yR, HG, oG);
      const tR = 1 / 32;
      for (const [uR, ZR] of [
          [0, HG],
          [4, oG]
        ]) {
        for (let GR = 0; GR < 3; GR++) RR[JR + uR + GR] = ZR[GR] * tR;
        RR[JR + uR + 3] = -(ZR[0] * GR[0] + ZR[1] * GR[1] + ZR[2] * GR[2]) * tR
      }
    }
    class PG {
      constructor() {
        this.words = new Uint32Array(NG), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      UK(RR, JR) {
        this.parts = 0, this.refs = 0, this.view = RR, this.viewAt = JR;
        const GR = RR[JR + 1] * RR[JR + 6] - RR[JR + 2] * RR[JR + 5],
          yR = RR[JR + 2] * RR[JR + 4] - RR[JR] * RR[JR + 6],
          tR = RR[JR] * RR[JR + 5] - RR[JR + 1] * RR[JR + 4],
          uR = Math.hypot(GR, yR, tR) || 1;
        this.light[0] = GR / uR, this.light[1] = yR / uR, this.light[2] = tR / uR
      }
      add(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= bG || ! function(RR, JR, GR) {
            const yR = RR[JR],
              tR = RR[JR + 1],
              uR = RR[JR + 2],
              ZR = RR[JR + 3],
              qR = RR[JR + 4],
              iR = RR[JR + 5],
              fR = RR[JR + 6],
              VR = RR[JR + 7],
              KR = RR[JR + 8],
              wR = RR[JR + 9],
              rR = RR[JR + 10],
              eR = RR[JR + 11],
              aR = RR[JR + 12],
              LR = RR[JR + 13],
              nR = RR[JR + 14],
              UR = RR[JR + 15],
              WR = yR * iR - tR * qR,
              AR = yR * fR - uR * qR,
              CR = yR * VR - ZR * qR,
              XR = tR * fR - uR * iR,
              MR = tR * VR - ZR * iR,
              BR = uR * VR - ZR * fR,
              lR = KR * LR - wR * aR,
              pR = KR * nR - rR * aR,
              gR = KR * UR - eR * aR,
              bR = wR * nR - rR * LR,
              vR = wR * UR - eR * LR,
              OR = rR * UR - eR * nR,
              xR = WR * OR - AR * vR + CR * bR + XR * gR - MR * pR + BR * lR;
            if (!(Math.abs(xR) > 1e-12)) return !1;
            const NR = 1 / xR;
            return GR[0] = (iR * OR - fR * vR + VR * bR) * NR, GR[1] = (uR * vR - tR * OR - ZR * bR) * NR, GR[2] = (LR * BR - nR * MR + UR * XR) * NR, GR[3] = (rR * MR - wR * BR - eR * XR) * NR, GR[4] = (fR * gR - qR * OR - VR * pR) * NR, GR[5] = (yR * OR - uR * gR + ZR * pR) * NR, GR[6] = (nR * CR - aR * BR - UR * AR) * NR, GR[7] = (KR * BR - rR * CR + eR * AR) * NR, GR[8] = (qR * vR - iR * gR + VR * lR) * NR, GR[9] = (tR * gR - yR * vR - ZR * lR) * NR, GR[10] = (aR * MR - LR * CR + UR * WR) * NR, GR[11] = (wR * CR - KR * MR - eR * WR) * NR, GR[12] = (iR * pR - qR * bR - fR * lR) * NR, GR[13] = (yR * bR - tR * pR + uR * lR) * NR, GR[14] = (LR * AR - aR * XR - nR * WR) * NR, GR[15] = (KR * XR - wR * AR + rR * WR) * NR, !0
          }(JR, GR, this.inverse)) return;
        const {
          view: yR,
          viewAt: tR
        } = this, uR = GR;
        let ZR = 1 / 0,
          qR = 1 / 0,
          iR = -1 / 0,
          fR = -1 / 0,
          VR = -1 / 0;
        const [KR, wR, rR] = this.light;
        for (let CR = 0; CR < 8; CR++) {
          const GR = 1 & CR ? RR.hi[0] : RR.lo[0],
            eR = 2 & CR ? RR.hi[1] : RR.lo[1],
            aR = 4 & CR ? RR.hi[2] : RR.lo[2],
            LR = GR * JR[uR] + eR * JR[uR + 4] + aR * JR[uR + 8] + JR[uR + 12],
            nR = GR * JR[uR + 1] + eR * JR[uR + 5] + aR * JR[uR + 9] + JR[uR + 13],
            UR = GR * JR[uR + 2] + eR * JR[uR + 6] + aR * JR[uR + 10] + JR[uR + 14],
            WR = yR[tR] * LR + yR[tR + 1] * nR + yR[tR + 2] * UR + yR[tR + 3],
            AR = yR[tR + 4] * LR + yR[tR + 5] * nR + yR[tR + 6] * UR + yR[tR + 7];
          ZR = Math.min(ZR, WR), qR = Math.min(qR, AR), iR = Math.max(iR, WR), fR = Math.max(fR, AR), VR = Math.max(VR, KR * LR + wR * nR + rR * UR)
        }
        if (iR < -1 || fR < -1 || ZR >= 1 || qR >= 1) return;
        const eR = this.parts++,
          aR = this.rects;
        aR[4 * eR] = IG(ZR), aR[4 * eR + 1] = IG(qR), aR[4 * eR + 2] = IG(iR), aR[4 * eR + 3] = IG(fR);
        const LR = this.inverse,
          {
            cell: nR,
            dims: UR,
            lo: WR
          } = RR,
          AR = xG + eR * vG;
        for (let CR = 0; CR < 3; CR++) this.floats[AR + 4 * CR] = LR[CR] / nR, this.floats[AR + 4 * CR + 1] = LR[4 + CR] / nR, this.floats[AR + 4 * CR + 2] = LR[8 + CR] / nR, this.floats[AR + 4 * CR + 3] = (LR[12 + CR] - WR[CR]) / nR;
        this.words[AR + 12] = RR.at, this.floats[AR + 13] = VR + .001 * (1 + Math.abs(VR)), this.words[AR + 14] = UR[0] | UR[1] << 8 | UR[2] << 16
      }
      finish() {
        const RR = gG,
          {
            counts: JR,
            rects: GR,
            words: yR
          } = this;
        JR.fill(0);
        let tR = 0,
          uR = 0;
        for (; uR < this.parts; uR++) {
          const yR = 4 * uR,
            ZR = (GR[yR + 2] - GR[yR] + 1) * (GR[yR + 3] - GR[yR + 1] + 1);
          if (tR + ZR > 65536) break;
          tR += ZR;
          for (let tR = GR[yR + 1]; tR <= GR[yR + 3]; tR++)
            for (let uR = GR[yR]; uR <= GR[yR + 2]; uR++) JR[tR * RR + uR]++
        }
        let ZR = 0;
        for (let iR = 0; iR < 16384; iR++) yR[iR] = ZR, ZR += JR[iR], JR[iR] = yR[iR];
        yR[16384] = ZR;
        for (let iR = 0; iR < uR; iR++) {
          const tR = 4 * iR;
          for (let uR = GR[tR + 1]; uR <= GR[tR + 3]; uR++)
            for (let ZR = GR[tR]; ZR <= GR[tR + 2]; ZR++) yR[OG + JR[uR * RR + ZR]++] = iR
        }
        const qR = this.floats;
        for (let iR = 0; iR < 16384; iR++) {
          const RR = OG + yR[iR],
            JR = RR + Math.min(yR[iR + 1] - yR[iR], 64);
          for (let GR = RR + 1; GR < JR; GR++) {
            const JR = yR[GR],
              tR = qR[81934 + JR * vG];
            let uR = GR - 1;
            for (; uR >= RR && qR[81934 + yR[uR] * vG] < tR; uR--) yR[uR + 1] = yR[uR];
            yR[uR + 1] = JR
          }
        }
        this.refs = tR
      }
    }

    function IG(RR) {
      return Math.min(127, Math.max(0, Math.floor((.5 * RR + .5) * gG)))
    }

    function mG(RR, JR, GR, yR, tR) {
      for (let uR = 0; uR < 4; uR++)
        for (let ZR = 0; ZR < 4; ZR++) tR[4 * uR + ZR] = RR[JR + 4 * uR] * GR[yR + ZR] + RR[JR + 4 * uR + 1] * GR[yR + 4 + ZR] + RR[JR + 4 * uR + 2] * GR[yR + 8 + ZR] + RR[JR + 4 * uR + 3] * GR[yR + 12 + ZR]
    }

    function zG(RR, JR, GR, yR, tR) {
      const uR = RR[0] - JR,
        ZR = RR[1] - GR,
        qR = RR[2] - yR,
        iR = RR[3] - JR,
        fR = RR[4] - GR,
        VR = RR[5] - yR,
        KR = RR[6] - JR,
        wR = RR[7] - GR,
        rR = RR[8] - yR;
      if (Math.min(uR, iR, KR) > tR || Math.max(uR, iR, KR) < -tR) return !1;
      if (Math.min(ZR, fR, wR) > tR || Math.max(ZR, fR, wR) < -tR) return !1;
      if (Math.min(qR, VR, rR) > tR || Math.max(qR, VR, rR) < -tR) return !1;
      const eR = iR - uR,
        aR = fR - ZR,
        LR = VR - qR,
        nR = KR - iR,
        UR = wR - fR,
        WR = rR - VR,
        AR = aR * WR - LR * UR,
        CR = LR * nR - eR * WR,
        XR = eR * UR - aR * nR;
      if (Math.abs(AR * uR + CR * ZR + XR * qR) > tR * (Math.abs(AR) + Math.abs(CR) + Math.abs(XR))) return !1;
      const MR = [eR, aR, LR, nR, UR, WR, uR - KR, ZR - wR, qR - rR];
      for (let BR = 0; BR < 3; BR++) {
        const RR = MR[3 * BR],
          JR = MR[3 * BR + 1],
          GR = MR[3 * BR + 2];
        for (let yR = 0; yR < 3; yR++) {
          const eR = 0 === yR ? 0 : 1 === yR ? GR : -JR,
            aR = 0 === yR ? -GR : 1 === yR ? 0 : RR,
            LR = 0 === yR ? JR : 1 === yR ? -RR : 0,
            nR = eR * uR + aR * ZR + LR * qR,
            UR = eR * iR + aR * fR + LR * VR,
            WR = eR * KR + aR * wR + LR * rR,
            AR = tR * (Math.abs(eR) + Math.abs(aR) + Math.abs(LR));
          if (Math.min(nR, UR, WR) > AR || Math.max(nR, UR, WR) < -AR) return !1
        }
      }
      return !0
    }
    const SG = new Float32Array(1);
    new Uint32Array(SG.buffer);
    var jG = GR(39990);

    function dG(RR) {
      const [JR, GR, yR] = jG.q;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${RR.group}) @binding(${RR.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${JR-1}, ${GR-1}, ${yR-1});\n}\n`
    }

    function EG(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [tR, uR, ZR] = RG, [qR, iR, fR] = hJ, VR = Math.log2(sJ), KR = yR ? "var<private> bloxdSpCrossed: bool;\n" : "", wR = yR ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${RR.group}) @binding(${RR.Rr}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${RR.group}) @binding(${RR.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${GR?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${KR}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${WG}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${AG}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${GR?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${CG}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${tR}, ${uR}, ${ZR});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${tR} * (s.y + ${uR} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${qR}, ${iR}, ${fR}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${VR}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${uG}u) {\n\t\treturn named && state == ${tG}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${iG}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${VG}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${JR?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${JR?`\t\tif (exits && step > 0 && step % ${QG} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${VR}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${GG}u || kind == ${yG}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${tG}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${iG}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${wR}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const YG = {
      group: 0,
      uniform: 0,
      Rr: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function kG() {
      const RR = YG;
      return `${dG(RR)}${EG(RR,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${jG.d}>,\n}\n@group(${RR.group}) @binding(${RR.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${RR.group}) @binding(${RR.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${jG.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${jG.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${jG.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const QG = 2;
    const FG = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function TG(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const yR = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${JR.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        tR = "trace" === GR || "lit" === GR,
        uR = "maskEdge" === GR ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        ZR = tR ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${JR.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${JR.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===GR?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${uR};\n`;
      return `${yR}${RR.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${tR?function(){const[RR,JR,GR]=jG.q;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${RR}.0, ${JR}.0, ${GR}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${ZR}}\n`:""}${RR.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${JR.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${JR.renderOffset});\n}\n`:""}`
    }
    const sG = "bloxdSpOwnTexture";

    function hG(RR) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${RR.texture}) - 1u)))`
    }
    const Ry = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${OJ.e.map((RR=>{let[JR,GR]=RR;return`\tbloxdSpOut.${JR} = (bloxdSpWord & ${GR}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Jy(RR) {
      return `bloxdSpFlags(${RR})`
    }
    const Gy = `${FJ.j}.eyePosition`;

    function yy(RR, JR, GR, yR, tR) {
      const uR = RR.indexOf(JR);
      if (uR < 0 || RR.indexOf(JR, uR + 1) >= 0) throw new Error(`Lite's ${tR} program changed at the shader pack ${yR} hook: ${uR<0?"no":"more than one"} anchor (lite/${tR}ShaderPack.ts)`);
      return RR.slice(0, uR) + GR + RR.slice(uR + JR.length)
    }

    function ty(RR) {
      return RR.sunShadow || RR.airShadow
    }

    function uy(RR, JR) {
      return JR && ty(RR)
    }
    const Zy = {
      group: FJ.e,
      ...FJ.o
    };

    function qy(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!ty(RR)) return "";
      if (JR) {
        const JR = Zy,
          tR = "trace" === GR || "lit" === GR;
        let uR = "";
        RR.sunShadow && (uR = tR ? `${EG(JR,!0,"lit"===GR)}${yR=JR,`@group(${yR.group}) @binding(${yR.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${yR.group}) @binding(${yR.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(RR, JR, GR) {
          const yR = `@group(${RR}) @binding(${JR}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return GR ? `${yR}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${FG}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((RR=>`\t{\n\t\tlet o = vec2i(${RR});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : yR
        }(JR.group, FJ.r, "maskEdge" === GR));
        const ZR = {
          shadowDirection: `${FJ.j}.shadowDirection`,
          renderOffset: `${FJ.j}.renderOffset`,
          eyePosition: `${FJ.j}.eyePosition`
        };
        return `${dG(JR)}${uR}${function(RR){const[JR,GR,yR]=jG.q;return`@group(${RR.group}) @binding(${RR.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${RR.group}) @binding(${RR.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${JR}.0, ${GR}.0, ${yR}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(JR)}${TG(RR,ZR,GR)}`
      }
      var yR;
      return `${RR.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${RR.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function iy(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!JR) return "";
      const uR = (ZR = "fragmentInputs.vPositionW", qR = RR.sunShadow ? {
        normal: GR,
        flags: yR
      } : null, `\n\tbloxdSpShadowPosition = ${ZR};\n${qR?`\tbloxdSpShadowNormal = normalize(${qR.normal});\n\tbloxdSpShadowEmissive = (${qR.flags} & ${OJ.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${qR.flags} & ${OJ.i}u) != 0u;\n`:""}`);
      var ZR, qR;
      return RR.sunShadow && ("mask" === tR || "maskEdge" === tR) ? `${uR}${iR="fragmentInputs.position",fR="maskEdge"===tR,`\n\tbloxdSpShadowPixel = vec2i(${iR}.xy);\n${fR?`\tbloxdSpShadowZ = ${iR}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${iR}.z), dpdy(${iR}.z));\n`:""}`}` : uR;
      var iR, fR
    }
    const fy = "bloxdSpTextureRotation",
      Vy = "bloxdSpTextureLayers",
      Ky = `@group(${FJ.e}) @binding(${FJ.v}) var<storage, read> ${Vy}: array<u32>;\n`;

    function wy(RR) {
      return `\tvertexOutputs.vPackTexture = ${Vy}[min(u32(${RR}), arrayLength(&${Vy}) - 1u)];\n`
    }

    function ry(RR) {
      return void 0 !== RR.uv
    }

    function ey(RR) {
      if (!RR) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (ry(RR)) return function(RR) {
        const {
          texture: JR,
          cells: GR,
          layers: yR
        } = RR, tR = `textureDimensions(${JR}, bloxdSpLevel)`, uR = GR ? `max(vec2u(vec2f(${tR}) / ${GR}), vec2u(1u))` : tR, ZR = GR ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${uR};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${GR}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${GR}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${JR}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${tR} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${uR};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${JR}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let qR;
        if (GR)
          if (1 === yR.length) qR = `\treturn bloxdSpOwnTexel(${yR[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const RR = yR.length - 1;
            qR = `\tvar bloxdSpColour = bloxdSpOwnTexel(${yR[RR]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let JR = RR - 1; JR >= 0; JR--) qR += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${yR[JR]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            qR += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else qR = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${RR.id?`var<private> ${sG}: u32;\n`:""}${ZR}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${hG(RR)};\n\treturn ${uR};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${RR.id?sG:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${hG(RR)};\n${qR}}\n`
      }(RR);
      const JR = RR,
        GR = RR => {
          const GR = RR > 0 ? `bloxdSpLayer - ${JR.layers*RR}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${RR}, ${JR.sampler}, bloxdSpTurned, ${GR}, round(bloxdSpMipLevel));`
        };
      let yR = "";
      for (let uR = 0; uR < JR.count - 1; uR++) yR += `\tif (bloxdSpLayer < ${JR.layers*(uR+1)}u) {\n\t\t${GR(uR)}\n\t}\n`;
      const tR = JR.frame ? `${JR.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${fy}: u32;\n${Ky}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${fy} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${fy} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${fy} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${tR}${yR}\t${GR(JR.count-1)}\n}\n`
    }

    function ay(RR, JR, GR) {
      return !!RR.surface && "bloxdDefaultSurface" !== RR.surface && function(RR, JR) {
        return "liquid" === JR || !RR
      }(JR, GR)
    }

    function Ly(RR, JR) {
      return RR.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${JR.vertexLocalPosition}, ${Jy(JR.vertexFlags)});\n\t\tlet bloxdSpVertex = ${RR.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function ny(RR, JR, GR, yR, tR) {
      if (!RR.surface) return "";
      const uR = (RR, JR) => `\n\tlet bloxdSpTexelUV = ${RR};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${JR}) - 1u));`;
      let ZR = "",
        qR = "0u, 0u, vec2f(0.0), 0.0";
      const iR = yR && ry(yR) ? yR : null,
        fR = yR && !ry(yR) ? yR : null;
      if (iR) {
        ZR = `${iR.id?`\n\tlet bloxdSpTexture = ${iR.id};\n\t${sG} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${iR.uv};${uR(function(RR,JR){var GR;return`${null!==(GR=RR.levelUv)&&void 0!==GR?GR:RR.cells?`${JR} / ${RR.cells}`:JR} * vec2f(textureDimensions(${RR.texture}))`}(iR,"bloxdSpUv"),iR.texture)}`, qR = (iR.id ? `${sG}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else fR && (ZR = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${fy} = bloxdSpTexture >> 16u;${uR(`fragmentInputs.vMainUV1 * ${(0,YJ.eb)(fR.width)}`,"textureAtlas0")}`, qR = `bloxdSpTexture & 0xffffu, ${fy}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const VR = tR.overlayColour,
        KR = VR ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        wR = "bloxdDefaultSurface" !== RR.surface || VR ? `\n\tbaseColor = vec4f(${KR}, baseColor.a);` : "",
        rR = ay(RR, JR, GR) ? `\n\t${tR.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${ZR}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${tR.alpha}, ${tR.enchantTier}, ${tR.enchantColour}, ${tR.enchantSpeed}, ${null!==VR&&void 0!==VR?VR:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${tR.normal}, ${tR.localPosition}, ${Jy(tR.flags)}, ${qR});\n\tlet bloxdSpSurface = ${RR.surface}(bloxdSpSurfaceIn);${wR}${rR}\n`
    }
    const Uy = "bloxdSpLightIn";

    function Wy(RR, JR, GR, yR) {
      if (!RR.light) return "";
      const {
        lambert: tR,
        diffuse: uR,
        emissive: ZR,
        ambient: qR,
        fogColour: iR,
        fogAlpha: fR,
        normal: VR,
        glow: KR
      } = yR, wR = [`${YJ.k}.rgb`, `${YJ.k}.w`, "uniforms.uAmbientLightColour", "uniforms.uSkyLightColour", YJ.g], rR = ["vec3f(0.0)", "1.0", "vec3f(1.0)", "vec3f(1.0)", "vec3f(0.0)"];

      function eR(RR, JR) {
        return null === KR ? RR : `mix(${RR}, ${JR}, ${KR})`
      }
      const aR = (JR ? wR.map(((RR, JR) => eR(RR, rR[JR]))) : rR).join(", "),
        LR = GR ? eR(tR, "0.0") : "0.0";
      return `\tvar ${Uy} = BloxdLightIn(vec3f(0.0), ${LR}, ${uR}, ${eR(ZR,"vec3f(1.0)")}, ${qR}, ${aR}, ${iR}, ${fR}, fragmentInputs.vPositionW, ${VR}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Uy}.litColour = bloxdLitColour(bloxdSpSurface, ${Uy});\n`
    }

    function Ay(RR) {
      return RR.light ? `\n\t{\n\t\tlet bloxdSpLight = ${RR.light}(bloxdSpSurface, ${Uy});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Cy = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      Xy = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      My = "\treturn color;\n}",
      By = {
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
    const ly = Object.freeze({});

    function py(RR) {
      var JR;
      return !(null === (JR = (0, TJ.c)(RR)) || void 0 === JR || !JR.sceneDepth)
    }

    function gy(RR) {
      const JR = (0, TJ.c)(RR);
      return !!JR && ay(JR.hooks, JR.strict, JR.program)
    }

    function by(RR, JR, GR, yR) {
      return yy(RR, JR, GR, yR, "terrain")
    }

    function vy(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const uR = function(RR) {
          return (0, TJ.b)(RR.packVariant, RR.liquid ? "liquid" : "terrain")
        }(RR),
        {
          hooks: ZR
        } = uR,
        qR = uy(uR, yR),
        iR = "edge" === tR ? "maskEdge" : "plain" === tR ? "mask" : "trace",
        fR = Ly(ZR, By);
      fR && (JR = by(JR, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${fR}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const VR = "atlas" === RR.texture ? {
          count: RR.atlasCount,
          layers: RR.atlasLayers,
          width: RR.W8,
          sampler: "atlasSampler",
          frame: RR.animated ? GR : null
        } : null,
        KR = `${uR.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${iy(uR,qR,By.normal,By.flags,iR)}${ny(ZR,uR.strict,uR.program,VR,By)}`;
      KR && (JR = by(JR, Cy, `${Cy.slice(0,-1)}${KR}`, "surface"));
      const wR = Ay(ZR);
      return wR && (JR = by(JR, Xy, `${Wy(ZR,RR.lighting,RR.dirLightCount>0,By)}${Xy}`, "light input"), JR = by(JR, My, `${wR.slice(1)}${My}`, "light")), `${(0,FJ.C)()}${uR.sceneDepth?`@group(${FJ.e}) @binding(${FJ.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Gy};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${qy(uR,qR,iR)}${ey(VR)}${Ry}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${uR.code}${JR}`
    }
    const Oy = XR.c.WGSL;

    function xy(RR) {
      return void 0 !== RR.packVariant
    }
    const Ny = {
        DuR: 0,
        HuR: 4,
        ouR: 8,
        cuR: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Dy = Ny.aoLevels + 4,
      Hy = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      oy = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      cy = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Py = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Iy = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      my = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      zy = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      Sy = 0,
      jy = 3,
      dy = 4,
      Ey = 5,
      Yy = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${kJ.c}, ${kJ.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${kJ.c}, ${kJ.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      ky = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((RR=>QJ.c>>RR&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Qy = {
      gK: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: RR => `animDataPerTex[${RR}]`
    };

    function Fy(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qy;
      return `\n\tlet atlasIdxIn = ${RR};\n\tlet animTick = ${GR.gK};\n\tlet animTickStride = ${GR.stride};\n\tlet numAnimTextures = ${GR.count};\n\t${(0,MR.h)(XR.c.WGSL,GR.perTexture)}\n\t${JR}animLayer;\n`
    }

    function Ty(RR) {
      const JR = (JR, GR) => {
        const yR = JR > 0 ? `fragmentInputs.texAtlasIndex - ${RR.atlasLayers.toFixed(1)} * ${JR.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${GR?"textureSampleLevel":"textureSample"}(textureAtlas${JR}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${yR}))${GR?", atlasLod":""})`
      };
      if (1 === RR.atlasCount) return `baseColor = ${JR(0,!1)};`;
      let GR = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,YJ.eb)(RR.W8)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let yR = 0; yR < RR.atlasCount; yR++) {
        const tR = RR.atlasLayers * (yR + 1) - .5;
        GR += `${yR>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,YJ.eb)(tR)}) {\n\t\tbaseColor = ${JR(yR,!0)};\n\t}`
      }
      return GR
    }

    function sy(RR) {
      return `terrain-${RR.texture}${"atlas"===RR.texture?RR.atlasCount:""}${RR.animated?"-anim":""}${RR.alphaTest?"-test":""}${RR.lighting?"-lit":""}-dir${RR.dirLightCount}${RR.packed?"-packed":""}${xy(RR)?`-sp${RR.packVariant}`:""}${RR.liquid?"-liquid":""}${RR.resting?"-rest":""}`
    }

    function hy(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const yR = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const GR = "none" !== RR.texture,
          yR = "atlas" === RR.texture,
          tR = RR.dirLightCount > 0,
          uR = xy(RR);
        if (RR.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${RR.dirLightCount}`);
        let ZR = 1,
          qR = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (yR) {
          RR.animated && (qR += `@group(2) @binding(${ZR++}) var<storage, read> animDataPerTex: array<f32>;\n`), qR += `@group(2) @binding(${ZR++}) var atlasSampler: sampler;\n`;
          for (let JR = 0; JR < RR.atlasCount; JR++) qR += `@group(2) @binding(${ZR++}) var textureAtlas${JR}: texture_2d_array<f32>;\n`
        } else "single" === RR.texture && (qR += `@group(2) @binding(${ZR++}) var diffuseSamplerSampler: sampler;\n`, qR += `@group(2) @binding(${ZR++}) var diffuseSampler: texture_2d<f32>;\n`);
        const iR = function(RR) {
            const JR = zy,
              GR = "none" !== RR.texture,
              yR = "atlas" === RR.texture,
              tR = xy(RR);
            return RR.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${GR?"uv: vec2f,":""}\n\t${yR?"texAtlasIndices: f32,":""}\n\t${RR.lighting?"aPackedLightLevels: f32,":""}\n\t${tR?"blockFlagWords: vec2u,":""}\n}\n${Yy}\n${ky}\n${"single"===RR.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${GR?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===RR.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${yR?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${RR.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${tR?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${JR.position}) position: vec3f,\n\t@location(${JR.normal}) normal: vec4f,\n\t@location(${JR.color}) color: vec4f,\n\t${GR?`@location(${JR.uv}) uv: vec2f,`:""}\n\t${RR.lighting?`@location(${JR.packedLight}) aPackedLightLevels: f32,`:""}\n\t${tR?`@location(${JR.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(RR),
          fR = `\n${Py}\n${oy}\n${cy}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${qR}\n${LJ}\n${iR.declarations}\nstruct Varyings {\n\t${"none"===JR?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${RR.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${tR?"@location(5) vTerrainLambert: f32,":""}\n\t${GR?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${yR?"@location(7) texAtlasIndex: f32,":""}\n\t${RR.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${uR?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${uR&&yR?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${RR.resting?"":(0,YJ.q)(Oy)}\n${my}\n\n@vertex\nfn mainVertex(${iR.parameter}) -> Varyings {\n\t${iR.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${uR?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${OJ.b.placed}u;`:""}\n\t${uR&&yR?wy("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${RR.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${GR?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${yR?function(RR){return RR?Fy("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(RR.animated):""}\n\t${"single"===RR.texture&&RR.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,YJ.S)(Oy)}\n\t${(0,YJ.C)(Oy,RR.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${RR.resting?"":Iy}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${yR?Ty(RR):""}\n\t${"single"===RR.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${GR?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${RR.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${tR?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${aJ}));\n\t${xy(RR)?(0,YJ.ab)(XR.c.WGSL):(0,YJ.J)(Oy)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          VR = new Set;
        RR.lighting && VR.add("BLOXD_LIGHTING");
        tR && VR.add("BLOXD_TERRAIN_DIRECTIONAL");
        return jJ(fR, new Map([...VR].map((RR => [RR, !0]))))
      }(RR, GR);
      if (!xy(RR)) return yR;
      const tR = vy(RR, yR, Fy, JR, GR);
      return "none" === GR ? tR : `${tR}${function(RR){const JR="none"!==RR.texture&&RR.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${RR.resting?"":Iy}\n\t${RR.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${JR&&"atlas"===RR.texture?Ty(RR):""}\n\t${JR&&"single"===RR.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${JR?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${OJ.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(RR)}`
    }
    const Rt = new Map([
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

    function Jt(RR, JR) {
      const GR = new Map;
      let yR = 0;
      const tR = [],
        uR = [],
        ZR = [];
      for (const fR of JR) {
        var qR, iR;
        const JR = null !== (qR = fR.type.trim().split(/\s+/).pop()) && void 0 !== qR ? qR : fR.type,
          VR = Rt.get(JR);
        if (!VR) throw new Error(`Lite: no uniform layout for ${fR.name}: ${fR.type}`);
        const KR = null !== (iR = fR.arraySize) && void 0 !== iR ? iR : 0,
          wR = KR ? 4 : VR.align;
        yR = Math.ceil(yR / wR) * wR;
        const rR = KR ? 4 * Math.ceil(VR.floats / 4) : VR.floats;
        if (GR.set(fR.name, {
            offset: yR,
            floats: VR.floats,
            arraySize: KR,
            stride: rR
          }), KR && VR.floats <= 2) {
          const JR = `${RR}_${ZR.length}_strided`;
          uR.push(`struct ${JR} {\n\t@size(16) el: ${VR.wgsl},\n}`), ZR.push(fR.name), tR.push(`\t@align(16) ${fR.name}: array<${JR}, ${KR}>,`)
        } else KR ? tR.push(`\t@align(16) ${fR.name}: array<${VR.wgsl}, ${KR}>,`) : tR.push(`\t${fR.name}: ${VR.wgsl},`);
        yR += KR ? rR * KR : VR.floats
      }
      return {
        slots: GR,
        floats: Math.max(4, 4 * Math.ceil(yR / 4)),
        wgsl: `${uR.join("\n")}\nstruct ${RR} {\n${tR.join("\n")}\n}\n`,
        stridedArrays: ZR
      }
    }
    const Gt = [{
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
      yt = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      tt = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function ut(RR, JR) {
      return `#if defined(${RR}) && ${RR}DIRECTUV == 0\nvarying v${JR}UV: vec2f;\n#endif`
    }

    function Zt(RR, JR, GR) {
      return `#if defined(${RR}) && ${RR}DIRECTUV == 0\nif (uniforms.v${JR}Infos.x==0.)\n{vertexOutputs.v${JR}UV= (uniforms.${GR}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${JR}UV= (uniforms.${GR}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function qt(RR, JR, GR) {
      return `#ifdef ${RR}\n#if ${RR}DIRECTUV == 1\n#define v${JR}UV vMainUV1\n#elif ${RR}DIRECTUV == 2\n#define v${JR}UV vMainUV2\n#else\nvarying v${JR}UV: vec2f;\n#endif\nvar ${GR}SamplerSampler: sampler;\nvar ${GR}Sampler: texture_2d<f32>;\n#endif`
    }
    const it = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      ft = 256,
      Vt = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Kt = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      wt = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      rt = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      et = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Lt = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      nt = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Ut = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Kt}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${ut("OPACITY","Opacity")}\n${ut("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${nt}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${wt}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Zt("OPACITY","Opacity","opacity")}\n${Zt("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${rt}\n#define CUSTOM_VERTEX_MAIN_END\n${et}\n}\n`;
    const Wt = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${qt("OPACITY","Opacity","opacity")}\n${qt("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${nt}\n${Lt}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((RR,JR)=>function(RR){const JR=`
    frame.lights[LITE_LIGHT$ {
        RR
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      RR
    }\
    nvar diffuse$ {
      RR
    }: vec4f = $ {
      JR
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      RR
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      JR
    }.vLightData, diffuse$ {
      RR
    }.rgb, $ {
      JR
    }.vLightSpecular.rgb, diffuse$ {
      RR
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(JR))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, At = /^([gimus]+)!/, Ct = new Set;

    function Xt(RR) {
      Ct.has(RR) || (Ct.add(RR), console.warn(`Lite: no place for plugin code at ${RR} in the standard shader: it is left out`))
    }

    function Mt(RR, JR) {
      let GR = RR;
      const yR = new Map;
      for (const [uR, ZR] of JR) {
        var tR;
        yR.set(uR, `${null!==(tR=yR.get(uR))&&void 0!==tR?tR:""}${ZR}\n`)
      }
      for (const [uR, ZR] of yR) {
        if (!uR.startsWith("!")) {
          const RR = `#define ${uR}`;
          if (!GR.includes(RR)) {
            Xt(uR);
            continue
          }
          GR = GR.replace(RR, (() => `\n${ZR}\n${RR}`));
          continue
        }
        let RR = uR.substring(1),
          JR = "g";
        if (RR.startsWith("!")) JR = "", RR = RR.substring(1);
        else {
          const GR = At.exec(RR);
          GR && (JR = GR[1], RR = RR.substring(JR.length + 1))
        }
        const yR = new RegExp(RR, JR.includes("g") ? JR : `${JR}g`);
        let tR = yR.exec(GR);
        for (tR || Xt(uR); tR;) {
          const RR = tR,
            JR = ZR.replace(/\$(\d+)/g, ((JR, GR) => Number(GR) < RR.length ? RR[Number(GR)] : ""));
          GR = GR.substring(0, RR.index) + JR + GR.substring(RR.index + RR[0].length), yR.lastIndex = RR.index + JR.length, tR = yR.exec(GR)
        }
      }
      return GR
    }
    const Bt = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      lt = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      pt = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function gt(RR) {
      const JR = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let GR = RR.replace(Bt, ((RR, GR, yR, tR, uR, ZR) => ("attribute" === GR ? JR.attributes.push({
        name: uR,
        type: ZR
      }) : void 0 === GR ? JR.varyings.push({
        name: uR,
        type: ZR,
        interpolation: vt(ZR, yR, tR)
      }) : JR.uniforms.push({
        name: uR,
        type: bt(ZR)
      }), "")));
      return GR = GR.replace(lt, ((RR, GR) => (JR.samplers.add(GR), ""))), GR = GR.replace(pt, ((RR, GR, yR) => (JR.textures.push({
        name: GR,
        type: yR
      }), ""))), JR.body = GR, JR
    }

    function bt(RR) {
      const JR = RR.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        GR = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(JR);
      if (!GR) throw new Error(`Lite: unsupported uniform type ${RR}`);
      return GR
    }

    function vt(RR, JR, GR) {
      return void 0 === JR && void 0 === GR ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(RR.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === JR ? "@interpolate(flat) " : `@interpolate(${null!==JR&&void 0!==JR?JR:"perspective"}, ${null!==GR&&void 0!==GR?GR:"center"}) `
    }

    function Ot(RR) {
      return Ht({
        defines: RR.defines,
        vertex: Mt(Ut, RR.vertexCode),
        fragment: Mt(Wt, RR.fragmentCode),
        members: [...Gt, ...RR.defines.has("OPACITY") ? yt : [], ...RR.defines.has("EMISSIVE") ? tt : [], ...RR.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function xt(RR) {
      const JR = RR.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (JR === RR) throw new Error("Lite: fragment main has no return");
      return JR
    }
    const Nt = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Kt}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${wt}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${rt}\n${et}\n}\n`,
      Dt = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Lt}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Ht(RR) {
      const JR = RR.defines,
        GR = gt(jJ(RR.vertex, JR)),
        yR = gt(jJ(RR.fragment, JR)),
        tR = new Map;
      for (const WR of [...GR.varyings, ...yR.varyings]) tR.has(WR.name) || tR.set(WR.name, WR);
      const uR = [...tR.values()].map(((RR, JR) => `\t@location(${JR}) ${RR.interpolation}${RR.name}: ${RR.type},`)),
        ZR = [...RR.members];
      for (const WR of [...GR.uniforms, ...yR.uniforms]) ZR.some((RR => RR.name === WR.name)) || ZR.push(WR);
      const qR = Jt(RR.structName, ZR),
        iR = [],
        fR = [];
      let VR = 1;
      const KR = new Set;
      for (const WR of [...GR.textures, ...yR.textures]) {
        if (KR.has(WR.name)) continue;
        KR.add(WR.name);
        const RR = `${WR.name}Sampler`,
          JR = VR++,
          GR = VR++,
          yR = WR.type.startsWith("texture_2d_array") ? "2d-array" : WR.type.startsWith("texture_cube") ? "cube" : "2d";
        iR.push({
          name: WR.name,
          binding: JR,
          samplerBinding: GR,
          dimension: yR
        }), fR.push(`@group(2) @binding(${JR}) var ${WR.name}: ${WR.type};`), fR.push(`@group(2) @binding(${GR}) var ${RR}: sampler;`)
      }
      for (const WR of [...GR.samplers, ...yR.samplers])
        if (!KR.has(WR.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${WR} has no texture`);
      const wR = [Py, Vt, qR.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${RR.structName};`, ...fR].join("\n"),
        rR = GR.attributes,
        eR = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...GR.attributes.map(((RR, JR) => `\t@location(${JR}) ${RR.name}: ${RR.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        aR = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...uR, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        LR = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...yR.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...uR, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", LJ, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${aJ}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        nR = RR => {
          for (const JR of qR.stridedArrays) RR = RR.replace(new RegExp(`\\b${JR}\\s*\\[(.*?)\\]`, "g"), `${JR}[$1].el`);
          return RR
        };
      return {
        vertex: `${wR}\n${eR}\n${aR}\n${nR(GR.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${wR}\n${LR}\n${xt((UR=nR(yR.body),UR.includes("fragmentInputs.position")?UR.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):UR))}`,
        attributes: rR,
        material: qR,
        textures: iR
      };
      var UR
    }
    const ot = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      ct = RR => ({
        name: RR,
        type: "vec3"
      }),
      Pt = RR => ({
        name: RR,
        type: "float"
      }),
      It = Jt("EarthSkyUniforms", [ct("viewFrom"), Pt("exposureScale"), ct("zenithOffset"), Pt("fogOn"), ct("up"), Pt("ditherOn"), ct("sun"), Pt("turbidity"), ct("tint"), Pt("rayleigh"), ct("sunDir"), Pt("mieStrength"), ct("inScatterR"), Pt("mieFocus"), ct("inScatterM"), Pt("sunE"), ct("extinctionBeta"), Pt("sunsetMix"), Pt("mieScale"), Pt("mieBase"), Pt("mieSlope"), Pt("sunDiscE"), Pt("exposure")]),
      mt = `${Py}\n${Vt}\n${It.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      zt = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${ot.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      St = `\n${LJ}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(IJ).map((RR=>{let[JR,GR]=RR;return`const TONE_${JR}: f32 = ${GR};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${mJ};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${aJ}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var jt = GR(38195);
    const dt = new jt.Fe,
      Et = new jt.Fe,
      Yt = new jt.Quaternion,
      kt = new Float64Array(3),
      Qt = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Ft = new Float64Array(16);

    function Tt(RR, JR, GR) {
      const yR = GR.worldMatrix;
      var tR;
      RR.updateFloat3("viewFrom", yR[12], yR[13], yR[14]), RR.updateFloatsFrom("zenithOffset", JR.cameraOffset, 0, 3), RR.updateFloatsFrom("up", JR.up, 0, 3), JR.luminance > 0 && (RR.updateFloat("exposure", JR.luminance), RR.updateFloat("exposureScale", (tR = JR.luminance, Math.log2(2 / Math.pow(tR, 4))))), RR.updateFloat("turbidity", JR.turbidity), RR.updateFloat("rayleigh", JR.rayleigh), RR.updateFloat("mieStrength", JR.mieCoefficient), RR.updateFloat("mieFocus", JR.mieDirectionalG), RR.updateFloatsFrom("tint", JR.tint, 0, 3), RR.updateFloat("fogOn", JR.fog && GR.fogEnabled && 0 !== GR.fogMode ? 1 : 0), RR.updateFloat("ditherOn", JR.dithering ? 1 : 0);
      const uR = JR.sunPosition;
      if (dt.set(uR[0], uR[1], uR[2]), !JR.useSunPosition) {
        const RR = Math.PI * (JR.inclination - .5),
          GR = 2 * Math.PI * (JR.azimuth - .5);
        dt.set(JR.distance * Math.cos(GR) * Math.cos(RR), JR.distance * Math.sin(-RR), JR.distance * Math.sin(GR) * Math.cos(RR)), jt.Quaternion.FromUnitVectorsToRef(jt.Fe.UpReadOnly, Et.set(JR.up[0], JR.up[1], JR.up[2]), Yt), dt.rotateByQuaternionToRef(Yt, dt)
      }
      RR.updateVector3("sun", dt), kt[0] = dt.x, kt[1] = dt.y, kt[2] = dt.z;
      const ZR = PJ(JR, kt, Qt);
      RR.updateFloatsFrom("sunDir", ZR.sunDir, 0, 3), RR.updateFloat("sunE", ZR.sunE), RR.updateFloatsFrom("inScatterR", ZR.inScatterR, 0, 3), RR.updateFloatsFrom("inScatterM", ZR.inScatterM, 0, 3), RR.updateFloatsFrom("extinctionBeta", ZR.extinctionBeta, 0, 3), RR.updateFloat("sunsetMix", ZR.sunsetMix), RR.updateFloat("sunDiscE", ZR.sunDiscE), RR.updateFloat("mieScale", ZR.mieScale), RR.updateFloat("mieBase", ZR.mieBase), RR.updateFloat("mieSlope", ZR.mieSlope)
    }

    function st(RR, JR) {
      const GR = Ft;
      GR[0] = JR.far, GR[5] = JR.far, GR[10] = JR.far, GR[15] = 1;
      const yR = RR.infiniteDistance;
      for (let tR = 0; tR < 3; tR++) GR[12 + tR] = RR.position[tR] + (yR ? JR.worldMatrix[12 + tR] : 0);
      return Ft
    }
    class ht {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(RR, JR, GR, yR, tR) {
        GR !== this.pipeline && (RR.setPipeline(GR), this.pipeline = GR), RR.setBindGroup(1, yR, [tR]);
        const uR = JR.material.bindGroup;
        uR !== this.materialGroup && (RR.setBindGroup(2, uR), this.materialGroup = uR);
        const ZR = JR.program.packGroup;
        ZR && ZR !== this.packGroup && (RR.setBindGroup(FJ.e, ZR), this.packGroup = ZR);
        const {
          vertexBuffers: qR,
          vertexOffsets: iR
        } = this;
        for (let fR = 0; fR < JR.vertexBuffers.length; fR++) qR[fR] === JR.vertexBuffers[fR] && iR[fR] === JR.vertexOffsets[fR] || (RR.setVertexBuffer(fR, JR.vertexBuffers[fR], JR.vertexOffsets[fR]), qR[fR] = JR.vertexBuffers[fR], iR[fR] = JR.vertexOffsets[fR]);
        JR.indexBuffer && JR.indexBuffer !== this.indexBuffer && (RR.setIndexBuffer(JR.indexBuffer, JR.indexFormat), this.indexBuffer = JR.indexBuffer)
      }
    }
    class Ru {
      constructor(RR, JR, GR, yR) {
        this.modelMeshes = RR, this.DRR = JR, this.maker = GR, this.warnOnce = yR, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (RR, JR) => {
          (JR < -1 || JR > 1) && this.warnOnce(`group:${JR}`, `rendering group ${JR} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(RR) {
        this.collectGroup(RR, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(RR, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(RR, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.DRR.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(Ju), this.transparentDraws.sort(Gu)
      }
      collectGroup(RR, JR, GR, yR, tR) {
        const uR = this.modelMeshes.group(JR),
          ZR = this.DRR.group(JR),
          qR = 0 === JR ? null === ZR || void 0 === ZR ? void 0 : ZR.opaque : void 0;
        this.collectList(RR, null === uR || void 0 === uR ? void 0 : uR.opaque, qR || null === ZR || void 0 === ZR ? void 0 : ZR.opaque, JR, !1, GR, tR), qR && (this.DRR.drawn += this.maker.bundleDraws(RR, qR, JR)), this.collectList(RR, null === uR || void 0 === uR ? void 0 : uR.alphaTest, void 0, JR, !1, GR, tR), this.collectList(RR, null === uR || void 0 === uR ? void 0 : uR.transparent, null === ZR || void 0 === ZR ? void 0 : ZR.transparent, JR, !0, yR, tR)
      }
      collectList(RR, JR, GR, yR, tR, uR, ZR) {
        var qR;
        const iR = uR.length;
        JR && this.maker.pushDraws(RR, JR.units, JR.units.length, yR, tR, uR, JR.rows), GR && (this.DRR.drawn += this.maker.pushDraws(RR, GR, GR.length, yR, tR, uR));
        const fR = tR ? null === (qR = this.modelMeshes.group(yR)) || void 0 === qR ? void 0 : qR.text : void 0;
        fR && this.maker.pushDraws(RR, fR.units, fR.units.length, yR, !0, uR, fR.rows), ZR && yu(uR, iR)
      }
    }

    function Ju(RR, JR) {
      return RR.program.id - JR.program.id || RR.material.owner.uniqueId - JR.material.owner.uniqueId
    }

    function Gu(RR, JR) {
      return RR.material.owner.uniqueId - JR.material.owner.uniqueId
    }

    function yu(RR, JR) {
      for (let GR = JR + 1; GR < RR.length; GR++) {
        const yR = RR[GR];
        let tR = GR - 1;
        for (; tR >= JR && Gu(RR[tR], yR) > 0; tR--) RR[tR + 1] = RR[tR];
        RR[tR + 1] = yR
      }
    }
    const tu = {};

    function uu(RR) {
      return RR.hasThinInstances ? "thin" : RR.PuR || RR._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Zu(RR, JR, GR) {
      return RR ? (GR._needUVs = !0, RR.optimizeUVAllocation && (0, gR.H)(RR.matrix) ? (GR[`${JR}DIRECTUV`] = RR.uvSet + 1, GR[`MAINUV${RR.uvSet+1}`] = !0) : GR[`${JR}DIRECTUV`] = 0, !0) : (GR[`${JR}DIRECTUV`] = 0, !1)
    }

    function qu(RR) {
      const JR = new Map;
      for (const GR in RR) {
        if (95 === GR.charCodeAt(0)) continue;
        const yR = RR[GR],
          tR = typeof yR;
        "number" === tR || "string" === tR ? JR.set(GR, String(yR)) : yR && "function" !== tR && JR.set(GR, !0)
      }
      return JR
    }

    function iu(RR) {
      const JR = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: GR
        }
        of RR.features)
        for (const RR in GR) JR[RR] = GR[RR];
      return JR
    }

    function fu(RR) {
      const JR = RR.parts.geometry;
      return null !== JR && void 0 !== JR && JR.live ? JR : null
    }

    function Vu(RR) {
      var JR;
      return null !== (JR = fu(RR)) && void 0 !== JR ? JR : tu
    }
    class Ku {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = RR, this.warnOnce = JR, this.programWithModel = GR, this.packFailed = yR, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(RR, JR, GR, yR, tR) {
        const uR = JR.owner;
        let ZR = this.drawStates.get(JR);
        if (!ZR) {
          const RR = JR.parts.materials[JR.range];
          if (!RR) return this.warnOnce("model", `${GR.name} on ${uR.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          ZR = {
            defines: iu(RR),
            model: RR,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: tR,
            groupId: yR,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(JR, ZR)
        }
        if (this.programCurrent(ZR, JR, tR, yR)) return ZR.program;
        const {
          model: qR
        } = ZR, iR = Vu(JR), fR = this.instanceLayout(uR, tR), VR = this.definesBits(uR);
        if (!this.prepareModelDefines(RR, uR, qR, ZR.defines, yR, tR)) return null;
        ZR.instancing = tR, ZR.groupId = yR, ZR.modelVersion = qR.version, ZR.geometry = iR, ZR.instanceLayout = fR, ZR.definesBits = VR;
        const KR = function(RR) {
          let JR = "";
          for (const [GR, yR] of RR) JR += !0 === yR ? `${GR};` : `${GR}=${yR};`;
          return JR
        }(qu(ZR.defines));
        return KR === ZR.definesKey && ZR.packVariant === this.modelPackVariant && ZR.program && !this.packFailed(ZR.program) || (ZR.definesKey = KR, ZR.packVariant = this.modelPackVariant, ZR.program = this.programWithModel(qR, ZR.defines, KR)), ZR.program
      }
      programCurrent(RR, JR, GR, yR) {
        return null !== RR.program && !this.packFailed(RR.program) && RR.instancing === GR && RR.groupId === yR && this.definesHold(RR, JR, GR)
      }
      definesHold(RR, JR, GR) {
        return RR.modelVersion === RR.model.version && RR.geometry === Vu(JR) && RR.instanceLayout === this.instanceLayout(JR.owner, GR) && RR.definesBits === this.definesBits(JR.owner) && RR.packVariant === this.modelPackVariant
      }
      modelPackKind(RR) {
        var JR;
        return 0 === this.modelPackVariant ? null : null !== (JR = (0, lR.E)(RR, BR.h.name)) && void 0 !== JR && JR.active ? "placed" : RR.item ? "item" : RR.lifeform ? "lifeform" : RR.box ? "box" : null
      }
      instanceLayout(RR, JR) {
        var GR, yR, tR;
        return "thin" === JR ? null !== (tR = this.resources.LRR.get(RR)) && void 0 !== tR ? tR : null : "instanced" === JR && null !== (GR = null === (yR = RR._userInstancedBuffersStorage) || void 0 === yR ? void 0 : yR.interleavedKinds) && void 0 !== GR ? GR : null
      }
      definesBits(RR) {
        const JR = this.view;
        return (RR.visibility < 1 ? 1 : 0) | (RR.hasVertexAlpha ? 2 : 0) | (RR.applyFog ? 4 : 0) | (RR.useVertexColors ? 8 : 0) | (RR.nonUniformScaling ? 16 : 0) | (JR.fogEnabled && 0 !== JR.fogMode ? 32 : 0) | (JR.lightsEnabled ? 64 : 0) | JR.lightCount << 7
      }
      prepareLightDefines(RR, JR, GR) {
        let yR = 0;
        if (this.view.lightsEnabled && !JR) {
          const JR = Math.min(GR, 4);
          for (; yR < this.view.lightCount && (RR[`LIGHT${yR}`] = !0, RR[`LITE_LIGHT${yR}_SLOT`] = yR, yR++, RR._needNormals = !0, yR !== JR););
        }
        for (let tR = yR; tR < 4; tR++) RR[`LIGHT${tR}`] = !1, RR[`LITE_LIGHT${tR}_SLOT`] = void 0
      }
      prepareModelDefines(RR, JR, GR, yR, tR, uR) {
        const {
          features: ZR
        } = GR;
        yR._needNormals = !1, yR._needUVs = !1;
        const qR = this.view;
        this.prepareLightDefines(yR, GR.disableLighting, GR.maxSimultaneousLights), yR.MAINUV1 = !1, yR.MAINUV2 = !1;
        const iR = GR.diffuseTexture;
        iR ? (yR._needUVs = !0, yR.DIFFUSE = !0, iR.optimizeUVAllocation && (0, gR.H)(iR.matrix) ? (yR.DIFFUSEDIRECTUV = iR.uvSet + 1, yR[`MAINUV${iR.uvSet+1}`] = !0) : yR.DIFFUSEDIRECTUV = 0, iR.uvSet > 1 && this.warnOnce(`uvset:${GR.name}`, `${GR.name} samples UV set ${iR.uvSet+1}, which is not supported`)) : (yR.DIFFUSE = !1, yR.DIFFUSEDIRECTUV = 0);
        const fR = GR.opacityTexture,
          VR = GR.emissiveTexture;
        yR.OPACITY = Zu(fR, "OPACITY", yR), yR.OPACITYRGB = null !== fR && fR.getAlphaFromRGB, yR.EMISSIVE = Zu(VR, "EMISSIVE", yR), (fR && fR.uvSet > 1 || VR && VR.uvSet > 1) && this.warnOnce(`uvset:${GR.name}`, `${GR.name} samples a UV set past 2, which is not supported`);
        const KR = GR.reflectionTexture,
          wR = null !== KR;
        if (wR) {
          if (!this.resources.boundTexture(KR)) return !1;
          yR._needNormals = !0
        }
        yR.REFLECTION = wR, yR.REFLECTIONMAP_3D = wR, yR.REFLECTIONMAP_SKYBOX = wR, yR.REFLECTIONMAP_OPPOSITEZ = wR && (RR.useRightHandedSystem ? !KR.invertZ : KR.invertZ), yR.ROUGHNESS = wR && GR.roughness > 0, yR.REFLECTIONOVERALPHA = wR && GR.useReflectionOverAlpha, yR.LITE_REFLECTION_LUMINANCE = wR && "cube" === KR.source.kind && KR.source.luminance, (JR.skeleton || JR.morphTargetManager) && this.warnOnce(`skin:${JR.name}`, `${JR.name} has bones or morph targets, which are not supported`), yR.FOG = GR.fogEnabled && JR.applyFog && qR.fogEnabled && 0 !== qR.fogMode, yR.NONUNIFORMSCALING = JR.nonUniformScaling;
        const {
          visibility: rR,
          hasVertexAlpha: eR
        } = JR;
        yR.ALPHATEST = (0, lR.W)(GR, rR, eR), yR.ALPHAFROMDIFFUSE = (0, lR.fb)(GR), yR.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== GR.transparencyMode, yR.ALPHABLEND = null === GR.transparencyMode || (0, lR.V)(GR, rR, eR), yR.PREMULTIPLYALPHA = 7 === GR.alphaMode || 8 === GR.alphaMode, yR.EMISSIVEASILLUMINATION = GR.useEmissiveAsIllumination, yR.LINKEMISSIVEWITHDIFFUSE = GR.linkEmissiveWithDiffuse, yR.TWOSIDEDLIGHTING = !GR.backFaceCulling && GR.twoSidedLighting, yR.INSTANCES = "none" !== uR, yR.THIN_INSTANCES = "thin" === uR, yR.LITE_FRONT_LAYER = tR >= 1;
        for (const {
            feature: MR,
            state: BR,
            active: lR
          }
          of ZR) {
          var aR, LR;
          if (lR) null === (aR = (LR = (0, NJ.i)(MR)).prepareDefinesBeforeAttributes) || void 0 === aR || aR.call(LR, BR, yR, RR, JR)
        }
        this.modelPackKind(GR) && (yR._needNormals = !0), yR.NORMAL = yR._needNormals && JR.isVerticesDataPresent("normal"), yR.UV1 = yR._needUVs && JR.isVerticesDataPresent("uv"), yR.UV2 = yR._needUVs && JR.isVerticesDataPresent("uv2");
        const nR = JR.useVertexColors && JR.isVerticesDataPresent("color");
        yR.VERTEXCOLOR = nR, yR.VERTEXALPHA = JR.hasVertexAlpha && nR, yR.INSTANCESCOLOR = "none" !== uR && JR.isVerticesDataPresent("instanceColor");
        for (const {
            feature: MR,
            state: BR,
            active: lR
          }
          of ZR) {
          var UR, WR;
          if (lR) null === (UR = (WR = (0, NJ.i)(MR)).prepareDefines) || void 0 === UR || UR.call(WR, BR, yR, RR, JR, GR)
        }
        const AR = RR.ke();
        for (const {
            feature: MR,
            state: BR,
            active: lR
          }
          of ZR) {
          var CR, XR;
          if (lR && !1 === (null === (CR = (XR = (0, NJ.i)(MR)).isReadyForSubMesh) || void 0 === CR ? void 0 : CR.call(XR, BR, yR, RR, AR))) return !1
        }
        return !0
      }
    }

    function wu(RR, JR, GR) {
      return RR.codeVersion !== JR.version && function(RR, JR) {
        const GR = [],
          yR = [];
        for (const {
            feature: wR,
            state: rR,
            active: eR
          }
          of JR.features) {
          var tR, uR, ZR, qR;
          if (eR) ru(null === (tR = (uR = (0, NJ.i)(wR)).getCustomCode) || void 0 === tR ? void 0 : tR.call(uR, rR, "vertex", XR.c.WGSL), GR), ru(null === (ZR = (qR = (0, NJ.i)(wR)).getCustomCode) || void 0 === ZR ? void 0 : ZR.call(qR, rR, "fragment", XR.c.WGSL), yR)
        }
        const iR = [];
        for (const {
            feature: wR,
            state: rR
          }
          of JR.features) {
          var fR, VR;
          const RR = null === (fR = (VR = (0, NJ.i)(wR)).getUniforms) || void 0 === fR ? void 0 : fR.call(VR, rR, XR.c.WGSL);
          for (const JR of null !== (KR = null === RR || void 0 === RR ? void 0 : RR.ubo) && void 0 !== KR ? KR : []) {
            var KR;
            JR.size && JR.type && iR.push({
              name: JR.name,
              type: JR.type,
              arraySize: JR.arraySize
            })
          }
        }
        RR.vertexCode = GR, RR.fragmentCode = yR, RR.pluginUniforms = iR, RR.codeKey = JSON.stringify([GR, yR, iR]), RR.codeVersion = JR.version
      }(RR, JR), `${GR}#${RR.codeKey}`
    }

    function ru(RR, JR) {
      if (RR)
        for (const GR in RR) RR[GR] && JR.push([GR, RR[GR]])
    }
    const eu = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class au {
      constructor(RR) {
        this.warnOnce = RR, this.states = new Map
      }
      renderState(RR, JR, GR, yR) {
        var tR;
        let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          ZR = null !== (tR = RR.sideOrientation) && void 0 !== tR ? tR : JR.sideOrientation;
        JR._getWorldMatrixDeterminant() < 0 && (ZR = 0 === ZR ? 1 : 0);
        const qR = "triangle-list" === uR,
          iR = GR ? RR.alphaMode : 0,
          fR = (!GR || (0 === iR || RR.forceDepthWrite)) && !RR.disableDepthWrite,
          VR = qR && RR.backFaceCulling ? RR.cullBackFaces ? "back" : "front" : "none",
          KR = qR && 0 !== ZR ? "ccw" : "cw",
          wR = RR.depthFunction,
          rR = qR ? RR.zOffset : 0,
          eR = qR ? RR.zOffsetUnits : 0,
          aR = !RR.disableColorWrite;
        return yR && yR.alphaMode === iR && yR.depthWrite === fR && yR.depthFunction === wR && yR.cullMode === VR && yR.frontFace === KR && yR.zOffset === rR && yR.zOffsetUnits === eR && yR.colourWrite === aR && yR.topology === uR ? yR : this.stateFor(iR, fR, wR, VR, KR, rR, eR, aR, uR)
      }
      stateFor(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = `${RR}|${JR}|${GR}|${yR}|${tR}|${uR}|${ZR}|${qR}|${iR}`;
        let VR = this.states.get(fR);
        if (!VR) {
          var KR;
          const wR = RR ? uJ(RR) : null;
          RR && !wR && this.warnOnce(`alpha:${RR}`, `alpha mode ${RR} is not supported`), VR = {
            key: fR,
            alphaMode: RR,
            depthFunction: GR,
            zOffset: uR,
            zOffsetUnits: ZR,
            topology: iR,
            blend: wR,
            depthWrite: JR,
            depthCompare: GR && null !== (KR = eu.get(GR)) && void 0 !== KR ? KR : null,
            cullMode: yR,
            frontFace: tR,
            depthBias: -ZR,
            depthBiasSlopeScale: -uR,
            colourWrite: qR
          }, this.states.set(fR, VR)
        }
        return VR
      }
    }
    var Lu = GR(38482);

    function nu(RR) {
      if (!RR.frozen) return -1;
      let JR = RR.version;
      for (const {
          feature: GR,
          state: yR,
          active: tR
        }
        of RR.features) {
        if (!tR || !GR.bind) continue;
        const RR = (0, NJ.i)(GR).uniformsVersion;
        if (!RR) return -1;
        JR += RR(yR)
      }
      return JR
    }
    class Uu {
      constructor(RR, JR, GR) {
        this.slots = RR, this.data = JR, this.textures = GR, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(RR, JR) {
        this.write4(RR, JR, 0, 0, 0, 1)
      }
      updateFloat2(RR, JR, GR) {
        this.write4(RR, JR, GR, 0, 0, 2)
      }
      updateFloat3(RR, JR, GR, yR) {
        this.write4(RR, JR, GR, yR, 0, 3)
      }
      updateFloat4(RR, JR, GR, yR, tR) {
        this.write4(RR, JR, GR, yR, tR, 4)
      }
      updateVector3(RR, JR) {
        this.write4(RR, JR.x, JR.y, JR.z, 0, 3)
      }
      updateVector4(RR, JR) {
        this.write4(RR, JR.x, JR.y, JR.z, JR.w, 4)
      }
      updateColor3(RR, JR) {
        this.write4(RR, JR.r, JR.g, JR.b, 0, 3)
      }
      updateColor4(RR, JR, GR) {
        this.write4(RR, JR.r, JR.g, JR.b, GR, 4)
      }
      updateFloatsFrom(RR, JR, GR, yR) {
        const tR = this.slots.get(RR);
        if (!tR) return;
        const uR = this.data,
          ZR = tR.offset;
        for (let qR = 0; qR < yR; qR++) uR[ZR + qR] = JR[GR + qR]
      }
      updateFloat3TimesFloats(RR, JR, GR, yR) {
        const tR = this.slots.get(RR);
        if (!tR) return;
        const uR = this.data,
          ZR = tR.offset;
        uR[ZR] = JR[GR] * yR[0], uR[ZR + 1] = JR[GR + 1] * yR[1], uR[ZR + 2] = JR[GR + 2] * yR[2]
      }
      FRR(RR, JR) {
        const GR = this.slots.get(RR);
        GR && this.data.set(JR.m, GR.offset)
      }
      updateMatrixFloats(RR, JR) {
        const GR = this.slots.get(RR);
        GR && this.data.set(JR, GR.offset)
      }
      updateFloatArray(RR, JR) {
        const GR = this.slots.get(RR);
        if (!GR) return;
        if (!GR.arraySize || GR.stride === GR.floats) return void this.data.set(JR, GR.offset);
        const yR = Math.min(JR.length, GR.floats * GR.arraySize);
        for (let tR = 0; tR < yR; tR++) this.data[GR.offset + Math.floor(tR / GR.floats) * GR.stride + tR % GR.floats] = JR[tR]
      }
      updateArray(RR, JR) {
        this.updateFloatArray(RR, JR)
      }
      setTexture(RR, JR) {
        this.textures.set(RR, JR), this.expected.delete(RR)
      }
      expectTexture(RR) {
        this.textures.set(RR, null), this.expected.add(RR)
      }
      write4(RR, JR, GR, yR, tR, uR) {
        const ZR = this.slots.get(RR);
        if (!ZR) return;
        const qR = this.data,
          iR = ZR.offset;
        qR[iR] = JR, uR > 1 && (qR[iR + 1] = GR), uR > 2 && (qR[iR + 2] = yR), uR > 3 && (qR[iR + 3] = tR)
      }
    }

    function Wu(RR, JR) {
      const GR = it,
        yR = Lu.l,
        tR = RR.lights,
        uR = Math.min(RR.lightCount, 8);
      for (let ZR = 0; ZR < uR; ZR++) {
        const RR = GR.lights + ZR * GR.lightStride,
          uR = ZR * Lu.e;
        JR[RR] = tR[uR + yR.vector], JR[RR + 1] = tR[uR + yR.vector + 1], JR[RR + 2] = tR[uR + yR.vector + 2], JR[RR + 3] = tR[uR + yR.kind] === Lu.h.directional ? 1 : 0, JR[RR + 4] = tR[uR + yR.diffuse], JR[RR + 5] = tR[uR + yR.diffuse + 1], JR[RR + 6] = tR[uR + yR.diffuse + 2], JR[RR + 7] = tR[uR + yR.range], JR[RR + 8] = tR[uR + yR.specular], JR[RR + 9] = tR[uR + yR.specular + 1], JR[RR + 10] = tR[uR + yR.specular + 2], JR[RR + 11] = tR[uR + yR.range]
      }
      JR[GR.fogInfos] = RR.fogMode, JR[GR.fogInfos + 1] = RR.fogStart, JR[GR.fogInfos + 2] = RR.fogEnd, JR[GR.fogInfos + 3] = RR.fogDensity, JR[GR.fogColour] = RR.fogColour[0], JR[GR.fogColour + 1] = RR.fogColour[1], JR[GR.fogColour + 2] = RR.fogColour[2], JR[GR.outputHeight] = RR.renderHeight, JR[GR.animTick] = RR.animTick, JR[GR.timeMs] = RR.timeMs
    }
    class Au {
      constructor(RR) {
        this.instancesOf = RR
      }
      refreshModelUniforms(RR, JR, GR, yR) {
        const tR = nu(GR);
        if (tR >= 0 && tR === JR.heldVersion && JR.textures.get("diffuseSampler") === GR.diffuseTexture && JR.textures.get("reflectionCubeSampler") === GR.reflectionTexture && JR.textures.get("opacitySampler") === GR.opacityTexture && JR.textures.get("emissiveSampler") === GR.emissiveTexture) return !0;
        if (tR < 0)
          for (const uR of this.instancesOf(GR)) uR.heldVersion = -1;
        return this.writeModelUniforms(RR, JR, GR, yR), JR.heldVersion = tR, !1
      }
      writeModelUniforms(RR, JR, GR, yR) {
        const {
          ubo: tR
        } = JR, uR = GR.diffuseTexture, ZR = GR.diffuseColor;
        tR.updateFloat4("vDiffuseColor", ZR[0], ZR[1], ZR[2], GR.alpha), uR && (tR.updateFloat2("vDiffuseInfos", uR.uvSet, uR.level), tR.updateMatrixFloats("diffuseMatrix", uR.matrix)), tR.updateFloat("alphaCutOff", GR.alphaCutOff), tR.updateFloatsFrom("vEmissiveColor", GR.emissiveColor, 0, 3), tR.updateFloat3TimesFloats("vAmbientColor", yR.ambientColour, 0, GR.ambientColor);
        const qR = GR.specularColor;
        tR.updateFloat4("vSpecularColor", qR[0], qR[1], qR[2], GR.specularPower), tR.setTexture("diffuseSampler", uR);
        const iR = GR.opacityTexture;
        iR && (tR.updateFloat2("vOpacityInfos", iR.uvSet, iR.level), tR.updateMatrixFloats("opacityMatrix", iR.matrix)), tR.setTexture("opacitySampler", iR);
        const fR = GR.emissiveTexture;
        fR && (tR.updateFloat2("vEmissiveInfos", fR.uvSet, fR.level), tR.updateMatrixFloats("emissiveMatrix", fR.matrix)), tR.setTexture("emissiveSampler", fR);
        const VR = GR.reflectionTexture;
        VR && tR.updateMatrixFloats("reflectionMatrix", VR.matrix), tR.updateFloat2("vReflectionInfos", VR ? VR.level * RR.iblIntensity : 0, GR.roughness), tR.setTexture("reflectionCubeSampler", VR);
        const KR = RR.ke();
        for (const {
            feature: eR,
            state: aR,
            active: LR
          }
          of GR.features) {
          var wR, rR;
          if (LR) null === (wR = (rR = (0, NJ.i)(eR)).bind) || void 0 === wR || wR.call(rR, aR, tR, RR, KR)
        }
      }
    }

    function Cu(RR) {
      const JR = RR.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(JR) ? "u32" : /i32|^vec\di$/.test(JR) ? "i32" : "f32"
    }

    function Xu(RR, JR) {
      const GR = RR.getSize(),
        yR = Cu(JR),
        tR = RR => 4 === GR ? `${RR}x4` : 2 === GR ? `${RR}x2` : null;
      if ("f32" === yR) {
        if (5126 === RR.type) return 1 === GR ? "float32" : GR >= 2 && GR <= 4 ? `float32x${GR}` : null;
        if (!RR.normalized) return null;
        switch (RR.type) {
          case 5121:
            return tR("unorm8");
          case 5120:
            return tR("snorm8");
          case 5123:
            return tR("unorm16");
          case 5122:
            return tR("snorm16")
        }
        return null
      }
      const uR = "u32" === yR ? "uint" : "sint";
      switch (RR.type) {
        case 5125:
        case 5124:
          return 1 === GR ? `${uR}32` : GR <= 4 ? `${uR}32x${GR}` : null;
        case 5121:
        case 5120:
          return tR(`${uR}8`);
        case 5123:
        case 5122:
          return tR(`${uR}16`)
      }
      return null
    }

    function Mu(RR) {
      var JR;
      const GR = /(8|16|32)(?:x(\d))?$/.exec(RR);
      return GR ? Number(GR[1]) / 8 * Number(null !== (JR = GR[2]) && void 0 !== JR ? JR : 1) : 4
    }
    class Bu {
      constructor(RR, JR, GR) {
        this.resources = RR, this.limits = JR, this.warnOnce = GR, this.layouts = new Map
      }
      resolveInputs(RR, JR, GR, yR) {
        const tR = [],
          uR = GR.program.attributes,
          ZR = [];
        for (let VR = 0; VR < uR.length; VR++) {
          const GR = uR[VR],
            qR = GR.optional ? null : this.resources.vertexInput(RR, GR.name, yR);
          if (!qR) {
            const RR = Cu(GR.type),
              JR = "u32" === RR ? "uint32x4" : "i32" === RR ? "sint32x4" : "float32x4";
            ZR.push(null);
            const yR = tR.find((RR => null === RR.data));
            yR ? yR.attributes.push({
              shaderLocation: VR,
              offset: 0,
              format: JR
            }) : tR.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: VR,
                offset: 0,
                format: JR
              }]
            });
            continue
          }
          const iR = qR.getBuffer();
          ZR.push(qR);
          const fR = Xu(qR, GR.type);
          if (!fR) return this.warnOnce(`format:${JR}:${GR.name}`, `${JR}'s ${GR.name} (type ${qR.type}, size ${qR.getSize()}) has no WebGPU vertex format`), null;
          const KR = qR.getIsInstanced() ? "instance" : "vertex",
            wR = qR.byteStride,
            rR = Mu(fR),
            eR = tR.find((RR => RR.data === iR && RR.stride === wR && RR.step === KR && qR.byteOffset >= RR.base && qR.byteOffset - RR.base + rR <= wR));
          eR ? eR.attributes.push({
            shaderLocation: VR,
            offset: qR.byteOffset - eR.base,
            format: fR
          }) : tR.push({
            data: iR,
            base: qR.byteOffset,
            stride: wR,
            step: KR,
            attributes: [{
              shaderLocation: VR,
              offset: 0,
              format: fR
            }]
          })
        }
        if (tR.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${JR}`, `${JR} needs ${tR.length} vertex buffers`), null;
        let qR = "";
        for (const VR of tR) {
          qR += `${VR.stride}${"instance"===VR.step?"i":"v"}`;
          for (const RR of VR.attributes) qR += `,${RR.shaderLocation}:${RR.offset}:${RR.format}`;
          qR += ";"
        }
        let iR = this.layouts.get(qR);
        iR || (iR = {
          key: qR,
          buffers: tR.map((RR => ({
            arrayStride: RR.stride,
            stepMode: RR.step,
            attributes: RR.attributes
          }))),
          instanceEnds: tR.map((RR => {
            let JR = -1;
            if ("instance" === RR.step)
              for (const GR of RR.attributes) JR = Math.max(JR, GR.offset + Mu(GR.format));
            return JR
          }))
        }, this.layouts.set(qR, iR));
        const fR = tR.map((RR => RR.base));
        return {
          program: GR,
          sources: ZR,
          layout: iR,
          slotData: tR.map((RR => RR.data)),
          cRR: fR,
          buffers: [],
          offsets: fR,
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

    function lu(RR, JR, GR, yR) {
      const tR = JR.program.program.attributes;
      for (let uR = 0; uR < tR.length; uR++) {
        if ((tR[uR].optional ? null : GR.vertexInput(RR, tR[uR].name, yR)) !== JR.sources[uR]) return !1
      }
      return !0
    }
    const pu = 64;
    class gu {
      constructor(RR, JR, GR, yR) {
        this.device = RR, this.layout = JR, this.frameBuffer = GR, this.label = yR, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(RR) {
        if (RR * pu <= this.data.length) return !1;
        let JR = 2 * this.data.length;
        for (; RR * pu > JR;) JR *= 2;
        const GR = new Float32Array(JR);
        return GR.set(this.data), this.data = GR, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tR = this.data,
          uR = RR * pu;
        let ZR = tR[uR + 16] !== GR;
        for (let qR = 0; qR < 16 && !ZR; qR++) ZR = tR[uR + qR] !== JR[yR + qR];
        if (ZR) {
          for (let RR = 0; RR < 16; RR++) tR[uR + RR] = JR[yR + RR];
          tR[uR + 16] = GR
        }
        return ZR
      }
      upload(RR, JR) {
        this.device.queue.writeBuffer(this.buffer, RR * ft, this.data, RR * pu, (JR - RR) * pu)
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

    function bu(RR) {
      return RR.gpu[gR.e.lite] ??= RR.materials.map(((JR, GR) => ({
        parts: RR,
        range: GR,
        owner: RR.owner
      })))
    }

    function vu(RR) {
      var JR, GR, yR;
      return null !== (JR = null !== (GR = null === (yR = RR.parts.materials[RR.range]) || void 0 === yR ? void 0 : yR.mirror) && void 0 !== GR ? GR : RR.owner.material) && void 0 !== JR ? JR : null
    }
    const Ou = ["opaque", "alphaTest", "transparent", "text"];

    function xu(RR) {
      for (const JR of Ou) RR[JR].units.length = 0, RR[JR].rows.length = 0
    }
    class Nu {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, xJ.d)("Lite: ")
      }
      attach(RR, JR) {
        this.model = RR, this.mirror = JR
      }
      get worlds() {
        return this.model.nodes.NK
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(RR) {
        return this.groups.get(RR)
      }
      forEachGroup(RR) {
        this.groups.forEach(RR)
      }
      forEachSelected(RR) {
        for (const [JR, GR] of this.groups)
          for (const yR of Ou)
            for (const tR of GR[yR].units) RR(tR.owner, "text" === yR ? "transparent" : yR, JR)
      }
      select(RR, JR) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(xu);
        const {
          model: GR,
          mirror: yR
        } = this;
        if (!GR || !yR || !RR) return;
        this.rows.length < GR.nodes.hK && (this.rows = new Int32Array(GR.nodes.hK));
        const tR = this.rows,
          uR = GR.meshes;
        for (let qR = 0; qR < uR.looseCount; qR++) {
          const RR = uR.loose[qR],
            GR = yR.nodes[RR];
          GR && !GR.isBlocked && GR.isEnabled() && !GR.MK.hasAZeroComponent && uR.selects(RR, JR.frustum) && (this.activate(GR, RR), this.selectedCount++)
        }
        const ZR = uR.selectTextPlanes(JR.frustum, tR);
        for (let qR = 0; qR < ZR; qR++) {
          const JR = tR[qR],
            uR = yR.nodes[JR],
            ZR = GR.meshes.parts[JR];
          if (!uR.isVisible || !(uR.visibility > 0) || 0 === (uR.layerMask & RR.layerMask) || !ZR) continue;
          const iR = this.groupOf(GR.meshes.layer[JR]).text;
          for (const RR of bu(ZR)) iR.units.push(RR), iR.rows.push(JR);
          this.selectedCount++
        }
      }
      instanceBatch(RR) {
        const JR = this.batchOf(RR);
        return JR.dispatched || (JR.dispatched = JR.renderSelf = !0, JR.row = this.rowOf(RR)), JR
      }
      rowOf(RR) {
        return RR.row
      }
      activate(RR, JR) {
        if (!RR.sH) {
          const GR = RR;
          if (GR.PuR) {
            const RR = this.batchOf(GR);
            RR.dispatched = !0, RR.renderSelf = !0, RR.row = JR
          }
          return void this.dispatch(GR, JR, JR)
        }
        const GR = RR,
          yR = GR.IuR;
        if (yR._getWorldMatrixDeterminant() >= 0 !== GR._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${yR.name}`, `A mirrored InstancedMesh of ${yR.name} is not drawn yet`);
        const tR = this.batchOf(yR);
        tR.instances.push(GR), tR.rows.push(JR), tR.dispatched || (tR.dispatched = !0, this.dispatch(yR, JR, this.rowOf(yR)))
      }
      batchOf(RR) {
        let JR = this.batches.get(RR);
        return JR || (JR = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(RR, JR)), JR.frame !== this.frame && (JR.frame = this.frame, JR.dispatched = !1, JR.renderSelf = !1, JR.instances.length = 0, JR.rows.length = 0), JR
      }
      dispatch(RR, JR, GR) {
        const {
          layer: yR,
          parts: tR
        } = this.model.meshes;
        if (!tR[JR]) return;
        const uR = this.groupOf(yR[JR]),
          ZR = RR;
        for (const qR of bu(tR[JR])) {
          const RR = vu(qR);
          if (!RR) continue;
          const JR = RR.needAlphaBlendingForMesh(ZR) ? uR.transparent : RR.needAlphaTestingForMesh(ZR) ? uR.alphaTest : uR.opaque;
          JR.units.push(qR), JR.rows.push(GR)
        }
      }
      groupOf(RR) {
        let JR = this.groups.get(RR);
        return JR || (JR = {
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
        }, this.groups.set(RR, JR)), JR
      }
    }

    function Du(RR) {
      RR.opaque.length = 0, RR.transparent.length = 0
    }
    class Hu {
      constructor() {
        this.Qq = new Map, this.enabled = [], this.groups = new Map, this.tK = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(RR) {
        if (this.Qq.has(RR)) return;
        const JR = {
          mesh: RR,
          observer: RR.onEffectiveEnabledStateChangedObservable.add((RR => {
            this.JA(JR, RR)
          })),
          index: -1,
          steady: null
        };
        this.Qq.set(RR, JR), this.JA(JR, RR.isEnabled())
      }
      remove(RR) {
        const JR = this.Qq.get(RR);
        JR && (JR.observer.remove(!0), this.JA(JR, !1), this.Qq.delete(RR))
      }
      dropSteady() {
        for (const RR of this.Qq.values()) RR.steady = null
      }
      base(RR) {
        return this.Qq.get(RR)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Qq: this.Qq.size
        }
      }
      forEachSelected(RR) {
        for (const [JR, GR] of this.groups) {
          for (const yR of GR.opaque) RR(yR.owner, "opaque", JR);
          for (const yR of GR.transparent) RR(yR.owner, "transparent", JR)
        }
        for (const JR of this.tK) RR(JR.mesh, "opaque", 0)
      }
      group(RR) {
        return this.groups.get(RR)
      }
      forEachGroup(RR) {
        this.groups.forEach(RR)
      }
      select(RR, JR) {
        if (this.drawn = 0, this.selected = 0, this.tK.length = 0, this.groups.forEach(Du), !RR) return;
        const GR = this.enabled;
        for (let yR = 0; yR < GR.length; yR++) {
          const tR = GR[yR];
          if (tR.steady && JR(tR, RR)) {
            this.selected++, this.tK.push(tR);
            continue
          }
          const uR = tR.mesh;
          if (uR.isBlocked || uR.MK.hasAZeroComponent) continue;
          if (!uR.isVisible || uR.visibility <= 0 || 0 === (uR.layerMask & RR.layerMask)) continue;
          if (uR.PuR) {
            this.warned.has(uR.name) || (this.warned.add(uR.name), console.warn(`Lite: thin instance base ${uR.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: ZR
          } = uR;
          if (!ZR) continue;
          uR.computeWorldMatrix(), this.selected++;
          const qR = this.listsFor(uR.renderingGroupId);
          for (const RR of bu(ZR)) {
            const JR = vu(RR);
            JR && (JR.needAlphaBlendingForMesh(uR) ? qR.transparent.push(RR) : qR.opaque.push(RR))
          }
        }
      }
      JA(RR, JR) {
        if (JR === RR.index >= 0) return;
        RR.steady = null;
        const GR = this.enabled;
        if (JR) RR.index = GR.length, GR.push(RR);
        else {
          const JR = GR.pop();
          JR !== RR && (GR[RR.index] = JR, JR.index = RR.index), RR.index = -1
        }
      }
      listsFor(RR) {
        let JR = this.groups.get(RR);
        return JR || (JR = {
          opaque: [],
          transparent: []
        }, this.groups.set(RR, JR)), JR
      }
    }
    var ou = GR(40923);
    class cu {
      constructor() {
        this.bundle = null, this.stale = !0, this.Qq = new Set
      }
    }
    class Pu {
      constructor(RR, JR, GR) {
        this.device = RR, this.slots = JR, this.host = GR, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new cu, this.nD = new cu, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new ht, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = RR => {
          RR.seen !== this.frame && (RR.draw && (RR.draw = null, this.args[5 * RR.slot + 1] = 0, this.argsDirty = !0, this.nD.stale ||= RR.nD), this.frame - RR.seen > 120 && (this.records.delete(RR.unit), this.freeSlots.push(RR.slot), RR.recorded && (this.bundleOf(RR).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(RR) {
          var JR, GR;
          let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (JR = null === (GR = globalThis.navigator) || void 0 === GR ? void 0 : GR.userAgent) && void 0 !== JR ? JR : "";
          const tR = RR.adapterInfo;
          return "intel" === (null === tR || void 0 === tR ? void 0 : tR.vendor) && "gen-12lp" === tR.architecture && yR.includes("Windows")
        }(RR), (0, ou.B)(this.direct)
      }
      yX() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, ou.B)(this.directThisFrame)
      }
      add(RR, JR, GR, yR) {
        let tR = this.records.get(RR);
        return tR || (tR = this.createRecord(RR), this.records.set(RR, tR)), tR.recorded && mu(tR, JR) || (this.bundleOf(tR).stale = !0), this.place(tR, JR, GR, yR), tR
      }
      bundleOf(RR) {
        return RR.nD ? this.nD : this.main
      }
      addAgain(RR, JR, GR, yR) {
        RR.recorded || (this.bundleOf(RR).stale = !0), this.place(RR, JR, GR, yR)
      }
      place(RR, JR, GR, yR) {
        RR.seen = this.frame, RR.nD && null === RR.draw && (this.nD.stale = !0), RR.draw = JR, this.drawn++, GR && this.slots.write(RR.slot, GR, yR) && (this.slotsFrom = Math.min(this.slotsFrom, RR.slot), this.slotsTo = Math.max(this.slotsTo, RR.slot));
        const tR = this.args,
          uR = 5 * RR.slot;
        tR[uR] === JR.count && tR[uR + 1] === JR.instances && tR[uR + 2] === JR.first || (tR[uR] = JR.count, tR[uR + 1] = JR.instances, tR[uR + 2] = JR.first, this.argsDirty = !0, this.nD.stale ||= RR.nD)
      }
      XK() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(RR) {
        for (const JR of this.records.values()) JR.draw && JR.seen === this.frame && !JR.nD && RR(JR.draw, this.slots.data, JR.slot * ft / 4)
      }
      resourceDestroyed(RR) {
        this.main.stale ||= this.main.Qq.has(RR), this.nD.stale ||= this.nD.Qq.has(RR)
      }
      execute(RR, JR, GR) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(RR, JR, GR, "direct"), this.drawn;
        const yR = this.host.sceneGroup(JR);
        if (!yR) return this.main.bundle = null, this.nD.bundle = null, this.recordedSceneGroup = null, this.encode(RR, JR, GR, "direct"), this.drawn;
        this.recordedTarget === GR && this.recordedSceneGroup === yR || (this.recordedTarget = GR, this.recordedSceneGroup = yR, this.main.stale = !0, this.nD.stale = !0);
        const tR = this.main,
          uR = this.nD;
        let ZR = !1;
        !tR.stale && tR.bundle || (tR.bundle = this.record(JR, GR, yR, "indirect"), ZR = !0);
        const qR = (0, ou.i)();
        return (uR.stale || this.rangedEpoch !== qR) && (this.rangedEpoch = qR, uR.bundle = this.drawsRanged() ? this.record(JR, GR, yR, "nD") : this.noRangedBundle(), ZR = !0), ZR && (this.bundles = uR.bundle ? [tR.bundle, uR.bundle] : [tR.bundle]), RR.executeBundles(this.bundles), RR.setBindGroup(0, yR), this.drawn
      }
      record(RR, JR, GR, yR) {
        const tR = this.device.createRenderBundleEncoder({
          label: "nD" === yR ? "thin-bases-ranged" : "thin-bases",
          colorFormats: RR._colorFormat ? [RR._colorFormat] : [],
          depthStencilFormat: RR._depthStencilFormat,
          sampleCount: RR._sampleCount
        });
        return tR.setBindGroup(0, GR), this.encode(tR, RR, JR, yR), tR.finish()
      }
      noRangedBundle() {
        for (const RR of this.records.values()) RR.nD && (RR.recorded = !1);
        return this.nD.Qq.clear(), this.nD.stale = !1, null
      }
      drawsRanged() {
        for (const RR of this.records.values())
          if (RR.nD && RR.draw) return !0;
        return !1
      }
      encode(RR, JR, GR, yR) {
        const tR = [];
        for (const iR of this.records.values()) "direct" !== yR && iR.nD !== ("nD" === yR) || (iR.recorded = !1, iR.draw && tR.push(iR));
        tR.sort(zu);
        const uR = "direct" === yR ? null : "nD" === yR ? this.nD : this.main;
        null === uR || void 0 === uR || uR.Qq.clear(), this.binder.reset();
        let ZR = !1;
        for (const iR of tR) {
          var qR;
          const tR = iR.draw,
            fR = this.host.pipelineFor(tR, JR, GR);
          if (!fR) {
            this.host.pipelineCompiling(tR, GR) ? ZR = !0 : uR && this.keep(iR, tR, uR.Qq);
            continue
          }
          let VR;
          if (iR.nD && "indirect" !== yR) {
            const RR = iR.unit.owner;
            VR = "direct" === yR && (0, ou.u)(RR) || (0, ou.m)(RR) || void 0
          }
          if (uR && this.keep(iR, tR, uR.Qq), 0 === (null === (qR = VR) || void 0 === qR ? void 0 : qR.count)) continue;
          this.binder.bind(RR, tR, fR, this.slots.bindGroup, iR.slot * ft);
          const KR = 5 * iR.slot;
          if ("indirect" === yR) {
            tR.indexBuffer ? RR.drawIndexedIndirect(this.argsBuffer, 4 * KR) : RR.drawIndirect(this.argsBuffer, 4 * KR);
            continue
          }
          const wR = this.args;
          VR ? Iu(RR, null !== tR.indexBuffer, wR, KR, VR) : tR.indexBuffer ? RR.drawIndexed(wR[KR], wR[KR + 1], wR[KR + 2], 0, 0) : RR.draw(wR[KR], wR[KR + 1], wR[KR + 2], 0)
        }
        uR && (uR.stale = ZR)
      }
      keep(RR, JR, GR) {
        RR.recorded = !0, RR.pipelineKey = JR.pipelineKey, RR.materialGroup = JR.material.bindGroup, RR.vertexBuffers.length = 0, RR.vertexBuffers.push(...JR.vertexBuffers), RR.vertexOffsets = JR.vertexOffsets, RR.indexBuffer = JR.indexBuffer, RR.indexFormat = JR.indexFormat;
        for (const yR of JR.vertexBuffers) GR.add(yR);
        JR.indexBuffer && GR.add(JR.indexBuffer), GR.add(JR.material.buffer);
        for (const yR of JR.material.bound) yR && GR.add(yR)
      }
      createRecord(RR) {
        let JR = this.freeSlots.pop();
        return void 0 === JR && (JR = this.slotCount++, this.grow()), {
          unit: RR,
          slot: JR,
          nD: void 0 !== (0, ou.m)(RR.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.nD.stale = !0), 5 * this.slotCount > this.args.length) {
          const RR = new Uint32Array(2 * this.args.length);
          RR.set(this.args), this.args = RR, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Iu(RR, JR, GR, yR, tR) {
      const uR = GR[yR + 1],
        ZR = tR.data;
      for (let qR = 0; qR < tR.count; qR++) {
        const tR = Math.min(ZR[2 * qR], uR),
          iR = Math.min(ZR[2 * qR + 1], uR - tR);
        0 !== iR && (JR ? RR.drawIndexed(GR[yR], iR, GR[yR + 2], 0, tR) : RR.draw(GR[yR], iR, GR[yR + 2], tR))
      }
    }

    function mu(RR, JR) {
      if (RR.pipelineKey !== JR.pipelineKey || RR.materialGroup !== JR.material.bindGroup || RR.indexBuffer !== JR.indexBuffer || RR.indexFormat !== JR.indexFormat || RR.vertexOffsets !== JR.vertexOffsets || RR.vertexBuffers.length !== JR.vertexBuffers.length) return !1;
      for (let GR = 0; GR < RR.vertexBuffers.length; GR++)
        if (RR.vertexBuffers[GR] !== JR.vertexBuffers[GR]) return !1;
      return !0
    }

    function zu(RR, JR) {
      return Ju(RR.draw, JR.draw)
    }
    const Su = new WeakMap,
      ju = {
        depth: !1,
        sunShadow: !1
      };

    function du(RR, JR) {
      let GR = Su.get(RR);
      GR || (GR = new Map, Su.set(RR, GR));
      const yR = `${JR.depth?"-depth":""}${JR.sunShadow?"-shadow":""}${JR.shadowMask?"-mask":""}`;
      let tR = GR.get(yR);
      if (!tR) {
        const uR = [{
          binding: FJ.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: FJ.i
          }
        }, {
          binding: FJ.v,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        JR.depth && uR.push({
          binding: FJ.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), JR.sunShadow && uR.push(... function() {
          const RR = GPUShaderStage.FRAGMENT,
            JR = FJ.o;
          return [{
            binding: JR.uniform,
            visibility: RR,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: JR.Rr,
            visibility: RR,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: JR.special,
            visibility: RR,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: JR.volume,
            visibility: RR,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: JR.sampler,
            visibility: RR,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: JR.entities,
            visibility: RR,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: JR.entityGrids,
            visibility: RR,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), JR.shadowMask && uR.push({
          binding: FJ.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), tR = RR.createBindGroupLayout({
          label: `${JR.depth?"terrain-":""}shader-pack-inputs${yR}`,
          entries: uR
        }), GR.set(yR, tR)
      }
      return tR
    }

    function Eu(RR) {
      return du(RR, ju)
    }

    function Yu(RR, JR) {
      if (!JR) return !1;
      const GR = (0, TJ.c)(RR);
      return !!GR && uy(GR, JR)
    }

    function ku(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!xy(JR)) return [];
      return [du(RR, {
        depth: py(JR.packVariant),
        sunShadow: Yu(JR.packVariant, GR),
        shadowMask: yR
      })]
    }
    class Qu {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = RR, this.sunShadow = GR, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(FJ.i), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = RR.createBuffer({
          label: "shader-pack-inputs",
          size: FJ.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const yR = (0, FJ.y)(JR);
        this.textures = RR.createBuffer({
          label: "shader-pack-textures",
          size: yR.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), RR.queue.writeBuffer(this.textures, 0, yR), this.bindGroup = RR.createBindGroup({
          label: "shader-pack-inputs",
          layout: Eu(RR),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: FJ.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: FJ.v,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(RR, JR, GR) {
        (0, FJ.G)(this.data, {
          seconds: RR.seconds(),
          lit: GR,
          renderOffset: RR.renderOffset(),
          AJR: RR.AJR(),
          eyePosition: JR,
          shadowDirection: RR.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const yR = JR ? this.sunShadow : null;
        if ((JR || GR) && !yR) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!RR && !yR) return this.bindGroup;
        (RR && RR !== this.depthView || GR && GR !== this.maskView) && (this.depthView = null !== RR && void 0 !== RR ? RR : this.depthView, this.maskView = null !== GR && void 0 !== GR ? GR : this.maskView, this.groups.clear());
        const tR = (RR ? 1 : 0) | (yR ? 2 : 0) | (GR ? 4 : 0);
        let uR = this.groups.get(tR);
        if (!uR) {
          const JR = this.entries();
          RR && JR.push({
            binding: FJ.n,
            resource: RR
          }), yR && JR.push(...yR.entries()), GR && JR.push({
            binding: FJ.r,
            resource: GR
          }), uR = this.device.createBindGroup({
            label: `${RR||GR?"terrain-":""}shader-pack-inputs${RR?"-depth":""}${yR?"-shadow":""}${GR?"-mask":""}`,
            layout: du(this.device, {
              depth: !!RR,
              sunShadow: !!yR,
              shadowMask: !!GR
            }),
            entries: JR
          }), this.groups.set(tR, uR)
        }
        return uR
      }
      bind(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        RR.setBindGroup(FJ.e, this.bindGroupFor(JR, GR, yR))
      }
    }

    function Fu(RR, JR, GR) {
      if (RR.gpuVersion === JR.gpuBuffersVersion) return !0;
      let yR;
      do {
        if (yR = JR.gpuBuffersVersion, !Tu(RR, JR, GR)) return !1
      } while (JR.gpuBuffersVersion !== yR);
      return RR.gpuVersion = yR, RR.fitInstances = 0, !0
    }

    function Tu(RR, JR, GR) {
      let yR = null;
      for (let uR = 0; uR < RR.slotData.length; uR++) {
        var tR;
        const ZR = RR.slotData[uR],
          qR = ZR ? JR.gpuBuffer(ZR) : GR;
        if (!qR) return !1;
        ZR && RR.layout.instanceEnds[uR] < 0 && JR.cover(ZR, Number.POSITIVE_INFINITY), RR.buffers[uR] = qR;
        const iR = RR.cRR[uR] + (ZR ? JR.gpuOffset(ZR) : 0);
        iR !== (null !== (tR = yR) && void 0 !== tR ? tR : RR.offsets)[uR] && (yR ??= RR.offsets.slice(), yR[uR] = iR), RR.ends[uR] = ZR ? JR.gpuEnd(ZR) : qR.size
      }
      return yR && (RR.offsets = yR), !0
    }

    function su(RR, JR, GR, yR) {
      if (JR <= RR.fitInstances) return null;
      const {
        layout: tR,
        ends: uR,
        offsets: ZR,
        slotData: qR,
        cRR: iR
      } = RR;
      let fR = !1;
      for (let VR = 0; VR < tR.buffers.length; VR++) {
        const RR = tR.instanceEnds[VR];
        if (RR < 0) continue;
        const yR = (JR - 1) * tR.buffers[VR].arrayStride + RR;
        if (uR[VR] - ZR[VR] < yR) return {
          index: VR,
          needed: yR
        };
        const KR = qR[VR];
        KR && GR.cover(KR, iR[VR] + yR) && (fR = !0)
      }
      return fR && Fu(RR, GR, yR), RR.fitInstances = JR, null
    }
    var hu = GR(38986),
      RZ = GR(39010);
    const JZ = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      GZ = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      yZ = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      tZ = `((vertexInputs.aPackedLightLevels >> 16u) | ${OJ.b.placed}u)`,
      uZ = "u32(vertexInputs.aShaderPackItem.x)",
      ZZ = `${OJ.b.lifeform}u`;

    function qZ(RR) {
      return "item" === RR.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const iZ = "bloxdSpEnchant",
      fZ = "floor(finalWorld[3].xyz)";

    function VZ(RR, JR, GR) {
      return "placed" === JR.kind && RR.reads[GR].includes("bloxdFragmentBlockPosition")
    }

    function KZ(RR, JR) {
      let [GR, yR] = RR;
      return GR === JR.point && yR === JR.code
    }

    function wZ(RR, JR) {
      var GR;
      return null === (GR = RR.find((RR => RR[JR]))) || void 0 === GR ? void 0 : GR[JR]
    }

    function rZ(RR, JR) {
      const GR = wZ(RR, "texture"),
        yR = wZ(RR, "enchantTier"),
        tR = wZ(RR, "glow"),
        uR = wZ(RR, "overlay"),
        ZR = uR ? JR.filter((RR => KZ(RR, uR))).length : 0;
      return uR && 1 === ZR ? {
        texture: GR,
        overlay: uR,
        enchantTier: yR,
        glow: tR
      } : {
        texture: GR,
        enchantTier: yR,
        glow: tR
      }
    }

    function eZ(RR) {
      if ("item" === RR.kind) {
        return {
          vertexFlags: `(${uZ} & 0xffffu)`,
          varying: "vPackItem",
          value: uZ,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return RR.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: tZ,
        varying: "vPackFlags",
        value: tZ,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function aZ(RR) {
      return "lifeform" === RR.kind ? ZZ : "0u"
    }

    function LZ(RR) {
      return !!RR.BLOXD_PLUGIN_ENCHANTMENT
    }

    function nZ(RR, JR) {
      const {
        enchantTier: GR
      } = JR;
      return GR && LZ(JR.defines) && "lifeform" === JR.kind && MZ(RR, "enchantTier") ? GR : null
    }

    function UZ(RR, JR) {
      return LZ(JR.defines) && MZ(RR, "enchantSpeed")
    }

    function WZ(RR) {
      const {
        overlay: JR,
        defines: GR
      } = RR;
      if (!JR || !GR.DIFFUSE) return null;
      const yR = GR.VERTEXCOLOR || GR.INSTANCESCOLOR && GR.INSTANCES;
      return `vec4f(${JR.colour}.rgb * uniforms.vDiffuseInfos.y${yR?" * fragmentInputs.vColor.rgb":""}, ${JR.colour}.a)`
    }
    const AZ = "fragmentInputs.vPackTexture";

    function CZ(RR) {
      const {
        atlas: JR,
        defines: GR,
        texture: yR
      } = RR;
      if (JR || !GR.DIFFUSE) return null;
      if (yR) return {
        texture: "diffuseSampler",
        ...yR
      };
      const tR = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===GR.DIFFUSEDIRECTUV?"vMainUV1":2===GR.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== RR.kind) return tR;
      if (!GR.BLOXD_PLUGIN_ANIMATED) return {
        ...tR,
        id: AZ
      };
      const uR = XR.c.WGSL,
        ZR = (0, XR.Jb)(uR, "uAnimStatesNum"),
        qR = (0, XR.kb)(uR, (0, hu.f)(uR), ZR),
        iR = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${ZR})`,
        layers: [qR],
        uv: `vec2f(${iR}.x, ${iR}.y * ${ZR} - ${qR})`,
        levelUv: iR,
        id: AZ
      }
    }

    function XZ(RR, JR) {
      return "box" === JR.kind && !!RR.hooks.surface && null !== CZ(JR)
    }

    function MZ(RR, JR) {
      return RR.reads.fragment.includes(JR)
    }

    function BZ(RR) {
      return !!RR.BLOXD_LIGHTING && !RR.BLOXD_UNLIT
    }

    function lZ(RR, JR, GR, yR) {
      const tR = RR.filter((RR => {
        let [GR, yR] = RR;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === GR && yR === JR
      }));
      if (1 !== tR.length) throw new Error(`A model program for shader packs has ${0===tR.length?"no":"more than one"} ${yR} code before fog (lite/modelShaderPack.ts)`);
      return RR.map((RR => RR === tR[0] ? [RR[0], GR] : RR))
    }

    function pZ(RR, JR, GR, yR) {
      const {
        hooks: tR
      } = RR, {
        kind: uR,
        defines: ZR
      } = JR, qR = [...GR];
      var iR;
      JR.atlas && tR.surface && qR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", wy("atlasIdxIn")]), "item" === uR && qR.push(["CUSTOM_VERTEX_DEFINITIONS", (0, XR.g)(XR.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), XZ(RR, JR) && qR.push(["CUSTOM_VERTEX_DEFINITIONS", (0, XR.g)(XR.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (iR = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Vy}[min(u32(${iR}) - 1u, arrayLength(&${Vy}) - 1u)], ${iR} > 0.5);\n`)]);
      const fR = eZ(JR);
      fR && (tR.surface || tR.light) && qR.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${fR.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${fR.varying} = ${fR.value};`]);
      let VR = yR;
      if (VZ(RR, JR, "fragment") && (qR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${fZ});`]), VR = [...VR, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), MZ(RR, "localPosition") && qR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${qZ(JR)};`]), LZ(ZR) && tR.surface) {
        UZ(RR, JR) && qR.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const GR = nZ(RR, JR);
        GR && qR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${GR});`]);
        const yR = (0, XR.xb)(XR.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        VR = [...lZ(VR, (0, RZ.g)(XR.c.WGSL), yR, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, RZ.e)(iZ)]]
      }
      const {
        overlay: KR
      } = JR;
      KR && WZ(JR) && tR.surface && (VR = VR.filter((RR => !KZ(RR, KR))));
      const wR = tR.light ? function(RR) {
        return "placed" === RR.kind ? {
          name: "terrain",
          engine: (0, YJ.J)(XR.c.WGSL),
          pack: (0, YJ.ab)(XR.c.WGSL)
        } : RR.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, YJ.G)(XR.c.WGSL),
          pack: (0, YJ.X)(XR.c.WGSL)
        } : null
      }(JR) : null;
      if (wR && (VR = lZ(VR, wR.engine, wR.pack, `${wR.name} light`), "placed" !== uR && BZ(ZR))) {
        const RR = ZR.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, XR.Jb)(XR.c.WGSL, "uEntityLightLevels") : (0, XR.Nb)(XR.c.WGSL, "aLightLevels");
        qR.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${YJ.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, YJ.Z)(XR.c.WGSL, RR)])
      }
      return {
        vertexCode: qR,
        fragmentCode: VR
      }
    }

    function gZ(RR, JR, GR, yR) {
      return yy(RR, JR, GR, yR, "model")
    }
    const bZ = "\t@builtin(position) position: vec4f,\n";

    function vZ(RR, JR) {
      const GR = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(RR)[0];
      return `${GR}${JR}${RR.slice(GR.length)}`
    }

    function OZ(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: tR
      } = JR, uR = uy(JR, yR), {
        kind: ZR,
        defines: qR
      } = GR, iR = function(RR, JR) {
        var GR, yR, tR, uR;
        const {
          defines: ZR
        } = JR, qR = eZ(JR), iR = !!ZR.FOG, fR = LZ(ZR), VR = null !== (GR = null === qR || void 0 === qR ? void 0 : qR.enchantTier) && void 0 !== GR ? GR : nZ(RR, JR) ? "fragmentInputs.vPackEnchantTier" : "0u", KR = "lifeform" === JR.kind && !ZR.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (yR = null === qR || void 0 === qR ? void 0 : qR.vertexFlags) && void 0 !== yR ? yR : aZ(JR),
          vertexLocalPosition: qZ(JR),
          flags: null !== (tR = null === qR || void 0 === qR ? void 0 : qR.flags) && void 0 !== tR ? tR : aZ(JR),
          normal: "normalW",
          alpha: KR ? "alpha * baseColor.a" : "alpha",
          alphaOut: KR ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: iR ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: iR ? "1.0 - fog" : "0.0",
          enchantTier: VR,
          enchantColour: fR ? `${iZ}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: UZ(RR, JR) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: MZ(RR, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: WZ(JR),
          glow: null !== (uR = JR.glow) && void 0 !== uR ? uR : null
        }
      }(JR, GR), fR = RR.textures.filter((RR => /^textureAtlas\d+$/.test(RR.name))).length, VR = GR.atlas && fR > 0 ? {
        count: fR,
        layers: GR.atlas.layers,
        width: GR.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: RR.material.slots.has("uAnimDataPerTex") ? (JR, GR) => Fy(JR, GR, function(RR) {
          const JR = RR.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            gK: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: RR => `uniforms.uAnimDataPerTex[${RR}]${JR}`
          }
        }(RR)) : null
      } : null, KR = "placed" === ZR ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", wR = null !== VR && void 0 !== VR ? VR : CZ(GR), rR = function(RR, GR) {
        let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,FJ.C)()}${qy(JR,GR)}${yR}${ey(RR)}${Ry}${KR}${JR.code}`
      };
      let {
        vertex: eR,
        fragment: aR
      } = RR;
      const LR = Ly(tR, iR);
      if (LR) {
        const RR = VZ(JR, GR, "vertex") ? `\tbloxdSpCell = ${fZ};\n` : "";
        eR = gZ(eR, JZ, `${RR}${LR.slice(1)}${JZ}`, "vertex")
      }
      const nR = `${iy(JR,uR,function(RR,JR){return JR.TWOSIDEDLIGHTING?RR:`select(-(${RR}), ${RR}, fragmentInputs.frontFacing)`}(iR.normal,qR),iR.flags)}${ny(tR,JR.strict,JR.program,wR,iR)}`;
      nR && (aR = gZ(aR, GZ, `${nR.slice(1)}${GZ}`, "surface")), uR && JR.sunShadow && !qR.TWOSIDEDLIGHTING && (aR = gZ(aR, bZ, `${bZ}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const UR = Ay(tR);
      if (UR) {
        const RR = Wy(tR, BZ(qR), !0, iR);
        aR = gZ(aR, yZ, `${RR}${UR.slice(1)}${yZ}`, "light")
      }
      const WR = XZ(JR, GR) ? Ky : "";
      return {
        ...RR,
        vertex: vZ(eR, rR(VR, !1, WR)),
        fragment: vZ(aR, rR(wR, uR))
      }
    }
    const xZ = {
      name: "earthSky",
      uniqueId: -1
    };
    class NZ {
      constructor(RR, JR) {
        this.resources = RR, this.epoch = JR, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const RR of this.instances.values()) RR.released = !0, this.resources.destroyBuffer(RR.buffer);
        this.instances.clear()
      }
    }

    function DZ(RR) {
      return RR.failed && null !== RR.packGroup
    }
    class HZ {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Hu,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Nu;
        this.device = RR, this.resources = JR, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.DRR = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new ht, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Au((RR => this.modelSlot(RR).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, xJ.d)("Lite: "), this.renderStates = new au(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (RR, JR) => this.keepSteady(RR, JR), this.lists = void 0, this.slotCount = 0, this.DRR = yR, this.modelMeshes = tR, this.lists = new Ru(tR, yR, this, this.warnOnce), this.drawDefines = new Ku(JR, this.warnOnce, ((RR, JR, GR) => this.programWithModel(RR, JR, GR)), DZ), this.vertexLayouts = new Bu(JR, RR.limits, this.warnOnce), this.sceneLayout = MJ(RR), this.frameLayout = RR.createBindGroupLayout({
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
        }), this.frameBuffer = RR.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new gu(RR, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = RR.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Pu(RR, new gu(RR, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (RR, JR, GR) => this.pipelineFor(RR, JR, GR),
          pipelineCompiling: (RR, JR) => !RR.program.failed && !1 !== this.pipelines.get(`${RR.pipelineKey}|${JR}`),
          sceneGroup: RR => {
            const JR = GR(RR);
            return JR || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), JR
          }
        }), JR.onDestroy = RR => {
          this.thinBundle.resourceDestroyed(RR)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const tR = {
          order: RR,
          isTransparent: JR,
          _direct: !JR,
          bind: (RR, JR) => this.createBinding(tR, JR, GR, yR)
        };
        return tR
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(RR, JR, GR) {
        var yR;
        let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = JR, this.drawDefines.view = JR, this.thinBundle.yX(), this.writeFrameUniforms();
        const uR = null !== (yR = null === tR || void 0 === tR ? void 0 : tR.defineFor("model")) && void 0 !== yR ? yR : 0;
        this.drawDefines.modelPackVariant = uR, tR && 0 !== uR && (this.packInputs ??= new Qu(this.device, tR.textureLayers(), this.sunShadow), this.packInputs.write(tR, JR.eye, tR.sa())), this.lists.clear(), this.slotCount = 0;
        const ZR = RR.activeCamera;
        this.DRR.select(ZR, this.keepSteadyBase), this.modelMeshes.select(ZR, JR), GR && this.pushEarthSky(GR), this.lists.collect(RR), this.thinBundle.XK(), this.uploadMeshSlots()
      }
      pushDraws(RR, JR, GR, yR, tR, uR) {
        let ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const qR = uR.length;
        for (let iR = 0; iR < GR; iR++) {
          const GR = JR[iR];
          let qR = this.retainedDraw(RR, GR, yR, tR);
          if (void 0 === qR && (qR = this.drawFor(RR, GR, yR, tR), this.retain(GR, qR)), qR) {
            const RR = GR.owner,
              JR = ZR ? ZR[iR] : -1;
            qR.slotOffset = JR < 0 ? this.writeMeshSlot(RR.getWorldMatrix().m, RR.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[JR], 16 * JR), uR.push(qR)
          }
        }
        return uR.length - qR
      }
      bundleDraws(RR, JR, GR) {
        let yR = 0;
        for (const tR of JR) {
          let JR = this.retainedDraw(RR, tR, GR, !1);
          const uR = void 0 !== JR;
          if (void 0 === JR && (JR = this.drawFor(RR, tR, GR, !1), this.retain(tR, JR)), JR) {
            const RR = tR.owner,
              GR = this.thinBundle.add(tR, JR, RR.getWorldMatrix().m, RR.visibility);
            uR && this.steadyFrom(tR, JR, GR), yR++
          }
        }
        return yR
      }
      steadyFrom(RR, JR, GR) {
        const yR = RR.owner,
          tR = this.DRR.base(yR),
          uR = yR.material,
          {
            drawState: ZR,
            instance: qR
          } = JR.inputs.retained;
        if (!tR || !uR || 1 !== RR.parts.materials.length || vu(RR) !== uR) return;
        const iR = tR.steady ??= {
          unit: RR,
          material: uR,
          visibility: 1,
          draw: JR,
          record: GR,
          drawState: ZR,
          instance: qR,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        iR.unit = RR, iR.material = uR, iR.visibility = yR.visibility, iR.draw = JR, iR.record = GR, iR.drawState = ZR, iR.instance = qR, iR.bindGroup = qR.bindGroup, iR.gpuVersion = this.resources.gpuBuffersVersion, iR.fitInstances = JR.inputs.fitInstances, iR.worldFlag = yR.getWorldMatrix().updateFlag, iR.handedFrame = this.frame
      }
      keepSteady(RR, JR) {
        const GR = RR.steady;
        if (GR.handedFrame !== this.frame - 1 || (this.frame + GR.phase) % 8 === 0) return !1;
        const yR = RR.mesh,
          {
            unit: tR,
            draw: uR,
            instance: ZR,
            drawState: qR
          } = GR,
          iR = yR.forcedInstanceCount || yR.zRR;
        if (!yR.isVisible || yR.PuR || yR.visibility !== GR.visibility || 0 === (yR.layerMask & JR.layerMask) || yR.material !== GR.material || 0 !== yR.renderingGroupId || yR.hasVertexAlpha || !this.drawDefines.definesHold(qR, tR, qR.instancing) || GR.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(uR.inputs, tR, qR.instancing, uR.program) || uR.program.failed || ZR.released || iR <= 0 || iR > GR.fitInstances) return !1;
        if (ZR.frame !== this.frame && this.bindMaterial(ZR, this.modelUniforms.refreshModelUniforms(yR.jH(), ZR, ZR.model, this.view)), !ZR.bindable || ZR.bindGroup !== GR.bindGroup) return !1;
        const fR = yR.computeWorldMatrix(),
          VR = fR.updateFlag !== GR.worldFlag;
        return GR.worldFlag = fR.updateFlag, uR.instances = iR, this.thinBundle.addAgain(GR.record, uR, VR ? fR.m : null, GR.visibility), GR.handedFrame = this.frame, this.DRR.drawn++, !0
      }
      retainedDraw(RR, JR, GR, yR) {
        const tR = this.inputs.get(JR),
          uR = null === tR || void 0 === tR ? void 0 : tR.retained;
        if (!tR || !uR) return;
        const {
          drawState: ZR,
          program: qR,
          instance: iR,
          instancing: fR
        } = uR, VR = JR.owner;
        if (uu(VR) !== fR) return;
        const KR = this.instanceCount(VR, fR);
        if (KR <= 0) return null;
        if (iR.released || qR.failed || ZR.program !== qR || !this.drawDefines.programCurrent(ZR, JR, fR, GR) || !this.inputsStamped(tR, JR, fR, qR) || VR.isUnIndexed !== uR.unIndexed || this.indexKey(JR) !== uR.indexData) return;
        if (uR.indexBuffer && uR.gpuVersion !== this.resources.gpuBuffersVersion) {
          const RR = this.resources.gpuBuffer(uR.indexData);
          if (!RR) return;
          uR.indexBuffer = RR, uR.gpuVersion = this.resources.gpuBuffersVersion
        }
        let wR = !1;
        if (iR.frame !== this.frame && (wR = this.modelUniforms.refreshModelUniforms(RR, iR, iR.model, this.view)), !this.bindMaterial(iR, wR) || !this.withGpuBuffers(tR) || !this.instanceBuffersFit(VR.name, tR, KR)) return null;
        const rR = this.makeDraw(qR, tR, this.renderStates.renderState(ZR.model, VR, yR, tR.state), iR, KR);
        return this.setRange(rR, JR, uR.indexBuffer, uR.indexData), rR
      }
      retain(RR, JR) {
        const GR = this.drawDefines.drawStates.get(RR);
        if (!JR || !GR || GR.program !== JR.program) {
          const JR = this.inputs.get(RR);
          return void(JR && (JR.retained = null))
        }
        const yR = RR.owner,
          tR = GR.instancing,
          uR = this.indexKey(RR),
          ZR = JR.inputs.retained;
        ZR ? (ZR.drawState = GR, ZR.instancing = tR, ZR.program = JR.program, ZR.instance = JR.material, ZR.indexData = uR, ZR.unIndexed = yR.isUnIndexed, ZR.indexBuffer = JR.indexBuffer, ZR.gpuVersion = this.resources.gpuBuffersVersion) : JR.inputs.retained = {
          drawState: GR,
          instancing: tR,
          program: JR.program,
          instance: JR.material,
          indexData: uR,
          unIndexed: yR.isUnIndexed,
          indexBuffer: JR.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(RR, JR, GR, yR) {
        const tR = JR.owner,
          uR = vu(JR);
        if (!uR) return null;
        const ZR = uR.getClassName();
        let qR = null;
        if (function(RR) {
            return "LinesMesh" === RR.getClassName()
          }(tR)) {
          if (! function(RR) {
              return "ShaderMaterial" === RR.getClassName() && "color" === RR.shaderPath
            }(uR)) return this.warnOnce(`lines:${ZR}`, `A LinesMesh with a ${ZR} is not drawn yet (${uR.name})`), null;
          qR = tR
        } else if ("StandardMaterial" !== ZR && "LiteMaterial" !== ZR) return this.warnOnce(`class:${ZR}`, `${ZR} is not drawn yet (${uR.name})`), null;
        const iR = uu(tR),
          fR = this.instanceCount(tR, iR);
        if (fR <= 0) return null;
        const VR = qR ? this.lineProgramFor(tR, GR, iR) : this.drawDefines.programFor(RR, JR, uR, GR, iR);
        if (!VR || VR.failed) return null;
        const KR = qR ? null : this.drawDefines.drawStates.get(JR).model,
          wR = KR ? this.modelInstance(KR, VR) : this.materialInstance(tR, VR);
        let rR = !1;
        if (wR.frame !== this.frame && (qR ? UR(wR.ubo, qR) : rR = this.modelUniforms.refreshModelUniforms(RR, wR, wR.model, this.view)), !this.bindMaterial(wR, rR)) return null;
        const eR = this.meshInputs(JR, VR, iR);
        if (!eR || !this.instanceBuffersFit(tR.name, eR, fR)) return null;
        const aR = this.indexKey(JR);
        let LR = null;
        if (aR && !tR.isUnIndexed && (LR = this.resources.gpuBuffer(aR), !LR)) return null;
        const nR = this.renderStates.renderState(null !== KR && void 0 !== KR ? KR : uR, tR, yR, eR.state, qR ? "line-list" : "triangle-list"),
          WR = this.makeDraw(VR, eR, nR, wR, fR);
        return this.setRange(WR, JR, LR, aR), WR
      }
      indexKey(RR) {
        const JR = fu(RR);
        return JR ? this.resources.modelIndex(JR) : null
      }
      setRange(RR, JR, GR, yR) {
        GR && (RR.indexBuffer = GR, RR.indexFormat = this.resources.indexFormat(yR));
        const tR = 4 * JR.range + (GR ? 0 : 2);
        RR.unit = JR, RR.first = JR.parts.WL[tR], RR.count = JR.parts.WL[tR + 1]
      }
      makeDraw(RR, JR, GR, yR, tR) {
        JR.state !== GR && (JR.state = GR, JR.pipelineKey = `${RR.id}|${JR.layout.key}|${GR.key}`, JR.pipeline = null);
        const uR = JR.draw ??= {
          program: RR,
          inputs: JR,
          pipelineKey: "",
          layout: JR.layout,
          state: GR,
          material: yR,
          slotOffset: 0,
          vertexBuffers: JR.buffers,
          vertexOffsets: JR.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: tR,
          unit: null
        };
        return uR.program = RR, uR.pipelineKey = JR.pipelineKey, uR.state = GR, uR.material = yR, uR.vertexOffsets = JR.offsets, uR.indexBuffer = null, uR.instances = tR, uR
      }
      instanceCount(RR, JR) {
        switch (JR) {
          case "thin":
            return RR.forcedInstanceCount || RR.zRR;
          case "instanced":
            return this.prepareInstances(RR);
          case "none":
            return 1
        }
      }
      prepareInstances(RR) {
        const JR = function(RR, JR) {
          const GR = JR._userInstancedBuffersStorage,
            yR = RR.batchUploads.get(JR);
          if (yR) {
            var tR;
            if (yR.layout === (null !== (tR = null === GR || void 0 === GR ? void 0 : GR.interleavedKinds) && void 0 !== tR ? tR : null)) return yR;
            yR.release()
          }
          return new rJ(RR, JR, GR)
        }(this.resources, RR);
        return JR.frame !== this.frame && JR.pack(RR, this.modelMeshes.instanceBatch(RR), this.modelMeshes.worlds, this.frame), JR.count
      }
      programWithModel(RR, JR, GR) {
        const yR = this.modelSlot(RR),
          tR = wu(yR, RR, GR),
          uR = this.drawDefines.modelPackKind(RR),
          ZR = uR ? function(RR, JR, GR, yR) {
            const tR = (0, lR.E)(RR, MR.j.name),
              uR = [];
            for (const {
                feature: iR,
                state: fR,
                active: VR
              }
              of RR.features) {
              var ZR, qR;
              const RR = VR ? null === (ZR = (qR = (0, NJ.i)(iR)).Be) || void 0 === ZR ? void 0 : ZR.call(qR, fR) : void 0;
              RR && uR.push(RR)
            }
            return {
              kind: JR,
              atlas: null !== tR && void 0 !== tR && tR.active ? (0, MR.e)(tR.state) : null,
              defines: GR,
              ...rZ(uR, yR)
            }
          }(RR, uR, JR, yR.fragmentCode) : null;
        if (ZR && function(RR) {
            const JR = RR.defines;
            return (null === RR.atlas || !!JR.DIFFUSE && 1 === JR.DIFFUSEDIRECTUV) && !!JR.NORMAL && !JR.REFLECTION && !JR.EMISSIVEASILLUMINATION && !JR.LINKEMISSIVEWITHDIFFUSE
          }(ZR)) {
          const GR = this.modelPackProgram(RR, JR, `${tR}#${uR}#sp${this.drawDefines.modelPackVariant}`, yR, ZR);
          if (GR && !GR.failed) return GR
        }
        const qR = this.programs.get(tR);
        if (qR || this.unbuildable.has(tR)) return null !== qR && void 0 !== qR ? qR : null;
        let iR;
        try {
          iR = Ot({
            defines: qu(JR),
            vertexCode: yR.vertexCode,
            fragmentCode: yR.fragmentCode,
            pluginUniforms: yR.pluginUniforms
          })
        } catch (fR) {
          return this.unbuildable.add(tR), this.warnOnce(`build:${tR}`, `could not build a program for ${RR.name}: ${String(fR)}`), null
        }
        return this.createProgram(tR, iR, "standard")
      }
      modelPackProgram(RR, JR, GR, yR, tR) {
        const uR = this.programs.get(GR);
        if (uR || this.unbuildable.has(GR)) return null !== uR && void 0 !== uR ? uR : null;
        const ZR = this.drawDefines.modelPackVariant;
        let qR;
        try {
          const RR = function(RR) {
              return (0, TJ.b)(RR, "model")
            }(ZR),
            GR = pZ(RR, tR, yR.vertexCode, yR.fragmentCode);
          qR = OZ(Ot({
            defines: qu(JR),
            ...GR,
            pluginUniforms: yR.pluginUniforms
          }), RR, tR, !!this.sunShadow)
        } catch (VR) {
          return this.unbuildable.add(GR), this.warnOnce(`build:${GR}`, `could not build a shader pack program for ${RR.name}, which draws without the pack: ${String(VR)}`), null
        }
        const iR = Yu(ZR, !!this.sunShadow),
          fR = {
            group: this.packInputs.bindGroupFor(null, iR),
            layout: du(this.device, {
              depth: !1,
              sunShadow: iR
            })
          };
        return this.createProgram(GR, qR, function(RR) {
          return `standard-sp${RR}`
        }(ZR), fR)
      }
      lineProgramFor(RR, JR, GR) {
        const yR = nR(RR, GR, JR, this.view);
        let tR = this.linePrograms.get(yR);
        var uR;
        return tR || (tR = this.createProgram(`lines#${yR}`, (uR = function(RR) {
          const JR = new Map;
          for (let GR = 0; GR < fR.length; GR++) RR & 1 << GR && JR.set(fR[GR], !0);
          return JR
        }(yR), Ht({
          defines: uR,
          vertex: Nt,
          fragment: Dt,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(yR, tR)), tR
      }
      createProgram(RR, JR, GR) {
        var yR;
        let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const uR = this.nextProgramId++,
          ZR = `${GR}-${uR}`,
          qR = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          iR = [{
            binding: 0,
            visibility: qR,
            buffer: {
              type: "uniform"
            }
          }];
        for (const KR of JR.textures) iR.push({
          binding: KR.binding,
          visibility: qR,
          texture: {
            viewDimension: KR.dimension
          }
        }), iR.push({
          binding: KR.samplerBinding,
          visibility: qR,
          sampler: {}
        });
        const fR = this.device.createBindGroupLayout({
            label: ZR,
            entries: iR
          }),
          VR = {
            key: RR,
            id: uR,
            kind: GR,
            program: JR,
            vertex: this.device.createShaderModule({
              label: `${ZR}-vertex`,
              code: JR.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${ZR}-fragment`,
              code: JR.fragment
            }),
            materialLayout: fR,
            pipelineLayout: this.device.createPipelineLayout({
              label: ZR,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, fR, ...tR ? [tR.layout] : []]
            }),
            packGroup: null !== (yR = null === tR || void 0 === tR ? void 0 : tR.group) && void 0 !== yR ? yR : null,
            failed: !1
          };
        return this.programs.set(RR, VR), VR
      }
      writeFrameUniforms() {
        const RR = this.frameUniforms;
        Wu(this.view, RR), this.device.queue.writeBuffer(this.frameBuffer, 0, RR)
      }
      materialInstance(RR, JR) {
        let GR = this.materials.get(RR);
        if (!GR) {
          const JR = new Map;
          this.materials.set(RR, JR);
          const {
            resources: yR,
            materials: tR
          } = this;
          RR.YH.addOnce((() => {
            for (const RR of JR.values()) RR.released = !0, yR.destroyBuffer(RR.buffer);
            tR.delete(RR)
          })), GR = JR
        }
        let yR = GR.get(JR.key);
        return yR || (yR = this.newMaterialInstance(RR, null, JR), GR.set(JR.key, yR)), yR
      }
      modelInstance(RR, JR) {
        const GR = this.modelSlot(RR);
        let yR = GR.instances.get(JR.key);
        return yR || (yR = this.newMaterialInstance(RR, RR, JR), GR.instances.set(JR.key, yR)), yR
      }
      modelSlot(RR) {
        var JR;
        let GR = RR.gpu[gR.e.lite];
        return (null === (JR = GR) || void 0 === JR ? void 0 : JR.epoch) !== this.resources.epoch && (GR = new NZ(this.resources, this.resources.epoch), RR.gpu[gR.e.lite] = GR), GR
      }
      newMaterialInstance(RR, JR, GR) {
        const yR = GR.program.material.floats,
          tR = new Float32Array(yR),
          uR = new Map;
        return {
          owner: RR,
          model: JR,
          program: GR,
          data: tR,
          uploaded: new Float32Array(yR).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${RR.name}-uniforms`,
            size: Math.max(16, 4 * yR),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: uR,
          ubo: new Uu(GR.program.material.slots, tR, uR),
          bindGroup: null,
          bound: new Array(2 * GR.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(RR) {
        var JR;
        const GR = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: mt + zt,
            fragment: mt + St,
            attributes: [],
            material: It,
            textures: []
          }, "earthSky"),
          yR = this.earthSkyUniforms ??= this.newMaterialInstance(xZ, null, GR);
        this.earthSkyFrom !== RR && (this.earthSkyFrom = RR, yR.data.fill(0)), Tt(yR.ubo, RR, this.view);
        const tR = this.vertexInputs(GR, xZ, "earthSky", GR, null);
        if (GR.failed || !tR || !this.bindMaterial(yR, !1)) return;
        const uR = null !== (JR = tR.state) && void 0 !== JR ? JR : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          ZR = this.makeDraw(GR, tR, uR, yR, 1);
        ZR.count = ot.length;
        const qR = st(RR, this.view);
        ZR.slotOffset = this.writeMeshSlot(qR, 1), this.lists.skyDraws.push(ZR)
      }
      uploadIfChanged(RR) {
        const {
          data: JR,
          uploaded: GR
        } = RR;
        for (let yR = 0; yR < JR.length; yR++)
          if (JR[yR] !== GR[yR]) return GR.set(JR), void this.device.queue.writeBuffer(RR.buffer, 0, JR)
      }
      bindMaterial(RR, JR) {
        return RR.frame !== this.frame && (RR.frame = this.frame, JR || this.uploadIfChanged(RR), RR.bindable = this.bindTextures(RR)), RR.bindable
      }
      bindTextures(RR) {
        const {
          program: JR,
          bound: GR
        } = RR, yR = JR.program.textures;
        let tR = !RR.bindGroup,
          uR = !0;
        for (let ZR = 0; ZR < yR.length; ZR++) {
          const JR = RR.textures.get(yR[ZR].name),
            qR = JR ? this.resources.boundTexture(JR) : null;
          qR ? GR[2 * ZR] === qR.view && GR[2 * ZR + 1] === qR.sampler || (GR[2 * ZR] = qR.view, GR[2 * ZR + 1] = qR.sampler, tR = !0) : (JR || RR.ubo.expected.has(yR[ZR].name) || this.warnOnce(`texture:${RR.owner.name}:${yR[ZR].name}`, `${RR.owner.name} has no ${yR[ZR].name}`), uR = !1)
        }
        if (!uR) return tR && (RR.bindGroup = null), !1;
        if (tR) {
          const tR = [{
            binding: 0,
            resource: {
              buffer: RR.buffer
            }
          }];
          for (let RR = 0; RR < yR.length; RR++) tR.push({
            binding: yR[RR].binding,
            resource: GR[2 * RR]
          }), tR.push({
            binding: yR[RR].samplerBinding,
            resource: GR[2 * RR + 1]
          });
          RR.bindGroup = this.device.createBindGroup({
            label: `${RR.owner.name}-material`,
            layout: JR.materialLayout,
            entries: tR
          })
        }
        return !0
      }
      writeMeshSlot(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, RR, JR, GR), this.slotCount++ * ft
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(RR, JR, GR, yR, tR) {
        let uR = this.inputs.get(RR);
        if (!uR || uR.program !== yR || !lu(JR, uR, this.resources, tR)) {
          var ZR;
          if (uR = null !== (ZR = this.vertexLayouts.resolveInputs(JR, GR, yR, tR)) && void 0 !== ZR ? ZR : void 0, !uR) return null;
          this.inputs.set(RR, uR)
        }
        return this.withGpuBuffers(uR)
      }
      meshInputs(RR, JR, GR) {
        const yR = this.inputs.get(RR);
        if (yR && this.inputsStamped(yR, RR, GR, JR)) return this.withGpuBuffers(yR);
        const tR = RR.owner,
          uR = fu(RR),
          ZR = this.vertexInputs(RR, tR, tR.name, JR, uR);
        return ZR && (ZR.geometry = Vu(RR), ZR.instanceLayout = this.drawDefines.instanceLayout(tR, GR)), ZR
      }
      inputsStamped(RR, JR, GR, yR) {
        return function(RR, JR, GR, yR) {
          return RR.program === GR && RR.geometry === Vu(JR) && RR.instanceLayout === yR
        }(RR, JR, yR, this.drawDefines.instanceLayout(JR.owner, GR))
      }
      withGpuBuffers(RR) {
        return Fu(RR, this.resources, this.zeroBuffer) ? RR : null
      }
      instanceBuffersFit(RR, JR, GR) {
        const yR = su(JR, GR, this.resources, this.zeroBuffer);
        if (yR) {
          const tR = JR.ends[yR.index] - JR.offsets[yR.index] + JR.cRR[yR.index];
          return this.warnOnce(`overrun:${RR}`, `${RR} draws ${GR} instances from a ${tR}-byte buffer (${yR.needed} needed)`), !1
        }
        return !0
      }
      createBinding(RR, JR, GR, yR) {
        const tR = `${JR._colorFormat}|${JR._depthStencilFormat}|${JR._depthCompare}|${JR._sampleCount}`,
          uR = bJ(this.device, JR);
        if (RR === this.skyLastRenderable) {
          let GR = null;
          return {
            renderable: RR,
            pipeline: uR,
            draw: RR => GR ? this.drawSky(RR, JR, tR, GR) : 0,
            update: RR => {
              GR = RR
            }
          }
        }
        return {
          renderable: RR,
          pipeline: uR,
          draw: RR => (yR ? yR.execute(RR, JR, tR) : 0) + this.drawList(RR, JR, tR, GR)
        }
      }
      drawSky(RR, JR, GR, yR) {
        const tR = this.lists.skyDraws,
          uR = tR.length > 0;
        if (uR) {
          var ZR;
          const GR = (null !== (ZR = JR._depthCompare) && void 0 !== ZR ? ZR : BJ).startsWith("greater") ? 0 : 1;
          RR.setViewport(0, 0, yR.targetWidth, yR.targetHeight, GR, GR)
        }
        const qR = this.drawList(RR, JR, GR, tR);
        return uR && RR.setViewport(0, 0, yR.targetWidth, yR.targetHeight, 0, 1), qR
      }
      drawList(RR, JR, GR, yR) {
        let tR = 0;
        const uR = this.binder;
        uR.reset();
        for (const ZR of yR) {
          const yR = this.pipelineFor(ZR, JR, GR);
          yR && (uR.bind(RR, ZR, yR, this.meshSlots.bindGroup, ZR.slotOffset), ZR.indexBuffer ? RR.drawIndexed(ZR.count, ZR.instances, ZR.first, 0, 0) : RR.draw(ZR.count, ZR.instances, ZR.first, 0), tR++)
        }
        return tR
      }
      pipelineFor(RR, JR, GR) {
        var yR, tR;
        if (RR.program.failed) return null;
        const uR = RR.inputs;
        if (uR.pipeline && uR.pipelineTarget === GR) return uR.pipeline;
        const ZR = `${RR.pipelineKey}|${GR}`,
          qR = this.pipelines.get(ZR);
        if (void 0 !== qR) return qR && (uR.pipeline = qR, uR.pipelineTarget = GR), qR || null;
        this.pipelines.set(ZR, null);
        const {
          program: iR,
          layout: fR,
          state: VR
        } = RR, KR = {
          label: `standard-${iR.id}`,
          layout: iR.pipelineLayout,
          vertex: {
            module: iR.vertex,
            entryPoint: "main",
            buffers: fR.buffers
          },
          fragment: UJ({
            module: iR.fragment,
            entryPoint: "main"
          }, JR, VR.blend, VR.colourWrite),
          depthStencil: JR._depthStencilFormat ? {
            format: JR._depthStencilFormat,
            depthCompare: null !== (yR = null !== (tR = VR.depthCompare) && void 0 !== tR ? tR : JR._depthCompare) && void 0 !== yR ? yR : BJ,
            depthWriteEnabled: VR.depthWrite,
            depthBias: VR.depthBias,
            depthBiasSlopeScale: VR.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: JR._sampleCount
          },
          primitive: {
            topology: VR.topology,
            frontFace: VR.frontFace,
            cullMode: VR.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(KR).then((RR => {
          this.compiling--, this.pipelines.set(ZR, RR)
        }), (RR => {
          this.compiling--, this.reportFailure(iR, ZR, RR)
        })), null
      }
      forEachSunShadowCaster(RR) {
        const JR = this.caster,
          GR = (GR, yR, tR) => {
            const uR = GR.unit && function(RR) {
              const JR = RR.material.model;
              return null !== JR && (JR.lifeform || JR.item) && JR.castsSunShadow && "triangle-list" === RR.state.topology
            }(GR) ? fu(GR.unit) : null;
            if (!uR) return;
            const ZR = GR.unit.owner;
            switch (JR.geometry = uR, JR.skip = ZR.noSunShadowVertices, JR.indexed = null !== GR.indexBuffer, JR.first = GR.first, JR.count = GR.count, JR.NK = yR, JR.worldAt = tR, JR.instances = null, JR.instanceCount = 1, JR.thin = !1, uu(ZR)) {
              case "thin": {
                const RR = ZR._thinInstanceDataStorage.matrixData;
                if (!RR) return;
                JR.instances = RR, JR.instanceCount = Math.min(GR.instances, RR.length / 16), JR.thin = !0;
                break
              }
              case "instanced": {
                const RR = this.resources.batchUploads.get(ZR);
                if (!RR || RR.frame !== this.frame || !this.writeBatchCasters(RR)) return;
                break
              }
            }
            RR(JR)
          };
        for (const yR of this.lists.opaqueDraws) GR(yR, this.meshSlots.data, yR.slotOffset / 4);
        this.thinBundle.forEachDrawn(GR)
      }
      writeBatchCasters(RR) {
        const {
          caster: JR
        } = this, GR = RR.packedMatrices, yR = RR.count;
        JR.instances = GR, JR.instanceCount = yR;
        let tR = -1;
        for (let uR = 0; uR < yR; uR++) {
          const JR = oZ(RR.packedRowMesh(uR));
          JR && tR < 0 ? (this.casterWorlds.length < 16 * yR && (this.casterWorlds = new Float32Array(GR.length)), this.casterWorlds.set(GR.subarray(0, 16 * uR)), tR = uR) : !JR && tR >= 0 && (this.casterWorlds.set(GR.subarray(16 * uR, 16 * uR + 16), 16 * tR), tR++)
        }
        return tR >= 0 && (JR.instances = this.casterWorlds, JR.instanceCount = tR), JR.instanceCount > 0
      }
      async reportFailure(RR, JR, GR) {
        const yR = [];
        let tR = !0;
        for (const [uR, ZR] of [
            ["vertex", RR.vertex],
            ["fragment", RR.fragment]
          ]) {
          const RR = await ZR.getCompilationInfo();
          for (const JR of RR.messages) tR &&= "error" !== JR.type, yR.push(`${uR}:${JR.lineNum}:${JR.linePos} ${JR.type}: ${JR.message}`)
        }
        if (tR && !RR.packGroup) return this.pipelines.set(JR, !1), console.error(`Lite: pipeline ${JR} failed`, GR), void VJ(this.device, "mesh", RR.kind, GR);
        RR.failed || (RR.failed = !0, console.error(`Lite: program ${RR.id} failed`, GR, yR.join("\n"), {
          program: RR.program,
          key: RR.key
        }), VJ(this.device, "mesh", RR.kind, GR, tR ? null : yR[0]))
      }
    }

    function oZ(RR) {
      var JR, GR;
      const yR = null === (JR = RR.Im) || void 0 === JR || null === (GR = JR.aShaderPackItem) || void 0 === GR ? void 0 : GR.x;
      return void 0 !== yR && 0 !== (yR & OJ.i)
    }
    var cZ = GR(53689),
      PZ = GR(53698),
      IZ = GR(53707),
      mZ = GR(53651);
    const zZ = [0, 3, 1, 4, 2, 5];

    function SZ(RR, JR, GR, yR, tR) {
      const uR = GR[0].width;
      try {
        return tR ? function(RR, JR, GR) {
          const yR = (0, mZ.c)(RR, GR, GR, 6);
          for (let tR = 0; tR < 6; tR++)(0, mZ.e)(RR, yR, tR, JR[zZ[tR]], {
            invertY: !1
          });
          return yR.texture
        }(RR, GR, uR) : function(RR, JR, GR, yR) {
          const tR = RR.createTexture({
            label: "sink-cube",
            size: {
              width: GR,
              height: GR,
              depthOrArrayLayers: 6
            },
            format: yR,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let uR = 0; uR < 6; uR++) RR.queue.copyExternalImageToTexture({
            source: JR[zZ[uR]]
          }, {
            texture: tR,
            origin: {
              x: 0,
              y: 0,
              z: uR
            }
          }, {
            width: GR,
            height: GR
          });
          return tR
        }(JR, GR, uR, 1 === yR ? "r8unorm" : "rgba8unorm")
      } finally {
        jZ(GR)
      }
    }

    function jZ(RR) {
      for (const JR of null !== RR && void 0 !== RR ? RR : []) null === JR || void 0 === JR || JR.close()
    }
    async function dZ(RR) {
      const JR = [],
        GR = [];
      if (await Promise.all(RR.map(((RR, yR) => (JR[yR] = null, RR.then((RR => {
          JR[yR] = RR
        }), (RR => {
          GR.push(RR)
        })))))), GR.length > 0) throw jZ(JR), GR[0];
      return JR
    }
    class EZ {
      constructor(RR) {
        this.hK = RR, this.starts = [], this.lengths = [], this.used = 0, RR > 0 && (this.starts.push(0), this.lengths.push(RR))
      }
      allocate(RR) {
        const {
          starts: JR,
          lengths: GR
        } = this;
        for (let yR = 0; yR < JR.length; yR++) {
          if (GR[yR] < RR) continue;
          const tR = JR[yR];
          return GR[yR] === RR ? (JR.splice(yR, 1), GR.splice(yR, 1)) : (JR[yR] += RR, GR[yR] -= RR), this.used += RR, tR
        }
        return -1
      }
      free(RR, JR) {
        this.used -= JR;
        const GR = Math.min(RR + JR, this.hK);
        GR > RR && this.release(RR, GR - RR)
      }
      grow(RR) {
        const JR = this.hK;
        this.hK = RR, this.release(JR, RR - JR)
      }
      truncate(RR) {
        const {
          starts: JR,
          lengths: GR
        } = this;
        for (let yR = JR.length - 1; yR >= 0 && JR[yR] + GR[yR] > RR; yR--) JR[yR] >= RR ? (JR.splice(yR, 1), GR.splice(yR, 1)) : GR[yR] = RR - JR[yR];
        this.hK = RR
      }
      release(RR, JR) {
        const {
          starts: GR,
          lengths: yR
        } = this;
        let tR = 0,
          uR = GR.length;
        for (; tR < uR;) {
          const JR = tR + uR >> 1;
          GR[JR] < RR ? tR = JR + 1 : uR = JR
        }
        const ZR = tR,
          qR = ZR > 0 && GR[ZR - 1] + yR[ZR - 1] === RR,
          iR = ZR < GR.length && RR + JR === GR[ZR];
        qR && iR ? (yR[ZR - 1] += JR + yR[ZR], GR.splice(ZR, 1), yR.splice(ZR, 1)) : qR ? yR[ZR - 1] += JR : iR ? (GR[ZR] = RR, yR[ZR] += JR) : (GR.splice(ZR, 0, RR), yR.splice(ZR, 0, JR))
      }
    }
    const YZ = 256;
    class kZ {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = RR, this.onReplaced = JR, this.mergeGap = GR, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.WL = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const tR = Math.max(YZ, Math.ceil(yR / YZ) * YZ);
        this.bytes = new Uint8Array(tR), this.words = new Uint32Array(this.bytes.buffer), this.WL = new EZ(tR / YZ)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(RR) {
        return Math.max(1, Math.ceil(RR / YZ)) * YZ
      }
      allocate(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RR;
        const yR = kZ.slotBytes(RR),
          tR = yR / YZ;
        let uR = this.WL.allocate(tR);
        uR < 0 && (this.grow(this.WL.hK + tR), uR = this.WL.allocate(tR));
        const ZR = uR * YZ;
        return this.growTo(ZR + Math.max(GR, yR)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, ZR, ZR + yR), JR && this.bytes.set(new Uint8Array(JR.buffer, JR.byteOffset, Math.min(JR.byteLength, yR)), ZR), this.markDirty(ZR, ZR + yR), ZR
      }
      growTo(RR) {
        const JR = Math.ceil(RR / YZ);
        JR > this.WL.hK && this.grow(JR)
      }
      free(RR, JR) {
        this.freed.push(RR, JR)
      }
      write(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (yR <= 0) return;
        yR <= 1024 && 0 === (3 & (RR | GR | yR)) ? this.copyWords(RR >> 2, JR.buffer, GR >> 2, yR >> 2) : this.bytes.set(new Uint8Array(JR.buffer, GR, yR), RR);
        let uR = RR + yR;
        if (tR) {
          const JR = RR + 4 * Math.ceil(yR / 4);
          this.bytes.fill(0, uR, JR), uR = JR
        }
        this.markDirty(RR, uR)
      }
      copyWords(RR, JR, GR, yR) {
        let tR = this.sourceWords.get(JR);
        tR || (tR = new Uint32Array(JR, 0, JR.byteLength >> 2), this.sourceWords.set(JR, tR));
        const uR = this.words;
        for (let ZR = 0; ZR < yR; ZR++) uR[RR + ZR] = tR[GR + ZR]
      }
      move(RR, JR, GR) {
        this.bytes.copyWithin(JR, RR, RR + GR), this.markDirty(JR, JR + GR)
      }
      flush() {
        for (const JR of this.retired) this.onReplaced(JR), JR.destroy();
        this.retired.length = 0;
        const RR = this.dirtyStarts.length;
        if (RR > 0) {
          const {
            dirtyStarts: JR,
            dirtyEnds: GR,
            order: yR
          } = this;
          yR.length = RR;
          for (let qR = 0; qR < RR; qR++) yR[qR] = qR;
          RR > 1 && yR.sort(((RR, GR) => JR[RR] - JR[GR]));
          const tR = this.mergeGap;
          let uR = JR[yR[0]],
            ZR = GR[yR[0]];
          for (let qR = 1; qR < RR; qR++) {
            const RR = yR[qR];
            JR[RR] - ZR <= tR ? ZR = Math.max(ZR, GR[RR]) : (this.send(uR, ZR), uR = JR[RR], ZR = GR[RR])
          }
          this.send(uR, ZR), JR.length = 0, GR.length = 0
        }
        this.holding = !1
      }
      XK() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const RR = this.freed;
        for (let JR = 0; JR < RR.length; JR += 2) this.WL.free(RR[JR] / YZ, RR[JR + 1] / YZ);
        RR.length = 0
      }
      send(RR, JR) {
        this.device.queue.writeBuffer(this.gpu, RR, this.bytes.buffer, RR, JR - RR);
        for (const GR of this.replaced) {
          const yR = Math.min(JR, GR.size);
          yR > RR && this.device.queue.writeBuffer(GR, RR, this.bytes.buffer, RR, yR - RR)
        }
      }
      markDirty(RR, JR) {
        RR &= -4, JR = JR + 3 & -4, this.holding ? (this.dirtyStarts.push(RR), this.dirtyEnds.push(JR)) : this.send(RR, JR)
      }
      grow(RR) {
        const JR = this.WL.hK,
          GR = Math.max(2 * JR, RR),
          yR = new Uint8Array(GR * YZ);
        yR.set(this.bytes);
        const tR = this.gpu;
        this.gpu = this.createGpu(yR.byteLength), this.bytes = yR, this.words = new Uint32Array(yR.buffer), this.WL.grow(GR), tR && (this.replaced.push(tR), this.onReplaced(tR)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, JR * YZ)
      }
      createGpu(RR) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: RR,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function QZ(RR) {
      return Array.isArray(RR) ? new Float32Array(RR) : RR
    }

    function FZ(RR, JR, GR, yR, tR) {
      const uR = YR(tR),
        ZR = Math.min(tR, yR.byteLength);
      if (uR === ZR && yR.byteOffset % 4 === 0) return void RR.queue.writeBuffer(JR, GR, yR.buffer, yR.byteOffset, uR);
      const qR = new Uint8Array(uR);
      qR.set(new Uint8Array(yR.buffer, yR.byteOffset, ZR)), RR.queue.writeBuffer(JR, GR, qR)
    }

    function TZ(RR, JR, GR) {
      const yR = "linear",
        tR = "nearest";
      let uR = tR,
        ZR = tR,
        qR = "nearest",
        iR = !JR;
      switch (RR) {
        case 11:
          uR = yR, ZR = yR;
          break;
        case 3:
          uR = yR, ZR = yR, qR = JR ? "linear" : "nearest";
          break;
        case 8:
          qR = JR ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          ZR = yR;
          break;
        case 6:
          ZR = yR, qR = JR ? "linear" : "nearest";
          break;
        case 7:
          ZR = yR, iR = !0;
          break;
        case 9:
          uR = yR;
          break;
        case 10:
          uR = yR, qR = JR ? "linear" : "nearest";
          break;
        case 2:
          uR = yR, ZR = yR, GR > 1 ? (qR = "linear", iR = !1) : iR = !0;
          break;
        case 12:
          uR = yR, iR = !0;
          break;
        default:
          iR = !0
      }
      return GR > 1 && !iR ? {
        magFilter: yR,
        minFilter: yR,
        mipmapFilter: "linear",
        maxAnisotropy: GR
      } : {
        magFilter: uR,
        minFilter: ZR,
        mipmapFilter: qR,
        ...iR ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function sZ(RR) {
      return 0 === RR ? "clamp-to-edge" : 2 === RR ? "mirror-repeat" : "repeat"
    }
    class hZ {
      constructor(RR, JR) {
        let {
          vertexArena: GR = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = RR, this.device = JR, this.buffers = new WeakMap, this.LRR = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = GR ? this.createArena() : null
      }
      createArena() {
        return new kZ(this.device, (RR => {
          var JR;
          null === (JR = this.onDestroy) || void 0 === JR || JR.call(this, RR), this.gpuBuffersVersion++
        }))
      }
      rebind(RR, JR) {
        this.engine = RR, this.device = JR, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const GR of this.liveUploads) GR.rebind();
        for (const GR of this.rebindWaiters.splice(0)) GR()
      }
      flushUploads() {
        var RR;
        null === (RR = this.arena) || void 0 === RR || RR.flush()
      }
      endUploadFrame() {
        var RR;
        null === (RR = this.arena) || void 0 === RR || RR.XK()
      }
      vertexBufferCreated(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GR ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(RR);
        const tR = QZ(JR);
        RR.hK = tR.byteLength, this.buffers.set(RR, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: GR && null !== this.arena,
          pending: tR,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: yR
        })
      }
      vertexBufferUpdated(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        const tR = this.buffers.get(RR);
        if (!tR) return;
        const uR = QZ(JR),
          ZR = void 0 === yR ? uR.byteLength : Math.min(yR, uR.byteLength);
        this.update(tR, uR, GR, ZR)
      }
      vertexBufferFloatsUpdated(RR, JR, GR, yR) {
        const tR = this.buffers.get(RR);
        if (!tR) return;
        const uR = GR * Float32Array.BYTES_PER_ELEMENT,
          ZR = (yR - GR) * Float32Array.BYTES_PER_ELEMENT;
        tR.slot >= 0 && ZR > 0 && uR + ZR <= tR.size ? this.writeSlot(tR, uR, JR, JR.byteOffset + uR, ZR, !1) : tR.gpu && ZR > 0 && uR + ZR <= tR.gpu.size ? this.device.queue.writeBuffer(tR.gpu, uR, JR.buffer, JR.byteOffset + uR, ZR) : this.update(tR, JR.subarray(GR, yR), uR, ZR)
      }
      indexBufferCreated(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(RR);
        const yR = function(RR) {
          if (RR instanceof Uint16Array || RR instanceof Uint32Array) return RR;
          for (let JR = 0; JR < RR.length; JR++)
            if (RR[JR] >= 65535) return new Uint32Array(RR);
          return new Uint16Array(RR)
        }(JR);
        RR.is32Bits = 4 === yR.BYTES_PER_ELEMENT, RR.hK = yR.byteLength, this.buffers.set(RR, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: yR,
          ownsPending: yR !== JR,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: GR
        })
      }
      bufferDeleted(RR) {
        const JR = this.buffers.get(RR);
        null !== JR && void 0 !== JR && JR.gpu ? (this.destroyBuffer(JR.gpu), this.gpuBuffersVersion++) : JR && JR.slot >= 0 && (this.arena.free(JR.slot, JR.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(RR)
      }
      update(RR, JR, GR, yR) {
        if (RR.slot >= 0) this.updateSlot(RR, JR, GR, yR);
        else if (RR.gpu) {
          if (GR + YR(yR) > RR.gpu.size) {
            const JR = this.device.createBuffer({
                label: RR.label,
                size: YR(Math.max(2 * RR.gpu.size, GR + yR)),
                usage: RR.usage | GPUBufferUsage.COPY_SRC
              }),
              tR = this.device.createCommandEncoder();
            tR.copyBufferToBuffer(RR.gpu, 0, JR, 0, RR.gpu.size), this.device.queue.submit([tR.finish()]), this.destroyBuffer(RR.gpu), this.gpuBuffersVersion++, RR.gpu = JR
          }
          FZ(this.device, RR.gpu, GR, JR, yR)
        } else {
          const uR = new Uint8Array(JR.buffer, JR.byteOffset, yR),
            ZR = RR.pending;
          if (ZR && RR.ownsPending && GR + yR <= ZR.byteLength) new Uint8Array(ZR.buffer, ZR.byteOffset, ZR.byteLength).set(uR, GR);
          else if (ZR && 0 === GR && yR === ZR.byteLength && JR.byteLength === yR) RR.pending = JR, RR.ownsPending = !1;
          else {
            var tR;
            const JR = new Uint8Array(Math.max(null !== (tR = null === ZR || void 0 === ZR ? void 0 : ZR.byteLength) && void 0 !== tR ? tR : 0, GR + yR));
            ZR && JR.set(new Uint8Array(ZR.buffer, ZR.byteOffset, ZR.byteLength)), JR.set(uR, GR), RR.pending = JR, RR.ownsPending = !0
          }
        }
      }
      updateSlot(RR, JR, GR, yR) {
        const tR = this.arena;
        GR + YR(yR) > RR.size && (RR.size = YR(Math.max(2 * RR.size, GR + yR)), tR.growTo(RR.slot + RR.size), this.gpuBuffersVersion++), 0 === yR ? this.writeSlot(RR, GR, Jq, 0, 4, !1) : this.writeSlot(RR, GR, JR, JR.byteOffset, yR, !0)
      }
      writeSlot(RR, JR, GR, yR, tR, uR) {
        const ZR = JR + (uR ? YR(tR) : tR);
        ZR > RR.slotBytes && this.moveSlot(RR, ZR), this.arena.write(RR.slot + JR, GR, yR, tR, uR)
      }
      moveSlot(RR, JR) {
        const GR = this.arena,
          yR = kZ.slotBytes(Math.max(JR, Math.min(2 * RR.slotBytes, RR.size))),
          tR = GR.allocate(yR, null, RR.size);
        GR.move(RR.slot, tR, RR.slotBytes), GR.free(RR.slot, RR.slotBytes), RR.slot = tR, RR.slotBytes = yR, this.gpuBuffersVersion++
      }
      cover(RR, JR) {
        const GR = this.buffers.get(RR);
        if (!GR || GR.slot < 0) return !1;
        const yR = Math.min(JR, GR.size);
        return !(yR <= GR.slotBytes) && (this.moveSlot(GR, yR), !0)
      }
      destroyBuffer(RR) {
        var JR;
        null === (JR = this.onDestroy) || void 0 === JR || JR.call(this, RR), RR.destroy()
      }
      gpuBuffer(RR) {
        const JR = this.buffers.get(RR);
        if (!JR) return null;
        if (JR.slot >= 0) return this.arena.buffer;
        if (JR.arena && JR.pending) {
          const RR = JR.pending,
            GR = this.arena;
          return JR.size = YR(RR.byteLength), JR.slotBytes = kZ.slotBytes(function(RR) {
            const JR = new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength);
            let GR = JR.length;
            if (RR.byteOffset % 4 === 0) {
              for (; GR % 4 !== 0 && 0 === JR[GR - 1];) GR--;
              if (GR % 4 === 0) {
                const JR = new Uint32Array(RR.buffer, RR.byteOffset, GR / 4);
                let yR = JR.length;
                for (; yR > 0 && 0 === JR[yR - 1];) yR--;
                GR = 4 * yR
              }
            }
            for (; GR > 0 && 0 === JR[GR - 1];) GR--;
            return GR
          }(RR)), JR.slot = GR.allocate(JR.slotBytes, RR, JR.size), JR.pending = null, GR.buffer
        }
        if (!JR.gpu && JR.pending) {
          const RR = JR.pending;
          JR.gpu = this.device.createBuffer({
            label: JR.label,
            size: YR(RR.byteLength),
            usage: JR.usage
          }), FZ(this.device, JR.gpu, 0, RR, RR.byteLength), JR.pending = null
        }
        return JR.gpu
      }
      gpuOffset(RR) {
        var JR, GR;
        const yR = null !== (JR = null === (GR = this.buffers.get(RR)) || void 0 === GR ? void 0 : GR.slot) && void 0 !== JR ? JR : -1;
        return yR < 0 ? 0 : yR
      }
      gpuEnd(RR) {
        var JR, GR;
        const yR = this.buffers.get(RR);
        return yR ? yR.slot >= 0 ? yR.slot + yR.size : null !== (JR = null === (GR = yR.gpu) || void 0 === GR ? void 0 : GR.size) && void 0 !== JR ? JR : 0 : 0
      }
      vertexInput(RR, JR, GR) {
        var yR, tR, uR, ZR;
        return null !== (yR = null !== (tR = GR && this.modelInput(GR, JR)) && void 0 !== tR ? tR : null === (uR = null !== (ZR = this.LRR.get(RR)) && void 0 !== ZR ? ZR : this.batchUploads.get(RR)) || void 0 === uR ? void 0 : uR.inputs[JR]) && void 0 !== yR ? yR : null
      }
      modelInput(RR, JR) {
        const GR = this.geometrySlot(RR);
        let yR = GR.inputs.get(JR);
        if (void 0 === yR) {
          const tR = RR.vertexAttributes.find((RR => RR.kind === JR));
          yR = tR ? new eJ(this.modelKey(GR, tR.data, !1), tR.offset, tR.stride, tR.components, !1, tR.glType, tR.isNormalized) : null, GR.inputs.set(JR, yR)
        }
        return yR
      }
      modelIndex(RR) {
        return RR.indexData && this.modelKey(this.geometrySlot(RR), RR.indexData, !0)
      }
      geometrySlot(RR) {
        var JR;
        let GR = RR.gpu[gR.e.lite];
        if ((null === (JR = GR) || void 0 === JR ? void 0 : JR.epoch) !== this.epoch) {
          const JR = new Map,
            yR = () => {
              for (const RR of JR.values()) this.bufferDeleted(RR)
            },
            tR = RR => {
              const GR = JR.get(RR);
              GR && this.vertexBufferUpdated(GR, RR)
            };
          GR = {
            keys: JR,
            inputs: new Map,
            release: yR,
            updated: tR,
            epoch: this.epoch
          }, RR.gpu[gR.e.lite] = GR
        }
        return GR
      }
      modelKey(RR, JR, GR) {
        let yR = RR.keys.get(JR);
        if (!yR) {
          if (GR) {
            const RR = {
              hK: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(RR, JR, "model-indices"), yR = RR
          } else yR = {
            hK: 0
          }, this.vertexBufferCreated(yR, JR, !1, "model-vertices");
          RR.keys.set(JR, yR)
        }
        return yR
      }
      indexFormat(RR) {
        return RR.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(RR, JR) {
        --RR.refs > 0 || (this.releaseTexture(RR), jZ(RR.images), null !== JR && this.textures.delete(JR))
      }
      load(RR, JR) {
        const {
          epoch: GR
        } = this, yR = JR.decoded = async function(RR) {
          if ("cube" === RR.kind) return async function(RR) {
            if (6 !== RR.length) throw new Error(`${RR.length} files where six faces were expected`);
            const JR = await dZ(RR.map((RR => hR(RR)))),
              GR = JR[0].width;
            return dZ(JR.map((async RR => {
              if (RR.width === GR && RR.height === GR) return RR;
              try {
                return await createImageBitmap(RR, {
                  ...TR,
                  resizeWidth: GR,
                  resizeHeight: GR
                })
              } finally {
                RR.close()
              }
            })))
          }(RR.files);
          if ("data" === RR.kind && RR.data) return [await createImageBitmap(new Blob([RR.data]), TR)];
          return [await hR(Rq(RR))]
        }(RR.source).then((RR => {
          0 === JR.refs || GR !== this.epoch ? jZ(RR) : JR.images = RR
        }));
        this.track(JR, Rq(RR.source), yR, (() => {
          JR.wanted && !JR.failed && JR.refs > 0 && this.upload(RR, JR)
        }))
      }
      canvasUpdated(RR, JR, GR) {
        const {
          state: yR
        } = this.textureSlot(RR);
        yR.dynamicSource = {
          invertY: JR,
          premultiplied: GR
        }, yR.dynamic && this.pushDynamic(RR.source, yR)
      }
      async atlasArrays(RR) {
        const {
          device: JR,
          epoch: GR
        } = this;
        let yR;
        try {
          yR = await JJ(JR, RR)
        } catch (uR) {
          if (GR === this.epoch) {
            if (!fJ(JR)) throw uR;
            await new Promise((RR => {
              this.rebindWaiters.push(RR)
            }))
          }
          return this.atlasArrays(RR)
        }
        if (yR.forEach(((JR, GR) => {
            this.atlasSources.has(JR) || this.atlasSources.set(JR, {
              sources: RR,
              index: GR,
              stride: yR[0].layers
            })
          })), GR !== this.epoch) return yR;
        const tR = (0, cZ.c)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const ZR of yR) this.atlasBindings.has(ZR) || this.atlasBindings.set(ZR, {
          view: ZR.texture.createView({
            dimension: "2d-array"
          }),
          sampler: tR
        });
        return yR
      }
      boundTexture(RR) {
        const JR = this.atlasBindings.get(RR);
        if (JR) return JR;
        const GR = this.atlasSources.get(RR);
        if (GR) return this.rebuildAtlas(RR, GR), null;
        const yR = RR;
        if (yR.released) return null;
        const tR = this.textureSlot(yR, !0),
          {
            state: uR
          } = tR;
        if (!uR.view && (uR.wanted = !0, uR.loading || uR.failed || this.upload(yR, uR), !uR.view)) return null;
        const ZR = this.chosenSampler(yR, tR),
          qR = tR.bound;
        return qR && qR.view === uR.view && qR.sampler === ZR ? qR : (tR.bound = {
          view: uR.view,
          sampler: ZR
        }, tR.bound)
      }
      rebuildAtlas(RR, JR) {
        let {
          sources: GR,
          index: yR,
          stride: tR
        } = JR;
        if (this.atlasRebuilds.has(RR)) return;
        this.atlasRebuilds.add(RR);
        const {
          epoch: uR
        } = this;
        this.atlasArrays(GR).then((JR => {
          JR[0].layers === tR && JR[yR] ? uR === this.epoch && this.atlasBindings.set(RR, this.atlasBindings.get(JR[yR])) : console.error(`Lite: the new device splits the atlas ${sR(GR.urls[0])} into other arrays than its materials read`)
        }), (RR => {
          console.error(`Lite: could not build the atlas ${sR(GR.urls[0])} again on a new device`, RR)
        }))
      }
      textureLoaded(RR) {
        var JR, GR;
        return null !== (JR = null === (GR = this.heldSlot(RR)) || void 0 === GR ? void 0 : GR.state.decoded) && void 0 !== JR ? JR : null
      }
      textureFailed(RR) {
        var JR;
        return !0 === (null === (JR = this.heldSlot(RR)) || void 0 === JR ? void 0 : JR.state.failed)
      }
      heldSlot(RR) {
        const JR = RR.gpu[gR.e.lite];
        return (null === JR || void 0 === JR ? void 0 : JR.epoch) === this.epoch ? JR : void 0
      }
      chosenSampler(RR, JR) {
        const {
          samplingMode: GR,
          wrapU: yR,
          wrapV: tR
        } = RR.sampler, uR = JR.state.hasMips, ZR = function(RR, JR) {
          const {
            bilinear: GR,
            trilinear: yR
          } = gR.f;
          return !JR && RR !== GR || 11 !== RR && RR !== yR && RR !== GR ? 1 : 4
        }(GR, uR), qR = JR.sampler;
        if (qR && qR.samplingMode === GR && qR.hasMips === uR && qR.anisotropy === ZR && qR.wrapU === yR && qR.wrapV === tR) return qR.sampler;
        const iR = this.samplerFor(GR, uR, ZR, yR, tR);
        return JR.sampler = {
          samplingMode: GR,
          hasMips: uR,
          anisotropy: ZR,
          wrapU: yR,
          wrapV: tR,
          sampler: iR
        }, iR
      }
      releaseTexture(RR) {
        var JR, GR;
        RR.view && (null === (GR = this.onDestroy) || void 0 === GR || GR.call(this, RR.view));
        null === (JR = RR.destroy) || void 0 === JR || JR.call(RR)
      }
      textureSlot(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = RR.gpu[gR.e.lite];
        if ((null === GR || void 0 === GR ? void 0 : GR.epoch) === this.epoch) return GR;
        const yR = function(RR) {
          let {
            source: JR,
            sampler: GR
          } = RR;
          return "canvas" === JR.kind ? null : `${JR.kind}|${Rq(JR)}|${GR.noMipmap}|${GR.samplingMode}|${GR.invertY}`
        }(RR);
        let tR = null === yR ? void 0 : this.textures.get(yR);
        var uR;
        tR || (tR = {
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
          dynamicSource: null !== (uR = null === GR || void 0 === GR ? void 0 : GR.state.dynamicSource) && void 0 !== uR ? uR : null
        }, null !== yR && (this.textures.set(yR, tR), this.load(RR, tR), JR && !GR && this.firstBindDecodes++));
        tR.refs++;
        const ZR = tR,
          {
            epoch: qR
          } = this,
          iR = {
            state: tR,
            bound: null,
            sampler: null,
            release: () => {
              qR === this.epoch && this.releaseSlot(ZR, yR)
            },
            epoch: qR
          };
        return RR.gpu[gR.e.lite] = iR, iR
      }
      samplerFor(RR, JR, GR, yR, tR) {
        const uR = `${RR}|${JR}|${GR}|${yR}|${tR}`;
        let ZR = this.samplers.get(uR);
        if (!ZR) {
          const qR = {
            ...TZ(RR, JR, GR),
            addressModeU: sZ(yR),
            addressModeV: sZ(tR)
          };
          ZR = (0, cZ.c)(this.engine, qR), this.samplers.set(uR, ZR)
        }
        return ZR
      }
      upload(RR, JR) {
        const {
          source: GR,
          sampler: yR
        } = RR;
        JR.hasMips = !yR.noMipmap, "canvas" === GR.kind ? this.createDynamic(GR, JR) : "cube" === GR.kind ? this.uploadCube(JR, GR.luminance) : this.uploadImage(JR, !0 === yR.invertY, GR.url)
      }
      uploadImage(RR, JR, GR) {
        const [yR] = RR.images;
        RR.images = null;
        const {
          epoch: tR
        } = this, uR = (0, PZ.c)(this.engine, yR, {
          mipMaps: RR.hasMips,
          invertY: JR,
          srgb: !1
        }).then((JR => {
          yR.close(), 0 !== RR.refs && tR === this.epoch ? (RR.view = JR.view, RR.destroy = JR.texture.destroy.bind(JR.texture)) : JR.texture.destroy()
        }));
        this.track(RR, GR, uR)
      }
      track(RR, JR, GR, yR) {
        const {
          epoch: tR
        } = this;
        RR.loading = !0, this.pending++, GR.catch((GR => {
          tR === this.epoch && (RR.failed = !0, console.warn(`Lite: could not load texture ${sR(JR)}`, GR))
        })).finally((() => {
          tR === this.epoch && (RR.loading = !1, this.pending--, null === yR || void 0 === yR || yR())
        }))
      }
      uploadCube(RR, JR) {
        const GR = RR.images;
        RR.images = null;
        const yR = SZ(this.engine, this.device, GR, (0, gR.w)(JR), RR.hasMips);
        RR.view = yR.createView({
          dimension: "cube"
        }), RR.destroy = () => {
          yR.destroy()
        }
      }
      createDynamic(RR, JR) {
        const {
          canvas: GR
        } = RR, yR = (0, IZ.e)(this.engine, Math.max(1, GR.width), Math.max(1, GR.height), {
          mipMaps: JR.hasMips,
          srgb: !1
        });
        JR.dynamic = yR, JR.view = yR.view, JR.destroy = () => {
          yR.texture.destroy()
        }, this.pushDynamic(RR, JR)
      }
      pushDynamic(RR, JR) {
        const GR = JR.dynamicSource,
          yR = JR.dynamic,
          {
            canvas: tR
          } = RR;
        if (GR && yR && 0 !== tR.width && 0 !== tR.height) return tR.width !== yR.width || tR.height !== yR.height ? (this.releaseTexture(JR), JR.dynamic = null, JR.view = null, void this.createDynamic(RR, JR)) : void(0, IZ.g)(this.engine, yR, tR, {
          invertY: GR.invertY,
          premultiplyAlpha: GR.premultiplied
        })
      }
    }

    function Rq(RR) {
      return "cube" === RR.kind ? RR.rootUrl : "canvas" === RR.kind ? "canvas" : RR.url
    }
    const Jq = new Uint8Array(4);
    var Gq = GR(39974);

    function yq(RR) {
      const JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      RR._colorAttachment.storeOp = RR._targetSignature._sampleCount > 1 ? JR : "store";
      const GR = RR._renderPassDescriptor.depthStencilAttachment;
      GR && (GR.depthStoreOp = JR, GR.stencilStoreOp && (GR.stencilStoreOp = JR))
    }
    var tq = GR(38933),
      uq = GR(38433),
      Zq = GR(38516),
      qq = GR(40930);
    const iq = new Float64Array([1, 1, 1]),
      fq = new Float64Array([0, 1, 0]),
      Vq = new Float64Array(4),
      Kq = new Float32Array(16),
      wq = new Float64Array(3),
      rq = new Float64Array(4);

    function eq(RR, JR, GR) {
      RR.fov = JR.fov, RR.near = JR.near, RR.far = JR.far, RR.renderWidth = GR.renderWidth, RR.renderHeight = GR.renderHeight, (0, Zq.s)(JR.holderRotation, 0, Vq, 0), (0, Zq.b)(iq, 0, Vq, 0, JR.holderPosition, 0, Kq);
      const yR = JR.y5;
      wq[0] = yR[0], wq[1] = yR[1], wq[2] = yR[2] + 1;
      const tR = RR.viewMatrix;
      (0, Zq.j)(yR, wq, fq, tR), (0, Zq.g)(tR, 0, tR), (0, Zq.n)(tR, Kq, 0, tR), (0, Zq.g)(tR, 0, tR);
      const uR = RR.worldMatrix;
      (0, Zq.g)(tR, 0, uR), RR.eye[0] = uR[12], RR.eye[1] = uR[13], RR.eye[2] = uR[14], rq[0] = RR.fov, rq[1] = RR.renderWidth / RR.renderHeight, rq[2] = RR.near, rq[3] = RR.far, (0, Zq.q)(rq, RR.projectionMatrix), (0, Zq.n)(tR, RR.projectionMatrix, 0, RR.viewProjectionMatrix), (0, qq.f)(RR.viewProjectionMatrix, RR.frustum)
    }

    function aq(RR, JR) {
      let GR = RR.frustumPlanes;
      GR || (GR = RR.frustumPlanes = Array.from({
        length: 6
      }, (() => new tq.c(0, 0, 0, 0))));
      for (let yR = 0; yR < 6; yR++) {
        const RR = GR[yR].normal;
        RR._x = JR[4 * yR], RR._y = JR[4 * yR + 1], RR._z = JR[4 * yR + 2], RR._isDirty = !0, GR[yR].d = JR[4 * yR + 3]
      }
    }

    function Lq(RR, JR) {
      const GR = JR.clearColor;
      RR.clearColour[0] = GR.r, RR.clearColour[1] = GR.g, RR.clearColour[2] = GR.b, RR.clearColour[3] = GR.a;
      const yR = JR.ambientColor;
      RR.ambientColour[0] = yR.r, RR.ambientColour[1] = yR.g, RR.ambientColour[2] = yR.b, RR.animationRatio = JR.animationRatio, RR.frameId = JR.frameId, RR.version++
    }

    function nq(RR) {
      const JR = RR.model.view;
      return JR.animTick = (0, uq.f)(), JR.timeMs = performance.now(), Lq(JR, RR.tL), RR.model.update(JR.frameId), JR
    }

    function Uq(RR) {
      const JR = RR.tL,
        {
          view: GR,
          Z2: yR
        } = RR.model;
      return eq(GR, yR, JR.ke()), JR.onBeforeRenderObservable.notifyObservers(JR), aq(JR, GR.frustum), JR.onBeforeCameraRenderObservable.notifyObservers(JR.activeCamera), nq(RR)
    }
    var Wq = GR(38477),
      Aq = GR(38608),
      Cq = GR(38979);

    function Xq(RR) {
      var JR, GR;
      const yR = (0, lR.bb)(RR);
      if (!yR || yR.diffuseTexture && (0, Cq.h)(RR)) return null;
      const tR = null === (JR = (0, lR.E)(yR, MR.j.name)) || void 0 === JR ? void 0 : JR.state,
        uR = null === (GR = (0, lR.E)(yR, hu.c.name)) || void 0 === GR ? void 0 : GR.state,
        ZR = new Float32Array(16);
      return function(RR, JR, GR, yR) {
        var tR, uR;
        const ZR = Hy;
        yR.set(RR.diffuseColor, ZR.diffuse), yR[ZR.diffuse + 3] = RR.alpha, yR.set(RR.ambientColor, ZR.ambientAndCutoff), yR[ZR.ambientAndCutoff + 3] = RR.alphaCutOff, yR.set(RR.emissiveColor, ZR.emissiveAndLevel), yR[ZR.emissiveAndLevel + 3] = null !== (tR = null === (uR = RR.diffuseTexture) || void 0 === uR ? void 0 : uR.level) && void 0 !== tR ? tR : 1, null !== JR && void 0 !== JR && JR.animDataPerTex ? (yR[ZR.anim + 1] = uq.d, yR[ZR.anim + 2] = JR.animDataPerTex.length / 3 - 1) : GR && (yR[ZR.anim + 1] = GR.numAnimStates, yR[ZR.anim + 2] = GR.ticksPerAnimState)
      }(yR, tR, uR, ZR), {
        model: yR,
        atlas: tR,
        texture: tR ? "atlas" : yR.diffuseTexture ? "single" : "none",
        animated: tR ? !!tR.animDataPerTex : !!uR,
        liquid: (0, Cq.k)(RR),
        customRenderMat: (0, Cq.h)(RR),
        uniformData: ZR
      }
    }
    var Mq = GR(4015);
    class Bq {
      constructor(RR) {
        this.units = RR, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var RR;
        this.buffer.destroy(), null === (RR = this.twin) || void 0 === RR || RR.destroy()
      }
    }
    class lq {
      constructor(RR, JR) {
        this.arena = RR, this.WL = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.WL = new EZ(JR);
        const GR = new Bq(JR);
        GR.buffer = this.createBuffer(GR, !1), this.backings.push(GR), this.refresh()
      }
      get hK() {
        return this.WL.hK
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
        let RR = 0;
        for (const JR of this.backings) RR += JR.units * (this.arena.unitBytes + (JR.twin ? this.arena.twinUnitBytes : 0));
        return RR
      }
      holds(RR) {
        return RR.start + RR.length <= this.usable
      }
      lost(RR) {
        return this.dropped || RR.start + RR.length > this.hK
      }
      write(RR, JR) {
        const {
          device: GR,
          unitBytes: yR
        } = this.arena;
        for (const tR of this.backings) {
          const uR = (tR.units - RR.start) * yR;
          uR > 0 && GR.queue.writeBuffer(tR.buffer, RR.start * yR, JR, 0, Math.min(JR.byteLength, uR))
        }
      }
      writeLight(RR, JR) {
        const {
          device: GR,
          twinUnitBytes: yR,
          verticesPerUnit: tR
        } = this.arena, {
          light: uR,
          count: ZR
        } = this.arena.twinLight(JR, Math.min(JR.length, RR.length * tR));
        for (const qR of this.backings) {
          qR.twin || (qR.twin = this.createBuffer(qR, !0));
          const JR = (qR.units - RR.start) * tR;
          JR > 0 && GR.queue.writeBuffer(qR.twin, RR.start * yR, uR, 0, Math.min(ZR, JR))
        }
      }
      grow(RR) {
        this.arena.assertNotDrawing();
        const {
          device: JR,
          unitBytes: GR,
          label: yR
        } = this.arena, tR = this.backings[this.backings.length - 1], uR = new Bq(RR), ZR = JR.createCommandEncoder({
          label: `${yR}-grow`
        });
        uR.buffer = this.createBuffer(uR, !1), ZR.copyBufferToBuffer(tR.buffer, 0, uR.buffer, 0, tR.units * GR), tR.twin && (uR.twin = this.createBuffer(uR, !0), ZR.copyBufferToBuffer(tR.twin, 0, uR.twin, 0, tR.units * this.arena.twinUnitBytes)), JR.queue.submit([ZR.finish()]), this.backings.push(uR), this.WL.grow(RR)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const RR of this.backings) RR.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(RR, JR) {
        const {
          device: GR,
          unitBytes: yR,
          twinUnitBytes: tR,
          usage: uR,
          label: ZR
        } = this.arena;
        GR.pushErrorScope("out-of-memory");
        const qR = GR.createBuffer({
          label: JR ? `${ZR}-light` : ZR,
          size: RR.units * (JR ? tR : yR),
          usage: (JR ? this.arena.twinUsage : uR) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, GR.popErrorScope().then((GR => {
          this.arena.awaitingVerdict--, this.settle(RR, JR, !GR, !0)
        }), (GR => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${ZR} buffer, taken as failed: ${String(GR)}`), this.settle(RR, JR, !1, !1)
        })), qR
      }
      settle(RR, JR, GR, yR) {
        const tR = this.backings.indexOf(RR);
        if (!(this.dropped || tR < 0)) {
          if (!GR) {
            if (yR && this.arena.ranOutOfMemory(RR.units, RR.units * (JR ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === tR) return void this.drop();
            for (const RR of this.backings.splice(tR)) RR.destroy();
            return this.WL.truncate(this.backings[tR - 1].units), this.growable = !1, void this.promote()
          }
          JR ? RR.twinReady = !0 : (RR.bufferReady = !0, this.arena.allocatedBuffer(RR.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: RR
        } = this;
        let JR = 0;
        for (; JR + 1 < RR.length && RR[JR].ready && RR[JR + 1].ready;) JR++;
        for (const GR of RR.splice(0, JR)) GR.destroy();
        this.refresh()
      }
      refresh() {
        const RR = this.backings[0];
        this.buffer = RR.buffer, this.twin = RR.twinReady ? RR.twin : null, this.usable = !this.dropped && RR.bufferReady ? RR.units : 0
      }
    }
    class pq {
      constructor(RR, JR, GR, yR) {
        let {
          verticesPerUnit: tR = 1,
          twinUsage: uR = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = RR, this.unitBytes = JR, this.usage = GR, this.label = yR, this.pages = [], this.CK = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, xJ.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), JR % 4 !== 0) throw new Error(`${yR}: ${JR}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = tR, this.twinUsage = uR, this.twinValueBytes = tR > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * tR
      }
      twinLight(RR, JR) {
        if (4 === this.twinValueBytes) return this.widened.length < JR && (this.widened = new Float32Array(Math.max(JR, 2 * this.widened.length))), this.widened.set(RR.subarray(0, JR)), {
          light: this.widened,
          count: JR
        };
        const GR = JR % this.verticesPerUnit;
        if (0 === GR) return {
          light: RR,
          count: JR
        };
        const yR = JR - GR + this.verticesPerUnit;
        return this.padded.length < yR && (this.padded = new Uint16Array(Math.max(yR, 2 * this.padded.length))), this.padded.set(RR.subarray(0, JR)), this.padded.fill(0, JR, yR), {
          light: this.padded,
          count: yR
        }
      }
      allocate(RR) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), RR > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const tR of this.pages) {
          const JR = tR.WL.allocate(RR);
          if (JR >= 0) return {
            page: tR,
            start: JR,
            length: RR
          }
        }
        const JR = this.pages[this.pages.length - 1];
        if (null !== JR && void 0 !== JR && JR.canGrow) {
          const GR = Math.min(this.ceiling, Math.max(2 * JR.hK, JR.hK + RR));
          if (GR - JR.hK >= RR) return JR.grow(GR), {
            page: JR,
            start: JR.WL.allocate(RR),
            length: RR
          }
        }
        JR && JR !== this.pages[0] && 0 === JR.WL.used && JR.drop();
        const GR = Math.floor(1048576 / this.unitBytes),
          yR = new lq(this, Math.max(RR, Math.min(this.ceiling, GR)));
        return this.pages.push(yR), {
          page: yR,
          start: yR.WL.allocate(RR),
          length: RR
        }
      }
      free(RR) {
        this.assertNotDrawing();
        const {
          page: JR
        } = RR;
        JR.WL.free(RR.start, RR.length), 0 === JR.WL.used && JR !== this.pages[0] && JR !== this.pages[this.pages.length - 1] && JR.drop()
      }
      retire() {
        for (const RR of this.pages) RR.retire()
      }
      remove(RR) {
        const JR = this.pages.indexOf(RR);
        JR >= 0 && this.pages.splice(JR, 1)
      }
      ranOutOfMemory(RR, JR) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${JR}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, RR), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, RR) / 2));
        const GR = performance.now();
        GR >= this.shortageUntil && (this.forgetFailedAt = GR + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = GR + 1e3)
      }
      allocatedBuffer(RR) {
        RR >= this.failed && (this.failed = 1 / 0);
        const JR = Math.min(2 * RR, Math.floor((RR + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, JR))
      }
      stats() {
        let RR = 0,
          JR = 0,
          GR = 0,
          yR = 0;
        for (const tR of this.pages) RR += tR.hK, JR += tR.WL.used, GR += tR.hasTwin ? tR.hK * this.twinUnitBytes : 0, yR += tR.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: RR * this.unitBytes,
          usedBytes: JR * this.unitBytes,
          twinBytes: GR,
          allocatedBytes: yR
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: RR,
          maxStorageBufferBindingSize: JR
        } = this.device.limits;
        let GR = Math.floor(Math.min(67108864, RR) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (GR = Math.min(GR, Math.floor(JR / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (GR = Math.min(GR, Math.floor(JR / this.twinUnitBytes))), GR
      }
    }
    const gq = 16383;

    function bq(RR, JR, GR, yR, tR) {
      let uR = 0;
      for (let ZR = GR; ZR < yR; ZR += gq) RR.drawIndexed(6 * Math.min(gq, yR - ZR), 1, 0, JR + 4 * ZR, tR), uR++;
      return uR
    }
    class vq {
      constructor(RR, JR) {
        this.recordsGroup = JR, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const GR = kJ.e.strideWithoutAtlas;
        this.vertexArena = new pq(RR, GR, GPUBufferUsage.VERTEX, `terrain-vertices-${GR}`), this.quadArena = new pq(RR, Aq.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const yR = (0, QJ.g)(new Uint16Array(98298), gq);
        this.quadPattern = RR.createBuffer({
          label: "terrain-quad-pattern",
          size: yR.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), RR.queue.writeBuffer(this.quadPattern, 0, yR)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(RR, JR) {
        const GR = JR.packedVertices,
          yR = GR ? this.quadArena.allocate(RR.faceCount) : this.vertexArena.allocate(RR.vertexCount);
        if (!yR) return !1;
        RR.vertices = yR;
        const tR = GR ? new Uint8Array(GR.buffer, GR.byteOffset, GR.byteLength) : new Uint8Array(JR.vertices);
        return yR.page.write(yR, tR), !0
      }
      setLight(RR, JR) {
        const {
          vertices: GR
        } = RR;
        GR && 0 !== JR.length && GR.page.live && (JR.length < RR.vertexCount ? GR.page.arena.warnOnce("shortLight", `a part's ${JR.length} light values are fewer than its ${RR.vertexCount} vertices, so its light is left as it was`) : (GR.page.writeLight(GR, JR), RR.lit = !0))
      }
      lightFullSky(RR, JR) {
        this.fullSky.length < JR && (this.fullSky = new Uint16Array(Math.max(JR, 4096)).fill(Mq.k));
        for (const GR of RR) {
          const RR = GR.vertices;
          RR.page.live && (RR.page.writeLight(RR, this.fullSky), GR.lit = !0)
        }
      }
      backed(RR) {
        const {
          vertices: JR
        } = RR;
        return !!JR && JR.page.holds(JR)
      }
      lost(RR) {
        const {
          vertices: JR
        } = RR;
        return !!JR && JR.page.lost(JR)
      }
      release(RR) {
        RR.vertices && RR.vertices.page.arena.free(RR.vertices), RR.vertices = null, RR.lit = !1
      }
      setDrawing(RR) {
        this.forgetBound()
      }
      draw(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JR.faceCount;
        const uR = JR.vertices,
          ZR = uR.page,
          qR = GR ? ZR.twin : null;
        if (!ZR.holds(uR) || GR && !qR) return 0;
        const {
          verticesPerUnit: iR
        } = ZR.arena;
        let fR = uR.start * iR;
        this.boundPattern || (RR.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const VR = yR + tR;
        if (iR > 1) return ZR.buffer === this.boundRecords && qR === this.boundRecordsLight || (RR.setBindGroup(1, this.recordsGroup(ZR.buffer, qR)), this.boundRecords = ZR.buffer, this.boundRecordsLight = qR), bq(RR, fR, yR, VR, JR.slot);
        ZR.buffer !== this.boundVertices && (RR.setVertexBuffer(0, ZR.buffer), this.boundVertices = ZR.buffer), qR && qR !== this.boundLight && (RR.setVertexBuffer(1, qR), this.boundLight = qR);
        const KR = JR.faceCount;
        return VR <= KR ? bq(RR, fR, yR, VR, JR.slot) : bq(RR, fR, yR, KR, JR.slot) + bq(RR, fR, Math.max(yR, KR) - KR, VR - KR, JR.slot)
      }
      get buffersAwaitingVerdict() {
        let RR = 0;
        for (const JR of this.arenas()) RR += JR.awaitingVerdict;
        return RR
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Oq {
      constructor(RR, JR, GR, yR) {
        this.device = RR, this.splitBefore = JR, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = RR.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const tR = RR.createShaderModule({
          label: "scene-depth-copy",
          code: (uR = GR._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${uR?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var uR;
        RR.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: tR,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: tR,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((RR => {
          this.pipeline = RR, this.building = !1
        }), (RR => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", RR)
        })), GR._executeWithTransmission = () => this.execute(GR, yR)
      }
      get compiling() {
        return this.building
      }
      setWanted(RR) {
        this.wanted = RR
      }
      setPlanes(RR, JR) {
        RR === this.near && JR === this.far || (this.near = RR, this.far = JR, this.unproject[0] = RR / (JR - RR), this.unproject[1] = JR * RR / (JR - RR), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var RR, JR;
        return null !== (RR = null === (JR = this.copy) || void 0 === JR ? void 0 : JR.view) && void 0 !== RR ? RR : null
      }
      execute(RR, JR) {
        var GR;
        null === (GR = this.retired) || void 0 === GR || GR.destroy(), this.retired = null;
        const yR = XJ(JR),
          tR = RR._transparentBindings,
          uR = this.wanted && this.pipeline ? this.splitIndex(tR) : -1,
          ZR = RR._colorAttachment,
          qR = ZR.resolveTarget;
        uR >= 0 && (ZR.resolveTarget = void 0, yq(RR, !0));
        let iR = yR.beginRenderPass(RR._renderPassDescriptor);
        iR.setBindGroup(0, RR._sceneBG);
        let fR = this.drawList(iR, JR, RR._opaqueBindings, 0, RR._opaqueBindings.length);
        if (fR += this.drawList(iR, JR, RR._directBindings, 0, RR._directBindings.length), fR += this.drawList(iR, JR, tR, 0, uR >= 0 ? uR : tR.length), iR.end(), uR < 0) return fR;
        yq(RR);
        const VR = RR._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: KR,
            stencilLoadOp: wR
          } = VR,
          rR = ZR.loadOp;
        ZR.resolveTarget = qR;
        try {
          this.copyDepth(yR, RR), ZR.loadOp = "load", VR.depthLoadOp = "load", wR && (VR.stencilLoadOp = "load"), iR = yR.beginRenderPass(RR._renderPassDescriptor), iR.setBindGroup(0, RR._sceneBG), fR += this.drawList(iR, JR, tR, uR, tR.length), iR.end()
        } finally {
          ZR.loadOp = rR, VR.depthLoadOp = KR, VR.stencilLoadOp = wR
        }
        return fR
      }
      splitIndex(RR) {
        for (let JR = 0; JR < RR.length; JR++)
          if (RR[JR].renderable === this.splitBefore) return JR;
        return -1
      }
      drawList(RR, JR, GR, yR, tR) {
        let uR = null,
          ZR = 0;
        for (let qR = yR; qR < tR; qR++) {
          const yR = GR[qR],
            tR = yR.renderable.mesh;
          tR && !1 === tR.visible || (yR.pipeline !== uR && (RR.setPipeline(yR.pipeline), uR = yR.pipeline), ZR += yR.draw(RR, JR))
        }
        return ZR
      }
      copyDepth(RR, JR) {
        var GR, yR;
        const tR = (null !== (GR = JR._config.depth) && void 0 !== GR ? GR : JR._config.rt)._depthTexture,
          uR = (null === (yR = this.copy) || void 0 === yR ? void 0 : yR.source) === tR ? this.copy : this.remakeCopy(tR),
          ZR = RR.beginRenderPass(uR.pass);
        ZR.setPipeline(this.pipeline), ZR.setBindGroup(0, uR.bindGroup), ZR.draw(3), ZR.end()
      }
      remakeCopy(RR) {
        var JR, GR;
        this.retired = null !== (JR = null === (GR = this.copy) || void 0 === GR ? void 0 : GR.texture) && void 0 !== JR ? JR : null;
        const yR = this.device.createTexture({
            label: "scene-depth",
            size: [RR.width, RR.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          tR = yR.createView(),
          uR = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: RR.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          ZR = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: tR,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: RR,
          texture: yR,
          view: tR,
          bindGroup: uR,
          pass: ZR
        }, this.copy
      }
    }
    const xq = "rgba8unorm";

    function Nq(RR) {
      return RR ? 15 : 1
    }
    class Dq {
      constructor(RR, JR, GR, yR) {
        this.device = RR, this.terrain = yR, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = JR._targetSignature._sampleCount > 1, this.cameraBuffer = RR.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = RR.createBindGroupLayout({
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
        const tR = RR.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = RR.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: tR,
          entries: []
        });
        const uR = RR.createShaderModule({
          label: "sun-shadow-mask",
          code: (ZR = this.edge, `${(0,FJ.C)()}${qy({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${ZR?FG:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Nq(ZR)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${ZR?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var ZR;
        RR.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: RR.createPipelineLayout({
            bindGroupLayouts: [this.layout, tR, tR, du(RR, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: uR,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: uR,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((RR => {
          this.pipeline = RR, this.building = !1
        }), (RR => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", RR)
        }));
        const qR = JR._executeWithTransmission;
        JR._executeWithTransmission = RR => this.execute(JR, GR, (() => qR ? qR(RR) : function(RR, JR) {
          const GR = XJ(JR).beginRenderPass(RR._renderPassDescriptor);
          GR.setBindGroup(0, RR._sceneBG);
          let yR = Hq(GR, JR, RR._opaqueBindings);
          return yR += Hq(GR, JR, RR._directBindings), yR += Hq(GR, JR, RR._transparentBindings), GR.end(), yR
        }(JR, GR)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var RR, JR;
        return null !== (RR = null === (JR = this.targets) || void 0 === JR ? void 0 : JR.maskView) && void 0 !== RR ? RR : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(RR) {
        ! function(RR, JR) {
          const GR = RR.worldMatrix,
            yR = RR.projectionMatrix,
            tR = 1 / yR[0],
            uR = 1 / yR[5],
            ZR = RR.far * RR.near / (RR.far - RR.near);
          JR[0] = RR.eye[0], JR[1] = RR.eye[1], JR[2] = RR.eye[2], JR[3] = 2 ** -23 / ZR, JR[4] = GR[0] * tR, JR[5] = GR[1] * tR, JR[6] = GR[2] * tR, JR[7] = ZR, JR[8] = GR[4] * uR, JR[9] = GR[5] * uR, JR[10] = GR[6] * uR, JR[11] = RR.near / (RR.far - RR.near), JR[12] = GR[8], JR[13] = GR[9], JR[14] = GR[10], JR[15] = 0
        }(RR, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(RR, JR, GR) {
        if (this.retire(), !this.terrain.readsMask) return GR();
        const yR = this.targetsFor(RR),
          tR = XJ(JR),
          uR = RR._renderPassDescriptor.depthStencilAttachment;
        this.edge || (yR.prepass.depthStencilAttachment.view = uR.view);
        const ZR = this.terrain.drawPrepass(tR, yR.prepass, RR._sceneBG);
        if (0 === ZR) return GR();
        if (this.trace(tR, yR), this.edge) return ZR + 1 + GR();
        const {
          depthLoadOp: qR,
          stencilLoadOp: iR
        } = uR;
        uR.depthLoadOp = "load", iR && (uR.stencilLoadOp = "load");
        try {
          return ZR + 1 + GR()
        } finally {
          uR.depthLoadOp = qR, uR.stencilLoadOp = iR
        }
      }
      trace(RR, JR) {
        const GR = this.terrain.sunShadowGroup(),
          yR = RR.beginRenderPass(JR.trace);
        this.pipeline && GR && (yR.setPipeline(this.pipeline), yR.setBindGroup(0, JR.bindGroup), yR.setBindGroup(1, this.empty), yR.setBindGroup(2, this.empty), yR.setBindGroup(3, GR), yR.draw(3)), yR.end()
      }
      retire() {
        const RR = this.retired;
        var JR;
        RR && (RR.mask.destroy(), RR.normals.destroy(), null === (JR = RR.depth) || void 0 === JR || JR.destroy(), this.retired = null)
      }
      targetsFor(RR) {
        var JR, GR;
        const yR = (null !== (JR = RR._config.depth) && void 0 !== JR ? JR : RR._config.rt)._depthTexture;
        return (null === (GR = this.targets) || void 0 === GR ? void 0 : GR.source) === yR ? this.targets : this.remake(RR, yR)
      }
      remake(RR, JR) {
        var GR;
        this.retired = this.targets;
        const yR = [JR.width, JR.height],
          tR = this.device.createTexture({
            label: "sun-shadow-mask",
            size: yR,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          uR = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: yR,
            format: xq,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          ZR = null !== (GR = RR._targetSignature._depthStencilFormat) && void 0 !== GR ? GR : JR.format,
          qR = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: yR,
            format: ZR,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          iR = RR._renderPassDescriptor.depthStencilAttachment,
          fR = ZR.includes("stencil"),
          VR = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: uR.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: qR ? qR.createView() : iR.view,
              depthClearValue: iR.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...fR ? {
                stencilClearValue: iR.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          KR = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== qR && void 0 !== qR ? qR : JR).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: uR.createView()
            }]
          }),
          wR = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: tR.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Nq(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: JR,
          mask: tR,
          maskView: tR.createView(),
          normals: uR,
          depth: qR,
          bindGroup: KR,
          prepass: VR,
          trace: wR
        }, this.targets
      }
    }

    function Hq(RR, JR, GR) {
      let yR = null,
        tR = 0;
      for (const uR of GR) {
        const GR = uR.renderable.mesh;
        GR && !1 === GR.visible || (uR.pipeline !== yR && (RR.setPipeline(uR.pipeline), yR = uR.pipeline), tR += uR.draw(RR, JR))
      }
      return tR
    }
    const oq = 6e4,
      cq = {
        status: "ok"
      },
      Pq = {
        status: "skipped"
      };
    async function Iq(RR, JR) {
      const {
        isCancelled: GR
      } = RR;
      if (GR()) return {
        status: "xR"
      };
      const {
        target: yR
      } = JR;
      if (!yR) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const tR = [],
        uR = Promise.all(Array.from(new Set(RR.materials), (async GR => {
          tR.push(await async function(RR, JR, GR, yR) {
            const tR = {
              lighting: RR.lighting,
              dirLightCount: Math.min(RR.dirLightCount, 4),
              Be: RR.runtime
            };
            try {
              const uR = JR.material(yR);
              return uR && xy(JR.programKey(uR, !1, tR)) ? (await uR.ready, RR.isCancelled() ? cq : uR.bindGroupLayout ? await async function(RR, JR, GR, yR) {
                const {
                  device: tR
                } = RR;
                let uR, ZR;
                tR.pushErrorScope("validation");
                try {
                  uR = RR.pipelineBuild(JR, GR, yR)
                } finally {
                  ZR = tR.popErrorScope().catch((() => null))
                }
                const [qR, iR] = await Promise.all([ZR, uR.built.then((() => null), (RR => null !== RR && void 0 !== RR ? RR : new Error("pipeline failed")))]);
                if (!qR && !iR) return cq;
                const fR = await mq(uR.module),
                  VR = fR.length > 0 ? fR.map((RR => `${uR.name} ${RR.lineNum}:${RR.linePos}: ${RR.message}`)).join("\n") : `${uR.name}: ${zq(null!==iR&&void 0!==iR?iR:qR)}`;
                return {
                  status: "failed",
                  material: JR.model.name,
                  message: VR
                }
              }(JR, uR, JR.programKey(uR, "none" !== uR.texture, tR), GR): (console.warn(`Shader pack: skipped the compile check for "${yR.name}", whose textures failed to load`), Pq)) : cq
            } catch (uR) {
              return {
                status: "failed",
                material: yR.name,
                message: zq(uR)
              }
            }
          }(RR, JR, yR, GR))
        }))),
        ZR = function(RR, JR) {
          let GR, yR, tR = !1;
          const uR = new Promise((uR => {
            var ZR;
            GR = setTimeout((() => {
              uR("timeout")
            }), null !== (ZR = JR.timeoutMs) && void 0 !== ZR ? ZR : oq), yR = setInterval((() => {
              JR.isCancelled() && uR("xR")
            }), 50), RR.lost.then((() => {
              tR = !0, uR("lost")
            }))
          }));
          return {
            signal: uR,
            lost: () => tR,
            dispose: () => {
              clearTimeout(GR), clearInterval(yR)
            }
          }
        }(JR.device, RR);
      let qR;
      try {
        qR = await Promise.race([uR.then((() => "done")), ZR.signal])
      } finally {
        ZR.dispose()
      }
      if ("xR" === qR || GR()) return {
        status: "xR"
      };
      const iR = tR.find((RR => "failed" === RR.status));
      return iR && "lost" !== qR && !ZR.lost() && await new Promise((RR => {
        setTimeout(RR, 0)
      })), "lost" === qR || ZR.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : iR ? {
        status: "failed",
        failure: {
          material: iR.material,
          message: iR.message
        }
      } : "timeout" === qR ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(fR=RR.timeoutMs)&&void 0!==fR?fR:oq)/1e3} s`), {
        status: "skipped"
      }) : tR.some((RR => "skipped" === RR.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var fR
    }
    async function mq(RR) {
      if (!RR) return [];
      try {
        return (await RR.getCompilationInfo()).messages.filter((RR => "error" === RR.type))
      } catch {
        return []
      }
    }

    function zq(RR) {
      var JR;
      return null !== (JR = null === RR || void 0 === RR ? void 0 : RR.message) && void 0 !== JR ? JR : String(RR)
    }

    function Sq(RR, JR, GR, yR, tR) {
      xy(JR) ? mq(yR).then((JR => {
        const [yR] = JR;
        VJ(RR, "terrain", GR, tR, yR ? `${yR.lineNum}:${yR.linePos} error: ${yR.message}` : null)
      })) : VJ(RR, "terrain", GR, tR)
    }
    var jq = GR(38612),
      dq = GR(38619),
      Eq = GR(38628),
      Yq = GR(4006);

    function kq(RR, JR, GR, yR, tR) {
      const uR = Math.hypot(GR[0], GR[1], GR[2]);
      if (!(uR > 0)) return;
      const ZR = [GR[0] / uR, GR[1] / uR, GR[2] / uR],
        qR = [Math.floor(JR[0]), Math.floor(JR[1]), Math.floor(JR[2])],
        iR = [0, 0, 0],
        fR = [1 / 0, 1 / 0, 1 / 0],
        VR = [1 / 0, 1 / 0, 1 / 0];
      for (let rR = 0; rR < 3; rR++) ZR[rR] > 0 ? (iR[rR] = 1, fR[rR] = (qR[rR] + 1 - JR[rR]) / ZR[rR], VR[rR] = 1 / ZR[rR]) : ZR[rR] < 0 && (iR[rR] = -1, fR[rR] = (qR[rR] - JR[rR]) / ZR[rR], VR[rR] = -1 / ZR[rR]);
      const {
        LK: KR
      } = RR;
      let wR = RR.eT(qR[0], qR[1], qR[2]);
      for (;;) {
        const JR = fR[0] < fR[1] ? fR[0] < fR[2] ? 0 : 2 : fR[1] < fR[2] ? 1 : 2;
        if (fR[JR] > yR) return;
        const GR = iR[JR] > 0 ? qR[JR] + 1 : qR[JR];
        qR[JR] += iR[JR], fR[JR] += VR[JR];
        const uR = RR.eT(qR[0], qR[1], qR[2]),
          ZR = uR !== wR && !(RR.opaque[wR] && RR.opaque[uR]);
        if (ZR) {
          const yR = [qR[0], qR[1], qR[2]];
          yR[JR] = GR;
          const uR = Math.floor(yR[0] / KR),
            ZR = Math.floor(yR[1] / KR),
            iR = Math.floor(yR[2] / KR);
          !RR.isDrawn(uR, ZR, iR) && RR.hasParts(uR, ZR, iR) && tR.add(`${uR},${ZR},${iR}`)
        }
        if (ZR && RR.occluders[uR]) return;
        wR = uR
      }
    }

    function Qq(RR, JR) {
      return RR.group - JR.group || RR.nearest - JR.nearest
    }
    class Fq {
      constructor(RR, JR) {
        this.device = RR, this.iW = JR, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var RR;
        const JR = null !== (RR = this.free.pop()) && void 0 !== RR ? RR : this.next++;
        if (8 * JR >= this.data.length) {
          const RR = new Float32Array(2 * this.data.length);
          RR.set(this.data), this.data = RR, this.words = new Uint32Array(RR.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.iW()
        }
        return JR
      }
      release(RR) {
        this.free.push(RR)
      }
      set(RR, JR, GR, yR, tR) {
        const uR = 8 * RR + Sy;
        this.data[uR] = JR, this.data[uR + 1] = GR, this.data[uR + 2] = yR, this.setVisibility(RR, tR)
      }
      setVisibility(RR, JR) {
        this.data[8 * RR + jy] = JR, this.markDirty(RR, RR)
      }
      setFaces(RR, JR, GR) {
        const yR = 8 * RR;
        this.words[yR + dy] = JR, this.words[yR + Ey] = GR, this.markDirty(RR, RR)
      }
      markDirty(RR, JR) {
        this.dirtyMin = Math.min(this.dirtyMin, RR), this.dirtyMax = Math.max(this.dirtyMax, JR)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Tq = zy,
      sq = !0;
    const hq = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Tq.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Ri = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Ji {
      constructor(RR) {
        this.device = RR, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Dy), this.dirLightUniforms = this.frameUniforms.subarray(Ny.dirLights, Ny.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, xJ.d)(), this.faceGroups = !0, this.visibilityGraph = sq, this.visCull = sq, this.visCheck = !1, this.visCullMinDistance = Eq.d, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new ui, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Be = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new vq(RR, ((RR, JR) => this.recordsGroup(RR, JR))), this.slots = new Fq(RR, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = MJ(RR), this.frameLayout = RR.createBindGroupLayout({
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
        }), this.frameBuffer = RR.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = RR.createSampler({
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
          bind: (RR, JR) => this.createBinding(this.opaqueRenderable, JR, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (RR, JR) => this.createBinding(this.transparentRenderable, JR, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(RR, JR) {
        this.sceneDepth = new Oq(this.device, this.transparentRenderable, RR, JR)
      }
      createFrameBindGroup() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== RR && void 0 !== RR ? RR : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== JR && void 0 !== JR ? JR : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(RR, JR) {
        const GR = null !== JR && void 0 !== JR ? JR : RR;
        let yR = this.recordsGroups.get(GR);
        return yR || (yR = this.createFrameBindGroup(RR, JR), this.recordsGroups.set(GR, yR)), yR
      }
      setChunkMesh(RR, JR, GR) {
        var yR;
        let tR = this.chunks.get(RR);
        tR ? this.geometry.release(tR) : (tR = {
          mesh: RR,
          slot: this.slots.allocate(),
          origin: [GR[0], GR[1], GR[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: RR.visibility,
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
        }, this.chunks.set(RR, tR), this.writeSlot(tR)), tR.material = RR.material ? this.materialFor(RR.material) : null, tR.packed = !!JR.packedVertices, tR.vertexCount = (0, Aq.f)(JR), tR.faceCount = tR.vertexCount / 4;
        const uR = null !== (yR = JR.faceGroups) && void 0 !== yR ? yR : null;
        if (tR.faceGroups = uR, uR) {
          const RR = jq.o;
          tR.planePX = uR[RR], tR.planeNX = uR[RR + 1], tR.planePY = uR[RR + 2], tR.planeNY = uR[RR + 3], tR.planePZ = uR[RR + 4], tR.planeNZ = uR[RR + 5]
        }
        this.drawWhole(tR), 0 !== tR.faceCount && (this.geometry.set(tR, JR) ? (tR.packed && this.slots.setFaces(tR.slot, tR.vertices.start + tR.faceCount, tR.faceCount), JR.ve && this.setChunkMeshLight(RR, JR.ve)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${tR.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(RR, JR) {
        const GR = this.chunks.get(RR);
        GR && this.geometry.setLight(GR, JR)
      }
      drawStats() {
        let RR = this.transparent.length;
        for (const JR of this.opaqueBatches) RR += JR.meshes.length;
        return {
          drawn: RR,
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
      removeChunkMesh(RR) {
        const JR = this.chunks.get(RR);
        JR && (this.geometry.release(JR), this.slots.release(JR.slot), this.chunks.delete(RR))
      }
      remeshLost(RR, JR) {
        this.geometry.release(JR), JR.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** JR.lostRemeshes++);
        const GR = RR.NK,
          [yR, tR, uR] = GR.itR(JR.origin[0], JR.origin[1], JR.origin[2]),
          ZR = GR.Ha.oa(yR, tR, uR);
        ZR && (ZR.Na = !0, ZR.Pa = !0, GR.Da(ZR, !1))
      }
      chooseFaceRanges(RR, JR, GR) {
        const yR = this.faceRanges;
        RR.faceMask = GR, RR.rangeCount = (0, dq.l)(JR, GR, yR), RR.first0 = yR[0], RR.count0 = yR[1], RR.first1 = yR[2], RR.count1 = yR[3]
      }
      drawWhole(RR) {
        RR.faceMask = -1, RR.faceEpoch = -1, RR.rangeCount = 1, RR.first0 = 0, RR.count0 = RR.faceCount
      }
      writeSlot(RR) {
        const [JR, GR, yR] = this.originOffset;
        this.slots.set(RR.slot, RR.origin[0] - JR, RR.origin[1] - GR, RR.origin[2] - yR, RR.visibility)
      }
      materialFor(RR) {
        const JR = this.materials.get(RR);
        if (JR) return JR;
        const GR = Xq(RR);
        if (!GR) return this.warnOnce(`material:${RR.name}`, `Lite terrain cannot draw material "${RR.name}"; its chunks are skipped.`), null;
        const {
          model: yR,
          atlas: tR,
          texture: uR,
          animated: ZR,
          uniformData: qR
        } = GR, iR = {
          id: this.materials.size,
          model: yR,
          texture: uR,
          animated: ZR,
          uniformData: qR,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${RR.name}`,
            size: qR.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: GR.liquid,
          customRenderMat: GR.customRenderMat,
          atlasCount: 0,
          W8: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(RR, iR), this.device.queue.writeBuffer(iR.uniformBuffer, 0, qR), iR.ready = this.createMaterialBindGroup(iR, tR).catch((JR => {
          console.error(`Lite terrain failed to load the textures of material "${RR.name}"`, JR)
        })), iR
      }
      materialLayout(RR) {
        const JR = function(RR) {
            const JR = ["uniforms"];
            if ("atlas" === RR.texture) {
              RR.animated && JR.push("animData"), JR.push("sampler");
              for (let GR = 0; GR < RR.atlasCount; GR++) JR.push("textureArray")
            } else "single" === RR.texture && JR.push("sampler", "texture");
            return JR
          }(RR),
          GR = JR.join(",");
        let yR = this.materialLayouts.get(GR);
        if (!yR) {
          const RR = GPUShaderStage.FRAGMENT;
          yR = this.device.createBindGroupLayout({
            label: `terrain-material-${GR}`,
            entries: JR.map(((JR, GR) => {
              switch (JR) {
                case "uniforms":
                  return {
                    binding: GR, visibility: GPUShaderStage.VERTEX | RR, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: GR, visibility: GPUShaderStage.VERTEX | RR, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: GR, visibility: RR, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: GR, visibility: RR, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: GR, visibility: RR, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(GR, yR)
        }
        return yR
      }
      async createMaterialBindGroup(RR, JR) {
        const GR = [{
          buffer: RR.uniformBuffer
        }];
        if (JR) {
          const yR = await JJ(this.device, JR.sources);
          RR.atlasCount = yR.length, RR.W8 = yR[0].layerWidth, RR.atlasLayers = yR[0].layers, JR.animDataPerTex && GR.push({
            buffer: kR(this.device, Float32Array.from(JR.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), GR.push(this.sampler);
          for (const RR of yR) GR.push(RR.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === RR.texture) {
          const {
            url: JR
          } = RR.model.diffuseTexture.source, {
            pixels: yR,
            width: tR,
            height: uR
          } = await RJ(JR);
          GR.push(this.sampler), GR.push(FR(this.device, yR, tR, uR, 1, `terrain-${JR}`).createView({
            dimension: "2d"
          }))
        }
        const yR = this.materialLayout(this.programKey(RR, !1));
        RR.bindGroupLayout = yR, RR.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${RR.model.name}`,
          layout: yR,
          entries: GR.map(((RR, JR) => ({
            binding: JR,
            resource: RR
          })))
        })
      }
      programKey(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const yR = GR ? GR.lighting : this.lighting,
          tR = GR ? GR.Be : this.Be,
          uR = {
            texture: RR.texture,
            atlasCount: RR.atlasCount,
            W8: RR.W8,
            atlasLayers: RR.atlasLayers,
            animated: RR.animated,
            alphaTest: RR.model.transparencyMode === lR.v.alphaTest,
            lighting: yR,
            dirLightCount: GR ? GR.dirLightCount : this.dirLightCount,
            packed: JR
          };
        if (!tR) return uR;
        const ZR = this.shaderPackFields(RR, tR),
          qR = "atlas" === RR.texture && RR.model.transparencyMode === lR.v.opaque && gy(ZR.packVariant);
        return {
          ...uR,
          ...ZR,
          alphaTest: uR.alphaTest || qR
        }
      }
      shaderPackFields(RR, JR) {
        const GR = this.packVariant(RR, JR);
        return void 0 === GR ? ly : {
          packVariant: GR,
          liquid: RR.liquid
        }
      }
      packVariant(RR, JR) {
        return RR.customRenderMat ? void 0 : function(RR, JR) {
          const GR = RR ? RR.defineFor(JR ? "liquid" : "terrain") : 0;
          return 0 === GR ? void 0 : GR
        }(JR, RR.liquid)
      }
      isBlended(RR) {
        return RR.model.transparencyMode === lR.v.alphaBlend
      }
      shaderModule(RR, JR) {
        let GR = this.modules.get(RR);
        return GR || (GR = this.device.createShaderModule({
          label: JR,
          code: RR
        }), this.modules.set(RR, GR)), GR
      }
      pipelineFor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!RR.bindGroupLayout) return null;
        if (!yR) return this.pipelineOf(RR, JR, GR);
        const tR = this.pipelineIdNow(RR, JR, !0, GR),
          uR = this.pipelines.get(tR);
        if (uR) return uR;
        const ZR = this.pipelineOf(RR, JR, GR);
        return ZR && void 0 === uR && this.startPipeline(tR, RR, {
          ...this.programKey(RR, JR),
          resting: yR
        }, GR), ZR
      }
      pipelineOf(RR, JR, GR) {
        const yR = this.pipelineIdNow(RR, JR, !1, GR),
          tR = this.pipelines.get(yR);
        return void 0 !== tR ? tR : (this.startPipeline(yR, RR, this.programKey(RR, JR), GR), null)
      }
      pipelineIdNow(RR, JR, GR, yR) {
        const {
          lighting: tR,
          dirLightCount: uR
        } = this, {
          transparencyMode: ZR,
          backFaceCulling: qR
        } = RR.model, iR = this.packVariant(RR, this.Be), fR = (JR ? 2 : 0) + (GR ? 1 : 0), VR = RR.pipelineIds[fR];
        if (null !== VR && VR.lighting === tR && VR.dirLightCount === uR && VR.packVariant === iR && VR.transparencyMode === ZR && VR.cull === qR && VR.atlasCount === RR.atlasCount && VR.W8 === RR.W8 && VR.atlasLayers === RR.atlasLayers && VR.colorFormat === yR._colorFormat && VR.depthStencilFormat === yR._depthStencilFormat && VR.sampleCount === yR._sampleCount) return VR.id;
        const KR = this.programKey(RR, JR),
          wR = this.pipelineId(RR, GR ? {
            ...KR,
            resting: GR
          } : KR, yR);
        return RR.pipelineIds[fR] = {
          id: wR,
          lighting: tR,
          dirLightCount: uR,
          packVariant: iR,
          transparencyMode: ZR,
          cull: qR,
          atlasCount: RR.atlasCount,
          W8: RR.W8,
          atlasLayers: RR.atlasLayers,
          colorFormat: yR._colorFormat,
          depthStencilFormat: yR._depthStencilFormat,
          sampleCount: yR._sampleCount
        }, wR
      }
      pipelineId(RR, JR, GR) {
        return Gi(JR, this.isBlended(RR), RR.model.backFaceCulling, GR)
      }
      pipelineBuild(RR, JR, GR) {
        var yR;
        const tR = this.pipelineId(RR, JR, GR);
        return null !== (yR = this.builds.get(tR)) && void 0 !== yR ? yR : this.startPipeline(tR, RR, JR, GR)
      }
      startPipeline(RR, JR, GR, yR) {
        var tR;
        this.pipelines.set(RR, null);
        const uR = sy(GR),
          ZR = this.isBlended(JR),
          qR = this.shadowMask && yR._depthStencilFormat ? function(RR, JR, GR, yR) {
            if (void 0 === RR.packVariant || RR.liquid || JR) return "none";
            const tR = (0, TJ.c)(RR.packVariant);
            return null === tR || void 0 === tR || !tR.sunShadow || !uy(tR, GR) || tR.discards || RR.alphaTest && gy(RR.packVariant) ? "none" : yR ? "edge" : "plain"
          }(GR, ZR, !!this.sunShadow, yR._sampleCount > 1) : "none";
        let iR;
        try {
          iR = hy(GR, !!this.sunShadow, qR)
        } catch (LR) {
          if (!xy(GR)) throw LR;
          return this.failedPackBuild(RR, GR, uR, LR)
        }
        const fR = this.shaderModule(iR, uR),
          VR = [];
        GR.packed || (VR.push(function(RR, JR) {
          const GR = [{
            shaderLocation: Tq.position,
            offset: kJ.e.ut,
            format: "float32x3"
          }, {
            shaderLocation: Tq.normal,
            offset: kJ.e.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Tq.color,
            offset: kJ.e.colorOffset,
            format: "unorm8x4"
          }];
          return RR && GR.push({
            shaderLocation: Tq.uv,
            offset: kJ.e.uvOffset,
            format: "float32x2"
          }), JR && GR.push({
            shaderLocation: Tq.blockFlagWords,
            offset: kJ.e.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: kJ.e.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: GR
          }
        }("none" !== GR.texture, xy(GR))), GR.lighting && VR.push(hq));
        const KR = JR.model.backFaceCulling,
          wR = {
            label: uR,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, JR.bindGroupLayout, ...ku(this.device, GR, !!this.sunShadow, "none" !== qR)]
            }),
            vertex: {
              module: fR,
              entryPoint: "mainVertex",
              buffers: VR
            },
            fragment: UJ({
              module: fR,
              entryPoint: "mainFragment"
            }, yR, ZR ? Ri : null),
            depthStencil: yR._depthStencilFormat ? {
              format: yR._depthStencilFormat,
              depthCompare: null !== (tR = yR._depthCompare) && void 0 !== tR ? tR : BJ,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: yR._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: KR ? "back" : "none"
            }
          },
          rR = GR.resting ? 0 : 1;
        this.compiling += rR;
        const eR = "none" === qR ? this.device.createRenderPipelineAsync(wR) : this.startMaskPipelines(fR, wR, "edge" === qR);
        eR.then((JR => {
          this.compiling -= rR, this.pipelines.set(RR, JR)
        }), (RR => {
          this.compiling -= rR, console.error(`Lite terrain pipeline ${uR} failed`, RR), Sq(this.device, GR, uR, fR, RR)
        }));
        const aR = {
          name: uR,
          module: fR,
          built: eR
        };
        return this.builds.set(RR, aR), aR
      }
      startMaskPipelines(RR, JR, GR) {
        const yR = JR.depthStencil,
          tR = this.device.createRenderPipelineAsync(GR ? JR : {
            ...JR,
            depthStencil: {
              ...yR,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          uR = this.device.createRenderPipelineAsync({
            ...JR,
            label: `${JR.label}-prepass`,
            fragment: {
              module: RR,
              entryPoint: "prepassFragment",
              targets: [{
                format: xq
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([tR, uR]).then((RR => {
          let [JR, GR] = RR;
          return this.prepassOf.set(JR, GR), this.maskPipelines++, JR
        }))
      }
      failedPackBuild(RR, JR, GR, yR) {
        console.error(`Lite terrain pipeline ${GR} failed`, yR), Sq(this.device, JR, GR, null, yR);
        const tR = Promise.reject(yR);
        tR.catch((() => {}));
        const uR = {
          name: GR,
          module: null,
          built: tR
        };
        return this.builds.set(RR, uR), uR
      }
      checkShaderPack(RR) {
        return Iq(RR, {
          device: this.device,
          target: this.target,
          material: RR => this.materialFor(RR),
          programKey: (RR, JR, GR) => this.programKey(RR, JR, GR),
          pipelineBuild: (RR, JR, GR) => this.pipelineBuild(RR, JR, GR)
        })
      }
      createBinding(RR, JR, GR) {
        return this.target = JR, {
          renderable: RR,
          pipeline: bJ(this.device, JR),
          draw: RR => {
            this.geometry.setDrawing(!0);
            try {
              return GR ? this.drawTransparent(RR, JR) : this.drawOpaque(RR, JR)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(RR, JR) {
        var GR, yR, tR, uR;
        const {
          xw: ZR
        } = RR;
        this.lighting = RR.sa;
        const qR = (0, Wq.q)(JR);
        this.dirLightCount = Math.min(qR, 4), this.Be = null !== (GR = ZR.Be) && void 0 !== GR ? GR : null, qR > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(RR, JR), this.animateMaterials(JR.animTick);
        const iR = ZR.Fw,
          fR = iR[0] !== this.originOffset[0] || iR[1] !== this.originOffset[1] || iR[2] !== this.originOffset[2];
        fR && (this.originOffset[0] = iR[0], this.originOffset[1] = iR[1], this.originOffset[2] = iR[2]);
        const VR = JR.eye;
        this.eye[0] = VR[0], this.eye[1] = VR[1], this.eye[2] = VR[2], this.writeShaderPackInputs();
        const KR = JR.projectionMatrix,
          wR = 0 === KR[15];
        let rR = 0;
        (fR || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: eR
        } = this;
        vJ(this.transparentRenderable._worldCenter, JR, pJ), this.resetBatches(wR), this.transparent.length = 0, this.unlit.length = 0;
        const aR = ZR.NK.nK,
          LR = aR / 2 * Math.sqrt(3);
        let nR = 0;
        const UR = !!this.Be && py(this.Be.defineFor("liquid"));
        let WR = !1;
        const AR = null !== (yR = null === (tR = ZR.BX) || void 0 === tR ? void 0 : tR.visibility) && void 0 !== yR ? yR : null,
          CR = this.visCull && wR && 0 === this.compiling && null !== AR && ZR.NK.htR[0] >= this.visCullMinDistance ? this.target : null,
          XR = this.visPassable,
          MR = this.visCandidates,
          BR = this.visCandidateBatches;
        XR.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let lR = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let pR = 0;
        const gR = (RR, GR) => {
          if (!GR) return this.transparent.push(RR), void(pR += 2 * RR.faceCount);
          if (null !== RR.faceGroups && GR.faceCull) {
            if (0 === rR && (rR = (0, dq.e)(KR, JR.renderWidth, JR.renderHeight), rR !== this.faceFocalPx && (this.faceFocalPx = rR, eR = ++this.faceEpoch)), RR.faceEpoch !== eR) {
              RR.faceEpoch = eR;
              const JR = Math.sqrt(RR.distance) + LR,
                GR = (0, dq.h)(RR.planePX, RR.planeNX, RR.planePY, RR.planeNY, RR.planePZ, RR.planeNZ, this.eye[0] - (RR.origin[0] - this.originOffset[0]), this.eye[1] - (RR.origin[1] - this.originOffset[1]), this.eye[2] - (RR.origin[2] - this.originOffset[2]), (0, dq.f)(JR, rR));
              GR !== RR.faceMask && this.chooseFaceRanges(RR, RR.faceGroups, GR)
            }
            if (0 === RR.rangeCount) return
          } else - 1 !== RR.faceMask && this.drawWhole(RR);
          GR.meshes.push(RR), pR += 2 * ((RR.rangeCount > 0 ? RR.count0 : 0) + (RR.rangeCount > 1 ? RR.count1 : 0))
        };
        for (const vR of this.chunks.values()) {
          fR && this.writeSlot(vR);
          const RR = vR.mesh.visibility;
          RR !== vR.visibility && (vR.visibility = RR, this.slots.setVisibility(vR.slot, RR));
          const {
            material: GR
          } = vR;
          this.geometry.lost(vR) && performance.now() >= vR.lostRetryAt && this.remeshLost(ZR, vR);
          const yR = !(null === GR || void 0 === GR || !GR.bindGroup) && this.geometry.backed(vR),
            tR = yR && this.lighting && !vR.vertices.page.twin;
          if (CR && (Number.isNaN(vR.key) && (vR.ci = Math.floor(vR.origin[0] / aR), vR.cj = Math.floor(vR.origin[1] / aR), vR.ck = Math.floor(vR.origin[2] / aR), vR.key = (0, Yq.g)(vR.ci, vR.cj, vR.ck)), (!yR || RR < 1 || tR || !this.batchDraws(GR, vR.packed, CR)) && this.visSeeThrough(vR, CR) && XR.add(vR.key)), !yR) continue;
          tR || (vR.lostRemeshes = 0);
          const uR = vR.origin[0] - this.originOffset[0],
            qR = vR.origin[1] - this.originOffset[1],
            iR = vR.origin[2] - this.originOffset[2];
          if (!(0, qq.e)(JR.frustum, uR, qR, iR, aR)) continue;
          const VR = uR + aR / 2 - this.eye[0],
            KR = qR + aR / 2 - this.eye[1],
            rR = iR + aR / 2 - this.eye[2];
          if (vR.distance = VR * VR + KR * KR + rR * rR, this.lighting && !vR.lit && (nR = Math.max(nR, vR.vertexCount), this.unlit.push(vR)), tR) continue;
          const eR = this.isBlended(GR) ? null : this.batchFor(GR, vR.packed, vR.vertices.page, 1 === RR, wR);
          CR ? (MR[lR] = vR, BR[lR++] = eR) : gR(vR, eR)
        }
        const bR = CR ? this.sweepVisibility(RR, JR, AR) : null;
        null === (uR = (0, ou.v)(ZR)) || void 0 === uR || uR.update(JR.frustum, this.originOffset, aR, bR);
        for (let vR = 0; vR < lR; vR++) {
          const RR = MR[vR];
          !bR || bR.isDrawn(RR.ci, RR.cj, RR.ck) ? gR(RR, BR[vR]) : (this.visCulledParts++, this.visCulledTriangles += 2 * RR.faceCount)
        }
        for (const vR of this.transparent) WR ||= UR && vR.material.liquid && !vR.material.customRenderMat;
        this.submittedTriangles = pR, bR && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(RR, JR, bR)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(WR) : WR && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && nR > 0 && this.geometry.lightFullSky(this.unlit, nR);
        for (const vR of this.opaqueBatches) this.chunkSorter.sort(vR.meshes, 1) || vR.meshes.sort(yi);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(ti)
      }
      sweepVisibility(RR, JR, GR) {
        const {
          NK: yR
        } = RR.xw, tR = yR.nK, uR = this.visPassable, ZR = this.eye[0] + this.originOffset[0], qR = this.eye[1] + this.originOffset[1], iR = this.eye[2] + this.originOffset[2];
        if (!GR.eyeClear(ZR, qR, iR, JR.near, JR.projectionMatrix, yR)) return null;
        const [fR, VR] = yR.htR, KR = GR.update(ZR, qR, iR, tR, fR, VR, uR);
        return this.visSweeps = GR.sweeps, KR ? GR : null
      }
      visSeeThrough(RR, JR) {
        const {
          material: GR
        } = RR;
        return (!GR || !this.isBlended(GR)) && (RR.mesh.visibility < 1 || !(null !== GR && void 0 !== GR && GR.bindGroup) || RR.faceCount > 0 && (!this.geometry.backed(RR) || this.lighting && !RR.vertices.page.twin) || !this.batchDraws(GR, RR.packed, JR))
      }
      batchDraws(RR, JR, GR) {
        var yR;
        const tR = JR ? 2 : 0;
        if (RR === this.visDrawsMaterial && function(RR, JR) {
            return 0 !== (RR & 1 << JR)
          }(this.visDrawsBits, tR)) return 0 !== (this.visDrawsBits & 2 << tR);
        let uR = null !== (yR = this.visBatchDraws.get(RR)) && void 0 !== yR ? yR : 0;
        if (!(uR & 1 << tR)) {
          uR |= 1 << tR | (!!RR.bindGroupLayout && this.canDraw(RR, JR) && !!this.pipelines.get(this.pipelineIdNow(RR, JR, !1, GR)) ? 2 << tR : 0), this.visBatchDraws.set(RR, uR)
        }
        return this.visDrawsMaterial = RR, this.visDrawsBits = uR, 0 !== (uR & 2 << tR)
      }
      runVisCheck(RR, JR, GR) {
        const {
          xw: yR
        } = RR, {
          NK: tR
        } = yR, uR = tR.nK, ZR = new Set;
        for (const rR of this.chunks.values()) ZR.add(rR.key);
        const qR = jt.Matrix.FromArray(JR.viewProjectionMatrix).invert(),
          [iR, fR, VR] = this.originOffset,
          KR = new jt.Fe,
          wR = function(RR, JR, GR, yR) {
            const tR = new Set;
            for (let uR = 0; uR < 27; uR++)
              for (let ZR = 0; ZR < 48; ZR++) {
                const qR = GR((ZR + .5) / 48 * 2 - 1, (uR + .5) / 27 * 2 - 1);
                kq(RR, JR, [qR[0] - JR[0], qR[1] - JR[1], qR[2] - JR[2]], yR, tR)
              }
            return tR
          }({
            eT: (RR, JR, GR) => tR.eT(RR, JR, GR),
            occluders: GR.occluders,
            opaque: GR.opaque,
            LK: uR,
            isDrawn: (RR, JR, yR) => GR.isDrawn(RR, JR, yR),
            hasParts: (RR, JR, GR) => ZR.has((0, Yq.g)(RR, JR, GR))
          }, [this.eye[0] + iR, this.eye[1] + fR, this.eye[2] + VR], ((RR, JR) => (jt.Fe.TransformCoordinatesFromFloatsToRef(RR, JR, .5, qR, KR), [KR.x + iR, KR.y + fR, KR.z + VR])), (tR.htR[0] + 1) * uR);
        this.visViolations = wR.size;
        for (const rR of wR) this.warnOnce(`vis:${rR}`, `Lite terrain cave culling skipped chunk ${rR}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var RR;
        null !== (RR = this.Be) && void 0 !== RR && RR.isRunning() && (this.shaderPackInputs ??= new Qu(this.device, this.Be.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Be, this.eye, this.lighting))
      }
      bindShaderPackInputs(RR, JR, GR) {
        var yR, tR, uR, ZR;
        let qR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const iR = this.packVariant(JR, GR);
        if (void 0 === iR) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Qu(this.device, GR.textureLayers(), this.sunShadow), this.shaderPackInputs.write(GR, this.eye, this.lighting));
        const fR = py(iR) ? null !== (yR = null === (tR = this.sceneDepth) || void 0 === tR ? void 0 : tR.view) && void 0 !== yR ? yR : this.standIn() : null,
          VR = qR ? null !== (uR = null === (ZR = this.shadowMask) || void 0 === ZR ? void 0 : ZR.view) && void 0 !== uR ? uR : this.standIn() : null;
        this.shaderPackInputs.bind(RR, fR, Yu(iR, !!this.sunShadow), VR)
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
        var RR, JR;
        return null !== (RR = null === (JR = this.shaderPackInputs) || void 0 === JR ? void 0 : JR.bindGroupFor(null, !0)) && void 0 !== RR ? RR : null
      }
      resetBatches(RR) {
        const JR = this.opaqueBatches;
        let GR = 0;
        for (const yR of JR) yR.meshes.length > 0 && (yR.meshes.length = 0, yR.faceCull = this.batchFaceCull(yR.material, RR), JR[GR++] = yR);
        JR.length = GR
      }
      orderBatches() {
        const RR = this.opaqueBatches;
        for (let JR = 0; JR < RR.length; JR++) {
          const GR = RR[JR];
          GR.group = JR;
          for (let yR = 0; yR < JR; yR++) {
            const JR = RR[yR];
            if (JR.material === GR.material && JR.packed === GR.packed) {
              GR.group = JR.group;
              break
            }
          }
          GR.nearest = GR.meshes.length > 0 ? GR.meshes[0].distance : 1 / 0
        }
        RR.sort(Qq)
      }
      batchFor(RR, JR, GR, yR, tR) {
        for (const ZR of this.opaqueBatches)
          if (ZR.material === RR && ZR.packed === JR && ZR.page === GR && ZR.resting === yR) return ZR;
        const uR = {
          material: RR,
          packed: JR,
          page: GR,
          resting: yR,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(RR, tR)
        };
        return this.opaqueBatches.push(uR), uR
      }
      batchFaceCull(RR, JR) {
        return !(!JR || !(0, jq.s)(RR.model)) && (!this.Be || ! function(RR) {
          var JR;
          return !(null === (JR = (0, TJ.c)(RR)) || void 0 === JR || !JR.movesVertices)
        }(this.packVariant(RR, this.Be)))
      }
      writeFrameUniforms(RR, JR) {
        const GR = this.frameUniforms,
          yR = Ny;
        if ((0, Wq.r)(RR, GR), GR[yR.fogInfos] = JR.fogEnabled ? JR.fogMode : 0, GR[yR.fogInfos + 1] = JR.fogStart, GR[yR.fogInfos + 2] = JR.fogEnd, GR[yR.fogInfos + 3] = JR.fogDensity, GR.set(JR.fogColour, yR.fogColour), GR[yR.outputHeight] = JR.renderHeight, GR.set(JR.ambientColour, yR.sceneAmbient), (0, Wq.p)(JR, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const JR = (0, Aq.j)(RR.na, RR.je, RR.de);
          for (let RR = 0; RR < 4; RR++) GR[yR.aoLevels + RR] = JR[RR] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, GR)
      }
      animateMaterials(RR) {
        const JR = Hy.anim;
        for (const GR of this.materials.values()) GR.animated && (GR.uniformData[JR] = RR, this.device.queue.writeBuffer(GR.uniformBuffer, 4 * JR, GR.uniformData, JR, 1))
      }
      canDraw(RR, JR) {
        return !("atlas" === RR.texture && !JR) || (this.warnOnce(`stride:${RR.id}`, `Lite terrain: material "${RR.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(RR, JR) {
        let GR = 0;
        RR.setBindGroup(1, this.frameBindGroup);
        for (const yR of this.opaqueBatches) {
          if (!yR.meshes.length || !this.canDraw(yR.material, yR.packed)) continue;
          const tR = this.pipelineFor(yR.material, yR.packed, JR, yR.resting);
          tR && (RR.setPipeline(tR), RR.setBindGroup(2, yR.material.bindGroup), this.Be && this.bindShaderPackInputs(RR, yR.material, this.Be, this.prepassOf.has(tR)), GR += this.drawBatch(RR, yR))
        }
        return GR
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(RR, JR, GR) {
        const yR = this.target,
          tR = this.Be;
        if (!yR || !tR || 0 === this.maskPipelines) return 0;
        let uR = 0,
          ZR = null;
        this.geometry.setDrawing(!0);
        try {
          for (const qR of this.opaqueBatches) {
            if (!qR.meshes.length || !this.canDraw(qR.material, qR.packed)) continue;
            const iR = this.pipelineFor(qR.material, qR.packed, yR, qR.resting),
              fR = iR && this.prepassOf.get(iR);
            fR && (ZR || (ZR = RR.beginRenderPass(JR), ZR.setBindGroup(0, GR), ZR.setBindGroup(1, this.frameBindGroup)), ZR.setPipeline(fR), ZR.setBindGroup(2, qR.material.bindGroup), this.bindShaderPackInputs(ZR, qR.material, tR, !0), uR += this.drawBatch(ZR, qR))
          }
        } finally {
          var qR;
          null === (qR = ZR) || void 0 === qR || qR.end(), this.geometry.setDrawing(!1)
        }
        return uR
      }
      drawBatch(RR, JR) {
        let GR = 0;
        for (const yR of JR.meshes) {
          const {
            rangeCount: JR
          } = yR;
          JR > 0 && (GR += this.geometry.draw(RR, yR, this.lighting, yR.first0, yR.count0), JR > 1 && (GR += this.geometry.draw(RR, yR, this.lighting, yR.first1, yR.count1)))
        }
        return GR
      }
      drawTransparent(RR, JR) {
        let GR = 0,
          yR = null,
          tR = null;
        RR.setBindGroup(1, this.frameBindGroup);
        for (const uR of this.transparent) {
          const ZR = uR.material;
          if (!this.canDraw(ZR, uR.packed)) continue;
          const qR = this.pipelineFor(ZR, uR.packed, JR);
          qR && (qR !== yR && (RR.setPipeline(qR), yR = qR, this.Be && this.bindShaderPackInputs(RR, ZR, this.Be)), ZR !== tR && (RR.setBindGroup(2, ZR.bindGroup), tR = ZR), GR += this.geometry.draw(RR, uR, this.lighting))
        }
        return GR
      }
    }

    function Gi(RR, JR, GR, yR) {
      return `${sy(RR)}|${RR.atlasLayers}|${RR.W8}|${JR}|${GR}|${yR._colorFormat}|${yR._depthStencilFormat}|${yR._sampleCount}`
    }

    function yi(RR, JR) {
      return RR.distance - JR.distance
    }

    function ti(RR, JR) {
      return JR.distance - RR.distance
    }
    class ui {
      constructor() {
        this.left = []
      }
      sort(RR, JR) {
        for (let GR = 0; GR < RR.length; GR++) {
          const JR = RR[GR].distance;
          if (JR - JR !== 0) return !1
        }
        return this.sortRange(RR, 0, RR.length, JR), !0
      }
      sortRange(RR, JR, GR, yR) {
        if (GR - JR <= 16) {
          for (let tR = JR + 1; tR < GR; tR++) {
            const GR = RR[tR],
              uR = yR * GR.distance;
            let ZR = tR - 1;
            for (; ZR >= JR && yR * RR[ZR].distance > uR; ZR--) RR[ZR + 1] = RR[ZR];
            RR[ZR + 1] = GR
          }
          return
        }
        const tR = JR + GR >>> 1;
        if (this.sortRange(RR, JR, tR, yR), this.sortRange(RR, tR, GR, yR), yR * RR[tR - 1].distance <= yR * RR[tR].distance) return;
        const {
          left: uR
        } = this, ZR = tR - JR;
        for (let VR = 0; VR < ZR; VR++) uR[VR] = RR[JR + VR];
        let qR = 0,
          iR = tR,
          fR = JR;
        for (; qR < ZR && iR < GR;) RR[fR++] = yR * RR[iR].distance < yR * uR[qR].distance ? RR[iR++] : uR[qR++];
        for (; qR < ZR;) RR[fR++] = uR[qR++]
      }
    }
    const Zi = Math.ceil(102);

    function qi(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JR;
      const uR = Math.min(JR, GR),
        ZR = new Uint32Array(XG(yR));
      for (let qR = 0; qR < yR; qR++) {
        const JR = Math.floor(qR * uR / yR),
          GR = Math.max(JR + 1, Math.floor((qR + 1) * uR / yR));
        for (let iR = 0; iR < yR; iR++) {
          const fR = Math.floor(iR * uR / yR),
            VR = Math.max(fR + 1, Math.floor((iR + 1) * uR / yR));
          let KR = 0;
          for (let yR = JR; yR < GR; yR++)
            for (let JR = fR; JR < VR; JR++) RR[yR * tR + JR] >= Zi && KR++;
          if (2 * KR >= (GR - JR) * (VR - fR)) {
            const RR = iR + yR * qR;
            ZR[RR >>> 5] |= 1 << (31 & RR)
          }
        }
      }
      return ZR
    }

    function ii(RR) {
      return Math.max(1, Math.min(16, RR))
    }
    class fi {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = RR, this.loadTexture = JR, this.warn = GR, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(RR, JR) {
        return (RR.FY !== this.builtVersion || this.blockCaster.length !== JR) && (this.build(RR, JR), !0)
      }
      build(RR, JR) {
        this.builtVersion = RR.FY;
        const GR = new Uint16Array(JR),
          yR = new Map;
        for (let tR = 1; tR < JR; tR++) {
          const JR = this.classify(RR, tR, yR);
          if (null === JR || JR === nG) {
            GR[tR] = null === JR ? 0 : nG;
            continue
          }
          let uR = this.byKey.get(JR.key);
          void 0 === uR && (uR = this.allocate(JR), this.byKey.set(JR.key, uR)), GR[tR] = uR
        }
        this.blockCaster = GR, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(RR, JR) {
        const GR = RR.fRR[JR];
        if ("function" !== typeof GR) return GR;
        try {
          return GR()
        } catch (yR) {
          return this.warnOnce(`Sun shadows: no caster option for block ${JR}: ${yR instanceof Error?yR.message:String(yR)}`), null
        }
      }
      classify(RR, JR, GR) {
        const yR = this.option(RR, JR);
        if ("none" === yR) return null;
        if (yR && yR.planes.length > 0) {
          const RR = yR.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(RR)}`,
            planes: RR
          }
        }
        if (RR.Or[JR]) return null;
        const tR = RR.Dr[JR] ? RR.hY(JR) : null;
        if (tR && tR.length >= 6) {
          const RR = function(RR) {
            const JR = new Uint32Array(16);
            for (let GR = 0; GR + 6 <= RR.length; GR += 6) {
              const yR = [0, 1, 2].map((JR => Math.max(0, Math.ceil(8 * RR[GR + JR] - .5)))),
                tR = [0, 1, 2].map((JR => Math.min(7, Math.floor(8 * RR[GR + JR + 3] - .5))));
              for (let RR = yR[2]; RR <= tR[2]; RR++)
                for (let GR = yR[1]; GR <= tR[1]; GR++)
                  for (let uR = yR[0]; uR <= tR[0]; uR++) {
                    const yR = uR + 8 * (GR + 8 * RR);
                    JR[yR >>> 5] |= 1 << (31 & yR)
                  }
            }
            return JR
          }(tR);
          return function(RR) {
            return RR.every((RR => 4294967295 === RR))
          }(RR) ? nG : RR.every((RR => 0 === RR)) ? null : {
            kind: "shape",
            key: `shape:${RR.join(",")}`,
            mask: RR
          }
        }
        if (RR.Av[JR] || !RR.Ua[JR]) return null;
        const uR = [0, 1, 2, 3, 4, 5].map((yR => {
          const tR = RR.Wa[6 * JR + yR];
          let uR = GR.get(tR);
          return void 0 === uR && (uR = function(RR) {
            if (!RR || RR.Oa) return null;
            const {
              K8: JR,
              W8: GR,
              Z8: yR
            } = RR;
            if (!JR || !GR || !(GR > 0) || void 0 === yR || !(yR >= 0)) return null;
            const tR = JR[0],
              uR = GR * GR * 4;
            if (!tR || tR.byteLength < uR) return null;
            const ZR = Math.floor(tR.byteLength / uR),
              qR = JR[Math.floor(yR / ZR)];
            if (!qR) return null;
            const iR = new Uint8Array(qR.buffer, qR.byteOffset, qR.byteLength),
              fR = yR % ZR * uR;
            if (fR + uR > iR.length) return null;
            const VR = new Uint8Array(GR * GR);
            let KR = !1;
            for (let wR = 0; wR < VR.length; wR++) VR[wR] = iR[fR + 4 * wR + 3], KR ||= VR[wR] < Zi;
            return KR ? {
              alpha: VR,
              width: GR
            } : null
          }(RR.va(tR)), GR.set(tR, uR)), uR
        }));
        if (uR.every((RR => null === RR))) return nG;
        const ZR = ii(Math.max(...uR.map((RR => {
            var JR;
            return null !== (JR = null === RR || void 0 === RR ? void 0 : RR.width) && void 0 !== JR ? JR : 1
          })))),
          qR = new Uint32Array(XG(ZR)).fill(4294967295),
          iR = uR.map((RR => null === RR ? qR : qi(RR.alpha, RR.width, RR.width, ZR)));
        return {
          kind: "cutout",
          key: `cutout:${ZR}:${iR.map((RR=>RR.join(","))).join("|")}`,
          size: ZR,
          faces: iR
        }
      }
      allocate(RR) {
        if (this.nextCaster >= MG) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const JR = this.nextCaster++;
        if (this.writeCaster(JR, UG, 0, 0, 0), "shape" === RR.kind) {
          const GR = this.allocateMask(RR.mask.length);
          GR >= 0 && (this.sink(GR, RR.mask), this.writeCaster(JR, WG, GR, 0, 8))
        } else if ("cutout" === RR.kind) {
          const GR = XG(RR.size),
            yR = this.allocateMask(6 * GR);
          if (yR >= 0) {
            const tR = new Uint32Array(6 * GR);
            RR.faces.forEach(((RR, JR) => {
              tR.set(RR, JR * GR)
            })), this.sink(yR, tR), this.writeCaster(JR, CG, yR, 0, RR.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(JR, RR.planes).finally((() => {
          this.planesLoading--
        })));
        return JR
      }
      async loadPlanes(RR, JR) {
        const GR = await Promise.all(JR.map((RR => this.texture(RR.texture))));
        if (GR.some((RR => null === RR))) return;
        const yR = GR,
          tR = ii(Math.max(...yR.map((RR => Math.min(RR.width, RR.height))))),
          uR = XG(tR),
          ZR = this.allocateMask(JR.length * (4 + uR));
        if (ZR < 0) return;
        const qR = new Uint32Array(JR.length * (4 + uR)),
          iR = 4 * JR.length;
        JR.forEach(((RR, JR) => {
          const GR = ZR + iR + JR * uR;
          qR.set(function(RR, JR) {
            const [GR, yR] = RR.tangent, tR = Math.hypot(GR, yR) || 1, uR = GR / tR, ZR = yR / tR, qR = RR.centre[0] * ZR - RR.centre[1] * uR, iR = new Uint32Array(4);
            return new Float32Array(iR.buffer, 0, 3).set([uR, ZR, qR]), iR[3] = JR, iR
          }(RR, GR), 4 * JR), qR.set(qi(yR[JR].alpha, yR[JR].width, yR[JR].height, tR), iR + JR * uR)
        })), this.sink(ZR, qR), this.writeCaster(RR, AG, ZR, JR.length, tR)
      }
      texture(RR) {
        let JR = this.textures.get(RR);
        return JR || (JR = this.loadTexture(RR).catch((JR => (this.warn(`Sun shadows: no mask for ${RR}: ${JR instanceof Error?JR.message:String(JR)}`), null))), this.textures.set(RR, JR)), JR
      }
      allocateMask(RR) {
        if (this.nextMaskWord + RR > BG) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const JR = 32768 + this.nextMaskWord;
        return this.nextMaskWord += RR, JR
      }
      writeCaster(RR, JR, GR, yR, tR) {
        this.sink(0 + 4 * RR, Uint32Array.of(JR, GR, yR, tR))
      }
      warnOnce(RR) {
        this.warned.has(RR) || (this.warned.add(RR), this.warn(RR))
      }
    }
    var Vi = GR(3982);

    function Ki(RR) {
      return !RR.Na && !RR.zB && !RR.ia
    }

    function wi() {
      return {
        bricks: new Uint32Array(fG),
        cells: new Uint16Array(32768),
        special: new Uint8Array(qG)
      }
    }
    class ri {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = RR, this.writeVoxels = JR, this.writePool = GR, this.warn = yR, this.eyeChunk = null, this.slotChunk = new Array(JG).fill(null), this.slotVersion = new Float64Array(JG).fill(-1), this.slotPool = new Array(JG).fill(null), this.starved = new Uint8Array(JG), this.queue = [], this.queued = new Uint8Array(JG), this.queueSorted = !0, this.freePool = new Uint32Array(lG), this.freeCount = lG, this.casterTable = null, this.warnedPool = !1, this.scratch = wi(), this.victimScratch = wi(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * JG), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let tR = 0; tR < lG; tR++) this.freePool[tR] = 65535 - tR
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return lG - this.freeCount
      }
      chunkAdded(RR) {
        if (null === this.eyeChunk || !this.inRadius(RR.i, RR.j, RR.k)) return;
        const JR = eG(RR.i, RR.j, RR.k);
        this.slotChunk[JR] = RR, this.slotVersion[JR] = -1, this.enqueue(JR)
      }
      update(RR, JR, GR) {
        const yR = this.casters.blockCaster;
        if (yR !== this.casterTable) {
          this.casterTable = yR;
          for (let RR = 0; RR < JG; RR++) this.slotVersion[RR] = -1, this.slotChunk[RR] && this.enqueue(RR)
        }
        const tR = Math.floor(RR[0] / 32),
          uR = Math.floor(RR[1] / 32),
          ZR = Math.floor(RR[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== tR || this.eyeChunk[1] !== uR || this.eyeChunk[2] !== ZR) && (this.eyeChunk = [tR, uR, ZR], this.follow(JR), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let qR = 0; qR < JG; qR++) {
          const RR = this.slotChunk[qR];
          RR && (RR.oB || RR.Ka !== this.slotVersion[qR]) && this.enqueue(qR)
        }
        this.drain(GR), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(RR, JR) {
        this.records.set(JR, 4 * RR), this.windowTopStale = !0, this.writeVoxels(4 * RR, JR)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const RR = this.records;
        let JR = -1 / 0;
        for (let yR = 0; yR < RR.length; yR += 4) {
          const GR = 255 & RR[yR + 3];
          GR !== tG && GR !== uG || !this.inRadius(RR[yR], RR[yR + 1], RR[yR + 2]) || (JR = Math.max(JR, RR[yR + 1] * sJ + (RR[yR + 3] >>> 8)))
        }
        const GR = JR === -1 / 0 ? 1 : JR + KG;
        GR !== this.windowTop[0] && (this.windowTop[0] = GR, this.writeVoxels(VG, this.windowTop))
      }
      follow(RR) {
        const JR = this.eyeChunk,
          [GR, yR, tR] = hJ;
        for (let ZR = -tR; ZR <= tR; ZR++)
          for (let tR = -yR; tR <= yR; tR++)
            for (let yR = -GR; yR <= GR; yR++) {
              var uR;
              const GR = JR[0] + yR,
                qR = JR[1] + tR,
                iR = JR[2] + ZR,
                fR = eG(GR, qR, iR),
                VR = this.slotChunk[fR];
              if (VR && !VR.oB && VR.i === GR && VR.j === qR && VR.k === iR) continue;
              const KR = null !== (uR = RR(GR, qR, iR)) && void 0 !== uR ? uR : null;
              VR && (VR.i !== GR || VR.j !== qR || VR.k !== iR) && this.slotPool[fR] && (this.release(fR), this.record.fill(0), this.writeRecord(fR, this.record)), this.slotChunk[fR] = KR, this.slotVersion[fR] = -1, (KR || VR) && this.enqueue(fR)
            }
      }
      requeueStarved() {
        for (let RR = 0; RR < JG; RR++) this.starved[RR] && this.slotChunk[RR] && this.enqueue(RR)
      }
      enqueue(RR) {
        this.queued[RR] || (this.queued[RR] = 1, this.queue.push(RR), this.queueSorted = !1)
      }
      drain(RR) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const RR = new Map;
          for (const JR of this.queue) RR.set(JR, this.slotDistance(JR));
          this.queue.sort(((JR, GR) => RR.get(GR) - RR.get(JR))), this.queueSorted = !0
        }
        const JR = performance.now();
        let GR = 0;
        const yR = [];
        for (; this.queue.length > 0 && (0 === GR || performance.now() - JR < RR);) {
          const RR = this.queue.pop(),
            JR = this.slotChunk[RR];
          !JR || JR.oB || Ki(JR) ? (this.queued[RR] = 0, this.encodeSlot(RR), GR++) : yR.push(RR)
        }
        for (let tR = yR.length - 1; tR >= 0; tR--) this.queue.push(yR[tR])
      }
      slotDistance(RR) {
        const JR = this.slotChunk[RR],
          GR = this.eyeChunk;
        return JR ? Math.max(Math.abs(JR.i - GR[0]), Math.abs(JR.j - GR[1]), Math.abs(JR.k - GR[2])) : 0
      }
      inRadius(RR, JR, GR) {
        const yR = this.eyeChunk,
          [tR, uR, ZR] = hJ;
        return Math.abs(RR - yR[0]) <= tR && Math.abs(JR - yR[1]) <= uR && Math.abs(GR - yR[2]) <= ZR
      }
      release(RR) {
        const JR = this.slotPool[RR];
        if (JR) {
          for (let RR = JR.length - 1; RR >= 0; RR--) this.freePool[this.freeCount++] = JR[RR];
          this.slotPool[RR] = null
        }
      }
      encodeSlot(RR) {
        var JR, GR, yR, tR, uR;
        let ZR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          qR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const iR = null !== (JR = null === (GR = this.slotPool[RR]) || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : 0;
        this.release(RR), this.starved[RR] = 0;
        const fR = this.slotChunk[RR],
          VR = this.record;
        if (!fR || fR.oB || !fR.Rr) return this.slotChunk[RR] = null, this.slotVersion[RR] = -1, VR.fill(0), this.writeRecord(RR, VR), void(iR > 0 && this.requeueStarved());
        this.slotVersion[RR] = fR.Ka;
        const KR = this.encodeBricks(fR, RR, ZR, qR);
        VR[0] = fR.i, VR[1] = fR.j, VR[2] = fR.k, VR[3] = KR, this.writeRecord(RR, VR), null === (yR = this.encoded) || void 0 === yR || yR.call(this, fR), qR && (null !== (tR = null === (uR = this.slotPool[RR]) || void 0 === uR ? void 0 : uR.length) && void 0 !== tR ? tR : 0) < iR && this.requeueStarved()
      }
      encodeBricks(RR, JR, GR, yR) {
        if (RR.xe) return yG;
        const tR = this.casters.blockCaster,
          {
            data: uR,
            stride: ZR,
            offset: qR
          } = RR.Rr,
          [iR, fR, VR] = ZR,
          KR = sJ,
          {
            bricks: wR,
            cells: rR,
            special: eR
          } = GR;
        wR.fill(0), eR.fill(0);
        let aR = 0,
          LR = 0,
          nR = 0;
        for (let UR = 0; UR < KR; UR++) {
          const JR = UR >> 2,
            GR = 3 & UR,
            yR = RR.hr[UR],
            ZR = yR === Vi.g ? -1 : yR < tR.length ? tR[yR] : 0;
          if (0 !== ZR)
            for (let RR = 0; RR < KR; RR++) {
              const yR = RR >> 2,
                WR = 3 & RR;
              let AR = qR + RR * iR + UR * fR;
              for (let RR = 0; RR < KR; RR++, AR += VR) {
                let qR = ZR;
                if (qR < 0) {
                  const RR = uR[AR];
                  if (qR = RR < tR.length ? tR[RR] : 0, 0 === qR) continue
                }
                const iR = aG(yR, JR, RR >> 2),
                  fR = LG(WR, GR, 3 & RR);
                wR[3 * iR + (fR >>> 5)] |= 1 << (31 & fR), rR[iR * ZG + fR] = qR, aR++, nR = UR, qR === nG ? LR++ : eR[iR] = 1
              }
            }
        }
        return 0 === aR ? yG : 32768 === LR ? tG | nR << 8 : (this.writePoolEntries(JR, GR, yR), this.writeVoxels(iG + JR * fG, wR), uG | nR << 8)
      }
      writePoolEntries(RR, JR, GR) {
        const {
          bricks: yR,
          cells: tR,
          special: uR
        } = JR, ZR = this.entry;
        let qR = 0;
        for (let VR = 0; VR < qG; VR++) qR += uR[VR];
        if (0 === qR) return;
        GR && this.freeCount < qR && this.evictBeyond(RR, qR);
        const iR = new Uint32Array(GR ? Math.min(qR, this.freeCount) : 0);
        let fR = 0;
        for (let VR = 0; VR < qG; VR++) {
          if (!uR[VR]) continue;
          const GR = 3 * VR;
          if (fR === iR.length) {
            this.dropSpecials(JR, VR), this.starved[RR] = 1;
            continue
          }
          const qR = this.freePool[--this.freeCount];
          iR[fR++] = qR;
          for (let RR = 0; RR < ZG; RR++) {
            const JR = yR[GR + (RR >>> 5)] >>> (31 & RR) & 1 ? tR[VR * ZG + RR] : 0;
            1 & RR ? ZR[RR >> 1] |= JR << 16 : ZR[RR >> 1] = JR
          }
          yR[GR + 2] = qR + 1, this.writePool(pG + 32 * qR, ZR)
        }
        iR.length > 0 && (this.slotPool[RR] = iR)
      }
      evictBeyond(RR, JR) {
        const GR = this.slotDistance(RR),
          yR = [];
        for (let tR = 0; tR < JG; tR++) tR !== RR && this.slotPool[tR] && this.slotDistance(tR) > GR && yR.push(tR);
        yR.sort(((RR, JR) => this.slotDistance(JR) - this.slotDistance(RR)));
        for (const tR of yR) {
          if (this.freeCount >= JR) return;
          const RR = this.slotChunk[tR];
          RR && !RR.oB && RR.Rr && (RR.Ka === this.slotVersion[tR] || Ki(RR)) && this.encodeSlot(tR, this.victimScratch, !1)
        }
      }
      dropSpecials(RR, JR) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const GR = 3 * JR;
        for (let yR = 0; yR < ZG; yR++) RR.cells[JR * ZG + yR] !== nG && (RR.bricks[GR + (yR >>> 5)] &= ~(1 << (31 & yR)))
      }
    }
    var ei = GR(38532);
    class ai {
      constructor(RR) {
        this.device = RR, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new PG, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.NK = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = RR.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = RR.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(RR, JR, GR) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: yR
        } = this;
        yR.UK(RR, JR), GR.forEachSunShadowCaster((RR => {
          this.add(RR)
        })), yR.finish();
        const tR = 0 === yR.parts;
        if (tR && this.uploadedEmpty) return;
        this.uploadedEmpty = tR;
        const {
          queue: uR
        } = this.device, {
          words: ZR
        } = yR;
        uR.writeBuffer(this.frameBuffer, 0, ZR, 0, 16385), yR.refs > 0 && uR.writeBuffer(this.frameBuffer, 65540, ZR, OG, yR.refs), tR || uR.writeBuffer(this.frameBuffer, 327684, ZR, xG, yR.parts * vG)
      }
      add(RR) {
        const JR = this.gridFor(RR);
        if (!JR) return;
        const {
          frame: GR
        } = this, {
          NK: yR,
          worldAt: tR,
          instances: uR,
          instanceCount: ZR,
          thin: qR
        } = RR;
        if (uR)
          for (let iR = 0; iR < ZR; iR++) qR ? (mG(uR, 16 * iR, yR, tR, this.NK), GR.add(JR, this.NK)) : GR.add(JR, uR, 16 * iR);
        else GR.add(JR, yR, tR)
      }
      gridFor(RR) {
        let {
          geometry: JR,
          indexed: GR,
          first: yR,
          count: tR,
          skip: uR
        } = RR, ZR = this.grids.get(JR);
        ZR || (ZR = new Map, this.grids.set(JR, ZR));
        const qR = `${GR?yR:-1-yR}:${tR}:${null!==uR&&void 0!==uR?uR:""}`;
        let iR = ZR.get(qR);
        if (void 0 !== iR || this.gridsFull) return iR;
        const fR = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = fR + 2;
        else if (fR > this.bakeDeadline) return;
        return iR = this.bake(JR, GR, yR, tR, uR), void 0 !== iR && ZR.set(qR, iR), iR
      }
      bake(RR, JR, GR, yR, tR) {
        const uR = RR.vertexAttributes.find((RR => "position" === RR.kind)),
          ZR = uR ? function(RR, JR, GR, yR) {
            let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const uR = RR => JR ? JR[GR + RR] : GR + RR,
              ZR = RR => null !== tR && [0, 1, 2].some((JR => {
                const GR = uR(RR + JR);
                return GR >= tR[0] && GR < tR[1]
              })),
              qR = [1 / 0, 1 / 0, 1 / 0],
              iR = [-1 / 0, -1 / 0, -1 / 0];
            for (let UR = 0; UR + 2 < yR; UR += 3)
              if (!ZR(UR))
                for (let JR = 0; JR < 3; JR++) {
                  const GR = uR(UR + JR);
                  for (let JR = 0; JR < 3; JR++) qR[JR] = Math.min(qR[JR], RR[3 * GR + JR]), iR[JR] = Math.max(iR[JR], RR[3 * GR + JR])
                }
            const fR = Math.max(iR[0] - qR[0], iR[1] - qR[1], iR[2] - qR[2]);
            if (!(fR > 0)) return null;
            const VR = fR / 64,
              KR = [0, 0, 0],
              wR = [0, 0, 0],
              rR = [0, 0, 0];
            for (let UR = 0; UR < 3; UR++) KR[UR] = Math.min(65, Math.ceil((iR[UR] - qR[UR]) / VR) + 1), wR[UR] = qR[UR] - VR / 2, rR[UR] = wR[UR] + KR[UR] * VR;
            const eR = new Uint32Array(Math.ceil(KR[0] * KR[1] * KR[2] / 32)),
              aR = new Float64Array(9),
              LR = [0, 0, 0],
              nR = [0, 0, 0];
            for (let UR = 0; UR + 2 < yR; UR += 3)
              if (!ZR(UR)) {
                for (let JR = 0; JR < 3; JR++) {
                  const GR = uR(UR + JR);
                  for (let yR = 0; yR < 3; yR++) aR[3 * JR + yR] = RR[3 * GR + yR]
                }
                for (let RR = 0; RR < 3; RR++) {
                  const JR = Math.min(aR[RR], aR[3 + RR], aR[6 + RR]),
                    GR = Math.max(aR[RR], aR[3 + RR], aR[6 + RR]);
                  LR[RR] = Math.max(0, Math.floor((JR - wR[RR]) / VR - 1e-6)), nR[RR] = Math.min(KR[RR] - 1, Math.floor((GR - wR[RR]) / VR + 1e-6))
                }
                for (let RR = LR[2]; RR <= nR[2]; RR++)
                  for (let JR = LR[1]; JR <= nR[1]; JR++)
                    for (let GR = LR[0]; GR <= nR[0]; GR++)
                      if (zG(aR, wR[0] + (GR + .5) * VR, wR[1] + (JR + .5) * VR, wR[2] + (RR + .5) * VR, VR / 2)) {
                        const yR = GR + KR[0] * (JR + KR[1] * RR);
                        eR[yR >>> 5] |= 1 << (31 & yR)
                      }
              } return {
              words: eR,
              lo: wR,
              hi: rR,
              cell: VR,
              dims: KR
            }
          }((0, ei.h)(uR, RR.vertexCount), JR ? RR.indexData : null, GR, yR, tR) : null;
        if (!ZR) return null;
        const {
          words: qR,
          ...iR
        } = ZR;
        if (this.gridTop + qR.length > DG) return void(this.gridsFull = !0);
        const fR = this.gridTop;
        return this.gridTop += qR.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * fR, qR), {
          ...iR,
          at: fR
        }
      }
    }
    const Li = Math.cos(1 * Math.PI / 180);

    function ni(RR, JR) {
      return RR[0] * JR[0] + RR[1] * JR[1] + RR[2] * JR[2] < Li
    }
    async function Ui(RR) {
      const {
        pixels: JR,
        width: GR,
        height: yR
      } = await RJ(RR), tR = new Uint8Array(GR * yR);
      for (let uR = 0; uR < tR.length; uR++) tR[uR] = JR[4 * uR + 3];
      return {
        width: GR,
        height: yR,
        alpha: tR
      }
    }
    class Wi {
      constructor(RR, JR) {
        this.device = RR, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(jG.p), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = RR.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = RR.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * wG,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = RR.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [GR, yR, tR] = jG.q;
        this.volume = RR.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: GR,
            height: yR,
            depthOrArrayLayers: tR
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = RR.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = RR.createBuffer({
          label: "sun-shadow-volume-work",
          size: jG.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = JR ? new ai(RR) : null, this.entityStandIn = JR ? null : RR.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var RR;
        null === (RR = this.stopWindow) || void 0 === RR || RR.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var RR, JR;
        const GR = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || GR.push("Lite sun shadow volume pipeline compiling");
        const yR = null !== (RR = null === (JR = this.casters) || void 0 === JR ? void 0 : JR.planesLoading) && void 0 !== RR ? RR : 0;
        return yR > 0 && GR.push(`${yR} Lite sun shadow plane casters loading their textures`), GR
      }
      entries() {
        var RR, JR, GR, yR;
        const tR = FJ.o;
        return [{
          binding: tR.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: tR.Rr,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: tR.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: tR.volume,
          resource: this.volumeView
        }, {
          binding: tR.sampler,
          resource: this.volumeSampler
        }, {
          binding: tR.entities,
          resource: {
            buffer: null !== (RR = null === (JR = this.entities) || void 0 === JR ? void 0 : JR.frameBuffer) && void 0 !== RR ? RR : this.entityStandIn
          }
        }, {
          binding: tR.entityGrids,
          resource: {
            buffer: null !== (GR = null === (yR = this.entities) || void 0 === yR ? void 0 : yR.gridBuffer) && void 0 !== GR ? GR : this.entityStandIn
          }
        }]
      }
      prepare(RR, JR, GR) {
        var yR;
        this.entitiesThisFrame = !1;
        const tR = null !== (yR = null === GR || void 0 === GR ? void 0 : GR.sunShadowReach()) && void 0 !== yR ? yR : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!GR || !tR.sunShadow && !tR.airShadow) return void(this.volumeHolds = null);
        if (RR.NK.nK !== sJ) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${RR.NK.nK}; everything is lit.`)));
        const uR = this.start(RR);
        this.casters.update(RR.KK, RR.KK.Dr.length);
        const ZR = RR.Fw;
        for (let wR = 0; wR < 3; wR++) this.eye[wR] = JR[wR] + ZR[wR];
        const qR = (0, jG.v)(this.eye);
        this.staleNear = qR;
        const iR = RR.NK.Ha;
        uR.update(this.eye, ((RR, JR, GR) => iR.oa(RR, JR, GR)), 1);
        const fR = (0, jG.r)(GR.AJR()),
          VR = uR.eyeChunk,
          KR = this.uniformInts;
        for (let wR = 0; wR < 3; wR++) KR[wR] = VR[wR], KR[4 + wR] = qR[wR];
        this.entitiesThisFrame = null !== this.entities && tR.sunShadow, this.entitiesThisFrame && cG(this.uniformFloats, 8, JR, fR), null !== this.volumeHolds && (this.castersWritten || ni(fR, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(qR, fR, VR)
      }
      markStale(RR) {
        const JR = this.staleNear,
          GR = sJ,
          yR = [RR.i * GR, RR.j * GR, RR.k * GR];
        for (let uR = 0; uR < 3; uR++)
          if (yR[uR] + GR <= JR[uR] - GR || yR[uR] >= JR[uR] + jG.q[uR] + GR) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const tR = this.stale;
        for (let uR = 0; uR < tR.length; uR += 4)
          if (tR[uR] === RR.i && tR[uR + 1] === RR.j && tR[uR + 2] === RR.k) return void(tR[uR + 3] = this.swept);
        if (16 === tR.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        tR.push(RR.i, RR.j, RR.k, this.swept)
      }
      writeStale() {
        const RR = this.swept,
          JR = this.stale;
        this.staleAll && RR - this.staleAllSwept >= jG.k && (this.staleAll = !1, JR.length = 0);
        let GR = 0;
        for (let tR = 0; tR < JR.length; tR += 4)
          if (RR - JR[tR + 3] < jG.k) {
            for (let RR = 0; RR < 4; RR++) JR[GR + RR] = JR[tR + RR];
            GR += 4
          } JR.length = GR;
        const yR = this.uniformInts;
        yR[3] = this.staleAll ? 5 : GR / 4;
        for (let tR = 0; tR < 4; tR++)
          for (let RR = 0; RR < 3; RR++) yR[16 + 4 * tR + RR] = 4 * tR < GR ? JR[4 * tR + RR] * sJ : 0
      }
      writeUniform() {
        const RR = this.uniformInts;
        let JR = this.uniformWritten;
        if (JR) {
          let GR = !0;
          for (let yR = 0; yR < RR.length && GR; yR++) GR = RR[yR] === JR[yR];
          if (GR) return
        }
        JR ??= this.uniformWritten = new Int32Array(RR.length), JR.set(RR), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(RR) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, RR)
      }
      computeVolume(RR, JR, GR) {
        const yR = this.buildVolumePass();
        if (!yR) return void(this.volumeHolds = null);
        const tR = (0, jG.t)(this.volumeHolds, RR);
        this.volumeHolds = RR;
        const uR = 1 === tR.length && tR[0].size.every(((RR, JR) => RR === jG.q[JR])),
          ZR = this.sweptChunk,
          qR = this.sweptLight,
          iR = JR[0] !== qR[0] || JR[1] !== qR[1] || JR[2] !== qR[2],
          fR = GR[0] !== ZR[0] || GR[1] !== ZR[1] || GR[2] !== ZR[2],
          VR = iR && ni(JR, qR);
        if ((uR || this.written || fR || VR) && (this.fastLeft = jG.k), uR || this.written || iR || fR) {
          this.written = !1;
          for (let RR = 0; RR < 3; RR++) ZR[RR] = GR[RR], qR[RR] = JR[RR];
          this.sweepLeft = uR ? 0 : jG.k
        }
        if (uR ? this.swept += jG.k : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, tR.push(...(0, jG.z)(RR, this.slice)), this.slice = (this.slice + 1) % jG.k, this.swept++), 0 === tR.length) return;
        const KR = (0, jG.C)(this.workData, JR, tR);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const wR = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          rR = wR.beginComputePass({
            label: "sun-shadow-volume"
          });
        rR.setPipeline(yR.pipeline), rR.setBindGroup(YG.group, yR.bindGroup), rR.dispatchWorkgroups(Math.ceil(KR / jG.l)), rR.end(), this.device.queue.submit([wR.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const RR = YG,
          JR = GPUShaderStage.COMPUTE,
          GR = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: RR.uniform,
              visibility: JR,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: RR.Rr,
              visibility: JR,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: RR.special,
              visibility: JR,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: RR.work,
              visibility: JR,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: RR.volume,
              visibility: JR,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          yR = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: GR,
            entries: [{
              binding: RR.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: RR.Rr,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: RR.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: RR.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: RR.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [GR]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: kG()
            }),
            entryPoint: "main"
          }
        }).then((RR => {
          this.volumePass = {
            pipeline: RR,
            bindGroup: yR
          }
        }), (RR => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(RR)}`)
        })), null
      }
      start(RR) {
        if (this.window) return this.window;
        const JR = (RR, JR) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * RR, JR)
        };
        this.casters = new fi(((RR, GR) => {
          this.castersWritten = !0, JR(RR, GR)
        }), Ui);
        const GR = new ri(this.casters, ((RR, JR) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * RR, JR)
        }), JR);
        GR.encoded = RR => {
          this.markStale(RR)
        };
        const yR = RR => {
          GR.chunkAdded(RR)
        };
        return RR.NK.on("chunkAdded", yR), this.stopWindow = () => {
          RR.NK.removeListener("chunkAdded", yR)
        }, this.window = GR, GR
      }
    }
    var Ai = GR(39932),
      Ci = GR(39934);
    const Xi = 0,
      Mi = 3,
      Bi = 4,
      li = 5;

    function gi(RR, JR, GR, yR) {
      RR.drawOffset(JR, yR + Xi), JR[yR + Mi] = RR.drawTime(), GR[yR + Bi] = RR.ring.drawStart(), GR[yR + li] = RR.ring.drawCount()
    }
    const bi = `\n${Py}\n\nconst MAX_STOPS = ${Ci.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Ci.c/4}>,\n\tcolor1: array<vec4f, ${Ci.c}>,\n\tcolor2: array<vec4f, ${Ci.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Ci.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Ci.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var vi = GR(53594);
    class Oi {
      constructor(RR, JR, GR, yR) {
        this.device = RR, this.system = JR, this.frameIndex = GR, this.bindings = yR, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, vi.d)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (RR, JR) => {
          this.device.queue.writeBuffer(this.ring, RR * Ci.g * 4, this.system.ring.records, RR * Ci.g, (JR - RR) * Ci.g)
        };
        const {
          name: tR
        } = JR;
        this.ring = RR.createBuffer({
          label: `particles-${tR}`,
          size: JR.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = RR.createBuffer({
          label: `particles-uniforms-${tR}`,
          size: 4 * Ci.t,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(RR) {
        const JR = (0, vi.b)(this.system, this.uniformBits, RR);
        JR && (this.uniformBits = JR, this.device.queue.writeBuffer(this.uniforms, 0, JR))
      }
      bind() {
        const {
          system: RR
        } = this, JR = this.texture;
        (0, vi.g)(RR, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${RR.name}`,
          size: [Ci.o, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Ci.o
        }, [Ci.o, 1]));
        const GR = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === JR.view && this.boundSampler === JR.sampler && this.boundRamp === GR || (this.boundView = JR.view, this.boundSampler = JR.sampler, this.boundRamp = GR, this.bindGroup = this.device.createBindGroup({
          label: `particles-${RR.name}`,
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
            resource: JR.sampler
          }, {
            binding: 3,
            resource: JR.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: GR
          }]
        }))
      }
      destroy() {
        var RR;
        this.ring.destroy(), this.uniforms.destroy(), null === (RR = this.ramp) || void 0 === RR || RR.destroy()
      }
    }
    class xi {
      constructor(RR, JR) {
        this.device = RR, this.resources = JR, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, xJ.d)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (RR, JR) => (this.bindTarget(JR), {
            renderable: this.renderable,
            pipeline: bJ(this.device, JR),
            draw: RR => JR === this.preparedTarget ? this.draw(RR) : 0
          })
        }
      }
      rebind(RR) {
        this.device = RR, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [JR, GR] of this.systems) {
          const yR = new Oi(RR, JR, GR.frameIndex, this.bindings),
            tR = JR.ring.drawCount();
          tR > 0 && yR.upload(0, tR), this.systems.set(JR, yR)
        }
      }
      build() {
        const {
          device: RR
        } = this, JR = RR.createBindGroupLayout({
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
        this.frameLayout = RR.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = RR.createPipelineLayout({
          bindGroupLayouts: [MJ(RR), JR, this.frameLayout]
        }), this.module = RR.createShaderModule({
          label: "particles",
          code: bi
        });
        const GR = RR.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        RR.queue.writeTexture({
          texture: GR
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: JR,
          rampSampler: RR.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: GR.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get zuR() {
        return this.systems.size
      }
      reset() {
        for (const RR of this.systems.keys()) RR.reset()
      }
      describePendingWork() {
        return (0, Ai.g)(this.systems.keys(), "Lite")
      }
      Km(RR, JR) {
        const GR = new Ai.e(RR, JR, this);
        return this.systems.set(GR, new Oi(this.device, GR, this.allocateFrameIndex(), this.bindings)), GR
      }
      fJR(RR, JR) {
        for (const GR of this.systems.keys()) GR.fJR(RR, JR)
      }
      canDraw(RR) {
        const JR = this.systems.get(RR),
          GR = RR.texture ? this.resources.boundTexture(RR.texture) : null;
        if (!JR || !GR || !this.targetPipelines) return !1;
        if (JR.texture = GR, JR.pipelines.length = 0, !tJ(RR.blendMode)) return this.warnOnce(`blend:${RR.blendMode}`, `particle blend mode ${RR.blendMode} is not drawn (${RR.name})`), !0;
        const yR = (0, ER.m)(RR.blendMode);
        for (const tR of yR) {
          const RR = this.pipelineFor(tR);
          if (!1 === RR) return JR.pipelines.length = 0, !0;
          RR && JR.pipelines.push(RR)
        }
        return JR.pipelines.length === yR.length
      }
      disposeStopped(RR) {
        RR.dispose()
      }
      remove(RR) {
        const JR = this.systems.get(RR);
        JR && (this.systems.delete(RR), JR.destroy(), this.freeFrameIndices.push(JR.frameIndex))
      }
      prepare(RR) {
        const JR = RR.animationRatio || 1;
        vJ(this.renderable._worldCenter, RR, lJ), this.preparedTarget = this.target, this.draws.length = 0;
        let GR = 0;
        for (const yR of this.systems.values()) {
          const RR = yR.system;
          if (!RR.animateIfActive(JR)) continue;
          if (RR.ring.takeUploads(yR.upload), !RR.hasLiveParticles() || 0 === yR.pipelines.length) continue;
          yR.writeUniforms(this.warnOnce), yR.bind();
          const tR = 64 * yR.frameIndex;
          yR.count = RR.ring.drawCount(), gi(RR, this.frameData, this.frameBits, tR), GR = Math.max(GR, tR + 64), this.draws.push(yR)
        }
        GR > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, GR)
      }
      draw(RR) {
        let JR = 0,
          GR = null;
        for (const yR of this.draws) {
          RR.setBindGroup(1, yR.bindGroup), RR.setBindGroup(2, this.frameBindGroup, [256 * yR.frameIndex]);
          for (const tR of yR.pipelines) tR !== GR && (RR.setPipeline(tR), GR = tR), RR.draw(4, yR.count), JR++
        }
        return JR
      }
      bindTarget(RR) {
        this.target = RR;
        const JR = `${RR._colorFormat}|${RR._depthStencilFormat}|${RR._depthCompare}|${RR._sampleCount}`;
        let GR = this.pipelines.get(JR);
        GR || (GR = new Map, this.pipelines.set(JR, GR)), this.targetPipelines = GR
      }
      pipelineFor(RR) {
        var JR;
        const GR = this.targetPipelines,
          yR = GR.get(RR);
        if (void 0 !== yR) return yR;
        GR.set(RR, null);
        const tR = this.target,
          uR = RR === ER.c,
          ZR = null !== (JR = tR._depthCompare) && void 0 !== JR ? JR : BJ,
          {
            device: qR
          } = this;
        return qR.createRenderPipelineAsync({
          label: `particles-${RR}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: UJ({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: uR ? 1 : 0
            }
          }, tR, uJ((0, ER.i)(RR))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: tR._depthStencilFormat ? {
            format: tR._depthStencilFormat,
            depthCompare: ZR,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: tR._sampleCount
          }
        }).then((JR => {
          GR.set(RR, JR)
        }), (JR => {
          GR.set(RR, !1), console.error("Lite particle pipeline failed", JR), VJ(qR, "particles", `blend-${RR}`, JR)
        })), null
      }
      allocateFrameIndex() {
        const RR = this.freeFrameIndices.pop();
        if (void 0 !== RR) return RR;
        const JR = this.nextFrameIndex++;
        if (64 * (JR + 1) > this.frameData.length) {
          const RR = new Float32Array(2 * this.frameData.length);
          RR.set(this.frameData), this.frameData = RR, this.frameBits = new Uint32Array(RR.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return JR
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
    class Ni {
      constructor(RR, JR, GR, yR, tR) {
        this.lite = RR, this.canvas = JR, this.info = GR, this.resources = tR, this.LtR = !1, this.needPOTTextures = !1, this.rRR = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = JR.width, this.renderHeight = JR.height, this.caps = {
          maxTextureSize: yR.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: yR.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(RR) {
        this.lite = RR, (0, mR.q)(RR, this.renderWidth, this.renderHeight)
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
      setSize(RR, JR) {
        if (this.renderWidth === RR && this.renderHeight === JR) return !1;
        const GR = this.renderWidth,
          yR = this.renderHeight;
        this.renderWidth = RR, this.renderHeight = JR;
        const tR = this.lite;
        if (null === tR) return !0;
        try {
          (0, mR.q)(tR, RR, JR)
        } catch (uR) {
          if (uR instanceof DOMException && "InvalidStateError" === uR.name) {
            this.renderWidth = GR, this.renderHeight = yR;
            try {
              (0, mR.q)(tR, GR, yR)
            } catch {
              this.canvas.width = GR, this.canvas.height = yR
            }
            return console.warn("WebGPU could not allocate render targets for resize", RR, JR, uR.message), !1
          }
          throw uR
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
      yX() {
        const RR = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : RR - this.lastFrameTime, this.lastFrameTime = RR
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(RR, JR) {
        const GR = document.createElement("canvas");
        return GR.width = RR, GR.height = JR, GR
      }
      LRR(RR, JR) {
        var GR;
        return null !== (GR = this.resources.LRR.get(RR)) && void 0 !== GR ? GR : new wJ(this.resources, RR, JR)
      }
      atlasArrays(RR) {
        return this.resources.atlasArrays(RR)
      }
    }
    class Di {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(RR) {
        this.fov = RR.fov, this.nearPlane = RR.near, this.farPlane = RR.far;
        const JR = RR.worldMatrix;
        for (let GR = 0; GR < 16; GR++)
          if (this.worldMatrix[GR] !== JR[GR]) return this.worldMatrix.set(JR), void this.worldMatrixVersion++
      }
    }
    class Hi {
      constructor(RR, JR, GR, yR) {
        this.canvas = JR, this.options = GR, this.JyR = void 0, this.backendName = "WebGPU (Lite)", this.DRR = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Di, this.lastFrameTime = 0, this.engine = void 0, this.tL = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.lK = null, this.firstTerrain = null, this.trialFrames = 0, this.install(RR);
        const {
          resources: tR,
          meshes: uR
        } = RR;
        this.resources = tR, this.particles = RR.particles, this.JyR = new Ni(RR.engine, JR, yR, RR.device.limits, tR), (0, gR.F)({
          Qq: RR => {
            xR(RR) && tR.textureSlot(RR)
          },
          loaded: RR => xR(RR) ? tR.textureLoaded(RR) : null,
          canvasUpdated: (RR, JR, GR) => {
            xR(RR) && tR.canvasUpdated(RR, JR, GR)
          }
        }), this.DRR = uR.DRR, this.modelMeshes = uR.modelMeshes
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
      install(RR) {
        this.engine = RR.engine, this.tL = RR.tL, this.sceneTask = RR.sceneTask, this.device = RR.device, this.liteTerrain = RR.terrain, this.meshes = RR.meshes, this.sunShadow = RR.sunShadow;
        const JR = new jR(RR.device.lost);
        this.refusals = JR, JR.deviceLost.then((() => {
          var JR;
          JR = RR.device, iJ.add(JR)
        })), RR.tL.camera = this.camera
      }
      async rebuild() {
        var RR, JR, GR, yR, tR;
        const uR = await Ii();
        this.halted = !0, this.liteTerrain.retire(), null === (RR = this.sunShadow) || void 0 === RR || RR.dispose(), this.JyR.detach();
        try {
          (0, zR.d)(this.engine)
        } catch (VR) {
          console.warn("Lite: disposing the lost device's engine threw", VR)
        }
        const ZR = {
            width: this.JyR.renderWidth,
            height: this.JyR.renderHeight
          },
          qR = await mi(this.canvas, this.options, ZR, uR),
          iR = AJ(qR),
          fR = zi(iR);
        try {
          this.resources.rebind(qR, iR), this.particles.rebind(iR), this.DRR.dropSteady();
          const RR = {
              resources: this.resources,
              particles: this.particles,
              DRR: this.DRR,
              modelMeshes: this.modelMeshes
            },
            JR = await Si(qR, iR, this.options, RR),
            GR = fR();
          if (null !== GR) throw new Error(`WebGPU device lost while Lite was rebuilding (${GR.reason}): ${GR.message}`);
          const {
            r: yR,
            g: tR,
            b: uR
          } = this.tL.clearColor;
          this.install(JR), this.setClearColour(yR, tR, uR), this.JyR.rebind(qR)
        } catch (VR) {
          throw iR.destroy(), VR
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (JR = this.lK) || void 0 === JR || JR.resize(), null === (GR = this.lK) || void 0 === GR || null === (yR = GR.xw) || void 0 === yR || null === (tR = yR.BX) || void 0 === tR || tR.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((RR, JR) => {
          this.firstTerrain = {
            drawn: RR,
            failed: JR
          }
        }))
      }
      get castsEntitySunShadows() {
        var RR, JR;
        return null !== (RR = null === (JR = this.sunShadow) || void 0 === JR ? void 0 : JR.tracesEntities) && void 0 !== RR && RR
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(RR) {
        this.lK = RR, this.modelMeshes.attach(RR.model, RR.sceneMirror);
        const JR = RR.tL;
        this.setClearColour(JR.clearColor.r, JR.clearColor.g, JR.clearColor.b), JR.draw = () => {
          this.drawFrame(RR, JR)
        }
      }
      get CK() {
        return !this.refusals.lost && !this.halted
      }
      render(RR) {
        if (this.CK) {
          try {
            this.JyR.yX(), RR.tL.render()
          } catch (JR) {
            throw this.refusals.frameFailed(JR), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(JR), this.firstTerrain = null), JR
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var RR, JR, GR, yR;
        const tR = [...this.particles.describePendingWork(), ...null !== (RR = null === (JR = this.sunShadow) || void 0 === JR ? void 0 : JR.describePendingWork()) && void 0 !== RR ? RR : []],
          uR = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (GR = this.terrain.sceneDepth) && void 0 !== GR && GR.compiling ? 1 : 0) + (null !== (yR = this.terrain.shadowMask) && void 0 !== yR && yR.compiling ? 1 : 0);
        uR > 0 && tR.push(`${uR} Lite pipelines compiling`);
        const ZR = this.terrain.buffersAwaitingVerdict;
        ZR > 0 && tR.push(`${ZR} Lite terrain buffers awaiting their out-of-memory verdict`);
        const qR = this.resources.texturesLoading;
        return qR > 0 && tR.push(`${qR} Lite textures loading`), tR
      }
      prepareTexture(RR) {
        return null !== this.resources.boundTexture(RR) || this.resources.textureFailed(RR)
      }
      drawFrame(RR, JR) {
        var GR, yR, tR, uR, ZR, qR;
        const iR = Uq(RR);
        this.camera.copyFromView(iR), this.setClearColour(iR.clearColour[0], iR.clearColour[1], iR.clearColour[2]), null === (GR = this.sunShadow) || void 0 === GR || GR.prepare(RR.xw, iR.eye, null !== (yR = RR.xw.Be) && void 0 !== yR ? yR : null), this.terrain.prepare(RR, iR), null === (tR = this.terrain.sceneDepth) || void 0 === tR || tR.setPlanes(iR.near, iR.far), null === (uR = this.terrain.shadowMask) || void 0 === uR || uR.prepare(iR), yq(this.sceneTask), this.meshes.prepare(JR, iR, RR.model.earthSky, null !== (ZR = RR.xw.Be) && void 0 !== ZR ? ZR : null), this.particles.prepare(iR);
        const fR = performance.now();
        this.resources.flushUploads(), null === (qR = this.sunShadow) || void 0 === qR || qR.traceEntities(this.meshes);
        try {
          (0, mR.o)(this.engine, this.lastFrameTime > 0 ? fR - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = fR, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(fR), this.firstTerrain = null)
      }
      setClearColour(RR, JR, GR) {
        const yR = this.tL.clearColor;
        yR.r = RR, yR.g = JR, yR.b = GR, yR.a = 1
      }
    }

    function oi(RR) {
      const JR = {};
      for (const GR in RR.limits) {
        const yR = RR.limits[GR];
        "number" === typeof yR && (JR[GR] = yR)
      }
      return JR
    }
    const ci = "WebGPU device lost while Lite was starting";
    async function Pi(RR, JR) {
      const GR = await Ii(),
        yR = GR.info,
        tR = {
          vendor: (null === yR || void 0 === yR ? void 0 : yR.vendor) || "unknown vendor",
          renderer: (null === yR || void 0 === yR ? void 0 : yR.architecture) || "unknown renderer",
          version: (null === yR || void 0 === yR ? void 0 : yR.description) || "unknown version"
        };
      RR.style.background = "black";
      const uR = await mi(RR, JR, JR.bufferSize, GR),
        ZR = AJ(uR),
        qR = zi(ZR);
      try {
        const GR = new Hi(await Si(uR, ZR, JR, null), RR, JR, tR),
          yR = qR();
        if (null !== yR) {
          const {
            reason: RR,
            message: JR
          } = yR;
          throw Object.assign(new Error(`${ci} (${RR}): ${JR}`), {
            fallbackReason: ci
          })
        }
        return GR
      } catch (iR) {
        throw ZR.destroy(), null === qR() ? iR : (0, Gq.h)(iR, "device")
      }
    }
    async function Ii() {
      const RR = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!RR) throw (0, Gq.h)(new Error("No WebGPU adapter"), "no_adapter");
      return RR
    }
    async function mi(RR, JR, GR, yR) {
      let tR;
      try {
        tR = await (0, mR.h)(RR, {
          msaaSamples: JR.xyR ? 4 : 1,
          requiredLimits: oi(yR),
          alphaMode: "premultiplied"
        })
      } catch (ZR) {
        throw (0, Gq.h)(ZR, "#47" === (null === (uR = ZR) || void 0 === uR ? void 0 : uR.message) ? "no_adapter" : "device")
      }
      var uR;
      return null !== GR && (0, mR.q)(tR, GR.width, GR.height), tR
    }

    function zi(RR) {
      let JR = null;
      return RR.lost.then((RR => {
        JR = RR, console.error(`WebGPU device lost (${RR.reason}): ${RR.message}`)
      })), () => JR
    }
    async function Si(RR, JR, GR, yR) {
      var tR, uR;
      let {
        sceneDepth: ZR,
        sunShadow: qR
      } = GR;
      const iR = (0, SR.d)(RR),
        fR = null !== (tR = null === yR || void 0 === yR ? void 0 : yR.resources) && void 0 !== tR ? tR : new hZ(RR, JR),
        VR = new Ji(JR),
        KR = new HZ(JR, fR, (RR => function(RR, JR) {
          for (const yR of CJ(RR)) {
            var GR;
            if (yR._targetSignature === JR) return null !== (GR = yR._sceneBG) && void 0 !== GR ? GR : null
          }
          return null
        }(iR, RR)), null === yR || void 0 === yR ? void 0 : yR.DRR, null === yR || void 0 === yR ? void 0 : yR.modelMeshes),
        wR = null !== (uR = null === yR || void 0 === yR ? void 0 : yR.particles) && void 0 !== uR ? uR : new xi(JR, fR);
      for (const aR of function(RR, JR, GR) {
          return [JR.opaqueRenderable, RR.opaqueRenderable, RR.skyLastRenderable, GR.renderable, JR.transparentRenderable, RR.transparentRenderable, RR.frontRenderable]
        }(KR, VR, wR)) WJ(iR, aR);
      const rR = function(RR) {
        for (const JR of CJ(RR))
          if ("tL" === JR.name) return JR;
        throw new Error("Lite: the scene has no render task named scene")
      }(iR);
      ZR && VR.installSceneDepth(rR, RR);
      const eR = qR ? new Wi(JR, qR.entities) : null;
      return VR.sunShadow = eR, eR && null !== qR && void 0 !== qR && qR.entities && (VR.shadowMask = new Dq(JR, rR, RR, VR)), KR.sunShadow = eR, await (0, SR.e)(iR), {
        engine: RR,
        tL: iR,
        sceneTask: rR,
        device: JR,
        terrain: VR,
        meshes: KR,
        sunShadow: eR,
        resources: fR,
        particles: wR
      }
    }
  },
  42342: (RR, JR, GR) => {
    GR.d(JR, {
      C: () => rR,
      G: () => eR,
      b: () => tR,
      e: () => yR,
      i: () => wR,
      j: () => VR,
      k: () => LR,
      n: () => uR,
      o: () => qR,
      r: () => iR,
      v: () => ZR,
      y: () => aR
    });
    const yR = 3,
      tR = 0,
      uR = 1,
      ZR = 2,
      qR = {
        uniform: 3,
        Rr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      iR = 10,
      fR = "BloxdPackInputs",
      VR = "bloxdPackInputs",
      KR = [{
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
      wR = 80;

    function rR() {
      const RR = KR.map((RR => {
        let {
          name: JR,
          type: GR
        } = RR;
        return `    ${JR}: ${GR},\n`
      })).join("");
      return `struct ${fR} {\n${RR}}\n@group(${yR}) @binding(${tR}) var<uniform> ${VR}: ${fR};\n`
    }

    function eR(RR, JR) {
      const GR = new DataView(RR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, wR),
        [yR, tR, uR, ZR, qR, iR] = KR;
      GR.setFloat32(yR.offset, JR.seconds, !0), GR.setUint32(tR.offset, JR.lit ? 1 : 0, !0);
      for (let fR = 0; fR < 3; fR++) GR.setInt32(uR.offset + 4 * fR, JR.renderOffset[fR], !0), GR.setFloat32(ZR.offset + 4 * fR, JR.AJR[fR], !0), GR.setFloat32(qR.offset + 4 * fR, JR.eyePosition[fR], !0), GR.setFloat32(iR.offset + 4 * fR, JR.shadowDirection[fR], !0)
    }

    function aR(RR) {
      const JR = new Uint32Array(Math.max(1, RR.length));
      return RR.forEach(((RR, GR) => {
        let {
          id: yR,
          rotation: tR
        } = RR;
        JR[GR] = 65535 & yR | (3 & tR) << 16
      })), JR
    }
    const LR = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);