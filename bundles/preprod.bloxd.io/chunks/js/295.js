export const id = 295;
export const ids = [295];
export const modules = {
  44281: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => tU,
      e: () => FU,
      i: () => AU,
      m: () => DU
    });
    var cU = zU(37919),
      yU = zU(39519),
      QU = zU(39516);

    function AU(UU, XU, zU, cU) {
      const yU = QU.t;
      XU.fill(0), UU.gravity.toArray(XU, yU.gravity), UU.colorDead.toArray(XU, yU.colorDead), zU[yU.ramp] = UU.useRampGradients ? 1 : 0;
      const AU = UU.getColorGradients(),
        FU = NU(UU, AU, "colour", cU);
      zU[yU.colorCount] = FU;
      for (let QU = 0; QU < FU; QU++) {
        var oU;
        const UU = AU[IU(AU, QU)];
        XU[yU.colorPositions + QU] = UU.gradient, UU.color1.toArray(XU, yU.color1 + 4 * QU), (null !== (oU = UU.color2) && void 0 !== oU ? oU : UU.color1).toArray(XU, yU.color2 + 4 * QU)
      }
      const DU = UU.getVelocityGradients(),
        EU = NU(UU, DU, "Et", cU);
      zU[yU.velocityCount] = EU;
      for (let QU = 0; QU < EU; QU++) kU(XU, yU.Et + 4 * QU, DU[IU(DU, QU)]);
      const YU = UU.useRampGradients ? UU.getColorRemapGradients() : null,
        pU = NU(UU, YU, "colour remap", cU);
      zU[yU.remapCount] = pU;
      for (let QU = 0; QU < pU; QU++) kU(XU, yU.remap + 4 * QU, YU[IU(YU, QU)])
    }

    function FU() {
      return {
        key: [],
        texels: new Uint8Array(4 * QU.n)
      }
    }
    const oU = [];

    function DU(UU, XU) {
      return EU(UU, oU), !gU(oU, XU.key) && (XU.key.length = 0, XU.key.push(...oU), XU.key.length > 0 && function(UU, XU) {
        for (let zU = 0; zU < QU.n; zU++) yU.g.GetCurrentGradient(zU / QU.n, UU, ((UU, XU, zU) => {
          cU.Color3.LerpToRef(UU.color, XU.color, zU, YU)
        })), XU[4 * zU] = 255 * YU.r, XU[4 * zU + 1] = 255 * YU.g, XU[4 * zU + 2] = 255 * YU.b, XU[4 * zU + 3] = 255
      }(UU.getRampGradients(), XU.texels), !0)
    }

    function EU(UU, XU) {
      XU.length = 0;
      const zU = UU.useRampGradients ? UU.getRampGradients() : null;
      if (null !== zU && void 0 !== zU && zU.length) {
        XU.push(zU.length);
        for (const UU of zU) XU.push(UU.gradient, UU.color.r, UU.color.g, UU.color.b)
      }
    }
    const YU = new cU.Color3;

    function NU(UU, XU, zU, cU) {
      return XU ? XU.length > QU.c ? (cU(`particleStops:${zU}`, `GPU particles use the first 2 and last ${QU.c-2} of more than ${QU.c} ${zU} gradient stops (${UU.name})`), QU.c) : XU.length : 0
    }

    function IU(UU, XU) {
      return XU < 2 || UU.length <= QU.c ? XU : UU.length - QU.c + XU
    }
    const pU = new Float32Array(QU.q),
      aU = new Uint32Array(pU.buffer);

    function tU(UU, XU, zU) {
      return AU(UU, pU, aU, zU), XU && gU(aU, XU) ? null : aU.slice()
    }

    function gU(UU, XU) {
      if (UU.length !== XU.length) return !1;
      for (let zU = 0; zU < UU.length; zU++)
        if (UU[zU] !== XU[zU]) return !1;
      return !0
    }

    function kU(UU, XU, zU) {
      var cU;
      UU[XU] = zU.gradient, UU[XU + 1] = zU.factor1, UU[XU + 2] = null !== (cU = zU.factor2) && void 0 !== cU ? cU : zU.factor1
    }
  },
  42259: (UU, XU, zU) => {
    function cU(UU, XU, zU) {
      const cU = XU * XU * 4,
        yU = UU[0].layers,
        QU = yU * (UU.length - 1) + UU[UU.length - 1].layers,
        AU = new Uint8Array(QU * cU);
      UU.forEach(((XU, zU) => {
        const QU = zU + 1 < UU.length ? Math.min(XU.layers, yU) : XU.layers;
        AU.set(new Uint8Array(XU.pixels.buffer, XU.pixels.byteOffset, QU * cU), zU * yU * cU)
      }));
      const FU = Math.max(1, Math.min(QU, zU || QU));
      if (FU === QU) return [{
        pixels: AU,
        layers: QU
      }];
      const oU = [];
      for (let DU = 0; DU < QU; DU += FU) {
        const UU = Math.min(QU, DU + FU);
        oU.push({
          pixels: AU.slice(DU * cU, UU * cU),
          layers: UU - DU
        })
      }
      return oU
    }
    zU.d(XU, {
      d: () => cU,
      g: () => QU
    });
    const yU = new WeakMap;

    function QU(UU, XU, zU) {
      var cU, QU;
      const AU = null !== (cU = yU.get(UU)) && void 0 !== cU ? cU : new Map;
      yU.set(UU, AU);
      const FU = null !== (QU = AU.get(XU[0])) && void 0 !== QU ? QU : [];
      AU.set(XU[0], FU);
      const oU = FU.find((UU => UU.urls.length === XU.length && UU.urls.every(((UU, zU) => UU === XU[zU]))));
      if (oU) return oU.built;
      const DU = {
        urls: [...XU],
        built: zU()
      };
      return FU.push(DU), DU.built.catch((() => {
        FU.splice(FU.indexOf(DU), 1)
      })), DU.built
    }
  },
  44273: (UU, XU, zU) => {
    function cU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const XU = new Set;
      return (zU, cU) => {
        XU.has(zU) || (XU.add(zU), console.warn(UU + cU))
      }
    }
    zU.d(XU, {
      e: () => cU
    })
  },
  44323: (UU, XU, zU) => {
    zU.d(XU, {
      createLiteRendererAsync: () => fo,
      liteBabylonBackend: () => MU,
      setPipelineFailureHook: () => FX
    });
    var cU = zU(37919),
      yU = zU(38250),
      QU = zU(38647),
      AU = zU(37995),
      FU = zU(38657);
    class oU extends FU.b {
      constructor() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        super(...XU), this.color = new cU.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: XU[0].nS().getUniqueId(),
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
          needAlphaBlendingForMesh: UU => UU.visibility < 1 || UU.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const DU = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      EU = UU => 1 << DU.indexOf(UU),
      YU = EU("VERTEXCOLOR"),
      NU = EU("INSTANCES"),
      IU = EU("THIN_INSTANCES"),
      pU = EU("INSTANCESCOLOR"),
      aU = EU("FOG"),
      tU = EU("LITE_FRONT_LAYER");

    function gU(UU, XU, zU, cU) {
      let yU = 0;
      return UU.isVerticesDataPresent("color") && (yU |= YU), "none" !== XU && (yU |= NU), "thin" === XU && (yU |= IU, UU.isVerticesDataPresent("instanceColor") && (yU |= pU)), cU.fogEnabled && UU.applyFog && 0 !== cU.fogMode && (yU |= aU), zU >= 1 && (yU |= tU), yU
    }

    function kU(UU, XU) {
      UU.updateColor4("color", XU.color, XU.alpha)
    }
    var GU = zU(38592),
      BU = zU(38057),
      ZU = zU(38007),
      RU = zU(37946),
      PU = zU(38573),
      WU = zU(38589),
      dU = zU(37977),
      LU = zU(37986),
      eU = zU(38004);
    const CU = RU.b.GLSL;
    class wU {
      constructor(UU, XU) {
        this.name = UU, this.sa = XU, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.bS = {
          addOnce: UU => {
            this.disposers.push(UU)
          }
        }, this.uniqueId = XU.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      nS() {
        return this.sa
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
      needAlphaBlendingForMesh(UU) {
        return (0, dU.M)(this.model, UU.visibility, UU.hasVertexAlpha)
      }
      needAlphaTestingForMesh(UU) {
        return (0, dU.Q)(this.model, UU.visibility, UU.hasVertexAlpha)
      }
      dispose() {
        (0, BU.k)(this);
        for (const UU of this.disposers.splice(0)) UU()
      }
      get model() {
        return (0, dU.V)(this)
      }
    }
    const qU = new WeakSet;

    function OU(UU) {
      return qU.has(UU)
    }

    function SU(UU) {
      qU.add(UU)
    }
    const rU = {
      create: (UU, XU) => ((0, ZU.m)(UU, new wU(UU.name, XU)), LU.c.defines()),
      write: () => {},
      addFeature: (UU, XU) => {
        const zU = UU.mirror;
        XU.feature === WU.h && XU.state.dirLightCount > 0 && (UU.disableLighting = !0, (0, dU.T)(UU)), "BLOXD_LIGHTING" in XU.defines && (0, BU.h)(zU), XU.feature === PU.j && ((0, GU.h)(XU.state, CU), function(UU, XU) {
          const zU = UU.nS().qp();
          setTimeout((() => {
            zU.atlasArrays(XU.sources).then((zU => {
              (0, GU.b)(UU, XU, zU.map((UU => ({
                atlas: UU,
                layers: UU.layers
              }))), zU[0].layerWidth, CU)
            })).catch((UU => {
              console.error("Failed to build the atlas's texture arrays", UU)
            }))
          }))
        }(zU, XU.state))
      },
      texture: (UU, XU, zU) => {
        let {
          data: cU,
          sets: yU
        } = zU;
        var QU;
        (SU(UU), cU) && (UU.uvSet = null !== (QU = null === yU || void 0 === yU ? void 0 : yU.coordinatesIndex) && void 0 !== QU ? QU : 0, (0, ZU.$)(UU.matrix, null !== yU && void 0 !== yU ? yU : {}))
      },
      cube: SU,
      canvas: (UU, XU, zU) => {
        let {
          width: cU,
          height: yU,
          mipmaps: QU,
          samplingMode: AU = eU.f.trilinear,
          hasAlpha: FU = !1,
          wrap: oU = eU.c.clamp
        } = zU;
        const DU = UU.qp().createCanvas(cU, yU),
          EU = new eU.j("2d", {
            kind: "canvas",
            width: cU,
            height: yU,
            canvas: DU
          }, {
            samplingMode: AU,
            wrapU: oU,
            wrapV: oU,
            noMipmap: !QU,
            invertY: !0
          });
        return EU.hasAlpha = FU, SU(EU), EU
      }
    };
    var uU = zU(38083),
      fU = zU(37846);
    class iU {
      constructor(UU, XU, zU) {
        this.engine = UU, this.clearColor = XU, this.ambientColor = zU, this.onBeforeRenderObservable = new fU.e, this.onBeforeCameraRenderObservable = new fU.e, this.onAfterRenderObservable = new fU.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.nB = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      qp() {
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
      addPendingData(UU) {
        this.pending.push(UU)
      }
      removePendingData(UU) {
        const XU = this.pending.indexOf(UU); - 1 !== XU && this.pending.splice(XU, 1)
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

    function HU() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const MU = {
      tcU: HU,
      iyU: (UU, XU) => {
        const zU = new iU(UU.engine, cU.e.FromArray(XU.clearColor), cU.Color3.FromArray(XU.ambientColor));
        (0, AU.e)(rU, zU), UU.sa = zU,
          function(UU, XU) {
            const zU = Object.assign((0, uU.i)(UU, "camera"), {
              layerMask: 268435455
            });
            UU.model.nodes.setWorldSource(zU.row, UU.model.view.worldMatrix), UU.camera = XU.activeCamera = zU
          }(UU, zU), (0, yU.i)(UU, ((UU, XU, zU) => (0, QU.g)(UU, XU, zU, FU.b)))
      },
      SyU: () => {},
      setBabylonFog: () => {},
      MyU: HU,
      nyU: () => {},
      linesFromArrays: (UU, XU, zU) => (0, QU.g)(UU, XU, zU, oU),
      na: () => {},
      syU: HU
    };
    var vU = zU(44388),
      VU = zU(44394),
      sU = zU(44409);
    class nU {
      constructor(UU) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const XU = new Promise((UU => {
          this.refused = UU
        }));
        this.deviceLost = Promise.race([UU, XU]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(UU) {
        (function(UU) {
          const {
            name: XU,
            message: zU
          } = null !== UU && void 0 !== UU ? UU : {};
          return "InvalidStateError" === XU && "string" === typeof zU && zU.startsWith("GPUDevice.")
        })(UU) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: UU.message,
          framesRefused: !0
        }))
      }
    }
    var mU = zU(42259),
      lU = zU(39529);

    function xU(UU) {
      return Math.max(4, 4 * Math.ceil(UU / 4))
    }

    function JU(UU, XU, zU, cU) {
      const yU = UU.createBuffer({
        label: cU,
        size: xU(XU.byteLength),
        usage: zU,
        mappedAtCreation: !0
      });
      return new Uint8Array(yU.getMappedRange(), 0, XU.byteLength).set(new Uint8Array(XU.buffer, XU.byteOffset, XU.byteLength)), yU.unmap(), yU
    }

    function jU(UU, XU) {
      return Math.floor(Math.log2(Math.max(UU, XU))) + 1
    }

    function KU(UU, XU, zU, cU, yU, QU) {
      const AU = UU.createTexture({
          label: QU,
          size: {
            width: zU,
            height: cU,
            depthOrArrayLayers: yU
          },
          format: "rgba8unorm",
          mipLevelCount: jU(zU, cU),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        FU = (XU, zU, cU, QU) => {
          UU.queue.writeTexture({
            texture: AU,
            mipLevel: zU
          }, XU, {
            bytesPerRow: 4 * cU,
            rowsPerImage: QU
          }, {
            width: cU,
            height: QU,
            depthOrArrayLayers: yU
          })
        };
      FU(XU, 0, zU, cU);
      let oU = 1;
      for (const DU of function*(UU, XU, zU, cU) {
          let yU = UU,
            QU = XU,
            AU = zU;
          for (; QU > 1 || AU > 1;) {
            const UU = Math.max(1, QU >> 1),
              XU = Math.max(1, AU >> 1),
              zU = new Uint8Array(UU * XU * cU * 4),
              FU = 4 * QU;
            let oU = 0;
            for (let DU = 0; DU < cU; DU++) {
              const cU = DU * FU * AU;
              for (let DU = 0; DU < XU; DU++) {
                const XU = cU + Math.min(2 * DU, AU - 1) * FU,
                  EU = cU + Math.min(2 * DU + 1, AU - 1) * FU;
                for (let cU = 0; cU < UU; cU++) {
                  const UU = 4 * Math.min(2 * cU, QU - 1),
                    AU = 4 * Math.min(2 * cU + 1, QU - 1);
                  for (let cU = 0; cU < 4; cU++) zU[oU++] = yU[XU + UU + cU] + yU[XU + AU + cU] + yU[EU + UU + cU] + yU[EU + AU + cU] + 2 >> 2
                }
              }
            }
            yield {
              data: zU,
              width: UU,
              height: XU
            }, yU = zU, QU = UU, AU = XU
          }
        }(XU, zU, cU, yU)) FU(DU.data, oU++, DU.width, DU.height);
      return AU
    }
    const bU = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function TU(UU) {
      if (UU.startsWith("data:")) {
        const XU = UU.search(/[;,]/);
        return `data:${XU>5?UU.slice(5,XU):""} URL of ${UU.length} characters`
      }
      return UU.length > 80 ? `${UU.slice(0,80)}...` : UU
    }
    async function hU(UU) {
      const XU = await fetch(UU);
      if (!XU.ok) throw new Error(`${TU(UU)}: ${XU.status} ${XU.statusText}`);
      return createImageBitmap(await XU.blob(), bU)
    }
    async function UX(UU) {
      const XU = await hU(UU),
        zU = new OffscreenCanvas(XU.width, XU.height),
        cU = zU.getContext("2d", {
          willReadFrequently: !0
        });
      if (!cU) throw new Error("No 2D context to decode an image");
      cU.drawImage(XU, 0, 0);
      const {
        data: yU
      } = cU.getImageData(0, 0, XU.width, XU.height);
      return XU.close(), {
        pixels: new Uint8Array(yU.buffer, yU.byteOffset, yU.byteLength),
        width: zU.width,
        height: zU.height
      }
    }

    function XX(UU, XU) {
      return (0, mU.g)(UU, XU.urls, (async () => {
        const zU = await Promise.all(XU.urls.map((async (UU, zU) => {
            var cU, yU, QU, AU, FU;
            return null !== (AU = null !== (yU = null === (QU = XU.pixels) || void 0 === QU ? void 0 : QU[zU]) && void 0 !== yU ? yU : null, FU = XU.layerWidth, cU = null !== AU && void 0 !== AU && AU.byteLength && FU && AU.byteLength % (FU * FU * 4) === 0 ? {
              pixels: AU,
              layerWidth: FU,
              layers: AU.byteLength / (FU * FU * 4)
            } : null) && void 0 !== cU ? cU : await async function(UU) {
              const {
                pixels: XU,
                width: zU
              } = await UX(UU);
              return {
                pixels: XU,
                layerWidth: zU,
                layers: XU.byteLength / (zU * zU * 4)
              }
            }(UU)
          }))),
          cU = zU[0].layerWidth;
        return (0, mU.d)(zU, cU, UU.limits.maxTextureArrayLayers).map(((zU, yU) => {
          let {
            pixels: QU,
            layers: AU
          } = zU;
          return {
            texture: KU(UU, QU, cU, cU, AU, `atlas-${yU}-${TU(XU.urls[0])}`),
            layerWidth: cU,
            layers: AU
          }
        }))
      }))
    }
    const zX = new Map([
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
      cX = new Map([
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

    function yX(UU) {
      for (const XU of (0, lU.h)(UU))
        if (!cX.has((0, lU.g)(XU))) return !1;
      return !0
    }

    function QX(UU) {
      const XU = cX.get(UU);
      if (!XU) return null;
      const [zU, cU, yU] = XU;
      return {
        srcFactor: zX.get(zU),
        dstFactor: zX.get(cU),
        operation: yU
      }
    }
    let AX = null;

    function FX(UU) {
      AX = UU
    }
    const oX = new WeakSet;

    function DX(UU) {
      return oX.has(UU)
    }

    function EX(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var QU;
      DX(UU) || (null === (QU = AX) || void 0 === QU || QU(XU, zU, cU, yU))
    }
    class YX {
      constructor(UU) {
        this.resources = UU, this.matrixKey = {
          xY: 0
        }, this.attributesKey = {
          xY: 0
        }, this.inputs = Object.create(null);
        for (let XU = 0; XU < 4; XU++) this.inputs[`world${XU}`] = new pX(this.matrixKey, 16 * XU, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(UU, XU) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, UU, !0), XU && this.resources.vertexBufferCreated(this.attributesKey, XU, !0)
      }
    }
    class NX extends YX {
      constructor(UU, XU, zU) {
        super(UU), this.mesh = XU, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const cU = this.inputs;
        let yU = 0;
        for (const {
            size: AU
          }
          of zU) yU += AU;
        for (const {
            name: AU,
            offset: FU,
            size: oU,
            type: DU
          }
          of zU) cU[AU] = new pX(this.attributesKey, 4 * FU, 4 * yU, oU, !0, DU);
        this.rowStride = yU, UU.w6.set(XU, this);
        const QU = XU.isVerticesDataPresent;
        XU.isVerticesDataPresent = (UU, zU) => UU in cU || QU.call(XU, UU, zU)
      }
      attach(UU, XU) {
        this.matrices = UU, this.attributes = XU, this.bind(UU, XU), this.mirror(UU, UU.length, UU.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      CUU(UU) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, UU ? 64 * UU : void 0)
      }
      wUU() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(UU, XU) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * UU, 16 * XU)
      }
      attributeRows(UU, XU) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, UU * this.rowStride, XU * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(UU, XU, zU) {
        const cU = this.mesh._thinInstanceDataStorage;
        cU.matrixData = UU, cU.matrixBufferSize = XU, cU.worldMatrices = null, cU.instancesCount = zU
      }
    }
    class IX extends YX {
      constructor(UU, XU, zU) {
        var cU, yU, QU, AU;
        super(UU), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (cU = null === zU || void 0 === zU ? void 0 : zU.interleavedKinds) && void 0 !== cU ? cU : null, this.offsets = null !== (yU = null === zU || void 0 === zU ? void 0 : zU.interleavedOffsets) && void 0 !== yU ? yU : [], this.rowStride = null !== (QU = null === zU || void 0 === zU ? void 0 : zU.interleavedRowStride) && void 0 !== QU ? QU : 0, null === (AU = this.layout) || void 0 === AU || AU.forEach(((UU, XU) => {
          this.inputs[UU] = new pX(this.attributesKey, 4 * this.offsets[XU], 4 * this.rowStride, zU.strides[UU])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), UU.batchUploads.set(XU, this), XU.bS.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(UU) {
        const XU = this.packedBatch;
        return XU.renderSelf ? 0 === UU ? this.packedSource : XU.instances[UU - 1] : XU.instances[UU]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(UU, XU, zU, cU) {
        const yU = (XU.renderSelf ? 1 : 0) + XU.rows.length;
        if (this.frame = cU, this.count = yU, this.packedSource = UU, this.packedBatch = XU, 0 === yU) return;
        if (UU.getWorldMatrix(), 16 * yU > this.matrices.length) {
          let UU = this.matrices.length / 16;
          for (; UU < yU;) UU *= 2;
          this.matrices = new Float32Array(16 * UU), this.attributes &&= new Float32Array(UU * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let QU = 0;
        XU.renderSelf && this.packRow(QU++, UU, XU.row, zU);
        for (let AU = 0; AU < XU.rows.length; AU++) this.packRow(QU++, XU.instances[AU], XU.rows[AU], zU);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * yU), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, yU * this.rowStride)
      }
      packRow(UU, XU, zU, cU) {
        const yU = this.matrices;
        if (zU < 0) yU.set(XU.getWorldMatrix().m, 16 * UU);
        else
          for (let DU = 0; DU < 16; DU++) yU[16 * UU + DU] = cU[16 * zU + DU];
        const QU = this.attributes;
        if (!QU) return;
        const AU = XU.XM,
          FU = this.layout;
        for (let DU = 0; DU < FU.length; DU++) {
          var oU;
          const XU = null !== (oU = AU[FU[DU]]) && void 0 !== oU ? oU : 0,
            zU = UU * this.rowStride + this.offsets[DU];
          XU.toArray ? XU.toArray(QU, zU) : XU.copyToArray ? XU.copyToArray(QU, zU) : QU[zU] = XU
        }
      }
    }
    class pX {
      constructor(UU, XU, zU, cU) {
        let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = UU, this.byteOffset = XU, this.byteStride = zU, this.size = cU, this.instanced = yU, this.type = QU, this.normalized = AU
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
    const aX = "CANVAS_ALPHA_ONE",
      tX = `override ${aX}: bool = false;`,
      gX = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function kX(UU, XU, zU) {
      var cU;
      let yU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const QU = null !== (cU = XU._colorFormat) && void 0 !== cU ? cU : "bgra8unorm",
        AU = yU ? 15 : 0;
      return zU ? {
        ...UU,
        targets: [{
          format: QU,
          blend: {
            color: zU,
            alpha: gX
          },
          writeMask: AU
        }]
      } : {
        ...UU,
        constants: {
          ...UU.constants,
          [aX]: 1
        },
        targets: [{
          format: QU,
          writeMask: AU
        }]
      }
    }

    function GX(UU, XU) {
      UU._renderables.push(XU)
    }

    function BX(UU) {
      return UU._device
    }

    function ZX(UU) {
      var XU, zU;
      return null !== (XU = null === (zU = UU._frameGraph) || void 0 === zU ? void 0 : zU._tasks) && void 0 !== XU ? XU : []
    }

    function RX(UU) {
      return UU._currentEncoder
    }

    function PX(UU) {
      return UU.createBindGroupLayout({
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
    const WX = "greater-equal",
      dX = 2e5,
      LX = 1e5,
      eX = new WeakMap;

    function CX(UU, XU) {
      let zU = eX.get(UU);
      if (!zU) {
        zU = {
          module: UU.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, eX.set(UU, zU)
      }
      const cU = `${XU._colorFormat}|${XU._depthStencilFormat}|${XU._sampleCount}`;
      let yU = zU.pipelines.get(cU);
      if (!yU) {
        var QU;
        const {
          module: AU
        } = zU;
        yU = UU.createRenderPipeline({
          label: `placeholder ${cU}`,
          layout: UU.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: AU,
            entryPoint: "v"
          },
          fragment: {
            module: AU,
            entryPoint: "f",
            targets: [{
              format: null !== (QU = XU._colorFormat) && void 0 !== QU ? QU : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: XU._depthStencilFormat ? {
            format: XU._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: XU._sampleCount
          }
        }), zU.pipelines.set(cU, yU)
      }
      return yU
    }

    function wX(UU, XU, zU) {
      const cU = XU.eye,
        yU = XU.viewMatrix;
      UU[0] = cU[0] + yU[2] * zU, UU[1] = cU[1] + yU[6] * zU, UU[2] = cU[2] + yU[10] * zU
    }
    var qX = zU(38700),
      OX = zU(44273),
      SX = zU(37961);
    const rX = Math.PI,
      uX = rX / 1.95,
      fX = [5e-4 / 94, 125e-7, 5e-4 / 18],
      iX = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((UU => {
        let [XU, zU] = UU;
        return .434 * rX * Math.pow(2 * rX / XU, 2) * zU
      }));

    function HX(UU, XU, zU) {
      const {
        up: cU,
        mieDirectionalG: yU
      } = UU, QU = 1 - VX(1 - Math.exp(XU[1] / 45e4), 0, 1), AU = UU.rayleigh - (1 - QU), FU = Math.hypot(XU[0], XU[1], XU[2]), oU = FU > 0 ? 1 / FU : 0, DU = zU.sunDir;
      for (let IU = 0; IU < 3; IU++) DU[IU] = XU[IU] * oU;
      const EU = DU[0] * cU[0] + DU[1] * cU[1] + DU[2] * cU[2],
        YU = 1e3 * Math.max(0, 1 - Math.exp(-(uX - Math.acos(VX(EU, -1, 1))) / 1.5));
      zU.sunE = YU;
      const NU = .2 * UU.turbidity * 1e-17 * UU.mieCoefficient;
      for (let IU = 0; IU < 3; IU++) {
        const UU = fX[IU] * AU,
          XU = iX[IU] * NU,
          cU = YU / (UU + XU);
        zU.inScatterR[IU] = UU * cU, zU.inScatterM[IU] = XU * cU, zU.extinctionBeta[IU] = 8400 * UU + 1250 * XU
      }
      return zU.sunsetMix = VX(Math.pow(1 - EU, 5), 0, 1), zU.sunDiscE = 19e3 * YU, zU.mieScale = (1 - yU * yU) / (4 * rX), zU.mieBase = 1 + yU * yU, zU.mieSlope = 2 * yU, zU
    }
    const MX = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const vX = 1 / function(UU) {
      const {
        A: XU,
        B: zU,
        C: cU,
        D: yU,
        E: QU,
        F: AU
      } = MX;
      return (UU * (XU * UU + cU * zU) + yU * QU) / (UU * (XU * UU + zU) + yU * AU) - QU / AU
    }(1e3);

    function VX(UU, XU, zU) {
      return Math.min(Math.max(UU, XU), zU)
    }
    const sX = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function nX(UU, XU) {
      const zU = new Map(XU),
        cU = [],
        yU = [],
        QU = () => 0 === yU.length || yU[yU.length - 1].active;
      let AU = null;
      const FU = () => {
        const UU = [...zU].filter((UU => {
            let [, XU] = UU;
            return !0 !== XU
          })),
          XU = UU.map((UU => {
            let [XU] = UU;
            return XU
          })).join("|");
        AU = UU.length ? new RegExp(`\\b(${XU})\\b`, "g") : null
      };
      FU();
      for (const oU of UU.split("\n")) {
        const UU = sX.exec(oU);
        if (!UU) {
          QU() && cU.push(AU ? mX(oU, AU, zU) : oU);
          continue
        }
        const XU = UU[1],
          DU = UU[2].trim();
        if ("ifdef" === XU || "ifndef" === XU || "if" === XU) {
          const UU = QU(),
            cU = "if" === XU ? lX(DU, zU) : zU.has(DU) === ("ifdef" === XU);
          yU.push({
            active: UU && cU,
            parentActive: UU,
            taken: cU
          })
        } else if ("elif" === XU || "else" === XU) {
          const UU = yU[yU.length - 1];
          if (!UU) throw new Error(`#${XU} without #if`);
          const cU = !UU.taken && ("else" === XU || lX(DU, zU));
          UU.active = UU.parentActive && cU, UU.taken = UU.taken || cU
        } else if ("endif" === XU) {
          if (!yU.pop()) throw new Error("#endif without #if")
        } else if (QU()) {
          const [UU, ...cU] = DU.split(/\s+/);
          "undef" === XU ? zU.delete(UU) : zU.set(UU, !cU.length || cU.join(" ")), FU()
        }
      }
      if (yU.length) throw new Error("Unterminated #if");
      return cU.join("\n")
    }

    function mX(UU, XU, zU) {
      return UU.replace(XU, (UU => {
        const XU = zU.get(UU);
        return "string" === typeof XU ? XU : UU
      }))
    }

    function lX(UU, XU) {
      var zU;
      const cU = null !== (zU = UU.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== zU ? zU : [];
      let yU = 0;
      const QU = () => cU[yU],
        AU = () => cU[yU++],
        FU = UU => {
          const zU = /^\d/.test(UU) ? UU : XU.get(UU);
          return "string" === typeof zU ? parseInt(zU) : Number.NaN
        },
        oU = () => {
          const UU = AU();
          if ("!" === UU) return !oU();
          if ("(" === UU) {
            const UU = EU();
            return AU(), UU
          }
          if ("defined" === UU) {
            const UU = "(" === QU();
            UU && AU();
            const zU = AU();
            return UU && AU(), XU.has(zU)
          }
          const zU = QU();
          if ("==" === zU || "!=" === zU || ">" === zU || "<" === zU || ">=" === zU || "<=" === zU) {
            AU();
            const XU = FU(UU),
              cU = FU(AU());
            if (Number.isNaN(XU) || Number.isNaN(cU)) return !1;
            switch (zU) {
              case "==":
                return XU === cU;
              case "!=":
                return XU !== cU;
              case ">":
                return XU > cU;
              case "<":
                return XU < cU;
              case ">=":
                return XU >= cU;
              default:
                return XU <= cU
            }
          }
          return XU.has(UU)
        },
        DU = () => {
          let UU = oU();
          for (;
            "&&" === QU();) {
            AU();
            const XU = oU();
            UU = UU && XU
          }
          return UU
        },
        EU = () => {
          let UU = DU();
          for (;
            "||" === QU();) {
            AU();
            const XU = DU();
            UU = UU || XU
          }
          return UU
        },
        YU = EU();
      if (yU !== cU.length) throw new Error(`Cannot evaluate #if ${UU}`);
      return YU
    }
    var xX = zU(38037),
      JX = zU(38169),
      jX = zU(38171),
      KX = zU(41770),
      bX = zU(39571);
    const TX = 32,
      hX = [10, 3, 10],
      Uz = [21, 7, 21],
      Xz = Uz[0] * Uz[1] * Uz[2],
      zz = 0,
      cz = 1,
      yz = 2,
      Qz = 3,
      Az = 64,
      Fz = 512,
      oz = 4 * Xz,
      Dz = 1536,
      Ez = oz + Xz * Dz,
      Yz = 1073741824,
      Nz = Ez + 1;

    function Iz(UU, XU) {
      const zU = UU % XU;
      return zU < 0 ? zU + XU : zU
    }

    function pz(UU, XU, zU) {
      return cU = Iz(UU, Uz[0]), yU = Iz(XU, Uz[1]), QU = Iz(zU, Uz[2]), cU + Uz[0] * (yU + Uz[1] * QU);
      var cU, yU, QU
    }

    function az(UU, XU, zU) {
      return UU + 8 * (XU + 8 * zU)
    }

    function tz(UU, XU, zU) {
      return UU + 4 * (XU + 4 * zU)
    }
    const gz = 65535,
      kz = 0,
      Gz = 1,
      Bz = 2,
      Zz = 3;

    function Rz(UU) {
      return Math.ceil(UU * UU / 32)
    }
    const Pz = 8192,
      Wz = 1 << 18,
      dz = 65536,
      Lz = 294912,
      ez = 128,
      Cz = 4096,
      wz = 16,
      qz = 16385,
      Oz = 81921,
      Sz = 147457,
      rz = 4194304;
    const uz = [0, 0, 0],
      fz = [0, 0, 0];

    function iz(UU, XU, zU, cU) {
      ! function(UU, XU, zU) {
        const [cU, yU, QU] = [UU[0], UU[1], UU[2]];
        let AU, FU, oU;
        Math.abs(yU) < .99 ? (AU = QU, FU = 0, oU = -cU) : (AU = -yU, FU = cU, oU = 0);
        const DU = Math.hypot(AU, FU, oU);
        XU[0] = AU / DU, XU[1] = FU / DU, XU[2] = oU / DU, zU[0] = yU * XU[2] - QU * XU[1], zU[1] = QU * XU[0] - cU * XU[2], zU[2] = cU * XU[1] - yU * XU[0]
      }(cU, uz, fz);
      const yU = 1 / 32;
      for (const [QU, AU] of [
          [0, uz],
          [4, fz]
        ]) {
        for (let zU = 0; zU < 3; zU++) UU[XU + QU + zU] = AU[zU] * yU;
        UU[XU + QU + 3] = -(AU[0] * zU[0] + AU[1] * zU[1] + AU[2] * zU[2]) * yU
      }
    }
    class Hz {
      constructor() {
        this.words = new Uint32Array(Sz), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      gY(UU, XU) {
        this.parts = 0, this.refs = 0, this.view = UU, this.viewAt = XU;
        const zU = UU[XU + 1] * UU[XU + 6] - UU[XU + 2] * UU[XU + 5],
          cU = UU[XU + 2] * UU[XU + 4] - UU[XU] * UU[XU + 6],
          yU = UU[XU] * UU[XU + 5] - UU[XU + 1] * UU[XU + 4],
          QU = Math.hypot(zU, cU, yU) || 1;
        this.light[0] = zU / QU, this.light[1] = cU / QU, this.light[2] = yU / QU
      }
      add(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= Cz || ! function(UU, XU, zU) {
            const cU = UU[XU],
              yU = UU[XU + 1],
              QU = UU[XU + 2],
              AU = UU[XU + 3],
              FU = UU[XU + 4],
              oU = UU[XU + 5],
              DU = UU[XU + 6],
              EU = UU[XU + 7],
              YU = UU[XU + 8],
              NU = UU[XU + 9],
              IU = UU[XU + 10],
              pU = UU[XU + 11],
              aU = UU[XU + 12],
              tU = UU[XU + 13],
              gU = UU[XU + 14],
              kU = UU[XU + 15],
              GU = cU * oU - yU * FU,
              BU = cU * DU - QU * FU,
              ZU = cU * EU - AU * FU,
              RU = yU * DU - QU * oU,
              PU = yU * EU - AU * oU,
              WU = QU * EU - AU * DU,
              dU = YU * tU - NU * aU,
              LU = YU * gU - IU * aU,
              eU = YU * kU - pU * aU,
              CU = NU * gU - IU * tU,
              wU = NU * kU - pU * tU,
              qU = IU * kU - pU * gU,
              OU = GU * qU - BU * wU + ZU * CU + RU * eU - PU * LU + WU * dU;
            if (!(Math.abs(OU) > 1e-12)) return !1;
            const SU = 1 / OU;
            return zU[0] = (oU * qU - DU * wU + EU * CU) * SU, zU[1] = (QU * wU - yU * qU - AU * CU) * SU, zU[2] = (tU * WU - gU * PU + kU * RU) * SU, zU[3] = (IU * PU - NU * WU - pU * RU) * SU, zU[4] = (DU * eU - FU * qU - EU * LU) * SU, zU[5] = (cU * qU - QU * eU + AU * LU) * SU, zU[6] = (gU * ZU - aU * WU - kU * BU) * SU, zU[7] = (YU * WU - IU * ZU + pU * BU) * SU, zU[8] = (FU * wU - oU * eU + EU * dU) * SU, zU[9] = (yU * eU - cU * wU - AU * dU) * SU, zU[10] = (aU * PU - tU * ZU + kU * GU) * SU, zU[11] = (NU * ZU - YU * PU - pU * GU) * SU, zU[12] = (oU * LU - FU * CU - DU * dU) * SU, zU[13] = (cU * CU - yU * LU + QU * dU) * SU, zU[14] = (tU * BU - aU * RU - gU * GU) * SU, zU[15] = (YU * RU - NU * BU + IU * GU) * SU, !0
          }(XU, zU, this.inverse)) return;
        const {
          view: cU,
          viewAt: yU
        } = this, QU = zU;
        let AU = 1 / 0,
          FU = 1 / 0,
          oU = -1 / 0,
          DU = -1 / 0,
          EU = -1 / 0;
        const [YU, NU, IU] = this.light;
        for (let ZU = 0; ZU < 8; ZU++) {
          const zU = 1 & ZU ? UU.hi[0] : UU.lo[0],
            pU = 2 & ZU ? UU.hi[1] : UU.lo[1],
            aU = 4 & ZU ? UU.hi[2] : UU.lo[2],
            tU = zU * XU[QU] + pU * XU[QU + 4] + aU * XU[QU + 8] + XU[QU + 12],
            gU = zU * XU[QU + 1] + pU * XU[QU + 5] + aU * XU[QU + 9] + XU[QU + 13],
            kU = zU * XU[QU + 2] + pU * XU[QU + 6] + aU * XU[QU + 10] + XU[QU + 14],
            GU = cU[yU] * tU + cU[yU + 1] * gU + cU[yU + 2] * kU + cU[yU + 3],
            BU = cU[yU + 4] * tU + cU[yU + 5] * gU + cU[yU + 6] * kU + cU[yU + 7];
          AU = Math.min(AU, GU), FU = Math.min(FU, BU), oU = Math.max(oU, GU), DU = Math.max(DU, BU), EU = Math.max(EU, YU * tU + NU * gU + IU * kU)
        }
        if (oU < -1 || DU < -1 || AU >= 1 || FU >= 1) return;
        const pU = this.parts++,
          aU = this.rects;
        aU[4 * pU] = Mz(AU), aU[4 * pU + 1] = Mz(FU), aU[4 * pU + 2] = Mz(oU), aU[4 * pU + 3] = Mz(DU);
        const tU = this.inverse,
          {
            cell: gU,
            dims: kU,
            lo: GU
          } = UU,
          BU = Oz + pU * wz;
        for (let ZU = 0; ZU < 3; ZU++) this.floats[BU + 4 * ZU] = tU[ZU] / gU, this.floats[BU + 4 * ZU + 1] = tU[4 + ZU] / gU, this.floats[BU + 4 * ZU + 2] = tU[8 + ZU] / gU, this.floats[BU + 4 * ZU + 3] = (tU[12 + ZU] - GU[ZU]) / gU;
        this.words[BU + 12] = UU.at, this.floats[BU + 13] = EU + .001 * (1 + Math.abs(EU)), this.words[BU + 14] = kU[0] | kU[1] << 8 | kU[2] << 16
      }
      finish() {
        const UU = ez,
          {
            counts: XU,
            rects: zU,
            words: cU
          } = this;
        XU.fill(0);
        let yU = 0,
          QU = 0;
        for (; QU < this.parts; QU++) {
          const cU = 4 * QU,
            AU = (zU[cU + 2] - zU[cU] + 1) * (zU[cU + 3] - zU[cU + 1] + 1);
          if (yU + AU > 65536) break;
          yU += AU;
          for (let yU = zU[cU + 1]; yU <= zU[cU + 3]; yU++)
            for (let QU = zU[cU]; QU <= zU[cU + 2]; QU++) XU[yU * UU + QU]++
        }
        let AU = 0;
        for (let oU = 0; oU < 16384; oU++) cU[oU] = AU, AU += XU[oU], XU[oU] = cU[oU];
        cU[16384] = AU;
        for (let oU = 0; oU < QU; oU++) {
          const yU = 4 * oU;
          for (let QU = zU[yU + 1]; QU <= zU[yU + 3]; QU++)
            for (let AU = zU[yU]; AU <= zU[yU + 2]; AU++) cU[qz + XU[QU * UU + AU]++] = oU
        }
        const FU = this.floats;
        for (let oU = 0; oU < 16384; oU++) {
          const UU = qz + cU[oU],
            XU = UU + Math.min(cU[oU + 1] - cU[oU], 64);
          for (let zU = UU + 1; zU < XU; zU++) {
            const XU = cU[zU],
              yU = FU[81934 + XU * wz];
            let QU = zU - 1;
            for (; QU >= UU && FU[81934 + cU[QU] * wz] < yU; QU--) cU[QU + 1] = cU[QU];
            cU[QU + 1] = XU
          }
        }
        this.refs = yU
      }
    }

    function Mz(UU) {
      return Math.min(127, Math.max(0, Math.floor((.5 * UU + .5) * ez)))
    }

    function vz(UU, XU, zU, cU, yU) {
      for (let QU = 0; QU < 4; QU++)
        for (let AU = 0; AU < 4; AU++) yU[4 * QU + AU] = UU[XU + 4 * QU] * zU[cU + AU] + UU[XU + 4 * QU + 1] * zU[cU + 4 + AU] + UU[XU + 4 * QU + 2] * zU[cU + 8 + AU] + UU[XU + 4 * QU + 3] * zU[cU + 12 + AU]
    }

    function Vz(UU, XU, zU, cU, yU) {
      const QU = UU[0] - XU,
        AU = UU[1] - zU,
        FU = UU[2] - cU,
        oU = UU[3] - XU,
        DU = UU[4] - zU,
        EU = UU[5] - cU,
        YU = UU[6] - XU,
        NU = UU[7] - zU,
        IU = UU[8] - cU;
      if (Math.min(QU, oU, YU) > yU || Math.max(QU, oU, YU) < -yU) return !1;
      if (Math.min(AU, DU, NU) > yU || Math.max(AU, DU, NU) < -yU) return !1;
      if (Math.min(FU, EU, IU) > yU || Math.max(FU, EU, IU) < -yU) return !1;
      const pU = oU - QU,
        aU = DU - AU,
        tU = EU - FU,
        gU = YU - oU,
        kU = NU - DU,
        GU = IU - EU,
        BU = aU * GU - tU * kU,
        ZU = tU * gU - pU * GU,
        RU = pU * kU - aU * gU;
      if (Math.abs(BU * QU + ZU * AU + RU * FU) > yU * (Math.abs(BU) + Math.abs(ZU) + Math.abs(RU))) return !1;
      const PU = [pU, aU, tU, gU, kU, GU, QU - YU, AU - NU, FU - IU];
      for (let WU = 0; WU < 3; WU++) {
        const UU = PU[3 * WU],
          XU = PU[3 * WU + 1],
          zU = PU[3 * WU + 2];
        for (let cU = 0; cU < 3; cU++) {
          const pU = 0 === cU ? 0 : 1 === cU ? zU : -XU,
            aU = 0 === cU ? -zU : 1 === cU ? 0 : UU,
            tU = 0 === cU ? XU : 1 === cU ? -UU : 0,
            gU = pU * QU + aU * AU + tU * FU,
            kU = pU * oU + aU * DU + tU * EU,
            GU = pU * YU + aU * NU + tU * IU,
            BU = yU * (Math.abs(pU) + Math.abs(aU) + Math.abs(tU));
          if (Math.min(gU, kU, GU) > BU || Math.max(gU, kU, GU) < -BU) return !1
        }
      }
      return !0
    }
    const sz = new Float32Array(1);
    new Uint32Array(sz.buffer);
    var nz = zU(39580);

    function mz(UU) {
      const [XU, zU, cU] = nz.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${UU.group}) @binding(${UU.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${XU-1}, ${zU-1}, ${cU-1});\n}\n`
    }

    function lz(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [yU, QU, AU] = Uz, [FU, oU, DU] = hX, EU = Math.log2(TX), YU = cU ? "var<private> bloxdSpCrossed: bool;\n" : "", NU = cU ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${UU.group}) @binding(${UU.lN}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${UU.group}) @binding(${UU.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${zU?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${YU}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Gz}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Bz}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${zU?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Zz}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${yU}, ${QU}, ${AU});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${yU} * (s.y + ${QU} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${FU}, ${oU}, ${DU}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${EU}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Qz}u) {\n\t\treturn named && state == ${yz}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${oz}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Ez}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${XU?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${XU?`\t\tif (exits && step > 0 && step % ${jz} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${EU}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${zz}u || kind == ${cz}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${yz}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${oz}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${NU}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const xz = {
      group: 0,
      uniform: 0,
      lN: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Jz() {
      const UU = xz;
      return `${mz(UU)}${lz(UU,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${nz.c}>,\n}\n@group(${UU.group}) @binding(${UU.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${UU.group}) @binding(${UU.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${nz.m})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${nz.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${nz.g}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const jz = 2;
    const Kz = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function bz(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const cU = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${XU.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        yU = "trace" === zU || "lit" === zU,
        QU = "maskEdge" === zU ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        AU = yU ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${XU.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${XU.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===zU?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${QU};\n`;
      return `${cU}${UU.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${yU?function(){const[UU,XU,zU]=nz.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${UU}.0, ${XU}.0, ${zU}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${AU}}\n`:""}${UU.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${XU.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${XU.renderOffset});\n}\n`:""}`
    }
    const Tz = "bloxdSpOwnTexture";

    function hz(UU) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${UU.texture}) - 1u)))`
    }
    const Uc = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${qX.g.map((UU=>{let[XU,zU]=UU;return`\tbloxdSpOut.${XU} = (bloxdSpWord & ${zU}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Xc(UU) {
      return `bloxdSpFlags(${UU})`
    }
    const zc = `${KX.m}.eyePosition`;

    function cc(UU, XU, zU, cU, yU) {
      const QU = UU.indexOf(XU);
      if (QU < 0 || UU.indexOf(XU, QU + 1) >= 0) throw new Error(`Lite's ${yU} program changed at the shader pack ${cU} hook: ${QU<0?"no":"more than one"} anchor (lite/${yU}ShaderPack.ts)`);
      return UU.slice(0, QU) + zU + UU.slice(QU + XU.length)
    }

    function yc(UU) {
      return UU.sunShadow || UU.airShadow
    }

    function Qc(UU, XU) {
      return XU && yc(UU)
    }
    const Ac = {
      group: KX.h,
      ...KX.u
    };

    function Fc(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!yc(UU)) return "";
      if (XU) {
        const XU = Ac,
          yU = "trace" === zU || "lit" === zU;
        let QU = "";
        UU.sunShadow && (QU = yU ? `${lz(XU,!0,"lit"===zU)}${cU=XU,`@group(${cU.group}) @binding(${cU.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${cU.group}) @binding(${cU.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(UU, XU, zU) {
          const cU = `@group(${UU}) @binding(${XU}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return zU ? `${cU}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Kz}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((UU=>`\t{\n\t\tlet o = vec2i(${UU});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : cU
        }(XU.group, KX.y, "maskEdge" === zU));
        const AU = {
          shadowDirection: `${KX.m}.shadowDirection`,
          renderOffset: `${KX.m}.renderOffset`,
          eyePosition: `${KX.m}.eyePosition`
        };
        return `${mz(XU)}${QU}${function(UU){const[XU,zU,cU]=nz.r;return`@group(${UU.group}) @binding(${UU.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${UU.group}) @binding(${UU.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${XU}.0, ${zU}.0, ${cU}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(XU)}${bz(UU,AU,zU)}`
      }
      var cU;
      return `${UU.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${UU.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function oc(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!XU) return "";
      const QU = (AU = "fragmentInputs.vPositionW", FU = UU.sunShadow ? {
        normal: zU,
        flags: cU
      } : null, `\n\tbloxdSpShadowPosition = ${AU};\n${FU?`\tbloxdSpShadowNormal = normalize(${FU.normal});\n\tbloxdSpShadowEmissive = (${FU.flags} & ${qX.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${FU.flags} & ${qX.i}u) != 0u;\n`:""}`);
      var AU, FU;
      return UU.sunShadow && ("mask" === yU || "maskEdge" === yU) ? `${QU}${oU="fragmentInputs.position",DU="maskEdge"===yU,`\n\tbloxdSpShadowPixel = vec2i(${oU}.xy);\n${DU?`\tbloxdSpShadowZ = ${oU}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${oU}.z), dpdy(${oU}.z));\n`:""}`}` : QU;
      var oU, DU
    }
    const Dc = "bloxdSpTextureRotation",
      Ec = "bloxdSpTextureLayers",
      Yc = `@group(${KX.h}) @binding(${KX.z}) var<storage, read> ${Ec}: array<u32>;\n`;

    function Nc(UU) {
      return `\tvertexOutputs.vPackTexture = ${Ec}[min(u32(${UU}), arrayLength(&${Ec}) - 1u)];\n`
    }

    function Ic(UU) {
      return void 0 !== UU.uv
    }

    function pc(UU) {
      if (!UU) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Ic(UU)) return function(UU) {
        const {
          texture: XU,
          cells: zU,
          layers: cU
        } = UU, yU = `textureDimensions(${XU}, bloxdSpLevel)`, QU = zU ? `max(vec2u(vec2f(${yU}) / ${zU}), vec2u(1u))` : yU, AU = zU ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${QU};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${zU}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${zU}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${XU}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${yU} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${QU};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${XU}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let FU;
        if (zU)
          if (1 === cU.length) FU = `\treturn bloxdSpOwnTexel(${cU[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const UU = cU.length - 1;
            FU = `\tvar bloxdSpColour = bloxdSpOwnTexel(${cU[UU]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let XU = UU - 1; XU >= 0; XU--) FU += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${cU[XU]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            FU += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else FU = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${UU.id?`var<private> ${Tz}: u32;\n`:""}${AU}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${hz(UU)};\n\treturn ${QU};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${UU.id?Tz:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${hz(UU)};\n${FU}}\n`
      }(UU);
      const XU = UU,
        zU = UU => {
          const zU = UU > 0 ? `bloxdSpLayer - ${XU.layers*UU}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${UU}, ${XU.sampler}, bloxdSpTurned, ${zU}, round(bloxdSpMipLevel));`
        };
      let cU = "";
      for (let QU = 0; QU < XU.count - 1; QU++) cU += `\tif (bloxdSpLayer < ${XU.layers*(QU+1)}u) {\n\t\t${zU(QU)}\n\t}\n`;
      const yU = XU.frame ? `${XU.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Dc}: u32;\n${Yc}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Dc} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Dc} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Dc} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${yU}${cU}\t${zU(XU.count-1)}\n}\n`
    }

    function ac(UU, XU, zU) {
      return !!UU.surface && "bloxdDefaultSurface" !== UU.surface && function(UU, XU) {
        return "liquid" === XU || !UU
      }(XU, zU)
    }

    function tc(UU, XU) {
      return UU.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${XU.vertexLocalPosition}, ${Xc(XU.vertexFlags)});\n\t\tlet bloxdSpVertex = ${UU.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function gc(UU, XU, zU, cU, yU) {
      if (!UU.surface) return "";
      const QU = (UU, XU) => `\n\tlet bloxdSpTexelUV = ${UU};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${XU}) - 1u));`;
      let AU = "",
        FU = "0u, 0u, vec2f(0.0), 0.0";
      const oU = cU && Ic(cU) ? cU : null,
        DU = cU && !Ic(cU) ? cU : null;
      if (oU) {
        AU = `${oU.id?`\n\tlet bloxdSpTexture = ${oU.id};\n\t${Tz} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${oU.uv};${QU(function(UU,XU){var zU;return`${null!==(zU=UU.levelUv)&&void 0!==zU?zU:UU.cells?`${XU} / ${UU.cells}`:XU} * vec2f(textureDimensions(${UU.texture}))`}(oU,"bloxdSpUv"),oU.texture)}`, FU = (oU.id ? `${Tz}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else DU && (AU = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Dc} = bloxdSpTexture >> 16u;${QU(`fragmentInputs.vMainUV1 * ${(0,xX.Ab)(DU.width)}`,"textureAtlas0")}`, FU = `bloxdSpTexture & 0xffffu, ${Dc}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const EU = yU.overlayColour,
        YU = EU ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        NU = "bloxdDefaultSurface" !== UU.surface || EU ? `\n\tbaseColor = vec4f(${YU}, baseColor.a);` : "",
        IU = ac(UU, XU, zU) ? `\n\t${yU.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${AU}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${yU.alpha}, ${yU.enchantTier}, ${yU.enchantColour}, ${yU.enchantSpeed}, ${null!==EU&&void 0!==EU?EU:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${yU.normal}, ${yU.localPosition}, ${Xc(yU.flags)}, ${FU});\n\tlet bloxdSpSurface = ${UU.surface}(bloxdSpSurfaceIn);${NU}${IU}\n`
    }
    const kc = "bloxdSpLightIn";

    function Gc(UU, XU, zU, cU) {
      if (!UU.light) return "";
      const yU = XU ? `${xX.m}.rgb, ${xX.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${xX.j}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: QU,
          diffuse: AU,
          emissive: FU,
          ambient: oU,
          fogColour: DU,
          fogAlpha: EU,
          normal: YU
        } = cU;
      return `\tvar ${kc} = BloxdLightIn(vec3f(0.0), ${zU?QU:"0.0"}, ${AU}, ${FU}, ${oU}, ${yU}, ${DU}, ${EU}, fragmentInputs.vPositionW, ${YU}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${kc}.litColour = bloxdLitColour(bloxdSpSurface, ${kc});\n`
    }

    function Bc(UU) {
      return UU.light ? `\n\t{\n\t\tlet bloxdSpLight = ${UU.light}(bloxdSpSurface, ${kc});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Zc = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      Rc = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      Pc = "\treturn color;\n}",
      Wc = {
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
    const dc = Object.freeze({});

    function Lc(UU) {
      var XU;
      return !(null === (XU = (0, bX.e)(UU)) || void 0 === XU || !XU.sceneDepth)
    }

    function ec(UU) {
      const XU = (0, bX.e)(UU);
      return !!XU && ac(XU.hooks, XU.strict, XU.program)
    }

    function Cc(UU, XU, zU, cU) {
      return cc(UU, XU, zU, cU, "terrain")
    }

    function wc(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const QU = function(UU) {
          return (0, bX.c)(UU.packVariant, UU.liquid ? "liquid" : "terrain")
        }(UU),
        {
          hooks: AU
        } = QU,
        FU = Qc(QU, cU),
        oU = "edge" === yU ? "maskEdge" : "plain" === yU ? "mask" : "trace",
        DU = tc(AU, Wc);
      DU && (XU = Cc(XU, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${DU}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const EU = "atlas" === UU.texture ? {
          count: UU.atlasCount,
          layers: UU.atlasLayers,
          width: UU.Y5,
          sampler: "atlasSampler",
          frame: UU.animated ? zU : null
        } : null,
        YU = `${QU.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${oc(QU,FU,Wc.normal,Wc.flags,oU)}${gc(AU,QU.strict,QU.program,EU,Wc)}`;
      YU && (XU = Cc(XU, Zc, `${Zc.slice(0,-1)}${YU}`, "surface"));
      const NU = Bc(AU);
      return NU && (XU = Cc(XU, Rc, `${Gc(AU,UU.lighting,UU.dirLightCount>0,Wc)}${Rc}`, "light input"), XU = Cc(XU, Pc, `${NU.slice(1)}${Pc}`, "light")), `${(0,KX.E)()}${QU.sceneDepth?`@group(${KX.h}) @binding(${KX.r}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${zc};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Fc(QU,FU,oU)}${pc(EU)}${Uc}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${QU.code}${XU}`
    }
    const qc = RU.b.WGSL;

    function Oc(UU) {
      return void 0 !== UU.packVariant
    }
    const Sc = {
        myU: 0,
        lyU: 4,
        xyU: 8,
        JyU: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      rc = Sc.aoLevels + 4,
      uc = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      fc = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      ic = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Hc = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Mc = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      vc = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Vc = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      sc = 0,
      nc = 3,
      mc = 4,
      lc = 5,
      xc = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${JX.b}, ${JX.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${JX.b}, ${JX.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Jc = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((UU=>jX.d>>UU&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const jc = {
      LY: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: UU => `animDataPerTex[${UU}]`
    };

    function Kc(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
      return `\n\tlet atlasIdxIn = ${UU};\n\tlet animTick = ${zU.LY};\n\tlet animTickStride = ${zU.stride};\n\tlet numAnimTextures = ${zU.count};\n\t${(0,PU.g)(RU.b.WGSL,zU.perTexture)}\n\t${XU}animLayer;\n`
    }

    function bc(UU) {
      const XU = (XU, zU) => {
        const cU = XU > 0 ? `fragmentInputs.texAtlasIndex - ${UU.atlasLayers.toFixed(1)} * ${XU.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${zU?"textureSampleLevel":"textureSample"}(textureAtlas${XU}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${cU}))${zU?", atlasLod":""})`
      };
      if (1 === UU.atlasCount) return `baseColor = ${XU(0,!1)};`;
      let zU = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,xX.Ab)(UU.Y5)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let cU = 0; cU < UU.atlasCount; cU++) {
        const yU = UU.atlasLayers * (cU + 1) - .5;
        zU += `${cU>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,xX.Ab)(yU)}) {\n\t\tbaseColor = ${XU(cU,!0)};\n\t}`
      }
      return zU
    }

    function Tc(UU) {
      return `terrain-${UU.texture}${"atlas"===UU.texture?UU.atlasCount:""}${UU.animated?"-anim":""}${UU.alphaTest?"-test":""}${UU.lighting?"-lit":""}-dir${UU.dirLightCount}${UU.packed?"-packed":""}${Oc(UU)?`-sp${UU.packVariant}`:""}${UU.liquid?"-liquid":""}${UU.resting?"-rest":""}`
    }

    function hc(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const cU = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const zU = "none" !== UU.texture,
          cU = "atlas" === UU.texture,
          yU = UU.dirLightCount > 0,
          QU = Oc(UU);
        if (UU.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${UU.dirLightCount}`);
        let AU = 1,
          FU = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (cU) {
          UU.animated && (FU += `@group(2) @binding(${AU++}) var<storage, read> animDataPerTex: array<f32>;\n`), FU += `@group(2) @binding(${AU++}) var atlasSampler: sampler;\n`;
          for (let XU = 0; XU < UU.atlasCount; XU++) FU += `@group(2) @binding(${AU++}) var textureAtlas${XU}: texture_2d_array<f32>;\n`
        } else "single" === UU.texture && (FU += `@group(2) @binding(${AU++}) var diffuseSamplerSampler: sampler;\n`, FU += `@group(2) @binding(${AU++}) var diffuseSampler: texture_2d<f32>;\n`);
        const oU = function(UU) {
            const XU = Vc,
              zU = "none" !== UU.texture,
              cU = "atlas" === UU.texture,
              yU = Oc(UU);
            return UU.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${zU?"uv: vec2f,":""}\n\t${cU?"texAtlasIndices: f32,":""}\n\t${UU.lighting?"aPackedLightLevels: f32,":""}\n\t${yU?"blockFlagWords: vec2u,":""}\n}\n${xc}\n${Jc}\n${"single"===UU.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${zU?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===UU.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${cU?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${UU.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${yU?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${XU.position}) position: vec3f,\n\t@location(${XU.normal}) normal: vec4f,\n\t@location(${XU.color}) color: vec4f,\n\t${zU?`@location(${XU.uv}) uv: vec2f,`:""}\n\t${UU.lighting?`@location(${XU.packedLight}) aPackedLightLevels: f32,`:""}\n\t${yU?`@location(${XU.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(UU),
          DU = `\n${Hc}\n${fc}\n${ic}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${FU}\n${tX}\n${oU.declarations}\nstruct Varyings {\n\t${"none"===XU?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${UU.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${yU?"@location(5) vTerrainLambert: f32,":""}\n\t${zU?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${cU?"@location(7) texAtlasIndex: f32,":""}\n\t${UU.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${QU?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${QU&&cU?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${UU.resting?"":(0,xX.u)(qc)}\n${vc}\n\n@vertex\nfn mainVertex(${oU.parameter}) -> Varyings {\n\t${oU.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${QU?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${qX.e.placed}u;`:""}\n\t${QU&&cU?Nc("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${UU.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${zU?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${cU?function(UU){return UU?Kc("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(UU.animated):""}\n\t${"single"===UU.texture&&UU.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,xX.ib)(qc)}\n\t${(0,xX.M)(qc,UU.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${UU.resting?"":Mc}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${cU?bc(UU):""}\n\t${"single"===UU.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${zU?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${UU.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${yU?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${aX}));\n\t${Oc(UU)?(0,xX.ub)(RU.b.WGSL):(0,xX.V)(qc)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          EU = new Set;
        UU.lighting && EU.add("BLOXD_LIGHTING");
        yU && EU.add("BLOXD_TERRAIN_DIRECTIONAL");
        return nX(DU, new Map([...EU].map((UU => [UU, !0]))))
      }(UU, zU);
      if (!Oc(UU)) return cU;
      const yU = wc(UU, cU, Kc, XU, zU);
      return "none" === zU ? yU : `${yU}${function(UU){const XU="none"!==UU.texture&&UU.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${UU.resting?"":Mc}\n\t${UU.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${XU&&"atlas"===UU.texture?bc(UU):""}\n\t${XU&&"single"===UU.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${XU?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${qX.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(UU)}`
    }
    const Uy = new Map([
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

    function Xy(UU, XU) {
      const zU = new Map;
      let cU = 0;
      const yU = [],
        QU = [],
        AU = [];
      for (const DU of XU) {
        var FU, oU;
        const XU = null !== (FU = DU.type.trim().split(/\s+/).pop()) && void 0 !== FU ? FU : DU.type,
          EU = Uy.get(XU);
        if (!EU) throw new Error(`Lite: no uniform layout for ${DU.name}: ${DU.type}`);
        const YU = null !== (oU = DU.arraySize) && void 0 !== oU ? oU : 0,
          NU = YU ? 4 : EU.align;
        cU = Math.ceil(cU / NU) * NU;
        const IU = YU ? 4 * Math.ceil(EU.floats / 4) : EU.floats;
        if (zU.set(DU.name, {
            offset: cU,
            floats: EU.floats,
            arraySize: YU,
            stride: IU
          }), YU && EU.floats <= 2) {
          const XU = `${UU}_${AU.length}_strided`;
          QU.push(`struct ${XU} {\n\t@size(16) el: ${EU.wgsl},\n}`), AU.push(DU.name), yU.push(`\t@align(16) ${DU.name}: array<${XU}, ${YU}>,`)
        } else YU ? yU.push(`\t@align(16) ${DU.name}: array<${EU.wgsl}, ${YU}>,`) : yU.push(`\t${DU.name}: ${EU.wgsl},`);
        cU += YU ? IU * YU : EU.floats
      }
      return {
        slots: zU,
        floats: Math.max(4, 4 * Math.ceil(cU / 4)),
        wgsl: `${QU.join("\n")}\nstruct ${UU} {\n${yU.join("\n")}\n}\n`,
        stridedArrays: AU
      }
    }
    const zy = [{
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
      cy = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      yy = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Qy(UU, XU) {
      return `#if defined(${UU}) && ${UU}DIRECTUV == 0\nvarying v${XU}UV: vec2f;\n#endif`
    }

    function Ay(UU, XU, zU) {
      return `#if defined(${UU}) && ${UU}DIRECTUV == 0\nif (uniforms.v${XU}Infos.x==0.)\n{vertexOutputs.v${XU}UV= (uniforms.${zU}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${XU}UV= (uniforms.${zU}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Fy(UU, XU, zU) {
      return `#ifdef ${UU}\n#if ${UU}DIRECTUV == 1\n#define v${XU}UV vMainUV1\n#elif ${UU}DIRECTUV == 2\n#define v${XU}UV vMainUV2\n#else\nvarying v${XU}UV: vec2f;\n#endif\nvar ${zU}SamplerSampler: sampler;\nvar ${zU}Sampler: texture_2d<f32>;\n#endif`
    }
    const oy = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Dy = 256,
      Ey = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Yy = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Ny = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      Iy = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      py = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      ay = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      ty = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      gy = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Yy}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Qy("OPACITY","Opacity")}\n${Qy("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${ty}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Ny}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Ay("OPACITY","Opacity","opacity")}\n${Ay("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Iy}\n#define CUSTOM_VERTEX_MAIN_END\n${py}\n}\n`;
    const ky = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Fy("OPACITY","Opacity","opacity")}\n${Fy("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${ty}\n${ay}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((UU,XU)=>function(UU){const XU=`
    frame.lights[LITE_LIGHT$ {
        UU
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      UU
    }\
    nvar diffuse$ {
      UU
    }: vec4f = $ {
      XU
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      UU
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      XU
    }.vLightData, diffuse$ {
      UU
    }.rgb, $ {
      XU
    }.vLightSpecular.rgb, diffuse$ {
      UU
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(XU))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, Gy = /^([gimus]+)!/, By = new Set;

    function Zy(UU) {
      By.has(UU) || (By.add(UU), console.warn(`Lite: no place for plugin code at ${UU} in the standard shader: it is left out`))
    }

    function Ry(UU, XU) {
      let zU = UU;
      const cU = new Map;
      for (const [QU, AU] of XU) {
        var yU;
        cU.set(QU, `${null!==(yU=cU.get(QU))&&void 0!==yU?yU:""}${AU}\n`)
      }
      for (const [QU, AU] of cU) {
        if (!QU.startsWith("!")) {
          const UU = `#define ${QU}`;
          if (!zU.includes(UU)) {
            Zy(QU);
            continue
          }
          zU = zU.replace(UU, (() => `\n${AU}\n${UU}`));
          continue
        }
        let UU = QU.substring(1),
          XU = "g";
        if (UU.startsWith("!")) XU = "", UU = UU.substring(1);
        else {
          const zU = Gy.exec(UU);
          zU && (XU = zU[1], UU = UU.substring(XU.length + 1))
        }
        const cU = new RegExp(UU, XU.includes("g") ? XU : `${XU}g`);
        let yU = cU.exec(zU);
        for (yU || Zy(QU); yU;) {
          const UU = yU,
            XU = AU.replace(/\$(\d+)/g, ((XU, zU) => Number(zU) < UU.length ? UU[Number(zU)] : ""));
          zU = zU.substring(0, UU.index) + XU + zU.substring(UU.index + UU[0].length), cU.lastIndex = UU.index + XU.length, yU = cU.exec(zU)
        }
      }
      return zU
    }
    const Py = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Wy = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      dy = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Ly(UU) {
      const XU = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let zU = UU.replace(Py, ((UU, zU, cU, yU, QU, AU) => ("attribute" === zU ? XU.attributes.push({
        name: QU,
        type: AU
      }) : void 0 === zU ? XU.varyings.push({
        name: QU,
        type: AU,
        interpolation: Cy(AU, cU, yU)
      }) : XU.uniforms.push({
        name: QU,
        type: ey(AU)
      }), "")));
      return zU = zU.replace(Wy, ((UU, zU) => (XU.samplers.add(zU), ""))), zU = zU.replace(dy, ((UU, zU, cU) => (XU.textures.push({
        name: zU,
        type: cU
      }), ""))), XU.body = zU, XU
    }

    function ey(UU) {
      const XU = UU.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        zU = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(XU);
      if (!zU) throw new Error(`Lite: unsupported uniform type ${UU}`);
      return zU
    }

    function Cy(UU, XU, zU) {
      return void 0 === XU && void 0 === zU ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(UU.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === XU ? "@interpolate(flat) " : `@interpolate(${null!==XU&&void 0!==XU?XU:"perspective"}, ${null!==zU&&void 0!==zU?zU:"center"}) `
    }

    function wy(UU) {
      return ry({
        defines: UU.defines,
        vertex: Ry(gy, UU.vertexCode),
        fragment: Ry(ky, UU.fragmentCode),
        members: [...zy, ...UU.defines.has("OPACITY") ? cy : [], ...UU.defines.has("EMISSIVE") ? yy : [], ...UU.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function qy(UU) {
      const XU = UU.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (XU === UU) throw new Error("Lite: fragment main has no return");
      return XU
    }
    const Oy = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Yy}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Ny}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Iy}\n${py}\n}\n`,
      Sy = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${ay}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function ry(UU) {
      const XU = UU.defines,
        zU = Ly(nX(UU.vertex, XU)),
        cU = Ly(nX(UU.fragment, XU)),
        yU = new Map;
      for (const GU of [...zU.varyings, ...cU.varyings]) yU.has(GU.name) || yU.set(GU.name, GU);
      const QU = [...yU.values()].map(((UU, XU) => `\t@location(${XU}) ${UU.interpolation}${UU.name}: ${UU.type},`)),
        AU = [...UU.members];
      for (const GU of [...zU.uniforms, ...cU.uniforms]) AU.some((UU => UU.name === GU.name)) || AU.push(GU);
      const FU = Xy(UU.structName, AU),
        oU = [],
        DU = [];
      let EU = 1;
      const YU = new Set;
      for (const GU of [...zU.textures, ...cU.textures]) {
        if (YU.has(GU.name)) continue;
        YU.add(GU.name);
        const UU = `${GU.name}Sampler`,
          XU = EU++,
          zU = EU++,
          cU = GU.type.startsWith("texture_2d_array") ? "2d-array" : GU.type.startsWith("texture_cube") ? "cube" : "2d";
        oU.push({
          name: GU.name,
          binding: XU,
          samplerBinding: zU,
          dimension: cU
        }), DU.push(`@group(2) @binding(${XU}) var ${GU.name}: ${GU.type};`), DU.push(`@group(2) @binding(${zU}) var ${UU}: sampler;`)
      }
      for (const GU of [...zU.samplers, ...cU.samplers])
        if (!YU.has(GU.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${GU} has no texture`);
      const NU = [Hc, Ey, FU.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${UU.structName};`, ...DU].join("\n"),
        IU = zU.attributes,
        pU = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...zU.attributes.map(((UU, XU) => `\t@location(${XU}) ${UU.name}: ${UU.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        aU = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...QU, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        tU = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...cU.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...QU, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", tX, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${aX}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        gU = UU => {
          for (const XU of FU.stridedArrays) UU = UU.replace(new RegExp(`\\b${XU}\\s*\\[(.*?)\\]`, "g"), `${XU}[$1].el`);
          return UU
        };
      return {
        vertex: `${NU}\n${pU}\n${aU}\n${gU(zU.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${NU}\n${tU}\n${qy((kU=gU(cU.body),kU.includes("fragmentInputs.position")?kU.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):kU))}`,
        attributes: IU,
        material: FU,
        textures: oU
      };
      var kU
    }
    const uy = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      fy = UU => ({
        name: UU,
        type: "vec3"
      }),
      iy = UU => ({
        name: UU,
        type: "float"
      }),
      Hy = Xy("EarthSkyUniforms", [fy("viewFrom"), iy("exposureScale"), fy("zenithOffset"), iy("fogOn"), fy("up"), iy("ditherOn"), fy("sun"), iy("turbidity"), fy("tint"), iy("rayleigh"), fy("sunDir"), iy("mieStrength"), fy("inScatterR"), iy("mieFocus"), fy("inScatterM"), iy("sunE"), fy("extinctionBeta"), iy("sunsetMix"), iy("mieScale"), iy("mieBase"), iy("mieSlope"), iy("sunDiscE"), iy("exposure")]),
      My = `${Hc}\n${Ey}\n${Hy.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      vy = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${uy.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Vy = `\n${tX}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(MX).map((UU=>{let[XU,zU]=UU;return`const TONE_${XU}: f32 = ${zU};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${vX};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${aX}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var sy = zU(37814);
    const ny = new sy.Sp,
      my = new sy.Sp,
      ly = new sy.Quaternion,
      xy = new Float64Array(3),
      Jy = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      jy = new Float64Array(16);

    function Ky(UU, XU, zU) {
      const cU = zU.worldMatrix;
      var yU;
      UU.updateFloat3("viewFrom", cU[12], cU[13], cU[14]), UU.updateFloatsFrom("zenithOffset", XU.cameraOffset, 0, 3), UU.updateFloatsFrom("up", XU.up, 0, 3), XU.luminance > 0 && (UU.updateFloat("exposure", XU.luminance), UU.updateFloat("exposureScale", (yU = XU.luminance, Math.log2(2 / Math.pow(yU, 4))))), UU.updateFloat("turbidity", XU.turbidity), UU.updateFloat("rayleigh", XU.rayleigh), UU.updateFloat("mieStrength", XU.mieCoefficient), UU.updateFloat("mieFocus", XU.mieDirectionalG), UU.updateFloatsFrom("tint", XU.tint, 0, 3), UU.updateFloat("fogOn", XU.fog && zU.fogEnabled && 0 !== zU.fogMode ? 1 : 0), UU.updateFloat("ditherOn", XU.dithering ? 1 : 0);
      const QU = XU.sunPosition;
      if (ny.set(QU[0], QU[1], QU[2]), !XU.useSunPosition) {
        const UU = Math.PI * (XU.inclination - .5),
          zU = 2 * Math.PI * (XU.azimuth - .5);
        ny.set(XU.distance * Math.cos(zU) * Math.cos(UU), XU.distance * Math.sin(-UU), XU.distance * Math.sin(zU) * Math.cos(UU)), sy.Quaternion.FromUnitVectorsToRef(sy.Sp.UpReadOnly, my.set(XU.up[0], XU.up[1], XU.up[2]), ly), ny.rotateByQuaternionToRef(ly, ny)
      }
      UU.updateVector3("sun", ny), xy[0] = ny.x, xy[1] = ny.y, xy[2] = ny.z;
      const AU = HX(XU, xy, Jy);
      UU.updateFloatsFrom("sunDir", AU.sunDir, 0, 3), UU.updateFloat("sunE", AU.sunE), UU.updateFloatsFrom("inScatterR", AU.inScatterR, 0, 3), UU.updateFloatsFrom("inScatterM", AU.inScatterM, 0, 3), UU.updateFloatsFrom("extinctionBeta", AU.extinctionBeta, 0, 3), UU.updateFloat("sunsetMix", AU.sunsetMix), UU.updateFloat("sunDiscE", AU.sunDiscE), UU.updateFloat("mieScale", AU.mieScale), UU.updateFloat("mieBase", AU.mieBase), UU.updateFloat("mieSlope", AU.mieSlope)
    }

    function by(UU, XU) {
      const zU = jy;
      zU[0] = XU.far, zU[5] = XU.far, zU[10] = XU.far, zU[15] = 1;
      const cU = UU.infiniteDistance;
      for (let yU = 0; yU < 3; yU++) zU[12 + yU] = UU.position[yU] + (cU ? XU.worldMatrix[12 + yU] : 0);
      return jy
    }
    class Ty {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(UU, XU, zU, cU, yU) {
        zU !== this.pipeline && (UU.setPipeline(zU), this.pipeline = zU), UU.setBindGroup(1, cU, [yU]);
        const QU = XU.material.bindGroup;
        QU !== this.materialGroup && (UU.setBindGroup(2, QU), this.materialGroup = QU);
        const AU = XU.program.packGroup;
        AU && AU !== this.packGroup && (UU.setBindGroup(KX.h, AU), this.packGroup = AU);
        const {
          vertexBuffers: FU,
          vertexOffsets: oU
        } = this;
        for (let DU = 0; DU < XU.vertexBuffers.length; DU++) FU[DU] === XU.vertexBuffers[DU] && oU[DU] === XU.vertexOffsets[DU] || (UU.setVertexBuffer(DU, XU.vertexBuffers[DU], XU.vertexOffsets[DU]), FU[DU] = XU.vertexBuffers[DU], oU[DU] = XU.vertexOffsets[DU]);
        XU.indexBuffer && XU.indexBuffer !== this.indexBuffer && (UU.setIndexBuffer(XU.indexBuffer, XU.indexFormat), this.indexBuffer = XU.indexBuffer)
      }
    }
    class hy {
      constructor(UU, XU, zU, cU) {
        this.modelMeshes = UU, this.pUU = XU, this.maker = zU, this.warnOnce = cU, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (UU, XU) => {
          (XU < -1 || XU > 1) && this.warnOnce(`group:${XU}`, `rendering group ${XU} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(UU) {
        this.collectGroup(UU, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(UU, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(UU, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.pUU.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(UQ), this.transparentDraws.sort(XQ)
      }
      collectGroup(UU, XU, zU, cU, yU) {
        const QU = this.modelMeshes.group(XU),
          AU = this.pUU.group(XU),
          FU = 0 === XU ? null === AU || void 0 === AU ? void 0 : AU.opaque : void 0;
        this.collectList(UU, null === QU || void 0 === QU ? void 0 : QU.opaque, FU || null === AU || void 0 === AU ? void 0 : AU.opaque, XU, !1, zU, yU), FU && (this.pUU.drawn += this.maker.bundleDraws(UU, FU, XU)), this.collectList(UU, null === QU || void 0 === QU ? void 0 : QU.alphaTest, void 0, XU, !1, zU, yU), this.collectList(UU, null === QU || void 0 === QU ? void 0 : QU.transparent, null === AU || void 0 === AU ? void 0 : AU.transparent, XU, !0, cU, yU)
      }
      collectList(UU, XU, zU, cU, yU, QU, AU) {
        var FU;
        const oU = QU.length;
        XU && this.maker.pushDraws(UU, XU.units, XU.units.length, cU, yU, QU, XU.rows), zU && (this.pUU.drawn += this.maker.pushDraws(UU, zU, zU.length, cU, yU, QU));
        const DU = yU ? null === (FU = this.modelMeshes.group(cU)) || void 0 === FU ? void 0 : FU.text : void 0;
        DU && this.maker.pushDraws(UU, DU.units, DU.units.length, cU, !0, QU, DU.rows), AU && zQ(QU, oU)
      }
    }

    function UQ(UU, XU) {
      return UU.program.id - XU.program.id || UU.material.owner.uniqueId - XU.material.owner.uniqueId
    }

    function XQ(UU, XU) {
      return UU.material.owner.uniqueId - XU.material.owner.uniqueId
    }

    function zQ(UU, XU) {
      for (let zU = XU + 1; zU < UU.length; zU++) {
        const cU = UU[zU];
        let yU = zU - 1;
        for (; yU >= XU && XQ(UU[yU], cU) > 0; yU--) UU[yU + 1] = UU[yU];
        UU[yU + 1] = cU
      }
    }
    const cQ = {};

    function yQ(UU) {
      return UU.hasThinInstances ? "thin" : UU.jyU || UU._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function QQ(UU, XU, zU) {
      return UU ? (zU._needUVs = !0, UU.optimizeUVAllocation && (0, eU.F)(UU.matrix) ? (zU[`${XU}DIRECTUV`] = UU.uvSet + 1, zU[`MAINUV${UU.uvSet+1}`] = !0) : zU[`${XU}DIRECTUV`] = 0, !0) : (zU[`${XU}DIRECTUV`] = 0, !1)
    }

    function AQ(UU) {
      const XU = new Map;
      for (const zU in UU) {
        if (95 === zU.charCodeAt(0)) continue;
        const cU = UU[zU],
          yU = typeof cU;
        "number" === yU || "string" === yU ? XU.set(zU, String(cU)) : cU && "function" !== yU && XU.set(zU, !0)
      }
      return XU
    }

    function FQ(UU) {
      const XU = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: zU
        }
        of UU.features)
        for (const UU in zU) XU[UU] = zU[UU];
      return XU
    }

    function oQ(UU) {
      const XU = UU.parts.geometry;
      return null !== XU && void 0 !== XU && XU.live ? XU : null
    }

    function DQ(UU) {
      var XU;
      return null !== (XU = oQ(UU)) && void 0 !== XU ? XU : cQ
    }
    class EQ {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = UU, this.warnOnce = XU, this.programWithModel = zU, this.packFailed = cU, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(UU, XU, zU, cU, yU) {
        const QU = XU.owner;
        let AU = this.drawStates.get(XU);
        if (!AU) {
          const UU = XU.parts.materials[XU.range];
          if (!UU) return this.warnOnce("model", `${zU.name} on ${QU.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          AU = {
            defines: FQ(UU),
            model: UU,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: yU,
            groupId: cU,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(XU, AU)
        }
        if (this.programCurrent(AU, XU, yU, cU)) return AU.program;
        const {
          model: FU
        } = AU, oU = DQ(XU), DU = this.instanceLayout(QU, yU), EU = this.definesBits(QU);
        if (!this.prepareModelDefines(UU, QU, FU, AU.defines, cU, yU)) return null;
        AU.instancing = yU, AU.groupId = cU, AU.modelVersion = FU.version, AU.geometry = oU, AU.instanceLayout = DU, AU.definesBits = EU;
        const YU = function(UU) {
          let XU = "";
          for (const [zU, cU] of UU) XU += !0 === cU ? `${zU};` : `${zU}=${cU};`;
          return XU
        }(AQ(AU.defines));
        return YU === AU.definesKey && AU.packVariant === this.modelPackVariant && AU.program && !this.packFailed(AU.program) || (AU.definesKey = YU, AU.packVariant = this.modelPackVariant, AU.program = this.programWithModel(FU, AU.defines, YU)), AU.program
      }
      programCurrent(UU, XU, zU, cU) {
        return null !== UU.program && !this.packFailed(UU.program) && UU.instancing === zU && UU.groupId === cU && this.definesHold(UU, XU, zU)
      }
      definesHold(UU, XU, zU) {
        return UU.modelVersion === UU.model.version && UU.geometry === DQ(XU) && UU.instanceLayout === this.instanceLayout(XU.owner, zU) && UU.definesBits === this.definesBits(XU.owner) && UU.packVariant === this.modelPackVariant
      }
      modelPackKind(UU) {
        var XU;
        return 0 === this.modelPackVariant ? null : null !== (XU = (0, dU.v)(UU, WU.h.name)) && void 0 !== XU && XU.active ? "placed" : UU.item ? "item" : UU.lifeform ? "lifeform" : UU.box ? "box" : null
      }
      instanceLayout(UU, XU) {
        var zU, cU, yU;
        return "thin" === XU ? null !== (yU = this.resources.w6.get(UU)) && void 0 !== yU ? yU : null : "instanced" === XU && null !== (zU = null === (cU = UU._userInstancedBuffersStorage) || void 0 === cU ? void 0 : cU.interleavedKinds) && void 0 !== zU ? zU : null
      }
      definesBits(UU) {
        const XU = this.view;
        return (UU.visibility < 1 ? 1 : 0) | (UU.hasVertexAlpha ? 2 : 0) | (UU.applyFog ? 4 : 0) | (UU.useVertexColors ? 8 : 0) | (UU.nonUniformScaling ? 16 : 0) | (XU.fogEnabled && 0 !== XU.fogMode ? 32 : 0) | (XU.lightsEnabled ? 64 : 0) | XU.lightCount << 7
      }
      prepareLightDefines(UU, XU, zU) {
        let cU = 0;
        if (this.view.lightsEnabled && !XU) {
          const XU = Math.min(zU, 4);
          for (; cU < this.view.lightCount && (UU[`LIGHT${cU}`] = !0, UU[`LITE_LIGHT${cU}_SLOT`] = cU, cU++, UU._needNormals = !0, cU !== XU););
        }
        for (let yU = cU; yU < 4; yU++) UU[`LIGHT${yU}`] = !1, UU[`LITE_LIGHT${yU}_SLOT`] = void 0
      }
      prepareModelDefines(UU, XU, zU, cU, yU, QU) {
        const {
          features: AU
        } = zU;
        cU._needNormals = !1, cU._needUVs = !1;
        const FU = this.view;
        this.prepareLightDefines(cU, zU.disableLighting, zU.maxSimultaneousLights), cU.MAINUV1 = !1, cU.MAINUV2 = !1;
        const oU = zU.diffuseTexture;
        oU ? (cU._needUVs = !0, cU.DIFFUSE = !0, oU.optimizeUVAllocation && (0, eU.F)(oU.matrix) ? (cU.DIFFUSEDIRECTUV = oU.uvSet + 1, cU[`MAINUV${oU.uvSet+1}`] = !0) : cU.DIFFUSEDIRECTUV = 0, oU.uvSet > 1 && this.warnOnce(`uvset:${zU.name}`, `${zU.name} samples UV set ${oU.uvSet+1}, which is not supported`)) : (cU.DIFFUSE = !1, cU.DIFFUSEDIRECTUV = 0);
        const DU = zU.opacityTexture,
          EU = zU.emissiveTexture;
        cU.OPACITY = QQ(DU, "OPACITY", cU), cU.OPACITYRGB = null !== DU && DU.getAlphaFromRGB, cU.EMISSIVE = QQ(EU, "EMISSIVE", cU), (DU && DU.uvSet > 1 || EU && EU.uvSet > 1) && this.warnOnce(`uvset:${zU.name}`, `${zU.name} samples a UV set past 2, which is not supported`);
        const YU = zU.reflectionTexture,
          NU = null !== YU;
        if (NU) {
          if (!this.resources.boundTexture(YU)) return !1;
          cU._needNormals = !0
        }
        cU.REFLECTION = NU, cU.REFLECTIONMAP_3D = NU, cU.REFLECTIONMAP_SKYBOX = NU, cU.REFLECTIONMAP_OPPOSITEZ = NU && (UU.useRightHandedSystem ? !YU.invertZ : YU.invertZ), cU.ROUGHNESS = NU && zU.roughness > 0, cU.REFLECTIONOVERALPHA = NU && zU.useReflectionOverAlpha, cU.LITE_REFLECTION_LUMINANCE = NU && "cube" === YU.source.kind && YU.source.luminance, (XU.skeleton || XU.morphTargetManager) && this.warnOnce(`skin:${XU.name}`, `${XU.name} has bones or morph targets, which are not supported`), cU.FOG = zU.fogEnabled && XU.applyFog && FU.fogEnabled && 0 !== FU.fogMode, cU.NONUNIFORMSCALING = XU.nonUniformScaling;
        const {
          visibility: IU,
          hasVertexAlpha: pU
        } = XU;
        cU.ALPHATEST = (0, dU.Q)(zU, IU, pU), cU.ALPHAFROMDIFFUSE = (0, dU.bb)(zU), cU.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== zU.transparencyMode, cU.ALPHABLEND = null === zU.transparencyMode || (0, dU.M)(zU, IU, pU), cU.PREMULTIPLYALPHA = 7 === zU.alphaMode || 8 === zU.alphaMode, cU.EMISSIVEASILLUMINATION = zU.useEmissiveAsIllumination, cU.LINKEMISSIVEWITHDIFFUSE = zU.linkEmissiveWithDiffuse, cU.TWOSIDEDLIGHTING = !zU.backFaceCulling && zU.twoSidedLighting, cU.INSTANCES = "none" !== QU, cU.THIN_INSTANCES = "thin" === QU, cU.LITE_FRONT_LAYER = yU >= 1;
        for (const {
            feature: PU,
            state: WU,
            active: dU
          }
          of AU) {
          var aU, tU;
          if (dU) null === (aU = (tU = (0, SX.j)(PU)).prepareDefinesBeforeAttributes) || void 0 === aU || aU.call(tU, WU, cU, UU, XU)
        }
        this.modelPackKind(zU) && (cU._needNormals = !0), cU.NORMAL = cU._needNormals && XU.isVerticesDataPresent("normal"), cU.UV1 = cU._needUVs && XU.isVerticesDataPresent("uv"), cU.UV2 = cU._needUVs && XU.isVerticesDataPresent("uv2");
        const gU = XU.useVertexColors && XU.isVerticesDataPresent("color");
        cU.VERTEXCOLOR = gU, cU.VERTEXALPHA = XU.hasVertexAlpha && gU, cU.INSTANCESCOLOR = "none" !== QU && XU.isVerticesDataPresent("instanceColor");
        for (const {
            feature: PU,
            state: WU,
            active: dU
          }
          of AU) {
          var kU, GU;
          if (dU) null === (kU = (GU = (0, SX.j)(PU)).prepareDefines) || void 0 === kU || kU.call(GU, WU, cU, UU, XU, zU)
        }
        const BU = UU.qp();
        for (const {
            feature: PU,
            state: WU,
            active: dU
          }
          of AU) {
          var ZU, RU;
          if (dU && !1 === (null === (ZU = (RU = (0, SX.j)(PU)).isReadyForSubMesh) || void 0 === ZU ? void 0 : ZU.call(RU, WU, cU, UU, BU))) return !1
        }
        return !0
      }
    }

    function YQ(UU, XU, zU) {
      return UU.codeVersion !== XU.version && function(UU, XU) {
        const zU = [],
          cU = [];
        for (const {
            feature: NU,
            state: IU,
            active: pU
          }
          of XU.features) {
          var yU, QU, AU, FU;
          if (pU) NQ(null === (yU = (QU = (0, SX.j)(NU)).getCustomCode) || void 0 === yU ? void 0 : yU.call(QU, IU, "vertex", RU.b.WGSL), zU), NQ(null === (AU = (FU = (0, SX.j)(NU)).getCustomCode) || void 0 === AU ? void 0 : AU.call(FU, IU, "fragment", RU.b.WGSL), cU)
        }
        const oU = [];
        for (const {
            feature: NU,
            state: IU
          }
          of XU.features) {
          var DU, EU;
          const UU = null === (DU = (EU = (0, SX.j)(NU)).getUniforms) || void 0 === DU ? void 0 : DU.call(EU, IU, RU.b.WGSL);
          for (const XU of null !== (YU = null === UU || void 0 === UU ? void 0 : UU.ubo) && void 0 !== YU ? YU : []) {
            var YU;
            XU.size && XU.type && oU.push({
              name: XU.name,
              type: XU.type,
              arraySize: XU.arraySize
            })
          }
        }
        UU.vertexCode = zU, UU.fragmentCode = cU, UU.pluginUniforms = oU, UU.codeKey = JSON.stringify([zU, cU, oU]), UU.codeVersion = XU.version
      }(UU, XU), `${zU}#${UU.codeKey}`
    }

    function NQ(UU, XU) {
      if (UU)
        for (const zU in UU) UU[zU] && XU.push([zU, UU[zU]])
    }
    const IQ = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class pQ {
      constructor(UU) {
        this.warnOnce = UU, this.states = new Map
      }
      renderState(UU, XU, zU, cU) {
        var yU;
        let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          AU = null !== (yU = UU.sideOrientation) && void 0 !== yU ? yU : XU.sideOrientation;
        XU._getWorldMatrixDeterminant() < 0 && (AU = 0 === AU ? 1 : 0);
        const FU = "triangle-list" === QU,
          oU = zU ? UU.alphaMode : 0,
          DU = (!zU || (0 === oU || UU.forceDepthWrite)) && !UU.disableDepthWrite,
          EU = FU && UU.backFaceCulling ? UU.cullBackFaces ? "back" : "front" : "none",
          YU = FU && 0 !== AU ? "ccw" : "cw",
          NU = UU.depthFunction,
          IU = FU ? UU.zOffset : 0,
          pU = FU ? UU.zOffsetUnits : 0,
          aU = !UU.disableColorWrite;
        return cU && cU.alphaMode === oU && cU.depthWrite === DU && cU.depthFunction === NU && cU.cullMode === EU && cU.frontFace === YU && cU.zOffset === IU && cU.zOffsetUnits === pU && cU.colourWrite === aU && cU.topology === QU ? cU : this.stateFor(oU, DU, NU, EU, YU, IU, pU, aU, QU)
      }
      stateFor(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = `${UU}|${XU}|${zU}|${cU}|${yU}|${QU}|${AU}|${FU}|${oU}`;
        let EU = this.states.get(DU);
        if (!EU) {
          var YU;
          const NU = UU ? QX(UU) : null;
          UU && !NU && this.warnOnce(`alpha:${UU}`, `alpha mode ${UU} is not supported`), EU = {
            key: DU,
            alphaMode: UU,
            depthFunction: zU,
            zOffset: QU,
            zOffsetUnits: AU,
            topology: oU,
            blend: NU,
            depthWrite: XU,
            depthCompare: zU && null !== (YU = IQ.get(zU)) && void 0 !== YU ? YU : null,
            cullMode: cU,
            frontFace: yU,
            depthBias: -AU,
            depthBiasSlopeScale: -QU,
            colourWrite: FU
          }, this.states.set(DU, EU)
        }
        return EU
      }
    }
    var aQ = zU(38074);

    function tQ(UU) {
      if (!UU.frozen) return -1;
      let XU = UU.version;
      for (const {
          feature: zU,
          state: cU,
          active: yU
        }
        of UU.features) {
        if (!yU || !zU.bind) continue;
        const UU = (0, SX.j)(zU).uniformsVersion;
        if (!UU) return -1;
        XU += UU(cU)
      }
      return XU
    }
    class gQ {
      constructor(UU, XU, zU) {
        this.slots = UU, this.data = XU, this.textures = zU, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(UU, XU) {
        this.write4(UU, XU, 0, 0, 0, 1)
      }
      updateFloat2(UU, XU, zU) {
        this.write4(UU, XU, zU, 0, 0, 2)
      }
      updateFloat3(UU, XU, zU, cU) {
        this.write4(UU, XU, zU, cU, 0, 3)
      }
      updateFloat4(UU, XU, zU, cU, yU) {
        this.write4(UU, XU, zU, cU, yU, 4)
      }
      updateVector3(UU, XU) {
        this.write4(UU, XU.x, XU.y, XU.z, 0, 3)
      }
      updateVector4(UU, XU) {
        this.write4(UU, XU.x, XU.y, XU.z, XU.w, 4)
      }
      updateColor3(UU, XU) {
        this.write4(UU, XU.r, XU.g, XU.b, 0, 3)
      }
      updateColor4(UU, XU, zU) {
        this.write4(UU, XU.r, XU.g, XU.b, zU, 4)
      }
      updateFloatsFrom(UU, XU, zU, cU) {
        const yU = this.slots.get(UU);
        if (!yU) return;
        const QU = this.data,
          AU = yU.offset;
        for (let FU = 0; FU < cU; FU++) QU[AU + FU] = XU[zU + FU]
      }
      updateFloat3TimesFloats(UU, XU, zU, cU) {
        const yU = this.slots.get(UU);
        if (!yU) return;
        const QU = this.data,
          AU = yU.offset;
        QU[AU] = XU[zU] * cU[0], QU[AU + 1] = XU[zU + 1] * cU[1], QU[AU + 2] = XU[zU + 2] * cU[2]
      }
      eUU(UU, XU) {
        const zU = this.slots.get(UU);
        zU && this.data.set(XU.m, zU.offset)
      }
      updateMatrixFloats(UU, XU) {
        const zU = this.slots.get(UU);
        zU && this.data.set(XU, zU.offset)
      }
      updateFloatArray(UU, XU) {
        const zU = this.slots.get(UU);
        if (!zU) return;
        if (!zU.arraySize || zU.stride === zU.floats) return void this.data.set(XU, zU.offset);
        const cU = Math.min(XU.length, zU.floats * zU.arraySize);
        for (let yU = 0; yU < cU; yU++) this.data[zU.offset + Math.floor(yU / zU.floats) * zU.stride + yU % zU.floats] = XU[yU]
      }
      updateArray(UU, XU) {
        this.updateFloatArray(UU, XU)
      }
      setTexture(UU, XU) {
        this.textures.set(UU, XU), this.expected.delete(UU)
      }
      expectTexture(UU) {
        this.textures.set(UU, null), this.expected.add(UU)
      }
      write4(UU, XU, zU, cU, yU, QU) {
        const AU = this.slots.get(UU);
        if (!AU) return;
        const FU = this.data,
          oU = AU.offset;
        FU[oU] = XU, QU > 1 && (FU[oU + 1] = zU), QU > 2 && (FU[oU + 2] = cU), QU > 3 && (FU[oU + 3] = yU)
      }
    }

    function kQ(UU, XU) {
      const zU = oy,
        cU = aQ.j,
        yU = UU.lights,
        QU = Math.min(UU.lightCount, 8);
      for (let AU = 0; AU < QU; AU++) {
        const UU = zU.lights + AU * zU.lightStride,
          QU = AU * aQ.d;
        XU[UU] = yU[QU + cU.vector], XU[UU + 1] = yU[QU + cU.vector + 1], XU[UU + 2] = yU[QU + cU.vector + 2], XU[UU + 3] = yU[QU + cU.kind] === aQ.f.directional ? 1 : 0, XU[UU + 4] = yU[QU + cU.diffuse], XU[UU + 5] = yU[QU + cU.diffuse + 1], XU[UU + 6] = yU[QU + cU.diffuse + 2], XU[UU + 7] = yU[QU + cU.range], XU[UU + 8] = yU[QU + cU.specular], XU[UU + 9] = yU[QU + cU.specular + 1], XU[UU + 10] = yU[QU + cU.specular + 2], XU[UU + 11] = yU[QU + cU.range]
      }
      XU[zU.fogInfos] = UU.fogMode, XU[zU.fogInfos + 1] = UU.fogStart, XU[zU.fogInfos + 2] = UU.fogEnd, XU[zU.fogInfos + 3] = UU.fogDensity, XU[zU.fogColour] = UU.fogColour[0], XU[zU.fogColour + 1] = UU.fogColour[1], XU[zU.fogColour + 2] = UU.fogColour[2], XU[zU.outputHeight] = UU.renderHeight, XU[zU.animTick] = UU.animTick, XU[zU.timeMs] = UU.timeMs
    }
    class GQ {
      constructor(UU) {
        this.instancesOf = UU
      }
      refreshModelUniforms(UU, XU, zU, cU) {
        const yU = tQ(zU);
        if (yU >= 0 && yU === XU.heldVersion && XU.textures.get("diffuseSampler") === zU.diffuseTexture && XU.textures.get("reflectionCubeSampler") === zU.reflectionTexture && XU.textures.get("opacitySampler") === zU.opacityTexture && XU.textures.get("emissiveSampler") === zU.emissiveTexture) return !0;
        if (yU < 0)
          for (const QU of this.instancesOf(zU)) QU.heldVersion = -1;
        return this.writeModelUniforms(UU, XU, zU, cU), XU.heldVersion = yU, !1
      }
      writeModelUniforms(UU, XU, zU, cU) {
        const {
          ubo: yU
        } = XU, QU = zU.diffuseTexture, AU = zU.diffuseColor;
        yU.updateFloat4("vDiffuseColor", AU[0], AU[1], AU[2], zU.alpha), QU && (yU.updateFloat2("vDiffuseInfos", QU.uvSet, QU.level), yU.updateMatrixFloats("diffuseMatrix", QU.matrix)), yU.updateFloat("alphaCutOff", zU.alphaCutOff), yU.updateFloatsFrom("vEmissiveColor", zU.emissiveColor, 0, 3), yU.updateFloat3TimesFloats("vAmbientColor", cU.ambientColour, 0, zU.ambientColor);
        const FU = zU.specularColor;
        yU.updateFloat4("vSpecularColor", FU[0], FU[1], FU[2], zU.specularPower), yU.setTexture("diffuseSampler", QU);
        const oU = zU.opacityTexture;
        oU && (yU.updateFloat2("vOpacityInfos", oU.uvSet, oU.level), yU.updateMatrixFloats("opacityMatrix", oU.matrix)), yU.setTexture("opacitySampler", oU);
        const DU = zU.emissiveTexture;
        DU && (yU.updateFloat2("vEmissiveInfos", DU.uvSet, DU.level), yU.updateMatrixFloats("emissiveMatrix", DU.matrix)), yU.setTexture("emissiveSampler", DU);
        const EU = zU.reflectionTexture;
        EU && yU.updateMatrixFloats("reflectionMatrix", EU.matrix), yU.updateFloat2("vReflectionInfos", EU ? EU.level * UU.iblIntensity : 0, zU.roughness), yU.setTexture("reflectionCubeSampler", EU);
        const YU = UU.qp();
        for (const {
            feature: pU,
            state: aU,
            active: tU
          }
          of zU.features) {
          var NU, IU;
          if (tU) null === (NU = (IU = (0, SX.j)(pU)).bind) || void 0 === NU || NU.call(IU, aU, yU, UU, YU)
        }
      }
    }

    function BQ(UU) {
      const XU = UU.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(XU) ? "u32" : /i32|^vec\di$/.test(XU) ? "i32" : "f32"
    }

    function ZQ(UU, XU) {
      const zU = UU.getSize(),
        cU = BQ(XU),
        yU = UU => 4 === zU ? `${UU}x4` : 2 === zU ? `${UU}x2` : null;
      if ("f32" === cU) {
        if (5126 === UU.type) return 1 === zU ? "float32" : zU >= 2 && zU <= 4 ? `float32x${zU}` : null;
        if (!UU.normalized) return null;
        switch (UU.type) {
          case 5121:
            return yU("unorm8");
          case 5120:
            return yU("snorm8");
          case 5123:
            return yU("unorm16");
          case 5122:
            return yU("snorm16")
        }
        return null
      }
      const QU = "u32" === cU ? "uint" : "sint";
      switch (UU.type) {
        case 5125:
        case 5124:
          return 1 === zU ? `${QU}32` : zU <= 4 ? `${QU}32x${zU}` : null;
        case 5121:
        case 5120:
          return yU(`${QU}8`);
        case 5123:
        case 5122:
          return yU(`${QU}16`)
      }
      return null
    }

    function RQ(UU) {
      var XU;
      const zU = /(8|16|32)(?:x(\d))?$/.exec(UU);
      return zU ? Number(zU[1]) / 8 * Number(null !== (XU = zU[2]) && void 0 !== XU ? XU : 1) : 4
    }
    class PQ {
      constructor(UU, XU, zU) {
        this.resources = UU, this.limits = XU, this.warnOnce = zU, this.layouts = new Map
      }
      resolveInputs(UU, XU, zU, cU) {
        const yU = [],
          QU = zU.program.attributes,
          AU = [];
        for (let EU = 0; EU < QU.length; EU++) {
          const zU = QU[EU],
            FU = zU.optional ? null : this.resources.vertexInput(UU, zU.name, cU);
          if (!FU) {
            const UU = BQ(zU.type),
              XU = "u32" === UU ? "uint32x4" : "i32" === UU ? "sint32x4" : "float32x4";
            AU.push(null);
            const cU = yU.find((UU => null === UU.data));
            cU ? cU.attributes.push({
              shaderLocation: EU,
              offset: 0,
              format: XU
            }) : yU.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: EU,
                offset: 0,
                format: XU
              }]
            });
            continue
          }
          const oU = FU.getBuffer();
          AU.push(FU);
          const DU = ZQ(FU, zU.type);
          if (!DU) return this.warnOnce(`format:${XU}:${zU.name}`, `${XU}'s ${zU.name} (type ${FU.type}, size ${FU.getSize()}) has no WebGPU vertex format`), null;
          const YU = FU.getIsInstanced() ? "instance" : "vertex",
            NU = FU.byteStride,
            IU = RQ(DU),
            pU = yU.find((UU => UU.data === oU && UU.stride === NU && UU.step === YU && FU.byteOffset >= UU.base && FU.byteOffset - UU.base + IU <= NU));
          pU ? pU.attributes.push({
            shaderLocation: EU,
            offset: FU.byteOffset - pU.base,
            format: DU
          }) : yU.push({
            data: oU,
            base: FU.byteOffset,
            stride: NU,
            step: YU,
            attributes: [{
              shaderLocation: EU,
              offset: 0,
              format: DU
            }]
          })
        }
        if (yU.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${XU}`, `${XU} needs ${yU.length} vertex buffers`), null;
        let FU = "";
        for (const EU of yU) {
          FU += `${EU.stride}${"instance"===EU.step?"i":"v"}`;
          for (const UU of EU.attributes) FU += `,${UU.shaderLocation}:${UU.offset}:${UU.format}`;
          FU += ";"
        }
        let oU = this.layouts.get(FU);
        oU || (oU = {
          key: FU,
          buffers: yU.map((UU => ({
            arrayStride: UU.stride,
            stepMode: UU.step,
            attributes: UU.attributes
          }))),
          instanceEnds: yU.map((UU => {
            let XU = -1;
            if ("instance" === UU.step)
              for (const zU of UU.attributes) XU = Math.max(XU, zU.offset + RQ(zU.format));
            return XU
          }))
        }, this.layouts.set(FU, oU));
        const DU = yU.map((UU => UU.base));
        return {
          program: zU,
          sources: AU,
          layout: oU,
          slotData: yU.map((UU => UU.data)),
          gUU: DU,
          buffers: [],
          offsets: DU,
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

    function WQ(UU, XU, zU, cU) {
      const yU = XU.program.program.attributes;
      for (let QU = 0; QU < yU.length; QU++) {
        if ((yU[QU].optional ? null : zU.vertexInput(UU, yU[QU].name, cU)) !== XU.sources[QU]) return !1
      }
      return !0
    }
    const dQ = 64;
    class LQ {
      constructor(UU, XU, zU, cU) {
        this.device = UU, this.layout = XU, this.frameBuffer = zU, this.label = cU, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(UU) {
        if (UU * dQ <= this.data.length) return !1;
        let XU = 2 * this.data.length;
        for (; UU * dQ > XU;) XU *= 2;
        const zU = new Float32Array(XU);
        return zU.set(this.data), this.data = zU, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yU = this.data,
          QU = UU * dQ;
        let AU = yU[QU + 16] !== zU;
        for (let FU = 0; FU < 16 && !AU; FU++) AU = yU[QU + FU] !== XU[cU + FU];
        if (AU) {
          for (let UU = 0; UU < 16; UU++) yU[QU + UU] = XU[cU + UU];
          yU[QU + 16] = zU
        }
        return AU
      }
      upload(UU, XU) {
        this.device.queue.writeBuffer(this.buffer, UU * Dy, this.data, UU * dQ, (XU - UU) * dQ)
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

    function eQ(UU) {
      return UU.gpu[eU.e.lite] ??= UU.materials.map(((XU, zU) => ({
        parts: UU,
        range: zU,
        owner: UU.owner
      })))
    }

    function CQ(UU) {
      var XU, zU, cU;
      return null !== (XU = null !== (zU = null === (cU = UU.parts.materials[UU.range]) || void 0 === cU ? void 0 : cU.mirror) && void 0 !== zU ? zU : UU.owner.material) && void 0 !== XU ? XU : null
    }
    const wQ = ["opaque", "alphaTest", "transparent", "text"];

    function qQ(UU) {
      for (const XU of wQ) UU[XU].units.length = 0, UU[XU].rows.length = 0
    }
    class OQ {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, OX.e)("Lite: ")
      }
      attach(UU, XU) {
        this.model = UU, this.mirror = XU
      }
      get worlds() {
        return this.model.nodes.qY
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(UU) {
        return this.groups.get(UU)
      }
      forEachGroup(UU) {
        this.groups.forEach(UU)
      }
      forEachSelected(UU) {
        for (const [XU, zU] of this.groups)
          for (const cU of wQ)
            for (const yU of zU[cU].units) UU(yU.owner, "text" === cU ? "transparent" : cU, XU)
      }
      select(UU, XU) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(qQ);
        const {
          model: zU,
          mirror: cU
        } = this;
        if (!zU || !cU || !UU) return;
        this.rows.length < zU.nodes.xY && (this.rows = new Int32Array(zU.nodes.xY));
        const yU = this.rows,
          QU = zU.meshes;
        for (let FU = 0; FU < QU.looseCount; FU++) {
          const UU = QU.loose[FU],
            zU = cU.nodes[UU];
          zU && !zU.isBlocked && zU.isEnabled() && !zU.RY.hasAZeroComponent && QU.selects(UU, XU.frustum) && (this.activate(zU, UU), this.selectedCount++)
        }
        const AU = QU.selectTextPlanes(XU.frustum, yU);
        for (let FU = 0; FU < AU; FU++) {
          const XU = yU[FU],
            QU = cU.nodes[XU],
            AU = zU.meshes.parts[XU];
          if (!QU.isVisible || !(QU.visibility > 0) || 0 === (QU.layerMask & UU.layerMask) || !AU) continue;
          const oU = this.groupOf(zU.meshes.layer[XU]).text;
          for (const UU of eQ(AU)) oU.units.push(UU), oU.rows.push(XU);
          this.selectedCount++
        }
      }
      instanceBatch(UU) {
        const XU = this.batchOf(UU);
        return XU.dispatched || (XU.dispatched = XU.renderSelf = !0, XU.row = this.rowOf(UU)), XU
      }
      rowOf(UU) {
        return UU.row
      }
      activate(UU, XU) {
        if (!UU.UH) {
          const zU = UU;
          if (zU.jyU) {
            const UU = this.batchOf(zU);
            UU.dispatched = !0, UU.renderSelf = !0, UU.row = XU
          }
          return void this.dispatch(zU, XU, XU)
        }
        const zU = UU,
          cU = zU.KyU;
        if (cU._getWorldMatrixDeterminant() >= 0 !== zU._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${cU.name}`, `A mirrored InstancedMesh of ${cU.name} is not drawn yet`);
        const yU = this.batchOf(cU);
        yU.instances.push(zU), yU.rows.push(XU), yU.dispatched || (yU.dispatched = !0, this.dispatch(cU, XU, this.rowOf(cU)))
      }
      batchOf(UU) {
        let XU = this.batches.get(UU);
        return XU || (XU = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(UU, XU)), XU.frame !== this.frame && (XU.frame = this.frame, XU.dispatched = !1, XU.renderSelf = !1, XU.instances.length = 0, XU.rows.length = 0), XU
      }
      dispatch(UU, XU, zU) {
        const {
          layer: cU,
          parts: yU
        } = this.model.meshes;
        if (!yU[XU]) return;
        const QU = this.groupOf(cU[XU]),
          AU = UU;
        for (const FU of eQ(yU[XU])) {
          const UU = CQ(FU);
          if (!UU) continue;
          const XU = UU.needAlphaBlendingForMesh(AU) ? QU.transparent : UU.needAlphaTestingForMesh(AU) ? QU.alphaTest : QU.opaque;
          XU.units.push(FU), XU.rows.push(zU)
        }
      }
      groupOf(UU) {
        let XU = this.groups.get(UU);
        return XU || (XU = {
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
        }, this.groups.set(UU, XU)), XU
      }
    }

    function SQ(UU) {
      UU.opaque.length = 0, UU.transparent.length = 0
    }
    class rQ {
      constructor() {
        this.uD = new Map, this.enabled = [], this.groups = new Map, this.cY = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(UU) {
        if (this.uD.has(UU)) return;
        const XU = {
          mesh: UU,
          observer: UU.onEffectiveEnabledStateChangedObservable.add((UU => {
            this.YC(XU, UU)
          })),
          index: -1,
          steady: null
        };
        this.uD.set(UU, XU), this.YC(XU, UU.isEnabled())
      }
      remove(UU) {
        const XU = this.uD.get(UU);
        XU && (XU.observer.remove(!0), this.YC(XU, !1), this.uD.delete(UU))
      }
      dropSteady() {
        for (const UU of this.uD.values()) UU.steady = null
      }
      base(UU) {
        return this.uD.get(UU)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          uD: this.uD.size
        }
      }
      forEachSelected(UU) {
        for (const [XU, zU] of this.groups) {
          for (const cU of zU.opaque) UU(cU.owner, "opaque", XU);
          for (const cU of zU.transparent) UU(cU.owner, "transparent", XU)
        }
        for (const XU of this.cY) UU(XU.mesh, "opaque", 0)
      }
      group(UU) {
        return this.groups.get(UU)
      }
      forEachGroup(UU) {
        this.groups.forEach(UU)
      }
      select(UU, XU) {
        if (this.drawn = 0, this.selected = 0, this.cY.length = 0, this.groups.forEach(SQ), !UU) return;
        const zU = this.enabled;
        for (let cU = 0; cU < zU.length; cU++) {
          const yU = zU[cU];
          if (yU.steady && XU(yU, UU)) {
            this.selected++, this.cY.push(yU);
            continue
          }
          const QU = yU.mesh;
          if (QU.isBlocked || QU.RY.hasAZeroComponent) continue;
          if (!QU.isVisible || QU.visibility <= 0 || 0 === (QU.layerMask & UU.layerMask)) continue;
          if (QU.jyU) {
            this.warned.has(QU.name) || (this.warned.add(QU.name), console.warn(`Lite: thin instance base ${QU.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: AU
          } = QU;
          if (!AU) continue;
          QU.computeWorldMatrix(), this.selected++;
          const FU = this.listsFor(QU.renderingGroupId);
          for (const UU of eQ(AU)) {
            const XU = CQ(UU);
            XU && (XU.needAlphaBlendingForMesh(QU) ? FU.transparent.push(UU) : FU.opaque.push(UU))
          }
        }
      }
      YC(UU, XU) {
        if (XU === UU.index >= 0) return;
        UU.steady = null;
        const zU = this.enabled;
        if (XU) UU.index = zU.length, zU.push(UU);
        else {
          const XU = zU.pop();
          XU !== UU && (zU[UU.index] = XU, XU.index = UU.index), UU.index = -1
        }
      }
      listsFor(UU) {
        let XU = this.groups.get(UU);
        return XU || (XU = {
          opaque: [],
          transparent: []
        }, this.groups.set(UU, XU)), XU
      }
    }
    var uQ = zU(40473);
    class fQ {
      constructor() {
        this.bundle = null, this.stale = !0, this.uD = new Set
      }
    }
    class iQ {
      constructor(UU, XU, zU) {
        this.device = UU, this.slots = XU, this.host = zU, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new fQ, this.mw = new fQ, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Ty, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = UU => {
          UU.seen !== this.frame && (UU.draw && (UU.draw = null, this.args[5 * UU.slot + 1] = 0, this.argsDirty = !0, this.mw.stale ||= UU.mw), this.frame - UU.seen > 120 && (this.records.delete(UU.unit), this.freeSlots.push(UU.slot), UU.recorded && (this.bundleOf(UU).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(UU) {
          var XU, zU;
          let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (XU = null === (zU = globalThis.navigator) || void 0 === zU ? void 0 : zU.userAgent) && void 0 !== XU ? XU : "";
          const yU = UU.adapterInfo;
          return "intel" === (null === yU || void 0 === yU ? void 0 : yU.vendor) && "gen-12lp" === yU.architecture && cU.includes("Windows")
        }(UU), (0, uQ.L)(this.direct)
      }
      zB() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, uQ.L)(this.directThisFrame)
      }
      add(UU, XU, zU, cU) {
        let yU = this.records.get(UU);
        return yU || (yU = this.createRecord(UU), this.records.set(UU, yU)), yU.recorded && MQ(yU, XU) || (this.bundleOf(yU).stale = !0), this.place(yU, XU, zU, cU), yU
      }
      bundleOf(UU) {
        return UU.mw ? this.mw : this.main
      }
      addAgain(UU, XU, zU, cU) {
        UU.recorded || (this.bundleOf(UU).stale = !0), this.place(UU, XU, zU, cU)
      }
      place(UU, XU, zU, cU) {
        UU.seen = this.frame, UU.mw && null === UU.draw && (this.mw.stale = !0), UU.draw = XU, this.drawn++, zU && this.slots.write(UU.slot, zU, cU) && (this.slotsFrom = Math.min(this.slotsFrom, UU.slot), this.slotsTo = Math.max(this.slotsTo, UU.slot));
        const yU = this.args,
          QU = 5 * UU.slot;
        yU[QU] === XU.count && yU[QU + 1] === XU.instances && yU[QU + 2] === XU.first || (yU[QU] = XU.count, yU[QU + 1] = XU.instances, yU[QU + 2] = XU.first, this.argsDirty = !0, this.mw.stale ||= UU.mw)
      }
      ZY() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(UU) {
        for (const XU of this.records.values()) XU.draw && XU.seen === this.frame && !XU.mw && UU(XU.draw, this.slots.data, XU.slot * Dy / 4)
      }
      resourceDestroyed(UU) {
        this.main.stale ||= this.main.uD.has(UU), this.mw.stale ||= this.mw.uD.has(UU)
      }
      execute(UU, XU, zU) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(UU, XU, zU, "direct"), this.drawn;
        const cU = this.host.sceneGroup(XU);
        if (!cU) return this.main.bundle = null, this.mw.bundle = null, this.recordedSceneGroup = null, this.encode(UU, XU, zU, "direct"), this.drawn;
        this.recordedTarget === zU && this.recordedSceneGroup === cU || (this.recordedTarget = zU, this.recordedSceneGroup = cU, this.main.stale = !0, this.mw.stale = !0);
        const yU = this.main,
          QU = this.mw;
        let AU = !1;
        !yU.stale && yU.bundle || (yU.bundle = this.record(XU, zU, cU, "indirect"), AU = !0);
        const FU = (0, uQ.k)();
        return (QU.stale || this.rangedEpoch !== FU) && (this.rangedEpoch = FU, QU.bundle = this.drawsRanged() ? this.record(XU, zU, cU, "mw") : this.noRangedBundle(), AU = !0), AU && (this.bundles = QU.bundle ? [yU.bundle, QU.bundle] : [yU.bundle]), UU.executeBundles(this.bundles), UU.setBindGroup(0, cU), this.drawn
      }
      record(UU, XU, zU, cU) {
        const yU = this.device.createRenderBundleEncoder({
          label: "mw" === cU ? "thin-bases-ranged" : "thin-bases",
          colorFormats: UU._colorFormat ? [UU._colorFormat] : [],
          depthStencilFormat: UU._depthStencilFormat,
          sampleCount: UU._sampleCount
        });
        return yU.setBindGroup(0, zU), this.encode(yU, UU, XU, cU), yU.finish()
      }
      noRangedBundle() {
        for (const UU of this.records.values()) UU.mw && (UU.recorded = !1);
        return this.mw.uD.clear(), this.mw.stale = !1, null
      }
      drawsRanged() {
        for (const UU of this.records.values())
          if (UU.mw && UU.draw) return !0;
        return !1
      }
      encode(UU, XU, zU, cU) {
        const yU = [];
        for (const oU of this.records.values()) "direct" !== cU && oU.mw !== ("mw" === cU) || (oU.recorded = !1, oU.draw && yU.push(oU));
        yU.sort(vQ);
        const QU = "direct" === cU ? null : "mw" === cU ? this.mw : this.main;
        null === QU || void 0 === QU || QU.uD.clear(), this.binder.reset();
        let AU = !1;
        for (const oU of yU) {
          var FU;
          const yU = oU.draw,
            DU = this.host.pipelineFor(yU, XU, zU);
          if (!DU) {
            this.host.pipelineCompiling(yU, zU) ? AU = !0 : QU && this.keep(oU, yU, QU.uD);
            continue
          }
          let EU;
          if (oU.mw && "indirect" !== cU) {
            const UU = oU.unit.owner;
            EU = "direct" === cU && (0, uQ.x)(UU) || (0, uQ.o)(UU) || void 0
          }
          if (QU && this.keep(oU, yU, QU.uD), 0 === (null === (FU = EU) || void 0 === FU ? void 0 : FU.count)) continue;
          this.binder.bind(UU, yU, DU, this.slots.bindGroup, oU.slot * Dy);
          const YU = 5 * oU.slot;
          if ("indirect" === cU) {
            yU.indexBuffer ? UU.drawIndexedIndirect(this.argsBuffer, 4 * YU) : UU.drawIndirect(this.argsBuffer, 4 * YU);
            continue
          }
          const NU = this.args;
          EU ? HQ(UU, null !== yU.indexBuffer, NU, YU, EU) : yU.indexBuffer ? UU.drawIndexed(NU[YU], NU[YU + 1], NU[YU + 2], 0, 0) : UU.draw(NU[YU], NU[YU + 1], NU[YU + 2], 0)
        }
        QU && (QU.stale = AU)
      }
      keep(UU, XU, zU) {
        UU.recorded = !0, UU.pipelineKey = XU.pipelineKey, UU.materialGroup = XU.material.bindGroup, UU.vertexBuffers.length = 0, UU.vertexBuffers.push(...XU.vertexBuffers), UU.vertexOffsets = XU.vertexOffsets, UU.indexBuffer = XU.indexBuffer, UU.indexFormat = XU.indexFormat;
        for (const cU of XU.vertexBuffers) zU.add(cU);
        XU.indexBuffer && zU.add(XU.indexBuffer), zU.add(XU.material.buffer);
        for (const cU of XU.material.bound) cU && zU.add(cU)
      }
      createRecord(UU) {
        let XU = this.freeSlots.pop();
        return void 0 === XU && (XU = this.slotCount++, this.grow()), {
          unit: UU,
          slot: XU,
          mw: void 0 !== (0, uQ.o)(UU.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.mw.stale = !0), 5 * this.slotCount > this.args.length) {
          const UU = new Uint32Array(2 * this.args.length);
          UU.set(this.args), this.args = UU, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function HQ(UU, XU, zU, cU, yU) {
      const QU = zU[cU + 1],
        AU = yU.data;
      for (let FU = 0; FU < yU.count; FU++) {
        const yU = Math.min(AU[2 * FU], QU),
          oU = Math.min(AU[2 * FU + 1], QU - yU);
        0 !== oU && (XU ? UU.drawIndexed(zU[cU], oU, zU[cU + 2], 0, yU) : UU.draw(zU[cU], oU, zU[cU + 2], yU))
      }
    }

    function MQ(UU, XU) {
      if (UU.pipelineKey !== XU.pipelineKey || UU.materialGroup !== XU.material.bindGroup || UU.indexBuffer !== XU.indexBuffer || UU.indexFormat !== XU.indexFormat || UU.vertexOffsets !== XU.vertexOffsets || UU.vertexBuffers.length !== XU.vertexBuffers.length) return !1;
      for (let zU = 0; zU < UU.vertexBuffers.length; zU++)
        if (UU.vertexBuffers[zU] !== XU.vertexBuffers[zU]) return !1;
      return !0
    }

    function vQ(UU, XU) {
      return UQ(UU.draw, XU.draw)
    }
    const VQ = new WeakMap,
      sQ = {
        depth: !1,
        sunShadow: !1
      };

    function nQ(UU, XU) {
      let zU = VQ.get(UU);
      zU || (zU = new Map, VQ.set(UU, zU));
      const cU = `${XU.depth?"-depth":""}${XU.sunShadow?"-shadow":""}${XU.shadowMask?"-mask":""}`;
      let yU = zU.get(cU);
      if (!yU) {
        const QU = [{
          binding: KX.d,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: KX.l
          }
        }, {
          binding: KX.z,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        XU.depth && QU.push({
          binding: KX.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), XU.sunShadow && QU.push(... function() {
          const UU = GPUShaderStage.FRAGMENT,
            XU = KX.u;
          return [{
            binding: XU.uniform,
            visibility: UU,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: XU.lN,
            visibility: UU,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: XU.special,
            visibility: UU,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: XU.volume,
            visibility: UU,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: XU.sampler,
            visibility: UU,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: XU.entities,
            visibility: UU,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: XU.entityGrids,
            visibility: UU,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), XU.shadowMask && QU.push({
          binding: KX.y,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), yU = UU.createBindGroupLayout({
          label: `${XU.depth?"terrain-":""}shader-pack-inputs${cU}`,
          entries: QU
        }), zU.set(cU, yU)
      }
      return yU
    }

    function mQ(UU) {
      return nQ(UU, sQ)
    }

    function lQ(UU, XU) {
      if (!XU) return !1;
      const zU = (0, bX.e)(UU);
      return !!zU && Qc(zU, XU)
    }

    function xQ(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Oc(XU)) return [];
      return [nQ(UU, {
        depth: Lc(XU.packVariant),
        sunShadow: lQ(XU.packVariant, zU),
        shadowMask: cU
      })]
    }
    class JQ {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = UU, this.sunShadow = zU, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(KX.l), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = UU.createBuffer({
          label: "shader-pack-inputs",
          size: KX.l,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const cU = (0, KX.D)(XU);
        this.textures = UU.createBuffer({
          label: "shader-pack-textures",
          size: cU.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), UU.queue.writeBuffer(this.textures, 0, cU), this.bindGroup = UU.createBindGroup({
          label: "shader-pack-inputs",
          layout: mQ(UU),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: KX.d,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: KX.z,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(UU, XU, zU) {
        (0, KX.I)(this.data, {
          seconds: UU.seconds(),
          lit: zU,
          renderOffset: UU.renderOffset(),
          hUU: UU.hUU(),
          eyePosition: XU,
          shadowDirection: UU.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const cU = XU ? this.sunShadow : null;
        if ((XU || zU) && !cU) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!UU && !cU) return this.bindGroup;
        (UU && UU !== this.depthView || zU && zU !== this.maskView) && (this.depthView = null !== UU && void 0 !== UU ? UU : this.depthView, this.maskView = null !== zU && void 0 !== zU ? zU : this.maskView, this.groups.clear());
        const yU = (UU ? 1 : 0) | (cU ? 2 : 0) | (zU ? 4 : 0);
        let QU = this.groups.get(yU);
        if (!QU) {
          const XU = this.entries();
          UU && XU.push({
            binding: KX.r,
            resource: UU
          }), cU && XU.push(...cU.entries()), zU && XU.push({
            binding: KX.y,
            resource: zU
          }), QU = this.device.createBindGroup({
            label: `${UU||zU?"terrain-":""}shader-pack-inputs${UU?"-depth":""}${cU?"-shadow":""}${zU?"-mask":""}`,
            layout: nQ(this.device, {
              depth: !!UU,
              sunShadow: !!cU,
              shadowMask: !!zU
            }),
            entries: XU
          }), this.groups.set(yU, QU)
        }
        return QU
      }
      bind(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        UU.setBindGroup(KX.h, this.bindGroupFor(XU, zU, cU))
      }
    }

    function jQ(UU, XU, zU) {
      if (UU.gpuVersion === XU.gpuBuffersVersion) return !0;
      let cU;
      do {
        if (cU = XU.gpuBuffersVersion, !KQ(UU, XU, zU)) return !1
      } while (XU.gpuBuffersVersion !== cU);
      return UU.gpuVersion = cU, UU.fitInstances = 0, !0
    }

    function KQ(UU, XU, zU) {
      let cU = null;
      for (let QU = 0; QU < UU.slotData.length; QU++) {
        var yU;
        const AU = UU.slotData[QU],
          FU = AU ? XU.gpuBuffer(AU) : zU;
        if (!FU) return !1;
        AU && UU.layout.instanceEnds[QU] < 0 && XU.cover(AU, Number.POSITIVE_INFINITY), UU.buffers[QU] = FU;
        const oU = UU.gUU[QU] + (AU ? XU.gpuOffset(AU) : 0);
        oU !== (null !== (yU = cU) && void 0 !== yU ? yU : UU.offsets)[QU] && (cU ??= UU.offsets.slice(), cU[QU] = oU), UU.ends[QU] = AU ? XU.gpuEnd(AU) : FU.size
      }
      return cU && (UU.offsets = cU), !0
    }

    function bQ(UU, XU, zU, cU) {
      if (XU <= UU.fitInstances) return null;
      const {
        layout: yU,
        ends: QU,
        offsets: AU,
        slotData: FU,
        gUU: oU
      } = UU;
      let DU = !1;
      for (let EU = 0; EU < yU.buffers.length; EU++) {
        const UU = yU.instanceEnds[EU];
        if (UU < 0) continue;
        const cU = (XU - 1) * yU.buffers[EU].arrayStride + UU;
        if (QU[EU] - AU[EU] < cU) return {
          index: EU,
          needed: cU
        };
        const YU = FU[EU];
        YU && zU.cover(YU, oU[EU] + cU) && (DU = !0)
      }
      return DU && jQ(UU, zU, cU), UU.fitInstances = XU, null
    }
    var TQ = zU(38563),
      hQ = zU(38597);
    const UA = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      XA = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      zA = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      cA = `((vertexInputs.aPackedLightLevels >> 16u) | ${qX.e.placed}u)`,
      yA = "u32(vertexInputs.aShaderPackItem.x)",
      QA = `${qX.e.lifeform}u`;

    function AA(UU) {
      return "item" === UU.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const FA = "bloxdSpEnchant",
      oA = "floor(finalWorld[3].xyz)";

    function DA(UU, XU, zU) {
      return "placed" === XU.kind && UU.reads[zU].includes("bloxdFragmentBlockPosition")
    }

    function EA(UU, XU) {
      let [zU, cU] = UU;
      return zU === XU.point && cU === XU.code
    }

    function YA(UU, XU) {
      var zU, cU, yU;
      const QU = null === (zU = UU.find((UU => UU.texture))) || void 0 === zU ? void 0 : zU.texture,
        AU = null === (cU = UU.find((UU => UU.enchantTier))) || void 0 === cU ? void 0 : cU.enchantTier,
        FU = null === (yU = UU.find((UU => UU.overlay))) || void 0 === yU ? void 0 : yU.overlay,
        oU = FU ? XU.filter((UU => EA(UU, FU))).length : 0;
      return FU && 1 === oU ? {
        texture: QU,
        overlay: FU,
        enchantTier: AU
      } : {
        texture: QU,
        enchantTier: AU
      }
    }

    function NA(UU) {
      if ("item" === UU.kind) {
        return {
          vertexFlags: `(${yA} & 0xffffu)`,
          varying: "vPackItem",
          value: yA,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return UU.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: cA,
        varying: "vPackFlags",
        value: cA,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function IA(UU) {
      return "lifeform" === UU.kind ? QA : "0u"
    }

    function pA(UU) {
      return !!UU.BLOXD_PLUGIN_ENCHANTMENT
    }

    function aA(UU, XU) {
      const {
        enchantTier: zU
      } = XU;
      return zU && pA(XU.defines) && "lifeform" === XU.kind && ZA(UU, "enchantTier") ? zU : null
    }

    function tA(UU, XU) {
      return pA(XU.defines) && ZA(UU, "enchantSpeed")
    }

    function gA(UU) {
      const {
        overlay: XU,
        defines: zU
      } = UU;
      if (!XU || !zU.DIFFUSE) return null;
      const cU = zU.VERTEXCOLOR || zU.INSTANCESCOLOR && zU.INSTANCES;
      return `vec4f(${XU.colour}.rgb * uniforms.vDiffuseInfos.y${cU?" * fragmentInputs.vColor.rgb":""}, ${XU.colour}.a)`
    }
    const kA = "fragmentInputs.vPackTexture";

    function GA(UU) {
      const {
        atlas: XU,
        defines: zU,
        texture: cU
      } = UU;
      if (XU || !zU.DIFFUSE) return null;
      if (cU) return {
        texture: "diffuseSampler",
        ...cU
      };
      const yU = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===zU.DIFFUSEDIRECTUV?"vMainUV1":2===zU.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== UU.kind) return yU;
      if (!zU.BLOXD_PLUGIN_ANIMATED) return {
        ...yU,
        id: kA
      };
      const QU = RU.b.WGSL,
        AU = (0, RU.xb)(QU, "uAnimStatesNum"),
        FU = (0, RU.Y)(QU, (0, TQ.e)(QU), AU),
        oU = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${AU})`,
        layers: [FU],
        uv: `vec2f(${oU}.x, ${oU}.y * ${AU} - ${FU})`,
        levelUv: oU,
        id: kA
      }
    }

    function BA(UU, XU) {
      return "box" === XU.kind && !!UU.hooks.surface && null !== GA(XU)
    }

    function ZA(UU, XU) {
      return UU.reads.fragment.includes(XU)
    }

    function RA(UU) {
      return !!UU.BLOXD_LIGHTING && !UU.BLOXD_UNLIT
    }

    function PA(UU, XU, zU, cU) {
      const yU = UU.filter((UU => {
        let [zU, cU] = UU;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === zU && cU === XU
      }));
      if (1 !== yU.length) throw new Error(`A model program for shader packs has ${0===yU.length?"no":"more than one"} ${cU} code before fog (lite/modelShaderPack.ts)`);
      return UU.map((UU => UU === yU[0] ? [UU[0], zU] : UU))
    }

    function WA(UU, XU, zU, cU) {
      const {
        hooks: yU
      } = UU, {
        kind: QU,
        defines: AU
      } = XU, FU = [...zU];
      var oU;
      XU.atlas && yU.surface && FU.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Nc("atlasIdxIn")]), "item" === QU && FU.push(["CUSTOM_VERTEX_DEFINITIONS", (0, RU.c)(RU.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), BA(UU, XU) && FU.push(["CUSTOM_VERTEX_DEFINITIONS", (0, RU.c)(RU.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (oU = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Ec}[min(u32(${oU}) - 1u, arrayLength(&${Ec}) - 1u)], ${oU} > 0.5);\n`)]);
      const DU = NA(XU);
      DU && (yU.surface || yU.light) && FU.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${DU.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${DU.varying} = ${DU.value};`]);
      let EU = cU;
      if (DA(UU, XU, "fragment") && (FU.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${oA});`]), EU = [...EU, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), ZA(UU, "localPosition") && FU.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${AA(XU)};`]), pA(AU) && yU.surface) {
        tA(UU, XU) && FU.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const zU = aA(UU, XU);
        zU && FU.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${zU});`]);
        const cU = (0, RU.ib)(RU.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        EU = [...PA(EU, (0, hQ.i)(RU.b.WGSL), cU, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, hQ.b)(FA)]]
      }
      const {
        overlay: YU
      } = XU;
      YU && gA(XU) && yU.surface && (EU = EU.filter((UU => !EA(UU, YU))));
      const NU = yU.light ? function(UU) {
        return "placed" === UU.kind ? {
          name: "terrain",
          engine: (0, xX.V)(RU.b.WGSL),
          pack: (0, xX.ub)(RU.b.WGSL)
        } : UU.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, xX.Q)(RU.b.WGSL),
          pack: (0, xX.pb)(RU.b.WGSL)
        } : null
      }(XU) : null;
      if (NU && (EU = PA(EU, NU.engine, NU.pack, `${NU.name} light`), "placed" !== QU && RA(AU))) {
        const UU = AU.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, RU.xb)(RU.b.WGSL, "uEntityLightLevels") : (0, RU.Ib)(RU.b.WGSL, "aLightLevels");
        FU.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${xX.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, xX.sb)(RU.b.WGSL, UU)])
      }
      return {
        vertexCode: FU,
        fragmentCode: EU
      }
    }

    function dA(UU, XU, zU, cU) {
      return cc(UU, XU, zU, cU, "model")
    }
    const LA = "\t@builtin(position) position: vec4f,\n";

    function eA(UU, XU) {
      const zU = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(UU)[0];
      return `${zU}${XU}${UU.slice(zU.length)}`
    }

    function CA(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: yU
      } = XU, QU = Qc(XU, cU), {
        kind: AU,
        defines: FU
      } = zU, oU = function(UU, XU) {
        var zU, cU, yU;
        const {
          defines: QU
        } = XU, AU = NA(XU), FU = !!QU.FOG, oU = pA(QU), DU = null !== (zU = null === AU || void 0 === AU ? void 0 : AU.enchantTier) && void 0 !== zU ? zU : aA(UU, XU) ? "fragmentInputs.vPackEnchantTier" : "0u", EU = "lifeform" === XU.kind && !QU.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (cU = null === AU || void 0 === AU ? void 0 : AU.vertexFlags) && void 0 !== cU ? cU : IA(XU),
          vertexLocalPosition: AA(XU),
          flags: null !== (yU = null === AU || void 0 === AU ? void 0 : AU.flags) && void 0 !== yU ? yU : IA(XU),
          normal: "normalW",
          alpha: EU ? "alpha * baseColor.a" : "alpha",
          alphaOut: EU ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: FU ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: FU ? "1.0 - fog" : "0.0",
          enchantTier: DU,
          enchantColour: oU ? `${FA}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: tA(UU, XU) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: ZA(UU, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: gA(XU)
        }
      }(XU, zU), DU = UU.textures.filter((UU => /^textureAtlas\d+$/.test(UU.name))).length, EU = zU.atlas && DU > 0 ? {
        count: DU,
        layers: zU.atlas.layers,
        width: zU.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: UU.material.slots.has("uAnimDataPerTex") ? (XU, zU) => Kc(XU, zU, function(UU) {
          const XU = UU.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            LY: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: UU => `uniforms.uAnimDataPerTex[${UU}]${XU}`
          }
        }(UU)) : null
      } : null, YU = "placed" === AU ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", NU = null !== EU && void 0 !== EU ? EU : GA(zU), IU = function(UU, zU) {
        let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,KX.E)()}${Fc(XU,zU)}${cU}${pc(UU)}${Uc}${YU}${XU.code}`
      };
      let {
        vertex: pU,
        fragment: aU
      } = UU;
      const tU = tc(yU, oU);
      if (tU) {
        const UU = DA(XU, zU, "vertex") ? `\tbloxdSpCell = ${oA};\n` : "";
        pU = dA(pU, UA, `${UU}${tU.slice(1)}${UA}`, "vertex")
      }
      const gU = `${oc(XU,QU,function(UU,XU){return XU.TWOSIDEDLIGHTING?UU:`select(-(${UU}), ${UU}, fragmentInputs.frontFacing)`}(oU.normal,FU),oU.flags)}${gc(yU,XU.strict,XU.program,NU,oU)}`;
      gU && (aU = dA(aU, XA, `${gU.slice(1)}${XA}`, "surface")), QU && XU.sunShadow && !FU.TWOSIDEDLIGHTING && (aU = dA(aU, LA, `${LA}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const kU = Bc(yU);
      if (kU) {
        const UU = Gc(yU, RA(FU), !0, oU);
        aU = dA(aU, zA, `${UU}${kU.slice(1)}${zA}`, "light")
      }
      const GU = BA(XU, zU) ? Yc : "";
      return {
        ...UU,
        vertex: eA(pU, IU(EU, !1, GU)),
        fragment: eA(aU, IU(NU, QU))
      }
    }
    const wA = {
      name: "earthSky",
      uniqueId: -1
    };
    class qA {
      constructor(UU, XU) {
        this.resources = UU, this.epoch = XU, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const UU of this.instances.values()) UU.released = !0, this.resources.destroyBuffer(UU.buffer);
        this.instances.clear()
      }
    }

    function OA(UU) {
      return UU.failed && null !== UU.packGroup
    }
    class SA {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rQ,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new OQ;
        this.device = UU, this.resources = XU, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.pUU = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new Ty, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new GQ((UU => this.modelSlot(UU).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, OX.e)("Lite: "), this.renderStates = new pQ(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (UU, XU) => this.keepSteady(UU, XU), this.lists = void 0, this.slotCount = 0, this.pUU = cU, this.modelMeshes = yU, this.lists = new hy(yU, cU, this, this.warnOnce), this.drawDefines = new EQ(XU, this.warnOnce, ((UU, XU, zU) => this.programWithModel(UU, XU, zU)), OA), this.vertexLayouts = new PQ(XU, UU.limits, this.warnOnce), this.sceneLayout = PX(UU), this.frameLayout = UU.createBindGroupLayout({
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
        }), this.frameBuffer = UU.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new LQ(UU, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = UU.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new iQ(UU, new LQ(UU, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (UU, XU, zU) => this.pipelineFor(UU, XU, zU),
          pipelineCompiling: (UU, XU) => !UU.program.failed && !1 !== this.pipelines.get(`${UU.pipelineKey}|${XU}`),
          sceneGroup: UU => {
            const XU = zU(UU);
            return XU || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), XU
          }
        }), XU.onDestroy = UU => {
          this.thinBundle.resourceDestroyed(UU)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const yU = {
          order: UU,
          isTransparent: XU,
          _direct: !XU,
          bind: (UU, XU) => this.createBinding(yU, XU, zU, cU)
        };
        return yU
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(UU, XU, zU) {
        var cU;
        let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = XU, this.drawDefines.view = XU, this.thinBundle.zB(), this.writeFrameUniforms();
        const QU = null !== (cU = null === yU || void 0 === yU ? void 0 : yU.defineFor("model")) && void 0 !== cU ? cU : 0;
        this.drawDefines.modelPackVariant = QU, yU && 0 !== QU && (this.packInputs ??= new JQ(this.device, yU.textureLayers(), this.sunShadow), this.packInputs.write(yU, XU.eye, yU.ia())), this.lists.clear(), this.slotCount = 0;
        const AU = UU.activeCamera;
        this.pUU.select(AU, this.keepSteadyBase), this.modelMeshes.select(AU, XU), zU && this.pushEarthSky(zU), this.lists.collect(UU), this.thinBundle.ZY(), this.uploadMeshSlots()
      }
      pushDraws(UU, XU, zU, cU, yU, QU) {
        let AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const FU = QU.length;
        for (let oU = 0; oU < zU; oU++) {
          const zU = XU[oU];
          let FU = this.retainedDraw(UU, zU, cU, yU);
          if (void 0 === FU && (FU = this.drawFor(UU, zU, cU, yU), this.retain(zU, FU)), FU) {
            const UU = zU.owner,
              XU = AU ? AU[oU] : -1;
            FU.slotOffset = XU < 0 ? this.writeMeshSlot(UU.getWorldMatrix().m, UU.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[XU], 16 * XU), QU.push(FU)
          }
        }
        return QU.length - FU
      }
      bundleDraws(UU, XU, zU) {
        let cU = 0;
        for (const yU of XU) {
          let XU = this.retainedDraw(UU, yU, zU, !1);
          const QU = void 0 !== XU;
          if (void 0 === XU && (XU = this.drawFor(UU, yU, zU, !1), this.retain(yU, XU)), XU) {
            const UU = yU.owner,
              zU = this.thinBundle.add(yU, XU, UU.getWorldMatrix().m, UU.visibility);
            QU && this.steadyFrom(yU, XU, zU), cU++
          }
        }
        return cU
      }
      steadyFrom(UU, XU, zU) {
        const cU = UU.owner,
          yU = this.pUU.base(cU),
          QU = cU.material,
          {
            drawState: AU,
            instance: FU
          } = XU.inputs.retained;
        if (!yU || !QU || 1 !== UU.parts.materials.length || CQ(UU) !== QU) return;
        const oU = yU.steady ??= {
          unit: UU,
          material: QU,
          visibility: 1,
          draw: XU,
          record: zU,
          drawState: AU,
          instance: FU,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        oU.unit = UU, oU.material = QU, oU.visibility = cU.visibility, oU.draw = XU, oU.record = zU, oU.drawState = AU, oU.instance = FU, oU.bindGroup = FU.bindGroup, oU.gpuVersion = this.resources.gpuBuffersVersion, oU.fitInstances = XU.inputs.fitInstances, oU.worldFlag = cU.getWorldMatrix().updateFlag, oU.handedFrame = this.frame
      }
      keepSteady(UU, XU) {
        const zU = UU.steady;
        if (zU.handedFrame !== this.frame - 1 || (this.frame + zU.phase) % 8 === 0) return !1;
        const cU = UU.mesh,
          {
            unit: yU,
            draw: QU,
            instance: AU,
            drawState: FU
          } = zU,
          oU = cU.forcedInstanceCount || cU.BUU;
        if (!cU.isVisible || cU.jyU || cU.visibility !== zU.visibility || 0 === (cU.layerMask & XU.layerMask) || cU.material !== zU.material || 0 !== cU.renderingGroupId || cU.hasVertexAlpha || !this.drawDefines.definesHold(FU, yU, FU.instancing) || zU.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(QU.inputs, yU, FU.instancing, QU.program) || QU.program.failed || AU.released || oU <= 0 || oU > zU.fitInstances) return !1;
        if (AU.frame !== this.frame && this.bindMaterial(AU, this.modelUniforms.refreshModelUniforms(cU.nS(), AU, AU.model, this.view)), !AU.bindable || AU.bindGroup !== zU.bindGroup) return !1;
        const DU = cU.computeWorldMatrix(),
          EU = DU.updateFlag !== zU.worldFlag;
        return zU.worldFlag = DU.updateFlag, QU.instances = oU, this.thinBundle.addAgain(zU.record, QU, EU ? DU.m : null, zU.visibility), zU.handedFrame = this.frame, this.pUU.drawn++, !0
      }
      retainedDraw(UU, XU, zU, cU) {
        const yU = this.inputs.get(XU),
          QU = null === yU || void 0 === yU ? void 0 : yU.retained;
        if (!yU || !QU) return;
        const {
          drawState: AU,
          program: FU,
          instance: oU,
          instancing: DU
        } = QU, EU = XU.owner;
        if (yQ(EU) !== DU) return;
        const YU = this.instanceCount(EU, DU);
        if (YU <= 0) return null;
        if (oU.released || FU.failed || AU.program !== FU || !this.drawDefines.programCurrent(AU, XU, DU, zU) || !this.inputsStamped(yU, XU, DU, FU) || EU.isUnIndexed !== QU.unIndexed || this.indexKey(XU) !== QU.indexData) return;
        if (QU.indexBuffer && QU.gpuVersion !== this.resources.gpuBuffersVersion) {
          const UU = this.resources.gpuBuffer(QU.indexData);
          if (!UU) return;
          QU.indexBuffer = UU, QU.gpuVersion = this.resources.gpuBuffersVersion
        }
        let NU = !1;
        if (oU.frame !== this.frame && (NU = this.modelUniforms.refreshModelUniforms(UU, oU, oU.model, this.view)), !this.bindMaterial(oU, NU) || !this.withGpuBuffers(yU) || !this.instanceBuffersFit(EU.name, yU, YU)) return null;
        const IU = this.makeDraw(FU, yU, this.renderStates.renderState(AU.model, EU, cU, yU.state), oU, YU);
        return this.setRange(IU, XU, QU.indexBuffer, QU.indexData), IU
      }
      retain(UU, XU) {
        const zU = this.drawDefines.drawStates.get(UU);
        if (!XU || !zU || zU.program !== XU.program) {
          const XU = this.inputs.get(UU);
          return void(XU && (XU.retained = null))
        }
        const cU = UU.owner,
          yU = zU.instancing,
          QU = this.indexKey(UU),
          AU = XU.inputs.retained;
        AU ? (AU.drawState = zU, AU.instancing = yU, AU.program = XU.program, AU.instance = XU.material, AU.indexData = QU, AU.unIndexed = cU.isUnIndexed, AU.indexBuffer = XU.indexBuffer, AU.gpuVersion = this.resources.gpuBuffersVersion) : XU.inputs.retained = {
          drawState: zU,
          instancing: yU,
          program: XU.program,
          instance: XU.material,
          indexData: QU,
          unIndexed: cU.isUnIndexed,
          indexBuffer: XU.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(UU, XU, zU, cU) {
        const yU = XU.owner,
          QU = CQ(XU);
        if (!QU) return null;
        const AU = QU.getClassName();
        let FU = null;
        if (function(UU) {
            return "LinesMesh" === UU.getClassName()
          }(yU)) {
          if (! function(UU) {
              return "ShaderMaterial" === UU.getClassName() && "color" === UU.shaderPath
            }(QU)) return this.warnOnce(`lines:${AU}`, `A LinesMesh with a ${AU} is not drawn yet (${QU.name})`), null;
          FU = yU
        } else if ("StandardMaterial" !== AU && "LiteMaterial" !== AU) return this.warnOnce(`class:${AU}`, `${AU} is not drawn yet (${QU.name})`), null;
        const oU = yQ(yU),
          DU = this.instanceCount(yU, oU);
        if (DU <= 0) return null;
        const EU = FU ? this.lineProgramFor(yU, zU, oU) : this.drawDefines.programFor(UU, XU, QU, zU, oU);
        if (!EU || EU.failed) return null;
        const YU = FU ? null : this.drawDefines.drawStates.get(XU).model,
          NU = YU ? this.modelInstance(YU, EU) : this.materialInstance(yU, EU);
        let IU = !1;
        if (NU.frame !== this.frame && (FU ? kU(NU.ubo, FU) : IU = this.modelUniforms.refreshModelUniforms(UU, NU, NU.model, this.view)), !this.bindMaterial(NU, IU)) return null;
        const pU = this.meshInputs(XU, EU, oU);
        if (!pU || !this.instanceBuffersFit(yU.name, pU, DU)) return null;
        const aU = this.indexKey(XU);
        let tU = null;
        if (aU && !yU.isUnIndexed && (tU = this.resources.gpuBuffer(aU), !tU)) return null;
        const gU = this.renderStates.renderState(null !== YU && void 0 !== YU ? YU : QU, yU, cU, pU.state, FU ? "line-list" : "triangle-list"),
          GU = this.makeDraw(EU, pU, gU, NU, DU);
        return this.setRange(GU, XU, tU, aU), GU
      }
      indexKey(UU) {
        const XU = oQ(UU);
        return XU ? this.resources.modelIndex(XU) : null
      }
      setRange(UU, XU, zU, cU) {
        zU && (UU.indexBuffer = zU, UU.indexFormat = this.resources.indexFormat(cU));
        const yU = 4 * XU.range + (zU ? 0 : 2);
        UU.unit = XU, UU.first = XU.parts.Qt[yU], UU.count = XU.parts.Qt[yU + 1]
      }
      makeDraw(UU, XU, zU, cU, yU) {
        XU.state !== zU && (XU.state = zU, XU.pipelineKey = `${UU.id}|${XU.layout.key}|${zU.key}`, XU.pipeline = null);
        const QU = XU.draw ??= {
          program: UU,
          inputs: XU,
          pipelineKey: "",
          layout: XU.layout,
          state: zU,
          material: cU,
          slotOffset: 0,
          vertexBuffers: XU.buffers,
          vertexOffsets: XU.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: yU,
          unit: null
        };
        return QU.program = UU, QU.pipelineKey = XU.pipelineKey, QU.state = zU, QU.material = cU, QU.vertexOffsets = XU.offsets, QU.indexBuffer = null, QU.instances = yU, QU
      }
      instanceCount(UU, XU) {
        switch (XU) {
          case "thin":
            return UU.forcedInstanceCount || UU.BUU;
          case "instanced":
            return this.prepareInstances(UU);
          case "none":
            return 1
        }
      }
      prepareInstances(UU) {
        const XU = function(UU, XU) {
          const zU = XU._userInstancedBuffersStorage,
            cU = UU.batchUploads.get(XU);
          if (cU) {
            var yU;
            if (cU.layout === (null !== (yU = null === zU || void 0 === zU ? void 0 : zU.interleavedKinds) && void 0 !== yU ? yU : null)) return cU;
            cU.release()
          }
          return new IX(UU, XU, zU)
        }(this.resources, UU);
        return XU.frame !== this.frame && XU.pack(UU, this.modelMeshes.instanceBatch(UU), this.modelMeshes.worlds, this.frame), XU.count
      }
      programWithModel(UU, XU, zU) {
        const cU = this.modelSlot(UU),
          yU = YQ(cU, UU, zU),
          QU = this.drawDefines.modelPackKind(UU),
          AU = QU ? function(UU, XU, zU, cU) {
            const yU = (0, dU.v)(UU, PU.j.name),
              QU = [];
            for (const {
                feature: oU,
                state: DU,
                active: EU
              }
              of UU.features) {
              var AU, FU;
              const UU = EU ? null === (AU = (FU = (0, SX.j)(oU)).Fp) || void 0 === AU ? void 0 : AU.call(FU, DU) : void 0;
              UU && QU.push(UU)
            }
            return {
              kind: XU,
              atlas: null !== yU && void 0 !== yU && yU.active ? (0, PU.d)(yU.state) : null,
              defines: zU,
              ...YA(QU, cU)
            }
          }(UU, QU, XU, cU.fragmentCode) : null;
        if (AU && function(UU) {
            const XU = UU.defines;
            return (null === UU.atlas || !!XU.DIFFUSE && 1 === XU.DIFFUSEDIRECTUV) && !!XU.NORMAL && !XU.REFLECTION && !XU.EMISSIVEASILLUMINATION && !XU.LINKEMISSIVEWITHDIFFUSE
          }(AU)) {
          const zU = this.modelPackProgram(UU, XU, `${yU}#${QU}#sp${this.drawDefines.modelPackVariant}`, cU, AU);
          if (zU && !zU.failed) return zU
        }
        const FU = this.programs.get(yU);
        if (FU || this.unbuildable.has(yU)) return null !== FU && void 0 !== FU ? FU : null;
        let oU;
        try {
          oU = wy({
            defines: AQ(XU),
            vertexCode: cU.vertexCode,
            fragmentCode: cU.fragmentCode,
            pluginUniforms: cU.pluginUniforms
          })
        } catch (DU) {
          return this.unbuildable.add(yU), this.warnOnce(`build:${yU}`, `could not build a program for ${UU.name}: ${String(DU)}`), null
        }
        return this.createProgram(yU, oU, "standard")
      }
      modelPackProgram(UU, XU, zU, cU, yU) {
        const QU = this.programs.get(zU);
        if (QU || this.unbuildable.has(zU)) return null !== QU && void 0 !== QU ? QU : null;
        const AU = this.drawDefines.modelPackVariant;
        let FU;
        try {
          const UU = function(UU) {
              return (0, bX.c)(UU, "model")
            }(AU),
            zU = WA(UU, yU, cU.vertexCode, cU.fragmentCode);
          FU = CA(wy({
            defines: AQ(XU),
            ...zU,
            pluginUniforms: cU.pluginUniforms
          }), UU, yU, !!this.sunShadow)
        } catch (EU) {
          return this.unbuildable.add(zU), this.warnOnce(`build:${zU}`, `could not build a shader pack program for ${UU.name}, which draws without the pack: ${String(EU)}`), null
        }
        const oU = lQ(AU, !!this.sunShadow),
          DU = {
            group: this.packInputs.bindGroupFor(null, oU),
            layout: nQ(this.device, {
              depth: !1,
              sunShadow: oU
            })
          };
        return this.createProgram(zU, FU, function(UU) {
          return `standard-sp${UU}`
        }(AU), DU)
      }
      lineProgramFor(UU, XU, zU) {
        const cU = gU(UU, zU, XU, this.view);
        let yU = this.linePrograms.get(cU);
        var QU;
        return yU || (yU = this.createProgram(`lines#${cU}`, (QU = function(UU) {
          const XU = new Map;
          for (let zU = 0; zU < DU.length; zU++) UU & 1 << zU && XU.set(DU[zU], !0);
          return XU
        }(cU), ry({
          defines: QU,
          vertex: Oy,
          fragment: Sy,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(cU, yU)), yU
      }
      createProgram(UU, XU, zU) {
        var cU;
        let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const QU = this.nextProgramId++,
          AU = `${zU}-${QU}`,
          FU = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          oU = [{
            binding: 0,
            visibility: FU,
            buffer: {
              type: "uniform"
            }
          }];
        for (const YU of XU.textures) oU.push({
          binding: YU.binding,
          visibility: FU,
          texture: {
            viewDimension: YU.dimension
          }
        }), oU.push({
          binding: YU.samplerBinding,
          visibility: FU,
          sampler: {}
        });
        const DU = this.device.createBindGroupLayout({
            label: AU,
            entries: oU
          }),
          EU = {
            key: UU,
            id: QU,
            kind: zU,
            program: XU,
            vertex: this.device.createShaderModule({
              label: `${AU}-vertex`,
              code: XU.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${AU}-fragment`,
              code: XU.fragment
            }),
            materialLayout: DU,
            pipelineLayout: this.device.createPipelineLayout({
              label: AU,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, DU, ...yU ? [yU.layout] : []]
            }),
            packGroup: null !== (cU = null === yU || void 0 === yU ? void 0 : yU.group) && void 0 !== cU ? cU : null,
            failed: !1
          };
        return this.programs.set(UU, EU), EU
      }
      writeFrameUniforms() {
        const UU = this.frameUniforms;
        kQ(this.view, UU), this.device.queue.writeBuffer(this.frameBuffer, 0, UU)
      }
      materialInstance(UU, XU) {
        let zU = this.materials.get(UU);
        if (!zU) {
          const XU = new Map;
          this.materials.set(UU, XU);
          const {
            resources: cU,
            materials: yU
          } = this;
          UU.bS.addOnce((() => {
            for (const UU of XU.values()) UU.released = !0, cU.destroyBuffer(UU.buffer);
            yU.delete(UU)
          })), zU = XU
        }
        let cU = zU.get(XU.key);
        return cU || (cU = this.newMaterialInstance(UU, null, XU), zU.set(XU.key, cU)), cU
      }
      modelInstance(UU, XU) {
        const zU = this.modelSlot(UU);
        let cU = zU.instances.get(XU.key);
        return cU || (cU = this.newMaterialInstance(UU, UU, XU), zU.instances.set(XU.key, cU)), cU
      }
      modelSlot(UU) {
        var XU;
        let zU = UU.gpu[eU.e.lite];
        return (null === (XU = zU) || void 0 === XU ? void 0 : XU.epoch) !== this.resources.epoch && (zU = new qA(this.resources, this.resources.epoch), UU.gpu[eU.e.lite] = zU), zU
      }
      newMaterialInstance(UU, XU, zU) {
        const cU = zU.program.material.floats,
          yU = new Float32Array(cU),
          QU = new Map;
        return {
          owner: UU,
          model: XU,
          program: zU,
          data: yU,
          uploaded: new Float32Array(cU).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${UU.name}-uniforms`,
            size: Math.max(16, 4 * cU),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: QU,
          ubo: new gQ(zU.program.material.slots, yU, QU),
          bindGroup: null,
          bound: new Array(2 * zU.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(UU) {
        var XU;
        const zU = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: My + vy,
            fragment: My + Vy,
            attributes: [],
            material: Hy,
            textures: []
          }, "earthSky"),
          cU = this.earthSkyUniforms ??= this.newMaterialInstance(wA, null, zU);
        this.earthSkyFrom !== UU && (this.earthSkyFrom = UU, cU.data.fill(0)), Ky(cU.ubo, UU, this.view);
        const yU = this.vertexInputs(zU, wA, "earthSky", zU, null);
        if (zU.failed || !yU || !this.bindMaterial(cU, !1)) return;
        const QU = null !== (XU = yU.state) && void 0 !== XU ? XU : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          AU = this.makeDraw(zU, yU, QU, cU, 1);
        AU.count = uy.length;
        const FU = by(UU, this.view);
        AU.slotOffset = this.writeMeshSlot(FU, 1), this.lists.skyDraws.push(AU)
      }
      uploadIfChanged(UU) {
        const {
          data: XU,
          uploaded: zU
        } = UU;
        for (let cU = 0; cU < XU.length; cU++)
          if (XU[cU] !== zU[cU]) return zU.set(XU), void this.device.queue.writeBuffer(UU.buffer, 0, XU)
      }
      bindMaterial(UU, XU) {
        return UU.frame !== this.frame && (UU.frame = this.frame, XU || this.uploadIfChanged(UU), UU.bindable = this.bindTextures(UU)), UU.bindable
      }
      bindTextures(UU) {
        const {
          program: XU,
          bound: zU
        } = UU, cU = XU.program.textures;
        let yU = !UU.bindGroup,
          QU = !0;
        for (let AU = 0; AU < cU.length; AU++) {
          const XU = UU.textures.get(cU[AU].name),
            FU = XU ? this.resources.boundTexture(XU) : null;
          FU ? zU[2 * AU] === FU.view && zU[2 * AU + 1] === FU.sampler || (zU[2 * AU] = FU.view, zU[2 * AU + 1] = FU.sampler, yU = !0) : (XU || UU.ubo.expected.has(cU[AU].name) || this.warnOnce(`texture:${UU.owner.name}:${cU[AU].name}`, `${UU.owner.name} has no ${cU[AU].name}`), QU = !1)
        }
        if (!QU) return yU && (UU.bindGroup = null), !1;
        if (yU) {
          const yU = [{
            binding: 0,
            resource: {
              buffer: UU.buffer
            }
          }];
          for (let UU = 0; UU < cU.length; UU++) yU.push({
            binding: cU[UU].binding,
            resource: zU[2 * UU]
          }), yU.push({
            binding: cU[UU].samplerBinding,
            resource: zU[2 * UU + 1]
          });
          UU.bindGroup = this.device.createBindGroup({
            label: `${UU.owner.name}-material`,
            layout: XU.materialLayout,
            entries: yU
          })
        }
        return !0
      }
      writeMeshSlot(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, UU, XU, zU), this.slotCount++ * Dy
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(UU, XU, zU, cU, yU) {
        let QU = this.inputs.get(UU);
        if (!QU || QU.program !== cU || !WQ(XU, QU, this.resources, yU)) {
          var AU;
          if (QU = null !== (AU = this.vertexLayouts.resolveInputs(XU, zU, cU, yU)) && void 0 !== AU ? AU : void 0, !QU) return null;
          this.inputs.set(UU, QU)
        }
        return this.withGpuBuffers(QU)
      }
      meshInputs(UU, XU, zU) {
        const cU = this.inputs.get(UU);
        if (cU && this.inputsStamped(cU, UU, zU, XU)) return this.withGpuBuffers(cU);
        const yU = UU.owner,
          QU = oQ(UU),
          AU = this.vertexInputs(UU, yU, yU.name, XU, QU);
        return AU && (AU.geometry = DQ(UU), AU.instanceLayout = this.drawDefines.instanceLayout(yU, zU)), AU
      }
      inputsStamped(UU, XU, zU, cU) {
        return function(UU, XU, zU, cU) {
          return UU.program === zU && UU.geometry === DQ(XU) && UU.instanceLayout === cU
        }(UU, XU, cU, this.drawDefines.instanceLayout(XU.owner, zU))
      }
      withGpuBuffers(UU) {
        return jQ(UU, this.resources, this.zeroBuffer) ? UU : null
      }
      instanceBuffersFit(UU, XU, zU) {
        const cU = bQ(XU, zU, this.resources, this.zeroBuffer);
        if (cU) {
          const yU = XU.ends[cU.index] - XU.offsets[cU.index] + XU.gUU[cU.index];
          return this.warnOnce(`overrun:${UU}`, `${UU} draws ${zU} instances from a ${yU}-byte buffer (${cU.needed} needed)`), !1
        }
        return !0
      }
      createBinding(UU, XU, zU, cU) {
        const yU = `${XU._colorFormat}|${XU._depthStencilFormat}|${XU._depthCompare}|${XU._sampleCount}`,
          QU = CX(this.device, XU);
        if (UU === this.skyLastRenderable) {
          let zU = null;
          return {
            renderable: UU,
            pipeline: QU,
            draw: UU => zU ? this.drawSky(UU, XU, yU, zU) : 0,
            update: UU => {
              zU = UU
            }
          }
        }
        return {
          renderable: UU,
          pipeline: QU,
          draw: UU => (cU ? cU.execute(UU, XU, yU) : 0) + this.drawList(UU, XU, yU, zU)
        }
      }
      drawSky(UU, XU, zU, cU) {
        const yU = this.lists.skyDraws,
          QU = yU.length > 0;
        if (QU) {
          var AU;
          const zU = (null !== (AU = XU._depthCompare) && void 0 !== AU ? AU : WX).startsWith("greater") ? 0 : 1;
          UU.setViewport(0, 0, cU.targetWidth, cU.targetHeight, zU, zU)
        }
        const FU = this.drawList(UU, XU, zU, yU);
        return QU && UU.setViewport(0, 0, cU.targetWidth, cU.targetHeight, 0, 1), FU
      }
      drawList(UU, XU, zU, cU) {
        let yU = 0;
        const QU = this.binder;
        QU.reset();
        for (const AU of cU) {
          const cU = this.pipelineFor(AU, XU, zU);
          cU && (QU.bind(UU, AU, cU, this.meshSlots.bindGroup, AU.slotOffset), AU.indexBuffer ? UU.drawIndexed(AU.count, AU.instances, AU.first, 0, 0) : UU.draw(AU.count, AU.instances, AU.first, 0), yU++)
        }
        return yU
      }
      pipelineFor(UU, XU, zU) {
        var cU, yU;
        if (UU.program.failed) return null;
        const QU = UU.inputs;
        if (QU.pipeline && QU.pipelineTarget === zU) return QU.pipeline;
        const AU = `${UU.pipelineKey}|${zU}`,
          FU = this.pipelines.get(AU);
        if (void 0 !== FU) return FU && (QU.pipeline = FU, QU.pipelineTarget = zU), FU || null;
        this.pipelines.set(AU, null);
        const {
          program: oU,
          layout: DU,
          state: EU
        } = UU, YU = {
          label: `standard-${oU.id}`,
          layout: oU.pipelineLayout,
          vertex: {
            module: oU.vertex,
            entryPoint: "main",
            buffers: DU.buffers
          },
          fragment: kX({
            module: oU.fragment,
            entryPoint: "main"
          }, XU, EU.blend, EU.colourWrite),
          depthStencil: XU._depthStencilFormat ? {
            format: XU._depthStencilFormat,
            depthCompare: null !== (cU = null !== (yU = EU.depthCompare) && void 0 !== yU ? yU : XU._depthCompare) && void 0 !== cU ? cU : WX,
            depthWriteEnabled: EU.depthWrite,
            depthBias: EU.depthBias,
            depthBiasSlopeScale: EU.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: XU._sampleCount
          },
          primitive: {
            topology: EU.topology,
            frontFace: EU.frontFace,
            cullMode: EU.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(YU).then((UU => {
          this.compiling--, this.pipelines.set(AU, UU)
        }), (UU => {
          this.compiling--, this.reportFailure(oU, AU, UU)
        })), null
      }
      forEachSunShadowCaster(UU) {
        const XU = this.caster,
          zU = (zU, cU, yU) => {
            const QU = zU.unit && function(UU) {
              const XU = UU.material.model;
              return null !== XU && (XU.lifeform || XU.item) && XU.castsSunShadow && "triangle-list" === UU.state.topology
            }(zU) ? oQ(zU.unit) : null;
            if (!QU) return;
            const AU = zU.unit.owner;
            switch (XU.geometry = QU, XU.skip = AU.noSunShadowVertices, XU.indexed = null !== zU.indexBuffer, XU.first = zU.first, XU.count = zU.count, XU.qY = cU, XU.worldAt = yU, XU.instances = null, XU.instanceCount = 1, XU.thin = !1, yQ(AU)) {
              case "thin": {
                const UU = AU._thinInstanceDataStorage.matrixData;
                if (!UU) return;
                XU.instances = UU, XU.instanceCount = Math.min(zU.instances, UU.length / 16), XU.thin = !0;
                break
              }
              case "instanced": {
                const UU = this.resources.batchUploads.get(AU);
                if (!UU || UU.frame !== this.frame || !this.writeBatchCasters(UU)) return;
                break
              }
            }
            UU(XU)
          };
        for (const cU of this.lists.opaqueDraws) zU(cU, this.meshSlots.data, cU.slotOffset / 4);
        this.thinBundle.forEachDrawn(zU)
      }
      writeBatchCasters(UU) {
        const {
          caster: XU
        } = this, zU = UU.packedMatrices, cU = UU.count;
        XU.instances = zU, XU.instanceCount = cU;
        let yU = -1;
        for (let QU = 0; QU < cU; QU++) {
          const XU = rA(UU.packedRowMesh(QU));
          XU && yU < 0 ? (this.casterWorlds.length < 16 * cU && (this.casterWorlds = new Float32Array(zU.length)), this.casterWorlds.set(zU.subarray(0, 16 * QU)), yU = QU) : !XU && yU >= 0 && (this.casterWorlds.set(zU.subarray(16 * QU, 16 * QU + 16), 16 * yU), yU++)
        }
        return yU >= 0 && (XU.instances = this.casterWorlds, XU.instanceCount = yU), XU.instanceCount > 0
      }
      async reportFailure(UU, XU, zU) {
        const cU = [];
        let yU = !0;
        for (const [QU, AU] of [
            ["vertex", UU.vertex],
            ["fragment", UU.fragment]
          ]) {
          const UU = await AU.getCompilationInfo();
          for (const XU of UU.messages) yU &&= "error" !== XU.type, cU.push(`${QU}:${XU.lineNum}:${XU.linePos} ${XU.type}: ${XU.message}`)
        }
        if (yU && !UU.packGroup) return this.pipelines.set(XU, !1), console.error(`Lite: pipeline ${XU} failed`, zU), void EX(this.device, "mesh", UU.kind, zU);
        UU.failed || (UU.failed = !0, console.error(`Lite: program ${UU.id} failed`, zU, cU.join("\n"), {
          program: UU.program,
          key: UU.key
        }), EX(this.device, "mesh", UU.kind, zU, yU ? null : cU[0]))
      }
    }

    function rA(UU) {
      var XU, zU;
      const cU = null === (XU = UU.XM) || void 0 === XU || null === (zU = XU.aShaderPackItem) || void 0 === zU ? void 0 : zU.x;
      return void 0 !== cU && 0 !== (cU & qX.i)
    }
    var uA = zU(44369),
      fA = zU(44374),
      iA = zU(44382),
      HA = zU(44328);
    const MA = [0, 3, 1, 4, 2, 5];

    function vA(UU, XU, zU, cU, yU) {
      const QU = zU[0].width;
      try {
        return yU ? function(UU, XU, zU) {
          const cU = (0, HA.e)(UU, zU, zU, 6);
          for (let yU = 0; yU < 6; yU++)(0, HA.h)(UU, cU, yU, XU[MA[yU]], {
            invertY: !1
          });
          return cU.texture
        }(UU, zU, QU) : function(UU, XU, zU, cU) {
          const yU = UU.createTexture({
            label: "sink-cube",
            size: {
              width: zU,
              height: zU,
              depthOrArrayLayers: 6
            },
            format: cU,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let QU = 0; QU < 6; QU++) UU.queue.copyExternalImageToTexture({
            source: XU[MA[QU]]
          }, {
            texture: yU,
            origin: {
              x: 0,
              y: 0,
              z: QU
            }
          }, {
            width: zU,
            height: zU
          });
          return yU
        }(XU, zU, QU, 1 === cU ? "r8unorm" : "rgba8unorm")
      } finally {
        VA(zU)
      }
    }

    function VA(UU) {
      for (const XU of null !== UU && void 0 !== UU ? UU : []) null === XU || void 0 === XU || XU.close()
    }
    async function sA(UU) {
      const XU = [],
        zU = [];
      if (await Promise.all(UU.map(((UU, cU) => (XU[cU] = null, UU.then((UU => {
          XU[cU] = UU
        }), (UU => {
          zU.push(UU)
        })))))), zU.length > 0) throw VA(XU), zU[0];
      return XU
    }
    class nA {
      constructor(UU) {
        this.xY = UU, this.starts = [], this.lengths = [], this.used = 0, UU > 0 && (this.starts.push(0), this.lengths.push(UU))
      }
      allocate(UU) {
        const {
          starts: XU,
          lengths: zU
        } = this;
        for (let cU = 0; cU < XU.length; cU++) {
          if (zU[cU] < UU) continue;
          const yU = XU[cU];
          return zU[cU] === UU ? (XU.splice(cU, 1), zU.splice(cU, 1)) : (XU[cU] += UU, zU[cU] -= UU), this.used += UU, yU
        }
        return -1
      }
      free(UU, XU) {
        this.used -= XU;
        const zU = Math.min(UU + XU, this.xY);
        zU > UU && this.release(UU, zU - UU)
      }
      grow(UU) {
        const XU = this.xY;
        this.xY = UU, this.release(XU, UU - XU)
      }
      truncate(UU) {
        const {
          starts: XU,
          lengths: zU
        } = this;
        for (let cU = XU.length - 1; cU >= 0 && XU[cU] + zU[cU] > UU; cU--) XU[cU] >= UU ? (XU.splice(cU, 1), zU.splice(cU, 1)) : zU[cU] = UU - XU[cU];
        this.xY = UU
      }
      release(UU, XU) {
        const {
          starts: zU,
          lengths: cU
        } = this;
        let yU = 0,
          QU = zU.length;
        for (; yU < QU;) {
          const XU = yU + QU >> 1;
          zU[XU] < UU ? yU = XU + 1 : QU = XU
        }
        const AU = yU,
          FU = AU > 0 && zU[AU - 1] + cU[AU - 1] === UU,
          oU = AU < zU.length && UU + XU === zU[AU];
        FU && oU ? (cU[AU - 1] += XU + cU[AU], zU.splice(AU, 1), cU.splice(AU, 1)) : FU ? cU[AU - 1] += XU : oU ? (zU[AU] = UU, cU[AU] += XU) : (zU.splice(AU, 0, UU), cU.splice(AU, 0, XU))
      }
    }
    const mA = 256;
    class lA {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = UU, this.onReplaced = XU, this.mergeGap = zU, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.Qt = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const yU = Math.max(mA, Math.ceil(cU / mA) * mA);
        this.bytes = new Uint8Array(yU), this.words = new Uint32Array(this.bytes.buffer), this.Qt = new nA(yU / mA)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(UU) {
        return Math.max(1, Math.ceil(UU / mA)) * mA
      }
      allocate(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU;
        const cU = lA.slotBytes(UU),
          yU = cU / mA;
        let QU = this.Qt.allocate(yU);
        QU < 0 && (this.grow(this.Qt.xY + yU), QU = this.Qt.allocate(yU));
        const AU = QU * mA;
        return this.growTo(AU + Math.max(zU, cU)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, AU, AU + cU), XU && this.bytes.set(new Uint8Array(XU.buffer, XU.byteOffset, Math.min(XU.byteLength, cU)), AU), this.markDirty(AU, AU + cU), AU
      }
      growTo(UU) {
        const XU = Math.ceil(UU / mA);
        XU > this.Qt.xY && this.grow(XU)
      }
      free(UU, XU) {
        this.freed.push(UU, XU)
      }
      write(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (cU <= 0) return;
        cU <= 1024 && 0 === (3 & (UU | zU | cU)) ? this.copyWords(UU >> 2, XU.buffer, zU >> 2, cU >> 2) : this.bytes.set(new Uint8Array(XU.buffer, zU, cU), UU);
        let QU = UU + cU;
        if (yU) {
          const XU = UU + 4 * Math.ceil(cU / 4);
          this.bytes.fill(0, QU, XU), QU = XU
        }
        this.markDirty(UU, QU)
      }
      copyWords(UU, XU, zU, cU) {
        let yU = this.sourceWords.get(XU);
        yU || (yU = new Uint32Array(XU, 0, XU.byteLength >> 2), this.sourceWords.set(XU, yU));
        const QU = this.words;
        for (let AU = 0; AU < cU; AU++) QU[UU + AU] = yU[zU + AU]
      }
      move(UU, XU, zU) {
        this.bytes.copyWithin(XU, UU, UU + zU), this.markDirty(XU, XU + zU)
      }
      flush() {
        for (const XU of this.retired) this.onReplaced(XU), XU.destroy();
        this.retired.length = 0;
        const UU = this.dirtyStarts.length;
        if (UU > 0) {
          const {
            dirtyStarts: XU,
            dirtyEnds: zU,
            order: cU
          } = this;
          cU.length = UU;
          for (let FU = 0; FU < UU; FU++) cU[FU] = FU;
          UU > 1 && cU.sort(((UU, zU) => XU[UU] - XU[zU]));
          const yU = this.mergeGap;
          let QU = XU[cU[0]],
            AU = zU[cU[0]];
          for (let FU = 1; FU < UU; FU++) {
            const UU = cU[FU];
            XU[UU] - AU <= yU ? AU = Math.max(AU, zU[UU]) : (this.send(QU, AU), QU = XU[UU], AU = zU[UU])
          }
          this.send(QU, AU), XU.length = 0, zU.length = 0
        }
        this.holding = !1
      }
      ZY() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const UU = this.freed;
        for (let XU = 0; XU < UU.length; XU += 2) this.Qt.free(UU[XU] / mA, UU[XU + 1] / mA);
        UU.length = 0
      }
      send(UU, XU) {
        this.device.queue.writeBuffer(this.gpu, UU, this.bytes.buffer, UU, XU - UU);
        for (const zU of this.replaced) {
          const cU = Math.min(XU, zU.size);
          cU > UU && this.device.queue.writeBuffer(zU, UU, this.bytes.buffer, UU, cU - UU)
        }
      }
      markDirty(UU, XU) {
        UU &= -4, XU = XU + 3 & -4, this.holding ? (this.dirtyStarts.push(UU), this.dirtyEnds.push(XU)) : this.send(UU, XU)
      }
      grow(UU) {
        const XU = this.Qt.xY,
          zU = Math.max(2 * XU, UU),
          cU = new Uint8Array(zU * mA);
        cU.set(this.bytes);
        const yU = this.gpu;
        this.gpu = this.createGpu(cU.byteLength), this.bytes = cU, this.words = new Uint32Array(cU.buffer), this.Qt.grow(zU), yU && (this.replaced.push(yU), this.onReplaced(yU)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, XU * mA)
      }
      createGpu(UU) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: UU,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function xA(UU) {
      return Array.isArray(UU) ? new Float32Array(UU) : UU
    }

    function JA(UU, XU, zU, cU, yU) {
      const QU = xU(yU),
        AU = Math.min(yU, cU.byteLength);
      if (QU === AU && cU.byteOffset % 4 === 0) return void UU.queue.writeBuffer(XU, zU, cU.buffer, cU.byteOffset, QU);
      const FU = new Uint8Array(QU);
      FU.set(new Uint8Array(cU.buffer, cU.byteOffset, AU)), UU.queue.writeBuffer(XU, zU, FU)
    }

    function jA(UU, XU, zU) {
      const cU = "linear",
        yU = "nearest";
      let QU = yU,
        AU = yU,
        FU = "nearest",
        oU = !XU;
      switch (UU) {
        case 11:
          QU = cU, AU = cU;
          break;
        case 3:
          QU = cU, AU = cU, FU = XU ? "linear" : "nearest";
          break;
        case 8:
          FU = XU ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          AU = cU;
          break;
        case 6:
          AU = cU, FU = XU ? "linear" : "nearest";
          break;
        case 7:
          AU = cU, oU = !0;
          break;
        case 9:
          QU = cU;
          break;
        case 10:
          QU = cU, FU = XU ? "linear" : "nearest";
          break;
        case 2:
          QU = cU, AU = cU, zU > 1 ? (FU = "linear", oU = !1) : oU = !0;
          break;
        case 12:
          QU = cU, oU = !0;
          break;
        default:
          oU = !0
      }
      return zU > 1 && !oU ? {
        magFilter: cU,
        minFilter: cU,
        mipmapFilter: "linear",
        maxAnisotropy: zU
      } : {
        magFilter: QU,
        minFilter: AU,
        mipmapFilter: FU,
        ...oU ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function KA(UU) {
      return 0 === UU ? "clamp-to-edge" : 2 === UU ? "mirror-repeat" : "repeat"
    }
    class bA {
      constructor(UU, XU) {
        let {
          vertexArena: zU = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = UU, this.device = XU, this.buffers = new WeakMap, this.w6 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = zU ? this.createArena() : null
      }
      createArena() {
        return new lA(this.device, (UU => {
          var XU;
          null === (XU = this.onDestroy) || void 0 === XU || XU.call(this, UU), this.gpuBuffersVersion++
        }))
      }
      rebind(UU, XU) {
        this.engine = UU, this.device = XU, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const zU of this.liveUploads) zU.rebind();
        for (const zU of this.rebindWaiters.splice(0)) zU()
      }
      flushUploads() {
        var UU;
        null === (UU = this.arena) || void 0 === UU || UU.flush()
      }
      endUploadFrame() {
        var UU;
        null === (UU = this.arena) || void 0 === UU || UU.ZY()
      }
      vertexBufferCreated(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zU ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(UU);
        const yU = xA(XU);
        UU.xY = yU.byteLength, this.buffers.set(UU, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: zU && null !== this.arena,
          pending: yU,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: cU
        })
      }
      vertexBufferUpdated(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        const yU = this.buffers.get(UU);
        if (!yU) return;
        const QU = xA(XU),
          AU = void 0 === cU ? QU.byteLength : Math.min(cU, QU.byteLength);
        this.update(yU, QU, zU, AU)
      }
      vertexBufferFloatsUpdated(UU, XU, zU, cU) {
        const yU = this.buffers.get(UU);
        if (!yU) return;
        const QU = zU * Float32Array.BYTES_PER_ELEMENT,
          AU = (cU - zU) * Float32Array.BYTES_PER_ELEMENT;
        yU.slot >= 0 && AU > 0 && QU + AU <= yU.size ? this.writeSlot(yU, QU, XU, XU.byteOffset + QU, AU, !1) : yU.gpu && AU > 0 && QU + AU <= yU.gpu.size ? this.device.queue.writeBuffer(yU.gpu, QU, XU.buffer, XU.byteOffset + QU, AU) : this.update(yU, XU.subarray(zU, cU), QU, AU)
      }
      indexBufferCreated(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(UU);
        const cU = function(UU) {
          if (UU instanceof Uint16Array || UU instanceof Uint32Array) return UU;
          for (let XU = 0; XU < UU.length; XU++)
            if (UU[XU] >= 65535) return new Uint32Array(UU);
          return new Uint16Array(UU)
        }(XU);
        UU.is32Bits = 4 === cU.BYTES_PER_ELEMENT, UU.xY = cU.byteLength, this.buffers.set(UU, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: cU,
          ownsPending: cU !== XU,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: zU
        })
      }
      bufferDeleted(UU) {
        const XU = this.buffers.get(UU);
        null !== XU && void 0 !== XU && XU.gpu ? (this.destroyBuffer(XU.gpu), this.gpuBuffersVersion++) : XU && XU.slot >= 0 && (this.arena.free(XU.slot, XU.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(UU)
      }
      update(UU, XU, zU, cU) {
        if (UU.slot >= 0) this.updateSlot(UU, XU, zU, cU);
        else if (UU.gpu) {
          if (zU + xU(cU) > UU.gpu.size) {
            const XU = this.device.createBuffer({
                label: UU.label,
                size: xU(Math.max(2 * UU.gpu.size, zU + cU)),
                usage: UU.usage | GPUBufferUsage.COPY_SRC
              }),
              yU = this.device.createCommandEncoder();
            yU.copyBufferToBuffer(UU.gpu, 0, XU, 0, UU.gpu.size), this.device.queue.submit([yU.finish()]), this.destroyBuffer(UU.gpu), this.gpuBuffersVersion++, UU.gpu = XU
          }
          JA(this.device, UU.gpu, zU, XU, cU)
        } else {
          const QU = new Uint8Array(XU.buffer, XU.byteOffset, cU),
            AU = UU.pending;
          if (AU && UU.ownsPending && zU + cU <= AU.byteLength) new Uint8Array(AU.buffer, AU.byteOffset, AU.byteLength).set(QU, zU);
          else if (AU && 0 === zU && cU === AU.byteLength && XU.byteLength === cU) UU.pending = XU, UU.ownsPending = !1;
          else {
            var yU;
            const XU = new Uint8Array(Math.max(null !== (yU = null === AU || void 0 === AU ? void 0 : AU.byteLength) && void 0 !== yU ? yU : 0, zU + cU));
            AU && XU.set(new Uint8Array(AU.buffer, AU.byteOffset, AU.byteLength)), XU.set(QU, zU), UU.pending = XU, UU.ownsPending = !0
          }
        }
      }
      updateSlot(UU, XU, zU, cU) {
        const yU = this.arena;
        zU + xU(cU) > UU.size && (UU.size = xU(Math.max(2 * UU.size, zU + cU)), yU.growTo(UU.slot + UU.size), this.gpuBuffersVersion++), 0 === cU ? this.writeSlot(UU, zU, hA, 0, 4, !1) : this.writeSlot(UU, zU, XU, XU.byteOffset, cU, !0)
      }
      writeSlot(UU, XU, zU, cU, yU, QU) {
        const AU = XU + (QU ? xU(yU) : yU);
        AU > UU.slotBytes && this.moveSlot(UU, AU), this.arena.write(UU.slot + XU, zU, cU, yU, QU)
      }
      moveSlot(UU, XU) {
        const zU = this.arena,
          cU = lA.slotBytes(Math.max(XU, Math.min(2 * UU.slotBytes, UU.size))),
          yU = zU.allocate(cU, null, UU.size);
        zU.move(UU.slot, yU, UU.slotBytes), zU.free(UU.slot, UU.slotBytes), UU.slot = yU, UU.slotBytes = cU, this.gpuBuffersVersion++
      }
      cover(UU, XU) {
        const zU = this.buffers.get(UU);
        if (!zU || zU.slot < 0) return !1;
        const cU = Math.min(XU, zU.size);
        return !(cU <= zU.slotBytes) && (this.moveSlot(zU, cU), !0)
      }
      destroyBuffer(UU) {
        var XU;
        null === (XU = this.onDestroy) || void 0 === XU || XU.call(this, UU), UU.destroy()
      }
      gpuBuffer(UU) {
        const XU = this.buffers.get(UU);
        if (!XU) return null;
        if (XU.slot >= 0) return this.arena.buffer;
        if (XU.arena && XU.pending) {
          const UU = XU.pending,
            zU = this.arena;
          return XU.size = xU(UU.byteLength), XU.slotBytes = lA.slotBytes(function(UU) {
            const XU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength);
            let zU = XU.length;
            if (UU.byteOffset % 4 === 0) {
              for (; zU % 4 !== 0 && 0 === XU[zU - 1];) zU--;
              if (zU % 4 === 0) {
                const XU = new Uint32Array(UU.buffer, UU.byteOffset, zU / 4);
                let cU = XU.length;
                for (; cU > 0 && 0 === XU[cU - 1];) cU--;
                zU = 4 * cU
              }
            }
            for (; zU > 0 && 0 === XU[zU - 1];) zU--;
            return zU
          }(UU)), XU.slot = zU.allocate(XU.slotBytes, UU, XU.size), XU.pending = null, zU.buffer
        }
        if (!XU.gpu && XU.pending) {
          const UU = XU.pending;
          XU.gpu = this.device.createBuffer({
            label: XU.label,
            size: xU(UU.byteLength),
            usage: XU.usage
          }), JA(this.device, XU.gpu, 0, UU, UU.byteLength), XU.pending = null
        }
        return XU.gpu
      }
      gpuOffset(UU) {
        var XU, zU;
        const cU = null !== (XU = null === (zU = this.buffers.get(UU)) || void 0 === zU ? void 0 : zU.slot) && void 0 !== XU ? XU : -1;
        return cU < 0 ? 0 : cU
      }
      gpuEnd(UU) {
        var XU, zU;
        const cU = this.buffers.get(UU);
        return cU ? cU.slot >= 0 ? cU.slot + cU.size : null !== (XU = null === (zU = cU.gpu) || void 0 === zU ? void 0 : zU.size) && void 0 !== XU ? XU : 0 : 0
      }
      vertexInput(UU, XU, zU) {
        var cU, yU, QU, AU;
        return null !== (cU = null !== (yU = zU && this.modelInput(zU, XU)) && void 0 !== yU ? yU : null === (QU = null !== (AU = this.w6.get(UU)) && void 0 !== AU ? AU : this.batchUploads.get(UU)) || void 0 === QU ? void 0 : QU.inputs[XU]) && void 0 !== cU ? cU : null
      }
      modelInput(UU, XU) {
        const zU = this.geometrySlot(UU);
        let cU = zU.inputs.get(XU);
        if (void 0 === cU) {
          const yU = UU.vertexAttributes.find((UU => UU.kind === XU));
          cU = yU ? new pX(this.modelKey(zU, yU.data, !1), yU.offset, yU.stride, yU.components, !1, yU.glType, yU.isNormalized) : null, zU.inputs.set(XU, cU)
        }
        return cU
      }
      modelIndex(UU) {
        return UU.indexData && this.modelKey(this.geometrySlot(UU), UU.indexData, !0)
      }
      geometrySlot(UU) {
        var XU;
        let zU = UU.gpu[eU.e.lite];
        if ((null === (XU = zU) || void 0 === XU ? void 0 : XU.epoch) !== this.epoch) {
          const XU = new Map,
            cU = () => {
              for (const UU of XU.values()) this.bufferDeleted(UU)
            },
            yU = UU => {
              const zU = XU.get(UU);
              zU && this.vertexBufferUpdated(zU, UU)
            };
          zU = {
            keys: XU,
            inputs: new Map,
            release: cU,
            updated: yU,
            epoch: this.epoch
          }, UU.gpu[eU.e.lite] = zU
        }
        return zU
      }
      modelKey(UU, XU, zU) {
        let cU = UU.keys.get(XU);
        if (!cU) {
          if (zU) {
            const UU = {
              xY: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(UU, XU, "model-indices"), cU = UU
          } else cU = {
            xY: 0
          }, this.vertexBufferCreated(cU, XU, !1, "model-vertices");
          UU.keys.set(XU, cU)
        }
        return cU
      }
      indexFormat(UU) {
        return UU.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(UU, XU) {
        --UU.refs > 0 || (this.releaseTexture(UU), VA(UU.images), null !== XU && this.textures.delete(XU))
      }
      load(UU, XU) {
        const {
          epoch: zU
        } = this, cU = XU.decoded = async function(UU) {
          if ("cube" === UU.kind) return async function(UU) {
            if (6 !== UU.length) throw new Error(`${UU.length} files where six faces were expected`);
            const XU = await sA(UU.map((UU => hU(UU)))),
              zU = XU[0].width;
            return sA(XU.map((async UU => {
              if (UU.width === zU && UU.height === zU) return UU;
              try {
                return await createImageBitmap(UU, {
                  ...bU,
                  resizeWidth: zU,
                  resizeHeight: zU
                })
              } finally {
                UU.close()
              }
            })))
          }(UU.files);
          if ("data" === UU.kind && UU.data) return [await createImageBitmap(new Blob([UU.data]), bU)];
          return [await hU(TA(UU))]
        }(UU.source).then((UU => {
          0 === XU.refs || zU !== this.epoch ? VA(UU) : XU.images = UU
        }));
        this.track(XU, TA(UU.source), cU, (() => {
          XU.wanted && !XU.failed && XU.refs > 0 && this.upload(UU, XU)
        }))
      }
      canvasUpdated(UU, XU, zU) {
        const {
          state: cU
        } = this.textureSlot(UU);
        cU.dynamicSource = {
          invertY: XU,
          premultiplied: zU
        }, cU.dynamic && this.pushDynamic(UU.source, cU)
      }
      async atlasArrays(UU) {
        const {
          device: XU,
          epoch: zU
        } = this;
        let cU;
        try {
          cU = await XX(XU, UU)
        } catch (QU) {
          if (zU === this.epoch) {
            if (!DX(XU)) throw QU;
            await new Promise((UU => {
              this.rebindWaiters.push(UU)
            }))
          }
          return this.atlasArrays(UU)
        }
        if (cU.forEach(((XU, zU) => {
            this.atlasSources.has(XU) || this.atlasSources.set(XU, {
              sources: UU,
              index: zU,
              stride: cU[0].layers
            })
          })), zU !== this.epoch) return cU;
        const yU = (0, uA.d)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const AU of cU) this.atlasBindings.has(AU) || this.atlasBindings.set(AU, {
          view: AU.texture.createView({
            dimension: "2d-array"
          }),
          sampler: yU
        });
        return cU
      }
      boundTexture(UU) {
        const XU = this.atlasBindings.get(UU);
        if (XU) return XU;
        const zU = this.atlasSources.get(UU);
        if (zU) return this.rebuildAtlas(UU, zU), null;
        const cU = UU;
        if (cU.released) return null;
        const yU = this.textureSlot(cU, !0),
          {
            state: QU
          } = yU;
        if (!QU.view && (QU.wanted = !0, QU.loading || QU.failed || this.upload(cU, QU), !QU.view)) return null;
        const AU = this.chosenSampler(cU, yU),
          FU = yU.bound;
        return FU && FU.view === QU.view && FU.sampler === AU ? FU : (yU.bound = {
          view: QU.view,
          sampler: AU
        }, yU.bound)
      }
      rebuildAtlas(UU, XU) {
        let {
          sources: zU,
          index: cU,
          stride: yU
        } = XU;
        if (this.atlasRebuilds.has(UU)) return;
        this.atlasRebuilds.add(UU);
        const {
          epoch: QU
        } = this;
        this.atlasArrays(zU).then((XU => {
          XU[0].layers === yU && XU[cU] ? QU === this.epoch && this.atlasBindings.set(UU, this.atlasBindings.get(XU[cU])) : console.error(`Lite: the new device splits the atlas ${TU(zU.urls[0])} into other arrays than its materials read`)
        }), (UU => {
          console.error(`Lite: could not build the atlas ${TU(zU.urls[0])} again on a new device`, UU)
        }))
      }
      textureLoaded(UU) {
        var XU, zU;
        return null !== (XU = null === (zU = this.heldSlot(UU)) || void 0 === zU ? void 0 : zU.state.decoded) && void 0 !== XU ? XU : null
      }
      textureFailed(UU) {
        var XU;
        return !0 === (null === (XU = this.heldSlot(UU)) || void 0 === XU ? void 0 : XU.state.failed)
      }
      heldSlot(UU) {
        const XU = UU.gpu[eU.e.lite];
        return (null === XU || void 0 === XU ? void 0 : XU.epoch) === this.epoch ? XU : void 0
      }
      chosenSampler(UU, XU) {
        const {
          samplingMode: zU,
          wrapU: cU,
          wrapV: yU
        } = UU.sampler, QU = XU.state.hasMips, AU = function(UU, XU) {
          const {
            bilinear: zU,
            trilinear: cU
          } = eU.f;
          return !XU && UU !== zU || 11 !== UU && UU !== cU && UU !== zU ? 1 : 4
        }(zU, QU), FU = XU.sampler;
        if (FU && FU.samplingMode === zU && FU.hasMips === QU && FU.anisotropy === AU && FU.wrapU === cU && FU.wrapV === yU) return FU.sampler;
        const oU = this.samplerFor(zU, QU, AU, cU, yU);
        return XU.sampler = {
          samplingMode: zU,
          hasMips: QU,
          anisotropy: AU,
          wrapU: cU,
          wrapV: yU,
          sampler: oU
        }, oU
      }
      releaseTexture(UU) {
        var XU, zU;
        UU.view && (null === (zU = this.onDestroy) || void 0 === zU || zU.call(this, UU.view));
        null === (XU = UU.destroy) || void 0 === XU || XU.call(UU)
      }
      textureSlot(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = UU.gpu[eU.e.lite];
        if ((null === zU || void 0 === zU ? void 0 : zU.epoch) === this.epoch) return zU;
        const cU = function(UU) {
          let {
            source: XU,
            sampler: zU
          } = UU;
          return "canvas" === XU.kind ? null : `${XU.kind}|${TA(XU)}|${zU.noMipmap}|${zU.samplingMode}|${zU.invertY}`
        }(UU);
        let yU = null === cU ? void 0 : this.textures.get(cU);
        var QU;
        yU || (yU = {
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
          dynamicSource: null !== (QU = null === zU || void 0 === zU ? void 0 : zU.state.dynamicSource) && void 0 !== QU ? QU : null
        }, null !== cU && (this.textures.set(cU, yU), this.load(UU, yU), XU && !zU && this.firstBindDecodes++));
        yU.refs++;
        const AU = yU,
          {
            epoch: FU
          } = this,
          oU = {
            state: yU,
            bound: null,
            sampler: null,
            release: () => {
              FU === this.epoch && this.releaseSlot(AU, cU)
            },
            epoch: FU
          };
        return UU.gpu[eU.e.lite] = oU, oU
      }
      samplerFor(UU, XU, zU, cU, yU) {
        const QU = `${UU}|${XU}|${zU}|${cU}|${yU}`;
        let AU = this.samplers.get(QU);
        if (!AU) {
          const FU = {
            ...jA(UU, XU, zU),
            addressModeU: KA(cU),
            addressModeV: KA(yU)
          };
          AU = (0, uA.d)(this.engine, FU), this.samplers.set(QU, AU)
        }
        return AU
      }
      upload(UU, XU) {
        const {
          source: zU,
          sampler: cU
        } = UU;
        XU.hasMips = !cU.noMipmap, "canvas" === zU.kind ? this.createDynamic(zU, XU) : "cube" === zU.kind ? this.uploadCube(XU, zU.luminance) : this.uploadImage(XU, !0 === cU.invertY, zU.url)
      }
      uploadImage(UU, XU, zU) {
        const [cU] = UU.images;
        UU.images = null;
        const {
          epoch: yU
        } = this, QU = (0, fA.c)(this.engine, cU, {
          mipMaps: UU.hasMips,
          invertY: XU,
          srgb: !1
        }).then((XU => {
          cU.close(), 0 !== UU.refs && yU === this.epoch ? (UU.view = XU.view, UU.destroy = XU.texture.destroy.bind(XU.texture)) : XU.texture.destroy()
        }));
        this.track(UU, zU, QU)
      }
      track(UU, XU, zU, cU) {
        const {
          epoch: yU
        } = this;
        UU.loading = !0, this.pending++, zU.catch((zU => {
          yU === this.epoch && (UU.failed = !0, console.warn(`Lite: could not load texture ${TU(XU)}`, zU))
        })).finally((() => {
          yU === this.epoch && (UU.loading = !1, this.pending--, null === cU || void 0 === cU || cU())
        }))
      }
      uploadCube(UU, XU) {
        const zU = UU.images;
        UU.images = null;
        const cU = vA(this.engine, this.device, zU, (0, eU.w)(XU), UU.hasMips);
        UU.view = cU.createView({
          dimension: "cube"
        }), UU.destroy = () => {
          cU.destroy()
        }
      }
      createDynamic(UU, XU) {
        const {
          canvas: zU
        } = UU, cU = (0, iA.c)(this.engine, Math.max(1, zU.width), Math.max(1, zU.height), {
          mipMaps: XU.hasMips,
          srgb: !1
        });
        XU.dynamic = cU, XU.view = cU.view, XU.destroy = () => {
          cU.texture.destroy()
        }, this.pushDynamic(UU, XU)
      }
      pushDynamic(UU, XU) {
        const zU = XU.dynamicSource,
          cU = XU.dynamic,
          {
            canvas: yU
          } = UU;
        if (zU && cU && 0 !== yU.width && 0 !== yU.height) return yU.width !== cU.width || yU.height !== cU.height ? (this.releaseTexture(XU), XU.dynamic = null, XU.view = null, void this.createDynamic(UU, XU)) : void(0, iA.d)(this.engine, cU, yU, {
          invertY: zU.invertY,
          premultiplyAlpha: zU.premultiplied
        })
      }
    }

    function TA(UU) {
      return "cube" === UU.kind ? UU.rootUrl : "canvas" === UU.kind ? "canvas" : UU.url
    }
    const hA = new Uint8Array(4);
    var UF = zU(39566);

    function XF(UU) {
      const XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      UU._colorAttachment.storeOp = UU._targetSignature._sampleCount > 1 ? XU : "store";
      const zU = UU._renderPassDescriptor.depthStencilAttachment;
      zU && (zU.depthStoreOp = XU, zU.stencilStoreOp && (zU.stencilStoreOp = XU))
    }
    var zF = zU(38505),
      cF = zU(38567),
      yF = zU(38106),
      QF = zU(40476);
    const AF = new Float64Array([1, 1, 1]),
      FF = new Float64Array([0, 1, 0]),
      oF = new Float64Array(4),
      DF = new Float32Array(16),
      EF = new Float64Array(3),
      YF = new Float64Array(4);

    function NF(UU, XU, zU) {
      UU.fov = XU.fov, UU.near = XU.near, UU.far = XU.far, UU.renderWidth = zU.renderWidth, UU.renderHeight = zU.renderHeight, (0, yF.u)(XU.holderRotation, 0, oF, 0), (0, yF.e)(AF, 0, oF, 0, XU.holderPosition, 0, DF);
      const cU = XU.n_;
      EF[0] = cU[0], EF[1] = cU[1], EF[2] = cU[2] + 1;
      const yU = UU.viewMatrix;
      (0, yF.n)(cU, EF, FF, yU), (0, yF.k)(yU, 0, yU), (0, yF.q)(yU, DF, 0, yU), (0, yF.k)(yU, 0, yU);
      const QU = UU.worldMatrix;
      (0, yF.k)(yU, 0, QU), UU.eye[0] = QU[12], UU.eye[1] = QU[13], UU.eye[2] = QU[14], YF[0] = UU.fov, YF[1] = UU.renderWidth / UU.renderHeight, YF[2] = UU.near, YF[3] = UU.far, (0, yF.t)(YF, UU.projectionMatrix), (0, yF.q)(yU, UU.projectionMatrix, 0, UU.viewProjectionMatrix), (0, QF.g)(UU.viewProjectionMatrix, UU.frustum)
    }

    function IF(UU, XU) {
      let zU = UU.frustumPlanes;
      zU || (zU = UU.frustumPlanes = Array.from({
        length: 6
      }, (() => new zF.d(0, 0, 0, 0))));
      for (let cU = 0; cU < 6; cU++) {
        const UU = zU[cU].normal;
        UU._x = XU[4 * cU], UU._y = XU[4 * cU + 1], UU._z = XU[4 * cU + 2], UU._isDirty = !0, zU[cU].d = XU[4 * cU + 3]
      }
    }

    function pF(UU, XU) {
      const zU = XU.clearColor;
      UU.clearColour[0] = zU.r, UU.clearColour[1] = zU.g, UU.clearColour[2] = zU.b, UU.clearColour[3] = zU.a;
      const cU = XU.ambientColor;
      UU.ambientColour[0] = cU.r, UU.ambientColour[1] = cU.g, UU.ambientColour[2] = cU.b, UU.animationRatio = XU.animationRatio, UU.frameId = XU.frameId, UU.version++
    }

    function aF(UU) {
      const XU = UU.model.view;
      return XU.animTick = (0, cF.e)(), XU.timeMs = performance.now(), pF(XU, UU.sa), UU.model.update(XU.frameId), XU
    }

    function tF(UU) {
      const XU = UU.sa,
        {
          view: zU,
          v_: cU
        } = UU.model;
      return NF(zU, cU, XU.qp()), XU.onBeforeRenderObservable.notifyObservers(XU), IF(XU, zU.frustum), XU.onBeforeCameraRenderObservable.notifyObservers(XU.activeCamera), aF(UU)
    }
    var gF = zU(38065),
      kF = zU(38180),
      GF = zU(38560);

    function BF(UU) {
      var XU, zU;
      const cU = (0, dU.V)(UU);
      if (!cU || cU.diffuseTexture && (0, GF.h)(UU)) return null;
      const yU = null === (XU = (0, dU.v)(cU, PU.j.name)) || void 0 === XU ? void 0 : XU.state,
        QU = null === (zU = (0, dU.v)(cU, TQ.c.name)) || void 0 === zU ? void 0 : zU.state,
        AU = new Float32Array(16);
      return function(UU, XU, zU, cU) {
        var yU, QU;
        const AU = uc;
        cU.set(UU.diffuseColor, AU.diffuse), cU[AU.diffuse + 3] = UU.alpha, cU.set(UU.ambientColor, AU.ambientAndCutoff), cU[AU.ambientAndCutoff + 3] = UU.alphaCutOff, cU.set(UU.emissiveColor, AU.emissiveAndLevel), cU[AU.emissiveAndLevel + 3] = null !== (yU = null === (QU = UU.diffuseTexture) || void 0 === QU ? void 0 : QU.level) && void 0 !== yU ? yU : 1, null !== XU && void 0 !== XU && XU.animDataPerTex ? (cU[AU.anim + 1] = cF.b, cU[AU.anim + 2] = XU.animDataPerTex.length / 3 - 1) : zU && (cU[AU.anim + 1] = zU.numAnimStates, cU[AU.anim + 2] = zU.ticksPerAnimState)
      }(cU, yU, QU, AU), {
        model: cU,
        atlas: yU,
        texture: yU ? "atlas" : cU.diffuseTexture ? "single" : "none",
        animated: yU ? !!yU.animDataPerTex : !!QU,
        liquid: (0, GF.k)(UU),
        customRenderMat: (0, GF.h)(UU),
        uniformData: AU
      }
    }
    var ZF = zU(3163);
    class RF {
      constructor(UU) {
        this.units = UU, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var UU;
        this.buffer.destroy(), null === (UU = this.twin) || void 0 === UU || UU.destroy()
      }
    }
    class PF {
      constructor(UU, XU) {
        this.arena = UU, this.Qt = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.Qt = new nA(XU);
        const zU = new RF(XU);
        zU.buffer = this.createBuffer(zU, !1), this.backings.push(zU), this.refresh()
      }
      get xY() {
        return this.Qt.xY
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
        let UU = 0;
        for (const XU of this.backings) UU += XU.units * (this.arena.unitBytes + (XU.twin ? this.arena.twinUnitBytes : 0));
        return UU
      }
      holds(UU) {
        return UU.start + UU.length <= this.usable
      }
      lost(UU) {
        return this.dropped || UU.start + UU.length > this.xY
      }
      write(UU, XU) {
        const {
          device: zU,
          unitBytes: cU
        } = this.arena;
        for (const yU of this.backings) {
          const QU = (yU.units - UU.start) * cU;
          QU > 0 && zU.queue.writeBuffer(yU.buffer, UU.start * cU, XU, 0, Math.min(XU.byteLength, QU))
        }
      }
      writeLight(UU, XU) {
        const {
          device: zU,
          twinUnitBytes: cU,
          verticesPerUnit: yU
        } = this.arena, {
          light: QU,
          count: AU
        } = this.arena.twinLight(XU, Math.min(XU.length, UU.length * yU));
        for (const FU of this.backings) {
          FU.twin || (FU.twin = this.createBuffer(FU, !0));
          const XU = (FU.units - UU.start) * yU;
          XU > 0 && zU.queue.writeBuffer(FU.twin, UU.start * cU, QU, 0, Math.min(AU, XU))
        }
      }
      grow(UU) {
        this.arena.assertNotDrawing();
        const {
          device: XU,
          unitBytes: zU,
          label: cU
        } = this.arena, yU = this.backings[this.backings.length - 1], QU = new RF(UU), AU = XU.createCommandEncoder({
          label: `${cU}-grow`
        });
        QU.buffer = this.createBuffer(QU, !1), AU.copyBufferToBuffer(yU.buffer, 0, QU.buffer, 0, yU.units * zU), yU.twin && (QU.twin = this.createBuffer(QU, !0), AU.copyBufferToBuffer(yU.twin, 0, QU.twin, 0, yU.units * this.arena.twinUnitBytes)), XU.queue.submit([AU.finish()]), this.backings.push(QU), this.Qt.grow(UU)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const UU of this.backings) UU.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(UU, XU) {
        const {
          device: zU,
          unitBytes: cU,
          twinUnitBytes: yU,
          usage: QU,
          label: AU
        } = this.arena;
        zU.pushErrorScope("out-of-memory");
        const FU = zU.createBuffer({
          label: XU ? `${AU}-light` : AU,
          size: UU.units * (XU ? yU : cU),
          usage: (XU ? this.arena.twinUsage : QU) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, zU.popErrorScope().then((zU => {
          this.arena.awaitingVerdict--, this.settle(UU, XU, !zU, !0)
        }), (zU => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${AU} buffer, taken as failed: ${String(zU)}`), this.settle(UU, XU, !1, !1)
        })), FU
      }
      settle(UU, XU, zU, cU) {
        const yU = this.backings.indexOf(UU);
        if (!(this.dropped || yU < 0)) {
          if (!zU) {
            if (cU && this.arena.ranOutOfMemory(UU.units, UU.units * (XU ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === yU) return void this.drop();
            for (const UU of this.backings.splice(yU)) UU.destroy();
            return this.Qt.truncate(this.backings[yU - 1].units), this.growable = !1, void this.promote()
          }
          XU ? UU.twinReady = !0 : (UU.bufferReady = !0, this.arena.allocatedBuffer(UU.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: UU
        } = this;
        let XU = 0;
        for (; XU + 1 < UU.length && UU[XU].ready && UU[XU + 1].ready;) XU++;
        for (const zU of UU.splice(0, XU)) zU.destroy();
        this.refresh()
      }
      refresh() {
        const UU = this.backings[0];
        this.buffer = UU.buffer, this.twin = UU.twinReady ? UU.twin : null, this.usable = !this.dropped && UU.bufferReady ? UU.units : 0
      }
    }
    class WF {
      constructor(UU, XU, zU, cU) {
        let {
          verticesPerUnit: yU = 1,
          twinUsage: QU = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = UU, this.unitBytes = XU, this.usage = zU, this.label = cU, this.pages = [], this.BY = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, OX.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), XU % 4 !== 0) throw new Error(`${cU}: ${XU}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = yU, this.twinUsage = QU, this.twinValueBytes = yU > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * yU
      }
      twinLight(UU, XU) {
        if (4 === this.twinValueBytes) return this.widened.length < XU && (this.widened = new Float32Array(Math.max(XU, 2 * this.widened.length))), this.widened.set(UU.subarray(0, XU)), {
          light: this.widened,
          count: XU
        };
        const zU = XU % this.verticesPerUnit;
        if (0 === zU) return {
          light: UU,
          count: XU
        };
        const cU = XU - zU + this.verticesPerUnit;
        return this.padded.length < cU && (this.padded = new Uint16Array(Math.max(cU, 2 * this.padded.length))), this.padded.set(UU.subarray(0, XU)), this.padded.fill(0, XU, cU), {
          light: this.padded,
          count: cU
        }
      }
      allocate(UU) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), UU > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const yU of this.pages) {
          const XU = yU.Qt.allocate(UU);
          if (XU >= 0) return {
            page: yU,
            start: XU,
            length: UU
          }
        }
        const XU = this.pages[this.pages.length - 1];
        if (null !== XU && void 0 !== XU && XU.canGrow) {
          const zU = Math.min(this.ceiling, Math.max(2 * XU.xY, XU.xY + UU));
          if (zU - XU.xY >= UU) return XU.grow(zU), {
            page: XU,
            start: XU.Qt.allocate(UU),
            length: UU
          }
        }
        XU && XU !== this.pages[0] && 0 === XU.Qt.used && XU.drop();
        const zU = Math.floor(1048576 / this.unitBytes),
          cU = new PF(this, Math.max(UU, Math.min(this.ceiling, zU)));
        return this.pages.push(cU), {
          page: cU,
          start: cU.Qt.allocate(UU),
          length: UU
        }
      }
      free(UU) {
        this.assertNotDrawing();
        const {
          page: XU
        } = UU;
        XU.Qt.free(UU.start, UU.length), 0 === XU.Qt.used && XU !== this.pages[0] && XU !== this.pages[this.pages.length - 1] && XU.drop()
      }
      retire() {
        for (const UU of this.pages) UU.retire()
      }
      remove(UU) {
        const XU = this.pages.indexOf(UU);
        XU >= 0 && this.pages.splice(XU, 1)
      }
      ranOutOfMemory(UU, XU) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${XU}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, UU), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, UU) / 2));
        const zU = performance.now();
        zU >= this.shortageUntil && (this.forgetFailedAt = zU + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = zU + 1e3)
      }
      allocatedBuffer(UU) {
        UU >= this.failed && (this.failed = 1 / 0);
        const XU = Math.min(2 * UU, Math.floor((UU + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, XU))
      }
      stats() {
        let UU = 0,
          XU = 0,
          zU = 0,
          cU = 0;
        for (const yU of this.pages) UU += yU.xY, XU += yU.Qt.used, zU += yU.hasTwin ? yU.xY * this.twinUnitBytes : 0, cU += yU.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: UU * this.unitBytes,
          usedBytes: XU * this.unitBytes,
          twinBytes: zU,
          allocatedBytes: cU
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: UU,
          maxStorageBufferBindingSize: XU
        } = this.device.limits;
        let zU = Math.floor(Math.min(67108864, UU) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (zU = Math.min(zU, Math.floor(XU / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (zU = Math.min(zU, Math.floor(XU / this.twinUnitBytes))), zU
      }
    }
    const dF = 16383;

    function LF(UU, XU, zU, cU, yU) {
      let QU = 0;
      for (let AU = zU; AU < cU; AU += dF) UU.drawIndexed(6 * Math.min(dF, cU - AU), 1, 0, XU + 4 * AU, yU), QU++;
      return QU
    }
    class eF {
      constructor(UU, XU) {
        this.recordsGroup = XU, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const zU = JX.f.strideWithoutAtlas;
        this.vertexArena = new WF(UU, zU, GPUBufferUsage.VERTEX, `terrain-vertices-${zU}`), this.quadArena = new WF(UU, kF.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const cU = (0, jX.e)(new Uint16Array(98298), dF);
        this.quadPattern = UU.createBuffer({
          label: "terrain-quad-pattern",
          size: cU.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), UU.queue.writeBuffer(this.quadPattern, 0, cU)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(UU, XU) {
        const zU = XU.packedVertices,
          cU = zU ? this.quadArena.allocate(UU.faceCount) : this.vertexArena.allocate(UU.vertexCount);
        if (!cU) return !1;
        UU.vertices = cU;
        const yU = zU ? new Uint8Array(zU.buffer, zU.byteOffset, zU.byteLength) : new Uint8Array(XU.vertices);
        return cU.page.write(cU, yU), !0
      }
      setLight(UU, XU) {
        const {
          vertices: zU
        } = UU;
        zU && 0 !== XU.length && zU.page.live && (XU.length < UU.vertexCount ? zU.page.arena.warnOnce("shortLight", `a part's ${XU.length} light values are fewer than its ${UU.vertexCount} vertices, so its light is left as it was`) : (zU.page.writeLight(zU, XU), UU.lit = !0))
      }
      lightFullSky(UU, XU) {
        this.fullSky.length < XU && (this.fullSky = new Uint16Array(Math.max(XU, 4096)).fill(ZF.e));
        for (const zU of UU) {
          const UU = zU.vertices;
          UU.page.live && (UU.page.writeLight(UU, this.fullSky), zU.lit = !0)
        }
      }
      backed(UU) {
        const {
          vertices: XU
        } = UU;
        return !!XU && XU.page.holds(XU)
      }
      lost(UU) {
        const {
          vertices: XU
        } = UU;
        return !!XU && XU.page.lost(XU)
      }
      release(UU) {
        UU.vertices && UU.vertices.page.arena.free(UU.vertices), UU.vertices = null, UU.lit = !1
      }
      setDrawing(UU) {
        this.forgetBound()
      }
      draw(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : XU.faceCount;
        const QU = XU.vertices,
          AU = QU.page,
          FU = zU ? AU.twin : null;
        if (!AU.holds(QU) || zU && !FU) return 0;
        const {
          verticesPerUnit: oU
        } = AU.arena;
        let DU = QU.start * oU;
        this.boundPattern || (UU.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const EU = cU + yU;
        if (oU > 1) return AU.buffer === this.boundRecords && FU === this.boundRecordsLight || (UU.setBindGroup(1, this.recordsGroup(AU.buffer, FU)), this.boundRecords = AU.buffer, this.boundRecordsLight = FU), LF(UU, DU, cU, EU, XU.slot);
        AU.buffer !== this.boundVertices && (UU.setVertexBuffer(0, AU.buffer), this.boundVertices = AU.buffer), FU && FU !== this.boundLight && (UU.setVertexBuffer(1, FU), this.boundLight = FU);
        const YU = XU.faceCount;
        return EU <= YU ? LF(UU, DU, cU, EU, XU.slot) : LF(UU, DU, cU, YU, XU.slot) + LF(UU, DU, Math.max(cU, YU) - YU, EU - YU, XU.slot)
      }
      get buffersAwaitingVerdict() {
        let UU = 0;
        for (const XU of this.arenas()) UU += XU.awaitingVerdict;
        return UU
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class CF {
      constructor(UU, XU, zU, cU) {
        this.device = UU, this.splitBefore = XU, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = UU.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const yU = UU.createShaderModule({
          label: "scene-depth-copy",
          code: (QU = zU._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${QU?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var QU;
        UU.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: yU,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: yU,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((UU => {
          this.pipeline = UU, this.building = !1
        }), (UU => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", UU)
        })), zU._executeWithTransmission = () => this.execute(zU, cU)
      }
      get compiling() {
        return this.building
      }
      setWanted(UU) {
        this.wanted = UU
      }
      setPlanes(UU, XU) {
        UU === this.near && XU === this.far || (this.near = UU, this.far = XU, this.unproject[0] = UU / (XU - UU), this.unproject[1] = XU * UU / (XU - UU), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var UU, XU;
        return null !== (UU = null === (XU = this.copy) || void 0 === XU ? void 0 : XU.view) && void 0 !== UU ? UU : null
      }
      execute(UU, XU) {
        var zU;
        null === (zU = this.retired) || void 0 === zU || zU.destroy(), this.retired = null;
        const cU = RX(XU),
          yU = UU._transparentBindings,
          QU = this.wanted && this.pipeline ? this.splitIndex(yU) : -1,
          AU = UU._colorAttachment,
          FU = AU.resolveTarget;
        QU >= 0 && (AU.resolveTarget = void 0, XF(UU, !0));
        let oU = cU.beginRenderPass(UU._renderPassDescriptor);
        oU.setBindGroup(0, UU._sceneBG);
        let DU = this.drawList(oU, XU, UU._opaqueBindings, 0, UU._opaqueBindings.length);
        if (DU += this.drawList(oU, XU, UU._directBindings, 0, UU._directBindings.length), DU += this.drawList(oU, XU, yU, 0, QU >= 0 ? QU : yU.length), oU.end(), QU < 0) return DU;
        XF(UU);
        const EU = UU._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: YU,
            stencilLoadOp: NU
          } = EU,
          IU = AU.loadOp;
        AU.resolveTarget = FU;
        try {
          this.copyDepth(cU, UU), AU.loadOp = "load", EU.depthLoadOp = "load", NU && (EU.stencilLoadOp = "load"), oU = cU.beginRenderPass(UU._renderPassDescriptor), oU.setBindGroup(0, UU._sceneBG), DU += this.drawList(oU, XU, yU, QU, yU.length), oU.end()
        } finally {
          AU.loadOp = IU, EU.depthLoadOp = YU, EU.stencilLoadOp = NU
        }
        return DU
      }
      splitIndex(UU) {
        for (let XU = 0; XU < UU.length; XU++)
          if (UU[XU].renderable === this.splitBefore) return XU;
        return -1
      }
      drawList(UU, XU, zU, cU, yU) {
        let QU = null,
          AU = 0;
        for (let FU = cU; FU < yU; FU++) {
          const cU = zU[FU],
            yU = cU.renderable.mesh;
          yU && !1 === yU.visible || (cU.pipeline !== QU && (UU.setPipeline(cU.pipeline), QU = cU.pipeline), AU += cU.draw(UU, XU))
        }
        return AU
      }
      copyDepth(UU, XU) {
        var zU, cU;
        const yU = (null !== (zU = XU._config.depth) && void 0 !== zU ? zU : XU._config.rt)._depthTexture,
          QU = (null === (cU = this.copy) || void 0 === cU ? void 0 : cU.source) === yU ? this.copy : this.remakeCopy(yU),
          AU = UU.beginRenderPass(QU.pass);
        AU.setPipeline(this.pipeline), AU.setBindGroup(0, QU.bindGroup), AU.draw(3), AU.end()
      }
      remakeCopy(UU) {
        var XU, zU;
        this.retired = null !== (XU = null === (zU = this.copy) || void 0 === zU ? void 0 : zU.texture) && void 0 !== XU ? XU : null;
        const cU = this.device.createTexture({
            label: "scene-depth",
            size: [UU.width, UU.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          yU = cU.createView(),
          QU = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: UU.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          AU = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: yU,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: UU,
          texture: cU,
          view: yU,
          bindGroup: QU,
          pass: AU
        }, this.copy
      }
    }
    const wF = "rgba8unorm";

    function qF(UU) {
      return UU ? 15 : 1
    }
    class OF {
      constructor(UU, XU, zU, cU) {
        this.device = UU, this.terrain = cU, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = XU._targetSignature._sampleCount > 1, this.cameraBuffer = UU.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = UU.createBindGroupLayout({
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
        const yU = UU.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = UU.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: yU,
          entries: []
        });
        const QU = UU.createShaderModule({
          label: "sun-shadow-mask",
          code: (AU = this.edge, `${(0,KX.E)()}${Fc({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${AU?Kz:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${qF(AU)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${AU?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var AU;
        UU.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: UU.createPipelineLayout({
            bindGroupLayouts: [this.layout, yU, yU, nQ(UU, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: QU,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: QU,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((UU => {
          this.pipeline = UU, this.building = !1
        }), (UU => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", UU)
        }));
        const FU = XU._executeWithTransmission;
        XU._executeWithTransmission = UU => this.execute(XU, zU, (() => FU ? FU(UU) : function(UU, XU) {
          const zU = RX(XU).beginRenderPass(UU._renderPassDescriptor);
          zU.setBindGroup(0, UU._sceneBG);
          let cU = SF(zU, XU, UU._opaqueBindings);
          return cU += SF(zU, XU, UU._directBindings), cU += SF(zU, XU, UU._transparentBindings), zU.end(), cU
        }(XU, zU)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var UU, XU;
        return null !== (UU = null === (XU = this.targets) || void 0 === XU ? void 0 : XU.maskView) && void 0 !== UU ? UU : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(UU) {
        ! function(UU, XU) {
          const zU = UU.worldMatrix,
            cU = UU.projectionMatrix,
            yU = 1 / cU[0],
            QU = 1 / cU[5],
            AU = UU.far * UU.near / (UU.far - UU.near);
          XU[0] = UU.eye[0], XU[1] = UU.eye[1], XU[2] = UU.eye[2], XU[3] = 2 ** -23 / AU, XU[4] = zU[0] * yU, XU[5] = zU[1] * yU, XU[6] = zU[2] * yU, XU[7] = AU, XU[8] = zU[4] * QU, XU[9] = zU[5] * QU, XU[10] = zU[6] * QU, XU[11] = UU.near / (UU.far - UU.near), XU[12] = zU[8], XU[13] = zU[9], XU[14] = zU[10], XU[15] = 0
        }(UU, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(UU, XU, zU) {
        if (this.retire(), !this.terrain.readsMask) return zU();
        const cU = this.targetsFor(UU),
          yU = RX(XU),
          QU = UU._renderPassDescriptor.depthStencilAttachment;
        this.edge || (cU.prepass.depthStencilAttachment.view = QU.view);
        const AU = this.terrain.drawPrepass(yU, cU.prepass, UU._sceneBG);
        if (0 === AU) return zU();
        if (this.trace(yU, cU), this.edge) return AU + 1 + zU();
        const {
          depthLoadOp: FU,
          stencilLoadOp: oU
        } = QU;
        QU.depthLoadOp = "load", oU && (QU.stencilLoadOp = "load");
        try {
          return AU + 1 + zU()
        } finally {
          QU.depthLoadOp = FU, QU.stencilLoadOp = oU
        }
      }
      trace(UU, XU) {
        const zU = this.terrain.sunShadowGroup(),
          cU = UU.beginRenderPass(XU.trace);
        this.pipeline && zU && (cU.setPipeline(this.pipeline), cU.setBindGroup(0, XU.bindGroup), cU.setBindGroup(1, this.empty), cU.setBindGroup(2, this.empty), cU.setBindGroup(3, zU), cU.draw(3)), cU.end()
      }
      retire() {
        const UU = this.retired;
        var XU;
        UU && (UU.mask.destroy(), UU.normals.destroy(), null === (XU = UU.depth) || void 0 === XU || XU.destroy(), this.retired = null)
      }
      targetsFor(UU) {
        var XU, zU;
        const cU = (null !== (XU = UU._config.depth) && void 0 !== XU ? XU : UU._config.rt)._depthTexture;
        return (null === (zU = this.targets) || void 0 === zU ? void 0 : zU.source) === cU ? this.targets : this.remake(UU, cU)
      }
      remake(UU, XU) {
        var zU;
        this.retired = this.targets;
        const cU = [XU.width, XU.height],
          yU = this.device.createTexture({
            label: "sun-shadow-mask",
            size: cU,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          QU = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: cU,
            format: wF,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          AU = null !== (zU = UU._targetSignature._depthStencilFormat) && void 0 !== zU ? zU : XU.format,
          FU = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: cU,
            format: AU,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          oU = UU._renderPassDescriptor.depthStencilAttachment,
          DU = AU.includes("stencil"),
          EU = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: QU.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: FU ? FU.createView() : oU.view,
              depthClearValue: oU.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...DU ? {
                stencilClearValue: oU.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          YU = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== FU && void 0 !== FU ? FU : XU).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: QU.createView()
            }]
          }),
          NU = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: yU.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [qF(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: XU,
          mask: yU,
          maskView: yU.createView(),
          normals: QU,
          depth: FU,
          bindGroup: YU,
          prepass: EU,
          trace: NU
        }, this.targets
      }
    }

    function SF(UU, XU, zU) {
      let cU = null,
        yU = 0;
      for (const QU of zU) {
        const zU = QU.renderable.mesh;
        zU && !1 === zU.visible || (QU.pipeline !== cU && (UU.setPipeline(QU.pipeline), cU = QU.pipeline), yU += QU.draw(UU, XU))
      }
      return yU
    }
    const rF = 6e4,
      uF = {
        status: "ok"
      },
      fF = {
        status: "skipped"
      };
    async function iF(UU, XU) {
      const {
        isCancelled: zU
      } = UU;
      if (zU()) return {
        status: "QU"
      };
      const {
        target: cU
      } = XU;
      if (!cU) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const yU = [],
        QU = Promise.all(Array.from(new Set(UU.materials), (async zU => {
          yU.push(await async function(UU, XU, zU, cU) {
            const yU = {
              lighting: UU.lighting,
              dirLightCount: Math.min(UU.dirLightCount, 4),
              Fp: UU.runtime
            };
            try {
              const QU = XU.material(cU);
              return QU && Oc(XU.programKey(QU, !1, yU)) ? (await QU.ready, UU.isCancelled() ? uF : QU.bindGroupLayout ? await async function(UU, XU, zU, cU) {
                const {
                  device: yU
                } = UU;
                let QU, AU;
                yU.pushErrorScope("validation");
                try {
                  QU = UU.pipelineBuild(XU, zU, cU)
                } finally {
                  AU = yU.popErrorScope().catch((() => null))
                }
                const [FU, oU] = await Promise.all([AU, QU.built.then((() => null), (UU => null !== UU && void 0 !== UU ? UU : new Error("pipeline failed")))]);
                if (!FU && !oU) return uF;
                const DU = await HF(QU.module),
                  EU = DU.length > 0 ? DU.map((UU => `${QU.name} ${UU.lineNum}:${UU.linePos}: ${UU.message}`)).join("\n") : `${QU.name}: ${MF(null!==oU&&void 0!==oU?oU:FU)}`;
                return {
                  status: "failed",
                  material: XU.model.name,
                  message: EU
                }
              }(XU, QU, XU.programKey(QU, "none" !== QU.texture, yU), zU): (console.warn(`Shader pack: skipped the compile check for "${cU.name}", whose textures failed to load`), fF)) : uF
            } catch (QU) {
              return {
                status: "failed",
                material: cU.name,
                message: MF(QU)
              }
            }
          }(UU, XU, cU, zU))
        }))),
        AU = function(UU, XU) {
          let zU, cU, yU = !1;
          const QU = new Promise((QU => {
            var AU;
            zU = setTimeout((() => {
              QU("timeout")
            }), null !== (AU = XU.timeoutMs) && void 0 !== AU ? AU : rF), cU = setInterval((() => {
              XU.isCancelled() && QU("QU")
            }), 50), UU.lost.then((() => {
              yU = !0, QU("lost")
            }))
          }));
          return {
            signal: QU,
            lost: () => yU,
            dispose: () => {
              clearTimeout(zU), clearInterval(cU)
            }
          }
        }(XU.device, UU);
      let FU;
      try {
        FU = await Promise.race([QU.then((() => "done")), AU.signal])
      } finally {
        AU.dispose()
      }
      if ("QU" === FU || zU()) return {
        status: "QU"
      };
      const oU = yU.find((UU => "failed" === UU.status));
      return oU && "lost" !== FU && !AU.lost() && await new Promise((UU => {
        setTimeout(UU, 0)
      })), "lost" === FU || AU.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : oU ? {
        status: "failed",
        failure: {
          material: oU.material,
          message: oU.message
        }
      } : "timeout" === FU ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(DU=UU.timeoutMs)&&void 0!==DU?DU:rF)/1e3} s`), {
        status: "skipped"
      }) : yU.some((UU => "skipped" === UU.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var DU
    }
    async function HF(UU) {
      if (!UU) return [];
      try {
        return (await UU.getCompilationInfo()).messages.filter((UU => "error" === UU.type))
      } catch {
        return []
      }
    }

    function MF(UU) {
      var XU;
      return null !== (XU = null === UU || void 0 === UU ? void 0 : UU.message) && void 0 !== XU ? XU : String(UU)
    }

    function vF(UU, XU, zU, cU, yU) {
      Oc(XU) ? HF(cU).then((XU => {
        const [cU] = XU;
        EX(UU, "terrain", zU, yU, cU ? `${cU.lineNum}:${cU.linePos} error: ${cU.message}` : null)
      })) : EX(UU, "terrain", zU, yU)
    }
    var VF = zU(38185),
      sF = zU(38202),
      nF = zU(38214),
      mF = zU(3150);

    function lF(UU, XU, zU, cU, yU) {
      const QU = Math.hypot(zU[0], zU[1], zU[2]);
      if (!(QU > 0)) return;
      const AU = [zU[0] / QU, zU[1] / QU, zU[2] / QU],
        FU = [Math.floor(XU[0]), Math.floor(XU[1]), Math.floor(XU[2])],
        oU = [0, 0, 0],
        DU = [1 / 0, 1 / 0, 1 / 0],
        EU = [1 / 0, 1 / 0, 1 / 0];
      for (let IU = 0; IU < 3; IU++) AU[IU] > 0 ? (oU[IU] = 1, DU[IU] = (FU[IU] + 1 - XU[IU]) / AU[IU], EU[IU] = 1 / AU[IU]) : AU[IU] < 0 && (oU[IU] = -1, DU[IU] = (FU[IU] - XU[IU]) / AU[IU], EU[IU] = -1 / AU[IU]);
      const {
        aY: YU
      } = UU;
      let NU = UU.VJ(FU[0], FU[1], FU[2]);
      for (;;) {
        const XU = DU[0] < DU[1] ? DU[0] < DU[2] ? 0 : 2 : DU[1] < DU[2] ? 1 : 2;
        if (DU[XU] > cU) return;
        const zU = oU[XU] > 0 ? FU[XU] + 1 : FU[XU];
        FU[XU] += oU[XU], DU[XU] += EU[XU];
        const QU = UU.VJ(FU[0], FU[1], FU[2]),
          AU = QU !== NU && !(UU.opaque[NU] && UU.opaque[QU]);
        if (AU) {
          const cU = [FU[0], FU[1], FU[2]];
          cU[XU] = zU;
          const QU = Math.floor(cU[0] / YU),
            AU = Math.floor(cU[1] / YU),
            oU = Math.floor(cU[2] / YU);
          !UU.isDrawn(QU, AU, oU) && UU.hasParts(QU, AU, oU) && yU.add(`${QU},${AU},${oU}`)
        }
        if (AU && UU.occluders[QU]) return;
        NU = QU
      }
    }

    function xF(UU, XU) {
      return UU.group - XU.group || UU.nearest - XU.nearest
    }
    class JF {
      constructor(UU, XU) {
        this.device = UU, this.QG = XU, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var UU;
        const XU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.next++;
        if (8 * XU >= this.data.length) {
          const UU = new Float32Array(2 * this.data.length);
          UU.set(this.data), this.data = UU, this.words = new Uint32Array(UU.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.QG()
        }
        return XU
      }
      release(UU) {
        this.free.push(UU)
      }
      set(UU, XU, zU, cU, yU) {
        const QU = 8 * UU + sc;
        this.data[QU] = XU, this.data[QU + 1] = zU, this.data[QU + 2] = cU, this.setVisibility(UU, yU)
      }
      setVisibility(UU, XU) {
        this.data[8 * UU + nc] = XU, this.markDirty(UU, UU)
      }
      setFaces(UU, XU, zU) {
        const cU = 8 * UU;
        this.words[cU + mc] = XU, this.words[cU + lc] = zU, this.markDirty(UU, UU)
      }
      markDirty(UU, XU) {
        this.dirtyMin = Math.min(this.dirtyMin, UU), this.dirtyMax = Math.max(this.dirtyMax, XU)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const jF = Vc,
      KF = !0;
    const bF = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: jF.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      TF = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class hF {
      constructor(UU) {
        this.device = UU, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(rc), this.dirLightUniforms = this.frameUniforms.subarray(Sc.dirLights, Sc.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, OX.e)(), this.faceGroups = !0, this.visibilityGraph = KF, this.visCull = KF, this.visCheck = !1, this.visCullMinDistance = nF.g, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new co, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Fp = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new eF(UU, ((UU, XU) => this.recordsGroup(UU, XU))), this.slots = new JF(UU, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = PX(UU), this.frameLayout = UU.createBindGroupLayout({
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
        }), this.frameBuffer = UU.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = UU.createSampler({
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
          bind: (UU, XU) => this.createBinding(this.opaqueRenderable, XU, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (UU, XU) => this.createBinding(this.transparentRenderable, XU, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(UU, XU) {
        this.sceneDepth = new CF(this.device, this.transparentRenderable, UU, XU)
      }
      createFrameBindGroup() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== UU && void 0 !== UU ? UU : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== XU && void 0 !== XU ? XU : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(UU, XU) {
        const zU = null !== XU && void 0 !== XU ? XU : UU;
        let cU = this.recordsGroups.get(zU);
        return cU || (cU = this.createFrameBindGroup(UU, XU), this.recordsGroups.set(zU, cU)), cU
      }
      setChunkMesh(UU, XU, zU) {
        var cU;
        let yU = this.chunks.get(UU);
        yU ? this.geometry.release(yU) : (yU = {
          mesh: UU,
          slot: this.slots.allocate(),
          origin: [zU[0], zU[1], zU[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: UU.visibility,
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
        }, this.chunks.set(UU, yU), this.writeSlot(yU)), yU.material = UU.material ? this.materialFor(UU.material) : null, yU.packed = !!XU.packedVertices, yU.vertexCount = (0, kF.h)(XU), yU.faceCount = yU.vertexCount / 4;
        const QU = null !== (cU = XU.faceGroups) && void 0 !== cU ? cU : null;
        if (yU.faceGroups = QU, QU) {
          const UU = VF.i;
          yU.planePX = QU[UU], yU.planeNX = QU[UU + 1], yU.planePY = QU[UU + 2], yU.planeNY = QU[UU + 3], yU.planePZ = QU[UU + 4], yU.planeNZ = QU[UU + 5]
        }
        this.drawWhole(yU), 0 !== yU.faceCount && (this.geometry.set(yU, XU) ? (yU.packed && this.slots.setFaces(yU.slot, yU.vertices.start + yU.faceCount, yU.faceCount), XU.Yp && this.setChunkMeshLight(UU, XU.Yp)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${yU.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(UU, XU) {
        const zU = this.chunks.get(UU);
        zU && this.geometry.setLight(zU, XU)
      }
      drawStats() {
        let UU = this.transparent.length;
        for (const XU of this.opaqueBatches) UU += XU.meshes.length;
        return {
          drawn: UU,
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
      removeChunkMesh(UU) {
        const XU = this.chunks.get(UU);
        XU && (this.geometry.release(XU), this.slots.release(XU.slot), this.chunks.delete(UU))
      }
      remeshLost(UU, XU) {
        this.geometry.release(XU), XU.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** XU.lostRemeshes++);
        const zU = UU.qY,
          [cU, yU, QU] = zU.mcU(XU.origin[0], XU.origin[1], XU.origin[2]),
          AU = zU.Ga.Ba(cU, yU, QU);
        AU && (AU.ga = !0, AU.Ra = !0, zU.ka(AU, !1))
      }
      chooseFaceRanges(UU, XU, zU) {
        const cU = this.faceRanges;
        UU.faceMask = zU, UU.rangeCount = (0, sF.p)(XU, zU, cU), UU.first0 = cU[0], UU.count0 = cU[1], UU.first1 = cU[2], UU.count1 = cU[3]
      }
      drawWhole(UU) {
        UU.faceMask = -1, UU.faceEpoch = -1, UU.rangeCount = 1, UU.first0 = 0, UU.count0 = UU.faceCount
      }
      writeSlot(UU) {
        const [XU, zU, cU] = this.originOffset;
        this.slots.set(UU.slot, UU.origin[0] - XU, UU.origin[1] - zU, UU.origin[2] - cU, UU.visibility)
      }
      materialFor(UU) {
        const XU = this.materials.get(UU);
        if (XU) return XU;
        const zU = BF(UU);
        if (!zU) return this.warnOnce(`material:${UU.name}`, `Lite terrain cannot draw material "${UU.name}"; its chunks are skipped.`), null;
        const {
          model: cU,
          atlas: yU,
          texture: QU,
          animated: AU,
          uniformData: FU
        } = zU, oU = {
          id: this.materials.size,
          model: cU,
          texture: QU,
          animated: AU,
          uniformData: FU,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${UU.name}`,
            size: FU.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: zU.liquid,
          customRenderMat: zU.customRenderMat,
          atlasCount: 0,
          Y5: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(UU, oU), this.device.queue.writeBuffer(oU.uniformBuffer, 0, FU), oU.ready = this.createMaterialBindGroup(oU, yU).catch((XU => {
          console.error(`Lite terrain failed to load the textures of material "${UU.name}"`, XU)
        })), oU
      }
      materialLayout(UU) {
        const XU = function(UU) {
            const XU = ["uniforms"];
            if ("atlas" === UU.texture) {
              UU.animated && XU.push("animData"), XU.push("sampler");
              for (let zU = 0; zU < UU.atlasCount; zU++) XU.push("textureArray")
            } else "single" === UU.texture && XU.push("sampler", "texture");
            return XU
          }(UU),
          zU = XU.join(",");
        let cU = this.materialLayouts.get(zU);
        if (!cU) {
          const UU = GPUShaderStage.FRAGMENT;
          cU = this.device.createBindGroupLayout({
            label: `terrain-material-${zU}`,
            entries: XU.map(((XU, zU) => {
              switch (XU) {
                case "uniforms":
                  return {
                    binding: zU, visibility: GPUShaderStage.VERTEX | UU, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: zU, visibility: GPUShaderStage.VERTEX | UU, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: zU, visibility: UU, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: zU, visibility: UU, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: zU, visibility: UU, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(zU, cU)
        }
        return cU
      }
      async createMaterialBindGroup(UU, XU) {
        const zU = [{
          buffer: UU.uniformBuffer
        }];
        if (XU) {
          const cU = await XX(this.device, XU.sources);
          UU.atlasCount = cU.length, UU.Y5 = cU[0].layerWidth, UU.atlasLayers = cU[0].layers, XU.animDataPerTex && zU.push({
            buffer: JU(this.device, Float32Array.from(XU.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), zU.push(this.sampler);
          for (const UU of cU) zU.push(UU.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === UU.texture) {
          const {
            url: XU
          } = UU.model.diffuseTexture.source, {
            pixels: cU,
            width: yU,
            height: QU
          } = await UX(XU);
          zU.push(this.sampler), zU.push(KU(this.device, cU, yU, QU, 1, `terrain-${XU}`).createView({
            dimension: "2d"
          }))
        }
        const cU = this.materialLayout(this.programKey(UU, !1));
        UU.bindGroupLayout = cU, UU.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${UU.model.name}`,
          layout: cU,
          entries: zU.map(((UU, XU) => ({
            binding: XU,
            resource: UU
          })))
        })
      }
      programKey(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const cU = zU ? zU.lighting : this.lighting,
          yU = zU ? zU.Fp : this.Fp,
          QU = {
            texture: UU.texture,
            atlasCount: UU.atlasCount,
            Y5: UU.Y5,
            atlasLayers: UU.atlasLayers,
            animated: UU.animated,
            alphaTest: UU.model.transparencyMode === dU.n.alphaTest,
            lighting: cU,
            dirLightCount: zU ? zU.dirLightCount : this.dirLightCount,
            packed: XU
          };
        if (!yU) return QU;
        const AU = this.shaderPackFields(UU, yU),
          FU = "atlas" === UU.texture && UU.model.transparencyMode === dU.n.opaque && ec(AU.packVariant);
        return {
          ...QU,
          ...AU,
          alphaTest: QU.alphaTest || FU
        }
      }
      shaderPackFields(UU, XU) {
        const zU = this.packVariant(UU, XU);
        return void 0 === zU ? dc : {
          packVariant: zU,
          liquid: UU.liquid
        }
      }
      packVariant(UU, XU) {
        return UU.customRenderMat ? void 0 : function(UU, XU) {
          const zU = UU ? UU.defineFor(XU ? "liquid" : "terrain") : 0;
          return 0 === zU ? void 0 : zU
        }(XU, UU.liquid)
      }
      isBlended(UU) {
        return UU.model.transparencyMode === dU.n.alphaBlend
      }
      shaderModule(UU, XU) {
        let zU = this.modules.get(UU);
        return zU || (zU = this.device.createShaderModule({
          label: XU,
          code: UU
        }), this.modules.set(UU, zU)), zU
      }
      pipelineFor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!UU.bindGroupLayout) return null;
        if (!cU) return this.pipelineOf(UU, XU, zU);
        const yU = this.pipelineIdNow(UU, XU, !0, zU),
          QU = this.pipelines.get(yU);
        if (QU) return QU;
        const AU = this.pipelineOf(UU, XU, zU);
        return AU && void 0 === QU && this.startPipeline(yU, UU, {
          ...this.programKey(UU, XU),
          resting: cU
        }, zU), AU
      }
      pipelineOf(UU, XU, zU) {
        const cU = this.pipelineIdNow(UU, XU, !1, zU),
          yU = this.pipelines.get(cU);
        return void 0 !== yU ? yU : (this.startPipeline(cU, UU, this.programKey(UU, XU), zU), null)
      }
      pipelineIdNow(UU, XU, zU, cU) {
        const {
          lighting: yU,
          dirLightCount: QU
        } = this, {
          transparencyMode: AU,
          backFaceCulling: FU
        } = UU.model, oU = this.packVariant(UU, this.Fp), DU = (XU ? 2 : 0) + (zU ? 1 : 0), EU = UU.pipelineIds[DU];
        if (null !== EU && EU.lighting === yU && EU.dirLightCount === QU && EU.packVariant === oU && EU.transparencyMode === AU && EU.cull === FU && EU.atlasCount === UU.atlasCount && EU.Y5 === UU.Y5 && EU.atlasLayers === UU.atlasLayers && EU.colorFormat === cU._colorFormat && EU.depthStencilFormat === cU._depthStencilFormat && EU.sampleCount === cU._sampleCount) return EU.id;
        const YU = this.programKey(UU, XU),
          NU = this.pipelineId(UU, zU ? {
            ...YU,
            resting: zU
          } : YU, cU);
        return UU.pipelineIds[DU] = {
          id: NU,
          lighting: yU,
          dirLightCount: QU,
          packVariant: oU,
          transparencyMode: AU,
          cull: FU,
          atlasCount: UU.atlasCount,
          Y5: UU.Y5,
          atlasLayers: UU.atlasLayers,
          colorFormat: cU._colorFormat,
          depthStencilFormat: cU._depthStencilFormat,
          sampleCount: cU._sampleCount
        }, NU
      }
      pipelineId(UU, XU, zU) {
        return Uo(XU, this.isBlended(UU), UU.model.backFaceCulling, zU)
      }
      pipelineBuild(UU, XU, zU) {
        var cU;
        const yU = this.pipelineId(UU, XU, zU);
        return null !== (cU = this.builds.get(yU)) && void 0 !== cU ? cU : this.startPipeline(yU, UU, XU, zU)
      }
      startPipeline(UU, XU, zU, cU) {
        var yU;
        this.pipelines.set(UU, null);
        const QU = Tc(zU),
          AU = this.isBlended(XU),
          FU = this.shadowMask && cU._depthStencilFormat ? function(UU, XU, zU, cU) {
            if (void 0 === UU.packVariant || UU.liquid || XU) return "none";
            const yU = (0, bX.e)(UU.packVariant);
            return null === yU || void 0 === yU || !yU.sunShadow || !Qc(yU, zU) || yU.discards || UU.alphaTest && ec(UU.packVariant) ? "none" : cU ? "edge" : "plain"
          }(zU, AU, !!this.sunShadow, cU._sampleCount > 1) : "none";
        let oU;
        try {
          oU = hc(zU, !!this.sunShadow, FU)
        } catch (tU) {
          if (!Oc(zU)) throw tU;
          return this.failedPackBuild(UU, zU, QU, tU)
        }
        const DU = this.shaderModule(oU, QU),
          EU = [];
        zU.packed || (EU.push(function(UU, XU) {
          const zU = [{
            shaderLocation: jF.position,
            offset: JX.f.yA,
            format: "float32x3"
          }, {
            shaderLocation: jF.normal,
            offset: JX.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: jF.color,
            offset: JX.f.colorOffset,
            format: "unorm8x4"
          }];
          return UU && zU.push({
            shaderLocation: jF.uv,
            offset: JX.f.uvOffset,
            format: "float32x2"
          }), XU && zU.push({
            shaderLocation: jF.blockFlagWords,
            offset: JX.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: JX.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: zU
          }
        }("none" !== zU.texture, Oc(zU))), zU.lighting && EU.push(bF));
        const YU = XU.model.backFaceCulling,
          NU = {
            label: QU,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, XU.bindGroupLayout, ...xQ(this.device, zU, !!this.sunShadow, "none" !== FU)]
            }),
            vertex: {
              module: DU,
              entryPoint: "mainVertex",
              buffers: EU
            },
            fragment: kX({
              module: DU,
              entryPoint: "mainFragment"
            }, cU, AU ? TF : null),
            depthStencil: cU._depthStencilFormat ? {
              format: cU._depthStencilFormat,
              depthCompare: null !== (yU = cU._depthCompare) && void 0 !== yU ? yU : WX,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: cU._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: YU ? "back" : "none"
            }
          },
          IU = zU.resting ? 0 : 1;
        this.compiling += IU;
        const pU = "none" === FU ? this.device.createRenderPipelineAsync(NU) : this.startMaskPipelines(DU, NU, "edge" === FU);
        pU.then((XU => {
          this.compiling -= IU, this.pipelines.set(UU, XU)
        }), (UU => {
          this.compiling -= IU, console.error(`Lite terrain pipeline ${QU} failed`, UU), vF(this.device, zU, QU, DU, UU)
        }));
        const aU = {
          name: QU,
          module: DU,
          built: pU
        };
        return this.builds.set(UU, aU), aU
      }
      startMaskPipelines(UU, XU, zU) {
        const cU = XU.depthStencil,
          yU = this.device.createRenderPipelineAsync(zU ? XU : {
            ...XU,
            depthStencil: {
              ...cU,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          QU = this.device.createRenderPipelineAsync({
            ...XU,
            label: `${XU.label}-prepass`,
            fragment: {
              module: UU,
              entryPoint: "prepassFragment",
              targets: [{
                format: wF
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([yU, QU]).then((UU => {
          let [XU, zU] = UU;
          return this.prepassOf.set(XU, zU), this.maskPipelines++, XU
        }))
      }
      failedPackBuild(UU, XU, zU, cU) {
        console.error(`Lite terrain pipeline ${zU} failed`, cU), vF(this.device, XU, zU, null, cU);
        const yU = Promise.reject(cU);
        yU.catch((() => {}));
        const QU = {
          name: zU,
          module: null,
          built: yU
        };
        return this.builds.set(UU, QU), QU
      }
      checkShaderPack(UU) {
        return iF(UU, {
          device: this.device,
          target: this.target,
          material: UU => this.materialFor(UU),
          programKey: (UU, XU, zU) => this.programKey(UU, XU, zU),
          pipelineBuild: (UU, XU, zU) => this.pipelineBuild(UU, XU, zU)
        })
      }
      createBinding(UU, XU, zU) {
        return this.target = XU, {
          renderable: UU,
          pipeline: CX(this.device, XU),
          draw: UU => {
            this.geometry.setDrawing(!0);
            try {
              return zU ? this.drawTransparent(UU, XU) : this.drawOpaque(UU, XU)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(UU, XU) {
        var zU, cU, yU, QU;
        const {
          WN: AU
        } = UU;
        this.lighting = UU.ia;
        const FU = (0, gF.C)(XU);
        this.dirLightCount = Math.min(FU, 4), this.Fp = null !== (zU = AU.Fp) && void 0 !== zU ? zU : null, FU > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(UU, XU), this.animateMaterials(XU.animTick);
        const oU = AU.VN,
          DU = oU[0] !== this.originOffset[0] || oU[1] !== this.originOffset[1] || oU[2] !== this.originOffset[2];
        DU && (this.originOffset[0] = oU[0], this.originOffset[1] = oU[1], this.originOffset[2] = oU[2]);
        const EU = XU.eye;
        this.eye[0] = EU[0], this.eye[1] = EU[1], this.eye[2] = EU[2], this.writeShaderPackInputs();
        const YU = XU.projectionMatrix,
          NU = 0 === YU[15];
        let IU = 0;
        (DU || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: pU
        } = this;
        wX(this.transparentRenderable._worldCenter, XU, LX), this.resetBatches(NU), this.transparent.length = 0, this.unlit.length = 0;
        const aU = AU.qY.tY,
          tU = aU / 2 * Math.sqrt(3);
        let gU = 0;
        const kU = !!this.Fp && Lc(this.Fp.defineFor("liquid"));
        let GU = !1;
        const BU = null !== (cU = null === (yU = AU.yB) || void 0 === yU ? void 0 : yU.visibility) && void 0 !== cU ? cU : null,
          ZU = this.visCull && NU && 0 === this.compiling && null !== BU && AU.qY.EyU[0] >= this.visCullMinDistance ? this.target : null,
          RU = this.visPassable,
          PU = this.visCandidates,
          WU = this.visCandidateBatches;
        RU.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let dU = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let LU = 0;
        const eU = (UU, zU) => {
          if (!zU) return this.transparent.push(UU), void(LU += 2 * UU.faceCount);
          if (null !== UU.faceGroups && zU.faceCull) {
            if (0 === IU && (IU = (0, sF.e)(YU, XU.renderWidth, XU.renderHeight), IU !== this.faceFocalPx && (this.faceFocalPx = IU, pU = ++this.faceEpoch)), UU.faceEpoch !== pU) {
              UU.faceEpoch = pU;
              const XU = Math.sqrt(UU.distance) + tU,
                zU = (0, sF.k)(UU.planePX, UU.planeNX, UU.planePY, UU.planeNY, UU.planePZ, UU.planeNZ, this.eye[0] - (UU.origin[0] - this.originOffset[0]), this.eye[1] - (UU.origin[1] - this.originOffset[1]), this.eye[2] - (UU.origin[2] - this.originOffset[2]), (0, sF.i)(XU, IU));
              zU !== UU.faceMask && this.chooseFaceRanges(UU, UU.faceGroups, zU)
            }
            if (0 === UU.rangeCount) return
          } else - 1 !== UU.faceMask && this.drawWhole(UU);
          zU.meshes.push(UU), LU += 2 * ((UU.rangeCount > 0 ? UU.count0 : 0) + (UU.rangeCount > 1 ? UU.count1 : 0))
        };
        for (const wU of this.chunks.values()) {
          DU && this.writeSlot(wU);
          const UU = wU.mesh.visibility;
          UU !== wU.visibility && (wU.visibility = UU, this.slots.setVisibility(wU.slot, UU));
          const {
            material: zU
          } = wU;
          this.geometry.lost(wU) && performance.now() >= wU.lostRetryAt && this.remeshLost(AU, wU);
          const cU = !(null === zU || void 0 === zU || !zU.bindGroup) && this.geometry.backed(wU),
            yU = cU && this.lighting && !wU.vertices.page.twin;
          if (ZU && (Number.isNaN(wU.key) && (wU.ci = Math.floor(wU.origin[0] / aU), wU.cj = Math.floor(wU.origin[1] / aU), wU.ck = Math.floor(wU.origin[2] / aU), wU.key = (0, mF.k)(wU.ci, wU.cj, wU.ck)), (!cU || UU < 1 || yU || !this.batchDraws(zU, wU.packed, ZU)) && this.visSeeThrough(wU, ZU) && RU.add(wU.key)), !cU) continue;
          yU || (wU.lostRemeshes = 0);
          const QU = wU.origin[0] - this.originOffset[0],
            FU = wU.origin[1] - this.originOffset[1],
            oU = wU.origin[2] - this.originOffset[2];
          if (!(0, QF.e)(XU.frustum, QU, FU, oU, aU)) continue;
          const EU = QU + aU / 2 - this.eye[0],
            YU = FU + aU / 2 - this.eye[1],
            IU = oU + aU / 2 - this.eye[2];
          if (wU.distance = EU * EU + YU * YU + IU * IU, this.lighting && !wU.lit && (gU = Math.max(gU, wU.vertexCount), this.unlit.push(wU)), yU) continue;
          const pU = this.isBlended(zU) ? null : this.batchFor(zU, wU.packed, wU.vertices.page, 1 === UU, NU);
          ZU ? (PU[dU] = wU, WU[dU++] = pU) : eU(wU, pU)
        }
        const CU = ZU ? this.sweepVisibility(UU, XU, BU) : null;
        null === (QU = (0, uQ.B)(AU)) || void 0 === QU || QU.update(XU.frustum, this.originOffset, aU, CU);
        for (let wU = 0; wU < dU; wU++) {
          const UU = PU[wU];
          !CU || CU.isDrawn(UU.ci, UU.cj, UU.ck) ? eU(UU, WU[wU]) : (this.visCulledParts++, this.visCulledTriangles += 2 * UU.faceCount)
        }
        for (const wU of this.transparent) GU ||= kU && wU.material.liquid && !wU.material.customRenderMat;
        this.submittedTriangles = LU, CU && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(UU, XU, CU)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(GU) : GU && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && gU > 0 && this.geometry.lightFullSky(this.unlit, gU);
        for (const wU of this.opaqueBatches) this.chunkSorter.sort(wU.meshes, 1) || wU.meshes.sort(Xo);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(zo)
      }
      sweepVisibility(UU, XU, zU) {
        const {
          qY: cU
        } = UU.WN, yU = cU.tY, QU = this.visPassable, AU = this.eye[0] + this.originOffset[0], FU = this.eye[1] + this.originOffset[1], oU = this.eye[2] + this.originOffset[2];
        if (!zU.eyeClear(AU, FU, oU, XU.near, XU.projectionMatrix, cU)) return null;
        const [DU, EU] = cU.EyU, YU = zU.update(AU, FU, oU, yU, DU, EU, QU);
        return this.visSweeps = zU.sweeps, YU ? zU : null
      }
      visSeeThrough(UU, XU) {
        const {
          material: zU
        } = UU;
        return (!zU || !this.isBlended(zU)) && (UU.mesh.visibility < 1 || !(null !== zU && void 0 !== zU && zU.bindGroup) || UU.faceCount > 0 && (!this.geometry.backed(UU) || this.lighting && !UU.vertices.page.twin) || !this.batchDraws(zU, UU.packed, XU))
      }
      batchDraws(UU, XU, zU) {
        var cU;
        const yU = XU ? 2 : 0;
        if (UU === this.visDrawsMaterial && function(UU, XU) {
            return 0 !== (UU & 1 << XU)
          }(this.visDrawsBits, yU)) return 0 !== (this.visDrawsBits & 2 << yU);
        let QU = null !== (cU = this.visBatchDraws.get(UU)) && void 0 !== cU ? cU : 0;
        if (!(QU & 1 << yU)) {
          QU |= 1 << yU | (!!UU.bindGroupLayout && this.canDraw(UU, XU) && !!this.pipelines.get(this.pipelineIdNow(UU, XU, !1, zU)) ? 2 << yU : 0), this.visBatchDraws.set(UU, QU)
        }
        return this.visDrawsMaterial = UU, this.visDrawsBits = QU, 0 !== (QU & 2 << yU)
      }
      runVisCheck(UU, XU, zU) {
        const {
          WN: cU
        } = UU, {
          qY: yU
        } = cU, QU = yU.tY, AU = new Set;
        for (const IU of this.chunks.values()) AU.add(IU.key);
        const FU = sy.Matrix.FromArray(XU.viewProjectionMatrix).invert(),
          [oU, DU, EU] = this.originOffset,
          YU = new sy.Sp,
          NU = function(UU, XU, zU, cU) {
            const yU = new Set;
            for (let QU = 0; QU < 27; QU++)
              for (let AU = 0; AU < 48; AU++) {
                const FU = zU((AU + .5) / 48 * 2 - 1, (QU + .5) / 27 * 2 - 1);
                lF(UU, XU, [FU[0] - XU[0], FU[1] - XU[1], FU[2] - XU[2]], cU, yU)
              }
            return yU
          }({
            VJ: (UU, XU, zU) => yU.VJ(UU, XU, zU),
            occluders: zU.occluders,
            opaque: zU.opaque,
            aY: QU,
            isDrawn: (UU, XU, cU) => zU.isDrawn(UU, XU, cU),
            hasParts: (UU, XU, zU) => AU.has((0, mF.k)(UU, XU, zU))
          }, [this.eye[0] + oU, this.eye[1] + DU, this.eye[2] + EU], ((UU, XU) => (sy.Sp.TransformCoordinatesFromFloatsToRef(UU, XU, .5, FU, YU), [YU.x + oU, YU.y + DU, YU.z + EU])), (yU.EyU[0] + 1) * QU);
        this.visViolations = NU.size;
        for (const IU of NU) this.warnOnce(`vis:${IU}`, `Lite terrain cave culling skipped chunk ${IU}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var UU;
        null !== (UU = this.Fp) && void 0 !== UU && UU.isRunning() && (this.shaderPackInputs ??= new JQ(this.device, this.Fp.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Fp, this.eye, this.lighting))
      }
      bindShaderPackInputs(UU, XU, zU) {
        var cU, yU, QU, AU;
        let FU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const oU = this.packVariant(XU, zU);
        if (void 0 === oU) return;
        this.shaderPackInputs || (this.shaderPackInputs = new JQ(this.device, zU.textureLayers(), this.sunShadow), this.shaderPackInputs.write(zU, this.eye, this.lighting));
        const DU = Lc(oU) ? null !== (cU = null === (yU = this.sceneDepth) || void 0 === yU ? void 0 : yU.view) && void 0 !== cU ? cU : this.standIn() : null,
          EU = FU ? null !== (QU = null === (AU = this.shadowMask) || void 0 === AU ? void 0 : AU.view) && void 0 !== QU ? QU : this.standIn() : null;
        this.shaderPackInputs.bind(UU, DU, lQ(oU, !!this.sunShadow), EU)
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
        var UU, XU;
        return null !== (UU = null === (XU = this.shaderPackInputs) || void 0 === XU ? void 0 : XU.bindGroupFor(null, !0)) && void 0 !== UU ? UU : null
      }
      resetBatches(UU) {
        const XU = this.opaqueBatches;
        let zU = 0;
        for (const cU of XU) cU.meshes.length > 0 && (cU.meshes.length = 0, cU.faceCull = this.batchFaceCull(cU.material, UU), XU[zU++] = cU);
        XU.length = zU
      }
      orderBatches() {
        const UU = this.opaqueBatches;
        for (let XU = 0; XU < UU.length; XU++) {
          const zU = UU[XU];
          zU.group = XU;
          for (let cU = 0; cU < XU; cU++) {
            const XU = UU[cU];
            if (XU.material === zU.material && XU.packed === zU.packed) {
              zU.group = XU.group;
              break
            }
          }
          zU.nearest = zU.meshes.length > 0 ? zU.meshes[0].distance : 1 / 0
        }
        UU.sort(xF)
      }
      batchFor(UU, XU, zU, cU, yU) {
        for (const AU of this.opaqueBatches)
          if (AU.material === UU && AU.packed === XU && AU.page === zU && AU.resting === cU) return AU;
        const QU = {
          material: UU,
          packed: XU,
          page: zU,
          resting: cU,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(UU, yU)
        };
        return this.opaqueBatches.push(QU), QU
      }
      batchFaceCull(UU, XU) {
        return !(!XU || !(0, VF.m)(UU.model)) && (!this.Fp || ! function(UU) {
          var XU;
          return !(null === (XU = (0, bX.e)(UU)) || void 0 === XU || !XU.movesVertices)
        }(this.packVariant(UU, this.Fp)))
      }
      writeFrameUniforms(UU, XU) {
        const zU = this.frameUniforms,
          cU = Sc;
        if ((0, gF.G)(UU, zU), zU[cU.fogInfos] = XU.fogEnabled ? XU.fogMode : 0, zU[cU.fogInfos + 1] = XU.fogStart, zU[cU.fogInfos + 2] = XU.fogEnd, zU[cU.fogInfos + 3] = XU.fogDensity, zU.set(XU.fogColour, cU.fogColour), zU[cU.outputHeight] = XU.renderHeight, zU.set(XU.ambientColour, cU.sceneAmbient), (0, gF.y)(XU, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const XU = (0, kF.j)(UU.Xa, UU.dp, UU.Lp);
          for (let UU = 0; UU < 4; UU++) zU[cU.aoLevels + UU] = XU[UU] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, zU)
      }
      animateMaterials(UU) {
        const XU = uc.anim;
        for (const zU of this.materials.values()) zU.animated && (zU.uniformData[XU] = UU, this.device.queue.writeBuffer(zU.uniformBuffer, 4 * XU, zU.uniformData, XU, 1))
      }
      canDraw(UU, XU) {
        return !("atlas" === UU.texture && !XU) || (this.warnOnce(`stride:${UU.id}`, `Lite terrain: material "${UU.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(UU, XU) {
        let zU = 0;
        UU.setBindGroup(1, this.frameBindGroup);
        for (const cU of this.opaqueBatches) {
          if (!cU.meshes.length || !this.canDraw(cU.material, cU.packed)) continue;
          const yU = this.pipelineFor(cU.material, cU.packed, XU, cU.resting);
          yU && (UU.setPipeline(yU), UU.setBindGroup(2, cU.material.bindGroup), this.Fp && this.bindShaderPackInputs(UU, cU.material, this.Fp, this.prepassOf.has(yU)), zU += this.drawBatch(UU, cU))
        }
        return zU
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(UU, XU, zU) {
        const cU = this.target,
          yU = this.Fp;
        if (!cU || !yU || 0 === this.maskPipelines) return 0;
        let QU = 0,
          AU = null;
        this.geometry.setDrawing(!0);
        try {
          for (const FU of this.opaqueBatches) {
            if (!FU.meshes.length || !this.canDraw(FU.material, FU.packed)) continue;
            const oU = this.pipelineFor(FU.material, FU.packed, cU, FU.resting),
              DU = oU && this.prepassOf.get(oU);
            DU && (AU || (AU = UU.beginRenderPass(XU), AU.setBindGroup(0, zU), AU.setBindGroup(1, this.frameBindGroup)), AU.setPipeline(DU), AU.setBindGroup(2, FU.material.bindGroup), this.bindShaderPackInputs(AU, FU.material, yU, !0), QU += this.drawBatch(AU, FU))
          }
        } finally {
          var FU;
          null === (FU = AU) || void 0 === FU || FU.end(), this.geometry.setDrawing(!1)
        }
        return QU
      }
      drawBatch(UU, XU) {
        let zU = 0;
        for (const cU of XU.meshes) {
          const {
            rangeCount: XU
          } = cU;
          XU > 0 && (zU += this.geometry.draw(UU, cU, this.lighting, cU.first0, cU.count0), XU > 1 && (zU += this.geometry.draw(UU, cU, this.lighting, cU.first1, cU.count1)))
        }
        return zU
      }
      drawTransparent(UU, XU) {
        let zU = 0,
          cU = null,
          yU = null;
        UU.setBindGroup(1, this.frameBindGroup);
        for (const QU of this.transparent) {
          const AU = QU.material;
          if (!this.canDraw(AU, QU.packed)) continue;
          const FU = this.pipelineFor(AU, QU.packed, XU);
          FU && (FU !== cU && (UU.setPipeline(FU), cU = FU, this.Fp && this.bindShaderPackInputs(UU, AU, this.Fp)), AU !== yU && (UU.setBindGroup(2, AU.bindGroup), yU = AU), zU += this.geometry.draw(UU, QU, this.lighting))
        }
        return zU
      }
    }

    function Uo(UU, XU, zU, cU) {
      return `${Tc(UU)}|${UU.atlasLayers}|${UU.Y5}|${XU}|${zU}|${cU._colorFormat}|${cU._depthStencilFormat}|${cU._sampleCount}`
    }

    function Xo(UU, XU) {
      return UU.distance - XU.distance
    }

    function zo(UU, XU) {
      return XU.distance - UU.distance
    }
    class co {
      constructor() {
        this.left = []
      }
      sort(UU, XU) {
        for (let zU = 0; zU < UU.length; zU++) {
          const XU = UU[zU].distance;
          if (XU - XU !== 0) return !1
        }
        return this.sortRange(UU, 0, UU.length, XU), !0
      }
      sortRange(UU, XU, zU, cU) {
        if (zU - XU <= 16) {
          for (let yU = XU + 1; yU < zU; yU++) {
            const zU = UU[yU],
              QU = cU * zU.distance;
            let AU = yU - 1;
            for (; AU >= XU && cU * UU[AU].distance > QU; AU--) UU[AU + 1] = UU[AU];
            UU[AU + 1] = zU
          }
          return
        }
        const yU = XU + zU >>> 1;
        if (this.sortRange(UU, XU, yU, cU), this.sortRange(UU, yU, zU, cU), cU * UU[yU - 1].distance <= cU * UU[yU].distance) return;
        const {
          left: QU
        } = this, AU = yU - XU;
        for (let EU = 0; EU < AU; EU++) QU[EU] = UU[XU + EU];
        let FU = 0,
          oU = yU,
          DU = XU;
        for (; FU < AU && oU < zU;) UU[DU++] = cU * UU[oU].distance < cU * QU[FU].distance ? UU[oU++] : QU[FU++];
        for (; FU < AU;) UU[DU++] = QU[FU++]
      }
    }
    const yo = Math.ceil(102);

    function Qo(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : XU;
      const QU = Math.min(XU, zU),
        AU = new Uint32Array(Rz(cU));
      for (let FU = 0; FU < cU; FU++) {
        const XU = Math.floor(FU * QU / cU),
          zU = Math.max(XU + 1, Math.floor((FU + 1) * QU / cU));
        for (let oU = 0; oU < cU; oU++) {
          const DU = Math.floor(oU * QU / cU),
            EU = Math.max(DU + 1, Math.floor((oU + 1) * QU / cU));
          let YU = 0;
          for (let cU = XU; cU < zU; cU++)
            for (let XU = DU; XU < EU; XU++) UU[cU * yU + XU] >= yo && YU++;
          if (2 * YU >= (zU - XU) * (EU - DU)) {
            const UU = oU + cU * FU;
            AU[UU >>> 5] |= 1 << (31 & UU)
          }
        }
      }
      return AU
    }

    function Ao(UU) {
      return Math.max(1, Math.min(16, UU))
    }
    class Fo {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = UU, this.loadTexture = XU, this.warn = zU, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(UU, XU) {
        return (UU.qm !== this.builtVersion || this.blockCaster.length !== XU) && (this.build(UU, XU), !0)
      }
      build(UU, XU) {
        this.builtVersion = UU.qm;
        const zU = new Uint16Array(XU),
          cU = new Map;
        for (let yU = 1; yU < XU; yU++) {
          const XU = this.classify(UU, yU, cU);
          if (null === XU || XU === gz) {
            zU[yU] = null === XU ? 0 : gz;
            continue
          }
          let QU = this.byKey.get(XU.key);
          void 0 === QU && (QU = this.allocate(XU), this.byKey.set(XU.key, QU)), zU[yU] = QU
        }
        this.blockCaster = zU, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(UU, XU) {
        const zU = UU.X3[XU];
        if ("function" !== typeof zU) return zU;
        try {
          return zU()
        } catch (cU) {
          return this.warnOnce(`Sun shadows: no caster option for block ${XU}: ${cU instanceof Error?cU.message:String(cU)}`), null
        }
      }
      classify(UU, XU, zU) {
        const cU = this.option(UU, XU);
        if ("none" === cU) return null;
        if (cU && cU.planes.length > 0) {
          const UU = cU.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(UU)}`,
            planes: UU
          }
        }
        if (UU.GI[XU]) return null;
        const yU = UU.ZI[XU] ? UU.Km(XU) : null;
        if (yU && yU.length >= 6) {
          const UU = function(UU) {
            const XU = new Uint32Array(16);
            for (let zU = 0; zU + 6 <= UU.length; zU += 6) {
              const cU = [0, 1, 2].map((XU => Math.max(0, Math.ceil(8 * UU[zU + XU] - .5)))),
                yU = [0, 1, 2].map((XU => Math.min(7, Math.floor(8 * UU[zU + XU + 3] - .5))));
              for (let UU = cU[2]; UU <= yU[2]; UU++)
                for (let zU = cU[1]; zU <= yU[1]; zU++)
                  for (let QU = cU[0]; QU <= yU[0]; QU++) {
                    const cU = QU + 8 * (zU + 8 * UU);
                    XU[cU >>> 5] |= 1 << (31 & cU)
                  }
            }
            return XU
          }(yU);
          return function(UU) {
            return UU.every((UU => 4294967295 === UU))
          }(UU) ? gz : UU.every((UU => 0 === UU)) ? null : {
            kind: "shape",
            key: `shape:${UU.join(",")}`,
            mask: UU
          }
        }
        if (UU.bR[XU] || !UU.za[XU]) return null;
        const QU = [0, 1, 2, 3, 4, 5].map((cU => {
          const yU = UU.ca[6 * XU + cU];
          let QU = zU.get(yU);
          return void 0 === QU && (QU = function(UU) {
            if (!UU || UU.Ia) return null;
            const {
              o5: XU,
              Y5: zU,
              y5: cU
            } = UU;
            if (!XU || !zU || !(zU > 0) || void 0 === cU || !(cU >= 0)) return null;
            const yU = XU[0],
              QU = zU * zU * 4;
            if (!yU || yU.byteLength < QU) return null;
            const AU = Math.floor(yU.byteLength / QU),
              FU = XU[Math.floor(cU / AU)];
            if (!FU) return null;
            const oU = new Uint8Array(FU.buffer, FU.byteOffset, FU.byteLength),
              DU = cU % AU * QU;
            if (DU + QU > oU.length) return null;
            const EU = new Uint8Array(zU * zU);
            let YU = !1;
            for (let NU = 0; NU < EU.length; NU++) EU[NU] = oU[DU + 4 * NU + 3], YU ||= EU[NU] < yo;
            return YU ? {
              alpha: EU,
              width: zU
            } : null
          }(UU.Na(yU)), zU.set(yU, QU)), QU
        }));
        if (QU.every((UU => null === UU))) return gz;
        const AU = Ao(Math.max(...QU.map((UU => {
            var XU;
            return null !== (XU = null === UU || void 0 === UU ? void 0 : UU.width) && void 0 !== XU ? XU : 1
          })))),
          FU = new Uint32Array(Rz(AU)).fill(4294967295),
          oU = QU.map((UU => null === UU ? FU : Qo(UU.alpha, UU.width, UU.width, AU)));
        return {
          kind: "cutout",
          key: `cutout:${AU}:${oU.map((UU=>UU.join(","))).join("|")}`,
          size: AU,
          faces: oU
        }
      }
      allocate(UU) {
        if (this.nextCaster >= Pz) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const XU = this.nextCaster++;
        if (this.writeCaster(XU, kz, 0, 0, 0), "shape" === UU.kind) {
          const zU = this.allocateMask(UU.mask.length);
          zU >= 0 && (this.sink(zU, UU.mask), this.writeCaster(XU, Gz, zU, 0, 8))
        } else if ("cutout" === UU.kind) {
          const zU = Rz(UU.size),
            cU = this.allocateMask(6 * zU);
          if (cU >= 0) {
            const yU = new Uint32Array(6 * zU);
            UU.faces.forEach(((UU, XU) => {
              yU.set(UU, XU * zU)
            })), this.sink(cU, yU), this.writeCaster(XU, Zz, cU, 0, UU.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(XU, UU.planes).finally((() => {
          this.planesLoading--
        })));
        return XU
      }
      async loadPlanes(UU, XU) {
        const zU = await Promise.all(XU.map((UU => this.texture(UU.texture))));
        if (zU.some((UU => null === UU))) return;
        const cU = zU,
          yU = Ao(Math.max(...cU.map((UU => Math.min(UU.width, UU.height))))),
          QU = Rz(yU),
          AU = this.allocateMask(XU.length * (4 + QU));
        if (AU < 0) return;
        const FU = new Uint32Array(XU.length * (4 + QU)),
          oU = 4 * XU.length;
        XU.forEach(((UU, XU) => {
          const zU = AU + oU + XU * QU;
          FU.set(function(UU, XU) {
            const [zU, cU] = UU.tangent, yU = Math.hypot(zU, cU) || 1, QU = zU / yU, AU = cU / yU, FU = UU.centre[0] * AU - UU.centre[1] * QU, oU = new Uint32Array(4);
            return new Float32Array(oU.buffer, 0, 3).set([QU, AU, FU]), oU[3] = XU, oU
          }(UU, zU), 4 * XU), FU.set(Qo(cU[XU].alpha, cU[XU].width, cU[XU].height, yU), oU + XU * QU)
        })), this.sink(AU, FU), this.writeCaster(UU, Bz, AU, XU.length, yU)
      }
      texture(UU) {
        let XU = this.textures.get(UU);
        return XU || (XU = this.loadTexture(UU).catch((XU => (this.warn(`Sun shadows: no mask for ${UU}: ${XU instanceof Error?XU.message:String(XU)}`), null))), this.textures.set(UU, XU)), XU
      }
      allocateMask(UU) {
        if (this.nextMaskWord + UU > Wz) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const XU = 32768 + this.nextMaskWord;
        return this.nextMaskWord += UU, XU
      }
      writeCaster(UU, XU, zU, cU, yU) {
        this.sink(0 + 4 * UU, Uint32Array.of(XU, zU, cU, yU))
      }
      warnOnce(UU) {
        this.warned.has(UU) || (this.warned.add(UU), this.warn(UU))
      }
    }
    var oo = zU(3128);

    function Do(UU) {
      return !UU.ga && !UU.pR && !UU.xp
    }

    function Eo() {
      return {
        bricks: new Uint32Array(Dz),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Fz)
      }
    }
    class Yo {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = UU, this.writeVoxels = XU, this.writePool = zU, this.warn = cU, this.eyeChunk = null, this.slotChunk = new Array(Xz).fill(null), this.slotVersion = new Float64Array(Xz).fill(-1), this.slotPool = new Array(Xz).fill(null), this.starved = new Uint8Array(Xz), this.queue = [], this.queued = new Uint8Array(Xz), this.queueSorted = !0, this.freePool = new Uint32Array(dz), this.freeCount = dz, this.casterTable = null, this.warnedPool = !1, this.scratch = Eo(), this.victimScratch = Eo(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Xz), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let yU = 0; yU < dz; yU++) this.freePool[yU] = 65535 - yU
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return dz - this.freeCount
      }
      chunkAdded(UU) {
        if (null === this.eyeChunk || !this.inRadius(UU.i, UU.j, UU.k)) return;
        const XU = pz(UU.i, UU.j, UU.k);
        this.slotChunk[XU] = UU, this.slotVersion[XU] = -1, this.enqueue(XU)
      }
      update(UU, XU, zU) {
        const cU = this.casters.blockCaster;
        if (cU !== this.casterTable) {
          this.casterTable = cU;
          for (let UU = 0; UU < Xz; UU++) this.slotVersion[UU] = -1, this.slotChunk[UU] && this.enqueue(UU)
        }
        const yU = Math.floor(UU[0] / 32),
          QU = Math.floor(UU[1] / 32),
          AU = Math.floor(UU[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== yU || this.eyeChunk[1] !== QU || this.eyeChunk[2] !== AU) && (this.eyeChunk = [yU, QU, AU], this.follow(XU), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let FU = 0; FU < Xz; FU++) {
          const UU = this.slotChunk[FU];
          UU && (UU.oR || UU.Kp !== this.slotVersion[FU]) && this.enqueue(FU)
        }
        this.drain(zU), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(UU, XU) {
        this.records.set(XU, 4 * UU), this.windowTopStale = !0, this.writeVoxels(4 * UU, XU)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const UU = this.records;
        let XU = -1 / 0;
        for (let cU = 0; cU < UU.length; cU += 4) {
          const zU = 255 & UU[cU + 3];
          zU !== yz && zU !== Qz || !this.inRadius(UU[cU], UU[cU + 1], UU[cU + 2]) || (XU = Math.max(XU, UU[cU + 1] * TX + (UU[cU + 3] >>> 8)))
        }
        const zU = XU === -1 / 0 ? 1 : XU + Yz;
        zU !== this.windowTop[0] && (this.windowTop[0] = zU, this.writeVoxels(Ez, this.windowTop))
      }
      follow(UU) {
        const XU = this.eyeChunk,
          [zU, cU, yU] = hX;
        for (let AU = -yU; AU <= yU; AU++)
          for (let yU = -cU; yU <= cU; yU++)
            for (let cU = -zU; cU <= zU; cU++) {
              var QU;
              const zU = XU[0] + cU,
                FU = XU[1] + yU,
                oU = XU[2] + AU,
                DU = pz(zU, FU, oU),
                EU = this.slotChunk[DU];
              if (EU && !EU.oR && EU.i === zU && EU.j === FU && EU.k === oU) continue;
              const YU = null !== (QU = UU(zU, FU, oU)) && void 0 !== QU ? QU : null;
              EU && (EU.i !== zU || EU.j !== FU || EU.k !== oU) && this.slotPool[DU] && (this.release(DU), this.record.fill(0), this.writeRecord(DU, this.record)), this.slotChunk[DU] = YU, this.slotVersion[DU] = -1, (YU || EU) && this.enqueue(DU)
            }
      }
      requeueStarved() {
        for (let UU = 0; UU < Xz; UU++) this.starved[UU] && this.slotChunk[UU] && this.enqueue(UU)
      }
      enqueue(UU) {
        this.queued[UU] || (this.queued[UU] = 1, this.queue.push(UU), this.queueSorted = !1)
      }
      drain(UU) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const UU = new Map;
          for (const XU of this.queue) UU.set(XU, this.slotDistance(XU));
          this.queue.sort(((XU, zU) => UU.get(zU) - UU.get(XU))), this.queueSorted = !0
        }
        const XU = performance.now();
        let zU = 0;
        const cU = [];
        for (; this.queue.length > 0 && (0 === zU || performance.now() - XU < UU);) {
          const UU = this.queue.pop(),
            XU = this.slotChunk[UU];
          !XU || XU.oR || Do(XU) ? (this.queued[UU] = 0, this.encodeSlot(UU), zU++) : cU.push(UU)
        }
        for (let yU = cU.length - 1; yU >= 0; yU--) this.queue.push(cU[yU])
      }
      slotDistance(UU) {
        const XU = this.slotChunk[UU],
          zU = this.eyeChunk;
        return XU ? Math.max(Math.abs(XU.i - zU[0]), Math.abs(XU.j - zU[1]), Math.abs(XU.k - zU[2])) : 0
      }
      inRadius(UU, XU, zU) {
        const cU = this.eyeChunk,
          [yU, QU, AU] = hX;
        return Math.abs(UU - cU[0]) <= yU && Math.abs(XU - cU[1]) <= QU && Math.abs(zU - cU[2]) <= AU
      }
      release(UU) {
        const XU = this.slotPool[UU];
        if (XU) {
          for (let UU = XU.length - 1; UU >= 0; UU--) this.freePool[this.freeCount++] = XU[UU];
          this.slotPool[UU] = null
        }
      }
      encodeSlot(UU) {
        var XU, zU, cU, yU, QU;
        let AU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          FU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const oU = null !== (XU = null === (zU = this.slotPool[UU]) || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : 0;
        this.release(UU), this.starved[UU] = 0;
        const DU = this.slotChunk[UU],
          EU = this.record;
        if (!DU || DU.oR || !DU.lN) return this.slotChunk[UU] = null, this.slotVersion[UU] = -1, EU.fill(0), this.writeRecord(UU, EU), void(oU > 0 && this.requeueStarved());
        this.slotVersion[UU] = DU.Kp;
        const YU = this.encodeBricks(DU, UU, AU, FU);
        EU[0] = DU.i, EU[1] = DU.j, EU[2] = DU.k, EU[3] = YU, this.writeRecord(UU, EU), null === (cU = this.encoded) || void 0 === cU || cU.call(this, DU), FU && (null !== (yU = null === (QU = this.slotPool[UU]) || void 0 === QU ? void 0 : QU.length) && void 0 !== yU ? yU : 0) < oU && this.requeueStarved()
      }
      encodeBricks(UU, XU, zU, cU) {
        if (UU.Ip) return cz;
        const yU = this.casters.blockCaster,
          {
            data: QU,
            stride: AU,
            offset: FU
          } = UU.lN,
          [oU, DU, EU] = AU,
          YU = TX,
          {
            bricks: NU,
            cells: IU,
            special: pU
          } = zU;
        NU.fill(0), pU.fill(0);
        let aU = 0,
          tU = 0,
          gU = 0;
        for (let kU = 0; kU < YU; kU++) {
          const XU = kU >> 2,
            zU = 3 & kU,
            cU = UU.MI[kU],
            AU = cU === oo.e ? -1 : cU < yU.length ? yU[cU] : 0;
          if (0 !== AU)
            for (let UU = 0; UU < YU; UU++) {
              const cU = UU >> 2,
                GU = 3 & UU;
              let BU = FU + UU * oU + kU * DU;
              for (let UU = 0; UU < YU; UU++, BU += EU) {
                let FU = AU;
                if (FU < 0) {
                  const UU = QU[BU];
                  if (FU = UU < yU.length ? yU[UU] : 0, 0 === FU) continue
                }
                const oU = az(cU, XU, UU >> 2),
                  DU = tz(GU, zU, 3 & UU);
                NU[3 * oU + (DU >>> 5)] |= 1 << (31 & DU), IU[oU * Az + DU] = FU, aU++, gU = kU, FU === gz ? tU++ : pU[oU] = 1
              }
            }
        }
        return 0 === aU ? cz : 32768 === tU ? yz | gU << 8 : (this.writePoolEntries(XU, zU, cU), this.writeVoxels(oz + XU * Dz, NU), Qz | gU << 8)
      }
      writePoolEntries(UU, XU, zU) {
        const {
          bricks: cU,
          cells: yU,
          special: QU
        } = XU, AU = this.entry;
        let FU = 0;
        for (let EU = 0; EU < Fz; EU++) FU += QU[EU];
        if (0 === FU) return;
        zU && this.freeCount < FU && this.evictBeyond(UU, FU);
        const oU = new Uint32Array(zU ? Math.min(FU, this.freeCount) : 0);
        let DU = 0;
        for (let EU = 0; EU < Fz; EU++) {
          if (!QU[EU]) continue;
          const zU = 3 * EU;
          if (DU === oU.length) {
            this.dropSpecials(XU, EU), this.starved[UU] = 1;
            continue
          }
          const FU = this.freePool[--this.freeCount];
          oU[DU++] = FU;
          for (let UU = 0; UU < Az; UU++) {
            const XU = cU[zU + (UU >>> 5)] >>> (31 & UU) & 1 ? yU[EU * Az + UU] : 0;
            1 & UU ? AU[UU >> 1] |= XU << 16 : AU[UU >> 1] = XU
          }
          cU[zU + 2] = FU + 1, this.writePool(Lz + 32 * FU, AU)
        }
        oU.length > 0 && (this.slotPool[UU] = oU)
      }
      evictBeyond(UU, XU) {
        const zU = this.slotDistance(UU),
          cU = [];
        for (let yU = 0; yU < Xz; yU++) yU !== UU && this.slotPool[yU] && this.slotDistance(yU) > zU && cU.push(yU);
        cU.sort(((UU, XU) => this.slotDistance(XU) - this.slotDistance(UU)));
        for (const yU of cU) {
          if (this.freeCount >= XU) return;
          const UU = this.slotChunk[yU];
          UU && !UU.oR && UU.lN && (UU.Kp === this.slotVersion[yU] || Do(UU)) && this.encodeSlot(yU, this.victimScratch, !1)
        }
      }
      dropSpecials(UU, XU) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const zU = 3 * XU;
        for (let cU = 0; cU < Az; cU++) UU.cells[XU * Az + cU] !== gz && (UU.bricks[zU + (cU >>> 5)] &= ~(1 << (31 & cU)))
      }
    }
    var No = zU(38121);
    class Io {
      constructor(UU) {
        this.device = UU, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Hz, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.qY = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = UU.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = UU.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(UU, XU, zU) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: cU
        } = this;
        cU.gY(UU, XU), zU.forEachSunShadowCaster((UU => {
          this.add(UU)
        })), cU.finish();
        const yU = 0 === cU.parts;
        if (yU && this.uploadedEmpty) return;
        this.uploadedEmpty = yU;
        const {
          queue: QU
        } = this.device, {
          words: AU
        } = cU;
        QU.writeBuffer(this.frameBuffer, 0, AU, 0, 16385), cU.refs > 0 && QU.writeBuffer(this.frameBuffer, 65540, AU, qz, cU.refs), yU || QU.writeBuffer(this.frameBuffer, 327684, AU, Oz, cU.parts * wz)
      }
      add(UU) {
        const XU = this.gridFor(UU);
        if (!XU) return;
        const {
          frame: zU
        } = this, {
          qY: cU,
          worldAt: yU,
          instances: QU,
          instanceCount: AU,
          thin: FU
        } = UU;
        if (QU)
          for (let oU = 0; oU < AU; oU++) FU ? (vz(QU, 16 * oU, cU, yU, this.qY), zU.add(XU, this.qY)) : zU.add(XU, QU, 16 * oU);
        else zU.add(XU, cU, yU)
      }
      gridFor(UU) {
        let {
          geometry: XU,
          indexed: zU,
          first: cU,
          count: yU,
          skip: QU
        } = UU, AU = this.grids.get(XU);
        AU || (AU = new Map, this.grids.set(XU, AU));
        const FU = `${zU?cU:-1-cU}:${yU}:${null!==QU&&void 0!==QU?QU:""}`;
        let oU = AU.get(FU);
        if (void 0 !== oU || this.gridsFull) return oU;
        const DU = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = DU + 2;
        else if (DU > this.bakeDeadline) return;
        return oU = this.bake(XU, zU, cU, yU, QU), void 0 !== oU && AU.set(FU, oU), oU
      }
      bake(UU, XU, zU, cU, yU) {
        const QU = UU.vertexAttributes.find((UU => "position" === UU.kind)),
          AU = QU ? function(UU, XU, zU, cU) {
            let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const QU = UU => XU ? XU[zU + UU] : zU + UU,
              AU = UU => null !== yU && [0, 1, 2].some((XU => {
                const zU = QU(UU + XU);
                return zU >= yU[0] && zU < yU[1]
              })),
              FU = [1 / 0, 1 / 0, 1 / 0],
              oU = [-1 / 0, -1 / 0, -1 / 0];
            for (let kU = 0; kU + 2 < cU; kU += 3)
              if (!AU(kU))
                for (let XU = 0; XU < 3; XU++) {
                  const zU = QU(kU + XU);
                  for (let XU = 0; XU < 3; XU++) FU[XU] = Math.min(FU[XU], UU[3 * zU + XU]), oU[XU] = Math.max(oU[XU], UU[3 * zU + XU])
                }
            const DU = Math.max(oU[0] - FU[0], oU[1] - FU[1], oU[2] - FU[2]);
            if (!(DU > 0)) return null;
            const EU = DU / 64,
              YU = [0, 0, 0],
              NU = [0, 0, 0],
              IU = [0, 0, 0];
            for (let kU = 0; kU < 3; kU++) YU[kU] = Math.min(65, Math.ceil((oU[kU] - FU[kU]) / EU) + 1), NU[kU] = FU[kU] - EU / 2, IU[kU] = NU[kU] + YU[kU] * EU;
            const pU = new Uint32Array(Math.ceil(YU[0] * YU[1] * YU[2] / 32)),
              aU = new Float64Array(9),
              tU = [0, 0, 0],
              gU = [0, 0, 0];
            for (let kU = 0; kU + 2 < cU; kU += 3)
              if (!AU(kU)) {
                for (let XU = 0; XU < 3; XU++) {
                  const zU = QU(kU + XU);
                  for (let cU = 0; cU < 3; cU++) aU[3 * XU + cU] = UU[3 * zU + cU]
                }
                for (let UU = 0; UU < 3; UU++) {
                  const XU = Math.min(aU[UU], aU[3 + UU], aU[6 + UU]),
                    zU = Math.max(aU[UU], aU[3 + UU], aU[6 + UU]);
                  tU[UU] = Math.max(0, Math.floor((XU - NU[UU]) / EU - 1e-6)), gU[UU] = Math.min(YU[UU] - 1, Math.floor((zU - NU[UU]) / EU + 1e-6))
                }
                for (let UU = tU[2]; UU <= gU[2]; UU++)
                  for (let XU = tU[1]; XU <= gU[1]; XU++)
                    for (let zU = tU[0]; zU <= gU[0]; zU++)
                      if (Vz(aU, NU[0] + (zU + .5) * EU, NU[1] + (XU + .5) * EU, NU[2] + (UU + .5) * EU, EU / 2)) {
                        const cU = zU + YU[0] * (XU + YU[1] * UU);
                        pU[cU >>> 5] |= 1 << (31 & cU)
                      }
              } return {
              words: pU,
              lo: NU,
              hi: IU,
              cell: EU,
              dims: YU
            }
          }((0, No.k)(QU, UU.vertexCount), XU ? UU.indexData : null, zU, cU, yU) : null;
        if (!AU) return null;
        const {
          words: FU,
          ...oU
        } = AU;
        if (this.gridTop + FU.length > rz) return void(this.gridsFull = !0);
        const DU = this.gridTop;
        return this.gridTop += FU.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * DU, FU), {
          ...oU,
          at: DU
        }
      }
    }
    const po = Math.cos(1 * Math.PI / 180);

    function ao(UU, XU) {
      return UU[0] * XU[0] + UU[1] * XU[1] + UU[2] * XU[2] < po
    }
    async function to(UU) {
      const {
        pixels: XU,
        width: zU,
        height: cU
      } = await UX(UU), yU = new Uint8Array(zU * cU);
      for (let QU = 0; QU < yU.length; QU++) yU[QU] = XU[4 * QU + 3];
      return {
        width: zU,
        height: cU,
        alpha: yU
      }
    }
    class go {
      constructor(UU, XU) {
        this.device = UU, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(nz.o), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = UU.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = UU.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Nz,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = UU.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [zU, cU, yU] = nz.r;
        this.volume = UU.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: zU,
            height: cU,
            depthOrArrayLayers: yU
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = UU.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = UU.createBuffer({
          label: "sun-shadow-volume-work",
          size: nz.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = XU ? new Io(UU) : null, this.entityStandIn = XU ? null : UU.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var UU;
        null === (UU = this.stopWindow) || void 0 === UU || UU.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var UU, XU;
        const zU = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || zU.push("Lite sun shadow volume pipeline compiling");
        const cU = null !== (UU = null === (XU = this.casters) || void 0 === XU ? void 0 : XU.planesLoading) && void 0 !== UU ? UU : 0;
        return cU > 0 && zU.push(`${cU} Lite sun shadow plane casters loading their textures`), zU
      }
      entries() {
        var UU, XU, zU, cU;
        const yU = KX.u;
        return [{
          binding: yU.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: yU.lN,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: yU.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: yU.volume,
          resource: this.volumeView
        }, {
          binding: yU.sampler,
          resource: this.volumeSampler
        }, {
          binding: yU.entities,
          resource: {
            buffer: null !== (UU = null === (XU = this.entities) || void 0 === XU ? void 0 : XU.frameBuffer) && void 0 !== UU ? UU : this.entityStandIn
          }
        }, {
          binding: yU.entityGrids,
          resource: {
            buffer: null !== (zU = null === (cU = this.entities) || void 0 === cU ? void 0 : cU.gridBuffer) && void 0 !== zU ? zU : this.entityStandIn
          }
        }]
      }
      prepare(UU, XU, zU) {
        var cU;
        this.entitiesThisFrame = !1;
        const yU = null !== (cU = null === zU || void 0 === zU ? void 0 : zU.sunShadowReach()) && void 0 !== cU ? cU : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!zU || !yU.sunShadow && !yU.airShadow) return void(this.volumeHolds = null);
        if (UU.qY.tY !== TX) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${UU.qY.tY}; everything is lit.`)));
        const QU = this.start(UU);
        this.casters.update(UU.EY, UU.EY.ZI.length);
        const AU = UU.VN;
        for (let NU = 0; NU < 3; NU++) this.eye[NU] = XU[NU] + AU[NU];
        const FU = (0, nz.v)(this.eye);
        this.staleNear = FU;
        const oU = UU.qY.Ga;
        QU.update(this.eye, ((UU, XU, zU) => oU.Ba(UU, XU, zU)), 1);
        const DU = (0, nz.s)(zU.hUU()),
          EU = QU.eyeChunk,
          YU = this.uniformInts;
        for (let NU = 0; NU < 3; NU++) YU[NU] = EU[NU], YU[4 + NU] = FU[NU];
        this.entitiesThisFrame = null !== this.entities && yU.sunShadow, this.entitiesThisFrame && iz(this.uniformFloats, 8, XU, DU), null !== this.volumeHolds && (this.castersWritten || ao(DU, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(FU, DU, EU)
      }
      markStale(UU) {
        const XU = this.staleNear,
          zU = TX,
          cU = [UU.i * zU, UU.j * zU, UU.k * zU];
        for (let QU = 0; QU < 3; QU++)
          if (cU[QU] + zU <= XU[QU] - zU || cU[QU] >= XU[QU] + nz.r[QU] + zU) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const yU = this.stale;
        for (let QU = 0; QU < yU.length; QU += 4)
          if (yU[QU] === UU.i && yU[QU + 1] === UU.j && yU[QU + 2] === UU.k) return void(yU[QU + 3] = this.swept);
        if (16 === yU.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        yU.push(UU.i, UU.j, UU.k, this.swept)
      }
      writeStale() {
        const UU = this.swept,
          XU = this.stale;
        this.staleAll && UU - this.staleAllSwept >= nz.k && (this.staleAll = !1, XU.length = 0);
        let zU = 0;
        for (let yU = 0; yU < XU.length; yU += 4)
          if (UU - XU[yU + 3] < nz.k) {
            for (let UU = 0; UU < 4; UU++) XU[zU + UU] = XU[yU + UU];
            zU += 4
          } XU.length = zU;
        const cU = this.uniformInts;
        cU[3] = this.staleAll ? 5 : zU / 4;
        for (let yU = 0; yU < 4; yU++)
          for (let UU = 0; UU < 3; UU++) cU[16 + 4 * yU + UU] = 4 * yU < zU ? XU[4 * yU + UU] * TX : 0
      }
      writeUniform() {
        const UU = this.uniformInts;
        let XU = this.uniformWritten;
        if (XU) {
          let zU = !0;
          for (let cU = 0; cU < UU.length && zU; cU++) zU = UU[cU] === XU[cU];
          if (zU) return
        }
        XU ??= this.uniformWritten = new Int32Array(UU.length), XU.set(UU), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(UU) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, UU)
      }
      computeVolume(UU, XU, zU) {
        const cU = this.buildVolumePass();
        if (!cU) return void(this.volumeHolds = null);
        const yU = (0, nz.t)(this.volumeHolds, UU);
        this.volumeHolds = UU;
        const QU = 1 === yU.length && yU[0].size.every(((UU, XU) => UU === nz.r[XU])),
          AU = this.sweptChunk,
          FU = this.sweptLight,
          oU = XU[0] !== FU[0] || XU[1] !== FU[1] || XU[2] !== FU[2],
          DU = zU[0] !== AU[0] || zU[1] !== AU[1] || zU[2] !== AU[2],
          EU = oU && ao(XU, FU);
        if ((QU || this.written || DU || EU) && (this.fastLeft = nz.k), QU || this.written || oU || DU) {
          this.written = !1;
          for (let UU = 0; UU < 3; UU++) AU[UU] = zU[UU], FU[UU] = XU[UU];
          this.sweepLeft = QU ? 0 : nz.k
        }
        if (QU ? this.swept += nz.k : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, yU.push(...(0, nz.w)(UU, this.slice)), this.slice = (this.slice + 1) % nz.k, this.swept++), 0 === yU.length) return;
        const YU = (0, nz.x)(this.workData, XU, yU);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const NU = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          IU = NU.beginComputePass({
            label: "sun-shadow-volume"
          });
        IU.setPipeline(cU.pipeline), IU.setBindGroup(xz.group, cU.bindGroup), IU.dispatchWorkgroups(Math.ceil(YU / nz.m)), IU.end(), this.device.queue.submit([NU.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const UU = xz,
          XU = GPUShaderStage.COMPUTE,
          zU = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: UU.uniform,
              visibility: XU,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: UU.lN,
              visibility: XU,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: UU.special,
              visibility: XU,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: UU.work,
              visibility: XU,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: UU.volume,
              visibility: XU,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          cU = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: zU,
            entries: [{
              binding: UU.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: UU.lN,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: UU.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: UU.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: UU.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [zU]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Jz()
            }),
            entryPoint: "main"
          }
        }).then((UU => {
          this.volumePass = {
            pipeline: UU,
            bindGroup: cU
          }
        }), (UU => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(UU)}`)
        })), null
      }
      start(UU) {
        if (this.window) return this.window;
        const XU = (UU, XU) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * UU, XU)
        };
        this.casters = new Fo(((UU, zU) => {
          this.castersWritten = !0, XU(UU, zU)
        }), to);
        const zU = new Yo(this.casters, ((UU, XU) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * UU, XU)
        }), XU);
        zU.encoded = UU => {
          this.markStale(UU)
        };
        const cU = UU => {
          zU.chunkAdded(UU)
        };
        return UU.qY.on("chunkAdded", cU), this.stopWindow = () => {
          UU.qY.removeListener("chunkAdded", cU)
        }, this.window = zU, zU
      }
    }
    var ko = zU(39514),
      Go = zU(39516);
    const Bo = 0,
      Zo = 3,
      Ro = 4,
      Po = 5;

    function Wo(UU, XU, zU, cU) {
      UU.drawOffset(XU, cU + Bo), XU[cU + Zo] = UU.drawTime(), zU[cU + Ro] = UU.ring.drawStart(), zU[cU + Po] = UU.ring.drawCount()
    }
    const Lo = `\n${Hc}\n\nconst MAX_STOPS = ${Go.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Go.c/4}>,\n\tcolor1: array<vec4f, ${Go.c}>,\n\tcolor2: array<vec4f, ${Go.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Go.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Go.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var eo = zU(44281);
    class Co {
      constructor(UU, XU, zU, cU) {
        this.device = UU, this.system = XU, this.frameIndex = zU, this.bindings = cU, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, eo.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (UU, XU) => {
          this.device.queue.writeBuffer(this.ring, UU * Go.f * 4, this.system.ring.records, UU * Go.f, (XU - UU) * Go.f)
        };
        const {
          name: yU
        } = XU;
        this.ring = UU.createBuffer({
          label: `particles-${yU}`,
          size: XU.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = UU.createBuffer({
          label: `particles-uniforms-${yU}`,
          size: 4 * Go.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(UU) {
        const XU = (0, eo.b)(this.system, this.uniformBits, UU);
        XU && (this.uniformBits = XU, this.device.queue.writeBuffer(this.uniforms, 0, XU))
      }
      bind() {
        const {
          system: UU
        } = this, XU = this.texture;
        (0, eo.m)(UU, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${UU.name}`,
          size: [Go.n, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Go.n
        }, [Go.n, 1]));
        const zU = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === XU.view && this.boundSampler === XU.sampler && this.boundRamp === zU || (this.boundView = XU.view, this.boundSampler = XU.sampler, this.boundRamp = zU, this.bindGroup = this.device.createBindGroup({
          label: `particles-${UU.name}`,
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
            resource: XU.sampler
          }, {
            binding: 3,
            resource: XU.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: zU
          }]
        }))
      }
      destroy() {
        var UU;
        this.ring.destroy(), this.uniforms.destroy(), null === (UU = this.ramp) || void 0 === UU || UU.destroy()
      }
    }
    class wo {
      constructor(UU, XU) {
        this.device = UU, this.resources = XU, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, OX.e)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (UU, XU) => (this.bindTarget(XU), {
            renderable: this.renderable,
            pipeline: CX(this.device, XU),
            draw: UU => XU === this.preparedTarget ? this.draw(UU) : 0
          })
        }
      }
      rebind(UU) {
        this.device = UU, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [XU, zU] of this.systems) {
          const cU = new Co(UU, XU, zU.frameIndex, this.bindings),
            yU = XU.ring.drawCount();
          yU > 0 && cU.upload(0, yU), this.systems.set(XU, cU)
        }
      }
      build() {
        const {
          device: UU
        } = this, XU = UU.createBindGroupLayout({
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
        this.frameLayout = UU.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = UU.createPipelineLayout({
          bindGroupLayouts: [PX(UU), XU, this.frameLayout]
        }), this.module = UU.createShaderModule({
          label: "particles",
          code: Lo
        });
        const zU = UU.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        UU.queue.writeTexture({
          texture: zU
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: XU,
          rampSampler: UU.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: zU.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get TyU() {
        return this.systems.size
      }
      reset() {
        for (const UU of this.systems.keys()) UU.reset()
      }
      describePendingWork() {
        return (0, ko.d)(this.systems.keys(), "Lite")
      }
      lH(UU, XU) {
        const zU = new ko.c(UU, XU, this);
        return this.systems.set(zU, new Co(this.device, zU, this.allocateFrameIndex(), this.bindings)), zU
      }
      VUU(UU, XU) {
        for (const zU of this.systems.keys()) zU.VUU(UU, XU)
      }
      canDraw(UU) {
        const XU = this.systems.get(UU),
          zU = UU.texture ? this.resources.boundTexture(UU.texture) : null;
        if (!XU || !zU || !this.targetPipelines) return !1;
        if (XU.texture = zU, XU.pipelines.length = 0, !yX(UU.blendMode)) return this.warnOnce(`blend:${UU.blendMode}`, `particle blend mode ${UU.blendMode} is not drawn (${UU.name})`), !0;
        const cU = (0, lU.h)(UU.blendMode);
        for (const yU of cU) {
          const UU = this.pipelineFor(yU);
          if (!1 === UU) return XU.pipelines.length = 0, !0;
          UU && XU.pipelines.push(UU)
        }
        return XU.pipelines.length === cU.length
      }
      disposeStopped(UU) {
        UU.dispose()
      }
      remove(UU) {
        const XU = this.systems.get(UU);
        XU && (this.systems.delete(UU), XU.destroy(), this.freeFrameIndices.push(XU.frameIndex))
      }
      prepare(UU) {
        const XU = UU.animationRatio || 1;
        wX(this.renderable._worldCenter, UU, dX), this.preparedTarget = this.target, this.draws.length = 0;
        let zU = 0;
        for (const cU of this.systems.values()) {
          const UU = cU.system;
          if (!UU.animateIfActive(XU)) continue;
          if (UU.ring.takeUploads(cU.upload), !UU.hasLiveParticles() || 0 === cU.pipelines.length) continue;
          cU.writeUniforms(this.warnOnce), cU.bind();
          const yU = 64 * cU.frameIndex;
          cU.count = UU.ring.drawCount(), Wo(UU, this.frameData, this.frameBits, yU), zU = Math.max(zU, yU + 64), this.draws.push(cU)
        }
        zU > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, zU)
      }
      draw(UU) {
        let XU = 0,
          zU = null;
        for (const cU of this.draws) {
          UU.setBindGroup(1, cU.bindGroup), UU.setBindGroup(2, this.frameBindGroup, [256 * cU.frameIndex]);
          for (const yU of cU.pipelines) yU !== zU && (UU.setPipeline(yU), zU = yU), UU.draw(4, cU.count), XU++
        }
        return XU
      }
      bindTarget(UU) {
        this.target = UU;
        const XU = `${UU._colorFormat}|${UU._depthStencilFormat}|${UU._depthCompare}|${UU._sampleCount}`;
        let zU = this.pipelines.get(XU);
        zU || (zU = new Map, this.pipelines.set(XU, zU)), this.targetPipelines = zU
      }
      pipelineFor(UU) {
        var XU;
        const zU = this.targetPipelines,
          cU = zU.get(UU);
        if (void 0 !== cU) return cU;
        zU.set(UU, null);
        const yU = this.target,
          QU = UU === lU.b,
          AU = null !== (XU = yU._depthCompare) && void 0 !== XU ? XU : WX,
          {
            device: FU
          } = this;
        return FU.createRenderPipelineAsync({
          label: `particles-${UU}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: kX({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: QU ? 1 : 0
            }
          }, yU, QX((0, lU.g)(UU))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: yU._depthStencilFormat ? {
            format: yU._depthStencilFormat,
            depthCompare: AU,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: yU._sampleCount
          }
        }).then((XU => {
          zU.set(UU, XU)
        }), (XU => {
          zU.set(UU, !1), console.error("Lite particle pipeline failed", XU), EX(FU, "particles", `blend-${UU}`, XU)
        })), null
      }
      allocateFrameIndex() {
        const UU = this.freeFrameIndices.pop();
        if (void 0 !== UU) return UU;
        const XU = this.nextFrameIndex++;
        if (64 * (XU + 1) > this.frameData.length) {
          const UU = new Float32Array(2 * this.frameData.length);
          UU.set(this.frameData), this.frameData = UU, this.frameBits = new Uint32Array(UU.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return XU
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
    class qo {
      constructor(UU, XU, zU, cU, yU) {
        this.lite = UU, this.canvas = XU, this.info = zU, this.resources = yU, this.XyU = !1, this.needPOTTextures = !1, this.I6 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = XU.width, this.renderHeight = XU.height, this.caps = {
          maxTextureSize: cU.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: cU.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(UU) {
        this.lite = UU, (0, vU.l)(UU, this.renderWidth, this.renderHeight)
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
      setSize(UU, XU) {
        if (this.renderWidth === UU && this.renderHeight === XU) return !1;
        const zU = this.renderWidth,
          cU = this.renderHeight;
        this.renderWidth = UU, this.renderHeight = XU;
        const yU = this.lite;
        if (null === yU) return !0;
        try {
          (0, vU.l)(yU, UU, XU)
        } catch (QU) {
          if (QU instanceof DOMException && "InvalidStateError" === QU.name) {
            this.renderWidth = zU, this.renderHeight = cU;
            try {
              (0, vU.l)(yU, zU, cU)
            } catch {
              this.canvas.width = zU, this.canvas.height = cU
            }
            return console.warn("WebGPU could not allocate render targets for resize", UU, XU, QU.message), !1
          }
          throw QU
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
      zB() {
        const UU = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : UU - this.lastFrameTime, this.lastFrameTime = UU
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(UU, XU) {
        const zU = document.createElement("canvas");
        return zU.width = UU, zU.height = XU, zU
      }
      w6(UU, XU) {
        var zU;
        return null !== (zU = this.resources.w6.get(UU)) && void 0 !== zU ? zU : new NX(this.resources, UU, XU)
      }
      atlasArrays(UU) {
        return this.resources.atlasArrays(UU)
      }
    }
    class Oo {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(UU) {
        this.fov = UU.fov, this.nearPlane = UU.near, this.farPlane = UU.far;
        const XU = UU.worldMatrix;
        for (let zU = 0; zU < 16; zU++)
          if (this.worldMatrix[zU] !== XU[zU]) return this.worldMatrix.set(XU), void this.worldMatrixVersion++
      }
    }
    class So {
      constructor(UU, XU, zU, cU) {
        this.canvas = XU, this.options = zU, this.rzU = void 0, this.backendName = "WebGPU (Lite)", this.pUU = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Oo, this.lastFrameTime = 0, this.engine = void 0, this.sa = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.WY = null, this.firstTerrain = null, this.trialFrames = 0, this.install(UU);
        const {
          resources: yU,
          meshes: QU
        } = UU;
        this.resources = yU, this.particles = UU.particles, this.rzU = new qo(UU.engine, XU, cU, UU.device.limits, yU), (0, eU.E)({
          uD: UU => {
            OU(UU) && yU.textureSlot(UU)
          },
          loaded: UU => OU(UU) ? yU.textureLoaded(UU) : null,
          canvasUpdated: (UU, XU, zU) => {
            OU(UU) && yU.canvasUpdated(UU, XU, zU)
          }
        }), this.pUU = QU.pUU, this.modelMeshes = QU.modelMeshes
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
      install(UU) {
        this.engine = UU.engine, this.sa = UU.sa, this.sceneTask = UU.sceneTask, this.device = UU.device, this.liteTerrain = UU.terrain, this.meshes = UU.meshes, this.sunShadow = UU.sunShadow;
        const XU = new nU(UU.device.lost);
        this.refusals = XU, XU.deviceLost.then((() => {
          var XU;
          XU = UU.device, oX.add(XU)
        })), UU.sa.camera = this.camera
      }
      async rebuild() {
        var UU, XU, zU, cU, yU;
        const QU = await io();
        this.halted = !0, this.liteTerrain.retire(), null === (UU = this.sunShadow) || void 0 === UU || UU.dispose(), this.rzU.detach();
        try {
          (0, VU.e)(this.engine)
        } catch (EU) {
          console.warn("Lite: disposing the lost device's engine threw", EU)
        }
        const AU = {
            width: this.rzU.renderWidth,
            height: this.rzU.renderHeight
          },
          FU = await Ho(this.canvas, this.options, AU, QU),
          oU = BX(FU),
          DU = Mo(oU);
        try {
          this.resources.rebind(FU, oU), this.particles.rebind(oU), this.pUU.dropSteady();
          const UU = {
              resources: this.resources,
              particles: this.particles,
              pUU: this.pUU,
              modelMeshes: this.modelMeshes
            },
            XU = await vo(FU, oU, this.options, UU),
            zU = DU();
          if (null !== zU) throw new Error(`WebGPU device lost while Lite was rebuilding (${zU.reason}): ${zU.message}`);
          const {
            r: cU,
            g: yU,
            b: QU
          } = this.sa.clearColor;
          this.install(XU), this.setClearColour(cU, yU, QU), this.rzU.rebind(FU)
        } catch (EU) {
          throw oU.destroy(), EU
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (XU = this.WY) || void 0 === XU || XU.resize(), null === (zU = this.WY) || void 0 === zU || null === (cU = zU.WN) || void 0 === cU || null === (yU = cU.yB) || void 0 === yU || yU.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((UU, XU) => {
          this.firstTerrain = {
            drawn: UU,
            failed: XU
          }
        }))
      }
      get castsEntitySunShadows() {
        var UU, XU;
        return null !== (UU = null === (XU = this.sunShadow) || void 0 === XU ? void 0 : XU.tracesEntities) && void 0 !== UU && UU
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(UU) {
        this.WY = UU, this.modelMeshes.attach(UU.model, UU.sceneMirror);
        const XU = UU.sa;
        this.setClearColour(XU.clearColor.r, XU.clearColor.g, XU.clearColor.b), XU.draw = () => {
          this.drawFrame(UU, XU)
        }
      }
      get BY() {
        return !this.refusals.lost && !this.halted
      }
      render(UU) {
        if (this.BY) {
          try {
            this.rzU.zB(), UU.sa.render()
          } catch (XU) {
            throw this.refusals.frameFailed(XU), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(XU), this.firstTerrain = null), XU
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var UU, XU, zU, cU;
        const yU = [...this.particles.describePendingWork(), ...null !== (UU = null === (XU = this.sunShadow) || void 0 === XU ? void 0 : XU.describePendingWork()) && void 0 !== UU ? UU : []],
          QU = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (zU = this.terrain.sceneDepth) && void 0 !== zU && zU.compiling ? 1 : 0) + (null !== (cU = this.terrain.shadowMask) && void 0 !== cU && cU.compiling ? 1 : 0);
        QU > 0 && yU.push(`${QU} Lite pipelines compiling`);
        const AU = this.terrain.buffersAwaitingVerdict;
        AU > 0 && yU.push(`${AU} Lite terrain buffers awaiting their out-of-memory verdict`);
        const FU = this.resources.texturesLoading;
        return FU > 0 && yU.push(`${FU} Lite textures loading`), yU
      }
      prepareTexture(UU) {
        return null !== this.resources.boundTexture(UU) || this.resources.textureFailed(UU)
      }
      drawFrame(UU, XU) {
        var zU, cU, yU, QU, AU, FU;
        const oU = tF(UU);
        this.camera.copyFromView(oU), this.setClearColour(oU.clearColour[0], oU.clearColour[1], oU.clearColour[2]), null === (zU = this.sunShadow) || void 0 === zU || zU.prepare(UU.WN, oU.eye, null !== (cU = UU.WN.Fp) && void 0 !== cU ? cU : null), this.terrain.prepare(UU, oU), null === (yU = this.terrain.sceneDepth) || void 0 === yU || yU.setPlanes(oU.near, oU.far), null === (QU = this.terrain.shadowMask) || void 0 === QU || QU.prepare(oU), XF(this.sceneTask), this.meshes.prepare(XU, oU, UU.model.earthSky, null !== (AU = UU.WN.Fp) && void 0 !== AU ? AU : null), this.particles.prepare(oU);
        const DU = performance.now();
        this.resources.flushUploads(), null === (FU = this.sunShadow) || void 0 === FU || FU.traceEntities(this.meshes);
        try {
          (0, vU.j)(this.engine, this.lastFrameTime > 0 ? DU - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = DU, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(DU), this.firstTerrain = null)
      }
      setClearColour(UU, XU, zU) {
        const cU = this.sa.clearColor;
        cU.r = UU, cU.g = XU, cU.b = zU, cU.a = 1
      }
    }

    function ro(UU) {
      const XU = {};
      for (const zU in UU.limits) {
        const cU = UU.limits[zU];
        "number" === typeof cU && (XU[zU] = cU)
      }
      return XU
    }
    const uo = "WebGPU device lost while Lite was starting";
    async function fo(UU, XU) {
      const zU = await io(),
        cU = zU.info,
        yU = {
          vendor: (null === cU || void 0 === cU ? void 0 : cU.vendor) || "unknown vendor",
          renderer: (null === cU || void 0 === cU ? void 0 : cU.architecture) || "unknown renderer",
          version: (null === cU || void 0 === cU ? void 0 : cU.description) || "unknown version"
        };
      UU.style.background = "black";
      const QU = await Ho(UU, XU, XU.bufferSize, zU),
        AU = BX(QU),
        FU = Mo(AU);
      try {
        const zU = new So(await vo(QU, AU, XU, null), UU, XU, yU),
          cU = FU();
        if (null !== cU) {
          const {
            reason: UU,
            message: XU
          } = cU;
          throw Object.assign(new Error(`${uo} (${UU}): ${XU}`), {
            fallbackReason: uo
          })
        }
        return zU
      } catch (oU) {
        throw AU.destroy(), null === FU() ? oU : (0, UF.g)(oU, "device")
      }
    }
    async function io() {
      const UU = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!UU) throw (0, UF.g)(new Error("No WebGPU adapter"), "no_adapter");
      return UU
    }
    async function Ho(UU, XU, zU, cU) {
      let yU;
      try {
        yU = await (0, vU.e)(UU, {
          msaaSamples: XU.NcU ? 4 : 1,
          requiredLimits: ro(cU),
          alphaMode: "premultiplied"
        })
      } catch (AU) {
        throw (0, UF.g)(AU, "#47" === (null === (QU = AU) || void 0 === QU ? void 0 : QU.message) ? "no_adapter" : "device")
      }
      var QU;
      return null !== zU && (0, vU.l)(yU, zU.width, zU.height), yU
    }

    function Mo(UU) {
      let XU = null;
      return UU.lost.then((UU => {
        XU = UU, console.error(`WebGPU device lost (${UU.reason}): ${UU.message}`)
      })), () => XU
    }
    async function vo(UU, XU, zU, cU) {
      var yU, QU;
      let {
        sceneDepth: AU,
        sunShadow: FU
      } = zU;
      const oU = (0, sU.c)(UU),
        DU = null !== (yU = null === cU || void 0 === cU ? void 0 : cU.resources) && void 0 !== yU ? yU : new bA(UU, XU),
        EU = new hF(XU),
        YU = new SA(XU, DU, (UU => function(UU, XU) {
          for (const cU of ZX(UU)) {
            var zU;
            if (cU._targetSignature === XU) return null !== (zU = cU._sceneBG) && void 0 !== zU ? zU : null
          }
          return null
        }(oU, UU)), null === cU || void 0 === cU ? void 0 : cU.pUU, null === cU || void 0 === cU ? void 0 : cU.modelMeshes),
        NU = null !== (QU = null === cU || void 0 === cU ? void 0 : cU.particles) && void 0 !== QU ? QU : new wo(XU, DU);
      for (const aU of function(UU, XU, zU) {
          return [XU.opaqueRenderable, UU.opaqueRenderable, UU.skyLastRenderable, zU.renderable, XU.transparentRenderable, UU.transparentRenderable, UU.frontRenderable]
        }(YU, EU, NU)) GX(oU, aU);
      const IU = function(UU) {
        for (const XU of ZX(UU))
          if ("sa" === XU.name) return XU;
        throw new Error("Lite: the scene has no render task named scene")
      }(oU);
      AU && EU.installSceneDepth(IU, UU);
      const pU = FU ? new go(XU, FU.entities) : null;
      return EU.sunShadow = pU, pU && null !== FU && void 0 !== FU && FU.entities && (EU.shadowMask = new OF(XU, IU, UU, EU)), YU.sunShadow = pU, await (0, sU.e)(oU), {
        engine: UU,
        sa: oU,
        sceneTask: IU,
        device: XU,
        terrain: EU,
        meshes: YU,
        sunShadow: pU,
        resources: DU,
        particles: NU
      }
    }
  },
  41770: (UU, XU, zU) => {
    zU.d(XU, {
      D: () => aU,
      E: () => IU,
      I: () => pU,
      d: () => yU,
      h: () => cU,
      l: () => NU,
      m: () => EU,
      o: () => tU,
      r: () => QU,
      u: () => FU,
      y: () => oU,
      z: () => AU
    });
    const cU = 3,
      yU = 0,
      QU = 1,
      AU = 2,
      FU = {
        uniform: 3,
        lN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      oU = 10,
      DU = "BloxdPackInputs",
      EU = "bloxdPackInputs",
      YU = [{
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
      NU = 80;

    function IU() {
      const UU = YU.map((UU => {
        let {
          name: XU,
          type: zU
        } = UU;
        return `    ${XU}: ${zU},\n`
      })).join("");
      return `struct ${DU} {\n${UU}}\n@group(${cU}) @binding(${yU}) var<uniform> ${EU}: ${DU};\n`
    }

    function pU(UU, XU) {
      const zU = new DataView(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, NU),
        [cU, yU, QU, AU, FU, oU] = YU;
      zU.setFloat32(cU.offset, XU.seconds, !0), zU.setUint32(yU.offset, XU.lit ? 1 : 0, !0);
      for (let DU = 0; DU < 3; DU++) zU.setInt32(QU.offset + 4 * DU, XU.renderOffset[DU], !0), zU.setFloat32(AU.offset + 4 * DU, XU.hUU[DU], !0), zU.setFloat32(FU.offset + 4 * DU, XU.eyePosition[DU], !0), zU.setFloat32(oU.offset + 4 * DU, XU.shadowDirection[DU], !0)
    }

    function aU(UU) {
      const XU = new Uint32Array(Math.max(1, UU.length));
      return UU.forEach(((UU, zU) => {
        let {
          id: cU,
          rotation: yU
        } = UU;
        XU[zU] = 65535 & cU | (3 & yU) << 16
      })), XU
    }
    const tU = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);