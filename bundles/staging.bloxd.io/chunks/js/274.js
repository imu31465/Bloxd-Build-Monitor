export const id = 274;
export const ids = [274];
export const modules = {
  41743: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => cT,
      h: () => nT,
      j: () => gT,
      n: () => kT
    });
    var WT = mT(37364),
      zT = mT(38824),
      MT = mT(38815);

    function gT(TT, UT, mT, WT) {
      const zT = MT.q;
      UT.fill(0), TT.gravity.toArray(UT, zT.gravity), TT.colorDead.toArray(UT, zT.colorDead), mT[zT.ramp] = TT.useRampGradients ? 1 : 0;
      const gT = TT.getColorGradients(),
        nT = LT(TT, gT, "colour", WT);
      mT[zT.colorCount] = nT;
      for (let MT = 0; MT < nT; MT++) {
        var HT;
        const TT = gT[pT(gT, MT)];
        UT[zT.colorPositions + MT] = TT.gradient, TT.color1.toArray(UT, zT.color1 + 4 * MT), (null !== (HT = TT.color2) && void 0 !== HT ? HT : TT.color1).toArray(UT, zT.color2 + 4 * MT)
      }
      const kT = TT.getVelocityGradients(),
        jT = LT(TT, kT, "Tc", WT);
      mT[zT.velocityCount] = jT;
      for (let MT = 0; MT < jT; MT++) fT(UT, zT.Tc + 4 * MT, kT[pT(kT, MT)]);
      const lT = TT.useRampGradients ? TT.getColorRemapGradients() : null,
        BT = LT(TT, lT, "colour remap", WT);
      mT[zT.remapCount] = BT;
      for (let MT = 0; MT < BT; MT++) fT(UT, zT.remap + 4 * MT, lT[pT(lT, MT)])
    }

    function nT() {
      return {
        key: [],
        texels: new Uint8Array(4 * MT.i)
      }
    }
    const HT = [];

    function kT(TT, UT) {
      return jT(TT, HT), !vT(HT, UT.key) && (UT.key.length = 0, UT.key.push(...HT), UT.key.length > 0 && function(TT, UT) {
        for (let mT = 0; mT < MT.i; mT++) zT.j.GetCurrentGradient(mT / MT.i, TT, ((TT, UT, mT) => {
          WT.Color3.LerpToRef(TT.color, UT.color, mT, lT)
        })), UT[4 * mT] = 255 * lT.r, UT[4 * mT + 1] = 255 * lT.g, UT[4 * mT + 2] = 255 * lT.b, UT[4 * mT + 3] = 255
      }(TT.getRampGradients(), UT.texels), !0)
    }

    function jT(TT, UT) {
      UT.length = 0;
      const mT = TT.useRampGradients ? TT.getRampGradients() : null;
      if (null !== mT && void 0 !== mT && mT.length) {
        UT.push(mT.length);
        for (const TT of mT) UT.push(TT.gradient, TT.color.r, TT.color.g, TT.color.b)
      }
    }
    const lT = new WT.Color3;

    function LT(TT, UT, mT, WT) {
      return UT ? UT.length > MT.b ? (WT(`particleStops:${mT}`, `GPU particles use the first 2 and last ${MT.b-2} of more than ${MT.b} ${mT} gradient stops (${TT.name})`), MT.b) : UT.length : 0
    }

    function pT(TT, UT) {
      return UT < 2 || TT.length <= MT.b ? UT : TT.length - MT.b + UT
    }
    const BT = new Float32Array(MT.n),
      ZT = new Uint32Array(BT.buffer);

    function cT(TT, UT, mT) {
      return gT(TT, BT, ZT, mT), UT && vT(ZT, UT) ? null : ZT.slice()
    }

    function vT(TT, UT) {
      if (TT.length !== UT.length) return !1;
      for (let mT = 0; mT < TT.length; mT++)
        if (TT[mT] !== UT[mT]) return !1;
      return !0
    }

    function fT(TT, UT, mT) {
      var WT;
      TT[UT] = mT.gradient, TT[UT + 1] = mT.factor1, TT[UT + 2] = null !== (WT = mT.factor2) && void 0 !== WT ? WT : mT.factor1
    }
  },
  41300: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      const WT = UT * UT * 4,
        zT = TT[0].layers,
        MT = zT * (TT.length - 1) + TT[TT.length - 1].layers,
        gT = new Uint8Array(MT * WT);
      TT.forEach(((UT, mT) => {
        const MT = mT + 1 < TT.length ? Math.min(UT.layers, zT) : UT.layers;
        gT.set(new Uint8Array(UT.pixels.buffer, UT.pixels.byteOffset, MT * WT), mT * zT * WT)
      }));
      const nT = Math.max(1, Math.min(MT, mT || MT));
      if (nT === MT) return [{
        pixels: gT,
        layers: MT
      }];
      const HT = [];
      for (let kT = 0; kT < MT; kT += nT) {
        const TT = Math.min(MT, kT + nT);
        HT.push({
          pixels: gT.slice(kT * WT, TT * WT),
          layers: TT - kT
        })
      }
      return HT
    }
    mT.d(UT, {
      e: () => WT,
      h: () => MT
    });
    const zT = new WeakMap;

    function MT(TT, UT, mT) {
      var WT, MT;
      const gT = null !== (WT = zT.get(TT)) && void 0 !== WT ? WT : new Map;
      zT.set(TT, gT);
      const nT = null !== (MT = gT.get(UT[0])) && void 0 !== MT ? MT : [];
      gT.set(UT[0], nT);
      const HT = nT.find((TT => TT.urls.length === UT.length && TT.urls.every(((TT, mT) => TT === UT[mT]))));
      if (HT) return HT.built;
      const kT = {
        urls: [...UT],
        built: mT()
      };
      return nT.push(kT), kT.built.catch((() => {
        nT.splice(nT.indexOf(kT), 1)
      })), kT.built
    }
  },
  41737: (TT, UT, mT) => {
    function WT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const UT = new Set;
      return (mT, WT) => {
        UT.has(mT) || (UT.add(mT), console.warn(TT + WT))
      }
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  41779: (TT, UT, mT) => {
    mT.d(UT, {
      createLiteRendererAsync: () => VH,
      liteBabylonBackend: () => VT,
      setPipelineFailureHook: () => nU
    });
    var WT = mT(37364),
      zT = mT(37733),
      MT = mT(38036),
      gT = mT(37312),
      nT = mT(38054);
    class HT extends nT.c {
      constructor() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        super(...UT), this.color = new WT.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: UT[0].KF().getUniqueId(),
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
          needAlphaBlendingForMesh: TT => TT.visibility < 1 || TT.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const kT = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      jT = TT => 1 << kT.indexOf(TT),
      lT = jT("VERTEXCOLOR"),
      LT = jT("INSTANCES"),
      pT = jT("THIN_INSTANCES"),
      BT = jT("INSTANCESCOLOR"),
      ZT = jT("FOG"),
      cT = jT("LITE_FRONT_LAYER");

    function vT(TT, UT, mT, WT) {
      let zT = 0;
      return TT.isVerticesDataPresent("color") && (zT |= lT), "none" !== UT && (zT |= LT), "thin" === UT && (zT |= pT, TT.isVerticesDataPresent("instanceColor") && (zT |= BT)), WT.fogEnabled && TT.applyFog && 0 !== WT.fogMode && (zT |= ZT), mT >= 1 && (zT |= cT), zT
    }

    function fT(TT, UT) {
      TT.updateColor4("color", UT.color, UT.alpha)
    }
    var qT = mT(37974),
      iT = mT(37534),
      bT = mT(37397),
      OT = mT(37288),
      eT = mT(37959),
      YT = mT(37972),
      JT = mT(37302),
      xT = mT(37307),
      dT = mT(37321);
    const wT = OT.e.GLSL;
    class tT {
      constructor(TT, UT) {
        this.name = TT, this.XZ = UT, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.SF = {
          addOnce: TT => {
            this.disposers.push(TT)
          }
        }, this.uniqueId = UT.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      KF() {
        return this.XZ
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
      needAlphaBlendingForMesh(TT) {
        return (0, JT.H)(this.model, TT.visibility, TT.hasVertexAlpha)
      }
      needAlphaTestingForMesh(TT) {
        return (0, JT.K)(this.model, TT.visibility, TT.hasVertexAlpha)
      }
      dispose() {
        (0, iT.g)(this);
        for (const TT of this.disposers.splice(0)) TT()
      }
      get model() {
        return (0, JT.R)(this)
      }
    }
    const aT = new WeakSet;

    function yT(TT) {
      return aT.has(TT)
    }

    function XT(TT) {
      aT.add(TT)
    }
    const IT = {
      create: (TT, UT) => ((0, bT.o)(TT, new tT(TT.name, UT)), xT.b.defines()),
      write: () => {},
      addFeature: (TT, UT) => {
        const mT = TT.mirror;
        UT.feature === YT.k && UT.state.dirLightCount > 0 && (TT.disableLighting = !0, (0, JT.Q)(TT)), "BLOXD_LIGHTING" in UT.defines && (0, iT.e)(mT), UT.feature === eT.i && ((0, qT.n)(UT.state, wT), function(TT, UT) {
          const mT = TT.KF().eB();
          setTimeout((() => {
            mT.atlasArrays(UT.sources).then((mT => {
              (0, qT.d)(TT, UT, mT.map((TT => ({
                atlas: TT,
                layers: TT.layers
              }))), mT[0].layerWidth, wT)
            })).catch((TT => {
              console.error("Failed to build the atlas's texture arrays", TT)
            }))
          }))
        }(mT, UT.state))
      },
      texture: (TT, UT, mT) => {
        let {
          data: WT,
          sets: zT
        } = mT;
        var MT;
        (XT(TT), WT) && (TT.uvSet = null !== (MT = null === zT || void 0 === zT ? void 0 : zT.coordinatesIndex) && void 0 !== MT ? MT : 0, (0, bT.eb)(TT.matrix, null !== zT && void 0 !== zT ? zT : {}))
      },
      cube: XT,
      canvas: (TT, UT, mT) => {
        let {
          width: WT,
          height: zT,
          mipmaps: MT,
          samplingMode: gT = dT.k.trilinear,
          hasAlpha: nT = !1,
          wrap: HT = dT.e.clamp
        } = mT;
        const kT = TT.eB().createCanvas(WT, zT),
          jT = new dT.o("2d", {
            kind: "canvas",
            width: WT,
            height: zT,
            canvas: kT
          }, {
            samplingMode: gT,
            wrapU: HT,
            wrapV: HT,
            noMipmap: !MT,
            invertY: !0
          });
        return jT.hasAlpha = nT, XT(jT), jT
      }
    };
    var QT = mT(37552),
      sT = mT(37219);
    class FT {
      constructor(TT, UT, mT) {
        this.engine = TT, this.clearColor = UT, this.ambientColor = mT, this.onBeforeRenderObservable = new sT.d, this.onBeforeCameraRenderObservable = new sT.d, this.onAfterRenderObservable = new sT.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.EY = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      eB() {
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
      addPendingData(TT) {
        this.pending.push(TT)
      }
      removePendingData(TT) {
        const UT = this.pending.indexOf(TT); - 1 !== UT && this.pending.splice(UT, 1)
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

    function PT() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const VT = {
      ymT: PT,
      RWT: (TT, UT) => {
        const mT = new FT(TT.engine, WT.e.FromArray(UT.clearColor), WT.Color3.FromArray(UT.ambientColor));
        (0, gT.d)(IT, mT), TT.XZ = mT,
          function(TT, UT) {
            const mT = Object.assign((0, QT.g)(TT, "camera"), {
              layerMask: 268435455
            });
            TT.model.nodes.setWorldSource(mT.row, TT.model.view.worldMatrix), TT.camera = UT.activeCamera = mT
          }(TT, mT), (0, zT.g)(TT, ((TT, UT, mT) => (0, MT.g)(TT, UT, mT, nT.c)))
      },
      hWT: () => {},
      setBabylonFog: () => {},
      MzT: PT,
      kzT: () => {},
      linesFromArrays: (TT, UT, mT) => (0, MT.g)(TT, UT, mT, HT),
      IZ: () => {},
      HzT: PT
    };
    var uT = mT(41835),
      CT = mT(41847),
      rT = mT(41853);
    class KT {
      constructor(TT) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const UT = new Promise((TT => {
          this.refused = TT
        }));
        this.deviceLost = Promise.race([TT, UT]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(TT) {
        (function(TT) {
          const {
            name: UT,
            message: mT
          } = null !== TT && void 0 !== TT ? TT : {};
          return "InvalidStateError" === UT && "string" === typeof mT && mT.startsWith("GPUDevice.")
        })(TT) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: TT.message,
          framesRefused: !0
        }))
      }
    }
    var ST = mT(41300),
      GT = mT(38836);

    function NT(TT) {
      return Math.max(4, 4 * Math.ceil(TT / 4))
    }

    function ET(TT, UT, mT, WT) {
      const zT = TT.createBuffer({
        label: WT,
        size: NT(UT.byteLength),
        usage: mT,
        mappedAtCreation: !0
      });
      return new Uint8Array(zT.getMappedRange(), 0, UT.byteLength).set(new Uint8Array(UT.buffer, UT.byteOffset, UT.byteLength)), zT.unmap(), zT
    }

    function hT(TT, UT) {
      return Math.floor(Math.log2(Math.max(TT, UT))) + 1
    }

    function DT(TT, UT, mT, WT, zT, MT) {
      const gT = TT.createTexture({
          label: MT,
          size: {
            width: mT,
            height: WT,
            depthOrArrayLayers: zT
          },
          format: "rgba8unorm",
          mipLevelCount: hT(mT, WT),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        nT = (UT, mT, WT, MT) => {
          TT.queue.writeTexture({
            texture: gT,
            mipLevel: mT
          }, UT, {
            bytesPerRow: 4 * WT,
            rowsPerImage: MT
          }, {
            width: WT,
            height: MT,
            depthOrArrayLayers: zT
          })
        };
      nT(UT, 0, mT, WT);
      let HT = 1;
      for (const kT of function*(TT, UT, mT, WT) {
          let zT = TT,
            MT = UT,
            gT = mT;
          for (; MT > 1 || gT > 1;) {
            const TT = Math.max(1, MT >> 1),
              UT = Math.max(1, gT >> 1),
              mT = new Uint8Array(TT * UT * WT * 4),
              nT = 4 * MT;
            let HT = 0;
            for (let kT = 0; kT < WT; kT++) {
              const WT = kT * nT * gT;
              for (let kT = 0; kT < UT; kT++) {
                const UT = WT + Math.min(2 * kT, gT - 1) * nT,
                  jT = WT + Math.min(2 * kT + 1, gT - 1) * nT;
                for (let WT = 0; WT < TT; WT++) {
                  const TT = 4 * Math.min(2 * WT, MT - 1),
                    gT = 4 * Math.min(2 * WT + 1, MT - 1);
                  for (let WT = 0; WT < 4; WT++) mT[HT++] = zT[UT + TT + WT] + zT[UT + gT + WT] + zT[jT + TT + WT] + zT[jT + gT + WT] + 2 >> 2
                }
              }
            }
            yield {
              data: mT,
              width: TT,
              height: UT
            }, zT = mT, MT = TT, gT = UT
          }
        }(UT, mT, WT, zT)) nT(kT.data, HT++, kT.width, kT.height);
      return gT
    }
    const oT = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function AT(TT) {
      if (TT.startsWith("data:")) {
        const UT = TT.search(/[;,]/);
        return `data:${UT>5?TT.slice(5,UT):""} URL of ${TT.length} characters`
      }
      return TT.length > 80 ? `${TT.slice(0,80)}...` : TT
    }
    async function RT(TT) {
      const UT = await fetch(TT);
      if (!UT.ok) throw new Error(`${AT(TT)}: ${UT.status} ${UT.statusText}`);
      return createImageBitmap(await UT.blob(), oT)
    }
    async function TU(TT) {
      const UT = await RT(TT),
        mT = new OffscreenCanvas(UT.width, UT.height),
        WT = mT.getContext("2d", {
          willReadFrequently: !0
        });
      if (!WT) throw new Error("No 2D context to decode an image");
      WT.drawImage(UT, 0, 0);
      const {
        data: zT
      } = WT.getImageData(0, 0, UT.width, UT.height);
      return UT.close(), {
        pixels: new Uint8Array(zT.buffer, zT.byteOffset, zT.byteLength),
        width: mT.width,
        height: mT.height
      }
    }

    function UU(TT, UT) {
      return (0, ST.h)(TT, UT.urls, (async () => {
        const mT = await Promise.all(UT.urls.map((async (TT, mT) => {
            var WT, zT, MT, gT, nT;
            return null !== (gT = null !== (zT = null === (MT = UT.pixels) || void 0 === MT ? void 0 : MT[mT]) && void 0 !== zT ? zT : null, nT = UT.layerWidth, WT = null !== gT && void 0 !== gT && gT.byteLength && nT && gT.byteLength % (nT * nT * 4) === 0 ? {
              pixels: gT,
              layerWidth: nT,
              layers: gT.byteLength / (nT * nT * 4)
            } : null) && void 0 !== WT ? WT : await async function(TT) {
              const {
                pixels: UT,
                width: mT
              } = await TU(TT);
              return {
                pixels: UT,
                layerWidth: mT,
                layers: UT.byteLength / (mT * mT * 4)
              }
            }(TT)
          }))),
          WT = mT[0].layerWidth;
        return (0, ST.e)(mT, WT, TT.limits.maxTextureArrayLayers).map(((mT, zT) => {
          let {
            pixels: MT,
            layers: gT
          } = mT;
          return {
            texture: DT(TT, MT, WT, WT, gT, `atlas-${zT}-${AT(UT.urls[0])}`),
            layerWidth: WT,
            layers: gT
          }
        }))
      }))
    }
    const mU = new Map([
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
      WU = new Map([
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

    function zU(TT) {
      for (const UT of (0, GT.i)(TT))
        if (!WU.has((0, GT.h)(UT))) return !1;
      return !0
    }

    function MU(TT) {
      const UT = WU.get(TT);
      if (!UT) return null;
      const [mT, WT, zT] = UT;
      return {
        srcFactor: mU.get(mT),
        dstFactor: mU.get(WT),
        operation: zT
      }
    }
    let gU = null;

    function nU(TT) {
      gU = TT
    }
    const HU = new WeakSet;

    function kU(TT) {
      return HU.has(TT)
    }

    function jU(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var MT;
      kU(TT) || (null === (MT = gU) || void 0 === MT || MT(UT, mT, WT, zT))
    }
    class lU {
      constructor(TT) {
        this.resources = TT, this.matrixKey = {
          fl: 0
        }, this.attributesKey = {
          fl: 0
        }, this.inputs = Object.create(null);
        for (let UT = 0; UT < 4; UT++) this.inputs[`world${UT}`] = new BU(this.matrixKey, 16 * UT, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(TT, UT) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, TT, !0), UT && this.resources.vertexBufferCreated(this.attributesKey, UT, !0)
      }
    }
    class LU extends lU {
      constructor(TT, UT, mT) {
        super(TT), this.mesh = UT, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const WT = this.inputs;
        let zT = 0;
        for (const {
            size: gT
          }
          of mT) zT += gT;
        for (const {
            name: gT,
            offset: nT,
            size: HT,
            type: kT
          }
          of mT) WT[gT] = new BU(this.attributesKey, 4 * nT, 4 * zT, HT, !0, kT);
        this.rowStride = zT, TT.J_.set(UT, this);
        const MT = UT.isVerticesDataPresent;
        UT.isVerticesDataPresent = (TT, mT) => TT in WT || MT.call(UT, TT, mT)
      }
      attach(TT, UT) {
        this.matrices = TT, this.attributes = UT, this.bind(TT, UT), this.mirror(TT, TT.length, TT.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      W8(TT) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, TT ? 64 * TT : void 0)
      }
      Z8() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(TT, UT) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * TT, 16 * UT)
      }
      attributeRows(TT, UT) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, TT * this.rowStride, UT * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(TT, UT, mT) {
        const WT = this.mesh._thinInstanceDataStorage;
        WT.matrixData = TT, WT.matrixBufferSize = UT, WT.worldMatrices = null, WT.instancesCount = mT
      }
    }
    class pU extends lU {
      constructor(TT, UT, mT) {
        var WT, zT, MT, gT;
        super(TT), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (WT = null === mT || void 0 === mT ? void 0 : mT.interleavedKinds) && void 0 !== WT ? WT : null, this.offsets = null !== (zT = null === mT || void 0 === mT ? void 0 : mT.interleavedOffsets) && void 0 !== zT ? zT : [], this.rowStride = null !== (MT = null === mT || void 0 === mT ? void 0 : mT.interleavedRowStride) && void 0 !== MT ? MT : 0, null === (gT = this.layout) || void 0 === gT || gT.forEach(((TT, UT) => {
          this.inputs[TT] = new BU(this.attributesKey, 4 * this.offsets[UT], 4 * this.rowStride, mT.strides[TT])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), TT.batchUploads.set(UT, this), UT.SF.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(TT) {
        const UT = this.packedBatch;
        return UT.renderSelf ? 0 === TT ? this.packedSource : UT.instances[TT - 1] : UT.instances[TT]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(TT, UT, mT, WT) {
        const zT = (UT.renderSelf ? 1 : 0) + UT.rows.length;
        if (this.frame = WT, this.count = zT, this.packedSource = TT, this.packedBatch = UT, 0 === zT) return;
        if (TT.getWorldMatrix(), 16 * zT > this.matrices.length) {
          let TT = this.matrices.length / 16;
          for (; TT < zT;) TT *= 2;
          this.matrices = new Float32Array(16 * TT), this.attributes &&= new Float32Array(TT * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let MT = 0;
        UT.renderSelf && this.packRow(MT++, TT, UT.row, mT);
        for (let gT = 0; gT < UT.rows.length; gT++) this.packRow(MT++, UT.instances[gT], UT.rows[gT], mT);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * zT), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, zT * this.rowStride)
      }
      packRow(TT, UT, mT, WT) {
        const zT = this.matrices;
        if (mT < 0) zT.set(UT.getWorldMatrix().m, 16 * TT);
        else
          for (let kT = 0; kT < 16; kT++) zT[16 * TT + kT] = WT[16 * mT + kT];
        const MT = this.attributes;
        if (!MT) return;
        const gT = UT.XV,
          nT = this.layout;
        for (let kT = 0; kT < nT.length; kT++) {
          var HT;
          const UT = null !== (HT = gT[nT[kT]]) && void 0 !== HT ? HT : 0,
            mT = TT * this.rowStride + this.offsets[kT];
          UT.toArray ? UT.toArray(MT, mT) : UT.copyToArray ? UT.copyToArray(MT, mT) : MT[mT] = UT
        }
      }
    }
    class BU {
      constructor(TT, UT, mT, WT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = TT, this.byteOffset = UT, this.byteStride = mT, this.size = WT, this.instanced = zT, this.type = MT, this.normalized = gT
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
    const ZU = "CANVAS_ALPHA_ONE",
      cU = `override ${ZU}: bool = false;`,
      vU = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function fU(TT, UT, mT) {
      var WT;
      let zT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const MT = null !== (WT = UT._colorFormat) && void 0 !== WT ? WT : "bgra8unorm",
        gT = zT ? 15 : 0;
      return mT ? {
        ...TT,
        targets: [{
          format: MT,
          blend: {
            color: mT,
            alpha: vU
          },
          writeMask: gT
        }]
      } : {
        ...TT,
        constants: {
          ...TT.constants,
          [ZU]: 1
        },
        targets: [{
          format: MT,
          writeMask: gT
        }]
      }
    }

    function qU(TT, UT) {
      TT._renderables.push(UT)
    }

    function iU(TT) {
      return TT._device
    }

    function bU(TT) {
      var UT, mT;
      return null !== (UT = null === (mT = TT._frameGraph) || void 0 === mT ? void 0 : mT._tasks) && void 0 !== UT ? UT : []
    }

    function OU(TT) {
      return TT._currentEncoder
    }

    function eU(TT) {
      return TT.createBindGroupLayout({
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
    const YU = "greater-equal",
      JU = 2e5,
      xU = 1e5,
      dU = new WeakMap;

    function wU(TT, UT) {
      let mT = dU.get(TT);
      if (!mT) {
        mT = {
          module: TT.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, dU.set(TT, mT)
      }
      const WT = `${UT._colorFormat}|${UT._depthStencilFormat}|${UT._sampleCount}`;
      let zT = mT.pipelines.get(WT);
      if (!zT) {
        var MT;
        const {
          module: gT
        } = mT;
        zT = TT.createRenderPipeline({
          label: `placeholder ${WT}`,
          layout: TT.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: gT,
            entryPoint: "v"
          },
          fragment: {
            module: gT,
            entryPoint: "f",
            targets: [{
              format: null !== (MT = UT._colorFormat) && void 0 !== MT ? MT : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: UT._depthStencilFormat ? {
            format: UT._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: UT._sampleCount
          }
        }), mT.pipelines.set(WT, zT)
      }
      return zT
    }

    function tU(TT, UT, mT) {
      const WT = UT.eye,
        zT = UT.viewMatrix;
      TT[0] = WT[0] + zT[2] * mT, TT[1] = WT[1] + zT[6] * mT, TT[2] = WT[2] + zT[10] * mT
    }
    var aU = mT(38101),
      yU = mT(41737),
      XU = mT(37298);
    const IU = Math.PI,
      QU = IU / 1.95,
      sU = [5e-4 / 94, 125e-7, 5e-4 / 18],
      FU = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((TT => {
        let [UT, mT] = TT;
        return .434 * IU * Math.pow(2 * IU / UT, 2) * mT
      }));

    function PU(TT, UT, mT) {
      const {
        up: WT,
        mieDirectionalG: zT
      } = TT, MT = 1 - CU(1 - Math.exp(UT[1] / 45e4), 0, 1), gT = TT.rayleigh - (1 - MT), nT = Math.hypot(UT[0], UT[1], UT[2]), HT = nT > 0 ? 1 / nT : 0, kT = mT.sunDir;
      for (let pT = 0; pT < 3; pT++) kT[pT] = UT[pT] * HT;
      const jT = kT[0] * WT[0] + kT[1] * WT[1] + kT[2] * WT[2],
        lT = 1e3 * Math.max(0, 1 - Math.exp(-(QU - Math.acos(CU(jT, -1, 1))) / 1.5));
      mT.sunE = lT;
      const LT = .2 * TT.turbidity * 1e-17 * TT.mieCoefficient;
      for (let pT = 0; pT < 3; pT++) {
        const TT = sU[pT] * gT,
          UT = FU[pT] * LT,
          WT = lT / (TT + UT);
        mT.inScatterR[pT] = TT * WT, mT.inScatterM[pT] = UT * WT, mT.extinctionBeta[pT] = 8400 * TT + 1250 * UT
      }
      return mT.sunsetMix = CU(Math.pow(1 - jT, 5), 0, 1), mT.sunDiscE = 19e3 * lT, mT.mieScale = (1 - zT * zT) / (4 * IU), mT.mieBase = 1 + zT * zT, mT.mieSlope = 2 * zT, mT
    }
    const VU = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const uU = 1 / function(TT) {
      const {
        A: UT,
        B: mT,
        C: WT,
        D: zT,
        E: MT,
        F: gT
      } = VU;
      return (TT * (UT * TT + WT * mT) + zT * MT) / (TT * (UT * TT + mT) + zT * gT) - MT / gT
    }(1e3);

    function CU(TT, UT, mT) {
      return Math.min(Math.max(TT, UT), mT)
    }
    const rU = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function KU(TT, UT) {
      const mT = new Map(UT),
        WT = [],
        zT = [],
        MT = () => 0 === zT.length || zT[zT.length - 1].active;
      let gT = null;
      const nT = () => {
        const TT = [...mT].filter((TT => {
            let [, UT] = TT;
            return !0 !== UT
          })),
          UT = TT.map((TT => {
            let [UT] = TT;
            return UT
          })).join("|");
        gT = TT.length ? new RegExp(`\\b(${UT})\\b`, "g") : null
      };
      nT();
      for (const HT of TT.split("\n")) {
        const TT = rU.exec(HT);
        if (!TT) {
          MT() && WT.push(gT ? SU(HT, gT, mT) : HT);
          continue
        }
        const UT = TT[1],
          kT = TT[2].trim();
        if ("ifdef" === UT || "ifndef" === UT || "if" === UT) {
          const TT = MT(),
            WT = "if" === UT ? GU(kT, mT) : mT.has(kT) === ("ifdef" === UT);
          zT.push({
            active: TT && WT,
            parentActive: TT,
            taken: WT
          })
        } else if ("elif" === UT || "else" === UT) {
          const TT = zT[zT.length - 1];
          if (!TT) throw new Error(`#${UT} without #if`);
          const WT = !TT.taken && ("else" === UT || GU(kT, mT));
          TT.active = TT.parentActive && WT, TT.taken = TT.taken || WT
        } else if ("endif" === UT) {
          if (!zT.pop()) throw new Error("#endif without #if")
        } else if (MT()) {
          const [TT, ...WT] = kT.split(/\s+/);
          "undef" === UT ? mT.delete(TT) : mT.set(TT, !WT.length || WT.join(" ")), nT()
        }
      }
      if (zT.length) throw new Error("Unterminated #if");
      return WT.join("\n")
    }

    function SU(TT, UT, mT) {
      return TT.replace(UT, (TT => {
        const UT = mT.get(TT);
        return "string" === typeof UT ? UT : TT
      }))
    }

    function GU(TT, UT) {
      var mT;
      const WT = null !== (mT = TT.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== mT ? mT : [];
      let zT = 0;
      const MT = () => WT[zT],
        gT = () => WT[zT++],
        nT = TT => {
          const mT = /^\d/.test(TT) ? TT : UT.get(TT);
          return "string" === typeof mT ? parseInt(mT) : Number.NaN
        },
        HT = () => {
          const TT = gT();
          if ("!" === TT) return !HT();
          if ("(" === TT) {
            const TT = jT();
            return gT(), TT
          }
          if ("defined" === TT) {
            const TT = "(" === MT();
            TT && gT();
            const mT = gT();
            return TT && gT(), UT.has(mT)
          }
          const mT = MT();
          if ("==" === mT || "!=" === mT || ">" === mT || "<" === mT || ">=" === mT || "<=" === mT) {
            gT();
            const UT = nT(TT),
              WT = nT(gT());
            if (Number.isNaN(UT) || Number.isNaN(WT)) return !1;
            switch (mT) {
              case "==":
                return UT === WT;
              case "!=":
                return UT !== WT;
              case ">":
                return UT > WT;
              case "<":
                return UT < WT;
              case ">=":
                return UT >= WT;
              default:
                return UT <= WT
            }
          }
          return UT.has(TT)
        },
        kT = () => {
          let TT = HT();
          for (;
            "&&" === MT();) {
            gT();
            const UT = HT();
            TT = TT && UT
          }
          return TT
        },
        jT = () => {
          let TT = kT();
          for (;
            "||" === MT();) {
            gT();
            const UT = kT();
            TT = TT || UT
          }
          return TT
        },
        lT = jT();
      if (zT !== WT.length) throw new Error(`Cannot evaluate #if ${TT}`);
      return lT
    }
    var NU = mT(37292),
      EU = mT(37628),
      hU = mT(37637),
      DU = mT(40839),
      oU = mT(38873);
    const AU = 32,
      RU = [10, 3, 10],
      Tm = [21, 7, 21],
      Um = Tm[0] * Tm[1] * Tm[2],
      mm = 0,
      Wm = 1,
      zm = 2,
      Mm = 3,
      gm = 64,
      nm = 512,
      Hm = 4 * Um,
      km = 1536,
      jm = Hm + Um * km,
      lm = 1073741824,
      Lm = jm + 1;

    function pm(TT, UT) {
      const mT = TT % UT;
      return mT < 0 ? mT + UT : mT
    }

    function Bm(TT, UT, mT) {
      return WT = pm(TT, Tm[0]), zT = pm(UT, Tm[1]), MT = pm(mT, Tm[2]), WT + Tm[0] * (zT + Tm[1] * MT);
      var WT, zT, MT
    }

    function Zm(TT, UT, mT) {
      return TT + 8 * (UT + 8 * mT)
    }

    function cm(TT, UT, mT) {
      return TT + 4 * (UT + 4 * mT)
    }
    const fm = 65535,
      qm = 0,
      im = 1,
      bm = 2,
      Om = 3;

    function em(TT) {
      return Math.ceil(TT * TT / 32)
    }
    const Ym = 8192,
      Jm = 1 << 18,
      xm = 65536,
      dm = 294912,
      wm = 128,
      tm = 4096,
      am = 16,
      ym = 16385,
      Xm = 81921,
      Im = 147457,
      Qm = 4194304;
    const sm = [0, 0, 0],
      Fm = [0, 0, 0];

    function Pm(TT, UT, mT, WT) {
      ! function(TT, UT, mT) {
        const [WT, zT, MT] = [TT[0], TT[1], TT[2]];
        let gT, nT, HT;
        Math.abs(zT) < .99 ? (gT = MT, nT = 0, HT = -WT) : (gT = -zT, nT = WT, HT = 0);
        const kT = Math.hypot(gT, nT, HT);
        UT[0] = gT / kT, UT[1] = nT / kT, UT[2] = HT / kT, mT[0] = zT * UT[2] - MT * UT[1], mT[1] = MT * UT[0] - WT * UT[2], mT[2] = WT * UT[1] - zT * UT[0]
      }(WT, sm, Fm);
      const zT = 1 / 32;
      for (const [MT, gT] of [
          [0, sm],
          [4, Fm]
        ]) {
        for (let mT = 0; mT < 3; mT++) TT[UT + MT + mT] = gT[mT] * zT;
        TT[UT + MT + 3] = -(gT[0] * mT[0] + gT[1] * mT[1] + gT[2] * mT[2]) * zT
      }
    }
    class Vm {
      constructor() {
        this.words = new Uint32Array(Im), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      np(TT, UT) {
        this.parts = 0, this.refs = 0, this.view = TT, this.viewAt = UT;
        const mT = TT[UT + 1] * TT[UT + 6] - TT[UT + 2] * TT[UT + 5],
          WT = TT[UT + 2] * TT[UT + 4] - TT[UT] * TT[UT + 6],
          zT = TT[UT] * TT[UT + 5] - TT[UT + 1] * TT[UT + 4],
          MT = Math.hypot(mT, WT, zT) || 1;
        this.light[0] = mT / MT, this.light[1] = WT / MT, this.light[2] = zT / MT
      }
      add(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= tm || ! function(TT, UT, mT) {
            const WT = TT[UT],
              zT = TT[UT + 1],
              MT = TT[UT + 2],
              gT = TT[UT + 3],
              nT = TT[UT + 4],
              HT = TT[UT + 5],
              kT = TT[UT + 6],
              jT = TT[UT + 7],
              lT = TT[UT + 8],
              LT = TT[UT + 9],
              pT = TT[UT + 10],
              BT = TT[UT + 11],
              ZT = TT[UT + 12],
              cT = TT[UT + 13],
              vT = TT[UT + 14],
              fT = TT[UT + 15],
              qT = WT * HT - zT * nT,
              iT = WT * kT - MT * nT,
              bT = WT * jT - gT * nT,
              OT = zT * kT - MT * HT,
              eT = zT * jT - gT * HT,
              YT = MT * jT - gT * kT,
              JT = lT * cT - LT * ZT,
              xT = lT * vT - pT * ZT,
              dT = lT * fT - BT * ZT,
              wT = LT * vT - pT * cT,
              tT = LT * fT - BT * cT,
              aT = pT * fT - BT * vT,
              yT = qT * aT - iT * tT + bT * wT + OT * dT - eT * xT + YT * JT;
            if (!(Math.abs(yT) > 1e-12)) return !1;
            const XT = 1 / yT;
            return mT[0] = (HT * aT - kT * tT + jT * wT) * XT, mT[1] = (MT * tT - zT * aT - gT * wT) * XT, mT[2] = (cT * YT - vT * eT + fT * OT) * XT, mT[3] = (pT * eT - LT * YT - BT * OT) * XT, mT[4] = (kT * dT - nT * aT - jT * xT) * XT, mT[5] = (WT * aT - MT * dT + gT * xT) * XT, mT[6] = (vT * bT - ZT * YT - fT * iT) * XT, mT[7] = (lT * YT - pT * bT + BT * iT) * XT, mT[8] = (nT * tT - HT * dT + jT * JT) * XT, mT[9] = (zT * dT - WT * tT - gT * JT) * XT, mT[10] = (ZT * eT - cT * bT + fT * qT) * XT, mT[11] = (LT * bT - lT * eT - BT * qT) * XT, mT[12] = (HT * xT - nT * wT - kT * JT) * XT, mT[13] = (WT * wT - zT * xT + MT * JT) * XT, mT[14] = (cT * iT - ZT * OT - vT * qT) * XT, mT[15] = (lT * OT - LT * iT + pT * qT) * XT, !0
          }(UT, mT, this.inverse)) return;
        const {
          view: WT,
          viewAt: zT
        } = this, MT = mT;
        let gT = 1 / 0,
          nT = 1 / 0,
          HT = -1 / 0,
          kT = -1 / 0,
          jT = -1 / 0;
        const [lT, LT, pT] = this.light;
        for (let bT = 0; bT < 8; bT++) {
          const mT = 1 & bT ? TT.hi[0] : TT.lo[0],
            BT = 2 & bT ? TT.hi[1] : TT.lo[1],
            ZT = 4 & bT ? TT.hi[2] : TT.lo[2],
            cT = mT * UT[MT] + BT * UT[MT + 4] + ZT * UT[MT + 8] + UT[MT + 12],
            vT = mT * UT[MT + 1] + BT * UT[MT + 5] + ZT * UT[MT + 9] + UT[MT + 13],
            fT = mT * UT[MT + 2] + BT * UT[MT + 6] + ZT * UT[MT + 10] + UT[MT + 14],
            qT = WT[zT] * cT + WT[zT + 1] * vT + WT[zT + 2] * fT + WT[zT + 3],
            iT = WT[zT + 4] * cT + WT[zT + 5] * vT + WT[zT + 6] * fT + WT[zT + 7];
          gT = Math.min(gT, qT), nT = Math.min(nT, iT), HT = Math.max(HT, qT), kT = Math.max(kT, iT), jT = Math.max(jT, lT * cT + LT * vT + pT * fT)
        }
        if (HT < -1 || kT < -1 || gT >= 1 || nT >= 1) return;
        const BT = this.parts++,
          ZT = this.rects;
        ZT[4 * BT] = um(gT), ZT[4 * BT + 1] = um(nT), ZT[4 * BT + 2] = um(HT), ZT[4 * BT + 3] = um(kT);
        const cT = this.inverse,
          {
            cell: vT,
            dims: fT,
            lo: qT
          } = TT,
          iT = Xm + BT * am;
        for (let bT = 0; bT < 3; bT++) this.floats[iT + 4 * bT] = cT[bT] / vT, this.floats[iT + 4 * bT + 1] = cT[4 + bT] / vT, this.floats[iT + 4 * bT + 2] = cT[8 + bT] / vT, this.floats[iT + 4 * bT + 3] = (cT[12 + bT] - qT[bT]) / vT;
        this.words[iT + 12] = TT.at, this.floats[iT + 13] = jT + .001 * (1 + Math.abs(jT)), this.words[iT + 14] = fT[0] | fT[1] << 8 | fT[2] << 16
      }
      finish() {
        const TT = wm,
          {
            counts: UT,
            rects: mT,
            words: WT
          } = this;
        UT.fill(0);
        let zT = 0,
          MT = 0;
        for (; MT < this.parts; MT++) {
          const WT = 4 * MT,
            gT = (mT[WT + 2] - mT[WT] + 1) * (mT[WT + 3] - mT[WT + 1] + 1);
          if (zT + gT > 65536) break;
          zT += gT;
          for (let zT = mT[WT + 1]; zT <= mT[WT + 3]; zT++)
            for (let MT = mT[WT]; MT <= mT[WT + 2]; MT++) UT[zT * TT + MT]++
        }
        let gT = 0;
        for (let HT = 0; HT < 16384; HT++) WT[HT] = gT, gT += UT[HT], UT[HT] = WT[HT];
        WT[16384] = gT;
        for (let HT = 0; HT < MT; HT++) {
          const zT = 4 * HT;
          for (let MT = mT[zT + 1]; MT <= mT[zT + 3]; MT++)
            for (let gT = mT[zT]; gT <= mT[zT + 2]; gT++) WT[ym + UT[MT * TT + gT]++] = HT
        }
        const nT = this.floats;
        for (let HT = 0; HT < 16384; HT++) {
          const TT = ym + WT[HT],
            UT = TT + Math.min(WT[HT + 1] - WT[HT], 64);
          for (let mT = TT + 1; mT < UT; mT++) {
            const UT = WT[mT],
              zT = nT[81934 + UT * am];
            let MT = mT - 1;
            for (; MT >= TT && nT[81934 + WT[MT] * am] < zT; MT--) WT[MT + 1] = WT[MT];
            WT[MT + 1] = UT
          }
        }
        this.refs = zT
      }
    }

    function um(TT) {
      return Math.min(127, Math.max(0, Math.floor((.5 * TT + .5) * wm)))
    }

    function Cm(TT, UT, mT, WT, zT) {
      for (let MT = 0; MT < 4; MT++)
        for (let gT = 0; gT < 4; gT++) zT[4 * MT + gT] = TT[UT + 4 * MT] * mT[WT + gT] + TT[UT + 4 * MT + 1] * mT[WT + 4 + gT] + TT[UT + 4 * MT + 2] * mT[WT + 8 + gT] + TT[UT + 4 * MT + 3] * mT[WT + 12 + gT]
    }

    function rm(TT, UT, mT, WT, zT) {
      const MT = TT[0] - UT,
        gT = TT[1] - mT,
        nT = TT[2] - WT,
        HT = TT[3] - UT,
        kT = TT[4] - mT,
        jT = TT[5] - WT,
        lT = TT[6] - UT,
        LT = TT[7] - mT,
        pT = TT[8] - WT;
      if (Math.min(MT, HT, lT) > zT || Math.max(MT, HT, lT) < -zT) return !1;
      if (Math.min(gT, kT, LT) > zT || Math.max(gT, kT, LT) < -zT) return !1;
      if (Math.min(nT, jT, pT) > zT || Math.max(nT, jT, pT) < -zT) return !1;
      const BT = HT - MT,
        ZT = kT - gT,
        cT = jT - nT,
        vT = lT - HT,
        fT = LT - kT,
        qT = pT - jT,
        iT = ZT * qT - cT * fT,
        bT = cT * vT - BT * qT,
        OT = BT * fT - ZT * vT;
      if (Math.abs(iT * MT + bT * gT + OT * nT) > zT * (Math.abs(iT) + Math.abs(bT) + Math.abs(OT))) return !1;
      const eT = [BT, ZT, cT, vT, fT, qT, MT - lT, gT - LT, nT - pT];
      for (let YT = 0; YT < 3; YT++) {
        const TT = eT[3 * YT],
          UT = eT[3 * YT + 1],
          mT = eT[3 * YT + 2];
        for (let WT = 0; WT < 3; WT++) {
          const BT = 0 === WT ? 0 : 1 === WT ? mT : -UT,
            ZT = 0 === WT ? -mT : 1 === WT ? 0 : TT,
            cT = 0 === WT ? UT : 1 === WT ? -TT : 0,
            vT = BT * MT + ZT * gT + cT * nT,
            fT = BT * HT + ZT * kT + cT * jT,
            qT = BT * lT + ZT * LT + cT * pT,
            iT = zT * (Math.abs(BT) + Math.abs(ZT) + Math.abs(cT));
          if (Math.min(vT, fT, qT) > iT || Math.max(vT, fT, qT) < -iT) return !1
        }
      }
      return !0
    }
    const Km = new Float32Array(1);
    new Uint32Array(Km.buffer);
    var Sm = mT(38878);

    function Gm(TT) {
      const [UT, mT, WT] = Sm.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${TT.group}) @binding(${TT.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${UT-1}, ${mT-1}, ${WT-1});\n}\n`
    }

    function Nm(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [zT, MT, gT] = Tm, [nT, HT, kT] = RU, jT = Math.log2(AU), lT = WT ? "var<private> bloxdSpCrossed: bool;\n" : "", LT = WT ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${TT.group}) @binding(${TT.iL}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${TT.group}) @binding(${TT.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${mT?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${lT}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${im}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${bm}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${mT?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Om}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${zT}, ${MT}, ${gT});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${zT} * (s.y + ${MT} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${nT}, ${HT}, ${kT}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${jT}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Mm}u) {\n\t\treturn named && state == ${zm}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${Hm}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${jm}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${UT?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${UT?`\t\tif (exits && step > 0 && step % ${Dm} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${jT}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${mm}u || kind == ${Wm}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${zm}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${Hm}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${LT}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Em = {
      group: 0,
      uniform: 0,
      iL: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function hm() {
      const TT = Em;
      return `${Gm(TT)}${Nm(TT,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Sm.c}>,\n}\n@group(${TT.group}) @binding(${TT.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${TT.group}) @binding(${TT.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Sm.j})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Sm.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Sm.d}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Dm = 2;
    const om = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function Am(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const WT = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${UT.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        zT = "trace" === mT || "lit" === mT,
        MT = "maskEdge" === mT ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        gT = zT ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${UT.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${UT.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===mT?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${MT};\n`;
      return `${WT}${TT.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${zT?function(){const[TT,UT,mT]=Sm.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${TT}.0, ${UT}.0, ${mT}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${gT}}\n`:""}${TT.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${UT.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${UT.renderOffset});\n}\n`:""}`
    }
    const Rm = "bloxdSpOwnTexture";

    function TW(TT) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${TT.texture}) - 1u)))`
    }
    const UW = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${aU.d.map((TT=>{let[UT,mT]=TT;return`\tbloxdSpOut.${UT} = (bloxdSpWord & ${mT}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function mW(TT) {
      return `bloxdSpFlags(${TT})`
    }
    const WW = `${DU.p}.eyePosition`;

    function zW(TT, UT, mT, WT, zT) {
      const MT = TT.indexOf(UT);
      if (MT < 0 || TT.indexOf(UT, MT + 1) >= 0) throw new Error(`Lite's ${zT} program changed at the shader pack ${WT} hook: ${MT<0?"no":"more than one"} anchor (lite/${zT}ShaderPack.ts)`);
      return TT.slice(0, MT) + mT + TT.slice(MT + UT.length)
    }

    function MW(TT) {
      return TT.sunShadow || TT.airShadow
    }

    function gW(TT, UT) {
      return UT && MW(TT)
    }
    const nW = {
      group: DU.i,
      ...DU.x
    };

    function HW(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!MW(TT)) return "";
      if (UT) {
        const UT = nW,
          zT = "trace" === mT || "lit" === mT;
        let MT = "";
        TT.sunShadow && (MT = zT ? `${Nm(UT,!0,"lit"===mT)}${WT=UT,`@group(${WT.group}) @binding(${WT.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${WT.group}) @binding(${WT.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(TT, UT, mT) {
          const WT = `@group(${TT}) @binding(${UT}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return mT ? `${WT}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${om}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((TT=>`\t{\n\t\tlet o = vec2i(${TT});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : WT
        }(UT.group, DU.A, "maskEdge" === mT));
        const gT = {
          shadowDirection: `${DU.p}.shadowDirection`,
          renderOffset: `${DU.p}.renderOffset`,
          eyePosition: `${DU.p}.eyePosition`
        };
        return `${Gm(UT)}${MT}${function(TT){const[UT,mT,WT]=Sm.o;return`@group(${TT.group}) @binding(${TT.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${TT.group}) @binding(${TT.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${UT}.0, ${mT}.0, ${WT}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(UT)}${Am(TT,gT,mT)}`
      }
      var WT;
      return `${TT.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${TT.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function kW(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!UT) return "";
      const MT = (gT = "fragmentInputs.vPositionW", nT = TT.sunShadow ? {
        normal: mT,
        flags: WT
      } : null, `\n\tbloxdSpShadowPosition = ${gT};\n${nT?`\tbloxdSpShadowNormal = normalize(${nT.normal});\n\tbloxdSpShadowEmissive = (${nT.flags} & ${aU.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${nT.flags} & ${aU.f}u) != 0u;\n`:""}`);
      var gT, nT;
      return TT.sunShadow && ("mask" === zT || "maskEdge" === zT) ? `${MT}${HT="fragmentInputs.position",kT="maskEdge"===zT,`\n\tbloxdSpShadowPixel = vec2i(${HT}.xy);\n${kT?`\tbloxdSpShadowZ = ${HT}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${HT}.z), dpdy(${HT}.z));\n`:""}`}` : MT;
      var HT, kT
    }
    const jW = "bloxdSpTextureRotation",
      lW = "bloxdSpTextureLayers",
      LW = `@group(${DU.i}) @binding(${DU.E}) var<storage, read> ${lW}: array<u32>;\n`;

    function pW(TT) {
      return `\tvertexOutputs.vPackTexture = ${lW}[min(u32(${TT}), arrayLength(&${lW}) - 1u)];\n`
    }

    function BW(TT) {
      return void 0 !== TT.uv
    }

    function ZW(TT) {
      if (!TT) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (BW(TT)) return function(TT) {
        const {
          texture: UT,
          cells: mT,
          layers: WT
        } = TT, zT = `textureDimensions(${UT}, bloxdSpLevel)`, MT = mT ? `max(vec2u(vec2f(${zT}) / ${mT}), vec2u(1u))` : zT, gT = mT ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${MT};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${mT}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${mT}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${UT}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${zT} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${MT};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${UT}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let nT;
        if (mT)
          if (1 === WT.length) nT = `\treturn bloxdSpOwnTexel(${WT[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const TT = WT.length - 1;
            nT = `\tvar bloxdSpColour = bloxdSpOwnTexel(${WT[TT]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let UT = TT - 1; UT >= 0; UT--) nT += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${WT[UT]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            nT += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else nT = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${TT.id?`var<private> ${Rm}: u32;\n`:""}${gT}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${TW(TT)};\n\treturn ${MT};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${TT.id?Rm:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${TW(TT)};\n${nT}}\n`
      }(TT);
      const UT = TT,
        mT = TT => {
          const mT = TT > 0 ? `bloxdSpLayer - ${UT.layers*TT}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${TT}, ${UT.sampler}, bloxdSpTurned, ${mT}, round(bloxdSpMipLevel));`
        };
      let WT = "";
      for (let MT = 0; MT < UT.count - 1; MT++) WT += `\tif (bloxdSpLayer < ${UT.layers*(MT+1)}u) {\n\t\t${mT(MT)}\n\t}\n`;
      const zT = UT.frame ? `${UT.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${jW}: u32;\n${LW}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${jW} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${jW} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${jW} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${zT}${WT}\t${mT(UT.count-1)}\n}\n`
    }

    function cW(TT, UT, mT) {
      return !!TT.surface && "bloxdDefaultSurface" !== TT.surface && function(TT, UT) {
        return "liquid" === UT || !TT
      }(UT, mT)
    }

    function vW(TT, UT) {
      return TT.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${UT.vertexLocalPosition}, ${mW(UT.vertexFlags)});\n\t\tlet bloxdSpVertex = ${TT.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function fW(TT, UT, mT, WT, zT) {
      if (!TT.surface) return "";
      const MT = (TT, UT) => `\n\tlet bloxdSpTexelUV = ${TT};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${UT}) - 1u));`;
      let gT = "",
        nT = "0u, 0u, vec2f(0.0), 0.0";
      const HT = WT && BW(WT) ? WT : null,
        kT = WT && !BW(WT) ? WT : null;
      if (HT) {
        gT = `${HT.id?`\n\tlet bloxdSpTexture = ${HT.id};\n\t${Rm} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${HT.uv};${MT(function(TT,UT){var mT;return`${null!==(mT=TT.levelUv)&&void 0!==mT?mT:TT.cells?`${UT} / ${TT.cells}`:UT} * vec2f(textureDimensions(${TT.texture}))`}(HT,"bloxdSpUv"),HT.texture)}`, nT = (HT.id ? `${Rm}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else kT && (gT = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${jW} = bloxdSpTexture >> 16u;${MT(`fragmentInputs.vMainUV1 * ${(0,NU.nb)(kT.width)}`,"textureAtlas0")}`, nT = `bloxdSpTexture & 0xffffu, ${jW}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const jT = zT.overlayColour,
        lT = jT ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        LT = "bloxdDefaultSurface" !== TT.surface || jT ? `\n\tbaseColor = vec4f(${lT}, baseColor.a);` : "",
        pT = cW(TT, UT, mT) ? `\n\t${zT.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${gT}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${zT.alpha}, ${zT.enchantTier}, ${zT.enchantColour}, ${zT.enchantSpeed}, ${null!==jT&&void 0!==jT?jT:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${zT.normal}, ${zT.localPosition}, ${mW(zT.flags)}, ${nT});\n\tlet bloxdSpSurface = ${TT.surface}(bloxdSpSurfaceIn);${LT}${pT}\n`
    }
    const qW = "bloxdSpLightIn";

    function iW(TT, UT, mT, WT) {
      if (!TT.light) return "";
      const zT = UT ? `${NU.l}.rgb, ${NU.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${NU.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: MT,
          diffuse: gT,
          emissive: nT,
          ambient: HT,
          fogColour: kT,
          fogAlpha: jT,
          normal: lT
        } = WT;
      return `\tvar ${qW} = BloxdLightIn(vec3f(0.0), ${mT?MT:"0.0"}, ${gT}, ${nT}, ${HT}, ${zT}, ${kT}, ${jT}, fragmentInputs.vPositionW, ${lT}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${qW}.litColour = bloxdLitColour(bloxdSpSurface, ${qW});\n`
    }

    function bW(TT) {
      return TT.light ? `\n\t{\n\t\tlet bloxdSpLight = ${TT.light}(bloxdSpSurface, ${qW});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const OW = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      eW = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      YW = "\treturn color;\n}",
      JW = {
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
    const xW = Object.freeze({});

    function dW(TT) {
      var UT;
      return !(null === (UT = (0, oU.d)(TT)) || void 0 === UT || !UT.sceneDepth)
    }

    function wW(TT) {
      const UT = (0, oU.d)(TT);
      return !!UT && cW(UT.hooks, UT.strict, UT.program)
    }

    function tW(TT, UT, mT, WT) {
      return zW(TT, UT, mT, WT, "terrain")
    }

    function aW(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const MT = function(TT) {
          return (0, oU.b)(TT.packVariant, TT.liquid ? "liquid" : "terrain")
        }(TT),
        {
          hooks: gT
        } = MT,
        nT = gW(MT, WT),
        HT = "edge" === zT ? "maskEdge" : "plain" === zT ? "mask" : "trace",
        kT = vW(gT, JW);
      kT && (UT = tW(UT, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${kT}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const jT = "atlas" === TT.texture ? {
          count: TT.atlasCount,
          layers: TT.atlasLayers,
          width: TT.A4,
          sampler: "atlasSampler",
          frame: TT.animated ? mT : null
        } : null,
        lT = `${MT.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${kW(MT,nT,JW.normal,JW.flags,HT)}${fW(gT,MT.strict,MT.program,jT,JW)}`;
      lT && (UT = tW(UT, OW, `${OW.slice(0,-1)}${lT}`, "surface"));
      const LT = bW(gT);
      return LT && (UT = tW(UT, eW, `${iW(gT,TT.lighting,TT.dirLightCount>0,JW)}${eW}`, "light input"), UT = tW(UT, YW, `${LT.slice(1)}${YW}`, "light")), `${(0,DU.H)()}${MT.sceneDepth?`@group(${DU.i}) @binding(${DU.u}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${WW};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${HW(MT,nT,HT)}${ZW(jT)}${UW}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${MT.code}${UT}`
    }
    const yW = OT.e.WGSL;

    function XW(TT) {
      return void 0 !== TT.packVariant
    }
    const IW = {
        jzT: 0,
        lzT: 4,
        LzT: 8,
        pzT: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      QW = IW.aoLevels + 4,
      sW = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      FW = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      PW = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      VW = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      uW = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      CW = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      rW = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      KW = 0,
      SW = 3,
      GW = 4,
      NW = 5,
      EW = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${EU.c}, ${EU.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${EU.c}, ${EU.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      hW = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((TT=>hU.e>>TT&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const DW = {
      Cl: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: TT => `animDataPerTex[${TT}]`
    };

    function oW(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DW;
      return `\n\tlet atlasIdxIn = ${TT};\n\tlet animTick = ${mT.Cl};\n\tlet animTickStride = ${mT.stride};\n\tlet numAnimTextures = ${mT.count};\n\t${(0,eT.f)(OT.e.WGSL,mT.perTexture)}\n\t${UT}animLayer;\n`
    }

    function AW(TT) {
      const UT = (UT, mT) => {
        const WT = UT > 0 ? `fragmentInputs.texAtlasIndex - ${TT.atlasLayers.toFixed(1)} * ${UT.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${mT?"textureSampleLevel":"textureSample"}(textureAtlas${UT}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${WT}))${mT?", atlasLod":""})`
      };
      if (1 === TT.atlasCount) return `baseColor = ${UT(0,!1)};`;
      let mT = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,NU.nb)(TT.A4)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let WT = 0; WT < TT.atlasCount; WT++) {
        const zT = TT.atlasLayers * (WT + 1) - .5;
        mT += `${WT>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,NU.nb)(zT)}) {\n\t\tbaseColor = ${UT(WT,!0)};\n\t}`
      }
      return mT
    }

    function RW(TT) {
      return `terrain-${TT.texture}${"atlas"===TT.texture?TT.atlasCount:""}${TT.animated?"-anim":""}${TT.alphaTest?"-test":""}${TT.lighting?"-lit":""}-dir${TT.dirLightCount}${TT.packed?"-packed":""}${XW(TT)?`-sp${TT.packVariant}`:""}${TT.liquid?"-liquid":""}${TT.resting?"-rest":""}`
    }

    function Tz(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const WT = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const mT = "none" !== TT.texture,
          WT = "atlas" === TT.texture,
          zT = TT.dirLightCount > 0,
          MT = XW(TT);
        if (TT.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${TT.dirLightCount}`);
        let gT = 1,
          nT = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (WT) {
          TT.animated && (nT += `@group(2) @binding(${gT++}) var<storage, read> animDataPerTex: array<f32>;\n`), nT += `@group(2) @binding(${gT++}) var atlasSampler: sampler;\n`;
          for (let UT = 0; UT < TT.atlasCount; UT++) nT += `@group(2) @binding(${gT++}) var textureAtlas${UT}: texture_2d_array<f32>;\n`
        } else "single" === TT.texture && (nT += `@group(2) @binding(${gT++}) var diffuseSamplerSampler: sampler;\n`, nT += `@group(2) @binding(${gT++}) var diffuseSampler: texture_2d<f32>;\n`);
        const HT = function(TT) {
            const UT = rW,
              mT = "none" !== TT.texture,
              WT = "atlas" === TT.texture,
              zT = XW(TT);
            return TT.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${mT?"uv: vec2f,":""}\n\t${WT?"texAtlasIndices: f32,":""}\n\t${TT.lighting?"aPackedLightLevels: f32,":""}\n\t${zT?"blockFlagWords: vec2u,":""}\n}\n${EW}\n${hW}\n${"single"===TT.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${mT?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===TT.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${WT?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${TT.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${zT?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${UT.position}) position: vec3f,\n\t@location(${UT.normal}) normal: vec4f,\n\t@location(${UT.color}) color: vec4f,\n\t${mT?`@location(${UT.uv}) uv: vec2f,`:""}\n\t${TT.lighting?`@location(${UT.packedLight}) aPackedLightLevels: f32,`:""}\n\t${zT?`@location(${UT.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(TT),
          kT = `\n${VW}\n${FW}\n${PW}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${nT}\n${cU}\n${HT.declarations}\nstruct Varyings {\n\t${"none"===UT?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${TT.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${zT?"@location(5) vTerrainLambert: f32,":""}\n\t${mT?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${WT?"@location(7) texAtlasIndex: f32,":""}\n\t${TT.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${MT?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${MT&&WT?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${TT.resting?"":(0,NU.w)(yW)}\n${CW}\n\n@vertex\nfn mainVertex(${HT.parameter}) -> Varyings {\n\t${HT.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${MT?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${aU.c.placed}u;`:""}\n\t${MT&&WT?pW("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${TT.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${mT?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${WT?function(TT){return TT?oW("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(TT.animated):""}\n\t${"single"===TT.texture&&TT.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,NU.$)(yW)}\n\t${(0,NU.O)(yW,TT.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${TT.resting?"":uW}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${WT?AW(TT):""}\n\t${"single"===TT.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${mT?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${TT.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${zT?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${ZU}));\n\t${XW(TT)?(0,NU.jb)(OT.e.WGSL):(0,NU.T)(yW)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          jT = new Set;
        TT.lighting && jT.add("BLOXD_LIGHTING");
        zT && jT.add("BLOXD_TERRAIN_DIRECTIONAL");
        return KU(kT, new Map([...jT].map((TT => [TT, !0]))))
      }(TT, mT);
      if (!XW(TT)) return WT;
      const zT = aW(TT, WT, oW, UT, mT);
      return "none" === mT ? zT : `${zT}${function(TT){const UT="none"!==TT.texture&&TT.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${TT.resting?"":uW}\n\t${TT.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${UT&&"atlas"===TT.texture?AW(TT):""}\n\t${UT&&"single"===TT.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${UT?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${aU.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(TT)}`
    }
    const Uz = new Map([
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

    function mz(TT, UT) {
      const mT = new Map;
      let WT = 0;
      const zT = [],
        MT = [],
        gT = [];
      for (const kT of UT) {
        var nT, HT;
        const UT = null !== (nT = kT.type.trim().split(/\s+/).pop()) && void 0 !== nT ? nT : kT.type,
          jT = Uz.get(UT);
        if (!jT) throw new Error(`Lite: no uniform layout for ${kT.name}: ${kT.type}`);
        const lT = null !== (HT = kT.arraySize) && void 0 !== HT ? HT : 0,
          LT = lT ? 4 : jT.align;
        WT = Math.ceil(WT / LT) * LT;
        const pT = lT ? 4 * Math.ceil(jT.floats / 4) : jT.floats;
        if (mT.set(kT.name, {
            offset: WT,
            floats: jT.floats,
            arraySize: lT,
            stride: pT
          }), lT && jT.floats <= 2) {
          const UT = `${TT}_${gT.length}_strided`;
          MT.push(`struct ${UT} {\n\t@size(16) el: ${jT.wgsl},\n}`), gT.push(kT.name), zT.push(`\t@align(16) ${kT.name}: array<${UT}, ${lT}>,`)
        } else lT ? zT.push(`\t@align(16) ${kT.name}: array<${jT.wgsl}, ${lT}>,`) : zT.push(`\t${kT.name}: ${jT.wgsl},`);
        WT += lT ? pT * lT : jT.floats
      }
      return {
        slots: mT,
        floats: Math.max(4, 4 * Math.ceil(WT / 4)),
        wgsl: `${MT.join("\n")}\nstruct ${TT} {\n${zT.join("\n")}\n}\n`,
        stridedArrays: gT
      }
    }
    const Wz = [{
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
      zz = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      Mz = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function gz(TT, UT) {
      return `#if defined(${TT}) && ${TT}DIRECTUV == 0\nvarying v${UT}UV: vec2f;\n#endif`
    }

    function nz(TT, UT, mT) {
      return `#if defined(${TT}) && ${TT}DIRECTUV == 0\nif (uniforms.v${UT}Infos.x==0.)\n{vertexOutputs.v${UT}UV= (uniforms.${mT}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${UT}UV= (uniforms.${mT}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Hz(TT, UT, mT) {
      return `#ifdef ${TT}\n#if ${TT}DIRECTUV == 1\n#define v${UT}UV vMainUV1\n#elif ${TT}DIRECTUV == 2\n#define v${UT}UV vMainUV2\n#else\nvarying v${UT}UV: vec2f;\n#endif\nvar ${mT}SamplerSampler: sampler;\nvar ${mT}Sampler: texture_2d<f32>;\n#endif`
    }
    const kz = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      jz = 256,
      lz = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Lz = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      pz = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      Bz = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Zz = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      cz = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      vz = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      fz = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Lz}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${gz("OPACITY","Opacity")}\n${gz("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${vz}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${pz}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${nz("OPACITY","Opacity","opacity")}\n${nz("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Bz}\n#define CUSTOM_VERTEX_MAIN_END\n${Zz}\n}\n`;
    const qz = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Hz("OPACITY","Opacity","opacity")}\n${Hz("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${vz}\n${cz}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((TT,UT)=>function(TT){const UT=`
    frame.lights[LITE_LIGHT$ {
        TT
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      TT
    }\
    nvar diffuse$ {
      TT
    }: vec4f = $ {
      UT
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      TT
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      UT
    }.vLightData, diffuse$ {
      TT
    }.rgb, $ {
      UT
    }.vLightSpecular.rgb, diffuse$ {
      TT
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(UT))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, iz = /^([gimus]+)!/, bz = new Set;

    function Oz(TT) {
      bz.has(TT) || (bz.add(TT), console.warn(`Lite: no place for plugin code at ${TT} in the standard shader: it is left out`))
    }

    function ez(TT, UT) {
      let mT = TT;
      const WT = new Map;
      for (const [MT, gT] of UT) {
        var zT;
        WT.set(MT, `${null!==(zT=WT.get(MT))&&void 0!==zT?zT:""}${gT}\n`)
      }
      for (const [MT, gT] of WT) {
        if (!MT.startsWith("!")) {
          const TT = `#define ${MT}`;
          if (!mT.includes(TT)) {
            Oz(MT);
            continue
          }
          mT = mT.replace(TT, (() => `\n${gT}\n${TT}`));
          continue
        }
        let TT = MT.substring(1),
          UT = "g";
        if (TT.startsWith("!")) UT = "", TT = TT.substring(1);
        else {
          const mT = iz.exec(TT);
          mT && (UT = mT[1], TT = TT.substring(UT.length + 1))
        }
        const WT = new RegExp(TT, UT.includes("g") ? UT : `${UT}g`);
        let zT = WT.exec(mT);
        for (zT || Oz(MT); zT;) {
          const TT = zT,
            UT = gT.replace(/\$(\d+)/g, ((UT, mT) => Number(mT) < TT.length ? TT[Number(mT)] : ""));
          mT = mT.substring(0, TT.index) + UT + mT.substring(TT.index + TT[0].length), WT.lastIndex = TT.index + UT.length, zT = WT.exec(mT)
        }
      }
      return mT
    }
    const Yz = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Jz = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      xz = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function dz(TT) {
      const UT = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let mT = TT.replace(Yz, ((TT, mT, WT, zT, MT, gT) => ("attribute" === mT ? UT.attributes.push({
        name: MT,
        type: gT
      }) : void 0 === mT ? UT.varyings.push({
        name: MT,
        type: gT,
        interpolation: tz(gT, WT, zT)
      }) : UT.uniforms.push({
        name: MT,
        type: wz(gT)
      }), "")));
      return mT = mT.replace(Jz, ((TT, mT) => (UT.samplers.add(mT), ""))), mT = mT.replace(xz, ((TT, mT, WT) => (UT.textures.push({
        name: mT,
        type: WT
      }), ""))), UT.body = mT, UT
    }

    function wz(TT) {
      const UT = TT.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        mT = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(UT);
      if (!mT) throw new Error(`Lite: unsupported uniform type ${TT}`);
      return mT
    }

    function tz(TT, UT, mT) {
      return void 0 === UT && void 0 === mT ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(TT.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === UT ? "@interpolate(flat) " : `@interpolate(${null!==UT&&void 0!==UT?UT:"perspective"}, ${null!==mT&&void 0!==mT?mT:"center"}) `
    }

    function az(TT) {
      return Qz({
        defines: TT.defines,
        vertex: ez(fz, TT.vertexCode),
        fragment: ez(qz, TT.fragmentCode),
        members: [...Wz, ...TT.defines.has("OPACITY") ? zz : [], ...TT.defines.has("EMISSIVE") ? Mz : [], ...TT.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function yz(TT) {
      const UT = TT.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (UT === TT) throw new Error("Lite: fragment main has no return");
      return UT
    }
    const Xz = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Lz}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${pz}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Bz}\n${Zz}\n}\n`,
      Iz = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${cz}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Qz(TT) {
      const UT = TT.defines,
        mT = dz(KU(TT.vertex, UT)),
        WT = dz(KU(TT.fragment, UT)),
        zT = new Map;
      for (const qT of [...mT.varyings, ...WT.varyings]) zT.has(qT.name) || zT.set(qT.name, qT);
      const MT = [...zT.values()].map(((TT, UT) => `\t@location(${UT}) ${TT.interpolation}${TT.name}: ${TT.type},`)),
        gT = [...TT.members];
      for (const qT of [...mT.uniforms, ...WT.uniforms]) gT.some((TT => TT.name === qT.name)) || gT.push(qT);
      const nT = mz(TT.structName, gT),
        HT = [],
        kT = [];
      let jT = 1;
      const lT = new Set;
      for (const qT of [...mT.textures, ...WT.textures]) {
        if (lT.has(qT.name)) continue;
        lT.add(qT.name);
        const TT = `${qT.name}Sampler`,
          UT = jT++,
          mT = jT++,
          WT = qT.type.startsWith("texture_2d_array") ? "2d-array" : qT.type.startsWith("texture_cube") ? "cube" : "2d";
        HT.push({
          name: qT.name,
          binding: UT,
          samplerBinding: mT,
          dimension: WT
        }), kT.push(`@group(2) @binding(${UT}) var ${qT.name}: ${qT.type};`), kT.push(`@group(2) @binding(${mT}) var ${TT}: sampler;`)
      }
      for (const qT of [...mT.samplers, ...WT.samplers])
        if (!lT.has(qT.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${qT} has no texture`);
      const LT = [VW, lz, nT.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${TT.structName};`, ...kT].join("\n"),
        pT = mT.attributes,
        BT = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...mT.attributes.map(((TT, UT) => `\t@location(${UT}) ${TT.name}: ${TT.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        ZT = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...MT, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        cT = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...WT.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...MT, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", cU, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${ZU}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        vT = TT => {
          for (const UT of nT.stridedArrays) TT = TT.replace(new RegExp(`\\b${UT}\\s*\\[(.*?)\\]`, "g"), `${UT}[$1].el`);
          return TT
        };
      return {
        vertex: `${LT}\n${BT}\n${ZT}\n${vT(mT.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${LT}\n${cT}\n${yz((fT=vT(WT.body),fT.includes("fragmentInputs.position")?fT.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):fT))}`,
        attributes: pT,
        material: nT,
        textures: HT
      };
      var fT
    }
    const sz = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Fz = TT => ({
        name: TT,
        type: "vec3"
      }),
      Pz = TT => ({
        name: TT,
        type: "float"
      }),
      Vz = mz("EarthSkyUniforms", [Fz("viewFrom"), Pz("exposureScale"), Fz("zenithOffset"), Pz("fogOn"), Fz("up"), Pz("ditherOn"), Fz("sun"), Pz("turbidity"), Fz("tint"), Pz("rayleigh"), Fz("sunDir"), Pz("mieStrength"), Fz("inScatterR"), Pz("mieFocus"), Fz("inScatterM"), Pz("sunE"), Fz("extinctionBeta"), Pz("sunsetMix"), Pz("mieScale"), Pz("mieBase"), Pz("mieSlope"), Pz("sunDiscE"), Pz("exposure")]),
      uz = `${VW}\n${lz}\n${Vz.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      Cz = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${sz.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      rz = `\n${cU}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(VU).map((TT=>{let[UT,mT]=TT;return`const TONE_${UT}: f32 = ${mT};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${uU};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${ZU}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Kz = mT(37185);
    const Sz = new Kz.JB,
      Gz = new Kz.JB,
      Nz = new Kz.Quaternion,
      Ez = new Float64Array(3),
      hz = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Dz = new Float64Array(16);

    function oz(TT, UT, mT) {
      const WT = mT.worldMatrix;
      var zT;
      TT.updateFloat3("viewFrom", WT[12], WT[13], WT[14]), TT.updateFloatsFrom("zenithOffset", UT.cameraOffset, 0, 3), TT.updateFloatsFrom("up", UT.up, 0, 3), UT.luminance > 0 && (TT.updateFloat("exposure", UT.luminance), TT.updateFloat("exposureScale", (zT = UT.luminance, Math.log2(2 / Math.pow(zT, 4))))), TT.updateFloat("turbidity", UT.turbidity), TT.updateFloat("rayleigh", UT.rayleigh), TT.updateFloat("mieStrength", UT.mieCoefficient), TT.updateFloat("mieFocus", UT.mieDirectionalG), TT.updateFloatsFrom("tint", UT.tint, 0, 3), TT.updateFloat("fogOn", UT.fog && mT.fogEnabled && 0 !== mT.fogMode ? 1 : 0), TT.updateFloat("ditherOn", UT.dithering ? 1 : 0);
      const MT = UT.sunPosition;
      if (Sz.set(MT[0], MT[1], MT[2]), !UT.useSunPosition) {
        const TT = Math.PI * (UT.inclination - .5),
          mT = 2 * Math.PI * (UT.azimuth - .5);
        Sz.set(UT.distance * Math.cos(mT) * Math.cos(TT), UT.distance * Math.sin(-TT), UT.distance * Math.sin(mT) * Math.cos(TT)), Kz.Quaternion.FromUnitVectorsToRef(Kz.JB.UpReadOnly, Gz.set(UT.up[0], UT.up[1], UT.up[2]), Nz), Sz.rotateByQuaternionToRef(Nz, Sz)
      }
      TT.updateVector3("sun", Sz), Ez[0] = Sz.x, Ez[1] = Sz.y, Ez[2] = Sz.z;
      const gT = PU(UT, Ez, hz);
      TT.updateFloatsFrom("sunDir", gT.sunDir, 0, 3), TT.updateFloat("sunE", gT.sunE), TT.updateFloatsFrom("inScatterR", gT.inScatterR, 0, 3), TT.updateFloatsFrom("inScatterM", gT.inScatterM, 0, 3), TT.updateFloatsFrom("extinctionBeta", gT.extinctionBeta, 0, 3), TT.updateFloat("sunsetMix", gT.sunsetMix), TT.updateFloat("sunDiscE", gT.sunDiscE), TT.updateFloat("mieScale", gT.mieScale), TT.updateFloat("mieBase", gT.mieBase), TT.updateFloat("mieSlope", gT.mieSlope)
    }

    function Az(TT, UT) {
      const mT = Dz;
      mT[0] = UT.far, mT[5] = UT.far, mT[10] = UT.far, mT[15] = 1;
      const WT = TT.infiniteDistance;
      for (let zT = 0; zT < 3; zT++) mT[12 + zT] = TT.position[zT] + (WT ? UT.worldMatrix[12 + zT] : 0);
      return Dz
    }
    class Rz {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(TT, UT, mT, WT, zT) {
        mT !== this.pipeline && (TT.setPipeline(mT), this.pipeline = mT), TT.setBindGroup(1, WT, [zT]);
        const MT = UT.material.bindGroup;
        MT !== this.materialGroup && (TT.setBindGroup(2, MT), this.materialGroup = MT);
        const gT = UT.program.packGroup;
        gT && gT !== this.packGroup && (TT.setBindGroup(DU.i, gT), this.packGroup = gT);
        const {
          vertexBuffers: nT,
          vertexOffsets: HT
        } = this;
        for (let kT = 0; kT < UT.vertexBuffers.length; kT++) nT[kT] === UT.vertexBuffers[kT] && HT[kT] === UT.vertexOffsets[kT] || (TT.setVertexBuffer(kT, UT.vertexBuffers[kT], UT.vertexOffsets[kT]), nT[kT] = UT.vertexBuffers[kT], HT[kT] = UT.vertexOffsets[kT]);
        UT.indexBuffer && UT.indexBuffer !== this.indexBuffer && (TT.setIndexBuffer(UT.indexBuffer, UT.indexFormat), this.indexBuffer = UT.indexBuffer)
      }
    }
    class TM {
      constructor(TT, UT, mT, WT) {
        this.modelMeshes = TT, this.I3 = UT, this.maker = mT, this.warnOnce = WT, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (TT, UT) => {
          (UT < -1 || UT > 1) && this.warnOnce(`group:${UT}`, `rendering group ${UT} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(TT) {
        this.collectGroup(TT, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(TT, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(TT, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.I3.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(UM), this.transparentDraws.sort(mM)
      }
      collectGroup(TT, UT, mT, WT, zT) {
        const MT = this.modelMeshes.group(UT),
          gT = this.I3.group(UT),
          nT = 0 === UT ? null === gT || void 0 === gT ? void 0 : gT.opaque : void 0;
        this.collectList(TT, null === MT || void 0 === MT ? void 0 : MT.opaque, nT || null === gT || void 0 === gT ? void 0 : gT.opaque, UT, !1, mT, zT), nT && (this.I3.drawn += this.maker.bundleDraws(TT, nT, UT)), this.collectList(TT, null === MT || void 0 === MT ? void 0 : MT.alphaTest, void 0, UT, !1, mT, zT), this.collectList(TT, null === MT || void 0 === MT ? void 0 : MT.transparent, null === gT || void 0 === gT ? void 0 : gT.transparent, UT, !0, WT, zT)
      }
      collectList(TT, UT, mT, WT, zT, MT, gT) {
        var nT;
        const HT = MT.length;
        UT && this.maker.pushDraws(TT, UT.units, UT.units.length, WT, zT, MT, UT.rows), mT && (this.I3.drawn += this.maker.pushDraws(TT, mT, mT.length, WT, zT, MT));
        const kT = zT ? null === (nT = this.modelMeshes.group(WT)) || void 0 === nT ? void 0 : nT.text : void 0;
        kT && this.maker.pushDraws(TT, kT.units, kT.units.length, WT, !0, MT, kT.rows), gT && WM(MT, HT)
      }
    }

    function UM(TT, UT) {
      return TT.program.id - UT.program.id || TT.material.owner.uniqueId - UT.material.owner.uniqueId
    }

    function mM(TT, UT) {
      return TT.material.owner.uniqueId - UT.material.owner.uniqueId
    }

    function WM(TT, UT) {
      for (let mT = UT + 1; mT < TT.length; mT++) {
        const WT = TT[mT];
        let zT = mT - 1;
        for (; zT >= UT && mM(TT[zT], WT) > 0; zT--) TT[zT + 1] = TT[zT];
        TT[zT + 1] = WT
      }
    }
    const zM = {};

    function MM(TT) {
      return TT.hasThinInstances ? "thin" : TT.ZzT || TT._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function gM(TT, UT, mT) {
      return TT ? (mT._needUVs = !0, TT.optimizeUVAllocation && (0, dT.M)(TT.matrix) ? (mT[`${UT}DIRECTUV`] = TT.uvSet + 1, mT[`MAINUV${TT.uvSet+1}`] = !0) : mT[`${UT}DIRECTUV`] = 0, !0) : (mT[`${UT}DIRECTUV`] = 0, !1)
    }

    function nM(TT) {
      const UT = new Map;
      for (const mT in TT) {
        if (95 === mT.charCodeAt(0)) continue;
        const WT = TT[mT],
          zT = typeof WT;
        "number" === zT || "string" === zT ? UT.set(mT, String(WT)) : WT && "function" !== zT && UT.set(mT, !0)
      }
      return UT
    }

    function HM(TT) {
      const UT = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: mT
        }
        of TT.features)
        for (const TT in mT) UT[TT] = mT[TT];
      return UT
    }

    function kM(TT) {
      const UT = TT.parts.geometry;
      return null !== UT && void 0 !== UT && UT.live ? UT : null
    }

    function jM(TT) {
      var UT;
      return null !== (UT = kM(TT)) && void 0 !== UT ? UT : zM
    }
    class lM {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = TT, this.warnOnce = UT, this.programWithModel = mT, this.packFailed = WT, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(TT, UT, mT, WT, zT) {
        const MT = UT.owner;
        let gT = this.drawStates.get(UT);
        if (!gT) {
          const TT = UT.parts.materials[UT.range];
          if (!TT) return this.warnOnce("model", `${mT.name} on ${MT.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          gT = {
            defines: HM(TT),
            model: TT,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: zT,
            groupId: WT,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(UT, gT)
        }
        if (this.programCurrent(gT, UT, zT, WT)) return gT.program;
        const {
          model: nT
        } = gT, HT = jM(UT), kT = this.instanceLayout(MT, zT), jT = this.definesBits(MT);
        if (!this.prepareModelDefines(TT, MT, nT, gT.defines, WT, zT)) return null;
        gT.instancing = zT, gT.groupId = WT, gT.modelVersion = nT.version, gT.geometry = HT, gT.instanceLayout = kT, gT.definesBits = jT;
        const lT = function(TT) {
          let UT = "";
          for (const [mT, WT] of TT) UT += !0 === WT ? `${mT};` : `${mT}=${WT};`;
          return UT
        }(nM(gT.defines));
        return lT === gT.definesKey && gT.packVariant === this.modelPackVariant && gT.program && !this.packFailed(gT.program) || (gT.definesKey = lT, gT.packVariant = this.modelPackVariant, gT.program = this.programWithModel(nT, gT.defines, lT)), gT.program
      }
      programCurrent(TT, UT, mT, WT) {
        return null !== TT.program && !this.packFailed(TT.program) && TT.instancing === mT && TT.groupId === WT && this.definesHold(TT, UT, mT)
      }
      definesHold(TT, UT, mT) {
        return TT.modelVersion === TT.model.version && TT.geometry === jM(UT) && TT.instanceLayout === this.instanceLayout(UT.owner, mT) && TT.definesBits === this.definesBits(UT.owner) && TT.packVariant === this.modelPackVariant
      }
      modelPackKind(TT) {
        var UT;
        return 0 === this.modelPackVariant ? null : null !== (UT = (0, JT.s)(TT, YT.k.name)) && void 0 !== UT && UT.active ? "placed" : TT.item ? "item" : TT.lifeform ? "lifeform" : TT.box ? "box" : null
      }
      instanceLayout(TT, UT) {
        var mT, WT, zT;
        return "thin" === UT ? null !== (zT = this.resources.J_.get(TT)) && void 0 !== zT ? zT : null : "instanced" === UT && null !== (mT = null === (WT = TT._userInstancedBuffersStorage) || void 0 === WT ? void 0 : WT.interleavedKinds) && void 0 !== mT ? mT : null
      }
      definesBits(TT) {
        const UT = this.view;
        return (TT.visibility < 1 ? 1 : 0) | (TT.hasVertexAlpha ? 2 : 0) | (TT.applyFog ? 4 : 0) | (TT.useVertexColors ? 8 : 0) | (TT.nonUniformScaling ? 16 : 0) | (UT.fogEnabled && 0 !== UT.fogMode ? 32 : 0) | (UT.lightsEnabled ? 64 : 0) | UT.lightCount << 7
      }
      prepareLightDefines(TT, UT, mT) {
        let WT = 0;
        if (this.view.lightsEnabled && !UT) {
          const UT = Math.min(mT, 4);
          for (; WT < this.view.lightCount && (TT[`LIGHT${WT}`] = !0, TT[`LITE_LIGHT${WT}_SLOT`] = WT, WT++, TT._needNormals = !0, WT !== UT););
        }
        for (let zT = WT; zT < 4; zT++) TT[`LIGHT${zT}`] = !1, TT[`LITE_LIGHT${zT}_SLOT`] = void 0
      }
      prepareModelDefines(TT, UT, mT, WT, zT, MT) {
        const {
          features: gT
        } = mT;
        WT._needNormals = !1, WT._needUVs = !1;
        const nT = this.view;
        this.prepareLightDefines(WT, mT.disableLighting, mT.maxSimultaneousLights), WT.MAINUV1 = !1, WT.MAINUV2 = !1;
        const HT = mT.diffuseTexture;
        HT ? (WT._needUVs = !0, WT.DIFFUSE = !0, HT.optimizeUVAllocation && (0, dT.M)(HT.matrix) ? (WT.DIFFUSEDIRECTUV = HT.uvSet + 1, WT[`MAINUV${HT.uvSet+1}`] = !0) : WT.DIFFUSEDIRECTUV = 0, HT.uvSet > 1 && this.warnOnce(`uvset:${mT.name}`, `${mT.name} samples UV set ${HT.uvSet+1}, which is not supported`)) : (WT.DIFFUSE = !1, WT.DIFFUSEDIRECTUV = 0);
        const kT = mT.opacityTexture,
          jT = mT.emissiveTexture;
        WT.OPACITY = gM(kT, "OPACITY", WT), WT.OPACITYRGB = null !== kT && kT.getAlphaFromRGB, WT.EMISSIVE = gM(jT, "EMISSIVE", WT), (kT && kT.uvSet > 1 || jT && jT.uvSet > 1) && this.warnOnce(`uvset:${mT.name}`, `${mT.name} samples a UV set past 2, which is not supported`);
        const lT = mT.reflectionTexture,
          LT = null !== lT;
        if (LT) {
          if (!this.resources.boundTexture(lT)) return !1;
          WT._needNormals = !0
        }
        WT.REFLECTION = LT, WT.REFLECTIONMAP_3D = LT, WT.REFLECTIONMAP_SKYBOX = LT, WT.REFLECTIONMAP_OPPOSITEZ = LT && (TT.useRightHandedSystem ? !lT.invertZ : lT.invertZ), WT.ROUGHNESS = LT && mT.roughness > 0, WT.REFLECTIONOVERALPHA = LT && mT.useReflectionOverAlpha, WT.LITE_REFLECTION_LUMINANCE = LT && "cube" === lT.source.kind && lT.source.luminance, (UT.skeleton || UT.morphTargetManager) && this.warnOnce(`skin:${UT.name}`, `${UT.name} has bones or morph targets, which are not supported`), WT.FOG = mT.fogEnabled && UT.applyFog && nT.fogEnabled && 0 !== nT.fogMode, WT.NONUNIFORMSCALING = UT.nonUniformScaling;
        const {
          visibility: pT,
          hasVertexAlpha: BT
        } = UT;
        WT.ALPHATEST = (0, JT.K)(mT, pT, BT), WT.ALPHAFROMDIFFUSE = (0, JT._)(mT), WT.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== mT.transparencyMode, WT.ALPHABLEND = null === mT.transparencyMode || (0, JT.H)(mT, pT, BT), WT.PREMULTIPLYALPHA = 7 === mT.alphaMode || 8 === mT.alphaMode, WT.EMISSIVEASILLUMINATION = mT.useEmissiveAsIllumination, WT.LINKEMISSIVEWITHDIFFUSE = mT.linkEmissiveWithDiffuse, WT.TWOSIDEDLIGHTING = !mT.backFaceCulling && mT.twoSidedLighting, WT.INSTANCES = "none" !== MT, WT.THIN_INSTANCES = "thin" === MT, WT.LITE_FRONT_LAYER = zT >= 1;
        for (const {
            feature: eT,
            state: YT,
            active: JT
          }
          of gT) {
          var ZT, cT;
          if (JT) null === (ZT = (cT = (0, XU.g)(eT)).prepareDefinesBeforeAttributes) || void 0 === ZT || ZT.call(cT, YT, WT, TT, UT)
        }
        this.modelPackKind(mT) && (WT._needNormals = !0), WT.NORMAL = WT._needNormals && UT.isVerticesDataPresent("normal"), WT.UV1 = WT._needUVs && UT.isVerticesDataPresent("uv"), WT.UV2 = WT._needUVs && UT.isVerticesDataPresent("uv2");
        const vT = UT.useVertexColors && UT.isVerticesDataPresent("color");
        WT.VERTEXCOLOR = vT, WT.VERTEXALPHA = UT.hasVertexAlpha && vT, WT.INSTANCESCOLOR = "none" !== MT && UT.isVerticesDataPresent("instanceColor");
        for (const {
            feature: eT,
            state: YT,
            active: JT
          }
          of gT) {
          var fT, qT;
          if (JT) null === (fT = (qT = (0, XU.g)(eT)).prepareDefines) || void 0 === fT || fT.call(qT, YT, WT, TT, UT, mT)
        }
        const iT = TT.eB();
        for (const {
            feature: eT,
            state: YT,
            active: JT
          }
          of gT) {
          var bT, OT;
          if (JT && !1 === (null === (bT = (OT = (0, XU.g)(eT)).isReadyForSubMesh) || void 0 === bT ? void 0 : bT.call(OT, YT, WT, TT, iT))) return !1
        }
        return !0
      }
    }

    function LM(TT, UT, mT) {
      return TT.codeVersion !== UT.version && function(TT, UT) {
        const mT = [],
          WT = [];
        for (const {
            feature: LT,
            state: pT,
            active: BT
          }
          of UT.features) {
          var zT, MT, gT, nT;
          if (BT) pM(null === (zT = (MT = (0, XU.g)(LT)).getCustomCode) || void 0 === zT ? void 0 : zT.call(MT, pT, "vertex", OT.e.WGSL), mT), pM(null === (gT = (nT = (0, XU.g)(LT)).getCustomCode) || void 0 === gT ? void 0 : gT.call(nT, pT, "fragment", OT.e.WGSL), WT)
        }
        const HT = [];
        for (const {
            feature: LT,
            state: pT
          }
          of UT.features) {
          var kT, jT;
          const TT = null === (kT = (jT = (0, XU.g)(LT)).getUniforms) || void 0 === kT ? void 0 : kT.call(jT, pT, OT.e.WGSL);
          for (const UT of null !== (lT = null === TT || void 0 === TT ? void 0 : TT.ubo) && void 0 !== lT ? lT : []) {
            var lT;
            UT.size && UT.type && HT.push({
              name: UT.name,
              type: UT.type,
              arraySize: UT.arraySize
            })
          }
        }
        TT.vertexCode = mT, TT.fragmentCode = WT, TT.pluginUniforms = HT, TT.codeKey = JSON.stringify([mT, WT, HT]), TT.codeVersion = UT.version
      }(TT, UT), `${mT}#${TT.codeKey}`
    }

    function pM(TT, UT) {
      if (TT)
        for (const mT in TT) TT[mT] && UT.push([mT, TT[mT]])
    }
    const BM = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class ZM {
      constructor(TT) {
        this.warnOnce = TT, this.states = new Map
      }
      renderState(TT, UT, mT, WT) {
        var zT;
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          gT = null !== (zT = TT.sideOrientation) && void 0 !== zT ? zT : UT.sideOrientation;
        UT._getWorldMatrixDeterminant() < 0 && (gT = 0 === gT ? 1 : 0);
        const nT = "triangle-list" === MT,
          HT = mT ? TT.alphaMode : 0,
          kT = (!mT || (0 === HT || TT.forceDepthWrite)) && !TT.disableDepthWrite,
          jT = nT && TT.backFaceCulling ? TT.cullBackFaces ? "back" : "front" : "none",
          lT = nT && 0 !== gT ? "ccw" : "cw",
          LT = TT.depthFunction,
          pT = nT ? TT.zOffset : 0,
          BT = nT ? TT.zOffsetUnits : 0,
          ZT = !TT.disableColorWrite;
        return WT && WT.alphaMode === HT && WT.depthWrite === kT && WT.depthFunction === LT && WT.cullMode === jT && WT.frontFace === lT && WT.zOffset === pT && WT.zOffsetUnits === BT && WT.colourWrite === ZT && WT.topology === MT ? WT : this.stateFor(HT, kT, LT, jT, lT, pT, BT, ZT, MT)
      }
      stateFor(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = `${TT}|${UT}|${mT}|${WT}|${zT}|${MT}|${gT}|${nT}|${HT}`;
        let jT = this.states.get(kT);
        if (!jT) {
          var lT;
          const LT = TT ? MU(TT) : null;
          TT && !LT && this.warnOnce(`alpha:${TT}`, `alpha mode ${TT} is not supported`), jT = {
            key: kT,
            alphaMode: TT,
            depthFunction: mT,
            zOffset: MT,
            zOffsetUnits: gT,
            topology: HT,
            blend: LT,
            depthWrite: UT,
            depthCompare: mT && null !== (lT = BM.get(mT)) && void 0 !== lT ? lT : null,
            cullMode: WT,
            frontFace: zT,
            depthBias: -gT,
            depthBiasSlopeScale: -MT,
            colourWrite: nT
          }, this.states.set(kT, jT)
        }
        return jT
      }
    }
    var cM = mT(37546);

    function vM(TT) {
      if (!TT.frozen) return -1;
      let UT = TT.version;
      for (const {
          feature: mT,
          state: WT,
          active: zT
        }
        of TT.features) {
        if (!zT || !mT.bind) continue;
        const TT = (0, XU.g)(mT).uniformsVersion;
        if (!TT) return -1;
        UT += TT(WT)
      }
      return UT
    }
    class fM {
      constructor(TT, UT, mT) {
        this.slots = TT, this.data = UT, this.textures = mT, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(TT, UT) {
        this.write4(TT, UT, 0, 0, 0, 1)
      }
      updateFloat2(TT, UT, mT) {
        this.write4(TT, UT, mT, 0, 0, 2)
      }
      updateFloat3(TT, UT, mT, WT) {
        this.write4(TT, UT, mT, WT, 0, 3)
      }
      updateFloat4(TT, UT, mT, WT, zT) {
        this.write4(TT, UT, mT, WT, zT, 4)
      }
      updateVector3(TT, UT) {
        this.write4(TT, UT.x, UT.y, UT.z, 0, 3)
      }
      updateVector4(TT, UT) {
        this.write4(TT, UT.x, UT.y, UT.z, UT.w, 4)
      }
      updateColor3(TT, UT) {
        this.write4(TT, UT.r, UT.g, UT.b, 0, 3)
      }
      updateColor4(TT, UT, mT) {
        this.write4(TT, UT.r, UT.g, UT.b, mT, 4)
      }
      updateFloatsFrom(TT, UT, mT, WT) {
        const zT = this.slots.get(TT);
        if (!zT) return;
        const MT = this.data,
          gT = zT.offset;
        for (let nT = 0; nT < WT; nT++) MT[gT + nT] = UT[mT + nT]
      }
      updateFloat3TimesFloats(TT, UT, mT, WT) {
        const zT = this.slots.get(TT);
        if (!zT) return;
        const MT = this.data,
          gT = zT.offset;
        MT[gT] = UT[mT] * WT[0], MT[gT + 1] = UT[mT + 1] * WT[1], MT[gT + 2] = UT[mT + 2] * WT[2]
      }
      R7(TT, UT) {
        const mT = this.slots.get(TT);
        mT && this.data.set(UT.m, mT.offset)
      }
      updateMatrixFloats(TT, UT) {
        const mT = this.slots.get(TT);
        mT && this.data.set(UT, mT.offset)
      }
      updateFloatArray(TT, UT) {
        const mT = this.slots.get(TT);
        if (!mT) return;
        if (!mT.arraySize || mT.stride === mT.floats) return void this.data.set(UT, mT.offset);
        const WT = Math.min(UT.length, mT.floats * mT.arraySize);
        for (let zT = 0; zT < WT; zT++) this.data[mT.offset + Math.floor(zT / mT.floats) * mT.stride + zT % mT.floats] = UT[zT]
      }
      updateArray(TT, UT) {
        this.updateFloatArray(TT, UT)
      }
      setTexture(TT, UT) {
        this.textures.set(TT, UT), this.expected.delete(TT)
      }
      expectTexture(TT) {
        this.textures.set(TT, null), this.expected.add(TT)
      }
      write4(TT, UT, mT, WT, zT, MT) {
        const gT = this.slots.get(TT);
        if (!gT) return;
        const nT = this.data,
          HT = gT.offset;
        nT[HT] = UT, MT > 1 && (nT[HT + 1] = mT), MT > 2 && (nT[HT + 2] = WT), MT > 3 && (nT[HT + 3] = zT)
      }
    }

    function qM(TT, UT) {
      const mT = kz,
        WT = cM.k,
        zT = TT.lights,
        MT = Math.min(TT.lightCount, 8);
      for (let gT = 0; gT < MT; gT++) {
        const TT = mT.lights + gT * mT.lightStride,
          MT = gT * cM.d;
        UT[TT] = zT[MT + WT.vector], UT[TT + 1] = zT[MT + WT.vector + 1], UT[TT + 2] = zT[MT + WT.vector + 2], UT[TT + 3] = zT[MT + WT.kind] === cM.h.directional ? 1 : 0, UT[TT + 4] = zT[MT + WT.diffuse], UT[TT + 5] = zT[MT + WT.diffuse + 1], UT[TT + 6] = zT[MT + WT.diffuse + 2], UT[TT + 7] = zT[MT + WT.range], UT[TT + 8] = zT[MT + WT.specular], UT[TT + 9] = zT[MT + WT.specular + 1], UT[TT + 10] = zT[MT + WT.specular + 2], UT[TT + 11] = zT[MT + WT.range]
      }
      UT[mT.fogInfos] = TT.fogMode, UT[mT.fogInfos + 1] = TT.fogStart, UT[mT.fogInfos + 2] = TT.fogEnd, UT[mT.fogInfos + 3] = TT.fogDensity, UT[mT.fogColour] = TT.fogColour[0], UT[mT.fogColour + 1] = TT.fogColour[1], UT[mT.fogColour + 2] = TT.fogColour[2], UT[mT.outputHeight] = TT.renderHeight, UT[mT.animTick] = TT.animTick, UT[mT.timeMs] = TT.timeMs
    }
    class iM {
      constructor(TT) {
        this.instancesOf = TT
      }
      refreshModelUniforms(TT, UT, mT, WT) {
        const zT = vM(mT);
        if (zT >= 0 && zT === UT.heldVersion && UT.textures.get("diffuseSampler") === mT.diffuseTexture && UT.textures.get("reflectionCubeSampler") === mT.reflectionTexture && UT.textures.get("opacitySampler") === mT.opacityTexture && UT.textures.get("emissiveSampler") === mT.emissiveTexture) return !0;
        if (zT < 0)
          for (const MT of this.instancesOf(mT)) MT.heldVersion = -1;
        return this.writeModelUniforms(TT, UT, mT, WT), UT.heldVersion = zT, !1
      }
      writeModelUniforms(TT, UT, mT, WT) {
        const {
          ubo: zT
        } = UT, MT = mT.diffuseTexture, gT = mT.diffuseColor;
        zT.updateFloat4("vDiffuseColor", gT[0], gT[1], gT[2], mT.alpha), MT && (zT.updateFloat2("vDiffuseInfos", MT.uvSet, MT.level), zT.updateMatrixFloats("diffuseMatrix", MT.matrix)), zT.updateFloat("alphaCutOff", mT.alphaCutOff), zT.updateFloatsFrom("vEmissiveColor", mT.emissiveColor, 0, 3), zT.updateFloat3TimesFloats("vAmbientColor", WT.ambientColour, 0, mT.ambientColor);
        const nT = mT.specularColor;
        zT.updateFloat4("vSpecularColor", nT[0], nT[1], nT[2], mT.specularPower), zT.setTexture("diffuseSampler", MT);
        const HT = mT.opacityTexture;
        HT && (zT.updateFloat2("vOpacityInfos", HT.uvSet, HT.level), zT.updateMatrixFloats("opacityMatrix", HT.matrix)), zT.setTexture("opacitySampler", HT);
        const kT = mT.emissiveTexture;
        kT && (zT.updateFloat2("vEmissiveInfos", kT.uvSet, kT.level), zT.updateMatrixFloats("emissiveMatrix", kT.matrix)), zT.setTexture("emissiveSampler", kT);
        const jT = mT.reflectionTexture;
        jT && zT.updateMatrixFloats("reflectionMatrix", jT.matrix), zT.updateFloat2("vReflectionInfos", jT ? jT.level * TT.iblIntensity : 0, mT.roughness), zT.setTexture("reflectionCubeSampler", jT);
        const lT = TT.eB();
        for (const {
            feature: BT,
            state: ZT,
            active: cT
          }
          of mT.features) {
          var LT, pT;
          if (cT) null === (LT = (pT = (0, XU.g)(BT)).bind) || void 0 === LT || LT.call(pT, ZT, zT, TT, lT)
        }
      }
    }

    function bM(TT) {
      const UT = TT.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(UT) ? "u32" : /i32|^vec\di$/.test(UT) ? "i32" : "f32"
    }

    function OM(TT, UT) {
      const mT = TT.getSize(),
        WT = bM(UT),
        zT = TT => 4 === mT ? `${TT}x4` : 2 === mT ? `${TT}x2` : null;
      if ("f32" === WT) {
        if (5126 === TT.type) return 1 === mT ? "float32" : mT >= 2 && mT <= 4 ? `float32x${mT}` : null;
        if (!TT.normalized) return null;
        switch (TT.type) {
          case 5121:
            return zT("unorm8");
          case 5120:
            return zT("snorm8");
          case 5123:
            return zT("unorm16");
          case 5122:
            return zT("snorm16")
        }
        return null
      }
      const MT = "u32" === WT ? "uint" : "sint";
      switch (TT.type) {
        case 5125:
        case 5124:
          return 1 === mT ? `${MT}32` : mT <= 4 ? `${MT}32x${mT}` : null;
        case 5121:
        case 5120:
          return zT(`${MT}8`);
        case 5123:
        case 5122:
          return zT(`${MT}16`)
      }
      return null
    }

    function eM(TT) {
      var UT;
      const mT = /(8|16|32)(?:x(\d))?$/.exec(TT);
      return mT ? Number(mT[1]) / 8 * Number(null !== (UT = mT[2]) && void 0 !== UT ? UT : 1) : 4
    }
    class YM {
      constructor(TT, UT, mT) {
        this.resources = TT, this.limits = UT, this.warnOnce = mT, this.layouts = new Map
      }
      resolveInputs(TT, UT, mT, WT) {
        const zT = [],
          MT = mT.program.attributes,
          gT = [];
        for (let jT = 0; jT < MT.length; jT++) {
          const mT = MT[jT],
            nT = mT.optional ? null : this.resources.vertexInput(TT, mT.name, WT);
          if (!nT) {
            const TT = bM(mT.type),
              UT = "u32" === TT ? "uint32x4" : "i32" === TT ? "sint32x4" : "float32x4";
            gT.push(null);
            const WT = zT.find((TT => null === TT.data));
            WT ? WT.attributes.push({
              shaderLocation: jT,
              offset: 0,
              format: UT
            }) : zT.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: jT,
                offset: 0,
                format: UT
              }]
            });
            continue
          }
          const HT = nT.getBuffer();
          gT.push(nT);
          const kT = OM(nT, mT.type);
          if (!kT) return this.warnOnce(`format:${UT}:${mT.name}`, `${UT}'s ${mT.name} (type ${nT.type}, size ${nT.getSize()}) has no WebGPU vertex format`), null;
          const lT = nT.getIsInstanced() ? "instance" : "vertex",
            LT = nT.byteStride,
            pT = eM(kT),
            BT = zT.find((TT => TT.data === HT && TT.stride === LT && TT.step === lT && nT.byteOffset >= TT.base && nT.byteOffset - TT.base + pT <= LT));
          BT ? BT.attributes.push({
            shaderLocation: jT,
            offset: nT.byteOffset - BT.base,
            format: kT
          }) : zT.push({
            data: HT,
            base: nT.byteOffset,
            stride: LT,
            step: lT,
            attributes: [{
              shaderLocation: jT,
              offset: 0,
              format: kT
            }]
          })
        }
        if (zT.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${UT}`, `${UT} needs ${zT.length} vertex buffers`), null;
        let nT = "";
        for (const jT of zT) {
          nT += `${jT.stride}${"instance"===jT.step?"i":"v"}`;
          for (const TT of jT.attributes) nT += `,${TT.shaderLocation}:${TT.offset}:${TT.format}`;
          nT += ";"
        }
        let HT = this.layouts.get(nT);
        HT || (HT = {
          key: nT,
          buffers: zT.map((TT => ({
            arrayStride: TT.stride,
            stepMode: TT.step,
            attributes: TT.attributes
          }))),
          instanceEnds: zT.map((TT => {
            let UT = -1;
            if ("instance" === TT.step)
              for (const mT of TT.attributes) UT = Math.max(UT, mT.offset + eM(mT.format));
            return UT
          }))
        }, this.layouts.set(nT, HT));
        const kT = zT.map((TT => TT.base));
        return {
          program: mT,
          sources: gT,
          layout: HT,
          slotData: zT.map((TT => TT.data)),
          Z2: kT,
          buffers: [],
          offsets: kT,
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

    function JM(TT, UT, mT, WT) {
      const zT = UT.program.program.attributes;
      for (let MT = 0; MT < zT.length; MT++) {
        if ((zT[MT].optional ? null : mT.vertexInput(TT, zT[MT].name, WT)) !== UT.sources[MT]) return !1
      }
      return !0
    }
    const xM = 64;
    class dM {
      constructor(TT, UT, mT, WT) {
        this.device = TT, this.layout = UT, this.frameBuffer = mT, this.label = WT, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(TT) {
        if (TT * xM <= this.data.length) return !1;
        let UT = 2 * this.data.length;
        for (; TT * xM > UT;) UT *= 2;
        const mT = new Float32Array(UT);
        return mT.set(this.data), this.data = mT, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = this.data,
          MT = TT * xM;
        let gT = zT[MT + 16] !== mT;
        for (let nT = 0; nT < 16 && !gT; nT++) gT = zT[MT + nT] !== UT[WT + nT];
        if (gT) {
          for (let TT = 0; TT < 16; TT++) zT[MT + TT] = UT[WT + TT];
          zT[MT + 16] = mT
        }
        return gT
      }
      upload(TT, UT) {
        this.device.queue.writeBuffer(this.buffer, TT * jz, this.data, TT * xM, (UT - TT) * xM)
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

    function wM(TT) {
      return TT.gpu[dT.i.lite] ??= TT.materials.map(((UT, mT) => ({
        parts: TT,
        range: mT,
        owner: TT.owner
      })))
    }

    function tM(TT) {
      var UT, mT, WT;
      return null !== (UT = null !== (mT = null === (WT = TT.parts.materials[TT.range]) || void 0 === WT ? void 0 : WT.mirror) && void 0 !== mT ? mT : TT.owner.material) && void 0 !== UT ? UT : null
    }
    const aM = ["opaque", "alphaTest", "transparent", "text"];

    function yM(TT) {
      for (const UT of aM) TT[UT].units.length = 0, TT[UT].rows.length = 0
    }
    class XM {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, yU.c)("Lite: ")
      }
      attach(TT, UT) {
        this.model = TT, this.mirror = UT
      }
      get worlds() {
        return this.model.nodes.Nl
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(TT) {
        return this.groups.get(TT)
      }
      forEachGroup(TT) {
        this.groups.forEach(TT)
      }
      forEachSelected(TT) {
        for (const [UT, mT] of this.groups)
          for (const WT of aM)
            for (const zT of mT[WT].units) TT(zT.owner, "text" === WT ? "transparent" : WT, UT)
      }
      select(TT, UT) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(yM);
        const {
          model: mT,
          mirror: WT
        } = this;
        if (!mT || !WT || !TT) return;
        this.rows.length < mT.nodes.fl && (this.rows = new Int32Array(mT.nodes.fl));
        const zT = this.rows,
          MT = mT.meshes;
        for (let nT = 0; nT < MT.looseCount; nT++) {
          const TT = MT.loose[nT],
            mT = WT.nodes[TT];
          mT && !mT.isBlocked && mT.isEnabled() && !mT.gp.hasAZeroComponent && MT.selects(TT, UT.frustum) && (this.activate(mT, TT), this.selectedCount++)
        }
        const gT = MT.selectTextPlanes(UT.frustum, zT);
        for (let nT = 0; nT < gT; nT++) {
          const UT = zT[nT],
            MT = WT.nodes[UT],
            gT = mT.meshes.parts[UT];
          if (!MT.isVisible || !(MT.visibility > 0) || 0 === (MT.layerMask & TT.layerMask) || !gT) continue;
          const HT = this.groupOf(mT.meshes.layer[UT]).text;
          for (const TT of wM(gT)) HT.units.push(TT), HT.rows.push(UT);
          this.selectedCount++
        }
      }
      instanceBatch(TT) {
        const UT = this.batchOf(TT);
        return UT.dispatched || (UT.dispatched = UT.renderSelf = !0, UT.row = this.rowOf(TT)), UT
      }
      rowOf(TT) {
        return TT.row
      }
      activate(TT, UT) {
        if (!TT.RP) {
          const mT = TT;
          if (mT.ZzT) {
            const TT = this.batchOf(mT);
            TT.dispatched = !0, TT.renderSelf = !0, TT.row = UT
          }
          return void this.dispatch(mT, UT, UT)
        }
        const mT = TT,
          WT = mT.czT;
        if (WT._getWorldMatrixDeterminant() >= 0 !== mT._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${WT.name}`, `A mirrored InstancedMesh of ${WT.name} is not drawn yet`);
        const zT = this.batchOf(WT);
        zT.instances.push(mT), zT.rows.push(UT), zT.dispatched || (zT.dispatched = !0, this.dispatch(WT, UT, this.rowOf(WT)))
      }
      batchOf(TT) {
        let UT = this.batches.get(TT);
        return UT || (UT = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(TT, UT)), UT.frame !== this.frame && (UT.frame = this.frame, UT.dispatched = !1, UT.renderSelf = !1, UT.instances.length = 0, UT.rows.length = 0), UT
      }
      dispatch(TT, UT, mT) {
        const {
          layer: WT,
          parts: zT
        } = this.model.meshes;
        if (!zT[UT]) return;
        const MT = this.groupOf(WT[UT]),
          gT = TT;
        for (const nT of wM(zT[UT])) {
          const TT = tM(nT);
          if (!TT) continue;
          const UT = TT.needAlphaBlendingForMesh(gT) ? MT.transparent : TT.needAlphaTestingForMesh(gT) ? MT.alphaTest : MT.opaque;
          UT.units.push(nT), UT.rows.push(mT)
        }
      }
      groupOf(TT) {
        let UT = this.groups.get(TT);
        return UT || (UT = {
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
        }, this.groups.set(TT, UT)), UT
      }
    }

    function IM(TT) {
      TT.opaque.length = 0, TT.transparent.length = 0
    }
    class QM {
      constructor() {
        this.fn = new Map, this.enabled = [], this.groups = new Map, this.Jp = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(TT) {
        if (this.fn.has(TT)) return;
        const UT = {
          mesh: TT,
          observer: TT.onEffectiveEnabledStateChangedObservable.add((TT => {
            this.Qy(UT, TT)
          })),
          index: -1,
          steady: null
        };
        this.fn.set(TT, UT), this.Qy(UT, TT.isEnabled())
      }
      remove(TT) {
        const UT = this.fn.get(TT);
        UT && (UT.observer.remove(!0), this.Qy(UT, !1), this.fn.delete(TT))
      }
      dropSteady() {
        for (const TT of this.fn.values()) TT.steady = null
      }
      base(TT) {
        return this.fn.get(TT)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          fn: this.fn.size
        }
      }
      forEachSelected(TT) {
        for (const [UT, mT] of this.groups) {
          for (const WT of mT.opaque) TT(WT.owner, "opaque", UT);
          for (const WT of mT.transparent) TT(WT.owner, "transparent", UT)
        }
        for (const UT of this.Jp) TT(UT.mesh, "opaque", 0)
      }
      group(TT) {
        return this.groups.get(TT)
      }
      forEachGroup(TT) {
        this.groups.forEach(TT)
      }
      select(TT, UT) {
        if (this.drawn = 0, this.selected = 0, this.Jp.length = 0, this.groups.forEach(IM), !TT) return;
        const mT = this.enabled;
        for (let WT = 0; WT < mT.length; WT++) {
          const zT = mT[WT];
          if (zT.steady && UT(zT, TT)) {
            this.selected++, this.Jp.push(zT);
            continue
          }
          const MT = zT.mesh;
          if (MT.isBlocked || MT.gp.hasAZeroComponent) continue;
          if (!MT.isVisible || MT.visibility <= 0 || 0 === (MT.layerMask & TT.layerMask)) continue;
          if (MT.ZzT) {
            this.warned.has(MT.name) || (this.warned.add(MT.name), console.warn(`Lite: thin instance base ${MT.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: gT
          } = MT;
          if (!gT) continue;
          MT.computeWorldMatrix(), this.selected++;
          const nT = this.listsFor(MT.renderingGroupId);
          for (const TT of wM(gT)) {
            const UT = tM(TT);
            UT && (UT.needAlphaBlendingForMesh(MT) ? nT.transparent.push(TT) : nT.opaque.push(TT))
          }
        }
      }
      Qy(TT, UT) {
        if (UT === TT.index >= 0) return;
        TT.steady = null;
        const mT = this.enabled;
        if (UT) TT.index = mT.length, mT.push(TT);
        else {
          const UT = mT.pop();
          UT !== TT && (mT[TT.index] = UT, UT.index = TT.index), TT.index = -1
        }
      }
      listsFor(TT) {
        let UT = this.groups.get(TT);
        return UT || (UT = {
          opaque: [],
          transparent: []
        }, this.groups.set(TT, UT)), UT
      }
    }
    var sM = mT(39700);
    class FM {
      constructor() {
        this.bundle = null, this.stale = !0, this.fn = new Set
      }
    }
    class PM {
      constructor(TT, UT, mT) {
        this.device = TT, this.slots = UT, this.host = mT, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new FM, this.FQ = new FM, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Rz, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = TT => {
          TT.seen !== this.frame && (TT.draw && (TT.draw = null, this.args[5 * TT.slot + 1] = 0, this.argsDirty = !0, this.FQ.stale ||= TT.FQ), this.frame - TT.seen > 120 && (this.records.delete(TT.unit), this.freeSlots.push(TT.slot), TT.recorded && (this.bundleOf(TT).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(TT) {
          var UT, mT;
          let WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (UT = null === (mT = globalThis.navigator) || void 0 === mT ? void 0 : mT.userAgent) && void 0 !== UT ? UT : "";
          const zT = TT.adapterInfo;
          return "intel" === (null === zT || void 0 === zT ? void 0 : zT.vendor) && "gen-12lp" === zT.architecture && WT.includes("Windows")
        }(TT), (0, sM.L)(this.direct)
      }
      fY() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, sM.L)(this.directThisFrame)
      }
      add(TT, UT, mT, WT) {
        let zT = this.records.get(TT);
        return zT || (zT = this.createRecord(TT), this.records.set(TT, zT)), zT.recorded && uM(zT, UT) || (this.bundleOf(zT).stale = !0), this.place(zT, UT, mT, WT), zT
      }
      bundleOf(TT) {
        return TT.FQ ? this.FQ : this.main
      }
      addAgain(TT, UT, mT, WT) {
        TT.recorded || (this.bundleOf(TT).stale = !0), this.place(TT, UT, mT, WT)
      }
      place(TT, UT, mT, WT) {
        TT.seen = this.frame, TT.FQ && null === TT.draw && (this.FQ.stale = !0), TT.draw = UT, this.drawn++, mT && this.slots.write(TT.slot, mT, WT) && (this.slotsFrom = Math.min(this.slotsFrom, TT.slot), this.slotsTo = Math.max(this.slotsTo, TT.slot));
        const zT = this.args,
          MT = 5 * TT.slot;
        zT[MT] === UT.count && zT[MT + 1] === UT.instances && zT[MT + 2] === UT.first || (zT[MT] = UT.count, zT[MT + 1] = UT.instances, zT[MT + 2] = UT.first, this.argsDirty = !0, this.FQ.stale ||= TT.FQ)
      }
      qY() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(TT) {
        for (const UT of this.records.values()) UT.draw && UT.seen === this.frame && !UT.FQ && TT(UT.draw, this.slots.data, UT.slot * jz / 4)
      }
      resourceDestroyed(TT) {
        this.main.stale ||= this.main.fn.has(TT), this.FQ.stale ||= this.FQ.fn.has(TT)
      }
      execute(TT, UT, mT) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(TT, UT, mT, "direct"), this.drawn;
        const WT = this.host.sceneGroup(UT);
        if (!WT) return this.main.bundle = null, this.FQ.bundle = null, this.recordedSceneGroup = null, this.encode(TT, UT, mT, "direct"), this.drawn;
        this.recordedTarget === mT && this.recordedSceneGroup === WT || (this.recordedTarget = mT, this.recordedSceneGroup = WT, this.main.stale = !0, this.FQ.stale = !0);
        const zT = this.main,
          MT = this.FQ;
        let gT = !1;
        !zT.stale && zT.bundle || (zT.bundle = this.record(UT, mT, WT, "indirect"), gT = !0);
        const nT = (0, sM.m)();
        return (MT.stale || this.rangedEpoch !== nT) && (this.rangedEpoch = nT, MT.bundle = this.drawsRanged() ? this.record(UT, mT, WT, "FQ") : this.noRangedBundle(), gT = !0), gT && (this.bundles = MT.bundle ? [zT.bundle, MT.bundle] : [zT.bundle]), TT.executeBundles(this.bundles), TT.setBindGroup(0, WT), this.drawn
      }
      record(TT, UT, mT, WT) {
        const zT = this.device.createRenderBundleEncoder({
          label: "FQ" === WT ? "thin-bases-ranged" : "thin-bases",
          colorFormats: TT._colorFormat ? [TT._colorFormat] : [],
          depthStencilFormat: TT._depthStencilFormat,
          sampleCount: TT._sampleCount
        });
        return zT.setBindGroup(0, mT), this.encode(zT, TT, UT, WT), zT.finish()
      }
      noRangedBundle() {
        for (const TT of this.records.values()) TT.FQ && (TT.recorded = !1);
        return this.FQ.fn.clear(), this.FQ.stale = !1, null
      }
      drawsRanged() {
        for (const TT of this.records.values())
          if (TT.FQ && TT.draw) return !0;
        return !1
      }
      encode(TT, UT, mT, WT) {
        const zT = [];
        for (const HT of this.records.values()) "direct" !== WT && HT.FQ !== ("FQ" === WT) || (HT.recorded = !1, HT.draw && zT.push(HT));
        zT.sort(CM);
        const MT = "direct" === WT ? null : "FQ" === WT ? this.FQ : this.main;
        null === MT || void 0 === MT || MT.fn.clear(), this.binder.reset();
        let gT = !1;
        for (const HT of zT) {
          var nT;
          const zT = HT.draw,
            kT = this.host.pipelineFor(zT, UT, mT);
          if (!kT) {
            this.host.pipelineCompiling(zT, mT) ? gT = !0 : MT && this.keep(HT, zT, MT.fn);
            continue
          }
          let jT;
          if (HT.FQ && "indirect" !== WT) {
            const TT = HT.unit.owner;
            jT = "direct" === WT && (0, sM.y)(TT) || (0, sM.p)(TT) || void 0
          }
          if (MT && this.keep(HT, zT, MT.fn), 0 === (null === (nT = jT) || void 0 === nT ? void 0 : nT.count)) continue;
          this.binder.bind(TT, zT, kT, this.slots.bindGroup, HT.slot * jz);
          const lT = 5 * HT.slot;
          if ("indirect" === WT) {
            zT.indexBuffer ? TT.drawIndexedIndirect(this.argsBuffer, 4 * lT) : TT.drawIndirect(this.argsBuffer, 4 * lT);
            continue
          }
          const LT = this.args;
          jT ? VM(TT, null !== zT.indexBuffer, LT, lT, jT) : zT.indexBuffer ? TT.drawIndexed(LT[lT], LT[lT + 1], LT[lT + 2], 0, 0) : TT.draw(LT[lT], LT[lT + 1], LT[lT + 2], 0)
        }
        MT && (MT.stale = gT)
      }
      keep(TT, UT, mT) {
        TT.recorded = !0, TT.pipelineKey = UT.pipelineKey, TT.materialGroup = UT.material.bindGroup, TT.vertexBuffers.length = 0, TT.vertexBuffers.push(...UT.vertexBuffers), TT.vertexOffsets = UT.vertexOffsets, TT.indexBuffer = UT.indexBuffer, TT.indexFormat = UT.indexFormat;
        for (const WT of UT.vertexBuffers) mT.add(WT);
        UT.indexBuffer && mT.add(UT.indexBuffer), mT.add(UT.material.buffer);
        for (const WT of UT.material.bound) WT && mT.add(WT)
      }
      createRecord(TT) {
        let UT = this.freeSlots.pop();
        return void 0 === UT && (UT = this.slotCount++, this.grow()), {
          unit: TT,
          slot: UT,
          FQ: void 0 !== (0, sM.p)(TT.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.FQ.stale = !0), 5 * this.slotCount > this.args.length) {
          const TT = new Uint32Array(2 * this.args.length);
          TT.set(this.args), this.args = TT, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function VM(TT, UT, mT, WT, zT) {
      const MT = mT[WT + 1],
        gT = zT.data;
      for (let nT = 0; nT < zT.count; nT++) {
        const zT = Math.min(gT[2 * nT], MT),
          HT = Math.min(gT[2 * nT + 1], MT - zT);
        0 !== HT && (UT ? TT.drawIndexed(mT[WT], HT, mT[WT + 2], 0, zT) : TT.draw(mT[WT], HT, mT[WT + 2], zT))
      }
    }

    function uM(TT, UT) {
      if (TT.pipelineKey !== UT.pipelineKey || TT.materialGroup !== UT.material.bindGroup || TT.indexBuffer !== UT.indexBuffer || TT.indexFormat !== UT.indexFormat || TT.vertexOffsets !== UT.vertexOffsets || TT.vertexBuffers.length !== UT.vertexBuffers.length) return !1;
      for (let mT = 0; mT < TT.vertexBuffers.length; mT++)
        if (TT.vertexBuffers[mT] !== UT.vertexBuffers[mT]) return !1;
      return !0
    }

    function CM(TT, UT) {
      return UM(TT.draw, UT.draw)
    }
    const rM = new WeakMap,
      KM = {
        depth: !1,
        sunShadow: !1
      };

    function SM(TT, UT) {
      let mT = rM.get(TT);
      mT || (mT = new Map, rM.set(TT, mT));
      const WT = `${UT.depth?"-depth":""}${UT.sunShadow?"-shadow":""}${UT.shadowMask?"-mask":""}`;
      let zT = mT.get(WT);
      if (!zT) {
        const MT = [{
          binding: DU.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: DU.m
          }
        }, {
          binding: DU.E,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        UT.depth && MT.push({
          binding: DU.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), UT.sunShadow && MT.push(... function() {
          const TT = GPUShaderStage.FRAGMENT,
            UT = DU.x;
          return [{
            binding: UT.uniform,
            visibility: TT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: UT.iL,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: UT.special,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: UT.volume,
            visibility: TT,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: UT.sampler,
            visibility: TT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: UT.entities,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: UT.entityGrids,
            visibility: TT,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), UT.shadowMask && MT.push({
          binding: DU.A,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), zT = TT.createBindGroupLayout({
          label: `${UT.depth?"terrain-":""}shader-pack-inputs${WT}`,
          entries: MT
        }), mT.set(WT, zT)
      }
      return zT
    }

    function GM(TT) {
      return SM(TT, KM)
    }

    function NM(TT, UT) {
      if (!UT) return !1;
      const mT = (0, oU.d)(TT);
      return !!mT && gW(mT, UT)
    }

    function EM(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!XW(UT)) return [];
      return [SM(TT, {
        depth: dW(UT.packVariant),
        sunShadow: NM(UT.packVariant, mT),
        shadowMask: WT
      })]
    }
    class hM {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = TT, this.sunShadow = mT, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(DU.m), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = TT.createBuffer({
          label: "shader-pack-inputs",
          size: DU.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const WT = (0, DU.F)(UT);
        this.textures = TT.createBuffer({
          label: "shader-pack-textures",
          size: WT.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), TT.queue.writeBuffer(this.textures, 0, WT), this.bindGroup = TT.createBindGroup({
          label: "shader-pack-inputs",
          layout: GM(TT),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: DU.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: DU.E,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(TT, UT, mT) {
        (0, DU.K)(this.data, {
          seconds: TT.seconds(),
          lit: mT,
          renderOffset: TT.renderOffset(),
          zTT: TT.zTT(),
          eyePosition: UT,
          shadowDirection: TT.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const WT = UT ? this.sunShadow : null;
        if ((UT || mT) && !WT) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!TT && !WT) return this.bindGroup;
        (TT && TT !== this.depthView || mT && mT !== this.maskView) && (this.depthView = null !== TT && void 0 !== TT ? TT : this.depthView, this.maskView = null !== mT && void 0 !== mT ? mT : this.maskView, this.groups.clear());
        const zT = (TT ? 1 : 0) | (WT ? 2 : 0) | (mT ? 4 : 0);
        let MT = this.groups.get(zT);
        if (!MT) {
          const UT = this.entries();
          TT && UT.push({
            binding: DU.u,
            resource: TT
          }), WT && UT.push(...WT.entries()), mT && UT.push({
            binding: DU.A,
            resource: mT
          }), MT = this.device.createBindGroup({
            label: `${TT||mT?"terrain-":""}shader-pack-inputs${TT?"-depth":""}${WT?"-shadow":""}${mT?"-mask":""}`,
            layout: SM(this.device, {
              depth: !!TT,
              sunShadow: !!WT,
              shadowMask: !!mT
            }),
            entries: UT
          }), this.groups.set(zT, MT)
        }
        return MT
      }
      bind(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        TT.setBindGroup(DU.i, this.bindGroupFor(UT, mT, WT))
      }
    }

    function DM(TT, UT, mT) {
      if (TT.gpuVersion === UT.gpuBuffersVersion) return !0;
      let WT;
      do {
        if (WT = UT.gpuBuffersVersion, !oM(TT, UT, mT)) return !1
      } while (UT.gpuBuffersVersion !== WT);
      return TT.gpuVersion = WT, TT.fitInstances = 0, !0
    }

    function oM(TT, UT, mT) {
      let WT = null;
      for (let MT = 0; MT < TT.slotData.length; MT++) {
        var zT;
        const gT = TT.slotData[MT],
          nT = gT ? UT.gpuBuffer(gT) : mT;
        if (!nT) return !1;
        gT && TT.layout.instanceEnds[MT] < 0 && UT.cover(gT, Number.POSITIVE_INFINITY), TT.buffers[MT] = nT;
        const HT = TT.Z2[MT] + (gT ? UT.gpuOffset(gT) : 0);
        HT !== (null !== (zT = WT) && void 0 !== zT ? zT : TT.offsets)[MT] && (WT ??= TT.offsets.slice(), WT[MT] = HT), TT.ends[MT] = gT ? UT.gpuEnd(gT) : nT.size
      }
      return WT && (TT.offsets = WT), !0
    }

    function AM(TT, UT, mT, WT) {
      if (UT <= TT.fitInstances) return null;
      const {
        layout: zT,
        ends: MT,
        offsets: gT,
        slotData: nT,
        Z2: HT
      } = TT;
      let kT = !1;
      for (let jT = 0; jT < zT.buffers.length; jT++) {
        const TT = zT.instanceEnds[jT];
        if (TT < 0) continue;
        const WT = (UT - 1) * zT.buffers[jT].arrayStride + TT;
        if (MT[jT] - gT[jT] < WT) return {
          index: jT,
          needed: WT
        };
        const lT = nT[jT];
        lT && mT.cover(lT, HT[jT] + WT) && (kT = !0)
      }
      return kT && DM(TT, mT, WT), TT.fitInstances = UT, null
    }
    var RM = mT(37947),
      Tg = mT(37976);
    const Ug = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      mg = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Wg = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      zg = `((vertexInputs.aPackedLightLevels >> 16u) | ${aU.c.placed}u)`,
      Mg = "u32(vertexInputs.aShaderPackItem.x)",
      gg = `${aU.c.lifeform}u`;

    function ng(TT) {
      return "item" === TT.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Hg = "bloxdSpEnchant",
      kg = "floor(finalWorld[3].xyz)";

    function jg(TT, UT, mT) {
      return "placed" === UT.kind && TT.reads[mT].includes("bloxdFragmentBlockPosition")
    }

    function lg(TT, UT) {
      let [mT, WT] = TT;
      return mT === UT.point && WT === UT.code
    }

    function Lg(TT, UT) {
      var mT, WT, zT;
      const MT = null === (mT = TT.find((TT => TT.texture))) || void 0 === mT ? void 0 : mT.texture,
        gT = null === (WT = TT.find((TT => TT.enchantTier))) || void 0 === WT ? void 0 : WT.enchantTier,
        nT = null === (zT = TT.find((TT => TT.overlay))) || void 0 === zT ? void 0 : zT.overlay,
        HT = nT ? UT.filter((TT => lg(TT, nT))).length : 0;
      return nT && 1 === HT ? {
        texture: MT,
        overlay: nT,
        enchantTier: gT
      } : {
        texture: MT,
        enchantTier: gT
      }
    }

    function pg(TT) {
      if ("item" === TT.kind) {
        return {
          vertexFlags: `(${Mg} & 0xffffu)`,
          varying: "vPackItem",
          value: Mg,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return TT.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: zg,
        varying: "vPackFlags",
        value: zg,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Bg(TT) {
      return "lifeform" === TT.kind ? gg : "0u"
    }

    function Zg(TT) {
      return !!TT.BLOXD_PLUGIN_ENCHANTMENT
    }

    function cg(TT, UT) {
      const {
        enchantTier: mT
      } = UT;
      return mT && Zg(UT.defines) && "lifeform" === UT.kind && Og(TT, "enchantTier") ? mT : null
    }

    function vg(TT, UT) {
      return Zg(UT.defines) && Og(TT, "enchantSpeed")
    }

    function fg(TT) {
      const {
        overlay: UT,
        defines: mT
      } = TT;
      if (!UT || !mT.DIFFUSE) return null;
      const WT = mT.VERTEXCOLOR || mT.INSTANCESCOLOR && mT.INSTANCES;
      return `vec4f(${UT.colour}.rgb * uniforms.vDiffuseInfos.y${WT?" * fragmentInputs.vColor.rgb":""}, ${UT.colour}.a)`
    }
    const qg = "fragmentInputs.vPackTexture";

    function ig(TT) {
      const {
        atlas: UT,
        defines: mT,
        texture: WT
      } = TT;
      if (UT || !mT.DIFFUSE) return null;
      if (WT) return {
        texture: "diffuseSampler",
        ...WT
      };
      const zT = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===mT.DIFFUSEDIRECTUV?"vMainUV1":2===mT.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== TT.kind) return zT;
      if (!mT.BLOXD_PLUGIN_ANIMATED) return {
        ...zT,
        id: qg
      };
      const MT = OT.e.WGSL,
        gT = (0, OT.zb)(MT, "uAnimStatesNum"),
        nT = (0, OT.db)(MT, (0, RM.e)(MT), gT),
        HT = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${gT})`,
        layers: [nT],
        uv: `vec2f(${HT}.x, ${HT}.y * ${gT} - ${nT})`,
        levelUv: HT,
        id: qg
      }
    }

    function bg(TT, UT) {
      return "box" === UT.kind && !!TT.hooks.surface && null !== ig(UT)
    }

    function Og(TT, UT) {
      return TT.reads.fragment.includes(UT)
    }

    function eg(TT) {
      return !!TT.BLOXD_LIGHTING && !TT.BLOXD_UNLIT
    }

    function Yg(TT, UT, mT, WT) {
      const zT = TT.filter((TT => {
        let [mT, WT] = TT;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === mT && WT === UT
      }));
      if (1 !== zT.length) throw new Error(`A model program for shader packs has ${0===zT.length?"no":"more than one"} ${WT} code before fog (lite/modelShaderPack.ts)`);
      return TT.map((TT => TT === zT[0] ? [TT[0], mT] : TT))
    }

    function Jg(TT, UT, mT, WT) {
      const {
        hooks: zT
      } = TT, {
        kind: MT,
        defines: gT
      } = UT, nT = [...mT];
      var HT;
      UT.atlas && zT.surface && nT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", pW("atlasIdxIn")]), "item" === MT && nT.push(["CUSTOM_VERTEX_DEFINITIONS", (0, OT.f)(OT.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), bg(TT, UT) && nT.push(["CUSTOM_VERTEX_DEFINITIONS", (0, OT.f)(OT.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (HT = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${lW}[min(u32(${HT}) - 1u, arrayLength(&${lW}) - 1u)], ${HT} > 0.5);\n`)]);
      const kT = pg(UT);
      kT && (zT.surface || zT.light) && nT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${kT.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${kT.varying} = ${kT.value};`]);
      let jT = WT;
      if (jg(TT, UT, "fragment") && (nT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${kg});`]), jT = [...jT, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Og(TT, "localPosition") && nT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${ng(UT)};`]), Zg(gT) && zT.surface) {
        vg(TT, UT) && nT.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const mT = cg(TT, UT);
        mT && nT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${mT});`]);
        const WT = (0, OT.lb)(OT.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        jT = [...Yg(jT, (0, Tg.e)(OT.e.WGSL), WT, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Tg.b)(Hg)]]
      }
      const {
        overlay: lT
      } = UT;
      lT && fg(UT) && zT.surface && (jT = jT.filter((TT => !lg(TT, lT))));
      const LT = zT.light ? function(TT) {
        return "placed" === TT.kind ? {
          name: "terrain",
          engine: (0, NU.T)(OT.e.WGSL),
          pack: (0, NU.jb)(OT.e.WGSL)
        } : TT.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, NU.Q)(OT.e.WGSL),
          pack: (0, NU.fb)(OT.e.WGSL)
        } : null
      }(UT) : null;
      if (LT && (jT = Yg(jT, LT.engine, LT.pack, `${LT.name} light`), "placed" !== MT && eg(gT))) {
        const TT = gT.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, OT.zb)(OT.e.WGSL, "uEntityLightLevels") : (0, OT.Eb)(OT.e.WGSL, "aLightLevels");
        nT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${NU.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, NU.hb)(OT.e.WGSL, TT)])
      }
      return {
        vertexCode: nT,
        fragmentCode: jT
      }
    }

    function xg(TT, UT, mT, WT) {
      return zW(TT, UT, mT, WT, "model")
    }
    const dg = "\t@builtin(position) position: vec4f,\n";

    function wg(TT, UT) {
      const mT = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(TT)[0];
      return `${mT}${UT}${TT.slice(mT.length)}`
    }

    function tg(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: zT
      } = UT, MT = gW(UT, WT), {
        kind: gT,
        defines: nT
      } = mT, HT = function(TT, UT) {
        var mT, WT, zT;
        const {
          defines: MT
        } = UT, gT = pg(UT), nT = !!MT.FOG, HT = Zg(MT), kT = null !== (mT = null === gT || void 0 === gT ? void 0 : gT.enchantTier) && void 0 !== mT ? mT : cg(TT, UT) ? "fragmentInputs.vPackEnchantTier" : "0u", jT = "lifeform" === UT.kind && !MT.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (WT = null === gT || void 0 === gT ? void 0 : gT.vertexFlags) && void 0 !== WT ? WT : Bg(UT),
          vertexLocalPosition: ng(UT),
          flags: null !== (zT = null === gT || void 0 === gT ? void 0 : gT.flags) && void 0 !== zT ? zT : Bg(UT),
          normal: "normalW",
          alpha: jT ? "alpha * baseColor.a" : "alpha",
          alphaOut: jT ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: nT ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: nT ? "1.0 - fog" : "0.0",
          enchantTier: kT,
          enchantColour: HT ? `${Hg}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: vg(TT, UT) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Og(TT, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: fg(UT)
        }
      }(UT, mT), kT = TT.textures.filter((TT => /^textureAtlas\d+$/.test(TT.name))).length, jT = mT.atlas && kT > 0 ? {
        count: kT,
        layers: mT.atlas.layers,
        width: mT.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: TT.material.slots.has("uAnimDataPerTex") ? (UT, mT) => oW(UT, mT, function(TT) {
          const UT = TT.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Cl: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: TT => `uniforms.uAnimDataPerTex[${TT}]${UT}`
          }
        }(TT)) : null
      } : null, lT = "placed" === gT ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", LT = null !== jT && void 0 !== jT ? jT : ig(mT), pT = function(TT, mT) {
        let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,DU.H)()}${HW(UT,mT)}${WT}${ZW(TT)}${UW}${lT}${UT.code}`
      };
      let {
        vertex: BT,
        fragment: ZT
      } = TT;
      const cT = vW(zT, HT);
      if (cT) {
        const TT = jg(UT, mT, "vertex") ? `\tbloxdSpCell = ${kg};\n` : "";
        BT = xg(BT, Ug, `${TT}${cT.slice(1)}${Ug}`, "vertex")
      }
      const vT = `${kW(UT,MT,function(TT,UT){return UT.TWOSIDEDLIGHTING?TT:`select(-(${TT}), ${TT}, fragmentInputs.frontFacing)`}(HT.normal,nT),HT.flags)}${fW(zT,UT.strict,UT.program,LT,HT)}`;
      vT && (ZT = xg(ZT, mg, `${vT.slice(1)}${mg}`, "surface")), MT && UT.sunShadow && !nT.TWOSIDEDLIGHTING && (ZT = xg(ZT, dg, `${dg}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const fT = bW(zT);
      if (fT) {
        const TT = iW(zT, eg(nT), !0, HT);
        ZT = xg(ZT, Wg, `${TT}${fT.slice(1)}${Wg}`, "light")
      }
      const qT = bg(UT, mT) ? LW : "";
      return {
        ...TT,
        vertex: wg(BT, pT(jT, !1, qT)),
        fragment: wg(ZT, pT(LT, MT))
      }
    }
    const ag = {
      name: "earthSky",
      uniqueId: -1
    };
    class yg {
      constructor(TT, UT) {
        this.resources = TT, this.epoch = UT, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const TT of this.instances.values()) TT.released = !0, this.resources.destroyBuffer(TT.buffer);
        this.instances.clear()
      }
    }

    function Xg(TT) {
      return TT.failed && null !== TT.packGroup
    }
    class Ig {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QM,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new XM;
        this.device = TT, this.resources = UT, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.I3 = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new Rz, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new iM((TT => this.modelSlot(TT).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, yU.c)("Lite: "), this.renderStates = new ZM(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (TT, UT) => this.keepSteady(TT, UT), this.lists = void 0, this.slotCount = 0, this.I3 = WT, this.modelMeshes = zT, this.lists = new TM(zT, WT, this, this.warnOnce), this.drawDefines = new lM(UT, this.warnOnce, ((TT, UT, mT) => this.programWithModel(TT, UT, mT)), Xg), this.vertexLayouts = new YM(UT, TT.limits, this.warnOnce), this.sceneLayout = eU(TT), this.frameLayout = TT.createBindGroupLayout({
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
        }), this.frameBuffer = TT.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new dM(TT, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = TT.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new PM(TT, new dM(TT, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (TT, UT, mT) => this.pipelineFor(TT, UT, mT),
          pipelineCompiling: (TT, UT) => !TT.program.failed && !1 !== this.pipelines.get(`${TT.pipelineKey}|${UT}`),
          sceneGroup: TT => {
            const UT = mT(TT);
            return UT || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), UT
          }
        }), UT.onDestroy = TT => {
          this.thinBundle.resourceDestroyed(TT)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const zT = {
          order: TT,
          isTransparent: UT,
          _direct: !UT,
          bind: (TT, UT) => this.createBinding(zT, UT, mT, WT)
        };
        return zT
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(TT, UT, mT) {
        var WT;
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = UT, this.drawDefines.view = UT, this.thinBundle.fY(), this.writeFrameUniforms();
        const MT = null !== (WT = null === zT || void 0 === zT ? void 0 : zT.defineFor("model")) && void 0 !== WT ? WT : 0;
        this.drawDefines.modelPackVariant = MT, zT && 0 !== MT && (this.packInputs ??= new hM(this.device, zT.textureLayers(), this.sunShadow), this.packInputs.write(zT, UT.eye, zT.dZ())), this.lists.clear(), this.slotCount = 0;
        const gT = TT.activeCamera;
        this.I3.select(gT, this.keepSteadyBase), this.modelMeshes.select(gT, UT), mT && this.pushEarthSky(mT), this.lists.collect(TT), this.thinBundle.qY(), this.uploadMeshSlots()
      }
      pushDraws(TT, UT, mT, WT, zT, MT) {
        let gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const nT = MT.length;
        for (let HT = 0; HT < mT; HT++) {
          const mT = UT[HT];
          let nT = this.retainedDraw(TT, mT, WT, zT);
          if (void 0 === nT && (nT = this.drawFor(TT, mT, WT, zT), this.retain(mT, nT)), nT) {
            const TT = mT.owner,
              UT = gT ? gT[HT] : -1;
            nT.slotOffset = UT < 0 ? this.writeMeshSlot(TT.getWorldMatrix().m, TT.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[UT], 16 * UT), MT.push(nT)
          }
        }
        return MT.length - nT
      }
      bundleDraws(TT, UT, mT) {
        let WT = 0;
        for (const zT of UT) {
          let UT = this.retainedDraw(TT, zT, mT, !1);
          const MT = void 0 !== UT;
          if (void 0 === UT && (UT = this.drawFor(TT, zT, mT, !1), this.retain(zT, UT)), UT) {
            const TT = zT.owner,
              mT = this.thinBundle.add(zT, UT, TT.getWorldMatrix().m, TT.visibility);
            MT && this.steadyFrom(zT, UT, mT), WT++
          }
        }
        return WT
      }
      steadyFrom(TT, UT, mT) {
        const WT = TT.owner,
          zT = this.I3.base(WT),
          MT = WT.material,
          {
            drawState: gT,
            instance: nT
          } = UT.inputs.retained;
        if (!zT || !MT || 1 !== TT.parts.materials.length || tM(TT) !== MT) return;
        const HT = zT.steady ??= {
          unit: TT,
          material: MT,
          visibility: 1,
          draw: UT,
          record: mT,
          drawState: gT,
          instance: nT,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        HT.unit = TT, HT.material = MT, HT.visibility = WT.visibility, HT.draw = UT, HT.record = mT, HT.drawState = gT, HT.instance = nT, HT.bindGroup = nT.bindGroup, HT.gpuVersion = this.resources.gpuBuffersVersion, HT.fitInstances = UT.inputs.fitInstances, HT.worldFlag = WT.getWorldMatrix().updateFlag, HT.handedFrame = this.frame
      }
      keepSteady(TT, UT) {
        const mT = TT.steady;
        if (mT.handedFrame !== this.frame - 1 || (this.frame + mT.phase) % 8 === 0) return !1;
        const WT = TT.mesh,
          {
            unit: zT,
            draw: MT,
            instance: gT,
            drawState: nT
          } = mT,
          HT = WT.forcedInstanceCount || WT.i5;
        if (!WT.isVisible || WT.ZzT || WT.visibility !== mT.visibility || 0 === (WT.layerMask & UT.layerMask) || WT.material !== mT.material || 0 !== WT.renderingGroupId || WT.hasVertexAlpha || !this.drawDefines.definesHold(nT, zT, nT.instancing) || mT.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(MT.inputs, zT, nT.instancing, MT.program) || MT.program.failed || gT.released || HT <= 0 || HT > mT.fitInstances) return !1;
        if (gT.frame !== this.frame && this.bindMaterial(gT, this.modelUniforms.refreshModelUniforms(WT.KF(), gT, gT.model, this.view)), !gT.bindable || gT.bindGroup !== mT.bindGroup) return !1;
        const kT = WT.computeWorldMatrix(),
          jT = kT.updateFlag !== mT.worldFlag;
        return mT.worldFlag = kT.updateFlag, MT.instances = HT, this.thinBundle.addAgain(mT.record, MT, jT ? kT.m : null, mT.visibility), mT.handedFrame = this.frame, this.I3.drawn++, !0
      }
      retainedDraw(TT, UT, mT, WT) {
        const zT = this.inputs.get(UT),
          MT = null === zT || void 0 === zT ? void 0 : zT.retained;
        if (!zT || !MT) return;
        const {
          drawState: gT,
          program: nT,
          instance: HT,
          instancing: kT
        } = MT, jT = UT.owner;
        if (MM(jT) !== kT) return;
        const lT = this.instanceCount(jT, kT);
        if (lT <= 0) return null;
        if (HT.released || nT.failed || gT.program !== nT || !this.drawDefines.programCurrent(gT, UT, kT, mT) || !this.inputsStamped(zT, UT, kT, nT) || jT.isUnIndexed !== MT.unIndexed || this.indexKey(UT) !== MT.indexData) return;
        if (MT.indexBuffer && MT.gpuVersion !== this.resources.gpuBuffersVersion) {
          const TT = this.resources.gpuBuffer(MT.indexData);
          if (!TT) return;
          MT.indexBuffer = TT, MT.gpuVersion = this.resources.gpuBuffersVersion
        }
        let LT = !1;
        if (HT.frame !== this.frame && (LT = this.modelUniforms.refreshModelUniforms(TT, HT, HT.model, this.view)), !this.bindMaterial(HT, LT) || !this.withGpuBuffers(zT) || !this.instanceBuffersFit(jT.name, zT, lT)) return null;
        const pT = this.makeDraw(nT, zT, this.renderStates.renderState(gT.model, jT, WT, zT.state), HT, lT);
        return this.setRange(pT, UT, MT.indexBuffer, MT.indexData), pT
      }
      retain(TT, UT) {
        const mT = this.drawDefines.drawStates.get(TT);
        if (!UT || !mT || mT.program !== UT.program) {
          const UT = this.inputs.get(TT);
          return void(UT && (UT.retained = null))
        }
        const WT = TT.owner,
          zT = mT.instancing,
          MT = this.indexKey(TT),
          gT = UT.inputs.retained;
        gT ? (gT.drawState = mT, gT.instancing = zT, gT.program = UT.program, gT.instance = UT.material, gT.indexData = MT, gT.unIndexed = WT.isUnIndexed, gT.indexBuffer = UT.indexBuffer, gT.gpuVersion = this.resources.gpuBuffersVersion) : UT.inputs.retained = {
          drawState: mT,
          instancing: zT,
          program: UT.program,
          instance: UT.material,
          indexData: MT,
          unIndexed: WT.isUnIndexed,
          indexBuffer: UT.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(TT, UT, mT, WT) {
        const zT = UT.owner,
          MT = tM(UT);
        if (!MT) return null;
        const gT = MT.getClassName();
        let nT = null;
        if (function(TT) {
            return "LinesMesh" === TT.getClassName()
          }(zT)) {
          if (! function(TT) {
              return "ShaderMaterial" === TT.getClassName() && "color" === TT.shaderPath
            }(MT)) return this.warnOnce(`lines:${gT}`, `A LinesMesh with a ${gT} is not drawn yet (${MT.name})`), null;
          nT = zT
        } else if ("StandardMaterial" !== gT && "LiteMaterial" !== gT) return this.warnOnce(`class:${gT}`, `${gT} is not drawn yet (${MT.name})`), null;
        const HT = MM(zT),
          kT = this.instanceCount(zT, HT);
        if (kT <= 0) return null;
        const jT = nT ? this.lineProgramFor(zT, mT, HT) : this.drawDefines.programFor(TT, UT, MT, mT, HT);
        if (!jT || jT.failed) return null;
        const lT = nT ? null : this.drawDefines.drawStates.get(UT).model,
          LT = lT ? this.modelInstance(lT, jT) : this.materialInstance(zT, jT);
        let pT = !1;
        if (LT.frame !== this.frame && (nT ? fT(LT.ubo, nT) : pT = this.modelUniforms.refreshModelUniforms(TT, LT, LT.model, this.view)), !this.bindMaterial(LT, pT)) return null;
        const BT = this.meshInputs(UT, jT, HT);
        if (!BT || !this.instanceBuffersFit(zT.name, BT, kT)) return null;
        const ZT = this.indexKey(UT);
        let cT = null;
        if (ZT && !zT.isUnIndexed && (cT = this.resources.gpuBuffer(ZT), !cT)) return null;
        const vT = this.renderStates.renderState(null !== lT && void 0 !== lT ? lT : MT, zT, WT, BT.state, nT ? "line-list" : "triangle-list"),
          qT = this.makeDraw(jT, BT, vT, LT, kT);
        return this.setRange(qT, UT, cT, ZT), qT
      }
      indexKey(TT) {
        const UT = kM(TT);
        return UT ? this.resources.modelIndex(UT) : null
      }
      setRange(TT, UT, mT, WT) {
        mT && (TT.indexBuffer = mT, TT.indexFormat = this.resources.indexFormat(WT));
        const zT = 4 * UT.range + (mT ? 0 : 2);
        TT.unit = UT, TT.first = UT.parts.hZ[zT], TT.count = UT.parts.hZ[zT + 1]
      }
      makeDraw(TT, UT, mT, WT, zT) {
        UT.state !== mT && (UT.state = mT, UT.pipelineKey = `${TT.id}|${UT.layout.key}|${mT.key}`, UT.pipeline = null);
        const MT = UT.draw ??= {
          program: TT,
          inputs: UT,
          pipelineKey: "",
          layout: UT.layout,
          state: mT,
          material: WT,
          slotOffset: 0,
          vertexBuffers: UT.buffers,
          vertexOffsets: UT.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: zT,
          unit: null
        };
        return MT.program = TT, MT.pipelineKey = UT.pipelineKey, MT.state = mT, MT.material = WT, MT.vertexOffsets = UT.offsets, MT.indexBuffer = null, MT.instances = zT, MT
      }
      instanceCount(TT, UT) {
        switch (UT) {
          case "thin":
            return TT.forcedInstanceCount || TT.i5;
          case "instanced":
            return this.prepareInstances(TT);
          case "none":
            return 1
        }
      }
      prepareInstances(TT) {
        const UT = function(TT, UT) {
          const mT = UT._userInstancedBuffersStorage,
            WT = TT.batchUploads.get(UT);
          if (WT) {
            var zT;
            if (WT.layout === (null !== (zT = null === mT || void 0 === mT ? void 0 : mT.interleavedKinds) && void 0 !== zT ? zT : null)) return WT;
            WT.release()
          }
          return new pU(TT, UT, mT)
        }(this.resources, TT);
        return UT.frame !== this.frame && UT.pack(TT, this.modelMeshes.instanceBatch(TT), this.modelMeshes.worlds, this.frame), UT.count
      }
      programWithModel(TT, UT, mT) {
        const WT = this.modelSlot(TT),
          zT = LM(WT, TT, mT),
          MT = this.drawDefines.modelPackKind(TT),
          gT = MT ? function(TT, UT, mT, WT) {
            const zT = (0, JT.s)(TT, eT.i.name),
              MT = [];
            for (const {
                feature: HT,
                state: kT,
                active: jT
              }
              of TT.features) {
              var gT, nT;
              const TT = jT ? null === (gT = (nT = (0, XU.g)(HT)).Np) || void 0 === gT ? void 0 : gT.call(nT, kT) : void 0;
              TT && MT.push(TT)
            }
            return {
              kind: UT,
              atlas: null !== zT && void 0 !== zT && zT.active ? (0, eT.c)(zT.state) : null,
              defines: mT,
              ...Lg(MT, WT)
            }
          }(TT, MT, UT, WT.fragmentCode) : null;
        if (gT && function(TT) {
            const UT = TT.defines;
            return (null === TT.atlas || !!UT.DIFFUSE && 1 === UT.DIFFUSEDIRECTUV) && !!UT.NORMAL && !UT.REFLECTION && !UT.EMISSIVEASILLUMINATION && !UT.LINKEMISSIVEWITHDIFFUSE
          }(gT)) {
          const mT = this.modelPackProgram(TT, UT, `${zT}#${MT}#sp${this.drawDefines.modelPackVariant}`, WT, gT);
          if (mT && !mT.failed) return mT
        }
        const nT = this.programs.get(zT);
        if (nT || this.unbuildable.has(zT)) return null !== nT && void 0 !== nT ? nT : null;
        let HT;
        try {
          HT = az({
            defines: nM(UT),
            vertexCode: WT.vertexCode,
            fragmentCode: WT.fragmentCode,
            pluginUniforms: WT.pluginUniforms
          })
        } catch (kT) {
          return this.unbuildable.add(zT), this.warnOnce(`build:${zT}`, `could not build a program for ${TT.name}: ${String(kT)}`), null
        }
        return this.createProgram(zT, HT, "standard")
      }
      modelPackProgram(TT, UT, mT, WT, zT) {
        const MT = this.programs.get(mT);
        if (MT || this.unbuildable.has(mT)) return null !== MT && void 0 !== MT ? MT : null;
        const gT = this.drawDefines.modelPackVariant;
        let nT;
        try {
          const TT = function(TT) {
              return (0, oU.b)(TT, "model")
            }(gT),
            mT = Jg(TT, zT, WT.vertexCode, WT.fragmentCode);
          nT = tg(az({
            defines: nM(UT),
            ...mT,
            pluginUniforms: WT.pluginUniforms
          }), TT, zT, !!this.sunShadow)
        } catch (jT) {
          return this.unbuildable.add(mT), this.warnOnce(`build:${mT}`, `could not build a shader pack program for ${TT.name}, which draws without the pack: ${String(jT)}`), null
        }
        const HT = NM(gT, !!this.sunShadow),
          kT = {
            group: this.packInputs.bindGroupFor(null, HT),
            layout: SM(this.device, {
              depth: !1,
              sunShadow: HT
            })
          };
        return this.createProgram(mT, nT, function(TT) {
          return `standard-sp${TT}`
        }(gT), kT)
      }
      lineProgramFor(TT, UT, mT) {
        const WT = vT(TT, mT, UT, this.view);
        let zT = this.linePrograms.get(WT);
        var MT;
        return zT || (zT = this.createProgram(`lines#${WT}`, (MT = function(TT) {
          const UT = new Map;
          for (let mT = 0; mT < kT.length; mT++) TT & 1 << mT && UT.set(kT[mT], !0);
          return UT
        }(WT), Qz({
          defines: MT,
          vertex: Xz,
          fragment: Iz,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(WT, zT)), zT
      }
      createProgram(TT, UT, mT) {
        var WT;
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const MT = this.nextProgramId++,
          gT = `${mT}-${MT}`,
          nT = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          HT = [{
            binding: 0,
            visibility: nT,
            buffer: {
              type: "uniform"
            }
          }];
        for (const lT of UT.textures) HT.push({
          binding: lT.binding,
          visibility: nT,
          texture: {
            viewDimension: lT.dimension
          }
        }), HT.push({
          binding: lT.samplerBinding,
          visibility: nT,
          sampler: {}
        });
        const kT = this.device.createBindGroupLayout({
            label: gT,
            entries: HT
          }),
          jT = {
            key: TT,
            id: MT,
            kind: mT,
            program: UT,
            vertex: this.device.createShaderModule({
              label: `${gT}-vertex`,
              code: UT.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${gT}-fragment`,
              code: UT.fragment
            }),
            materialLayout: kT,
            pipelineLayout: this.device.createPipelineLayout({
              label: gT,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, kT, ...zT ? [zT.layout] : []]
            }),
            packGroup: null !== (WT = null === zT || void 0 === zT ? void 0 : zT.group) && void 0 !== WT ? WT : null,
            failed: !1
          };
        return this.programs.set(TT, jT), jT
      }
      writeFrameUniforms() {
        const TT = this.frameUniforms;
        qM(this.view, TT), this.device.queue.writeBuffer(this.frameBuffer, 0, TT)
      }
      materialInstance(TT, UT) {
        let mT = this.materials.get(TT);
        if (!mT) {
          const UT = new Map;
          this.materials.set(TT, UT);
          const {
            resources: WT,
            materials: zT
          } = this;
          TT.SF.addOnce((() => {
            for (const TT of UT.values()) TT.released = !0, WT.destroyBuffer(TT.buffer);
            zT.delete(TT)
          })), mT = UT
        }
        let WT = mT.get(UT.key);
        return WT || (WT = this.newMaterialInstance(TT, null, UT), mT.set(UT.key, WT)), WT
      }
      modelInstance(TT, UT) {
        const mT = this.modelSlot(TT);
        let WT = mT.instances.get(UT.key);
        return WT || (WT = this.newMaterialInstance(TT, TT, UT), mT.instances.set(UT.key, WT)), WT
      }
      modelSlot(TT) {
        var UT;
        let mT = TT.gpu[dT.i.lite];
        return (null === (UT = mT) || void 0 === UT ? void 0 : UT.epoch) !== this.resources.epoch && (mT = new yg(this.resources, this.resources.epoch), TT.gpu[dT.i.lite] = mT), mT
      }
      newMaterialInstance(TT, UT, mT) {
        const WT = mT.program.material.floats,
          zT = new Float32Array(WT),
          MT = new Map;
        return {
          owner: TT,
          model: UT,
          program: mT,
          data: zT,
          uploaded: new Float32Array(WT).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${TT.name}-uniforms`,
            size: Math.max(16, 4 * WT),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: MT,
          ubo: new fM(mT.program.material.slots, zT, MT),
          bindGroup: null,
          bound: new Array(2 * mT.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(TT) {
        var UT;
        const mT = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: uz + Cz,
            fragment: uz + rz,
            attributes: [],
            material: Vz,
            textures: []
          }, "earthSky"),
          WT = this.earthSkyUniforms ??= this.newMaterialInstance(ag, null, mT);
        this.earthSkyFrom !== TT && (this.earthSkyFrom = TT, WT.data.fill(0)), oz(WT.ubo, TT, this.view);
        const zT = this.vertexInputs(mT, ag, "earthSky", mT, null);
        if (mT.failed || !zT || !this.bindMaterial(WT, !1)) return;
        const MT = null !== (UT = zT.state) && void 0 !== UT ? UT : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          gT = this.makeDraw(mT, zT, MT, WT, 1);
        gT.count = sz.length;
        const nT = Az(TT, this.view);
        gT.slotOffset = this.writeMeshSlot(nT, 1), this.lists.skyDraws.push(gT)
      }
      uploadIfChanged(TT) {
        const {
          data: UT,
          uploaded: mT
        } = TT;
        for (let WT = 0; WT < UT.length; WT++)
          if (UT[WT] !== mT[WT]) return mT.set(UT), void this.device.queue.writeBuffer(TT.buffer, 0, UT)
      }
      bindMaterial(TT, UT) {
        return TT.frame !== this.frame && (TT.frame = this.frame, UT || this.uploadIfChanged(TT), TT.bindable = this.bindTextures(TT)), TT.bindable
      }
      bindTextures(TT) {
        const {
          program: UT,
          bound: mT
        } = TT, WT = UT.program.textures;
        let zT = !TT.bindGroup,
          MT = !0;
        for (let gT = 0; gT < WT.length; gT++) {
          const UT = TT.textures.get(WT[gT].name),
            nT = UT ? this.resources.boundTexture(UT) : null;
          nT ? mT[2 * gT] === nT.view && mT[2 * gT + 1] === nT.sampler || (mT[2 * gT] = nT.view, mT[2 * gT + 1] = nT.sampler, zT = !0) : (UT || TT.ubo.expected.has(WT[gT].name) || this.warnOnce(`texture:${TT.owner.name}:${WT[gT].name}`, `${TT.owner.name} has no ${WT[gT].name}`), MT = !1)
        }
        if (!MT) return zT && (TT.bindGroup = null), !1;
        if (zT) {
          const zT = [{
            binding: 0,
            resource: {
              buffer: TT.buffer
            }
          }];
          for (let TT = 0; TT < WT.length; TT++) zT.push({
            binding: WT[TT].binding,
            resource: mT[2 * TT]
          }), zT.push({
            binding: WT[TT].samplerBinding,
            resource: mT[2 * TT + 1]
          });
          TT.bindGroup = this.device.createBindGroup({
            label: `${TT.owner.name}-material`,
            layout: UT.materialLayout,
            entries: zT
          })
        }
        return !0
      }
      writeMeshSlot(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, TT, UT, mT), this.slotCount++ * jz
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(TT, UT, mT, WT, zT) {
        let MT = this.inputs.get(TT);
        if (!MT || MT.program !== WT || !JM(UT, MT, this.resources, zT)) {
          var gT;
          if (MT = null !== (gT = this.vertexLayouts.resolveInputs(UT, mT, WT, zT)) && void 0 !== gT ? gT : void 0, !MT) return null;
          this.inputs.set(TT, MT)
        }
        return this.withGpuBuffers(MT)
      }
      meshInputs(TT, UT, mT) {
        const WT = this.inputs.get(TT);
        if (WT && this.inputsStamped(WT, TT, mT, UT)) return this.withGpuBuffers(WT);
        const zT = TT.owner,
          MT = kM(TT),
          gT = this.vertexInputs(TT, zT, zT.name, UT, MT);
        return gT && (gT.geometry = jM(TT), gT.instanceLayout = this.drawDefines.instanceLayout(zT, mT)), gT
      }
      inputsStamped(TT, UT, mT, WT) {
        return function(TT, UT, mT, WT) {
          return TT.program === mT && TT.geometry === jM(UT) && TT.instanceLayout === WT
        }(TT, UT, WT, this.drawDefines.instanceLayout(UT.owner, mT))
      }
      withGpuBuffers(TT) {
        return DM(TT, this.resources, this.zeroBuffer) ? TT : null
      }
      instanceBuffersFit(TT, UT, mT) {
        const WT = AM(UT, mT, this.resources, this.zeroBuffer);
        if (WT) {
          const zT = UT.ends[WT.index] - UT.offsets[WT.index] + UT.Z2[WT.index];
          return this.warnOnce(`overrun:${TT}`, `${TT} draws ${mT} instances from a ${zT}-byte buffer (${WT.needed} needed)`), !1
        }
        return !0
      }
      createBinding(TT, UT, mT, WT) {
        const zT = `${UT._colorFormat}|${UT._depthStencilFormat}|${UT._depthCompare}|${UT._sampleCount}`,
          MT = wU(this.device, UT);
        if (TT === this.skyLastRenderable) {
          let mT = null;
          return {
            renderable: TT,
            pipeline: MT,
            draw: TT => mT ? this.drawSky(TT, UT, zT, mT) : 0,
            update: TT => {
              mT = TT
            }
          }
        }
        return {
          renderable: TT,
          pipeline: MT,
          draw: TT => (WT ? WT.execute(TT, UT, zT) : 0) + this.drawList(TT, UT, zT, mT)
        }
      }
      drawSky(TT, UT, mT, WT) {
        const zT = this.lists.skyDraws,
          MT = zT.length > 0;
        if (MT) {
          var gT;
          const mT = (null !== (gT = UT._depthCompare) && void 0 !== gT ? gT : YU).startsWith("greater") ? 0 : 1;
          TT.setViewport(0, 0, WT.targetWidth, WT.targetHeight, mT, mT)
        }
        const nT = this.drawList(TT, UT, mT, zT);
        return MT && TT.setViewport(0, 0, WT.targetWidth, WT.targetHeight, 0, 1), nT
      }
      drawList(TT, UT, mT, WT) {
        let zT = 0;
        const MT = this.binder;
        MT.reset();
        for (const gT of WT) {
          const WT = this.pipelineFor(gT, UT, mT);
          WT && (MT.bind(TT, gT, WT, this.meshSlots.bindGroup, gT.slotOffset), gT.indexBuffer ? TT.drawIndexed(gT.count, gT.instances, gT.first, 0, 0) : TT.draw(gT.count, gT.instances, gT.first, 0), zT++)
        }
        return zT
      }
      pipelineFor(TT, UT, mT) {
        var WT, zT;
        if (TT.program.failed) return null;
        const MT = TT.inputs;
        if (MT.pipeline && MT.pipelineTarget === mT) return MT.pipeline;
        const gT = `${TT.pipelineKey}|${mT}`,
          nT = this.pipelines.get(gT);
        if (void 0 !== nT) return nT && (MT.pipeline = nT, MT.pipelineTarget = mT), nT || null;
        this.pipelines.set(gT, null);
        const {
          program: HT,
          layout: kT,
          state: jT
        } = TT, lT = {
          label: `standard-${HT.id}`,
          layout: HT.pipelineLayout,
          vertex: {
            module: HT.vertex,
            entryPoint: "main",
            buffers: kT.buffers
          },
          fragment: fU({
            module: HT.fragment,
            entryPoint: "main"
          }, UT, jT.blend, jT.colourWrite),
          depthStencil: UT._depthStencilFormat ? {
            format: UT._depthStencilFormat,
            depthCompare: null !== (WT = null !== (zT = jT.depthCompare) && void 0 !== zT ? zT : UT._depthCompare) && void 0 !== WT ? WT : YU,
            depthWriteEnabled: jT.depthWrite,
            depthBias: jT.depthBias,
            depthBiasSlopeScale: jT.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: UT._sampleCount
          },
          primitive: {
            topology: jT.topology,
            frontFace: jT.frontFace,
            cullMode: jT.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(lT).then((TT => {
          this.compiling--, this.pipelines.set(gT, TT)
        }), (TT => {
          this.compiling--, this.reportFailure(HT, gT, TT)
        })), null
      }
      forEachSunShadowCaster(TT) {
        const UT = this.caster,
          mT = (mT, WT, zT) => {
            const MT = mT.unit && function(TT) {
              const UT = TT.material.model;
              return null !== UT && (UT.lifeform || UT.item) && UT.castsSunShadow && "triangle-list" === TT.state.topology
            }(mT) ? kM(mT.unit) : null;
            if (!MT) return;
            const gT = mT.unit.owner;
            switch (UT.geometry = MT, UT.skip = gT.noSunShadowVertices, UT.indexed = null !== mT.indexBuffer, UT.first = mT.first, UT.count = mT.count, UT.Nl = WT, UT.worldAt = zT, UT.instances = null, UT.instanceCount = 1, UT.thin = !1, MM(gT)) {
              case "thin": {
                const TT = gT._thinInstanceDataStorage.matrixData;
                if (!TT) return;
                UT.instances = TT, UT.instanceCount = Math.min(mT.instances, TT.length / 16), UT.thin = !0;
                break
              }
              case "instanced": {
                const TT = this.resources.batchUploads.get(gT);
                if (!TT || TT.frame !== this.frame || !this.writeBatchCasters(TT)) return;
                break
              }
            }
            TT(UT)
          };
        for (const WT of this.lists.opaqueDraws) mT(WT, this.meshSlots.data, WT.slotOffset / 4);
        this.thinBundle.forEachDrawn(mT)
      }
      writeBatchCasters(TT) {
        const {
          caster: UT
        } = this, mT = TT.packedMatrices, WT = TT.count;
        UT.instances = mT, UT.instanceCount = WT;
        let zT = -1;
        for (let MT = 0; MT < WT; MT++) {
          const UT = Qg(TT.packedRowMesh(MT));
          UT && zT < 0 ? (this.casterWorlds.length < 16 * WT && (this.casterWorlds = new Float32Array(mT.length)), this.casterWorlds.set(mT.subarray(0, 16 * MT)), zT = MT) : !UT && zT >= 0 && (this.casterWorlds.set(mT.subarray(16 * MT, 16 * MT + 16), 16 * zT), zT++)
        }
        return zT >= 0 && (UT.instances = this.casterWorlds, UT.instanceCount = zT), UT.instanceCount > 0
      }
      async reportFailure(TT, UT, mT) {
        const WT = [];
        let zT = !0;
        for (const [MT, gT] of [
            ["vertex", TT.vertex],
            ["fragment", TT.fragment]
          ]) {
          const TT = await gT.getCompilationInfo();
          for (const UT of TT.messages) zT &&= "error" !== UT.type, WT.push(`${MT}:${UT.lineNum}:${UT.linePos} ${UT.type}: ${UT.message}`)
        }
        if (zT && !TT.packGroup) return this.pipelines.set(UT, !1), console.error(`Lite: pipeline ${UT} failed`, mT), void jU(this.device, "mesh", TT.kind, mT);
        TT.failed || (TT.failed = !0, console.error(`Lite: program ${TT.id} failed`, mT, WT.join("\n"), {
          program: TT.program,
          key: TT.key
        }), jU(this.device, "mesh", TT.kind, mT, zT ? null : WT[0]))
      }
    }

    function Qg(TT) {
      var UT, mT;
      const WT = null === (UT = TT.XV) || void 0 === UT || null === (mT = UT.aShaderPackItem) || void 0 === mT ? void 0 : mT.x;
      return void 0 !== WT && 0 !== (WT & aU.f)
    }
    var sg = mT(41822),
      Fg = mT(41825),
      Pg = mT(41829),
      Vg = mT(41786);
    const ug = [0, 3, 1, 4, 2, 5];

    function Cg(TT, UT, mT, WT, zT) {
      const MT = mT[0].width;
      try {
        return zT ? function(TT, UT, mT) {
          const WT = (0, Vg.d)(TT, mT, mT, 6);
          for (let zT = 0; zT < 6; zT++)(0, Vg.g)(TT, WT, zT, UT[ug[zT]], {
            invertY: !1
          });
          return WT.texture
        }(TT, mT, MT) : function(TT, UT, mT, WT) {
          const zT = TT.createTexture({
            label: "sink-cube",
            size: {
              width: mT,
              height: mT,
              depthOrArrayLayers: 6
            },
            format: WT,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let MT = 0; MT < 6; MT++) TT.queue.copyExternalImageToTexture({
            source: UT[ug[MT]]
          }, {
            texture: zT,
            origin: {
              x: 0,
              y: 0,
              z: MT
            }
          }, {
            width: mT,
            height: mT
          });
          return zT
        }(UT, mT, MT, 1 === WT ? "r8unorm" : "rgba8unorm")
      } finally {
        rg(mT)
      }
    }

    function rg(TT) {
      for (const UT of null !== TT && void 0 !== TT ? TT : []) null === UT || void 0 === UT || UT.close()
    }
    async function Kg(TT) {
      const UT = [],
        mT = [];
      if (await Promise.all(TT.map(((TT, WT) => (UT[WT] = null, TT.then((TT => {
          UT[WT] = TT
        }), (TT => {
          mT.push(TT)
        })))))), mT.length > 0) throw rg(UT), mT[0];
      return UT
    }
    class Sg {
      constructor(TT) {
        this.fl = TT, this.starts = [], this.lengths = [], this.used = 0, TT > 0 && (this.starts.push(0), this.lengths.push(TT))
      }
      allocate(TT) {
        const {
          starts: UT,
          lengths: mT
        } = this;
        for (let WT = 0; WT < UT.length; WT++) {
          if (mT[WT] < TT) continue;
          const zT = UT[WT];
          return mT[WT] === TT ? (UT.splice(WT, 1), mT.splice(WT, 1)) : (UT[WT] += TT, mT[WT] -= TT), this.used += TT, zT
        }
        return -1
      }
      free(TT, UT) {
        this.used -= UT;
        const mT = Math.min(TT + UT, this.fl);
        mT > TT && this.release(TT, mT - TT)
      }
      grow(TT) {
        const UT = this.fl;
        this.fl = TT, this.release(UT, TT - UT)
      }
      truncate(TT) {
        const {
          starts: UT,
          lengths: mT
        } = this;
        for (let WT = UT.length - 1; WT >= 0 && UT[WT] + mT[WT] > TT; WT--) UT[WT] >= TT ? (UT.splice(WT, 1), mT.splice(WT, 1)) : mT[WT] = TT - UT[WT];
        this.fl = TT
      }
      release(TT, UT) {
        const {
          starts: mT,
          lengths: WT
        } = this;
        let zT = 0,
          MT = mT.length;
        for (; zT < MT;) {
          const UT = zT + MT >> 1;
          mT[UT] < TT ? zT = UT + 1 : MT = UT
        }
        const gT = zT,
          nT = gT > 0 && mT[gT - 1] + WT[gT - 1] === TT,
          HT = gT < mT.length && TT + UT === mT[gT];
        nT && HT ? (WT[gT - 1] += UT + WT[gT], mT.splice(gT, 1), WT.splice(gT, 1)) : nT ? WT[gT - 1] += UT : HT ? (mT[gT] = TT, WT[gT] += UT) : (mT.splice(gT, 0, TT), WT.splice(gT, 0, UT))
      }
    }
    const Gg = 256;
    class Ng {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = TT, this.onReplaced = UT, this.mergeGap = mT, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.hZ = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const zT = Math.max(Gg, Math.ceil(WT / Gg) * Gg);
        this.bytes = new Uint8Array(zT), this.words = new Uint32Array(this.bytes.buffer), this.hZ = new Sg(zT / Gg)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(TT) {
        return Math.max(1, Math.ceil(TT / Gg)) * Gg
      }
      allocate(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT;
        const WT = Ng.slotBytes(TT),
          zT = WT / Gg;
        let MT = this.hZ.allocate(zT);
        MT < 0 && (this.grow(this.hZ.fl + zT), MT = this.hZ.allocate(zT));
        const gT = MT * Gg;
        return this.growTo(gT + Math.max(mT, WT)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, gT, gT + WT), UT && this.bytes.set(new Uint8Array(UT.buffer, UT.byteOffset, Math.min(UT.byteLength, WT)), gT), this.markDirty(gT, gT + WT), gT
      }
      growTo(TT) {
        const UT = Math.ceil(TT / Gg);
        UT > this.hZ.fl && this.grow(UT)
      }
      free(TT, UT) {
        this.freed.push(TT, UT)
      }
      write(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (WT <= 0) return;
        WT <= 1024 && 0 === (3 & (TT | mT | WT)) ? this.copyWords(TT >> 2, UT.buffer, mT >> 2, WT >> 2) : this.bytes.set(new Uint8Array(UT.buffer, mT, WT), TT);
        let MT = TT + WT;
        if (zT) {
          const UT = TT + 4 * Math.ceil(WT / 4);
          this.bytes.fill(0, MT, UT), MT = UT
        }
        this.markDirty(TT, MT)
      }
      copyWords(TT, UT, mT, WT) {
        let zT = this.sourceWords.get(UT);
        zT || (zT = new Uint32Array(UT, 0, UT.byteLength >> 2), this.sourceWords.set(UT, zT));
        const MT = this.words;
        for (let gT = 0; gT < WT; gT++) MT[TT + gT] = zT[mT + gT]
      }
      move(TT, UT, mT) {
        this.bytes.copyWithin(UT, TT, TT + mT), this.markDirty(UT, UT + mT)
      }
      flush() {
        for (const UT of this.retired) this.onReplaced(UT), UT.destroy();
        this.retired.length = 0;
        const TT = this.dirtyStarts.length;
        if (TT > 0) {
          const {
            dirtyStarts: UT,
            dirtyEnds: mT,
            order: WT
          } = this;
          WT.length = TT;
          for (let nT = 0; nT < TT; nT++) WT[nT] = nT;
          TT > 1 && WT.sort(((TT, mT) => UT[TT] - UT[mT]));
          const zT = this.mergeGap;
          let MT = UT[WT[0]],
            gT = mT[WT[0]];
          for (let nT = 1; nT < TT; nT++) {
            const TT = WT[nT];
            UT[TT] - gT <= zT ? gT = Math.max(gT, mT[TT]) : (this.send(MT, gT), MT = UT[TT], gT = mT[TT])
          }
          this.send(MT, gT), UT.length = 0, mT.length = 0
        }
        this.holding = !1
      }
      qY() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const TT = this.freed;
        for (let UT = 0; UT < TT.length; UT += 2) this.hZ.free(TT[UT] / Gg, TT[UT + 1] / Gg);
        TT.length = 0
      }
      send(TT, UT) {
        this.device.queue.writeBuffer(this.gpu, TT, this.bytes.buffer, TT, UT - TT);
        for (const mT of this.replaced) {
          const WT = Math.min(UT, mT.size);
          WT > TT && this.device.queue.writeBuffer(mT, TT, this.bytes.buffer, TT, WT - TT)
        }
      }
      markDirty(TT, UT) {
        TT &= -4, UT = UT + 3 & -4, this.holding ? (this.dirtyStarts.push(TT), this.dirtyEnds.push(UT)) : this.send(TT, UT)
      }
      grow(TT) {
        const UT = this.hZ.fl,
          mT = Math.max(2 * UT, TT),
          WT = new Uint8Array(mT * Gg);
        WT.set(this.bytes);
        const zT = this.gpu;
        this.gpu = this.createGpu(WT.byteLength), this.bytes = WT, this.words = new Uint32Array(WT.buffer), this.hZ.grow(mT), zT && (this.replaced.push(zT), this.onReplaced(zT)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, UT * Gg)
      }
      createGpu(TT) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: TT,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Eg(TT) {
      return Array.isArray(TT) ? new Float32Array(TT) : TT
    }

    function hg(TT, UT, mT, WT, zT) {
      const MT = NT(zT),
        gT = Math.min(zT, WT.byteLength);
      if (MT === gT && WT.byteOffset % 4 === 0) return void TT.queue.writeBuffer(UT, mT, WT.buffer, WT.byteOffset, MT);
      const nT = new Uint8Array(MT);
      nT.set(new Uint8Array(WT.buffer, WT.byteOffset, gT)), TT.queue.writeBuffer(UT, mT, nT)
    }

    function Dg(TT, UT, mT) {
      const WT = "linear",
        zT = "nearest";
      let MT = zT,
        gT = zT,
        nT = "nearest",
        HT = !UT;
      switch (TT) {
        case 11:
          MT = WT, gT = WT;
          break;
        case 3:
          MT = WT, gT = WT, nT = UT ? "linear" : "nearest";
          break;
        case 8:
          nT = UT ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          gT = WT;
          break;
        case 6:
          gT = WT, nT = UT ? "linear" : "nearest";
          break;
        case 7:
          gT = WT, HT = !0;
          break;
        case 9:
          MT = WT;
          break;
        case 10:
          MT = WT, nT = UT ? "linear" : "nearest";
          break;
        case 2:
          MT = WT, gT = WT, mT > 1 ? (nT = "linear", HT = !1) : HT = !0;
          break;
        case 12:
          MT = WT, HT = !0;
          break;
        default:
          HT = !0
      }
      return mT > 1 && !HT ? {
        magFilter: WT,
        minFilter: WT,
        mipmapFilter: "linear",
        maxAnisotropy: mT
      } : {
        magFilter: MT,
        minFilter: gT,
        mipmapFilter: nT,
        ...HT ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function og(TT) {
      return 0 === TT ? "clamp-to-edge" : 2 === TT ? "mirror-repeat" : "repeat"
    }
    class Ag {
      constructor(TT, UT) {
        let {
          vertexArena: mT = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = TT, this.device = UT, this.buffers = new WeakMap, this.J_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = mT ? this.createArena() : null
      }
      createArena() {
        return new Ng(this.device, (TT => {
          var UT;
          null === (UT = this.onDestroy) || void 0 === UT || UT.call(this, TT), this.gpuBuffersVersion++
        }))
      }
      rebind(TT, UT) {
        this.engine = TT, this.device = UT, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const mT of this.liveUploads) mT.rebind();
        for (const mT of this.rebindWaiters.splice(0)) mT()
      }
      flushUploads() {
        var TT;
        null === (TT = this.arena) || void 0 === TT || TT.flush()
      }
      endUploadFrame() {
        var TT;
        null === (TT = this.arena) || void 0 === TT || TT.qY()
      }
      vertexBufferCreated(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mT ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(TT);
        const zT = Eg(UT);
        TT.fl = zT.byteLength, this.buffers.set(TT, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: mT && null !== this.arena,
          pending: zT,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: WT
        })
      }
      vertexBufferUpdated(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        const zT = this.buffers.get(TT);
        if (!zT) return;
        const MT = Eg(UT),
          gT = void 0 === WT ? MT.byteLength : Math.min(WT, MT.byteLength);
        this.update(zT, MT, mT, gT)
      }
      vertexBufferFloatsUpdated(TT, UT, mT, WT) {
        const zT = this.buffers.get(TT);
        if (!zT) return;
        const MT = mT * Float32Array.BYTES_PER_ELEMENT,
          gT = (WT - mT) * Float32Array.BYTES_PER_ELEMENT;
        zT.slot >= 0 && gT > 0 && MT + gT <= zT.size ? this.writeSlot(zT, MT, UT, UT.byteOffset + MT, gT, !1) : zT.gpu && gT > 0 && MT + gT <= zT.gpu.size ? this.device.queue.writeBuffer(zT.gpu, MT, UT.buffer, UT.byteOffset + MT, gT) : this.update(zT, UT.subarray(mT, WT), MT, gT)
      }
      indexBufferCreated(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(TT);
        const WT = function(TT) {
          if (TT instanceof Uint16Array || TT instanceof Uint32Array) return TT;
          for (let UT = 0; UT < TT.length; UT++)
            if (TT[UT] >= 65535) return new Uint32Array(TT);
          return new Uint16Array(TT)
        }(UT);
        TT.is32Bits = 4 === WT.BYTES_PER_ELEMENT, TT.fl = WT.byteLength, this.buffers.set(TT, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: WT,
          ownsPending: WT !== UT,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: mT
        })
      }
      bufferDeleted(TT) {
        const UT = this.buffers.get(TT);
        null !== UT && void 0 !== UT && UT.gpu ? (this.destroyBuffer(UT.gpu), this.gpuBuffersVersion++) : UT && UT.slot >= 0 && (this.arena.free(UT.slot, UT.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(TT)
      }
      update(TT, UT, mT, WT) {
        if (TT.slot >= 0) this.updateSlot(TT, UT, mT, WT);
        else if (TT.gpu) {
          if (mT + NT(WT) > TT.gpu.size) {
            const UT = this.device.createBuffer({
                label: TT.label,
                size: NT(Math.max(2 * TT.gpu.size, mT + WT)),
                usage: TT.usage | GPUBufferUsage.COPY_SRC
              }),
              zT = this.device.createCommandEncoder();
            zT.copyBufferToBuffer(TT.gpu, 0, UT, 0, TT.gpu.size), this.device.queue.submit([zT.finish()]), this.destroyBuffer(TT.gpu), this.gpuBuffersVersion++, TT.gpu = UT
          }
          hg(this.device, TT.gpu, mT, UT, WT)
        } else {
          const MT = new Uint8Array(UT.buffer, UT.byteOffset, WT),
            gT = TT.pending;
          if (gT && TT.ownsPending && mT + WT <= gT.byteLength) new Uint8Array(gT.buffer, gT.byteOffset, gT.byteLength).set(MT, mT);
          else if (gT && 0 === mT && WT === gT.byteLength && UT.byteLength === WT) TT.pending = UT, TT.ownsPending = !1;
          else {
            var zT;
            const UT = new Uint8Array(Math.max(null !== (zT = null === gT || void 0 === gT ? void 0 : gT.byteLength) && void 0 !== zT ? zT : 0, mT + WT));
            gT && UT.set(new Uint8Array(gT.buffer, gT.byteOffset, gT.byteLength)), UT.set(MT, mT), TT.pending = UT, TT.ownsPending = !0
          }
        }
      }
      updateSlot(TT, UT, mT, WT) {
        const zT = this.arena;
        mT + NT(WT) > TT.size && (TT.size = NT(Math.max(2 * TT.size, mT + WT)), zT.growTo(TT.slot + TT.size), this.gpuBuffersVersion++), 0 === WT ? this.writeSlot(TT, mT, Tn, 0, 4, !1) : this.writeSlot(TT, mT, UT, UT.byteOffset, WT, !0)
      }
      writeSlot(TT, UT, mT, WT, zT, MT) {
        const gT = UT + (MT ? NT(zT) : zT);
        gT > TT.slotBytes && this.moveSlot(TT, gT), this.arena.write(TT.slot + UT, mT, WT, zT, MT)
      }
      moveSlot(TT, UT) {
        const mT = this.arena,
          WT = Ng.slotBytes(Math.max(UT, Math.min(2 * TT.slotBytes, TT.size))),
          zT = mT.allocate(WT, null, TT.size);
        mT.move(TT.slot, zT, TT.slotBytes), mT.free(TT.slot, TT.slotBytes), TT.slot = zT, TT.slotBytes = WT, this.gpuBuffersVersion++
      }
      cover(TT, UT) {
        const mT = this.buffers.get(TT);
        if (!mT || mT.slot < 0) return !1;
        const WT = Math.min(UT, mT.size);
        return !(WT <= mT.slotBytes) && (this.moveSlot(mT, WT), !0)
      }
      destroyBuffer(TT) {
        var UT;
        null === (UT = this.onDestroy) || void 0 === UT || UT.call(this, TT), TT.destroy()
      }
      gpuBuffer(TT) {
        const UT = this.buffers.get(TT);
        if (!UT) return null;
        if (UT.slot >= 0) return this.arena.buffer;
        if (UT.arena && UT.pending) {
          const TT = UT.pending,
            mT = this.arena;
          return UT.size = NT(TT.byteLength), UT.slotBytes = Ng.slotBytes(function(TT) {
            const UT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength);
            let mT = UT.length;
            if (TT.byteOffset % 4 === 0) {
              for (; mT % 4 !== 0 && 0 === UT[mT - 1];) mT--;
              if (mT % 4 === 0) {
                const UT = new Uint32Array(TT.buffer, TT.byteOffset, mT / 4);
                let WT = UT.length;
                for (; WT > 0 && 0 === UT[WT - 1];) WT--;
                mT = 4 * WT
              }
            }
            for (; mT > 0 && 0 === UT[mT - 1];) mT--;
            return mT
          }(TT)), UT.slot = mT.allocate(UT.slotBytes, TT, UT.size), UT.pending = null, mT.buffer
        }
        if (!UT.gpu && UT.pending) {
          const TT = UT.pending;
          UT.gpu = this.device.createBuffer({
            label: UT.label,
            size: NT(TT.byteLength),
            usage: UT.usage
          }), hg(this.device, UT.gpu, 0, TT, TT.byteLength), UT.pending = null
        }
        return UT.gpu
      }
      gpuOffset(TT) {
        var UT, mT;
        const WT = null !== (UT = null === (mT = this.buffers.get(TT)) || void 0 === mT ? void 0 : mT.slot) && void 0 !== UT ? UT : -1;
        return WT < 0 ? 0 : WT
      }
      gpuEnd(TT) {
        var UT, mT;
        const WT = this.buffers.get(TT);
        return WT ? WT.slot >= 0 ? WT.slot + WT.size : null !== (UT = null === (mT = WT.gpu) || void 0 === mT ? void 0 : mT.size) && void 0 !== UT ? UT : 0 : 0
      }
      vertexInput(TT, UT, mT) {
        var WT, zT, MT, gT;
        return null !== (WT = null !== (zT = mT && this.modelInput(mT, UT)) && void 0 !== zT ? zT : null === (MT = null !== (gT = this.J_.get(TT)) && void 0 !== gT ? gT : this.batchUploads.get(TT)) || void 0 === MT ? void 0 : MT.inputs[UT]) && void 0 !== WT ? WT : null
      }
      modelInput(TT, UT) {
        const mT = this.geometrySlot(TT);
        let WT = mT.inputs.get(UT);
        if (void 0 === WT) {
          const zT = TT.vertexAttributes.find((TT => TT.kind === UT));
          WT = zT ? new BU(this.modelKey(mT, zT.data, !1), zT.offset, zT.stride, zT.components, !1, zT.glType, zT.isNormalized) : null, mT.inputs.set(UT, WT)
        }
        return WT
      }
      modelIndex(TT) {
        return TT.indexData && this.modelKey(this.geometrySlot(TT), TT.indexData, !0)
      }
      geometrySlot(TT) {
        var UT;
        let mT = TT.gpu[dT.i.lite];
        if ((null === (UT = mT) || void 0 === UT ? void 0 : UT.epoch) !== this.epoch) {
          const UT = new Map,
            WT = () => {
              for (const TT of UT.values()) this.bufferDeleted(TT)
            },
            zT = TT => {
              const mT = UT.get(TT);
              mT && this.vertexBufferUpdated(mT, TT)
            };
          mT = {
            keys: UT,
            inputs: new Map,
            release: WT,
            updated: zT,
            epoch: this.epoch
          }, TT.gpu[dT.i.lite] = mT
        }
        return mT
      }
      modelKey(TT, UT, mT) {
        let WT = TT.keys.get(UT);
        if (!WT) {
          if (mT) {
            const TT = {
              fl: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(TT, UT, "model-indices"), WT = TT
          } else WT = {
            fl: 0
          }, this.vertexBufferCreated(WT, UT, !1, "model-vertices");
          TT.keys.set(UT, WT)
        }
        return WT
      }
      indexFormat(TT) {
        return TT.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(TT, UT) {
        --TT.refs > 0 || (this.releaseTexture(TT), rg(TT.images), null !== UT && this.textures.delete(UT))
      }
      load(TT, UT) {
        const {
          epoch: mT
        } = this, WT = UT.decoded = async function(TT) {
          if ("cube" === TT.kind) return async function(TT) {
            if (6 !== TT.length) throw new Error(`${TT.length} files where six faces were expected`);
            const UT = await Kg(TT.map((TT => RT(TT)))),
              mT = UT[0].width;
            return Kg(UT.map((async TT => {
              if (TT.width === mT && TT.height === mT) return TT;
              try {
                return await createImageBitmap(TT, {
                  ...oT,
                  resizeWidth: mT,
                  resizeHeight: mT
                })
              } finally {
                TT.close()
              }
            })))
          }(TT.files);
          if ("data" === TT.kind && TT.data) return [await createImageBitmap(new Blob([TT.data]), oT)];
          return [await RT(Rg(TT))]
        }(TT.source).then((TT => {
          0 === UT.refs || mT !== this.epoch ? rg(TT) : UT.images = TT
        }));
        this.track(UT, Rg(TT.source), WT, (() => {
          UT.wanted && !UT.failed && UT.refs > 0 && this.upload(TT, UT)
        }))
      }
      canvasUpdated(TT, UT, mT) {
        const {
          state: WT
        } = this.textureSlot(TT);
        WT.dynamicSource = {
          invertY: UT,
          premultiplied: mT
        }, WT.dynamic && this.pushDynamic(TT.source, WT)
      }
      async atlasArrays(TT) {
        const {
          device: UT,
          epoch: mT
        } = this;
        let WT;
        try {
          WT = await UU(UT, TT)
        } catch (MT) {
          if (mT === this.epoch) {
            if (!kU(UT)) throw MT;
            await new Promise((TT => {
              this.rebindWaiters.push(TT)
            }))
          }
          return this.atlasArrays(TT)
        }
        if (WT.forEach(((UT, mT) => {
            this.atlasSources.has(UT) || this.atlasSources.set(UT, {
              sources: TT,
              index: mT,
              stride: WT[0].layers
            })
          })), mT !== this.epoch) return WT;
        const zT = (0, sg.e)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const gT of WT) this.atlasBindings.has(gT) || this.atlasBindings.set(gT, {
          view: gT.texture.createView({
            dimension: "2d-array"
          }),
          sampler: zT
        });
        return WT
      }
      boundTexture(TT) {
        const UT = this.atlasBindings.get(TT);
        if (UT) return UT;
        const mT = this.atlasSources.get(TT);
        if (mT) return this.rebuildAtlas(TT, mT), null;
        const WT = TT;
        if (WT.released) return null;
        const zT = this.textureSlot(WT, !0),
          {
            state: MT
          } = zT;
        if (!MT.view && (MT.wanted = !0, MT.loading || MT.failed || this.upload(WT, MT), !MT.view)) return null;
        const gT = this.chosenSampler(WT, zT),
          nT = zT.bound;
        return nT && nT.view === MT.view && nT.sampler === gT ? nT : (zT.bound = {
          view: MT.view,
          sampler: gT
        }, zT.bound)
      }
      rebuildAtlas(TT, UT) {
        let {
          sources: mT,
          index: WT,
          stride: zT
        } = UT;
        if (this.atlasRebuilds.has(TT)) return;
        this.atlasRebuilds.add(TT);
        const {
          epoch: MT
        } = this;
        this.atlasArrays(mT).then((UT => {
          UT[0].layers === zT && UT[WT] ? MT === this.epoch && this.atlasBindings.set(TT, this.atlasBindings.get(UT[WT])) : console.error(`Lite: the new device splits the atlas ${AT(mT.urls[0])} into other arrays than its materials read`)
        }), (TT => {
          console.error(`Lite: could not build the atlas ${AT(mT.urls[0])} again on a new device`, TT)
        }))
      }
      textureLoaded(TT) {
        var UT, mT;
        return null !== (UT = null === (mT = this.heldSlot(TT)) || void 0 === mT ? void 0 : mT.state.decoded) && void 0 !== UT ? UT : null
      }
      textureFailed(TT) {
        var UT;
        return !0 === (null === (UT = this.heldSlot(TT)) || void 0 === UT ? void 0 : UT.state.failed)
      }
      heldSlot(TT) {
        const UT = TT.gpu[dT.i.lite];
        return (null === UT || void 0 === UT ? void 0 : UT.epoch) === this.epoch ? UT : void 0
      }
      chosenSampler(TT, UT) {
        const {
          samplingMode: mT,
          wrapU: WT,
          wrapV: zT
        } = TT.sampler, MT = UT.state.hasMips, gT = function(TT, UT) {
          const {
            bilinear: mT,
            trilinear: WT
          } = dT.k;
          return !UT && TT !== mT || 11 !== TT && TT !== WT && TT !== mT ? 1 : 4
        }(mT, MT), nT = UT.sampler;
        if (nT && nT.samplingMode === mT && nT.hasMips === MT && nT.anisotropy === gT && nT.wrapU === WT && nT.wrapV === zT) return nT.sampler;
        const HT = this.samplerFor(mT, MT, gT, WT, zT);
        return UT.sampler = {
          samplingMode: mT,
          hasMips: MT,
          anisotropy: gT,
          wrapU: WT,
          wrapV: zT,
          sampler: HT
        }, HT
      }
      releaseTexture(TT) {
        var UT, mT;
        TT.view && (null === (mT = this.onDestroy) || void 0 === mT || mT.call(this, TT.view));
        null === (UT = TT.destroy) || void 0 === UT || UT.call(TT)
      }
      textureSlot(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = TT.gpu[dT.i.lite];
        if ((null === mT || void 0 === mT ? void 0 : mT.epoch) === this.epoch) return mT;
        const WT = function(TT) {
          let {
            source: UT,
            sampler: mT
          } = TT;
          return "canvas" === UT.kind ? null : `${UT.kind}|${Rg(UT)}|${mT.noMipmap}|${mT.samplingMode}|${mT.invertY}`
        }(TT);
        let zT = null === WT ? void 0 : this.textures.get(WT);
        var MT;
        zT || (zT = {
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
          dynamicSource: null !== (MT = null === mT || void 0 === mT ? void 0 : mT.state.dynamicSource) && void 0 !== MT ? MT : null
        }, null !== WT && (this.textures.set(WT, zT), this.load(TT, zT), UT && !mT && this.firstBindDecodes++));
        zT.refs++;
        const gT = zT,
          {
            epoch: nT
          } = this,
          HT = {
            state: zT,
            bound: null,
            sampler: null,
            release: () => {
              nT === this.epoch && this.releaseSlot(gT, WT)
            },
            epoch: nT
          };
        return TT.gpu[dT.i.lite] = HT, HT
      }
      samplerFor(TT, UT, mT, WT, zT) {
        const MT = `${TT}|${UT}|${mT}|${WT}|${zT}`;
        let gT = this.samplers.get(MT);
        if (!gT) {
          const nT = {
            ...Dg(TT, UT, mT),
            addressModeU: og(WT),
            addressModeV: og(zT)
          };
          gT = (0, sg.e)(this.engine, nT), this.samplers.set(MT, gT)
        }
        return gT
      }
      upload(TT, UT) {
        const {
          source: mT,
          sampler: WT
        } = TT;
        UT.hasMips = !WT.noMipmap, "canvas" === mT.kind ? this.createDynamic(mT, UT) : "cube" === mT.kind ? this.uploadCube(UT, mT.luminance) : this.uploadImage(UT, !0 === WT.invertY, mT.url)
      }
      uploadImage(TT, UT, mT) {
        const [WT] = TT.images;
        TT.images = null;
        const {
          epoch: zT
        } = this, MT = (0, Fg.e)(this.engine, WT, {
          mipMaps: TT.hasMips,
          invertY: UT,
          srgb: !1
        }).then((UT => {
          WT.close(), 0 !== TT.refs && zT === this.epoch ? (TT.view = UT.view, TT.destroy = UT.texture.destroy.bind(UT.texture)) : UT.texture.destroy()
        }));
        this.track(TT, mT, MT)
      }
      track(TT, UT, mT, WT) {
        const {
          epoch: zT
        } = this;
        TT.loading = !0, this.pending++, mT.catch((mT => {
          zT === this.epoch && (TT.failed = !0, console.warn(`Lite: could not load texture ${AT(UT)}`, mT))
        })).finally((() => {
          zT === this.epoch && (TT.loading = !1, this.pending--, null === WT || void 0 === WT || WT())
        }))
      }
      uploadCube(TT, UT) {
        const mT = TT.images;
        TT.images = null;
        const WT = Cg(this.engine, this.device, mT, (0, dT.C)(UT), TT.hasMips);
        TT.view = WT.createView({
          dimension: "cube"
        }), TT.destroy = () => {
          WT.destroy()
        }
      }
      createDynamic(TT, UT) {
        const {
          canvas: mT
        } = TT, WT = (0, Pg.b)(this.engine, Math.max(1, mT.width), Math.max(1, mT.height), {
          mipMaps: UT.hasMips,
          srgb: !1
        });
        UT.dynamic = WT, UT.view = WT.view, UT.destroy = () => {
          WT.texture.destroy()
        }, this.pushDynamic(TT, UT)
      }
      pushDynamic(TT, UT) {
        const mT = UT.dynamicSource,
          WT = UT.dynamic,
          {
            canvas: zT
          } = TT;
        if (mT && WT && 0 !== zT.width && 0 !== zT.height) return zT.width !== WT.width || zT.height !== WT.height ? (this.releaseTexture(UT), UT.dynamic = null, UT.view = null, void this.createDynamic(TT, UT)) : void(0, Pg.f)(this.engine, WT, zT, {
          invertY: mT.invertY,
          premultiplyAlpha: mT.premultiplied
        })
      }
    }

    function Rg(TT) {
      return "cube" === TT.kind ? TT.rootUrl : "canvas" === TT.kind ? "canvas" : TT.url
    }
    const Tn = new Uint8Array(4);
    var Un = mT(38865);

    function mn(TT) {
      const UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      TT._colorAttachment.storeOp = TT._targetSignature._sampleCount > 1 ? UT : "store";
      const mT = TT._renderPassDescriptor.depthStencilAttachment;
      mT && (mT.depthStoreOp = UT, mT.stencilStoreOp && (mT.stencilStoreOp = UT))
    }
    var Wn = mT(37889),
      zn = mT(37951),
      Mn = mT(37577),
      gn = mT(39706);
    const nn = new Float64Array([1, 1, 1]),
      Hn = new Float64Array([0, 1, 0]),
      kn = new Float64Array(4),
      jn = new Float32Array(16),
      Ln = new Float64Array(3),
      pn = new Float64Array(4);

    function Bn(TT, UT, mT) {
      TT.fov = UT.fov, TT.near = UT.near, TT.far = UT.far, TT.renderWidth = mT.renderWidth, TT.renderHeight = mT.renderHeight, (0, Mn.r)(UT.holderRotation, 0, kn, 0), (0, Mn.c)(nn, 0, kn, 0, UT.holderPosition, 0, jn);
      const WT = UT.JA;
      Ln[0] = WT[0], Ln[1] = WT[1], Ln[2] = WT[2] + 1;
      const zT = TT.viewMatrix;
      (0, Mn.i)(WT, Ln, Hn, zT), (0, Mn.g)(zT, 0, zT), (0, Mn.k)(zT, jn, 0, zT), (0, Mn.g)(zT, 0, zT);
      const MT = TT.worldMatrix;
      (0, Mn.g)(zT, 0, MT), TT.eye[0] = MT[12], TT.eye[1] = MT[13], TT.eye[2] = MT[14], pn[0] = TT.fov, pn[1] = TT.renderWidth / TT.renderHeight, pn[2] = TT.near, pn[3] = TT.far, (0, Mn.o)(pn, TT.projectionMatrix), (0, Mn.k)(zT, TT.projectionMatrix, 0, TT.viewProjectionMatrix), (0, gn.h)(TT.viewProjectionMatrix, TT.frustum)
    }

    function Zn(TT, UT) {
      let mT = TT.frustumPlanes;
      mT || (mT = TT.frustumPlanes = Array.from({
        length: 6
      }, (() => new Wn.e(0, 0, 0, 0))));
      for (let WT = 0; WT < 6; WT++) {
        const TT = mT[WT].normal;
        TT._x = UT[4 * WT], TT._y = UT[4 * WT + 1], TT._z = UT[4 * WT + 2], TT._isDirty = !0, mT[WT].d = UT[4 * WT + 3]
      }
    }

    function cn(TT, UT) {
      const mT = UT.clearColor;
      TT.clearColour[0] = mT.r, TT.clearColour[1] = mT.g, TT.clearColour[2] = mT.b, TT.clearColour[3] = mT.a;
      const WT = UT.ambientColor;
      TT.ambientColour[0] = WT.r, TT.ambientColour[1] = WT.g, TT.ambientColour[2] = WT.b, TT.animationRatio = UT.animationRatio, TT.frameId = UT.frameId, TT.version++
    }

    function vn(TT) {
      const UT = TT.model.view;
      return UT.animTick = (0, zn.f)(), UT.timeMs = performance.now(), cn(UT, TT.XZ), TT.model.update(UT.frameId), UT
    }

    function fn(TT) {
      const UT = TT.XZ,
        {
          view: mT,
          HA: WT
        } = TT.model;
      return Bn(mT, WT, UT.eB()), UT.onBeforeRenderObservable.notifyObservers(UT), Zn(UT, mT.frustum), UT.onBeforeCameraRenderObservable.notifyObservers(UT.activeCamera), vn(TT)
    }
    var qn = mT(37540),
      bn = mT(37658),
      On = mT(37938);

    function en(TT) {
      var UT, mT;
      const WT = (0, JT.R)(TT);
      if (!WT || WT.diffuseTexture && (0, On.g)(TT)) return null;
      const zT = null === (UT = (0, JT.s)(WT, eT.i.name)) || void 0 === UT ? void 0 : UT.state,
        MT = null === (mT = (0, JT.s)(WT, RM.b.name)) || void 0 === mT ? void 0 : mT.state,
        gT = new Float32Array(16);
      return function(TT, UT, mT, WT) {
        var zT, MT;
        const gT = sW;
        WT.set(TT.diffuseColor, gT.diffuse), WT[gT.diffuse + 3] = TT.alpha, WT.set(TT.ambientColor, gT.ambientAndCutoff), WT[gT.ambientAndCutoff + 3] = TT.alphaCutOff, WT.set(TT.emissiveColor, gT.emissiveAndLevel), WT[gT.emissiveAndLevel + 3] = null !== (zT = null === (MT = TT.diffuseTexture) || void 0 === MT ? void 0 : MT.level) && void 0 !== zT ? zT : 1, null !== UT && void 0 !== UT && UT.animDataPerTex ? (WT[gT.anim + 1] = zn.c, WT[gT.anim + 2] = UT.animDataPerTex.length / 3 - 1) : mT && (WT[gT.anim + 1] = mT.numAnimStates, WT[gT.anim + 2] = mT.ticksPerAnimState)
      }(WT, zT, MT, gT), {
        model: WT,
        atlas: zT,
        texture: zT ? "atlas" : WT.diffuseTexture ? "single" : "none",
        animated: zT ? !!zT.animDataPerTex : !!MT,
        liquid: (0, On.k)(TT),
        customRenderMat: (0, On.g)(TT),
        uniformData: gT
      }
    }
    var Yn = mT(2990);
    class Jn {
      constructor(TT) {
        this.units = TT, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var TT;
        this.buffer.destroy(), null === (TT = this.twin) || void 0 === TT || TT.destroy()
      }
    }
    class xn {
      constructor(TT, UT) {
        this.arena = TT, this.hZ = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.hZ = new Sg(UT);
        const mT = new Jn(UT);
        mT.buffer = this.createBuffer(mT, !1), this.backings.push(mT), this.refresh()
      }
      get fl() {
        return this.hZ.fl
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
        let TT = 0;
        for (const UT of this.backings) TT += UT.units * (this.arena.unitBytes + (UT.twin ? this.arena.twinUnitBytes : 0));
        return TT
      }
      holds(TT) {
        return TT.start + TT.length <= this.usable
      }
      lost(TT) {
        return this.dropped || TT.start + TT.length > this.fl
      }
      write(TT, UT) {
        const {
          device: mT,
          unitBytes: WT
        } = this.arena;
        for (const zT of this.backings) {
          const MT = (zT.units - TT.start) * WT;
          MT > 0 && mT.queue.writeBuffer(zT.buffer, TT.start * WT, UT, 0, Math.min(UT.byteLength, MT))
        }
      }
      writeLight(TT, UT) {
        const {
          device: mT,
          twinUnitBytes: WT,
          verticesPerUnit: zT
        } = this.arena, {
          light: MT,
          count: gT
        } = this.arena.twinLight(UT, Math.min(UT.length, TT.length * zT));
        for (const nT of this.backings) {
          nT.twin || (nT.twin = this.createBuffer(nT, !0));
          const UT = (nT.units - TT.start) * zT;
          UT > 0 && mT.queue.writeBuffer(nT.twin, TT.start * WT, MT, 0, Math.min(gT, UT))
        }
      }
      grow(TT) {
        this.arena.assertNotDrawing();
        const {
          device: UT,
          unitBytes: mT,
          label: WT
        } = this.arena, zT = this.backings[this.backings.length - 1], MT = new Jn(TT), gT = UT.createCommandEncoder({
          label: `${WT}-grow`
        });
        MT.buffer = this.createBuffer(MT, !1), gT.copyBufferToBuffer(zT.buffer, 0, MT.buffer, 0, zT.units * mT), zT.twin && (MT.twin = this.createBuffer(MT, !0), gT.copyBufferToBuffer(zT.twin, 0, MT.twin, 0, zT.units * this.arena.twinUnitBytes)), UT.queue.submit([gT.finish()]), this.backings.push(MT), this.hZ.grow(TT)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const TT of this.backings) TT.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(TT, UT) {
        const {
          device: mT,
          unitBytes: WT,
          twinUnitBytes: zT,
          usage: MT,
          label: gT
        } = this.arena;
        mT.pushErrorScope("out-of-memory");
        const nT = mT.createBuffer({
          label: UT ? `${gT}-light` : gT,
          size: TT.units * (UT ? zT : WT),
          usage: (UT ? this.arena.twinUsage : MT) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, mT.popErrorScope().then((mT => {
          this.arena.awaitingVerdict--, this.settle(TT, UT, !mT, !0)
        }), (mT => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${gT} buffer, taken as failed: ${String(mT)}`), this.settle(TT, UT, !1, !1)
        })), nT
      }
      settle(TT, UT, mT, WT) {
        const zT = this.backings.indexOf(TT);
        if (!(this.dropped || zT < 0)) {
          if (!mT) {
            if (WT && this.arena.ranOutOfMemory(TT.units, TT.units * (UT ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === zT) return void this.drop();
            for (const TT of this.backings.splice(zT)) TT.destroy();
            return this.hZ.truncate(this.backings[zT - 1].units), this.growable = !1, void this.promote()
          }
          UT ? TT.twinReady = !0 : (TT.bufferReady = !0, this.arena.allocatedBuffer(TT.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: TT
        } = this;
        let UT = 0;
        for (; UT + 1 < TT.length && TT[UT].ready && TT[UT + 1].ready;) UT++;
        for (const mT of TT.splice(0, UT)) mT.destroy();
        this.refresh()
      }
      refresh() {
        const TT = this.backings[0];
        this.buffer = TT.buffer, this.twin = TT.twinReady ? TT.twin : null, this.usable = !this.dropped && TT.bufferReady ? TT.units : 0
      }
    }
    class dn {
      constructor(TT, UT, mT, WT) {
        let {
          verticesPerUnit: zT = 1,
          twinUsage: MT = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = TT, this.unitBytes = UT, this.usage = mT, this.label = WT, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, yU.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), UT % 4 !== 0) throw new Error(`${WT}: ${UT}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = zT, this.twinUsage = MT, this.twinValueBytes = zT > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * zT
      }
      twinLight(TT, UT) {
        if (4 === this.twinValueBytes) return this.widened.length < UT && (this.widened = new Float32Array(Math.max(UT, 2 * this.widened.length))), this.widened.set(TT.subarray(0, UT)), {
          light: this.widened,
          count: UT
        };
        const mT = UT % this.verticesPerUnit;
        if (0 === mT) return {
          light: TT,
          count: UT
        };
        const WT = UT - mT + this.verticesPerUnit;
        return this.padded.length < WT && (this.padded = new Uint16Array(Math.max(WT, 2 * this.padded.length))), this.padded.set(TT.subarray(0, UT)), this.padded.fill(0, UT, WT), {
          light: this.padded,
          count: WT
        }
      }
      allocate(TT) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), TT > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const zT of this.pages) {
          const UT = zT.hZ.allocate(TT);
          if (UT >= 0) return {
            page: zT,
            start: UT,
            length: TT
          }
        }
        const UT = this.pages[this.pages.length - 1];
        if (null !== UT && void 0 !== UT && UT.canGrow) {
          const mT = Math.min(this.ceiling, Math.max(2 * UT.fl, UT.fl + TT));
          if (mT - UT.fl >= TT) return UT.grow(mT), {
            page: UT,
            start: UT.hZ.allocate(TT),
            length: TT
          }
        }
        UT && UT !== this.pages[0] && 0 === UT.hZ.used && UT.drop();
        const mT = Math.floor(1048576 / this.unitBytes),
          WT = new xn(this, Math.max(TT, Math.min(this.ceiling, mT)));
        return this.pages.push(WT), {
          page: WT,
          start: WT.hZ.allocate(TT),
          length: TT
        }
      }
      free(TT) {
        this.assertNotDrawing();
        const {
          page: UT
        } = TT;
        UT.hZ.free(TT.start, TT.length), 0 === UT.hZ.used && UT !== this.pages[0] && UT !== this.pages[this.pages.length - 1] && UT.drop()
      }
      retire() {
        for (const TT of this.pages) TT.retire()
      }
      remove(TT) {
        const UT = this.pages.indexOf(TT);
        UT >= 0 && this.pages.splice(UT, 1)
      }
      ranOutOfMemory(TT, UT) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${UT}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, TT), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, TT) / 2));
        const mT = performance.now();
        mT >= this.shortageUntil && (this.forgetFailedAt = mT + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = mT + 1e3)
      }
      allocatedBuffer(TT) {
        TT >= this.failed && (this.failed = 1 / 0);
        const UT = Math.min(2 * TT, Math.floor((TT + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, UT))
      }
      stats() {
        let TT = 0,
          UT = 0,
          mT = 0,
          WT = 0;
        for (const zT of this.pages) TT += zT.fl, UT += zT.hZ.used, mT += zT.hasTwin ? zT.fl * this.twinUnitBytes : 0, WT += zT.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: TT * this.unitBytes,
          usedBytes: UT * this.unitBytes,
          twinBytes: mT,
          allocatedBytes: WT
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: TT,
          maxStorageBufferBindingSize: UT
        } = this.device.limits;
        let mT = Math.floor(Math.min(67108864, TT) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (mT = Math.min(mT, Math.floor(UT / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (mT = Math.min(mT, Math.floor(UT / this.twinUnitBytes))), mT
      }
    }
    const wn = 16383;

    function tn(TT, UT, mT, WT, zT) {
      let MT = 0;
      for (let gT = mT; gT < WT; gT += wn) TT.drawIndexed(6 * Math.min(wn, WT - gT), 1, 0, UT + 4 * gT, zT), MT++;
      return MT
    }
    class an {
      constructor(TT, UT) {
        this.recordsGroup = UT, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const mT = EU.f.strideWithoutAtlas;
        this.vertexArena = new dn(TT, mT, GPUBufferUsage.VERTEX, `terrain-vertices-${mT}`), this.quadArena = new dn(TT, bn.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const WT = (0, hU.h)(new Uint16Array(98298), wn);
        this.quadPattern = TT.createBuffer({
          label: "terrain-quad-pattern",
          size: WT.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), TT.queue.writeBuffer(this.quadPattern, 0, WT)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(TT, UT) {
        const mT = UT.packedVertices,
          WT = mT ? this.quadArena.allocate(TT.faceCount) : this.vertexArena.allocate(TT.vertexCount);
        if (!WT) return !1;
        TT.vertices = WT;
        const zT = mT ? new Uint8Array(mT.buffer, mT.byteOffset, mT.byteLength) : new Uint8Array(UT.vertices);
        return WT.page.write(WT, zT), !0
      }
      setLight(TT, UT) {
        const {
          vertices: mT
        } = TT;
        mT && 0 !== UT.length && mT.page.live && (UT.length < TT.vertexCount ? mT.page.arena.warnOnce("shortLight", `a part's ${UT.length} light values are fewer than its ${TT.vertexCount} vertices, so its light is left as it was`) : (mT.page.writeLight(mT, UT), TT.lit = !0))
      }
      lightFullSky(TT, UT) {
        this.fullSky.length < UT && (this.fullSky = new Uint16Array(Math.max(UT, 4096)).fill(Yn.h));
        for (const mT of TT) {
          const TT = mT.vertices;
          TT.page.live && (TT.page.writeLight(TT, this.fullSky), mT.lit = !0)
        }
      }
      backed(TT) {
        const {
          vertices: UT
        } = TT;
        return !!UT && UT.page.holds(UT)
      }
      lost(TT) {
        const {
          vertices: UT
        } = TT;
        return !!UT && UT.page.lost(UT)
      }
      release(TT) {
        TT.vertices && TT.vertices.page.arena.free(TT.vertices), TT.vertices = null, TT.lit = !1
      }
      setDrawing(TT) {
        this.forgetBound()
      }
      draw(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UT.faceCount;
        const MT = UT.vertices,
          gT = MT.page,
          nT = mT ? gT.twin : null;
        if (!gT.holds(MT) || mT && !nT) return 0;
        const {
          verticesPerUnit: HT
        } = gT.arena;
        let kT = MT.start * HT;
        this.boundPattern || (TT.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const jT = WT + zT;
        if (HT > 1) return gT.buffer === this.boundRecords && nT === this.boundRecordsLight || (TT.setBindGroup(1, this.recordsGroup(gT.buffer, nT)), this.boundRecords = gT.buffer, this.boundRecordsLight = nT), tn(TT, kT, WT, jT, UT.slot);
        gT.buffer !== this.boundVertices && (TT.setVertexBuffer(0, gT.buffer), this.boundVertices = gT.buffer), nT && nT !== this.boundLight && (TT.setVertexBuffer(1, nT), this.boundLight = nT);
        const lT = UT.faceCount;
        return jT <= lT ? tn(TT, kT, WT, jT, UT.slot) : tn(TT, kT, WT, lT, UT.slot) + tn(TT, kT, Math.max(WT, lT) - lT, jT - lT, UT.slot)
      }
      get buffersAwaitingVerdict() {
        let TT = 0;
        for (const UT of this.arenas()) TT += UT.awaitingVerdict;
        return TT
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class yn {
      constructor(TT, UT, mT, WT) {
        this.device = TT, this.splitBefore = UT, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = TT.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const zT = TT.createShaderModule({
          label: "scene-depth-copy",
          code: (MT = mT._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${MT?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var MT;
        TT.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: zT,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: zT,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((TT => {
          this.pipeline = TT, this.building = !1
        }), (TT => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", TT)
        })), mT._executeWithTransmission = () => this.execute(mT, WT)
      }
      get compiling() {
        return this.building
      }
      setWanted(TT) {
        this.wanted = TT
      }
      setPlanes(TT, UT) {
        TT === this.near && UT === this.far || (this.near = TT, this.far = UT, this.unproject[0] = TT / (UT - TT), this.unproject[1] = UT * TT / (UT - TT), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var TT, UT;
        return null !== (TT = null === (UT = this.copy) || void 0 === UT ? void 0 : UT.view) && void 0 !== TT ? TT : null
      }
      execute(TT, UT) {
        var mT;
        null === (mT = this.retired) || void 0 === mT || mT.destroy(), this.retired = null;
        const WT = OU(UT),
          zT = TT._transparentBindings,
          MT = this.wanted && this.pipeline ? this.splitIndex(zT) : -1,
          gT = TT._colorAttachment,
          nT = gT.resolveTarget;
        MT >= 0 && (gT.resolveTarget = void 0, mn(TT, !0));
        let HT = WT.beginRenderPass(TT._renderPassDescriptor);
        HT.setBindGroup(0, TT._sceneBG);
        let kT = this.drawList(HT, UT, TT._opaqueBindings, 0, TT._opaqueBindings.length);
        if (kT += this.drawList(HT, UT, TT._directBindings, 0, TT._directBindings.length), kT += this.drawList(HT, UT, zT, 0, MT >= 0 ? MT : zT.length), HT.end(), MT < 0) return kT;
        mn(TT);
        const jT = TT._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: lT,
            stencilLoadOp: LT
          } = jT,
          pT = gT.loadOp;
        gT.resolveTarget = nT;
        try {
          this.copyDepth(WT, TT), gT.loadOp = "load", jT.depthLoadOp = "load", LT && (jT.stencilLoadOp = "load"), HT = WT.beginRenderPass(TT._renderPassDescriptor), HT.setBindGroup(0, TT._sceneBG), kT += this.drawList(HT, UT, zT, MT, zT.length), HT.end()
        } finally {
          gT.loadOp = pT, jT.depthLoadOp = lT, jT.stencilLoadOp = LT
        }
        return kT
      }
      splitIndex(TT) {
        for (let UT = 0; UT < TT.length; UT++)
          if (TT[UT].renderable === this.splitBefore) return UT;
        return -1
      }
      drawList(TT, UT, mT, WT, zT) {
        let MT = null,
          gT = 0;
        for (let nT = WT; nT < zT; nT++) {
          const WT = mT[nT],
            zT = WT.renderable.mesh;
          zT && !1 === zT.visible || (WT.pipeline !== MT && (TT.setPipeline(WT.pipeline), MT = WT.pipeline), gT += WT.draw(TT, UT))
        }
        return gT
      }
      copyDepth(TT, UT) {
        var mT, WT;
        const zT = (null !== (mT = UT._config.depth) && void 0 !== mT ? mT : UT._config.rt)._depthTexture,
          MT = (null === (WT = this.copy) || void 0 === WT ? void 0 : WT.source) === zT ? this.copy : this.remakeCopy(zT),
          gT = TT.beginRenderPass(MT.pass);
        gT.setPipeline(this.pipeline), gT.setBindGroup(0, MT.bindGroup), gT.draw(3), gT.end()
      }
      remakeCopy(TT) {
        var UT, mT;
        this.retired = null !== (UT = null === (mT = this.copy) || void 0 === mT ? void 0 : mT.texture) && void 0 !== UT ? UT : null;
        const WT = this.device.createTexture({
            label: "scene-depth",
            size: [TT.width, TT.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          zT = WT.createView(),
          MT = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: TT.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          gT = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: zT,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: TT,
          texture: WT,
          view: zT,
          bindGroup: MT,
          pass: gT
        }, this.copy
      }
    }
    const Xn = "rgba8unorm";

    function In(TT) {
      return TT ? 15 : 1
    }
    class Qn {
      constructor(TT, UT, mT, WT) {
        this.device = TT, this.terrain = WT, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = UT._targetSignature._sampleCount > 1, this.cameraBuffer = TT.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = TT.createBindGroupLayout({
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
        const zT = TT.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = TT.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: zT,
          entries: []
        });
        const MT = TT.createShaderModule({
          label: "sun-shadow-mask",
          code: (gT = this.edge, `${(0,DU.H)()}${HW({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${gT?om:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${In(gT)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${gT?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var gT;
        TT.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: TT.createPipelineLayout({
            bindGroupLayouts: [this.layout, zT, zT, SM(TT, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: MT,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: MT,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((TT => {
          this.pipeline = TT, this.building = !1
        }), (TT => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", TT)
        }));
        const nT = UT._executeWithTransmission;
        UT._executeWithTransmission = TT => this.execute(UT, mT, (() => nT ? nT(TT) : function(TT, UT) {
          const mT = OU(UT).beginRenderPass(TT._renderPassDescriptor);
          mT.setBindGroup(0, TT._sceneBG);
          let WT = sn(mT, UT, TT._opaqueBindings);
          return WT += sn(mT, UT, TT._directBindings), WT += sn(mT, UT, TT._transparentBindings), mT.end(), WT
        }(UT, mT)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var TT, UT;
        return null !== (TT = null === (UT = this.targets) || void 0 === UT ? void 0 : UT.maskView) && void 0 !== TT ? TT : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(TT) {
        ! function(TT, UT) {
          const mT = TT.worldMatrix,
            WT = TT.projectionMatrix,
            zT = 1 / WT[0],
            MT = 1 / WT[5],
            gT = TT.far * TT.near / (TT.far - TT.near);
          UT[0] = TT.eye[0], UT[1] = TT.eye[1], UT[2] = TT.eye[2], UT[3] = 2 ** -23 / gT, UT[4] = mT[0] * zT, UT[5] = mT[1] * zT, UT[6] = mT[2] * zT, UT[7] = gT, UT[8] = mT[4] * MT, UT[9] = mT[5] * MT, UT[10] = mT[6] * MT, UT[11] = TT.near / (TT.far - TT.near), UT[12] = mT[8], UT[13] = mT[9], UT[14] = mT[10], UT[15] = 0
        }(TT, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(TT, UT, mT) {
        if (this.retire(), !this.terrain.readsMask) return mT();
        const WT = this.targetsFor(TT),
          zT = OU(UT),
          MT = TT._renderPassDescriptor.depthStencilAttachment;
        this.edge || (WT.prepass.depthStencilAttachment.view = MT.view);
        const gT = this.terrain.drawPrepass(zT, WT.prepass, TT._sceneBG);
        if (0 === gT) return mT();
        if (this.trace(zT, WT), this.edge) return gT + 1 + mT();
        const {
          depthLoadOp: nT,
          stencilLoadOp: HT
        } = MT;
        MT.depthLoadOp = "load", HT && (MT.stencilLoadOp = "load");
        try {
          return gT + 1 + mT()
        } finally {
          MT.depthLoadOp = nT, MT.stencilLoadOp = HT
        }
      }
      trace(TT, UT) {
        const mT = this.terrain.sunShadowGroup(),
          WT = TT.beginRenderPass(UT.trace);
        this.pipeline && mT && (WT.setPipeline(this.pipeline), WT.setBindGroup(0, UT.bindGroup), WT.setBindGroup(1, this.empty), WT.setBindGroup(2, this.empty), WT.setBindGroup(3, mT), WT.draw(3)), WT.end()
      }
      retire() {
        const TT = this.retired;
        var UT;
        TT && (TT.mask.destroy(), TT.normals.destroy(), null === (UT = TT.depth) || void 0 === UT || UT.destroy(), this.retired = null)
      }
      targetsFor(TT) {
        var UT, mT;
        const WT = (null !== (UT = TT._config.depth) && void 0 !== UT ? UT : TT._config.rt)._depthTexture;
        return (null === (mT = this.targets) || void 0 === mT ? void 0 : mT.source) === WT ? this.targets : this.remake(TT, WT)
      }
      remake(TT, UT) {
        var mT;
        this.retired = this.targets;
        const WT = [UT.width, UT.height],
          zT = this.device.createTexture({
            label: "sun-shadow-mask",
            size: WT,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          MT = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: WT,
            format: Xn,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          gT = null !== (mT = TT._targetSignature._depthStencilFormat) && void 0 !== mT ? mT : UT.format,
          nT = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: WT,
            format: gT,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          HT = TT._renderPassDescriptor.depthStencilAttachment,
          kT = gT.includes("stencil"),
          jT = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: MT.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: nT ? nT.createView() : HT.view,
              depthClearValue: HT.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...kT ? {
                stencilClearValue: HT.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          lT = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== nT && void 0 !== nT ? nT : UT).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: MT.createView()
            }]
          }),
          LT = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: zT.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [In(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: UT,
          mask: zT,
          maskView: zT.createView(),
          normals: MT,
          depth: nT,
          bindGroup: lT,
          prepass: jT,
          trace: LT
        }, this.targets
      }
    }

    function sn(TT, UT, mT) {
      let WT = null,
        zT = 0;
      for (const MT of mT) {
        const mT = MT.renderable.mesh;
        mT && !1 === mT.visible || (MT.pipeline !== WT && (TT.setPipeline(MT.pipeline), WT = MT.pipeline), zT += MT.draw(TT, UT))
      }
      return zT
    }
    const Fn = 6e4,
      Pn = {
        status: "ok"
      },
      Vn = {
        status: "skipped"
      };
    async function un(TT, UT) {
      const {
        isCancelled: mT
      } = TT;
      if (mT()) return {
        status: "Km"
      };
      const {
        target: WT
      } = UT;
      if (!WT) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const zT = [],
        MT = Promise.all(Array.from(new Set(TT.materials), (async mT => {
          zT.push(await async function(TT, UT, mT, WT) {
            const zT = {
              lighting: TT.lighting,
              dirLightCount: Math.min(TT.dirLightCount, 4),
              Np: TT.runtime
            };
            try {
              const MT = UT.material(WT);
              return MT && XW(UT.programKey(MT, !1, zT)) ? (await MT.ready, TT.isCancelled() ? Pn : MT.bindGroupLayout ? await async function(TT, UT, mT, WT) {
                const {
                  device: zT
                } = TT;
                let MT, gT;
                zT.pushErrorScope("validation");
                try {
                  MT = TT.pipelineBuild(UT, mT, WT)
                } finally {
                  gT = zT.popErrorScope().catch((() => null))
                }
                const [nT, HT] = await Promise.all([gT, MT.built.then((() => null), (TT => null !== TT && void 0 !== TT ? TT : new Error("pipeline failed")))]);
                if (!nT && !HT) return Pn;
                const kT = await Cn(MT.module),
                  jT = kT.length > 0 ? kT.map((TT => `${MT.name} ${TT.lineNum}:${TT.linePos}: ${TT.message}`)).join("\n") : `${MT.name}: ${rn(null!==HT&&void 0!==HT?HT:nT)}`;
                return {
                  status: "failed",
                  material: UT.model.name,
                  message: jT
                }
              }(UT, MT, UT.programKey(MT, "none" !== MT.texture, zT), mT): (console.warn(`Shader pack: skipped the compile check for "${WT.name}", whose textures failed to load`), Vn)) : Pn
            } catch (MT) {
              return {
                status: "failed",
                material: WT.name,
                message: rn(MT)
              }
            }
          }(TT, UT, WT, mT))
        }))),
        gT = function(TT, UT) {
          let mT, WT, zT = !1;
          const MT = new Promise((MT => {
            var gT;
            mT = setTimeout((() => {
              MT("timeout")
            }), null !== (gT = UT.timeoutMs) && void 0 !== gT ? gT : Fn), WT = setInterval((() => {
              UT.isCancelled() && MT("Km")
            }), 50), TT.lost.then((() => {
              zT = !0, MT("lost")
            }))
          }));
          return {
            signal: MT,
            lost: () => zT,
            dispose: () => {
              clearTimeout(mT), clearInterval(WT)
            }
          }
        }(UT.device, TT);
      let nT;
      try {
        nT = await Promise.race([MT.then((() => "done")), gT.signal])
      } finally {
        gT.dispose()
      }
      if ("Km" === nT || mT()) return {
        status: "Km"
      };
      const HT = zT.find((TT => "failed" === TT.status));
      return HT && "lost" !== nT && !gT.lost() && await new Promise((TT => {
        setTimeout(TT, 0)
      })), "lost" === nT || gT.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : HT ? {
        status: "failed",
        failure: {
          material: HT.material,
          message: HT.message
        }
      } : "timeout" === nT ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(kT=TT.timeoutMs)&&void 0!==kT?kT:Fn)/1e3} s`), {
        status: "skipped"
      }) : zT.some((TT => "skipped" === TT.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var kT
    }
    async function Cn(TT) {
      if (!TT) return [];
      try {
        return (await TT.getCompilationInfo()).messages.filter((TT => "error" === TT.type))
      } catch {
        return []
      }
    }

    function rn(TT) {
      var UT;
      return null !== (UT = null === TT || void 0 === TT ? void 0 : TT.message) && void 0 !== UT ? UT : String(TT)
    }

    function Kn(TT, UT, mT, WT, zT) {
      XW(UT) ? Cn(WT).then((UT => {
        const [WT] = UT;
        jU(TT, "terrain", mT, zT, WT ? `${WT.lineNum}:${WT.linePos} error: ${WT.message}` : null)
      })) : jU(TT, "terrain", mT, zT)
    }
    var Sn = mT(37666),
      Gn = mT(37676),
      Nn = mT(37687),
      En = mT(2985);

    function hn(TT, UT, mT, WT, zT) {
      const MT = Math.hypot(mT[0], mT[1], mT[2]);
      if (!(MT > 0)) return;
      const gT = [mT[0] / MT, mT[1] / MT, mT[2] / MT],
        nT = [Math.floor(UT[0]), Math.floor(UT[1]), Math.floor(UT[2])],
        HT = [0, 0, 0],
        kT = [1 / 0, 1 / 0, 1 / 0],
        jT = [1 / 0, 1 / 0, 1 / 0];
      for (let pT = 0; pT < 3; pT++) gT[pT] > 0 ? (HT[pT] = 1, kT[pT] = (nT[pT] + 1 - UT[pT]) / gT[pT], jT[pT] = 1 / gT[pT]) : gT[pT] < 0 && (HT[pT] = -1, kT[pT] = (nT[pT] - UT[pT]) / gT[pT], jT[pT] = -1 / gT[pT]);
      const {
        cB: lT
      } = TT;
      let LT = TT.QG(nT[0], nT[1], nT[2]);
      for (;;) {
        const UT = kT[0] < kT[1] ? kT[0] < kT[2] ? 0 : 2 : kT[1] < kT[2] ? 1 : 2;
        if (kT[UT] > WT) return;
        const mT = HT[UT] > 0 ? nT[UT] + 1 : nT[UT];
        nT[UT] += HT[UT], kT[UT] += jT[UT];
        const MT = TT.QG(nT[0], nT[1], nT[2]),
          gT = MT !== LT && !(TT.opaque[LT] && TT.opaque[MT]);
        if (gT) {
          const WT = [nT[0], nT[1], nT[2]];
          WT[UT] = mT;
          const MT = Math.floor(WT[0] / lT),
            gT = Math.floor(WT[1] / lT),
            HT = Math.floor(WT[2] / lT);
          !TT.isDrawn(MT, gT, HT) && TT.hasParts(MT, gT, HT) && zT.add(`${MT},${gT},${HT}`)
        }
        if (gT && TT.occluders[MT]) return;
        LT = MT
      }
    }

    function Dn(TT, UT) {
      return TT.group - UT.group || TT.nearest - UT.nearest
    }
    class An {
      constructor(TT, UT) {
        this.device = TT, this.Qq = UT, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var TT;
        const UT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.next++;
        if (8 * UT >= this.data.length) {
          const TT = new Float32Array(2 * this.data.length);
          TT.set(this.data), this.data = TT, this.words = new Uint32Array(TT.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Qq()
        }
        return UT
      }
      release(TT) {
        this.free.push(TT)
      }
      set(TT, UT, mT, WT, zT) {
        const MT = 8 * TT + KW;
        this.data[MT] = UT, this.data[MT + 1] = mT, this.data[MT + 2] = WT, this.setVisibility(TT, zT)
      }
      setVisibility(TT, UT) {
        this.data[8 * TT + SW] = UT, this.markDirty(TT, TT)
      }
      setFaces(TT, UT, mT) {
        const WT = 8 * TT;
        this.words[WT + GW] = UT, this.words[WT + NW] = mT, this.markDirty(TT, TT)
      }
      markDirty(TT, UT) {
        this.dirtyMin = Math.min(this.dirtyMin, TT), this.dirtyMax = Math.max(this.dirtyMax, UT)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Rn = rW,
      TH = !0;
    const UH = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Rn.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      mH = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class WH {
      constructor(TT) {
        this.device = TT, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(QW), this.dirLightUniforms = this.frameUniforms.subarray(IW.dirLights, IW.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, yU.c)(), this.faceGroups = !0, this.visibilityGraph = TH, this.visCull = TH, this.visCheck = !1, this.visCullMinDistance = Nn.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new nH, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Np = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new an(TT, ((TT, UT) => this.recordsGroup(TT, UT))), this.slots = new An(TT, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = eU(TT), this.frameLayout = TT.createBindGroupLayout({
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
        }), this.frameBuffer = TT.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = TT.createSampler({
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
          bind: (TT, UT) => this.createBinding(this.opaqueRenderable, UT, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (TT, UT) => this.createBinding(this.transparentRenderable, UT, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(TT, UT) {
        this.sceneDepth = new yn(this.device, this.transparentRenderable, TT, UT)
      }
      createFrameBindGroup() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== TT && void 0 !== TT ? TT : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== UT && void 0 !== UT ? UT : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(TT, UT) {
        const mT = null !== UT && void 0 !== UT ? UT : TT;
        let WT = this.recordsGroups.get(mT);
        return WT || (WT = this.createFrameBindGroup(TT, UT), this.recordsGroups.set(mT, WT)), WT
      }
      setChunkMesh(TT, UT, mT) {
        var WT;
        let zT = this.chunks.get(TT);
        zT ? this.geometry.release(zT) : (zT = {
          mesh: TT,
          slot: this.slots.allocate(),
          origin: [mT[0], mT[1], mT[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: TT.visibility,
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
        }, this.chunks.set(TT, zT), this.writeSlot(zT)), zT.material = TT.material ? this.materialFor(TT.material) : null, zT.packed = !!UT.packedVertices, zT.vertexCount = (0, bn.c)(UT), zT.faceCount = zT.vertexCount / 4;
        const MT = null !== (WT = UT.faceGroups) && void 0 !== WT ? WT : null;
        if (zT.faceGroups = MT, MT) {
          const TT = Sn.m;
          zT.planePX = MT[TT], zT.planeNX = MT[TT + 1], zT.planePY = MT[TT + 2], zT.planeNY = MT[TT + 3], zT.planePZ = MT[TT + 4], zT.planeNZ = MT[TT + 5]
        }
        this.drawWhole(zT), 0 !== zT.faceCount && (this.geometry.set(zT, UT) ? (zT.packed && this.slots.setFaces(zT.slot, zT.vertices.start + zT.faceCount, zT.faceCount), UT.mB && this.setChunkMeshLight(TT, UT.mB)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${zT.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(TT, UT) {
        const mT = this.chunks.get(TT);
        mT && this.geometry.setLight(mT, UT)
      }
      drawStats() {
        let TT = this.transparent.length;
        for (const UT of this.opaqueBatches) TT += UT.meshes.length;
        return {
          drawn: TT,
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
      removeChunkMesh(TT) {
        const UT = this.chunks.get(TT);
        UT && (this.geometry.release(UT), this.slots.release(UT.slot), this.chunks.delete(TT))
      }
      remeshLost(TT, UT) {
        this.geometry.release(UT), UT.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** UT.lostRemeshes++);
        const mT = TT.Nl,
          [WT, zT, MT] = mT.zWT(UT.origin[0], UT.origin[1], UT.origin[2]),
          gT = mT.lZ.LZ(WT, zT, MT);
        gT && (gT.kZ = !0, gT.BZ = !0, mT.jZ(gT, !1))
      }
      chooseFaceRanges(TT, UT, mT) {
        const WT = this.faceRanges;
        TT.faceMask = mT, TT.rangeCount = (0, Gn.n)(UT, mT, WT), TT.first0 = WT[0], TT.count0 = WT[1], TT.first1 = WT[2], TT.count1 = WT[3]
      }
      drawWhole(TT) {
        TT.faceMask = -1, TT.faceEpoch = -1, TT.rangeCount = 1, TT.first0 = 0, TT.count0 = TT.faceCount
      }
      writeSlot(TT) {
        const [UT, mT, WT] = this.originOffset;
        this.slots.set(TT.slot, TT.origin[0] - UT, TT.origin[1] - mT, TT.origin[2] - WT, TT.visibility)
      }
      materialFor(TT) {
        const UT = this.materials.get(TT);
        if (UT) return UT;
        const mT = en(TT);
        if (!mT) return this.warnOnce(`material:${TT.name}`, `Lite terrain cannot draw material "${TT.name}"; its chunks are skipped.`), null;
        const {
          model: WT,
          atlas: zT,
          texture: MT,
          animated: gT,
          uniformData: nT
        } = mT, HT = {
          id: this.materials.size,
          model: WT,
          texture: MT,
          animated: gT,
          uniformData: nT,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${TT.name}`,
            size: nT.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: mT.liquid,
          customRenderMat: mT.customRenderMat,
          atlasCount: 0,
          A4: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(TT, HT), this.device.queue.writeBuffer(HT.uniformBuffer, 0, nT), HT.ready = this.createMaterialBindGroup(HT, zT).catch((UT => {
          console.error(`Lite terrain failed to load the textures of material "${TT.name}"`, UT)
        })), HT
      }
      materialLayout(TT) {
        const UT = function(TT) {
            const UT = ["uniforms"];
            if ("atlas" === TT.texture) {
              TT.animated && UT.push("animData"), UT.push("sampler");
              for (let mT = 0; mT < TT.atlasCount; mT++) UT.push("textureArray")
            } else "single" === TT.texture && UT.push("sampler", "texture");
            return UT
          }(TT),
          mT = UT.join(",");
        let WT = this.materialLayouts.get(mT);
        if (!WT) {
          const TT = GPUShaderStage.FRAGMENT;
          WT = this.device.createBindGroupLayout({
            label: `terrain-material-${mT}`,
            entries: UT.map(((UT, mT) => {
              switch (UT) {
                case "uniforms":
                  return {
                    binding: mT, visibility: GPUShaderStage.VERTEX | TT, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: mT, visibility: GPUShaderStage.VERTEX | TT, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: mT, visibility: TT, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: mT, visibility: TT, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: mT, visibility: TT, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(mT, WT)
        }
        return WT
      }
      async createMaterialBindGroup(TT, UT) {
        const mT = [{
          buffer: TT.uniformBuffer
        }];
        if (UT) {
          const WT = await UU(this.device, UT.sources);
          TT.atlasCount = WT.length, TT.A4 = WT[0].layerWidth, TT.atlasLayers = WT[0].layers, UT.animDataPerTex && mT.push({
            buffer: ET(this.device, Float32Array.from(UT.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), mT.push(this.sampler);
          for (const TT of WT) mT.push(TT.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === TT.texture) {
          const {
            url: UT
          } = TT.model.diffuseTexture.source, {
            pixels: WT,
            width: zT,
            height: MT
          } = await TU(UT);
          mT.push(this.sampler), mT.push(DT(this.device, WT, zT, MT, 1, `terrain-${UT}`).createView({
            dimension: "2d"
          }))
        }
        const WT = this.materialLayout(this.programKey(TT, !1));
        TT.bindGroupLayout = WT, TT.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${TT.model.name}`,
          layout: WT,
          entries: mT.map(((TT, UT) => ({
            binding: UT,
            resource: TT
          })))
        })
      }
      programKey(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const WT = mT ? mT.lighting : this.lighting,
          zT = mT ? mT.Np : this.Np,
          MT = {
            texture: TT.texture,
            atlasCount: TT.atlasCount,
            A4: TT.A4,
            atlasLayers: TT.atlasLayers,
            animated: TT.animated,
            alphaTest: TT.model.transparencyMode === JT.j.alphaTest,
            lighting: WT,
            dirLightCount: mT ? mT.dirLightCount : this.dirLightCount,
            packed: UT
          };
        if (!zT) return MT;
        const gT = this.shaderPackFields(TT, zT),
          nT = "atlas" === TT.texture && TT.model.transparencyMode === JT.j.opaque && wW(gT.packVariant);
        return {
          ...MT,
          ...gT,
          alphaTest: MT.alphaTest || nT
        }
      }
      shaderPackFields(TT, UT) {
        const mT = this.packVariant(TT, UT);
        return void 0 === mT ? xW : {
          packVariant: mT,
          liquid: TT.liquid
        }
      }
      packVariant(TT, UT) {
        return TT.customRenderMat ? void 0 : function(TT, UT) {
          const mT = TT ? TT.defineFor(UT ? "liquid" : "terrain") : 0;
          return 0 === mT ? void 0 : mT
        }(UT, TT.liquid)
      }
      isBlended(TT) {
        return TT.model.transparencyMode === JT.j.alphaBlend
      }
      shaderModule(TT, UT) {
        let mT = this.modules.get(TT);
        return mT || (mT = this.device.createShaderModule({
          label: UT,
          code: TT
        }), this.modules.set(TT, mT)), mT
      }
      pipelineFor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!TT.bindGroupLayout) return null;
        if (!WT) return this.pipelineOf(TT, UT, mT);
        const zT = this.pipelineIdNow(TT, UT, !0, mT),
          MT = this.pipelines.get(zT);
        if (MT) return MT;
        const gT = this.pipelineOf(TT, UT, mT);
        return gT && void 0 === MT && this.startPipeline(zT, TT, {
          ...this.programKey(TT, UT),
          resting: WT
        }, mT), gT
      }
      pipelineOf(TT, UT, mT) {
        const WT = this.pipelineIdNow(TT, UT, !1, mT),
          zT = this.pipelines.get(WT);
        return void 0 !== zT ? zT : (this.startPipeline(WT, TT, this.programKey(TT, UT), mT), null)
      }
      pipelineIdNow(TT, UT, mT, WT) {
        const {
          lighting: zT,
          dirLightCount: MT
        } = this, {
          transparencyMode: gT,
          backFaceCulling: nT
        } = TT.model, HT = this.packVariant(TT, this.Np), kT = (UT ? 2 : 0) + (mT ? 1 : 0), jT = TT.pipelineIds[kT];
        if (null !== jT && jT.lighting === zT && jT.dirLightCount === MT && jT.packVariant === HT && jT.transparencyMode === gT && jT.cull === nT && jT.atlasCount === TT.atlasCount && jT.A4 === TT.A4 && jT.atlasLayers === TT.atlasLayers && jT.colorFormat === WT._colorFormat && jT.depthStencilFormat === WT._depthStencilFormat && jT.sampleCount === WT._sampleCount) return jT.id;
        const lT = this.programKey(TT, UT),
          LT = this.pipelineId(TT, mT ? {
            ...lT,
            resting: mT
          } : lT, WT);
        return TT.pipelineIds[kT] = {
          id: LT,
          lighting: zT,
          dirLightCount: MT,
          packVariant: HT,
          transparencyMode: gT,
          cull: nT,
          atlasCount: TT.atlasCount,
          A4: TT.A4,
          atlasLayers: TT.atlasLayers,
          colorFormat: WT._colorFormat,
          depthStencilFormat: WT._depthStencilFormat,
          sampleCount: WT._sampleCount
        }, LT
      }
      pipelineId(TT, UT, mT) {
        return zH(UT, this.isBlended(TT), TT.model.backFaceCulling, mT)
      }
      pipelineBuild(TT, UT, mT) {
        var WT;
        const zT = this.pipelineId(TT, UT, mT);
        return null !== (WT = this.builds.get(zT)) && void 0 !== WT ? WT : this.startPipeline(zT, TT, UT, mT)
      }
      startPipeline(TT, UT, mT, WT) {
        var zT;
        this.pipelines.set(TT, null);
        const MT = RW(mT),
          gT = this.isBlended(UT),
          nT = this.shadowMask && WT._depthStencilFormat ? function(TT, UT, mT, WT) {
            if (void 0 === TT.packVariant || TT.liquid || UT) return "none";
            const zT = (0, oU.d)(TT.packVariant);
            return null === zT || void 0 === zT || !zT.sunShadow || !gW(zT, mT) || zT.discards || TT.alphaTest && wW(TT.packVariant) ? "none" : WT ? "edge" : "plain"
          }(mT, gT, !!this.sunShadow, WT._sampleCount > 1) : "none";
        let HT;
        try {
          HT = Tz(mT, !!this.sunShadow, nT)
        } catch (cT) {
          if (!XW(mT)) throw cT;
          return this.failedPackBuild(TT, mT, MT, cT)
        }
        const kT = this.shaderModule(HT, MT),
          jT = [];
        mT.packed || (jT.push(function(TT, UT) {
          const mT = [{
            shaderLocation: Rn.position,
            offset: EU.f.am,
            format: "float32x3"
          }, {
            shaderLocation: Rn.normal,
            offset: EU.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Rn.color,
            offset: EU.f.colorOffset,
            format: "unorm8x4"
          }];
          return TT && mT.push({
            shaderLocation: Rn.uv,
            offset: EU.f.uvOffset,
            format: "float32x2"
          }), UT && mT.push({
            shaderLocation: Rn.blockFlagWords,
            offset: EU.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: EU.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: mT
          }
        }("none" !== mT.texture, XW(mT))), mT.lighting && jT.push(UH));
        const lT = UT.model.backFaceCulling,
          LT = {
            label: MT,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, UT.bindGroupLayout, ...EM(this.device, mT, !!this.sunShadow, "none" !== nT)]
            }),
            vertex: {
              module: kT,
              entryPoint: "mainVertex",
              buffers: jT
            },
            fragment: fU({
              module: kT,
              entryPoint: "mainFragment"
            }, WT, gT ? mH : null),
            depthStencil: WT._depthStencilFormat ? {
              format: WT._depthStencilFormat,
              depthCompare: null !== (zT = WT._depthCompare) && void 0 !== zT ? zT : YU,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: WT._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: lT ? "back" : "none"
            }
          },
          pT = mT.resting ? 0 : 1;
        this.compiling += pT;
        const BT = "none" === nT ? this.device.createRenderPipelineAsync(LT) : this.startMaskPipelines(kT, LT, "edge" === nT);
        BT.then((UT => {
          this.compiling -= pT, this.pipelines.set(TT, UT)
        }), (TT => {
          this.compiling -= pT, console.error(`Lite terrain pipeline ${MT} failed`, TT), Kn(this.device, mT, MT, kT, TT)
        }));
        const ZT = {
          name: MT,
          module: kT,
          built: BT
        };
        return this.builds.set(TT, ZT), ZT
      }
      startMaskPipelines(TT, UT, mT) {
        const WT = UT.depthStencil,
          zT = this.device.createRenderPipelineAsync(mT ? UT : {
            ...UT,
            depthStencil: {
              ...WT,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          MT = this.device.createRenderPipelineAsync({
            ...UT,
            label: `${UT.label}-prepass`,
            fragment: {
              module: TT,
              entryPoint: "prepassFragment",
              targets: [{
                format: Xn
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([zT, MT]).then((TT => {
          let [UT, mT] = TT;
          return this.prepassOf.set(UT, mT), this.maskPipelines++, UT
        }))
      }
      failedPackBuild(TT, UT, mT, WT) {
        console.error(`Lite terrain pipeline ${mT} failed`, WT), Kn(this.device, UT, mT, null, WT);
        const zT = Promise.reject(WT);
        zT.catch((() => {}));
        const MT = {
          name: mT,
          module: null,
          built: zT
        };
        return this.builds.set(TT, MT), MT
      }
      checkShaderPack(TT) {
        return un(TT, {
          device: this.device,
          target: this.target,
          material: TT => this.materialFor(TT),
          programKey: (TT, UT, mT) => this.programKey(TT, UT, mT),
          pipelineBuild: (TT, UT, mT) => this.pipelineBuild(TT, UT, mT)
        })
      }
      createBinding(TT, UT, mT) {
        return this.target = UT, {
          renderable: TT,
          pipeline: wU(this.device, UT),
          draw: TT => {
            this.geometry.setDrawing(!0);
            try {
              return mT ? this.drawTransparent(TT, UT) : this.drawOpaque(TT, UT)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(TT, UT) {
        var mT, WT, zT, MT;
        const {
          Rl: gT
        } = TT;
        this.lighting = TT.dZ;
        const nT = (0, qn.s)(UT);
        this.dirLightCount = Math.min(nT, 4), this.Np = null !== (mT = gT.Np) && void 0 !== mT ? mT : null, nT > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(TT, UT), this.animateMaterials(UT.animTick);
        const HT = gT.ZL,
          kT = HT[0] !== this.originOffset[0] || HT[1] !== this.originOffset[1] || HT[2] !== this.originOffset[2];
        kT && (this.originOffset[0] = HT[0], this.originOffset[1] = HT[1], this.originOffset[2] = HT[2]);
        const jT = UT.eye;
        this.eye[0] = jT[0], this.eye[1] = jT[1], this.eye[2] = jT[2], this.writeShaderPackInputs();
        const lT = UT.projectionMatrix,
          LT = 0 === lT[15];
        let pT = 0;
        (kT || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: BT
        } = this;
        tU(this.transparentRenderable._worldCenter, UT, xU), this.resetBatches(LT), this.transparent.length = 0, this.unlit.length = 0;
        const ZT = gT.Nl.iTT,
          cT = ZT / 2 * Math.sqrt(3);
        let vT = 0;
        const fT = !!this.Np && dW(this.Np.defineFor("liquid"));
        let qT = !1;
        const iT = null !== (WT = null === (zT = gT.JY) || void 0 === zT ? void 0 : zT.visibility) && void 0 !== WT ? WT : null,
          bT = this.visCull && LT && 0 === this.compiling && null !== iT && gT.Nl.YWT[0] >= this.visCullMinDistance ? this.target : null,
          OT = this.visPassable,
          eT = this.visCandidates,
          YT = this.visCandidateBatches;
        OT.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let JT = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let xT = 0;
        const dT = (TT, mT) => {
          if (!mT) return this.transparent.push(TT), void(xT += 2 * TT.faceCount);
          if (null !== TT.faceGroups && mT.faceCull) {
            if (0 === pT && (pT = (0, Gn.c)(lT, UT.renderWidth, UT.renderHeight), pT !== this.faceFocalPx && (this.faceFocalPx = pT, BT = ++this.faceEpoch)), TT.faceEpoch !== BT) {
              TT.faceEpoch = BT;
              const UT = Math.sqrt(TT.distance) + cT,
                mT = (0, Gn.h)(TT.planePX, TT.planeNX, TT.planePY, TT.planeNY, TT.planePZ, TT.planeNZ, this.eye[0] - (TT.origin[0] - this.originOffset[0]), this.eye[1] - (TT.origin[1] - this.originOffset[1]), this.eye[2] - (TT.origin[2] - this.originOffset[2]), (0, Gn.e)(UT, pT));
              mT !== TT.faceMask && this.chooseFaceRanges(TT, TT.faceGroups, mT)
            }
            if (0 === TT.rangeCount) return
          } else - 1 !== TT.faceMask && this.drawWhole(TT);
          mT.meshes.push(TT), xT += 2 * ((TT.rangeCount > 0 ? TT.count0 : 0) + (TT.rangeCount > 1 ? TT.count1 : 0))
        };
        for (const tT of this.chunks.values()) {
          kT && this.writeSlot(tT);
          const TT = tT.mesh.visibility;
          TT !== tT.visibility && (tT.visibility = TT, this.slots.setVisibility(tT.slot, TT));
          const {
            material: mT
          } = tT;
          this.geometry.lost(tT) && performance.now() >= tT.lostRetryAt && this.remeshLost(gT, tT);
          const WT = !(null === mT || void 0 === mT || !mT.bindGroup) && this.geometry.backed(tT),
            zT = WT && this.lighting && !tT.vertices.page.twin;
          if (bT && (Number.isNaN(tT.key) && (tT.ci = Math.floor(tT.origin[0] / ZT), tT.cj = Math.floor(tT.origin[1] / ZT), tT.ck = Math.floor(tT.origin[2] / ZT), tT.key = (0, En.j)(tT.ci, tT.cj, tT.ck)), (!WT || TT < 1 || zT || !this.batchDraws(mT, tT.packed, bT)) && this.visSeeThrough(tT, bT) && OT.add(tT.key)), !WT) continue;
          zT || (tT.lostRemeshes = 0);
          const MT = tT.origin[0] - this.originOffset[0],
            nT = tT.origin[1] - this.originOffset[1],
            HT = tT.origin[2] - this.originOffset[2];
          if (!(0, gn.d)(UT.frustum, MT, nT, HT, ZT)) continue;
          const jT = MT + ZT / 2 - this.eye[0],
            lT = nT + ZT / 2 - this.eye[1],
            pT = HT + ZT / 2 - this.eye[2];
          if (tT.distance = jT * jT + lT * lT + pT * pT, this.lighting && !tT.lit && (vT = Math.max(vT, tT.vertexCount), this.unlit.push(tT)), zT) continue;
          const BT = this.isBlended(mT) ? null : this.batchFor(mT, tT.packed, tT.vertices.page, 1 === TT, LT);
          bT ? (eT[JT] = tT, YT[JT++] = BT) : dT(tT, BT)
        }
        const wT = bT ? this.sweepVisibility(TT, UT, iT) : null;
        null === (MT = (0, sM.C)(gT)) || void 0 === MT || MT.update(UT.frustum, this.originOffset, ZT, wT);
        for (let tT = 0; tT < JT; tT++) {
          const TT = eT[tT];
          !wT || wT.isDrawn(TT.ci, TT.cj, TT.ck) ? dT(TT, YT[tT]) : (this.visCulledParts++, this.visCulledTriangles += 2 * TT.faceCount)
        }
        for (const tT of this.transparent) qT ||= fT && tT.material.liquid && !tT.material.customRenderMat;
        this.submittedTriangles = xT, wT && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(TT, UT, wT)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(qT) : qT && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && vT > 0 && this.geometry.lightFullSky(this.unlit, vT);
        for (const tT of this.opaqueBatches) this.chunkSorter.sort(tT.meshes, 1) || tT.meshes.sort(MH);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(gH)
      }
      sweepVisibility(TT, UT, mT) {
        const {
          Nl: WT
        } = TT.Rl, zT = WT.iTT, MT = this.visPassable, gT = this.eye[0] + this.originOffset[0], nT = this.eye[1] + this.originOffset[1], HT = this.eye[2] + this.originOffset[2];
        if (!mT.eyeClear(gT, nT, HT, UT.near, UT.projectionMatrix, WT)) return null;
        const [kT, jT] = WT.YWT, lT = mT.update(gT, nT, HT, zT, kT, jT, MT);
        return this.visSweeps = mT.sweeps, lT ? mT : null
      }
      visSeeThrough(TT, UT) {
        const {
          material: mT
        } = TT;
        return (!mT || !this.isBlended(mT)) && (TT.mesh.visibility < 1 || !(null !== mT && void 0 !== mT && mT.bindGroup) || TT.faceCount > 0 && (!this.geometry.backed(TT) || this.lighting && !TT.vertices.page.twin) || !this.batchDraws(mT, TT.packed, UT))
      }
      batchDraws(TT, UT, mT) {
        var WT;
        const zT = UT ? 2 : 0;
        if (TT === this.visDrawsMaterial && function(TT, UT) {
            return 0 !== (TT & 1 << UT)
          }(this.visDrawsBits, zT)) return 0 !== (this.visDrawsBits & 2 << zT);
        let MT = null !== (WT = this.visBatchDraws.get(TT)) && void 0 !== WT ? WT : 0;
        if (!(MT & 1 << zT)) {
          MT |= 1 << zT | (!!TT.bindGroupLayout && this.canDraw(TT, UT) && !!this.pipelines.get(this.pipelineIdNow(TT, UT, !1, mT)) ? 2 << zT : 0), this.visBatchDraws.set(TT, MT)
        }
        return this.visDrawsMaterial = TT, this.visDrawsBits = MT, 0 !== (MT & 2 << zT)
      }
      runVisCheck(TT, UT, mT) {
        const {
          Rl: WT
        } = TT, {
          Nl: zT
        } = WT, MT = zT.iTT, gT = new Set;
        for (const pT of this.chunks.values()) gT.add(pT.key);
        const nT = Kz.Matrix.FromArray(UT.viewProjectionMatrix).invert(),
          [HT, kT, jT] = this.originOffset,
          lT = new Kz.JB,
          LT = function(TT, UT, mT, WT) {
            const zT = new Set;
            for (let MT = 0; MT < 27; MT++)
              for (let gT = 0; gT < 48; gT++) {
                const nT = mT((gT + .5) / 48 * 2 - 1, (MT + .5) / 27 * 2 - 1);
                hn(TT, UT, [nT[0] - UT[0], nT[1] - UT[1], nT[2] - UT[2]], WT, zT)
              }
            return zT
          }({
            QG: (TT, UT, mT) => zT.QG(TT, UT, mT),
            occluders: mT.occluders,
            opaque: mT.opaque,
            cB: MT,
            isDrawn: (TT, UT, WT) => mT.isDrawn(TT, UT, WT),
            hasParts: (TT, UT, mT) => gT.has((0, En.j)(TT, UT, mT))
          }, [this.eye[0] + HT, this.eye[1] + kT, this.eye[2] + jT], ((TT, UT) => (Kz.JB.TransformCoordinatesFromFloatsToRef(TT, UT, .5, nT, lT), [lT.x + HT, lT.y + kT, lT.z + jT])), (zT.YWT[0] + 1) * MT);
        this.visViolations = LT.size;
        for (const pT of LT) this.warnOnce(`vis:${pT}`, `Lite terrain cave culling skipped chunk ${pT}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var TT;
        null !== (TT = this.Np) && void 0 !== TT && TT.isRunning() && (this.shaderPackInputs ??= new hM(this.device, this.Np.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Np, this.eye, this.lighting))
      }
      bindShaderPackInputs(TT, UT, mT) {
        var WT, zT, MT, gT;
        let nT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const HT = this.packVariant(UT, mT);
        if (void 0 === HT) return;
        this.shaderPackInputs || (this.shaderPackInputs = new hM(this.device, mT.textureLayers(), this.sunShadow), this.shaderPackInputs.write(mT, this.eye, this.lighting));
        const kT = dW(HT) ? null !== (WT = null === (zT = this.sceneDepth) || void 0 === zT ? void 0 : zT.view) && void 0 !== WT ? WT : this.standIn() : null,
          jT = nT ? null !== (MT = null === (gT = this.shadowMask) || void 0 === gT ? void 0 : gT.view) && void 0 !== MT ? MT : this.standIn() : null;
        this.shaderPackInputs.bind(TT, kT, NM(HT, !!this.sunShadow), jT)
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
        var TT, UT;
        return null !== (TT = null === (UT = this.shaderPackInputs) || void 0 === UT ? void 0 : UT.bindGroupFor(null, !0)) && void 0 !== TT ? TT : null
      }
      resetBatches(TT) {
        const UT = this.opaqueBatches;
        let mT = 0;
        for (const WT of UT) WT.meshes.length > 0 && (WT.meshes.length = 0, WT.faceCull = this.batchFaceCull(WT.material, TT), UT[mT++] = WT);
        UT.length = mT
      }
      orderBatches() {
        const TT = this.opaqueBatches;
        for (let UT = 0; UT < TT.length; UT++) {
          const mT = TT[UT];
          mT.group = UT;
          for (let WT = 0; WT < UT; WT++) {
            const UT = TT[WT];
            if (UT.material === mT.material && UT.packed === mT.packed) {
              mT.group = UT.group;
              break
            }
          }
          mT.nearest = mT.meshes.length > 0 ? mT.meshes[0].distance : 1 / 0
        }
        TT.sort(Dn)
      }
      batchFor(TT, UT, mT, WT, zT) {
        for (const gT of this.opaqueBatches)
          if (gT.material === TT && gT.packed === UT && gT.page === mT && gT.resting === WT) return gT;
        const MT = {
          material: TT,
          packed: UT,
          page: mT,
          resting: WT,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(TT, zT)
        };
        return this.opaqueBatches.push(MT), MT
      }
      batchFaceCull(TT, UT) {
        return !(!UT || !(0, Sn.p)(TT.model)) && (!this.Np || ! function(TT) {
          var UT;
          return !(null === (UT = (0, oU.d)(TT)) || void 0 === UT || !UT.movesVertices)
        }(this.packVariant(TT, this.Np)))
      }
      writeFrameUniforms(TT, UT) {
        const mT = this.frameUniforms,
          WT = IW;
        if ((0, qn.v)(TT, mT), mT[WT.fogInfos] = UT.fogEnabled ? UT.fogMode : 0, mT[WT.fogInfos + 1] = UT.fogStart, mT[WT.fogInfos + 2] = UT.fogEnd, mT[WT.fogInfos + 3] = UT.fogDensity, mT.set(UT.fogColour, WT.fogColour), mT[WT.outputHeight] = UT.renderHeight, mT.set(UT.ambientColour, WT.sceneAmbient), (0, qn.q)(UT, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const UT = (0, bn.g)(TT.EB, TT.qB, TT.iB);
          for (let TT = 0; TT < 4; TT++) mT[WT.aoLevels + TT] = UT[TT] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, mT)
      }
      animateMaterials(TT) {
        const UT = sW.anim;
        for (const mT of this.materials.values()) mT.animated && (mT.uniformData[UT] = TT, this.device.queue.writeBuffer(mT.uniformBuffer, 4 * UT, mT.uniformData, UT, 1))
      }
      canDraw(TT, UT) {
        return !("atlas" === TT.texture && !UT) || (this.warnOnce(`stride:${TT.id}`, `Lite terrain: material "${TT.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(TT, UT) {
        let mT = 0;
        TT.setBindGroup(1, this.frameBindGroup);
        for (const WT of this.opaqueBatches) {
          if (!WT.meshes.length || !this.canDraw(WT.material, WT.packed)) continue;
          const zT = this.pipelineFor(WT.material, WT.packed, UT, WT.resting);
          zT && (TT.setPipeline(zT), TT.setBindGroup(2, WT.material.bindGroup), this.Np && this.bindShaderPackInputs(TT, WT.material, this.Np, this.prepassOf.has(zT)), mT += this.drawBatch(TT, WT))
        }
        return mT
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(TT, UT, mT) {
        const WT = this.target,
          zT = this.Np;
        if (!WT || !zT || 0 === this.maskPipelines) return 0;
        let MT = 0,
          gT = null;
        this.geometry.setDrawing(!0);
        try {
          for (const nT of this.opaqueBatches) {
            if (!nT.meshes.length || !this.canDraw(nT.material, nT.packed)) continue;
            const HT = this.pipelineFor(nT.material, nT.packed, WT, nT.resting),
              kT = HT && this.prepassOf.get(HT);
            kT && (gT || (gT = TT.beginRenderPass(UT), gT.setBindGroup(0, mT), gT.setBindGroup(1, this.frameBindGroup)), gT.setPipeline(kT), gT.setBindGroup(2, nT.material.bindGroup), this.bindShaderPackInputs(gT, nT.material, zT, !0), MT += this.drawBatch(gT, nT))
          }
        } finally {
          var nT;
          null === (nT = gT) || void 0 === nT || nT.end(), this.geometry.setDrawing(!1)
        }
        return MT
      }
      drawBatch(TT, UT) {
        let mT = 0;
        for (const WT of UT.meshes) {
          const {
            rangeCount: UT
          } = WT;
          UT > 0 && (mT += this.geometry.draw(TT, WT, this.lighting, WT.first0, WT.count0), UT > 1 && (mT += this.geometry.draw(TT, WT, this.lighting, WT.first1, WT.count1)))
        }
        return mT
      }
      drawTransparent(TT, UT) {
        let mT = 0,
          WT = null,
          zT = null;
        TT.setBindGroup(1, this.frameBindGroup);
        for (const MT of this.transparent) {
          const gT = MT.material;
          if (!this.canDraw(gT, MT.packed)) continue;
          const nT = this.pipelineFor(gT, MT.packed, UT);
          nT && (nT !== WT && (TT.setPipeline(nT), WT = nT, this.Np && this.bindShaderPackInputs(TT, gT, this.Np)), gT !== zT && (TT.setBindGroup(2, gT.bindGroup), zT = gT), mT += this.geometry.draw(TT, MT, this.lighting))
        }
        return mT
      }
    }

    function zH(TT, UT, mT, WT) {
      return `${RW(TT)}|${TT.atlasLayers}|${TT.A4}|${UT}|${mT}|${WT._colorFormat}|${WT._depthStencilFormat}|${WT._sampleCount}`
    }

    function MH(TT, UT) {
      return TT.distance - UT.distance
    }

    function gH(TT, UT) {
      return UT.distance - TT.distance
    }
    class nH {
      constructor() {
        this.left = []
      }
      sort(TT, UT) {
        for (let mT = 0; mT < TT.length; mT++) {
          const UT = TT[mT].distance;
          if (UT - UT !== 0) return !1
        }
        return this.sortRange(TT, 0, TT.length, UT), !0
      }
      sortRange(TT, UT, mT, WT) {
        if (mT - UT <= 16) {
          for (let zT = UT + 1; zT < mT; zT++) {
            const mT = TT[zT],
              MT = WT * mT.distance;
            let gT = zT - 1;
            for (; gT >= UT && WT * TT[gT].distance > MT; gT--) TT[gT + 1] = TT[gT];
            TT[gT + 1] = mT
          }
          return
        }
        const zT = UT + mT >>> 1;
        if (this.sortRange(TT, UT, zT, WT), this.sortRange(TT, zT, mT, WT), WT * TT[zT - 1].distance <= WT * TT[zT].distance) return;
        const {
          left: MT
        } = this, gT = zT - UT;
        for (let jT = 0; jT < gT; jT++) MT[jT] = TT[UT + jT];
        let nT = 0,
          HT = zT,
          kT = UT;
        for (; nT < gT && HT < mT;) TT[kT++] = WT * TT[HT].distance < WT * MT[nT].distance ? TT[HT++] : MT[nT++];
        for (; nT < gT;) TT[kT++] = MT[nT++]
      }
    }
    const HH = Math.ceil(102);

    function kH(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UT;
      const MT = Math.min(UT, mT),
        gT = new Uint32Array(em(WT));
      for (let nT = 0; nT < WT; nT++) {
        const UT = Math.floor(nT * MT / WT),
          mT = Math.max(UT + 1, Math.floor((nT + 1) * MT / WT));
        for (let HT = 0; HT < WT; HT++) {
          const kT = Math.floor(HT * MT / WT),
            jT = Math.max(kT + 1, Math.floor((HT + 1) * MT / WT));
          let lT = 0;
          for (let WT = UT; WT < mT; WT++)
            for (let UT = kT; UT < jT; UT++) TT[WT * zT + UT] >= HH && lT++;
          if (2 * lT >= (mT - UT) * (jT - kT)) {
            const TT = HT + WT * nT;
            gT[TT >>> 5] |= 1 << (31 & TT)
          }
        }
      }
      return gT
    }

    function jH(TT) {
      return Math.max(1, Math.min(16, TT))
    }
    class lH {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = TT, this.loadTexture = UT, this.warn = mT, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(TT, UT) {
        return (TT.lK !== this.builtVersion || this.blockCaster.length !== UT) && (this.build(TT, UT), !0)
      }
      build(TT, UT) {
        this.builtVersion = TT.lK;
        const mT = new Uint16Array(UT),
          WT = new Map;
        for (let zT = 1; zT < UT; zT++) {
          const UT = this.classify(TT, zT, WT);
          if (null === UT || UT === fm) {
            mT[zT] = null === UT ? 0 : fm;
            continue
          }
          let MT = this.byKey.get(UT.key);
          void 0 === MT && (MT = this.allocate(UT), this.byKey.set(UT.key, MT)), mT[zT] = MT
        }
        this.blockCaster = mT, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(TT, UT) {
        const mT = TT.v_[UT];
        if ("function" !== typeof mT) return mT;
        try {
          return mT()
        } catch (WT) {
          return this.warnOnce(`Sun shadows: no caster option for block ${UT}: ${WT instanceof Error?WT.message:String(WT)}`), null
        }
      }
      classify(TT, UT, mT) {
        const WT = this.option(TT, UT);
        if ("none" === WT) return null;
        if (WT && WT.planes.length > 0) {
          const TT = WT.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(TT)}`,
            planes: TT
          }
        }
        if (TT.AL[UT]) return null;
        const zT = TT.Tp[UT] ? TT.bK(UT) : null;
        if (zT && zT.length >= 6) {
          const TT = function(TT) {
            const UT = new Uint32Array(16);
            for (let mT = 0; mT + 6 <= TT.length; mT += 6) {
              const WT = [0, 1, 2].map((UT => Math.max(0, Math.ceil(8 * TT[mT + UT] - .5)))),
                zT = [0, 1, 2].map((UT => Math.min(7, Math.floor(8 * TT[mT + UT + 3] - .5))));
              for (let TT = WT[2]; TT <= zT[2]; TT++)
                for (let mT = WT[1]; mT <= zT[1]; mT++)
                  for (let MT = WT[0]; MT <= zT[0]; MT++) {
                    const WT = MT + 8 * (mT + 8 * TT);
                    UT[WT >>> 5] |= 1 << (31 & WT)
                  }
            }
            return UT
          }(zT);
          return function(TT) {
            return TT.every((TT => 4294967295 === TT))
          }(TT) ? fm : TT.every((TT => 0 === TT)) ? null : {
            kind: "shape",
            key: `shape:${TT.join(",")}`,
            mask: TT
          }
        }
        if (TT.VJ[UT] || !TT.hB[UT]) return null;
        const MT = [0, 1, 2, 3, 4, 5].map((WT => {
          const zT = TT.DB[6 * UT + WT];
          let MT = mT.get(zT);
          return void 0 === MT && (MT = function(TT) {
            if (!TT || TT.gZ) return null;
            const {
              o4: UT,
              A4: mT,
              K4: WT
            } = TT;
            if (!UT || !mT || !(mT > 0) || void 0 === WT || !(WT >= 0)) return null;
            const zT = UT[0],
              MT = mT * mT * 4;
            if (!zT || zT.byteLength < MT) return null;
            const gT = Math.floor(zT.byteLength / MT),
              nT = UT[Math.floor(WT / gT)];
            if (!nT) return null;
            const HT = new Uint8Array(nT.buffer, nT.byteOffset, nT.byteLength),
              kT = WT % gT * MT;
            if (kT + MT > HT.length) return null;
            const jT = new Uint8Array(mT * mT);
            let lT = !1;
            for (let LT = 0; LT < jT.length; LT++) jT[LT] = HT[kT + 4 * LT + 3], lT ||= jT[LT] < HH;
            return lT ? {
              alpha: jT,
              width: mT
            } : null
          }(TT.MZ(zT)), mT.set(zT, MT)), MT
        }));
        if (MT.every((TT => null === TT))) return fm;
        const gT = jH(Math.max(...MT.map((TT => {
            var UT;
            return null !== (UT = null === TT || void 0 === TT ? void 0 : TT.width) && void 0 !== UT ? UT : 1
          })))),
          nT = new Uint32Array(em(gT)).fill(4294967295),
          HT = MT.map((TT => null === TT ? nT : kH(TT.alpha, TT.width, TT.width, gT)));
        return {
          kind: "cutout",
          key: `cutout:${gT}:${HT.map((TT=>TT.join(","))).join("|")}`,
          size: gT,
          faces: HT
        }
      }
      allocate(TT) {
        if (this.nextCaster >= Ym) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const UT = this.nextCaster++;
        if (this.writeCaster(UT, qm, 0, 0, 0), "shape" === TT.kind) {
          const mT = this.allocateMask(TT.mask.length);
          mT >= 0 && (this.sink(mT, TT.mask), this.writeCaster(UT, im, mT, 0, 8))
        } else if ("cutout" === TT.kind) {
          const mT = em(TT.size),
            WT = this.allocateMask(6 * mT);
          if (WT >= 0) {
            const zT = new Uint32Array(6 * mT);
            TT.faces.forEach(((TT, UT) => {
              zT.set(TT, UT * mT)
            })), this.sink(WT, zT), this.writeCaster(UT, Om, WT, 0, TT.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(UT, TT.planes).finally((() => {
          this.planesLoading--
        })));
        return UT
      }
      async loadPlanes(TT, UT) {
        const mT = await Promise.all(UT.map((TT => this.texture(TT.texture))));
        if (mT.some((TT => null === TT))) return;
        const WT = mT,
          zT = jH(Math.max(...WT.map((TT => Math.min(TT.width, TT.height))))),
          MT = em(zT),
          gT = this.allocateMask(UT.length * (4 + MT));
        if (gT < 0) return;
        const nT = new Uint32Array(UT.length * (4 + MT)),
          HT = 4 * UT.length;
        UT.forEach(((TT, UT) => {
          const mT = gT + HT + UT * MT;
          nT.set(function(TT, UT) {
            const [mT, WT] = TT.tangent, zT = Math.hypot(mT, WT) || 1, MT = mT / zT, gT = WT / zT, nT = TT.centre[0] * gT - TT.centre[1] * MT, HT = new Uint32Array(4);
            return new Float32Array(HT.buffer, 0, 3).set([MT, gT, nT]), HT[3] = UT, HT
          }(TT, mT), 4 * UT), nT.set(kH(WT[UT].alpha, WT[UT].width, WT[UT].height, zT), HT + UT * MT)
        })), this.sink(gT, nT), this.writeCaster(TT, bm, gT, UT.length, zT)
      }
      texture(TT) {
        let UT = this.textures.get(TT);
        return UT || (UT = this.loadTexture(TT).catch((UT => (this.warn(`Sun shadows: no mask for ${TT}: ${UT instanceof Error?UT.message:String(UT)}`), null))), this.textures.set(TT, UT)), UT
      }
      allocateMask(TT) {
        if (this.nextMaskWord + TT > Jm) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const UT = 32768 + this.nextMaskWord;
        return this.nextMaskWord += TT, UT
      }
      writeCaster(TT, UT, mT, WT, zT) {
        this.sink(0 + 4 * TT, Uint32Array.of(UT, mT, WT, zT))
      }
      warnOnce(TT) {
        this.warned.has(TT) || (this.warned.add(TT), this.warn(TT))
      }
    }
    var LH = mT(2959);

    function pH(TT) {
      return !TT.kZ && !TT.OJ && !TT.FB
    }

    function BH() {
      return {
        bricks: new Uint32Array(km),
        cells: new Uint16Array(32768),
        special: new Uint8Array(nm)
      }
    }
    class ZH {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = TT, this.writeVoxels = UT, this.writePool = mT, this.warn = WT, this.eyeChunk = null, this.slotChunk = new Array(Um).fill(null), this.slotVersion = new Float64Array(Um).fill(-1), this.slotPool = new Array(Um).fill(null), this.starved = new Uint8Array(Um), this.queue = [], this.queued = new Uint8Array(Um), this.queueSorted = !0, this.freePool = new Uint32Array(xm), this.freeCount = xm, this.casterTable = null, this.warnedPool = !1, this.scratch = BH(), this.victimScratch = BH(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Um), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let zT = 0; zT < xm; zT++) this.freePool[zT] = 65535 - zT
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return xm - this.freeCount
      }
      chunkAdded(TT) {
        if (null === this.eyeChunk || !this.inRadius(TT.i, TT.j, TT.k)) return;
        const UT = Bm(TT.i, TT.j, TT.k);
        this.slotChunk[UT] = TT, this.slotVersion[UT] = -1, this.enqueue(UT)
      }
      update(TT, UT, mT) {
        const WT = this.casters.blockCaster;
        if (WT !== this.casterTable) {
          this.casterTable = WT;
          for (let TT = 0; TT < Um; TT++) this.slotVersion[TT] = -1, this.slotChunk[TT] && this.enqueue(TT)
        }
        const zT = Math.floor(TT[0] / 32),
          MT = Math.floor(TT[1] / 32),
          gT = Math.floor(TT[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== zT || this.eyeChunk[1] !== MT || this.eyeChunk[2] !== gT) && (this.eyeChunk = [zT, MT, gT], this.follow(UT), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let nT = 0; nT < Um; nT++) {
          const TT = this.slotChunk[nT];
          TT && (TT.bJ || TT.uB !== this.slotVersion[nT]) && this.enqueue(nT)
        }
        this.drain(mT), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(TT, UT) {
        this.records.set(UT, 4 * TT), this.windowTopStale = !0, this.writeVoxels(4 * TT, UT)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const TT = this.records;
        let UT = -1 / 0;
        for (let WT = 0; WT < TT.length; WT += 4) {
          const mT = 255 & TT[WT + 3];
          mT !== zm && mT !== Mm || !this.inRadius(TT[WT], TT[WT + 1], TT[WT + 2]) || (UT = Math.max(UT, TT[WT + 1] * AU + (TT[WT + 3] >>> 8)))
        }
        const mT = UT === -1 / 0 ? 1 : UT + lm;
        mT !== this.windowTop[0] && (this.windowTop[0] = mT, this.writeVoxels(jm, this.windowTop))
      }
      follow(TT) {
        const UT = this.eyeChunk,
          [mT, WT, zT] = RU;
        for (let gT = -zT; gT <= zT; gT++)
          for (let zT = -WT; zT <= WT; zT++)
            for (let WT = -mT; WT <= mT; WT++) {
              var MT;
              const mT = UT[0] + WT,
                nT = UT[1] + zT,
                HT = UT[2] + gT,
                kT = Bm(mT, nT, HT),
                jT = this.slotChunk[kT];
              if (jT && !jT.bJ && jT.i === mT && jT.j === nT && jT.k === HT) continue;
              const lT = null !== (MT = TT(mT, nT, HT)) && void 0 !== MT ? MT : null;
              jT && (jT.i !== mT || jT.j !== nT || jT.k !== HT) && this.slotPool[kT] && (this.release(kT), this.record.fill(0), this.writeRecord(kT, this.record)), this.slotChunk[kT] = lT, this.slotVersion[kT] = -1, (lT || jT) && this.enqueue(kT)
            }
      }
      requeueStarved() {
        for (let TT = 0; TT < Um; TT++) this.starved[TT] && this.slotChunk[TT] && this.enqueue(TT)
      }
      enqueue(TT) {
        this.queued[TT] || (this.queued[TT] = 1, this.queue.push(TT), this.queueSorted = !1)
      }
      drain(TT) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const TT = new Map;
          for (const UT of this.queue) TT.set(UT, this.slotDistance(UT));
          this.queue.sort(((UT, mT) => TT.get(mT) - TT.get(UT))), this.queueSorted = !0
        }
        const UT = performance.now();
        let mT = 0;
        const WT = [];
        for (; this.queue.length > 0 && (0 === mT || performance.now() - UT < TT);) {
          const TT = this.queue.pop(),
            UT = this.slotChunk[TT];
          !UT || UT.bJ || pH(UT) ? (this.queued[TT] = 0, this.encodeSlot(TT), mT++) : WT.push(TT)
        }
        for (let zT = WT.length - 1; zT >= 0; zT--) this.queue.push(WT[zT])
      }
      slotDistance(TT) {
        const UT = this.slotChunk[TT],
          mT = this.eyeChunk;
        return UT ? Math.max(Math.abs(UT.i - mT[0]), Math.abs(UT.j - mT[1]), Math.abs(UT.k - mT[2])) : 0
      }
      inRadius(TT, UT, mT) {
        const WT = this.eyeChunk,
          [zT, MT, gT] = RU;
        return Math.abs(TT - WT[0]) <= zT && Math.abs(UT - WT[1]) <= MT && Math.abs(mT - WT[2]) <= gT
      }
      release(TT) {
        const UT = this.slotPool[TT];
        if (UT) {
          for (let TT = UT.length - 1; TT >= 0; TT--) this.freePool[this.freeCount++] = UT[TT];
          this.slotPool[TT] = null
        }
      }
      encodeSlot(TT) {
        var UT, mT, WT, zT, MT;
        let gT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          nT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const HT = null !== (UT = null === (mT = this.slotPool[TT]) || void 0 === mT ? void 0 : mT.length) && void 0 !== UT ? UT : 0;
        this.release(TT), this.starved[TT] = 0;
        const kT = this.slotChunk[TT],
          jT = this.record;
        if (!kT || kT.bJ || !kT.iL) return this.slotChunk[TT] = null, this.slotVersion[TT] = -1, jT.fill(0), this.writeRecord(TT, jT), void(HT > 0 && this.requeueStarved());
        this.slotVersion[TT] = kT.uB;
        const lT = this.encodeBricks(kT, TT, gT, nT);
        jT[0] = kT.i, jT[1] = kT.j, jT[2] = kT.k, jT[3] = lT, this.writeRecord(TT, jT), null === (WT = this.encoded) || void 0 === WT || WT.call(this, kT), nT && (null !== (zT = null === (MT = this.slotPool[TT]) || void 0 === MT ? void 0 : MT.length) && void 0 !== zT ? zT : 0) < HT && this.requeueStarved()
      }
      encodeBricks(TT, UT, mT, WT) {
        if (TT.zB) return Wm;
        const zT = this.casters.blockCaster,
          {
            data: MT,
            stride: gT,
            offset: nT
          } = TT.iL,
          [HT, kT, jT] = gT,
          lT = AU,
          {
            bricks: LT,
            cells: pT,
            special: BT
          } = mT;
        LT.fill(0), BT.fill(0);
        let ZT = 0,
          cT = 0,
          vT = 0;
        for (let fT = 0; fT < lT; fT++) {
          const UT = fT >> 2,
            mT = 3 & fT,
            WT = TT.ip[fT],
            gT = WT === LH.g ? -1 : WT < zT.length ? zT[WT] : 0;
          if (0 !== gT)
            for (let TT = 0; TT < lT; TT++) {
              const WT = TT >> 2,
                qT = 3 & TT;
              let iT = nT + TT * HT + fT * kT;
              for (let TT = 0; TT < lT; TT++, iT += jT) {
                let nT = gT;
                if (nT < 0) {
                  const TT = MT[iT];
                  if (nT = TT < zT.length ? zT[TT] : 0, 0 === nT) continue
                }
                const HT = Zm(WT, UT, TT >> 2),
                  kT = cm(qT, mT, 3 & TT);
                LT[3 * HT + (kT >>> 5)] |= 1 << (31 & kT), pT[HT * gm + kT] = nT, ZT++, vT = fT, nT === fm ? cT++ : BT[HT] = 1
              }
            }
        }
        return 0 === ZT ? Wm : 32768 === cT ? zm | vT << 8 : (this.writePoolEntries(UT, mT, WT), this.writeVoxels(Hm + UT * km, LT), Mm | vT << 8)
      }
      writePoolEntries(TT, UT, mT) {
        const {
          bricks: WT,
          cells: zT,
          special: MT
        } = UT, gT = this.entry;
        let nT = 0;
        for (let jT = 0; jT < nm; jT++) nT += MT[jT];
        if (0 === nT) return;
        mT && this.freeCount < nT && this.evictBeyond(TT, nT);
        const HT = new Uint32Array(mT ? Math.min(nT, this.freeCount) : 0);
        let kT = 0;
        for (let jT = 0; jT < nm; jT++) {
          if (!MT[jT]) continue;
          const mT = 3 * jT;
          if (kT === HT.length) {
            this.dropSpecials(UT, jT), this.starved[TT] = 1;
            continue
          }
          const nT = this.freePool[--this.freeCount];
          HT[kT++] = nT;
          for (let TT = 0; TT < gm; TT++) {
            const UT = WT[mT + (TT >>> 5)] >>> (31 & TT) & 1 ? zT[jT * gm + TT] : 0;
            1 & TT ? gT[TT >> 1] |= UT << 16 : gT[TT >> 1] = UT
          }
          WT[mT + 2] = nT + 1, this.writePool(dm + 32 * nT, gT)
        }
        HT.length > 0 && (this.slotPool[TT] = HT)
      }
      evictBeyond(TT, UT) {
        const mT = this.slotDistance(TT),
          WT = [];
        for (let zT = 0; zT < Um; zT++) zT !== TT && this.slotPool[zT] && this.slotDistance(zT) > mT && WT.push(zT);
        WT.sort(((TT, UT) => this.slotDistance(UT) - this.slotDistance(TT)));
        for (const zT of WT) {
          if (this.freeCount >= UT) return;
          const TT = this.slotChunk[zT];
          TT && !TT.bJ && TT.iL && (TT.uB === this.slotVersion[zT] || pH(TT)) && this.encodeSlot(zT, this.victimScratch, !1)
        }
      }
      dropSpecials(TT, UT) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const mT = 3 * UT;
        for (let WT = 0; WT < gm; WT++) TT.cells[UT * gm + WT] !== fm && (TT.bricks[mT + (WT >>> 5)] &= ~(1 << (31 & WT)))
      }
    }
    var cH = mT(37584);
    class vH {
      constructor(TT) {
        this.device = TT, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Vm, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Nl = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = TT.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = TT.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(TT, UT, mT) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: WT
        } = this;
        WT.np(TT, UT), mT.forEachSunShadowCaster((TT => {
          this.add(TT)
        })), WT.finish();
        const zT = 0 === WT.parts;
        if (zT && this.uploadedEmpty) return;
        this.uploadedEmpty = zT;
        const {
          queue: MT
        } = this.device, {
          words: gT
        } = WT;
        MT.writeBuffer(this.frameBuffer, 0, gT, 0, 16385), WT.refs > 0 && MT.writeBuffer(this.frameBuffer, 65540, gT, ym, WT.refs), zT || MT.writeBuffer(this.frameBuffer, 327684, gT, Xm, WT.parts * am)
      }
      add(TT) {
        const UT = this.gridFor(TT);
        if (!UT) return;
        const {
          frame: mT
        } = this, {
          Nl: WT,
          worldAt: zT,
          instances: MT,
          instanceCount: gT,
          thin: nT
        } = TT;
        if (MT)
          for (let HT = 0; HT < gT; HT++) nT ? (Cm(MT, 16 * HT, WT, zT, this.Nl), mT.add(UT, this.Nl)) : mT.add(UT, MT, 16 * HT);
        else mT.add(UT, WT, zT)
      }
      gridFor(TT) {
        let {
          geometry: UT,
          indexed: mT,
          first: WT,
          count: zT,
          skip: MT
        } = TT, gT = this.grids.get(UT);
        gT || (gT = new Map, this.grids.set(UT, gT));
        const nT = `${mT?WT:-1-WT}:${zT}:${null!==MT&&void 0!==MT?MT:""}`;
        let HT = gT.get(nT);
        if (void 0 !== HT || this.gridsFull) return HT;
        const kT = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = kT + 2;
        else if (kT > this.bakeDeadline) return;
        return HT = this.bake(UT, mT, WT, zT, MT), void 0 !== HT && gT.set(nT, HT), HT
      }
      bake(TT, UT, mT, WT, zT) {
        const MT = TT.vertexAttributes.find((TT => "position" === TT.kind)),
          gT = MT ? function(TT, UT, mT, WT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const MT = TT => UT ? UT[mT + TT] : mT + TT,
              gT = TT => null !== zT && [0, 1, 2].some((UT => {
                const mT = MT(TT + UT);
                return mT >= zT[0] && mT < zT[1]
              })),
              nT = [1 / 0, 1 / 0, 1 / 0],
              HT = [-1 / 0, -1 / 0, -1 / 0];
            for (let fT = 0; fT + 2 < WT; fT += 3)
              if (!gT(fT))
                for (let UT = 0; UT < 3; UT++) {
                  const mT = MT(fT + UT);
                  for (let UT = 0; UT < 3; UT++) nT[UT] = Math.min(nT[UT], TT[3 * mT + UT]), HT[UT] = Math.max(HT[UT], TT[3 * mT + UT])
                }
            const kT = Math.max(HT[0] - nT[0], HT[1] - nT[1], HT[2] - nT[2]);
            if (!(kT > 0)) return null;
            const jT = kT / 64,
              lT = [0, 0, 0],
              LT = [0, 0, 0],
              pT = [0, 0, 0];
            for (let fT = 0; fT < 3; fT++) lT[fT] = Math.min(65, Math.ceil((HT[fT] - nT[fT]) / jT) + 1), LT[fT] = nT[fT] - jT / 2, pT[fT] = LT[fT] + lT[fT] * jT;
            const BT = new Uint32Array(Math.ceil(lT[0] * lT[1] * lT[2] / 32)),
              ZT = new Float64Array(9),
              cT = [0, 0, 0],
              vT = [0, 0, 0];
            for (let fT = 0; fT + 2 < WT; fT += 3)
              if (!gT(fT)) {
                for (let UT = 0; UT < 3; UT++) {
                  const mT = MT(fT + UT);
                  for (let WT = 0; WT < 3; WT++) ZT[3 * UT + WT] = TT[3 * mT + WT]
                }
                for (let TT = 0; TT < 3; TT++) {
                  const UT = Math.min(ZT[TT], ZT[3 + TT], ZT[6 + TT]),
                    mT = Math.max(ZT[TT], ZT[3 + TT], ZT[6 + TT]);
                  cT[TT] = Math.max(0, Math.floor((UT - LT[TT]) / jT - 1e-6)), vT[TT] = Math.min(lT[TT] - 1, Math.floor((mT - LT[TT]) / jT + 1e-6))
                }
                for (let TT = cT[2]; TT <= vT[2]; TT++)
                  for (let UT = cT[1]; UT <= vT[1]; UT++)
                    for (let mT = cT[0]; mT <= vT[0]; mT++)
                      if (rm(ZT, LT[0] + (mT + .5) * jT, LT[1] + (UT + .5) * jT, LT[2] + (TT + .5) * jT, jT / 2)) {
                        const WT = mT + lT[0] * (UT + lT[1] * TT);
                        BT[WT >>> 5] |= 1 << (31 & WT)
                      }
              } return {
              words: BT,
              lo: LT,
              hi: pT,
              cell: jT,
              dims: lT
            }
          }((0, cH.i)(MT, TT.vertexCount), UT ? TT.indexData : null, mT, WT, zT) : null;
        if (!gT) return null;
        const {
          words: nT,
          ...HT
        } = gT;
        if (this.gridTop + nT.length > Qm) return void(this.gridsFull = !0);
        const kT = this.gridTop;
        return this.gridTop += nT.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * kT, nT), {
          ...HT,
          at: kT
        }
      }
    }
    const fH = Math.cos(1 * Math.PI / 180);

    function qH(TT, UT) {
      return TT[0] * UT[0] + TT[1] * UT[1] + TT[2] * UT[2] < fH
    }
    async function iH(TT) {
      const {
        pixels: UT,
        width: mT,
        height: WT
      } = await TU(TT), zT = new Uint8Array(mT * WT);
      for (let MT = 0; MT < zT.length; MT++) zT[MT] = UT[4 * MT + 3];
      return {
        width: mT,
        height: WT,
        alpha: zT
      }
    }
    class bH {
      constructor(TT, UT) {
        this.device = TT, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Sm.k), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = TT.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = TT.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Lm,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = TT.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [mT, WT, zT] = Sm.o;
        this.volume = TT.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: mT,
            height: WT,
            depthOrArrayLayers: zT
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = TT.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = TT.createBuffer({
          label: "sun-shadow-volume-work",
          size: Sm.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = UT ? new vH(TT) : null, this.entityStandIn = UT ? null : TT.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var TT;
        null === (TT = this.stopWindow) || void 0 === TT || TT.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var TT, UT;
        const mT = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || mT.push("Lite sun shadow volume pipeline compiling");
        const WT = null !== (TT = null === (UT = this.casters) || void 0 === UT ? void 0 : UT.planesLoading) && void 0 !== TT ? TT : 0;
        return WT > 0 && mT.push(`${WT} Lite sun shadow plane casters loading their textures`), mT
      }
      entries() {
        var TT, UT, mT, WT;
        const zT = DU.x;
        return [{
          binding: zT.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: zT.iL,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: zT.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: zT.volume,
          resource: this.volumeView
        }, {
          binding: zT.sampler,
          resource: this.volumeSampler
        }, {
          binding: zT.entities,
          resource: {
            buffer: null !== (TT = null === (UT = this.entities) || void 0 === UT ? void 0 : UT.frameBuffer) && void 0 !== TT ? TT : this.entityStandIn
          }
        }, {
          binding: zT.entityGrids,
          resource: {
            buffer: null !== (mT = null === (WT = this.entities) || void 0 === WT ? void 0 : WT.gridBuffer) && void 0 !== mT ? mT : this.entityStandIn
          }
        }]
      }
      prepare(TT, UT, mT) {
        var WT;
        this.entitiesThisFrame = !1;
        const zT = null !== (WT = null === mT || void 0 === mT ? void 0 : mT.sunShadowReach()) && void 0 !== WT ? WT : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!mT || !zT.sunShadow && !zT.airShadow) return void(this.volumeHolds = null);
        if (TT.Nl.iTT !== AU) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${TT.Nl.iTT}; everything is lit.`)));
        const MT = this.start(TT);
        this.casters.update(TT.DL, TT.DL.Tp.length);
        const gT = TT.ZL;
        for (let LT = 0; LT < 3; LT++) this.eye[LT] = UT[LT] + gT[LT];
        const nT = (0, Sm.x)(this.eye);
        this.staleNear = nT;
        const HT = TT.Nl.lZ;
        MT.update(this.eye, ((TT, UT, mT) => HT.LZ(TT, UT, mT)), 1);
        const kT = (0, Sm.r)(mT.zTT()),
          jT = MT.eyeChunk,
          lT = this.uniformInts;
        for (let LT = 0; LT < 3; LT++) lT[LT] = jT[LT], lT[4 + LT] = nT[LT];
        this.entitiesThisFrame = null !== this.entities && zT.sunShadow, this.entitiesThisFrame && Pm(this.uniformFloats, 8, UT, kT), null !== this.volumeHolds && (this.castersWritten || qH(kT, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(nT, kT, jT)
      }
      markStale(TT) {
        const UT = this.staleNear,
          mT = AU,
          WT = [TT.i * mT, TT.j * mT, TT.k * mT];
        for (let MT = 0; MT < 3; MT++)
          if (WT[MT] + mT <= UT[MT] - mT || WT[MT] >= UT[MT] + Sm.o[MT] + mT) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const zT = this.stale;
        for (let MT = 0; MT < zT.length; MT += 4)
          if (zT[MT] === TT.i && zT[MT + 1] === TT.j && zT[MT + 2] === TT.k) return void(zT[MT + 3] = this.swept);
        if (16 === zT.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        zT.push(TT.i, TT.j, TT.k, this.swept)
      }
      writeStale() {
        const TT = this.swept,
          UT = this.stale;
        this.staleAll && TT - this.staleAllSwept >= Sm.h && (this.staleAll = !1, UT.length = 0);
        let mT = 0;
        for (let zT = 0; zT < UT.length; zT += 4)
          if (TT - UT[zT + 3] < Sm.h) {
            for (let TT = 0; TT < 4; TT++) UT[mT + TT] = UT[zT + TT];
            mT += 4
          } UT.length = mT;
        const WT = this.uniformInts;
        WT[3] = this.staleAll ? 5 : mT / 4;
        for (let zT = 0; zT < 4; zT++)
          for (let TT = 0; TT < 3; TT++) WT[16 + 4 * zT + TT] = 4 * zT < mT ? UT[4 * zT + TT] * AU : 0
      }
      writeUniform() {
        const TT = this.uniformInts;
        let UT = this.uniformWritten;
        if (UT) {
          let mT = !0;
          for (let WT = 0; WT < TT.length && mT; WT++) mT = TT[WT] === UT[WT];
          if (mT) return
        }
        UT ??= this.uniformWritten = new Int32Array(TT.length), UT.set(TT), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(TT) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, TT)
      }
      computeVolume(TT, UT, mT) {
        const WT = this.buildVolumePass();
        if (!WT) return void(this.volumeHolds = null);
        const zT = (0, Sm.u)(this.volumeHolds, TT);
        this.volumeHolds = TT;
        const MT = 1 === zT.length && zT[0].size.every(((TT, UT) => TT === Sm.o[UT])),
          gT = this.sweptChunk,
          nT = this.sweptLight,
          HT = UT[0] !== nT[0] || UT[1] !== nT[1] || UT[2] !== nT[2],
          kT = mT[0] !== gT[0] || mT[1] !== gT[1] || mT[2] !== gT[2],
          jT = HT && qH(UT, nT);
        if ((MT || this.written || kT || jT) && (this.fastLeft = Sm.h), MT || this.written || HT || kT) {
          this.written = !1;
          for (let TT = 0; TT < 3; TT++) gT[TT] = mT[TT], nT[TT] = UT[TT];
          this.sweepLeft = MT ? 0 : Sm.h
        }
        if (MT ? this.swept += Sm.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, zT.push(...(0, Sm.A)(TT, this.slice)), this.slice = (this.slice + 1) % Sm.h, this.swept++), 0 === zT.length) return;
        const lT = (0, Sm.E)(this.workData, UT, zT);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const LT = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          pT = LT.beginComputePass({
            label: "sun-shadow-volume"
          });
        pT.setPipeline(WT.pipeline), pT.setBindGroup(Em.group, WT.bindGroup), pT.dispatchWorkgroups(Math.ceil(lT / Sm.j)), pT.end(), this.device.queue.submit([LT.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const TT = Em,
          UT = GPUShaderStage.COMPUTE,
          mT = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: TT.uniform,
              visibility: UT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: TT.iL,
              visibility: UT,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: TT.special,
              visibility: UT,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: TT.work,
              visibility: UT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: TT.volume,
              visibility: UT,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          WT = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: mT,
            entries: [{
              binding: TT.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: TT.iL,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: TT.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: TT.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: TT.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [mT]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: hm()
            }),
            entryPoint: "main"
          }
        }).then((TT => {
          this.volumePass = {
            pipeline: TT,
            bindGroup: WT
          }
        }), (TT => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(TT)}`)
        })), null
      }
      start(TT) {
        if (this.window) return this.window;
        const UT = (TT, UT) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * TT, UT)
        };
        this.casters = new lH(((TT, mT) => {
          this.castersWritten = !0, UT(TT, mT)
        }), iH);
        const mT = new ZH(this.casters, ((TT, UT) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * TT, UT)
        }), UT);
        mT.encoded = TT => {
          this.markStale(TT)
        };
        const WT = TT => {
          mT.chunkAdded(TT)
        };
        return TT.Nl.on("chunkAdded", WT), this.stopWindow = () => {
          TT.Nl.removeListener("chunkAdded", WT)
        }, this.window = mT, mT
      }
    }
    var OH = mT(38813),
      eH = mT(38815);
    const YH = 0,
      JH = 3,
      xH = 4,
      dH = 5;

    function wH(TT, UT, mT, WT) {
      TT.drawOffset(UT, WT + YH), UT[WT + JH] = TT.drawTime(), mT[WT + xH] = TT.ring.drawStart(), mT[WT + dH] = TT.ring.drawCount()
    }
    const tH = `\n${VW}\n\nconst MAX_STOPS = ${eH.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${eH.b/4}>,\n\tcolor1: array<vec4f, ${eH.b}>,\n\tcolor2: array<vec4f, ${eH.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${eH.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${eH.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var aH = mT(41743);
    class yH {
      constructor(TT, UT, mT, WT) {
        this.device = TT, this.system = UT, this.frameIndex = mT, this.bindings = WT, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, aH.h)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (TT, UT) => {
          this.device.queue.writeBuffer(this.ring, TT * eH.d * 4, this.system.ring.records, TT * eH.d, (UT - TT) * eH.d)
        };
        const {
          name: zT
        } = UT;
        this.ring = TT.createBuffer({
          label: `particles-${zT}`,
          size: UT.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = TT.createBuffer({
          label: `particles-uniforms-${zT}`,
          size: 4 * eH.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(TT) {
        const UT = (0, aH.d)(this.system, this.uniformBits, TT);
        UT && (this.uniformBits = UT, this.device.queue.writeBuffer(this.uniforms, 0, UT))
      }
      bind() {
        const {
          system: TT
        } = this, UT = this.texture;
        (0, aH.n)(TT, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${TT.name}`,
          size: [eH.i, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * eH.i
        }, [eH.i, 1]));
        const mT = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === UT.view && this.boundSampler === UT.sampler && this.boundRamp === mT || (this.boundView = UT.view, this.boundSampler = UT.sampler, this.boundRamp = mT, this.bindGroup = this.device.createBindGroup({
          label: `particles-${TT.name}`,
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
            resource: UT.sampler
          }, {
            binding: 3,
            resource: UT.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: mT
          }]
        }))
      }
      destroy() {
        var TT;
        this.ring.destroy(), this.uniforms.destroy(), null === (TT = this.ramp) || void 0 === TT || TT.destroy()
      }
    }
    class XH {
      constructor(TT, UT) {
        this.device = TT, this.resources = UT, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, yU.c)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (TT, UT) => (this.bindTarget(UT), {
            renderable: this.renderable,
            pipeline: wU(this.device, UT),
            draw: TT => UT === this.preparedTarget ? this.draw(TT) : 0
          })
        }
      }
      rebind(TT) {
        this.device = TT, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [UT, mT] of this.systems) {
          const WT = new yH(TT, UT, mT.frameIndex, this.bindings),
            zT = UT.ring.drawCount();
          zT > 0 && WT.upload(0, zT), this.systems.set(UT, WT)
        }
      }
      build() {
        const {
          device: TT
        } = this, UT = TT.createBindGroupLayout({
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
        this.frameLayout = TT.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = TT.createPipelineLayout({
          bindGroupLayouts: [eU(TT), UT, this.frameLayout]
        }), this.module = TT.createShaderModule({
          label: "particles",
          code: tH
        });
        const mT = TT.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        TT.queue.writeTexture({
          texture: mT
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: UT,
          rampSampler: TT.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: mT.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get fzT() {
        return this.systems.size
      }
      reset() {
        for (const TT of this.systems.keys()) TT.reset()
      }
      describePendingWork() {
        return (0, OH.e)(this.systems.keys(), "Lite")
      }
      wV(TT, UT) {
        const mT = new OH.d(TT, UT, this);
        return this.systems.set(mT, new yH(this.device, mT, this.allocateFrameIndex(), this.bindings)), mT
      }
      W9(TT, UT) {
        for (const mT of this.systems.keys()) mT.W9(TT, UT)
      }
      canDraw(TT) {
        const UT = this.systems.get(TT),
          mT = TT.texture ? this.resources.boundTexture(TT.texture) : null;
        if (!UT || !mT || !this.targetPipelines) return !1;
        if (UT.texture = mT, UT.pipelines.length = 0, !zU(TT.blendMode)) return this.warnOnce(`blend:${TT.blendMode}`, `particle blend mode ${TT.blendMode} is not drawn (${TT.name})`), !0;
        const WT = (0, GT.i)(TT.blendMode);
        for (const zT of WT) {
          const TT = this.pipelineFor(zT);
          if (!1 === TT) return UT.pipelines.length = 0, !0;
          TT && UT.pipelines.push(TT)
        }
        return UT.pipelines.length === WT.length
      }
      disposeStopped(TT) {
        TT.dispose()
      }
      remove(TT) {
        const UT = this.systems.get(TT);
        UT && (this.systems.delete(TT), UT.destroy(), this.freeFrameIndices.push(UT.frameIndex))
      }
      prepare(TT) {
        const UT = TT.animationRatio || 1;
        tU(this.renderable._worldCenter, TT, JU), this.preparedTarget = this.target, this.draws.length = 0;
        let mT = 0;
        for (const WT of this.systems.values()) {
          const TT = WT.system;
          if (!TT.animateIfActive(UT)) continue;
          if (TT.ring.takeUploads(WT.upload), !TT.hasLiveParticles() || 0 === WT.pipelines.length) continue;
          WT.writeUniforms(this.warnOnce), WT.bind();
          const zT = 64 * WT.frameIndex;
          WT.count = TT.ring.drawCount(), wH(TT, this.frameData, this.frameBits, zT), mT = Math.max(mT, zT + 64), this.draws.push(WT)
        }
        mT > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, mT)
      }
      draw(TT) {
        let UT = 0,
          mT = null;
        for (const WT of this.draws) {
          TT.setBindGroup(1, WT.bindGroup), TT.setBindGroup(2, this.frameBindGroup, [256 * WT.frameIndex]);
          for (const zT of WT.pipelines) zT !== mT && (TT.setPipeline(zT), mT = zT), TT.draw(4, WT.count), UT++
        }
        return UT
      }
      bindTarget(TT) {
        this.target = TT;
        const UT = `${TT._colorFormat}|${TT._depthStencilFormat}|${TT._depthCompare}|${TT._sampleCount}`;
        let mT = this.pipelines.get(UT);
        mT || (mT = new Map, this.pipelines.set(UT, mT)), this.targetPipelines = mT
      }
      pipelineFor(TT) {
        var UT;
        const mT = this.targetPipelines,
          WT = mT.get(TT);
        if (void 0 !== WT) return WT;
        mT.set(TT, null);
        const zT = this.target,
          MT = TT === GT.e,
          gT = null !== (UT = zT._depthCompare) && void 0 !== UT ? UT : YU,
          {
            device: nT
          } = this;
        return nT.createRenderPipelineAsync({
          label: `particles-${TT}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: fU({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: MT ? 1 : 0
            }
          }, zT, MU((0, GT.h)(TT))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: zT._depthStencilFormat ? {
            format: zT._depthStencilFormat,
            depthCompare: gT,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: zT._sampleCount
          }
        }).then((UT => {
          mT.set(TT, UT)
        }), (UT => {
          mT.set(TT, !1), console.error("Lite particle pipeline failed", UT), jU(nT, "particles", `blend-${TT}`, UT)
        })), null
      }
      allocateFrameIndex() {
        const TT = this.freeFrameIndices.pop();
        if (void 0 !== TT) return TT;
        const UT = this.nextFrameIndex++;
        if (64 * (UT + 1) > this.frameData.length) {
          const TT = new Float32Array(2 * this.frameData.length);
          TT.set(this.frameData), this.frameData = TT, this.frameBits = new Uint32Array(TT.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return UT
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
    class IH {
      constructor(TT, UT, mT, WT, zT) {
        this.lite = TT, this.canvas = UT, this.info = mT, this.resources = zT, this.pWT = !1, this.needPOTTextures = !1, this.b_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = UT.width, this.renderHeight = UT.height, this.caps = {
          maxTextureSize: WT.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: WT.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(TT) {
        this.lite = TT, (0, uT.w)(TT, this.renderWidth, this.renderHeight)
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
      setSize(TT, UT) {
        if (this.renderWidth === TT && this.renderHeight === UT) return !1;
        const mT = this.renderWidth,
          WT = this.renderHeight;
        this.renderWidth = TT, this.renderHeight = UT;
        const zT = this.lite;
        if (null === zT) return !0;
        try {
          (0, uT.w)(zT, TT, UT)
        } catch (MT) {
          if (MT instanceof DOMException && "InvalidStateError" === MT.name) {
            this.renderWidth = mT, this.renderHeight = WT;
            try {
              (0, uT.w)(zT, mT, WT)
            } catch {
              this.canvas.width = mT, this.canvas.height = WT
            }
            return console.warn("WebGPU could not allocate render targets for resize", TT, UT, MT.message), !1
          }
          throw MT
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
      fY() {
        const TT = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : TT - this.lastFrameTime, this.lastFrameTime = TT
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(TT, UT) {
        const mT = document.createElement("canvas");
        return mT.width = TT, mT.height = UT, mT
      }
      J_(TT, UT) {
        var mT;
        return null !== (mT = this.resources.J_.get(TT)) && void 0 !== mT ? mT : new LU(this.resources, TT, UT)
      }
      atlasArrays(TT) {
        return this.resources.atlasArrays(TT)
      }
    }
    class QH {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(TT) {
        this.fov = TT.fov, this.nearPlane = TT.near, this.farPlane = TT.far;
        const UT = TT.worldMatrix;
        for (let mT = 0; mT < 16; mT++)
          if (this.worldMatrix[mT] !== UT[mT]) return this.worldMatrix.set(UT), void this.worldMatrixVersion++
      }
    }
    class sH {
      constructor(TT, UT, mT, WT) {
        this.canvas = UT, this.options = mT, this.hUT = void 0, this.backendName = "WebGPU (Lite)", this.I3 = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new QH, this.lastFrameTime = 0, this.engine = void 0, this.XZ = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.GB = null, this.firstTerrain = null, this.trialFrames = 0, this.install(TT);
        const {
          resources: zT,
          meshes: MT
        } = TT;
        this.resources = zT, this.particles = TT.particles, this.hUT = new IH(TT.engine, UT, WT, TT.device.limits, zT), (0, dT.L)({
          fn: TT => {
            yT(TT) && zT.textureSlot(TT)
          },
          loaded: TT => yT(TT) ? zT.textureLoaded(TT) : null,
          canvasUpdated: (TT, UT, mT) => {
            yT(TT) && zT.canvasUpdated(TT, UT, mT)
          }
        }), this.I3 = MT.I3, this.modelMeshes = MT.modelMeshes
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
      install(TT) {
        this.engine = TT.engine, this.XZ = TT.XZ, this.sceneTask = TT.sceneTask, this.device = TT.device, this.liteTerrain = TT.terrain, this.meshes = TT.meshes, this.sunShadow = TT.sunShadow;
        const UT = new KT(TT.device.lost);
        this.refusals = UT, UT.deviceLost.then((() => {
          var UT;
          UT = TT.device, HU.add(UT)
        })), TT.XZ.camera = this.camera
      }
      async rebuild() {
        var TT, UT, mT, WT, zT;
        const MT = await uH();
        this.halted = !0, this.liteTerrain.retire(), null === (TT = this.sunShadow) || void 0 === TT || TT.dispose(), this.hUT.detach();
        try {
          (0, CT.c)(this.engine)
        } catch (jT) {
          console.warn("Lite: disposing the lost device's engine threw", jT)
        }
        const gT = {
            width: this.hUT.renderWidth,
            height: this.hUT.renderHeight
          },
          nT = await CH(this.canvas, this.options, gT, MT),
          HT = iU(nT),
          kT = rH(HT);
        try {
          this.resources.rebind(nT, HT), this.particles.rebind(HT), this.I3.dropSteady();
          const TT = {
              resources: this.resources,
              particles: this.particles,
              I3: this.I3,
              modelMeshes: this.modelMeshes
            },
            UT = await KH(nT, HT, this.options, TT),
            mT = kT();
          if (null !== mT) throw new Error(`WebGPU device lost while Lite was rebuilding (${mT.reason}): ${mT.message}`);
          const {
            r: WT,
            g: zT,
            b: MT
          } = this.XZ.clearColor;
          this.install(UT), this.setClearColour(WT, zT, MT), this.hUT.rebind(nT)
        } catch (jT) {
          throw HT.destroy(), jT
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (UT = this.GB) || void 0 === UT || UT.resize(), null === (mT = this.GB) || void 0 === mT || null === (WT = mT.Rl) || void 0 === WT || null === (zT = WT.JY) || void 0 === zT || zT.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((TT, UT) => {
          this.firstTerrain = {
            drawn: TT,
            failed: UT
          }
        }))
      }
      get castsEntitySunShadows() {
        var TT, UT;
        return null !== (TT = null === (UT = this.sunShadow) || void 0 === UT ? void 0 : UT.tracesEntities) && void 0 !== TT && TT
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(TT) {
        this.GB = TT, this.modelMeshes.attach(TT.model, TT.sceneMirror);
        const UT = TT.XZ;
        this.setClearColour(UT.clearColor.r, UT.clearColor.g, UT.clearColor.b), UT.draw = () => {
          this.drawFrame(TT, UT)
        }
      }
      render(TT) {
        if (!this.refusals.lost && !this.halted) {
          try {
            this.hUT.fY(), TT.XZ.render()
          } catch (UT) {
            throw this.refusals.frameFailed(UT), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(UT), this.firstTerrain = null), UT
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var TT, UT, mT, WT;
        const zT = [...this.particles.describePendingWork(), ...null !== (TT = null === (UT = this.sunShadow) || void 0 === UT ? void 0 : UT.describePendingWork()) && void 0 !== TT ? TT : []],
          MT = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (mT = this.terrain.sceneDepth) && void 0 !== mT && mT.compiling ? 1 : 0) + (null !== (WT = this.terrain.shadowMask) && void 0 !== WT && WT.compiling ? 1 : 0);
        MT > 0 && zT.push(`${MT} Lite pipelines compiling`);
        const gT = this.terrain.buffersAwaitingVerdict;
        gT > 0 && zT.push(`${gT} Lite terrain buffers awaiting their out-of-memory verdict`);
        const nT = this.resources.texturesLoading;
        return nT > 0 && zT.push(`${nT} Lite textures loading`), zT
      }
      prepareTexture(TT) {
        return null !== this.resources.boundTexture(TT) || this.resources.textureFailed(TT)
      }
      drawFrame(TT, UT) {
        var mT, WT, zT, MT, gT, nT;
        const HT = fn(TT);
        this.camera.copyFromView(HT), this.setClearColour(HT.clearColour[0], HT.clearColour[1], HT.clearColour[2]), null === (mT = this.sunShadow) || void 0 === mT || mT.prepare(TT.Rl, HT.eye, null !== (WT = TT.Rl.Np) && void 0 !== WT ? WT : null), this.terrain.prepare(TT, HT), null === (zT = this.terrain.sceneDepth) || void 0 === zT || zT.setPlanes(HT.near, HT.far), null === (MT = this.terrain.shadowMask) || void 0 === MT || MT.prepare(HT), mn(this.sceneTask), this.meshes.prepare(UT, HT, TT.model.earthSky, null !== (gT = TT.Rl.Np) && void 0 !== gT ? gT : null), this.particles.prepare(HT);
        const kT = performance.now();
        this.resources.flushUploads(), null === (nT = this.sunShadow) || void 0 === nT || nT.traceEntities(this.meshes);
        try {
          (0, uT.s)(this.engine, this.lastFrameTime > 0 ? kT - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = kT, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(kT), this.firstTerrain = null)
      }
      setClearColour(TT, UT, mT) {
        const WT = this.XZ.clearColor;
        WT.r = TT, WT.g = UT, WT.b = mT, WT.a = 1
      }
    }

    function FH(TT) {
      const UT = {};
      for (const mT in TT.limits) {
        const WT = TT.limits[mT];
        "number" === typeof WT && (UT[mT] = WT)
      }
      return UT
    }
    const PH = "WebGPU device lost while Lite was starting";
    async function VH(TT, UT) {
      const mT = await uH(),
        WT = mT.info,
        zT = {
          vendor: (null === WT || void 0 === WT ? void 0 : WT.vendor) || "unknown vendor",
          renderer: (null === WT || void 0 === WT ? void 0 : WT.architecture) || "unknown renderer",
          version: (null === WT || void 0 === WT ? void 0 : WT.description) || "unknown version"
        };
      TT.style.background = "black";
      const MT = await CH(TT, UT, UT.bufferSize, mT),
        gT = iU(MT),
        nT = rH(gT);
      try {
        const mT = new sH(await KH(MT, gT, UT, null), TT, UT, zT),
          WT = nT();
        if (null !== WT) {
          const {
            reason: TT,
            message: UT
          } = WT;
          throw Object.assign(new Error(`${PH} (${TT}): ${UT}`), {
            fallbackReason: PH
          })
        }
        return mT
      } catch (HT) {
        throw gT.destroy(), null === nT() ? HT : (0, Un.g)(HT, "device")
      }
    }
    async function uH() {
      const TT = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!TT) throw (0, Un.g)(new Error("No WebGPU adapter"), "no_adapter");
      return TT
    }
    async function CH(TT, UT, mT, WT) {
      let zT;
      try {
        zT = await (0, uT.i)(TT, {
          msaaSamples: UT.dmT ? 4 : 1,
          requiredLimits: FH(WT),
          alphaMode: "premultiplied"
        })
      } catch (gT) {
        throw (0, Un.g)(gT, "#47" === (null === (MT = gT) || void 0 === MT ? void 0 : MT.message) ? "no_adapter" : "device")
      }
      var MT;
      return null !== mT && (0, uT.w)(zT, mT.width, mT.height), zT
    }

    function rH(TT) {
      let UT = null;
      return TT.lost.then((TT => {
        UT = TT, console.error(`WebGPU device lost (${TT.reason}): ${TT.message}`)
      })), () => UT
    }
    async function KH(TT, UT, mT, WT) {
      var zT, MT;
      let {
        sceneDepth: gT,
        sunShadow: nT
      } = mT;
      const HT = (0, rT.c)(TT),
        kT = null !== (zT = null === WT || void 0 === WT ? void 0 : WT.resources) && void 0 !== zT ? zT : new Ag(TT, UT),
        jT = new WH(UT),
        lT = new Ig(UT, kT, (TT => function(TT, UT) {
          for (const WT of bU(TT)) {
            var mT;
            if (WT._targetSignature === UT) return null !== (mT = WT._sceneBG) && void 0 !== mT ? mT : null
          }
          return null
        }(HT, TT)), null === WT || void 0 === WT ? void 0 : WT.I3, null === WT || void 0 === WT ? void 0 : WT.modelMeshes),
        LT = null !== (MT = null === WT || void 0 === WT ? void 0 : WT.particles) && void 0 !== MT ? MT : new XH(UT, kT);
      for (const ZT of function(TT, UT, mT) {
          return [UT.opaqueRenderable, TT.opaqueRenderable, TT.skyLastRenderable, mT.renderable, UT.transparentRenderable, TT.transparentRenderable, TT.frontRenderable]
        }(lT, jT, LT)) qU(HT, ZT);
      const pT = function(TT) {
        for (const UT of bU(TT))
          if ("XZ" === UT.name) return UT;
        throw new Error("Lite: the scene has no render task named scene")
      }(HT);
      gT && jT.installSceneDepth(pT, TT);
      const BT = nT ? new bH(UT, nT.entities) : null;
      return jT.sunShadow = BT, BT && null !== nT && void 0 !== nT && nT.entities && (jT.shadowMask = new Qn(UT, pT, TT, jT)), lT.sunShadow = BT, await (0, rT.d)(HT), {
        engine: TT,
        XZ: HT,
        sceneTask: pT,
        device: UT,
        terrain: jT,
        meshes: lT,
        sunShadow: BT,
        resources: kT,
        particles: LT
      }
    }
  },
  40839: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => HT,
      E: () => gT,
      F: () => ZT,
      H: () => pT,
      K: () => BT,
      e: () => zT,
      i: () => WT,
      m: () => LT,
      p: () => jT,
      r: () => cT,
      u: () => MT,
      x: () => nT
    });
    const WT = 3,
      zT = 0,
      MT = 1,
      gT = 2,
      nT = {
        uniform: 3,
        iL: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      HT = 10,
      kT = "BloxdPackInputs",
      jT = "bloxdPackInputs",
      lT = [{
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
      LT = 80;

    function pT() {
      const TT = lT.map((TT => {
        let {
          name: UT,
          type: mT
        } = TT;
        return `    ${UT}: ${mT},\n`
      })).join("");
      return `struct ${kT} {\n${TT}}\n@group(${WT}) @binding(${zT}) var<uniform> ${jT}: ${kT};\n`
    }

    function BT(TT, UT) {
      const mT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, LT),
        [WT, zT, MT, gT, nT, HT] = lT;
      mT.setFloat32(WT.offset, UT.seconds, !0), mT.setUint32(zT.offset, UT.lit ? 1 : 0, !0);
      for (let kT = 0; kT < 3; kT++) mT.setInt32(MT.offset + 4 * kT, UT.renderOffset[kT], !0), mT.setFloat32(gT.offset + 4 * kT, UT.zTT[kT], !0), mT.setFloat32(nT.offset + 4 * kT, UT.eyePosition[kT], !0), mT.setFloat32(HT.offset + 4 * kT, UT.shadowDirection[kT], !0)
    }

    function ZT(TT) {
      const UT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, mT) => {
        let {
          id: WT,
          rotation: zT
        } = TT;
        UT[mT] = 65535 & WT | (3 & zT) << 16
      })), UT
    }
    const cT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);