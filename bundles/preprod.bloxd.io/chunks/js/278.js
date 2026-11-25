export const id = 278;
export const ids = [278];
export const modules = {
  41851: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => yQ,
      f: () => sQ,
      i: () => zQ,
      j: () => PQ
    });
    var wQ = XQ(37539),
      qQ = XQ(38986),
      TQ = XQ(38979);

    function zQ(QQ, WQ, XQ, wQ) {
      const qQ = TQ.u;
      WQ.fill(0), QQ.gravity.toArray(WQ, qQ.gravity), QQ.colorDead.toArray(WQ, qQ.colorDead), XQ[qQ.ramp] = QQ.useRampGradients ? 1 : 0;
      const zQ = QQ.getColorGradients(),
        sQ = rQ(QQ, zQ, "colour", wQ);
      XQ[qQ.colorCount] = sQ;
      for (let TQ = 0; TQ < sQ; TQ++) {
        var FQ;
        const QQ = zQ[IQ(zQ, TQ)];
        WQ[qQ.colorPositions + TQ] = QQ.gradient, QQ.color1.toArray(WQ, qQ.color1 + 4 * TQ), (null !== (FQ = QQ.color2) && void 0 !== FQ ? FQ : QQ.color1).toArray(WQ, qQ.color2 + 4 * TQ)
      }
      const PQ = QQ.getVelocityGradients(),
        gQ = rQ(QQ, PQ, "Fy", wQ);
      XQ[qQ.velocityCount] = gQ;
      for (let TQ = 0; TQ < gQ; TQ++) DQ(WQ, qQ.Fy + 4 * TQ, PQ[IQ(PQ, TQ)]);
      const JQ = QQ.useRampGradients ? QQ.getColorRemapGradients() : null,
        jQ = rQ(QQ, JQ, "colour remap", wQ);
      XQ[qQ.remapCount] = jQ;
      for (let TQ = 0; TQ < jQ; TQ++) DQ(WQ, qQ.remap + 4 * TQ, JQ[IQ(JQ, TQ)])
    }

    function sQ() {
      return {
        key: [],
        texels: new Uint8Array(4 * TQ.l)
      }
    }
    const FQ = [];

    function PQ(QQ, WQ) {
      return gQ(QQ, FQ), !VQ(FQ, WQ.key) && (WQ.key.length = 0, WQ.key.push(...FQ), WQ.key.length > 0 && function(QQ, WQ) {
        for (let XQ = 0; XQ < TQ.l; XQ++) qQ.l.GetCurrentGradient(XQ / TQ.l, QQ, ((QQ, WQ, XQ) => {
          wQ.Color3.LerpToRef(QQ.color, WQ.color, XQ, JQ)
        })), WQ[4 * XQ] = 255 * JQ.r, WQ[4 * XQ + 1] = 255 * JQ.g, WQ[4 * XQ + 2] = 255 * JQ.b, WQ[4 * XQ + 3] = 255
      }(QQ.getRampGradients(), WQ.texels), !0)
    }

    function gQ(QQ, WQ) {
      WQ.length = 0;
      const XQ = QQ.useRampGradients ? QQ.getRampGradients() : null;
      if (null !== XQ && void 0 !== XQ && XQ.length) {
        WQ.push(XQ.length);
        for (const QQ of XQ) WQ.push(QQ.gradient, QQ.color.r, QQ.color.g, QQ.color.b)
      }
    }
    const JQ = new wQ.Color3;

    function rQ(QQ, WQ, XQ, wQ) {
      return WQ ? WQ.length > TQ.e ? (wQ(`particleStops:${XQ}`, `GPU particles use the first 2 and last ${TQ.e-2} of more than ${TQ.e} ${XQ} gradient stops (${QQ.name})`), TQ.e) : WQ.length : 0
    }

    function IQ(QQ, WQ) {
      return WQ < 2 || QQ.length <= TQ.e ? WQ : QQ.length - TQ.e + WQ
    }
    const jQ = new Float32Array(TQ.q),
      BQ = new Uint32Array(jQ.buffer);

    function yQ(QQ, WQ, XQ) {
      return zQ(QQ, jQ, BQ, XQ), WQ && VQ(BQ, WQ) ? null : BQ.slice()
    }

    function VQ(QQ, WQ) {
      if (QQ.length !== WQ.length) return !1;
      for (let XQ = 0; XQ < QQ.length; XQ++)
        if (QQ[XQ] !== WQ[XQ]) return !1;
      return !0
    }

    function DQ(QQ, WQ, XQ) {
      var wQ;
      QQ[WQ] = XQ.gradient, QQ[WQ + 1] = XQ.factor1, QQ[WQ + 2] = null !== (wQ = XQ.factor2) && void 0 !== wQ ? wQ : XQ.factor1
    }
  },
  41366: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ) {
      const wQ = WQ * WQ * 4,
        qQ = QQ[0].layers,
        TQ = qQ * (QQ.length - 1) + QQ[QQ.length - 1].layers,
        zQ = new Uint8Array(TQ * wQ);
      QQ.forEach(((WQ, XQ) => {
        const TQ = XQ + 1 < QQ.length ? Math.min(WQ.layers, qQ) : WQ.layers;
        zQ.set(new Uint8Array(WQ.pixels.buffer, WQ.pixels.byteOffset, TQ * wQ), XQ * qQ * wQ)
      }));
      const sQ = Math.max(1, Math.min(TQ, XQ || TQ));
      if (sQ === TQ) return [{
        pixels: zQ,
        layers: TQ
      }];
      const FQ = [];
      for (let PQ = 0; PQ < TQ; PQ += sQ) {
        const QQ = Math.min(TQ, PQ + sQ);
        FQ.push({
          pixels: zQ.slice(PQ * wQ, QQ * wQ),
          layers: QQ - PQ
        })
      }
      return FQ
    }
    XQ.d(WQ, {
      b: () => wQ,
      f: () => TQ
    });
    const qQ = new WeakMap;

    function TQ(QQ, WQ, XQ) {
      var wQ, TQ;
      const zQ = null !== (wQ = qQ.get(QQ)) && void 0 !== wQ ? wQ : new Map;
      qQ.set(QQ, zQ);
      const sQ = null !== (TQ = zQ.get(WQ[0])) && void 0 !== TQ ? TQ : [];
      zQ.set(WQ[0], sQ);
      const FQ = sQ.find((QQ => QQ.urls.length === WQ.length && QQ.urls.every(((QQ, XQ) => QQ === WQ[XQ]))));
      if (FQ) return FQ.built;
      const PQ = {
        urls: [...WQ],
        built: XQ()
      };
      return sQ.push(PQ), PQ.built.catch((() => {
        sQ.splice(sQ.indexOf(PQ), 1)
      })), PQ.built
    }
  },
  41842: (QQ, WQ, XQ) => {
    function wQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const WQ = new Set;
      return (XQ, wQ) => {
        WQ.has(XQ) || (WQ.add(XQ), console.warn(QQ + wQ))
      }
    }
    XQ.d(WQ, {
      e: () => wQ
    })
  },
  41883: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      createLiteRendererAsync: () => kF,
      liteBabylonBackend: () => fQ,
      setPipelineFailureHook: () => sW
    });
    var wQ = XQ(37539),
      qQ = XQ(37874),
      TQ = XQ(38186),
      zQ = XQ(37490),
      sQ = XQ(38193);
    class FQ extends sQ.c {
      constructor() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        super(...WQ), this.color = new wQ.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: WQ[0].sE().getUniqueId(),
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
          needAlphaBlendingForMesh: QQ => QQ.visibility < 1 || QQ.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const PQ = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      gQ = QQ => 1 << PQ.indexOf(QQ),
      JQ = gQ("VERTEXCOLOR"),
      rQ = gQ("INSTANCES"),
      IQ = gQ("THIN_INSTANCES"),
      jQ = gQ("INSTANCESCOLOR"),
      BQ = gQ("FOG"),
      yQ = gQ("LITE_FRONT_LAYER");

    function VQ(QQ, WQ, XQ, wQ) {
      let qQ = 0;
      return QQ.isVerticesDataPresent("color") && (qQ |= JQ), "none" !== WQ && (qQ |= rQ), "thin" === WQ && (qQ |= IQ, QQ.isVerticesDataPresent("instanceColor") && (qQ |= jQ)), wQ.fogEnabled && QQ.applyFog && 0 !== wQ.fogMode && (qQ |= BQ), XQ >= 1 && (qQ |= yQ), qQ
    }

    function DQ(QQ, WQ) {
      QQ.updateColor4("color", WQ.color, WQ.alpha)
    }
    var pQ = XQ(38125),
      GQ = XQ(37698),
      UQ = XQ(37582),
      bQ = XQ(37468),
      vQ = XQ(38107),
      dQ = XQ(38116),
      HQ = XQ(37480),
      aQ = XQ(37483),
      lQ = XQ(37492);
    const hQ = bQ.b.GLSL;
    class iQ {
      constructor(QQ, WQ) {
        this.name = QQ, this.cB = WQ, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.yE = {
          addOnce: QQ => {
            this.disposers.push(QQ)
          }
        }, this.uniqueId = WQ.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      sE() {
        return this.cB
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
      needAlphaBlendingForMesh(QQ) {
        return (0, HQ.Q)(this.model, QQ.visibility, QQ.hasVertexAlpha)
      }
      needAlphaTestingForMesh(QQ) {
        return (0, HQ.U)(this.model, QQ.visibility, QQ.hasVertexAlpha)
      }
      dispose() {
        (0, GQ.n)(this);
        for (const QQ of this.disposers.splice(0)) QQ()
      }
      get model() {
        return (0, HQ._)(this)
      }
    }
    const cQ = new WeakSet;

    function AQ(QQ) {
      return cQ.has(QQ)
    }

    function RQ(QQ) {
      cQ.add(QQ)
    }
    const EQ = {
      create: (QQ, WQ) => ((0, UQ.r)(QQ, new iQ(QQ.name, WQ)), aQ.d.defines()),
      write: () => {},
      addFeature: (QQ, WQ) => {
        const XQ = QQ.mirror;
        WQ.feature === dQ.k && WQ.state.dirLightCount > 0 && (QQ.disableLighting = !0, (0, HQ.Z)(QQ)), "BLOXD_LIGHTING" in WQ.defines && (0, GQ.j)(XQ), WQ.feature === vQ.h && ((0, pQ.j)(WQ.state, hQ), function(QQ, WQ) {
          const XQ = QQ.sE().Uj();
          setTimeout((() => {
            XQ.atlasArrays(WQ.sources).then((XQ => {
              (0, pQ.d)(QQ, WQ, XQ.map((QQ => ({
                atlas: QQ,
                layers: QQ.layers
              }))), XQ[0].layerWidth, hQ)
            })).catch((QQ => {
              console.error("Failed to build the atlas's texture arrays", QQ)
            }))
          }))
        }(XQ, WQ.state))
      },
      texture: (QQ, WQ, XQ) => {
        let {
          data: wQ,
          sets: qQ
        } = XQ;
        var TQ;
        (RQ(QQ), wQ) && (QQ.uvSet = null !== (TQ = null === qQ || void 0 === qQ ? void 0 : qQ.coordinatesIndex) && void 0 !== TQ ? TQ : 0, (0, UQ.hb)(QQ.matrix, null !== qQ && void 0 !== qQ ? qQ : {}))
      },
      cube: RQ,
      canvas: (QQ, WQ, XQ) => {
        let {
          width: wQ,
          height: qQ,
          mipmaps: TQ,
          samplingMode: zQ = lQ.j.trilinear,
          hasAlpha: sQ = !1,
          wrap: FQ = lQ.c.clamp
        } = XQ;
        const PQ = QQ.Uj().createCanvas(wQ, qQ),
          gQ = new lQ.n("2d", {
            kind: "canvas",
            width: wQ,
            height: qQ,
            canvas: PQ
          }, {
            samplingMode: zQ,
            wrapU: FQ,
            wrapV: FQ,
            noMipmap: !TQ,
            invertY: !0
          });
        return gQ.hasAlpha = sQ, RQ(gQ), gQ
      }
    };
    var CQ = XQ(37720),
      uQ = XQ(37399);
    class LQ {
      constructor(QQ, WQ, XQ) {
        this.engine = QQ, this.clearColor = WQ, this.ambientColor = XQ, this.onBeforeRenderObservable = new uQ.b, this.onBeforeCameraRenderObservable = new uQ.b, this.onAfterRenderObservable = new uQ.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.KD = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Uj() {
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
      addPendingData(QQ) {
        this.pending.push(QQ)
      }
      removePendingData(QQ) {
        const WQ = this.pending.indexOf(QQ); - 1 !== WQ && this.pending.splice(WQ, 1)
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

    function kQ() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const fQ = {
      fXQ: kQ,
      gqQ: (QQ, WQ) => {
        const XQ = new LQ(QQ.engine, wQ.d.FromArray(WQ.clearColor), wQ.Color3.FromArray(WQ.ambientColor));
        (0, zQ.e)(EQ, XQ), QQ.cB = XQ,
          function(QQ, WQ) {
            const XQ = Object.assign((0, CQ.h)(QQ, "camera"), {
              layerMask: 268435455
            });
            QQ.model.nodes.setWorldSource(XQ.row, QQ.model.view.worldMatrix), QQ.camera = WQ.activeCamera = XQ
          }(QQ, XQ), (0, qQ.k)(QQ, ((QQ, WQ, XQ) => (0, TQ.h)(QQ, WQ, XQ, sQ.c)))
      },
      TqQ: () => {},
      setBabylonFog: () => {},
      rqQ: kQ,
      yqQ: () => {},
      linesFromArrays: (QQ, WQ, XQ) => (0, TQ.h)(QQ, WQ, XQ, FQ),
      AB: () => {},
      BqQ: kQ
    };
    var SQ = XQ(41945),
      tQ = XQ(41957),
      oQ = XQ(41970);
    class eQ {
      constructor(QQ) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const WQ = new Promise((QQ => {
          this.refused = QQ
        }));
        this.deviceLost = Promise.race([QQ, WQ]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(QQ) {
        (function(QQ) {
          const {
            name: WQ,
            message: XQ
          } = null !== QQ && void 0 !== QQ ? QQ : {};
          return "InvalidStateError" === WQ && "string" === typeof XQ && XQ.startsWith("GPUDevice.")
        })(QQ) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: QQ.message,
          framesRefused: !0
        }))
      }
    }
    var nQ = XQ(41366),
      xQ = XQ(38991);

    function YQ(QQ) {
      return Math.max(4, 4 * Math.ceil(QQ / 4))
    }

    function NQ(QQ, WQ, XQ, wQ) {
      const qQ = QQ.createBuffer({
        label: wQ,
        size: YQ(WQ.byteLength),
        usage: XQ,
        mappedAtCreation: !0
      });
      return new Uint8Array(qQ.getMappedRange(), 0, WQ.byteLength).set(new Uint8Array(WQ.buffer, WQ.byteOffset, WQ.byteLength)), qQ.unmap(), qQ
    }

    function ZQ(QQ, WQ) {
      return Math.floor(Math.log2(Math.max(QQ, WQ))) + 1
    }

    function OQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = QQ.createTexture({
          label: TQ,
          size: {
            width: XQ,
            height: wQ,
            depthOrArrayLayers: qQ
          },
          format: "rgba8unorm",
          mipLevelCount: ZQ(XQ, wQ),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        sQ = (WQ, XQ, wQ, TQ) => {
          QQ.queue.writeTexture({
            texture: zQ,
            mipLevel: XQ
          }, WQ, {
            bytesPerRow: 4 * wQ,
            rowsPerImage: TQ
          }, {
            width: wQ,
            height: TQ,
            depthOrArrayLayers: qQ
          })
        };
      sQ(WQ, 0, XQ, wQ);
      let FQ = 1;
      for (const PQ of function*(QQ, WQ, XQ, wQ) {
          let qQ = QQ,
            TQ = WQ,
            zQ = XQ;
          for (; TQ > 1 || zQ > 1;) {
            const QQ = Math.max(1, TQ >> 1),
              WQ = Math.max(1, zQ >> 1),
              XQ = new Uint8Array(QQ * WQ * wQ * 4),
              sQ = 4 * TQ;
            let FQ = 0;
            for (let PQ = 0; PQ < wQ; PQ++) {
              const wQ = PQ * sQ * zQ;
              for (let PQ = 0; PQ < WQ; PQ++) {
                const WQ = wQ + Math.min(2 * PQ, zQ - 1) * sQ,
                  gQ = wQ + Math.min(2 * PQ + 1, zQ - 1) * sQ;
                for (let wQ = 0; wQ < QQ; wQ++) {
                  const QQ = 4 * Math.min(2 * wQ, TQ - 1),
                    zQ = 4 * Math.min(2 * wQ + 1, TQ - 1);
                  for (let wQ = 0; wQ < 4; wQ++) XQ[FQ++] = qQ[WQ + QQ + wQ] + qQ[WQ + zQ + wQ] + qQ[gQ + QQ + wQ] + qQ[gQ + zQ + wQ] + 2 >> 2
                }
              }
            }
            yield {
              data: XQ,
              width: QQ,
              height: WQ
            }, qQ = XQ, TQ = QQ, zQ = WQ
          }
        }(WQ, XQ, wQ, qQ)) sQ(PQ.data, FQ++, PQ.width, PQ.height);
      return zQ
    }
    const KQ = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function mQ(QQ) {
      if (QQ.startsWith("data:")) {
        const WQ = QQ.search(/[;,]/);
        return `data:${WQ>5?QQ.slice(5,WQ):""} URL of ${QQ.length} characters`
      }
      return QQ.length > 80 ? `${QQ.slice(0,80)}...` : QQ
    }
    async function MQ(QQ) {
      const WQ = await fetch(QQ);
      if (!WQ.ok) throw new Error(`${mQ(QQ)}: ${WQ.status} ${WQ.statusText}`);
      return createImageBitmap(await WQ.blob(), KQ)
    }
    async function QW(QQ) {
      const WQ = await MQ(QQ),
        XQ = new OffscreenCanvas(WQ.width, WQ.height),
        wQ = XQ.getContext("2d", {
          willReadFrequently: !0
        });
      if (!wQ) throw new Error("No 2D context to decode an image");
      wQ.drawImage(WQ, 0, 0);
      const {
        data: qQ
      } = wQ.getImageData(0, 0, WQ.width, WQ.height);
      return WQ.close(), {
        pixels: new Uint8Array(qQ.buffer, qQ.byteOffset, qQ.byteLength),
        width: XQ.width,
        height: XQ.height
      }
    }

    function WW(QQ, WQ) {
      return (0, nQ.f)(QQ, WQ.urls, (async () => {
        const XQ = await Promise.all(WQ.urls.map((async (QQ, XQ) => {
            var wQ, qQ, TQ, zQ, sQ;
            return null !== (zQ = null !== (qQ = null === (TQ = WQ.pixels) || void 0 === TQ ? void 0 : TQ[XQ]) && void 0 !== qQ ? qQ : null, sQ = WQ.layerWidth, wQ = null !== zQ && void 0 !== zQ && zQ.byteLength && sQ && zQ.byteLength % (sQ * sQ * 4) === 0 ? {
              pixels: zQ,
              layerWidth: sQ,
              layers: zQ.byteLength / (sQ * sQ * 4)
            } : null) && void 0 !== wQ ? wQ : await async function(QQ) {
              const {
                pixels: WQ,
                width: XQ
              } = await QW(QQ);
              return {
                pixels: WQ,
                layerWidth: XQ,
                layers: WQ.byteLength / (XQ * XQ * 4)
              }
            }(QQ)
          }))),
          wQ = XQ[0].layerWidth;
        return (0, nQ.b)(XQ, wQ, QQ.limits.maxTextureArrayLayers).map(((XQ, qQ) => {
          let {
            pixels: TQ,
            layers: zQ
          } = XQ;
          return {
            texture: OQ(QQ, TQ, wQ, wQ, zQ, `atlas-${qQ}-${mQ(WQ.urls[0])}`),
            layerWidth: wQ,
            layers: zQ
          }
        }))
      }))
    }
    const XW = new Map([
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
      wW = new Map([
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

    function qW(QQ) {
      for (const WQ of (0, xQ.l)(QQ))
        if (!wW.has((0, xQ.i)(WQ))) return !1;
      return !0
    }

    function TW(QQ) {
      const WQ = wW.get(QQ);
      if (!WQ) return null;
      const [XQ, wQ, qQ] = WQ;
      return {
        srcFactor: XW.get(XQ),
        dstFactor: XW.get(wQ),
        operation: qQ
      }
    }
    let zW = null;

    function sW(QQ) {
      zW = QQ
    }
    const FW = new WeakSet;

    function PW(QQ) {
      return FW.has(QQ)
    }

    function gW(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var TQ;
      PW(QQ) || (null === (TQ = zW) || void 0 === TQ || TQ(WQ, XQ, wQ, qQ))
    }
    class JW {
      constructor(QQ) {
        this.resources = QQ, this.matrixKey = {
          yJ: 0
        }, this.attributesKey = {
          yJ: 0
        }, this.inputs = Object.create(null);
        for (let WQ = 0; WQ < 4; WQ++) this.inputs[`world${WQ}`] = new jW(this.matrixKey, 16 * WQ, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(QQ, WQ) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, QQ, !0), WQ && this.resources.vertexBufferCreated(this.attributesKey, WQ, !0)
      }
    }
    class rW extends JW {
      constructor(QQ, WQ, XQ) {
        super(QQ), this.mesh = WQ, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const wQ = this.inputs;
        let qQ = 0;
        for (const {
            size: zQ
          }
          of XQ) qQ += zQ;
        for (const {
            name: zQ,
            offset: sQ,
            size: FQ,
            type: PQ
          }
          of XQ) wQ[zQ] = new jW(this.attributesKey, 4 * sQ, 4 * qQ, FQ, !0, PQ);
        this.rowStride = qQ, QQ.K4.set(WQ, this);
        const TQ = WQ.isVerticesDataPresent;
        WQ.isVerticesDataPresent = (QQ, XQ) => QQ in wQ || TQ.call(WQ, QQ, XQ)
      }
      attach(QQ, WQ) {
        this.matrices = QQ, this.attributes = WQ, this.bind(QQ, WQ), this.mirror(QQ, QQ.length, QQ.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      m_(QQ) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, QQ ? 64 * QQ : void 0)
      }
      M_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(QQ, WQ) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * QQ, 16 * WQ)
      }
      attributeRows(QQ, WQ) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, QQ * this.rowStride, WQ * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(QQ, WQ, XQ) {
        const wQ = this.mesh._thinInstanceDataStorage;
        wQ.matrixData = QQ, wQ.matrixBufferSize = WQ, wQ.worldMatrices = null, wQ.instancesCount = XQ
      }
    }
    class IW extends JW {
      constructor(QQ, WQ, XQ) {
        var wQ, qQ, TQ, zQ;
        super(QQ), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (wQ = null === XQ || void 0 === XQ ? void 0 : XQ.interleavedKinds) && void 0 !== wQ ? wQ : null, this.offsets = null !== (qQ = null === XQ || void 0 === XQ ? void 0 : XQ.interleavedOffsets) && void 0 !== qQ ? qQ : [], this.rowStride = null !== (TQ = null === XQ || void 0 === XQ ? void 0 : XQ.interleavedRowStride) && void 0 !== TQ ? TQ : 0, null === (zQ = this.layout) || void 0 === zQ || zQ.forEach(((QQ, WQ) => {
          this.inputs[QQ] = new jW(this.attributesKey, 4 * this.offsets[WQ], 4 * this.rowStride, XQ.strides[QQ])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), QQ.batchUploads.set(WQ, this), WQ.yE.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(QQ) {
        const WQ = this.packedBatch;
        return WQ.renderSelf ? 0 === QQ ? this.packedSource : WQ.instances[QQ - 1] : WQ.instances[QQ]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(QQ, WQ, XQ, wQ) {
        const qQ = (WQ.renderSelf ? 1 : 0) + WQ.rows.length;
        if (this.frame = wQ, this.count = qQ, this.packedSource = QQ, this.packedBatch = WQ, 0 === qQ) return;
        if (QQ.getWorldMatrix(), 16 * qQ > this.matrices.length) {
          let QQ = this.matrices.length / 16;
          for (; QQ < qQ;) QQ *= 2;
          this.matrices = new Float32Array(16 * QQ), this.attributes &&= new Float32Array(QQ * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let TQ = 0;
        WQ.renderSelf && this.packRow(TQ++, QQ, WQ.row, XQ);
        for (let zQ = 0; zQ < WQ.rows.length; zQ++) this.packRow(TQ++, WQ.instances[zQ], WQ.rows[zQ], XQ);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * qQ), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, qQ * this.rowStride)
      }
      packRow(QQ, WQ, XQ, wQ) {
        const qQ = this.matrices;
        if (XQ < 0) qQ.set(WQ.getWorldMatrix().m, 16 * QQ);
        else
          for (let PQ = 0; PQ < 16; PQ++) qQ[16 * QQ + PQ] = wQ[16 * XQ + PQ];
        const TQ = this.attributes;
        if (!TQ) return;
        const zQ = WQ.bC,
          sQ = this.layout;
        for (let PQ = 0; PQ < sQ.length; PQ++) {
          var FQ;
          const WQ = null !== (FQ = zQ[sQ[PQ]]) && void 0 !== FQ ? FQ : 0,
            XQ = QQ * this.rowStride + this.offsets[PQ];
          WQ.toArray ? WQ.toArray(TQ, XQ) : WQ.copyToArray ? WQ.copyToArray(TQ, XQ) : TQ[XQ] = WQ
        }
      }
    }
    class jW {
      constructor(QQ, WQ, XQ, wQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = QQ, this.byteOffset = WQ, this.byteStride = XQ, this.size = wQ, this.instanced = qQ, this.type = TQ, this.normalized = zQ
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
    const BW = "CANVAS_ALPHA_ONE",
      yW = `override ${BW}: bool = false;`,
      VW = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function DW(QQ, WQ, XQ) {
      var wQ;
      let qQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const TQ = null !== (wQ = WQ._colorFormat) && void 0 !== wQ ? wQ : "bgra8unorm",
        zQ = qQ ? 15 : 0;
      return XQ ? {
        ...QQ,
        targets: [{
          format: TQ,
          blend: {
            color: XQ,
            alpha: VW
          },
          writeMask: zQ
        }]
      } : {
        ...QQ,
        constants: {
          ...QQ.constants,
          [BW]: 1
        },
        targets: [{
          format: TQ,
          writeMask: zQ
        }]
      }
    }

    function pW(QQ, WQ) {
      QQ._renderables.push(WQ)
    }

    function GW(QQ) {
      return QQ._device
    }

    function UW(QQ) {
      var WQ, XQ;
      return null !== (WQ = null === (XQ = QQ._frameGraph) || void 0 === XQ ? void 0 : XQ._tasks) && void 0 !== WQ ? WQ : []
    }

    function bW(QQ) {
      return QQ._currentEncoder
    }

    function vW(QQ) {
      return QQ.createBindGroupLayout({
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
    const dW = "greater-equal",
      HW = 2e5,
      aW = 1e5,
      lW = new WeakMap;

    function hW(QQ, WQ) {
      let XQ = lW.get(QQ);
      if (!XQ) {
        XQ = {
          module: QQ.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, lW.set(QQ, XQ)
      }
      const wQ = `${WQ._colorFormat}|${WQ._depthStencilFormat}|${WQ._sampleCount}`;
      let qQ = XQ.pipelines.get(wQ);
      if (!qQ) {
        var TQ;
        const {
          module: zQ
        } = XQ;
        qQ = QQ.createRenderPipeline({
          label: `placeholder ${wQ}`,
          layout: QQ.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: zQ,
            entryPoint: "v"
          },
          fragment: {
            module: zQ,
            entryPoint: "f",
            targets: [{
              format: null !== (TQ = WQ._colorFormat) && void 0 !== TQ ? TQ : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: WQ._depthStencilFormat ? {
            format: WQ._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: WQ._sampleCount
          }
        }), XQ.pipelines.set(wQ, qQ)
      }
      return qQ
    }

    function iW(QQ, WQ, XQ) {
      const wQ = WQ.eye,
        qQ = WQ.viewMatrix;
      QQ[0] = wQ[0] + qQ[2] * XQ, QQ[1] = wQ[1] + qQ[6] * XQ, QQ[2] = wQ[2] + qQ[10] * XQ
    }
    var cW = XQ(38232),
      AW = XQ(41842),
      RW = XQ(37477);
    const EW = Math.PI,
      CW = EW / 1.95,
      uW = [5e-4 / 94, 125e-7, 5e-4 / 18],
      LW = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((QQ => {
        let [WQ, XQ] = QQ;
        return .434 * EW * Math.pow(2 * EW / WQ, 2) * XQ
      }));

    function kW(QQ, WQ, XQ) {
      const {
        up: wQ,
        mieDirectionalG: qQ
      } = QQ, TQ = 1 - tW(1 - Math.exp(WQ[1] / 45e4), 0, 1), zQ = QQ.rayleigh - (1 - TQ), sQ = Math.hypot(WQ[0], WQ[1], WQ[2]), FQ = sQ > 0 ? 1 / sQ : 0, PQ = XQ.sunDir;
      for (let IQ = 0; IQ < 3; IQ++) PQ[IQ] = WQ[IQ] * FQ;
      const gQ = PQ[0] * wQ[0] + PQ[1] * wQ[1] + PQ[2] * wQ[2],
        JQ = 1e3 * Math.max(0, 1 - Math.exp(-(CW - Math.acos(tW(gQ, -1, 1))) / 1.5));
      XQ.sunE = JQ;
      const rQ = .2 * QQ.turbidity * 1e-17 * QQ.mieCoefficient;
      for (let IQ = 0; IQ < 3; IQ++) {
        const QQ = uW[IQ] * zQ,
          WQ = LW[IQ] * rQ,
          wQ = JQ / (QQ + WQ);
        XQ.inScatterR[IQ] = QQ * wQ, XQ.inScatterM[IQ] = WQ * wQ, XQ.extinctionBeta[IQ] = 8400 * QQ + 1250 * WQ
      }
      return XQ.sunsetMix = tW(Math.pow(1 - gQ, 5), 0, 1), XQ.sunDiscE = 19e3 * JQ, XQ.mieScale = (1 - qQ * qQ) / (4 * EW), XQ.mieBase = 1 + qQ * qQ, XQ.mieSlope = 2 * qQ, XQ
    }
    const fW = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const SW = 1 / function(QQ) {
      const {
        A: WQ,
        B: XQ,
        C: wQ,
        D: qQ,
        E: TQ,
        F: zQ
      } = fW;
      return (QQ * (WQ * QQ + wQ * XQ) + qQ * TQ) / (QQ * (WQ * QQ + XQ) + qQ * zQ) - TQ / zQ
    }(1e3);

    function tW(QQ, WQ, XQ) {
      return Math.min(Math.max(QQ, WQ), XQ)
    }
    const oW = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function eW(QQ, WQ) {
      const XQ = new Map(WQ),
        wQ = [],
        qQ = [],
        TQ = () => 0 === qQ.length || qQ[qQ.length - 1].active;
      let zQ = null;
      const sQ = () => {
        const QQ = [...XQ].filter((QQ => {
            let [, WQ] = QQ;
            return !0 !== WQ
          })),
          WQ = QQ.map((QQ => {
            let [WQ] = QQ;
            return WQ
          })).join("|");
        zQ = QQ.length ? new RegExp(`\\b(${WQ})\\b`, "g") : null
      };
      sQ();
      for (const FQ of QQ.split("\n")) {
        const QQ = oW.exec(FQ);
        if (!QQ) {
          TQ() && wQ.push(zQ ? nW(FQ, zQ, XQ) : FQ);
          continue
        }
        const WQ = QQ[1],
          PQ = QQ[2].trim();
        if ("ifdef" === WQ || "ifndef" === WQ || "if" === WQ) {
          const QQ = TQ(),
            wQ = "if" === WQ ? xW(PQ, XQ) : XQ.has(PQ) === ("ifdef" === WQ);
          qQ.push({
            active: QQ && wQ,
            parentActive: QQ,
            taken: wQ
          })
        } else if ("elif" === WQ || "else" === WQ) {
          const QQ = qQ[qQ.length - 1];
          if (!QQ) throw new Error(`#${WQ} without #if`);
          const wQ = !QQ.taken && ("else" === WQ || xW(PQ, XQ));
          QQ.active = QQ.parentActive && wQ, QQ.taken = QQ.taken || wQ
        } else if ("endif" === WQ) {
          if (!qQ.pop()) throw new Error("#endif without #if")
        } else if (TQ()) {
          const [QQ, ...wQ] = PQ.split(/\s+/);
          "undef" === WQ ? XQ.delete(QQ) : XQ.set(QQ, !wQ.length || wQ.join(" ")), sQ()
        }
      }
      if (qQ.length) throw new Error("Unterminated #if");
      return wQ.join("\n")
    }

    function nW(QQ, WQ, XQ) {
      return QQ.replace(WQ, (QQ => {
        const WQ = XQ.get(QQ);
        return "string" === typeof WQ ? WQ : QQ
      }))
    }

    function xW(QQ, WQ) {
      var XQ;
      const wQ = null !== (XQ = QQ.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== XQ ? XQ : [];
      let qQ = 0;
      const TQ = () => wQ[qQ],
        zQ = () => wQ[qQ++],
        sQ = QQ => {
          const XQ = /^\d/.test(QQ) ? QQ : WQ.get(QQ);
          return "string" === typeof XQ ? parseInt(XQ) : Number.NaN
        },
        FQ = () => {
          const QQ = zQ();
          if ("!" === QQ) return !FQ();
          if ("(" === QQ) {
            const QQ = gQ();
            return zQ(), QQ
          }
          if ("defined" === QQ) {
            const QQ = "(" === TQ();
            QQ && zQ();
            const XQ = zQ();
            return QQ && zQ(), WQ.has(XQ)
          }
          const XQ = TQ();
          if ("==" === XQ || "!=" === XQ || ">" === XQ || "<" === XQ || ">=" === XQ || "<=" === XQ) {
            zQ();
            const WQ = sQ(QQ),
              wQ = sQ(zQ());
            if (Number.isNaN(WQ) || Number.isNaN(wQ)) return !1;
            switch (XQ) {
              case "==":
                return WQ === wQ;
              case "!=":
                return WQ !== wQ;
              case ">":
                return WQ > wQ;
              case "<":
                return WQ < wQ;
              case ">=":
                return WQ >= wQ;
              default:
                return WQ <= wQ
            }
          }
          return WQ.has(QQ)
        },
        PQ = () => {
          let QQ = FQ();
          for (;
            "&&" === TQ();) {
            zQ();
            const WQ = FQ();
            QQ = QQ && WQ
          }
          return QQ
        },
        gQ = () => {
          let QQ = PQ();
          for (;
            "||" === TQ();) {
            zQ();
            const WQ = PQ();
            QQ = QQ || WQ
          }
          return QQ
        },
        JQ = gQ();
      if (qQ !== wQ.length) throw new Error(`Cannot evaluate #if ${QQ}`);
      return JQ
    }
    var YW = XQ(37472),
      NW = XQ(37792),
      ZW = XQ(37794),
      OW = XQ(40917),
      KW = XQ(39026);
    const mW = 32,
      MW = [10, 3, 10],
      QX = [21, 7, 21],
      WX = QX[0] * QX[1] * QX[2],
      XX = 0,
      wX = 1,
      qX = 2,
      TX = 3,
      zX = 64,
      sX = 512,
      FX = 4 * WX,
      PX = 1536,
      gX = FX + WX * PX,
      JX = 1073741824,
      rX = gX + 1;

    function IX(QQ, WQ) {
      const XQ = QQ % WQ;
      return XQ < 0 ? XQ + WQ : XQ
    }

    function jX(QQ, WQ, XQ) {
      return wQ = IX(QQ, QX[0]), qQ = IX(WQ, QX[1]), TQ = IX(XQ, QX[2]), wQ + QX[0] * (qQ + QX[1] * TQ);
      var wQ, qQ, TQ
    }

    function BX(QQ, WQ, XQ) {
      return QQ + 8 * (WQ + 8 * XQ)
    }

    function yX(QQ, WQ, XQ) {
      return QQ + 4 * (WQ + 4 * XQ)
    }
    const VX = 65535,
      DX = 0,
      pX = 1,
      GX = 2,
      UX = 3;

    function bX(QQ) {
      return Math.ceil(QQ * QQ / 32)
    }
    const vX = 8192,
      dX = 1 << 18,
      HX = 65536,
      aX = 294912,
      lX = 128,
      hX = 4096,
      iX = 16,
      cX = 16385,
      AX = 81921,
      RX = 147457,
      EX = 4194304;
    const CX = [0, 0, 0],
      uX = [0, 0, 0];

    function LX(QQ, WQ, XQ, wQ) {
      ! function(QQ, WQ, XQ) {
        const [wQ, qQ, TQ] = [QQ[0], QQ[1], QQ[2]];
        let zQ, sQ, FQ;
        Math.abs(qQ) < .99 ? (zQ = TQ, sQ = 0, FQ = -wQ) : (zQ = -qQ, sQ = wQ, FQ = 0);
        const PQ = Math.hypot(zQ, sQ, FQ);
        WQ[0] = zQ / PQ, WQ[1] = sQ / PQ, WQ[2] = FQ / PQ, XQ[0] = qQ * WQ[2] - TQ * WQ[1], XQ[1] = TQ * WQ[0] - wQ * WQ[2], XQ[2] = wQ * WQ[1] - qQ * WQ[0]
      }(wQ, CX, uX);
      const qQ = 1 / 32;
      for (const [TQ, zQ] of [
          [0, CX],
          [4, uX]
        ]) {
        for (let XQ = 0; XQ < 3; XQ++) QQ[WQ + TQ + XQ] = zQ[XQ] * qQ;
        QQ[WQ + TQ + 3] = -(zQ[0] * XQ[0] + zQ[1] * XQ[1] + zQ[2] * XQ[2]) * qQ
      }
    }
    class kX {
      constructor() {
        this.words = new Uint32Array(RX), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      gI(QQ, WQ) {
        this.parts = 0, this.refs = 0, this.view = QQ, this.viewAt = WQ;
        const XQ = QQ[WQ + 1] * QQ[WQ + 6] - QQ[WQ + 2] * QQ[WQ + 5],
          wQ = QQ[WQ + 2] * QQ[WQ + 4] - QQ[WQ] * QQ[WQ + 6],
          qQ = QQ[WQ] * QQ[WQ + 5] - QQ[WQ + 1] * QQ[WQ + 4],
          TQ = Math.hypot(XQ, wQ, qQ) || 1;
        this.light[0] = XQ / TQ, this.light[1] = wQ / TQ, this.light[2] = qQ / TQ
      }
      add(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= hX || ! function(QQ, WQ, XQ) {
            const wQ = QQ[WQ],
              qQ = QQ[WQ + 1],
              TQ = QQ[WQ + 2],
              zQ = QQ[WQ + 3],
              sQ = QQ[WQ + 4],
              FQ = QQ[WQ + 5],
              PQ = QQ[WQ + 6],
              gQ = QQ[WQ + 7],
              JQ = QQ[WQ + 8],
              rQ = QQ[WQ + 9],
              IQ = QQ[WQ + 10],
              jQ = QQ[WQ + 11],
              BQ = QQ[WQ + 12],
              yQ = QQ[WQ + 13],
              VQ = QQ[WQ + 14],
              DQ = QQ[WQ + 15],
              pQ = wQ * FQ - qQ * sQ,
              GQ = wQ * PQ - TQ * sQ,
              UQ = wQ * gQ - zQ * sQ,
              bQ = qQ * PQ - TQ * FQ,
              vQ = qQ * gQ - zQ * FQ,
              dQ = TQ * gQ - zQ * PQ,
              HQ = JQ * yQ - rQ * BQ,
              aQ = JQ * VQ - IQ * BQ,
              lQ = JQ * DQ - jQ * BQ,
              hQ = rQ * VQ - IQ * yQ,
              iQ = rQ * DQ - jQ * yQ,
              cQ = IQ * DQ - jQ * VQ,
              AQ = pQ * cQ - GQ * iQ + UQ * hQ + bQ * lQ - vQ * aQ + dQ * HQ;
            if (!(Math.abs(AQ) > 1e-12)) return !1;
            const RQ = 1 / AQ;
            return XQ[0] = (FQ * cQ - PQ * iQ + gQ * hQ) * RQ, XQ[1] = (TQ * iQ - qQ * cQ - zQ * hQ) * RQ, XQ[2] = (yQ * dQ - VQ * vQ + DQ * bQ) * RQ, XQ[3] = (IQ * vQ - rQ * dQ - jQ * bQ) * RQ, XQ[4] = (PQ * lQ - sQ * cQ - gQ * aQ) * RQ, XQ[5] = (wQ * cQ - TQ * lQ + zQ * aQ) * RQ, XQ[6] = (VQ * UQ - BQ * dQ - DQ * GQ) * RQ, XQ[7] = (JQ * dQ - IQ * UQ + jQ * GQ) * RQ, XQ[8] = (sQ * iQ - FQ * lQ + gQ * HQ) * RQ, XQ[9] = (qQ * lQ - wQ * iQ - zQ * HQ) * RQ, XQ[10] = (BQ * vQ - yQ * UQ + DQ * pQ) * RQ, XQ[11] = (rQ * UQ - JQ * vQ - jQ * pQ) * RQ, XQ[12] = (FQ * aQ - sQ * hQ - PQ * HQ) * RQ, XQ[13] = (wQ * hQ - qQ * aQ + TQ * HQ) * RQ, XQ[14] = (yQ * GQ - BQ * bQ - VQ * pQ) * RQ, XQ[15] = (JQ * bQ - rQ * GQ + IQ * pQ) * RQ, !0
          }(WQ, XQ, this.inverse)) return;
        const {
          view: wQ,
          viewAt: qQ
        } = this, TQ = XQ;
        let zQ = 1 / 0,
          sQ = 1 / 0,
          FQ = -1 / 0,
          PQ = -1 / 0,
          gQ = -1 / 0;
        const [JQ, rQ, IQ] = this.light;
        for (let UQ = 0; UQ < 8; UQ++) {
          const XQ = 1 & UQ ? QQ.hi[0] : QQ.lo[0],
            jQ = 2 & UQ ? QQ.hi[1] : QQ.lo[1],
            BQ = 4 & UQ ? QQ.hi[2] : QQ.lo[2],
            yQ = XQ * WQ[TQ] + jQ * WQ[TQ + 4] + BQ * WQ[TQ + 8] + WQ[TQ + 12],
            VQ = XQ * WQ[TQ + 1] + jQ * WQ[TQ + 5] + BQ * WQ[TQ + 9] + WQ[TQ + 13],
            DQ = XQ * WQ[TQ + 2] + jQ * WQ[TQ + 6] + BQ * WQ[TQ + 10] + WQ[TQ + 14],
            pQ = wQ[qQ] * yQ + wQ[qQ + 1] * VQ + wQ[qQ + 2] * DQ + wQ[qQ + 3],
            GQ = wQ[qQ + 4] * yQ + wQ[qQ + 5] * VQ + wQ[qQ + 6] * DQ + wQ[qQ + 7];
          zQ = Math.min(zQ, pQ), sQ = Math.min(sQ, GQ), FQ = Math.max(FQ, pQ), PQ = Math.max(PQ, GQ), gQ = Math.max(gQ, JQ * yQ + rQ * VQ + IQ * DQ)
        }
        if (FQ < -1 || PQ < -1 || zQ >= 1 || sQ >= 1) return;
        const jQ = this.parts++,
          BQ = this.rects;
        BQ[4 * jQ] = fX(zQ), BQ[4 * jQ + 1] = fX(sQ), BQ[4 * jQ + 2] = fX(FQ), BQ[4 * jQ + 3] = fX(PQ);
        const yQ = this.inverse,
          {
            cell: VQ,
            dims: DQ,
            lo: pQ
          } = QQ,
          GQ = AX + jQ * iX;
        for (let UQ = 0; UQ < 3; UQ++) this.floats[GQ + 4 * UQ] = yQ[UQ] / VQ, this.floats[GQ + 4 * UQ + 1] = yQ[4 + UQ] / VQ, this.floats[GQ + 4 * UQ + 2] = yQ[8 + UQ] / VQ, this.floats[GQ + 4 * UQ + 3] = (yQ[12 + UQ] - pQ[UQ]) / VQ;
        this.words[GQ + 12] = QQ.at, this.floats[GQ + 13] = gQ + .001 * (1 + Math.abs(gQ)), this.words[GQ + 14] = DQ[0] | DQ[1] << 8 | DQ[2] << 16
      }
      finish() {
        const QQ = lX,
          {
            counts: WQ,
            rects: XQ,
            words: wQ
          } = this;
        WQ.fill(0);
        let qQ = 0,
          TQ = 0;
        for (; TQ < this.parts; TQ++) {
          const wQ = 4 * TQ,
            zQ = (XQ[wQ + 2] - XQ[wQ] + 1) * (XQ[wQ + 3] - XQ[wQ + 1] + 1);
          if (qQ + zQ > 65536) break;
          qQ += zQ;
          for (let qQ = XQ[wQ + 1]; qQ <= XQ[wQ + 3]; qQ++)
            for (let TQ = XQ[wQ]; TQ <= XQ[wQ + 2]; TQ++) WQ[qQ * QQ + TQ]++
        }
        let zQ = 0;
        for (let FQ = 0; FQ < 16384; FQ++) wQ[FQ] = zQ, zQ += WQ[FQ], WQ[FQ] = wQ[FQ];
        wQ[16384] = zQ;
        for (let FQ = 0; FQ < TQ; FQ++) {
          const qQ = 4 * FQ;
          for (let TQ = XQ[qQ + 1]; TQ <= XQ[qQ + 3]; TQ++)
            for (let zQ = XQ[qQ]; zQ <= XQ[qQ + 2]; zQ++) wQ[cX + WQ[TQ * QQ + zQ]++] = FQ
        }
        const sQ = this.floats;
        for (let FQ = 0; FQ < 16384; FQ++) {
          const QQ = cX + wQ[FQ],
            WQ = QQ + Math.min(wQ[FQ + 1] - wQ[FQ], 64);
          for (let XQ = QQ + 1; XQ < WQ; XQ++) {
            const WQ = wQ[XQ],
              qQ = sQ[81934 + WQ * iX];
            let TQ = XQ - 1;
            for (; TQ >= QQ && sQ[81934 + wQ[TQ] * iX] < qQ; TQ--) wQ[TQ + 1] = wQ[TQ];
            wQ[TQ + 1] = WQ
          }
        }
        this.refs = qQ
      }
    }

    function fX(QQ) {
      return Math.min(127, Math.max(0, Math.floor((.5 * QQ + .5) * lX)))
    }

    function SX(QQ, WQ, XQ, wQ, qQ) {
      for (let TQ = 0; TQ < 4; TQ++)
        for (let zQ = 0; zQ < 4; zQ++) qQ[4 * TQ + zQ] = QQ[WQ + 4 * TQ] * XQ[wQ + zQ] + QQ[WQ + 4 * TQ + 1] * XQ[wQ + 4 + zQ] + QQ[WQ + 4 * TQ + 2] * XQ[wQ + 8 + zQ] + QQ[WQ + 4 * TQ + 3] * XQ[wQ + 12 + zQ]
    }

    function tX(QQ, WQ, XQ, wQ, qQ) {
      const TQ = QQ[0] - WQ,
        zQ = QQ[1] - XQ,
        sQ = QQ[2] - wQ,
        FQ = QQ[3] - WQ,
        PQ = QQ[4] - XQ,
        gQ = QQ[5] - wQ,
        JQ = QQ[6] - WQ,
        rQ = QQ[7] - XQ,
        IQ = QQ[8] - wQ;
      if (Math.min(TQ, FQ, JQ) > qQ || Math.max(TQ, FQ, JQ) < -qQ) return !1;
      if (Math.min(zQ, PQ, rQ) > qQ || Math.max(zQ, PQ, rQ) < -qQ) return !1;
      if (Math.min(sQ, gQ, IQ) > qQ || Math.max(sQ, gQ, IQ) < -qQ) return !1;
      const jQ = FQ - TQ,
        BQ = PQ - zQ,
        yQ = gQ - sQ,
        VQ = JQ - FQ,
        DQ = rQ - PQ,
        pQ = IQ - gQ,
        GQ = BQ * pQ - yQ * DQ,
        UQ = yQ * VQ - jQ * pQ,
        bQ = jQ * DQ - BQ * VQ;
      if (Math.abs(GQ * TQ + UQ * zQ + bQ * sQ) > qQ * (Math.abs(GQ) + Math.abs(UQ) + Math.abs(bQ))) return !1;
      const vQ = [jQ, BQ, yQ, VQ, DQ, pQ, TQ - JQ, zQ - rQ, sQ - IQ];
      for (let dQ = 0; dQ < 3; dQ++) {
        const QQ = vQ[3 * dQ],
          WQ = vQ[3 * dQ + 1],
          XQ = vQ[3 * dQ + 2];
        for (let wQ = 0; wQ < 3; wQ++) {
          const jQ = 0 === wQ ? 0 : 1 === wQ ? XQ : -WQ,
            BQ = 0 === wQ ? -XQ : 1 === wQ ? 0 : QQ,
            yQ = 0 === wQ ? WQ : 1 === wQ ? -QQ : 0,
            VQ = jQ * TQ + BQ * zQ + yQ * sQ,
            DQ = jQ * FQ + BQ * PQ + yQ * gQ,
            pQ = jQ * JQ + BQ * rQ + yQ * IQ,
            GQ = qQ * (Math.abs(jQ) + Math.abs(BQ) + Math.abs(yQ));
          if (Math.min(VQ, DQ, pQ) > GQ || Math.max(VQ, DQ, pQ) < -GQ) return !1
        }
      }
      return !0
    }
    const oX = new Float32Array(1);
    new Uint32Array(oX.buffer);
    var eX = XQ(39029);

    function nX(QQ) {
      const [WQ, XQ, wQ] = eX.n;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${QQ.group}) @binding(${QQ.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${WQ-1}, ${XQ-1}, ${wQ-1});\n}\n`
    }

    function xX(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [qQ, TQ, zQ] = QX, [sQ, FQ, PQ] = MW, gQ = Math.log2(mW), JQ = wQ ? "var<private> bloxdSpCrossed: bool;\n" : "", rQ = wQ ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${QQ.group}) @binding(${QQ.Gr}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${QQ.group}) @binding(${QQ.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${XQ?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${JQ}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${pX}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${GX}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${XQ?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${UX}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${qQ}, ${TQ}, ${zQ});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${qQ} * (s.y + ${TQ} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${sQ}, ${FQ}, ${PQ}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${gQ}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${TX}u) {\n\t\treturn named && state == ${qX}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${FX}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${gX}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${WQ?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${WQ?`\t\tif (exits && step > 0 && step % ${ZX} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${gQ}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${XX}u || kind == ${wX}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${qX}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${FX}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${rQ}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const YX = {
      group: 0,
      uniform: 0,
      Gr: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function NX() {
      const QQ = YX;
      return `${nX(QQ)}${xX(QQ,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${eX.c}>,\n}\n@group(${QQ.group}) @binding(${QQ.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${QQ.group}) @binding(${QQ.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${eX.j})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${eX.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${eX.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const ZX = 2;
    const OX = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function KX(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const wQ = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${WQ.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        qQ = "trace" === XQ || "lit" === XQ,
        TQ = "maskEdge" === XQ ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        zQ = qQ ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${WQ.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${WQ.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===XQ?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${TQ};\n`;
      return `${wQ}${QQ.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${qQ?function(){const[QQ,WQ,XQ]=eX.n;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${QQ}.0, ${WQ}.0, ${XQ}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${zQ}}\n`:""}${QQ.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${WQ.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${WQ.renderOffset});\n}\n`:""}`
    }
    const mX = "bloxdSpOwnTexture";

    function MX(QQ) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${QQ.texture}) - 1u)))`
    }
    const Qw = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${cW.d.map((QQ=>{let[WQ,XQ]=QQ;return`\tbloxdSpOut.${WQ} = (bloxdSpWord & ${XQ}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Ww(QQ) {
      return `bloxdSpFlags(${QQ})`
    }
    const Xw = `${OW.i}.eyePosition`;

    function ww(QQ, WQ, XQ, wQ, qQ) {
      const TQ = QQ.indexOf(WQ);
      if (TQ < 0 || QQ.indexOf(WQ, TQ + 1) >= 0) throw new Error(`Lite's ${qQ} program changed at the shader pack ${wQ} hook: ${TQ<0?"no":"more than one"} anchor (lite/${qQ}ShaderPack.ts)`);
      return QQ.slice(0, TQ) + XQ + QQ.slice(TQ + WQ.length)
    }

    function qw(QQ) {
      return QQ.sunShadow || QQ.airShadow
    }

    function Tw(QQ, WQ) {
      return WQ && qw(QQ)
    }
    const zw = {
      group: OW.d,
      ...OW.p
    };

    function sw(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!qw(QQ)) return "";
      if (WQ) {
        const WQ = zw,
          qQ = "trace" === XQ || "lit" === XQ;
        let TQ = "";
        QQ.sunShadow && (TQ = qQ ? `${xX(WQ,!0,"lit"===XQ)}${wQ=WQ,`@group(${wQ.group}) @binding(${wQ.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${wQ.group}) @binding(${wQ.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(QQ, WQ, XQ) {
          const wQ = `@group(${QQ}) @binding(${WQ}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return XQ ? `${wQ}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${OX}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((QQ=>`\t{\n\t\tlet o = vec2i(${QQ});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : wQ
        }(WQ.group, OW.r, "maskEdge" === XQ));
        const zQ = {
          shadowDirection: `${OW.i}.shadowDirection`,
          renderOffset: `${OW.i}.renderOffset`,
          eyePosition: `${OW.i}.eyePosition`
        };
        return `${nX(WQ)}${TQ}${function(QQ){const[WQ,XQ,wQ]=eX.n;return`@group(${QQ.group}) @binding(${QQ.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${QQ.group}) @binding(${QQ.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${WQ}.0, ${XQ}.0, ${wQ}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(WQ)}${KX(QQ,zQ,XQ)}`
      }
      var wQ;
      return `${QQ.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${QQ.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Fw(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!WQ) return "";
      const TQ = (zQ = "fragmentInputs.vPositionW", sQ = QQ.sunShadow ? {
        normal: XQ,
        flags: wQ
      } : null, `\n\tbloxdSpShadowPosition = ${zQ};\n${sQ?`\tbloxdSpShadowNormal = normalize(${sQ.normal});\n\tbloxdSpShadowEmissive = (${sQ.flags} & ${cW.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${sQ.flags} & ${cW.f}u) != 0u;\n`:""}`);
      var zQ, sQ;
      return QQ.sunShadow && ("mask" === qQ || "maskEdge" === qQ) ? `${TQ}${FQ="fragmentInputs.position",PQ="maskEdge"===qQ,`\n\tbloxdSpShadowPixel = vec2i(${FQ}.xy);\n${PQ?`\tbloxdSpShadowZ = ${FQ}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${FQ}.z), dpdy(${FQ}.z));\n`:""}`}` : TQ;
      var FQ, PQ
    }
    const Pw = "bloxdSpTextureRotation",
      gw = "bloxdSpTextureLayers",
      Jw = `@group(${OW.d}) @binding(${OW.t}) var<storage, read> ${gw}: array<u32>;\n`;

    function rw(QQ) {
      return `\tvertexOutputs.vPackTexture = ${gw}[min(u32(${QQ}), arrayLength(&${gw}) - 1u)];\n`
    }

    function Iw(QQ) {
      return void 0 !== QQ.uv
    }

    function jw(QQ) {
      if (!QQ) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Iw(QQ)) return function(QQ) {
        const {
          texture: WQ,
          cells: XQ,
          layers: wQ
        } = QQ, qQ = `textureDimensions(${WQ}, bloxdSpLevel)`, TQ = XQ ? `max(vec2u(vec2f(${qQ}) / ${XQ}), vec2u(1u))` : qQ, zQ = XQ ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${TQ};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${XQ}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${XQ}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${WQ}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${qQ} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${TQ};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${WQ}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let sQ;
        if (XQ)
          if (1 === wQ.length) sQ = `\treturn bloxdSpOwnTexel(${wQ[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const QQ = wQ.length - 1;
            sQ = `\tvar bloxdSpColour = bloxdSpOwnTexel(${wQ[QQ]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let WQ = QQ - 1; WQ >= 0; WQ--) sQ += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${wQ[WQ]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            sQ += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else sQ = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${QQ.id?`var<private> ${mX}: u32;\n`:""}${zQ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${MX(QQ)};\n\treturn ${TQ};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${QQ.id?mX:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${MX(QQ)};\n${sQ}}\n`
      }(QQ);
      const WQ = QQ,
        XQ = QQ => {
          const XQ = QQ > 0 ? `bloxdSpLayer - ${WQ.layers*QQ}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${QQ}, ${WQ.sampler}, bloxdSpTurned, ${XQ}, round(bloxdSpMipLevel));`
        };
      let wQ = "";
      for (let TQ = 0; TQ < WQ.count - 1; TQ++) wQ += `\tif (bloxdSpLayer < ${WQ.layers*(TQ+1)}u) {\n\t\t${XQ(TQ)}\n\t}\n`;
      const qQ = WQ.frame ? `${WQ.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Pw}: u32;\n${Jw}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Pw} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Pw} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Pw} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${qQ}${wQ}\t${XQ(WQ.count-1)}\n}\n`
    }

    function Bw(QQ, WQ, XQ) {
      return !!QQ.surface && "bloxdDefaultSurface" !== QQ.surface && function(QQ, WQ) {
        return "liquid" === WQ || !QQ
      }(WQ, XQ)
    }

    function yw(QQ, WQ) {
      return QQ.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${WQ.vertexLocalPosition}, ${Ww(WQ.vertexFlags)});\n\t\tlet bloxdSpVertex = ${QQ.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Vw(QQ, WQ, XQ, wQ, qQ) {
      if (!QQ.surface) return "";
      const TQ = (QQ, WQ) => `\n\tlet bloxdSpTexelUV = ${QQ};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${WQ}) - 1u));`;
      let zQ = "",
        sQ = "0u, 0u, vec2f(0.0), 0.0";
      const FQ = wQ && Iw(wQ) ? wQ : null,
        PQ = wQ && !Iw(wQ) ? wQ : null;
      if (FQ) {
        zQ = `${FQ.id?`\n\tlet bloxdSpTexture = ${FQ.id};\n\t${mX} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${FQ.uv};${TQ(function(QQ,WQ){var XQ;return`${null!==(XQ=QQ.levelUv)&&void 0!==XQ?XQ:QQ.cells?`${WQ} / ${QQ.cells}`:WQ} * vec2f(textureDimensions(${QQ.texture}))`}(FQ,"bloxdSpUv"),FQ.texture)}`, sQ = (FQ.id ? `${mX}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else PQ && (zQ = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Pw} = bloxdSpTexture >> 16u;${TQ(`fragmentInputs.vMainUV1 * ${(0,YW.ob)(PQ.width)}`,"textureAtlas0")}`, sQ = `bloxdSpTexture & 0xffffu, ${Pw}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const gQ = qQ.overlayColour,
        JQ = gQ ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        rQ = "bloxdDefaultSurface" !== QQ.surface || gQ ? `\n\tbaseColor = vec4f(${JQ}, baseColor.a);` : "",
        IQ = Bw(QQ, WQ, XQ) ? `\n\t${qQ.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${zQ}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${qQ.alpha}, ${qQ.enchantTier}, ${qQ.enchantColour}, ${qQ.enchantSpeed}, ${null!==gQ&&void 0!==gQ?gQ:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${qQ.normal}, ${qQ.localPosition}, ${Ww(qQ.flags)}, ${sQ});\n\tlet bloxdSpSurface = ${QQ.surface}(bloxdSpSurfaceIn);${rQ}${IQ}\n`
    }
    const Dw = "bloxdSpLightIn";

    function pw(QQ, WQ, XQ, wQ) {
      if (!QQ.light) return "";
      const qQ = WQ ? `${YW.n}.rgb, ${YW.n}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${YW.j}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: TQ,
          diffuse: zQ,
          emissive: sQ,
          ambient: FQ,
          fogColour: PQ,
          fogAlpha: gQ,
          normal: JQ
        } = wQ;
      return `\tvar ${Dw} = BloxdLightIn(vec3f(0.0), ${XQ?TQ:"0.0"}, ${zQ}, ${sQ}, ${FQ}, ${qQ}, ${PQ}, ${gQ}, fragmentInputs.vPositionW, ${JQ}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Dw}.litColour = bloxdLitColour(bloxdSpSurface, ${Dw});\n`
    }

    function Gw(QQ) {
      return QQ.light ? `\n\t{\n\t\tlet bloxdSpLight = ${QQ.light}(bloxdSpSurface, ${Dw});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const Uw = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      bw = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      vw = "\treturn color;\n}",
      dw = {
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
    const Hw = Object.freeze({});

    function aw(QQ) {
      var WQ;
      return !(null === (WQ = (0, KW.g)(QQ)) || void 0 === WQ || !WQ.sceneDepth)
    }

    function lw(QQ) {
      const WQ = (0, KW.g)(QQ);
      return !!WQ && Bw(WQ.hooks, WQ.strict, WQ.program)
    }

    function hw(QQ, WQ, XQ, wQ) {
      return ww(QQ, WQ, XQ, wQ, "terrain")
    }

    function iw(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const TQ = function(QQ) {
          return (0, KW.d)(QQ.packVariant, QQ.liquid ? "liquid" : "terrain")
        }(QQ),
        {
          hooks: zQ
        } = TQ,
        sQ = Tw(TQ, wQ),
        FQ = "edge" === qQ ? "maskEdge" : "plain" === qQ ? "mask" : "trace",
        PQ = yw(zQ, dw);
      PQ && (WQ = hw(WQ, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${PQ}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const gQ = "atlas" === QQ.texture ? {
          count: QQ.atlasCount,
          layers: QQ.atlasLayers,
          width: QQ.Z6,
          sampler: "atlasSampler",
          frame: QQ.animated ? XQ : null
        } : null,
        JQ = `${TQ.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Fw(TQ,sQ,dw.normal,dw.flags,FQ)}${Vw(zQ,TQ.strict,TQ.program,gQ,dw)}`;
      JQ && (WQ = hw(WQ, Uw, `${Uw.slice(0,-1)}${JQ}`, "surface"));
      const rQ = Gw(zQ);
      return rQ && (WQ = hw(WQ, bw, `${pw(zQ,QQ.lighting,QQ.dirLightCount>0,dw)}${bw}`, "light input"), WQ = hw(WQ, vw, `${rQ.slice(1)}${vw}`, "light")), `${(0,OW.z)()}${TQ.sceneDepth?`@group(${OW.d}) @binding(${OW.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Xw};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${sw(TQ,sQ,FQ)}${jw(gQ)}${Qw}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${TQ.code}${WQ}`
    }
    const Aw = bQ.b.WGSL;

    function Rw(QQ) {
      return void 0 !== QQ.packVariant
    }
    const Ew = {
        VqQ: 0,
        DqQ: 4,
        pqQ: 8,
        GqQ: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Cw = Ew.aoLevels + 4,
      uw = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Lw = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      kw = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      fw = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Sw = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      tw = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      ow = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      ew = 0,
      nw = 3,
      xw = 4,
      Yw = 5,
      Nw = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${NW.b}, ${NW.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${NW.b}, ${NW.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Zw = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((QQ=>ZW.b>>QQ&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Ow = {
      fJ: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: QQ => `animDataPerTex[${QQ}]`
    };

    function Kw(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ow;
      return `\n\tlet atlasIdxIn = ${QQ};\n\tlet animTick = ${XQ.fJ};\n\tlet animTickStride = ${XQ.stride};\n\tlet numAnimTextures = ${XQ.count};\n\t${(0,vQ.d)(bQ.b.WGSL,XQ.perTexture)}\n\t${WQ}animLayer;\n`
    }

    function mw(QQ) {
      const WQ = (WQ, XQ) => {
        const wQ = WQ > 0 ? `fragmentInputs.texAtlasIndex - ${QQ.atlasLayers.toFixed(1)} * ${WQ.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${XQ?"textureSampleLevel":"textureSample"}(textureAtlas${WQ}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${wQ}))${XQ?", atlasLod":""})`
      };
      if (1 === QQ.atlasCount) return `baseColor = ${WQ(0,!1)};`;
      let XQ = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,YW.ob)(QQ.Z6)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let wQ = 0; wQ < QQ.atlasCount; wQ++) {
        const qQ = QQ.atlasLayers * (wQ + 1) - .5;
        XQ += `${wQ>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,YW.ob)(qQ)}) {\n\t\tbaseColor = ${WQ(wQ,!0)};\n\t}`
      }
      return XQ
    }

    function Mw(QQ) {
      return `terrain-${QQ.texture}${"atlas"===QQ.texture?QQ.atlasCount:""}${QQ.animated?"-anim":""}${QQ.alphaTest?"-test":""}${QQ.lighting?"-lit":""}-dir${QQ.dirLightCount}${QQ.packed?"-packed":""}${Rw(QQ)?`-sp${QQ.packVariant}`:""}${QQ.liquid?"-liquid":""}${QQ.resting?"-rest":""}`
    }

    function Qq(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const wQ = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const XQ = "none" !== QQ.texture,
          wQ = "atlas" === QQ.texture,
          qQ = QQ.dirLightCount > 0,
          TQ = Rw(QQ);
        if (QQ.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${QQ.dirLightCount}`);
        let zQ = 1,
          sQ = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (wQ) {
          QQ.animated && (sQ += `@group(2) @binding(${zQ++}) var<storage, read> animDataPerTex: array<f32>;\n`), sQ += `@group(2) @binding(${zQ++}) var atlasSampler: sampler;\n`;
          for (let WQ = 0; WQ < QQ.atlasCount; WQ++) sQ += `@group(2) @binding(${zQ++}) var textureAtlas${WQ}: texture_2d_array<f32>;\n`
        } else "single" === QQ.texture && (sQ += `@group(2) @binding(${zQ++}) var diffuseSamplerSampler: sampler;\n`, sQ += `@group(2) @binding(${zQ++}) var diffuseSampler: texture_2d<f32>;\n`);
        const FQ = function(QQ) {
            const WQ = ow,
              XQ = "none" !== QQ.texture,
              wQ = "atlas" === QQ.texture,
              qQ = Rw(QQ);
            return QQ.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${XQ?"uv: vec2f,":""}\n\t${wQ?"texAtlasIndices: f32,":""}\n\t${QQ.lighting?"aPackedLightLevels: f32,":""}\n\t${qQ?"blockFlagWords: vec2u,":""}\n}\n${Nw}\n${Zw}\n${"single"===QQ.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${XQ?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===QQ.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${wQ?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${QQ.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${qQ?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${WQ.position}) position: vec3f,\n\t@location(${WQ.normal}) normal: vec4f,\n\t@location(${WQ.color}) color: vec4f,\n\t${XQ?`@location(${WQ.uv}) uv: vec2f,`:""}\n\t${QQ.lighting?`@location(${WQ.packedLight}) aPackedLightLevels: f32,`:""}\n\t${qQ?`@location(${WQ.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(QQ),
          PQ = `\n${fw}\n${Lw}\n${kw}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${sQ}\n${yW}\n${FQ.declarations}\nstruct Varyings {\n\t${"none"===WQ?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${QQ.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${qQ?"@location(5) vTerrainLambert: f32,":""}\n\t${XQ?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${wQ?"@location(7) texAtlasIndex: f32,":""}\n\t${QQ.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${TQ?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${TQ&&wQ?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${QQ.resting?"":(0,YW.x)(Aw)}\n${tw}\n\n@vertex\nfn mainVertex(${FQ.parameter}) -> Varyings {\n\t${FQ.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${TQ?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${cW.c.placed}u;`:""}\n\t${TQ&&wQ?rw("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${QQ.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${XQ?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${wQ?function(QQ){return QQ?Kw("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(QQ.animated):""}\n\t${"single"===QQ.texture&&QQ.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,YW.$)(Aw)}\n\t${(0,YW.I)(Aw,QQ.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${QQ.resting?"":Sw}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${wQ?mw(QQ):""}\n\t${"single"===QQ.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${XQ?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${QQ.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${qQ?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${BW}));\n\t${Rw(QQ)?(0,YW.kb)(bQ.b.WGSL):(0,YW.S)(Aw)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          gQ = new Set;
        QQ.lighting && gQ.add("BLOXD_LIGHTING");
        qQ && gQ.add("BLOXD_TERRAIN_DIRECTIONAL");
        return eW(PQ, new Map([...gQ].map((QQ => [QQ, !0]))))
      }(QQ, XQ);
      if (!Rw(QQ)) return wQ;
      const qQ = iw(QQ, wQ, Kw, WQ, XQ);
      return "none" === XQ ? qQ : `${qQ}${function(QQ){const WQ="none"!==QQ.texture&&QQ.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${QQ.resting?"":Sw}\n\t${QQ.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${WQ&&"atlas"===QQ.texture?mw(QQ):""}\n\t${WQ&&"single"===QQ.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${WQ?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${cW.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(QQ)}`
    }
    const Wq = new Map([
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

    function Xq(QQ, WQ) {
      const XQ = new Map;
      let wQ = 0;
      const qQ = [],
        TQ = [],
        zQ = [];
      for (const PQ of WQ) {
        var sQ, FQ;
        const WQ = null !== (sQ = PQ.type.trim().split(/\s+/).pop()) && void 0 !== sQ ? sQ : PQ.type,
          gQ = Wq.get(WQ);
        if (!gQ) throw new Error(`Lite: no uniform layout for ${PQ.name}: ${PQ.type}`);
        const JQ = null !== (FQ = PQ.arraySize) && void 0 !== FQ ? FQ : 0,
          rQ = JQ ? 4 : gQ.align;
        wQ = Math.ceil(wQ / rQ) * rQ;
        const IQ = JQ ? 4 * Math.ceil(gQ.floats / 4) : gQ.floats;
        if (XQ.set(PQ.name, {
            offset: wQ,
            floats: gQ.floats,
            arraySize: JQ,
            stride: IQ
          }), JQ && gQ.floats <= 2) {
          const WQ = `${QQ}_${zQ.length}_strided`;
          TQ.push(`struct ${WQ} {\n\t@size(16) el: ${gQ.wgsl},\n}`), zQ.push(PQ.name), qQ.push(`\t@align(16) ${PQ.name}: array<${WQ}, ${JQ}>,`)
        } else JQ ? qQ.push(`\t@align(16) ${PQ.name}: array<${gQ.wgsl}, ${JQ}>,`) : qQ.push(`\t${PQ.name}: ${gQ.wgsl},`);
        wQ += JQ ? IQ * JQ : gQ.floats
      }
      return {
        slots: XQ,
        floats: Math.max(4, 4 * Math.ceil(wQ / 4)),
        wgsl: `${TQ.join("\n")}\nstruct ${QQ} {\n${qQ.join("\n")}\n}\n`,
        stridedArrays: zQ
      }
    }
    const wq = [{
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
      qq = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      Tq = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function zq(QQ, WQ) {
      return `#if defined(${QQ}) && ${QQ}DIRECTUV == 0\nvarying v${WQ}UV: vec2f;\n#endif`
    }

    function sq(QQ, WQ, XQ) {
      return `#if defined(${QQ}) && ${QQ}DIRECTUV == 0\nif (uniforms.v${WQ}Infos.x==0.)\n{vertexOutputs.v${WQ}UV= (uniforms.${XQ}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${WQ}UV= (uniforms.${XQ}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Fq(QQ, WQ, XQ) {
      return `#ifdef ${QQ}\n#if ${QQ}DIRECTUV == 1\n#define v${WQ}UV vMainUV1\n#elif ${QQ}DIRECTUV == 2\n#define v${WQ}UV vMainUV2\n#else\nvarying v${WQ}UV: vec2f;\n#endif\nvar ${XQ}SamplerSampler: sampler;\nvar ${XQ}Sampler: texture_2d<f32>;\n#endif`
    }
    const Pq = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      gq = 256,
      Jq = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      rq = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Iq = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      jq = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Bq = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      yq = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      Vq = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Dq = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${rq}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${zq("OPACITY","Opacity")}\n${zq("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${Vq}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Iq}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${sq("OPACITY","Opacity","opacity")}\n${sq("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${jq}\n#define CUSTOM_VERTEX_MAIN_END\n${Bq}\n}\n`;
    const pq = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Fq("OPACITY","Opacity","opacity")}\n${Fq("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${Vq}\n${yq}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((QQ,WQ)=>function(QQ){const WQ=`
    frame.lights[LITE_LIGHT$ {
        QQ
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      QQ
    }\
    nvar diffuse$ {
      QQ
    }: vec4f = $ {
      WQ
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      QQ
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      WQ
    }.vLightData, diffuse$ {
      QQ
    }.rgb, $ {
      WQ
    }.vLightSpecular.rgb, diffuse$ {
      QQ
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(WQ))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, Gq = /^([gimus]+)!/, Uq = new Set;

    function bq(QQ) {
      Uq.has(QQ) || (Uq.add(QQ), console.warn(`Lite: no place for plugin code at ${QQ} in the standard shader: it is left out`))
    }

    function vq(QQ, WQ) {
      let XQ = QQ;
      const wQ = new Map;
      for (const [TQ, zQ] of WQ) {
        var qQ;
        wQ.set(TQ, `${null!==(qQ=wQ.get(TQ))&&void 0!==qQ?qQ:""}${zQ}\n`)
      }
      for (const [TQ, zQ] of wQ) {
        if (!TQ.startsWith("!")) {
          const QQ = `#define ${TQ}`;
          if (!XQ.includes(QQ)) {
            bq(TQ);
            continue
          }
          XQ = XQ.replace(QQ, (() => `\n${zQ}\n${QQ}`));
          continue
        }
        let QQ = TQ.substring(1),
          WQ = "g";
        if (QQ.startsWith("!")) WQ = "", QQ = QQ.substring(1);
        else {
          const XQ = Gq.exec(QQ);
          XQ && (WQ = XQ[1], QQ = QQ.substring(WQ.length + 1))
        }
        const wQ = new RegExp(QQ, WQ.includes("g") ? WQ : `${WQ}g`);
        let qQ = wQ.exec(XQ);
        for (qQ || bq(TQ); qQ;) {
          const QQ = qQ,
            WQ = zQ.replace(/\$(\d+)/g, ((WQ, XQ) => Number(XQ) < QQ.length ? QQ[Number(XQ)] : ""));
          XQ = XQ.substring(0, QQ.index) + WQ + XQ.substring(QQ.index + QQ[0].length), wQ.lastIndex = QQ.index + WQ.length, qQ = wQ.exec(XQ)
        }
      }
      return XQ
    }
    const dq = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Hq = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      aq = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function lq(QQ) {
      const WQ = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let XQ = QQ.replace(dq, ((QQ, XQ, wQ, qQ, TQ, zQ) => ("attribute" === XQ ? WQ.attributes.push({
        name: TQ,
        type: zQ
      }) : void 0 === XQ ? WQ.varyings.push({
        name: TQ,
        type: zQ,
        interpolation: iq(zQ, wQ, qQ)
      }) : WQ.uniforms.push({
        name: TQ,
        type: hq(zQ)
      }), "")));
      return XQ = XQ.replace(Hq, ((QQ, XQ) => (WQ.samplers.add(XQ), ""))), XQ = XQ.replace(aq, ((QQ, XQ, wQ) => (WQ.textures.push({
        name: XQ,
        type: wQ
      }), ""))), WQ.body = XQ, WQ
    }

    function hq(QQ) {
      const WQ = QQ.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        XQ = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(WQ);
      if (!XQ) throw new Error(`Lite: unsupported uniform type ${QQ}`);
      return XQ
    }

    function iq(QQ, WQ, XQ) {
      return void 0 === WQ && void 0 === XQ ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(QQ.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === WQ ? "@interpolate(flat) " : `@interpolate(${null!==WQ&&void 0!==WQ?WQ:"perspective"}, ${null!==XQ&&void 0!==XQ?XQ:"center"}) `
    }

    function cq(QQ) {
      return Cq({
        defines: QQ.defines,
        vertex: vq(Dq, QQ.vertexCode),
        fragment: vq(pq, QQ.fragmentCode),
        members: [...wq, ...QQ.defines.has("OPACITY") ? qq : [], ...QQ.defines.has("EMISSIVE") ? Tq : [], ...QQ.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Aq(QQ) {
      const WQ = QQ.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (WQ === QQ) throw new Error("Lite: fragment main has no return");
      return WQ
    }
    const Rq = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${rq}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Iq}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${jq}\n${Bq}\n}\n`,
      Eq = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${yq}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Cq(QQ) {
      const WQ = QQ.defines,
        XQ = lq(eW(QQ.vertex, WQ)),
        wQ = lq(eW(QQ.fragment, WQ)),
        qQ = new Map;
      for (const pQ of [...XQ.varyings, ...wQ.varyings]) qQ.has(pQ.name) || qQ.set(pQ.name, pQ);
      const TQ = [...qQ.values()].map(((QQ, WQ) => `\t@location(${WQ}) ${QQ.interpolation}${QQ.name}: ${QQ.type},`)),
        zQ = [...QQ.members];
      for (const pQ of [...XQ.uniforms, ...wQ.uniforms]) zQ.some((QQ => QQ.name === pQ.name)) || zQ.push(pQ);
      const sQ = Xq(QQ.structName, zQ),
        FQ = [],
        PQ = [];
      let gQ = 1;
      const JQ = new Set;
      for (const pQ of [...XQ.textures, ...wQ.textures]) {
        if (JQ.has(pQ.name)) continue;
        JQ.add(pQ.name);
        const QQ = `${pQ.name}Sampler`,
          WQ = gQ++,
          XQ = gQ++,
          wQ = pQ.type.startsWith("texture_2d_array") ? "2d-array" : pQ.type.startsWith("texture_cube") ? "cube" : "2d";
        FQ.push({
          name: pQ.name,
          binding: WQ,
          samplerBinding: XQ,
          dimension: wQ
        }), PQ.push(`@group(2) @binding(${WQ}) var ${pQ.name}: ${pQ.type};`), PQ.push(`@group(2) @binding(${XQ}) var ${QQ}: sampler;`)
      }
      for (const pQ of [...XQ.samplers, ...wQ.samplers])
        if (!JQ.has(pQ.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${pQ} has no texture`);
      const rQ = [fw, Jq, sQ.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${QQ.structName};`, ...PQ].join("\n"),
        IQ = XQ.attributes,
        jQ = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...XQ.attributes.map(((QQ, WQ) => `\t@location(${WQ}) ${QQ.name}: ${QQ.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        BQ = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...TQ, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        yQ = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...wQ.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...TQ, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", yW, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${BW}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        VQ = QQ => {
          for (const WQ of sQ.stridedArrays) QQ = QQ.replace(new RegExp(`\\b${WQ}\\s*\\[(.*?)\\]`, "g"), `${WQ}[$1].el`);
          return QQ
        };
      return {
        vertex: `${rQ}\n${jQ}\n${BQ}\n${VQ(XQ.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${rQ}\n${yQ}\n${Aq((DQ=VQ(wQ.body),DQ.includes("fragmentInputs.position")?DQ.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):DQ))}`,
        attributes: IQ,
        material: sQ,
        textures: FQ
      };
      var DQ
    }
    const uq = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Lq = QQ => ({
        name: QQ,
        type: "vec3"
      }),
      kq = QQ => ({
        name: QQ,
        type: "float"
      }),
      fq = Xq("EarthSkyUniforms", [Lq("viewFrom"), kq("exposureScale"), Lq("zenithOffset"), kq("fogOn"), Lq("up"), kq("ditherOn"), Lq("sun"), kq("turbidity"), Lq("tint"), kq("rayleigh"), Lq("sunDir"), kq("mieStrength"), Lq("inScatterR"), kq("mieFocus"), Lq("inScatterM"), kq("sunE"), Lq("extinctionBeta"), kq("sunsetMix"), kq("mieScale"), kq("mieBase"), kq("mieSlope"), kq("sunDiscE"), kq("exposure")]),
      Sq = `${fw}\n${Jq}\n${fq.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      tq = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${uq.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      oq = `\n${yW}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(fW).map((QQ=>{let[WQ,XQ]=QQ;return`const TONE_${WQ}: f32 = ${XQ};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${SW};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${BW}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var eq = XQ(37367);
    const nq = new eq.vj,
      xq = new eq.vj,
      Yq = new eq.Quaternion,
      Nq = new Float64Array(3),
      Zq = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Oq = new Float64Array(16);

    function Kq(QQ, WQ, XQ) {
      const wQ = XQ.worldMatrix;
      var qQ;
      QQ.updateFloat3("viewFrom", wQ[12], wQ[13], wQ[14]), QQ.updateFloatsFrom("zenithOffset", WQ.cameraOffset, 0, 3), QQ.updateFloatsFrom("up", WQ.up, 0, 3), WQ.luminance > 0 && (QQ.updateFloat("exposure", WQ.luminance), QQ.updateFloat("exposureScale", (qQ = WQ.luminance, Math.log2(2 / Math.pow(qQ, 4))))), QQ.updateFloat("turbidity", WQ.turbidity), QQ.updateFloat("rayleigh", WQ.rayleigh), QQ.updateFloat("mieStrength", WQ.mieCoefficient), QQ.updateFloat("mieFocus", WQ.mieDirectionalG), QQ.updateFloatsFrom("tint", WQ.tint, 0, 3), QQ.updateFloat("fogOn", WQ.fog && XQ.fogEnabled && 0 !== XQ.fogMode ? 1 : 0), QQ.updateFloat("ditherOn", WQ.dithering ? 1 : 0);
      const TQ = WQ.sunPosition;
      if (nq.set(TQ[0], TQ[1], TQ[2]), !WQ.useSunPosition) {
        const QQ = Math.PI * (WQ.inclination - .5),
          XQ = 2 * Math.PI * (WQ.azimuth - .5);
        nq.set(WQ.distance * Math.cos(XQ) * Math.cos(QQ), WQ.distance * Math.sin(-QQ), WQ.distance * Math.sin(XQ) * Math.cos(QQ)), eq.Quaternion.FromUnitVectorsToRef(eq.vj.UpReadOnly, xq.set(WQ.up[0], WQ.up[1], WQ.up[2]), Yq), nq.rotateByQuaternionToRef(Yq, nq)
      }
      QQ.updateVector3("sun", nq), Nq[0] = nq.x, Nq[1] = nq.y, Nq[2] = nq.z;
      const zQ = kW(WQ, Nq, Zq);
      QQ.updateFloatsFrom("sunDir", zQ.sunDir, 0, 3), QQ.updateFloat("sunE", zQ.sunE), QQ.updateFloatsFrom("inScatterR", zQ.inScatterR, 0, 3), QQ.updateFloatsFrom("inScatterM", zQ.inScatterM, 0, 3), QQ.updateFloatsFrom("extinctionBeta", zQ.extinctionBeta, 0, 3), QQ.updateFloat("sunsetMix", zQ.sunsetMix), QQ.updateFloat("sunDiscE", zQ.sunDiscE), QQ.updateFloat("mieScale", zQ.mieScale), QQ.updateFloat("mieBase", zQ.mieBase), QQ.updateFloat("mieSlope", zQ.mieSlope)
    }

    function mq(QQ, WQ) {
      const XQ = Oq;
      XQ[0] = WQ.far, XQ[5] = WQ.far, XQ[10] = WQ.far, XQ[15] = 1;
      const wQ = QQ.infiniteDistance;
      for (let qQ = 0; qQ < 3; qQ++) XQ[12 + qQ] = QQ.position[qQ] + (wQ ? WQ.worldMatrix[12 + qQ] : 0);
      return Oq
    }
    class Mq {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(QQ, WQ, XQ, wQ, qQ) {
        XQ !== this.pipeline && (QQ.setPipeline(XQ), this.pipeline = XQ), QQ.setBindGroup(1, wQ, [qQ]);
        const TQ = WQ.material.bindGroup;
        TQ !== this.materialGroup && (QQ.setBindGroup(2, TQ), this.materialGroup = TQ);
        const zQ = WQ.program.packGroup;
        zQ && zQ !== this.packGroup && (QQ.setBindGroup(OW.d, zQ), this.packGroup = zQ);
        const {
          vertexBuffers: sQ,
          vertexOffsets: FQ
        } = this;
        for (let PQ = 0; PQ < WQ.vertexBuffers.length; PQ++) sQ[PQ] === WQ.vertexBuffers[PQ] && FQ[PQ] === WQ.vertexOffsets[PQ] || (QQ.setVertexBuffer(PQ, WQ.vertexBuffers[PQ], WQ.vertexOffsets[PQ]), sQ[PQ] = WQ.vertexBuffers[PQ], FQ[PQ] = WQ.vertexOffsets[PQ]);
        WQ.indexBuffer && WQ.indexBuffer !== this.indexBuffer && (QQ.setIndexBuffer(WQ.indexBuffer, WQ.indexFormat), this.indexBuffer = WQ.indexBuffer)
      }
    }
    class QT {
      constructor(QQ, WQ, XQ, wQ) {
        this.modelMeshes = QQ, this.i_ = WQ, this.maker = XQ, this.warnOnce = wQ, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (QQ, WQ) => {
          (WQ < -1 || WQ > 1) && this.warnOnce(`group:${WQ}`, `rendering group ${WQ} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(QQ) {
        this.collectGroup(QQ, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(QQ, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(QQ, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.i_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(WT), this.transparentDraws.sort(XT)
      }
      collectGroup(QQ, WQ, XQ, wQ, qQ) {
        const TQ = this.modelMeshes.group(WQ),
          zQ = this.i_.group(WQ),
          sQ = 0 === WQ ? null === zQ || void 0 === zQ ? void 0 : zQ.opaque : void 0;
        this.collectList(QQ, null === TQ || void 0 === TQ ? void 0 : TQ.opaque, sQ || null === zQ || void 0 === zQ ? void 0 : zQ.opaque, WQ, !1, XQ, qQ), sQ && (this.i_.drawn += this.maker.bundleDraws(QQ, sQ, WQ)), this.collectList(QQ, null === TQ || void 0 === TQ ? void 0 : TQ.alphaTest, void 0, WQ, !1, XQ, qQ), this.collectList(QQ, null === TQ || void 0 === TQ ? void 0 : TQ.transparent, null === zQ || void 0 === zQ ? void 0 : zQ.transparent, WQ, !0, wQ, qQ)
      }
      collectList(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        var sQ;
        const FQ = TQ.length;
        WQ && this.maker.pushDraws(QQ, WQ.units, WQ.units.length, wQ, qQ, TQ, WQ.rows), XQ && (this.i_.drawn += this.maker.pushDraws(QQ, XQ, XQ.length, wQ, qQ, TQ));
        const PQ = qQ ? null === (sQ = this.modelMeshes.group(wQ)) || void 0 === sQ ? void 0 : sQ.text : void 0;
        PQ && this.maker.pushDraws(QQ, PQ.units, PQ.units.length, wQ, !0, TQ, PQ.rows), zQ && wT(TQ, FQ)
      }
    }

    function WT(QQ, WQ) {
      return QQ.program.id - WQ.program.id || QQ.material.owner.uniqueId - WQ.material.owner.uniqueId
    }

    function XT(QQ, WQ) {
      return QQ.material.owner.uniqueId - WQ.material.owner.uniqueId
    }

    function wT(QQ, WQ) {
      for (let XQ = WQ + 1; XQ < QQ.length; XQ++) {
        const wQ = QQ[XQ];
        let qQ = XQ - 1;
        for (; qQ >= WQ && XT(QQ[qQ], wQ) > 0; qQ--) QQ[qQ + 1] = QQ[qQ];
        QQ[qQ + 1] = wQ
      }
    }
    const qT = {};

    function TT(QQ) {
      return QQ.hasThinInstances ? "thin" : QQ.UqQ || QQ._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function zT(QQ, WQ, XQ) {
      return QQ ? (XQ._needUVs = !0, QQ.optimizeUVAllocation && (0, lQ.M)(QQ.matrix) ? (XQ[`${WQ}DIRECTUV`] = QQ.uvSet + 1, XQ[`MAINUV${QQ.uvSet+1}`] = !0) : XQ[`${WQ}DIRECTUV`] = 0, !0) : (XQ[`${WQ}DIRECTUV`] = 0, !1)
    }

    function sT(QQ) {
      const WQ = new Map;
      for (const XQ in QQ) {
        if (95 === XQ.charCodeAt(0)) continue;
        const wQ = QQ[XQ],
          qQ = typeof wQ;
        "number" === qQ || "string" === qQ ? WQ.set(XQ, String(wQ)) : wQ && "function" !== qQ && WQ.set(XQ, !0)
      }
      return WQ
    }

    function FT(QQ) {
      const WQ = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: XQ
        }
        of QQ.features)
        for (const QQ in XQ) WQ[QQ] = XQ[QQ];
      return WQ
    }

    function PT(QQ) {
      const WQ = QQ.parts.geometry;
      return null !== WQ && void 0 !== WQ && WQ.live ? WQ : null
    }

    function gT(QQ) {
      var WQ;
      return null !== (WQ = PT(QQ)) && void 0 !== WQ ? WQ : qT
    }
    class JT {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = QQ, this.warnOnce = WQ, this.programWithModel = XQ, this.packFailed = wQ, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(QQ, WQ, XQ, wQ, qQ) {
        const TQ = WQ.owner;
        let zQ = this.drawStates.get(WQ);
        if (!zQ) {
          const QQ = WQ.parts.materials[WQ.range];
          if (!QQ) return this.warnOnce("model", `${XQ.name} on ${TQ.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          zQ = {
            defines: FT(QQ),
            model: QQ,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: qQ,
            groupId: wQ,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(WQ, zQ)
        }
        if (this.programCurrent(zQ, WQ, qQ, wQ)) return zQ.program;
        const {
          model: sQ
        } = zQ, FQ = gT(WQ), PQ = this.instanceLayout(TQ, qQ), gQ = this.definesBits(TQ);
        if (!this.prepareModelDefines(QQ, TQ, sQ, zQ.defines, wQ, qQ)) return null;
        zQ.instancing = qQ, zQ.groupId = wQ, zQ.modelVersion = sQ.version, zQ.geometry = FQ, zQ.instanceLayout = PQ, zQ.definesBits = gQ;
        const JQ = function(QQ) {
          let WQ = "";
          for (const [XQ, wQ] of QQ) WQ += !0 === wQ ? `${XQ};` : `${XQ}=${wQ};`;
          return WQ
        }(sT(zQ.defines));
        return JQ === zQ.definesKey && zQ.packVariant === this.modelPackVariant && zQ.program && !this.packFailed(zQ.program) || (zQ.definesKey = JQ, zQ.packVariant = this.modelPackVariant, zQ.program = this.programWithModel(sQ, zQ.defines, JQ)), zQ.program
      }
      programCurrent(QQ, WQ, XQ, wQ) {
        return null !== QQ.program && !this.packFailed(QQ.program) && QQ.instancing === XQ && QQ.groupId === wQ && this.definesHold(QQ, WQ, XQ)
      }
      definesHold(QQ, WQ, XQ) {
        return QQ.modelVersion === QQ.model.version && QQ.geometry === gT(WQ) && QQ.instanceLayout === this.instanceLayout(WQ.owner, XQ) && QQ.definesBits === this.definesBits(WQ.owner) && QQ.packVariant === this.modelPackVariant
      }
      modelPackKind(QQ) {
        var WQ;
        return 0 === this.modelPackVariant ? null : null !== (WQ = (0, HQ.u)(QQ, dQ.k.name)) && void 0 !== WQ && WQ.active ? "placed" : QQ.item ? "item" : QQ.lifeform ? "lifeform" : QQ.box ? "box" : null
      }
      instanceLayout(QQ, WQ) {
        var XQ, wQ, qQ;
        return "thin" === WQ ? null !== (qQ = this.resources.K4.get(QQ)) && void 0 !== qQ ? qQ : null : "instanced" === WQ && null !== (XQ = null === (wQ = QQ._userInstancedBuffersStorage) || void 0 === wQ ? void 0 : wQ.interleavedKinds) && void 0 !== XQ ? XQ : null
      }
      definesBits(QQ) {
        const WQ = this.view;
        return (QQ.visibility < 1 ? 1 : 0) | (QQ.hasVertexAlpha ? 2 : 0) | (QQ.applyFog ? 4 : 0) | (QQ.useVertexColors ? 8 : 0) | (QQ.nonUniformScaling ? 16 : 0) | (WQ.fogEnabled && 0 !== WQ.fogMode ? 32 : 0) | (WQ.lightsEnabled ? 64 : 0) | WQ.lightCount << 7
      }
      prepareLightDefines(QQ, WQ, XQ) {
        let wQ = 0;
        if (this.view.lightsEnabled && !WQ) {
          const WQ = Math.min(XQ, 4);
          for (; wQ < this.view.lightCount && (QQ[`LIGHT${wQ}`] = !0, QQ[`LITE_LIGHT${wQ}_SLOT`] = wQ, wQ++, QQ._needNormals = !0, wQ !== WQ););
        }
        for (let qQ = wQ; qQ < 4; qQ++) QQ[`LIGHT${qQ}`] = !1, QQ[`LITE_LIGHT${qQ}_SLOT`] = void 0
      }
      prepareModelDefines(QQ, WQ, XQ, wQ, qQ, TQ) {
        const {
          features: zQ
        } = XQ;
        wQ._needNormals = !1, wQ._needUVs = !1;
        const sQ = this.view;
        this.prepareLightDefines(wQ, XQ.disableLighting, XQ.maxSimultaneousLights), wQ.MAINUV1 = !1, wQ.MAINUV2 = !1;
        const FQ = XQ.diffuseTexture;
        FQ ? (wQ._needUVs = !0, wQ.DIFFUSE = !0, FQ.optimizeUVAllocation && (0, lQ.M)(FQ.matrix) ? (wQ.DIFFUSEDIRECTUV = FQ.uvSet + 1, wQ[`MAINUV${FQ.uvSet+1}`] = !0) : wQ.DIFFUSEDIRECTUV = 0, FQ.uvSet > 1 && this.warnOnce(`uvset:${XQ.name}`, `${XQ.name} samples UV set ${FQ.uvSet+1}, which is not supported`)) : (wQ.DIFFUSE = !1, wQ.DIFFUSEDIRECTUV = 0);
        const PQ = XQ.opacityTexture,
          gQ = XQ.emissiveTexture;
        wQ.OPACITY = zT(PQ, "OPACITY", wQ), wQ.OPACITYRGB = null !== PQ && PQ.getAlphaFromRGB, wQ.EMISSIVE = zT(gQ, "EMISSIVE", wQ), (PQ && PQ.uvSet > 1 || gQ && gQ.uvSet > 1) && this.warnOnce(`uvset:${XQ.name}`, `${XQ.name} samples a UV set past 2, which is not supported`);
        const JQ = XQ.reflectionTexture,
          rQ = null !== JQ;
        if (rQ) {
          if (!this.resources.boundTexture(JQ)) return !1;
          wQ._needNormals = !0
        }
        wQ.REFLECTION = rQ, wQ.REFLECTIONMAP_3D = rQ, wQ.REFLECTIONMAP_SKYBOX = rQ, wQ.REFLECTIONMAP_OPPOSITEZ = rQ && (QQ.useRightHandedSystem ? !JQ.invertZ : JQ.invertZ), wQ.ROUGHNESS = rQ && XQ.roughness > 0, wQ.REFLECTIONOVERALPHA = rQ && XQ.useReflectionOverAlpha, wQ.LITE_REFLECTION_LUMINANCE = rQ && "cube" === JQ.source.kind && JQ.source.luminance, (WQ.skeleton || WQ.morphTargetManager) && this.warnOnce(`skin:${WQ.name}`, `${WQ.name} has bones or morph targets, which are not supported`), wQ.FOG = XQ.fogEnabled && WQ.applyFog && sQ.fogEnabled && 0 !== sQ.fogMode, wQ.NONUNIFORMSCALING = WQ.nonUniformScaling;
        const {
          visibility: IQ,
          hasVertexAlpha: jQ
        } = WQ;
        wQ.ALPHATEST = (0, HQ.U)(XQ, IQ, jQ), wQ.ALPHAFROMDIFFUSE = (0, HQ.gb)(XQ), wQ.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== XQ.transparencyMode, wQ.ALPHABLEND = null === XQ.transparencyMode || (0, HQ.Q)(XQ, IQ, jQ), wQ.PREMULTIPLYALPHA = 7 === XQ.alphaMode || 8 === XQ.alphaMode, wQ.EMISSIVEASILLUMINATION = XQ.useEmissiveAsIllumination, wQ.LINKEMISSIVEWITHDIFFUSE = XQ.linkEmissiveWithDiffuse, wQ.TWOSIDEDLIGHTING = !XQ.backFaceCulling && XQ.twoSidedLighting, wQ.INSTANCES = "none" !== TQ, wQ.THIN_INSTANCES = "thin" === TQ, wQ.LITE_FRONT_LAYER = qQ >= 1;
        for (const {
            feature: vQ,
            state: dQ,
            active: HQ
          }
          of zQ) {
          var BQ, yQ;
          if (HQ) null === (BQ = (yQ = (0, RW.g)(vQ)).prepareDefinesBeforeAttributes) || void 0 === BQ || BQ.call(yQ, dQ, wQ, QQ, WQ)
        }
        this.modelPackKind(XQ) && (wQ._needNormals = !0), wQ.NORMAL = wQ._needNormals && WQ.isVerticesDataPresent("normal"), wQ.UV1 = wQ._needUVs && WQ.isVerticesDataPresent("uv"), wQ.UV2 = wQ._needUVs && WQ.isVerticesDataPresent("uv2");
        const VQ = WQ.useVertexColors && WQ.isVerticesDataPresent("color");
        wQ.VERTEXCOLOR = VQ, wQ.VERTEXALPHA = WQ.hasVertexAlpha && VQ, wQ.INSTANCESCOLOR = "none" !== TQ && WQ.isVerticesDataPresent("instanceColor");
        for (const {
            feature: vQ,
            state: dQ,
            active: HQ
          }
          of zQ) {
          var DQ, pQ;
          if (HQ) null === (DQ = (pQ = (0, RW.g)(vQ)).prepareDefines) || void 0 === DQ || DQ.call(pQ, dQ, wQ, QQ, WQ, XQ)
        }
        const GQ = QQ.Uj();
        for (const {
            feature: vQ,
            state: dQ,
            active: HQ
          }
          of zQ) {
          var UQ, bQ;
          if (HQ && !1 === (null === (UQ = (bQ = (0, RW.g)(vQ)).isReadyForSubMesh) || void 0 === UQ ? void 0 : UQ.call(bQ, dQ, wQ, QQ, GQ))) return !1
        }
        return !0
      }
    }

    function rT(QQ, WQ, XQ) {
      return QQ.codeVersion !== WQ.version && function(QQ, WQ) {
        const XQ = [],
          wQ = [];
        for (const {
            feature: rQ,
            state: IQ,
            active: jQ
          }
          of WQ.features) {
          var qQ, TQ, zQ, sQ;
          if (jQ) IT(null === (qQ = (TQ = (0, RW.g)(rQ)).getCustomCode) || void 0 === qQ ? void 0 : qQ.call(TQ, IQ, "vertex", bQ.b.WGSL), XQ), IT(null === (zQ = (sQ = (0, RW.g)(rQ)).getCustomCode) || void 0 === zQ ? void 0 : zQ.call(sQ, IQ, "fragment", bQ.b.WGSL), wQ)
        }
        const FQ = [];
        for (const {
            feature: rQ,
            state: IQ
          }
          of WQ.features) {
          var PQ, gQ;
          const QQ = null === (PQ = (gQ = (0, RW.g)(rQ)).getUniforms) || void 0 === PQ ? void 0 : PQ.call(gQ, IQ, bQ.b.WGSL);
          for (const WQ of null !== (JQ = null === QQ || void 0 === QQ ? void 0 : QQ.ubo) && void 0 !== JQ ? JQ : []) {
            var JQ;
            WQ.size && WQ.type && FQ.push({
              name: WQ.name,
              type: WQ.type,
              arraySize: WQ.arraySize
            })
          }
        }
        QQ.vertexCode = XQ, QQ.fragmentCode = wQ, QQ.pluginUniforms = FQ, QQ.codeKey = JSON.stringify([XQ, wQ, FQ]), QQ.codeVersion = WQ.version
      }(QQ, WQ), `${XQ}#${QQ.codeKey}`
    }

    function IT(QQ, WQ) {
      if (QQ)
        for (const XQ in QQ) QQ[XQ] && WQ.push([XQ, QQ[XQ]])
    }
    const jT = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class BT {
      constructor(QQ) {
        this.warnOnce = QQ, this.states = new Map
      }
      renderState(QQ, WQ, XQ, wQ) {
        var qQ;
        let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          zQ = null !== (qQ = QQ.sideOrientation) && void 0 !== qQ ? qQ : WQ.sideOrientation;
        WQ._getWorldMatrixDeterminant() < 0 && (zQ = 0 === zQ ? 1 : 0);
        const sQ = "triangle-list" === TQ,
          FQ = XQ ? QQ.alphaMode : 0,
          PQ = (!XQ || (0 === FQ || QQ.forceDepthWrite)) && !QQ.disableDepthWrite,
          gQ = sQ && QQ.backFaceCulling ? QQ.cullBackFaces ? "back" : "front" : "none",
          JQ = sQ && 0 !== zQ ? "ccw" : "cw",
          rQ = QQ.depthFunction,
          IQ = sQ ? QQ.zOffset : 0,
          jQ = sQ ? QQ.zOffsetUnits : 0,
          BQ = !QQ.disableColorWrite;
        return wQ && wQ.alphaMode === FQ && wQ.depthWrite === PQ && wQ.depthFunction === rQ && wQ.cullMode === gQ && wQ.frontFace === JQ && wQ.zOffset === IQ && wQ.zOffsetUnits === jQ && wQ.colourWrite === BQ && wQ.topology === TQ ? wQ : this.stateFor(FQ, PQ, rQ, gQ, JQ, IQ, jQ, BQ, TQ)
      }
      stateFor(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        const PQ = `${QQ}|${WQ}|${XQ}|${wQ}|${qQ}|${TQ}|${zQ}|${sQ}|${FQ}`;
        let gQ = this.states.get(PQ);
        if (!gQ) {
          var JQ;
          const rQ = QQ ? TW(QQ) : null;
          QQ && !rQ && this.warnOnce(`alpha:${QQ}`, `alpha mode ${QQ} is not supported`), gQ = {
            key: PQ,
            alphaMode: QQ,
            depthFunction: XQ,
            zOffset: TQ,
            zOffsetUnits: zQ,
            topology: FQ,
            blend: rQ,
            depthWrite: WQ,
            depthCompare: XQ && null !== (JQ = jT.get(XQ)) && void 0 !== JQ ? JQ : null,
            cullMode: wQ,
            frontFace: qQ,
            depthBias: -zQ,
            depthBiasSlopeScale: -TQ,
            colourWrite: sQ
          }, this.states.set(PQ, gQ)
        }
        return gQ
      }
    }
    var yT = XQ(37711);

    function VT(QQ) {
      if (!QQ.frozen) return -1;
      let WQ = QQ.version;
      for (const {
          feature: XQ,
          state: wQ,
          active: qQ
        }
        of QQ.features) {
        if (!qQ || !XQ.bind) continue;
        const QQ = (0, RW.g)(XQ).uniformsVersion;
        if (!QQ) return -1;
        WQ += QQ(wQ)
      }
      return WQ
    }
    class DT {
      constructor(QQ, WQ, XQ) {
        this.slots = QQ, this.data = WQ, this.textures = XQ, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(QQ, WQ) {
        this.write4(QQ, WQ, 0, 0, 0, 1)
      }
      updateFloat2(QQ, WQ, XQ) {
        this.write4(QQ, WQ, XQ, 0, 0, 2)
      }
      updateFloat3(QQ, WQ, XQ, wQ) {
        this.write4(QQ, WQ, XQ, wQ, 0, 3)
      }
      updateFloat4(QQ, WQ, XQ, wQ, qQ) {
        this.write4(QQ, WQ, XQ, wQ, qQ, 4)
      }
      updateVector3(QQ, WQ) {
        this.write4(QQ, WQ.x, WQ.y, WQ.z, 0, 3)
      }
      updateVector4(QQ, WQ) {
        this.write4(QQ, WQ.x, WQ.y, WQ.z, WQ.w, 4)
      }
      updateColor3(QQ, WQ) {
        this.write4(QQ, WQ.r, WQ.g, WQ.b, 0, 3)
      }
      updateColor4(QQ, WQ, XQ) {
        this.write4(QQ, WQ.r, WQ.g, WQ.b, XQ, 4)
      }
      updateFloatsFrom(QQ, WQ, XQ, wQ) {
        const qQ = this.slots.get(QQ);
        if (!qQ) return;
        const TQ = this.data,
          zQ = qQ.offset;
        for (let sQ = 0; sQ < wQ; sQ++) TQ[zQ + sQ] = WQ[XQ + sQ]
      }
      updateFloat3TimesFloats(QQ, WQ, XQ, wQ) {
        const qQ = this.slots.get(QQ);
        if (!qQ) return;
        const TQ = this.data,
          zQ = qQ.offset;
        TQ[zQ] = WQ[XQ] * wQ[0], TQ[zQ + 1] = WQ[XQ + 1] * wQ[1], TQ[zQ + 2] = WQ[XQ + 2] * wQ[2]
      }
      N_(QQ, WQ) {
        const XQ = this.slots.get(QQ);
        XQ && this.data.set(WQ.m, XQ.offset)
      }
      updateMatrixFloats(QQ, WQ) {
        const XQ = this.slots.get(QQ);
        XQ && this.data.set(WQ, XQ.offset)
      }
      updateFloatArray(QQ, WQ) {
        const XQ = this.slots.get(QQ);
        if (!XQ) return;
        if (!XQ.arraySize || XQ.stride === XQ.floats) return void this.data.set(WQ, XQ.offset);
        const wQ = Math.min(WQ.length, XQ.floats * XQ.arraySize);
        for (let qQ = 0; qQ < wQ; qQ++) this.data[XQ.offset + Math.floor(qQ / XQ.floats) * XQ.stride + qQ % XQ.floats] = WQ[qQ]
      }
      updateArray(QQ, WQ) {
        this.updateFloatArray(QQ, WQ)
      }
      setTexture(QQ, WQ) {
        this.textures.set(QQ, WQ), this.expected.delete(QQ)
      }
      expectTexture(QQ) {
        this.textures.set(QQ, null), this.expected.add(QQ)
      }
      write4(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = this.slots.get(QQ);
        if (!zQ) return;
        const sQ = this.data,
          FQ = zQ.offset;
        sQ[FQ] = WQ, TQ > 1 && (sQ[FQ + 1] = XQ), TQ > 2 && (sQ[FQ + 2] = wQ), TQ > 3 && (sQ[FQ + 3] = qQ)
      }
    }

    function pT(QQ, WQ) {
      const XQ = Pq,
        wQ = yT.h,
        qQ = QQ.lights,
        TQ = Math.min(QQ.lightCount, 8);
      for (let zQ = 0; zQ < TQ; zQ++) {
        const QQ = XQ.lights + zQ * XQ.lightStride,
          TQ = zQ * yT.c;
        WQ[QQ] = qQ[TQ + wQ.vector], WQ[QQ + 1] = qQ[TQ + wQ.vector + 1], WQ[QQ + 2] = qQ[TQ + wQ.vector + 2], WQ[QQ + 3] = qQ[TQ + wQ.kind] === yT.e.directional ? 1 : 0, WQ[QQ + 4] = qQ[TQ + wQ.diffuse], WQ[QQ + 5] = qQ[TQ + wQ.diffuse + 1], WQ[QQ + 6] = qQ[TQ + wQ.diffuse + 2], WQ[QQ + 7] = qQ[TQ + wQ.range], WQ[QQ + 8] = qQ[TQ + wQ.specular], WQ[QQ + 9] = qQ[TQ + wQ.specular + 1], WQ[QQ + 10] = qQ[TQ + wQ.specular + 2], WQ[QQ + 11] = qQ[TQ + wQ.range]
      }
      WQ[XQ.fogInfos] = QQ.fogMode, WQ[XQ.fogInfos + 1] = QQ.fogStart, WQ[XQ.fogInfos + 2] = QQ.fogEnd, WQ[XQ.fogInfos + 3] = QQ.fogDensity, WQ[XQ.fogColour] = QQ.fogColour[0], WQ[XQ.fogColour + 1] = QQ.fogColour[1], WQ[XQ.fogColour + 2] = QQ.fogColour[2], WQ[XQ.outputHeight] = QQ.renderHeight, WQ[XQ.animTick] = QQ.animTick, WQ[XQ.timeMs] = QQ.timeMs
    }
    class GT {
      constructor(QQ) {
        this.instancesOf = QQ
      }
      refreshModelUniforms(QQ, WQ, XQ, wQ) {
        const qQ = VT(XQ);
        if (qQ >= 0 && qQ === WQ.heldVersion && WQ.textures.get("diffuseSampler") === XQ.diffuseTexture && WQ.textures.get("reflectionCubeSampler") === XQ.reflectionTexture && WQ.textures.get("opacitySampler") === XQ.opacityTexture && WQ.textures.get("emissiveSampler") === XQ.emissiveTexture) return !0;
        if (qQ < 0)
          for (const TQ of this.instancesOf(XQ)) TQ.heldVersion = -1;
        return this.writeModelUniforms(QQ, WQ, XQ, wQ), WQ.heldVersion = qQ, !1
      }
      writeModelUniforms(QQ, WQ, XQ, wQ) {
        const {
          ubo: qQ
        } = WQ, TQ = XQ.diffuseTexture, zQ = XQ.diffuseColor;
        qQ.updateFloat4("vDiffuseColor", zQ[0], zQ[1], zQ[2], XQ.alpha), TQ && (qQ.updateFloat2("vDiffuseInfos", TQ.uvSet, TQ.level), qQ.updateMatrixFloats("diffuseMatrix", TQ.matrix)), qQ.updateFloat("alphaCutOff", XQ.alphaCutOff), qQ.updateFloatsFrom("vEmissiveColor", XQ.emissiveColor, 0, 3), qQ.updateFloat3TimesFloats("vAmbientColor", wQ.ambientColour, 0, XQ.ambientColor);
        const sQ = XQ.specularColor;
        qQ.updateFloat4("vSpecularColor", sQ[0], sQ[1], sQ[2], XQ.specularPower), qQ.setTexture("diffuseSampler", TQ);
        const FQ = XQ.opacityTexture;
        FQ && (qQ.updateFloat2("vOpacityInfos", FQ.uvSet, FQ.level), qQ.updateMatrixFloats("opacityMatrix", FQ.matrix)), qQ.setTexture("opacitySampler", FQ);
        const PQ = XQ.emissiveTexture;
        PQ && (qQ.updateFloat2("vEmissiveInfos", PQ.uvSet, PQ.level), qQ.updateMatrixFloats("emissiveMatrix", PQ.matrix)), qQ.setTexture("emissiveSampler", PQ);
        const gQ = XQ.reflectionTexture;
        gQ && qQ.updateMatrixFloats("reflectionMatrix", gQ.matrix), qQ.updateFloat2("vReflectionInfos", gQ ? gQ.level * QQ.iblIntensity : 0, XQ.roughness), qQ.setTexture("reflectionCubeSampler", gQ);
        const JQ = QQ.Uj();
        for (const {
            feature: jQ,
            state: BQ,
            active: yQ
          }
          of XQ.features) {
          var rQ, IQ;
          if (yQ) null === (rQ = (IQ = (0, RW.g)(jQ)).bind) || void 0 === rQ || rQ.call(IQ, BQ, qQ, QQ, JQ)
        }
      }
    }

    function UT(QQ) {
      const WQ = QQ.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(WQ) ? "u32" : /i32|^vec\di$/.test(WQ) ? "i32" : "f32"
    }

    function bT(QQ, WQ) {
      const XQ = QQ.getSize(),
        wQ = UT(WQ),
        qQ = QQ => 4 === XQ ? `${QQ}x4` : 2 === XQ ? `${QQ}x2` : null;
      if ("f32" === wQ) {
        if (5126 === QQ.type) return 1 === XQ ? "float32" : XQ >= 2 && XQ <= 4 ? `float32x${XQ}` : null;
        if (!QQ.normalized) return null;
        switch (QQ.type) {
          case 5121:
            return qQ("unorm8");
          case 5120:
            return qQ("snorm8");
          case 5123:
            return qQ("unorm16");
          case 5122:
            return qQ("snorm16")
        }
        return null
      }
      const TQ = "u32" === wQ ? "uint" : "sint";
      switch (QQ.type) {
        case 5125:
        case 5124:
          return 1 === XQ ? `${TQ}32` : XQ <= 4 ? `${TQ}32x${XQ}` : null;
        case 5121:
        case 5120:
          return qQ(`${TQ}8`);
        case 5123:
        case 5122:
          return qQ(`${TQ}16`)
      }
      return null
    }

    function vT(QQ) {
      var WQ;
      const XQ = /(8|16|32)(?:x(\d))?$/.exec(QQ);
      return XQ ? Number(XQ[1]) / 8 * Number(null !== (WQ = XQ[2]) && void 0 !== WQ ? WQ : 1) : 4
    }
    class dT {
      constructor(QQ, WQ, XQ) {
        this.resources = QQ, this.limits = WQ, this.warnOnce = XQ, this.layouts = new Map
      }
      resolveInputs(QQ, WQ, XQ, wQ) {
        const qQ = [],
          TQ = XQ.program.attributes,
          zQ = [];
        for (let gQ = 0; gQ < TQ.length; gQ++) {
          const XQ = TQ[gQ],
            sQ = XQ.optional ? null : this.resources.vertexInput(QQ, XQ.name, wQ);
          if (!sQ) {
            const QQ = UT(XQ.type),
              WQ = "u32" === QQ ? "uint32x4" : "i32" === QQ ? "sint32x4" : "float32x4";
            zQ.push(null);
            const wQ = qQ.find((QQ => null === QQ.data));
            wQ ? wQ.attributes.push({
              shaderLocation: gQ,
              offset: 0,
              format: WQ
            }) : qQ.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: gQ,
                offset: 0,
                format: WQ
              }]
            });
            continue
          }
          const FQ = sQ.getBuffer();
          zQ.push(sQ);
          const PQ = bT(sQ, XQ.type);
          if (!PQ) return this.warnOnce(`format:${WQ}:${XQ.name}`, `${WQ}'s ${XQ.name} (type ${sQ.type}, size ${sQ.getSize()}) has no WebGPU vertex format`), null;
          const JQ = sQ.getIsInstanced() ? "instance" : "vertex",
            rQ = sQ.byteStride,
            IQ = vT(PQ),
            jQ = qQ.find((QQ => QQ.data === FQ && QQ.stride === rQ && QQ.step === JQ && sQ.byteOffset >= QQ.base && sQ.byteOffset - QQ.base + IQ <= rQ));
          jQ ? jQ.attributes.push({
            shaderLocation: gQ,
            offset: sQ.byteOffset - jQ.base,
            format: PQ
          }) : qQ.push({
            data: FQ,
            base: sQ.byteOffset,
            stride: rQ,
            step: JQ,
            attributes: [{
              shaderLocation: gQ,
              offset: 0,
              format: PQ
            }]
          })
        }
        if (qQ.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${WQ}`, `${WQ} needs ${qQ.length} vertex buffers`), null;
        let sQ = "";
        for (const gQ of qQ) {
          sQ += `${gQ.stride}${"instance"===gQ.step?"i":"v"}`;
          for (const QQ of gQ.attributes) sQ += `,${QQ.shaderLocation}:${QQ.offset}:${QQ.format}`;
          sQ += ";"
        }
        let FQ = this.layouts.get(sQ);
        FQ || (FQ = {
          key: sQ,
          buffers: qQ.map((QQ => ({
            arrayStride: QQ.stride,
            stepMode: QQ.step,
            attributes: QQ.attributes
          }))),
          instanceEnds: qQ.map((QQ => {
            let WQ = -1;
            if ("instance" === QQ.step)
              for (const XQ of QQ.attributes) WQ = Math.max(WQ, XQ.offset + vT(XQ.format));
            return WQ
          }))
        }, this.layouts.set(sQ, FQ));
        const PQ = qQ.map((QQ => QQ.base));
        return {
          program: XQ,
          sources: zQ,
          layout: FQ,
          slotData: qQ.map((QQ => QQ.data)),
          E_: PQ,
          buffers: [],
          offsets: PQ,
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

    function HT(QQ, WQ, XQ, wQ) {
      const qQ = WQ.program.program.attributes;
      for (let TQ = 0; TQ < qQ.length; TQ++) {
        if ((qQ[TQ].optional ? null : XQ.vertexInput(QQ, qQ[TQ].name, wQ)) !== WQ.sources[TQ]) return !1
      }
      return !0
    }
    const aT = 64;
    class lT {
      constructor(QQ, WQ, XQ, wQ) {
        this.device = QQ, this.layout = WQ, this.frameBuffer = XQ, this.label = wQ, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(QQ) {
        if (QQ * aT <= this.data.length) return !1;
        let WQ = 2 * this.data.length;
        for (; QQ * aT > WQ;) WQ *= 2;
        const XQ = new Float32Array(WQ);
        return XQ.set(this.data), this.data = XQ, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = this.data,
          TQ = QQ * aT;
        let zQ = qQ[TQ + 16] !== XQ;
        for (let sQ = 0; sQ < 16 && !zQ; sQ++) zQ = qQ[TQ + sQ] !== WQ[wQ + sQ];
        if (zQ) {
          for (let QQ = 0; QQ < 16; QQ++) qQ[TQ + QQ] = WQ[wQ + QQ];
          qQ[TQ + 16] = XQ
        }
        return zQ
      }
      upload(QQ, WQ) {
        this.device.queue.writeBuffer(this.buffer, QQ * gq, this.data, QQ * aT, (WQ - QQ) * aT)
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

    function hT(QQ) {
      return QQ.gpu[lQ.f.lite] ??= QQ.materials.map(((WQ, XQ) => ({
        parts: QQ,
        range: XQ,
        owner: QQ.owner
      })))
    }

    function iT(QQ) {
      var WQ, XQ, wQ;
      return null !== (WQ = null !== (XQ = null === (wQ = QQ.parts.materials[QQ.range]) || void 0 === wQ ? void 0 : wQ.mirror) && void 0 !== XQ ? XQ : QQ.owner.material) && void 0 !== WQ ? WQ : null
    }
    const cT = ["opaque", "alphaTest", "transparent", "text"];

    function AT(QQ) {
      for (const WQ of cT) QQ[WQ].units.length = 0, QQ[WQ].rows.length = 0
    }
    class RT {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, AW.e)("Lite: ")
      }
      attach(QQ, WQ) {
        this.model = QQ, this.mirror = WQ
      }
      get worlds() {
        return this.model.nodes.nJ
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(QQ) {
        return this.groups.get(QQ)
      }
      forEachGroup(QQ) {
        this.groups.forEach(QQ)
      }
      forEachSelected(QQ) {
        for (const [WQ, XQ] of this.groups)
          for (const wQ of cT)
            for (const qQ of XQ[wQ].units) QQ(qQ.owner, "text" === wQ ? "transparent" : wQ, WQ)
      }
      select(QQ, WQ) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(AT);
        const {
          model: XQ,
          mirror: wQ
        } = this;
        if (!XQ || !wQ || !QQ) return;
        this.rows.length < XQ.nodes.yJ && (this.rows = new Int32Array(XQ.nodes.yJ));
        const qQ = this.rows,
          TQ = XQ.meshes;
        for (let sQ = 0; sQ < TQ.looseCount; sQ++) {
          const QQ = TQ.loose[sQ],
            XQ = wQ.nodes[QQ];
          XQ && !XQ.isBlocked && XQ.isEnabled() && !XQ.oB.hasAZeroComponent && TQ.selects(QQ, WQ.frustum) && (this.activate(XQ, QQ), this.selectedCount++)
        }
        const zQ = TQ.selectTextPlanes(WQ.frustum, qQ);
        for (let sQ = 0; sQ < zQ; sQ++) {
          const WQ = qQ[sQ],
            TQ = wQ.nodes[WQ],
            zQ = XQ.meshes.parts[WQ];
          if (!TQ.isVisible || !(TQ.visibility > 0) || 0 === (TQ.layerMask & QQ.layerMask) || !zQ) continue;
          const FQ = this.groupOf(XQ.meshes.layer[WQ]).text;
          for (const QQ of hT(zQ)) FQ.units.push(QQ), FQ.rows.push(WQ);
          this.selectedCount++
        }
      }
      instanceBatch(QQ) {
        const WQ = this.batchOf(QQ);
        return WQ.dispatched || (WQ.dispatched = WQ.renderSelf = !0, WQ.row = this.rowOf(QQ)), WQ
      }
      rowOf(QQ) {
        return QQ.row
      }
      activate(QQ, WQ) {
        if (!QQ.pE) {
          const XQ = QQ;
          if (XQ.UqQ) {
            const QQ = this.batchOf(XQ);
            QQ.dispatched = !0, QQ.renderSelf = !0, QQ.row = WQ
          }
          return void this.dispatch(XQ, WQ, WQ)
        }
        const XQ = QQ,
          wQ = XQ.bqQ;
        if (wQ._getWorldMatrixDeterminant() >= 0 !== XQ._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${wQ.name}`, `A mirrored InstancedMesh of ${wQ.name} is not drawn yet`);
        const qQ = this.batchOf(wQ);
        qQ.instances.push(XQ), qQ.rows.push(WQ), qQ.dispatched || (qQ.dispatched = !0, this.dispatch(wQ, WQ, this.rowOf(wQ)))
      }
      batchOf(QQ) {
        let WQ = this.batches.get(QQ);
        return WQ || (WQ = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(QQ, WQ)), WQ.frame !== this.frame && (WQ.frame = this.frame, WQ.dispatched = !1, WQ.renderSelf = !1, WQ.instances.length = 0, WQ.rows.length = 0), WQ
      }
      dispatch(QQ, WQ, XQ) {
        const {
          layer: wQ,
          parts: qQ
        } = this.model.meshes;
        if (!qQ[WQ]) return;
        const TQ = this.groupOf(wQ[WQ]),
          zQ = QQ;
        for (const sQ of hT(qQ[WQ])) {
          const QQ = iT(sQ);
          if (!QQ) continue;
          const WQ = QQ.needAlphaBlendingForMesh(zQ) ? TQ.transparent : QQ.needAlphaTestingForMesh(zQ) ? TQ.alphaTest : TQ.opaque;
          WQ.units.push(sQ), WQ.rows.push(XQ)
        }
      }
      groupOf(QQ) {
        let WQ = this.groups.get(QQ);
        return WQ || (WQ = {
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
        }, this.groups.set(QQ, WQ)), WQ
      }
    }

    function ET(QQ) {
      QQ.opaque.length = 0, QQ.transparent.length = 0
    }
    class CT {
      constructor() {
        this.Ds = new Map, this.enabled = [], this.groups = new Map, this.HI = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(QQ) {
        if (this.Ds.has(QQ)) return;
        const WQ = {
          mesh: QQ,
          observer: QQ.onEffectiveEnabledStateChangedObservable.add((QQ => {
            this.UH(WQ, QQ)
          })),
          index: -1,
          steady: null
        };
        this.Ds.set(QQ, WQ), this.UH(WQ, QQ.isEnabled())
      }
      remove(QQ) {
        const WQ = this.Ds.get(QQ);
        WQ && (WQ.observer.remove(!0), this.UH(WQ, !1), this.Ds.delete(QQ))
      }
      dropSteady() {
        for (const QQ of this.Ds.values()) QQ.steady = null
      }
      base(QQ) {
        return this.Ds.get(QQ)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Ds: this.Ds.size
        }
      }
      forEachSelected(QQ) {
        for (const [WQ, XQ] of this.groups) {
          for (const wQ of XQ.opaque) QQ(wQ.owner, "opaque", WQ);
          for (const wQ of XQ.transparent) QQ(wQ.owner, "transparent", WQ)
        }
        for (const WQ of this.HI) QQ(WQ.mesh, "opaque", 0)
      }
      group(QQ) {
        return this.groups.get(QQ)
      }
      forEachGroup(QQ) {
        this.groups.forEach(QQ)
      }
      select(QQ, WQ) {
        if (this.drawn = 0, this.selected = 0, this.HI.length = 0, this.groups.forEach(ET), !QQ) return;
        const XQ = this.enabled;
        for (let wQ = 0; wQ < XQ.length; wQ++) {
          const qQ = XQ[wQ];
          if (qQ.steady && WQ(qQ, QQ)) {
            this.selected++, this.HI.push(qQ);
            continue
          }
          const TQ = qQ.mesh;
          if (TQ.isBlocked || TQ.oB.hasAZeroComponent) continue;
          if (!TQ.isVisible || TQ.visibility <= 0 || 0 === (TQ.layerMask & QQ.layerMask)) continue;
          if (TQ.UqQ) {
            this.warned.has(TQ.name) || (this.warned.add(TQ.name), console.warn(`Lite: thin instance base ${TQ.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: zQ
          } = TQ;
          if (!zQ) continue;
          TQ.computeWorldMatrix(), this.selected++;
          const sQ = this.listsFor(TQ.renderingGroupId);
          for (const QQ of hT(zQ)) {
            const WQ = iT(QQ);
            WQ && (WQ.needAlphaBlendingForMesh(TQ) ? sQ.transparent.push(QQ) : sQ.opaque.push(QQ))
          }
        }
      }
      UH(QQ, WQ) {
        if (WQ === QQ.index >= 0) return;
        QQ.steady = null;
        const XQ = this.enabled;
        if (WQ) QQ.index = XQ.length, XQ.push(QQ);
        else {
          const WQ = XQ.pop();
          WQ !== QQ && (XQ[QQ.index] = WQ, WQ.index = QQ.index), QQ.index = -1
        }
      }
      listsFor(QQ) {
        let WQ = this.groups.get(QQ);
        return WQ || (WQ = {
          opaque: [],
          transparent: []
        }, this.groups.set(QQ, WQ)), WQ
      }
    }
    var uT = XQ(39858);
    class LT {
      constructor() {
        this.bundle = null, this.stale = !0, this.Ds = new Set
      }
    }
    class kT {
      constructor(QQ, WQ, XQ) {
        this.device = QQ, this.slots = WQ, this.host = XQ, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new LT, this.HA = new LT, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Mq, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = QQ => {
          QQ.seen !== this.frame && (QQ.draw && (QQ.draw = null, this.args[5 * QQ.slot + 1] = 0, this.argsDirty = !0, this.HA.stale ||= QQ.HA), this.frame - QQ.seen > 120 && (this.records.delete(QQ.unit), this.freeSlots.push(QQ.slot), QQ.recorded && (this.bundleOf(QQ).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(QQ) {
          var WQ, XQ;
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (WQ = null === (XQ = globalThis.navigator) || void 0 === XQ ? void 0 : XQ.userAgent) && void 0 !== WQ ? WQ : "";
          const qQ = QQ.adapterInfo;
          return "intel" === (null === qQ || void 0 === qQ ? void 0 : qQ.vendor) && "gen-12lp" === qQ.architecture && wQ.includes("Windows")
        }(QQ), (0, uT.z)(this.direct)
      }
      bD() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, uT.z)(this.directThisFrame)
      }
      add(QQ, WQ, XQ, wQ) {
        let qQ = this.records.get(QQ);
        return qQ || (qQ = this.createRecord(QQ), this.records.set(QQ, qQ)), qQ.recorded && ST(qQ, WQ) || (this.bundleOf(qQ).stale = !0), this.place(qQ, WQ, XQ, wQ), qQ
      }
      bundleOf(QQ) {
        return QQ.HA ? this.HA : this.main
      }
      addAgain(QQ, WQ, XQ, wQ) {
        QQ.recorded || (this.bundleOf(QQ).stale = !0), this.place(QQ, WQ, XQ, wQ)
      }
      place(QQ, WQ, XQ, wQ) {
        QQ.seen = this.frame, QQ.HA && null === QQ.draw && (this.HA.stale = !0), QQ.draw = WQ, this.drawn++, XQ && this.slots.write(QQ.slot, XQ, wQ) && (this.slotsFrom = Math.min(this.slotsFrom, QQ.slot), this.slotsTo = Math.max(this.slotsTo, QQ.slot));
        const qQ = this.args,
          TQ = 5 * QQ.slot;
        qQ[TQ] === WQ.count && qQ[TQ + 1] === WQ.instances && qQ[TQ + 2] === WQ.first || (qQ[TQ] = WQ.count, qQ[TQ + 1] = WQ.instances, qQ[TQ + 2] = WQ.first, this.argsDirty = !0, this.HA.stale ||= QQ.HA)
      }
      dD() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(QQ) {
        for (const WQ of this.records.values()) WQ.draw && WQ.seen === this.frame && !WQ.HA && QQ(WQ.draw, this.slots.data, WQ.slot * gq / 4)
      }
      resourceDestroyed(QQ) {
        this.main.stale ||= this.main.Ds.has(QQ), this.HA.stale ||= this.HA.Ds.has(QQ)
      }
      execute(QQ, WQ, XQ) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(QQ, WQ, XQ, "direct"), this.drawn;
        const wQ = this.host.sceneGroup(WQ);
        if (!wQ) return this.main.bundle = null, this.HA.bundle = null, this.recordedSceneGroup = null, this.encode(QQ, WQ, XQ, "direct"), this.drawn;
        this.recordedTarget === XQ && this.recordedSceneGroup === wQ || (this.recordedTarget = XQ, this.recordedSceneGroup = wQ, this.main.stale = !0, this.HA.stale = !0);
        const qQ = this.main,
          TQ = this.HA;
        let zQ = !1;
        !qQ.stale && qQ.bundle || (qQ.bundle = this.record(WQ, XQ, wQ, "indirect"), zQ = !0);
        const sQ = (0, uT.h)();
        return (TQ.stale || this.rangedEpoch !== sQ) && (this.rangedEpoch = sQ, TQ.bundle = this.drawsRanged() ? this.record(WQ, XQ, wQ, "HA") : this.noRangedBundle(), zQ = !0), zQ && (this.bundles = TQ.bundle ? [qQ.bundle, TQ.bundle] : [qQ.bundle]), QQ.executeBundles(this.bundles), QQ.setBindGroup(0, wQ), this.drawn
      }
      record(QQ, WQ, XQ, wQ) {
        const qQ = this.device.createRenderBundleEncoder({
          label: "HA" === wQ ? "thin-bases-ranged" : "thin-bases",
          colorFormats: QQ._colorFormat ? [QQ._colorFormat] : [],
          depthStencilFormat: QQ._depthStencilFormat,
          sampleCount: QQ._sampleCount
        });
        return qQ.setBindGroup(0, XQ), this.encode(qQ, QQ, WQ, wQ), qQ.finish()
      }
      noRangedBundle() {
        for (const QQ of this.records.values()) QQ.HA && (QQ.recorded = !1);
        return this.HA.Ds.clear(), this.HA.stale = !1, null
      }
      drawsRanged() {
        for (const QQ of this.records.values())
          if (QQ.HA && QQ.draw) return !0;
        return !1
      }
      encode(QQ, WQ, XQ, wQ) {
        const qQ = [];
        for (const FQ of this.records.values()) "direct" !== wQ && FQ.HA !== ("HA" === wQ) || (FQ.recorded = !1, FQ.draw && qQ.push(FQ));
        qQ.sort(tT);
        const TQ = "direct" === wQ ? null : "HA" === wQ ? this.HA : this.main;
        null === TQ || void 0 === TQ || TQ.Ds.clear(), this.binder.reset();
        let zQ = !1;
        for (const FQ of qQ) {
          var sQ;
          const qQ = FQ.draw,
            PQ = this.host.pipelineFor(qQ, WQ, XQ);
          if (!PQ) {
            this.host.pipelineCompiling(qQ, XQ) ? zQ = !0 : TQ && this.keep(FQ, qQ, TQ.Ds);
            continue
          }
          let gQ;
          if (FQ.HA && "indirect" !== wQ) {
            const QQ = FQ.unit.owner;
            gQ = "direct" === wQ && (0, uT.o)(QQ) || (0, uT.j)(QQ) || void 0
          }
          if (TQ && this.keep(FQ, qQ, TQ.Ds), 0 === (null === (sQ = gQ) || void 0 === sQ ? void 0 : sQ.count)) continue;
          this.binder.bind(QQ, qQ, PQ, this.slots.bindGroup, FQ.slot * gq);
          const JQ = 5 * FQ.slot;
          if ("indirect" === wQ) {
            qQ.indexBuffer ? QQ.drawIndexedIndirect(this.argsBuffer, 4 * JQ) : QQ.drawIndirect(this.argsBuffer, 4 * JQ);
            continue
          }
          const rQ = this.args;
          gQ ? fT(QQ, null !== qQ.indexBuffer, rQ, JQ, gQ) : qQ.indexBuffer ? QQ.drawIndexed(rQ[JQ], rQ[JQ + 1], rQ[JQ + 2], 0, 0) : QQ.draw(rQ[JQ], rQ[JQ + 1], rQ[JQ + 2], 0)
        }
        TQ && (TQ.stale = zQ)
      }
      keep(QQ, WQ, XQ) {
        QQ.recorded = !0, QQ.pipelineKey = WQ.pipelineKey, QQ.materialGroup = WQ.material.bindGroup, QQ.vertexBuffers.length = 0, QQ.vertexBuffers.push(...WQ.vertexBuffers), QQ.vertexOffsets = WQ.vertexOffsets, QQ.indexBuffer = WQ.indexBuffer, QQ.indexFormat = WQ.indexFormat;
        for (const wQ of WQ.vertexBuffers) XQ.add(wQ);
        WQ.indexBuffer && XQ.add(WQ.indexBuffer), XQ.add(WQ.material.buffer);
        for (const wQ of WQ.material.bound) wQ && XQ.add(wQ)
      }
      createRecord(QQ) {
        let WQ = this.freeSlots.pop();
        return void 0 === WQ && (WQ = this.slotCount++, this.grow()), {
          unit: QQ,
          slot: WQ,
          HA: void 0 !== (0, uT.j)(QQ.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.HA.stale = !0), 5 * this.slotCount > this.args.length) {
          const QQ = new Uint32Array(2 * this.args.length);
          QQ.set(this.args), this.args = QQ, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function fT(QQ, WQ, XQ, wQ, qQ) {
      const TQ = XQ[wQ + 1],
        zQ = qQ.data;
      for (let sQ = 0; sQ < qQ.count; sQ++) {
        const qQ = Math.min(zQ[2 * sQ], TQ),
          FQ = Math.min(zQ[2 * sQ + 1], TQ - qQ);
        0 !== FQ && (WQ ? QQ.drawIndexed(XQ[wQ], FQ, XQ[wQ + 2], 0, qQ) : QQ.draw(XQ[wQ], FQ, XQ[wQ + 2], qQ))
      }
    }

    function ST(QQ, WQ) {
      if (QQ.pipelineKey !== WQ.pipelineKey || QQ.materialGroup !== WQ.material.bindGroup || QQ.indexBuffer !== WQ.indexBuffer || QQ.indexFormat !== WQ.indexFormat || QQ.vertexOffsets !== WQ.vertexOffsets || QQ.vertexBuffers.length !== WQ.vertexBuffers.length) return !1;
      for (let XQ = 0; XQ < QQ.vertexBuffers.length; XQ++)
        if (QQ.vertexBuffers[XQ] !== WQ.vertexBuffers[XQ]) return !1;
      return !0
    }

    function tT(QQ, WQ) {
      return WT(QQ.draw, WQ.draw)
    }
    const oT = new WeakMap,
      eT = {
        depth: !1,
        sunShadow: !1
      };

    function nT(QQ, WQ) {
      let XQ = oT.get(QQ);
      XQ || (XQ = new Map, oT.set(QQ, XQ));
      const wQ = `${WQ.depth?"-depth":""}${WQ.sunShadow?"-shadow":""}${WQ.shadowMask?"-mask":""}`;
      let qQ = XQ.get(wQ);
      if (!qQ) {
        const TQ = [{
          binding: OW.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: OW.h
          }
        }, {
          binding: OW.t,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        WQ.depth && TQ.push({
          binding: OW.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), WQ.sunShadow && TQ.push(... function() {
          const QQ = GPUShaderStage.FRAGMENT,
            WQ = OW.p;
          return [{
            binding: WQ.uniform,
            visibility: QQ,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: WQ.Gr,
            visibility: QQ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: WQ.special,
            visibility: QQ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: WQ.volume,
            visibility: QQ,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: WQ.sampler,
            visibility: QQ,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: WQ.entities,
            visibility: QQ,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: WQ.entityGrids,
            visibility: QQ,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), WQ.shadowMask && TQ.push({
          binding: OW.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), qQ = QQ.createBindGroupLayout({
          label: `${WQ.depth?"terrain-":""}shader-pack-inputs${wQ}`,
          entries: TQ
        }), XQ.set(wQ, qQ)
      }
      return qQ
    }

    function xT(QQ) {
      return nT(QQ, eT)
    }

    function YT(QQ, WQ) {
      if (!WQ) return !1;
      const XQ = (0, KW.g)(QQ);
      return !!XQ && Tw(XQ, WQ)
    }

    function NT(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Rw(WQ)) return [];
      return [nT(QQ, {
        depth: aw(WQ.packVariant),
        sunShadow: YT(WQ.packVariant, XQ),
        shadowMask: wQ
      })]
    }
    class ZT {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = QQ, this.sunShadow = XQ, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(OW.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = QQ.createBuffer({
          label: "shader-pack-inputs",
          size: OW.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const wQ = (0, OW.w)(WQ);
        this.textures = QQ.createBuffer({
          label: "shader-pack-textures",
          size: wQ.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), QQ.queue.writeBuffer(this.textures, 0, wQ), this.bindGroup = QQ.createBindGroup({
          label: "shader-pack-inputs",
          layout: xT(QQ),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: OW.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: OW.t,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(QQ, WQ, XQ) {
        (0, OW.A)(this.data, {
          seconds: QQ.seconds(),
          lit: XQ,
          renderOffset: QQ.renderOffset(),
          IQQ: QQ.IQQ(),
          eyePosition: WQ,
          shadowDirection: QQ.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wQ = WQ ? this.sunShadow : null;
        if ((WQ || XQ) && !wQ) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!QQ && !wQ) return this.bindGroup;
        (QQ && QQ !== this.depthView || XQ && XQ !== this.maskView) && (this.depthView = null !== QQ && void 0 !== QQ ? QQ : this.depthView, this.maskView = null !== XQ && void 0 !== XQ ? XQ : this.maskView, this.groups.clear());
        const qQ = (QQ ? 1 : 0) | (wQ ? 2 : 0) | (XQ ? 4 : 0);
        let TQ = this.groups.get(qQ);
        if (!TQ) {
          const WQ = this.entries();
          QQ && WQ.push({
            binding: OW.n,
            resource: QQ
          }), wQ && WQ.push(...wQ.entries()), XQ && WQ.push({
            binding: OW.r,
            resource: XQ
          }), TQ = this.device.createBindGroup({
            label: `${QQ||XQ?"terrain-":""}shader-pack-inputs${QQ?"-depth":""}${wQ?"-shadow":""}${XQ?"-mask":""}`,
            layout: nT(this.device, {
              depth: !!QQ,
              sunShadow: !!wQ,
              shadowMask: !!XQ
            }),
            entries: WQ
          }), this.groups.set(qQ, TQ)
        }
        return TQ
      }
      bind(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        QQ.setBindGroup(OW.d, this.bindGroupFor(WQ, XQ, wQ))
      }
    }

    function OT(QQ, WQ, XQ) {
      if (QQ.gpuVersion === WQ.gpuBuffersVersion) return !0;
      let wQ;
      do {
        if (wQ = WQ.gpuBuffersVersion, !KT(QQ, WQ, XQ)) return !1
      } while (WQ.gpuBuffersVersion !== wQ);
      return QQ.gpuVersion = wQ, QQ.fitInstances = 0, !0
    }

    function KT(QQ, WQ, XQ) {
      let wQ = null;
      for (let TQ = 0; TQ < QQ.slotData.length; TQ++) {
        var qQ;
        const zQ = QQ.slotData[TQ],
          sQ = zQ ? WQ.gpuBuffer(zQ) : XQ;
        if (!sQ) return !1;
        zQ && QQ.layout.instanceEnds[TQ] < 0 && WQ.cover(zQ, Number.POSITIVE_INFINITY), QQ.buffers[TQ] = sQ;
        const FQ = QQ.E_[TQ] + (zQ ? WQ.gpuOffset(zQ) : 0);
        FQ !== (null !== (qQ = wQ) && void 0 !== qQ ? qQ : QQ.offsets)[TQ] && (wQ ??= QQ.offsets.slice(), wQ[TQ] = FQ), QQ.ends[TQ] = zQ ? WQ.gpuEnd(zQ) : sQ.size
      }
      return wQ && (QQ.offsets = wQ), !0
    }

    function mT(QQ, WQ, XQ, wQ) {
      if (WQ <= QQ.fitInstances) return null;
      const {
        layout: qQ,
        ends: TQ,
        offsets: zQ,
        slotData: sQ,
        E_: FQ
      } = QQ;
      let PQ = !1;
      for (let gQ = 0; gQ < qQ.buffers.length; gQ++) {
        const QQ = qQ.instanceEnds[gQ];
        if (QQ < 0) continue;
        const wQ = (WQ - 1) * qQ.buffers[gQ].arrayStride + QQ;
        if (TQ[gQ] - zQ[gQ] < wQ) return {
          index: gQ,
          needed: wQ
        };
        const JQ = sQ[gQ];
        JQ && XQ.cover(JQ, FQ[gQ] + wQ) && (PQ = !0)
      }
      return PQ && OT(QQ, XQ, wQ), QQ.fitInstances = WQ, null
    }
    var MT = XQ(38094),
      Qz = XQ(38129);
    const Wz = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Xz = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      wz = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      qz = `((vertexInputs.aPackedLightLevels >> 16u) | ${cW.c.placed}u)`,
      Tz = "u32(vertexInputs.aShaderPackItem.x)",
      zz = `${cW.c.lifeform}u`;

    function sz(QQ) {
      return "item" === QQ.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Fz = "bloxdSpEnchant",
      Pz = "floor(finalWorld[3].xyz)";

    function gz(QQ, WQ, XQ) {
      return "placed" === WQ.kind && QQ.reads[XQ].includes("bloxdFragmentBlockPosition")
    }

    function Jz(QQ, WQ) {
      let [XQ, wQ] = QQ;
      return XQ === WQ.point && wQ === WQ.code
    }

    function rz(QQ, WQ) {
      var XQ, wQ, qQ;
      const TQ = null === (XQ = QQ.find((QQ => QQ.texture))) || void 0 === XQ ? void 0 : XQ.texture,
        zQ = null === (wQ = QQ.find((QQ => QQ.enchantTier))) || void 0 === wQ ? void 0 : wQ.enchantTier,
        sQ = null === (qQ = QQ.find((QQ => QQ.overlay))) || void 0 === qQ ? void 0 : qQ.overlay,
        FQ = sQ ? WQ.filter((QQ => Jz(QQ, sQ))).length : 0;
      return sQ && 1 === FQ ? {
        texture: TQ,
        overlay: sQ,
        enchantTier: zQ
      } : {
        texture: TQ,
        enchantTier: zQ
      }
    }

    function Iz(QQ) {
      if ("item" === QQ.kind) {
        return {
          vertexFlags: `(${Tz} & 0xffffu)`,
          varying: "vPackItem",
          value: Tz,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return QQ.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: qz,
        varying: "vPackFlags",
        value: qz,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function jz(QQ) {
      return "lifeform" === QQ.kind ? zz : "0u"
    }

    function Bz(QQ) {
      return !!QQ.BLOXD_PLUGIN_ENCHANTMENT
    }

    function yz(QQ, WQ) {
      const {
        enchantTier: XQ
      } = WQ;
      return XQ && Bz(WQ.defines) && "lifeform" === WQ.kind && bz(QQ, "enchantTier") ? XQ : null
    }

    function Vz(QQ, WQ) {
      return Bz(WQ.defines) && bz(QQ, "enchantSpeed")
    }

    function Dz(QQ) {
      const {
        overlay: WQ,
        defines: XQ
      } = QQ;
      if (!WQ || !XQ.DIFFUSE) return null;
      const wQ = XQ.VERTEXCOLOR || XQ.INSTANCESCOLOR && XQ.INSTANCES;
      return `vec4f(${WQ.colour}.rgb * uniforms.vDiffuseInfos.y${wQ?" * fragmentInputs.vColor.rgb":""}, ${WQ.colour}.a)`
    }
    const pz = "fragmentInputs.vPackTexture";

    function Gz(QQ) {
      const {
        atlas: WQ,
        defines: XQ,
        texture: wQ
      } = QQ;
      if (WQ || !XQ.DIFFUSE) return null;
      if (wQ) return {
        texture: "diffuseSampler",
        ...wQ
      };
      const qQ = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===XQ.DIFFUSEDIRECTUV?"vMainUV1":2===XQ.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== QQ.kind) return qQ;
      if (!XQ.BLOXD_PLUGIN_ANIMATED) return {
        ...qQ,
        id: pz
      };
      const TQ = bQ.b.WGSL,
        zQ = (0, bQ.Jb)(TQ, "uAnimStatesNum"),
        sQ = (0, bQ.fb)(TQ, (0, MT.f)(TQ), zQ),
        FQ = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${zQ})`,
        layers: [sQ],
        uv: `vec2f(${FQ}.x, ${FQ}.y * ${zQ} - ${sQ})`,
        levelUv: FQ,
        id: pz
      }
    }

    function Uz(QQ, WQ) {
      return "box" === WQ.kind && !!QQ.hooks.surface && null !== Gz(WQ)
    }

    function bz(QQ, WQ) {
      return QQ.reads.fragment.includes(WQ)
    }

    function vz(QQ) {
      return !!QQ.BLOXD_LIGHTING && !QQ.BLOXD_UNLIT
    }

    function dz(QQ, WQ, XQ, wQ) {
      const qQ = QQ.filter((QQ => {
        let [XQ, wQ] = QQ;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === XQ && wQ === WQ
      }));
      if (1 !== qQ.length) throw new Error(`A model program for shader packs has ${0===qQ.length?"no":"more than one"} ${wQ} code before fog (lite/modelShaderPack.ts)`);
      return QQ.map((QQ => QQ === qQ[0] ? [QQ[0], XQ] : QQ))
    }

    function Hz(QQ, WQ, XQ, wQ) {
      const {
        hooks: qQ
      } = QQ, {
        kind: TQ,
        defines: zQ
      } = WQ, sQ = [...XQ];
      var FQ;
      WQ.atlas && qQ.surface && sQ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", rw("atlasIdxIn")]), "item" === TQ && sQ.push(["CUSTOM_VERTEX_DEFINITIONS", (0, bQ.d)(bQ.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Uz(QQ, WQ) && sQ.push(["CUSTOM_VERTEX_DEFINITIONS", (0, bQ.d)(bQ.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (FQ = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${gw}[min(u32(${FQ}) - 1u, arrayLength(&${gw}) - 1u)], ${FQ} > 0.5);\n`)]);
      const PQ = Iz(WQ);
      PQ && (qQ.surface || qQ.light) && sQ.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${PQ.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${PQ.varying} = ${PQ.value};`]);
      let gQ = wQ;
      if (gz(QQ, WQ, "fragment") && (sQ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Pz});`]), gQ = [...gQ, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), bz(QQ, "localPosition") && sQ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${sz(WQ)};`]), Bz(zQ) && qQ.surface) {
        Vz(QQ, WQ) && sQ.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const XQ = yz(QQ, WQ);
        XQ && sQ.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${XQ});`]);
        const wQ = (0, bQ.ub)(bQ.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        gQ = [...dz(gQ, (0, Qz.g)(bQ.b.WGSL), wQ, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Qz.b)(Fz)]]
      }
      const {
        overlay: JQ
      } = WQ;
      JQ && Dz(WQ) && qQ.surface && (gQ = gQ.filter((QQ => !Jz(QQ, JQ))));
      const rQ = qQ.light ? function(QQ) {
        return "placed" === QQ.kind ? {
          name: "terrain",
          engine: (0, YW.S)(bQ.b.WGSL),
          pack: (0, YW.kb)(bQ.b.WGSL)
        } : QQ.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, YW.L)(bQ.b.WGSL),
          pack: (0, YW.eb)(bQ.b.WGSL)
        } : null
      }(WQ) : null;
      if (rQ && (gQ = dz(gQ, rQ.engine, rQ.pack, `${rQ.name} light`), "placed" !== TQ && vz(zQ))) {
        const QQ = zQ.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, bQ.Jb)(bQ.b.WGSL, "uEntityLightLevels") : (0, bQ.Sb)(bQ.b.WGSL, "aLightLevels");
        sQ.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${YW.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, YW.hb)(bQ.b.WGSL, QQ)])
      }
      return {
        vertexCode: sQ,
        fragmentCode: gQ
      }
    }

    function az(QQ, WQ, XQ, wQ) {
      return ww(QQ, WQ, XQ, wQ, "model")
    }
    const lz = "\t@builtin(position) position: vec4f,\n";

    function hz(QQ, WQ) {
      const XQ = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(QQ)[0];
      return `${XQ}${WQ}${QQ.slice(XQ.length)}`
    }

    function iz(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: qQ
      } = WQ, TQ = Tw(WQ, wQ), {
        kind: zQ,
        defines: sQ
      } = XQ, FQ = function(QQ, WQ) {
        var XQ, wQ, qQ;
        const {
          defines: TQ
        } = WQ, zQ = Iz(WQ), sQ = !!TQ.FOG, FQ = Bz(TQ), PQ = null !== (XQ = null === zQ || void 0 === zQ ? void 0 : zQ.enchantTier) && void 0 !== XQ ? XQ : yz(QQ, WQ) ? "fragmentInputs.vPackEnchantTier" : "0u", gQ = "lifeform" === WQ.kind && !TQ.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (wQ = null === zQ || void 0 === zQ ? void 0 : zQ.vertexFlags) && void 0 !== wQ ? wQ : jz(WQ),
          vertexLocalPosition: sz(WQ),
          flags: null !== (qQ = null === zQ || void 0 === zQ ? void 0 : zQ.flags) && void 0 !== qQ ? qQ : jz(WQ),
          normal: "normalW",
          alpha: gQ ? "alpha * baseColor.a" : "alpha",
          alphaOut: gQ ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: sQ ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: sQ ? "1.0 - fog" : "0.0",
          enchantTier: PQ,
          enchantColour: FQ ? `${Fz}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Vz(QQ, WQ) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: bz(QQ, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Dz(WQ)
        }
      }(WQ, XQ), PQ = QQ.textures.filter((QQ => /^textureAtlas\d+$/.test(QQ.name))).length, gQ = XQ.atlas && PQ > 0 ? {
        count: PQ,
        layers: XQ.atlas.layers,
        width: XQ.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: QQ.material.slots.has("uAnimDataPerTex") ? (WQ, XQ) => Kw(WQ, XQ, function(QQ) {
          const WQ = QQ.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            fJ: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: QQ => `uniforms.uAnimDataPerTex[${QQ}]${WQ}`
          }
        }(QQ)) : null
      } : null, JQ = "placed" === zQ ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", rQ = null !== gQ && void 0 !== gQ ? gQ : Gz(XQ), IQ = function(QQ, XQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,OW.z)()}${sw(WQ,XQ)}${wQ}${jw(QQ)}${Qw}${JQ}${WQ.code}`
      };
      let {
        vertex: jQ,
        fragment: BQ
      } = QQ;
      const yQ = yw(qQ, FQ);
      if (yQ) {
        const QQ = gz(WQ, XQ, "vertex") ? `\tbloxdSpCell = ${Pz};\n` : "";
        jQ = az(jQ, Wz, `${QQ}${yQ.slice(1)}${Wz}`, "vertex")
      }
      const VQ = `${Fw(WQ,TQ,function(QQ,WQ){return WQ.TWOSIDEDLIGHTING?QQ:`select(-(${QQ}), ${QQ}, fragmentInputs.frontFacing)`}(FQ.normal,sQ),FQ.flags)}${Vw(qQ,WQ.strict,WQ.program,rQ,FQ)}`;
      VQ && (BQ = az(BQ, Xz, `${VQ.slice(1)}${Xz}`, "surface")), TQ && WQ.sunShadow && !sQ.TWOSIDEDLIGHTING && (BQ = az(BQ, lz, `${lz}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const DQ = Gw(qQ);
      if (DQ) {
        const QQ = pw(qQ, vz(sQ), !0, FQ);
        BQ = az(BQ, wz, `${QQ}${DQ.slice(1)}${wz}`, "light")
      }
      const pQ = Uz(WQ, XQ) ? Jw : "";
      return {
        ...QQ,
        vertex: hz(jQ, IQ(gQ, !1, pQ)),
        fragment: hz(BQ, IQ(rQ, TQ))
      }
    }
    const cz = {
      name: "earthSky",
      uniqueId: -1
    };
    class Az {
      constructor(QQ, WQ) {
        this.resources = QQ, this.epoch = WQ, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const QQ of this.instances.values()) QQ.released = !0, this.resources.destroyBuffer(QQ.buffer);
        this.instances.clear()
      }
    }

    function Rz(QQ) {
      return QQ.failed && null !== QQ.packGroup
    }
    class Ez {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new CT,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new RT;
        this.device = QQ, this.resources = WQ, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.i_ = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new Mq, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new GT((QQ => this.modelSlot(QQ).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, AW.e)("Lite: "), this.renderStates = new BT(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (QQ, WQ) => this.keepSteady(QQ, WQ), this.lists = void 0, this.slotCount = 0, this.i_ = wQ, this.modelMeshes = qQ, this.lists = new QT(qQ, wQ, this, this.warnOnce), this.drawDefines = new JT(WQ, this.warnOnce, ((QQ, WQ, XQ) => this.programWithModel(QQ, WQ, XQ)), Rz), this.vertexLayouts = new dT(WQ, QQ.limits, this.warnOnce), this.sceneLayout = vW(QQ), this.frameLayout = QQ.createBindGroupLayout({
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
        }), this.frameBuffer = QQ.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new lT(QQ, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = QQ.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new kT(QQ, new lT(QQ, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (QQ, WQ, XQ) => this.pipelineFor(QQ, WQ, XQ),
          pipelineCompiling: (QQ, WQ) => !QQ.program.failed && !1 !== this.pipelines.get(`${QQ.pipelineKey}|${WQ}`),
          sceneGroup: QQ => {
            const WQ = XQ(QQ);
            return WQ || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), WQ
          }
        }), WQ.onDestroy = QQ => {
          this.thinBundle.resourceDestroyed(QQ)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qQ = {
          order: QQ,
          isTransparent: WQ,
          _direct: !WQ,
          bind: (QQ, WQ) => this.createBinding(qQ, WQ, XQ, wQ)
        };
        return qQ
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(QQ, WQ, XQ) {
        var wQ;
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = WQ, this.drawDefines.view = WQ, this.thinBundle.bD(), this.writeFrameUniforms();
        const TQ = null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.defineFor("model")) && void 0 !== wQ ? wQ : 0;
        this.drawDefines.modelPackVariant = TQ, qQ && 0 !== TQ && (this.packInputs ??= new ZT(this.device, qQ.textureLayers(), this.sunShadow), this.packInputs.write(qQ, WQ.eye, qQ.HB())), this.lists.clear(), this.slotCount = 0;
        const zQ = QQ.activeCamera;
        this.i_.select(zQ, this.keepSteadyBase), this.modelMeshes.select(zQ, WQ), XQ && this.pushEarthSky(XQ), this.lists.collect(QQ), this.thinBundle.dD(), this.uploadMeshSlots()
      }
      pushDraws(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const sQ = TQ.length;
        for (let FQ = 0; FQ < XQ; FQ++) {
          const XQ = WQ[FQ];
          let sQ = this.retainedDraw(QQ, XQ, wQ, qQ);
          if (void 0 === sQ && (sQ = this.drawFor(QQ, XQ, wQ, qQ), this.retain(XQ, sQ)), sQ) {
            const QQ = XQ.owner,
              WQ = zQ ? zQ[FQ] : -1;
            sQ.slotOffset = WQ < 0 ? this.writeMeshSlot(QQ.getWorldMatrix().m, QQ.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[WQ], 16 * WQ), TQ.push(sQ)
          }
        }
        return TQ.length - sQ
      }
      bundleDraws(QQ, WQ, XQ) {
        let wQ = 0;
        for (const qQ of WQ) {
          let WQ = this.retainedDraw(QQ, qQ, XQ, !1);
          const TQ = void 0 !== WQ;
          if (void 0 === WQ && (WQ = this.drawFor(QQ, qQ, XQ, !1), this.retain(qQ, WQ)), WQ) {
            const QQ = qQ.owner,
              XQ = this.thinBundle.add(qQ, WQ, QQ.getWorldMatrix().m, QQ.visibility);
            TQ && this.steadyFrom(qQ, WQ, XQ), wQ++
          }
        }
        return wQ
      }
      steadyFrom(QQ, WQ, XQ) {
        const wQ = QQ.owner,
          qQ = this.i_.base(wQ),
          TQ = wQ.material,
          {
            drawState: zQ,
            instance: sQ
          } = WQ.inputs.retained;
        if (!qQ || !TQ || 1 !== QQ.parts.materials.length || iT(QQ) !== TQ) return;
        const FQ = qQ.steady ??= {
          unit: QQ,
          material: TQ,
          visibility: 1,
          draw: WQ,
          record: XQ,
          drawState: zQ,
          instance: sQ,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        FQ.unit = QQ, FQ.material = TQ, FQ.visibility = wQ.visibility, FQ.draw = WQ, FQ.record = XQ, FQ.drawState = zQ, FQ.instance = sQ, FQ.bindGroup = sQ.bindGroup, FQ.gpuVersion = this.resources.gpuBuffersVersion, FQ.fitInstances = WQ.inputs.fitInstances, FQ.worldFlag = wQ.getWorldMatrix().updateFlag, FQ.handedFrame = this.frame
      }
      keepSteady(QQ, WQ) {
        const XQ = QQ.steady;
        if (XQ.handedFrame !== this.frame - 1 || (this.frame + XQ.phase) % 8 === 0) return !1;
        const wQ = QQ.mesh,
          {
            unit: qQ,
            draw: TQ,
            instance: zQ,
            drawState: sQ
          } = XQ,
          FQ = wQ.forcedInstanceCount || wQ.f_;
        if (!wQ.isVisible || wQ.UqQ || wQ.visibility !== XQ.visibility || 0 === (wQ.layerMask & WQ.layerMask) || wQ.material !== XQ.material || 0 !== wQ.renderingGroupId || wQ.hasVertexAlpha || !this.drawDefines.definesHold(sQ, qQ, sQ.instancing) || XQ.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(TQ.inputs, qQ, sQ.instancing, TQ.program) || TQ.program.failed || zQ.released || FQ <= 0 || FQ > XQ.fitInstances) return !1;
        if (zQ.frame !== this.frame && this.bindMaterial(zQ, this.modelUniforms.refreshModelUniforms(wQ.sE(), zQ, zQ.model, this.view)), !zQ.bindable || zQ.bindGroup !== XQ.bindGroup) return !1;
        const PQ = wQ.computeWorldMatrix(),
          gQ = PQ.updateFlag !== XQ.worldFlag;
        return XQ.worldFlag = PQ.updateFlag, TQ.instances = FQ, this.thinBundle.addAgain(XQ.record, TQ, gQ ? PQ.m : null, XQ.visibility), XQ.handedFrame = this.frame, this.i_.drawn++, !0
      }
      retainedDraw(QQ, WQ, XQ, wQ) {
        const qQ = this.inputs.get(WQ),
          TQ = null === qQ || void 0 === qQ ? void 0 : qQ.retained;
        if (!qQ || !TQ) return;
        const {
          drawState: zQ,
          program: sQ,
          instance: FQ,
          instancing: PQ
        } = TQ, gQ = WQ.owner;
        if (TT(gQ) !== PQ) return;
        const JQ = this.instanceCount(gQ, PQ);
        if (JQ <= 0) return null;
        if (FQ.released || sQ.failed || zQ.program !== sQ || !this.drawDefines.programCurrent(zQ, WQ, PQ, XQ) || !this.inputsStamped(qQ, WQ, PQ, sQ) || gQ.isUnIndexed !== TQ.unIndexed || this.indexKey(WQ) !== TQ.indexData) return;
        if (TQ.indexBuffer && TQ.gpuVersion !== this.resources.gpuBuffersVersion) {
          const QQ = this.resources.gpuBuffer(TQ.indexData);
          if (!QQ) return;
          TQ.indexBuffer = QQ, TQ.gpuVersion = this.resources.gpuBuffersVersion
        }
        let rQ = !1;
        if (FQ.frame !== this.frame && (rQ = this.modelUniforms.refreshModelUniforms(QQ, FQ, FQ.model, this.view)), !this.bindMaterial(FQ, rQ) || !this.withGpuBuffers(qQ) || !this.instanceBuffersFit(gQ.name, qQ, JQ)) return null;
        const IQ = this.makeDraw(sQ, qQ, this.renderStates.renderState(zQ.model, gQ, wQ, qQ.state), FQ, JQ);
        return this.setRange(IQ, WQ, TQ.indexBuffer, TQ.indexData), IQ
      }
      retain(QQ, WQ) {
        const XQ = this.drawDefines.drawStates.get(QQ);
        if (!WQ || !XQ || XQ.program !== WQ.program) {
          const WQ = this.inputs.get(QQ);
          return void(WQ && (WQ.retained = null))
        }
        const wQ = QQ.owner,
          qQ = XQ.instancing,
          TQ = this.indexKey(QQ),
          zQ = WQ.inputs.retained;
        zQ ? (zQ.drawState = XQ, zQ.instancing = qQ, zQ.program = WQ.program, zQ.instance = WQ.material, zQ.indexData = TQ, zQ.unIndexed = wQ.isUnIndexed, zQ.indexBuffer = WQ.indexBuffer, zQ.gpuVersion = this.resources.gpuBuffersVersion) : WQ.inputs.retained = {
          drawState: XQ,
          instancing: qQ,
          program: WQ.program,
          instance: WQ.material,
          indexData: TQ,
          unIndexed: wQ.isUnIndexed,
          indexBuffer: WQ.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(QQ, WQ, XQ, wQ) {
        const qQ = WQ.owner,
          TQ = iT(WQ);
        if (!TQ) return null;
        const zQ = TQ.getClassName();
        let sQ = null;
        if (function(QQ) {
            return "LinesMesh" === QQ.getClassName()
          }(qQ)) {
          if (! function(QQ) {
              return "ShaderMaterial" === QQ.getClassName() && "color" === QQ.shaderPath
            }(TQ)) return this.warnOnce(`lines:${zQ}`, `A LinesMesh with a ${zQ} is not drawn yet (${TQ.name})`), null;
          sQ = qQ
        } else if ("StandardMaterial" !== zQ && "LiteMaterial" !== zQ) return this.warnOnce(`class:${zQ}`, `${zQ} is not drawn yet (${TQ.name})`), null;
        const FQ = TT(qQ),
          PQ = this.instanceCount(qQ, FQ);
        if (PQ <= 0) return null;
        const gQ = sQ ? this.lineProgramFor(qQ, XQ, FQ) : this.drawDefines.programFor(QQ, WQ, TQ, XQ, FQ);
        if (!gQ || gQ.failed) return null;
        const JQ = sQ ? null : this.drawDefines.drawStates.get(WQ).model,
          rQ = JQ ? this.modelInstance(JQ, gQ) : this.materialInstance(qQ, gQ);
        let IQ = !1;
        if (rQ.frame !== this.frame && (sQ ? DQ(rQ.ubo, sQ) : IQ = this.modelUniforms.refreshModelUniforms(QQ, rQ, rQ.model, this.view)), !this.bindMaterial(rQ, IQ)) return null;
        const jQ = this.meshInputs(WQ, gQ, FQ);
        if (!jQ || !this.instanceBuffersFit(qQ.name, jQ, PQ)) return null;
        const BQ = this.indexKey(WQ);
        let yQ = null;
        if (BQ && !qQ.isUnIndexed && (yQ = this.resources.gpuBuffer(BQ), !yQ)) return null;
        const VQ = this.renderStates.renderState(null !== JQ && void 0 !== JQ ? JQ : TQ, qQ, wQ, jQ.state, sQ ? "line-list" : "triangle-list"),
          pQ = this.makeDraw(gQ, jQ, VQ, rQ, PQ);
        return this.setRange(pQ, WQ, yQ, BQ), pQ
      }
      indexKey(QQ) {
        const WQ = PT(QQ);
        return WQ ? this.resources.modelIndex(WQ) : null
      }
      setRange(QQ, WQ, XQ, wQ) {
        XQ && (QQ.indexBuffer = XQ, QQ.indexFormat = this.resources.indexFormat(wQ));
        const qQ = 4 * WQ.range + (XQ ? 0 : 2);
        QQ.unit = WQ, QQ.first = WQ.parts.Qy[qQ], QQ.count = WQ.parts.Qy[qQ + 1]
      }
      makeDraw(QQ, WQ, XQ, wQ, qQ) {
        WQ.state !== XQ && (WQ.state = XQ, WQ.pipelineKey = `${QQ.id}|${WQ.layout.key}|${XQ.key}`, WQ.pipeline = null);
        const TQ = WQ.draw ??= {
          program: QQ,
          inputs: WQ,
          pipelineKey: "",
          layout: WQ.layout,
          state: XQ,
          material: wQ,
          slotOffset: 0,
          vertexBuffers: WQ.buffers,
          vertexOffsets: WQ.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: qQ,
          unit: null
        };
        return TQ.program = QQ, TQ.pipelineKey = WQ.pipelineKey, TQ.state = XQ, TQ.material = wQ, TQ.vertexOffsets = WQ.offsets, TQ.indexBuffer = null, TQ.instances = qQ, TQ
      }
      instanceCount(QQ, WQ) {
        switch (WQ) {
          case "thin":
            return QQ.forcedInstanceCount || QQ.f_;
          case "instanced":
            return this.prepareInstances(QQ);
          case "none":
            return 1
        }
      }
      prepareInstances(QQ) {
        const WQ = function(QQ, WQ) {
          const XQ = WQ._userInstancedBuffersStorage,
            wQ = QQ.batchUploads.get(WQ);
          if (wQ) {
            var qQ;
            if (wQ.layout === (null !== (qQ = null === XQ || void 0 === XQ ? void 0 : XQ.interleavedKinds) && void 0 !== qQ ? qQ : null)) return wQ;
            wQ.release()
          }
          return new IW(QQ, WQ, XQ)
        }(this.resources, QQ);
        return WQ.frame !== this.frame && WQ.pack(QQ, this.modelMeshes.instanceBatch(QQ), this.modelMeshes.worlds, this.frame), WQ.count
      }
      programWithModel(QQ, WQ, XQ) {
        const wQ = this.modelSlot(QQ),
          qQ = rT(wQ, QQ, XQ),
          TQ = this.drawDefines.modelPackKind(QQ),
          zQ = TQ ? function(QQ, WQ, XQ, wQ) {
            const qQ = (0, HQ.u)(QQ, vQ.h.name),
              TQ = [];
            for (const {
                feature: FQ,
                state: PQ,
                active: gQ
              }
              of QQ.features) {
              var zQ, sQ;
              const QQ = gQ ? null === (zQ = (sQ = (0, RW.g)(FQ)).xI) || void 0 === zQ ? void 0 : zQ.call(sQ, PQ) : void 0;
              QQ && TQ.push(QQ)
            }
            return {
              kind: WQ,
              atlas: null !== qQ && void 0 !== qQ && qQ.active ? (0, vQ.c)(qQ.state) : null,
              defines: XQ,
              ...rz(TQ, wQ)
            }
          }(QQ, TQ, WQ, wQ.fragmentCode) : null;
        if (zQ && function(QQ) {
            const WQ = QQ.defines;
            return (null === QQ.atlas || !!WQ.DIFFUSE && 1 === WQ.DIFFUSEDIRECTUV) && !!WQ.NORMAL && !WQ.REFLECTION && !WQ.EMISSIVEASILLUMINATION && !WQ.LINKEMISSIVEWITHDIFFUSE
          }(zQ)) {
          const XQ = this.modelPackProgram(QQ, WQ, `${qQ}#${TQ}#sp${this.drawDefines.modelPackVariant}`, wQ, zQ);
          if (XQ && !XQ.failed) return XQ
        }
        const sQ = this.programs.get(qQ);
        if (sQ || this.unbuildable.has(qQ)) return null !== sQ && void 0 !== sQ ? sQ : null;
        let FQ;
        try {
          FQ = cq({
            defines: sT(WQ),
            vertexCode: wQ.vertexCode,
            fragmentCode: wQ.fragmentCode,
            pluginUniforms: wQ.pluginUniforms
          })
        } catch (PQ) {
          return this.unbuildable.add(qQ), this.warnOnce(`build:${qQ}`, `could not build a program for ${QQ.name}: ${String(PQ)}`), null
        }
        return this.createProgram(qQ, FQ, "standard")
      }
      modelPackProgram(QQ, WQ, XQ, wQ, qQ) {
        const TQ = this.programs.get(XQ);
        if (TQ || this.unbuildable.has(XQ)) return null !== TQ && void 0 !== TQ ? TQ : null;
        const zQ = this.drawDefines.modelPackVariant;
        let sQ;
        try {
          const QQ = function(QQ) {
              return (0, KW.d)(QQ, "model")
            }(zQ),
            XQ = Hz(QQ, qQ, wQ.vertexCode, wQ.fragmentCode);
          sQ = iz(cq({
            defines: sT(WQ),
            ...XQ,
            pluginUniforms: wQ.pluginUniforms
          }), QQ, qQ, !!this.sunShadow)
        } catch (gQ) {
          return this.unbuildable.add(XQ), this.warnOnce(`build:${XQ}`, `could not build a shader pack program for ${QQ.name}, which draws without the pack: ${String(gQ)}`), null
        }
        const FQ = YT(zQ, !!this.sunShadow),
          PQ = {
            group: this.packInputs.bindGroupFor(null, FQ),
            layout: nT(this.device, {
              depth: !1,
              sunShadow: FQ
            })
          };
        return this.createProgram(XQ, sQ, function(QQ) {
          return `standard-sp${QQ}`
        }(zQ), PQ)
      }
      lineProgramFor(QQ, WQ, XQ) {
        const wQ = VQ(QQ, XQ, WQ, this.view);
        let qQ = this.linePrograms.get(wQ);
        var TQ;
        return qQ || (qQ = this.createProgram(`lines#${wQ}`, (TQ = function(QQ) {
          const WQ = new Map;
          for (let XQ = 0; XQ < PQ.length; XQ++) QQ & 1 << XQ && WQ.set(PQ[XQ], !0);
          return WQ
        }(wQ), Cq({
          defines: TQ,
          vertex: Rq,
          fragment: Eq,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(wQ, qQ)), qQ
      }
      createProgram(QQ, WQ, XQ) {
        var wQ;
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const TQ = this.nextProgramId++,
          zQ = `${XQ}-${TQ}`,
          sQ = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          FQ = [{
            binding: 0,
            visibility: sQ,
            buffer: {
              type: "uniform"
            }
          }];
        for (const JQ of WQ.textures) FQ.push({
          binding: JQ.binding,
          visibility: sQ,
          texture: {
            viewDimension: JQ.dimension
          }
        }), FQ.push({
          binding: JQ.samplerBinding,
          visibility: sQ,
          sampler: {}
        });
        const PQ = this.device.createBindGroupLayout({
            label: zQ,
            entries: FQ
          }),
          gQ = {
            key: QQ,
            id: TQ,
            kind: XQ,
            program: WQ,
            vertex: this.device.createShaderModule({
              label: `${zQ}-vertex`,
              code: WQ.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${zQ}-fragment`,
              code: WQ.fragment
            }),
            materialLayout: PQ,
            pipelineLayout: this.device.createPipelineLayout({
              label: zQ,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, PQ, ...qQ ? [qQ.layout] : []]
            }),
            packGroup: null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.group) && void 0 !== wQ ? wQ : null,
            failed: !1
          };
        return this.programs.set(QQ, gQ), gQ
      }
      writeFrameUniforms() {
        const QQ = this.frameUniforms;
        pT(this.view, QQ), this.device.queue.writeBuffer(this.frameBuffer, 0, QQ)
      }
      materialInstance(QQ, WQ) {
        let XQ = this.materials.get(QQ);
        if (!XQ) {
          const WQ = new Map;
          this.materials.set(QQ, WQ);
          const {
            resources: wQ,
            materials: qQ
          } = this;
          QQ.yE.addOnce((() => {
            for (const QQ of WQ.values()) QQ.released = !0, wQ.destroyBuffer(QQ.buffer);
            qQ.delete(QQ)
          })), XQ = WQ
        }
        let wQ = XQ.get(WQ.key);
        return wQ || (wQ = this.newMaterialInstance(QQ, null, WQ), XQ.set(WQ.key, wQ)), wQ
      }
      modelInstance(QQ, WQ) {
        const XQ = this.modelSlot(QQ);
        let wQ = XQ.instances.get(WQ.key);
        return wQ || (wQ = this.newMaterialInstance(QQ, QQ, WQ), XQ.instances.set(WQ.key, wQ)), wQ
      }
      modelSlot(QQ) {
        var WQ;
        let XQ = QQ.gpu[lQ.f.lite];
        return (null === (WQ = XQ) || void 0 === WQ ? void 0 : WQ.epoch) !== this.resources.epoch && (XQ = new Az(this.resources, this.resources.epoch), QQ.gpu[lQ.f.lite] = XQ), XQ
      }
      newMaterialInstance(QQ, WQ, XQ) {
        const wQ = XQ.program.material.floats,
          qQ = new Float32Array(wQ),
          TQ = new Map;
        return {
          owner: QQ,
          model: WQ,
          program: XQ,
          data: qQ,
          uploaded: new Float32Array(wQ).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${QQ.name}-uniforms`,
            size: Math.max(16, 4 * wQ),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: TQ,
          ubo: new DT(XQ.program.material.slots, qQ, TQ),
          bindGroup: null,
          bound: new Array(2 * XQ.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(QQ) {
        var WQ;
        const XQ = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Sq + tq,
            fragment: Sq + oq,
            attributes: [],
            material: fq,
            textures: []
          }, "earthSky"),
          wQ = this.earthSkyUniforms ??= this.newMaterialInstance(cz, null, XQ);
        this.earthSkyFrom !== QQ && (this.earthSkyFrom = QQ, wQ.data.fill(0)), Kq(wQ.ubo, QQ, this.view);
        const qQ = this.vertexInputs(XQ, cz, "earthSky", XQ, null);
        if (XQ.failed || !qQ || !this.bindMaterial(wQ, !1)) return;
        const TQ = null !== (WQ = qQ.state) && void 0 !== WQ ? WQ : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          zQ = this.makeDraw(XQ, qQ, TQ, wQ, 1);
        zQ.count = uq.length;
        const sQ = mq(QQ, this.view);
        zQ.slotOffset = this.writeMeshSlot(sQ, 1), this.lists.skyDraws.push(zQ)
      }
      uploadIfChanged(QQ) {
        const {
          data: WQ,
          uploaded: XQ
        } = QQ;
        for (let wQ = 0; wQ < WQ.length; wQ++)
          if (WQ[wQ] !== XQ[wQ]) return XQ.set(WQ), void this.device.queue.writeBuffer(QQ.buffer, 0, WQ)
      }
      bindMaterial(QQ, WQ) {
        return QQ.frame !== this.frame && (QQ.frame = this.frame, WQ || this.uploadIfChanged(QQ), QQ.bindable = this.bindTextures(QQ)), QQ.bindable
      }
      bindTextures(QQ) {
        const {
          program: WQ,
          bound: XQ
        } = QQ, wQ = WQ.program.textures;
        let qQ = !QQ.bindGroup,
          TQ = !0;
        for (let zQ = 0; zQ < wQ.length; zQ++) {
          const WQ = QQ.textures.get(wQ[zQ].name),
            sQ = WQ ? this.resources.boundTexture(WQ) : null;
          sQ ? XQ[2 * zQ] === sQ.view && XQ[2 * zQ + 1] === sQ.sampler || (XQ[2 * zQ] = sQ.view, XQ[2 * zQ + 1] = sQ.sampler, qQ = !0) : (WQ || QQ.ubo.expected.has(wQ[zQ].name) || this.warnOnce(`texture:${QQ.owner.name}:${wQ[zQ].name}`, `${QQ.owner.name} has no ${wQ[zQ].name}`), TQ = !1)
        }
        if (!TQ) return qQ && (QQ.bindGroup = null), !1;
        if (qQ) {
          const qQ = [{
            binding: 0,
            resource: {
              buffer: QQ.buffer
            }
          }];
          for (let QQ = 0; QQ < wQ.length; QQ++) qQ.push({
            binding: wQ[QQ].binding,
            resource: XQ[2 * QQ]
          }), qQ.push({
            binding: wQ[QQ].samplerBinding,
            resource: XQ[2 * QQ + 1]
          });
          QQ.bindGroup = this.device.createBindGroup({
            label: `${QQ.owner.name}-material`,
            layout: WQ.materialLayout,
            entries: qQ
          })
        }
        return !0
      }
      writeMeshSlot(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, QQ, WQ, XQ), this.slotCount++ * gq
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(QQ, WQ, XQ, wQ, qQ) {
        let TQ = this.inputs.get(QQ);
        if (!TQ || TQ.program !== wQ || !HT(WQ, TQ, this.resources, qQ)) {
          var zQ;
          if (TQ = null !== (zQ = this.vertexLayouts.resolveInputs(WQ, XQ, wQ, qQ)) && void 0 !== zQ ? zQ : void 0, !TQ) return null;
          this.inputs.set(QQ, TQ)
        }
        return this.withGpuBuffers(TQ)
      }
      meshInputs(QQ, WQ, XQ) {
        const wQ = this.inputs.get(QQ);
        if (wQ && this.inputsStamped(wQ, QQ, XQ, WQ)) return this.withGpuBuffers(wQ);
        const qQ = QQ.owner,
          TQ = PT(QQ),
          zQ = this.vertexInputs(QQ, qQ, qQ.name, WQ, TQ);
        return zQ && (zQ.geometry = gT(QQ), zQ.instanceLayout = this.drawDefines.instanceLayout(qQ, XQ)), zQ
      }
      inputsStamped(QQ, WQ, XQ, wQ) {
        return function(QQ, WQ, XQ, wQ) {
          return QQ.program === XQ && QQ.geometry === gT(WQ) && QQ.instanceLayout === wQ
        }(QQ, WQ, wQ, this.drawDefines.instanceLayout(WQ.owner, XQ))
      }
      withGpuBuffers(QQ) {
        return OT(QQ, this.resources, this.zeroBuffer) ? QQ : null
      }
      instanceBuffersFit(QQ, WQ, XQ) {
        const wQ = mT(WQ, XQ, this.resources, this.zeroBuffer);
        if (wQ) {
          const qQ = WQ.ends[wQ.index] - WQ.offsets[wQ.index] + WQ.E_[wQ.index];
          return this.warnOnce(`overrun:${QQ}`, `${QQ} draws ${XQ} instances from a ${qQ}-byte buffer (${wQ.needed} needed)`), !1
        }
        return !0
      }
      createBinding(QQ, WQ, XQ, wQ) {
        const qQ = `${WQ._colorFormat}|${WQ._depthStencilFormat}|${WQ._depthCompare}|${WQ._sampleCount}`,
          TQ = hW(this.device, WQ);
        if (QQ === this.skyLastRenderable) {
          let XQ = null;
          return {
            renderable: QQ,
            pipeline: TQ,
            draw: QQ => XQ ? this.drawSky(QQ, WQ, qQ, XQ) : 0,
            update: QQ => {
              XQ = QQ
            }
          }
        }
        return {
          renderable: QQ,
          pipeline: TQ,
          draw: QQ => (wQ ? wQ.execute(QQ, WQ, qQ) : 0) + this.drawList(QQ, WQ, qQ, XQ)
        }
      }
      drawSky(QQ, WQ, XQ, wQ) {
        const qQ = this.lists.skyDraws,
          TQ = qQ.length > 0;
        if (TQ) {
          var zQ;
          const XQ = (null !== (zQ = WQ._depthCompare) && void 0 !== zQ ? zQ : dW).startsWith("greater") ? 0 : 1;
          QQ.setViewport(0, 0, wQ.targetWidth, wQ.targetHeight, XQ, XQ)
        }
        const sQ = this.drawList(QQ, WQ, XQ, qQ);
        return TQ && QQ.setViewport(0, 0, wQ.targetWidth, wQ.targetHeight, 0, 1), sQ
      }
      drawList(QQ, WQ, XQ, wQ) {
        let qQ = 0;
        const TQ = this.binder;
        TQ.reset();
        for (const zQ of wQ) {
          const wQ = this.pipelineFor(zQ, WQ, XQ);
          wQ && (TQ.bind(QQ, zQ, wQ, this.meshSlots.bindGroup, zQ.slotOffset), zQ.indexBuffer ? QQ.drawIndexed(zQ.count, zQ.instances, zQ.first, 0, 0) : QQ.draw(zQ.count, zQ.instances, zQ.first, 0), qQ++)
        }
        return qQ
      }
      pipelineFor(QQ, WQ, XQ) {
        var wQ, qQ;
        if (QQ.program.failed) return null;
        const TQ = QQ.inputs;
        if (TQ.pipeline && TQ.pipelineTarget === XQ) return TQ.pipeline;
        const zQ = `${QQ.pipelineKey}|${XQ}`,
          sQ = this.pipelines.get(zQ);
        if (void 0 !== sQ) return sQ && (TQ.pipeline = sQ, TQ.pipelineTarget = XQ), sQ || null;
        this.pipelines.set(zQ, null);
        const {
          program: FQ,
          layout: PQ,
          state: gQ
        } = QQ, JQ = {
          label: `standard-${FQ.id}`,
          layout: FQ.pipelineLayout,
          vertex: {
            module: FQ.vertex,
            entryPoint: "main",
            buffers: PQ.buffers
          },
          fragment: DW({
            module: FQ.fragment,
            entryPoint: "main"
          }, WQ, gQ.blend, gQ.colourWrite),
          depthStencil: WQ._depthStencilFormat ? {
            format: WQ._depthStencilFormat,
            depthCompare: null !== (wQ = null !== (qQ = gQ.depthCompare) && void 0 !== qQ ? qQ : WQ._depthCompare) && void 0 !== wQ ? wQ : dW,
            depthWriteEnabled: gQ.depthWrite,
            depthBias: gQ.depthBias,
            depthBiasSlopeScale: gQ.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: WQ._sampleCount
          },
          primitive: {
            topology: gQ.topology,
            frontFace: gQ.frontFace,
            cullMode: gQ.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(JQ).then((QQ => {
          this.compiling--, this.pipelines.set(zQ, QQ)
        }), (QQ => {
          this.compiling--, this.reportFailure(FQ, zQ, QQ)
        })), null
      }
      forEachSunShadowCaster(QQ) {
        const WQ = this.caster,
          XQ = (XQ, wQ, qQ) => {
            const TQ = XQ.unit && function(QQ) {
              const WQ = QQ.material.model;
              return null !== WQ && (WQ.lifeform || WQ.item) && WQ.castsSunShadow && "triangle-list" === QQ.state.topology
            }(XQ) ? PT(XQ.unit) : null;
            if (!TQ) return;
            const zQ = XQ.unit.owner;
            switch (WQ.geometry = TQ, WQ.skip = zQ.noSunShadowVertices, WQ.indexed = null !== XQ.indexBuffer, WQ.first = XQ.first, WQ.count = XQ.count, WQ.nJ = wQ, WQ.worldAt = qQ, WQ.instances = null, WQ.instanceCount = 1, WQ.thin = !1, TT(zQ)) {
              case "thin": {
                const QQ = zQ._thinInstanceDataStorage.matrixData;
                if (!QQ) return;
                WQ.instances = QQ, WQ.instanceCount = Math.min(XQ.instances, QQ.length / 16), WQ.thin = !0;
                break
              }
              case "instanced": {
                const QQ = this.resources.batchUploads.get(zQ);
                if (!QQ || QQ.frame !== this.frame || !this.writeBatchCasters(QQ)) return;
                break
              }
            }
            QQ(WQ)
          };
        for (const wQ of this.lists.opaqueDraws) XQ(wQ, this.meshSlots.data, wQ.slotOffset / 4);
        this.thinBundle.forEachDrawn(XQ)
      }
      writeBatchCasters(QQ) {
        const {
          caster: WQ
        } = this, XQ = QQ.packedMatrices, wQ = QQ.count;
        WQ.instances = XQ, WQ.instanceCount = wQ;
        let qQ = -1;
        for (let TQ = 0; TQ < wQ; TQ++) {
          const WQ = Cz(QQ.packedRowMesh(TQ));
          WQ && qQ < 0 ? (this.casterWorlds.length < 16 * wQ && (this.casterWorlds = new Float32Array(XQ.length)), this.casterWorlds.set(XQ.subarray(0, 16 * TQ)), qQ = TQ) : !WQ && qQ >= 0 && (this.casterWorlds.set(XQ.subarray(16 * TQ, 16 * TQ + 16), 16 * qQ), qQ++)
        }
        return qQ >= 0 && (WQ.instances = this.casterWorlds, WQ.instanceCount = qQ), WQ.instanceCount > 0
      }
      async reportFailure(QQ, WQ, XQ) {
        const wQ = [];
        let qQ = !0;
        for (const [TQ, zQ] of [
            ["vertex", QQ.vertex],
            ["fragment", QQ.fragment]
          ]) {
          const QQ = await zQ.getCompilationInfo();
          for (const WQ of QQ.messages) qQ &&= "error" !== WQ.type, wQ.push(`${TQ}:${WQ.lineNum}:${WQ.linePos} ${WQ.type}: ${WQ.message}`)
        }
        if (qQ && !QQ.packGroup) return this.pipelines.set(WQ, !1), console.error(`Lite: pipeline ${WQ} failed`, XQ), void gW(this.device, "mesh", QQ.kind, XQ);
        QQ.failed || (QQ.failed = !0, console.error(`Lite: program ${QQ.id} failed`, XQ, wQ.join("\n"), {
          program: QQ.program,
          key: QQ.key
        }), gW(this.device, "mesh", QQ.kind, XQ, qQ ? null : wQ[0]))
      }
    }

    function Cz(QQ) {
      var WQ, XQ;
      const wQ = null === (WQ = QQ.bC) || void 0 === WQ || null === (XQ = WQ.aShaderPackItem) || void 0 === XQ ? void 0 : XQ.x;
      return void 0 !== wQ && 0 !== (wQ & cW.f)
    }
    var uz = XQ(41929),
      Lz = XQ(41932),
      kz = XQ(41940),
      fz = XQ(41890);
    const Sz = [0, 3, 1, 4, 2, 5];

    function tz(QQ, WQ, XQ, wQ, qQ) {
      const TQ = XQ[0].width;
      try {
        return qQ ? function(QQ, WQ, XQ) {
          const wQ = (0, fz.e)(QQ, XQ, XQ, 6);
          for (let qQ = 0; qQ < 6; qQ++)(0, fz.h)(QQ, wQ, qQ, WQ[Sz[qQ]], {
            invertY: !1
          });
          return wQ.texture
        }(QQ, XQ, TQ) : function(QQ, WQ, XQ, wQ) {
          const qQ = QQ.createTexture({
            label: "sink-cube",
            size: {
              width: XQ,
              height: XQ,
              depthOrArrayLayers: 6
            },
            format: wQ,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let TQ = 0; TQ < 6; TQ++) QQ.queue.copyExternalImageToTexture({
            source: WQ[Sz[TQ]]
          }, {
            texture: qQ,
            origin: {
              x: 0,
              y: 0,
              z: TQ
            }
          }, {
            width: XQ,
            height: XQ
          });
          return qQ
        }(WQ, XQ, TQ, 1 === wQ ? "r8unorm" : "rgba8unorm")
      } finally {
        oz(XQ)
      }
    }

    function oz(QQ) {
      for (const WQ of null !== QQ && void 0 !== QQ ? QQ : []) null === WQ || void 0 === WQ || WQ.close()
    }
    async function ez(QQ) {
      const WQ = [],
        XQ = [];
      if (await Promise.all(QQ.map(((QQ, wQ) => (WQ[wQ] = null, QQ.then((QQ => {
          WQ[wQ] = QQ
        }), (QQ => {
          XQ.push(QQ)
        })))))), XQ.length > 0) throw oz(WQ), XQ[0];
      return WQ
    }
    class nz {
      constructor(QQ) {
        this.yJ = QQ, this.starts = [], this.lengths = [], this.used = 0, QQ > 0 && (this.starts.push(0), this.lengths.push(QQ))
      }
      allocate(QQ) {
        const {
          starts: WQ,
          lengths: XQ
        } = this;
        for (let wQ = 0; wQ < WQ.length; wQ++) {
          if (XQ[wQ] < QQ) continue;
          const qQ = WQ[wQ];
          return XQ[wQ] === QQ ? (WQ.splice(wQ, 1), XQ.splice(wQ, 1)) : (WQ[wQ] += QQ, XQ[wQ] -= QQ), this.used += QQ, qQ
        }
        return -1
      }
      free(QQ, WQ) {
        this.used -= WQ;
        const XQ = Math.min(QQ + WQ, this.yJ);
        XQ > QQ && this.release(QQ, XQ - QQ)
      }
      grow(QQ) {
        const WQ = this.yJ;
        this.yJ = QQ, this.release(WQ, QQ - WQ)
      }
      truncate(QQ) {
        const {
          starts: WQ,
          lengths: XQ
        } = this;
        for (let wQ = WQ.length - 1; wQ >= 0 && WQ[wQ] + XQ[wQ] > QQ; wQ--) WQ[wQ] >= QQ ? (WQ.splice(wQ, 1), XQ.splice(wQ, 1)) : XQ[wQ] = QQ - WQ[wQ];
        this.yJ = QQ
      }
      release(QQ, WQ) {
        const {
          starts: XQ,
          lengths: wQ
        } = this;
        let qQ = 0,
          TQ = XQ.length;
        for (; qQ < TQ;) {
          const WQ = qQ + TQ >> 1;
          XQ[WQ] < QQ ? qQ = WQ + 1 : TQ = WQ
        }
        const zQ = qQ,
          sQ = zQ > 0 && XQ[zQ - 1] + wQ[zQ - 1] === QQ,
          FQ = zQ < XQ.length && QQ + WQ === XQ[zQ];
        sQ && FQ ? (wQ[zQ - 1] += WQ + wQ[zQ], XQ.splice(zQ, 1), wQ.splice(zQ, 1)) : sQ ? wQ[zQ - 1] += WQ : FQ ? (XQ[zQ] = QQ, wQ[zQ] += WQ) : (XQ.splice(zQ, 0, QQ), wQ.splice(zQ, 0, WQ))
      }
    }
    const xz = 256;
    class Yz {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = QQ, this.onReplaced = WQ, this.mergeGap = XQ, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.Qy = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const qQ = Math.max(xz, Math.ceil(wQ / xz) * xz);
        this.bytes = new Uint8Array(qQ), this.words = new Uint32Array(this.bytes.buffer), this.Qy = new nz(qQ / xz)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(QQ) {
        return Math.max(1, Math.ceil(QQ / xz)) * xz
      }
      allocate(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ;
        const wQ = Yz.slotBytes(QQ),
          qQ = wQ / xz;
        let TQ = this.Qy.allocate(qQ);
        TQ < 0 && (this.grow(this.Qy.yJ + qQ), TQ = this.Qy.allocate(qQ));
        const zQ = TQ * xz;
        return this.growTo(zQ + Math.max(XQ, wQ)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, zQ, zQ + wQ), WQ && this.bytes.set(new Uint8Array(WQ.buffer, WQ.byteOffset, Math.min(WQ.byteLength, wQ)), zQ), this.markDirty(zQ, zQ + wQ), zQ
      }
      growTo(QQ) {
        const WQ = Math.ceil(QQ / xz);
        WQ > this.Qy.yJ && this.grow(WQ)
      }
      free(QQ, WQ) {
        this.freed.push(QQ, WQ)
      }
      write(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (wQ <= 0) return;
        wQ <= 1024 && 0 === (3 & (QQ | XQ | wQ)) ? this.copyWords(QQ >> 2, WQ.buffer, XQ >> 2, wQ >> 2) : this.bytes.set(new Uint8Array(WQ.buffer, XQ, wQ), QQ);
        let TQ = QQ + wQ;
        if (qQ) {
          const WQ = QQ + 4 * Math.ceil(wQ / 4);
          this.bytes.fill(0, TQ, WQ), TQ = WQ
        }
        this.markDirty(QQ, TQ)
      }
      copyWords(QQ, WQ, XQ, wQ) {
        let qQ = this.sourceWords.get(WQ);
        qQ || (qQ = new Uint32Array(WQ, 0, WQ.byteLength >> 2), this.sourceWords.set(WQ, qQ));
        const TQ = this.words;
        for (let zQ = 0; zQ < wQ; zQ++) TQ[QQ + zQ] = qQ[XQ + zQ]
      }
      move(QQ, WQ, XQ) {
        this.bytes.copyWithin(WQ, QQ, QQ + XQ), this.markDirty(WQ, WQ + XQ)
      }
      flush() {
        for (const WQ of this.retired) this.onReplaced(WQ), WQ.destroy();
        this.retired.length = 0;
        const QQ = this.dirtyStarts.length;
        if (QQ > 0) {
          const {
            dirtyStarts: WQ,
            dirtyEnds: XQ,
            order: wQ
          } = this;
          wQ.length = QQ;
          for (let sQ = 0; sQ < QQ; sQ++) wQ[sQ] = sQ;
          QQ > 1 && wQ.sort(((QQ, XQ) => WQ[QQ] - WQ[XQ]));
          const qQ = this.mergeGap;
          let TQ = WQ[wQ[0]],
            zQ = XQ[wQ[0]];
          for (let sQ = 1; sQ < QQ; sQ++) {
            const QQ = wQ[sQ];
            WQ[QQ] - zQ <= qQ ? zQ = Math.max(zQ, XQ[QQ]) : (this.send(TQ, zQ), TQ = WQ[QQ], zQ = XQ[QQ])
          }
          this.send(TQ, zQ), WQ.length = 0, XQ.length = 0
        }
        this.holding = !1
      }
      dD() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const QQ = this.freed;
        for (let WQ = 0; WQ < QQ.length; WQ += 2) this.Qy.free(QQ[WQ] / xz, QQ[WQ + 1] / xz);
        QQ.length = 0
      }
      send(QQ, WQ) {
        this.device.queue.writeBuffer(this.gpu, QQ, this.bytes.buffer, QQ, WQ - QQ);
        for (const XQ of this.replaced) {
          const wQ = Math.min(WQ, XQ.size);
          wQ > QQ && this.device.queue.writeBuffer(XQ, QQ, this.bytes.buffer, QQ, wQ - QQ)
        }
      }
      markDirty(QQ, WQ) {
        QQ &= -4, WQ = WQ + 3 & -4, this.holding ? (this.dirtyStarts.push(QQ), this.dirtyEnds.push(WQ)) : this.send(QQ, WQ)
      }
      grow(QQ) {
        const WQ = this.Qy.yJ,
          XQ = Math.max(2 * WQ, QQ),
          wQ = new Uint8Array(XQ * xz);
        wQ.set(this.bytes);
        const qQ = this.gpu;
        this.gpu = this.createGpu(wQ.byteLength), this.bytes = wQ, this.words = new Uint32Array(wQ.buffer), this.Qy.grow(XQ), qQ && (this.replaced.push(qQ), this.onReplaced(qQ)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, WQ * xz)
      }
      createGpu(QQ) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: QQ,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Nz(QQ) {
      return Array.isArray(QQ) ? new Float32Array(QQ) : QQ
    }

    function Zz(QQ, WQ, XQ, wQ, qQ) {
      const TQ = YQ(qQ),
        zQ = Math.min(qQ, wQ.byteLength);
      if (TQ === zQ && wQ.byteOffset % 4 === 0) return void QQ.queue.writeBuffer(WQ, XQ, wQ.buffer, wQ.byteOffset, TQ);
      const sQ = new Uint8Array(TQ);
      sQ.set(new Uint8Array(wQ.buffer, wQ.byteOffset, zQ)), QQ.queue.writeBuffer(WQ, XQ, sQ)
    }

    function Oz(QQ, WQ, XQ) {
      const wQ = "linear",
        qQ = "nearest";
      let TQ = qQ,
        zQ = qQ,
        sQ = "nearest",
        FQ = !WQ;
      switch (QQ) {
        case 11:
          TQ = wQ, zQ = wQ;
          break;
        case 3:
          TQ = wQ, zQ = wQ, sQ = WQ ? "linear" : "nearest";
          break;
        case 8:
          sQ = WQ ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          zQ = wQ;
          break;
        case 6:
          zQ = wQ, sQ = WQ ? "linear" : "nearest";
          break;
        case 7:
          zQ = wQ, FQ = !0;
          break;
        case 9:
          TQ = wQ;
          break;
        case 10:
          TQ = wQ, sQ = WQ ? "linear" : "nearest";
          break;
        case 2:
          TQ = wQ, zQ = wQ, XQ > 1 ? (sQ = "linear", FQ = !1) : FQ = !0;
          break;
        case 12:
          TQ = wQ, FQ = !0;
          break;
        default:
          FQ = !0
      }
      return XQ > 1 && !FQ ? {
        magFilter: wQ,
        minFilter: wQ,
        mipmapFilter: "linear",
        maxAnisotropy: XQ
      } : {
        magFilter: TQ,
        minFilter: zQ,
        mipmapFilter: sQ,
        ...FQ ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Kz(QQ) {
      return 0 === QQ ? "clamp-to-edge" : 2 === QQ ? "mirror-repeat" : "repeat"
    }
    class mz {
      constructor(QQ, WQ) {
        let {
          vertexArena: XQ = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = QQ, this.device = WQ, this.buffers = new WeakMap, this.K4 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = XQ ? this.createArena() : null
      }
      createArena() {
        return new Yz(this.device, (QQ => {
          var WQ;
          null === (WQ = this.onDestroy) || void 0 === WQ || WQ.call(this, QQ), this.gpuBuffersVersion++
        }))
      }
      rebind(QQ, WQ) {
        this.engine = QQ, this.device = WQ, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const XQ of this.liveUploads) XQ.rebind();
        for (const XQ of this.rebindWaiters.splice(0)) XQ()
      }
      flushUploads() {
        var QQ;
        null === (QQ = this.arena) || void 0 === QQ || QQ.flush()
      }
      endUploadFrame() {
        var QQ;
        null === (QQ = this.arena) || void 0 === QQ || QQ.dD()
      }
      vertexBufferCreated(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : XQ ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(QQ);
        const qQ = Nz(WQ);
        QQ.yJ = qQ.byteLength, this.buffers.set(QQ, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: XQ && null !== this.arena,
          pending: qQ,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: wQ
        })
      }
      vertexBufferUpdated(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        const qQ = this.buffers.get(QQ);
        if (!qQ) return;
        const TQ = Nz(WQ),
          zQ = void 0 === wQ ? TQ.byteLength : Math.min(wQ, TQ.byteLength);
        this.update(qQ, TQ, XQ, zQ)
      }
      vertexBufferFloatsUpdated(QQ, WQ, XQ, wQ) {
        const qQ = this.buffers.get(QQ);
        if (!qQ) return;
        const TQ = XQ * Float32Array.BYTES_PER_ELEMENT,
          zQ = (wQ - XQ) * Float32Array.BYTES_PER_ELEMENT;
        qQ.slot >= 0 && zQ > 0 && TQ + zQ <= qQ.size ? this.writeSlot(qQ, TQ, WQ, WQ.byteOffset + TQ, zQ, !1) : qQ.gpu && zQ > 0 && TQ + zQ <= qQ.gpu.size ? this.device.queue.writeBuffer(qQ.gpu, TQ, WQ.buffer, WQ.byteOffset + TQ, zQ) : this.update(qQ, WQ.subarray(XQ, wQ), TQ, zQ)
      }
      indexBufferCreated(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(QQ);
        const wQ = function(QQ) {
          if (QQ instanceof Uint16Array || QQ instanceof Uint32Array) return QQ;
          for (let WQ = 0; WQ < QQ.length; WQ++)
            if (QQ[WQ] >= 65535) return new Uint32Array(QQ);
          return new Uint16Array(QQ)
        }(WQ);
        QQ.is32Bits = 4 === wQ.BYTES_PER_ELEMENT, QQ.yJ = wQ.byteLength, this.buffers.set(QQ, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: wQ,
          ownsPending: wQ !== WQ,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: XQ
        })
      }
      bufferDeleted(QQ) {
        const WQ = this.buffers.get(QQ);
        null !== WQ && void 0 !== WQ && WQ.gpu ? (this.destroyBuffer(WQ.gpu), this.gpuBuffersVersion++) : WQ && WQ.slot >= 0 && (this.arena.free(WQ.slot, WQ.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(QQ)
      }
      update(QQ, WQ, XQ, wQ) {
        if (QQ.slot >= 0) this.updateSlot(QQ, WQ, XQ, wQ);
        else if (QQ.gpu) {
          if (XQ + YQ(wQ) > QQ.gpu.size) {
            const WQ = this.device.createBuffer({
                label: QQ.label,
                size: YQ(Math.max(2 * QQ.gpu.size, XQ + wQ)),
                usage: QQ.usage | GPUBufferUsage.COPY_SRC
              }),
              qQ = this.device.createCommandEncoder();
            qQ.copyBufferToBuffer(QQ.gpu, 0, WQ, 0, QQ.gpu.size), this.device.queue.submit([qQ.finish()]), this.destroyBuffer(QQ.gpu), this.gpuBuffersVersion++, QQ.gpu = WQ
          }
          Zz(this.device, QQ.gpu, XQ, WQ, wQ)
        } else {
          const TQ = new Uint8Array(WQ.buffer, WQ.byteOffset, wQ),
            zQ = QQ.pending;
          if (zQ && QQ.ownsPending && XQ + wQ <= zQ.byteLength) new Uint8Array(zQ.buffer, zQ.byteOffset, zQ.byteLength).set(TQ, XQ);
          else if (zQ && 0 === XQ && wQ === zQ.byteLength && WQ.byteLength === wQ) QQ.pending = WQ, QQ.ownsPending = !1;
          else {
            var qQ;
            const WQ = new Uint8Array(Math.max(null !== (qQ = null === zQ || void 0 === zQ ? void 0 : zQ.byteLength) && void 0 !== qQ ? qQ : 0, XQ + wQ));
            zQ && WQ.set(new Uint8Array(zQ.buffer, zQ.byteOffset, zQ.byteLength)), WQ.set(TQ, XQ), QQ.pending = WQ, QQ.ownsPending = !0
          }
        }
      }
      updateSlot(QQ, WQ, XQ, wQ) {
        const qQ = this.arena;
        XQ + YQ(wQ) > QQ.size && (QQ.size = YQ(Math.max(2 * QQ.size, XQ + wQ)), qQ.growTo(QQ.slot + QQ.size), this.gpuBuffersVersion++), 0 === wQ ? this.writeSlot(QQ, XQ, Qs, 0, 4, !1) : this.writeSlot(QQ, XQ, WQ, WQ.byteOffset, wQ, !0)
      }
      writeSlot(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = WQ + (TQ ? YQ(qQ) : qQ);
        zQ > QQ.slotBytes && this.moveSlot(QQ, zQ), this.arena.write(QQ.slot + WQ, XQ, wQ, qQ, TQ)
      }
      moveSlot(QQ, WQ) {
        const XQ = this.arena,
          wQ = Yz.slotBytes(Math.max(WQ, Math.min(2 * QQ.slotBytes, QQ.size))),
          qQ = XQ.allocate(wQ, null, QQ.size);
        XQ.move(QQ.slot, qQ, QQ.slotBytes), XQ.free(QQ.slot, QQ.slotBytes), QQ.slot = qQ, QQ.slotBytes = wQ, this.gpuBuffersVersion++
      }
      cover(QQ, WQ) {
        const XQ = this.buffers.get(QQ);
        if (!XQ || XQ.slot < 0) return !1;
        const wQ = Math.min(WQ, XQ.size);
        return !(wQ <= XQ.slotBytes) && (this.moveSlot(XQ, wQ), !0)
      }
      destroyBuffer(QQ) {
        var WQ;
        null === (WQ = this.onDestroy) || void 0 === WQ || WQ.call(this, QQ), QQ.destroy()
      }
      gpuBuffer(QQ) {
        const WQ = this.buffers.get(QQ);
        if (!WQ) return null;
        if (WQ.slot >= 0) return this.arena.buffer;
        if (WQ.arena && WQ.pending) {
          const QQ = WQ.pending,
            XQ = this.arena;
          return WQ.size = YQ(QQ.byteLength), WQ.slotBytes = Yz.slotBytes(function(QQ) {
            const WQ = new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength);
            let XQ = WQ.length;
            if (QQ.byteOffset % 4 === 0) {
              for (; XQ % 4 !== 0 && 0 === WQ[XQ - 1];) XQ--;
              if (XQ % 4 === 0) {
                const WQ = new Uint32Array(QQ.buffer, QQ.byteOffset, XQ / 4);
                let wQ = WQ.length;
                for (; wQ > 0 && 0 === WQ[wQ - 1];) wQ--;
                XQ = 4 * wQ
              }
            }
            for (; XQ > 0 && 0 === WQ[XQ - 1];) XQ--;
            return XQ
          }(QQ)), WQ.slot = XQ.allocate(WQ.slotBytes, QQ, WQ.size), WQ.pending = null, XQ.buffer
        }
        if (!WQ.gpu && WQ.pending) {
          const QQ = WQ.pending;
          WQ.gpu = this.device.createBuffer({
            label: WQ.label,
            size: YQ(QQ.byteLength),
            usage: WQ.usage
          }), Zz(this.device, WQ.gpu, 0, QQ, QQ.byteLength), WQ.pending = null
        }
        return WQ.gpu
      }
      gpuOffset(QQ) {
        var WQ, XQ;
        const wQ = null !== (WQ = null === (XQ = this.buffers.get(QQ)) || void 0 === XQ ? void 0 : XQ.slot) && void 0 !== WQ ? WQ : -1;
        return wQ < 0 ? 0 : wQ
      }
      gpuEnd(QQ) {
        var WQ, XQ;
        const wQ = this.buffers.get(QQ);
        return wQ ? wQ.slot >= 0 ? wQ.slot + wQ.size : null !== (WQ = null === (XQ = wQ.gpu) || void 0 === XQ ? void 0 : XQ.size) && void 0 !== WQ ? WQ : 0 : 0
      }
      vertexInput(QQ, WQ, XQ) {
        var wQ, qQ, TQ, zQ;
        return null !== (wQ = null !== (qQ = XQ && this.modelInput(XQ, WQ)) && void 0 !== qQ ? qQ : null === (TQ = null !== (zQ = this.K4.get(QQ)) && void 0 !== zQ ? zQ : this.batchUploads.get(QQ)) || void 0 === TQ ? void 0 : TQ.inputs[WQ]) && void 0 !== wQ ? wQ : null
      }
      modelInput(QQ, WQ) {
        const XQ = this.geometrySlot(QQ);
        let wQ = XQ.inputs.get(WQ);
        if (void 0 === wQ) {
          const qQ = QQ.vertexAttributes.find((QQ => QQ.kind === WQ));
          wQ = qQ ? new jW(this.modelKey(XQ, qQ.data, !1), qQ.offset, qQ.stride, qQ.components, !1, qQ.glType, qQ.isNormalized) : null, XQ.inputs.set(WQ, wQ)
        }
        return wQ
      }
      modelIndex(QQ) {
        return QQ.indexData && this.modelKey(this.geometrySlot(QQ), QQ.indexData, !0)
      }
      geometrySlot(QQ) {
        var WQ;
        let XQ = QQ.gpu[lQ.f.lite];
        if ((null === (WQ = XQ) || void 0 === WQ ? void 0 : WQ.epoch) !== this.epoch) {
          const WQ = new Map,
            wQ = () => {
              for (const QQ of WQ.values()) this.bufferDeleted(QQ)
            },
            qQ = QQ => {
              const XQ = WQ.get(QQ);
              XQ && this.vertexBufferUpdated(XQ, QQ)
            };
          XQ = {
            keys: WQ,
            inputs: new Map,
            release: wQ,
            updated: qQ,
            epoch: this.epoch
          }, QQ.gpu[lQ.f.lite] = XQ
        }
        return XQ
      }
      modelKey(QQ, WQ, XQ) {
        let wQ = QQ.keys.get(WQ);
        if (!wQ) {
          if (XQ) {
            const QQ = {
              yJ: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(QQ, WQ, "model-indices"), wQ = QQ
          } else wQ = {
            yJ: 0
          }, this.vertexBufferCreated(wQ, WQ, !1, "model-vertices");
          QQ.keys.set(WQ, wQ)
        }
        return wQ
      }
      indexFormat(QQ) {
        return QQ.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(QQ, WQ) {
        --QQ.refs > 0 || (this.releaseTexture(QQ), oz(QQ.images), null !== WQ && this.textures.delete(WQ))
      }
      load(QQ, WQ) {
        const {
          epoch: XQ
        } = this, wQ = WQ.decoded = async function(QQ) {
          if ("cube" === QQ.kind) return async function(QQ) {
            if (6 !== QQ.length) throw new Error(`${QQ.length} files where six faces were expected`);
            const WQ = await ez(QQ.map((QQ => MQ(QQ)))),
              XQ = WQ[0].width;
            return ez(WQ.map((async QQ => {
              if (QQ.width === XQ && QQ.height === XQ) return QQ;
              try {
                return await createImageBitmap(QQ, {
                  ...KQ,
                  resizeWidth: XQ,
                  resizeHeight: XQ
                })
              } finally {
                QQ.close()
              }
            })))
          }(QQ.files);
          if ("data" === QQ.kind && QQ.data) return [await createImageBitmap(new Blob([QQ.data]), KQ)];
          return [await MQ(Mz(QQ))]
        }(QQ.source).then((QQ => {
          0 === WQ.refs || XQ !== this.epoch ? oz(QQ) : WQ.images = QQ
        }));
        this.track(WQ, Mz(QQ.source), wQ, (() => {
          WQ.wanted && !WQ.failed && WQ.refs > 0 && this.upload(QQ, WQ)
        }))
      }
      canvasUpdated(QQ, WQ, XQ) {
        const {
          state: wQ
        } = this.textureSlot(QQ);
        wQ.dynamicSource = {
          invertY: WQ,
          premultiplied: XQ
        }, wQ.dynamic && this.pushDynamic(QQ.source, wQ)
      }
      async atlasArrays(QQ) {
        const {
          device: WQ,
          epoch: XQ
        } = this;
        let wQ;
        try {
          wQ = await WW(WQ, QQ)
        } catch (TQ) {
          if (XQ === this.epoch) {
            if (!PW(WQ)) throw TQ;
            await new Promise((QQ => {
              this.rebindWaiters.push(QQ)
            }))
          }
          return this.atlasArrays(QQ)
        }
        if (wQ.forEach(((WQ, XQ) => {
            this.atlasSources.has(WQ) || this.atlasSources.set(WQ, {
              sources: QQ,
              index: XQ,
              stride: wQ[0].layers
            })
          })), XQ !== this.epoch) return wQ;
        const qQ = (0, uz.c)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const zQ of wQ) this.atlasBindings.has(zQ) || this.atlasBindings.set(zQ, {
          view: zQ.texture.createView({
            dimension: "2d-array"
          }),
          sampler: qQ
        });
        return wQ
      }
      boundTexture(QQ) {
        const WQ = this.atlasBindings.get(QQ);
        if (WQ) return WQ;
        const XQ = this.atlasSources.get(QQ);
        if (XQ) return this.rebuildAtlas(QQ, XQ), null;
        const wQ = QQ;
        if (wQ.released) return null;
        const qQ = this.textureSlot(wQ, !0),
          {
            state: TQ
          } = qQ;
        if (!TQ.view && (TQ.wanted = !0, TQ.loading || TQ.failed || this.upload(wQ, TQ), !TQ.view)) return null;
        const zQ = this.chosenSampler(wQ, qQ),
          sQ = qQ.bound;
        return sQ && sQ.view === TQ.view && sQ.sampler === zQ ? sQ : (qQ.bound = {
          view: TQ.view,
          sampler: zQ
        }, qQ.bound)
      }
      rebuildAtlas(QQ, WQ) {
        let {
          sources: XQ,
          index: wQ,
          stride: qQ
        } = WQ;
        if (this.atlasRebuilds.has(QQ)) return;
        this.atlasRebuilds.add(QQ);
        const {
          epoch: TQ
        } = this;
        this.atlasArrays(XQ).then((WQ => {
          WQ[0].layers === qQ && WQ[wQ] ? TQ === this.epoch && this.atlasBindings.set(QQ, this.atlasBindings.get(WQ[wQ])) : console.error(`Lite: the new device splits the atlas ${mQ(XQ.urls[0])} into other arrays than its materials read`)
        }), (QQ => {
          console.error(`Lite: could not build the atlas ${mQ(XQ.urls[0])} again on a new device`, QQ)
        }))
      }
      textureLoaded(QQ) {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = this.heldSlot(QQ)) || void 0 === XQ ? void 0 : XQ.state.decoded) && void 0 !== WQ ? WQ : null
      }
      textureFailed(QQ) {
        var WQ;
        return !0 === (null === (WQ = this.heldSlot(QQ)) || void 0 === WQ ? void 0 : WQ.state.failed)
      }
      heldSlot(QQ) {
        const WQ = QQ.gpu[lQ.f.lite];
        return (null === WQ || void 0 === WQ ? void 0 : WQ.epoch) === this.epoch ? WQ : void 0
      }
      chosenSampler(QQ, WQ) {
        const {
          samplingMode: XQ,
          wrapU: wQ,
          wrapV: qQ
        } = QQ.sampler, TQ = WQ.state.hasMips, zQ = function(QQ, WQ) {
          const {
            bilinear: XQ,
            trilinear: wQ
          } = lQ.j;
          return !WQ && QQ !== XQ || 11 !== QQ && QQ !== wQ && QQ !== XQ ? 1 : 4
        }(XQ, TQ), sQ = WQ.sampler;
        if (sQ && sQ.samplingMode === XQ && sQ.hasMips === TQ && sQ.anisotropy === zQ && sQ.wrapU === wQ && sQ.wrapV === qQ) return sQ.sampler;
        const FQ = this.samplerFor(XQ, TQ, zQ, wQ, qQ);
        return WQ.sampler = {
          samplingMode: XQ,
          hasMips: TQ,
          anisotropy: zQ,
          wrapU: wQ,
          wrapV: qQ,
          sampler: FQ
        }, FQ
      }
      releaseTexture(QQ) {
        var WQ, XQ;
        QQ.view && (null === (XQ = this.onDestroy) || void 0 === XQ || XQ.call(this, QQ.view));
        null === (WQ = QQ.destroy) || void 0 === WQ || WQ.call(QQ)
      }
      textureSlot(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = QQ.gpu[lQ.f.lite];
        if ((null === XQ || void 0 === XQ ? void 0 : XQ.epoch) === this.epoch) return XQ;
        const wQ = function(QQ) {
          let {
            source: WQ,
            sampler: XQ
          } = QQ;
          return "canvas" === WQ.kind ? null : `${WQ.kind}|${Mz(WQ)}|${XQ.noMipmap}|${XQ.samplingMode}|${XQ.invertY}`
        }(QQ);
        let qQ = null === wQ ? void 0 : this.textures.get(wQ);
        var TQ;
        qQ || (qQ = {
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
          dynamicSource: null !== (TQ = null === XQ || void 0 === XQ ? void 0 : XQ.state.dynamicSource) && void 0 !== TQ ? TQ : null
        }, null !== wQ && (this.textures.set(wQ, qQ), this.load(QQ, qQ), WQ && !XQ && this.firstBindDecodes++));
        qQ.refs++;
        const zQ = qQ,
          {
            epoch: sQ
          } = this,
          FQ = {
            state: qQ,
            bound: null,
            sampler: null,
            release: () => {
              sQ === this.epoch && this.releaseSlot(zQ, wQ)
            },
            epoch: sQ
          };
        return QQ.gpu[lQ.f.lite] = FQ, FQ
      }
      samplerFor(QQ, WQ, XQ, wQ, qQ) {
        const TQ = `${QQ}|${WQ}|${XQ}|${wQ}|${qQ}`;
        let zQ = this.samplers.get(TQ);
        if (!zQ) {
          const sQ = {
            ...Oz(QQ, WQ, XQ),
            addressModeU: Kz(wQ),
            addressModeV: Kz(qQ)
          };
          zQ = (0, uz.c)(this.engine, sQ), this.samplers.set(TQ, zQ)
        }
        return zQ
      }
      upload(QQ, WQ) {
        const {
          source: XQ,
          sampler: wQ
        } = QQ;
        WQ.hasMips = !wQ.noMipmap, "canvas" === XQ.kind ? this.createDynamic(XQ, WQ) : "cube" === XQ.kind ? this.uploadCube(WQ, XQ.luminance) : this.uploadImage(WQ, !0 === wQ.invertY, XQ.url)
      }
      uploadImage(QQ, WQ, XQ) {
        const [wQ] = QQ.images;
        QQ.images = null;
        const {
          epoch: qQ
        } = this, TQ = (0, Lz.c)(this.engine, wQ, {
          mipMaps: QQ.hasMips,
          invertY: WQ,
          srgb: !1
        }).then((WQ => {
          wQ.close(), 0 !== QQ.refs && qQ === this.epoch ? (QQ.view = WQ.view, QQ.destroy = WQ.texture.destroy.bind(WQ.texture)) : WQ.texture.destroy()
        }));
        this.track(QQ, XQ, TQ)
      }
      track(QQ, WQ, XQ, wQ) {
        const {
          epoch: qQ
        } = this;
        QQ.loading = !0, this.pending++, XQ.catch((XQ => {
          qQ === this.epoch && (QQ.failed = !0, console.warn(`Lite: could not load texture ${mQ(WQ)}`, XQ))
        })).finally((() => {
          qQ === this.epoch && (QQ.loading = !1, this.pending--, null === wQ || void 0 === wQ || wQ())
        }))
      }
      uploadCube(QQ, WQ) {
        const XQ = QQ.images;
        QQ.images = null;
        const wQ = tz(this.engine, this.device, XQ, (0, lQ.A)(WQ), QQ.hasMips);
        QQ.view = wQ.createView({
          dimension: "cube"
        }), QQ.destroy = () => {
          wQ.destroy()
        }
      }
      createDynamic(QQ, WQ) {
        const {
          canvas: XQ
        } = QQ, wQ = (0, kz.b)(this.engine, Math.max(1, XQ.width), Math.max(1, XQ.height), {
          mipMaps: WQ.hasMips,
          srgb: !1
        });
        WQ.dynamic = wQ, WQ.view = wQ.view, WQ.destroy = () => {
          wQ.texture.destroy()
        }, this.pushDynamic(QQ, WQ)
      }
      pushDynamic(QQ, WQ) {
        const XQ = WQ.dynamicSource,
          wQ = WQ.dynamic,
          {
            canvas: qQ
          } = QQ;
        if (XQ && wQ && 0 !== qQ.width && 0 !== qQ.height) return qQ.width !== wQ.width || qQ.height !== wQ.height ? (this.releaseTexture(WQ), WQ.dynamic = null, WQ.view = null, void this.createDynamic(QQ, WQ)) : void(0, kz.e)(this.engine, wQ, qQ, {
          invertY: XQ.invertY,
          premultiplyAlpha: XQ.premultiplied
        })
      }
    }

    function Mz(QQ) {
      return "cube" === QQ.kind ? QQ.rootUrl : "canvas" === QQ.kind ? "canvas" : QQ.url
    }
    const Qs = new Uint8Array(4);
    var Ws = XQ(39023);

    function Xs(QQ) {
      const WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      QQ._colorAttachment.storeOp = QQ._targetSignature._sampleCount > 1 ? WQ : "store";
      const XQ = QQ._renderPassDescriptor.depthStencilAttachment;
      XQ && (XQ.depthStoreOp = WQ, XQ.stencilStoreOp && (XQ.stencilStoreOp = WQ))
    }
    var ws = XQ(38047),
      qs = XQ(38099),
      Ts = XQ(37748),
      zs = XQ(39865);
    const ss = new Float64Array([1, 1, 1]),
      Fs = new Float64Array([0, 1, 0]),
      Ps = new Float64Array(4),
      gs = new Float32Array(16),
      rs = new Float64Array(3),
      Is = new Float64Array(4);

    function Bs(QQ, WQ, XQ) {
      QQ.fov = WQ.fov, QQ.near = WQ.near, QQ.far = WQ.far, QQ.renderWidth = XQ.renderWidth, QQ.renderHeight = XQ.renderHeight, (0, Ts.v)(WQ.holderRotation, 0, Ps, 0), (0, Ts.e)(ss, 0, Ps, 0, WQ.holderPosition, 0, gs);
      const wQ = WQ.Km;
      rs[0] = wQ[0], rs[1] = wQ[1], rs[2] = wQ[2] + 1;
      const qQ = QQ.viewMatrix;
      (0, Ts.k)(wQ, rs, Fs, qQ), (0, Ts.j)(qQ, 0, qQ), (0, Ts.n)(qQ, gs, 0, qQ), (0, Ts.j)(qQ, 0, qQ);
      const TQ = QQ.worldMatrix;
      (0, Ts.j)(qQ, 0, TQ), QQ.eye[0] = TQ[12], QQ.eye[1] = TQ[13], QQ.eye[2] = TQ[14], Is[0] = QQ.fov, Is[1] = QQ.renderWidth / QQ.renderHeight, Is[2] = QQ.near, Is[3] = QQ.far, (0, Ts.r)(Is, QQ.projectionMatrix), (0, Ts.n)(qQ, QQ.projectionMatrix, 0, QQ.viewProjectionMatrix), (0, zs.e)(QQ.viewProjectionMatrix, QQ.frustum)
    }

    function ys(QQ, WQ) {
      let XQ = QQ.frustumPlanes;
      XQ || (XQ = QQ.frustumPlanes = Array.from({
        length: 6
      }, (() => new ws.b(0, 0, 0, 0))));
      for (let wQ = 0; wQ < 6; wQ++) {
        const QQ = XQ[wQ].normal;
        QQ._x = WQ[4 * wQ], QQ._y = WQ[4 * wQ + 1], QQ._z = WQ[4 * wQ + 2], QQ._isDirty = !0, XQ[wQ].d = WQ[4 * wQ + 3]
      }
    }

    function Vs(QQ, WQ) {
      const XQ = WQ.clearColor;
      QQ.clearColour[0] = XQ.r, QQ.clearColour[1] = XQ.g, QQ.clearColour[2] = XQ.b, QQ.clearColour[3] = XQ.a;
      const wQ = WQ.ambientColor;
      QQ.ambientColour[0] = wQ.r, QQ.ambientColour[1] = wQ.g, QQ.ambientColour[2] = wQ.b, QQ.animationRatio = WQ.animationRatio, QQ.frameId = WQ.frameId, QQ.version++
    }

    function Ds(QQ) {
      const WQ = QQ.model.view;
      return WQ.animTick = (0, qs.f)(), WQ.timeMs = performance.now(), Vs(WQ, QQ.cB), QQ.model.update(WQ.frameId), WQ
    }

    function ps(QQ) {
      const WQ = QQ.cB,
        {
          view: XQ,
          Zm: wQ
        } = QQ.model;
      return Bs(XQ, wQ, WQ.Uj()), WQ.onBeforeRenderObservable.notifyObservers(WQ), ys(WQ, XQ.frustum), WQ.onBeforeCameraRenderObservable.notifyObservers(WQ.activeCamera), Ds(QQ)
    }
    var Gs = XQ(37706),
      Us = XQ(37810),
      bs = XQ(38086);

    function vs(QQ) {
      var WQ, XQ;
      const wQ = (0, HQ._)(QQ);
      if (!wQ || wQ.diffuseTexture && (0, bs.l)(QQ)) return null;
      const qQ = null === (WQ = (0, HQ.u)(wQ, vQ.h.name)) || void 0 === WQ ? void 0 : WQ.state,
        TQ = null === (XQ = (0, HQ.u)(wQ, MT.d.name)) || void 0 === XQ ? void 0 : XQ.state,
        zQ = new Float32Array(16);
      return function(QQ, WQ, XQ, wQ) {
        var qQ, TQ;
        const zQ = uw;
        wQ.set(QQ.diffuseColor, zQ.diffuse), wQ[zQ.diffuse + 3] = QQ.alpha, wQ.set(QQ.ambientColor, zQ.ambientAndCutoff), wQ[zQ.ambientAndCutoff + 3] = QQ.alphaCutOff, wQ.set(QQ.emissiveColor, zQ.emissiveAndLevel), wQ[zQ.emissiveAndLevel + 3] = null !== (qQ = null === (TQ = QQ.diffuseTexture) || void 0 === TQ ? void 0 : TQ.level) && void 0 !== qQ ? qQ : 1, null !== WQ && void 0 !== WQ && WQ.animDataPerTex ? (wQ[zQ.anim + 1] = qs.b, wQ[zQ.anim + 2] = WQ.animDataPerTex.length / 3 - 1) : XQ && (wQ[zQ.anim + 1] = XQ.numAnimStates, wQ[zQ.anim + 2] = XQ.ticksPerAnimState)
      }(wQ, qQ, TQ, zQ), {
        model: wQ,
        atlas: qQ,
        texture: qQ ? "atlas" : wQ.diffuseTexture ? "single" : "none",
        animated: qQ ? !!qQ.animDataPerTex : !!TQ,
        liquid: (0, bs.m)(QQ),
        customRenderMat: (0, bs.l)(QQ),
        uniformData: zQ
      }
    }
    var ds = XQ(3103);
    class Hs {
      constructor(QQ) {
        this.units = QQ, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var QQ;
        this.buffer.destroy(), null === (QQ = this.twin) || void 0 === QQ || QQ.destroy()
      }
    }
    class as {
      constructor(QQ, WQ) {
        this.arena = QQ, this.Qy = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.Qy = new nz(WQ);
        const XQ = new Hs(WQ);
        XQ.buffer = this.createBuffer(XQ, !1), this.backings.push(XQ), this.refresh()
      }
      get yJ() {
        return this.Qy.yJ
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
        let QQ = 0;
        for (const WQ of this.backings) QQ += WQ.units * (this.arena.unitBytes + (WQ.twin ? this.arena.twinUnitBytes : 0));
        return QQ
      }
      holds(QQ) {
        return QQ.start + QQ.length <= this.usable
      }
      lost(QQ) {
        return this.dropped || QQ.start + QQ.length > this.yJ
      }
      write(QQ, WQ) {
        const {
          device: XQ,
          unitBytes: wQ
        } = this.arena;
        for (const qQ of this.backings) {
          const TQ = (qQ.units - QQ.start) * wQ;
          TQ > 0 && XQ.queue.writeBuffer(qQ.buffer, QQ.start * wQ, WQ, 0, Math.min(WQ.byteLength, TQ))
        }
      }
      writeLight(QQ, WQ) {
        const {
          device: XQ,
          twinUnitBytes: wQ,
          verticesPerUnit: qQ
        } = this.arena, {
          light: TQ,
          count: zQ
        } = this.arena.twinLight(WQ, Math.min(WQ.length, QQ.length * qQ));
        for (const sQ of this.backings) {
          sQ.twin || (sQ.twin = this.createBuffer(sQ, !0));
          const WQ = (sQ.units - QQ.start) * qQ;
          WQ > 0 && XQ.queue.writeBuffer(sQ.twin, QQ.start * wQ, TQ, 0, Math.min(zQ, WQ))
        }
      }
      grow(QQ) {
        this.arena.assertNotDrawing();
        const {
          device: WQ,
          unitBytes: XQ,
          label: wQ
        } = this.arena, qQ = this.backings[this.backings.length - 1], TQ = new Hs(QQ), zQ = WQ.createCommandEncoder({
          label: `${wQ}-grow`
        });
        TQ.buffer = this.createBuffer(TQ, !1), zQ.copyBufferToBuffer(qQ.buffer, 0, TQ.buffer, 0, qQ.units * XQ), qQ.twin && (TQ.twin = this.createBuffer(TQ, !0), zQ.copyBufferToBuffer(qQ.twin, 0, TQ.twin, 0, qQ.units * this.arena.twinUnitBytes)), WQ.queue.submit([zQ.finish()]), this.backings.push(TQ), this.Qy.grow(QQ)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const QQ of this.backings) QQ.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(QQ, WQ) {
        const {
          device: XQ,
          unitBytes: wQ,
          twinUnitBytes: qQ,
          usage: TQ,
          label: zQ
        } = this.arena;
        XQ.pushErrorScope("out-of-memory");
        const sQ = XQ.createBuffer({
          label: WQ ? `${zQ}-light` : zQ,
          size: QQ.units * (WQ ? qQ : wQ),
          usage: (WQ ? this.arena.twinUsage : TQ) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, XQ.popErrorScope().then((XQ => {
          this.arena.awaitingVerdict--, this.settle(QQ, WQ, !XQ, !0)
        }), (XQ => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${zQ} buffer, taken as failed: ${String(XQ)}`), this.settle(QQ, WQ, !1, !1)
        })), sQ
      }
      settle(QQ, WQ, XQ, wQ) {
        const qQ = this.backings.indexOf(QQ);
        if (!(this.dropped || qQ < 0)) {
          if (!XQ) {
            if (wQ && this.arena.ranOutOfMemory(QQ.units, QQ.units * (WQ ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === qQ) return void this.drop();
            for (const QQ of this.backings.splice(qQ)) QQ.destroy();
            return this.Qy.truncate(this.backings[qQ - 1].units), this.growable = !1, void this.promote()
          }
          WQ ? QQ.twinReady = !0 : (QQ.bufferReady = !0, this.arena.allocatedBuffer(QQ.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: QQ
        } = this;
        let WQ = 0;
        for (; WQ + 1 < QQ.length && QQ[WQ].ready && QQ[WQ + 1].ready;) WQ++;
        for (const XQ of QQ.splice(0, WQ)) XQ.destroy();
        this.refresh()
      }
      refresh() {
        const QQ = this.backings[0];
        this.buffer = QQ.buffer, this.twin = QQ.twinReady ? QQ.twin : null, this.usable = !this.dropped && QQ.bufferReady ? QQ.units : 0
      }
    }
    class ls {
      constructor(QQ, WQ, XQ, wQ) {
        let {
          verticesPerUnit: qQ = 1,
          twinUsage: TQ = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = QQ, this.unitBytes = WQ, this.usage = XQ, this.label = wQ, this.pages = [], this.pj = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, AW.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), WQ % 4 !== 0) throw new Error(`${wQ}: ${WQ}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = qQ, this.twinUsage = TQ, this.twinValueBytes = qQ > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * qQ
      }
      twinLight(QQ, WQ) {
        if (4 === this.twinValueBytes) return this.widened.length < WQ && (this.widened = new Float32Array(Math.max(WQ, 2 * this.widened.length))), this.widened.set(QQ.subarray(0, WQ)), {
          light: this.widened,
          count: WQ
        };
        const XQ = WQ % this.verticesPerUnit;
        if (0 === XQ) return {
          light: QQ,
          count: WQ
        };
        const wQ = WQ - XQ + this.verticesPerUnit;
        return this.padded.length < wQ && (this.padded = new Uint16Array(Math.max(wQ, 2 * this.padded.length))), this.padded.set(QQ.subarray(0, WQ)), this.padded.fill(0, WQ, wQ), {
          light: this.padded,
          count: wQ
        }
      }
      allocate(QQ) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), QQ > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const qQ of this.pages) {
          const WQ = qQ.Qy.allocate(QQ);
          if (WQ >= 0) return {
            page: qQ,
            start: WQ,
            length: QQ
          }
        }
        const WQ = this.pages[this.pages.length - 1];
        if (null !== WQ && void 0 !== WQ && WQ.canGrow) {
          const XQ = Math.min(this.ceiling, Math.max(2 * WQ.yJ, WQ.yJ + QQ));
          if (XQ - WQ.yJ >= QQ) return WQ.grow(XQ), {
            page: WQ,
            start: WQ.Qy.allocate(QQ),
            length: QQ
          }
        }
        WQ && WQ !== this.pages[0] && 0 === WQ.Qy.used && WQ.drop();
        const XQ = Math.floor(1048576 / this.unitBytes),
          wQ = new as(this, Math.max(QQ, Math.min(this.ceiling, XQ)));
        return this.pages.push(wQ), {
          page: wQ,
          start: wQ.Qy.allocate(QQ),
          length: QQ
        }
      }
      free(QQ) {
        this.assertNotDrawing();
        const {
          page: WQ
        } = QQ;
        WQ.Qy.free(QQ.start, QQ.length), 0 === WQ.Qy.used && WQ !== this.pages[0] && WQ !== this.pages[this.pages.length - 1] && WQ.drop()
      }
      retire() {
        for (const QQ of this.pages) QQ.retire()
      }
      remove(QQ) {
        const WQ = this.pages.indexOf(QQ);
        WQ >= 0 && this.pages.splice(WQ, 1)
      }
      ranOutOfMemory(QQ, WQ) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${WQ}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, QQ), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, QQ) / 2));
        const XQ = performance.now();
        XQ >= this.shortageUntil && (this.forgetFailedAt = XQ + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = XQ + 1e3)
      }
      allocatedBuffer(QQ) {
        QQ >= this.failed && (this.failed = 1 / 0);
        const WQ = Math.min(2 * QQ, Math.floor((QQ + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, WQ))
      }
      stats() {
        let QQ = 0,
          WQ = 0,
          XQ = 0,
          wQ = 0;
        for (const qQ of this.pages) QQ += qQ.yJ, WQ += qQ.Qy.used, XQ += qQ.hasTwin ? qQ.yJ * this.twinUnitBytes : 0, wQ += qQ.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: QQ * this.unitBytes,
          usedBytes: WQ * this.unitBytes,
          twinBytes: XQ,
          allocatedBytes: wQ
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: QQ,
          maxStorageBufferBindingSize: WQ
        } = this.device.limits;
        let XQ = Math.floor(Math.min(67108864, QQ) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (XQ = Math.min(XQ, Math.floor(WQ / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (XQ = Math.min(XQ, Math.floor(WQ / this.twinUnitBytes))), XQ
      }
    }
    const hs = 16383;

    function is(QQ, WQ, XQ, wQ, qQ) {
      let TQ = 0;
      for (let zQ = XQ; zQ < wQ; zQ += hs) QQ.drawIndexed(6 * Math.min(hs, wQ - zQ), 1, 0, WQ + 4 * zQ, qQ), TQ++;
      return TQ
    }
    class cs {
      constructor(QQ, WQ) {
        this.recordsGroup = WQ, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const XQ = NW.c.strideWithoutAtlas;
        this.vertexArena = new ls(QQ, XQ, GPUBufferUsage.VERTEX, `terrain-vertices-${XQ}`), this.quadArena = new ls(QQ, Us.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const wQ = (0, ZW.c)(new Uint16Array(98298), hs);
        this.quadPattern = QQ.createBuffer({
          label: "terrain-quad-pattern",
          size: wQ.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), QQ.queue.writeBuffer(this.quadPattern, 0, wQ)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(QQ, WQ) {
        const XQ = WQ.packedVertices,
          wQ = XQ ? this.quadArena.allocate(QQ.faceCount) : this.vertexArena.allocate(QQ.vertexCount);
        if (!wQ) return !1;
        QQ.vertices = wQ;
        const qQ = XQ ? new Uint8Array(XQ.buffer, XQ.byteOffset, XQ.byteLength) : new Uint8Array(WQ.vertices);
        return wQ.page.write(wQ, qQ), !0
      }
      setLight(QQ, WQ) {
        const {
          vertices: XQ
        } = QQ;
        XQ && 0 !== WQ.length && XQ.page.live && (WQ.length < QQ.vertexCount ? XQ.page.arena.warnOnce("shortLight", `a part's ${WQ.length} light values are fewer than its ${QQ.vertexCount} vertices, so its light is left as it was`) : (XQ.page.writeLight(XQ, WQ), QQ.lit = !0))
      }
      lightFullSky(QQ, WQ) {
        this.fullSky.length < WQ && (this.fullSky = new Uint16Array(Math.max(WQ, 4096)).fill(ds.g));
        for (const XQ of QQ) {
          const QQ = XQ.vertices;
          QQ.page.live && (QQ.page.writeLight(QQ, this.fullSky), XQ.lit = !0)
        }
      }
      backed(QQ) {
        const {
          vertices: WQ
        } = QQ;
        return !!WQ && WQ.page.holds(WQ)
      }
      lost(QQ) {
        const {
          vertices: WQ
        } = QQ;
        return !!WQ && WQ.page.lost(WQ)
      }
      release(QQ) {
        QQ.vertices && QQ.vertices.page.arena.free(QQ.vertices), QQ.vertices = null, QQ.lit = !1
      }
      setDrawing(QQ) {
        this.forgetBound()
      }
      draw(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WQ.faceCount;
        const TQ = WQ.vertices,
          zQ = TQ.page,
          sQ = XQ ? zQ.twin : null;
        if (!zQ.holds(TQ) || XQ && !sQ) return 0;
        const {
          verticesPerUnit: FQ
        } = zQ.arena;
        let PQ = TQ.start * FQ;
        this.boundPattern || (QQ.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const gQ = wQ + qQ;
        if (FQ > 1) return zQ.buffer === this.boundRecords && sQ === this.boundRecordsLight || (QQ.setBindGroup(1, this.recordsGroup(zQ.buffer, sQ)), this.boundRecords = zQ.buffer, this.boundRecordsLight = sQ), is(QQ, PQ, wQ, gQ, WQ.slot);
        zQ.buffer !== this.boundVertices && (QQ.setVertexBuffer(0, zQ.buffer), this.boundVertices = zQ.buffer), sQ && sQ !== this.boundLight && (QQ.setVertexBuffer(1, sQ), this.boundLight = sQ);
        const JQ = WQ.faceCount;
        return gQ <= JQ ? is(QQ, PQ, wQ, gQ, WQ.slot) : is(QQ, PQ, wQ, JQ, WQ.slot) + is(QQ, PQ, Math.max(wQ, JQ) - JQ, gQ - JQ, WQ.slot)
      }
      get buffersAwaitingVerdict() {
        let QQ = 0;
        for (const WQ of this.arenas()) QQ += WQ.awaitingVerdict;
        return QQ
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class As {
      constructor(QQ, WQ, XQ, wQ) {
        this.device = QQ, this.splitBefore = WQ, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = QQ.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const qQ = QQ.createShaderModule({
          label: "scene-depth-copy",
          code: (TQ = XQ._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${TQ?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var TQ;
        QQ.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: qQ,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: qQ,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((QQ => {
          this.pipeline = QQ, this.building = !1
        }), (QQ => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", QQ)
        })), XQ._executeWithTransmission = () => this.execute(XQ, wQ)
      }
      get compiling() {
        return this.building
      }
      setWanted(QQ) {
        this.wanted = QQ
      }
      setPlanes(QQ, WQ) {
        QQ === this.near && WQ === this.far || (this.near = QQ, this.far = WQ, this.unproject[0] = QQ / (WQ - QQ), this.unproject[1] = WQ * QQ / (WQ - QQ), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.copy) || void 0 === WQ ? void 0 : WQ.view) && void 0 !== QQ ? QQ : null
      }
      execute(QQ, WQ) {
        var XQ;
        null === (XQ = this.retired) || void 0 === XQ || XQ.destroy(), this.retired = null;
        const wQ = bW(WQ),
          qQ = QQ._transparentBindings,
          TQ = this.wanted && this.pipeline ? this.splitIndex(qQ) : -1,
          zQ = QQ._colorAttachment,
          sQ = zQ.resolveTarget;
        TQ >= 0 && (zQ.resolveTarget = void 0, Xs(QQ, !0));
        let FQ = wQ.beginRenderPass(QQ._renderPassDescriptor);
        FQ.setBindGroup(0, QQ._sceneBG);
        let PQ = this.drawList(FQ, WQ, QQ._opaqueBindings, 0, QQ._opaqueBindings.length);
        if (PQ += this.drawList(FQ, WQ, QQ._directBindings, 0, QQ._directBindings.length), PQ += this.drawList(FQ, WQ, qQ, 0, TQ >= 0 ? TQ : qQ.length), FQ.end(), TQ < 0) return PQ;
        Xs(QQ);
        const gQ = QQ._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: JQ,
            stencilLoadOp: rQ
          } = gQ,
          IQ = zQ.loadOp;
        zQ.resolveTarget = sQ;
        try {
          this.copyDepth(wQ, QQ), zQ.loadOp = "load", gQ.depthLoadOp = "load", rQ && (gQ.stencilLoadOp = "load"), FQ = wQ.beginRenderPass(QQ._renderPassDescriptor), FQ.setBindGroup(0, QQ._sceneBG), PQ += this.drawList(FQ, WQ, qQ, TQ, qQ.length), FQ.end()
        } finally {
          zQ.loadOp = IQ, gQ.depthLoadOp = JQ, gQ.stencilLoadOp = rQ
        }
        return PQ
      }
      splitIndex(QQ) {
        for (let WQ = 0; WQ < QQ.length; WQ++)
          if (QQ[WQ].renderable === this.splitBefore) return WQ;
        return -1
      }
      drawList(QQ, WQ, XQ, wQ, qQ) {
        let TQ = null,
          zQ = 0;
        for (let sQ = wQ; sQ < qQ; sQ++) {
          const wQ = XQ[sQ],
            qQ = wQ.renderable.mesh;
          qQ && !1 === qQ.visible || (wQ.pipeline !== TQ && (QQ.setPipeline(wQ.pipeline), TQ = wQ.pipeline), zQ += wQ.draw(QQ, WQ))
        }
        return zQ
      }
      copyDepth(QQ, WQ) {
        var XQ, wQ;
        const qQ = (null !== (XQ = WQ._config.depth) && void 0 !== XQ ? XQ : WQ._config.rt)._depthTexture,
          TQ = (null === (wQ = this.copy) || void 0 === wQ ? void 0 : wQ.source) === qQ ? this.copy : this.remakeCopy(qQ),
          zQ = QQ.beginRenderPass(TQ.pass);
        zQ.setPipeline(this.pipeline), zQ.setBindGroup(0, TQ.bindGroup), zQ.draw(3), zQ.end()
      }
      remakeCopy(QQ) {
        var WQ, XQ;
        this.retired = null !== (WQ = null === (XQ = this.copy) || void 0 === XQ ? void 0 : XQ.texture) && void 0 !== WQ ? WQ : null;
        const wQ = this.device.createTexture({
            label: "scene-depth",
            size: [QQ.width, QQ.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          qQ = wQ.createView(),
          TQ = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: QQ.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          zQ = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: qQ,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: QQ,
          texture: wQ,
          view: qQ,
          bindGroup: TQ,
          pass: zQ
        }, this.copy
      }
    }
    const Rs = "rgba8unorm";

    function Es(QQ) {
      return QQ ? 15 : 1
    }
    class Cs {
      constructor(QQ, WQ, XQ, wQ) {
        this.device = QQ, this.terrain = wQ, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = WQ._targetSignature._sampleCount > 1, this.cameraBuffer = QQ.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = QQ.createBindGroupLayout({
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
        const qQ = QQ.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = QQ.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: qQ,
          entries: []
        });
        const TQ = QQ.createShaderModule({
          label: "sun-shadow-mask",
          code: (zQ = this.edge, `${(0,OW.z)()}${sw({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${zQ?OX:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Es(zQ)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${zQ?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var zQ;
        QQ.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: QQ.createPipelineLayout({
            bindGroupLayouts: [this.layout, qQ, qQ, nT(QQ, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: TQ,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: TQ,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((QQ => {
          this.pipeline = QQ, this.building = !1
        }), (QQ => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", QQ)
        }));
        const sQ = WQ._executeWithTransmission;
        WQ._executeWithTransmission = QQ => this.execute(WQ, XQ, (() => sQ ? sQ(QQ) : function(QQ, WQ) {
          const XQ = bW(WQ).beginRenderPass(QQ._renderPassDescriptor);
          XQ.setBindGroup(0, QQ._sceneBG);
          let wQ = us(XQ, WQ, QQ._opaqueBindings);
          return wQ += us(XQ, WQ, QQ._directBindings), wQ += us(XQ, WQ, QQ._transparentBindings), XQ.end(), wQ
        }(WQ, XQ)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.targets) || void 0 === WQ ? void 0 : WQ.maskView) && void 0 !== QQ ? QQ : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(QQ) {
        ! function(QQ, WQ) {
          const XQ = QQ.worldMatrix,
            wQ = QQ.projectionMatrix,
            qQ = 1 / wQ[0],
            TQ = 1 / wQ[5],
            zQ = QQ.far * QQ.near / (QQ.far - QQ.near);
          WQ[0] = QQ.eye[0], WQ[1] = QQ.eye[1], WQ[2] = QQ.eye[2], WQ[3] = 2 ** -23 / zQ, WQ[4] = XQ[0] * qQ, WQ[5] = XQ[1] * qQ, WQ[6] = XQ[2] * qQ, WQ[7] = zQ, WQ[8] = XQ[4] * TQ, WQ[9] = XQ[5] * TQ, WQ[10] = XQ[6] * TQ, WQ[11] = QQ.near / (QQ.far - QQ.near), WQ[12] = XQ[8], WQ[13] = XQ[9], WQ[14] = XQ[10], WQ[15] = 0
        }(QQ, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(QQ, WQ, XQ) {
        if (this.retire(), !this.terrain.readsMask) return XQ();
        const wQ = this.targetsFor(QQ),
          qQ = bW(WQ),
          TQ = QQ._renderPassDescriptor.depthStencilAttachment;
        this.edge || (wQ.prepass.depthStencilAttachment.view = TQ.view);
        const zQ = this.terrain.drawPrepass(qQ, wQ.prepass, QQ._sceneBG);
        if (0 === zQ) return XQ();
        if (this.trace(qQ, wQ), this.edge) return zQ + 1 + XQ();
        const {
          depthLoadOp: sQ,
          stencilLoadOp: FQ
        } = TQ;
        TQ.depthLoadOp = "load", FQ && (TQ.stencilLoadOp = "load");
        try {
          return zQ + 1 + XQ()
        } finally {
          TQ.depthLoadOp = sQ, TQ.stencilLoadOp = FQ
        }
      }
      trace(QQ, WQ) {
        const XQ = this.terrain.sunShadowGroup(),
          wQ = QQ.beginRenderPass(WQ.trace);
        this.pipeline && XQ && (wQ.setPipeline(this.pipeline), wQ.setBindGroup(0, WQ.bindGroup), wQ.setBindGroup(1, this.empty), wQ.setBindGroup(2, this.empty), wQ.setBindGroup(3, XQ), wQ.draw(3)), wQ.end()
      }
      retire() {
        const QQ = this.retired;
        var WQ;
        QQ && (QQ.mask.destroy(), QQ.normals.destroy(), null === (WQ = QQ.depth) || void 0 === WQ || WQ.destroy(), this.retired = null)
      }
      targetsFor(QQ) {
        var WQ, XQ;
        const wQ = (null !== (WQ = QQ._config.depth) && void 0 !== WQ ? WQ : QQ._config.rt)._depthTexture;
        return (null === (XQ = this.targets) || void 0 === XQ ? void 0 : XQ.source) === wQ ? this.targets : this.remake(QQ, wQ)
      }
      remake(QQ, WQ) {
        var XQ;
        this.retired = this.targets;
        const wQ = [WQ.width, WQ.height],
          qQ = this.device.createTexture({
            label: "sun-shadow-mask",
            size: wQ,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          TQ = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: wQ,
            format: Rs,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          zQ = null !== (XQ = QQ._targetSignature._depthStencilFormat) && void 0 !== XQ ? XQ : WQ.format,
          sQ = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: wQ,
            format: zQ,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          FQ = QQ._renderPassDescriptor.depthStencilAttachment,
          PQ = zQ.includes("stencil"),
          gQ = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: TQ.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: sQ ? sQ.createView() : FQ.view,
              depthClearValue: FQ.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...PQ ? {
                stencilClearValue: FQ.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          JQ = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== sQ && void 0 !== sQ ? sQ : WQ).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: TQ.createView()
            }]
          }),
          rQ = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: qQ.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Es(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: WQ,
          mask: qQ,
          maskView: qQ.createView(),
          normals: TQ,
          depth: sQ,
          bindGroup: JQ,
          prepass: gQ,
          trace: rQ
        }, this.targets
      }
    }

    function us(QQ, WQ, XQ) {
      let wQ = null,
        qQ = 0;
      for (const TQ of XQ) {
        const XQ = TQ.renderable.mesh;
        XQ && !1 === XQ.visible || (TQ.pipeline !== wQ && (QQ.setPipeline(TQ.pipeline), wQ = TQ.pipeline), qQ += TQ.draw(QQ, WQ))
      }
      return qQ
    }
    const Ls = 6e4,
      ks = {
        status: "ok"
      },
      fs = {
        status: "skipped"
      };
    async function Ss(QQ, WQ) {
      const {
        isCancelled: XQ
      } = QQ;
      if (XQ()) return {
        status: "fX"
      };
      const {
        target: wQ
      } = WQ;
      if (!wQ) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const qQ = [],
        TQ = Promise.all(Array.from(new Set(QQ.materials), (async XQ => {
          qQ.push(await async function(QQ, WQ, XQ, wQ) {
            const qQ = {
              lighting: QQ.lighting,
              dirLightCount: Math.min(QQ.dirLightCount, 4),
              xI: QQ.runtime
            };
            try {
              const TQ = WQ.material(wQ);
              return TQ && Rw(WQ.programKey(TQ, !1, qQ)) ? (await TQ.ready, QQ.isCancelled() ? ks : TQ.bindGroupLayout ? await async function(QQ, WQ, XQ, wQ) {
                const {
                  device: qQ
                } = QQ;
                let TQ, zQ;
                qQ.pushErrorScope("validation");
                try {
                  TQ = QQ.pipelineBuild(WQ, XQ, wQ)
                } finally {
                  zQ = qQ.popErrorScope().catch((() => null))
                }
                const [sQ, FQ] = await Promise.all([zQ, TQ.built.then((() => null), (QQ => null !== QQ && void 0 !== QQ ? QQ : new Error("pipeline failed")))]);
                if (!sQ && !FQ) return ks;
                const PQ = await ts(TQ.module),
                  gQ = PQ.length > 0 ? PQ.map((QQ => `${TQ.name} ${QQ.lineNum}:${QQ.linePos}: ${QQ.message}`)).join("\n") : `${TQ.name}: ${os(null!==FQ&&void 0!==FQ?FQ:sQ)}`;
                return {
                  status: "failed",
                  material: WQ.model.name,
                  message: gQ
                }
              }(WQ, TQ, WQ.programKey(TQ, "none" !== TQ.texture, qQ), XQ): (console.warn(`Shader pack: skipped the compile check for "${wQ.name}", whose textures failed to load`), fs)) : ks
            } catch (TQ) {
              return {
                status: "failed",
                material: wQ.name,
                message: os(TQ)
              }
            }
          }(QQ, WQ, wQ, XQ))
        }))),
        zQ = function(QQ, WQ) {
          let XQ, wQ, qQ = !1;
          const TQ = new Promise((TQ => {
            var zQ;
            XQ = setTimeout((() => {
              TQ("timeout")
            }), null !== (zQ = WQ.timeoutMs) && void 0 !== zQ ? zQ : Ls), wQ = setInterval((() => {
              WQ.isCancelled() && TQ("fX")
            }), 50), QQ.lost.then((() => {
              qQ = !0, TQ("lost")
            }))
          }));
          return {
            signal: TQ,
            lost: () => qQ,
            dispose: () => {
              clearTimeout(XQ), clearInterval(wQ)
            }
          }
        }(WQ.device, QQ);
      let sQ;
      try {
        sQ = await Promise.race([TQ.then((() => "done")), zQ.signal])
      } finally {
        zQ.dispose()
      }
      if ("fX" === sQ || XQ()) return {
        status: "fX"
      };
      const FQ = qQ.find((QQ => "failed" === QQ.status));
      return FQ && "lost" !== sQ && !zQ.lost() && await new Promise((QQ => {
        setTimeout(QQ, 0)
      })), "lost" === sQ || zQ.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : FQ ? {
        status: "failed",
        failure: {
          material: FQ.material,
          message: FQ.message
        }
      } : "timeout" === sQ ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(PQ=QQ.timeoutMs)&&void 0!==PQ?PQ:Ls)/1e3} s`), {
        status: "skipped"
      }) : qQ.some((QQ => "skipped" === QQ.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var PQ
    }
    async function ts(QQ) {
      if (!QQ) return [];
      try {
        return (await QQ.getCompilationInfo()).messages.filter((QQ => "error" === QQ.type))
      } catch {
        return []
      }
    }

    function os(QQ) {
      var WQ;
      return null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.message) && void 0 !== WQ ? WQ : String(QQ)
    }

    function es(QQ, WQ, XQ, wQ, qQ) {
      Rw(WQ) ? ts(wQ).then((WQ => {
        const [wQ] = WQ;
        gW(QQ, "terrain", XQ, qQ, wQ ? `${wQ.lineNum}:${wQ.linePos} error: ${wQ.message}` : null)
      })) : gW(QQ, "terrain", XQ, qQ)
    }
    var ns = XQ(37816),
      xs = XQ(37829),
      Ys = XQ(37837),
      Ns = XQ(3091);

    function Zs(QQ, WQ, XQ, wQ, qQ) {
      const TQ = Math.hypot(XQ[0], XQ[1], XQ[2]);
      if (!(TQ > 0)) return;
      const zQ = [XQ[0] / TQ, XQ[1] / TQ, XQ[2] / TQ],
        sQ = [Math.floor(WQ[0]), Math.floor(WQ[1]), Math.floor(WQ[2])],
        FQ = [0, 0, 0],
        PQ = [1 / 0, 1 / 0, 1 / 0],
        gQ = [1 / 0, 1 / 0, 1 / 0];
      for (let IQ = 0; IQ < 3; IQ++) zQ[IQ] > 0 ? (FQ[IQ] = 1, PQ[IQ] = (sQ[IQ] + 1 - WQ[IQ]) / zQ[IQ], gQ[IQ] = 1 / zQ[IQ]) : zQ[IQ] < 0 && (FQ[IQ] = -1, PQ[IQ] = (sQ[IQ] - WQ[IQ]) / zQ[IQ], gQ[IQ] = -1 / zQ[IQ]);
      const {
        Ij: JQ
      } = QQ;
      let rQ = QQ.ZY(sQ[0], sQ[1], sQ[2]);
      for (;;) {
        const WQ = PQ[0] < PQ[1] ? PQ[0] < PQ[2] ? 0 : 2 : PQ[1] < PQ[2] ? 1 : 2;
        if (PQ[WQ] > wQ) return;
        const XQ = FQ[WQ] > 0 ? sQ[WQ] + 1 : sQ[WQ];
        sQ[WQ] += FQ[WQ], PQ[WQ] += gQ[WQ];
        const TQ = QQ.ZY(sQ[0], sQ[1], sQ[2]),
          zQ = TQ !== rQ && !(QQ.opaque[rQ] && QQ.opaque[TQ]);
        if (zQ) {
          const wQ = [sQ[0], sQ[1], sQ[2]];
          wQ[WQ] = XQ;
          const TQ = Math.floor(wQ[0] / JQ),
            zQ = Math.floor(wQ[1] / JQ),
            FQ = Math.floor(wQ[2] / JQ);
          !QQ.isDrawn(TQ, zQ, FQ) && QQ.hasParts(TQ, zQ, FQ) && qQ.add(`${TQ},${zQ},${FQ}`)
        }
        if (zQ && QQ.occluders[TQ]) return;
        rQ = TQ
      }
    }

    function Os(QQ, WQ) {
      return QQ.group - WQ.group || QQ.nearest - WQ.nearest
    }
    class Ks {
      constructor(QQ, WQ) {
        this.device = QQ, this.cV = WQ, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var QQ;
        const WQ = null !== (QQ = this.free.pop()) && void 0 !== QQ ? QQ : this.next++;
        if (8 * WQ >= this.data.length) {
          const QQ = new Float32Array(2 * this.data.length);
          QQ.set(this.data), this.data = QQ, this.words = new Uint32Array(QQ.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.cV()
        }
        return WQ
      }
      release(QQ) {
        this.free.push(QQ)
      }
      set(QQ, WQ, XQ, wQ, qQ) {
        const TQ = 8 * QQ + ew;
        this.data[TQ] = WQ, this.data[TQ + 1] = XQ, this.data[TQ + 2] = wQ, this.setVisibility(QQ, qQ)
      }
      setVisibility(QQ, WQ) {
        this.data[8 * QQ + nw] = WQ, this.markDirty(QQ, QQ)
      }
      setFaces(QQ, WQ, XQ) {
        const wQ = 8 * QQ;
        this.words[wQ + xw] = WQ, this.words[wQ + Yw] = XQ, this.markDirty(QQ, QQ)
      }
      markDirty(QQ, WQ) {
        this.dirtyMin = Math.min(this.dirtyMin, QQ), this.dirtyMax = Math.max(this.dirtyMax, WQ)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const ms = ow,
      Ms = !0;
    const QF = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: ms.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      WF = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class XF {
      constructor(QQ) {
        this.device = QQ, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Cw), this.dirLightUniforms = this.frameUniforms.subarray(Ew.dirLights, Ew.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, AW.e)(), this.faceGroups = !0, this.visibilityGraph = Ms, this.visCull = Ms, this.visCheck = !1, this.visCullMinDistance = Ys.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new zF, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.xI = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new cs(QQ, ((QQ, WQ) => this.recordsGroup(QQ, WQ))), this.slots = new Ks(QQ, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = vW(QQ), this.frameLayout = QQ.createBindGroupLayout({
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
        }), this.frameBuffer = QQ.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = QQ.createSampler({
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
          bind: (QQ, WQ) => this.createBinding(this.opaqueRenderable, WQ, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (QQ, WQ) => this.createBinding(this.transparentRenderable, WQ, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(QQ, WQ) {
        this.sceneDepth = new As(this.device, this.transparentRenderable, QQ, WQ)
      }
      createFrameBindGroup() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== QQ && void 0 !== QQ ? QQ : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== WQ && void 0 !== WQ ? WQ : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(QQ, WQ) {
        const XQ = null !== WQ && void 0 !== WQ ? WQ : QQ;
        let wQ = this.recordsGroups.get(XQ);
        return wQ || (wQ = this.createFrameBindGroup(QQ, WQ), this.recordsGroups.set(XQ, wQ)), wQ
      }
      setChunkMesh(QQ, WQ, XQ) {
        var wQ;
        let qQ = this.chunks.get(QQ);
        qQ ? this.geometry.release(qQ) : (qQ = {
          mesh: QQ,
          slot: this.slots.allocate(),
          origin: [XQ[0], XQ[1], XQ[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: QQ.visibility,
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
        }, this.chunks.set(QQ, qQ), this.writeSlot(qQ)), qQ.material = QQ.material ? this.materialFor(QQ.material) : null, qQ.packed = !!WQ.packedVertices, qQ.vertexCount = (0, Us.h)(WQ), qQ.faceCount = qQ.vertexCount / 4;
        const TQ = null !== (wQ = WQ.faceGroups) && void 0 !== wQ ? wQ : null;
        if (qQ.faceGroups = TQ, TQ) {
          const QQ = ns.o;
          qQ.planePX = TQ[QQ], qQ.planeNX = TQ[QQ + 1], qQ.planePY = TQ[QQ + 2], qQ.planeNY = TQ[QQ + 3], qQ.planePZ = TQ[QQ + 4], qQ.planeNZ = TQ[QQ + 5]
        }
        this.drawWhole(qQ), 0 !== qQ.faceCount && (this.geometry.set(qQ, WQ) ? (qQ.packed && this.slots.setFaces(qQ.slot, qQ.vertices.start + qQ.faceCount, qQ.faceCount), WQ.Qj && this.setChunkMeshLight(QQ, WQ.Qj)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${qQ.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(QQ, WQ) {
        const XQ = this.chunks.get(QQ);
        XQ && this.geometry.setLight(XQ, WQ)
      }
      drawStats() {
        let QQ = this.transparent.length;
        for (const WQ of this.opaqueBatches) QQ += WQ.meshes.length;
        return {
          drawn: QQ,
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
      removeChunkMesh(QQ) {
        const WQ = this.chunks.get(QQ);
        WQ && (this.geometry.release(WQ), this.slots.release(WQ.slot), this.chunks.delete(QQ))
      }
      remeshLost(QQ, WQ) {
        this.geometry.release(WQ), WQ.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** WQ.lostRemeshes++);
        const XQ = QQ.nJ,
          [wQ, qQ, TQ] = XQ.IwQ(WQ.origin[0], WQ.origin[1], WQ.origin[2]),
          zQ = XQ.PB.gB(wQ, qQ, TQ);
        zQ && (zQ.sB = !0, zQ.rB = !0, XQ.FB(zQ, !1))
      }
      chooseFaceRanges(QQ, WQ, XQ) {
        const wQ = this.faceRanges;
        QQ.faceMask = XQ, QQ.rangeCount = (0, xs.r)(WQ, XQ, wQ), QQ.first0 = wQ[0], QQ.count0 = wQ[1], QQ.first1 = wQ[2], QQ.count1 = wQ[3]
      }
      drawWhole(QQ) {
        QQ.faceMask = -1, QQ.faceEpoch = -1, QQ.rangeCount = 1, QQ.first0 = 0, QQ.count0 = QQ.faceCount
      }
      writeSlot(QQ) {
        const [WQ, XQ, wQ] = this.originOffset;
        this.slots.set(QQ.slot, QQ.origin[0] - WQ, QQ.origin[1] - XQ, QQ.origin[2] - wQ, QQ.visibility)
      }
      materialFor(QQ) {
        const WQ = this.materials.get(QQ);
        if (WQ) return WQ;
        const XQ = vs(QQ);
        if (!XQ) return this.warnOnce(`material:${QQ.name}`, `Lite terrain cannot draw material "${QQ.name}"; its chunks are skipped.`), null;
        const {
          model: wQ,
          atlas: qQ,
          texture: TQ,
          animated: zQ,
          uniformData: sQ
        } = XQ, FQ = {
          id: this.materials.size,
          model: wQ,
          texture: TQ,
          animated: zQ,
          uniformData: sQ,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${QQ.name}`,
            size: sQ.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: XQ.liquid,
          customRenderMat: XQ.customRenderMat,
          atlasCount: 0,
          Z6: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(QQ, FQ), this.device.queue.writeBuffer(FQ.uniformBuffer, 0, sQ), FQ.ready = this.createMaterialBindGroup(FQ, qQ).catch((WQ => {
          console.error(`Lite terrain failed to load the textures of material "${QQ.name}"`, WQ)
        })), FQ
      }
      materialLayout(QQ) {
        const WQ = function(QQ) {
            const WQ = ["uniforms"];
            if ("atlas" === QQ.texture) {
              QQ.animated && WQ.push("animData"), WQ.push("sampler");
              for (let XQ = 0; XQ < QQ.atlasCount; XQ++) WQ.push("textureArray")
            } else "single" === QQ.texture && WQ.push("sampler", "texture");
            return WQ
          }(QQ),
          XQ = WQ.join(",");
        let wQ = this.materialLayouts.get(XQ);
        if (!wQ) {
          const QQ = GPUShaderStage.FRAGMENT;
          wQ = this.device.createBindGroupLayout({
            label: `terrain-material-${XQ}`,
            entries: WQ.map(((WQ, XQ) => {
              switch (WQ) {
                case "uniforms":
                  return {
                    binding: XQ, visibility: GPUShaderStage.VERTEX | QQ, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: XQ, visibility: GPUShaderStage.VERTEX | QQ, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: XQ, visibility: QQ, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: XQ, visibility: QQ, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: XQ, visibility: QQ, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(XQ, wQ)
        }
        return wQ
      }
      async createMaterialBindGroup(QQ, WQ) {
        const XQ = [{
          buffer: QQ.uniformBuffer
        }];
        if (WQ) {
          const wQ = await WW(this.device, WQ.sources);
          QQ.atlasCount = wQ.length, QQ.Z6 = wQ[0].layerWidth, QQ.atlasLayers = wQ[0].layers, WQ.animDataPerTex && XQ.push({
            buffer: NQ(this.device, Float32Array.from(WQ.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), XQ.push(this.sampler);
          for (const QQ of wQ) XQ.push(QQ.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === QQ.texture) {
          const {
            url: WQ
          } = QQ.model.diffuseTexture.source, {
            pixels: wQ,
            width: qQ,
            height: TQ
          } = await QW(WQ);
          XQ.push(this.sampler), XQ.push(OQ(this.device, wQ, qQ, TQ, 1, `terrain-${WQ}`).createView({
            dimension: "2d"
          }))
        }
        const wQ = this.materialLayout(this.programKey(QQ, !1));
        QQ.bindGroupLayout = wQ, QQ.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${QQ.model.name}`,
          layout: wQ,
          entries: XQ.map(((QQ, WQ) => ({
            binding: WQ,
            resource: QQ
          })))
        })
      }
      programKey(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wQ = XQ ? XQ.lighting : this.lighting,
          qQ = XQ ? XQ.xI : this.xI,
          TQ = {
            texture: QQ.texture,
            atlasCount: QQ.atlasCount,
            Z6: QQ.Z6,
            atlasLayers: QQ.atlasLayers,
            animated: QQ.animated,
            alphaTest: QQ.model.transparencyMode === HQ.n.alphaTest,
            lighting: wQ,
            dirLightCount: XQ ? XQ.dirLightCount : this.dirLightCount,
            packed: WQ
          };
        if (!qQ) return TQ;
        const zQ = this.shaderPackFields(QQ, qQ),
          sQ = "atlas" === QQ.texture && QQ.model.transparencyMode === HQ.n.opaque && lw(zQ.packVariant);
        return {
          ...TQ,
          ...zQ,
          alphaTest: TQ.alphaTest || sQ
        }
      }
      shaderPackFields(QQ, WQ) {
        const XQ = this.packVariant(QQ, WQ);
        return void 0 === XQ ? Hw : {
          packVariant: XQ,
          liquid: QQ.liquid
        }
      }
      packVariant(QQ, WQ) {
        return QQ.customRenderMat ? void 0 : function(QQ, WQ) {
          const XQ = QQ ? QQ.defineFor(WQ ? "liquid" : "terrain") : 0;
          return 0 === XQ ? void 0 : XQ
        }(WQ, QQ.liquid)
      }
      isBlended(QQ) {
        return QQ.model.transparencyMode === HQ.n.alphaBlend
      }
      shaderModule(QQ, WQ) {
        let XQ = this.modules.get(QQ);
        return XQ || (XQ = this.device.createShaderModule({
          label: WQ,
          code: QQ
        }), this.modules.set(QQ, XQ)), XQ
      }
      pipelineFor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!QQ.bindGroupLayout) return null;
        if (!wQ) return this.pipelineOf(QQ, WQ, XQ);
        const qQ = this.pipelineIdNow(QQ, WQ, !0, XQ),
          TQ = this.pipelines.get(qQ);
        if (TQ) return TQ;
        const zQ = this.pipelineOf(QQ, WQ, XQ);
        return zQ && void 0 === TQ && this.startPipeline(qQ, QQ, {
          ...this.programKey(QQ, WQ),
          resting: wQ
        }, XQ), zQ
      }
      pipelineOf(QQ, WQ, XQ) {
        const wQ = this.pipelineIdNow(QQ, WQ, !1, XQ),
          qQ = this.pipelines.get(wQ);
        return void 0 !== qQ ? qQ : (this.startPipeline(wQ, QQ, this.programKey(QQ, WQ), XQ), null)
      }
      pipelineIdNow(QQ, WQ, XQ, wQ) {
        const {
          lighting: qQ,
          dirLightCount: TQ
        } = this, {
          transparencyMode: zQ,
          backFaceCulling: sQ
        } = QQ.model, FQ = this.packVariant(QQ, this.xI), PQ = (WQ ? 2 : 0) + (XQ ? 1 : 0), gQ = QQ.pipelineIds[PQ];
        if (null !== gQ && gQ.lighting === qQ && gQ.dirLightCount === TQ && gQ.packVariant === FQ && gQ.transparencyMode === zQ && gQ.cull === sQ && gQ.atlasCount === QQ.atlasCount && gQ.Z6 === QQ.Z6 && gQ.atlasLayers === QQ.atlasLayers && gQ.colorFormat === wQ._colorFormat && gQ.depthStencilFormat === wQ._depthStencilFormat && gQ.sampleCount === wQ._sampleCount) return gQ.id;
        const JQ = this.programKey(QQ, WQ),
          rQ = this.pipelineId(QQ, XQ ? {
            ...JQ,
            resting: XQ
          } : JQ, wQ);
        return QQ.pipelineIds[PQ] = {
          id: rQ,
          lighting: qQ,
          dirLightCount: TQ,
          packVariant: FQ,
          transparencyMode: zQ,
          cull: sQ,
          atlasCount: QQ.atlasCount,
          Z6: QQ.Z6,
          atlasLayers: QQ.atlasLayers,
          colorFormat: wQ._colorFormat,
          depthStencilFormat: wQ._depthStencilFormat,
          sampleCount: wQ._sampleCount
        }, rQ
      }
      pipelineId(QQ, WQ, XQ) {
        return wF(WQ, this.isBlended(QQ), QQ.model.backFaceCulling, XQ)
      }
      pipelineBuild(QQ, WQ, XQ) {
        var wQ;
        const qQ = this.pipelineId(QQ, WQ, XQ);
        return null !== (wQ = this.builds.get(qQ)) && void 0 !== wQ ? wQ : this.startPipeline(qQ, QQ, WQ, XQ)
      }
      startPipeline(QQ, WQ, XQ, wQ) {
        var qQ;
        this.pipelines.set(QQ, null);
        const TQ = Mw(XQ),
          zQ = this.isBlended(WQ),
          sQ = this.shadowMask && wQ._depthStencilFormat ? function(QQ, WQ, XQ, wQ) {
            if (void 0 === QQ.packVariant || QQ.liquid || WQ) return "none";
            const qQ = (0, KW.g)(QQ.packVariant);
            return null === qQ || void 0 === qQ || !qQ.sunShadow || !Tw(qQ, XQ) || qQ.discards || QQ.alphaTest && lw(QQ.packVariant) ? "none" : wQ ? "edge" : "plain"
          }(XQ, zQ, !!this.sunShadow, wQ._sampleCount > 1) : "none";
        let FQ;
        try {
          FQ = Qq(XQ, !!this.sunShadow, sQ)
        } catch (yQ) {
          if (!Rw(XQ)) throw yQ;
          return this.failedPackBuild(QQ, XQ, TQ, yQ)
        }
        const PQ = this.shaderModule(FQ, TQ),
          gQ = [];
        XQ.packed || (gQ.push(function(QQ, WQ) {
          const XQ = [{
            shaderLocation: ms.position,
            offset: NW.c.aX,
            format: "float32x3"
          }, {
            shaderLocation: ms.normal,
            offset: NW.c.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: ms.color,
            offset: NW.c.colorOffset,
            format: "unorm8x4"
          }];
          return QQ && XQ.push({
            shaderLocation: ms.uv,
            offset: NW.c.uvOffset,
            format: "float32x2"
          }), WQ && XQ.push({
            shaderLocation: ms.blockFlagWords,
            offset: NW.c.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: NW.c.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: XQ
          }
        }("none" !== XQ.texture, Rw(XQ))), XQ.lighting && gQ.push(QF));
        const JQ = WQ.model.backFaceCulling,
          rQ = {
            label: TQ,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, WQ.bindGroupLayout, ...NT(this.device, XQ, !!this.sunShadow, "none" !== sQ)]
            }),
            vertex: {
              module: PQ,
              entryPoint: "mainVertex",
              buffers: gQ
            },
            fragment: DW({
              module: PQ,
              entryPoint: "mainFragment"
            }, wQ, zQ ? WF : null),
            depthStencil: wQ._depthStencilFormat ? {
              format: wQ._depthStencilFormat,
              depthCompare: null !== (qQ = wQ._depthCompare) && void 0 !== qQ ? qQ : dW,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: wQ._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: JQ ? "back" : "none"
            }
          },
          IQ = XQ.resting ? 0 : 1;
        this.compiling += IQ;
        const jQ = "none" === sQ ? this.device.createRenderPipelineAsync(rQ) : this.startMaskPipelines(PQ, rQ, "edge" === sQ);
        jQ.then((WQ => {
          this.compiling -= IQ, this.pipelines.set(QQ, WQ)
        }), (QQ => {
          this.compiling -= IQ, console.error(`Lite terrain pipeline ${TQ} failed`, QQ), es(this.device, XQ, TQ, PQ, QQ)
        }));
        const BQ = {
          name: TQ,
          module: PQ,
          built: jQ
        };
        return this.builds.set(QQ, BQ), BQ
      }
      startMaskPipelines(QQ, WQ, XQ) {
        const wQ = WQ.depthStencil,
          qQ = this.device.createRenderPipelineAsync(XQ ? WQ : {
            ...WQ,
            depthStencil: {
              ...wQ,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          TQ = this.device.createRenderPipelineAsync({
            ...WQ,
            label: `${WQ.label}-prepass`,
            fragment: {
              module: QQ,
              entryPoint: "prepassFragment",
              targets: [{
                format: Rs
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([qQ, TQ]).then((QQ => {
          let [WQ, XQ] = QQ;
          return this.prepassOf.set(WQ, XQ), this.maskPipelines++, WQ
        }))
      }
      failedPackBuild(QQ, WQ, XQ, wQ) {
        console.error(`Lite terrain pipeline ${XQ} failed`, wQ), es(this.device, WQ, XQ, null, wQ);
        const qQ = Promise.reject(wQ);
        qQ.catch((() => {}));
        const TQ = {
          name: XQ,
          module: null,
          built: qQ
        };
        return this.builds.set(QQ, TQ), TQ
      }
      checkShaderPack(QQ) {
        return Ss(QQ, {
          device: this.device,
          target: this.target,
          material: QQ => this.materialFor(QQ),
          programKey: (QQ, WQ, XQ) => this.programKey(QQ, WQ, XQ),
          pipelineBuild: (QQ, WQ, XQ) => this.pipelineBuild(QQ, WQ, XQ)
        })
      }
      createBinding(QQ, WQ, XQ) {
        return this.target = WQ, {
          renderable: QQ,
          pipeline: hW(this.device, WQ),
          draw: QQ => {
            this.geometry.setDrawing(!0);
            try {
              return XQ ? this.drawTransparent(QQ, WQ) : this.drawOpaque(QQ, WQ)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(QQ, WQ) {
        var XQ, wQ, qQ, TQ;
        const {
          KJ: zQ
        } = QQ;
        this.lighting = QQ.HB;
        const sQ = (0, Gs.u)(WQ);
        this.dirLightCount = Math.min(sQ, 4), this.xI = null !== (XQ = zQ.xI) && void 0 !== XQ ? XQ : null, sQ > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(QQ, WQ), this.animateMaterials(WQ.animTick);
        const FQ = zQ.jr,
          PQ = FQ[0] !== this.originOffset[0] || FQ[1] !== this.originOffset[1] || FQ[2] !== this.originOffset[2];
        PQ && (this.originOffset[0] = FQ[0], this.originOffset[1] = FQ[1], this.originOffset[2] = FQ[2]);
        const gQ = WQ.eye;
        this.eye[0] = gQ[0], this.eye[1] = gQ[1], this.eye[2] = gQ[2], this.writeShaderPackInputs();
        const JQ = WQ.projectionMatrix,
          rQ = 0 === JQ[15];
        let IQ = 0;
        (PQ || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: jQ
        } = this;
        iW(this.transparentRenderable._worldCenter, WQ, aW), this.resetBatches(rQ), this.transparent.length = 0, this.unlit.length = 0;
        const BQ = zQ.nJ.iQQ,
          yQ = BQ / 2 * Math.sqrt(3);
        let VQ = 0;
        const DQ = !!this.xI && aw(this.xI.defineFor("liquid"));
        let pQ = !1;
        const GQ = null !== (wQ = null === (qQ = zQ.RD) || void 0 === qQ ? void 0 : qQ.visibility) && void 0 !== wQ ? wQ : null,
          UQ = this.visCull && rQ && 0 === this.compiling && null !== GQ && zQ.nJ.CwQ[0] >= this.visCullMinDistance ? this.target : null,
          bQ = this.visPassable,
          vQ = this.visCandidates,
          dQ = this.visCandidateBatches;
        bQ.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let HQ = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let aQ = 0;
        const lQ = (QQ, XQ) => {
          if (!XQ) return this.transparent.push(QQ), void(aQ += 2 * QQ.faceCount);
          if (null !== QQ.faceGroups && XQ.faceCull) {
            if (0 === IQ && (IQ = (0, xs.e)(JQ, WQ.renderWidth, WQ.renderHeight), IQ !== this.faceFocalPx && (this.faceFocalPx = IQ, jQ = ++this.faceEpoch)), QQ.faceEpoch !== jQ) {
              QQ.faceEpoch = jQ;
              const WQ = Math.sqrt(QQ.distance) + yQ,
                XQ = (0, xs.k)(QQ.planePX, QQ.planeNX, QQ.planePY, QQ.planeNY, QQ.planePZ, QQ.planeNZ, this.eye[0] - (QQ.origin[0] - this.originOffset[0]), this.eye[1] - (QQ.origin[1] - this.originOffset[1]), this.eye[2] - (QQ.origin[2] - this.originOffset[2]), (0, xs.h)(WQ, IQ));
              XQ !== QQ.faceMask && this.chooseFaceRanges(QQ, QQ.faceGroups, XQ)
            }
            if (0 === QQ.rangeCount) return
          } else - 1 !== QQ.faceMask && this.drawWhole(QQ);
          XQ.meshes.push(QQ), aQ += 2 * ((QQ.rangeCount > 0 ? QQ.count0 : 0) + (QQ.rangeCount > 1 ? QQ.count1 : 0))
        };
        for (const iQ of this.chunks.values()) {
          PQ && this.writeSlot(iQ);
          const QQ = iQ.mesh.visibility;
          QQ !== iQ.visibility && (iQ.visibility = QQ, this.slots.setVisibility(iQ.slot, QQ));
          const {
            material: XQ
          } = iQ;
          this.geometry.lost(iQ) && performance.now() >= iQ.lostRetryAt && this.remeshLost(zQ, iQ);
          const wQ = !(null === XQ || void 0 === XQ || !XQ.bindGroup) && this.geometry.backed(iQ),
            qQ = wQ && this.lighting && !iQ.vertices.page.twin;
          if (UQ && (Number.isNaN(iQ.key) && (iQ.ci = Math.floor(iQ.origin[0] / BQ), iQ.cj = Math.floor(iQ.origin[1] / BQ), iQ.ck = Math.floor(iQ.origin[2] / BQ), iQ.key = (0, Ns.i)(iQ.ci, iQ.cj, iQ.ck)), (!wQ || QQ < 1 || qQ || !this.batchDraws(XQ, iQ.packed, UQ)) && this.visSeeThrough(iQ, UQ) && bQ.add(iQ.key)), !wQ) continue;
          qQ || (iQ.lostRemeshes = 0);
          const TQ = iQ.origin[0] - this.originOffset[0],
            sQ = iQ.origin[1] - this.originOffset[1],
            FQ = iQ.origin[2] - this.originOffset[2];
          if (!(0, zs.d)(WQ.frustum, TQ, sQ, FQ, BQ)) continue;
          const gQ = TQ + BQ / 2 - this.eye[0],
            JQ = sQ + BQ / 2 - this.eye[1],
            IQ = FQ + BQ / 2 - this.eye[2];
          if (iQ.distance = gQ * gQ + JQ * JQ + IQ * IQ, this.lighting && !iQ.lit && (VQ = Math.max(VQ, iQ.vertexCount), this.unlit.push(iQ)), qQ) continue;
          const jQ = this.isBlended(XQ) ? null : this.batchFor(XQ, iQ.packed, iQ.vertices.page, 1 === QQ, rQ);
          UQ ? (vQ[HQ] = iQ, dQ[HQ++] = jQ) : lQ(iQ, jQ)
        }
        const hQ = UQ ? this.sweepVisibility(QQ, WQ, GQ) : null;
        null === (TQ = (0, uT.p)(zQ)) || void 0 === TQ || TQ.update(WQ.frustum, this.originOffset, BQ, hQ);
        for (let iQ = 0; iQ < HQ; iQ++) {
          const QQ = vQ[iQ];
          !hQ || hQ.isDrawn(QQ.ci, QQ.cj, QQ.ck) ? lQ(QQ, dQ[iQ]) : (this.visCulledParts++, this.visCulledTriangles += 2 * QQ.faceCount)
        }
        for (const iQ of this.transparent) pQ ||= DQ && iQ.material.liquid && !iQ.material.customRenderMat;
        this.submittedTriangles = aQ, hQ && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(QQ, WQ, hQ)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(pQ) : pQ && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && VQ > 0 && this.geometry.lightFullSky(this.unlit, VQ);
        for (const iQ of this.opaqueBatches) this.chunkSorter.sort(iQ.meshes, 1) || iQ.meshes.sort(qF);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(TF)
      }
      sweepVisibility(QQ, WQ, XQ) {
        const {
          nJ: wQ
        } = QQ.KJ, qQ = wQ.iQQ, TQ = this.visPassable, zQ = this.eye[0] + this.originOffset[0], sQ = this.eye[1] + this.originOffset[1], FQ = this.eye[2] + this.originOffset[2];
        if (!XQ.eyeClear(zQ, sQ, FQ, WQ.near, WQ.projectionMatrix, wQ)) return null;
        const [PQ, gQ] = wQ.CwQ, JQ = XQ.update(zQ, sQ, FQ, qQ, PQ, gQ, TQ);
        return this.visSweeps = XQ.sweeps, JQ ? XQ : null
      }
      visSeeThrough(QQ, WQ) {
        const {
          material: XQ
        } = QQ;
        return (!XQ || !this.isBlended(XQ)) && (QQ.mesh.visibility < 1 || !(null !== XQ && void 0 !== XQ && XQ.bindGroup) || QQ.faceCount > 0 && (!this.geometry.backed(QQ) || this.lighting && !QQ.vertices.page.twin) || !this.batchDraws(XQ, QQ.packed, WQ))
      }
      batchDraws(QQ, WQ, XQ) {
        var wQ;
        const qQ = WQ ? 2 : 0;
        if (QQ === this.visDrawsMaterial && function(QQ, WQ) {
            return 0 !== (QQ & 1 << WQ)
          }(this.visDrawsBits, qQ)) return 0 !== (this.visDrawsBits & 2 << qQ);
        let TQ = null !== (wQ = this.visBatchDraws.get(QQ)) && void 0 !== wQ ? wQ : 0;
        if (!(TQ & 1 << qQ)) {
          TQ |= 1 << qQ | (!!QQ.bindGroupLayout && this.canDraw(QQ, WQ) && !!this.pipelines.get(this.pipelineIdNow(QQ, WQ, !1, XQ)) ? 2 << qQ : 0), this.visBatchDraws.set(QQ, TQ)
        }
        return this.visDrawsMaterial = QQ, this.visDrawsBits = TQ, 0 !== (TQ & 2 << qQ)
      }
      runVisCheck(QQ, WQ, XQ) {
        const {
          KJ: wQ
        } = QQ, {
          nJ: qQ
        } = wQ, TQ = qQ.iQQ, zQ = new Set;
        for (const IQ of this.chunks.values()) zQ.add(IQ.key);
        const sQ = eq.Matrix.FromArray(WQ.viewProjectionMatrix).invert(),
          [FQ, PQ, gQ] = this.originOffset,
          JQ = new eq.vj,
          rQ = function(QQ, WQ, XQ, wQ) {
            const qQ = new Set;
            for (let TQ = 0; TQ < 27; TQ++)
              for (let zQ = 0; zQ < 48; zQ++) {
                const sQ = XQ((zQ + .5) / 48 * 2 - 1, (TQ + .5) / 27 * 2 - 1);
                Zs(QQ, WQ, [sQ[0] - WQ[0], sQ[1] - WQ[1], sQ[2] - WQ[2]], wQ, qQ)
              }
            return qQ
          }({
            ZY: (QQ, WQ, XQ) => qQ.ZY(QQ, WQ, XQ),
            occluders: XQ.occluders,
            opaque: XQ.opaque,
            Ij: TQ,
            isDrawn: (QQ, WQ, wQ) => XQ.isDrawn(QQ, WQ, wQ),
            hasParts: (QQ, WQ, XQ) => zQ.has((0, Ns.i)(QQ, WQ, XQ))
          }, [this.eye[0] + FQ, this.eye[1] + PQ, this.eye[2] + gQ], ((QQ, WQ) => (eq.vj.TransformCoordinatesFromFloatsToRef(QQ, WQ, .5, sQ, JQ), [JQ.x + FQ, JQ.y + PQ, JQ.z + gQ])), (qQ.CwQ[0] + 1) * TQ);
        this.visViolations = rQ.size;
        for (const IQ of rQ) this.warnOnce(`vis:${IQ}`, `Lite terrain cave culling skipped chunk ${IQ}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var QQ;
        null !== (QQ = this.xI) && void 0 !== QQ && QQ.isRunning() && (this.shaderPackInputs ??= new ZT(this.device, this.xI.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.xI, this.eye, this.lighting))
      }
      bindShaderPackInputs(QQ, WQ, XQ) {
        var wQ, qQ, TQ, zQ;
        let sQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const FQ = this.packVariant(WQ, XQ);
        if (void 0 === FQ) return;
        this.shaderPackInputs || (this.shaderPackInputs = new ZT(this.device, XQ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(XQ, this.eye, this.lighting));
        const PQ = aw(FQ) ? null !== (wQ = null === (qQ = this.sceneDepth) || void 0 === qQ ? void 0 : qQ.view) && void 0 !== wQ ? wQ : this.standIn() : null,
          gQ = sQ ? null !== (TQ = null === (zQ = this.shadowMask) || void 0 === zQ ? void 0 : zQ.view) && void 0 !== TQ ? TQ : this.standIn() : null;
        this.shaderPackInputs.bind(QQ, PQ, YT(FQ, !!this.sunShadow), gQ)
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
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.shaderPackInputs) || void 0 === WQ ? void 0 : WQ.bindGroupFor(null, !0)) && void 0 !== QQ ? QQ : null
      }
      resetBatches(QQ) {
        const WQ = this.opaqueBatches;
        let XQ = 0;
        for (const wQ of WQ) wQ.meshes.length > 0 && (wQ.meshes.length = 0, wQ.faceCull = this.batchFaceCull(wQ.material, QQ), WQ[XQ++] = wQ);
        WQ.length = XQ
      }
      orderBatches() {
        const QQ = this.opaqueBatches;
        for (let WQ = 0; WQ < QQ.length; WQ++) {
          const XQ = QQ[WQ];
          XQ.group = WQ;
          for (let wQ = 0; wQ < WQ; wQ++) {
            const WQ = QQ[wQ];
            if (WQ.material === XQ.material && WQ.packed === XQ.packed) {
              XQ.group = WQ.group;
              break
            }
          }
          XQ.nearest = XQ.meshes.length > 0 ? XQ.meshes[0].distance : 1 / 0
        }
        QQ.sort(Os)
      }
      batchFor(QQ, WQ, XQ, wQ, qQ) {
        for (const zQ of this.opaqueBatches)
          if (zQ.material === QQ && zQ.packed === WQ && zQ.page === XQ && zQ.resting === wQ) return zQ;
        const TQ = {
          material: QQ,
          packed: WQ,
          page: XQ,
          resting: wQ,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(QQ, qQ)
        };
        return this.opaqueBatches.push(TQ), TQ
      }
      batchFaceCull(QQ, WQ) {
        return !(!WQ || !(0, ns.w)(QQ.model)) && (!this.xI || ! function(QQ) {
          var WQ;
          return !(null === (WQ = (0, KW.g)(QQ)) || void 0 === WQ || !WQ.movesVertices)
        }(this.packVariant(QQ, this.xI)))
      }
      writeFrameUniforms(QQ, WQ) {
        const XQ = this.frameUniforms,
          wQ = Ew;
        if ((0, Gs.v)(QQ, XQ), XQ[wQ.fogInfos] = WQ.fogEnabled ? WQ.fogMode : 0, XQ[wQ.fogInfos + 1] = WQ.fogStart, XQ[wQ.fogInfos + 2] = WQ.fogEnd, XQ[wQ.fogInfos + 3] = WQ.fogDensity, XQ.set(WQ.fogColour, wQ.fogColour), XQ[wQ.outputHeight] = WQ.renderHeight, XQ.set(WQ.ambientColour, wQ.sceneAmbient), (0, Gs.s)(WQ, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const WQ = (0, Us.l)(QQ.Yj, QQ.yj, QQ.Vj);
          for (let QQ = 0; QQ < 4; QQ++) XQ[wQ.aoLevels + QQ] = WQ[QQ] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, XQ)
      }
      animateMaterials(QQ) {
        const WQ = uw.anim;
        for (const XQ of this.materials.values()) XQ.animated && (XQ.uniformData[WQ] = QQ, this.device.queue.writeBuffer(XQ.uniformBuffer, 4 * WQ, XQ.uniformData, WQ, 1))
      }
      canDraw(QQ, WQ) {
        return !("atlas" === QQ.texture && !WQ) || (this.warnOnce(`stride:${QQ.id}`, `Lite terrain: material "${QQ.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(QQ, WQ) {
        let XQ = 0;
        QQ.setBindGroup(1, this.frameBindGroup);
        for (const wQ of this.opaqueBatches) {
          if (!wQ.meshes.length || !this.canDraw(wQ.material, wQ.packed)) continue;
          const qQ = this.pipelineFor(wQ.material, wQ.packed, WQ, wQ.resting);
          qQ && (QQ.setPipeline(qQ), QQ.setBindGroup(2, wQ.material.bindGroup), this.xI && this.bindShaderPackInputs(QQ, wQ.material, this.xI, this.prepassOf.has(qQ)), XQ += this.drawBatch(QQ, wQ))
        }
        return XQ
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(QQ, WQ, XQ) {
        const wQ = this.target,
          qQ = this.xI;
        if (!wQ || !qQ || 0 === this.maskPipelines) return 0;
        let TQ = 0,
          zQ = null;
        this.geometry.setDrawing(!0);
        try {
          for (const sQ of this.opaqueBatches) {
            if (!sQ.meshes.length || !this.canDraw(sQ.material, sQ.packed)) continue;
            const FQ = this.pipelineFor(sQ.material, sQ.packed, wQ, sQ.resting),
              PQ = FQ && this.prepassOf.get(FQ);
            PQ && (zQ || (zQ = QQ.beginRenderPass(WQ), zQ.setBindGroup(0, XQ), zQ.setBindGroup(1, this.frameBindGroup)), zQ.setPipeline(PQ), zQ.setBindGroup(2, sQ.material.bindGroup), this.bindShaderPackInputs(zQ, sQ.material, qQ, !0), TQ += this.drawBatch(zQ, sQ))
          }
        } finally {
          var sQ;
          null === (sQ = zQ) || void 0 === sQ || sQ.end(), this.geometry.setDrawing(!1)
        }
        return TQ
      }
      drawBatch(QQ, WQ) {
        let XQ = 0;
        for (const wQ of WQ.meshes) {
          const {
            rangeCount: WQ
          } = wQ;
          WQ > 0 && (XQ += this.geometry.draw(QQ, wQ, this.lighting, wQ.first0, wQ.count0), WQ > 1 && (XQ += this.geometry.draw(QQ, wQ, this.lighting, wQ.first1, wQ.count1)))
        }
        return XQ
      }
      drawTransparent(QQ, WQ) {
        let XQ = 0,
          wQ = null,
          qQ = null;
        QQ.setBindGroup(1, this.frameBindGroup);
        for (const TQ of this.transparent) {
          const zQ = TQ.material;
          if (!this.canDraw(zQ, TQ.packed)) continue;
          const sQ = this.pipelineFor(zQ, TQ.packed, WQ);
          sQ && (sQ !== wQ && (QQ.setPipeline(sQ), wQ = sQ, this.xI && this.bindShaderPackInputs(QQ, zQ, this.xI)), zQ !== qQ && (QQ.setBindGroup(2, zQ.bindGroup), qQ = zQ), XQ += this.geometry.draw(QQ, TQ, this.lighting))
        }
        return XQ
      }
    }

    function wF(QQ, WQ, XQ, wQ) {
      return `${Mw(QQ)}|${QQ.atlasLayers}|${QQ.Z6}|${WQ}|${XQ}|${wQ._colorFormat}|${wQ._depthStencilFormat}|${wQ._sampleCount}`
    }

    function qF(QQ, WQ) {
      return QQ.distance - WQ.distance
    }

    function TF(QQ, WQ) {
      return WQ.distance - QQ.distance
    }
    class zF {
      constructor() {
        this.left = []
      }
      sort(QQ, WQ) {
        for (let XQ = 0; XQ < QQ.length; XQ++) {
          const WQ = QQ[XQ].distance;
          if (WQ - WQ !== 0) return !1
        }
        return this.sortRange(QQ, 0, QQ.length, WQ), !0
      }
      sortRange(QQ, WQ, XQ, wQ) {
        if (XQ - WQ <= 16) {
          for (let qQ = WQ + 1; qQ < XQ; qQ++) {
            const XQ = QQ[qQ],
              TQ = wQ * XQ.distance;
            let zQ = qQ - 1;
            for (; zQ >= WQ && wQ * QQ[zQ].distance > TQ; zQ--) QQ[zQ + 1] = QQ[zQ];
            QQ[zQ + 1] = XQ
          }
          return
        }
        const qQ = WQ + XQ >>> 1;
        if (this.sortRange(QQ, WQ, qQ, wQ), this.sortRange(QQ, qQ, XQ, wQ), wQ * QQ[qQ - 1].distance <= wQ * QQ[qQ].distance) return;
        const {
          left: TQ
        } = this, zQ = qQ - WQ;
        for (let gQ = 0; gQ < zQ; gQ++) TQ[gQ] = QQ[WQ + gQ];
        let sQ = 0,
          FQ = qQ,
          PQ = WQ;
        for (; sQ < zQ && FQ < XQ;) QQ[PQ++] = wQ * QQ[FQ].distance < wQ * TQ[sQ].distance ? QQ[FQ++] : TQ[sQ++];
        for (; sQ < zQ;) QQ[PQ++] = TQ[sQ++]
      }
    }
    const sF = Math.ceil(102);

    function FF(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WQ;
      const TQ = Math.min(WQ, XQ),
        zQ = new Uint32Array(bX(wQ));
      for (let sQ = 0; sQ < wQ; sQ++) {
        const WQ = Math.floor(sQ * TQ / wQ),
          XQ = Math.max(WQ + 1, Math.floor((sQ + 1) * TQ / wQ));
        for (let FQ = 0; FQ < wQ; FQ++) {
          const PQ = Math.floor(FQ * TQ / wQ),
            gQ = Math.max(PQ + 1, Math.floor((FQ + 1) * TQ / wQ));
          let JQ = 0;
          for (let wQ = WQ; wQ < XQ; wQ++)
            for (let WQ = PQ; WQ < gQ; WQ++) QQ[wQ * qQ + WQ] >= sF && JQ++;
          if (2 * JQ >= (XQ - WQ) * (gQ - PQ)) {
            const QQ = FQ + wQ * sQ;
            zQ[QQ >>> 5] |= 1 << (31 & QQ)
          }
        }
      }
      return zQ
    }

    function PF(QQ) {
      return Math.max(1, Math.min(16, QQ))
    }
    class gF {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = QQ, this.loadTexture = WQ, this.warn = XQ, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(QQ, WQ) {
        return (QQ.kS !== this.builtVersion || this.blockCaster.length !== WQ) && (this.build(QQ, WQ), !0)
      }
      build(QQ, WQ) {
        this.builtVersion = QQ.kS;
        const XQ = new Uint16Array(WQ),
          wQ = new Map;
        for (let qQ = 1; qQ < WQ; qQ++) {
          const WQ = this.classify(QQ, qQ, wQ);
          if (null === WQ || WQ === VX) {
            XQ[qQ] = null === WQ ? 0 : VX;
            continue
          }
          let TQ = this.byKey.get(WQ.key);
          void 0 === TQ && (TQ = this.allocate(WQ), this.byKey.set(WQ.key, TQ)), XQ[qQ] = TQ
        }
        this.blockCaster = XQ, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(QQ, WQ) {
        const XQ = QQ.R7[WQ];
        if ("function" !== typeof XQ) return XQ;
        try {
          return XQ()
        } catch (wQ) {
          return this.warnOnce(`Sun shadows: no caster option for block ${WQ}: ${wQ instanceof Error?wQ.message:String(wQ)}`), null
        }
      }
      classify(QQ, WQ, XQ) {
        const wQ = this.option(QQ, WQ);
        if ("none" === wQ) return null;
        if (wQ && wQ.planes.length > 0) {
          const QQ = wQ.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(QQ)}`,
            planes: QQ
          }
        }
        if (QQ.WI[WQ]) return null;
        const qQ = QQ.wI[WQ] ? QQ.fn(WQ) : null;
        if (qQ && qQ.length >= 6) {
          const QQ = function(QQ) {
            const WQ = new Uint32Array(16);
            for (let XQ = 0; XQ + 6 <= QQ.length; XQ += 6) {
              const wQ = [0, 1, 2].map((WQ => Math.max(0, Math.ceil(8 * QQ[XQ + WQ] - .5)))),
                qQ = [0, 1, 2].map((WQ => Math.min(7, Math.floor(8 * QQ[XQ + WQ + 3] - .5))));
              for (let QQ = wQ[2]; QQ <= qQ[2]; QQ++)
                for (let XQ = wQ[1]; XQ <= qQ[1]; XQ++)
                  for (let TQ = wQ[0]; TQ <= qQ[0]; TQ++) {
                    const wQ = TQ + 8 * (XQ + 8 * QQ);
                    WQ[wQ >>> 5] |= 1 << (31 & wQ)
                  }
            }
            return WQ
          }(qQ);
          return function(QQ) {
            return QQ.every((QQ => 4294967295 === QQ))
          }(QQ) ? VX : QQ.every((QQ => 0 === QQ)) ? null : {
            kind: "shape",
            key: `shape:${QQ.join(",")}`,
            mask: QQ
          }
        }
        if (QQ.xG[WQ] || !QQ.Nj[WQ]) return null;
        const TQ = [0, 1, 2, 3, 4, 5].map((wQ => {
          const qQ = QQ.Zj[6 * WQ + wQ];
          let TQ = XQ.get(qQ);
          return void 0 === TQ && (TQ = function(QQ) {
            if (!QQ || QQ.TB) return null;
            const {
              f6: WQ,
              Z6: XQ,
              R6: wQ
            } = QQ;
            if (!WQ || !XQ || !(XQ > 0) || void 0 === wQ || !(wQ >= 0)) return null;
            const qQ = WQ[0],
              TQ = XQ * XQ * 4;
            if (!qQ || qQ.byteLength < TQ) return null;
            const zQ = Math.floor(qQ.byteLength / TQ),
              sQ = WQ[Math.floor(wQ / zQ)];
            if (!sQ) return null;
            const FQ = new Uint8Array(sQ.buffer, sQ.byteOffset, sQ.byteLength),
              PQ = wQ % zQ * TQ;
            if (PQ + TQ > FQ.length) return null;
            const gQ = new Uint8Array(XQ * XQ);
            let JQ = !1;
            for (let rQ = 0; rQ < gQ.length; rQ++) gQ[rQ] = FQ[PQ + 4 * rQ + 3], JQ ||= gQ[rQ] < sF;
            return JQ ? {
              alpha: gQ,
              width: XQ
            } : null
          }(QQ.qB(qQ)), XQ.set(qQ, TQ)), TQ
        }));
        if (TQ.every((QQ => null === QQ))) return VX;
        const zQ = PF(Math.max(...TQ.map((QQ => {
            var WQ;
            return null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.width) && void 0 !== WQ ? WQ : 1
          })))),
          sQ = new Uint32Array(bX(zQ)).fill(4294967295),
          FQ = TQ.map((QQ => null === QQ ? sQ : FF(QQ.alpha, QQ.width, QQ.width, zQ)));
        return {
          kind: "cutout",
          key: `cutout:${zQ}:${FQ.map((QQ=>QQ.join(","))).join("|")}`,
          size: zQ,
          faces: FQ
        }
      }
      allocate(QQ) {
        if (this.nextCaster >= vX) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const WQ = this.nextCaster++;
        if (this.writeCaster(WQ, DX, 0, 0, 0), "shape" === QQ.kind) {
          const XQ = this.allocateMask(QQ.mask.length);
          XQ >= 0 && (this.sink(XQ, QQ.mask), this.writeCaster(WQ, pX, XQ, 0, 8))
        } else if ("cutout" === QQ.kind) {
          const XQ = bX(QQ.size),
            wQ = this.allocateMask(6 * XQ);
          if (wQ >= 0) {
            const qQ = new Uint32Array(6 * XQ);
            QQ.faces.forEach(((QQ, WQ) => {
              qQ.set(QQ, WQ * XQ)
            })), this.sink(wQ, qQ), this.writeCaster(WQ, UX, wQ, 0, QQ.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(WQ, QQ.planes).finally((() => {
          this.planesLoading--
        })));
        return WQ
      }
      async loadPlanes(QQ, WQ) {
        const XQ = await Promise.all(WQ.map((QQ => this.texture(QQ.texture))));
        if (XQ.some((QQ => null === QQ))) return;
        const wQ = XQ,
          qQ = PF(Math.max(...wQ.map((QQ => Math.min(QQ.width, QQ.height))))),
          TQ = bX(qQ),
          zQ = this.allocateMask(WQ.length * (4 + TQ));
        if (zQ < 0) return;
        const sQ = new Uint32Array(WQ.length * (4 + TQ)),
          FQ = 4 * WQ.length;
        WQ.forEach(((QQ, WQ) => {
          const XQ = zQ + FQ + WQ * TQ;
          sQ.set(function(QQ, WQ) {
            const [XQ, wQ] = QQ.tangent, qQ = Math.hypot(XQ, wQ) || 1, TQ = XQ / qQ, zQ = wQ / qQ, sQ = QQ.centre[0] * zQ - QQ.centre[1] * TQ, FQ = new Uint32Array(4);
            return new Float32Array(FQ.buffer, 0, 3).set([TQ, zQ, sQ]), FQ[3] = WQ, FQ
          }(QQ, XQ), 4 * WQ), sQ.set(FF(wQ[WQ].alpha, wQ[WQ].width, wQ[WQ].height, qQ), FQ + WQ * TQ)
        })), this.sink(zQ, sQ), this.writeCaster(QQ, GX, zQ, WQ.length, qQ)
      }
      texture(QQ) {
        let WQ = this.textures.get(QQ);
        return WQ || (WQ = this.loadTexture(QQ).catch((WQ => (this.warn(`Sun shadows: no mask for ${QQ}: ${WQ instanceof Error?WQ.message:String(WQ)}`), null))), this.textures.set(QQ, WQ)), WQ
      }
      allocateMask(QQ) {
        if (this.nextMaskWord + QQ > dX) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const WQ = 32768 + this.nextMaskWord;
        return this.nextMaskWord += QQ, WQ
      }
      writeCaster(QQ, WQ, XQ, wQ, qQ) {
        this.sink(0 + 4 * QQ, Uint32Array.of(WQ, XQ, wQ, qQ))
      }
      warnOnce(QQ) {
        this.warned.has(QQ) || (this.warned.add(QQ), this.warn(QQ))
      }
    }
    var JF = XQ(3075);

    function rF(QQ) {
      return !QQ.sB && !QQ.yG && !QQ.Lj
    }

    function IF() {
      return {
        bricks: new Uint32Array(PX),
        cells: new Uint16Array(32768),
        special: new Uint8Array(sX)
      }
    }
    class jF {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = QQ, this.writeVoxels = WQ, this.writePool = XQ, this.warn = wQ, this.eyeChunk = null, this.slotChunk = new Array(WX).fill(null), this.slotVersion = new Float64Array(WX).fill(-1), this.slotPool = new Array(WX).fill(null), this.starved = new Uint8Array(WX), this.queue = [], this.queued = new Uint8Array(WX), this.queueSorted = !0, this.freePool = new Uint32Array(HX), this.freeCount = HX, this.casterTable = null, this.warnedPool = !1, this.scratch = IF(), this.victimScratch = IF(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * WX), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let qQ = 0; qQ < HX; qQ++) this.freePool[qQ] = 65535 - qQ
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return HX - this.freeCount
      }
      chunkAdded(QQ) {
        if (null === this.eyeChunk || !this.inRadius(QQ.i, QQ.j, QQ.k)) return;
        const WQ = jX(QQ.i, QQ.j, QQ.k);
        this.slotChunk[WQ] = QQ, this.slotVersion[WQ] = -1, this.enqueue(WQ)
      }
      update(QQ, WQ, XQ) {
        const wQ = this.casters.blockCaster;
        if (wQ !== this.casterTable) {
          this.casterTable = wQ;
          for (let QQ = 0; QQ < WX; QQ++) this.slotVersion[QQ] = -1, this.slotChunk[QQ] && this.enqueue(QQ)
        }
        const qQ = Math.floor(QQ[0] / 32),
          TQ = Math.floor(QQ[1] / 32),
          zQ = Math.floor(QQ[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== qQ || this.eyeChunk[1] !== TQ || this.eyeChunk[2] !== zQ) && (this.eyeChunk = [qQ, TQ, zQ], this.follow(WQ), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let sQ = 0; sQ < WX; sQ++) {
          const QQ = this.slotChunk[sQ];
          QQ && (QQ.rG || QQ.Sj !== this.slotVersion[sQ]) && this.enqueue(sQ)
        }
        this.drain(XQ), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(QQ, WQ) {
        this.records.set(WQ, 4 * QQ), this.windowTopStale = !0, this.writeVoxels(4 * QQ, WQ)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const QQ = this.records;
        let WQ = -1 / 0;
        for (let wQ = 0; wQ < QQ.length; wQ += 4) {
          const XQ = 255 & QQ[wQ + 3];
          XQ !== qX && XQ !== TX || !this.inRadius(QQ[wQ], QQ[wQ + 1], QQ[wQ + 2]) || (WQ = Math.max(WQ, QQ[wQ + 1] * mW + (QQ[wQ + 3] >>> 8)))
        }
        const XQ = WQ === -1 / 0 ? 1 : WQ + JX;
        XQ !== this.windowTop[0] && (this.windowTop[0] = XQ, this.writeVoxels(gX, this.windowTop))
      }
      follow(QQ) {
        const WQ = this.eyeChunk,
          [XQ, wQ, qQ] = MW;
        for (let zQ = -qQ; zQ <= qQ; zQ++)
          for (let qQ = -wQ; qQ <= wQ; qQ++)
            for (let wQ = -XQ; wQ <= XQ; wQ++) {
              var TQ;
              const XQ = WQ[0] + wQ,
                sQ = WQ[1] + qQ,
                FQ = WQ[2] + zQ,
                PQ = jX(XQ, sQ, FQ),
                gQ = this.slotChunk[PQ];
              if (gQ && !gQ.rG && gQ.i === XQ && gQ.j === sQ && gQ.k === FQ) continue;
              const JQ = null !== (TQ = QQ(XQ, sQ, FQ)) && void 0 !== TQ ? TQ : null;
              gQ && (gQ.i !== XQ || gQ.j !== sQ || gQ.k !== FQ) && this.slotPool[PQ] && (this.release(PQ), this.record.fill(0), this.writeRecord(PQ, this.record)), this.slotChunk[PQ] = JQ, this.slotVersion[PQ] = -1, (JQ || gQ) && this.enqueue(PQ)
            }
      }
      requeueStarved() {
        for (let QQ = 0; QQ < WX; QQ++) this.starved[QQ] && this.slotChunk[QQ] && this.enqueue(QQ)
      }
      enqueue(QQ) {
        this.queued[QQ] || (this.queued[QQ] = 1, this.queue.push(QQ), this.queueSorted = !1)
      }
      drain(QQ) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const QQ = new Map;
          for (const WQ of this.queue) QQ.set(WQ, this.slotDistance(WQ));
          this.queue.sort(((WQ, XQ) => QQ.get(XQ) - QQ.get(WQ))), this.queueSorted = !0
        }
        const WQ = performance.now();
        let XQ = 0;
        const wQ = [];
        for (; this.queue.length > 0 && (0 === XQ || performance.now() - WQ < QQ);) {
          const QQ = this.queue.pop(),
            WQ = this.slotChunk[QQ];
          !WQ || WQ.rG || rF(WQ) ? (this.queued[QQ] = 0, this.encodeSlot(QQ), XQ++) : wQ.push(QQ)
        }
        for (let qQ = wQ.length - 1; qQ >= 0; qQ--) this.queue.push(wQ[qQ])
      }
      slotDistance(QQ) {
        const WQ = this.slotChunk[QQ],
          XQ = this.eyeChunk;
        return WQ ? Math.max(Math.abs(WQ.i - XQ[0]), Math.abs(WQ.j - XQ[1]), Math.abs(WQ.k - XQ[2])) : 0
      }
      inRadius(QQ, WQ, XQ) {
        const wQ = this.eyeChunk,
          [qQ, TQ, zQ] = MW;
        return Math.abs(QQ - wQ[0]) <= qQ && Math.abs(WQ - wQ[1]) <= TQ && Math.abs(XQ - wQ[2]) <= zQ
      }
      release(QQ) {
        const WQ = this.slotPool[QQ];
        if (WQ) {
          for (let QQ = WQ.length - 1; QQ >= 0; QQ--) this.freePool[this.freeCount++] = WQ[QQ];
          this.slotPool[QQ] = null
        }
      }
      encodeSlot(QQ) {
        var WQ, XQ, wQ, qQ, TQ;
        let zQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          sQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const FQ = null !== (WQ = null === (XQ = this.slotPool[QQ]) || void 0 === XQ ? void 0 : XQ.length) && void 0 !== WQ ? WQ : 0;
        this.release(QQ), this.starved[QQ] = 0;
        const PQ = this.slotChunk[QQ],
          gQ = this.record;
        if (!PQ || PQ.rG || !PQ.Gr) return this.slotChunk[QQ] = null, this.slotVersion[QQ] = -1, gQ.fill(0), this.writeRecord(QQ, gQ), void(FQ > 0 && this.requeueStarved());
        this.slotVersion[QQ] = PQ.Sj;
        const JQ = this.encodeBricks(PQ, QQ, zQ, sQ);
        gQ[0] = PQ.i, gQ[1] = PQ.j, gQ[2] = PQ.k, gQ[3] = JQ, this.writeRecord(QQ, gQ), null === (wQ = this.encoded) || void 0 === wQ || wQ.call(this, PQ), sQ && (null !== (qQ = null === (TQ = this.slotPool[QQ]) || void 0 === TQ ? void 0 : TQ.length) && void 0 !== qQ ? qQ : 0) < FQ && this.requeueStarved()
      }
      encodeBricks(QQ, WQ, XQ, wQ) {
        if (QQ.Xj) return wX;
        const qQ = this.casters.blockCaster,
          {
            data: TQ,
            stride: zQ,
            offset: sQ
          } = QQ.Gr,
          [FQ, PQ, gQ] = zQ,
          JQ = mW,
          {
            bricks: rQ,
            cells: IQ,
            special: jQ
          } = XQ;
        rQ.fill(0), jQ.fill(0);
        let BQ = 0,
          yQ = 0,
          VQ = 0;
        for (let DQ = 0; DQ < JQ; DQ++) {
          const WQ = DQ >> 2,
            XQ = 3 & DQ,
            wQ = QQ.UI[DQ],
            zQ = wQ === JF.g ? -1 : wQ < qQ.length ? qQ[wQ] : 0;
          if (0 !== zQ)
            for (let QQ = 0; QQ < JQ; QQ++) {
              const wQ = QQ >> 2,
                pQ = 3 & QQ;
              let GQ = sQ + QQ * FQ + DQ * PQ;
              for (let QQ = 0; QQ < JQ; QQ++, GQ += gQ) {
                let sQ = zQ;
                if (sQ < 0) {
                  const QQ = TQ[GQ];
                  if (sQ = QQ < qQ.length ? qQ[QQ] : 0, 0 === sQ) continue
                }
                const FQ = BX(wQ, WQ, QQ >> 2),
                  PQ = yX(pQ, XQ, 3 & QQ);
                rQ[3 * FQ + (PQ >>> 5)] |= 1 << (31 & PQ), IQ[FQ * zX + PQ] = sQ, BQ++, VQ = DQ, sQ === VX ? yQ++ : jQ[FQ] = 1
              }
            }
        }
        return 0 === BQ ? wX : 32768 === yQ ? qX | VQ << 8 : (this.writePoolEntries(WQ, XQ, wQ), this.writeVoxels(FX + WQ * PX, rQ), TX | VQ << 8)
      }
      writePoolEntries(QQ, WQ, XQ) {
        const {
          bricks: wQ,
          cells: qQ,
          special: TQ
        } = WQ, zQ = this.entry;
        let sQ = 0;
        for (let gQ = 0; gQ < sX; gQ++) sQ += TQ[gQ];
        if (0 === sQ) return;
        XQ && this.freeCount < sQ && this.evictBeyond(QQ, sQ);
        const FQ = new Uint32Array(XQ ? Math.min(sQ, this.freeCount) : 0);
        let PQ = 0;
        for (let gQ = 0; gQ < sX; gQ++) {
          if (!TQ[gQ]) continue;
          const XQ = 3 * gQ;
          if (PQ === FQ.length) {
            this.dropSpecials(WQ, gQ), this.starved[QQ] = 1;
            continue
          }
          const sQ = this.freePool[--this.freeCount];
          FQ[PQ++] = sQ;
          for (let QQ = 0; QQ < zX; QQ++) {
            const WQ = wQ[XQ + (QQ >>> 5)] >>> (31 & QQ) & 1 ? qQ[gQ * zX + QQ] : 0;
            1 & QQ ? zQ[QQ >> 1] |= WQ << 16 : zQ[QQ >> 1] = WQ
          }
          wQ[XQ + 2] = sQ + 1, this.writePool(aX + 32 * sQ, zQ)
        }
        FQ.length > 0 && (this.slotPool[QQ] = FQ)
      }
      evictBeyond(QQ, WQ) {
        const XQ = this.slotDistance(QQ),
          wQ = [];
        for (let qQ = 0; qQ < WX; qQ++) qQ !== QQ && this.slotPool[qQ] && this.slotDistance(qQ) > XQ && wQ.push(qQ);
        wQ.sort(((QQ, WQ) => this.slotDistance(WQ) - this.slotDistance(QQ)));
        for (const qQ of wQ) {
          if (this.freeCount >= WQ) return;
          const QQ = this.slotChunk[qQ];
          QQ && !QQ.rG && QQ.Gr && (QQ.Sj === this.slotVersion[qQ] || rF(QQ)) && this.encodeSlot(qQ, this.victimScratch, !1)
        }
      }
      dropSpecials(QQ, WQ) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const XQ = 3 * WQ;
        for (let wQ = 0; wQ < zX; wQ++) QQ.cells[WQ * zX + wQ] !== VX && (QQ.bricks[XQ + (wQ >>> 5)] &= ~(1 << (31 & wQ)))
      }
    }
    var BF = XQ(37762);
    class yF {
      constructor(QQ) {
        this.device = QQ, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new kX, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.nJ = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = QQ.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = QQ.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(QQ, WQ, XQ) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: wQ
        } = this;
        wQ.gI(QQ, WQ), XQ.forEachSunShadowCaster((QQ => {
          this.add(QQ)
        })), wQ.finish();
        const qQ = 0 === wQ.parts;
        if (qQ && this.uploadedEmpty) return;
        this.uploadedEmpty = qQ;
        const {
          queue: TQ
        } = this.device, {
          words: zQ
        } = wQ;
        TQ.writeBuffer(this.frameBuffer, 0, zQ, 0, 16385), wQ.refs > 0 && TQ.writeBuffer(this.frameBuffer, 65540, zQ, cX, wQ.refs), qQ || TQ.writeBuffer(this.frameBuffer, 327684, zQ, AX, wQ.parts * iX)
      }
      add(QQ) {
        const WQ = this.gridFor(QQ);
        if (!WQ) return;
        const {
          frame: XQ
        } = this, {
          nJ: wQ,
          worldAt: qQ,
          instances: TQ,
          instanceCount: zQ,
          thin: sQ
        } = QQ;
        if (TQ)
          for (let FQ = 0; FQ < zQ; FQ++) sQ ? (SX(TQ, 16 * FQ, wQ, qQ, this.nJ), XQ.add(WQ, this.nJ)) : XQ.add(WQ, TQ, 16 * FQ);
        else XQ.add(WQ, wQ, qQ)
      }
      gridFor(QQ) {
        let {
          geometry: WQ,
          indexed: XQ,
          first: wQ,
          count: qQ,
          skip: TQ
        } = QQ, zQ = this.grids.get(WQ);
        zQ || (zQ = new Map, this.grids.set(WQ, zQ));
        const sQ = `${XQ?wQ:-1-wQ}:${qQ}:${null!==TQ&&void 0!==TQ?TQ:""}`;
        let FQ = zQ.get(sQ);
        if (void 0 !== FQ || this.gridsFull) return FQ;
        const PQ = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = PQ + 2;
        else if (PQ > this.bakeDeadline) return;
        return FQ = this.bake(WQ, XQ, wQ, qQ, TQ), void 0 !== FQ && zQ.set(sQ, FQ), FQ
      }
      bake(QQ, WQ, XQ, wQ, qQ) {
        const TQ = QQ.vertexAttributes.find((QQ => "position" === QQ.kind)),
          zQ = TQ ? function(QQ, WQ, XQ, wQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const TQ = QQ => WQ ? WQ[XQ + QQ] : XQ + QQ,
              zQ = QQ => null !== qQ && [0, 1, 2].some((WQ => {
                const XQ = TQ(QQ + WQ);
                return XQ >= qQ[0] && XQ < qQ[1]
              })),
              sQ = [1 / 0, 1 / 0, 1 / 0],
              FQ = [-1 / 0, -1 / 0, -1 / 0];
            for (let DQ = 0; DQ + 2 < wQ; DQ += 3)
              if (!zQ(DQ))
                for (let WQ = 0; WQ < 3; WQ++) {
                  const XQ = TQ(DQ + WQ);
                  for (let WQ = 0; WQ < 3; WQ++) sQ[WQ] = Math.min(sQ[WQ], QQ[3 * XQ + WQ]), FQ[WQ] = Math.max(FQ[WQ], QQ[3 * XQ + WQ])
                }
            const PQ = Math.max(FQ[0] - sQ[0], FQ[1] - sQ[1], FQ[2] - sQ[2]);
            if (!(PQ > 0)) return null;
            const gQ = PQ / 64,
              JQ = [0, 0, 0],
              rQ = [0, 0, 0],
              IQ = [0, 0, 0];
            for (let DQ = 0; DQ < 3; DQ++) JQ[DQ] = Math.min(65, Math.ceil((FQ[DQ] - sQ[DQ]) / gQ) + 1), rQ[DQ] = sQ[DQ] - gQ / 2, IQ[DQ] = rQ[DQ] + JQ[DQ] * gQ;
            const jQ = new Uint32Array(Math.ceil(JQ[0] * JQ[1] * JQ[2] / 32)),
              BQ = new Float64Array(9),
              yQ = [0, 0, 0],
              VQ = [0, 0, 0];
            for (let DQ = 0; DQ + 2 < wQ; DQ += 3)
              if (!zQ(DQ)) {
                for (let WQ = 0; WQ < 3; WQ++) {
                  const XQ = TQ(DQ + WQ);
                  for (let wQ = 0; wQ < 3; wQ++) BQ[3 * WQ + wQ] = QQ[3 * XQ + wQ]
                }
                for (let QQ = 0; QQ < 3; QQ++) {
                  const WQ = Math.min(BQ[QQ], BQ[3 + QQ], BQ[6 + QQ]),
                    XQ = Math.max(BQ[QQ], BQ[3 + QQ], BQ[6 + QQ]);
                  yQ[QQ] = Math.max(0, Math.floor((WQ - rQ[QQ]) / gQ - 1e-6)), VQ[QQ] = Math.min(JQ[QQ] - 1, Math.floor((XQ - rQ[QQ]) / gQ + 1e-6))
                }
                for (let QQ = yQ[2]; QQ <= VQ[2]; QQ++)
                  for (let WQ = yQ[1]; WQ <= VQ[1]; WQ++)
                    for (let XQ = yQ[0]; XQ <= VQ[0]; XQ++)
                      if (tX(BQ, rQ[0] + (XQ + .5) * gQ, rQ[1] + (WQ + .5) * gQ, rQ[2] + (QQ + .5) * gQ, gQ / 2)) {
                        const wQ = XQ + JQ[0] * (WQ + JQ[1] * QQ);
                        jQ[wQ >>> 5] |= 1 << (31 & wQ)
                      }
              } return {
              words: jQ,
              lo: rQ,
              hi: IQ,
              cell: gQ,
              dims: JQ
            }
          }((0, BF.i)(TQ, QQ.vertexCount), WQ ? QQ.indexData : null, XQ, wQ, qQ) : null;
        if (!zQ) return null;
        const {
          words: sQ,
          ...FQ
        } = zQ;
        if (this.gridTop + sQ.length > EX) return void(this.gridsFull = !0);
        const PQ = this.gridTop;
        return this.gridTop += sQ.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * PQ, sQ), {
          ...FQ,
          at: PQ
        }
      }
    }
    const VF = Math.cos(1 * Math.PI / 180);

    function DF(QQ, WQ) {
      return QQ[0] * WQ[0] + QQ[1] * WQ[1] + QQ[2] * WQ[2] < VF
    }
    async function pF(QQ) {
      const {
        pixels: WQ,
        width: XQ,
        height: wQ
      } = await QW(QQ), qQ = new Uint8Array(XQ * wQ);
      for (let TQ = 0; TQ < qQ.length; TQ++) qQ[TQ] = WQ[4 * TQ + 3];
      return {
        width: XQ,
        height: wQ,
        alpha: qQ
      }
    }
    class GF {
      constructor(QQ, WQ) {
        this.device = QQ, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(eX.k), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = QQ.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = QQ.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * rX,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = QQ.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [XQ, wQ, qQ] = eX.n;
        this.volume = QQ.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: XQ,
            height: wQ,
            depthOrArrayLayers: qQ
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = QQ.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = QQ.createBuffer({
          label: "sun-shadow-volume-work",
          size: eX.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = WQ ? new yF(QQ) : null, this.entityStandIn = WQ ? null : QQ.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var QQ;
        null === (QQ = this.stopWindow) || void 0 === QQ || QQ.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var QQ, WQ;
        const XQ = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || XQ.push("Lite sun shadow volume pipeline compiling");
        const wQ = null !== (QQ = null === (WQ = this.casters) || void 0 === WQ ? void 0 : WQ.planesLoading) && void 0 !== QQ ? QQ : 0;
        return wQ > 0 && XQ.push(`${wQ} Lite sun shadow plane casters loading their textures`), XQ
      }
      entries() {
        var QQ, WQ, XQ, wQ;
        const qQ = OW.p;
        return [{
          binding: qQ.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: qQ.Gr,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: qQ.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: qQ.volume,
          resource: this.volumeView
        }, {
          binding: qQ.sampler,
          resource: this.volumeSampler
        }, {
          binding: qQ.entities,
          resource: {
            buffer: null !== (QQ = null === (WQ = this.entities) || void 0 === WQ ? void 0 : WQ.frameBuffer) && void 0 !== QQ ? QQ : this.entityStandIn
          }
        }, {
          binding: qQ.entityGrids,
          resource: {
            buffer: null !== (XQ = null === (wQ = this.entities) || void 0 === wQ ? void 0 : wQ.gridBuffer) && void 0 !== XQ ? XQ : this.entityStandIn
          }
        }]
      }
      prepare(QQ, WQ, XQ) {
        var wQ;
        this.entitiesThisFrame = !1;
        const qQ = null !== (wQ = null === XQ || void 0 === XQ ? void 0 : XQ.sunShadowReach()) && void 0 !== wQ ? wQ : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!XQ || !qQ.sunShadow && !qQ.airShadow) return void(this.volumeHolds = null);
        if (QQ.nJ.iQQ !== mW) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${QQ.nJ.iQQ}; everything is lit.`)));
        const TQ = this.start(QQ);
        this.casters.update(QQ.Mr, QQ.Mr.wI.length);
        const zQ = QQ.jr;
        for (let rQ = 0; rQ < 3; rQ++) this.eye[rQ] = WQ[rQ] + zQ[rQ];
        const sQ = (0, eX.y)(this.eye);
        this.staleNear = sQ;
        const FQ = QQ.nJ.PB;
        TQ.update(this.eye, ((QQ, WQ, XQ) => FQ.gB(QQ, WQ, XQ)), 1);
        const PQ = (0, eX.q)(XQ.IQQ()),
          gQ = TQ.eyeChunk,
          JQ = this.uniformInts;
        for (let rQ = 0; rQ < 3; rQ++) JQ[rQ] = gQ[rQ], JQ[4 + rQ] = sQ[rQ];
        this.entitiesThisFrame = null !== this.entities && qQ.sunShadow, this.entitiesThisFrame && LX(this.uniformFloats, 8, WQ, PQ), null !== this.volumeHolds && (this.castersWritten || DF(PQ, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(sQ, PQ, gQ)
      }
      markStale(QQ) {
        const WQ = this.staleNear,
          XQ = mW,
          wQ = [QQ.i * XQ, QQ.j * XQ, QQ.k * XQ];
        for (let TQ = 0; TQ < 3; TQ++)
          if (wQ[TQ] + XQ <= WQ[TQ] - XQ || wQ[TQ] >= WQ[TQ] + eX.n[TQ] + XQ) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const qQ = this.stale;
        for (let TQ = 0; TQ < qQ.length; TQ += 4)
          if (qQ[TQ] === QQ.i && qQ[TQ + 1] === QQ.j && qQ[TQ + 2] === QQ.k) return void(qQ[TQ + 3] = this.swept);
        if (16 === qQ.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        qQ.push(QQ.i, QQ.j, QQ.k, this.swept)
      }
      writeStale() {
        const QQ = this.swept,
          WQ = this.stale;
        this.staleAll && QQ - this.staleAllSwept >= eX.h && (this.staleAll = !1, WQ.length = 0);
        let XQ = 0;
        for (let qQ = 0; qQ < WQ.length; qQ += 4)
          if (QQ - WQ[qQ + 3] < eX.h) {
            for (let QQ = 0; QQ < 4; QQ++) WQ[XQ + QQ] = WQ[qQ + QQ];
            XQ += 4
          } WQ.length = XQ;
        const wQ = this.uniformInts;
        wQ[3] = this.staleAll ? 5 : XQ / 4;
        for (let qQ = 0; qQ < 4; qQ++)
          for (let QQ = 0; QQ < 3; QQ++) wQ[16 + 4 * qQ + QQ] = 4 * qQ < XQ ? WQ[4 * qQ + QQ] * mW : 0
      }
      writeUniform() {
        const QQ = this.uniformInts;
        let WQ = this.uniformWritten;
        if (WQ) {
          let XQ = !0;
          for (let wQ = 0; wQ < QQ.length && XQ; wQ++) XQ = QQ[wQ] === WQ[wQ];
          if (XQ) return
        }
        WQ ??= this.uniformWritten = new Int32Array(QQ.length), WQ.set(QQ), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(QQ) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, QQ)
      }
      computeVolume(QQ, WQ, XQ) {
        const wQ = this.buildVolumePass();
        if (!wQ) return void(this.volumeHolds = null);
        const qQ = (0, eX.u)(this.volumeHolds, QQ);
        this.volumeHolds = QQ;
        const TQ = 1 === qQ.length && qQ[0].size.every(((QQ, WQ) => QQ === eX.n[WQ])),
          zQ = this.sweptChunk,
          sQ = this.sweptLight,
          FQ = WQ[0] !== sQ[0] || WQ[1] !== sQ[1] || WQ[2] !== sQ[2],
          PQ = XQ[0] !== zQ[0] || XQ[1] !== zQ[1] || XQ[2] !== zQ[2],
          gQ = FQ && DF(WQ, sQ);
        if ((TQ || this.written || PQ || gQ) && (this.fastLeft = eX.h), TQ || this.written || FQ || PQ) {
          this.written = !1;
          for (let QQ = 0; QQ < 3; QQ++) zQ[QQ] = XQ[QQ], sQ[QQ] = WQ[QQ];
          this.sweepLeft = TQ ? 0 : eX.h
        }
        if (TQ ? this.swept += eX.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, qQ.push(...(0, eX.A)(QQ, this.slice)), this.slice = (this.slice + 1) % eX.h, this.swept++), 0 === qQ.length) return;
        const JQ = (0, eX.D)(this.workData, WQ, qQ);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const rQ = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          IQ = rQ.beginComputePass({
            label: "sun-shadow-volume"
          });
        IQ.setPipeline(wQ.pipeline), IQ.setBindGroup(YX.group, wQ.bindGroup), IQ.dispatchWorkgroups(Math.ceil(JQ / eX.j)), IQ.end(), this.device.queue.submit([rQ.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const QQ = YX,
          WQ = GPUShaderStage.COMPUTE,
          XQ = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: QQ.uniform,
              visibility: WQ,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: QQ.Gr,
              visibility: WQ,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: QQ.special,
              visibility: WQ,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: QQ.work,
              visibility: WQ,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: QQ.volume,
              visibility: WQ,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          wQ = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: XQ,
            entries: [{
              binding: QQ.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: QQ.Gr,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: QQ.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: QQ.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: QQ.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [XQ]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: NX()
            }),
            entryPoint: "main"
          }
        }).then((QQ => {
          this.volumePass = {
            pipeline: QQ,
            bindGroup: wQ
          }
        }), (QQ => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(QQ)}`)
        })), null
      }
      start(QQ) {
        if (this.window) return this.window;
        const WQ = (QQ, WQ) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * QQ, WQ)
        };
        this.casters = new gF(((QQ, XQ) => {
          this.castersWritten = !0, WQ(QQ, XQ)
        }), pF);
        const XQ = new jF(this.casters, ((QQ, WQ) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * QQ, WQ)
        }), WQ);
        XQ.encoded = QQ => {
          this.markStale(QQ)
        };
        const wQ = QQ => {
          XQ.chunkAdded(QQ)
        };
        return QQ.nJ.on("chunkAdded", wQ), this.stopWindow = () => {
          QQ.nJ.removeListener("chunkAdded", wQ)
        }, this.window = XQ, XQ
      }
    }
    var UF = XQ(38972),
      bF = XQ(38979);
    const vF = 0,
      dF = 3,
      HF = 4,
      aF = 5;

    function lF(QQ, WQ, XQ, wQ) {
      QQ.drawOffset(WQ, wQ + vF), WQ[wQ + dF] = QQ.drawTime(), XQ[wQ + HF] = QQ.ring.drawStart(), XQ[wQ + aF] = QQ.ring.drawCount()
    }
    const hF = `\n${fw}\n\nconst MAX_STOPS = ${bF.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${bF.e/4}>,\n\tcolor1: array<vec4f, ${bF.e}>,\n\tcolor2: array<vec4f, ${bF.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${bF.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${bF.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var iF = XQ(41851);
    class cF {
      constructor(QQ, WQ, XQ, wQ) {
        this.device = QQ, this.system = WQ, this.frameIndex = XQ, this.bindings = wQ, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, iF.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (QQ, WQ) => {
          this.device.queue.writeBuffer(this.ring, QQ * bF.h * 4, this.system.ring.records, QQ * bF.h, (WQ - QQ) * bF.h)
        };
        const {
          name: qQ
        } = WQ;
        this.ring = QQ.createBuffer({
          label: `particles-${qQ}`,
          size: WQ.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = QQ.createBuffer({
          label: `particles-uniforms-${qQ}`,
          size: 4 * bF.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(QQ) {
        const WQ = (0, iF.b)(this.system, this.uniformBits, QQ);
        WQ && (this.uniformBits = WQ, this.device.queue.writeBuffer(this.uniforms, 0, WQ))
      }
      bind() {
        const {
          system: QQ
        } = this, WQ = this.texture;
        (0, iF.j)(QQ, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${QQ.name}`,
          size: [bF.l, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * bF.l
        }, [bF.l, 1]));
        const XQ = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === WQ.view && this.boundSampler === WQ.sampler && this.boundRamp === XQ || (this.boundView = WQ.view, this.boundSampler = WQ.sampler, this.boundRamp = XQ, this.bindGroup = this.device.createBindGroup({
          label: `particles-${QQ.name}`,
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
            resource: WQ.sampler
          }, {
            binding: 3,
            resource: WQ.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: XQ
          }]
        }))
      }
      destroy() {
        var QQ;
        this.ring.destroy(), this.uniforms.destroy(), null === (QQ = this.ramp) || void 0 === QQ || QQ.destroy()
      }
    }
    class AF {
      constructor(QQ, WQ) {
        this.device = QQ, this.resources = WQ, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, AW.e)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (QQ, WQ) => (this.bindTarget(WQ), {
            renderable: this.renderable,
            pipeline: hW(this.device, WQ),
            draw: QQ => WQ === this.preparedTarget ? this.draw(QQ) : 0
          })
        }
      }
      rebind(QQ) {
        this.device = QQ, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [WQ, XQ] of this.systems) {
          const wQ = new cF(QQ, WQ, XQ.frameIndex, this.bindings),
            qQ = WQ.ring.drawCount();
          qQ > 0 && wQ.upload(0, qQ), this.systems.set(WQ, wQ)
        }
      }
      build() {
        const {
          device: QQ
        } = this, WQ = QQ.createBindGroupLayout({
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
        this.frameLayout = QQ.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = QQ.createPipelineLayout({
          bindGroupLayouts: [vW(QQ), WQ, this.frameLayout]
        }), this.module = QQ.createShaderModule({
          label: "particles",
          code: hF
        });
        const XQ = QQ.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        QQ.queue.writeTexture({
          texture: XQ
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: WQ,
          rampSampler: QQ.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: XQ.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get dqQ() {
        return this.systems.size
      }
      reset() {
        for (const QQ of this.systems.keys()) QQ.reset()
      }
      describePendingWork() {
        return (0, UF.d)(this.systems.keys(), "Lite")
      }
      rC(QQ, WQ) {
        const XQ = new UF.c(QQ, WQ, this);
        return this.systems.set(XQ, new cF(this.device, XQ, this.allocateFrameIndex(), this.bindings)), XQ
      }
      WQQ(QQ, WQ) {
        for (const XQ of this.systems.keys()) XQ.WQQ(QQ, WQ)
      }
      canDraw(QQ) {
        const WQ = this.systems.get(QQ),
          XQ = QQ.texture ? this.resources.boundTexture(QQ.texture) : null;
        if (!WQ || !XQ || !this.targetPipelines) return !1;
        if (WQ.texture = XQ, WQ.pipelines.length = 0, !qW(QQ.blendMode)) return this.warnOnce(`blend:${QQ.blendMode}`, `particle blend mode ${QQ.blendMode} is not drawn (${QQ.name})`), !0;
        const wQ = (0, xQ.l)(QQ.blendMode);
        for (const qQ of wQ) {
          const QQ = this.pipelineFor(qQ);
          if (!1 === QQ) return WQ.pipelines.length = 0, !0;
          QQ && WQ.pipelines.push(QQ)
        }
        return WQ.pipelines.length === wQ.length
      }
      disposeStopped(QQ) {
        QQ.dispose()
      }
      remove(QQ) {
        const WQ = this.systems.get(QQ);
        WQ && (this.systems.delete(QQ), WQ.destroy(), this.freeFrameIndices.push(WQ.frameIndex))
      }
      prepare(QQ) {
        const WQ = QQ.animationRatio || 1;
        iW(this.renderable._worldCenter, QQ, HW), this.preparedTarget = this.target, this.draws.length = 0;
        let XQ = 0;
        for (const wQ of this.systems.values()) {
          const QQ = wQ.system;
          if (!QQ.animateIfActive(WQ)) continue;
          if (QQ.ring.takeUploads(wQ.upload), !QQ.hasLiveParticles() || 0 === wQ.pipelines.length) continue;
          wQ.writeUniforms(this.warnOnce), wQ.bind();
          const qQ = 64 * wQ.frameIndex;
          wQ.count = QQ.ring.drawCount(), lF(QQ, this.frameData, this.frameBits, qQ), XQ = Math.max(XQ, qQ + 64), this.draws.push(wQ)
        }
        XQ > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, XQ)
      }
      draw(QQ) {
        let WQ = 0,
          XQ = null;
        for (const wQ of this.draws) {
          QQ.setBindGroup(1, wQ.bindGroup), QQ.setBindGroup(2, this.frameBindGroup, [256 * wQ.frameIndex]);
          for (const qQ of wQ.pipelines) qQ !== XQ && (QQ.setPipeline(qQ), XQ = qQ), QQ.draw(4, wQ.count), WQ++
        }
        return WQ
      }
      bindTarget(QQ) {
        this.target = QQ;
        const WQ = `${QQ._colorFormat}|${QQ._depthStencilFormat}|${QQ._depthCompare}|${QQ._sampleCount}`;
        let XQ = this.pipelines.get(WQ);
        XQ || (XQ = new Map, this.pipelines.set(WQ, XQ)), this.targetPipelines = XQ
      }
      pipelineFor(QQ) {
        var WQ;
        const XQ = this.targetPipelines,
          wQ = XQ.get(QQ);
        if (void 0 !== wQ) return wQ;
        XQ.set(QQ, null);
        const qQ = this.target,
          TQ = QQ === xQ.c,
          zQ = null !== (WQ = qQ._depthCompare) && void 0 !== WQ ? WQ : dW,
          {
            device: sQ
          } = this;
        return sQ.createRenderPipelineAsync({
          label: `particles-${QQ}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: DW({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: TQ ? 1 : 0
            }
          }, qQ, TW((0, xQ.i)(QQ))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: qQ._depthStencilFormat ? {
            format: qQ._depthStencilFormat,
            depthCompare: zQ,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: qQ._sampleCount
          }
        }).then((WQ => {
          XQ.set(QQ, WQ)
        }), (WQ => {
          XQ.set(QQ, !1), console.error("Lite particle pipeline failed", WQ), gW(sQ, "particles", `blend-${QQ}`, WQ)
        })), null
      }
      allocateFrameIndex() {
        const QQ = this.freeFrameIndices.pop();
        if (void 0 !== QQ) return QQ;
        const WQ = this.nextFrameIndex++;
        if (64 * (WQ + 1) > this.frameData.length) {
          const QQ = new Float32Array(2 * this.frameData.length);
          QQ.set(this.frameData), this.frameData = QQ, this.frameBits = new Uint32Array(QQ.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return WQ
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
    class RF {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.lite = QQ, this.canvas = WQ, this.info = XQ, this.resources = qQ, this.vwQ = !1, this.needPOTTextures = !1, this.o4 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = WQ.width, this.renderHeight = WQ.height, this.caps = {
          maxTextureSize: wQ.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: wQ.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(QQ) {
        this.lite = QQ, (0, SQ.n)(QQ, this.renderWidth, this.renderHeight)
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
      setSize(QQ, WQ) {
        if (this.renderWidth === QQ && this.renderHeight === WQ) return !1;
        const XQ = this.renderWidth,
          wQ = this.renderHeight;
        this.renderWidth = QQ, this.renderHeight = WQ;
        const qQ = this.lite;
        if (null === qQ) return !0;
        try {
          (0, SQ.n)(qQ, QQ, WQ)
        } catch (TQ) {
          if (TQ instanceof DOMException && "InvalidStateError" === TQ.name) {
            this.renderWidth = XQ, this.renderHeight = wQ;
            try {
              (0, SQ.n)(qQ, XQ, wQ)
            } catch {
              this.canvas.width = XQ, this.canvas.height = wQ
            }
            return console.warn("WebGPU could not allocate render targets for resize", QQ, WQ, TQ.message), !1
          }
          throw TQ
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
      bD() {
        const QQ = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : QQ - this.lastFrameTime, this.lastFrameTime = QQ
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(QQ, WQ) {
        const XQ = document.createElement("canvas");
        return XQ.width = QQ, XQ.height = WQ, XQ
      }
      K4(QQ, WQ) {
        var XQ;
        return null !== (XQ = this.resources.K4.get(QQ)) && void 0 !== XQ ? XQ : new rW(this.resources, QQ, WQ)
      }
      atlasArrays(QQ) {
        return this.resources.atlasArrays(QQ)
      }
    }
    class EF {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(QQ) {
        this.fov = QQ.fov, this.nearPlane = QQ.near, this.farPlane = QQ.far;
        const WQ = QQ.worldMatrix;
        for (let XQ = 0; XQ < 16; XQ++)
          if (this.worldMatrix[XQ] !== WQ[XQ]) return this.worldMatrix.set(WQ), void this.worldMatrixVersion++
      }
    }
    class CF {
      constructor(QQ, WQ, XQ, wQ) {
        this.canvas = WQ, this.options = XQ, this.MWQ = void 0, this.backendName = "WebGPU (Lite)", this.i_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new EF, this.lastFrameTime = 0, this.engine = void 0, this.cB = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.nj = null, this.firstTerrain = null, this.trialFrames = 0, this.install(QQ);
        const {
          resources: qQ,
          meshes: TQ
        } = QQ;
        this.resources = qQ, this.particles = QQ.particles, this.MWQ = new RF(QQ.engine, WQ, wQ, QQ.device.limits, qQ), (0, lQ.K)({
          Ds: QQ => {
            AQ(QQ) && qQ.textureSlot(QQ)
          },
          loaded: QQ => AQ(QQ) ? qQ.textureLoaded(QQ) : null,
          canvasUpdated: (QQ, WQ, XQ) => {
            AQ(QQ) && qQ.canvasUpdated(QQ, WQ, XQ)
          }
        }), this.i_ = TQ.i_, this.modelMeshes = TQ.modelMeshes
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
      install(QQ) {
        this.engine = QQ.engine, this.cB = QQ.cB, this.sceneTask = QQ.sceneTask, this.device = QQ.device, this.liteTerrain = QQ.terrain, this.meshes = QQ.meshes, this.sunShadow = QQ.sunShadow;
        const WQ = new eQ(QQ.device.lost);
        this.refusals = WQ, WQ.deviceLost.then((() => {
          var WQ;
          WQ = QQ.device, FW.add(WQ)
        })), QQ.cB.camera = this.camera
      }
      async rebuild() {
        var QQ, WQ, XQ, wQ, qQ;
        const TQ = await fF();
        this.halted = !0, this.liteTerrain.retire(), null === (QQ = this.sunShadow) || void 0 === QQ || QQ.dispose(), this.MWQ.detach();
        try {
          (0, tQ.e)(this.engine)
        } catch (gQ) {
          console.warn("Lite: disposing the lost device's engine threw", gQ)
        }
        const zQ = {
            width: this.MWQ.renderWidth,
            height: this.MWQ.renderHeight
          },
          sQ = await SF(this.canvas, this.options, zQ, TQ),
          FQ = GW(sQ),
          PQ = tF(FQ);
        try {
          this.resources.rebind(sQ, FQ), this.particles.rebind(FQ), this.i_.dropSteady();
          const QQ = {
              resources: this.resources,
              particles: this.particles,
              i_: this.i_,
              modelMeshes: this.modelMeshes
            },
            WQ = await oF(sQ, FQ, this.options, QQ),
            XQ = PQ();
          if (null !== XQ) throw new Error(`WebGPU device lost while Lite was rebuilding (${XQ.reason}): ${XQ.message}`);
          const {
            r: wQ,
            g: qQ,
            b: TQ
          } = this.cB.clearColor;
          this.install(WQ), this.setClearColour(wQ, qQ, TQ), this.MWQ.rebind(sQ)
        } catch (gQ) {
          throw FQ.destroy(), gQ
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (WQ = this.nj) || void 0 === WQ || WQ.resize(), null === (XQ = this.nj) || void 0 === XQ || null === (wQ = XQ.KJ) || void 0 === wQ || null === (qQ = wQ.RD) || void 0 === qQ || qQ.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((QQ, WQ) => {
          this.firstTerrain = {
            drawn: QQ,
            failed: WQ
          }
        }))
      }
      get castsEntitySunShadows() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.sunShadow) || void 0 === WQ ? void 0 : WQ.tracesEntities) && void 0 !== QQ && QQ
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(QQ) {
        this.nj = QQ, this.modelMeshes.attach(QQ.model, QQ.sceneMirror);
        const WQ = QQ.cB;
        this.setClearColour(WQ.clearColor.r, WQ.clearColor.g, WQ.clearColor.b), WQ.draw = () => {
          this.drawFrame(QQ, WQ)
        }
      }
      get pj() {
        return !this.refusals.lost && !this.halted
      }
      render(QQ) {
        if (this.pj) {
          try {
            this.MWQ.bD(), QQ.cB.render()
          } catch (WQ) {
            throw this.refusals.frameFailed(WQ), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(WQ), this.firstTerrain = null), WQ
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var QQ, WQ, XQ, wQ;
        const qQ = [...this.particles.describePendingWork(), ...null !== (QQ = null === (WQ = this.sunShadow) || void 0 === WQ ? void 0 : WQ.describePendingWork()) && void 0 !== QQ ? QQ : []],
          TQ = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (XQ = this.terrain.sceneDepth) && void 0 !== XQ && XQ.compiling ? 1 : 0) + (null !== (wQ = this.terrain.shadowMask) && void 0 !== wQ && wQ.compiling ? 1 : 0);
        TQ > 0 && qQ.push(`${TQ} Lite pipelines compiling`);
        const zQ = this.terrain.buffersAwaitingVerdict;
        zQ > 0 && qQ.push(`${zQ} Lite terrain buffers awaiting their out-of-memory verdict`);
        const sQ = this.resources.texturesLoading;
        return sQ > 0 && qQ.push(`${sQ} Lite textures loading`), qQ
      }
      prepareTexture(QQ) {
        return null !== this.resources.boundTexture(QQ) || this.resources.textureFailed(QQ)
      }
      drawFrame(QQ, WQ) {
        var XQ, wQ, qQ, TQ, zQ, sQ;
        const FQ = ps(QQ);
        this.camera.copyFromView(FQ), this.setClearColour(FQ.clearColour[0], FQ.clearColour[1], FQ.clearColour[2]), null === (XQ = this.sunShadow) || void 0 === XQ || XQ.prepare(QQ.KJ, FQ.eye, null !== (wQ = QQ.KJ.xI) && void 0 !== wQ ? wQ : null), this.terrain.prepare(QQ, FQ), null === (qQ = this.terrain.sceneDepth) || void 0 === qQ || qQ.setPlanes(FQ.near, FQ.far), null === (TQ = this.terrain.shadowMask) || void 0 === TQ || TQ.prepare(FQ), Xs(this.sceneTask), this.meshes.prepare(WQ, FQ, QQ.model.earthSky, null !== (zQ = QQ.KJ.xI) && void 0 !== zQ ? zQ : null), this.particles.prepare(FQ);
        const PQ = performance.now();
        this.resources.flushUploads(), null === (sQ = this.sunShadow) || void 0 === sQ || sQ.traceEntities(this.meshes);
        try {
          (0, SQ.j)(this.engine, this.lastFrameTime > 0 ? PQ - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = PQ, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(PQ), this.firstTerrain = null)
      }
      setClearColour(QQ, WQ, XQ) {
        const wQ = this.cB.clearColor;
        wQ.r = QQ, wQ.g = WQ, wQ.b = XQ, wQ.a = 1
      }
    }

    function uF(QQ) {
      const WQ = {};
      for (const XQ in QQ.limits) {
        const wQ = QQ.limits[XQ];
        "number" === typeof wQ && (WQ[XQ] = wQ)
      }
      return WQ
    }
    const LF = "WebGPU device lost while Lite was starting";
    async function kF(QQ, WQ) {
      const XQ = await fF(),
        wQ = XQ.info,
        qQ = {
          vendor: (null === wQ || void 0 === wQ ? void 0 : wQ.vendor) || "unknown vendor",
          renderer: (null === wQ || void 0 === wQ ? void 0 : wQ.architecture) || "unknown renderer",
          version: (null === wQ || void 0 === wQ ? void 0 : wQ.description) || "unknown version"
        };
      QQ.style.background = "black";
      const TQ = await SF(QQ, WQ, WQ.bufferSize, XQ),
        zQ = GW(TQ),
        sQ = tF(zQ);
      try {
        const XQ = new CF(await oF(TQ, zQ, WQ, null), QQ, WQ, qQ),
          wQ = sQ();
        if (null !== wQ) {
          const {
            reason: QQ,
            message: WQ
          } = wQ;
          throw Object.assign(new Error(`${LF} (${QQ}): ${WQ}`), {
            fallbackReason: LF
          })
        }
        return XQ
      } catch (FQ) {
        throw zQ.destroy(), null === sQ() ? FQ : (0, Ws.d)(FQ, "device")
      }
    }
    async function fF() {
      const QQ = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!QQ) throw (0, Ws.d)(new Error("No WebGPU adapter"), "no_adapter");
      return QQ
    }
    async function SF(QQ, WQ, XQ, wQ) {
      let qQ;
      try {
        qQ = await (0, SQ.d)(QQ, {
          msaaSamples: WQ.CXQ ? 4 : 1,
          requiredLimits: uF(wQ),
          alphaMode: "premultiplied"
        })
      } catch (zQ) {
        throw (0, Ws.d)(zQ, "#47" === (null === (TQ = zQ) || void 0 === TQ ? void 0 : TQ.message) ? "no_adapter" : "device")
      }
      var TQ;
      return null !== XQ && (0, SQ.n)(qQ, XQ.width, XQ.height), qQ
    }

    function tF(QQ) {
      let WQ = null;
      return QQ.lost.then((QQ => {
        WQ = QQ, console.error(`WebGPU device lost (${QQ.reason}): ${QQ.message}`)
      })), () => WQ
    }
    async function oF(QQ, WQ, XQ, wQ) {
      var qQ, TQ;
      let {
        sceneDepth: zQ,
        sunShadow: sQ
      } = XQ;
      const FQ = (0, oQ.c)(QQ),
        PQ = null !== (qQ = null === wQ || void 0 === wQ ? void 0 : wQ.resources) && void 0 !== qQ ? qQ : new mz(QQ, WQ),
        gQ = new XF(WQ),
        JQ = new Ez(WQ, PQ, (QQ => function(QQ, WQ) {
          for (const wQ of UW(QQ)) {
            var XQ;
            if (wQ._targetSignature === WQ) return null !== (XQ = wQ._sceneBG) && void 0 !== XQ ? XQ : null
          }
          return null
        }(FQ, QQ)), null === wQ || void 0 === wQ ? void 0 : wQ.i_, null === wQ || void 0 === wQ ? void 0 : wQ.modelMeshes),
        rQ = null !== (TQ = null === wQ || void 0 === wQ ? void 0 : wQ.particles) && void 0 !== TQ ? TQ : new AF(WQ, PQ);
      for (const BQ of function(QQ, WQ, XQ) {
          return [WQ.opaqueRenderable, QQ.opaqueRenderable, QQ.skyLastRenderable, XQ.renderable, WQ.transparentRenderable, QQ.transparentRenderable, QQ.frontRenderable]
        }(JQ, gQ, rQ)) pW(FQ, BQ);
      const IQ = function(QQ) {
        for (const WQ of UW(QQ))
          if ("cB" === WQ.name) return WQ;
        throw new Error("Lite: the scene has no render task named scene")
      }(FQ);
      zQ && gQ.installSceneDepth(IQ, QQ);
      const jQ = sQ ? new GF(WQ, sQ.entities) : null;
      return gQ.sunShadow = jQ, jQ && null !== sQ && void 0 !== sQ && sQ.entities && (gQ.shadowMask = new Cs(WQ, IQ, QQ, gQ)), JQ.sunShadow = jQ, await (0, oQ.g)(FQ), {
        engine: QQ,
        cB: FQ,
        sceneTask: IQ,
        device: WQ,
        terrain: gQ,
        meshes: JQ,
        sunShadow: jQ,
        resources: PQ,
        particles: rQ
      }
    }
  },
  40917: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => jQ,
      b: () => qQ,
      d: () => wQ,
      h: () => rQ,
      i: () => gQ,
      k: () => yQ,
      n: () => TQ,
      p: () => sQ,
      r: () => FQ,
      t: () => zQ,
      w: () => BQ,
      z: () => IQ
    });
    const wQ = 3,
      qQ = 0,
      TQ = 1,
      zQ = 2,
      sQ = {
        uniform: 3,
        Gr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      FQ = 10,
      PQ = "BloxdPackInputs",
      gQ = "bloxdPackInputs",
      JQ = [{
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
      rQ = 80;

    function IQ() {
      const QQ = JQ.map((QQ => {
        let {
          name: WQ,
          type: XQ
        } = QQ;
        return `    ${WQ}: ${XQ},\n`
      })).join("");
      return `struct ${PQ} {\n${QQ}}\n@group(${wQ}) @binding(${qQ}) var<uniform> ${gQ}: ${PQ};\n`
    }

    function jQ(QQ, WQ) {
      const XQ = new DataView(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, rQ),
        [wQ, qQ, TQ, zQ, sQ, FQ] = JQ;
      XQ.setFloat32(wQ.offset, WQ.seconds, !0), XQ.setUint32(qQ.offset, WQ.lit ? 1 : 0, !0);
      for (let PQ = 0; PQ < 3; PQ++) XQ.setInt32(TQ.offset + 4 * PQ, WQ.renderOffset[PQ], !0), XQ.setFloat32(zQ.offset + 4 * PQ, WQ.IQQ[PQ], !0), XQ.setFloat32(sQ.offset + 4 * PQ, WQ.eyePosition[PQ], !0), XQ.setFloat32(FQ.offset + 4 * PQ, WQ.shadowDirection[PQ], !0)
    }

    function BQ(QQ) {
      const WQ = new Uint32Array(Math.max(1, QQ.length));
      return QQ.forEach(((QQ, XQ) => {
        let {
          id: wQ,
          rotation: qQ
        } = QQ;
        WQ[XQ] = 65535 & wQ | (3 & qQ) << 16
      })), WQ
    }
    const yQ = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);