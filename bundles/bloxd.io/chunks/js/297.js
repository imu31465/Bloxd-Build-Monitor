export const id = 297;
export const ids = [297];
export const modules = {
  44494: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => EV,
      f: () => pV,
      g: () => yV,
      k: () => nV
    });
    var JV = xV(38387),
      YV = xV(39899),
      UV = xV(39892);

    function yV(VV, eV, xV, JV) {
      const YV = UV.r;
      eV.fill(0), VV.gravity.toArray(eV, YV.gravity), VV.colorDead.toArray(eV, YV.colorDead), xV[YV.ramp] = VV.useRampGradients ? 1 : 0;
      const yV = VV.getColorGradients(),
        pV = vV(VV, yV, "colour", JV);
      xV[YV.colorCount] = pV;
      for (let UV = 0; UV < pV; UV++) {
        var QV;
        const VV = yV[rV(yV, UV)];
        eV[YV.colorPositions + UV] = VV.gradient, VV.color1.toArray(eV, YV.color1 + 4 * UV), (null !== (QV = VV.color2) && void 0 !== QV ? QV : VV.color1).toArray(eV, YV.color2 + 4 * UV)
      }
      const nV = VV.getVelocityGradients(),
        wV = vV(VV, nV, "ME", JV);
      xV[YV.velocityCount] = wV;
      for (let UV = 0; UV < wV; UV++) jV(eV, YV.ME + 4 * UV, nV[rV(nV, UV)]);
      const ZV = VV.useRampGradients ? VV.getColorRemapGradients() : null,
        kV = vV(VV, ZV, "colour remap", JV);
      xV[YV.remapCount] = kV;
      for (let UV = 0; UV < kV; UV++) jV(eV, YV.remap + 4 * UV, ZV[rV(ZV, UV)])
    }

    function pV() {
      return {
        key: [],
        texels: new Uint8Array(4 * UV.j)
      }
    }
    const QV = [];

    function nV(VV, eV) {
      return wV(VV, QV), !BV(QV, eV.key) && (eV.key.length = 0, eV.key.push(...QV), eV.key.length > 0 && function(VV, eV) {
        for (let xV = 0; xV < UV.j; xV++) YV.i.GetCurrentGradient(xV / UV.j, VV, ((VV, eV, xV) => {
          JV.Color3.LerpToRef(VV.color, eV.color, xV, ZV)
        })), eV[4 * xV] = 255 * ZV.r, eV[4 * xV + 1] = 255 * ZV.g, eV[4 * xV + 2] = 255 * ZV.b, eV[4 * xV + 3] = 255
      }(VV.getRampGradients(), eV.texels), !0)
    }

    function wV(VV, eV) {
      eV.length = 0;
      const xV = VV.useRampGradients ? VV.getRampGradients() : null;
      if (null !== xV && void 0 !== xV && xV.length) {
        eV.push(xV.length);
        for (const VV of xV) eV.push(VV.gradient, VV.color.r, VV.color.g, VV.color.b)
      }
    }
    const ZV = new JV.Color3;

    function vV(VV, eV, xV, JV) {
      return eV ? eV.length > UV.e ? (JV(`particleStops:${xV}`, `GPU particles use the first 2 and last ${UV.e-2} of more than ${UV.e} ${xV} gradient stops (${VV.name})`), UV.e) : eV.length : 0
    }

    function rV(VV, eV) {
      return eV < 2 || VV.length <= UV.e ? eV : VV.length - UV.e + eV
    }
    const kV = new Float32Array(UV.p),
      bV = new Uint32Array(kV.buffer);

    function EV(VV, eV, xV) {
      return yV(VV, kV, bV, xV), eV && BV(bV, eV) ? null : bV.slice()
    }

    function BV(VV, eV) {
      if (VV.length !== eV.length) return !1;
      for (let xV = 0; xV < VV.length; xV++)
        if (VV[xV] !== eV[xV]) return !1;
      return !0
    }

    function jV(VV, eV, xV) {
      var JV;
      VV[eV] = xV.gradient, VV[eV + 1] = xV.factor1, VV[eV + 2] = null !== (JV = xV.factor2) && void 0 !== JV ? JV : xV.factor1
    }
  },
  42490: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      const JV = eV * eV * 4,
        YV = VV[0].layers,
        UV = YV * (VV.length - 1) + VV[VV.length - 1].layers,
        yV = new Uint8Array(UV * JV);
      VV.forEach(((eV, xV) => {
        const UV = xV + 1 < VV.length ? Math.min(eV.layers, YV) : eV.layers;
        yV.set(new Uint8Array(eV.pixels.buffer, eV.pixels.byteOffset, UV * JV), xV * YV * JV)
      }));
      const pV = Math.max(1, Math.min(UV, xV || UV));
      if (pV === UV) return [{
        pixels: yV,
        layers: UV
      }];
      const QV = [];
      for (let nV = 0; nV < UV; nV += pV) {
        const VV = Math.min(UV, nV + pV);
        QV.push({
          pixels: yV.slice(nV * JV, VV * JV),
          layers: VV - nV
        })
      }
      return QV
    }
    xV.d(eV, {
      e: () => JV,
      g: () => UV
    });
    const YV = new WeakMap;

    function UV(VV, eV, xV) {
      var JV, UV;
      const yV = null !== (JV = YV.get(VV)) && void 0 !== JV ? JV : new Map;
      YV.set(VV, yV);
      const pV = null !== (UV = yV.get(eV[0])) && void 0 !== UV ? UV : [];
      yV.set(eV[0], pV);
      const QV = pV.find((VV => VV.urls.length === eV.length && VV.urls.every(((VV, xV) => VV === eV[xV]))));
      if (QV) return QV.built;
      const nV = {
        urls: [...eV],
        built: xV()
      };
      return pV.push(nV), nV.built.catch((() => {
        pV.splice(pV.indexOf(nV), 1)
      })), nV.built
    }
  },
  44490: (VV, eV, xV) => {
    function JV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const eV = new Set;
      return (xV, JV) => {
        eV.has(xV) || (eV.add(xV), console.warn(VV + JV))
      }
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  44547: (VV, eV, xV) => {
    xV.d(eV, {
      createLiteRendererAsync: () => CQ,
      liteBabylonBackend: () => cV,
      setPipelineFailureHook: () => pe
    });
    var JV = xV(38387),
      YV = xV(38688),
      UV = xV(39055),
      yV = xV(38433),
      pV = xV(39066);
    class QV extends pV.e {
      constructor() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        super(...eV), this.color = new JV.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: eV[0].dD().getUniqueId(),
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
          needAlphaBlendingForMesh: VV => VV.visibility < 1 || VV.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const nV = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      wV = VV => 1 << nV.indexOf(VV),
      ZV = wV("VERTEXCOLOR"),
      vV = wV("INSTANCES"),
      rV = wV("THIN_INSTANCES"),
      kV = wV("INSTANCESCOLOR"),
      bV = wV("FOG"),
      EV = wV("LITE_FRONT_LAYER");

    function BV(VV, eV, xV, JV) {
      let YV = 0;
      return VV.isVerticesDataPresent("color") && (YV |= ZV), "none" !== eV && (YV |= vV), "thin" === eV && (YV |= rV, VV.isVerticesDataPresent("instanceColor") && (YV |= kV)), JV.fogEnabled && VV.applyFog && 0 !== JV.fogMode && (YV |= bV), xV >= 1 && (YV |= EV), YV
    }

    function jV(VV, eV) {
      VV.updateColor4("color", eV.color, eV.alpha)
    }
    var qV = xV(38994),
      tV = xV(38502),
      FV = xV(38445),
      TV = xV(38399),
      PV = xV(38985),
      AV = xV(38991),
      NV = xV(38421),
      XV = xV(38424),
      MV = xV(38437);
    const zV = TV.d.GLSL;
    class GV {
      constructor(VV, eV) {
        this.name = VV, this.yE = eV, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.eC = {
          addOnce: VV => {
            this.disposers.push(VV)
          }
        }, this.uniqueId = eV.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      dD() {
        return this.yE
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
      needAlphaBlendingForMesh(VV) {
        return (0, NV.T)(this.model, VV.visibility, VV.hasVertexAlpha)
      }
      needAlphaTestingForMesh(VV) {
        return (0, NV.V)(this.model, VV.visibility, VV.hasVertexAlpha)
      }
      dispose() {
        (0, tV.h)(this);
        for (const VV of this.disposers.splice(0)) VV()
      }
      get model() {
        return (0, NV.eb)(this)
      }
    }
    const WV = new WeakSet;

    function RV(VV) {
      return WV.has(VV)
    }

    function gV(VV) {
      WV.add(VV)
    }
    const DV = {
      create: (VV, eV) => ((0, FV.m)(VV, new GV(VV.name, eV)), XV.e.defines()),
      write: () => {},
      addFeature: (VV, eV) => {
        const xV = VV.mirror;
        eV.feature === AV.j && eV.state.dirLightCount > 0 && (VV.disableLighting = !0, (0, NV.bb)(VV)), "BLOXD_LIGHTING" in eV.defines && (0, tV.g)(xV), eV.feature === PV.h && ((0, qV.f)(eV.state, zV), function(VV, eV) {
          const xV = VV.dD().sk();
          setTimeout((() => {
            xV.atlasArrays(eV.sources).then((xV => {
              (0, qV.b)(VV, eV, xV.map((VV => ({
                atlas: VV,
                layers: VV.layers
              }))), xV[0].layerWidth, zV)
            })).catch((VV => {
              console.error("Failed to build the atlas's texture arrays", VV)
            }))
          }))
        }(xV, eV.state))
      },
      texture: (VV, eV, xV) => {
        let {
          data: JV,
          sets: YV
        } = xV;
        var UV;
        (gV(VV), JV) && (VV.uvSet = null !== (UV = null === YV || void 0 === YV ? void 0 : YV.coordinatesIndex) && void 0 !== UV ? UV : 0, (0, FV.P)(VV.matrix, null !== YV && void 0 !== YV ? YV : {}))
      },
      cube: gV,
      canvas: (VV, eV, xV) => {
        let {
          width: JV,
          height: YV,
          mipmaps: UV,
          samplingMode: yV = MV.h.trilinear,
          hasAlpha: pV = !1,
          wrap: QV = MV.d.clamp
        } = xV;
        const nV = VV.sk().createCanvas(JV, YV),
          wV = new MV.l("2d", {
            kind: "canvas",
            width: JV,
            height: YV,
            canvas: nV
          }, {
            samplingMode: yV,
            wrapU: QV,
            wrapV: QV,
            noMipmap: !UV,
            invertY: !0
          });
        return wV.hasAlpha = pV, gV(wV), wV
      }
    };
    var iV = xV(38519),
      CV = xV(38296);
    class aV {
      constructor(VV, eV, xV) {
        this.engine = VV, this.clearColor = eV, this.ambientColor = xV, this.onBeforeRenderObservable = new CV.c, this.onBeforeCameraRenderObservable = new CV.c, this.onAfterRenderObservable = new CV.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.lT = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      sk() {
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
      addPendingData(VV) {
        this.pending.push(VV)
      }
      removePendingData(VV) {
        const eV = this.pending.indexOf(VV); - 1 !== eV && this.pending.splice(eV, 1)
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

    function oV() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const cV = {
      uJV: oV,
      kUV: (VV, eV) => {
        const xV = new aV(VV.engine, JV.c.FromArray(eV.clearColor), JV.Color3.FromArray(eV.ambientColor));
        (0, yV.e)(DV, xV), VV.yE = xV,
          function(VV, eV) {
            const xV = Object.assign((0, iV.j)(VV, "camera"), {
              layerMask: 268435455
            });
            VV.model.nodes.setWorldSource(xV.row, VV.model.view.worldMatrix), VV.camera = eV.activeCamera = xV
          }(VV, xV), (0, YV.j)(VV, ((VV, eV, xV) => (0, UV.k)(VV, eV, xV, pV.e)))
      },
      nUV: () => {},
      setBabylonFog: () => {},
      EUV: oV,
      tUV: () => {},
      linesFromArrays: (VV, eV, xV) => (0, UV.k)(VV, eV, xV, QV),
      pE: () => {},
      qUV: oV
    };
    var hV = xV(44603),
      lV = xV(44612),
      LV = xV(44621);
    class fV {
      constructor(VV) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const eV = new Promise((VV => {
          this.refused = VV
        }));
        this.deviceLost = Promise.race([VV, eV]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(VV) {
        (function(VV) {
          const {
            name: eV,
            message: xV
          } = null !== VV && void 0 !== VV ? VV : {};
          return "InvalidStateError" === eV && "string" === typeof xV && xV.startsWith("GPUDevice.")
        })(VV) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: VV.message,
          framesRefused: !0
        }))
      }
    }
    var mV = xV(42490),
      KV = xV(39910);

    function HV(VV) {
      return Math.max(4, 4 * Math.ceil(VV / 4))
    }

    function uV(VV, eV, xV, JV) {
      const YV = VV.createBuffer({
        label: JV,
        size: HV(eV.byteLength),
        usage: xV,
        mappedAtCreation: !0
      });
      return new Uint8Array(YV.getMappedRange(), 0, eV.byteLength).set(new Uint8Array(eV.buffer, eV.byteOffset, eV.byteLength)), YV.unmap(), YV
    }

    function sV(VV, eV) {
      return Math.floor(Math.log2(Math.max(VV, eV))) + 1
    }

    function SV(VV, eV, xV, JV, YV, UV) {
      const yV = VV.createTexture({
          label: UV,
          size: {
            width: xV,
            height: JV,
            depthOrArrayLayers: YV
          },
          format: "rgba8unorm",
          mipLevelCount: sV(xV, JV),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        pV = (eV, xV, JV, UV) => {
          VV.queue.writeTexture({
            texture: yV,
            mipLevel: xV
          }, eV, {
            bytesPerRow: 4 * JV,
            rowsPerImage: UV
          }, {
            width: JV,
            height: UV,
            depthOrArrayLayers: YV
          })
        };
      pV(eV, 0, xV, JV);
      let QV = 1;
      for (const nV of function*(VV, eV, xV, JV) {
          let YV = VV,
            UV = eV,
            yV = xV;
          for (; UV > 1 || yV > 1;) {
            const VV = Math.max(1, UV >> 1),
              eV = Math.max(1, yV >> 1),
              xV = new Uint8Array(VV * eV * JV * 4),
              pV = 4 * UV;
            let QV = 0;
            for (let nV = 0; nV < JV; nV++) {
              const JV = nV * pV * yV;
              for (let nV = 0; nV < eV; nV++) {
                const eV = JV + Math.min(2 * nV, yV - 1) * pV,
                  wV = JV + Math.min(2 * nV + 1, yV - 1) * pV;
                for (let JV = 0; JV < VV; JV++) {
                  const VV = 4 * Math.min(2 * JV, UV - 1),
                    yV = 4 * Math.min(2 * JV + 1, UV - 1);
                  for (let JV = 0; JV < 4; JV++) xV[QV++] = YV[eV + VV + JV] + YV[eV + yV + JV] + YV[wV + VV + JV] + YV[wV + yV + JV] + 2 >> 2
                }
              }
            }
            yield {
              data: xV,
              width: VV,
              height: eV
            }, YV = xV, UV = VV, yV = eV
          }
        }(eV, xV, JV, YV)) pV(nV.data, QV++, nV.width, nV.height);
      return yV
    }
    const IV = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function dV(VV) {
      if (VV.startsWith("data:")) {
        const eV = VV.search(/[;,]/);
        return `data:${eV>5?VV.slice(5,eV):""} URL of ${VV.length} characters`
      }
      return VV.length > 80 ? `${VV.slice(0,80)}...` : VV
    }
    async function OV(VV) {
      const eV = await fetch(VV);
      if (!eV.ok) throw new Error(`${dV(VV)}: ${eV.status} ${eV.statusText}`);
      return createImageBitmap(await eV.blob(), IV)
    }
    async function Ve(VV) {
      const eV = await OV(VV),
        xV = new OffscreenCanvas(eV.width, eV.height),
        JV = xV.getContext("2d", {
          willReadFrequently: !0
        });
      if (!JV) throw new Error("No 2D context to decode an image");
      JV.drawImage(eV, 0, 0);
      const {
        data: YV
      } = JV.getImageData(0, 0, eV.width, eV.height);
      return eV.close(), {
        pixels: new Uint8Array(YV.buffer, YV.byteOffset, YV.byteLength),
        width: xV.width,
        height: xV.height
      }
    }

    function ee(VV, eV) {
      return (0, mV.g)(VV, eV.urls, (async () => {
        const xV = await Promise.all(eV.urls.map((async (VV, xV) => {
            var JV, YV, UV, yV, pV;
            return null !== (yV = null !== (YV = null === (UV = eV.pixels) || void 0 === UV ? void 0 : UV[xV]) && void 0 !== YV ? YV : null, pV = eV.layerWidth, JV = null !== yV && void 0 !== yV && yV.byteLength && pV && yV.byteLength % (pV * pV * 4) === 0 ? {
              pixels: yV,
              layerWidth: pV,
              layers: yV.byteLength / (pV * pV * 4)
            } : null) && void 0 !== JV ? JV : await async function(VV) {
              const {
                pixels: eV,
                width: xV
              } = await Ve(VV);
              return {
                pixels: eV,
                layerWidth: xV,
                layers: eV.byteLength / (xV * xV * 4)
              }
            }(VV)
          }))),
          JV = xV[0].layerWidth;
        return (0, mV.e)(xV, JV, VV.limits.maxTextureArrayLayers).map(((xV, YV) => {
          let {
            pixels: UV,
            layers: yV
          } = xV;
          return {
            texture: SV(VV, UV, JV, JV, yV, `atlas-${YV}-${dV(eV.urls[0])}`),
            layerWidth: JV,
            layers: yV
          }
        }))
      }))
    }
    const xe = new Map([
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
      Je = new Map([
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

    function Ye(VV) {
      for (const eV of (0, KV.l)(VV))
        if (!Je.has((0, KV.i)(eV))) return !1;
      return !0
    }

    function Ue(VV) {
      const eV = Je.get(VV);
      if (!eV) return null;
      const [xV, JV, YV] = eV;
      return {
        srcFactor: xe.get(xV),
        dstFactor: xe.get(JV),
        operation: YV
      }
    }
    let ye = null;

    function pe(VV) {
      ye = VV
    }
    const Qe = new WeakSet;

    function ne(VV) {
      return Qe.has(VV)
    }

    function we(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var UV;
      ne(VV) || (null === (UV = ye) || void 0 === UV || UV(eV, xV, JV, YV))
    }
    class Ze {
      constructor(VV) {
        this.resources = VV, this.matrixKey = {
          Jv: 0
        }, this.attributesKey = {
          Jv: 0
        }, this.inputs = Object.create(null);
        for (let eV = 0; eV < 4; eV++) this.inputs[`world${eV}`] = new ke(this.matrixKey, 16 * eV, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(VV, eV) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, VV, !0), eV && this.resources.vertexBufferCreated(this.attributesKey, eV, !0)
      }
    }
    class ve extends Ze {
      constructor(VV, eV, xV) {
        super(VV), this.mesh = eV, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const JV = this.inputs;
        let YV = 0;
        for (const {
            size: yV
          }
          of xV) YV += yV;
        for (const {
            name: yV,
            offset: pV,
            size: QV,
            type: nV
          }
          of xV) JV[yV] = new ke(this.attributesKey, 4 * pV, 4 * YV, QV, !0, nV);
        this.rowStride = YV, VV.MVV.set(eV, this);
        const UV = eV.isVerticesDataPresent;
        eV.isVerticesDataPresent = (VV, xV) => VV in JV || UV.call(eV, VV, xV)
      }
      attach(VV, eV) {
        this.matrices = VV, this.attributes = eV, this.bind(VV, eV), this.mirror(VV, VV.length, VV.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      QeV(VV) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, VV ? 64 * VV : void 0)
      }
      neV() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(VV, eV) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * VV, 16 * eV)
      }
      attributeRows(VV, eV) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, VV * this.rowStride, eV * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(VV, eV, xV) {
        const JV = this.mesh._thinInstanceDataStorage;
        JV.matrixData = VV, JV.matrixBufferSize = eV, JV.worldMatrices = null, JV.instancesCount = xV
      }
    }
    class re extends Ze {
      constructor(VV, eV, xV) {
        var JV, YV, UV, yV;
        super(VV), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (JV = null === xV || void 0 === xV ? void 0 : xV.interleavedKinds) && void 0 !== JV ? JV : null, this.offsets = null !== (YV = null === xV || void 0 === xV ? void 0 : xV.interleavedOffsets) && void 0 !== YV ? YV : [], this.rowStride = null !== (UV = null === xV || void 0 === xV ? void 0 : xV.interleavedRowStride) && void 0 !== UV ? UV : 0, null === (yV = this.layout) || void 0 === yV || yV.forEach(((VV, eV) => {
          this.inputs[VV] = new ke(this.attributesKey, 4 * this.offsets[eV], 4 * this.rowStride, xV.strides[VV])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), VV.batchUploads.set(eV, this), eV.eC.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(VV) {
        const eV = this.packedBatch;
        return eV.renderSelf ? 0 === VV ? this.packedSource : eV.instances[VV - 1] : eV.instances[VV]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(VV, eV, xV, JV) {
        const YV = (eV.renderSelf ? 1 : 0) + eV.rows.length;
        if (this.frame = JV, this.count = YV, this.packedSource = VV, this.packedBatch = eV, 0 === YV) return;
        if (VV.getWorldMatrix(), 16 * YV > this.matrices.length) {
          let VV = this.matrices.length / 16;
          for (; VV < YV;) VV *= 2;
          this.matrices = new Float32Array(16 * VV), this.attributes &&= new Float32Array(VV * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let UV = 0;
        eV.renderSelf && this.packRow(UV++, VV, eV.row, xV);
        for (let yV = 0; yV < eV.rows.length; yV++) this.packRow(UV++, eV.instances[yV], eV.rows[yV], xV);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * YV), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, YV * this.rowStride)
      }
      packRow(VV, eV, xV, JV) {
        const YV = this.matrices;
        if (xV < 0) YV.set(eV.getWorldMatrix().m, 16 * VV);
        else
          for (let nV = 0; nV < 16; nV++) YV[16 * VV + nV] = JV[16 * xV + nV];
        const UV = this.attributes;
        if (!UV) return;
        const yV = eV.sC,
          pV = this.layout;
        for (let nV = 0; nV < pV.length; nV++) {
          var QV;
          const eV = null !== (QV = yV[pV[nV]]) && void 0 !== QV ? QV : 0,
            xV = VV * this.rowStride + this.offsets[nV];
          eV.toArray ? eV.toArray(UV, xV) : eV.copyToArray ? eV.copyToArray(UV, xV) : UV[xV] = eV
        }
      }
    }
    class ke {
      constructor(VV, eV, xV, JV) {
        let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = VV, this.byteOffset = eV, this.byteStride = xV, this.size = JV, this.instanced = YV, this.type = UV, this.normalized = yV
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
    const be = "CANVAS_ALPHA_ONE",
      Ee = `override ${be}: bool = false;`,
      Be = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function je(VV, eV, xV) {
      var JV;
      let YV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const UV = null !== (JV = eV._colorFormat) && void 0 !== JV ? JV : "bgra8unorm",
        yV = YV ? 15 : 0;
      return xV ? {
        ...VV,
        targets: [{
          format: UV,
          blend: {
            color: xV,
            alpha: Be
          },
          writeMask: yV
        }]
      } : {
        ...VV,
        constants: {
          ...VV.constants,
          [be]: 1
        },
        targets: [{
          format: UV,
          writeMask: yV
        }]
      }
    }

    function qe(VV, eV) {
      VV._renderables.push(eV)
    }

    function te(VV) {
      return VV._device
    }

    function Fe(VV) {
      var eV, xV;
      return null !== (eV = null === (xV = VV._frameGraph) || void 0 === xV ? void 0 : xV._tasks) && void 0 !== eV ? eV : []
    }

    function Te(VV) {
      return VV._currentEncoder
    }

    function Pe(VV) {
      return VV.createBindGroupLayout({
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
    const Ae = "greater-equal",
      Ne = 2e5,
      Xe = 1e5,
      Me = new WeakMap;

    function ze(VV, eV) {
      let xV = Me.get(VV);
      if (!xV) {
        xV = {
          module: VV.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Me.set(VV, xV)
      }
      const JV = `${eV._colorFormat}|${eV._depthStencilFormat}|${eV._sampleCount}`;
      let YV = xV.pipelines.get(JV);
      if (!YV) {
        var UV;
        const {
          module: yV
        } = xV;
        YV = VV.createRenderPipeline({
          label: `placeholder ${JV}`,
          layout: VV.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: yV,
            entryPoint: "v"
          },
          fragment: {
            module: yV,
            entryPoint: "f",
            targets: [{
              format: null !== (UV = eV._colorFormat) && void 0 !== UV ? UV : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: eV._depthStencilFormat ? {
            format: eV._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: eV._sampleCount
          }
        }), xV.pipelines.set(JV, YV)
      }
      return YV
    }

    function Ge(VV, eV, xV) {
      const JV = eV.eye,
        YV = eV.viewMatrix;
      VV[0] = JV[0] + YV[2] * xV, VV[1] = JV[1] + YV[6] * xV, VV[2] = JV[2] + YV[10] * xV
    }
    var We = xV(39106),
      Re = xV(44490),
      ge = xV(38408);
    const De = Math.PI,
      ie = De / 1.95,
      Ce = [5e-4 / 94, 125e-7, 5e-4 / 18],
      ae = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((VV => {
        let [eV, xV] = VV;
        return .434 * De * Math.pow(2 * De / eV, 2) * xV
      }));

    function oe(VV, eV, xV) {
      const {
        up: JV,
        mieDirectionalG: YV
      } = VV, UV = 1 - le(1 - Math.exp(eV[1] / 45e4), 0, 1), yV = VV.rayleigh - (1 - UV), pV = Math.hypot(eV[0], eV[1], eV[2]), QV = pV > 0 ? 1 / pV : 0, nV = xV.sunDir;
      for (let rV = 0; rV < 3; rV++) nV[rV] = eV[rV] * QV;
      const wV = nV[0] * JV[0] + nV[1] * JV[1] + nV[2] * JV[2],
        ZV = 1e3 * Math.max(0, 1 - Math.exp(-(ie - Math.acos(le(wV, -1, 1))) / 1.5));
      xV.sunE = ZV;
      const vV = .2 * VV.turbidity * 1e-17 * VV.mieCoefficient;
      for (let rV = 0; rV < 3; rV++) {
        const VV = Ce[rV] * yV,
          eV = ae[rV] * vV,
          JV = ZV / (VV + eV);
        xV.inScatterR[rV] = VV * JV, xV.inScatterM[rV] = eV * JV, xV.extinctionBeta[rV] = 8400 * VV + 1250 * eV
      }
      return xV.sunsetMix = le(Math.pow(1 - wV, 5), 0, 1), xV.sunDiscE = 19e3 * ZV, xV.mieScale = (1 - YV * YV) / (4 * De), xV.mieBase = 1 + YV * YV, xV.mieSlope = 2 * YV, xV
    }
    const ce = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const he = 1 / function(VV) {
      const {
        A: eV,
        B: xV,
        C: JV,
        D: YV,
        E: UV,
        F: yV
      } = ce;
      return (VV * (eV * VV + JV * xV) + YV * UV) / (VV * (eV * VV + xV) + YV * yV) - UV / yV
    }(1e3);

    function le(VV, eV, xV) {
      return Math.min(Math.max(VV, eV), xV)
    }
    const Le = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function fe(VV, eV) {
      const xV = new Map(eV),
        JV = [],
        YV = [],
        UV = () => 0 === YV.length || YV[YV.length - 1].active;
      let yV = null;
      const pV = () => {
        const VV = [...xV].filter((VV => {
            let [, eV] = VV;
            return !0 !== eV
          })),
          eV = VV.map((VV => {
            let [eV] = VV;
            return eV
          })).join("|");
        yV = VV.length ? new RegExp(`\\b(${eV})\\b`, "g") : null
      };
      pV();
      for (const QV of VV.split("\n")) {
        const VV = Le.exec(QV);
        if (!VV) {
          UV() && JV.push(yV ? me(QV, yV, xV) : QV);
          continue
        }
        const eV = VV[1],
          nV = VV[2].trim();
        if ("ifdef" === eV || "ifndef" === eV || "if" === eV) {
          const VV = UV(),
            JV = "if" === eV ? Ke(nV, xV) : xV.has(nV) === ("ifdef" === eV);
          YV.push({
            active: VV && JV,
            parentActive: VV,
            taken: JV
          })
        } else if ("elif" === eV || "else" === eV) {
          const VV = YV[YV.length - 1];
          if (!VV) throw new Error(`#${eV} without #if`);
          const JV = !VV.taken && ("else" === eV || Ke(nV, xV));
          VV.active = VV.parentActive && JV, VV.taken = VV.taken || JV
        } else if ("endif" === eV) {
          if (!YV.pop()) throw new Error("#endif without #if")
        } else if (UV()) {
          const [VV, ...JV] = nV.split(/\s+/);
          "undef" === eV ? xV.delete(VV) : xV.set(VV, !JV.length || JV.join(" ")), pV()
        }
      }
      if (YV.length) throw new Error("Unterminated #if");
      return JV.join("\n")
    }

    function me(VV, eV, xV) {
      return VV.replace(eV, (VV => {
        const eV = xV.get(VV);
        return "string" === typeof eV ? eV : VV
      }))
    }

    function Ke(VV, eV) {
      var xV;
      const JV = null !== (xV = VV.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== xV ? xV : [];
      let YV = 0;
      const UV = () => JV[YV],
        yV = () => JV[YV++],
        pV = VV => {
          const xV = /^\d/.test(VV) ? VV : eV.get(VV);
          return "string" === typeof xV ? parseInt(xV) : Number.NaN
        },
        QV = () => {
          const VV = yV();
          if ("!" === VV) return !QV();
          if ("(" === VV) {
            const VV = wV();
            return yV(), VV
          }
          if ("defined" === VV) {
            const VV = "(" === UV();
            VV && yV();
            const xV = yV();
            return VV && yV(), eV.has(xV)
          }
          const xV = UV();
          if ("==" === xV || "!=" === xV || ">" === xV || "<" === xV || ">=" === xV || "<=" === xV) {
            yV();
            const eV = pV(VV),
              JV = pV(yV());
            if (Number.isNaN(eV) || Number.isNaN(JV)) return !1;
            switch (xV) {
              case "==":
                return eV === JV;
              case "!=":
                return eV !== JV;
              case ">":
                return eV > JV;
              case "<":
                return eV < JV;
              case ">=":
                return eV >= JV;
              default:
                return eV <= JV
            }
          }
          return eV.has(VV)
        },
        nV = () => {
          let VV = QV();
          for (;
            "&&" === UV();) {
            yV();
            const eV = QV();
            VV = VV && eV
          }
          return VV
        },
        wV = () => {
          let VV = nV();
          for (;
            "||" === UV();) {
            yV();
            const eV = nV();
            VV = VV || eV
          }
          return VV
        },
        ZV = wV();
      if (YV !== JV.length) throw new Error(`Cannot evaluate #if ${VV}`);
      return ZV
    }
    var He = xV(38484),
      ue = xV(38595),
      se = xV(38598),
      Se = xV(41983),
      Ie = xV(39948);
    const de = 32,
      Oe = [10, 3, 10],
      Vx = [21, 7, 21],
      ex = Vx[0] * Vx[1] * Vx[2],
      xx = 0,
      Jx = 1,
      Yx = 2,
      Ux = 3,
      yx = 64,
      px = 512,
      Qx = 4 * ex,
      nx = 1536,
      wx = Qx + ex * nx,
      Zx = 1073741824,
      vx = wx + 1;

    function rx(VV, eV) {
      const xV = VV % eV;
      return xV < 0 ? xV + eV : xV
    }

    function kx(VV, eV, xV) {
      return JV = rx(VV, Vx[0]), YV = rx(eV, Vx[1]), UV = rx(xV, Vx[2]), JV + Vx[0] * (YV + Vx[1] * UV);
      var JV, YV, UV
    }

    function bx(VV, eV, xV) {
      return VV + 8 * (eV + 8 * xV)
    }

    function Ex(VV, eV, xV) {
      return VV + 4 * (eV + 4 * xV)
    }
    const Bx = 65535,
      jx = 0,
      qx = 1,
      tx = 2,
      Fx = 3;

    function Tx(VV) {
      return Math.ceil(VV * VV / 32)
    }
    const Px = 8192,
      Ax = 1 << 18,
      Nx = 65536,
      Xx = 294912,
      Mx = 128,
      zx = 4096,
      Gx = 16,
      Wx = 16385,
      Rx = 81921,
      gx = 147457,
      Dx = 4194304;
    const ix = [0, 0, 0],
      Cx = [0, 0, 0];

    function ax(VV, eV, xV, JV) {
      ! function(VV, eV, xV) {
        const [JV, YV, UV] = [VV[0], VV[1], VV[2]];
        let yV, pV, QV;
        Math.abs(YV) < .99 ? (yV = UV, pV = 0, QV = -JV) : (yV = -YV, pV = JV, QV = 0);
        const nV = Math.hypot(yV, pV, QV);
        eV[0] = yV / nV, eV[1] = pV / nV, eV[2] = QV / nV, xV[0] = YV * eV[2] - UV * eV[1], xV[1] = UV * eV[0] - JV * eV[2], xV[2] = JV * eV[1] - YV * eV[0]
      }(JV, ix, Cx);
      const YV = 1 / 32;
      for (const [UV, yV] of [
          [0, ix],
          [4, Cx]
        ]) {
        for (let xV = 0; xV < 3; xV++) VV[eV + UV + xV] = yV[xV] * YV;
        VV[eV + UV + 3] = -(yV[0] * xV[0] + yV[1] * xV[1] + yV[2] * xV[2]) * YV
      }
    }
    class ox {
      constructor() {
        this.words = new Uint32Array(gx), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      NZ(VV, eV) {
        this.parts = 0, this.refs = 0, this.view = VV, this.viewAt = eV;
        const xV = VV[eV + 1] * VV[eV + 6] - VV[eV + 2] * VV[eV + 5],
          JV = VV[eV + 2] * VV[eV + 4] - VV[eV] * VV[eV + 6],
          YV = VV[eV] * VV[eV + 5] - VV[eV + 1] * VV[eV + 4],
          UV = Math.hypot(xV, JV, YV) || 1;
        this.light[0] = xV / UV, this.light[1] = JV / UV, this.light[2] = YV / UV
      }
      add(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= zx || ! function(VV, eV, xV) {
            const JV = VV[eV],
              YV = VV[eV + 1],
              UV = VV[eV + 2],
              yV = VV[eV + 3],
              pV = VV[eV + 4],
              QV = VV[eV + 5],
              nV = VV[eV + 6],
              wV = VV[eV + 7],
              ZV = VV[eV + 8],
              vV = VV[eV + 9],
              rV = VV[eV + 10],
              kV = VV[eV + 11],
              bV = VV[eV + 12],
              EV = VV[eV + 13],
              BV = VV[eV + 14],
              jV = VV[eV + 15],
              qV = JV * QV - YV * pV,
              tV = JV * nV - UV * pV,
              FV = JV * wV - yV * pV,
              TV = YV * nV - UV * QV,
              PV = YV * wV - yV * QV,
              AV = UV * wV - yV * nV,
              NV = ZV * EV - vV * bV,
              XV = ZV * BV - rV * bV,
              MV = ZV * jV - kV * bV,
              zV = vV * BV - rV * EV,
              GV = vV * jV - kV * EV,
              WV = rV * jV - kV * BV,
              RV = qV * WV - tV * GV + FV * zV + TV * MV - PV * XV + AV * NV;
            if (!(Math.abs(RV) > 1e-12)) return !1;
            const gV = 1 / RV;
            return xV[0] = (QV * WV - nV * GV + wV * zV) * gV, xV[1] = (UV * GV - YV * WV - yV * zV) * gV, xV[2] = (EV * AV - BV * PV + jV * TV) * gV, xV[3] = (rV * PV - vV * AV - kV * TV) * gV, xV[4] = (nV * MV - pV * WV - wV * XV) * gV, xV[5] = (JV * WV - UV * MV + yV * XV) * gV, xV[6] = (BV * FV - bV * AV - jV * tV) * gV, xV[7] = (ZV * AV - rV * FV + kV * tV) * gV, xV[8] = (pV * GV - QV * MV + wV * NV) * gV, xV[9] = (YV * MV - JV * GV - yV * NV) * gV, xV[10] = (bV * PV - EV * FV + jV * qV) * gV, xV[11] = (vV * FV - ZV * PV - kV * qV) * gV, xV[12] = (QV * XV - pV * zV - nV * NV) * gV, xV[13] = (JV * zV - YV * XV + UV * NV) * gV, xV[14] = (EV * tV - bV * TV - BV * qV) * gV, xV[15] = (ZV * TV - vV * tV + rV * qV) * gV, !0
          }(eV, xV, this.inverse)) return;
        const {
          view: JV,
          viewAt: YV
        } = this, UV = xV;
        let yV = 1 / 0,
          pV = 1 / 0,
          QV = -1 / 0,
          nV = -1 / 0,
          wV = -1 / 0;
        const [ZV, vV, rV] = this.light;
        for (let FV = 0; FV < 8; FV++) {
          const xV = 1 & FV ? VV.hi[0] : VV.lo[0],
            kV = 2 & FV ? VV.hi[1] : VV.lo[1],
            bV = 4 & FV ? VV.hi[2] : VV.lo[2],
            EV = xV * eV[UV] + kV * eV[UV + 4] + bV * eV[UV + 8] + eV[UV + 12],
            BV = xV * eV[UV + 1] + kV * eV[UV + 5] + bV * eV[UV + 9] + eV[UV + 13],
            jV = xV * eV[UV + 2] + kV * eV[UV + 6] + bV * eV[UV + 10] + eV[UV + 14],
            qV = JV[YV] * EV + JV[YV + 1] * BV + JV[YV + 2] * jV + JV[YV + 3],
            tV = JV[YV + 4] * EV + JV[YV + 5] * BV + JV[YV + 6] * jV + JV[YV + 7];
          yV = Math.min(yV, qV), pV = Math.min(pV, tV), QV = Math.max(QV, qV), nV = Math.max(nV, tV), wV = Math.max(wV, ZV * EV + vV * BV + rV * jV)
        }
        if (QV < -1 || nV < -1 || yV >= 1 || pV >= 1) return;
        const kV = this.parts++,
          bV = this.rects;
        bV[4 * kV] = cx(yV), bV[4 * kV + 1] = cx(pV), bV[4 * kV + 2] = cx(QV), bV[4 * kV + 3] = cx(nV);
        const EV = this.inverse,
          {
            cell: BV,
            dims: jV,
            lo: qV
          } = VV,
          tV = Rx + kV * Gx;
        for (let FV = 0; FV < 3; FV++) this.floats[tV + 4 * FV] = EV[FV] / BV, this.floats[tV + 4 * FV + 1] = EV[4 + FV] / BV, this.floats[tV + 4 * FV + 2] = EV[8 + FV] / BV, this.floats[tV + 4 * FV + 3] = (EV[12 + FV] - qV[FV]) / BV;
        this.words[tV + 12] = VV.at, this.floats[tV + 13] = wV + .001 * (1 + Math.abs(wV)), this.words[tV + 14] = jV[0] | jV[1] << 8 | jV[2] << 16
      }
      finish() {
        const VV = Mx,
          {
            counts: eV,
            rects: xV,
            words: JV
          } = this;
        eV.fill(0);
        let YV = 0,
          UV = 0;
        for (; UV < this.parts; UV++) {
          const JV = 4 * UV,
            yV = (xV[JV + 2] - xV[JV] + 1) * (xV[JV + 3] - xV[JV + 1] + 1);
          if (YV + yV > 65536) break;
          YV += yV;
          for (let YV = xV[JV + 1]; YV <= xV[JV + 3]; YV++)
            for (let UV = xV[JV]; UV <= xV[JV + 2]; UV++) eV[YV * VV + UV]++
        }
        let yV = 0;
        for (let QV = 0; QV < 16384; QV++) JV[QV] = yV, yV += eV[QV], eV[QV] = JV[QV];
        JV[16384] = yV;
        for (let QV = 0; QV < UV; QV++) {
          const YV = 4 * QV;
          for (let UV = xV[YV + 1]; UV <= xV[YV + 3]; UV++)
            for (let yV = xV[YV]; yV <= xV[YV + 2]; yV++) JV[Wx + eV[UV * VV + yV]++] = QV
        }
        const pV = this.floats;
        for (let QV = 0; QV < 16384; QV++) {
          const VV = Wx + JV[QV],
            eV = VV + Math.min(JV[QV + 1] - JV[QV], 64);
          for (let xV = VV + 1; xV < eV; xV++) {
            const eV = JV[xV],
              YV = pV[81934 + eV * Gx];
            let UV = xV - 1;
            for (; UV >= VV && pV[81934 + JV[UV] * Gx] < YV; UV--) JV[UV + 1] = JV[UV];
            JV[UV + 1] = eV
          }
        }
        this.refs = YV
      }
    }

    function cx(VV) {
      return Math.min(127, Math.max(0, Math.floor((.5 * VV + .5) * Mx)))
    }

    function hx(VV, eV, xV, JV, YV) {
      for (let UV = 0; UV < 4; UV++)
        for (let yV = 0; yV < 4; yV++) YV[4 * UV + yV] = VV[eV + 4 * UV] * xV[JV + yV] + VV[eV + 4 * UV + 1] * xV[JV + 4 + yV] + VV[eV + 4 * UV + 2] * xV[JV + 8 + yV] + VV[eV + 4 * UV + 3] * xV[JV + 12 + yV]
    }

    function lx(VV, eV, xV, JV, YV) {
      const UV = VV[0] - eV,
        yV = VV[1] - xV,
        pV = VV[2] - JV,
        QV = VV[3] - eV,
        nV = VV[4] - xV,
        wV = VV[5] - JV,
        ZV = VV[6] - eV,
        vV = VV[7] - xV,
        rV = VV[8] - JV;
      if (Math.min(UV, QV, ZV) > YV || Math.max(UV, QV, ZV) < -YV) return !1;
      if (Math.min(yV, nV, vV) > YV || Math.max(yV, nV, vV) < -YV) return !1;
      if (Math.min(pV, wV, rV) > YV || Math.max(pV, wV, rV) < -YV) return !1;
      const kV = QV - UV,
        bV = nV - yV,
        EV = wV - pV,
        BV = ZV - QV,
        jV = vV - nV,
        qV = rV - wV,
        tV = bV * qV - EV * jV,
        FV = EV * BV - kV * qV,
        TV = kV * jV - bV * BV;
      if (Math.abs(tV * UV + FV * yV + TV * pV) > YV * (Math.abs(tV) + Math.abs(FV) + Math.abs(TV))) return !1;
      const PV = [kV, bV, EV, BV, jV, qV, UV - ZV, yV - vV, pV - rV];
      for (let AV = 0; AV < 3; AV++) {
        const VV = PV[3 * AV],
          eV = PV[3 * AV + 1],
          xV = PV[3 * AV + 2];
        for (let JV = 0; JV < 3; JV++) {
          const kV = 0 === JV ? 0 : 1 === JV ? xV : -eV,
            bV = 0 === JV ? -xV : 1 === JV ? 0 : VV,
            EV = 0 === JV ? eV : 1 === JV ? -VV : 0,
            BV = kV * UV + bV * yV + EV * pV,
            jV = kV * QV + bV * nV + EV * wV,
            qV = kV * ZV + bV * vV + EV * rV,
            tV = YV * (Math.abs(kV) + Math.abs(bV) + Math.abs(EV));
          if (Math.min(BV, jV, qV) > tV || Math.max(BV, jV, qV) < -tV) return !1
        }
      }
      return !0
    }
    const Lx = new Float32Array(1);
    new Uint32Array(Lx.buffer);
    var fx = xV(39950);

    function mx(VV) {
      const [eV, xV, JV] = fx.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${VV.group}) @binding(${VV.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${eV-1}, ${xV-1}, ${JV-1});\n}\n`
    }

    function Kx(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [YV, UV, yV] = Vx, [pV, QV, nV] = Oe, wV = Math.log2(de), ZV = JV ? "var<private> bloxdSpCrossed: bool;\n" : "", vV = JV ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${VV.group}) @binding(${VV.Ur}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${VV.group}) @binding(${VV.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${xV?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${ZV}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${qx}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${tx}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${xV?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Fx}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${YV}, ${UV}, ${yV});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${YV} * (s.y + ${UV} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${pV}, ${QV}, ${nV}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${wV}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Ux}u) {\n\t\treturn named && state == ${Yx}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${Qx}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${wx}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${eV?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${eV?`\t\tif (exits && step > 0 && step % ${sx} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${wV}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${xx}u || kind == ${Jx}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Yx}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${Qx}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${vV}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Hx = {
      group: 0,
      uniform: 0,
      Ur: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function ux() {
      const VV = Hx;
      return `${mx(VV)}${Kx(VV,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${fx.d}>,\n}\n@group(${VV.group}) @binding(${VV.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${VV.group}) @binding(${VV.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${fx.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${fx.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${fx.g}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const sx = 2;
    const Sx = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function Ix(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const JV = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${eV.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        YV = "trace" === xV || "lit" === xV,
        UV = "maskEdge" === xV ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        yV = YV ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${eV.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${eV.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===xV?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${UV};\n`;
      return `${JV}${VV.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${YV?function(){const[VV,eV,xV]=fx.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${VV}.0, ${eV}.0, ${xV}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${yV}}\n`:""}${VV.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${eV.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${eV.renderOffset});\n}\n`:""}`
    }
    const dx = "bloxdSpOwnTexture";

    function Ox(VV) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${VV.texture}) - 1u)))`
    }
    const VJ = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${We.d.map((VV=>{let[eV,xV]=VV;return`\tbloxdSpOut.${eV} = (bloxdSpWord & ${xV}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function eJ(VV) {
      return `bloxdSpFlags(${VV})`
    }
    const xJ = `${Se.j}.eyePosition`;

    function JJ(VV, eV, xV, JV, YV) {
      const UV = VV.indexOf(eV);
      if (UV < 0 || VV.indexOf(eV, UV + 1) >= 0) throw new Error(`Lite's ${YV} program changed at the shader pack ${JV} hook: ${UV<0?"no":"more than one"} anchor (lite/${YV}ShaderPack.ts)`);
      return VV.slice(0, UV) + xV + VV.slice(UV + eV.length)
    }

    function YJ(VV) {
      return VV.sunShadow || VV.airShadow
    }

    function UJ(VV, eV) {
      return eV && YJ(VV)
    }
    const yJ = {
      group: Se.e,
      ...Se.r
    };

    function pJ(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!YJ(VV)) return "";
      if (eV) {
        const eV = yJ,
          YV = "trace" === xV || "lit" === xV;
        let UV = "";
        VV.sunShadow && (UV = YV ? `${Kx(eV,!0,"lit"===xV)}${JV=eV,`@group(${JV.group}) @binding(${JV.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${JV.group}) @binding(${JV.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(VV, eV, xV) {
          const JV = `@group(${VV}) @binding(${eV}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return xV ? `${JV}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Sx}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((VV=>`\t{\n\t\tlet o = vec2i(${VV});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : JV
        }(eV.group, Se.u, "maskEdge" === xV));
        const yV = {
          shadowDirection: `${Se.j}.shadowDirection`,
          renderOffset: `${Se.j}.renderOffset`,
          eyePosition: `${Se.j}.eyePosition`
        };
        return `${mx(eV)}${UV}${function(VV){const[eV,xV,JV]=fx.r;return`@group(${VV.group}) @binding(${VV.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${VV.group}) @binding(${VV.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${eV}.0, ${xV}.0, ${JV}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(eV)}${Ix(VV,yV,xV)}`
      }
      var JV;
      return `${VV.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${VV.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function QJ(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!eV) return "";
      const UV = (yV = "fragmentInputs.vPositionW", pV = VV.sunShadow ? {
        normal: xV,
        flags: JV
      } : null, `\n\tbloxdSpShadowPosition = ${yV};\n${pV?`\tbloxdSpShadowNormal = normalize(${pV.normal});\n\tbloxdSpShadowEmissive = (${pV.flags} & ${We.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${pV.flags} & ${We.g}u) != 0u;\n`:""}`);
      var yV, pV;
      return VV.sunShadow && ("mask" === YV || "maskEdge" === YV) ? `${UV}${QV="fragmentInputs.position",nV="maskEdge"===YV,`\n\tbloxdSpShadowPixel = vec2i(${QV}.xy);\n${nV?`\tbloxdSpShadowZ = ${QV}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${QV}.z), dpdy(${QV}.z));\n`:""}`}` : UV;
      var QV, nV
    }
    const nJ = "bloxdSpTextureRotation",
      wJ = "bloxdSpTextureLayers",
      ZJ = `@group(${Se.e}) @binding(${Se.y}) var<storage, read> ${wJ}: array<u32>;\n`;

    function vJ(VV) {
      return `\tvertexOutputs.vPackTexture = ${wJ}[min(u32(${VV}), arrayLength(&${wJ}) - 1u)];\n`
    }

    function rJ(VV) {
      return void 0 !== VV.uv
    }

    function kJ(VV) {
      if (!VV) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (rJ(VV)) return function(VV) {
        const {
          texture: eV,
          cells: xV,
          layers: JV
        } = VV, YV = `textureDimensions(${eV}, bloxdSpLevel)`, UV = xV ? `max(vec2u(vec2f(${YV}) / ${xV}), vec2u(1u))` : YV, yV = xV ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${UV};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${xV}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${xV}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${eV}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${YV} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${UV};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${eV}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let pV;
        if (xV)
          if (1 === JV.length) pV = `\treturn bloxdSpOwnTexel(${JV[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const VV = JV.length - 1;
            pV = `\tvar bloxdSpColour = bloxdSpOwnTexel(${JV[VV]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let eV = VV - 1; eV >= 0; eV--) pV += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${JV[eV]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            pV += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else pV = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${VV.id?`var<private> ${dx}: u32;\n`:""}${yV}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Ox(VV)};\n\treturn ${UV};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${VV.id?dx:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Ox(VV)};\n${pV}}\n`
      }(VV);
      const eV = VV,
        xV = VV => {
          const xV = VV > 0 ? `bloxdSpLayer - ${eV.layers*VV}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${VV}, ${eV.sampler}, bloxdSpTurned, ${xV}, round(bloxdSpMipLevel));`
        };
      let JV = "";
      for (let UV = 0; UV < eV.count - 1; UV++) JV += `\tif (bloxdSpLayer < ${eV.layers*(UV+1)}u) {\n\t\t${xV(UV)}\n\t}\n`;
      const YV = eV.frame ? `${eV.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${nJ}: u32;\n${ZJ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${nJ} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${nJ} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${nJ} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${YV}${JV}\t${xV(eV.count-1)}\n}\n`
    }

    function bJ(VV, eV, xV) {
      return !!VV.surface && "bloxdDefaultSurface" !== VV.surface && function(VV, eV) {
        return "liquid" === eV || !VV
      }(eV, xV)
    }

    function EJ(VV, eV) {
      return VV.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${eV.vertexLocalPosition}, ${eJ(eV.vertexFlags)});\n\t\tlet bloxdSpVertex = ${VV.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function BJ(VV, eV, xV, JV, YV) {
      if (!VV.surface) return "";
      const UV = (VV, eV) => `\n\tlet bloxdSpTexelUV = ${VV};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${eV}) - 1u));`;
      let yV = "",
        pV = "0u, 0u, vec2f(0.0), 0.0";
      const QV = JV && rJ(JV) ? JV : null,
        nV = JV && !rJ(JV) ? JV : null;
      if (QV) {
        yV = `${QV.id?`\n\tlet bloxdSpTexture = ${QV.id};\n\t${dx} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${QV.uv};${UV(function(VV,eV){var xV;return`${null!==(xV=VV.levelUv)&&void 0!==xV?xV:VV.cells?`${eV} / ${VV.cells}`:eV} * vec2f(textureDimensions(${VV.texture}))`}(QV,"bloxdSpUv"),QV.texture)}`, pV = (QV.id ? `${dx}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else nV && (yV = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${nJ} = bloxdSpTexture >> 16u;${UV(`fragmentInputs.vMainUV1 * ${(0,He.ob)(nV.width)}`,"textureAtlas0")}`, pV = `bloxdSpTexture & 0xffffu, ${nJ}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const wV = YV.overlayColour,
        ZV = wV ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        vV = "bloxdDefaultSurface" !== VV.surface || wV ? `\n\tbaseColor = vec4f(${ZV}, baseColor.a);` : "",
        rV = bJ(VV, eV, xV) ? `\n\t${YV.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${yV}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${YV.alpha}, ${YV.enchantTier}, ${YV.enchantColour}, ${YV.enchantSpeed}, ${null!==wV&&void 0!==wV?wV:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${YV.normal}, ${YV.localPosition}, ${eJ(YV.flags)}, ${pV});\n\tlet bloxdSpSurface = ${VV.surface}(bloxdSpSurfaceIn);${vV}${rV}\n`
    }
    const jJ = "bloxdSpLightIn";

    function qJ(VV, eV, xV, JV) {
      if (!VV.light) return "";
      const YV = eV ? `${He.p}.rgb, ${He.p}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${He.l}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: UV,
          diffuse: yV,
          emissive: pV,
          ambient: QV,
          fogColour: nV,
          fogAlpha: wV,
          normal: ZV
        } = JV;
      return `\tvar ${jJ} = BloxdLightIn(vec3f(0.0), ${xV?UV:"0.0"}, ${yV}, ${pV}, ${QV}, ${YV}, ${nV}, ${wV}, fragmentInputs.vPositionW, ${ZV}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${jJ}.litColour = bloxdLitColour(bloxdSpSurface, ${jJ});\n`
    }

    function tJ(VV) {
      return VV.light ? `\n\t{\n\t\tlet bloxdSpLight = ${VV.light}(bloxdSpSurface, ${jJ});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const FJ = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      TJ = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      PJ = "\treturn color;\n}",
      AJ = {
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
    const NJ = Object.freeze({});

    function XJ(VV) {
      var eV;
      return !(null === (eV = (0, Ie.i)(VV)) || void 0 === eV || !eV.sceneDepth)
    }

    function MJ(VV) {
      const eV = (0, Ie.i)(VV);
      return !!eV && bJ(eV.hooks, eV.strict, eV.program)
    }

    function zJ(VV, eV, xV, JV) {
      return JJ(VV, eV, xV, JV, "terrain")
    }

    function GJ(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const UV = function(VV) {
          return (0, Ie.e)(VV.packVariant, VV.liquid ? "liquid" : "terrain")
        }(VV),
        {
          hooks: yV
        } = UV,
        pV = UJ(UV, JV),
        QV = "edge" === YV ? "maskEdge" : "plain" === YV ? "mask" : "trace",
        nV = EJ(yV, AJ);
      nV && (eV = zJ(eV, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${nV}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const wV = "atlas" === VV.texture ? {
          count: VV.atlasCount,
          layers: VV.atlasLayers,
          width: VV.yVV,
          sampler: "atlasSampler",
          frame: VV.animated ? xV : null
        } : null,
        ZV = `${UV.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${QJ(UV,pV,AJ.normal,AJ.flags,QV)}${BJ(yV,UV.strict,UV.program,wV,AJ)}`;
      ZV && (eV = zJ(eV, FJ, `${FJ.slice(0,-1)}${ZV}`, "surface"));
      const vV = tJ(yV);
      return vV && (eV = zJ(eV, TJ, `${qJ(yV,VV.lighting,VV.dirLightCount>0,AJ)}${TJ}`, "light input"), eV = zJ(eV, PJ, `${vV.slice(1)}${PJ}`, "light")), `${(0,Se.B)()}${UV.sceneDepth?`@group(${Se.e}) @binding(${Se.o}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${xJ};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${pJ(UV,pV,QV)}${kJ(wV)}${VJ}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${UV.code}${eV}`
    }
    const WJ = TV.d.WGSL;

    function RJ(VV) {
      return void 0 !== VV.packVariant
    }
    const gJ = {
        FUV: 0,
        TUV: 4,
        PUV: 8,
        AUV: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      DJ = gJ.aoLevels + 4,
      iJ = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      CJ = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      aJ = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      oJ = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      cJ = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      hJ = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      lJ = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      LJ = 0,
      fJ = 3,
      mJ = 4,
      KJ = 5,
      HJ = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${ue.e}, ${ue.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${ue.e}, ${ue.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      uJ = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((VV=>se.b>>VV&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const sJ = {
      iZ: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: VV => `animDataPerTex[${VV}]`
    };

    function SJ(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sJ;
      return `\n\tlet atlasIdxIn = ${VV};\n\tlet animTick = ${xV.iZ};\n\tlet animTickStride = ${xV.stride};\n\tlet numAnimTextures = ${xV.count};\n\t${(0,PV.f)(TV.d.WGSL,xV.perTexture)}\n\t${eV}animLayer;\n`
    }

    function IJ(VV) {
      const eV = (eV, xV) => {
        const JV = eV > 0 ? `fragmentInputs.texAtlasIndex - ${VV.atlasLayers.toFixed(1)} * ${eV.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${xV?"textureSampleLevel":"textureSample"}(textureAtlas${eV}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${JV}))${xV?", atlasLod":""})`
      };
      if (1 === VV.atlasCount) return `baseColor = ${eV(0,!1)};`;
      let xV = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,He.ob)(VV.yVV)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let JV = 0; JV < VV.atlasCount; JV++) {
        const YV = VV.atlasLayers * (JV + 1) - .5;
        xV += `${JV>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,He.ob)(YV)}) {\n\t\tbaseColor = ${eV(JV,!0)};\n\t}`
      }
      return xV
    }

    function dJ(VV) {
      return `terrain-${VV.texture}${"atlas"===VV.texture?VV.atlasCount:""}${VV.animated?"-anim":""}${VV.alphaTest?"-test":""}${VV.lighting?"-lit":""}-dir${VV.dirLightCount}${VV.packed?"-packed":""}${RJ(VV)?`-sp${VV.packVariant}`:""}${VV.liquid?"-liquid":""}${VV.resting?"-rest":""}`
    }

    function OJ(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const JV = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const xV = "none" !== VV.texture,
          JV = "atlas" === VV.texture,
          YV = VV.dirLightCount > 0,
          UV = RJ(VV);
        if (VV.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${VV.dirLightCount}`);
        let yV = 1,
          pV = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (JV) {
          VV.animated && (pV += `@group(2) @binding(${yV++}) var<storage, read> animDataPerTex: array<f32>;\n`), pV += `@group(2) @binding(${yV++}) var atlasSampler: sampler;\n`;
          for (let eV = 0; eV < VV.atlasCount; eV++) pV += `@group(2) @binding(${yV++}) var textureAtlas${eV}: texture_2d_array<f32>;\n`
        } else "single" === VV.texture && (pV += `@group(2) @binding(${yV++}) var diffuseSamplerSampler: sampler;\n`, pV += `@group(2) @binding(${yV++}) var diffuseSampler: texture_2d<f32>;\n`);
        const QV = function(VV) {
            const eV = lJ,
              xV = "none" !== VV.texture,
              JV = "atlas" === VV.texture,
              YV = RJ(VV);
            return VV.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${xV?"uv: vec2f,":""}\n\t${JV?"texAtlasIndices: f32,":""}\n\t${VV.lighting?"aPackedLightLevels: f32,":""}\n\t${YV?"blockFlagWords: vec2u,":""}\n}\n${HJ}\n${uJ}\n${"single"===VV.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${xV?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===VV.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${JV?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${VV.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${YV?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${eV.position}) position: vec3f,\n\t@location(${eV.normal}) normal: vec4f,\n\t@location(${eV.color}) color: vec4f,\n\t${xV?`@location(${eV.uv}) uv: vec2f,`:""}\n\t${VV.lighting?`@location(${eV.packedLight}) aPackedLightLevels: f32,`:""}\n\t${YV?`@location(${eV.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(VV),
          nV = `\n${oJ}\n${CJ}\n${aJ}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${pV}\n${Ee}\n${QV.declarations}\nstruct Varyings {\n\t${"none"===eV?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${VV.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${YV?"@location(5) vTerrainLambert: f32,":""}\n\t${xV?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${JV?"@location(7) texAtlasIndex: f32,":""}\n\t${VV.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${UV?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${UV&&JV?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${VV.resting?"":(0,He.t)(WJ)}\n${hJ}\n\n@vertex\nfn mainVertex(${QV.parameter}) -> Varyings {\n\t${QV.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${UV?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${We.c.placed}u;`:""}\n\t${UV&&JV?vJ("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${VV.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${xV?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${JV?function(VV){return VV?SJ("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(VV.animated):""}\n\t${"single"===VV.texture&&VV.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,He.ab)(WJ)}\n\t${(0,He.I)(WJ,VV.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${VV.resting?"":cJ}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${JV?IJ(VV):""}\n\t${"single"===VV.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${xV?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${VV.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${YV?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${be}));\n\t${RJ(VV)?(0,He.lb)(TV.d.WGSL):(0,He.P)(WJ)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          wV = new Set;
        VV.lighting && wV.add("BLOXD_LIGHTING");
        YV && wV.add("BLOXD_TERRAIN_DIRECTIONAL");
        return fe(nV, new Map([...wV].map((VV => [VV, !0]))))
      }(VV, xV);
      if (!RJ(VV)) return JV;
      const YV = GJ(VV, JV, SJ, eV, xV);
      return "none" === xV ? YV : `${YV}${function(VV){const eV="none"!==VV.texture&&VV.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${VV.resting?"":cJ}\n\t${VV.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${eV&&"atlas"===VV.texture?IJ(VV):""}\n\t${eV&&"single"===VV.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${eV?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${We.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(VV)}`
    }
    const VY = new Map([
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

    function eY(VV, eV) {
      const xV = new Map;
      let JV = 0;
      const YV = [],
        UV = [],
        yV = [];
      for (const nV of eV) {
        var pV, QV;
        const eV = null !== (pV = nV.type.trim().split(/\s+/).pop()) && void 0 !== pV ? pV : nV.type,
          wV = VY.get(eV);
        if (!wV) throw new Error(`Lite: no uniform layout for ${nV.name}: ${nV.type}`);
        const ZV = null !== (QV = nV.arraySize) && void 0 !== QV ? QV : 0,
          vV = ZV ? 4 : wV.align;
        JV = Math.ceil(JV / vV) * vV;
        const rV = ZV ? 4 * Math.ceil(wV.floats / 4) : wV.floats;
        if (xV.set(nV.name, {
            offset: JV,
            floats: wV.floats,
            arraySize: ZV,
            stride: rV
          }), ZV && wV.floats <= 2) {
          const eV = `${VV}_${yV.length}_strided`;
          UV.push(`struct ${eV} {\n\t@size(16) el: ${wV.wgsl},\n}`), yV.push(nV.name), YV.push(`\t@align(16) ${nV.name}: array<${eV}, ${ZV}>,`)
        } else ZV ? YV.push(`\t@align(16) ${nV.name}: array<${wV.wgsl}, ${ZV}>,`) : YV.push(`\t${nV.name}: ${wV.wgsl},`);
        JV += ZV ? rV * ZV : wV.floats
      }
      return {
        slots: xV,
        floats: Math.max(4, 4 * Math.ceil(JV / 4)),
        wgsl: `${UV.join("\n")}\nstruct ${VV} {\n${YV.join("\n")}\n}\n`,
        stridedArrays: yV
      }
    }
    const xY = [{
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
      JY = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      YY = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function UY(VV, eV) {
      return `#if defined(${VV}) && ${VV}DIRECTUV == 0\nvarying v${eV}UV: vec2f;\n#endif`
    }

    function yY(VV, eV, xV) {
      return `#if defined(${VV}) && ${VV}DIRECTUV == 0\nif (uniforms.v${eV}Infos.x==0.)\n{vertexOutputs.v${eV}UV= (uniforms.${xV}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${eV}UV= (uniforms.${xV}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function pY(VV, eV, xV) {
      return `#ifdef ${VV}\n#if ${VV}DIRECTUV == 1\n#define v${eV}UV vMainUV1\n#elif ${VV}DIRECTUV == 2\n#define v${eV}UV vMainUV2\n#else\nvarying v${eV}UV: vec2f;\n#endif\nvar ${xV}SamplerSampler: sampler;\nvar ${xV}Sampler: texture_2d<f32>;\n#endif`
    }
    const QY = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      nY = 256,
      wY = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      ZY = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      vY = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      rY = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      kY = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      bY = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      EY = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      BY = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${ZY}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${UY("OPACITY","Opacity")}\n${UY("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${EY}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${vY}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${yY("OPACITY","Opacity","opacity")}\n${yY("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${rY}\n#define CUSTOM_VERTEX_MAIN_END\n${kY}\n}\n`;
    const jY = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${pY("OPACITY","Opacity","opacity")}\n${pY("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${EY}\n${bY}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((VV,eV)=>function(VV){const eV=`
    frame.lights[LITE_LIGHT$ {
        VV
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      VV
    }\
    nvar diffuse$ {
      VV
    }: vec4f = $ {
      eV
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      VV
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      eV
    }.vLightData, diffuse$ {
      VV
    }.rgb, $ {
      eV
    }.vLightSpecular.rgb, diffuse$ {
      VV
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(eV))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, qY = /^([gimus]+)!/, tY = new Set;

    function FY(VV) {
      tY.has(VV) || (tY.add(VV), console.warn(`Lite: no place for plugin code at ${VV} in the standard shader: it is left out`))
    }

    function TY(VV, eV) {
      let xV = VV;
      const JV = new Map;
      for (const [UV, yV] of eV) {
        var YV;
        JV.set(UV, `${null!==(YV=JV.get(UV))&&void 0!==YV?YV:""}${yV}\n`)
      }
      for (const [UV, yV] of JV) {
        if (!UV.startsWith("!")) {
          const VV = `#define ${UV}`;
          if (!xV.includes(VV)) {
            FY(UV);
            continue
          }
          xV = xV.replace(VV, (() => `\n${yV}\n${VV}`));
          continue
        }
        let VV = UV.substring(1),
          eV = "g";
        if (VV.startsWith("!")) eV = "", VV = VV.substring(1);
        else {
          const xV = qY.exec(VV);
          xV && (eV = xV[1], VV = VV.substring(eV.length + 1))
        }
        const JV = new RegExp(VV, eV.includes("g") ? eV : `${eV}g`);
        let YV = JV.exec(xV);
        for (YV || FY(UV); YV;) {
          const VV = YV,
            eV = yV.replace(/\$(\d+)/g, ((eV, xV) => Number(xV) < VV.length ? VV[Number(xV)] : ""));
          xV = xV.substring(0, VV.index) + eV + xV.substring(VV.index + VV[0].length), JV.lastIndex = VV.index + eV.length, YV = JV.exec(xV)
        }
      }
      return xV
    }
    const PY = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      AY = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      NY = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function XY(VV) {
      const eV = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let xV = VV.replace(PY, ((VV, xV, JV, YV, UV, yV) => ("attribute" === xV ? eV.attributes.push({
        name: UV,
        type: yV
      }) : void 0 === xV ? eV.varyings.push({
        name: UV,
        type: yV,
        interpolation: zY(yV, JV, YV)
      }) : eV.uniforms.push({
        name: UV,
        type: MY(yV)
      }), "")));
      return xV = xV.replace(AY, ((VV, xV) => (eV.samplers.add(xV), ""))), xV = xV.replace(NY, ((VV, xV, JV) => (eV.textures.push({
        name: xV,
        type: JV
      }), ""))), eV.body = xV, eV
    }

    function MY(VV) {
      const eV = VV.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        xV = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(eV);
      if (!xV) throw new Error(`Lite: unsupported uniform type ${VV}`);
      return xV
    }

    function zY(VV, eV, xV) {
      return void 0 === eV && void 0 === xV ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(VV.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === eV ? "@interpolate(flat) " : `@interpolate(${null!==eV&&void 0!==eV?eV:"perspective"}, ${null!==xV&&void 0!==xV?xV:"center"}) `
    }

    function GY(VV) {
      return DY({
        defines: VV.defines,
        vertex: TY(BY, VV.vertexCode),
        fragment: TY(jY, VV.fragmentCode),
        members: [...xY, ...VV.defines.has("OPACITY") ? JY : [], ...VV.defines.has("EMISSIVE") ? YY : [], ...VV.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function WY(VV) {
      const eV = VV.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (eV === VV) throw new Error("Lite: fragment main has no return");
      return eV
    }
    const RY = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${ZY}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${vY}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${rY}\n${kY}\n}\n`,
      gY = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${bY}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function DY(VV) {
      const eV = VV.defines,
        xV = XY(fe(VV.vertex, eV)),
        JV = XY(fe(VV.fragment, eV)),
        YV = new Map;
      for (const qV of [...xV.varyings, ...JV.varyings]) YV.has(qV.name) || YV.set(qV.name, qV);
      const UV = [...YV.values()].map(((VV, eV) => `\t@location(${eV}) ${VV.interpolation}${VV.name}: ${VV.type},`)),
        yV = [...VV.members];
      for (const qV of [...xV.uniforms, ...JV.uniforms]) yV.some((VV => VV.name === qV.name)) || yV.push(qV);
      const pV = eY(VV.structName, yV),
        QV = [],
        nV = [];
      let wV = 1;
      const ZV = new Set;
      for (const qV of [...xV.textures, ...JV.textures]) {
        if (ZV.has(qV.name)) continue;
        ZV.add(qV.name);
        const VV = `${qV.name}Sampler`,
          eV = wV++,
          xV = wV++,
          JV = qV.type.startsWith("texture_2d_array") ? "2d-array" : qV.type.startsWith("texture_cube") ? "cube" : "2d";
        QV.push({
          name: qV.name,
          binding: eV,
          samplerBinding: xV,
          dimension: JV
        }), nV.push(`@group(2) @binding(${eV}) var ${qV.name}: ${qV.type};`), nV.push(`@group(2) @binding(${xV}) var ${VV}: sampler;`)
      }
      for (const qV of [...xV.samplers, ...JV.samplers])
        if (!ZV.has(qV.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${qV} has no texture`);
      const vV = [oJ, wY, pV.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${VV.structName};`, ...nV].join("\n"),
        rV = xV.attributes,
        kV = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...xV.attributes.map(((VV, eV) => `\t@location(${eV}) ${VV.name}: ${VV.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        bV = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...UV, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        EV = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...JV.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...UV, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Ee, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${be}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        BV = VV => {
          for (const eV of pV.stridedArrays) VV = VV.replace(new RegExp(`\\b${eV}\\s*\\[(.*?)\\]`, "g"), `${eV}[$1].el`);
          return VV
        };
      return {
        vertex: `${vV}\n${kV}\n${bV}\n${BV(xV.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${vV}\n${EV}\n${WY((jV=BV(JV.body),jV.includes("fragmentInputs.position")?jV.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):jV))}`,
        attributes: rV,
        material: pV,
        textures: QV
      };
      var jV
    }
    const iY = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      CY = VV => ({
        name: VV,
        type: "vec3"
      }),
      aY = VV => ({
        name: VV,
        type: "float"
      }),
      oY = eY("EarthSkyUniforms", [CY("viewFrom"), aY("exposureScale"), CY("zenithOffset"), aY("fogOn"), CY("up"), aY("ditherOn"), CY("sun"), aY("turbidity"), CY("tint"), aY("rayleigh"), CY("sunDir"), aY("mieStrength"), CY("inScatterR"), aY("mieFocus"), CY("inScatterM"), aY("sunE"), CY("extinctionBeta"), aY("sunsetMix"), aY("mieScale"), aY("mieBase"), aY("mieSlope"), aY("sunDiscE"), aY("exposure")]),
      cY = `${oJ}\n${wY}\n${oY.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      hY = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${iY.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      lY = `\n${Ee}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(ce).map((VV=>{let[eV,xV]=VV;return`const TONE_${eV}: f32 = ${xV};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${he};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${be}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var LY = xV(38263);
    const fY = new LY.Ik,
      mY = new LY.Ik,
      KY = new LY.Quaternion,
      HY = new Float64Array(3),
      uY = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      sY = new Float64Array(16);

    function SY(VV, eV, xV) {
      const JV = xV.worldMatrix;
      var YV;
      VV.updateFloat3("viewFrom", JV[12], JV[13], JV[14]), VV.updateFloatsFrom("zenithOffset", eV.cameraOffset, 0, 3), VV.updateFloatsFrom("up", eV.up, 0, 3), eV.luminance > 0 && (VV.updateFloat("exposure", eV.luminance), VV.updateFloat("exposureScale", (YV = eV.luminance, Math.log2(2 / Math.pow(YV, 4))))), VV.updateFloat("turbidity", eV.turbidity), VV.updateFloat("rayleigh", eV.rayleigh), VV.updateFloat("mieStrength", eV.mieCoefficient), VV.updateFloat("mieFocus", eV.mieDirectionalG), VV.updateFloatsFrom("tint", eV.tint, 0, 3), VV.updateFloat("fogOn", eV.fog && xV.fogEnabled && 0 !== xV.fogMode ? 1 : 0), VV.updateFloat("ditherOn", eV.dithering ? 1 : 0);
      const UV = eV.sunPosition;
      if (fY.set(UV[0], UV[1], UV[2]), !eV.useSunPosition) {
        const VV = Math.PI * (eV.inclination - .5),
          xV = 2 * Math.PI * (eV.azimuth - .5);
        fY.set(eV.distance * Math.cos(xV) * Math.cos(VV), eV.distance * Math.sin(-VV), eV.distance * Math.sin(xV) * Math.cos(VV)), LY.Quaternion.FromUnitVectorsToRef(LY.Ik.UpReadOnly, mY.set(eV.up[0], eV.up[1], eV.up[2]), KY), fY.rotateByQuaternionToRef(KY, fY)
      }
      VV.updateVector3("sun", fY), HY[0] = fY.x, HY[1] = fY.y, HY[2] = fY.z;
      const yV = oe(eV, HY, uY);
      VV.updateFloatsFrom("sunDir", yV.sunDir, 0, 3), VV.updateFloat("sunE", yV.sunE), VV.updateFloatsFrom("inScatterR", yV.inScatterR, 0, 3), VV.updateFloatsFrom("inScatterM", yV.inScatterM, 0, 3), VV.updateFloatsFrom("extinctionBeta", yV.extinctionBeta, 0, 3), VV.updateFloat("sunsetMix", yV.sunsetMix), VV.updateFloat("sunDiscE", yV.sunDiscE), VV.updateFloat("mieScale", yV.mieScale), VV.updateFloat("mieBase", yV.mieBase), VV.updateFloat("mieSlope", yV.mieSlope)
    }

    function IY(VV, eV) {
      const xV = sY;
      xV[0] = eV.far, xV[5] = eV.far, xV[10] = eV.far, xV[15] = 1;
      const JV = VV.infiniteDistance;
      for (let YV = 0; YV < 3; YV++) xV[12 + YV] = VV.position[YV] + (JV ? eV.worldMatrix[12 + YV] : 0);
      return sY
    }
    class dY {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(VV, eV, xV, JV, YV) {
        xV !== this.pipeline && (VV.setPipeline(xV), this.pipeline = xV), VV.setBindGroup(1, JV, [YV]);
        const UV = eV.material.bindGroup;
        UV !== this.materialGroup && (VV.setBindGroup(2, UV), this.materialGroup = UV);
        const yV = eV.program.packGroup;
        yV && yV !== this.packGroup && (VV.setBindGroup(Se.e, yV), this.packGroup = yV);
        const {
          vertexBuffers: pV,
          vertexOffsets: QV
        } = this;
        for (let nV = 0; nV < eV.vertexBuffers.length; nV++) pV[nV] === eV.vertexBuffers[nV] && QV[nV] === eV.vertexOffsets[nV] || (VV.setVertexBuffer(nV, eV.vertexBuffers[nV], eV.vertexOffsets[nV]), pV[nV] = eV.vertexBuffers[nV], QV[nV] = eV.vertexOffsets[nV]);
        eV.indexBuffer && eV.indexBuffer !== this.indexBuffer && (VV.setIndexBuffer(eV.indexBuffer, eV.indexFormat), this.indexBuffer = eV.indexBuffer)
      }
    }
    class OY {
      constructor(VV, eV, xV, JV) {
        this.modelMeshes = VV, this.uVV = eV, this.maker = xV, this.warnOnce = JV, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (VV, eV) => {
          (eV < -1 || eV > 1) && this.warnOnce(`group:${eV}`, `rendering group ${eV} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(VV) {
        this.collectGroup(VV, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(VV, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(VV, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.uVV.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(VU), this.transparentDraws.sort(eU)
      }
      collectGroup(VV, eV, xV, JV, YV) {
        const UV = this.modelMeshes.group(eV),
          yV = this.uVV.group(eV),
          pV = 0 === eV ? null === yV || void 0 === yV ? void 0 : yV.opaque : void 0;
        this.collectList(VV, null === UV || void 0 === UV ? void 0 : UV.opaque, pV || null === yV || void 0 === yV ? void 0 : yV.opaque, eV, !1, xV, YV), pV && (this.uVV.drawn += this.maker.bundleDraws(VV, pV, eV)), this.collectList(VV, null === UV || void 0 === UV ? void 0 : UV.alphaTest, void 0, eV, !1, xV, YV), this.collectList(VV, null === UV || void 0 === UV ? void 0 : UV.transparent, null === yV || void 0 === yV ? void 0 : yV.transparent, eV, !0, JV, YV)
      }
      collectList(VV, eV, xV, JV, YV, UV, yV) {
        var pV;
        const QV = UV.length;
        eV && this.maker.pushDraws(VV, eV.units, eV.units.length, JV, YV, UV, eV.rows), xV && (this.uVV.drawn += this.maker.pushDraws(VV, xV, xV.length, JV, YV, UV));
        const nV = YV ? null === (pV = this.modelMeshes.group(JV)) || void 0 === pV ? void 0 : pV.text : void 0;
        nV && this.maker.pushDraws(VV, nV.units, nV.units.length, JV, !0, UV, nV.rows), yV && xU(UV, QV)
      }
    }

    function VU(VV, eV) {
      return VV.program.id - eV.program.id || VV.material.owner.uniqueId - eV.material.owner.uniqueId
    }

    function eU(VV, eV) {
      return VV.material.owner.uniqueId - eV.material.owner.uniqueId
    }

    function xU(VV, eV) {
      for (let xV = eV + 1; xV < VV.length; xV++) {
        const JV = VV[xV];
        let YV = xV - 1;
        for (; YV >= eV && eU(VV[YV], JV) > 0; YV--) VV[YV + 1] = VV[YV];
        VV[YV + 1] = JV
      }
    }
    const JU = {};

    function YU(VV) {
      return VV.hasThinInstances ? "thin" : VV.NUV || VV._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function UU(VV, eV, xV) {
      return VV ? (xV._needUVs = !0, VV.optimizeUVAllocation && (0, MV.H)(VV.matrix) ? (xV[`${eV}DIRECTUV`] = VV.uvSet + 1, xV[`MAINUV${VV.uvSet+1}`] = !0) : xV[`${eV}DIRECTUV`] = 0, !0) : (xV[`${eV}DIRECTUV`] = 0, !1)
    }

    function yU(VV) {
      const eV = new Map;
      for (const xV in VV) {
        if (95 === xV.charCodeAt(0)) continue;
        const JV = VV[xV],
          YV = typeof JV;
        "number" === YV || "string" === YV ? eV.set(xV, String(JV)) : JV && "function" !== YV && eV.set(xV, !0)
      }
      return eV
    }

    function pU(VV) {
      const eV = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: xV
        }
        of VV.features)
        for (const VV in xV) eV[VV] = xV[VV];
      return eV
    }

    function QU(VV) {
      const eV = VV.parts.geometry;
      return null !== eV && void 0 !== eV && eV.live ? eV : null
    }

    function nU(VV) {
      var eV;
      return null !== (eV = QU(VV)) && void 0 !== eV ? eV : JU
    }
    class wU {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = VV, this.warnOnce = eV, this.programWithModel = xV, this.packFailed = JV, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(VV, eV, xV, JV, YV) {
        const UV = eV.owner;
        let yV = this.drawStates.get(eV);
        if (!yV) {
          const VV = eV.parts.materials[eV.range];
          if (!VV) return this.warnOnce("model", `${xV.name} on ${UV.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          yV = {
            defines: pU(VV),
            model: VV,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: YV,
            groupId: JV,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(eV, yV)
        }
        if (this.programCurrent(yV, eV, YV, JV)) return yV.program;
        const {
          model: pV
        } = yV, QV = nU(eV), nV = this.instanceLayout(UV, YV), wV = this.definesBits(UV);
        if (!this.prepareModelDefines(VV, UV, pV, yV.defines, JV, YV)) return null;
        yV.instancing = YV, yV.groupId = JV, yV.modelVersion = pV.version, yV.geometry = QV, yV.instanceLayout = nV, yV.definesBits = wV;
        const ZV = function(VV) {
          let eV = "";
          for (const [xV, JV] of VV) eV += !0 === JV ? `${xV};` : `${xV}=${JV};`;
          return eV
        }(yU(yV.defines));
        return ZV === yV.definesKey && yV.packVariant === this.modelPackVariant && yV.program && !this.packFailed(yV.program) || (yV.definesKey = ZV, yV.packVariant = this.modelPackVariant, yV.program = this.programWithModel(pV, yV.defines, ZV)), yV.program
      }
      programCurrent(VV, eV, xV, JV) {
        return null !== VV.program && !this.packFailed(VV.program) && VV.instancing === xV && VV.groupId === JV && this.definesHold(VV, eV, xV)
      }
      definesHold(VV, eV, xV) {
        return VV.modelVersion === VV.model.version && VV.geometry === nU(eV) && VV.instanceLayout === this.instanceLayout(eV.owner, xV) && VV.definesBits === this.definesBits(eV.owner) && VV.packVariant === this.modelPackVariant
      }
      modelPackKind(VV) {
        var eV;
        return 0 === this.modelPackVariant ? null : null !== (eV = (0, NV.v)(VV, AV.j.name)) && void 0 !== eV && eV.active ? "placed" : VV.item ? "item" : VV.lifeform ? "lifeform" : VV.box ? "box" : null
      }
      instanceLayout(VV, eV) {
        var xV, JV, YV;
        return "thin" === eV ? null !== (YV = this.resources.MVV.get(VV)) && void 0 !== YV ? YV : null : "instanced" === eV && null !== (xV = null === (JV = VV._userInstancedBuffersStorage) || void 0 === JV ? void 0 : JV.interleavedKinds) && void 0 !== xV ? xV : null
      }
      definesBits(VV) {
        const eV = this.view;
        return (VV.visibility < 1 ? 1 : 0) | (VV.hasVertexAlpha ? 2 : 0) | (VV.applyFog ? 4 : 0) | (VV.useVertexColors ? 8 : 0) | (VV.nonUniformScaling ? 16 : 0) | (eV.fogEnabled && 0 !== eV.fogMode ? 32 : 0) | (eV.lightsEnabled ? 64 : 0) | eV.lightCount << 7
      }
      prepareLightDefines(VV, eV, xV) {
        let JV = 0;
        if (this.view.lightsEnabled && !eV) {
          const eV = Math.min(xV, 4);
          for (; JV < this.view.lightCount && (VV[`LIGHT${JV}`] = !0, VV[`LITE_LIGHT${JV}_SLOT`] = JV, JV++, VV._needNormals = !0, JV !== eV););
        }
        for (let YV = JV; YV < 4; YV++) VV[`LIGHT${YV}`] = !1, VV[`LITE_LIGHT${YV}_SLOT`] = void 0
      }
      prepareModelDefines(VV, eV, xV, JV, YV, UV) {
        const {
          features: yV
        } = xV;
        JV._needNormals = !1, JV._needUVs = !1;
        const pV = this.view;
        this.prepareLightDefines(JV, xV.disableLighting, xV.maxSimultaneousLights), JV.MAINUV1 = !1, JV.MAINUV2 = !1;
        const QV = xV.diffuseTexture;
        QV ? (JV._needUVs = !0, JV.DIFFUSE = !0, QV.optimizeUVAllocation && (0, MV.H)(QV.matrix) ? (JV.DIFFUSEDIRECTUV = QV.uvSet + 1, JV[`MAINUV${QV.uvSet+1}`] = !0) : JV.DIFFUSEDIRECTUV = 0, QV.uvSet > 1 && this.warnOnce(`uvset:${xV.name}`, `${xV.name} samples UV set ${QV.uvSet+1}, which is not supported`)) : (JV.DIFFUSE = !1, JV.DIFFUSEDIRECTUV = 0);
        const nV = xV.opacityTexture,
          wV = xV.emissiveTexture;
        JV.OPACITY = UU(nV, "OPACITY", JV), JV.OPACITYRGB = null !== nV && nV.getAlphaFromRGB, JV.EMISSIVE = UU(wV, "EMISSIVE", JV), (nV && nV.uvSet > 1 || wV && wV.uvSet > 1) && this.warnOnce(`uvset:${xV.name}`, `${xV.name} samples a UV set past 2, which is not supported`);
        const ZV = xV.reflectionTexture,
          vV = null !== ZV;
        if (vV) {
          if (!this.resources.boundTexture(ZV)) return !1;
          JV._needNormals = !0
        }
        JV.REFLECTION = vV, JV.REFLECTIONMAP_3D = vV, JV.REFLECTIONMAP_SKYBOX = vV, JV.REFLECTIONMAP_OPPOSITEZ = vV && (VV.useRightHandedSystem ? !ZV.invertZ : ZV.invertZ), JV.ROUGHNESS = vV && xV.roughness > 0, JV.REFLECTIONOVERALPHA = vV && xV.useReflectionOverAlpha, JV.LITE_REFLECTION_LUMINANCE = vV && "cube" === ZV.source.kind && ZV.source.luminance, (eV.skeleton || eV.morphTargetManager) && this.warnOnce(`skin:${eV.name}`, `${eV.name} has bones or morph targets, which are not supported`), JV.FOG = xV.fogEnabled && eV.applyFog && pV.fogEnabled && 0 !== pV.fogMode, JV.NONUNIFORMSCALING = eV.nonUniformScaling;
        const {
          visibility: rV,
          hasVertexAlpha: kV
        } = eV;
        JV.ALPHATEST = (0, NV.V)(xV, rV, kV), JV.ALPHAFROMDIFFUSE = (0, NV.pb)(xV), JV.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== xV.transparencyMode, JV.ALPHABLEND = null === xV.transparencyMode || (0, NV.T)(xV, rV, kV), JV.PREMULTIPLYALPHA = 7 === xV.alphaMode || 8 === xV.alphaMode, JV.EMISSIVEASILLUMINATION = xV.useEmissiveAsIllumination, JV.LINKEMISSIVEWITHDIFFUSE = xV.linkEmissiveWithDiffuse, JV.TWOSIDEDLIGHTING = !xV.backFaceCulling && xV.twoSidedLighting, JV.INSTANCES = "none" !== UV, JV.THIN_INSTANCES = "thin" === UV, JV.LITE_FRONT_LAYER = YV >= 1;
        for (const {
            feature: PV,
            state: AV,
            active: NV
          }
          of yV) {
          var bV, EV;
          if (NV) null === (bV = (EV = (0, ge.j)(PV)).prepareDefinesBeforeAttributes) || void 0 === bV || bV.call(EV, AV, JV, VV, eV)
        }
        this.modelPackKind(xV) && (JV._needNormals = !0), JV.NORMAL = JV._needNormals && eV.isVerticesDataPresent("normal"), JV.UV1 = JV._needUVs && eV.isVerticesDataPresent("uv"), JV.UV2 = JV._needUVs && eV.isVerticesDataPresent("uv2");
        const BV = eV.useVertexColors && eV.isVerticesDataPresent("color");
        JV.VERTEXCOLOR = BV, JV.VERTEXALPHA = eV.hasVertexAlpha && BV, JV.INSTANCESCOLOR = "none" !== UV && eV.isVerticesDataPresent("instanceColor");
        for (const {
            feature: PV,
            state: AV,
            active: NV
          }
          of yV) {
          var jV, qV;
          if (NV) null === (jV = (qV = (0, ge.j)(PV)).prepareDefines) || void 0 === jV || jV.call(qV, AV, JV, VV, eV, xV)
        }
        const tV = VV.sk();
        for (const {
            feature: PV,
            state: AV,
            active: NV
          }
          of yV) {
          var FV, TV;
          if (NV && !1 === (null === (FV = (TV = (0, ge.j)(PV)).isReadyForSubMesh) || void 0 === FV ? void 0 : FV.call(TV, AV, JV, VV, tV))) return !1
        }
        return !0
      }
    }

    function ZU(VV, eV, xV) {
      return VV.codeVersion !== eV.version && function(VV, eV) {
        const xV = [],
          JV = [];
        for (const {
            feature: vV,
            state: rV,
            active: kV
          }
          of eV.features) {
          var YV, UV, yV, pV;
          if (kV) vU(null === (YV = (UV = (0, ge.j)(vV)).getCustomCode) || void 0 === YV ? void 0 : YV.call(UV, rV, "vertex", TV.d.WGSL), xV), vU(null === (yV = (pV = (0, ge.j)(vV)).getCustomCode) || void 0 === yV ? void 0 : yV.call(pV, rV, "fragment", TV.d.WGSL), JV)
        }
        const QV = [];
        for (const {
            feature: vV,
            state: rV
          }
          of eV.features) {
          var nV, wV;
          const VV = null === (nV = (wV = (0, ge.j)(vV)).getUniforms) || void 0 === nV ? void 0 : nV.call(wV, rV, TV.d.WGSL);
          for (const eV of null !== (ZV = null === VV || void 0 === VV ? void 0 : VV.ubo) && void 0 !== ZV ? ZV : []) {
            var ZV;
            eV.size && eV.type && QV.push({
              name: eV.name,
              type: eV.type,
              arraySize: eV.arraySize
            })
          }
        }
        VV.vertexCode = xV, VV.fragmentCode = JV, VV.pluginUniforms = QV, VV.codeKey = JSON.stringify([xV, JV, QV]), VV.codeVersion = eV.version
      }(VV, eV), `${xV}#${VV.codeKey}`
    }

    function vU(VV, eV) {
      if (VV)
        for (const xV in VV) VV[xV] && eV.push([xV, VV[xV]])
    }
    const rU = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class kU {
      constructor(VV) {
        this.warnOnce = VV, this.states = new Map
      }
      renderState(VV, eV, xV, JV) {
        var YV;
        let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          yV = null !== (YV = VV.sideOrientation) && void 0 !== YV ? YV : eV.sideOrientation;
        eV._getWorldMatrixDeterminant() < 0 && (yV = 0 === yV ? 1 : 0);
        const pV = "triangle-list" === UV,
          QV = xV ? VV.alphaMode : 0,
          nV = (!xV || (0 === QV || VV.forceDepthWrite)) && !VV.disableDepthWrite,
          wV = pV && VV.backFaceCulling ? VV.cullBackFaces ? "back" : "front" : "none",
          ZV = pV && 0 !== yV ? "ccw" : "cw",
          vV = VV.depthFunction,
          rV = pV ? VV.zOffset : 0,
          kV = pV ? VV.zOffsetUnits : 0,
          bV = !VV.disableColorWrite;
        return JV && JV.alphaMode === QV && JV.depthWrite === nV && JV.depthFunction === vV && JV.cullMode === wV && JV.frontFace === ZV && JV.zOffset === rV && JV.zOffsetUnits === kV && JV.colourWrite === bV && JV.topology === UV ? JV : this.stateFor(QV, nV, vV, wV, ZV, rV, kV, bV, UV)
      }
      stateFor(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = `${VV}|${eV}|${xV}|${JV}|${YV}|${UV}|${yV}|${pV}|${QV}`;
        let wV = this.states.get(nV);
        if (!wV) {
          var ZV;
          const vV = VV ? Ue(VV) : null;
          VV && !vV && this.warnOnce(`alpha:${VV}`, `alpha mode ${VV} is not supported`), wV = {
            key: nV,
            alphaMode: VV,
            depthFunction: xV,
            zOffset: UV,
            zOffsetUnits: yV,
            topology: QV,
            blend: vV,
            depthWrite: eV,
            depthCompare: xV && null !== (ZV = rU.get(xV)) && void 0 !== ZV ? ZV : null,
            cullMode: JV,
            frontFace: YV,
            depthBias: -yV,
            depthBiasSlopeScale: -UV,
            colourWrite: pV
          }, this.states.set(nV, wV)
        }
        return wV
      }
    }
    var bU = xV(38515);

    function EU(VV) {
      if (!VV.frozen) return -1;
      let eV = VV.version;
      for (const {
          feature: xV,
          state: JV,
          active: YV
        }
        of VV.features) {
        if (!YV || !xV.bind) continue;
        const VV = (0, ge.j)(xV).uniformsVersion;
        if (!VV) return -1;
        eV += VV(JV)
      }
      return eV
    }
    class BU {
      constructor(VV, eV, xV) {
        this.slots = VV, this.data = eV, this.textures = xV, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(VV, eV) {
        this.write4(VV, eV, 0, 0, 0, 1)
      }
      updateFloat2(VV, eV, xV) {
        this.write4(VV, eV, xV, 0, 0, 2)
      }
      updateFloat3(VV, eV, xV, JV) {
        this.write4(VV, eV, xV, JV, 0, 3)
      }
      updateFloat4(VV, eV, xV, JV, YV) {
        this.write4(VV, eV, xV, JV, YV, 4)
      }
      updateVector3(VV, eV) {
        this.write4(VV, eV.x, eV.y, eV.z, 0, 3)
      }
      updateVector4(VV, eV) {
        this.write4(VV, eV.x, eV.y, eV.z, eV.w, 4)
      }
      updateColor3(VV, eV) {
        this.write4(VV, eV.r, eV.g, eV.b, 0, 3)
      }
      updateColor4(VV, eV, xV) {
        this.write4(VV, eV.r, eV.g, eV.b, xV, 4)
      }
      updateFloatsFrom(VV, eV, xV, JV) {
        const YV = this.slots.get(VV);
        if (!YV) return;
        const UV = this.data,
          yV = YV.offset;
        for (let pV = 0; pV < JV; pV++) UV[yV + pV] = eV[xV + pV]
      }
      updateFloat3TimesFloats(VV, eV, xV, JV) {
        const YV = this.slots.get(VV);
        if (!YV) return;
        const UV = this.data,
          yV = YV.offset;
        UV[yV] = eV[xV] * JV[0], UV[yV + 1] = eV[xV + 1] * JV[1], UV[yV + 2] = eV[xV + 2] * JV[2]
      }
      peV(VV, eV) {
        const xV = this.slots.get(VV);
        xV && this.data.set(eV.m, xV.offset)
      }
      updateMatrixFloats(VV, eV) {
        const xV = this.slots.get(VV);
        xV && this.data.set(eV, xV.offset)
      }
      updateFloatArray(VV, eV) {
        const xV = this.slots.get(VV);
        if (!xV) return;
        if (!xV.arraySize || xV.stride === xV.floats) return void this.data.set(eV, xV.offset);
        const JV = Math.min(eV.length, xV.floats * xV.arraySize);
        for (let YV = 0; YV < JV; YV++) this.data[xV.offset + Math.floor(YV / xV.floats) * xV.stride + YV % xV.floats] = eV[YV]
      }
      updateArray(VV, eV) {
        this.updateFloatArray(VV, eV)
      }
      setTexture(VV, eV) {
        this.textures.set(VV, eV), this.expected.delete(VV)
      }
      expectTexture(VV) {
        this.textures.set(VV, null), this.expected.add(VV)
      }
      write4(VV, eV, xV, JV, YV, UV) {
        const yV = this.slots.get(VV);
        if (!yV) return;
        const pV = this.data,
          QV = yV.offset;
        pV[QV] = eV, UV > 1 && (pV[QV + 1] = xV), UV > 2 && (pV[QV + 2] = JV), UV > 3 && (pV[QV + 3] = YV)
      }
    }

    function jU(VV, eV) {
      const xV = QY,
        JV = bU.h,
        YV = VV.lights,
        UV = Math.min(VV.lightCount, 8);
      for (let yV = 0; yV < UV; yV++) {
        const VV = xV.lights + yV * xV.lightStride,
          UV = yV * bU.d;
        eV[VV] = YV[UV + JV.vector], eV[VV + 1] = YV[UV + JV.vector + 1], eV[VV + 2] = YV[UV + JV.vector + 2], eV[VV + 3] = YV[UV + JV.kind] === bU.e.directional ? 1 : 0, eV[VV + 4] = YV[UV + JV.diffuse], eV[VV + 5] = YV[UV + JV.diffuse + 1], eV[VV + 6] = YV[UV + JV.diffuse + 2], eV[VV + 7] = YV[UV + JV.range], eV[VV + 8] = YV[UV + JV.specular], eV[VV + 9] = YV[UV + JV.specular + 1], eV[VV + 10] = YV[UV + JV.specular + 2], eV[VV + 11] = YV[UV + JV.range]
      }
      eV[xV.fogInfos] = VV.fogMode, eV[xV.fogInfos + 1] = VV.fogStart, eV[xV.fogInfos + 2] = VV.fogEnd, eV[xV.fogInfos + 3] = VV.fogDensity, eV[xV.fogColour] = VV.fogColour[0], eV[xV.fogColour + 1] = VV.fogColour[1], eV[xV.fogColour + 2] = VV.fogColour[2], eV[xV.outputHeight] = VV.renderHeight, eV[xV.animTick] = VV.animTick, eV[xV.timeMs] = VV.timeMs
    }
    class qU {
      constructor(VV) {
        this.instancesOf = VV
      }
      refreshModelUniforms(VV, eV, xV, JV) {
        const YV = EU(xV);
        if (YV >= 0 && YV === eV.heldVersion && eV.textures.get("diffuseSampler") === xV.diffuseTexture && eV.textures.get("reflectionCubeSampler") === xV.reflectionTexture && eV.textures.get("opacitySampler") === xV.opacityTexture && eV.textures.get("emissiveSampler") === xV.emissiveTexture) return !0;
        if (YV < 0)
          for (const UV of this.instancesOf(xV)) UV.heldVersion = -1;
        return this.writeModelUniforms(VV, eV, xV, JV), eV.heldVersion = YV, !1
      }
      writeModelUniforms(VV, eV, xV, JV) {
        const {
          ubo: YV
        } = eV, UV = xV.diffuseTexture, yV = xV.diffuseColor;
        YV.updateFloat4("vDiffuseColor", yV[0], yV[1], yV[2], xV.alpha), UV && (YV.updateFloat2("vDiffuseInfos", UV.uvSet, UV.level), YV.updateMatrixFloats("diffuseMatrix", UV.matrix)), YV.updateFloat("alphaCutOff", xV.alphaCutOff), YV.updateFloatsFrom("vEmissiveColor", xV.emissiveColor, 0, 3), YV.updateFloat3TimesFloats("vAmbientColor", JV.ambientColour, 0, xV.ambientColor);
        const pV = xV.specularColor;
        YV.updateFloat4("vSpecularColor", pV[0], pV[1], pV[2], xV.specularPower), YV.setTexture("diffuseSampler", UV);
        const QV = xV.opacityTexture;
        QV && (YV.updateFloat2("vOpacityInfos", QV.uvSet, QV.level), YV.updateMatrixFloats("opacityMatrix", QV.matrix)), YV.setTexture("opacitySampler", QV);
        const nV = xV.emissiveTexture;
        nV && (YV.updateFloat2("vEmissiveInfos", nV.uvSet, nV.level), YV.updateMatrixFloats("emissiveMatrix", nV.matrix)), YV.setTexture("emissiveSampler", nV);
        const wV = xV.reflectionTexture;
        wV && YV.updateMatrixFloats("reflectionMatrix", wV.matrix), YV.updateFloat2("vReflectionInfos", wV ? wV.level * VV.iblIntensity : 0, xV.roughness), YV.setTexture("reflectionCubeSampler", wV);
        const ZV = VV.sk();
        for (const {
            feature: kV,
            state: bV,
            active: EV
          }
          of xV.features) {
          var vV, rV;
          if (EV) null === (vV = (rV = (0, ge.j)(kV)).bind) || void 0 === vV || vV.call(rV, bV, YV, VV, ZV)
        }
      }
    }

    function tU(VV) {
      const eV = VV.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(eV) ? "u32" : /i32|^vec\di$/.test(eV) ? "i32" : "f32"
    }

    function FU(VV, eV) {
      const xV = VV.getSize(),
        JV = tU(eV),
        YV = VV => 4 === xV ? `${VV}x4` : 2 === xV ? `${VV}x2` : null;
      if ("f32" === JV) {
        if (5126 === VV.type) return 1 === xV ? "float32" : xV >= 2 && xV <= 4 ? `float32x${xV}` : null;
        if (!VV.normalized) return null;
        switch (VV.type) {
          case 5121:
            return YV("unorm8");
          case 5120:
            return YV("snorm8");
          case 5123:
            return YV("unorm16");
          case 5122:
            return YV("snorm16")
        }
        return null
      }
      const UV = "u32" === JV ? "uint" : "sint";
      switch (VV.type) {
        case 5125:
        case 5124:
          return 1 === xV ? `${UV}32` : xV <= 4 ? `${UV}32x${xV}` : null;
        case 5121:
        case 5120:
          return YV(`${UV}8`);
        case 5123:
        case 5122:
          return YV(`${UV}16`)
      }
      return null
    }

    function TU(VV) {
      var eV;
      const xV = /(8|16|32)(?:x(\d))?$/.exec(VV);
      return xV ? Number(xV[1]) / 8 * Number(null !== (eV = xV[2]) && void 0 !== eV ? eV : 1) : 4
    }
    class PU {
      constructor(VV, eV, xV) {
        this.resources = VV, this.limits = eV, this.warnOnce = xV, this.layouts = new Map
      }
      resolveInputs(VV, eV, xV, JV) {
        const YV = [],
          UV = xV.program.attributes,
          yV = [];
        for (let wV = 0; wV < UV.length; wV++) {
          const xV = UV[wV],
            pV = xV.optional ? null : this.resources.vertexInput(VV, xV.name, JV);
          if (!pV) {
            const VV = tU(xV.type),
              eV = "u32" === VV ? "uint32x4" : "i32" === VV ? "sint32x4" : "float32x4";
            yV.push(null);
            const JV = YV.find((VV => null === VV.data));
            JV ? JV.attributes.push({
              shaderLocation: wV,
              offset: 0,
              format: eV
            }) : YV.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: wV,
                offset: 0,
                format: eV
              }]
            });
            continue
          }
          const QV = pV.getBuffer();
          yV.push(pV);
          const nV = FU(pV, xV.type);
          if (!nV) return this.warnOnce(`format:${eV}:${xV.name}`, `${eV}'s ${xV.name} (type ${pV.type}, size ${pV.getSize()}) has no WebGPU vertex format`), null;
          const ZV = pV.getIsInstanced() ? "instance" : "vertex",
            vV = pV.byteStride,
            rV = TU(nV),
            kV = YV.find((VV => VV.data === QV && VV.stride === vV && VV.step === ZV && pV.byteOffset >= VV.base && pV.byteOffset - VV.base + rV <= vV));
          kV ? kV.attributes.push({
            shaderLocation: wV,
            offset: pV.byteOffset - kV.base,
            format: nV
          }) : YV.push({
            data: QV,
            base: pV.byteOffset,
            stride: vV,
            step: ZV,
            attributes: [{
              shaderLocation: wV,
              offset: 0,
              format: nV
            }]
          })
        }
        if (YV.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${eV}`, `${eV} needs ${YV.length} vertex buffers`), null;
        let pV = "";
        for (const wV of YV) {
          pV += `${wV.stride}${"instance"===wV.step?"i":"v"}`;
          for (const VV of wV.attributes) pV += `,${VV.shaderLocation}:${VV.offset}:${VV.format}`;
          pV += ";"
        }
        let QV = this.layouts.get(pV);
        QV || (QV = {
          key: pV,
          buffers: YV.map((VV => ({
            arrayStride: VV.stride,
            stepMode: VV.step,
            attributes: VV.attributes
          }))),
          instanceEnds: YV.map((VV => {
            let eV = -1;
            if ("instance" === VV.step)
              for (const xV of VV.attributes) eV = Math.max(eV, xV.offset + TU(xV.format));
            return eV
          }))
        }, this.layouts.set(pV, QV));
        const nV = YV.map((VV => VV.base));
        return {
          program: xV,
          sources: yV,
          layout: QV,
          slotData: YV.map((VV => VV.data)),
          IVV: nV,
          buffers: [],
          offsets: nV,
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

    function AU(VV, eV, xV, JV) {
      const YV = eV.program.program.attributes;
      for (let UV = 0; UV < YV.length; UV++) {
        if ((YV[UV].optional ? null : xV.vertexInput(VV, YV[UV].name, JV)) !== eV.sources[UV]) return !1
      }
      return !0
    }
    const NU = 64;
    class XU {
      constructor(VV, eV, xV, JV) {
        this.device = VV, this.layout = eV, this.frameBuffer = xV, this.label = JV, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(VV) {
        if (VV * NU <= this.data.length) return !1;
        let eV = 2 * this.data.length;
        for (; VV * NU > eV;) eV *= 2;
        const xV = new Float32Array(eV);
        return xV.set(this.data), this.data = xV, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const YV = this.data,
          UV = VV * NU;
        let yV = YV[UV + 16] !== xV;
        for (let pV = 0; pV < 16 && !yV; pV++) yV = YV[UV + pV] !== eV[JV + pV];
        if (yV) {
          for (let VV = 0; VV < 16; VV++) YV[UV + VV] = eV[JV + VV];
          YV[UV + 16] = xV
        }
        return yV
      }
      upload(VV, eV) {
        this.device.queue.writeBuffer(this.buffer, VV * nY, this.data, VV * NU, (eV - VV) * NU)
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

    function MU(VV) {
      return VV.gpu[MV.f.lite] ??= VV.materials.map(((eV, xV) => ({
        parts: VV,
        range: xV,
        owner: VV.owner
      })))
    }

    function zU(VV) {
      var eV, xV, JV;
      return null !== (eV = null !== (xV = null === (JV = VV.parts.materials[VV.range]) || void 0 === JV ? void 0 : JV.mirror) && void 0 !== xV ? xV : VV.owner.material) && void 0 !== eV ? eV : null
    }
    const GU = ["opaque", "alphaTest", "transparent", "text"];

    function WU(VV) {
      for (const eV of GU) VV[eV].units.length = 0, VV[eV].rows.length = 0
    }
    class RU {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Re.b)("Lite: ")
      }
      attach(VV, eV) {
        this.model = VV, this.mirror = eV
      }
      get worlds() {
        return this.model.nodes.cZ
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(VV) {
        return this.groups.get(VV)
      }
      forEachGroup(VV) {
        this.groups.forEach(VV)
      }
      forEachSelected(VV) {
        for (const [eV, xV] of this.groups)
          for (const JV of GU)
            for (const YV of xV[JV].units) VV(YV.owner, "text" === JV ? "transparent" : JV, eV)
      }
      select(VV, eV) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(WU);
        const {
          model: xV,
          mirror: JV
        } = this;
        if (!xV || !JV || !VV) return;
        this.rows.length < xV.nodes.Jv && (this.rows = new Int32Array(xV.nodes.Jv));
        const YV = this.rows,
          UV = xV.meshes;
        for (let pV = 0; pV < UV.looseCount; pV++) {
          const VV = UV.loose[pV],
            xV = JV.nodes[VV];
          xV && !xV.isBlocked && xV.isEnabled() && !xV.WZ.hasAZeroComponent && UV.selects(VV, eV.frustum) && (this.activate(xV, VV), this.selectedCount++)
        }
        const yV = UV.selectTextPlanes(eV.frustum, YV);
        for (let pV = 0; pV < yV; pV++) {
          const eV = YV[pV],
            UV = JV.nodes[eV],
            yV = xV.meshes.parts[eV];
          if (!UV.isVisible || !(UV.visibility > 0) || 0 === (UV.layerMask & VV.layerMask) || !yV) continue;
          const QV = this.groupOf(xV.meshes.layer[eV]).text;
          for (const VV of MU(yV)) QV.units.push(VV), QV.rows.push(eV);
          this.selectedCount++
        }
      }
      instanceBatch(VV) {
        const eV = this.batchOf(VV);
        return eV.dispatched || (eV.dispatched = eV.renderSelf = !0, eV.row = this.rowOf(VV)), eV
      }
      rowOf(VV) {
        return VV.row
      }
      activate(VV, eV) {
        if (!VV.JC) {
          const xV = VV;
          if (xV.NUV) {
            const VV = this.batchOf(xV);
            VV.dispatched = !0, VV.renderSelf = !0, VV.row = eV
          }
          return void this.dispatch(xV, eV, eV)
        }
        const xV = VV,
          JV = xV.XUV;
        if (JV._getWorldMatrixDeterminant() >= 0 !== xV._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${JV.name}`, `A mirrored InstancedMesh of ${JV.name} is not drawn yet`);
        const YV = this.batchOf(JV);
        YV.instances.push(xV), YV.rows.push(eV), YV.dispatched || (YV.dispatched = !0, this.dispatch(JV, eV, this.rowOf(JV)))
      }
      batchOf(VV) {
        let eV = this.batches.get(VV);
        return eV || (eV = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(VV, eV)), eV.frame !== this.frame && (eV.frame = this.frame, eV.dispatched = !1, eV.renderSelf = !1, eV.instances.length = 0, eV.rows.length = 0), eV
      }
      dispatch(VV, eV, xV) {
        const {
          layer: JV,
          parts: YV
        } = this.model.meshes;
        if (!YV[eV]) return;
        const UV = this.groupOf(JV[eV]),
          yV = VV;
        for (const pV of MU(YV[eV])) {
          const VV = zU(pV);
          if (!VV) continue;
          const eV = VV.needAlphaBlendingForMesh(yV) ? UV.transparent : VV.needAlphaTestingForMesh(yV) ? UV.alphaTest : UV.opaque;
          eV.units.push(pV), eV.rows.push(xV)
        }
      }
      groupOf(VV) {
        let eV = this.groups.get(VV);
        return eV || (eV = {
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
        }, this.groups.set(VV, eV)), eV
      }
    }

    function gU(VV) {
      VV.opaque.length = 0, VV.transparent.length = 0
    }
    class DU {
      constructor() {
        this.hn = new Map, this.enabled = [], this.groups = new Map, this.ZZ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(VV) {
        if (this.hn.has(VV)) return;
        const eV = {
          mesh: VV,
          observer: VV.onEffectiveEnabledStateChangedObservable.add((VV => {
            this.pW(eV, VV)
          })),
          index: -1,
          steady: null
        };
        this.hn.set(VV, eV), this.pW(eV, VV.isEnabled())
      }
      remove(VV) {
        const eV = this.hn.get(VV);
        eV && (eV.observer.remove(!0), this.pW(eV, !1), this.hn.delete(VV))
      }
      dropSteady() {
        for (const VV of this.hn.values()) VV.steady = null
      }
      base(VV) {
        return this.hn.get(VV)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          hn: this.hn.size
        }
      }
      forEachSelected(VV) {
        for (const [eV, xV] of this.groups) {
          for (const JV of xV.opaque) VV(JV.owner, "opaque", eV);
          for (const JV of xV.transparent) VV(JV.owner, "transparent", eV)
        }
        for (const eV of this.ZZ) VV(eV.mesh, "opaque", 0)
      }
      group(VV) {
        return this.groups.get(VV)
      }
      forEachGroup(VV) {
        this.groups.forEach(VV)
      }
      select(VV, eV) {
        if (this.drawn = 0, this.selected = 0, this.ZZ.length = 0, this.groups.forEach(gU), !VV) return;
        const xV = this.enabled;
        for (let JV = 0; JV < xV.length; JV++) {
          const YV = xV[JV];
          if (YV.steady && eV(YV, VV)) {
            this.selected++, this.ZZ.push(YV);
            continue
          }
          const UV = YV.mesh;
          if (UV.isBlocked || UV.WZ.hasAZeroComponent) continue;
          if (!UV.isVisible || UV.visibility <= 0 || 0 === (UV.layerMask & VV.layerMask)) continue;
          if (UV.NUV) {
            this.warned.has(UV.name) || (this.warned.add(UV.name), console.warn(`Lite: thin instance base ${UV.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: yV
          } = UV;
          if (!yV) continue;
          UV.computeWorldMatrix(), this.selected++;
          const pV = this.listsFor(UV.renderingGroupId);
          for (const VV of MU(yV)) {
            const eV = zU(VV);
            eV && (eV.needAlphaBlendingForMesh(UV) ? pV.transparent.push(VV) : pV.opaque.push(VV))
          }
        }
      }
      pW(VV, eV) {
        if (eV === VV.index >= 0) return;
        VV.steady = null;
        const xV = this.enabled;
        if (eV) VV.index = xV.length, xV.push(VV);
        else {
          const eV = xV.pop();
          eV !== VV && (xV[VV.index] = eV, eV.index = VV.index), VV.index = -1
        }
      }
      listsFor(VV) {
        let eV = this.groups.get(VV);
        return eV || (eV = {
          opaque: [],
          transparent: []
        }, this.groups.set(VV, eV)), eV
      }
    }
    var iU = xV(40867);
    class CU {
      constructor() {
        this.bundle = null, this.stale = !0, this.hn = new Set
      }
    }
    class aU {
      constructor(VV, eV, xV) {
        this.device = VV, this.slots = eV, this.host = xV, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new CU, this.jR = new CU, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new dY, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = VV => {
          VV.seen !== this.frame && (VV.draw && (VV.draw = null, this.args[5 * VV.slot + 1] = 0, this.argsDirty = !0, this.jR.stale ||= VV.jR), this.frame - VV.seen > 120 && (this.records.delete(VV.unit), this.freeSlots.push(VV.slot), VV.recorded && (this.bundleOf(VV).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(VV) {
          var eV, xV;
          let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (eV = null === (xV = globalThis.navigator) || void 0 === xV ? void 0 : xV.userAgent) && void 0 !== eV ? eV : "";
          const YV = VV.adapterInfo;
          return "intel" === (null === YV || void 0 === YV ? void 0 : YV.vendor) && "gen-12lp" === YV.architecture && JV.includes("Windows")
        }(VV), (0, iU.D)(this.direct)
      }
      pT() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, iU.D)(this.directThisFrame)
      }
      add(VV, eV, xV, JV) {
        let YV = this.records.get(VV);
        return YV || (YV = this.createRecord(VV), this.records.set(VV, YV)), YV.recorded && cU(YV, eV) || (this.bundleOf(YV).stale = !0), this.place(YV, eV, xV, JV), YV
      }
      bundleOf(VV) {
        return VV.jR ? this.jR : this.main
      }
      addAgain(VV, eV, xV, JV) {
        VV.recorded || (this.bundleOf(VV).stale = !0), this.place(VV, eV, xV, JV)
      }
      place(VV, eV, xV, JV) {
        VV.seen = this.frame, VV.jR && null === VV.draw && (this.jR.stale = !0), VV.draw = eV, this.drawn++, xV && this.slots.write(VV.slot, xV, JV) && (this.slotsFrom = Math.min(this.slotsFrom, VV.slot), this.slotsTo = Math.max(this.slotsTo, VV.slot));
        const YV = this.args,
          UV = 5 * VV.slot;
        YV[UV] === eV.count && YV[UV + 1] === eV.instances && YV[UV + 2] === eV.first || (YV[UV] = eV.count, YV[UV + 1] = eV.instances, YV[UV + 2] = eV.first, this.argsDirty = !0, this.jR.stale ||= VV.jR)
      }
      GZ() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(VV) {
        for (const eV of this.records.values()) eV.draw && eV.seen === this.frame && !eV.jR && VV(eV.draw, this.slots.data, eV.slot * nY / 4)
      }
      resourceDestroyed(VV) {
        this.main.stale ||= this.main.hn.has(VV), this.jR.stale ||= this.jR.hn.has(VV)
      }
      execute(VV, eV, xV) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(VV, eV, xV, "direct"), this.drawn;
        const JV = this.host.sceneGroup(eV);
        if (!JV) return this.main.bundle = null, this.jR.bundle = null, this.recordedSceneGroup = null, this.encode(VV, eV, xV, "direct"), this.drawn;
        this.recordedTarget === xV && this.recordedSceneGroup === JV || (this.recordedTarget = xV, this.recordedSceneGroup = JV, this.main.stale = !0, this.jR.stale = !0);
        const YV = this.main,
          UV = this.jR;
        let yV = !1;
        !YV.stale && YV.bundle || (YV.bundle = this.record(eV, xV, JV, "indirect"), yV = !0);
        const pV = (0, iU.m)();
        return (UV.stale || this.rangedEpoch !== pV) && (this.rangedEpoch = pV, UV.bundle = this.drawsRanged() ? this.record(eV, xV, JV, "jR") : this.noRangedBundle(), yV = !0), yV && (this.bundles = UV.bundle ? [YV.bundle, UV.bundle] : [YV.bundle]), VV.executeBundles(this.bundles), VV.setBindGroup(0, JV), this.drawn
      }
      record(VV, eV, xV, JV) {
        const YV = this.device.createRenderBundleEncoder({
          label: "jR" === JV ? "thin-bases-ranged" : "thin-bases",
          colorFormats: VV._colorFormat ? [VV._colorFormat] : [],
          depthStencilFormat: VV._depthStencilFormat,
          sampleCount: VV._sampleCount
        });
        return YV.setBindGroup(0, xV), this.encode(YV, VV, eV, JV), YV.finish()
      }
      noRangedBundle() {
        for (const VV of this.records.values()) VV.jR && (VV.recorded = !1);
        return this.jR.hn.clear(), this.jR.stale = !1, null
      }
      drawsRanged() {
        for (const VV of this.records.values())
          if (VV.jR && VV.draw) return !0;
        return !1
      }
      encode(VV, eV, xV, JV) {
        const YV = [];
        for (const QV of this.records.values()) "direct" !== JV && QV.jR !== ("jR" === JV) || (QV.recorded = !1, QV.draw && YV.push(QV));
        YV.sort(hU);
        const UV = "direct" === JV ? null : "jR" === JV ? this.jR : this.main;
        null === UV || void 0 === UV || UV.hn.clear(), this.binder.reset();
        let yV = !1;
        for (const QV of YV) {
          var pV;
          const YV = QV.draw,
            nV = this.host.pipelineFor(YV, eV, xV);
          if (!nV) {
            this.host.pipelineCompiling(YV, xV) ? yV = !0 : UV && this.keep(QV, YV, UV.hn);
            continue
          }
          let wV;
          if (QV.jR && "indirect" !== JV) {
            const VV = QV.unit.owner;
            wV = "direct" === JV && (0, iU.t)(VV) || (0, iU.o)(VV) || void 0
          }
          if (UV && this.keep(QV, YV, UV.hn), 0 === (null === (pV = wV) || void 0 === pV ? void 0 : pV.count)) continue;
          this.binder.bind(VV, YV, nV, this.slots.bindGroup, QV.slot * nY);
          const ZV = 5 * QV.slot;
          if ("indirect" === JV) {
            YV.indexBuffer ? VV.drawIndexedIndirect(this.argsBuffer, 4 * ZV) : VV.drawIndirect(this.argsBuffer, 4 * ZV);
            continue
          }
          const vV = this.args;
          wV ? oU(VV, null !== YV.indexBuffer, vV, ZV, wV) : YV.indexBuffer ? VV.drawIndexed(vV[ZV], vV[ZV + 1], vV[ZV + 2], 0, 0) : VV.draw(vV[ZV], vV[ZV + 1], vV[ZV + 2], 0)
        }
        UV && (UV.stale = yV)
      }
      keep(VV, eV, xV) {
        VV.recorded = !0, VV.pipelineKey = eV.pipelineKey, VV.materialGroup = eV.material.bindGroup, VV.vertexBuffers.length = 0, VV.vertexBuffers.push(...eV.vertexBuffers), VV.vertexOffsets = eV.vertexOffsets, VV.indexBuffer = eV.indexBuffer, VV.indexFormat = eV.indexFormat;
        for (const JV of eV.vertexBuffers) xV.add(JV);
        eV.indexBuffer && xV.add(eV.indexBuffer), xV.add(eV.material.buffer);
        for (const JV of eV.material.bound) JV && xV.add(JV)
      }
      createRecord(VV) {
        let eV = this.freeSlots.pop();
        return void 0 === eV && (eV = this.slotCount++, this.grow()), {
          unit: VV,
          slot: eV,
          jR: void 0 !== (0, iU.o)(VV.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.jR.stale = !0), 5 * this.slotCount > this.args.length) {
          const VV = new Uint32Array(2 * this.args.length);
          VV.set(this.args), this.args = VV, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function oU(VV, eV, xV, JV, YV) {
      const UV = xV[JV + 1],
        yV = YV.data;
      for (let pV = 0; pV < YV.count; pV++) {
        const YV = Math.min(yV[2 * pV], UV),
          QV = Math.min(yV[2 * pV + 1], UV - YV);
        0 !== QV && (eV ? VV.drawIndexed(xV[JV], QV, xV[JV + 2], 0, YV) : VV.draw(xV[JV], QV, xV[JV + 2], YV))
      }
    }

    function cU(VV, eV) {
      if (VV.pipelineKey !== eV.pipelineKey || VV.materialGroup !== eV.material.bindGroup || VV.indexBuffer !== eV.indexBuffer || VV.indexFormat !== eV.indexFormat || VV.vertexOffsets !== eV.vertexOffsets || VV.vertexBuffers.length !== eV.vertexBuffers.length) return !1;
      for (let xV = 0; xV < VV.vertexBuffers.length; xV++)
        if (VV.vertexBuffers[xV] !== eV.vertexBuffers[xV]) return !1;
      return !0
    }

    function hU(VV, eV) {
      return VU(VV.draw, eV.draw)
    }
    const lU = new WeakMap,
      LU = {
        depth: !1,
        sunShadow: !1
      };

    function fU(VV, eV) {
      let xV = lU.get(VV);
      xV || (xV = new Map, lU.set(VV, xV));
      const JV = `${eV.depth?"-depth":""}${eV.sunShadow?"-shadow":""}${eV.shadowMask?"-mask":""}`;
      let YV = xV.get(JV);
      if (!YV) {
        const UV = [{
          binding: Se.d,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Se.g
          }
        }, {
          binding: Se.y,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        eV.depth && UV.push({
          binding: Se.o,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), eV.sunShadow && UV.push(... function() {
          const VV = GPUShaderStage.FRAGMENT,
            eV = Se.r;
          return [{
            binding: eV.uniform,
            visibility: VV,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: eV.Ur,
            visibility: VV,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: eV.special,
            visibility: VV,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: eV.volume,
            visibility: VV,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: eV.sampler,
            visibility: VV,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: eV.entities,
            visibility: VV,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: eV.entityGrids,
            visibility: VV,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), eV.shadowMask && UV.push({
          binding: Se.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), YV = VV.createBindGroupLayout({
          label: `${eV.depth?"terrain-":""}shader-pack-inputs${JV}`,
          entries: UV
        }), xV.set(JV, YV)
      }
      return YV
    }

    function mU(VV) {
      return fU(VV, LU)
    }

    function KU(VV, eV) {
      if (!eV) return !1;
      const xV = (0, Ie.i)(VV);
      return !!xV && UJ(xV, eV)
    }

    function HU(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!RJ(eV)) return [];
      return [fU(VV, {
        depth: XJ(eV.packVariant),
        sunShadow: KU(eV.packVariant, xV),
        shadowMask: JV
      })]
    }
    class uU {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = VV, this.sunShadow = xV, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Se.g), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = VV.createBuffer({
          label: "shader-pack-inputs",
          size: Se.g,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const JV = (0, Se.z)(eV);
        this.textures = VV.createBuffer({
          label: "shader-pack-textures",
          size: JV.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), VV.queue.writeBuffer(this.textures, 0, JV), this.bindGroup = VV.createBindGroup({
          label: "shader-pack-inputs",
          layout: mU(VV),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Se.d,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Se.y,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(VV, eV, xV) {
        (0, Se.E)(this.data, {
          seconds: VV.seconds(),
          lit: xV,
          renderOffset: VV.renderOffset(),
          ReV: VV.ReV(),
          eyePosition: eV,
          shadowDirection: VV.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const JV = eV ? this.sunShadow : null;
        if ((eV || xV) && !JV) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!VV && !JV) return this.bindGroup;
        (VV && VV !== this.depthView || xV && xV !== this.maskView) && (this.depthView = null !== VV && void 0 !== VV ? VV : this.depthView, this.maskView = null !== xV && void 0 !== xV ? xV : this.maskView, this.groups.clear());
        const YV = (VV ? 1 : 0) | (JV ? 2 : 0) | (xV ? 4 : 0);
        let UV = this.groups.get(YV);
        if (!UV) {
          const eV = this.entries();
          VV && eV.push({
            binding: Se.o,
            resource: VV
          }), JV && eV.push(...JV.entries()), xV && eV.push({
            binding: Se.u,
            resource: xV
          }), UV = this.device.createBindGroup({
            label: `${VV||xV?"terrain-":""}shader-pack-inputs${VV?"-depth":""}${JV?"-shadow":""}${xV?"-mask":""}`,
            layout: fU(this.device, {
              depth: !!VV,
              sunShadow: !!JV,
              shadowMask: !!xV
            }),
            entries: eV
          }), this.groups.set(YV, UV)
        }
        return UV
      }
      bind(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        VV.setBindGroup(Se.e, this.bindGroupFor(eV, xV, JV))
      }
    }

    function sU(VV, eV, xV) {
      if (VV.gpuVersion === eV.gpuBuffersVersion) return !0;
      let JV;
      do {
        if (JV = eV.gpuBuffersVersion, !SU(VV, eV, xV)) return !1
      } while (eV.gpuBuffersVersion !== JV);
      return VV.gpuVersion = JV, VV.fitInstances = 0, !0
    }

    function SU(VV, eV, xV) {
      let JV = null;
      for (let UV = 0; UV < VV.slotData.length; UV++) {
        var YV;
        const yV = VV.slotData[UV],
          pV = yV ? eV.gpuBuffer(yV) : xV;
        if (!pV) return !1;
        yV && VV.layout.instanceEnds[UV] < 0 && eV.cover(yV, Number.POSITIVE_INFINITY), VV.buffers[UV] = pV;
        const QV = VV.IVV[UV] + (yV ? eV.gpuOffset(yV) : 0);
        QV !== (null !== (YV = JV) && void 0 !== YV ? YV : VV.offsets)[UV] && (JV ??= VV.offsets.slice(), JV[UV] = QV), VV.ends[UV] = yV ? eV.gpuEnd(yV) : pV.size
      }
      return JV && (VV.offsets = JV), !0
    }

    function IU(VV, eV, xV, JV) {
      if (eV <= VV.fitInstances) return null;
      const {
        layout: YV,
        ends: UV,
        offsets: yV,
        slotData: pV,
        IVV: QV
      } = VV;
      let nV = !1;
      for (let wV = 0; wV < YV.buffers.length; wV++) {
        const VV = YV.instanceEnds[wV];
        if (VV < 0) continue;
        const JV = (eV - 1) * YV.buffers[wV].arrayStride + VV;
        if (UV[wV] - yV[wV] < JV) return {
          index: wV,
          needed: JV
        };
        const ZV = pV[wV];
        ZV && xV.cover(ZV, QV[wV] + JV) && (nV = !0)
      }
      return nV && sU(VV, xV, JV), VV.fitInstances = eV, null
    }
    var dU = xV(38977),
      OU = xV(39003);
    const Vy = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      ey = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      xy = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Jy = `((vertexInputs.aPackedLightLevels >> 16u) | ${We.c.placed}u)`,
      Yy = "u32(vertexInputs.aShaderPackItem.x)",
      Uy = `${We.c.lifeform}u`;

    function yy(VV) {
      return "item" === VV.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const py = "bloxdSpEnchant",
      Qy = "floor(finalWorld[3].xyz)";

    function ny(VV, eV, xV) {
      return "placed" === eV.kind && VV.reads[xV].includes("bloxdFragmentBlockPosition")
    }

    function wy(VV, eV) {
      let [xV, JV] = VV;
      return xV === eV.point && JV === eV.code
    }

    function Zy(VV, eV) {
      var xV, JV, YV;
      const UV = null === (xV = VV.find((VV => VV.texture))) || void 0 === xV ? void 0 : xV.texture,
        yV = null === (JV = VV.find((VV => VV.enchantTier))) || void 0 === JV ? void 0 : JV.enchantTier,
        pV = null === (YV = VV.find((VV => VV.overlay))) || void 0 === YV ? void 0 : YV.overlay,
        QV = pV ? eV.filter((VV => wy(VV, pV))).length : 0;
      return pV && 1 === QV ? {
        texture: UV,
        overlay: pV,
        enchantTier: yV
      } : {
        texture: UV,
        enchantTier: yV
      }
    }

    function vy(VV) {
      if ("item" === VV.kind) {
        return {
          vertexFlags: `(${Yy} & 0xffffu)`,
          varying: "vPackItem",
          value: Yy,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return VV.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Jy,
        varying: "vPackFlags",
        value: Jy,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function ry(VV) {
      return "lifeform" === VV.kind ? Uy : "0u"
    }

    function ky(VV) {
      return !!VV.BLOXD_PLUGIN_ENCHANTMENT
    }

    function by(VV, eV) {
      const {
        enchantTier: xV
      } = eV;
      return xV && ky(eV.defines) && "lifeform" === eV.kind && Fy(VV, "enchantTier") ? xV : null
    }

    function Ey(VV, eV) {
      return ky(eV.defines) && Fy(VV, "enchantSpeed")
    }

    function By(VV) {
      const {
        overlay: eV,
        defines: xV
      } = VV;
      if (!eV || !xV.DIFFUSE) return null;
      const JV = xV.VERTEXCOLOR || xV.INSTANCESCOLOR && xV.INSTANCES;
      return `vec4f(${eV.colour}.rgb * uniforms.vDiffuseInfos.y${JV?" * fragmentInputs.vColor.rgb":""}, ${eV.colour}.a)`
    }
    const jy = "fragmentInputs.vPackTexture";

    function qy(VV) {
      const {
        atlas: eV,
        defines: xV,
        texture: JV
      } = VV;
      if (eV || !xV.DIFFUSE) return null;
      if (JV) return {
        texture: "diffuseSampler",
        ...JV
      };
      const YV = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===xV.DIFFUSEDIRECTUV?"vMainUV1":2===xV.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== VV.kind) return YV;
      if (!xV.BLOXD_PLUGIN_ANIMATED) return {
        ...YV,
        id: jy
      };
      const UV = TV.d.WGSL,
        yV = (0, TV.Gb)(UV, "uAnimStatesNum"),
        pV = (0, TV.ib)(UV, (0, dU.e)(UV), yV),
        QV = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${yV})`,
        layers: [pV],
        uv: `vec2f(${QV}.x, ${QV}.y * ${yV} - ${pV})`,
        levelUv: QV,
        id: jy
      }
    }

    function ty(VV, eV) {
      return "box" === eV.kind && !!VV.hooks.surface && null !== qy(eV)
    }

    function Fy(VV, eV) {
      return VV.reads.fragment.includes(eV)
    }

    function Ty(VV) {
      return !!VV.BLOXD_LIGHTING && !VV.BLOXD_UNLIT
    }

    function Py(VV, eV, xV, JV) {
      const YV = VV.filter((VV => {
        let [xV, JV] = VV;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === xV && JV === eV
      }));
      if (1 !== YV.length) throw new Error(`A model program for shader packs has ${0===YV.length?"no":"more than one"} ${JV} code before fog (lite/modelShaderPack.ts)`);
      return VV.map((VV => VV === YV[0] ? [VV[0], xV] : VV))
    }

    function Ay(VV, eV, xV, JV) {
      const {
        hooks: YV
      } = VV, {
        kind: UV,
        defines: yV
      } = eV, pV = [...xV];
      var QV;
      eV.atlas && YV.surface && pV.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", vJ("atlasIdxIn")]), "item" === UV && pV.push(["CUSTOM_VERTEX_DEFINITIONS", (0, TV.f)(TV.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), ty(VV, eV) && pV.push(["CUSTOM_VERTEX_DEFINITIONS", (0, TV.f)(TV.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (QV = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${wJ}[min(u32(${QV}) - 1u, arrayLength(&${wJ}) - 1u)], ${QV} > 0.5);\n`)]);
      const nV = vy(eV);
      nV && (YV.surface || YV.light) && pV.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${nV.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${nV.varying} = ${nV.value};`]);
      let wV = JV;
      if (ny(VV, eV, "fragment") && (pV.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Qy});`]), wV = [...wV, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Fy(VV, "localPosition") && pV.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${yy(eV)};`]), ky(yV) && YV.surface) {
        Ey(VV, eV) && pV.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const xV = by(VV, eV);
        xV && pV.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${xV});`]);
        const JV = (0, TV.rb)(TV.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        wV = [...Py(wV, (0, OU.i)(TV.d.WGSL), JV, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, OU.c)(py)]]
      }
      const {
        overlay: ZV
      } = eV;
      ZV && By(eV) && YV.surface && (wV = wV.filter((VV => !wy(VV, ZV))));
      const vV = YV.light ? function(VV) {
        return "placed" === VV.kind ? {
          name: "terrain",
          engine: (0, He.P)(TV.d.WGSL),
          pack: (0, He.lb)(TV.d.WGSL)
        } : VV.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, He.M)(TV.d.WGSL),
          pack: (0, He.fb)(TV.d.WGSL)
        } : null
      }(eV) : null;
      if (vV && (wV = Py(wV, vV.engine, vV.pack, `${vV.name} light`), "placed" !== UV && Ty(yV))) {
        const VV = yV.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, TV.Gb)(TV.d.WGSL, "uEntityLightLevels") : (0, TV.Kb)(TV.d.WGSL, "aLightLevels");
        pV.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${He.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, He.hb)(TV.d.WGSL, VV)])
      }
      return {
        vertexCode: pV,
        fragmentCode: wV
      }
    }

    function Ny(VV, eV, xV, JV) {
      return JJ(VV, eV, xV, JV, "model")
    }
    const Xy = "\t@builtin(position) position: vec4f,\n";

    function My(VV, eV) {
      const xV = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(VV)[0];
      return `${xV}${eV}${VV.slice(xV.length)}`
    }

    function zy(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: YV
      } = eV, UV = UJ(eV, JV), {
        kind: yV,
        defines: pV
      } = xV, QV = function(VV, eV) {
        var xV, JV, YV;
        const {
          defines: UV
        } = eV, yV = vy(eV), pV = !!UV.FOG, QV = ky(UV), nV = null !== (xV = null === yV || void 0 === yV ? void 0 : yV.enchantTier) && void 0 !== xV ? xV : by(VV, eV) ? "fragmentInputs.vPackEnchantTier" : "0u", wV = "lifeform" === eV.kind && !UV.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (JV = null === yV || void 0 === yV ? void 0 : yV.vertexFlags) && void 0 !== JV ? JV : ry(eV),
          vertexLocalPosition: yy(eV),
          flags: null !== (YV = null === yV || void 0 === yV ? void 0 : yV.flags) && void 0 !== YV ? YV : ry(eV),
          normal: "normalW",
          alpha: wV ? "alpha * baseColor.a" : "alpha",
          alphaOut: wV ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: pV ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: pV ? "1.0 - fog" : "0.0",
          enchantTier: nV,
          enchantColour: QV ? `${py}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Ey(VV, eV) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Fy(VV, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: By(eV)
        }
      }(eV, xV), nV = VV.textures.filter((VV => /^textureAtlas\d+$/.test(VV.name))).length, wV = xV.atlas && nV > 0 ? {
        count: nV,
        layers: xV.atlas.layers,
        width: xV.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: VV.material.slots.has("uAnimDataPerTex") ? (eV, xV) => SJ(eV, xV, function(VV) {
          const eV = VV.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            iZ: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: VV => `uniforms.uAnimDataPerTex[${VV}]${eV}`
          }
        }(VV)) : null
      } : null, ZV = "placed" === yV ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", vV = null !== wV && void 0 !== wV ? wV : qy(xV), rV = function(VV, xV) {
        let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Se.B)()}${pJ(eV,xV)}${JV}${kJ(VV)}${VJ}${ZV}${eV.code}`
      };
      let {
        vertex: kV,
        fragment: bV
      } = VV;
      const EV = EJ(YV, QV);
      if (EV) {
        const VV = ny(eV, xV, "vertex") ? `\tbloxdSpCell = ${Qy};\n` : "";
        kV = Ny(kV, Vy, `${VV}${EV.slice(1)}${Vy}`, "vertex")
      }
      const BV = `${QJ(eV,UV,function(VV,eV){return eV.TWOSIDEDLIGHTING?VV:`select(-(${VV}), ${VV}, fragmentInputs.frontFacing)`}(QV.normal,pV),QV.flags)}${BJ(YV,eV.strict,eV.program,vV,QV)}`;
      BV && (bV = Ny(bV, ey, `${BV.slice(1)}${ey}`, "surface")), UV && eV.sunShadow && !pV.TWOSIDEDLIGHTING && (bV = Ny(bV, Xy, `${Xy}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const jV = tJ(YV);
      if (jV) {
        const VV = qJ(YV, Ty(pV), !0, QV);
        bV = Ny(bV, xy, `${VV}${jV.slice(1)}${xy}`, "light")
      }
      const qV = ty(eV, xV) ? ZJ : "";
      return {
        ...VV,
        vertex: My(kV, rV(wV, !1, qV)),
        fragment: My(bV, rV(vV, UV))
      }
    }
    const Gy = {
      name: "earthSky",
      uniqueId: -1
    };
    class Wy {
      constructor(VV, eV) {
        this.resources = VV, this.epoch = eV, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const VV of this.instances.values()) VV.released = !0, this.resources.destroyBuffer(VV.buffer);
        this.instances.clear()
      }
    }

    function Ry(VV) {
      return VV.failed && null !== VV.packGroup
    }
    class gy {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new DU,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new RU;
        this.device = VV, this.resources = eV, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.uVV = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new dY, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new qU((VV => this.modelSlot(VV).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Re.b)("Lite: "), this.renderStates = new kU(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (VV, eV) => this.keepSteady(VV, eV), this.lists = void 0, this.slotCount = 0, this.uVV = JV, this.modelMeshes = YV, this.lists = new OY(YV, JV, this, this.warnOnce), this.drawDefines = new wU(eV, this.warnOnce, ((VV, eV, xV) => this.programWithModel(VV, eV, xV)), Ry), this.vertexLayouts = new PU(eV, VV.limits, this.warnOnce), this.sceneLayout = Pe(VV), this.frameLayout = VV.createBindGroupLayout({
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
        }), this.frameBuffer = VV.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new XU(VV, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = VV.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new aU(VV, new XU(VV, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (VV, eV, xV) => this.pipelineFor(VV, eV, xV),
          pipelineCompiling: (VV, eV) => !VV.program.failed && !1 !== this.pipelines.get(`${VV.pipelineKey}|${eV}`),
          sceneGroup: VV => {
            const eV = xV(VV);
            return eV || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), eV
          }
        }), eV.onDestroy = VV => {
          this.thinBundle.resourceDestroyed(VV)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const YV = {
          order: VV,
          isTransparent: eV,
          _direct: !eV,
          bind: (VV, eV) => this.createBinding(YV, eV, xV, JV)
        };
        return YV
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(VV, eV, xV) {
        var JV;
        let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = eV, this.drawDefines.view = eV, this.thinBundle.pT(), this.writeFrameUniforms();
        const UV = null !== (JV = null === YV || void 0 === YV ? void 0 : YV.defineFor("model")) && void 0 !== JV ? JV : 0;
        this.drawDefines.modelPackVariant = UV, YV && 0 !== UV && (this.packInputs ??= new uU(this.device, YV.textureLayers(), this.sunShadow), this.packInputs.write(YV, eV.eye, YV.eE())), this.lists.clear(), this.slotCount = 0;
        const yV = VV.activeCamera;
        this.uVV.select(yV, this.keepSteadyBase), this.modelMeshes.select(yV, eV), xV && this.pushEarthSky(xV), this.lists.collect(VV), this.thinBundle.GZ(), this.uploadMeshSlots()
      }
      pushDraws(VV, eV, xV, JV, YV, UV) {
        let yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const pV = UV.length;
        for (let QV = 0; QV < xV; QV++) {
          const xV = eV[QV];
          let pV = this.retainedDraw(VV, xV, JV, YV);
          if (void 0 === pV && (pV = this.drawFor(VV, xV, JV, YV), this.retain(xV, pV)), pV) {
            const VV = xV.owner,
              eV = yV ? yV[QV] : -1;
            pV.slotOffset = eV < 0 ? this.writeMeshSlot(VV.getWorldMatrix().m, VV.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[eV], 16 * eV), UV.push(pV)
          }
        }
        return UV.length - pV
      }
      bundleDraws(VV, eV, xV) {
        let JV = 0;
        for (const YV of eV) {
          let eV = this.retainedDraw(VV, YV, xV, !1);
          const UV = void 0 !== eV;
          if (void 0 === eV && (eV = this.drawFor(VV, YV, xV, !1), this.retain(YV, eV)), eV) {
            const VV = YV.owner,
              xV = this.thinBundle.add(YV, eV, VV.getWorldMatrix().m, VV.visibility);
            UV && this.steadyFrom(YV, eV, xV), JV++
          }
        }
        return JV
      }
      steadyFrom(VV, eV, xV) {
        const JV = VV.owner,
          YV = this.uVV.base(JV),
          UV = JV.material,
          {
            drawState: yV,
            instance: pV
          } = eV.inputs.retained;
        if (!YV || !UV || 1 !== VV.parts.materials.length || zU(VV) !== UV) return;
        const QV = YV.steady ??= {
          unit: VV,
          material: UV,
          visibility: 1,
          draw: eV,
          record: xV,
          drawState: yV,
          instance: pV,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        QV.unit = VV, QV.material = UV, QV.visibility = JV.visibility, QV.draw = eV, QV.record = xV, QV.drawState = yV, QV.instance = pV, QV.bindGroup = pV.bindGroup, QV.gpuVersion = this.resources.gpuBuffersVersion, QV.fitInstances = eV.inputs.fitInstances, QV.worldFlag = JV.getWorldMatrix().updateFlag, QV.handedFrame = this.frame
      }
      keepSteady(VV, eV) {
        const xV = VV.steady;
        if (xV.handedFrame !== this.frame - 1 || (this.frame + xV.phase) % 8 === 0) return !1;
        const JV = VV.mesh,
          {
            unit: YV,
            draw: UV,
            instance: yV,
            drawState: pV
          } = xV,
          QV = JV.forcedInstanceCount || JV.VeV;
        if (!JV.isVisible || JV.NUV || JV.visibility !== xV.visibility || 0 === (JV.layerMask & eV.layerMask) || JV.material !== xV.material || 0 !== JV.renderingGroupId || JV.hasVertexAlpha || !this.drawDefines.definesHold(pV, YV, pV.instancing) || xV.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(UV.inputs, YV, pV.instancing, UV.program) || UV.program.failed || yV.released || QV <= 0 || QV > xV.fitInstances) return !1;
        if (yV.frame !== this.frame && this.bindMaterial(yV, this.modelUniforms.refreshModelUniforms(JV.dD(), yV, yV.model, this.view)), !yV.bindable || yV.bindGroup !== xV.bindGroup) return !1;
        const nV = JV.computeWorldMatrix(),
          wV = nV.updateFlag !== xV.worldFlag;
        return xV.worldFlag = nV.updateFlag, UV.instances = QV, this.thinBundle.addAgain(xV.record, UV, wV ? nV.m : null, xV.visibility), xV.handedFrame = this.frame, this.uVV.drawn++, !0
      }
      retainedDraw(VV, eV, xV, JV) {
        const YV = this.inputs.get(eV),
          UV = null === YV || void 0 === YV ? void 0 : YV.retained;
        if (!YV || !UV) return;
        const {
          drawState: yV,
          program: pV,
          instance: QV,
          instancing: nV
        } = UV, wV = eV.owner;
        if (YU(wV) !== nV) return;
        const ZV = this.instanceCount(wV, nV);
        if (ZV <= 0) return null;
        if (QV.released || pV.failed || yV.program !== pV || !this.drawDefines.programCurrent(yV, eV, nV, xV) || !this.inputsStamped(YV, eV, nV, pV) || wV.isUnIndexed !== UV.unIndexed || this.indexKey(eV) !== UV.indexData) return;
        if (UV.indexBuffer && UV.gpuVersion !== this.resources.gpuBuffersVersion) {
          const VV = this.resources.gpuBuffer(UV.indexData);
          if (!VV) return;
          UV.indexBuffer = VV, UV.gpuVersion = this.resources.gpuBuffersVersion
        }
        let vV = !1;
        if (QV.frame !== this.frame && (vV = this.modelUniforms.refreshModelUniforms(VV, QV, QV.model, this.view)), !this.bindMaterial(QV, vV) || !this.withGpuBuffers(YV) || !this.instanceBuffersFit(wV.name, YV, ZV)) return null;
        const rV = this.makeDraw(pV, YV, this.renderStates.renderState(yV.model, wV, JV, YV.state), QV, ZV);
        return this.setRange(rV, eV, UV.indexBuffer, UV.indexData), rV
      }
      retain(VV, eV) {
        const xV = this.drawDefines.drawStates.get(VV);
        if (!eV || !xV || xV.program !== eV.program) {
          const eV = this.inputs.get(VV);
          return void(eV && (eV.retained = null))
        }
        const JV = VV.owner,
          YV = xV.instancing,
          UV = this.indexKey(VV),
          yV = eV.inputs.retained;
        yV ? (yV.drawState = xV, yV.instancing = YV, yV.program = eV.program, yV.instance = eV.material, yV.indexData = UV, yV.unIndexed = JV.isUnIndexed, yV.indexBuffer = eV.indexBuffer, yV.gpuVersion = this.resources.gpuBuffersVersion) : eV.inputs.retained = {
          drawState: xV,
          instancing: YV,
          program: eV.program,
          instance: eV.material,
          indexData: UV,
          unIndexed: JV.isUnIndexed,
          indexBuffer: eV.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(VV, eV, xV, JV) {
        const YV = eV.owner,
          UV = zU(eV);
        if (!UV) return null;
        const yV = UV.getClassName();
        let pV = null;
        if (function(VV) {
            return "LinesMesh" === VV.getClassName()
          }(YV)) {
          if (! function(VV) {
              return "ShaderMaterial" === VV.getClassName() && "color" === VV.shaderPath
            }(UV)) return this.warnOnce(`lines:${yV}`, `A LinesMesh with a ${yV} is not drawn yet (${UV.name})`), null;
          pV = YV
        } else if ("StandardMaterial" !== yV && "LiteMaterial" !== yV) return this.warnOnce(`class:${yV}`, `${yV} is not drawn yet (${UV.name})`), null;
        const QV = YU(YV),
          nV = this.instanceCount(YV, QV);
        if (nV <= 0) return null;
        const wV = pV ? this.lineProgramFor(YV, xV, QV) : this.drawDefines.programFor(VV, eV, UV, xV, QV);
        if (!wV || wV.failed) return null;
        const ZV = pV ? null : this.drawDefines.drawStates.get(eV).model,
          vV = ZV ? this.modelInstance(ZV, wV) : this.materialInstance(YV, wV);
        let rV = !1;
        if (vV.frame !== this.frame && (pV ? jV(vV.ubo, pV) : rV = this.modelUniforms.refreshModelUniforms(VV, vV, vV.model, this.view)), !this.bindMaterial(vV, rV)) return null;
        const kV = this.meshInputs(eV, wV, QV);
        if (!kV || !this.instanceBuffersFit(YV.name, kV, nV)) return null;
        const bV = this.indexKey(eV);
        let EV = null;
        if (bV && !YV.isUnIndexed && (EV = this.resources.gpuBuffer(bV), !EV)) return null;
        const BV = this.renderStates.renderState(null !== ZV && void 0 !== ZV ? ZV : UV, YV, JV, kV.state, pV ? "line-list" : "triangle-list"),
          qV = this.makeDraw(wV, kV, BV, vV, nV);
        return this.setRange(qV, eV, EV, bV), qV
      }
      indexKey(VV) {
        const eV = QU(VV);
        return eV ? this.resources.modelIndex(eV) : null
      }
      setRange(VV, eV, xV, JV) {
        xV && (VV.indexBuffer = xV, VV.indexFormat = this.resources.indexFormat(JV));
        const YV = 4 * eV.range + (xV ? 0 : 2);
        VV.unit = eV, VV.first = eV.parts.TE[YV], VV.count = eV.parts.TE[YV + 1]
      }
      makeDraw(VV, eV, xV, JV, YV) {
        eV.state !== xV && (eV.state = xV, eV.pipelineKey = `${VV.id}|${eV.layout.key}|${xV.key}`, eV.pipeline = null);
        const UV = eV.draw ??= {
          program: VV,
          inputs: eV,
          pipelineKey: "",
          layout: eV.layout,
          state: xV,
          material: JV,
          slotOffset: 0,
          vertexBuffers: eV.buffers,
          vertexOffsets: eV.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: YV,
          unit: null
        };
        return UV.program = VV, UV.pipelineKey = eV.pipelineKey, UV.state = xV, UV.material = JV, UV.vertexOffsets = eV.offsets, UV.indexBuffer = null, UV.instances = YV, UV
      }
      instanceCount(VV, eV) {
        switch (eV) {
          case "thin":
            return VV.forcedInstanceCount || VV.VeV;
          case "instanced":
            return this.prepareInstances(VV);
          case "none":
            return 1
        }
      }
      prepareInstances(VV) {
        const eV = function(VV, eV) {
          const xV = eV._userInstancedBuffersStorage,
            JV = VV.batchUploads.get(eV);
          if (JV) {
            var YV;
            if (JV.layout === (null !== (YV = null === xV || void 0 === xV ? void 0 : xV.interleavedKinds) && void 0 !== YV ? YV : null)) return JV;
            JV.release()
          }
          return new re(VV, eV, xV)
        }(this.resources, VV);
        return eV.frame !== this.frame && eV.pack(VV, this.modelMeshes.instanceBatch(VV), this.modelMeshes.worlds, this.frame), eV.count
      }
      programWithModel(VV, eV, xV) {
        const JV = this.modelSlot(VV),
          YV = ZU(JV, VV, xV),
          UV = this.drawDefines.modelPackKind(VV),
          yV = UV ? function(VV, eV, xV, JV) {
            const YV = (0, NV.v)(VV, PV.h.name),
              UV = [];
            for (const {
                feature: QV,
                state: nV,
                active: wV
              }
              of VV.features) {
              var yV, pV;
              const VV = wV ? null === (yV = (pV = (0, ge.j)(QV)).Xk) || void 0 === yV ? void 0 : yV.call(pV, nV) : void 0;
              VV && UV.push(VV)
            }
            return {
              kind: eV,
              atlas: null !== YV && void 0 !== YV && YV.active ? (0, PV.d)(YV.state) : null,
              defines: xV,
              ...Zy(UV, JV)
            }
          }(VV, UV, eV, JV.fragmentCode) : null;
        if (yV && function(VV) {
            const eV = VV.defines;
            return (null === VV.atlas || !!eV.DIFFUSE && 1 === eV.DIFFUSEDIRECTUV) && !!eV.NORMAL && !eV.REFLECTION && !eV.EMISSIVEASILLUMINATION && !eV.LINKEMISSIVEWITHDIFFUSE
          }(yV)) {
          const xV = this.modelPackProgram(VV, eV, `${YV}#${UV}#sp${this.drawDefines.modelPackVariant}`, JV, yV);
          if (xV && !xV.failed) return xV
        }
        const pV = this.programs.get(YV);
        if (pV || this.unbuildable.has(YV)) return null !== pV && void 0 !== pV ? pV : null;
        let QV;
        try {
          QV = GY({
            defines: yU(eV),
            vertexCode: JV.vertexCode,
            fragmentCode: JV.fragmentCode,
            pluginUniforms: JV.pluginUniforms
          })
        } catch (nV) {
          return this.unbuildable.add(YV), this.warnOnce(`build:${YV}`, `could not build a program for ${VV.name}: ${String(nV)}`), null
        }
        return this.createProgram(YV, QV, "standard")
      }
      modelPackProgram(VV, eV, xV, JV, YV) {
        const UV = this.programs.get(xV);
        if (UV || this.unbuildable.has(xV)) return null !== UV && void 0 !== UV ? UV : null;
        const yV = this.drawDefines.modelPackVariant;
        let pV;
        try {
          const VV = function(VV) {
              return (0, Ie.e)(VV, "model")
            }(yV),
            xV = Ay(VV, YV, JV.vertexCode, JV.fragmentCode);
          pV = zy(GY({
            defines: yU(eV),
            ...xV,
            pluginUniforms: JV.pluginUniforms
          }), VV, YV, !!this.sunShadow)
        } catch (wV) {
          return this.unbuildable.add(xV), this.warnOnce(`build:${xV}`, `could not build a shader pack program for ${VV.name}, which draws without the pack: ${String(wV)}`), null
        }
        const QV = KU(yV, !!this.sunShadow),
          nV = {
            group: this.packInputs.bindGroupFor(null, QV),
            layout: fU(this.device, {
              depth: !1,
              sunShadow: QV
            })
          };
        return this.createProgram(xV, pV, function(VV) {
          return `standard-sp${VV}`
        }(yV), nV)
      }
      lineProgramFor(VV, eV, xV) {
        const JV = BV(VV, xV, eV, this.view);
        let YV = this.linePrograms.get(JV);
        var UV;
        return YV || (YV = this.createProgram(`lines#${JV}`, (UV = function(VV) {
          const eV = new Map;
          for (let xV = 0; xV < nV.length; xV++) VV & 1 << xV && eV.set(nV[xV], !0);
          return eV
        }(JV), DY({
          defines: UV,
          vertex: RY,
          fragment: gY,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(JV, YV)), YV
      }
      createProgram(VV, eV, xV) {
        var JV;
        let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const UV = this.nextProgramId++,
          yV = `${xV}-${UV}`,
          pV = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          QV = [{
            binding: 0,
            visibility: pV,
            buffer: {
              type: "uniform"
            }
          }];
        for (const ZV of eV.textures) QV.push({
          binding: ZV.binding,
          visibility: pV,
          texture: {
            viewDimension: ZV.dimension
          }
        }), QV.push({
          binding: ZV.samplerBinding,
          visibility: pV,
          sampler: {}
        });
        const nV = this.device.createBindGroupLayout({
            label: yV,
            entries: QV
          }),
          wV = {
            key: VV,
            id: UV,
            kind: xV,
            program: eV,
            vertex: this.device.createShaderModule({
              label: `${yV}-vertex`,
              code: eV.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${yV}-fragment`,
              code: eV.fragment
            }),
            materialLayout: nV,
            pipelineLayout: this.device.createPipelineLayout({
              label: yV,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, nV, ...YV ? [YV.layout] : []]
            }),
            packGroup: null !== (JV = null === YV || void 0 === YV ? void 0 : YV.group) && void 0 !== JV ? JV : null,
            failed: !1
          };
        return this.programs.set(VV, wV), wV
      }
      writeFrameUniforms() {
        const VV = this.frameUniforms;
        jU(this.view, VV), this.device.queue.writeBuffer(this.frameBuffer, 0, VV)
      }
      materialInstance(VV, eV) {
        let xV = this.materials.get(VV);
        if (!xV) {
          const eV = new Map;
          this.materials.set(VV, eV);
          const {
            resources: JV,
            materials: YV
          } = this;
          VV.eC.addOnce((() => {
            for (const VV of eV.values()) VV.released = !0, JV.destroyBuffer(VV.buffer);
            YV.delete(VV)
          })), xV = eV
        }
        let JV = xV.get(eV.key);
        return JV || (JV = this.newMaterialInstance(VV, null, eV), xV.set(eV.key, JV)), JV
      }
      modelInstance(VV, eV) {
        const xV = this.modelSlot(VV);
        let JV = xV.instances.get(eV.key);
        return JV || (JV = this.newMaterialInstance(VV, VV, eV), xV.instances.set(eV.key, JV)), JV
      }
      modelSlot(VV) {
        var eV;
        let xV = VV.gpu[MV.f.lite];
        return (null === (eV = xV) || void 0 === eV ? void 0 : eV.epoch) !== this.resources.epoch && (xV = new Wy(this.resources, this.resources.epoch), VV.gpu[MV.f.lite] = xV), xV
      }
      newMaterialInstance(VV, eV, xV) {
        const JV = xV.program.material.floats,
          YV = new Float32Array(JV),
          UV = new Map;
        return {
          owner: VV,
          model: eV,
          program: xV,
          data: YV,
          uploaded: new Float32Array(JV).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${VV.name}-uniforms`,
            size: Math.max(16, 4 * JV),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: UV,
          ubo: new BU(xV.program.material.slots, YV, UV),
          bindGroup: null,
          bound: new Array(2 * xV.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(VV) {
        var eV;
        const xV = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: cY + hY,
            fragment: cY + lY,
            attributes: [],
            material: oY,
            textures: []
          }, "earthSky"),
          JV = this.earthSkyUniforms ??= this.newMaterialInstance(Gy, null, xV);
        this.earthSkyFrom !== VV && (this.earthSkyFrom = VV, JV.data.fill(0)), SY(JV.ubo, VV, this.view);
        const YV = this.vertexInputs(xV, Gy, "earthSky", xV, null);
        if (xV.failed || !YV || !this.bindMaterial(JV, !1)) return;
        const UV = null !== (eV = YV.state) && void 0 !== eV ? eV : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          yV = this.makeDraw(xV, YV, UV, JV, 1);
        yV.count = iY.length;
        const pV = IY(VV, this.view);
        yV.slotOffset = this.writeMeshSlot(pV, 1), this.lists.skyDraws.push(yV)
      }
      uploadIfChanged(VV) {
        const {
          data: eV,
          uploaded: xV
        } = VV;
        for (let JV = 0; JV < eV.length; JV++)
          if (eV[JV] !== xV[JV]) return xV.set(eV), void this.device.queue.writeBuffer(VV.buffer, 0, eV)
      }
      bindMaterial(VV, eV) {
        return VV.frame !== this.frame && (VV.frame = this.frame, eV || this.uploadIfChanged(VV), VV.bindable = this.bindTextures(VV)), VV.bindable
      }
      bindTextures(VV) {
        const {
          program: eV,
          bound: xV
        } = VV, JV = eV.program.textures;
        let YV = !VV.bindGroup,
          UV = !0;
        for (let yV = 0; yV < JV.length; yV++) {
          const eV = VV.textures.get(JV[yV].name),
            pV = eV ? this.resources.boundTexture(eV) : null;
          pV ? xV[2 * yV] === pV.view && xV[2 * yV + 1] === pV.sampler || (xV[2 * yV] = pV.view, xV[2 * yV + 1] = pV.sampler, YV = !0) : (eV || VV.ubo.expected.has(JV[yV].name) || this.warnOnce(`texture:${VV.owner.name}:${JV[yV].name}`, `${VV.owner.name} has no ${JV[yV].name}`), UV = !1)
        }
        if (!UV) return YV && (VV.bindGroup = null), !1;
        if (YV) {
          const YV = [{
            binding: 0,
            resource: {
              buffer: VV.buffer
            }
          }];
          for (let VV = 0; VV < JV.length; VV++) YV.push({
            binding: JV[VV].binding,
            resource: xV[2 * VV]
          }), YV.push({
            binding: JV[VV].samplerBinding,
            resource: xV[2 * VV + 1]
          });
          VV.bindGroup = this.device.createBindGroup({
            label: `${VV.owner.name}-material`,
            layout: eV.materialLayout,
            entries: YV
          })
        }
        return !0
      }
      writeMeshSlot(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, VV, eV, xV), this.slotCount++ * nY
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(VV, eV, xV, JV, YV) {
        let UV = this.inputs.get(VV);
        if (!UV || UV.program !== JV || !AU(eV, UV, this.resources, YV)) {
          var yV;
          if (UV = null !== (yV = this.vertexLayouts.resolveInputs(eV, xV, JV, YV)) && void 0 !== yV ? yV : void 0, !UV) return null;
          this.inputs.set(VV, UV)
        }
        return this.withGpuBuffers(UV)
      }
      meshInputs(VV, eV, xV) {
        const JV = this.inputs.get(VV);
        if (JV && this.inputsStamped(JV, VV, xV, eV)) return this.withGpuBuffers(JV);
        const YV = VV.owner,
          UV = QU(VV),
          yV = this.vertexInputs(VV, YV, YV.name, eV, UV);
        return yV && (yV.geometry = nU(VV), yV.instanceLayout = this.drawDefines.instanceLayout(YV, xV)), yV
      }
      inputsStamped(VV, eV, xV, JV) {
        return function(VV, eV, xV, JV) {
          return VV.program === xV && VV.geometry === nU(eV) && VV.instanceLayout === JV
        }(VV, eV, JV, this.drawDefines.instanceLayout(eV.owner, xV))
      }
      withGpuBuffers(VV) {
        return sU(VV, this.resources, this.zeroBuffer) ? VV : null
      }
      instanceBuffersFit(VV, eV, xV) {
        const JV = IU(eV, xV, this.resources, this.zeroBuffer);
        if (JV) {
          const YV = eV.ends[JV.index] - eV.offsets[JV.index] + eV.IVV[JV.index];
          return this.warnOnce(`overrun:${VV}`, `${VV} draws ${xV} instances from a ${YV}-byte buffer (${JV.needed} needed)`), !1
        }
        return !0
      }
      createBinding(VV, eV, xV, JV) {
        const YV = `${eV._colorFormat}|${eV._depthStencilFormat}|${eV._depthCompare}|${eV._sampleCount}`,
          UV = ze(this.device, eV);
        if (VV === this.skyLastRenderable) {
          let xV = null;
          return {
            renderable: VV,
            pipeline: UV,
            draw: VV => xV ? this.drawSky(VV, eV, YV, xV) : 0,
            update: VV => {
              xV = VV
            }
          }
        }
        return {
          renderable: VV,
          pipeline: UV,
          draw: VV => (JV ? JV.execute(VV, eV, YV) : 0) + this.drawList(VV, eV, YV, xV)
        }
      }
      drawSky(VV, eV, xV, JV) {
        const YV = this.lists.skyDraws,
          UV = YV.length > 0;
        if (UV) {
          var yV;
          const xV = (null !== (yV = eV._depthCompare) && void 0 !== yV ? yV : Ae).startsWith("greater") ? 0 : 1;
          VV.setViewport(0, 0, JV.targetWidth, JV.targetHeight, xV, xV)
        }
        const pV = this.drawList(VV, eV, xV, YV);
        return UV && VV.setViewport(0, 0, JV.targetWidth, JV.targetHeight, 0, 1), pV
      }
      drawList(VV, eV, xV, JV) {
        let YV = 0;
        const UV = this.binder;
        UV.reset();
        for (const yV of JV) {
          const JV = this.pipelineFor(yV, eV, xV);
          JV && (UV.bind(VV, yV, JV, this.meshSlots.bindGroup, yV.slotOffset), yV.indexBuffer ? VV.drawIndexed(yV.count, yV.instances, yV.first, 0, 0) : VV.draw(yV.count, yV.instances, yV.first, 0), YV++)
        }
        return YV
      }
      pipelineFor(VV, eV, xV) {
        var JV, YV;
        if (VV.program.failed) return null;
        const UV = VV.inputs;
        if (UV.pipeline && UV.pipelineTarget === xV) return UV.pipeline;
        const yV = `${VV.pipelineKey}|${xV}`,
          pV = this.pipelines.get(yV);
        if (void 0 !== pV) return pV && (UV.pipeline = pV, UV.pipelineTarget = xV), pV || null;
        this.pipelines.set(yV, null);
        const {
          program: QV,
          layout: nV,
          state: wV
        } = VV, ZV = {
          label: `standard-${QV.id}`,
          layout: QV.pipelineLayout,
          vertex: {
            module: QV.vertex,
            entryPoint: "main",
            buffers: nV.buffers
          },
          fragment: je({
            module: QV.fragment,
            entryPoint: "main"
          }, eV, wV.blend, wV.colourWrite),
          depthStencil: eV._depthStencilFormat ? {
            format: eV._depthStencilFormat,
            depthCompare: null !== (JV = null !== (YV = wV.depthCompare) && void 0 !== YV ? YV : eV._depthCompare) && void 0 !== JV ? JV : Ae,
            depthWriteEnabled: wV.depthWrite,
            depthBias: wV.depthBias,
            depthBiasSlopeScale: wV.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: eV._sampleCount
          },
          primitive: {
            topology: wV.topology,
            frontFace: wV.frontFace,
            cullMode: wV.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(ZV).then((VV => {
          this.compiling--, this.pipelines.set(yV, VV)
        }), (VV => {
          this.compiling--, this.reportFailure(QV, yV, VV)
        })), null
      }
      forEachSunShadowCaster(VV) {
        const eV = this.caster,
          xV = (xV, JV, YV) => {
            const UV = xV.unit && function(VV) {
              const eV = VV.material.model;
              return null !== eV && (eV.lifeform || eV.item) && eV.castsSunShadow && "triangle-list" === VV.state.topology
            }(xV) ? QU(xV.unit) : null;
            if (!UV) return;
            const yV = xV.unit.owner;
            switch (eV.geometry = UV, eV.skip = yV.noSunShadowVertices, eV.indexed = null !== xV.indexBuffer, eV.first = xV.first, eV.count = xV.count, eV.cZ = JV, eV.worldAt = YV, eV.instances = null, eV.instanceCount = 1, eV.thin = !1, YU(yV)) {
              case "thin": {
                const VV = yV._thinInstanceDataStorage.matrixData;
                if (!VV) return;
                eV.instances = VV, eV.instanceCount = Math.min(xV.instances, VV.length / 16), eV.thin = !0;
                break
              }
              case "instanced": {
                const VV = this.resources.batchUploads.get(yV);
                if (!VV || VV.frame !== this.frame || !this.writeBatchCasters(VV)) return;
                break
              }
            }
            VV(eV)
          };
        for (const JV of this.lists.opaqueDraws) xV(JV, this.meshSlots.data, JV.slotOffset / 4);
        this.thinBundle.forEachDrawn(xV)
      }
      writeBatchCasters(VV) {
        const {
          caster: eV
        } = this, xV = VV.packedMatrices, JV = VV.count;
        eV.instances = xV, eV.instanceCount = JV;
        let YV = -1;
        for (let UV = 0; UV < JV; UV++) {
          const eV = Dy(VV.packedRowMesh(UV));
          eV && YV < 0 ? (this.casterWorlds.length < 16 * JV && (this.casterWorlds = new Float32Array(xV.length)), this.casterWorlds.set(xV.subarray(0, 16 * UV)), YV = UV) : !eV && YV >= 0 && (this.casterWorlds.set(xV.subarray(16 * UV, 16 * UV + 16), 16 * YV), YV++)
        }
        return YV >= 0 && (eV.instances = this.casterWorlds, eV.instanceCount = YV), eV.instanceCount > 0
      }
      async reportFailure(VV, eV, xV) {
        const JV = [];
        let YV = !0;
        for (const [UV, yV] of [
            ["vertex", VV.vertex],
            ["fragment", VV.fragment]
          ]) {
          const VV = await yV.getCompilationInfo();
          for (const eV of VV.messages) YV &&= "error" !== eV.type, JV.push(`${UV}:${eV.lineNum}:${eV.linePos} ${eV.type}: ${eV.message}`)
        }
        if (YV && !VV.packGroup) return this.pipelines.set(eV, !1), console.error(`Lite: pipeline ${eV} failed`, xV), void we(this.device, "mesh", VV.kind, xV);
        VV.failed || (VV.failed = !0, console.error(`Lite: program ${VV.id} failed`, xV, JV.join("\n"), {
          program: VV.program,
          key: VV.key
        }), we(this.device, "mesh", VV.kind, xV, YV ? null : JV[0]))
      }
    }

    function Dy(VV) {
      var eV, xV;
      const JV = null === (eV = VV.sC) || void 0 === eV || null === (xV = eV.aShaderPackItem) || void 0 === xV ? void 0 : xV.x;
      return void 0 !== JV && 0 !== (JV & We.g)
    }
    var iy = xV(44592),
      Cy = xV(44595),
      ay = xV(44601),
      oy = xV(44554);
    const cy = [0, 3, 1, 4, 2, 5];

    function hy(VV, eV, xV, JV, YV) {
      const UV = xV[0].width;
      try {
        return YV ? function(VV, eV, xV) {
          const JV = (0, oy.b)(VV, xV, xV, 6);
          for (let YV = 0; YV < 6; YV++)(0, oy.c)(VV, JV, YV, eV[cy[YV]], {
            invertY: !1
          });
          return JV.texture
        }(VV, xV, UV) : function(VV, eV, xV, JV) {
          const YV = VV.createTexture({
            label: "sink-cube",
            size: {
              width: xV,
              height: xV,
              depthOrArrayLayers: 6
            },
            format: JV,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let UV = 0; UV < 6; UV++) VV.queue.copyExternalImageToTexture({
            source: eV[cy[UV]]
          }, {
            texture: YV,
            origin: {
              x: 0,
              y: 0,
              z: UV
            }
          }, {
            width: xV,
            height: xV
          });
          return YV
        }(eV, xV, UV, 1 === JV ? "r8unorm" : "rgba8unorm")
      } finally {
        ly(xV)
      }
    }

    function ly(VV) {
      for (const eV of null !== VV && void 0 !== VV ? VV : []) null === eV || void 0 === eV || eV.close()
    }
    async function Ly(VV) {
      const eV = [],
        xV = [];
      if (await Promise.all(VV.map(((VV, JV) => (eV[JV] = null, VV.then((VV => {
          eV[JV] = VV
        }), (VV => {
          xV.push(VV)
        })))))), xV.length > 0) throw ly(eV), xV[0];
      return eV
    }
    class fy {
      constructor(VV) {
        this.Jv = VV, this.starts = [], this.lengths = [], this.used = 0, VV > 0 && (this.starts.push(0), this.lengths.push(VV))
      }
      allocate(VV) {
        const {
          starts: eV,
          lengths: xV
        } = this;
        for (let JV = 0; JV < eV.length; JV++) {
          if (xV[JV] < VV) continue;
          const YV = eV[JV];
          return xV[JV] === VV ? (eV.splice(JV, 1), xV.splice(JV, 1)) : (eV[JV] += VV, xV[JV] -= VV), this.used += VV, YV
        }
        return -1
      }
      free(VV, eV) {
        this.used -= eV;
        const xV = Math.min(VV + eV, this.Jv);
        xV > VV && this.release(VV, xV - VV)
      }
      grow(VV) {
        const eV = this.Jv;
        this.Jv = VV, this.release(eV, VV - eV)
      }
      truncate(VV) {
        const {
          starts: eV,
          lengths: xV
        } = this;
        for (let JV = eV.length - 1; JV >= 0 && eV[JV] + xV[JV] > VV; JV--) eV[JV] >= VV ? (eV.splice(JV, 1), xV.splice(JV, 1)) : xV[JV] = VV - eV[JV];
        this.Jv = VV
      }
      release(VV, eV) {
        const {
          starts: xV,
          lengths: JV
        } = this;
        let YV = 0,
          UV = xV.length;
        for (; YV < UV;) {
          const eV = YV + UV >> 1;
          xV[eV] < VV ? YV = eV + 1 : UV = eV
        }
        const yV = YV,
          pV = yV > 0 && xV[yV - 1] + JV[yV - 1] === VV,
          QV = yV < xV.length && VV + eV === xV[yV];
        pV && QV ? (JV[yV - 1] += eV + JV[yV], xV.splice(yV, 1), JV.splice(yV, 1)) : pV ? JV[yV - 1] += eV : QV ? (xV[yV] = VV, JV[yV] += eV) : (xV.splice(yV, 0, VV), JV.splice(yV, 0, eV))
      }
    }
    const my = 256;
    class Ky {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = VV, this.onReplaced = eV, this.mergeGap = xV, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.TE = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const YV = Math.max(my, Math.ceil(JV / my) * my);
        this.bytes = new Uint8Array(YV), this.words = new Uint32Array(this.bytes.buffer), this.TE = new fy(YV / my)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(VV) {
        return Math.max(1, Math.ceil(VV / my)) * my
      }
      allocate(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VV;
        const JV = Ky.slotBytes(VV),
          YV = JV / my;
        let UV = this.TE.allocate(YV);
        UV < 0 && (this.grow(this.TE.Jv + YV), UV = this.TE.allocate(YV));
        const yV = UV * my;
        return this.growTo(yV + Math.max(xV, JV)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, yV, yV + JV), eV && this.bytes.set(new Uint8Array(eV.buffer, eV.byteOffset, Math.min(eV.byteLength, JV)), yV), this.markDirty(yV, yV + JV), yV
      }
      growTo(VV) {
        const eV = Math.ceil(VV / my);
        eV > this.TE.Jv && this.grow(eV)
      }
      free(VV, eV) {
        this.freed.push(VV, eV)
      }
      write(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (JV <= 0) return;
        JV <= 1024 && 0 === (3 & (VV | xV | JV)) ? this.copyWords(VV >> 2, eV.buffer, xV >> 2, JV >> 2) : this.bytes.set(new Uint8Array(eV.buffer, xV, JV), VV);
        let UV = VV + JV;
        if (YV) {
          const eV = VV + 4 * Math.ceil(JV / 4);
          this.bytes.fill(0, UV, eV), UV = eV
        }
        this.markDirty(VV, UV)
      }
      copyWords(VV, eV, xV, JV) {
        let YV = this.sourceWords.get(eV);
        YV || (YV = new Uint32Array(eV, 0, eV.byteLength >> 2), this.sourceWords.set(eV, YV));
        const UV = this.words;
        for (let yV = 0; yV < JV; yV++) UV[VV + yV] = YV[xV + yV]
      }
      move(VV, eV, xV) {
        this.bytes.copyWithin(eV, VV, VV + xV), this.markDirty(eV, eV + xV)
      }
      flush() {
        for (const eV of this.retired) this.onReplaced(eV), eV.destroy();
        this.retired.length = 0;
        const VV = this.dirtyStarts.length;
        if (VV > 0) {
          const {
            dirtyStarts: eV,
            dirtyEnds: xV,
            order: JV
          } = this;
          JV.length = VV;
          for (let pV = 0; pV < VV; pV++) JV[pV] = pV;
          VV > 1 && JV.sort(((VV, xV) => eV[VV] - eV[xV]));
          const YV = this.mergeGap;
          let UV = eV[JV[0]],
            yV = xV[JV[0]];
          for (let pV = 1; pV < VV; pV++) {
            const VV = JV[pV];
            eV[VV] - yV <= YV ? yV = Math.max(yV, xV[VV]) : (this.send(UV, yV), UV = eV[VV], yV = xV[VV])
          }
          this.send(UV, yV), eV.length = 0, xV.length = 0
        }
        this.holding = !1
      }
      GZ() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const VV = this.freed;
        for (let eV = 0; eV < VV.length; eV += 2) this.TE.free(VV[eV] / my, VV[eV + 1] / my);
        VV.length = 0
      }
      send(VV, eV) {
        this.device.queue.writeBuffer(this.gpu, VV, this.bytes.buffer, VV, eV - VV);
        for (const xV of this.replaced) {
          const JV = Math.min(eV, xV.size);
          JV > VV && this.device.queue.writeBuffer(xV, VV, this.bytes.buffer, VV, JV - VV)
        }
      }
      markDirty(VV, eV) {
        VV &= -4, eV = eV + 3 & -4, this.holding ? (this.dirtyStarts.push(VV), this.dirtyEnds.push(eV)) : this.send(VV, eV)
      }
      grow(VV) {
        const eV = this.TE.Jv,
          xV = Math.max(2 * eV, VV),
          JV = new Uint8Array(xV * my);
        JV.set(this.bytes);
        const YV = this.gpu;
        this.gpu = this.createGpu(JV.byteLength), this.bytes = JV, this.words = new Uint32Array(JV.buffer), this.TE.grow(xV), YV && (this.replaced.push(YV), this.onReplaced(YV)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, eV * my)
      }
      createGpu(VV) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: VV,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Hy(VV) {
      return Array.isArray(VV) ? new Float32Array(VV) : VV
    }

    function uy(VV, eV, xV, JV, YV) {
      const UV = HV(YV),
        yV = Math.min(YV, JV.byteLength);
      if (UV === yV && JV.byteOffset % 4 === 0) return void VV.queue.writeBuffer(eV, xV, JV.buffer, JV.byteOffset, UV);
      const pV = new Uint8Array(UV);
      pV.set(new Uint8Array(JV.buffer, JV.byteOffset, yV)), VV.queue.writeBuffer(eV, xV, pV)
    }

    function sy(VV, eV, xV) {
      const JV = "linear",
        YV = "nearest";
      let UV = YV,
        yV = YV,
        pV = "nearest",
        QV = !eV;
      switch (VV) {
        case 11:
          UV = JV, yV = JV;
          break;
        case 3:
          UV = JV, yV = JV, pV = eV ? "linear" : "nearest";
          break;
        case 8:
          pV = eV ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          yV = JV;
          break;
        case 6:
          yV = JV, pV = eV ? "linear" : "nearest";
          break;
        case 7:
          yV = JV, QV = !0;
          break;
        case 9:
          UV = JV;
          break;
        case 10:
          UV = JV, pV = eV ? "linear" : "nearest";
          break;
        case 2:
          UV = JV, yV = JV, xV > 1 ? (pV = "linear", QV = !1) : QV = !0;
          break;
        case 12:
          UV = JV, QV = !0;
          break;
        default:
          QV = !0
      }
      return xV > 1 && !QV ? {
        magFilter: JV,
        minFilter: JV,
        mipmapFilter: "linear",
        maxAnisotropy: xV
      } : {
        magFilter: UV,
        minFilter: yV,
        mipmapFilter: pV,
        ...QV ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Sy(VV) {
      return 0 === VV ? "clamp-to-edge" : 2 === VV ? "mirror-repeat" : "repeat"
    }
    class Iy {
      constructor(VV, eV) {
        let {
          vertexArena: xV = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = VV, this.device = eV, this.buffers = new WeakMap, this.MVV = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = xV ? this.createArena() : null
      }
      createArena() {
        return new Ky(this.device, (VV => {
          var eV;
          null === (eV = this.onDestroy) || void 0 === eV || eV.call(this, VV), this.gpuBuffersVersion++
        }))
      }
      rebind(VV, eV) {
        this.engine = VV, this.device = eV, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const xV of this.liveUploads) xV.rebind();
        for (const xV of this.rebindWaiters.splice(0)) xV()
      }
      flushUploads() {
        var VV;
        null === (VV = this.arena) || void 0 === VV || VV.flush()
      }
      endUploadFrame() {
        var VV;
        null === (VV = this.arena) || void 0 === VV || VV.GZ()
      }
      vertexBufferCreated(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xV ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(VV);
        const YV = Hy(eV);
        VV.Jv = YV.byteLength, this.buffers.set(VV, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: xV && null !== this.arena,
          pending: YV,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: JV
        })
      }
      vertexBufferUpdated(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        const YV = this.buffers.get(VV);
        if (!YV) return;
        const UV = Hy(eV),
          yV = void 0 === JV ? UV.byteLength : Math.min(JV, UV.byteLength);
        this.update(YV, UV, xV, yV)
      }
      vertexBufferFloatsUpdated(VV, eV, xV, JV) {
        const YV = this.buffers.get(VV);
        if (!YV) return;
        const UV = xV * Float32Array.BYTES_PER_ELEMENT,
          yV = (JV - xV) * Float32Array.BYTES_PER_ELEMENT;
        YV.slot >= 0 && yV > 0 && UV + yV <= YV.size ? this.writeSlot(YV, UV, eV, eV.byteOffset + UV, yV, !1) : YV.gpu && yV > 0 && UV + yV <= YV.gpu.size ? this.device.queue.writeBuffer(YV.gpu, UV, eV.buffer, eV.byteOffset + UV, yV) : this.update(YV, eV.subarray(xV, JV), UV, yV)
      }
      indexBufferCreated(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(VV);
        const JV = function(VV) {
          if (VV instanceof Uint16Array || VV instanceof Uint32Array) return VV;
          for (let eV = 0; eV < VV.length; eV++)
            if (VV[eV] >= 65535) return new Uint32Array(VV);
          return new Uint16Array(VV)
        }(eV);
        VV.is32Bits = 4 === JV.BYTES_PER_ELEMENT, VV.Jv = JV.byteLength, this.buffers.set(VV, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: JV,
          ownsPending: JV !== eV,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: xV
        })
      }
      bufferDeleted(VV) {
        const eV = this.buffers.get(VV);
        null !== eV && void 0 !== eV && eV.gpu ? (this.destroyBuffer(eV.gpu), this.gpuBuffersVersion++) : eV && eV.slot >= 0 && (this.arena.free(eV.slot, eV.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(VV)
      }
      update(VV, eV, xV, JV) {
        if (VV.slot >= 0) this.updateSlot(VV, eV, xV, JV);
        else if (VV.gpu) {
          if (xV + HV(JV) > VV.gpu.size) {
            const eV = this.device.createBuffer({
                label: VV.label,
                size: HV(Math.max(2 * VV.gpu.size, xV + JV)),
                usage: VV.usage | GPUBufferUsage.COPY_SRC
              }),
              YV = this.device.createCommandEncoder();
            YV.copyBufferToBuffer(VV.gpu, 0, eV, 0, VV.gpu.size), this.device.queue.submit([YV.finish()]), this.destroyBuffer(VV.gpu), this.gpuBuffersVersion++, VV.gpu = eV
          }
          uy(this.device, VV.gpu, xV, eV, JV)
        } else {
          const UV = new Uint8Array(eV.buffer, eV.byteOffset, JV),
            yV = VV.pending;
          if (yV && VV.ownsPending && xV + JV <= yV.byteLength) new Uint8Array(yV.buffer, yV.byteOffset, yV.byteLength).set(UV, xV);
          else if (yV && 0 === xV && JV === yV.byteLength && eV.byteLength === JV) VV.pending = eV, VV.ownsPending = !1;
          else {
            var YV;
            const eV = new Uint8Array(Math.max(null !== (YV = null === yV || void 0 === yV ? void 0 : yV.byteLength) && void 0 !== YV ? YV : 0, xV + JV));
            yV && eV.set(new Uint8Array(yV.buffer, yV.byteOffset, yV.byteLength)), eV.set(UV, xV), VV.pending = eV, VV.ownsPending = !0
          }
        }
      }
      updateSlot(VV, eV, xV, JV) {
        const YV = this.arena;
        xV + HV(JV) > VV.size && (VV.size = HV(Math.max(2 * VV.size, xV + JV)), YV.growTo(VV.slot + VV.size), this.gpuBuffersVersion++), 0 === JV ? this.writeSlot(VV, xV, Oy, 0, 4, !1) : this.writeSlot(VV, xV, eV, eV.byteOffset, JV, !0)
      }
      writeSlot(VV, eV, xV, JV, YV, UV) {
        const yV = eV + (UV ? HV(YV) : YV);
        yV > VV.slotBytes && this.moveSlot(VV, yV), this.arena.write(VV.slot + eV, xV, JV, YV, UV)
      }
      moveSlot(VV, eV) {
        const xV = this.arena,
          JV = Ky.slotBytes(Math.max(eV, Math.min(2 * VV.slotBytes, VV.size))),
          YV = xV.allocate(JV, null, VV.size);
        xV.move(VV.slot, YV, VV.slotBytes), xV.free(VV.slot, VV.slotBytes), VV.slot = YV, VV.slotBytes = JV, this.gpuBuffersVersion++
      }
      cover(VV, eV) {
        const xV = this.buffers.get(VV);
        if (!xV || xV.slot < 0) return !1;
        const JV = Math.min(eV, xV.size);
        return !(JV <= xV.slotBytes) && (this.moveSlot(xV, JV), !0)
      }
      destroyBuffer(VV) {
        var eV;
        null === (eV = this.onDestroy) || void 0 === eV || eV.call(this, VV), VV.destroy()
      }
      gpuBuffer(VV) {
        const eV = this.buffers.get(VV);
        if (!eV) return null;
        if (eV.slot >= 0) return this.arena.buffer;
        if (eV.arena && eV.pending) {
          const VV = eV.pending,
            xV = this.arena;
          return eV.size = HV(VV.byteLength), eV.slotBytes = Ky.slotBytes(function(VV) {
            const eV = new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength);
            let xV = eV.length;
            if (VV.byteOffset % 4 === 0) {
              for (; xV % 4 !== 0 && 0 === eV[xV - 1];) xV--;
              if (xV % 4 === 0) {
                const eV = new Uint32Array(VV.buffer, VV.byteOffset, xV / 4);
                let JV = eV.length;
                for (; JV > 0 && 0 === eV[JV - 1];) JV--;
                xV = 4 * JV
              }
            }
            for (; xV > 0 && 0 === eV[xV - 1];) xV--;
            return xV
          }(VV)), eV.slot = xV.allocate(eV.slotBytes, VV, eV.size), eV.pending = null, xV.buffer
        }
        if (!eV.gpu && eV.pending) {
          const VV = eV.pending;
          eV.gpu = this.device.createBuffer({
            label: eV.label,
            size: HV(VV.byteLength),
            usage: eV.usage
          }), uy(this.device, eV.gpu, 0, VV, VV.byteLength), eV.pending = null
        }
        return eV.gpu
      }
      gpuOffset(VV) {
        var eV, xV;
        const JV = null !== (eV = null === (xV = this.buffers.get(VV)) || void 0 === xV ? void 0 : xV.slot) && void 0 !== eV ? eV : -1;
        return JV < 0 ? 0 : JV
      }
      gpuEnd(VV) {
        var eV, xV;
        const JV = this.buffers.get(VV);
        return JV ? JV.slot >= 0 ? JV.slot + JV.size : null !== (eV = null === (xV = JV.gpu) || void 0 === xV ? void 0 : xV.size) && void 0 !== eV ? eV : 0 : 0
      }
      vertexInput(VV, eV, xV) {
        var JV, YV, UV, yV;
        return null !== (JV = null !== (YV = xV && this.modelInput(xV, eV)) && void 0 !== YV ? YV : null === (UV = null !== (yV = this.MVV.get(VV)) && void 0 !== yV ? yV : this.batchUploads.get(VV)) || void 0 === UV ? void 0 : UV.inputs[eV]) && void 0 !== JV ? JV : null
      }
      modelInput(VV, eV) {
        const xV = this.geometrySlot(VV);
        let JV = xV.inputs.get(eV);
        if (void 0 === JV) {
          const YV = VV.vertexAttributes.find((VV => VV.kind === eV));
          JV = YV ? new ke(this.modelKey(xV, YV.data, !1), YV.offset, YV.stride, YV.components, !1, YV.glType, YV.isNormalized) : null, xV.inputs.set(eV, JV)
        }
        return JV
      }
      modelIndex(VV) {
        return VV.indexData && this.modelKey(this.geometrySlot(VV), VV.indexData, !0)
      }
      geometrySlot(VV) {
        var eV;
        let xV = VV.gpu[MV.f.lite];
        if ((null === (eV = xV) || void 0 === eV ? void 0 : eV.epoch) !== this.epoch) {
          const eV = new Map,
            JV = () => {
              for (const VV of eV.values()) this.bufferDeleted(VV)
            },
            YV = VV => {
              const xV = eV.get(VV);
              xV && this.vertexBufferUpdated(xV, VV)
            };
          xV = {
            keys: eV,
            inputs: new Map,
            release: JV,
            updated: YV,
            epoch: this.epoch
          }, VV.gpu[MV.f.lite] = xV
        }
        return xV
      }
      modelKey(VV, eV, xV) {
        let JV = VV.keys.get(eV);
        if (!JV) {
          if (xV) {
            const VV = {
              Jv: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(VV, eV, "model-indices"), JV = VV
          } else JV = {
            Jv: 0
          }, this.vertexBufferCreated(JV, eV, !1, "model-vertices");
          VV.keys.set(eV, JV)
        }
        return JV
      }
      indexFormat(VV) {
        return VV.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(VV, eV) {
        --VV.refs > 0 || (this.releaseTexture(VV), ly(VV.images), null !== eV && this.textures.delete(eV))
      }
      load(VV, eV) {
        const {
          epoch: xV
        } = this, JV = eV.decoded = async function(VV) {
          if ("cube" === VV.kind) return async function(VV) {
            if (6 !== VV.length) throw new Error(`${VV.length} files where six faces were expected`);
            const eV = await Ly(VV.map((VV => OV(VV)))),
              xV = eV[0].width;
            return Ly(eV.map((async VV => {
              if (VV.width === xV && VV.height === xV) return VV;
              try {
                return await createImageBitmap(VV, {
                  ...IV,
                  resizeWidth: xV,
                  resizeHeight: xV
                })
              } finally {
                VV.close()
              }
            })))
          }(VV.files);
          if ("data" === VV.kind && VV.data) return [await createImageBitmap(new Blob([VV.data]), IV)];
          return [await OV(dy(VV))]
        }(VV.source).then((VV => {
          0 === eV.refs || xV !== this.epoch ? ly(VV) : eV.images = VV
        }));
        this.track(eV, dy(VV.source), JV, (() => {
          eV.wanted && !eV.failed && eV.refs > 0 && this.upload(VV, eV)
        }))
      }
      canvasUpdated(VV, eV, xV) {
        const {
          state: JV
        } = this.textureSlot(VV);
        JV.dynamicSource = {
          invertY: eV,
          premultiplied: xV
        }, JV.dynamic && this.pushDynamic(VV.source, JV)
      }
      async atlasArrays(VV) {
        const {
          device: eV,
          epoch: xV
        } = this;
        let JV;
        try {
          JV = await ee(eV, VV)
        } catch (UV) {
          if (xV === this.epoch) {
            if (!ne(eV)) throw UV;
            await new Promise((VV => {
              this.rebindWaiters.push(VV)
            }))
          }
          return this.atlasArrays(VV)
        }
        if (JV.forEach(((eV, xV) => {
            this.atlasSources.has(eV) || this.atlasSources.set(eV, {
              sources: VV,
              index: xV,
              stride: JV[0].layers
            })
          })), xV !== this.epoch) return JV;
        const YV = (0, iy.e)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const yV of JV) this.atlasBindings.has(yV) || this.atlasBindings.set(yV, {
          view: yV.texture.createView({
            dimension: "2d-array"
          }),
          sampler: YV
        });
        return JV
      }
      boundTexture(VV) {
        const eV = this.atlasBindings.get(VV);
        if (eV) return eV;
        const xV = this.atlasSources.get(VV);
        if (xV) return this.rebuildAtlas(VV, xV), null;
        const JV = VV;
        if (JV.released) return null;
        const YV = this.textureSlot(JV, !0),
          {
            state: UV
          } = YV;
        if (!UV.view && (UV.wanted = !0, UV.loading || UV.failed || this.upload(JV, UV), !UV.view)) return null;
        const yV = this.chosenSampler(JV, YV),
          pV = YV.bound;
        return pV && pV.view === UV.view && pV.sampler === yV ? pV : (YV.bound = {
          view: UV.view,
          sampler: yV
        }, YV.bound)
      }
      rebuildAtlas(VV, eV) {
        let {
          sources: xV,
          index: JV,
          stride: YV
        } = eV;
        if (this.atlasRebuilds.has(VV)) return;
        this.atlasRebuilds.add(VV);
        const {
          epoch: UV
        } = this;
        this.atlasArrays(xV).then((eV => {
          eV[0].layers === YV && eV[JV] ? UV === this.epoch && this.atlasBindings.set(VV, this.atlasBindings.get(eV[JV])) : console.error(`Lite: the new device splits the atlas ${dV(xV.urls[0])} into other arrays than its materials read`)
        }), (VV => {
          console.error(`Lite: could not build the atlas ${dV(xV.urls[0])} again on a new device`, VV)
        }))
      }
      textureLoaded(VV) {
        var eV, xV;
        return null !== (eV = null === (xV = this.heldSlot(VV)) || void 0 === xV ? void 0 : xV.state.decoded) && void 0 !== eV ? eV : null
      }
      textureFailed(VV) {
        var eV;
        return !0 === (null === (eV = this.heldSlot(VV)) || void 0 === eV ? void 0 : eV.state.failed)
      }
      heldSlot(VV) {
        const eV = VV.gpu[MV.f.lite];
        return (null === eV || void 0 === eV ? void 0 : eV.epoch) === this.epoch ? eV : void 0
      }
      chosenSampler(VV, eV) {
        const {
          samplingMode: xV,
          wrapU: JV,
          wrapV: YV
        } = VV.sampler, UV = eV.state.hasMips, yV = function(VV, eV) {
          const {
            bilinear: xV,
            trilinear: JV
          } = MV.h;
          return !eV && VV !== xV || 11 !== VV && VV !== JV && VV !== xV ? 1 : 4
        }(xV, UV), pV = eV.sampler;
        if (pV && pV.samplingMode === xV && pV.hasMips === UV && pV.anisotropy === yV && pV.wrapU === JV && pV.wrapV === YV) return pV.sampler;
        const QV = this.samplerFor(xV, UV, yV, JV, YV);
        return eV.sampler = {
          samplingMode: xV,
          hasMips: UV,
          anisotropy: yV,
          wrapU: JV,
          wrapV: YV,
          sampler: QV
        }, QV
      }
      releaseTexture(VV) {
        var eV, xV;
        VV.view && (null === (xV = this.onDestroy) || void 0 === xV || xV.call(this, VV.view));
        null === (eV = VV.destroy) || void 0 === eV || eV.call(VV)
      }
      textureSlot(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = VV.gpu[MV.f.lite];
        if ((null === xV || void 0 === xV ? void 0 : xV.epoch) === this.epoch) return xV;
        const JV = function(VV) {
          let {
            source: eV,
            sampler: xV
          } = VV;
          return "canvas" === eV.kind ? null : `${eV.kind}|${dy(eV)}|${xV.noMipmap}|${xV.samplingMode}|${xV.invertY}`
        }(VV);
        let YV = null === JV ? void 0 : this.textures.get(JV);
        var UV;
        YV || (YV = {
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
          dynamicSource: null !== (UV = null === xV || void 0 === xV ? void 0 : xV.state.dynamicSource) && void 0 !== UV ? UV : null
        }, null !== JV && (this.textures.set(JV, YV), this.load(VV, YV), eV && !xV && this.firstBindDecodes++));
        YV.refs++;
        const yV = YV,
          {
            epoch: pV
          } = this,
          QV = {
            state: YV,
            bound: null,
            sampler: null,
            release: () => {
              pV === this.epoch && this.releaseSlot(yV, JV)
            },
            epoch: pV
          };
        return VV.gpu[MV.f.lite] = QV, QV
      }
      samplerFor(VV, eV, xV, JV, YV) {
        const UV = `${VV}|${eV}|${xV}|${JV}|${YV}`;
        let yV = this.samplers.get(UV);
        if (!yV) {
          const pV = {
            ...sy(VV, eV, xV),
            addressModeU: Sy(JV),
            addressModeV: Sy(YV)
          };
          yV = (0, iy.e)(this.engine, pV), this.samplers.set(UV, yV)
        }
        return yV
      }
      upload(VV, eV) {
        const {
          source: xV,
          sampler: JV
        } = VV;
        eV.hasMips = !JV.noMipmap, "canvas" === xV.kind ? this.createDynamic(xV, eV) : "cube" === xV.kind ? this.uploadCube(eV, xV.luminance) : this.uploadImage(eV, !0 === JV.invertY, xV.url)
      }
      uploadImage(VV, eV, xV) {
        const [JV] = VV.images;
        VV.images = null;
        const {
          epoch: YV
        } = this, UV = (0, Cy.e)(this.engine, JV, {
          mipMaps: VV.hasMips,
          invertY: eV,
          srgb: !1
        }).then((eV => {
          JV.close(), 0 !== VV.refs && YV === this.epoch ? (VV.view = eV.view, VV.destroy = eV.texture.destroy.bind(eV.texture)) : eV.texture.destroy()
        }));
        this.track(VV, xV, UV)
      }
      track(VV, eV, xV, JV) {
        const {
          epoch: YV
        } = this;
        VV.loading = !0, this.pending++, xV.catch((xV => {
          YV === this.epoch && (VV.failed = !0, console.warn(`Lite: could not load texture ${dV(eV)}`, xV))
        })).finally((() => {
          YV === this.epoch && (VV.loading = !1, this.pending--, null === JV || void 0 === JV || JV())
        }))
      }
      uploadCube(VV, eV) {
        const xV = VV.images;
        VV.images = null;
        const JV = hy(this.engine, this.device, xV, (0, MV.w)(eV), VV.hasMips);
        VV.view = JV.createView({
          dimension: "cube"
        }), VV.destroy = () => {
          JV.destroy()
        }
      }
      createDynamic(VV, eV) {
        const {
          canvas: xV
        } = VV, JV = (0, ay.e)(this.engine, Math.max(1, xV.width), Math.max(1, xV.height), {
          mipMaps: eV.hasMips,
          srgb: !1
        });
        eV.dynamic = JV, eV.view = JV.view, eV.destroy = () => {
          JV.texture.destroy()
        }, this.pushDynamic(VV, eV)
      }
      pushDynamic(VV, eV) {
        const xV = eV.dynamicSource,
          JV = eV.dynamic,
          {
            canvas: YV
          } = VV;
        if (xV && JV && 0 !== YV.width && 0 !== YV.height) return YV.width !== JV.width || YV.height !== JV.height ? (this.releaseTexture(eV), eV.dynamic = null, eV.view = null, void this.createDynamic(VV, eV)) : void(0, ay.i)(this.engine, JV, YV, {
          invertY: xV.invertY,
          premultiplyAlpha: xV.premultiplied
        })
      }
    }

    function dy(VV) {
      return "cube" === VV.kind ? VV.rootUrl : "canvas" === VV.kind ? "canvas" : VV.url
    }
    const Oy = new Uint8Array(4);
    var Vp = xV(39943);

    function ep(VV) {
      const eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      VV._colorAttachment.storeOp = VV._targetSignature._sampleCount > 1 ? eV : "store";
      const xV = VV._renderPassDescriptor.depthStencilAttachment;
      xV && (xV.depthStoreOp = eV, xV.stencilStoreOp && (xV.stencilStoreOp = eV))
    }
    var xp = xV(38917),
      Jp = xV(38983),
      Yp = xV(38542),
      Up = xV(40876);
    const yp = new Float64Array([1, 1, 1]),
      pp = new Float64Array([0, 1, 0]),
      Qp = new Float64Array(4),
      np = new Float32Array(16),
      wp = new Float64Array(3),
      Zp = new Float64Array(4);

    function vp(VV, eV, xV) {
      VV.fov = eV.fov, VV.near = eV.near, VV.far = eV.far, VV.renderWidth = xV.renderWidth, VV.renderHeight = xV.renderHeight, (0, Yp.z)(eV.holderRotation, 0, Qp, 0), (0, Yp.d)(yp, 0, Qp, 0, eV.holderPosition, 0, np);
      const JV = eV.I9;
      wp[0] = JV[0], wp[1] = JV[1], wp[2] = JV[2] + 1;
      const YV = VV.viewMatrix;
      (0, Yp.o)(JV, wp, pp, YV), (0, Yp.l)(YV, 0, YV), (0, Yp.s)(YV, np, 0, YV), (0, Yp.l)(YV, 0, YV);
      const UV = VV.worldMatrix;
      (0, Yp.l)(YV, 0, UV), VV.eye[0] = UV[12], VV.eye[1] = UV[13], VV.eye[2] = UV[14], Zp[0] = VV.fov, Zp[1] = VV.renderWidth / VV.renderHeight, Zp[2] = VV.near, Zp[3] = VV.far, (0, Yp.v)(Zp, VV.projectionMatrix), (0, Yp.s)(YV, VV.projectionMatrix, 0, VV.viewProjectionMatrix), (0, Up.e)(VV.viewProjectionMatrix, VV.frustum)
    }

    function rp(VV, eV) {
      let xV = VV.frustumPlanes;
      xV || (xV = VV.frustumPlanes = Array.from({
        length: 6
      }, (() => new xp.d(0, 0, 0, 0))));
      for (let JV = 0; JV < 6; JV++) {
        const VV = xV[JV].normal;
        VV._x = eV[4 * JV], VV._y = eV[4 * JV + 1], VV._z = eV[4 * JV + 2], VV._isDirty = !0, xV[JV].d = eV[4 * JV + 3]
      }
    }

    function kp(VV, eV) {
      const xV = eV.clearColor;
      VV.clearColour[0] = xV.r, VV.clearColour[1] = xV.g, VV.clearColour[2] = xV.b, VV.clearColour[3] = xV.a;
      const JV = eV.ambientColor;
      VV.ambientColour[0] = JV.r, VV.ambientColour[1] = JV.g, VV.ambientColour[2] = JV.b, VV.animationRatio = eV.animationRatio, VV.frameId = eV.frameId, VV.version++
    }

    function bp(VV) {
      const eV = VV.model.view;
      return eV.animTick = (0, Jp.h)(), eV.timeMs = performance.now(), kp(eV, VV.yE), VV.model.update(eV.frameId), eV
    }

    function Ep(VV) {
      const eV = VV.yE,
        {
          view: xV,
          K9: JV
        } = VV.model;
      return vp(xV, JV, eV.sk()), eV.onBeforeRenderObservable.notifyObservers(eV), rp(eV, xV.frustum), eV.onBeforeCameraRenderObservable.notifyObservers(eV.activeCamera), bp(VV)
    }
    var Bp = xV(38506),
      jp = xV(38612),
      qp = xV(38968);

    function tp(VV) {
      var eV, xV;
      const JV = (0, NV.eb)(VV);
      if (!JV || JV.diffuseTexture && (0, qp.f)(VV)) return null;
      const YV = null === (eV = (0, NV.v)(JV, PV.h.name)) || void 0 === eV ? void 0 : eV.state,
        UV = null === (xV = (0, NV.v)(JV, dU.b.name)) || void 0 === xV ? void 0 : xV.state,
        yV = new Float32Array(16);
      return function(VV, eV, xV, JV) {
        var YV, UV;
        const yV = iJ;
        JV.set(VV.diffuseColor, yV.diffuse), JV[yV.diffuse + 3] = VV.alpha, JV.set(VV.ambientColor, yV.ambientAndCutoff), JV[yV.ambientAndCutoff + 3] = VV.alphaCutOff, JV.set(VV.emissiveColor, yV.emissiveAndLevel), JV[yV.emissiveAndLevel + 3] = null !== (YV = null === (UV = VV.diffuseTexture) || void 0 === UV ? void 0 : UV.level) && void 0 !== YV ? YV : 1, null !== eV && void 0 !== eV && eV.animDataPerTex ? (JV[yV.anim + 1] = Jp.e, JV[yV.anim + 2] = eV.animDataPerTex.length / 3 - 1) : xV && (JV[yV.anim + 1] = xV.numAnimStates, JV[yV.anim + 2] = xV.ticksPerAnimState)
      }(JV, YV, UV, yV), {
        model: JV,
        atlas: YV,
        texture: YV ? "atlas" : JV.diffuseTexture ? "single" : "none",
        animated: YV ? !!YV.animDataPerTex : !!UV,
        liquid: (0, qp.i)(VV),
        customRenderMat: (0, qp.f)(VV),
        uniformData: yV
      }
    }
    var Fp = xV(3189);
    class Tp {
      constructor(VV) {
        this.units = VV, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var VV;
        this.buffer.destroy(), null === (VV = this.twin) || void 0 === VV || VV.destroy()
      }
    }
    class Pp {
      constructor(VV, eV) {
        this.arena = VV, this.TE = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.TE = new fy(eV);
        const xV = new Tp(eV);
        xV.buffer = this.createBuffer(xV, !1), this.backings.push(xV), this.refresh()
      }
      get Jv() {
        return this.TE.Jv
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
        let VV = 0;
        for (const eV of this.backings) VV += eV.units * (this.arena.unitBytes + (eV.twin ? this.arena.twinUnitBytes : 0));
        return VV
      }
      holds(VV) {
        return VV.start + VV.length <= this.usable
      }
      lost(VV) {
        return this.dropped || VV.start + VV.length > this.Jv
      }
      write(VV, eV) {
        const {
          device: xV,
          unitBytes: JV
        } = this.arena;
        for (const YV of this.backings) {
          const UV = (YV.units - VV.start) * JV;
          UV > 0 && xV.queue.writeBuffer(YV.buffer, VV.start * JV, eV, 0, Math.min(eV.byteLength, UV))
        }
      }
      writeLight(VV, eV) {
        const {
          device: xV,
          twinUnitBytes: JV,
          verticesPerUnit: YV
        } = this.arena, {
          light: UV,
          count: yV
        } = this.arena.twinLight(eV, Math.min(eV.length, VV.length * YV));
        for (const pV of this.backings) {
          pV.twin || (pV.twin = this.createBuffer(pV, !0));
          const eV = (pV.units - VV.start) * YV;
          eV > 0 && xV.queue.writeBuffer(pV.twin, VV.start * JV, UV, 0, Math.min(yV, eV))
        }
      }
      grow(VV) {
        this.arena.assertNotDrawing();
        const {
          device: eV,
          unitBytes: xV,
          label: JV
        } = this.arena, YV = this.backings[this.backings.length - 1], UV = new Tp(VV), yV = eV.createCommandEncoder({
          label: `${JV}-grow`
        });
        UV.buffer = this.createBuffer(UV, !1), yV.copyBufferToBuffer(YV.buffer, 0, UV.buffer, 0, YV.units * xV), YV.twin && (UV.twin = this.createBuffer(UV, !0), yV.copyBufferToBuffer(YV.twin, 0, UV.twin, 0, YV.units * this.arena.twinUnitBytes)), eV.queue.submit([yV.finish()]), this.backings.push(UV), this.TE.grow(VV)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const VV of this.backings) VV.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(VV, eV) {
        const {
          device: xV,
          unitBytes: JV,
          twinUnitBytes: YV,
          usage: UV,
          label: yV
        } = this.arena;
        xV.pushErrorScope("out-of-memory");
        const pV = xV.createBuffer({
          label: eV ? `${yV}-light` : yV,
          size: VV.units * (eV ? YV : JV),
          usage: (eV ? this.arena.twinUsage : UV) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, xV.popErrorScope().then((xV => {
          this.arena.awaitingVerdict--, this.settle(VV, eV, !xV, !0)
        }), (xV => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${yV} buffer, taken as failed: ${String(xV)}`), this.settle(VV, eV, !1, !1)
        })), pV
      }
      settle(VV, eV, xV, JV) {
        const YV = this.backings.indexOf(VV);
        if (!(this.dropped || YV < 0)) {
          if (!xV) {
            if (JV && this.arena.ranOutOfMemory(VV.units, VV.units * (eV ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === YV) return void this.drop();
            for (const VV of this.backings.splice(YV)) VV.destroy();
            return this.TE.truncate(this.backings[YV - 1].units), this.growable = !1, void this.promote()
          }
          eV ? VV.twinReady = !0 : (VV.bufferReady = !0, this.arena.allocatedBuffer(VV.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: VV
        } = this;
        let eV = 0;
        for (; eV + 1 < VV.length && VV[eV].ready && VV[eV + 1].ready;) eV++;
        for (const xV of VV.splice(0, eV)) xV.destroy();
        this.refresh()
      }
      refresh() {
        const VV = this.backings[0];
        this.buffer = VV.buffer, this.twin = VV.twinReady ? VV.twin : null, this.usable = !this.dropped && VV.bufferReady ? VV.units : 0
      }
    }
    class Ap {
      constructor(VV, eV, xV, JV) {
        let {
          verticesPerUnit: YV = 1,
          twinUsage: UV = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = VV, this.unitBytes = eV, this.usage = xV, this.label = JV, this.pages = [], this.zZ = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Re.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), eV % 4 !== 0) throw new Error(`${JV}: ${eV}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = YV, this.twinUsage = UV, this.twinValueBytes = YV > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * YV
      }
      twinLight(VV, eV) {
        if (4 === this.twinValueBytes) return this.widened.length < eV && (this.widened = new Float32Array(Math.max(eV, 2 * this.widened.length))), this.widened.set(VV.subarray(0, eV)), {
          light: this.widened,
          count: eV
        };
        const xV = eV % this.verticesPerUnit;
        if (0 === xV) return {
          light: VV,
          count: eV
        };
        const JV = eV - xV + this.verticesPerUnit;
        return this.padded.length < JV && (this.padded = new Uint16Array(Math.max(JV, 2 * this.padded.length))), this.padded.set(VV.subarray(0, eV)), this.padded.fill(0, eV, JV), {
          light: this.padded,
          count: JV
        }
      }
      allocate(VV) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), VV > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const YV of this.pages) {
          const eV = YV.TE.allocate(VV);
          if (eV >= 0) return {
            page: YV,
            start: eV,
            length: VV
          }
        }
        const eV = this.pages[this.pages.length - 1];
        if (null !== eV && void 0 !== eV && eV.canGrow) {
          const xV = Math.min(this.ceiling, Math.max(2 * eV.Jv, eV.Jv + VV));
          if (xV - eV.Jv >= VV) return eV.grow(xV), {
            page: eV,
            start: eV.TE.allocate(VV),
            length: VV
          }
        }
        eV && eV !== this.pages[0] && 0 === eV.TE.used && eV.drop();
        const xV = Math.floor(1048576 / this.unitBytes),
          JV = new Pp(this, Math.max(VV, Math.min(this.ceiling, xV)));
        return this.pages.push(JV), {
          page: JV,
          start: JV.TE.allocate(VV),
          length: VV
        }
      }
      free(VV) {
        this.assertNotDrawing();
        const {
          page: eV
        } = VV;
        eV.TE.free(VV.start, VV.length), 0 === eV.TE.used && eV !== this.pages[0] && eV !== this.pages[this.pages.length - 1] && eV.drop()
      }
      retire() {
        for (const VV of this.pages) VV.retire()
      }
      remove(VV) {
        const eV = this.pages.indexOf(VV);
        eV >= 0 && this.pages.splice(eV, 1)
      }
      ranOutOfMemory(VV, eV) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${eV}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, VV), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, VV) / 2));
        const xV = performance.now();
        xV >= this.shortageUntil && (this.forgetFailedAt = xV + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = xV + 1e3)
      }
      allocatedBuffer(VV) {
        VV >= this.failed && (this.failed = 1 / 0);
        const eV = Math.min(2 * VV, Math.floor((VV + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, eV))
      }
      stats() {
        let VV = 0,
          eV = 0,
          xV = 0,
          JV = 0;
        for (const YV of this.pages) VV += YV.Jv, eV += YV.TE.used, xV += YV.hasTwin ? YV.Jv * this.twinUnitBytes : 0, JV += YV.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: VV * this.unitBytes,
          usedBytes: eV * this.unitBytes,
          twinBytes: xV,
          allocatedBytes: JV
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: VV,
          maxStorageBufferBindingSize: eV
        } = this.device.limits;
        let xV = Math.floor(Math.min(67108864, VV) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (xV = Math.min(xV, Math.floor(eV / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (xV = Math.min(xV, Math.floor(eV / this.twinUnitBytes))), xV
      }
    }
    const Np = 16383;

    function Xp(VV, eV, xV, JV, YV) {
      let UV = 0;
      for (let yV = xV; yV < JV; yV += Np) VV.drawIndexed(6 * Math.min(Np, JV - yV), 1, 0, eV + 4 * yV, YV), UV++;
      return UV
    }
    class Mp {
      constructor(VV, eV) {
        this.recordsGroup = eV, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const xV = ue.i.strideWithoutAtlas;
        this.vertexArena = new Ap(VV, xV, GPUBufferUsage.VERTEX, `terrain-vertices-${xV}`), this.quadArena = new Ap(VV, jp.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const JV = (0, se.d)(new Uint16Array(98298), Np);
        this.quadPattern = VV.createBuffer({
          label: "terrain-quad-pattern",
          size: JV.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), VV.queue.writeBuffer(this.quadPattern, 0, JV)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(VV, eV) {
        const xV = eV.packedVertices,
          JV = xV ? this.quadArena.allocate(VV.faceCount) : this.vertexArena.allocate(VV.vertexCount);
        if (!JV) return !1;
        VV.vertices = JV;
        const YV = xV ? new Uint8Array(xV.buffer, xV.byteOffset, xV.byteLength) : new Uint8Array(eV.vertices);
        return JV.page.write(JV, YV), !0
      }
      setLight(VV, eV) {
        const {
          vertices: xV
        } = VV;
        xV && 0 !== eV.length && xV.page.live && (eV.length < VV.vertexCount ? xV.page.arena.warnOnce("shortLight", `a part's ${eV.length} light values are fewer than its ${VV.vertexCount} vertices, so its light is left as it was`) : (xV.page.writeLight(xV, eV), VV.lit = !0))
      }
      lightFullSky(VV, eV) {
        this.fullSky.length < eV && (this.fullSky = new Uint16Array(Math.max(eV, 4096)).fill(Fp.j));
        for (const xV of VV) {
          const VV = xV.vertices;
          VV.page.live && (VV.page.writeLight(VV, this.fullSky), xV.lit = !0)
        }
      }
      backed(VV) {
        const {
          vertices: eV
        } = VV;
        return !!eV && eV.page.holds(eV)
      }
      lost(VV) {
        const {
          vertices: eV
        } = VV;
        return !!eV && eV.page.lost(eV)
      }
      release(VV) {
        VV.vertices && VV.vertices.page.arena.free(VV.vertices), VV.vertices = null, VV.lit = !1
      }
      setDrawing(VV) {
        this.forgetBound()
      }
      draw(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : eV.faceCount;
        const UV = eV.vertices,
          yV = UV.page,
          pV = xV ? yV.twin : null;
        if (!yV.holds(UV) || xV && !pV) return 0;
        const {
          verticesPerUnit: QV
        } = yV.arena;
        let nV = UV.start * QV;
        this.boundPattern || (VV.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const wV = JV + YV;
        if (QV > 1) return yV.buffer === this.boundRecords && pV === this.boundRecordsLight || (VV.setBindGroup(1, this.recordsGroup(yV.buffer, pV)), this.boundRecords = yV.buffer, this.boundRecordsLight = pV), Xp(VV, nV, JV, wV, eV.slot);
        yV.buffer !== this.boundVertices && (VV.setVertexBuffer(0, yV.buffer), this.boundVertices = yV.buffer), pV && pV !== this.boundLight && (VV.setVertexBuffer(1, pV), this.boundLight = pV);
        const ZV = eV.faceCount;
        return wV <= ZV ? Xp(VV, nV, JV, wV, eV.slot) : Xp(VV, nV, JV, ZV, eV.slot) + Xp(VV, nV, Math.max(JV, ZV) - ZV, wV - ZV, eV.slot)
      }
      get buffersAwaitingVerdict() {
        let VV = 0;
        for (const eV of this.arenas()) VV += eV.awaitingVerdict;
        return VV
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class zp {
      constructor(VV, eV, xV, JV) {
        this.device = VV, this.splitBefore = eV, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = VV.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const YV = VV.createShaderModule({
          label: "scene-depth-copy",
          code: (UV = xV._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${UV?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var UV;
        VV.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: YV,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: YV,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((VV => {
          this.pipeline = VV, this.building = !1
        }), (VV => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", VV)
        })), xV._executeWithTransmission = () => this.execute(xV, JV)
      }
      get compiling() {
        return this.building
      }
      setWanted(VV) {
        this.wanted = VV
      }
      setPlanes(VV, eV) {
        VV === this.near && eV === this.far || (this.near = VV, this.far = eV, this.unproject[0] = VV / (eV - VV), this.unproject[1] = eV * VV / (eV - VV), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var VV, eV;
        return null !== (VV = null === (eV = this.copy) || void 0 === eV ? void 0 : eV.view) && void 0 !== VV ? VV : null
      }
      execute(VV, eV) {
        var xV;
        null === (xV = this.retired) || void 0 === xV || xV.destroy(), this.retired = null;
        const JV = Te(eV),
          YV = VV._transparentBindings,
          UV = this.wanted && this.pipeline ? this.splitIndex(YV) : -1,
          yV = VV._colorAttachment,
          pV = yV.resolveTarget;
        UV >= 0 && (yV.resolveTarget = void 0, ep(VV, !0));
        let QV = JV.beginRenderPass(VV._renderPassDescriptor);
        QV.setBindGroup(0, VV._sceneBG);
        let nV = this.drawList(QV, eV, VV._opaqueBindings, 0, VV._opaqueBindings.length);
        if (nV += this.drawList(QV, eV, VV._directBindings, 0, VV._directBindings.length), nV += this.drawList(QV, eV, YV, 0, UV >= 0 ? UV : YV.length), QV.end(), UV < 0) return nV;
        ep(VV);
        const wV = VV._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: ZV,
            stencilLoadOp: vV
          } = wV,
          rV = yV.loadOp;
        yV.resolveTarget = pV;
        try {
          this.copyDepth(JV, VV), yV.loadOp = "load", wV.depthLoadOp = "load", vV && (wV.stencilLoadOp = "load"), QV = JV.beginRenderPass(VV._renderPassDescriptor), QV.setBindGroup(0, VV._sceneBG), nV += this.drawList(QV, eV, YV, UV, YV.length), QV.end()
        } finally {
          yV.loadOp = rV, wV.depthLoadOp = ZV, wV.stencilLoadOp = vV
        }
        return nV
      }
      splitIndex(VV) {
        for (let eV = 0; eV < VV.length; eV++)
          if (VV[eV].renderable === this.splitBefore) return eV;
        return -1
      }
      drawList(VV, eV, xV, JV, YV) {
        let UV = null,
          yV = 0;
        for (let pV = JV; pV < YV; pV++) {
          const JV = xV[pV],
            YV = JV.renderable.mesh;
          YV && !1 === YV.visible || (JV.pipeline !== UV && (VV.setPipeline(JV.pipeline), UV = JV.pipeline), yV += JV.draw(VV, eV))
        }
        return yV
      }
      copyDepth(VV, eV) {
        var xV, JV;
        const YV = (null !== (xV = eV._config.depth) && void 0 !== xV ? xV : eV._config.rt)._depthTexture,
          UV = (null === (JV = this.copy) || void 0 === JV ? void 0 : JV.source) === YV ? this.copy : this.remakeCopy(YV),
          yV = VV.beginRenderPass(UV.pass);
        yV.setPipeline(this.pipeline), yV.setBindGroup(0, UV.bindGroup), yV.draw(3), yV.end()
      }
      remakeCopy(VV) {
        var eV, xV;
        this.retired = null !== (eV = null === (xV = this.copy) || void 0 === xV ? void 0 : xV.texture) && void 0 !== eV ? eV : null;
        const JV = this.device.createTexture({
            label: "scene-depth",
            size: [VV.width, VV.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          YV = JV.createView(),
          UV = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: VV.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          yV = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: YV,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: VV,
          texture: JV,
          view: YV,
          bindGroup: UV,
          pass: yV
        }, this.copy
      }
    }
    const Gp = "rgba8unorm";

    function Wp(VV) {
      return VV ? 15 : 1
    }
    class Rp {
      constructor(VV, eV, xV, JV) {
        this.device = VV, this.terrain = JV, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = eV._targetSignature._sampleCount > 1, this.cameraBuffer = VV.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = VV.createBindGroupLayout({
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
        const YV = VV.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = VV.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: YV,
          entries: []
        });
        const UV = VV.createShaderModule({
          label: "sun-shadow-mask",
          code: (yV = this.edge, `${(0,Se.B)()}${pJ({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${yV?Sx:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Wp(yV)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${yV?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var yV;
        VV.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: VV.createPipelineLayout({
            bindGroupLayouts: [this.layout, YV, YV, fU(VV, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: UV,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: UV,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((VV => {
          this.pipeline = VV, this.building = !1
        }), (VV => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", VV)
        }));
        const pV = eV._executeWithTransmission;
        eV._executeWithTransmission = VV => this.execute(eV, xV, (() => pV ? pV(VV) : function(VV, eV) {
          const xV = Te(eV).beginRenderPass(VV._renderPassDescriptor);
          xV.setBindGroup(0, VV._sceneBG);
          let JV = gp(xV, eV, VV._opaqueBindings);
          return JV += gp(xV, eV, VV._directBindings), JV += gp(xV, eV, VV._transparentBindings), xV.end(), JV
        }(eV, xV)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var VV, eV;
        return null !== (VV = null === (eV = this.targets) || void 0 === eV ? void 0 : eV.maskView) && void 0 !== VV ? VV : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(VV) {
        ! function(VV, eV) {
          const xV = VV.worldMatrix,
            JV = VV.projectionMatrix,
            YV = 1 / JV[0],
            UV = 1 / JV[5],
            yV = VV.far * VV.near / (VV.far - VV.near);
          eV[0] = VV.eye[0], eV[1] = VV.eye[1], eV[2] = VV.eye[2], eV[3] = 2 ** -23 / yV, eV[4] = xV[0] * YV, eV[5] = xV[1] * YV, eV[6] = xV[2] * YV, eV[7] = yV, eV[8] = xV[4] * UV, eV[9] = xV[5] * UV, eV[10] = xV[6] * UV, eV[11] = VV.near / (VV.far - VV.near), eV[12] = xV[8], eV[13] = xV[9], eV[14] = xV[10], eV[15] = 0
        }(VV, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(VV, eV, xV) {
        if (this.retire(), !this.terrain.readsMask) return xV();
        const JV = this.targetsFor(VV),
          YV = Te(eV),
          UV = VV._renderPassDescriptor.depthStencilAttachment;
        this.edge || (JV.prepass.depthStencilAttachment.view = UV.view);
        const yV = this.terrain.drawPrepass(YV, JV.prepass, VV._sceneBG);
        if (0 === yV) return xV();
        if (this.trace(YV, JV), this.edge) return yV + 1 + xV();
        const {
          depthLoadOp: pV,
          stencilLoadOp: QV
        } = UV;
        UV.depthLoadOp = "load", QV && (UV.stencilLoadOp = "load");
        try {
          return yV + 1 + xV()
        } finally {
          UV.depthLoadOp = pV, UV.stencilLoadOp = QV
        }
      }
      trace(VV, eV) {
        const xV = this.terrain.sunShadowGroup(),
          JV = VV.beginRenderPass(eV.trace);
        this.pipeline && xV && (JV.setPipeline(this.pipeline), JV.setBindGroup(0, eV.bindGroup), JV.setBindGroup(1, this.empty), JV.setBindGroup(2, this.empty), JV.setBindGroup(3, xV), JV.draw(3)), JV.end()
      }
      retire() {
        const VV = this.retired;
        var eV;
        VV && (VV.mask.destroy(), VV.normals.destroy(), null === (eV = VV.depth) || void 0 === eV || eV.destroy(), this.retired = null)
      }
      targetsFor(VV) {
        var eV, xV;
        const JV = (null !== (eV = VV._config.depth) && void 0 !== eV ? eV : VV._config.rt)._depthTexture;
        return (null === (xV = this.targets) || void 0 === xV ? void 0 : xV.source) === JV ? this.targets : this.remake(VV, JV)
      }
      remake(VV, eV) {
        var xV;
        this.retired = this.targets;
        const JV = [eV.width, eV.height],
          YV = this.device.createTexture({
            label: "sun-shadow-mask",
            size: JV,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          UV = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: JV,
            format: Gp,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          yV = null !== (xV = VV._targetSignature._depthStencilFormat) && void 0 !== xV ? xV : eV.format,
          pV = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: JV,
            format: yV,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          QV = VV._renderPassDescriptor.depthStencilAttachment,
          nV = yV.includes("stencil"),
          wV = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: UV.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: pV ? pV.createView() : QV.view,
              depthClearValue: QV.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...nV ? {
                stencilClearValue: QV.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          ZV = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== pV && void 0 !== pV ? pV : eV).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: UV.createView()
            }]
          }),
          vV = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: YV.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Wp(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: eV,
          mask: YV,
          maskView: YV.createView(),
          normals: UV,
          depth: pV,
          bindGroup: ZV,
          prepass: wV,
          trace: vV
        }, this.targets
      }
    }

    function gp(VV, eV, xV) {
      let JV = null,
        YV = 0;
      for (const UV of xV) {
        const xV = UV.renderable.mesh;
        xV && !1 === xV.visible || (UV.pipeline !== JV && (VV.setPipeline(UV.pipeline), JV = UV.pipeline), YV += UV.draw(VV, eV))
      }
      return YV
    }
    const Dp = 6e4,
      ip = {
        status: "ok"
      },
      Cp = {
        status: "skipped"
      };
    async function ap(VV, eV) {
      const {
        isCancelled: xV
      } = VV;
      if (xV()) return {
        status: "pJ"
      };
      const {
        target: JV
      } = eV;
      if (!JV) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const YV = [],
        UV = Promise.all(Array.from(new Set(VV.materials), (async xV => {
          YV.push(await async function(VV, eV, xV, JV) {
            const YV = {
              lighting: VV.lighting,
              dirLightCount: Math.min(VV.dirLightCount, 4),
              Xk: VV.runtime
            };
            try {
              const UV = eV.material(JV);
              return UV && RJ(eV.programKey(UV, !1, YV)) ? (await UV.ready, VV.isCancelled() ? ip : UV.bindGroupLayout ? await async function(VV, eV, xV, JV) {
                const {
                  device: YV
                } = VV;
                let UV, yV;
                YV.pushErrorScope("validation");
                try {
                  UV = VV.pipelineBuild(eV, xV, JV)
                } finally {
                  yV = YV.popErrorScope().catch((() => null))
                }
                const [pV, QV] = await Promise.all([yV, UV.built.then((() => null), (VV => null !== VV && void 0 !== VV ? VV : new Error("pipeline failed")))]);
                if (!pV && !QV) return ip;
                const nV = await op(UV.module),
                  wV = nV.length > 0 ? nV.map((VV => `${UV.name} ${VV.lineNum}:${VV.linePos}: ${VV.message}`)).join("\n") : `${UV.name}: ${cp(null!==QV&&void 0!==QV?QV:pV)}`;
                return {
                  status: "failed",
                  material: eV.model.name,
                  message: wV
                }
              }(eV, UV, eV.programKey(UV, "none" !== UV.texture, YV), xV): (console.warn(`Shader pack: skipped the compile check for "${JV.name}", whose textures failed to load`), Cp)) : ip
            } catch (UV) {
              return {
                status: "failed",
                material: JV.name,
                message: cp(UV)
              }
            }
          }(VV, eV, JV, xV))
        }))),
        yV = function(VV, eV) {
          let xV, JV, YV = !1;
          const UV = new Promise((UV => {
            var yV;
            xV = setTimeout((() => {
              UV("timeout")
            }), null !== (yV = eV.timeoutMs) && void 0 !== yV ? yV : Dp), JV = setInterval((() => {
              eV.isCancelled() && UV("pJ")
            }), 50), VV.lost.then((() => {
              YV = !0, UV("lost")
            }))
          }));
          return {
            signal: UV,
            lost: () => YV,
            dispose: () => {
              clearTimeout(xV), clearInterval(JV)
            }
          }
        }(eV.device, VV);
      let pV;
      try {
        pV = await Promise.race([UV.then((() => "done")), yV.signal])
      } finally {
        yV.dispose()
      }
      if ("pJ" === pV || xV()) return {
        status: "pJ"
      };
      const QV = YV.find((VV => "failed" === VV.status));
      return QV && "lost" !== pV && !yV.lost() && await new Promise((VV => {
        setTimeout(VV, 0)
      })), "lost" === pV || yV.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : QV ? {
        status: "failed",
        failure: {
          material: QV.material,
          message: QV.message
        }
      } : "timeout" === pV ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(nV=VV.timeoutMs)&&void 0!==nV?nV:Dp)/1e3} s`), {
        status: "skipped"
      }) : YV.some((VV => "skipped" === VV.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var nV
    }
    async function op(VV) {
      if (!VV) return [];
      try {
        return (await VV.getCompilationInfo()).messages.filter((VV => "error" === VV.type))
      } catch {
        return []
      }
    }

    function cp(VV) {
      var eV;
      return null !== (eV = null === VV || void 0 === VV ? void 0 : VV.message) && void 0 !== eV ? eV : String(VV)
    }

    function hp(VV, eV, xV, JV, YV) {
      RJ(eV) ? op(JV).then((eV => {
        const [JV] = eV;
        we(VV, "terrain", xV, YV, JV ? `${JV.lineNum}:${JV.linePos} error: ${JV.message}` : null)
      })) : we(VV, "terrain", xV, YV)
    }
    var lp = xV(38621),
      Lp = xV(38633),
      fp = xV(38647),
      mp = xV(3185);

    function Kp(VV, eV, xV, JV, YV) {
      const UV = Math.hypot(xV[0], xV[1], xV[2]);
      if (!(UV > 0)) return;
      const yV = [xV[0] / UV, xV[1] / UV, xV[2] / UV],
        pV = [Math.floor(eV[0]), Math.floor(eV[1]), Math.floor(eV[2])],
        QV = [0, 0, 0],
        nV = [1 / 0, 1 / 0, 1 / 0],
        wV = [1 / 0, 1 / 0, 1 / 0];
      for (let rV = 0; rV < 3; rV++) yV[rV] > 0 ? (QV[rV] = 1, nV[rV] = (pV[rV] + 1 - eV[rV]) / yV[rV], wV[rV] = 1 / yV[rV]) : yV[rV] < 0 && (QV[rV] = -1, nV[rV] = (pV[rV] - eV[rV]) / yV[rV], wV[rV] = -1 / yV[rV]);
      const {
        PZ: ZV
      } = VV;
      let vV = VV.K3(pV[0], pV[1], pV[2]);
      for (;;) {
        const eV = nV[0] < nV[1] ? nV[0] < nV[2] ? 0 : 2 : nV[1] < nV[2] ? 1 : 2;
        if (nV[eV] > JV) return;
        const xV = QV[eV] > 0 ? pV[eV] + 1 : pV[eV];
        pV[eV] += QV[eV], nV[eV] += wV[eV];
        const UV = VV.K3(pV[0], pV[1], pV[2]),
          yV = UV !== vV && !(VV.opaque[vV] && VV.opaque[UV]);
        if (yV) {
          const JV = [pV[0], pV[1], pV[2]];
          JV[eV] = xV;
          const UV = Math.floor(JV[0] / ZV),
            yV = Math.floor(JV[1] / ZV),
            QV = Math.floor(JV[2] / ZV);
          !VV.isDrawn(UV, yV, QV) && VV.hasParts(UV, yV, QV) && YV.add(`${UV},${yV},${QV}`)
        }
        if (yV && VV.occluders[UV]) return;
        vV = UV
      }
    }

    function Hp(VV, eV) {
      return VV.group - eV.group || VV.nearest - eV.nearest
    }
    class sp {
      constructor(VV, eV) {
        this.device = VV, this.hq = eV, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var VV;
        const eV = null !== (VV = this.free.pop()) && void 0 !== VV ? VV : this.next++;
        if (8 * eV >= this.data.length) {
          const VV = new Float32Array(2 * this.data.length);
          VV.set(this.data), this.data = VV, this.words = new Uint32Array(VV.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.hq()
        }
        return eV
      }
      release(VV) {
        this.free.push(VV)
      }
      set(VV, eV, xV, JV, YV) {
        const UV = 8 * VV + LJ;
        this.data[UV] = eV, this.data[UV + 1] = xV, this.data[UV + 2] = JV, this.setVisibility(VV, YV)
      }
      setVisibility(VV, eV) {
        this.data[8 * VV + fJ] = eV, this.markDirty(VV, VV)
      }
      setFaces(VV, eV, xV) {
        const JV = 8 * VV;
        this.words[JV + mJ] = eV, this.words[JV + KJ] = xV, this.markDirty(VV, VV)
      }
      markDirty(VV, eV) {
        this.dirtyMin = Math.min(this.dirtyMin, VV), this.dirtyMax = Math.max(this.dirtyMax, eV)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Sp = lJ,
      Ip = !0;
    const dp = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Sp.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Op = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class VQ {
      constructor(VV) {
        this.device = VV, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(DJ), this.dirLightUniforms = this.frameUniforms.subarray(gJ.dirLights, gJ.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Re.b)(), this.faceGroups = !0, this.visibilityGraph = Ip, this.visCull = Ip, this.visCheck = !1, this.visCullMinDistance = fp.g, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new YQ, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Xk = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Mp(VV, ((VV, eV) => this.recordsGroup(VV, eV))), this.slots = new sp(VV, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = Pe(VV), this.frameLayout = VV.createBindGroupLayout({
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
        }), this.frameBuffer = VV.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = VV.createSampler({
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
          bind: (VV, eV) => this.createBinding(this.opaqueRenderable, eV, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (VV, eV) => this.createBinding(this.transparentRenderable, eV, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(VV, eV) {
        this.sceneDepth = new zp(this.device, this.transparentRenderable, VV, eV)
      }
      createFrameBindGroup() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== VV && void 0 !== VV ? VV : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== eV && void 0 !== eV ? eV : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(VV, eV) {
        const xV = null !== eV && void 0 !== eV ? eV : VV;
        let JV = this.recordsGroups.get(xV);
        return JV || (JV = this.createFrameBindGroup(VV, eV), this.recordsGroups.set(xV, JV)), JV
      }
      setChunkMesh(VV, eV, xV) {
        var JV;
        let YV = this.chunks.get(VV);
        YV ? this.geometry.release(YV) : (YV = {
          mesh: VV,
          slot: this.slots.allocate(),
          origin: [xV[0], xV[1], xV[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: VV.visibility,
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
        }, this.chunks.set(VV, YV), this.writeSlot(YV)), YV.material = VV.material ? this.materialFor(VV.material) : null, YV.packed = !!eV.packedVertices, YV.vertexCount = (0, jp.i)(eV), YV.faceCount = YV.vertexCount / 4;
        const UV = null !== (JV = eV.faceGroups) && void 0 !== JV ? JV : null;
        if (YV.faceGroups = UV, UV) {
          const VV = lp.k;
          YV.planePX = UV[VV], YV.planeNX = UV[VV + 1], YV.planePY = UV[VV + 2], YV.planeNY = UV[VV + 3], YV.planePZ = UV[VV + 4], YV.planeNZ = UV[VV + 5]
        }
        this.drawWhole(YV), 0 !== YV.faceCount && (this.geometry.set(YV, eV) ? (YV.packed && this.slots.setFaces(YV.slot, YV.vertices.start + YV.faceCount, YV.faceCount), eV.Gk && this.setChunkMeshLight(VV, eV.Gk)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${YV.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(VV, eV) {
        const xV = this.chunks.get(VV);
        xV && this.geometry.setLight(xV, eV)
      }
      drawStats() {
        let VV = this.transparent.length;
        for (const eV of this.opaqueBatches) VV += eV.meshes.length;
        return {
          drawn: VV,
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
      removeChunkMesh(VV) {
        const eV = this.chunks.get(VV);
        eV && (this.geometry.release(eV), this.slots.release(eV.slot), this.chunks.delete(VV))
      }
      remeshLost(VV, eV) {
        this.geometry.release(eV), eV.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** eV.lostRemeshes++);
        const xV = VV.cZ,
          [JV, YV, UV] = xV.qYV(eV.origin[0], eV.origin[1], eV.origin[2]),
          yV = xV.Cb.ab(JV, YV, UV);
        yV && (yV.Db = !0, yV.cb = !0, xV.ib(yV, !1))
      }
      chooseFaceRanges(VV, eV, xV) {
        const JV = this.faceRanges;
        VV.faceMask = xV, VV.rangeCount = (0, Lp.i)(eV, xV, JV), VV.first0 = JV[0], VV.count0 = JV[1], VV.first1 = JV[2], VV.count1 = JV[3]
      }
      drawWhole(VV) {
        VV.faceMask = -1, VV.faceEpoch = -1, VV.rangeCount = 1, VV.first0 = 0, VV.count0 = VV.faceCount
      }
      writeSlot(VV) {
        const [eV, xV, JV] = this.originOffset;
        this.slots.set(VV.slot, VV.origin[0] - eV, VV.origin[1] - xV, VV.origin[2] - JV, VV.visibility)
      }
      materialFor(VV) {
        const eV = this.materials.get(VV);
        if (eV) return eV;
        const xV = tp(VV);
        if (!xV) return this.warnOnce(`material:${VV.name}`, `Lite terrain cannot draw material "${VV.name}"; its chunks are skipped.`), null;
        const {
          model: JV,
          atlas: YV,
          texture: UV,
          animated: yV,
          uniformData: pV
        } = xV, QV = {
          id: this.materials.size,
          model: JV,
          texture: UV,
          animated: yV,
          uniformData: pV,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${VV.name}`,
            size: pV.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: xV.liquid,
          customRenderMat: xV.customRenderMat,
          atlasCount: 0,
          yVV: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(VV, QV), this.device.queue.writeBuffer(QV.uniformBuffer, 0, pV), QV.ready = this.createMaterialBindGroup(QV, YV).catch((eV => {
          console.error(`Lite terrain failed to load the textures of material "${VV.name}"`, eV)
        })), QV
      }
      materialLayout(VV) {
        const eV = function(VV) {
            const eV = ["uniforms"];
            if ("atlas" === VV.texture) {
              VV.animated && eV.push("animData"), eV.push("sampler");
              for (let xV = 0; xV < VV.atlasCount; xV++) eV.push("textureArray")
            } else "single" === VV.texture && eV.push("sampler", "texture");
            return eV
          }(VV),
          xV = eV.join(",");
        let JV = this.materialLayouts.get(xV);
        if (!JV) {
          const VV = GPUShaderStage.FRAGMENT;
          JV = this.device.createBindGroupLayout({
            label: `terrain-material-${xV}`,
            entries: eV.map(((eV, xV) => {
              switch (eV) {
                case "uniforms":
                  return {
                    binding: xV, visibility: GPUShaderStage.VERTEX | VV, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: xV, visibility: GPUShaderStage.VERTEX | VV, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: xV, visibility: VV, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: xV, visibility: VV, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: xV, visibility: VV, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(xV, JV)
        }
        return JV
      }
      async createMaterialBindGroup(VV, eV) {
        const xV = [{
          buffer: VV.uniformBuffer
        }];
        if (eV) {
          const JV = await ee(this.device, eV.sources);
          VV.atlasCount = JV.length, VV.yVV = JV[0].layerWidth, VV.atlasLayers = JV[0].layers, eV.animDataPerTex && xV.push({
            buffer: uV(this.device, Float32Array.from(eV.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), xV.push(this.sampler);
          for (const VV of JV) xV.push(VV.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === VV.texture) {
          const {
            url: eV
          } = VV.model.diffuseTexture.source, {
            pixels: JV,
            width: YV,
            height: UV
          } = await Ve(eV);
          xV.push(this.sampler), xV.push(SV(this.device, JV, YV, UV, 1, `terrain-${eV}`).createView({
            dimension: "2d"
          }))
        }
        const JV = this.materialLayout(this.programKey(VV, !1));
        VV.bindGroupLayout = JV, VV.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${VV.model.name}`,
          layout: JV,
          entries: xV.map(((VV, eV) => ({
            binding: eV,
            resource: VV
          })))
        })
      }
      programKey(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const JV = xV ? xV.lighting : this.lighting,
          YV = xV ? xV.Xk : this.Xk,
          UV = {
            texture: VV.texture,
            atlasCount: VV.atlasCount,
            yVV: VV.yVV,
            atlasLayers: VV.atlasLayers,
            animated: VV.animated,
            alphaTest: VV.model.transparencyMode === NV.p.alphaTest,
            lighting: JV,
            dirLightCount: xV ? xV.dirLightCount : this.dirLightCount,
            packed: eV
          };
        if (!YV) return UV;
        const yV = this.shaderPackFields(VV, YV),
          pV = "atlas" === VV.texture && VV.model.transparencyMode === NV.p.opaque && MJ(yV.packVariant);
        return {
          ...UV,
          ...yV,
          alphaTest: UV.alphaTest || pV
        }
      }
      shaderPackFields(VV, eV) {
        const xV = this.packVariant(VV, eV);
        return void 0 === xV ? NJ : {
          packVariant: xV,
          liquid: VV.liquid
        }
      }
      packVariant(VV, eV) {
        return VV.customRenderMat ? void 0 : function(VV, eV) {
          const xV = VV ? VV.defineFor(eV ? "liquid" : "terrain") : 0;
          return 0 === xV ? void 0 : xV
        }(eV, VV.liquid)
      }
      isBlended(VV) {
        return VV.model.transparencyMode === NV.p.alphaBlend
      }
      shaderModule(VV, eV) {
        let xV = this.modules.get(VV);
        return xV || (xV = this.device.createShaderModule({
          label: eV,
          code: VV
        }), this.modules.set(VV, xV)), xV
      }
      pipelineFor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!VV.bindGroupLayout) return null;
        if (!JV) return this.pipelineOf(VV, eV, xV);
        const YV = this.pipelineIdNow(VV, eV, !0, xV),
          UV = this.pipelines.get(YV);
        if (UV) return UV;
        const yV = this.pipelineOf(VV, eV, xV);
        return yV && void 0 === UV && this.startPipeline(YV, VV, {
          ...this.programKey(VV, eV),
          resting: JV
        }, xV), yV
      }
      pipelineOf(VV, eV, xV) {
        const JV = this.pipelineIdNow(VV, eV, !1, xV),
          YV = this.pipelines.get(JV);
        return void 0 !== YV ? YV : (this.startPipeline(JV, VV, this.programKey(VV, eV), xV), null)
      }
      pipelineIdNow(VV, eV, xV, JV) {
        const {
          lighting: YV,
          dirLightCount: UV
        } = this, {
          transparencyMode: yV,
          backFaceCulling: pV
        } = VV.model, QV = this.packVariant(VV, this.Xk), nV = (eV ? 2 : 0) + (xV ? 1 : 0), wV = VV.pipelineIds[nV];
        if (null !== wV && wV.lighting === YV && wV.dirLightCount === UV && wV.packVariant === QV && wV.transparencyMode === yV && wV.cull === pV && wV.atlasCount === VV.atlasCount && wV.yVV === VV.yVV && wV.atlasLayers === VV.atlasLayers && wV.colorFormat === JV._colorFormat && wV.depthStencilFormat === JV._depthStencilFormat && wV.sampleCount === JV._sampleCount) return wV.id;
        const ZV = this.programKey(VV, eV),
          vV = this.pipelineId(VV, xV ? {
            ...ZV,
            resting: xV
          } : ZV, JV);
        return VV.pipelineIds[nV] = {
          id: vV,
          lighting: YV,
          dirLightCount: UV,
          packVariant: QV,
          transparencyMode: yV,
          cull: pV,
          atlasCount: VV.atlasCount,
          yVV: VV.yVV,
          atlasLayers: VV.atlasLayers,
          colorFormat: JV._colorFormat,
          depthStencilFormat: JV._depthStencilFormat,
          sampleCount: JV._sampleCount
        }, vV
      }
      pipelineId(VV, eV, xV) {
        return eQ(eV, this.isBlended(VV), VV.model.backFaceCulling, xV)
      }
      pipelineBuild(VV, eV, xV) {
        var JV;
        const YV = this.pipelineId(VV, eV, xV);
        return null !== (JV = this.builds.get(YV)) && void 0 !== JV ? JV : this.startPipeline(YV, VV, eV, xV)
      }
      startPipeline(VV, eV, xV, JV) {
        var YV;
        this.pipelines.set(VV, null);
        const UV = dJ(xV),
          yV = this.isBlended(eV),
          pV = this.shadowMask && JV._depthStencilFormat ? function(VV, eV, xV, JV) {
            if (void 0 === VV.packVariant || VV.liquid || eV) return "none";
            const YV = (0, Ie.i)(VV.packVariant);
            return null === YV || void 0 === YV || !YV.sunShadow || !UJ(YV, xV) || YV.discards || VV.alphaTest && MJ(VV.packVariant) ? "none" : JV ? "edge" : "plain"
          }(xV, yV, !!this.sunShadow, JV._sampleCount > 1) : "none";
        let QV;
        try {
          QV = OJ(xV, !!this.sunShadow, pV)
        } catch (EV) {
          if (!RJ(xV)) throw EV;
          return this.failedPackBuild(VV, xV, UV, EV)
        }
        const nV = this.shaderModule(QV, UV),
          wV = [];
        xV.packed || (wV.push(function(VV, eV) {
          const xV = [{
            shaderLocation: Sp.position,
            offset: ue.i.wx,
            format: "float32x3"
          }, {
            shaderLocation: Sp.normal,
            offset: ue.i.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Sp.color,
            offset: ue.i.colorOffset,
            format: "unorm8x4"
          }];
          return VV && xV.push({
            shaderLocation: Sp.uv,
            offset: ue.i.uvOffset,
            format: "float32x2"
          }), eV && xV.push({
            shaderLocation: Sp.blockFlagWords,
            offset: ue.i.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: ue.i.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: xV
          }
        }("none" !== xV.texture, RJ(xV))), xV.lighting && wV.push(dp));
        const ZV = eV.model.backFaceCulling,
          vV = {
            label: UV,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, eV.bindGroupLayout, ...HU(this.device, xV, !!this.sunShadow, "none" !== pV)]
            }),
            vertex: {
              module: nV,
              entryPoint: "mainVertex",
              buffers: wV
            },
            fragment: je({
              module: nV,
              entryPoint: "mainFragment"
            }, JV, yV ? Op : null),
            depthStencil: JV._depthStencilFormat ? {
              format: JV._depthStencilFormat,
              depthCompare: null !== (YV = JV._depthCompare) && void 0 !== YV ? YV : Ae,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: JV._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: ZV ? "back" : "none"
            }
          },
          rV = xV.resting ? 0 : 1;
        this.compiling += rV;
        const kV = "none" === pV ? this.device.createRenderPipelineAsync(vV) : this.startMaskPipelines(nV, vV, "edge" === pV);
        kV.then((eV => {
          this.compiling -= rV, this.pipelines.set(VV, eV)
        }), (VV => {
          this.compiling -= rV, console.error(`Lite terrain pipeline ${UV} failed`, VV), hp(this.device, xV, UV, nV, VV)
        }));
        const bV = {
          name: UV,
          module: nV,
          built: kV
        };
        return this.builds.set(VV, bV), bV
      }
      startMaskPipelines(VV, eV, xV) {
        const JV = eV.depthStencil,
          YV = this.device.createRenderPipelineAsync(xV ? eV : {
            ...eV,
            depthStencil: {
              ...JV,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          UV = this.device.createRenderPipelineAsync({
            ...eV,
            label: `${eV.label}-prepass`,
            fragment: {
              module: VV,
              entryPoint: "prepassFragment",
              targets: [{
                format: Gp
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([YV, UV]).then((VV => {
          let [eV, xV] = VV;
          return this.prepassOf.set(eV, xV), this.maskPipelines++, eV
        }))
      }
      failedPackBuild(VV, eV, xV, JV) {
        console.error(`Lite terrain pipeline ${xV} failed`, JV), hp(this.device, eV, xV, null, JV);
        const YV = Promise.reject(JV);
        YV.catch((() => {}));
        const UV = {
          name: xV,
          module: null,
          built: YV
        };
        return this.builds.set(VV, UV), UV
      }
      checkShaderPack(VV) {
        return ap(VV, {
          device: this.device,
          target: this.target,
          material: VV => this.materialFor(VV),
          programKey: (VV, eV, xV) => this.programKey(VV, eV, xV),
          pipelineBuild: (VV, eV, xV) => this.pipelineBuild(VV, eV, xV)
        })
      }
      createBinding(VV, eV, xV) {
        return this.target = eV, {
          renderable: VV,
          pipeline: ze(this.device, eV),
          draw: VV => {
            this.geometry.setDrawing(!0);
            try {
              return xV ? this.drawTransparent(VV, eV) : this.drawOpaque(VV, eV)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(VV, eV) {
        var xV, JV, YV, UV;
        const {
          iv: yV
        } = VV;
        this.lighting = VV.eE;
        const pV = (0, Bp.s)(eV);
        this.dirLightCount = Math.min(pV, 4), this.Xk = null !== (xV = yV.Xk) && void 0 !== xV ? xV : null, pV > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(VV, eV), this.animateMaterials(eV.animTick);
        const QV = yV.Vr,
          nV = QV[0] !== this.originOffset[0] || QV[1] !== this.originOffset[1] || QV[2] !== this.originOffset[2];
        nV && (this.originOffset[0] = QV[0], this.originOffset[1] = QV[1], this.originOffset[2] = QV[2]);
        const wV = eV.eye;
        this.eye[0] = wV[0], this.eye[1] = wV[1], this.eye[2] = wV[2], this.writeShaderPackInputs();
        const ZV = eV.projectionMatrix,
          vV = 0 === ZV[15];
        let rV = 0;
        (nV || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: kV
        } = this;
        Ge(this.transparentRenderable._worldCenter, eV, Xe), this.resetBatches(vV), this.transparent.length = 0, this.unlit.length = 0;
        const bV = yV.cZ.AZ,
          EV = bV / 2 * Math.sqrt(3);
        let BV = 0;
        const jV = !!this.Xk && XJ(this.Xk.defineFor("liquid"));
        let qV = !1;
        const tV = null !== (JV = null === (YV = yV.wT) || void 0 === YV ? void 0 : YV.visibility) && void 0 !== JV ? JV : null,
          FV = this.visCull && vV && 0 === this.compiling && null !== tV && yV.cZ.cYV[0] >= this.visCullMinDistance ? this.target : null,
          TV = this.visPassable,
          PV = this.visCandidates,
          AV = this.visCandidateBatches;
        TV.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let NV = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let XV = 0;
        const MV = (VV, xV) => {
          if (!xV) return this.transparent.push(VV), void(XV += 2 * VV.faceCount);
          if (null !== VV.faceGroups && xV.faceCull) {
            if (0 === rV && (rV = (0, Lp.b)(ZV, eV.renderWidth, eV.renderHeight), rV !== this.faceFocalPx && (this.faceFocalPx = rV, kV = ++this.faceEpoch)), VV.faceEpoch !== kV) {
              VV.faceEpoch = kV;
              const eV = Math.sqrt(VV.distance) + EV,
                xV = (0, Lp.f)(VV.planePX, VV.planeNX, VV.planePY, VV.planeNY, VV.planePZ, VV.planeNZ, this.eye[0] - (VV.origin[0] - this.originOffset[0]), this.eye[1] - (VV.origin[1] - this.originOffset[1]), this.eye[2] - (VV.origin[2] - this.originOffset[2]), (0, Lp.c)(eV, rV));
              xV !== VV.faceMask && this.chooseFaceRanges(VV, VV.faceGroups, xV)
            }
            if (0 === VV.rangeCount) return
          } else - 1 !== VV.faceMask && this.drawWhole(VV);
          xV.meshes.push(VV), XV += 2 * ((VV.rangeCount > 0 ? VV.count0 : 0) + (VV.rangeCount > 1 ? VV.count1 : 0))
        };
        for (const GV of this.chunks.values()) {
          nV && this.writeSlot(GV);
          const VV = GV.mesh.visibility;
          VV !== GV.visibility && (GV.visibility = VV, this.slots.setVisibility(GV.slot, VV));
          const {
            material: xV
          } = GV;
          this.geometry.lost(GV) && performance.now() >= GV.lostRetryAt && this.remeshLost(yV, GV);
          const JV = !(null === xV || void 0 === xV || !xV.bindGroup) && this.geometry.backed(GV),
            YV = JV && this.lighting && !GV.vertices.page.twin;
          if (FV && (Number.isNaN(GV.key) && (GV.ci = Math.floor(GV.origin[0] / bV), GV.cj = Math.floor(GV.origin[1] / bV), GV.ck = Math.floor(GV.origin[2] / bV), GV.key = (0, mp.g)(GV.ci, GV.cj, GV.ck)), (!JV || VV < 1 || YV || !this.batchDraws(xV, GV.packed, FV)) && this.visSeeThrough(GV, FV) && TV.add(GV.key)), !JV) continue;
          YV || (GV.lostRemeshes = 0);
          const UV = GV.origin[0] - this.originOffset[0],
            pV = GV.origin[1] - this.originOffset[1],
            QV = GV.origin[2] - this.originOffset[2];
          if (!(0, Up.b)(eV.frustum, UV, pV, QV, bV)) continue;
          const wV = UV + bV / 2 - this.eye[0],
            ZV = pV + bV / 2 - this.eye[1],
            rV = QV + bV / 2 - this.eye[2];
          if (GV.distance = wV * wV + ZV * ZV + rV * rV, this.lighting && !GV.lit && (BV = Math.max(BV, GV.vertexCount), this.unlit.push(GV)), YV) continue;
          const kV = this.isBlended(xV) ? null : this.batchFor(xV, GV.packed, GV.vertices.page, 1 === VV, vV);
          FV ? (PV[NV] = GV, AV[NV++] = kV) : MV(GV, kV)
        }
        const zV = FV ? this.sweepVisibility(VV, eV, tV) : null;
        null === (UV = (0, iU.u)(yV)) || void 0 === UV || UV.update(eV.frustum, this.originOffset, bV, zV);
        for (let GV = 0; GV < NV; GV++) {
          const VV = PV[GV];
          !zV || zV.isDrawn(VV.ci, VV.cj, VV.ck) ? MV(VV, AV[GV]) : (this.visCulledParts++, this.visCulledTriangles += 2 * VV.faceCount)
        }
        for (const GV of this.transparent) qV ||= jV && GV.material.liquid && !GV.material.customRenderMat;
        this.submittedTriangles = XV, zV && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(VV, eV, zV)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(qV) : qV && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && BV > 0 && this.geometry.lightFullSky(this.unlit, BV);
        for (const GV of this.opaqueBatches) this.chunkSorter.sort(GV.meshes, 1) || GV.meshes.sort(xQ);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(JQ)
      }
      sweepVisibility(VV, eV, xV) {
        const {
          cZ: JV
        } = VV.iv, YV = JV.AZ, UV = this.visPassable, yV = this.eye[0] + this.originOffset[0], pV = this.eye[1] + this.originOffset[1], QV = this.eye[2] + this.originOffset[2];
        if (!xV.eyeClear(yV, pV, QV, eV.near, eV.projectionMatrix, JV)) return null;
        const [nV, wV] = JV.cYV, ZV = xV.update(yV, pV, QV, YV, nV, wV, UV);
        return this.visSweeps = xV.sweeps, ZV ? xV : null
      }
      visSeeThrough(VV, eV) {
        const {
          material: xV
        } = VV;
        return (!xV || !this.isBlended(xV)) && (VV.mesh.visibility < 1 || !(null !== xV && void 0 !== xV && xV.bindGroup) || VV.faceCount > 0 && (!this.geometry.backed(VV) || this.lighting && !VV.vertices.page.twin) || !this.batchDraws(xV, VV.packed, eV))
      }
      batchDraws(VV, eV, xV) {
        var JV;
        const YV = eV ? 2 : 0;
        if (VV === this.visDrawsMaterial && function(VV, eV) {
            return 0 !== (VV & 1 << eV)
          }(this.visDrawsBits, YV)) return 0 !== (this.visDrawsBits & 2 << YV);
        let UV = null !== (JV = this.visBatchDraws.get(VV)) && void 0 !== JV ? JV : 0;
        if (!(UV & 1 << YV)) {
          UV |= 1 << YV | (!!VV.bindGroupLayout && this.canDraw(VV, eV) && !!this.pipelines.get(this.pipelineIdNow(VV, eV, !1, xV)) ? 2 << YV : 0), this.visBatchDraws.set(VV, UV)
        }
        return this.visDrawsMaterial = VV, this.visDrawsBits = UV, 0 !== (UV & 2 << YV)
      }
      runVisCheck(VV, eV, xV) {
        const {
          iv: JV
        } = VV, {
          cZ: YV
        } = JV, UV = YV.AZ, yV = new Set;
        for (const rV of this.chunks.values()) yV.add(rV.key);
        const pV = LY.Matrix.FromArray(eV.viewProjectionMatrix).invert(),
          [QV, nV, wV] = this.originOffset,
          ZV = new LY.Ik,
          vV = function(VV, eV, xV, JV) {
            const YV = new Set;
            for (let UV = 0; UV < 27; UV++)
              for (let yV = 0; yV < 48; yV++) {
                const pV = xV((yV + .5) / 48 * 2 - 1, (UV + .5) / 27 * 2 - 1);
                Kp(VV, eV, [pV[0] - eV[0], pV[1] - eV[1], pV[2] - eV[2]], JV, YV)
              }
            return YV
          }({
            K3: (VV, eV, xV) => YV.K3(VV, eV, xV),
            occluders: xV.occluders,
            opaque: xV.opaque,
            PZ: UV,
            isDrawn: (VV, eV, JV) => xV.isDrawn(VV, eV, JV),
            hasParts: (VV, eV, xV) => yV.has((0, mp.g)(VV, eV, xV))
          }, [this.eye[0] + QV, this.eye[1] + nV, this.eye[2] + wV], ((VV, eV) => (LY.Ik.TransformCoordinatesFromFloatsToRef(VV, eV, .5, pV, ZV), [ZV.x + QV, ZV.y + nV, ZV.z + wV])), (YV.cYV[0] + 1) * UV);
        this.visViolations = vV.size;
        for (const rV of vV) this.warnOnce(`vis:${rV}`, `Lite terrain cave culling skipped chunk ${rV}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var VV;
        null !== (VV = this.Xk) && void 0 !== VV && VV.isRunning() && (this.shaderPackInputs ??= new uU(this.device, this.Xk.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Xk, this.eye, this.lighting))
      }
      bindShaderPackInputs(VV, eV, xV) {
        var JV, YV, UV, yV;
        let pV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const QV = this.packVariant(eV, xV);
        if (void 0 === QV) return;
        this.shaderPackInputs || (this.shaderPackInputs = new uU(this.device, xV.textureLayers(), this.sunShadow), this.shaderPackInputs.write(xV, this.eye, this.lighting));
        const nV = XJ(QV) ? null !== (JV = null === (YV = this.sceneDepth) || void 0 === YV ? void 0 : YV.view) && void 0 !== JV ? JV : this.standIn() : null,
          wV = pV ? null !== (UV = null === (yV = this.shadowMask) || void 0 === yV ? void 0 : yV.view) && void 0 !== UV ? UV : this.standIn() : null;
        this.shaderPackInputs.bind(VV, nV, KU(QV, !!this.sunShadow), wV)
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
        var VV, eV;
        return null !== (VV = null === (eV = this.shaderPackInputs) || void 0 === eV ? void 0 : eV.bindGroupFor(null, !0)) && void 0 !== VV ? VV : null
      }
      resetBatches(VV) {
        const eV = this.opaqueBatches;
        let xV = 0;
        for (const JV of eV) JV.meshes.length > 0 && (JV.meshes.length = 0, JV.faceCull = this.batchFaceCull(JV.material, VV), eV[xV++] = JV);
        eV.length = xV
      }
      orderBatches() {
        const VV = this.opaqueBatches;
        for (let eV = 0; eV < VV.length; eV++) {
          const xV = VV[eV];
          xV.group = eV;
          for (let JV = 0; JV < eV; JV++) {
            const eV = VV[JV];
            if (eV.material === xV.material && eV.packed === xV.packed) {
              xV.group = eV.group;
              break
            }
          }
          xV.nearest = xV.meshes.length > 0 ? xV.meshes[0].distance : 1 / 0
        }
        VV.sort(Hp)
      }
      batchFor(VV, eV, xV, JV, YV) {
        for (const yV of this.opaqueBatches)
          if (yV.material === VV && yV.packed === eV && yV.page === xV && yV.resting === JV) return yV;
        const UV = {
          material: VV,
          packed: eV,
          page: xV,
          resting: JV,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(VV, YV)
        };
        return this.opaqueBatches.push(UV), UV
      }
      batchFaceCull(VV, eV) {
        return !(!eV || !(0, lp.p)(VV.model)) && (!this.Xk || ! function(VV) {
          var eV;
          return !(null === (eV = (0, Ie.i)(VV)) || void 0 === eV || !eV.movesVertices)
        }(this.packVariant(VV, this.Xk)))
      }
      writeFrameUniforms(VV, eV) {
        const xV = this.frameUniforms,
          JV = gJ;
        if ((0, Bp.w)(VV, xV), xV[JV.fogInfos] = eV.fogEnabled ? eV.fogMode : 0, xV[JV.fogInfos + 1] = eV.fogStart, xV[JV.fogInfos + 2] = eV.fogEnd, xV[JV.fogInfos + 3] = eV.fogDensity, xV.set(eV.fogColour, JV.fogColour), xV[JV.outputHeight] = eV.renderHeight, xV.set(eV.ambientColour, JV.sceneAmbient), (0, Bp.r)(eV, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const eV = (0, jp.j)(VV.qb, VV.mk, VV.Kk);
          for (let VV = 0; VV < 4; VV++) xV[JV.aoLevels + VV] = eV[VV] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, xV)
      }
      animateMaterials(VV) {
        const eV = iJ.anim;
        for (const xV of this.materials.values()) xV.animated && (xV.uniformData[eV] = VV, this.device.queue.writeBuffer(xV.uniformBuffer, 4 * eV, xV.uniformData, eV, 1))
      }
      canDraw(VV, eV) {
        return !("atlas" === VV.texture && !eV) || (this.warnOnce(`stride:${VV.id}`, `Lite terrain: material "${VV.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(VV, eV) {
        let xV = 0;
        VV.setBindGroup(1, this.frameBindGroup);
        for (const JV of this.opaqueBatches) {
          if (!JV.meshes.length || !this.canDraw(JV.material, JV.packed)) continue;
          const YV = this.pipelineFor(JV.material, JV.packed, eV, JV.resting);
          YV && (VV.setPipeline(YV), VV.setBindGroup(2, JV.material.bindGroup), this.Xk && this.bindShaderPackInputs(VV, JV.material, this.Xk, this.prepassOf.has(YV)), xV += this.drawBatch(VV, JV))
        }
        return xV
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(VV, eV, xV) {
        const JV = this.target,
          YV = this.Xk;
        if (!JV || !YV || 0 === this.maskPipelines) return 0;
        let UV = 0,
          yV = null;
        this.geometry.setDrawing(!0);
        try {
          for (const pV of this.opaqueBatches) {
            if (!pV.meshes.length || !this.canDraw(pV.material, pV.packed)) continue;
            const QV = this.pipelineFor(pV.material, pV.packed, JV, pV.resting),
              nV = QV && this.prepassOf.get(QV);
            nV && (yV || (yV = VV.beginRenderPass(eV), yV.setBindGroup(0, xV), yV.setBindGroup(1, this.frameBindGroup)), yV.setPipeline(nV), yV.setBindGroup(2, pV.material.bindGroup), this.bindShaderPackInputs(yV, pV.material, YV, !0), UV += this.drawBatch(yV, pV))
          }
        } finally {
          var pV;
          null === (pV = yV) || void 0 === pV || pV.end(), this.geometry.setDrawing(!1)
        }
        return UV
      }
      drawBatch(VV, eV) {
        let xV = 0;
        for (const JV of eV.meshes) {
          const {
            rangeCount: eV
          } = JV;
          eV > 0 && (xV += this.geometry.draw(VV, JV, this.lighting, JV.first0, JV.count0), eV > 1 && (xV += this.geometry.draw(VV, JV, this.lighting, JV.first1, JV.count1)))
        }
        return xV
      }
      drawTransparent(VV, eV) {
        let xV = 0,
          JV = null,
          YV = null;
        VV.setBindGroup(1, this.frameBindGroup);
        for (const UV of this.transparent) {
          const yV = UV.material;
          if (!this.canDraw(yV, UV.packed)) continue;
          const pV = this.pipelineFor(yV, UV.packed, eV);
          pV && (pV !== JV && (VV.setPipeline(pV), JV = pV, this.Xk && this.bindShaderPackInputs(VV, yV, this.Xk)), yV !== YV && (VV.setBindGroup(2, yV.bindGroup), YV = yV), xV += this.geometry.draw(VV, UV, this.lighting))
        }
        return xV
      }
    }

    function eQ(VV, eV, xV, JV) {
      return `${dJ(VV)}|${VV.atlasLayers}|${VV.yVV}|${eV}|${xV}|${JV._colorFormat}|${JV._depthStencilFormat}|${JV._sampleCount}`
    }

    function xQ(VV, eV) {
      return VV.distance - eV.distance
    }

    function JQ(VV, eV) {
      return eV.distance - VV.distance
    }
    class YQ {
      constructor() {
        this.left = []
      }
      sort(VV, eV) {
        for (let xV = 0; xV < VV.length; xV++) {
          const eV = VV[xV].distance;
          if (eV - eV !== 0) return !1
        }
        return this.sortRange(VV, 0, VV.length, eV), !0
      }
      sortRange(VV, eV, xV, JV) {
        if (xV - eV <= 16) {
          for (let YV = eV + 1; YV < xV; YV++) {
            const xV = VV[YV],
              UV = JV * xV.distance;
            let yV = YV - 1;
            for (; yV >= eV && JV * VV[yV].distance > UV; yV--) VV[yV + 1] = VV[yV];
            VV[yV + 1] = xV
          }
          return
        }
        const YV = eV + xV >>> 1;
        if (this.sortRange(VV, eV, YV, JV), this.sortRange(VV, YV, xV, JV), JV * VV[YV - 1].distance <= JV * VV[YV].distance) return;
        const {
          left: UV
        } = this, yV = YV - eV;
        for (let wV = 0; wV < yV; wV++) UV[wV] = VV[eV + wV];
        let pV = 0,
          QV = YV,
          nV = eV;
        for (; pV < yV && QV < xV;) VV[nV++] = JV * VV[QV].distance < JV * UV[pV].distance ? VV[QV++] : UV[pV++];
        for (; pV < yV;) VV[nV++] = UV[pV++]
      }
    }
    const UQ = Math.ceil(102);

    function yQ(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : eV;
      const UV = Math.min(eV, xV),
        yV = new Uint32Array(Tx(JV));
      for (let pV = 0; pV < JV; pV++) {
        const eV = Math.floor(pV * UV / JV),
          xV = Math.max(eV + 1, Math.floor((pV + 1) * UV / JV));
        for (let QV = 0; QV < JV; QV++) {
          const nV = Math.floor(QV * UV / JV),
            wV = Math.max(nV + 1, Math.floor((QV + 1) * UV / JV));
          let ZV = 0;
          for (let JV = eV; JV < xV; JV++)
            for (let eV = nV; eV < wV; eV++) VV[JV * YV + eV] >= UQ && ZV++;
          if (2 * ZV >= (xV - eV) * (wV - nV)) {
            const VV = QV + JV * pV;
            yV[VV >>> 5] |= 1 << (31 & VV)
          }
        }
      }
      return yV
    }

    function pQ(VV) {
      return Math.max(1, Math.min(16, VV))
    }
    class QQ {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = VV, this.loadTexture = eV, this.warn = xV, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(VV, eV) {
        return (VV.WH !== this.builtVersion || this.blockCaster.length !== eV) && (this.build(VV, eV), !0)
      }
      build(VV, eV) {
        this.builtVersion = VV.WH;
        const xV = new Uint16Array(eV),
          JV = new Map;
        for (let YV = 1; YV < eV; YV++) {
          const eV = this.classify(VV, YV, JV);
          if (null === eV || eV === Bx) {
            xV[YV] = null === eV ? 0 : Bx;
            continue
          }
          let UV = this.byKey.get(eV.key);
          void 0 === UV && (UV = this.allocate(eV), this.byKey.set(eV.key, UV)), xV[YV] = UV
        }
        this.blockCaster = xV, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(VV, eV) {
        const xV = VV.tVV[eV];
        if ("function" !== typeof xV) return xV;
        try {
          return xV()
        } catch (JV) {
          return this.warnOnce(`Sun shadows: no caster option for block ${eV}: ${JV instanceof Error?JV.message:String(JV)}`), null
        }
      }
      classify(VV, eV, xV) {
        const JV = this.option(VV, eV);
        if ("none" === JV) return null;
        if (JV && JV.planes.length > 0) {
          const VV = JV.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(VV)}`,
            planes: VV
          }
        }
        if (VV.ir[eV]) return null;
        const YV = VV.ar[eV] ? VV.DH(eV) : null;
        if (YV && YV.length >= 6) {
          const VV = function(VV) {
            const eV = new Uint32Array(16);
            for (let xV = 0; xV + 6 <= VV.length; xV += 6) {
              const JV = [0, 1, 2].map((eV => Math.max(0, Math.ceil(8 * VV[xV + eV] - .5)))),
                YV = [0, 1, 2].map((eV => Math.min(7, Math.floor(8 * VV[xV + eV + 3] - .5))));
              for (let VV = JV[2]; VV <= YV[2]; VV++)
                for (let xV = JV[1]; xV <= YV[1]; xV++)
                  for (let UV = JV[0]; UV <= YV[0]; UV++) {
                    const JV = UV + 8 * (xV + 8 * VV);
                    eV[JV >>> 5] |= 1 << (31 & JV)
                  }
            }
            return eV
          }(YV);
          return function(VV) {
            return VV.every((VV => 4294967295 === VV))
          }(VV) ? Bx : VV.every((VV => 0 === VV)) ? null : {
            kind: "shape",
            key: `shape:${VV.join(",")}`,
            mask: VV
          }
        }
        if (VV.YM[eV] || !VV.tb[eV]) return null;
        const UV = [0, 1, 2, 3, 4, 5].map((JV => {
          const YV = VV.Fb[6 * eV + JV];
          let UV = xV.get(YV);
          return void 0 === UV && (UV = function(VV) {
            if (!VV || VV.Rb) return null;
            const {
              UVV: eV,
              yVV: xV,
              YVV: JV
            } = VV;
            if (!eV || !xV || !(xV > 0) || void 0 === JV || !(JV >= 0)) return null;
            const YV = eV[0],
              UV = xV * xV * 4;
            if (!YV || YV.byteLength < UV) return null;
            const yV = Math.floor(YV.byteLength / UV),
              pV = eV[Math.floor(JV / yV)];
            if (!pV) return null;
            const QV = new Uint8Array(pV.buffer, pV.byteOffset, pV.byteLength),
              nV = JV % yV * UV;
            if (nV + UV > QV.length) return null;
            const wV = new Uint8Array(xV * xV);
            let ZV = !1;
            for (let vV = 0; vV < wV.length; vV++) wV[vV] = QV[nV + 4 * vV + 3], ZV ||= wV[vV] < UQ;
            return ZV ? {
              alpha: wV,
              width: xV
            } : null
          }(VV.Wb(YV)), xV.set(YV, UV)), UV
        }));
        if (UV.every((VV => null === VV))) return Bx;
        const yV = pQ(Math.max(...UV.map((VV => {
            var eV;
            return null !== (eV = null === VV || void 0 === VV ? void 0 : VV.width) && void 0 !== eV ? eV : 1
          })))),
          pV = new Uint32Array(Tx(yV)).fill(4294967295),
          QV = UV.map((VV => null === VV ? pV : yQ(VV.alpha, VV.width, VV.width, yV)));
        return {
          kind: "cutout",
          key: `cutout:${yV}:${QV.map((VV=>VV.join(","))).join("|")}`,
          size: yV,
          faces: QV
        }
      }
      allocate(VV) {
        if (this.nextCaster >= Px) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const eV = this.nextCaster++;
        if (this.writeCaster(eV, jx, 0, 0, 0), "shape" === VV.kind) {
          const xV = this.allocateMask(VV.mask.length);
          xV >= 0 && (this.sink(xV, VV.mask), this.writeCaster(eV, qx, xV, 0, 8))
        } else if ("cutout" === VV.kind) {
          const xV = Tx(VV.size),
            JV = this.allocateMask(6 * xV);
          if (JV >= 0) {
            const YV = new Uint32Array(6 * xV);
            VV.faces.forEach(((VV, eV) => {
              YV.set(VV, eV * xV)
            })), this.sink(JV, YV), this.writeCaster(eV, Fx, JV, 0, VV.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(eV, VV.planes).finally((() => {
          this.planesLoading--
        })));
        return eV
      }
      async loadPlanes(VV, eV) {
        const xV = await Promise.all(eV.map((VV => this.texture(VV.texture))));
        if (xV.some((VV => null === VV))) return;
        const JV = xV,
          YV = pQ(Math.max(...JV.map((VV => Math.min(VV.width, VV.height))))),
          UV = Tx(YV),
          yV = this.allocateMask(eV.length * (4 + UV));
        if (yV < 0) return;
        const pV = new Uint32Array(eV.length * (4 + UV)),
          QV = 4 * eV.length;
        eV.forEach(((VV, eV) => {
          const xV = yV + QV + eV * UV;
          pV.set(function(VV, eV) {
            const [xV, JV] = VV.tangent, YV = Math.hypot(xV, JV) || 1, UV = xV / YV, yV = JV / YV, pV = VV.centre[0] * yV - VV.centre[1] * UV, QV = new Uint32Array(4);
            return new Float32Array(QV.buffer, 0, 3).set([UV, yV, pV]), QV[3] = eV, QV
          }(VV, xV), 4 * eV), pV.set(yQ(JV[eV].alpha, JV[eV].width, JV[eV].height, YV), QV + eV * UV)
        })), this.sink(yV, pV), this.writeCaster(VV, tx, yV, eV.length, YV)
      }
      texture(VV) {
        let eV = this.textures.get(VV);
        return eV || (eV = this.loadTexture(VV).catch((eV => (this.warn(`Sun shadows: no mask for ${VV}: ${eV instanceof Error?eV.message:String(eV)}`), null))), this.textures.set(VV, eV)), eV
      }
      allocateMask(VV) {
        if (this.nextMaskWord + VV > Ax) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const eV = 32768 + this.nextMaskWord;
        return this.nextMaskWord += VV, eV
      }
      writeCaster(VV, eV, xV, JV, YV) {
        this.sink(0 + 4 * VV, Uint32Array.of(eV, xV, JV, YV))
      }
      warnOnce(VV) {
        this.warned.has(VV) || (this.warned.add(VV), this.warn(VV))
      }
    }
    var nQ = xV(3161);

    function wQ(VV) {
      return !VV.Db && !VV.oN && !VV.nb
    }

    function ZQ() {
      return {
        bricks: new Uint32Array(nx),
        cells: new Uint16Array(32768),
        special: new Uint8Array(px)
      }
    }
    class vQ {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = VV, this.writeVoxels = eV, this.writePool = xV, this.warn = JV, this.eyeChunk = null, this.slotChunk = new Array(ex).fill(null), this.slotVersion = new Float64Array(ex).fill(-1), this.slotPool = new Array(ex).fill(null), this.starved = new Uint8Array(ex), this.queue = [], this.queued = new Uint8Array(ex), this.queueSorted = !0, this.freePool = new Uint32Array(Nx), this.freeCount = Nx, this.casterTable = null, this.warnedPool = !1, this.scratch = ZQ(), this.victimScratch = ZQ(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * ex), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let YV = 0; YV < Nx; YV++) this.freePool[YV] = 65535 - YV
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Nx - this.freeCount
      }
      chunkAdded(VV) {
        if (null === this.eyeChunk || !this.inRadius(VV.i, VV.j, VV.k)) return;
        const eV = kx(VV.i, VV.j, VV.k);
        this.slotChunk[eV] = VV, this.slotVersion[eV] = -1, this.enqueue(eV)
      }
      update(VV, eV, xV) {
        const JV = this.casters.blockCaster;
        if (JV !== this.casterTable) {
          this.casterTable = JV;
          for (let VV = 0; VV < ex; VV++) this.slotVersion[VV] = -1, this.slotChunk[VV] && this.enqueue(VV)
        }
        const YV = Math.floor(VV[0] / 32),
          UV = Math.floor(VV[1] / 32),
          yV = Math.floor(VV[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== YV || this.eyeChunk[1] !== UV || this.eyeChunk[2] !== yV) && (this.eyeChunk = [YV, UV, yV], this.follow(eV), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let pV = 0; pV < ex; pV++) {
          const VV = this.slotChunk[pV];
          VV && (VV.iN || VV.kb !== this.slotVersion[pV]) && this.enqueue(pV)
        }
        this.drain(xV), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(VV, eV) {
        this.records.set(eV, 4 * VV), this.windowTopStale = !0, this.writeVoxels(4 * VV, eV)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const VV = this.records;
        let eV = -1 / 0;
        for (let JV = 0; JV < VV.length; JV += 4) {
          const xV = 255 & VV[JV + 3];
          xV !== Yx && xV !== Ux || !this.inRadius(VV[JV], VV[JV + 1], VV[JV + 2]) || (eV = Math.max(eV, VV[JV + 1] * de + (VV[JV + 3] >>> 8)))
        }
        const xV = eV === -1 / 0 ? 1 : eV + Zx;
        xV !== this.windowTop[0] && (this.windowTop[0] = xV, this.writeVoxels(wx, this.windowTop))
      }
      follow(VV) {
        const eV = this.eyeChunk,
          [xV, JV, YV] = Oe;
        for (let yV = -YV; yV <= YV; yV++)
          for (let YV = -JV; YV <= JV; YV++)
            for (let JV = -xV; JV <= xV; JV++) {
              var UV;
              const xV = eV[0] + JV,
                pV = eV[1] + YV,
                QV = eV[2] + yV,
                nV = kx(xV, pV, QV),
                wV = this.slotChunk[nV];
              if (wV && !wV.iN && wV.i === xV && wV.j === pV && wV.k === QV) continue;
              const ZV = null !== (UV = VV(xV, pV, QV)) && void 0 !== UV ? UV : null;
              wV && (wV.i !== xV || wV.j !== pV || wV.k !== QV) && this.slotPool[nV] && (this.release(nV), this.record.fill(0), this.writeRecord(nV, this.record)), this.slotChunk[nV] = ZV, this.slotVersion[nV] = -1, (ZV || wV) && this.enqueue(nV)
            }
      }
      requeueStarved() {
        for (let VV = 0; VV < ex; VV++) this.starved[VV] && this.slotChunk[VV] && this.enqueue(VV)
      }
      enqueue(VV) {
        this.queued[VV] || (this.queued[VV] = 1, this.queue.push(VV), this.queueSorted = !1)
      }
      drain(VV) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const VV = new Map;
          for (const eV of this.queue) VV.set(eV, this.slotDistance(eV));
          this.queue.sort(((eV, xV) => VV.get(xV) - VV.get(eV))), this.queueSorted = !0
        }
        const eV = performance.now();
        let xV = 0;
        const JV = [];
        for (; this.queue.length > 0 && (0 === xV || performance.now() - eV < VV);) {
          const VV = this.queue.pop(),
            eV = this.slotChunk[VV];
          !eV || eV.iN || wQ(eV) ? (this.queued[VV] = 0, this.encodeSlot(VV), xV++) : JV.push(VV)
        }
        for (let YV = JV.length - 1; YV >= 0; YV--) this.queue.push(JV[YV])
      }
      slotDistance(VV) {
        const eV = this.slotChunk[VV],
          xV = this.eyeChunk;
        return eV ? Math.max(Math.abs(eV.i - xV[0]), Math.abs(eV.j - xV[1]), Math.abs(eV.k - xV[2])) : 0
      }
      inRadius(VV, eV, xV) {
        const JV = this.eyeChunk,
          [YV, UV, yV] = Oe;
        return Math.abs(VV - JV[0]) <= YV && Math.abs(eV - JV[1]) <= UV && Math.abs(xV - JV[2]) <= yV
      }
      release(VV) {
        const eV = this.slotPool[VV];
        if (eV) {
          for (let VV = eV.length - 1; VV >= 0; VV--) this.freePool[this.freeCount++] = eV[VV];
          this.slotPool[VV] = null
        }
      }
      encodeSlot(VV) {
        var eV, xV, JV, YV, UV;
        let yV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          pV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const QV = null !== (eV = null === (xV = this.slotPool[VV]) || void 0 === xV ? void 0 : xV.length) && void 0 !== eV ? eV : 0;
        this.release(VV), this.starved[VV] = 0;
        const nV = this.slotChunk[VV],
          wV = this.record;
        if (!nV || nV.iN || !nV.Ur) return this.slotChunk[VV] = null, this.slotVersion[VV] = -1, wV.fill(0), this.writeRecord(VV, wV), void(QV > 0 && this.requeueStarved());
        this.slotVersion[VV] = nV.kb;
        const ZV = this.encodeBricks(nV, VV, yV, pV);
        wV[0] = nV.i, wV[1] = nV.j, wV[2] = nV.k, wV[3] = ZV, this.writeRecord(VV, wV), null === (JV = this.encoded) || void 0 === JV || JV.call(this, nV), pV && (null !== (YV = null === (UV = this.slotPool[VV]) || void 0 === UV ? void 0 : UV.length) && void 0 !== YV ? YV : 0) < QV && this.requeueStarved()
      }
      encodeBricks(VV, eV, xV, JV) {
        if (VV.Rk) return Jx;
        const YV = this.casters.blockCaster,
          {
            data: UV,
            stride: yV,
            offset: pV
          } = VV.Ur,
          [QV, nV, wV] = yV,
          ZV = de,
          {
            bricks: vV,
            cells: rV,
            special: kV
          } = xV;
        vV.fill(0), kV.fill(0);
        let bV = 0,
          EV = 0,
          BV = 0;
        for (let jV = 0; jV < ZV; jV++) {
          const eV = jV >> 2,
            xV = 3 & jV,
            JV = VV.Yk[jV],
            yV = JV === nQ.f ? -1 : JV < YV.length ? YV[JV] : 0;
          if (0 !== yV)
            for (let VV = 0; VV < ZV; VV++) {
              const JV = VV >> 2,
                qV = 3 & VV;
              let tV = pV + VV * QV + jV * nV;
              for (let VV = 0; VV < ZV; VV++, tV += wV) {
                let pV = yV;
                if (pV < 0) {
                  const VV = UV[tV];
                  if (pV = VV < YV.length ? YV[VV] : 0, 0 === pV) continue
                }
                const QV = bx(JV, eV, VV >> 2),
                  nV = Ex(qV, xV, 3 & VV);
                vV[3 * QV + (nV >>> 5)] |= 1 << (31 & nV), rV[QV * yx + nV] = pV, bV++, BV = jV, pV === Bx ? EV++ : kV[QV] = 1
              }
            }
        }
        return 0 === bV ? Jx : 32768 === EV ? Yx | BV << 8 : (this.writePoolEntries(eV, xV, JV), this.writeVoxels(Qx + eV * nx, vV), Ux | BV << 8)
      }
      writePoolEntries(VV, eV, xV) {
        const {
          bricks: JV,
          cells: YV,
          special: UV
        } = eV, yV = this.entry;
        let pV = 0;
        for (let wV = 0; wV < px; wV++) pV += UV[wV];
        if (0 === pV) return;
        xV && this.freeCount < pV && this.evictBeyond(VV, pV);
        const QV = new Uint32Array(xV ? Math.min(pV, this.freeCount) : 0);
        let nV = 0;
        for (let wV = 0; wV < px; wV++) {
          if (!UV[wV]) continue;
          const xV = 3 * wV;
          if (nV === QV.length) {
            this.dropSpecials(eV, wV), this.starved[VV] = 1;
            continue
          }
          const pV = this.freePool[--this.freeCount];
          QV[nV++] = pV;
          for (let VV = 0; VV < yx; VV++) {
            const eV = JV[xV + (VV >>> 5)] >>> (31 & VV) & 1 ? YV[wV * yx + VV] : 0;
            1 & VV ? yV[VV >> 1] |= eV << 16 : yV[VV >> 1] = eV
          }
          JV[xV + 2] = pV + 1, this.writePool(Xx + 32 * pV, yV)
        }
        QV.length > 0 && (this.slotPool[VV] = QV)
      }
      evictBeyond(VV, eV) {
        const xV = this.slotDistance(VV),
          JV = [];
        for (let YV = 0; YV < ex; YV++) YV !== VV && this.slotPool[YV] && this.slotDistance(YV) > xV && JV.push(YV);
        JV.sort(((VV, eV) => this.slotDistance(eV) - this.slotDistance(VV)));
        for (const YV of JV) {
          if (this.freeCount >= eV) return;
          const VV = this.slotChunk[YV];
          VV && !VV.iN && VV.Ur && (VV.kb === this.slotVersion[YV] || wQ(VV)) && this.encodeSlot(YV, this.victimScratch, !1)
        }
      }
      dropSpecials(VV, eV) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const xV = 3 * eV;
        for (let JV = 0; JV < yx; JV++) VV.cells[eV * yx + JV] !== Bx && (VV.bricks[xV + (JV >>> 5)] &= ~(1 << (31 & JV)))
      }
    }
    var rQ = xV(38547);
    class kQ {
      constructor(VV) {
        this.device = VV, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new ox, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.cZ = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = VV.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = VV.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(VV, eV, xV) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: JV
        } = this;
        JV.NZ(VV, eV), xV.forEachSunShadowCaster((VV => {
          this.add(VV)
        })), JV.finish();
        const YV = 0 === JV.parts;
        if (YV && this.uploadedEmpty) return;
        this.uploadedEmpty = YV;
        const {
          queue: UV
        } = this.device, {
          words: yV
        } = JV;
        UV.writeBuffer(this.frameBuffer, 0, yV, 0, 16385), JV.refs > 0 && UV.writeBuffer(this.frameBuffer, 65540, yV, Wx, JV.refs), YV || UV.writeBuffer(this.frameBuffer, 327684, yV, Rx, JV.parts * Gx)
      }
      add(VV) {
        const eV = this.gridFor(VV);
        if (!eV) return;
        const {
          frame: xV
        } = this, {
          cZ: JV,
          worldAt: YV,
          instances: UV,
          instanceCount: yV,
          thin: pV
        } = VV;
        if (UV)
          for (let QV = 0; QV < yV; QV++) pV ? (hx(UV, 16 * QV, JV, YV, this.cZ), xV.add(eV, this.cZ)) : xV.add(eV, UV, 16 * QV);
        else xV.add(eV, JV, YV)
      }
      gridFor(VV) {
        let {
          geometry: eV,
          indexed: xV,
          first: JV,
          count: YV,
          skip: UV
        } = VV, yV = this.grids.get(eV);
        yV || (yV = new Map, this.grids.set(eV, yV));
        const pV = `${xV?JV:-1-JV}:${YV}:${null!==UV&&void 0!==UV?UV:""}`;
        let QV = yV.get(pV);
        if (void 0 !== QV || this.gridsFull) return QV;
        const nV = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = nV + 2;
        else if (nV > this.bakeDeadline) return;
        return QV = this.bake(eV, xV, JV, YV, UV), void 0 !== QV && yV.set(pV, QV), QV
      }
      bake(VV, eV, xV, JV, YV) {
        const UV = VV.vertexAttributes.find((VV => "position" === VV.kind)),
          yV = UV ? function(VV, eV, xV, JV) {
            let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const UV = VV => eV ? eV[xV + VV] : xV + VV,
              yV = VV => null !== YV && [0, 1, 2].some((eV => {
                const xV = UV(VV + eV);
                return xV >= YV[0] && xV < YV[1]
              })),
              pV = [1 / 0, 1 / 0, 1 / 0],
              QV = [-1 / 0, -1 / 0, -1 / 0];
            for (let jV = 0; jV + 2 < JV; jV += 3)
              if (!yV(jV))
                for (let eV = 0; eV < 3; eV++) {
                  const xV = UV(jV + eV);
                  for (let eV = 0; eV < 3; eV++) pV[eV] = Math.min(pV[eV], VV[3 * xV + eV]), QV[eV] = Math.max(QV[eV], VV[3 * xV + eV])
                }
            const nV = Math.max(QV[0] - pV[0], QV[1] - pV[1], QV[2] - pV[2]);
            if (!(nV > 0)) return null;
            const wV = nV / 64,
              ZV = [0, 0, 0],
              vV = [0, 0, 0],
              rV = [0, 0, 0];
            for (let jV = 0; jV < 3; jV++) ZV[jV] = Math.min(65, Math.ceil((QV[jV] - pV[jV]) / wV) + 1), vV[jV] = pV[jV] - wV / 2, rV[jV] = vV[jV] + ZV[jV] * wV;
            const kV = new Uint32Array(Math.ceil(ZV[0] * ZV[1] * ZV[2] / 32)),
              bV = new Float64Array(9),
              EV = [0, 0, 0],
              BV = [0, 0, 0];
            for (let jV = 0; jV + 2 < JV; jV += 3)
              if (!yV(jV)) {
                for (let eV = 0; eV < 3; eV++) {
                  const xV = UV(jV + eV);
                  for (let JV = 0; JV < 3; JV++) bV[3 * eV + JV] = VV[3 * xV + JV]
                }
                for (let VV = 0; VV < 3; VV++) {
                  const eV = Math.min(bV[VV], bV[3 + VV], bV[6 + VV]),
                    xV = Math.max(bV[VV], bV[3 + VV], bV[6 + VV]);
                  EV[VV] = Math.max(0, Math.floor((eV - vV[VV]) / wV - 1e-6)), BV[VV] = Math.min(ZV[VV] - 1, Math.floor((xV - vV[VV]) / wV + 1e-6))
                }
                for (let VV = EV[2]; VV <= BV[2]; VV++)
                  for (let eV = EV[1]; eV <= BV[1]; eV++)
                    for (let xV = EV[0]; xV <= BV[0]; xV++)
                      if (lx(bV, vV[0] + (xV + .5) * wV, vV[1] + (eV + .5) * wV, vV[2] + (VV + .5) * wV, wV / 2)) {
                        const JV = xV + ZV[0] * (eV + ZV[1] * VV);
                        kV[JV >>> 5] |= 1 << (31 & JV)
                      }
              } return {
              words: kV,
              lo: vV,
              hi: rV,
              cell: wV,
              dims: ZV
            }
          }((0, rQ.g)(UV, VV.vertexCount), eV ? VV.indexData : null, xV, JV, YV) : null;
        if (!yV) return null;
        const {
          words: pV,
          ...QV
        } = yV;
        if (this.gridTop + pV.length > Dx) return void(this.gridsFull = !0);
        const nV = this.gridTop;
        return this.gridTop += pV.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * nV, pV), {
          ...QV,
          at: nV
        }
      }
    }
    const bQ = Math.cos(1 * Math.PI / 180);

    function EQ(VV, eV) {
      return VV[0] * eV[0] + VV[1] * eV[1] + VV[2] * eV[2] < bQ
    }
    async function BQ(VV) {
      const {
        pixels: eV,
        width: xV,
        height: JV
      } = await Ve(VV), YV = new Uint8Array(xV * JV);
      for (let UV = 0; UV < YV.length; UV++) YV[UV] = eV[4 * UV + 3];
      return {
        width: xV,
        height: JV,
        alpha: YV
      }
    }
    class jQ {
      constructor(VV, eV) {
        this.device = VV, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(fx.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = VV.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = VV.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * vx,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = VV.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [xV, JV, YV] = fx.r;
        this.volume = VV.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: xV,
            height: JV,
            depthOrArrayLayers: YV
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = VV.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = VV.createBuffer({
          label: "sun-shadow-volume-work",
          size: fx.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = eV ? new kQ(VV) : null, this.entityStandIn = eV ? null : VV.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var VV;
        null === (VV = this.stopWindow) || void 0 === VV || VV.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var VV, eV;
        const xV = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || xV.push("Lite sun shadow volume pipeline compiling");
        const JV = null !== (VV = null === (eV = this.casters) || void 0 === eV ? void 0 : eV.planesLoading) && void 0 !== VV ? VV : 0;
        return JV > 0 && xV.push(`${JV} Lite sun shadow plane casters loading their textures`), xV
      }
      entries() {
        var VV, eV, xV, JV;
        const YV = Se.r;
        return [{
          binding: YV.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: YV.Ur,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: YV.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: YV.volume,
          resource: this.volumeView
        }, {
          binding: YV.sampler,
          resource: this.volumeSampler
        }, {
          binding: YV.entities,
          resource: {
            buffer: null !== (VV = null === (eV = this.entities) || void 0 === eV ? void 0 : eV.frameBuffer) && void 0 !== VV ? VV : this.entityStandIn
          }
        }, {
          binding: YV.entityGrids,
          resource: {
            buffer: null !== (xV = null === (JV = this.entities) || void 0 === JV ? void 0 : JV.gridBuffer) && void 0 !== xV ? xV : this.entityStandIn
          }
        }]
      }
      prepare(VV, eV, xV) {
        var JV;
        this.entitiesThisFrame = !1;
        const YV = null !== (JV = null === xV || void 0 === xV ? void 0 : xV.sunShadowReach()) && void 0 !== JV ? JV : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!xV || !YV.sunShadow && !YV.airShadow) return void(this.volumeHolds = null);
        if (VV.cZ.AZ !== de) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${VV.cZ.AZ}; everything is lit.`)));
        const UV = this.start(VV);
        this.casters.update(VV.jZ, VV.jZ.ar.length);
        const yV = VV.Vr;
        for (let vV = 0; vV < 3; vV++) this.eye[vV] = eV[vV] + yV[vV];
        const pV = (0, fx.u)(this.eye);
        this.staleNear = pV;
        const QV = VV.cZ.Cb;
        UV.update(this.eye, ((VV, eV, xV) => QV.ab(VV, eV, xV)), 1);
        const nV = (0, fx.s)(xV.ReV()),
          wV = UV.eyeChunk,
          ZV = this.uniformInts;
        for (let vV = 0; vV < 3; vV++) ZV[vV] = wV[vV], ZV[4 + vV] = pV[vV];
        this.entitiesThisFrame = null !== this.entities && YV.sunShadow, this.entitiesThisFrame && ax(this.uniformFloats, 8, eV, nV), null !== this.volumeHolds && (this.castersWritten || EQ(nV, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(pV, nV, wV)
      }
      markStale(VV) {
        const eV = this.staleNear,
          xV = de,
          JV = [VV.i * xV, VV.j * xV, VV.k * xV];
        for (let UV = 0; UV < 3; UV++)
          if (JV[UV] + xV <= eV[UV] - xV || JV[UV] >= eV[UV] + fx.r[UV] + xV) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const YV = this.stale;
        for (let UV = 0; UV < YV.length; UV += 4)
          if (YV[UV] === VV.i && YV[UV + 1] === VV.j && YV[UV + 2] === VV.k) return void(YV[UV + 3] = this.swept);
        if (16 === YV.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        YV.push(VV.i, VV.j, VV.k, this.swept)
      }
      writeStale() {
        const VV = this.swept,
          eV = this.stale;
        this.staleAll && VV - this.staleAllSwept >= fx.j && (this.staleAll = !1, eV.length = 0);
        let xV = 0;
        for (let YV = 0; YV < eV.length; YV += 4)
          if (VV - eV[YV + 3] < fx.j) {
            for (let VV = 0; VV < 4; VV++) eV[xV + VV] = eV[YV + VV];
            xV += 4
          } eV.length = xV;
        const JV = this.uniformInts;
        JV[3] = this.staleAll ? 5 : xV / 4;
        for (let YV = 0; YV < 4; YV++)
          for (let VV = 0; VV < 3; VV++) JV[16 + 4 * YV + VV] = 4 * YV < xV ? eV[4 * YV + VV] * de : 0
      }
      writeUniform() {
        const VV = this.uniformInts;
        let eV = this.uniformWritten;
        if (eV) {
          let xV = !0;
          for (let JV = 0; JV < VV.length && xV; JV++) xV = VV[JV] === eV[JV];
          if (xV) return
        }
        eV ??= this.uniformWritten = new Int32Array(VV.length), eV.set(VV), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(VV) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, VV)
      }
      computeVolume(VV, eV, xV) {
        const JV = this.buildVolumePass();
        if (!JV) return void(this.volumeHolds = null);
        const YV = (0, fx.t)(this.volumeHolds, VV);
        this.volumeHolds = VV;
        const UV = 1 === YV.length && YV[0].size.every(((VV, eV) => VV === fx.r[eV])),
          yV = this.sweptChunk,
          pV = this.sweptLight,
          QV = eV[0] !== pV[0] || eV[1] !== pV[1] || eV[2] !== pV[2],
          nV = xV[0] !== yV[0] || xV[1] !== yV[1] || xV[2] !== yV[2],
          wV = QV && EQ(eV, pV);
        if ((UV || this.written || nV || wV) && (this.fastLeft = fx.j), UV || this.written || QV || nV) {
          this.written = !1;
          for (let VV = 0; VV < 3; VV++) yV[VV] = xV[VV], pV[VV] = eV[VV];
          this.sweepLeft = UV ? 0 : fx.j
        }
        if (UV ? this.swept += fx.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, YV.push(...(0, fx.x)(VV, this.slice)), this.slice = (this.slice + 1) % fx.j, this.swept++), 0 === YV.length) return;
        const ZV = (0, fx.B)(this.workData, eV, YV);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const vV = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          rV = vV.beginComputePass({
            label: "sun-shadow-volume"
          });
        rV.setPipeline(JV.pipeline), rV.setBindGroup(Hx.group, JV.bindGroup), rV.dispatchWorkgroups(Math.ceil(ZV / fx.l)), rV.end(), this.device.queue.submit([vV.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const VV = Hx,
          eV = GPUShaderStage.COMPUTE,
          xV = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: VV.uniform,
              visibility: eV,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: VV.Ur,
              visibility: eV,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: VV.special,
              visibility: eV,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: VV.work,
              visibility: eV,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: VV.volume,
              visibility: eV,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          JV = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: xV,
            entries: [{
              binding: VV.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: VV.Ur,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: VV.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: VV.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: VV.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [xV]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: ux()
            }),
            entryPoint: "main"
          }
        }).then((VV => {
          this.volumePass = {
            pipeline: VV,
            bindGroup: JV
          }
        }), (VV => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(VV)}`)
        })), null
      }
      start(VV) {
        if (this.window) return this.window;
        const eV = (VV, eV) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * VV, eV)
        };
        this.casters = new QQ(((VV, xV) => {
          this.castersWritten = !0, eV(VV, xV)
        }), BQ);
        const xV = new vQ(this.casters, ((VV, eV) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * VV, eV)
        }), eV);
        xV.encoded = VV => {
          this.markStale(VV)
        };
        const JV = VV => {
          xV.chunkAdded(VV)
        };
        return VV.cZ.on("chunkAdded", JV), this.stopWindow = () => {
          VV.cZ.removeListener("chunkAdded", JV)
        }, this.window = xV, xV
      }
    }
    var qQ = xV(39890),
      tQ = xV(39892);
    const FQ = 0,
      TQ = 3,
      PQ = 4,
      AQ = 5;

    function NQ(VV, eV, xV, JV) {
      VV.drawOffset(eV, JV + FQ), eV[JV + TQ] = VV.drawTime(), xV[JV + PQ] = VV.ring.drawStart(), xV[JV + AQ] = VV.ring.drawCount()
    }
    const XQ = `\n${oJ}\n\nconst MAX_STOPS = ${tQ.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${tQ.e/4}>,\n\tcolor1: array<vec4f, ${tQ.e}>,\n\tcolor2: array<vec4f, ${tQ.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${tQ.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${tQ.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var MQ = xV(44494);
    class zQ {
      constructor(VV, eV, xV, JV) {
        this.device = VV, this.system = eV, this.frameIndex = xV, this.bindings = JV, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, MQ.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (VV, eV) => {
          this.device.queue.writeBuffer(this.ring, VV * tQ.f * 4, this.system.ring.records, VV * tQ.f, (eV - VV) * tQ.f)
        };
        const {
          name: YV
        } = eV;
        this.ring = VV.createBuffer({
          label: `particles-${YV}`,
          size: eV.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = VV.createBuffer({
          label: `particles-uniforms-${YV}`,
          size: 4 * tQ.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(VV) {
        const eV = (0, MQ.e)(this.system, this.uniformBits, VV);
        eV && (this.uniformBits = eV, this.device.queue.writeBuffer(this.uniforms, 0, eV))
      }
      bind() {
        const {
          system: VV
        } = this, eV = this.texture;
        (0, MQ.k)(VV, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${VV.name}`,
          size: [tQ.j, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * tQ.j
        }, [tQ.j, 1]));
        const xV = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === eV.view && this.boundSampler === eV.sampler && this.boundRamp === xV || (this.boundView = eV.view, this.boundSampler = eV.sampler, this.boundRamp = xV, this.bindGroup = this.device.createBindGroup({
          label: `particles-${VV.name}`,
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
            resource: eV.sampler
          }, {
            binding: 3,
            resource: eV.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: xV
          }]
        }))
      }
      destroy() {
        var VV;
        this.ring.destroy(), this.uniforms.destroy(), null === (VV = this.ramp) || void 0 === VV || VV.destroy()
      }
    }
    class GQ {
      constructor(VV, eV) {
        this.device = VV, this.resources = eV, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Re.b)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (VV, eV) => (this.bindTarget(eV), {
            renderable: this.renderable,
            pipeline: ze(this.device, eV),
            draw: VV => eV === this.preparedTarget ? this.draw(VV) : 0
          })
        }
      }
      rebind(VV) {
        this.device = VV, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [eV, xV] of this.systems) {
          const JV = new zQ(VV, eV, xV.frameIndex, this.bindings),
            YV = eV.ring.drawCount();
          YV > 0 && JV.upload(0, YV), this.systems.set(eV, JV)
        }
      }
      build() {
        const {
          device: VV
        } = this, eV = VV.createBindGroupLayout({
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
        this.frameLayout = VV.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = VV.createPipelineLayout({
          bindGroupLayouts: [Pe(VV), eV, this.frameLayout]
        }), this.module = VV.createShaderModule({
          label: "particles",
          code: XQ
        });
        const xV = VV.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        VV.queue.writeTexture({
          texture: xV
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: eV,
          rampSampler: VV.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: xV.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get zUV() {
        return this.systems.size
      }
      reset() {
        for (const VV of this.systems.keys()) VV.reset()
      }
      describePendingWork() {
        return (0, qQ.g)(this.systems.keys(), "Lite")
      }
      fC(VV, eV) {
        const xV = new qQ.d(VV, eV, this);
        return this.systems.set(xV, new zQ(this.device, xV, this.allocateFrameIndex(), this.bindings)), xV
      }
      teV(VV, eV) {
        for (const xV of this.systems.keys()) xV.teV(VV, eV)
      }
      canDraw(VV) {
        const eV = this.systems.get(VV),
          xV = VV.texture ? this.resources.boundTexture(VV.texture) : null;
        if (!eV || !xV || !this.targetPipelines) return !1;
        if (eV.texture = xV, eV.pipelines.length = 0, !Ye(VV.blendMode)) return this.warnOnce(`blend:${VV.blendMode}`, `particle blend mode ${VV.blendMode} is not drawn (${VV.name})`), !0;
        const JV = (0, KV.l)(VV.blendMode);
        for (const YV of JV) {
          const VV = this.pipelineFor(YV);
          if (!1 === VV) return eV.pipelines.length = 0, !0;
          VV && eV.pipelines.push(VV)
        }
        return eV.pipelines.length === JV.length
      }
      disposeStopped(VV) {
        VV.dispose()
      }
      remove(VV) {
        const eV = this.systems.get(VV);
        eV && (this.systems.delete(VV), eV.destroy(), this.freeFrameIndices.push(eV.frameIndex))
      }
      prepare(VV) {
        const eV = VV.animationRatio || 1;
        Ge(this.renderable._worldCenter, VV, Ne), this.preparedTarget = this.target, this.draws.length = 0;
        let xV = 0;
        for (const JV of this.systems.values()) {
          const VV = JV.system;
          if (!VV.animateIfActive(eV)) continue;
          if (VV.ring.takeUploads(JV.upload), !VV.hasLiveParticles() || 0 === JV.pipelines.length) continue;
          JV.writeUniforms(this.warnOnce), JV.bind();
          const YV = 64 * JV.frameIndex;
          JV.count = VV.ring.drawCount(), NQ(VV, this.frameData, this.frameBits, YV), xV = Math.max(xV, YV + 64), this.draws.push(JV)
        }
        xV > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, xV)
      }
      draw(VV) {
        let eV = 0,
          xV = null;
        for (const JV of this.draws) {
          VV.setBindGroup(1, JV.bindGroup), VV.setBindGroup(2, this.frameBindGroup, [256 * JV.frameIndex]);
          for (const YV of JV.pipelines) YV !== xV && (VV.setPipeline(YV), xV = YV), VV.draw(4, JV.count), eV++
        }
        return eV
      }
      bindTarget(VV) {
        this.target = VV;
        const eV = `${VV._colorFormat}|${VV._depthStencilFormat}|${VV._depthCompare}|${VV._sampleCount}`;
        let xV = this.pipelines.get(eV);
        xV || (xV = new Map, this.pipelines.set(eV, xV)), this.targetPipelines = xV
      }
      pipelineFor(VV) {
        var eV;
        const xV = this.targetPipelines,
          JV = xV.get(VV);
        if (void 0 !== JV) return JV;
        xV.set(VV, null);
        const YV = this.target,
          UV = VV === KV.e,
          yV = null !== (eV = YV._depthCompare) && void 0 !== eV ? eV : Ae,
          {
            device: pV
          } = this;
        return pV.createRenderPipelineAsync({
          label: `particles-${VV}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: je({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: UV ? 1 : 0
            }
          }, YV, Ue((0, KV.i)(VV))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: YV._depthStencilFormat ? {
            format: YV._depthStencilFormat,
            depthCompare: yV,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: YV._sampleCount
          }
        }).then((eV => {
          xV.set(VV, eV)
        }), (eV => {
          xV.set(VV, !1), console.error("Lite particle pipeline failed", eV), we(pV, "particles", `blend-${VV}`, eV)
        })), null
      }
      allocateFrameIndex() {
        const VV = this.freeFrameIndices.pop();
        if (void 0 !== VV) return VV;
        const eV = this.nextFrameIndex++;
        if (64 * (eV + 1) > this.frameData.length) {
          const VV = new Float32Array(2 * this.frameData.length);
          VV.set(this.frameData), this.frameData = VV, this.frameBits = new Uint32Array(VV.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return eV
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
    class WQ {
      constructor(VV, eV, xV, JV, YV) {
        this.lite = VV, this.canvas = eV, this.info = xV, this.resources = YV, this.zYV = !1, this.needPOTTextures = !1, this.AVV = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = eV.width, this.renderHeight = eV.height, this.caps = {
          maxTextureSize: JV.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: JV.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(VV) {
        this.lite = VV, (0, hV.m)(VV, this.renderWidth, this.renderHeight)
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
      setSize(VV, eV) {
        if (this.renderWidth === VV && this.renderHeight === eV) return !1;
        const xV = this.renderWidth,
          JV = this.renderHeight;
        this.renderWidth = VV, this.renderHeight = eV;
        const YV = this.lite;
        if (null === YV) return !0;
        try {
          (0, hV.m)(YV, VV, eV)
        } catch (UV) {
          if (UV instanceof DOMException && "InvalidStateError" === UV.name) {
            this.renderWidth = xV, this.renderHeight = JV;
            try {
              (0, hV.m)(YV, xV, JV)
            } catch {
              this.canvas.width = xV, this.canvas.height = JV
            }
            return console.warn("WebGPU could not allocate render targets for resize", VV, eV, UV.message), !1
          }
          throw UV
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
      pT() {
        const VV = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : VV - this.lastFrameTime, this.lastFrameTime = VV
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(VV, eV) {
        const xV = document.createElement("canvas");
        return xV.width = VV, xV.height = eV, xV
      }
      MVV(VV, eV) {
        var xV;
        return null !== (xV = this.resources.MVV.get(VV)) && void 0 !== xV ? xV : new ve(this.resources, VV, eV)
      }
      atlasArrays(VV) {
        return this.resources.atlasArrays(VV)
      }
    }
    class RQ {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(VV) {
        this.fov = VV.fov, this.nearPlane = VV.near, this.farPlane = VV.far;
        const eV = VV.worldMatrix;
        for (let xV = 0; xV < 16; xV++)
          if (this.worldMatrix[xV] !== eV[xV]) return this.worldMatrix.set(eV), void this.worldMatrixVersion++
      }
    }
    class gQ {
      constructor(VV, eV, xV, JV) {
        this.canvas = eV, this.options = xV, this.ZJV = void 0, this.backendName = "WebGPU (Lite)", this.uVV = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new RQ, this.lastFrameTime = 0, this.engine = void 0, this.yE = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.gZ = null, this.firstTerrain = null, this.trialFrames = 0, this.install(VV);
        const {
          resources: YV,
          meshes: UV
        } = VV;
        this.resources = YV, this.particles = VV.particles, this.ZJV = new WQ(VV.engine, eV, JV, VV.device.limits, YV), (0, MV.E)({
          hn: VV => {
            RV(VV) && YV.textureSlot(VV)
          },
          loaded: VV => RV(VV) ? YV.textureLoaded(VV) : null,
          canvasUpdated: (VV, eV, xV) => {
            RV(VV) && YV.canvasUpdated(VV, eV, xV)
          }
        }), this.uVV = UV.uVV, this.modelMeshes = UV.modelMeshes
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
      install(VV) {
        this.engine = VV.engine, this.yE = VV.yE, this.sceneTask = VV.sceneTask, this.device = VV.device, this.liteTerrain = VV.terrain, this.meshes = VV.meshes, this.sunShadow = VV.sunShadow;
        const eV = new fV(VV.device.lost);
        this.refusals = eV, eV.deviceLost.then((() => {
          var eV;
          eV = VV.device, Qe.add(eV)
        })), VV.yE.camera = this.camera
      }
      async rebuild() {
        var VV, eV, xV, JV, YV;
        const UV = await aQ();
        this.halted = !0, this.liteTerrain.retire(), null === (VV = this.sunShadow) || void 0 === VV || VV.dispose(), this.ZJV.detach();
        try {
          (0, lV.d)(this.engine)
        } catch (wV) {
          console.warn("Lite: disposing the lost device's engine threw", wV)
        }
        const yV = {
            width: this.ZJV.renderWidth,
            height: this.ZJV.renderHeight
          },
          pV = await oQ(this.canvas, this.options, yV, UV),
          QV = te(pV),
          nV = cQ(QV);
        try {
          this.resources.rebind(pV, QV), this.particles.rebind(QV), this.uVV.dropSteady();
          const VV = {
              resources: this.resources,
              particles: this.particles,
              uVV: this.uVV,
              modelMeshes: this.modelMeshes
            },
            eV = await hQ(pV, QV, this.options, VV),
            xV = nV();
          if (null !== xV) throw new Error(`WebGPU device lost while Lite was rebuilding (${xV.reason}): ${xV.message}`);
          const {
            r: JV,
            g: YV,
            b: UV
          } = this.yE.clearColor;
          this.install(eV), this.setClearColour(JV, YV, UV), this.ZJV.rebind(pV)
        } catch (wV) {
          throw QV.destroy(), wV
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (eV = this.gZ) || void 0 === eV || eV.resize(), null === (xV = this.gZ) || void 0 === xV || null === (JV = xV.iv) || void 0 === JV || null === (YV = JV.wT) || void 0 === YV || YV.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((VV, eV) => {
          this.firstTerrain = {
            drawn: VV,
            failed: eV
          }
        }))
      }
      get castsEntitySunShadows() {
        var VV, eV;
        return null !== (VV = null === (eV = this.sunShadow) || void 0 === eV ? void 0 : eV.tracesEntities) && void 0 !== VV && VV
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(VV) {
        this.gZ = VV, this.modelMeshes.attach(VV.model, VV.sceneMirror);
        const eV = VV.yE;
        this.setClearColour(eV.clearColor.r, eV.clearColor.g, eV.clearColor.b), eV.draw = () => {
          this.drawFrame(VV, eV)
        }
      }
      get zZ() {
        return !this.refusals.lost && !this.halted
      }
      render(VV) {
        if (this.zZ) {
          try {
            this.ZJV.pT(), VV.yE.render()
          } catch (eV) {
            throw this.refusals.frameFailed(eV), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(eV), this.firstTerrain = null), eV
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var VV, eV, xV, JV;
        const YV = [...this.particles.describePendingWork(), ...null !== (VV = null === (eV = this.sunShadow) || void 0 === eV ? void 0 : eV.describePendingWork()) && void 0 !== VV ? VV : []],
          UV = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (xV = this.terrain.sceneDepth) && void 0 !== xV && xV.compiling ? 1 : 0) + (null !== (JV = this.terrain.shadowMask) && void 0 !== JV && JV.compiling ? 1 : 0);
        UV > 0 && YV.push(`${UV} Lite pipelines compiling`);
        const yV = this.terrain.buffersAwaitingVerdict;
        yV > 0 && YV.push(`${yV} Lite terrain buffers awaiting their out-of-memory verdict`);
        const pV = this.resources.texturesLoading;
        return pV > 0 && YV.push(`${pV} Lite textures loading`), YV
      }
      prepareTexture(VV) {
        return null !== this.resources.boundTexture(VV) || this.resources.textureFailed(VV)
      }
      drawFrame(VV, eV) {
        var xV, JV, YV, UV, yV, pV;
        const QV = Ep(VV);
        this.camera.copyFromView(QV), this.setClearColour(QV.clearColour[0], QV.clearColour[1], QV.clearColour[2]), null === (xV = this.sunShadow) || void 0 === xV || xV.prepare(VV.iv, QV.eye, null !== (JV = VV.iv.Xk) && void 0 !== JV ? JV : null), this.terrain.prepare(VV, QV), null === (YV = this.terrain.sceneDepth) || void 0 === YV || YV.setPlanes(QV.near, QV.far), null === (UV = this.terrain.shadowMask) || void 0 === UV || UV.prepare(QV), ep(this.sceneTask), this.meshes.prepare(eV, QV, VV.model.earthSky, null !== (yV = VV.iv.Xk) && void 0 !== yV ? yV : null), this.particles.prepare(QV);
        const nV = performance.now();
        this.resources.flushUploads(), null === (pV = this.sunShadow) || void 0 === pV || pV.traceEntities(this.meshes);
        try {
          (0, hV.l)(this.engine, this.lastFrameTime > 0 ? nV - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = nV, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(nV), this.firstTerrain = null)
      }
      setClearColour(VV, eV, xV) {
        const JV = this.yE.clearColor;
        JV.r = VV, JV.g = eV, JV.b = xV, JV.a = 1
      }
    }

    function DQ(VV) {
      const eV = {};
      for (const xV in VV.limits) {
        const JV = VV.limits[xV];
        "number" === typeof JV && (eV[xV] = JV)
      }
      return eV
    }
    const iQ = "WebGPU device lost while Lite was starting";
    async function CQ(VV, eV) {
      const xV = await aQ(),
        JV = xV.info,
        YV = {
          vendor: (null === JV || void 0 === JV ? void 0 : JV.vendor) || "unknown vendor",
          renderer: (null === JV || void 0 === JV ? void 0 : JV.architecture) || "unknown renderer",
          version: (null === JV || void 0 === JV ? void 0 : JV.description) || "unknown version"
        };
      VV.style.background = "black";
      const UV = await oQ(VV, eV, eV.bufferSize, xV),
        yV = te(UV),
        pV = cQ(yV);
      try {
        const xV = new gQ(await hQ(UV, yV, eV, null), VV, eV, YV),
          JV = pV();
        if (null !== JV) {
          const {
            reason: VV,
            message: eV
          } = JV;
          throw Object.assign(new Error(`${iQ} (${VV}): ${eV}`), {
            fallbackReason: iQ
          })
        }
        return xV
      } catch (QV) {
        throw yV.destroy(), null === pV() ? QV : (0, Vp.d)(QV, "device")
      }
    }
    async function aQ() {
      const VV = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!VV) throw (0, Vp.d)(new Error("No WebGPU adapter"), "no_adapter");
      return VV
    }
    async function oQ(VV, eV, xV, JV) {
      let YV;
      try {
        YV = await (0, hV.e)(VV, {
          msaaSamples: eV.fJV ? 4 : 1,
          requiredLimits: DQ(JV),
          alphaMode: "premultiplied"
        })
      } catch (yV) {
        throw (0, Vp.d)(yV, "#47" === (null === (UV = yV) || void 0 === UV ? void 0 : UV.message) ? "no_adapter" : "device")
      }
      var UV;
      return null !== xV && (0, hV.m)(YV, xV.width, xV.height), YV
    }

    function cQ(VV) {
      let eV = null;
      return VV.lost.then((VV => {
        eV = VV, console.error(`WebGPU device lost (${VV.reason}): ${VV.message}`)
      })), () => eV
    }
    async function hQ(VV, eV, xV, JV) {
      var YV, UV;
      let {
        sceneDepth: yV,
        sunShadow: pV
      } = xV;
      const QV = (0, LV.d)(VV),
        nV = null !== (YV = null === JV || void 0 === JV ? void 0 : JV.resources) && void 0 !== YV ? YV : new Iy(VV, eV),
        wV = new VQ(eV),
        ZV = new gy(eV, nV, (VV => function(VV, eV) {
          for (const JV of Fe(VV)) {
            var xV;
            if (JV._targetSignature === eV) return null !== (xV = JV._sceneBG) && void 0 !== xV ? xV : null
          }
          return null
        }(QV, VV)), null === JV || void 0 === JV ? void 0 : JV.uVV, null === JV || void 0 === JV ? void 0 : JV.modelMeshes),
        vV = null !== (UV = null === JV || void 0 === JV ? void 0 : JV.particles) && void 0 !== UV ? UV : new GQ(eV, nV);
      for (const bV of function(VV, eV, xV) {
          return [eV.opaqueRenderable, VV.opaqueRenderable, VV.skyLastRenderable, xV.renderable, eV.transparentRenderable, VV.transparentRenderable, VV.frontRenderable]
        }(ZV, wV, vV)) qe(QV, bV);
      const rV = function(VV) {
        for (const eV of Fe(VV))
          if ("yE" === eV.name) return eV;
        throw new Error("Lite: the scene has no render task named scene")
      }(QV);
      yV && wV.installSceneDepth(rV, VV);
      const kV = pV ? new jQ(eV, pV.entities) : null;
      return wV.sunShadow = kV, kV && null !== pV && void 0 !== pV && pV.entities && (wV.shadowMask = new Rp(eV, rV, VV, wV)), ZV.sunShadow = kV, await (0, LV.h)(QV), {
        engine: VV,
        yE: QV,
        sceneTask: rV,
        device: eV,
        terrain: wV,
        meshes: ZV,
        sunShadow: kV,
        resources: nV,
        particles: vV
      }
    }
  },
  41983: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => rV,
      E: () => kV,
      d: () => YV,
      e: () => JV,
      g: () => vV,
      j: () => wV,
      n: () => EV,
      o: () => UV,
      r: () => pV,
      u: () => QV,
      y: () => yV,
      z: () => bV
    });
    const JV = 3,
      YV = 0,
      UV = 1,
      yV = 2,
      pV = {
        uniform: 3,
        Ur: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      QV = 10,
      nV = "BloxdPackInputs",
      wV = "bloxdPackInputs",
      ZV = [{
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
      vV = 80;

    function rV() {
      const VV = ZV.map((VV => {
        let {
          name: eV,
          type: xV
        } = VV;
        return `    ${eV}: ${xV},\n`
      })).join("");
      return `struct ${nV} {\n${VV}}\n@group(${JV}) @binding(${YV}) var<uniform> ${wV}: ${nV};\n`
    }

    function kV(VV, eV) {
      const xV = new DataView(VV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, vV),
        [JV, YV, UV, yV, pV, QV] = ZV;
      xV.setFloat32(JV.offset, eV.seconds, !0), xV.setUint32(YV.offset, eV.lit ? 1 : 0, !0);
      for (let nV = 0; nV < 3; nV++) xV.setInt32(UV.offset + 4 * nV, eV.renderOffset[nV], !0), xV.setFloat32(yV.offset + 4 * nV, eV.ReV[nV], !0), xV.setFloat32(pV.offset + 4 * nV, eV.eyePosition[nV], !0), xV.setFloat32(QV.offset + 4 * nV, eV.shadowDirection[nV], !0)
    }

    function bV(VV) {
      const eV = new Uint32Array(Math.max(1, VV.length));
      return VV.forEach(((VV, xV) => {
        let {
          id: JV,
          rotation: YV
        } = VV;
        eV[xV] = 65535 & JV | (3 & YV) << 16
      })), eV
    }
    const EV = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);