export const id = 301;
export const ids = [301];
export const modules = {
  44735: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB,
      g: () => jB,
      j: () => oB,
      k: () => JB
    });
    var YB = GB(37885),
      DB = GB(39394),
      QB = GB(39388);

    function oB(BB, OB, GB, YB) {
      const DB = QB.v;
      OB.fill(0), BB.gravity.toArray(OB, DB.gravity), BB.colorDead.toArray(OB, DB.colorDead), GB[DB.ramp] = BB.useRampGradients ? 1 : 0;
      const oB = BB.getColorGradients(),
        jB = zB(BB, oB, "colour", YB);
      GB[DB.colorCount] = jB;
      for (let QB = 0; QB < jB; QB++) {
        var yB;
        const BB = oB[lB(oB, QB)];
        OB[DB.colorPositions + QB] = BB.gradient, BB.color1.toArray(OB, DB.color1 + 4 * QB), (null !== (yB = BB.color2) && void 0 !== yB ? yB : BB.color1).toArray(OB, DB.color2 + 4 * QB)
      }
      const JB = BB.getVelocityGradients(),
        MB = zB(BB, JB, "lZ", YB);
      GB[DB.velocityCount] = MB;
      for (let QB = 0; QB < MB; QB++) RB(OB, DB.lZ + 4 * QB, JB[lB(JB, QB)]);
      const PB = BB.useRampGradients ? BB.getColorRemapGradients() : null,
        pB = zB(BB, PB, "colour remap", YB);
      GB[DB.remapCount] = pB;
      for (let QB = 0; QB < pB; QB++) RB(OB, DB.remap + 4 * QB, PB[lB(PB, QB)])
    }

    function jB() {
      return {
        key: [],
        texels: new Uint8Array(4 * QB.h)
      }
    }
    const yB = [];

    function JB(BB, OB) {
      return MB(BB, yB), !NB(yB, OB.key) && (OB.key.length = 0, OB.key.push(...yB), OB.key.length > 0 && function(BB, OB) {
        for (let GB = 0; GB < QB.h; GB++) DB.h.GetCurrentGradient(GB / QB.h, BB, ((BB, OB, GB) => {
          YB.Color3.LerpToRef(BB.color, OB.color, GB, PB)
        })), OB[4 * GB] = 255 * PB.r, OB[4 * GB + 1] = 255 * PB.g, OB[4 * GB + 2] = 255 * PB.b, OB[4 * GB + 3] = 255
      }(BB.getRampGradients(), OB.texels), !0)
    }

    function MB(BB, OB) {
      OB.length = 0;
      const GB = BB.useRampGradients ? BB.getRampGradients() : null;
      if (null !== GB && void 0 !== GB && GB.length) {
        OB.push(GB.length);
        for (const BB of GB) OB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
      }
    }
    const PB = new YB.Color3;

    function zB(BB, OB, GB, YB) {
      return OB ? OB.length > QB.b ? (YB(`particleStops:${GB}`, `GPU particles use the first 2 and last ${QB.b-2} of more than ${QB.b} ${GB} gradient stops (${BB.name})`), QB.b) : OB.length : 0
    }

    function lB(BB, OB) {
      return OB < 2 || BB.length <= QB.b ? OB : BB.length - QB.b + OB
    }
    const pB = new Float32Array(QB.n),
      qB = new Uint32Array(pB.buffer);

    function ZB(BB, OB, GB) {
      return oB(BB, pB, qB, GB), OB && NB(qB, OB) ? null : qB.slice()
    }

    function NB(BB, OB) {
      if (BB.length !== OB.length) return !1;
      for (let GB = 0; GB < BB.length; GB++)
        if (BB[GB] !== OB[GB]) return !1;
      return !0
    }

    function RB(BB, OB, GB) {
      var YB;
      BB[OB] = GB.gradient, BB[OB + 1] = GB.factor1, BB[OB + 2] = null !== (YB = GB.factor2) && void 0 !== YB ? YB : GB.factor1
    }
  },
  42154: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      const YB = OB * OB * 4,
        DB = BB[0].layers,
        QB = DB * (BB.length - 1) + BB[BB.length - 1].layers,
        oB = new Uint8Array(QB * YB);
      BB.forEach(((OB, GB) => {
        const QB = GB + 1 < BB.length ? Math.min(OB.layers, DB) : OB.layers;
        oB.set(new Uint8Array(OB.pixels.buffer, OB.pixels.byteOffset, QB * YB), GB * DB * YB)
      }));
      const jB = Math.max(1, Math.min(QB, GB || QB));
      if (jB === QB) return [{
        pixels: oB,
        layers: QB
      }];
      const yB = [];
      for (let JB = 0; JB < QB; JB += jB) {
        const BB = Math.min(QB, JB + jB);
        yB.push({
          pixels: oB.slice(JB * YB, BB * YB),
          layers: BB - JB
        })
      }
      return yB
    }
    GB.d(OB, {
      e: () => YB,
      i: () => QB
    });
    const DB = new WeakMap;

    function QB(BB, OB, GB) {
      var YB, QB;
      const oB = null !== (YB = DB.get(BB)) && void 0 !== YB ? YB : new Map;
      DB.set(BB, oB);
      const jB = null !== (QB = oB.get(OB[0])) && void 0 !== QB ? QB : [];
      oB.set(OB[0], jB);
      const yB = jB.find((BB => BB.urls.length === OB.length && BB.urls.every(((BB, GB) => BB === OB[GB]))));
      if (yB) return yB.built;
      const JB = {
        urls: [...OB],
        built: GB()
      };
      return jB.push(JB), JB.built.catch((() => {
        jB.splice(jB.indexOf(JB), 1)
      })), JB.built
    }
  },
  44732: (BB, OB, GB) => {
    function YB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const OB = new Set;
      return (GB, YB) => {
        OB.has(GB) || (OB.add(GB), console.warn(BB + YB))
      }
    }
    GB.d(OB, {
      c: () => YB
    })
  },
  44773: (BB, OB, GB) => {
    GB.d(OB, {
      createLiteRendererAsync: () => ry,
      liteBabylonBackend: () => wB,
      setPipelineFailureHook: () => jO
    });
    var YB = GB(37885),
      DB = GB(38193),
      QB = GB(38583),
      oB = GB(37958),
      jB = GB(38594);
    class yB extends jB.e {
      constructor() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        super(...OB), this.color = new YB.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: OB[0].JF().getUniqueId(),
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
    const JB = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      MB = BB => 1 << JB.indexOf(BB),
      PB = MB("VERTEXCOLOR"),
      zB = MB("INSTANCES"),
      lB = MB("THIN_INSTANCES"),
      pB = MB("INSTANCESCOLOR"),
      qB = MB("FOG"),
      ZB = MB("LITE_FRONT_LAYER");

    function NB(BB, OB, GB, YB) {
      let DB = 0;
      return BB.isVerticesDataPresent("color") && (DB |= PB), "none" !== OB && (DB |= zB), "thin" === OB && (DB |= lB, BB.isVerticesDataPresent("instanceColor") && (DB |= pB)), YB.fogEnabled && BB.applyFog && 0 !== YB.fogMode && (DB |= qB), GB >= 1 && (DB |= ZB), DB
    }

    function RB(BB, OB) {
      BB.updateColor4("color", OB.color, OB.alpha)
    }
    var WB = GB(38522),
      AB = GB(38025),
      VB = GB(37966),
      SB = GB(37910),
      nB = GB(38504),
      UB = GB(38515),
      fB = GB(37946),
      kB = GB(37954),
      dB = GB(37962);
    const KB = SB.c.GLSL;
    class uB {
      constructor(BB, OB) {
        this.name = BB, this.eq = OB, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.lF = {
          addOnce: BB => {
            this.disposers.push(BB)
          }
        }, this.uniqueId = OB.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      JF() {
        return this.eq
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
        return (0, fB.P)(this.model, BB.visibility, BB.hasVertexAlpha)
      }
      needAlphaTestingForMesh(BB) {
        return (0, fB.Q)(this.model, BB.visibility, BB.hasVertexAlpha)
      }
      dispose() {
        (0, AB.m)(this);
        for (const BB of this.disposers.splice(0)) BB()
      }
      get model() {
        return (0, fB.U)(this)
      }
    }
    const mB = new WeakSet;

    function IB(BB) {
      return mB.has(BB)
    }

    function FB(BB) {
      mB.add(BB)
    }
    const iB = {
      create: (BB, OB) => ((0, VB.n)(BB, new uB(BB.name, OB)), kB.e.defines()),
      write: () => {},
      addFeature: (BB, OB) => {
        const GB = BB.mirror;
        OB.feature === UB.f && OB.state.dirLightCount > 0 && (BB.disableLighting = !0, (0, fB.S)(BB)), "BLOXD_LIGHTING" in OB.defines && (0, AB.j)(GB), OB.feature === nB.f && ((0, WB.k)(OB.state, KB), function(BB, OB) {
          const GB = BB.JF().Lp();
          setTimeout((() => {
            GB.atlasArrays(OB.sources).then((GB => {
              (0, WB.d)(BB, OB, GB.map((BB => ({
                atlas: BB,
                layers: BB.layers
              }))), GB[0].layerWidth, KB)
            })).catch((BB => {
              console.error("Failed to build the atlas's texture arrays", BB)
            }))
          }))
        }(GB, OB.state))
      },
      texture: (BB, OB, GB) => {
        let {
          data: YB,
          sets: DB
        } = GB;
        var QB;
        (FB(BB), YB) && (BB.uvSet = null !== (QB = null === DB || void 0 === DB ? void 0 : DB.coordinatesIndex) && void 0 !== QB ? QB : 0, (0, VB.T)(BB.matrix, null !== DB && void 0 !== DB ? DB : {}))
      },
      cube: FB,
      canvas: (BB, OB, GB) => {
        let {
          width: YB,
          height: DB,
          mipmaps: QB,
          samplingMode: oB = dB.g.trilinear,
          hasAlpha: jB = !1,
          wrap: yB = dB.c.clamp
        } = GB;
        const JB = BB.Lp().createCanvas(YB, DB),
          MB = new dB.h("2d", {
            kind: "canvas",
            width: YB,
            height: DB,
            canvas: JB
          }, {
            samplingMode: oB,
            wrapU: yB,
            wrapV: yB,
            noMipmap: !QB,
            invertY: !0
          });
        return MB.hasAlpha = jB, FB(MB), MB
      }
    };
    var LB = GB(38049),
      gB = GB(37802);
    class rB {
      constructor(BB, OB, GB) {
        this.engine = BB, this.clearColor = OB, this.ambientColor = GB, this.onBeforeRenderObservable = new gB.b, this.onBeforeCameraRenderObservable = new gB.b, this.onAfterRenderObservable = new gB.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.rW = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Lp() {
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
        const OB = this.pending.indexOf(BB); - 1 !== OB && this.pending.splice(OB, 1)
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
    const wB = {
      hYB: XB,
      yQB: (BB, OB) => {
        const GB = new rB(BB.engine, YB.e.FromArray(OB.clearColor), YB.Color3.FromArray(OB.ambientColor));
        (0, oB.c)(iB, GB), BB.eq = GB,
          function(BB, OB) {
            const GB = Object.assign((0, LB.i)(BB, "camera"), {
              layerMask: 268435455
            });
            BB.model.nodes.setWorldSource(GB.row, BB.model.view.worldMatrix), BB.camera = OB.activeCamera = GB
          }(BB, GB), (0, DB.h)(BB, ((BB, OB, GB) => (0, QB.j)(BB, OB, GB, jB.e)))
      },
      DQB: () => {},
      setBabylonFog: () => {},
      MQB: XB,
      pQB: () => {},
      linesFromArrays: (BB, OB, GB) => (0, QB.j)(BB, OB, GB, yB),
      Tq: () => {},
      lQB: XB
    };
    var EB = GB(44824),
      cB = GB(44834),
      hB = GB(44845);
    class aB {
      constructor(BB) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const OB = new Promise((BB => {
          this.refused = BB
        }));
        this.deviceLost = Promise.race([BB, OB]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(BB) {
        (function(BB) {
          const {
            name: OB,
            message: GB
          } = null !== BB && void 0 !== BB ? BB : {};
          return "InvalidStateError" === OB && "string" === typeof GB && GB.startsWith("GPUDevice.")
        })(BB) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: BB.message,
          framesRefused: !0
        }))
      }
    }
    var eB = GB(42154),
      TB = GB(39412);

    function bB(BB) {
      return Math.max(4, 4 * Math.ceil(BB / 4))
    }

    function CB(BB, OB, GB, YB) {
      const DB = BB.createBuffer({
        label: YB,
        size: bB(OB.byteLength),
        usage: GB,
        mappedAtCreation: !0
      });
      return new Uint8Array(DB.getMappedRange(), 0, OB.byteLength).set(new Uint8Array(OB.buffer, OB.byteOffset, OB.byteLength)), DB.unmap(), DB
    }

    function HB(BB, OB) {
      return Math.floor(Math.log2(Math.max(BB, OB))) + 1
    }

    function vB(BB, OB, GB, YB, DB, QB) {
      const oB = BB.createTexture({
          label: QB,
          size: {
            width: GB,
            height: YB,
            depthOrArrayLayers: DB
          },
          format: "rgba8unorm",
          mipLevelCount: HB(GB, YB),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        jB = (OB, GB, YB, QB) => {
          BB.queue.writeTexture({
            texture: oB,
            mipLevel: GB
          }, OB, {
            bytesPerRow: 4 * YB,
            rowsPerImage: QB
          }, {
            width: YB,
            height: QB,
            depthOrArrayLayers: DB
          })
        };
      jB(OB, 0, GB, YB);
      let yB = 1;
      for (const JB of function*(BB, OB, GB, YB) {
          let DB = BB,
            QB = OB,
            oB = GB;
          for (; QB > 1 || oB > 1;) {
            const BB = Math.max(1, QB >> 1),
              OB = Math.max(1, oB >> 1),
              GB = new Uint8Array(BB * OB * YB * 4),
              jB = 4 * QB;
            let yB = 0;
            for (let JB = 0; JB < YB; JB++) {
              const YB = JB * jB * oB;
              for (let JB = 0; JB < OB; JB++) {
                const OB = YB + Math.min(2 * JB, oB - 1) * jB,
                  MB = YB + Math.min(2 * JB + 1, oB - 1) * jB;
                for (let YB = 0; YB < BB; YB++) {
                  const BB = 4 * Math.min(2 * YB, QB - 1),
                    oB = 4 * Math.min(2 * YB + 1, QB - 1);
                  for (let YB = 0; YB < 4; YB++) GB[yB++] = DB[OB + BB + YB] + DB[OB + oB + YB] + DB[MB + BB + YB] + DB[MB + oB + YB] + 2 >> 2
                }
              }
            }
            yield {
              data: GB,
              width: BB,
              height: OB
            }, DB = GB, QB = BB, oB = OB
          }
        }(OB, GB, YB, DB)) jB(JB.data, yB++, JB.width, JB.height);
      return oB
    }
    const sB = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function xB(BB) {
      if (BB.startsWith("data:")) {
        const OB = BB.search(/[;,]/);
        return `data:${OB>5?BB.slice(5,OB):""} URL of ${BB.length} characters`
      }
      return BB.length > 80 ? `${BB.slice(0,80)}...` : BB
    }
    async function tB(BB) {
      const OB = await fetch(BB);
      if (!OB.ok) throw new Error(`${xB(BB)}: ${OB.status} ${OB.statusText}`);
      return createImageBitmap(await OB.blob(), sB)
    }
    async function BO(BB) {
      const OB = await tB(BB),
        GB = new OffscreenCanvas(OB.width, OB.height),
        YB = GB.getContext("2d", {
          willReadFrequently: !0
        });
      if (!YB) throw new Error("No 2D context to decode an image");
      YB.drawImage(OB, 0, 0);
      const {
        data: DB
      } = YB.getImageData(0, 0, OB.width, OB.height);
      return OB.close(), {
        pixels: new Uint8Array(DB.buffer, DB.byteOffset, DB.byteLength),
        width: GB.width,
        height: GB.height
      }
    }

    function OO(BB, OB) {
      return (0, eB.i)(BB, OB.urls, (async () => {
        const GB = await Promise.all(OB.urls.map((async (BB, GB) => {
            var YB, DB, QB, oB, jB;
            return null !== (oB = null !== (DB = null === (QB = OB.pixels) || void 0 === QB ? void 0 : QB[GB]) && void 0 !== DB ? DB : null, jB = OB.layerWidth, YB = null !== oB && void 0 !== oB && oB.byteLength && jB && oB.byteLength % (jB * jB * 4) === 0 ? {
              pixels: oB,
              layerWidth: jB,
              layers: oB.byteLength / (jB * jB * 4)
            } : null) && void 0 !== YB ? YB : await async function(BB) {
              const {
                pixels: OB,
                width: GB
              } = await BO(BB);
              return {
                pixels: OB,
                layerWidth: GB,
                layers: OB.byteLength / (GB * GB * 4)
              }
            }(BB)
          }))),
          YB = GB[0].layerWidth;
        return (0, eB.e)(GB, YB, BB.limits.maxTextureArrayLayers).map(((GB, DB) => {
          let {
            pixels: QB,
            layers: oB
          } = GB;
          return {
            texture: vB(BB, QB, YB, YB, oB, `atlas-${DB}-${xB(OB.urls[0])}`),
            layerWidth: YB,
            layers: oB
          }
        }))
      }))
    }
    const GO = new Map([
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
      YO = new Map([
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

    function DO(BB) {
      for (const OB of (0, TB.o)(BB))
        if (!YO.has((0, TB.k)(OB))) return !1;
      return !0
    }

    function QO(BB) {
      const OB = YO.get(BB);
      if (!OB) return null;
      const [GB, YB, DB] = OB;
      return {
        srcFactor: GO.get(GB),
        dstFactor: GO.get(YB),
        operation: DB
      }
    }
    let oO = null;

    function jO(BB) {
      oO = BB
    }
    const yO = new WeakSet;

    function JO(BB) {
      return yO.has(BB)
    }

    function MO(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var QB;
      JO(BB) || (null === (QB = oO) || void 0 === QB || QB(OB, GB, YB, DB))
    }
    class PO {
      constructor(BB) {
        this.resources = BB, this.matrixKey = {
          CP: 0
        }, this.attributesKey = {
          CP: 0
        }, this.inputs = Object.create(null);
        for (let OB = 0; OB < 4; OB++) this.inputs[`world${OB}`] = new pO(this.matrixKey, 16 * OB, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(BB, OB) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, BB, !0), OB && this.resources.vertexBufferCreated(this.attributesKey, OB, !0)
      }
    }
    class zO extends PO {
      constructor(BB, OB, GB) {
        super(BB), this.mesh = OB, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const YB = this.inputs;
        let DB = 0;
        for (const {
            size: oB
          }
          of GB) DB += oB;
        for (const {
            name: oB,
            offset: jB,
            size: yB,
            type: JB
          }
          of GB) YB[oB] = new pO(this.attributesKey, 4 * jB, 4 * DB, yB, !0, JB);
        this.rowStride = DB, BB.lBB.set(OB, this);
        const QB = OB.isVerticesDataPresent;
        OB.isVerticesDataPresent = (BB, GB) => BB in YB || QB.call(OB, BB, GB)
      }
      attach(BB, OB) {
        this.matrices = BB, this.attributes = OB, this.bind(BB, OB), this.mirror(BB, BB.length, BB.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      bBB(BB) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, BB ? 64 * BB : void 0)
      }
      CBB() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(BB, OB) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * BB, 16 * OB)
      }
      attributeRows(BB, OB) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, BB * this.rowStride, OB * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(BB, OB, GB) {
        const YB = this.mesh._thinInstanceDataStorage;
        YB.matrixData = BB, YB.matrixBufferSize = OB, YB.worldMatrices = null, YB.instancesCount = GB
      }
    }
    class lO extends PO {
      constructor(BB, OB, GB) {
        var YB, DB, QB, oB;
        super(BB), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (YB = null === GB || void 0 === GB ? void 0 : GB.interleavedKinds) && void 0 !== YB ? YB : null, this.offsets = null !== (DB = null === GB || void 0 === GB ? void 0 : GB.interleavedOffsets) && void 0 !== DB ? DB : [], this.rowStride = null !== (QB = null === GB || void 0 === GB ? void 0 : GB.interleavedRowStride) && void 0 !== QB ? QB : 0, null === (oB = this.layout) || void 0 === oB || oB.forEach(((BB, OB) => {
          this.inputs[BB] = new pO(this.attributesKey, 4 * this.offsets[OB], 4 * this.rowStride, GB.strides[BB])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), BB.batchUploads.set(OB, this), OB.lF.addOnce((() => {
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
        const OB = this.packedBatch;
        return OB.renderSelf ? 0 === BB ? this.packedSource : OB.instances[BB - 1] : OB.instances[BB]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(BB, OB, GB, YB) {
        const DB = (OB.renderSelf ? 1 : 0) + OB.rows.length;
        if (this.frame = YB, this.count = DB, this.packedSource = BB, this.packedBatch = OB, 0 === DB) return;
        if (BB.getWorldMatrix(), 16 * DB > this.matrices.length) {
          let BB = this.matrices.length / 16;
          for (; BB < DB;) BB *= 2;
          this.matrices = new Float32Array(16 * BB), this.attributes &&= new Float32Array(BB * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let QB = 0;
        OB.renderSelf && this.packRow(QB++, BB, OB.row, GB);
        for (let oB = 0; oB < OB.rows.length; oB++) this.packRow(QB++, OB.instances[oB], OB.rows[oB], GB);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * DB), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, DB * this.rowStride)
      }
      packRow(BB, OB, GB, YB) {
        const DB = this.matrices;
        if (GB < 0) DB.set(OB.getWorldMatrix().m, 16 * BB);
        else
          for (let JB = 0; JB < 16; JB++) DB[16 * BB + JB] = YB[16 * GB + JB];
        const QB = this.attributes;
        if (!QB) return;
        const oB = OB.yX,
          jB = this.layout;
        for (let JB = 0; JB < jB.length; JB++) {
          var yB;
          const OB = null !== (yB = oB[jB[JB]]) && void 0 !== yB ? yB : 0,
            GB = BB * this.rowStride + this.offsets[JB];
          OB.toArray ? OB.toArray(QB, GB) : OB.copyToArray ? OB.copyToArray(QB, GB) : QB[GB] = OB
        }
      }
    }
    class pO {
      constructor(BB, OB, GB, YB) {
        let DB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = BB, this.byteOffset = OB, this.byteStride = GB, this.size = YB, this.instanced = DB, this.type = QB, this.normalized = oB
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
    const qO = "CANVAS_ALPHA_ONE",
      ZO = `override ${qO}: bool = false;`,
      NO = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function RO(BB, OB, GB) {
      var YB;
      let DB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const QB = null !== (YB = OB._colorFormat) && void 0 !== YB ? YB : "bgra8unorm",
        oB = DB ? 15 : 0;
      return GB ? {
        ...BB,
        targets: [{
          format: QB,
          blend: {
            color: GB,
            alpha: NO
          },
          writeMask: oB
        }]
      } : {
        ...BB,
        constants: {
          ...BB.constants,
          [qO]: 1
        },
        targets: [{
          format: QB,
          writeMask: oB
        }]
      }
    }

    function WO(BB, OB) {
      BB._renderables.push(OB)
    }

    function AO(BB) {
      return BB._device
    }

    function VO(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = BB._frameGraph) || void 0 === GB ? void 0 : GB._tasks) && void 0 !== OB ? OB : []
    }

    function SO(BB) {
      return BB._currentEncoder
    }

    function nO(BB) {
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
    const UO = "greater-equal",
      fO = 2e5,
      kO = 1e5,
      dO = new WeakMap;

    function KO(BB, OB) {
      let GB = dO.get(BB);
      if (!GB) {
        GB = {
          module: BB.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, dO.set(BB, GB)
      }
      const YB = `${OB._colorFormat}|${OB._depthStencilFormat}|${OB._sampleCount}`;
      let DB = GB.pipelines.get(YB);
      if (!DB) {
        var QB;
        const {
          module: oB
        } = GB;
        DB = BB.createRenderPipeline({
          label: `placeholder ${YB}`,
          layout: BB.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: oB,
            entryPoint: "v"
          },
          fragment: {
            module: oB,
            entryPoint: "f",
            targets: [{
              format: null !== (QB = OB._colorFormat) && void 0 !== QB ? QB : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: OB._depthStencilFormat ? {
            format: OB._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: OB._sampleCount
          }
        }), GB.pipelines.set(YB, DB)
      }
      return DB
    }

    function uO(BB, OB, GB) {
      const YB = OB.eye,
        DB = OB.viewMatrix;
      BB[0] = YB[0] + DB[2] * GB, BB[1] = YB[1] + DB[6] * GB, BB[2] = YB[2] + DB[10] * GB
    }
    var mO = GB(38636),
      IO = GB(44732),
      FO = GB(37919);
    const iO = Math.PI,
      LO = iO / 1.95,
      gO = [5e-4 / 94, 125e-7, 5e-4 / 18],
      rO = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((BB => {
        let [OB, GB] = BB;
        return .434 * iO * Math.pow(2 * iO / OB, 2) * GB
      }));

    function XO(BB, OB, GB) {
      const {
        up: YB,
        mieDirectionalG: DB
      } = BB, QB = 1 - cO(1 - Math.exp(OB[1] / 45e4), 0, 1), oB = BB.rayleigh - (1 - QB), jB = Math.hypot(OB[0], OB[1], OB[2]), yB = jB > 0 ? 1 / jB : 0, JB = GB.sunDir;
      for (let lB = 0; lB < 3; lB++) JB[lB] = OB[lB] * yB;
      const MB = JB[0] * YB[0] + JB[1] * YB[1] + JB[2] * YB[2],
        PB = 1e3 * Math.max(0, 1 - Math.exp(-(LO - Math.acos(cO(MB, -1, 1))) / 1.5));
      GB.sunE = PB;
      const zB = .2 * BB.turbidity * 1e-17 * BB.mieCoefficient;
      for (let lB = 0; lB < 3; lB++) {
        const BB = gO[lB] * oB,
          OB = rO[lB] * zB,
          YB = PB / (BB + OB);
        GB.inScatterR[lB] = BB * YB, GB.inScatterM[lB] = OB * YB, GB.extinctionBeta[lB] = 8400 * BB + 1250 * OB
      }
      return GB.sunsetMix = cO(Math.pow(1 - MB, 5), 0, 1), GB.sunDiscE = 19e3 * PB, GB.mieScale = (1 - DB * DB) / (4 * iO), GB.mieBase = 1 + DB * DB, GB.mieSlope = 2 * DB, GB
    }
    const wO = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const EO = 1 / function(BB) {
      const {
        A: OB,
        B: GB,
        C: YB,
        D: DB,
        E: QB,
        F: oB
      } = wO;
      return (BB * (OB * BB + YB * GB) + DB * QB) / (BB * (OB * BB + GB) + DB * oB) - QB / oB
    }(1e3);

    function cO(BB, OB, GB) {
      return Math.min(Math.max(BB, OB), GB)
    }
    const hO = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function aO(BB, OB) {
      const GB = new Map(OB),
        YB = [],
        DB = [],
        QB = () => 0 === DB.length || DB[DB.length - 1].active;
      let oB = null;
      const jB = () => {
        const BB = [...GB].filter((BB => {
            let [, OB] = BB;
            return !0 !== OB
          })),
          OB = BB.map((BB => {
            let [OB] = BB;
            return OB
          })).join("|");
        oB = BB.length ? new RegExp(`\\b(${OB})\\b`, "g") : null
      };
      jB();
      for (const yB of BB.split("\n")) {
        const BB = hO.exec(yB);
        if (!BB) {
          QB() && YB.push(oB ? eO(yB, oB, GB) : yB);
          continue
        }
        const OB = BB[1],
          JB = BB[2].trim();
        if ("ifdef" === OB || "ifndef" === OB || "if" === OB) {
          const BB = QB(),
            YB = "if" === OB ? TO(JB, GB) : GB.has(JB) === ("ifdef" === OB);
          DB.push({
            active: BB && YB,
            parentActive: BB,
            taken: YB
          })
        } else if ("elif" === OB || "else" === OB) {
          const BB = DB[DB.length - 1];
          if (!BB) throw new Error(`#${OB} without #if`);
          const YB = !BB.taken && ("else" === OB || TO(JB, GB));
          BB.active = BB.parentActive && YB, BB.taken = BB.taken || YB
        } else if ("endif" === OB) {
          if (!DB.pop()) throw new Error("#endif without #if")
        } else if (QB()) {
          const [BB, ...YB] = JB.split(/\s+/);
          "undef" === OB ? GB.delete(BB) : GB.set(BB, !YB.length || YB.join(" ")), jB()
        }
      }
      if (DB.length) throw new Error("Unterminated #if");
      return YB.join("\n")
    }

    function eO(BB, OB, GB) {
      return BB.replace(OB, (BB => {
        const OB = GB.get(BB);
        return "string" === typeof OB ? OB : BB
      }))
    }

    function TO(BB, OB) {
      var GB;
      const YB = null !== (GB = BB.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== GB ? GB : [];
      let DB = 0;
      const QB = () => YB[DB],
        oB = () => YB[DB++],
        jB = BB => {
          const GB = /^\d/.test(BB) ? BB : OB.get(BB);
          return "string" === typeof GB ? parseInt(GB) : Number.NaN
        },
        yB = () => {
          const BB = oB();
          if ("!" === BB) return !yB();
          if ("(" === BB) {
            const BB = MB();
            return oB(), BB
          }
          if ("defined" === BB) {
            const BB = "(" === QB();
            BB && oB();
            const GB = oB();
            return BB && oB(), OB.has(GB)
          }
          const GB = QB();
          if ("==" === GB || "!=" === GB || ">" === GB || "<" === GB || ">=" === GB || "<=" === GB) {
            oB();
            const OB = jB(BB),
              YB = jB(oB());
            if (Number.isNaN(OB) || Number.isNaN(YB)) return !1;
            switch (GB) {
              case "==":
                return OB === YB;
              case "!=":
                return OB !== YB;
              case ">":
                return OB > YB;
              case "<":
                return OB < YB;
              case ">=":
                return OB >= YB;
              default:
                return OB <= YB
            }
          }
          return OB.has(BB)
        },
        JB = () => {
          let BB = yB();
          for (;
            "&&" === QB();) {
            oB();
            const OB = yB();
            BB = BB && OB
          }
          return BB
        },
        MB = () => {
          let BB = JB();
          for (;
            "||" === QB();) {
            oB();
            const OB = JB();
            BB = BB || OB
          }
          return BB
        },
        PB = MB();
      if (DB !== YB.length) throw new Error(`Cannot evaluate #if ${BB}`);
      return PB
    }
    var bO = GB(38008),
      CO = GB(38113),
      HO = GB(38116),
      vO = GB(41714),
      sO = GB(39454);
    const xO = 32,
      tO = [10, 3, 10],
      BG = [21, 7, 21],
      OG = BG[0] * BG[1] * BG[2],
      GG = 0,
      YG = 1,
      DG = 2,
      QG = 3,
      oG = 64,
      jG = 512,
      yG = 4 * OG,
      JG = 1536,
      MG = yG + OG * JG,
      PG = 1073741824,
      zG = MG + 1;

    function lG(BB, OB) {
      const GB = BB % OB;
      return GB < 0 ? GB + OB : GB
    }

    function pG(BB, OB, GB) {
      return YB = lG(BB, BG[0]), DB = lG(OB, BG[1]), QB = lG(GB, BG[2]), YB + BG[0] * (DB + BG[1] * QB);
      var YB, DB, QB
    }

    function qG(BB, OB, GB) {
      return BB + 8 * (OB + 8 * GB)
    }

    function ZG(BB, OB, GB) {
      return BB + 4 * (OB + 4 * GB)
    }
    const NG = 65535,
      RG = 0,
      WG = 1,
      AG = 2,
      VG = 3;

    function SG(BB) {
      return Math.ceil(BB * BB / 32)
    }
    const nG = 8192,
      UG = 1 << 18,
      fG = 65536,
      kG = 294912,
      dG = 128,
      KG = 4096,
      uG = 16,
      mG = 16385,
      IG = 81921,
      FG = 147457,
      iG = 4194304;
    const LG = [0, 0, 0],
      gG = [0, 0, 0];

    function rG(BB, OB, GB, YB) {
      ! function(BB, OB, GB) {
        const [YB, DB, QB] = [BB[0], BB[1], BB[2]];
        let oB, jB, yB;
        Math.abs(DB) < .99 ? (oB = QB, jB = 0, yB = -YB) : (oB = -DB, jB = YB, yB = 0);
        const JB = Math.hypot(oB, jB, yB);
        OB[0] = oB / JB, OB[1] = jB / JB, OB[2] = yB / JB, GB[0] = DB * OB[2] - QB * OB[1], GB[1] = QB * OB[0] - YB * OB[2], GB[2] = YB * OB[1] - DB * OB[0]
      }(YB, LG, gG);
      const DB = 1 / 32;
      for (const [QB, oB] of [
          [0, LG],
          [4, gG]
        ]) {
        for (let GB = 0; GB < 3; GB++) BB[OB + QB + GB] = oB[GB] * DB;
        BB[OB + QB + 3] = -(oB[0] * GB[0] + oB[1] * GB[1] + oB[2] * GB[2]) * DB
      }
    }
    class XG {
      constructor() {
        this.words = new Uint32Array(FG), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      ZP(BB, OB) {
        this.parts = 0, this.refs = 0, this.view = BB, this.viewAt = OB;
        const GB = BB[OB + 1] * BB[OB + 6] - BB[OB + 2] * BB[OB + 5],
          YB = BB[OB + 2] * BB[OB + 4] - BB[OB] * BB[OB + 6],
          DB = BB[OB] * BB[OB + 5] - BB[OB + 1] * BB[OB + 4],
          QB = Math.hypot(GB, YB, DB) || 1;
        this.light[0] = GB / QB, this.light[1] = YB / QB, this.light[2] = DB / QB
      }
      add(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= KG || ! function(BB, OB, GB) {
            const YB = BB[OB],
              DB = BB[OB + 1],
              QB = BB[OB + 2],
              oB = BB[OB + 3],
              jB = BB[OB + 4],
              yB = BB[OB + 5],
              JB = BB[OB + 6],
              MB = BB[OB + 7],
              PB = BB[OB + 8],
              zB = BB[OB + 9],
              lB = BB[OB + 10],
              pB = BB[OB + 11],
              qB = BB[OB + 12],
              ZB = BB[OB + 13],
              NB = BB[OB + 14],
              RB = BB[OB + 15],
              WB = YB * yB - DB * jB,
              AB = YB * JB - QB * jB,
              VB = YB * MB - oB * jB,
              SB = DB * JB - QB * yB,
              nB = DB * MB - oB * yB,
              UB = QB * MB - oB * JB,
              fB = PB * ZB - zB * qB,
              kB = PB * NB - lB * qB,
              dB = PB * RB - pB * qB,
              KB = zB * NB - lB * ZB,
              uB = zB * RB - pB * ZB,
              mB = lB * RB - pB * NB,
              IB = WB * mB - AB * uB + VB * KB + SB * dB - nB * kB + UB * fB;
            if (!(Math.abs(IB) > 1e-12)) return !1;
            const FB = 1 / IB;
            return GB[0] = (yB * mB - JB * uB + MB * KB) * FB, GB[1] = (QB * uB - DB * mB - oB * KB) * FB, GB[2] = (ZB * UB - NB * nB + RB * SB) * FB, GB[3] = (lB * nB - zB * UB - pB * SB) * FB, GB[4] = (JB * dB - jB * mB - MB * kB) * FB, GB[5] = (YB * mB - QB * dB + oB * kB) * FB, GB[6] = (NB * VB - qB * UB - RB * AB) * FB, GB[7] = (PB * UB - lB * VB + pB * AB) * FB, GB[8] = (jB * uB - yB * dB + MB * fB) * FB, GB[9] = (DB * dB - YB * uB - oB * fB) * FB, GB[10] = (qB * nB - ZB * VB + RB * WB) * FB, GB[11] = (zB * VB - PB * nB - pB * WB) * FB, GB[12] = (yB * kB - jB * KB - JB * fB) * FB, GB[13] = (YB * KB - DB * kB + QB * fB) * FB, GB[14] = (ZB * AB - qB * SB - NB * WB) * FB, GB[15] = (PB * SB - zB * AB + lB * WB) * FB, !0
          }(OB, GB, this.inverse)) return;
        const {
          view: YB,
          viewAt: DB
        } = this, QB = GB;
        let oB = 1 / 0,
          jB = 1 / 0,
          yB = -1 / 0,
          JB = -1 / 0,
          MB = -1 / 0;
        const [PB, zB, lB] = this.light;
        for (let VB = 0; VB < 8; VB++) {
          const GB = 1 & VB ? BB.hi[0] : BB.lo[0],
            pB = 2 & VB ? BB.hi[1] : BB.lo[1],
            qB = 4 & VB ? BB.hi[2] : BB.lo[2],
            ZB = GB * OB[QB] + pB * OB[QB + 4] + qB * OB[QB + 8] + OB[QB + 12],
            NB = GB * OB[QB + 1] + pB * OB[QB + 5] + qB * OB[QB + 9] + OB[QB + 13],
            RB = GB * OB[QB + 2] + pB * OB[QB + 6] + qB * OB[QB + 10] + OB[QB + 14],
            WB = YB[DB] * ZB + YB[DB + 1] * NB + YB[DB + 2] * RB + YB[DB + 3],
            AB = YB[DB + 4] * ZB + YB[DB + 5] * NB + YB[DB + 6] * RB + YB[DB + 7];
          oB = Math.min(oB, WB), jB = Math.min(jB, AB), yB = Math.max(yB, WB), JB = Math.max(JB, AB), MB = Math.max(MB, PB * ZB + zB * NB + lB * RB)
        }
        if (yB < -1 || JB < -1 || oB >= 1 || jB >= 1) return;
        const pB = this.parts++,
          qB = this.rects;
        qB[4 * pB] = wG(oB), qB[4 * pB + 1] = wG(jB), qB[4 * pB + 2] = wG(yB), qB[4 * pB + 3] = wG(JB);
        const ZB = this.inverse,
          {
            cell: NB,
            dims: RB,
            lo: WB
          } = BB,
          AB = IG + pB * uG;
        for (let VB = 0; VB < 3; VB++) this.floats[AB + 4 * VB] = ZB[VB] / NB, this.floats[AB + 4 * VB + 1] = ZB[4 + VB] / NB, this.floats[AB + 4 * VB + 2] = ZB[8 + VB] / NB, this.floats[AB + 4 * VB + 3] = (ZB[12 + VB] - WB[VB]) / NB;
        this.words[AB + 12] = BB.at, this.floats[AB + 13] = MB + .001 * (1 + Math.abs(MB)), this.words[AB + 14] = RB[0] | RB[1] << 8 | RB[2] << 16
      }
      finish() {
        const BB = dG,
          {
            counts: OB,
            rects: GB,
            words: YB
          } = this;
        OB.fill(0);
        let DB = 0,
          QB = 0;
        for (; QB < this.parts; QB++) {
          const YB = 4 * QB,
            oB = (GB[YB + 2] - GB[YB] + 1) * (GB[YB + 3] - GB[YB + 1] + 1);
          if (DB + oB > 65536) break;
          DB += oB;
          for (let DB = GB[YB + 1]; DB <= GB[YB + 3]; DB++)
            for (let QB = GB[YB]; QB <= GB[YB + 2]; QB++) OB[DB * BB + QB]++
        }
        let oB = 0;
        for (let yB = 0; yB < 16384; yB++) YB[yB] = oB, oB += OB[yB], OB[yB] = YB[yB];
        YB[16384] = oB;
        for (let yB = 0; yB < QB; yB++) {
          const DB = 4 * yB;
          for (let QB = GB[DB + 1]; QB <= GB[DB + 3]; QB++)
            for (let oB = GB[DB]; oB <= GB[DB + 2]; oB++) YB[mG + OB[QB * BB + oB]++] = yB
        }
        const jB = this.floats;
        for (let yB = 0; yB < 16384; yB++) {
          const BB = mG + YB[yB],
            OB = BB + Math.min(YB[yB + 1] - YB[yB], 64);
          for (let GB = BB + 1; GB < OB; GB++) {
            const OB = YB[GB],
              DB = jB[81934 + OB * uG];
            let QB = GB - 1;
            for (; QB >= BB && jB[81934 + YB[QB] * uG] < DB; QB--) YB[QB + 1] = YB[QB];
            YB[QB + 1] = OB
          }
        }
        this.refs = DB
      }
    }

    function wG(BB) {
      return Math.min(127, Math.max(0, Math.floor((.5 * BB + .5) * dG)))
    }

    function EG(BB, OB, GB, YB, DB) {
      for (let QB = 0; QB < 4; QB++)
        for (let oB = 0; oB < 4; oB++) DB[4 * QB + oB] = BB[OB + 4 * QB] * GB[YB + oB] + BB[OB + 4 * QB + 1] * GB[YB + 4 + oB] + BB[OB + 4 * QB + 2] * GB[YB + 8 + oB] + BB[OB + 4 * QB + 3] * GB[YB + 12 + oB]
    }

    function cG(BB, OB, GB, YB, DB) {
      const QB = BB[0] - OB,
        oB = BB[1] - GB,
        jB = BB[2] - YB,
        yB = BB[3] - OB,
        JB = BB[4] - GB,
        MB = BB[5] - YB,
        PB = BB[6] - OB,
        zB = BB[7] - GB,
        lB = BB[8] - YB;
      if (Math.min(QB, yB, PB) > DB || Math.max(QB, yB, PB) < -DB) return !1;
      if (Math.min(oB, JB, zB) > DB || Math.max(oB, JB, zB) < -DB) return !1;
      if (Math.min(jB, MB, lB) > DB || Math.max(jB, MB, lB) < -DB) return !1;
      const pB = yB - QB,
        qB = JB - oB,
        ZB = MB - jB,
        NB = PB - yB,
        RB = zB - JB,
        WB = lB - MB,
        AB = qB * WB - ZB * RB,
        VB = ZB * NB - pB * WB,
        SB = pB * RB - qB * NB;
      if (Math.abs(AB * QB + VB * oB + SB * jB) > DB * (Math.abs(AB) + Math.abs(VB) + Math.abs(SB))) return !1;
      const nB = [pB, qB, ZB, NB, RB, WB, QB - PB, oB - zB, jB - lB];
      for (let UB = 0; UB < 3; UB++) {
        const BB = nB[3 * UB],
          OB = nB[3 * UB + 1],
          GB = nB[3 * UB + 2];
        for (let YB = 0; YB < 3; YB++) {
          const pB = 0 === YB ? 0 : 1 === YB ? GB : -OB,
            qB = 0 === YB ? -GB : 1 === YB ? 0 : BB,
            ZB = 0 === YB ? OB : 1 === YB ? -BB : 0,
            NB = pB * QB + qB * oB + ZB * jB,
            RB = pB * yB + qB * JB + ZB * MB,
            WB = pB * PB + qB * zB + ZB * lB,
            AB = DB * (Math.abs(pB) + Math.abs(qB) + Math.abs(ZB));
          if (Math.min(NB, RB, WB) > AB || Math.max(NB, RB, WB) < -AB) return !1
        }
      }
      return !0
    }
    const hG = new Float32Array(1);
    new Uint32Array(hG.buffer);
    var aG = GB(39462);

    function eG(BB) {
      const [OB, GB, YB] = aG.q;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${BB.group}) @binding(${BB.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${OB-1}, ${GB-1}, ${YB-1});\n}\n`
    }

    function TG(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [DB, QB, oB] = BG, [jB, yB, JB] = tO, MB = Math.log2(xO), PB = YB ? "var<private> bloxdSpCrossed: bool;\n" : "", zB = YB ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${BB.group}) @binding(${BB.sz}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${BB.group}) @binding(${BB.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${GB?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${PB}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${WG}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${AG}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${GB?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${VG}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${DB}, ${QB}, ${oB});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${DB} * (s.y + ${QB} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${jB}, ${yB}, ${JB}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${MB}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${QG}u) {\n\t\treturn named && state == ${DG}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${yG}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${MG}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${OB?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${OB?`\t\tif (exits && step > 0 && step % ${HG} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${MB}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${GG}u || kind == ${YG}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${DG}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${yG}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${zB}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const bG = {
      group: 0,
      uniform: 0,
      sz: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function CG() {
      const BB = bG;
      return `${eG(BB)}${TG(BB,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${aG.b}>,\n}\n@group(${BB.group}) @binding(${BB.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${BB.group}) @binding(${BB.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${aG.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${aG.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${aG.f}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const HG = 2;
    const vG = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function sG(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const YB = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${OB.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        DB = "trace" === GB || "lit" === GB,
        QB = "maskEdge" === GB ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        oB = DB ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${OB.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${OB.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===GB?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${QB};\n`;
      return `${YB}${BB.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${DB?function(){const[BB,OB,GB]=aG.q;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${BB}.0, ${OB}.0, ${GB}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${oB}}\n`:""}${BB.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${OB.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${OB.renderOffset});\n}\n`:""}`
    }
    const xG = "bloxdSpOwnTexture";

    function tG(BB) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${BB.texture}) - 1u)))`
    }
    const BY = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${mO.f.map((BB=>{let[OB,GB]=BB;return`\tbloxdSpOut.${OB} = (bloxdSpWord & ${GB}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function OY(BB) {
      return `bloxdSpFlags(${BB})`
    }
    const GY = `${vO.g}.eyePosition`;

    function YY(BB, OB, GB, YB, DB) {
      const QB = BB.indexOf(OB);
      if (QB < 0 || BB.indexOf(OB, QB + 1) >= 0) throw new Error(`Lite's ${DB} program changed at the shader pack ${YB} hook: ${QB<0?"no":"more than one"} anchor (lite/${DB}ShaderPack.ts)`);
      return BB.slice(0, QB) + GB + BB.slice(QB + OB.length)
    }

    function DY(BB) {
      return BB.sunShadow || BB.airShadow
    }

    function QY(BB, OB) {
      return OB && DY(BB)
    }
    const oY = {
      group: vO.e,
      ...vO.n
    };

    function jY(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!DY(BB)) return "";
      if (OB) {
        const OB = oY,
          DB = "trace" === GB || "lit" === GB;
        let QB = "";
        BB.sunShadow && (QB = DB ? `${TG(OB,!0,"lit"===GB)}${YB=OB,`@group(${YB.group}) @binding(${YB.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${YB.group}) @binding(${YB.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(BB, OB, GB) {
          const YB = `@group(${BB}) @binding(${OB}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return GB ? `${YB}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${vG}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((BB=>`\t{\n\t\tlet o = vec2i(${BB});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : YB
        }(OB.group, vO.o, "maskEdge" === GB));
        const oB = {
          shadowDirection: `${vO.g}.shadowDirection`,
          renderOffset: `${vO.g}.renderOffset`,
          eyePosition: `${vO.g}.eyePosition`
        };
        return `${eG(OB)}${QB}${function(BB){const[OB,GB,YB]=aG.q;return`@group(${BB.group}) @binding(${BB.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${BB.group}) @binding(${BB.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${OB}.0, ${GB}.0, ${YB}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(OB)}${sG(BB,oB,GB)}`
      }
      var YB;
      return `${BB.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${BB.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function yY(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!OB) return "";
      const QB = (oB = "fragmentInputs.vPositionW", jB = BB.sunShadow ? {
        normal: GB,
        flags: YB
      } : null, `\n\tbloxdSpShadowPosition = ${oB};\n${jB?`\tbloxdSpShadowNormal = normalize(${jB.normal});\n\tbloxdSpShadowEmissive = (${jB.flags} & ${mO.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${jB.flags} & ${mO.h}u) != 0u;\n`:""}`);
      var oB, jB;
      return BB.sunShadow && ("mask" === DB || "maskEdge" === DB) ? `${QB}${yB="fragmentInputs.position",JB="maskEdge"===DB,`\n\tbloxdSpShadowPixel = vec2i(${yB}.xy);\n${JB?`\tbloxdSpShadowZ = ${yB}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${yB}.z), dpdy(${yB}.z));\n`:""}`}` : QB;
      var yB, JB
    }
    const JY = "bloxdSpTextureRotation",
      MY = "bloxdSpTextureLayers",
      PY = `@group(${vO.e}) @binding(${vO.p}) var<storage, read> ${MY}: array<u32>;\n`;

    function zY(BB) {
      return `\tvertexOutputs.vPackTexture = ${MY}[min(u32(${BB}), arrayLength(&${MY}) - 1u)];\n`
    }

    function lY(BB) {
      return void 0 !== BB.uv
    }

    function pY(BB) {
      if (!BB) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (lY(BB)) return function(BB) {
        const {
          texture: OB,
          cells: GB,
          layers: YB
        } = BB, DB = `textureDimensions(${OB}, bloxdSpLevel)`, QB = GB ? `max(vec2u(vec2f(${DB}) / ${GB}), vec2u(1u))` : DB, oB = GB ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${QB};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${GB}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${GB}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${OB}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${DB} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${QB};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${OB}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let jB;
        if (GB)
          if (1 === YB.length) jB = `\treturn bloxdSpOwnTexel(${YB[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const BB = YB.length - 1;
            jB = `\tvar bloxdSpColour = bloxdSpOwnTexel(${YB[BB]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let OB = BB - 1; OB >= 0; OB--) jB += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${YB[OB]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            jB += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else jB = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${BB.id?`var<private> ${xG}: u32;\n`:""}${oB}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${tG(BB)};\n\treturn ${QB};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${BB.id?xG:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${tG(BB)};\n${jB}}\n`
      }(BB);
      const OB = BB,
        GB = BB => {
          const GB = BB > 0 ? `bloxdSpLayer - ${OB.layers*BB}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${BB}, ${OB.sampler}, bloxdSpTurned, ${GB}, round(bloxdSpMipLevel));`
        };
      let YB = "";
      for (let QB = 0; QB < OB.count - 1; QB++) YB += `\tif (bloxdSpLayer < ${OB.layers*(QB+1)}u) {\n\t\t${GB(QB)}\n\t}\n`;
      const DB = OB.frame ? `${OB.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${JY}: u32;\n${PY}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${JY} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${JY} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${JY} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${DB}${YB}\t${GB(OB.count-1)}\n}\n`
    }

    function qY(BB, OB, GB) {
      return !!BB.surface && "bloxdDefaultSurface" !== BB.surface && function(BB, OB) {
        return "liquid" === OB || !BB
      }(OB, GB)
    }

    function ZY(BB, OB) {
      return BB.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${OB.vertexLocalPosition}, ${OY(OB.vertexFlags)});\n\t\tlet bloxdSpVertex = ${BB.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function NY(BB, OB, GB, YB, DB) {
      if (!BB.surface) return "";
      const QB = (BB, OB) => `\n\tlet bloxdSpTexelUV = ${BB};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${OB}) - 1u));`;
      let oB = "",
        jB = "0u, 0u, vec2f(0.0), 0.0";
      const yB = YB && lY(YB) ? YB : null,
        JB = YB && !lY(YB) ? YB : null;
      if (yB) {
        oB = `${yB.id?`\n\tlet bloxdSpTexture = ${yB.id};\n\t${xG} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${yB.uv};${QB(function(BB,OB){var GB;return`${null!==(GB=BB.levelUv)&&void 0!==GB?GB:BB.cells?`${OB} / ${BB.cells}`:OB} * vec2f(textureDimensions(${BB.texture}))`}(yB,"bloxdSpUv"),yB.texture)}`, jB = (yB.id ? `${xG}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else JB && (oB = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${JY} = bloxdSpTexture >> 16u;${QB(`fragmentInputs.vMainUV1 * ${(0,bO.pb)(JB.width)}`,"textureAtlas0")}`, jB = `bloxdSpTexture & 0xffffu, ${JY}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const MB = DB.overlayColour,
        PB = MB ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        zB = "bloxdDefaultSurface" !== BB.surface || MB ? `\n\tbaseColor = vec4f(${PB}, baseColor.a);` : "",
        lB = qY(BB, OB, GB) ? `\n\t${DB.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${oB}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${DB.alpha}, ${DB.enchantTier}, ${DB.enchantColour}, ${DB.enchantSpeed}, ${null!==MB&&void 0!==MB?MB:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${DB.normal}, ${DB.localPosition}, ${OY(DB.flags)}, ${jB});\n\tlet bloxdSpSurface = ${BB.surface}(bloxdSpSurfaceIn);${zB}${lB}\n`
    }
    const RY = "bloxdSpLightIn";

    function WY(BB, OB, GB, YB) {
      if (!BB.light) return "";
      const DB = OB ? `${bO.m}.rgb, ${bO.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${bO.i}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: QB,
          diffuse: oB,
          emissive: jB,
          ambient: yB,
          fogColour: JB,
          fogAlpha: MB,
          normal: PB
        } = YB;
      return `\tvar ${RY} = BloxdLightIn(vec3f(0.0), ${GB?QB:"0.0"}, ${oB}, ${jB}, ${yB}, ${DB}, ${JB}, ${MB}, fragmentInputs.vPositionW, ${PB}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${RY}.litColour = bloxdLitColour(bloxdSpSurface, ${RY});\n`
    }

    function AY(BB) {
      return BB.light ? `\n\t{\n\t\tlet bloxdSpLight = ${BB.light}(bloxdSpSurface, ${RY});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const VY = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      SY = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      nY = "\treturn color;\n}",
      UY = {
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
    const fY = Object.freeze({});

    function kY(BB) {
      var OB;
      return !(null === (OB = (0, sO.h)(BB)) || void 0 === OB || !OB.sceneDepth)
    }

    function dY(BB) {
      const OB = (0, sO.h)(BB);
      return !!OB && qY(OB.hooks, OB.strict, OB.program)
    }

    function KY(BB, OB, GB, YB) {
      return YY(BB, OB, GB, YB, "terrain")
    }

    function uY(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const QB = function(BB) {
          return (0, sO.d)(BB.packVariant, BB.liquid ? "liquid" : "terrain")
        }(BB),
        {
          hooks: oB
        } = QB,
        jB = QY(QB, YB),
        yB = "edge" === DB ? "maskEdge" : "plain" === DB ? "mask" : "trace",
        JB = ZY(oB, UY);
      JB && (OB = KY(OB, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${JB}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const MB = "atlas" === BB.texture ? {
          count: BB.atlasCount,
          layers: BB.atlasLayers,
          width: BB.v_,
          sampler: "atlasSampler",
          frame: BB.animated ? GB : null
        } : null,
        PB = `${QB.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${yY(QB,jB,UY.normal,UY.flags,yB)}${NY(oB,QB.strict,QB.program,MB,UY)}`;
      PB && (OB = KY(OB, VY, `${VY.slice(0,-1)}${PB}`, "surface"));
      const zB = AY(oB);
      return zB && (OB = KY(OB, SY, `${WY(oB,BB.lighting,BB.dirLightCount>0,UY)}${SY}`, "light input"), OB = KY(OB, nY, `${zB.slice(1)}${nY}`, "light")), `${(0,vO.w)()}${QB.sceneDepth?`@group(${vO.e}) @binding(${vO.k}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${GY};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${jY(QB,jB,yB)}${pY(MB)}${BY}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${QB.code}${OB}`
    }
    const mY = SB.c.WGSL;

    function IY(BB) {
      return void 0 !== BB.packVariant
    }
    const FY = {
        qQB: 0,
        ZQB: 4,
        NQB: 8,
        RQB: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      iY = FY.aoLevels + 4,
      LY = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      gY = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      rY = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      XY = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      wY = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      EY = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      cY = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      hY = 0,
      aY = 3,
      eY = 4,
      TY = 5,
      bY = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${CO.e}, ${CO.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${CO.e}, ${CO.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      CY = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((BB=>HO.e>>BB&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const HY = {
      kP: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: BB => `animDataPerTex[${BB}]`
    };

    function vY(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HY;
      return `\n\tlet atlasIdxIn = ${BB};\n\tlet animTick = ${GB.kP};\n\tlet animTickStride = ${GB.stride};\n\tlet numAnimTextures = ${GB.count};\n\t${(0,nB.e)(SB.c.WGSL,GB.perTexture)}\n\t${OB}animLayer;\n`
    }

    function sY(BB) {
      const OB = (OB, GB) => {
        const YB = OB > 0 ? `fragmentInputs.texAtlasIndex - ${BB.atlasLayers.toFixed(1)} * ${OB.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${GB?"textureSampleLevel":"textureSample"}(textureAtlas${OB}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${YB}))${GB?", atlasLod":""})`
      };
      if (1 === BB.atlasCount) return `baseColor = ${OB(0,!1)};`;
      let GB = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,bO.pb)(BB.v_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let YB = 0; YB < BB.atlasCount; YB++) {
        const DB = BB.atlasLayers * (YB + 1) - .5;
        GB += `${YB>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,bO.pb)(DB)}) {\n\t\tbaseColor = ${OB(YB,!0)};\n\t}`
      }
      return GB
    }

    function xY(BB) {
      return `terrain-${BB.texture}${"atlas"===BB.texture?BB.atlasCount:""}${BB.animated?"-anim":""}${BB.alphaTest?"-test":""}${BB.lighting?"-lit":""}-dir${BB.dirLightCount}${BB.packed?"-packed":""}${IY(BB)?`-sp${BB.packVariant}`:""}${BB.liquid?"-liquid":""}${BB.resting?"-rest":""}`
    }

    function tY(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const YB = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const GB = "none" !== BB.texture,
          YB = "atlas" === BB.texture,
          DB = BB.dirLightCount > 0,
          QB = IY(BB);
        if (BB.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${BB.dirLightCount}`);
        let oB = 1,
          jB = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (YB) {
          BB.animated && (jB += `@group(2) @binding(${oB++}) var<storage, read> animDataPerTex: array<f32>;\n`), jB += `@group(2) @binding(${oB++}) var atlasSampler: sampler;\n`;
          for (let OB = 0; OB < BB.atlasCount; OB++) jB += `@group(2) @binding(${oB++}) var textureAtlas${OB}: texture_2d_array<f32>;\n`
        } else "single" === BB.texture && (jB += `@group(2) @binding(${oB++}) var diffuseSamplerSampler: sampler;\n`, jB += `@group(2) @binding(${oB++}) var diffuseSampler: texture_2d<f32>;\n`);
        const yB = function(BB) {
            const OB = cY,
              GB = "none" !== BB.texture,
              YB = "atlas" === BB.texture,
              DB = IY(BB);
            return BB.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${GB?"uv: vec2f,":""}\n\t${YB?"texAtlasIndices: f32,":""}\n\t${BB.lighting?"aPackedLightLevels: f32,":""}\n\t${DB?"blockFlagWords: vec2u,":""}\n}\n${bY}\n${CY}\n${"single"===BB.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${GB?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===BB.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${YB?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${BB.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${DB?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${OB.position}) position: vec3f,\n\t@location(${OB.normal}) normal: vec4f,\n\t@location(${OB.color}) color: vec4f,\n\t${GB?`@location(${OB.uv}) uv: vec2f,`:""}\n\t${BB.lighting?`@location(${OB.packedLight}) aPackedLightLevels: f32,`:""}\n\t${DB?`@location(${OB.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(BB),
          JB = `\n${XY}\n${gY}\n${rY}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${jB}\n${ZO}\n${yB.declarations}\nstruct Varyings {\n\t${"none"===OB?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${BB.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${DB?"@location(5) vTerrainLambert: f32,":""}\n\t${GB?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${YB?"@location(7) texAtlasIndex: f32,":""}\n\t${BB.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${QB?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${QB&&YB?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${BB.resting?"":(0,bO.t)(mY)}\n${EY}\n\n@vertex\nfn mainVertex(${yB.parameter}) -> Varyings {\n\t${yB.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${QB?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${mO.b.placed}u;`:""}\n\t${QB&&YB?zY("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${BB.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${GB?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${YB?function(BB){return BB?vY("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(BB.animated):""}\n\t${"single"===BB.texture&&BB.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,bO.db)(mY)}\n\t${(0,bO.J)(mY,BB.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":wY}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${YB?sY(BB):""}\n\t${"single"===BB.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${GB?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${BB.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${DB?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${qO}));\n\t${IY(BB)?(0,bO.lb)(SB.c.WGSL):(0,bO.T)(mY)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          MB = new Set;
        BB.lighting && MB.add("BLOXD_LIGHTING");
        DB && MB.add("BLOXD_TERRAIN_DIRECTIONAL");
        return aO(JB, new Map([...MB].map((BB => [BB, !0]))))
      }(BB, GB);
      if (!IY(BB)) return YB;
      const DB = uY(BB, YB, vY, OB, GB);
      return "none" === GB ? DB : `${DB}${function(BB){const OB="none"!==BB.texture&&BB.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":wY}\n\t${BB.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${OB&&"atlas"===BB.texture?sY(BB):""}\n\t${OB&&"single"===BB.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${OB?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${mO.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(BB)}`
    }
    const BD = new Map([
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

    function OD(BB, OB) {
      const GB = new Map;
      let YB = 0;
      const DB = [],
        QB = [],
        oB = [];
      for (const JB of OB) {
        var jB, yB;
        const OB = null !== (jB = JB.type.trim().split(/\s+/).pop()) && void 0 !== jB ? jB : JB.type,
          MB = BD.get(OB);
        if (!MB) throw new Error(`Lite: no uniform layout for ${JB.name}: ${JB.type}`);
        const PB = null !== (yB = JB.arraySize) && void 0 !== yB ? yB : 0,
          zB = PB ? 4 : MB.align;
        YB = Math.ceil(YB / zB) * zB;
        const lB = PB ? 4 * Math.ceil(MB.floats / 4) : MB.floats;
        if (GB.set(JB.name, {
            offset: YB,
            floats: MB.floats,
            arraySize: PB,
            stride: lB
          }), PB && MB.floats <= 2) {
          const OB = `${BB}_${oB.length}_strided`;
          QB.push(`struct ${OB} {\n\t@size(16) el: ${MB.wgsl},\n}`), oB.push(JB.name), DB.push(`\t@align(16) ${JB.name}: array<${OB}, ${PB}>,`)
        } else PB ? DB.push(`\t@align(16) ${JB.name}: array<${MB.wgsl}, ${PB}>,`) : DB.push(`\t${JB.name}: ${MB.wgsl},`);
        YB += PB ? lB * PB : MB.floats
      }
      return {
        slots: GB,
        floats: Math.max(4, 4 * Math.ceil(YB / 4)),
        wgsl: `${QB.join("\n")}\nstruct ${BB} {\n${DB.join("\n")}\n}\n`,
        stridedArrays: oB
      }
    }
    const GD = [{
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
      YD = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      DD = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function QD(BB, OB) {
      return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nvarying v${OB}UV: vec2f;\n#endif`
    }

    function oD(BB, OB, GB) {
      return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nif (uniforms.v${OB}Infos.x==0.)\n{vertexOutputs.v${OB}UV= (uniforms.${GB}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${OB}UV= (uniforms.${GB}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function jD(BB, OB, GB) {
      return `#ifdef ${BB}\n#if ${BB}DIRECTUV == 1\n#define v${OB}UV vMainUV1\n#elif ${BB}DIRECTUV == 2\n#define v${OB}UV vMainUV2\n#else\nvarying v${OB}UV: vec2f;\n#endif\nvar ${GB}SamplerSampler: sampler;\nvar ${GB}Sampler: texture_2d<f32>;\n#endif`
    }
    const yD = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      JD = 256,
      MD = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      PD = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      zD = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      lD = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      pD = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      qD = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      ZD = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      ND = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${PD}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${QD("OPACITY","Opacity")}\n${QD("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${ZD}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${zD}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${oD("OPACITY","Opacity","opacity")}\n${oD("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${lD}\n#define CUSTOM_VERTEX_MAIN_END\n${pD}\n}\n`;
    const RD = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${jD("OPACITY","Opacity","opacity")}\n${jD("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${ZD}\n${qD}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((BB,OB)=>function(BB){const OB=`
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
      OB
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      BB
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      OB
    }.vLightData, diffuse$ {
      BB
    }.rgb, $ {
      OB
    }.vLightSpecular.rgb, diffuse$ {
      BB
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(OB))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, WD = /^([gimus]+)!/, AD = new Set;

    function VD(BB) {
      AD.has(BB) || (AD.add(BB), console.warn(`Lite: no place for plugin code at ${BB} in the standard shader: it is left out`))
    }

    function SD(BB, OB) {
      let GB = BB;
      const YB = new Map;
      for (const [QB, oB] of OB) {
        var DB;
        YB.set(QB, `${null!==(DB=YB.get(QB))&&void 0!==DB?DB:""}${oB}\n`)
      }
      for (const [QB, oB] of YB) {
        if (!QB.startsWith("!")) {
          const BB = `#define ${QB}`;
          if (!GB.includes(BB)) {
            VD(QB);
            continue
          }
          GB = GB.replace(BB, (() => `\n${oB}\n${BB}`));
          continue
        }
        let BB = QB.substring(1),
          OB = "g";
        if (BB.startsWith("!")) OB = "", BB = BB.substring(1);
        else {
          const GB = WD.exec(BB);
          GB && (OB = GB[1], BB = BB.substring(OB.length + 1))
        }
        const YB = new RegExp(BB, OB.includes("g") ? OB : `${OB}g`);
        let DB = YB.exec(GB);
        for (DB || VD(QB); DB;) {
          const BB = DB,
            OB = oB.replace(/\$(\d+)/g, ((OB, GB) => Number(GB) < BB.length ? BB[Number(GB)] : ""));
          GB = GB.substring(0, BB.index) + OB + GB.substring(BB.index + BB[0].length), YB.lastIndex = BB.index + OB.length, DB = YB.exec(GB)
        }
      }
      return GB
    }
    const nD = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      UD = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      fD = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function kD(BB) {
      const OB = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let GB = BB.replace(nD, ((BB, GB, YB, DB, QB, oB) => ("attribute" === GB ? OB.attributes.push({
        name: QB,
        type: oB
      }) : void 0 === GB ? OB.varyings.push({
        name: QB,
        type: oB,
        interpolation: KD(oB, YB, DB)
      }) : OB.uniforms.push({
        name: QB,
        type: dD(oB)
      }), "")));
      return GB = GB.replace(UD, ((BB, GB) => (OB.samplers.add(GB), ""))), GB = GB.replace(fD, ((BB, GB, YB) => (OB.textures.push({
        name: GB,
        type: YB
      }), ""))), OB.body = GB, OB
    }

    function dD(BB) {
      const OB = BB.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        GB = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(OB);
      if (!GB) throw new Error(`Lite: unsupported uniform type ${BB}`);
      return GB
    }

    function KD(BB, OB, GB) {
      return void 0 === OB && void 0 === GB ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(BB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === OB ? "@interpolate(flat) " : `@interpolate(${null!==OB&&void 0!==OB?OB:"perspective"}, ${null!==GB&&void 0!==GB?GB:"center"}) `
    }

    function uD(BB) {
      return iD({
        defines: BB.defines,
        vertex: SD(ND, BB.vertexCode),
        fragment: SD(RD, BB.fragmentCode),
        members: [...GD, ...BB.defines.has("OPACITY") ? YD : [], ...BB.defines.has("EMISSIVE") ? DD : [], ...BB.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function mD(BB) {
      const OB = BB.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (OB === BB) throw new Error("Lite: fragment main has no return");
      return OB
    }
    const ID = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${PD}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${zD}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${lD}\n${pD}\n}\n`,
      FD = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${qD}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function iD(BB) {
      const OB = BB.defines,
        GB = kD(aO(BB.vertex, OB)),
        YB = kD(aO(BB.fragment, OB)),
        DB = new Map;
      for (const WB of [...GB.varyings, ...YB.varyings]) DB.has(WB.name) || DB.set(WB.name, WB);
      const QB = [...DB.values()].map(((BB, OB) => `\t@location(${OB}) ${BB.interpolation}${BB.name}: ${BB.type},`)),
        oB = [...BB.members];
      for (const WB of [...GB.uniforms, ...YB.uniforms]) oB.some((BB => BB.name === WB.name)) || oB.push(WB);
      const jB = OD(BB.structName, oB),
        yB = [],
        JB = [];
      let MB = 1;
      const PB = new Set;
      for (const WB of [...GB.textures, ...YB.textures]) {
        if (PB.has(WB.name)) continue;
        PB.add(WB.name);
        const BB = `${WB.name}Sampler`,
          OB = MB++,
          GB = MB++,
          YB = WB.type.startsWith("texture_2d_array") ? "2d-array" : WB.type.startsWith("texture_cube") ? "cube" : "2d";
        yB.push({
          name: WB.name,
          binding: OB,
          samplerBinding: GB,
          dimension: YB
        }), JB.push(`@group(2) @binding(${OB}) var ${WB.name}: ${WB.type};`), JB.push(`@group(2) @binding(${GB}) var ${BB}: sampler;`)
      }
      for (const WB of [...GB.samplers, ...YB.samplers])
        if (!PB.has(WB.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${WB} has no texture`);
      const zB = [XY, MD, jB.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${BB.structName};`, ...JB].join("\n"),
        lB = GB.attributes,
        pB = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...GB.attributes.map(((BB, OB) => `\t@location(${OB}) ${BB.name}: ${BB.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        qB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...QB, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        ZB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...YB.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...QB, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", ZO, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${qO}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        NB = BB => {
          for (const OB of jB.stridedArrays) BB = BB.replace(new RegExp(`\\b${OB}\\s*\\[(.*?)\\]`, "g"), `${OB}[$1].el`);
          return BB
        };
      return {
        vertex: `${zB}\n${pB}\n${qB}\n${NB(GB.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${zB}\n${ZB}\n${mD((RB=NB(YB.body),RB.includes("fragmentInputs.position")?RB.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):RB))}`,
        attributes: lB,
        material: jB,
        textures: yB
      };
      var RB
    }
    const LD = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      gD = BB => ({
        name: BB,
        type: "vec3"
      }),
      rD = BB => ({
        name: BB,
        type: "float"
      }),
      XD = OD("EarthSkyUniforms", [gD("viewFrom"), rD("exposureScale"), gD("zenithOffset"), rD("fogOn"), gD("up"), rD("ditherOn"), gD("sun"), rD("turbidity"), gD("tint"), rD("rayleigh"), gD("sunDir"), rD("mieStrength"), gD("inScatterR"), rD("mieFocus"), gD("inScatterM"), rD("sunE"), gD("extinctionBeta"), rD("sunsetMix"), rD("mieScale"), rD("mieBase"), rD("mieSlope"), rD("sunDiscE"), rD("exposure")]),
      wD = `${XY}\n${MD}\n${XD.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      ED = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${LD.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      cD = `\n${ZO}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(wO).map((BB=>{let[OB,GB]=BB;return`const TONE_${OB}: f32 = ${GB};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${EO};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${qO}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var hD = GB(37771);
    const aD = new hD.Xp,
      eD = new hD.Xp,
      TD = new hD.Quaternion,
      bD = new Float64Array(3),
      CD = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      HD = new Float64Array(16);

    function vD(BB, OB, GB) {
      const YB = GB.worldMatrix;
      var DB;
      BB.updateFloat3("viewFrom", YB[12], YB[13], YB[14]), BB.updateFloatsFrom("zenithOffset", OB.cameraOffset, 0, 3), BB.updateFloatsFrom("up", OB.up, 0, 3), OB.luminance > 0 && (BB.updateFloat("exposure", OB.luminance), BB.updateFloat("exposureScale", (DB = OB.luminance, Math.log2(2 / Math.pow(DB, 4))))), BB.updateFloat("turbidity", OB.turbidity), BB.updateFloat("rayleigh", OB.rayleigh), BB.updateFloat("mieStrength", OB.mieCoefficient), BB.updateFloat("mieFocus", OB.mieDirectionalG), BB.updateFloatsFrom("tint", OB.tint, 0, 3), BB.updateFloat("fogOn", OB.fog && GB.fogEnabled && 0 !== GB.fogMode ? 1 : 0), BB.updateFloat("ditherOn", OB.dithering ? 1 : 0);
      const QB = OB.sunPosition;
      if (aD.set(QB[0], QB[1], QB[2]), !OB.useSunPosition) {
        const BB = Math.PI * (OB.inclination - .5),
          GB = 2 * Math.PI * (OB.azimuth - .5);
        aD.set(OB.distance * Math.cos(GB) * Math.cos(BB), OB.distance * Math.sin(-BB), OB.distance * Math.sin(GB) * Math.cos(BB)), hD.Quaternion.FromUnitVectorsToRef(hD.Xp.UpReadOnly, eD.set(OB.up[0], OB.up[1], OB.up[2]), TD), aD.rotateByQuaternionToRef(TD, aD)
      }
      BB.updateVector3("sun", aD), bD[0] = aD.x, bD[1] = aD.y, bD[2] = aD.z;
      const oB = XO(OB, bD, CD);
      BB.updateFloatsFrom("sunDir", oB.sunDir, 0, 3), BB.updateFloat("sunE", oB.sunE), BB.updateFloatsFrom("inScatterR", oB.inScatterR, 0, 3), BB.updateFloatsFrom("inScatterM", oB.inScatterM, 0, 3), BB.updateFloatsFrom("extinctionBeta", oB.extinctionBeta, 0, 3), BB.updateFloat("sunsetMix", oB.sunsetMix), BB.updateFloat("sunDiscE", oB.sunDiscE), BB.updateFloat("mieScale", oB.mieScale), BB.updateFloat("mieBase", oB.mieBase), BB.updateFloat("mieSlope", oB.mieSlope)
    }

    function sD(BB, OB) {
      const GB = HD;
      GB[0] = OB.far, GB[5] = OB.far, GB[10] = OB.far, GB[15] = 1;
      const YB = BB.infiniteDistance;
      for (let DB = 0; DB < 3; DB++) GB[12 + DB] = BB.position[DB] + (YB ? OB.worldMatrix[12 + DB] : 0);
      return HD
    }
    class xD {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(BB, OB, GB, YB, DB) {
        GB !== this.pipeline && (BB.setPipeline(GB), this.pipeline = GB), BB.setBindGroup(1, YB, [DB]);
        const QB = OB.material.bindGroup;
        QB !== this.materialGroup && (BB.setBindGroup(2, QB), this.materialGroup = QB);
        const oB = OB.program.packGroup;
        oB && oB !== this.packGroup && (BB.setBindGroup(vO.e, oB), this.packGroup = oB);
        const {
          vertexBuffers: jB,
          vertexOffsets: yB
        } = this;
        for (let JB = 0; JB < OB.vertexBuffers.length; JB++) jB[JB] === OB.vertexBuffers[JB] && yB[JB] === OB.vertexOffsets[JB] || (BB.setVertexBuffer(JB, OB.vertexBuffers[JB], OB.vertexOffsets[JB]), jB[JB] = OB.vertexBuffers[JB], yB[JB] = OB.vertexOffsets[JB]);
        OB.indexBuffer && OB.indexBuffer !== this.indexBuffer && (BB.setIndexBuffer(OB.indexBuffer, OB.indexFormat), this.indexBuffer = OB.indexBuffer)
      }
    }
    class tD {
      constructor(BB, OB, GB, YB) {
        this.modelMeshes = BB, this.mBB = OB, this.maker = GB, this.warnOnce = YB, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (BB, OB) => {
          (OB < -1 || OB > 1) && this.warnOnce(`group:${OB}`, `rendering group ${OB} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(BB) {
        this.collectGroup(BB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(BB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(BB, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.mBB.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(BQ), this.transparentDraws.sort(OQ)
      }
      collectGroup(BB, OB, GB, YB, DB) {
        const QB = this.modelMeshes.group(OB),
          oB = this.mBB.group(OB),
          jB = 0 === OB ? null === oB || void 0 === oB ? void 0 : oB.opaque : void 0;
        this.collectList(BB, null === QB || void 0 === QB ? void 0 : QB.opaque, jB || null === oB || void 0 === oB ? void 0 : oB.opaque, OB, !1, GB, DB), jB && (this.mBB.drawn += this.maker.bundleDraws(BB, jB, OB)), this.collectList(BB, null === QB || void 0 === QB ? void 0 : QB.alphaTest, void 0, OB, !1, GB, DB), this.collectList(BB, null === QB || void 0 === QB ? void 0 : QB.transparent, null === oB || void 0 === oB ? void 0 : oB.transparent, OB, !0, YB, DB)
      }
      collectList(BB, OB, GB, YB, DB, QB, oB) {
        var jB;
        const yB = QB.length;
        OB && this.maker.pushDraws(BB, OB.units, OB.units.length, YB, DB, QB, OB.rows), GB && (this.mBB.drawn += this.maker.pushDraws(BB, GB, GB.length, YB, DB, QB));
        const JB = DB ? null === (jB = this.modelMeshes.group(YB)) || void 0 === jB ? void 0 : jB.text : void 0;
        JB && this.maker.pushDraws(BB, JB.units, JB.units.length, YB, !0, QB, JB.rows), oB && GQ(QB, yB)
      }
    }

    function BQ(BB, OB) {
      return BB.program.id - OB.program.id || BB.material.owner.uniqueId - OB.material.owner.uniqueId
    }

    function OQ(BB, OB) {
      return BB.material.owner.uniqueId - OB.material.owner.uniqueId
    }

    function GQ(BB, OB) {
      for (let GB = OB + 1; GB < BB.length; GB++) {
        const YB = BB[GB];
        let DB = GB - 1;
        for (; DB >= OB && OQ(BB[DB], YB) > 0; DB--) BB[DB + 1] = BB[DB];
        BB[DB + 1] = YB
      }
    }
    const YQ = {};

    function DQ(BB) {
      return BB.hasThinInstances ? "thin" : BB.WQB || BB._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function QQ(BB, OB, GB) {
      return BB ? (GB._needUVs = !0, BB.optimizeUVAllocation && (0, dB.B)(BB.matrix) ? (GB[`${OB}DIRECTUV`] = BB.uvSet + 1, GB[`MAINUV${BB.uvSet+1}`] = !0) : GB[`${OB}DIRECTUV`] = 0, !0) : (GB[`${OB}DIRECTUV`] = 0, !1)
    }

    function oQ(BB) {
      const OB = new Map;
      for (const GB in BB) {
        if (95 === GB.charCodeAt(0)) continue;
        const YB = BB[GB],
          DB = typeof YB;
        "number" === DB || "string" === DB ? OB.set(GB, String(YB)) : YB && "function" !== DB && OB.set(GB, !0)
      }
      return OB
    }

    function jQ(BB) {
      const OB = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: GB
        }
        of BB.features)
        for (const BB in GB) OB[BB] = GB[BB];
      return OB
    }

    function yQ(BB) {
      const OB = BB.parts.geometry;
      return null !== OB && void 0 !== OB && OB.live ? OB : null
    }

    function JQ(BB) {
      var OB;
      return null !== (OB = yQ(BB)) && void 0 !== OB ? OB : YQ
    }
    class MQ {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = BB, this.warnOnce = OB, this.programWithModel = GB, this.packFailed = YB, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(BB, OB, GB, YB, DB) {
        const QB = OB.owner;
        let oB = this.drawStates.get(OB);
        if (!oB) {
          const BB = OB.parts.materials[OB.range];
          if (!BB) return this.warnOnce("model", `${GB.name} on ${QB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          oB = {
            defines: jQ(BB),
            model: BB,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: DB,
            groupId: YB,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(OB, oB)
        }
        if (this.programCurrent(oB, OB, DB, YB)) return oB.program;
        const {
          model: jB
        } = oB, yB = JQ(OB), JB = this.instanceLayout(QB, DB), MB = this.definesBits(QB);
        if (!this.prepareModelDefines(BB, QB, jB, oB.defines, YB, DB)) return null;
        oB.instancing = DB, oB.groupId = YB, oB.modelVersion = jB.version, oB.geometry = yB, oB.instanceLayout = JB, oB.definesBits = MB;
        const PB = function(BB) {
          let OB = "";
          for (const [GB, YB] of BB) OB += !0 === YB ? `${GB};` : `${GB}=${YB};`;
          return OB
        }(oQ(oB.defines));
        return PB === oB.definesKey && oB.packVariant === this.modelPackVariant && oB.program && !this.packFailed(oB.program) || (oB.definesKey = PB, oB.packVariant = this.modelPackVariant, oB.program = this.programWithModel(jB, oB.defines, PB)), oB.program
      }
      programCurrent(BB, OB, GB, YB) {
        return null !== BB.program && !this.packFailed(BB.program) && BB.instancing === GB && BB.groupId === YB && this.definesHold(BB, OB, GB)
      }
      definesHold(BB, OB, GB) {
        return BB.modelVersion === BB.model.version && BB.geometry === JQ(OB) && BB.instanceLayout === this.instanceLayout(OB.owner, GB) && BB.definesBits === this.definesBits(OB.owner) && BB.packVariant === this.modelPackVariant
      }
      modelPackKind(BB) {
        var OB;
        return 0 === this.modelPackVariant ? null : null !== (OB = (0, fB.A)(BB, UB.f.name)) && void 0 !== OB && OB.active ? "placed" : BB.item ? "item" : BB.lifeform ? "lifeform" : BB.box ? "box" : null
      }
      instanceLayout(BB, OB) {
        var GB, YB, DB;
        return "thin" === OB ? null !== (DB = this.resources.lBB.get(BB)) && void 0 !== DB ? DB : null : "instanced" === OB && null !== (GB = null === (YB = BB._userInstancedBuffersStorage) || void 0 === YB ? void 0 : YB.interleavedKinds) && void 0 !== GB ? GB : null
      }
      definesBits(BB) {
        const OB = this.view;
        return (BB.visibility < 1 ? 1 : 0) | (BB.hasVertexAlpha ? 2 : 0) | (BB.applyFog ? 4 : 0) | (BB.useVertexColors ? 8 : 0) | (BB.nonUniformScaling ? 16 : 0) | (OB.fogEnabled && 0 !== OB.fogMode ? 32 : 0) | (OB.lightsEnabled ? 64 : 0) | OB.lightCount << 7
      }
      prepareLightDefines(BB, OB, GB) {
        let YB = 0;
        if (this.view.lightsEnabled && !OB) {
          const OB = Math.min(GB, 4);
          for (; YB < this.view.lightCount && (BB[`LIGHT${YB}`] = !0, BB[`LITE_LIGHT${YB}_SLOT`] = YB, YB++, BB._needNormals = !0, YB !== OB););
        }
        for (let DB = YB; DB < 4; DB++) BB[`LIGHT${DB}`] = !1, BB[`LITE_LIGHT${DB}_SLOT`] = void 0
      }
      prepareModelDefines(BB, OB, GB, YB, DB, QB) {
        const {
          features: oB
        } = GB;
        YB._needNormals = !1, YB._needUVs = !1;
        const jB = this.view;
        this.prepareLightDefines(YB, GB.disableLighting, GB.maxSimultaneousLights), YB.MAINUV1 = !1, YB.MAINUV2 = !1;
        const yB = GB.diffuseTexture;
        yB ? (YB._needUVs = !0, YB.DIFFUSE = !0, yB.optimizeUVAllocation && (0, dB.B)(yB.matrix) ? (YB.DIFFUSEDIRECTUV = yB.uvSet + 1, YB[`MAINUV${yB.uvSet+1}`] = !0) : YB.DIFFUSEDIRECTUV = 0, yB.uvSet > 1 && this.warnOnce(`uvset:${GB.name}`, `${GB.name} samples UV set ${yB.uvSet+1}, which is not supported`)) : (YB.DIFFUSE = !1, YB.DIFFUSEDIRECTUV = 0);
        const JB = GB.opacityTexture,
          MB = GB.emissiveTexture;
        YB.OPACITY = QQ(JB, "OPACITY", YB), YB.OPACITYRGB = null !== JB && JB.getAlphaFromRGB, YB.EMISSIVE = QQ(MB, "EMISSIVE", YB), (JB && JB.uvSet > 1 || MB && MB.uvSet > 1) && this.warnOnce(`uvset:${GB.name}`, `${GB.name} samples a UV set past 2, which is not supported`);
        const PB = GB.reflectionTexture,
          zB = null !== PB;
        if (zB) {
          if (!this.resources.boundTexture(PB)) return !1;
          YB._needNormals = !0
        }
        YB.REFLECTION = zB, YB.REFLECTIONMAP_3D = zB, YB.REFLECTIONMAP_SKYBOX = zB, YB.REFLECTIONMAP_OPPOSITEZ = zB && (BB.useRightHandedSystem ? !PB.invertZ : PB.invertZ), YB.ROUGHNESS = zB && GB.roughness > 0, YB.REFLECTIONOVERALPHA = zB && GB.useReflectionOverAlpha, YB.LITE_REFLECTION_LUMINANCE = zB && "cube" === PB.source.kind && PB.source.luminance, (OB.skeleton || OB.morphTargetManager) && this.warnOnce(`skin:${OB.name}`, `${OB.name} has bones or morph targets, which are not supported`), YB.FOG = GB.fogEnabled && OB.applyFog && jB.fogEnabled && 0 !== jB.fogMode, YB.NONUNIFORMSCALING = OB.nonUniformScaling;
        const {
          visibility: lB,
          hasVertexAlpha: pB
        } = OB;
        YB.ALPHATEST = (0, fB.Q)(GB, lB, pB), YB.ALPHAFROMDIFFUSE = (0, fB.cb)(GB), YB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== GB.transparencyMode, YB.ALPHABLEND = null === GB.transparencyMode || (0, fB.P)(GB, lB, pB), YB.PREMULTIPLYALPHA = 7 === GB.alphaMode || 8 === GB.alphaMode, YB.EMISSIVEASILLUMINATION = GB.useEmissiveAsIllumination, YB.LINKEMISSIVEWITHDIFFUSE = GB.linkEmissiveWithDiffuse, YB.TWOSIDEDLIGHTING = !GB.backFaceCulling && GB.twoSidedLighting, YB.INSTANCES = "none" !== QB, YB.THIN_INSTANCES = "thin" === QB, YB.LITE_FRONT_LAYER = DB >= 1;
        for (const {
            feature: nB,
            state: UB,
            active: fB
          }
          of oB) {
          var qB, ZB;
          if (fB) null === (qB = (ZB = (0, FO.i)(nB)).prepareDefinesBeforeAttributes) || void 0 === qB || qB.call(ZB, UB, YB, BB, OB)
        }
        this.modelPackKind(GB) && (YB._needNormals = !0), YB.NORMAL = YB._needNormals && OB.isVerticesDataPresent("normal"), YB.UV1 = YB._needUVs && OB.isVerticesDataPresent("uv"), YB.UV2 = YB._needUVs && OB.isVerticesDataPresent("uv2");
        const NB = OB.useVertexColors && OB.isVerticesDataPresent("color");
        YB.VERTEXCOLOR = NB, YB.VERTEXALPHA = OB.hasVertexAlpha && NB, YB.INSTANCESCOLOR = "none" !== QB && OB.isVerticesDataPresent("instanceColor");
        for (const {
            feature: nB,
            state: UB,
            active: fB
          }
          of oB) {
          var RB, WB;
          if (fB) null === (RB = (WB = (0, FO.i)(nB)).prepareDefines) || void 0 === RB || RB.call(WB, UB, YB, BB, OB, GB)
        }
        const AB = BB.Lp();
        for (const {
            feature: nB,
            state: UB,
            active: fB
          }
          of oB) {
          var VB, SB;
          if (fB && !1 === (null === (VB = (SB = (0, FO.i)(nB)).isReadyForSubMesh) || void 0 === VB ? void 0 : VB.call(SB, UB, YB, BB, AB))) return !1
        }
        return !0
      }
    }

    function PQ(BB, OB, GB) {
      return BB.codeVersion !== OB.version && function(BB, OB) {
        const GB = [],
          YB = [];
        for (const {
            feature: zB,
            state: lB,
            active: pB
          }
          of OB.features) {
          var DB, QB, oB, jB;
          if (pB) zQ(null === (DB = (QB = (0, FO.i)(zB)).getCustomCode) || void 0 === DB ? void 0 : DB.call(QB, lB, "vertex", SB.c.WGSL), GB), zQ(null === (oB = (jB = (0, FO.i)(zB)).getCustomCode) || void 0 === oB ? void 0 : oB.call(jB, lB, "fragment", SB.c.WGSL), YB)
        }
        const yB = [];
        for (const {
            feature: zB,
            state: lB
          }
          of OB.features) {
          var JB, MB;
          const BB = null === (JB = (MB = (0, FO.i)(zB)).getUniforms) || void 0 === JB ? void 0 : JB.call(MB, lB, SB.c.WGSL);
          for (const OB of null !== (PB = null === BB || void 0 === BB ? void 0 : BB.ubo) && void 0 !== PB ? PB : []) {
            var PB;
            OB.size && OB.type && yB.push({
              name: OB.name,
              type: OB.type,
              arraySize: OB.arraySize
            })
          }
        }
        BB.vertexCode = GB, BB.fragmentCode = YB, BB.pluginUniforms = yB, BB.codeKey = JSON.stringify([GB, YB, yB]), BB.codeVersion = OB.version
      }(BB, OB), `${GB}#${BB.codeKey}`
    }

    function zQ(BB, OB) {
      if (BB)
        for (const GB in BB) BB[GB] && OB.push([GB, BB[GB]])
    }
    const lQ = new Map([
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
      constructor(BB) {
        this.warnOnce = BB, this.states = new Map
      }
      renderState(BB, OB, GB, YB) {
        var DB;
        let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          oB = null !== (DB = BB.sideOrientation) && void 0 !== DB ? DB : OB.sideOrientation;
        OB._getWorldMatrixDeterminant() < 0 && (oB = 0 === oB ? 1 : 0);
        const jB = "triangle-list" === QB,
          yB = GB ? BB.alphaMode : 0,
          JB = (!GB || (0 === yB || BB.forceDepthWrite)) && !BB.disableDepthWrite,
          MB = jB && BB.backFaceCulling ? BB.cullBackFaces ? "back" : "front" : "none",
          PB = jB && 0 !== oB ? "ccw" : "cw",
          zB = BB.depthFunction,
          lB = jB ? BB.zOffset : 0,
          pB = jB ? BB.zOffsetUnits : 0,
          qB = !BB.disableColorWrite;
        return YB && YB.alphaMode === yB && YB.depthWrite === JB && YB.depthFunction === zB && YB.cullMode === MB && YB.frontFace === PB && YB.zOffset === lB && YB.zOffsetUnits === pB && YB.colourWrite === qB && YB.topology === QB ? YB : this.stateFor(yB, JB, zB, MB, PB, lB, pB, qB, QB)
      }
      stateFor(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = `${BB}|${OB}|${GB}|${YB}|${DB}|${QB}|${oB}|${jB}|${yB}`;
        let MB = this.states.get(JB);
        if (!MB) {
          var PB;
          const zB = BB ? QO(BB) : null;
          BB && !zB && this.warnOnce(`alpha:${BB}`, `alpha mode ${BB} is not supported`), MB = {
            key: JB,
            alphaMode: BB,
            depthFunction: GB,
            zOffset: QB,
            zOffsetUnits: oB,
            topology: yB,
            blend: zB,
            depthWrite: OB,
            depthCompare: GB && null !== (PB = lQ.get(GB)) && void 0 !== PB ? PB : null,
            cullMode: YB,
            frontFace: DB,
            depthBias: -oB,
            depthBiasSlopeScale: -QB,
            colourWrite: jB
          }, this.states.set(JB, MB)
        }
        return MB
      }
    }
    var qQ = GB(38035);

    function ZQ(BB) {
      if (!BB.frozen) return -1;
      let OB = BB.version;
      for (const {
          feature: GB,
          state: YB,
          active: DB
        }
        of BB.features) {
        if (!DB || !GB.bind) continue;
        const BB = (0, FO.i)(GB).uniformsVersion;
        if (!BB) return -1;
        OB += BB(YB)
      }
      return OB
    }
    class NQ {
      constructor(BB, OB, GB) {
        this.slots = BB, this.data = OB, this.textures = GB, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(BB, OB) {
        this.write4(BB, OB, 0, 0, 0, 1)
      }
      updateFloat2(BB, OB, GB) {
        this.write4(BB, OB, GB, 0, 0, 2)
      }
      updateFloat3(BB, OB, GB, YB) {
        this.write4(BB, OB, GB, YB, 0, 3)
      }
      updateFloat4(BB, OB, GB, YB, DB) {
        this.write4(BB, OB, GB, YB, DB, 4)
      }
      updateVector3(BB, OB) {
        this.write4(BB, OB.x, OB.y, OB.z, 0, 3)
      }
      updateVector4(BB, OB) {
        this.write4(BB, OB.x, OB.y, OB.z, OB.w, 4)
      }
      updateColor3(BB, OB) {
        this.write4(BB, OB.r, OB.g, OB.b, 0, 3)
      }
      updateColor4(BB, OB, GB) {
        this.write4(BB, OB.r, OB.g, OB.b, GB, 4)
      }
      updateFloatsFrom(BB, OB, GB, YB) {
        const DB = this.slots.get(BB);
        if (!DB) return;
        const QB = this.data,
          oB = DB.offset;
        for (let jB = 0; jB < YB; jB++) QB[oB + jB] = OB[GB + jB]
      }
      updateFloat3TimesFloats(BB, OB, GB, YB) {
        const DB = this.slots.get(BB);
        if (!DB) return;
        const QB = this.data,
          oB = DB.offset;
        QB[oB] = OB[GB] * YB[0], QB[oB + 1] = OB[GB + 1] * YB[1], QB[oB + 2] = OB[GB + 2] * YB[2]
      }
      TBB(BB, OB) {
        const GB = this.slots.get(BB);
        GB && this.data.set(OB.m, GB.offset)
      }
      updateMatrixFloats(BB, OB) {
        const GB = this.slots.get(BB);
        GB && this.data.set(OB, GB.offset)
      }
      updateFloatArray(BB, OB) {
        const GB = this.slots.get(BB);
        if (!GB) return;
        if (!GB.arraySize || GB.stride === GB.floats) return void this.data.set(OB, GB.offset);
        const YB = Math.min(OB.length, GB.floats * GB.arraySize);
        for (let DB = 0; DB < YB; DB++) this.data[GB.offset + Math.floor(DB / GB.floats) * GB.stride + DB % GB.floats] = OB[DB]
      }
      updateArray(BB, OB) {
        this.updateFloatArray(BB, OB)
      }
      setTexture(BB, OB) {
        this.textures.set(BB, OB), this.expected.delete(BB)
      }
      expectTexture(BB) {
        this.textures.set(BB, null), this.expected.add(BB)
      }
      write4(BB, OB, GB, YB, DB, QB) {
        const oB = this.slots.get(BB);
        if (!oB) return;
        const jB = this.data,
          yB = oB.offset;
        jB[yB] = OB, QB > 1 && (jB[yB + 1] = GB), QB > 2 && (jB[yB + 2] = YB), QB > 3 && (jB[yB + 3] = DB)
      }
    }

    function RQ(BB, OB) {
      const GB = yD,
        YB = qQ.i,
        DB = BB.lights,
        QB = Math.min(BB.lightCount, 8);
      for (let oB = 0; oB < QB; oB++) {
        const BB = GB.lights + oB * GB.lightStride,
          QB = oB * qQ.c;
        OB[BB] = DB[QB + YB.vector], OB[BB + 1] = DB[QB + YB.vector + 1], OB[BB + 2] = DB[QB + YB.vector + 2], OB[BB + 3] = DB[QB + YB.kind] === qQ.g.directional ? 1 : 0, OB[BB + 4] = DB[QB + YB.diffuse], OB[BB + 5] = DB[QB + YB.diffuse + 1], OB[BB + 6] = DB[QB + YB.diffuse + 2], OB[BB + 7] = DB[QB + YB.range], OB[BB + 8] = DB[QB + YB.specular], OB[BB + 9] = DB[QB + YB.specular + 1], OB[BB + 10] = DB[QB + YB.specular + 2], OB[BB + 11] = DB[QB + YB.range]
      }
      OB[GB.fogInfos] = BB.fogMode, OB[GB.fogInfos + 1] = BB.fogStart, OB[GB.fogInfos + 2] = BB.fogEnd, OB[GB.fogInfos + 3] = BB.fogDensity, OB[GB.fogColour] = BB.fogColour[0], OB[GB.fogColour + 1] = BB.fogColour[1], OB[GB.fogColour + 2] = BB.fogColour[2], OB[GB.outputHeight] = BB.renderHeight, OB[GB.animTick] = BB.animTick, OB[GB.timeMs] = BB.timeMs
    }
    class WQ {
      constructor(BB) {
        this.instancesOf = BB
      }
      refreshModelUniforms(BB, OB, GB, YB) {
        const DB = ZQ(GB);
        if (DB >= 0 && DB === OB.heldVersion && OB.textures.get("diffuseSampler") === GB.diffuseTexture && OB.textures.get("reflectionCubeSampler") === GB.reflectionTexture && OB.textures.get("opacitySampler") === GB.opacityTexture && OB.textures.get("emissiveSampler") === GB.emissiveTexture) return !0;
        if (DB < 0)
          for (const QB of this.instancesOf(GB)) QB.heldVersion = -1;
        return this.writeModelUniforms(BB, OB, GB, YB), OB.heldVersion = DB, !1
      }
      writeModelUniforms(BB, OB, GB, YB) {
        const {
          ubo: DB
        } = OB, QB = GB.diffuseTexture, oB = GB.diffuseColor;
        DB.updateFloat4("vDiffuseColor", oB[0], oB[1], oB[2], GB.alpha), QB && (DB.updateFloat2("vDiffuseInfos", QB.uvSet, QB.level), DB.updateMatrixFloats("diffuseMatrix", QB.matrix)), DB.updateFloat("alphaCutOff", GB.alphaCutOff), DB.updateFloatsFrom("vEmissiveColor", GB.emissiveColor, 0, 3), DB.updateFloat3TimesFloats("vAmbientColor", YB.ambientColour, 0, GB.ambientColor);
        const jB = GB.specularColor;
        DB.updateFloat4("vSpecularColor", jB[0], jB[1], jB[2], GB.specularPower), DB.setTexture("diffuseSampler", QB);
        const yB = GB.opacityTexture;
        yB && (DB.updateFloat2("vOpacityInfos", yB.uvSet, yB.level), DB.updateMatrixFloats("opacityMatrix", yB.matrix)), DB.setTexture("opacitySampler", yB);
        const JB = GB.emissiveTexture;
        JB && (DB.updateFloat2("vEmissiveInfos", JB.uvSet, JB.level), DB.updateMatrixFloats("emissiveMatrix", JB.matrix)), DB.setTexture("emissiveSampler", JB);
        const MB = GB.reflectionTexture;
        MB && DB.updateMatrixFloats("reflectionMatrix", MB.matrix), DB.updateFloat2("vReflectionInfos", MB ? MB.level * BB.iblIntensity : 0, GB.roughness), DB.setTexture("reflectionCubeSampler", MB);
        const PB = BB.Lp();
        for (const {
            feature: pB,
            state: qB,
            active: ZB
          }
          of GB.features) {
          var zB, lB;
          if (ZB) null === (zB = (lB = (0, FO.i)(pB)).bind) || void 0 === zB || zB.call(lB, qB, DB, BB, PB)
        }
      }
    }

    function AQ(BB) {
      const OB = BB.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(OB) ? "u32" : /i32|^vec\di$/.test(OB) ? "i32" : "f32"
    }

    function VQ(BB, OB) {
      const GB = BB.getSize(),
        YB = AQ(OB),
        DB = BB => 4 === GB ? `${BB}x4` : 2 === GB ? `${BB}x2` : null;
      if ("f32" === YB) {
        if (5126 === BB.type) return 1 === GB ? "float32" : GB >= 2 && GB <= 4 ? `float32x${GB}` : null;
        if (!BB.normalized) return null;
        switch (BB.type) {
          case 5121:
            return DB("unorm8");
          case 5120:
            return DB("snorm8");
          case 5123:
            return DB("unorm16");
          case 5122:
            return DB("snorm16")
        }
        return null
      }
      const QB = "u32" === YB ? "uint" : "sint";
      switch (BB.type) {
        case 5125:
        case 5124:
          return 1 === GB ? `${QB}32` : GB <= 4 ? `${QB}32x${GB}` : null;
        case 5121:
        case 5120:
          return DB(`${QB}8`);
        case 5123:
        case 5122:
          return DB(`${QB}16`)
      }
      return null
    }

    function SQ(BB) {
      var OB;
      const GB = /(8|16|32)(?:x(\d))?$/.exec(BB);
      return GB ? Number(GB[1]) / 8 * Number(null !== (OB = GB[2]) && void 0 !== OB ? OB : 1) : 4
    }
    class nQ {
      constructor(BB, OB, GB) {
        this.resources = BB, this.limits = OB, this.warnOnce = GB, this.layouts = new Map
      }
      resolveInputs(BB, OB, GB, YB) {
        const DB = [],
          QB = GB.program.attributes,
          oB = [];
        for (let MB = 0; MB < QB.length; MB++) {
          const GB = QB[MB],
            jB = GB.optional ? null : this.resources.vertexInput(BB, GB.name, YB);
          if (!jB) {
            const BB = AQ(GB.type),
              OB = "u32" === BB ? "uint32x4" : "i32" === BB ? "sint32x4" : "float32x4";
            oB.push(null);
            const YB = DB.find((BB => null === BB.data));
            YB ? YB.attributes.push({
              shaderLocation: MB,
              offset: 0,
              format: OB
            }) : DB.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: MB,
                offset: 0,
                format: OB
              }]
            });
            continue
          }
          const yB = jB.getBuffer();
          oB.push(jB);
          const JB = VQ(jB, GB.type);
          if (!JB) return this.warnOnce(`format:${OB}:${GB.name}`, `${OB}'s ${GB.name} (type ${jB.type}, size ${jB.getSize()}) has no WebGPU vertex format`), null;
          const PB = jB.getIsInstanced() ? "instance" : "vertex",
            zB = jB.byteStride,
            lB = SQ(JB),
            pB = DB.find((BB => BB.data === yB && BB.stride === zB && BB.step === PB && jB.byteOffset >= BB.base && jB.byteOffset - BB.base + lB <= zB));
          pB ? pB.attributes.push({
            shaderLocation: MB,
            offset: jB.byteOffset - pB.base,
            format: JB
          }) : DB.push({
            data: yB,
            base: jB.byteOffset,
            stride: zB,
            step: PB,
            attributes: [{
              shaderLocation: MB,
              offset: 0,
              format: JB
            }]
          })
        }
        if (DB.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${OB}`, `${OB} needs ${DB.length} vertex buffers`), null;
        let jB = "";
        for (const MB of DB) {
          jB += `${MB.stride}${"instance"===MB.step?"i":"v"}`;
          for (const BB of MB.attributes) jB += `,${BB.shaderLocation}:${BB.offset}:${BB.format}`;
          jB += ";"
        }
        let yB = this.layouts.get(jB);
        yB || (yB = {
          key: jB,
          buffers: DB.map((BB => ({
            arrayStride: BB.stride,
            stepMode: BB.step,
            attributes: BB.attributes
          }))),
          instanceEnds: DB.map((BB => {
            let OB = -1;
            if ("instance" === BB.step)
              for (const GB of BB.attributes) OB = Math.max(OB, GB.offset + SQ(GB.format));
            return OB
          }))
        }, this.layouts.set(jB, yB));
        const JB = DB.map((BB => BB.base));
        return {
          program: GB,
          sources: oB,
          layout: yB,
          slotData: DB.map((BB => BB.data)),
          iBB: JB,
          buffers: [],
          offsets: JB,
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

    function UQ(BB, OB, GB, YB) {
      const DB = OB.program.program.attributes;
      for (let QB = 0; QB < DB.length; QB++) {
        if ((DB[QB].optional ? null : GB.vertexInput(BB, DB[QB].name, YB)) !== OB.sources[QB]) return !1
      }
      return !0
    }
    const fQ = 64;
    class kQ {
      constructor(BB, OB, GB, YB) {
        this.device = BB, this.layout = OB, this.frameBuffer = GB, this.label = YB, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(BB) {
        if (BB * fQ <= this.data.length) return !1;
        let OB = 2 * this.data.length;
        for (; BB * fQ > OB;) OB *= 2;
        const GB = new Float32Array(OB);
        return GB.set(this.data), this.data = GB, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const DB = this.data,
          QB = BB * fQ;
        let oB = DB[QB + 16] !== GB;
        for (let jB = 0; jB < 16 && !oB; jB++) oB = DB[QB + jB] !== OB[YB + jB];
        if (oB) {
          for (let BB = 0; BB < 16; BB++) DB[QB + BB] = OB[YB + BB];
          DB[QB + 16] = GB
        }
        return oB
      }
      upload(BB, OB) {
        this.device.queue.writeBuffer(this.buffer, BB * JD, this.data, BB * fQ, (OB - BB) * fQ)
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

    function dQ(BB) {
      return BB.gpu[dB.f.lite] ??= BB.materials.map(((OB, GB) => ({
        parts: BB,
        range: GB,
        owner: BB.owner
      })))
    }

    function KQ(BB) {
      var OB, GB, YB;
      return null !== (OB = null !== (GB = null === (YB = BB.parts.materials[BB.range]) || void 0 === YB ? void 0 : YB.mirror) && void 0 !== GB ? GB : BB.owner.material) && void 0 !== OB ? OB : null
    }
    const uQ = ["opaque", "alphaTest", "transparent", "text"];

    function mQ(BB) {
      for (const OB of uQ) BB[OB].units.length = 0, BB[OB].rows.length = 0
    }
    class IQ {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, IO.c)("Lite: ")
      }
      attach(BB, OB) {
        this.model = BB, this.mirror = OB
      }
      get worlds() {
        return this.model.nodes.mP
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
        for (const [OB, GB] of this.groups)
          for (const YB of uQ)
            for (const DB of GB[YB].units) BB(DB.owner, "text" === YB ? "transparent" : YB, OB)
      }
      select(BB, OB) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(mQ);
        const {
          model: GB,
          mirror: YB
        } = this;
        if (!GB || !YB || !BB) return;
        this.rows.length < GB.nodes.CP && (this.rows = new Int32Array(GB.nodes.CP));
        const DB = this.rows,
          QB = GB.meshes;
        for (let jB = 0; jB < QB.looseCount; jB++) {
          const BB = QB.loose[jB],
            GB = YB.nodes[BB];
          GB && !GB.isBlocked && GB.isEnabled() && !GB.SP.hasAZeroComponent && QB.selects(BB, OB.frustum) && (this.activate(GB, BB), this.selectedCount++)
        }
        const oB = QB.selectTextPlanes(OB.frustum, DB);
        for (let jB = 0; jB < oB; jB++) {
          const OB = DB[jB],
            QB = YB.nodes[OB],
            oB = GB.meshes.parts[OB];
          if (!QB.isVisible || !(QB.visibility > 0) || 0 === (QB.layerMask & BB.layerMask) || !oB) continue;
          const yB = this.groupOf(GB.meshes.layer[OB]).text;
          for (const BB of dQ(oB)) yB.units.push(BB), yB.rows.push(OB);
          this.selectedCount++
        }
      }
      instanceBatch(BB) {
        const OB = this.batchOf(BB);
        return OB.dispatched || (OB.dispatched = OB.renderSelf = !0, OB.row = this.rowOf(BB)), OB
      }
      rowOf(BB) {
        return BB.row
      }
      activate(BB, OB) {
        if (!BB.SF) {
          const GB = BB;
          if (GB.WQB) {
            const BB = this.batchOf(GB);
            BB.dispatched = !0, BB.renderSelf = !0, BB.row = OB
          }
          return void this.dispatch(GB, OB, OB)
        }
        const GB = BB,
          YB = GB.AQB;
        if (YB._getWorldMatrixDeterminant() >= 0 !== GB._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${YB.name}`, `A mirrored InstancedMesh of ${YB.name} is not drawn yet`);
        const DB = this.batchOf(YB);
        DB.instances.push(GB), DB.rows.push(OB), DB.dispatched || (DB.dispatched = !0, this.dispatch(YB, OB, this.rowOf(YB)))
      }
      batchOf(BB) {
        let OB = this.batches.get(BB);
        return OB || (OB = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(BB, OB)), OB.frame !== this.frame && (OB.frame = this.frame, OB.dispatched = !1, OB.renderSelf = !1, OB.instances.length = 0, OB.rows.length = 0), OB
      }
      dispatch(BB, OB, GB) {
        const {
          layer: YB,
          parts: DB
        } = this.model.meshes;
        if (!DB[OB]) return;
        const QB = this.groupOf(YB[OB]),
          oB = BB;
        for (const jB of dQ(DB[OB])) {
          const BB = KQ(jB);
          if (!BB) continue;
          const OB = BB.needAlphaBlendingForMesh(oB) ? QB.transparent : BB.needAlphaTestingForMesh(oB) ? QB.alphaTest : QB.opaque;
          OB.units.push(jB), OB.rows.push(GB)
        }
      }
      groupOf(BB) {
        let OB = this.groups.get(BB);
        return OB || (OB = {
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
        }, this.groups.set(BB, OB)), OB
      }
    }

    function FQ(BB) {
      BB.opaque.length = 0, BB.transparent.length = 0
    }
    class iQ {
      constructor() {
        this.sJ = new Map, this.enabled = [], this.groups = new Map, this.GP = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(BB) {
        if (this.sJ.has(BB)) return;
        const OB = {
          mesh: BB,
          observer: BB.onEffectiveEnabledStateChangedObservable.add((BB => {
            this.Zk(OB, BB)
          })),
          index: -1,
          steady: null
        };
        this.sJ.set(BB, OB), this.Zk(OB, BB.isEnabled())
      }
      remove(BB) {
        const OB = this.sJ.get(BB);
        OB && (OB.observer.remove(!0), this.Zk(OB, !1), this.sJ.delete(BB))
      }
      dropSteady() {
        for (const BB of this.sJ.values()) BB.steady = null
      }
      base(BB) {
        return this.sJ.get(BB)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          sJ: this.sJ.size
        }
      }
      forEachSelected(BB) {
        for (const [OB, GB] of this.groups) {
          for (const YB of GB.opaque) BB(YB.owner, "opaque", OB);
          for (const YB of GB.transparent) BB(YB.owner, "transparent", OB)
        }
        for (const OB of this.GP) BB(OB.mesh, "opaque", 0)
      }
      group(BB) {
        return this.groups.get(BB)
      }
      forEachGroup(BB) {
        this.groups.forEach(BB)
      }
      select(BB, OB) {
        if (this.drawn = 0, this.selected = 0, this.GP.length = 0, this.groups.forEach(FQ), !BB) return;
        const GB = this.enabled;
        for (let YB = 0; YB < GB.length; YB++) {
          const DB = GB[YB];
          if (DB.steady && OB(DB, BB)) {
            this.selected++, this.GP.push(DB);
            continue
          }
          const QB = DB.mesh;
          if (QB.isBlocked || QB.SP.hasAZeroComponent) continue;
          if (!QB.isVisible || QB.visibility <= 0 || 0 === (QB.layerMask & BB.layerMask)) continue;
          if (QB.WQB) {
            this.warned.has(QB.name) || (this.warned.add(QB.name), console.warn(`Lite: thin instance base ${QB.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: oB
          } = QB;
          if (!oB) continue;
          QB.computeWorldMatrix(), this.selected++;
          const jB = this.listsFor(QB.renderingGroupId);
          for (const BB of dQ(oB)) {
            const OB = KQ(BB);
            OB && (OB.needAlphaBlendingForMesh(QB) ? jB.transparent.push(BB) : jB.opaque.push(BB))
          }
        }
      }
      Zk(BB, OB) {
        if (OB === BB.index >= 0) return;
        BB.steady = null;
        const GB = this.enabled;
        if (OB) BB.index = GB.length, GB.push(BB);
        else {
          const OB = GB.pop();
          OB !== BB && (GB[BB.index] = OB, OB.index = BB.index), BB.index = -1
        }
      }
      listsFor(BB) {
        let OB = this.groups.get(BB);
        return OB || (OB = {
          opaque: [],
          transparent: []
        }, this.groups.set(BB, OB)), OB
      }
    }
    var LQ = GB(40357);
    class gQ {
      constructor() {
        this.bundle = null, this.stale = !0, this.sJ = new Set
      }
    }
    class rQ {
      constructor(BB, OB, GB) {
        this.device = BB, this.slots = OB, this.host = GB, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new gQ, this.Jm = new gQ, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new xD, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = BB => {
          BB.seen !== this.frame && (BB.draw && (BB.draw = null, this.args[5 * BB.slot + 1] = 0, this.argsDirty = !0, this.Jm.stale ||= BB.Jm), this.frame - BB.seen > 120 && (this.records.delete(BB.unit), this.freeSlots.push(BB.slot), BB.recorded && (this.bundleOf(BB).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(BB) {
          var OB, GB;
          let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
          const DB = BB.adapterInfo;
          return "intel" === (null === DB || void 0 === DB ? void 0 : DB.vendor) && "gen-12lp" === DB.architecture && YB.includes("Windows")
        }(BB), (0, LQ.G)(this.direct)
      }
      zW() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, LQ.G)(this.directThisFrame)
      }
      add(BB, OB, GB, YB) {
        let DB = this.records.get(BB);
        return DB || (DB = this.createRecord(BB), this.records.set(BB, DB)), DB.recorded && wQ(DB, OB) || (this.bundleOf(DB).stale = !0), this.place(DB, OB, GB, YB), DB
      }
      bundleOf(BB) {
        return BB.Jm ? this.Jm : this.main
      }
      addAgain(BB, OB, GB, YB) {
        BB.recorded || (this.bundleOf(BB).stale = !0), this.place(BB, OB, GB, YB)
      }
      place(BB, OB, GB, YB) {
        BB.seen = this.frame, BB.Jm && null === BB.draw && (this.Jm.stale = !0), BB.draw = OB, this.drawn++, GB && this.slots.write(BB.slot, GB, YB) && (this.slotsFrom = Math.min(this.slotsFrom, BB.slot), this.slotsTo = Math.max(this.slotsTo, BB.slot));
        const DB = this.args,
          QB = 5 * BB.slot;
        DB[QB] === OB.count && DB[QB + 1] === OB.instances && DB[QB + 2] === OB.first || (DB[QB] = OB.count, DB[QB + 1] = OB.instances, DB[QB + 2] = OB.first, this.argsDirty = !0, this.Jm.stale ||= BB.Jm)
      }
      AP() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(BB) {
        for (const OB of this.records.values()) OB.draw && OB.seen === this.frame && !OB.Jm && BB(OB.draw, this.slots.data, OB.slot * JD / 4)
      }
      resourceDestroyed(BB) {
        this.main.stale ||= this.main.sJ.has(BB), this.Jm.stale ||= this.Jm.sJ.has(BB)
      }
      execute(BB, OB, GB) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(BB, OB, GB, "direct"), this.drawn;
        const YB = this.host.sceneGroup(OB);
        if (!YB) return this.main.bundle = null, this.Jm.bundle = null, this.recordedSceneGroup = null, this.encode(BB, OB, GB, "direct"), this.drawn;
        this.recordedTarget === GB && this.recordedSceneGroup === YB || (this.recordedTarget = GB, this.recordedSceneGroup = YB, this.main.stale = !0, this.Jm.stale = !0);
        const DB = this.main,
          QB = this.Jm;
        let oB = !1;
        !DB.stale && DB.bundle || (DB.bundle = this.record(OB, GB, YB, "indirect"), oB = !0);
        const jB = (0, LQ.l)();
        return (QB.stale || this.rangedEpoch !== jB) && (this.rangedEpoch = jB, QB.bundle = this.drawsRanged() ? this.record(OB, GB, YB, "Jm") : this.noRangedBundle(), oB = !0), oB && (this.bundles = QB.bundle ? [DB.bundle, QB.bundle] : [DB.bundle]), BB.executeBundles(this.bundles), BB.setBindGroup(0, YB), this.drawn
      }
      record(BB, OB, GB, YB) {
        const DB = this.device.createRenderBundleEncoder({
          label: "Jm" === YB ? "thin-bases-ranged" : "thin-bases",
          colorFormats: BB._colorFormat ? [BB._colorFormat] : [],
          depthStencilFormat: BB._depthStencilFormat,
          sampleCount: BB._sampleCount
        });
        return DB.setBindGroup(0, GB), this.encode(DB, BB, OB, YB), DB.finish()
      }
      noRangedBundle() {
        for (const BB of this.records.values()) BB.Jm && (BB.recorded = !1);
        return this.Jm.sJ.clear(), this.Jm.stale = !1, null
      }
      drawsRanged() {
        for (const BB of this.records.values())
          if (BB.Jm && BB.draw) return !0;
        return !1
      }
      encode(BB, OB, GB, YB) {
        const DB = [];
        for (const yB of this.records.values()) "direct" !== YB && yB.Jm !== ("Jm" === YB) || (yB.recorded = !1, yB.draw && DB.push(yB));
        DB.sort(EQ);
        const QB = "direct" === YB ? null : "Jm" === YB ? this.Jm : this.main;
        null === QB || void 0 === QB || QB.sJ.clear(), this.binder.reset();
        let oB = !1;
        for (const yB of DB) {
          var jB;
          const DB = yB.draw,
            JB = this.host.pipelineFor(DB, OB, GB);
          if (!JB) {
            this.host.pipelineCompiling(DB, GB) ? oB = !0 : QB && this.keep(yB, DB, QB.sJ);
            continue
          }
          let MB;
          if (yB.Jm && "indirect" !== YB) {
            const BB = yB.unit.owner;
            MB = "direct" === YB && (0, LQ.x)(BB) || (0, LQ.o)(BB) || void 0
          }
          if (QB && this.keep(yB, DB, QB.sJ), 0 === (null === (jB = MB) || void 0 === jB ? void 0 : jB.count)) continue;
          this.binder.bind(BB, DB, JB, this.slots.bindGroup, yB.slot * JD);
          const PB = 5 * yB.slot;
          if ("indirect" === YB) {
            DB.indexBuffer ? BB.drawIndexedIndirect(this.argsBuffer, 4 * PB) : BB.drawIndirect(this.argsBuffer, 4 * PB);
            continue
          }
          const zB = this.args;
          MB ? XQ(BB, null !== DB.indexBuffer, zB, PB, MB) : DB.indexBuffer ? BB.drawIndexed(zB[PB], zB[PB + 1], zB[PB + 2], 0, 0) : BB.draw(zB[PB], zB[PB + 1], zB[PB + 2], 0)
        }
        QB && (QB.stale = oB)
      }
      keep(BB, OB, GB) {
        BB.recorded = !0, BB.pipelineKey = OB.pipelineKey, BB.materialGroup = OB.material.bindGroup, BB.vertexBuffers.length = 0, BB.vertexBuffers.push(...OB.vertexBuffers), BB.vertexOffsets = OB.vertexOffsets, BB.indexBuffer = OB.indexBuffer, BB.indexFormat = OB.indexFormat;
        for (const YB of OB.vertexBuffers) GB.add(YB);
        OB.indexBuffer && GB.add(OB.indexBuffer), GB.add(OB.material.buffer);
        for (const YB of OB.material.bound) YB && GB.add(YB)
      }
      createRecord(BB) {
        let OB = this.freeSlots.pop();
        return void 0 === OB && (OB = this.slotCount++, this.grow()), {
          unit: BB,
          slot: OB,
          Jm: void 0 !== (0, LQ.o)(BB.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.Jm.stale = !0), 5 * this.slotCount > this.args.length) {
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

    function XQ(BB, OB, GB, YB, DB) {
      const QB = GB[YB + 1],
        oB = DB.data;
      for (let jB = 0; jB < DB.count; jB++) {
        const DB = Math.min(oB[2 * jB], QB),
          yB = Math.min(oB[2 * jB + 1], QB - DB);
        0 !== yB && (OB ? BB.drawIndexed(GB[YB], yB, GB[YB + 2], 0, DB) : BB.draw(GB[YB], yB, GB[YB + 2], DB))
      }
    }

    function wQ(BB, OB) {
      if (BB.pipelineKey !== OB.pipelineKey || BB.materialGroup !== OB.material.bindGroup || BB.indexBuffer !== OB.indexBuffer || BB.indexFormat !== OB.indexFormat || BB.vertexOffsets !== OB.vertexOffsets || BB.vertexBuffers.length !== OB.vertexBuffers.length) return !1;
      for (let GB = 0; GB < BB.vertexBuffers.length; GB++)
        if (BB.vertexBuffers[GB] !== OB.vertexBuffers[GB]) return !1;
      return !0
    }

    function EQ(BB, OB) {
      return BQ(BB.draw, OB.draw)
    }
    const cQ = new WeakMap,
      hQ = {
        depth: !1,
        sunShadow: !1
      };

    function aQ(BB, OB) {
      let GB = cQ.get(BB);
      GB || (GB = new Map, cQ.set(BB, GB));
      const YB = `${OB.depth?"-depth":""}${OB.sunShadow?"-shadow":""}${OB.shadowMask?"-mask":""}`;
      let DB = GB.get(YB);
      if (!DB) {
        const QB = [{
          binding: vO.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: vO.f
          }
        }, {
          binding: vO.p,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        OB.depth && QB.push({
          binding: vO.k,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), OB.sunShadow && QB.push(... function() {
          const BB = GPUShaderStage.FRAGMENT,
            OB = vO.n;
          return [{
            binding: OB.uniform,
            visibility: BB,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: OB.sz,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: OB.special,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: OB.volume,
            visibility: BB,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: OB.sampler,
            visibility: BB,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: OB.entities,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: OB.entityGrids,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), OB.shadowMask && QB.push({
          binding: vO.o,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), DB = BB.createBindGroupLayout({
          label: `${OB.depth?"terrain-":""}shader-pack-inputs${YB}`,
          entries: QB
        }), GB.set(YB, DB)
      }
      return DB
    }

    function eQ(BB) {
      return aQ(BB, hQ)
    }

    function TQ(BB, OB) {
      if (!OB) return !1;
      const GB = (0, sO.h)(BB);
      return !!GB && QY(GB, OB)
    }

    function bQ(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!IY(OB)) return [];
      return [aQ(BB, {
        depth: kY(OB.packVariant),
        sunShadow: TQ(OB.packVariant, GB),
        shadowMask: YB
      })]
    }
    class CQ {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = BB, this.sunShadow = GB, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(vO.f), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = BB.createBuffer({
          label: "shader-pack-inputs",
          size: vO.f,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const YB = (0, vO.t)(OB);
        this.textures = BB.createBuffer({
          label: "shader-pack-textures",
          size: YB.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), BB.queue.writeBuffer(this.textures, 0, YB), this.bindGroup = BB.createBindGroup({
          label: "shader-pack-inputs",
          layout: eQ(BB),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: vO.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: vO.p,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(BB, OB, GB) {
        (0, vO.z)(this.data, {
          seconds: BB.seconds(),
          lit: GB,
          renderOffset: BB.renderOffset(),
          nOB: BB.nOB(),
          eyePosition: OB,
          shadowDirection: BB.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const YB = OB ? this.sunShadow : null;
        if ((OB || GB) && !YB) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!BB && !YB) return this.bindGroup;
        (BB && BB !== this.depthView || GB && GB !== this.maskView) && (this.depthView = null !== BB && void 0 !== BB ? BB : this.depthView, this.maskView = null !== GB && void 0 !== GB ? GB : this.maskView, this.groups.clear());
        const DB = (BB ? 1 : 0) | (YB ? 2 : 0) | (GB ? 4 : 0);
        let QB = this.groups.get(DB);
        if (!QB) {
          const OB = this.entries();
          BB && OB.push({
            binding: vO.k,
            resource: BB
          }), YB && OB.push(...YB.entries()), GB && OB.push({
            binding: vO.o,
            resource: GB
          }), QB = this.device.createBindGroup({
            label: `${BB||GB?"terrain-":""}shader-pack-inputs${BB?"-depth":""}${YB?"-shadow":""}${GB?"-mask":""}`,
            layout: aQ(this.device, {
              depth: !!BB,
              sunShadow: !!YB,
              shadowMask: !!GB
            }),
            entries: OB
          }), this.groups.set(DB, QB)
        }
        return QB
      }
      bind(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        BB.setBindGroup(vO.e, this.bindGroupFor(OB, GB, YB))
      }
    }

    function HQ(BB, OB, GB) {
      if (BB.gpuVersion === OB.gpuBuffersVersion) return !0;
      let YB;
      do {
        if (YB = OB.gpuBuffersVersion, !vQ(BB, OB, GB)) return !1
      } while (OB.gpuBuffersVersion !== YB);
      return BB.gpuVersion = YB, BB.fitInstances = 0, !0
    }

    function vQ(BB, OB, GB) {
      let YB = null;
      for (let QB = 0; QB < BB.slotData.length; QB++) {
        var DB;
        const oB = BB.slotData[QB],
          jB = oB ? OB.gpuBuffer(oB) : GB;
        if (!jB) return !1;
        oB && BB.layout.instanceEnds[QB] < 0 && OB.cover(oB, Number.POSITIVE_INFINITY), BB.buffers[QB] = jB;
        const yB = BB.iBB[QB] + (oB ? OB.gpuOffset(oB) : 0);
        yB !== (null !== (DB = YB) && void 0 !== DB ? DB : BB.offsets)[QB] && (YB ??= BB.offsets.slice(), YB[QB] = yB), BB.ends[QB] = oB ? OB.gpuEnd(oB) : jB.size
      }
      return YB && (BB.offsets = YB), !0
    }

    function sQ(BB, OB, GB, YB) {
      if (OB <= BB.fitInstances) return null;
      const {
        layout: DB,
        ends: QB,
        offsets: oB,
        slotData: jB,
        iBB: yB
      } = BB;
      let JB = !1;
      for (let MB = 0; MB < DB.buffers.length; MB++) {
        const BB = DB.instanceEnds[MB];
        if (BB < 0) continue;
        const YB = (OB - 1) * DB.buffers[MB].arrayStride + BB;
        if (QB[MB] - oB[MB] < YB) return {
          index: MB,
          needed: YB
        };
        const PB = jB[MB];
        PB && GB.cover(PB, yB[MB] + YB) && (JB = !0)
      }
      return JB && HQ(BB, GB, YB), BB.fitInstances = OB, null
    }
    var xQ = GB(38494),
      tQ = GB(38531);
    const Bo = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Oo = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Go = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Yo = `((vertexInputs.aPackedLightLevels >> 16u) | ${mO.b.placed}u)`,
      Do = "u32(vertexInputs.aShaderPackItem.x)",
      Qo = `${mO.b.lifeform}u`;

    function oo(BB) {
      return "item" === BB.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const jo = "bloxdSpEnchant",
      yo = "floor(finalWorld[3].xyz)";

    function Jo(BB, OB, GB) {
      return "placed" === OB.kind && BB.reads[GB].includes("bloxdFragmentBlockPosition")
    }

    function Mo(BB, OB) {
      let [GB, YB] = BB;
      return GB === OB.point && YB === OB.code
    }

    function Po(BB, OB) {
      var GB, YB, DB;
      const QB = null === (GB = BB.find((BB => BB.texture))) || void 0 === GB ? void 0 : GB.texture,
        oB = null === (YB = BB.find((BB => BB.enchantTier))) || void 0 === YB ? void 0 : YB.enchantTier,
        jB = null === (DB = BB.find((BB => BB.overlay))) || void 0 === DB ? void 0 : DB.overlay,
        yB = jB ? OB.filter((BB => Mo(BB, jB))).length : 0;
      return jB && 1 === yB ? {
        texture: QB,
        overlay: jB,
        enchantTier: oB
      } : {
        texture: QB,
        enchantTier: oB
      }
    }

    function zo(BB) {
      if ("item" === BB.kind) {
        return {
          vertexFlags: `(${Do} & 0xffffu)`,
          varying: "vPackItem",
          value: Do,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return BB.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Yo,
        varying: "vPackFlags",
        value: Yo,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function po(BB) {
      return "lifeform" === BB.kind ? Qo : "0u"
    }

    function qo(BB) {
      return !!BB.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Zo(BB, OB) {
      const {
        enchantTier: GB
      } = OB;
      return GB && qo(OB.defines) && "lifeform" === OB.kind && So(BB, "enchantTier") ? GB : null
    }

    function No(BB, OB) {
      return qo(OB.defines) && So(BB, "enchantSpeed")
    }

    function Ro(BB) {
      const {
        overlay: OB,
        defines: GB
      } = BB;
      if (!OB || !GB.DIFFUSE) return null;
      const YB = GB.VERTEXCOLOR || GB.INSTANCESCOLOR && GB.INSTANCES;
      return `vec4f(${OB.colour}.rgb * uniforms.vDiffuseInfos.y${YB?" * fragmentInputs.vColor.rgb":""}, ${OB.colour}.a)`
    }
    const Wo = "fragmentInputs.vPackTexture";

    function Ao(BB) {
      const {
        atlas: OB,
        defines: GB,
        texture: YB
      } = BB;
      if (OB || !GB.DIFFUSE) return null;
      if (YB) return {
        texture: "diffuseSampler",
        ...YB
      };
      const DB = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===GB.DIFFUSEDIRECTUV?"vMainUV1":2===GB.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== BB.kind) return DB;
      if (!GB.BLOXD_PLUGIN_ANIMATED) return {
        ...DB,
        id: Wo
      };
      const QB = SB.c.WGSL,
        oB = (0, SB.Ab)(QB, "uAnimStatesNum"),
        jB = (0, SB.X)(QB, (0, xQ.f)(QB), oB),
        yB = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${oB})`,
        layers: [jB],
        uv: `vec2f(${yB}.x, ${yB}.y * ${oB} - ${jB})`,
        levelUv: yB,
        id: Wo
      }
    }

    function Vo(BB, OB) {
      return "box" === OB.kind && !!BB.hooks.surface && null !== Ao(OB)
    }

    function So(BB, OB) {
      return BB.reads.fragment.includes(OB)
    }

    function no(BB) {
      return !!BB.BLOXD_LIGHTING && !BB.BLOXD_UNLIT
    }

    function Uo(BB, OB, GB, YB) {
      const DB = BB.filter((BB => {
        let [GB, YB] = BB;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === GB && YB === OB
      }));
      if (1 !== DB.length) throw new Error(`A model program for shader packs has ${0===DB.length?"no":"more than one"} ${YB} code before fog (lite/modelShaderPack.ts)`);
      return BB.map((BB => BB === DB[0] ? [BB[0], GB] : BB))
    }

    function fo(BB, OB, GB, YB) {
      const {
        hooks: DB
      } = BB, {
        kind: QB,
        defines: oB
      } = OB, jB = [...GB];
      var yB;
      OB.atlas && DB.surface && jB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", zY("atlasIdxIn")]), "item" === QB && jB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, SB.e)(SB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Vo(BB, OB) && jB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, SB.e)(SB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (yB = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${MY}[min(u32(${yB}) - 1u, arrayLength(&${MY}) - 1u)], ${yB} > 0.5);\n`)]);
      const JB = zo(OB);
      JB && (DB.surface || DB.light) && jB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${JB.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${JB.varying} = ${JB.value};`]);
      let MB = YB;
      if (Jo(BB, OB, "fragment") && (jB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${yo});`]), MB = [...MB, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), So(BB, "localPosition") && jB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${oo(OB)};`]), qo(oB) && DB.surface) {
        No(BB, OB) && jB.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const GB = Zo(BB, OB);
        GB && jB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${GB});`]);
        const YB = (0, SB.kb)(SB.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        MB = [...Uo(MB, (0, tQ.h)(SB.c.WGSL), YB, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, tQ.d)(jo)]]
      }
      const {
        overlay: PB
      } = OB;
      PB && Ro(OB) && DB.surface && (MB = MB.filter((BB => !Mo(BB, PB))));
      const zB = DB.light ? function(BB) {
        return "placed" === BB.kind ? {
          name: "terrain",
          engine: (0, bO.T)(SB.c.WGSL),
          pack: (0, bO.lb)(SB.c.WGSL)
        } : BB.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, bO.L)(SB.c.WGSL),
          pack: (0, bO.gb)(SB.c.WGSL)
        } : null
      }(OB) : null;
      if (zB && (MB = Uo(MB, zB.engine, zB.pack, `${zB.name} light`), "placed" !== QB && no(oB))) {
        const BB = oB.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, SB.Ab)(SB.c.WGSL, "uEntityLightLevels") : (0, SB.Lb)(SB.c.WGSL, "aLightLevels");
        jB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${bO.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, bO.hb)(SB.c.WGSL, BB)])
      }
      return {
        vertexCode: jB,
        fragmentCode: MB
      }
    }

    function ko(BB, OB, GB, YB) {
      return YY(BB, OB, GB, YB, "model")
    }
    const Ko = "\t@builtin(position) position: vec4f,\n";

    function uo(BB, OB) {
      const GB = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(BB)[0];
      return `${GB}${OB}${BB.slice(GB.length)}`
    }

    function mo(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: DB
      } = OB, QB = QY(OB, YB), {
        kind: oB,
        defines: jB
      } = GB, yB = function(BB, OB) {
        var GB, YB, DB;
        const {
          defines: QB
        } = OB, oB = zo(OB), jB = !!QB.FOG, yB = qo(QB), JB = null !== (GB = null === oB || void 0 === oB ? void 0 : oB.enchantTier) && void 0 !== GB ? GB : Zo(BB, OB) ? "fragmentInputs.vPackEnchantTier" : "0u", MB = "lifeform" === OB.kind && !QB.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (YB = null === oB || void 0 === oB ? void 0 : oB.vertexFlags) && void 0 !== YB ? YB : po(OB),
          vertexLocalPosition: oo(OB),
          flags: null !== (DB = null === oB || void 0 === oB ? void 0 : oB.flags) && void 0 !== DB ? DB : po(OB),
          normal: "normalW",
          alpha: MB ? "alpha * baseColor.a" : "alpha",
          alphaOut: MB ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: jB ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: jB ? "1.0 - fog" : "0.0",
          enchantTier: JB,
          enchantColour: yB ? `${jo}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: No(BB, OB) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: So(BB, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Ro(OB)
        }
      }(OB, GB), JB = BB.textures.filter((BB => /^textureAtlas\d+$/.test(BB.name))).length, MB = GB.atlas && JB > 0 ? {
        count: JB,
        layers: GB.atlas.layers,
        width: GB.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: BB.material.slots.has("uAnimDataPerTex") ? (OB, GB) => vY(OB, GB, function(BB) {
          const OB = BB.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            kP: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: BB => `uniforms.uAnimDataPerTex[${BB}]${OB}`
          }
        }(BB)) : null
      } : null, PB = "placed" === oB ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", zB = null !== MB && void 0 !== MB ? MB : Ao(GB), lB = function(BB, GB) {
        let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,vO.w)()}${jY(OB,GB)}${YB}${pY(BB)}${BY}${PB}${OB.code}`
      };
      let {
        vertex: pB,
        fragment: qB
      } = BB;
      const ZB = ZY(DB, yB);
      if (ZB) {
        const BB = Jo(OB, GB, "vertex") ? `\tbloxdSpCell = ${yo};\n` : "";
        pB = ko(pB, Bo, `${BB}${ZB.slice(1)}${Bo}`, "vertex")
      }
      const NB = `${yY(OB,QB,function(BB,OB){return OB.TWOSIDEDLIGHTING?BB:`select(-(${BB}), ${BB}, fragmentInputs.frontFacing)`}(yB.normal,jB),yB.flags)}${NY(DB,OB.strict,OB.program,zB,yB)}`;
      NB && (qB = ko(qB, Oo, `${NB.slice(1)}${Oo}`, "surface")), QB && OB.sunShadow && !jB.TWOSIDEDLIGHTING && (qB = ko(qB, Ko, `${Ko}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const RB = AY(DB);
      if (RB) {
        const BB = WY(DB, no(jB), !0, yB);
        qB = ko(qB, Go, `${BB}${RB.slice(1)}${Go}`, "light")
      }
      const WB = Vo(OB, GB) ? PY : "";
      return {
        ...BB,
        vertex: uo(pB, lB(MB, !1, WB)),
        fragment: uo(qB, lB(zB, QB))
      }
    }
    const Io = {
      name: "earthSky",
      uniqueId: -1
    };
    class Fo {
      constructor(BB, OB) {
        this.resources = BB, this.epoch = OB, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const BB of this.instances.values()) BB.released = !0, this.resources.destroyBuffer(BB.buffer);
        this.instances.clear()
      }
    }

    function io(BB) {
      return BB.failed && null !== BB.packGroup
    }
    class Lo {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iQ,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new IQ;
        this.device = BB, this.resources = OB, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.mBB = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new xD, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new WQ((BB => this.modelSlot(BB).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, IO.c)("Lite: "), this.renderStates = new pQ(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (BB, OB) => this.keepSteady(BB, OB), this.lists = void 0, this.slotCount = 0, this.mBB = YB, this.modelMeshes = DB, this.lists = new tD(DB, YB, this, this.warnOnce), this.drawDefines = new MQ(OB, this.warnOnce, ((BB, OB, GB) => this.programWithModel(BB, OB, GB)), io), this.vertexLayouts = new nQ(OB, BB.limits, this.warnOnce), this.sceneLayout = nO(BB), this.frameLayout = BB.createBindGroupLayout({
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
        }), this.meshSlots = new kQ(BB, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = BB.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new rQ(BB, new kQ(BB, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (BB, OB, GB) => this.pipelineFor(BB, OB, GB),
          pipelineCompiling: (BB, OB) => !BB.program.failed && !1 !== this.pipelines.get(`${BB.pipelineKey}|${OB}`),
          sceneGroup: BB => {
            const OB = GB(BB);
            return OB || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), OB
          }
        }), OB.onDestroy = BB => {
          this.thinBundle.resourceDestroyed(BB)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const DB = {
          order: BB,
          isTransparent: OB,
          _direct: !OB,
          bind: (BB, OB) => this.createBinding(DB, OB, GB, YB)
        };
        return DB
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(BB, OB, GB) {
        var YB;
        let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = OB, this.drawDefines.view = OB, this.thinBundle.zW(), this.writeFrameUniforms();
        const QB = null !== (YB = null === DB || void 0 === DB ? void 0 : DB.defineFor("model")) && void 0 !== YB ? YB : 0;
        this.drawDefines.modelPackVariant = QB, DB && 0 !== QB && (this.packInputs ??= new CQ(this.device, DB.textureLayers(), this.sunShadow), this.packInputs.write(DB, OB.eye, DB.wq())), this.lists.clear(), this.slotCount = 0;
        const oB = BB.activeCamera;
        this.mBB.select(oB, this.keepSteadyBase), this.modelMeshes.select(oB, OB), GB && this.pushEarthSky(GB), this.lists.collect(BB), this.thinBundle.AP(), this.uploadMeshSlots()
      }
      pushDraws(BB, OB, GB, YB, DB, QB) {
        let oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const jB = QB.length;
        for (let yB = 0; yB < GB; yB++) {
          const GB = OB[yB];
          let jB = this.retainedDraw(BB, GB, YB, DB);
          if (void 0 === jB && (jB = this.drawFor(BB, GB, YB, DB), this.retain(GB, jB)), jB) {
            const BB = GB.owner,
              OB = oB ? oB[yB] : -1;
            jB.slotOffset = OB < 0 ? this.writeMeshSlot(BB.getWorldMatrix().m, BB.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[OB], 16 * OB), QB.push(jB)
          }
        }
        return QB.length - jB
      }
      bundleDraws(BB, OB, GB) {
        let YB = 0;
        for (const DB of OB) {
          let OB = this.retainedDraw(BB, DB, GB, !1);
          const QB = void 0 !== OB;
          if (void 0 === OB && (OB = this.drawFor(BB, DB, GB, !1), this.retain(DB, OB)), OB) {
            const BB = DB.owner,
              GB = this.thinBundle.add(DB, OB, BB.getWorldMatrix().m, BB.visibility);
            QB && this.steadyFrom(DB, OB, GB), YB++
          }
        }
        return YB
      }
      steadyFrom(BB, OB, GB) {
        const YB = BB.owner,
          DB = this.mBB.base(YB),
          QB = YB.material,
          {
            drawState: oB,
            instance: jB
          } = OB.inputs.retained;
        if (!DB || !QB || 1 !== BB.parts.materials.length || KQ(BB) !== QB) return;
        const yB = DB.steady ??= {
          unit: BB,
          material: QB,
          visibility: 1,
          draw: OB,
          record: GB,
          drawState: oB,
          instance: jB,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        yB.unit = BB, yB.material = QB, yB.visibility = YB.visibility, yB.draw = OB, yB.record = GB, yB.drawState = oB, yB.instance = jB, yB.bindGroup = jB.bindGroup, yB.gpuVersion = this.resources.gpuBuffersVersion, yB.fitInstances = OB.inputs.fitInstances, yB.worldFlag = YB.getWorldMatrix().updateFlag, yB.handedFrame = this.frame
      }
      keepSteady(BB, OB) {
        const GB = BB.steady;
        if (GB.handedFrame !== this.frame - 1 || (this.frame + GB.phase) % 8 === 0) return !1;
        const YB = BB.mesh,
          {
            unit: DB,
            draw: QB,
            instance: oB,
            drawState: jB
          } = GB,
          yB = YB.forcedInstanceCount || YB.rBB;
        if (!YB.isVisible || YB.WQB || YB.visibility !== GB.visibility || 0 === (YB.layerMask & OB.layerMask) || YB.material !== GB.material || 0 !== YB.renderingGroupId || YB.hasVertexAlpha || !this.drawDefines.definesHold(jB, DB, jB.instancing) || GB.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(QB.inputs, DB, jB.instancing, QB.program) || QB.program.failed || oB.released || yB <= 0 || yB > GB.fitInstances) return !1;
        if (oB.frame !== this.frame && this.bindMaterial(oB, this.modelUniforms.refreshModelUniforms(YB.JF(), oB, oB.model, this.view)), !oB.bindable || oB.bindGroup !== GB.bindGroup) return !1;
        const JB = YB.computeWorldMatrix(),
          MB = JB.updateFlag !== GB.worldFlag;
        return GB.worldFlag = JB.updateFlag, QB.instances = yB, this.thinBundle.addAgain(GB.record, QB, MB ? JB.m : null, GB.visibility), GB.handedFrame = this.frame, this.mBB.drawn++, !0
      }
      retainedDraw(BB, OB, GB, YB) {
        const DB = this.inputs.get(OB),
          QB = null === DB || void 0 === DB ? void 0 : DB.retained;
        if (!DB || !QB) return;
        const {
          drawState: oB,
          program: jB,
          instance: yB,
          instancing: JB
        } = QB, MB = OB.owner;
        if (DQ(MB) !== JB) return;
        const PB = this.instanceCount(MB, JB);
        if (PB <= 0) return null;
        if (yB.released || jB.failed || oB.program !== jB || !this.drawDefines.programCurrent(oB, OB, JB, GB) || !this.inputsStamped(DB, OB, JB, jB) || MB.isUnIndexed !== QB.unIndexed || this.indexKey(OB) !== QB.indexData) return;
        if (QB.indexBuffer && QB.gpuVersion !== this.resources.gpuBuffersVersion) {
          const BB = this.resources.gpuBuffer(QB.indexData);
          if (!BB) return;
          QB.indexBuffer = BB, QB.gpuVersion = this.resources.gpuBuffersVersion
        }
        let zB = !1;
        if (yB.frame !== this.frame && (zB = this.modelUniforms.refreshModelUniforms(BB, yB, yB.model, this.view)), !this.bindMaterial(yB, zB) || !this.withGpuBuffers(DB) || !this.instanceBuffersFit(MB.name, DB, PB)) return null;
        const lB = this.makeDraw(jB, DB, this.renderStates.renderState(oB.model, MB, YB, DB.state), yB, PB);
        return this.setRange(lB, OB, QB.indexBuffer, QB.indexData), lB
      }
      retain(BB, OB) {
        const GB = this.drawDefines.drawStates.get(BB);
        if (!OB || !GB || GB.program !== OB.program) {
          const OB = this.inputs.get(BB);
          return void(OB && (OB.retained = null))
        }
        const YB = BB.owner,
          DB = GB.instancing,
          QB = this.indexKey(BB),
          oB = OB.inputs.retained;
        oB ? (oB.drawState = GB, oB.instancing = DB, oB.program = OB.program, oB.instance = OB.material, oB.indexData = QB, oB.unIndexed = YB.isUnIndexed, oB.indexBuffer = OB.indexBuffer, oB.gpuVersion = this.resources.gpuBuffersVersion) : OB.inputs.retained = {
          drawState: GB,
          instancing: DB,
          program: OB.program,
          instance: OB.material,
          indexData: QB,
          unIndexed: YB.isUnIndexed,
          indexBuffer: OB.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(BB, OB, GB, YB) {
        const DB = OB.owner,
          QB = KQ(OB);
        if (!QB) return null;
        const oB = QB.getClassName();
        let jB = null;
        if (function(BB) {
            return "LinesMesh" === BB.getClassName()
          }(DB)) {
          if (! function(BB) {
              return "ShaderMaterial" === BB.getClassName() && "color" === BB.shaderPath
            }(QB)) return this.warnOnce(`lines:${oB}`, `A LinesMesh with a ${oB} is not drawn yet (${QB.name})`), null;
          jB = DB
        } else if ("StandardMaterial" !== oB && "LiteMaterial" !== oB) return this.warnOnce(`class:${oB}`, `${oB} is not drawn yet (${QB.name})`), null;
        const yB = DQ(DB),
          JB = this.instanceCount(DB, yB);
        if (JB <= 0) return null;
        const MB = jB ? this.lineProgramFor(DB, GB, yB) : this.drawDefines.programFor(BB, OB, QB, GB, yB);
        if (!MB || MB.failed) return null;
        const PB = jB ? null : this.drawDefines.drawStates.get(OB).model,
          zB = PB ? this.modelInstance(PB, MB) : this.materialInstance(DB, MB);
        let lB = !1;
        if (zB.frame !== this.frame && (jB ? RB(zB.ubo, jB) : lB = this.modelUniforms.refreshModelUniforms(BB, zB, zB.model, this.view)), !this.bindMaterial(zB, lB)) return null;
        const pB = this.meshInputs(OB, MB, yB);
        if (!pB || !this.instanceBuffersFit(DB.name, pB, JB)) return null;
        const qB = this.indexKey(OB);
        let ZB = null;
        if (qB && !DB.isUnIndexed && (ZB = this.resources.gpuBuffer(qB), !ZB)) return null;
        const NB = this.renderStates.renderState(null !== PB && void 0 !== PB ? PB : QB, DB, YB, pB.state, jB ? "line-list" : "triangle-list"),
          WB = this.makeDraw(MB, pB, NB, zB, JB);
        return this.setRange(WB, OB, ZB, qB), WB
      }
      indexKey(BB) {
        const OB = yQ(BB);
        return OB ? this.resources.modelIndex(OB) : null
      }
      setRange(BB, OB, GB, YB) {
        GB && (BB.indexBuffer = GB, BB.indexFormat = this.resources.indexFormat(YB));
        const DB = 4 * OB.range + (GB ? 0 : 2);
        BB.unit = OB, BB.first = OB.parts.JZ[DB], BB.count = OB.parts.JZ[DB + 1]
      }
      makeDraw(BB, OB, GB, YB, DB) {
        OB.state !== GB && (OB.state = GB, OB.pipelineKey = `${BB.id}|${OB.layout.key}|${GB.key}`, OB.pipeline = null);
        const QB = OB.draw ??= {
          program: BB,
          inputs: OB,
          pipelineKey: "",
          layout: OB.layout,
          state: GB,
          material: YB,
          slotOffset: 0,
          vertexBuffers: OB.buffers,
          vertexOffsets: OB.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: DB,
          unit: null
        };
        return QB.program = BB, QB.pipelineKey = OB.pipelineKey, QB.state = GB, QB.material = YB, QB.vertexOffsets = OB.offsets, QB.indexBuffer = null, QB.instances = DB, QB
      }
      instanceCount(BB, OB) {
        switch (OB) {
          case "thin":
            return BB.forcedInstanceCount || BB.rBB;
          case "instanced":
            return this.prepareInstances(BB);
          case "none":
            return 1
        }
      }
      prepareInstances(BB) {
        const OB = function(BB, OB) {
          const GB = OB._userInstancedBuffersStorage,
            YB = BB.batchUploads.get(OB);
          if (YB) {
            var DB;
            if (YB.layout === (null !== (DB = null === GB || void 0 === GB ? void 0 : GB.interleavedKinds) && void 0 !== DB ? DB : null)) return YB;
            YB.release()
          }
          return new lO(BB, OB, GB)
        }(this.resources, BB);
        return OB.frame !== this.frame && OB.pack(BB, this.modelMeshes.instanceBatch(BB), this.modelMeshes.worlds, this.frame), OB.count
      }
      programWithModel(BB, OB, GB) {
        const YB = this.modelSlot(BB),
          DB = PQ(YB, BB, GB),
          QB = this.drawDefines.modelPackKind(BB),
          oB = QB ? function(BB, OB, GB, YB) {
            const DB = (0, fB.A)(BB, nB.f.name),
              QB = [];
            for (const {
                feature: yB,
                state: JB,
                active: MB
              }
              of BB.features) {
              var oB, jB;
              const BB = MB ? null === (oB = (jB = (0, FO.i)(yB)).zp) || void 0 === oB ? void 0 : oB.call(jB, JB) : void 0;
              BB && QB.push(BB)
            }
            return {
              kind: OB,
              atlas: null !== DB && void 0 !== DB && DB.active ? (0, nB.c)(DB.state) : null,
              defines: GB,
              ...Po(QB, YB)
            }
          }(BB, QB, OB, YB.fragmentCode) : null;
        if (oB && function(BB) {
            const OB = BB.defines;
            return (null === BB.atlas || !!OB.DIFFUSE && 1 === OB.DIFFUSEDIRECTUV) && !!OB.NORMAL && !OB.REFLECTION && !OB.EMISSIVEASILLUMINATION && !OB.LINKEMISSIVEWITHDIFFUSE
          }(oB)) {
          const GB = this.modelPackProgram(BB, OB, `${DB}#${QB}#sp${this.drawDefines.modelPackVariant}`, YB, oB);
          if (GB && !GB.failed) return GB
        }
        const jB = this.programs.get(DB);
        if (jB || this.unbuildable.has(DB)) return null !== jB && void 0 !== jB ? jB : null;
        let yB;
        try {
          yB = uD({
            defines: oQ(OB),
            vertexCode: YB.vertexCode,
            fragmentCode: YB.fragmentCode,
            pluginUniforms: YB.pluginUniforms
          })
        } catch (JB) {
          return this.unbuildable.add(DB), this.warnOnce(`build:${DB}`, `could not build a program for ${BB.name}: ${String(JB)}`), null
        }
        return this.createProgram(DB, yB, "standard")
      }
      modelPackProgram(BB, OB, GB, YB, DB) {
        const QB = this.programs.get(GB);
        if (QB || this.unbuildable.has(GB)) return null !== QB && void 0 !== QB ? QB : null;
        const oB = this.drawDefines.modelPackVariant;
        let jB;
        try {
          const BB = function(BB) {
              return (0, sO.d)(BB, "model")
            }(oB),
            GB = fo(BB, DB, YB.vertexCode, YB.fragmentCode);
          jB = mo(uD({
            defines: oQ(OB),
            ...GB,
            pluginUniforms: YB.pluginUniforms
          }), BB, DB, !!this.sunShadow)
        } catch (MB) {
          return this.unbuildable.add(GB), this.warnOnce(`build:${GB}`, `could not build a shader pack program for ${BB.name}, which draws without the pack: ${String(MB)}`), null
        }
        const yB = TQ(oB, !!this.sunShadow),
          JB = {
            group: this.packInputs.bindGroupFor(null, yB),
            layout: aQ(this.device, {
              depth: !1,
              sunShadow: yB
            })
          };
        return this.createProgram(GB, jB, function(BB) {
          return `standard-sp${BB}`
        }(oB), JB)
      }
      lineProgramFor(BB, OB, GB) {
        const YB = NB(BB, GB, OB, this.view);
        let DB = this.linePrograms.get(YB);
        var QB;
        return DB || (DB = this.createProgram(`lines#${YB}`, (QB = function(BB) {
          const OB = new Map;
          for (let GB = 0; GB < JB.length; GB++) BB & 1 << GB && OB.set(JB[GB], !0);
          return OB
        }(YB), iD({
          defines: QB,
          vertex: ID,
          fragment: FD,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(YB, DB)), DB
      }
      createProgram(BB, OB, GB) {
        var YB;
        let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const QB = this.nextProgramId++,
          oB = `${GB}-${QB}`,
          jB = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          yB = [{
            binding: 0,
            visibility: jB,
            buffer: {
              type: "uniform"
            }
          }];
        for (const PB of OB.textures) yB.push({
          binding: PB.binding,
          visibility: jB,
          texture: {
            viewDimension: PB.dimension
          }
        }), yB.push({
          binding: PB.samplerBinding,
          visibility: jB,
          sampler: {}
        });
        const JB = this.device.createBindGroupLayout({
            label: oB,
            entries: yB
          }),
          MB = {
            key: BB,
            id: QB,
            kind: GB,
            program: OB,
            vertex: this.device.createShaderModule({
              label: `${oB}-vertex`,
              code: OB.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${oB}-fragment`,
              code: OB.fragment
            }),
            materialLayout: JB,
            pipelineLayout: this.device.createPipelineLayout({
              label: oB,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, JB, ...DB ? [DB.layout] : []]
            }),
            packGroup: null !== (YB = null === DB || void 0 === DB ? void 0 : DB.group) && void 0 !== YB ? YB : null,
            failed: !1
          };
        return this.programs.set(BB, MB), MB
      }
      writeFrameUniforms() {
        const BB = this.frameUniforms;
        RQ(this.view, BB), this.device.queue.writeBuffer(this.frameBuffer, 0, BB)
      }
      materialInstance(BB, OB) {
        let GB = this.materials.get(BB);
        if (!GB) {
          const OB = new Map;
          this.materials.set(BB, OB);
          const {
            resources: YB,
            materials: DB
          } = this;
          BB.lF.addOnce((() => {
            for (const BB of OB.values()) BB.released = !0, YB.destroyBuffer(BB.buffer);
            DB.delete(BB)
          })), GB = OB
        }
        let YB = GB.get(OB.key);
        return YB || (YB = this.newMaterialInstance(BB, null, OB), GB.set(OB.key, YB)), YB
      }
      modelInstance(BB, OB) {
        const GB = this.modelSlot(BB);
        let YB = GB.instances.get(OB.key);
        return YB || (YB = this.newMaterialInstance(BB, BB, OB), GB.instances.set(OB.key, YB)), YB
      }
      modelSlot(BB) {
        var OB;
        let GB = BB.gpu[dB.f.lite];
        return (null === (OB = GB) || void 0 === OB ? void 0 : OB.epoch) !== this.resources.epoch && (GB = new Fo(this.resources, this.resources.epoch), BB.gpu[dB.f.lite] = GB), GB
      }
      newMaterialInstance(BB, OB, GB) {
        const YB = GB.program.material.floats,
          DB = new Float32Array(YB),
          QB = new Map;
        return {
          owner: BB,
          model: OB,
          program: GB,
          data: DB,
          uploaded: new Float32Array(YB).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${BB.name}-uniforms`,
            size: Math.max(16, 4 * YB),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: QB,
          ubo: new NQ(GB.program.material.slots, DB, QB),
          bindGroup: null,
          bound: new Array(2 * GB.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(BB) {
        var OB;
        const GB = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: wD + ED,
            fragment: wD + cD,
            attributes: [],
            material: XD,
            textures: []
          }, "earthSky"),
          YB = this.earthSkyUniforms ??= this.newMaterialInstance(Io, null, GB);
        this.earthSkyFrom !== BB && (this.earthSkyFrom = BB, YB.data.fill(0)), vD(YB.ubo, BB, this.view);
        const DB = this.vertexInputs(GB, Io, "earthSky", GB, null);
        if (GB.failed || !DB || !this.bindMaterial(YB, !1)) return;
        const QB = null !== (OB = DB.state) && void 0 !== OB ? OB : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          oB = this.makeDraw(GB, DB, QB, YB, 1);
        oB.count = LD.length;
        const jB = sD(BB, this.view);
        oB.slotOffset = this.writeMeshSlot(jB, 1), this.lists.skyDraws.push(oB)
      }
      uploadIfChanged(BB) {
        const {
          data: OB,
          uploaded: GB
        } = BB;
        for (let YB = 0; YB < OB.length; YB++)
          if (OB[YB] !== GB[YB]) return GB.set(OB), void this.device.queue.writeBuffer(BB.buffer, 0, OB)
      }
      bindMaterial(BB, OB) {
        return BB.frame !== this.frame && (BB.frame = this.frame, OB || this.uploadIfChanged(BB), BB.bindable = this.bindTextures(BB)), BB.bindable
      }
      bindTextures(BB) {
        const {
          program: OB,
          bound: GB
        } = BB, YB = OB.program.textures;
        let DB = !BB.bindGroup,
          QB = !0;
        for (let oB = 0; oB < YB.length; oB++) {
          const OB = BB.textures.get(YB[oB].name),
            jB = OB ? this.resources.boundTexture(OB) : null;
          jB ? GB[2 * oB] === jB.view && GB[2 * oB + 1] === jB.sampler || (GB[2 * oB] = jB.view, GB[2 * oB + 1] = jB.sampler, DB = !0) : (OB || BB.ubo.expected.has(YB[oB].name) || this.warnOnce(`texture:${BB.owner.name}:${YB[oB].name}`, `${BB.owner.name} has no ${YB[oB].name}`), QB = !1)
        }
        if (!QB) return DB && (BB.bindGroup = null), !1;
        if (DB) {
          const DB = [{
            binding: 0,
            resource: {
              buffer: BB.buffer
            }
          }];
          for (let BB = 0; BB < YB.length; BB++) DB.push({
            binding: YB[BB].binding,
            resource: GB[2 * BB]
          }), DB.push({
            binding: YB[BB].samplerBinding,
            resource: GB[2 * BB + 1]
          });
          BB.bindGroup = this.device.createBindGroup({
            label: `${BB.owner.name}-material`,
            layout: OB.materialLayout,
            entries: DB
          })
        }
        return !0
      }
      writeMeshSlot(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, BB, OB, GB), this.slotCount++ * JD
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(BB, OB, GB, YB, DB) {
        let QB = this.inputs.get(BB);
        if (!QB || QB.program !== YB || !UQ(OB, QB, this.resources, DB)) {
          var oB;
          if (QB = null !== (oB = this.vertexLayouts.resolveInputs(OB, GB, YB, DB)) && void 0 !== oB ? oB : void 0, !QB) return null;
          this.inputs.set(BB, QB)
        }
        return this.withGpuBuffers(QB)
      }
      meshInputs(BB, OB, GB) {
        const YB = this.inputs.get(BB);
        if (YB && this.inputsStamped(YB, BB, GB, OB)) return this.withGpuBuffers(YB);
        const DB = BB.owner,
          QB = yQ(BB),
          oB = this.vertexInputs(BB, DB, DB.name, OB, QB);
        return oB && (oB.geometry = JQ(BB), oB.instanceLayout = this.drawDefines.instanceLayout(DB, GB)), oB
      }
      inputsStamped(BB, OB, GB, YB) {
        return function(BB, OB, GB, YB) {
          return BB.program === GB && BB.geometry === JQ(OB) && BB.instanceLayout === YB
        }(BB, OB, YB, this.drawDefines.instanceLayout(OB.owner, GB))
      }
      withGpuBuffers(BB) {
        return HQ(BB, this.resources, this.zeroBuffer) ? BB : null
      }
      instanceBuffersFit(BB, OB, GB) {
        const YB = sQ(OB, GB, this.resources, this.zeroBuffer);
        if (YB) {
          const DB = OB.ends[YB.index] - OB.offsets[YB.index] + OB.iBB[YB.index];
          return this.warnOnce(`overrun:${BB}`, `${BB} draws ${GB} instances from a ${DB}-byte buffer (${YB.needed} needed)`), !1
        }
        return !0
      }
      createBinding(BB, OB, GB, YB) {
        const DB = `${OB._colorFormat}|${OB._depthStencilFormat}|${OB._depthCompare}|${OB._sampleCount}`,
          QB = KO(this.device, OB);
        if (BB === this.skyLastRenderable) {
          let GB = null;
          return {
            renderable: BB,
            pipeline: QB,
            draw: BB => GB ? this.drawSky(BB, OB, DB, GB) : 0,
            update: BB => {
              GB = BB
            }
          }
        }
        return {
          renderable: BB,
          pipeline: QB,
          draw: BB => (YB ? YB.execute(BB, OB, DB) : 0) + this.drawList(BB, OB, DB, GB)
        }
      }
      drawSky(BB, OB, GB, YB) {
        const DB = this.lists.skyDraws,
          QB = DB.length > 0;
        if (QB) {
          var oB;
          const GB = (null !== (oB = OB._depthCompare) && void 0 !== oB ? oB : UO).startsWith("greater") ? 0 : 1;
          BB.setViewport(0, 0, YB.targetWidth, YB.targetHeight, GB, GB)
        }
        const jB = this.drawList(BB, OB, GB, DB);
        return QB && BB.setViewport(0, 0, YB.targetWidth, YB.targetHeight, 0, 1), jB
      }
      drawList(BB, OB, GB, YB) {
        let DB = 0;
        const QB = this.binder;
        QB.reset();
        for (const oB of YB) {
          const YB = this.pipelineFor(oB, OB, GB);
          YB && (QB.bind(BB, oB, YB, this.meshSlots.bindGroup, oB.slotOffset), oB.indexBuffer ? BB.drawIndexed(oB.count, oB.instances, oB.first, 0, 0) : BB.draw(oB.count, oB.instances, oB.first, 0), DB++)
        }
        return DB
      }
      pipelineFor(BB, OB, GB) {
        var YB, DB;
        if (BB.program.failed) return null;
        const QB = BB.inputs;
        if (QB.pipeline && QB.pipelineTarget === GB) return QB.pipeline;
        const oB = `${BB.pipelineKey}|${GB}`,
          jB = this.pipelines.get(oB);
        if (void 0 !== jB) return jB && (QB.pipeline = jB, QB.pipelineTarget = GB), jB || null;
        this.pipelines.set(oB, null);
        const {
          program: yB,
          layout: JB,
          state: MB
        } = BB, PB = {
          label: `standard-${yB.id}`,
          layout: yB.pipelineLayout,
          vertex: {
            module: yB.vertex,
            entryPoint: "main",
            buffers: JB.buffers
          },
          fragment: RO({
            module: yB.fragment,
            entryPoint: "main"
          }, OB, MB.blend, MB.colourWrite),
          depthStencil: OB._depthStencilFormat ? {
            format: OB._depthStencilFormat,
            depthCompare: null !== (YB = null !== (DB = MB.depthCompare) && void 0 !== DB ? DB : OB._depthCompare) && void 0 !== YB ? YB : UO,
            depthWriteEnabled: MB.depthWrite,
            depthBias: MB.depthBias,
            depthBiasSlopeScale: MB.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: OB._sampleCount
          },
          primitive: {
            topology: MB.topology,
            frontFace: MB.frontFace,
            cullMode: MB.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(PB).then((BB => {
          this.compiling--, this.pipelines.set(oB, BB)
        }), (BB => {
          this.compiling--, this.reportFailure(yB, oB, BB)
        })), null
      }
      forEachSunShadowCaster(BB) {
        const OB = this.caster,
          GB = (GB, YB, DB) => {
            const QB = GB.unit && function(BB) {
              const OB = BB.material.model;
              return null !== OB && (OB.lifeform || OB.item) && OB.castsSunShadow && "triangle-list" === BB.state.topology
            }(GB) ? yQ(GB.unit) : null;
            if (!QB) return;
            const oB = GB.unit.owner;
            switch (OB.geometry = QB, OB.skip = oB.noSunShadowVertices, OB.indexed = null !== GB.indexBuffer, OB.first = GB.first, OB.count = GB.count, OB.mP = YB, OB.worldAt = DB, OB.instances = null, OB.instanceCount = 1, OB.thin = !1, DQ(oB)) {
              case "thin": {
                const BB = oB._thinInstanceDataStorage.matrixData;
                if (!BB) return;
                OB.instances = BB, OB.instanceCount = Math.min(GB.instances, BB.length / 16), OB.thin = !0;
                break
              }
              case "instanced": {
                const BB = this.resources.batchUploads.get(oB);
                if (!BB || BB.frame !== this.frame || !this.writeBatchCasters(BB)) return;
                break
              }
            }
            BB(OB)
          };
        for (const YB of this.lists.opaqueDraws) GB(YB, this.meshSlots.data, YB.slotOffset / 4);
        this.thinBundle.forEachDrawn(GB)
      }
      writeBatchCasters(BB) {
        const {
          caster: OB
        } = this, GB = BB.packedMatrices, YB = BB.count;
        OB.instances = GB, OB.instanceCount = YB;
        let DB = -1;
        for (let QB = 0; QB < YB; QB++) {
          const OB = go(BB.packedRowMesh(QB));
          OB && DB < 0 ? (this.casterWorlds.length < 16 * YB && (this.casterWorlds = new Float32Array(GB.length)), this.casterWorlds.set(GB.subarray(0, 16 * QB)), DB = QB) : !OB && DB >= 0 && (this.casterWorlds.set(GB.subarray(16 * QB, 16 * QB + 16), 16 * DB), DB++)
        }
        return DB >= 0 && (OB.instances = this.casterWorlds, OB.instanceCount = DB), OB.instanceCount > 0
      }
      async reportFailure(BB, OB, GB) {
        const YB = [];
        let DB = !0;
        for (const [QB, oB] of [
            ["vertex", BB.vertex],
            ["fragment", BB.fragment]
          ]) {
          const BB = await oB.getCompilationInfo();
          for (const OB of BB.messages) DB &&= "error" !== OB.type, YB.push(`${QB}:${OB.lineNum}:${OB.linePos} ${OB.type}: ${OB.message}`)
        }
        if (DB && !BB.packGroup) return this.pipelines.set(OB, !1), console.error(`Lite: pipeline ${OB} failed`, GB), void MO(this.device, "mesh", BB.kind, GB);
        BB.failed || (BB.failed = !0, console.error(`Lite: program ${BB.id} failed`, GB, YB.join("\n"), {
          program: BB.program,
          key: BB.key
        }), MO(this.device, "mesh", BB.kind, GB, DB ? null : YB[0]))
      }
    }

    function go(BB) {
      var OB, GB;
      const YB = null === (OB = BB.yX) || void 0 === OB || null === (GB = OB.aShaderPackItem) || void 0 === GB ? void 0 : GB.x;
      return void 0 !== YB && 0 !== (YB & mO.h)
    }
    var ro = GB(44812),
      Xo = GB(44815),
      wo = GB(44820),
      Eo = GB(44778);
    const co = [0, 3, 1, 4, 2, 5];

    function ho(BB, OB, GB, YB, DB) {
      const QB = GB[0].width;
      try {
        return DB ? function(BB, OB, GB) {
          const YB = (0, Eo.c)(BB, GB, GB, 6);
          for (let DB = 0; DB < 6; DB++)(0, Eo.d)(BB, YB, DB, OB[co[DB]], {
            invertY: !1
          });
          return YB.texture
        }(BB, GB, QB) : function(BB, OB, GB, YB) {
          const DB = BB.createTexture({
            label: "sink-cube",
            size: {
              width: GB,
              height: GB,
              depthOrArrayLayers: 6
            },
            format: YB,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let QB = 0; QB < 6; QB++) BB.queue.copyExternalImageToTexture({
            source: OB[co[QB]]
          }, {
            texture: DB,
            origin: {
              x: 0,
              y: 0,
              z: QB
            }
          }, {
            width: GB,
            height: GB
          });
          return DB
        }(OB, GB, QB, 1 === YB ? "r8unorm" : "rgba8unorm")
      } finally {
        ao(GB)
      }
    }

    function ao(BB) {
      for (const OB of null !== BB && void 0 !== BB ? BB : []) null === OB || void 0 === OB || OB.close()
    }
    async function eo(BB) {
      const OB = [],
        GB = [];
      if (await Promise.all(BB.map(((BB, YB) => (OB[YB] = null, BB.then((BB => {
          OB[YB] = BB
        }), (BB => {
          GB.push(BB)
        })))))), GB.length > 0) throw ao(OB), GB[0];
      return OB
    }
    class To {
      constructor(BB) {
        this.CP = BB, this.starts = [], this.lengths = [], this.used = 0, BB > 0 && (this.starts.push(0), this.lengths.push(BB))
      }
      allocate(BB) {
        const {
          starts: OB,
          lengths: GB
        } = this;
        for (let YB = 0; YB < OB.length; YB++) {
          if (GB[YB] < BB) continue;
          const DB = OB[YB];
          return GB[YB] === BB ? (OB.splice(YB, 1), GB.splice(YB, 1)) : (OB[YB] += BB, GB[YB] -= BB), this.used += BB, DB
        }
        return -1
      }
      free(BB, OB) {
        this.used -= OB;
        const GB = Math.min(BB + OB, this.CP);
        GB > BB && this.release(BB, GB - BB)
      }
      grow(BB) {
        const OB = this.CP;
        this.CP = BB, this.release(OB, BB - OB)
      }
      truncate(BB) {
        const {
          starts: OB,
          lengths: GB
        } = this;
        for (let YB = OB.length - 1; YB >= 0 && OB[YB] + GB[YB] > BB; YB--) OB[YB] >= BB ? (OB.splice(YB, 1), GB.splice(YB, 1)) : GB[YB] = BB - OB[YB];
        this.CP = BB
      }
      release(BB, OB) {
        const {
          starts: GB,
          lengths: YB
        } = this;
        let DB = 0,
          QB = GB.length;
        for (; DB < QB;) {
          const OB = DB + QB >> 1;
          GB[OB] < BB ? DB = OB + 1 : QB = OB
        }
        const oB = DB,
          jB = oB > 0 && GB[oB - 1] + YB[oB - 1] === BB,
          yB = oB < GB.length && BB + OB === GB[oB];
        jB && yB ? (YB[oB - 1] += OB + YB[oB], GB.splice(oB, 1), YB.splice(oB, 1)) : jB ? YB[oB - 1] += OB : yB ? (GB[oB] = BB, YB[oB] += OB) : (GB.splice(oB, 0, BB), YB.splice(oB, 0, OB))
      }
    }
    const bo = 256;
    class Co {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = BB, this.onReplaced = OB, this.mergeGap = GB, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.JZ = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const DB = Math.max(bo, Math.ceil(YB / bo) * bo);
        this.bytes = new Uint8Array(DB), this.words = new Uint32Array(this.bytes.buffer), this.JZ = new To(DB / bo)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(BB) {
        return Math.max(1, Math.ceil(BB / bo)) * bo
      }
      allocate(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB;
        const YB = Co.slotBytes(BB),
          DB = YB / bo;
        let QB = this.JZ.allocate(DB);
        QB < 0 && (this.grow(this.JZ.CP + DB), QB = this.JZ.allocate(DB));
        const oB = QB * bo;
        return this.growTo(oB + Math.max(GB, YB)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, oB, oB + YB), OB && this.bytes.set(new Uint8Array(OB.buffer, OB.byteOffset, Math.min(OB.byteLength, YB)), oB), this.markDirty(oB, oB + YB), oB
      }
      growTo(BB) {
        const OB = Math.ceil(BB / bo);
        OB > this.JZ.CP && this.grow(OB)
      }
      free(BB, OB) {
        this.freed.push(BB, OB)
      }
      write(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (YB <= 0) return;
        YB <= 1024 && 0 === (3 & (BB | GB | YB)) ? this.copyWords(BB >> 2, OB.buffer, GB >> 2, YB >> 2) : this.bytes.set(new Uint8Array(OB.buffer, GB, YB), BB);
        let QB = BB + YB;
        if (DB) {
          const OB = BB + 4 * Math.ceil(YB / 4);
          this.bytes.fill(0, QB, OB), QB = OB
        }
        this.markDirty(BB, QB)
      }
      copyWords(BB, OB, GB, YB) {
        let DB = this.sourceWords.get(OB);
        DB || (DB = new Uint32Array(OB, 0, OB.byteLength >> 2), this.sourceWords.set(OB, DB));
        const QB = this.words;
        for (let oB = 0; oB < YB; oB++) QB[BB + oB] = DB[GB + oB]
      }
      move(BB, OB, GB) {
        this.bytes.copyWithin(OB, BB, BB + GB), this.markDirty(OB, OB + GB)
      }
      flush() {
        for (const OB of this.retired) this.onReplaced(OB), OB.destroy();
        this.retired.length = 0;
        const BB = this.dirtyStarts.length;
        if (BB > 0) {
          const {
            dirtyStarts: OB,
            dirtyEnds: GB,
            order: YB
          } = this;
          YB.length = BB;
          for (let jB = 0; jB < BB; jB++) YB[jB] = jB;
          BB > 1 && YB.sort(((BB, GB) => OB[BB] - OB[GB]));
          const DB = this.mergeGap;
          let QB = OB[YB[0]],
            oB = GB[YB[0]];
          for (let jB = 1; jB < BB; jB++) {
            const BB = YB[jB];
            OB[BB] - oB <= DB ? oB = Math.max(oB, GB[BB]) : (this.send(QB, oB), QB = OB[BB], oB = GB[BB])
          }
          this.send(QB, oB), OB.length = 0, GB.length = 0
        }
        this.holding = !1
      }
      AP() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const BB = this.freed;
        for (let OB = 0; OB < BB.length; OB += 2) this.JZ.free(BB[OB] / bo, BB[OB + 1] / bo);
        BB.length = 0
      }
      send(BB, OB) {
        this.device.queue.writeBuffer(this.gpu, BB, this.bytes.buffer, BB, OB - BB);
        for (const GB of this.replaced) {
          const YB = Math.min(OB, GB.size);
          YB > BB && this.device.queue.writeBuffer(GB, BB, this.bytes.buffer, BB, YB - BB)
        }
      }
      markDirty(BB, OB) {
        BB &= -4, OB = OB + 3 & -4, this.holding ? (this.dirtyStarts.push(BB), this.dirtyEnds.push(OB)) : this.send(BB, OB)
      }
      grow(BB) {
        const OB = this.JZ.CP,
          GB = Math.max(2 * OB, BB),
          YB = new Uint8Array(GB * bo);
        YB.set(this.bytes);
        const DB = this.gpu;
        this.gpu = this.createGpu(YB.byteLength), this.bytes = YB, this.words = new Uint32Array(YB.buffer), this.JZ.grow(GB), DB && (this.replaced.push(DB), this.onReplaced(DB)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, OB * bo)
      }
      createGpu(BB) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: BB,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Ho(BB) {
      return Array.isArray(BB) ? new Float32Array(BB) : BB
    }

    function vo(BB, OB, GB, YB, DB) {
      const QB = bB(DB),
        oB = Math.min(DB, YB.byteLength);
      if (QB === oB && YB.byteOffset % 4 === 0) return void BB.queue.writeBuffer(OB, GB, YB.buffer, YB.byteOffset, QB);
      const jB = new Uint8Array(QB);
      jB.set(new Uint8Array(YB.buffer, YB.byteOffset, oB)), BB.queue.writeBuffer(OB, GB, jB)
    }

    function so(BB, OB, GB) {
      const YB = "linear",
        DB = "nearest";
      let QB = DB,
        oB = DB,
        jB = "nearest",
        yB = !OB;
      switch (BB) {
        case 11:
          QB = YB, oB = YB;
          break;
        case 3:
          QB = YB, oB = YB, jB = OB ? "linear" : "nearest";
          break;
        case 8:
          jB = OB ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          oB = YB;
          break;
        case 6:
          oB = YB, jB = OB ? "linear" : "nearest";
          break;
        case 7:
          oB = YB, yB = !0;
          break;
        case 9:
          QB = YB;
          break;
        case 10:
          QB = YB, jB = OB ? "linear" : "nearest";
          break;
        case 2:
          QB = YB, oB = YB, GB > 1 ? (jB = "linear", yB = !1) : yB = !0;
          break;
        case 12:
          QB = YB, yB = !0;
          break;
        default:
          yB = !0
      }
      return GB > 1 && !yB ? {
        magFilter: YB,
        minFilter: YB,
        mipmapFilter: "linear",
        maxAnisotropy: GB
      } : {
        magFilter: QB,
        minFilter: oB,
        mipmapFilter: jB,
        ...yB ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function xo(BB) {
      return 0 === BB ? "clamp-to-edge" : 2 === BB ? "mirror-repeat" : "repeat"
    }
    class to {
      constructor(BB, OB) {
        let {
          vertexArena: GB = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = BB, this.device = OB, this.buffers = new WeakMap, this.lBB = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = GB ? this.createArena() : null
      }
      createArena() {
        return new Co(this.device, (BB => {
          var OB;
          null === (OB = this.onDestroy) || void 0 === OB || OB.call(this, BB), this.gpuBuffersVersion++
        }))
      }
      rebind(BB, OB) {
        this.engine = BB, this.device = OB, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const GB of this.liveUploads) GB.rebind();
        for (const GB of this.rebindWaiters.splice(0)) GB()
      }
      flushUploads() {
        var BB;
        null === (BB = this.arena) || void 0 === BB || BB.flush()
      }
      endUploadFrame() {
        var BB;
        null === (BB = this.arena) || void 0 === BB || BB.AP()
      }
      vertexBufferCreated(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GB ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(BB);
        const DB = Ho(OB);
        BB.CP = DB.byteLength, this.buffers.set(BB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: GB && null !== this.arena,
          pending: DB,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: YB
        })
      }
      vertexBufferUpdated(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        const DB = this.buffers.get(BB);
        if (!DB) return;
        const QB = Ho(OB),
          oB = void 0 === YB ? QB.byteLength : Math.min(YB, QB.byteLength);
        this.update(DB, QB, GB, oB)
      }
      vertexBufferFloatsUpdated(BB, OB, GB, YB) {
        const DB = this.buffers.get(BB);
        if (!DB) return;
        const QB = GB * Float32Array.BYTES_PER_ELEMENT,
          oB = (YB - GB) * Float32Array.BYTES_PER_ELEMENT;
        DB.slot >= 0 && oB > 0 && QB + oB <= DB.size ? this.writeSlot(DB, QB, OB, OB.byteOffset + QB, oB, !1) : DB.gpu && oB > 0 && QB + oB <= DB.gpu.size ? this.device.queue.writeBuffer(DB.gpu, QB, OB.buffer, OB.byteOffset + QB, oB) : this.update(DB, OB.subarray(GB, YB), QB, oB)
      }
      indexBufferCreated(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(BB);
        const YB = function(BB) {
          if (BB instanceof Uint16Array || BB instanceof Uint32Array) return BB;
          for (let OB = 0; OB < BB.length; OB++)
            if (BB[OB] >= 65535) return new Uint32Array(BB);
          return new Uint16Array(BB)
        }(OB);
        BB.is32Bits = 4 === YB.BYTES_PER_ELEMENT, BB.CP = YB.byteLength, this.buffers.set(BB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: YB,
          ownsPending: YB !== OB,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: GB
        })
      }
      bufferDeleted(BB) {
        const OB = this.buffers.get(BB);
        null !== OB && void 0 !== OB && OB.gpu ? (this.destroyBuffer(OB.gpu), this.gpuBuffersVersion++) : OB && OB.slot >= 0 && (this.arena.free(OB.slot, OB.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(BB)
      }
      update(BB, OB, GB, YB) {
        if (BB.slot >= 0) this.updateSlot(BB, OB, GB, YB);
        else if (BB.gpu) {
          if (GB + bB(YB) > BB.gpu.size) {
            const OB = this.device.createBuffer({
                label: BB.label,
                size: bB(Math.max(2 * BB.gpu.size, GB + YB)),
                usage: BB.usage | GPUBufferUsage.COPY_SRC
              }),
              DB = this.device.createCommandEncoder();
            DB.copyBufferToBuffer(BB.gpu, 0, OB, 0, BB.gpu.size), this.device.queue.submit([DB.finish()]), this.destroyBuffer(BB.gpu), this.gpuBuffersVersion++, BB.gpu = OB
          }
          vo(this.device, BB.gpu, GB, OB, YB)
        } else {
          const QB = new Uint8Array(OB.buffer, OB.byteOffset, YB),
            oB = BB.pending;
          if (oB && BB.ownsPending && GB + YB <= oB.byteLength) new Uint8Array(oB.buffer, oB.byteOffset, oB.byteLength).set(QB, GB);
          else if (oB && 0 === GB && YB === oB.byteLength && OB.byteLength === YB) BB.pending = OB, BB.ownsPending = !1;
          else {
            var DB;
            const OB = new Uint8Array(Math.max(null !== (DB = null === oB || void 0 === oB ? void 0 : oB.byteLength) && void 0 !== DB ? DB : 0, GB + YB));
            oB && OB.set(new Uint8Array(oB.buffer, oB.byteOffset, oB.byteLength)), OB.set(QB, GB), BB.pending = OB, BB.ownsPending = !0
          }
        }
      }
      updateSlot(BB, OB, GB, YB) {
        const DB = this.arena;
        GB + bB(YB) > BB.size && (BB.size = bB(Math.max(2 * BB.size, GB + YB)), DB.growTo(BB.slot + BB.size), this.gpuBuffersVersion++), 0 === YB ? this.writeSlot(BB, GB, Oj, 0, 4, !1) : this.writeSlot(BB, GB, OB, OB.byteOffset, YB, !0)
      }
      writeSlot(BB, OB, GB, YB, DB, QB) {
        const oB = OB + (QB ? bB(DB) : DB);
        oB > BB.slotBytes && this.moveSlot(BB, oB), this.arena.write(BB.slot + OB, GB, YB, DB, QB)
      }
      moveSlot(BB, OB) {
        const GB = this.arena,
          YB = Co.slotBytes(Math.max(OB, Math.min(2 * BB.slotBytes, BB.size))),
          DB = GB.allocate(YB, null, BB.size);
        GB.move(BB.slot, DB, BB.slotBytes), GB.free(BB.slot, BB.slotBytes), BB.slot = DB, BB.slotBytes = YB, this.gpuBuffersVersion++
      }
      cover(BB, OB) {
        const GB = this.buffers.get(BB);
        if (!GB || GB.slot < 0) return !1;
        const YB = Math.min(OB, GB.size);
        return !(YB <= GB.slotBytes) && (this.moveSlot(GB, YB), !0)
      }
      destroyBuffer(BB) {
        var OB;
        null === (OB = this.onDestroy) || void 0 === OB || OB.call(this, BB), BB.destroy()
      }
      gpuBuffer(BB) {
        const OB = this.buffers.get(BB);
        if (!OB) return null;
        if (OB.slot >= 0) return this.arena.buffer;
        if (OB.arena && OB.pending) {
          const BB = OB.pending,
            GB = this.arena;
          return OB.size = bB(BB.byteLength), OB.slotBytes = Co.slotBytes(function(BB) {
            const OB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength);
            let GB = OB.length;
            if (BB.byteOffset % 4 === 0) {
              for (; GB % 4 !== 0 && 0 === OB[GB - 1];) GB--;
              if (GB % 4 === 0) {
                const OB = new Uint32Array(BB.buffer, BB.byteOffset, GB / 4);
                let YB = OB.length;
                for (; YB > 0 && 0 === OB[YB - 1];) YB--;
                GB = 4 * YB
              }
            }
            for (; GB > 0 && 0 === OB[GB - 1];) GB--;
            return GB
          }(BB)), OB.slot = GB.allocate(OB.slotBytes, BB, OB.size), OB.pending = null, GB.buffer
        }
        if (!OB.gpu && OB.pending) {
          const BB = OB.pending;
          OB.gpu = this.device.createBuffer({
            label: OB.label,
            size: bB(BB.byteLength),
            usage: OB.usage
          }), vo(this.device, OB.gpu, 0, BB, BB.byteLength), OB.pending = null
        }
        return OB.gpu
      }
      gpuOffset(BB) {
        var OB, GB;
        const YB = null !== (OB = null === (GB = this.buffers.get(BB)) || void 0 === GB ? void 0 : GB.slot) && void 0 !== OB ? OB : -1;
        return YB < 0 ? 0 : YB
      }
      gpuEnd(BB) {
        var OB, GB;
        const YB = this.buffers.get(BB);
        return YB ? YB.slot >= 0 ? YB.slot + YB.size : null !== (OB = null === (GB = YB.gpu) || void 0 === GB ? void 0 : GB.size) && void 0 !== OB ? OB : 0 : 0
      }
      vertexInput(BB, OB, GB) {
        var YB, DB, QB, oB;
        return null !== (YB = null !== (DB = GB && this.modelInput(GB, OB)) && void 0 !== DB ? DB : null === (QB = null !== (oB = this.lBB.get(BB)) && void 0 !== oB ? oB : this.batchUploads.get(BB)) || void 0 === QB ? void 0 : QB.inputs[OB]) && void 0 !== YB ? YB : null
      }
      modelInput(BB, OB) {
        const GB = this.geometrySlot(BB);
        let YB = GB.inputs.get(OB);
        if (void 0 === YB) {
          const DB = BB.vertexAttributes.find((BB => BB.kind === OB));
          YB = DB ? new pO(this.modelKey(GB, DB.data, !1), DB.offset, DB.stride, DB.components, !1, DB.glType, DB.isNormalized) : null, GB.inputs.set(OB, YB)
        }
        return YB
      }
      modelIndex(BB) {
        return BB.indexData && this.modelKey(this.geometrySlot(BB), BB.indexData, !0)
      }
      geometrySlot(BB) {
        var OB;
        let GB = BB.gpu[dB.f.lite];
        if ((null === (OB = GB) || void 0 === OB ? void 0 : OB.epoch) !== this.epoch) {
          const OB = new Map,
            YB = () => {
              for (const BB of OB.values()) this.bufferDeleted(BB)
            },
            DB = BB => {
              const GB = OB.get(BB);
              GB && this.vertexBufferUpdated(GB, BB)
            };
          GB = {
            keys: OB,
            inputs: new Map,
            release: YB,
            updated: DB,
            epoch: this.epoch
          }, BB.gpu[dB.f.lite] = GB
        }
        return GB
      }
      modelKey(BB, OB, GB) {
        let YB = BB.keys.get(OB);
        if (!YB) {
          if (GB) {
            const BB = {
              CP: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(BB, OB, "model-indices"), YB = BB
          } else YB = {
            CP: 0
          }, this.vertexBufferCreated(YB, OB, !1, "model-vertices");
          BB.keys.set(OB, YB)
        }
        return YB
      }
      indexFormat(BB) {
        return BB.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(BB, OB) {
        --BB.refs > 0 || (this.releaseTexture(BB), ao(BB.images), null !== OB && this.textures.delete(OB))
      }
      load(BB, OB) {
        const {
          epoch: GB
        } = this, YB = OB.decoded = async function(BB) {
          if ("cube" === BB.kind) return async function(BB) {
            if (6 !== BB.length) throw new Error(`${BB.length} files where six faces were expected`);
            const OB = await eo(BB.map((BB => tB(BB)))),
              GB = OB[0].width;
            return eo(OB.map((async BB => {
              if (BB.width === GB && BB.height === GB) return BB;
              try {
                return await createImageBitmap(BB, {
                  ...sB,
                  resizeWidth: GB,
                  resizeHeight: GB
                })
              } finally {
                BB.close()
              }
            })))
          }(BB.files);
          if ("data" === BB.kind && BB.data) return [await createImageBitmap(new Blob([BB.data]), sB)];
          return [await tB(Bj(BB))]
        }(BB.source).then((BB => {
          0 === OB.refs || GB !== this.epoch ? ao(BB) : OB.images = BB
        }));
        this.track(OB, Bj(BB.source), YB, (() => {
          OB.wanted && !OB.failed && OB.refs > 0 && this.upload(BB, OB)
        }))
      }
      canvasUpdated(BB, OB, GB) {
        const {
          state: YB
        } = this.textureSlot(BB);
        YB.dynamicSource = {
          invertY: OB,
          premultiplied: GB
        }, YB.dynamic && this.pushDynamic(BB.source, YB)
      }
      async atlasArrays(BB) {
        const {
          device: OB,
          epoch: GB
        } = this;
        let YB;
        try {
          YB = await OO(OB, BB)
        } catch (QB) {
          if (GB === this.epoch) {
            if (!JO(OB)) throw QB;
            await new Promise((BB => {
              this.rebindWaiters.push(BB)
            }))
          }
          return this.atlasArrays(BB)
        }
        if (YB.forEach(((OB, GB) => {
            this.atlasSources.has(OB) || this.atlasSources.set(OB, {
              sources: BB,
              index: GB,
              stride: YB[0].layers
            })
          })), GB !== this.epoch) return YB;
        const DB = (0, ro.c)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const oB of YB) this.atlasBindings.has(oB) || this.atlasBindings.set(oB, {
          view: oB.texture.createView({
            dimension: "2d-array"
          }),
          sampler: DB
        });
        return YB
      }
      boundTexture(BB) {
        const OB = this.atlasBindings.get(BB);
        if (OB) return OB;
        const GB = this.atlasSources.get(BB);
        if (GB) return this.rebuildAtlas(BB, GB), null;
        const YB = BB;
        if (YB.released) return null;
        const DB = this.textureSlot(YB, !0),
          {
            state: QB
          } = DB;
        if (!QB.view && (QB.wanted = !0, QB.loading || QB.failed || this.upload(YB, QB), !QB.view)) return null;
        const oB = this.chosenSampler(YB, DB),
          jB = DB.bound;
        return jB && jB.view === QB.view && jB.sampler === oB ? jB : (DB.bound = {
          view: QB.view,
          sampler: oB
        }, DB.bound)
      }
      rebuildAtlas(BB, OB) {
        let {
          sources: GB,
          index: YB,
          stride: DB
        } = OB;
        if (this.atlasRebuilds.has(BB)) return;
        this.atlasRebuilds.add(BB);
        const {
          epoch: QB
        } = this;
        this.atlasArrays(GB).then((OB => {
          OB[0].layers === DB && OB[YB] ? QB === this.epoch && this.atlasBindings.set(BB, this.atlasBindings.get(OB[YB])) : console.error(`Lite: the new device splits the atlas ${xB(GB.urls[0])} into other arrays than its materials read`)
        }), (BB => {
          console.error(`Lite: could not build the atlas ${xB(GB.urls[0])} again on a new device`, BB)
        }))
      }
      textureLoaded(BB) {
        var OB, GB;
        return null !== (OB = null === (GB = this.heldSlot(BB)) || void 0 === GB ? void 0 : GB.state.decoded) && void 0 !== OB ? OB : null
      }
      textureFailed(BB) {
        var OB;
        return !0 === (null === (OB = this.heldSlot(BB)) || void 0 === OB ? void 0 : OB.state.failed)
      }
      heldSlot(BB) {
        const OB = BB.gpu[dB.f.lite];
        return (null === OB || void 0 === OB ? void 0 : OB.epoch) === this.epoch ? OB : void 0
      }
      chosenSampler(BB, OB) {
        const {
          samplingMode: GB,
          wrapU: YB,
          wrapV: DB
        } = BB.sampler, QB = OB.state.hasMips, oB = function(BB, OB) {
          const {
            bilinear: GB,
            trilinear: YB
          } = dB.g;
          return !OB && BB !== GB || 11 !== BB && BB !== YB && BB !== GB ? 1 : 4
        }(GB, QB), jB = OB.sampler;
        if (jB && jB.samplingMode === GB && jB.hasMips === QB && jB.anisotropy === oB && jB.wrapU === YB && jB.wrapV === DB) return jB.sampler;
        const yB = this.samplerFor(GB, QB, oB, YB, DB);
        return OB.sampler = {
          samplingMode: GB,
          hasMips: QB,
          anisotropy: oB,
          wrapU: YB,
          wrapV: DB,
          sampler: yB
        }, yB
      }
      releaseTexture(BB) {
        var OB, GB;
        BB.view && (null === (GB = this.onDestroy) || void 0 === GB || GB.call(this, BB.view));
        null === (OB = BB.destroy) || void 0 === OB || OB.call(BB)
      }
      textureSlot(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = BB.gpu[dB.f.lite];
        if ((null === GB || void 0 === GB ? void 0 : GB.epoch) === this.epoch) return GB;
        const YB = function(BB) {
          let {
            source: OB,
            sampler: GB
          } = BB;
          return "canvas" === OB.kind ? null : `${OB.kind}|${Bj(OB)}|${GB.noMipmap}|${GB.samplingMode}|${GB.invertY}`
        }(BB);
        let DB = null === YB ? void 0 : this.textures.get(YB);
        var QB;
        DB || (DB = {
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
          dynamicSource: null !== (QB = null === GB || void 0 === GB ? void 0 : GB.state.dynamicSource) && void 0 !== QB ? QB : null
        }, null !== YB && (this.textures.set(YB, DB), this.load(BB, DB), OB && !GB && this.firstBindDecodes++));
        DB.refs++;
        const oB = DB,
          {
            epoch: jB
          } = this,
          yB = {
            state: DB,
            bound: null,
            sampler: null,
            release: () => {
              jB === this.epoch && this.releaseSlot(oB, YB)
            },
            epoch: jB
          };
        return BB.gpu[dB.f.lite] = yB, yB
      }
      samplerFor(BB, OB, GB, YB, DB) {
        const QB = `${BB}|${OB}|${GB}|${YB}|${DB}`;
        let oB = this.samplers.get(QB);
        if (!oB) {
          const jB = {
            ...so(BB, OB, GB),
            addressModeU: xo(YB),
            addressModeV: xo(DB)
          };
          oB = (0, ro.c)(this.engine, jB), this.samplers.set(QB, oB)
        }
        return oB
      }
      upload(BB, OB) {
        const {
          source: GB,
          sampler: YB
        } = BB;
        OB.hasMips = !YB.noMipmap, "canvas" === GB.kind ? this.createDynamic(GB, OB) : "cube" === GB.kind ? this.uploadCube(OB, GB.luminance) : this.uploadImage(OB, !0 === YB.invertY, GB.url)
      }
      uploadImage(BB, OB, GB) {
        const [YB] = BB.images;
        BB.images = null;
        const {
          epoch: DB
        } = this, QB = (0, Xo.e)(this.engine, YB, {
          mipMaps: BB.hasMips,
          invertY: OB,
          srgb: !1
        }).then((OB => {
          YB.close(), 0 !== BB.refs && DB === this.epoch ? (BB.view = OB.view, BB.destroy = OB.texture.destroy.bind(OB.texture)) : OB.texture.destroy()
        }));
        this.track(BB, GB, QB)
      }
      track(BB, OB, GB, YB) {
        const {
          epoch: DB
        } = this;
        BB.loading = !0, this.pending++, GB.catch((GB => {
          DB === this.epoch && (BB.failed = !0, console.warn(`Lite: could not load texture ${xB(OB)}`, GB))
        })).finally((() => {
          DB === this.epoch && (BB.loading = !1, this.pending--, null === YB || void 0 === YB || YB())
        }))
      }
      uploadCube(BB, OB) {
        const GB = BB.images;
        BB.images = null;
        const YB = ho(this.engine, this.device, GB, (0, dB.u)(OB), BB.hasMips);
        BB.view = YB.createView({
          dimension: "cube"
        }), BB.destroy = () => {
          YB.destroy()
        }
      }
      createDynamic(BB, OB) {
        const {
          canvas: GB
        } = BB, YB = (0, wo.e)(this.engine, Math.max(1, GB.width), Math.max(1, GB.height), {
          mipMaps: OB.hasMips,
          srgb: !1
        });
        OB.dynamic = YB, OB.view = YB.view, OB.destroy = () => {
          YB.texture.destroy()
        }, this.pushDynamic(BB, OB)
      }
      pushDynamic(BB, OB) {
        const GB = OB.dynamicSource,
          YB = OB.dynamic,
          {
            canvas: DB
          } = BB;
        if (GB && YB && 0 !== DB.width && 0 !== DB.height) return DB.width !== YB.width || DB.height !== YB.height ? (this.releaseTexture(OB), OB.dynamic = null, OB.view = null, void this.createDynamic(BB, OB)) : void(0, wo.i)(this.engine, YB, DB, {
          invertY: GB.invertY,
          premultiplyAlpha: GB.premultiplied
        })
      }
    }

    function Bj(BB) {
      return "cube" === BB.kind ? BB.rootUrl : "canvas" === BB.kind ? "canvas" : BB.url
    }
    const Oj = new Uint8Array(4);
    var Gj = GB(39446);

    function Yj(BB) {
      const OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      BB._colorAttachment.storeOp = BB._targetSignature._sampleCount > 1 ? OB : "store";
      const GB = BB._renderPassDescriptor.depthStencilAttachment;
      GB && (GB.depthStoreOp = OB, GB.stencilStoreOp && (GB.stencilStoreOp = OB))
    }
    var Dj = GB(38432),
      Qj = GB(38496),
      oj = GB(38074),
      jj = GB(40363);
    const yj = new Float64Array([1, 1, 1]),
      Jj = new Float64Array([0, 1, 0]),
      Mj = new Float64Array(4),
      Pj = new Float32Array(16),
      zj = new Float64Array(3),
      lj = new Float64Array(4);

    function pj(BB, OB, GB) {
      BB.fov = OB.fov, BB.near = OB.near, BB.far = OB.far, BB.renderWidth = GB.renderWidth, BB.renderHeight = GB.renderHeight, (0, oj.v)(OB.holderRotation, 0, Mj, 0), (0, oj.e)(yj, 0, Mj, 0, OB.holderPosition, 0, Pj);
      const YB = OB.q_;
      zj[0] = YB[0], zj[1] = YB[1], zj[2] = YB[2] + 1;
      const DB = BB.viewMatrix;
      (0, oj.n)(YB, zj, Jj, DB), (0, oj.j)(DB, 0, DB), (0, oj.o)(DB, Pj, 0, DB), (0, oj.j)(DB, 0, DB);
      const QB = BB.worldMatrix;
      (0, oj.j)(DB, 0, QB), BB.eye[0] = QB[12], BB.eye[1] = QB[13], BB.eye[2] = QB[14], lj[0] = BB.fov, lj[1] = BB.renderWidth / BB.renderHeight, lj[2] = BB.near, lj[3] = BB.far, (0, oj.r)(lj, BB.projectionMatrix), (0, oj.o)(DB, BB.projectionMatrix, 0, BB.viewProjectionMatrix), (0, jj.f)(BB.viewProjectionMatrix, BB.frustum)
    }

    function qj(BB, OB) {
      let GB = BB.frustumPlanes;
      GB || (GB = BB.frustumPlanes = Array.from({
        length: 6
      }, (() => new Dj.c(0, 0, 0, 0))));
      for (let YB = 0; YB < 6; YB++) {
        const BB = GB[YB].normal;
        BB._x = OB[4 * YB], BB._y = OB[4 * YB + 1], BB._z = OB[4 * YB + 2], BB._isDirty = !0, GB[YB].d = OB[4 * YB + 3]
      }
    }

    function Zj(BB, OB) {
      const GB = OB.clearColor;
      BB.clearColour[0] = GB.r, BB.clearColour[1] = GB.g, BB.clearColour[2] = GB.b, BB.clearColour[3] = GB.a;
      const YB = OB.ambientColor;
      BB.ambientColour[0] = YB.r, BB.ambientColour[1] = YB.g, BB.ambientColour[2] = YB.b, BB.animationRatio = OB.animationRatio, BB.frameId = OB.frameId, BB.version++
    }

    function Nj(BB) {
      const OB = BB.model.view;
      return OB.animTick = (0, Qj.g)(), OB.timeMs = performance.now(), Zj(OB, BB.eq), BB.model.update(OB.frameId), OB
    }

    function Rj(BB) {
      const OB = BB.eq,
        {
          view: GB,
          p_: YB
        } = BB.model;
      return pj(GB, YB, OB.Lp()), OB.onBeforeRenderObservable.notifyObservers(OB), qj(OB, GB.frustum), OB.onBeforeCameraRenderObservable.notifyObservers(OB.activeCamera), Nj(BB)
    }
    var Wj = GB(38030),
      Aj = GB(38138),
      Vj = GB(38491);

    function Sj(BB) {
      var OB, GB;
      const YB = (0, fB.U)(BB);
      if (!YB || YB.diffuseTexture && (0, Vj.h)(BB)) return null;
      const DB = null === (OB = (0, fB.A)(YB, nB.f.name)) || void 0 === OB ? void 0 : OB.state,
        QB = null === (GB = (0, fB.A)(YB, xQ.e.name)) || void 0 === GB ? void 0 : GB.state,
        oB = new Float32Array(16);
      return function(BB, OB, GB, YB) {
        var DB, QB;
        const oB = LY;
        YB.set(BB.diffuseColor, oB.diffuse), YB[oB.diffuse + 3] = BB.alpha, YB.set(BB.ambientColor, oB.ambientAndCutoff), YB[oB.ambientAndCutoff + 3] = BB.alphaCutOff, YB.set(BB.emissiveColor, oB.emissiveAndLevel), YB[oB.emissiveAndLevel + 3] = null !== (DB = null === (QB = BB.diffuseTexture) || void 0 === QB ? void 0 : QB.level) && void 0 !== DB ? DB : 1, null !== OB && void 0 !== OB && OB.animDataPerTex ? (YB[oB.anim + 1] = Qj.c, YB[oB.anim + 2] = OB.animDataPerTex.length / 3 - 1) : GB && (YB[oB.anim + 1] = GB.numAnimStates, YB[oB.anim + 2] = GB.ticksPerAnimState)
      }(YB, DB, QB, oB), {
        model: YB,
        atlas: DB,
        texture: DB ? "atlas" : YB.diffuseTexture ? "single" : "none",
        animated: DB ? !!DB.animDataPerTex : !!QB,
        liquid: (0, Vj.l)(BB),
        customRenderMat: (0, Vj.h)(BB),
        uniformData: oB
      }
    }
    var nj = GB(3200);
    class Uj {
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
    class fj {
      constructor(BB, OB) {
        this.arena = BB, this.JZ = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.JZ = new To(OB);
        const GB = new Uj(OB);
        GB.buffer = this.createBuffer(GB, !1), this.backings.push(GB), this.refresh()
      }
      get CP() {
        return this.JZ.CP
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
        for (const OB of this.backings) BB += OB.units * (this.arena.unitBytes + (OB.twin ? this.arena.twinUnitBytes : 0));
        return BB
      }
      holds(BB) {
        return BB.start + BB.length <= this.usable
      }
      lost(BB) {
        return this.dropped || BB.start + BB.length > this.CP
      }
      write(BB, OB) {
        const {
          device: GB,
          unitBytes: YB
        } = this.arena;
        for (const DB of this.backings) {
          const QB = (DB.units - BB.start) * YB;
          QB > 0 && GB.queue.writeBuffer(DB.buffer, BB.start * YB, OB, 0, Math.min(OB.byteLength, QB))
        }
      }
      writeLight(BB, OB) {
        const {
          device: GB,
          twinUnitBytes: YB,
          verticesPerUnit: DB
        } = this.arena, {
          light: QB,
          count: oB
        } = this.arena.twinLight(OB, Math.min(OB.length, BB.length * DB));
        for (const jB of this.backings) {
          jB.twin || (jB.twin = this.createBuffer(jB, !0));
          const OB = (jB.units - BB.start) * DB;
          OB > 0 && GB.queue.writeBuffer(jB.twin, BB.start * YB, QB, 0, Math.min(oB, OB))
        }
      }
      grow(BB) {
        this.arena.assertNotDrawing();
        const {
          device: OB,
          unitBytes: GB,
          label: YB
        } = this.arena, DB = this.backings[this.backings.length - 1], QB = new Uj(BB), oB = OB.createCommandEncoder({
          label: `${YB}-grow`
        });
        QB.buffer = this.createBuffer(QB, !1), oB.copyBufferToBuffer(DB.buffer, 0, QB.buffer, 0, DB.units * GB), DB.twin && (QB.twin = this.createBuffer(QB, !0), oB.copyBufferToBuffer(DB.twin, 0, QB.twin, 0, DB.units * this.arena.twinUnitBytes)), OB.queue.submit([oB.finish()]), this.backings.push(QB), this.JZ.grow(BB)
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
      createBuffer(BB, OB) {
        const {
          device: GB,
          unitBytes: YB,
          twinUnitBytes: DB,
          usage: QB,
          label: oB
        } = this.arena;
        GB.pushErrorScope("out-of-memory");
        const jB = GB.createBuffer({
          label: OB ? `${oB}-light` : oB,
          size: BB.units * (OB ? DB : YB),
          usage: (OB ? this.arena.twinUsage : QB) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, GB.popErrorScope().then((GB => {
          this.arena.awaitingVerdict--, this.settle(BB, OB, !GB, !0)
        }), (GB => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${oB} buffer, taken as failed: ${String(GB)}`), this.settle(BB, OB, !1, !1)
        })), jB
      }
      settle(BB, OB, GB, YB) {
        const DB = this.backings.indexOf(BB);
        if (!(this.dropped || DB < 0)) {
          if (!GB) {
            if (YB && this.arena.ranOutOfMemory(BB.units, BB.units * (OB ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === DB) return void this.drop();
            for (const BB of this.backings.splice(DB)) BB.destroy();
            return this.JZ.truncate(this.backings[DB - 1].units), this.growable = !1, void this.promote()
          }
          OB ? BB.twinReady = !0 : (BB.bufferReady = !0, this.arena.allocatedBuffer(BB.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: BB
        } = this;
        let OB = 0;
        for (; OB + 1 < BB.length && BB[OB].ready && BB[OB + 1].ready;) OB++;
        for (const GB of BB.splice(0, OB)) GB.destroy();
        this.refresh()
      }
      refresh() {
        const BB = this.backings[0];
        this.buffer = BB.buffer, this.twin = BB.twinReady ? BB.twin : null, this.usable = !this.dropped && BB.bufferReady ? BB.units : 0
      }
    }
    class kj {
      constructor(BB, OB, GB, YB) {
        let {
          verticesPerUnit: DB = 1,
          twinUsage: QB = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = BB, this.unitBytes = OB, this.usage = GB, this.label = YB, this.pages = [], this.WP = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, IO.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), OB % 4 !== 0) throw new Error(`${YB}: ${OB}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = DB, this.twinUsage = QB, this.twinValueBytes = DB > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * DB
      }
      twinLight(BB, OB) {
        if (4 === this.twinValueBytes) return this.widened.length < OB && (this.widened = new Float32Array(Math.max(OB, 2 * this.widened.length))), this.widened.set(BB.subarray(0, OB)), {
          light: this.widened,
          count: OB
        };
        const GB = OB % this.verticesPerUnit;
        if (0 === GB) return {
          light: BB,
          count: OB
        };
        const YB = OB - GB + this.verticesPerUnit;
        return this.padded.length < YB && (this.padded = new Uint16Array(Math.max(YB, 2 * this.padded.length))), this.padded.set(BB.subarray(0, OB)), this.padded.fill(0, OB, YB), {
          light: this.padded,
          count: YB
        }
      }
      allocate(BB) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), BB > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const DB of this.pages) {
          const OB = DB.JZ.allocate(BB);
          if (OB >= 0) return {
            page: DB,
            start: OB,
            length: BB
          }
        }
        const OB = this.pages[this.pages.length - 1];
        if (null !== OB && void 0 !== OB && OB.canGrow) {
          const GB = Math.min(this.ceiling, Math.max(2 * OB.CP, OB.CP + BB));
          if (GB - OB.CP >= BB) return OB.grow(GB), {
            page: OB,
            start: OB.JZ.allocate(BB),
            length: BB
          }
        }
        OB && OB !== this.pages[0] && 0 === OB.JZ.used && OB.drop();
        const GB = Math.floor(1048576 / this.unitBytes),
          YB = new fj(this, Math.max(BB, Math.min(this.ceiling, GB)));
        return this.pages.push(YB), {
          page: YB,
          start: YB.JZ.allocate(BB),
          length: BB
        }
      }
      free(BB) {
        this.assertNotDrawing();
        const {
          page: OB
        } = BB;
        OB.JZ.free(BB.start, BB.length), 0 === OB.JZ.used && OB !== this.pages[0] && OB !== this.pages[this.pages.length - 1] && OB.drop()
      }
      retire() {
        for (const BB of this.pages) BB.retire()
      }
      remove(BB) {
        const OB = this.pages.indexOf(BB);
        OB >= 0 && this.pages.splice(OB, 1)
      }
      ranOutOfMemory(BB, OB) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${OB}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, BB), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, BB) / 2));
        const GB = performance.now();
        GB >= this.shortageUntil && (this.forgetFailedAt = GB + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = GB + 1e3)
      }
      allocatedBuffer(BB) {
        BB >= this.failed && (this.failed = 1 / 0);
        const OB = Math.min(2 * BB, Math.floor((BB + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, OB))
      }
      stats() {
        let BB = 0,
          OB = 0,
          GB = 0,
          YB = 0;
        for (const DB of this.pages) BB += DB.CP, OB += DB.JZ.used, GB += DB.hasTwin ? DB.CP * this.twinUnitBytes : 0, YB += DB.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: BB * this.unitBytes,
          usedBytes: OB * this.unitBytes,
          twinBytes: GB,
          allocatedBytes: YB
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: BB,
          maxStorageBufferBindingSize: OB
        } = this.device.limits;
        let GB = Math.floor(Math.min(67108864, BB) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (GB = Math.min(GB, Math.floor(OB / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (GB = Math.min(GB, Math.floor(OB / this.twinUnitBytes))), GB
      }
    }
    const dj = 16383;

    function Kj(BB, OB, GB, YB, DB) {
      let QB = 0;
      for (let oB = GB; oB < YB; oB += dj) BB.drawIndexed(6 * Math.min(dj, YB - oB), 1, 0, OB + 4 * oB, DB), QB++;
      return QB
    }
    class uj {
      constructor(BB, OB) {
        this.recordsGroup = OB, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const GB = CO.g.strideWithoutAtlas;
        this.vertexArena = new kj(BB, GB, GPUBufferUsage.VERTEX, `terrain-vertices-${GB}`), this.quadArena = new kj(BB, Aj.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const YB = (0, HO.f)(new Uint16Array(98298), dj);
        this.quadPattern = BB.createBuffer({
          label: "terrain-quad-pattern",
          size: YB.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), BB.queue.writeBuffer(this.quadPattern, 0, YB)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(BB, OB) {
        const GB = OB.packedVertices,
          YB = GB ? this.quadArena.allocate(BB.faceCount) : this.vertexArena.allocate(BB.vertexCount);
        if (!YB) return !1;
        BB.vertices = YB;
        const DB = GB ? new Uint8Array(GB.buffer, GB.byteOffset, GB.byteLength) : new Uint8Array(OB.vertices);
        return YB.page.write(YB, DB), !0
      }
      setLight(BB, OB) {
        const {
          vertices: GB
        } = BB;
        GB && 0 !== OB.length && GB.page.live && (OB.length < BB.vertexCount ? GB.page.arena.warnOnce("shortLight", `a part's ${OB.length} light values are fewer than its ${BB.vertexCount} vertices, so its light is left as it was`) : (GB.page.writeLight(GB, OB), BB.lit = !0))
      }
      lightFullSky(BB, OB) {
        this.fullSky.length < OB && (this.fullSky = new Uint16Array(Math.max(OB, 4096)).fill(nj.e));
        for (const GB of BB) {
          const BB = GB.vertices;
          BB.page.live && (BB.page.writeLight(BB, this.fullSky), GB.lit = !0)
        }
      }
      backed(BB) {
        const {
          vertices: OB
        } = BB;
        return !!OB && OB.page.holds(OB)
      }
      lost(BB) {
        const {
          vertices: OB
        } = BB;
        return !!OB && OB.page.lost(OB)
      }
      release(BB) {
        BB.vertices && BB.vertices.page.arena.free(BB.vertices), BB.vertices = null, BB.lit = !1
      }
      setDrawing(BB) {
        this.forgetBound()
      }
      draw(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : OB.faceCount;
        const QB = OB.vertices,
          oB = QB.page,
          jB = GB ? oB.twin : null;
        if (!oB.holds(QB) || GB && !jB) return 0;
        const {
          verticesPerUnit: yB
        } = oB.arena;
        let JB = QB.start * yB;
        this.boundPattern || (BB.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const MB = YB + DB;
        if (yB > 1) return oB.buffer === this.boundRecords && jB === this.boundRecordsLight || (BB.setBindGroup(1, this.recordsGroup(oB.buffer, jB)), this.boundRecords = oB.buffer, this.boundRecordsLight = jB), Kj(BB, JB, YB, MB, OB.slot);
        oB.buffer !== this.boundVertices && (BB.setVertexBuffer(0, oB.buffer), this.boundVertices = oB.buffer), jB && jB !== this.boundLight && (BB.setVertexBuffer(1, jB), this.boundLight = jB);
        const PB = OB.faceCount;
        return MB <= PB ? Kj(BB, JB, YB, MB, OB.slot) : Kj(BB, JB, YB, PB, OB.slot) + Kj(BB, JB, Math.max(YB, PB) - PB, MB - PB, OB.slot)
      }
      get buffersAwaitingVerdict() {
        let BB = 0;
        for (const OB of this.arenas()) BB += OB.awaitingVerdict;
        return BB
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class mj {
      constructor(BB, OB, GB, YB) {
        this.device = BB, this.splitBefore = OB, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = BB.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const DB = BB.createShaderModule({
          label: "scene-depth-copy",
          code: (QB = GB._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${QB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var QB;
        BB.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: DB,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: DB,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((BB => {
          this.pipeline = BB, this.building = !1
        }), (BB => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", BB)
        })), GB._executeWithTransmission = () => this.execute(GB, YB)
      }
      get compiling() {
        return this.building
      }
      setWanted(BB) {
        this.wanted = BB
      }
      setPlanes(BB, OB) {
        BB === this.near && OB === this.far || (this.near = BB, this.far = OB, this.unproject[0] = BB / (OB - BB), this.unproject[1] = OB * BB / (OB - BB), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var BB, OB;
        return null !== (BB = null === (OB = this.copy) || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null
      }
      execute(BB, OB) {
        var GB;
        null === (GB = this.retired) || void 0 === GB || GB.destroy(), this.retired = null;
        const YB = SO(OB),
          DB = BB._transparentBindings,
          QB = this.wanted && this.pipeline ? this.splitIndex(DB) : -1,
          oB = BB._colorAttachment,
          jB = oB.resolveTarget;
        QB >= 0 && (oB.resolveTarget = void 0, Yj(BB, !0));
        let yB = YB.beginRenderPass(BB._renderPassDescriptor);
        yB.setBindGroup(0, BB._sceneBG);
        let JB = this.drawList(yB, OB, BB._opaqueBindings, 0, BB._opaqueBindings.length);
        if (JB += this.drawList(yB, OB, BB._directBindings, 0, BB._directBindings.length), JB += this.drawList(yB, OB, DB, 0, QB >= 0 ? QB : DB.length), yB.end(), QB < 0) return JB;
        Yj(BB);
        const MB = BB._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: PB,
            stencilLoadOp: zB
          } = MB,
          lB = oB.loadOp;
        oB.resolveTarget = jB;
        try {
          this.copyDepth(YB, BB), oB.loadOp = "load", MB.depthLoadOp = "load", zB && (MB.stencilLoadOp = "load"), yB = YB.beginRenderPass(BB._renderPassDescriptor), yB.setBindGroup(0, BB._sceneBG), JB += this.drawList(yB, OB, DB, QB, DB.length), yB.end()
        } finally {
          oB.loadOp = lB, MB.depthLoadOp = PB, MB.stencilLoadOp = zB
        }
        return JB
      }
      splitIndex(BB) {
        for (let OB = 0; OB < BB.length; OB++)
          if (BB[OB].renderable === this.splitBefore) return OB;
        return -1
      }
      drawList(BB, OB, GB, YB, DB) {
        let QB = null,
          oB = 0;
        for (let jB = YB; jB < DB; jB++) {
          const YB = GB[jB],
            DB = YB.renderable.mesh;
          DB && !1 === DB.visible || (YB.pipeline !== QB && (BB.setPipeline(YB.pipeline), QB = YB.pipeline), oB += YB.draw(BB, OB))
        }
        return oB
      }
      copyDepth(BB, OB) {
        var GB, YB;
        const DB = (null !== (GB = OB._config.depth) && void 0 !== GB ? GB : OB._config.rt)._depthTexture,
          QB = (null === (YB = this.copy) || void 0 === YB ? void 0 : YB.source) === DB ? this.copy : this.remakeCopy(DB),
          oB = BB.beginRenderPass(QB.pass);
        oB.setPipeline(this.pipeline), oB.setBindGroup(0, QB.bindGroup), oB.draw(3), oB.end()
      }
      remakeCopy(BB) {
        var OB, GB;
        this.retired = null !== (OB = null === (GB = this.copy) || void 0 === GB ? void 0 : GB.texture) && void 0 !== OB ? OB : null;
        const YB = this.device.createTexture({
            label: "scene-depth",
            size: [BB.width, BB.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          DB = YB.createView(),
          QB = this.device.createBindGroup({
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
          oB = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: DB,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: BB,
          texture: YB,
          view: DB,
          bindGroup: QB,
          pass: oB
        }, this.copy
      }
    }
    const Ij = "rgba8unorm";

    function Fj(BB) {
      return BB ? 15 : 1
    }
    class ij {
      constructor(BB, OB, GB, YB) {
        this.device = BB, this.terrain = YB, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = OB._targetSignature._sampleCount > 1, this.cameraBuffer = BB.createBuffer({
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
        const DB = BB.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = BB.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: DB,
          entries: []
        });
        const QB = BB.createShaderModule({
          label: "sun-shadow-mask",
          code: (oB = this.edge, `${(0,vO.w)()}${jY({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${oB?vG:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Fj(oB)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${oB?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var oB;
        BB.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: BB.createPipelineLayout({
            bindGroupLayouts: [this.layout, DB, DB, aQ(BB, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: QB,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: QB,
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
        const jB = OB._executeWithTransmission;
        OB._executeWithTransmission = BB => this.execute(OB, GB, (() => jB ? jB(BB) : function(BB, OB) {
          const GB = SO(OB).beginRenderPass(BB._renderPassDescriptor);
          GB.setBindGroup(0, BB._sceneBG);
          let YB = Lj(GB, OB, BB._opaqueBindings);
          return YB += Lj(GB, OB, BB._directBindings), YB += Lj(GB, OB, BB._transparentBindings), GB.end(), YB
        }(OB, GB)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var BB, OB;
        return null !== (BB = null === (OB = this.targets) || void 0 === OB ? void 0 : OB.maskView) && void 0 !== BB ? BB : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(BB) {
        ! function(BB, OB) {
          const GB = BB.worldMatrix,
            YB = BB.projectionMatrix,
            DB = 1 / YB[0],
            QB = 1 / YB[5],
            oB = BB.far * BB.near / (BB.far - BB.near);
          OB[0] = BB.eye[0], OB[1] = BB.eye[1], OB[2] = BB.eye[2], OB[3] = 2 ** -23 / oB, OB[4] = GB[0] * DB, OB[5] = GB[1] * DB, OB[6] = GB[2] * DB, OB[7] = oB, OB[8] = GB[4] * QB, OB[9] = GB[5] * QB, OB[10] = GB[6] * QB, OB[11] = BB.near / (BB.far - BB.near), OB[12] = GB[8], OB[13] = GB[9], OB[14] = GB[10], OB[15] = 0
        }(BB, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(BB, OB, GB) {
        if (this.retire(), !this.terrain.readsMask) return GB();
        const YB = this.targetsFor(BB),
          DB = SO(OB),
          QB = BB._renderPassDescriptor.depthStencilAttachment;
        this.edge || (YB.prepass.depthStencilAttachment.view = QB.view);
        const oB = this.terrain.drawPrepass(DB, YB.prepass, BB._sceneBG);
        if (0 === oB) return GB();
        if (this.trace(DB, YB), this.edge) return oB + 1 + GB();
        const {
          depthLoadOp: jB,
          stencilLoadOp: yB
        } = QB;
        QB.depthLoadOp = "load", yB && (QB.stencilLoadOp = "load");
        try {
          return oB + 1 + GB()
        } finally {
          QB.depthLoadOp = jB, QB.stencilLoadOp = yB
        }
      }
      trace(BB, OB) {
        const GB = this.terrain.sunShadowGroup(),
          YB = BB.beginRenderPass(OB.trace);
        this.pipeline && GB && (YB.setPipeline(this.pipeline), YB.setBindGroup(0, OB.bindGroup), YB.setBindGroup(1, this.empty), YB.setBindGroup(2, this.empty), YB.setBindGroup(3, GB), YB.draw(3)), YB.end()
      }
      retire() {
        const BB = this.retired;
        var OB;
        BB && (BB.mask.destroy(), BB.normals.destroy(), null === (OB = BB.depth) || void 0 === OB || OB.destroy(), this.retired = null)
      }
      targetsFor(BB) {
        var OB, GB;
        const YB = (null !== (OB = BB._config.depth) && void 0 !== OB ? OB : BB._config.rt)._depthTexture;
        return (null === (GB = this.targets) || void 0 === GB ? void 0 : GB.source) === YB ? this.targets : this.remake(BB, YB)
      }
      remake(BB, OB) {
        var GB;
        this.retired = this.targets;
        const YB = [OB.width, OB.height],
          DB = this.device.createTexture({
            label: "sun-shadow-mask",
            size: YB,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          QB = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: YB,
            format: Ij,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          oB = null !== (GB = BB._targetSignature._depthStencilFormat) && void 0 !== GB ? GB : OB.format,
          jB = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: YB,
            format: oB,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          yB = BB._renderPassDescriptor.depthStencilAttachment,
          JB = oB.includes("stencil"),
          MB = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: QB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: jB ? jB.createView() : yB.view,
              depthClearValue: yB.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...JB ? {
                stencilClearValue: yB.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          PB = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== jB && void 0 !== jB ? jB : OB).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: QB.createView()
            }]
          }),
          zB = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: DB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Fj(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: OB,
          mask: DB,
          maskView: DB.createView(),
          normals: QB,
          depth: jB,
          bindGroup: PB,
          prepass: MB,
          trace: zB
        }, this.targets
      }
    }

    function Lj(BB, OB, GB) {
      let YB = null,
        DB = 0;
      for (const QB of GB) {
        const GB = QB.renderable.mesh;
        GB && !1 === GB.visible || (QB.pipeline !== YB && (BB.setPipeline(QB.pipeline), YB = QB.pipeline), DB += QB.draw(BB, OB))
      }
      return DB
    }
    const gj = 6e4,
      rj = {
        status: "ok"
      },
      Xj = {
        status: "skipped"
      };
    async function wj(BB, OB) {
      const {
        isCancelled: GB
      } = BB;
      if (GB()) return {
        status: "rB"
      };
      const {
        target: YB
      } = OB;
      if (!YB) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const DB = [],
        QB = Promise.all(Array.from(new Set(BB.materials), (async GB => {
          DB.push(await async function(BB, OB, GB, YB) {
            const DB = {
              lighting: BB.lighting,
              dirLightCount: Math.min(BB.dirLightCount, 4),
              zp: BB.runtime
            };
            try {
              const QB = OB.material(YB);
              return QB && IY(OB.programKey(QB, !1, DB)) ? (await QB.ready, BB.isCancelled() ? rj : QB.bindGroupLayout ? await async function(BB, OB, GB, YB) {
                const {
                  device: DB
                } = BB;
                let QB, oB;
                DB.pushErrorScope("validation");
                try {
                  QB = BB.pipelineBuild(OB, GB, YB)
                } finally {
                  oB = DB.popErrorScope().catch((() => null))
                }
                const [jB, yB] = await Promise.all([oB, QB.built.then((() => null), (BB => null !== BB && void 0 !== BB ? BB : new Error("pipeline failed")))]);
                if (!jB && !yB) return rj;
                const JB = await Ej(QB.module),
                  MB = JB.length > 0 ? JB.map((BB => `${QB.name} ${BB.lineNum}:${BB.linePos}: ${BB.message}`)).join("\n") : `${QB.name}: ${cj(null!==yB&&void 0!==yB?yB:jB)}`;
                return {
                  status: "failed",
                  material: OB.model.name,
                  message: MB
                }
              }(OB, QB, OB.programKey(QB, "none" !== QB.texture, DB), GB): (console.warn(`Shader pack: skipped the compile check for "${YB.name}", whose textures failed to load`), Xj)) : rj
            } catch (QB) {
              return {
                status: "failed",
                material: YB.name,
                message: cj(QB)
              }
            }
          }(BB, OB, YB, GB))
        }))),
        oB = function(BB, OB) {
          let GB, YB, DB = !1;
          const QB = new Promise((QB => {
            var oB;
            GB = setTimeout((() => {
              QB("timeout")
            }), null !== (oB = OB.timeoutMs) && void 0 !== oB ? oB : gj), YB = setInterval((() => {
              OB.isCancelled() && QB("rB")
            }), 50), BB.lost.then((() => {
              DB = !0, QB("lost")
            }))
          }));
          return {
            signal: QB,
            lost: () => DB,
            dispose: () => {
              clearTimeout(GB), clearInterval(YB)
            }
          }
        }(OB.device, BB);
      let jB;
      try {
        jB = await Promise.race([QB.then((() => "done")), oB.signal])
      } finally {
        oB.dispose()
      }
      if ("rB" === jB || GB()) return {
        status: "rB"
      };
      const yB = DB.find((BB => "failed" === BB.status));
      return yB && "lost" !== jB && !oB.lost() && await new Promise((BB => {
        setTimeout(BB, 0)
      })), "lost" === jB || oB.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : yB ? {
        status: "failed",
        failure: {
          material: yB.material,
          message: yB.message
        }
      } : "timeout" === jB ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(JB=BB.timeoutMs)&&void 0!==JB?JB:gj)/1e3} s`), {
        status: "skipped"
      }) : DB.some((BB => "skipped" === BB.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var JB
    }
    async function Ej(BB) {
      if (!BB) return [];
      try {
        return (await BB.getCompilationInfo()).messages.filter((BB => "error" === BB.type))
      } catch {
        return []
      }
    }

    function cj(BB) {
      var OB;
      return null !== (OB = null === BB || void 0 === BB ? void 0 : BB.message) && void 0 !== OB ? OB : String(BB)
    }

    function hj(BB, OB, GB, YB, DB) {
      IY(OB) ? Ej(YB).then((OB => {
        const [YB] = OB;
        MO(BB, "terrain", GB, DB, YB ? `${YB.lineNum}:${YB.linePos} error: ${YB.message}` : null)
      })) : MO(BB, "terrain", GB, DB)
    }
    var aj = GB(38140),
      ej = GB(38151),
      Tj = GB(38156),
      bj = GB(3187);

    function Cj(BB, OB, GB, YB, DB) {
      const QB = Math.hypot(GB[0], GB[1], GB[2]);
      if (!(QB > 0)) return;
      const oB = [GB[0] / QB, GB[1] / QB, GB[2] / QB],
        jB = [Math.floor(OB[0]), Math.floor(OB[1]), Math.floor(OB[2])],
        yB = [0, 0, 0],
        JB = [1 / 0, 1 / 0, 1 / 0],
        MB = [1 / 0, 1 / 0, 1 / 0];
      for (let lB = 0; lB < 3; lB++) oB[lB] > 0 ? (yB[lB] = 1, JB[lB] = (jB[lB] + 1 - OB[lB]) / oB[lB], MB[lB] = 1 / oB[lB]) : oB[lB] < 0 && (yB[lB] = -1, JB[lB] = (jB[lB] - OB[lB]) / oB[lB], MB[lB] = -1 / oB[lB]);
      const {
        pP: PB
      } = BB;
      let zB = BB.sH(jB[0], jB[1], jB[2]);
      for (;;) {
        const OB = JB[0] < JB[1] ? JB[0] < JB[2] ? 0 : 2 : JB[1] < JB[2] ? 1 : 2;
        if (JB[OB] > YB) return;
        const GB = yB[OB] > 0 ? jB[OB] + 1 : jB[OB];
        jB[OB] += yB[OB], JB[OB] += MB[OB];
        const QB = BB.sH(jB[0], jB[1], jB[2]),
          oB = QB !== zB && !(BB.opaque[zB] && BB.opaque[QB]);
        if (oB) {
          const YB = [jB[0], jB[1], jB[2]];
          YB[OB] = GB;
          const QB = Math.floor(YB[0] / PB),
            oB = Math.floor(YB[1] / PB),
            yB = Math.floor(YB[2] / PB);
          !BB.isDrawn(QB, oB, yB) && BB.hasParts(QB, oB, yB) && DB.add(`${QB},${oB},${yB}`)
        }
        if (oB && BB.occluders[QB]) return;
        zB = QB
      }
    }

    function Hj(BB, OB) {
      return BB.group - OB.group || BB.nearest - OB.nearest
    }
    class vj {
      constructor(BB, OB) {
        this.device = BB, this.vN = OB, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
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
        const OB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.next++;
        if (8 * OB >= this.data.length) {
          const BB = new Float32Array(2 * this.data.length);
          BB.set(this.data), this.data = BB, this.words = new Uint32Array(BB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.vN()
        }
        return OB
      }
      release(BB) {
        this.free.push(BB)
      }
      set(BB, OB, GB, YB, DB) {
        const QB = 8 * BB + hY;
        this.data[QB] = OB, this.data[QB + 1] = GB, this.data[QB + 2] = YB, this.setVisibility(BB, DB)
      }
      setVisibility(BB, OB) {
        this.data[8 * BB + aY] = OB, this.markDirty(BB, BB)
      }
      setFaces(BB, OB, GB) {
        const YB = 8 * BB;
        this.words[YB + eY] = OB, this.words[YB + TY] = GB, this.markDirty(BB, BB)
      }
      markDirty(BB, OB) {
        this.dirtyMin = Math.min(this.dirtyMin, BB), this.dirtyMax = Math.max(this.dirtyMax, OB)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const sj = cY,
      xj = !0;
    const tj = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: sj.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      By = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Oy {
      constructor(BB) {
        this.device = BB, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(iY), this.dirLightUniforms = this.frameUniforms.subarray(FY.dirLights, FY.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, IO.c)(), this.faceGroups = !0, this.visibilityGraph = xj, this.visCull = xj, this.visCheck = !1, this.visCullMinDistance = Tj.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Qy, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.zp = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new uj(BB, ((BB, OB) => this.recordsGroup(BB, OB))), this.slots = new vj(BB, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = nO(BB), this.frameLayout = BB.createBindGroupLayout({
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
          bind: (BB, OB) => this.createBinding(this.opaqueRenderable, OB, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (BB, OB) => this.createBinding(this.transparentRenderable, OB, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(BB, OB) {
        this.sceneDepth = new mj(this.device, this.transparentRenderable, BB, OB)
      }
      createFrameBindGroup() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== OB && void 0 !== OB ? OB : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(BB, OB) {
        const GB = null !== OB && void 0 !== OB ? OB : BB;
        let YB = this.recordsGroups.get(GB);
        return YB || (YB = this.createFrameBindGroup(BB, OB), this.recordsGroups.set(GB, YB)), YB
      }
      setChunkMesh(BB, OB, GB) {
        var YB;
        let DB = this.chunks.get(BB);
        DB ? this.geometry.release(DB) : (DB = {
          mesh: BB,
          slot: this.slots.allocate(),
          origin: [GB[0], GB[1], GB[2]],
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
        }, this.chunks.set(BB, DB), this.writeSlot(DB)), DB.material = BB.material ? this.materialFor(BB.material) : null, DB.packed = !!OB.packedVertices, DB.vertexCount = (0, Aj.f)(OB), DB.faceCount = DB.vertexCount / 4;
        const QB = null !== (YB = OB.faceGroups) && void 0 !== YB ? YB : null;
        if (DB.faceGroups = QB, QB) {
          const BB = aj.k;
          DB.planePX = QB[BB], DB.planeNX = QB[BB + 1], DB.planePY = QB[BB + 2], DB.planeNY = QB[BB + 3], DB.planePZ = QB[BB + 4], DB.planeNZ = QB[BB + 5]
        }
        this.drawWhole(DB), 0 !== DB.faceCount && (this.geometry.set(DB, OB) ? (DB.packed && this.slots.setFaces(DB.slot, DB.vertices.start + DB.faceCount, DB.faceCount), OB.Zp && this.setChunkMeshLight(BB, OB.Zp)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${DB.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(BB, OB) {
        const GB = this.chunks.get(BB);
        GB && this.geometry.setLight(GB, OB)
      }
      drawStats() {
        let BB = this.transparent.length;
        for (const OB of this.opaqueBatches) BB += OB.meshes.length;
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
        const OB = this.chunks.get(BB);
        OB && (this.geometry.release(OB), this.slots.release(OB.slot), this.chunks.delete(BB))
      }
      remeshLost(BB, OB) {
        this.geometry.release(OB), OB.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** OB.lostRemeshes++);
        const GB = BB.mP,
          [YB, DB, QB] = GB.qDB(OB.origin[0], OB.origin[1], OB.origin[2]),
          oB = GB.Vq.Sq(YB, DB, QB);
        oB && (oB.Wq = !0, oB.Uq = !0, GB.Aq(oB, !1))
      }
      chooseFaceRanges(BB, OB, GB) {
        const YB = this.faceRanges;
        BB.faceMask = GB, BB.rangeCount = (0, ej.o)(OB, GB, YB), BB.first0 = YB[0], BB.count0 = YB[1], BB.first1 = YB[2], BB.count1 = YB[3]
      }
      drawWhole(BB) {
        BB.faceMask = -1, BB.faceEpoch = -1, BB.rangeCount = 1, BB.first0 = 0, BB.count0 = BB.faceCount
      }
      writeSlot(BB) {
        const [OB, GB, YB] = this.originOffset;
        this.slots.set(BB.slot, BB.origin[0] - OB, BB.origin[1] - GB, BB.origin[2] - YB, BB.visibility)
      }
      materialFor(BB) {
        const OB = this.materials.get(BB);
        if (OB) return OB;
        const GB = Sj(BB);
        if (!GB) return this.warnOnce(`material:${BB.name}`, `Lite terrain cannot draw material "${BB.name}"; its chunks are skipped.`), null;
        const {
          model: YB,
          atlas: DB,
          texture: QB,
          animated: oB,
          uniformData: jB
        } = GB, yB = {
          id: this.materials.size,
          model: YB,
          texture: QB,
          animated: oB,
          uniformData: jB,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${BB.name}`,
            size: jB.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: GB.liquid,
          customRenderMat: GB.customRenderMat,
          atlasCount: 0,
          v_: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(BB, yB), this.device.queue.writeBuffer(yB.uniformBuffer, 0, jB), yB.ready = this.createMaterialBindGroup(yB, DB).catch((OB => {
          console.error(`Lite terrain failed to load the textures of material "${BB.name}"`, OB)
        })), yB
      }
      materialLayout(BB) {
        const OB = function(BB) {
            const OB = ["uniforms"];
            if ("atlas" === BB.texture) {
              BB.animated && OB.push("animData"), OB.push("sampler");
              for (let GB = 0; GB < BB.atlasCount; GB++) OB.push("textureArray")
            } else "single" === BB.texture && OB.push("sampler", "texture");
            return OB
          }(BB),
          GB = OB.join(",");
        let YB = this.materialLayouts.get(GB);
        if (!YB) {
          const BB = GPUShaderStage.FRAGMENT;
          YB = this.device.createBindGroupLayout({
            label: `terrain-material-${GB}`,
            entries: OB.map(((OB, GB) => {
              switch (OB) {
                case "uniforms":
                  return {
                    binding: GB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: GB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: GB, visibility: BB, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: GB, visibility: BB, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: GB, visibility: BB, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(GB, YB)
        }
        return YB
      }
      async createMaterialBindGroup(BB, OB) {
        const GB = [{
          buffer: BB.uniformBuffer
        }];
        if (OB) {
          const YB = await OO(this.device, OB.sources);
          BB.atlasCount = YB.length, BB.v_ = YB[0].layerWidth, BB.atlasLayers = YB[0].layers, OB.animDataPerTex && GB.push({
            buffer: CB(this.device, Float32Array.from(OB.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), GB.push(this.sampler);
          for (const BB of YB) GB.push(BB.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === BB.texture) {
          const {
            url: OB
          } = BB.model.diffuseTexture.source, {
            pixels: YB,
            width: DB,
            height: QB
          } = await BO(OB);
          GB.push(this.sampler), GB.push(vB(this.device, YB, DB, QB, 1, `terrain-${OB}`).createView({
            dimension: "2d"
          }))
        }
        const YB = this.materialLayout(this.programKey(BB, !1));
        BB.bindGroupLayout = YB, BB.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${BB.model.name}`,
          layout: YB,
          entries: GB.map(((BB, OB) => ({
            binding: OB,
            resource: BB
          })))
        })
      }
      programKey(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const YB = GB ? GB.lighting : this.lighting,
          DB = GB ? GB.zp : this.zp,
          QB = {
            texture: BB.texture,
            atlasCount: BB.atlasCount,
            v_: BB.v_,
            atlasLayers: BB.atlasLayers,
            animated: BB.animated,
            alphaTest: BB.model.transparencyMode === fB.s.alphaTest,
            lighting: YB,
            dirLightCount: GB ? GB.dirLightCount : this.dirLightCount,
            packed: OB
          };
        if (!DB) return QB;
        const oB = this.shaderPackFields(BB, DB),
          jB = "atlas" === BB.texture && BB.model.transparencyMode === fB.s.opaque && dY(oB.packVariant);
        return {
          ...QB,
          ...oB,
          alphaTest: QB.alphaTest || jB
        }
      }
      shaderPackFields(BB, OB) {
        const GB = this.packVariant(BB, OB);
        return void 0 === GB ? fY : {
          packVariant: GB,
          liquid: BB.liquid
        }
      }
      packVariant(BB, OB) {
        return BB.customRenderMat ? void 0 : function(BB, OB) {
          const GB = BB ? BB.defineFor(OB ? "liquid" : "terrain") : 0;
          return 0 === GB ? void 0 : GB
        }(OB, BB.liquid)
      }
      isBlended(BB) {
        return BB.model.transparencyMode === fB.s.alphaBlend
      }
      shaderModule(BB, OB) {
        let GB = this.modules.get(BB);
        return GB || (GB = this.device.createShaderModule({
          label: OB,
          code: BB
        }), this.modules.set(BB, GB)), GB
      }
      pipelineFor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!BB.bindGroupLayout) return null;
        if (!YB) return this.pipelineOf(BB, OB, GB);
        const DB = this.pipelineIdNow(BB, OB, !0, GB),
          QB = this.pipelines.get(DB);
        if (QB) return QB;
        const oB = this.pipelineOf(BB, OB, GB);
        return oB && void 0 === QB && this.startPipeline(DB, BB, {
          ...this.programKey(BB, OB),
          resting: YB
        }, GB), oB
      }
      pipelineOf(BB, OB, GB) {
        const YB = this.pipelineIdNow(BB, OB, !1, GB),
          DB = this.pipelines.get(YB);
        return void 0 !== DB ? DB : (this.startPipeline(YB, BB, this.programKey(BB, OB), GB), null)
      }
      pipelineIdNow(BB, OB, GB, YB) {
        const {
          lighting: DB,
          dirLightCount: QB
        } = this, {
          transparencyMode: oB,
          backFaceCulling: jB
        } = BB.model, yB = this.packVariant(BB, this.zp), JB = (OB ? 2 : 0) + (GB ? 1 : 0), MB = BB.pipelineIds[JB];
        if (null !== MB && MB.lighting === DB && MB.dirLightCount === QB && MB.packVariant === yB && MB.transparencyMode === oB && MB.cull === jB && MB.atlasCount === BB.atlasCount && MB.v_ === BB.v_ && MB.atlasLayers === BB.atlasLayers && MB.colorFormat === YB._colorFormat && MB.depthStencilFormat === YB._depthStencilFormat && MB.sampleCount === YB._sampleCount) return MB.id;
        const PB = this.programKey(BB, OB),
          zB = this.pipelineId(BB, GB ? {
            ...PB,
            resting: GB
          } : PB, YB);
        return BB.pipelineIds[JB] = {
          id: zB,
          lighting: DB,
          dirLightCount: QB,
          packVariant: yB,
          transparencyMode: oB,
          cull: jB,
          atlasCount: BB.atlasCount,
          v_: BB.v_,
          atlasLayers: BB.atlasLayers,
          colorFormat: YB._colorFormat,
          depthStencilFormat: YB._depthStencilFormat,
          sampleCount: YB._sampleCount
        }, zB
      }
      pipelineId(BB, OB, GB) {
        return Gy(OB, this.isBlended(BB), BB.model.backFaceCulling, GB)
      }
      pipelineBuild(BB, OB, GB) {
        var YB;
        const DB = this.pipelineId(BB, OB, GB);
        return null !== (YB = this.builds.get(DB)) && void 0 !== YB ? YB : this.startPipeline(DB, BB, OB, GB)
      }
      startPipeline(BB, OB, GB, YB) {
        var DB;
        this.pipelines.set(BB, null);
        const QB = xY(GB),
          oB = this.isBlended(OB),
          jB = this.shadowMask && YB._depthStencilFormat ? function(BB, OB, GB, YB) {
            if (void 0 === BB.packVariant || BB.liquid || OB) return "none";
            const DB = (0, sO.h)(BB.packVariant);
            return null === DB || void 0 === DB || !DB.sunShadow || !QY(DB, GB) || DB.discards || BB.alphaTest && dY(BB.packVariant) ? "none" : YB ? "edge" : "plain"
          }(GB, oB, !!this.sunShadow, YB._sampleCount > 1) : "none";
        let yB;
        try {
          yB = tY(GB, !!this.sunShadow, jB)
        } catch (ZB) {
          if (!IY(GB)) throw ZB;
          return this.failedPackBuild(BB, GB, QB, ZB)
        }
        const JB = this.shaderModule(yB, QB),
          MB = [];
        GB.packed || (MB.push(function(BB, OB) {
          const GB = [{
            shaderLocation: sj.position,
            offset: CO.g.LQ,
            format: "float32x3"
          }, {
            shaderLocation: sj.normal,
            offset: CO.g.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: sj.color,
            offset: CO.g.colorOffset,
            format: "unorm8x4"
          }];
          return BB && GB.push({
            shaderLocation: sj.uv,
            offset: CO.g.uvOffset,
            format: "float32x2"
          }), OB && GB.push({
            shaderLocation: sj.blockFlagWords,
            offset: CO.g.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: CO.g.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: GB
          }
        }("none" !== GB.texture, IY(GB))), GB.lighting && MB.push(tj));
        const PB = OB.model.backFaceCulling,
          zB = {
            label: QB,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, OB.bindGroupLayout, ...bQ(this.device, GB, !!this.sunShadow, "none" !== jB)]
            }),
            vertex: {
              module: JB,
              entryPoint: "mainVertex",
              buffers: MB
            },
            fragment: RO({
              module: JB,
              entryPoint: "mainFragment"
            }, YB, oB ? By : null),
            depthStencil: YB._depthStencilFormat ? {
              format: YB._depthStencilFormat,
              depthCompare: null !== (DB = YB._depthCompare) && void 0 !== DB ? DB : UO,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: YB._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: PB ? "back" : "none"
            }
          },
          lB = GB.resting ? 0 : 1;
        this.compiling += lB;
        const pB = "none" === jB ? this.device.createRenderPipelineAsync(zB) : this.startMaskPipelines(JB, zB, "edge" === jB);
        pB.then((OB => {
          this.compiling -= lB, this.pipelines.set(BB, OB)
        }), (BB => {
          this.compiling -= lB, console.error(`Lite terrain pipeline ${QB} failed`, BB), hj(this.device, GB, QB, JB, BB)
        }));
        const qB = {
          name: QB,
          module: JB,
          built: pB
        };
        return this.builds.set(BB, qB), qB
      }
      startMaskPipelines(BB, OB, GB) {
        const YB = OB.depthStencil,
          DB = this.device.createRenderPipelineAsync(GB ? OB : {
            ...OB,
            depthStencil: {
              ...YB,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          QB = this.device.createRenderPipelineAsync({
            ...OB,
            label: `${OB.label}-prepass`,
            fragment: {
              module: BB,
              entryPoint: "prepassFragment",
              targets: [{
                format: Ij
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([DB, QB]).then((BB => {
          let [OB, GB] = BB;
          return this.prepassOf.set(OB, GB), this.maskPipelines++, OB
        }))
      }
      failedPackBuild(BB, OB, GB, YB) {
        console.error(`Lite terrain pipeline ${GB} failed`, YB), hj(this.device, OB, GB, null, YB);
        const DB = Promise.reject(YB);
        DB.catch((() => {}));
        const QB = {
          name: GB,
          module: null,
          built: DB
        };
        return this.builds.set(BB, QB), QB
      }
      checkShaderPack(BB) {
        return wj(BB, {
          device: this.device,
          target: this.target,
          material: BB => this.materialFor(BB),
          programKey: (BB, OB, GB) => this.programKey(BB, OB, GB),
          pipelineBuild: (BB, OB, GB) => this.pipelineBuild(BB, OB, GB)
        })
      }
      createBinding(BB, OB, GB) {
        return this.target = OB, {
          renderable: BB,
          pipeline: KO(this.device, OB),
          draw: BB => {
            this.geometry.setDrawing(!0);
            try {
              return GB ? this.drawTransparent(BB, OB) : this.drawOpaque(BB, OB)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(BB, OB) {
        var GB, YB, DB, QB;
        const {
          kz: oB
        } = BB;
        this.lighting = BB.wq;
        const jB = (0, Wj.u)(OB);
        this.dirLightCount = Math.min(jB, 4), this.zp = null !== (GB = oB.zp) && void 0 !== GB ? GB : null, jB > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(BB, OB), this.animateMaterials(OB.animTick);
        const yB = oB.Tz,
          JB = yB[0] !== this.originOffset[0] || yB[1] !== this.originOffset[1] || yB[2] !== this.originOffset[2];
        JB && (this.originOffset[0] = yB[0], this.originOffset[1] = yB[1], this.originOffset[2] = yB[2]);
        const MB = OB.eye;
        this.eye[0] = MB[0], this.eye[1] = MB[1], this.eye[2] = MB[2], this.writeShaderPackInputs();
        const PB = OB.projectionMatrix,
          zB = 0 === PB[15];
        let lB = 0;
        (JB || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: pB
        } = this;
        uO(this.transparentRenderable._worldCenter, OB, kO), this.resetBatches(zB), this.transparent.length = 0, this.unlit.length = 0;
        const qB = oB.mP.qP,
          ZB = qB / 2 * Math.sqrt(3);
        let NB = 0;
        const RB = !!this.zp && kY(this.zp.defineFor("liquid"));
        let WB = !1;
        const AB = null !== (YB = null === (DB = oB.pW) || void 0 === DB ? void 0 : DB.visibility) && void 0 !== YB ? YB : null,
          VB = this.visCull && zB && 0 === this.compiling && null !== AB && oB.mP.gDB[0] >= this.visCullMinDistance ? this.target : null,
          SB = this.visPassable,
          nB = this.visCandidates,
          UB = this.visCandidateBatches;
        SB.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let fB = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let kB = 0;
        const dB = (BB, GB) => {
          if (!GB) return this.transparent.push(BB), void(kB += 2 * BB.faceCount);
          if (null !== BB.faceGroups && GB.faceCull) {
            if (0 === lB && (lB = (0, ej.b)(PB, OB.renderWidth, OB.renderHeight), lB !== this.faceFocalPx && (this.faceFocalPx = lB, pB = ++this.faceEpoch)), BB.faceEpoch !== pB) {
              BB.faceEpoch = pB;
              const OB = Math.sqrt(BB.distance) + ZB,
                GB = (0, ej.h)(BB.planePX, BB.planeNX, BB.planePY, BB.planeNY, BB.planePZ, BB.planeNZ, this.eye[0] - (BB.origin[0] - this.originOffset[0]), this.eye[1] - (BB.origin[1] - this.originOffset[1]), this.eye[2] - (BB.origin[2] - this.originOffset[2]), (0, ej.f)(OB, lB));
              GB !== BB.faceMask && this.chooseFaceRanges(BB, BB.faceGroups, GB)
            }
            if (0 === BB.rangeCount) return
          } else - 1 !== BB.faceMask && this.drawWhole(BB);
          GB.meshes.push(BB), kB += 2 * ((BB.rangeCount > 0 ? BB.count0 : 0) + (BB.rangeCount > 1 ? BB.count1 : 0))
        };
        for (const uB of this.chunks.values()) {
          JB && this.writeSlot(uB);
          const BB = uB.mesh.visibility;
          BB !== uB.visibility && (uB.visibility = BB, this.slots.setVisibility(uB.slot, BB));
          const {
            material: GB
          } = uB;
          this.geometry.lost(uB) && performance.now() >= uB.lostRetryAt && this.remeshLost(oB, uB);
          const YB = !(null === GB || void 0 === GB || !GB.bindGroup) && this.geometry.backed(uB),
            DB = YB && this.lighting && !uB.vertices.page.twin;
          if (VB && (Number.isNaN(uB.key) && (uB.ci = Math.floor(uB.origin[0] / qB), uB.cj = Math.floor(uB.origin[1] / qB), uB.ck = Math.floor(uB.origin[2] / qB), uB.key = (0, bj.i)(uB.ci, uB.cj, uB.ck)), (!YB || BB < 1 || DB || !this.batchDraws(GB, uB.packed, VB)) && this.visSeeThrough(uB, VB) && SB.add(uB.key)), !YB) continue;
          DB || (uB.lostRemeshes = 0);
          const QB = uB.origin[0] - this.originOffset[0],
            jB = uB.origin[1] - this.originOffset[1],
            yB = uB.origin[2] - this.originOffset[2];
          if (!(0, jj.e)(OB.frustum, QB, jB, yB, qB)) continue;
          const MB = QB + qB / 2 - this.eye[0],
            PB = jB + qB / 2 - this.eye[1],
            lB = yB + qB / 2 - this.eye[2];
          if (uB.distance = MB * MB + PB * PB + lB * lB, this.lighting && !uB.lit && (NB = Math.max(NB, uB.vertexCount), this.unlit.push(uB)), DB) continue;
          const pB = this.isBlended(GB) ? null : this.batchFor(GB, uB.packed, uB.vertices.page, 1 === BB, zB);
          VB ? (nB[fB] = uB, UB[fB++] = pB) : dB(uB, pB)
        }
        const KB = VB ? this.sweepVisibility(BB, OB, AB) : null;
        null === (QB = (0, LQ.y)(oB)) || void 0 === QB || QB.update(OB.frustum, this.originOffset, qB, KB);
        for (let uB = 0; uB < fB; uB++) {
          const BB = nB[uB];
          !KB || KB.isDrawn(BB.ci, BB.cj, BB.ck) ? dB(BB, UB[uB]) : (this.visCulledParts++, this.visCulledTriangles += 2 * BB.faceCount)
        }
        for (const uB of this.transparent) WB ||= RB && uB.material.liquid && !uB.material.customRenderMat;
        this.submittedTriangles = kB, KB && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(BB, OB, KB)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(WB) : WB && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && NB > 0 && this.geometry.lightFullSky(this.unlit, NB);
        for (const uB of this.opaqueBatches) this.chunkSorter.sort(uB.meshes, 1) || uB.meshes.sort(Yy);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Dy)
      }
      sweepVisibility(BB, OB, GB) {
        const {
          mP: YB
        } = BB.kz, DB = YB.qP, QB = this.visPassable, oB = this.eye[0] + this.originOffset[0], jB = this.eye[1] + this.originOffset[1], yB = this.eye[2] + this.originOffset[2];
        if (!GB.eyeClear(oB, jB, yB, OB.near, OB.projectionMatrix, YB)) return null;
        const [JB, MB] = YB.gDB, PB = GB.update(oB, jB, yB, DB, JB, MB, QB);
        return this.visSweeps = GB.sweeps, PB ? GB : null
      }
      visSeeThrough(BB, OB) {
        const {
          material: GB
        } = BB;
        return (!GB || !this.isBlended(GB)) && (BB.mesh.visibility < 1 || !(null !== GB && void 0 !== GB && GB.bindGroup) || BB.faceCount > 0 && (!this.geometry.backed(BB) || this.lighting && !BB.vertices.page.twin) || !this.batchDraws(GB, BB.packed, OB))
      }
      batchDraws(BB, OB, GB) {
        var YB;
        const DB = OB ? 2 : 0;
        if (BB === this.visDrawsMaterial && function(BB, OB) {
            return 0 !== (BB & 1 << OB)
          }(this.visDrawsBits, DB)) return 0 !== (this.visDrawsBits & 2 << DB);
        let QB = null !== (YB = this.visBatchDraws.get(BB)) && void 0 !== YB ? YB : 0;
        if (!(QB & 1 << DB)) {
          QB |= 1 << DB | (!!BB.bindGroupLayout && this.canDraw(BB, OB) && !!this.pipelines.get(this.pipelineIdNow(BB, OB, !1, GB)) ? 2 << DB : 0), this.visBatchDraws.set(BB, QB)
        }
        return this.visDrawsMaterial = BB, this.visDrawsBits = QB, 0 !== (QB & 2 << DB)
      }
      runVisCheck(BB, OB, GB) {
        const {
          kz: YB
        } = BB, {
          mP: DB
        } = YB, QB = DB.qP, oB = new Set;
        for (const lB of this.chunks.values()) oB.add(lB.key);
        const jB = hD.Matrix.FromArray(OB.viewProjectionMatrix).invert(),
          [yB, JB, MB] = this.originOffset,
          PB = new hD.Xp,
          zB = function(BB, OB, GB, YB) {
            const DB = new Set;
            for (let QB = 0; QB < 27; QB++)
              for (let oB = 0; oB < 48; oB++) {
                const jB = GB((oB + .5) / 48 * 2 - 1, (QB + .5) / 27 * 2 - 1);
                Cj(BB, OB, [jB[0] - OB[0], jB[1] - OB[1], jB[2] - OB[2]], YB, DB)
              }
            return DB
          }({
            sH: (BB, OB, GB) => DB.sH(BB, OB, GB),
            occluders: GB.occluders,
            opaque: GB.opaque,
            pP: QB,
            isDrawn: (BB, OB, YB) => GB.isDrawn(BB, OB, YB),
            hasParts: (BB, OB, GB) => oB.has((0, bj.i)(BB, OB, GB))
          }, [this.eye[0] + yB, this.eye[1] + JB, this.eye[2] + MB], ((BB, OB) => (hD.Xp.TransformCoordinatesFromFloatsToRef(BB, OB, .5, jB, PB), [PB.x + yB, PB.y + JB, PB.z + MB])), (DB.gDB[0] + 1) * QB);
        this.visViolations = zB.size;
        for (const lB of zB) this.warnOnce(`vis:${lB}`, `Lite terrain cave culling skipped chunk ${lB}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var BB;
        null !== (BB = this.zp) && void 0 !== BB && BB.isRunning() && (this.shaderPackInputs ??= new CQ(this.device, this.zp.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.zp, this.eye, this.lighting))
      }
      bindShaderPackInputs(BB, OB, GB) {
        var YB, DB, QB, oB;
        let jB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yB = this.packVariant(OB, GB);
        if (void 0 === yB) return;
        this.shaderPackInputs || (this.shaderPackInputs = new CQ(this.device, GB.textureLayers(), this.sunShadow), this.shaderPackInputs.write(GB, this.eye, this.lighting));
        const JB = kY(yB) ? null !== (YB = null === (DB = this.sceneDepth) || void 0 === DB ? void 0 : DB.view) && void 0 !== YB ? YB : this.standIn() : null,
          MB = jB ? null !== (QB = null === (oB = this.shadowMask) || void 0 === oB ? void 0 : oB.view) && void 0 !== QB ? QB : this.standIn() : null;
        this.shaderPackInputs.bind(BB, JB, TQ(yB, !!this.sunShadow), MB)
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
        var BB, OB;
        return null !== (BB = null === (OB = this.shaderPackInputs) || void 0 === OB ? void 0 : OB.bindGroupFor(null, !0)) && void 0 !== BB ? BB : null
      }
      resetBatches(BB) {
        const OB = this.opaqueBatches;
        let GB = 0;
        for (const YB of OB) YB.meshes.length > 0 && (YB.meshes.length = 0, YB.faceCull = this.batchFaceCull(YB.material, BB), OB[GB++] = YB);
        OB.length = GB
      }
      orderBatches() {
        const BB = this.opaqueBatches;
        for (let OB = 0; OB < BB.length; OB++) {
          const GB = BB[OB];
          GB.group = OB;
          for (let YB = 0; YB < OB; YB++) {
            const OB = BB[YB];
            if (OB.material === GB.material && OB.packed === GB.packed) {
              GB.group = OB.group;
              break
            }
          }
          GB.nearest = GB.meshes.length > 0 ? GB.meshes[0].distance : 1 / 0
        }
        BB.sort(Hj)
      }
      batchFor(BB, OB, GB, YB, DB) {
        for (const oB of this.opaqueBatches)
          if (oB.material === BB && oB.packed === OB && oB.page === GB && oB.resting === YB) return oB;
        const QB = {
          material: BB,
          packed: OB,
          page: GB,
          resting: YB,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(BB, DB)
        };
        return this.opaqueBatches.push(QB), QB
      }
      batchFaceCull(BB, OB) {
        return !(!OB || !(0, aj.n)(BB.model)) && (!this.zp || ! function(BB) {
          var OB;
          return !(null === (OB = (0, sO.h)(BB)) || void 0 === OB || !OB.movesVertices)
        }(this.packVariant(BB, this.zp)))
      }
      writeFrameUniforms(BB, OB) {
        const GB = this.frameUniforms,
          YB = FY;
        if ((0, Wj.w)(BB, GB), GB[YB.fogInfos] = OB.fogEnabled ? OB.fogMode : 0, GB[YB.fogInfos + 1] = OB.fogStart, GB[YB.fogInfos + 2] = OB.fogEnd, GB[YB.fogInfos + 3] = OB.fogDensity, GB.set(OB.fogColour, YB.fogColour), GB[YB.outputHeight] = OB.renderHeight, GB.set(OB.ambientColour, YB.sceneAmbient), (0, Wj.s)(OB, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const OB = (0, Aj.i)(BB.Qq, BB.mp, BB.Ip);
          for (let BB = 0; BB < 4; BB++) GB[YB.aoLevels + BB] = OB[BB] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, GB)
      }
      animateMaterials(BB) {
        const OB = LY.anim;
        for (const GB of this.materials.values()) GB.animated && (GB.uniformData[OB] = BB, this.device.queue.writeBuffer(GB.uniformBuffer, 4 * OB, GB.uniformData, OB, 1))
      }
      canDraw(BB, OB) {
        return !("atlas" === BB.texture && !OB) || (this.warnOnce(`stride:${BB.id}`, `Lite terrain: material "${BB.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(BB, OB) {
        let GB = 0;
        BB.setBindGroup(1, this.frameBindGroup);
        for (const YB of this.opaqueBatches) {
          if (!YB.meshes.length || !this.canDraw(YB.material, YB.packed)) continue;
          const DB = this.pipelineFor(YB.material, YB.packed, OB, YB.resting);
          DB && (BB.setPipeline(DB), BB.setBindGroup(2, YB.material.bindGroup), this.zp && this.bindShaderPackInputs(BB, YB.material, this.zp, this.prepassOf.has(DB)), GB += this.drawBatch(BB, YB))
        }
        return GB
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(BB, OB, GB) {
        const YB = this.target,
          DB = this.zp;
        if (!YB || !DB || 0 === this.maskPipelines) return 0;
        let QB = 0,
          oB = null;
        this.geometry.setDrawing(!0);
        try {
          for (const jB of this.opaqueBatches) {
            if (!jB.meshes.length || !this.canDraw(jB.material, jB.packed)) continue;
            const yB = this.pipelineFor(jB.material, jB.packed, YB, jB.resting),
              JB = yB && this.prepassOf.get(yB);
            JB && (oB || (oB = BB.beginRenderPass(OB), oB.setBindGroup(0, GB), oB.setBindGroup(1, this.frameBindGroup)), oB.setPipeline(JB), oB.setBindGroup(2, jB.material.bindGroup), this.bindShaderPackInputs(oB, jB.material, DB, !0), QB += this.drawBatch(oB, jB))
          }
        } finally {
          var jB;
          null === (jB = oB) || void 0 === jB || jB.end(), this.geometry.setDrawing(!1)
        }
        return QB
      }
      drawBatch(BB, OB) {
        let GB = 0;
        for (const YB of OB.meshes) {
          const {
            rangeCount: OB
          } = YB;
          OB > 0 && (GB += this.geometry.draw(BB, YB, this.lighting, YB.first0, YB.count0), OB > 1 && (GB += this.geometry.draw(BB, YB, this.lighting, YB.first1, YB.count1)))
        }
        return GB
      }
      drawTransparent(BB, OB) {
        let GB = 0,
          YB = null,
          DB = null;
        BB.setBindGroup(1, this.frameBindGroup);
        for (const QB of this.transparent) {
          const oB = QB.material;
          if (!this.canDraw(oB, QB.packed)) continue;
          const jB = this.pipelineFor(oB, QB.packed, OB);
          jB && (jB !== YB && (BB.setPipeline(jB), YB = jB, this.zp && this.bindShaderPackInputs(BB, oB, this.zp)), oB !== DB && (BB.setBindGroup(2, oB.bindGroup), DB = oB), GB += this.geometry.draw(BB, QB, this.lighting))
        }
        return GB
      }
    }

    function Gy(BB, OB, GB, YB) {
      return `${xY(BB)}|${BB.atlasLayers}|${BB.v_}|${OB}|${GB}|${YB._colorFormat}|${YB._depthStencilFormat}|${YB._sampleCount}`
    }

    function Yy(BB, OB) {
      return BB.distance - OB.distance
    }

    function Dy(BB, OB) {
      return OB.distance - BB.distance
    }
    class Qy {
      constructor() {
        this.left = []
      }
      sort(BB, OB) {
        for (let GB = 0; GB < BB.length; GB++) {
          const OB = BB[GB].distance;
          if (OB - OB !== 0) return !1
        }
        return this.sortRange(BB, 0, BB.length, OB), !0
      }
      sortRange(BB, OB, GB, YB) {
        if (GB - OB <= 16) {
          for (let DB = OB + 1; DB < GB; DB++) {
            const GB = BB[DB],
              QB = YB * GB.distance;
            let oB = DB - 1;
            for (; oB >= OB && YB * BB[oB].distance > QB; oB--) BB[oB + 1] = BB[oB];
            BB[oB + 1] = GB
          }
          return
        }
        const DB = OB + GB >>> 1;
        if (this.sortRange(BB, OB, DB, YB), this.sortRange(BB, DB, GB, YB), YB * BB[DB - 1].distance <= YB * BB[DB].distance) return;
        const {
          left: QB
        } = this, oB = DB - OB;
        for (let MB = 0; MB < oB; MB++) QB[MB] = BB[OB + MB];
        let jB = 0,
          yB = DB,
          JB = OB;
        for (; jB < oB && yB < GB;) BB[JB++] = YB * BB[yB].distance < YB * QB[jB].distance ? BB[yB++] : QB[jB++];
        for (; jB < oB;) BB[JB++] = QB[jB++]
      }
    }
    const oy = Math.ceil(102);

    function jy(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : OB;
      const QB = Math.min(OB, GB),
        oB = new Uint32Array(SG(YB));
      for (let jB = 0; jB < YB; jB++) {
        const OB = Math.floor(jB * QB / YB),
          GB = Math.max(OB + 1, Math.floor((jB + 1) * QB / YB));
        for (let yB = 0; yB < YB; yB++) {
          const JB = Math.floor(yB * QB / YB),
            MB = Math.max(JB + 1, Math.floor((yB + 1) * QB / YB));
          let PB = 0;
          for (let YB = OB; YB < GB; YB++)
            for (let OB = JB; OB < MB; OB++) BB[YB * DB + OB] >= oy && PB++;
          if (2 * PB >= (GB - OB) * (MB - JB)) {
            const BB = yB + YB * jB;
            oB[BB >>> 5] |= 1 << (31 & BB)
          }
        }
      }
      return oB
    }

    function yy(BB) {
      return Math.max(1, Math.min(16, BB))
    }
    class Jy {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = BB, this.loadTexture = OB, this.warn = GB, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(BB, OB) {
        return (BB.pC !== this.builtVersion || this.blockCaster.length !== OB) && (this.build(BB, OB), !0)
      }
      build(BB, OB) {
        this.builtVersion = BB.pC;
        const GB = new Uint16Array(OB),
          YB = new Map;
        for (let DB = 1; DB < OB; DB++) {
          const OB = this.classify(BB, DB, YB);
          if (null === OB || OB === NG) {
            GB[DB] = null === OB ? 0 : NG;
            continue
          }
          let QB = this.byKey.get(OB.key);
          void 0 === QB && (QB = this.allocate(OB), this.byKey.set(OB.key, QB)), GB[DB] = QB
        }
        this.blockCaster = GB, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(BB, OB) {
        const GB = BB.QBB[OB];
        if ("function" !== typeof GB) return GB;
        try {
          return GB()
        } catch (YB) {
          return this.warnOnce(`Sun shadows: no caster option for block ${OB}: ${YB instanceof Error?YB.message:String(YB)}`), null
        }
      }
      classify(BB, OB, GB) {
        const YB = this.option(BB, OB);
        if ("none" === YB) return null;
        if (YB && YB.planes.length > 0) {
          const BB = YB.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(BB)}`,
            planes: BB
          }
        }
        if (BB.Ul[OB]) return null;
        const DB = BB.kl[OB] ? BB.WC(OB) : null;
        if (DB && DB.length >= 6) {
          const BB = function(BB) {
            const OB = new Uint32Array(16);
            for (let GB = 0; GB + 6 <= BB.length; GB += 6) {
              const YB = [0, 1, 2].map((OB => Math.max(0, Math.ceil(8 * BB[GB + OB] - .5)))),
                DB = [0, 1, 2].map((OB => Math.min(7, Math.floor(8 * BB[GB + OB + 3] - .5))));
              for (let BB = YB[2]; BB <= DB[2]; BB++)
                for (let GB = YB[1]; GB <= DB[1]; GB++)
                  for (let QB = YB[0]; QB <= DB[0]; QB++) {
                    const YB = QB + 8 * (GB + 8 * BB);
                    OB[YB >>> 5] |= 1 << (31 & YB)
                  }
            }
            return OB
          }(DB);
          return function(BB) {
            return BB.every((BB => 4294967295 === BB))
          }(BB) ? NG : BB.every((BB => 0 === BB)) ? null : {
            kind: "shape",
            key: `shape:${BB.join(",")}`,
            mask: BB
          }
        }
        if (BB.cV[OB] || !BB.oq[OB]) return null;
        const QB = [0, 1, 2, 3, 4, 5].map((YB => {
          const DB = BB.jq[6 * OB + YB];
          let QB = GB.get(DB);
          return void 0 === QB && (QB = function(BB) {
            if (!BB || BB.Nq) return null;
            const {
              b_: OB,
              v_: GB,
              T_: YB
            } = BB;
            if (!OB || !GB || !(GB > 0) || void 0 === YB || !(YB >= 0)) return null;
            const DB = OB[0],
              QB = GB * GB * 4;
            if (!DB || DB.byteLength < QB) return null;
            const oB = Math.floor(DB.byteLength / QB),
              jB = OB[Math.floor(YB / oB)];
            if (!jB) return null;
            const yB = new Uint8Array(jB.buffer, jB.byteOffset, jB.byteLength),
              JB = YB % oB * QB;
            if (JB + QB > yB.length) return null;
            const MB = new Uint8Array(GB * GB);
            let PB = !1;
            for (let zB = 0; zB < MB.length; zB++) MB[zB] = yB[JB + 4 * zB + 3], PB ||= MB[zB] < oy;
            return PB ? {
              alpha: MB,
              width: GB
            } : null
          }(BB.Zq(DB)), GB.set(DB, QB)), QB
        }));
        if (QB.every((BB => null === BB))) return NG;
        const oB = yy(Math.max(...QB.map((BB => {
            var OB;
            return null !== (OB = null === BB || void 0 === BB ? void 0 : BB.width) && void 0 !== OB ? OB : 1
          })))),
          jB = new Uint32Array(SG(oB)).fill(4294967295),
          yB = QB.map((BB => null === BB ? jB : jy(BB.alpha, BB.width, BB.width, oB)));
        return {
          kind: "cutout",
          key: `cutout:${oB}:${yB.map((BB=>BB.join(","))).join("|")}`,
          size: oB,
          faces: yB
        }
      }
      allocate(BB) {
        if (this.nextCaster >= nG) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const OB = this.nextCaster++;
        if (this.writeCaster(OB, RG, 0, 0, 0), "shape" === BB.kind) {
          const GB = this.allocateMask(BB.mask.length);
          GB >= 0 && (this.sink(GB, BB.mask), this.writeCaster(OB, WG, GB, 0, 8))
        } else if ("cutout" === BB.kind) {
          const GB = SG(BB.size),
            YB = this.allocateMask(6 * GB);
          if (YB >= 0) {
            const DB = new Uint32Array(6 * GB);
            BB.faces.forEach(((BB, OB) => {
              DB.set(BB, OB * GB)
            })), this.sink(YB, DB), this.writeCaster(OB, VG, YB, 0, BB.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(OB, BB.planes).finally((() => {
          this.planesLoading--
        })));
        return OB
      }
      async loadPlanes(BB, OB) {
        const GB = await Promise.all(OB.map((BB => this.texture(BB.texture))));
        if (GB.some((BB => null === BB))) return;
        const YB = GB,
          DB = yy(Math.max(...YB.map((BB => Math.min(BB.width, BB.height))))),
          QB = SG(DB),
          oB = this.allocateMask(OB.length * (4 + QB));
        if (oB < 0) return;
        const jB = new Uint32Array(OB.length * (4 + QB)),
          yB = 4 * OB.length;
        OB.forEach(((BB, OB) => {
          const GB = oB + yB + OB * QB;
          jB.set(function(BB, OB) {
            const [GB, YB] = BB.tangent, DB = Math.hypot(GB, YB) || 1, QB = GB / DB, oB = YB / DB, jB = BB.centre[0] * oB - BB.centre[1] * QB, yB = new Uint32Array(4);
            return new Float32Array(yB.buffer, 0, 3).set([QB, oB, jB]), yB[3] = OB, yB
          }(BB, GB), 4 * OB), jB.set(jy(YB[OB].alpha, YB[OB].width, YB[OB].height, DB), yB + OB * QB)
        })), this.sink(oB, jB), this.writeCaster(BB, AG, oB, OB.length, DB)
      }
      texture(BB) {
        let OB = this.textures.get(BB);
        return OB || (OB = this.loadTexture(BB).catch((OB => (this.warn(`Sun shadows: no mask for ${BB}: ${OB instanceof Error?OB.message:String(OB)}`), null))), this.textures.set(BB, OB)), OB
      }
      allocateMask(BB) {
        if (this.nextMaskWord + BB > UG) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const OB = 32768 + this.nextMaskWord;
        return this.nextMaskWord += BB, OB
      }
      writeCaster(BB, OB, GB, YB, DB) {
        this.sink(0 + 4 * BB, Uint32Array.of(OB, GB, YB, DB))
      }
      warnOnce(BB) {
        this.warned.has(BB) || (this.warned.add(BB), this.warn(BB))
      }
    }
    var My = GB(3158);

    function Py(BB) {
      return !BB.Wq && !BB.qV && !BB.sp
    }

    function zy() {
      return {
        bricks: new Uint32Array(JG),
        cells: new Uint16Array(32768),
        special: new Uint8Array(jG)
      }
    }
    class ly {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = BB, this.writeVoxels = OB, this.writePool = GB, this.warn = YB, this.eyeChunk = null, this.slotChunk = new Array(OG).fill(null), this.slotVersion = new Float64Array(OG).fill(-1), this.slotPool = new Array(OG).fill(null), this.starved = new Uint8Array(OG), this.queue = [], this.queued = new Uint8Array(OG), this.queueSorted = !0, this.freePool = new Uint32Array(fG), this.freeCount = fG, this.casterTable = null, this.warnedPool = !1, this.scratch = zy(), this.victimScratch = zy(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * OG), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let DB = 0; DB < fG; DB++) this.freePool[DB] = 65535 - DB
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return fG - this.freeCount
      }
      chunkAdded(BB) {
        if (null === this.eyeChunk || !this.inRadius(BB.i, BB.j, BB.k)) return;
        const OB = pG(BB.i, BB.j, BB.k);
        this.slotChunk[OB] = BB, this.slotVersion[OB] = -1, this.enqueue(OB)
      }
      update(BB, OB, GB) {
        const YB = this.casters.blockCaster;
        if (YB !== this.casterTable) {
          this.casterTable = YB;
          for (let BB = 0; BB < OG; BB++) this.slotVersion[BB] = -1, this.slotChunk[BB] && this.enqueue(BB)
        }
        const DB = Math.floor(BB[0] / 32),
          QB = Math.floor(BB[1] / 32),
          oB = Math.floor(BB[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== DB || this.eyeChunk[1] !== QB || this.eyeChunk[2] !== oB) && (this.eyeChunk = [DB, QB, oB], this.follow(OB), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let jB = 0; jB < OG; jB++) {
          const BB = this.slotChunk[jB];
          BB && (BB.lV || BB.Bq !== this.slotVersion[jB]) && this.enqueue(jB)
        }
        this.drain(GB), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(BB, OB) {
        this.records.set(OB, 4 * BB), this.windowTopStale = !0, this.writeVoxels(4 * BB, OB)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const BB = this.records;
        let OB = -1 / 0;
        for (let YB = 0; YB < BB.length; YB += 4) {
          const GB = 255 & BB[YB + 3];
          GB !== DG && GB !== QG || !this.inRadius(BB[YB], BB[YB + 1], BB[YB + 2]) || (OB = Math.max(OB, BB[YB + 1] * xO + (BB[YB + 3] >>> 8)))
        }
        const GB = OB === -1 / 0 ? 1 : OB + PG;
        GB !== this.windowTop[0] && (this.windowTop[0] = GB, this.writeVoxels(MG, this.windowTop))
      }
      follow(BB) {
        const OB = this.eyeChunk,
          [GB, YB, DB] = tO;
        for (let oB = -DB; oB <= DB; oB++)
          for (let DB = -YB; DB <= YB; DB++)
            for (let YB = -GB; YB <= GB; YB++) {
              var QB;
              const GB = OB[0] + YB,
                jB = OB[1] + DB,
                yB = OB[2] + oB,
                JB = pG(GB, jB, yB),
                MB = this.slotChunk[JB];
              if (MB && !MB.lV && MB.i === GB && MB.j === jB && MB.k === yB) continue;
              const PB = null !== (QB = BB(GB, jB, yB)) && void 0 !== QB ? QB : null;
              MB && (MB.i !== GB || MB.j !== jB || MB.k !== yB) && this.slotPool[JB] && (this.release(JB), this.record.fill(0), this.writeRecord(JB, this.record)), this.slotChunk[JB] = PB, this.slotVersion[JB] = -1, (PB || MB) && this.enqueue(JB)
            }
      }
      requeueStarved() {
        for (let BB = 0; BB < OG; BB++) this.starved[BB] && this.slotChunk[BB] && this.enqueue(BB)
      }
      enqueue(BB) {
        this.queued[BB] || (this.queued[BB] = 1, this.queue.push(BB), this.queueSorted = !1)
      }
      drain(BB) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const BB = new Map;
          for (const OB of this.queue) BB.set(OB, this.slotDistance(OB));
          this.queue.sort(((OB, GB) => BB.get(GB) - BB.get(OB))), this.queueSorted = !0
        }
        const OB = performance.now();
        let GB = 0;
        const YB = [];
        for (; this.queue.length > 0 && (0 === GB || performance.now() - OB < BB);) {
          const BB = this.queue.pop(),
            OB = this.slotChunk[BB];
          !OB || OB.lV || Py(OB) ? (this.queued[BB] = 0, this.encodeSlot(BB), GB++) : YB.push(BB)
        }
        for (let DB = YB.length - 1; DB >= 0; DB--) this.queue.push(YB[DB])
      }
      slotDistance(BB) {
        const OB = this.slotChunk[BB],
          GB = this.eyeChunk;
        return OB ? Math.max(Math.abs(OB.i - GB[0]), Math.abs(OB.j - GB[1]), Math.abs(OB.k - GB[2])) : 0
      }
      inRadius(BB, OB, GB) {
        const YB = this.eyeChunk,
          [DB, QB, oB] = tO;
        return Math.abs(BB - YB[0]) <= DB && Math.abs(OB - YB[1]) <= QB && Math.abs(GB - YB[2]) <= oB
      }
      release(BB) {
        const OB = this.slotPool[BB];
        if (OB) {
          for (let BB = OB.length - 1; BB >= 0; BB--) this.freePool[this.freeCount++] = OB[BB];
          this.slotPool[BB] = null
        }
      }
      encodeSlot(BB) {
        var OB, GB, YB, DB, QB;
        let oB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          jB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const yB = null !== (OB = null === (GB = this.slotPool[BB]) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0;
        this.release(BB), this.starved[BB] = 0;
        const JB = this.slotChunk[BB],
          MB = this.record;
        if (!JB || JB.lV || !JB.sz) return this.slotChunk[BB] = null, this.slotVersion[BB] = -1, MB.fill(0), this.writeRecord(BB, MB), void(yB > 0 && this.requeueStarved());
        this.slotVersion[BB] = JB.Bq;
        const PB = this.encodeBricks(JB, BB, oB, jB);
        MB[0] = JB.i, MB[1] = JB.j, MB[2] = JB.k, MB[3] = PB, this.writeRecord(BB, MB), null === (YB = this.encoded) || void 0 === YB || YB.call(this, JB), jB && (null !== (DB = null === (QB = this.slotPool[BB]) || void 0 === QB ? void 0 : QB.length) && void 0 !== DB ? DB : 0) < yB && this.requeueStarved()
      }
      encodeBricks(BB, OB, GB, YB) {
        if (BB.Rp) return YG;
        const DB = this.casters.blockCaster,
          {
            data: QB,
            stride: oB,
            offset: jB
          } = BB.sz,
          [yB, JB, MB] = oB,
          PB = xO,
          {
            bricks: zB,
            cells: lB,
            special: pB
          } = GB;
        zB.fill(0), pB.fill(0);
        let qB = 0,
          ZB = 0,
          NB = 0;
        for (let RB = 0; RB < PB; RB++) {
          const OB = RB >> 2,
            GB = 3 & RB,
            YB = BB.al[RB],
            oB = YB === My.f ? -1 : YB < DB.length ? DB[YB] : 0;
          if (0 !== oB)
            for (let BB = 0; BB < PB; BB++) {
              const YB = BB >> 2,
                WB = 3 & BB;
              let AB = jB + BB * yB + RB * JB;
              for (let BB = 0; BB < PB; BB++, AB += MB) {
                let jB = oB;
                if (jB < 0) {
                  const BB = QB[AB];
                  if (jB = BB < DB.length ? DB[BB] : 0, 0 === jB) continue
                }
                const yB = qG(YB, OB, BB >> 2),
                  JB = ZG(WB, GB, 3 & BB);
                zB[3 * yB + (JB >>> 5)] |= 1 << (31 & JB), lB[yB * oG + JB] = jB, qB++, NB = RB, jB === NG ? ZB++ : pB[yB] = 1
              }
            }
        }
        return 0 === qB ? YG : 32768 === ZB ? DG | NB << 8 : (this.writePoolEntries(OB, GB, YB), this.writeVoxels(yG + OB * JG, zB), QG | NB << 8)
      }
      writePoolEntries(BB, OB, GB) {
        const {
          bricks: YB,
          cells: DB,
          special: QB
        } = OB, oB = this.entry;
        let jB = 0;
        for (let MB = 0; MB < jG; MB++) jB += QB[MB];
        if (0 === jB) return;
        GB && this.freeCount < jB && this.evictBeyond(BB, jB);
        const yB = new Uint32Array(GB ? Math.min(jB, this.freeCount) : 0);
        let JB = 0;
        for (let MB = 0; MB < jG; MB++) {
          if (!QB[MB]) continue;
          const GB = 3 * MB;
          if (JB === yB.length) {
            this.dropSpecials(OB, MB), this.starved[BB] = 1;
            continue
          }
          const jB = this.freePool[--this.freeCount];
          yB[JB++] = jB;
          for (let BB = 0; BB < oG; BB++) {
            const OB = YB[GB + (BB >>> 5)] >>> (31 & BB) & 1 ? DB[MB * oG + BB] : 0;
            1 & BB ? oB[BB >> 1] |= OB << 16 : oB[BB >> 1] = OB
          }
          YB[GB + 2] = jB + 1, this.writePool(kG + 32 * jB, oB)
        }
        yB.length > 0 && (this.slotPool[BB] = yB)
      }
      evictBeyond(BB, OB) {
        const GB = this.slotDistance(BB),
          YB = [];
        for (let DB = 0; DB < OG; DB++) DB !== BB && this.slotPool[DB] && this.slotDistance(DB) > GB && YB.push(DB);
        YB.sort(((BB, OB) => this.slotDistance(OB) - this.slotDistance(BB)));
        for (const DB of YB) {
          if (this.freeCount >= OB) return;
          const BB = this.slotChunk[DB];
          BB && !BB.lV && BB.sz && (BB.Bq === this.slotVersion[DB] || Py(BB)) && this.encodeSlot(DB, this.victimScratch, !1)
        }
      }
      dropSpecials(BB, OB) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const GB = 3 * OB;
        for (let YB = 0; YB < oG; YB++) BB.cells[OB * oG + YB] !== NG && (BB.bricks[GB + (YB >>> 5)] &= ~(1 << (31 & YB)))
      }
    }
    var py = GB(38087);
    class qy {
      constructor(BB) {
        this.device = BB, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new XG, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.mP = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = BB.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = BB.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(BB, OB, GB) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: YB
        } = this;
        YB.ZP(BB, OB), GB.forEachSunShadowCaster((BB => {
          this.add(BB)
        })), YB.finish();
        const DB = 0 === YB.parts;
        if (DB && this.uploadedEmpty) return;
        this.uploadedEmpty = DB;
        const {
          queue: QB
        } = this.device, {
          words: oB
        } = YB;
        QB.writeBuffer(this.frameBuffer, 0, oB, 0, 16385), YB.refs > 0 && QB.writeBuffer(this.frameBuffer, 65540, oB, mG, YB.refs), DB || QB.writeBuffer(this.frameBuffer, 327684, oB, IG, YB.parts * uG)
      }
      add(BB) {
        const OB = this.gridFor(BB);
        if (!OB) return;
        const {
          frame: GB
        } = this, {
          mP: YB,
          worldAt: DB,
          instances: QB,
          instanceCount: oB,
          thin: jB
        } = BB;
        if (QB)
          for (let yB = 0; yB < oB; yB++) jB ? (EG(QB, 16 * yB, YB, DB, this.mP), GB.add(OB, this.mP)) : GB.add(OB, QB, 16 * yB);
        else GB.add(OB, YB, DB)
      }
      gridFor(BB) {
        let {
          geometry: OB,
          indexed: GB,
          first: YB,
          count: DB,
          skip: QB
        } = BB, oB = this.grids.get(OB);
        oB || (oB = new Map, this.grids.set(OB, oB));
        const jB = `${GB?YB:-1-YB}:${DB}:${null!==QB&&void 0!==QB?QB:""}`;
        let yB = oB.get(jB);
        if (void 0 !== yB || this.gridsFull) return yB;
        const JB = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = JB + 2;
        else if (JB > this.bakeDeadline) return;
        return yB = this.bake(OB, GB, YB, DB, QB), void 0 !== yB && oB.set(jB, yB), yB
      }
      bake(BB, OB, GB, YB, DB) {
        const QB = BB.vertexAttributes.find((BB => "position" === BB.kind)),
          oB = QB ? function(BB, OB, GB, YB) {
            let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const QB = BB => OB ? OB[GB + BB] : GB + BB,
              oB = BB => null !== DB && [0, 1, 2].some((OB => {
                const GB = QB(BB + OB);
                return GB >= DB[0] && GB < DB[1]
              })),
              jB = [1 / 0, 1 / 0, 1 / 0],
              yB = [-1 / 0, -1 / 0, -1 / 0];
            for (let RB = 0; RB + 2 < YB; RB += 3)
              if (!oB(RB))
                for (let OB = 0; OB < 3; OB++) {
                  const GB = QB(RB + OB);
                  for (let OB = 0; OB < 3; OB++) jB[OB] = Math.min(jB[OB], BB[3 * GB + OB]), yB[OB] = Math.max(yB[OB], BB[3 * GB + OB])
                }
            const JB = Math.max(yB[0] - jB[0], yB[1] - jB[1], yB[2] - jB[2]);
            if (!(JB > 0)) return null;
            const MB = JB / 64,
              PB = [0, 0, 0],
              zB = [0, 0, 0],
              lB = [0, 0, 0];
            for (let RB = 0; RB < 3; RB++) PB[RB] = Math.min(65, Math.ceil((yB[RB] - jB[RB]) / MB) + 1), zB[RB] = jB[RB] - MB / 2, lB[RB] = zB[RB] + PB[RB] * MB;
            const pB = new Uint32Array(Math.ceil(PB[0] * PB[1] * PB[2] / 32)),
              qB = new Float64Array(9),
              ZB = [0, 0, 0],
              NB = [0, 0, 0];
            for (let RB = 0; RB + 2 < YB; RB += 3)
              if (!oB(RB)) {
                for (let OB = 0; OB < 3; OB++) {
                  const GB = QB(RB + OB);
                  for (let YB = 0; YB < 3; YB++) qB[3 * OB + YB] = BB[3 * GB + YB]
                }
                for (let BB = 0; BB < 3; BB++) {
                  const OB = Math.min(qB[BB], qB[3 + BB], qB[6 + BB]),
                    GB = Math.max(qB[BB], qB[3 + BB], qB[6 + BB]);
                  ZB[BB] = Math.max(0, Math.floor((OB - zB[BB]) / MB - 1e-6)), NB[BB] = Math.min(PB[BB] - 1, Math.floor((GB - zB[BB]) / MB + 1e-6))
                }
                for (let BB = ZB[2]; BB <= NB[2]; BB++)
                  for (let OB = ZB[1]; OB <= NB[1]; OB++)
                    for (let GB = ZB[0]; GB <= NB[0]; GB++)
                      if (cG(qB, zB[0] + (GB + .5) * MB, zB[1] + (OB + .5) * MB, zB[2] + (BB + .5) * MB, MB / 2)) {
                        const YB = GB + PB[0] * (OB + PB[1] * BB);
                        pB[YB >>> 5] |= 1 << (31 & YB)
                      }
              } return {
              words: pB,
              lo: zB,
              hi: lB,
              cell: MB,
              dims: PB
            }
          }((0, py.i)(QB, BB.vertexCount), OB ? BB.indexData : null, GB, YB, DB) : null;
        if (!oB) return null;
        const {
          words: jB,
          ...yB
        } = oB;
        if (this.gridTop + jB.length > iG) return void(this.gridsFull = !0);
        const JB = this.gridTop;
        return this.gridTop += jB.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * JB, jB), {
          ...yB,
          at: JB
        }
      }
    }
    const Zy = Math.cos(1 * Math.PI / 180);

    function Ny(BB, OB) {
      return BB[0] * OB[0] + BB[1] * OB[1] + BB[2] * OB[2] < Zy
    }
    async function Ry(BB) {
      const {
        pixels: OB,
        width: GB,
        height: YB
      } = await BO(BB), DB = new Uint8Array(GB * YB);
      for (let QB = 0; QB < DB.length; QB++) DB[QB] = OB[4 * QB + 3];
      return {
        width: GB,
        height: YB,
        alpha: DB
      }
    }
    class Wy {
      constructor(BB, OB) {
        this.device = BB, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(aG.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = BB.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = BB.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * zG,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = BB.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [GB, YB, DB] = aG.q;
        this.volume = BB.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: GB,
            height: YB,
            depthOrArrayLayers: DB
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
          size: aG.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = OB ? new qy(BB) : null, this.entityStandIn = OB ? null : BB.createBuffer({
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
        var BB, OB;
        const GB = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || GB.push("Lite sun shadow volume pipeline compiling");
        const YB = null !== (BB = null === (OB = this.casters) || void 0 === OB ? void 0 : OB.planesLoading) && void 0 !== BB ? BB : 0;
        return YB > 0 && GB.push(`${YB} Lite sun shadow plane casters loading their textures`), GB
      }
      entries() {
        var BB, OB, GB, YB;
        const DB = vO.n;
        return [{
          binding: DB.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: DB.sz,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: DB.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: DB.volume,
          resource: this.volumeView
        }, {
          binding: DB.sampler,
          resource: this.volumeSampler
        }, {
          binding: DB.entities,
          resource: {
            buffer: null !== (BB = null === (OB = this.entities) || void 0 === OB ? void 0 : OB.frameBuffer) && void 0 !== BB ? BB : this.entityStandIn
          }
        }, {
          binding: DB.entityGrids,
          resource: {
            buffer: null !== (GB = null === (YB = this.entities) || void 0 === YB ? void 0 : YB.gridBuffer) && void 0 !== GB ? GB : this.entityStandIn
          }
        }]
      }
      prepare(BB, OB, GB) {
        var YB;
        this.entitiesThisFrame = !1;
        const DB = null !== (YB = null === GB || void 0 === GB ? void 0 : GB.sunShadowReach()) && void 0 !== YB ? YB : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!GB || !DB.sunShadow && !DB.airShadow) return void(this.volumeHolds = null);
        if (BB.mP.qP !== xO) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${BB.mP.qP}; everything is lit.`)));
        const QB = this.start(BB);
        this.casters.update(BB.JP, BB.JP.kl.length);
        const oB = BB.Tz;
        for (let zB = 0; zB < 3; zB++) this.eye[zB] = OB[zB] + oB[zB];
        const jB = (0, aG.v)(this.eye);
        this.staleNear = jB;
        const yB = BB.mP.Vq;
        QB.update(this.eye, ((BB, OB, GB) => yB.Sq(BB, OB, GB)), 1);
        const JB = (0, aG.s)(GB.nOB()),
          MB = QB.eyeChunk,
          PB = this.uniformInts;
        for (let zB = 0; zB < 3; zB++) PB[zB] = MB[zB], PB[4 + zB] = jB[zB];
        this.entitiesThisFrame = null !== this.entities && DB.sunShadow, this.entitiesThisFrame && rG(this.uniformFloats, 8, OB, JB), null !== this.volumeHolds && (this.castersWritten || Ny(JB, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(jB, JB, MB)
      }
      markStale(BB) {
        const OB = this.staleNear,
          GB = xO,
          YB = [BB.i * GB, BB.j * GB, BB.k * GB];
        for (let QB = 0; QB < 3; QB++)
          if (YB[QB] + GB <= OB[QB] - GB || YB[QB] >= OB[QB] + aG.q[QB] + GB) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const DB = this.stale;
        for (let QB = 0; QB < DB.length; QB += 4)
          if (DB[QB] === BB.i && DB[QB + 1] === BB.j && DB[QB + 2] === BB.k) return void(DB[QB + 3] = this.swept);
        if (16 === DB.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        DB.push(BB.i, BB.j, BB.k, this.swept)
      }
      writeStale() {
        const BB = this.swept,
          OB = this.stale;
        this.staleAll && BB - this.staleAllSwept >= aG.h && (this.staleAll = !1, OB.length = 0);
        let GB = 0;
        for (let DB = 0; DB < OB.length; DB += 4)
          if (BB - OB[DB + 3] < aG.h) {
            for (let BB = 0; BB < 4; BB++) OB[GB + BB] = OB[DB + BB];
            GB += 4
          } OB.length = GB;
        const YB = this.uniformInts;
        YB[3] = this.staleAll ? 5 : GB / 4;
        for (let DB = 0; DB < 4; DB++)
          for (let BB = 0; BB < 3; BB++) YB[16 + 4 * DB + BB] = 4 * DB < GB ? OB[4 * DB + BB] * xO : 0
      }
      writeUniform() {
        const BB = this.uniformInts;
        let OB = this.uniformWritten;
        if (OB) {
          let GB = !0;
          for (let YB = 0; YB < BB.length && GB; YB++) GB = BB[YB] === OB[YB];
          if (GB) return
        }
        OB ??= this.uniformWritten = new Int32Array(BB.length), OB.set(BB), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(BB) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, BB)
      }
      computeVolume(BB, OB, GB) {
        const YB = this.buildVolumePass();
        if (!YB) return void(this.volumeHolds = null);
        const DB = (0, aG.t)(this.volumeHolds, BB);
        this.volumeHolds = BB;
        const QB = 1 === DB.length && DB[0].size.every(((BB, OB) => BB === aG.q[OB])),
          oB = this.sweptChunk,
          jB = this.sweptLight,
          yB = OB[0] !== jB[0] || OB[1] !== jB[1] || OB[2] !== jB[2],
          JB = GB[0] !== oB[0] || GB[1] !== oB[1] || GB[2] !== oB[2],
          MB = yB && Ny(OB, jB);
        if ((QB || this.written || JB || MB) && (this.fastLeft = aG.h), QB || this.written || yB || JB) {
          this.written = !1;
          for (let BB = 0; BB < 3; BB++) oB[BB] = GB[BB], jB[BB] = OB[BB];
          this.sweepLeft = QB ? 0 : aG.h
        }
        if (QB ? this.swept += aG.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, DB.push(...(0, aG.w)(BB, this.slice)), this.slice = (this.slice + 1) % aG.h, this.swept++), 0 === DB.length) return;
        const PB = (0, aG.x)(this.workData, OB, DB);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const zB = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          lB = zB.beginComputePass({
            label: "sun-shadow-volume"
          });
        lB.setPipeline(YB.pipeline), lB.setBindGroup(bG.group, YB.bindGroup), lB.dispatchWorkgroups(Math.ceil(PB / aG.l)), lB.end(), this.device.queue.submit([zB.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const BB = bG,
          OB = GPUShaderStage.COMPUTE,
          GB = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: BB.uniform,
              visibility: OB,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: BB.sz,
              visibility: OB,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: BB.special,
              visibility: OB,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: BB.work,
              visibility: OB,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: BB.volume,
              visibility: OB,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          YB = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: GB,
            entries: [{
              binding: BB.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: BB.sz,
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
            bindGroupLayouts: [GB]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: CG()
            }),
            entryPoint: "main"
          }
        }).then((BB => {
          this.volumePass = {
            pipeline: BB,
            bindGroup: YB
          }
        }), (BB => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(BB)}`)
        })), null
      }
      start(BB) {
        if (this.window) return this.window;
        const OB = (BB, OB) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * BB, OB)
        };
        this.casters = new Jy(((BB, GB) => {
          this.castersWritten = !0, OB(BB, GB)
        }), Ry);
        const GB = new ly(this.casters, ((BB, OB) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * BB, OB)
        }), OB);
        GB.encoded = BB => {
          this.markStale(BB)
        };
        const YB = BB => {
          GB.chunkAdded(BB)
        };
        return BB.mP.on("chunkAdded", YB), this.stopWindow = () => {
          BB.mP.removeListener("chunkAdded", YB)
        }, this.window = GB, GB
      }
    }
    var Ay = GB(39385),
      Vy = GB(39388);
    const Sy = 0,
      ny = 3,
      Uy = 4,
      fy = 5;

    function ky(BB, OB, GB, YB) {
      BB.drawOffset(OB, YB + Sy), OB[YB + ny] = BB.drawTime(), GB[YB + Uy] = BB.ring.drawStart(), GB[YB + fy] = BB.ring.drawCount()
    }
    const dy = `\n${XY}\n\nconst MAX_STOPS = ${Vy.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Vy.b/4}>,\n\tcolor1: array<vec4f, ${Vy.b}>,\n\tcolor2: array<vec4f, ${Vy.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Vy.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Vy.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var Ky = GB(44735);
    class uy {
      constructor(BB, OB, GB, YB) {
        this.device = BB, this.system = OB, this.frameIndex = GB, this.bindings = YB, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Ky.g)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (BB, OB) => {
          this.device.queue.writeBuffer(this.ring, BB * Vy.d * 4, this.system.ring.records, BB * Vy.d, (OB - BB) * Vy.d)
        };
        const {
          name: DB
        } = OB;
        this.ring = BB.createBuffer({
          label: `particles-${DB}`,
          size: OB.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = BB.createBuffer({
          label: `particles-uniforms-${DB}`,
          size: 4 * Vy.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(BB) {
        const OB = (0, Ky.e)(this.system, this.uniformBits, BB);
        OB && (this.uniformBits = OB, this.device.queue.writeBuffer(this.uniforms, 0, OB))
      }
      bind() {
        const {
          system: BB
        } = this, OB = this.texture;
        (0, Ky.k)(BB, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${BB.name}`,
          size: [Vy.h, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Vy.h
        }, [Vy.h, 1]));
        const GB = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === OB.view && this.boundSampler === OB.sampler && this.boundRamp === GB || (this.boundView = OB.view, this.boundSampler = OB.sampler, this.boundRamp = GB, this.bindGroup = this.device.createBindGroup({
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
            resource: OB.sampler
          }, {
            binding: 3,
            resource: OB.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: GB
          }]
        }))
      }
      destroy() {
        var BB;
        this.ring.destroy(), this.uniforms.destroy(), null === (BB = this.ramp) || void 0 === BB || BB.destroy()
      }
    }
    class my {
      constructor(BB, OB) {
        this.device = BB, this.resources = OB, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, IO.c)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (BB, OB) => (this.bindTarget(OB), {
            renderable: this.renderable,
            pipeline: KO(this.device, OB),
            draw: BB => OB === this.preparedTarget ? this.draw(BB) : 0
          })
        }
      }
      rebind(BB) {
        this.device = BB, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [OB, GB] of this.systems) {
          const YB = new uy(BB, OB, GB.frameIndex, this.bindings),
            DB = OB.ring.drawCount();
          DB > 0 && YB.upload(0, DB), this.systems.set(OB, YB)
        }
      }
      build() {
        const {
          device: BB
        } = this, OB = BB.createBindGroupLayout({
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
          bindGroupLayouts: [nO(BB), OB, this.frameLayout]
        }), this.module = BB.createShaderModule({
          label: "particles",
          code: dy
        });
        const GB = BB.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        BB.queue.writeTexture({
          texture: GB
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: OB,
          rampSampler: BB.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: GB.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get SQB() {
        return this.systems.size
      }
      reset() {
        for (const BB of this.systems.keys()) BB.reset()
      }
      describePendingWork() {
        return (0, Ay.f)(this.systems.keys(), "Lite")
      }
      gL(BB, OB) {
        const GB = new Ay.b(BB, OB, this);
        return this.systems.set(GB, new uy(this.device, GB, this.allocateFrameIndex(), this.bindings)), GB
      }
      POB(BB, OB) {
        for (const GB of this.systems.keys()) GB.POB(BB, OB)
      }
      canDraw(BB) {
        const OB = this.systems.get(BB),
          GB = BB.texture ? this.resources.boundTexture(BB.texture) : null;
        if (!OB || !GB || !this.targetPipelines) return !1;
        if (OB.texture = GB, OB.pipelines.length = 0, !DO(BB.blendMode)) return this.warnOnce(`blend:${BB.blendMode}`, `particle blend mode ${BB.blendMode} is not drawn (${BB.name})`), !0;
        const YB = (0, TB.o)(BB.blendMode);
        for (const DB of YB) {
          const BB = this.pipelineFor(DB);
          if (!1 === BB) return OB.pipelines.length = 0, !0;
          BB && OB.pipelines.push(BB)
        }
        return OB.pipelines.length === YB.length
      }
      disposeStopped(BB) {
        BB.dispose()
      }
      remove(BB) {
        const OB = this.systems.get(BB);
        OB && (this.systems.delete(BB), OB.destroy(), this.freeFrameIndices.push(OB.frameIndex))
      }
      prepare(BB) {
        const OB = BB.animationRatio || 1;
        uO(this.renderable._worldCenter, BB, fO), this.preparedTarget = this.target, this.draws.length = 0;
        let GB = 0;
        for (const YB of this.systems.values()) {
          const BB = YB.system;
          if (!BB.animateIfActive(OB)) continue;
          if (BB.ring.takeUploads(YB.upload), !BB.hasLiveParticles() || 0 === YB.pipelines.length) continue;
          YB.writeUniforms(this.warnOnce), YB.bind();
          const DB = 64 * YB.frameIndex;
          YB.count = BB.ring.drawCount(), ky(BB, this.frameData, this.frameBits, DB), GB = Math.max(GB, DB + 64), this.draws.push(YB)
        }
        GB > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, GB)
      }
      draw(BB) {
        let OB = 0,
          GB = null;
        for (const YB of this.draws) {
          BB.setBindGroup(1, YB.bindGroup), BB.setBindGroup(2, this.frameBindGroup, [256 * YB.frameIndex]);
          for (const DB of YB.pipelines) DB !== GB && (BB.setPipeline(DB), GB = DB), BB.draw(4, YB.count), OB++
        }
        return OB
      }
      bindTarget(BB) {
        this.target = BB;
        const OB = `${BB._colorFormat}|${BB._depthStencilFormat}|${BB._depthCompare}|${BB._sampleCount}`;
        let GB = this.pipelines.get(OB);
        GB || (GB = new Map, this.pipelines.set(OB, GB)), this.targetPipelines = GB
      }
      pipelineFor(BB) {
        var OB;
        const GB = this.targetPipelines,
          YB = GB.get(BB);
        if (void 0 !== YB) return YB;
        GB.set(BB, null);
        const DB = this.target,
          QB = BB === TB.d,
          oB = null !== (OB = DB._depthCompare) && void 0 !== OB ? OB : UO,
          {
            device: jB
          } = this;
        return jB.createRenderPipelineAsync({
          label: `particles-${BB}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: RO({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: QB ? 1 : 0
            }
          }, DB, QO((0, TB.k)(BB))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: DB._depthStencilFormat ? {
            format: DB._depthStencilFormat,
            depthCompare: oB,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: DB._sampleCount
          }
        }).then((OB => {
          GB.set(BB, OB)
        }), (OB => {
          GB.set(BB, !1), console.error("Lite particle pipeline failed", OB), MO(jB, "particles", `blend-${BB}`, OB)
        })), null
      }
      allocateFrameIndex() {
        const BB = this.freeFrameIndices.pop();
        if (void 0 !== BB) return BB;
        const OB = this.nextFrameIndex++;
        if (64 * (OB + 1) > this.frameData.length) {
          const BB = new Float32Array(2 * this.frameData.length);
          BB.set(this.frameData), this.frameData = BB, this.frameBits = new Uint32Array(BB.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return OB
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
    class Iy {
      constructor(BB, OB, GB, YB, DB) {
        this.lite = BB, this.canvas = OB, this.info = GB, this.resources = DB, this.fDB = !1, this.needPOTTextures = !1, this.MBB = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = OB.width, this.renderHeight = OB.height, this.caps = {
          maxTextureSize: YB.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: YB.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(BB) {
        this.lite = BB, (0, EB.q)(BB, this.renderWidth, this.renderHeight)
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
      setSize(BB, OB) {
        if (this.renderWidth === BB && this.renderHeight === OB) return !1;
        const GB = this.renderWidth,
          YB = this.renderHeight;
        this.renderWidth = BB, this.renderHeight = OB;
        const DB = this.lite;
        if (null === DB) return !0;
        try {
          (0, EB.q)(DB, BB, OB)
        } catch (QB) {
          if (QB instanceof DOMException && "InvalidStateError" === QB.name) {
            this.renderWidth = GB, this.renderHeight = YB;
            try {
              (0, EB.q)(DB, GB, YB)
            } catch {
              this.canvas.width = GB, this.canvas.height = YB
            }
            return console.warn("WebGPU could not allocate render targets for resize", BB, OB, QB.message), !1
          }
          throw QB
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
      zW() {
        const BB = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : BB - this.lastFrameTime, this.lastFrameTime = BB
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(BB, OB) {
        const GB = document.createElement("canvas");
        return GB.width = BB, GB.height = OB, GB
      }
      lBB(BB, OB) {
        var GB;
        return null !== (GB = this.resources.lBB.get(BB)) && void 0 !== GB ? GB : new zO(this.resources, BB, OB)
      }
      atlasArrays(BB) {
        return this.resources.atlasArrays(BB)
      }
    }
    class Fy {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(BB) {
        this.fov = BB.fov, this.nearPlane = BB.near, this.farPlane = BB.far;
        const OB = BB.worldMatrix;
        for (let GB = 0; GB < 16; GB++)
          if (this.worldMatrix[GB] !== OB[GB]) return this.worldMatrix.set(OB), void this.worldMatrixVersion++
      }
    }
    class iy {
      constructor(BB, OB, GB, YB) {
        this.canvas = OB, this.options = GB, this.oYB = void 0, this.backendName = "WebGPU (Lite)", this.mBB = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Fy, this.lastFrameTime = 0, this.engine = void 0, this.eq = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.UP = null, this.firstTerrain = null, this.trialFrames = 0, this.install(BB);
        const {
          resources: DB,
          meshes: QB
        } = BB;
        this.resources = DB, this.particles = BB.particles, this.oYB = new Iy(BB.engine, OB, YB, BB.device.limits, DB), (0, dB.y)({
          sJ: BB => {
            IB(BB) && DB.textureSlot(BB)
          },
          loaded: BB => IB(BB) ? DB.textureLoaded(BB) : null,
          canvasUpdated: (BB, OB, GB) => {
            IB(BB) && DB.canvasUpdated(BB, OB, GB)
          }
        }), this.mBB = QB.mBB, this.modelMeshes = QB.modelMeshes
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
        this.engine = BB.engine, this.eq = BB.eq, this.sceneTask = BB.sceneTask, this.device = BB.device, this.liteTerrain = BB.terrain, this.meshes = BB.meshes, this.sunShadow = BB.sunShadow;
        const OB = new aB(BB.device.lost);
        this.refusals = OB, OB.deviceLost.then((() => {
          var OB;
          OB = BB.device, yO.add(OB)
        })), BB.eq.camera = this.camera
      }
      async rebuild() {
        var BB, OB, GB, YB, DB;
        const QB = await Xy();
        this.halted = !0, this.liteTerrain.retire(), null === (BB = this.sunShadow) || void 0 === BB || BB.dispose(), this.oYB.detach();
        try {
          (0, cB.c)(this.engine)
        } catch (MB) {
          console.warn("Lite: disposing the lost device's engine threw", MB)
        }
        const oB = {
            width: this.oYB.renderWidth,
            height: this.oYB.renderHeight
          },
          jB = await wy(this.canvas, this.options, oB, QB),
          yB = AO(jB),
          JB = Ey(yB);
        try {
          this.resources.rebind(jB, yB), this.particles.rebind(yB), this.mBB.dropSteady();
          const BB = {
              resources: this.resources,
              particles: this.particles,
              mBB: this.mBB,
              modelMeshes: this.modelMeshes
            },
            OB = await cy(jB, yB, this.options, BB),
            GB = JB();
          if (null !== GB) throw new Error(`WebGPU device lost while Lite was rebuilding (${GB.reason}): ${GB.message}`);
          const {
            r: YB,
            g: DB,
            b: QB
          } = this.eq.clearColor;
          this.install(OB), this.setClearColour(YB, DB, QB), this.oYB.rebind(jB)
        } catch (MB) {
          throw yB.destroy(), MB
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (OB = this.UP) || void 0 === OB || OB.resize(), null === (GB = this.UP) || void 0 === GB || null === (YB = GB.kz) || void 0 === YB || null === (DB = YB.pW) || void 0 === DB || DB.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((BB, OB) => {
          this.firstTerrain = {
            drawn: BB,
            failed: OB
          }
        }))
      }
      get castsEntitySunShadows() {
        var BB, OB;
        return null !== (BB = null === (OB = this.sunShadow) || void 0 === OB ? void 0 : OB.tracesEntities) && void 0 !== BB && BB
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(BB) {
        this.UP = BB, this.modelMeshes.attach(BB.model, BB.sceneMirror);
        const OB = BB.eq;
        this.setClearColour(OB.clearColor.r, OB.clearColor.g, OB.clearColor.b), OB.draw = () => {
          this.drawFrame(BB, OB)
        }
      }
      get WP() {
        return !this.refusals.lost && !this.halted
      }
      render(BB) {
        if (this.WP) {
          try {
            this.oYB.zW(), BB.eq.render()
          } catch (OB) {
            throw this.refusals.frameFailed(OB), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(OB), this.firstTerrain = null), OB
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var BB, OB, GB, YB;
        const DB = [...this.particles.describePendingWork(), ...null !== (BB = null === (OB = this.sunShadow) || void 0 === OB ? void 0 : OB.describePendingWork()) && void 0 !== BB ? BB : []],
          QB = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (GB = this.terrain.sceneDepth) && void 0 !== GB && GB.compiling ? 1 : 0) + (null !== (YB = this.terrain.shadowMask) && void 0 !== YB && YB.compiling ? 1 : 0);
        QB > 0 && DB.push(`${QB} Lite pipelines compiling`);
        const oB = this.terrain.buffersAwaitingVerdict;
        oB > 0 && DB.push(`${oB} Lite terrain buffers awaiting their out-of-memory verdict`);
        const jB = this.resources.texturesLoading;
        return jB > 0 && DB.push(`${jB} Lite textures loading`), DB
      }
      prepareTexture(BB) {
        return null !== this.resources.boundTexture(BB) || this.resources.textureFailed(BB)
      }
      drawFrame(BB, OB) {
        var GB, YB, DB, QB, oB, jB;
        const yB = Rj(BB);
        this.camera.copyFromView(yB), this.setClearColour(yB.clearColour[0], yB.clearColour[1], yB.clearColour[2]), null === (GB = this.sunShadow) || void 0 === GB || GB.prepare(BB.kz, yB.eye, null !== (YB = BB.kz.zp) && void 0 !== YB ? YB : null), this.terrain.prepare(BB, yB), null === (DB = this.terrain.sceneDepth) || void 0 === DB || DB.setPlanes(yB.near, yB.far), null === (QB = this.terrain.shadowMask) || void 0 === QB || QB.prepare(yB), Yj(this.sceneTask), this.meshes.prepare(OB, yB, BB.model.earthSky, null !== (oB = BB.kz.zp) && void 0 !== oB ? oB : null), this.particles.prepare(yB);
        const JB = performance.now();
        this.resources.flushUploads(), null === (jB = this.sunShadow) || void 0 === jB || jB.traceEntities(this.meshes);
        try {
          (0, EB.p)(this.engine, this.lastFrameTime > 0 ? JB - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = JB, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(JB), this.firstTerrain = null)
      }
      setClearColour(BB, OB, GB) {
        const YB = this.eq.clearColor;
        YB.r = BB, YB.g = OB, YB.b = GB, YB.a = 1
      }
    }

    function Ly(BB) {
      const OB = {};
      for (const GB in BB.limits) {
        const YB = BB.limits[GB];
        "number" === typeof YB && (OB[GB] = YB)
      }
      return OB
    }
    const gy = "WebGPU device lost while Lite was starting";
    async function ry(BB, OB) {
      const GB = await Xy(),
        YB = GB.info,
        DB = {
          vendor: (null === YB || void 0 === YB ? void 0 : YB.vendor) || "unknown vendor",
          renderer: (null === YB || void 0 === YB ? void 0 : YB.architecture) || "unknown renderer",
          version: (null === YB || void 0 === YB ? void 0 : YB.description) || "unknown version"
        };
      BB.style.background = "black";
      const QB = await wy(BB, OB, OB.bufferSize, GB),
        oB = AO(QB),
        jB = Ey(oB);
      try {
        const GB = new iy(await cy(QB, oB, OB, null), BB, OB, DB),
          YB = jB();
        if (null !== YB) {
          const {
            reason: BB,
            message: OB
          } = YB;
          throw Object.assign(new Error(`${gy} (${BB}): ${OB}`), {
            fallbackReason: gy
          })
        }
        return GB
      } catch (yB) {
        throw oB.destroy(), null === jB() ? yB : (0, Gj.f)(yB, "device")
      }
    }
    async function Xy() {
      const BB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!BB) throw (0, Gj.f)(new Error("No WebGPU adapter"), "no_adapter");
      return BB
    }
    async function wy(BB, OB, GB, YB) {
      let DB;
      try {
        DB = await (0, EB.e)(BB, {
          msaaSamples: OB.XYB ? 4 : 1,
          requiredLimits: Ly(YB),
          alphaMode: "premultiplied"
        })
      } catch (oB) {
        throw (0, Gj.f)(oB, "#47" === (null === (QB = oB) || void 0 === QB ? void 0 : QB.message) ? "no_adapter" : "device")
      }
      var QB;
      return null !== GB && (0, EB.q)(DB, GB.width, GB.height), DB
    }

    function Ey(BB) {
      let OB = null;
      return BB.lost.then((BB => {
        OB = BB, console.error(`WebGPU device lost (${BB.reason}): ${BB.message}`)
      })), () => OB
    }
    async function cy(BB, OB, GB, YB) {
      var DB, QB;
      let {
        sceneDepth: oB,
        sunShadow: jB
      } = GB;
      const yB = (0, hB.b)(BB),
        JB = null !== (DB = null === YB || void 0 === YB ? void 0 : YB.resources) && void 0 !== DB ? DB : new to(BB, OB),
        MB = new Oy(OB),
        PB = new Lo(OB, JB, (BB => function(BB, OB) {
          for (const YB of VO(BB)) {
            var GB;
            if (YB._targetSignature === OB) return null !== (GB = YB._sceneBG) && void 0 !== GB ? GB : null
          }
          return null
        }(yB, BB)), null === YB || void 0 === YB ? void 0 : YB.mBB, null === YB || void 0 === YB ? void 0 : YB.modelMeshes),
        zB = null !== (QB = null === YB || void 0 === YB ? void 0 : YB.particles) && void 0 !== QB ? QB : new my(OB, JB);
      for (const qB of function(BB, OB, GB) {
          return [OB.opaqueRenderable, BB.opaqueRenderable, BB.skyLastRenderable, GB.renderable, OB.transparentRenderable, BB.transparentRenderable, BB.frontRenderable]
        }(PB, MB, zB)) WO(yB, qB);
      const lB = function(BB) {
        for (const OB of VO(BB))
          if ("eq" === OB.name) return OB;
        throw new Error("Lite: the scene has no render task named scene")
      }(yB);
      oB && MB.installSceneDepth(lB, BB);
      const pB = jB ? new Wy(OB, jB.entities) : null;
      return MB.sunShadow = pB, pB && null !== jB && void 0 !== jB && jB.entities && (MB.shadowMask = new ij(OB, lB, BB, MB)), PB.sunShadow = pB, await (0, hB.e)(yB), {
        engine: BB,
        eq: yB,
        sceneTask: lB,
        device: OB,
        terrain: MB,
        meshes: PB,
        sunShadow: pB,
        resources: JB,
        particles: zB
      }
    }
  },
  41714: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      e: () => YB,
      f: () => zB,
      g: () => MB,
      j: () => ZB,
      k: () => QB,
      n: () => jB,
      o: () => yB,
      p: () => oB,
      t: () => qB,
      w: () => lB,
      z: () => pB
    });
    const YB = 3,
      DB = 0,
      QB = 1,
      oB = 2,
      jB = {
        uniform: 3,
        sz: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      yB = 10,
      JB = "BloxdPackInputs",
      MB = "bloxdPackInputs",
      PB = [{
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

    function lB() {
      const BB = PB.map((BB => {
        let {
          name: OB,
          type: GB
        } = BB;
        return `    ${OB}: ${GB},\n`
      })).join("");
      return `struct ${JB} {\n${BB}}\n@group(${YB}) @binding(${DB}) var<uniform> ${MB}: ${JB};\n`
    }

    function pB(BB, OB) {
      const GB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, zB),
        [YB, DB, QB, oB, jB, yB] = PB;
      GB.setFloat32(YB.offset, OB.seconds, !0), GB.setUint32(DB.offset, OB.lit ? 1 : 0, !0);
      for (let JB = 0; JB < 3; JB++) GB.setInt32(QB.offset + 4 * JB, OB.renderOffset[JB], !0), GB.setFloat32(oB.offset + 4 * JB, OB.nOB[JB], !0), GB.setFloat32(jB.offset + 4 * JB, OB.eyePosition[JB], !0), GB.setFloat32(yB.offset + 4 * JB, OB.shadowDirection[JB], !0)
    }

    function qB(BB) {
      const OB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, GB) => {
        let {
          id: YB,
          rotation: DB
        } = BB;
        OB[GB] = 65535 & YB | (3 & DB) << 16
      })), OB
    }
    const ZB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);