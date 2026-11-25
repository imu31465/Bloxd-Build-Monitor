export const id = 274;
export const ids = [274];
export const modules = {
  41624: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => qB,
      f: () => vB,
      i: () => GB,
      j: () => cB
    });
    var TB = ZB(37304),
      JB = ZB(38754),
      oB = ZB(38748);

    function GB(BB, IB, ZB, TB) {
      const JB = oB.v;
      IB.fill(0), BB.gravity.toArray(IB, JB.gravity), BB.colorDead.toArray(IB, JB.colorDead), ZB[JB.ramp] = BB.useRampGradients ? 1 : 0;
      const GB = BB.getColorGradients(),
        vB = zB(BB, GB, "colour", TB);
      ZB[JB.colorCount] = vB;
      for (let oB = 0; oB < vB; oB++) {
        var kB;
        const BB = GB[FB(GB, oB)];
        IB[JB.colorPositions + oB] = BB.gradient, BB.color1.toArray(IB, JB.color1 + 4 * oB), (null !== (kB = BB.color2) && void 0 !== kB ? kB : BB.color1).toArray(IB, JB.color2 + 4 * oB)
      }
      const cB = BB.getVelocityGradients(),
        nB = zB(BB, cB, "zq", TB);
      ZB[JB.velocityCount] = nB;
      for (let oB = 0; oB < nB; oB++) UB(IB, JB.zq + 4 * oB, cB[FB(cB, oB)]);
      const hB = BB.useRampGradients ? BB.getColorRemapGradients() : null,
        NB = zB(BB, hB, "colour remap", TB);
      ZB[JB.remapCount] = NB;
      for (let oB = 0; oB < NB; oB++) UB(IB, JB.remap + 4 * oB, hB[FB(hB, oB)])
    }

    function vB() {
      return {
        key: [],
        texels: new Uint8Array(4 * oB.n)
      }
    }
    const kB = [];

    function cB(BB, IB) {
      return nB(BB, kB), !yB(kB, IB.key) && (IB.key.length = 0, IB.key.push(...kB), IB.key.length > 0 && function(BB, IB) {
        for (let ZB = 0; ZB < oB.n; ZB++) JB.n.GetCurrentGradient(ZB / oB.n, BB, ((BB, IB, ZB) => {
          TB.Color3.LerpToRef(BB.color, IB.color, ZB, hB)
        })), IB[4 * ZB] = 255 * hB.r, IB[4 * ZB + 1] = 255 * hB.g, IB[4 * ZB + 2] = 255 * hB.b, IB[4 * ZB + 3] = 255
      }(BB.getRampGradients(), IB.texels), !0)
    }

    function nB(BB, IB) {
      IB.length = 0;
      const ZB = BB.useRampGradients ? BB.getRampGradients() : null;
      if (null !== ZB && void 0 !== ZB && ZB.length) {
        IB.push(ZB.length);
        for (const BB of ZB) IB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
      }
    }
    const hB = new TB.Color3;

    function zB(BB, IB, ZB, TB) {
      return IB ? IB.length > oB.e ? (TB(`particleStops:${ZB}`, `GPU particles use the first 2 and last ${oB.e-2} of more than ${oB.e} ${ZB} gradient stops (${BB.name})`), oB.e) : IB.length : 0
    }

    function FB(BB, IB) {
      return IB < 2 || BB.length <= oB.e ? IB : BB.length - oB.e + IB
    }
    const NB = new Float32Array(oB.r),
      gB = new Uint32Array(NB.buffer);

    function qB(BB, IB, ZB) {
      return GB(BB, NB, gB, ZB), IB && yB(gB, IB) ? null : gB.slice()
    }

    function yB(BB, IB) {
      if (BB.length !== IB.length) return !1;
      for (let ZB = 0; ZB < BB.length; ZB++)
        if (BB[ZB] !== IB[ZB]) return !1;
      return !0
    }

    function UB(BB, IB, ZB) {
      var TB;
      BB[IB] = ZB.gradient, BB[IB + 1] = ZB.factor1, BB[IB + 2] = null !== (TB = ZB.factor2) && void 0 !== TB ? TB : ZB.factor1
    }
  },
  41184: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      const TB = IB * IB * 4,
        JB = BB[0].layers,
        oB = JB * (BB.length - 1) + BB[BB.length - 1].layers,
        GB = new Uint8Array(oB * TB);
      BB.forEach(((IB, ZB) => {
        const oB = ZB + 1 < BB.length ? Math.min(IB.layers, JB) : IB.layers;
        GB.set(new Uint8Array(IB.pixels.buffer, IB.pixels.byteOffset, oB * TB), ZB * JB * TB)
      }));
      const vB = Math.max(1, Math.min(oB, ZB || oB));
      if (vB === oB) return [{
        pixels: GB,
        layers: oB
      }];
      const kB = [];
      for (let cB = 0; cB < oB; cB += vB) {
        const BB = Math.min(oB, cB + vB);
        kB.push({
          pixels: GB.slice(cB * TB, BB * TB),
          layers: BB - cB
        })
      }
      return kB
    }
    ZB.d(IB, {
      c: () => TB,
      d: () => oB
    });
    const JB = new WeakMap;

    function oB(BB, IB, ZB) {
      var TB, oB;
      const GB = null !== (TB = JB.get(BB)) && void 0 !== TB ? TB : new Map;
      JB.set(BB, GB);
      const vB = null !== (oB = GB.get(IB[0])) && void 0 !== oB ? oB : [];
      GB.set(IB[0], vB);
      const kB = vB.find((BB => BB.urls.length === IB.length && BB.urls.every(((BB, ZB) => BB === IB[ZB]))));
      if (kB) return kB.built;
      const cB = {
        urls: [...IB],
        built: ZB()
      };
      return vB.push(cB), cB.built.catch((() => {
        vB.splice(vB.indexOf(cB), 1)
      })), cB.built
    }
  },
  41622: (BB, IB, ZB) => {
    function TB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const IB = new Set;
      return (ZB, TB) => {
        IB.has(ZB) || (IB.add(ZB), console.warn(BB + TB))
      }
    }
    ZB.d(IB, {
      c: () => TB
    })
  },
  41663: (BB, IB, ZB) => {
    ZB.d(IB, {
      createLiteRendererAsync: () => Xk,
      liteBabylonBackend: () => LB,
      setPipelineFailureHook: () => vI
    });
    var TB = ZB(37304),
      JB = ZB(37668),
      oB = ZB(37956),
      GB = ZB(37248),
      vB = ZB(37966);
    class kB extends vB.c {
      constructor() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        super(...IB), this.color = new TB.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: IB[0].JR().getUniqueId(),
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
          needAlphaBlendingForMesh: BB => BB.visibility < 1 || BB.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const cB = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      nB = BB => 1 << cB.indexOf(BB),
      hB = nB("VERTEXCOLOR"),
      zB = nB("INSTANCES"),
      FB = nB("THIN_INSTANCES"),
      NB = nB("INSTANCESCOLOR"),
      gB = nB("FOG"),
      qB = nB("LITE_FRONT_LAYER");

    function yB(BB, IB, ZB, TB) {
      let JB = 0;
      return BB.isVerticesDataPresent("color") && (JB |= hB), "none" !== IB && (JB |= zB), "thin" === IB && (JB |= FB, BB.isVerticesDataPresent("instanceColor") && (JB |= NB)), TB.fogEnabled && BB.applyFog && 0 !== TB.fogMode && (JB |= gB), ZB >= 1 && (JB |= qB), JB
    }

    function UB(BB, IB) {
      BB.updateColor4("color", IB.color, IB.alpha)
    }
    var WB = ZB(37897),
      dB = ZB(37477),
      CB = ZB(37336),
      QB = ZB(37223),
      sB = ZB(37878),
      wB = ZB(37890),
      OB = ZB(37243),
      YB = ZB(37246),
      iB = ZB(37253);
    const pB = QB.c.GLSL;
    class aB {
      constructor(BB, IB) {
        this.name = BB, this.lg = IB, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.oR = {
          addOnce: BB => {
            this.disposers.push(BB)
          }
        }, this.uniqueId = IB.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      JR() {
        return this.lg
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
      needAlphaBlendingForMesh(BB) {
        return (0, OB.P)(this.model, BB.visibility, BB.hasVertexAlpha)
      }
      needAlphaTestingForMesh(BB) {
        return (0, OB.S)(this.model, BB.visibility, BB.hasVertexAlpha)
      }
      dispose() {
        (0, dB.h)(this);
        for (const BB of this.disposers.splice(0)) BB()
      }
      get model() {
        return (0, OB._)(this)
      }
    }
    const HB = new WeakSet;

    function MB(BB) {
      return HB.has(BB)
    }

    function jB(BB) {
      HB.add(BB)
    }
    const PB = {
      create: (BB, IB) => ((0, CB.q)(BB, new aB(BB.name, IB)), YB.d.defines()),
      write: () => {},
      addFeature: (BB, IB) => {
        const ZB = BB.mirror;
        IB.feature === wB.f && IB.state.dirLightCount > 0 && (BB.disableLighting = !0, (0, OB.Y)(BB)), "BLOXD_LIGHTING" in IB.defines && (0, dB.f)(ZB), IB.feature === sB.g && ((0, WB.i)(IB.state, pB), function(BB, IB) {
          const ZB = BB.JR().PN();
          setTimeout((() => {
            ZB.atlasArrays(IB.sources).then((ZB => {
              (0, WB.d)(BB, IB, ZB.map((BB => ({
                atlas: BB,
                layers: BB.layers
              }))), ZB[0].layerWidth, pB)
            })).catch((BB => {
              console.error("Failed to build the atlas's texture arrays", BB)
            }))
          }))
        }(ZB, IB.state))
      },
      texture: (BB, IB, ZB) => {
        let {
          data: TB,
          sets: JB
        } = ZB;
        var oB;
        (jB(BB), TB) && (BB.uvSet = null !== (oB = null === JB || void 0 === JB ? void 0 : JB.coordinatesIndex) && void 0 !== oB ? oB : 0, (0, CB.eb)(BB.matrix, null !== JB && void 0 !== JB ? JB : {}))
      },
      cube: jB,
      canvas: (BB, IB, ZB) => {
        let {
          width: TB,
          height: JB,
          mipmaps: oB,
          samplingMode: GB = iB.j.trilinear,
          hasAlpha: vB = !1,
          wrap: kB = iB.c.clamp
        } = ZB;
        const cB = BB.PN().createCanvas(TB, JB),
          nB = new iB.l("2d", {
            kind: "canvas",
            width: TB,
            height: JB,
            canvas: cB
          }, {
            samplingMode: GB,
            wrapU: kB,
            wrapV: kB,
            noMipmap: !oB,
            invertY: !0
          });
        return nB.hasAlpha = vB, jB(nB), nB
      }
    };
    var RB = ZB(37495),
      rB = ZB(37153);
    class mB {
      constructor(BB, IB, ZB) {
        this.engine = BB, this.clearColor = IB, this.ambientColor = ZB, this.onBeforeRenderObservable = new rB.b, this.onBeforeCameraRenderObservable = new rB.b, this.onAfterRenderObservable = new rB.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.DW = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      PN() {
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
      addPendingData(BB) {
        this.pending.push(BB)
      }
      removePendingData(BB) {
        const IB = this.pending.indexOf(BB); - 1 !== IB && this.pending.splice(IB, 1)
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

    function XB() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const LB = {
      bZB: XB,
      zJB: (BB, IB) => {
        const ZB = new mB(BB.engine, TB.e.FromArray(IB.clearColor), TB.Color3.FromArray(IB.ambientColor));
        (0, GB.e)(PB, ZB), BB.lg = ZB,
          function(BB, IB) {
            const ZB = Object.assign((0, RB.e)(BB, "camera"), {
              layerMask: 268435455
            });
            BB.model.nodes.setWorldSource(ZB.row, BB.model.view.worldMatrix), BB.camera = IB.activeCamera = ZB
          }(BB, ZB), (0, JB.h)(BB, ((BB, IB, ZB) => (0, oB.f)(BB, IB, ZB, vB.c)))
      },
      kJB: () => {},
      setBabylonFog: () => {},
      NJB: XB,
      UJB: () => {},
      linesFromArrays: (BB, IB, ZB) => (0, oB.f)(BB, IB, ZB, kB),
      Ag: () => {},
      yJB: XB
    };
    var eB = ZB(41728),
      uB = ZB(41736),
      fB = ZB(41745);
    class lB {
      constructor(BB) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const IB = new Promise((BB => {
          this.refused = BB
        }));
        this.deviceLost = Promise.race([BB, IB]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(BB) {
        (function(BB) {
          const {
            name: IB,
            message: ZB
          } = null !== BB && void 0 !== BB ? BB : {};
          return "InvalidStateError" === IB && "string" === typeof ZB && ZB.startsWith("GPUDevice.")
        })(BB) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: BB.message,
          framesRefused: !0
        }))
      }
    }
    var AB = ZB(41184),
      tB = ZB(38761);

    function bB(BB) {
      return Math.max(4, 4 * Math.ceil(BB / 4))
    }

    function xB(BB, IB, ZB, TB) {
      const JB = BB.createBuffer({
        label: TB,
        size: bB(IB.byteLength),
        usage: ZB,
        mappedAtCreation: !0
      });
      return new Uint8Array(JB.getMappedRange(), 0, IB.byteLength).set(new Uint8Array(IB.buffer, IB.byteOffset, IB.byteLength)), JB.unmap(), JB
    }

    function EB(BB, IB) {
      return Math.floor(Math.log2(Math.max(BB, IB))) + 1
    }

    function DB(BB, IB, ZB, TB, JB, oB) {
      const GB = BB.createTexture({
          label: oB,
          size: {
            width: ZB,
            height: TB,
            depthOrArrayLayers: JB
          },
          format: "rgba8unorm",
          mipLevelCount: EB(ZB, TB),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        vB = (IB, ZB, TB, oB) => {
          BB.queue.writeTexture({
            texture: GB,
            mipLevel: ZB
          }, IB, {
            bytesPerRow: 4 * TB,
            rowsPerImage: oB
          }, {
            width: TB,
            height: oB,
            depthOrArrayLayers: JB
          })
        };
      vB(IB, 0, ZB, TB);
      let kB = 1;
      for (const cB of function*(BB, IB, ZB, TB) {
          let JB = BB,
            oB = IB,
            GB = ZB;
          for (; oB > 1 || GB > 1;) {
            const BB = Math.max(1, oB >> 1),
              IB = Math.max(1, GB >> 1),
              ZB = new Uint8Array(BB * IB * TB * 4),
              vB = 4 * oB;
            let kB = 0;
            for (let cB = 0; cB < TB; cB++) {
              const TB = cB * vB * GB;
              for (let cB = 0; cB < IB; cB++) {
                const IB = TB + Math.min(2 * cB, GB - 1) * vB,
                  nB = TB + Math.min(2 * cB + 1, GB - 1) * vB;
                for (let TB = 0; TB < BB; TB++) {
                  const BB = 4 * Math.min(2 * TB, oB - 1),
                    GB = 4 * Math.min(2 * TB + 1, oB - 1);
                  for (let TB = 0; TB < 4; TB++) ZB[kB++] = JB[IB + BB + TB] + JB[IB + GB + TB] + JB[nB + BB + TB] + JB[nB + GB + TB] + 2 >> 2
                }
              }
            }
            yield {
              data: ZB,
              width: BB,
              height: IB
            }, JB = ZB, oB = BB, GB = IB
          }
        }(IB, ZB, TB, JB)) vB(cB.data, kB++, cB.width, cB.height);
      return GB
    }
    const KB = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function VB(BB) {
      if (BB.startsWith("data:")) {
        const IB = BB.search(/[;,]/);
        return `data:${IB>5?BB.slice(5,IB):""} URL of ${BB.length} characters`
      }
      return BB.length > 80 ? `${BB.slice(0,80)}...` : BB
    }
    async function SB(BB) {
      const IB = await fetch(BB);
      if (!IB.ok) throw new Error(`${VB(BB)}: ${IB.status} ${IB.statusText}`);
      return createImageBitmap(await IB.blob(), KB)
    }
    async function BI(BB) {
      const IB = await SB(BB),
        ZB = new OffscreenCanvas(IB.width, IB.height),
        TB = ZB.getContext("2d", {
          willReadFrequently: !0
        });
      if (!TB) throw new Error("No 2D context to decode an image");
      TB.drawImage(IB, 0, 0);
      const {
        data: JB
      } = TB.getImageData(0, 0, IB.width, IB.height);
      return IB.close(), {
        pixels: new Uint8Array(JB.buffer, JB.byteOffset, JB.byteLength),
        width: ZB.width,
        height: ZB.height
      }
    }

    function II(BB, IB) {
      return (0, AB.d)(BB, IB.urls, (async () => {
        const ZB = await Promise.all(IB.urls.map((async (BB, ZB) => {
            var TB, JB, oB, GB, vB;
            return null !== (GB = null !== (JB = null === (oB = IB.pixels) || void 0 === oB ? void 0 : oB[ZB]) && void 0 !== JB ? JB : null, vB = IB.layerWidth, TB = null !== GB && void 0 !== GB && GB.byteLength && vB && GB.byteLength % (vB * vB * 4) === 0 ? {
              pixels: GB,
              layerWidth: vB,
              layers: GB.byteLength / (vB * vB * 4)
            } : null) && void 0 !== TB ? TB : await async function(BB) {
              const {
                pixels: IB,
                width: ZB
              } = await BI(BB);
              return {
                pixels: IB,
                layerWidth: ZB,
                layers: IB.byteLength / (ZB * ZB * 4)
              }
            }(BB)
          }))),
          TB = ZB[0].layerWidth;
        return (0, AB.c)(ZB, TB, BB.limits.maxTextureArrayLayers).map(((ZB, JB) => {
          let {
            pixels: oB,
            layers: GB
          } = ZB;
          return {
            texture: DB(BB, oB, TB, TB, GB, `atlas-${JB}-${VB(IB.urls[0])}`),
            layerWidth: TB,
            layers: GB
          }
        }))
      }))
    }
    const ZI = new Map([
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
      TI = new Map([
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

    function JI(BB) {
      for (const IB of (0, tB.k)(BB))
        if (!TI.has((0, tB.j)(IB))) return !1;
      return !0
    }

    function oI(BB) {
      const IB = TI.get(BB);
      if (!IB) return null;
      const [ZB, TB, JB] = IB;
      return {
        srcFactor: ZI.get(ZB),
        dstFactor: ZI.get(TB),
        operation: JB
      }
    }
    let GI = null;

    function vI(BB) {
      GI = BB
    }
    const kI = new WeakSet;

    function cI(BB) {
      return kI.has(BB)
    }

    function nI(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var oB;
      cI(BB) || (null === (oB = GI) || void 0 === oB || oB(IB, ZB, TB, JB))
    }
    class hI {
      constructor(BB) {
        this.resources = BB, this.matrixKey = {
          ah: 0
        }, this.attributesKey = {
          ah: 0
        }, this.inputs = Object.create(null);
        for (let IB = 0; IB < 4; IB++) this.inputs[`world${IB}`] = new NI(this.matrixKey, 16 * IB, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(BB, IB) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, BB, !0), IB && this.resources.vertexBufferCreated(this.attributesKey, IB, !0)
      }
    }
    class zI extends hI {
      constructor(BB, IB, ZB) {
        super(BB), this.mesh = IB, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const TB = this.inputs;
        let JB = 0;
        for (const {
            size: GB
          }
          of ZB) JB += GB;
        for (const {
            name: GB,
            offset: vB,
            size: kB,
            type: cB
          }
          of ZB) TB[GB] = new NI(this.attributesKey, 4 * vB, 4 * JB, kB, !0, cB);
        this.rowStride = JB, BB.I5.set(IB, this);
        const oB = IB.isVerticesDataPresent;
        IB.isVerticesDataPresent = (BB, ZB) => BB in TB || oB.call(IB, BB, ZB)
      }
      attach(BB, IB) {
        this.matrices = BB, this.attributes = IB, this.bind(BB, IB), this.mirror(BB, BB.length, BB.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      w6(BB) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, BB ? 64 * BB : void 0)
      }
      i6() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(BB, IB) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * BB, 16 * IB)
      }
      attributeRows(BB, IB) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, BB * this.rowStride, IB * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(BB, IB, ZB) {
        const TB = this.mesh._thinInstanceDataStorage;
        TB.matrixData = BB, TB.matrixBufferSize = IB, TB.worldMatrices = null, TB.instancesCount = ZB
      }
    }
    class FI extends hI {
      constructor(BB, IB, ZB) {
        var TB, JB, oB, GB;
        super(BB), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.interleavedKinds) && void 0 !== TB ? TB : null, this.offsets = null !== (JB = null === ZB || void 0 === ZB ? void 0 : ZB.interleavedOffsets) && void 0 !== JB ? JB : [], this.rowStride = null !== (oB = null === ZB || void 0 === ZB ? void 0 : ZB.interleavedRowStride) && void 0 !== oB ? oB : 0, null === (GB = this.layout) || void 0 === GB || GB.forEach(((BB, IB) => {
          this.inputs[BB] = new NI(this.attributesKey, 4 * this.offsets[IB], 4 * this.rowStride, ZB.strides[BB])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), BB.batchUploads.set(IB, this), IB.oR.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(BB) {
        const IB = this.packedBatch;
        return IB.renderSelf ? 0 === BB ? this.packedSource : IB.instances[BB - 1] : IB.instances[BB]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(BB, IB, ZB, TB) {
        const JB = (IB.renderSelf ? 1 : 0) + IB.rows.length;
        if (this.frame = TB, this.count = JB, this.packedSource = BB, this.packedBatch = IB, 0 === JB) return;
        if (BB.getWorldMatrix(), 16 * JB > this.matrices.length) {
          let BB = this.matrices.length / 16;
          for (; BB < JB;) BB *= 2;
          this.matrices = new Float32Array(16 * BB), this.attributes &&= new Float32Array(BB * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let oB = 0;
        IB.renderSelf && this.packRow(oB++, BB, IB.row, ZB);
        for (let GB = 0; GB < IB.rows.length; GB++) this.packRow(oB++, IB.instances[GB], IB.rows[GB], ZB);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * JB), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, JB * this.rowStride)
      }
      packRow(BB, IB, ZB, TB) {
        const JB = this.matrices;
        if (ZB < 0) JB.set(IB.getWorldMatrix().m, 16 * BB);
        else
          for (let cB = 0; cB < 16; cB++) JB[16 * BB + cB] = TB[16 * ZB + cB];
        const oB = this.attributes;
        if (!oB) return;
        const GB = IB.Zm,
          vB = this.layout;
        for (let cB = 0; cB < vB.length; cB++) {
          var kB;
          const IB = null !== (kB = GB[vB[cB]]) && void 0 !== kB ? kB : 0,
            ZB = BB * this.rowStride + this.offsets[cB];
          IB.toArray ? IB.toArray(oB, ZB) : IB.copyToArray ? IB.copyToArray(oB, ZB) : oB[ZB] = IB
        }
      }
    }
    class NI {
      constructor(BB, IB, ZB, TB) {
        let JB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = BB, this.byteOffset = IB, this.byteStride = ZB, this.size = TB, this.instanced = JB, this.type = oB, this.normalized = GB
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
    const gI = "CANVAS_ALPHA_ONE",
      qI = `override ${gI}: bool = false;`,
      yI = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function UI(BB, IB, ZB) {
      var TB;
      let JB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const oB = null !== (TB = IB._colorFormat) && void 0 !== TB ? TB : "bgra8unorm",
        GB = JB ? 15 : 0;
      return ZB ? {
        ...BB,
        targets: [{
          format: oB,
          blend: {
            color: ZB,
            alpha: yI
          },
          writeMask: GB
        }]
      } : {
        ...BB,
        constants: {
          ...BB.constants,
          [gI]: 1
        },
        targets: [{
          format: oB,
          writeMask: GB
        }]
      }
    }

    function WI(BB, IB) {
      BB._renderables.push(IB)
    }

    function dI(BB) {
      return BB._device
    }

    function CI(BB) {
      var IB, ZB;
      return null !== (IB = null === (ZB = BB._frameGraph) || void 0 === ZB ? void 0 : ZB._tasks) && void 0 !== IB ? IB : []
    }

    function QI(BB) {
      return BB._currentEncoder
    }

    function sI(BB) {
      return BB.createBindGroupLayout({
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
    const wI = "greater-equal",
      OI = 2e5,
      YI = 1e5,
      iI = new WeakMap;

    function pI(BB, IB) {
      let ZB = iI.get(BB);
      if (!ZB) {
        ZB = {
          module: BB.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, iI.set(BB, ZB)
      }
      const TB = `${IB._colorFormat}|${IB._depthStencilFormat}|${IB._sampleCount}`;
      let JB = ZB.pipelines.get(TB);
      if (!JB) {
        var oB;
        const {
          module: GB
        } = ZB;
        JB = BB.createRenderPipeline({
          label: `placeholder ${TB}`,
          layout: BB.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: GB,
            entryPoint: "v"
          },
          fragment: {
            module: GB,
            entryPoint: "f",
            targets: [{
              format: null !== (oB = IB._colorFormat) && void 0 !== oB ? oB : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: IB._depthStencilFormat ? {
            format: IB._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: IB._sampleCount
          }
        }), ZB.pipelines.set(TB, JB)
      }
      return JB
    }

    function aI(BB, IB, ZB) {
      const TB = IB.eye,
        JB = IB.viewMatrix;
      BB[0] = TB[0] + JB[2] * ZB, BB[1] = TB[1] + JB[6] * ZB, BB[2] = TB[2] + JB[10] * ZB
    }
    var HI = ZB(38010),
      MI = ZB(41622),
      jI = ZB(37239);
    const PI = Math.PI,
      RI = PI / 1.95,
      rI = [5e-4 / 94, 125e-7, 5e-4 / 18],
      mI = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((BB => {
        let [IB, ZB] = BB;
        return .434 * PI * Math.pow(2 * PI / IB, 2) * ZB
      }));

    function XI(BB, IB, ZB) {
      const {
        up: TB,
        mieDirectionalG: JB
      } = BB, oB = 1 - uI(1 - Math.exp(IB[1] / 45e4), 0, 1), GB = BB.rayleigh - (1 - oB), vB = Math.hypot(IB[0], IB[1], IB[2]), kB = vB > 0 ? 1 / vB : 0, cB = ZB.sunDir;
      for (let FB = 0; FB < 3; FB++) cB[FB] = IB[FB] * kB;
      const nB = cB[0] * TB[0] + cB[1] * TB[1] + cB[2] * TB[2],
        hB = 1e3 * Math.max(0, 1 - Math.exp(-(RI - Math.acos(uI(nB, -1, 1))) / 1.5));
      ZB.sunE = hB;
      const zB = .2 * BB.turbidity * 1e-17 * BB.mieCoefficient;
      for (let FB = 0; FB < 3; FB++) {
        const BB = rI[FB] * GB,
          IB = mI[FB] * zB,
          TB = hB / (BB + IB);
        ZB.inScatterR[FB] = BB * TB, ZB.inScatterM[FB] = IB * TB, ZB.extinctionBeta[FB] = 8400 * BB + 1250 * IB
      }
      return ZB.sunsetMix = uI(Math.pow(1 - nB, 5), 0, 1), ZB.sunDiscE = 19e3 * hB, ZB.mieScale = (1 - JB * JB) / (4 * PI), ZB.mieBase = 1 + JB * JB, ZB.mieSlope = 2 * JB, ZB
    }
    const LI = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const eI = 1 / function(BB) {
      const {
        A: IB,
        B: ZB,
        C: TB,
        D: JB,
        E: oB,
        F: GB
      } = LI;
      return (BB * (IB * BB + TB * ZB) + JB * oB) / (BB * (IB * BB + ZB) + JB * GB) - oB / GB
    }(1e3);

    function uI(BB, IB, ZB) {
      return Math.min(Math.max(BB, IB), ZB)
    }
    const fI = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function lI(BB, IB) {
      const ZB = new Map(IB),
        TB = [],
        JB = [],
        oB = () => 0 === JB.length || JB[JB.length - 1].active;
      let GB = null;
      const vB = () => {
        const BB = [...ZB].filter((BB => {
            let [, IB] = BB;
            return !0 !== IB
          })),
          IB = BB.map((BB => {
            let [IB] = BB;
            return IB
          })).join("|");
        GB = BB.length ? new RegExp(`\\b(${IB})\\b`, "g") : null
      };
      vB();
      for (const kB of BB.split("\n")) {
        const BB = fI.exec(kB);
        if (!BB) {
          oB() && TB.push(GB ? AI(kB, GB, ZB) : kB);
          continue
        }
        const IB = BB[1],
          cB = BB[2].trim();
        if ("ifdef" === IB || "ifndef" === IB || "if" === IB) {
          const BB = oB(),
            TB = "if" === IB ? tI(cB, ZB) : ZB.has(cB) === ("ifdef" === IB);
          JB.push({
            active: BB && TB,
            parentActive: BB,
            taken: TB
          })
        } else if ("elif" === IB || "else" === IB) {
          const BB = JB[JB.length - 1];
          if (!BB) throw new Error(`#${IB} without #if`);
          const TB = !BB.taken && ("else" === IB || tI(cB, ZB));
          BB.active = BB.parentActive && TB, BB.taken = BB.taken || TB
        } else if ("endif" === IB) {
          if (!JB.pop()) throw new Error("#endif without #if")
        } else if (oB()) {
          const [BB, ...TB] = cB.split(/\s+/);
          "undef" === IB ? ZB.delete(BB) : ZB.set(BB, !TB.length || TB.join(" ")), vB()
        }
      }
      if (JB.length) throw new Error("Unterminated #if");
      return TB.join("\n")
    }

    function AI(BB, IB, ZB) {
      return BB.replace(IB, (BB => {
        const IB = ZB.get(BB);
        return "string" === typeof IB ? IB : BB
      }))
    }

    function tI(BB, IB) {
      var ZB;
      const TB = null !== (ZB = BB.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== ZB ? ZB : [];
      let JB = 0;
      const oB = () => TB[JB],
        GB = () => TB[JB++],
        vB = BB => {
          const ZB = /^\d/.test(BB) ? BB : IB.get(BB);
          return "string" === typeof ZB ? parseInt(ZB) : Number.NaN
        },
        kB = () => {
          const BB = GB();
          if ("!" === BB) return !kB();
          if ("(" === BB) {
            const BB = nB();
            return GB(), BB
          }
          if ("defined" === BB) {
            const BB = "(" === oB();
            BB && GB();
            const ZB = GB();
            return BB && GB(), IB.has(ZB)
          }
          const ZB = oB();
          if ("==" === ZB || "!=" === ZB || ">" === ZB || "<" === ZB || ">=" === ZB || "<=" === ZB) {
            GB();
            const IB = vB(BB),
              TB = vB(GB());
            if (Number.isNaN(IB) || Number.isNaN(TB)) return !1;
            switch (ZB) {
              case "==":
                return IB === TB;
              case "!=":
                return IB !== TB;
              case ">":
                return IB > TB;
              case "<":
                return IB < TB;
              case ">=":
                return IB >= TB;
              default:
                return IB <= TB
            }
          }
          return IB.has(BB)
        },
        cB = () => {
          let BB = kB();
          for (;
            "&&" === oB();) {
            GB();
            const IB = kB();
            BB = BB && IB
          }
          return BB
        },
        nB = () => {
          let BB = cB();
          for (;
            "||" === oB();) {
            GB();
            const IB = cB();
            BB = BB || IB
          }
          return BB
        },
        hB = nB();
      if (JB !== TB.length) throw new Error(`Cannot evaluate #if ${BB}`);
      return hB
    }
    var bI = ZB(37231),
      xI = ZB(37576),
      EI = ZB(37582),
      DI = ZB(40741),
      KI = ZB(38807);
    const VI = 32,
      SI = [10, 3, 10],
      BZ = [21, 7, 21],
      IZ = BZ[0] * BZ[1] * BZ[2],
      ZZ = 0,
      TZ = 1,
      JZ = 2,
      oZ = 3,
      GZ = 64,
      vZ = 512,
      kZ = 4 * IZ,
      cZ = 1536,
      nZ = kZ + IZ * cZ,
      hZ = 1073741824,
      zZ = nZ + 1;

    function FZ(BB, IB) {
      const ZB = BB % IB;
      return ZB < 0 ? ZB + IB : ZB
    }

    function NZ(BB, IB, ZB) {
      return TB = FZ(BB, BZ[0]), JB = FZ(IB, BZ[1]), oB = FZ(ZB, BZ[2]), TB + BZ[0] * (JB + BZ[1] * oB);
      var TB, JB, oB
    }

    function gZ(BB, IB, ZB) {
      return BB + 8 * (IB + 8 * ZB)
    }

    function qZ(BB, IB, ZB) {
      return BB + 4 * (IB + 4 * ZB)
    }
    const yZ = 65535,
      UZ = 0,
      WZ = 1,
      dZ = 2,
      CZ = 3;

    function QZ(BB) {
      return Math.ceil(BB * BB / 32)
    }
    const sZ = 8192,
      wZ = 1 << 18,
      OZ = 65536,
      YZ = 294912,
      iZ = 128,
      pZ = 4096,
      aZ = 16,
      HZ = 16385,
      MZ = 81921,
      jZ = 147457,
      PZ = 4194304;
    const RZ = [0, 0, 0],
      rZ = [0, 0, 0];

    function mZ(BB, IB, ZB, TB) {
      ! function(BB, IB, ZB) {
        const [TB, JB, oB] = [BB[0], BB[1], BB[2]];
        let GB, vB, kB;
        Math.abs(JB) < .99 ? (GB = oB, vB = 0, kB = -TB) : (GB = -JB, vB = TB, kB = 0);
        const cB = Math.hypot(GB, vB, kB);
        IB[0] = GB / cB, IB[1] = vB / cB, IB[2] = kB / cB, ZB[0] = JB * IB[2] - oB * IB[1], ZB[1] = oB * IB[0] - TB * IB[2], ZB[2] = TB * IB[1] - JB * IB[0]
      }(TB, RZ, rZ);
      const JB = 1 / 32;
      for (const [oB, GB] of [
          [0, RZ],
          [4, rZ]
        ]) {
        for (let ZB = 0; ZB < 3; ZB++) BB[IB + oB + ZB] = GB[ZB] * JB;
        BB[IB + oB + 3] = -(GB[0] * ZB[0] + GB[1] * ZB[1] + GB[2] * ZB[2]) * JB
      }
    }
    class XZ {
      constructor() {
        this.words = new Uint32Array(jZ), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      QF(BB, IB) {
        this.parts = 0, this.refs = 0, this.view = BB, this.viewAt = IB;
        const ZB = BB[IB + 1] * BB[IB + 6] - BB[IB + 2] * BB[IB + 5],
          TB = BB[IB + 2] * BB[IB + 4] - BB[IB] * BB[IB + 6],
          JB = BB[IB] * BB[IB + 5] - BB[IB + 1] * BB[IB + 4],
          oB = Math.hypot(ZB, TB, JB) || 1;
        this.light[0] = ZB / oB, this.light[1] = TB / oB, this.light[2] = JB / oB
      }
      add(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= pZ || ! function(BB, IB, ZB) {
            const TB = BB[IB],
              JB = BB[IB + 1],
              oB = BB[IB + 2],
              GB = BB[IB + 3],
              vB = BB[IB + 4],
              kB = BB[IB + 5],
              cB = BB[IB + 6],
              nB = BB[IB + 7],
              hB = BB[IB + 8],
              zB = BB[IB + 9],
              FB = BB[IB + 10],
              NB = BB[IB + 11],
              gB = BB[IB + 12],
              qB = BB[IB + 13],
              yB = BB[IB + 14],
              UB = BB[IB + 15],
              WB = TB * kB - JB * vB,
              dB = TB * cB - oB * vB,
              CB = TB * nB - GB * vB,
              QB = JB * cB - oB * kB,
              sB = JB * nB - GB * kB,
              wB = oB * nB - GB * cB,
              OB = hB * qB - zB * gB,
              YB = hB * yB - FB * gB,
              iB = hB * UB - NB * gB,
              pB = zB * yB - FB * qB,
              aB = zB * UB - NB * qB,
              HB = FB * UB - NB * yB,
              MB = WB * HB - dB * aB + CB * pB + QB * iB - sB * YB + wB * OB;
            if (!(Math.abs(MB) > 1e-12)) return !1;
            const jB = 1 / MB;
            return ZB[0] = (kB * HB - cB * aB + nB * pB) * jB, ZB[1] = (oB * aB - JB * HB - GB * pB) * jB, ZB[2] = (qB * wB - yB * sB + UB * QB) * jB, ZB[3] = (FB * sB - zB * wB - NB * QB) * jB, ZB[4] = (cB * iB - vB * HB - nB * YB) * jB, ZB[5] = (TB * HB - oB * iB + GB * YB) * jB, ZB[6] = (yB * CB - gB * wB - UB * dB) * jB, ZB[7] = (hB * wB - FB * CB + NB * dB) * jB, ZB[8] = (vB * aB - kB * iB + nB * OB) * jB, ZB[9] = (JB * iB - TB * aB - GB * OB) * jB, ZB[10] = (gB * sB - qB * CB + UB * WB) * jB, ZB[11] = (zB * CB - hB * sB - NB * WB) * jB, ZB[12] = (kB * YB - vB * pB - cB * OB) * jB, ZB[13] = (TB * pB - JB * YB + oB * OB) * jB, ZB[14] = (qB * dB - gB * QB - yB * WB) * jB, ZB[15] = (hB * QB - zB * dB + FB * WB) * jB, !0
          }(IB, ZB, this.inverse)) return;
        const {
          view: TB,
          viewAt: JB
        } = this, oB = ZB;
        let GB = 1 / 0,
          vB = 1 / 0,
          kB = -1 / 0,
          cB = -1 / 0,
          nB = -1 / 0;
        const [hB, zB, FB] = this.light;
        for (let CB = 0; CB < 8; CB++) {
          const ZB = 1 & CB ? BB.hi[0] : BB.lo[0],
            NB = 2 & CB ? BB.hi[1] : BB.lo[1],
            gB = 4 & CB ? BB.hi[2] : BB.lo[2],
            qB = ZB * IB[oB] + NB * IB[oB + 4] + gB * IB[oB + 8] + IB[oB + 12],
            yB = ZB * IB[oB + 1] + NB * IB[oB + 5] + gB * IB[oB + 9] + IB[oB + 13],
            UB = ZB * IB[oB + 2] + NB * IB[oB + 6] + gB * IB[oB + 10] + IB[oB + 14],
            WB = TB[JB] * qB + TB[JB + 1] * yB + TB[JB + 2] * UB + TB[JB + 3],
            dB = TB[JB + 4] * qB + TB[JB + 5] * yB + TB[JB + 6] * UB + TB[JB + 7];
          GB = Math.min(GB, WB), vB = Math.min(vB, dB), kB = Math.max(kB, WB), cB = Math.max(cB, dB), nB = Math.max(nB, hB * qB + zB * yB + FB * UB)
        }
        if (kB < -1 || cB < -1 || GB >= 1 || vB >= 1) return;
        const NB = this.parts++,
          gB = this.rects;
        gB[4 * NB] = LZ(GB), gB[4 * NB + 1] = LZ(vB), gB[4 * NB + 2] = LZ(kB), gB[4 * NB + 3] = LZ(cB);
        const qB = this.inverse,
          {
            cell: yB,
            dims: UB,
            lo: WB
          } = BB,
          dB = MZ + NB * aZ;
        for (let CB = 0; CB < 3; CB++) this.floats[dB + 4 * CB] = qB[CB] / yB, this.floats[dB + 4 * CB + 1] = qB[4 + CB] / yB, this.floats[dB + 4 * CB + 2] = qB[8 + CB] / yB, this.floats[dB + 4 * CB + 3] = (qB[12 + CB] - WB[CB]) / yB;
        this.words[dB + 12] = BB.at, this.floats[dB + 13] = nB + .001 * (1 + Math.abs(nB)), this.words[dB + 14] = UB[0] | UB[1] << 8 | UB[2] << 16
      }
      finish() {
        const BB = iZ,
          {
            counts: IB,
            rects: ZB,
            words: TB
          } = this;
        IB.fill(0);
        let JB = 0,
          oB = 0;
        for (; oB < this.parts; oB++) {
          const TB = 4 * oB,
            GB = (ZB[TB + 2] - ZB[TB] + 1) * (ZB[TB + 3] - ZB[TB + 1] + 1);
          if (JB + GB > 65536) break;
          JB += GB;
          for (let JB = ZB[TB + 1]; JB <= ZB[TB + 3]; JB++)
            for (let oB = ZB[TB]; oB <= ZB[TB + 2]; oB++) IB[JB * BB + oB]++
        }
        let GB = 0;
        for (let kB = 0; kB < 16384; kB++) TB[kB] = GB, GB += IB[kB], IB[kB] = TB[kB];
        TB[16384] = GB;
        for (let kB = 0; kB < oB; kB++) {
          const JB = 4 * kB;
          for (let oB = ZB[JB + 1]; oB <= ZB[JB + 3]; oB++)
            for (let GB = ZB[JB]; GB <= ZB[JB + 2]; GB++) TB[HZ + IB[oB * BB + GB]++] = kB
        }
        const vB = this.floats;
        for (let kB = 0; kB < 16384; kB++) {
          const BB = HZ + TB[kB],
            IB = BB + Math.min(TB[kB + 1] - TB[kB], 64);
          for (let ZB = BB + 1; ZB < IB; ZB++) {
            const IB = TB[ZB],
              JB = vB[81934 + IB * aZ];
            let oB = ZB - 1;
            for (; oB >= BB && vB[81934 + TB[oB] * aZ] < JB; oB--) TB[oB + 1] = TB[oB];
            TB[oB + 1] = IB
          }
        }
        this.refs = JB
      }
    }

    function LZ(BB) {
      return Math.min(127, Math.max(0, Math.floor((.5 * BB + .5) * iZ)))
    }

    function eZ(BB, IB, ZB, TB, JB) {
      for (let oB = 0; oB < 4; oB++)
        for (let GB = 0; GB < 4; GB++) JB[4 * oB + GB] = BB[IB + 4 * oB] * ZB[TB + GB] + BB[IB + 4 * oB + 1] * ZB[TB + 4 + GB] + BB[IB + 4 * oB + 2] * ZB[TB + 8 + GB] + BB[IB + 4 * oB + 3] * ZB[TB + 12 + GB]
    }

    function uZ(BB, IB, ZB, TB, JB) {
      const oB = BB[0] - IB,
        GB = BB[1] - ZB,
        vB = BB[2] - TB,
        kB = BB[3] - IB,
        cB = BB[4] - ZB,
        nB = BB[5] - TB,
        hB = BB[6] - IB,
        zB = BB[7] - ZB,
        FB = BB[8] - TB;
      if (Math.min(oB, kB, hB) > JB || Math.max(oB, kB, hB) < -JB) return !1;
      if (Math.min(GB, cB, zB) > JB || Math.max(GB, cB, zB) < -JB) return !1;
      if (Math.min(vB, nB, FB) > JB || Math.max(vB, nB, FB) < -JB) return !1;
      const NB = kB - oB,
        gB = cB - GB,
        qB = nB - vB,
        yB = hB - kB,
        UB = zB - cB,
        WB = FB - nB,
        dB = gB * WB - qB * UB,
        CB = qB * yB - NB * WB,
        QB = NB * UB - gB * yB;
      if (Math.abs(dB * oB + CB * GB + QB * vB) > JB * (Math.abs(dB) + Math.abs(CB) + Math.abs(QB))) return !1;
      const sB = [NB, gB, qB, yB, UB, WB, oB - hB, GB - zB, vB - FB];
      for (let wB = 0; wB < 3; wB++) {
        const BB = sB[3 * wB],
          IB = sB[3 * wB + 1],
          ZB = sB[3 * wB + 2];
        for (let TB = 0; TB < 3; TB++) {
          const NB = 0 === TB ? 0 : 1 === TB ? ZB : -IB,
            gB = 0 === TB ? -ZB : 1 === TB ? 0 : BB,
            qB = 0 === TB ? IB : 1 === TB ? -BB : 0,
            yB = NB * oB + gB * GB + qB * vB,
            UB = NB * kB + gB * cB + qB * nB,
            WB = NB * hB + gB * zB + qB * FB,
            dB = JB * (Math.abs(NB) + Math.abs(gB) + Math.abs(qB));
          if (Math.min(yB, UB, WB) > dB || Math.max(yB, UB, WB) < -dB) return !1
        }
      }
      return !0
    }
    const fZ = new Float32Array(1);
    new Uint32Array(fZ.buffer);
    var lZ = ZB(38811);

    function AZ(BB) {
      const [IB, ZB, TB] = lZ.q;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${BB.group}) @binding(${BB.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${IB-1}, ${ZB-1}, ${TB-1});\n}\n`
    }

    function tZ(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [JB, oB, GB] = BZ, [vB, kB, cB] = SI, nB = Math.log2(VI), hB = TB ? "var<private> bloxdSpCrossed: bool;\n" : "", zB = TB ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${BB.group}) @binding(${BB.mz}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${BB.group}) @binding(${BB.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${ZB?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${hB}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${WZ}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${dZ}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${ZB?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${CZ}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${JB}, ${oB}, ${GB});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${JB} * (s.y + ${oB} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${vB}, ${kB}, ${cB}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${nB}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${oZ}u) {\n\t\treturn named && state == ${JZ}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${kZ}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${nZ}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${IB?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${IB?`\t\tif (exits && step > 0 && step % ${EZ} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${nB}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${ZZ}u || kind == ${TZ}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${JZ}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${kZ}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${zB}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const bZ = {
      group: 0,
      uniform: 0,
      mz: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function xZ() {
      const BB = bZ;
      return `${AZ(BB)}${tZ(BB,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${lZ.c}>,\n}\n@group(${BB.group}) @binding(${BB.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${BB.group}) @binding(${BB.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${lZ.k})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${lZ.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${lZ.g}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const EZ = 2;
    const DZ = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function KZ(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const TB = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${IB.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        JB = "trace" === ZB || "lit" === ZB,
        oB = "maskEdge" === ZB ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        GB = JB ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${IB.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${IB.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===ZB?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${oB};\n`;
      return `${TB}${BB.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${JB?function(){const[BB,IB,ZB]=lZ.q;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${BB}.0, ${IB}.0, ${ZB}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${GB}}\n`:""}${BB.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${IB.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${IB.renderOffset});\n}\n`:""}`
    }
    const VZ = "bloxdSpOwnTexture";

    function SZ(BB) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${BB.texture}) - 1u)))`
    }
    const BT = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${HI.e.map((BB=>{let[IB,ZB]=BB;return`\tbloxdSpOut.${IB} = (bloxdSpWord & ${ZB}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function IT(BB) {
      return `bloxdSpFlags(${BB})`
    }
    const ZT = `${DI.m}.eyePosition`;

    function TT(BB, IB, ZB, TB, JB) {
      const oB = BB.indexOf(IB);
      if (oB < 0 || BB.indexOf(IB, oB + 1) >= 0) throw new Error(`Lite's ${JB} program changed at the shader pack ${TB} hook: ${oB<0?"no":"more than one"} anchor (lite/${JB}ShaderPack.ts)`);
      return BB.slice(0, oB) + ZB + BB.slice(oB + IB.length)
    }

    function JT(BB) {
      return BB.sunShadow || BB.airShadow
    }

    function oT(BB, IB) {
      return IB && JT(BB)
    }
    const GT = {
      group: DI.f,
      ...DI.s
    };

    function vT(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!JT(BB)) return "";
      if (IB) {
        const IB = GT,
          JB = "trace" === ZB || "lit" === ZB;
        let oB = "";
        BB.sunShadow && (oB = JB ? `${tZ(IB,!0,"lit"===ZB)}${TB=IB,`@group(${TB.group}) @binding(${TB.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${TB.group}) @binding(${TB.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(BB, IB, ZB) {
          const TB = `@group(${BB}) @binding(${IB}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return ZB ? `${TB}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${DZ}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((BB=>`\t{\n\t\tlet o = vec2i(${BB});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : TB
        }(IB.group, DI.u, "maskEdge" === ZB));
        const GB = {
          shadowDirection: `${DI.m}.shadowDirection`,
          renderOffset: `${DI.m}.renderOffset`,
          eyePosition: `${DI.m}.eyePosition`
        };
        return `${AZ(IB)}${oB}${function(BB){const[IB,ZB,TB]=lZ.q;return`@group(${BB.group}) @binding(${BB.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${BB.group}) @binding(${BB.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${IB}.0, ${ZB}.0, ${TB}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(IB)}${KZ(BB,GB,ZB)}`
      }
      var TB;
      return `${BB.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${BB.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function kT(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!IB) return "";
      const oB = (GB = "fragmentInputs.vPositionW", vB = BB.sunShadow ? {
        normal: ZB,
        flags: TB
      } : null, `\n\tbloxdSpShadowPosition = ${GB};\n${vB?`\tbloxdSpShadowNormal = normalize(${vB.normal});\n\tbloxdSpShadowEmissive = (${vB.flags} & ${HI.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${vB.flags} & ${HI.g}u) != 0u;\n`:""}`);
      var GB, vB;
      return BB.sunShadow && ("mask" === JB || "maskEdge" === JB) ? `${oB}${kB="fragmentInputs.position",cB="maskEdge"===JB,`\n\tbloxdSpShadowPixel = vec2i(${kB}.xy);\n${cB?`\tbloxdSpShadowZ = ${kB}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${kB}.z), dpdy(${kB}.z));\n`:""}`}` : oB;
      var kB, cB
    }
    const cT = "bloxdSpTextureRotation",
      nT = "bloxdSpTextureLayers",
      hT = `@group(${DI.f}) @binding(${DI.w}) var<storage, read> ${nT}: array<u32>;\n`;

    function zT(BB) {
      return `\tvertexOutputs.vPackTexture = ${nT}[min(u32(${BB}), arrayLength(&${nT}) - 1u)];\n`
    }

    function FT(BB) {
      return void 0 !== BB.uv
    }

    function NT(BB) {
      if (!BB) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (FT(BB)) return function(BB) {
        const {
          texture: IB,
          cells: ZB,
          layers: TB
        } = BB, JB = `textureDimensions(${IB}, bloxdSpLevel)`, oB = ZB ? `max(vec2u(vec2f(${JB}) / ${ZB}), vec2u(1u))` : JB, GB = ZB ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${oB};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${ZB}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${ZB}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${IB}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${JB} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${oB};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${IB}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let vB;
        if (ZB)
          if (1 === TB.length) vB = `\treturn bloxdSpOwnTexel(${TB[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const BB = TB.length - 1;
            vB = `\tvar bloxdSpColour = bloxdSpOwnTexel(${TB[BB]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let IB = BB - 1; IB >= 0; IB--) vB += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${TB[IB]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            vB += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else vB = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${BB.id?`var<private> ${VZ}: u32;\n`:""}${GB}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${SZ(BB)};\n\treturn ${oB};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${BB.id?VZ:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${SZ(BB)};\n${vB}}\n`
      }(BB);
      const IB = BB,
        ZB = BB => {
          const ZB = BB > 0 ? `bloxdSpLayer - ${IB.layers*BB}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${BB}, ${IB.sampler}, bloxdSpTurned, ${ZB}, round(bloxdSpMipLevel));`
        };
      let TB = "";
      for (let oB = 0; oB < IB.count - 1; oB++) TB += `\tif (bloxdSpLayer < ${IB.layers*(oB+1)}u) {\n\t\t${ZB(oB)}\n\t}\n`;
      const JB = IB.frame ? `${IB.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${cT}: u32;\n${hT}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${cT} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${cT} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${cT} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${JB}${TB}\t${ZB(IB.count-1)}\n}\n`
    }

    function gT(BB, IB, ZB) {
      return !!BB.surface && "bloxdDefaultSurface" !== BB.surface && function(BB, IB) {
        return "liquid" === IB || !BB
      }(IB, ZB)
    }

    function qT(BB, IB) {
      return BB.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${IB.vertexLocalPosition}, ${IT(IB.vertexFlags)});\n\t\tlet bloxdSpVertex = ${BB.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function yT(BB, IB, ZB, TB, JB) {
      if (!BB.surface) return "";
      const oB = (BB, IB) => `\n\tlet bloxdSpTexelUV = ${BB};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${IB}) - 1u));`;
      let GB = "",
        vB = "0u, 0u, vec2f(0.0), 0.0";
      const kB = TB && FT(TB) ? TB : null,
        cB = TB && !FT(TB) ? TB : null;
      if (kB) {
        GB = `${kB.id?`\n\tlet bloxdSpTexture = ${kB.id};\n\t${VZ} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${kB.uv};${oB(function(BB,IB){var ZB;return`${null!==(ZB=BB.levelUv)&&void 0!==ZB?ZB:BB.cells?`${IB} / ${BB.cells}`:IB} * vec2f(textureDimensions(${BB.texture}))`}(kB,"bloxdSpUv"),kB.texture)}`, vB = (kB.id ? `${VZ}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else cB && (GB = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${cT} = bloxdSpTexture >> 16u;${oB(`fragmentInputs.vMainUV1 * ${(0,bI.nb)(cB.width)}`,"textureAtlas0")}`, vB = `bloxdSpTexture & 0xffffu, ${cT}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const nB = JB.overlayColour,
        hB = nB ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        zB = "bloxdDefaultSurface" !== BB.surface || nB ? `\n\tbaseColor = vec4f(${hB}, baseColor.a);` : "",
        FB = gT(BB, IB, ZB) ? `\n\t${JB.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${GB}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${JB.alpha}, ${JB.enchantTier}, ${JB.enchantColour}, ${JB.enchantSpeed}, ${null!==nB&&void 0!==nB?nB:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${JB.normal}, ${JB.localPosition}, ${IT(JB.flags)}, ${vB});\n\tlet bloxdSpSurface = ${BB.surface}(bloxdSpSurfaceIn);${zB}${FB}\n`
    }
    const UT = "bloxdSpLightIn";

    function WT(BB, IB, ZB, TB) {
      if (!BB.light) return "";
      const JB = IB ? `${bI.h}.rgb, ${bI.h}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${bI.g}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: oB,
          diffuse: GB,
          emissive: vB,
          ambient: kB,
          fogColour: cB,
          fogAlpha: nB,
          normal: hB
        } = TB;
      return `\tvar ${UT} = BloxdLightIn(vec3f(0.0), ${ZB?oB:"0.0"}, ${GB}, ${vB}, ${kB}, ${JB}, ${cB}, ${nB}, fragmentInputs.vPositionW, ${hB}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${UT}.litColour = bloxdLitColour(bloxdSpSurface, ${UT});\n`
    }

    function dT(BB) {
      return BB.light ? `\n\t{\n\t\tlet bloxdSpLight = ${BB.light}(bloxdSpSurface, ${UT});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const CT = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      QT = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      sT = "\treturn color;\n}",
      wT = {
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
    const OT = Object.freeze({});

    function YT(BB) {
      var IB;
      return !(null === (IB = (0, KI.g)(BB)) || void 0 === IB || !IB.sceneDepth)
    }

    function iT(BB) {
      const IB = (0, KI.g)(BB);
      return !!IB && gT(IB.hooks, IB.strict, IB.program)
    }

    function pT(BB, IB, ZB, TB) {
      return TT(BB, IB, ZB, TB, "terrain")
    }

    function aT(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const oB = function(BB) {
          return (0, KI.e)(BB.packVariant, BB.liquid ? "liquid" : "terrain")
        }(BB),
        {
          hooks: GB
        } = oB,
        vB = oT(oB, TB),
        kB = "edge" === JB ? "maskEdge" : "plain" === JB ? "mask" : "trace",
        cB = qT(GB, wT);
      cB && (IB = pT(IB, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${cB}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const nB = "atlas" === BB.texture ? {
          count: BB.atlasCount,
          layers: BB.atlasLayers,
          width: BB.U_,
          sampler: "atlasSampler",
          frame: BB.animated ? ZB : null
        } : null,
        hB = `${oB.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${kT(oB,vB,wT.normal,wT.flags,kB)}${yT(GB,oB.strict,oB.program,nB,wT)}`;
      hB && (IB = pT(IB, CT, `${CT.slice(0,-1)}${hB}`, "surface"));
      const zB = dT(GB);
      return zB && (IB = pT(IB, QT, `${WT(GB,BB.lighting,BB.dirLightCount>0,wT)}${QT}`, "light input"), IB = pT(IB, sT, `${zB.slice(1)}${sT}`, "light")), `${(0,DI.B)()}${oB.sceneDepth?`@group(${DI.f}) @binding(${DI.q}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${ZT};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${vT(oB,vB,kB)}${NT(nB)}${BT}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${oB.code}${IB}`
    }
    const HT = QB.c.WGSL;

    function MT(BB) {
      return void 0 !== BB.packVariant
    }
    const jT = {
        WJB: 0,
        dJB: 4,
        CJB: 8,
        QJB: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      PT = jT.aoLevels + 4,
      RT = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      rT = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      mT = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      XT = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      LT = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      eT = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      uT = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      fT = 0,
      lT = 3,
      AT = 4,
      tT = 5,
      bT = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${xI.c}, ${xI.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${xI.c}, ${xI.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      xT = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((BB=>EI.c>>BB&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const ET = {
      Iz: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: BB => `animDataPerTex[${BB}]`
    };

    function DT(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ET;
      return `\n\tlet atlasIdxIn = ${BB};\n\tlet animTick = ${ZB.Iz};\n\tlet animTickStride = ${ZB.stride};\n\tlet numAnimTextures = ${ZB.count};\n\t${(0,sB.f)(QB.c.WGSL,ZB.perTexture)}\n\t${IB}animLayer;\n`
    }

    function KT(BB) {
      const IB = (IB, ZB) => {
        const TB = IB > 0 ? `fragmentInputs.texAtlasIndex - ${BB.atlasLayers.toFixed(1)} * ${IB.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${ZB?"textureSampleLevel":"textureSample"}(textureAtlas${IB}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${TB}))${ZB?", atlasLod":""})`
      };
      if (1 === BB.atlasCount) return `baseColor = ${IB(0,!1)};`;
      let ZB = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,bI.nb)(BB.U_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let TB = 0; TB < BB.atlasCount; TB++) {
        const JB = BB.atlasLayers * (TB + 1) - .5;
        ZB += `${TB>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,bI.nb)(JB)}) {\n\t\tbaseColor = ${IB(TB,!0)};\n\t}`
      }
      return ZB
    }

    function VT(BB) {
      return `terrain-${BB.texture}${"atlas"===BB.texture?BB.atlasCount:""}${BB.animated?"-anim":""}${BB.alphaTest?"-test":""}${BB.lighting?"-lit":""}-dir${BB.dirLightCount}${BB.packed?"-packed":""}${MT(BB)?`-sp${BB.packVariant}`:""}${BB.liquid?"-liquid":""}${BB.resting?"-rest":""}`
    }

    function ST(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const TB = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const ZB = "none" !== BB.texture,
          TB = "atlas" === BB.texture,
          JB = BB.dirLightCount > 0,
          oB = MT(BB);
        if (BB.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${BB.dirLightCount}`);
        let GB = 1,
          vB = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (TB) {
          BB.animated && (vB += `@group(2) @binding(${GB++}) var<storage, read> animDataPerTex: array<f32>;\n`), vB += `@group(2) @binding(${GB++}) var atlasSampler: sampler;\n`;
          for (let IB = 0; IB < BB.atlasCount; IB++) vB += `@group(2) @binding(${GB++}) var textureAtlas${IB}: texture_2d_array<f32>;\n`
        } else "single" === BB.texture && (vB += `@group(2) @binding(${GB++}) var diffuseSamplerSampler: sampler;\n`, vB += `@group(2) @binding(${GB++}) var diffuseSampler: texture_2d<f32>;\n`);
        const kB = function(BB) {
            const IB = uT,
              ZB = "none" !== BB.texture,
              TB = "atlas" === BB.texture,
              JB = MT(BB);
            return BB.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${ZB?"uv: vec2f,":""}\n\t${TB?"texAtlasIndices: f32,":""}\n\t${BB.lighting?"aPackedLightLevels: f32,":""}\n\t${JB?"blockFlagWords: vec2u,":""}\n}\n${bT}\n${xT}\n${"single"===BB.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${ZB?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===BB.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${TB?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${BB.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${JB?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${IB.position}) position: vec3f,\n\t@location(${IB.normal}) normal: vec4f,\n\t@location(${IB.color}) color: vec4f,\n\t${ZB?`@location(${IB.uv}) uv: vec2f,`:""}\n\t${BB.lighting?`@location(${IB.packedLight}) aPackedLightLevels: f32,`:""}\n\t${JB?`@location(${IB.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(BB),
          cB = `\n${XT}\n${rT}\n${mT}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${vB}\n${qI}\n${kB.declarations}\nstruct Varyings {\n\t${"none"===IB?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${BB.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${JB?"@location(5) vTerrainLambert: f32,":""}\n\t${ZB?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${TB?"@location(7) texAtlasIndex: f32,":""}\n\t${BB.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${oB?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${oB&&TB?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${BB.resting?"":(0,bI.n)(HT)}\n${eT}\n\n@vertex\nfn mainVertex(${kB.parameter}) -> Varyings {\n\t${kB.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${oB?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${HI.d.placed}u;`:""}\n\t${oB&&TB?zT("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${BB.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${ZB?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${TB?function(BB){return BB?DT("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(BB.animated):""}\n\t${"single"===BB.texture&&BB.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,bI.Y)(HT)}\n\t${(0,bI.B)(HT,BB.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":LT}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${TB?KT(BB):""}\n\t${"single"===BB.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ZB?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${BB.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${JB?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${gI}));\n\t${MT(BB)?(0,bI.hb)(QB.c.WGSL):(0,bI.N)(HT)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          nB = new Set;
        BB.lighting && nB.add("BLOXD_LIGHTING");
        JB && nB.add("BLOXD_TERRAIN_DIRECTIONAL");
        return lI(cB, new Map([...nB].map((BB => [BB, !0]))))
      }(BB, ZB);
      if (!MT(BB)) return TB;
      const JB = aT(BB, TB, DT, IB, ZB);
      return "none" === ZB ? JB : `${JB}${function(BB){const IB="none"!==BB.texture&&BB.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":LT}\n\t${BB.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${IB&&"atlas"===BB.texture?KT(BB):""}\n\t${IB&&"single"===BB.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${IB?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${HI.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(BB)}`
    }
    const BJ = new Map([
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

    function IJ(BB, IB) {
      const ZB = new Map;
      let TB = 0;
      const JB = [],
        oB = [],
        GB = [];
      for (const cB of IB) {
        var vB, kB;
        const IB = null !== (vB = cB.type.trim().split(/\s+/).pop()) && void 0 !== vB ? vB : cB.type,
          nB = BJ.get(IB);
        if (!nB) throw new Error(`Lite: no uniform layout for ${cB.name}: ${cB.type}`);
        const hB = null !== (kB = cB.arraySize) && void 0 !== kB ? kB : 0,
          zB = hB ? 4 : nB.align;
        TB = Math.ceil(TB / zB) * zB;
        const FB = hB ? 4 * Math.ceil(nB.floats / 4) : nB.floats;
        if (ZB.set(cB.name, {
            offset: TB,
            floats: nB.floats,
            arraySize: hB,
            stride: FB
          }), hB && nB.floats <= 2) {
          const IB = `${BB}_${GB.length}_strided`;
          oB.push(`struct ${IB} {\n\t@size(16) el: ${nB.wgsl},\n}`), GB.push(cB.name), JB.push(`\t@align(16) ${cB.name}: array<${IB}, ${hB}>,`)
        } else hB ? JB.push(`\t@align(16) ${cB.name}: array<${nB.wgsl}, ${hB}>,`) : JB.push(`\t${cB.name}: ${nB.wgsl},`);
        TB += hB ? FB * hB : nB.floats
      }
      return {
        slots: ZB,
        floats: Math.max(4, 4 * Math.ceil(TB / 4)),
        wgsl: `${oB.join("\n")}\nstruct ${BB} {\n${JB.join("\n")}\n}\n`,
        stridedArrays: GB
      }
    }
    const ZJ = [{
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
      TJ = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      JJ = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function oJ(BB, IB) {
      return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nvarying v${IB}UV: vec2f;\n#endif`
    }

    function GJ(BB, IB, ZB) {
      return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nif (uniforms.v${IB}Infos.x==0.)\n{vertexOutputs.v${IB}UV= (uniforms.${ZB}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${IB}UV= (uniforms.${ZB}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function vJ(BB, IB, ZB) {
      return `#ifdef ${BB}\n#if ${BB}DIRECTUV == 1\n#define v${IB}UV vMainUV1\n#elif ${BB}DIRECTUV == 2\n#define v${IB}UV vMainUV2\n#else\nvarying v${IB}UV: vec2f;\n#endif\nvar ${ZB}SamplerSampler: sampler;\nvar ${ZB}Sampler: texture_2d<f32>;\n#endif`
    }
    const kJ = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      cJ = 256,
      nJ = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      hJ = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      zJ = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      FJ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      NJ = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      gJ = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      qJ = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      yJ = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${hJ}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${oJ("OPACITY","Opacity")}\n${oJ("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${qJ}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${zJ}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${GJ("OPACITY","Opacity","opacity")}\n${GJ("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${FJ}\n#define CUSTOM_VERTEX_MAIN_END\n${NJ}\n}\n`;
    const UJ = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${vJ("OPACITY","Opacity","opacity")}\n${vJ("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${qJ}\n${gJ}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((BB,IB)=>function(BB){const IB=`
    frame.lights[LITE_LIGHT$ {
        BB
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      BB
    }\
    nvar diffuse$ {
      BB
    }: vec4f = $ {
      IB
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      BB
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      IB
    }.vLightData, diffuse$ {
      BB
    }.rgb, $ {
      IB
    }.vLightSpecular.rgb, diffuse$ {
      BB
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(IB))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, WJ = /^([gimus]+)!/, dJ = new Set;

    function CJ(BB) {
      dJ.has(BB) || (dJ.add(BB), console.warn(`Lite: no place for plugin code at ${BB} in the standard shader: it is left out`))
    }

    function QJ(BB, IB) {
      let ZB = BB;
      const TB = new Map;
      for (const [oB, GB] of IB) {
        var JB;
        TB.set(oB, `${null!==(JB=TB.get(oB))&&void 0!==JB?JB:""}${GB}\n`)
      }
      for (const [oB, GB] of TB) {
        if (!oB.startsWith("!")) {
          const BB = `#define ${oB}`;
          if (!ZB.includes(BB)) {
            CJ(oB);
            continue
          }
          ZB = ZB.replace(BB, (() => `\n${GB}\n${BB}`));
          continue
        }
        let BB = oB.substring(1),
          IB = "g";
        if (BB.startsWith("!")) IB = "", BB = BB.substring(1);
        else {
          const ZB = WJ.exec(BB);
          ZB && (IB = ZB[1], BB = BB.substring(IB.length + 1))
        }
        const TB = new RegExp(BB, IB.includes("g") ? IB : `${IB}g`);
        let JB = TB.exec(ZB);
        for (JB || CJ(oB); JB;) {
          const BB = JB,
            IB = GB.replace(/\$(\d+)/g, ((IB, ZB) => Number(ZB) < BB.length ? BB[Number(ZB)] : ""));
          ZB = ZB.substring(0, BB.index) + IB + ZB.substring(BB.index + BB[0].length), TB.lastIndex = BB.index + IB.length, JB = TB.exec(ZB)
        }
      }
      return ZB
    }
    const sJ = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      wJ = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      OJ = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function YJ(BB) {
      const IB = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let ZB = BB.replace(sJ, ((BB, ZB, TB, JB, oB, GB) => ("attribute" === ZB ? IB.attributes.push({
        name: oB,
        type: GB
      }) : void 0 === ZB ? IB.varyings.push({
        name: oB,
        type: GB,
        interpolation: pJ(GB, TB, JB)
      }) : IB.uniforms.push({
        name: oB,
        type: iJ(GB)
      }), "")));
      return ZB = ZB.replace(wJ, ((BB, ZB) => (IB.samplers.add(ZB), ""))), ZB = ZB.replace(OJ, ((BB, ZB, TB) => (IB.textures.push({
        name: ZB,
        type: TB
      }), ""))), IB.body = ZB, IB
    }

    function iJ(BB) {
      const IB = BB.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        ZB = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(IB);
      if (!ZB) throw new Error(`Lite: unsupported uniform type ${BB}`);
      return ZB
    }

    function pJ(BB, IB, ZB) {
      return void 0 === IB && void 0 === ZB ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(BB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === IB ? "@interpolate(flat) " : `@interpolate(${null!==IB&&void 0!==IB?IB:"perspective"}, ${null!==ZB&&void 0!==ZB?ZB:"center"}) `
    }

    function aJ(BB) {
      return PJ({
        defines: BB.defines,
        vertex: QJ(yJ, BB.vertexCode),
        fragment: QJ(UJ, BB.fragmentCode),
        members: [...ZJ, ...BB.defines.has("OPACITY") ? TJ : [], ...BB.defines.has("EMISSIVE") ? JJ : [], ...BB.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function HJ(BB) {
      const IB = BB.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (IB === BB) throw new Error("Lite: fragment main has no return");
      return IB
    }
    const MJ = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${hJ}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${zJ}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${FJ}\n${NJ}\n}\n`,
      jJ = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${gJ}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function PJ(BB) {
      const IB = BB.defines,
        ZB = YJ(lI(BB.vertex, IB)),
        TB = YJ(lI(BB.fragment, IB)),
        JB = new Map;
      for (const WB of [...ZB.varyings, ...TB.varyings]) JB.has(WB.name) || JB.set(WB.name, WB);
      const oB = [...JB.values()].map(((BB, IB) => `\t@location(${IB}) ${BB.interpolation}${BB.name}: ${BB.type},`)),
        GB = [...BB.members];
      for (const WB of [...ZB.uniforms, ...TB.uniforms]) GB.some((BB => BB.name === WB.name)) || GB.push(WB);
      const vB = IJ(BB.structName, GB),
        kB = [],
        cB = [];
      let nB = 1;
      const hB = new Set;
      for (const WB of [...ZB.textures, ...TB.textures]) {
        if (hB.has(WB.name)) continue;
        hB.add(WB.name);
        const BB = `${WB.name}Sampler`,
          IB = nB++,
          ZB = nB++,
          TB = WB.type.startsWith("texture_2d_array") ? "2d-array" : WB.type.startsWith("texture_cube") ? "cube" : "2d";
        kB.push({
          name: WB.name,
          binding: IB,
          samplerBinding: ZB,
          dimension: TB
        }), cB.push(`@group(2) @binding(${IB}) var ${WB.name}: ${WB.type};`), cB.push(`@group(2) @binding(${ZB}) var ${BB}: sampler;`)
      }
      for (const WB of [...ZB.samplers, ...TB.samplers])
        if (!hB.has(WB.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${WB} has no texture`);
      const zB = [XT, nJ, vB.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${BB.structName};`, ...cB].join("\n"),
        FB = ZB.attributes,
        NB = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...ZB.attributes.map(((BB, IB) => `\t@location(${IB}) ${BB.name}: ${BB.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        gB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...oB, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        qB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...TB.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...oB, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", qI, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${gI}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        yB = BB => {
          for (const IB of vB.stridedArrays) BB = BB.replace(new RegExp(`\\b${IB}\\s*\\[(.*?)\\]`, "g"), `${IB}[$1].el`);
          return BB
        };
      return {
        vertex: `${zB}\n${NB}\n${gB}\n${yB(ZB.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${zB}\n${qB}\n${HJ((UB=yB(TB.body),UB.includes("fragmentInputs.position")?UB.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):UB))}`,
        attributes: FB,
        material: vB,
        textures: kB
      };
      var UB
    }
    const RJ = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      rJ = BB => ({
        name: BB,
        type: "vec3"
      }),
      mJ = BB => ({
        name: BB,
        type: "float"
      }),
      XJ = IJ("EarthSkyUniforms", [rJ("viewFrom"), mJ("exposureScale"), rJ("zenithOffset"), mJ("fogOn"), rJ("up"), mJ("ditherOn"), rJ("sun"), mJ("turbidity"), rJ("tint"), mJ("rayleigh"), rJ("sunDir"), mJ("mieStrength"), rJ("inScatterR"), mJ("mieFocus"), rJ("inScatterM"), mJ("sunE"), rJ("extinctionBeta"), mJ("sunsetMix"), mJ("mieScale"), mJ("mieBase"), mJ("mieSlope"), mJ("sunDiscE"), mJ("exposure")]),
      LJ = `${XT}\n${nJ}\n${XJ.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      eJ = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${RJ.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      uJ = `\n${qI}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(LI).map((BB=>{let[IB,ZB]=BB;return`const TONE_${IB}: f32 = ${ZB};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${eI};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${gI}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var fJ = ZB(37113);
    const lJ = new fJ.rN,
      AJ = new fJ.rN,
      tJ = new fJ.Quaternion,
      bJ = new Float64Array(3),
      xJ = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      EJ = new Float64Array(16);

    function DJ(BB, IB, ZB) {
      const TB = ZB.worldMatrix;
      var JB;
      BB.updateFloat3("viewFrom", TB[12], TB[13], TB[14]), BB.updateFloatsFrom("zenithOffset", IB.cameraOffset, 0, 3), BB.updateFloatsFrom("up", IB.up, 0, 3), IB.luminance > 0 && (BB.updateFloat("exposure", IB.luminance), BB.updateFloat("exposureScale", (JB = IB.luminance, Math.log2(2 / Math.pow(JB, 4))))), BB.updateFloat("turbidity", IB.turbidity), BB.updateFloat("rayleigh", IB.rayleigh), BB.updateFloat("mieStrength", IB.mieCoefficient), BB.updateFloat("mieFocus", IB.mieDirectionalG), BB.updateFloatsFrom("tint", IB.tint, 0, 3), BB.updateFloat("fogOn", IB.fog && ZB.fogEnabled && 0 !== ZB.fogMode ? 1 : 0), BB.updateFloat("ditherOn", IB.dithering ? 1 : 0);
      const oB = IB.sunPosition;
      if (lJ.set(oB[0], oB[1], oB[2]), !IB.useSunPosition) {
        const BB = Math.PI * (IB.inclination - .5),
          ZB = 2 * Math.PI * (IB.azimuth - .5);
        lJ.set(IB.distance * Math.cos(ZB) * Math.cos(BB), IB.distance * Math.sin(-BB), IB.distance * Math.sin(ZB) * Math.cos(BB)), fJ.Quaternion.FromUnitVectorsToRef(fJ.rN.UpReadOnly, AJ.set(IB.up[0], IB.up[1], IB.up[2]), tJ), lJ.rotateByQuaternionToRef(tJ, lJ)
      }
      BB.updateVector3("sun", lJ), bJ[0] = lJ.x, bJ[1] = lJ.y, bJ[2] = lJ.z;
      const GB = XI(IB, bJ, xJ);
      BB.updateFloatsFrom("sunDir", GB.sunDir, 0, 3), BB.updateFloat("sunE", GB.sunE), BB.updateFloatsFrom("inScatterR", GB.inScatterR, 0, 3), BB.updateFloatsFrom("inScatterM", GB.inScatterM, 0, 3), BB.updateFloatsFrom("extinctionBeta", GB.extinctionBeta, 0, 3), BB.updateFloat("sunsetMix", GB.sunsetMix), BB.updateFloat("sunDiscE", GB.sunDiscE), BB.updateFloat("mieScale", GB.mieScale), BB.updateFloat("mieBase", GB.mieBase), BB.updateFloat("mieSlope", GB.mieSlope)
    }

    function KJ(BB, IB) {
      const ZB = EJ;
      ZB[0] = IB.far, ZB[5] = IB.far, ZB[10] = IB.far, ZB[15] = 1;
      const TB = BB.infiniteDistance;
      for (let JB = 0; JB < 3; JB++) ZB[12 + JB] = BB.position[JB] + (TB ? IB.worldMatrix[12 + JB] : 0);
      return EJ
    }
    class VJ {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(BB, IB, ZB, TB, JB) {
        ZB !== this.pipeline && (BB.setPipeline(ZB), this.pipeline = ZB), BB.setBindGroup(1, TB, [JB]);
        const oB = IB.material.bindGroup;
        oB !== this.materialGroup && (BB.setBindGroup(2, oB), this.materialGroup = oB);
        const GB = IB.program.packGroup;
        GB && GB !== this.packGroup && (BB.setBindGroup(DI.f, GB), this.packGroup = GB);
        const {
          vertexBuffers: vB,
          vertexOffsets: kB
        } = this;
        for (let cB = 0; cB < IB.vertexBuffers.length; cB++) vB[cB] === IB.vertexBuffers[cB] && kB[cB] === IB.vertexOffsets[cB] || (BB.setVertexBuffer(cB, IB.vertexBuffers[cB], IB.vertexOffsets[cB]), vB[cB] = IB.vertexBuffers[cB], kB[cB] = IB.vertexOffsets[cB]);
        IB.indexBuffer && IB.indexBuffer !== this.indexBuffer && (BB.setIndexBuffer(IB.indexBuffer, IB.indexFormat), this.indexBuffer = IB.indexBuffer)
      }
    }
    class SJ {
      constructor(BB, IB, ZB, TB) {
        this.modelMeshes = BB, this.Z4 = IB, this.maker = ZB, this.warnOnce = TB, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (BB, IB) => {
          (IB < -1 || IB > 1) && this.warnOnce(`group:${IB}`, `rendering group ${IB} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(BB) {
        this.collectGroup(BB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(BB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(BB, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Z4.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(Bo), this.transparentDraws.sort(Io)
      }
      collectGroup(BB, IB, ZB, TB, JB) {
        const oB = this.modelMeshes.group(IB),
          GB = this.Z4.group(IB),
          vB = 0 === IB ? null === GB || void 0 === GB ? void 0 : GB.opaque : void 0;
        this.collectList(BB, null === oB || void 0 === oB ? void 0 : oB.opaque, vB || null === GB || void 0 === GB ? void 0 : GB.opaque, IB, !1, ZB, JB), vB && (this.Z4.drawn += this.maker.bundleDraws(BB, vB, IB)), this.collectList(BB, null === oB || void 0 === oB ? void 0 : oB.alphaTest, void 0, IB, !1, ZB, JB), this.collectList(BB, null === oB || void 0 === oB ? void 0 : oB.transparent, null === GB || void 0 === GB ? void 0 : GB.transparent, IB, !0, TB, JB)
      }
      collectList(BB, IB, ZB, TB, JB, oB, GB) {
        var vB;
        const kB = oB.length;
        IB && this.maker.pushDraws(BB, IB.units, IB.units.length, TB, JB, oB, IB.rows), ZB && (this.Z4.drawn += this.maker.pushDraws(BB, ZB, ZB.length, TB, JB, oB));
        const cB = JB ? null === (vB = this.modelMeshes.group(TB)) || void 0 === vB ? void 0 : vB.text : void 0;
        cB && this.maker.pushDraws(BB, cB.units, cB.units.length, TB, !0, oB, cB.rows), GB && Zo(oB, kB)
      }
    }

    function Bo(BB, IB) {
      return BB.program.id - IB.program.id || BB.material.owner.uniqueId - IB.material.owner.uniqueId
    }

    function Io(BB, IB) {
      return BB.material.owner.uniqueId - IB.material.owner.uniqueId
    }

    function Zo(BB, IB) {
      for (let ZB = IB + 1; ZB < BB.length; ZB++) {
        const TB = BB[ZB];
        let JB = ZB - 1;
        for (; JB >= IB && Io(BB[JB], TB) > 0; JB--) BB[JB + 1] = BB[JB];
        BB[JB + 1] = TB
      }
    }
    const To = {};

    function Jo(BB) {
      return BB.hasThinInstances ? "thin" : BB.sJB || BB._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function oo(BB, IB, ZB) {
      return BB ? (ZB._needUVs = !0, BB.optimizeUVAllocation && (0, iB.F)(BB.matrix) ? (ZB[`${IB}DIRECTUV`] = BB.uvSet + 1, ZB[`MAINUV${BB.uvSet+1}`] = !0) : ZB[`${IB}DIRECTUV`] = 0, !0) : (ZB[`${IB}DIRECTUV`] = 0, !1)
    }

    function Go(BB) {
      const IB = new Map;
      for (const ZB in BB) {
        if (95 === ZB.charCodeAt(0)) continue;
        const TB = BB[ZB],
          JB = typeof TB;
        "number" === JB || "string" === JB ? IB.set(ZB, String(TB)) : TB && "function" !== JB && IB.set(ZB, !0)
      }
      return IB
    }

    function vo(BB) {
      const IB = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: ZB
        }
        of BB.features)
        for (const BB in ZB) IB[BB] = ZB[BB];
      return IB
    }

    function ko(BB) {
      const IB = BB.parts.geometry;
      return null !== IB && void 0 !== IB && IB.live ? IB : null
    }

    function co(BB) {
      var IB;
      return null !== (IB = ko(BB)) && void 0 !== IB ? IB : To
    }
    class no {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = BB, this.warnOnce = IB, this.programWithModel = ZB, this.packFailed = TB, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(BB, IB, ZB, TB, JB) {
        const oB = IB.owner;
        let GB = this.drawStates.get(IB);
        if (!GB) {
          const BB = IB.parts.materials[IB.range];
          if (!BB) return this.warnOnce("model", `${ZB.name} on ${oB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          GB = {
            defines: vo(BB),
            model: BB,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: JB,
            groupId: TB,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(IB, GB)
        }
        if (this.programCurrent(GB, IB, JB, TB)) return GB.program;
        const {
          model: vB
        } = GB, kB = co(IB), cB = this.instanceLayout(oB, JB), nB = this.definesBits(oB);
        if (!this.prepareModelDefines(BB, oB, vB, GB.defines, TB, JB)) return null;
        GB.instancing = JB, GB.groupId = TB, GB.modelVersion = vB.version, GB.geometry = kB, GB.instanceLayout = cB, GB.definesBits = nB;
        const hB = function(BB) {
          let IB = "";
          for (const [ZB, TB] of BB) IB += !0 === TB ? `${ZB};` : `${ZB}=${TB};`;
          return IB
        }(Go(GB.defines));
        return hB === GB.definesKey && GB.packVariant === this.modelPackVariant && GB.program && !this.packFailed(GB.program) || (GB.definesKey = hB, GB.packVariant = this.modelPackVariant, GB.program = this.programWithModel(vB, GB.defines, hB)), GB.program
      }
      programCurrent(BB, IB, ZB, TB) {
        return null !== BB.program && !this.packFailed(BB.program) && BB.instancing === ZB && BB.groupId === TB && this.definesHold(BB, IB, ZB)
      }
      definesHold(BB, IB, ZB) {
        return BB.modelVersion === BB.model.version && BB.geometry === co(IB) && BB.instanceLayout === this.instanceLayout(IB.owner, ZB) && BB.definesBits === this.definesBits(IB.owner) && BB.packVariant === this.modelPackVariant
      }
      modelPackKind(BB) {
        var IB;
        return 0 === this.modelPackVariant ? null : null !== (IB = (0, OB.v)(BB, wB.f.name)) && void 0 !== IB && IB.active ? "placed" : BB.item ? "item" : BB.lifeform ? "lifeform" : BB.box ? "box" : null
      }
      instanceLayout(BB, IB) {
        var ZB, TB, JB;
        return "thin" === IB ? null !== (JB = this.resources.I5.get(BB)) && void 0 !== JB ? JB : null : "instanced" === IB && null !== (ZB = null === (TB = BB._userInstancedBuffersStorage) || void 0 === TB ? void 0 : TB.interleavedKinds) && void 0 !== ZB ? ZB : null
      }
      definesBits(BB) {
        const IB = this.view;
        return (BB.visibility < 1 ? 1 : 0) | (BB.hasVertexAlpha ? 2 : 0) | (BB.applyFog ? 4 : 0) | (BB.useVertexColors ? 8 : 0) | (BB.nonUniformScaling ? 16 : 0) | (IB.fogEnabled && 0 !== IB.fogMode ? 32 : 0) | (IB.lightsEnabled ? 64 : 0) | IB.lightCount << 7
      }
      prepareLightDefines(BB, IB, ZB) {
        let TB = 0;
        if (this.view.lightsEnabled && !IB) {
          const IB = Math.min(ZB, 4);
          for (; TB < this.view.lightCount && (BB[`LIGHT${TB}`] = !0, BB[`LITE_LIGHT${TB}_SLOT`] = TB, TB++, BB._needNormals = !0, TB !== IB););
        }
        for (let JB = TB; JB < 4; JB++) BB[`LIGHT${JB}`] = !1, BB[`LITE_LIGHT${JB}_SLOT`] = void 0
      }
      prepareModelDefines(BB, IB, ZB, TB, JB, oB) {
        const {
          features: GB
        } = ZB;
        TB._needNormals = !1, TB._needUVs = !1;
        const vB = this.view;
        this.prepareLightDefines(TB, ZB.disableLighting, ZB.maxSimultaneousLights), TB.MAINUV1 = !1, TB.MAINUV2 = !1;
        const kB = ZB.diffuseTexture;
        kB ? (TB._needUVs = !0, TB.DIFFUSE = !0, kB.optimizeUVAllocation && (0, iB.F)(kB.matrix) ? (TB.DIFFUSEDIRECTUV = kB.uvSet + 1, TB[`MAINUV${kB.uvSet+1}`] = !0) : TB.DIFFUSEDIRECTUV = 0, kB.uvSet > 1 && this.warnOnce(`uvset:${ZB.name}`, `${ZB.name} samples UV set ${kB.uvSet+1}, which is not supported`)) : (TB.DIFFUSE = !1, TB.DIFFUSEDIRECTUV = 0);
        const cB = ZB.opacityTexture,
          nB = ZB.emissiveTexture;
        TB.OPACITY = oo(cB, "OPACITY", TB), TB.OPACITYRGB = null !== cB && cB.getAlphaFromRGB, TB.EMISSIVE = oo(nB, "EMISSIVE", TB), (cB && cB.uvSet > 1 || nB && nB.uvSet > 1) && this.warnOnce(`uvset:${ZB.name}`, `${ZB.name} samples a UV set past 2, which is not supported`);
        const hB = ZB.reflectionTexture,
          zB = null !== hB;
        if (zB) {
          if (!this.resources.boundTexture(hB)) return !1;
          TB._needNormals = !0
        }
        TB.REFLECTION = zB, TB.REFLECTIONMAP_3D = zB, TB.REFLECTIONMAP_SKYBOX = zB, TB.REFLECTIONMAP_OPPOSITEZ = zB && (BB.useRightHandedSystem ? !hB.invertZ : hB.invertZ), TB.ROUGHNESS = zB && ZB.roughness > 0, TB.REFLECTIONOVERALPHA = zB && ZB.useReflectionOverAlpha, TB.LITE_REFLECTION_LUMINANCE = zB && "cube" === hB.source.kind && hB.source.luminance, (IB.skeleton || IB.morphTargetManager) && this.warnOnce(`skin:${IB.name}`, `${IB.name} has bones or morph targets, which are not supported`), TB.FOG = ZB.fogEnabled && IB.applyFog && vB.fogEnabled && 0 !== vB.fogMode, TB.NONUNIFORMSCALING = IB.nonUniformScaling;
        const {
          visibility: FB,
          hasVertexAlpha: NB
        } = IB;
        TB.ALPHATEST = (0, OB.S)(ZB, FB, NB), TB.ALPHAFROMDIFFUSE = (0, OB.eb)(ZB), TB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== ZB.transparencyMode, TB.ALPHABLEND = null === ZB.transparencyMode || (0, OB.P)(ZB, FB, NB), TB.PREMULTIPLYALPHA = 7 === ZB.alphaMode || 8 === ZB.alphaMode, TB.EMISSIVEASILLUMINATION = ZB.useEmissiveAsIllumination, TB.LINKEMISSIVEWITHDIFFUSE = ZB.linkEmissiveWithDiffuse, TB.TWOSIDEDLIGHTING = !ZB.backFaceCulling && ZB.twoSidedLighting, TB.INSTANCES = "none" !== oB, TB.THIN_INSTANCES = "thin" === oB, TB.LITE_FRONT_LAYER = JB >= 1;
        for (const {
            feature: sB,
            state: wB,
            active: OB
          }
          of GB) {
          var gB, qB;
          if (OB) null === (gB = (qB = (0, jI.h)(sB)).prepareDefinesBeforeAttributes) || void 0 === gB || gB.call(qB, wB, TB, BB, IB)
        }
        this.modelPackKind(ZB) && (TB._needNormals = !0), TB.NORMAL = TB._needNormals && IB.isVerticesDataPresent("normal"), TB.UV1 = TB._needUVs && IB.isVerticesDataPresent("uv"), TB.UV2 = TB._needUVs && IB.isVerticesDataPresent("uv2");
        const yB = IB.useVertexColors && IB.isVerticesDataPresent("color");
        TB.VERTEXCOLOR = yB, TB.VERTEXALPHA = IB.hasVertexAlpha && yB, TB.INSTANCESCOLOR = "none" !== oB && IB.isVerticesDataPresent("instanceColor");
        for (const {
            feature: sB,
            state: wB,
            active: OB
          }
          of GB) {
          var UB, WB;
          if (OB) null === (UB = (WB = (0, jI.h)(sB)).prepareDefines) || void 0 === UB || UB.call(WB, wB, TB, BB, IB, ZB)
        }
        const dB = BB.PN();
        for (const {
            feature: sB,
            state: wB,
            active: OB
          }
          of GB) {
          var CB, QB;
          if (OB && !1 === (null === (CB = (QB = (0, jI.h)(sB)).isReadyForSubMesh) || void 0 === CB ? void 0 : CB.call(QB, wB, TB, BB, dB))) return !1
        }
        return !0
      }
    }

    function ho(BB, IB, ZB) {
      return BB.codeVersion !== IB.version && function(BB, IB) {
        const ZB = [],
          TB = [];
        for (const {
            feature: zB,
            state: FB,
            active: NB
          }
          of IB.features) {
          var JB, oB, GB, vB;
          if (NB) zo(null === (JB = (oB = (0, jI.h)(zB)).getCustomCode) || void 0 === JB ? void 0 : JB.call(oB, FB, "vertex", QB.c.WGSL), ZB), zo(null === (GB = (vB = (0, jI.h)(zB)).getCustomCode) || void 0 === GB ? void 0 : GB.call(vB, FB, "fragment", QB.c.WGSL), TB)
        }
        const kB = [];
        for (const {
            feature: zB,
            state: FB
          }
          of IB.features) {
          var cB, nB;
          const BB = null === (cB = (nB = (0, jI.h)(zB)).getUniforms) || void 0 === cB ? void 0 : cB.call(nB, FB, QB.c.WGSL);
          for (const IB of null !== (hB = null === BB || void 0 === BB ? void 0 : BB.ubo) && void 0 !== hB ? hB : []) {
            var hB;
            IB.size && IB.type && kB.push({
              name: IB.name,
              type: IB.type,
              arraySize: IB.arraySize
            })
          }
        }
        BB.vertexCode = ZB, BB.fragmentCode = TB, BB.pluginUniforms = kB, BB.codeKey = JSON.stringify([ZB, TB, kB]), BB.codeVersion = IB.version
      }(BB, IB), `${ZB}#${BB.codeKey}`
    }

    function zo(BB, IB) {
      if (BB)
        for (const ZB in BB) BB[ZB] && IB.push([ZB, BB[ZB]])
    }
    const Fo = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class No {
      constructor(BB) {
        this.warnOnce = BB, this.states = new Map
      }
      renderState(BB, IB, ZB, TB) {
        var JB;
        let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          GB = null !== (JB = BB.sideOrientation) && void 0 !== JB ? JB : IB.sideOrientation;
        IB._getWorldMatrixDeterminant() < 0 && (GB = 0 === GB ? 1 : 0);
        const vB = "triangle-list" === oB,
          kB = ZB ? BB.alphaMode : 0,
          cB = (!ZB || (0 === kB || BB.forceDepthWrite)) && !BB.disableDepthWrite,
          nB = vB && BB.backFaceCulling ? BB.cullBackFaces ? "back" : "front" : "none",
          hB = vB && 0 !== GB ? "ccw" : "cw",
          zB = BB.depthFunction,
          FB = vB ? BB.zOffset : 0,
          NB = vB ? BB.zOffsetUnits : 0,
          gB = !BB.disableColorWrite;
        return TB && TB.alphaMode === kB && TB.depthWrite === cB && TB.depthFunction === zB && TB.cullMode === nB && TB.frontFace === hB && TB.zOffset === FB && TB.zOffsetUnits === NB && TB.colourWrite === gB && TB.topology === oB ? TB : this.stateFor(kB, cB, zB, nB, hB, FB, NB, gB, oB)
      }
      stateFor(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        const cB = `${BB}|${IB}|${ZB}|${TB}|${JB}|${oB}|${GB}|${vB}|${kB}`;
        let nB = this.states.get(cB);
        if (!nB) {
          var hB;
          const zB = BB ? oI(BB) : null;
          BB && !zB && this.warnOnce(`alpha:${BB}`, `alpha mode ${BB} is not supported`), nB = {
            key: cB,
            alphaMode: BB,
            depthFunction: ZB,
            zOffset: oB,
            zOffsetUnits: GB,
            topology: kB,
            blend: zB,
            depthWrite: IB,
            depthCompare: ZB && null !== (hB = Fo.get(ZB)) && void 0 !== hB ? hB : null,
            cullMode: TB,
            frontFace: JB,
            depthBias: -GB,
            depthBiasSlopeScale: -oB,
            colourWrite: vB
          }, this.states.set(cB, nB)
        }
        return nB
      }
    }
    var go = ZB(37484);

    function qo(BB) {
      if (!BB.frozen) return -1;
      let IB = BB.version;
      for (const {
          feature: ZB,
          state: TB,
          active: JB
        }
        of BB.features) {
        if (!JB || !ZB.bind) continue;
        const BB = (0, jI.h)(ZB).uniformsVersion;
        if (!BB) return -1;
        IB += BB(TB)
      }
      return IB
    }
    class yo {
      constructor(BB, IB, ZB) {
        this.slots = BB, this.data = IB, this.textures = ZB, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(BB, IB) {
        this.write4(BB, IB, 0, 0, 0, 1)
      }
      updateFloat2(BB, IB, ZB) {
        this.write4(BB, IB, ZB, 0, 0, 2)
      }
      updateFloat3(BB, IB, ZB, TB) {
        this.write4(BB, IB, ZB, TB, 0, 3)
      }
      updateFloat4(BB, IB, ZB, TB, JB) {
        this.write4(BB, IB, ZB, TB, JB, 4)
      }
      updateVector3(BB, IB) {
        this.write4(BB, IB.x, IB.y, IB.z, 0, 3)
      }
      updateVector4(BB, IB) {
        this.write4(BB, IB.x, IB.y, IB.z, IB.w, 4)
      }
      updateColor3(BB, IB) {
        this.write4(BB, IB.r, IB.g, IB.b, 0, 3)
      }
      updateColor4(BB, IB, ZB) {
        this.write4(BB, IB.r, IB.g, IB.b, ZB, 4)
      }
      updateFloatsFrom(BB, IB, ZB, TB) {
        const JB = this.slots.get(BB);
        if (!JB) return;
        const oB = this.data,
          GB = JB.offset;
        for (let vB = 0; vB < TB; vB++) oB[GB + vB] = IB[ZB + vB]
      }
      updateFloat3TimesFloats(BB, IB, ZB, TB) {
        const JB = this.slots.get(BB);
        if (!JB) return;
        const oB = this.data,
          GB = JB.offset;
        oB[GB] = IB[ZB] * TB[0], oB[GB + 1] = IB[ZB + 1] * TB[1], oB[GB + 2] = IB[ZB + 2] * TB[2]
      }
      T6(BB, IB) {
        const ZB = this.slots.get(BB);
        ZB && this.data.set(IB.m, ZB.offset)
      }
      updateMatrixFloats(BB, IB) {
        const ZB = this.slots.get(BB);
        ZB && this.data.set(IB, ZB.offset)
      }
      updateFloatArray(BB, IB) {
        const ZB = this.slots.get(BB);
        if (!ZB) return;
        if (!ZB.arraySize || ZB.stride === ZB.floats) return void this.data.set(IB, ZB.offset);
        const TB = Math.min(IB.length, ZB.floats * ZB.arraySize);
        for (let JB = 0; JB < TB; JB++) this.data[ZB.offset + Math.floor(JB / ZB.floats) * ZB.stride + JB % ZB.floats] = IB[JB]
      }
      updateArray(BB, IB) {
        this.updateFloatArray(BB, IB)
      }
      setTexture(BB, IB) {
        this.textures.set(BB, IB), this.expected.delete(BB)
      }
      expectTexture(BB) {
        this.textures.set(BB, null), this.expected.add(BB)
      }
      write4(BB, IB, ZB, TB, JB, oB) {
        const GB = this.slots.get(BB);
        if (!GB) return;
        const vB = this.data,
          kB = GB.offset;
        vB[kB] = IB, oB > 1 && (vB[kB + 1] = ZB), oB > 2 && (vB[kB + 2] = TB), oB > 3 && (vB[kB + 3] = JB)
      }
    }

    function Uo(BB, IB) {
      const ZB = kJ,
        TB = go.h,
        JB = BB.lights,
        oB = Math.min(BB.lightCount, 8);
      for (let GB = 0; GB < oB; GB++) {
        const BB = ZB.lights + GB * ZB.lightStride,
          oB = GB * go.b;
        IB[BB] = JB[oB + TB.vector], IB[BB + 1] = JB[oB + TB.vector + 1], IB[BB + 2] = JB[oB + TB.vector + 2], IB[BB + 3] = JB[oB + TB.kind] === go.f.directional ? 1 : 0, IB[BB + 4] = JB[oB + TB.diffuse], IB[BB + 5] = JB[oB + TB.diffuse + 1], IB[BB + 6] = JB[oB + TB.diffuse + 2], IB[BB + 7] = JB[oB + TB.range], IB[BB + 8] = JB[oB + TB.specular], IB[BB + 9] = JB[oB + TB.specular + 1], IB[BB + 10] = JB[oB + TB.specular + 2], IB[BB + 11] = JB[oB + TB.range]
      }
      IB[ZB.fogInfos] = BB.fogMode, IB[ZB.fogInfos + 1] = BB.fogStart, IB[ZB.fogInfos + 2] = BB.fogEnd, IB[ZB.fogInfos + 3] = BB.fogDensity, IB[ZB.fogColour] = BB.fogColour[0], IB[ZB.fogColour + 1] = BB.fogColour[1], IB[ZB.fogColour + 2] = BB.fogColour[2], IB[ZB.outputHeight] = BB.renderHeight, IB[ZB.animTick] = BB.animTick, IB[ZB.timeMs] = BB.timeMs
    }
    class Wo {
      constructor(BB) {
        this.instancesOf = BB
      }
      refreshModelUniforms(BB, IB, ZB, TB) {
        const JB = qo(ZB);
        if (JB >= 0 && JB === IB.heldVersion && IB.textures.get("diffuseSampler") === ZB.diffuseTexture && IB.textures.get("reflectionCubeSampler") === ZB.reflectionTexture && IB.textures.get("opacitySampler") === ZB.opacityTexture && IB.textures.get("emissiveSampler") === ZB.emissiveTexture) return !0;
        if (JB < 0)
          for (const oB of this.instancesOf(ZB)) oB.heldVersion = -1;
        return this.writeModelUniforms(BB, IB, ZB, TB), IB.heldVersion = JB, !1
      }
      writeModelUniforms(BB, IB, ZB, TB) {
        const {
          ubo: JB
        } = IB, oB = ZB.diffuseTexture, GB = ZB.diffuseColor;
        JB.updateFloat4("vDiffuseColor", GB[0], GB[1], GB[2], ZB.alpha), oB && (JB.updateFloat2("vDiffuseInfos", oB.uvSet, oB.level), JB.updateMatrixFloats("diffuseMatrix", oB.matrix)), JB.updateFloat("alphaCutOff", ZB.alphaCutOff), JB.updateFloatsFrom("vEmissiveColor", ZB.emissiveColor, 0, 3), JB.updateFloat3TimesFloats("vAmbientColor", TB.ambientColour, 0, ZB.ambientColor);
        const vB = ZB.specularColor;
        JB.updateFloat4("vSpecularColor", vB[0], vB[1], vB[2], ZB.specularPower), JB.setTexture("diffuseSampler", oB);
        const kB = ZB.opacityTexture;
        kB && (JB.updateFloat2("vOpacityInfos", kB.uvSet, kB.level), JB.updateMatrixFloats("opacityMatrix", kB.matrix)), JB.setTexture("opacitySampler", kB);
        const cB = ZB.emissiveTexture;
        cB && (JB.updateFloat2("vEmissiveInfos", cB.uvSet, cB.level), JB.updateMatrixFloats("emissiveMatrix", cB.matrix)), JB.setTexture("emissiveSampler", cB);
        const nB = ZB.reflectionTexture;
        nB && JB.updateMatrixFloats("reflectionMatrix", nB.matrix), JB.updateFloat2("vReflectionInfos", nB ? nB.level * BB.iblIntensity : 0, ZB.roughness), JB.setTexture("reflectionCubeSampler", nB);
        const hB = BB.PN();
        for (const {
            feature: NB,
            state: gB,
            active: qB
          }
          of ZB.features) {
          var zB, FB;
          if (qB) null === (zB = (FB = (0, jI.h)(NB)).bind) || void 0 === zB || zB.call(FB, gB, JB, BB, hB)
        }
      }
    }

    function Co(BB) {
      const IB = BB.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(IB) ? "u32" : /i32|^vec\di$/.test(IB) ? "i32" : "f32"
    }

    function Qo(BB, IB) {
      const ZB = BB.getSize(),
        TB = Co(IB),
        JB = BB => 4 === ZB ? `${BB}x4` : 2 === ZB ? `${BB}x2` : null;
      if ("f32" === TB) {
        if (5126 === BB.type) return 1 === ZB ? "float32" : ZB >= 2 && ZB <= 4 ? `float32x${ZB}` : null;
        if (!BB.normalized) return null;
        switch (BB.type) {
          case 5121:
            return JB("unorm8");
          case 5120:
            return JB("snorm8");
          case 5123:
            return JB("unorm16");
          case 5122:
            return JB("snorm16")
        }
        return null
      }
      const oB = "u32" === TB ? "uint" : "sint";
      switch (BB.type) {
        case 5125:
        case 5124:
          return 1 === ZB ? `${oB}32` : ZB <= 4 ? `${oB}32x${ZB}` : null;
        case 5121:
        case 5120:
          return JB(`${oB}8`);
        case 5123:
        case 5122:
          return JB(`${oB}16`)
      }
      return null
    }

    function so(BB) {
      var IB;
      const ZB = /(8|16|32)(?:x(\d))?$/.exec(BB);
      return ZB ? Number(ZB[1]) / 8 * Number(null !== (IB = ZB[2]) && void 0 !== IB ? IB : 1) : 4
    }
    class wo {
      constructor(BB, IB, ZB) {
        this.resources = BB, this.limits = IB, this.warnOnce = ZB, this.layouts = new Map
      }
      resolveInputs(BB, IB, ZB, TB) {
        const JB = [],
          oB = ZB.program.attributes,
          GB = [];
        for (let nB = 0; nB < oB.length; nB++) {
          const ZB = oB[nB],
            vB = ZB.optional ? null : this.resources.vertexInput(BB, ZB.name, TB);
          if (!vB) {
            const BB = Co(ZB.type),
              IB = "u32" === BB ? "uint32x4" : "i32" === BB ? "sint32x4" : "float32x4";
            GB.push(null);
            const TB = JB.find((BB => null === BB.data));
            TB ? TB.attributes.push({
              shaderLocation: nB,
              offset: 0,
              format: IB
            }) : JB.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: nB,
                offset: 0,
                format: IB
              }]
            });
            continue
          }
          const kB = vB.getBuffer();
          GB.push(vB);
          const cB = Qo(vB, ZB.type);
          if (!cB) return this.warnOnce(`format:${IB}:${ZB.name}`, `${IB}'s ${ZB.name} (type ${vB.type}, size ${vB.getSize()}) has no WebGPU vertex format`), null;
          const hB = vB.getIsInstanced() ? "instance" : "vertex",
            zB = vB.byteStride,
            FB = so(cB),
            NB = JB.find((BB => BB.data === kB && BB.stride === zB && BB.step === hB && vB.byteOffset >= BB.base && vB.byteOffset - BB.base + FB <= zB));
          NB ? NB.attributes.push({
            shaderLocation: nB,
            offset: vB.byteOffset - NB.base,
            format: cB
          }) : JB.push({
            data: kB,
            base: vB.byteOffset,
            stride: zB,
            step: hB,
            attributes: [{
              shaderLocation: nB,
              offset: 0,
              format: cB
            }]
          })
        }
        if (JB.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${IB}`, `${IB} needs ${JB.length} vertex buffers`), null;
        let vB = "";
        for (const nB of JB) {
          vB += `${nB.stride}${"instance"===nB.step?"i":"v"}`;
          for (const BB of nB.attributes) vB += `,${BB.shaderLocation}:${BB.offset}:${BB.format}`;
          vB += ";"
        }
        let kB = this.layouts.get(vB);
        kB || (kB = {
          key: vB,
          buffers: JB.map((BB => ({
            arrayStride: BB.stride,
            stepMode: BB.step,
            attributes: BB.attributes
          }))),
          instanceEnds: JB.map((BB => {
            let IB = -1;
            if ("instance" === BB.step)
              for (const ZB of BB.attributes) IB = Math.max(IB, ZB.offset + so(ZB.format));
            return IB
          }))
        }, this.layouts.set(vB, kB));
        const cB = JB.map((BB => BB.base));
        return {
          program: ZB,
          sources: GB,
          layout: kB,
          slotData: JB.map((BB => BB.data)),
          O4: cB,
          buffers: [],
          offsets: cB,
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

    function Oo(BB, IB, ZB, TB) {
      const JB = IB.program.program.attributes;
      for (let oB = 0; oB < JB.length; oB++) {
        if ((JB[oB].optional ? null : ZB.vertexInput(BB, JB[oB].name, TB)) !== IB.sources[oB]) return !1
      }
      return !0
    }
    const Yo = 64;
    class io {
      constructor(BB, IB, ZB, TB) {
        this.device = BB, this.layout = IB, this.frameBuffer = ZB, this.label = TB, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(BB) {
        if (BB * Yo <= this.data.length) return !1;
        let IB = 2 * this.data.length;
        for (; BB * Yo > IB;) IB *= 2;
        const ZB = new Float32Array(IB);
        return ZB.set(this.data), this.data = ZB, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const JB = this.data,
          oB = BB * Yo;
        let GB = JB[oB + 16] !== ZB;
        for (let vB = 0; vB < 16 && !GB; vB++) GB = JB[oB + vB] !== IB[TB + vB];
        if (GB) {
          for (let BB = 0; BB < 16; BB++) JB[oB + BB] = IB[TB + BB];
          JB[oB + 16] = ZB
        }
        return GB
      }
      upload(BB, IB) {
        this.device.queue.writeBuffer(this.buffer, BB * cJ, this.data, BB * Yo, (IB - BB) * Yo)
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

    function po(BB) {
      return BB.gpu[iB.f.lite] ??= BB.materials.map(((IB, ZB) => ({
        parts: BB,
        range: ZB,
        owner: BB.owner
      })))
    }

    function ao(BB) {
      var IB, ZB, TB;
      return null !== (IB = null !== (ZB = null === (TB = BB.parts.materials[BB.range]) || void 0 === TB ? void 0 : TB.mirror) && void 0 !== ZB ? ZB : BB.owner.material) && void 0 !== IB ? IB : null
    }
    const Ho = ["opaque", "alphaTest", "transparent", "text"];

    function Mo(BB) {
      for (const IB of Ho) BB[IB].units.length = 0, BB[IB].rows.length = 0
    }
    class jo {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, MI.c)("Lite: ")
      }
      attach(BB, IB) {
        this.model = BB, this.mirror = IB
      }
      get worlds() {
        return this.model.nodes.vz
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(BB) {
        return this.groups.get(BB)
      }
      forEachGroup(BB) {
        this.groups.forEach(BB)
      }
      forEachSelected(BB) {
        for (const [IB, ZB] of this.groups)
          for (const TB of Ho)
            for (const JB of ZB[TB].units) BB(JB.owner, "text" === TB ? "transparent" : TB, IB)
      }
      select(BB, IB) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(Mo);
        const {
          model: ZB,
          mirror: TB
        } = this;
        if (!ZB || !TB || !BB) return;
        this.rows.length < ZB.nodes.ah && (this.rows = new Int32Array(ZB.nodes.ah));
        const JB = this.rows,
          oB = ZB.meshes;
        for (let vB = 0; vB < oB.looseCount; vB++) {
          const BB = oB.loose[vB],
            ZB = TB.nodes[BB];
          ZB && !ZB.isBlocked && ZB.isEnabled() && !ZB.ek.hasAZeroComponent && oB.selects(BB, IB.frustum) && (this.activate(ZB, BB), this.selectedCount++)
        }
        const GB = oB.selectTextPlanes(IB.frustum, JB);
        for (let vB = 0; vB < GB; vB++) {
          const IB = JB[vB],
            oB = TB.nodes[IB],
            GB = ZB.meshes.parts[IB];
          if (!oB.isVisible || !(oB.visibility > 0) || 0 === (oB.layerMask & BB.layerMask) || !GB) continue;
          const kB = this.groupOf(ZB.meshes.layer[IB]).text;
          for (const BB of po(GB)) kB.units.push(BB), kB.rows.push(IB);
          this.selectedCount++
        }
      }
      instanceBatch(BB) {
        const IB = this.batchOf(BB);
        return IB.dispatched || (IB.dispatched = IB.renderSelf = !0, IB.row = this.rowOf(BB)), IB
      }
      rowOf(BB) {
        return BB.row
      }
      activate(BB, IB) {
        if (!BB.vR) {
          const ZB = BB;
          if (ZB.sJB) {
            const BB = this.batchOf(ZB);
            BB.dispatched = !0, BB.renderSelf = !0, BB.row = IB
          }
          return void this.dispatch(ZB, IB, IB)
        }
        const ZB = BB,
          TB = ZB.wJB;
        if (TB._getWorldMatrixDeterminant() >= 0 !== ZB._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${TB.name}`, `A mirrored InstancedMesh of ${TB.name} is not drawn yet`);
        const JB = this.batchOf(TB);
        JB.instances.push(ZB), JB.rows.push(IB), JB.dispatched || (JB.dispatched = !0, this.dispatch(TB, IB, this.rowOf(TB)))
      }
      batchOf(BB) {
        let IB = this.batches.get(BB);
        return IB || (IB = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(BB, IB)), IB.frame !== this.frame && (IB.frame = this.frame, IB.dispatched = !1, IB.renderSelf = !1, IB.instances.length = 0, IB.rows.length = 0), IB
      }
      dispatch(BB, IB, ZB) {
        const {
          layer: TB,
          parts: JB
        } = this.model.meshes;
        if (!JB[IB]) return;
        const oB = this.groupOf(TB[IB]),
          GB = BB;
        for (const vB of po(JB[IB])) {
          const BB = ao(vB);
          if (!BB) continue;
          const IB = BB.needAlphaBlendingForMesh(GB) ? oB.transparent : BB.needAlphaTestingForMesh(GB) ? oB.alphaTest : oB.opaque;
          IB.units.push(vB), IB.rows.push(ZB)
        }
      }
      groupOf(BB) {
        let IB = this.groups.get(BB);
        return IB || (IB = {
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
        }, this.groups.set(BB, IB)), IB
      }
    }

    function Po(BB) {
      BB.opaque.length = 0, BB.transparent.length = 0
    }
    class Ro {
      constructor() {
        this.sv = new Map, this.enabled = [], this.groups = new Map, this.XF = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(BB) {
        if (this.sv.has(BB)) return;
        const IB = {
          mesh: BB,
          observer: BB.onEffectiveEnabledStateChangedObservable.add((BB => {
            this.qY(IB, BB)
          })),
          index: -1,
          steady: null
        };
        this.sv.set(BB, IB), this.qY(IB, BB.isEnabled())
      }
      remove(BB) {
        const IB = this.sv.get(BB);
        IB && (IB.observer.remove(!0), this.qY(IB, !1), this.sv.delete(BB))
      }
      dropSteady() {
        for (const BB of this.sv.values()) BB.steady = null
      }
      base(BB) {
        return this.sv.get(BB)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          sv: this.sv.size
        }
      }
      forEachSelected(BB) {
        for (const [IB, ZB] of this.groups) {
          for (const TB of ZB.opaque) BB(TB.owner, "opaque", IB);
          for (const TB of ZB.transparent) BB(TB.owner, "transparent", IB)
        }
        for (const IB of this.XF) BB(IB.mesh, "opaque", 0)
      }
      group(BB) {
        return this.groups.get(BB)
      }
      forEachGroup(BB) {
        this.groups.forEach(BB)
      }
      select(BB, IB) {
        if (this.drawn = 0, this.selected = 0, this.XF.length = 0, this.groups.forEach(Po), !BB) return;
        const ZB = this.enabled;
        for (let TB = 0; TB < ZB.length; TB++) {
          const JB = ZB[TB];
          if (JB.steady && IB(JB, BB)) {
            this.selected++, this.XF.push(JB);
            continue
          }
          const oB = JB.mesh;
          if (oB.isBlocked || oB.ek.hasAZeroComponent) continue;
          if (!oB.isVisible || oB.visibility <= 0 || 0 === (oB.layerMask & BB.layerMask)) continue;
          if (oB.sJB) {
            this.warned.has(oB.name) || (this.warned.add(oB.name), console.warn(`Lite: thin instance base ${oB.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: GB
          } = oB;
          if (!GB) continue;
          oB.computeWorldMatrix(), this.selected++;
          const vB = this.listsFor(oB.renderingGroupId);
          for (const BB of po(GB)) {
            const IB = ao(BB);
            IB && (IB.needAlphaBlendingForMesh(oB) ? vB.transparent.push(BB) : vB.opaque.push(BB))
          }
        }
      }
      qY(BB, IB) {
        if (IB === BB.index >= 0) return;
        BB.steady = null;
        const ZB = this.enabled;
        if (IB) BB.index = ZB.length, ZB.push(BB);
        else {
          const IB = ZB.pop();
          IB !== BB && (ZB[BB.index] = IB, IB.index = BB.index), BB.index = -1
        }
      }
      listsFor(BB) {
        let IB = this.groups.get(BB);
        return IB || (IB = {
          opaque: [],
          transparent: []
        }, this.groups.set(BB, IB)), IB
      }
    }
    var ro = ZB(39649);
    class mo {
      constructor() {
        this.bundle = null, this.stale = !0, this.sv = new Set
      }
    }
    class Xo {
      constructor(BB, IB, ZB) {
        this.device = BB, this.slots = IB, this.host = ZB, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new mo, this.gH = new mo, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new VJ, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = BB => {
          BB.seen !== this.frame && (BB.draw && (BB.draw = null, this.args[5 * BB.slot + 1] = 0, this.argsDirty = !0, this.gH.stale ||= BB.gH), this.frame - BB.seen > 120 && (this.records.delete(BB.unit), this.freeSlots.push(BB.slot), BB.recorded && (this.bundleOf(BB).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(BB) {
          var IB, ZB;
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (IB = null === (ZB = globalThis.navigator) || void 0 === ZB ? void 0 : ZB.userAgent) && void 0 !== IB ? IB : "";
          const JB = BB.adapterInfo;
          return "intel" === (null === JB || void 0 === JB ? void 0 : JB.vendor) && "gen-12lp" === JB.architecture && TB.includes("Windows")
        }(BB), (0, ro.F)(this.direct)
      }
      dW() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, ro.F)(this.directThisFrame)
      }
      add(BB, IB, ZB, TB) {
        let JB = this.records.get(BB);
        return JB || (JB = this.createRecord(BB), this.records.set(BB, JB)), JB.recorded && eo(JB, IB) || (this.bundleOf(JB).stale = !0), this.place(JB, IB, ZB, TB), JB
      }
      bundleOf(BB) {
        return BB.gH ? this.gH : this.main
      }
      addAgain(BB, IB, ZB, TB) {
        BB.recorded || (this.bundleOf(BB).stale = !0), this.place(BB, IB, ZB, TB)
      }
      place(BB, IB, ZB, TB) {
        BB.seen = this.frame, BB.gH && null === BB.draw && (this.gH.stale = !0), BB.draw = IB, this.drawn++, ZB && this.slots.write(BB.slot, ZB, TB) && (this.slotsFrom = Math.min(this.slotsFrom, BB.slot), this.slotsTo = Math.max(this.slotsTo, BB.slot));
        const JB = this.args,
          oB = 5 * BB.slot;
        JB[oB] === IB.count && JB[oB + 1] === IB.instances && JB[oB + 2] === IB.first || (JB[oB] = IB.count, JB[oB + 1] = IB.instances, JB[oB + 2] = IB.first, this.argsDirty = !0, this.gH.stale ||= BB.gH)
      }
      OW() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(BB) {
        for (const IB of this.records.values()) IB.draw && IB.seen === this.frame && !IB.gH && BB(IB.draw, this.slots.data, IB.slot * cJ / 4)
      }
      resourceDestroyed(BB) {
        this.main.stale ||= this.main.sv.has(BB), this.gH.stale ||= this.gH.sv.has(BB)
      }
      execute(BB, IB, ZB) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(BB, IB, ZB, "direct"), this.drawn;
        const TB = this.host.sceneGroup(IB);
        if (!TB) return this.main.bundle = null, this.gH.bundle = null, this.recordedSceneGroup = null, this.encode(BB, IB, ZB, "direct"), this.drawn;
        this.recordedTarget === ZB && this.recordedSceneGroup === TB || (this.recordedTarget = ZB, this.recordedSceneGroup = TB, this.main.stale = !0, this.gH.stale = !0);
        const JB = this.main,
          oB = this.gH;
        let GB = !1;
        !JB.stale && JB.bundle || (JB.bundle = this.record(IB, ZB, TB, "indirect"), GB = !0);
        const vB = (0, ro.j)();
        return (oB.stale || this.rangedEpoch !== vB) && (this.rangedEpoch = vB, oB.bundle = this.drawsRanged() ? this.record(IB, ZB, TB, "gH") : this.noRangedBundle(), GB = !0), GB && (this.bundles = oB.bundle ? [JB.bundle, oB.bundle] : [JB.bundle]), BB.executeBundles(this.bundles), BB.setBindGroup(0, TB), this.drawn
      }
      record(BB, IB, ZB, TB) {
        const JB = this.device.createRenderBundleEncoder({
          label: "gH" === TB ? "thin-bases-ranged" : "thin-bases",
          colorFormats: BB._colorFormat ? [BB._colorFormat] : [],
          depthStencilFormat: BB._depthStencilFormat,
          sampleCount: BB._sampleCount
        });
        return JB.setBindGroup(0, ZB), this.encode(JB, BB, IB, TB), JB.finish()
      }
      noRangedBundle() {
        for (const BB of this.records.values()) BB.gH && (BB.recorded = !1);
        return this.gH.sv.clear(), this.gH.stale = !1, null
      }
      drawsRanged() {
        for (const BB of this.records.values())
          if (BB.gH && BB.draw) return !0;
        return !1
      }
      encode(BB, IB, ZB, TB) {
        const JB = [];
        for (const kB of this.records.values()) "direct" !== TB && kB.gH !== ("gH" === TB) || (kB.recorded = !1, kB.draw && JB.push(kB));
        JB.sort(uo);
        const oB = "direct" === TB ? null : "gH" === TB ? this.gH : this.main;
        null === oB || void 0 === oB || oB.sv.clear(), this.binder.reset();
        let GB = !1;
        for (const kB of JB) {
          var vB;
          const JB = kB.draw,
            cB = this.host.pipelineFor(JB, IB, ZB);
          if (!cB) {
            this.host.pipelineCompiling(JB, ZB) ? GB = !0 : oB && this.keep(kB, JB, oB.sv);
            continue
          }
          let nB;
          if (kB.gH && "indirect" !== TB) {
            const BB = kB.unit.owner;
            nB = "direct" === TB && (0, ro.r)(BB) || (0, ro.k)(BB) || void 0
          }
          if (oB && this.keep(kB, JB, oB.sv), 0 === (null === (vB = nB) || void 0 === vB ? void 0 : vB.count)) continue;
          this.binder.bind(BB, JB, cB, this.slots.bindGroup, kB.slot * cJ);
          const hB = 5 * kB.slot;
          if ("indirect" === TB) {
            JB.indexBuffer ? BB.drawIndexedIndirect(this.argsBuffer, 4 * hB) : BB.drawIndirect(this.argsBuffer, 4 * hB);
            continue
          }
          const zB = this.args;
          nB ? Lo(BB, null !== JB.indexBuffer, zB, hB, nB) : JB.indexBuffer ? BB.drawIndexed(zB[hB], zB[hB + 1], zB[hB + 2], 0, 0) : BB.draw(zB[hB], zB[hB + 1], zB[hB + 2], 0)
        }
        oB && (oB.stale = GB)
      }
      keep(BB, IB, ZB) {
        BB.recorded = !0, BB.pipelineKey = IB.pipelineKey, BB.materialGroup = IB.material.bindGroup, BB.vertexBuffers.length = 0, BB.vertexBuffers.push(...IB.vertexBuffers), BB.vertexOffsets = IB.vertexOffsets, BB.indexBuffer = IB.indexBuffer, BB.indexFormat = IB.indexFormat;
        for (const TB of IB.vertexBuffers) ZB.add(TB);
        IB.indexBuffer && ZB.add(IB.indexBuffer), ZB.add(IB.material.buffer);
        for (const TB of IB.material.bound) TB && ZB.add(TB)
      }
      createRecord(BB) {
        let IB = this.freeSlots.pop();
        return void 0 === IB && (IB = this.slotCount++, this.grow()), {
          unit: BB,
          slot: IB,
          gH: void 0 !== (0, ro.k)(BB.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.gH.stale = !0), 5 * this.slotCount > this.args.length) {
          const BB = new Uint32Array(2 * this.args.length);
          BB.set(this.args), this.args = BB, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Lo(BB, IB, ZB, TB, JB) {
      const oB = ZB[TB + 1],
        GB = JB.data;
      for (let vB = 0; vB < JB.count; vB++) {
        const JB = Math.min(GB[2 * vB], oB),
          kB = Math.min(GB[2 * vB + 1], oB - JB);
        0 !== kB && (IB ? BB.drawIndexed(ZB[TB], kB, ZB[TB + 2], 0, JB) : BB.draw(ZB[TB], kB, ZB[TB + 2], JB))
      }
    }

    function eo(BB, IB) {
      if (BB.pipelineKey !== IB.pipelineKey || BB.materialGroup !== IB.material.bindGroup || BB.indexBuffer !== IB.indexBuffer || BB.indexFormat !== IB.indexFormat || BB.vertexOffsets !== IB.vertexOffsets || BB.vertexBuffers.length !== IB.vertexBuffers.length) return !1;
      for (let ZB = 0; ZB < BB.vertexBuffers.length; ZB++)
        if (BB.vertexBuffers[ZB] !== IB.vertexBuffers[ZB]) return !1;
      return !0
    }

    function uo(BB, IB) {
      return Bo(BB.draw, IB.draw)
    }
    const fo = new WeakMap,
      Ao = {
        depth: !1,
        sunShadow: !1
      };

    function to(BB, IB) {
      let ZB = fo.get(BB);
      ZB || (ZB = new Map, fo.set(BB, ZB));
      const TB = `${IB.depth?"-depth":""}${IB.sunShadow?"-shadow":""}${IB.shadowMask?"-mask":""}`;
      let JB = ZB.get(TB);
      if (!JB) {
        const oB = [{
          binding: DI.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: DI.i
          }
        }, {
          binding: DI.w,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        IB.depth && oB.push({
          binding: DI.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), IB.sunShadow && oB.push(... function() {
          const BB = GPUShaderStage.FRAGMENT,
            IB = DI.s;
          return [{
            binding: IB.uniform,
            visibility: BB,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: IB.mz,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: IB.special,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: IB.volume,
            visibility: BB,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: IB.sampler,
            visibility: BB,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: IB.entities,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: IB.entityGrids,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), IB.shadowMask && oB.push({
          binding: DI.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), JB = BB.createBindGroupLayout({
          label: `${IB.depth?"terrain-":""}shader-pack-inputs${TB}`,
          entries: oB
        }), ZB.set(TB, JB)
      }
      return JB
    }

    function bo(BB) {
      return to(BB, Ao)
    }

    function xo(BB, IB) {
      if (!IB) return !1;
      const ZB = (0, KI.g)(BB);
      return !!ZB && oT(ZB, IB)
    }

    function Eo(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!MT(IB)) return [];
      return [to(BB, {
        depth: YT(IB.packVariant),
        sunShadow: xo(IB.packVariant, ZB),
        shadowMask: TB
      })]
    }
    class Do {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = BB, this.sunShadow = ZB, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(DI.i), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = BB.createBuffer({
          label: "shader-pack-inputs",
          size: DI.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const TB = (0, DI.A)(IB);
        this.textures = BB.createBuffer({
          label: "shader-pack-textures",
          size: TB.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), BB.queue.writeBuffer(this.textures, 0, TB), this.bindGroup = BB.createBindGroup({
          label: "shader-pack-inputs",
          layout: bo(BB),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: DI.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: DI.w,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(BB, IB, ZB) {
        (0, DI.D)(this.data, {
          seconds: BB.seconds(),
          lit: ZB,
          renderOffset: BB.renderOffset(),
          WBB: BB.WBB(),
          eyePosition: IB,
          shadowDirection: BB.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const TB = IB ? this.sunShadow : null;
        if ((IB || ZB) && !TB) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!BB && !TB) return this.bindGroup;
        (BB && BB !== this.depthView || ZB && ZB !== this.maskView) && (this.depthView = null !== BB && void 0 !== BB ? BB : this.depthView, this.maskView = null !== ZB && void 0 !== ZB ? ZB : this.maskView, this.groups.clear());
        const JB = (BB ? 1 : 0) | (TB ? 2 : 0) | (ZB ? 4 : 0);
        let oB = this.groups.get(JB);
        if (!oB) {
          const IB = this.entries();
          BB && IB.push({
            binding: DI.q,
            resource: BB
          }), TB && IB.push(...TB.entries()), ZB && IB.push({
            binding: DI.u,
            resource: ZB
          }), oB = this.device.createBindGroup({
            label: `${BB||ZB?"terrain-":""}shader-pack-inputs${BB?"-depth":""}${TB?"-shadow":""}${ZB?"-mask":""}`,
            layout: to(this.device, {
              depth: !!BB,
              sunShadow: !!TB,
              shadowMask: !!ZB
            }),
            entries: IB
          }), this.groups.set(JB, oB)
        }
        return oB
      }
      bind(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        BB.setBindGroup(DI.f, this.bindGroupFor(IB, ZB, TB))
      }
    }

    function Ko(BB, IB, ZB) {
      if (BB.gpuVersion === IB.gpuBuffersVersion) return !0;
      let TB;
      do {
        if (TB = IB.gpuBuffersVersion, !Vo(BB, IB, ZB)) return !1
      } while (IB.gpuBuffersVersion !== TB);
      return BB.gpuVersion = TB, BB.fitInstances = 0, !0
    }

    function Vo(BB, IB, ZB) {
      let TB = null;
      for (let oB = 0; oB < BB.slotData.length; oB++) {
        var JB;
        const GB = BB.slotData[oB],
          vB = GB ? IB.gpuBuffer(GB) : ZB;
        if (!vB) return !1;
        GB && BB.layout.instanceEnds[oB] < 0 && IB.cover(GB, Number.POSITIVE_INFINITY), BB.buffers[oB] = vB;
        const kB = BB.O4[oB] + (GB ? IB.gpuOffset(GB) : 0);
        kB !== (null !== (JB = TB) && void 0 !== JB ? JB : BB.offsets)[oB] && (TB ??= BB.offsets.slice(), TB[oB] = kB), BB.ends[oB] = GB ? IB.gpuEnd(GB) : vB.size
      }
      return TB && (BB.offsets = TB), !0
    }

    function So(BB, IB, ZB, TB) {
      if (IB <= BB.fitInstances) return null;
      const {
        layout: JB,
        ends: oB,
        offsets: GB,
        slotData: vB,
        O4: kB
      } = BB;
      let cB = !1;
      for (let nB = 0; nB < JB.buffers.length; nB++) {
        const BB = JB.instanceEnds[nB];
        if (BB < 0) continue;
        const TB = (IB - 1) * JB.buffers[nB].arrayStride + BB;
        if (oB[nB] - GB[nB] < TB) return {
          index: nB,
          needed: TB
        };
        const hB = vB[nB];
        hB && ZB.cover(hB, kB[nB] + TB) && (cB = !0)
      }
      return cB && Ko(BB, ZB, TB), BB.fitInstances = IB, null
    }
    var BG = ZB(37869),
      IG = ZB(37901);
    const ZG = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      TG = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      JG = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      oG = `((vertexInputs.aPackedLightLevels >> 16u) | ${HI.d.placed}u)`,
      GG = "u32(vertexInputs.aShaderPackItem.x)",
      vG = `${HI.d.lifeform}u`;

    function kG(BB) {
      return "item" === BB.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const cG = "bloxdSpEnchant",
      nG = "floor(finalWorld[3].xyz)";

    function hG(BB, IB, ZB) {
      return "placed" === IB.kind && BB.reads[ZB].includes("bloxdFragmentBlockPosition")
    }

    function zG(BB, IB) {
      let [ZB, TB] = BB;
      return ZB === IB.point && TB === IB.code
    }

    function FG(BB, IB) {
      var ZB, TB, JB;
      const oB = null === (ZB = BB.find((BB => BB.texture))) || void 0 === ZB ? void 0 : ZB.texture,
        GB = null === (TB = BB.find((BB => BB.enchantTier))) || void 0 === TB ? void 0 : TB.enchantTier,
        vB = null === (JB = BB.find((BB => BB.overlay))) || void 0 === JB ? void 0 : JB.overlay,
        kB = vB ? IB.filter((BB => zG(BB, vB))).length : 0;
      return vB && 1 === kB ? {
        texture: oB,
        overlay: vB,
        enchantTier: GB
      } : {
        texture: oB,
        enchantTier: GB
      }
    }

    function NG(BB) {
      if ("item" === BB.kind) {
        return {
          vertexFlags: `(${GG} & 0xffffu)`,
          varying: "vPackItem",
          value: GG,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return BB.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: oG,
        varying: "vPackFlags",
        value: oG,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function gG(BB) {
      return "lifeform" === BB.kind ? vG : "0u"
    }

    function qG(BB) {
      return !!BB.BLOXD_PLUGIN_ENCHANTMENT
    }

    function yG(BB, IB) {
      const {
        enchantTier: ZB
      } = IB;
      return ZB && qG(IB.defines) && "lifeform" === IB.kind && sG(BB, "enchantTier") ? ZB : null
    }

    function UG(BB, IB) {
      return qG(IB.defines) && sG(BB, "enchantSpeed")
    }

    function WG(BB) {
      const {
        overlay: IB,
        defines: ZB
      } = BB;
      if (!IB || !ZB.DIFFUSE) return null;
      const TB = ZB.VERTEXCOLOR || ZB.INSTANCESCOLOR && ZB.INSTANCES;
      return `vec4f(${IB.colour}.rgb * uniforms.vDiffuseInfos.y${TB?" * fragmentInputs.vColor.rgb":""}, ${IB.colour}.a)`
    }
    const dG = "fragmentInputs.vPackTexture";

    function CG(BB) {
      const {
        atlas: IB,
        defines: ZB,
        texture: TB
      } = BB;
      if (IB || !ZB.DIFFUSE) return null;
      if (TB) return {
        texture: "diffuseSampler",
        ...TB
      };
      const JB = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===ZB.DIFFUSEDIRECTUV?"vMainUV1":2===ZB.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== BB.kind) return JB;
      if (!ZB.BLOXD_PLUGIN_ANIMATED) return {
        ...JB,
        id: dG
      };
      const oB = QB.c.WGSL,
        GB = (0, QB.Hb)(oB, "uAnimStatesNum"),
        vB = (0, QB.db)(oB, (0, BG.f)(oB), GB),
        kB = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${GB})`,
        layers: [vB],
        uv: `vec2f(${kB}.x, ${kB}.y * ${GB} - ${vB})`,
        levelUv: kB,
        id: dG
      }
    }

    function QG(BB, IB) {
      return "box" === IB.kind && !!BB.hooks.surface && null !== CG(IB)
    }

    function sG(BB, IB) {
      return BB.reads.fragment.includes(IB)
    }

    function wG(BB) {
      return !!BB.BLOXD_LIGHTING && !BB.BLOXD_UNLIT
    }

    function OG(BB, IB, ZB, TB) {
      const JB = BB.filter((BB => {
        let [ZB, TB] = BB;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === ZB && TB === IB
      }));
      if (1 !== JB.length) throw new Error(`A model program for shader packs has ${0===JB.length?"no":"more than one"} ${TB} code before fog (lite/modelShaderPack.ts)`);
      return BB.map((BB => BB === JB[0] ? [BB[0], ZB] : BB))
    }

    function YG(BB, IB, ZB, TB) {
      const {
        hooks: JB
      } = BB, {
        kind: oB,
        defines: GB
      } = IB, vB = [...ZB];
      var kB;
      IB.atlas && JB.surface && vB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", zT("atlasIdxIn")]), "item" === oB && vB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, QB.g)(QB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), QG(BB, IB) && vB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, QB.g)(QB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (kB = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${nT}[min(u32(${kB}) - 1u, arrayLength(&${nT}) - 1u)], ${kB} > 0.5);\n`)]);
      const cB = NG(IB);
      cB && (JB.surface || JB.light) && vB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${cB.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${cB.varying} = ${cB.value};`]);
      let nB = TB;
      if (hG(BB, IB, "fragment") && (vB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${nG});`]), nB = [...nB, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), sG(BB, "localPosition") && vB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${kG(IB)};`]), qG(GB) && JB.surface) {
        UG(BB, IB) && vB.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const ZB = yG(BB, IB);
        ZB && vB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${ZB});`]);
        const TB = (0, QB.rb)(QB.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        nB = [...OG(nB, (0, IG.h)(QB.c.WGSL), TB, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, IG.b)(cG)]]
      }
      const {
        overlay: hB
      } = IB;
      hB && WG(IB) && JB.surface && (nB = nB.filter((BB => !zG(BB, hB))));
      const zB = JB.light ? function(BB) {
        return "placed" === BB.kind ? {
          name: "terrain",
          engine: (0, bI.N)(QB.c.WGSL),
          pack: (0, bI.hb)(QB.c.WGSL)
        } : BB.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, bI.E)(QB.c.WGSL),
          pack: (0, bI.eb)(QB.c.WGSL)
        } : null
      }(IB) : null;
      if (zB && (nB = OG(nB, zB.engine, zB.pack, `${zB.name} light`), "placed" !== oB && wG(GB))) {
        const BB = GB.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, QB.Hb)(QB.c.WGSL, "uEntityLightLevels") : (0, QB.Pb)(QB.c.WGSL, "aLightLevels");
        vB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${bI.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, bI.gb)(QB.c.WGSL, BB)])
      }
      return {
        vertexCode: vB,
        fragmentCode: nB
      }
    }

    function iG(BB, IB, ZB, TB) {
      return TT(BB, IB, ZB, TB, "model")
    }
    const pG = "\t@builtin(position) position: vec4f,\n";

    function aG(BB, IB) {
      const ZB = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(BB)[0];
      return `${ZB}${IB}${BB.slice(ZB.length)}`
    }

    function HG(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: JB
      } = IB, oB = oT(IB, TB), {
        kind: GB,
        defines: vB
      } = ZB, kB = function(BB, IB) {
        var ZB, TB, JB;
        const {
          defines: oB
        } = IB, GB = NG(IB), vB = !!oB.FOG, kB = qG(oB), cB = null !== (ZB = null === GB || void 0 === GB ? void 0 : GB.enchantTier) && void 0 !== ZB ? ZB : yG(BB, IB) ? "fragmentInputs.vPackEnchantTier" : "0u", nB = "lifeform" === IB.kind && !oB.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (TB = null === GB || void 0 === GB ? void 0 : GB.vertexFlags) && void 0 !== TB ? TB : gG(IB),
          vertexLocalPosition: kG(IB),
          flags: null !== (JB = null === GB || void 0 === GB ? void 0 : GB.flags) && void 0 !== JB ? JB : gG(IB),
          normal: "normalW",
          alpha: nB ? "alpha * baseColor.a" : "alpha",
          alphaOut: nB ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: vB ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: vB ? "1.0 - fog" : "0.0",
          enchantTier: cB,
          enchantColour: kB ? `${cG}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: UG(BB, IB) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: sG(BB, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: WG(IB)
        }
      }(IB, ZB), cB = BB.textures.filter((BB => /^textureAtlas\d+$/.test(BB.name))).length, nB = ZB.atlas && cB > 0 ? {
        count: cB,
        layers: ZB.atlas.layers,
        width: ZB.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: BB.material.slots.has("uAnimDataPerTex") ? (IB, ZB) => DT(IB, ZB, function(BB) {
          const IB = BB.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Iz: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: BB => `uniforms.uAnimDataPerTex[${BB}]${IB}`
          }
        }(BB)) : null
      } : null, hB = "placed" === GB ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", zB = null !== nB && void 0 !== nB ? nB : CG(ZB), FB = function(BB, ZB) {
        let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,DI.B)()}${vT(IB,ZB)}${TB}${NT(BB)}${BT}${hB}${IB.code}`
      };
      let {
        vertex: NB,
        fragment: gB
      } = BB;
      const qB = qT(JB, kB);
      if (qB) {
        const BB = hG(IB, ZB, "vertex") ? `\tbloxdSpCell = ${nG};\n` : "";
        NB = iG(NB, ZG, `${BB}${qB.slice(1)}${ZG}`, "vertex")
      }
      const yB = `${kT(IB,oB,function(BB,IB){return IB.TWOSIDEDLIGHTING?BB:`select(-(${BB}), ${BB}, fragmentInputs.frontFacing)`}(kB.normal,vB),kB.flags)}${yT(JB,IB.strict,IB.program,zB,kB)}`;
      yB && (gB = iG(gB, TG, `${yB.slice(1)}${TG}`, "surface")), oB && IB.sunShadow && !vB.TWOSIDEDLIGHTING && (gB = iG(gB, pG, `${pG}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const UB = dT(JB);
      if (UB) {
        const BB = WT(JB, wG(vB), !0, kB);
        gB = iG(gB, JG, `${BB}${UB.slice(1)}${JG}`, "light")
      }
      const WB = QG(IB, ZB) ? hT : "";
      return {
        ...BB,
        vertex: aG(NB, FB(nB, !1, WB)),
        fragment: aG(gB, FB(zB, oB))
      }
    }
    const MG = {
      name: "earthSky",
      uniqueId: -1
    };
    class jG {
      constructor(BB, IB) {
        this.resources = BB, this.epoch = IB, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const BB of this.instances.values()) BB.released = !0, this.resources.destroyBuffer(BB.buffer);
        this.instances.clear()
      }
    }

    function PG(BB) {
      return BB.failed && null !== BB.packGroup
    }
    class RG {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ro,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new jo;
        this.device = BB, this.resources = IB, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Z4 = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new VJ, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Wo((BB => this.modelSlot(BB).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, MI.c)("Lite: "), this.renderStates = new No(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (BB, IB) => this.keepSteady(BB, IB), this.lists = void 0, this.slotCount = 0, this.Z4 = TB, this.modelMeshes = JB, this.lists = new SJ(JB, TB, this, this.warnOnce), this.drawDefines = new no(IB, this.warnOnce, ((BB, IB, ZB) => this.programWithModel(BB, IB, ZB)), PG), this.vertexLayouts = new wo(IB, BB.limits, this.warnOnce), this.sceneLayout = sI(BB), this.frameLayout = BB.createBindGroupLayout({
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
        }), this.frameBuffer = BB.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new io(BB, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = BB.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Xo(BB, new io(BB, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (BB, IB, ZB) => this.pipelineFor(BB, IB, ZB),
          pipelineCompiling: (BB, IB) => !BB.program.failed && !1 !== this.pipelines.get(`${BB.pipelineKey}|${IB}`),
          sceneGroup: BB => {
            const IB = ZB(BB);
            return IB || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), IB
          }
        }), IB.onDestroy = BB => {
          this.thinBundle.resourceDestroyed(BB)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const JB = {
          order: BB,
          isTransparent: IB,
          _direct: !IB,
          bind: (BB, IB) => this.createBinding(JB, IB, ZB, TB)
        };
        return JB
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(BB, IB, ZB) {
        var TB;
        let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = IB, this.drawDefines.view = IB, this.thinBundle.dW(), this.writeFrameUniforms();
        const oB = null !== (TB = null === JB || void 0 === JB ? void 0 : JB.defineFor("model")) && void 0 !== TB ? TB : 0;
        this.drawDefines.modelPackVariant = oB, JB && 0 !== oB && (this.packInputs ??= new Do(this.device, JB.textureLayers(), this.sunShadow), this.packInputs.write(JB, IB.eye, JB.Xg())), this.lists.clear(), this.slotCount = 0;
        const GB = BB.activeCamera;
        this.Z4.select(GB, this.keepSteadyBase), this.modelMeshes.select(GB, IB), ZB && this.pushEarthSky(ZB), this.lists.collect(BB), this.thinBundle.OW(), this.uploadMeshSlots()
      }
      pushDraws(BB, IB, ZB, TB, JB, oB) {
        let GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const vB = oB.length;
        for (let kB = 0; kB < ZB; kB++) {
          const ZB = IB[kB];
          let vB = this.retainedDraw(BB, ZB, TB, JB);
          if (void 0 === vB && (vB = this.drawFor(BB, ZB, TB, JB), this.retain(ZB, vB)), vB) {
            const BB = ZB.owner,
              IB = GB ? GB[kB] : -1;
            vB.slotOffset = IB < 0 ? this.writeMeshSlot(BB.getWorldMatrix().m, BB.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[IB], 16 * IB), oB.push(vB)
          }
        }
        return oB.length - vB
      }
      bundleDraws(BB, IB, ZB) {
        let TB = 0;
        for (const JB of IB) {
          let IB = this.retainedDraw(BB, JB, ZB, !1);
          const oB = void 0 !== IB;
          if (void 0 === IB && (IB = this.drawFor(BB, JB, ZB, !1), this.retain(JB, IB)), IB) {
            const BB = JB.owner,
              ZB = this.thinBundle.add(JB, IB, BB.getWorldMatrix().m, BB.visibility);
            oB && this.steadyFrom(JB, IB, ZB), TB++
          }
        }
        return TB
      }
      steadyFrom(BB, IB, ZB) {
        const TB = BB.owner,
          JB = this.Z4.base(TB),
          oB = TB.material,
          {
            drawState: GB,
            instance: vB
          } = IB.inputs.retained;
        if (!JB || !oB || 1 !== BB.parts.materials.length || ao(BB) !== oB) return;
        const kB = JB.steady ??= {
          unit: BB,
          material: oB,
          visibility: 1,
          draw: IB,
          record: ZB,
          drawState: GB,
          instance: vB,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        kB.unit = BB, kB.material = oB, kB.visibility = TB.visibility, kB.draw = IB, kB.record = ZB, kB.drawState = GB, kB.instance = vB, kB.bindGroup = vB.bindGroup, kB.gpuVersion = this.resources.gpuBuffersVersion, kB.fitInstances = IB.inputs.fitInstances, kB.worldFlag = TB.getWorldMatrix().updateFlag, kB.handedFrame = this.frame
      }
      keepSteady(BB, IB) {
        const ZB = BB.steady;
        if (ZB.handedFrame !== this.frame - 1 || (this.frame + ZB.phase) % 8 === 0) return !1;
        const TB = BB.mesh,
          {
            unit: JB,
            draw: oB,
            instance: GB,
            drawState: vB
          } = ZB,
          kB = TB.forcedInstanceCount || TB.B3;
        if (!TB.isVisible || TB.sJB || TB.visibility !== ZB.visibility || 0 === (TB.layerMask & IB.layerMask) || TB.material !== ZB.material || 0 !== TB.renderingGroupId || TB.hasVertexAlpha || !this.drawDefines.definesHold(vB, JB, vB.instancing) || ZB.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(oB.inputs, JB, vB.instancing, oB.program) || oB.program.failed || GB.released || kB <= 0 || kB > ZB.fitInstances) return !1;
        if (GB.frame !== this.frame && this.bindMaterial(GB, this.modelUniforms.refreshModelUniforms(TB.JR(), GB, GB.model, this.view)), !GB.bindable || GB.bindGroup !== ZB.bindGroup) return !1;
        const cB = TB.computeWorldMatrix(),
          nB = cB.updateFlag !== ZB.worldFlag;
        return ZB.worldFlag = cB.updateFlag, oB.instances = kB, this.thinBundle.addAgain(ZB.record, oB, nB ? cB.m : null, ZB.visibility), ZB.handedFrame = this.frame, this.Z4.drawn++, !0
      }
      retainedDraw(BB, IB, ZB, TB) {
        const JB = this.inputs.get(IB),
          oB = null === JB || void 0 === JB ? void 0 : JB.retained;
        if (!JB || !oB) return;
        const {
          drawState: GB,
          program: vB,
          instance: kB,
          instancing: cB
        } = oB, nB = IB.owner;
        if (Jo(nB) !== cB) return;
        const hB = this.instanceCount(nB, cB);
        if (hB <= 0) return null;
        if (kB.released || vB.failed || GB.program !== vB || !this.drawDefines.programCurrent(GB, IB, cB, ZB) || !this.inputsStamped(JB, IB, cB, vB) || nB.isUnIndexed !== oB.unIndexed || this.indexKey(IB) !== oB.indexData) return;
        if (oB.indexBuffer && oB.gpuVersion !== this.resources.gpuBuffersVersion) {
          const BB = this.resources.gpuBuffer(oB.indexData);
          if (!BB) return;
          oB.indexBuffer = BB, oB.gpuVersion = this.resources.gpuBuffersVersion
        }
        let zB = !1;
        if (kB.frame !== this.frame && (zB = this.modelUniforms.refreshModelUniforms(BB, kB, kB.model, this.view)), !this.bindMaterial(kB, zB) || !this.withGpuBuffers(JB) || !this.instanceBuffersFit(nB.name, JB, hB)) return null;
        const FB = this.makeDraw(vB, JB, this.renderStates.renderState(GB.model, nB, TB, JB.state), kB, hB);
        return this.setRange(FB, IB, oB.indexBuffer, oB.indexData), FB
      }
      retain(BB, IB) {
        const ZB = this.drawDefines.drawStates.get(BB);
        if (!IB || !ZB || ZB.program !== IB.program) {
          const IB = this.inputs.get(BB);
          return void(IB && (IB.retained = null))
        }
        const TB = BB.owner,
          JB = ZB.instancing,
          oB = this.indexKey(BB),
          GB = IB.inputs.retained;
        GB ? (GB.drawState = ZB, GB.instancing = JB, GB.program = IB.program, GB.instance = IB.material, GB.indexData = oB, GB.unIndexed = TB.isUnIndexed, GB.indexBuffer = IB.indexBuffer, GB.gpuVersion = this.resources.gpuBuffersVersion) : IB.inputs.retained = {
          drawState: ZB,
          instancing: JB,
          program: IB.program,
          instance: IB.material,
          indexData: oB,
          unIndexed: TB.isUnIndexed,
          indexBuffer: IB.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(BB, IB, ZB, TB) {
        const JB = IB.owner,
          oB = ao(IB);
        if (!oB) return null;
        const GB = oB.getClassName();
        let vB = null;
        if (function(BB) {
            return "LinesMesh" === BB.getClassName()
          }(JB)) {
          if (! function(BB) {
              return "ShaderMaterial" === BB.getClassName() && "color" === BB.shaderPath
            }(oB)) return this.warnOnce(`lines:${GB}`, `A LinesMesh with a ${GB} is not drawn yet (${oB.name})`), null;
          vB = JB
        } else if ("StandardMaterial" !== GB && "LiteMaterial" !== GB) return this.warnOnce(`class:${GB}`, `${GB} is not drawn yet (${oB.name})`), null;
        const kB = Jo(JB),
          cB = this.instanceCount(JB, kB);
        if (cB <= 0) return null;
        const nB = vB ? this.lineProgramFor(JB, ZB, kB) : this.drawDefines.programFor(BB, IB, oB, ZB, kB);
        if (!nB || nB.failed) return null;
        const hB = vB ? null : this.drawDefines.drawStates.get(IB).model,
          zB = hB ? this.modelInstance(hB, nB) : this.materialInstance(JB, nB);
        let FB = !1;
        if (zB.frame !== this.frame && (vB ? UB(zB.ubo, vB) : FB = this.modelUniforms.refreshModelUniforms(BB, zB, zB.model, this.view)), !this.bindMaterial(zB, FB)) return null;
        const NB = this.meshInputs(IB, nB, kB);
        if (!NB || !this.instanceBuffersFit(JB.name, NB, cB)) return null;
        const gB = this.indexKey(IB);
        let qB = null;
        if (gB && !JB.isUnIndexed && (qB = this.resources.gpuBuffer(gB), !qB)) return null;
        const yB = this.renderStates.renderState(null !== hB && void 0 !== hB ? hB : oB, JB, TB, NB.state, vB ? "line-list" : "triangle-list"),
          WB = this.makeDraw(nB, NB, yB, zB, cB);
        return this.setRange(WB, IB, qB, gB), WB
      }
      indexKey(BB) {
        const IB = ko(BB);
        return IB ? this.resources.modelIndex(IB) : null
      }
      setRange(BB, IB, ZB, TB) {
        ZB && (BB.indexBuffer = ZB, BB.indexFormat = this.resources.indexFormat(TB));
        const JB = 4 * IB.range + (ZB ? 0 : 2);
        BB.unit = IB, BB.first = IB.parts.vq[JB], BB.count = IB.parts.vq[JB + 1]
      }
      makeDraw(BB, IB, ZB, TB, JB) {
        IB.state !== ZB && (IB.state = ZB, IB.pipelineKey = `${BB.id}|${IB.layout.key}|${ZB.key}`, IB.pipeline = null);
        const oB = IB.draw ??= {
          program: BB,
          inputs: IB,
          pipelineKey: "",
          layout: IB.layout,
          state: ZB,
          material: TB,
          slotOffset: 0,
          vertexBuffers: IB.buffers,
          vertexOffsets: IB.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: JB,
          unit: null
        };
        return oB.program = BB, oB.pipelineKey = IB.pipelineKey, oB.state = ZB, oB.material = TB, oB.vertexOffsets = IB.offsets, oB.indexBuffer = null, oB.instances = JB, oB
      }
      instanceCount(BB, IB) {
        switch (IB) {
          case "thin":
            return BB.forcedInstanceCount || BB.B3;
          case "instanced":
            return this.prepareInstances(BB);
          case "none":
            return 1
        }
      }
      prepareInstances(BB) {
        const IB = function(BB, IB) {
          const ZB = IB._userInstancedBuffersStorage,
            TB = BB.batchUploads.get(IB);
          if (TB) {
            var JB;
            if (TB.layout === (null !== (JB = null === ZB || void 0 === ZB ? void 0 : ZB.interleavedKinds) && void 0 !== JB ? JB : null)) return TB;
            TB.release()
          }
          return new FI(BB, IB, ZB)
        }(this.resources, BB);
        return IB.frame !== this.frame && IB.pack(BB, this.modelMeshes.instanceBatch(BB), this.modelMeshes.worlds, this.frame), IB.count
      }
      programWithModel(BB, IB, ZB) {
        const TB = this.modelSlot(BB),
          JB = ho(TB, BB, ZB),
          oB = this.drawDefines.modelPackKind(BB),
          GB = oB ? function(BB, IB, ZB, TB) {
            const JB = (0, OB.v)(BB, sB.g.name),
              oB = [];
            for (const {
                feature: kB,
                state: cB,
                active: nB
              }
              of BB.features) {
              var GB, vB;
              const BB = nB ? null === (GB = (vB = (0, jI.h)(kB)).oN) || void 0 === GB ? void 0 : GB.call(vB, cB) : void 0;
              BB && oB.push(BB)
            }
            return {
              kind: IB,
              atlas: null !== JB && void 0 !== JB && JB.active ? (0, sB.b)(JB.state) : null,
              defines: ZB,
              ...FG(oB, TB)
            }
          }(BB, oB, IB, TB.fragmentCode) : null;
        if (GB && function(BB) {
            const IB = BB.defines;
            return (null === BB.atlas || !!IB.DIFFUSE && 1 === IB.DIFFUSEDIRECTUV) && !!IB.NORMAL && !IB.REFLECTION && !IB.EMISSIVEASILLUMINATION && !IB.LINKEMISSIVEWITHDIFFUSE
          }(GB)) {
          const ZB = this.modelPackProgram(BB, IB, `${JB}#${oB}#sp${this.drawDefines.modelPackVariant}`, TB, GB);
          if (ZB && !ZB.failed) return ZB
        }
        const vB = this.programs.get(JB);
        if (vB || this.unbuildable.has(JB)) return null !== vB && void 0 !== vB ? vB : null;
        let kB;
        try {
          kB = aJ({
            defines: Go(IB),
            vertexCode: TB.vertexCode,
            fragmentCode: TB.fragmentCode,
            pluginUniforms: TB.pluginUniforms
          })
        } catch (cB) {
          return this.unbuildable.add(JB), this.warnOnce(`build:${JB}`, `could not build a program for ${BB.name}: ${String(cB)}`), null
        }
        return this.createProgram(JB, kB, "standard")
      }
      modelPackProgram(BB, IB, ZB, TB, JB) {
        const oB = this.programs.get(ZB);
        if (oB || this.unbuildable.has(ZB)) return null !== oB && void 0 !== oB ? oB : null;
        const GB = this.drawDefines.modelPackVariant;
        let vB;
        try {
          const BB = function(BB) {
              return (0, KI.e)(BB, "model")
            }(GB),
            ZB = YG(BB, JB, TB.vertexCode, TB.fragmentCode);
          vB = HG(aJ({
            defines: Go(IB),
            ...ZB,
            pluginUniforms: TB.pluginUniforms
          }), BB, JB, !!this.sunShadow)
        } catch (nB) {
          return this.unbuildable.add(ZB), this.warnOnce(`build:${ZB}`, `could not build a shader pack program for ${BB.name}, which draws without the pack: ${String(nB)}`), null
        }
        const kB = xo(GB, !!this.sunShadow),
          cB = {
            group: this.packInputs.bindGroupFor(null, kB),
            layout: to(this.device, {
              depth: !1,
              sunShadow: kB
            })
          };
        return this.createProgram(ZB, vB, function(BB) {
          return `standard-sp${BB}`
        }(GB), cB)
      }
      lineProgramFor(BB, IB, ZB) {
        const TB = yB(BB, ZB, IB, this.view);
        let JB = this.linePrograms.get(TB);
        var oB;
        return JB || (JB = this.createProgram(`lines#${TB}`, (oB = function(BB) {
          const IB = new Map;
          for (let ZB = 0; ZB < cB.length; ZB++) BB & 1 << ZB && IB.set(cB[ZB], !0);
          return IB
        }(TB), PJ({
          defines: oB,
          vertex: MJ,
          fragment: jJ,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(TB, JB)), JB
      }
      createProgram(BB, IB, ZB) {
        var TB;
        let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const oB = this.nextProgramId++,
          GB = `${ZB}-${oB}`,
          vB = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          kB = [{
            binding: 0,
            visibility: vB,
            buffer: {
              type: "uniform"
            }
          }];
        for (const hB of IB.textures) kB.push({
          binding: hB.binding,
          visibility: vB,
          texture: {
            viewDimension: hB.dimension
          }
        }), kB.push({
          binding: hB.samplerBinding,
          visibility: vB,
          sampler: {}
        });
        const cB = this.device.createBindGroupLayout({
            label: GB,
            entries: kB
          }),
          nB = {
            key: BB,
            id: oB,
            kind: ZB,
            program: IB,
            vertex: this.device.createShaderModule({
              label: `${GB}-vertex`,
              code: IB.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${GB}-fragment`,
              code: IB.fragment
            }),
            materialLayout: cB,
            pipelineLayout: this.device.createPipelineLayout({
              label: GB,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, cB, ...JB ? [JB.layout] : []]
            }),
            packGroup: null !== (TB = null === JB || void 0 === JB ? void 0 : JB.group) && void 0 !== TB ? TB : null,
            failed: !1
          };
        return this.programs.set(BB, nB), nB
      }
      writeFrameUniforms() {
        const BB = this.frameUniforms;
        Uo(this.view, BB), this.device.queue.writeBuffer(this.frameBuffer, 0, BB)
      }
      materialInstance(BB, IB) {
        let ZB = this.materials.get(BB);
        if (!ZB) {
          const IB = new Map;
          this.materials.set(BB, IB);
          const {
            resources: TB,
            materials: JB
          } = this;
          BB.oR.addOnce((() => {
            for (const BB of IB.values()) BB.released = !0, TB.destroyBuffer(BB.buffer);
            JB.delete(BB)
          })), ZB = IB
        }
        let TB = ZB.get(IB.key);
        return TB || (TB = this.newMaterialInstance(BB, null, IB), ZB.set(IB.key, TB)), TB
      }
      modelInstance(BB, IB) {
        const ZB = this.modelSlot(BB);
        let TB = ZB.instances.get(IB.key);
        return TB || (TB = this.newMaterialInstance(BB, BB, IB), ZB.instances.set(IB.key, TB)), TB
      }
      modelSlot(BB) {
        var IB;
        let ZB = BB.gpu[iB.f.lite];
        return (null === (IB = ZB) || void 0 === IB ? void 0 : IB.epoch) !== this.resources.epoch && (ZB = new jG(this.resources, this.resources.epoch), BB.gpu[iB.f.lite] = ZB), ZB
      }
      newMaterialInstance(BB, IB, ZB) {
        const TB = ZB.program.material.floats,
          JB = new Float32Array(TB),
          oB = new Map;
        return {
          owner: BB,
          model: IB,
          program: ZB,
          data: JB,
          uploaded: new Float32Array(TB).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${BB.name}-uniforms`,
            size: Math.max(16, 4 * TB),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: oB,
          ubo: new yo(ZB.program.material.slots, JB, oB),
          bindGroup: null,
          bound: new Array(2 * ZB.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(BB) {
        var IB;
        const ZB = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: LJ + eJ,
            fragment: LJ + uJ,
            attributes: [],
            material: XJ,
            textures: []
          }, "earthSky"),
          TB = this.earthSkyUniforms ??= this.newMaterialInstance(MG, null, ZB);
        this.earthSkyFrom !== BB && (this.earthSkyFrom = BB, TB.data.fill(0)), DJ(TB.ubo, BB, this.view);
        const JB = this.vertexInputs(ZB, MG, "earthSky", ZB, null);
        if (ZB.failed || !JB || !this.bindMaterial(TB, !1)) return;
        const oB = null !== (IB = JB.state) && void 0 !== IB ? IB : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          GB = this.makeDraw(ZB, JB, oB, TB, 1);
        GB.count = RJ.length;
        const vB = KJ(BB, this.view);
        GB.slotOffset = this.writeMeshSlot(vB, 1), this.lists.skyDraws.push(GB)
      }
      uploadIfChanged(BB) {
        const {
          data: IB,
          uploaded: ZB
        } = BB;
        for (let TB = 0; TB < IB.length; TB++)
          if (IB[TB] !== ZB[TB]) return ZB.set(IB), void this.device.queue.writeBuffer(BB.buffer, 0, IB)
      }
      bindMaterial(BB, IB) {
        return BB.frame !== this.frame && (BB.frame = this.frame, IB || this.uploadIfChanged(BB), BB.bindable = this.bindTextures(BB)), BB.bindable
      }
      bindTextures(BB) {
        const {
          program: IB,
          bound: ZB
        } = BB, TB = IB.program.textures;
        let JB = !BB.bindGroup,
          oB = !0;
        for (let GB = 0; GB < TB.length; GB++) {
          const IB = BB.textures.get(TB[GB].name),
            vB = IB ? this.resources.boundTexture(IB) : null;
          vB ? ZB[2 * GB] === vB.view && ZB[2 * GB + 1] === vB.sampler || (ZB[2 * GB] = vB.view, ZB[2 * GB + 1] = vB.sampler, JB = !0) : (IB || BB.ubo.expected.has(TB[GB].name) || this.warnOnce(`texture:${BB.owner.name}:${TB[GB].name}`, `${BB.owner.name} has no ${TB[GB].name}`), oB = !1)
        }
        if (!oB) return JB && (BB.bindGroup = null), !1;
        if (JB) {
          const JB = [{
            binding: 0,
            resource: {
              buffer: BB.buffer
            }
          }];
          for (let BB = 0; BB < TB.length; BB++) JB.push({
            binding: TB[BB].binding,
            resource: ZB[2 * BB]
          }), JB.push({
            binding: TB[BB].samplerBinding,
            resource: ZB[2 * BB + 1]
          });
          BB.bindGroup = this.device.createBindGroup({
            label: `${BB.owner.name}-material`,
            layout: IB.materialLayout,
            entries: JB
          })
        }
        return !0
      }
      writeMeshSlot(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, BB, IB, ZB), this.slotCount++ * cJ
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(BB, IB, ZB, TB, JB) {
        let oB = this.inputs.get(BB);
        if (!oB || oB.program !== TB || !Oo(IB, oB, this.resources, JB)) {
          var GB;
          if (oB = null !== (GB = this.vertexLayouts.resolveInputs(IB, ZB, TB, JB)) && void 0 !== GB ? GB : void 0, !oB) return null;
          this.inputs.set(BB, oB)
        }
        return this.withGpuBuffers(oB)
      }
      meshInputs(BB, IB, ZB) {
        const TB = this.inputs.get(BB);
        if (TB && this.inputsStamped(TB, BB, ZB, IB)) return this.withGpuBuffers(TB);
        const JB = BB.owner,
          oB = ko(BB),
          GB = this.vertexInputs(BB, JB, JB.name, IB, oB);
        return GB && (GB.geometry = co(BB), GB.instanceLayout = this.drawDefines.instanceLayout(JB, ZB)), GB
      }
      inputsStamped(BB, IB, ZB, TB) {
        return function(BB, IB, ZB, TB) {
          return BB.program === ZB && BB.geometry === co(IB) && BB.instanceLayout === TB
        }(BB, IB, TB, this.drawDefines.instanceLayout(IB.owner, ZB))
      }
      withGpuBuffers(BB) {
        return Ko(BB, this.resources, this.zeroBuffer) ? BB : null
      }
      instanceBuffersFit(BB, IB, ZB) {
        const TB = So(IB, ZB, this.resources, this.zeroBuffer);
        if (TB) {
          const JB = IB.ends[TB.index] - IB.offsets[TB.index] + IB.O4[TB.index];
          return this.warnOnce(`overrun:${BB}`, `${BB} draws ${ZB} instances from a ${JB}-byte buffer (${TB.needed} needed)`), !1
        }
        return !0
      }
      createBinding(BB, IB, ZB, TB) {
        const JB = `${IB._colorFormat}|${IB._depthStencilFormat}|${IB._depthCompare}|${IB._sampleCount}`,
          oB = pI(this.device, IB);
        if (BB === this.skyLastRenderable) {
          let ZB = null;
          return {
            renderable: BB,
            pipeline: oB,
            draw: BB => ZB ? this.drawSky(BB, IB, JB, ZB) : 0,
            update: BB => {
              ZB = BB
            }
          }
        }
        return {
          renderable: BB,
          pipeline: oB,
          draw: BB => (TB ? TB.execute(BB, IB, JB) : 0) + this.drawList(BB, IB, JB, ZB)
        }
      }
      drawSky(BB, IB, ZB, TB) {
        const JB = this.lists.skyDraws,
          oB = JB.length > 0;
        if (oB) {
          var GB;
          const ZB = (null !== (GB = IB._depthCompare) && void 0 !== GB ? GB : wI).startsWith("greater") ? 0 : 1;
          BB.setViewport(0, 0, TB.targetWidth, TB.targetHeight, ZB, ZB)
        }
        const vB = this.drawList(BB, IB, ZB, JB);
        return oB && BB.setViewport(0, 0, TB.targetWidth, TB.targetHeight, 0, 1), vB
      }
      drawList(BB, IB, ZB, TB) {
        let JB = 0;
        const oB = this.binder;
        oB.reset();
        for (const GB of TB) {
          const TB = this.pipelineFor(GB, IB, ZB);
          TB && (oB.bind(BB, GB, TB, this.meshSlots.bindGroup, GB.slotOffset), GB.indexBuffer ? BB.drawIndexed(GB.count, GB.instances, GB.first, 0, 0) : BB.draw(GB.count, GB.instances, GB.first, 0), JB++)
        }
        return JB
      }
      pipelineFor(BB, IB, ZB) {
        var TB, JB;
        if (BB.program.failed) return null;
        const oB = BB.inputs;
        if (oB.pipeline && oB.pipelineTarget === ZB) return oB.pipeline;
        const GB = `${BB.pipelineKey}|${ZB}`,
          vB = this.pipelines.get(GB);
        if (void 0 !== vB) return vB && (oB.pipeline = vB, oB.pipelineTarget = ZB), vB || null;
        this.pipelines.set(GB, null);
        const {
          program: kB,
          layout: cB,
          state: nB
        } = BB, hB = {
          label: `standard-${kB.id}`,
          layout: kB.pipelineLayout,
          vertex: {
            module: kB.vertex,
            entryPoint: "main",
            buffers: cB.buffers
          },
          fragment: UI({
            module: kB.fragment,
            entryPoint: "main"
          }, IB, nB.blend, nB.colourWrite),
          depthStencil: IB._depthStencilFormat ? {
            format: IB._depthStencilFormat,
            depthCompare: null !== (TB = null !== (JB = nB.depthCompare) && void 0 !== JB ? JB : IB._depthCompare) && void 0 !== TB ? TB : wI,
            depthWriteEnabled: nB.depthWrite,
            depthBias: nB.depthBias,
            depthBiasSlopeScale: nB.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: IB._sampleCount
          },
          primitive: {
            topology: nB.topology,
            frontFace: nB.frontFace,
            cullMode: nB.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(hB).then((BB => {
          this.compiling--, this.pipelines.set(GB, BB)
        }), (BB => {
          this.compiling--, this.reportFailure(kB, GB, BB)
        })), null
      }
      forEachSunShadowCaster(BB) {
        const IB = this.caster,
          ZB = (ZB, TB, JB) => {
            const oB = ZB.unit && function(BB) {
              const IB = BB.material.model;
              return null !== IB && (IB.lifeform || IB.item) && IB.castsSunShadow && "triangle-list" === BB.state.topology
            }(ZB) ? ko(ZB.unit) : null;
            if (!oB) return;
            const GB = ZB.unit.owner;
            switch (IB.geometry = oB, IB.skip = GB.noSunShadowVertices, IB.indexed = null !== ZB.indexBuffer, IB.first = ZB.first, IB.count = ZB.count, IB.vz = TB, IB.worldAt = JB, IB.instances = null, IB.instanceCount = 1, IB.thin = !1, Jo(GB)) {
              case "thin": {
                const BB = GB._thinInstanceDataStorage.matrixData;
                if (!BB) return;
                IB.instances = BB, IB.instanceCount = Math.min(ZB.instances, BB.length / 16), IB.thin = !0;
                break
              }
              case "instanced": {
                const BB = this.resources.batchUploads.get(GB);
                if (!BB || BB.frame !== this.frame || !this.writeBatchCasters(BB)) return;
                break
              }
            }
            BB(IB)
          };
        for (const TB of this.lists.opaqueDraws) ZB(TB, this.meshSlots.data, TB.slotOffset / 4);
        this.thinBundle.forEachDrawn(ZB)
      }
      writeBatchCasters(BB) {
        const {
          caster: IB
        } = this, ZB = BB.packedMatrices, TB = BB.count;
        IB.instances = ZB, IB.instanceCount = TB;
        let JB = -1;
        for (let oB = 0; oB < TB; oB++) {
          const IB = rG(BB.packedRowMesh(oB));
          IB && JB < 0 ? (this.casterWorlds.length < 16 * TB && (this.casterWorlds = new Float32Array(ZB.length)), this.casterWorlds.set(ZB.subarray(0, 16 * oB)), JB = oB) : !IB && JB >= 0 && (this.casterWorlds.set(ZB.subarray(16 * oB, 16 * oB + 16), 16 * JB), JB++)
        }
        return JB >= 0 && (IB.instances = this.casterWorlds, IB.instanceCount = JB), IB.instanceCount > 0
      }
      async reportFailure(BB, IB, ZB) {
        const TB = [];
        let JB = !0;
        for (const [oB, GB] of [
            ["vertex", BB.vertex],
            ["fragment", BB.fragment]
          ]) {
          const BB = await GB.getCompilationInfo();
          for (const IB of BB.messages) JB &&= "error" !== IB.type, TB.push(`${oB}:${IB.lineNum}:${IB.linePos} ${IB.type}: ${IB.message}`)
        }
        if (JB && !BB.packGroup) return this.pipelines.set(IB, !1), console.error(`Lite: pipeline ${IB} failed`, ZB), void nI(this.device, "mesh", BB.kind, ZB);
        BB.failed || (BB.failed = !0, console.error(`Lite: program ${BB.id} failed`, ZB, TB.join("\n"), {
          program: BB.program,
          key: BB.key
        }), nI(this.device, "mesh", BB.kind, ZB, JB ? null : TB[0]))
      }
    }

    function rG(BB) {
      var IB, ZB;
      const TB = null === (IB = BB.Zm) || void 0 === IB || null === (ZB = IB.aShaderPackItem) || void 0 === ZB ? void 0 : ZB.x;
      return void 0 !== TB && 0 !== (TB & HI.g)
    }
    var mG = ZB(41712),
      XG = ZB(41715),
      LG = ZB(41722),
      eG = ZB(41672);
    const uG = [0, 3, 1, 4, 2, 5];

    function fG(BB, IB, ZB, TB, JB) {
      const oB = ZB[0].width;
      try {
        return JB ? function(BB, IB, ZB) {
          const TB = (0, eG.b)(BB, ZB, ZB, 6);
          for (let JB = 0; JB < 6; JB++)(0, eG.f)(BB, TB, JB, IB[uG[JB]], {
            invertY: !1
          });
          return TB.texture
        }(BB, ZB, oB) : function(BB, IB, ZB, TB) {
          const JB = BB.createTexture({
            label: "sink-cube",
            size: {
              width: ZB,
              height: ZB,
              depthOrArrayLayers: 6
            },
            format: TB,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let oB = 0; oB < 6; oB++) BB.queue.copyExternalImageToTexture({
            source: IB[uG[oB]]
          }, {
            texture: JB,
            origin: {
              x: 0,
              y: 0,
              z: oB
            }
          }, {
            width: ZB,
            height: ZB
          });
          return JB
        }(IB, ZB, oB, 1 === TB ? "r8unorm" : "rgba8unorm")
      } finally {
        lG(ZB)
      }
    }

    function lG(BB) {
      for (const IB of null !== BB && void 0 !== BB ? BB : []) null === IB || void 0 === IB || IB.close()
    }
    async function AG(BB) {
      const IB = [],
        ZB = [];
      if (await Promise.all(BB.map(((BB, TB) => (IB[TB] = null, BB.then((BB => {
          IB[TB] = BB
        }), (BB => {
          ZB.push(BB)
        })))))), ZB.length > 0) throw lG(IB), ZB[0];
      return IB
    }
    class tG {
      constructor(BB) {
        this.ah = BB, this.starts = [], this.lengths = [], this.used = 0, BB > 0 && (this.starts.push(0), this.lengths.push(BB))
      }
      allocate(BB) {
        const {
          starts: IB,
          lengths: ZB
        } = this;
        for (let TB = 0; TB < IB.length; TB++) {
          if (ZB[TB] < BB) continue;
          const JB = IB[TB];
          return ZB[TB] === BB ? (IB.splice(TB, 1), ZB.splice(TB, 1)) : (IB[TB] += BB, ZB[TB] -= BB), this.used += BB, JB
        }
        return -1
      }
      free(BB, IB) {
        this.used -= IB;
        const ZB = Math.min(BB + IB, this.ah);
        ZB > BB && this.release(BB, ZB - BB)
      }
      grow(BB) {
        const IB = this.ah;
        this.ah = BB, this.release(IB, BB - IB)
      }
      truncate(BB) {
        const {
          starts: IB,
          lengths: ZB
        } = this;
        for (let TB = IB.length - 1; TB >= 0 && IB[TB] + ZB[TB] > BB; TB--) IB[TB] >= BB ? (IB.splice(TB, 1), ZB.splice(TB, 1)) : ZB[TB] = BB - IB[TB];
        this.ah = BB
      }
      release(BB, IB) {
        const {
          starts: ZB,
          lengths: TB
        } = this;
        let JB = 0,
          oB = ZB.length;
        for (; JB < oB;) {
          const IB = JB + oB >> 1;
          ZB[IB] < BB ? JB = IB + 1 : oB = IB
        }
        const GB = JB,
          vB = GB > 0 && ZB[GB - 1] + TB[GB - 1] === BB,
          kB = GB < ZB.length && BB + IB === ZB[GB];
        vB && kB ? (TB[GB - 1] += IB + TB[GB], ZB.splice(GB, 1), TB.splice(GB, 1)) : vB ? TB[GB - 1] += IB : kB ? (ZB[GB] = BB, TB[GB] += IB) : (ZB.splice(GB, 0, BB), TB.splice(GB, 0, IB))
      }
    }
    const bG = 256;
    class xG {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = BB, this.onReplaced = IB, this.mergeGap = ZB, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.vq = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const JB = Math.max(bG, Math.ceil(TB / bG) * bG);
        this.bytes = new Uint8Array(JB), this.words = new Uint32Array(this.bytes.buffer), this.vq = new tG(JB / bG)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(BB) {
        return Math.max(1, Math.ceil(BB / bG)) * bG
      }
      allocate(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB;
        const TB = xG.slotBytes(BB),
          JB = TB / bG;
        let oB = this.vq.allocate(JB);
        oB < 0 && (this.grow(this.vq.ah + JB), oB = this.vq.allocate(JB));
        const GB = oB * bG;
        return this.growTo(GB + Math.max(ZB, TB)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, GB, GB + TB), IB && this.bytes.set(new Uint8Array(IB.buffer, IB.byteOffset, Math.min(IB.byteLength, TB)), GB), this.markDirty(GB, GB + TB), GB
      }
      growTo(BB) {
        const IB = Math.ceil(BB / bG);
        IB > this.vq.ah && this.grow(IB)
      }
      free(BB, IB) {
        this.freed.push(BB, IB)
      }
      write(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (TB <= 0) return;
        TB <= 1024 && 0 === (3 & (BB | ZB | TB)) ? this.copyWords(BB >> 2, IB.buffer, ZB >> 2, TB >> 2) : this.bytes.set(new Uint8Array(IB.buffer, ZB, TB), BB);
        let oB = BB + TB;
        if (JB) {
          const IB = BB + 4 * Math.ceil(TB / 4);
          this.bytes.fill(0, oB, IB), oB = IB
        }
        this.markDirty(BB, oB)
      }
      copyWords(BB, IB, ZB, TB) {
        let JB = this.sourceWords.get(IB);
        JB || (JB = new Uint32Array(IB, 0, IB.byteLength >> 2), this.sourceWords.set(IB, JB));
        const oB = this.words;
        for (let GB = 0; GB < TB; GB++) oB[BB + GB] = JB[ZB + GB]
      }
      move(BB, IB, ZB) {
        this.bytes.copyWithin(IB, BB, BB + ZB), this.markDirty(IB, IB + ZB)
      }
      flush() {
        for (const IB of this.retired) this.onReplaced(IB), IB.destroy();
        this.retired.length = 0;
        const BB = this.dirtyStarts.length;
        if (BB > 0) {
          const {
            dirtyStarts: IB,
            dirtyEnds: ZB,
            order: TB
          } = this;
          TB.length = BB;
          for (let vB = 0; vB < BB; vB++) TB[vB] = vB;
          BB > 1 && TB.sort(((BB, ZB) => IB[BB] - IB[ZB]));
          const JB = this.mergeGap;
          let oB = IB[TB[0]],
            GB = ZB[TB[0]];
          for (let vB = 1; vB < BB; vB++) {
            const BB = TB[vB];
            IB[BB] - GB <= JB ? GB = Math.max(GB, ZB[BB]) : (this.send(oB, GB), oB = IB[BB], GB = ZB[BB])
          }
          this.send(oB, GB), IB.length = 0, ZB.length = 0
        }
        this.holding = !1
      }
      OW() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const BB = this.freed;
        for (let IB = 0; IB < BB.length; IB += 2) this.vq.free(BB[IB] / bG, BB[IB + 1] / bG);
        BB.length = 0
      }
      send(BB, IB) {
        this.device.queue.writeBuffer(this.gpu, BB, this.bytes.buffer, BB, IB - BB);
        for (const ZB of this.replaced) {
          const TB = Math.min(IB, ZB.size);
          TB > BB && this.device.queue.writeBuffer(ZB, BB, this.bytes.buffer, BB, TB - BB)
        }
      }
      markDirty(BB, IB) {
        BB &= -4, IB = IB + 3 & -4, this.holding ? (this.dirtyStarts.push(BB), this.dirtyEnds.push(IB)) : this.send(BB, IB)
      }
      grow(BB) {
        const IB = this.vq.ah,
          ZB = Math.max(2 * IB, BB),
          TB = new Uint8Array(ZB * bG);
        TB.set(this.bytes);
        const JB = this.gpu;
        this.gpu = this.createGpu(TB.byteLength), this.bytes = TB, this.words = new Uint32Array(TB.buffer), this.vq.grow(ZB), JB && (this.replaced.push(JB), this.onReplaced(JB)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, IB * bG)
      }
      createGpu(BB) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: BB,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function EG(BB) {
      return Array.isArray(BB) ? new Float32Array(BB) : BB
    }

    function DG(BB, IB, ZB, TB, JB) {
      const oB = bB(JB),
        GB = Math.min(JB, TB.byteLength);
      if (oB === GB && TB.byteOffset % 4 === 0) return void BB.queue.writeBuffer(IB, ZB, TB.buffer, TB.byteOffset, oB);
      const vB = new Uint8Array(oB);
      vB.set(new Uint8Array(TB.buffer, TB.byteOffset, GB)), BB.queue.writeBuffer(IB, ZB, vB)
    }

    function KG(BB, IB, ZB) {
      const TB = "linear",
        JB = "nearest";
      let oB = JB,
        GB = JB,
        vB = "nearest",
        kB = !IB;
      switch (BB) {
        case 11:
          oB = TB, GB = TB;
          break;
        case 3:
          oB = TB, GB = TB, vB = IB ? "linear" : "nearest";
          break;
        case 8:
          vB = IB ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          GB = TB;
          break;
        case 6:
          GB = TB, vB = IB ? "linear" : "nearest";
          break;
        case 7:
          GB = TB, kB = !0;
          break;
        case 9:
          oB = TB;
          break;
        case 10:
          oB = TB, vB = IB ? "linear" : "nearest";
          break;
        case 2:
          oB = TB, GB = TB, ZB > 1 ? (vB = "linear", kB = !1) : kB = !0;
          break;
        case 12:
          oB = TB, kB = !0;
          break;
        default:
          kB = !0
      }
      return ZB > 1 && !kB ? {
        magFilter: TB,
        minFilter: TB,
        mipmapFilter: "linear",
        maxAnisotropy: ZB
      } : {
        magFilter: oB,
        minFilter: GB,
        mipmapFilter: vB,
        ...kB ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function VG(BB) {
      return 0 === BB ? "clamp-to-edge" : 2 === BB ? "mirror-repeat" : "repeat"
    }
    class SG {
      constructor(BB, IB) {
        let {
          vertexArena: ZB = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = BB, this.device = IB, this.buffers = new WeakMap, this.I5 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = ZB ? this.createArena() : null
      }
      createArena() {
        return new xG(this.device, (BB => {
          var IB;
          null === (IB = this.onDestroy) || void 0 === IB || IB.call(this, BB), this.gpuBuffersVersion++
        }))
      }
      rebind(BB, IB) {
        this.engine = BB, this.device = IB, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const ZB of this.liveUploads) ZB.rebind();
        for (const ZB of this.rebindWaiters.splice(0)) ZB()
      }
      flushUploads() {
        var BB;
        null === (BB = this.arena) || void 0 === BB || BB.flush()
      }
      endUploadFrame() {
        var BB;
        null === (BB = this.arena) || void 0 === BB || BB.OW()
      }
      vertexBufferCreated(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZB ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(BB);
        const JB = EG(IB);
        BB.ah = JB.byteLength, this.buffers.set(BB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: ZB && null !== this.arena,
          pending: JB,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: TB
        })
      }
      vertexBufferUpdated(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        const JB = this.buffers.get(BB);
        if (!JB) return;
        const oB = EG(IB),
          GB = void 0 === TB ? oB.byteLength : Math.min(TB, oB.byteLength);
        this.update(JB, oB, ZB, GB)
      }
      vertexBufferFloatsUpdated(BB, IB, ZB, TB) {
        const JB = this.buffers.get(BB);
        if (!JB) return;
        const oB = ZB * Float32Array.BYTES_PER_ELEMENT,
          GB = (TB - ZB) * Float32Array.BYTES_PER_ELEMENT;
        JB.slot >= 0 && GB > 0 && oB + GB <= JB.size ? this.writeSlot(JB, oB, IB, IB.byteOffset + oB, GB, !1) : JB.gpu && GB > 0 && oB + GB <= JB.gpu.size ? this.device.queue.writeBuffer(JB.gpu, oB, IB.buffer, IB.byteOffset + oB, GB) : this.update(JB, IB.subarray(ZB, TB), oB, GB)
      }
      indexBufferCreated(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(BB);
        const TB = function(BB) {
          if (BB instanceof Uint16Array || BB instanceof Uint32Array) return BB;
          for (let IB = 0; IB < BB.length; IB++)
            if (BB[IB] >= 65535) return new Uint32Array(BB);
          return new Uint16Array(BB)
        }(IB);
        BB.is32Bits = 4 === TB.BYTES_PER_ELEMENT, BB.ah = TB.byteLength, this.buffers.set(BB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: TB,
          ownsPending: TB !== IB,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: ZB
        })
      }
      bufferDeleted(BB) {
        const IB = this.buffers.get(BB);
        null !== IB && void 0 !== IB && IB.gpu ? (this.destroyBuffer(IB.gpu), this.gpuBuffersVersion++) : IB && IB.slot >= 0 && (this.arena.free(IB.slot, IB.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(BB)
      }
      update(BB, IB, ZB, TB) {
        if (BB.slot >= 0) this.updateSlot(BB, IB, ZB, TB);
        else if (BB.gpu) {
          if (ZB + bB(TB) > BB.gpu.size) {
            const IB = this.device.createBuffer({
                label: BB.label,
                size: bB(Math.max(2 * BB.gpu.size, ZB + TB)),
                usage: BB.usage | GPUBufferUsage.COPY_SRC
              }),
              JB = this.device.createCommandEncoder();
            JB.copyBufferToBuffer(BB.gpu, 0, IB, 0, BB.gpu.size), this.device.queue.submit([JB.finish()]), this.destroyBuffer(BB.gpu), this.gpuBuffersVersion++, BB.gpu = IB
          }
          DG(this.device, BB.gpu, ZB, IB, TB)
        } else {
          const oB = new Uint8Array(IB.buffer, IB.byteOffset, TB),
            GB = BB.pending;
          if (GB && BB.ownsPending && ZB + TB <= GB.byteLength) new Uint8Array(GB.buffer, GB.byteOffset, GB.byteLength).set(oB, ZB);
          else if (GB && 0 === ZB && TB === GB.byteLength && IB.byteLength === TB) BB.pending = IB, BB.ownsPending = !1;
          else {
            var JB;
            const IB = new Uint8Array(Math.max(null !== (JB = null === GB || void 0 === GB ? void 0 : GB.byteLength) && void 0 !== JB ? JB : 0, ZB + TB));
            GB && IB.set(new Uint8Array(GB.buffer, GB.byteOffset, GB.byteLength)), IB.set(oB, ZB), BB.pending = IB, BB.ownsPending = !0
          }
        }
      }
      updateSlot(BB, IB, ZB, TB) {
        const JB = this.arena;
        ZB + bB(TB) > BB.size && (BB.size = bB(Math.max(2 * BB.size, ZB + TB)), JB.growTo(BB.slot + BB.size), this.gpuBuffersVersion++), 0 === TB ? this.writeSlot(BB, ZB, Iv, 0, 4, !1) : this.writeSlot(BB, ZB, IB, IB.byteOffset, TB, !0)
      }
      writeSlot(BB, IB, ZB, TB, JB, oB) {
        const GB = IB + (oB ? bB(JB) : JB);
        GB > BB.slotBytes && this.moveSlot(BB, GB), this.arena.write(BB.slot + IB, ZB, TB, JB, oB)
      }
      moveSlot(BB, IB) {
        const ZB = this.arena,
          TB = xG.slotBytes(Math.max(IB, Math.min(2 * BB.slotBytes, BB.size))),
          JB = ZB.allocate(TB, null, BB.size);
        ZB.move(BB.slot, JB, BB.slotBytes), ZB.free(BB.slot, BB.slotBytes), BB.slot = JB, BB.slotBytes = TB, this.gpuBuffersVersion++
      }
      cover(BB, IB) {
        const ZB = this.buffers.get(BB);
        if (!ZB || ZB.slot < 0) return !1;
        const TB = Math.min(IB, ZB.size);
        return !(TB <= ZB.slotBytes) && (this.moveSlot(ZB, TB), !0)
      }
      destroyBuffer(BB) {
        var IB;
        null === (IB = this.onDestroy) || void 0 === IB || IB.call(this, BB), BB.destroy()
      }
      gpuBuffer(BB) {
        const IB = this.buffers.get(BB);
        if (!IB) return null;
        if (IB.slot >= 0) return this.arena.buffer;
        if (IB.arena && IB.pending) {
          const BB = IB.pending,
            ZB = this.arena;
          return IB.size = bB(BB.byteLength), IB.slotBytes = xG.slotBytes(function(BB) {
            const IB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength);
            let ZB = IB.length;
            if (BB.byteOffset % 4 === 0) {
              for (; ZB % 4 !== 0 && 0 === IB[ZB - 1];) ZB--;
              if (ZB % 4 === 0) {
                const IB = new Uint32Array(BB.buffer, BB.byteOffset, ZB / 4);
                let TB = IB.length;
                for (; TB > 0 && 0 === IB[TB - 1];) TB--;
                ZB = 4 * TB
              }
            }
            for (; ZB > 0 && 0 === IB[ZB - 1];) ZB--;
            return ZB
          }(BB)), IB.slot = ZB.allocate(IB.slotBytes, BB, IB.size), IB.pending = null, ZB.buffer
        }
        if (!IB.gpu && IB.pending) {
          const BB = IB.pending;
          IB.gpu = this.device.createBuffer({
            label: IB.label,
            size: bB(BB.byteLength),
            usage: IB.usage
          }), DG(this.device, IB.gpu, 0, BB, BB.byteLength), IB.pending = null
        }
        return IB.gpu
      }
      gpuOffset(BB) {
        var IB, ZB;
        const TB = null !== (IB = null === (ZB = this.buffers.get(BB)) || void 0 === ZB ? void 0 : ZB.slot) && void 0 !== IB ? IB : -1;
        return TB < 0 ? 0 : TB
      }
      gpuEnd(BB) {
        var IB, ZB;
        const TB = this.buffers.get(BB);
        return TB ? TB.slot >= 0 ? TB.slot + TB.size : null !== (IB = null === (ZB = TB.gpu) || void 0 === ZB ? void 0 : ZB.size) && void 0 !== IB ? IB : 0 : 0
      }
      vertexInput(BB, IB, ZB) {
        var TB, JB, oB, GB;
        return null !== (TB = null !== (JB = ZB && this.modelInput(ZB, IB)) && void 0 !== JB ? JB : null === (oB = null !== (GB = this.I5.get(BB)) && void 0 !== GB ? GB : this.batchUploads.get(BB)) || void 0 === oB ? void 0 : oB.inputs[IB]) && void 0 !== TB ? TB : null
      }
      modelInput(BB, IB) {
        const ZB = this.geometrySlot(BB);
        let TB = ZB.inputs.get(IB);
        if (void 0 === TB) {
          const JB = BB.vertexAttributes.find((BB => BB.kind === IB));
          TB = JB ? new NI(this.modelKey(ZB, JB.data, !1), JB.offset, JB.stride, JB.components, !1, JB.glType, JB.isNormalized) : null, ZB.inputs.set(IB, TB)
        }
        return TB
      }
      modelIndex(BB) {
        return BB.indexData && this.modelKey(this.geometrySlot(BB), BB.indexData, !0)
      }
      geometrySlot(BB) {
        var IB;
        let ZB = BB.gpu[iB.f.lite];
        if ((null === (IB = ZB) || void 0 === IB ? void 0 : IB.epoch) !== this.epoch) {
          const IB = new Map,
            TB = () => {
              for (const BB of IB.values()) this.bufferDeleted(BB)
            },
            JB = BB => {
              const ZB = IB.get(BB);
              ZB && this.vertexBufferUpdated(ZB, BB)
            };
          ZB = {
            keys: IB,
            inputs: new Map,
            release: TB,
            updated: JB,
            epoch: this.epoch
          }, BB.gpu[iB.f.lite] = ZB
        }
        return ZB
      }
      modelKey(BB, IB, ZB) {
        let TB = BB.keys.get(IB);
        if (!TB) {
          if (ZB) {
            const BB = {
              ah: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(BB, IB, "model-indices"), TB = BB
          } else TB = {
            ah: 0
          }, this.vertexBufferCreated(TB, IB, !1, "model-vertices");
          BB.keys.set(IB, TB)
        }
        return TB
      }
      indexFormat(BB) {
        return BB.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(BB, IB) {
        --BB.refs > 0 || (this.releaseTexture(BB), lG(BB.images), null !== IB && this.textures.delete(IB))
      }
      load(BB, IB) {
        const {
          epoch: ZB
        } = this, TB = IB.decoded = async function(BB) {
          if ("cube" === BB.kind) return async function(BB) {
            if (6 !== BB.length) throw new Error(`${BB.length} files where six faces were expected`);
            const IB = await AG(BB.map((BB => SB(BB)))),
              ZB = IB[0].width;
            return AG(IB.map((async BB => {
              if (BB.width === ZB && BB.height === ZB) return BB;
              try {
                return await createImageBitmap(BB, {
                  ...KB,
                  resizeWidth: ZB,
                  resizeHeight: ZB
                })
              } finally {
                BB.close()
              }
            })))
          }(BB.files);
          if ("data" === BB.kind && BB.data) return [await createImageBitmap(new Blob([BB.data]), KB)];
          return [await SB(Bv(BB))]
        }(BB.source).then((BB => {
          0 === IB.refs || ZB !== this.epoch ? lG(BB) : IB.images = BB
        }));
        this.track(IB, Bv(BB.source), TB, (() => {
          IB.wanted && !IB.failed && IB.refs > 0 && this.upload(BB, IB)
        }))
      }
      canvasUpdated(BB, IB, ZB) {
        const {
          state: TB
        } = this.textureSlot(BB);
        TB.dynamicSource = {
          invertY: IB,
          premultiplied: ZB
        }, TB.dynamic && this.pushDynamic(BB.source, TB)
      }
      async atlasArrays(BB) {
        const {
          device: IB,
          epoch: ZB
        } = this;
        let TB;
        try {
          TB = await II(IB, BB)
        } catch (oB) {
          if (ZB === this.epoch) {
            if (!cI(IB)) throw oB;
            await new Promise((BB => {
              this.rebindWaiters.push(BB)
            }))
          }
          return this.atlasArrays(BB)
        }
        if (TB.forEach(((IB, ZB) => {
            this.atlasSources.has(IB) || this.atlasSources.set(IB, {
              sources: BB,
              index: ZB,
              stride: TB[0].layers
            })
          })), ZB !== this.epoch) return TB;
        const JB = (0, mG.b)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const GB of TB) this.atlasBindings.has(GB) || this.atlasBindings.set(GB, {
          view: GB.texture.createView({
            dimension: "2d-array"
          }),
          sampler: JB
        });
        return TB
      }
      boundTexture(BB) {
        const IB = this.atlasBindings.get(BB);
        if (IB) return IB;
        const ZB = this.atlasSources.get(BB);
        if (ZB) return this.rebuildAtlas(BB, ZB), null;
        const TB = BB;
        if (TB.released) return null;
        const JB = this.textureSlot(TB, !0),
          {
            state: oB
          } = JB;
        if (!oB.view && (oB.wanted = !0, oB.loading || oB.failed || this.upload(TB, oB), !oB.view)) return null;
        const GB = this.chosenSampler(TB, JB),
          vB = JB.bound;
        return vB && vB.view === oB.view && vB.sampler === GB ? vB : (JB.bound = {
          view: oB.view,
          sampler: GB
        }, JB.bound)
      }
      rebuildAtlas(BB, IB) {
        let {
          sources: ZB,
          index: TB,
          stride: JB
        } = IB;
        if (this.atlasRebuilds.has(BB)) return;
        this.atlasRebuilds.add(BB);
        const {
          epoch: oB
        } = this;
        this.atlasArrays(ZB).then((IB => {
          IB[0].layers === JB && IB[TB] ? oB === this.epoch && this.atlasBindings.set(BB, this.atlasBindings.get(IB[TB])) : console.error(`Lite: the new device splits the atlas ${VB(ZB.urls[0])} into other arrays than its materials read`)
        }), (BB => {
          console.error(`Lite: could not build the atlas ${VB(ZB.urls[0])} again on a new device`, BB)
        }))
      }
      textureLoaded(BB) {
        var IB, ZB;
        return null !== (IB = null === (ZB = this.heldSlot(BB)) || void 0 === ZB ? void 0 : ZB.state.decoded) && void 0 !== IB ? IB : null
      }
      textureFailed(BB) {
        var IB;
        return !0 === (null === (IB = this.heldSlot(BB)) || void 0 === IB ? void 0 : IB.state.failed)
      }
      heldSlot(BB) {
        const IB = BB.gpu[iB.f.lite];
        return (null === IB || void 0 === IB ? void 0 : IB.epoch) === this.epoch ? IB : void 0
      }
      chosenSampler(BB, IB) {
        const {
          samplingMode: ZB,
          wrapU: TB,
          wrapV: JB
        } = BB.sampler, oB = IB.state.hasMips, GB = function(BB, IB) {
          const {
            bilinear: ZB,
            trilinear: TB
          } = iB.j;
          return !IB && BB !== ZB || 11 !== BB && BB !== TB && BB !== ZB ? 1 : 4
        }(ZB, oB), vB = IB.sampler;
        if (vB && vB.samplingMode === ZB && vB.hasMips === oB && vB.anisotropy === GB && vB.wrapU === TB && vB.wrapV === JB) return vB.sampler;
        const kB = this.samplerFor(ZB, oB, GB, TB, JB);
        return IB.sampler = {
          samplingMode: ZB,
          hasMips: oB,
          anisotropy: GB,
          wrapU: TB,
          wrapV: JB,
          sampler: kB
        }, kB
      }
      releaseTexture(BB) {
        var IB, ZB;
        BB.view && (null === (ZB = this.onDestroy) || void 0 === ZB || ZB.call(this, BB.view));
        null === (IB = BB.destroy) || void 0 === IB || IB.call(BB)
      }
      textureSlot(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = BB.gpu[iB.f.lite];
        if ((null === ZB || void 0 === ZB ? void 0 : ZB.epoch) === this.epoch) return ZB;
        const TB = function(BB) {
          let {
            source: IB,
            sampler: ZB
          } = BB;
          return "canvas" === IB.kind ? null : `${IB.kind}|${Bv(IB)}|${ZB.noMipmap}|${ZB.samplingMode}|${ZB.invertY}`
        }(BB);
        let JB = null === TB ? void 0 : this.textures.get(TB);
        var oB;
        JB || (JB = {
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
          dynamicSource: null !== (oB = null === ZB || void 0 === ZB ? void 0 : ZB.state.dynamicSource) && void 0 !== oB ? oB : null
        }, null !== TB && (this.textures.set(TB, JB), this.load(BB, JB), IB && !ZB && this.firstBindDecodes++));
        JB.refs++;
        const GB = JB,
          {
            epoch: vB
          } = this,
          kB = {
            state: JB,
            bound: null,
            sampler: null,
            release: () => {
              vB === this.epoch && this.releaseSlot(GB, TB)
            },
            epoch: vB
          };
        return BB.gpu[iB.f.lite] = kB, kB
      }
      samplerFor(BB, IB, ZB, TB, JB) {
        const oB = `${BB}|${IB}|${ZB}|${TB}|${JB}`;
        let GB = this.samplers.get(oB);
        if (!GB) {
          const vB = {
            ...KG(BB, IB, ZB),
            addressModeU: VG(TB),
            addressModeV: VG(JB)
          };
          GB = (0, mG.b)(this.engine, vB), this.samplers.set(oB, GB)
        }
        return GB
      }
      upload(BB, IB) {
        const {
          source: ZB,
          sampler: TB
        } = BB;
        IB.hasMips = !TB.noMipmap, "canvas" === ZB.kind ? this.createDynamic(ZB, IB) : "cube" === ZB.kind ? this.uploadCube(IB, ZB.luminance) : this.uploadImage(IB, !0 === TB.invertY, ZB.url)
      }
      uploadImage(BB, IB, ZB) {
        const [TB] = BB.images;
        BB.images = null;
        const {
          epoch: JB
        } = this, oB = (0, XG.c)(this.engine, TB, {
          mipMaps: BB.hasMips,
          invertY: IB,
          srgb: !1
        }).then((IB => {
          TB.close(), 0 !== BB.refs && JB === this.epoch ? (BB.view = IB.view, BB.destroy = IB.texture.destroy.bind(IB.texture)) : IB.texture.destroy()
        }));
        this.track(BB, ZB, oB)
      }
      track(BB, IB, ZB, TB) {
        const {
          epoch: JB
        } = this;
        BB.loading = !0, this.pending++, ZB.catch((ZB => {
          JB === this.epoch && (BB.failed = !0, console.warn(`Lite: could not load texture ${VB(IB)}`, ZB))
        })).finally((() => {
          JB === this.epoch && (BB.loading = !1, this.pending--, null === TB || void 0 === TB || TB())
        }))
      }
      uploadCube(BB, IB) {
        const ZB = BB.images;
        BB.images = null;
        const TB = fG(this.engine, this.device, ZB, (0, iB.x)(IB), BB.hasMips);
        BB.view = TB.createView({
          dimension: "cube"
        }), BB.destroy = () => {
          TB.destroy()
        }
      }
      createDynamic(BB, IB) {
        const {
          canvas: ZB
        } = BB, TB = (0, LG.b)(this.engine, Math.max(1, ZB.width), Math.max(1, ZB.height), {
          mipMaps: IB.hasMips,
          srgb: !1
        });
        IB.dynamic = TB, IB.view = TB.view, IB.destroy = () => {
          TB.texture.destroy()
        }, this.pushDynamic(BB, IB)
      }
      pushDynamic(BB, IB) {
        const ZB = IB.dynamicSource,
          TB = IB.dynamic,
          {
            canvas: JB
          } = BB;
        if (ZB && TB && 0 !== JB.width && 0 !== JB.height) return JB.width !== TB.width || JB.height !== TB.height ? (this.releaseTexture(IB), IB.dynamic = null, IB.view = null, void this.createDynamic(BB, IB)) : void(0, LG.c)(this.engine, TB, JB, {
          invertY: ZB.invertY,
          premultiplyAlpha: ZB.premultiplied
        })
      }
    }

    function Bv(BB) {
      return "cube" === BB.kind ? BB.rootUrl : "canvas" === BB.kind ? "canvas" : BB.url
    }
    const Iv = new Uint8Array(4);
    var Zv = ZB(38804);

    function Tv(BB) {
      const IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      BB._colorAttachment.storeOp = BB._targetSignature._sampleCount > 1 ? IB : "store";
      const ZB = BB._renderPassDescriptor.depthStencilAttachment;
      ZB && (ZB.depthStoreOp = IB, ZB.stencilStoreOp && (ZB.stencilStoreOp = IB))
    }
    var Jv = ZB(37824),
      ov = ZB(37876),
      Gv = ZB(37516),
      vv = ZB(39657);
    const kv = new Float64Array([1, 1, 1]),
      cv = new Float64Array([0, 1, 0]),
      nv = new Float64Array(4),
      hv = new Float32Array(16),
      zv = new Float64Array(3),
      Fv = new Float64Array(4);

    function Nv(BB, IB, ZB) {
      BB.fov = IB.fov, BB.near = IB.near, BB.far = IB.far, BB.renderWidth = ZB.renderWidth, BB.renderHeight = ZB.renderHeight, (0, Gv.o)(IB.holderRotation, 0, nv, 0), (0, Gv.b)(kv, 0, nv, 0, IB.holderPosition, 0, hv);
      const TB = IB.bS;
      zv[0] = TB[0], zv[1] = TB[1], zv[2] = TB[2] + 1;
      const JB = BB.viewMatrix;
      (0, Gv.i)(TB, zv, cv, JB), (0, Gv.g)(JB, 0, JB), (0, Gv.j)(JB, hv, 0, JB), (0, Gv.g)(JB, 0, JB);
      const oB = BB.worldMatrix;
      (0, Gv.g)(JB, 0, oB), BB.eye[0] = oB[12], BB.eye[1] = oB[13], BB.eye[2] = oB[14], Fv[0] = BB.fov, Fv[1] = BB.renderWidth / BB.renderHeight, Fv[2] = BB.near, Fv[3] = BB.far, (0, Gv.m)(Fv, BB.projectionMatrix), (0, Gv.j)(JB, BB.projectionMatrix, 0, BB.viewProjectionMatrix), (0, vv.d)(BB.viewProjectionMatrix, BB.frustum)
    }

    function gv(BB, IB) {
      let ZB = BB.frustumPlanes;
      ZB || (ZB = BB.frustumPlanes = Array.from({
        length: 6
      }, (() => new Jv.c(0, 0, 0, 0))));
      for (let TB = 0; TB < 6; TB++) {
        const BB = ZB[TB].normal;
        BB._x = IB[4 * TB], BB._y = IB[4 * TB + 1], BB._z = IB[4 * TB + 2], BB._isDirty = !0, ZB[TB].d = IB[4 * TB + 3]
      }
    }

    function qv(BB, IB) {
      const ZB = IB.clearColor;
      BB.clearColour[0] = ZB.r, BB.clearColour[1] = ZB.g, BB.clearColour[2] = ZB.b, BB.clearColour[3] = ZB.a;
      const TB = IB.ambientColor;
      BB.ambientColour[0] = TB.r, BB.ambientColour[1] = TB.g, BB.ambientColour[2] = TB.b, BB.animationRatio = IB.animationRatio, BB.frameId = IB.frameId, BB.version++
    }

    function yv(BB) {
      const IB = BB.model.view;
      return IB.animTick = (0, ov.g)(), IB.timeMs = performance.now(), qv(IB, BB.lg), BB.model.update(IB.frameId), IB
    }

    function Uv(BB) {
      const IB = BB.lg,
        {
          view: ZB,
          qS: TB
        } = BB.model;
      return Nv(ZB, TB, IB.PN()), IB.onBeforeRenderObservable.notifyObservers(IB), gv(IB, ZB.frustum), IB.onBeforeCameraRenderObservable.notifyObservers(IB.activeCamera), yv(BB)
    }
    var Wv = ZB(37482),
      dv = ZB(37600),
      Cv = ZB(37862);

    function Qv(BB) {
      var IB, ZB;
      const TB = (0, OB._)(BB);
      if (!TB || TB.diffuseTexture && (0, Cv.i)(BB)) return null;
      const JB = null === (IB = (0, OB.v)(TB, sB.g.name)) || void 0 === IB ? void 0 : IB.state,
        oB = null === (ZB = (0, OB.v)(TB, BG.e.name)) || void 0 === ZB ? void 0 : ZB.state,
        GB = new Float32Array(16);
      return function(BB, IB, ZB, TB) {
        var JB, oB;
        const GB = RT;
        TB.set(BB.diffuseColor, GB.diffuse), TB[GB.diffuse + 3] = BB.alpha, TB.set(BB.ambientColor, GB.ambientAndCutoff), TB[GB.ambientAndCutoff + 3] = BB.alphaCutOff, TB.set(BB.emissiveColor, GB.emissiveAndLevel), TB[GB.emissiveAndLevel + 3] = null !== (JB = null === (oB = BB.diffuseTexture) || void 0 === oB ? void 0 : oB.level) && void 0 !== JB ? JB : 1, null !== IB && void 0 !== IB && IB.animDataPerTex ? (TB[GB.anim + 1] = ov.e, TB[GB.anim + 2] = IB.animDataPerTex.length / 3 - 1) : ZB && (TB[GB.anim + 1] = ZB.numAnimStates, TB[GB.anim + 2] = ZB.ticksPerAnimState)
      }(TB, JB, oB, GB), {
        model: TB,
        atlas: JB,
        texture: JB ? "atlas" : TB.diffuseTexture ? "single" : "none",
        animated: JB ? !!JB.animDataPerTex : !!oB,
        liquid: (0, Cv.j)(BB),
        customRenderMat: (0, Cv.i)(BB),
        uniformData: GB
      }
    }
    var sv = ZB(3027);
    class wv {
      constructor(BB) {
        this.units = BB, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var BB;
        this.buffer.destroy(), null === (BB = this.twin) || void 0 === BB || BB.destroy()
      }
    }
    class Ov {
      constructor(BB, IB) {
        this.arena = BB, this.vq = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.vq = new tG(IB);
        const ZB = new wv(IB);
        ZB.buffer = this.createBuffer(ZB, !1), this.backings.push(ZB), this.refresh()
      }
      get ah() {
        return this.vq.ah
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
        let BB = 0;
        for (const IB of this.backings) BB += IB.units * (this.arena.unitBytes + (IB.twin ? this.arena.twinUnitBytes : 0));
        return BB
      }
      holds(BB) {
        return BB.start + BB.length <= this.usable
      }
      lost(BB) {
        return this.dropped || BB.start + BB.length > this.ah
      }
      write(BB, IB) {
        const {
          device: ZB,
          unitBytes: TB
        } = this.arena;
        for (const JB of this.backings) {
          const oB = (JB.units - BB.start) * TB;
          oB > 0 && ZB.queue.writeBuffer(JB.buffer, BB.start * TB, IB, 0, Math.min(IB.byteLength, oB))
        }
      }
      writeLight(BB, IB) {
        const {
          device: ZB,
          twinUnitBytes: TB,
          verticesPerUnit: JB
        } = this.arena, {
          light: oB,
          count: GB
        } = this.arena.twinLight(IB, Math.min(IB.length, BB.length * JB));
        for (const vB of this.backings) {
          vB.twin || (vB.twin = this.createBuffer(vB, !0));
          const IB = (vB.units - BB.start) * JB;
          IB > 0 && ZB.queue.writeBuffer(vB.twin, BB.start * TB, oB, 0, Math.min(GB, IB))
        }
      }
      grow(BB) {
        this.arena.assertNotDrawing();
        const {
          device: IB,
          unitBytes: ZB,
          label: TB
        } = this.arena, JB = this.backings[this.backings.length - 1], oB = new wv(BB), GB = IB.createCommandEncoder({
          label: `${TB}-grow`
        });
        oB.buffer = this.createBuffer(oB, !1), GB.copyBufferToBuffer(JB.buffer, 0, oB.buffer, 0, JB.units * ZB), JB.twin && (oB.twin = this.createBuffer(oB, !0), GB.copyBufferToBuffer(JB.twin, 0, oB.twin, 0, JB.units * this.arena.twinUnitBytes)), IB.queue.submit([GB.finish()]), this.backings.push(oB), this.vq.grow(BB)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const BB of this.backings) BB.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(BB, IB) {
        const {
          device: ZB,
          unitBytes: TB,
          twinUnitBytes: JB,
          usage: oB,
          label: GB
        } = this.arena;
        ZB.pushErrorScope("out-of-memory");
        const vB = ZB.createBuffer({
          label: IB ? `${GB}-light` : GB,
          size: BB.units * (IB ? JB : TB),
          usage: (IB ? this.arena.twinUsage : oB) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, ZB.popErrorScope().then((ZB => {
          this.arena.awaitingVerdict--, this.settle(BB, IB, !ZB, !0)
        }), (ZB => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${GB} buffer, taken as failed: ${String(ZB)}`), this.settle(BB, IB, !1, !1)
        })), vB
      }
      settle(BB, IB, ZB, TB) {
        const JB = this.backings.indexOf(BB);
        if (!(this.dropped || JB < 0)) {
          if (!ZB) {
            if (TB && this.arena.ranOutOfMemory(BB.units, BB.units * (IB ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === JB) return void this.drop();
            for (const BB of this.backings.splice(JB)) BB.destroy();
            return this.vq.truncate(this.backings[JB - 1].units), this.growable = !1, void this.promote()
          }
          IB ? BB.twinReady = !0 : (BB.bufferReady = !0, this.arena.allocatedBuffer(BB.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: BB
        } = this;
        let IB = 0;
        for (; IB + 1 < BB.length && BB[IB].ready && BB[IB + 1].ready;) IB++;
        for (const ZB of BB.splice(0, IB)) ZB.destroy();
        this.refresh()
      }
      refresh() {
        const BB = this.backings[0];
        this.buffer = BB.buffer, this.twin = BB.twinReady ? BB.twin : null, this.usable = !this.dropped && BB.bufferReady ? BB.units : 0
      }
    }
    class Yv {
      constructor(BB, IB, ZB, TB) {
        let {
          verticesPerUnit: JB = 1,
          twinUsage: oB = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = BB, this.unitBytes = IB, this.usage = ZB, this.label = TB, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, MI.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), IB % 4 !== 0) throw new Error(`${TB}: ${IB}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = JB, this.twinUsage = oB, this.twinValueBytes = JB > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * JB
      }
      twinLight(BB, IB) {
        if (4 === this.twinValueBytes) return this.widened.length < IB && (this.widened = new Float32Array(Math.max(IB, 2 * this.widened.length))), this.widened.set(BB.subarray(0, IB)), {
          light: this.widened,
          count: IB
        };
        const ZB = IB % this.verticesPerUnit;
        if (0 === ZB) return {
          light: BB,
          count: IB
        };
        const TB = IB - ZB + this.verticesPerUnit;
        return this.padded.length < TB && (this.padded = new Uint16Array(Math.max(TB, 2 * this.padded.length))), this.padded.set(BB.subarray(0, IB)), this.padded.fill(0, IB, TB), {
          light: this.padded,
          count: TB
        }
      }
      allocate(BB) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), BB > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const JB of this.pages) {
          const IB = JB.vq.allocate(BB);
          if (IB >= 0) return {
            page: JB,
            start: IB,
            length: BB
          }
        }
        const IB = this.pages[this.pages.length - 1];
        if (null !== IB && void 0 !== IB && IB.canGrow) {
          const ZB = Math.min(this.ceiling, Math.max(2 * IB.ah, IB.ah + BB));
          if (ZB - IB.ah >= BB) return IB.grow(ZB), {
            page: IB,
            start: IB.vq.allocate(BB),
            length: BB
          }
        }
        IB && IB !== this.pages[0] && 0 === IB.vq.used && IB.drop();
        const ZB = Math.floor(1048576 / this.unitBytes),
          TB = new Ov(this, Math.max(BB, Math.min(this.ceiling, ZB)));
        return this.pages.push(TB), {
          page: TB,
          start: TB.vq.allocate(BB),
          length: BB
        }
      }
      free(BB) {
        this.assertNotDrawing();
        const {
          page: IB
        } = BB;
        IB.vq.free(BB.start, BB.length), 0 === IB.vq.used && IB !== this.pages[0] && IB !== this.pages[this.pages.length - 1] && IB.drop()
      }
      retire() {
        for (const BB of this.pages) BB.retire()
      }
      remove(BB) {
        const IB = this.pages.indexOf(BB);
        IB >= 0 && this.pages.splice(IB, 1)
      }
      ranOutOfMemory(BB, IB) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${IB}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, BB), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, BB) / 2));
        const ZB = performance.now();
        ZB >= this.shortageUntil && (this.forgetFailedAt = ZB + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = ZB + 1e3)
      }
      allocatedBuffer(BB) {
        BB >= this.failed && (this.failed = 1 / 0);
        const IB = Math.min(2 * BB, Math.floor((BB + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, IB))
      }
      stats() {
        let BB = 0,
          IB = 0,
          ZB = 0,
          TB = 0;
        for (const JB of this.pages) BB += JB.ah, IB += JB.vq.used, ZB += JB.hasTwin ? JB.ah * this.twinUnitBytes : 0, TB += JB.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: BB * this.unitBytes,
          usedBytes: IB * this.unitBytes,
          twinBytes: ZB,
          allocatedBytes: TB
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: BB,
          maxStorageBufferBindingSize: IB
        } = this.device.limits;
        let ZB = Math.floor(Math.min(67108864, BB) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (ZB = Math.min(ZB, Math.floor(IB / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (ZB = Math.min(ZB, Math.floor(IB / this.twinUnitBytes))), ZB
      }
    }
    const iv = 16383;

    function pv(BB, IB, ZB, TB, JB) {
      let oB = 0;
      for (let GB = ZB; GB < TB; GB += iv) BB.drawIndexed(6 * Math.min(iv, TB - GB), 1, 0, IB + 4 * GB, JB), oB++;
      return oB
    }
    class av {
      constructor(BB, IB) {
        this.recordsGroup = IB, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const ZB = xI.d.strideWithoutAtlas;
        this.vertexArena = new Yv(BB, ZB, GPUBufferUsage.VERTEX, `terrain-vertices-${ZB}`), this.quadArena = new Yv(BB, dv.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const TB = (0, EI.d)(new Uint16Array(98298), iv);
        this.quadPattern = BB.createBuffer({
          label: "terrain-quad-pattern",
          size: TB.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), BB.queue.writeBuffer(this.quadPattern, 0, TB)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(BB, IB) {
        const ZB = IB.packedVertices,
          TB = ZB ? this.quadArena.allocate(BB.faceCount) : this.vertexArena.allocate(BB.vertexCount);
        if (!TB) return !1;
        BB.vertices = TB;
        const JB = ZB ? new Uint8Array(ZB.buffer, ZB.byteOffset, ZB.byteLength) : new Uint8Array(IB.vertices);
        return TB.page.write(TB, JB), !0
      }
      setLight(BB, IB) {
        const {
          vertices: ZB
        } = BB;
        ZB && 0 !== IB.length && ZB.page.live && (IB.length < BB.vertexCount ? ZB.page.arena.warnOnce("shortLight", `a part's ${IB.length} light values are fewer than its ${BB.vertexCount} vertices, so its light is left as it was`) : (ZB.page.writeLight(ZB, IB), BB.lit = !0))
      }
      lightFullSky(BB, IB) {
        this.fullSky.length < IB && (this.fullSky = new Uint16Array(Math.max(IB, 4096)).fill(sv.f));
        for (const ZB of BB) {
          const BB = ZB.vertices;
          BB.page.live && (BB.page.writeLight(BB, this.fullSky), ZB.lit = !0)
        }
      }
      backed(BB) {
        const {
          vertices: IB
        } = BB;
        return !!IB && IB.page.holds(IB)
      }
      lost(BB) {
        const {
          vertices: IB
        } = BB;
        return !!IB && IB.page.lost(IB)
      }
      release(BB) {
        BB.vertices && BB.vertices.page.arena.free(BB.vertices), BB.vertices = null, BB.lit = !1
      }
      setDrawing(BB) {
        this.forgetBound()
      }
      draw(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : IB.faceCount;
        const oB = IB.vertices,
          GB = oB.page,
          vB = ZB ? GB.twin : null;
        if (!GB.holds(oB) || ZB && !vB) return 0;
        const {
          verticesPerUnit: kB
        } = GB.arena;
        let cB = oB.start * kB;
        this.boundPattern || (BB.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const nB = TB + JB;
        if (kB > 1) return GB.buffer === this.boundRecords && vB === this.boundRecordsLight || (BB.setBindGroup(1, this.recordsGroup(GB.buffer, vB)), this.boundRecords = GB.buffer, this.boundRecordsLight = vB), pv(BB, cB, TB, nB, IB.slot);
        GB.buffer !== this.boundVertices && (BB.setVertexBuffer(0, GB.buffer), this.boundVertices = GB.buffer), vB && vB !== this.boundLight && (BB.setVertexBuffer(1, vB), this.boundLight = vB);
        const hB = IB.faceCount;
        return nB <= hB ? pv(BB, cB, TB, nB, IB.slot) : pv(BB, cB, TB, hB, IB.slot) + pv(BB, cB, Math.max(TB, hB) - hB, nB - hB, IB.slot)
      }
      get buffersAwaitingVerdict() {
        let BB = 0;
        for (const IB of this.arenas()) BB += IB.awaitingVerdict;
        return BB
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Hv {
      constructor(BB, IB, ZB, TB) {
        this.device = BB, this.splitBefore = IB, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = BB.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const JB = BB.createShaderModule({
          label: "scene-depth-copy",
          code: (oB = ZB._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${oB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var oB;
        BB.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: JB,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: JB,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((BB => {
          this.pipeline = BB, this.building = !1
        }), (BB => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", BB)
        })), ZB._executeWithTransmission = () => this.execute(ZB, TB)
      }
      get compiling() {
        return this.building
      }
      setWanted(BB) {
        this.wanted = BB
      }
      setPlanes(BB, IB) {
        BB === this.near && IB === this.far || (this.near = BB, this.far = IB, this.unproject[0] = BB / (IB - BB), this.unproject[1] = IB * BB / (IB - BB), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var BB, IB;
        return null !== (BB = null === (IB = this.copy) || void 0 === IB ? void 0 : IB.view) && void 0 !== BB ? BB : null
      }
      execute(BB, IB) {
        var ZB;
        null === (ZB = this.retired) || void 0 === ZB || ZB.destroy(), this.retired = null;
        const TB = QI(IB),
          JB = BB._transparentBindings,
          oB = this.wanted && this.pipeline ? this.splitIndex(JB) : -1,
          GB = BB._colorAttachment,
          vB = GB.resolveTarget;
        oB >= 0 && (GB.resolveTarget = void 0, Tv(BB, !0));
        let kB = TB.beginRenderPass(BB._renderPassDescriptor);
        kB.setBindGroup(0, BB._sceneBG);
        let cB = this.drawList(kB, IB, BB._opaqueBindings, 0, BB._opaqueBindings.length);
        if (cB += this.drawList(kB, IB, BB._directBindings, 0, BB._directBindings.length), cB += this.drawList(kB, IB, JB, 0, oB >= 0 ? oB : JB.length), kB.end(), oB < 0) return cB;
        Tv(BB);
        const nB = BB._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: hB,
            stencilLoadOp: zB
          } = nB,
          FB = GB.loadOp;
        GB.resolveTarget = vB;
        try {
          this.copyDepth(TB, BB), GB.loadOp = "load", nB.depthLoadOp = "load", zB && (nB.stencilLoadOp = "load"), kB = TB.beginRenderPass(BB._renderPassDescriptor), kB.setBindGroup(0, BB._sceneBG), cB += this.drawList(kB, IB, JB, oB, JB.length), kB.end()
        } finally {
          GB.loadOp = FB, nB.depthLoadOp = hB, nB.stencilLoadOp = zB
        }
        return cB
      }
      splitIndex(BB) {
        for (let IB = 0; IB < BB.length; IB++)
          if (BB[IB].renderable === this.splitBefore) return IB;
        return -1
      }
      drawList(BB, IB, ZB, TB, JB) {
        let oB = null,
          GB = 0;
        for (let vB = TB; vB < JB; vB++) {
          const TB = ZB[vB],
            JB = TB.renderable.mesh;
          JB && !1 === JB.visible || (TB.pipeline !== oB && (BB.setPipeline(TB.pipeline), oB = TB.pipeline), GB += TB.draw(BB, IB))
        }
        return GB
      }
      copyDepth(BB, IB) {
        var ZB, TB;
        const JB = (null !== (ZB = IB._config.depth) && void 0 !== ZB ? ZB : IB._config.rt)._depthTexture,
          oB = (null === (TB = this.copy) || void 0 === TB ? void 0 : TB.source) === JB ? this.copy : this.remakeCopy(JB),
          GB = BB.beginRenderPass(oB.pass);
        GB.setPipeline(this.pipeline), GB.setBindGroup(0, oB.bindGroup), GB.draw(3), GB.end()
      }
      remakeCopy(BB) {
        var IB, ZB;
        this.retired = null !== (IB = null === (ZB = this.copy) || void 0 === ZB ? void 0 : ZB.texture) && void 0 !== IB ? IB : null;
        const TB = this.device.createTexture({
            label: "scene-depth",
            size: [BB.width, BB.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          JB = TB.createView(),
          oB = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: BB.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          GB = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: JB,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: BB,
          texture: TB,
          view: JB,
          bindGroup: oB,
          pass: GB
        }, this.copy
      }
    }
    const Mv = "rgba8unorm";

    function jv(BB) {
      return BB ? 15 : 1
    }
    class Pv {
      constructor(BB, IB, ZB, TB) {
        this.device = BB, this.terrain = TB, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = IB._targetSignature._sampleCount > 1, this.cameraBuffer = BB.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = BB.createBindGroupLayout({
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
        const JB = BB.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = BB.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: JB,
          entries: []
        });
        const oB = BB.createShaderModule({
          label: "sun-shadow-mask",
          code: (GB = this.edge, `${(0,DI.B)()}${vT({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${GB?DZ:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${jv(GB)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${GB?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var GB;
        BB.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: BB.createPipelineLayout({
            bindGroupLayouts: [this.layout, JB, JB, to(BB, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: oB,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: oB,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((BB => {
          this.pipeline = BB, this.building = !1
        }), (BB => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", BB)
        }));
        const vB = IB._executeWithTransmission;
        IB._executeWithTransmission = BB => this.execute(IB, ZB, (() => vB ? vB(BB) : function(BB, IB) {
          const ZB = QI(IB).beginRenderPass(BB._renderPassDescriptor);
          ZB.setBindGroup(0, BB._sceneBG);
          let TB = Rv(ZB, IB, BB._opaqueBindings);
          return TB += Rv(ZB, IB, BB._directBindings), TB += Rv(ZB, IB, BB._transparentBindings), ZB.end(), TB
        }(IB, ZB)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var BB, IB;
        return null !== (BB = null === (IB = this.targets) || void 0 === IB ? void 0 : IB.maskView) && void 0 !== BB ? BB : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(BB) {
        ! function(BB, IB) {
          const ZB = BB.worldMatrix,
            TB = BB.projectionMatrix,
            JB = 1 / TB[0],
            oB = 1 / TB[5],
            GB = BB.far * BB.near / (BB.far - BB.near);
          IB[0] = BB.eye[0], IB[1] = BB.eye[1], IB[2] = BB.eye[2], IB[3] = 2 ** -23 / GB, IB[4] = ZB[0] * JB, IB[5] = ZB[1] * JB, IB[6] = ZB[2] * JB, IB[7] = GB, IB[8] = ZB[4] * oB, IB[9] = ZB[5] * oB, IB[10] = ZB[6] * oB, IB[11] = BB.near / (BB.far - BB.near), IB[12] = ZB[8], IB[13] = ZB[9], IB[14] = ZB[10], IB[15] = 0
        }(BB, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(BB, IB, ZB) {
        if (this.retire(), !this.terrain.readsMask) return ZB();
        const TB = this.targetsFor(BB),
          JB = QI(IB),
          oB = BB._renderPassDescriptor.depthStencilAttachment;
        this.edge || (TB.prepass.depthStencilAttachment.view = oB.view);
        const GB = this.terrain.drawPrepass(JB, TB.prepass, BB._sceneBG);
        if (0 === GB) return ZB();
        if (this.trace(JB, TB), this.edge) return GB + 1 + ZB();
        const {
          depthLoadOp: vB,
          stencilLoadOp: kB
        } = oB;
        oB.depthLoadOp = "load", kB && (oB.stencilLoadOp = "load");
        try {
          return GB + 1 + ZB()
        } finally {
          oB.depthLoadOp = vB, oB.stencilLoadOp = kB
        }
      }
      trace(BB, IB) {
        const ZB = this.terrain.sunShadowGroup(),
          TB = BB.beginRenderPass(IB.trace);
        this.pipeline && ZB && (TB.setPipeline(this.pipeline), TB.setBindGroup(0, IB.bindGroup), TB.setBindGroup(1, this.empty), TB.setBindGroup(2, this.empty), TB.setBindGroup(3, ZB), TB.draw(3)), TB.end()
      }
      retire() {
        const BB = this.retired;
        var IB;
        BB && (BB.mask.destroy(), BB.normals.destroy(), null === (IB = BB.depth) || void 0 === IB || IB.destroy(), this.retired = null)
      }
      targetsFor(BB) {
        var IB, ZB;
        const TB = (null !== (IB = BB._config.depth) && void 0 !== IB ? IB : BB._config.rt)._depthTexture;
        return (null === (ZB = this.targets) || void 0 === ZB ? void 0 : ZB.source) === TB ? this.targets : this.remake(BB, TB)
      }
      remake(BB, IB) {
        var ZB;
        this.retired = this.targets;
        const TB = [IB.width, IB.height],
          JB = this.device.createTexture({
            label: "sun-shadow-mask",
            size: TB,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          oB = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: TB,
            format: Mv,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          GB = null !== (ZB = BB._targetSignature._depthStencilFormat) && void 0 !== ZB ? ZB : IB.format,
          vB = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: TB,
            format: GB,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          kB = BB._renderPassDescriptor.depthStencilAttachment,
          cB = GB.includes("stencil"),
          nB = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: oB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: vB ? vB.createView() : kB.view,
              depthClearValue: kB.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...cB ? {
                stencilClearValue: kB.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          hB = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== vB && void 0 !== vB ? vB : IB).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: oB.createView()
            }]
          }),
          zB = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: JB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [jv(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: IB,
          mask: JB,
          maskView: JB.createView(),
          normals: oB,
          depth: vB,
          bindGroup: hB,
          prepass: nB,
          trace: zB
        }, this.targets
      }
    }

    function Rv(BB, IB, ZB) {
      let TB = null,
        JB = 0;
      for (const oB of ZB) {
        const ZB = oB.renderable.mesh;
        ZB && !1 === ZB.visible || (oB.pipeline !== TB && (BB.setPipeline(oB.pipeline), TB = oB.pipeline), JB += oB.draw(BB, IB))
      }
      return JB
    }
    const rv = 6e4,
      mv = {
        status: "ok"
      },
      Xv = {
        status: "skipped"
      };
    async function Lv(BB, IB) {
      const {
        isCancelled: ZB
      } = BB;
      if (ZB()) return {
        status: "fZ"
      };
      const {
        target: TB
      } = IB;
      if (!TB) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const JB = [],
        oB = Promise.all(Array.from(new Set(BB.materials), (async ZB => {
          JB.push(await async function(BB, IB, ZB, TB) {
            const JB = {
              lighting: BB.lighting,
              dirLightCount: Math.min(BB.dirLightCount, 4),
              oN: BB.runtime
            };
            try {
              const oB = IB.material(TB);
              return oB && MT(IB.programKey(oB, !1, JB)) ? (await oB.ready, BB.isCancelled() ? mv : oB.bindGroupLayout ? await async function(BB, IB, ZB, TB) {
                const {
                  device: JB
                } = BB;
                let oB, GB;
                JB.pushErrorScope("validation");
                try {
                  oB = BB.pipelineBuild(IB, ZB, TB)
                } finally {
                  GB = JB.popErrorScope().catch((() => null))
                }
                const [vB, kB] = await Promise.all([GB, oB.built.then((() => null), (BB => null !== BB && void 0 !== BB ? BB : new Error("pipeline failed")))]);
                if (!vB && !kB) return mv;
                const cB = await ev(oB.module),
                  nB = cB.length > 0 ? cB.map((BB => `${oB.name} ${BB.lineNum}:${BB.linePos}: ${BB.message}`)).join("\n") : `${oB.name}: ${uv(null!==kB&&void 0!==kB?kB:vB)}`;
                return {
                  status: "failed",
                  material: IB.model.name,
                  message: nB
                }
              }(IB, oB, IB.programKey(oB, "none" !== oB.texture, JB), ZB): (console.warn(`Shader pack: skipped the compile check for "${TB.name}", whose textures failed to load`), Xv)) : mv
            } catch (oB) {
              return {
                status: "failed",
                material: TB.name,
                message: uv(oB)
              }
            }
          }(BB, IB, TB, ZB))
        }))),
        GB = function(BB, IB) {
          let ZB, TB, JB = !1;
          const oB = new Promise((oB => {
            var GB;
            ZB = setTimeout((() => {
              oB("timeout")
            }), null !== (GB = IB.timeoutMs) && void 0 !== GB ? GB : rv), TB = setInterval((() => {
              IB.isCancelled() && oB("fZ")
            }), 50), BB.lost.then((() => {
              JB = !0, oB("lost")
            }))
          }));
          return {
            signal: oB,
            lost: () => JB,
            dispose: () => {
              clearTimeout(ZB), clearInterval(TB)
            }
          }
        }(IB.device, BB);
      let vB;
      try {
        vB = await Promise.race([oB.then((() => "done")), GB.signal])
      } finally {
        GB.dispose()
      }
      if ("fZ" === vB || ZB()) return {
        status: "fZ"
      };
      const kB = JB.find((BB => "failed" === BB.status));
      return kB && "lost" !== vB && !GB.lost() && await new Promise((BB => {
        setTimeout(BB, 0)
      })), "lost" === vB || GB.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : kB ? {
        status: "failed",
        failure: {
          material: kB.material,
          message: kB.message
        }
      } : "timeout" === vB ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(cB=BB.timeoutMs)&&void 0!==cB?cB:rv)/1e3} s`), {
        status: "skipped"
      }) : JB.some((BB => "skipped" === BB.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var cB
    }
    async function ev(BB) {
      if (!BB) return [];
      try {
        return (await BB.getCompilationInfo()).messages.filter((BB => "error" === BB.type))
      } catch {
        return []
      }
    }

    function uv(BB) {
      var IB;
      return null !== (IB = null === BB || void 0 === BB ? void 0 : BB.message) && void 0 !== IB ? IB : String(BB)
    }

    function fv(BB, IB, ZB, TB, JB) {
      MT(IB) ? ev(TB).then((IB => {
        const [TB] = IB;
        nI(BB, "terrain", ZB, JB, TB ? `${TB.lineNum}:${TB.linePos} error: ${TB.message}` : null)
      })) : nI(BB, "terrain", ZB, JB)
    }
    var lv = ZB(37609),
      Av = ZB(37622),
      tv = ZB(37635),
      bv = ZB(3014);

    function xv(BB, IB, ZB, TB, JB) {
      const oB = Math.hypot(ZB[0], ZB[1], ZB[2]);
      if (!(oB > 0)) return;
      const GB = [ZB[0] / oB, ZB[1] / oB, ZB[2] / oB],
        vB = [Math.floor(IB[0]), Math.floor(IB[1]), Math.floor(IB[2])],
        kB = [0, 0, 0],
        cB = [1 / 0, 1 / 0, 1 / 0],
        nB = [1 / 0, 1 / 0, 1 / 0];
      for (let FB = 0; FB < 3; FB++) GB[FB] > 0 ? (kB[FB] = 1, cB[FB] = (vB[FB] + 1 - IB[FB]) / GB[FB], nB[FB] = 1 / GB[FB]) : GB[FB] < 0 && (kB[FB] = -1, cB[FB] = (vB[FB] - IB[FB]) / GB[FB], nB[FB] = -1 / GB[FB]);
      const {
        YN: hB
      } = BB;
      let zB = BB.ND(vB[0], vB[1], vB[2]);
      for (;;) {
        const IB = cB[0] < cB[1] ? cB[0] < cB[2] ? 0 : 2 : cB[1] < cB[2] ? 1 : 2;
        if (cB[IB] > TB) return;
        const ZB = kB[IB] > 0 ? vB[IB] + 1 : vB[IB];
        vB[IB] += kB[IB], cB[IB] += nB[IB];
        const oB = BB.ND(vB[0], vB[1], vB[2]),
          GB = oB !== zB && !(BB.opaque[zB] && BB.opaque[oB]);
        if (GB) {
          const TB = [vB[0], vB[1], vB[2]];
          TB[IB] = ZB;
          const oB = Math.floor(TB[0] / hB),
            GB = Math.floor(TB[1] / hB),
            kB = Math.floor(TB[2] / hB);
          !BB.isDrawn(oB, GB, kB) && BB.hasParts(oB, GB, kB) && JB.add(`${oB},${GB},${kB}`)
        }
        if (GB && BB.occluders[oB]) return;
        zB = oB
      }
    }

    function Ev(BB, IB) {
      return BB.group - IB.group || BB.nearest - IB.nearest
    }
    class Dv {
      constructor(BB, IB) {
        this.device = BB, this.kU = IB, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var BB;
        const IB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.next++;
        if (8 * IB >= this.data.length) {
          const BB = new Float32Array(2 * this.data.length);
          BB.set(this.data), this.data = BB, this.words = new Uint32Array(BB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.kU()
        }
        return IB
      }
      release(BB) {
        this.free.push(BB)
      }
      set(BB, IB, ZB, TB, JB) {
        const oB = 8 * BB + fT;
        this.data[oB] = IB, this.data[oB + 1] = ZB, this.data[oB + 2] = TB, this.setVisibility(BB, JB)
      }
      setVisibility(BB, IB) {
        this.data[8 * BB + lT] = IB, this.markDirty(BB, BB)
      }
      setFaces(BB, IB, ZB) {
        const TB = 8 * BB;
        this.words[TB + AT] = IB, this.words[TB + tT] = ZB, this.markDirty(BB, BB)
      }
      markDirty(BB, IB) {
        this.dirtyMin = Math.min(this.dirtyMin, BB), this.dirtyMax = Math.max(this.dirtyMax, IB)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Kv = uT,
      Vv = !0;
    const Sv = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Kv.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Bk = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Ik {
      constructor(BB) {
        this.device = BB, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(PT), this.dirLightUniforms = this.frameUniforms.subarray(jT.dirLights, jT.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, MI.c)(), this.faceGroups = !0, this.visibilityGraph = Vv, this.visCull = Vv, this.visCheck = !1, this.visCullMinDistance = tv.h, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Gk, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.oN = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new av(BB, ((BB, IB) => this.recordsGroup(BB, IB))), this.slots = new Dv(BB, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = sI(BB), this.frameLayout = BB.createBindGroupLayout({
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
        }), this.frameBuffer = BB.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = BB.createSampler({
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
          bind: (BB, IB) => this.createBinding(this.opaqueRenderable, IB, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (BB, IB) => this.createBinding(this.transparentRenderable, IB, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(BB, IB) {
        this.sceneDepth = new Hv(this.device, this.transparentRenderable, BB, IB)
      }
      createFrameBindGroup() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== BB && void 0 !== BB ? BB : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== IB && void 0 !== IB ? IB : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(BB, IB) {
        const ZB = null !== IB && void 0 !== IB ? IB : BB;
        let TB = this.recordsGroups.get(ZB);
        return TB || (TB = this.createFrameBindGroup(BB, IB), this.recordsGroups.set(ZB, TB)), TB
      }
      setChunkMesh(BB, IB, ZB) {
        var TB;
        let JB = this.chunks.get(BB);
        JB ? this.geometry.release(JB) : (JB = {
          mesh: BB,
          slot: this.slots.allocate(),
          origin: [ZB[0], ZB[1], ZB[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: BB.visibility,
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
        }, this.chunks.set(BB, JB), this.writeSlot(JB)), JB.material = BB.material ? this.materialFor(BB.material) : null, JB.packed = !!IB.packedVertices, JB.vertexCount = (0, dv.h)(IB), JB.faceCount = JB.vertexCount / 4;
        const oB = null !== (TB = IB.faceGroups) && void 0 !== TB ? TB : null;
        if (JB.faceGroups = oB, oB) {
          const BB = lv.o;
          JB.planePX = oB[BB], JB.planeNX = oB[BB + 1], JB.planePY = oB[BB + 2], JB.planeNY = oB[BB + 3], JB.planePZ = oB[BB + 4], JB.planeNZ = oB[BB + 5]
        }
        this.drawWhole(JB), 0 !== JB.faceCount && (this.geometry.set(JB, IB) ? (JB.packed && this.slots.setFaces(JB.slot, JB.vertices.start + JB.faceCount, JB.faceCount), IB.FN && this.setChunkMeshLight(BB, IB.FN)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${JB.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(BB, IB) {
        const ZB = this.chunks.get(BB);
        ZB && this.geometry.setLight(ZB, IB)
      }
      drawStats() {
        let BB = this.transparent.length;
        for (const IB of this.opaqueBatches) BB += IB.meshes.length;
        return {
          drawn: BB,
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
      removeChunkMesh(BB) {
        const IB = this.chunks.get(BB);
        IB && (this.geometry.release(IB), this.slots.release(IB.slot), this.chunks.delete(BB))
      }
      remeshLost(BB, IB) {
        this.geometry.release(IB), IB.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** IB.lostRemeshes++);
        const ZB = BB.vz,
          [TB, JB, oB] = ZB.UTB(IB.origin[0], IB.origin[1], IB.origin[2]),
          GB = ZB.Wg.Cg(TB, JB, oB);
        GB && (GB.yg = !0, GB.sg = !0, ZB.Ug(GB, !1))
      }
      chooseFaceRanges(BB, IB, ZB) {
        const TB = this.faceRanges;
        BB.faceMask = ZB, BB.rangeCount = (0, Av.p)(IB, ZB, TB), BB.first0 = TB[0], BB.count0 = TB[1], BB.first1 = TB[2], BB.count1 = TB[3]
      }
      drawWhole(BB) {
        BB.faceMask = -1, BB.faceEpoch = -1, BB.rangeCount = 1, BB.first0 = 0, BB.count0 = BB.faceCount
      }
      writeSlot(BB) {
        const [IB, ZB, TB] = this.originOffset;
        this.slots.set(BB.slot, BB.origin[0] - IB, BB.origin[1] - ZB, BB.origin[2] - TB, BB.visibility)
      }
      materialFor(BB) {
        const IB = this.materials.get(BB);
        if (IB) return IB;
        const ZB = Qv(BB);
        if (!ZB) return this.warnOnce(`material:${BB.name}`, `Lite terrain cannot draw material "${BB.name}"; its chunks are skipped.`), null;
        const {
          model: TB,
          atlas: JB,
          texture: oB,
          animated: GB,
          uniformData: vB
        } = ZB, kB = {
          id: this.materials.size,
          model: TB,
          texture: oB,
          animated: GB,
          uniformData: vB,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${BB.name}`,
            size: vB.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: ZB.liquid,
          customRenderMat: ZB.customRenderMat,
          atlasCount: 0,
          U_: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(BB, kB), this.device.queue.writeBuffer(kB.uniformBuffer, 0, vB), kB.ready = this.createMaterialBindGroup(kB, JB).catch((IB => {
          console.error(`Lite terrain failed to load the textures of material "${BB.name}"`, IB)
        })), kB
      }
      materialLayout(BB) {
        const IB = function(BB) {
            const IB = ["uniforms"];
            if ("atlas" === BB.texture) {
              BB.animated && IB.push("animData"), IB.push("sampler");
              for (let ZB = 0; ZB < BB.atlasCount; ZB++) IB.push("textureArray")
            } else "single" === BB.texture && IB.push("sampler", "texture");
            return IB
          }(BB),
          ZB = IB.join(",");
        let TB = this.materialLayouts.get(ZB);
        if (!TB) {
          const BB = GPUShaderStage.FRAGMENT;
          TB = this.device.createBindGroupLayout({
            label: `terrain-material-${ZB}`,
            entries: IB.map(((IB, ZB) => {
              switch (IB) {
                case "uniforms":
                  return {
                    binding: ZB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: ZB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: ZB, visibility: BB, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: ZB, visibility: BB, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: ZB, visibility: BB, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(ZB, TB)
        }
        return TB
      }
      async createMaterialBindGroup(BB, IB) {
        const ZB = [{
          buffer: BB.uniformBuffer
        }];
        if (IB) {
          const TB = await II(this.device, IB.sources);
          BB.atlasCount = TB.length, BB.U_ = TB[0].layerWidth, BB.atlasLayers = TB[0].layers, IB.animDataPerTex && ZB.push({
            buffer: xB(this.device, Float32Array.from(IB.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), ZB.push(this.sampler);
          for (const BB of TB) ZB.push(BB.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === BB.texture) {
          const {
            url: IB
          } = BB.model.diffuseTexture.source, {
            pixels: TB,
            width: JB,
            height: oB
          } = await BI(IB);
          ZB.push(this.sampler), ZB.push(DB(this.device, TB, JB, oB, 1, `terrain-${IB}`).createView({
            dimension: "2d"
          }))
        }
        const TB = this.materialLayout(this.programKey(BB, !1));
        BB.bindGroupLayout = TB, BB.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${BB.model.name}`,
          layout: TB,
          entries: ZB.map(((BB, IB) => ({
            binding: IB,
            resource: BB
          })))
        })
      }
      programKey(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const TB = ZB ? ZB.lighting : this.lighting,
          JB = ZB ? ZB.oN : this.oN,
          oB = {
            texture: BB.texture,
            atlasCount: BB.atlasCount,
            U_: BB.U_,
            atlasLayers: BB.atlasLayers,
            animated: BB.animated,
            alphaTest: BB.model.transparencyMode === OB.o.alphaTest,
            lighting: TB,
            dirLightCount: ZB ? ZB.dirLightCount : this.dirLightCount,
            packed: IB
          };
        if (!JB) return oB;
        const GB = this.shaderPackFields(BB, JB),
          vB = "atlas" === BB.texture && BB.model.transparencyMode === OB.o.opaque && iT(GB.packVariant);
        return {
          ...oB,
          ...GB,
          alphaTest: oB.alphaTest || vB
        }
      }
      shaderPackFields(BB, IB) {
        const ZB = this.packVariant(BB, IB);
        return void 0 === ZB ? OT : {
          packVariant: ZB,
          liquid: BB.liquid
        }
      }
      packVariant(BB, IB) {
        return BB.customRenderMat ? void 0 : function(BB, IB) {
          const ZB = BB ? BB.defineFor(IB ? "liquid" : "terrain") : 0;
          return 0 === ZB ? void 0 : ZB
        }(IB, BB.liquid)
      }
      isBlended(BB) {
        return BB.model.transparencyMode === OB.o.alphaBlend
      }
      shaderModule(BB, IB) {
        let ZB = this.modules.get(BB);
        return ZB || (ZB = this.device.createShaderModule({
          label: IB,
          code: BB
        }), this.modules.set(BB, ZB)), ZB
      }
      pipelineFor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!BB.bindGroupLayout) return null;
        if (!TB) return this.pipelineOf(BB, IB, ZB);
        const JB = this.pipelineIdNow(BB, IB, !0, ZB),
          oB = this.pipelines.get(JB);
        if (oB) return oB;
        const GB = this.pipelineOf(BB, IB, ZB);
        return GB && void 0 === oB && this.startPipeline(JB, BB, {
          ...this.programKey(BB, IB),
          resting: TB
        }, ZB), GB
      }
      pipelineOf(BB, IB, ZB) {
        const TB = this.pipelineIdNow(BB, IB, !1, ZB),
          JB = this.pipelines.get(TB);
        return void 0 !== JB ? JB : (this.startPipeline(TB, BB, this.programKey(BB, IB), ZB), null)
      }
      pipelineIdNow(BB, IB, ZB, TB) {
        const {
          lighting: JB,
          dirLightCount: oB
        } = this, {
          transparencyMode: GB,
          backFaceCulling: vB
        } = BB.model, kB = this.packVariant(BB, this.oN), cB = (IB ? 2 : 0) + (ZB ? 1 : 0), nB = BB.pipelineIds[cB];
        if (null !== nB && nB.lighting === JB && nB.dirLightCount === oB && nB.packVariant === kB && nB.transparencyMode === GB && nB.cull === vB && nB.atlasCount === BB.atlasCount && nB.U_ === BB.U_ && nB.atlasLayers === BB.atlasLayers && nB.colorFormat === TB._colorFormat && nB.depthStencilFormat === TB._depthStencilFormat && nB.sampleCount === TB._sampleCount) return nB.id;
        const hB = this.programKey(BB, IB),
          zB = this.pipelineId(BB, ZB ? {
            ...hB,
            resting: ZB
          } : hB, TB);
        return BB.pipelineIds[cB] = {
          id: zB,
          lighting: JB,
          dirLightCount: oB,
          packVariant: kB,
          transparencyMode: GB,
          cull: vB,
          atlasCount: BB.atlasCount,
          U_: BB.U_,
          atlasLayers: BB.atlasLayers,
          colorFormat: TB._colorFormat,
          depthStencilFormat: TB._depthStencilFormat,
          sampleCount: TB._sampleCount
        }, zB
      }
      pipelineId(BB, IB, ZB) {
        return Zk(IB, this.isBlended(BB), BB.model.backFaceCulling, ZB)
      }
      pipelineBuild(BB, IB, ZB) {
        var TB;
        const JB = this.pipelineId(BB, IB, ZB);
        return null !== (TB = this.builds.get(JB)) && void 0 !== TB ? TB : this.startPipeline(JB, BB, IB, ZB)
      }
      startPipeline(BB, IB, ZB, TB) {
        var JB;
        this.pipelines.set(BB, null);
        const oB = VT(ZB),
          GB = this.isBlended(IB),
          vB = this.shadowMask && TB._depthStencilFormat ? function(BB, IB, ZB, TB) {
            if (void 0 === BB.packVariant || BB.liquid || IB) return "none";
            const JB = (0, KI.g)(BB.packVariant);
            return null === JB || void 0 === JB || !JB.sunShadow || !oT(JB, ZB) || JB.discards || BB.alphaTest && iT(BB.packVariant) ? "none" : TB ? "edge" : "plain"
          }(ZB, GB, !!this.sunShadow, TB._sampleCount > 1) : "none";
        let kB;
        try {
          kB = ST(ZB, !!this.sunShadow, vB)
        } catch (qB) {
          if (!MT(ZB)) throw qB;
          return this.failedPackBuild(BB, ZB, oB, qB)
        }
        const cB = this.shaderModule(kB, oB),
          nB = [];
        ZB.packed || (nB.push(function(BB, IB) {
          const ZB = [{
            shaderLocation: Kv.position,
            offset: xI.d.aZ,
            format: "float32x3"
          }, {
            shaderLocation: Kv.normal,
            offset: xI.d.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Kv.color,
            offset: xI.d.colorOffset,
            format: "unorm8x4"
          }];
          return BB && ZB.push({
            shaderLocation: Kv.uv,
            offset: xI.d.uvOffset,
            format: "float32x2"
          }), IB && ZB.push({
            shaderLocation: Kv.blockFlagWords,
            offset: xI.d.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: xI.d.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: ZB
          }
        }("none" !== ZB.texture, MT(ZB))), ZB.lighting && nB.push(Sv));
        const hB = IB.model.backFaceCulling,
          zB = {
            label: oB,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, IB.bindGroupLayout, ...Eo(this.device, ZB, !!this.sunShadow, "none" !== vB)]
            }),
            vertex: {
              module: cB,
              entryPoint: "mainVertex",
              buffers: nB
            },
            fragment: UI({
              module: cB,
              entryPoint: "mainFragment"
            }, TB, GB ? Bk : null),
            depthStencil: TB._depthStencilFormat ? {
              format: TB._depthStencilFormat,
              depthCompare: null !== (JB = TB._depthCompare) && void 0 !== JB ? JB : wI,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: TB._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: hB ? "back" : "none"
            }
          },
          FB = ZB.resting ? 0 : 1;
        this.compiling += FB;
        const NB = "none" === vB ? this.device.createRenderPipelineAsync(zB) : this.startMaskPipelines(cB, zB, "edge" === vB);
        NB.then((IB => {
          this.compiling -= FB, this.pipelines.set(BB, IB)
        }), (BB => {
          this.compiling -= FB, console.error(`Lite terrain pipeline ${oB} failed`, BB), fv(this.device, ZB, oB, cB, BB)
        }));
        const gB = {
          name: oB,
          module: cB,
          built: NB
        };
        return this.builds.set(BB, gB), gB
      }
      startMaskPipelines(BB, IB, ZB) {
        const TB = IB.depthStencil,
          JB = this.device.createRenderPipelineAsync(ZB ? IB : {
            ...IB,
            depthStencil: {
              ...TB,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          oB = this.device.createRenderPipelineAsync({
            ...IB,
            label: `${IB.label}-prepass`,
            fragment: {
              module: BB,
              entryPoint: "prepassFragment",
              targets: [{
                format: Mv
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([JB, oB]).then((BB => {
          let [IB, ZB] = BB;
          return this.prepassOf.set(IB, ZB), this.maskPipelines++, IB
        }))
      }
      failedPackBuild(BB, IB, ZB, TB) {
        console.error(`Lite terrain pipeline ${ZB} failed`, TB), fv(this.device, IB, ZB, null, TB);
        const JB = Promise.reject(TB);
        JB.catch((() => {}));
        const oB = {
          name: ZB,
          module: null,
          built: JB
        };
        return this.builds.set(BB, oB), oB
      }
      checkShaderPack(BB) {
        return Lv(BB, {
          device: this.device,
          target: this.target,
          material: BB => this.materialFor(BB),
          programKey: (BB, IB, ZB) => this.programKey(BB, IB, ZB),
          pipelineBuild: (BB, IB, ZB) => this.pipelineBuild(BB, IB, ZB)
        })
      }
      createBinding(BB, IB, ZB) {
        return this.target = IB, {
          renderable: BB,
          pipeline: pI(this.device, IB),
          draw: BB => {
            this.geometry.setDrawing(!0);
            try {
              return ZB ? this.drawTransparent(BB, IB) : this.drawOpaque(BB, IB)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(BB, IB) {
        var ZB, TB, JB, oB;
        const {
          Nz: GB
        } = BB;
        this.lighting = BB.Xg;
        const vB = (0, Wv.v)(IB);
        this.dirLightCount = Math.min(vB, 4), this.oN = null !== (ZB = GB.oN) && void 0 !== ZB ? ZB : null, vB > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(BB, IB), this.animateMaterials(IB.animTick);
        const kB = GB.Mz,
          cB = kB[0] !== this.originOffset[0] || kB[1] !== this.originOffset[1] || kB[2] !== this.originOffset[2];
        cB && (this.originOffset[0] = kB[0], this.originOffset[1] = kB[1], this.originOffset[2] = kB[2]);
        const nB = IB.eye;
        this.eye[0] = nB[0], this.eye[1] = nB[1], this.eye[2] = nB[2], this.writeShaderPackInputs();
        const hB = IB.projectionMatrix,
          zB = 0 === hB[15];
        let FB = 0;
        (cB || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: NB
        } = this;
        aI(this.transparentRenderable._worldCenter, IB, YI), this.resetBatches(zB), this.transparent.length = 0, this.unlit.length = 0;
        const gB = GB.vz.mBB,
          qB = gB / 2 * Math.sqrt(3);
        let yB = 0;
        const UB = !!this.oN && YT(this.oN.defineFor("liquid"));
        let WB = !1;
        const dB = null !== (TB = null === (JB = GB.pW) || void 0 === JB ? void 0 : JB.visibility) && void 0 !== TB ? TB : null,
          CB = this.visCull && zB && 0 === this.compiling && null !== dB && GB.vz.LTB[0] >= this.visCullMinDistance ? this.target : null,
          QB = this.visPassable,
          sB = this.visCandidates,
          wB = this.visCandidateBatches;
        QB.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let OB = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let YB = 0;
        const iB = (BB, ZB) => {
          if (!ZB) return this.transparent.push(BB), void(YB += 2 * BB.faceCount);
          if (null !== BB.faceGroups && ZB.faceCull) {
            if (0 === FB && (FB = (0, Av.e)(hB, IB.renderWidth, IB.renderHeight), FB !== this.faceFocalPx && (this.faceFocalPx = FB, NB = ++this.faceEpoch)), BB.faceEpoch !== NB) {
              BB.faceEpoch = NB;
              const IB = Math.sqrt(BB.distance) + qB,
                ZB = (0, Av.i)(BB.planePX, BB.planeNX, BB.planePY, BB.planeNY, BB.planePZ, BB.planeNZ, this.eye[0] - (BB.origin[0] - this.originOffset[0]), this.eye[1] - (BB.origin[1] - this.originOffset[1]), this.eye[2] - (BB.origin[2] - this.originOffset[2]), (0, Av.h)(IB, FB));
              ZB !== BB.faceMask && this.chooseFaceRanges(BB, BB.faceGroups, ZB)
            }
            if (0 === BB.rangeCount) return
          } else - 1 !== BB.faceMask && this.drawWhole(BB);
          ZB.meshes.push(BB), YB += 2 * ((BB.rangeCount > 0 ? BB.count0 : 0) + (BB.rangeCount > 1 ? BB.count1 : 0))
        };
        for (const aB of this.chunks.values()) {
          cB && this.writeSlot(aB);
          const BB = aB.mesh.visibility;
          BB !== aB.visibility && (aB.visibility = BB, this.slots.setVisibility(aB.slot, BB));
          const {
            material: ZB
          } = aB;
          this.geometry.lost(aB) && performance.now() >= aB.lostRetryAt && this.remeshLost(GB, aB);
          const TB = !(null === ZB || void 0 === ZB || !ZB.bindGroup) && this.geometry.backed(aB),
            JB = TB && this.lighting && !aB.vertices.page.twin;
          if (CB && (Number.isNaN(aB.key) && (aB.ci = Math.floor(aB.origin[0] / gB), aB.cj = Math.floor(aB.origin[1] / gB), aB.ck = Math.floor(aB.origin[2] / gB), aB.key = (0, bv.i)(aB.ci, aB.cj, aB.ck)), (!TB || BB < 1 || JB || !this.batchDraws(ZB, aB.packed, CB)) && this.visSeeThrough(aB, CB) && QB.add(aB.key)), !TB) continue;
          JB || (aB.lostRemeshes = 0);
          const oB = aB.origin[0] - this.originOffset[0],
            vB = aB.origin[1] - this.originOffset[1],
            kB = aB.origin[2] - this.originOffset[2];
          if (!(0, vv.b)(IB.frustum, oB, vB, kB, gB)) continue;
          const nB = oB + gB / 2 - this.eye[0],
            hB = vB + gB / 2 - this.eye[1],
            FB = kB + gB / 2 - this.eye[2];
          if (aB.distance = nB * nB + hB * hB + FB * FB, this.lighting && !aB.lit && (yB = Math.max(yB, aB.vertexCount), this.unlit.push(aB)), JB) continue;
          const NB = this.isBlended(ZB) ? null : this.batchFor(ZB, aB.packed, aB.vertices.page, 1 === BB, zB);
          CB ? (sB[OB] = aB, wB[OB++] = NB) : iB(aB, NB)
        }
        const pB = CB ? this.sweepVisibility(BB, IB, dB) : null;
        null === (oB = (0, ro.v)(GB)) || void 0 === oB || oB.update(IB.frustum, this.originOffset, gB, pB);
        for (let aB = 0; aB < OB; aB++) {
          const BB = sB[aB];
          !pB || pB.isDrawn(BB.ci, BB.cj, BB.ck) ? iB(BB, wB[aB]) : (this.visCulledParts++, this.visCulledTriangles += 2 * BB.faceCount)
        }
        for (const aB of this.transparent) WB ||= UB && aB.material.liquid && !aB.material.customRenderMat;
        this.submittedTriangles = YB, pB && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(BB, IB, pB)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(WB) : WB && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && yB > 0 && this.geometry.lightFullSky(this.unlit, yB);
        for (const aB of this.opaqueBatches) this.chunkSorter.sort(aB.meshes, 1) || aB.meshes.sort(Tk);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Jk)
      }
      sweepVisibility(BB, IB, ZB) {
        const {
          vz: TB
        } = BB.Nz, JB = TB.mBB, oB = this.visPassable, GB = this.eye[0] + this.originOffset[0], vB = this.eye[1] + this.originOffset[1], kB = this.eye[2] + this.originOffset[2];
        if (!ZB.eyeClear(GB, vB, kB, IB.near, IB.projectionMatrix, TB)) return null;
        const [cB, nB] = TB.LTB, hB = ZB.update(GB, vB, kB, JB, cB, nB, oB);
        return this.visSweeps = ZB.sweeps, hB ? ZB : null
      }
      visSeeThrough(BB, IB) {
        const {
          material: ZB
        } = BB;
        return (!ZB || !this.isBlended(ZB)) && (BB.mesh.visibility < 1 || !(null !== ZB && void 0 !== ZB && ZB.bindGroup) || BB.faceCount > 0 && (!this.geometry.backed(BB) || this.lighting && !BB.vertices.page.twin) || !this.batchDraws(ZB, BB.packed, IB))
      }
      batchDraws(BB, IB, ZB) {
        var TB;
        const JB = IB ? 2 : 0;
        if (BB === this.visDrawsMaterial && function(BB, IB) {
            return 0 !== (BB & 1 << IB)
          }(this.visDrawsBits, JB)) return 0 !== (this.visDrawsBits & 2 << JB);
        let oB = null !== (TB = this.visBatchDraws.get(BB)) && void 0 !== TB ? TB : 0;
        if (!(oB & 1 << JB)) {
          oB |= 1 << JB | (!!BB.bindGroupLayout && this.canDraw(BB, IB) && !!this.pipelines.get(this.pipelineIdNow(BB, IB, !1, ZB)) ? 2 << JB : 0), this.visBatchDraws.set(BB, oB)
        }
        return this.visDrawsMaterial = BB, this.visDrawsBits = oB, 0 !== (oB & 2 << JB)
      }
      runVisCheck(BB, IB, ZB) {
        const {
          Nz: TB
        } = BB, {
          vz: JB
        } = TB, oB = JB.mBB, GB = new Set;
        for (const FB of this.chunks.values()) GB.add(FB.key);
        const vB = fJ.Matrix.FromArray(IB.viewProjectionMatrix).invert(),
          [kB, cB, nB] = this.originOffset,
          hB = new fJ.rN,
          zB = function(BB, IB, ZB, TB) {
            const JB = new Set;
            for (let oB = 0; oB < 27; oB++)
              for (let GB = 0; GB < 48; GB++) {
                const vB = ZB((GB + .5) / 48 * 2 - 1, (oB + .5) / 27 * 2 - 1);
                xv(BB, IB, [vB[0] - IB[0], vB[1] - IB[1], vB[2] - IB[2]], TB, JB)
              }
            return JB
          }({
            ND: (BB, IB, ZB) => JB.ND(BB, IB, ZB),
            occluders: ZB.occluders,
            opaque: ZB.opaque,
            YN: oB,
            isDrawn: (BB, IB, TB) => ZB.isDrawn(BB, IB, TB),
            hasParts: (BB, IB, ZB) => GB.has((0, bv.i)(BB, IB, ZB))
          }, [this.eye[0] + kB, this.eye[1] + cB, this.eye[2] + nB], ((BB, IB) => (fJ.rN.TransformCoordinatesFromFloatsToRef(BB, IB, .5, vB, hB), [hB.x + kB, hB.y + cB, hB.z + nB])), (JB.LTB[0] + 1) * oB);
        this.visViolations = zB.size;
        for (const FB of zB) this.warnOnce(`vis:${FB}`, `Lite terrain cave culling skipped chunk ${FB}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var BB;
        null !== (BB = this.oN) && void 0 !== BB && BB.isRunning() && (this.shaderPackInputs ??= new Do(this.device, this.oN.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.oN, this.eye, this.lighting))
      }
      bindShaderPackInputs(BB, IB, ZB) {
        var TB, JB, oB, GB;
        let vB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const kB = this.packVariant(IB, ZB);
        if (void 0 === kB) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Do(this.device, ZB.textureLayers(), this.sunShadow), this.shaderPackInputs.write(ZB, this.eye, this.lighting));
        const cB = YT(kB) ? null !== (TB = null === (JB = this.sceneDepth) || void 0 === JB ? void 0 : JB.view) && void 0 !== TB ? TB : this.standIn() : null,
          nB = vB ? null !== (oB = null === (GB = this.shadowMask) || void 0 === GB ? void 0 : GB.view) && void 0 !== oB ? oB : this.standIn() : null;
        this.shaderPackInputs.bind(BB, cB, xo(kB, !!this.sunShadow), nB)
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
        var BB, IB;
        return null !== (BB = null === (IB = this.shaderPackInputs) || void 0 === IB ? void 0 : IB.bindGroupFor(null, !0)) && void 0 !== BB ? BB : null
      }
      resetBatches(BB) {
        const IB = this.opaqueBatches;
        let ZB = 0;
        for (const TB of IB) TB.meshes.length > 0 && (TB.meshes.length = 0, TB.faceCull = this.batchFaceCull(TB.material, BB), IB[ZB++] = TB);
        IB.length = ZB
      }
      orderBatches() {
        const BB = this.opaqueBatches;
        for (let IB = 0; IB < BB.length; IB++) {
          const ZB = BB[IB];
          ZB.group = IB;
          for (let TB = 0; TB < IB; TB++) {
            const IB = BB[TB];
            if (IB.material === ZB.material && IB.packed === ZB.packed) {
              ZB.group = IB.group;
              break
            }
          }
          ZB.nearest = ZB.meshes.length > 0 ? ZB.meshes[0].distance : 1 / 0
        }
        BB.sort(Ev)
      }
      batchFor(BB, IB, ZB, TB, JB) {
        for (const GB of this.opaqueBatches)
          if (GB.material === BB && GB.packed === IB && GB.page === ZB && GB.resting === TB) return GB;
        const oB = {
          material: BB,
          packed: IB,
          page: ZB,
          resting: TB,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(BB, JB)
        };
        return this.opaqueBatches.push(oB), oB
      }
      batchFaceCull(BB, IB) {
        return !(!IB || !(0, lv.r)(BB.model)) && (!this.oN || ! function(BB) {
          var IB;
          return !(null === (IB = (0, KI.g)(BB)) || void 0 === IB || !IB.movesVertices)
        }(this.packVariant(BB, this.oN)))
      }
      writeFrameUniforms(BB, IB) {
        const ZB = this.frameUniforms,
          TB = jT;
        if ((0, Wv.z)(BB, ZB), ZB[TB.fogInfos] = IB.fogEnabled ? IB.fogMode : 0, ZB[TB.fogInfos + 1] = IB.fogStart, ZB[TB.fogInfos + 2] = IB.fogEnd, ZB[TB.fogInfos + 3] = IB.fogDensity, ZB.set(IB.fogColour, TB.fogColour), ZB[TB.outputHeight] = IB.renderHeight, ZB.set(IB.ambientColour, TB.sceneAmbient), (0, Wv.u)(IB, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const IB = (0, dv.i)(BB.Tg, BB.aN, BB.HN);
          for (let BB = 0; BB < 4; BB++) ZB[TB.aoLevels + BB] = IB[BB] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, ZB)
      }
      animateMaterials(BB) {
        const IB = RT.anim;
        for (const ZB of this.materials.values()) ZB.animated && (ZB.uniformData[IB] = BB, this.device.queue.writeBuffer(ZB.uniformBuffer, 4 * IB, ZB.uniformData, IB, 1))
      }
      canDraw(BB, IB) {
        return !("atlas" === BB.texture && !IB) || (this.warnOnce(`stride:${BB.id}`, `Lite terrain: material "${BB.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(BB, IB) {
        let ZB = 0;
        BB.setBindGroup(1, this.frameBindGroup);
        for (const TB of this.opaqueBatches) {
          if (!TB.meshes.length || !this.canDraw(TB.material, TB.packed)) continue;
          const JB = this.pipelineFor(TB.material, TB.packed, IB, TB.resting);
          JB && (BB.setPipeline(JB), BB.setBindGroup(2, TB.material.bindGroup), this.oN && this.bindShaderPackInputs(BB, TB.material, this.oN, this.prepassOf.has(JB)), ZB += this.drawBatch(BB, TB))
        }
        return ZB
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(BB, IB, ZB) {
        const TB = this.target,
          JB = this.oN;
        if (!TB || !JB || 0 === this.maskPipelines) return 0;
        let oB = 0,
          GB = null;
        this.geometry.setDrawing(!0);
        try {
          for (const vB of this.opaqueBatches) {
            if (!vB.meshes.length || !this.canDraw(vB.material, vB.packed)) continue;
            const kB = this.pipelineFor(vB.material, vB.packed, TB, vB.resting),
              cB = kB && this.prepassOf.get(kB);
            cB && (GB || (GB = BB.beginRenderPass(IB), GB.setBindGroup(0, ZB), GB.setBindGroup(1, this.frameBindGroup)), GB.setPipeline(cB), GB.setBindGroup(2, vB.material.bindGroup), this.bindShaderPackInputs(GB, vB.material, JB, !0), oB += this.drawBatch(GB, vB))
          }
        } finally {
          var vB;
          null === (vB = GB) || void 0 === vB || vB.end(), this.geometry.setDrawing(!1)
        }
        return oB
      }
      drawBatch(BB, IB) {
        let ZB = 0;
        for (const TB of IB.meshes) {
          const {
            rangeCount: IB
          } = TB;
          IB > 0 && (ZB += this.geometry.draw(BB, TB, this.lighting, TB.first0, TB.count0), IB > 1 && (ZB += this.geometry.draw(BB, TB, this.lighting, TB.first1, TB.count1)))
        }
        return ZB
      }
      drawTransparent(BB, IB) {
        let ZB = 0,
          TB = null,
          JB = null;
        BB.setBindGroup(1, this.frameBindGroup);
        for (const oB of this.transparent) {
          const GB = oB.material;
          if (!this.canDraw(GB, oB.packed)) continue;
          const vB = this.pipelineFor(GB, oB.packed, IB);
          vB && (vB !== TB && (BB.setPipeline(vB), TB = vB, this.oN && this.bindShaderPackInputs(BB, GB, this.oN)), GB !== JB && (BB.setBindGroup(2, GB.bindGroup), JB = GB), ZB += this.geometry.draw(BB, oB, this.lighting))
        }
        return ZB
      }
    }

    function Zk(BB, IB, ZB, TB) {
      return `${VT(BB)}|${BB.atlasLayers}|${BB.U_}|${IB}|${ZB}|${TB._colorFormat}|${TB._depthStencilFormat}|${TB._sampleCount}`
    }

    function Tk(BB, IB) {
      return BB.distance - IB.distance
    }

    function Jk(BB, IB) {
      return IB.distance - BB.distance
    }
    class Gk {
      constructor() {
        this.left = []
      }
      sort(BB, IB) {
        for (let ZB = 0; ZB < BB.length; ZB++) {
          const IB = BB[ZB].distance;
          if (IB - IB !== 0) return !1
        }
        return this.sortRange(BB, 0, BB.length, IB), !0
      }
      sortRange(BB, IB, ZB, TB) {
        if (ZB - IB <= 16) {
          for (let JB = IB + 1; JB < ZB; JB++) {
            const ZB = BB[JB],
              oB = TB * ZB.distance;
            let GB = JB - 1;
            for (; GB >= IB && TB * BB[GB].distance > oB; GB--) BB[GB + 1] = BB[GB];
            BB[GB + 1] = ZB
          }
          return
        }
        const JB = IB + ZB >>> 1;
        if (this.sortRange(BB, IB, JB, TB), this.sortRange(BB, JB, ZB, TB), TB * BB[JB - 1].distance <= TB * BB[JB].distance) return;
        const {
          left: oB
        } = this, GB = JB - IB;
        for (let nB = 0; nB < GB; nB++) oB[nB] = BB[IB + nB];
        let vB = 0,
          kB = JB,
          cB = IB;
        for (; vB < GB && kB < ZB;) BB[cB++] = TB * BB[kB].distance < TB * oB[vB].distance ? BB[kB++] : oB[vB++];
        for (; vB < GB;) BB[cB++] = oB[vB++]
      }
    }
    const vk = Math.ceil(102);

    function kk(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : IB;
      const oB = Math.min(IB, ZB),
        GB = new Uint32Array(QZ(TB));
      for (let vB = 0; vB < TB; vB++) {
        const IB = Math.floor(vB * oB / TB),
          ZB = Math.max(IB + 1, Math.floor((vB + 1) * oB / TB));
        for (let kB = 0; kB < TB; kB++) {
          const cB = Math.floor(kB * oB / TB),
            nB = Math.max(cB + 1, Math.floor((kB + 1) * oB / TB));
          let hB = 0;
          for (let TB = IB; TB < ZB; TB++)
            for (let IB = cB; IB < nB; IB++) BB[TB * JB + IB] >= vk && hB++;
          if (2 * hB >= (ZB - IB) * (nB - cB)) {
            const BB = kB + TB * vB;
            GB[BB >>> 5] |= 1 << (31 & BB)
          }
        }
      }
      return GB
    }

    function ck(BB) {
      return Math.max(1, Math.min(16, BB))
    }
    class nk {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = BB, this.loadTexture = IB, this.warn = ZB, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(BB, IB) {
        return (BB.hA !== this.builtVersion || this.blockCaster.length !== IB) && (this.build(BB, IB), !0)
      }
      build(BB, IB) {
        this.builtVersion = BB.hA;
        const ZB = new Uint16Array(IB),
          TB = new Map;
        for (let JB = 1; JB < IB; JB++) {
          const IB = this.classify(BB, JB, TB);
          if (null === IB || IB === yZ) {
            ZB[JB] = null === IB ? 0 : yZ;
            continue
          }
          let oB = this.byKey.get(IB.key);
          void 0 === oB && (oB = this.allocate(IB), this.byKey.set(IB.key, oB)), ZB[JB] = oB
        }
        this.blockCaster = ZB, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(BB, IB) {
        const ZB = BB.l_[IB];
        if ("function" !== typeof ZB) return ZB;
        try {
          return ZB()
        } catch (TB) {
          return this.warnOnce(`Sun shadows: no caster option for block ${IB}: ${TB instanceof Error?TB.message:String(TB)}`), null
        }
      }
      classify(BB, IB, ZB) {
        const TB = this.option(BB, IB);
        if ("none" === TB) return null;
        if (TB && TB.planes.length > 0) {
          const BB = TB.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(BB)}`,
            planes: BB
          }
        }
        if (BB.NF[IB]) return null;
        const JB = BB.qF[IB] ? BB.HA(IB) : null;
        if (JB && JB.length >= 6) {
          const BB = function(BB) {
            const IB = new Uint32Array(16);
            for (let ZB = 0; ZB + 6 <= BB.length; ZB += 6) {
              const TB = [0, 1, 2].map((IB => Math.max(0, Math.ceil(8 * BB[ZB + IB] - .5)))),
                JB = [0, 1, 2].map((IB => Math.min(7, Math.floor(8 * BB[ZB + IB + 3] - .5))));
              for (let BB = TB[2]; BB <= JB[2]; BB++)
                for (let ZB = TB[1]; ZB <= JB[1]; ZB++)
                  for (let oB = TB[0]; oB <= JB[0]; oB++) {
                    const TB = oB + 8 * (ZB + 8 * BB);
                    IB[TB >>> 5] |= 1 << (31 & TB)
                  }
            }
            return IB
          }(JB);
          return function(BB) {
            return BB.every((BB => 4294967295 === BB))
          }(BB) ? yZ : BB.every((BB => 0 === BB)) ? null : {
            kind: "shape",
            key: `shape:${BB.join(",")}`,
            mask: BB
          }
        }
        if (BB.Gs[IB] || !BB.Jg[IB]) return null;
        const oB = [0, 1, 2, 3, 4, 5].map((TB => {
          const JB = BB.og[6 * IB + TB];
          let oB = ZB.get(JB);
          return void 0 === oB && (oB = function(BB) {
            if (!BB || BB.gg) return null;
            const {
              y_: IB,
              U_: ZB,
              q_: TB
            } = BB;
            if (!IB || !ZB || !(ZB > 0) || void 0 === TB || !(TB >= 0)) return null;
            const JB = IB[0],
              oB = ZB * ZB * 4;
            if (!JB || JB.byteLength < oB) return null;
            const GB = Math.floor(JB.byteLength / oB),
              vB = IB[Math.floor(TB / GB)];
            if (!vB) return null;
            const kB = new Uint8Array(vB.buffer, vB.byteOffset, vB.byteLength),
              cB = TB % GB * oB;
            if (cB + oB > kB.length) return null;
            const nB = new Uint8Array(ZB * ZB);
            let hB = !1;
            for (let zB = 0; zB < nB.length; zB++) nB[zB] = kB[cB + 4 * zB + 3], hB ||= nB[zB] < vk;
            return hB ? {
              alpha: nB,
              width: ZB
            } : null
          }(BB.Ng(JB)), ZB.set(JB, oB)), oB
        }));
        if (oB.every((BB => null === BB))) return yZ;
        const GB = ck(Math.max(...oB.map((BB => {
            var IB;
            return null !== (IB = null === BB || void 0 === BB ? void 0 : BB.width) && void 0 !== IB ? IB : 1
          })))),
          vB = new Uint32Array(QZ(GB)).fill(4294967295),
          kB = oB.map((BB => null === BB ? vB : kk(BB.alpha, BB.width, BB.width, GB)));
        return {
          kind: "cutout",
          key: `cutout:${GB}:${kB.map((BB=>BB.join(","))).join("|")}`,
          size: GB,
          faces: kB
        }
      }
      allocate(BB) {
        if (this.nextCaster >= sZ) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const IB = this.nextCaster++;
        if (this.writeCaster(IB, UZ, 0, 0, 0), "shape" === BB.kind) {
          const ZB = this.allocateMask(BB.mask.length);
          ZB >= 0 && (this.sink(ZB, BB.mask), this.writeCaster(IB, WZ, ZB, 0, 8))
        } else if ("cutout" === BB.kind) {
          const ZB = QZ(BB.size),
            TB = this.allocateMask(6 * ZB);
          if (TB >= 0) {
            const JB = new Uint32Array(6 * ZB);
            BB.faces.forEach(((BB, IB) => {
              JB.set(BB, IB * ZB)
            })), this.sink(TB, JB), this.writeCaster(IB, CZ, TB, 0, BB.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(IB, BB.planes).finally((() => {
          this.planesLoading--
        })));
        return IB
      }
      async loadPlanes(BB, IB) {
        const ZB = await Promise.all(IB.map((BB => this.texture(BB.texture))));
        if (ZB.some((BB => null === BB))) return;
        const TB = ZB,
          JB = ck(Math.max(...TB.map((BB => Math.min(BB.width, BB.height))))),
          oB = QZ(JB),
          GB = this.allocateMask(IB.length * (4 + oB));
        if (GB < 0) return;
        const vB = new Uint32Array(IB.length * (4 + oB)),
          kB = 4 * IB.length;
        IB.forEach(((BB, IB) => {
          const ZB = GB + kB + IB * oB;
          vB.set(function(BB, IB) {
            const [ZB, TB] = BB.tangent, JB = Math.hypot(ZB, TB) || 1, oB = ZB / JB, GB = TB / JB, vB = BB.centre[0] * GB - BB.centre[1] * oB, kB = new Uint32Array(4);
            return new Float32Array(kB.buffer, 0, 3).set([oB, GB, vB]), kB[3] = IB, kB
          }(BB, ZB), 4 * IB), vB.set(kk(TB[IB].alpha, TB[IB].width, TB[IB].height, JB), kB + IB * oB)
        })), this.sink(GB, vB), this.writeCaster(BB, dZ, GB, IB.length, JB)
      }
      texture(BB) {
        let IB = this.textures.get(BB);
        return IB || (IB = this.loadTexture(BB).catch((IB => (this.warn(`Sun shadows: no mask for ${BB}: ${IB instanceof Error?IB.message:String(IB)}`), null))), this.textures.set(BB, IB)), IB
      }
      allocateMask(BB) {
        if (this.nextMaskWord + BB > wZ) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const IB = 32768 + this.nextMaskWord;
        return this.nextMaskWord += BB, IB
      }
      writeCaster(BB, IB, ZB, TB, JB) {
        this.sink(0 + 4 * BB, Uint32Array.of(IB, ZB, TB, JB))
      }
      warnOnce(BB) {
        this.warned.has(BB) || (this.warned.add(BB), this.warn(BB))
      }
    }
    var hk = ZB(2992);

    function zk(BB) {
      return !BB.yg && !BB.eC && !BB.xN
    }

    function Fk() {
      return {
        bricks: new Uint32Array(cZ),
        cells: new Uint16Array(32768),
        special: new Uint8Array(vZ)
      }
    }
    class Nk {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = BB, this.writeVoxels = IB, this.writePool = ZB, this.warn = TB, this.eyeChunk = null, this.slotChunk = new Array(IZ).fill(null), this.slotVersion = new Float64Array(IZ).fill(-1), this.slotPool = new Array(IZ).fill(null), this.starved = new Uint8Array(IZ), this.queue = [], this.queued = new Uint8Array(IZ), this.queueSorted = !0, this.freePool = new Uint32Array(OZ), this.freeCount = OZ, this.casterTable = null, this.warnedPool = !1, this.scratch = Fk(), this.victimScratch = Fk(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * IZ), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let JB = 0; JB < OZ; JB++) this.freePool[JB] = 65535 - JB
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return OZ - this.freeCount
      }
      chunkAdded(BB) {
        if (null === this.eyeChunk || !this.inRadius(BB.i, BB.j, BB.k)) return;
        const IB = NZ(BB.i, BB.j, BB.k);
        this.slotChunk[IB] = BB, this.slotVersion[IB] = -1, this.enqueue(IB)
      }
      update(BB, IB, ZB) {
        const TB = this.casters.blockCaster;
        if (TB !== this.casterTable) {
          this.casterTable = TB;
          for (let BB = 0; BB < IZ; BB++) this.slotVersion[BB] = -1, this.slotChunk[BB] && this.enqueue(BB)
        }
        const JB = Math.floor(BB[0] / 32),
          oB = Math.floor(BB[1] / 32),
          GB = Math.floor(BB[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== JB || this.eyeChunk[1] !== oB || this.eyeChunk[2] !== GB) && (this.eyeChunk = [JB, oB, GB], this.follow(IB), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let vB = 0; vB < IZ; vB++) {
          const BB = this.slotChunk[vB];
          BB && (BB.mC || BB.KN !== this.slotVersion[vB]) && this.enqueue(vB)
        }
        this.drain(ZB), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(BB, IB) {
        this.records.set(IB, 4 * BB), this.windowTopStale = !0, this.writeVoxels(4 * BB, IB)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const BB = this.records;
        let IB = -1 / 0;
        for (let TB = 0; TB < BB.length; TB += 4) {
          const ZB = 255 & BB[TB + 3];
          ZB !== JZ && ZB !== oZ || !this.inRadius(BB[TB], BB[TB + 1], BB[TB + 2]) || (IB = Math.max(IB, BB[TB + 1] * VI + (BB[TB + 3] >>> 8)))
        }
        const ZB = IB === -1 / 0 ? 1 : IB + hZ;
        ZB !== this.windowTop[0] && (this.windowTop[0] = ZB, this.writeVoxels(nZ, this.windowTop))
      }
      follow(BB) {
        const IB = this.eyeChunk,
          [ZB, TB, JB] = SI;
        for (let GB = -JB; GB <= JB; GB++)
          for (let JB = -TB; JB <= TB; JB++)
            for (let TB = -ZB; TB <= ZB; TB++) {
              var oB;
              const ZB = IB[0] + TB,
                vB = IB[1] + JB,
                kB = IB[2] + GB,
                cB = NZ(ZB, vB, kB),
                nB = this.slotChunk[cB];
              if (nB && !nB.mC && nB.i === ZB && nB.j === vB && nB.k === kB) continue;
              const hB = null !== (oB = BB(ZB, vB, kB)) && void 0 !== oB ? oB : null;
              nB && (nB.i !== ZB || nB.j !== vB || nB.k !== kB) && this.slotPool[cB] && (this.release(cB), this.record.fill(0), this.writeRecord(cB, this.record)), this.slotChunk[cB] = hB, this.slotVersion[cB] = -1, (hB || nB) && this.enqueue(cB)
            }
      }
      requeueStarved() {
        for (let BB = 0; BB < IZ; BB++) this.starved[BB] && this.slotChunk[BB] && this.enqueue(BB)
      }
      enqueue(BB) {
        this.queued[BB] || (this.queued[BB] = 1, this.queue.push(BB), this.queueSorted = !1)
      }
      drain(BB) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const BB = new Map;
          for (const IB of this.queue) BB.set(IB, this.slotDistance(IB));
          this.queue.sort(((IB, ZB) => BB.get(ZB) - BB.get(IB))), this.queueSorted = !0
        }
        const IB = performance.now();
        let ZB = 0;
        const TB = [];
        for (; this.queue.length > 0 && (0 === ZB || performance.now() - IB < BB);) {
          const BB = this.queue.pop(),
            IB = this.slotChunk[BB];
          !IB || IB.mC || zk(IB) ? (this.queued[BB] = 0, this.encodeSlot(BB), ZB++) : TB.push(BB)
        }
        for (let JB = TB.length - 1; JB >= 0; JB--) this.queue.push(TB[JB])
      }
      slotDistance(BB) {
        const IB = this.slotChunk[BB],
          ZB = this.eyeChunk;
        return IB ? Math.max(Math.abs(IB.i - ZB[0]), Math.abs(IB.j - ZB[1]), Math.abs(IB.k - ZB[2])) : 0
      }
      inRadius(BB, IB, ZB) {
        const TB = this.eyeChunk,
          [JB, oB, GB] = SI;
        return Math.abs(BB - TB[0]) <= JB && Math.abs(IB - TB[1]) <= oB && Math.abs(ZB - TB[2]) <= GB
      }
      release(BB) {
        const IB = this.slotPool[BB];
        if (IB) {
          for (let BB = IB.length - 1; BB >= 0; BB--) this.freePool[this.freeCount++] = IB[BB];
          this.slotPool[BB] = null
        }
      }
      encodeSlot(BB) {
        var IB, ZB, TB, JB, oB;
        let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          vB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const kB = null !== (IB = null === (ZB = this.slotPool[BB]) || void 0 === ZB ? void 0 : ZB.length) && void 0 !== IB ? IB : 0;
        this.release(BB), this.starved[BB] = 0;
        const cB = this.slotChunk[BB],
          nB = this.record;
        if (!cB || cB.mC || !cB.mz) return this.slotChunk[BB] = null, this.slotVersion[BB] = -1, nB.fill(0), this.writeRecord(BB, nB), void(kB > 0 && this.requeueStarved());
        this.slotVersion[BB] = cB.KN;
        const hB = this.encodeBricks(cB, BB, GB, vB);
        nB[0] = cB.i, nB[1] = cB.j, nB[2] = cB.k, nB[3] = hB, this.writeRecord(BB, nB), null === (TB = this.encoded) || void 0 === TB || TB.call(this, cB), vB && (null !== (JB = null === (oB = this.slotPool[BB]) || void 0 === oB ? void 0 : oB.length) && void 0 !== JB ? JB : 0) < kB && this.requeueStarved()
      }
      encodeBricks(BB, IB, ZB, TB) {
        if (BB.gN) return TZ;
        const JB = this.casters.blockCaster,
          {
            data: oB,
            stride: GB,
            offset: vB
          } = BB.mz,
          [kB, cB, nB] = GB,
          hB = VI,
          {
            bricks: zB,
            cells: FB,
            special: NB
          } = ZB;
        zB.fill(0), NB.fill(0);
        let gB = 0,
          qB = 0,
          yB = 0;
        for (let UB = 0; UB < hB; UB++) {
          const IB = UB >> 2,
            ZB = 3 & UB,
            TB = BB.PF[UB],
            GB = TB === hk.c ? -1 : TB < JB.length ? JB[TB] : 0;
          if (0 !== GB)
            for (let BB = 0; BB < hB; BB++) {
              const TB = BB >> 2,
                WB = 3 & BB;
              let dB = vB + BB * kB + UB * cB;
              for (let BB = 0; BB < hB; BB++, dB += nB) {
                let vB = GB;
                if (vB < 0) {
                  const BB = oB[dB];
                  if (vB = BB < JB.length ? JB[BB] : 0, 0 === vB) continue
                }
                const kB = gZ(TB, IB, BB >> 2),
                  cB = qZ(WB, ZB, 3 & BB);
                zB[3 * kB + (cB >>> 5)] |= 1 << (31 & cB), FB[kB * GZ + cB] = vB, gB++, yB = UB, vB === yZ ? qB++ : NB[kB] = 1
              }
            }
        }
        return 0 === gB ? TZ : 32768 === qB ? JZ | yB << 8 : (this.writePoolEntries(IB, ZB, TB), this.writeVoxels(kZ + IB * cZ, zB), oZ | yB << 8)
      }
      writePoolEntries(BB, IB, ZB) {
        const {
          bricks: TB,
          cells: JB,
          special: oB
        } = IB, GB = this.entry;
        let vB = 0;
        for (let nB = 0; nB < vZ; nB++) vB += oB[nB];
        if (0 === vB) return;
        ZB && this.freeCount < vB && this.evictBeyond(BB, vB);
        const kB = new Uint32Array(ZB ? Math.min(vB, this.freeCount) : 0);
        let cB = 0;
        for (let nB = 0; nB < vZ; nB++) {
          if (!oB[nB]) continue;
          const ZB = 3 * nB;
          if (cB === kB.length) {
            this.dropSpecials(IB, nB), this.starved[BB] = 1;
            continue
          }
          const vB = this.freePool[--this.freeCount];
          kB[cB++] = vB;
          for (let BB = 0; BB < GZ; BB++) {
            const IB = TB[ZB + (BB >>> 5)] >>> (31 & BB) & 1 ? JB[nB * GZ + BB] : 0;
            1 & BB ? GB[BB >> 1] |= IB << 16 : GB[BB >> 1] = IB
          }
          TB[ZB + 2] = vB + 1, this.writePool(YZ + 32 * vB, GB)
        }
        kB.length > 0 && (this.slotPool[BB] = kB)
      }
      evictBeyond(BB, IB) {
        const ZB = this.slotDistance(BB),
          TB = [];
        for (let JB = 0; JB < IZ; JB++) JB !== BB && this.slotPool[JB] && this.slotDistance(JB) > ZB && TB.push(JB);
        TB.sort(((BB, IB) => this.slotDistance(IB) - this.slotDistance(BB)));
        for (const JB of TB) {
          if (this.freeCount >= IB) return;
          const BB = this.slotChunk[JB];
          BB && !BB.mC && BB.mz && (BB.KN === this.slotVersion[JB] || zk(BB)) && this.encodeSlot(JB, this.victimScratch, !1)
        }
      }
      dropSpecials(BB, IB) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const ZB = 3 * IB;
        for (let TB = 0; TB < GZ; TB++) BB.cells[IB * GZ + TB] !== yZ && (BB.bricks[ZB + (TB >>> 5)] &= ~(1 << (31 & TB)))
      }
    }
    var gk = ZB(37525);
    class qk {
      constructor(BB) {
        this.device = BB, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new XZ, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.vz = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = BB.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = BB.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(BB, IB, ZB) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: TB
        } = this;
        TB.QF(BB, IB), ZB.forEachSunShadowCaster((BB => {
          this.add(BB)
        })), TB.finish();
        const JB = 0 === TB.parts;
        if (JB && this.uploadedEmpty) return;
        this.uploadedEmpty = JB;
        const {
          queue: oB
        } = this.device, {
          words: GB
        } = TB;
        oB.writeBuffer(this.frameBuffer, 0, GB, 0, 16385), TB.refs > 0 && oB.writeBuffer(this.frameBuffer, 65540, GB, HZ, TB.refs), JB || oB.writeBuffer(this.frameBuffer, 327684, GB, MZ, TB.parts * aZ)
      }
      add(BB) {
        const IB = this.gridFor(BB);
        if (!IB) return;
        const {
          frame: ZB
        } = this, {
          vz: TB,
          worldAt: JB,
          instances: oB,
          instanceCount: GB,
          thin: vB
        } = BB;
        if (oB)
          for (let kB = 0; kB < GB; kB++) vB ? (eZ(oB, 16 * kB, TB, JB, this.vz), ZB.add(IB, this.vz)) : ZB.add(IB, oB, 16 * kB);
        else ZB.add(IB, TB, JB)
      }
      gridFor(BB) {
        let {
          geometry: IB,
          indexed: ZB,
          first: TB,
          count: JB,
          skip: oB
        } = BB, GB = this.grids.get(IB);
        GB || (GB = new Map, this.grids.set(IB, GB));
        const vB = `${ZB?TB:-1-TB}:${JB}:${null!==oB&&void 0!==oB?oB:""}`;
        let kB = GB.get(vB);
        if (void 0 !== kB || this.gridsFull) return kB;
        const cB = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = cB + 2;
        else if (cB > this.bakeDeadline) return;
        return kB = this.bake(IB, ZB, TB, JB, oB), void 0 !== kB && GB.set(vB, kB), kB
      }
      bake(BB, IB, ZB, TB, JB) {
        const oB = BB.vertexAttributes.find((BB => "position" === BB.kind)),
          GB = oB ? function(BB, IB, ZB, TB) {
            let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const oB = BB => IB ? IB[ZB + BB] : ZB + BB,
              GB = BB => null !== JB && [0, 1, 2].some((IB => {
                const ZB = oB(BB + IB);
                return ZB >= JB[0] && ZB < JB[1]
              })),
              vB = [1 / 0, 1 / 0, 1 / 0],
              kB = [-1 / 0, -1 / 0, -1 / 0];
            for (let UB = 0; UB + 2 < TB; UB += 3)
              if (!GB(UB))
                for (let IB = 0; IB < 3; IB++) {
                  const ZB = oB(UB + IB);
                  for (let IB = 0; IB < 3; IB++) vB[IB] = Math.min(vB[IB], BB[3 * ZB + IB]), kB[IB] = Math.max(kB[IB], BB[3 * ZB + IB])
                }
            const cB = Math.max(kB[0] - vB[0], kB[1] - vB[1], kB[2] - vB[2]);
            if (!(cB > 0)) return null;
            const nB = cB / 64,
              hB = [0, 0, 0],
              zB = [0, 0, 0],
              FB = [0, 0, 0];
            for (let UB = 0; UB < 3; UB++) hB[UB] = Math.min(65, Math.ceil((kB[UB] - vB[UB]) / nB) + 1), zB[UB] = vB[UB] - nB / 2, FB[UB] = zB[UB] + hB[UB] * nB;
            const NB = new Uint32Array(Math.ceil(hB[0] * hB[1] * hB[2] / 32)),
              gB = new Float64Array(9),
              qB = [0, 0, 0],
              yB = [0, 0, 0];
            for (let UB = 0; UB + 2 < TB; UB += 3)
              if (!GB(UB)) {
                for (let IB = 0; IB < 3; IB++) {
                  const ZB = oB(UB + IB);
                  for (let TB = 0; TB < 3; TB++) gB[3 * IB + TB] = BB[3 * ZB + TB]
                }
                for (let BB = 0; BB < 3; BB++) {
                  const IB = Math.min(gB[BB], gB[3 + BB], gB[6 + BB]),
                    ZB = Math.max(gB[BB], gB[3 + BB], gB[6 + BB]);
                  qB[BB] = Math.max(0, Math.floor((IB - zB[BB]) / nB - 1e-6)), yB[BB] = Math.min(hB[BB] - 1, Math.floor((ZB - zB[BB]) / nB + 1e-6))
                }
                for (let BB = qB[2]; BB <= yB[2]; BB++)
                  for (let IB = qB[1]; IB <= yB[1]; IB++)
                    for (let ZB = qB[0]; ZB <= yB[0]; ZB++)
                      if (uZ(gB, zB[0] + (ZB + .5) * nB, zB[1] + (IB + .5) * nB, zB[2] + (BB + .5) * nB, nB / 2)) {
                        const TB = ZB + hB[0] * (IB + hB[1] * BB);
                        NB[TB >>> 5] |= 1 << (31 & TB)
                      }
              } return {
              words: NB,
              lo: zB,
              hi: FB,
              cell: nB,
              dims: hB
            }
          }((0, gk.f)(oB, BB.vertexCount), IB ? BB.indexData : null, ZB, TB, JB) : null;
        if (!GB) return null;
        const {
          words: vB,
          ...kB
        } = GB;
        if (this.gridTop + vB.length > PZ) return void(this.gridsFull = !0);
        const cB = this.gridTop;
        return this.gridTop += vB.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * cB, vB), {
          ...kB,
          at: cB
        }
      }
    }
    const yk = Math.cos(1 * Math.PI / 180);

    function Uk(BB, IB) {
      return BB[0] * IB[0] + BB[1] * IB[1] + BB[2] * IB[2] < yk
    }
    async function Wk(BB) {
      const {
        pixels: IB,
        width: ZB,
        height: TB
      } = await BI(BB), JB = new Uint8Array(ZB * TB);
      for (let oB = 0; oB < JB.length; oB++) JB[oB] = IB[4 * oB + 3];
      return {
        width: ZB,
        height: TB,
        alpha: JB
      }
    }
    class dk {
      constructor(BB, IB) {
        this.device = BB, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(lZ.o), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = BB.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = BB.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * zZ,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = BB.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [ZB, TB, JB] = lZ.q;
        this.volume = BB.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: ZB,
            height: TB,
            depthOrArrayLayers: JB
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = BB.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = BB.createBuffer({
          label: "sun-shadow-volume-work",
          size: lZ.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = IB ? new qk(BB) : null, this.entityStandIn = IB ? null : BB.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var BB;
        null === (BB = this.stopWindow) || void 0 === BB || BB.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var BB, IB;
        const ZB = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || ZB.push("Lite sun shadow volume pipeline compiling");
        const TB = null !== (BB = null === (IB = this.casters) || void 0 === IB ? void 0 : IB.planesLoading) && void 0 !== BB ? BB : 0;
        return TB > 0 && ZB.push(`${TB} Lite sun shadow plane casters loading their textures`), ZB
      }
      entries() {
        var BB, IB, ZB, TB;
        const JB = DI.s;
        return [{
          binding: JB.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: JB.mz,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: JB.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: JB.volume,
          resource: this.volumeView
        }, {
          binding: JB.sampler,
          resource: this.volumeSampler
        }, {
          binding: JB.entities,
          resource: {
            buffer: null !== (BB = null === (IB = this.entities) || void 0 === IB ? void 0 : IB.frameBuffer) && void 0 !== BB ? BB : this.entityStandIn
          }
        }, {
          binding: JB.entityGrids,
          resource: {
            buffer: null !== (ZB = null === (TB = this.entities) || void 0 === TB ? void 0 : TB.gridBuffer) && void 0 !== ZB ? ZB : this.entityStandIn
          }
        }]
      }
      prepare(BB, IB, ZB) {
        var TB;
        this.entitiesThisFrame = !1;
        const JB = null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.sunShadowReach()) && void 0 !== TB ? TB : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!ZB || !JB.sunShadow && !JB.airShadow) return void(this.volumeHolds = null);
        if (BB.vz.mBB !== VI) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${BB.vz.mBB}; everything is lit.`)));
        const oB = this.start(BB);
        this.casters.update(BB.zF, BB.zF.qF.length);
        const GB = BB.Mz;
        for (let zB = 0; zB < 3; zB++) this.eye[zB] = IB[zB] + GB[zB];
        const vB = (0, lZ.y)(this.eye);
        this.staleNear = vB;
        const kB = BB.vz.Wg;
        oB.update(this.eye, ((BB, IB, ZB) => kB.Cg(BB, IB, ZB)), 1);
        const cB = (0, lZ.t)(ZB.WBB()),
          nB = oB.eyeChunk,
          hB = this.uniformInts;
        for (let zB = 0; zB < 3; zB++) hB[zB] = nB[zB], hB[4 + zB] = vB[zB];
        this.entitiesThisFrame = null !== this.entities && JB.sunShadow, this.entitiesThisFrame && mZ(this.uniformFloats, 8, IB, cB), null !== this.volumeHolds && (this.castersWritten || Uk(cB, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(vB, cB, nB)
      }
      markStale(BB) {
        const IB = this.staleNear,
          ZB = VI,
          TB = [BB.i * ZB, BB.j * ZB, BB.k * ZB];
        for (let oB = 0; oB < 3; oB++)
          if (TB[oB] + ZB <= IB[oB] - ZB || TB[oB] >= IB[oB] + lZ.q[oB] + ZB) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const JB = this.stale;
        for (let oB = 0; oB < JB.length; oB += 4)
          if (JB[oB] === BB.i && JB[oB + 1] === BB.j && JB[oB + 2] === BB.k) return void(JB[oB + 3] = this.swept);
        if (16 === JB.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        JB.push(BB.i, BB.j, BB.k, this.swept)
      }
      writeStale() {
        const BB = this.swept,
          IB = this.stale;
        this.staleAll && BB - this.staleAllSwept >= lZ.j && (this.staleAll = !1, IB.length = 0);
        let ZB = 0;
        for (let JB = 0; JB < IB.length; JB += 4)
          if (BB - IB[JB + 3] < lZ.j) {
            for (let BB = 0; BB < 4; BB++) IB[ZB + BB] = IB[JB + BB];
            ZB += 4
          } IB.length = ZB;
        const TB = this.uniformInts;
        TB[3] = this.staleAll ? 5 : ZB / 4;
        for (let JB = 0; JB < 4; JB++)
          for (let BB = 0; BB < 3; BB++) TB[16 + 4 * JB + BB] = 4 * JB < ZB ? IB[4 * JB + BB] * VI : 0
      }
      writeUniform() {
        const BB = this.uniformInts;
        let IB = this.uniformWritten;
        if (IB) {
          let ZB = !0;
          for (let TB = 0; TB < BB.length && ZB; TB++) ZB = BB[TB] === IB[TB];
          if (ZB) return
        }
        IB ??= this.uniformWritten = new Int32Array(BB.length), IB.set(BB), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(BB) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, BB)
      }
      computeVolume(BB, IB, ZB) {
        const TB = this.buildVolumePass();
        if (!TB) return void(this.volumeHolds = null);
        const JB = (0, lZ.u)(this.volumeHolds, BB);
        this.volumeHolds = BB;
        const oB = 1 === JB.length && JB[0].size.every(((BB, IB) => BB === lZ.q[IB])),
          GB = this.sweptChunk,
          vB = this.sweptLight,
          kB = IB[0] !== vB[0] || IB[1] !== vB[1] || IB[2] !== vB[2],
          cB = ZB[0] !== GB[0] || ZB[1] !== GB[1] || ZB[2] !== GB[2],
          nB = kB && Uk(IB, vB);
        if ((oB || this.written || cB || nB) && (this.fastLeft = lZ.j), oB || this.written || kB || cB) {
          this.written = !1;
          for (let BB = 0; BB < 3; BB++) GB[BB] = ZB[BB], vB[BB] = IB[BB];
          this.sweepLeft = oB ? 0 : lZ.j
        }
        if (oB ? this.swept += lZ.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, JB.push(...(0, lZ.z)(BB, this.slice)), this.slice = (this.slice + 1) % lZ.j, this.swept++), 0 === JB.length) return;
        const hB = (0, lZ.A)(this.workData, IB, JB);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const zB = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          FB = zB.beginComputePass({
            label: "sun-shadow-volume"
          });
        FB.setPipeline(TB.pipeline), FB.setBindGroup(bZ.group, TB.bindGroup), FB.dispatchWorkgroups(Math.ceil(hB / lZ.k)), FB.end(), this.device.queue.submit([zB.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const BB = bZ,
          IB = GPUShaderStage.COMPUTE,
          ZB = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: BB.uniform,
              visibility: IB,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: BB.mz,
              visibility: IB,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: BB.special,
              visibility: IB,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: BB.work,
              visibility: IB,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: BB.volume,
              visibility: IB,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          TB = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: ZB,
            entries: [{
              binding: BB.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: BB.mz,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: BB.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: BB.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: BB.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [ZB]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: xZ()
            }),
            entryPoint: "main"
          }
        }).then((BB => {
          this.volumePass = {
            pipeline: BB,
            bindGroup: TB
          }
        }), (BB => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(BB)}`)
        })), null
      }
      start(BB) {
        if (this.window) return this.window;
        const IB = (BB, IB) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * BB, IB)
        };
        this.casters = new nk(((BB, ZB) => {
          this.castersWritten = !0, IB(BB, ZB)
        }), Wk);
        const ZB = new Nk(this.casters, ((BB, IB) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * BB, IB)
        }), IB);
        ZB.encoded = BB => {
          this.markStale(BB)
        };
        const TB = BB => {
          ZB.chunkAdded(BB)
        };
        return BB.vz.on("chunkAdded", TB), this.stopWindow = () => {
          BB.vz.removeListener("chunkAdded", TB)
        }, this.window = ZB, ZB
      }
    }
    var Ck = ZB(38741),
      Qk = ZB(38748);
    const sk = 0,
      wk = 3,
      Ok = 4,
      Yk = 5;

    function ik(BB, IB, ZB, TB) {
      BB.drawOffset(IB, TB + sk), IB[TB + wk] = BB.drawTime(), ZB[TB + Ok] = BB.ring.drawStart(), ZB[TB + Yk] = BB.ring.drawCount()
    }
    const pk = `\n${XT}\n\nconst MAX_STOPS = ${Qk.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Qk.e/4}>,\n\tcolor1: array<vec4f, ${Qk.e}>,\n\tcolor2: array<vec4f, ${Qk.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Qk.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Qk.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var ak = ZB(41624);
    class Hk {
      constructor(BB, IB, ZB, TB) {
        this.device = BB, this.system = IB, this.frameIndex = ZB, this.bindings = TB, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, ak.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (BB, IB) => {
          this.device.queue.writeBuffer(this.ring, BB * Qk.i * 4, this.system.ring.records, BB * Qk.i, (IB - BB) * Qk.i)
        };
        const {
          name: JB
        } = IB;
        this.ring = BB.createBuffer({
          label: `particles-${JB}`,
          size: IB.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = BB.createBuffer({
          label: `particles-uniforms-${JB}`,
          size: 4 * Qk.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(BB) {
        const IB = (0, ak.c)(this.system, this.uniformBits, BB);
        IB && (this.uniformBits = IB, this.device.queue.writeBuffer(this.uniforms, 0, IB))
      }
      bind() {
        const {
          system: BB
        } = this, IB = this.texture;
        (0, ak.j)(BB, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${BB.name}`,
          size: [Qk.n, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Qk.n
        }, [Qk.n, 1]));
        const ZB = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === IB.view && this.boundSampler === IB.sampler && this.boundRamp === ZB || (this.boundView = IB.view, this.boundSampler = IB.sampler, this.boundRamp = ZB, this.bindGroup = this.device.createBindGroup({
          label: `particles-${BB.name}`,
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
            resource: IB.sampler
          }, {
            binding: 3,
            resource: IB.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: ZB
          }]
        }))
      }
      destroy() {
        var BB;
        this.ring.destroy(), this.uniforms.destroy(), null === (BB = this.ramp) || void 0 === BB || BB.destroy()
      }
    }
    class Mk {
      constructor(BB, IB) {
        this.device = BB, this.resources = IB, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, MI.c)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (BB, IB) => (this.bindTarget(IB), {
            renderable: this.renderable,
            pipeline: pI(this.device, IB),
            draw: BB => IB === this.preparedTarget ? this.draw(BB) : 0
          })
        }
      }
      rebind(BB) {
        this.device = BB, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [IB, ZB] of this.systems) {
          const TB = new Hk(BB, IB, ZB.frameIndex, this.bindings),
            JB = IB.ring.drawCount();
          JB > 0 && TB.upload(0, JB), this.systems.set(IB, TB)
        }
      }
      build() {
        const {
          device: BB
        } = this, IB = BB.createBindGroupLayout({
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
        this.frameLayout = BB.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = BB.createPipelineLayout({
          bindGroupLayouts: [sI(BB), IB, this.frameLayout]
        }), this.module = BB.createShaderModule({
          label: "particles",
          code: pk
        });
        const ZB = BB.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        BB.queue.writeTexture({
          texture: ZB
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: IB,
          rampSampler: BB.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: ZB.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get YJB() {
        return this.systems.size
      }
      reset() {
        for (const BB of this.systems.keys()) BB.reset()
      }
      describePendingWork() {
        return (0, Ck.h)(this.systems.keys(), "Lite")
      }
      Kr(BB, IB) {
        const ZB = new Ck.d(BB, IB, this);
        return this.systems.set(ZB, new Hk(this.device, ZB, this.allocateFrameIndex(), this.bindings)), ZB
      }
      kBB(BB, IB) {
        for (const ZB of this.systems.keys()) ZB.kBB(BB, IB)
      }
      canDraw(BB) {
        const IB = this.systems.get(BB),
          ZB = BB.texture ? this.resources.boundTexture(BB.texture) : null;
        if (!IB || !ZB || !this.targetPipelines) return !1;
        if (IB.texture = ZB, IB.pipelines.length = 0, !JI(BB.blendMode)) return this.warnOnce(`blend:${BB.blendMode}`, `particle blend mode ${BB.blendMode} is not drawn (${BB.name})`), !0;
        const TB = (0, tB.k)(BB.blendMode);
        for (const JB of TB) {
          const BB = this.pipelineFor(JB);
          if (!1 === BB) return IB.pipelines.length = 0, !0;
          BB && IB.pipelines.push(BB)
        }
        return IB.pipelines.length === TB.length
      }
      disposeStopped(BB) {
        BB.dispose()
      }
      remove(BB) {
        const IB = this.systems.get(BB);
        IB && (this.systems.delete(BB), IB.destroy(), this.freeFrameIndices.push(IB.frameIndex))
      }
      prepare(BB) {
        const IB = BB.animationRatio || 1;
        aI(this.renderable._worldCenter, BB, OI), this.preparedTarget = this.target, this.draws.length = 0;
        let ZB = 0;
        for (const TB of this.systems.values()) {
          const BB = TB.system;
          if (!BB.animateIfActive(IB)) continue;
          if (BB.ring.takeUploads(TB.upload), !BB.hasLiveParticles() || 0 === TB.pipelines.length) continue;
          TB.writeUniforms(this.warnOnce), TB.bind();
          const JB = 64 * TB.frameIndex;
          TB.count = BB.ring.drawCount(), ik(BB, this.frameData, this.frameBits, JB), ZB = Math.max(ZB, JB + 64), this.draws.push(TB)
        }
        ZB > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, ZB)
      }
      draw(BB) {
        let IB = 0,
          ZB = null;
        for (const TB of this.draws) {
          BB.setBindGroup(1, TB.bindGroup), BB.setBindGroup(2, this.frameBindGroup, [256 * TB.frameIndex]);
          for (const JB of TB.pipelines) JB !== ZB && (BB.setPipeline(JB), ZB = JB), BB.draw(4, TB.count), IB++
        }
        return IB
      }
      bindTarget(BB) {
        this.target = BB;
        const IB = `${BB._colorFormat}|${BB._depthStencilFormat}|${BB._depthCompare}|${BB._sampleCount}`;
        let ZB = this.pipelines.get(IB);
        ZB || (ZB = new Map, this.pipelines.set(IB, ZB)), this.targetPipelines = ZB
      }
      pipelineFor(BB) {
        var IB;
        const ZB = this.targetPipelines,
          TB = ZB.get(BB);
        if (void 0 !== TB) return TB;
        ZB.set(BB, null);
        const JB = this.target,
          oB = BB === tB.e,
          GB = null !== (IB = JB._depthCompare) && void 0 !== IB ? IB : wI,
          {
            device: vB
          } = this;
        return vB.createRenderPipelineAsync({
          label: `particles-${BB}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: UI({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: oB ? 1 : 0
            }
          }, JB, oI((0, tB.j)(BB))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: JB._depthStencilFormat ? {
            format: JB._depthStencilFormat,
            depthCompare: GB,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: JB._sampleCount
          }
        }).then((IB => {
          ZB.set(BB, IB)
        }), (IB => {
          ZB.set(BB, !1), console.error("Lite particle pipeline failed", IB), nI(vB, "particles", `blend-${BB}`, IB)
        })), null
      }
      allocateFrameIndex() {
        const BB = this.freeFrameIndices.pop();
        if (void 0 !== BB) return BB;
        const IB = this.nextFrameIndex++;
        if (64 * (IB + 1) > this.frameData.length) {
          const BB = new Float32Array(2 * this.frameData.length);
          BB.set(this.frameData), this.frameData = BB, this.frameBits = new Uint32Array(BB.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return IB
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
    class jk {
      constructor(BB, IB, ZB, TB, JB) {
        this.lite = BB, this.canvas = IB, this.info = ZB, this.resources = JB, this.iTB = !1, this.needPOTTextures = !1, this.E_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = IB.width, this.renderHeight = IB.height, this.caps = {
          maxTextureSize: TB.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: TB.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(BB) {
        this.lite = BB, (0, eB.n)(BB, this.renderWidth, this.renderHeight)
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
      setSize(BB, IB) {
        if (this.renderWidth === BB && this.renderHeight === IB) return !1;
        const ZB = this.renderWidth,
          TB = this.renderHeight;
        this.renderWidth = BB, this.renderHeight = IB;
        const JB = this.lite;
        if (null === JB) return !0;
        try {
          (0, eB.n)(JB, BB, IB)
        } catch (oB) {
          if (oB instanceof DOMException && "InvalidStateError" === oB.name) {
            this.renderWidth = ZB, this.renderHeight = TB;
            try {
              (0, eB.n)(JB, ZB, TB)
            } catch {
              this.canvas.width = ZB, this.canvas.height = TB
            }
            return console.warn("WebGPU could not allocate render targets for resize", BB, IB, oB.message), !1
          }
          throw oB
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
      dW() {
        const BB = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : BB - this.lastFrameTime, this.lastFrameTime = BB
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(BB, IB) {
        const ZB = document.createElement("canvas");
        return ZB.width = BB, ZB.height = IB, ZB
      }
      I5(BB, IB) {
        var ZB;
        return null !== (ZB = this.resources.I5.get(BB)) && void 0 !== ZB ? ZB : new zI(this.resources, BB, IB)
      }
      atlasArrays(BB) {
        return this.resources.atlasArrays(BB)
      }
    }
    class Pk {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(BB) {
        this.fov = BB.fov, this.nearPlane = BB.near, this.farPlane = BB.far;
        const IB = BB.worldMatrix;
        for (let ZB = 0; ZB < 16; ZB++)
          if (this.worldMatrix[ZB] !== IB[ZB]) return this.worldMatrix.set(IB), void this.worldMatrixVersion++
      }
    }
    class Rk {
      constructor(BB, IB, ZB, TB) {
        this.canvas = IB, this.options = ZB, this.cZB = void 0, this.backendName = "WebGPU (Lite)", this.Z4 = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Pk, this.lastFrameTime = 0, this.engine = void 0, this.lg = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.Ig = null, this.firstTerrain = null, this.trialFrames = 0, this.install(BB);
        const {
          resources: JB,
          meshes: oB
        } = BB;
        this.resources = JB, this.particles = BB.particles, this.cZB = new jk(BB.engine, IB, TB, BB.device.limits, JB), (0, iB.E)({
          sv: BB => {
            MB(BB) && JB.textureSlot(BB)
          },
          loaded: BB => MB(BB) ? JB.textureLoaded(BB) : null,
          canvasUpdated: (BB, IB, ZB) => {
            MB(BB) && JB.canvasUpdated(BB, IB, ZB)
          }
        }), this.Z4 = oB.Z4, this.modelMeshes = oB.modelMeshes
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
      install(BB) {
        this.engine = BB.engine, this.lg = BB.lg, this.sceneTask = BB.sceneTask, this.device = BB.device, this.liteTerrain = BB.terrain, this.meshes = BB.meshes, this.sunShadow = BB.sunShadow;
        const IB = new lB(BB.device.lost);
        this.refusals = IB, IB.deviceLost.then((() => {
          var IB;
          IB = BB.device, kI.add(IB)
        })), BB.lg.camera = this.camera
      }
      async rebuild() {
        var BB, IB, ZB, TB, JB;
        const oB = await Lk();
        this.halted = !0, this.liteTerrain.retire(), null === (BB = this.sunShadow) || void 0 === BB || BB.dispose(), this.cZB.detach();
        try {
          (0, uB.d)(this.engine)
        } catch (nB) {
          console.warn("Lite: disposing the lost device's engine threw", nB)
        }
        const GB = {
            width: this.cZB.renderWidth,
            height: this.cZB.renderHeight
          },
          vB = await ek(this.canvas, this.options, GB, oB),
          kB = dI(vB),
          cB = uk(kB);
        try {
          this.resources.rebind(vB, kB), this.particles.rebind(kB), this.Z4.dropSteady();
          const BB = {
              resources: this.resources,
              particles: this.particles,
              Z4: this.Z4,
              modelMeshes: this.modelMeshes
            },
            IB = await fk(vB, kB, this.options, BB),
            ZB = cB();
          if (null !== ZB) throw new Error(`WebGPU device lost while Lite was rebuilding (${ZB.reason}): ${ZB.message}`);
          const {
            r: TB,
            g: JB,
            b: oB
          } = this.lg.clearColor;
          this.install(IB), this.setClearColour(TB, JB, oB), this.cZB.rebind(vB)
        } catch (nB) {
          throw kB.destroy(), nB
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (IB = this.Ig) || void 0 === IB || IB.resize(), null === (ZB = this.Ig) || void 0 === ZB || null === (TB = ZB.Nz) || void 0 === TB || null === (JB = TB.pW) || void 0 === JB || JB.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((BB, IB) => {
          this.firstTerrain = {
            drawn: BB,
            failed: IB
          }
        }))
      }
      get castsEntitySunShadows() {
        var BB, IB;
        return null !== (BB = null === (IB = this.sunShadow) || void 0 === IB ? void 0 : IB.tracesEntities) && void 0 !== BB && BB
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(BB) {
        this.Ig = BB, this.modelMeshes.attach(BB.model, BB.sceneMirror);
        const IB = BB.lg;
        this.setClearColour(IB.clearColor.r, IB.clearColor.g, IB.clearColor.b), IB.draw = () => {
          this.drawFrame(BB, IB)
        }
      }
      render(BB) {
        if (!this.refusals.lost && !this.halted) {
          try {
            this.cZB.dW(), BB.lg.render()
          } catch (IB) {
            throw this.refusals.frameFailed(IB), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(IB), this.firstTerrain = null), IB
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var BB, IB, ZB, TB;
        const JB = [...this.particles.describePendingWork(), ...null !== (BB = null === (IB = this.sunShadow) || void 0 === IB ? void 0 : IB.describePendingWork()) && void 0 !== BB ? BB : []],
          oB = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (ZB = this.terrain.sceneDepth) && void 0 !== ZB && ZB.compiling ? 1 : 0) + (null !== (TB = this.terrain.shadowMask) && void 0 !== TB && TB.compiling ? 1 : 0);
        oB > 0 && JB.push(`${oB} Lite pipelines compiling`);
        const GB = this.terrain.buffersAwaitingVerdict;
        GB > 0 && JB.push(`${GB} Lite terrain buffers awaiting their out-of-memory verdict`);
        const vB = this.resources.texturesLoading;
        return vB > 0 && JB.push(`${vB} Lite textures loading`), JB
      }
      prepareTexture(BB) {
        return null !== this.resources.boundTexture(BB) || this.resources.textureFailed(BB)
      }
      drawFrame(BB, IB) {
        var ZB, TB, JB, oB, GB, vB;
        const kB = Uv(BB);
        this.camera.copyFromView(kB), this.setClearColour(kB.clearColour[0], kB.clearColour[1], kB.clearColour[2]), null === (ZB = this.sunShadow) || void 0 === ZB || ZB.prepare(BB.Nz, kB.eye, null !== (TB = BB.Nz.oN) && void 0 !== TB ? TB : null), this.terrain.prepare(BB, kB), null === (JB = this.terrain.sceneDepth) || void 0 === JB || JB.setPlanes(kB.near, kB.far), null === (oB = this.terrain.shadowMask) || void 0 === oB || oB.prepare(kB), Tv(this.sceneTask), this.meshes.prepare(IB, kB, BB.model.earthSky, null !== (GB = BB.Nz.oN) && void 0 !== GB ? GB : null), this.particles.prepare(kB);
        const cB = performance.now();
        this.resources.flushUploads(), null === (vB = this.sunShadow) || void 0 === vB || vB.traceEntities(this.meshes);
        try {
          (0, eB.m)(this.engine, this.lastFrameTime > 0 ? cB - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = cB, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(cB), this.firstTerrain = null)
      }
      setClearColour(BB, IB, ZB) {
        const TB = this.lg.clearColor;
        TB.r = BB, TB.g = IB, TB.b = ZB, TB.a = 1
      }
    }

    function rk(BB) {
      const IB = {};
      for (const ZB in BB.limits) {
        const TB = BB.limits[ZB];
        "number" === typeof TB && (IB[ZB] = TB)
      }
      return IB
    }
    const mk = "WebGPU device lost while Lite was starting";
    async function Xk(BB, IB) {
      const ZB = await Lk(),
        TB = ZB.info,
        JB = {
          vendor: (null === TB || void 0 === TB ? void 0 : TB.vendor) || "unknown vendor",
          renderer: (null === TB || void 0 === TB ? void 0 : TB.architecture) || "unknown renderer",
          version: (null === TB || void 0 === TB ? void 0 : TB.description) || "unknown version"
        };
      BB.style.background = "black";
      const oB = await ek(BB, IB, IB.bufferSize, ZB),
        GB = dI(oB),
        vB = uk(GB);
      try {
        const ZB = new Rk(await fk(oB, GB, IB, null), BB, IB, JB),
          TB = vB();
        if (null !== TB) {
          const {
            reason: BB,
            message: IB
          } = TB;
          throw Object.assign(new Error(`${mk} (${BB}): ${IB}`), {
            fallbackReason: mk
          })
        }
        return ZB
      } catch (kB) {
        throw GB.destroy(), null === vB() ? kB : (0, Zv.h)(kB, "device")
      }
    }
    async function Lk() {
      const BB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!BB) throw (0, Zv.h)(new Error("No WebGPU adapter"), "no_adapter");
      return BB
    }
    async function ek(BB, IB, ZB, TB) {
      let JB;
      try {
        JB = await (0, eB.f)(BB, {
          msaaSamples: IB.fZB ? 4 : 1,
          requiredLimits: rk(TB),
          alphaMode: "premultiplied"
        })
      } catch (GB) {
        throw (0, Zv.h)(GB, "#47" === (null === (oB = GB) || void 0 === oB ? void 0 : oB.message) ? "no_adapter" : "device")
      }
      var oB;
      return null !== ZB && (0, eB.n)(JB, ZB.width, ZB.height), JB
    }

    function uk(BB) {
      let IB = null;
      return BB.lost.then((BB => {
        IB = BB, console.error(`WebGPU device lost (${BB.reason}): ${BB.message}`)
      })), () => IB
    }
    async function fk(BB, IB, ZB, TB) {
      var JB, oB;
      let {
        sceneDepth: GB,
        sunShadow: vB
      } = ZB;
      const kB = (0, fB.c)(BB),
        cB = null !== (JB = null === TB || void 0 === TB ? void 0 : TB.resources) && void 0 !== JB ? JB : new SG(BB, IB),
        nB = new Ik(IB),
        hB = new RG(IB, cB, (BB => function(BB, IB) {
          for (const TB of CI(BB)) {
            var ZB;
            if (TB._targetSignature === IB) return null !== (ZB = TB._sceneBG) && void 0 !== ZB ? ZB : null
          }
          return null
        }(kB, BB)), null === TB || void 0 === TB ? void 0 : TB.Z4, null === TB || void 0 === TB ? void 0 : TB.modelMeshes),
        zB = null !== (oB = null === TB || void 0 === TB ? void 0 : TB.particles) && void 0 !== oB ? oB : new Mk(IB, cB);
      for (const gB of function(BB, IB, ZB) {
          return [IB.opaqueRenderable, BB.opaqueRenderable, BB.skyLastRenderable, ZB.renderable, IB.transparentRenderable, BB.transparentRenderable, BB.frontRenderable]
        }(hB, nB, zB)) WI(kB, gB);
      const FB = function(BB) {
        for (const IB of CI(BB))
          if ("lg" === IB.name) return IB;
        throw new Error("Lite: the scene has no render task named scene")
      }(kB);
      GB && nB.installSceneDepth(FB, BB);
      const NB = vB ? new dk(IB, vB.entities) : null;
      return nB.sunShadow = NB, NB && null !== vB && void 0 !== vB && vB.entities && (nB.shadowMask = new Pv(IB, FB, BB, nB)), hB.sunShadow = NB, await (0, fB.d)(kB), {
        engine: BB,
        lg: kB,
        sceneTask: FB,
        device: IB,
        terrain: nB,
        meshes: hB,
        sunShadow: NB,
        resources: cB,
        particles: zB
      }
    }
  },
  40741: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => gB,
      B: () => FB,
      D: () => NB,
      e: () => JB,
      f: () => TB,
      i: () => zB,
      m: () => nB,
      p: () => qB,
      q: () => oB,
      s: () => vB,
      u: () => kB,
      w: () => GB
    });
    const TB = 3,
      JB = 0,
      oB = 1,
      GB = 2,
      vB = {
        uniform: 3,
        mz: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      kB = 10,
      cB = "BloxdPackInputs",
      nB = "bloxdPackInputs",
      hB = [{
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
      zB = 80;

    function FB() {
      const BB = hB.map((BB => {
        let {
          name: IB,
          type: ZB
        } = BB;
        return `    ${IB}: ${ZB},\n`
      })).join("");
      return `struct ${cB} {\n${BB}}\n@group(${TB}) @binding(${JB}) var<uniform> ${nB}: ${cB};\n`
    }

    function NB(BB, IB) {
      const ZB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, zB),
        [TB, JB, oB, GB, vB, kB] = hB;
      ZB.setFloat32(TB.offset, IB.seconds, !0), ZB.setUint32(JB.offset, IB.lit ? 1 : 0, !0);
      for (let cB = 0; cB < 3; cB++) ZB.setInt32(oB.offset + 4 * cB, IB.renderOffset[cB], !0), ZB.setFloat32(GB.offset + 4 * cB, IB.WBB[cB], !0), ZB.setFloat32(vB.offset + 4 * cB, IB.eyePosition[cB], !0), ZB.setFloat32(kB.offset + 4 * cB, IB.shadowDirection[cB], !0)
    }

    function gB(BB) {
      const IB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, ZB) => {
        let {
          id: TB,
          rotation: JB
        } = BB;
        IB[ZB] = 65535 & TB | (3 & JB) << 16
      })), IB
    }
    const qB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);