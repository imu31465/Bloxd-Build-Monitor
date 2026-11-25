export const id = 297;
export const ids = [297];
export const modules = {
  44259: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => dM,
      e: () => PM,
      h: () => aM,
      i: () => QM
    });
    var OM = iM(38167),
      SM = iM(39748),
      jM = iM(39741);

    function aM(MM, rM, iM, OM) {
      const SM = jM.z;
      rM.fill(0), MM.gravity.toArray(rM, SM.gravity), MM.colorDead.toArray(rM, SM.colorDead), iM[SM.ramp] = MM.useRampGradients ? 1 : 0;
      const aM = MM.getColorGradients(),
        PM = mM(MM, aM, "colour", OM);
      iM[SM.colorCount] = PM;
      for (let jM = 0; jM < PM; jM++) {
        var nM;
        const MM = aM[HM(aM, jM)];
        rM[SM.colorPositions + jM] = MM.gradient, MM.color1.toArray(rM, SM.color1 + 4 * jM), (null !== (nM = MM.color2) && void 0 !== nM ? nM : MM.color1).toArray(rM, SM.color2 + 4 * jM)
      }
      const QM = MM.getVelocityGradients(),
        zM = mM(MM, QM, "dd", OM);
      iM[SM.velocityCount] = zM;
      for (let jM = 0; jM < zM; jM++) lM(rM, SM.dd + 4 * jM, QM[HM(QM, jM)]);
      const LM = MM.useRampGradients ? MM.getColorRemapGradients() : null,
        hM = mM(MM, LM, "colour remap", OM);
      iM[SM.remapCount] = hM;
      for (let jM = 0; jM < hM; jM++) lM(rM, SM.remap + 4 * jM, LM[HM(LM, jM)])
    }

    function PM() {
      return {
        key: [],
        texels: new Uint8Array(4 * jM.o)
      }
    }
    const nM = [];

    function QM(MM, rM) {
      return zM(MM, nM), !yM(nM, rM.key) && (rM.key.length = 0, rM.key.push(...nM), rM.key.length > 0 && function(MM, rM) {
        for (let iM = 0; iM < jM.o; iM++) SM.i.GetCurrentGradient(iM / jM.o, MM, ((MM, rM, iM) => {
          OM.Color3.LerpToRef(MM.color, rM.color, iM, LM)
        })), rM[4 * iM] = 255 * LM.r, rM[4 * iM + 1] = 255 * LM.g, rM[4 * iM + 2] = 255 * LM.b, rM[4 * iM + 3] = 255
      }(MM.getRampGradients(), rM.texels), !0)
    }

    function zM(MM, rM) {
      rM.length = 0;
      const iM = MM.useRampGradients ? MM.getRampGradients() : null;
      if (null !== iM && void 0 !== iM && iM.length) {
        rM.push(iM.length);
        for (const MM of iM) rM.push(MM.gradient, MM.color.r, MM.color.g, MM.color.b)
      }
    }
    const LM = new OM.Color3;

    function mM(MM, rM, iM, OM) {
      return rM ? rM.length > jM.d ? (OM(`particleStops:${iM}`, `GPU particles use the first 2 and last ${jM.d-2} of more than ${jM.d} ${iM} gradient stops (${MM.name})`), jM.d) : rM.length : 0
    }

    function HM(MM, rM) {
      return rM < 2 || MM.length <= jM.d ? rM : MM.length - jM.d + rM
    }
    const hM = new Float32Array(jM.s),
      JM = new Uint32Array(hM.buffer);

    function dM(MM, rM, iM) {
      return aM(MM, hM, JM, iM), rM && yM(JM, rM) ? null : JM.slice()
    }

    function yM(MM, rM) {
      if (MM.length !== rM.length) return !1;
      for (let iM = 0; iM < MM.length; iM++)
        if (MM[iM] !== rM[iM]) return !1;
      return !0
    }

    function lM(MM, rM, iM) {
      var OM;
      MM[rM] = iM.gradient, MM[rM + 1] = iM.factor1, MM[rM + 2] = null !== (OM = iM.factor2) && void 0 !== OM ? OM : iM.factor1
    }
  },
  42265: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      const OM = rM * rM * 4,
        SM = MM[0].layers,
        jM = SM * (MM.length - 1) + MM[MM.length - 1].layers,
        aM = new Uint8Array(jM * OM);
      MM.forEach(((rM, iM) => {
        const jM = iM + 1 < MM.length ? Math.min(rM.layers, SM) : rM.layers;
        aM.set(new Uint8Array(rM.pixels.buffer, rM.pixels.byteOffset, jM * OM), iM * SM * OM)
      }));
      const PM = Math.max(1, Math.min(jM, iM || jM));
      if (PM === jM) return [{
        pixels: aM,
        layers: jM
      }];
      const nM = [];
      for (let QM = 0; QM < jM; QM += PM) {
        const MM = Math.min(jM, QM + PM);
        nM.push({
          pixels: aM.slice(QM * OM, MM * OM),
          layers: MM - QM
        })
      }
      return nM
    }
    iM.d(rM, {
      c: () => OM,
      f: () => jM
    });
    const SM = new WeakMap;

    function jM(MM, rM, iM) {
      var OM, jM;
      const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
      SM.set(MM, aM);
      const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
      aM.set(rM[0], PM);
      const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
      if (nM) return nM.built;
      const QM = {
        urls: [...rM],
        built: iM()
      };
      return PM.push(QM), QM.built.catch((() => {
        PM.splice(PM.indexOf(QM), 1)
      })), QM.built
    }
  },
  44250: (MM, rM, iM) => {
    function OM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const rM = new Set;
      return (iM, OM) => {
        rM.has(iM) || (rM.add(iM), console.warn(MM + OM))
      }
    }
    iM.d(rM, {
      b: () => OM
    })
  },
  44309: (MM, rM, iM) => {
    iM.d(rM, {
      createLiteRendererAsync: () => Nn,
      liteBabylonBackend: () => YM,
      setPipelineFailureHook: () => Pr
    });
    var OM = iM(38167),
      SM = iM(38476),
      jM = iM(38878),
      aM = iM(38227),
      PM = iM(38889);
    class nM extends PM.d {
      constructor() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        super(...rM), this.color = new OM.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: rM[0].Hk().getUniqueId(),
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
          needAlphaBlendingForMesh: MM => MM.visibility < 1 || MM.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const QM = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      zM = MM => 1 << QM.indexOf(MM),
      LM = zM("VERTEXCOLOR"),
      mM = zM("INSTANCES"),
      HM = zM("THIN_INSTANCES"),
      hM = zM("INSTANCESCOLOR"),
      JM = zM("FOG"),
      dM = zM("LITE_FRONT_LAYER");

    function yM(MM, rM, iM, OM) {
      let SM = 0;
      return MM.isVerticesDataPresent("color") && (SM |= LM), "none" !== rM && (SM |= mM), "thin" === rM && (SM |= HM, MM.isVerticesDataPresent("instanceColor") && (SM |= hM)), OM.fogEnabled && MM.applyFog && 0 !== OM.fogMode && (SM |= JM), iM >= 1 && (SM |= dM), SM
    }

    function lM(MM, rM) {
      MM.updateColor4("color", rM.color, rM.alpha)
    }
    var EM = iM(38829),
      UM = iM(38298),
      GM = iM(38235),
      CM = iM(38188),
      eM = iM(38809),
      bM = iM(38822),
      wM = iM(38217),
      tM = iM(38221),
      gM = iM(38233);
    const uM = CM.b.GLSL;
    class RM {
      constructor(MM, rM) {
        this.name = MM, this.YJ = rM, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Rk = {
          addOnce: MM => {
            this.disposers.push(MM)
          }
        }, this.uniqueId = rM.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      Hk() {
        return this.YJ
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
      needAlphaBlendingForMesh(MM) {
        return (0, wM.O)(this.model, MM.visibility, MM.hasVertexAlpha)
      }
      needAlphaTestingForMesh(MM) {
        return (0, wM.S)(this.model, MM.visibility, MM.hasVertexAlpha)
      }
      dispose() {
        (0, UM.m)(this);
        for (const MM of this.disposers.splice(0)) MM()
      }
      get model() {
        return (0, wM.Y)(this)
      }
    }
    const pM = new WeakSet;

    function WM(MM) {
      return pM.has(MM)
    }

    function sM(MM) {
      pM.add(MM)
    }
    const DM = {
      create: (MM, rM) => ((0, GM.s)(MM, new RM(MM.name, rM)), tM.d.defines()),
      write: () => {},
      addFeature: (MM, rM) => {
        const iM = MM.mirror;
        rM.feature === bM.j && rM.state.dirLightCount > 0 && (MM.disableLighting = !0, (0, wM.W)(MM)), "BLOXD_LIGHTING" in rM.defines && (0, UM.k)(iM), rM.feature === eM.g && ((0, EM.j)(rM.state, uM), function(MM, rM) {
          const iM = MM.Hk().ph();
          setTimeout((() => {
            iM.atlasArrays(rM.sources).then((iM => {
              (0, EM.c)(MM, rM, iM.map((MM => ({
                atlas: MM,
                layers: MM.layers
              }))), iM[0].layerWidth, uM)
            })).catch((MM => {
              console.error("Failed to build the atlas's texture arrays", MM)
            }))
          }))
        }(iM, rM.state))
      },
      texture: (MM, rM, iM) => {
        let {
          data: OM,
          sets: SM
        } = iM;
        var jM;
        (sM(MM), OM) && (MM.uvSet = null !== (jM = null === SM || void 0 === SM ? void 0 : SM.coordinatesIndex) && void 0 !== jM ? jM : 0, (0, GM.ab)(MM.matrix, null !== SM && void 0 !== SM ? SM : {}))
      },
      cube: sM,
      canvas: (MM, rM, iM) => {
        let {
          width: OM,
          height: SM,
          mipmaps: jM,
          samplingMode: aM = gM.i.trilinear,
          hasAlpha: PM = !1,
          wrap: nM = gM.b.clamp
        } = iM;
        const QM = MM.ph().createCanvas(OM, SM),
          zM = new gM.k("2d", {
            kind: "canvas",
            width: OM,
            height: SM,
            canvas: QM
          }, {
            samplingMode: aM,
            wrapU: nM,
            wrapV: nM,
            noMipmap: !jM,
            invertY: !0
          });
        return zM.hasAlpha = PM, sM(zM), zM
      }
    };
    var kM = iM(38316),
      ZM = iM(38068);
    class oM {
      constructor(MM, rM, iM) {
        this.engine = MM, this.clearColor = rM, this.ambientColor = iM, this.onBeforeRenderObservable = new ZM.d, this.onBeforeCameraRenderObservable = new ZM.d, this.onAfterRenderObservable = new ZM.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.aG = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      ph() {
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
      addPendingData(MM) {
        this.pending.push(MM)
      }
      removePendingData(MM) {
        const rM = this.pending.indexOf(MM); - 1 !== rM && this.pending.splice(rM, 1)
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

    function fM() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const YM = {
      uiM: fM,
      TOM: (MM, rM) => {
        const iM = new oM(MM.engine, OM.d.FromArray(rM.clearColor), OM.Color3.FromArray(rM.ambientColor));
        (0, aM.e)(DM, iM), MM.YJ = iM,
          function(MM, rM) {
            const iM = Object.assign((0, kM.g)(MM, "camera"), {
              layerMask: 268435455
            });
            MM.model.nodes.setWorldSource(iM.row, MM.model.view.worldMatrix), MM.camera = rM.activeCamera = iM
          }(MM, iM), (0, SM.d)(MM, ((MM, rM, iM) => (0, jM.f)(MM, rM, iM, PM.d)))
      },
      XOM: () => {},
      setBabylonFog: () => {},
      cOM: fM,
      OSM: () => {},
      linesFromArrays: (MM, rM, iM) => (0, jM.f)(MM, rM, iM, nM),
      NJ: () => {},
      iSM: fM
    };
    var NM = iM(44358),
      AM = iM(44365),
      xM = iM(44372);
    class vM {
      constructor(MM) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const rM = new Promise((MM => {
          this.refused = MM
        }));
        this.deviceLost = Promise.race([MM, rM]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(MM) {
        (function(MM) {
          const {
            name: rM,
            message: iM
          } = null !== MM && void 0 !== MM ? MM : {};
          return "InvalidStateError" === rM && "string" === typeof iM && iM.startsWith("GPUDevice.")
        })(MM) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: MM.message,
          framesRefused: !0
        }))
      }
    }
    var FM = iM(42265),
      BM = iM(39760);

    function XM(MM) {
      return Math.max(4, 4 * Math.ceil(MM / 4))
    }

    function IM(MM, rM, iM, OM) {
      const SM = MM.createBuffer({
        label: OM,
        size: XM(rM.byteLength),
        usage: iM,
        mappedAtCreation: !0
      });
      return new Uint8Array(SM.getMappedRange(), 0, rM.byteLength).set(new Uint8Array(rM.buffer, rM.byteOffset, rM.byteLength)), SM.unmap(), SM
    }

    function KM(MM, rM) {
      return Math.floor(Math.log2(Math.max(MM, rM))) + 1
    }

    function qM(MM, rM, iM, OM, SM, jM) {
      const aM = MM.createTexture({
          label: jM,
          size: {
            width: iM,
            height: OM,
            depthOrArrayLayers: SM
          },
          format: "rgba8unorm",
          mipLevelCount: KM(iM, OM),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        PM = (rM, iM, OM, jM) => {
          MM.queue.writeTexture({
            texture: aM,
            mipLevel: iM
          }, rM, {
            bytesPerRow: 4 * OM,
            rowsPerImage: jM
          }, {
            width: OM,
            height: jM,
            depthOrArrayLayers: SM
          })
        };
      PM(rM, 0, iM, OM);
      let nM = 1;
      for (const QM of function*(MM, rM, iM, OM) {
          let SM = MM,
            jM = rM,
            aM = iM;
          for (; jM > 1 || aM > 1;) {
            const MM = Math.max(1, jM >> 1),
              rM = Math.max(1, aM >> 1),
              iM = new Uint8Array(MM * rM * OM * 4),
              PM = 4 * jM;
            let nM = 0;
            for (let QM = 0; QM < OM; QM++) {
              const OM = QM * PM * aM;
              for (let QM = 0; QM < rM; QM++) {
                const rM = OM + Math.min(2 * QM, aM - 1) * PM,
                  zM = OM + Math.min(2 * QM + 1, aM - 1) * PM;
                for (let OM = 0; OM < MM; OM++) {
                  const MM = 4 * Math.min(2 * OM, jM - 1),
                    aM = 4 * Math.min(2 * OM + 1, jM - 1);
                  for (let OM = 0; OM < 4; OM++) iM[nM++] = SM[rM + MM + OM] + SM[rM + aM + OM] + SM[zM + MM + OM] + SM[zM + aM + OM] + 2 >> 2
                }
              }
            }
            yield {
              data: iM,
              width: MM,
              height: rM
            }, SM = iM, jM = MM, aM = rM
          }
        }(rM, iM, OM, SM)) PM(QM.data, nM++, QM.width, QM.height);
      return aM
    }
    const TM = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function VM(MM) {
      if (MM.startsWith("data:")) {
        const rM = MM.search(/[;,]/);
        return `data:${rM>5?MM.slice(5,rM):""} URL of ${MM.length} characters`
      }
      return MM.length > 80 ? `${MM.slice(0,80)}...` : MM
    }
    async function cM(MM) {
      const rM = await fetch(MM);
      if (!rM.ok) throw new Error(`${VM(MM)}: ${rM.status} ${rM.statusText}`);
      return createImageBitmap(await rM.blob(), TM)
    }
    async function Mr(MM) {
      const rM = await cM(MM),
        iM = new OffscreenCanvas(rM.width, rM.height),
        OM = iM.getContext("2d", {
          willReadFrequently: !0
        });
      if (!OM) throw new Error("No 2D context to decode an image");
      OM.drawImage(rM, 0, 0);
      const {
        data: SM
      } = OM.getImageData(0, 0, rM.width, rM.height);
      return rM.close(), {
        pixels: new Uint8Array(SM.buffer, SM.byteOffset, SM.byteLength),
        width: iM.width,
        height: iM.height
      }
    }

    function rr(MM, rM) {
      return (0, FM.f)(MM, rM.urls, (async () => {
        const iM = await Promise.all(rM.urls.map((async (MM, iM) => {
            var OM, SM, jM, aM, PM;
            return null !== (aM = null !== (SM = null === (jM = rM.pixels) || void 0 === jM ? void 0 : jM[iM]) && void 0 !== SM ? SM : null, PM = rM.layerWidth, OM = null !== aM && void 0 !== aM && aM.byteLength && PM && aM.byteLength % (PM * PM * 4) === 0 ? {
              pixels: aM,
              layerWidth: PM,
              layers: aM.byteLength / (PM * PM * 4)
            } : null) && void 0 !== OM ? OM : await async function(MM) {
              const {
                pixels: rM,
                width: iM
              } = await Mr(MM);
              return {
                pixels: rM,
                layerWidth: iM,
                layers: rM.byteLength / (iM * iM * 4)
              }
            }(MM)
          }))),
          OM = iM[0].layerWidth;
        return (0, FM.c)(iM, OM, MM.limits.maxTextureArrayLayers).map(((iM, SM) => {
          let {
            pixels: jM,
            layers: aM
          } = iM;
          return {
            texture: qM(MM, jM, OM, OM, aM, `atlas-${SM}-${VM(rM.urls[0])}`),
            layerWidth: OM,
            layers: aM
          }
        }))
      }))
    }
    const ir = new Map([
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
      Or = new Map([
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

    function Sr(MM) {
      for (const rM of (0, BM.k)(MM))
        if (!Or.has((0, BM.i)(rM))) return !1;
      return !0
    }

    function jr(MM) {
      const rM = Or.get(MM);
      if (!rM) return null;
      const [iM, OM, SM] = rM;
      return {
        srcFactor: ir.get(iM),
        dstFactor: ir.get(OM),
        operation: SM
      }
    }
    let ar = null;

    function Pr(MM) {
      ar = MM
    }
    const nr = new WeakSet;

    function Qr(MM) {
      return nr.has(MM)
    }

    function zr(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var jM;
      Qr(MM) || (null === (jM = ar) || void 0 === jM || jM(rM, iM, OM, SM))
    }
    class Lr {
      constructor(MM) {
        this.resources = MM, this.matrixKey = {
          vL: 0
        }, this.attributesKey = {
          vL: 0
        }, this.inputs = Object.create(null);
        for (let rM = 0; rM < 4; rM++) this.inputs[`world${rM}`] = new hr(this.matrixKey, 16 * rM, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(MM, rM) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, MM, !0), rM && this.resources.vertexBufferCreated(this.attributesKey, rM, !0)
      }
    }
    class mr extends Lr {
      constructor(MM, rM, iM) {
        super(MM), this.mesh = rM, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const OM = this.inputs;
        let SM = 0;
        for (const {
            size: aM
          }
          of iM) SM += aM;
        for (const {
            name: aM,
            offset: PM,
            size: nM,
            type: QM
          }
          of iM) OM[aM] = new hr(this.attributesKey, 4 * PM, 4 * SM, nM, !0, QM);
        this.rowStride = SM, MM.o9.set(rM, this);
        const jM = rM.isVerticesDataPresent;
        rM.isVerticesDataPresent = (MM, iM) => MM in OM || jM.call(rM, MM, iM)
      }
      attach(MM, rM) {
        this.matrices = MM, this.attributes = rM, this.bind(MM, rM), this.mirror(MM, MM.length, MM.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      k_(MM) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, MM ? 64 * MM : void 0)
      }
      o_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(MM, rM) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * MM, 16 * rM)
      }
      attributeRows(MM, rM) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, MM * this.rowStride, rM * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(MM, rM, iM) {
        const OM = this.mesh._thinInstanceDataStorage;
        OM.matrixData = MM, OM.matrixBufferSize = rM, OM.worldMatrices = null, OM.instancesCount = iM
      }
    }
    class Hr extends Lr {
      constructor(MM, rM, iM) {
        var OM, SM, jM, aM;
        super(MM), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (OM = null === iM || void 0 === iM ? void 0 : iM.interleavedKinds) && void 0 !== OM ? OM : null, this.offsets = null !== (SM = null === iM || void 0 === iM ? void 0 : iM.interleavedOffsets) && void 0 !== SM ? SM : [], this.rowStride = null !== (jM = null === iM || void 0 === iM ? void 0 : iM.interleavedRowStride) && void 0 !== jM ? jM : 0, null === (aM = this.layout) || void 0 === aM || aM.forEach(((MM, rM) => {
          this.inputs[MM] = new hr(this.attributesKey, 4 * this.offsets[rM], 4 * this.rowStride, iM.strides[MM])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), MM.batchUploads.set(rM, this), rM.Rk.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(MM) {
        const rM = this.packedBatch;
        return rM.renderSelf ? 0 === MM ? this.packedSource : rM.instances[MM - 1] : rM.instances[MM]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(MM, rM, iM, OM) {
        const SM = (rM.renderSelf ? 1 : 0) + rM.rows.length;
        if (this.frame = OM, this.count = SM, this.packedSource = MM, this.packedBatch = rM, 0 === SM) return;
        if (MM.getWorldMatrix(), 16 * SM > this.matrices.length) {
          let MM = this.matrices.length / 16;
          for (; MM < SM;) MM *= 2;
          this.matrices = new Float32Array(16 * MM), this.attributes &&= new Float32Array(MM * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let jM = 0;
        rM.renderSelf && this.packRow(jM++, MM, rM.row, iM);
        for (let aM = 0; aM < rM.rows.length; aM++) this.packRow(jM++, rM.instances[aM], rM.rows[aM], iM);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * SM), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, SM * this.rowStride)
      }
      packRow(MM, rM, iM, OM) {
        const SM = this.matrices;
        if (iM < 0) SM.set(rM.getWorldMatrix().m, 16 * MM);
        else
          for (let QM = 0; QM < 16; QM++) SM[16 * MM + QM] = OM[16 * iM + QM];
        const jM = this.attributes;
        if (!jM) return;
        const aM = rM.xZ,
          PM = this.layout;
        for (let QM = 0; QM < PM.length; QM++) {
          var nM;
          const rM = null !== (nM = aM[PM[QM]]) && void 0 !== nM ? nM : 0,
            iM = MM * this.rowStride + this.offsets[QM];
          rM.toArray ? rM.toArray(jM, iM) : rM.copyToArray ? rM.copyToArray(jM, iM) : jM[iM] = rM
        }
      }
    }
    class hr {
      constructor(MM, rM, iM, OM) {
        let SM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = MM, this.byteOffset = rM, this.byteStride = iM, this.size = OM, this.instanced = SM, this.type = jM, this.normalized = aM
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
    const Jr = "CANVAS_ALPHA_ONE",
      dr = `override ${Jr}: bool = false;`,
      yr = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function lr(MM, rM, iM) {
      var OM;
      let SM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const jM = null !== (OM = rM._colorFormat) && void 0 !== OM ? OM : "bgra8unorm",
        aM = SM ? 15 : 0;
      return iM ? {
        ...MM,
        targets: [{
          format: jM,
          blend: {
            color: iM,
            alpha: yr
          },
          writeMask: aM
        }]
      } : {
        ...MM,
        constants: {
          ...MM.constants,
          [Jr]: 1
        },
        targets: [{
          format: jM,
          writeMask: aM
        }]
      }
    }

    function Er(MM, rM) {
      MM._renderables.push(rM)
    }

    function Ur(MM) {
      return MM._device
    }

    function Gr(MM) {
      var rM, iM;
      return null !== (rM = null === (iM = MM._frameGraph) || void 0 === iM ? void 0 : iM._tasks) && void 0 !== rM ? rM : []
    }

    function Cr(MM) {
      return MM._currentEncoder
    }

    function er(MM) {
      return MM.createBindGroupLayout({
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
    const br = "greater-equal",
      wr = 2e5,
      tr = 1e5,
      gr = new WeakMap;

    function ur(MM, rM) {
      let iM = gr.get(MM);
      if (!iM) {
        iM = {
          module: MM.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, gr.set(MM, iM)
      }
      const OM = `${rM._colorFormat}|${rM._depthStencilFormat}|${rM._sampleCount}`;
      let SM = iM.pipelines.get(OM);
      if (!SM) {
        var jM;
        const {
          module: aM
        } = iM;
        SM = MM.createRenderPipeline({
          label: `placeholder ${OM}`,
          layout: MM.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: aM,
            entryPoint: "v"
          },
          fragment: {
            module: aM,
            entryPoint: "f",
            targets: [{
              format: null !== (jM = rM._colorFormat) && void 0 !== jM ? jM : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: rM._depthStencilFormat ? {
            format: rM._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: rM._sampleCount
          }
        }), iM.pipelines.set(OM, SM)
      }
      return SM
    }

    function Rr(MM, rM, iM) {
      const OM = rM.eye,
        SM = rM.viewMatrix;
      MM[0] = OM[0] + SM[2] * iM, MM[1] = OM[1] + SM[6] * iM, MM[2] = OM[2] + SM[10] * iM
    }
    var pr = iM(38930),
      Wr = iM(44250),
      sr = iM(38198);
    const Dr = Math.PI,
      kr = Dr / 1.95,
      Zr = [5e-4 / 94, 125e-7, 5e-4 / 18],
      or = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((MM => {
        let [rM, iM] = MM;
        return .434 * Dr * Math.pow(2 * Dr / rM, 2) * iM
      }));

    function fr(MM, rM, iM) {
      const {
        up: OM,
        mieDirectionalG: SM
      } = MM, jM = 1 - Ar(1 - Math.exp(rM[1] / 45e4), 0, 1), aM = MM.rayleigh - (1 - jM), PM = Math.hypot(rM[0], rM[1], rM[2]), nM = PM > 0 ? 1 / PM : 0, QM = iM.sunDir;
      for (let HM = 0; HM < 3; HM++) QM[HM] = rM[HM] * nM;
      const zM = QM[0] * OM[0] + QM[1] * OM[1] + QM[2] * OM[2],
        LM = 1e3 * Math.max(0, 1 - Math.exp(-(kr - Math.acos(Ar(zM, -1, 1))) / 1.5));
      iM.sunE = LM;
      const mM = .2 * MM.turbidity * 1e-17 * MM.mieCoefficient;
      for (let HM = 0; HM < 3; HM++) {
        const MM = Zr[HM] * aM,
          rM = or[HM] * mM,
          OM = LM / (MM + rM);
        iM.inScatterR[HM] = MM * OM, iM.inScatterM[HM] = rM * OM, iM.extinctionBeta[HM] = 8400 * MM + 1250 * rM
      }
      return iM.sunsetMix = Ar(Math.pow(1 - zM, 5), 0, 1), iM.sunDiscE = 19e3 * LM, iM.mieScale = (1 - SM * SM) / (4 * Dr), iM.mieBase = 1 + SM * SM, iM.mieSlope = 2 * SM, iM
    }
    const Yr = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const Nr = 1 / function(MM) {
      const {
        A: rM,
        B: iM,
        C: OM,
        D: SM,
        E: jM,
        F: aM
      } = Yr;
      return (MM * (rM * MM + OM * iM) + SM * jM) / (MM * (rM * MM + iM) + SM * aM) - jM / aM
    }(1e3);

    function Ar(MM, rM, iM) {
      return Math.min(Math.max(MM, rM), iM)
    }
    const xr = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function vr(MM, rM) {
      const iM = new Map(rM),
        OM = [],
        SM = [],
        jM = () => 0 === SM.length || SM[SM.length - 1].active;
      let aM = null;
      const PM = () => {
        const MM = [...iM].filter((MM => {
            let [, rM] = MM;
            return !0 !== rM
          })),
          rM = MM.map((MM => {
            let [rM] = MM;
            return rM
          })).join("|");
        aM = MM.length ? new RegExp(`\\b(${rM})\\b`, "g") : null
      };
      PM();
      for (const nM of MM.split("\n")) {
        const MM = xr.exec(nM);
        if (!MM) {
          jM() && OM.push(aM ? Fr(nM, aM, iM) : nM);
          continue
        }
        const rM = MM[1],
          QM = MM[2].trim();
        if ("ifdef" === rM || "ifndef" === rM || "if" === rM) {
          const MM = jM(),
            OM = "if" === rM ? Br(QM, iM) : iM.has(QM) === ("ifdef" === rM);
          SM.push({
            active: MM && OM,
            parentActive: MM,
            taken: OM
          })
        } else if ("elif" === rM || "else" === rM) {
          const MM = SM[SM.length - 1];
          if (!MM) throw new Error(`#${rM} without #if`);
          const OM = !MM.taken && ("else" === rM || Br(QM, iM));
          MM.active = MM.parentActive && OM, MM.taken = MM.taken || OM
        } else if ("endif" === rM) {
          if (!SM.pop()) throw new Error("#endif without #if")
        } else if (jM()) {
          const [MM, ...OM] = QM.split(/\s+/);
          "undef" === rM ? iM.delete(MM) : iM.set(MM, !OM.length || OM.join(" ")), PM()
        }
      }
      if (SM.length) throw new Error("Unterminated #if");
      return OM.join("\n")
    }

    function Fr(MM, rM, iM) {
      return MM.replace(rM, (MM => {
        const rM = iM.get(MM);
        return "string" === typeof rM ? rM : MM
      }))
    }

    function Br(MM, rM) {
      var iM;
      const OM = null !== (iM = MM.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== iM ? iM : [];
      let SM = 0;
      const jM = () => OM[SM],
        aM = () => OM[SM++],
        PM = MM => {
          const iM = /^\d/.test(MM) ? MM : rM.get(MM);
          return "string" === typeof iM ? parseInt(iM) : Number.NaN
        },
        nM = () => {
          const MM = aM();
          if ("!" === MM) return !nM();
          if ("(" === MM) {
            const MM = zM();
            return aM(), MM
          }
          if ("defined" === MM) {
            const MM = "(" === jM();
            MM && aM();
            const iM = aM();
            return MM && aM(), rM.has(iM)
          }
          const iM = jM();
          if ("==" === iM || "!=" === iM || ">" === iM || "<" === iM || ">=" === iM || "<=" === iM) {
            aM();
            const rM = PM(MM),
              OM = PM(aM());
            if (Number.isNaN(rM) || Number.isNaN(OM)) return !1;
            switch (iM) {
              case "==":
                return rM === OM;
              case "!=":
                return rM !== OM;
              case ">":
                return rM > OM;
              case "<":
                return rM < OM;
              case ">=":
                return rM >= OM;
              default:
                return rM <= OM
            }
          }
          return rM.has(MM)
        },
        QM = () => {
          let MM = nM();
          for (;
            "&&" === jM();) {
            aM();
            const rM = nM();
            MM = MM && rM
          }
          return MM
        },
        zM = () => {
          let MM = QM();
          for (;
            "||" === jM();) {
            aM();
            const rM = QM();
            MM = MM || rM
          }
          return MM
        },
        LM = zM();
      if (SM !== OM.length) throw new Error(`Cannot evaluate #if ${MM}`);
      return LM
    }
    var Xr = iM(38278),
      Ir = iM(38390),
      Kr = iM(38395),
      qr = iM(41782),
      Tr = iM(39799);
    const Vr = 32,
      cr = [10, 3, 10],
      Mi = [21, 7, 21],
      ri = Mi[0] * Mi[1] * Mi[2],
      ii = 0,
      Oi = 1,
      Si = 2,
      ji = 3,
      ai = 64,
      Pi = 512,
      ni = 4 * ri,
      Qi = 1536,
      zi = ni + ri * Qi,
      Li = 1073741824,
      mi = zi + 1;

    function Hi(MM, rM) {
      const iM = MM % rM;
      return iM < 0 ? iM + rM : iM
    }

    function Ji(MM, rM, iM) {
      return OM = Hi(MM, Mi[0]), SM = Hi(rM, Mi[1]), jM = Hi(iM, Mi[2]), OM + Mi[0] * (SM + Mi[1] * jM);
      var OM, SM, jM
    }

    function di(MM, rM, iM) {
      return MM + 8 * (rM + 8 * iM)
    }

    function yi(MM, rM, iM) {
      return MM + 4 * (rM + 4 * iM)
    }
    const li = 65535,
      Ei = 0,
      Ui = 1,
      Gi = 2,
      Ci = 3;

    function ei(MM) {
      return Math.ceil(MM * MM / 32)
    }
    const bi = 8192,
      wi = 1 << 18,
      ti = 65536,
      gi = 294912,
      ui = 128,
      Ri = 4096,
      Wi = 16,
      si = 16385,
      Di = 81921,
      ki = 147457,
      Zi = 4194304;
    const oi = [0, 0, 0],
      fi = [0, 0, 0];

    function Yi(MM, rM, iM, OM) {
      ! function(MM, rM, iM) {
        const [OM, SM, jM] = [MM[0], MM[1], MM[2]];
        let aM, PM, nM;
        Math.abs(SM) < .99 ? (aM = jM, PM = 0, nM = -OM) : (aM = -SM, PM = OM, nM = 0);
        const QM = Math.hypot(aM, PM, nM);
        rM[0] = aM / QM, rM[1] = PM / QM, rM[2] = nM / QM, iM[0] = SM * rM[2] - jM * rM[1], iM[1] = jM * rM[0] - OM * rM[2], iM[2] = OM * rM[1] - SM * rM[0]
      }(OM, oi, fi);
      const SM = 1 / 32;
      for (const [jM, aM] of [
          [0, oi],
          [4, fi]
        ]) {
        for (let iM = 0; iM < 3; iM++) MM[rM + jM + iM] = aM[iM] * SM;
        MM[rM + jM + 3] = -(aM[0] * iM[0] + aM[1] * iM[1] + aM[2] * iM[2]) * SM
      }
    }
    class Ni {
      constructor() {
        this.words = new Uint32Array(ki), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      JL(MM, rM) {
        this.parts = 0, this.refs = 0, this.view = MM, this.viewAt = rM;
        const iM = MM[rM + 1] * MM[rM + 6] - MM[rM + 2] * MM[rM + 5],
          OM = MM[rM + 2] * MM[rM + 4] - MM[rM] * MM[rM + 6],
          SM = MM[rM] * MM[rM + 5] - MM[rM + 1] * MM[rM + 4],
          jM = Math.hypot(iM, OM, SM) || 1;
        this.light[0] = iM / jM, this.light[1] = OM / jM, this.light[2] = SM / jM
      }
      add(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= Ri || ! function(MM, rM, iM) {
            const OM = MM[rM],
              SM = MM[rM + 1],
              jM = MM[rM + 2],
              aM = MM[rM + 3],
              PM = MM[rM + 4],
              nM = MM[rM + 5],
              QM = MM[rM + 6],
              zM = MM[rM + 7],
              LM = MM[rM + 8],
              mM = MM[rM + 9],
              HM = MM[rM + 10],
              hM = MM[rM + 11],
              JM = MM[rM + 12],
              dM = MM[rM + 13],
              yM = MM[rM + 14],
              lM = MM[rM + 15],
              EM = OM * nM - SM * PM,
              UM = OM * QM - jM * PM,
              GM = OM * zM - aM * PM,
              CM = SM * QM - jM * nM,
              eM = SM * zM - aM * nM,
              bM = jM * zM - aM * QM,
              wM = LM * dM - mM * JM,
              tM = LM * yM - HM * JM,
              gM = LM * lM - hM * JM,
              uM = mM * yM - HM * dM,
              RM = mM * lM - hM * dM,
              pM = HM * lM - hM * yM,
              WM = EM * pM - UM * RM + GM * uM + CM * gM - eM * tM + bM * wM;
            if (!(Math.abs(WM) > 1e-12)) return !1;
            const sM = 1 / WM;
            return iM[0] = (nM * pM - QM * RM + zM * uM) * sM, iM[1] = (jM * RM - SM * pM - aM * uM) * sM, iM[2] = (dM * bM - yM * eM + lM * CM) * sM, iM[3] = (HM * eM - mM * bM - hM * CM) * sM, iM[4] = (QM * gM - PM * pM - zM * tM) * sM, iM[5] = (OM * pM - jM * gM + aM * tM) * sM, iM[6] = (yM * GM - JM * bM - lM * UM) * sM, iM[7] = (LM * bM - HM * GM + hM * UM) * sM, iM[8] = (PM * RM - nM * gM + zM * wM) * sM, iM[9] = (SM * gM - OM * RM - aM * wM) * sM, iM[10] = (JM * eM - dM * GM + lM * EM) * sM, iM[11] = (mM * GM - LM * eM - hM * EM) * sM, iM[12] = (nM * tM - PM * uM - QM * wM) * sM, iM[13] = (OM * uM - SM * tM + jM * wM) * sM, iM[14] = (dM * UM - JM * CM - yM * EM) * sM, iM[15] = (LM * CM - mM * UM + HM * EM) * sM, !0
          }(rM, iM, this.inverse)) return;
        const {
          view: OM,
          viewAt: SM
        } = this, jM = iM;
        let aM = 1 / 0,
          PM = 1 / 0,
          nM = -1 / 0,
          QM = -1 / 0,
          zM = -1 / 0;
        const [LM, mM, HM] = this.light;
        for (let GM = 0; GM < 8; GM++) {
          const iM = 1 & GM ? MM.hi[0] : MM.lo[0],
            hM = 2 & GM ? MM.hi[1] : MM.lo[1],
            JM = 4 & GM ? MM.hi[2] : MM.lo[2],
            dM = iM * rM[jM] + hM * rM[jM + 4] + JM * rM[jM + 8] + rM[jM + 12],
            yM = iM * rM[jM + 1] + hM * rM[jM + 5] + JM * rM[jM + 9] + rM[jM + 13],
            lM = iM * rM[jM + 2] + hM * rM[jM + 6] + JM * rM[jM + 10] + rM[jM + 14],
            EM = OM[SM] * dM + OM[SM + 1] * yM + OM[SM + 2] * lM + OM[SM + 3],
            UM = OM[SM + 4] * dM + OM[SM + 5] * yM + OM[SM + 6] * lM + OM[SM + 7];
          aM = Math.min(aM, EM), PM = Math.min(PM, UM), nM = Math.max(nM, EM), QM = Math.max(QM, UM), zM = Math.max(zM, LM * dM + mM * yM + HM * lM)
        }
        if (nM < -1 || QM < -1 || aM >= 1 || PM >= 1) return;
        const hM = this.parts++,
          JM = this.rects;
        JM[4 * hM] = Ai(aM), JM[4 * hM + 1] = Ai(PM), JM[4 * hM + 2] = Ai(nM), JM[4 * hM + 3] = Ai(QM);
        const dM = this.inverse,
          {
            cell: yM,
            dims: lM,
            lo: EM
          } = MM,
          UM = Di + hM * Wi;
        for (let GM = 0; GM < 3; GM++) this.floats[UM + 4 * GM] = dM[GM] / yM, this.floats[UM + 4 * GM + 1] = dM[4 + GM] / yM, this.floats[UM + 4 * GM + 2] = dM[8 + GM] / yM, this.floats[UM + 4 * GM + 3] = (dM[12 + GM] - EM[GM]) / yM;
        this.words[UM + 12] = MM.at, this.floats[UM + 13] = zM + .001 * (1 + Math.abs(zM)), this.words[UM + 14] = lM[0] | lM[1] << 8 | lM[2] << 16
      }
      finish() {
        const MM = ui,
          {
            counts: rM,
            rects: iM,
            words: OM
          } = this;
        rM.fill(0);
        let SM = 0,
          jM = 0;
        for (; jM < this.parts; jM++) {
          const OM = 4 * jM,
            aM = (iM[OM + 2] - iM[OM] + 1) * (iM[OM + 3] - iM[OM + 1] + 1);
          if (SM + aM > 65536) break;
          SM += aM;
          for (let SM = iM[OM + 1]; SM <= iM[OM + 3]; SM++)
            for (let jM = iM[OM]; jM <= iM[OM + 2]; jM++) rM[SM * MM + jM]++
        }
        let aM = 0;
        for (let nM = 0; nM < 16384; nM++) OM[nM] = aM, aM += rM[nM], rM[nM] = OM[nM];
        OM[16384] = aM;
        for (let nM = 0; nM < jM; nM++) {
          const SM = 4 * nM;
          for (let jM = iM[SM + 1]; jM <= iM[SM + 3]; jM++)
            for (let aM = iM[SM]; aM <= iM[SM + 2]; aM++) OM[si + rM[jM * MM + aM]++] = nM
        }
        const PM = this.floats;
        for (let nM = 0; nM < 16384; nM++) {
          const MM = si + OM[nM],
            rM = MM + Math.min(OM[nM + 1] - OM[nM], 64);
          for (let iM = MM + 1; iM < rM; iM++) {
            const rM = OM[iM],
              SM = PM[81934 + rM * Wi];
            let jM = iM - 1;
            for (; jM >= MM && PM[81934 + OM[jM] * Wi] < SM; jM--) OM[jM + 1] = OM[jM];
            OM[jM + 1] = rM
          }
        }
        this.refs = SM
      }
    }

    function Ai(MM) {
      return Math.min(127, Math.max(0, Math.floor((.5 * MM + .5) * ui)))
    }

    function xi(MM, rM, iM, OM, SM) {
      for (let jM = 0; jM < 4; jM++)
        for (let aM = 0; aM < 4; aM++) SM[4 * jM + aM] = MM[rM + 4 * jM] * iM[OM + aM] + MM[rM + 4 * jM + 1] * iM[OM + 4 + aM] + MM[rM + 4 * jM + 2] * iM[OM + 8 + aM] + MM[rM + 4 * jM + 3] * iM[OM + 12 + aM]
    }

    function vi(MM, rM, iM, OM, SM) {
      const jM = MM[0] - rM,
        aM = MM[1] - iM,
        PM = MM[2] - OM,
        nM = MM[3] - rM,
        QM = MM[4] - iM,
        zM = MM[5] - OM,
        LM = MM[6] - rM,
        mM = MM[7] - iM,
        HM = MM[8] - OM;
      if (Math.min(jM, nM, LM) > SM || Math.max(jM, nM, LM) < -SM) return !1;
      if (Math.min(aM, QM, mM) > SM || Math.max(aM, QM, mM) < -SM) return !1;
      if (Math.min(PM, zM, HM) > SM || Math.max(PM, zM, HM) < -SM) return !1;
      const hM = nM - jM,
        JM = QM - aM,
        dM = zM - PM,
        yM = LM - nM,
        lM = mM - QM,
        EM = HM - zM,
        UM = JM * EM - dM * lM,
        GM = dM * yM - hM * EM,
        CM = hM * lM - JM * yM;
      if (Math.abs(UM * jM + GM * aM + CM * PM) > SM * (Math.abs(UM) + Math.abs(GM) + Math.abs(CM))) return !1;
      const eM = [hM, JM, dM, yM, lM, EM, jM - LM, aM - mM, PM - HM];
      for (let bM = 0; bM < 3; bM++) {
        const MM = eM[3 * bM],
          rM = eM[3 * bM + 1],
          iM = eM[3 * bM + 2];
        for (let OM = 0; OM < 3; OM++) {
          const hM = 0 === OM ? 0 : 1 === OM ? iM : -rM,
            JM = 0 === OM ? -iM : 1 === OM ? 0 : MM,
            dM = 0 === OM ? rM : 1 === OM ? -MM : 0,
            yM = hM * jM + JM * aM + dM * PM,
            lM = hM * nM + JM * QM + dM * zM,
            EM = hM * LM + JM * mM + dM * HM,
            UM = SM * (Math.abs(hM) + Math.abs(JM) + Math.abs(dM));
          if (Math.min(yM, lM, EM) > UM || Math.max(yM, lM, EM) < -UM) return !1
        }
      }
      return !0
    }
    const Fi = new Float32Array(1);
    new Uint32Array(Fi.buffer);
    var Bi = iM(39807);

    function Xi(MM) {
      const [rM, iM, OM] = Bi.q;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${MM.group}) @binding(${MM.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${rM-1}, ${iM-1}, ${OM-1});\n}\n`
    }

    function Ii(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [SM, jM, aM] = Mi, [PM, nM, QM] = cr, zM = Math.log2(Vr), LM = OM ? "var<private> bloxdSpCrossed: bool;\n" : "", mM = OM ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${MM.group}) @binding(${MM.Xm}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${MM.group}) @binding(${MM.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${iM?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${LM}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Ui}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Gi}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${iM?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Ci}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${SM}, ${jM}, ${aM});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${SM} * (s.y + ${jM} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${PM}, ${nM}, ${QM}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${zM}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${ji}u) {\n\t\treturn named && state == ${Si}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${ni}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${zi}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${rM?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${rM?`\t\tif (exits && step > 0 && step % ${Ti} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${zM}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${ii}u || kind == ${Oi}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Si}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${ni}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${mM}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Ki = {
      group: 0,
      uniform: 0,
      Xm: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function qi() {
      const MM = Ki;
      return `${Xi(MM)}${Ii(MM,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Bi.d}>,\n}\n@group(${MM.group}) @binding(${MM.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${MM.group}) @binding(${MM.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Bi.n})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Bi.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Bi.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Ti = 2;
    const Vi = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function ci(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const OM = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${rM.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        SM = "trace" === iM || "lit" === iM,
        jM = "maskEdge" === iM ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        aM = SM ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${rM.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${rM.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===iM?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${jM};\n`;
      return `${OM}${MM.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${SM?function(){const[MM,rM,iM]=Bi.q;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${MM}.0, ${rM}.0, ${iM}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${aM}}\n`:""}${MM.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${rM.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${rM.renderOffset});\n}\n`:""}`
    }
    const MO = "bloxdSpOwnTexture";

    function rO(MM) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${MM.texture}) - 1u)))`
    }
    const iO = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${pr.i.map((MM=>{let[rM,iM]=MM;return`\tbloxdSpOut.${rM} = (bloxdSpWord & ${iM}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function OO(MM) {
      return `bloxdSpFlags(${MM})`
    }
    const SO = `${qr.i}.eyePosition`;

    function jO(MM, rM, iM, OM, SM) {
      const jM = MM.indexOf(rM);
      if (jM < 0 || MM.indexOf(rM, jM + 1) >= 0) throw new Error(`Lite's ${SM} program changed at the shader pack ${OM} hook: ${jM<0?"no":"more than one"} anchor (lite/${SM}ShaderPack.ts)`);
      return MM.slice(0, jM) + iM + MM.slice(jM + rM.length)
    }

    function aO(MM) {
      return MM.sunShadow || MM.airShadow
    }

    function PO(MM, rM) {
      return rM && aO(MM)
    }
    const nO = {
      group: qr.f,
      ...qr.p
    };

    function QO(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!aO(MM)) return "";
      if (rM) {
        const rM = nO,
          SM = "trace" === iM || "lit" === iM;
        let jM = "";
        MM.sunShadow && (jM = SM ? `${Ii(rM,!0,"lit"===iM)}${OM=rM,`@group(${OM.group}) @binding(${OM.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${OM.group}) @binding(${OM.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(MM, rM, iM) {
          const OM = `@group(${MM}) @binding(${rM}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return iM ? `${OM}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Vi}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((MM=>`\t{\n\t\tlet o = vec2i(${MM});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : OM
        }(rM.group, qr.q, "maskEdge" === iM));
        const aM = {
          shadowDirection: `${qr.i}.shadowDirection`,
          renderOffset: `${qr.i}.renderOffset`,
          eyePosition: `${qr.i}.eyePosition`
        };
        return `${Xi(rM)}${jM}${function(MM){const[rM,iM,OM]=Bi.q;return`@group(${MM.group}) @binding(${MM.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${MM.group}) @binding(${MM.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${rM}.0, ${iM}.0, ${OM}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(rM)}${ci(MM,aM,iM)}`
      }
      var OM;
      return `${MM.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${MM.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function zO(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!rM) return "";
      const jM = (aM = "fragmentInputs.vPositionW", PM = MM.sunShadow ? {
        normal: iM,
        flags: OM
      } : null, `\n\tbloxdSpShadowPosition = ${aM};\n${PM?`\tbloxdSpShadowNormal = normalize(${PM.normal});\n\tbloxdSpShadowEmissive = (${PM.flags} & ${pr.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${PM.flags} & ${pr.l}u) != 0u;\n`:""}`);
      var aM, PM;
      return MM.sunShadow && ("mask" === SM || "maskEdge" === SM) ? `${jM}${nM="fragmentInputs.position",QM="maskEdge"===SM,`\n\tbloxdSpShadowPixel = vec2i(${nM}.xy);\n${QM?`\tbloxdSpShadowZ = ${nM}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${nM}.z), dpdy(${nM}.z));\n`:""}`}` : jM;
      var nM, QM
    }
    const LO = "bloxdSpTextureRotation",
      mO = "bloxdSpTextureLayers",
      HO = `@group(${qr.f}) @binding(${qr.r}) var<storage, read> ${mO}: array<u32>;\n`;

    function hO(MM) {
      return `\tvertexOutputs.vPackTexture = ${mO}[min(u32(${MM}), arrayLength(&${mO}) - 1u)];\n`
    }

    function JO(MM) {
      return void 0 !== MM.uv
    }

    function dO(MM) {
      if (!MM) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (JO(MM)) return function(MM) {
        const {
          texture: rM,
          cells: iM,
          layers: OM
        } = MM, SM = `textureDimensions(${rM}, bloxdSpLevel)`, jM = iM ? `max(vec2u(vec2f(${SM}) / ${iM}), vec2u(1u))` : SM, aM = iM ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${jM};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${iM}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${iM}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${rM}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${SM} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${jM};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${rM}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let PM;
        if (iM)
          if (1 === OM.length) PM = `\treturn bloxdSpOwnTexel(${OM[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const MM = OM.length - 1;
            PM = `\tvar bloxdSpColour = bloxdSpOwnTexel(${OM[MM]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let rM = MM - 1; rM >= 0; rM--) PM += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${OM[rM]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            PM += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else PM = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${MM.id?`var<private> ${MO}: u32;\n`:""}${aM}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${rO(MM)};\n\treturn ${jM};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${MM.id?MO:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${rO(MM)};\n${PM}}\n`
      }(MM);
      const rM = MM,
        iM = MM => {
          const iM = MM > 0 ? `bloxdSpLayer - ${rM.layers*MM}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${MM}, ${rM.sampler}, bloxdSpTurned, ${iM}, round(bloxdSpMipLevel));`
        };
      let OM = "";
      for (let jM = 0; jM < rM.count - 1; jM++) OM += `\tif (bloxdSpLayer < ${rM.layers*(jM+1)}u) {\n\t\t${iM(jM)}\n\t}\n`;
      const SM = rM.frame ? `${rM.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${LO}: u32;\n${HO}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${LO} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${LO} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${LO} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${SM}${OM}\t${iM(rM.count-1)}\n}\n`
    }

    function yO(MM, rM, iM) {
      return !!MM.surface && "bloxdDefaultSurface" !== MM.surface && function(MM, rM) {
        return "liquid" === rM || !MM
      }(rM, iM)
    }

    function lO(MM, rM) {
      return MM.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${rM.vertexLocalPosition}, ${OO(rM.vertexFlags)});\n\t\tlet bloxdSpVertex = ${MM.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function EO(MM, rM, iM, OM, SM) {
      if (!MM.surface) return "";
      const jM = (MM, rM) => `\n\tlet bloxdSpTexelUV = ${MM};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${rM}) - 1u));`;
      let aM = "",
        PM = "0u, 0u, vec2f(0.0), 0.0";
      const nM = OM && JO(OM) ? OM : null,
        QM = OM && !JO(OM) ? OM : null;
      if (nM) {
        aM = `${nM.id?`\n\tlet bloxdSpTexture = ${nM.id};\n\t${MO} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${nM.uv};${jM(function(MM,rM){var iM;return`${null!==(iM=MM.levelUv)&&void 0!==iM?iM:MM.cells?`${rM} / ${MM.cells}`:rM} * vec2f(textureDimensions(${MM.texture}))`}(nM,"bloxdSpUv"),nM.texture)}`, PM = (nM.id ? `${MO}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else QM && (aM = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${LO} = bloxdSpTexture >> 16u;${jM(`fragmentInputs.vMainUV1 * ${(0,Xr.xb)(QM.width)}`,"textureAtlas0")}`, PM = `bloxdSpTexture & 0xffffu, ${LO}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const zM = SM.overlayColour,
        LM = zM ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        mM = "bloxdDefaultSurface" !== MM.surface || zM ? `\n\tbaseColor = vec4f(${LM}, baseColor.a);` : "",
        HM = yO(MM, rM, iM) ? `\n\t${SM.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${aM}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${SM.alpha}, ${SM.enchantTier}, ${SM.enchantColour}, ${SM.enchantSpeed}, ${null!==zM&&void 0!==zM?zM:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${SM.normal}, ${SM.localPosition}, ${OO(SM.flags)}, ${PM});\n\tlet bloxdSpSurface = ${MM.surface}(bloxdSpSurfaceIn);${mM}${HM}\n`
    }
    const UO = "bloxdSpLightIn";

    function GO(MM, rM, iM, OM) {
      if (!MM.light) return "";
      const SM = rM ? `${Xr.l}.rgb, ${Xr.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Xr.i}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: jM,
          diffuse: aM,
          emissive: PM,
          ambient: nM,
          fogColour: QM,
          fogAlpha: zM,
          normal: LM
        } = OM;
      return `\tvar ${UO} = BloxdLightIn(vec3f(0.0), ${iM?jM:"0.0"}, ${aM}, ${PM}, ${nM}, ${SM}, ${QM}, ${zM}, fragmentInputs.vPositionW, ${LM}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${UO}.litColour = bloxdLitColour(bloxdSpSurface, ${UO});\n`
    }

    function CO(MM) {
      return MM.light ? `\n\t{\n\t\tlet bloxdSpLight = ${MM.light}(bloxdSpSurface, ${UO});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const eO = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      bO = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      wO = "\treturn color;\n}",
      tO = {
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
    const gO = Object.freeze({});

    function uO(MM) {
      var rM;
      return !(null === (rM = (0, Tr.g)(MM)) || void 0 === rM || !rM.sceneDepth)
    }

    function RO(MM) {
      const rM = (0, Tr.g)(MM);
      return !!rM && yO(rM.hooks, rM.strict, rM.program)
    }

    function pO(MM, rM, iM, OM) {
      return jO(MM, rM, iM, OM, "terrain")
    }

    function WO(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const jM = function(MM) {
          return (0, Tr.c)(MM.packVariant, MM.liquid ? "liquid" : "terrain")
        }(MM),
        {
          hooks: aM
        } = jM,
        PM = PO(jM, OM),
        nM = "edge" === SM ? "maskEdge" : "plain" === SM ? "mask" : "trace",
        QM = lO(aM, tO);
      QM && (rM = pO(rM, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${QM}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const zM = "atlas" === MM.texture ? {
          count: MM.atlasCount,
          layers: MM.atlasLayers,
          width: MM.U3,
          sampler: "atlasSampler",
          frame: MM.animated ? iM : null
        } : null,
        LM = `${jM.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${zO(jM,PM,tO.normal,tO.flags,nM)}${EO(aM,jM.strict,jM.program,zM,tO)}`;
      LM && (rM = pO(rM, eO, `${eO.slice(0,-1)}${LM}`, "surface"));
      const mM = CO(aM);
      return mM && (rM = pO(rM, bO, `${GO(aM,MM.lighting,MM.dirLightCount>0,tO)}${bO}`, "light input"), rM = pO(rM, wO, `${mM.slice(1)}${wO}`, "light")), `${(0,qr.w)()}${jM.sceneDepth?`@group(${qr.f}) @binding(${qr.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${SO};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${QO(jM,PM,nM)}${dO(zM)}${iO}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${jM.code}${rM}`
    }
    const sO = CM.b.WGSL;

    function DO(MM) {
      return void 0 !== MM.packVariant
    }
    const kO = {
        SSM: 0,
        jSM: 4,
        aSM: 8,
        PSM: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      ZO = kO.aoLevels + 4,
      oO = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      fO = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      YO = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      NO = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      AO = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      xO = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      vO = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      FO = 0,
      BO = 3,
      XO = 4,
      IO = 5,
      KO = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Ir.b}, ${Ir.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Ir.b}, ${Ir.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      qO = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((MM=>Kr.e>>MM&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const TO = {
      bL: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: MM => `animDataPerTex[${MM}]`
    };

    function VO(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TO;
      return `\n\tlet atlasIdxIn = ${MM};\n\tlet animTick = ${iM.bL};\n\tlet animTickStride = ${iM.stride};\n\tlet numAnimTextures = ${iM.count};\n\t${(0,eM.f)(CM.b.WGSL,iM.perTexture)}\n\t${rM}animLayer;\n`
    }

    function cO(MM) {
      const rM = (rM, iM) => {
        const OM = rM > 0 ? `fragmentInputs.texAtlasIndex - ${MM.atlasLayers.toFixed(1)} * ${rM.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${iM?"textureSampleLevel":"textureSample"}(textureAtlas${rM}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${OM}))${iM?", atlasLod":""})`
      };
      if (1 === MM.atlasCount) return `baseColor = ${rM(0,!1)};`;
      let iM = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Xr.xb)(MM.U3)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let OM = 0; OM < MM.atlasCount; OM++) {
        const SM = MM.atlasLayers * (OM + 1) - .5;
        iM += `${OM>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Xr.xb)(SM)}) {\n\t\tbaseColor = ${rM(OM,!0)};\n\t}`
      }
      return iM
    }

    function MS(MM) {
      return `terrain-${MM.texture}${"atlas"===MM.texture?MM.atlasCount:""}${MM.animated?"-anim":""}${MM.alphaTest?"-test":""}${MM.lighting?"-lit":""}-dir${MM.dirLightCount}${MM.packed?"-packed":""}${DO(MM)?`-sp${MM.packVariant}`:""}${MM.liquid?"-liquid":""}${MM.resting?"-rest":""}`
    }

    function rS(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const OM = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const iM = "none" !== MM.texture,
          OM = "atlas" === MM.texture,
          SM = MM.dirLightCount > 0,
          jM = DO(MM);
        if (MM.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${MM.dirLightCount}`);
        let aM = 1,
          PM = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (OM) {
          MM.animated && (PM += `@group(2) @binding(${aM++}) var<storage, read> animDataPerTex: array<f32>;\n`), PM += `@group(2) @binding(${aM++}) var atlasSampler: sampler;\n`;
          for (let rM = 0; rM < MM.atlasCount; rM++) PM += `@group(2) @binding(${aM++}) var textureAtlas${rM}: texture_2d_array<f32>;\n`
        } else "single" === MM.texture && (PM += `@group(2) @binding(${aM++}) var diffuseSamplerSampler: sampler;\n`, PM += `@group(2) @binding(${aM++}) var diffuseSampler: texture_2d<f32>;\n`);
        const nM = function(MM) {
            const rM = vO,
              iM = "none" !== MM.texture,
              OM = "atlas" === MM.texture,
              SM = DO(MM);
            return MM.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${iM?"uv: vec2f,":""}\n\t${OM?"texAtlasIndices: f32,":""}\n\t${MM.lighting?"aPackedLightLevels: f32,":""}\n\t${SM?"blockFlagWords: vec2u,":""}\n}\n${KO}\n${qO}\n${"single"===MM.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${iM?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===MM.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${OM?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${MM.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${SM?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${rM.position}) position: vec3f,\n\t@location(${rM.normal}) normal: vec4f,\n\t@location(${rM.color}) color: vec4f,\n\t${iM?`@location(${rM.uv}) uv: vec2f,`:""}\n\t${MM.lighting?`@location(${rM.packedLight}) aPackedLightLevels: f32,`:""}\n\t${SM?`@location(${rM.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(MM),
          QM = `\n${NO}\n${fO}\n${YO}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${PM}\n${dr}\n${nM.declarations}\nstruct Varyings {\n\t${"none"===rM?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${MM.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${SM?"@location(5) vTerrainLambert: f32,":""}\n\t${iM?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${OM?"@location(7) texAtlasIndex: f32,":""}\n\t${MM.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${jM?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${jM&&OM?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${MM.resting?"":(0,Xr.s)(sO)}\n${xO}\n\n@vertex\nfn mainVertex(${nM.parameter}) -> Varyings {\n\t${nM.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${jM?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${pr.e.placed}u;`:""}\n\t${jM&&OM?hO("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${MM.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${iM?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${OM?function(MM){return MM?VO("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(MM.animated):""}\n\t${"single"===MM.texture&&MM.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Xr.eb)(sO)}\n\t${(0,Xr.I)(sO,MM.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${MM.resting?"":AO}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${OM?cO(MM):""}\n\t${"single"===MM.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${iM?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${MM.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${SM?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Jr}));\n\t${DO(MM)?(0,Xr.pb)(CM.b.WGSL):(0,Xr.V)(sO)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          zM = new Set;
        MM.lighting && zM.add("BLOXD_LIGHTING");
        SM && zM.add("BLOXD_TERRAIN_DIRECTIONAL");
        return vr(QM, new Map([...zM].map((MM => [MM, !0]))))
      }(MM, iM);
      if (!DO(MM)) return OM;
      const SM = WO(MM, OM, VO, rM, iM);
      return "none" === iM ? SM : `${SM}${function(MM){const rM="none"!==MM.texture&&MM.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${MM.resting?"":AO}\n\t${MM.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${rM&&"atlas"===MM.texture?cO(MM):""}\n\t${rM&&"single"===MM.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${rM?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${pr.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(MM)}`
    }
    const iS = new Map([
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

    function OS(MM, rM) {
      const iM = new Map;
      let OM = 0;
      const SM = [],
        jM = [],
        aM = [];
      for (const QM of rM) {
        var PM, nM;
        const rM = null !== (PM = QM.type.trim().split(/\s+/).pop()) && void 0 !== PM ? PM : QM.type,
          zM = iS.get(rM);
        if (!zM) throw new Error(`Lite: no uniform layout for ${QM.name}: ${QM.type}`);
        const LM = null !== (nM = QM.arraySize) && void 0 !== nM ? nM : 0,
          mM = LM ? 4 : zM.align;
        OM = Math.ceil(OM / mM) * mM;
        const HM = LM ? 4 * Math.ceil(zM.floats / 4) : zM.floats;
        if (iM.set(QM.name, {
            offset: OM,
            floats: zM.floats,
            arraySize: LM,
            stride: HM
          }), LM && zM.floats <= 2) {
          const rM = `${MM}_${aM.length}_strided`;
          jM.push(`struct ${rM} {\n\t@size(16) el: ${zM.wgsl},\n}`), aM.push(QM.name), SM.push(`\t@align(16) ${QM.name}: array<${rM}, ${LM}>,`)
        } else LM ? SM.push(`\t@align(16) ${QM.name}: array<${zM.wgsl}, ${LM}>,`) : SM.push(`\t${QM.name}: ${zM.wgsl},`);
        OM += LM ? HM * LM : zM.floats
      }
      return {
        slots: iM,
        floats: Math.max(4, 4 * Math.ceil(OM / 4)),
        wgsl: `${jM.join("\n")}\nstruct ${MM} {\n${SM.join("\n")}\n}\n`,
        stridedArrays: aM
      }
    }
    const SS = [{
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
      jS = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      aS = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function PS(MM, rM) {
      return `#if defined(${MM}) && ${MM}DIRECTUV == 0\nvarying v${rM}UV: vec2f;\n#endif`
    }

    function nS(MM, rM, iM) {
      return `#if defined(${MM}) && ${MM}DIRECTUV == 0\nif (uniforms.v${rM}Infos.x==0.)\n{vertexOutputs.v${rM}UV= (uniforms.${iM}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${rM}UV= (uniforms.${iM}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function QS(MM, rM, iM) {
      return `#ifdef ${MM}\n#if ${MM}DIRECTUV == 1\n#define v${rM}UV vMainUV1\n#elif ${MM}DIRECTUV == 2\n#define v${rM}UV vMainUV2\n#else\nvarying v${rM}UV: vec2f;\n#endif\nvar ${iM}SamplerSampler: sampler;\nvar ${iM}Sampler: texture_2d<f32>;\n#endif`
    }
    const zS = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      LS = 256,
      mS = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      HS = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      hS = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      JS = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      dS = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      yS = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      lS = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      ES = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${HS}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${PS("OPACITY","Opacity")}\n${PS("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${lS}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${hS}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${nS("OPACITY","Opacity","opacity")}\n${nS("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${JS}\n#define CUSTOM_VERTEX_MAIN_END\n${dS}\n}\n`;
    const US = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${QS("OPACITY","Opacity","opacity")}\n${QS("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${lS}\n${yS}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((MM,rM)=>function(MM){const rM=`
    frame.lights[LITE_LIGHT$ {
        MM
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      MM
    }\
    nvar diffuse$ {
      MM
    }: vec4f = $ {
      rM
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      MM
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      rM
    }.vLightData, diffuse$ {
      MM
    }.rgb, $ {
      rM
    }.vLightSpecular.rgb, diffuse$ {
      MM
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(rM))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, GS = /^([gimus]+)!/, CS = new Set;

    function eS(MM) {
      CS.has(MM) || (CS.add(MM), console.warn(`Lite: no place for plugin code at ${MM} in the standard shader: it is left out`))
    }

    function bS(MM, rM) {
      let iM = MM;
      const OM = new Map;
      for (const [jM, aM] of rM) {
        var SM;
        OM.set(jM, `${null!==(SM=OM.get(jM))&&void 0!==SM?SM:""}${aM}\n`)
      }
      for (const [jM, aM] of OM) {
        if (!jM.startsWith("!")) {
          const MM = `#define ${jM}`;
          if (!iM.includes(MM)) {
            eS(jM);
            continue
          }
          iM = iM.replace(MM, (() => `\n${aM}\n${MM}`));
          continue
        }
        let MM = jM.substring(1),
          rM = "g";
        if (MM.startsWith("!")) rM = "", MM = MM.substring(1);
        else {
          const iM = GS.exec(MM);
          iM && (rM = iM[1], MM = MM.substring(rM.length + 1))
        }
        const OM = new RegExp(MM, rM.includes("g") ? rM : `${rM}g`);
        let SM = OM.exec(iM);
        for (SM || eS(jM); SM;) {
          const MM = SM,
            rM = aM.replace(/\$(\d+)/g, ((rM, iM) => Number(iM) < MM.length ? MM[Number(iM)] : ""));
          iM = iM.substring(0, MM.index) + rM + iM.substring(MM.index + MM[0].length), OM.lastIndex = MM.index + rM.length, SM = OM.exec(iM)
        }
      }
      return iM
    }
    const wS = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      tS = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      gS = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function uS(MM) {
      const rM = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let iM = MM.replace(wS, ((MM, iM, OM, SM, jM, aM) => ("attribute" === iM ? rM.attributes.push({
        name: jM,
        type: aM
      }) : void 0 === iM ? rM.varyings.push({
        name: jM,
        type: aM,
        interpolation: pS(aM, OM, SM)
      }) : rM.uniforms.push({
        name: jM,
        type: RS(aM)
      }), "")));
      return iM = iM.replace(tS, ((MM, iM) => (rM.samplers.add(iM), ""))), iM = iM.replace(gS, ((MM, iM, OM) => (rM.textures.push({
        name: iM,
        type: OM
      }), ""))), rM.body = iM, rM
    }

    function RS(MM) {
      const rM = MM.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        iM = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(rM);
      if (!iM) throw new Error(`Lite: unsupported uniform type ${MM}`);
      return iM
    }

    function pS(MM, rM, iM) {
      return void 0 === rM && void 0 === iM ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(MM.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === rM ? "@interpolate(flat) " : `@interpolate(${null!==rM&&void 0!==rM?rM:"perspective"}, ${null!==iM&&void 0!==iM?iM:"center"}) `
    }

    function WS(MM) {
      return ZS({
        defines: MM.defines,
        vertex: bS(ES, MM.vertexCode),
        fragment: bS(US, MM.fragmentCode),
        members: [...SS, ...MM.defines.has("OPACITY") ? jS : [], ...MM.defines.has("EMISSIVE") ? aS : [], ...MM.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function sS(MM) {
      const rM = MM.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (rM === MM) throw new Error("Lite: fragment main has no return");
      return rM
    }
    const DS = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${HS}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${hS}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${JS}\n${dS}\n}\n`,
      kS = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${yS}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function ZS(MM) {
      const rM = MM.defines,
        iM = uS(vr(MM.vertex, rM)),
        OM = uS(vr(MM.fragment, rM)),
        SM = new Map;
      for (const EM of [...iM.varyings, ...OM.varyings]) SM.has(EM.name) || SM.set(EM.name, EM);
      const jM = [...SM.values()].map(((MM, rM) => `\t@location(${rM}) ${MM.interpolation}${MM.name}: ${MM.type},`)),
        aM = [...MM.members];
      for (const EM of [...iM.uniforms, ...OM.uniforms]) aM.some((MM => MM.name === EM.name)) || aM.push(EM);
      const PM = OS(MM.structName, aM),
        nM = [],
        QM = [];
      let zM = 1;
      const LM = new Set;
      for (const EM of [...iM.textures, ...OM.textures]) {
        if (LM.has(EM.name)) continue;
        LM.add(EM.name);
        const MM = `${EM.name}Sampler`,
          rM = zM++,
          iM = zM++,
          OM = EM.type.startsWith("texture_2d_array") ? "2d-array" : EM.type.startsWith("texture_cube") ? "cube" : "2d";
        nM.push({
          name: EM.name,
          binding: rM,
          samplerBinding: iM,
          dimension: OM
        }), QM.push(`@group(2) @binding(${rM}) var ${EM.name}: ${EM.type};`), QM.push(`@group(2) @binding(${iM}) var ${MM}: sampler;`)
      }
      for (const EM of [...iM.samplers, ...OM.samplers])
        if (!LM.has(EM.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${EM} has no texture`);
      const mM = [NO, mS, PM.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${MM.structName};`, ...QM].join("\n"),
        HM = iM.attributes,
        hM = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...iM.attributes.map(((MM, rM) => `\t@location(${rM}) ${MM.name}: ${MM.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        JM = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...jM, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        dM = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...OM.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...jM, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", dr, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Jr}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        yM = MM => {
          for (const rM of PM.stridedArrays) MM = MM.replace(new RegExp(`\\b${rM}\\s*\\[(.*?)\\]`, "g"), `${rM}[$1].el`);
          return MM
        };
      return {
        vertex: `${mM}\n${hM}\n${JM}\n${yM(iM.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${mM}\n${dM}\n${sS((lM=yM(OM.body),lM.includes("fragmentInputs.position")?lM.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):lM))}`,
        attributes: HM,
        material: PM,
        textures: nM
      };
      var lM
    }
    const oS = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      fS = MM => ({
        name: MM,
        type: "vec3"
      }),
      YS = MM => ({
        name: MM,
        type: "float"
      }),
      NS = OS("EarthSkyUniforms", [fS("viewFrom"), YS("exposureScale"), fS("zenithOffset"), YS("fogOn"), fS("up"), YS("ditherOn"), fS("sun"), YS("turbidity"), fS("tint"), YS("rayleigh"), fS("sunDir"), YS("mieStrength"), fS("inScatterR"), YS("mieFocus"), fS("inScatterM"), YS("sunE"), fS("extinctionBeta"), YS("sunsetMix"), YS("mieScale"), YS("mieBase"), YS("mieSlope"), YS("sunDiscE"), YS("exposure")]),
      AS = `${NO}\n${mS}\n${NS.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      xS = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${oS.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      vS = `\n${dr}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Yr).map((MM=>{let[rM,iM]=MM;return`const TONE_${rM}: f32 = ${iM};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${Nr};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Jr}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var FS = iM(38034);
    const BS = new FS.sh,
      XS = new FS.sh,
      IS = new FS.Quaternion,
      KS = new Float64Array(3),
      qS = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      TS = new Float64Array(16);

    function VS(MM, rM, iM) {
      const OM = iM.worldMatrix;
      var SM;
      MM.updateFloat3("viewFrom", OM[12], OM[13], OM[14]), MM.updateFloatsFrom("zenithOffset", rM.cameraOffset, 0, 3), MM.updateFloatsFrom("up", rM.up, 0, 3), rM.luminance > 0 && (MM.updateFloat("exposure", rM.luminance), MM.updateFloat("exposureScale", (SM = rM.luminance, Math.log2(2 / Math.pow(SM, 4))))), MM.updateFloat("turbidity", rM.turbidity), MM.updateFloat("rayleigh", rM.rayleigh), MM.updateFloat("mieStrength", rM.mieCoefficient), MM.updateFloat("mieFocus", rM.mieDirectionalG), MM.updateFloatsFrom("tint", rM.tint, 0, 3), MM.updateFloat("fogOn", rM.fog && iM.fogEnabled && 0 !== iM.fogMode ? 1 : 0), MM.updateFloat("ditherOn", rM.dithering ? 1 : 0);
      const jM = rM.sunPosition;
      if (BS.set(jM[0], jM[1], jM[2]), !rM.useSunPosition) {
        const MM = Math.PI * (rM.inclination - .5),
          iM = 2 * Math.PI * (rM.azimuth - .5);
        BS.set(rM.distance * Math.cos(iM) * Math.cos(MM), rM.distance * Math.sin(-MM), rM.distance * Math.sin(iM) * Math.cos(MM)), FS.Quaternion.FromUnitVectorsToRef(FS.sh.UpReadOnly, XS.set(rM.up[0], rM.up[1], rM.up[2]), IS), BS.rotateByQuaternionToRef(IS, BS)
      }
      MM.updateVector3("sun", BS), KS[0] = BS.x, KS[1] = BS.y, KS[2] = BS.z;
      const aM = fr(rM, KS, qS);
      MM.updateFloatsFrom("sunDir", aM.sunDir, 0, 3), MM.updateFloat("sunE", aM.sunE), MM.updateFloatsFrom("inScatterR", aM.inScatterR, 0, 3), MM.updateFloatsFrom("inScatterM", aM.inScatterM, 0, 3), MM.updateFloatsFrom("extinctionBeta", aM.extinctionBeta, 0, 3), MM.updateFloat("sunsetMix", aM.sunsetMix), MM.updateFloat("sunDiscE", aM.sunDiscE), MM.updateFloat("mieScale", aM.mieScale), MM.updateFloat("mieBase", aM.mieBase), MM.updateFloat("mieSlope", aM.mieSlope)
    }

    function cS(MM, rM) {
      const iM = TS;
      iM[0] = rM.far, iM[5] = rM.far, iM[10] = rM.far, iM[15] = 1;
      const OM = MM.infiniteDistance;
      for (let SM = 0; SM < 3; SM++) iM[12 + SM] = MM.position[SM] + (OM ? rM.worldMatrix[12 + SM] : 0);
      return TS
    }
    class Mj {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(MM, rM, iM, OM, SM) {
        iM !== this.pipeline && (MM.setPipeline(iM), this.pipeline = iM), MM.setBindGroup(1, OM, [SM]);
        const jM = rM.material.bindGroup;
        jM !== this.materialGroup && (MM.setBindGroup(2, jM), this.materialGroup = jM);
        const aM = rM.program.packGroup;
        aM && aM !== this.packGroup && (MM.setBindGroup(qr.f, aM), this.packGroup = aM);
        const {
          vertexBuffers: PM,
          vertexOffsets: nM
        } = this;
        for (let QM = 0; QM < rM.vertexBuffers.length; QM++) PM[QM] === rM.vertexBuffers[QM] && nM[QM] === rM.vertexOffsets[QM] || (MM.setVertexBuffer(QM, rM.vertexBuffers[QM], rM.vertexOffsets[QM]), PM[QM] = rM.vertexBuffers[QM], nM[QM] = rM.vertexOffsets[QM]);
        rM.indexBuffer && rM.indexBuffer !== this.indexBuffer && (MM.setIndexBuffer(rM.indexBuffer, rM.indexFormat), this.indexBuffer = rM.indexBuffer)
      }
    }
    class rj {
      constructor(MM, rM, iM, OM) {
        this.modelMeshes = MM, this.n_ = rM, this.maker = iM, this.warnOnce = OM, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (MM, rM) => {
          (rM < -1 || rM > 1) && this.warnOnce(`group:${rM}`, `rendering group ${rM} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(MM) {
        this.collectGroup(MM, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(MM, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(MM, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.n_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(ij), this.transparentDraws.sort(Oj)
      }
      collectGroup(MM, rM, iM, OM, SM) {
        const jM = this.modelMeshes.group(rM),
          aM = this.n_.group(rM),
          PM = 0 === rM ? null === aM || void 0 === aM ? void 0 : aM.opaque : void 0;
        this.collectList(MM, null === jM || void 0 === jM ? void 0 : jM.opaque, PM || null === aM || void 0 === aM ? void 0 : aM.opaque, rM, !1, iM, SM), PM && (this.n_.drawn += this.maker.bundleDraws(MM, PM, rM)), this.collectList(MM, null === jM || void 0 === jM ? void 0 : jM.alphaTest, void 0, rM, !1, iM, SM), this.collectList(MM, null === jM || void 0 === jM ? void 0 : jM.transparent, null === aM || void 0 === aM ? void 0 : aM.transparent, rM, !0, OM, SM)
      }
      collectList(MM, rM, iM, OM, SM, jM, aM) {
        var PM;
        const nM = jM.length;
        rM && this.maker.pushDraws(MM, rM.units, rM.units.length, OM, SM, jM, rM.rows), iM && (this.n_.drawn += this.maker.pushDraws(MM, iM, iM.length, OM, SM, jM));
        const QM = SM ? null === (PM = this.modelMeshes.group(OM)) || void 0 === PM ? void 0 : PM.text : void 0;
        QM && this.maker.pushDraws(MM, QM.units, QM.units.length, OM, !0, jM, QM.rows), aM && Sj(jM, nM)
      }
    }

    function ij(MM, rM) {
      return MM.program.id - rM.program.id || MM.material.owner.uniqueId - rM.material.owner.uniqueId
    }

    function Oj(MM, rM) {
      return MM.material.owner.uniqueId - rM.material.owner.uniqueId
    }

    function Sj(MM, rM) {
      for (let iM = rM + 1; iM < MM.length; iM++) {
        const OM = MM[iM];
        let SM = iM - 1;
        for (; SM >= rM && Oj(MM[SM], OM) > 0; SM--) MM[SM + 1] = MM[SM];
        MM[SM + 1] = OM
      }
    }
    const jj = {};

    function aj(MM) {
      return MM.hasThinInstances ? "thin" : MM.nSM || MM._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Pj(MM, rM, iM) {
      return MM ? (iM._needUVs = !0, MM.optimizeUVAllocation && (0, gM.E)(MM.matrix) ? (iM[`${rM}DIRECTUV`] = MM.uvSet + 1, iM[`MAINUV${MM.uvSet+1}`] = !0) : iM[`${rM}DIRECTUV`] = 0, !0) : (iM[`${rM}DIRECTUV`] = 0, !1)
    }

    function nj(MM) {
      const rM = new Map;
      for (const iM in MM) {
        if (95 === iM.charCodeAt(0)) continue;
        const OM = MM[iM],
          SM = typeof OM;
        "number" === SM || "string" === SM ? rM.set(iM, String(OM)) : OM && "function" !== SM && rM.set(iM, !0)
      }
      return rM
    }

    function Qj(MM) {
      const rM = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: iM
        }
        of MM.features)
        for (const MM in iM) rM[MM] = iM[MM];
      return rM
    }

    function zj(MM) {
      const rM = MM.parts.geometry;
      return null !== rM && void 0 !== rM && rM.live ? rM : null
    }

    function Lj(MM) {
      var rM;
      return null !== (rM = zj(MM)) && void 0 !== rM ? rM : jj
    }
    class mj {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = MM, this.warnOnce = rM, this.programWithModel = iM, this.packFailed = OM, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(MM, rM, iM, OM, SM) {
        const jM = rM.owner;
        let aM = this.drawStates.get(rM);
        if (!aM) {
          const MM = rM.parts.materials[rM.range];
          if (!MM) return this.warnOnce("model", `${iM.name} on ${jM.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          aM = {
            defines: Qj(MM),
            model: MM,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: SM,
            groupId: OM,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(rM, aM)
        }
        if (this.programCurrent(aM, rM, SM, OM)) return aM.program;
        const {
          model: PM
        } = aM, nM = Lj(rM), QM = this.instanceLayout(jM, SM), zM = this.definesBits(jM);
        if (!this.prepareModelDefines(MM, jM, PM, aM.defines, OM, SM)) return null;
        aM.instancing = SM, aM.groupId = OM, aM.modelVersion = PM.version, aM.geometry = nM, aM.instanceLayout = QM, aM.definesBits = zM;
        const LM = function(MM) {
          let rM = "";
          for (const [iM, OM] of MM) rM += !0 === OM ? `${iM};` : `${iM}=${OM};`;
          return rM
        }(nj(aM.defines));
        return LM === aM.definesKey && aM.packVariant === this.modelPackVariant && aM.program && !this.packFailed(aM.program) || (aM.definesKey = LM, aM.packVariant = this.modelPackVariant, aM.program = this.programWithModel(PM, aM.defines, LM)), aM.program
      }
      programCurrent(MM, rM, iM, OM) {
        return null !== MM.program && !this.packFailed(MM.program) && MM.instancing === iM && MM.groupId === OM && this.definesHold(MM, rM, iM)
      }
      definesHold(MM, rM, iM) {
        return MM.modelVersion === MM.model.version && MM.geometry === Lj(rM) && MM.instanceLayout === this.instanceLayout(rM.owner, iM) && MM.definesBits === this.definesBits(rM.owner) && MM.packVariant === this.modelPackVariant
      }
      modelPackKind(MM) {
        var rM;
        return 0 === this.modelPackVariant ? null : null !== (rM = (0, wM.v)(MM, bM.j.name)) && void 0 !== rM && rM.active ? "placed" : MM.item ? "item" : MM.lifeform ? "lifeform" : MM.box ? "box" : null
      }
      instanceLayout(MM, rM) {
        var iM, OM, SM;
        return "thin" === rM ? null !== (SM = this.resources.o9.get(MM)) && void 0 !== SM ? SM : null : "instanced" === rM && null !== (iM = null === (OM = MM._userInstancedBuffersStorage) || void 0 === OM ? void 0 : OM.interleavedKinds) && void 0 !== iM ? iM : null
      }
      definesBits(MM) {
        const rM = this.view;
        return (MM.visibility < 1 ? 1 : 0) | (MM.hasVertexAlpha ? 2 : 0) | (MM.applyFog ? 4 : 0) | (MM.useVertexColors ? 8 : 0) | (MM.nonUniformScaling ? 16 : 0) | (rM.fogEnabled && 0 !== rM.fogMode ? 32 : 0) | (rM.lightsEnabled ? 64 : 0) | rM.lightCount << 7
      }
      prepareLightDefines(MM, rM, iM) {
        let OM = 0;
        if (this.view.lightsEnabled && !rM) {
          const rM = Math.min(iM, 4);
          for (; OM < this.view.lightCount && (MM[`LIGHT${OM}`] = !0, MM[`LITE_LIGHT${OM}_SLOT`] = OM, OM++, MM._needNormals = !0, OM !== rM););
        }
        for (let SM = OM; SM < 4; SM++) MM[`LIGHT${SM}`] = !1, MM[`LITE_LIGHT${SM}_SLOT`] = void 0
      }
      prepareModelDefines(MM, rM, iM, OM, SM, jM) {
        const {
          features: aM
        } = iM;
        OM._needNormals = !1, OM._needUVs = !1;
        const PM = this.view;
        this.prepareLightDefines(OM, iM.disableLighting, iM.maxSimultaneousLights), OM.MAINUV1 = !1, OM.MAINUV2 = !1;
        const nM = iM.diffuseTexture;
        nM ? (OM._needUVs = !0, OM.DIFFUSE = !0, nM.optimizeUVAllocation && (0, gM.E)(nM.matrix) ? (OM.DIFFUSEDIRECTUV = nM.uvSet + 1, OM[`MAINUV${nM.uvSet+1}`] = !0) : OM.DIFFUSEDIRECTUV = 0, nM.uvSet > 1 && this.warnOnce(`uvset:${iM.name}`, `${iM.name} samples UV set ${nM.uvSet+1}, which is not supported`)) : (OM.DIFFUSE = !1, OM.DIFFUSEDIRECTUV = 0);
        const QM = iM.opacityTexture,
          zM = iM.emissiveTexture;
        OM.OPACITY = Pj(QM, "OPACITY", OM), OM.OPACITYRGB = null !== QM && QM.getAlphaFromRGB, OM.EMISSIVE = Pj(zM, "EMISSIVE", OM), (QM && QM.uvSet > 1 || zM && zM.uvSet > 1) && this.warnOnce(`uvset:${iM.name}`, `${iM.name} samples a UV set past 2, which is not supported`);
        const LM = iM.reflectionTexture,
          mM = null !== LM;
        if (mM) {
          if (!this.resources.boundTexture(LM)) return !1;
          OM._needNormals = !0
        }
        OM.REFLECTION = mM, OM.REFLECTIONMAP_3D = mM, OM.REFLECTIONMAP_SKYBOX = mM, OM.REFLECTIONMAP_OPPOSITEZ = mM && (MM.useRightHandedSystem ? !LM.invertZ : LM.invertZ), OM.ROUGHNESS = mM && iM.roughness > 0, OM.REFLECTIONOVERALPHA = mM && iM.useReflectionOverAlpha, OM.LITE_REFLECTION_LUMINANCE = mM && "cube" === LM.source.kind && LM.source.luminance, (rM.skeleton || rM.morphTargetManager) && this.warnOnce(`skin:${rM.name}`, `${rM.name} has bones or morph targets, which are not supported`), OM.FOG = iM.fogEnabled && rM.applyFog && PM.fogEnabled && 0 !== PM.fogMode, OM.NONUNIFORMSCALING = rM.nonUniformScaling;
        const {
          visibility: HM,
          hasVertexAlpha: hM
        } = rM;
        OM.ALPHATEST = (0, wM.S)(iM, HM, hM), OM.ALPHAFROMDIFFUSE = (0, wM.fb)(iM), OM.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== iM.transparencyMode, OM.ALPHABLEND = null === iM.transparencyMode || (0, wM.O)(iM, HM, hM), OM.PREMULTIPLYALPHA = 7 === iM.alphaMode || 8 === iM.alphaMode, OM.EMISSIVEASILLUMINATION = iM.useEmissiveAsIllumination, OM.LINKEMISSIVEWITHDIFFUSE = iM.linkEmissiveWithDiffuse, OM.TWOSIDEDLIGHTING = !iM.backFaceCulling && iM.twoSidedLighting, OM.INSTANCES = "none" !== jM, OM.THIN_INSTANCES = "thin" === jM, OM.LITE_FRONT_LAYER = SM >= 1;
        for (const {
            feature: eM,
            state: bM,
            active: wM
          }
          of aM) {
          var JM, dM;
          if (wM) null === (JM = (dM = (0, sr.i)(eM)).prepareDefinesBeforeAttributes) || void 0 === JM || JM.call(dM, bM, OM, MM, rM)
        }
        this.modelPackKind(iM) && (OM._needNormals = !0), OM.NORMAL = OM._needNormals && rM.isVerticesDataPresent("normal"), OM.UV1 = OM._needUVs && rM.isVerticesDataPresent("uv"), OM.UV2 = OM._needUVs && rM.isVerticesDataPresent("uv2");
        const yM = rM.useVertexColors && rM.isVerticesDataPresent("color");
        OM.VERTEXCOLOR = yM, OM.VERTEXALPHA = rM.hasVertexAlpha && yM, OM.INSTANCESCOLOR = "none" !== jM && rM.isVerticesDataPresent("instanceColor");
        for (const {
            feature: eM,
            state: bM,
            active: wM
          }
          of aM) {
          var lM, EM;
          if (wM) null === (lM = (EM = (0, sr.i)(eM)).prepareDefines) || void 0 === lM || lM.call(EM, bM, OM, MM, rM, iM)
        }
        const UM = MM.ph();
        for (const {
            feature: eM,
            state: bM,
            active: wM
          }
          of aM) {
          var GM, CM;
          if (wM && !1 === (null === (GM = (CM = (0, sr.i)(eM)).isReadyForSubMesh) || void 0 === GM ? void 0 : GM.call(CM, bM, OM, MM, UM))) return !1
        }
        return !0
      }
    }

    function Hj(MM, rM, iM) {
      return MM.codeVersion !== rM.version && function(MM, rM) {
        const iM = [],
          OM = [];
        for (const {
            feature: mM,
            state: HM,
            active: hM
          }
          of rM.features) {
          var SM, jM, aM, PM;
          if (hM) hj(null === (SM = (jM = (0, sr.i)(mM)).getCustomCode) || void 0 === SM ? void 0 : SM.call(jM, HM, "vertex", CM.b.WGSL), iM), hj(null === (aM = (PM = (0, sr.i)(mM)).getCustomCode) || void 0 === aM ? void 0 : aM.call(PM, HM, "fragment", CM.b.WGSL), OM)
        }
        const nM = [];
        for (const {
            feature: mM,
            state: HM
          }
          of rM.features) {
          var QM, zM;
          const MM = null === (QM = (zM = (0, sr.i)(mM)).getUniforms) || void 0 === QM ? void 0 : QM.call(zM, HM, CM.b.WGSL);
          for (const rM of null !== (LM = null === MM || void 0 === MM ? void 0 : MM.ubo) && void 0 !== LM ? LM : []) {
            var LM;
            rM.size && rM.type && nM.push({
              name: rM.name,
              type: rM.type,
              arraySize: rM.arraySize
            })
          }
        }
        MM.vertexCode = iM, MM.fragmentCode = OM, MM.pluginUniforms = nM, MM.codeKey = JSON.stringify([iM, OM, nM]), MM.codeVersion = rM.version
      }(MM, rM), `${iM}#${MM.codeKey}`
    }

    function hj(MM, rM) {
      if (MM)
        for (const iM in MM) MM[iM] && rM.push([iM, MM[iM]])
    }
    const Jj = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class dj {
      constructor(MM) {
        this.warnOnce = MM, this.states = new Map
      }
      renderState(MM, rM, iM, OM) {
        var SM;
        let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          aM = null !== (SM = MM.sideOrientation) && void 0 !== SM ? SM : rM.sideOrientation;
        rM._getWorldMatrixDeterminant() < 0 && (aM = 0 === aM ? 1 : 0);
        const PM = "triangle-list" === jM,
          nM = iM ? MM.alphaMode : 0,
          QM = (!iM || (0 === nM || MM.forceDepthWrite)) && !MM.disableDepthWrite,
          zM = PM && MM.backFaceCulling ? MM.cullBackFaces ? "back" : "front" : "none",
          LM = PM && 0 !== aM ? "ccw" : "cw",
          mM = MM.depthFunction,
          HM = PM ? MM.zOffset : 0,
          hM = PM ? MM.zOffsetUnits : 0,
          JM = !MM.disableColorWrite;
        return OM && OM.alphaMode === nM && OM.depthWrite === QM && OM.depthFunction === mM && OM.cullMode === zM && OM.frontFace === LM && OM.zOffset === HM && OM.zOffsetUnits === hM && OM.colourWrite === JM && OM.topology === jM ? OM : this.stateFor(nM, QM, mM, zM, LM, HM, hM, JM, jM)
      }
      stateFor(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = `${MM}|${rM}|${iM}|${OM}|${SM}|${jM}|${aM}|${PM}|${nM}`;
        let zM = this.states.get(QM);
        if (!zM) {
          var LM;
          const mM = MM ? jr(MM) : null;
          MM && !mM && this.warnOnce(`alpha:${MM}`, `alpha mode ${MM} is not supported`), zM = {
            key: QM,
            alphaMode: MM,
            depthFunction: iM,
            zOffset: jM,
            zOffsetUnits: aM,
            topology: nM,
            blend: mM,
            depthWrite: rM,
            depthCompare: iM && null !== (LM = Jj.get(iM)) && void 0 !== LM ? LM : null,
            cullMode: OM,
            frontFace: SM,
            depthBias: -aM,
            depthBiasSlopeScale: -jM,
            colourWrite: PM
          }, this.states.set(QM, zM)
        }
        return zM
      }
    }
    var yj = iM(38303);

    function lj(MM) {
      if (!MM.frozen) return -1;
      let rM = MM.version;
      for (const {
          feature: iM,
          state: OM,
          active: SM
        }
        of MM.features) {
        if (!SM || !iM.bind) continue;
        const MM = (0, sr.i)(iM).uniformsVersion;
        if (!MM) return -1;
        rM += MM(OM)
      }
      return rM
    }
    class Ej {
      constructor(MM, rM, iM) {
        this.slots = MM, this.data = rM, this.textures = iM, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(MM, rM) {
        this.write4(MM, rM, 0, 0, 0, 1)
      }
      updateFloat2(MM, rM, iM) {
        this.write4(MM, rM, iM, 0, 0, 2)
      }
      updateFloat3(MM, rM, iM, OM) {
        this.write4(MM, rM, iM, OM, 0, 3)
      }
      updateFloat4(MM, rM, iM, OM, SM) {
        this.write4(MM, rM, iM, OM, SM, 4)
      }
      updateVector3(MM, rM) {
        this.write4(MM, rM.x, rM.y, rM.z, 0, 3)
      }
      updateVector4(MM, rM) {
        this.write4(MM, rM.x, rM.y, rM.z, rM.w, 4)
      }
      updateColor3(MM, rM) {
        this.write4(MM, rM.r, rM.g, rM.b, 0, 3)
      }
      updateColor4(MM, rM, iM) {
        this.write4(MM, rM.r, rM.g, rM.b, iM, 4)
      }
      updateFloatsFrom(MM, rM, iM, OM) {
        const SM = this.slots.get(MM);
        if (!SM) return;
        const jM = this.data,
          aM = SM.offset;
        for (let PM = 0; PM < OM; PM++) jM[aM + PM] = rM[iM + PM]
      }
      updateFloat3TimesFloats(MM, rM, iM, OM) {
        const SM = this.slots.get(MM);
        if (!SM) return;
        const jM = this.data,
          aM = SM.offset;
        jM[aM] = rM[iM] * OM[0], jM[aM + 1] = rM[iM + 1] * OM[1], jM[aM + 2] = rM[iM + 2] * OM[2]
      }
      p_(MM, rM) {
        const iM = this.slots.get(MM);
        iM && this.data.set(rM.m, iM.offset)
      }
      updateMatrixFloats(MM, rM) {
        const iM = this.slots.get(MM);
        iM && this.data.set(rM, iM.offset)
      }
      updateFloatArray(MM, rM) {
        const iM = this.slots.get(MM);
        if (!iM) return;
        if (!iM.arraySize || iM.stride === iM.floats) return void this.data.set(rM, iM.offset);
        const OM = Math.min(rM.length, iM.floats * iM.arraySize);
        for (let SM = 0; SM < OM; SM++) this.data[iM.offset + Math.floor(SM / iM.floats) * iM.stride + SM % iM.floats] = rM[SM]
      }
      updateArray(MM, rM) {
        this.updateFloatArray(MM, rM)
      }
      setTexture(MM, rM) {
        this.textures.set(MM, rM), this.expected.delete(MM)
      }
      expectTexture(MM) {
        this.textures.set(MM, null), this.expected.add(MM)
      }
      write4(MM, rM, iM, OM, SM, jM) {
        const aM = this.slots.get(MM);
        if (!aM) return;
        const PM = this.data,
          nM = aM.offset;
        PM[nM] = rM, jM > 1 && (PM[nM + 1] = iM), jM > 2 && (PM[nM + 2] = OM), jM > 3 && (PM[nM + 3] = SM)
      }
    }

    function Uj(MM, rM) {
      const iM = zS,
        OM = yj.f,
        SM = MM.lights,
        jM = Math.min(MM.lightCount, 8);
      for (let aM = 0; aM < jM; aM++) {
        const MM = iM.lights + aM * iM.lightStride,
          jM = aM * yj.c;
        rM[MM] = SM[jM + OM.vector], rM[MM + 1] = SM[jM + OM.vector + 1], rM[MM + 2] = SM[jM + OM.vector + 2], rM[MM + 3] = SM[jM + OM.kind] === yj.e.directional ? 1 : 0, rM[MM + 4] = SM[jM + OM.diffuse], rM[MM + 5] = SM[jM + OM.diffuse + 1], rM[MM + 6] = SM[jM + OM.diffuse + 2], rM[MM + 7] = SM[jM + OM.range], rM[MM + 8] = SM[jM + OM.specular], rM[MM + 9] = SM[jM + OM.specular + 1], rM[MM + 10] = SM[jM + OM.specular + 2], rM[MM + 11] = SM[jM + OM.range]
      }
      rM[iM.fogInfos] = MM.fogMode, rM[iM.fogInfos + 1] = MM.fogStart, rM[iM.fogInfos + 2] = MM.fogEnd, rM[iM.fogInfos + 3] = MM.fogDensity, rM[iM.fogColour] = MM.fogColour[0], rM[iM.fogColour + 1] = MM.fogColour[1], rM[iM.fogColour + 2] = MM.fogColour[2], rM[iM.outputHeight] = MM.renderHeight, rM[iM.animTick] = MM.animTick, rM[iM.timeMs] = MM.timeMs
    }
    class Gj {
      constructor(MM) {
        this.instancesOf = MM
      }
      refreshModelUniforms(MM, rM, iM, OM) {
        const SM = lj(iM);
        if (SM >= 0 && SM === rM.heldVersion && rM.textures.get("diffuseSampler") === iM.diffuseTexture && rM.textures.get("reflectionCubeSampler") === iM.reflectionTexture && rM.textures.get("opacitySampler") === iM.opacityTexture && rM.textures.get("emissiveSampler") === iM.emissiveTexture) return !0;
        if (SM < 0)
          for (const jM of this.instancesOf(iM)) jM.heldVersion = -1;
        return this.writeModelUniforms(MM, rM, iM, OM), rM.heldVersion = SM, !1
      }
      writeModelUniforms(MM, rM, iM, OM) {
        const {
          ubo: SM
        } = rM, jM = iM.diffuseTexture, aM = iM.diffuseColor;
        SM.updateFloat4("vDiffuseColor", aM[0], aM[1], aM[2], iM.alpha), jM && (SM.updateFloat2("vDiffuseInfos", jM.uvSet, jM.level), SM.updateMatrixFloats("diffuseMatrix", jM.matrix)), SM.updateFloat("alphaCutOff", iM.alphaCutOff), SM.updateFloatsFrom("vEmissiveColor", iM.emissiveColor, 0, 3), SM.updateFloat3TimesFloats("vAmbientColor", OM.ambientColour, 0, iM.ambientColor);
        const PM = iM.specularColor;
        SM.updateFloat4("vSpecularColor", PM[0], PM[1], PM[2], iM.specularPower), SM.setTexture("diffuseSampler", jM);
        const nM = iM.opacityTexture;
        nM && (SM.updateFloat2("vOpacityInfos", nM.uvSet, nM.level), SM.updateMatrixFloats("opacityMatrix", nM.matrix)), SM.setTexture("opacitySampler", nM);
        const QM = iM.emissiveTexture;
        QM && (SM.updateFloat2("vEmissiveInfos", QM.uvSet, QM.level), SM.updateMatrixFloats("emissiveMatrix", QM.matrix)), SM.setTexture("emissiveSampler", QM);
        const zM = iM.reflectionTexture;
        zM && SM.updateMatrixFloats("reflectionMatrix", zM.matrix), SM.updateFloat2("vReflectionInfos", zM ? zM.level * MM.iblIntensity : 0, iM.roughness), SM.setTexture("reflectionCubeSampler", zM);
        const LM = MM.ph();
        for (const {
            feature: hM,
            state: JM,
            active: dM
          }
          of iM.features) {
          var mM, HM;
          if (dM) null === (mM = (HM = (0, sr.i)(hM)).bind) || void 0 === mM || mM.call(HM, JM, SM, MM, LM)
        }
      }
    }

    function Cj(MM) {
      const rM = MM.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(rM) ? "u32" : /i32|^vec\di$/.test(rM) ? "i32" : "f32"
    }

    function ej(MM, rM) {
      const iM = MM.getSize(),
        OM = Cj(rM),
        SM = MM => 4 === iM ? `${MM}x4` : 2 === iM ? `${MM}x2` : null;
      if ("f32" === OM) {
        if (5126 === MM.type) return 1 === iM ? "float32" : iM >= 2 && iM <= 4 ? `float32x${iM}` : null;
        if (!MM.normalized) return null;
        switch (MM.type) {
          case 5121:
            return SM("unorm8");
          case 5120:
            return SM("snorm8");
          case 5123:
            return SM("unorm16");
          case 5122:
            return SM("snorm16")
        }
        return null
      }
      const jM = "u32" === OM ? "uint" : "sint";
      switch (MM.type) {
        case 5125:
        case 5124:
          return 1 === iM ? `${jM}32` : iM <= 4 ? `${jM}32x${iM}` : null;
        case 5121:
        case 5120:
          return SM(`${jM}8`);
        case 5123:
        case 5122:
          return SM(`${jM}16`)
      }
      return null
    }

    function bj(MM) {
      var rM;
      const iM = /(8|16|32)(?:x(\d))?$/.exec(MM);
      return iM ? Number(iM[1]) / 8 * Number(null !== (rM = iM[2]) && void 0 !== rM ? rM : 1) : 4
    }
    class wj {
      constructor(MM, rM, iM) {
        this.resources = MM, this.limits = rM, this.warnOnce = iM, this.layouts = new Map
      }
      resolveInputs(MM, rM, iM, OM) {
        const SM = [],
          jM = iM.program.attributes,
          aM = [];
        for (let zM = 0; zM < jM.length; zM++) {
          const iM = jM[zM],
            PM = iM.optional ? null : this.resources.vertexInput(MM, iM.name, OM);
          if (!PM) {
            const MM = Cj(iM.type),
              rM = "u32" === MM ? "uint32x4" : "i32" === MM ? "sint32x4" : "float32x4";
            aM.push(null);
            const OM = SM.find((MM => null === MM.data));
            OM ? OM.attributes.push({
              shaderLocation: zM,
              offset: 0,
              format: rM
            }) : SM.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: zM,
                offset: 0,
                format: rM
              }]
            });
            continue
          }
          const nM = PM.getBuffer();
          aM.push(PM);
          const QM = ej(PM, iM.type);
          if (!QM) return this.warnOnce(`format:${rM}:${iM.name}`, `${rM}'s ${iM.name} (type ${PM.type}, size ${PM.getSize()}) has no WebGPU vertex format`), null;
          const LM = PM.getIsInstanced() ? "instance" : "vertex",
            mM = PM.byteStride,
            HM = bj(QM),
            hM = SM.find((MM => MM.data === nM && MM.stride === mM && MM.step === LM && PM.byteOffset >= MM.base && PM.byteOffset - MM.base + HM <= mM));
          hM ? hM.attributes.push({
            shaderLocation: zM,
            offset: PM.byteOffset - hM.base,
            format: QM
          }) : SM.push({
            data: nM,
            base: PM.byteOffset,
            stride: mM,
            step: LM,
            attributes: [{
              shaderLocation: zM,
              offset: 0,
              format: QM
            }]
          })
        }
        if (SM.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${rM}`, `${rM} needs ${SM.length} vertex buffers`), null;
        let PM = "";
        for (const zM of SM) {
          PM += `${zM.stride}${"instance"===zM.step?"i":"v"}`;
          for (const MM of zM.attributes) PM += `,${MM.shaderLocation}:${MM.offset}:${MM.format}`;
          PM += ";"
        }
        let nM = this.layouts.get(PM);
        nM || (nM = {
          key: PM,
          buffers: SM.map((MM => ({
            arrayStride: MM.stride,
            stepMode: MM.step,
            attributes: MM.attributes
          }))),
          instanceEnds: SM.map((MM => {
            let rM = -1;
            if ("instance" === MM.step)
              for (const iM of MM.attributes) rM = Math.max(rM, iM.offset + bj(iM.format));
            return rM
          }))
        }, this.layouts.set(PM, nM));
        const QM = SM.map((MM => MM.base));
        return {
          program: iM,
          sources: aM,
          layout: nM,
          slotData: SM.map((MM => MM.data)),
          m_: QM,
          buffers: [],
          offsets: QM,
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

    function tj(MM, rM, iM, OM) {
      const SM = rM.program.program.attributes;
      for (let jM = 0; jM < SM.length; jM++) {
        if ((SM[jM].optional ? null : iM.vertexInput(MM, SM[jM].name, OM)) !== rM.sources[jM]) return !1
      }
      return !0
    }
    const gj = 64;
    class uj {
      constructor(MM, rM, iM, OM) {
        this.device = MM, this.layout = rM, this.frameBuffer = iM, this.label = OM, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(MM) {
        if (MM * gj <= this.data.length) return !1;
        let rM = 2 * this.data.length;
        for (; MM * gj > rM;) rM *= 2;
        const iM = new Float32Array(rM);
        return iM.set(this.data), this.data = iM, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SM = this.data,
          jM = MM * gj;
        let aM = SM[jM + 16] !== iM;
        for (let PM = 0; PM < 16 && !aM; PM++) aM = SM[jM + PM] !== rM[OM + PM];
        if (aM) {
          for (let MM = 0; MM < 16; MM++) SM[jM + MM] = rM[OM + MM];
          SM[jM + 16] = iM
        }
        return aM
      }
      upload(MM, rM) {
        this.device.queue.writeBuffer(this.buffer, MM * LS, this.data, MM * gj, (rM - MM) * gj)
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

    function Rj(MM) {
      return MM.gpu[gM.e.lite] ??= MM.materials.map(((rM, iM) => ({
        parts: MM,
        range: iM,
        owner: MM.owner
      })))
    }

    function pj(MM) {
      var rM, iM, OM;
      return null !== (rM = null !== (iM = null === (OM = MM.parts.materials[MM.range]) || void 0 === OM ? void 0 : OM.mirror) && void 0 !== iM ? iM : MM.owner.material) && void 0 !== rM ? rM : null
    }
    const Wj = ["opaque", "alphaTest", "transparent", "text"];

    function sj(MM) {
      for (const rM of Wj) MM[rM].units.length = 0, MM[rM].rows.length = 0
    }
    class Dj {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Wr.b)("Lite: ")
      }
      attach(MM, rM) {
        this.model = MM, this.mirror = rM
      }
      get worlds() {
        return this.model.nodes.uL
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(MM) {
        return this.groups.get(MM)
      }
      forEachGroup(MM) {
        this.groups.forEach(MM)
      }
      forEachSelected(MM) {
        for (const [rM, iM] of this.groups)
          for (const OM of Wj)
            for (const SM of iM[OM].units) MM(SM.owner, "text" === OM ? "transparent" : OM, rM)
      }
      select(MM, rM) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(sj);
        const {
          model: iM,
          mirror: OM
        } = this;
        if (!iM || !OM || !MM) return;
        this.rows.length < iM.nodes.vL && (this.rows = new Int32Array(iM.nodes.vL));
        const SM = this.rows,
          jM = iM.meshes;
        for (let PM = 0; PM < jM.looseCount; PM++) {
          const MM = jM.loose[PM],
            iM = OM.nodes[MM];
          iM && !iM.isBlocked && iM.isEnabled() && !iM.UL.hasAZeroComponent && jM.selects(MM, rM.frustum) && (this.activate(iM, MM), this.selectedCount++)
        }
        const aM = jM.selectTextPlanes(rM.frustum, SM);
        for (let PM = 0; PM < aM; PM++) {
          const rM = SM[PM],
            jM = OM.nodes[rM],
            aM = iM.meshes.parts[rM];
          if (!jM.isVisible || !(jM.visibility > 0) || 0 === (jM.layerMask & MM.layerMask) || !aM) continue;
          const nM = this.groupOf(iM.meshes.layer[rM]).text;
          for (const MM of Rj(aM)) nM.units.push(MM), nM.rows.push(rM);
          this.selectedCount++
        }
      }
      instanceBatch(MM) {
        const rM = this.batchOf(MM);
        return rM.dispatched || (rM.dispatched = rM.renderSelf = !0, rM.row = this.rowOf(MM)), rM
      }
      rowOf(MM) {
        return MM.row
      }
      activate(MM, rM) {
        if (!MM.Wk) {
          const iM = MM;
          if (iM.nSM) {
            const MM = this.batchOf(iM);
            MM.dispatched = !0, MM.renderSelf = !0, MM.row = rM
          }
          return void this.dispatch(iM, rM, rM)
        }
        const iM = MM,
          OM = iM.QSM;
        if (OM._getWorldMatrixDeterminant() >= 0 !== iM._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${OM.name}`, `A mirrored InstancedMesh of ${OM.name} is not drawn yet`);
        const SM = this.batchOf(OM);
        SM.instances.push(iM), SM.rows.push(rM), SM.dispatched || (SM.dispatched = !0, this.dispatch(OM, rM, this.rowOf(OM)))
      }
      batchOf(MM) {
        let rM = this.batches.get(MM);
        return rM || (rM = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(MM, rM)), rM.frame !== this.frame && (rM.frame = this.frame, rM.dispatched = !1, rM.renderSelf = !1, rM.instances.length = 0, rM.rows.length = 0), rM
      }
      dispatch(MM, rM, iM) {
        const {
          layer: OM,
          parts: SM
        } = this.model.meshes;
        if (!SM[rM]) return;
        const jM = this.groupOf(OM[rM]),
          aM = MM;
        for (const PM of Rj(SM[rM])) {
          const MM = pj(PM);
          if (!MM) continue;
          const rM = MM.needAlphaBlendingForMesh(aM) ? jM.transparent : MM.needAlphaTestingForMesh(aM) ? jM.alphaTest : jM.opaque;
          rM.units.push(PM), rM.rows.push(iM)
        }
      }
      groupOf(MM) {
        let rM = this.groups.get(MM);
        return rM || (rM = {
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
        }, this.groups.set(MM, rM)), rM
      }
    }

    function kj(MM) {
      MM.opaque.length = 0, MM.transparent.length = 0
    }
    class Zj {
      constructor() {
        this.sQ = new Map, this.enabled = [], this.groups = new Map, this.ML = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(MM) {
        if (this.sQ.has(MM)) return;
        const rM = {
          mesh: MM,
          observer: MM.onEffectiveEnabledStateChangedObservable.add((MM => {
            this.kR(rM, MM)
          })),
          index: -1,
          steady: null
        };
        this.sQ.set(MM, rM), this.kR(rM, MM.isEnabled())
      }
      remove(MM) {
        const rM = this.sQ.get(MM);
        rM && (rM.observer.remove(!0), this.kR(rM, !1), this.sQ.delete(MM))
      }
      dropSteady() {
        for (const MM of this.sQ.values()) MM.steady = null
      }
      base(MM) {
        return this.sQ.get(MM)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          sQ: this.sQ.size
        }
      }
      forEachSelected(MM) {
        for (const [rM, iM] of this.groups) {
          for (const OM of iM.opaque) MM(OM.owner, "opaque", rM);
          for (const OM of iM.transparent) MM(OM.owner, "transparent", rM)
        }
        for (const rM of this.ML) MM(rM.mesh, "opaque", 0)
      }
      group(MM) {
        return this.groups.get(MM)
      }
      forEachGroup(MM) {
        this.groups.forEach(MM)
      }
      select(MM, rM) {
        if (this.drawn = 0, this.selected = 0, this.ML.length = 0, this.groups.forEach(kj), !MM) return;
        const iM = this.enabled;
        for (let OM = 0; OM < iM.length; OM++) {
          const SM = iM[OM];
          if (SM.steady && rM(SM, MM)) {
            this.selected++, this.ML.push(SM);
            continue
          }
          const jM = SM.mesh;
          if (jM.isBlocked || jM.UL.hasAZeroComponent) continue;
          if (!jM.isVisible || jM.visibility <= 0 || 0 === (jM.layerMask & MM.layerMask)) continue;
          if (jM.nSM) {
            this.warned.has(jM.name) || (this.warned.add(jM.name), console.warn(`Lite: thin instance base ${jM.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: aM
          } = jM;
          if (!aM) continue;
          jM.computeWorldMatrix(), this.selected++;
          const PM = this.listsFor(jM.renderingGroupId);
          for (const MM of Rj(aM)) {
            const rM = pj(MM);
            rM && (rM.needAlphaBlendingForMesh(jM) ? PM.transparent.push(MM) : PM.opaque.push(MM))
          }
        }
      }
      kR(MM, rM) {
        if (rM === MM.index >= 0) return;
        MM.steady = null;
        const iM = this.enabled;
        if (rM) MM.index = iM.length, iM.push(MM);
        else {
          const rM = iM.pop();
          rM !== MM && (iM[MM.index] = rM, rM.index = MM.index), MM.index = -1
        }
      }
      listsFor(MM) {
        let rM = this.groups.get(MM);
        return rM || (rM = {
          opaque: [],
          transparent: []
        }, this.groups.set(MM, rM)), rM
      }
    }
    var oj = iM(40703);
    class fj {
      constructor() {
        this.bundle = null, this.stale = !0, this.sQ = new Set
      }
    }
    class Yj {
      constructor(MM, rM, iM) {
        this.device = MM, this.slots = rM, this.host = iM, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new fj, this.FW = new fj, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Mj, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = MM => {
          MM.seen !== this.frame && (MM.draw && (MM.draw = null, this.args[5 * MM.slot + 1] = 0, this.argsDirty = !0, this.FW.stale ||= MM.FW), this.frame - MM.seen > 120 && (this.records.delete(MM.unit), this.freeSlots.push(MM.slot), MM.recorded && (this.bundleOf(MM).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(MM) {
          var rM, iM;
          let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (rM = null === (iM = globalThis.navigator) || void 0 === iM ? void 0 : iM.userAgent) && void 0 !== rM ? rM : "";
          const SM = MM.adapterInfo;
          return "intel" === (null === SM || void 0 === SM ? void 0 : SM.vendor) && "gen-12lp" === SM.architecture && OM.includes("Windows")
        }(MM), (0, oj.I)(this.direct)
      }
      WU() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, oj.I)(this.directThisFrame)
      }
      add(MM, rM, iM, OM) {
        let SM = this.records.get(MM);
        return SM || (SM = this.createRecord(MM), this.records.set(MM, SM)), SM.recorded && Aj(SM, rM) || (this.bundleOf(SM).stale = !0), this.place(SM, rM, iM, OM), SM
      }
      bundleOf(MM) {
        return MM.FW ? this.FW : this.main
      }
      addAgain(MM, rM, iM, OM) {
        MM.recorded || (this.bundleOf(MM).stale = !0), this.place(MM, rM, iM, OM)
      }
      place(MM, rM, iM, OM) {
        MM.seen = this.frame, MM.FW && null === MM.draw && (this.FW.stale = !0), MM.draw = rM, this.drawn++, iM && this.slots.write(MM.slot, iM, OM) && (this.slotsFrom = Math.min(this.slotsFrom, MM.slot), this.slotsTo = Math.max(this.slotsTo, MM.slot));
        const SM = this.args,
          jM = 5 * MM.slot;
        SM[jM] === rM.count && SM[jM + 1] === rM.instances && SM[jM + 2] === rM.first || (SM[jM] = rM.count, SM[jM + 1] = rM.instances, SM[jM + 2] = rM.first, this.argsDirty = !0, this.FW.stale ||= MM.FW)
      }
      EL() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(MM) {
        for (const rM of this.records.values()) rM.draw && rM.seen === this.frame && !rM.FW && MM(rM.draw, this.slots.data, rM.slot * LS / 4)
      }
      resourceDestroyed(MM) {
        this.main.stale ||= this.main.sQ.has(MM), this.FW.stale ||= this.FW.sQ.has(MM)
      }
      execute(MM, rM, iM) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(MM, rM, iM, "direct"), this.drawn;
        const OM = this.host.sceneGroup(rM);
        if (!OM) return this.main.bundle = null, this.FW.bundle = null, this.recordedSceneGroup = null, this.encode(MM, rM, iM, "direct"), this.drawn;
        this.recordedTarget === iM && this.recordedSceneGroup === OM || (this.recordedTarget = iM, this.recordedSceneGroup = OM, this.main.stale = !0, this.FW.stale = !0);
        const SM = this.main,
          jM = this.FW;
        let aM = !1;
        !SM.stale && SM.bundle || (SM.bundle = this.record(rM, iM, OM, "indirect"), aM = !0);
        const PM = (0, oj.k)();
        return (jM.stale || this.rangedEpoch !== PM) && (this.rangedEpoch = PM, jM.bundle = this.drawsRanged() ? this.record(rM, iM, OM, "FW") : this.noRangedBundle(), aM = !0), aM && (this.bundles = jM.bundle ? [SM.bundle, jM.bundle] : [SM.bundle]), MM.executeBundles(this.bundles), MM.setBindGroup(0, OM), this.drawn
      }
      record(MM, rM, iM, OM) {
        const SM = this.device.createRenderBundleEncoder({
          label: "FW" === OM ? "thin-bases-ranged" : "thin-bases",
          colorFormats: MM._colorFormat ? [MM._colorFormat] : [],
          depthStencilFormat: MM._depthStencilFormat,
          sampleCount: MM._sampleCount
        });
        return SM.setBindGroup(0, iM), this.encode(SM, MM, rM, OM), SM.finish()
      }
      noRangedBundle() {
        for (const MM of this.records.values()) MM.FW && (MM.recorded = !1);
        return this.FW.sQ.clear(), this.FW.stale = !1, null
      }
      drawsRanged() {
        for (const MM of this.records.values())
          if (MM.FW && MM.draw) return !0;
        return !1
      }
      encode(MM, rM, iM, OM) {
        const SM = [];
        for (const nM of this.records.values()) "direct" !== OM && nM.FW !== ("FW" === OM) || (nM.recorded = !1, nM.draw && SM.push(nM));
        SM.sort(xj);
        const jM = "direct" === OM ? null : "FW" === OM ? this.FW : this.main;
        null === jM || void 0 === jM || jM.sQ.clear(), this.binder.reset();
        let aM = !1;
        for (const nM of SM) {
          var PM;
          const SM = nM.draw,
            QM = this.host.pipelineFor(SM, rM, iM);
          if (!QM) {
            this.host.pipelineCompiling(SM, iM) ? aM = !0 : jM && this.keep(nM, SM, jM.sQ);
            continue
          }
          let zM;
          if (nM.FW && "indirect" !== OM) {
            const MM = nM.unit.owner;
            zM = "direct" === OM && (0, oj.w)(MM) || (0, oj.o)(MM) || void 0
          }
          if (jM && this.keep(nM, SM, jM.sQ), 0 === (null === (PM = zM) || void 0 === PM ? void 0 : PM.count)) continue;
          this.binder.bind(MM, SM, QM, this.slots.bindGroup, nM.slot * LS);
          const LM = 5 * nM.slot;
          if ("indirect" === OM) {
            SM.indexBuffer ? MM.drawIndexedIndirect(this.argsBuffer, 4 * LM) : MM.drawIndirect(this.argsBuffer, 4 * LM);
            continue
          }
          const mM = this.args;
          zM ? Nj(MM, null !== SM.indexBuffer, mM, LM, zM) : SM.indexBuffer ? MM.drawIndexed(mM[LM], mM[LM + 1], mM[LM + 2], 0, 0) : MM.draw(mM[LM], mM[LM + 1], mM[LM + 2], 0)
        }
        jM && (jM.stale = aM)
      }
      keep(MM, rM, iM) {
        MM.recorded = !0, MM.pipelineKey = rM.pipelineKey, MM.materialGroup = rM.material.bindGroup, MM.vertexBuffers.length = 0, MM.vertexBuffers.push(...rM.vertexBuffers), MM.vertexOffsets = rM.vertexOffsets, MM.indexBuffer = rM.indexBuffer, MM.indexFormat = rM.indexFormat;
        for (const OM of rM.vertexBuffers) iM.add(OM);
        rM.indexBuffer && iM.add(rM.indexBuffer), iM.add(rM.material.buffer);
        for (const OM of rM.material.bound) OM && iM.add(OM)
      }
      createRecord(MM) {
        let rM = this.freeSlots.pop();
        return void 0 === rM && (rM = this.slotCount++, this.grow()), {
          unit: MM,
          slot: rM,
          FW: void 0 !== (0, oj.o)(MM.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.FW.stale = !0), 5 * this.slotCount > this.args.length) {
          const MM = new Uint32Array(2 * this.args.length);
          MM.set(this.args), this.args = MM, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Nj(MM, rM, iM, OM, SM) {
      const jM = iM[OM + 1],
        aM = SM.data;
      for (let PM = 0; PM < SM.count; PM++) {
        const SM = Math.min(aM[2 * PM], jM),
          nM = Math.min(aM[2 * PM + 1], jM - SM);
        0 !== nM && (rM ? MM.drawIndexed(iM[OM], nM, iM[OM + 2], 0, SM) : MM.draw(iM[OM], nM, iM[OM + 2], SM))
      }
    }

    function Aj(MM, rM) {
      if (MM.pipelineKey !== rM.pipelineKey || MM.materialGroup !== rM.material.bindGroup || MM.indexBuffer !== rM.indexBuffer || MM.indexFormat !== rM.indexFormat || MM.vertexOffsets !== rM.vertexOffsets || MM.vertexBuffers.length !== rM.vertexBuffers.length) return !1;
      for (let iM = 0; iM < MM.vertexBuffers.length; iM++)
        if (MM.vertexBuffers[iM] !== rM.vertexBuffers[iM]) return !1;
      return !0
    }

    function xj(MM, rM) {
      return ij(MM.draw, rM.draw)
    }
    const vj = new WeakMap,
      Fj = {
        depth: !1,
        sunShadow: !1
      };

    function Bj(MM, rM) {
      let iM = vj.get(MM);
      iM || (iM = new Map, vj.set(MM, iM));
      const OM = `${rM.depth?"-depth":""}${rM.sunShadow?"-shadow":""}${rM.shadowMask?"-mask":""}`;
      let SM = iM.get(OM);
      if (!SM) {
        const jM = [{
          binding: qr.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: qr.h
          }
        }, {
          binding: qr.r,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        rM.depth && jM.push({
          binding: qr.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), rM.sunShadow && jM.push(... function() {
          const MM = GPUShaderStage.FRAGMENT,
            rM = qr.p;
          return [{
            binding: rM.uniform,
            visibility: MM,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: rM.Xm,
            visibility: MM,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: rM.special,
            visibility: MM,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: rM.volume,
            visibility: MM,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: rM.sampler,
            visibility: MM,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: rM.entities,
            visibility: MM,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: rM.entityGrids,
            visibility: MM,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), rM.shadowMask && jM.push({
          binding: qr.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), SM = MM.createBindGroupLayout({
          label: `${rM.depth?"terrain-":""}shader-pack-inputs${OM}`,
          entries: jM
        }), iM.set(OM, SM)
      }
      return SM
    }

    function Xj(MM) {
      return Bj(MM, Fj)
    }

    function Ij(MM, rM) {
      if (!rM) return !1;
      const iM = (0, Tr.g)(MM);
      return !!iM && PO(iM, rM)
    }

    function Kj(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!DO(rM)) return [];
      return [Bj(MM, {
        depth: uO(rM.packVariant),
        sunShadow: Ij(rM.packVariant, iM),
        shadowMask: OM
      })]
    }
    class qj {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = MM, this.sunShadow = iM, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(qr.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = MM.createBuffer({
          label: "shader-pack-inputs",
          size: qr.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const OM = (0, qr.s)(rM);
        this.textures = MM.createBuffer({
          label: "shader-pack-textures",
          size: OM.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), MM.queue.writeBuffer(this.textures, 0, OM), this.bindGroup = MM.createBindGroup({
          label: "shader-pack-inputs",
          layout: Xj(MM),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: qr.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: qr.r,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(MM, rM, iM) {
        (0, qr.x)(this.data, {
          seconds: MM.seconds(),
          lit: iM,
          renderOffset: MM.renderOffset(),
          mMM: MM.mMM(),
          eyePosition: rM,
          shadowDirection: MM.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const OM = rM ? this.sunShadow : null;
        if ((rM || iM) && !OM) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!MM && !OM) return this.bindGroup;
        (MM && MM !== this.depthView || iM && iM !== this.maskView) && (this.depthView = null !== MM && void 0 !== MM ? MM : this.depthView, this.maskView = null !== iM && void 0 !== iM ? iM : this.maskView, this.groups.clear());
        const SM = (MM ? 1 : 0) | (OM ? 2 : 0) | (iM ? 4 : 0);
        let jM = this.groups.get(SM);
        if (!jM) {
          const rM = this.entries();
          MM && rM.push({
            binding: qr.n,
            resource: MM
          }), OM && rM.push(...OM.entries()), iM && rM.push({
            binding: qr.q,
            resource: iM
          }), jM = this.device.createBindGroup({
            label: `${MM||iM?"terrain-":""}shader-pack-inputs${MM?"-depth":""}${OM?"-shadow":""}${iM?"-mask":""}`,
            layout: Bj(this.device, {
              depth: !!MM,
              sunShadow: !!OM,
              shadowMask: !!iM
            }),
            entries: rM
          }), this.groups.set(SM, jM)
        }
        return jM
      }
      bind(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        MM.setBindGroup(qr.f, this.bindGroupFor(rM, iM, OM))
      }
    }

    function Tj(MM, rM, iM) {
      if (MM.gpuVersion === rM.gpuBuffersVersion) return !0;
      let OM;
      do {
        if (OM = rM.gpuBuffersVersion, !Vj(MM, rM, iM)) return !1
      } while (rM.gpuBuffersVersion !== OM);
      return MM.gpuVersion = OM, MM.fitInstances = 0, !0
    }

    function Vj(MM, rM, iM) {
      let OM = null;
      for (let jM = 0; jM < MM.slotData.length; jM++) {
        var SM;
        const aM = MM.slotData[jM],
          PM = aM ? rM.gpuBuffer(aM) : iM;
        if (!PM) return !1;
        aM && MM.layout.instanceEnds[jM] < 0 && rM.cover(aM, Number.POSITIVE_INFINITY), MM.buffers[jM] = PM;
        const nM = MM.m_[jM] + (aM ? rM.gpuOffset(aM) : 0);
        nM !== (null !== (SM = OM) && void 0 !== SM ? SM : MM.offsets)[jM] && (OM ??= MM.offsets.slice(), OM[jM] = nM), MM.ends[jM] = aM ? rM.gpuEnd(aM) : PM.size
      }
      return OM && (MM.offsets = OM), !0
    }

    function cj(MM, rM, iM, OM) {
      if (rM <= MM.fitInstances) return null;
      const {
        layout: SM,
        ends: jM,
        offsets: aM,
        slotData: PM,
        m_: nM
      } = MM;
      let QM = !1;
      for (let zM = 0; zM < SM.buffers.length; zM++) {
        const MM = SM.instanceEnds[zM];
        if (MM < 0) continue;
        const OM = (rM - 1) * SM.buffers[zM].arrayStride + MM;
        if (jM[zM] - aM[zM] < OM) return {
          index: zM,
          needed: OM
        };
        const LM = PM[zM];
        LM && iM.cover(LM, nM[zM] + OM) && (QM = !0)
      }
      return QM && Tj(MM, iM, OM), MM.fitInstances = rM, null
    }
    var Ma = iM(38797),
      ra = iM(38832);
    const ia = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Oa = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Sa = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      ja = `((vertexInputs.aPackedLightLevels >> 16u) | ${pr.e.placed}u)`,
      aa = "u32(vertexInputs.aShaderPackItem.x)",
      Pa = `${pr.e.lifeform}u`;

    function na(MM) {
      return "item" === MM.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Qa = "bloxdSpEnchant",
      za = "floor(finalWorld[3].xyz)";

    function La(MM, rM, iM) {
      return "placed" === rM.kind && MM.reads[iM].includes("bloxdFragmentBlockPosition")
    }

    function ma(MM, rM) {
      let [iM, OM] = MM;
      return iM === rM.point && OM === rM.code
    }

    function Ha(MM, rM) {
      var iM, OM, SM;
      const jM = null === (iM = MM.find((MM => MM.texture))) || void 0 === iM ? void 0 : iM.texture,
        aM = null === (OM = MM.find((MM => MM.enchantTier))) || void 0 === OM ? void 0 : OM.enchantTier,
        PM = null === (SM = MM.find((MM => MM.overlay))) || void 0 === SM ? void 0 : SM.overlay,
        nM = PM ? rM.filter((MM => ma(MM, PM))).length : 0;
      return PM && 1 === nM ? {
        texture: jM,
        overlay: PM,
        enchantTier: aM
      } : {
        texture: jM,
        enchantTier: aM
      }
    }

    function ha(MM) {
      if ("item" === MM.kind) {
        return {
          vertexFlags: `(${aa} & 0xffffu)`,
          varying: "vPackItem",
          value: aa,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return MM.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: ja,
        varying: "vPackFlags",
        value: ja,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Ja(MM) {
      return "lifeform" === MM.kind ? Pa : "0u"
    }

    function da(MM) {
      return !!MM.BLOXD_PLUGIN_ENCHANTMENT
    }

    function ya(MM, rM) {
      const {
        enchantTier: iM
      } = rM;
      return iM && da(rM.defines) && "lifeform" === rM.kind && ea(MM, "enchantTier") ? iM : null
    }

    function la(MM, rM) {
      return da(rM.defines) && ea(MM, "enchantSpeed")
    }

    function Ea(MM) {
      const {
        overlay: rM,
        defines: iM
      } = MM;
      if (!rM || !iM.DIFFUSE) return null;
      const OM = iM.VERTEXCOLOR || iM.INSTANCESCOLOR && iM.INSTANCES;
      return `vec4f(${rM.colour}.rgb * uniforms.vDiffuseInfos.y${OM?" * fragmentInputs.vColor.rgb":""}, ${rM.colour}.a)`
    }
    const Ua = "fragmentInputs.vPackTexture";

    function Ga(MM) {
      const {
        atlas: rM,
        defines: iM,
        texture: OM
      } = MM;
      if (rM || !iM.DIFFUSE) return null;
      if (OM) return {
        texture: "diffuseSampler",
        ...OM
      };
      const SM = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===iM.DIFFUSEDIRECTUV?"vMainUV1":2===iM.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== MM.kind) return SM;
      if (!iM.BLOXD_PLUGIN_ANIMATED) return {
        ...SM,
        id: Ua
      };
      const jM = CM.b.WGSL,
        aM = (0, CM.Db)(jM, "uAnimStatesNum"),
        PM = (0, CM.bb)(jM, (0, Ma.e)(jM), aM),
        nM = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${aM})`,
        layers: [PM],
        uv: `vec2f(${nM}.x, ${nM}.y * ${aM} - ${PM})`,
        levelUv: nM,
        id: Ua
      }
    }

    function Ca(MM, rM) {
      return "box" === rM.kind && !!MM.hooks.surface && null !== Ga(rM)
    }

    function ea(MM, rM) {
      return MM.reads.fragment.includes(rM)
    }

    function ba(MM) {
      return !!MM.BLOXD_LIGHTING && !MM.BLOXD_UNLIT
    }

    function wa(MM, rM, iM, OM) {
      const SM = MM.filter((MM => {
        let [iM, OM] = MM;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === iM && OM === rM
      }));
      if (1 !== SM.length) throw new Error(`A model program for shader packs has ${0===SM.length?"no":"more than one"} ${OM} code before fog (lite/modelShaderPack.ts)`);
      return MM.map((MM => MM === SM[0] ? [MM[0], iM] : MM))
    }

    function ta(MM, rM, iM, OM) {
      const {
        hooks: SM
      } = MM, {
        kind: jM,
        defines: aM
      } = rM, PM = [...iM];
      var nM;
      rM.atlas && SM.surface && PM.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", hO("atlasIdxIn")]), "item" === jM && PM.push(["CUSTOM_VERTEX_DEFINITIONS", (0, CM.e)(CM.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Ca(MM, rM) && PM.push(["CUSTOM_VERTEX_DEFINITIONS", (0, CM.e)(CM.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (nM = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${mO}[min(u32(${nM}) - 1u, arrayLength(&${mO}) - 1u)], ${nM} > 0.5);\n`)]);
      const QM = ha(rM);
      QM && (SM.surface || SM.light) && PM.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${QM.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${QM.varying} = ${QM.value};`]);
      let zM = OM;
      if (La(MM, rM, "fragment") && (PM.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${za});`]), zM = [...zM, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), ea(MM, "localPosition") && PM.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${na(rM)};`]), da(aM) && SM.surface) {
        la(MM, rM) && PM.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const iM = ya(MM, rM);
        iM && PM.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${iM});`]);
        const OM = (0, CM.ob)(CM.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        zM = [...wa(zM, (0, ra.f)(CM.b.WGSL), OM, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, ra.b)(Qa)]]
      }
      const {
        overlay: LM
      } = rM;
      LM && Ea(rM) && SM.surface && (zM = zM.filter((MM => !ma(MM, LM))));
      const mM = SM.light ? function(MM) {
        return "placed" === MM.kind ? {
          name: "terrain",
          engine: (0, Xr.V)(CM.b.WGSL),
          pack: (0, Xr.pb)(CM.b.WGSL)
        } : MM.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Xr.M)(CM.b.WGSL),
          pack: (0, Xr.ib)(CM.b.WGSL)
        } : null
      }(rM) : null;
      if (mM && (zM = wa(zM, mM.engine, mM.pack, `${mM.name} light`), "placed" !== jM && ba(aM))) {
        const MM = aM.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, CM.Db)(CM.b.WGSL, "uEntityLightLevels") : (0, CM.Hb)(CM.b.WGSL, "aLightLevels");
        PM.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Xr.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Xr.mb)(CM.b.WGSL, MM)])
      }
      return {
        vertexCode: PM,
        fragmentCode: zM
      }
    }

    function ga(MM, rM, iM, OM) {
      return jO(MM, rM, iM, OM, "model")
    }
    const ua = "\t@builtin(position) position: vec4f,\n";

    function Ra(MM, rM) {
      const iM = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(MM)[0];
      return `${iM}${rM}${MM.slice(iM.length)}`
    }

    function pa(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: SM
      } = rM, jM = PO(rM, OM), {
        kind: aM,
        defines: PM
      } = iM, nM = function(MM, rM) {
        var iM, OM, SM;
        const {
          defines: jM
        } = rM, aM = ha(rM), PM = !!jM.FOG, nM = da(jM), QM = null !== (iM = null === aM || void 0 === aM ? void 0 : aM.enchantTier) && void 0 !== iM ? iM : ya(MM, rM) ? "fragmentInputs.vPackEnchantTier" : "0u", zM = "lifeform" === rM.kind && !jM.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (OM = null === aM || void 0 === aM ? void 0 : aM.vertexFlags) && void 0 !== OM ? OM : Ja(rM),
          vertexLocalPosition: na(rM),
          flags: null !== (SM = null === aM || void 0 === aM ? void 0 : aM.flags) && void 0 !== SM ? SM : Ja(rM),
          normal: "normalW",
          alpha: zM ? "alpha * baseColor.a" : "alpha",
          alphaOut: zM ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: PM ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: PM ? "1.0 - fog" : "0.0",
          enchantTier: QM,
          enchantColour: nM ? `${Qa}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: la(MM, rM) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: ea(MM, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Ea(rM)
        }
      }(rM, iM), QM = MM.textures.filter((MM => /^textureAtlas\d+$/.test(MM.name))).length, zM = iM.atlas && QM > 0 ? {
        count: QM,
        layers: iM.atlas.layers,
        width: iM.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: MM.material.slots.has("uAnimDataPerTex") ? (rM, iM) => VO(rM, iM, function(MM) {
          const rM = MM.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            bL: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: MM => `uniforms.uAnimDataPerTex[${MM}]${rM}`
          }
        }(MM)) : null
      } : null, LM = "placed" === aM ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", mM = null !== zM && void 0 !== zM ? zM : Ga(iM), HM = function(MM, iM) {
        let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,qr.w)()}${QO(rM,iM)}${OM}${dO(MM)}${iO}${LM}${rM.code}`
      };
      let {
        vertex: hM,
        fragment: JM
      } = MM;
      const dM = lO(SM, nM);
      if (dM) {
        const MM = La(rM, iM, "vertex") ? `\tbloxdSpCell = ${za};\n` : "";
        hM = ga(hM, ia, `${MM}${dM.slice(1)}${ia}`, "vertex")
      }
      const yM = `${zO(rM,jM,function(MM,rM){return rM.TWOSIDEDLIGHTING?MM:`select(-(${MM}), ${MM}, fragmentInputs.frontFacing)`}(nM.normal,PM),nM.flags)}${EO(SM,rM.strict,rM.program,mM,nM)}`;
      yM && (JM = ga(JM, Oa, `${yM.slice(1)}${Oa}`, "surface")), jM && rM.sunShadow && !PM.TWOSIDEDLIGHTING && (JM = ga(JM, ua, `${ua}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const lM = CO(SM);
      if (lM) {
        const MM = GO(SM, ba(PM), !0, nM);
        JM = ga(JM, Sa, `${MM}${lM.slice(1)}${Sa}`, "light")
      }
      const EM = Ca(rM, iM) ? HO : "";
      return {
        ...MM,
        vertex: Ra(hM, HM(zM, !1, EM)),
        fragment: Ra(JM, HM(mM, jM))
      }
    }
    const Wa = {
      name: "earthSky",
      uniqueId: -1
    };
    class sa {
      constructor(MM, rM) {
        this.resources = MM, this.epoch = rM, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const MM of this.instances.values()) MM.released = !0, this.resources.destroyBuffer(MM.buffer);
        this.instances.clear()
      }
    }

    function Da(MM) {
      return MM.failed && null !== MM.packGroup
    }
    class ka {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zj,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Dj;
        this.device = MM, this.resources = rM, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.n_ = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new Mj, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Gj((MM => this.modelSlot(MM).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Wr.b)("Lite: "), this.renderStates = new dj(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (MM, rM) => this.keepSteady(MM, rM), this.lists = void 0, this.slotCount = 0, this.n_ = OM, this.modelMeshes = SM, this.lists = new rj(SM, OM, this, this.warnOnce), this.drawDefines = new mj(rM, this.warnOnce, ((MM, rM, iM) => this.programWithModel(MM, rM, iM)), Da), this.vertexLayouts = new wj(rM, MM.limits, this.warnOnce), this.sceneLayout = er(MM), this.frameLayout = MM.createBindGroupLayout({
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
        }), this.frameBuffer = MM.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new uj(MM, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = MM.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Yj(MM, new uj(MM, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (MM, rM, iM) => this.pipelineFor(MM, rM, iM),
          pipelineCompiling: (MM, rM) => !MM.program.failed && !1 !== this.pipelines.get(`${MM.pipelineKey}|${rM}`),
          sceneGroup: MM => {
            const rM = iM(MM);
            return rM || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), rM
          }
        }), rM.onDestroy = MM => {
          this.thinBundle.resourceDestroyed(MM)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const SM = {
          order: MM,
          isTransparent: rM,
          _direct: !rM,
          bind: (MM, rM) => this.createBinding(SM, rM, iM, OM)
        };
        return SM
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(MM, rM, iM) {
        var OM;
        let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = rM, this.drawDefines.view = rM, this.thinBundle.WU(), this.writeFrameUniforms();
        const jM = null !== (OM = null === SM || void 0 === SM ? void 0 : SM.defineFor("model")) && void 0 !== OM ? OM : 0;
        this.drawDefines.modelPackVariant = jM, SM && 0 !== jM && (this.packInputs ??= new qj(this.device, SM.textureLayers(), this.sunShadow), this.packInputs.write(SM, rM.eye, SM.DJ())), this.lists.clear(), this.slotCount = 0;
        const aM = MM.activeCamera;
        this.n_.select(aM, this.keepSteadyBase), this.modelMeshes.select(aM, rM), iM && this.pushEarthSky(iM), this.lists.collect(MM), this.thinBundle.EL(), this.uploadMeshSlots()
      }
      pushDraws(MM, rM, iM, OM, SM, jM) {
        let aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const PM = jM.length;
        for (let nM = 0; nM < iM; nM++) {
          const iM = rM[nM];
          let PM = this.retainedDraw(MM, iM, OM, SM);
          if (void 0 === PM && (PM = this.drawFor(MM, iM, OM, SM), this.retain(iM, PM)), PM) {
            const MM = iM.owner,
              rM = aM ? aM[nM] : -1;
            PM.slotOffset = rM < 0 ? this.writeMeshSlot(MM.getWorldMatrix().m, MM.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[rM], 16 * rM), jM.push(PM)
          }
        }
        return jM.length - PM
      }
      bundleDraws(MM, rM, iM) {
        let OM = 0;
        for (const SM of rM) {
          let rM = this.retainedDraw(MM, SM, iM, !1);
          const jM = void 0 !== rM;
          if (void 0 === rM && (rM = this.drawFor(MM, SM, iM, !1), this.retain(SM, rM)), rM) {
            const MM = SM.owner,
              iM = this.thinBundle.add(SM, rM, MM.getWorldMatrix().m, MM.visibility);
            jM && this.steadyFrom(SM, rM, iM), OM++
          }
        }
        return OM
      }
      steadyFrom(MM, rM, iM) {
        const OM = MM.owner,
          SM = this.n_.base(OM),
          jM = OM.material,
          {
            drawState: aM,
            instance: PM
          } = rM.inputs.retained;
        if (!SM || !jM || 1 !== MM.parts.materials.length || pj(MM) !== jM) return;
        const nM = SM.steady ??= {
          unit: MM,
          material: jM,
          visibility: 1,
          draw: rM,
          record: iM,
          drawState: aM,
          instance: PM,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        nM.unit = MM, nM.material = jM, nM.visibility = OM.visibility, nM.draw = rM, nM.record = iM, nM.drawState = aM, nM.instance = PM, nM.bindGroup = PM.bindGroup, nM.gpuVersion = this.resources.gpuBuffersVersion, nM.fitInstances = rM.inputs.fitInstances, nM.worldFlag = OM.getWorldMatrix().updateFlag, nM.handedFrame = this.frame
      }
      keepSteady(MM, rM) {
        const iM = MM.steady;
        if (iM.handedFrame !== this.frame - 1 || (this.frame + iM.phase) % 8 === 0) return !1;
        const OM = MM.mesh,
          {
            unit: SM,
            draw: jM,
            instance: aM,
            drawState: PM
          } = iM,
          nM = OM.forcedInstanceCount || OM.y_;
        if (!OM.isVisible || OM.nSM || OM.visibility !== iM.visibility || 0 === (OM.layerMask & rM.layerMask) || OM.material !== iM.material || 0 !== OM.renderingGroupId || OM.hasVertexAlpha || !this.drawDefines.definesHold(PM, SM, PM.instancing) || iM.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(jM.inputs, SM, PM.instancing, jM.program) || jM.program.failed || aM.released || nM <= 0 || nM > iM.fitInstances) return !1;
        if (aM.frame !== this.frame && this.bindMaterial(aM, this.modelUniforms.refreshModelUniforms(OM.Hk(), aM, aM.model, this.view)), !aM.bindable || aM.bindGroup !== iM.bindGroup) return !1;
        const QM = OM.computeWorldMatrix(),
          zM = QM.updateFlag !== iM.worldFlag;
        return iM.worldFlag = QM.updateFlag, jM.instances = nM, this.thinBundle.addAgain(iM.record, jM, zM ? QM.m : null, iM.visibility), iM.handedFrame = this.frame, this.n_.drawn++, !0
      }
      retainedDraw(MM, rM, iM, OM) {
        const SM = this.inputs.get(rM),
          jM = null === SM || void 0 === SM ? void 0 : SM.retained;
        if (!SM || !jM) return;
        const {
          drawState: aM,
          program: PM,
          instance: nM,
          instancing: QM
        } = jM, zM = rM.owner;
        if (aj(zM) !== QM) return;
        const LM = this.instanceCount(zM, QM);
        if (LM <= 0) return null;
        if (nM.released || PM.failed || aM.program !== PM || !this.drawDefines.programCurrent(aM, rM, QM, iM) || !this.inputsStamped(SM, rM, QM, PM) || zM.isUnIndexed !== jM.unIndexed || this.indexKey(rM) !== jM.indexData) return;
        if (jM.indexBuffer && jM.gpuVersion !== this.resources.gpuBuffersVersion) {
          const MM = this.resources.gpuBuffer(jM.indexData);
          if (!MM) return;
          jM.indexBuffer = MM, jM.gpuVersion = this.resources.gpuBuffersVersion
        }
        let mM = !1;
        if (nM.frame !== this.frame && (mM = this.modelUniforms.refreshModelUniforms(MM, nM, nM.model, this.view)), !this.bindMaterial(nM, mM) || !this.withGpuBuffers(SM) || !this.instanceBuffersFit(zM.name, SM, LM)) return null;
        const HM = this.makeDraw(PM, SM, this.renderStates.renderState(aM.model, zM, OM, SM.state), nM, LM);
        return this.setRange(HM, rM, jM.indexBuffer, jM.indexData), HM
      }
      retain(MM, rM) {
        const iM = this.drawDefines.drawStates.get(MM);
        if (!rM || !iM || iM.program !== rM.program) {
          const rM = this.inputs.get(MM);
          return void(rM && (rM.retained = null))
        }
        const OM = MM.owner,
          SM = iM.instancing,
          jM = this.indexKey(MM),
          aM = rM.inputs.retained;
        aM ? (aM.drawState = iM, aM.instancing = SM, aM.program = rM.program, aM.instance = rM.material, aM.indexData = jM, aM.unIndexed = OM.isUnIndexed, aM.indexBuffer = rM.indexBuffer, aM.gpuVersion = this.resources.gpuBuffersVersion) : rM.inputs.retained = {
          drawState: iM,
          instancing: SM,
          program: rM.program,
          instance: rM.material,
          indexData: jM,
          unIndexed: OM.isUnIndexed,
          indexBuffer: rM.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(MM, rM, iM, OM) {
        const SM = rM.owner,
          jM = pj(rM);
        if (!jM) return null;
        const aM = jM.getClassName();
        let PM = null;
        if (function(MM) {
            return "LinesMesh" === MM.getClassName()
          }(SM)) {
          if (! function(MM) {
              return "ShaderMaterial" === MM.getClassName() && "color" === MM.shaderPath
            }(jM)) return this.warnOnce(`lines:${aM}`, `A LinesMesh with a ${aM} is not drawn yet (${jM.name})`), null;
          PM = SM
        } else if ("StandardMaterial" !== aM && "LiteMaterial" !== aM) return this.warnOnce(`class:${aM}`, `${aM} is not drawn yet (${jM.name})`), null;
        const nM = aj(SM),
          QM = this.instanceCount(SM, nM);
        if (QM <= 0) return null;
        const zM = PM ? this.lineProgramFor(SM, iM, nM) : this.drawDefines.programFor(MM, rM, jM, iM, nM);
        if (!zM || zM.failed) return null;
        const LM = PM ? null : this.drawDefines.drawStates.get(rM).model,
          mM = LM ? this.modelInstance(LM, zM) : this.materialInstance(SM, zM);
        let HM = !1;
        if (mM.frame !== this.frame && (PM ? lM(mM.ubo, PM) : HM = this.modelUniforms.refreshModelUniforms(MM, mM, mM.model, this.view)), !this.bindMaterial(mM, HM)) return null;
        const hM = this.meshInputs(rM, zM, nM);
        if (!hM || !this.instanceBuffersFit(SM.name, hM, QM)) return null;
        const JM = this.indexKey(rM);
        let dM = null;
        if (JM && !SM.isUnIndexed && (dM = this.resources.gpuBuffer(JM), !dM)) return null;
        const yM = this.renderStates.renderState(null !== LM && void 0 !== LM ? LM : jM, SM, OM, hM.state, PM ? "line-list" : "triangle-list"),
          EM = this.makeDraw(zM, hM, yM, mM, QM);
        return this.setRange(EM, rM, dM, JM), EM
      }
      indexKey(MM) {
        const rM = zj(MM);
        return rM ? this.resources.modelIndex(rM) : null
      }
      setRange(MM, rM, iM, OM) {
        iM && (MM.indexBuffer = iM, MM.indexFormat = this.resources.indexFormat(OM));
        const SM = 4 * rM.range + (iM ? 0 : 2);
        MM.unit = rM, MM.first = rM.parts.Ld[SM], MM.count = rM.parts.Ld[SM + 1]
      }
      makeDraw(MM, rM, iM, OM, SM) {
        rM.state !== iM && (rM.state = iM, rM.pipelineKey = `${MM.id}|${rM.layout.key}|${iM.key}`, rM.pipeline = null);
        const jM = rM.draw ??= {
          program: MM,
          inputs: rM,
          pipelineKey: "",
          layout: rM.layout,
          state: iM,
          material: OM,
          slotOffset: 0,
          vertexBuffers: rM.buffers,
          vertexOffsets: rM.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: SM,
          unit: null
        };
        return jM.program = MM, jM.pipelineKey = rM.pipelineKey, jM.state = iM, jM.material = OM, jM.vertexOffsets = rM.offsets, jM.indexBuffer = null, jM.instances = SM, jM
      }
      instanceCount(MM, rM) {
        switch (rM) {
          case "thin":
            return MM.forcedInstanceCount || MM.y_;
          case "instanced":
            return this.prepareInstances(MM);
          case "none":
            return 1
        }
      }
      prepareInstances(MM) {
        const rM = function(MM, rM) {
          const iM = rM._userInstancedBuffersStorage,
            OM = MM.batchUploads.get(rM);
          if (OM) {
            var SM;
            if (OM.layout === (null !== (SM = null === iM || void 0 === iM ? void 0 : iM.interleavedKinds) && void 0 !== SM ? SM : null)) return OM;
            OM.release()
          }
          return new Hr(MM, rM, iM)
        }(this.resources, MM);
        return rM.frame !== this.frame && rM.pack(MM, this.modelMeshes.instanceBatch(MM), this.modelMeshes.worlds, this.frame), rM.count
      }
      programWithModel(MM, rM, iM) {
        const OM = this.modelSlot(MM),
          SM = Hj(OM, MM, iM),
          jM = this.drawDefines.modelPackKind(MM),
          aM = jM ? function(MM, rM, iM, OM) {
            const SM = (0, wM.v)(MM, eM.g.name),
              jM = [];
            for (const {
                feature: nM,
                state: QM,
                active: zM
              }
              of MM.features) {
              var aM, PM;
              const MM = zM ? null === (aM = (PM = (0, sr.i)(nM)).nh) || void 0 === aM ? void 0 : aM.call(PM, QM) : void 0;
              MM && jM.push(MM)
            }
            return {
              kind: rM,
              atlas: null !== SM && void 0 !== SM && SM.active ? (0, eM.d)(SM.state) : null,
              defines: iM,
              ...Ha(jM, OM)
            }
          }(MM, jM, rM, OM.fragmentCode) : null;
        if (aM && function(MM) {
            const rM = MM.defines;
            return (null === MM.atlas || !!rM.DIFFUSE && 1 === rM.DIFFUSEDIRECTUV) && !!rM.NORMAL && !rM.REFLECTION && !rM.EMISSIVEASILLUMINATION && !rM.LINKEMISSIVEWITHDIFFUSE
          }(aM)) {
          const iM = this.modelPackProgram(MM, rM, `${SM}#${jM}#sp${this.drawDefines.modelPackVariant}`, OM, aM);
          if (iM && !iM.failed) return iM
        }
        const PM = this.programs.get(SM);
        if (PM || this.unbuildable.has(SM)) return null !== PM && void 0 !== PM ? PM : null;
        let nM;
        try {
          nM = WS({
            defines: nj(rM),
            vertexCode: OM.vertexCode,
            fragmentCode: OM.fragmentCode,
            pluginUniforms: OM.pluginUniforms
          })
        } catch (QM) {
          return this.unbuildable.add(SM), this.warnOnce(`build:${SM}`, `could not build a program for ${MM.name}: ${String(QM)}`), null
        }
        return this.createProgram(SM, nM, "standard")
      }
      modelPackProgram(MM, rM, iM, OM, SM) {
        const jM = this.programs.get(iM);
        if (jM || this.unbuildable.has(iM)) return null !== jM && void 0 !== jM ? jM : null;
        const aM = this.drawDefines.modelPackVariant;
        let PM;
        try {
          const MM = function(MM) {
              return (0, Tr.c)(MM, "model")
            }(aM),
            iM = ta(MM, SM, OM.vertexCode, OM.fragmentCode);
          PM = pa(WS({
            defines: nj(rM),
            ...iM,
            pluginUniforms: OM.pluginUniforms
          }), MM, SM, !!this.sunShadow)
        } catch (zM) {
          return this.unbuildable.add(iM), this.warnOnce(`build:${iM}`, `could not build a shader pack program for ${MM.name}, which draws without the pack: ${String(zM)}`), null
        }
        const nM = Ij(aM, !!this.sunShadow),
          QM = {
            group: this.packInputs.bindGroupFor(null, nM),
            layout: Bj(this.device, {
              depth: !1,
              sunShadow: nM
            })
          };
        return this.createProgram(iM, PM, function(MM) {
          return `standard-sp${MM}`
        }(aM), QM)
      }
      lineProgramFor(MM, rM, iM) {
        const OM = yM(MM, iM, rM, this.view);
        let SM = this.linePrograms.get(OM);
        var jM;
        return SM || (SM = this.createProgram(`lines#${OM}`, (jM = function(MM) {
          const rM = new Map;
          for (let iM = 0; iM < QM.length; iM++) MM & 1 << iM && rM.set(QM[iM], !0);
          return rM
        }(OM), ZS({
          defines: jM,
          vertex: DS,
          fragment: kS,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(OM, SM)), SM
      }
      createProgram(MM, rM, iM) {
        var OM;
        let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const jM = this.nextProgramId++,
          aM = `${iM}-${jM}`,
          PM = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          nM = [{
            binding: 0,
            visibility: PM,
            buffer: {
              type: "uniform"
            }
          }];
        for (const LM of rM.textures) nM.push({
          binding: LM.binding,
          visibility: PM,
          texture: {
            viewDimension: LM.dimension
          }
        }), nM.push({
          binding: LM.samplerBinding,
          visibility: PM,
          sampler: {}
        });
        const QM = this.device.createBindGroupLayout({
            label: aM,
            entries: nM
          }),
          zM = {
            key: MM,
            id: jM,
            kind: iM,
            program: rM,
            vertex: this.device.createShaderModule({
              label: `${aM}-vertex`,
              code: rM.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${aM}-fragment`,
              code: rM.fragment
            }),
            materialLayout: QM,
            pipelineLayout: this.device.createPipelineLayout({
              label: aM,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, QM, ...SM ? [SM.layout] : []]
            }),
            packGroup: null !== (OM = null === SM || void 0 === SM ? void 0 : SM.group) && void 0 !== OM ? OM : null,
            failed: !1
          };
        return this.programs.set(MM, zM), zM
      }
      writeFrameUniforms() {
        const MM = this.frameUniforms;
        Uj(this.view, MM), this.device.queue.writeBuffer(this.frameBuffer, 0, MM)
      }
      materialInstance(MM, rM) {
        let iM = this.materials.get(MM);
        if (!iM) {
          const rM = new Map;
          this.materials.set(MM, rM);
          const {
            resources: OM,
            materials: SM
          } = this;
          MM.Rk.addOnce((() => {
            for (const MM of rM.values()) MM.released = !0, OM.destroyBuffer(MM.buffer);
            SM.delete(MM)
          })), iM = rM
        }
        let OM = iM.get(rM.key);
        return OM || (OM = this.newMaterialInstance(MM, null, rM), iM.set(rM.key, OM)), OM
      }
      modelInstance(MM, rM) {
        const iM = this.modelSlot(MM);
        let OM = iM.instances.get(rM.key);
        return OM || (OM = this.newMaterialInstance(MM, MM, rM), iM.instances.set(rM.key, OM)), OM
      }
      modelSlot(MM) {
        var rM;
        let iM = MM.gpu[gM.e.lite];
        return (null === (rM = iM) || void 0 === rM ? void 0 : rM.epoch) !== this.resources.epoch && (iM = new sa(this.resources, this.resources.epoch), MM.gpu[gM.e.lite] = iM), iM
      }
      newMaterialInstance(MM, rM, iM) {
        const OM = iM.program.material.floats,
          SM = new Float32Array(OM),
          jM = new Map;
        return {
          owner: MM,
          model: rM,
          program: iM,
          data: SM,
          uploaded: new Float32Array(OM).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${MM.name}-uniforms`,
            size: Math.max(16, 4 * OM),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: jM,
          ubo: new Ej(iM.program.material.slots, SM, jM),
          bindGroup: null,
          bound: new Array(2 * iM.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(MM) {
        var rM;
        const iM = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: AS + xS,
            fragment: AS + vS,
            attributes: [],
            material: NS,
            textures: []
          }, "earthSky"),
          OM = this.earthSkyUniforms ??= this.newMaterialInstance(Wa, null, iM);
        this.earthSkyFrom !== MM && (this.earthSkyFrom = MM, OM.data.fill(0)), VS(OM.ubo, MM, this.view);
        const SM = this.vertexInputs(iM, Wa, "earthSky", iM, null);
        if (iM.failed || !SM || !this.bindMaterial(OM, !1)) return;
        const jM = null !== (rM = SM.state) && void 0 !== rM ? rM : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          aM = this.makeDraw(iM, SM, jM, OM, 1);
        aM.count = oS.length;
        const PM = cS(MM, this.view);
        aM.slotOffset = this.writeMeshSlot(PM, 1), this.lists.skyDraws.push(aM)
      }
      uploadIfChanged(MM) {
        const {
          data: rM,
          uploaded: iM
        } = MM;
        for (let OM = 0; OM < rM.length; OM++)
          if (rM[OM] !== iM[OM]) return iM.set(rM), void this.device.queue.writeBuffer(MM.buffer, 0, rM)
      }
      bindMaterial(MM, rM) {
        return MM.frame !== this.frame && (MM.frame = this.frame, rM || this.uploadIfChanged(MM), MM.bindable = this.bindTextures(MM)), MM.bindable
      }
      bindTextures(MM) {
        const {
          program: rM,
          bound: iM
        } = MM, OM = rM.program.textures;
        let SM = !MM.bindGroup,
          jM = !0;
        for (let aM = 0; aM < OM.length; aM++) {
          const rM = MM.textures.get(OM[aM].name),
            PM = rM ? this.resources.boundTexture(rM) : null;
          PM ? iM[2 * aM] === PM.view && iM[2 * aM + 1] === PM.sampler || (iM[2 * aM] = PM.view, iM[2 * aM + 1] = PM.sampler, SM = !0) : (rM || MM.ubo.expected.has(OM[aM].name) || this.warnOnce(`texture:${MM.owner.name}:${OM[aM].name}`, `${MM.owner.name} has no ${OM[aM].name}`), jM = !1)
        }
        if (!jM) return SM && (MM.bindGroup = null), !1;
        if (SM) {
          const SM = [{
            binding: 0,
            resource: {
              buffer: MM.buffer
            }
          }];
          for (let MM = 0; MM < OM.length; MM++) SM.push({
            binding: OM[MM].binding,
            resource: iM[2 * MM]
          }), SM.push({
            binding: OM[MM].samplerBinding,
            resource: iM[2 * MM + 1]
          });
          MM.bindGroup = this.device.createBindGroup({
            label: `${MM.owner.name}-material`,
            layout: rM.materialLayout,
            entries: SM
          })
        }
        return !0
      }
      writeMeshSlot(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, MM, rM, iM), this.slotCount++ * LS
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(MM, rM, iM, OM, SM) {
        let jM = this.inputs.get(MM);
        if (!jM || jM.program !== OM || !tj(rM, jM, this.resources, SM)) {
          var aM;
          if (jM = null !== (aM = this.vertexLayouts.resolveInputs(rM, iM, OM, SM)) && void 0 !== aM ? aM : void 0, !jM) return null;
          this.inputs.set(MM, jM)
        }
        return this.withGpuBuffers(jM)
      }
      meshInputs(MM, rM, iM) {
        const OM = this.inputs.get(MM);
        if (OM && this.inputsStamped(OM, MM, iM, rM)) return this.withGpuBuffers(OM);
        const SM = MM.owner,
          jM = zj(MM),
          aM = this.vertexInputs(MM, SM, SM.name, rM, jM);
        return aM && (aM.geometry = Lj(MM), aM.instanceLayout = this.drawDefines.instanceLayout(SM, iM)), aM
      }
      inputsStamped(MM, rM, iM, OM) {
        return function(MM, rM, iM, OM) {
          return MM.program === iM && MM.geometry === Lj(rM) && MM.instanceLayout === OM
        }(MM, rM, OM, this.drawDefines.instanceLayout(rM.owner, iM))
      }
      withGpuBuffers(MM) {
        return Tj(MM, this.resources, this.zeroBuffer) ? MM : null
      }
      instanceBuffersFit(MM, rM, iM) {
        const OM = cj(rM, iM, this.resources, this.zeroBuffer);
        if (OM) {
          const SM = rM.ends[OM.index] - rM.offsets[OM.index] + rM.m_[OM.index];
          return this.warnOnce(`overrun:${MM}`, `${MM} draws ${iM} instances from a ${SM}-byte buffer (${OM.needed} needed)`), !1
        }
        return !0
      }
      createBinding(MM, rM, iM, OM) {
        const SM = `${rM._colorFormat}|${rM._depthStencilFormat}|${rM._depthCompare}|${rM._sampleCount}`,
          jM = ur(this.device, rM);
        if (MM === this.skyLastRenderable) {
          let iM = null;
          return {
            renderable: MM,
            pipeline: jM,
            draw: MM => iM ? this.drawSky(MM, rM, SM, iM) : 0,
            update: MM => {
              iM = MM
            }
          }
        }
        return {
          renderable: MM,
          pipeline: jM,
          draw: MM => (OM ? OM.execute(MM, rM, SM) : 0) + this.drawList(MM, rM, SM, iM)
        }
      }
      drawSky(MM, rM, iM, OM) {
        const SM = this.lists.skyDraws,
          jM = SM.length > 0;
        if (jM) {
          var aM;
          const iM = (null !== (aM = rM._depthCompare) && void 0 !== aM ? aM : br).startsWith("greater") ? 0 : 1;
          MM.setViewport(0, 0, OM.targetWidth, OM.targetHeight, iM, iM)
        }
        const PM = this.drawList(MM, rM, iM, SM);
        return jM && MM.setViewport(0, 0, OM.targetWidth, OM.targetHeight, 0, 1), PM
      }
      drawList(MM, rM, iM, OM) {
        let SM = 0;
        const jM = this.binder;
        jM.reset();
        for (const aM of OM) {
          const OM = this.pipelineFor(aM, rM, iM);
          OM && (jM.bind(MM, aM, OM, this.meshSlots.bindGroup, aM.slotOffset), aM.indexBuffer ? MM.drawIndexed(aM.count, aM.instances, aM.first, 0, 0) : MM.draw(aM.count, aM.instances, aM.first, 0), SM++)
        }
        return SM
      }
      pipelineFor(MM, rM, iM) {
        var OM, SM;
        if (MM.program.failed) return null;
        const jM = MM.inputs;
        if (jM.pipeline && jM.pipelineTarget === iM) return jM.pipeline;
        const aM = `${MM.pipelineKey}|${iM}`,
          PM = this.pipelines.get(aM);
        if (void 0 !== PM) return PM && (jM.pipeline = PM, jM.pipelineTarget = iM), PM || null;
        this.pipelines.set(aM, null);
        const {
          program: nM,
          layout: QM,
          state: zM
        } = MM, LM = {
          label: `standard-${nM.id}`,
          layout: nM.pipelineLayout,
          vertex: {
            module: nM.vertex,
            entryPoint: "main",
            buffers: QM.buffers
          },
          fragment: lr({
            module: nM.fragment,
            entryPoint: "main"
          }, rM, zM.blend, zM.colourWrite),
          depthStencil: rM._depthStencilFormat ? {
            format: rM._depthStencilFormat,
            depthCompare: null !== (OM = null !== (SM = zM.depthCompare) && void 0 !== SM ? SM : rM._depthCompare) && void 0 !== OM ? OM : br,
            depthWriteEnabled: zM.depthWrite,
            depthBias: zM.depthBias,
            depthBiasSlopeScale: zM.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: rM._sampleCount
          },
          primitive: {
            topology: zM.topology,
            frontFace: zM.frontFace,
            cullMode: zM.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(LM).then((MM => {
          this.compiling--, this.pipelines.set(aM, MM)
        }), (MM => {
          this.compiling--, this.reportFailure(nM, aM, MM)
        })), null
      }
      forEachSunShadowCaster(MM) {
        const rM = this.caster,
          iM = (iM, OM, SM) => {
            const jM = iM.unit && function(MM) {
              const rM = MM.material.model;
              return null !== rM && (rM.lifeform || rM.item) && rM.castsSunShadow && "triangle-list" === MM.state.topology
            }(iM) ? zj(iM.unit) : null;
            if (!jM) return;
            const aM = iM.unit.owner;
            switch (rM.geometry = jM, rM.skip = aM.noSunShadowVertices, rM.indexed = null !== iM.indexBuffer, rM.first = iM.first, rM.count = iM.count, rM.uL = OM, rM.worldAt = SM, rM.instances = null, rM.instanceCount = 1, rM.thin = !1, aj(aM)) {
              case "thin": {
                const MM = aM._thinInstanceDataStorage.matrixData;
                if (!MM) return;
                rM.instances = MM, rM.instanceCount = Math.min(iM.instances, MM.length / 16), rM.thin = !0;
                break
              }
              case "instanced": {
                const MM = this.resources.batchUploads.get(aM);
                if (!MM || MM.frame !== this.frame || !this.writeBatchCasters(MM)) return;
                break
              }
            }
            MM(rM)
          };
        for (const OM of this.lists.opaqueDraws) iM(OM, this.meshSlots.data, OM.slotOffset / 4);
        this.thinBundle.forEachDrawn(iM)
      }
      writeBatchCasters(MM) {
        const {
          caster: rM
        } = this, iM = MM.packedMatrices, OM = MM.count;
        rM.instances = iM, rM.instanceCount = OM;
        let SM = -1;
        for (let jM = 0; jM < OM; jM++) {
          const rM = Za(MM.packedRowMesh(jM));
          rM && SM < 0 ? (this.casterWorlds.length < 16 * OM && (this.casterWorlds = new Float32Array(iM.length)), this.casterWorlds.set(iM.subarray(0, 16 * jM)), SM = jM) : !rM && SM >= 0 && (this.casterWorlds.set(iM.subarray(16 * jM, 16 * jM + 16), 16 * SM), SM++)
        }
        return SM >= 0 && (rM.instances = this.casterWorlds, rM.instanceCount = SM), rM.instanceCount > 0
      }
      async reportFailure(MM, rM, iM) {
        const OM = [];
        let SM = !0;
        for (const [jM, aM] of [
            ["vertex", MM.vertex],
            ["fragment", MM.fragment]
          ]) {
          const MM = await aM.getCompilationInfo();
          for (const rM of MM.messages) SM &&= "error" !== rM.type, OM.push(`${jM}:${rM.lineNum}:${rM.linePos} ${rM.type}: ${rM.message}`)
        }
        if (SM && !MM.packGroup) return this.pipelines.set(rM, !1), console.error(`Lite: pipeline ${rM} failed`, iM), void zr(this.device, "mesh", MM.kind, iM);
        MM.failed || (MM.failed = !0, console.error(`Lite: program ${MM.id} failed`, iM, OM.join("\n"), {
          program: MM.program,
          key: MM.key
        }), zr(this.device, "mesh", MM.kind, iM, SM ? null : OM[0]))
      }
    }

    function Za(MM) {
      var rM, iM;
      const OM = null === (rM = MM.xZ) || void 0 === rM || null === (iM = rM.aShaderPackItem) || void 0 === iM ? void 0 : iM.x;
      return void 0 !== OM && 0 !== (OM & pr.l)
    }
    var oa = iM(44348),
      fa = iM(44352),
      Ya = iM(44354),
      Na = iM(44311);
    const Aa = [0, 3, 1, 4, 2, 5];

    function xa(MM, rM, iM, OM, SM) {
      const jM = iM[0].width;
      try {
        return SM ? function(MM, rM, iM) {
          const OM = (0, Na.c)(MM, iM, iM, 6);
          for (let SM = 0; SM < 6; SM++)(0, Na.e)(MM, OM, SM, rM[Aa[SM]], {
            invertY: !1
          });
          return OM.texture
        }(MM, iM, jM) : function(MM, rM, iM, OM) {
          const SM = MM.createTexture({
            label: "sink-cube",
            size: {
              width: iM,
              height: iM,
              depthOrArrayLayers: 6
            },
            format: OM,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let jM = 0; jM < 6; jM++) MM.queue.copyExternalImageToTexture({
            source: rM[Aa[jM]]
          }, {
            texture: SM,
            origin: {
              x: 0,
              y: 0,
              z: jM
            }
          }, {
            width: iM,
            height: iM
          });
          return SM
        }(rM, iM, jM, 1 === OM ? "r8unorm" : "rgba8unorm")
      } finally {
        va(iM)
      }
    }

    function va(MM) {
      for (const rM of null !== MM && void 0 !== MM ? MM : []) null === rM || void 0 === rM || rM.close()
    }
    async function Fa(MM) {
      const rM = [],
        iM = [];
      if (await Promise.all(MM.map(((MM, OM) => (rM[OM] = null, MM.then((MM => {
          rM[OM] = MM
        }), (MM => {
          iM.push(MM)
        })))))), iM.length > 0) throw va(rM), iM[0];
      return rM
    }
    class Ba {
      constructor(MM) {
        this.vL = MM, this.starts = [], this.lengths = [], this.used = 0, MM > 0 && (this.starts.push(0), this.lengths.push(MM))
      }
      allocate(MM) {
        const {
          starts: rM,
          lengths: iM
        } = this;
        for (let OM = 0; OM < rM.length; OM++) {
          if (iM[OM] < MM) continue;
          const SM = rM[OM];
          return iM[OM] === MM ? (rM.splice(OM, 1), iM.splice(OM, 1)) : (rM[OM] += MM, iM[OM] -= MM), this.used += MM, SM
        }
        return -1
      }
      free(MM, rM) {
        this.used -= rM;
        const iM = Math.min(MM + rM, this.vL);
        iM > MM && this.release(MM, iM - MM)
      }
      grow(MM) {
        const rM = this.vL;
        this.vL = MM, this.release(rM, MM - rM)
      }
      truncate(MM) {
        const {
          starts: rM,
          lengths: iM
        } = this;
        for (let OM = rM.length - 1; OM >= 0 && rM[OM] + iM[OM] > MM; OM--) rM[OM] >= MM ? (rM.splice(OM, 1), iM.splice(OM, 1)) : iM[OM] = MM - rM[OM];
        this.vL = MM
      }
      release(MM, rM) {
        const {
          starts: iM,
          lengths: OM
        } = this;
        let SM = 0,
          jM = iM.length;
        for (; SM < jM;) {
          const rM = SM + jM >> 1;
          iM[rM] < MM ? SM = rM + 1 : jM = rM
        }
        const aM = SM,
          PM = aM > 0 && iM[aM - 1] + OM[aM - 1] === MM,
          nM = aM < iM.length && MM + rM === iM[aM];
        PM && nM ? (OM[aM - 1] += rM + OM[aM], iM.splice(aM, 1), OM.splice(aM, 1)) : PM ? OM[aM - 1] += rM : nM ? (iM[aM] = MM, OM[aM] += rM) : (iM.splice(aM, 0, MM), OM.splice(aM, 0, rM))
      }
    }
    const Xa = 256;
    class Ia {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = MM, this.onReplaced = rM, this.mergeGap = iM, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.Ld = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const SM = Math.max(Xa, Math.ceil(OM / Xa) * Xa);
        this.bytes = new Uint8Array(SM), this.words = new Uint32Array(this.bytes.buffer), this.Ld = new Ba(SM / Xa)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(MM) {
        return Math.max(1, Math.ceil(MM / Xa)) * Xa
      }
      allocate(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MM;
        const OM = Ia.slotBytes(MM),
          SM = OM / Xa;
        let jM = this.Ld.allocate(SM);
        jM < 0 && (this.grow(this.Ld.vL + SM), jM = this.Ld.allocate(SM));
        const aM = jM * Xa;
        return this.growTo(aM + Math.max(iM, OM)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, aM, aM + OM), rM && this.bytes.set(new Uint8Array(rM.buffer, rM.byteOffset, Math.min(rM.byteLength, OM)), aM), this.markDirty(aM, aM + OM), aM
      }
      growTo(MM) {
        const rM = Math.ceil(MM / Xa);
        rM > this.Ld.vL && this.grow(rM)
      }
      free(MM, rM) {
        this.freed.push(MM, rM)
      }
      write(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (OM <= 0) return;
        OM <= 1024 && 0 === (3 & (MM | iM | OM)) ? this.copyWords(MM >> 2, rM.buffer, iM >> 2, OM >> 2) : this.bytes.set(new Uint8Array(rM.buffer, iM, OM), MM);
        let jM = MM + OM;
        if (SM) {
          const rM = MM + 4 * Math.ceil(OM / 4);
          this.bytes.fill(0, jM, rM), jM = rM
        }
        this.markDirty(MM, jM)
      }
      copyWords(MM, rM, iM, OM) {
        let SM = this.sourceWords.get(rM);
        SM || (SM = new Uint32Array(rM, 0, rM.byteLength >> 2), this.sourceWords.set(rM, SM));
        const jM = this.words;
        for (let aM = 0; aM < OM; aM++) jM[MM + aM] = SM[iM + aM]
      }
      move(MM, rM, iM) {
        this.bytes.copyWithin(rM, MM, MM + iM), this.markDirty(rM, rM + iM)
      }
      flush() {
        for (const rM of this.retired) this.onReplaced(rM), rM.destroy();
        this.retired.length = 0;
        const MM = this.dirtyStarts.length;
        if (MM > 0) {
          const {
            dirtyStarts: rM,
            dirtyEnds: iM,
            order: OM
          } = this;
          OM.length = MM;
          for (let PM = 0; PM < MM; PM++) OM[PM] = PM;
          MM > 1 && OM.sort(((MM, iM) => rM[MM] - rM[iM]));
          const SM = this.mergeGap;
          let jM = rM[OM[0]],
            aM = iM[OM[0]];
          for (let PM = 1; PM < MM; PM++) {
            const MM = OM[PM];
            rM[MM] - aM <= SM ? aM = Math.max(aM, iM[MM]) : (this.send(jM, aM), jM = rM[MM], aM = iM[MM])
          }
          this.send(jM, aM), rM.length = 0, iM.length = 0
        }
        this.holding = !1
      }
      EL() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const MM = this.freed;
        for (let rM = 0; rM < MM.length; rM += 2) this.Ld.free(MM[rM] / Xa, MM[rM + 1] / Xa);
        MM.length = 0
      }
      send(MM, rM) {
        this.device.queue.writeBuffer(this.gpu, MM, this.bytes.buffer, MM, rM - MM);
        for (const iM of this.replaced) {
          const OM = Math.min(rM, iM.size);
          OM > MM && this.device.queue.writeBuffer(iM, MM, this.bytes.buffer, MM, OM - MM)
        }
      }
      markDirty(MM, rM) {
        MM &= -4, rM = rM + 3 & -4, this.holding ? (this.dirtyStarts.push(MM), this.dirtyEnds.push(rM)) : this.send(MM, rM)
      }
      grow(MM) {
        const rM = this.Ld.vL,
          iM = Math.max(2 * rM, MM),
          OM = new Uint8Array(iM * Xa);
        OM.set(this.bytes);
        const SM = this.gpu;
        this.gpu = this.createGpu(OM.byteLength), this.bytes = OM, this.words = new Uint32Array(OM.buffer), this.Ld.grow(iM), SM && (this.replaced.push(SM), this.onReplaced(SM)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, rM * Xa)
      }
      createGpu(MM) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: MM,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Ka(MM) {
      return Array.isArray(MM) ? new Float32Array(MM) : MM
    }

    function qa(MM, rM, iM, OM, SM) {
      const jM = XM(SM),
        aM = Math.min(SM, OM.byteLength);
      if (jM === aM && OM.byteOffset % 4 === 0) return void MM.queue.writeBuffer(rM, iM, OM.buffer, OM.byteOffset, jM);
      const PM = new Uint8Array(jM);
      PM.set(new Uint8Array(OM.buffer, OM.byteOffset, aM)), MM.queue.writeBuffer(rM, iM, PM)
    }

    function Ta(MM, rM, iM) {
      const OM = "linear",
        SM = "nearest";
      let jM = SM,
        aM = SM,
        PM = "nearest",
        nM = !rM;
      switch (MM) {
        case 11:
          jM = OM, aM = OM;
          break;
        case 3:
          jM = OM, aM = OM, PM = rM ? "linear" : "nearest";
          break;
        case 8:
          PM = rM ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          aM = OM;
          break;
        case 6:
          aM = OM, PM = rM ? "linear" : "nearest";
          break;
        case 7:
          aM = OM, nM = !0;
          break;
        case 9:
          jM = OM;
          break;
        case 10:
          jM = OM, PM = rM ? "linear" : "nearest";
          break;
        case 2:
          jM = OM, aM = OM, iM > 1 ? (PM = "linear", nM = !1) : nM = !0;
          break;
        case 12:
          jM = OM, nM = !0;
          break;
        default:
          nM = !0
      }
      return iM > 1 && !nM ? {
        magFilter: OM,
        minFilter: OM,
        mipmapFilter: "linear",
        maxAnisotropy: iM
      } : {
        magFilter: jM,
        minFilter: aM,
        mipmapFilter: PM,
        ...nM ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Va(MM) {
      return 0 === MM ? "clamp-to-edge" : 2 === MM ? "mirror-repeat" : "repeat"
    }
    class ca {
      constructor(MM, rM) {
        let {
          vertexArena: iM = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = MM, this.device = rM, this.buffers = new WeakMap, this.o9 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = iM ? this.createArena() : null
      }
      createArena() {
        return new Ia(this.device, (MM => {
          var rM;
          null === (rM = this.onDestroy) || void 0 === rM || rM.call(this, MM), this.gpuBuffersVersion++
        }))
      }
      rebind(MM, rM) {
        this.engine = MM, this.device = rM, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const iM of this.liveUploads) iM.rebind();
        for (const iM of this.rebindWaiters.splice(0)) iM()
      }
      flushUploads() {
        var MM;
        null === (MM = this.arena) || void 0 === MM || MM.flush()
      }
      endUploadFrame() {
        var MM;
        null === (MM = this.arena) || void 0 === MM || MM.EL()
      }
      vertexBufferCreated(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iM ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(MM);
        const SM = Ka(rM);
        MM.vL = SM.byteLength, this.buffers.set(MM, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: iM && null !== this.arena,
          pending: SM,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: OM
        })
      }
      vertexBufferUpdated(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        const SM = this.buffers.get(MM);
        if (!SM) return;
        const jM = Ka(rM),
          aM = void 0 === OM ? jM.byteLength : Math.min(OM, jM.byteLength);
        this.update(SM, jM, iM, aM)
      }
      vertexBufferFloatsUpdated(MM, rM, iM, OM) {
        const SM = this.buffers.get(MM);
        if (!SM) return;
        const jM = iM * Float32Array.BYTES_PER_ELEMENT,
          aM = (OM - iM) * Float32Array.BYTES_PER_ELEMENT;
        SM.slot >= 0 && aM > 0 && jM + aM <= SM.size ? this.writeSlot(SM, jM, rM, rM.byteOffset + jM, aM, !1) : SM.gpu && aM > 0 && jM + aM <= SM.gpu.size ? this.device.queue.writeBuffer(SM.gpu, jM, rM.buffer, rM.byteOffset + jM, aM) : this.update(SM, rM.subarray(iM, OM), jM, aM)
      }
      indexBufferCreated(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(MM);
        const OM = function(MM) {
          if (MM instanceof Uint16Array || MM instanceof Uint32Array) return MM;
          for (let rM = 0; rM < MM.length; rM++)
            if (MM[rM] >= 65535) return new Uint32Array(MM);
          return new Uint16Array(MM)
        }(rM);
        MM.is32Bits = 4 === OM.BYTES_PER_ELEMENT, MM.vL = OM.byteLength, this.buffers.set(MM, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: OM,
          ownsPending: OM !== rM,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: iM
        })
      }
      bufferDeleted(MM) {
        const rM = this.buffers.get(MM);
        null !== rM && void 0 !== rM && rM.gpu ? (this.destroyBuffer(rM.gpu), this.gpuBuffersVersion++) : rM && rM.slot >= 0 && (this.arena.free(rM.slot, rM.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(MM)
      }
      update(MM, rM, iM, OM) {
        if (MM.slot >= 0) this.updateSlot(MM, rM, iM, OM);
        else if (MM.gpu) {
          if (iM + XM(OM) > MM.gpu.size) {
            const rM = this.device.createBuffer({
                label: MM.label,
                size: XM(Math.max(2 * MM.gpu.size, iM + OM)),
                usage: MM.usage | GPUBufferUsage.COPY_SRC
              }),
              SM = this.device.createCommandEncoder();
            SM.copyBufferToBuffer(MM.gpu, 0, rM, 0, MM.gpu.size), this.device.queue.submit([SM.finish()]), this.destroyBuffer(MM.gpu), this.gpuBuffersVersion++, MM.gpu = rM
          }
          qa(this.device, MM.gpu, iM, rM, OM)
        } else {
          const jM = new Uint8Array(rM.buffer, rM.byteOffset, OM),
            aM = MM.pending;
          if (aM && MM.ownsPending && iM + OM <= aM.byteLength) new Uint8Array(aM.buffer, aM.byteOffset, aM.byteLength).set(jM, iM);
          else if (aM && 0 === iM && OM === aM.byteLength && rM.byteLength === OM) MM.pending = rM, MM.ownsPending = !1;
          else {
            var SM;
            const rM = new Uint8Array(Math.max(null !== (SM = null === aM || void 0 === aM ? void 0 : aM.byteLength) && void 0 !== SM ? SM : 0, iM + OM));
            aM && rM.set(new Uint8Array(aM.buffer, aM.byteOffset, aM.byteLength)), rM.set(jM, iM), MM.pending = rM, MM.ownsPending = !0
          }
        }
      }
      updateSlot(MM, rM, iM, OM) {
        const SM = this.arena;
        iM + XM(OM) > MM.size && (MM.size = XM(Math.max(2 * MM.size, iM + OM)), SM.growTo(MM.slot + MM.size), this.gpuBuffersVersion++), 0 === OM ? this.writeSlot(MM, iM, rP, 0, 4, !1) : this.writeSlot(MM, iM, rM, rM.byteOffset, OM, !0)
      }
      writeSlot(MM, rM, iM, OM, SM, jM) {
        const aM = rM + (jM ? XM(SM) : SM);
        aM > MM.slotBytes && this.moveSlot(MM, aM), this.arena.write(MM.slot + rM, iM, OM, SM, jM)
      }
      moveSlot(MM, rM) {
        const iM = this.arena,
          OM = Ia.slotBytes(Math.max(rM, Math.min(2 * MM.slotBytes, MM.size))),
          SM = iM.allocate(OM, null, MM.size);
        iM.move(MM.slot, SM, MM.slotBytes), iM.free(MM.slot, MM.slotBytes), MM.slot = SM, MM.slotBytes = OM, this.gpuBuffersVersion++
      }
      cover(MM, rM) {
        const iM = this.buffers.get(MM);
        if (!iM || iM.slot < 0) return !1;
        const OM = Math.min(rM, iM.size);
        return !(OM <= iM.slotBytes) && (this.moveSlot(iM, OM), !0)
      }
      destroyBuffer(MM) {
        var rM;
        null === (rM = this.onDestroy) || void 0 === rM || rM.call(this, MM), MM.destroy()
      }
      gpuBuffer(MM) {
        const rM = this.buffers.get(MM);
        if (!rM) return null;
        if (rM.slot >= 0) return this.arena.buffer;
        if (rM.arena && rM.pending) {
          const MM = rM.pending,
            iM = this.arena;
          return rM.size = XM(MM.byteLength), rM.slotBytes = Ia.slotBytes(function(MM) {
            const rM = new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength);
            let iM = rM.length;
            if (MM.byteOffset % 4 === 0) {
              for (; iM % 4 !== 0 && 0 === rM[iM - 1];) iM--;
              if (iM % 4 === 0) {
                const rM = new Uint32Array(MM.buffer, MM.byteOffset, iM / 4);
                let OM = rM.length;
                for (; OM > 0 && 0 === rM[OM - 1];) OM--;
                iM = 4 * OM
              }
            }
            for (; iM > 0 && 0 === rM[iM - 1];) iM--;
            return iM
          }(MM)), rM.slot = iM.allocate(rM.slotBytes, MM, rM.size), rM.pending = null, iM.buffer
        }
        if (!rM.gpu && rM.pending) {
          const MM = rM.pending;
          rM.gpu = this.device.createBuffer({
            label: rM.label,
            size: XM(MM.byteLength),
            usage: rM.usage
          }), qa(this.device, rM.gpu, 0, MM, MM.byteLength), rM.pending = null
        }
        return rM.gpu
      }
      gpuOffset(MM) {
        var rM, iM;
        const OM = null !== (rM = null === (iM = this.buffers.get(MM)) || void 0 === iM ? void 0 : iM.slot) && void 0 !== rM ? rM : -1;
        return OM < 0 ? 0 : OM
      }
      gpuEnd(MM) {
        var rM, iM;
        const OM = this.buffers.get(MM);
        return OM ? OM.slot >= 0 ? OM.slot + OM.size : null !== (rM = null === (iM = OM.gpu) || void 0 === iM ? void 0 : iM.size) && void 0 !== rM ? rM : 0 : 0
      }
      vertexInput(MM, rM, iM) {
        var OM, SM, jM, aM;
        return null !== (OM = null !== (SM = iM && this.modelInput(iM, rM)) && void 0 !== SM ? SM : null === (jM = null !== (aM = this.o9.get(MM)) && void 0 !== aM ? aM : this.batchUploads.get(MM)) || void 0 === jM ? void 0 : jM.inputs[rM]) && void 0 !== OM ? OM : null
      }
      modelInput(MM, rM) {
        const iM = this.geometrySlot(MM);
        let OM = iM.inputs.get(rM);
        if (void 0 === OM) {
          const SM = MM.vertexAttributes.find((MM => MM.kind === rM));
          OM = SM ? new hr(this.modelKey(iM, SM.data, !1), SM.offset, SM.stride, SM.components, !1, SM.glType, SM.isNormalized) : null, iM.inputs.set(rM, OM)
        }
        return OM
      }
      modelIndex(MM) {
        return MM.indexData && this.modelKey(this.geometrySlot(MM), MM.indexData, !0)
      }
      geometrySlot(MM) {
        var rM;
        let iM = MM.gpu[gM.e.lite];
        if ((null === (rM = iM) || void 0 === rM ? void 0 : rM.epoch) !== this.epoch) {
          const rM = new Map,
            OM = () => {
              for (const MM of rM.values()) this.bufferDeleted(MM)
            },
            SM = MM => {
              const iM = rM.get(MM);
              iM && this.vertexBufferUpdated(iM, MM)
            };
          iM = {
            keys: rM,
            inputs: new Map,
            release: OM,
            updated: SM,
            epoch: this.epoch
          }, MM.gpu[gM.e.lite] = iM
        }
        return iM
      }
      modelKey(MM, rM, iM) {
        let OM = MM.keys.get(rM);
        if (!OM) {
          if (iM) {
            const MM = {
              vL: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(MM, rM, "model-indices"), OM = MM
          } else OM = {
            vL: 0
          }, this.vertexBufferCreated(OM, rM, !1, "model-vertices");
          MM.keys.set(rM, OM)
        }
        return OM
      }
      indexFormat(MM) {
        return MM.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(MM, rM) {
        --MM.refs > 0 || (this.releaseTexture(MM), va(MM.images), null !== rM && this.textures.delete(rM))
      }
      load(MM, rM) {
        const {
          epoch: iM
        } = this, OM = rM.decoded = async function(MM) {
          if ("cube" === MM.kind) return async function(MM) {
            if (6 !== MM.length) throw new Error(`${MM.length} files where six faces were expected`);
            const rM = await Fa(MM.map((MM => cM(MM)))),
              iM = rM[0].width;
            return Fa(rM.map((async MM => {
              if (MM.width === iM && MM.height === iM) return MM;
              try {
                return await createImageBitmap(MM, {
                  ...TM,
                  resizeWidth: iM,
                  resizeHeight: iM
                })
              } finally {
                MM.close()
              }
            })))
          }(MM.files);
          if ("data" === MM.kind && MM.data) return [await createImageBitmap(new Blob([MM.data]), TM)];
          return [await cM(MP(MM))]
        }(MM.source).then((MM => {
          0 === rM.refs || iM !== this.epoch ? va(MM) : rM.images = MM
        }));
        this.track(rM, MP(MM.source), OM, (() => {
          rM.wanted && !rM.failed && rM.refs > 0 && this.upload(MM, rM)
        }))
      }
      canvasUpdated(MM, rM, iM) {
        const {
          state: OM
        } = this.textureSlot(MM);
        OM.dynamicSource = {
          invertY: rM,
          premultiplied: iM
        }, OM.dynamic && this.pushDynamic(MM.source, OM)
      }
      async atlasArrays(MM) {
        const {
          device: rM,
          epoch: iM
        } = this;
        let OM;
        try {
          OM = await rr(rM, MM)
        } catch (jM) {
          if (iM === this.epoch) {
            if (!Qr(rM)) throw jM;
            await new Promise((MM => {
              this.rebindWaiters.push(MM)
            }))
          }
          return this.atlasArrays(MM)
        }
        if (OM.forEach(((rM, iM) => {
            this.atlasSources.has(rM) || this.atlasSources.set(rM, {
              sources: MM,
              index: iM,
              stride: OM[0].layers
            })
          })), iM !== this.epoch) return OM;
        const SM = (0, oa.e)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const aM of OM) this.atlasBindings.has(aM) || this.atlasBindings.set(aM, {
          view: aM.texture.createView({
            dimension: "2d-array"
          }),
          sampler: SM
        });
        return OM
      }
      boundTexture(MM) {
        const rM = this.atlasBindings.get(MM);
        if (rM) return rM;
        const iM = this.atlasSources.get(MM);
        if (iM) return this.rebuildAtlas(MM, iM), null;
        const OM = MM;
        if (OM.released) return null;
        const SM = this.textureSlot(OM, !0),
          {
            state: jM
          } = SM;
        if (!jM.view && (jM.wanted = !0, jM.loading || jM.failed || this.upload(OM, jM), !jM.view)) return null;
        const aM = this.chosenSampler(OM, SM),
          PM = SM.bound;
        return PM && PM.view === jM.view && PM.sampler === aM ? PM : (SM.bound = {
          view: jM.view,
          sampler: aM
        }, SM.bound)
      }
      rebuildAtlas(MM, rM) {
        let {
          sources: iM,
          index: OM,
          stride: SM
        } = rM;
        if (this.atlasRebuilds.has(MM)) return;
        this.atlasRebuilds.add(MM);
        const {
          epoch: jM
        } = this;
        this.atlasArrays(iM).then((rM => {
          rM[0].layers === SM && rM[OM] ? jM === this.epoch && this.atlasBindings.set(MM, this.atlasBindings.get(rM[OM])) : console.error(`Lite: the new device splits the atlas ${VM(iM.urls[0])} into other arrays than its materials read`)
        }), (MM => {
          console.error(`Lite: could not build the atlas ${VM(iM.urls[0])} again on a new device`, MM)
        }))
      }
      textureLoaded(MM) {
        var rM, iM;
        return null !== (rM = null === (iM = this.heldSlot(MM)) || void 0 === iM ? void 0 : iM.state.decoded) && void 0 !== rM ? rM : null
      }
      textureFailed(MM) {
        var rM;
        return !0 === (null === (rM = this.heldSlot(MM)) || void 0 === rM ? void 0 : rM.state.failed)
      }
      heldSlot(MM) {
        const rM = MM.gpu[gM.e.lite];
        return (null === rM || void 0 === rM ? void 0 : rM.epoch) === this.epoch ? rM : void 0
      }
      chosenSampler(MM, rM) {
        const {
          samplingMode: iM,
          wrapU: OM,
          wrapV: SM
        } = MM.sampler, jM = rM.state.hasMips, aM = function(MM, rM) {
          const {
            bilinear: iM,
            trilinear: OM
          } = gM.i;
          return !rM && MM !== iM || 11 !== MM && MM !== OM && MM !== iM ? 1 : 4
        }(iM, jM), PM = rM.sampler;
        if (PM && PM.samplingMode === iM && PM.hasMips === jM && PM.anisotropy === aM && PM.wrapU === OM && PM.wrapV === SM) return PM.sampler;
        const nM = this.samplerFor(iM, jM, aM, OM, SM);
        return rM.sampler = {
          samplingMode: iM,
          hasMips: jM,
          anisotropy: aM,
          wrapU: OM,
          wrapV: SM,
          sampler: nM
        }, nM
      }
      releaseTexture(MM) {
        var rM, iM;
        MM.view && (null === (iM = this.onDestroy) || void 0 === iM || iM.call(this, MM.view));
        null === (rM = MM.destroy) || void 0 === rM || rM.call(MM)
      }
      textureSlot(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = MM.gpu[gM.e.lite];
        if ((null === iM || void 0 === iM ? void 0 : iM.epoch) === this.epoch) return iM;
        const OM = function(MM) {
          let {
            source: rM,
            sampler: iM
          } = MM;
          return "canvas" === rM.kind ? null : `${rM.kind}|${MP(rM)}|${iM.noMipmap}|${iM.samplingMode}|${iM.invertY}`
        }(MM);
        let SM = null === OM ? void 0 : this.textures.get(OM);
        var jM;
        SM || (SM = {
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
          dynamicSource: null !== (jM = null === iM || void 0 === iM ? void 0 : iM.state.dynamicSource) && void 0 !== jM ? jM : null
        }, null !== OM && (this.textures.set(OM, SM), this.load(MM, SM), rM && !iM && this.firstBindDecodes++));
        SM.refs++;
        const aM = SM,
          {
            epoch: PM
          } = this,
          nM = {
            state: SM,
            bound: null,
            sampler: null,
            release: () => {
              PM === this.epoch && this.releaseSlot(aM, OM)
            },
            epoch: PM
          };
        return MM.gpu[gM.e.lite] = nM, nM
      }
      samplerFor(MM, rM, iM, OM, SM) {
        const jM = `${MM}|${rM}|${iM}|${OM}|${SM}`;
        let aM = this.samplers.get(jM);
        if (!aM) {
          const PM = {
            ...Ta(MM, rM, iM),
            addressModeU: Va(OM),
            addressModeV: Va(SM)
          };
          aM = (0, oa.e)(this.engine, PM), this.samplers.set(jM, aM)
        }
        return aM
      }
      upload(MM, rM) {
        const {
          source: iM,
          sampler: OM
        } = MM;
        rM.hasMips = !OM.noMipmap, "canvas" === iM.kind ? this.createDynamic(iM, rM) : "cube" === iM.kind ? this.uploadCube(rM, iM.luminance) : this.uploadImage(rM, !0 === OM.invertY, iM.url)
      }
      uploadImage(MM, rM, iM) {
        const [OM] = MM.images;
        MM.images = null;
        const {
          epoch: SM
        } = this, jM = (0, fa.c)(this.engine, OM, {
          mipMaps: MM.hasMips,
          invertY: rM,
          srgb: !1
        }).then((rM => {
          OM.close(), 0 !== MM.refs && SM === this.epoch ? (MM.view = rM.view, MM.destroy = rM.texture.destroy.bind(rM.texture)) : rM.texture.destroy()
        }));
        this.track(MM, iM, jM)
      }
      track(MM, rM, iM, OM) {
        const {
          epoch: SM
        } = this;
        MM.loading = !0, this.pending++, iM.catch((iM => {
          SM === this.epoch && (MM.failed = !0, console.warn(`Lite: could not load texture ${VM(rM)}`, iM))
        })).finally((() => {
          SM === this.epoch && (MM.loading = !1, this.pending--, null === OM || void 0 === OM || OM())
        }))
      }
      uploadCube(MM, rM) {
        const iM = MM.images;
        MM.images = null;
        const OM = xa(this.engine, this.device, iM, (0, gM.v)(rM), MM.hasMips);
        MM.view = OM.createView({
          dimension: "cube"
        }), MM.destroy = () => {
          OM.destroy()
        }
      }
      createDynamic(MM, rM) {
        const {
          canvas: iM
        } = MM, OM = (0, Ya.c)(this.engine, Math.max(1, iM.width), Math.max(1, iM.height), {
          mipMaps: rM.hasMips,
          srgb: !1
        });
        rM.dynamic = OM, rM.view = OM.view, rM.destroy = () => {
          OM.texture.destroy()
        }, this.pushDynamic(MM, rM)
      }
      pushDynamic(MM, rM) {
        const iM = rM.dynamicSource,
          OM = rM.dynamic,
          {
            canvas: SM
          } = MM;
        if (iM && OM && 0 !== SM.width && 0 !== SM.height) return SM.width !== OM.width || SM.height !== OM.height ? (this.releaseTexture(rM), rM.dynamic = null, rM.view = null, void this.createDynamic(MM, rM)) : void(0, Ya.g)(this.engine, OM, SM, {
          invertY: iM.invertY,
          premultiplyAlpha: iM.premultiplied
        })
      }
    }

    function MP(MM) {
      return "cube" === MM.kind ? MM.rootUrl : "canvas" === MM.kind ? "canvas" : MM.url
    }
    const rP = new Uint8Array(4);
    var iP = iM(39794);

    function OP(MM) {
      const rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      MM._colorAttachment.storeOp = MM._targetSignature._sampleCount > 1 ? rM : "store";
      const iM = MM._renderPassDescriptor.depthStencilAttachment;
      iM && (iM.depthStoreOp = rM, iM.stencilStoreOp && (iM.stencilStoreOp = rM))
    }
    var SP = iM(38744),
      jP = iM(38801),
      aP = iM(38340),
      PP = iM(40712);
    const nP = new Float64Array([1, 1, 1]),
      QP = new Float64Array([0, 1, 0]),
      zP = new Float64Array(4),
      LP = new Float32Array(16),
      mP = new Float64Array(3),
      HP = new Float64Array(4);

    function hP(MM, rM, iM) {
      MM.fov = rM.fov, MM.near = rM.near, MM.far = rM.far, MM.renderWidth = iM.renderWidth, MM.renderHeight = iM.renderHeight, (0, aP.p)(rM.holderRotation, 0, zP, 0), (0, aP.d)(nP, 0, zP, 0, rM.holderPosition, 0, LP);
      const OM = rM.yV;
      mP[0] = OM[0], mP[1] = OM[1], mP[2] = OM[2] + 1;
      const SM = MM.viewMatrix;
      (0, aP.h)(OM, mP, QP, SM), (0, aP.g)(SM, 0, SM), (0, aP.j)(SM, LP, 0, SM), (0, aP.g)(SM, 0, SM);
      const jM = MM.worldMatrix;
      (0, aP.g)(SM, 0, jM), MM.eye[0] = jM[12], MM.eye[1] = jM[13], MM.eye[2] = jM[14], HP[0] = MM.fov, HP[1] = MM.renderWidth / MM.renderHeight, HP[2] = MM.near, HP[3] = MM.far, (0, aP.m)(HP, MM.projectionMatrix), (0, aP.j)(SM, MM.projectionMatrix, 0, MM.viewProjectionMatrix), (0, PP.i)(MM.viewProjectionMatrix, MM.frustum)
    }

    function JP(MM, rM) {
      let iM = MM.frustumPlanes;
      iM || (iM = MM.frustumPlanes = Array.from({
        length: 6
      }, (() => new SP.d(0, 0, 0, 0))));
      for (let OM = 0; OM < 6; OM++) {
        const MM = iM[OM].normal;
        MM._x = rM[4 * OM], MM._y = rM[4 * OM + 1], MM._z = rM[4 * OM + 2], MM._isDirty = !0, iM[OM].d = rM[4 * OM + 3]
      }
    }

    function dP(MM, rM) {
      const iM = rM.clearColor;
      MM.clearColour[0] = iM.r, MM.clearColour[1] = iM.g, MM.clearColour[2] = iM.b, MM.clearColour[3] = iM.a;
      const OM = rM.ambientColor;
      MM.ambientColour[0] = OM.r, MM.ambientColour[1] = OM.g, MM.ambientColour[2] = OM.b, MM.animationRatio = rM.animationRatio, MM.frameId = rM.frameId, MM.version++
    }

    function yP(MM) {
      const rM = MM.model.view;
      return rM.animTick = (0, jP.d)(), rM.timeMs = performance.now(), dP(rM, MM.YJ), MM.model.update(rM.frameId), rM
    }

    function lP(MM) {
      const rM = MM.YJ,
        {
          view: iM,
          JV: OM
        } = MM.model;
      return hP(iM, OM, rM.ph()), rM.onBeforeRenderObservable.notifyObservers(rM), JP(rM, iM.frustum), rM.onBeforeCameraRenderObservable.notifyObservers(rM.activeCamera), yP(MM)
    }
    var EP = iM(38300),
      UP = iM(38412),
      GP = iM(38791);

    function CP(MM) {
      var rM, iM;
      const OM = (0, wM.Y)(MM);
      if (!OM || OM.diffuseTexture && (0, GP.k)(MM)) return null;
      const SM = null === (rM = (0, wM.v)(OM, eM.g.name)) || void 0 === rM ? void 0 : rM.state,
        jM = null === (iM = (0, wM.v)(OM, Ma.b.name)) || void 0 === iM ? void 0 : iM.state,
        aM = new Float32Array(16);
      return function(MM, rM, iM, OM) {
        var SM, jM;
        const aM = oO;
        OM.set(MM.diffuseColor, aM.diffuse), OM[aM.diffuse + 3] = MM.alpha, OM.set(MM.ambientColor, aM.ambientAndCutoff), OM[aM.ambientAndCutoff + 3] = MM.alphaCutOff, OM.set(MM.emissiveColor, aM.emissiveAndLevel), OM[aM.emissiveAndLevel + 3] = null !== (SM = null === (jM = MM.diffuseTexture) || void 0 === jM ? void 0 : jM.level) && void 0 !== SM ? SM : 1, null !== rM && void 0 !== rM && rM.animDataPerTex ? (OM[aM.anim + 1] = jP.b, OM[aM.anim + 2] = rM.animDataPerTex.length / 3 - 1) : iM && (OM[aM.anim + 1] = iM.numAnimStates, OM[aM.anim + 2] = iM.ticksPerAnimState)
      }(OM, SM, jM, aM), {
        model: OM,
        atlas: SM,
        texture: SM ? "atlas" : OM.diffuseTexture ? "single" : "none",
        animated: SM ? !!SM.animDataPerTex : !!jM,
        liquid: (0, GP.m)(MM),
        customRenderMat: (0, GP.k)(MM),
        uniformData: aM
      }
    }
    var eP = iM(3182);
    class bP {
      constructor(MM) {
        this.units = MM, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var MM;
        this.buffer.destroy(), null === (MM = this.twin) || void 0 === MM || MM.destroy()
      }
    }
    class wP {
      constructor(MM, rM) {
        this.arena = MM, this.Ld = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.Ld = new Ba(rM);
        const iM = new bP(rM);
        iM.buffer = this.createBuffer(iM, !1), this.backings.push(iM), this.refresh()
      }
      get vL() {
        return this.Ld.vL
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
        let MM = 0;
        for (const rM of this.backings) MM += rM.units * (this.arena.unitBytes + (rM.twin ? this.arena.twinUnitBytes : 0));
        return MM
      }
      holds(MM) {
        return MM.start + MM.length <= this.usable
      }
      lost(MM) {
        return this.dropped || MM.start + MM.length > this.vL
      }
      write(MM, rM) {
        const {
          device: iM,
          unitBytes: OM
        } = this.arena;
        for (const SM of this.backings) {
          const jM = (SM.units - MM.start) * OM;
          jM > 0 && iM.queue.writeBuffer(SM.buffer, MM.start * OM, rM, 0, Math.min(rM.byteLength, jM))
        }
      }
      writeLight(MM, rM) {
        const {
          device: iM,
          twinUnitBytes: OM,
          verticesPerUnit: SM
        } = this.arena, {
          light: jM,
          count: aM
        } = this.arena.twinLight(rM, Math.min(rM.length, MM.length * SM));
        for (const PM of this.backings) {
          PM.twin || (PM.twin = this.createBuffer(PM, !0));
          const rM = (PM.units - MM.start) * SM;
          rM > 0 && iM.queue.writeBuffer(PM.twin, MM.start * OM, jM, 0, Math.min(aM, rM))
        }
      }
      grow(MM) {
        this.arena.assertNotDrawing();
        const {
          device: rM,
          unitBytes: iM,
          label: OM
        } = this.arena, SM = this.backings[this.backings.length - 1], jM = new bP(MM), aM = rM.createCommandEncoder({
          label: `${OM}-grow`
        });
        jM.buffer = this.createBuffer(jM, !1), aM.copyBufferToBuffer(SM.buffer, 0, jM.buffer, 0, SM.units * iM), SM.twin && (jM.twin = this.createBuffer(jM, !0), aM.copyBufferToBuffer(SM.twin, 0, jM.twin, 0, SM.units * this.arena.twinUnitBytes)), rM.queue.submit([aM.finish()]), this.backings.push(jM), this.Ld.grow(MM)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const MM of this.backings) MM.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(MM, rM) {
        const {
          device: iM,
          unitBytes: OM,
          twinUnitBytes: SM,
          usage: jM,
          label: aM
        } = this.arena;
        iM.pushErrorScope("out-of-memory");
        const PM = iM.createBuffer({
          label: rM ? `${aM}-light` : aM,
          size: MM.units * (rM ? SM : OM),
          usage: (rM ? this.arena.twinUsage : jM) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, iM.popErrorScope().then((iM => {
          this.arena.awaitingVerdict--, this.settle(MM, rM, !iM, !0)
        }), (iM => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${aM} buffer, taken as failed: ${String(iM)}`), this.settle(MM, rM, !1, !1)
        })), PM
      }
      settle(MM, rM, iM, OM) {
        const SM = this.backings.indexOf(MM);
        if (!(this.dropped || SM < 0)) {
          if (!iM) {
            if (OM && this.arena.ranOutOfMemory(MM.units, MM.units * (rM ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === SM) return void this.drop();
            for (const MM of this.backings.splice(SM)) MM.destroy();
            return this.Ld.truncate(this.backings[SM - 1].units), this.growable = !1, void this.promote()
          }
          rM ? MM.twinReady = !0 : (MM.bufferReady = !0, this.arena.allocatedBuffer(MM.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: MM
        } = this;
        let rM = 0;
        for (; rM + 1 < MM.length && MM[rM].ready && MM[rM + 1].ready;) rM++;
        for (const iM of MM.splice(0, rM)) iM.destroy();
        this.refresh()
      }
      refresh() {
        const MM = this.backings[0];
        this.buffer = MM.buffer, this.twin = MM.twinReady ? MM.twin : null, this.usable = !this.dropped && MM.bufferReady ? MM.units : 0
      }
    }
    class tP {
      constructor(MM, rM, iM, OM) {
        let {
          verticesPerUnit: SM = 1,
          twinUsage: jM = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = MM, this.unitBytes = rM, this.usage = iM, this.label = OM, this.pages = [], this.lL = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Wr.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), rM % 4 !== 0) throw new Error(`${OM}: ${rM}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = SM, this.twinUsage = jM, this.twinValueBytes = SM > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * SM
      }
      twinLight(MM, rM) {
        if (4 === this.twinValueBytes) return this.widened.length < rM && (this.widened = new Float32Array(Math.max(rM, 2 * this.widened.length))), this.widened.set(MM.subarray(0, rM)), {
          light: this.widened,
          count: rM
        };
        const iM = rM % this.verticesPerUnit;
        if (0 === iM) return {
          light: MM,
          count: rM
        };
        const OM = rM - iM + this.verticesPerUnit;
        return this.padded.length < OM && (this.padded = new Uint16Array(Math.max(OM, 2 * this.padded.length))), this.padded.set(MM.subarray(0, rM)), this.padded.fill(0, rM, OM), {
          light: this.padded,
          count: OM
        }
      }
      allocate(MM) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), MM > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const SM of this.pages) {
          const rM = SM.Ld.allocate(MM);
          if (rM >= 0) return {
            page: SM,
            start: rM,
            length: MM
          }
        }
        const rM = this.pages[this.pages.length - 1];
        if (null !== rM && void 0 !== rM && rM.canGrow) {
          const iM = Math.min(this.ceiling, Math.max(2 * rM.vL, rM.vL + MM));
          if (iM - rM.vL >= MM) return rM.grow(iM), {
            page: rM,
            start: rM.Ld.allocate(MM),
            length: MM
          }
        }
        rM && rM !== this.pages[0] && 0 === rM.Ld.used && rM.drop();
        const iM = Math.floor(1048576 / this.unitBytes),
          OM = new wP(this, Math.max(MM, Math.min(this.ceiling, iM)));
        return this.pages.push(OM), {
          page: OM,
          start: OM.Ld.allocate(MM),
          length: MM
        }
      }
      free(MM) {
        this.assertNotDrawing();
        const {
          page: rM
        } = MM;
        rM.Ld.free(MM.start, MM.length), 0 === rM.Ld.used && rM !== this.pages[0] && rM !== this.pages[this.pages.length - 1] && rM.drop()
      }
      retire() {
        for (const MM of this.pages) MM.retire()
      }
      remove(MM) {
        const rM = this.pages.indexOf(MM);
        rM >= 0 && this.pages.splice(rM, 1)
      }
      ranOutOfMemory(MM, rM) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${rM}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, MM), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, MM) / 2));
        const iM = performance.now();
        iM >= this.shortageUntil && (this.forgetFailedAt = iM + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = iM + 1e3)
      }
      allocatedBuffer(MM) {
        MM >= this.failed && (this.failed = 1 / 0);
        const rM = Math.min(2 * MM, Math.floor((MM + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, rM))
      }
      stats() {
        let MM = 0,
          rM = 0,
          iM = 0,
          OM = 0;
        for (const SM of this.pages) MM += SM.vL, rM += SM.Ld.used, iM += SM.hasTwin ? SM.vL * this.twinUnitBytes : 0, OM += SM.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: MM * this.unitBytes,
          usedBytes: rM * this.unitBytes,
          twinBytes: iM,
          allocatedBytes: OM
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: MM,
          maxStorageBufferBindingSize: rM
        } = this.device.limits;
        let iM = Math.floor(Math.min(67108864, MM) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (iM = Math.min(iM, Math.floor(rM / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (iM = Math.min(iM, Math.floor(rM / this.twinUnitBytes))), iM
      }
    }
    const gP = 16383;

    function uP(MM, rM, iM, OM, SM) {
      let jM = 0;
      for (let aM = iM; aM < OM; aM += gP) MM.drawIndexed(6 * Math.min(gP, OM - aM), 1, 0, rM + 4 * aM, SM), jM++;
      return jM
    }
    class RP {
      constructor(MM, rM) {
        this.recordsGroup = rM, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const iM = Ir.c.strideWithoutAtlas;
        this.vertexArena = new tP(MM, iM, GPUBufferUsage.VERTEX, `terrain-vertices-${iM}`), this.quadArena = new tP(MM, UP.c, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const OM = (0, Kr.f)(new Uint16Array(98298), gP);
        this.quadPattern = MM.createBuffer({
          label: "terrain-quad-pattern",
          size: OM.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), MM.queue.writeBuffer(this.quadPattern, 0, OM)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(MM, rM) {
        const iM = rM.packedVertices,
          OM = iM ? this.quadArena.allocate(MM.faceCount) : this.vertexArena.allocate(MM.vertexCount);
        if (!OM) return !1;
        MM.vertices = OM;
        const SM = iM ? new Uint8Array(iM.buffer, iM.byteOffset, iM.byteLength) : new Uint8Array(rM.vertices);
        return OM.page.write(OM, SM), !0
      }
      setLight(MM, rM) {
        const {
          vertices: iM
        } = MM;
        iM && 0 !== rM.length && iM.page.live && (rM.length < MM.vertexCount ? iM.page.arena.warnOnce("shortLight", `a part's ${rM.length} light values are fewer than its ${MM.vertexCount} vertices, so its light is left as it was`) : (iM.page.writeLight(iM, rM), MM.lit = !0))
      }
      lightFullSky(MM, rM) {
        this.fullSky.length < rM && (this.fullSky = new Uint16Array(Math.max(rM, 4096)).fill(eP.h));
        for (const iM of MM) {
          const MM = iM.vertices;
          MM.page.live && (MM.page.writeLight(MM, this.fullSky), iM.lit = !0)
        }
      }
      backed(MM) {
        const {
          vertices: rM
        } = MM;
        return !!rM && rM.page.holds(rM)
      }
      lost(MM) {
        const {
          vertices: rM
        } = MM;
        return !!rM && rM.page.lost(rM)
      }
      release(MM) {
        MM.vertices && MM.vertices.page.arena.free(MM.vertices), MM.vertices = null, MM.lit = !1
      }
      setDrawing(MM) {
        this.forgetBound()
      }
      draw(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rM.faceCount;
        const jM = rM.vertices,
          aM = jM.page,
          PM = iM ? aM.twin : null;
        if (!aM.holds(jM) || iM && !PM) return 0;
        const {
          verticesPerUnit: nM
        } = aM.arena;
        let QM = jM.start * nM;
        this.boundPattern || (MM.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const zM = OM + SM;
        if (nM > 1) return aM.buffer === this.boundRecords && PM === this.boundRecordsLight || (MM.setBindGroup(1, this.recordsGroup(aM.buffer, PM)), this.boundRecords = aM.buffer, this.boundRecordsLight = PM), uP(MM, QM, OM, zM, rM.slot);
        aM.buffer !== this.boundVertices && (MM.setVertexBuffer(0, aM.buffer), this.boundVertices = aM.buffer), PM && PM !== this.boundLight && (MM.setVertexBuffer(1, PM), this.boundLight = PM);
        const LM = rM.faceCount;
        return zM <= LM ? uP(MM, QM, OM, zM, rM.slot) : uP(MM, QM, OM, LM, rM.slot) + uP(MM, QM, Math.max(OM, LM) - LM, zM - LM, rM.slot)
      }
      get buffersAwaitingVerdict() {
        let MM = 0;
        for (const rM of this.arenas()) MM += rM.awaitingVerdict;
        return MM
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class pP {
      constructor(MM, rM, iM, OM) {
        this.device = MM, this.splitBefore = rM, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = MM.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const SM = MM.createShaderModule({
          label: "scene-depth-copy",
          code: (jM = iM._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${jM?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var jM;
        MM.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: SM,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: SM,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((MM => {
          this.pipeline = MM, this.building = !1
        }), (MM => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", MM)
        })), iM._executeWithTransmission = () => this.execute(iM, OM)
      }
      get compiling() {
        return this.building
      }
      setWanted(MM) {
        this.wanted = MM
      }
      setPlanes(MM, rM) {
        MM === this.near && rM === this.far || (this.near = MM, this.far = rM, this.unproject[0] = MM / (rM - MM), this.unproject[1] = rM * MM / (rM - MM), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var MM, rM;
        return null !== (MM = null === (rM = this.copy) || void 0 === rM ? void 0 : rM.view) && void 0 !== MM ? MM : null
      }
      execute(MM, rM) {
        var iM;
        null === (iM = this.retired) || void 0 === iM || iM.destroy(), this.retired = null;
        const OM = Cr(rM),
          SM = MM._transparentBindings,
          jM = this.wanted && this.pipeline ? this.splitIndex(SM) : -1,
          aM = MM._colorAttachment,
          PM = aM.resolveTarget;
        jM >= 0 && (aM.resolveTarget = void 0, OP(MM, !0));
        let nM = OM.beginRenderPass(MM._renderPassDescriptor);
        nM.setBindGroup(0, MM._sceneBG);
        let QM = this.drawList(nM, rM, MM._opaqueBindings, 0, MM._opaqueBindings.length);
        if (QM += this.drawList(nM, rM, MM._directBindings, 0, MM._directBindings.length), QM += this.drawList(nM, rM, SM, 0, jM >= 0 ? jM : SM.length), nM.end(), jM < 0) return QM;
        OP(MM);
        const zM = MM._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: LM,
            stencilLoadOp: mM
          } = zM,
          HM = aM.loadOp;
        aM.resolveTarget = PM;
        try {
          this.copyDepth(OM, MM), aM.loadOp = "load", zM.depthLoadOp = "load", mM && (zM.stencilLoadOp = "load"), nM = OM.beginRenderPass(MM._renderPassDescriptor), nM.setBindGroup(0, MM._sceneBG), QM += this.drawList(nM, rM, SM, jM, SM.length), nM.end()
        } finally {
          aM.loadOp = HM, zM.depthLoadOp = LM, zM.stencilLoadOp = mM
        }
        return QM
      }
      splitIndex(MM) {
        for (let rM = 0; rM < MM.length; rM++)
          if (MM[rM].renderable === this.splitBefore) return rM;
        return -1
      }
      drawList(MM, rM, iM, OM, SM) {
        let jM = null,
          aM = 0;
        for (let PM = OM; PM < SM; PM++) {
          const OM = iM[PM],
            SM = OM.renderable.mesh;
          SM && !1 === SM.visible || (OM.pipeline !== jM && (MM.setPipeline(OM.pipeline), jM = OM.pipeline), aM += OM.draw(MM, rM))
        }
        return aM
      }
      copyDepth(MM, rM) {
        var iM, OM;
        const SM = (null !== (iM = rM._config.depth) && void 0 !== iM ? iM : rM._config.rt)._depthTexture,
          jM = (null === (OM = this.copy) || void 0 === OM ? void 0 : OM.source) === SM ? this.copy : this.remakeCopy(SM),
          aM = MM.beginRenderPass(jM.pass);
        aM.setPipeline(this.pipeline), aM.setBindGroup(0, jM.bindGroup), aM.draw(3), aM.end()
      }
      remakeCopy(MM) {
        var rM, iM;
        this.retired = null !== (rM = null === (iM = this.copy) || void 0 === iM ? void 0 : iM.texture) && void 0 !== rM ? rM : null;
        const OM = this.device.createTexture({
            label: "scene-depth",
            size: [MM.width, MM.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          SM = OM.createView(),
          jM = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: MM.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          aM = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: SM,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: MM,
          texture: OM,
          view: SM,
          bindGroup: jM,
          pass: aM
        }, this.copy
      }
    }
    const WP = "rgba8unorm";

    function sP(MM) {
      return MM ? 15 : 1
    }
    class DP {
      constructor(MM, rM, iM, OM) {
        this.device = MM, this.terrain = OM, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = rM._targetSignature._sampleCount > 1, this.cameraBuffer = MM.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = MM.createBindGroupLayout({
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
        const SM = MM.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = MM.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: SM,
          entries: []
        });
        const jM = MM.createShaderModule({
          label: "sun-shadow-mask",
          code: (aM = this.edge, `${(0,qr.w)()}${QO({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${aM?Vi:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${sP(aM)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${aM?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var aM;
        MM.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: MM.createPipelineLayout({
            bindGroupLayouts: [this.layout, SM, SM, Bj(MM, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: jM,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: jM,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((MM => {
          this.pipeline = MM, this.building = !1
        }), (MM => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", MM)
        }));
        const PM = rM._executeWithTransmission;
        rM._executeWithTransmission = MM => this.execute(rM, iM, (() => PM ? PM(MM) : function(MM, rM) {
          const iM = Cr(rM).beginRenderPass(MM._renderPassDescriptor);
          iM.setBindGroup(0, MM._sceneBG);
          let OM = kP(iM, rM, MM._opaqueBindings);
          return OM += kP(iM, rM, MM._directBindings), OM += kP(iM, rM, MM._transparentBindings), iM.end(), OM
        }(rM, iM)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var MM, rM;
        return null !== (MM = null === (rM = this.targets) || void 0 === rM ? void 0 : rM.maskView) && void 0 !== MM ? MM : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(MM) {
        ! function(MM, rM) {
          const iM = MM.worldMatrix,
            OM = MM.projectionMatrix,
            SM = 1 / OM[0],
            jM = 1 / OM[5],
            aM = MM.far * MM.near / (MM.far - MM.near);
          rM[0] = MM.eye[0], rM[1] = MM.eye[1], rM[2] = MM.eye[2], rM[3] = 2 ** -23 / aM, rM[4] = iM[0] * SM, rM[5] = iM[1] * SM, rM[6] = iM[2] * SM, rM[7] = aM, rM[8] = iM[4] * jM, rM[9] = iM[5] * jM, rM[10] = iM[6] * jM, rM[11] = MM.near / (MM.far - MM.near), rM[12] = iM[8], rM[13] = iM[9], rM[14] = iM[10], rM[15] = 0
        }(MM, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(MM, rM, iM) {
        if (this.retire(), !this.terrain.readsMask) return iM();
        const OM = this.targetsFor(MM),
          SM = Cr(rM),
          jM = MM._renderPassDescriptor.depthStencilAttachment;
        this.edge || (OM.prepass.depthStencilAttachment.view = jM.view);
        const aM = this.terrain.drawPrepass(SM, OM.prepass, MM._sceneBG);
        if (0 === aM) return iM();
        if (this.trace(SM, OM), this.edge) return aM + 1 + iM();
        const {
          depthLoadOp: PM,
          stencilLoadOp: nM
        } = jM;
        jM.depthLoadOp = "load", nM && (jM.stencilLoadOp = "load");
        try {
          return aM + 1 + iM()
        } finally {
          jM.depthLoadOp = PM, jM.stencilLoadOp = nM
        }
      }
      trace(MM, rM) {
        const iM = this.terrain.sunShadowGroup(),
          OM = MM.beginRenderPass(rM.trace);
        this.pipeline && iM && (OM.setPipeline(this.pipeline), OM.setBindGroup(0, rM.bindGroup), OM.setBindGroup(1, this.empty), OM.setBindGroup(2, this.empty), OM.setBindGroup(3, iM), OM.draw(3)), OM.end()
      }
      retire() {
        const MM = this.retired;
        var rM;
        MM && (MM.mask.destroy(), MM.normals.destroy(), null === (rM = MM.depth) || void 0 === rM || rM.destroy(), this.retired = null)
      }
      targetsFor(MM) {
        var rM, iM;
        const OM = (null !== (rM = MM._config.depth) && void 0 !== rM ? rM : MM._config.rt)._depthTexture;
        return (null === (iM = this.targets) || void 0 === iM ? void 0 : iM.source) === OM ? this.targets : this.remake(MM, OM)
      }
      remake(MM, rM) {
        var iM;
        this.retired = this.targets;
        const OM = [rM.width, rM.height],
          SM = this.device.createTexture({
            label: "sun-shadow-mask",
            size: OM,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          jM = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: OM,
            format: WP,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          aM = null !== (iM = MM._targetSignature._depthStencilFormat) && void 0 !== iM ? iM : rM.format,
          PM = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: OM,
            format: aM,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          nM = MM._renderPassDescriptor.depthStencilAttachment,
          QM = aM.includes("stencil"),
          zM = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: jM.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: PM ? PM.createView() : nM.view,
              depthClearValue: nM.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...QM ? {
                stencilClearValue: nM.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          LM = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== PM && void 0 !== PM ? PM : rM).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: jM.createView()
            }]
          }),
          mM = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: SM.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [sP(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: rM,
          mask: SM,
          maskView: SM.createView(),
          normals: jM,
          depth: PM,
          bindGroup: LM,
          prepass: zM,
          trace: mM
        }, this.targets
      }
    }

    function kP(MM, rM, iM) {
      let OM = null,
        SM = 0;
      for (const jM of iM) {
        const iM = jM.renderable.mesh;
        iM && !1 === iM.visible || (jM.pipeline !== OM && (MM.setPipeline(jM.pipeline), OM = jM.pipeline), SM += jM.draw(MM, rM))
      }
      return SM
    }
    const ZP = 6e4,
      oP = {
        status: "ok"
      },
      fP = {
        status: "skipped"
      };
    async function YP(MM, rM) {
      const {
        isCancelled: iM
      } = MM;
      if (iM()) return {
        status: "Ti"
      };
      const {
        target: OM
      } = rM;
      if (!OM) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const SM = [],
        jM = Promise.all(Array.from(new Set(MM.materials), (async iM => {
          SM.push(await async function(MM, rM, iM, OM) {
            const SM = {
              lighting: MM.lighting,
              dirLightCount: Math.min(MM.dirLightCount, 4),
              nh: MM.runtime
            };
            try {
              const jM = rM.material(OM);
              return jM && DO(rM.programKey(jM, !1, SM)) ? (await jM.ready, MM.isCancelled() ? oP : jM.bindGroupLayout ? await async function(MM, rM, iM, OM) {
                const {
                  device: SM
                } = MM;
                let jM, aM;
                SM.pushErrorScope("validation");
                try {
                  jM = MM.pipelineBuild(rM, iM, OM)
                } finally {
                  aM = SM.popErrorScope().catch((() => null))
                }
                const [PM, nM] = await Promise.all([aM, jM.built.then((() => null), (MM => null !== MM && void 0 !== MM ? MM : new Error("pipeline failed")))]);
                if (!PM && !nM) return oP;
                const QM = await NP(jM.module),
                  zM = QM.length > 0 ? QM.map((MM => `${jM.name} ${MM.lineNum}:${MM.linePos}: ${MM.message}`)).join("\n") : `${jM.name}: ${AP(null!==nM&&void 0!==nM?nM:PM)}`;
                return {
                  status: "failed",
                  material: rM.model.name,
                  message: zM
                }
              }(rM, jM, rM.programKey(jM, "none" !== jM.texture, SM), iM): (console.warn(`Shader pack: skipped the compile check for "${OM.name}", whose textures failed to load`), fP)) : oP
            } catch (jM) {
              return {
                status: "failed",
                material: OM.name,
                message: AP(jM)
              }
            }
          }(MM, rM, OM, iM))
        }))),
        aM = function(MM, rM) {
          let iM, OM, SM = !1;
          const jM = new Promise((jM => {
            var aM;
            iM = setTimeout((() => {
              jM("timeout")
            }), null !== (aM = rM.timeoutMs) && void 0 !== aM ? aM : ZP), OM = setInterval((() => {
              rM.isCancelled() && jM("Ti")
            }), 50), MM.lost.then((() => {
              SM = !0, jM("lost")
            }))
          }));
          return {
            signal: jM,
            lost: () => SM,
            dispose: () => {
              clearTimeout(iM), clearInterval(OM)
            }
          }
        }(rM.device, MM);
      let PM;
      try {
        PM = await Promise.race([jM.then((() => "done")), aM.signal])
      } finally {
        aM.dispose()
      }
      if ("Ti" === PM || iM()) return {
        status: "Ti"
      };
      const nM = SM.find((MM => "failed" === MM.status));
      return nM && "lost" !== PM && !aM.lost() && await new Promise((MM => {
        setTimeout(MM, 0)
      })), "lost" === PM || aM.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : nM ? {
        status: "failed",
        failure: {
          material: nM.material,
          message: nM.message
        }
      } : "timeout" === PM ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(QM=MM.timeoutMs)&&void 0!==QM?QM:ZP)/1e3} s`), {
        status: "skipped"
      }) : SM.some((MM => "skipped" === MM.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var QM
    }
    async function NP(MM) {
      if (!MM) return [];
      try {
        return (await MM.getCompilationInfo()).messages.filter((MM => "error" === MM.type))
      } catch {
        return []
      }
    }

    function AP(MM) {
      var rM;
      return null !== (rM = null === MM || void 0 === MM ? void 0 : MM.message) && void 0 !== rM ? rM : String(MM)
    }

    function xP(MM, rM, iM, OM, SM) {
      DO(rM) ? NP(OM).then((rM => {
        const [OM] = rM;
        zr(MM, "terrain", iM, SM, OM ? `${OM.lineNum}:${OM.linePos} error: ${OM.message}` : null)
      })) : zr(MM, "terrain", iM, SM)
    }
    var vP = iM(38418),
      FP = iM(38426),
      BP = iM(38442),
      XP = iM(3177);

    function IP(MM, rM, iM, OM, SM) {
      const jM = Math.hypot(iM[0], iM[1], iM[2]);
      if (!(jM > 0)) return;
      const aM = [iM[0] / jM, iM[1] / jM, iM[2] / jM],
        PM = [Math.floor(rM[0]), Math.floor(rM[1]), Math.floor(rM[2])],
        nM = [0, 0, 0],
        QM = [1 / 0, 1 / 0, 1 / 0],
        zM = [1 / 0, 1 / 0, 1 / 0];
      for (let HM = 0; HM < 3; HM++) aM[HM] > 0 ? (nM[HM] = 1, QM[HM] = (PM[HM] + 1 - rM[HM]) / aM[HM], zM[HM] = 1 / aM[HM]) : aM[HM] < 0 && (nM[HM] = -1, QM[HM] = (PM[HM] - rM[HM]) / aM[HM], zM[HM] = -1 / aM[HM]);
      const {
        HL: LM
      } = MM;
      let mM = MM.YB(PM[0], PM[1], PM[2]);
      for (;;) {
        const rM = QM[0] < QM[1] ? QM[0] < QM[2] ? 0 : 2 : QM[1] < QM[2] ? 1 : 2;
        if (QM[rM] > OM) return;
        const iM = nM[rM] > 0 ? PM[rM] + 1 : PM[rM];
        PM[rM] += nM[rM], QM[rM] += zM[rM];
        const jM = MM.YB(PM[0], PM[1], PM[2]),
          aM = jM !== mM && !(MM.opaque[mM] && MM.opaque[jM]);
        if (aM) {
          const OM = [PM[0], PM[1], PM[2]];
          OM[rM] = iM;
          const jM = Math.floor(OM[0] / LM),
            aM = Math.floor(OM[1] / LM),
            nM = Math.floor(OM[2] / LM);
          !MM.isDrawn(jM, aM, nM) && MM.hasParts(jM, aM, nM) && SM.add(`${jM},${aM},${nM}`)
        }
        if (aM && MM.occluders[jM]) return;
        mM = jM
      }
    }

    function KP(MM, rM) {
      return MM.group - rM.group || MM.nearest - rM.nearest
    }
    class qP {
      constructor(MM, rM) {
        this.device = MM, this.pE = rM, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var MM;
        const rM = null !== (MM = this.free.pop()) && void 0 !== MM ? MM : this.next++;
        if (8 * rM >= this.data.length) {
          const MM = new Float32Array(2 * this.data.length);
          MM.set(this.data), this.data = MM, this.words = new Uint32Array(MM.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.pE()
        }
        return rM
      }
      release(MM) {
        this.free.push(MM)
      }
      set(MM, rM, iM, OM, SM) {
        const jM = 8 * MM + FO;
        this.data[jM] = rM, this.data[jM + 1] = iM, this.data[jM + 2] = OM, this.setVisibility(MM, SM)
      }
      setVisibility(MM, rM) {
        this.data[8 * MM + BO] = rM, this.markDirty(MM, MM)
      }
      setFaces(MM, rM, iM) {
        const OM = 8 * MM;
        this.words[OM + XO] = rM, this.words[OM + IO] = iM, this.markDirty(MM, MM)
      }
      markDirty(MM, rM) {
        this.dirtyMin = Math.min(this.dirtyMin, MM), this.dirtyMax = Math.max(this.dirtyMax, rM)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const TP = vO,
      VP = !0;
    const cP = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: TP.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Mn = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class rn {
      constructor(MM) {
        this.device = MM, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(ZO), this.dirLightUniforms = this.frameUniforms.subarray(kO.dirLights, kO.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Wr.b)(), this.faceGroups = !0, this.visibilityGraph = VP, this.visCull = VP, this.visCheck = !1, this.visCullMinDistance = BP.h, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new an, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.nh = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new RP(MM, ((MM, rM) => this.recordsGroup(MM, rM))), this.slots = new qP(MM, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = er(MM), this.frameLayout = MM.createBindGroupLayout({
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
        }), this.frameBuffer = MM.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = MM.createSampler({
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
          bind: (MM, rM) => this.createBinding(this.opaqueRenderable, rM, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (MM, rM) => this.createBinding(this.transparentRenderable, rM, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(MM, rM) {
        this.sceneDepth = new pP(this.device, this.transparentRenderable, MM, rM)
      }
      createFrameBindGroup() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== MM && void 0 !== MM ? MM : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== rM && void 0 !== rM ? rM : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(MM, rM) {
        const iM = null !== rM && void 0 !== rM ? rM : MM;
        let OM = this.recordsGroups.get(iM);
        return OM || (OM = this.createFrameBindGroup(MM, rM), this.recordsGroups.set(iM, OM)), OM
      }
      setChunkMesh(MM, rM, iM) {
        var OM;
        let SM = this.chunks.get(MM);
        SM ? this.geometry.release(SM) : (SM = {
          mesh: MM,
          slot: this.slots.allocate(),
          origin: [iM[0], iM[1], iM[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: MM.visibility,
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
        }, this.chunks.set(MM, SM), this.writeSlot(SM)), SM.material = MM.material ? this.materialFor(MM.material) : null, SM.packed = !!rM.packedVertices, SM.vertexCount = (0, UP.g)(rM), SM.faceCount = SM.vertexCount / 4;
        const jM = null !== (OM = rM.faceGroups) && void 0 !== OM ? OM : null;
        if (SM.faceGroups = jM, jM) {
          const MM = vP.n;
          SM.planePX = jM[MM], SM.planeNX = jM[MM + 1], SM.planePY = jM[MM + 2], SM.planeNY = jM[MM + 3], SM.planePZ = jM[MM + 4], SM.planeNZ = jM[MM + 5]
        }
        this.drawWhole(SM), 0 !== SM.faceCount && (this.geometry.set(SM, rM) ? (SM.packed && this.slots.setFaces(SM.slot, SM.vertices.start + SM.faceCount, SM.faceCount), rM.Lh && this.setChunkMeshLight(MM, rM.Lh)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${SM.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(MM, rM) {
        const iM = this.chunks.get(MM);
        iM && this.geometry.setLight(iM, rM)
      }
      drawStats() {
        let MM = this.transparent.length;
        for (const rM of this.opaqueBatches) MM += rM.meshes.length;
        return {
          drawn: MM,
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
      removeChunkMesh(MM) {
        const rM = this.chunks.get(MM);
        rM && (this.geometry.release(rM), this.slots.release(rM.slot), this.chunks.delete(MM))
      }
      remeshLost(MM, rM) {
        this.geometry.release(rM), rM.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** rM.lostRemeshes++);
        const iM = MM.uL,
          [OM, SM, jM] = iM.rOM(rM.origin[0], rM.origin[1], rM.origin[2]),
          aM = iM.yJ.lJ(OM, SM, jM);
        aM && (aM.JJ = !0, aM.UJ = !0, iM.dJ(aM, !1))
      }
      chooseFaceRanges(MM, rM, iM) {
        const OM = this.faceRanges;
        MM.faceMask = iM, MM.rangeCount = (0, FP.l)(rM, iM, OM), MM.first0 = OM[0], MM.count0 = OM[1], MM.first1 = OM[2], MM.count1 = OM[3]
      }
      drawWhole(MM) {
        MM.faceMask = -1, MM.faceEpoch = -1, MM.rangeCount = 1, MM.first0 = 0, MM.count0 = MM.faceCount
      }
      writeSlot(MM) {
        const [rM, iM, OM] = this.originOffset;
        this.slots.set(MM.slot, MM.origin[0] - rM, MM.origin[1] - iM, MM.origin[2] - OM, MM.visibility)
      }
      materialFor(MM) {
        const rM = this.materials.get(MM);
        if (rM) return rM;
        const iM = CP(MM);
        if (!iM) return this.warnOnce(`material:${MM.name}`, `Lite terrain cannot draw material "${MM.name}"; its chunks are skipped.`), null;
        const {
          model: OM,
          atlas: SM,
          texture: jM,
          animated: aM,
          uniformData: PM
        } = iM, nM = {
          id: this.materials.size,
          model: OM,
          texture: jM,
          animated: aM,
          uniformData: PM,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${MM.name}`,
            size: PM.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: iM.liquid,
          customRenderMat: iM.customRenderMat,
          atlasCount: 0,
          U3: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(MM, nM), this.device.queue.writeBuffer(nM.uniformBuffer, 0, PM), nM.ready = this.createMaterialBindGroup(nM, SM).catch((rM => {
          console.error(`Lite terrain failed to load the textures of material "${MM.name}"`, rM)
        })), nM
      }
      materialLayout(MM) {
        const rM = function(MM) {
            const rM = ["uniforms"];
            if ("atlas" === MM.texture) {
              MM.animated && rM.push("animData"), rM.push("sampler");
              for (let iM = 0; iM < MM.atlasCount; iM++) rM.push("textureArray")
            } else "single" === MM.texture && rM.push("sampler", "texture");
            return rM
          }(MM),
          iM = rM.join(",");
        let OM = this.materialLayouts.get(iM);
        if (!OM) {
          const MM = GPUShaderStage.FRAGMENT;
          OM = this.device.createBindGroupLayout({
            label: `terrain-material-${iM}`,
            entries: rM.map(((rM, iM) => {
              switch (rM) {
                case "uniforms":
                  return {
                    binding: iM, visibility: GPUShaderStage.VERTEX | MM, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: iM, visibility: GPUShaderStage.VERTEX | MM, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: iM, visibility: MM, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: iM, visibility: MM, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: iM, visibility: MM, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(iM, OM)
        }
        return OM
      }
      async createMaterialBindGroup(MM, rM) {
        const iM = [{
          buffer: MM.uniformBuffer
        }];
        if (rM) {
          const OM = await rr(this.device, rM.sources);
          MM.atlasCount = OM.length, MM.U3 = OM[0].layerWidth, MM.atlasLayers = OM[0].layers, rM.animDataPerTex && iM.push({
            buffer: IM(this.device, Float32Array.from(rM.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), iM.push(this.sampler);
          for (const MM of OM) iM.push(MM.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === MM.texture) {
          const {
            url: rM
          } = MM.model.diffuseTexture.source, {
            pixels: OM,
            width: SM,
            height: jM
          } = await Mr(rM);
          iM.push(this.sampler), iM.push(qM(this.device, OM, SM, jM, 1, `terrain-${rM}`).createView({
            dimension: "2d"
          }))
        }
        const OM = this.materialLayout(this.programKey(MM, !1));
        MM.bindGroupLayout = OM, MM.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${MM.model.name}`,
          layout: OM,
          entries: iM.map(((MM, rM) => ({
            binding: rM,
            resource: MM
          })))
        })
      }
      programKey(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const OM = iM ? iM.lighting : this.lighting,
          SM = iM ? iM.nh : this.nh,
          jM = {
            texture: MM.texture,
            atlasCount: MM.atlasCount,
            U3: MM.U3,
            atlasLayers: MM.atlasLayers,
            animated: MM.animated,
            alphaTest: MM.model.transparencyMode === wM.n.alphaTest,
            lighting: OM,
            dirLightCount: iM ? iM.dirLightCount : this.dirLightCount,
            packed: rM
          };
        if (!SM) return jM;
        const aM = this.shaderPackFields(MM, SM),
          PM = "atlas" === MM.texture && MM.model.transparencyMode === wM.n.opaque && RO(aM.packVariant);
        return {
          ...jM,
          ...aM,
          alphaTest: jM.alphaTest || PM
        }
      }
      shaderPackFields(MM, rM) {
        const iM = this.packVariant(MM, rM);
        return void 0 === iM ? gO : {
          packVariant: iM,
          liquid: MM.liquid
        }
      }
      packVariant(MM, rM) {
        return MM.customRenderMat ? void 0 : function(MM, rM) {
          const iM = MM ? MM.defineFor(rM ? "liquid" : "terrain") : 0;
          return 0 === iM ? void 0 : iM
        }(rM, MM.liquid)
      }
      isBlended(MM) {
        return MM.model.transparencyMode === wM.n.alphaBlend
      }
      shaderModule(MM, rM) {
        let iM = this.modules.get(MM);
        return iM || (iM = this.device.createShaderModule({
          label: rM,
          code: MM
        }), this.modules.set(MM, iM)), iM
      }
      pipelineFor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!MM.bindGroupLayout) return null;
        if (!OM) return this.pipelineOf(MM, rM, iM);
        const SM = this.pipelineIdNow(MM, rM, !0, iM),
          jM = this.pipelines.get(SM);
        if (jM) return jM;
        const aM = this.pipelineOf(MM, rM, iM);
        return aM && void 0 === jM && this.startPipeline(SM, MM, {
          ...this.programKey(MM, rM),
          resting: OM
        }, iM), aM
      }
      pipelineOf(MM, rM, iM) {
        const OM = this.pipelineIdNow(MM, rM, !1, iM),
          SM = this.pipelines.get(OM);
        return void 0 !== SM ? SM : (this.startPipeline(OM, MM, this.programKey(MM, rM), iM), null)
      }
      pipelineIdNow(MM, rM, iM, OM) {
        const {
          lighting: SM,
          dirLightCount: jM
        } = this, {
          transparencyMode: aM,
          backFaceCulling: PM
        } = MM.model, nM = this.packVariant(MM, this.nh), QM = (rM ? 2 : 0) + (iM ? 1 : 0), zM = MM.pipelineIds[QM];
        if (null !== zM && zM.lighting === SM && zM.dirLightCount === jM && zM.packVariant === nM && zM.transparencyMode === aM && zM.cull === PM && zM.atlasCount === MM.atlasCount && zM.U3 === MM.U3 && zM.atlasLayers === MM.atlasLayers && zM.colorFormat === OM._colorFormat && zM.depthStencilFormat === OM._depthStencilFormat && zM.sampleCount === OM._sampleCount) return zM.id;
        const LM = this.programKey(MM, rM),
          mM = this.pipelineId(MM, iM ? {
            ...LM,
            resting: iM
          } : LM, OM);
        return MM.pipelineIds[QM] = {
          id: mM,
          lighting: SM,
          dirLightCount: jM,
          packVariant: nM,
          transparencyMode: aM,
          cull: PM,
          atlasCount: MM.atlasCount,
          U3: MM.U3,
          atlasLayers: MM.atlasLayers,
          colorFormat: OM._colorFormat,
          depthStencilFormat: OM._depthStencilFormat,
          sampleCount: OM._sampleCount
        }, mM
      }
      pipelineId(MM, rM, iM) {
        return On(rM, this.isBlended(MM), MM.model.backFaceCulling, iM)
      }
      pipelineBuild(MM, rM, iM) {
        var OM;
        const SM = this.pipelineId(MM, rM, iM);
        return null !== (OM = this.builds.get(SM)) && void 0 !== OM ? OM : this.startPipeline(SM, MM, rM, iM)
      }
      startPipeline(MM, rM, iM, OM) {
        var SM;
        this.pipelines.set(MM, null);
        const jM = MS(iM),
          aM = this.isBlended(rM),
          PM = this.shadowMask && OM._depthStencilFormat ? function(MM, rM, iM, OM) {
            if (void 0 === MM.packVariant || MM.liquid || rM) return "none";
            const SM = (0, Tr.g)(MM.packVariant);
            return null === SM || void 0 === SM || !SM.sunShadow || !PO(SM, iM) || SM.discards || MM.alphaTest && RO(MM.packVariant) ? "none" : OM ? "edge" : "plain"
          }(iM, aM, !!this.sunShadow, OM._sampleCount > 1) : "none";
        let nM;
        try {
          nM = rS(iM, !!this.sunShadow, PM)
        } catch (dM) {
          if (!DO(iM)) throw dM;
          return this.failedPackBuild(MM, iM, jM, dM)
        }
        const QM = this.shaderModule(nM, jM),
          zM = [];
        iM.packed || (zM.push(function(MM, rM) {
          const iM = [{
            shaderLocation: TP.position,
            offset: Ir.c.Oi,
            format: "float32x3"
          }, {
            shaderLocation: TP.normal,
            offset: Ir.c.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: TP.color,
            offset: Ir.c.colorOffset,
            format: "unorm8x4"
          }];
          return MM && iM.push({
            shaderLocation: TP.uv,
            offset: Ir.c.uvOffset,
            format: "float32x2"
          }), rM && iM.push({
            shaderLocation: TP.blockFlagWords,
            offset: Ir.c.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Ir.c.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: iM
          }
        }("none" !== iM.texture, DO(iM))), iM.lighting && zM.push(cP));
        const LM = rM.model.backFaceCulling,
          mM = {
            label: jM,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, rM.bindGroupLayout, ...Kj(this.device, iM, !!this.sunShadow, "none" !== PM)]
            }),
            vertex: {
              module: QM,
              entryPoint: "mainVertex",
              buffers: zM
            },
            fragment: lr({
              module: QM,
              entryPoint: "mainFragment"
            }, OM, aM ? Mn : null),
            depthStencil: OM._depthStencilFormat ? {
              format: OM._depthStencilFormat,
              depthCompare: null !== (SM = OM._depthCompare) && void 0 !== SM ? SM : br,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: OM._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: LM ? "back" : "none"
            }
          },
          HM = iM.resting ? 0 : 1;
        this.compiling += HM;
        const hM = "none" === PM ? this.device.createRenderPipelineAsync(mM) : this.startMaskPipelines(QM, mM, "edge" === PM);
        hM.then((rM => {
          this.compiling -= HM, this.pipelines.set(MM, rM)
        }), (MM => {
          this.compiling -= HM, console.error(`Lite terrain pipeline ${jM} failed`, MM), xP(this.device, iM, jM, QM, MM)
        }));
        const JM = {
          name: jM,
          module: QM,
          built: hM
        };
        return this.builds.set(MM, JM), JM
      }
      startMaskPipelines(MM, rM, iM) {
        const OM = rM.depthStencil,
          SM = this.device.createRenderPipelineAsync(iM ? rM : {
            ...rM,
            depthStencil: {
              ...OM,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          jM = this.device.createRenderPipelineAsync({
            ...rM,
            label: `${rM.label}-prepass`,
            fragment: {
              module: MM,
              entryPoint: "prepassFragment",
              targets: [{
                format: WP
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([SM, jM]).then((MM => {
          let [rM, iM] = MM;
          return this.prepassOf.set(rM, iM), this.maskPipelines++, rM
        }))
      }
      failedPackBuild(MM, rM, iM, OM) {
        console.error(`Lite terrain pipeline ${iM} failed`, OM), xP(this.device, rM, iM, null, OM);
        const SM = Promise.reject(OM);
        SM.catch((() => {}));
        const jM = {
          name: iM,
          module: null,
          built: SM
        };
        return this.builds.set(MM, jM), jM
      }
      checkShaderPack(MM) {
        return YP(MM, {
          device: this.device,
          target: this.target,
          material: MM => this.materialFor(MM),
          programKey: (MM, rM, iM) => this.programKey(MM, rM, iM),
          pipelineBuild: (MM, rM, iM) => this.pipelineBuild(MM, rM, iM)
        })
      }
      createBinding(MM, rM, iM) {
        return this.target = rM, {
          renderable: MM,
          pipeline: ur(this.device, rM),
          draw: MM => {
            this.geometry.setDrawing(!0);
            try {
              return iM ? this.drawTransparent(MM, rM) : this.drawOpaque(MM, rM)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(MM, rM) {
        var iM, OM, SM, jM;
        const {
          Cm: aM
        } = MM;
        this.lighting = MM.DJ;
        const PM = (0, EP.t)(rM);
        this.dirLightCount = Math.min(PM, 4), this.nh = null !== (iM = aM.nh) && void 0 !== iM ? iM : null, PM > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(MM, rM), this.animateMaterials(rM.animTick);
        const nM = aM.Am,
          QM = nM[0] !== this.originOffset[0] || nM[1] !== this.originOffset[1] || nM[2] !== this.originOffset[2];
        QM && (this.originOffset[0] = nM[0], this.originOffset[1] = nM[1], this.originOffset[2] = nM[2]);
        const zM = rM.eye;
        this.eye[0] = zM[0], this.eye[1] = zM[1], this.eye[2] = zM[2], this.writeShaderPackInputs();
        const LM = rM.projectionMatrix,
          mM = 0 === LM[15];
        let HM = 0;
        (QM || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: hM
        } = this;
        Rr(this.transparentRenderable._worldCenter, rM, tr), this.resetBatches(mM), this.transparent.length = 0, this.unlit.length = 0;
        const JM = aM.uL.hL,
          dM = JM / 2 * Math.sqrt(3);
        let yM = 0;
        const lM = !!this.nh && uO(this.nh.defineFor("liquid"));
        let EM = !1;
        const UM = null !== (OM = null === (SM = aM.kU) || void 0 === SM ? void 0 : SM.visibility) && void 0 !== OM ? OM : null,
          GM = this.visCull && mM && 0 === this.compiling && null !== UM && aM.uL.GOM[0] >= this.visCullMinDistance ? this.target : null,
          CM = this.visPassable,
          eM = this.visCandidates,
          bM = this.visCandidateBatches;
        CM.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let wM = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let tM = 0;
        const gM = (MM, iM) => {
          if (!iM) return this.transparent.push(MM), void(tM += 2 * MM.faceCount);
          if (null !== MM.faceGroups && iM.faceCull) {
            if (0 === HM && (HM = (0, FP.c)(LM, rM.renderWidth, rM.renderHeight), HM !== this.faceFocalPx && (this.faceFocalPx = HM, hM = ++this.faceEpoch)), MM.faceEpoch !== hM) {
              MM.faceEpoch = hM;
              const rM = Math.sqrt(MM.distance) + dM,
                iM = (0, FP.h)(MM.planePX, MM.planeNX, MM.planePY, MM.planeNY, MM.planePZ, MM.planeNZ, this.eye[0] - (MM.origin[0] - this.originOffset[0]), this.eye[1] - (MM.origin[1] - this.originOffset[1]), this.eye[2] - (MM.origin[2] - this.originOffset[2]), (0, FP.e)(rM, HM));
              iM !== MM.faceMask && this.chooseFaceRanges(MM, MM.faceGroups, iM)
            }
            if (0 === MM.rangeCount) return
          } else - 1 !== MM.faceMask && this.drawWhole(MM);
          iM.meshes.push(MM), tM += 2 * ((MM.rangeCount > 0 ? MM.count0 : 0) + (MM.rangeCount > 1 ? MM.count1 : 0))
        };
        for (const RM of this.chunks.values()) {
          QM && this.writeSlot(RM);
          const MM = RM.mesh.visibility;
          MM !== RM.visibility && (RM.visibility = MM, this.slots.setVisibility(RM.slot, MM));
          const {
            material: iM
          } = RM;
          this.geometry.lost(RM) && performance.now() >= RM.lostRetryAt && this.remeshLost(aM, RM);
          const OM = !(null === iM || void 0 === iM || !iM.bindGroup) && this.geometry.backed(RM),
            SM = OM && this.lighting && !RM.vertices.page.twin;
          if (GM && (Number.isNaN(RM.key) && (RM.ci = Math.floor(RM.origin[0] / JM), RM.cj = Math.floor(RM.origin[1] / JM), RM.ck = Math.floor(RM.origin[2] / JM), RM.key = (0, XP.k)(RM.ci, RM.cj, RM.ck)), (!OM || MM < 1 || SM || !this.batchDraws(iM, RM.packed, GM)) && this.visSeeThrough(RM, GM) && CM.add(RM.key)), !OM) continue;
          SM || (RM.lostRemeshes = 0);
          const jM = RM.origin[0] - this.originOffset[0],
            PM = RM.origin[1] - this.originOffset[1],
            nM = RM.origin[2] - this.originOffset[2];
          if (!(0, PP.e)(rM.frustum, jM, PM, nM, JM)) continue;
          const zM = jM + JM / 2 - this.eye[0],
            LM = PM + JM / 2 - this.eye[1],
            HM = nM + JM / 2 - this.eye[2];
          if (RM.distance = zM * zM + LM * LM + HM * HM, this.lighting && !RM.lit && (yM = Math.max(yM, RM.vertexCount), this.unlit.push(RM)), SM) continue;
          const hM = this.isBlended(iM) ? null : this.batchFor(iM, RM.packed, RM.vertices.page, 1 === MM, mM);
          GM ? (eM[wM] = RM, bM[wM++] = hM) : gM(RM, hM)
        }
        const uM = GM ? this.sweepVisibility(MM, rM, UM) : null;
        null === (jM = (0, oj.A)(aM)) || void 0 === jM || jM.update(rM.frustum, this.originOffset, JM, uM);
        for (let RM = 0; RM < wM; RM++) {
          const MM = eM[RM];
          !uM || uM.isDrawn(MM.ci, MM.cj, MM.ck) ? gM(MM, bM[RM]) : (this.visCulledParts++, this.visCulledTriangles += 2 * MM.faceCount)
        }
        for (const RM of this.transparent) EM ||= lM && RM.material.liquid && !RM.material.customRenderMat;
        this.submittedTriangles = tM, uM && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(MM, rM, uM)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(EM) : EM && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && yM > 0 && this.geometry.lightFullSky(this.unlit, yM);
        for (const RM of this.opaqueBatches) this.chunkSorter.sort(RM.meshes, 1) || RM.meshes.sort(Sn);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(jn)
      }
      sweepVisibility(MM, rM, iM) {
        const {
          uL: OM
        } = MM.Cm, SM = OM.hL, jM = this.visPassable, aM = this.eye[0] + this.originOffset[0], PM = this.eye[1] + this.originOffset[1], nM = this.eye[2] + this.originOffset[2];
        if (!iM.eyeClear(aM, PM, nM, rM.near, rM.projectionMatrix, OM)) return null;
        const [QM, zM] = OM.GOM, LM = iM.update(aM, PM, nM, SM, QM, zM, jM);
        return this.visSweeps = iM.sweeps, LM ? iM : null
      }
      visSeeThrough(MM, rM) {
        const {
          material: iM
        } = MM;
        return (!iM || !this.isBlended(iM)) && (MM.mesh.visibility < 1 || !(null !== iM && void 0 !== iM && iM.bindGroup) || MM.faceCount > 0 && (!this.geometry.backed(MM) || this.lighting && !MM.vertices.page.twin) || !this.batchDraws(iM, MM.packed, rM))
      }
      batchDraws(MM, rM, iM) {
        var OM;
        const SM = rM ? 2 : 0;
        if (MM === this.visDrawsMaterial && function(MM, rM) {
            return 0 !== (MM & 1 << rM)
          }(this.visDrawsBits, SM)) return 0 !== (this.visDrawsBits & 2 << SM);
        let jM = null !== (OM = this.visBatchDraws.get(MM)) && void 0 !== OM ? OM : 0;
        if (!(jM & 1 << SM)) {
          jM |= 1 << SM | (!!MM.bindGroupLayout && this.canDraw(MM, rM) && !!this.pipelines.get(this.pipelineIdNow(MM, rM, !1, iM)) ? 2 << SM : 0), this.visBatchDraws.set(MM, jM)
        }
        return this.visDrawsMaterial = MM, this.visDrawsBits = jM, 0 !== (jM & 2 << SM)
      }
      runVisCheck(MM, rM, iM) {
        const {
          Cm: OM
        } = MM, {
          uL: SM
        } = OM, jM = SM.hL, aM = new Set;
        for (const HM of this.chunks.values()) aM.add(HM.key);
        const PM = FS.Matrix.FromArray(rM.viewProjectionMatrix).invert(),
          [nM, QM, zM] = this.originOffset,
          LM = new FS.sh,
          mM = function(MM, rM, iM, OM) {
            const SM = new Set;
            for (let jM = 0; jM < 27; jM++)
              for (let aM = 0; aM < 48; aM++) {
                const PM = iM((aM + .5) / 48 * 2 - 1, (jM + .5) / 27 * 2 - 1);
                IP(MM, rM, [PM[0] - rM[0], PM[1] - rM[1], PM[2] - rM[2]], OM, SM)
              }
            return SM
          }({
            YB: (MM, rM, iM) => SM.YB(MM, rM, iM),
            occluders: iM.occluders,
            opaque: iM.opaque,
            HL: jM,
            isDrawn: (MM, rM, OM) => iM.isDrawn(MM, rM, OM),
            hasParts: (MM, rM, iM) => aM.has((0, XP.k)(MM, rM, iM))
          }, [this.eye[0] + nM, this.eye[1] + QM, this.eye[2] + zM], ((MM, rM) => (FS.sh.TransformCoordinatesFromFloatsToRef(MM, rM, .5, PM, LM), [LM.x + nM, LM.y + QM, LM.z + zM])), (SM.GOM[0] + 1) * jM);
        this.visViolations = mM.size;
        for (const HM of mM) this.warnOnce(`vis:${HM}`, `Lite terrain cave culling skipped chunk ${HM}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var MM;
        null !== (MM = this.nh) && void 0 !== MM && MM.isRunning() && (this.shaderPackInputs ??= new qj(this.device, this.nh.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.nh, this.eye, this.lighting))
      }
      bindShaderPackInputs(MM, rM, iM) {
        var OM, SM, jM, aM;
        let PM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nM = this.packVariant(rM, iM);
        if (void 0 === nM) return;
        this.shaderPackInputs || (this.shaderPackInputs = new qj(this.device, iM.textureLayers(), this.sunShadow), this.shaderPackInputs.write(iM, this.eye, this.lighting));
        const QM = uO(nM) ? null !== (OM = null === (SM = this.sceneDepth) || void 0 === SM ? void 0 : SM.view) && void 0 !== OM ? OM : this.standIn() : null,
          zM = PM ? null !== (jM = null === (aM = this.shadowMask) || void 0 === aM ? void 0 : aM.view) && void 0 !== jM ? jM : this.standIn() : null;
        this.shaderPackInputs.bind(MM, QM, Ij(nM, !!this.sunShadow), zM)
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
        var MM, rM;
        return null !== (MM = null === (rM = this.shaderPackInputs) || void 0 === rM ? void 0 : rM.bindGroupFor(null, !0)) && void 0 !== MM ? MM : null
      }
      resetBatches(MM) {
        const rM = this.opaqueBatches;
        let iM = 0;
        for (const OM of rM) OM.meshes.length > 0 && (OM.meshes.length = 0, OM.faceCull = this.batchFaceCull(OM.material, MM), rM[iM++] = OM);
        rM.length = iM
      }
      orderBatches() {
        const MM = this.opaqueBatches;
        for (let rM = 0; rM < MM.length; rM++) {
          const iM = MM[rM];
          iM.group = rM;
          for (let OM = 0; OM < rM; OM++) {
            const rM = MM[OM];
            if (rM.material === iM.material && rM.packed === iM.packed) {
              iM.group = rM.group;
              break
            }
          }
          iM.nearest = iM.meshes.length > 0 ? iM.meshes[0].distance : 1 / 0
        }
        MM.sort(KP)
      }
      batchFor(MM, rM, iM, OM, SM) {
        for (const aM of this.opaqueBatches)
          if (aM.material === MM && aM.packed === rM && aM.page === iM && aM.resting === OM) return aM;
        const jM = {
          material: MM,
          packed: rM,
          page: iM,
          resting: OM,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(MM, SM)
        };
        return this.opaqueBatches.push(jM), jM
      }
      batchFaceCull(MM, rM) {
        return !(!rM || !(0, vP.t)(MM.model)) && (!this.nh || ! function(MM) {
          var rM;
          return !(null === (rM = (0, Tr.g)(MM)) || void 0 === rM || !rM.movesVertices)
        }(this.packVariant(MM, this.nh)))
      }
      writeFrameUniforms(MM, rM) {
        const iM = this.frameUniforms,
          OM = kO;
        if ((0, EP.u)(MM, iM), iM[OM.fogInfos] = rM.fogEnabled ? rM.fogMode : 0, iM[OM.fogInfos + 1] = rM.fogStart, iM[OM.fogInfos + 2] = rM.fogEnd, iM[OM.fogInfos + 3] = rM.fogDensity, iM.set(rM.fogColour, OM.fogColour), iM[OM.outputHeight] = rM.renderHeight, iM.set(rM.ambientColour, OM.sceneAmbient), (0, EP.r)(rM, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const rM = (0, UP.k)(MM.rJ, MM.bh, MM.gh);
          for (let MM = 0; MM < 4; MM++) iM[OM.aoLevels + MM] = rM[MM] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, iM)
      }
      animateMaterials(MM) {
        const rM = oO.anim;
        for (const iM of this.materials.values()) iM.animated && (iM.uniformData[rM] = MM, this.device.queue.writeBuffer(iM.uniformBuffer, 4 * rM, iM.uniformData, rM, 1))
      }
      canDraw(MM, rM) {
        return !("atlas" === MM.texture && !rM) || (this.warnOnce(`stride:${MM.id}`, `Lite terrain: material "${MM.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(MM, rM) {
        let iM = 0;
        MM.setBindGroup(1, this.frameBindGroup);
        for (const OM of this.opaqueBatches) {
          if (!OM.meshes.length || !this.canDraw(OM.material, OM.packed)) continue;
          const SM = this.pipelineFor(OM.material, OM.packed, rM, OM.resting);
          SM && (MM.setPipeline(SM), MM.setBindGroup(2, OM.material.bindGroup), this.nh && this.bindShaderPackInputs(MM, OM.material, this.nh, this.prepassOf.has(SM)), iM += this.drawBatch(MM, OM))
        }
        return iM
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(MM, rM, iM) {
        const OM = this.target,
          SM = this.nh;
        if (!OM || !SM || 0 === this.maskPipelines) return 0;
        let jM = 0,
          aM = null;
        this.geometry.setDrawing(!0);
        try {
          for (const PM of this.opaqueBatches) {
            if (!PM.meshes.length || !this.canDraw(PM.material, PM.packed)) continue;
            const nM = this.pipelineFor(PM.material, PM.packed, OM, PM.resting),
              QM = nM && this.prepassOf.get(nM);
            QM && (aM || (aM = MM.beginRenderPass(rM), aM.setBindGroup(0, iM), aM.setBindGroup(1, this.frameBindGroup)), aM.setPipeline(QM), aM.setBindGroup(2, PM.material.bindGroup), this.bindShaderPackInputs(aM, PM.material, SM, !0), jM += this.drawBatch(aM, PM))
          }
        } finally {
          var PM;
          null === (PM = aM) || void 0 === PM || PM.end(), this.geometry.setDrawing(!1)
        }
        return jM
      }
      drawBatch(MM, rM) {
        let iM = 0;
        for (const OM of rM.meshes) {
          const {
            rangeCount: rM
          } = OM;
          rM > 0 && (iM += this.geometry.draw(MM, OM, this.lighting, OM.first0, OM.count0), rM > 1 && (iM += this.geometry.draw(MM, OM, this.lighting, OM.first1, OM.count1)))
        }
        return iM
      }
      drawTransparent(MM, rM) {
        let iM = 0,
          OM = null,
          SM = null;
        MM.setBindGroup(1, this.frameBindGroup);
        for (const jM of this.transparent) {
          const aM = jM.material;
          if (!this.canDraw(aM, jM.packed)) continue;
          const PM = this.pipelineFor(aM, jM.packed, rM);
          PM && (PM !== OM && (MM.setPipeline(PM), OM = PM, this.nh && this.bindShaderPackInputs(MM, aM, this.nh)), aM !== SM && (MM.setBindGroup(2, aM.bindGroup), SM = aM), iM += this.geometry.draw(MM, jM, this.lighting))
        }
        return iM
      }
    }

    function On(MM, rM, iM, OM) {
      return `${MS(MM)}|${MM.atlasLayers}|${MM.U3}|${rM}|${iM}|${OM._colorFormat}|${OM._depthStencilFormat}|${OM._sampleCount}`
    }

    function Sn(MM, rM) {
      return MM.distance - rM.distance
    }

    function jn(MM, rM) {
      return rM.distance - MM.distance
    }
    class an {
      constructor() {
        this.left = []
      }
      sort(MM, rM) {
        for (let iM = 0; iM < MM.length; iM++) {
          const rM = MM[iM].distance;
          if (rM - rM !== 0) return !1
        }
        return this.sortRange(MM, 0, MM.length, rM), !0
      }
      sortRange(MM, rM, iM, OM) {
        if (iM - rM <= 16) {
          for (let SM = rM + 1; SM < iM; SM++) {
            const iM = MM[SM],
              jM = OM * iM.distance;
            let aM = SM - 1;
            for (; aM >= rM && OM * MM[aM].distance > jM; aM--) MM[aM + 1] = MM[aM];
            MM[aM + 1] = iM
          }
          return
        }
        const SM = rM + iM >>> 1;
        if (this.sortRange(MM, rM, SM, OM), this.sortRange(MM, SM, iM, OM), OM * MM[SM - 1].distance <= OM * MM[SM].distance) return;
        const {
          left: jM
        } = this, aM = SM - rM;
        for (let zM = 0; zM < aM; zM++) jM[zM] = MM[rM + zM];
        let PM = 0,
          nM = SM,
          QM = rM;
        for (; PM < aM && nM < iM;) MM[QM++] = OM * MM[nM].distance < OM * jM[PM].distance ? MM[nM++] : jM[PM++];
        for (; PM < aM;) MM[QM++] = jM[PM++]
      }
    }
    const Pn = Math.ceil(102);

    function nn(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rM;
      const jM = Math.min(rM, iM),
        aM = new Uint32Array(ei(OM));
      for (let PM = 0; PM < OM; PM++) {
        const rM = Math.floor(PM * jM / OM),
          iM = Math.max(rM + 1, Math.floor((PM + 1) * jM / OM));
        for (let nM = 0; nM < OM; nM++) {
          const QM = Math.floor(nM * jM / OM),
            zM = Math.max(QM + 1, Math.floor((nM + 1) * jM / OM));
          let LM = 0;
          for (let OM = rM; OM < iM; OM++)
            for (let rM = QM; rM < zM; rM++) MM[OM * SM + rM] >= Pn && LM++;
          if (2 * LM >= (iM - rM) * (zM - QM)) {
            const MM = nM + OM * PM;
            aM[MM >>> 5] |= 1 << (31 & MM)
          }
        }
      }
      return aM
    }

    function Qn(MM) {
      return Math.max(1, Math.min(16, MM))
    }
    class zn {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = MM, this.loadTexture = rM, this.warn = iM, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(MM, rM) {
        return (MM.vx !== this.builtVersion || this.blockCaster.length !== rM) && (this.build(MM, rM), !0)
      }
      build(MM, rM) {
        this.builtVersion = MM.vx;
        const iM = new Uint16Array(rM),
          OM = new Map;
        for (let SM = 1; SM < rM; SM++) {
          const rM = this.classify(MM, SM, OM);
          if (null === rM || rM === li) {
            iM[SM] = null === rM ? 0 : li;
            continue
          }
          let jM = this.byKey.get(rM.key);
          void 0 === jM && (jM = this.allocate(rM), this.byKey.set(rM.key, jM)), iM[SM] = jM
        }
        this.blockCaster = iM, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(MM, rM) {
        const iM = MM.w6[rM];
        if ("function" !== typeof iM) return iM;
        try {
          return iM()
        } catch (OM) {
          return this.warnOnce(`Sun shadows: no caster option for block ${rM}: ${OM instanceof Error?OM.message:String(OM)}`), null
        }
      }
      classify(MM, rM, iM) {
        const OM = this.option(MM, rM);
        if ("none" === OM) return null;
        if (OM && OM.planes.length > 0) {
          const MM = OM.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(MM)}`,
            planes: MM
          }
        }
        if (MM.GH[rM]) return null;
        const SM = MM.eH[rM] ? MM.Xx(rM) : null;
        if (SM && SM.length >= 6) {
          const MM = function(MM) {
            const rM = new Uint32Array(16);
            for (let iM = 0; iM + 6 <= MM.length; iM += 6) {
              const OM = [0, 1, 2].map((rM => Math.max(0, Math.ceil(8 * MM[iM + rM] - .5)))),
                SM = [0, 1, 2].map((rM => Math.min(7, Math.floor(8 * MM[iM + rM + 3] - .5))));
              for (let MM = OM[2]; MM <= SM[2]; MM++)
                for (let iM = OM[1]; iM <= SM[1]; iM++)
                  for (let jM = OM[0]; jM <= SM[0]; jM++) {
                    const OM = jM + 8 * (iM + 8 * MM);
                    rM[OM >>> 5] |= 1 << (31 & OM)
                  }
            }
            return rM
          }(SM);
          return function(MM) {
            return MM.every((MM => 4294967295 === MM))
          }(MM) ? li : MM.every((MM => 0 === MM)) ? null : {
            kind: "shape",
            key: `shape:${MM.join(",")}`,
            mask: MM
          }
        }
        if (MM.bC[rM] || !MM.iJ[rM]) return null;
        const jM = [0, 1, 2, 3, 4, 5].map((OM => {
          const SM = MM.OJ[6 * rM + OM];
          let jM = iM.get(SM);
          return void 0 === jM && (jM = function(MM) {
            if (!MM || MM.HJ) return null;
            const {
              Z2: rM,
              U3: iM,
              Q0: OM
            } = MM;
            if (!rM || !iM || !(iM > 0) || void 0 === OM || !(OM >= 0)) return null;
            const SM = rM[0],
              jM = iM * iM * 4;
            if (!SM || SM.byteLength < jM) return null;
            const aM = Math.floor(SM.byteLength / jM),
              PM = rM[Math.floor(OM / aM)];
            if (!PM) return null;
            const nM = new Uint8Array(PM.buffer, PM.byteOffset, PM.byteLength),
              QM = OM % aM * jM;
            if (QM + jM > nM.length) return null;
            const zM = new Uint8Array(iM * iM);
            let LM = !1;
            for (let mM = 0; mM < zM.length; mM++) zM[mM] = nM[QM + 4 * mM + 3], LM ||= zM[mM] < Pn;
            return LM ? {
              alpha: zM,
              width: iM
            } : null
          }(MM.mJ(SM)), iM.set(SM, jM)), jM
        }));
        if (jM.every((MM => null === MM))) return li;
        const aM = Qn(Math.max(...jM.map((MM => {
            var rM;
            return null !== (rM = null === MM || void 0 === MM ? void 0 : MM.width) && void 0 !== rM ? rM : 1
          })))),
          PM = new Uint32Array(ei(aM)).fill(4294967295),
          nM = jM.map((MM => null === MM ? PM : nn(MM.alpha, MM.width, MM.width, aM)));
        return {
          kind: "cutout",
          key: `cutout:${aM}:${nM.map((MM=>MM.join(","))).join("|")}`,
          size: aM,
          faces: nM
        }
      }
      allocate(MM) {
        if (this.nextCaster >= bi) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const rM = this.nextCaster++;
        if (this.writeCaster(rM, Ei, 0, 0, 0), "shape" === MM.kind) {
          const iM = this.allocateMask(MM.mask.length);
          iM >= 0 && (this.sink(iM, MM.mask), this.writeCaster(rM, Ui, iM, 0, 8))
        } else if ("cutout" === MM.kind) {
          const iM = ei(MM.size),
            OM = this.allocateMask(6 * iM);
          if (OM >= 0) {
            const SM = new Uint32Array(6 * iM);
            MM.faces.forEach(((MM, rM) => {
              SM.set(MM, rM * iM)
            })), this.sink(OM, SM), this.writeCaster(rM, Ci, OM, 0, MM.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(rM, MM.planes).finally((() => {
          this.planesLoading--
        })));
        return rM
      }
      async loadPlanes(MM, rM) {
        const iM = await Promise.all(rM.map((MM => this.texture(MM.texture))));
        if (iM.some((MM => null === MM))) return;
        const OM = iM,
          SM = Qn(Math.max(...OM.map((MM => Math.min(MM.width, MM.height))))),
          jM = ei(SM),
          aM = this.allocateMask(rM.length * (4 + jM));
        if (aM < 0) return;
        const PM = new Uint32Array(rM.length * (4 + jM)),
          nM = 4 * rM.length;
        rM.forEach(((MM, rM) => {
          const iM = aM + nM + rM * jM;
          PM.set(function(MM, rM) {
            const [iM, OM] = MM.tangent, SM = Math.hypot(iM, OM) || 1, jM = iM / SM, aM = OM / SM, PM = MM.centre[0] * aM - MM.centre[1] * jM, nM = new Uint32Array(4);
            return new Float32Array(nM.buffer, 0, 3).set([jM, aM, PM]), nM[3] = rM, nM
          }(MM, iM), 4 * rM), PM.set(nn(OM[rM].alpha, OM[rM].width, OM[rM].height, SM), nM + rM * jM)
        })), this.sink(aM, PM), this.writeCaster(MM, Gi, aM, rM.length, SM)
      }
      texture(MM) {
        let rM = this.textures.get(MM);
        return rM || (rM = this.loadTexture(MM).catch((rM => (this.warn(`Sun shadows: no mask for ${MM}: ${rM instanceof Error?rM.message:String(rM)}`), null))), this.textures.set(MM, rM)), rM
      }
      allocateMask(MM) {
        if (this.nextMaskWord + MM > wi) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const rM = 32768 + this.nextMaskWord;
        return this.nextMaskWord += MM, rM
      }
      writeCaster(MM, rM, iM, OM, SM) {
        this.sink(0 + 4 * MM, Uint32Array.of(rM, iM, OM, SM))
      }
      warnOnce(MM) {
        this.warned.has(MM) || (this.warned.add(MM), this.warn(MM))
      }
    }
    var Ln = iM(3155);

    function mn(MM) {
      return !MM.JJ && !MM.vG && !MM.Bh
    }

    function Hn() {
      return {
        bricks: new Uint32Array(Qi),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Pi)
      }
    }
    class hn {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = MM, this.writeVoxels = rM, this.writePool = iM, this.warn = OM, this.eyeChunk = null, this.slotChunk = new Array(ri).fill(null), this.slotVersion = new Float64Array(ri).fill(-1), this.slotPool = new Array(ri).fill(null), this.starved = new Uint8Array(ri), this.queue = [], this.queued = new Uint8Array(ri), this.queueSorted = !0, this.freePool = new Uint32Array(ti), this.freeCount = ti, this.casterTable = null, this.warnedPool = !1, this.scratch = Hn(), this.victimScratch = Hn(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * ri), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let SM = 0; SM < ti; SM++) this.freePool[SM] = 65535 - SM
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return ti - this.freeCount
      }
      chunkAdded(MM) {
        if (null === this.eyeChunk || !this.inRadius(MM.i, MM.j, MM.k)) return;
        const rM = Ji(MM.i, MM.j, MM.k);
        this.slotChunk[rM] = MM, this.slotVersion[rM] = -1, this.enqueue(rM)
      }
      update(MM, rM, iM) {
        const OM = this.casters.blockCaster;
        if (OM !== this.casterTable) {
          this.casterTable = OM;
          for (let MM = 0; MM < ri; MM++) this.slotVersion[MM] = -1, this.slotChunk[MM] && this.enqueue(MM)
        }
        const SM = Math.floor(MM[0] / 32),
          jM = Math.floor(MM[1] / 32),
          aM = Math.floor(MM[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== SM || this.eyeChunk[1] !== jM || this.eyeChunk[2] !== aM) && (this.eyeChunk = [SM, jM, aM], this.follow(rM), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let PM = 0; PM < ri; PM++) {
          const MM = this.slotChunk[PM];
          MM && (MM.xG || MM.Kh !== this.slotVersion[PM]) && this.enqueue(PM)
        }
        this.drain(iM), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(MM, rM) {
        this.records.set(rM, 4 * MM), this.windowTopStale = !0, this.writeVoxels(4 * MM, rM)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const MM = this.records;
        let rM = -1 / 0;
        for (let OM = 0; OM < MM.length; OM += 4) {
          const iM = 255 & MM[OM + 3];
          iM !== Si && iM !== ji || !this.inRadius(MM[OM], MM[OM + 1], MM[OM + 2]) || (rM = Math.max(rM, MM[OM + 1] * Vr + (MM[OM + 3] >>> 8)))
        }
        const iM = rM === -1 / 0 ? 1 : rM + Li;
        iM !== this.windowTop[0] && (this.windowTop[0] = iM, this.writeVoxels(zi, this.windowTop))
      }
      follow(MM) {
        const rM = this.eyeChunk,
          [iM, OM, SM] = cr;
        for (let aM = -SM; aM <= SM; aM++)
          for (let SM = -OM; SM <= OM; SM++)
            for (let OM = -iM; OM <= iM; OM++) {
              var jM;
              const iM = rM[0] + OM,
                PM = rM[1] + SM,
                nM = rM[2] + aM,
                QM = Ji(iM, PM, nM),
                zM = this.slotChunk[QM];
              if (zM && !zM.xG && zM.i === iM && zM.j === PM && zM.k === nM) continue;
              const LM = null !== (jM = MM(iM, PM, nM)) && void 0 !== jM ? jM : null;
              zM && (zM.i !== iM || zM.j !== PM || zM.k !== nM) && this.slotPool[QM] && (this.release(QM), this.record.fill(0), this.writeRecord(QM, this.record)), this.slotChunk[QM] = LM, this.slotVersion[QM] = -1, (LM || zM) && this.enqueue(QM)
            }
      }
      requeueStarved() {
        for (let MM = 0; MM < ri; MM++) this.starved[MM] && this.slotChunk[MM] && this.enqueue(MM)
      }
      enqueue(MM) {
        this.queued[MM] || (this.queued[MM] = 1, this.queue.push(MM), this.queueSorted = !1)
      }
      drain(MM) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const MM = new Map;
          for (const rM of this.queue) MM.set(rM, this.slotDistance(rM));
          this.queue.sort(((rM, iM) => MM.get(iM) - MM.get(rM))), this.queueSorted = !0
        }
        const rM = performance.now();
        let iM = 0;
        const OM = [];
        for (; this.queue.length > 0 && (0 === iM || performance.now() - rM < MM);) {
          const MM = this.queue.pop(),
            rM = this.slotChunk[MM];
          !rM || rM.xG || mn(rM) ? (this.queued[MM] = 0, this.encodeSlot(MM), iM++) : OM.push(MM)
        }
        for (let SM = OM.length - 1; SM >= 0; SM--) this.queue.push(OM[SM])
      }
      slotDistance(MM) {
        const rM = this.slotChunk[MM],
          iM = this.eyeChunk;
        return rM ? Math.max(Math.abs(rM.i - iM[0]), Math.abs(rM.j - iM[1]), Math.abs(rM.k - iM[2])) : 0
      }
      inRadius(MM, rM, iM) {
        const OM = this.eyeChunk,
          [SM, jM, aM] = cr;
        return Math.abs(MM - OM[0]) <= SM && Math.abs(rM - OM[1]) <= jM && Math.abs(iM - OM[2]) <= aM
      }
      release(MM) {
        const rM = this.slotPool[MM];
        if (rM) {
          for (let MM = rM.length - 1; MM >= 0; MM--) this.freePool[this.freeCount++] = rM[MM];
          this.slotPool[MM] = null
        }
      }
      encodeSlot(MM) {
        var rM, iM, OM, SM, jM;
        let aM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          PM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const nM = null !== (rM = null === (iM = this.slotPool[MM]) || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : 0;
        this.release(MM), this.starved[MM] = 0;
        const QM = this.slotChunk[MM],
          zM = this.record;
        if (!QM || QM.xG || !QM.Xm) return this.slotChunk[MM] = null, this.slotVersion[MM] = -1, zM.fill(0), this.writeRecord(MM, zM), void(nM > 0 && this.requeueStarved());
        this.slotVersion[MM] = QM.Kh;
        const LM = this.encodeBricks(QM, MM, aM, PM);
        zM[0] = QM.i, zM[1] = QM.j, zM[2] = QM.k, zM[3] = LM, this.writeRecord(MM, zM), null === (OM = this.encoded) || void 0 === OM || OM.call(this, QM), PM && (null !== (SM = null === (jM = this.slotPool[MM]) || void 0 === jM ? void 0 : jM.length) && void 0 !== SM ? SM : 0) < nM && this.requeueStarved()
      }
      encodeBricks(MM, rM, iM, OM) {
        if (MM.Hh) return Oi;
        const SM = this.casters.blockCaster,
          {
            data: jM,
            stride: aM,
            offset: PM
          } = MM.Xm,
          [nM, QM, zM] = aM,
          LM = Vr,
          {
            bricks: mM,
            cells: HM,
            special: hM
          } = iM;
        mM.fill(0), hM.fill(0);
        let JM = 0,
          dM = 0,
          yM = 0;
        for (let lM = 0; lM < LM; lM++) {
          const rM = lM >> 2,
            iM = 3 & lM,
            OM = MM.NH[lM],
            aM = OM === Ln.i ? -1 : OM < SM.length ? SM[OM] : 0;
          if (0 !== aM)
            for (let MM = 0; MM < LM; MM++) {
              const OM = MM >> 2,
                EM = 3 & MM;
              let UM = PM + MM * nM + lM * QM;
              for (let MM = 0; MM < LM; MM++, UM += zM) {
                let PM = aM;
                if (PM < 0) {
                  const MM = jM[UM];
                  if (PM = MM < SM.length ? SM[MM] : 0, 0 === PM) continue
                }
                const nM = di(OM, rM, MM >> 2),
                  QM = yi(EM, iM, 3 & MM);
                mM[3 * nM + (QM >>> 5)] |= 1 << (31 & QM), HM[nM * ai + QM] = PM, JM++, yM = lM, PM === li ? dM++ : hM[nM] = 1
              }
            }
        }
        return 0 === JM ? Oi : 32768 === dM ? Si | yM << 8 : (this.writePoolEntries(rM, iM, OM), this.writeVoxels(ni + rM * Qi, mM), ji | yM << 8)
      }
      writePoolEntries(MM, rM, iM) {
        const {
          bricks: OM,
          cells: SM,
          special: jM
        } = rM, aM = this.entry;
        let PM = 0;
        for (let zM = 0; zM < Pi; zM++) PM += jM[zM];
        if (0 === PM) return;
        iM && this.freeCount < PM && this.evictBeyond(MM, PM);
        const nM = new Uint32Array(iM ? Math.min(PM, this.freeCount) : 0);
        let QM = 0;
        for (let zM = 0; zM < Pi; zM++) {
          if (!jM[zM]) continue;
          const iM = 3 * zM;
          if (QM === nM.length) {
            this.dropSpecials(rM, zM), this.starved[MM] = 1;
            continue
          }
          const PM = this.freePool[--this.freeCount];
          nM[QM++] = PM;
          for (let MM = 0; MM < ai; MM++) {
            const rM = OM[iM + (MM >>> 5)] >>> (31 & MM) & 1 ? SM[zM * ai + MM] : 0;
            1 & MM ? aM[MM >> 1] |= rM << 16 : aM[MM >> 1] = rM
          }
          OM[iM + 2] = PM + 1, this.writePool(gi + 32 * PM, aM)
        }
        nM.length > 0 && (this.slotPool[MM] = nM)
      }
      evictBeyond(MM, rM) {
        const iM = this.slotDistance(MM),
          OM = [];
        for (let SM = 0; SM < ri; SM++) SM !== MM && this.slotPool[SM] && this.slotDistance(SM) > iM && OM.push(SM);
        OM.sort(((MM, rM) => this.slotDistance(rM) - this.slotDistance(MM)));
        for (const SM of OM) {
          if (this.freeCount >= rM) return;
          const MM = this.slotChunk[SM];
          MM && !MM.xG && MM.Xm && (MM.Kh === this.slotVersion[SM] || mn(MM)) && this.encodeSlot(SM, this.victimScratch, !1)
        }
      }
      dropSpecials(MM, rM) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const iM = 3 * rM;
        for (let OM = 0; OM < ai; OM++) MM.cells[rM * ai + OM] !== li && (MM.bricks[iM + (OM >>> 5)] &= ~(1 << (31 & OM)))
      }
    }
    var Jn = iM(38347);
    class dn {
      constructor(MM) {
        this.device = MM, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Ni, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.uL = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = MM.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = MM.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(MM, rM, iM) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: OM
        } = this;
        OM.JL(MM, rM), iM.forEachSunShadowCaster((MM => {
          this.add(MM)
        })), OM.finish();
        const SM = 0 === OM.parts;
        if (SM && this.uploadedEmpty) return;
        this.uploadedEmpty = SM;
        const {
          queue: jM
        } = this.device, {
          words: aM
        } = OM;
        jM.writeBuffer(this.frameBuffer, 0, aM, 0, 16385), OM.refs > 0 && jM.writeBuffer(this.frameBuffer, 65540, aM, si, OM.refs), SM || jM.writeBuffer(this.frameBuffer, 327684, aM, Di, OM.parts * Wi)
      }
      add(MM) {
        const rM = this.gridFor(MM);
        if (!rM) return;
        const {
          frame: iM
        } = this, {
          uL: OM,
          worldAt: SM,
          instances: jM,
          instanceCount: aM,
          thin: PM
        } = MM;
        if (jM)
          for (let nM = 0; nM < aM; nM++) PM ? (xi(jM, 16 * nM, OM, SM, this.uL), iM.add(rM, this.uL)) : iM.add(rM, jM, 16 * nM);
        else iM.add(rM, OM, SM)
      }
      gridFor(MM) {
        let {
          geometry: rM,
          indexed: iM,
          first: OM,
          count: SM,
          skip: jM
        } = MM, aM = this.grids.get(rM);
        aM || (aM = new Map, this.grids.set(rM, aM));
        const PM = `${iM?OM:-1-OM}:${SM}:${null!==jM&&void 0!==jM?jM:""}`;
        let nM = aM.get(PM);
        if (void 0 !== nM || this.gridsFull) return nM;
        const QM = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = QM + 2;
        else if (QM > this.bakeDeadline) return;
        return nM = this.bake(rM, iM, OM, SM, jM), void 0 !== nM && aM.set(PM, nM), nM
      }
      bake(MM, rM, iM, OM, SM) {
        const jM = MM.vertexAttributes.find((MM => "position" === MM.kind)),
          aM = jM ? function(MM, rM, iM, OM) {
            let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const jM = MM => rM ? rM[iM + MM] : iM + MM,
              aM = MM => null !== SM && [0, 1, 2].some((rM => {
                const iM = jM(MM + rM);
                return iM >= SM[0] && iM < SM[1]
              })),
              PM = [1 / 0, 1 / 0, 1 / 0],
              nM = [-1 / 0, -1 / 0, -1 / 0];
            for (let lM = 0; lM + 2 < OM; lM += 3)
              if (!aM(lM))
                for (let rM = 0; rM < 3; rM++) {
                  const iM = jM(lM + rM);
                  for (let rM = 0; rM < 3; rM++) PM[rM] = Math.min(PM[rM], MM[3 * iM + rM]), nM[rM] = Math.max(nM[rM], MM[3 * iM + rM])
                }
            const QM = Math.max(nM[0] - PM[0], nM[1] - PM[1], nM[2] - PM[2]);
            if (!(QM > 0)) return null;
            const zM = QM / 64,
              LM = [0, 0, 0],
              mM = [0, 0, 0],
              HM = [0, 0, 0];
            for (let lM = 0; lM < 3; lM++) LM[lM] = Math.min(65, Math.ceil((nM[lM] - PM[lM]) / zM) + 1), mM[lM] = PM[lM] - zM / 2, HM[lM] = mM[lM] + LM[lM] * zM;
            const hM = new Uint32Array(Math.ceil(LM[0] * LM[1] * LM[2] / 32)),
              JM = new Float64Array(9),
              dM = [0, 0, 0],
              yM = [0, 0, 0];
            for (let lM = 0; lM + 2 < OM; lM += 3)
              if (!aM(lM)) {
                for (let rM = 0; rM < 3; rM++) {
                  const iM = jM(lM + rM);
                  for (let OM = 0; OM < 3; OM++) JM[3 * rM + OM] = MM[3 * iM + OM]
                }
                for (let MM = 0; MM < 3; MM++) {
                  const rM = Math.min(JM[MM], JM[3 + MM], JM[6 + MM]),
                    iM = Math.max(JM[MM], JM[3 + MM], JM[6 + MM]);
                  dM[MM] = Math.max(0, Math.floor((rM - mM[MM]) / zM - 1e-6)), yM[MM] = Math.min(LM[MM] - 1, Math.floor((iM - mM[MM]) / zM + 1e-6))
                }
                for (let MM = dM[2]; MM <= yM[2]; MM++)
                  for (let rM = dM[1]; rM <= yM[1]; rM++)
                    for (let iM = dM[0]; iM <= yM[0]; iM++)
                      if (vi(JM, mM[0] + (iM + .5) * zM, mM[1] + (rM + .5) * zM, mM[2] + (MM + .5) * zM, zM / 2)) {
                        const OM = iM + LM[0] * (rM + LM[1] * MM);
                        hM[OM >>> 5] |= 1 << (31 & OM)
                      }
              } return {
              words: hM,
              lo: mM,
              hi: HM,
              cell: zM,
              dims: LM
            }
          }((0, Jn.f)(jM, MM.vertexCount), rM ? MM.indexData : null, iM, OM, SM) : null;
        if (!aM) return null;
        const {
          words: PM,
          ...nM
        } = aM;
        if (this.gridTop + PM.length > Zi) return void(this.gridsFull = !0);
        const QM = this.gridTop;
        return this.gridTop += PM.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * QM, PM), {
          ...nM,
          at: QM
        }
      }
    }
    const yn = Math.cos(1 * Math.PI / 180);

    function En(MM, rM) {
      return MM[0] * rM[0] + MM[1] * rM[1] + MM[2] * rM[2] < yn
    }
    async function Un(MM) {
      const {
        pixels: rM,
        width: iM,
        height: OM
      } = await Mr(MM), SM = new Uint8Array(iM * OM);
      for (let jM = 0; jM < SM.length; jM++) SM[jM] = rM[4 * jM + 3];
      return {
        width: iM,
        height: OM,
        alpha: SM
      }
    }
    class Gn {
      constructor(MM, rM) {
        this.device = MM, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Bi.p), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = MM.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = MM.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * mi,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = MM.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [iM, OM, SM] = Bi.q;
        this.volume = MM.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: iM,
            height: OM,
            depthOrArrayLayers: SM
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = MM.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = MM.createBuffer({
          label: "sun-shadow-volume-work",
          size: Bi.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = rM ? new dn(MM) : null, this.entityStandIn = rM ? null : MM.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var MM;
        null === (MM = this.stopWindow) || void 0 === MM || MM.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var MM, rM;
        const iM = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || iM.push("Lite sun shadow volume pipeline compiling");
        const OM = null !== (MM = null === (rM = this.casters) || void 0 === rM ? void 0 : rM.planesLoading) && void 0 !== MM ? MM : 0;
        return OM > 0 && iM.push(`${OM} Lite sun shadow plane casters loading their textures`), iM
      }
      entries() {
        var MM, rM, iM, OM;
        const SM = qr.p;
        return [{
          binding: SM.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: SM.Xm,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: SM.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: SM.volume,
          resource: this.volumeView
        }, {
          binding: SM.sampler,
          resource: this.volumeSampler
        }, {
          binding: SM.entities,
          resource: {
            buffer: null !== (MM = null === (rM = this.entities) || void 0 === rM ? void 0 : rM.frameBuffer) && void 0 !== MM ? MM : this.entityStandIn
          }
        }, {
          binding: SM.entityGrids,
          resource: {
            buffer: null !== (iM = null === (OM = this.entities) || void 0 === OM ? void 0 : OM.gridBuffer) && void 0 !== iM ? iM : this.entityStandIn
          }
        }]
      }
      prepare(MM, rM, iM) {
        var OM;
        this.entitiesThisFrame = !1;
        const SM = null !== (OM = null === iM || void 0 === iM ? void 0 : iM.sunShadowReach()) && void 0 !== OM ? OM : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!iM || !SM.sunShadow && !SM.airShadow) return void(this.volumeHolds = null);
        if (MM.uL.hL !== Vr) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${MM.uL.hL}; everything is lit.`)));
        const jM = this.start(MM);
        this.casters.update(MM.nL, MM.nL.eH.length);
        const aM = MM.Am;
        for (let mM = 0; mM < 3; mM++) this.eye[mM] = rM[mM] + aM[mM];
        const PM = (0, Bi.w)(this.eye);
        this.staleNear = PM;
        const nM = MM.uL.yJ;
        jM.update(this.eye, ((MM, rM, iM) => nM.lJ(MM, rM, iM)), 1);
        const QM = (0, Bi.r)(iM.mMM()),
          zM = jM.eyeChunk,
          LM = this.uniformInts;
        for (let mM = 0; mM < 3; mM++) LM[mM] = zM[mM], LM[4 + mM] = PM[mM];
        this.entitiesThisFrame = null !== this.entities && SM.sunShadow, this.entitiesThisFrame && Yi(this.uniformFloats, 8, rM, QM), null !== this.volumeHolds && (this.castersWritten || En(QM, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(PM, QM, zM)
      }
      markStale(MM) {
        const rM = this.staleNear,
          iM = Vr,
          OM = [MM.i * iM, MM.j * iM, MM.k * iM];
        for (let jM = 0; jM < 3; jM++)
          if (OM[jM] + iM <= rM[jM] - iM || OM[jM] >= rM[jM] + Bi.q[jM] + iM) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const SM = this.stale;
        for (let jM = 0; jM < SM.length; jM += 4)
          if (SM[jM] === MM.i && SM[jM + 1] === MM.j && SM[jM + 2] === MM.k) return void(SM[jM + 3] = this.swept);
        if (16 === SM.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        SM.push(MM.i, MM.j, MM.k, this.swept)
      }
      writeStale() {
        const MM = this.swept,
          rM = this.stale;
        this.staleAll && MM - this.staleAllSwept >= Bi.j && (this.staleAll = !1, rM.length = 0);
        let iM = 0;
        for (let SM = 0; SM < rM.length; SM += 4)
          if (MM - rM[SM + 3] < Bi.j) {
            for (let MM = 0; MM < 4; MM++) rM[iM + MM] = rM[SM + MM];
            iM += 4
          } rM.length = iM;
        const OM = this.uniformInts;
        OM[3] = this.staleAll ? 5 : iM / 4;
        for (let SM = 0; SM < 4; SM++)
          for (let MM = 0; MM < 3; MM++) OM[16 + 4 * SM + MM] = 4 * SM < iM ? rM[4 * SM + MM] * Vr : 0
      }
      writeUniform() {
        const MM = this.uniformInts;
        let rM = this.uniformWritten;
        if (rM) {
          let iM = !0;
          for (let OM = 0; OM < MM.length && iM; OM++) iM = MM[OM] === rM[OM];
          if (iM) return
        }
        rM ??= this.uniformWritten = new Int32Array(MM.length), rM.set(MM), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(MM) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, MM)
      }
      computeVolume(MM, rM, iM) {
        const OM = this.buildVolumePass();
        if (!OM) return void(this.volumeHolds = null);
        const SM = (0, Bi.u)(this.volumeHolds, MM);
        this.volumeHolds = MM;
        const jM = 1 === SM.length && SM[0].size.every(((MM, rM) => MM === Bi.q[rM])),
          aM = this.sweptChunk,
          PM = this.sweptLight,
          nM = rM[0] !== PM[0] || rM[1] !== PM[1] || rM[2] !== PM[2],
          QM = iM[0] !== aM[0] || iM[1] !== aM[1] || iM[2] !== aM[2],
          zM = nM && En(rM, PM);
        if ((jM || this.written || QM || zM) && (this.fastLeft = Bi.j), jM || this.written || nM || QM) {
          this.written = !1;
          for (let MM = 0; MM < 3; MM++) aM[MM] = iM[MM], PM[MM] = rM[MM];
          this.sweepLeft = jM ? 0 : Bi.j
        }
        if (jM ? this.swept += Bi.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, SM.push(...(0, Bi.z)(MM, this.slice)), this.slice = (this.slice + 1) % Bi.j, this.swept++), 0 === SM.length) return;
        const LM = (0, Bi.D)(this.workData, rM, SM);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const mM = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          HM = mM.beginComputePass({
            label: "sun-shadow-volume"
          });
        HM.setPipeline(OM.pipeline), HM.setBindGroup(Ki.group, OM.bindGroup), HM.dispatchWorkgroups(Math.ceil(LM / Bi.n)), HM.end(), this.device.queue.submit([mM.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const MM = Ki,
          rM = GPUShaderStage.COMPUTE,
          iM = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: MM.uniform,
              visibility: rM,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: MM.Xm,
              visibility: rM,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: MM.special,
              visibility: rM,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: MM.work,
              visibility: rM,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: MM.volume,
              visibility: rM,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          OM = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: iM,
            entries: [{
              binding: MM.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: MM.Xm,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: MM.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: MM.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: MM.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [iM]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: qi()
            }),
            entryPoint: "main"
          }
        }).then((MM => {
          this.volumePass = {
            pipeline: MM,
            bindGroup: OM
          }
        }), (MM => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(MM)}`)
        })), null
      }
      start(MM) {
        if (this.window) return this.window;
        const rM = (MM, rM) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * MM, rM)
        };
        this.casters = new zn(((MM, iM) => {
          this.castersWritten = !0, rM(MM, iM)
        }), Un);
        const iM = new hn(this.casters, ((MM, rM) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * MM, rM)
        }), rM);
        iM.encoded = MM => {
          this.markStale(MM)
        };
        const OM = MM => {
          iM.chunkAdded(MM)
        };
        return MM.uL.on("chunkAdded", OM), this.stopWindow = () => {
          MM.uL.removeListener("chunkAdded", OM)
        }, this.window = iM, iM
      }
    }
    var Cn = iM(39733),
      en = iM(39741);
    const bn = 0,
      wn = 3,
      tn = 4,
      gn = 5;

    function un(MM, rM, iM, OM) {
      MM.drawOffset(rM, OM + bn), rM[OM + wn] = MM.drawTime(), iM[OM + tn] = MM.ring.drawStart(), iM[OM + gn] = MM.ring.drawCount()
    }
    const Rn = `\n${NO}\n\nconst MAX_STOPS = ${en.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${en.d/4}>,\n\tcolor1: array<vec4f, ${en.d}>,\n\tcolor2: array<vec4f, ${en.d}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${en.d}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${en.d}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var pn = iM(44259);
    class Wn {
      constructor(MM, rM, iM, OM) {
        this.device = MM, this.system = rM, this.frameIndex = iM, this.bindings = OM, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, pn.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (MM, rM) => {
          this.device.queue.writeBuffer(this.ring, MM * en.g * 4, this.system.ring.records, MM * en.g, (rM - MM) * en.g)
        };
        const {
          name: SM
        } = rM;
        this.ring = MM.createBuffer({
          label: `particles-${SM}`,
          size: rM.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = MM.createBuffer({
          label: `particles-uniforms-${SM}`,
          size: 4 * en.s,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(MM) {
        const rM = (0, pn.d)(this.system, this.uniformBits, MM);
        rM && (this.uniformBits = rM, this.device.queue.writeBuffer(this.uniforms, 0, rM))
      }
      bind() {
        const {
          system: MM
        } = this, rM = this.texture;
        (0, pn.i)(MM, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${MM.name}`,
          size: [en.o, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * en.o
        }, [en.o, 1]));
        const iM = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === rM.view && this.boundSampler === rM.sampler && this.boundRamp === iM || (this.boundView = rM.view, this.boundSampler = rM.sampler, this.boundRamp = iM, this.bindGroup = this.device.createBindGroup({
          label: `particles-${MM.name}`,
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
            resource: rM.sampler
          }, {
            binding: 3,
            resource: rM.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: iM
          }]
        }))
      }
      destroy() {
        var MM;
        this.ring.destroy(), this.uniforms.destroy(), null === (MM = this.ramp) || void 0 === MM || MM.destroy()
      }
    }
    class sn {
      constructor(MM, rM) {
        this.device = MM, this.resources = rM, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Wr.b)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (MM, rM) => (this.bindTarget(rM), {
            renderable: this.renderable,
            pipeline: ur(this.device, rM),
            draw: MM => rM === this.preparedTarget ? this.draw(MM) : 0
          })
        }
      }
      rebind(MM) {
        this.device = MM, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [rM, iM] of this.systems) {
          const OM = new Wn(MM, rM, iM.frameIndex, this.bindings),
            SM = rM.ring.drawCount();
          SM > 0 && OM.upload(0, SM), this.systems.set(rM, OM)
        }
      }
      build() {
        const {
          device: MM
        } = this, rM = MM.createBindGroupLayout({
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
        this.frameLayout = MM.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = MM.createPipelineLayout({
          bindGroupLayouts: [er(MM), rM, this.frameLayout]
        }), this.module = MM.createShaderModule({
          label: "particles",
          code: Rn
        });
        const iM = MM.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        MM.queue.writeTexture({
          texture: iM
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: rM,
          rampSampler: MM.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: iM.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get LSM() {
        return this.systems.size
      }
      reset() {
        for (const MM of this.systems.keys()) MM.reset()
      }
      describePendingWork() {
        return (0, Cn.f)(this.systems.keys(), "Lite")
      }
      uZ(MM, rM) {
        const iM = new Cn.b(MM, rM, this);
        return this.systems.set(iM, new Wn(this.device, iM, this.allocateFrameIndex(), this.bindings)), iM
      }
      rMM(MM, rM) {
        for (const iM of this.systems.keys()) iM.rMM(MM, rM)
      }
      canDraw(MM) {
        const rM = this.systems.get(MM),
          iM = MM.texture ? this.resources.boundTexture(MM.texture) : null;
        if (!rM || !iM || !this.targetPipelines) return !1;
        if (rM.texture = iM, rM.pipelines.length = 0, !Sr(MM.blendMode)) return this.warnOnce(`blend:${MM.blendMode}`, `particle blend mode ${MM.blendMode} is not drawn (${MM.name})`), !0;
        const OM = (0, BM.k)(MM.blendMode);
        for (const SM of OM) {
          const MM = this.pipelineFor(SM);
          if (!1 === MM) return rM.pipelines.length = 0, !0;
          MM && rM.pipelines.push(MM)
        }
        return rM.pipelines.length === OM.length
      }
      disposeStopped(MM) {
        MM.dispose()
      }
      remove(MM) {
        const rM = this.systems.get(MM);
        rM && (this.systems.delete(MM), rM.destroy(), this.freeFrameIndices.push(rM.frameIndex))
      }
      prepare(MM) {
        const rM = MM.animationRatio || 1;
        Rr(this.renderable._worldCenter, MM, wr), this.preparedTarget = this.target, this.draws.length = 0;
        let iM = 0;
        for (const OM of this.systems.values()) {
          const MM = OM.system;
          if (!MM.animateIfActive(rM)) continue;
          if (MM.ring.takeUploads(OM.upload), !MM.hasLiveParticles() || 0 === OM.pipelines.length) continue;
          OM.writeUniforms(this.warnOnce), OM.bind();
          const SM = 64 * OM.frameIndex;
          OM.count = MM.ring.drawCount(), un(MM, this.frameData, this.frameBits, SM), iM = Math.max(iM, SM + 64), this.draws.push(OM)
        }
        iM > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, iM)
      }
      draw(MM) {
        let rM = 0,
          iM = null;
        for (const OM of this.draws) {
          MM.setBindGroup(1, OM.bindGroup), MM.setBindGroup(2, this.frameBindGroup, [256 * OM.frameIndex]);
          for (const SM of OM.pipelines) SM !== iM && (MM.setPipeline(SM), iM = SM), MM.draw(4, OM.count), rM++
        }
        return rM
      }
      bindTarget(MM) {
        this.target = MM;
        const rM = `${MM._colorFormat}|${MM._depthStencilFormat}|${MM._depthCompare}|${MM._sampleCount}`;
        let iM = this.pipelines.get(rM);
        iM || (iM = new Map, this.pipelines.set(rM, iM)), this.targetPipelines = iM
      }
      pipelineFor(MM) {
        var rM;
        const iM = this.targetPipelines,
          OM = iM.get(MM);
        if (void 0 !== OM) return OM;
        iM.set(MM, null);
        const SM = this.target,
          jM = MM === BM.e,
          aM = null !== (rM = SM._depthCompare) && void 0 !== rM ? rM : br,
          {
            device: PM
          } = this;
        return PM.createRenderPipelineAsync({
          label: `particles-${MM}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: lr({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: jM ? 1 : 0
            }
          }, SM, jr((0, BM.i)(MM))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: SM._depthStencilFormat ? {
            format: SM._depthStencilFormat,
            depthCompare: aM,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: SM._sampleCount
          }
        }).then((rM => {
          iM.set(MM, rM)
        }), (rM => {
          iM.set(MM, !1), console.error("Lite particle pipeline failed", rM), zr(PM, "particles", `blend-${MM}`, rM)
        })), null
      }
      allocateFrameIndex() {
        const MM = this.freeFrameIndices.pop();
        if (void 0 !== MM) return MM;
        const rM = this.nextFrameIndex++;
        if (64 * (rM + 1) > this.frameData.length) {
          const MM = new Float32Array(2 * this.frameData.length);
          MM.set(this.frameData), this.frameData = MM, this.frameBits = new Uint32Array(MM.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return rM
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
    class Dn {
      constructor(MM, rM, iM, OM, SM) {
        this.lite = MM, this.canvas = rM, this.info = iM, this.resources = SM, this.LOM = !1, this.needPOTTextures = !1, this.I6 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = rM.width, this.renderHeight = rM.height, this.caps = {
          maxTextureSize: OM.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: OM.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(MM) {
        this.lite = MM, (0, NM.p)(MM, this.renderWidth, this.renderHeight)
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
      setSize(MM, rM) {
        if (this.renderWidth === MM && this.renderHeight === rM) return !1;
        const iM = this.renderWidth,
          OM = this.renderHeight;
        this.renderWidth = MM, this.renderHeight = rM;
        const SM = this.lite;
        if (null === SM) return !0;
        try {
          (0, NM.p)(SM, MM, rM)
        } catch (jM) {
          if (jM instanceof DOMException && "InvalidStateError" === jM.name) {
            this.renderWidth = iM, this.renderHeight = OM;
            try {
              (0, NM.p)(SM, iM, OM)
            } catch {
              this.canvas.width = iM, this.canvas.height = OM
            }
            return console.warn("WebGPU could not allocate render targets for resize", MM, rM, jM.message), !1
          }
          throw jM
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
        const MM = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : MM - this.lastFrameTime, this.lastFrameTime = MM
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(MM, rM) {
        const iM = document.createElement("canvas");
        return iM.width = MM, iM.height = rM, iM
      }
      o9(MM, rM) {
        var iM;
        return null !== (iM = this.resources.o9.get(MM)) && void 0 !== iM ? iM : new mr(this.resources, MM, rM)
      }
      atlasArrays(MM) {
        return this.resources.atlasArrays(MM)
      }
    }
    class kn {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(MM) {
        this.fov = MM.fov, this.nearPlane = MM.near, this.farPlane = MM.far;
        const rM = MM.worldMatrix;
        for (let iM = 0; iM < 16; iM++)
          if (this.worldMatrix[iM] !== rM[iM]) return this.worldMatrix.set(rM), void this.worldMatrixVersion++
      }
    }
    class Zn {
      constructor(MM, rM, iM, OM) {
        this.canvas = rM, this.options = iM, this.XrM = void 0, this.backendName = "WebGPU (Lite)", this.n_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new kn, this.lastFrameTime = 0, this.engine = void 0, this.YJ = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.CL = null, this.firstTerrain = null, this.trialFrames = 0, this.install(MM);
        const {
          resources: SM,
          meshes: jM
        } = MM;
        this.resources = SM, this.particles = MM.particles, this.XrM = new Dn(MM.engine, rM, OM, MM.device.limits, SM), (0, gM.B)({
          sQ: MM => {
            WM(MM) && SM.textureSlot(MM)
          },
          loaded: MM => WM(MM) ? SM.textureLoaded(MM) : null,
          canvasUpdated: (MM, rM, iM) => {
            WM(MM) && SM.canvasUpdated(MM, rM, iM)
          }
        }), this.n_ = jM.n_, this.modelMeshes = jM.modelMeshes
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
      install(MM) {
        this.engine = MM.engine, this.YJ = MM.YJ, this.sceneTask = MM.sceneTask, this.device = MM.device, this.liteTerrain = MM.terrain, this.meshes = MM.meshes, this.sunShadow = MM.sunShadow;
        const rM = new vM(MM.device.lost);
        this.refusals = rM, rM.deviceLost.then((() => {
          var rM;
          rM = MM.device, nr.add(rM)
        })), MM.YJ.camera = this.camera
      }
      async rebuild() {
        var MM, rM, iM, OM, SM;
        const jM = await An();
        this.halted = !0, this.liteTerrain.retire(), null === (MM = this.sunShadow) || void 0 === MM || MM.dispose(), this.XrM.detach();
        try {
          (0, AM.c)(this.engine)
        } catch (zM) {
          console.warn("Lite: disposing the lost device's engine threw", zM)
        }
        const aM = {
            width: this.XrM.renderWidth,
            height: this.XrM.renderHeight
          },
          PM = await xn(this.canvas, this.options, aM, jM),
          nM = Ur(PM),
          QM = vn(nM);
        try {
          this.resources.rebind(PM, nM), this.particles.rebind(nM), this.n_.dropSteady();
          const MM = {
              resources: this.resources,
              particles: this.particles,
              n_: this.n_,
              modelMeshes: this.modelMeshes
            },
            rM = await Fn(PM, nM, this.options, MM),
            iM = QM();
          if (null !== iM) throw new Error(`WebGPU device lost while Lite was rebuilding (${iM.reason}): ${iM.message}`);
          const {
            r: OM,
            g: SM,
            b: jM
          } = this.YJ.clearColor;
          this.install(rM), this.setClearColour(OM, SM, jM), this.XrM.rebind(PM)
        } catch (zM) {
          throw nM.destroy(), zM
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (rM = this.CL) || void 0 === rM || rM.resize(), null === (iM = this.CL) || void 0 === iM || null === (OM = iM.Cm) || void 0 === OM || null === (SM = OM.kU) || void 0 === SM || SM.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((MM, rM) => {
          this.firstTerrain = {
            drawn: MM,
            failed: rM
          }
        }))
      }
      get castsEntitySunShadows() {
        var MM, rM;
        return null !== (MM = null === (rM = this.sunShadow) || void 0 === rM ? void 0 : rM.tracesEntities) && void 0 !== MM && MM
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(MM) {
        this.CL = MM, this.modelMeshes.attach(MM.model, MM.sceneMirror);
        const rM = MM.YJ;
        this.setClearColour(rM.clearColor.r, rM.clearColor.g, rM.clearColor.b), rM.draw = () => {
          this.drawFrame(MM, rM)
        }
      }
      get lL() {
        return !this.refusals.lost && !this.halted
      }
      render(MM) {
        if (this.lL) {
          try {
            this.XrM.WU(), MM.YJ.render()
          } catch (rM) {
            throw this.refusals.frameFailed(rM), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(rM), this.firstTerrain = null), rM
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var MM, rM, iM, OM;
        const SM = [...this.particles.describePendingWork(), ...null !== (MM = null === (rM = this.sunShadow) || void 0 === rM ? void 0 : rM.describePendingWork()) && void 0 !== MM ? MM : []],
          jM = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (iM = this.terrain.sceneDepth) && void 0 !== iM && iM.compiling ? 1 : 0) + (null !== (OM = this.terrain.shadowMask) && void 0 !== OM && OM.compiling ? 1 : 0);
        jM > 0 && SM.push(`${jM} Lite pipelines compiling`);
        const aM = this.terrain.buffersAwaitingVerdict;
        aM > 0 && SM.push(`${aM} Lite terrain buffers awaiting their out-of-memory verdict`);
        const PM = this.resources.texturesLoading;
        return PM > 0 && SM.push(`${PM} Lite textures loading`), SM
      }
      prepareTexture(MM) {
        return null !== this.resources.boundTexture(MM) || this.resources.textureFailed(MM)
      }
      drawFrame(MM, rM) {
        var iM, OM, SM, jM, aM, PM;
        const nM = lP(MM);
        this.camera.copyFromView(nM), this.setClearColour(nM.clearColour[0], nM.clearColour[1], nM.clearColour[2]), null === (iM = this.sunShadow) || void 0 === iM || iM.prepare(MM.Cm, nM.eye, null !== (OM = MM.Cm.nh) && void 0 !== OM ? OM : null), this.terrain.prepare(MM, nM), null === (SM = this.terrain.sceneDepth) || void 0 === SM || SM.setPlanes(nM.near, nM.far), null === (jM = this.terrain.shadowMask) || void 0 === jM || jM.prepare(nM), OP(this.sceneTask), this.meshes.prepare(rM, nM, MM.model.earthSky, null !== (aM = MM.Cm.nh) && void 0 !== aM ? aM : null), this.particles.prepare(nM);
        const QM = performance.now();
        this.resources.flushUploads(), null === (PM = this.sunShadow) || void 0 === PM || PM.traceEntities(this.meshes);
        try {
          (0, NM.n)(this.engine, this.lastFrameTime > 0 ? QM - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = QM, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(QM), this.firstTerrain = null)
      }
      setClearColour(MM, rM, iM) {
        const OM = this.YJ.clearColor;
        OM.r = MM, OM.g = rM, OM.b = iM, OM.a = 1
      }
    }

    function fn(MM) {
      const rM = {};
      for (const iM in MM.limits) {
        const OM = MM.limits[iM];
        "number" === typeof OM && (rM[iM] = OM)
      }
      return rM
    }
    const Yn = "WebGPU device lost while Lite was starting";
    async function Nn(MM, rM) {
      const iM = await An(),
        OM = iM.info,
        SM = {
          vendor: (null === OM || void 0 === OM ? void 0 : OM.vendor) || "unknown vendor",
          renderer: (null === OM || void 0 === OM ? void 0 : OM.architecture) || "unknown renderer",
          version: (null === OM || void 0 === OM ? void 0 : OM.description) || "unknown version"
        };
      MM.style.background = "black";
      const jM = await xn(MM, rM, rM.bufferSize, iM),
        aM = Ur(jM),
        PM = vn(aM);
      try {
        const iM = new Zn(await Fn(jM, aM, rM, null), MM, rM, SM),
          OM = PM();
        if (null !== OM) {
          const {
            reason: MM,
            message: rM
          } = OM;
          throw Object.assign(new Error(`${Yn} (${MM}): ${rM}`), {
            fallbackReason: Yn
          })
        }
        return iM
      } catch (nM) {
        throw aM.destroy(), null === PM() ? nM : (0, iP.g)(nM, "device")
      }
    }
    async function An() {
      const MM = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!MM) throw (0, iP.g)(new Error("No WebGPU adapter"), "no_adapter");
      return MM
    }
    async function xn(MM, rM, iM, OM) {
      let SM;
      try {
        SM = await (0, NM.f)(MM, {
          msaaSamples: rM.biM ? 4 : 1,
          requiredLimits: fn(OM),
          alphaMode: "premultiplied"
        })
      } catch (aM) {
        throw (0, iP.g)(aM, "#47" === (null === (jM = aM) || void 0 === jM ? void 0 : jM.message) ? "no_adapter" : "device")
      }
      var jM;
      return null !== iM && (0, NM.p)(SM, iM.width, iM.height), SM
    }

    function vn(MM) {
      let rM = null;
      return MM.lost.then((MM => {
        rM = MM, console.error(`WebGPU device lost (${MM.reason}): ${MM.message}`)
      })), () => rM
    }
    async function Fn(MM, rM, iM, OM) {
      var SM, jM;
      let {
        sceneDepth: aM,
        sunShadow: PM
      } = iM;
      const nM = (0, xM.e)(MM),
        QM = null !== (SM = null === OM || void 0 === OM ? void 0 : OM.resources) && void 0 !== SM ? SM : new ca(MM, rM),
        zM = new rn(rM),
        LM = new ka(rM, QM, (MM => function(MM, rM) {
          for (const OM of Gr(MM)) {
            var iM;
            if (OM._targetSignature === rM) return null !== (iM = OM._sceneBG) && void 0 !== iM ? iM : null
          }
          return null
        }(nM, MM)), null === OM || void 0 === OM ? void 0 : OM.n_, null === OM || void 0 === OM ? void 0 : OM.modelMeshes),
        mM = null !== (jM = null === OM || void 0 === OM ? void 0 : OM.particles) && void 0 !== jM ? jM : new sn(rM, QM);
      for (const JM of function(MM, rM, iM) {
          return [rM.opaqueRenderable, MM.opaqueRenderable, MM.skyLastRenderable, iM.renderable, rM.transparentRenderable, MM.transparentRenderable, MM.frontRenderable]
        }(LM, zM, mM)) Er(nM, JM);
      const HM = function(MM) {
        for (const rM of Gr(MM))
          if ("YJ" === rM.name) return rM;
        throw new Error("Lite: the scene has no render task named scene")
      }(nM);
      aM && zM.installSceneDepth(HM, MM);
      const hM = PM ? new Gn(rM, PM.entities) : null;
      return zM.sunShadow = hM, hM && null !== PM && void 0 !== PM && PM.entities && (zM.shadowMask = new DP(rM, HM, MM, zM)), LM.sunShadow = hM, await (0, xM.f)(nM), {
        engine: MM,
        YJ: nM,
        sceneTask: HM,
        device: rM,
        terrain: zM,
        meshes: LM,
        sunShadow: hM,
        resources: QM,
        particles: mM
      }
    }
  },
  41782: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      f: () => OM,
      h: () => mM,
      i: () => zM,
      l: () => dM,
      n: () => jM,
      p: () => PM,
      q: () => nM,
      r: () => aM,
      s: () => JM,
      w: () => HM,
      x: () => hM
    });
    const OM = 3,
      SM = 0,
      jM = 1,
      aM = 2,
      PM = {
        uniform: 3,
        Xm: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      nM = 10,
      QM = "BloxdPackInputs",
      zM = "bloxdPackInputs",
      LM = [{
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
      mM = 80;

    function HM() {
      const MM = LM.map((MM => {
        let {
          name: rM,
          type: iM
        } = MM;
        return `    ${rM}: ${iM},\n`
      })).join("");
      return `struct ${QM} {\n${MM}}\n@group(${OM}) @binding(${SM}) var<uniform> ${zM}: ${QM};\n`
    }

    function hM(MM, rM) {
      const iM = new DataView(MM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, mM),
        [OM, SM, jM, aM, PM, nM] = LM;
      iM.setFloat32(OM.offset, rM.seconds, !0), iM.setUint32(SM.offset, rM.lit ? 1 : 0, !0);
      for (let QM = 0; QM < 3; QM++) iM.setInt32(jM.offset + 4 * QM, rM.renderOffset[QM], !0), iM.setFloat32(aM.offset + 4 * QM, rM.mMM[QM], !0), iM.setFloat32(PM.offset + 4 * QM, rM.eyePosition[QM], !0), iM.setFloat32(nM.offset + 4 * QM, rM.shadowDirection[QM], !0)
    }

    function JM(MM) {
      const rM = new Uint32Array(Math.max(1, MM.length));
      return MM.forEach(((MM, iM) => {
        let {
          id: OM,
          rotation: SM
        } = MM;
        rM[iM] = 65535 & OM | (3 & SM) << 16
      })), rM
    }
    const dM = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);