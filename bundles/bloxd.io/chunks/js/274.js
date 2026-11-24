export const id = 274;
export const ids = [274];
export const modules = {
  41693: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => yB,
      g: () => NB,
      k: () => IB,
      o: () => UB
    });
    var QB = zB(37372),
      nB = zB(38811),
      dB = zB(38802);

    function IB(BB, jB, zB, QB) {
      const nB = dB.w;
      jB.fill(0), BB.gravity.toArray(jB, nB.gravity), BB.colorDead.toArray(jB, nB.colorDead), zB[nB.ramp] = BB.useRampGradients ? 1 : 0;
      const IB = BB.getColorGradients(),
        NB = rB(BB, IB, "colour", QB);
      zB[nB.colorCount] = NB;
      for (let dB = 0; dB < NB; dB++) {
        var uB;
        const BB = IB[sB(IB, dB)];
        jB[nB.colorPositions + dB] = BB.gradient, BB.color1.toArray(jB, nB.color1 + 4 * dB), (null !== (uB = BB.color2) && void 0 !== uB ? uB : BB.color1).toArray(jB, nB.color2 + 4 * dB)
      }
      const UB = BB.getVelocityGradients(),
        aB = rB(BB, UB, "Hy", QB);
      zB[nB.velocityCount] = aB;
      for (let dB = 0; dB < aB; dB++) GB(jB, nB.Hy + 4 * dB, UB[sB(UB, dB)]);
      const pB = BB.useRampGradients ? BB.getColorRemapGradients() : null,
        JB = rB(BB, pB, "colour remap", QB);
      zB[nB.remapCount] = JB;
      for (let dB = 0; dB < JB; dB++) GB(jB, nB.remap + 4 * dB, pB[sB(pB, dB)])
    }

    function NB() {
      return {
        key: [],
        texels: new Uint8Array(4 * dB.k)
      }
    }
    const uB = [];

    function UB(BB, jB) {
      return aB(BB, uB), !kB(uB, jB.key) && (jB.key.length = 0, jB.key.push(...uB), jB.key.length > 0 && function(BB, jB) {
        for (let zB = 0; zB < dB.k; zB++) nB.j.GetCurrentGradient(zB / dB.k, BB, ((BB, jB, zB) => {
          QB.Color3.LerpToRef(BB.color, jB.color, zB, pB)
        })), jB[4 * zB] = 255 * pB.r, jB[4 * zB + 1] = 255 * pB.g, jB[4 * zB + 2] = 255 * pB.b, jB[4 * zB + 3] = 255
      }(BB.getRampGradients(), jB.texels), !0)
    }

    function aB(BB, jB) {
      jB.length = 0;
      const zB = BB.useRampGradients ? BB.getRampGradients() : null;
      if (null !== zB && void 0 !== zB && zB.length) {
        jB.push(zB.length);
        for (const BB of zB) jB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
      }
    }
    const pB = new QB.Color3;

    function rB(BB, jB, zB, QB) {
      return jB ? jB.length > dB.d ? (QB(`particleStops:${zB}`, `GPU particles use the first 2 and last ${dB.d-2} of more than ${dB.d} ${zB} gradient stops (${BB.name})`), dB.d) : jB.length : 0
    }

    function sB(BB, jB) {
      return jB < 2 || BB.length <= dB.d ? jB : BB.length - dB.d + jB
    }
    const JB = new Float32Array(dB.r),
      mB = new Uint32Array(JB.buffer);

    function yB(BB, jB, zB) {
      return IB(BB, JB, mB, zB), jB && kB(mB, jB) ? null : mB.slice()
    }

    function kB(BB, jB) {
      if (BB.length !== jB.length) return !1;
      for (let zB = 0; zB < BB.length; zB++)
        if (BB[zB] !== jB[zB]) return !1;
      return !0
    }

    function GB(BB, jB, zB) {
      var QB;
      BB[jB] = zB.gradient, BB[jB + 1] = zB.factor1, BB[jB + 2] = null !== (QB = zB.factor2) && void 0 !== QB ? QB : zB.factor1
    }
  },
  41248: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      const QB = jB * jB * 4,
        nB = BB[0].layers,
        dB = nB * (BB.length - 1) + BB[BB.length - 1].layers,
        IB = new Uint8Array(dB * QB);
      BB.forEach(((jB, zB) => {
        const dB = zB + 1 < BB.length ? Math.min(jB.layers, nB) : jB.layers;
        IB.set(new Uint8Array(jB.pixels.buffer, jB.pixels.byteOffset, dB * QB), zB * nB * QB)
      }));
      const NB = Math.max(1, Math.min(dB, zB || dB));
      if (NB === dB) return [{
        pixels: IB,
        layers: dB
      }];
      const uB = [];
      for (let UB = 0; UB < dB; UB += NB) {
        const BB = Math.min(dB, UB + NB);
        uB.push({
          pixels: IB.slice(UB * QB, BB * QB),
          layers: BB - UB
        })
      }
      return uB
    }
    zB.d(jB, {
      d: () => QB,
      h: () => dB
    });
    const nB = new WeakMap;

    function dB(BB, jB, zB) {
      var QB, dB;
      const IB = null !== (QB = nB.get(BB)) && void 0 !== QB ? QB : new Map;
      nB.set(BB, IB);
      const NB = null !== (dB = IB.get(jB[0])) && void 0 !== dB ? dB : [];
      IB.set(jB[0], NB);
      const uB = NB.find((BB => BB.urls.length === jB.length && BB.urls.every(((BB, zB) => BB === jB[zB]))));
      if (uB) return uB.built;
      const UB = {
        urls: [...jB],
        built: zB()
      };
      return NB.push(UB), UB.built.catch((() => {
        NB.splice(NB.indexOf(UB), 1)
      })), UB.built
    }
  },
  41690: (BB, jB, zB) => {
    function QB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const jB = new Set;
      return (zB, QB) => {
        jB.has(zB) || (jB.add(zB), console.warn(BB + QB))
      }
    }
    zB.d(jB, {
      b: () => QB
    })
  },
  41726: (BB, jB, zB) => {
    zB.d(jB, {
      createLiteRendererAsync: () => Pu,
      liteBabylonBackend: () => TB,
      setPipelineFailureHook: () => Nj
    });
    var QB = zB(37372),
      nB = zB(37711),
      dB = zB(37983),
      IB = zB(37315),
      NB = zB(37993);
    class uB extends NB.b {
      constructor() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        super(...jB), this.color = new QB.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: jB[0].aY().getUniqueId(),
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
    const UB = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      aB = BB => 1 << UB.indexOf(BB),
      pB = aB("VERTEXCOLOR"),
      rB = aB("INSTANCES"),
      sB = aB("THIN_INSTANCES"),
      JB = aB("INSTANCESCOLOR"),
      mB = aB("FOG"),
      yB = aB("LITE_FRONT_LAYER");

    function kB(BB, jB, zB, QB) {
      let nB = 0;
      return BB.isVerticesDataPresent("color") && (nB |= pB), "none" !== jB && (nB |= rB), "thin" === jB && (nB |= sB, BB.isVerticesDataPresent("instanceColor") && (nB |= JB)), QB.fogEnabled && BB.applyFog && 0 !== QB.fogMode && (nB |= mB), zB >= 1 && (nB |= yB), nB
    }

    function GB(BB, jB) {
      BB.updateColor4("color", jB.color, jB.alpha)
    }
    var LB = zB(37934),
      gB = zB(37534),
      tB = zB(37408),
      SB = zB(37283),
      MB = zB(37915),
      EB = zB(37926),
      iB = zB(37300),
      qB = zB(37307),
      fB = zB(37321);
    const oB = SB.c.GLSL;
    class HB {
      constructor(BB, jB) {
        this.name = BB, this.ny = jB, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.pY = {
          addOnce: BB => {
            this.disposers.push(BB)
          }
        }, this.uniqueId = jB.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      aY() {
        return this.ny
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
        return (0, iB.U)(this.model, BB.visibility, BB.hasVertexAlpha)
      }
      needAlphaTestingForMesh(BB) {
        return (0, iB.Y)(this.model, BB.visibility, BB.hasVertexAlpha)
      }
      dispose() {
        (0, gB.f)(this);
        for (const BB of this.disposers.splice(0)) BB()
      }
      get model() {
        return (0, iB.eb)(this)
      }
    }
    const DB = new WeakSet;

    function FB(BB) {
      return DB.has(BB)
    }

    function YB(BB) {
      DB.add(BB)
    }
    const VB = {
      create: (BB, jB) => ((0, tB.k)(BB, new HB(BB.name, jB)), qB.e.defines()),
      write: () => {},
      addFeature: (BB, jB) => {
        const zB = BB.mirror;
        jB.feature === EB.j && jB.state.dirLightCount > 0 && (BB.disableLighting = !0, (0, iB.ab)(BB)), "BLOXD_LIGHTING" in jB.defines && (0, gB.e)(zB), jB.feature === MB.h && ((0, LB.i)(jB.state, oB), function(BB, jB) {
          const zB = BB.aY().wJ();
          setTimeout((() => {
            zB.atlasArrays(jB.sources).then((zB => {
              (0, LB.e)(BB, jB, zB.map((BB => ({
                atlas: BB,
                layers: BB.layers
              }))), zB[0].layerWidth, oB)
            })).catch((BB => {
              console.error("Failed to build the atlas's texture arrays", BB)
            }))
          }))
        }(zB, jB.state))
      },
      texture: (BB, jB, zB) => {
        let {
          data: QB,
          sets: nB
        } = zB;
        var dB;
        (YB(BB), QB) && (BB.uvSet = null !== (dB = null === nB || void 0 === nB ? void 0 : nB.coordinatesIndex) && void 0 !== dB ? dB : 0, (0, tB.S)(BB.matrix, null !== nB && void 0 !== nB ? nB : {}))
      },
      cube: YB,
      canvas: (BB, jB, zB) => {
        let {
          width: QB,
          height: nB,
          mipmaps: dB,
          samplingMode: IB = fB.j.trilinear,
          hasAlpha: NB = !1,
          wrap: uB = fB.d.clamp
        } = zB;
        const UB = BB.wJ().createCanvas(QB, nB),
          aB = new fB.n("2d", {
            kind: "canvas",
            width: QB,
            height: nB,
            canvas: UB
          }, {
            samplingMode: IB,
            wrapU: uB,
            wrapV: uB,
            noMipmap: !dB,
            invertY: !0
          });
        return aB.hasAlpha = NB, YB(aB), aB
      }
    };
    var hB = zB(37551),
      XB = zB(37202);
    class ZB {
      constructor(BB, jB, zB) {
        this.engine = BB, this.clearColor = jB, this.ambientColor = zB, this.onBeforeRenderObservable = new XB.c, this.onBeforeCameraRenderObservable = new XB.c, this.onAfterRenderObservable = new XB.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.RL = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      wJ() {
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
        const jB = this.pending.indexOf(BB); - 1 !== jB && this.pending.splice(jB, 1)
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

    function AB() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const TB = {
      GzB: AB,
      AQB: (BB, jB) => {
        const zB = new ZB(BB.engine, QB.c.FromArray(jB.clearColor), QB.Color3.FromArray(jB.ambientColor));
        (0, IB.d)(VB, zB), BB.ny = zB,
          function(BB, jB) {
            const zB = Object.assign((0, hB.f)(BB, "camera"), {
              layerMask: 268435455
            });
            BB.model.nodes.setWorldSource(zB.row, BB.model.view.worldMatrix), BB.camera = jB.activeCamera = zB
          }(BB, zB), (0, nB.k)(BB, ((BB, jB, zB) => (0, dB.g)(BB, jB, zB, NB.b)))
      },
      VQB: () => {},
      setBabylonFog: () => {},
      PQB: AB,
      wQB: () => {},
      linesFromArrays: (BB, jB, zB) => (0, dB.g)(BB, jB, zB, uB),
      Iy: () => {},
      lQB: AB
    };
    var PB = zB(41795),
      WB = zB(41804),
      eB = zB(41815);
    class lB {
      constructor(BB) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const jB = new Promise((BB => {
          this.refused = BB
        }));
        this.deviceLost = Promise.race([BB, jB]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(BB) {
        (function(BB) {
          const {
            name: jB,
            message: zB
          } = null !== BB && void 0 !== BB ? BB : {};
          return "InvalidStateError" === jB && "string" === typeof zB && zB.startsWith("GPUDevice.")
        })(BB) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: BB.message,
          framesRefused: !0
        }))
      }
    }
    var wB = zB(41248),
      xB = zB(38822);

    function KB(BB) {
      return Math.max(4, 4 * Math.ceil(BB / 4))
    }

    function CB(BB, jB, zB, QB) {
      const nB = BB.createBuffer({
        label: QB,
        size: KB(jB.byteLength),
        usage: zB,
        mappedAtCreation: !0
      });
      return new Uint8Array(nB.getMappedRange(), 0, jB.byteLength).set(new Uint8Array(jB.buffer, jB.byteOffset, jB.byteLength)), nB.unmap(), nB
    }

    function cB(BB, jB) {
      return Math.floor(Math.log2(Math.max(BB, jB))) + 1
    }

    function bB(BB, jB, zB, QB, nB, dB) {
      const IB = BB.createTexture({
          label: dB,
          size: {
            width: zB,
            height: QB,
            depthOrArrayLayers: nB
          },
          format: "rgba8unorm",
          mipLevelCount: cB(zB, QB),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        NB = (jB, zB, QB, dB) => {
          BB.queue.writeTexture({
            texture: IB,
            mipLevel: zB
          }, jB, {
            bytesPerRow: 4 * QB,
            rowsPerImage: dB
          }, {
            width: QB,
            height: dB,
            depthOrArrayLayers: nB
          })
        };
      NB(jB, 0, zB, QB);
      let uB = 1;
      for (const UB of function*(BB, jB, zB, QB) {
          let nB = BB,
            dB = jB,
            IB = zB;
          for (; dB > 1 || IB > 1;) {
            const BB = Math.max(1, dB >> 1),
              jB = Math.max(1, IB >> 1),
              zB = new Uint8Array(BB * jB * QB * 4),
              NB = 4 * dB;
            let uB = 0;
            for (let UB = 0; UB < QB; UB++) {
              const QB = UB * NB * IB;
              for (let UB = 0; UB < jB; UB++) {
                const jB = QB + Math.min(2 * UB, IB - 1) * NB,
                  aB = QB + Math.min(2 * UB + 1, IB - 1) * NB;
                for (let QB = 0; QB < BB; QB++) {
                  const BB = 4 * Math.min(2 * QB, dB - 1),
                    IB = 4 * Math.min(2 * QB + 1, dB - 1);
                  for (let QB = 0; QB < 4; QB++) zB[uB++] = nB[jB + BB + QB] + nB[jB + IB + QB] + nB[aB + BB + QB] + nB[aB + IB + QB] + 2 >> 2
                }
              }
            }
            yield {
              data: zB,
              width: BB,
              height: jB
            }, nB = zB, dB = BB, IB = jB
          }
        }(jB, zB, QB, nB)) NB(UB.data, uB++, UB.width, UB.height);
      return IB
    }
    const vB = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function RB(BB) {
      if (BB.startsWith("data:")) {
        const jB = BB.search(/[;,]/);
        return `data:${jB>5?BB.slice(5,jB):""} URL of ${BB.length} characters`
      }
      return BB.length > 80 ? `${BB.slice(0,80)}...` : BB
    }
    async function OB(BB) {
      const jB = await fetch(BB);
      if (!jB.ok) throw new Error(`${RB(BB)}: ${jB.status} ${jB.statusText}`);
      return createImageBitmap(await jB.blob(), vB)
    }
    async function Bj(BB) {
      const jB = await OB(BB),
        zB = new OffscreenCanvas(jB.width, jB.height),
        QB = zB.getContext("2d", {
          willReadFrequently: !0
        });
      if (!QB) throw new Error("No 2D context to decode an image");
      QB.drawImage(jB, 0, 0);
      const {
        data: nB
      } = QB.getImageData(0, 0, jB.width, jB.height);
      return jB.close(), {
        pixels: new Uint8Array(nB.buffer, nB.byteOffset, nB.byteLength),
        width: zB.width,
        height: zB.height
      }
    }

    function jj(BB, jB) {
      return (0, wB.h)(BB, jB.urls, (async () => {
        const zB = await Promise.all(jB.urls.map((async (BB, zB) => {
            var QB, nB, dB, IB, NB;
            return null !== (IB = null !== (nB = null === (dB = jB.pixels) || void 0 === dB ? void 0 : dB[zB]) && void 0 !== nB ? nB : null, NB = jB.layerWidth, QB = null !== IB && void 0 !== IB && IB.byteLength && NB && IB.byteLength % (NB * NB * 4) === 0 ? {
              pixels: IB,
              layerWidth: NB,
              layers: IB.byteLength / (NB * NB * 4)
            } : null) && void 0 !== QB ? QB : await async function(BB) {
              const {
                pixels: jB,
                width: zB
              } = await Bj(BB);
              return {
                pixels: jB,
                layerWidth: zB,
                layers: jB.byteLength / (zB * zB * 4)
              }
            }(BB)
          }))),
          QB = zB[0].layerWidth;
        return (0, wB.d)(zB, QB, BB.limits.maxTextureArrayLayers).map(((zB, nB) => {
          let {
            pixels: dB,
            layers: IB
          } = zB;
          return {
            texture: bB(BB, dB, QB, QB, IB, `atlas-${nB}-${RB(jB.urls[0])}`),
            layerWidth: QB,
            layers: IB
          }
        }))
      }))
    }
    const zj = new Map([
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
      Qj = new Map([
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

    function nj(BB) {
      for (const jB of (0, xB.g)(BB))
        if (!Qj.has((0, xB.f)(jB))) return !1;
      return !0
    }

    function dj(BB) {
      const jB = Qj.get(BB);
      if (!jB) return null;
      const [zB, QB, nB] = jB;
      return {
        srcFactor: zj.get(zB),
        dstFactor: zj.get(QB),
        operation: nB
      }
    }
    let Ij = null;

    function Nj(BB) {
      Ij = BB
    }
    const uj = new WeakSet;

    function Uj(BB) {
      return uj.has(BB)
    }

    function aj(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var dB;
      Uj(BB) || (null === (dB = Ij) || void 0 === dB || dB(jB, zB, QB, nB))
    }
    class pj {
      constructor(BB) {
        this.resources = BB, this.matrixKey = {
          Ep: 0
        }, this.attributesKey = {
          Ep: 0
        }, this.inputs = Object.create(null);
        for (let jB = 0; jB < 4; jB++) this.inputs[`world${jB}`] = new Jj(this.matrixKey, 16 * jB, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(BB, jB) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, BB, !0), jB && this.resources.vertexBufferCreated(this.attributesKey, jB, !0)
      }
    }
    class rj extends pj {
      constructor(BB, jB, zB) {
        super(BB), this.mesh = jB, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const QB = this.inputs;
        let nB = 0;
        for (const {
            size: IB
          }
          of zB) nB += IB;
        for (const {
            name: IB,
            offset: NB,
            size: uB,
            type: UB
          }
          of zB) QB[IB] = new Jj(this.attributesKey, 4 * NB, 4 * nB, uB, !0, UB);
        this.rowStride = nB, BB.U1.set(jB, this);
        const dB = jB.isVerticesDataPresent;
        jB.isVerticesDataPresent = (BB, zB) => BB in QB || dB.call(jB, BB, zB)
      }
      attach(BB, jB) {
        this.matrices = BB, this.attributes = jB, this.bind(BB, jB), this.mirror(BB, BB.length, BB.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      x_(BB) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, BB ? 64 * BB : void 0)
      }
      b_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(BB, jB) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * BB, 16 * jB)
      }
      attributeRows(BB, jB) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, BB * this.rowStride, jB * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(BB, jB, zB) {
        const QB = this.mesh._thinInstanceDataStorage;
        QB.matrixData = BB, QB.matrixBufferSize = jB, QB.worldMatrices = null, QB.instancesCount = zB
      }
    }
    class sj extends pj {
      constructor(BB, jB, zB) {
        var QB, nB, dB, IB;
        super(BB), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (QB = null === zB || void 0 === zB ? void 0 : zB.interleavedKinds) && void 0 !== QB ? QB : null, this.offsets = null !== (nB = null === zB || void 0 === zB ? void 0 : zB.interleavedOffsets) && void 0 !== nB ? nB : [], this.rowStride = null !== (dB = null === zB || void 0 === zB ? void 0 : zB.interleavedRowStride) && void 0 !== dB ? dB : 0, null === (IB = this.layout) || void 0 === IB || IB.forEach(((BB, jB) => {
          this.inputs[BB] = new Jj(this.attributesKey, 4 * this.offsets[jB], 4 * this.rowStride, zB.strides[BB])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), BB.batchUploads.set(jB, this), jB.pY.addOnce((() => {
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
        const jB = this.packedBatch;
        return jB.renderSelf ? 0 === BB ? this.packedSource : jB.instances[BB - 1] : jB.instances[BB]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(BB, jB, zB, QB) {
        const nB = (jB.renderSelf ? 1 : 0) + jB.rows.length;
        if (this.frame = QB, this.count = nB, this.packedSource = BB, this.packedBatch = jB, 0 === nB) return;
        if (BB.getWorldMatrix(), 16 * nB > this.matrices.length) {
          let BB = this.matrices.length / 16;
          for (; BB < nB;) BB *= 2;
          this.matrices = new Float32Array(16 * BB), this.attributes &&= new Float32Array(BB * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let dB = 0;
        jB.renderSelf && this.packRow(dB++, BB, jB.row, zB);
        for (let IB = 0; IB < jB.rows.length; IB++) this.packRow(dB++, jB.instances[IB], jB.rows[IB], zB);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * nB), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, nB * this.rowStride)
      }
      packRow(BB, jB, zB, QB) {
        const nB = this.matrices;
        if (zB < 0) nB.set(jB.getWorldMatrix().m, 16 * BB);
        else
          for (let UB = 0; UB < 16; UB++) nB[16 * BB + UB] = QB[16 * zB + UB];
        const dB = this.attributes;
        if (!dB) return;
        const IB = jB.vY,
          NB = this.layout;
        for (let UB = 0; UB < NB.length; UB++) {
          var uB;
          const jB = null !== (uB = IB[NB[UB]]) && void 0 !== uB ? uB : 0,
            zB = BB * this.rowStride + this.offsets[UB];
          jB.toArray ? jB.toArray(dB, zB) : jB.copyToArray ? jB.copyToArray(dB, zB) : dB[zB] = jB
        }
      }
    }
    class Jj {
      constructor(BB, jB, zB, QB) {
        let nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = BB, this.byteOffset = jB, this.byteStride = zB, this.size = QB, this.instanced = nB, this.type = dB, this.normalized = IB
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
    const mj = "CANVAS_ALPHA_ONE",
      yj = `override ${mj}: bool = false;`,
      kj = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Gj(BB, jB, zB) {
      var QB;
      let nB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const dB = null !== (QB = jB._colorFormat) && void 0 !== QB ? QB : "bgra8unorm",
        IB = nB ? 15 : 0;
      return zB ? {
        ...BB,
        targets: [{
          format: dB,
          blend: {
            color: zB,
            alpha: kj
          },
          writeMask: IB
        }]
      } : {
        ...BB,
        constants: {
          ...BB.constants,
          [mj]: 1
        },
        targets: [{
          format: dB,
          writeMask: IB
        }]
      }
    }

    function Lj(BB, jB) {
      BB._renderables.push(jB)
    }

    function gj(BB) {
      return BB._device
    }

    function tj(BB) {
      var jB, zB;
      return null !== (jB = null === (zB = BB._frameGraph) || void 0 === zB ? void 0 : zB._tasks) && void 0 !== jB ? jB : []
    }

    function Sj(BB) {
      return BB._currentEncoder
    }

    function Mj(BB) {
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
    const Ej = "greater-equal",
      ij = 2e5,
      qj = 1e5,
      fj = new WeakMap;

    function oj(BB, jB) {
      let zB = fj.get(BB);
      if (!zB) {
        zB = {
          module: BB.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, fj.set(BB, zB)
      }
      const QB = `${jB._colorFormat}|${jB._depthStencilFormat}|${jB._sampleCount}`;
      let nB = zB.pipelines.get(QB);
      if (!nB) {
        var dB;
        const {
          module: IB
        } = zB;
        nB = BB.createRenderPipeline({
          label: `placeholder ${QB}`,
          layout: BB.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: IB,
            entryPoint: "v"
          },
          fragment: {
            module: IB,
            entryPoint: "f",
            targets: [{
              format: null !== (dB = jB._colorFormat) && void 0 !== dB ? dB : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: jB._depthStencilFormat ? {
            format: jB._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: jB._sampleCount
          }
        }), zB.pipelines.set(QB, nB)
      }
      return nB
    }

    function Hj(BB, jB, zB) {
      const QB = jB.eye,
        nB = jB.viewMatrix;
      BB[0] = QB[0] + nB[2] * zB, BB[1] = QB[1] + nB[6] * zB, BB[2] = QB[2] + nB[10] * zB
    }
    var Dj = zB(38037),
      Fj = zB(41690),
      Yj = zB(37291);
    const Vj = Math.PI,
      hj = Vj / 1.95,
      Xj = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Zj = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((BB => {
        let [jB, zB] = BB;
        return .434 * Vj * Math.pow(2 * Vj / jB, 2) * zB
      }));

    function Aj(BB, jB, zB) {
      const {
        up: QB,
        mieDirectionalG: nB
      } = BB, dB = 1 - Wj(1 - Math.exp(jB[1] / 45e4), 0, 1), IB = BB.rayleigh - (1 - dB), NB = Math.hypot(jB[0], jB[1], jB[2]), uB = NB > 0 ? 1 / NB : 0, UB = zB.sunDir;
      for (let sB = 0; sB < 3; sB++) UB[sB] = jB[sB] * uB;
      const aB = UB[0] * QB[0] + UB[1] * QB[1] + UB[2] * QB[2],
        pB = 1e3 * Math.max(0, 1 - Math.exp(-(hj - Math.acos(Wj(aB, -1, 1))) / 1.5));
      zB.sunE = pB;
      const rB = .2 * BB.turbidity * 1e-17 * BB.mieCoefficient;
      for (let sB = 0; sB < 3; sB++) {
        const BB = Xj[sB] * IB,
          jB = Zj[sB] * rB,
          QB = pB / (BB + jB);
        zB.inScatterR[sB] = BB * QB, zB.inScatterM[sB] = jB * QB, zB.extinctionBeta[sB] = 8400 * BB + 1250 * jB
      }
      return zB.sunsetMix = Wj(Math.pow(1 - aB, 5), 0, 1), zB.sunDiscE = 19e3 * pB, zB.mieScale = (1 - nB * nB) / (4 * Vj), zB.mieBase = 1 + nB * nB, zB.mieSlope = 2 * nB, zB
    }
    const Tj = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Pj = 1 / function(BB) {
      const {
        A: jB,
        B: zB,
        C: QB,
        D: nB,
        E: dB,
        F: IB
      } = Tj;
      return (BB * (jB * BB + QB * zB) + nB * dB) / (BB * (jB * BB + zB) + nB * IB) - dB / IB
    }(1e3);

    function Wj(BB, jB, zB) {
      return Math.min(Math.max(BB, jB), zB)
    }
    const ej = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function lj(BB, jB) {
      const zB = new Map(jB),
        QB = [],
        nB = [],
        dB = () => 0 === nB.length || nB[nB.length - 1].active;
      let IB = null;
      const NB = () => {
        const BB = [...zB].filter((BB => {
            let [, jB] = BB;
            return !0 !== jB
          })),
          jB = BB.map((BB => {
            let [jB] = BB;
            return jB
          })).join("|");
        IB = BB.length ? new RegExp(`\\b(${jB})\\b`, "g") : null
      };
      NB();
      for (const uB of BB.split("\n")) {
        const BB = ej.exec(uB);
        if (!BB) {
          dB() && QB.push(IB ? wj(uB, IB, zB) : uB);
          continue
        }
        const jB = BB[1],
          UB = BB[2].trim();
        if ("ifdef" === jB || "ifndef" === jB || "if" === jB) {
          const BB = dB(),
            QB = "if" === jB ? xj(UB, zB) : zB.has(UB) === ("ifdef" === jB);
          nB.push({
            active: BB && QB,
            parentActive: BB,
            taken: QB
          })
        } else if ("elif" === jB || "else" === jB) {
          const BB = nB[nB.length - 1];
          if (!BB) throw new Error(`#${jB} without #if`);
          const QB = !BB.taken && ("else" === jB || xj(UB, zB));
          BB.active = BB.parentActive && QB, BB.taken = BB.taken || QB
        } else if ("endif" === jB) {
          if (!nB.pop()) throw new Error("#endif without #if")
        } else if (dB()) {
          const [BB, ...QB] = UB.split(/\s+/);
          "undef" === jB ? zB.delete(BB) : zB.set(BB, !QB.length || QB.join(" ")), NB()
        }
      }
      if (nB.length) throw new Error("Unterminated #if");
      return QB.join("\n")
    }

    function wj(BB, jB, zB) {
      return BB.replace(jB, (BB => {
        const jB = zB.get(BB);
        return "string" === typeof jB ? jB : BB
      }))
    }

    function xj(BB, jB) {
      var zB;
      const QB = null !== (zB = BB.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== zB ? zB : [];
      let nB = 0;
      const dB = () => QB[nB],
        IB = () => QB[nB++],
        NB = BB => {
          const zB = /^\d/.test(BB) ? BB : jB.get(BB);
          return "string" === typeof zB ? parseInt(zB) : Number.NaN
        },
        uB = () => {
          const BB = IB();
          if ("!" === BB) return !uB();
          if ("(" === BB) {
            const BB = aB();
            return IB(), BB
          }
          if ("defined" === BB) {
            const BB = "(" === dB();
            BB && IB();
            const zB = IB();
            return BB && IB(), jB.has(zB)
          }
          const zB = dB();
          if ("==" === zB || "!=" === zB || ">" === zB || "<" === zB || ">=" === zB || "<=" === zB) {
            IB();
            const jB = NB(BB),
              QB = NB(IB());
            if (Number.isNaN(jB) || Number.isNaN(QB)) return !1;
            switch (zB) {
              case "==":
                return jB === QB;
              case "!=":
                return jB !== QB;
              case ">":
                return jB > QB;
              case "<":
                return jB < QB;
              case ">=":
                return jB >= QB;
              default:
                return jB <= QB
            }
          }
          return jB.has(BB)
        },
        UB = () => {
          let BB = uB();
          for (;
            "&&" === dB();) {
            IB();
            const jB = uB();
            BB = BB && jB
          }
          return BB
        },
        aB = () => {
          let BB = UB();
          for (;
            "||" === dB();) {
            IB();
            const jB = UB();
            BB = BB || jB
          }
          return BB
        },
        pB = aB();
      if (nB !== QB.length) throw new Error(`Cannot evaluate #if ${BB}`);
      return pB
    }
    var Kj = zB(37286),
      Cj = zB(37614),
      cj = zB(37616),
      bj = zB(40789),
      vj = zB(38866);
    const Rj = 32,
      Oj = [10, 3, 10],
      Bz = [21, 7, 21],
      jz = Bz[0] * Bz[1] * Bz[2],
      zz = 0,
      Qz = 1,
      nz = 2,
      dz = 3,
      Iz = 64,
      Nz = 512,
      uz = 4 * jz,
      Uz = 1536,
      az = uz + jz * Uz,
      pz = 1073741824,
      rz = az + 1;

    function sz(BB, jB) {
      const zB = BB % jB;
      return zB < 0 ? zB + jB : zB
    }

    function Jz(BB, jB, zB) {
      return QB = sz(BB, Bz[0]), nB = sz(jB, Bz[1]), dB = sz(zB, Bz[2]), QB + Bz[0] * (nB + Bz[1] * dB);
      var QB, nB, dB
    }

    function mz(BB, jB, zB) {
      return BB + 8 * (jB + 8 * zB)
    }

    function yz(BB, jB, zB) {
      return BB + 4 * (jB + 4 * zB)
    }
    const kz = 65535,
      Gz = 0,
      Lz = 1,
      gz = 2,
      tz = 3;

    function Sz(BB) {
      return Math.ceil(BB * BB / 32)
    }
    const Mz = 8192,
      Ez = 1 << 18,
      iz = 65536,
      qz = 294912,
      fz = 128,
      oz = 4096,
      Hz = 16,
      Dz = 16385,
      Fz = 81921,
      Yz = 147457,
      Vz = 4194304;
    const hz = [0, 0, 0],
      Xz = [0, 0, 0];

    function Zz(BB, jB, zB, QB) {
      ! function(BB, jB, zB) {
        const [QB, nB, dB] = [BB[0], BB[1], BB[2]];
        let IB, NB, uB;
        Math.abs(nB) < .99 ? (IB = dB, NB = 0, uB = -QB) : (IB = -nB, NB = QB, uB = 0);
        const UB = Math.hypot(IB, NB, uB);
        jB[0] = IB / UB, jB[1] = NB / UB, jB[2] = uB / UB, zB[0] = nB * jB[2] - dB * jB[1], zB[1] = dB * jB[0] - QB * jB[2], zB[2] = QB * jB[1] - nB * jB[0]
      }(QB, hz, Xz);
      const nB = 1 / 32;
      for (const [dB, IB] of [
          [0, hz],
          [4, Xz]
        ]) {
        for (let zB = 0; zB < 3; zB++) BB[jB + dB + zB] = IB[zB] * nB;
        BB[jB + dB + 3] = -(IB[0] * zB[0] + IB[1] * zB[1] + IB[2] * zB[2]) * nB
      }
    }
    class Az {
      constructor() {
        this.words = new Uint32Array(Yz), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Ds(BB, jB) {
        this.parts = 0, this.refs = 0, this.view = BB, this.viewAt = jB;
        const zB = BB[jB + 1] * BB[jB + 6] - BB[jB + 2] * BB[jB + 5],
          QB = BB[jB + 2] * BB[jB + 4] - BB[jB] * BB[jB + 6],
          nB = BB[jB] * BB[jB + 5] - BB[jB + 1] * BB[jB + 4],
          dB = Math.hypot(zB, QB, nB) || 1;
        this.light[0] = zB / dB, this.light[1] = QB / dB, this.light[2] = nB / dB
      }
      add(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= oz || ! function(BB, jB, zB) {
            const QB = BB[jB],
              nB = BB[jB + 1],
              dB = BB[jB + 2],
              IB = BB[jB + 3],
              NB = BB[jB + 4],
              uB = BB[jB + 5],
              UB = BB[jB + 6],
              aB = BB[jB + 7],
              pB = BB[jB + 8],
              rB = BB[jB + 9],
              sB = BB[jB + 10],
              JB = BB[jB + 11],
              mB = BB[jB + 12],
              yB = BB[jB + 13],
              kB = BB[jB + 14],
              GB = BB[jB + 15],
              LB = QB * uB - nB * NB,
              gB = QB * UB - dB * NB,
              tB = QB * aB - IB * NB,
              SB = nB * UB - dB * uB,
              MB = nB * aB - IB * uB,
              EB = dB * aB - IB * UB,
              iB = pB * yB - rB * mB,
              qB = pB * kB - sB * mB,
              fB = pB * GB - JB * mB,
              oB = rB * kB - sB * yB,
              HB = rB * GB - JB * yB,
              DB = sB * GB - JB * kB,
              FB = LB * DB - gB * HB + tB * oB + SB * fB - MB * qB + EB * iB;
            if (!(Math.abs(FB) > 1e-12)) return !1;
            const YB = 1 / FB;
            return zB[0] = (uB * DB - UB * HB + aB * oB) * YB, zB[1] = (dB * HB - nB * DB - IB * oB) * YB, zB[2] = (yB * EB - kB * MB + GB * SB) * YB, zB[3] = (sB * MB - rB * EB - JB * SB) * YB, zB[4] = (UB * fB - NB * DB - aB * qB) * YB, zB[5] = (QB * DB - dB * fB + IB * qB) * YB, zB[6] = (kB * tB - mB * EB - GB * gB) * YB, zB[7] = (pB * EB - sB * tB + JB * gB) * YB, zB[8] = (NB * HB - uB * fB + aB * iB) * YB, zB[9] = (nB * fB - QB * HB - IB * iB) * YB, zB[10] = (mB * MB - yB * tB + GB * LB) * YB, zB[11] = (rB * tB - pB * MB - JB * LB) * YB, zB[12] = (uB * qB - NB * oB - UB * iB) * YB, zB[13] = (QB * oB - nB * qB + dB * iB) * YB, zB[14] = (yB * gB - mB * SB - kB * LB) * YB, zB[15] = (pB * SB - rB * gB + sB * LB) * YB, !0
          }(jB, zB, this.inverse)) return;
        const {
          view: QB,
          viewAt: nB
        } = this, dB = zB;
        let IB = 1 / 0,
          NB = 1 / 0,
          uB = -1 / 0,
          UB = -1 / 0,
          aB = -1 / 0;
        const [pB, rB, sB] = this.light;
        for (let tB = 0; tB < 8; tB++) {
          const zB = 1 & tB ? BB.hi[0] : BB.lo[0],
            JB = 2 & tB ? BB.hi[1] : BB.lo[1],
            mB = 4 & tB ? BB.hi[2] : BB.lo[2],
            yB = zB * jB[dB] + JB * jB[dB + 4] + mB * jB[dB + 8] + jB[dB + 12],
            kB = zB * jB[dB + 1] + JB * jB[dB + 5] + mB * jB[dB + 9] + jB[dB + 13],
            GB = zB * jB[dB + 2] + JB * jB[dB + 6] + mB * jB[dB + 10] + jB[dB + 14],
            LB = QB[nB] * yB + QB[nB + 1] * kB + QB[nB + 2] * GB + QB[nB + 3],
            gB = QB[nB + 4] * yB + QB[nB + 5] * kB + QB[nB + 6] * GB + QB[nB + 7];
          IB = Math.min(IB, LB), NB = Math.min(NB, gB), uB = Math.max(uB, LB), UB = Math.max(UB, gB), aB = Math.max(aB, pB * yB + rB * kB + sB * GB)
        }
        if (uB < -1 || UB < -1 || IB >= 1 || NB >= 1) return;
        const JB = this.parts++,
          mB = this.rects;
        mB[4 * JB] = Tz(IB), mB[4 * JB + 1] = Tz(NB), mB[4 * JB + 2] = Tz(uB), mB[4 * JB + 3] = Tz(UB);
        const yB = this.inverse,
          {
            cell: kB,
            dims: GB,
            lo: LB
          } = BB,
          gB = Fz + JB * Hz;
        for (let tB = 0; tB < 3; tB++) this.floats[gB + 4 * tB] = yB[tB] / kB, this.floats[gB + 4 * tB + 1] = yB[4 + tB] / kB, this.floats[gB + 4 * tB + 2] = yB[8 + tB] / kB, this.floats[gB + 4 * tB + 3] = (yB[12 + tB] - LB[tB]) / kB;
        this.words[gB + 12] = BB.at, this.floats[gB + 13] = aB + .001 * (1 + Math.abs(aB)), this.words[gB + 14] = GB[0] | GB[1] << 8 | GB[2] << 16
      }
      finish() {
        const BB = fz,
          {
            counts: jB,
            rects: zB,
            words: QB
          } = this;
        jB.fill(0);
        let nB = 0,
          dB = 0;
        for (; dB < this.parts; dB++) {
          const QB = 4 * dB,
            IB = (zB[QB + 2] - zB[QB] + 1) * (zB[QB + 3] - zB[QB + 1] + 1);
          if (nB + IB > 65536) break;
          nB += IB;
          for (let nB = zB[QB + 1]; nB <= zB[QB + 3]; nB++)
            for (let dB = zB[QB]; dB <= zB[QB + 2]; dB++) jB[nB * BB + dB]++
        }
        let IB = 0;
        for (let uB = 0; uB < 16384; uB++) QB[uB] = IB, IB += jB[uB], jB[uB] = QB[uB];
        QB[16384] = IB;
        for (let uB = 0; uB < dB; uB++) {
          const nB = 4 * uB;
          for (let dB = zB[nB + 1]; dB <= zB[nB + 3]; dB++)
            for (let IB = zB[nB]; IB <= zB[nB + 2]; IB++) QB[Dz + jB[dB * BB + IB]++] = uB
        }
        const NB = this.floats;
        for (let uB = 0; uB < 16384; uB++) {
          const BB = Dz + QB[uB],
            jB = BB + Math.min(QB[uB + 1] - QB[uB], 64);
          for (let zB = BB + 1; zB < jB; zB++) {
            const jB = QB[zB],
              nB = NB[81934 + jB * Hz];
            let dB = zB - 1;
            for (; dB >= BB && NB[81934 + QB[dB] * Hz] < nB; dB--) QB[dB + 1] = QB[dB];
            QB[dB + 1] = jB
          }
        }
        this.refs = nB
      }
    }

    function Tz(BB) {
      return Math.min(127, Math.max(0, Math.floor((.5 * BB + .5) * fz)))
    }

    function Pz(BB, jB, zB, QB, nB) {
      for (let dB = 0; dB < 4; dB++)
        for (let IB = 0; IB < 4; IB++) nB[4 * dB + IB] = BB[jB + 4 * dB] * zB[QB + IB] + BB[jB + 4 * dB + 1] * zB[QB + 4 + IB] + BB[jB + 4 * dB + 2] * zB[QB + 8 + IB] + BB[jB + 4 * dB + 3] * zB[QB + 12 + IB]
    }

    function Wz(BB, jB, zB, QB, nB) {
      const dB = BB[0] - jB,
        IB = BB[1] - zB,
        NB = BB[2] - QB,
        uB = BB[3] - jB,
        UB = BB[4] - zB,
        aB = BB[5] - QB,
        pB = BB[6] - jB,
        rB = BB[7] - zB,
        sB = BB[8] - QB;
      if (Math.min(dB, uB, pB) > nB || Math.max(dB, uB, pB) < -nB) return !1;
      if (Math.min(IB, UB, rB) > nB || Math.max(IB, UB, rB) < -nB) return !1;
      if (Math.min(NB, aB, sB) > nB || Math.max(NB, aB, sB) < -nB) return !1;
      const JB = uB - dB,
        mB = UB - IB,
        yB = aB - NB,
        kB = pB - uB,
        GB = rB - UB,
        LB = sB - aB,
        gB = mB * LB - yB * GB,
        tB = yB * kB - JB * LB,
        SB = JB * GB - mB * kB;
      if (Math.abs(gB * dB + tB * IB + SB * NB) > nB * (Math.abs(gB) + Math.abs(tB) + Math.abs(SB))) return !1;
      const MB = [JB, mB, yB, kB, GB, LB, dB - pB, IB - rB, NB - sB];
      for (let EB = 0; EB < 3; EB++) {
        const BB = MB[3 * EB],
          jB = MB[3 * EB + 1],
          zB = MB[3 * EB + 2];
        for (let QB = 0; QB < 3; QB++) {
          const JB = 0 === QB ? 0 : 1 === QB ? zB : -jB,
            mB = 0 === QB ? -zB : 1 === QB ? 0 : BB,
            yB = 0 === QB ? jB : 1 === QB ? -BB : 0,
            kB = JB * dB + mB * IB + yB * NB,
            GB = JB * uB + mB * UB + yB * aB,
            LB = JB * pB + mB * rB + yB * sB,
            gB = nB * (Math.abs(JB) + Math.abs(mB) + Math.abs(yB));
          if (Math.min(kB, GB, LB) > gB || Math.max(kB, GB, LB) < -gB) return !1
        }
      }
      return !0
    }
    const ez = new Float32Array(1);
    new Uint32Array(ez.buffer);
    var lz = zB(38870);

    function wz(BB) {
      const [jB, zB, QB] = lz.p;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${BB.group}) @binding(${BB.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${jB-1}, ${zB-1}, ${QB-1});\n}\n`
    }

    function xz(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [nB, dB, IB] = Bz, [NB, uB, UB] = Oj, aB = Math.log2(Rj), pB = QB ? "var<private> bloxdSpCrossed: bool;\n" : "", rB = QB ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${BB.group}) @binding(${BB.Vr}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${BB.group}) @binding(${BB.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${zB?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${pB}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Lz}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${gz}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${zB?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${tz}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${nB}, ${dB}, ${IB});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${nB} * (s.y + ${dB} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${NB}, ${uB}, ${UB}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${aB}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${dz}u) {\n\t\treturn named && state == ${nz}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${uz}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${az}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${jB?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${jB?`\t\tif (exits && step > 0 && step % ${cz} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${aB}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${zz}u || kind == ${Qz}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${nz}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${uz}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${rB}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Kz = {
      group: 0,
      uniform: 0,
      Vr: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Cz() {
      const BB = Kz;
      return `${wz(BB)}${xz(BB,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${lz.d}>,\n}\n@group(${BB.group}) @binding(${BB.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${BB.group}) @binding(${BB.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${lz.m})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${lz.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${lz.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const cz = 2;
    const bz = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function vz(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const QB = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${jB.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        nB = "trace" === zB || "lit" === zB,
        dB = "maskEdge" === zB ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        IB = nB ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${jB.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${jB.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===zB?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${dB};\n`;
      return `${QB}${BB.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${nB?function(){const[BB,jB,zB]=lz.p;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${BB}.0, ${jB}.0, ${zB}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${IB}}\n`:""}${BB.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${jB.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${jB.renderOffset});\n}\n`:""}`
    }
    const Rz = "bloxdSpOwnTexture";

    function Oz(BB) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${BB.texture}) - 1u)))`
    }
    const BQ = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Dj.g.map((BB=>{let[jB,zB]=BB;return`\tbloxdSpOut.${jB} = (bloxdSpWord & ${zB}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function jQ(BB) {
      return `bloxdSpFlags(${BB})`
    }
    const zQ = `${bj.o}.eyePosition`;

    function QQ(BB, jB, zB, QB, nB) {
      const dB = BB.indexOf(jB);
      if (dB < 0 || BB.indexOf(jB, dB + 1) >= 0) throw new Error(`Lite's ${nB} program changed at the shader pack ${QB} hook: ${dB<0?"no":"more than one"} anchor (lite/${nB}ShaderPack.ts)`);
      return BB.slice(0, dB) + zB + BB.slice(dB + jB.length)
    }

    function nQ(BB) {
      return BB.sunShadow || BB.airShadow
    }

    function dQ(BB, jB) {
      return jB && nQ(BB)
    }
    const IQ = {
      group: bj.h,
      ...bj.v
    };

    function NQ(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!nQ(BB)) return "";
      if (jB) {
        const jB = IQ,
          nB = "trace" === zB || "lit" === zB;
        let dB = "";
        BB.sunShadow && (dB = nB ? `${xz(jB,!0,"lit"===zB)}${QB=jB,`@group(${QB.group}) @binding(${QB.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${QB.group}) @binding(${QB.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(BB, jB, zB) {
          const QB = `@group(${BB}) @binding(${jB}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return zB ? `${QB}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${bz}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((BB=>`\t{\n\t\tlet o = vec2i(${BB});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : QB
        }(jB.group, bj.y, "maskEdge" === zB));
        const IB = {
          shadowDirection: `${bj.o}.shadowDirection`,
          renderOffset: `${bj.o}.renderOffset`,
          eyePosition: `${bj.o}.eyePosition`
        };
        return `${wz(jB)}${dB}${function(BB){const[jB,zB,QB]=lz.p;return`@group(${BB.group}) @binding(${BB.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${BB.group}) @binding(${BB.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${jB}.0, ${zB}.0, ${QB}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(jB)}${vz(BB,IB,zB)}`
      }
      var QB;
      return `${BB.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${BB.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function uQ(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!jB) return "";
      const dB = (IB = "fragmentInputs.vPositionW", NB = BB.sunShadow ? {
        normal: zB,
        flags: QB
      } : null, `\n\tbloxdSpShadowPosition = ${IB};\n${NB?`\tbloxdSpShadowNormal = normalize(${NB.normal});\n\tbloxdSpShadowEmissive = (${NB.flags} & ${Dj.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${NB.flags} & ${Dj.i}u) != 0u;\n`:""}`);
      var IB, NB;
      return BB.sunShadow && ("mask" === nB || "maskEdge" === nB) ? `${dB}${uB="fragmentInputs.position",UB="maskEdge"===nB,`\n\tbloxdSpShadowPixel = vec2i(${uB}.xy);\n${UB?`\tbloxdSpShadowZ = ${uB}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${uB}.z), dpdy(${uB}.z));\n`:""}`}` : dB;
      var uB, UB
    }
    const UQ = "bloxdSpTextureRotation",
      aQ = "bloxdSpTextureLayers",
      pQ = `@group(${bj.h}) @binding(${bj.C}) var<storage, read> ${aQ}: array<u32>;\n`;

    function rQ(BB) {
      return `\tvertexOutputs.vPackTexture = ${aQ}[min(u32(${BB}), arrayLength(&${aQ}) - 1u)];\n`
    }

    function sQ(BB) {
      return void 0 !== BB.uv
    }

    function JQ(BB) {
      if (!BB) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (sQ(BB)) return function(BB) {
        const {
          texture: jB,
          cells: zB,
          layers: QB
        } = BB, nB = `textureDimensions(${jB}, bloxdSpLevel)`, dB = zB ? `max(vec2u(vec2f(${nB}) / ${zB}), vec2u(1u))` : nB, IB = zB ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${dB};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${zB}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${zB}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${jB}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${nB} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${dB};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${jB}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let NB;
        if (zB)
          if (1 === QB.length) NB = `\treturn bloxdSpOwnTexel(${QB[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const BB = QB.length - 1;
            NB = `\tvar bloxdSpColour = bloxdSpOwnTexel(${QB[BB]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let jB = BB - 1; jB >= 0; jB--) NB += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${QB[jB]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            NB += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else NB = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${BB.id?`var<private> ${Rz}: u32;\n`:""}${IB}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Oz(BB)};\n\treturn ${dB};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${BB.id?Rz:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Oz(BB)};\n${NB}}\n`
      }(BB);
      const jB = BB,
        zB = BB => {
          const zB = BB > 0 ? `bloxdSpLayer - ${jB.layers*BB}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${BB}, ${jB.sampler}, bloxdSpTurned, ${zB}, round(bloxdSpMipLevel));`
        };
      let QB = "";
      for (let dB = 0; dB < jB.count - 1; dB++) QB += `\tif (bloxdSpLayer < ${jB.layers*(dB+1)}u) {\n\t\t${zB(dB)}\n\t}\n`;
      const nB = jB.frame ? `${jB.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${UQ}: u32;\n${pQ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${UQ} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${UQ} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${UQ} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${nB}${QB}\t${zB(jB.count-1)}\n}\n`
    }

    function mQ(BB, jB, zB) {
      return !!BB.surface && "bloxdDefaultSurface" !== BB.surface && function(BB, jB) {
        return "liquid" === jB || !BB
      }(jB, zB)
    }

    function yQ(BB, jB) {
      return BB.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${jB.vertexLocalPosition}, ${jQ(jB.vertexFlags)});\n\t\tlet bloxdSpVertex = ${BB.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function kQ(BB, jB, zB, QB, nB) {
      if (!BB.surface) return "";
      const dB = (BB, jB) => `\n\tlet bloxdSpTexelUV = ${BB};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${jB}) - 1u));`;
      let IB = "",
        NB = "0u, 0u, vec2f(0.0), 0.0";
      const uB = QB && sQ(QB) ? QB : null,
        UB = QB && !sQ(QB) ? QB : null;
      if (uB) {
        IB = `${uB.id?`\n\tlet bloxdSpTexture = ${uB.id};\n\t${Rz} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${uB.uv};${dB(function(BB,jB){var zB;return`${null!==(zB=BB.levelUv)&&void 0!==zB?zB:BB.cells?`${jB} / ${BB.cells}`:jB} * vec2f(textureDimensions(${BB.texture}))`}(uB,"bloxdSpUv"),uB.texture)}`, NB = (uB.id ? `${Rz}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else UB && (IB = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${UQ} = bloxdSpTexture >> 16u;${dB(`fragmentInputs.vMainUV1 * ${(0,Kj.jb)(UB.width)}`,"textureAtlas0")}`, NB = `bloxdSpTexture & 0xffffu, ${UQ}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const aB = nB.overlayColour,
        pB = aB ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        rB = "bloxdDefaultSurface" !== BB.surface || aB ? `\n\tbaseColor = vec4f(${pB}, baseColor.a);` : "",
        sB = mQ(BB, jB, zB) ? `\n\t${nB.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${IB}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${nB.alpha}, ${nB.enchantTier}, ${nB.enchantColour}, ${nB.enchantSpeed}, ${null!==aB&&void 0!==aB?aB:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${nB.normal}, ${nB.localPosition}, ${jQ(nB.flags)}, ${NB});\n\tlet bloxdSpSurface = ${BB.surface}(bloxdSpSurfaceIn);${rB}${sB}\n`
    }
    const GQ = "bloxdSpLightIn";

    function LQ(BB, jB, zB, QB) {
      if (!BB.light) return "";
      const nB = jB ? `${Kj.m}.rgb, ${Kj.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Kj.j}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: dB,
          diffuse: IB,
          emissive: NB,
          ambient: uB,
          fogColour: UB,
          fogAlpha: aB,
          normal: pB
        } = QB;
      return `\tvar ${GQ} = BloxdLightIn(vec3f(0.0), ${zB?dB:"0.0"}, ${IB}, ${NB}, ${uB}, ${nB}, ${UB}, ${aB}, fragmentInputs.vPositionW, ${pB}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${GQ}.litColour = bloxdLitColour(bloxdSpSurface, ${GQ});\n`
    }

    function gQ(BB) {
      return BB.light ? `\n\t{\n\t\tlet bloxdSpLight = ${BB.light}(bloxdSpSurface, ${GQ});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const tQ = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      SQ = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      MQ = "\treturn color;\n}",
      EQ = {
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
    const iQ = Object.freeze({});

    function qQ(BB) {
      var jB;
      return !(null === (jB = (0, vj.f)(BB)) || void 0 === jB || !jB.sceneDepth)
    }

    function fQ(BB) {
      const jB = (0, vj.f)(BB);
      return !!jB && mQ(jB.hooks, jB.strict, jB.program)
    }

    function oQ(BB, jB, zB, QB) {
      return QQ(BB, jB, zB, QB, "terrain")
    }

    function HQ(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const dB = function(BB) {
          return (0, vj.e)(BB.packVariant, BB.liquid ? "liquid" : "terrain")
        }(BB),
        {
          hooks: IB
        } = dB,
        NB = dQ(dB, QB),
        uB = "edge" === nB ? "maskEdge" : "plain" === nB ? "mask" : "trace",
        UB = yQ(IB, EQ);
      UB && (jB = oQ(jB, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${UB}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const aB = "atlas" === BB.texture ? {
          count: BB.atlasCount,
          layers: BB.atlasLayers,
          width: BB.xR,
          sampler: "atlasSampler",
          frame: BB.animated ? zB : null
        } : null,
        pB = `${dB.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${uQ(dB,NB,EQ.normal,EQ.flags,uB)}${kQ(IB,dB.strict,dB.program,aB,EQ)}`;
      pB && (jB = oQ(jB, tQ, `${tQ.slice(0,-1)}${pB}`, "surface"));
      const rB = gQ(IB);
      return rB && (jB = oQ(jB, SQ, `${LQ(IB,BB.lighting,BB.dirLightCount>0,EQ)}${SQ}`, "light input"), jB = oQ(jB, MQ, `${rB.slice(1)}${MQ}`, "light")), `${(0,bj.I)()}${dB.sceneDepth?`@group(${bj.h}) @binding(${bj.u}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${zQ};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${NQ(dB,NB,uB)}${JQ(aB)}${BQ}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${dB.code}${jB}`
    }
    const DQ = SB.c.WGSL;

    function FQ(BB) {
      return void 0 !== BB.packVariant
    }
    const YQ = {
        xQB: 0,
        KQB: 4,
        CQB: 8,
        cQB: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      VQ = YQ.aoLevels + 4,
      hQ = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      XQ = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      ZQ = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      AQ = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      TQ = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      PQ = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      WQ = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      eQ = 0,
      lQ = 3,
      wQ = 4,
      xQ = 5,
      KQ = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Cj.b}, ${Cj.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Cj.b}, ${Cj.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      CQ = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((BB=>cj.d>>BB&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const cQ = {
      vp: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: BB => `animDataPerTex[${BB}]`
    };

    function bQ(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cQ;
      return `\n\tlet atlasIdxIn = ${BB};\n\tlet animTick = ${zB.vp};\n\tlet animTickStride = ${zB.stride};\n\tlet numAnimTextures = ${zB.count};\n\t${(0,MB.e)(SB.c.WGSL,zB.perTexture)}\n\t${jB}animLayer;\n`
    }

    function vQ(BB) {
      const jB = (jB, zB) => {
        const QB = jB > 0 ? `fragmentInputs.texAtlasIndex - ${BB.atlasLayers.toFixed(1)} * ${jB.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${zB?"textureSampleLevel":"textureSample"}(textureAtlas${jB}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${QB}))${zB?", atlasLod":""})`
      };
      if (1 === BB.atlasCount) return `baseColor = ${jB(0,!1)};`;
      let zB = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Kj.jb)(BB.xR)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let QB = 0; QB < BB.atlasCount; QB++) {
        const nB = BB.atlasLayers * (QB + 1) - .5;
        zB += `${QB>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Kj.jb)(nB)}) {\n\t\tbaseColor = ${jB(QB,!0)};\n\t}`
      }
      return zB
    }

    function RQ(BB) {
      return `terrain-${BB.texture}${"atlas"===BB.texture?BB.atlasCount:""}${BB.animated?"-anim":""}${BB.alphaTest?"-test":""}${BB.lighting?"-lit":""}-dir${BB.dirLightCount}${BB.packed?"-packed":""}${FQ(BB)?`-sp${BB.packVariant}`:""}${BB.liquid?"-liquid":""}${BB.resting?"-rest":""}`
    }

    function OQ(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const QB = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const zB = "none" !== BB.texture,
          QB = "atlas" === BB.texture,
          nB = BB.dirLightCount > 0,
          dB = FQ(BB);
        if (BB.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${BB.dirLightCount}`);
        let IB = 1,
          NB = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (QB) {
          BB.animated && (NB += `@group(2) @binding(${IB++}) var<storage, read> animDataPerTex: array<f32>;\n`), NB += `@group(2) @binding(${IB++}) var atlasSampler: sampler;\n`;
          for (let jB = 0; jB < BB.atlasCount; jB++) NB += `@group(2) @binding(${IB++}) var textureAtlas${jB}: texture_2d_array<f32>;\n`
        } else "single" === BB.texture && (NB += `@group(2) @binding(${IB++}) var diffuseSamplerSampler: sampler;\n`, NB += `@group(2) @binding(${IB++}) var diffuseSampler: texture_2d<f32>;\n`);
        const uB = function(BB) {
            const jB = WQ,
              zB = "none" !== BB.texture,
              QB = "atlas" === BB.texture,
              nB = FQ(BB);
            return BB.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${zB?"uv: vec2f,":""}\n\t${QB?"texAtlasIndices: f32,":""}\n\t${BB.lighting?"aPackedLightLevels: f32,":""}\n\t${nB?"blockFlagWords: vec2u,":""}\n}\n${KQ}\n${CQ}\n${"single"===BB.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${zB?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===BB.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${QB?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${BB.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${nB?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${jB.position}) position: vec3f,\n\t@location(${jB.normal}) normal: vec4f,\n\t@location(${jB.color}) color: vec4f,\n\t${zB?`@location(${jB.uv}) uv: vec2f,`:""}\n\t${BB.lighting?`@location(${jB.packedLight}) aPackedLightLevels: f32,`:""}\n\t${nB?`@location(${jB.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(BB),
          UB = `\n${AQ}\n${XQ}\n${ZQ}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${NB}\n${yj}\n${uB.declarations}\nstruct Varyings {\n\t${"none"===jB?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${BB.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${nB?"@location(5) vTerrainLambert: f32,":""}\n\t${zB?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${QB?"@location(7) texAtlasIndex: f32,":""}\n\t${BB.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${dB?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${dB&&QB?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${BB.resting?"":(0,Kj.u)(DQ)}\n${PQ}\n\n@vertex\nfn mainVertex(${uB.parameter}) -> Varyings {\n\t${uB.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${dB?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Dj.e.placed}u;`:""}\n\t${dB&&QB?rQ("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${BB.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${zB?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${QB?function(BB){return BB?bQ("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(BB.animated):""}\n\t${"single"===BB.texture&&BB.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Kj.$)(DQ)}\n\t${(0,Kj.I)(DQ,BB.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":TQ}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${QB?vQ(BB):""}\n\t${"single"===BB.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${zB?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${BB.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${nB?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${mj}));\n\t${FQ(BB)?(0,Kj.fb)(SB.c.WGSL):(0,Kj.R)(DQ)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          aB = new Set;
        BB.lighting && aB.add("BLOXD_LIGHTING");
        nB && aB.add("BLOXD_TERRAIN_DIRECTIONAL");
        return lj(UB, new Map([...aB].map((BB => [BB, !0]))))
      }(BB, zB);
      if (!FQ(BB)) return QB;
      const nB = HQ(BB, QB, bQ, jB, zB);
      return "none" === zB ? nB : `${nB}${function(BB){const jB="none"!==BB.texture&&BB.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":TQ}\n\t${BB.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${jB&&"atlas"===BB.texture?vQ(BB):""}\n\t${jB&&"single"===BB.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${jB?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Dj.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(BB)}`
    }
    const Bn = new Map([
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

    function jn(BB, jB) {
      const zB = new Map;
      let QB = 0;
      const nB = [],
        dB = [],
        IB = [];
      for (const UB of jB) {
        var NB, uB;
        const jB = null !== (NB = UB.type.trim().split(/\s+/).pop()) && void 0 !== NB ? NB : UB.type,
          aB = Bn.get(jB);
        if (!aB) throw new Error(`Lite: no uniform layout for ${UB.name}: ${UB.type}`);
        const pB = null !== (uB = UB.arraySize) && void 0 !== uB ? uB : 0,
          rB = pB ? 4 : aB.align;
        QB = Math.ceil(QB / rB) * rB;
        const sB = pB ? 4 * Math.ceil(aB.floats / 4) : aB.floats;
        if (zB.set(UB.name, {
            offset: QB,
            floats: aB.floats,
            arraySize: pB,
            stride: sB
          }), pB && aB.floats <= 2) {
          const jB = `${BB}_${IB.length}_strided`;
          dB.push(`struct ${jB} {\n\t@size(16) el: ${aB.wgsl},\n}`), IB.push(UB.name), nB.push(`\t@align(16) ${UB.name}: array<${jB}, ${pB}>,`)
        } else pB ? nB.push(`\t@align(16) ${UB.name}: array<${aB.wgsl}, ${pB}>,`) : nB.push(`\t${UB.name}: ${aB.wgsl},`);
        QB += pB ? sB * pB : aB.floats
      }
      return {
        slots: zB,
        floats: Math.max(4, 4 * Math.ceil(QB / 4)),
        wgsl: `${dB.join("\n")}\nstruct ${BB} {\n${nB.join("\n")}\n}\n`,
        stridedArrays: IB
      }
    }
    const zn = [{
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
      Qn = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      nn = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function dn(BB, jB) {
      return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nvarying v${jB}UV: vec2f;\n#endif`
    }

    function In(BB, jB, zB) {
      return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nif (uniforms.v${jB}Infos.x==0.)\n{vertexOutputs.v${jB}UV= (uniforms.${zB}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${jB}UV= (uniforms.${zB}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Nn(BB, jB, zB) {
      return `#ifdef ${BB}\n#if ${BB}DIRECTUV == 1\n#define v${jB}UV vMainUV1\n#elif ${BB}DIRECTUV == 2\n#define v${jB}UV vMainUV2\n#else\nvarying v${jB}UV: vec2f;\n#endif\nvar ${zB}SamplerSampler: sampler;\nvar ${zB}Sampler: texture_2d<f32>;\n#endif`
    }
    const un = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Un = 256,
      an = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      pn = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      rn = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      sn = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Jn = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      mn = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      yn = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      kn = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${pn}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${dn("OPACITY","Opacity")}\n${dn("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${yn}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${rn}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${In("OPACITY","Opacity","opacity")}\n${In("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${sn}\n#define CUSTOM_VERTEX_MAIN_END\n${Jn}\n}\n`;
    const Gn = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Nn("OPACITY","Opacity","opacity")}\n${Nn("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${yn}\n${mn}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((BB,jB)=>function(BB){const jB=`
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
      jB
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      BB
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      jB
    }.vLightData, diffuse$ {
      BB
    }.rgb, $ {
      jB
    }.vLightSpecular.rgb, diffuse$ {
      BB
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(jB))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, Ln = /^([gimus]+)!/, gn = new Set;

    function tn(BB) {
      gn.has(BB) || (gn.add(BB), console.warn(`Lite: no place for plugin code at ${BB} in the standard shader: it is left out`))
    }

    function Sn(BB, jB) {
      let zB = BB;
      const QB = new Map;
      for (const [dB, IB] of jB) {
        var nB;
        QB.set(dB, `${null!==(nB=QB.get(dB))&&void 0!==nB?nB:""}${IB}\n`)
      }
      for (const [dB, IB] of QB) {
        if (!dB.startsWith("!")) {
          const BB = `#define ${dB}`;
          if (!zB.includes(BB)) {
            tn(dB);
            continue
          }
          zB = zB.replace(BB, (() => `\n${IB}\n${BB}`));
          continue
        }
        let BB = dB.substring(1),
          jB = "g";
        if (BB.startsWith("!")) jB = "", BB = BB.substring(1);
        else {
          const zB = Ln.exec(BB);
          zB && (jB = zB[1], BB = BB.substring(jB.length + 1))
        }
        const QB = new RegExp(BB, jB.includes("g") ? jB : `${jB}g`);
        let nB = QB.exec(zB);
        for (nB || tn(dB); nB;) {
          const BB = nB,
            jB = IB.replace(/\$(\d+)/g, ((jB, zB) => Number(zB) < BB.length ? BB[Number(zB)] : ""));
          zB = zB.substring(0, BB.index) + jB + zB.substring(BB.index + BB[0].length), QB.lastIndex = BB.index + jB.length, nB = QB.exec(zB)
        }
      }
      return zB
    }
    const Mn = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      En = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      qn = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function fn(BB) {
      const jB = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let zB = BB.replace(Mn, ((BB, zB, QB, nB, dB, IB) => ("attribute" === zB ? jB.attributes.push({
        name: dB,
        type: IB
      }) : void 0 === zB ? jB.varyings.push({
        name: dB,
        type: IB,
        interpolation: Dn(IB, QB, nB)
      }) : jB.uniforms.push({
        name: dB,
        type: Hn(IB)
      }), "")));
      return zB = zB.replace(En, ((BB, zB) => (jB.samplers.add(zB), ""))), zB = zB.replace(qn, ((BB, zB, QB) => (jB.textures.push({
        name: zB,
        type: QB
      }), ""))), jB.body = zB, jB
    }

    function Hn(BB) {
      const jB = BB.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        zB = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(jB);
      if (!zB) throw new Error(`Lite: unsupported uniform type ${BB}`);
      return zB
    }

    function Dn(BB, jB, zB) {
      return void 0 === jB && void 0 === zB ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(BB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === jB ? "@interpolate(flat) " : `@interpolate(${null!==jB&&void 0!==jB?jB:"perspective"}, ${null!==zB&&void 0!==zB?zB:"center"}) `
    }

    function Fn(BB) {
      return Xn({
        defines: BB.defines,
        vertex: Sn(kn, BB.vertexCode),
        fragment: Sn(Gn, BB.fragmentCode),
        members: [...zn, ...BB.defines.has("OPACITY") ? Qn : [], ...BB.defines.has("EMISSIVE") ? nn : [], ...BB.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Yn(BB) {
      const jB = BB.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (jB === BB) throw new Error("Lite: fragment main has no return");
      return jB
    }
    const Vn = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${pn}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${rn}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${sn}\n${Jn}\n}\n`,
      hn = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${mn}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Xn(BB) {
      const jB = BB.defines,
        zB = fn(lj(BB.vertex, jB)),
        QB = fn(lj(BB.fragment, jB)),
        nB = new Map;
      for (const LB of [...zB.varyings, ...QB.varyings]) nB.has(LB.name) || nB.set(LB.name, LB);
      const dB = [...nB.values()].map(((BB, jB) => `\t@location(${jB}) ${BB.interpolation}${BB.name}: ${BB.type},`)),
        IB = [...BB.members];
      for (const LB of [...zB.uniforms, ...QB.uniforms]) IB.some((BB => BB.name === LB.name)) || IB.push(LB);
      const NB = jn(BB.structName, IB),
        uB = [],
        UB = [];
      let aB = 1;
      const pB = new Set;
      for (const LB of [...zB.textures, ...QB.textures]) {
        if (pB.has(LB.name)) continue;
        pB.add(LB.name);
        const BB = `${LB.name}Sampler`,
          jB = aB++,
          zB = aB++,
          QB = LB.type.startsWith("texture_2d_array") ? "2d-array" : LB.type.startsWith("texture_cube") ? "cube" : "2d";
        uB.push({
          name: LB.name,
          binding: jB,
          samplerBinding: zB,
          dimension: QB
        }), UB.push(`@group(2) @binding(${jB}) var ${LB.name}: ${LB.type};`), UB.push(`@group(2) @binding(${zB}) var ${BB}: sampler;`)
      }
      for (const LB of [...zB.samplers, ...QB.samplers])
        if (!pB.has(LB.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${LB} has no texture`);
      const rB = [AQ, an, NB.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${BB.structName};`, ...UB].join("\n"),
        sB = zB.attributes,
        JB = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...zB.attributes.map(((BB, jB) => `\t@location(${jB}) ${BB.name}: ${BB.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        mB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...dB, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        yB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...QB.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...dB, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", yj, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${mj}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        kB = BB => {
          for (const jB of NB.stridedArrays) BB = BB.replace(new RegExp(`\\b${jB}\\s*\\[(.*?)\\]`, "g"), `${jB}[$1].el`);
          return BB
        };
      return {
        vertex: `${rB}\n${JB}\n${mB}\n${kB(zB.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${rB}\n${yB}\n${Yn((GB=kB(QB.body),GB.includes("fragmentInputs.position")?GB.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):GB))}`,
        attributes: sB,
        material: NB,
        textures: uB
      };
      var GB
    }
    const Zn = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      An = BB => ({
        name: BB,
        type: "vec3"
      }),
      Tn = BB => ({
        name: BB,
        type: "float"
      }),
      Pn = jn("EarthSkyUniforms", [An("viewFrom"), Tn("exposureScale"), An("zenithOffset"), Tn("fogOn"), An("up"), Tn("ditherOn"), An("sun"), Tn("turbidity"), An("tint"), Tn("rayleigh"), An("sunDir"), Tn("mieStrength"), An("inScatterR"), Tn("mieFocus"), An("inScatterM"), Tn("sunE"), An("extinctionBeta"), Tn("sunsetMix"), Tn("mieScale"), Tn("mieBase"), Tn("mieSlope"), Tn("sunDiscE"), Tn("exposure")]),
      Wn = `${AQ}\n${an}\n${Pn.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      en = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Zn.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      wn = `\n${yj}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Tj).map((BB=>{let[jB,zB]=BB;return`const TONE_${jB}: f32 = ${zB};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Pj};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${mj}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var xn = zB(37166);
    const Kn = new xn.KJ,
      Cn = new xn.KJ,
      cn = new xn.Quaternion,
      bn = new Float64Array(3),
      vn = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Rn = new Float64Array(16);

    function On(BB, jB, zB) {
      const QB = zB.worldMatrix;
      var nB;
      BB.updateFloat3("viewFrom", QB[12], QB[13], QB[14]), BB.updateFloatsFrom("zenithOffset", jB.cameraOffset, 0, 3), BB.updateFloatsFrom("up", jB.up, 0, 3), jB.luminance > 0 && (BB.updateFloat("exposure", jB.luminance), BB.updateFloat("exposureScale", (nB = jB.luminance, Math.log2(2 / Math.pow(nB, 4))))), BB.updateFloat("turbidity", jB.turbidity), BB.updateFloat("rayleigh", jB.rayleigh), BB.updateFloat("mieStrength", jB.mieCoefficient), BB.updateFloat("mieFocus", jB.mieDirectionalG), BB.updateFloatsFrom("tint", jB.tint, 0, 3), BB.updateFloat("fogOn", jB.fog && zB.fogEnabled && 0 !== zB.fogMode ? 1 : 0), BB.updateFloat("ditherOn", jB.dithering ? 1 : 0);
      const dB = jB.sunPosition;
      if (Kn.set(dB[0], dB[1], dB[2]), !jB.useSunPosition) {
        const BB = Math.PI * (jB.inclination - .5),
          zB = 2 * Math.PI * (jB.azimuth - .5);
        Kn.set(jB.distance * Math.cos(zB) * Math.cos(BB), jB.distance * Math.sin(-BB), jB.distance * Math.sin(zB) * Math.cos(BB)), xn.Quaternion.FromUnitVectorsToRef(xn.KJ.UpReadOnly, Cn.set(jB.up[0], jB.up[1], jB.up[2]), cn), Kn.rotateByQuaternionToRef(cn, Kn)
      }
      BB.updateVector3("sun", Kn), bn[0] = Kn.x, bn[1] = Kn.y, bn[2] = Kn.z;
      const IB = Aj(jB, bn, vn);
      BB.updateFloatsFrom("sunDir", IB.sunDir, 0, 3), BB.updateFloat("sunE", IB.sunE), BB.updateFloatsFrom("inScatterR", IB.inScatterR, 0, 3), BB.updateFloatsFrom("inScatterM", IB.inScatterM, 0, 3), BB.updateFloatsFrom("extinctionBeta", IB.extinctionBeta, 0, 3), BB.updateFloat("sunsetMix", IB.sunsetMix), BB.updateFloat("sunDiscE", IB.sunDiscE), BB.updateFloat("mieScale", IB.mieScale), BB.updateFloat("mieBase", IB.mieBase), BB.updateFloat("mieSlope", IB.mieSlope)
    }

    function Bd(BB, jB) {
      const zB = Rn;
      zB[0] = jB.far, zB[5] = jB.far, zB[10] = jB.far, zB[15] = 1;
      const QB = BB.infiniteDistance;
      for (let nB = 0; nB < 3; nB++) zB[12 + nB] = BB.position[nB] + (QB ? jB.worldMatrix[12 + nB] : 0);
      return Rn
    }
    class jd {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(BB, jB, zB, QB, nB) {
        zB !== this.pipeline && (BB.setPipeline(zB), this.pipeline = zB), BB.setBindGroup(1, QB, [nB]);
        const dB = jB.material.bindGroup;
        dB !== this.materialGroup && (BB.setBindGroup(2, dB), this.materialGroup = dB);
        const IB = jB.program.packGroup;
        IB && IB !== this.packGroup && (BB.setBindGroup(bj.h, IB), this.packGroup = IB);
        const {
          vertexBuffers: NB,
          vertexOffsets: uB
        } = this;
        for (let UB = 0; UB < jB.vertexBuffers.length; UB++) NB[UB] === jB.vertexBuffers[UB] && uB[UB] === jB.vertexOffsets[UB] || (BB.setVertexBuffer(UB, jB.vertexBuffers[UB], jB.vertexOffsets[UB]), NB[UB] = jB.vertexBuffers[UB], uB[UB] = jB.vertexOffsets[UB]);
        jB.indexBuffer && jB.indexBuffer !== this.indexBuffer && (BB.setIndexBuffer(jB.indexBuffer, jB.indexFormat), this.indexBuffer = jB.indexBuffer)
      }
    }
    class zd {
      constructor(BB, jB, zB, QB) {
        this.modelMeshes = BB, this.M_ = jB, this.maker = zB, this.warnOnce = QB, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (BB, jB) => {
          (jB < -1 || jB > 1) && this.warnOnce(`group:${jB}`, `rendering group ${jB} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(BB) {
        this.collectGroup(BB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(BB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(BB, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.M_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(Qd), this.transparentDraws.sort(nd)
      }
      collectGroup(BB, jB, zB, QB, nB) {
        const dB = this.modelMeshes.group(jB),
          IB = this.M_.group(jB),
          NB = 0 === jB ? null === IB || void 0 === IB ? void 0 : IB.opaque : void 0;
        this.collectList(BB, null === dB || void 0 === dB ? void 0 : dB.opaque, NB || null === IB || void 0 === IB ? void 0 : IB.opaque, jB, !1, zB, nB), NB && (this.M_.drawn += this.maker.bundleDraws(BB, NB, jB)), this.collectList(BB, null === dB || void 0 === dB ? void 0 : dB.alphaTest, void 0, jB, !1, zB, nB), this.collectList(BB, null === dB || void 0 === dB ? void 0 : dB.transparent, null === IB || void 0 === IB ? void 0 : IB.transparent, jB, !0, QB, nB)
      }
      collectList(BB, jB, zB, QB, nB, dB, IB) {
        var NB;
        const uB = dB.length;
        jB && this.maker.pushDraws(BB, jB.units, jB.units.length, QB, nB, dB, jB.rows), zB && (this.M_.drawn += this.maker.pushDraws(BB, zB, zB.length, QB, nB, dB));
        const UB = nB ? null === (NB = this.modelMeshes.group(QB)) || void 0 === NB ? void 0 : NB.text : void 0;
        UB && this.maker.pushDraws(BB, UB.units, UB.units.length, QB, !0, dB, UB.rows), IB && dd(dB, uB)
      }
    }

    function Qd(BB, jB) {
      return BB.program.id - jB.program.id || BB.material.owner.uniqueId - jB.material.owner.uniqueId
    }

    function nd(BB, jB) {
      return BB.material.owner.uniqueId - jB.material.owner.uniqueId
    }

    function dd(BB, jB) {
      for (let zB = jB + 1; zB < BB.length; zB++) {
        const QB = BB[zB];
        let nB = zB - 1;
        for (; nB >= jB && nd(BB[nB], QB) > 0; nB--) BB[nB + 1] = BB[nB];
        BB[nB + 1] = QB
      }
    }
    const Id = {};

    function Nd(BB) {
      return BB.hasThinInstances ? "thin" : BB.bQB || BB._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function ud(BB, jB, zB) {
      return BB ? (zB._needUVs = !0, BB.optimizeUVAllocation && (0, fB.K)(BB.matrix) ? (zB[`${jB}DIRECTUV`] = BB.uvSet + 1, zB[`MAINUV${BB.uvSet+1}`] = !0) : zB[`${jB}DIRECTUV`] = 0, !0) : (zB[`${jB}DIRECTUV`] = 0, !1)
    }

    function Ud(BB) {
      const jB = new Map;
      for (const zB in BB) {
        if (95 === zB.charCodeAt(0)) continue;
        const QB = BB[zB],
          nB = typeof QB;
        "number" === nB || "string" === nB ? jB.set(zB, String(QB)) : QB && "function" !== nB && jB.set(zB, !0)
      }
      return jB
    }

    function pd(BB) {
      const jB = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: zB
        }
        of BB.features)
        for (const BB in zB) jB[BB] = zB[BB];
      return jB
    }

    function rd(BB) {
      const jB = BB.parts.geometry;
      return null !== jB && void 0 !== jB && jB.live ? jB : null
    }

    function sd(BB) {
      var jB;
      return null !== (jB = rd(BB)) && void 0 !== jB ? jB : Id
    }
    class Jd {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = BB, this.warnOnce = jB, this.programWithModel = zB, this.packFailed = QB, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(BB, jB, zB, QB, nB) {
        const dB = jB.owner;
        let IB = this.drawStates.get(jB);
        if (!IB) {
          const BB = jB.parts.materials[jB.range];
          if (!BB) return this.warnOnce("model", `${zB.name} on ${dB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          IB = {
            defines: pd(BB),
            model: BB,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: nB,
            groupId: QB,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(jB, IB)
        }
        if (this.programCurrent(IB, jB, nB, QB)) return IB.program;
        const {
          model: NB
        } = IB, uB = sd(jB), UB = this.instanceLayout(dB, nB), aB = this.definesBits(dB);
        if (!this.prepareModelDefines(BB, dB, NB, IB.defines, QB, nB)) return null;
        IB.instancing = nB, IB.groupId = QB, IB.modelVersion = NB.version, IB.geometry = uB, IB.instanceLayout = UB, IB.definesBits = aB;
        const pB = function(BB) {
          let jB = "";
          for (const [zB, QB] of BB) jB += !0 === QB ? `${zB};` : `${zB}=${QB};`;
          return jB
        }(Ud(IB.defines));
        return pB === IB.definesKey && IB.packVariant === this.modelPackVariant && IB.program && !this.packFailed(IB.program) || (IB.definesKey = pB, IB.packVariant = this.modelPackVariant, IB.program = this.programWithModel(NB, IB.defines, pB)), IB.program
      }
      programCurrent(BB, jB, zB, QB) {
        return null !== BB.program && !this.packFailed(BB.program) && BB.instancing === zB && BB.groupId === QB && this.definesHold(BB, jB, zB)
      }
      definesHold(BB, jB, zB) {
        return BB.modelVersion === BB.model.version && BB.geometry === sd(jB) && BB.instanceLayout === this.instanceLayout(jB.owner, zB) && BB.definesBits === this.definesBits(jB.owner) && BB.packVariant === this.modelPackVariant
      }
      modelPackKind(BB) {
        var jB;
        return 0 === this.modelPackVariant ? null : null !== (jB = (0, iB.w)(BB, EB.j.name)) && void 0 !== jB && jB.active ? "placed" : BB.item ? "item" : BB.lifeform ? "lifeform" : BB.box ? "box" : null
      }
      instanceLayout(BB, jB) {
        var zB, QB, nB;
        return "thin" === jB ? null !== (nB = this.resources.U1.get(BB)) && void 0 !== nB ? nB : null : "instanced" === jB && null !== (zB = null === (QB = BB._userInstancedBuffersStorage) || void 0 === QB ? void 0 : QB.interleavedKinds) && void 0 !== zB ? zB : null
      }
      definesBits(BB) {
        const jB = this.view;
        return (BB.visibility < 1 ? 1 : 0) | (BB.hasVertexAlpha ? 2 : 0) | (BB.applyFog ? 4 : 0) | (BB.useVertexColors ? 8 : 0) | (BB.nonUniformScaling ? 16 : 0) | (jB.fogEnabled && 0 !== jB.fogMode ? 32 : 0) | (jB.lightsEnabled ? 64 : 0) | jB.lightCount << 7
      }
      prepareLightDefines(BB, jB, zB) {
        let QB = 0;
        if (this.view.lightsEnabled && !jB) {
          const jB = Math.min(zB, 4);
          for (; QB < this.view.lightCount && (BB[`LIGHT${QB}`] = !0, BB[`LITE_LIGHT${QB}_SLOT`] = QB, QB++, BB._needNormals = !0, QB !== jB););
        }
        for (let nB = QB; nB < 4; nB++) BB[`LIGHT${nB}`] = !1, BB[`LITE_LIGHT${nB}_SLOT`] = void 0
      }
      prepareModelDefines(BB, jB, zB, QB, nB, dB) {
        const {
          features: IB
        } = zB;
        QB._needNormals = !1, QB._needUVs = !1;
        const NB = this.view;
        this.prepareLightDefines(QB, zB.disableLighting, zB.maxSimultaneousLights), QB.MAINUV1 = !1, QB.MAINUV2 = !1;
        const uB = zB.diffuseTexture;
        uB ? (QB._needUVs = !0, QB.DIFFUSE = !0, uB.optimizeUVAllocation && (0, fB.K)(uB.matrix) ? (QB.DIFFUSEDIRECTUV = uB.uvSet + 1, QB[`MAINUV${uB.uvSet+1}`] = !0) : QB.DIFFUSEDIRECTUV = 0, uB.uvSet > 1 && this.warnOnce(`uvset:${zB.name}`, `${zB.name} samples UV set ${uB.uvSet+1}, which is not supported`)) : (QB.DIFFUSE = !1, QB.DIFFUSEDIRECTUV = 0);
        const UB = zB.opacityTexture,
          aB = zB.emissiveTexture;
        QB.OPACITY = ud(UB, "OPACITY", QB), QB.OPACITYRGB = null !== UB && UB.getAlphaFromRGB, QB.EMISSIVE = ud(aB, "EMISSIVE", QB), (UB && UB.uvSet > 1 || aB && aB.uvSet > 1) && this.warnOnce(`uvset:${zB.name}`, `${zB.name} samples a UV set past 2, which is not supported`);
        const pB = zB.reflectionTexture,
          rB = null !== pB;
        if (rB) {
          if (!this.resources.boundTexture(pB)) return !1;
          QB._needNormals = !0
        }
        QB.REFLECTION = rB, QB.REFLECTIONMAP_3D = rB, QB.REFLECTIONMAP_SKYBOX = rB, QB.REFLECTIONMAP_OPPOSITEZ = rB && (BB.useRightHandedSystem ? !pB.invertZ : pB.invertZ), QB.ROUGHNESS = rB && zB.roughness > 0, QB.REFLECTIONOVERALPHA = rB && zB.useReflectionOverAlpha, QB.LITE_REFLECTION_LUMINANCE = rB && "cube" === pB.source.kind && pB.source.luminance, (jB.skeleton || jB.morphTargetManager) && this.warnOnce(`skin:${jB.name}`, `${jB.name} has bones or morph targets, which are not supported`), QB.FOG = zB.fogEnabled && jB.applyFog && NB.fogEnabled && 0 !== NB.fogMode, QB.NONUNIFORMSCALING = jB.nonUniformScaling;
        const {
          visibility: sB,
          hasVertexAlpha: JB
        } = jB;
        QB.ALPHATEST = (0, iB.Y)(zB, sB, JB), QB.ALPHAFROMDIFFUSE = (0, iB.lb)(zB), QB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== zB.transparencyMode, QB.ALPHABLEND = null === zB.transparencyMode || (0, iB.U)(zB, sB, JB), QB.PREMULTIPLYALPHA = 7 === zB.alphaMode || 8 === zB.alphaMode, QB.EMISSIVEASILLUMINATION = zB.useEmissiveAsIllumination, QB.LINKEMISSIVEWITHDIFFUSE = zB.linkEmissiveWithDiffuse, QB.TWOSIDEDLIGHTING = !zB.backFaceCulling && zB.twoSidedLighting, QB.INSTANCES = "none" !== dB, QB.THIN_INSTANCES = "thin" === dB, QB.LITE_FRONT_LAYER = nB >= 1;
        for (const {
            feature: MB,
            state: EB,
            active: iB
          }
          of IB) {
          var mB, yB;
          if (iB) null === (mB = (yB = (0, Yj.g)(MB)).prepareDefinesBeforeAttributes) || void 0 === mB || mB.call(yB, EB, QB, BB, jB)
        }
        this.modelPackKind(zB) && (QB._needNormals = !0), QB.NORMAL = QB._needNormals && jB.isVerticesDataPresent("normal"), QB.UV1 = QB._needUVs && jB.isVerticesDataPresent("uv"), QB.UV2 = QB._needUVs && jB.isVerticesDataPresent("uv2");
        const kB = jB.useVertexColors && jB.isVerticesDataPresent("color");
        QB.VERTEXCOLOR = kB, QB.VERTEXALPHA = jB.hasVertexAlpha && kB, QB.INSTANCESCOLOR = "none" !== dB && jB.isVerticesDataPresent("instanceColor");
        for (const {
            feature: MB,
            state: EB,
            active: iB
          }
          of IB) {
          var GB, LB;
          if (iB) null === (GB = (LB = (0, Yj.g)(MB)).prepareDefines) || void 0 === GB || GB.call(LB, EB, QB, BB, jB, zB)
        }
        const gB = BB.wJ();
        for (const {
            feature: MB,
            state: EB,
            active: iB
          }
          of IB) {
          var tB, SB;
          if (iB && !1 === (null === (tB = (SB = (0, Yj.g)(MB)).isReadyForSubMesh) || void 0 === tB ? void 0 : tB.call(SB, EB, QB, BB, gB))) return !1
        }
        return !0
      }
    }

    function md(BB, jB, zB) {
      return BB.codeVersion !== jB.version && function(BB, jB) {
        const zB = [],
          QB = [];
        for (const {
            feature: rB,
            state: sB,
            active: JB
          }
          of jB.features) {
          var nB, dB, IB, NB;
          if (JB) yd(null === (nB = (dB = (0, Yj.g)(rB)).getCustomCode) || void 0 === nB ? void 0 : nB.call(dB, sB, "vertex", SB.c.WGSL), zB), yd(null === (IB = (NB = (0, Yj.g)(rB)).getCustomCode) || void 0 === IB ? void 0 : IB.call(NB, sB, "fragment", SB.c.WGSL), QB)
        }
        const uB = [];
        for (const {
            feature: rB,
            state: sB
          }
          of jB.features) {
          var UB, aB;
          const BB = null === (UB = (aB = (0, Yj.g)(rB)).getUniforms) || void 0 === UB ? void 0 : UB.call(aB, sB, SB.c.WGSL);
          for (const jB of null !== (pB = null === BB || void 0 === BB ? void 0 : BB.ubo) && void 0 !== pB ? pB : []) {
            var pB;
            jB.size && jB.type && uB.push({
              name: jB.name,
              type: jB.type,
              arraySize: jB.arraySize
            })
          }
        }
        BB.vertexCode = zB, BB.fragmentCode = QB, BB.pluginUniforms = uB, BB.codeKey = JSON.stringify([zB, QB, uB]), BB.codeVersion = jB.version
      }(BB, jB), `${zB}#${BB.codeKey}`
    }

    function yd(BB, jB) {
      if (BB)
        for (const zB in BB) BB[zB] && jB.push([zB, BB[zB]])
    }
    const kd = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Gd {
      constructor(BB) {
        this.warnOnce = BB, this.states = new Map
      }
      renderState(BB, jB, zB, QB) {
        var nB;
        let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          IB = null !== (nB = BB.sideOrientation) && void 0 !== nB ? nB : jB.sideOrientation;
        jB._getWorldMatrixDeterminant() < 0 && (IB = 0 === IB ? 1 : 0);
        const NB = "triangle-list" === dB,
          uB = zB ? BB.alphaMode : 0,
          UB = (!zB || (0 === uB || BB.forceDepthWrite)) && !BB.disableDepthWrite,
          aB = NB && BB.backFaceCulling ? BB.cullBackFaces ? "back" : "front" : "none",
          pB = NB && 0 !== IB ? "ccw" : "cw",
          rB = BB.depthFunction,
          sB = NB ? BB.zOffset : 0,
          JB = NB ? BB.zOffsetUnits : 0,
          mB = !BB.disableColorWrite;
        return QB && QB.alphaMode === uB && QB.depthWrite === UB && QB.depthFunction === rB && QB.cullMode === aB && QB.frontFace === pB && QB.zOffset === sB && QB.zOffsetUnits === JB && QB.colourWrite === mB && QB.topology === dB ? QB : this.stateFor(uB, UB, rB, aB, pB, sB, JB, mB, dB)
      }
      stateFor(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = `${BB}|${jB}|${zB}|${QB}|${nB}|${dB}|${IB}|${NB}|${uB}`;
        let aB = this.states.get(UB);
        if (!aB) {
          var pB;
          const rB = BB ? dj(BB) : null;
          BB && !rB && this.warnOnce(`alpha:${BB}`, `alpha mode ${BB} is not supported`), aB = {
            key: UB,
            alphaMode: BB,
            depthFunction: zB,
            zOffset: dB,
            zOffsetUnits: IB,
            topology: uB,
            blend: rB,
            depthWrite: jB,
            depthCompare: zB && null !== (pB = kd.get(zB)) && void 0 !== pB ? pB : null,
            cullMode: QB,
            frontFace: nB,
            depthBias: -IB,
            depthBiasSlopeScale: -dB,
            colourWrite: NB
          }, this.states.set(UB, aB)
        }
        return aB
      }
    }
    var Ld = zB(37542);

    function gd(BB) {
      if (!BB.frozen) return -1;
      let jB = BB.version;
      for (const {
          feature: zB,
          state: QB,
          active: nB
        }
        of BB.features) {
        if (!nB || !zB.bind) continue;
        const BB = (0, Yj.g)(zB).uniformsVersion;
        if (!BB) return -1;
        jB += BB(QB)
      }
      return jB
    }
    class td {
      constructor(BB, jB, zB) {
        this.slots = BB, this.data = jB, this.textures = zB, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(BB, jB) {
        this.write4(BB, jB, 0, 0, 0, 1)
      }
      updateFloat2(BB, jB, zB) {
        this.write4(BB, jB, zB, 0, 0, 2)
      }
      updateFloat3(BB, jB, zB, QB) {
        this.write4(BB, jB, zB, QB, 0, 3)
      }
      updateFloat4(BB, jB, zB, QB, nB) {
        this.write4(BB, jB, zB, QB, nB, 4)
      }
      updateVector3(BB, jB) {
        this.write4(BB, jB.x, jB.y, jB.z, 0, 3)
      }
      updateVector4(BB, jB) {
        this.write4(BB, jB.x, jB.y, jB.z, jB.w, 4)
      }
      updateColor3(BB, jB) {
        this.write4(BB, jB.r, jB.g, jB.b, 0, 3)
      }
      updateColor4(BB, jB, zB) {
        this.write4(BB, jB.r, jB.g, jB.b, zB, 4)
      }
      updateFloatsFrom(BB, jB, zB, QB) {
        const nB = this.slots.get(BB);
        if (!nB) return;
        const dB = this.data,
          IB = nB.offset;
        for (let NB = 0; NB < QB; NB++) dB[IB + NB] = jB[zB + NB]
      }
      updateFloat3TimesFloats(BB, jB, zB, QB) {
        const nB = this.slots.get(BB);
        if (!nB) return;
        const dB = this.data,
          IB = nB.offset;
        dB[IB] = jB[zB] * QB[0], dB[IB + 1] = jB[zB + 1] * QB[1], dB[IB + 2] = jB[zB + 2] * QB[2]
      }
      l_(BB, jB) {
        const zB = this.slots.get(BB);
        zB && this.data.set(jB.m, zB.offset)
      }
      updateMatrixFloats(BB, jB) {
        const zB = this.slots.get(BB);
        zB && this.data.set(jB, zB.offset)
      }
      updateFloatArray(BB, jB) {
        const zB = this.slots.get(BB);
        if (!zB) return;
        if (!zB.arraySize || zB.stride === zB.floats) return void this.data.set(jB, zB.offset);
        const QB = Math.min(jB.length, zB.floats * zB.arraySize);
        for (let nB = 0; nB < QB; nB++) this.data[zB.offset + Math.floor(nB / zB.floats) * zB.stride + nB % zB.floats] = jB[nB]
      }
      updateArray(BB, jB) {
        this.updateFloatArray(BB, jB)
      }
      setTexture(BB, jB) {
        this.textures.set(BB, jB), this.expected.delete(BB)
      }
      expectTexture(BB) {
        this.textures.set(BB, null), this.expected.add(BB)
      }
      write4(BB, jB, zB, QB, nB, dB) {
        const IB = this.slots.get(BB);
        if (!IB) return;
        const NB = this.data,
          uB = IB.offset;
        NB[uB] = jB, dB > 1 && (NB[uB + 1] = zB), dB > 2 && (NB[uB + 2] = QB), dB > 3 && (NB[uB + 3] = nB)
      }
    }

    function Sd(BB, jB) {
      const zB = un,
        QB = Ld.g,
        nB = BB.lights,
        dB = Math.min(BB.lightCount, 8);
      for (let IB = 0; IB < dB; IB++) {
        const BB = zB.lights + IB * zB.lightStride,
          dB = IB * Ld.b;
        jB[BB] = nB[dB + QB.vector], jB[BB + 1] = nB[dB + QB.vector + 1], jB[BB + 2] = nB[dB + QB.vector + 2], jB[BB + 3] = nB[dB + QB.kind] === Ld.d.directional ? 1 : 0, jB[BB + 4] = nB[dB + QB.diffuse], jB[BB + 5] = nB[dB + QB.diffuse + 1], jB[BB + 6] = nB[dB + QB.diffuse + 2], jB[BB + 7] = nB[dB + QB.range], jB[BB + 8] = nB[dB + QB.specular], jB[BB + 9] = nB[dB + QB.specular + 1], jB[BB + 10] = nB[dB + QB.specular + 2], jB[BB + 11] = nB[dB + QB.range]
      }
      jB[zB.fogInfos] = BB.fogMode, jB[zB.fogInfos + 1] = BB.fogStart, jB[zB.fogInfos + 2] = BB.fogEnd, jB[zB.fogInfos + 3] = BB.fogDensity, jB[zB.fogColour] = BB.fogColour[0], jB[zB.fogColour + 1] = BB.fogColour[1], jB[zB.fogColour + 2] = BB.fogColour[2], jB[zB.outputHeight] = BB.renderHeight, jB[zB.animTick] = BB.animTick, jB[zB.timeMs] = BB.timeMs
    }
    class Md {
      constructor(BB) {
        this.instancesOf = BB
      }
      refreshModelUniforms(BB, jB, zB, QB) {
        const nB = gd(zB);
        if (nB >= 0 && nB === jB.heldVersion && jB.textures.get("diffuseSampler") === zB.diffuseTexture && jB.textures.get("reflectionCubeSampler") === zB.reflectionTexture && jB.textures.get("opacitySampler") === zB.opacityTexture && jB.textures.get("emissiveSampler") === zB.emissiveTexture) return !0;
        if (nB < 0)
          for (const dB of this.instancesOf(zB)) dB.heldVersion = -1;
        return this.writeModelUniforms(BB, jB, zB, QB), jB.heldVersion = nB, !1
      }
      writeModelUniforms(BB, jB, zB, QB) {
        const {
          ubo: nB
        } = jB, dB = zB.diffuseTexture, IB = zB.diffuseColor;
        nB.updateFloat4("vDiffuseColor", IB[0], IB[1], IB[2], zB.alpha), dB && (nB.updateFloat2("vDiffuseInfos", dB.uvSet, dB.level), nB.updateMatrixFloats("diffuseMatrix", dB.matrix)), nB.updateFloat("alphaCutOff", zB.alphaCutOff), nB.updateFloatsFrom("vEmissiveColor", zB.emissiveColor, 0, 3), nB.updateFloat3TimesFloats("vAmbientColor", QB.ambientColour, 0, zB.ambientColor);
        const NB = zB.specularColor;
        nB.updateFloat4("vSpecularColor", NB[0], NB[1], NB[2], zB.specularPower), nB.setTexture("diffuseSampler", dB);
        const uB = zB.opacityTexture;
        uB && (nB.updateFloat2("vOpacityInfos", uB.uvSet, uB.level), nB.updateMatrixFloats("opacityMatrix", uB.matrix)), nB.setTexture("opacitySampler", uB);
        const UB = zB.emissiveTexture;
        UB && (nB.updateFloat2("vEmissiveInfos", UB.uvSet, UB.level), nB.updateMatrixFloats("emissiveMatrix", UB.matrix)), nB.setTexture("emissiveSampler", UB);
        const aB = zB.reflectionTexture;
        aB && nB.updateMatrixFloats("reflectionMatrix", aB.matrix), nB.updateFloat2("vReflectionInfos", aB ? aB.level * BB.iblIntensity : 0, zB.roughness), nB.setTexture("reflectionCubeSampler", aB);
        const pB = BB.wJ();
        for (const {
            feature: JB,
            state: mB,
            active: yB
          }
          of zB.features) {
          var rB, sB;
          if (yB) null === (rB = (sB = (0, Yj.g)(JB)).bind) || void 0 === rB || rB.call(sB, mB, nB, BB, pB)
        }
      }
    }

    function Ed(BB) {
      const jB = BB.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(jB) ? "u32" : /i32|^vec\di$/.test(jB) ? "i32" : "f32"
    }

    function qd(BB, jB) {
      const zB = BB.getSize(),
        QB = Ed(jB),
        nB = BB => 4 === zB ? `${BB}x4` : 2 === zB ? `${BB}x2` : null;
      if ("f32" === QB) {
        if (5126 === BB.type) return 1 === zB ? "float32" : zB >= 2 && zB <= 4 ? `float32x${zB}` : null;
        if (!BB.normalized) return null;
        switch (BB.type) {
          case 5121:
            return nB("unorm8");
          case 5120:
            return nB("snorm8");
          case 5123:
            return nB("unorm16");
          case 5122:
            return nB("snorm16")
        }
        return null
      }
      const dB = "u32" === QB ? "uint" : "sint";
      switch (BB.type) {
        case 5125:
        case 5124:
          return 1 === zB ? `${dB}32` : zB <= 4 ? `${dB}32x${zB}` : null;
        case 5121:
        case 5120:
          return nB(`${dB}8`);
        case 5123:
        case 5122:
          return nB(`${dB}16`)
      }
      return null
    }

    function fd(BB) {
      var jB;
      const zB = /(8|16|32)(?:x(\d))?$/.exec(BB);
      return zB ? Number(zB[1]) / 8 * Number(null !== (jB = zB[2]) && void 0 !== jB ? jB : 1) : 4
    }
    class od {
      constructor(BB, jB, zB) {
        this.resources = BB, this.limits = jB, this.warnOnce = zB, this.layouts = new Map
      }
      resolveInputs(BB, jB, zB, QB) {
        const nB = [],
          dB = zB.program.attributes,
          IB = [];
        for (let aB = 0; aB < dB.length; aB++) {
          const zB = dB[aB],
            NB = zB.optional ? null : this.resources.vertexInput(BB, zB.name, QB);
          if (!NB) {
            const BB = Ed(zB.type),
              jB = "u32" === BB ? "uint32x4" : "i32" === BB ? "sint32x4" : "float32x4";
            IB.push(null);
            const QB = nB.find((BB => null === BB.data));
            QB ? QB.attributes.push({
              shaderLocation: aB,
              offset: 0,
              format: jB
            }) : nB.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: aB,
                offset: 0,
                format: jB
              }]
            });
            continue
          }
          const uB = NB.getBuffer();
          IB.push(NB);
          const UB = qd(NB, zB.type);
          if (!UB) return this.warnOnce(`format:${jB}:${zB.name}`, `${jB}'s ${zB.name} (type ${NB.type}, size ${NB.getSize()}) has no WebGPU vertex format`), null;
          const pB = NB.getIsInstanced() ? "instance" : "vertex",
            rB = NB.byteStride,
            sB = fd(UB),
            JB = nB.find((BB => BB.data === uB && BB.stride === rB && BB.step === pB && NB.byteOffset >= BB.base && NB.byteOffset - BB.base + sB <= rB));
          JB ? JB.attributes.push({
            shaderLocation: aB,
            offset: NB.byteOffset - JB.base,
            format: UB
          }) : nB.push({
            data: uB,
            base: NB.byteOffset,
            stride: rB,
            step: pB,
            attributes: [{
              shaderLocation: aB,
              offset: 0,
              format: UB
            }]
          })
        }
        if (nB.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${jB}`, `${jB} needs ${nB.length} vertex buffers`), null;
        let NB = "";
        for (const aB of nB) {
          NB += `${aB.stride}${"instance"===aB.step?"i":"v"}`;
          for (const BB of aB.attributes) NB += `,${BB.shaderLocation}:${BB.offset}:${BB.format}`;
          NB += ";"
        }
        let uB = this.layouts.get(NB);
        uB || (uB = {
          key: NB,
          buffers: nB.map((BB => ({
            arrayStride: BB.stride,
            stepMode: BB.step,
            attributes: BB.attributes
          }))),
          instanceEnds: nB.map((BB => {
            let jB = -1;
            if ("instance" === BB.step)
              for (const zB of BB.attributes) jB = Math.max(jB, zB.offset + fd(zB.format));
            return jB
          }))
        }, this.layouts.set(NB, uB));
        const UB = nB.map((BB => BB.base));
        return {
          program: zB,
          sources: IB,
          layout: uB,
          slotData: nB.map((BB => BB.data)),
          q_: UB,
          buffers: [],
          offsets: UB,
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

    function Hd(BB, jB, zB, QB) {
      const nB = jB.program.program.attributes;
      for (let dB = 0; dB < nB.length; dB++) {
        if ((nB[dB].optional ? null : zB.vertexInput(BB, nB[dB].name, QB)) !== jB.sources[dB]) return !1
      }
      return !0
    }
    const Dd = 64;
    class Fd {
      constructor(BB, jB, zB, QB) {
        this.device = BB, this.layout = jB, this.frameBuffer = zB, this.label = QB, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(BB) {
        if (BB * Dd <= this.data.length) return !1;
        let jB = 2 * this.data.length;
        for (; BB * Dd > jB;) jB *= 2;
        const zB = new Float32Array(jB);
        return zB.set(this.data), this.data = zB, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nB = this.data,
          dB = BB * Dd;
        let IB = nB[dB + 16] !== zB;
        for (let NB = 0; NB < 16 && !IB; NB++) IB = nB[dB + NB] !== jB[QB + NB];
        if (IB) {
          for (let BB = 0; BB < 16; BB++) nB[dB + BB] = jB[QB + BB];
          nB[dB + 16] = zB
        }
        return IB
      }
      upload(BB, jB) {
        this.device.queue.writeBuffer(this.buffer, BB * Un, this.data, BB * Dd, (jB - BB) * Dd)
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

    function Yd(BB) {
      return BB.gpu[fB.g.lite] ??= BB.materials.map(((jB, zB) => ({
        parts: BB,
        range: zB,
        owner: BB.owner
      })))
    }

    function Vd(BB) {
      var jB, zB, QB;
      return null !== (jB = null !== (zB = null === (QB = BB.parts.materials[BB.range]) || void 0 === QB ? void 0 : QB.mirror) && void 0 !== zB ? zB : BB.owner.material) && void 0 !== jB ? jB : null
    }
    const hd = ["opaque", "alphaTest", "transparent", "text"];

    function Xd(BB) {
      for (const jB of hd) BB[jB].units.length = 0, BB[jB].rows.length = 0
    }
    class Zd {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Fj.b)("Lite: ")
      }
      attach(BB, jB) {
        this.model = BB, this.mirror = jB
      }
      get worlds() {
        return this.model.nodes.zr
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
        for (const [jB, zB] of this.groups)
          for (const QB of hd)
            for (const nB of zB[QB].units) BB(nB.owner, "text" === QB ? "transparent" : QB, jB)
      }
      select(BB, jB) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(Xd);
        const {
          model: zB,
          mirror: QB
        } = this;
        if (!zB || !QB || !BB) return;
        this.rows.length < zB.nodes.Ep && (this.rows = new Int32Array(zB.nodes.Ep));
        const nB = this.rows,
          dB = zB.meshes;
        for (let NB = 0; NB < dB.looseCount; NB++) {
          const BB = dB.loose[NB],
            zB = QB.nodes[BB];
          zB && !zB.isBlocked && zB.isEnabled() && !zB.pp.hasAZeroComponent && dB.selects(BB, jB.frustum) && (this.activate(zB, BB), this.selectedCount++)
        }
        const IB = dB.selectTextPlanes(jB.frustum, nB);
        for (let NB = 0; NB < IB; NB++) {
          const jB = nB[NB],
            dB = QB.nodes[jB],
            IB = zB.meshes.parts[jB];
          if (!dB.isVisible || !(dB.visibility > 0) || 0 === (dB.layerMask & BB.layerMask) || !IB) continue;
          const uB = this.groupOf(zB.meshes.layer[jB]).text;
          for (const BB of Yd(IB)) uB.units.push(BB), uB.rows.push(jB);
          this.selectedCount++
        }
      }
      instanceBatch(BB) {
        const jB = this.batchOf(BB);
        return jB.dispatched || (jB.dispatched = jB.renderSelf = !0, jB.row = this.rowOf(BB)), jB
      }
      rowOf(BB) {
        return BB.row
      }
      activate(BB, jB) {
        if (!BB.rY) {
          const zB = BB;
          if (zB.bQB) {
            const BB = this.batchOf(zB);
            BB.dispatched = !0, BB.renderSelf = !0, BB.row = jB
          }
          return void this.dispatch(zB, jB, jB)
        }
        const zB = BB,
          QB = zB.vQB;
        if (QB._getWorldMatrixDeterminant() >= 0 !== zB._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${QB.name}`, `A mirrored InstancedMesh of ${QB.name} is not drawn yet`);
        const nB = this.batchOf(QB);
        nB.instances.push(zB), nB.rows.push(jB), nB.dispatched || (nB.dispatched = !0, this.dispatch(QB, jB, this.rowOf(QB)))
      }
      batchOf(BB) {
        let jB = this.batches.get(BB);
        return jB || (jB = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(BB, jB)), jB.frame !== this.frame && (jB.frame = this.frame, jB.dispatched = !1, jB.renderSelf = !1, jB.instances.length = 0, jB.rows.length = 0), jB
      }
      dispatch(BB, jB, zB) {
        const {
          layer: QB,
          parts: nB
        } = this.model.meshes;
        if (!nB[jB]) return;
        const dB = this.groupOf(QB[jB]),
          IB = BB;
        for (const NB of Yd(nB[jB])) {
          const BB = Vd(NB);
          if (!BB) continue;
          const jB = BB.needAlphaBlendingForMesh(IB) ? dB.transparent : BB.needAlphaTestingForMesh(IB) ? dB.alphaTest : dB.opaque;
          jB.units.push(NB), jB.rows.push(zB)
        }
      }
      groupOf(BB) {
        let jB = this.groups.get(BB);
        return jB || (jB = {
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
        }, this.groups.set(BB, jB)), jB
      }
    }

    function Ad(BB) {
      BB.opaque.length = 0, BB.transparent.length = 0
    }
    class Td {
      constructor() {
        this.DN = new Map, this.enabled = [], this.groups = new Map, this.Cs = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(BB) {
        if (this.DN.has(BB)) return;
        const jB = {
          mesh: BB,
          observer: BB.onEffectiveEnabledStateChangedObservable.add((BB => {
            this.mH(jB, BB)
          })),
          index: -1,
          steady: null
        };
        this.DN.set(BB, jB), this.mH(jB, BB.isEnabled())
      }
      remove(BB) {
        const jB = this.DN.get(BB);
        jB && (jB.observer.remove(!0), this.mH(jB, !1), this.DN.delete(BB))
      }
      dropSteady() {
        for (const BB of this.DN.values()) BB.steady = null
      }
      base(BB) {
        return this.DN.get(BB)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          DN: this.DN.size
        }
      }
      forEachSelected(BB) {
        for (const [jB, zB] of this.groups) {
          for (const QB of zB.opaque) BB(QB.owner, "opaque", jB);
          for (const QB of zB.transparent) BB(QB.owner, "transparent", jB)
        }
        for (const jB of this.Cs) BB(jB.mesh, "opaque", 0)
      }
      group(BB) {
        return this.groups.get(BB)
      }
      forEachGroup(BB) {
        this.groups.forEach(BB)
      }
      select(BB, jB) {
        if (this.drawn = 0, this.selected = 0, this.Cs.length = 0, this.groups.forEach(Ad), !BB) return;
        const zB = this.enabled;
        for (let QB = 0; QB < zB.length; QB++) {
          const nB = zB[QB];
          if (nB.steady && jB(nB, BB)) {
            this.selected++, this.Cs.push(nB);
            continue
          }
          const dB = nB.mesh;
          if (dB.isBlocked || dB.pp.hasAZeroComponent) continue;
          if (!dB.isVisible || dB.visibility <= 0 || 0 === (dB.layerMask & BB.layerMask)) continue;
          if (dB.bQB) {
            this.warned.has(dB.name) || (this.warned.add(dB.name), console.warn(`Lite: thin instance base ${dB.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: IB
          } = dB;
          if (!IB) continue;
          dB.computeWorldMatrix(), this.selected++;
          const NB = this.listsFor(dB.renderingGroupId);
          for (const BB of Yd(IB)) {
            const jB = Vd(BB);
            jB && (jB.needAlphaBlendingForMesh(dB) ? NB.transparent.push(BB) : NB.opaque.push(BB))
          }
        }
      }
      mH(BB, jB) {
        if (jB === BB.index >= 0) return;
        BB.steady = null;
        const zB = this.enabled;
        if (jB) BB.index = zB.length, zB.push(BB);
        else {
          const jB = zB.pop();
          jB !== BB && (zB[BB.index] = jB, jB.index = BB.index), BB.index = -1
        }
      }
      listsFor(BB) {
        let jB = this.groups.get(BB);
        return jB || (jB = {
          opaque: [],
          transparent: []
        }, this.groups.set(BB, jB)), jB
      }
    }
    var Pd = zB(39663);
    class Wd {
      constructor() {
        this.bundle = null, this.stale = !0, this.DN = new Set
      }
    }
    class ed {
      constructor(BB, jB, zB) {
        this.device = BB, this.slots = jB, this.host = zB, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Wd, this.PD = new Wd, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new jd, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = BB => {
          BB.seen !== this.frame && (BB.draw && (BB.draw = null, this.args[5 * BB.slot + 1] = 0, this.argsDirty = !0, this.PD.stale ||= BB.PD), this.frame - BB.seen > 120 && (this.records.delete(BB.unit), this.freeSlots.push(BB.slot), BB.recorded && (this.bundleOf(BB).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(BB) {
          var jB, zB;
          let QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (jB = null === (zB = globalThis.navigator) || void 0 === zB ? void 0 : zB.userAgent) && void 0 !== jB ? jB : "";
          const nB = BB.adapterInfo;
          return "intel" === (null === nB || void 0 === nB ? void 0 : nB.vendor) && "gen-12lp" === nB.architecture && QB.includes("Windows")
        }(BB), (0, Pd.I)(this.direct)
      }
      gL() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Pd.I)(this.directThisFrame)
      }
      add(BB, jB, zB, QB) {
        let nB = this.records.get(BB);
        return nB || (nB = this.createRecord(BB), this.records.set(BB, nB)), nB.recorded && wd(nB, jB) || (this.bundleOf(nB).stale = !0), this.place(nB, jB, zB, QB), nB
      }
      bundleOf(BB) {
        return BB.PD ? this.PD : this.main
      }
      addAgain(BB, jB, zB, QB) {
        BB.recorded || (this.bundleOf(BB).stale = !0), this.place(BB, jB, zB, QB)
      }
      place(BB, jB, zB, QB) {
        BB.seen = this.frame, BB.PD && null === BB.draw && (this.PD.stale = !0), BB.draw = jB, this.drawn++, zB && this.slots.write(BB.slot, zB, QB) && (this.slotsFrom = Math.min(this.slotsFrom, BB.slot), this.slotsTo = Math.max(this.slotsTo, BB.slot));
        const nB = this.args,
          dB = 5 * BB.slot;
        nB[dB] === jB.count && nB[dB + 1] === jB.instances && nB[dB + 2] === jB.first || (nB[dB] = jB.count, nB[dB + 1] = jB.instances, nB[dB + 2] = jB.first, this.argsDirty = !0, this.PD.stale ||= BB.PD)
      }
      tL() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(BB) {
        for (const jB of this.records.values()) jB.draw && jB.seen === this.frame && !jB.PD && BB(jB.draw, this.slots.data, jB.slot * Un / 4)
      }
      resourceDestroyed(BB) {
        this.main.stale ||= this.main.DN.has(BB), this.PD.stale ||= this.PD.DN.has(BB)
      }
      execute(BB, jB, zB) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(BB, jB, zB, "direct"), this.drawn;
        const QB = this.host.sceneGroup(jB);
        if (!QB) return this.main.bundle = null, this.PD.bundle = null, this.recordedSceneGroup = null, this.encode(BB, jB, zB, "direct"), this.drawn;
        this.recordedTarget === zB && this.recordedSceneGroup === QB || (this.recordedTarget = zB, this.recordedSceneGroup = QB, this.main.stale = !0, this.PD.stale = !0);
        const nB = this.main,
          dB = this.PD;
        let IB = !1;
        !nB.stale && nB.bundle || (nB.bundle = this.record(jB, zB, QB, "indirect"), IB = !0);
        const NB = (0, Pd.m)();
        return (dB.stale || this.rangedEpoch !== NB) && (this.rangedEpoch = NB, dB.bundle = this.drawsRanged() ? this.record(jB, zB, QB, "PD") : this.noRangedBundle(), IB = !0), IB && (this.bundles = dB.bundle ? [nB.bundle, dB.bundle] : [nB.bundle]), BB.executeBundles(this.bundles), BB.setBindGroup(0, QB), this.drawn
      }
      record(BB, jB, zB, QB) {
        const nB = this.device.createRenderBundleEncoder({
          label: "PD" === QB ? "thin-bases-ranged" : "thin-bases",
          colorFormats: BB._colorFormat ? [BB._colorFormat] : [],
          depthStencilFormat: BB._depthStencilFormat,
          sampleCount: BB._sampleCount
        });
        return nB.setBindGroup(0, zB), this.encode(nB, BB, jB, QB), nB.finish()
      }
      noRangedBundle() {
        for (const BB of this.records.values()) BB.PD && (BB.recorded = !1);
        return this.PD.DN.clear(), this.PD.stale = !1, null
      }
      drawsRanged() {
        for (const BB of this.records.values())
          if (BB.PD && BB.draw) return !0;
        return !1
      }
      encode(BB, jB, zB, QB) {
        const nB = [];
        for (const uB of this.records.values()) "direct" !== QB && uB.PD !== ("PD" === QB) || (uB.recorded = !1, uB.draw && nB.push(uB));
        nB.sort(xd);
        const dB = "direct" === QB ? null : "PD" === QB ? this.PD : this.main;
        null === dB || void 0 === dB || dB.DN.clear(), this.binder.reset();
        let IB = !1;
        for (const uB of nB) {
          var NB;
          const nB = uB.draw,
            UB = this.host.pipelineFor(nB, jB, zB);
          if (!UB) {
            this.host.pipelineCompiling(nB, zB) ? IB = !0 : dB && this.keep(uB, nB, dB.DN);
            continue
          }
          let aB;
          if (uB.PD && "indirect" !== QB) {
            const BB = uB.unit.owner;
            aB = "direct" === QB && (0, Pd.u)(BB) || (0, Pd.o)(BB) || void 0
          }
          if (dB && this.keep(uB, nB, dB.DN), 0 === (null === (NB = aB) || void 0 === NB ? void 0 : NB.count)) continue;
          this.binder.bind(BB, nB, UB, this.slots.bindGroup, uB.slot * Un);
          const pB = 5 * uB.slot;
          if ("indirect" === QB) {
            nB.indexBuffer ? BB.drawIndexedIndirect(this.argsBuffer, 4 * pB) : BB.drawIndirect(this.argsBuffer, 4 * pB);
            continue
          }
          const rB = this.args;
          aB ? ld(BB, null !== nB.indexBuffer, rB, pB, aB) : nB.indexBuffer ? BB.drawIndexed(rB[pB], rB[pB + 1], rB[pB + 2], 0, 0) : BB.draw(rB[pB], rB[pB + 1], rB[pB + 2], 0)
        }
        dB && (dB.stale = IB)
      }
      keep(BB, jB, zB) {
        BB.recorded = !0, BB.pipelineKey = jB.pipelineKey, BB.materialGroup = jB.material.bindGroup, BB.vertexBuffers.length = 0, BB.vertexBuffers.push(...jB.vertexBuffers), BB.vertexOffsets = jB.vertexOffsets, BB.indexBuffer = jB.indexBuffer, BB.indexFormat = jB.indexFormat;
        for (const QB of jB.vertexBuffers) zB.add(QB);
        jB.indexBuffer && zB.add(jB.indexBuffer), zB.add(jB.material.buffer);
        for (const QB of jB.material.bound) QB && zB.add(QB)
      }
      createRecord(BB) {
        let jB = this.freeSlots.pop();
        return void 0 === jB && (jB = this.slotCount++, this.grow()), {
          unit: BB,
          slot: jB,
          PD: void 0 !== (0, Pd.o)(BB.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.PD.stale = !0), 5 * this.slotCount > this.args.length) {
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

    function ld(BB, jB, zB, QB, nB) {
      const dB = zB[QB + 1],
        IB = nB.data;
      for (let NB = 0; NB < nB.count; NB++) {
        const nB = Math.min(IB[2 * NB], dB),
          uB = Math.min(IB[2 * NB + 1], dB - nB);
        0 !== uB && (jB ? BB.drawIndexed(zB[QB], uB, zB[QB + 2], 0, nB) : BB.draw(zB[QB], uB, zB[QB + 2], nB))
      }
    }

    function wd(BB, jB) {
      if (BB.pipelineKey !== jB.pipelineKey || BB.materialGroup !== jB.material.bindGroup || BB.indexBuffer !== jB.indexBuffer || BB.indexFormat !== jB.indexFormat || BB.vertexOffsets !== jB.vertexOffsets || BB.vertexBuffers.length !== jB.vertexBuffers.length) return !1;
      for (let zB = 0; zB < BB.vertexBuffers.length; zB++)
        if (BB.vertexBuffers[zB] !== jB.vertexBuffers[zB]) return !1;
      return !0
    }

    function xd(BB, jB) {
      return Qd(BB.draw, jB.draw)
    }
    const Kd = new WeakMap,
      Cd = {
        depth: !1,
        sunShadow: !1
      };

    function cd(BB, jB) {
      let zB = Kd.get(BB);
      zB || (zB = new Map, Kd.set(BB, zB));
      const QB = `${jB.depth?"-depth":""}${jB.sunShadow?"-shadow":""}${jB.shadowMask?"-mask":""}`;
      let nB = zB.get(QB);
      if (!nB) {
        const dB = [{
          binding: bj.d,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: bj.k
          }
        }, {
          binding: bj.C,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        jB.depth && dB.push({
          binding: bj.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), jB.sunShadow && dB.push(... function() {
          const BB = GPUShaderStage.FRAGMENT,
            jB = bj.v;
          return [{
            binding: jB.uniform,
            visibility: BB,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: jB.Vr,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: jB.special,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: jB.volume,
            visibility: BB,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: jB.sampler,
            visibility: BB,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: jB.entities,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: jB.entityGrids,
            visibility: BB,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), jB.shadowMask && dB.push({
          binding: bj.y,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), nB = BB.createBindGroupLayout({
          label: `${jB.depth?"terrain-":""}shader-pack-inputs${QB}`,
          entries: dB
        }), zB.set(QB, nB)
      }
      return nB
    }

    function bd(BB) {
      return cd(BB, Cd)
    }

    function vd(BB, jB) {
      if (!jB) return !1;
      const zB = (0, vj.f)(BB);
      return !!zB && dQ(zB, jB)
    }

    function Rd(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!FQ(jB)) return [];
      return [cd(BB, {
        depth: qQ(jB.packVariant),
        sunShadow: vd(jB.packVariant, zB),
        shadowMask: QB
      })]
    }
    class Od {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = BB, this.sunShadow = zB, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(bj.k), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = BB.createBuffer({
          label: "shader-pack-inputs",
          size: bj.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const QB = (0, bj.E)(jB);
        this.textures = BB.createBuffer({
          label: "shader-pack-textures",
          size: QB.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), BB.queue.writeBuffer(this.textures, 0, QB), this.bindGroup = BB.createBindGroup({
          label: "shader-pack-inputs",
          layout: bd(BB),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: bj.d,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: bj.C,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(BB, jB, zB) {
        (0, bj.J)(this.data, {
          seconds: BB.seconds(),
          lit: zB,
          renderOffset: BB.renderOffset(),
          J7: BB.J7(),
          eyePosition: jB,
          shadowDirection: BB.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QB = jB ? this.sunShadow : null;
        if ((jB || zB) && !QB) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!BB && !QB) return this.bindGroup;
        (BB && BB !== this.depthView || zB && zB !== this.maskView) && (this.depthView = null !== BB && void 0 !== BB ? BB : this.depthView, this.maskView = null !== zB && void 0 !== zB ? zB : this.maskView, this.groups.clear());
        const nB = (BB ? 1 : 0) | (QB ? 2 : 0) | (zB ? 4 : 0);
        let dB = this.groups.get(nB);
        if (!dB) {
          const jB = this.entries();
          BB && jB.push({
            binding: bj.u,
            resource: BB
          }), QB && jB.push(...QB.entries()), zB && jB.push({
            binding: bj.y,
            resource: zB
          }), dB = this.device.createBindGroup({
            label: `${BB||zB?"terrain-":""}shader-pack-inputs${BB?"-depth":""}${QB?"-shadow":""}${zB?"-mask":""}`,
            layout: cd(this.device, {
              depth: !!BB,
              sunShadow: !!QB,
              shadowMask: !!zB
            }),
            entries: jB
          }), this.groups.set(nB, dB)
        }
        return dB
      }
      bind(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        BB.setBindGroup(bj.h, this.bindGroupFor(jB, zB, QB))
      }
    }

    function BI(BB, jB, zB) {
      if (BB.gpuVersion === jB.gpuBuffersVersion) return !0;
      let QB;
      do {
        if (QB = jB.gpuBuffersVersion, !jI(BB, jB, zB)) return !1
      } while (jB.gpuBuffersVersion !== QB);
      return BB.gpuVersion = QB, BB.fitInstances = 0, !0
    }

    function jI(BB, jB, zB) {
      let QB = null;
      for (let dB = 0; dB < BB.slotData.length; dB++) {
        var nB;
        const IB = BB.slotData[dB],
          NB = IB ? jB.gpuBuffer(IB) : zB;
        if (!NB) return !1;
        IB && BB.layout.instanceEnds[dB] < 0 && jB.cover(IB, Number.POSITIVE_INFINITY), BB.buffers[dB] = NB;
        const uB = BB.q_[dB] + (IB ? jB.gpuOffset(IB) : 0);
        uB !== (null !== (nB = QB) && void 0 !== nB ? nB : BB.offsets)[dB] && (QB ??= BB.offsets.slice(), QB[dB] = uB), BB.ends[dB] = IB ? jB.gpuEnd(IB) : NB.size
      }
      return QB && (BB.offsets = QB), !0
    }

    function zI(BB, jB, zB, QB) {
      if (jB <= BB.fitInstances) return null;
      const {
        layout: nB,
        ends: dB,
        offsets: IB,
        slotData: NB,
        q_: uB
      } = BB;
      let UB = !1;
      for (let aB = 0; aB < nB.buffers.length; aB++) {
        const BB = nB.instanceEnds[aB];
        if (BB < 0) continue;
        const QB = (jB - 1) * nB.buffers[aB].arrayStride + BB;
        if (dB[aB] - IB[aB] < QB) return {
          index: aB,
          needed: QB
        };
        const pB = NB[aB];
        pB && zB.cover(pB, uB[aB] + QB) && (UB = !0)
      }
      return UB && BI(BB, zB, QB), BB.fitInstances = jB, null
    }
    var QI = zB(37908),
      nI = zB(37936);
    const dI = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      II = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      NI = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      uI = `((vertexInputs.aPackedLightLevels >> 16u) | ${Dj.e.placed}u)`,
      UI = "u32(vertexInputs.aShaderPackItem.x)",
      aI = `${Dj.e.lifeform}u`;

    function pI(BB) {
      return "item" === BB.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const rI = "bloxdSpEnchant",
      sI = "floor(finalWorld[3].xyz)";

    function JI(BB, jB, zB) {
      return "placed" === jB.kind && BB.reads[zB].includes("bloxdFragmentBlockPosition")
    }

    function mI(BB, jB) {
      let [zB, QB] = BB;
      return zB === jB.point && QB === jB.code
    }

    function yI(BB, jB) {
      var zB, QB, nB;
      const dB = null === (zB = BB.find((BB => BB.texture))) || void 0 === zB ? void 0 : zB.texture,
        IB = null === (QB = BB.find((BB => BB.enchantTier))) || void 0 === QB ? void 0 : QB.enchantTier,
        NB = null === (nB = BB.find((BB => BB.overlay))) || void 0 === nB ? void 0 : nB.overlay,
        uB = NB ? jB.filter((BB => mI(BB, NB))).length : 0;
      return NB && 1 === uB ? {
        texture: dB,
        overlay: NB,
        enchantTier: IB
      } : {
        texture: dB,
        enchantTier: IB
      }
    }

    function kI(BB) {
      if ("item" === BB.kind) {
        return {
          vertexFlags: `(${UI} & 0xffffu)`,
          varying: "vPackItem",
          value: UI,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return BB.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: uI,
        varying: "vPackFlags",
        value: uI,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function GI(BB) {
      return "lifeform" === BB.kind ? aI : "0u"
    }

    function LI(BB) {
      return !!BB.BLOXD_PLUGIN_ENCHANTMENT
    }

    function gI(BB, jB) {
      const {
        enchantTier: zB
      } = jB;
      return zB && LI(jB.defines) && "lifeform" === jB.kind && qI(BB, "enchantTier") ? zB : null
    }

    function tI(BB, jB) {
      return LI(jB.defines) && qI(BB, "enchantSpeed")
    }

    function SI(BB) {
      const {
        overlay: jB,
        defines: zB
      } = BB;
      if (!jB || !zB.DIFFUSE) return null;
      const QB = zB.VERTEXCOLOR || zB.INSTANCESCOLOR && zB.INSTANCES;
      return `vec4f(${jB.colour}.rgb * uniforms.vDiffuseInfos.y${QB?" * fragmentInputs.vColor.rgb":""}, ${jB.colour}.a)`
    }
    const MI = "fragmentInputs.vPackTexture";

    function EI(BB) {
      const {
        atlas: jB,
        defines: zB,
        texture: QB
      } = BB;
      if (jB || !zB.DIFFUSE) return null;
      if (QB) return {
        texture: "diffuseSampler",
        ...QB
      };
      const nB = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===zB.DIFFUSEDIRECTUV?"vMainUV1":2===zB.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== BB.kind) return nB;
      if (!zB.BLOXD_PLUGIN_ANIMATED) return {
        ...nB,
        id: MI
      };
      const dB = SB.c.WGSL,
        IB = (0, SB.Ab)(dB, "uAnimStatesNum"),
        NB = (0, SB.hb)(dB, (0, QI.g)(dB), IB),
        uB = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${IB})`,
        layers: [NB],
        uv: `vec2f(${uB}.x, ${uB}.y * ${IB} - ${NB})`,
        levelUv: uB,
        id: MI
      }
    }

    function iI(BB, jB) {
      return "box" === jB.kind && !!BB.hooks.surface && null !== EI(jB)
    }

    function qI(BB, jB) {
      return BB.reads.fragment.includes(jB)
    }

    function fI(BB) {
      return !!BB.BLOXD_LIGHTING && !BB.BLOXD_UNLIT
    }

    function oI(BB, jB, zB, QB) {
      const nB = BB.filter((BB => {
        let [zB, QB] = BB;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === zB && QB === jB
      }));
      if (1 !== nB.length) throw new Error(`A model program for shader packs has ${0===nB.length?"no":"more than one"} ${QB} code before fog (lite/modelShaderPack.ts)`);
      return BB.map((BB => BB === nB[0] ? [BB[0], zB] : BB))
    }

    function HI(BB, jB, zB, QB) {
      const {
        hooks: nB
      } = BB, {
        kind: dB,
        defines: IB
      } = jB, NB = [...zB];
      var uB;
      jB.atlas && nB.surface && NB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", rQ("atlasIdxIn")]), "item" === dB && NB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, SB.g)(SB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), iI(BB, jB) && NB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, SB.g)(SB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (uB = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${aQ}[min(u32(${uB}) - 1u, arrayLength(&${aQ}) - 1u)], ${uB} > 0.5);\n`)]);
      const UB = kI(jB);
      UB && (nB.surface || nB.light) && NB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${UB.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${UB.varying} = ${UB.value};`]);
      let aB = QB;
      if (JI(BB, jB, "fragment") && (NB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${sI});`]), aB = [...aB, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), qI(BB, "localPosition") && NB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${pI(jB)};`]), LI(IB) && nB.surface) {
        tI(BB, jB) && NB.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const zB = gI(BB, jB);
        zB && NB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${zB});`]);
        const QB = (0, SB.qb)(SB.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        aB = [...oI(aB, (0, nI.f)(SB.c.WGSL), QB, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, nI.c)(rI)]]
      }
      const {
        overlay: pB
      } = jB;
      pB && SI(jB) && nB.surface && (aB = aB.filter((BB => !mI(BB, pB))));
      const rB = nB.light ? function(BB) {
        return "placed" === BB.kind ? {
          name: "terrain",
          engine: (0, Kj.R)(SB.c.WGSL),
          pack: (0, Kj.fb)(SB.c.WGSL)
        } : BB.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Kj.J)(SB.c.WGSL),
          pack: (0, Kj.cb)(SB.c.WGSL)
        } : null
      }(jB) : null;
      if (rB && (aB = oI(aB, rB.engine, rB.pack, `${rB.name} light`), "placed" !== dB && fI(IB))) {
        const BB = IB.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, SB.Ab)(SB.c.WGSL, "uEntityLightLevels") : (0, SB.Gb)(SB.c.WGSL, "aLightLevels");
        NB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Kj.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Kj.eb)(SB.c.WGSL, BB)])
      }
      return {
        vertexCode: NB,
        fragmentCode: aB
      }
    }

    function DI(BB, jB, zB, QB) {
      return QQ(BB, jB, zB, QB, "model")
    }
    const FI = "\t@builtin(position) position: vec4f,\n";

    function YI(BB, jB) {
      const zB = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(BB)[0];
      return `${zB}${jB}${BB.slice(zB.length)}`
    }

    function VI(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: nB
      } = jB, dB = dQ(jB, QB), {
        kind: IB,
        defines: NB
      } = zB, uB = function(BB, jB) {
        var zB, QB, nB;
        const {
          defines: dB
        } = jB, IB = kI(jB), NB = !!dB.FOG, uB = LI(dB), UB = null !== (zB = null === IB || void 0 === IB ? void 0 : IB.enchantTier) && void 0 !== zB ? zB : gI(BB, jB) ? "fragmentInputs.vPackEnchantTier" : "0u", aB = "lifeform" === jB.kind && !dB.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (QB = null === IB || void 0 === IB ? void 0 : IB.vertexFlags) && void 0 !== QB ? QB : GI(jB),
          vertexLocalPosition: pI(jB),
          flags: null !== (nB = null === IB || void 0 === IB ? void 0 : IB.flags) && void 0 !== nB ? nB : GI(jB),
          normal: "normalW",
          alpha: aB ? "alpha * baseColor.a" : "alpha",
          alphaOut: aB ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: NB ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: NB ? "1.0 - fog" : "0.0",
          enchantTier: UB,
          enchantColour: uB ? `${rI}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: tI(BB, jB) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: qI(BB, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: SI(jB)
        }
      }(jB, zB), UB = BB.textures.filter((BB => /^textureAtlas\d+$/.test(BB.name))).length, aB = zB.atlas && UB > 0 ? {
        count: UB,
        layers: zB.atlas.layers,
        width: zB.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: BB.material.slots.has("uAnimDataPerTex") ? (jB, zB) => bQ(jB, zB, function(BB) {
          const jB = BB.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            vp: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: BB => `uniforms.uAnimDataPerTex[${BB}]${jB}`
          }
        }(BB)) : null
      } : null, pB = "placed" === IB ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", rB = null !== aB && void 0 !== aB ? aB : EI(zB), sB = function(BB, zB) {
        let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,bj.I)()}${NQ(jB,zB)}${QB}${JQ(BB)}${BQ}${pB}${jB.code}`
      };
      let {
        vertex: JB,
        fragment: mB
      } = BB;
      const yB = yQ(nB, uB);
      if (yB) {
        const BB = JI(jB, zB, "vertex") ? `\tbloxdSpCell = ${sI};\n` : "";
        JB = DI(JB, dI, `${BB}${yB.slice(1)}${dI}`, "vertex")
      }
      const kB = `${uQ(jB,dB,function(BB,jB){return jB.TWOSIDEDLIGHTING?BB:`select(-(${BB}), ${BB}, fragmentInputs.frontFacing)`}(uB.normal,NB),uB.flags)}${kQ(nB,jB.strict,jB.program,rB,uB)}`;
      kB && (mB = DI(mB, II, `${kB.slice(1)}${II}`, "surface")), dB && jB.sunShadow && !NB.TWOSIDEDLIGHTING && (mB = DI(mB, FI, `${FI}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const GB = gQ(nB);
      if (GB) {
        const BB = LQ(nB, fI(NB), !0, uB);
        mB = DI(mB, NI, `${BB}${GB.slice(1)}${NI}`, "light")
      }
      const LB = iI(jB, zB) ? pQ : "";
      return {
        ...BB,
        vertex: YI(JB, sB(aB, !1, LB)),
        fragment: YI(mB, sB(rB, dB))
      }
    }
    const hI = {
      name: "earthSky",
      uniqueId: -1
    };
    class XI {
      constructor(BB, jB) {
        this.resources = BB, this.epoch = jB, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const BB of this.instances.values()) BB.released = !0, this.resources.destroyBuffer(BB.buffer);
        this.instances.clear()
      }
    }

    function ZI(BB) {
      return BB.failed && null !== BB.packGroup
    }
    class AI {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Td,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zd;
        this.device = BB, this.resources = jB, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.M_ = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new jd, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Md((BB => this.modelSlot(BB).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Fj.b)("Lite: "), this.renderStates = new Gd(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (BB, jB) => this.keepSteady(BB, jB), this.lists = void 0, this.slotCount = 0, this.M_ = QB, this.modelMeshes = nB, this.lists = new zd(nB, QB, this, this.warnOnce), this.drawDefines = new Jd(jB, this.warnOnce, ((BB, jB, zB) => this.programWithModel(BB, jB, zB)), ZI), this.vertexLayouts = new od(jB, BB.limits, this.warnOnce), this.sceneLayout = Mj(BB), this.frameLayout = BB.createBindGroupLayout({
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
        }), this.meshSlots = new Fd(BB, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = BB.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new ed(BB, new Fd(BB, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (BB, jB, zB) => this.pipelineFor(BB, jB, zB),
          pipelineCompiling: (BB, jB) => !BB.program.failed && !1 !== this.pipelines.get(`${BB.pipelineKey}|${jB}`),
          sceneGroup: BB => {
            const jB = zB(BB);
            return jB || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), jB
          }
        }), jB.onDestroy = BB => {
          this.thinBundle.resourceDestroyed(BB)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const nB = {
          order: BB,
          isTransparent: jB,
          _direct: !jB,
          bind: (BB, jB) => this.createBinding(nB, jB, zB, QB)
        };
        return nB
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(BB, jB, zB) {
        var QB;
        let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = jB, this.drawDefines.view = jB, this.thinBundle.gL(), this.writeFrameUniforms();
        const dB = null !== (QB = null === nB || void 0 === nB ? void 0 : nB.defineFor("model")) && void 0 !== QB ? QB : 0;
        this.drawDefines.modelPackVariant = dB, nB && 0 !== dB && (this.packInputs ??= new Od(this.device, nB.textureLayers(), this.sunShadow), this.packInputs.write(nB, jB.eye, nB.Rm())), this.lists.clear(), this.slotCount = 0;
        const IB = BB.activeCamera;
        this.M_.select(IB, this.keepSteadyBase), this.modelMeshes.select(IB, jB), zB && this.pushEarthSky(zB), this.lists.collect(BB), this.thinBundle.tL(), this.uploadMeshSlots()
      }
      pushDraws(BB, jB, zB, QB, nB, dB) {
        let IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const NB = dB.length;
        for (let uB = 0; uB < zB; uB++) {
          const zB = jB[uB];
          let NB = this.retainedDraw(BB, zB, QB, nB);
          if (void 0 === NB && (NB = this.drawFor(BB, zB, QB, nB), this.retain(zB, NB)), NB) {
            const BB = zB.owner,
              jB = IB ? IB[uB] : -1;
            NB.slotOffset = jB < 0 ? this.writeMeshSlot(BB.getWorldMatrix().m, BB.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[jB], 16 * jB), dB.push(NB)
          }
        }
        return dB.length - NB
      }
      bundleDraws(BB, jB, zB) {
        let QB = 0;
        for (const nB of jB) {
          let jB = this.retainedDraw(BB, nB, zB, !1);
          const dB = void 0 !== jB;
          if (void 0 === jB && (jB = this.drawFor(BB, nB, zB, !1), this.retain(nB, jB)), jB) {
            const BB = nB.owner,
              zB = this.thinBundle.add(nB, jB, BB.getWorldMatrix().m, BB.visibility);
            dB && this.steadyFrom(nB, jB, zB), QB++
          }
        }
        return QB
      }
      steadyFrom(BB, jB, zB) {
        const QB = BB.owner,
          nB = this.M_.base(QB),
          dB = QB.material,
          {
            drawState: IB,
            instance: NB
          } = jB.inputs.retained;
        if (!nB || !dB || 1 !== BB.parts.materials.length || Vd(BB) !== dB) return;
        const uB = nB.steady ??= {
          unit: BB,
          material: dB,
          visibility: 1,
          draw: jB,
          record: zB,
          drawState: IB,
          instance: NB,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        uB.unit = BB, uB.material = dB, uB.visibility = QB.visibility, uB.draw = jB, uB.record = zB, uB.drawState = IB, uB.instance = NB, uB.bindGroup = NB.bindGroup, uB.gpuVersion = this.resources.gpuBuffersVersion, uB.fitInstances = jB.inputs.fitInstances, uB.worldFlag = QB.getWorldMatrix().updateFlag, uB.handedFrame = this.frame
      }
      keepSteady(BB, jB) {
        const zB = BB.steady;
        if (zB.handedFrame !== this.frame - 1 || (this.frame + zB.phase) % 8 === 0) return !1;
        const QB = BB.mesh,
          {
            unit: nB,
            draw: dB,
            instance: IB,
            drawState: NB
          } = zB,
          uB = QB.forcedInstanceCount || QB.F_;
        if (!QB.isVisible || QB.bQB || QB.visibility !== zB.visibility || 0 === (QB.layerMask & jB.layerMask) || QB.material !== zB.material || 0 !== QB.renderingGroupId || QB.hasVertexAlpha || !this.drawDefines.definesHold(NB, nB, NB.instancing) || zB.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(dB.inputs, nB, NB.instancing, dB.program) || dB.program.failed || IB.released || uB <= 0 || uB > zB.fitInstances) return !1;
        if (IB.frame !== this.frame && this.bindMaterial(IB, this.modelUniforms.refreshModelUniforms(QB.aY(), IB, IB.model, this.view)), !IB.bindable || IB.bindGroup !== zB.bindGroup) return !1;
        const UB = QB.computeWorldMatrix(),
          aB = UB.updateFlag !== zB.worldFlag;
        return zB.worldFlag = UB.updateFlag, dB.instances = uB, this.thinBundle.addAgain(zB.record, dB, aB ? UB.m : null, zB.visibility), zB.handedFrame = this.frame, this.M_.drawn++, !0
      }
      retainedDraw(BB, jB, zB, QB) {
        const nB = this.inputs.get(jB),
          dB = null === nB || void 0 === nB ? void 0 : nB.retained;
        if (!nB || !dB) return;
        const {
          drawState: IB,
          program: NB,
          instance: uB,
          instancing: UB
        } = dB, aB = jB.owner;
        if (Nd(aB) !== UB) return;
        const pB = this.instanceCount(aB, UB);
        if (pB <= 0) return null;
        if (uB.released || NB.failed || IB.program !== NB || !this.drawDefines.programCurrent(IB, jB, UB, zB) || !this.inputsStamped(nB, jB, UB, NB) || aB.isUnIndexed !== dB.unIndexed || this.indexKey(jB) !== dB.indexData) return;
        if (dB.indexBuffer && dB.gpuVersion !== this.resources.gpuBuffersVersion) {
          const BB = this.resources.gpuBuffer(dB.indexData);
          if (!BB) return;
          dB.indexBuffer = BB, dB.gpuVersion = this.resources.gpuBuffersVersion
        }
        let rB = !1;
        if (uB.frame !== this.frame && (rB = this.modelUniforms.refreshModelUniforms(BB, uB, uB.model, this.view)), !this.bindMaterial(uB, rB) || !this.withGpuBuffers(nB) || !this.instanceBuffersFit(aB.name, nB, pB)) return null;
        const sB = this.makeDraw(NB, nB, this.renderStates.renderState(IB.model, aB, QB, nB.state), uB, pB);
        return this.setRange(sB, jB, dB.indexBuffer, dB.indexData), sB
      }
      retain(BB, jB) {
        const zB = this.drawDefines.drawStates.get(BB);
        if (!jB || !zB || zB.program !== jB.program) {
          const jB = this.inputs.get(BB);
          return void(jB && (jB.retained = null))
        }
        const QB = BB.owner,
          nB = zB.instancing,
          dB = this.indexKey(BB),
          IB = jB.inputs.retained;
        IB ? (IB.drawState = zB, IB.instancing = nB, IB.program = jB.program, IB.instance = jB.material, IB.indexData = dB, IB.unIndexed = QB.isUnIndexed, IB.indexBuffer = jB.indexBuffer, IB.gpuVersion = this.resources.gpuBuffersVersion) : jB.inputs.retained = {
          drawState: zB,
          instancing: nB,
          program: jB.program,
          instance: jB.material,
          indexData: dB,
          unIndexed: QB.isUnIndexed,
          indexBuffer: jB.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(BB, jB, zB, QB) {
        const nB = jB.owner,
          dB = Vd(jB);
        if (!dB) return null;
        const IB = dB.getClassName();
        let NB = null;
        if (function(BB) {
            return "LinesMesh" === BB.getClassName()
          }(nB)) {
          if (! function(BB) {
              return "ShaderMaterial" === BB.getClassName() && "color" === BB.shaderPath
            }(dB)) return this.warnOnce(`lines:${IB}`, `A LinesMesh with a ${IB} is not drawn yet (${dB.name})`), null;
          NB = nB
        } else if ("StandardMaterial" !== IB && "LiteMaterial" !== IB) return this.warnOnce(`class:${IB}`, `${IB} is not drawn yet (${dB.name})`), null;
        const uB = Nd(nB),
          UB = this.instanceCount(nB, uB);
        if (UB <= 0) return null;
        const aB = NB ? this.lineProgramFor(nB, zB, uB) : this.drawDefines.programFor(BB, jB, dB, zB, uB);
        if (!aB || aB.failed) return null;
        const pB = NB ? null : this.drawDefines.drawStates.get(jB).model,
          rB = pB ? this.modelInstance(pB, aB) : this.materialInstance(nB, aB);
        let sB = !1;
        if (rB.frame !== this.frame && (NB ? GB(rB.ubo, NB) : sB = this.modelUniforms.refreshModelUniforms(BB, rB, rB.model, this.view)), !this.bindMaterial(rB, sB)) return null;
        const JB = this.meshInputs(jB, aB, uB);
        if (!JB || !this.instanceBuffersFit(nB.name, JB, UB)) return null;
        const mB = this.indexKey(jB);
        let yB = null;
        if (mB && !nB.isUnIndexed && (yB = this.resources.gpuBuffer(mB), !yB)) return null;
        const kB = this.renderStates.renderState(null !== pB && void 0 !== pB ? pB : dB, nB, QB, JB.state, NB ? "line-list" : "triangle-list"),
          LB = this.makeDraw(aB, JB, kB, rB, UB);
        return this.setRange(LB, jB, yB, mB), LB
      }
      indexKey(BB) {
        const jB = rd(BB);
        return jB ? this.resources.modelIndex(jB) : null
      }
      setRange(BB, jB, zB, QB) {
        zB && (BB.indexBuffer = zB, BB.indexFormat = this.resources.indexFormat(QB));
        const nB = 4 * jB.range + (zB ? 0 : 2);
        BB.unit = jB, BB.first = jB.parts.gy[nB], BB.count = jB.parts.gy[nB + 1]
      }
      makeDraw(BB, jB, zB, QB, nB) {
        jB.state !== zB && (jB.state = zB, jB.pipelineKey = `${BB.id}|${jB.layout.key}|${zB.key}`, jB.pipeline = null);
        const dB = jB.draw ??= {
          program: BB,
          inputs: jB,
          pipelineKey: "",
          layout: jB.layout,
          state: zB,
          material: QB,
          slotOffset: 0,
          vertexBuffers: jB.buffers,
          vertexOffsets: jB.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: nB,
          unit: null
        };
        return dB.program = BB, dB.pipelineKey = jB.pipelineKey, dB.state = zB, dB.material = QB, dB.vertexOffsets = jB.offsets, dB.indexBuffer = null, dB.instances = nB, dB
      }
      instanceCount(BB, jB) {
        switch (jB) {
          case "thin":
            return BB.forcedInstanceCount || BB.F_;
          case "instanced":
            return this.prepareInstances(BB);
          case "none":
            return 1
        }
      }
      prepareInstances(BB) {
        const jB = function(BB, jB) {
          const zB = jB._userInstancedBuffersStorage,
            QB = BB.batchUploads.get(jB);
          if (QB) {
            var nB;
            if (QB.layout === (null !== (nB = null === zB || void 0 === zB ? void 0 : zB.interleavedKinds) && void 0 !== nB ? nB : null)) return QB;
            QB.release()
          }
          return new sj(BB, jB, zB)
        }(this.resources, BB);
        return jB.frame !== this.frame && jB.pack(BB, this.modelMeshes.instanceBatch(BB), this.modelMeshes.worlds, this.frame), jB.count
      }
      programWithModel(BB, jB, zB) {
        const QB = this.modelSlot(BB),
          nB = md(QB, BB, zB),
          dB = this.drawDefines.modelPackKind(BB),
          IB = dB ? function(BB, jB, zB, QB) {
            const nB = (0, iB.w)(BB, MB.h.name),
              dB = [];
            for (const {
                feature: uB,
                state: UB,
                active: aB
              }
              of BB.features) {
              var IB, NB;
              const BB = aB ? null === (IB = (NB = (0, Yj.g)(uB)).mJ) || void 0 === IB ? void 0 : IB.call(NB, UB) : void 0;
              BB && dB.push(BB)
            }
            return {
              kind: jB,
              atlas: null !== nB && void 0 !== nB && nB.active ? (0, MB.c)(nB.state) : null,
              defines: zB,
              ...yI(dB, QB)
            }
          }(BB, dB, jB, QB.fragmentCode) : null;
        if (IB && function(BB) {
            const jB = BB.defines;
            return (null === BB.atlas || !!jB.DIFFUSE && 1 === jB.DIFFUSEDIRECTUV) && !!jB.NORMAL && !jB.REFLECTION && !jB.EMISSIVEASILLUMINATION && !jB.LINKEMISSIVEWITHDIFFUSE
          }(IB)) {
          const zB = this.modelPackProgram(BB, jB, `${nB}#${dB}#sp${this.drawDefines.modelPackVariant}`, QB, IB);
          if (zB && !zB.failed) return zB
        }
        const NB = this.programs.get(nB);
        if (NB || this.unbuildable.has(nB)) return null !== NB && void 0 !== NB ? NB : null;
        let uB;
        try {
          uB = Fn({
            defines: Ud(jB),
            vertexCode: QB.vertexCode,
            fragmentCode: QB.fragmentCode,
            pluginUniforms: QB.pluginUniforms
          })
        } catch (UB) {
          return this.unbuildable.add(nB), this.warnOnce(`build:${nB}`, `could not build a program for ${BB.name}: ${String(UB)}`), null
        }
        return this.createProgram(nB, uB, "standard")
      }
      modelPackProgram(BB, jB, zB, QB, nB) {
        const dB = this.programs.get(zB);
        if (dB || this.unbuildable.has(zB)) return null !== dB && void 0 !== dB ? dB : null;
        const IB = this.drawDefines.modelPackVariant;
        let NB;
        try {
          const BB = function(BB) {
              return (0, vj.e)(BB, "model")
            }(IB),
            zB = HI(BB, nB, QB.vertexCode, QB.fragmentCode);
          NB = VI(Fn({
            defines: Ud(jB),
            ...zB,
            pluginUniforms: QB.pluginUniforms
          }), BB, nB, !!this.sunShadow)
        } catch (aB) {
          return this.unbuildable.add(zB), this.warnOnce(`build:${zB}`, `could not build a shader pack program for ${BB.name}, which draws without the pack: ${String(aB)}`), null
        }
        const uB = vd(IB, !!this.sunShadow),
          UB = {
            group: this.packInputs.bindGroupFor(null, uB),
            layout: cd(this.device, {
              depth: !1,
              sunShadow: uB
            })
          };
        return this.createProgram(zB, NB, function(BB) {
          return `standard-sp${BB}`
        }(IB), UB)
      }
      lineProgramFor(BB, jB, zB) {
        const QB = kB(BB, zB, jB, this.view);
        let nB = this.linePrograms.get(QB);
        var dB;
        return nB || (nB = this.createProgram(`lines#${QB}`, (dB = function(BB) {
          const jB = new Map;
          for (let zB = 0; zB < UB.length; zB++) BB & 1 << zB && jB.set(UB[zB], !0);
          return jB
        }(QB), Xn({
          defines: dB,
          vertex: Vn,
          fragment: hn,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(QB, nB)), nB
      }
      createProgram(BB, jB, zB) {
        var QB;
        let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const dB = this.nextProgramId++,
          IB = `${zB}-${dB}`,
          NB = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          uB = [{
            binding: 0,
            visibility: NB,
            buffer: {
              type: "uniform"
            }
          }];
        for (const pB of jB.textures) uB.push({
          binding: pB.binding,
          visibility: NB,
          texture: {
            viewDimension: pB.dimension
          }
        }), uB.push({
          binding: pB.samplerBinding,
          visibility: NB,
          sampler: {}
        });
        const UB = this.device.createBindGroupLayout({
            label: IB,
            entries: uB
          }),
          aB = {
            key: BB,
            id: dB,
            kind: zB,
            program: jB,
            vertex: this.device.createShaderModule({
              label: `${IB}-vertex`,
              code: jB.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${IB}-fragment`,
              code: jB.fragment
            }),
            materialLayout: UB,
            pipelineLayout: this.device.createPipelineLayout({
              label: IB,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, UB, ...nB ? [nB.layout] : []]
            }),
            packGroup: null !== (QB = null === nB || void 0 === nB ? void 0 : nB.group) && void 0 !== QB ? QB : null,
            failed: !1
          };
        return this.programs.set(BB, aB), aB
      }
      writeFrameUniforms() {
        const BB = this.frameUniforms;
        Sd(this.view, BB), this.device.queue.writeBuffer(this.frameBuffer, 0, BB)
      }
      materialInstance(BB, jB) {
        let zB = this.materials.get(BB);
        if (!zB) {
          const jB = new Map;
          this.materials.set(BB, jB);
          const {
            resources: QB,
            materials: nB
          } = this;
          BB.pY.addOnce((() => {
            for (const BB of jB.values()) BB.released = !0, QB.destroyBuffer(BB.buffer);
            nB.delete(BB)
          })), zB = jB
        }
        let QB = zB.get(jB.key);
        return QB || (QB = this.newMaterialInstance(BB, null, jB), zB.set(jB.key, QB)), QB
      }
      modelInstance(BB, jB) {
        const zB = this.modelSlot(BB);
        let QB = zB.instances.get(jB.key);
        return QB || (QB = this.newMaterialInstance(BB, BB, jB), zB.instances.set(jB.key, QB)), QB
      }
      modelSlot(BB) {
        var jB;
        let zB = BB.gpu[fB.g.lite];
        return (null === (jB = zB) || void 0 === jB ? void 0 : jB.epoch) !== this.resources.epoch && (zB = new XI(this.resources, this.resources.epoch), BB.gpu[fB.g.lite] = zB), zB
      }
      newMaterialInstance(BB, jB, zB) {
        const QB = zB.program.material.floats,
          nB = new Float32Array(QB),
          dB = new Map;
        return {
          owner: BB,
          model: jB,
          program: zB,
          data: nB,
          uploaded: new Float32Array(QB).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${BB.name}-uniforms`,
            size: Math.max(16, 4 * QB),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: dB,
          ubo: new td(zB.program.material.slots, nB, dB),
          bindGroup: null,
          bound: new Array(2 * zB.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(BB) {
        var jB;
        const zB = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Wn + en,
            fragment: Wn + wn,
            attributes: [],
            material: Pn,
            textures: []
          }, "earthSky"),
          QB = this.earthSkyUniforms ??= this.newMaterialInstance(hI, null, zB);
        this.earthSkyFrom !== BB && (this.earthSkyFrom = BB, QB.data.fill(0)), On(QB.ubo, BB, this.view);
        const nB = this.vertexInputs(zB, hI, "earthSky", zB, null);
        if (zB.failed || !nB || !this.bindMaterial(QB, !1)) return;
        const dB = null !== (jB = nB.state) && void 0 !== jB ? jB : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          IB = this.makeDraw(zB, nB, dB, QB, 1);
        IB.count = Zn.length;
        const NB = Bd(BB, this.view);
        IB.slotOffset = this.writeMeshSlot(NB, 1), this.lists.skyDraws.push(IB)
      }
      uploadIfChanged(BB) {
        const {
          data: jB,
          uploaded: zB
        } = BB;
        for (let QB = 0; QB < jB.length; QB++)
          if (jB[QB] !== zB[QB]) return zB.set(jB), void this.device.queue.writeBuffer(BB.buffer, 0, jB)
      }
      bindMaterial(BB, jB) {
        return BB.frame !== this.frame && (BB.frame = this.frame, jB || this.uploadIfChanged(BB), BB.bindable = this.bindTextures(BB)), BB.bindable
      }
      bindTextures(BB) {
        const {
          program: jB,
          bound: zB
        } = BB, QB = jB.program.textures;
        let nB = !BB.bindGroup,
          dB = !0;
        for (let IB = 0; IB < QB.length; IB++) {
          const jB = BB.textures.get(QB[IB].name),
            NB = jB ? this.resources.boundTexture(jB) : null;
          NB ? zB[2 * IB] === NB.view && zB[2 * IB + 1] === NB.sampler || (zB[2 * IB] = NB.view, zB[2 * IB + 1] = NB.sampler, nB = !0) : (jB || BB.ubo.expected.has(QB[IB].name) || this.warnOnce(`texture:${BB.owner.name}:${QB[IB].name}`, `${BB.owner.name} has no ${QB[IB].name}`), dB = !1)
        }
        if (!dB) return nB && (BB.bindGroup = null), !1;
        if (nB) {
          const nB = [{
            binding: 0,
            resource: {
              buffer: BB.buffer
            }
          }];
          for (let BB = 0; BB < QB.length; BB++) nB.push({
            binding: QB[BB].binding,
            resource: zB[2 * BB]
          }), nB.push({
            binding: QB[BB].samplerBinding,
            resource: zB[2 * BB + 1]
          });
          BB.bindGroup = this.device.createBindGroup({
            label: `${BB.owner.name}-material`,
            layout: jB.materialLayout,
            entries: nB
          })
        }
        return !0
      }
      writeMeshSlot(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, BB, jB, zB), this.slotCount++ * Un
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(BB, jB, zB, QB, nB) {
        let dB = this.inputs.get(BB);
        if (!dB || dB.program !== QB || !Hd(jB, dB, this.resources, nB)) {
          var IB;
          if (dB = null !== (IB = this.vertexLayouts.resolveInputs(jB, zB, QB, nB)) && void 0 !== IB ? IB : void 0, !dB) return null;
          this.inputs.set(BB, dB)
        }
        return this.withGpuBuffers(dB)
      }
      meshInputs(BB, jB, zB) {
        const QB = this.inputs.get(BB);
        if (QB && this.inputsStamped(QB, BB, zB, jB)) return this.withGpuBuffers(QB);
        const nB = BB.owner,
          dB = rd(BB),
          IB = this.vertexInputs(BB, nB, nB.name, jB, dB);
        return IB && (IB.geometry = sd(BB), IB.instanceLayout = this.drawDefines.instanceLayout(nB, zB)), IB
      }
      inputsStamped(BB, jB, zB, QB) {
        return function(BB, jB, zB, QB) {
          return BB.program === zB && BB.geometry === sd(jB) && BB.instanceLayout === QB
        }(BB, jB, QB, this.drawDefines.instanceLayout(jB.owner, zB))
      }
      withGpuBuffers(BB) {
        return BI(BB, this.resources, this.zeroBuffer) ? BB : null
      }
      instanceBuffersFit(BB, jB, zB) {
        const QB = zI(jB, zB, this.resources, this.zeroBuffer);
        if (QB) {
          const nB = jB.ends[QB.index] - jB.offsets[QB.index] + jB.q_[QB.index];
          return this.warnOnce(`overrun:${BB}`, `${BB} draws ${zB} instances from a ${nB}-byte buffer (${QB.needed} needed)`), !1
        }
        return !0
      }
      createBinding(BB, jB, zB, QB) {
        const nB = `${jB._colorFormat}|${jB._depthStencilFormat}|${jB._depthCompare}|${jB._sampleCount}`,
          dB = oj(this.device, jB);
        if (BB === this.skyLastRenderable) {
          let zB = null;
          return {
            renderable: BB,
            pipeline: dB,
            draw: BB => zB ? this.drawSky(BB, jB, nB, zB) : 0,
            update: BB => {
              zB = BB
            }
          }
        }
        return {
          renderable: BB,
          pipeline: dB,
          draw: BB => (QB ? QB.execute(BB, jB, nB) : 0) + this.drawList(BB, jB, nB, zB)
        }
      }
      drawSky(BB, jB, zB, QB) {
        const nB = this.lists.skyDraws,
          dB = nB.length > 0;
        if (dB) {
          var IB;
          const zB = (null !== (IB = jB._depthCompare) && void 0 !== IB ? IB : Ej).startsWith("greater") ? 0 : 1;
          BB.setViewport(0, 0, QB.targetWidth, QB.targetHeight, zB, zB)
        }
        const NB = this.drawList(BB, jB, zB, nB);
        return dB && BB.setViewport(0, 0, QB.targetWidth, QB.targetHeight, 0, 1), NB
      }
      drawList(BB, jB, zB, QB) {
        let nB = 0;
        const dB = this.binder;
        dB.reset();
        for (const IB of QB) {
          const QB = this.pipelineFor(IB, jB, zB);
          QB && (dB.bind(BB, IB, QB, this.meshSlots.bindGroup, IB.slotOffset), IB.indexBuffer ? BB.drawIndexed(IB.count, IB.instances, IB.first, 0, 0) : BB.draw(IB.count, IB.instances, IB.first, 0), nB++)
        }
        return nB
      }
      pipelineFor(BB, jB, zB) {
        var QB, nB;
        if (BB.program.failed) return null;
        const dB = BB.inputs;
        if (dB.pipeline && dB.pipelineTarget === zB) return dB.pipeline;
        const IB = `${BB.pipelineKey}|${zB}`,
          NB = this.pipelines.get(IB);
        if (void 0 !== NB) return NB && (dB.pipeline = NB, dB.pipelineTarget = zB), NB || null;
        this.pipelines.set(IB, null);
        const {
          program: uB,
          layout: UB,
          state: aB
        } = BB, pB = {
          label: `standard-${uB.id}`,
          layout: uB.pipelineLayout,
          vertex: {
            module: uB.vertex,
            entryPoint: "main",
            buffers: UB.buffers
          },
          fragment: Gj({
            module: uB.fragment,
            entryPoint: "main"
          }, jB, aB.blend, aB.colourWrite),
          depthStencil: jB._depthStencilFormat ? {
            format: jB._depthStencilFormat,
            depthCompare: null !== (QB = null !== (nB = aB.depthCompare) && void 0 !== nB ? nB : jB._depthCompare) && void 0 !== QB ? QB : Ej,
            depthWriteEnabled: aB.depthWrite,
            depthBias: aB.depthBias,
            depthBiasSlopeScale: aB.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: jB._sampleCount
          },
          primitive: {
            topology: aB.topology,
            frontFace: aB.frontFace,
            cullMode: aB.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(pB).then((BB => {
          this.compiling--, this.pipelines.set(IB, BB)
        }), (BB => {
          this.compiling--, this.reportFailure(uB, IB, BB)
        })), null
      }
      forEachSunShadowCaster(BB) {
        const jB = this.caster,
          zB = (zB, QB, nB) => {
            const dB = zB.unit && function(BB) {
              const jB = BB.material.model;
              return null !== jB && (jB.lifeform || jB.item) && jB.castsSunShadow && "triangle-list" === BB.state.topology
            }(zB) ? rd(zB.unit) : null;
            if (!dB) return;
            const IB = zB.unit.owner;
            switch (jB.geometry = dB, jB.skip = IB.noSunShadowVertices, jB.indexed = null !== zB.indexBuffer, jB.first = zB.first, jB.count = zB.count, jB.zr = QB, jB.worldAt = nB, jB.instances = null, jB.instanceCount = 1, jB.thin = !1, Nd(IB)) {
              case "thin": {
                const BB = IB._thinInstanceDataStorage.matrixData;
                if (!BB) return;
                jB.instances = BB, jB.instanceCount = Math.min(zB.instances, BB.length / 16), jB.thin = !0;
                break
              }
              case "instanced": {
                const BB = this.resources.batchUploads.get(IB);
                if (!BB || BB.frame !== this.frame || !this.writeBatchCasters(BB)) return;
                break
              }
            }
            BB(jB)
          };
        for (const QB of this.lists.opaqueDraws) zB(QB, this.meshSlots.data, QB.slotOffset / 4);
        this.thinBundle.forEachDrawn(zB)
      }
      writeBatchCasters(BB) {
        const {
          caster: jB
        } = this, zB = BB.packedMatrices, QB = BB.count;
        jB.instances = zB, jB.instanceCount = QB;
        let nB = -1;
        for (let dB = 0; dB < QB; dB++) {
          const jB = TI(BB.packedRowMesh(dB));
          jB && nB < 0 ? (this.casterWorlds.length < 16 * QB && (this.casterWorlds = new Float32Array(zB.length)), this.casterWorlds.set(zB.subarray(0, 16 * dB)), nB = dB) : !jB && nB >= 0 && (this.casterWorlds.set(zB.subarray(16 * dB, 16 * dB + 16), 16 * nB), nB++)
        }
        return nB >= 0 && (jB.instances = this.casterWorlds, jB.instanceCount = nB), jB.instanceCount > 0
      }
      async reportFailure(BB, jB, zB) {
        const QB = [];
        let nB = !0;
        for (const [dB, IB] of [
            ["vertex", BB.vertex],
            ["fragment", BB.fragment]
          ]) {
          const BB = await IB.getCompilationInfo();
          for (const jB of BB.messages) nB &&= "error" !== jB.type, QB.push(`${dB}:${jB.lineNum}:${jB.linePos} ${jB.type}: ${jB.message}`)
        }
        if (nB && !BB.packGroup) return this.pipelines.set(jB, !1), console.error(`Lite: pipeline ${jB} failed`, zB), void aj(this.device, "mesh", BB.kind, zB);
        BB.failed || (BB.failed = !0, console.error(`Lite: program ${BB.id} failed`, zB, QB.join("\n"), {
          program: BB.program,
          key: BB.key
        }), aj(this.device, "mesh", BB.kind, zB, nB ? null : QB[0]))
      }
    }

    function TI(BB) {
      var jB, zB;
      const QB = null === (jB = BB.vY) || void 0 === jB || null === (zB = jB.aShaderPackItem) || void 0 === zB ? void 0 : zB.x;
      return void 0 !== QB && 0 !== (QB & Dj.i)
    }
    var PI = zB(41775),
      WI = zB(41782),
      eI = zB(41787),
      lI = zB(41731);
    const wI = [0, 3, 1, 4, 2, 5];

    function xI(BB, jB, zB, QB, nB) {
      const dB = zB[0].width;
      try {
        return nB ? function(BB, jB, zB) {
          const QB = (0, lI.d)(BB, zB, zB, 6);
          for (let nB = 0; nB < 6; nB++)(0, lI.g)(BB, QB, nB, jB[wI[nB]], {
            invertY: !1
          });
          return QB.texture
        }(BB, zB, dB) : function(BB, jB, zB, QB) {
          const nB = BB.createTexture({
            label: "sink-cube",
            size: {
              width: zB,
              height: zB,
              depthOrArrayLayers: 6
            },
            format: QB,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let dB = 0; dB < 6; dB++) BB.queue.copyExternalImageToTexture({
            source: jB[wI[dB]]
          }, {
            texture: nB,
            origin: {
              x: 0,
              y: 0,
              z: dB
            }
          }, {
            width: zB,
            height: zB
          });
          return nB
        }(jB, zB, dB, 1 === QB ? "r8unorm" : "rgba8unorm")
      } finally {
        KI(zB)
      }
    }

    function KI(BB) {
      for (const jB of null !== BB && void 0 !== BB ? BB : []) null === jB || void 0 === jB || jB.close()
    }
    async function CI(BB) {
      const jB = [],
        zB = [];
      if (await Promise.all(BB.map(((BB, QB) => (jB[QB] = null, BB.then((BB => {
          jB[QB] = BB
        }), (BB => {
          zB.push(BB)
        })))))), zB.length > 0) throw KI(jB), zB[0];
      return jB
    }
    class cI {
      constructor(BB) {
        this.Ep = BB, this.starts = [], this.lengths = [], this.used = 0, BB > 0 && (this.starts.push(0), this.lengths.push(BB))
      }
      allocate(BB) {
        const {
          starts: jB,
          lengths: zB
        } = this;
        for (let QB = 0; QB < jB.length; QB++) {
          if (zB[QB] < BB) continue;
          const nB = jB[QB];
          return zB[QB] === BB ? (jB.splice(QB, 1), zB.splice(QB, 1)) : (jB[QB] += BB, zB[QB] -= BB), this.used += BB, nB
        }
        return -1
      }
      free(BB, jB) {
        this.used -= jB;
        const zB = Math.min(BB + jB, this.Ep);
        zB > BB && this.release(BB, zB - BB)
      }
      grow(BB) {
        const jB = this.Ep;
        this.Ep = BB, this.release(jB, BB - jB)
      }
      truncate(BB) {
        const {
          starts: jB,
          lengths: zB
        } = this;
        for (let QB = jB.length - 1; QB >= 0 && jB[QB] + zB[QB] > BB; QB--) jB[QB] >= BB ? (jB.splice(QB, 1), zB.splice(QB, 1)) : zB[QB] = BB - jB[QB];
        this.Ep = BB
      }
      release(BB, jB) {
        const {
          starts: zB,
          lengths: QB
        } = this;
        let nB = 0,
          dB = zB.length;
        for (; nB < dB;) {
          const jB = nB + dB >> 1;
          zB[jB] < BB ? nB = jB + 1 : dB = jB
        }
        const IB = nB,
          NB = IB > 0 && zB[IB - 1] + QB[IB - 1] === BB,
          uB = IB < zB.length && BB + jB === zB[IB];
        NB && uB ? (QB[IB - 1] += jB + QB[IB], zB.splice(IB, 1), QB.splice(IB, 1)) : NB ? QB[IB - 1] += jB : uB ? (zB[IB] = BB, QB[IB] += jB) : (zB.splice(IB, 0, BB), QB.splice(IB, 0, jB))
      }
    }
    const bI = 256;
    class vI {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = BB, this.onReplaced = jB, this.mergeGap = zB, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.gy = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const nB = Math.max(bI, Math.ceil(QB / bI) * bI);
        this.bytes = new Uint8Array(nB), this.words = new Uint32Array(this.bytes.buffer), this.gy = new cI(nB / bI)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(BB) {
        return Math.max(1, Math.ceil(BB / bI)) * bI
      }
      allocate(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB;
        const QB = vI.slotBytes(BB),
          nB = QB / bI;
        let dB = this.gy.allocate(nB);
        dB < 0 && (this.grow(this.gy.Ep + nB), dB = this.gy.allocate(nB));
        const IB = dB * bI;
        return this.growTo(IB + Math.max(zB, QB)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, IB, IB + QB), jB && this.bytes.set(new Uint8Array(jB.buffer, jB.byteOffset, Math.min(jB.byteLength, QB)), IB), this.markDirty(IB, IB + QB), IB
      }
      growTo(BB) {
        const jB = Math.ceil(BB / bI);
        jB > this.gy.Ep && this.grow(jB)
      }
      free(BB, jB) {
        this.freed.push(BB, jB)
      }
      write(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (QB <= 0) return;
        QB <= 1024 && 0 === (3 & (BB | zB | QB)) ? this.copyWords(BB >> 2, jB.buffer, zB >> 2, QB >> 2) : this.bytes.set(new Uint8Array(jB.buffer, zB, QB), BB);
        let dB = BB + QB;
        if (nB) {
          const jB = BB + 4 * Math.ceil(QB / 4);
          this.bytes.fill(0, dB, jB), dB = jB
        }
        this.markDirty(BB, dB)
      }
      copyWords(BB, jB, zB, QB) {
        let nB = this.sourceWords.get(jB);
        nB || (nB = new Uint32Array(jB, 0, jB.byteLength >> 2), this.sourceWords.set(jB, nB));
        const dB = this.words;
        for (let IB = 0; IB < QB; IB++) dB[BB + IB] = nB[zB + IB]
      }
      move(BB, jB, zB) {
        this.bytes.copyWithin(jB, BB, BB + zB), this.markDirty(jB, jB + zB)
      }
      flush() {
        for (const jB of this.retired) this.onReplaced(jB), jB.destroy();
        this.retired.length = 0;
        const BB = this.dirtyStarts.length;
        if (BB > 0) {
          const {
            dirtyStarts: jB,
            dirtyEnds: zB,
            order: QB
          } = this;
          QB.length = BB;
          for (let NB = 0; NB < BB; NB++) QB[NB] = NB;
          BB > 1 && QB.sort(((BB, zB) => jB[BB] - jB[zB]));
          const nB = this.mergeGap;
          let dB = jB[QB[0]],
            IB = zB[QB[0]];
          for (let NB = 1; NB < BB; NB++) {
            const BB = QB[NB];
            jB[BB] - IB <= nB ? IB = Math.max(IB, zB[BB]) : (this.send(dB, IB), dB = jB[BB], IB = zB[BB])
          }
          this.send(dB, IB), jB.length = 0, zB.length = 0
        }
        this.holding = !1
      }
      tL() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const BB = this.freed;
        for (let jB = 0; jB < BB.length; jB += 2) this.gy.free(BB[jB] / bI, BB[jB + 1] / bI);
        BB.length = 0
      }
      send(BB, jB) {
        this.device.queue.writeBuffer(this.gpu, BB, this.bytes.buffer, BB, jB - BB);
        for (const zB of this.replaced) {
          const QB = Math.min(jB, zB.size);
          QB > BB && this.device.queue.writeBuffer(zB, BB, this.bytes.buffer, BB, QB - BB)
        }
      }
      markDirty(BB, jB) {
        BB &= -4, jB = jB + 3 & -4, this.holding ? (this.dirtyStarts.push(BB), this.dirtyEnds.push(jB)) : this.send(BB, jB)
      }
      grow(BB) {
        const jB = this.gy.Ep,
          zB = Math.max(2 * jB, BB),
          QB = new Uint8Array(zB * bI);
        QB.set(this.bytes);
        const nB = this.gpu;
        this.gpu = this.createGpu(QB.byteLength), this.bytes = QB, this.words = new Uint32Array(QB.buffer), this.gy.grow(zB), nB && (this.replaced.push(nB), this.onReplaced(nB)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, jB * bI)
      }
      createGpu(BB) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: BB,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function RI(BB) {
      return Array.isArray(BB) ? new Float32Array(BB) : BB
    }

    function OI(BB, jB, zB, QB, nB) {
      const dB = KB(nB),
        IB = Math.min(nB, QB.byteLength);
      if (dB === IB && QB.byteOffset % 4 === 0) return void BB.queue.writeBuffer(jB, zB, QB.buffer, QB.byteOffset, dB);
      const NB = new Uint8Array(dB);
      NB.set(new Uint8Array(QB.buffer, QB.byteOffset, IB)), BB.queue.writeBuffer(jB, zB, NB)
    }

    function BN(BB, jB, zB) {
      const QB = "linear",
        nB = "nearest";
      let dB = nB,
        IB = nB,
        NB = "nearest",
        uB = !jB;
      switch (BB) {
        case 11:
          dB = QB, IB = QB;
          break;
        case 3:
          dB = QB, IB = QB, NB = jB ? "linear" : "nearest";
          break;
        case 8:
          NB = jB ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          IB = QB;
          break;
        case 6:
          IB = QB, NB = jB ? "linear" : "nearest";
          break;
        case 7:
          IB = QB, uB = !0;
          break;
        case 9:
          dB = QB;
          break;
        case 10:
          dB = QB, NB = jB ? "linear" : "nearest";
          break;
        case 2:
          dB = QB, IB = QB, zB > 1 ? (NB = "linear", uB = !1) : uB = !0;
          break;
        case 12:
          dB = QB, uB = !0;
          break;
        default:
          uB = !0
      }
      return zB > 1 && !uB ? {
        magFilter: QB,
        minFilter: QB,
        mipmapFilter: "linear",
        maxAnisotropy: zB
      } : {
        magFilter: dB,
        minFilter: IB,
        mipmapFilter: NB,
        ...uB ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function jN(BB) {
      return 0 === BB ? "clamp-to-edge" : 2 === BB ? "mirror-repeat" : "repeat"
    }
    class zN {
      constructor(BB, jB) {
        let {
          vertexArena: zB = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = BB, this.device = jB, this.buffers = new WeakMap, this.U1 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = zB ? this.createArena() : null
      }
      createArena() {
        return new vI(this.device, (BB => {
          var jB;
          null === (jB = this.onDestroy) || void 0 === jB || jB.call(this, BB), this.gpuBuffersVersion++
        }))
      }
      rebind(BB, jB) {
        this.engine = BB, this.device = jB, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const zB of this.liveUploads) zB.rebind();
        for (const zB of this.rebindWaiters.splice(0)) zB()
      }
      flushUploads() {
        var BB;
        null === (BB = this.arena) || void 0 === BB || BB.flush()
      }
      endUploadFrame() {
        var BB;
        null === (BB = this.arena) || void 0 === BB || BB.tL()
      }
      vertexBufferCreated(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zB ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(BB);
        const nB = RI(jB);
        BB.Ep = nB.byteLength, this.buffers.set(BB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: zB && null !== this.arena,
          pending: nB,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: QB
        })
      }
      vertexBufferUpdated(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        const nB = this.buffers.get(BB);
        if (!nB) return;
        const dB = RI(jB),
          IB = void 0 === QB ? dB.byteLength : Math.min(QB, dB.byteLength);
        this.update(nB, dB, zB, IB)
      }
      vertexBufferFloatsUpdated(BB, jB, zB, QB) {
        const nB = this.buffers.get(BB);
        if (!nB) return;
        const dB = zB * Float32Array.BYTES_PER_ELEMENT,
          IB = (QB - zB) * Float32Array.BYTES_PER_ELEMENT;
        nB.slot >= 0 && IB > 0 && dB + IB <= nB.size ? this.writeSlot(nB, dB, jB, jB.byteOffset + dB, IB, !1) : nB.gpu && IB > 0 && dB + IB <= nB.gpu.size ? this.device.queue.writeBuffer(nB.gpu, dB, jB.buffer, jB.byteOffset + dB, IB) : this.update(nB, jB.subarray(zB, QB), dB, IB)
      }
      indexBufferCreated(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(BB);
        const QB = function(BB) {
          if (BB instanceof Uint16Array || BB instanceof Uint32Array) return BB;
          for (let jB = 0; jB < BB.length; jB++)
            if (BB[jB] >= 65535) return new Uint32Array(BB);
          return new Uint16Array(BB)
        }(jB);
        BB.is32Bits = 4 === QB.BYTES_PER_ELEMENT, BB.Ep = QB.byteLength, this.buffers.set(BB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: QB,
          ownsPending: QB !== jB,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: zB
        })
      }
      bufferDeleted(BB) {
        const jB = this.buffers.get(BB);
        null !== jB && void 0 !== jB && jB.gpu ? (this.destroyBuffer(jB.gpu), this.gpuBuffersVersion++) : jB && jB.slot >= 0 && (this.arena.free(jB.slot, jB.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(BB)
      }
      update(BB, jB, zB, QB) {
        if (BB.slot >= 0) this.updateSlot(BB, jB, zB, QB);
        else if (BB.gpu) {
          if (zB + KB(QB) > BB.gpu.size) {
            const jB = this.device.createBuffer({
                label: BB.label,
                size: KB(Math.max(2 * BB.gpu.size, zB + QB)),
                usage: BB.usage | GPUBufferUsage.COPY_SRC
              }),
              nB = this.device.createCommandEncoder();
            nB.copyBufferToBuffer(BB.gpu, 0, jB, 0, BB.gpu.size), this.device.queue.submit([nB.finish()]), this.destroyBuffer(BB.gpu), this.gpuBuffersVersion++, BB.gpu = jB
          }
          OI(this.device, BB.gpu, zB, jB, QB)
        } else {
          const dB = new Uint8Array(jB.buffer, jB.byteOffset, QB),
            IB = BB.pending;
          if (IB && BB.ownsPending && zB + QB <= IB.byteLength) new Uint8Array(IB.buffer, IB.byteOffset, IB.byteLength).set(dB, zB);
          else if (IB && 0 === zB && QB === IB.byteLength && jB.byteLength === QB) BB.pending = jB, BB.ownsPending = !1;
          else {
            var nB;
            const jB = new Uint8Array(Math.max(null !== (nB = null === IB || void 0 === IB ? void 0 : IB.byteLength) && void 0 !== nB ? nB : 0, zB + QB));
            IB && jB.set(new Uint8Array(IB.buffer, IB.byteOffset, IB.byteLength)), jB.set(dB, zB), BB.pending = jB, BB.ownsPending = !0
          }
        }
      }
      updateSlot(BB, jB, zB, QB) {
        const nB = this.arena;
        zB + KB(QB) > BB.size && (BB.size = KB(Math.max(2 * BB.size, zB + QB)), nB.growTo(BB.slot + BB.size), this.gpuBuffersVersion++), 0 === QB ? this.writeSlot(BB, zB, nN, 0, 4, !1) : this.writeSlot(BB, zB, jB, jB.byteOffset, QB, !0)
      }
      writeSlot(BB, jB, zB, QB, nB, dB) {
        const IB = jB + (dB ? KB(nB) : nB);
        IB > BB.slotBytes && this.moveSlot(BB, IB), this.arena.write(BB.slot + jB, zB, QB, nB, dB)
      }
      moveSlot(BB, jB) {
        const zB = this.arena,
          QB = vI.slotBytes(Math.max(jB, Math.min(2 * BB.slotBytes, BB.size))),
          nB = zB.allocate(QB, null, BB.size);
        zB.move(BB.slot, nB, BB.slotBytes), zB.free(BB.slot, BB.slotBytes), BB.slot = nB, BB.slotBytes = QB, this.gpuBuffersVersion++
      }
      cover(BB, jB) {
        const zB = this.buffers.get(BB);
        if (!zB || zB.slot < 0) return !1;
        const QB = Math.min(jB, zB.size);
        return !(QB <= zB.slotBytes) && (this.moveSlot(zB, QB), !0)
      }
      destroyBuffer(BB) {
        var jB;
        null === (jB = this.onDestroy) || void 0 === jB || jB.call(this, BB), BB.destroy()
      }
      gpuBuffer(BB) {
        const jB = this.buffers.get(BB);
        if (!jB) return null;
        if (jB.slot >= 0) return this.arena.buffer;
        if (jB.arena && jB.pending) {
          const BB = jB.pending,
            zB = this.arena;
          return jB.size = KB(BB.byteLength), jB.slotBytes = vI.slotBytes(function(BB) {
            const jB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength);
            let zB = jB.length;
            if (BB.byteOffset % 4 === 0) {
              for (; zB % 4 !== 0 && 0 === jB[zB - 1];) zB--;
              if (zB % 4 === 0) {
                const jB = new Uint32Array(BB.buffer, BB.byteOffset, zB / 4);
                let QB = jB.length;
                for (; QB > 0 && 0 === jB[QB - 1];) QB--;
                zB = 4 * QB
              }
            }
            for (; zB > 0 && 0 === jB[zB - 1];) zB--;
            return zB
          }(BB)), jB.slot = zB.allocate(jB.slotBytes, BB, jB.size), jB.pending = null, zB.buffer
        }
        if (!jB.gpu && jB.pending) {
          const BB = jB.pending;
          jB.gpu = this.device.createBuffer({
            label: jB.label,
            size: KB(BB.byteLength),
            usage: jB.usage
          }), OI(this.device, jB.gpu, 0, BB, BB.byteLength), jB.pending = null
        }
        return jB.gpu
      }
      gpuOffset(BB) {
        var jB, zB;
        const QB = null !== (jB = null === (zB = this.buffers.get(BB)) || void 0 === zB ? void 0 : zB.slot) && void 0 !== jB ? jB : -1;
        return QB < 0 ? 0 : QB
      }
      gpuEnd(BB) {
        var jB, zB;
        const QB = this.buffers.get(BB);
        return QB ? QB.slot >= 0 ? QB.slot + QB.size : null !== (jB = null === (zB = QB.gpu) || void 0 === zB ? void 0 : zB.size) && void 0 !== jB ? jB : 0 : 0
      }
      vertexInput(BB, jB, zB) {
        var QB, nB, dB, IB;
        return null !== (QB = null !== (nB = zB && this.modelInput(zB, jB)) && void 0 !== nB ? nB : null === (dB = null !== (IB = this.U1.get(BB)) && void 0 !== IB ? IB : this.batchUploads.get(BB)) || void 0 === dB ? void 0 : dB.inputs[jB]) && void 0 !== QB ? QB : null
      }
      modelInput(BB, jB) {
        const zB = this.geometrySlot(BB);
        let QB = zB.inputs.get(jB);
        if (void 0 === QB) {
          const nB = BB.vertexAttributes.find((BB => BB.kind === jB));
          QB = nB ? new Jj(this.modelKey(zB, nB.data, !1), nB.offset, nB.stride, nB.components, !1, nB.glType, nB.isNormalized) : null, zB.inputs.set(jB, QB)
        }
        return QB
      }
      modelIndex(BB) {
        return BB.indexData && this.modelKey(this.geometrySlot(BB), BB.indexData, !0)
      }
      geometrySlot(BB) {
        var jB;
        let zB = BB.gpu[fB.g.lite];
        if ((null === (jB = zB) || void 0 === jB ? void 0 : jB.epoch) !== this.epoch) {
          const jB = new Map,
            QB = () => {
              for (const BB of jB.values()) this.bufferDeleted(BB)
            },
            nB = BB => {
              const zB = jB.get(BB);
              zB && this.vertexBufferUpdated(zB, BB)
            };
          zB = {
            keys: jB,
            inputs: new Map,
            release: QB,
            updated: nB,
            epoch: this.epoch
          }, BB.gpu[fB.g.lite] = zB
        }
        return zB
      }
      modelKey(BB, jB, zB) {
        let QB = BB.keys.get(jB);
        if (!QB) {
          if (zB) {
            const BB = {
              Ep: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(BB, jB, "model-indices"), QB = BB
          } else QB = {
            Ep: 0
          }, this.vertexBufferCreated(QB, jB, !1, "model-vertices");
          BB.keys.set(jB, QB)
        }
        return QB
      }
      indexFormat(BB) {
        return BB.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(BB, jB) {
        --BB.refs > 0 || (this.releaseTexture(BB), KI(BB.images), null !== jB && this.textures.delete(jB))
      }
      load(BB, jB) {
        const {
          epoch: zB
        } = this, QB = jB.decoded = async function(BB) {
          if ("cube" === BB.kind) return async function(BB) {
            if (6 !== BB.length) throw new Error(`${BB.length} files where six faces were expected`);
            const jB = await CI(BB.map((BB => OB(BB)))),
              zB = jB[0].width;
            return CI(jB.map((async BB => {
              if (BB.width === zB && BB.height === zB) return BB;
              try {
                return await createImageBitmap(BB, {
                  ...vB,
                  resizeWidth: zB,
                  resizeHeight: zB
                })
              } finally {
                BB.close()
              }
            })))
          }(BB.files);
          if ("data" === BB.kind && BB.data) return [await createImageBitmap(new Blob([BB.data]), vB)];
          return [await OB(QN(BB))]
        }(BB.source).then((BB => {
          0 === jB.refs || zB !== this.epoch ? KI(BB) : jB.images = BB
        }));
        this.track(jB, QN(BB.source), QB, (() => {
          jB.wanted && !jB.failed && jB.refs > 0 && this.upload(BB, jB)
        }))
      }
      canvasUpdated(BB, jB, zB) {
        const {
          state: QB
        } = this.textureSlot(BB);
        QB.dynamicSource = {
          invertY: jB,
          premultiplied: zB
        }, QB.dynamic && this.pushDynamic(BB.source, QB)
      }
      async atlasArrays(BB) {
        const {
          device: jB,
          epoch: zB
        } = this;
        let QB;
        try {
          QB = await jj(jB, BB)
        } catch (dB) {
          if (zB === this.epoch) {
            if (!Uj(jB)) throw dB;
            await new Promise((BB => {
              this.rebindWaiters.push(BB)
            }))
          }
          return this.atlasArrays(BB)
        }
        if (QB.forEach(((jB, zB) => {
            this.atlasSources.has(jB) || this.atlasSources.set(jB, {
              sources: BB,
              index: zB,
              stride: QB[0].layers
            })
          })), zB !== this.epoch) return QB;
        const nB = (0, PI.e)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const IB of QB) this.atlasBindings.has(IB) || this.atlasBindings.set(IB, {
          view: IB.texture.createView({
            dimension: "2d-array"
          }),
          sampler: nB
        });
        return QB
      }
      boundTexture(BB) {
        const jB = this.atlasBindings.get(BB);
        if (jB) return jB;
        const zB = this.atlasSources.get(BB);
        if (zB) return this.rebuildAtlas(BB, zB), null;
        const QB = BB;
        if (QB.released) return null;
        const nB = this.textureSlot(QB, !0),
          {
            state: dB
          } = nB;
        if (!dB.view && (dB.wanted = !0, dB.loading || dB.failed || this.upload(QB, dB), !dB.view)) return null;
        const IB = this.chosenSampler(QB, nB),
          NB = nB.bound;
        return NB && NB.view === dB.view && NB.sampler === IB ? NB : (nB.bound = {
          view: dB.view,
          sampler: IB
        }, nB.bound)
      }
      rebuildAtlas(BB, jB) {
        let {
          sources: zB,
          index: QB,
          stride: nB
        } = jB;
        if (this.atlasRebuilds.has(BB)) return;
        this.atlasRebuilds.add(BB);
        const {
          epoch: dB
        } = this;
        this.atlasArrays(zB).then((jB => {
          jB[0].layers === nB && jB[QB] ? dB === this.epoch && this.atlasBindings.set(BB, this.atlasBindings.get(jB[QB])) : console.error(`Lite: the new device splits the atlas ${RB(zB.urls[0])} into other arrays than its materials read`)
        }), (BB => {
          console.error(`Lite: could not build the atlas ${RB(zB.urls[0])} again on a new device`, BB)
        }))
      }
      textureLoaded(BB) {
        var jB, zB;
        return null !== (jB = null === (zB = this.heldSlot(BB)) || void 0 === zB ? void 0 : zB.state.decoded) && void 0 !== jB ? jB : null
      }
      textureFailed(BB) {
        var jB;
        return !0 === (null === (jB = this.heldSlot(BB)) || void 0 === jB ? void 0 : jB.state.failed)
      }
      heldSlot(BB) {
        const jB = BB.gpu[fB.g.lite];
        return (null === jB || void 0 === jB ? void 0 : jB.epoch) === this.epoch ? jB : void 0
      }
      chosenSampler(BB, jB) {
        const {
          samplingMode: zB,
          wrapU: QB,
          wrapV: nB
        } = BB.sampler, dB = jB.state.hasMips, IB = function(BB, jB) {
          const {
            bilinear: zB,
            trilinear: QB
          } = fB.j;
          return !jB && BB !== zB || 11 !== BB && BB !== QB && BB !== zB ? 1 : 4
        }(zB, dB), NB = jB.sampler;
        if (NB && NB.samplingMode === zB && NB.hasMips === dB && NB.anisotropy === IB && NB.wrapU === QB && NB.wrapV === nB) return NB.sampler;
        const uB = this.samplerFor(zB, dB, IB, QB, nB);
        return jB.sampler = {
          samplingMode: zB,
          hasMips: dB,
          anisotropy: IB,
          wrapU: QB,
          wrapV: nB,
          sampler: uB
        }, uB
      }
      releaseTexture(BB) {
        var jB, zB;
        BB.view && (null === (zB = this.onDestroy) || void 0 === zB || zB.call(this, BB.view));
        null === (jB = BB.destroy) || void 0 === jB || jB.call(BB)
      }
      textureSlot(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = BB.gpu[fB.g.lite];
        if ((null === zB || void 0 === zB ? void 0 : zB.epoch) === this.epoch) return zB;
        const QB = function(BB) {
          let {
            source: jB,
            sampler: zB
          } = BB;
          return "canvas" === jB.kind ? null : `${jB.kind}|${QN(jB)}|${zB.noMipmap}|${zB.samplingMode}|${zB.invertY}`
        }(BB);
        let nB = null === QB ? void 0 : this.textures.get(QB);
        var dB;
        nB || (nB = {
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
          dynamicSource: null !== (dB = null === zB || void 0 === zB ? void 0 : zB.state.dynamicSource) && void 0 !== dB ? dB : null
        }, null !== QB && (this.textures.set(QB, nB), this.load(BB, nB), jB && !zB && this.firstBindDecodes++));
        nB.refs++;
        const IB = nB,
          {
            epoch: NB
          } = this,
          uB = {
            state: nB,
            bound: null,
            sampler: null,
            release: () => {
              NB === this.epoch && this.releaseSlot(IB, QB)
            },
            epoch: NB
          };
        return BB.gpu[fB.g.lite] = uB, uB
      }
      samplerFor(BB, jB, zB, QB, nB) {
        const dB = `${BB}|${jB}|${zB}|${QB}|${nB}`;
        let IB = this.samplers.get(dB);
        if (!IB) {
          const NB = {
            ...BN(BB, jB, zB),
            addressModeU: jN(QB),
            addressModeV: jN(nB)
          };
          IB = (0, PI.e)(this.engine, NB), this.samplers.set(dB, IB)
        }
        return IB
      }
      upload(BB, jB) {
        const {
          source: zB,
          sampler: QB
        } = BB;
        jB.hasMips = !QB.noMipmap, "canvas" === zB.kind ? this.createDynamic(zB, jB) : "cube" === zB.kind ? this.uploadCube(jB, zB.luminance) : this.uploadImage(jB, !0 === QB.invertY, zB.url)
      }
      uploadImage(BB, jB, zB) {
        const [QB] = BB.images;
        BB.images = null;
        const {
          epoch: nB
        } = this, dB = (0, WI.c)(this.engine, QB, {
          mipMaps: BB.hasMips,
          invertY: jB,
          srgb: !1
        }).then((jB => {
          QB.close(), 0 !== BB.refs && nB === this.epoch ? (BB.view = jB.view, BB.destroy = jB.texture.destroy.bind(jB.texture)) : jB.texture.destroy()
        }));
        this.track(BB, zB, dB)
      }
      track(BB, jB, zB, QB) {
        const {
          epoch: nB
        } = this;
        BB.loading = !0, this.pending++, zB.catch((zB => {
          nB === this.epoch && (BB.failed = !0, console.warn(`Lite: could not load texture ${RB(jB)}`, zB))
        })).finally((() => {
          nB === this.epoch && (BB.loading = !1, this.pending--, null === QB || void 0 === QB || QB())
        }))
      }
      uploadCube(BB, jB) {
        const zB = BB.images;
        BB.images = null;
        const QB = xI(this.engine, this.device, zB, (0, fB.C)(jB), BB.hasMips);
        BB.view = QB.createView({
          dimension: "cube"
        }), BB.destroy = () => {
          QB.destroy()
        }
      }
      createDynamic(BB, jB) {
        const {
          canvas: zB
        } = BB, QB = (0, eI.c)(this.engine, Math.max(1, zB.width), Math.max(1, zB.height), {
          mipMaps: jB.hasMips,
          srgb: !1
        });
        jB.dynamic = QB, jB.view = QB.view, jB.destroy = () => {
          QB.texture.destroy()
        }, this.pushDynamic(BB, jB)
      }
      pushDynamic(BB, jB) {
        const zB = jB.dynamicSource,
          QB = jB.dynamic,
          {
            canvas: nB
          } = BB;
        if (zB && QB && 0 !== nB.width && 0 !== nB.height) return nB.width !== QB.width || nB.height !== QB.height ? (this.releaseTexture(jB), jB.dynamic = null, jB.view = null, void this.createDynamic(BB, jB)) : void(0, eI.g)(this.engine, QB, nB, {
          invertY: zB.invertY,
          premultiplyAlpha: zB.premultiplied
        })
      }
    }

    function QN(BB) {
      return "cube" === BB.kind ? BB.rootUrl : "canvas" === BB.kind ? "canvas" : BB.url
    }
    const nN = new Uint8Array(4);
    var dN = zB(38858);

    function IN(BB) {
      const jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      BB._colorAttachment.storeOp = BB._targetSignature._sampleCount > 1 ? jB : "store";
      const zB = BB._renderPassDescriptor.depthStencilAttachment;
      zB && (zB.depthStoreOp = jB, zB.stencilStoreOp && (zB.stencilStoreOp = jB))
    }
    var NN = zB(37869),
      uN = zB(37911),
      UN = zB(37568),
      aN = zB(39672);
    const pN = new Float64Array([1, 1, 1]),
      rN = new Float64Array([0, 1, 0]),
      sN = new Float64Array(4),
      JN = new Float32Array(16),
      mN = new Float64Array(3),
      yN = new Float64Array(4);

    function kN(BB, jB, zB) {
      BB.fov = jB.fov, BB.near = jB.near, BB.far = jB.far, BB.renderWidth = zB.renderWidth, BB.renderHeight = zB.renderHeight, (0, UN.v)(jB.holderRotation, 0, sN, 0), (0, UN.e)(pN, 0, sN, 0, jB.holderPosition, 0, JN);
      const QB = jB.YC;
      mN[0] = QB[0], mN[1] = QB[1], mN[2] = QB[2] + 1;
      const nB = BB.viewMatrix;
      (0, UN.m)(QB, mN, rN, nB), (0, UN.k)(nB, 0, nB), (0, UN.q)(nB, JN, 0, nB), (0, UN.k)(nB, 0, nB);
      const dB = BB.worldMatrix;
      (0, UN.k)(nB, 0, dB), BB.eye[0] = dB[12], BB.eye[1] = dB[13], BB.eye[2] = dB[14], yN[0] = BB.fov, yN[1] = BB.renderWidth / BB.renderHeight, yN[2] = BB.near, yN[3] = BB.far, (0, UN.r)(yN, BB.projectionMatrix), (0, UN.q)(nB, BB.projectionMatrix, 0, BB.viewProjectionMatrix), (0, aN.d)(BB.viewProjectionMatrix, BB.frustum)
    }

    function GN(BB, jB) {
      let zB = BB.frustumPlanes;
      zB || (zB = BB.frustumPlanes = Array.from({
        length: 6
      }, (() => new NN.c(0, 0, 0, 0))));
      for (let QB = 0; QB < 6; QB++) {
        const BB = zB[QB].normal;
        BB._x = jB[4 * QB], BB._y = jB[4 * QB + 1], BB._z = jB[4 * QB + 2], BB._isDirty = !0, zB[QB].d = jB[4 * QB + 3]
      }
    }

    function LN(BB, jB) {
      const zB = jB.clearColor;
      BB.clearColour[0] = zB.r, BB.clearColour[1] = zB.g, BB.clearColour[2] = zB.b, BB.clearColour[3] = zB.a;
      const QB = jB.ambientColor;
      BB.ambientColour[0] = QB.r, BB.ambientColour[1] = QB.g, BB.ambientColour[2] = QB.b, BB.animationRatio = jB.animationRatio, BB.frameId = jB.frameId, BB.version++
    }

    function gN(BB) {
      const jB = BB.model.view;
      return jB.animTick = (0, uN.f)(), jB.timeMs = performance.now(), LN(jB, BB.ny), BB.model.update(jB.frameId), jB
    }

    function tN(BB) {
      const jB = BB.ny,
        {
          view: zB,
          fC: QB
        } = BB.model;
      return kN(zB, QB, jB.wJ()), jB.onBeforeRenderObservable.notifyObservers(jB), GN(jB, zB.frustum), jB.onBeforeCameraRenderObservable.notifyObservers(jB.activeCamera), gN(BB)
    }
    var SN = zB(37536),
      MN = zB(37632),
      EN = zB(37905);

    function iN(BB) {
      var jB, zB;
      const QB = (0, iB.eb)(BB);
      if (!QB || QB.diffuseTexture && (0, EN.j)(BB)) return null;
      const nB = null === (jB = (0, iB.w)(QB, MB.h.name)) || void 0 === jB ? void 0 : jB.state,
        dB = null === (zB = (0, iB.w)(QB, QI.d.name)) || void 0 === zB ? void 0 : zB.state,
        IB = new Float32Array(16);
      return function(BB, jB, zB, QB) {
        var nB, dB;
        const IB = hQ;
        QB.set(BB.diffuseColor, IB.diffuse), QB[IB.diffuse + 3] = BB.alpha, QB.set(BB.ambientColor, IB.ambientAndCutoff), QB[IB.ambientAndCutoff + 3] = BB.alphaCutOff, QB.set(BB.emissiveColor, IB.emissiveAndLevel), QB[IB.emissiveAndLevel + 3] = null !== (nB = null === (dB = BB.diffuseTexture) || void 0 === dB ? void 0 : dB.level) && void 0 !== nB ? nB : 1, null !== jB && void 0 !== jB && jB.animDataPerTex ? (QB[IB.anim + 1] = uN.b, QB[IB.anim + 2] = jB.animDataPerTex.length / 3 - 1) : zB && (QB[IB.anim + 1] = zB.numAnimStates, QB[IB.anim + 2] = zB.ticksPerAnimState)
      }(QB, nB, dB, IB), {
        model: QB,
        atlas: nB,
        texture: nB ? "atlas" : QB.diffuseTexture ? "single" : "none",
        animated: nB ? !!nB.animDataPerTex : !!dB,
        liquid: (0, EN.n)(BB),
        customRenderMat: (0, EN.j)(BB),
        uniformData: IB
      }
    }
    var qN = zB(2963);
    class fN {
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
    class oN {
      constructor(BB, jB) {
        this.arena = BB, this.gy = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.gy = new cI(jB);
        const zB = new fN(jB);
        zB.buffer = this.createBuffer(zB, !1), this.backings.push(zB), this.refresh()
      }
      get Ep() {
        return this.gy.Ep
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
        for (const jB of this.backings) BB += jB.units * (this.arena.unitBytes + (jB.twin ? this.arena.twinUnitBytes : 0));
        return BB
      }
      holds(BB) {
        return BB.start + BB.length <= this.usable
      }
      lost(BB) {
        return this.dropped || BB.start + BB.length > this.Ep
      }
      write(BB, jB) {
        const {
          device: zB,
          unitBytes: QB
        } = this.arena;
        for (const nB of this.backings) {
          const dB = (nB.units - BB.start) * QB;
          dB > 0 && zB.queue.writeBuffer(nB.buffer, BB.start * QB, jB, 0, Math.min(jB.byteLength, dB))
        }
      }
      writeLight(BB, jB) {
        const {
          device: zB,
          twinUnitBytes: QB,
          verticesPerUnit: nB
        } = this.arena, {
          light: dB,
          count: IB
        } = this.arena.twinLight(jB, Math.min(jB.length, BB.length * nB));
        for (const NB of this.backings) {
          NB.twin || (NB.twin = this.createBuffer(NB, !0));
          const jB = (NB.units - BB.start) * nB;
          jB > 0 && zB.queue.writeBuffer(NB.twin, BB.start * QB, dB, 0, Math.min(IB, jB))
        }
      }
      grow(BB) {
        this.arena.assertNotDrawing();
        const {
          device: jB,
          unitBytes: zB,
          label: QB
        } = this.arena, nB = this.backings[this.backings.length - 1], dB = new fN(BB), IB = jB.createCommandEncoder({
          label: `${QB}-grow`
        });
        dB.buffer = this.createBuffer(dB, !1), IB.copyBufferToBuffer(nB.buffer, 0, dB.buffer, 0, nB.units * zB), nB.twin && (dB.twin = this.createBuffer(dB, !0), IB.copyBufferToBuffer(nB.twin, 0, dB.twin, 0, nB.units * this.arena.twinUnitBytes)), jB.queue.submit([IB.finish()]), this.backings.push(dB), this.gy.grow(BB)
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
      createBuffer(BB, jB) {
        const {
          device: zB,
          unitBytes: QB,
          twinUnitBytes: nB,
          usage: dB,
          label: IB
        } = this.arena;
        zB.pushErrorScope("out-of-memory");
        const NB = zB.createBuffer({
          label: jB ? `${IB}-light` : IB,
          size: BB.units * (jB ? nB : QB),
          usage: (jB ? this.arena.twinUsage : dB) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, zB.popErrorScope().then((zB => {
          this.arena.awaitingVerdict--, this.settle(BB, jB, !zB, !0)
        }), (zB => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${IB} buffer, taken as failed: ${String(zB)}`), this.settle(BB, jB, !1, !1)
        })), NB
      }
      settle(BB, jB, zB, QB) {
        const nB = this.backings.indexOf(BB);
        if (!(this.dropped || nB < 0)) {
          if (!zB) {
            if (QB && this.arena.ranOutOfMemory(BB.units, BB.units * (jB ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === nB) return void this.drop();
            for (const BB of this.backings.splice(nB)) BB.destroy();
            return this.gy.truncate(this.backings[nB - 1].units), this.growable = !1, void this.promote()
          }
          jB ? BB.twinReady = !0 : (BB.bufferReady = !0, this.arena.allocatedBuffer(BB.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: BB
        } = this;
        let jB = 0;
        for (; jB + 1 < BB.length && BB[jB].ready && BB[jB + 1].ready;) jB++;
        for (const zB of BB.splice(0, jB)) zB.destroy();
        this.refresh()
      }
      refresh() {
        const BB = this.backings[0];
        this.buffer = BB.buffer, this.twin = BB.twinReady ? BB.twin : null, this.usable = !this.dropped && BB.bufferReady ? BB.units : 0
      }
    }
    class HN {
      constructor(BB, jB, zB, QB) {
        let {
          verticesPerUnit: nB = 1,
          twinUsage: dB = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = BB, this.unitBytes = jB, this.usage = zB, this.label = QB, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Fj.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), jB % 4 !== 0) throw new Error(`${QB}: ${jB}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = nB, this.twinUsage = dB, this.twinValueBytes = nB > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * nB
      }
      twinLight(BB, jB) {
        if (4 === this.twinValueBytes) return this.widened.length < jB && (this.widened = new Float32Array(Math.max(jB, 2 * this.widened.length))), this.widened.set(BB.subarray(0, jB)), {
          light: this.widened,
          count: jB
        };
        const zB = jB % this.verticesPerUnit;
        if (0 === zB) return {
          light: BB,
          count: jB
        };
        const QB = jB - zB + this.verticesPerUnit;
        return this.padded.length < QB && (this.padded = new Uint16Array(Math.max(QB, 2 * this.padded.length))), this.padded.set(BB.subarray(0, jB)), this.padded.fill(0, jB, QB), {
          light: this.padded,
          count: QB
        }
      }
      allocate(BB) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), BB > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const nB of this.pages) {
          const jB = nB.gy.allocate(BB);
          if (jB >= 0) return {
            page: nB,
            start: jB,
            length: BB
          }
        }
        const jB = this.pages[this.pages.length - 1];
        if (null !== jB && void 0 !== jB && jB.canGrow) {
          const zB = Math.min(this.ceiling, Math.max(2 * jB.Ep, jB.Ep + BB));
          if (zB - jB.Ep >= BB) return jB.grow(zB), {
            page: jB,
            start: jB.gy.allocate(BB),
            length: BB
          }
        }
        jB && jB !== this.pages[0] && 0 === jB.gy.used && jB.drop();
        const zB = Math.floor(1048576 / this.unitBytes),
          QB = new oN(this, Math.max(BB, Math.min(this.ceiling, zB)));
        return this.pages.push(QB), {
          page: QB,
          start: QB.gy.allocate(BB),
          length: BB
        }
      }
      free(BB) {
        this.assertNotDrawing();
        const {
          page: jB
        } = BB;
        jB.gy.free(BB.start, BB.length), 0 === jB.gy.used && jB !== this.pages[0] && jB !== this.pages[this.pages.length - 1] && jB.drop()
      }
      retire() {
        for (const BB of this.pages) BB.retire()
      }
      remove(BB) {
        const jB = this.pages.indexOf(BB);
        jB >= 0 && this.pages.splice(jB, 1)
      }
      ranOutOfMemory(BB, jB) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${jB}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, BB), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, BB) / 2));
        const zB = performance.now();
        zB >= this.shortageUntil && (this.forgetFailedAt = zB + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = zB + 1e3)
      }
      allocatedBuffer(BB) {
        BB >= this.failed && (this.failed = 1 / 0);
        const jB = Math.min(2 * BB, Math.floor((BB + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, jB))
      }
      stats() {
        let BB = 0,
          jB = 0,
          zB = 0,
          QB = 0;
        for (const nB of this.pages) BB += nB.Ep, jB += nB.gy.used, zB += nB.hasTwin ? nB.Ep * this.twinUnitBytes : 0, QB += nB.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: BB * this.unitBytes,
          usedBytes: jB * this.unitBytes,
          twinBytes: zB,
          allocatedBytes: QB
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: BB,
          maxStorageBufferBindingSize: jB
        } = this.device.limits;
        let zB = Math.floor(Math.min(67108864, BB) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (zB = Math.min(zB, Math.floor(jB / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (zB = Math.min(zB, Math.floor(jB / this.twinUnitBytes))), zB
      }
    }
    const DN = 16383;

    function FN(BB, jB, zB, QB, nB) {
      let dB = 0;
      for (let IB = zB; IB < QB; IB += DN) BB.drawIndexed(6 * Math.min(DN, QB - IB), 1, 0, jB + 4 * IB, nB), dB++;
      return dB
    }
    class YN {
      constructor(BB, jB) {
        this.recordsGroup = jB, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const zB = Cj.c.strideWithoutAtlas;
        this.vertexArena = new HN(BB, zB, GPUBufferUsage.VERTEX, `terrain-vertices-${zB}`), this.quadArena = new HN(BB, MN.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const QB = (0, cj.h)(new Uint16Array(98298), DN);
        this.quadPattern = BB.createBuffer({
          label: "terrain-quad-pattern",
          size: QB.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), BB.queue.writeBuffer(this.quadPattern, 0, QB)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(BB, jB) {
        const zB = jB.packedVertices,
          QB = zB ? this.quadArena.allocate(BB.faceCount) : this.vertexArena.allocate(BB.vertexCount);
        if (!QB) return !1;
        BB.vertices = QB;
        const nB = zB ? new Uint8Array(zB.buffer, zB.byteOffset, zB.byteLength) : new Uint8Array(jB.vertices);
        return QB.page.write(QB, nB), !0
      }
      setLight(BB, jB) {
        const {
          vertices: zB
        } = BB;
        zB && 0 !== jB.length && zB.page.live && (jB.length < BB.vertexCount ? zB.page.arena.warnOnce("shortLight", `a part's ${jB.length} light values are fewer than its ${BB.vertexCount} vertices, so its light is left as it was`) : (zB.page.writeLight(zB, jB), BB.lit = !0))
      }
      lightFullSky(BB, jB) {
        this.fullSky.length < jB && (this.fullSky = new Uint16Array(Math.max(jB, 4096)).fill(qN.g));
        for (const zB of BB) {
          const BB = zB.vertices;
          BB.page.live && (BB.page.writeLight(BB, this.fullSky), zB.lit = !0)
        }
      }
      backed(BB) {
        const {
          vertices: jB
        } = BB;
        return !!jB && jB.page.holds(jB)
      }
      lost(BB) {
        const {
          vertices: jB
        } = BB;
        return !!jB && jB.page.lost(jB)
      }
      release(BB) {
        BB.vertices && BB.vertices.page.arena.free(BB.vertices), BB.vertices = null, BB.lit = !1
      }
      setDrawing(BB) {
        this.forgetBound()
      }
      draw(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : jB.faceCount;
        const dB = jB.vertices,
          IB = dB.page,
          NB = zB ? IB.twin : null;
        if (!IB.holds(dB) || zB && !NB) return 0;
        const {
          verticesPerUnit: uB
        } = IB.arena;
        let UB = dB.start * uB;
        this.boundPattern || (BB.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const aB = QB + nB;
        if (uB > 1) return IB.buffer === this.boundRecords && NB === this.boundRecordsLight || (BB.setBindGroup(1, this.recordsGroup(IB.buffer, NB)), this.boundRecords = IB.buffer, this.boundRecordsLight = NB), FN(BB, UB, QB, aB, jB.slot);
        IB.buffer !== this.boundVertices && (BB.setVertexBuffer(0, IB.buffer), this.boundVertices = IB.buffer), NB && NB !== this.boundLight && (BB.setVertexBuffer(1, NB), this.boundLight = NB);
        const pB = jB.faceCount;
        return aB <= pB ? FN(BB, UB, QB, aB, jB.slot) : FN(BB, UB, QB, pB, jB.slot) + FN(BB, UB, Math.max(QB, pB) - pB, aB - pB, jB.slot)
      }
      get buffersAwaitingVerdict() {
        let BB = 0;
        for (const jB of this.arenas()) BB += jB.awaitingVerdict;
        return BB
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class VN {
      constructor(BB, jB, zB, QB) {
        this.device = BB, this.splitBefore = jB, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = BB.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const nB = BB.createShaderModule({
          label: "scene-depth-copy",
          code: (dB = zB._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${dB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var dB;
        BB.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: nB,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: nB,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((BB => {
          this.pipeline = BB, this.building = !1
        }), (BB => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", BB)
        })), zB._executeWithTransmission = () => this.execute(zB, QB)
      }
      get compiling() {
        return this.building
      }
      setWanted(BB) {
        this.wanted = BB
      }
      setPlanes(BB, jB) {
        BB === this.near && jB === this.far || (this.near = BB, this.far = jB, this.unproject[0] = BB / (jB - BB), this.unproject[1] = jB * BB / (jB - BB), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var BB, jB;
        return null !== (BB = null === (jB = this.copy) || void 0 === jB ? void 0 : jB.view) && void 0 !== BB ? BB : null
      }
      execute(BB, jB) {
        var zB;
        null === (zB = this.retired) || void 0 === zB || zB.destroy(), this.retired = null;
        const QB = Sj(jB),
          nB = BB._transparentBindings,
          dB = this.wanted && this.pipeline ? this.splitIndex(nB) : -1,
          IB = BB._colorAttachment,
          NB = IB.resolveTarget;
        dB >= 0 && (IB.resolveTarget = void 0, IN(BB, !0));
        let uB = QB.beginRenderPass(BB._renderPassDescriptor);
        uB.setBindGroup(0, BB._sceneBG);
        let UB = this.drawList(uB, jB, BB._opaqueBindings, 0, BB._opaqueBindings.length);
        if (UB += this.drawList(uB, jB, BB._directBindings, 0, BB._directBindings.length), UB += this.drawList(uB, jB, nB, 0, dB >= 0 ? dB : nB.length), uB.end(), dB < 0) return UB;
        IN(BB);
        const aB = BB._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: pB,
            stencilLoadOp: rB
          } = aB,
          sB = IB.loadOp;
        IB.resolveTarget = NB;
        try {
          this.copyDepth(QB, BB), IB.loadOp = "load", aB.depthLoadOp = "load", rB && (aB.stencilLoadOp = "load"), uB = QB.beginRenderPass(BB._renderPassDescriptor), uB.setBindGroup(0, BB._sceneBG), UB += this.drawList(uB, jB, nB, dB, nB.length), uB.end()
        } finally {
          IB.loadOp = sB, aB.depthLoadOp = pB, aB.stencilLoadOp = rB
        }
        return UB
      }
      splitIndex(BB) {
        for (let jB = 0; jB < BB.length; jB++)
          if (BB[jB].renderable === this.splitBefore) return jB;
        return -1
      }
      drawList(BB, jB, zB, QB, nB) {
        let dB = null,
          IB = 0;
        for (let NB = QB; NB < nB; NB++) {
          const QB = zB[NB],
            nB = QB.renderable.mesh;
          nB && !1 === nB.visible || (QB.pipeline !== dB && (BB.setPipeline(QB.pipeline), dB = QB.pipeline), IB += QB.draw(BB, jB))
        }
        return IB
      }
      copyDepth(BB, jB) {
        var zB, QB;
        const nB = (null !== (zB = jB._config.depth) && void 0 !== zB ? zB : jB._config.rt)._depthTexture,
          dB = (null === (QB = this.copy) || void 0 === QB ? void 0 : QB.source) === nB ? this.copy : this.remakeCopy(nB),
          IB = BB.beginRenderPass(dB.pass);
        IB.setPipeline(this.pipeline), IB.setBindGroup(0, dB.bindGroup), IB.draw(3), IB.end()
      }
      remakeCopy(BB) {
        var jB, zB;
        this.retired = null !== (jB = null === (zB = this.copy) || void 0 === zB ? void 0 : zB.texture) && void 0 !== jB ? jB : null;
        const QB = this.device.createTexture({
            label: "scene-depth",
            size: [BB.width, BB.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          nB = QB.createView(),
          dB = this.device.createBindGroup({
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
          IB = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: nB,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: BB,
          texture: QB,
          view: nB,
          bindGroup: dB,
          pass: IB
        }, this.copy
      }
    }
    const hN = "rgba8unorm";

    function XN(BB) {
      return BB ? 15 : 1
    }
    class ZN {
      constructor(BB, jB, zB, QB) {
        this.device = BB, this.terrain = QB, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = jB._targetSignature._sampleCount > 1, this.cameraBuffer = BB.createBuffer({
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
        const nB = BB.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = BB.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: nB,
          entries: []
        });
        const dB = BB.createShaderModule({
          label: "sun-shadow-mask",
          code: (IB = this.edge, `${(0,bj.I)()}${NQ({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${IB?bz:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${XN(IB)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${IB?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var IB;
        BB.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: BB.createPipelineLayout({
            bindGroupLayouts: [this.layout, nB, nB, cd(BB, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: dB,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: dB,
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
        const NB = jB._executeWithTransmission;
        jB._executeWithTransmission = BB => this.execute(jB, zB, (() => NB ? NB(BB) : function(BB, jB) {
          const zB = Sj(jB).beginRenderPass(BB._renderPassDescriptor);
          zB.setBindGroup(0, BB._sceneBG);
          let QB = AN(zB, jB, BB._opaqueBindings);
          return QB += AN(zB, jB, BB._directBindings), QB += AN(zB, jB, BB._transparentBindings), zB.end(), QB
        }(jB, zB)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var BB, jB;
        return null !== (BB = null === (jB = this.targets) || void 0 === jB ? void 0 : jB.maskView) && void 0 !== BB ? BB : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(BB) {
        ! function(BB, jB) {
          const zB = BB.worldMatrix,
            QB = BB.projectionMatrix,
            nB = 1 / QB[0],
            dB = 1 / QB[5],
            IB = BB.far * BB.near / (BB.far - BB.near);
          jB[0] = BB.eye[0], jB[1] = BB.eye[1], jB[2] = BB.eye[2], jB[3] = 2 ** -23 / IB, jB[4] = zB[0] * nB, jB[5] = zB[1] * nB, jB[6] = zB[2] * nB, jB[7] = IB, jB[8] = zB[4] * dB, jB[9] = zB[5] * dB, jB[10] = zB[6] * dB, jB[11] = BB.near / (BB.far - BB.near), jB[12] = zB[8], jB[13] = zB[9], jB[14] = zB[10], jB[15] = 0
        }(BB, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(BB, jB, zB) {
        if (this.retire(), !this.terrain.readsMask) return zB();
        const QB = this.targetsFor(BB),
          nB = Sj(jB),
          dB = BB._renderPassDescriptor.depthStencilAttachment;
        this.edge || (QB.prepass.depthStencilAttachment.view = dB.view);
        const IB = this.terrain.drawPrepass(nB, QB.prepass, BB._sceneBG);
        if (0 === IB) return zB();
        if (this.trace(nB, QB), this.edge) return IB + 1 + zB();
        const {
          depthLoadOp: NB,
          stencilLoadOp: uB
        } = dB;
        dB.depthLoadOp = "load", uB && (dB.stencilLoadOp = "load");
        try {
          return IB + 1 + zB()
        } finally {
          dB.depthLoadOp = NB, dB.stencilLoadOp = uB
        }
      }
      trace(BB, jB) {
        const zB = this.terrain.sunShadowGroup(),
          QB = BB.beginRenderPass(jB.trace);
        this.pipeline && zB && (QB.setPipeline(this.pipeline), QB.setBindGroup(0, jB.bindGroup), QB.setBindGroup(1, this.empty), QB.setBindGroup(2, this.empty), QB.setBindGroup(3, zB), QB.draw(3)), QB.end()
      }
      retire() {
        const BB = this.retired;
        var jB;
        BB && (BB.mask.destroy(), BB.normals.destroy(), null === (jB = BB.depth) || void 0 === jB || jB.destroy(), this.retired = null)
      }
      targetsFor(BB) {
        var jB, zB;
        const QB = (null !== (jB = BB._config.depth) && void 0 !== jB ? jB : BB._config.rt)._depthTexture;
        return (null === (zB = this.targets) || void 0 === zB ? void 0 : zB.source) === QB ? this.targets : this.remake(BB, QB)
      }
      remake(BB, jB) {
        var zB;
        this.retired = this.targets;
        const QB = [jB.width, jB.height],
          nB = this.device.createTexture({
            label: "sun-shadow-mask",
            size: QB,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          dB = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: QB,
            format: hN,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          IB = null !== (zB = BB._targetSignature._depthStencilFormat) && void 0 !== zB ? zB : jB.format,
          NB = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: QB,
            format: IB,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          uB = BB._renderPassDescriptor.depthStencilAttachment,
          UB = IB.includes("stencil"),
          aB = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: dB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: NB ? NB.createView() : uB.view,
              depthClearValue: uB.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...UB ? {
                stencilClearValue: uB.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          pB = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== NB && void 0 !== NB ? NB : jB).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: dB.createView()
            }]
          }),
          rB = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: nB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [XN(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: jB,
          mask: nB,
          maskView: nB.createView(),
          normals: dB,
          depth: NB,
          bindGroup: pB,
          prepass: aB,
          trace: rB
        }, this.targets
      }
    }

    function AN(BB, jB, zB) {
      let QB = null,
        nB = 0;
      for (const dB of zB) {
        const zB = dB.renderable.mesh;
        zB && !1 === zB.visible || (dB.pipeline !== QB && (BB.setPipeline(dB.pipeline), QB = dB.pipeline), nB += dB.draw(BB, jB))
      }
      return nB
    }
    const TN = 6e4,
      PN = {
        status: "ok"
      },
      WN = {
        status: "skipped"
      };
    async function eN(BB, jB) {
      const {
        isCancelled: zB
      } = BB;
      if (zB()) return {
        status: "xz"
      };
      const {
        target: QB
      } = jB;
      if (!QB) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const nB = [],
        dB = Promise.all(Array.from(new Set(BB.materials), (async zB => {
          nB.push(await async function(BB, jB, zB, QB) {
            const nB = {
              lighting: BB.lighting,
              dirLightCount: Math.min(BB.dirLightCount, 4),
              mJ: BB.runtime
            };
            try {
              const dB = jB.material(QB);
              return dB && FQ(jB.programKey(dB, !1, nB)) ? (await dB.ready, BB.isCancelled() ? PN : dB.bindGroupLayout ? await async function(BB, jB, zB, QB) {
                const {
                  device: nB
                } = BB;
                let dB, IB;
                nB.pushErrorScope("validation");
                try {
                  dB = BB.pipelineBuild(jB, zB, QB)
                } finally {
                  IB = nB.popErrorScope().catch((() => null))
                }
                const [NB, uB] = await Promise.all([IB, dB.built.then((() => null), (BB => null !== BB && void 0 !== BB ? BB : new Error("pipeline failed")))]);
                if (!NB && !uB) return PN;
                const UB = await lN(dB.module),
                  aB = UB.length > 0 ? UB.map((BB => `${dB.name} ${BB.lineNum}:${BB.linePos}: ${BB.message}`)).join("\n") : `${dB.name}: ${wN(null!==uB&&void 0!==uB?uB:NB)}`;
                return {
                  status: "failed",
                  material: jB.model.name,
                  message: aB
                }
              }(jB, dB, jB.programKey(dB, "none" !== dB.texture, nB), zB): (console.warn(`Shader pack: skipped the compile check for "${QB.name}", whose textures failed to load`), WN)) : PN
            } catch (dB) {
              return {
                status: "failed",
                material: QB.name,
                message: wN(dB)
              }
            }
          }(BB, jB, QB, zB))
        }))),
        IB = function(BB, jB) {
          let zB, QB, nB = !1;
          const dB = new Promise((dB => {
            var IB;
            zB = setTimeout((() => {
              dB("timeout")
            }), null !== (IB = jB.timeoutMs) && void 0 !== IB ? IB : TN), QB = setInterval((() => {
              jB.isCancelled() && dB("xz")
            }), 50), BB.lost.then((() => {
              nB = !0, dB("lost")
            }))
          }));
          return {
            signal: dB,
            lost: () => nB,
            dispose: () => {
              clearTimeout(zB), clearInterval(QB)
            }
          }
        }(jB.device, BB);
      let NB;
      try {
        NB = await Promise.race([dB.then((() => "done")), IB.signal])
      } finally {
        IB.dispose()
      }
      if ("xz" === NB || zB()) return {
        status: "xz"
      };
      const uB = nB.find((BB => "failed" === BB.status));
      return uB && "lost" !== NB && !IB.lost() && await new Promise((BB => {
        setTimeout(BB, 0)
      })), "lost" === NB || IB.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : uB ? {
        status: "failed",
        failure: {
          material: uB.material,
          message: uB.message
        }
      } : "timeout" === NB ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(UB=BB.timeoutMs)&&void 0!==UB?UB:TN)/1e3} s`), {
        status: "skipped"
      }) : nB.some((BB => "skipped" === BB.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var UB
    }
    async function lN(BB) {
      if (!BB) return [];
      try {
        return (await BB.getCompilationInfo()).messages.filter((BB => "error" === BB.type))
      } catch {
        return []
      }
    }

    function wN(BB) {
      var jB;
      return null !== (jB = null === BB || void 0 === BB ? void 0 : BB.message) && void 0 !== jB ? jB : String(BB)
    }

    function xN(BB, jB, zB, QB, nB) {
      FQ(jB) ? lN(QB).then((jB => {
        const [QB] = jB;
        aj(BB, "terrain", zB, nB, QB ? `${QB.lineNum}:${QB.linePos} error: ${QB.message}` : null)
      })) : aj(BB, "terrain", zB, nB)
    }
    var KN = zB(37640),
      CN = zB(37655),
      cN = zB(37666),
      bN = zB(2956);

    function vN(BB, jB, zB, QB, nB) {
      const dB = Math.hypot(zB[0], zB[1], zB[2]);
      if (!(dB > 0)) return;
      const IB = [zB[0] / dB, zB[1] / dB, zB[2] / dB],
        NB = [Math.floor(jB[0]), Math.floor(jB[1]), Math.floor(jB[2])],
        uB = [0, 0, 0],
        UB = [1 / 0, 1 / 0, 1 / 0],
        aB = [1 / 0, 1 / 0, 1 / 0];
      for (let sB = 0; sB < 3; sB++) IB[sB] > 0 ? (uB[sB] = 1, UB[sB] = (NB[sB] + 1 - jB[sB]) / IB[sB], aB[sB] = 1 / IB[sB]) : IB[sB] < 0 && (uB[sB] = -1, UB[sB] = (NB[sB] - jB[sB]) / IB[sB], aB[sB] = -1 / IB[sB]);
      const {
        ZJ: pB
      } = BB;
      let rB = BB.cW(NB[0], NB[1], NB[2]);
      for (;;) {
        const jB = UB[0] < UB[1] ? UB[0] < UB[2] ? 0 : 2 : UB[1] < UB[2] ? 1 : 2;
        if (UB[jB] > QB) return;
        const zB = uB[jB] > 0 ? NB[jB] + 1 : NB[jB];
        NB[jB] += uB[jB], UB[jB] += aB[jB];
        const dB = BB.cW(NB[0], NB[1], NB[2]),
          IB = dB !== rB && !(BB.opaque[rB] && BB.opaque[dB]);
        if (IB) {
          const QB = [NB[0], NB[1], NB[2]];
          QB[jB] = zB;
          const dB = Math.floor(QB[0] / pB),
            IB = Math.floor(QB[1] / pB),
            uB = Math.floor(QB[2] / pB);
          !BB.isDrawn(dB, IB, uB) && BB.hasParts(dB, IB, uB) && nB.add(`${dB},${IB},${uB}`)
        }
        if (IB && BB.occluders[dB]) return;
        rB = dB
      }
    }

    function RN(BB, jB) {
      return BB.group - jB.group || BB.nearest - jB.nearest
    }
    class ON {
      constructor(BB, jB) {
        this.device = BB, this.rG = jB, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
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
        const jB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.next++;
        if (8 * jB >= this.data.length) {
          const BB = new Float32Array(2 * this.data.length);
          BB.set(this.data), this.data = BB, this.words = new Uint32Array(BB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.rG()
        }
        return jB
      }
      release(BB) {
        this.free.push(BB)
      }
      set(BB, jB, zB, QB, nB) {
        const dB = 8 * BB + eQ;
        this.data[dB] = jB, this.data[dB + 1] = zB, this.data[dB + 2] = QB, this.setVisibility(BB, nB)
      }
      setVisibility(BB, jB) {
        this.data[8 * BB + lQ] = jB, this.markDirty(BB, BB)
      }
      setFaces(BB, jB, zB) {
        const QB = 8 * BB;
        this.words[QB + wQ] = jB, this.words[QB + xQ] = zB, this.markDirty(BB, BB)
      }
      markDirty(BB, jB) {
        this.dirtyMin = Math.min(this.dirtyMin, BB), this.dirtyMax = Math.max(this.dirtyMax, jB)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Bu = WQ,
      ju = !0;
    const zu = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Bu.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Qu = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class nu {
      constructor(BB) {
        this.device = BB, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(VQ), this.dirLightUniforms = this.frameUniforms.subarray(YQ.dirLights, YQ.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Fj.b)(), this.faceGroups = !0, this.visibilityGraph = ju, this.visCull = ju, this.visCheck = !1, this.visCullMinDistance = cN.i, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new uu, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.mJ = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new YN(BB, ((BB, jB) => this.recordsGroup(BB, jB))), this.slots = new ON(BB, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = Mj(BB), this.frameLayout = BB.createBindGroupLayout({
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
          bind: (BB, jB) => this.createBinding(this.opaqueRenderable, jB, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (BB, jB) => this.createBinding(this.transparentRenderable, jB, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(BB, jB) {
        this.sceneDepth = new VN(this.device, this.transparentRenderable, BB, jB)
      }
      createFrameBindGroup() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== jB && void 0 !== jB ? jB : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(BB, jB) {
        const zB = null !== jB && void 0 !== jB ? jB : BB;
        let QB = this.recordsGroups.get(zB);
        return QB || (QB = this.createFrameBindGroup(BB, jB), this.recordsGroups.set(zB, QB)), QB
      }
      setChunkMesh(BB, jB, zB) {
        var QB;
        let nB = this.chunks.get(BB);
        nB ? this.geometry.release(nB) : (nB = {
          mesh: BB,
          slot: this.slots.allocate(),
          origin: [zB[0], zB[1], zB[2]],
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
        }, this.chunks.set(BB, nB), this.writeSlot(nB)), nB.material = BB.material ? this.materialFor(BB.material) : null, nB.packed = !!jB.packedVertices, nB.vertexCount = (0, MN.i)(jB), nB.faceCount = nB.vertexCount / 4;
        const dB = null !== (QB = jB.faceGroups) && void 0 !== QB ? QB : null;
        if (nB.faceGroups = dB, dB) {
          const BB = KN.p;
          nB.planePX = dB[BB], nB.planeNX = dB[BB + 1], nB.planePY = dB[BB + 2], nB.planeNY = dB[BB + 3], nB.planePZ = dB[BB + 4], nB.planeNZ = dB[BB + 5]
        }
        this.drawWhole(nB), 0 !== nB.faceCount && (this.geometry.set(nB, jB) ? (nB.packed && this.slots.setFaces(nB.slot, nB.vertices.start + nB.faceCount, nB.faceCount), jB.MJ && this.setChunkMeshLight(BB, jB.MJ)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${nB.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(BB, jB) {
        const zB = this.chunks.get(BB);
        zB && this.geometry.setLight(zB, jB)
      }
      drawStats() {
        let BB = this.transparent.length;
        for (const jB of this.opaqueBatches) BB += jB.meshes.length;
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
        const jB = this.chunks.get(BB);
        jB && (this.geometry.release(jB), this.slots.release(jB.slot), this.chunks.delete(BB))
      }
      remeshLost(BB, jB) {
        this.geometry.release(jB), jB.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** jB.lostRemeshes++);
        const zB = BB.zr,
          [QB, nB, dB] = zB.xzB(jB.origin[0], jB.origin[1], jB.origin[2]),
          IB = zB.Fm.Ym(QB, nB, dB);
        IB && (IB.Hm = !0, IB.hm = !0, zB.Dm(IB, !1))
      }
      chooseFaceRanges(BB, jB, zB) {
        const QB = this.faceRanges;
        BB.faceMask = zB, BB.rangeCount = (0, CN.k)(jB, zB, QB), BB.first0 = QB[0], BB.count0 = QB[1], BB.first1 = QB[2], BB.count1 = QB[3]
      }
      drawWhole(BB) {
        BB.faceMask = -1, BB.faceEpoch = -1, BB.rangeCount = 1, BB.first0 = 0, BB.count0 = BB.faceCount
      }
      writeSlot(BB) {
        const [jB, zB, QB] = this.originOffset;
        this.slots.set(BB.slot, BB.origin[0] - jB, BB.origin[1] - zB, BB.origin[2] - QB, BB.visibility)
      }
      materialFor(BB) {
        const jB = this.materials.get(BB);
        if (jB) return jB;
        const zB = iN(BB);
        if (!zB) return this.warnOnce(`material:${BB.name}`, `Lite terrain cannot draw material "${BB.name}"; its chunks are skipped.`), null;
        const {
          model: QB,
          atlas: nB,
          texture: dB,
          animated: IB,
          uniformData: NB
        } = zB, uB = {
          id: this.materials.size,
          model: QB,
          texture: dB,
          animated: IB,
          uniformData: NB,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${BB.name}`,
            size: NB.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: zB.liquid,
          customRenderMat: zB.customRenderMat,
          atlasCount: 0,
          xR: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(BB, uB), this.device.queue.writeBuffer(uB.uniformBuffer, 0, NB), uB.ready = this.createMaterialBindGroup(uB, nB).catch((jB => {
          console.error(`Lite terrain failed to load the textures of material "${BB.name}"`, jB)
        })), uB
      }
      materialLayout(BB) {
        const jB = function(BB) {
            const jB = ["uniforms"];
            if ("atlas" === BB.texture) {
              BB.animated && jB.push("animData"), jB.push("sampler");
              for (let zB = 0; zB < BB.atlasCount; zB++) jB.push("textureArray")
            } else "single" === BB.texture && jB.push("sampler", "texture");
            return jB
          }(BB),
          zB = jB.join(",");
        let QB = this.materialLayouts.get(zB);
        if (!QB) {
          const BB = GPUShaderStage.FRAGMENT;
          QB = this.device.createBindGroupLayout({
            label: `terrain-material-${zB}`,
            entries: jB.map(((jB, zB) => {
              switch (jB) {
                case "uniforms":
                  return {
                    binding: zB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: zB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: zB, visibility: BB, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: zB, visibility: BB, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: zB, visibility: BB, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(zB, QB)
        }
        return QB
      }
      async createMaterialBindGroup(BB, jB) {
        const zB = [{
          buffer: BB.uniformBuffer
        }];
        if (jB) {
          const QB = await jj(this.device, jB.sources);
          BB.atlasCount = QB.length, BB.xR = QB[0].layerWidth, BB.atlasLayers = QB[0].layers, jB.animDataPerTex && zB.push({
            buffer: CB(this.device, Float32Array.from(jB.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), zB.push(this.sampler);
          for (const BB of QB) zB.push(BB.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === BB.texture) {
          const {
            url: jB
          } = BB.model.diffuseTexture.source, {
            pixels: QB,
            width: nB,
            height: dB
          } = await Bj(jB);
          zB.push(this.sampler), zB.push(bB(this.device, QB, nB, dB, 1, `terrain-${jB}`).createView({
            dimension: "2d"
          }))
        }
        const QB = this.materialLayout(this.programKey(BB, !1));
        BB.bindGroupLayout = QB, BB.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${BB.model.name}`,
          layout: QB,
          entries: zB.map(((BB, jB) => ({
            binding: jB,
            resource: BB
          })))
        })
      }
      programKey(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QB = zB ? zB.lighting : this.lighting,
          nB = zB ? zB.mJ : this.mJ,
          dB = {
            texture: BB.texture,
            atlasCount: BB.atlasCount,
            xR: BB.xR,
            atlasLayers: BB.atlasLayers,
            animated: BB.animated,
            alphaTest: BB.model.transparencyMode === iB.o.alphaTest,
            lighting: QB,
            dirLightCount: zB ? zB.dirLightCount : this.dirLightCount,
            packed: jB
          };
        if (!nB) return dB;
        const IB = this.shaderPackFields(BB, nB),
          NB = "atlas" === BB.texture && BB.model.transparencyMode === iB.o.opaque && fQ(IB.packVariant);
        return {
          ...dB,
          ...IB,
          alphaTest: dB.alphaTest || NB
        }
      }
      shaderPackFields(BB, jB) {
        const zB = this.packVariant(BB, jB);
        return void 0 === zB ? iQ : {
          packVariant: zB,
          liquid: BB.liquid
        }
      }
      packVariant(BB, jB) {
        return BB.customRenderMat ? void 0 : function(BB, jB) {
          const zB = BB ? BB.defineFor(jB ? "liquid" : "terrain") : 0;
          return 0 === zB ? void 0 : zB
        }(jB, BB.liquid)
      }
      isBlended(BB) {
        return BB.model.transparencyMode === iB.o.alphaBlend
      }
      shaderModule(BB, jB) {
        let zB = this.modules.get(BB);
        return zB || (zB = this.device.createShaderModule({
          label: jB,
          code: BB
        }), this.modules.set(BB, zB)), zB
      }
      pipelineFor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!BB.bindGroupLayout) return null;
        if (!QB) return this.pipelineOf(BB, jB, zB);
        const nB = this.pipelineIdNow(BB, jB, !0, zB),
          dB = this.pipelines.get(nB);
        if (dB) return dB;
        const IB = this.pipelineOf(BB, jB, zB);
        return IB && void 0 === dB && this.startPipeline(nB, BB, {
          ...this.programKey(BB, jB),
          resting: QB
        }, zB), IB
      }
      pipelineOf(BB, jB, zB) {
        const QB = this.pipelineIdNow(BB, jB, !1, zB),
          nB = this.pipelines.get(QB);
        return void 0 !== nB ? nB : (this.startPipeline(QB, BB, this.programKey(BB, jB), zB), null)
      }
      pipelineIdNow(BB, jB, zB, QB) {
        const {
          lighting: nB,
          dirLightCount: dB
        } = this, {
          transparencyMode: IB,
          backFaceCulling: NB
        } = BB.model, uB = this.packVariant(BB, this.mJ), UB = (jB ? 2 : 0) + (zB ? 1 : 0), aB = BB.pipelineIds[UB];
        if (null !== aB && aB.lighting === nB && aB.dirLightCount === dB && aB.packVariant === uB && aB.transparencyMode === IB && aB.cull === NB && aB.atlasCount === BB.atlasCount && aB.xR === BB.xR && aB.atlasLayers === BB.atlasLayers && aB.colorFormat === QB._colorFormat && aB.depthStencilFormat === QB._depthStencilFormat && aB.sampleCount === QB._sampleCount) return aB.id;
        const pB = this.programKey(BB, jB),
          rB = this.pipelineId(BB, zB ? {
            ...pB,
            resting: zB
          } : pB, QB);
        return BB.pipelineIds[UB] = {
          id: rB,
          lighting: nB,
          dirLightCount: dB,
          packVariant: uB,
          transparencyMode: IB,
          cull: NB,
          atlasCount: BB.atlasCount,
          xR: BB.xR,
          atlasLayers: BB.atlasLayers,
          colorFormat: QB._colorFormat,
          depthStencilFormat: QB._depthStencilFormat,
          sampleCount: QB._sampleCount
        }, rB
      }
      pipelineId(BB, jB, zB) {
        return du(jB, this.isBlended(BB), BB.model.backFaceCulling, zB)
      }
      pipelineBuild(BB, jB, zB) {
        var QB;
        const nB = this.pipelineId(BB, jB, zB);
        return null !== (QB = this.builds.get(nB)) && void 0 !== QB ? QB : this.startPipeline(nB, BB, jB, zB)
      }
      startPipeline(BB, jB, zB, QB) {
        var nB;
        this.pipelines.set(BB, null);
        const dB = RQ(zB),
          IB = this.isBlended(jB),
          NB = this.shadowMask && QB._depthStencilFormat ? function(BB, jB, zB, QB) {
            if (void 0 === BB.packVariant || BB.liquid || jB) return "none";
            const nB = (0, vj.f)(BB.packVariant);
            return null === nB || void 0 === nB || !nB.sunShadow || !dQ(nB, zB) || nB.discards || BB.alphaTest && fQ(BB.packVariant) ? "none" : QB ? "edge" : "plain"
          }(zB, IB, !!this.sunShadow, QB._sampleCount > 1) : "none";
        let uB;
        try {
          uB = OQ(zB, !!this.sunShadow, NB)
        } catch (yB) {
          if (!FQ(zB)) throw yB;
          return this.failedPackBuild(BB, zB, dB, yB)
        }
        const UB = this.shaderModule(uB, dB),
          aB = [];
        zB.packed || (aB.push(function(BB, jB) {
          const zB = [{
            shaderLocation: Bu.position,
            offset: Cj.c.Yz,
            format: "float32x3"
          }, {
            shaderLocation: Bu.normal,
            offset: Cj.c.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Bu.color,
            offset: Cj.c.colorOffset,
            format: "unorm8x4"
          }];
          return BB && zB.push({
            shaderLocation: Bu.uv,
            offset: Cj.c.uvOffset,
            format: "float32x2"
          }), jB && zB.push({
            shaderLocation: Bu.blockFlagWords,
            offset: Cj.c.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Cj.c.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: zB
          }
        }("none" !== zB.texture, FQ(zB))), zB.lighting && aB.push(zu));
        const pB = jB.model.backFaceCulling,
          rB = {
            label: dB,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, jB.bindGroupLayout, ...Rd(this.device, zB, !!this.sunShadow, "none" !== NB)]
            }),
            vertex: {
              module: UB,
              entryPoint: "mainVertex",
              buffers: aB
            },
            fragment: Gj({
              module: UB,
              entryPoint: "mainFragment"
            }, QB, IB ? Qu : null),
            depthStencil: QB._depthStencilFormat ? {
              format: QB._depthStencilFormat,
              depthCompare: null !== (nB = QB._depthCompare) && void 0 !== nB ? nB : Ej,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: QB._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: pB ? "back" : "none"
            }
          },
          sB = zB.resting ? 0 : 1;
        this.compiling += sB;
        const JB = "none" === NB ? this.device.createRenderPipelineAsync(rB) : this.startMaskPipelines(UB, rB, "edge" === NB);
        JB.then((jB => {
          this.compiling -= sB, this.pipelines.set(BB, jB)
        }), (BB => {
          this.compiling -= sB, console.error(`Lite terrain pipeline ${dB} failed`, BB), xN(this.device, zB, dB, UB, BB)
        }));
        const mB = {
          name: dB,
          module: UB,
          built: JB
        };
        return this.builds.set(BB, mB), mB
      }
      startMaskPipelines(BB, jB, zB) {
        const QB = jB.depthStencil,
          nB = this.device.createRenderPipelineAsync(zB ? jB : {
            ...jB,
            depthStencil: {
              ...QB,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          dB = this.device.createRenderPipelineAsync({
            ...jB,
            label: `${jB.label}-prepass`,
            fragment: {
              module: BB,
              entryPoint: "prepassFragment",
              targets: [{
                format: hN
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([nB, dB]).then((BB => {
          let [jB, zB] = BB;
          return this.prepassOf.set(jB, zB), this.maskPipelines++, jB
        }))
      }
      failedPackBuild(BB, jB, zB, QB) {
        console.error(`Lite terrain pipeline ${zB} failed`, QB), xN(this.device, jB, zB, null, QB);
        const nB = Promise.reject(QB);
        nB.catch((() => {}));
        const dB = {
          name: zB,
          module: null,
          built: nB
        };
        return this.builds.set(BB, dB), dB
      }
      checkShaderPack(BB) {
        return eN(BB, {
          device: this.device,
          target: this.target,
          material: BB => this.materialFor(BB),
          programKey: (BB, jB, zB) => this.programKey(BB, jB, zB),
          pipelineBuild: (BB, jB, zB) => this.pipelineBuild(BB, jB, zB)
        })
      }
      createBinding(BB, jB, zB) {
        return this.target = jB, {
          renderable: BB,
          pipeline: oj(this.device, jB),
          draw: BB => {
            this.geometry.setDrawing(!0);
            try {
              return zB ? this.drawTransparent(BB, jB) : this.drawOpaque(BB, jB)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(BB, jB) {
        var zB, QB, nB, dB;
        const {
          ur: IB
        } = BB;
        this.lighting = BB.Rm;
        const NB = (0, SN.q)(jB);
        this.dirLightCount = Math.min(NB, 4), this.mJ = null !== (zB = IB.mJ) && void 0 !== zB ? zB : null, NB > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(BB, jB), this.animateMaterials(jB.animTick);
        const uB = IB.qr,
          UB = uB[0] !== this.originOffset[0] || uB[1] !== this.originOffset[1] || uB[2] !== this.originOffset[2];
        UB && (this.originOffset[0] = uB[0], this.originOffset[1] = uB[1], this.originOffset[2] = uB[2]);
        const aB = jB.eye;
        this.eye[0] = aB[0], this.eye[1] = aB[1], this.eye[2] = aB[2], this.writeShaderPackInputs();
        const pB = jB.projectionMatrix,
          rB = 0 === pB[15];
        let sB = 0;
        (UB || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: JB
        } = this;
        Hj(this.transparentRenderable._worldCenter, jB, qj), this.resetBatches(rB), this.transparent.length = 0, this.unlit.length = 0;
        const mB = IB.zr.aBB,
          yB = mB / 2 * Math.sqrt(3);
        let kB = 0;
        const GB = !!this.mJ && qQ(this.mJ.defineFor("liquid"));
        let LB = !1;
        const gB = null !== (QB = null === (nB = IB.fL) || void 0 === nB ? void 0 : nB.visibility) && void 0 !== QB ? QB : null,
          tB = this.visCull && rB && 0 === this.compiling && null !== gB && IB.zr.rQB[0] >= this.visCullMinDistance ? this.target : null,
          SB = this.visPassable,
          MB = this.visCandidates,
          EB = this.visCandidateBatches;
        SB.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let iB = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let qB = 0;
        const fB = (BB, zB) => {
          if (!zB) return this.transparent.push(BB), void(qB += 2 * BB.faceCount);
          if (null !== BB.faceGroups && zB.faceCull) {
            if (0 === sB && (sB = (0, CN.d)(pB, jB.renderWidth, jB.renderHeight), sB !== this.faceFocalPx && (this.faceFocalPx = sB, JB = ++this.faceEpoch)), BB.faceEpoch !== JB) {
              BB.faceEpoch = JB;
              const jB = Math.sqrt(BB.distance) + yB,
                zB = (0, CN.f)(BB.planePX, BB.planeNX, BB.planePY, BB.planeNY, BB.planePZ, BB.planeNZ, this.eye[0] - (BB.origin[0] - this.originOffset[0]), this.eye[1] - (BB.origin[1] - this.originOffset[1]), this.eye[2] - (BB.origin[2] - this.originOffset[2]), (0, CN.e)(jB, sB));
              zB !== BB.faceMask && this.chooseFaceRanges(BB, BB.faceGroups, zB)
            }
            if (0 === BB.rangeCount) return
          } else - 1 !== BB.faceMask && this.drawWhole(BB);
          zB.meshes.push(BB), qB += 2 * ((BB.rangeCount > 0 ? BB.count0 : 0) + (BB.rangeCount > 1 ? BB.count1 : 0))
        };
        for (const HB of this.chunks.values()) {
          UB && this.writeSlot(HB);
          const BB = HB.mesh.visibility;
          BB !== HB.visibility && (HB.visibility = BB, this.slots.setVisibility(HB.slot, BB));
          const {
            material: zB
          } = HB;
          this.geometry.lost(HB) && performance.now() >= HB.lostRetryAt && this.remeshLost(IB, HB);
          const QB = !(null === zB || void 0 === zB || !zB.bindGroup) && this.geometry.backed(HB),
            nB = QB && this.lighting && !HB.vertices.page.twin;
          if (tB && (Number.isNaN(HB.key) && (HB.ci = Math.floor(HB.origin[0] / mB), HB.cj = Math.floor(HB.origin[1] / mB), HB.ck = Math.floor(HB.origin[2] / mB), HB.key = (0, bN.i)(HB.ci, HB.cj, HB.ck)), (!QB || BB < 1 || nB || !this.batchDraws(zB, HB.packed, tB)) && this.visSeeThrough(HB, tB) && SB.add(HB.key)), !QB) continue;
          nB || (HB.lostRemeshes = 0);
          const dB = HB.origin[0] - this.originOffset[0],
            NB = HB.origin[1] - this.originOffset[1],
            uB = HB.origin[2] - this.originOffset[2];
          if (!(0, aN.b)(jB.frustum, dB, NB, uB, mB)) continue;
          const aB = dB + mB / 2 - this.eye[0],
            pB = NB + mB / 2 - this.eye[1],
            sB = uB + mB / 2 - this.eye[2];
          if (HB.distance = aB * aB + pB * pB + sB * sB, this.lighting && !HB.lit && (kB = Math.max(kB, HB.vertexCount), this.unlit.push(HB)), nB) continue;
          const JB = this.isBlended(zB) ? null : this.batchFor(zB, HB.packed, HB.vertices.page, 1 === BB, rB);
          tB ? (MB[iB] = HB, EB[iB++] = JB) : fB(HB, JB)
        }
        const oB = tB ? this.sweepVisibility(BB, jB, gB) : null;
        null === (dB = (0, Pd.x)(IB)) || void 0 === dB || dB.update(jB.frustum, this.originOffset, mB, oB);
        for (let HB = 0; HB < iB; HB++) {
          const BB = MB[HB];
          !oB || oB.isDrawn(BB.ci, BB.cj, BB.ck) ? fB(BB, EB[HB]) : (this.visCulledParts++, this.visCulledTriangles += 2 * BB.faceCount)
        }
        for (const HB of this.transparent) LB ||= GB && HB.material.liquid && !HB.material.customRenderMat;
        this.submittedTriangles = qB, oB && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(BB, jB, oB)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(LB) : LB && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && kB > 0 && this.geometry.lightFullSky(this.unlit, kB);
        for (const HB of this.opaqueBatches) this.chunkSorter.sort(HB.meshes, 1) || HB.meshes.sort(Iu);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Nu)
      }
      sweepVisibility(BB, jB, zB) {
        const {
          zr: QB
        } = BB.ur, nB = QB.aBB, dB = this.visPassable, IB = this.eye[0] + this.originOffset[0], NB = this.eye[1] + this.originOffset[1], uB = this.eye[2] + this.originOffset[2];
        if (!zB.eyeClear(IB, NB, uB, jB.near, jB.projectionMatrix, QB)) return null;
        const [UB, aB] = QB.rQB, pB = zB.update(IB, NB, uB, nB, UB, aB, dB);
        return this.visSweeps = zB.sweeps, pB ? zB : null
      }
      visSeeThrough(BB, jB) {
        const {
          material: zB
        } = BB;
        return (!zB || !this.isBlended(zB)) && (BB.mesh.visibility < 1 || !(null !== zB && void 0 !== zB && zB.bindGroup) || BB.faceCount > 0 && (!this.geometry.backed(BB) || this.lighting && !BB.vertices.page.twin) || !this.batchDraws(zB, BB.packed, jB))
      }
      batchDraws(BB, jB, zB) {
        var QB;
        const nB = jB ? 2 : 0;
        if (BB === this.visDrawsMaterial && function(BB, jB) {
            return 0 !== (BB & 1 << jB)
          }(this.visDrawsBits, nB)) return 0 !== (this.visDrawsBits & 2 << nB);
        let dB = null !== (QB = this.visBatchDraws.get(BB)) && void 0 !== QB ? QB : 0;
        if (!(dB & 1 << nB)) {
          dB |= 1 << nB | (!!BB.bindGroupLayout && this.canDraw(BB, jB) && !!this.pipelines.get(this.pipelineIdNow(BB, jB, !1, zB)) ? 2 << nB : 0), this.visBatchDraws.set(BB, dB)
        }
        return this.visDrawsMaterial = BB, this.visDrawsBits = dB, 0 !== (dB & 2 << nB)
      }
      runVisCheck(BB, jB, zB) {
        const {
          ur: QB
        } = BB, {
          zr: nB
        } = QB, dB = nB.aBB, IB = new Set;
        for (const sB of this.chunks.values()) IB.add(sB.key);
        const NB = xn.Matrix.FromArray(jB.viewProjectionMatrix).invert(),
          [uB, UB, aB] = this.originOffset,
          pB = new xn.KJ,
          rB = function(BB, jB, zB, QB) {
            const nB = new Set;
            for (let dB = 0; dB < 27; dB++)
              for (let IB = 0; IB < 48; IB++) {
                const NB = zB((IB + .5) / 48 * 2 - 1, (dB + .5) / 27 * 2 - 1);
                vN(BB, jB, [NB[0] - jB[0], NB[1] - jB[1], NB[2] - jB[2]], QB, nB)
              }
            return nB
          }({
            cW: (BB, jB, zB) => nB.cW(BB, jB, zB),
            occluders: zB.occluders,
            opaque: zB.opaque,
            ZJ: dB,
            isDrawn: (BB, jB, QB) => zB.isDrawn(BB, jB, QB),
            hasParts: (BB, jB, zB) => IB.has((0, bN.i)(BB, jB, zB))
          }, [this.eye[0] + uB, this.eye[1] + UB, this.eye[2] + aB], ((BB, jB) => (xn.KJ.TransformCoordinatesFromFloatsToRef(BB, jB, .5, NB, pB), [pB.x + uB, pB.y + UB, pB.z + aB])), (nB.rQB[0] + 1) * dB);
        this.visViolations = rB.size;
        for (const sB of rB) this.warnOnce(`vis:${sB}`, `Lite terrain cave culling skipped chunk ${sB}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var BB;
        null !== (BB = this.mJ) && void 0 !== BB && BB.isRunning() && (this.shaderPackInputs ??= new Od(this.device, this.mJ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.mJ, this.eye, this.lighting))
      }
      bindShaderPackInputs(BB, jB, zB) {
        var QB, nB, dB, IB;
        let NB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const uB = this.packVariant(jB, zB);
        if (void 0 === uB) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Od(this.device, zB.textureLayers(), this.sunShadow), this.shaderPackInputs.write(zB, this.eye, this.lighting));
        const UB = qQ(uB) ? null !== (QB = null === (nB = this.sceneDepth) || void 0 === nB ? void 0 : nB.view) && void 0 !== QB ? QB : this.standIn() : null,
          aB = NB ? null !== (dB = null === (IB = this.shadowMask) || void 0 === IB ? void 0 : IB.view) && void 0 !== dB ? dB : this.standIn() : null;
        this.shaderPackInputs.bind(BB, UB, vd(uB, !!this.sunShadow), aB)
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
        var BB, jB;
        return null !== (BB = null === (jB = this.shaderPackInputs) || void 0 === jB ? void 0 : jB.bindGroupFor(null, !0)) && void 0 !== BB ? BB : null
      }
      resetBatches(BB) {
        const jB = this.opaqueBatches;
        let zB = 0;
        for (const QB of jB) QB.meshes.length > 0 && (QB.meshes.length = 0, QB.faceCull = this.batchFaceCull(QB.material, BB), jB[zB++] = QB);
        jB.length = zB
      }
      orderBatches() {
        const BB = this.opaqueBatches;
        for (let jB = 0; jB < BB.length; jB++) {
          const zB = BB[jB];
          zB.group = jB;
          for (let QB = 0; QB < jB; QB++) {
            const jB = BB[QB];
            if (jB.material === zB.material && jB.packed === zB.packed) {
              zB.group = jB.group;
              break
            }
          }
          zB.nearest = zB.meshes.length > 0 ? zB.meshes[0].distance : 1 / 0
        }
        BB.sort(RN)
      }
      batchFor(BB, jB, zB, QB, nB) {
        for (const IB of this.opaqueBatches)
          if (IB.material === BB && IB.packed === jB && IB.page === zB && IB.resting === QB) return IB;
        const dB = {
          material: BB,
          packed: jB,
          page: zB,
          resting: QB,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(BB, nB)
        };
        return this.opaqueBatches.push(dB), dB
      }
      batchFaceCull(BB, jB) {
        return !(!jB || !(0, KN.x)(BB.model)) && (!this.mJ || ! function(BB) {
          var jB;
          return !(null === (jB = (0, vj.f)(BB)) || void 0 === jB || !jB.movesVertices)
        }(this.packVariant(BB, this.mJ)))
      }
      writeFrameUniforms(BB, jB) {
        const zB = this.frameUniforms,
          QB = YQ;
        if ((0, SN.r)(BB, zB), zB[QB.fogInfos] = jB.fogEnabled ? jB.fogMode : 0, zB[QB.fogInfos + 1] = jB.fogStart, zB[QB.fogInfos + 2] = jB.fogEnd, zB[QB.fogInfos + 3] = jB.fogDensity, zB.set(jB.fogColour, QB.fogColour), zB[QB.outputHeight] = jB.renderHeight, zB.set(jB.ambientColour, QB.sceneAmbient), (0, SN.o)(jB, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const jB = (0, MN.j)(BB.sm, BB.PJ, BB.WJ);
          for (let BB = 0; BB < 4; BB++) zB[QB.aoLevels + BB] = jB[BB] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, zB)
      }
      animateMaterials(BB) {
        const jB = hQ.anim;
        for (const zB of this.materials.values()) zB.animated && (zB.uniformData[jB] = BB, this.device.queue.writeBuffer(zB.uniformBuffer, 4 * jB, zB.uniformData, jB, 1))
      }
      canDraw(BB, jB) {
        return !("atlas" === BB.texture && !jB) || (this.warnOnce(`stride:${BB.id}`, `Lite terrain: material "${BB.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(BB, jB) {
        let zB = 0;
        BB.setBindGroup(1, this.frameBindGroup);
        for (const QB of this.opaqueBatches) {
          if (!QB.meshes.length || !this.canDraw(QB.material, QB.packed)) continue;
          const nB = this.pipelineFor(QB.material, QB.packed, jB, QB.resting);
          nB && (BB.setPipeline(nB), BB.setBindGroup(2, QB.material.bindGroup), this.mJ && this.bindShaderPackInputs(BB, QB.material, this.mJ, this.prepassOf.has(nB)), zB += this.drawBatch(BB, QB))
        }
        return zB
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(BB, jB, zB) {
        const QB = this.target,
          nB = this.mJ;
        if (!QB || !nB || 0 === this.maskPipelines) return 0;
        let dB = 0,
          IB = null;
        this.geometry.setDrawing(!0);
        try {
          for (const NB of this.opaqueBatches) {
            if (!NB.meshes.length || !this.canDraw(NB.material, NB.packed)) continue;
            const uB = this.pipelineFor(NB.material, NB.packed, QB, NB.resting),
              UB = uB && this.prepassOf.get(uB);
            UB && (IB || (IB = BB.beginRenderPass(jB), IB.setBindGroup(0, zB), IB.setBindGroup(1, this.frameBindGroup)), IB.setPipeline(UB), IB.setBindGroup(2, NB.material.bindGroup), this.bindShaderPackInputs(IB, NB.material, nB, !0), dB += this.drawBatch(IB, NB))
          }
        } finally {
          var NB;
          null === (NB = IB) || void 0 === NB || NB.end(), this.geometry.setDrawing(!1)
        }
        return dB
      }
      drawBatch(BB, jB) {
        let zB = 0;
        for (const QB of jB.meshes) {
          const {
            rangeCount: jB
          } = QB;
          jB > 0 && (zB += this.geometry.draw(BB, QB, this.lighting, QB.first0, QB.count0), jB > 1 && (zB += this.geometry.draw(BB, QB, this.lighting, QB.first1, QB.count1)))
        }
        return zB
      }
      drawTransparent(BB, jB) {
        let zB = 0,
          QB = null,
          nB = null;
        BB.setBindGroup(1, this.frameBindGroup);
        for (const dB of this.transparent) {
          const IB = dB.material;
          if (!this.canDraw(IB, dB.packed)) continue;
          const NB = this.pipelineFor(IB, dB.packed, jB);
          NB && (NB !== QB && (BB.setPipeline(NB), QB = NB, this.mJ && this.bindShaderPackInputs(BB, IB, this.mJ)), IB !== nB && (BB.setBindGroup(2, IB.bindGroup), nB = IB), zB += this.geometry.draw(BB, dB, this.lighting))
        }
        return zB
      }
    }

    function du(BB, jB, zB, QB) {
      return `${RQ(BB)}|${BB.atlasLayers}|${BB.xR}|${jB}|${zB}|${QB._colorFormat}|${QB._depthStencilFormat}|${QB._sampleCount}`
    }

    function Iu(BB, jB) {
      return BB.distance - jB.distance
    }

    function Nu(BB, jB) {
      return jB.distance - BB.distance
    }
    class uu {
      constructor() {
        this.left = []
      }
      sort(BB, jB) {
        for (let zB = 0; zB < BB.length; zB++) {
          const jB = BB[zB].distance;
          if (jB - jB !== 0) return !1
        }
        return this.sortRange(BB, 0, BB.length, jB), !0
      }
      sortRange(BB, jB, zB, QB) {
        if (zB - jB <= 16) {
          for (let nB = jB + 1; nB < zB; nB++) {
            const zB = BB[nB],
              dB = QB * zB.distance;
            let IB = nB - 1;
            for (; IB >= jB && QB * BB[IB].distance > dB; IB--) BB[IB + 1] = BB[IB];
            BB[IB + 1] = zB
          }
          return
        }
        const nB = jB + zB >>> 1;
        if (this.sortRange(BB, jB, nB, QB), this.sortRange(BB, nB, zB, QB), QB * BB[nB - 1].distance <= QB * BB[nB].distance) return;
        const {
          left: dB
        } = this, IB = nB - jB;
        for (let aB = 0; aB < IB; aB++) dB[aB] = BB[jB + aB];
        let NB = 0,
          uB = nB,
          UB = jB;
        for (; NB < IB && uB < zB;) BB[UB++] = QB * BB[uB].distance < QB * dB[NB].distance ? BB[uB++] : dB[NB++];
        for (; NB < IB;) BB[UB++] = dB[NB++]
      }
    }
    const Uu = Math.ceil(102);

    function au(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : jB;
      const dB = Math.min(jB, zB),
        IB = new Uint32Array(Sz(QB));
      for (let NB = 0; NB < QB; NB++) {
        const jB = Math.floor(NB * dB / QB),
          zB = Math.max(jB + 1, Math.floor((NB + 1) * dB / QB));
        for (let uB = 0; uB < QB; uB++) {
          const UB = Math.floor(uB * dB / QB),
            aB = Math.max(UB + 1, Math.floor((uB + 1) * dB / QB));
          let pB = 0;
          for (let QB = jB; QB < zB; QB++)
            for (let jB = UB; jB < aB; jB++) BB[QB * nB + jB] >= Uu && pB++;
          if (2 * pB >= (zB - jB) * (aB - UB)) {
            const BB = uB + QB * NB;
            IB[BB >>> 5] |= 1 << (31 & BB)
          }
        }
      }
      return IB
    }

    function pu(BB) {
      return Math.max(1, Math.min(16, BB))
    }
    class ru {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = BB, this.loadTexture = jB, this.warn = zB, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(BB, jB) {
        return (BB.sA !== this.builtVersion || this.blockCaster.length !== jB) && (this.build(BB, jB), !0)
      }
      build(BB, jB) {
        this.builtVersion = BB.sA;
        const zB = new Uint16Array(jB),
          QB = new Map;
        for (let nB = 1; nB < jB; nB++) {
          const jB = this.classify(BB, nB, QB);
          if (null === jB || jB === kz) {
            zB[nB] = null === jB ? 0 : kz;
            continue
          }
          let dB = this.byKey.get(jB.key);
          void 0 === dB && (dB = this.allocate(jB), this.byKey.set(jB.key, dB)), zB[nB] = dB
        }
        this.blockCaster = zB, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(BB, jB) {
        const zB = BB.I9[jB];
        if ("function" !== typeof zB) return zB;
        try {
          return zB()
        } catch (QB) {
          return this.warnOnce(`Sun shadows: no caster option for block ${jB}: ${QB instanceof Error?QB.message:String(QB)}`), null
        }
      }
      classify(BB, jB, zB) {
        const QB = this.option(BB, jB);
        if ("none" === QB) return null;
        if (QB && QB.planes.length > 0) {
          const BB = QB.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(BB)}`,
            planes: BB
          }
        }
        if (BB.gs[jB]) return null;
        const nB = BB.Ms[jB] ? BB.HA(jB) : null;
        if (nB && nB.length >= 6) {
          const BB = function(BB) {
            const jB = new Uint32Array(16);
            for (let zB = 0; zB + 6 <= BB.length; zB += 6) {
              const QB = [0, 1, 2].map((jB => Math.max(0, Math.ceil(8 * BB[zB + jB] - .5)))),
                nB = [0, 1, 2].map((jB => Math.min(7, Math.floor(8 * BB[zB + jB + 3] - .5))));
              for (let BB = QB[2]; BB <= nB[2]; BB++)
                for (let zB = QB[1]; zB <= nB[1]; zB++)
                  for (let dB = QB[0]; dB <= nB[0]; dB++) {
                    const QB = dB + 8 * (zB + 8 * BB);
                    jB[QB >>> 5] |= 1 << (31 & QB)
                  }
            }
            return jB
          }(nB);
          return function(BB) {
            return BB.every((BB => 4294967295 === BB))
          }(BB) ? kz : BB.every((BB => 0 === BB)) ? null : {
            kind: "shape",
            key: `shape:${BB.join(",")}`,
            mask: BB
          }
        }
        if (BB.WE[jB] || !BB.Jm[jB]) return null;
        const dB = [0, 1, 2, 3, 4, 5].map((QB => {
          const nB = BB.ym[6 * jB + QB];
          let dB = zB.get(nB);
          return void 0 === dB && (dB = function(BB) {
            if (!BB || BB.fm) return null;
            const {
              oR: jB,
              xR: zB,
              fR: QB
            } = BB;
            if (!jB || !zB || !(zB > 0) || void 0 === QB || !(QB >= 0)) return null;
            const nB = jB[0],
              dB = zB * zB * 4;
            if (!nB || nB.byteLength < dB) return null;
            const IB = Math.floor(nB.byteLength / dB),
              NB = jB[Math.floor(QB / IB)];
            if (!NB) return null;
            const uB = new Uint8Array(NB.buffer, NB.byteOffset, NB.byteLength),
              UB = QB % IB * dB;
            if (UB + dB > uB.length) return null;
            const aB = new Uint8Array(zB * zB);
            let pB = !1;
            for (let rB = 0; rB < aB.length; rB++) aB[rB] = uB[UB + 4 * rB + 3], pB ||= aB[rB] < Uu;
            return pB ? {
              alpha: aB,
              width: zB
            } : null
          }(BB.qm(nB)), zB.set(nB, dB)), dB
        }));
        if (dB.every((BB => null === BB))) return kz;
        const IB = pu(Math.max(...dB.map((BB => {
            var jB;
            return null !== (jB = null === BB || void 0 === BB ? void 0 : BB.width) && void 0 !== jB ? jB : 1
          })))),
          NB = new Uint32Array(Sz(IB)).fill(4294967295),
          uB = dB.map((BB => null === BB ? NB : au(BB.alpha, BB.width, BB.width, IB)));
        return {
          kind: "cutout",
          key: `cutout:${IB}:${uB.map((BB=>BB.join(","))).join("|")}`,
          size: IB,
          faces: uB
        }
      }
      allocate(BB) {
        if (this.nextCaster >= Mz) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const jB = this.nextCaster++;
        if (this.writeCaster(jB, Gz, 0, 0, 0), "shape" === BB.kind) {
          const zB = this.allocateMask(BB.mask.length);
          zB >= 0 && (this.sink(zB, BB.mask), this.writeCaster(jB, Lz, zB, 0, 8))
        } else if ("cutout" === BB.kind) {
          const zB = Sz(BB.size),
            QB = this.allocateMask(6 * zB);
          if (QB >= 0) {
            const nB = new Uint32Array(6 * zB);
            BB.faces.forEach(((BB, jB) => {
              nB.set(BB, jB * zB)
            })), this.sink(QB, nB), this.writeCaster(jB, tz, QB, 0, BB.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(jB, BB.planes).finally((() => {
          this.planesLoading--
        })));
        return jB
      }
      async loadPlanes(BB, jB) {
        const zB = await Promise.all(jB.map((BB => this.texture(BB.texture))));
        if (zB.some((BB => null === BB))) return;
        const QB = zB,
          nB = pu(Math.max(...QB.map((BB => Math.min(BB.width, BB.height))))),
          dB = Sz(nB),
          IB = this.allocateMask(jB.length * (4 + dB));
        if (IB < 0) return;
        const NB = new Uint32Array(jB.length * (4 + dB)),
          uB = 4 * jB.length;
        jB.forEach(((BB, jB) => {
          const zB = IB + uB + jB * dB;
          NB.set(function(BB, jB) {
            const [zB, QB] = BB.tangent, nB = Math.hypot(zB, QB) || 1, dB = zB / nB, IB = QB / nB, NB = BB.centre[0] * IB - BB.centre[1] * dB, uB = new Uint32Array(4);
            return new Float32Array(uB.buffer, 0, 3).set([dB, IB, NB]), uB[3] = jB, uB
          }(BB, zB), 4 * jB), NB.set(au(QB[jB].alpha, QB[jB].width, QB[jB].height, nB), uB + jB * dB)
        })), this.sink(IB, NB), this.writeCaster(BB, gz, IB, jB.length, nB)
      }
      texture(BB) {
        let jB = this.textures.get(BB);
        return jB || (jB = this.loadTexture(BB).catch((jB => (this.warn(`Sun shadows: no mask for ${BB}: ${jB instanceof Error?jB.message:String(jB)}`), null))), this.textures.set(BB, jB)), jB
      }
      allocateMask(BB) {
        if (this.nextMaskWord + BB > Ez) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const jB = 32768 + this.nextMaskWord;
        return this.nextMaskWord += BB, jB
      }
      writeCaster(BB, jB, zB, QB, nB) {
        this.sink(0 + 4 * BB, Uint32Array.of(jB, zB, QB, nB))
      }
      warnOnce(BB) {
        this.warned.has(BB) || (this.warned.add(BB), this.warn(BB))
      }
    }
    var su = zB(2938);

    function Ju(BB) {
      return !BB.Hm && !BB.pE && !BB.nm
    }

    function mu() {
      return {
        bricks: new Uint32Array(Uz),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Nz)
      }
    }
    class yu {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = BB, this.writeVoxels = jB, this.writePool = zB, this.warn = QB, this.eyeChunk = null, this.slotChunk = new Array(jz).fill(null), this.slotVersion = new Float64Array(jz).fill(-1), this.slotPool = new Array(jz).fill(null), this.starved = new Uint8Array(jz), this.queue = [], this.queued = new Uint8Array(jz), this.queueSorted = !0, this.freePool = new Uint32Array(iz), this.freeCount = iz, this.casterTable = null, this.warnedPool = !1, this.scratch = mu(), this.victimScratch = mu(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * jz), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let nB = 0; nB < iz; nB++) this.freePool[nB] = 65535 - nB
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return iz - this.freeCount
      }
      chunkAdded(BB) {
        if (null === this.eyeChunk || !this.inRadius(BB.i, BB.j, BB.k)) return;
        const jB = Jz(BB.i, BB.j, BB.k);
        this.slotChunk[jB] = BB, this.slotVersion[jB] = -1, this.enqueue(jB)
      }
      update(BB, jB, zB) {
        const QB = this.casters.blockCaster;
        if (QB !== this.casterTable) {
          this.casterTable = QB;
          for (let BB = 0; BB < jz; BB++) this.slotVersion[BB] = -1, this.slotChunk[BB] && this.enqueue(BB)
        }
        const nB = Math.floor(BB[0] / 32),
          dB = Math.floor(BB[1] / 32),
          IB = Math.floor(BB[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== nB || this.eyeChunk[1] !== dB || this.eyeChunk[2] !== IB) && (this.eyeChunk = [nB, dB, IB], this.follow(jB), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let NB = 0; NB < jz; NB++) {
          const BB = this.slotChunk[NB];
          BB && (BB.aE || BB.Nm !== this.slotVersion[NB]) && this.enqueue(NB)
        }
        this.drain(zB), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(BB, jB) {
        this.records.set(jB, 4 * BB), this.windowTopStale = !0, this.writeVoxels(4 * BB, jB)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const BB = this.records;
        let jB = -1 / 0;
        for (let QB = 0; QB < BB.length; QB += 4) {
          const zB = 255 & BB[QB + 3];
          zB !== nz && zB !== dz || !this.inRadius(BB[QB], BB[QB + 1], BB[QB + 2]) || (jB = Math.max(jB, BB[QB + 1] * Rj + (BB[QB + 3] >>> 8)))
        }
        const zB = jB === -1 / 0 ? 1 : jB + pz;
        zB !== this.windowTop[0] && (this.windowTop[0] = zB, this.writeVoxels(az, this.windowTop))
      }
      follow(BB) {
        const jB = this.eyeChunk,
          [zB, QB, nB] = Oj;
        for (let IB = -nB; IB <= nB; IB++)
          for (let nB = -QB; nB <= QB; nB++)
            for (let QB = -zB; QB <= zB; QB++) {
              var dB;
              const zB = jB[0] + QB,
                NB = jB[1] + nB,
                uB = jB[2] + IB,
                UB = Jz(zB, NB, uB),
                aB = this.slotChunk[UB];
              if (aB && !aB.aE && aB.i === zB && aB.j === NB && aB.k === uB) continue;
              const pB = null !== (dB = BB(zB, NB, uB)) && void 0 !== dB ? dB : null;
              aB && (aB.i !== zB || aB.j !== NB || aB.k !== uB) && this.slotPool[UB] && (this.release(UB), this.record.fill(0), this.writeRecord(UB, this.record)), this.slotChunk[UB] = pB, this.slotVersion[UB] = -1, (pB || aB) && this.enqueue(UB)
            }
      }
      requeueStarved() {
        for (let BB = 0; BB < jz; BB++) this.starved[BB] && this.slotChunk[BB] && this.enqueue(BB)
      }
      enqueue(BB) {
        this.queued[BB] || (this.queued[BB] = 1, this.queue.push(BB), this.queueSorted = !1)
      }
      drain(BB) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const BB = new Map;
          for (const jB of this.queue) BB.set(jB, this.slotDistance(jB));
          this.queue.sort(((jB, zB) => BB.get(zB) - BB.get(jB))), this.queueSorted = !0
        }
        const jB = performance.now();
        let zB = 0;
        const QB = [];
        for (; this.queue.length > 0 && (0 === zB || performance.now() - jB < BB);) {
          const BB = this.queue.pop(),
            jB = this.slotChunk[BB];
          !jB || jB.aE || Ju(jB) ? (this.queued[BB] = 0, this.encodeSlot(BB), zB++) : QB.push(BB)
        }
        for (let nB = QB.length - 1; nB >= 0; nB--) this.queue.push(QB[nB])
      }
      slotDistance(BB) {
        const jB = this.slotChunk[BB],
          zB = this.eyeChunk;
        return jB ? Math.max(Math.abs(jB.i - zB[0]), Math.abs(jB.j - zB[1]), Math.abs(jB.k - zB[2])) : 0
      }
      inRadius(BB, jB, zB) {
        const QB = this.eyeChunk,
          [nB, dB, IB] = Oj;
        return Math.abs(BB - QB[0]) <= nB && Math.abs(jB - QB[1]) <= dB && Math.abs(zB - QB[2]) <= IB
      }
      release(BB) {
        const jB = this.slotPool[BB];
        if (jB) {
          for (let BB = jB.length - 1; BB >= 0; BB--) this.freePool[this.freeCount++] = jB[BB];
          this.slotPool[BB] = null
        }
      }
      encodeSlot(BB) {
        var jB, zB, QB, nB, dB;
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          NB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const uB = null !== (jB = null === (zB = this.slotPool[BB]) || void 0 === zB ? void 0 : zB.length) && void 0 !== jB ? jB : 0;
        this.release(BB), this.starved[BB] = 0;
        const UB = this.slotChunk[BB],
          aB = this.record;
        if (!UB || UB.aE || !UB.Vr) return this.slotChunk[BB] = null, this.slotVersion[BB] = -1, aB.fill(0), this.writeRecord(BB, aB), void(uB > 0 && this.requeueStarved());
        this.slotVersion[BB] = UB.Nm;
        const pB = this.encodeBricks(UB, BB, IB, NB);
        aB[0] = UB.i, aB[1] = UB.j, aB[2] = UB.k, aB[3] = pB, this.writeRecord(BB, aB), null === (QB = this.encoded) || void 0 === QB || QB.call(this, UB), NB && (null !== (nB = null === (dB = this.slotPool[BB]) || void 0 === dB ? void 0 : dB.length) && void 0 !== nB ? nB : 0) < uB && this.requeueStarved()
      }
      encodeBricks(BB, jB, zB, QB) {
        if (BB.iJ) return Qz;
        const nB = this.casters.blockCaster,
          {
            data: dB,
            stride: IB,
            offset: NB
          } = BB.Vr,
          [uB, UB, aB] = IB,
          pB = Rj,
          {
            bricks: rB,
            cells: sB,
            special: JB
          } = zB;
        rB.fill(0), JB.fill(0);
        let mB = 0,
          yB = 0,
          kB = 0;
        for (let GB = 0; GB < pB; GB++) {
          const jB = GB >> 2,
            zB = 3 & GB,
            QB = BB.ls[GB],
            IB = QB === su.d ? -1 : QB < nB.length ? nB[QB] : 0;
          if (0 !== IB)
            for (let BB = 0; BB < pB; BB++) {
              const QB = BB >> 2,
                LB = 3 & BB;
              let gB = NB + BB * uB + GB * UB;
              for (let BB = 0; BB < pB; BB++, gB += aB) {
                let NB = IB;
                if (NB < 0) {
                  const BB = dB[gB];
                  if (NB = BB < nB.length ? nB[BB] : 0, 0 === NB) continue
                }
                const uB = mz(QB, jB, BB >> 2),
                  UB = yz(LB, zB, 3 & BB);
                rB[3 * uB + (UB >>> 5)] |= 1 << (31 & UB), sB[uB * Iz + UB] = NB, mB++, kB = GB, NB === kz ? yB++ : JB[uB] = 1
              }
            }
        }
        return 0 === mB ? Qz : 32768 === yB ? nz | kB << 8 : (this.writePoolEntries(jB, zB, QB), this.writeVoxels(uz + jB * Uz, rB), dz | kB << 8)
      }
      writePoolEntries(BB, jB, zB) {
        const {
          bricks: QB,
          cells: nB,
          special: dB
        } = jB, IB = this.entry;
        let NB = 0;
        for (let aB = 0; aB < Nz; aB++) NB += dB[aB];
        if (0 === NB) return;
        zB && this.freeCount < NB && this.evictBeyond(BB, NB);
        const uB = new Uint32Array(zB ? Math.min(NB, this.freeCount) : 0);
        let UB = 0;
        for (let aB = 0; aB < Nz; aB++) {
          if (!dB[aB]) continue;
          const zB = 3 * aB;
          if (UB === uB.length) {
            this.dropSpecials(jB, aB), this.starved[BB] = 1;
            continue
          }
          const NB = this.freePool[--this.freeCount];
          uB[UB++] = NB;
          for (let BB = 0; BB < Iz; BB++) {
            const jB = QB[zB + (BB >>> 5)] >>> (31 & BB) & 1 ? nB[aB * Iz + BB] : 0;
            1 & BB ? IB[BB >> 1] |= jB << 16 : IB[BB >> 1] = jB
          }
          QB[zB + 2] = NB + 1, this.writePool(qz + 32 * NB, IB)
        }
        uB.length > 0 && (this.slotPool[BB] = uB)
      }
      evictBeyond(BB, jB) {
        const zB = this.slotDistance(BB),
          QB = [];
        for (let nB = 0; nB < jz; nB++) nB !== BB && this.slotPool[nB] && this.slotDistance(nB) > zB && QB.push(nB);
        QB.sort(((BB, jB) => this.slotDistance(jB) - this.slotDistance(BB)));
        for (const nB of QB) {
          if (this.freeCount >= jB) return;
          const BB = this.slotChunk[nB];
          BB && !BB.aE && BB.Vr && (BB.Nm === this.slotVersion[nB] || Ju(BB)) && this.encodeSlot(nB, this.victimScratch, !1)
        }
      }
      dropSpecials(BB, jB) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const zB = 3 * jB;
        for (let QB = 0; QB < Iz; QB++) BB.cells[jB * Iz + QB] !== kz && (BB.bricks[zB + (QB >>> 5)] &= ~(1 << (31 & QB)))
      }
    }
    var ku = zB(37578);
    class Gu {
      constructor(BB) {
        this.device = BB, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Az, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.zr = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = BB.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = BB.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(BB, jB, zB) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: QB
        } = this;
        QB.Ds(BB, jB), zB.forEachSunShadowCaster((BB => {
          this.add(BB)
        })), QB.finish();
        const nB = 0 === QB.parts;
        if (nB && this.uploadedEmpty) return;
        this.uploadedEmpty = nB;
        const {
          queue: dB
        } = this.device, {
          words: IB
        } = QB;
        dB.writeBuffer(this.frameBuffer, 0, IB, 0, 16385), QB.refs > 0 && dB.writeBuffer(this.frameBuffer, 65540, IB, Dz, QB.refs), nB || dB.writeBuffer(this.frameBuffer, 327684, IB, Fz, QB.parts * Hz)
      }
      add(BB) {
        const jB = this.gridFor(BB);
        if (!jB) return;
        const {
          frame: zB
        } = this, {
          zr: QB,
          worldAt: nB,
          instances: dB,
          instanceCount: IB,
          thin: NB
        } = BB;
        if (dB)
          for (let uB = 0; uB < IB; uB++) NB ? (Pz(dB, 16 * uB, QB, nB, this.zr), zB.add(jB, this.zr)) : zB.add(jB, dB, 16 * uB);
        else zB.add(jB, QB, nB)
      }
      gridFor(BB) {
        let {
          geometry: jB,
          indexed: zB,
          first: QB,
          count: nB,
          skip: dB
        } = BB, IB = this.grids.get(jB);
        IB || (IB = new Map, this.grids.set(jB, IB));
        const NB = `${zB?QB:-1-QB}:${nB}:${null!==dB&&void 0!==dB?dB:""}`;
        let uB = IB.get(NB);
        if (void 0 !== uB || this.gridsFull) return uB;
        const UB = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = UB + 2;
        else if (UB > this.bakeDeadline) return;
        return uB = this.bake(jB, zB, QB, nB, dB), void 0 !== uB && IB.set(NB, uB), uB
      }
      bake(BB, jB, zB, QB, nB) {
        const dB = BB.vertexAttributes.find((BB => "position" === BB.kind)),
          IB = dB ? function(BB, jB, zB, QB) {
            let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const dB = BB => jB ? jB[zB + BB] : zB + BB,
              IB = BB => null !== nB && [0, 1, 2].some((jB => {
                const zB = dB(BB + jB);
                return zB >= nB[0] && zB < nB[1]
              })),
              NB = [1 / 0, 1 / 0, 1 / 0],
              uB = [-1 / 0, -1 / 0, -1 / 0];
            for (let GB = 0; GB + 2 < QB; GB += 3)
              if (!IB(GB))
                for (let jB = 0; jB < 3; jB++) {
                  const zB = dB(GB + jB);
                  for (let jB = 0; jB < 3; jB++) NB[jB] = Math.min(NB[jB], BB[3 * zB + jB]), uB[jB] = Math.max(uB[jB], BB[3 * zB + jB])
                }
            const UB = Math.max(uB[0] - NB[0], uB[1] - NB[1], uB[2] - NB[2]);
            if (!(UB > 0)) return null;
            const aB = UB / 64,
              pB = [0, 0, 0],
              rB = [0, 0, 0],
              sB = [0, 0, 0];
            for (let GB = 0; GB < 3; GB++) pB[GB] = Math.min(65, Math.ceil((uB[GB] - NB[GB]) / aB) + 1), rB[GB] = NB[GB] - aB / 2, sB[GB] = rB[GB] + pB[GB] * aB;
            const JB = new Uint32Array(Math.ceil(pB[0] * pB[1] * pB[2] / 32)),
              mB = new Float64Array(9),
              yB = [0, 0, 0],
              kB = [0, 0, 0];
            for (let GB = 0; GB + 2 < QB; GB += 3)
              if (!IB(GB)) {
                for (let jB = 0; jB < 3; jB++) {
                  const zB = dB(GB + jB);
                  for (let QB = 0; QB < 3; QB++) mB[3 * jB + QB] = BB[3 * zB + QB]
                }
                for (let BB = 0; BB < 3; BB++) {
                  const jB = Math.min(mB[BB], mB[3 + BB], mB[6 + BB]),
                    zB = Math.max(mB[BB], mB[3 + BB], mB[6 + BB]);
                  yB[BB] = Math.max(0, Math.floor((jB - rB[BB]) / aB - 1e-6)), kB[BB] = Math.min(pB[BB] - 1, Math.floor((zB - rB[BB]) / aB + 1e-6))
                }
                for (let BB = yB[2]; BB <= kB[2]; BB++)
                  for (let jB = yB[1]; jB <= kB[1]; jB++)
                    for (let zB = yB[0]; zB <= kB[0]; zB++)
                      if (Wz(mB, rB[0] + (zB + .5) * aB, rB[1] + (jB + .5) * aB, rB[2] + (BB + .5) * aB, aB / 2)) {
                        const QB = zB + pB[0] * (jB + pB[1] * BB);
                        JB[QB >>> 5] |= 1 << (31 & QB)
                      }
              } return {
              words: JB,
              lo: rB,
              hi: sB,
              cell: aB,
              dims: pB
            }
          }((0, ku.k)(dB, BB.vertexCount), jB ? BB.indexData : null, zB, QB, nB) : null;
        if (!IB) return null;
        const {
          words: NB,
          ...uB
        } = IB;
        if (this.gridTop + NB.length > Vz) return void(this.gridsFull = !0);
        const UB = this.gridTop;
        return this.gridTop += NB.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * UB, NB), {
          ...uB,
          at: UB
        }
      }
    }
    const Lu = Math.cos(1 * Math.PI / 180);

    function gu(BB, jB) {
      return BB[0] * jB[0] + BB[1] * jB[1] + BB[2] * jB[2] < Lu
    }
    async function tu(BB) {
      const {
        pixels: jB,
        width: zB,
        height: QB
      } = await Bj(BB), nB = new Uint8Array(zB * QB);
      for (let dB = 0; dB < nB.length; dB++) nB[dB] = jB[4 * dB + 3];
      return {
        width: zB,
        height: QB,
        alpha: nB
      }
    }
    class Su {
      constructor(BB, jB) {
        this.device = BB, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(lz.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = BB.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = BB.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * rz,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = BB.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [zB, QB, nB] = lz.p;
        this.volume = BB.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: zB,
            height: QB,
            depthOrArrayLayers: nB
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
          size: lz.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = jB ? new Gu(BB) : null, this.entityStandIn = jB ? null : BB.createBuffer({
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
        var BB, jB;
        const zB = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || zB.push("Lite sun shadow volume pipeline compiling");
        const QB = null !== (BB = null === (jB = this.casters) || void 0 === jB ? void 0 : jB.planesLoading) && void 0 !== BB ? BB : 0;
        return QB > 0 && zB.push(`${QB} Lite sun shadow plane casters loading their textures`), zB
      }
      entries() {
        var BB, jB, zB, QB;
        const nB = bj.v;
        return [{
          binding: nB.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: nB.Vr,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: nB.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: nB.volume,
          resource: this.volumeView
        }, {
          binding: nB.sampler,
          resource: this.volumeSampler
        }, {
          binding: nB.entities,
          resource: {
            buffer: null !== (BB = null === (jB = this.entities) || void 0 === jB ? void 0 : jB.frameBuffer) && void 0 !== BB ? BB : this.entityStandIn
          }
        }, {
          binding: nB.entityGrids,
          resource: {
            buffer: null !== (zB = null === (QB = this.entities) || void 0 === QB ? void 0 : QB.gridBuffer) && void 0 !== zB ? zB : this.entityStandIn
          }
        }]
      }
      prepare(BB, jB, zB) {
        var QB;
        this.entitiesThisFrame = !1;
        const nB = null !== (QB = null === zB || void 0 === zB ? void 0 : zB.sunShadowReach()) && void 0 !== QB ? QB : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!zB || !nB.sunShadow && !nB.airShadow) return void(this.volumeHolds = null);
        if (BB.zr.aBB !== Rj) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${BB.zr.aBB}; everything is lit.`)));
        const dB = this.start(BB);
        this.casters.update(BB.Gs, BB.Gs.Ms.length);
        const IB = BB.qr;
        for (let rB = 0; rB < 3; rB++) this.eye[rB] = jB[rB] + IB[rB];
        const NB = (0, lz.w)(this.eye);
        this.staleNear = NB;
        const uB = BB.zr.Fm;
        dB.update(this.eye, ((BB, jB, zB) => uB.Ym(BB, jB, zB)), 1);
        const UB = (0, lz.r)(zB.J7()),
          aB = dB.eyeChunk,
          pB = this.uniformInts;
        for (let rB = 0; rB < 3; rB++) pB[rB] = aB[rB], pB[4 + rB] = NB[rB];
        this.entitiesThisFrame = null !== this.entities && nB.sunShadow, this.entitiesThisFrame && Zz(this.uniformFloats, 8, jB, UB), null !== this.volumeHolds && (this.castersWritten || gu(UB, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(NB, UB, aB)
      }
      markStale(BB) {
        const jB = this.staleNear,
          zB = Rj,
          QB = [BB.i * zB, BB.j * zB, BB.k * zB];
        for (let dB = 0; dB < 3; dB++)
          if (QB[dB] + zB <= jB[dB] - zB || QB[dB] >= jB[dB] + lz.p[dB] + zB) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const nB = this.stale;
        for (let dB = 0; dB < nB.length; dB += 4)
          if (nB[dB] === BB.i && nB[dB + 1] === BB.j && nB[dB + 2] === BB.k) return void(nB[dB + 3] = this.swept);
        if (16 === nB.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        nB.push(BB.i, BB.j, BB.k, this.swept)
      }
      writeStale() {
        const BB = this.swept,
          jB = this.stale;
        this.staleAll && BB - this.staleAllSwept >= lz.i && (this.staleAll = !1, jB.length = 0);
        let zB = 0;
        for (let nB = 0; nB < jB.length; nB += 4)
          if (BB - jB[nB + 3] < lz.i) {
            for (let BB = 0; BB < 4; BB++) jB[zB + BB] = jB[nB + BB];
            zB += 4
          } jB.length = zB;
        const QB = this.uniformInts;
        QB[3] = this.staleAll ? 5 : zB / 4;
        for (let nB = 0; nB < 4; nB++)
          for (let BB = 0; BB < 3; BB++) QB[16 + 4 * nB + BB] = 4 * nB < zB ? jB[4 * nB + BB] * Rj : 0
      }
      writeUniform() {
        const BB = this.uniformInts;
        let jB = this.uniformWritten;
        if (jB) {
          let zB = !0;
          for (let QB = 0; QB < BB.length && zB; QB++) zB = BB[QB] === jB[QB];
          if (zB) return
        }
        jB ??= this.uniformWritten = new Int32Array(BB.length), jB.set(BB), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(BB) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, BB)
      }
      computeVolume(BB, jB, zB) {
        const QB = this.buildVolumePass();
        if (!QB) return void(this.volumeHolds = null);
        const nB = (0, lz.t)(this.volumeHolds, BB);
        this.volumeHolds = BB;
        const dB = 1 === nB.length && nB[0].size.every(((BB, jB) => BB === lz.p[jB])),
          IB = this.sweptChunk,
          NB = this.sweptLight,
          uB = jB[0] !== NB[0] || jB[1] !== NB[1] || jB[2] !== NB[2],
          UB = zB[0] !== IB[0] || zB[1] !== IB[1] || zB[2] !== IB[2],
          aB = uB && gu(jB, NB);
        if ((dB || this.written || UB || aB) && (this.fastLeft = lz.i), dB || this.written || uB || UB) {
          this.written = !1;
          for (let BB = 0; BB < 3; BB++) IB[BB] = zB[BB], NB[BB] = jB[BB];
          this.sweepLeft = dB ? 0 : lz.i
        }
        if (dB ? this.swept += lz.i : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, nB.push(...(0, lz.y)(BB, this.slice)), this.slice = (this.slice + 1) % lz.i, this.swept++), 0 === nB.length) return;
        const pB = (0, lz.A)(this.workData, jB, nB);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const rB = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          sB = rB.beginComputePass({
            label: "sun-shadow-volume"
          });
        sB.setPipeline(QB.pipeline), sB.setBindGroup(Kz.group, QB.bindGroup), sB.dispatchWorkgroups(Math.ceil(pB / lz.m)), sB.end(), this.device.queue.submit([rB.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const BB = Kz,
          jB = GPUShaderStage.COMPUTE,
          zB = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: BB.uniform,
              visibility: jB,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: BB.Vr,
              visibility: jB,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: BB.special,
              visibility: jB,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: BB.work,
              visibility: jB,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: BB.volume,
              visibility: jB,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          QB = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: zB,
            entries: [{
              binding: BB.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: BB.Vr,
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
            bindGroupLayouts: [zB]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Cz()
            }),
            entryPoint: "main"
          }
        }).then((BB => {
          this.volumePass = {
            pipeline: BB,
            bindGroup: QB
          }
        }), (BB => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(BB)}`)
        })), null
      }
      start(BB) {
        if (this.window) return this.window;
        const jB = (BB, jB) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * BB, jB)
        };
        this.casters = new ru(((BB, zB) => {
          this.castersWritten = !0, jB(BB, zB)
        }), tu);
        const zB = new yu(this.casters, ((BB, jB) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * BB, jB)
        }), jB);
        zB.encoded = BB => {
          this.markStale(BB)
        };
        const QB = BB => {
          zB.chunkAdded(BB)
        };
        return BB.zr.on("chunkAdded", QB), this.stopWindow = () => {
          BB.zr.removeListener("chunkAdded", QB)
        }, this.window = zB, zB
      }
    }
    var Mu = zB(38800),
      Eu = zB(38802);
    const iu = 0,
      qu = 3,
      fu = 4,
      ou = 5;

    function Hu(BB, jB, zB, QB) {
      BB.drawOffset(jB, QB + iu), jB[QB + qu] = BB.drawTime(), zB[QB + fu] = BB.ring.drawStart(), zB[QB + ou] = BB.ring.drawCount()
    }
    const Du = `\n${AQ}\n\nconst MAX_STOPS = ${Eu.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Eu.d/4}>,\n\tcolor1: array<vec4f, ${Eu.d}>,\n\tcolor2: array<vec4f, ${Eu.d}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Eu.d}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Eu.d}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var Fu = zB(41693);
    class Yu {
      constructor(BB, jB, zB, QB) {
        this.device = BB, this.system = jB, this.frameIndex = zB, this.bindings = QB, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Fu.g)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (BB, jB) => {
          this.device.queue.writeBuffer(this.ring, BB * Eu.f * 4, this.system.ring.records, BB * Eu.f, (jB - BB) * Eu.f)
        };
        const {
          name: nB
        } = jB;
        this.ring = BB.createBuffer({
          label: `particles-${nB}`,
          size: jB.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = BB.createBuffer({
          label: `particles-uniforms-${nB}`,
          size: 4 * Eu.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(BB) {
        const jB = (0, Fu.d)(this.system, this.uniformBits, BB);
        jB && (this.uniformBits = jB, this.device.queue.writeBuffer(this.uniforms, 0, jB))
      }
      bind() {
        const {
          system: BB
        } = this, jB = this.texture;
        (0, Fu.o)(BB, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${BB.name}`,
          size: [Eu.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Eu.k
        }, [Eu.k, 1]));
        const zB = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === jB.view && this.boundSampler === jB.sampler && this.boundRamp === zB || (this.boundView = jB.view, this.boundSampler = jB.sampler, this.boundRamp = zB, this.bindGroup = this.device.createBindGroup({
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
            resource: jB.sampler
          }, {
            binding: 3,
            resource: jB.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: zB
          }]
        }))
      }
      destroy() {
        var BB;
        this.ring.destroy(), this.uniforms.destroy(), null === (BB = this.ramp) || void 0 === BB || BB.destroy()
      }
    }
    class Vu {
      constructor(BB, jB) {
        this.device = BB, this.resources = jB, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Fj.b)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (BB, jB) => (this.bindTarget(jB), {
            renderable: this.renderable,
            pipeline: oj(this.device, jB),
            draw: BB => jB === this.preparedTarget ? this.draw(BB) : 0
          })
        }
      }
      rebind(BB) {
        this.device = BB, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [jB, zB] of this.systems) {
          const QB = new Yu(BB, jB, zB.frameIndex, this.bindings),
            nB = jB.ring.drawCount();
          nB > 0 && QB.upload(0, nB), this.systems.set(jB, QB)
        }
      }
      build() {
        const {
          device: BB
        } = this, jB = BB.createBindGroupLayout({
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
          bindGroupLayouts: [Mj(BB), jB, this.frameLayout]
        }), this.module = BB.createShaderModule({
          label: "particles",
          code: Du
        });
        const zB = BB.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        BB.queue.writeTexture({
          texture: zB
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: jB,
          rampSampler: BB.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: zB.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get OQB() {
        return this.systems.size
      }
      reset() {
        for (const BB of this.systems.keys()) BB.reset()
      }
      describePendingWork() {
        return (0, Mu.g)(this.systems.keys(), "Lite")
      }
      TY(BB, jB) {
        const zB = new Mu.c(BB, jB, this);
        return this.systems.set(zB, new Yu(this.device, zB, this.allocateFrameIndex(), this.bindings)), zB
      }
      I3(BB, jB) {
        for (const zB of this.systems.keys()) zB.I3(BB, jB)
      }
      canDraw(BB) {
        const jB = this.systems.get(BB),
          zB = BB.texture ? this.resources.boundTexture(BB.texture) : null;
        if (!jB || !zB || !this.targetPipelines) return !1;
        if (jB.texture = zB, jB.pipelines.length = 0, !nj(BB.blendMode)) return this.warnOnce(`blend:${BB.blendMode}`, `particle blend mode ${BB.blendMode} is not drawn (${BB.name})`), !0;
        const QB = (0, xB.g)(BB.blendMode);
        for (const nB of QB) {
          const BB = this.pipelineFor(nB);
          if (!1 === BB) return jB.pipelines.length = 0, !0;
          BB && jB.pipelines.push(BB)
        }
        return jB.pipelines.length === QB.length
      }
      disposeStopped(BB) {
        BB.dispose()
      }
      remove(BB) {
        const jB = this.systems.get(BB);
        jB && (this.systems.delete(BB), jB.destroy(), this.freeFrameIndices.push(jB.frameIndex))
      }
      prepare(BB) {
        const jB = BB.animationRatio || 1;
        Hj(this.renderable._worldCenter, BB, ij), this.preparedTarget = this.target, this.draws.length = 0;
        let zB = 0;
        for (const QB of this.systems.values()) {
          const BB = QB.system;
          if (!BB.animateIfActive(jB)) continue;
          if (BB.ring.takeUploads(QB.upload), !BB.hasLiveParticles() || 0 === QB.pipelines.length) continue;
          QB.writeUniforms(this.warnOnce), QB.bind();
          const nB = 64 * QB.frameIndex;
          QB.count = BB.ring.drawCount(), Hu(BB, this.frameData, this.frameBits, nB), zB = Math.max(zB, nB + 64), this.draws.push(QB)
        }
        zB > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, zB)
      }
      draw(BB) {
        let jB = 0,
          zB = null;
        for (const QB of this.draws) {
          BB.setBindGroup(1, QB.bindGroup), BB.setBindGroup(2, this.frameBindGroup, [256 * QB.frameIndex]);
          for (const nB of QB.pipelines) nB !== zB && (BB.setPipeline(nB), zB = nB), BB.draw(4, QB.count), jB++
        }
        return jB
      }
      bindTarget(BB) {
        this.target = BB;
        const jB = `${BB._colorFormat}|${BB._depthStencilFormat}|${BB._depthCompare}|${BB._sampleCount}`;
        let zB = this.pipelines.get(jB);
        zB || (zB = new Map, this.pipelines.set(jB, zB)), this.targetPipelines = zB
      }
      pipelineFor(BB) {
        var jB;
        const zB = this.targetPipelines,
          QB = zB.get(BB);
        if (void 0 !== QB) return QB;
        zB.set(BB, null);
        const nB = this.target,
          dB = BB === xB.d,
          IB = null !== (jB = nB._depthCompare) && void 0 !== jB ? jB : Ej,
          {
            device: NB
          } = this;
        return NB.createRenderPipelineAsync({
          label: `particles-${BB}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Gj({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: dB ? 1 : 0
            }
          }, nB, dj((0, xB.f)(BB))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: nB._depthStencilFormat ? {
            format: nB._depthStencilFormat,
            depthCompare: IB,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: nB._sampleCount
          }
        }).then((jB => {
          zB.set(BB, jB)
        }), (jB => {
          zB.set(BB, !1), console.error("Lite particle pipeline failed", jB), aj(NB, "particles", `blend-${BB}`, jB)
        })), null
      }
      allocateFrameIndex() {
        const BB = this.freeFrameIndices.pop();
        if (void 0 !== BB) return BB;
        const jB = this.nextFrameIndex++;
        if (64 * (jB + 1) > this.frameData.length) {
          const BB = new Float32Array(2 * this.frameData.length);
          BB.set(this.frameData), this.frameData = BB, this.frameBits = new Uint32Array(BB.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return jB
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
    class hu {
      constructor(BB, jB, zB, QB, nB) {
        this.lite = BB, this.canvas = jB, this.info = zB, this.resources = nB, this.jQB = !1, this.needPOTTextures = !1, this.o9 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = jB.width, this.renderHeight = jB.height, this.caps = {
          maxTextureSize: QB.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: QB.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(BB) {
        this.lite = BB, (0, PB.l)(BB, this.renderWidth, this.renderHeight)
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
      setSize(BB, jB) {
        if (this.renderWidth === BB && this.renderHeight === jB) return !1;
        const zB = this.renderWidth,
          QB = this.renderHeight;
        this.renderWidth = BB, this.renderHeight = jB;
        const nB = this.lite;
        if (null === nB) return !0;
        try {
          (0, PB.l)(nB, BB, jB)
        } catch (dB) {
          if (dB instanceof DOMException && "InvalidStateError" === dB.name) {
            this.renderWidth = zB, this.renderHeight = QB;
            try {
              (0, PB.l)(nB, zB, QB)
            } catch {
              this.canvas.width = zB, this.canvas.height = QB
            }
            return console.warn("WebGPU could not allocate render targets for resize", BB, jB, dB.message), !1
          }
          throw dB
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
      gL() {
        const BB = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : BB - this.lastFrameTime, this.lastFrameTime = BB
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(BB, jB) {
        const zB = document.createElement("canvas");
        return zB.width = BB, zB.height = jB, zB
      }
      U1(BB, jB) {
        var zB;
        return null !== (zB = this.resources.U1.get(BB)) && void 0 !== zB ? zB : new rj(this.resources, BB, jB)
      }
      atlasArrays(BB) {
        return this.resources.atlasArrays(BB)
      }
    }
    class Xu {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(BB) {
        this.fov = BB.fov, this.nearPlane = BB.near, this.farPlane = BB.far;
        const jB = BB.worldMatrix;
        for (let zB = 0; zB < 16; zB++)
          if (this.worldMatrix[zB] !== jB[zB]) return this.worldMatrix.set(jB), void this.worldMatrixVersion++
      }
    }
    class Zu {
      constructor(BB, jB, zB, QB) {
        this.canvas = jB, this.options = zB, this.YjB = void 0, this.backendName = "WebGPU (Lite)", this.M_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Xu, this.lastFrameTime = 0, this.engine = void 0, this.ny = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.pm = null, this.firstTerrain = null, this.trialFrames = 0, this.install(BB);
        const {
          resources: nB,
          meshes: dB
        } = BB;
        this.resources = nB, this.particles = BB.particles, this.YjB = new hu(BB.engine, jB, QB, BB.device.limits, nB), (0, fB.I)({
          DN: BB => {
            FB(BB) && nB.textureSlot(BB)
          },
          loaded: BB => FB(BB) ? nB.textureLoaded(BB) : null,
          canvasUpdated: (BB, jB, zB) => {
            FB(BB) && nB.canvasUpdated(BB, jB, zB)
          }
        }), this.M_ = dB.M_, this.modelMeshes = dB.modelMeshes
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
        this.engine = BB.engine, this.ny = BB.ny, this.sceneTask = BB.sceneTask, this.device = BB.device, this.liteTerrain = BB.terrain, this.meshes = BB.meshes, this.sunShadow = BB.sunShadow;
        const jB = new lB(BB.device.lost);
        this.refusals = jB, jB.deviceLost.then((() => {
          var jB;
          jB = BB.device, uj.add(jB)
        })), BB.ny.camera = this.camera
      }
      async rebuild() {
        var BB, jB, zB, QB, nB;
        const dB = await Wu();
        this.halted = !0, this.liteTerrain.retire(), null === (BB = this.sunShadow) || void 0 === BB || BB.dispose(), this.YjB.detach();
        try {
          (0, WB.b)(this.engine)
        } catch (aB) {
          console.warn("Lite: disposing the lost device's engine threw", aB)
        }
        const IB = {
            width: this.YjB.renderWidth,
            height: this.YjB.renderHeight
          },
          NB = await eu(this.canvas, this.options, IB, dB),
          uB = gj(NB),
          UB = lu(uB);
        try {
          this.resources.rebind(NB, uB), this.particles.rebind(uB), this.M_.dropSteady();
          const BB = {
              resources: this.resources,
              particles: this.particles,
              M_: this.M_,
              modelMeshes: this.modelMeshes
            },
            jB = await wu(NB, uB, this.options, BB),
            zB = UB();
          if (null !== zB) throw new Error(`WebGPU device lost while Lite was rebuilding (${zB.reason}): ${zB.message}`);
          const {
            r: QB,
            g: nB,
            b: dB
          } = this.ny.clearColor;
          this.install(jB), this.setClearColour(QB, nB, dB), this.YjB.rebind(NB)
        } catch (aB) {
          throw uB.destroy(), aB
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (jB = this.pm) || void 0 === jB || jB.resize(), null === (zB = this.pm) || void 0 === zB || null === (QB = zB.ur) || void 0 === QB || null === (nB = QB.fL) || void 0 === nB || nB.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((BB, jB) => {
          this.firstTerrain = {
            drawn: BB,
            failed: jB
          }
        }))
      }
      get castsEntitySunShadows() {
        var BB, jB;
        return null !== (BB = null === (jB = this.sunShadow) || void 0 === jB ? void 0 : jB.tracesEntities) && void 0 !== BB && BB
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(BB) {
        this.pm = BB, this.modelMeshes.attach(BB.model, BB.sceneMirror);
        const jB = BB.ny;
        this.setClearColour(jB.clearColor.r, jB.clearColor.g, jB.clearColor.b), jB.draw = () => {
          this.drawFrame(BB, jB)
        }
      }
      render(BB) {
        if (!this.refusals.lost && !this.halted) {
          try {
            this.YjB.gL(), BB.ny.render()
          } catch (jB) {
            throw this.refusals.frameFailed(jB), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(jB), this.firstTerrain = null), jB
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var BB, jB, zB, QB;
        const nB = [...this.particles.describePendingWork(), ...null !== (BB = null === (jB = this.sunShadow) || void 0 === jB ? void 0 : jB.describePendingWork()) && void 0 !== BB ? BB : []],
          dB = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (zB = this.terrain.sceneDepth) && void 0 !== zB && zB.compiling ? 1 : 0) + (null !== (QB = this.terrain.shadowMask) && void 0 !== QB && QB.compiling ? 1 : 0);
        dB > 0 && nB.push(`${dB} Lite pipelines compiling`);
        const IB = this.terrain.buffersAwaitingVerdict;
        IB > 0 && nB.push(`${IB} Lite terrain buffers awaiting their out-of-memory verdict`);
        const NB = this.resources.texturesLoading;
        return NB > 0 && nB.push(`${NB} Lite textures loading`), nB
      }
      prepareTexture(BB) {
        return null !== this.resources.boundTexture(BB) || this.resources.textureFailed(BB)
      }
      drawFrame(BB, jB) {
        var zB, QB, nB, dB, IB, NB;
        const uB = tN(BB);
        this.camera.copyFromView(uB), this.setClearColour(uB.clearColour[0], uB.clearColour[1], uB.clearColour[2]), null === (zB = this.sunShadow) || void 0 === zB || zB.prepare(BB.ur, uB.eye, null !== (QB = BB.ur.mJ) && void 0 !== QB ? QB : null), this.terrain.prepare(BB, uB), null === (nB = this.terrain.sceneDepth) || void 0 === nB || nB.setPlanes(uB.near, uB.far), null === (dB = this.terrain.shadowMask) || void 0 === dB || dB.prepare(uB), IN(this.sceneTask), this.meshes.prepare(jB, uB, BB.model.earthSky, null !== (IB = BB.ur.mJ) && void 0 !== IB ? IB : null), this.particles.prepare(uB);
        const UB = performance.now();
        this.resources.flushUploads(), null === (NB = this.sunShadow) || void 0 === NB || NB.traceEntities(this.meshes);
        try {
          (0, PB.j)(this.engine, this.lastFrameTime > 0 ? UB - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = UB, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(UB), this.firstTerrain = null)
      }
      setClearColour(BB, jB, zB) {
        const QB = this.ny.clearColor;
        QB.r = BB, QB.g = jB, QB.b = zB, QB.a = 1
      }
    }

    function Au(BB) {
      const jB = {};
      for (const zB in BB.limits) {
        const QB = BB.limits[zB];
        "number" === typeof QB && (jB[zB] = QB)
      }
      return jB
    }
    const Tu = "WebGPU device lost while Lite was starting";
    async function Pu(BB, jB) {
      const zB = await Wu(),
        QB = zB.info,
        nB = {
          vendor: (null === QB || void 0 === QB ? void 0 : QB.vendor) || "unknown vendor",
          renderer: (null === QB || void 0 === QB ? void 0 : QB.architecture) || "unknown renderer",
          version: (null === QB || void 0 === QB ? void 0 : QB.description) || "unknown version"
        };
      BB.style.background = "black";
      const dB = await eu(BB, jB, jB.bufferSize, zB),
        IB = gj(dB),
        NB = lu(IB);
      try {
        const zB = new Zu(await wu(dB, IB, jB, null), BB, jB, nB),
          QB = NB();
        if (null !== QB) {
          const {
            reason: BB,
            message: jB
          } = QB;
          throw Object.assign(new Error(`${Tu} (${BB}): ${jB}`), {
            fallbackReason: Tu
          })
        }
        return zB
      } catch (uB) {
        throw IB.destroy(), null === NB() ? uB : (0, dN.i)(uB, "device")
      }
    }
    async function Wu() {
      const BB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!BB) throw (0, dN.i)(new Error("No WebGPU adapter"), "no_adapter");
      return BB
    }
    async function eu(BB, jB, zB, QB) {
      let nB;
      try {
        nB = await (0, PB.d)(BB, {
          msaaSamples: jB.JzB ? 4 : 1,
          requiredLimits: Au(QB),
          alphaMode: "premultiplied"
        })
      } catch (IB) {
        throw (0, dN.i)(IB, "#47" === (null === (dB = IB) || void 0 === dB ? void 0 : dB.message) ? "no_adapter" : "device")
      }
      var dB;
      return null !== zB && (0, PB.l)(nB, zB.width, zB.height), nB
    }

    function lu(BB) {
      let jB = null;
      return BB.lost.then((BB => {
        jB = BB, console.error(`WebGPU device lost (${BB.reason}): ${BB.message}`)
      })), () => jB
    }
    async function wu(BB, jB, zB, QB) {
      var nB, dB;
      let {
        sceneDepth: IB,
        sunShadow: NB
      } = zB;
      const uB = (0, eB.e)(BB),
        UB = null !== (nB = null === QB || void 0 === QB ? void 0 : QB.resources) && void 0 !== nB ? nB : new zN(BB, jB),
        aB = new nu(jB),
        pB = new AI(jB, UB, (BB => function(BB, jB) {
          for (const QB of tj(BB)) {
            var zB;
            if (QB._targetSignature === jB) return null !== (zB = QB._sceneBG) && void 0 !== zB ? zB : null
          }
          return null
        }(uB, BB)), null === QB || void 0 === QB ? void 0 : QB.M_, null === QB || void 0 === QB ? void 0 : QB.modelMeshes),
        rB = null !== (dB = null === QB || void 0 === QB ? void 0 : QB.particles) && void 0 !== dB ? dB : new Vu(jB, UB);
      for (const mB of function(BB, jB, zB) {
          return [jB.opaqueRenderable, BB.opaqueRenderable, BB.skyLastRenderable, zB.renderable, jB.transparentRenderable, BB.transparentRenderable, BB.frontRenderable]
        }(pB, aB, rB)) Lj(uB, mB);
      const sB = function(BB) {
        for (const jB of tj(BB))
          if ("ny" === jB.name) return jB;
        throw new Error("Lite: the scene has no render task named scene")
      }(uB);
      IB && aB.installSceneDepth(sB, BB);
      const JB = NB ? new Su(jB, NB.entities) : null;
      return aB.sunShadow = JB, JB && null !== NB && void 0 !== NB && NB.entities && (aB.shadowMask = new ZN(jB, sB, BB, aB)), pB.sunShadow = JB, await (0, eB.g)(uB), {
        engine: BB,
        ny: uB,
        sceneTask: sB,
        device: jB,
        terrain: aB,
        meshes: pB,
        sunShadow: JB,
        resources: UB,
        particles: rB
      }
    }
  },
  40789: (BB, jB, zB) => {
    zB.d(jB, {
      C: () => IB,
      E: () => mB,
      I: () => sB,
      J: () => JB,
      d: () => nB,
      h: () => QB,
      k: () => rB,
      o: () => aB,
      r: () => yB,
      u: () => dB,
      v: () => NB,
      y: () => uB
    });
    const QB = 3,
      nB = 0,
      dB = 1,
      IB = 2,
      NB = {
        uniform: 3,
        Vr: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      uB = 10,
      UB = "BloxdPackInputs",
      aB = "bloxdPackInputs",
      pB = [{
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
      rB = 80;

    function sB() {
      const BB = pB.map((BB => {
        let {
          name: jB,
          type: zB
        } = BB;
        return `    ${jB}: ${zB},\n`
      })).join("");
      return `struct ${UB} {\n${BB}}\n@group(${QB}) @binding(${nB}) var<uniform> ${aB}: ${UB};\n`
    }

    function JB(BB, jB) {
      const zB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, rB),
        [QB, nB, dB, IB, NB, uB] = pB;
      zB.setFloat32(QB.offset, jB.seconds, !0), zB.setUint32(nB.offset, jB.lit ? 1 : 0, !0);
      for (let UB = 0; UB < 3; UB++) zB.setInt32(dB.offset + 4 * UB, jB.renderOffset[UB], !0), zB.setFloat32(IB.offset + 4 * UB, jB.J7[UB], !0), zB.setFloat32(NB.offset + 4 * UB, jB.eyePosition[UB], !0), zB.setFloat32(uB.offset + 4 * UB, jB.shadowDirection[UB], !0)
    }

    function mB(BB) {
      const jB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, zB) => {
        let {
          id: QB,
          rotation: nB
        } = BB;
        jB[zB] = 65535 & QB | (3 & nB) << 16
      })), jB
    }
    const yB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);