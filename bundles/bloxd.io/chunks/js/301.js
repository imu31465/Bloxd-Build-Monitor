export const id = 301;
export const ids = [301];
export const modules = {
  44799: (ee, ie, He) => {
    He.d(ie, {
      c: () => pe,
      g: () => Ue,
      h: () => Ke,
      l: () => Je
    });
    var ye = He(38020),
      be = He(39499),
      Me = He(39492);

    function Ke(ee, ie, He, ye) {
      const be = Me.v;
      ie.fill(0), ee.gravity.toArray(ie, be.gravity), ee.colorDead.toArray(ie, be.colorDead), He[be.ramp] = ee.useRampGradients ? 1 : 0;
      const Ke = ee.getColorGradients(),
        Ue = ke(ee, Ke, "colour", ye);
      He[be.colorCount] = Ue;
      for (let Me = 0; Me < Ue; Me++) {
        var Fe;
        const ee = Ke[qe(Ke, Me)];
        ie[be.colorPositions + Me] = ee.gradient, ee.color1.toArray(ie, be.color1 + 4 * Me), (null !== (Fe = ee.color2) && void 0 !== Fe ? Fe : ee.color1).toArray(ie, be.color2 + 4 * Me)
      }
      const Je = ee.getVelocityGradients(),
        oe = ke(ee, Je, "Op", ye);
      He[be.velocityCount] = oe;
      for (let Me = 0; Me < oe; Me++) ze(ie, be.Op + 4 * Me, Je[qe(Je, Me)]);
      const Re = ee.useRampGradients ? ee.getColorRemapGradients() : null,
        fe = ke(ee, Re, "colour remap", ye);
      He[be.remapCount] = fe;
      for (let Me = 0; Me < fe; Me++) ze(ie, be.remap + 4 * Me, Re[qe(Re, Me)])
    }

    function Ue() {
      return {
        key: [],
        texels: new Uint8Array(4 * Me.i)
      }
    }
    const Fe = [];

    function Je(ee, ie) {
      return oe(ee, Fe), !Xe(Fe, ie.key) && (ie.key.length = 0, ie.key.push(...Fe), ie.key.length > 0 && function(ee, ie) {
        for (let He = 0; He < Me.i; He++) be.k.GetCurrentGradient(He / Me.i, ee, ((ee, ie, He) => {
          ye.Color3.LerpToRef(ee.color, ie.color, He, Re)
        })), ie[4 * He] = 255 * Re.r, ie[4 * He + 1] = 255 * Re.g, ie[4 * He + 2] = 255 * Re.b, ie[4 * He + 3] = 255
      }(ee.getRampGradients(), ie.texels), !0)
    }

    function oe(ee, ie) {
      ie.length = 0;
      const He = ee.useRampGradients ? ee.getRampGradients() : null;
      if (null !== He && void 0 !== He && He.length) {
        ie.push(He.length);
        for (const ee of He) ie.push(ee.gradient, ee.color.r, ee.color.g, ee.color.b)
      }
    }
    const Re = new ye.Color3;

    function ke(ee, ie, He, ye) {
      return ie ? ie.length > Me.b ? (ye(`particleStops:${He}`, `GPU particles use the first 2 and last ${Me.b-2} of more than ${Me.b} ${He} gradient stops (${ee.name})`), Me.b) : ie.length : 0
    }

    function qe(ee, ie) {
      return ie < 2 || ee.length <= Me.b ? ie : ee.length - Me.b + ie
    }
    const fe = new Float32Array(Me.n),
      Te = new Uint32Array(fe.buffer);

    function pe(ee, ie, He) {
      return Ke(ee, fe, Te, He), ie && Xe(Te, ie) ? null : Te.slice()
    }

    function Xe(ee, ie) {
      if (ee.length !== ie.length) return !1;
      for (let He = 0; He < ee.length; He++)
        if (ee[He] !== ie[He]) return !1;
      return !0
    }

    function ze(ee, ie, He) {
      var ye;
      ee[ie] = He.gradient, ee[ie + 1] = He.factor1, ee[ie + 2] = null !== (ye = He.factor2) && void 0 !== ye ? ye : He.factor1
    }
  },
  42229: (ee, ie, He) => {
    function ye(ee, ie, He) {
      const ye = ie * ie * 4,
        be = ee[0].layers,
        Me = be * (ee.length - 1) + ee[ee.length - 1].layers,
        Ke = new Uint8Array(Me * ye);
      ee.forEach(((ie, He) => {
        const Me = He + 1 < ee.length ? Math.min(ie.layers, be) : ie.layers;
        Ke.set(new Uint8Array(ie.pixels.buffer, ie.pixels.byteOffset, Me * ye), He * be * ye)
      }));
      const Ue = Math.max(1, Math.min(Me, He || Me));
      if (Ue === Me) return [{
        pixels: Ke,
        layers: Me
      }];
      const Fe = [];
      for (let Je = 0; Je < Me; Je += Ue) {
        const ee = Math.min(Me, Je + Ue);
        Fe.push({
          pixels: Ke.slice(Je * ye, ee * ye),
          layers: ee - Je
        })
      }
      return Fe
    }
    He.d(ie, {
      c: () => ye,
      e: () => Me
    });
    const be = new WeakMap;

    function Me(ee, ie, He) {
      var ye, Me;
      const Ke = null !== (ye = be.get(ee)) && void 0 !== ye ? ye : new Map;
      be.set(ee, Ke);
      const Ue = null !== (Me = Ke.get(ie[0])) && void 0 !== Me ? Me : [];
      Ke.set(ie[0], Ue);
      const Fe = Ue.find((ee => ee.urls.length === ie.length && ee.urls.every(((ee, He) => ee === ie[He]))));
      if (Fe) return Fe.built;
      const Je = {
        urls: [...ie],
        built: He()
      };
      return Ue.push(Je), Je.built.catch((() => {
        Ue.splice(Ue.indexOf(Je), 1)
      })), Je.built
    }
  },
  44791: (ee, ie, He) => {
    function ye() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ie = new Set;
      return (He, ye) => {
        ie.has(He) || (ie.add(He), console.warn(ee + ye))
      }
    }
    He.d(ie, {
      b: () => ye
    })
  },
  44835: (ee, ie, He) => {
    He.d(ie, {
      createLiteRendererAsync: () => LF,
      liteBabylonBackend: () => ve,
      setPipelineFailureHook: () => Ui
    });
    var ye = He(38020),
      be = He(38341),
      Me = He(38743),
      Ke = He(38070),
      Ue = He(38751);
    class Fe extends Ue.b {
      constructor() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        super(...ie), this.color = new ye.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: ie[0].Xx().getUniqueId(),
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
          needAlphaBlendingForMesh: ee => ee.visibility < 1 || ee.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Je = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      oe = ee => 1 << Je.indexOf(ee),
      Re = oe("VERTEXCOLOR"),
      ke = oe("INSTANCES"),
      qe = oe("THIN_INSTANCES"),
      fe = oe("INSTANCESCOLOR"),
      Te = oe("FOG"),
      pe = oe("LITE_FRONT_LAYER");

    function Xe(ee, ie, He, ye) {
      let be = 0;
      return ee.isVerticesDataPresent("color") && (be |= Re), "none" !== ie && (be |= ke), "thin" === ie && (be |= qe, ee.isVerticesDataPresent("instanceColor") && (be |= fe)), ye.fogEnabled && ee.applyFog && 0 !== ye.fogMode && (be |= Te), He >= 1 && (be |= pe), be
    }

    function ze(ee, ie) {
      ee.updateColor4("color", ie.color, ie.alpha)
    }
    var Be = He(38682),
      Ee = He(38146),
      ge = He(38081),
      Oe = He(38034),
      de = He(38659),
      We = He(38673),
      te = He(38057),
      Ze = He(38064),
      we = He(38075);
    const De = Oe.b.GLSL;
    class Pe {
      constructor(ee, ie) {
        this.name = ee, this.yp = ie, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Bx = {
          addOnce: ee => {
            this.disposers.push(ee)
          }
        }, this.uniqueId = ie.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      Xx() {
        return this.yp
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
      needAlphaBlendingForMesh(ee) {
        return (0, te.M)(this.model, ee.visibility, ee.hasVertexAlpha)
      }
      needAlphaTestingForMesh(ee) {
        return (0, te.O)(this.model, ee.visibility, ee.hasVertexAlpha)
      }
      dispose() {
        (0, Ee.m)(this);
        for (const ee of this.disposers.splice(0)) ee()
      }
      get model() {
        return (0, te.V)(this)
      }
    }
    const Ae = new WeakSet;

    function Ye(ee) {
      return Ae.has(ee)
    }

    function Ve(ee) {
      Ae.add(ee)
    }
    const ae = {
      create: (ee, ie) => ((0, ge.o)(ee, new Pe(ee.name, ie)), Ze.b.defines()),
      write: () => {},
      addFeature: (ee, ie) => {
        const He = ee.mirror;
        ie.feature === We.e && ie.state.dirLightCount > 0 && (ee.disableLighting = !0, (0, te.S)(ee)), "BLOXD_LIGHTING" in ie.defines && (0, Ee.i)(He), ie.feature === de.k && ((0, Be.l)(ie.state, De), function(ee, ie) {
          const He = ee.Xx().Nf();
          setTimeout((() => {
            He.atlasArrays(ie.sources).then((He => {
              (0, Be.d)(ee, ie, He.map((ee => ({
                atlas: ee,
                layers: ee.layers
              }))), He[0].layerWidth, De)
            })).catch((ee => {
              console.error("Failed to build the atlas's texture arrays", ee)
            }))
          }))
        }(He, ie.state))
      },
      texture: (ee, ie, He) => {
        let {
          data: ye,
          sets: be
        } = He;
        var Me;
        (Ve(ee), ye) && (ee.uvSet = null !== (Me = null === be || void 0 === be ? void 0 : be.coordinatesIndex) && void 0 !== Me ? Me : 0, (0, ge.Z)(ee.matrix, null !== be && void 0 !== be ? be : {}))
      },
      cube: Ve,
      canvas: (ee, ie, He) => {
        let {
          width: ye,
          height: be,
          mipmaps: Me,
          samplingMode: Ke = we.h.trilinear,
          hasAlpha: Ue = !1,
          wrap: Fe = we.b.clamp
        } = He;
        const Je = ee.Nf().createCanvas(ye, be),
          oe = new we.k("2d", {
            kind: "canvas",
            width: ye,
            height: be,
            canvas: Je
          }, {
            samplingMode: Ke,
            wrapU: Fe,
            wrapV: Fe,
            noMipmap: !Me,
            invertY: !0
          });
        return oe.hasAlpha = Ue, Ve(oe), oe
      }
    };
    var ce = He(38171),
      xe = He(37931);
    class Le {
      constructor(ee, ie, He) {
        this.engine = ee, this.clearColor = ie, this.ambientColor = He, this.onBeforeRenderObservable = new xe.d, this.onBeforeCameraRenderObservable = new xe.d, this.onAfterRenderObservable = new xe.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.zW = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Nf() {
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
      addPendingData(ee) {
        this.pending.push(ee)
      }
      removePendingData(ee) {
        const ie = this.pending.indexOf(ee); - 1 !== ie && this.pending.splice(ie, 1)
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

    function Ce() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const ve = {
      Rbe: Ce,
      VMe: (ee, ie) => {
        const He = new Le(ee.engine, ye.e.FromArray(ie.clearColor), ye.Color3.FromArray(ie.ambientColor));
        (0, Ke.d)(ae, He), ee.yp = He,
          function(ee, ie) {
            const He = Object.assign((0, ce.h)(ee, "camera"), {
              layerMask: 268435455
            });
            ee.model.nodes.setWorldSource(He.row, ee.model.view.worldMatrix), ee.camera = ie.activeCamera = He
          }(ee, He), (0, be.f)(ee, ((ee, ie, He) => (0, Me.g)(ee, ie, He, Ue.b)))
      },
      DMe: () => {},
      setBabylonFog: () => {},
      cMe: Ce,
      vMe: () => {},
      linesFromArrays: (ee, ie, He) => (0, Me.g)(ee, ie, He, Fe),
      bp: () => {},
      CMe: Ce
    };
    var ue = He(44888),
      me = He(44900),
      le = He(44909);
    class Se {
      constructor(ee) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const ie = new Promise((ee => {
          this.refused = ee
        }));
        this.deviceLost = Promise.race([ee, ie]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(ee) {
        (function(ee) {
          const {
            name: ie,
            message: He
          } = null !== ee && void 0 !== ee ? ee : {};
          return "InvalidStateError" === ie && "string" === typeof He && He.startsWith("GPUDevice.")
        })(ee) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: ee.message,
          framesRefused: !0
        }))
      }
    }
    var ne = He(42229),
      je = He(39508);

    function se(ee) {
      return Math.max(4, 4 * Math.ceil(ee / 4))
    }

    function Ie(ee, ie, He, ye) {
      const be = ee.createBuffer({
        label: ye,
        size: se(ie.byteLength),
        usage: He,
        mappedAtCreation: !0
      });
      return new Uint8Array(be.getMappedRange(), 0, ie.byteLength).set(new Uint8Array(ie.buffer, ie.byteOffset, ie.byteLength)), be.unmap(), be
    }

    function he(ee, ie) {
      return Math.floor(Math.log2(Math.max(ee, ie))) + 1
    }

    function Ne(ee, ie, He, ye, be, Me) {
      const Ke = ee.createTexture({
          label: Me,
          size: {
            width: He,
            height: ye,
            depthOrArrayLayers: be
          },
          format: "rgba8unorm",
          mipLevelCount: he(He, ye),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Ue = (ie, He, ye, Me) => {
          ee.queue.writeTexture({
            texture: Ke,
            mipLevel: He
          }, ie, {
            bytesPerRow: 4 * ye,
            rowsPerImage: Me
          }, {
            width: ye,
            height: Me,
            depthOrArrayLayers: be
          })
        };
      Ue(ie, 0, He, ye);
      let Fe = 1;
      for (const Je of function*(ee, ie, He, ye) {
          let be = ee,
            Me = ie,
            Ke = He;
          for (; Me > 1 || Ke > 1;) {
            const ee = Math.max(1, Me >> 1),
              ie = Math.max(1, Ke >> 1),
              He = new Uint8Array(ee * ie * ye * 4),
              Ue = 4 * Me;
            let Fe = 0;
            for (let Je = 0; Je < ye; Je++) {
              const ye = Je * Ue * Ke;
              for (let Je = 0; Je < ie; Je++) {
                const ie = ye + Math.min(2 * Je, Ke - 1) * Ue,
                  oe = ye + Math.min(2 * Je + 1, Ke - 1) * Ue;
                for (let ye = 0; ye < ee; ye++) {
                  const ee = 4 * Math.min(2 * ye, Me - 1),
                    Ke = 4 * Math.min(2 * ye + 1, Me - 1);
                  for (let ye = 0; ye < 4; ye++) He[Fe++] = be[ie + ee + ye] + be[ie + Ke + ye] + be[oe + ee + ye] + be[oe + Ke + ye] + 2 >> 2
                }
              }
            }
            yield {
              data: He,
              width: ee,
              height: ie
            }, be = He, Me = ee, Ke = ie
          }
        }(ie, He, ye, be)) Ue(Je.data, Fe++, Je.width, Je.height);
      return Ke
    }
    const Ge = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function re(ee) {
      if (ee.startsWith("data:")) {
        const ie = ee.search(/[;,]/);
        return `data:${ie>5?ee.slice(5,ie):""} URL of ${ee.length} characters`
      }
      return ee.length > 80 ? `${ee.slice(0,80)}...` : ee
    }
    async function Qe(ee) {
      const ie = await fetch(ee);
      if (!ie.ok) throw new Error(`${re(ee)}: ${ie.status} ${ie.statusText}`);
      return createImageBitmap(await ie.blob(), Ge)
    }
    async function ei(ee) {
      const ie = await Qe(ee),
        He = new OffscreenCanvas(ie.width, ie.height),
        ye = He.getContext("2d", {
          willReadFrequently: !0
        });
      if (!ye) throw new Error("No 2D context to decode an image");
      ye.drawImage(ie, 0, 0);
      const {
        data: be
      } = ye.getImageData(0, 0, ie.width, ie.height);
      return ie.close(), {
        pixels: new Uint8Array(be.buffer, be.byteOffset, be.byteLength),
        width: He.width,
        height: He.height
      }
    }

    function ii(ee, ie) {
      return (0, ne.e)(ee, ie.urls, (async () => {
        const He = await Promise.all(ie.urls.map((async (ee, He) => {
            var ye, be, Me, Ke, Ue;
            return null !== (Ke = null !== (be = null === (Me = ie.pixels) || void 0 === Me ? void 0 : Me[He]) && void 0 !== be ? be : null, Ue = ie.layerWidth, ye = null !== Ke && void 0 !== Ke && Ke.byteLength && Ue && Ke.byteLength % (Ue * Ue * 4) === 0 ? {
              pixels: Ke,
              layerWidth: Ue,
              layers: Ke.byteLength / (Ue * Ue * 4)
            } : null) && void 0 !== ye ? ye : await async function(ee) {
              const {
                pixels: ie,
                width: He
              } = await ei(ee);
              return {
                pixels: ie,
                layerWidth: He,
                layers: ie.byteLength / (He * He * 4)
              }
            }(ee)
          }))),
          ye = He[0].layerWidth;
        return (0, ne.c)(He, ye, ee.limits.maxTextureArrayLayers).map(((He, be) => {
          let {
            pixels: Me,
            layers: Ke
          } = He;
          return {
            texture: Ne(ee, Me, ye, ye, Ke, `atlas-${be}-${re(ie.urls[0])}`),
            layerWidth: ye,
            layers: Ke
          }
        }))
      }))
    }
    const Hi = new Map([
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
      yi = new Map([
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

    function bi(ee) {
      for (const ie of (0, je.p)(ee))
        if (!yi.has((0, je.l)(ie))) return !1;
      return !0
    }

    function Mi(ee) {
      const ie = yi.get(ee);
      if (!ie) return null;
      const [He, ye, be] = ie;
      return {
        srcFactor: Hi.get(He),
        dstFactor: Hi.get(ye),
        operation: be
      }
    }
    let Ki = null;

    function Ui(ee) {
      Ki = ee
    }
    const Fi = new WeakSet;

    function Ji(ee) {
      return Fi.has(ee)
    }

    function oi(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var Me;
      Ji(ee) || (null === (Me = Ki) || void 0 === Me || Me(ie, He, ye, be))
    }
    class Ri {
      constructor(ee) {
        this.resources = ee, this.matrixKey = {
          bk: 0
        }, this.attributesKey = {
          bk: 0
        }, this.inputs = Object.create(null);
        for (let ie = 0; ie < 4; ie++) this.inputs[`world${ie}`] = new fi(this.matrixKey, 16 * ie, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(ee, ie) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, ee, !0), ie && this.resources.vertexBufferCreated(this.attributesKey, ie, !0)
      }
    }
    class ki extends Ri {
      constructor(ee, ie, He) {
        super(ee), this.mesh = ie, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const ye = this.inputs;
        let be = 0;
        for (const {
            size: Ke
          }
          of He) be += Ke;
        for (const {
            name: Ke,
            offset: Ue,
            size: Fe,
            type: Je
          }
          of He) ye[Ke] = new fi(this.attributesKey, 4 * Ue, 4 * be, Fe, !0, Je);
        this.rowStride = be, ee.Zee.set(ie, this);
        const Me = ie.isVerticesDataPresent;
        ie.isVerticesDataPresent = (ee, He) => ee in ye || Me.call(ie, ee, He)
      }
      attach(ee, ie) {
        this.matrices = ee, this.attributes = ie, this.bind(ee, ie), this.mirror(ee, ee.length, ee.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      Rie(ee) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, ee ? 64 * ee : void 0)
      }
      kie() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(ee, ie) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * ee, 16 * ie)
      }
      attributeRows(ee, ie) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, ee * this.rowStride, ie * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(ee, ie, He) {
        const ye = this.mesh._thinInstanceDataStorage;
        ye.matrixData = ee, ye.matrixBufferSize = ie, ye.worldMatrices = null, ye.instancesCount = He
      }
    }
    class qi extends Ri {
      constructor(ee, ie, He) {
        var ye, be, Me, Ke;
        super(ee), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (ye = null === He || void 0 === He ? void 0 : He.interleavedKinds) && void 0 !== ye ? ye : null, this.offsets = null !== (be = null === He || void 0 === He ? void 0 : He.interleavedOffsets) && void 0 !== be ? be : [], this.rowStride = null !== (Me = null === He || void 0 === He ? void 0 : He.interleavedRowStride) && void 0 !== Me ? Me : 0, null === (Ke = this.layout) || void 0 === Ke || Ke.forEach(((ee, ie) => {
          this.inputs[ee] = new fi(this.attributesKey, 4 * this.offsets[ie], 4 * this.rowStride, He.strides[ee])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), ee.batchUploads.set(ie, this), ie.Bx.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(ee) {
        const ie = this.packedBatch;
        return ie.renderSelf ? 0 === ee ? this.packedSource : ie.instances[ee - 1] : ie.instances[ee]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(ee, ie, He, ye) {
        const be = (ie.renderSelf ? 1 : 0) + ie.rows.length;
        if (this.frame = ye, this.count = be, this.packedSource = ee, this.packedBatch = ie, 0 === be) return;
        if (ee.getWorldMatrix(), 16 * be > this.matrices.length) {
          let ee = this.matrices.length / 16;
          for (; ee < be;) ee *= 2;
          this.matrices = new Float32Array(16 * ee), this.attributes &&= new Float32Array(ee * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Me = 0;
        ie.renderSelf && this.packRow(Me++, ee, ie.row, He);
        for (let Ke = 0; Ke < ie.rows.length; Ke++) this.packRow(Me++, ie.instances[Ke], ie.rows[Ke], He);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * be), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, be * this.rowStride)
      }
      packRow(ee, ie, He, ye) {
        const be = this.matrices;
        if (He < 0) be.set(ie.getWorldMatrix().m, 16 * ee);
        else
          for (let Je = 0; Je < 16; Je++) be[16 * ee + Je] = ye[16 * He + Je];
        const Me = this.attributes;
        if (!Me) return;
        const Ke = ie.pC,
          Ue = this.layout;
        for (let Je = 0; Je < Ue.length; Je++) {
          var Fe;
          const ie = null !== (Fe = Ke[Ue[Je]]) && void 0 !== Fe ? Fe : 0,
            He = ee * this.rowStride + this.offsets[Je];
          ie.toArray ? ie.toArray(Me, He) : ie.copyToArray ? ie.copyToArray(Me, He) : Me[He] = ie
        }
      }
    }
    class fi {
      constructor(ee, ie, He, ye) {
        let be = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = ee, this.byteOffset = ie, this.byteStride = He, this.size = ye, this.instanced = be, this.type = Me, this.normalized = Ke
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
    const Ti = "CANVAS_ALPHA_ONE",
      Xi = `override ${Ti}: bool = false;`,
      zi = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Bi(ee, ie, He) {
      var ye;
      let be = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Me = null !== (ye = ie._colorFormat) && void 0 !== ye ? ye : "bgra8unorm",
        Ke = be ? 15 : 0;
      return He ? {
        ...ee,
        targets: [{
          format: Me,
          blend: {
            color: He,
            alpha: zi
          },
          writeMask: Ke
        }]
      } : {
        ...ee,
        constants: {
          ...ee.constants,
          [Ti]: 1
        },
        targets: [{
          format: Me,
          writeMask: Ke
        }]
      }
    }

    function Ei(ee, ie) {
      ee._renderables.push(ie)
    }

    function gi(ee) {
      return ee._device
    }

    function Oi(ee) {
      var ie, He;
      return null !== (ie = null === (He = ee._frameGraph) || void 0 === He ? void 0 : He._tasks) && void 0 !== ie ? ie : []
    }

    function di(ee) {
      return ee._currentEncoder
    }

    function Wi(ee) {
      return ee.createBindGroupLayout({
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
    const ti = "greater-equal",
      Zi = 2e5,
      wi = 1e5,
      Di = new WeakMap;

    function Pi(ee, ie) {
      let He = Di.get(ee);
      if (!He) {
        He = {
          module: ee.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Di.set(ee, He)
      }
      const ye = `${ie._colorFormat}|${ie._depthStencilFormat}|${ie._sampleCount}`;
      let be = He.pipelines.get(ye);
      if (!be) {
        var Me;
        const {
          module: Ke
        } = He;
        be = ee.createRenderPipeline({
          label: `placeholder ${ye}`,
          layout: ee.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Ke,
            entryPoint: "v"
          },
          fragment: {
            module: Ke,
            entryPoint: "f",
            targets: [{
              format: null !== (Me = ie._colorFormat) && void 0 !== Me ? Me : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: ie._depthStencilFormat ? {
            format: ie._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: ie._sampleCount
          }
        }), He.pipelines.set(ye, be)
      }
      return be
    }

    function Ai(ee, ie, He) {
      const ye = ie.eye,
        be = ie.viewMatrix;
      ee[0] = ye[0] + be[2] * He, ee[1] = ye[1] + be[6] * He, ee[2] = ye[2] + be[10] * He
    }
    var Yi = He(38795),
      Vi = He(44791),
      ai = He(38045);
    const ci = Math.PI,
      xi = ci / 1.95,
      Li = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Ci = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((ee => {
        let [ie, He] = ee;
        return .434 * ci * Math.pow(2 * ci / ie, 2) * He
      }));

    function vi(ee, ie, He) {
      const {
        up: ye,
        mieDirectionalG: be
      } = ee, Me = 1 - li(1 - Math.exp(ie[1] / 45e4), 0, 1), Ke = ee.rayleigh - (1 - Me), Ue = Math.hypot(ie[0], ie[1], ie[2]), Fe = Ue > 0 ? 1 / Ue : 0, Je = He.sunDir;
      for (let qe = 0; qe < 3; qe++) Je[qe] = ie[qe] * Fe;
      const oe = Je[0] * ye[0] + Je[1] * ye[1] + Je[2] * ye[2],
        Re = 1e3 * Math.max(0, 1 - Math.exp(-(xi - Math.acos(li(oe, -1, 1))) / 1.5));
      He.sunE = Re;
      const ke = .2 * ee.turbidity * 1e-17 * ee.mieCoefficient;
      for (let qe = 0; qe < 3; qe++) {
        const ee = Li[qe] * Ke,
          ie = Ci[qe] * ke,
          ye = Re / (ee + ie);
        He.inScatterR[qe] = ee * ye, He.inScatterM[qe] = ie * ye, He.extinctionBeta[qe] = 8400 * ee + 1250 * ie
      }
      return He.sunsetMix = li(Math.pow(1 - oe, 5), 0, 1), He.sunDiscE = 19e3 * Re, He.mieScale = (1 - be * be) / (4 * ci), He.mieBase = 1 + be * be, He.mieSlope = 2 * be, He
    }
    const ui = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const mi = 1 / function(ee) {
      const {
        A: ie,
        B: He,
        C: ye,
        D: be,
        E: Me,
        F: Ke
      } = ui;
      return (ee * (ie * ee + ye * He) + be * Me) / (ee * (ie * ee + He) + be * Ke) - Me / Ke
    }(1e3);

    function li(ee, ie, He) {
      return Math.min(Math.max(ee, ie), He)
    }
    const Si = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function ni(ee, ie) {
      const He = new Map(ie),
        ye = [],
        be = [],
        Me = () => 0 === be.length || be[be.length - 1].active;
      let Ke = null;
      const Ue = () => {
        const ee = [...He].filter((ee => {
            let [, ie] = ee;
            return !0 !== ie
          })),
          ie = ee.map((ee => {
            let [ie] = ee;
            return ie
          })).join("|");
        Ke = ee.length ? new RegExp(`\\b(${ie})\\b`, "g") : null
      };
      Ue();
      for (const Fe of ee.split("\n")) {
        const ee = Si.exec(Fe);
        if (!ee) {
          Me() && ye.push(Ke ? ji(Fe, Ke, He) : Fe);
          continue
        }
        const ie = ee[1],
          Je = ee[2].trim();
        if ("ifdef" === ie || "ifndef" === ie || "if" === ie) {
          const ee = Me(),
            ye = "if" === ie ? si(Je, He) : He.has(Je) === ("ifdef" === ie);
          be.push({
            active: ee && ye,
            parentActive: ee,
            taken: ye
          })
        } else if ("elif" === ie || "else" === ie) {
          const ee = be[be.length - 1];
          if (!ee) throw new Error(`#${ie} without #if`);
          const ye = !ee.taken && ("else" === ie || si(Je, He));
          ee.active = ee.parentActive && ye, ee.taken = ee.taken || ye
        } else if ("endif" === ie) {
          if (!be.pop()) throw new Error("#endif without #if")
        } else if (Me()) {
          const [ee, ...ye] = Je.split(/\s+/);
          "undef" === ie ? He.delete(ee) : He.set(ee, !ye.length || ye.join(" ")), Ue()
        }
      }
      if (be.length) throw new Error("Unterminated #if");
      return ye.join("\n")
    }

    function ji(ee, ie, He) {
      return ee.replace(ie, (ee => {
        const ie = He.get(ee);
        return "string" === typeof ie ? ie : ee
      }))
    }

    function si(ee, ie) {
      var He;
      const ye = null !== (He = ee.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== He ? He : [];
      let be = 0;
      const Me = () => ye[be],
        Ke = () => ye[be++],
        Ue = ee => {
          const He = /^\d/.test(ee) ? ee : ie.get(ee);
          return "string" === typeof He ? parseInt(He) : Number.NaN
        },
        Fe = () => {
          const ee = Ke();
          if ("!" === ee) return !Fe();
          if ("(" === ee) {
            const ee = oe();
            return Ke(), ee
          }
          if ("defined" === ee) {
            const ee = "(" === Me();
            ee && Ke();
            const He = Ke();
            return ee && Ke(), ie.has(He)
          }
          const He = Me();
          if ("==" === He || "!=" === He || ">" === He || "<" === He || ">=" === He || "<=" === He) {
            Ke();
            const ie = Ue(ee),
              ye = Ue(Ke());
            if (Number.isNaN(ie) || Number.isNaN(ye)) return !1;
            switch (He) {
              case "==":
                return ie === ye;
              case "!=":
                return ie !== ye;
              case ">":
                return ie > ye;
              case "<":
                return ie < ye;
              case ">=":
                return ie >= ye;
              default:
                return ie <= ye
            }
          }
          return ie.has(ee)
        },
        Je = () => {
          let ee = Fe();
          for (;
            "&&" === Me();) {
            Ke();
            const ie = Fe();
            ee = ee && ie
          }
          return ee
        },
        oe = () => {
          let ee = Je();
          for (;
            "||" === Me();) {
            Ke();
            const ie = Je();
            ee = ee || ie
          }
          return ee
        },
        Re = oe();
      if (be !== ye.length) throw new Error(`Cannot evaluate #if ${ee}`);
      return Re
    }
    var Ii = He(38133),
      Ni = He(38231),
      Gi = He(38236),
      ri = He(41807),
      Qi = He(39546);
    const eH = 32,
      iH = [10, 3, 10],
      HH = [21, 7, 21],
      yH = HH[0] * HH[1] * HH[2],
      bH = 0,
      MH = 1,
      KH = 2,
      UH = 3,
      FH = 64,
      JH = 512,
      oH = 4 * yH,
      RH = 1536,
      kH = oH + yH * RH,
      qH = 1073741824,
      fH = kH + 1;

    function TH(ee, ie) {
      const He = ee % ie;
      return He < 0 ? He + ie : He
    }

    function pH(ee, ie, He) {
      return ye = TH(ee, HH[0]), be = TH(ie, HH[1]), Me = TH(He, HH[2]), ye + HH[0] * (be + HH[1] * Me);
      var ye, be, Me
    }

    function XH(ee, ie, He) {
      return ee + 8 * (ie + 8 * He)
    }

    function zH(ee, ie, He) {
      return ee + 4 * (ie + 4 * He)
    }
    const BH = 65535,
      EH = 0,
      gH = 1,
      OH = 2,
      dH = 3;

    function WH(ee) {
      return Math.ceil(ee * ee / 32)
    }
    const tH = 8192,
      ZH = 1 << 18,
      wH = 65536,
      DH = 294912,
      PH = 128,
      AH = 4096,
      YH = 16,
      VH = 16385,
      aH = 81921,
      cH = 147457,
      xH = 4194304;
    const LH = [0, 0, 0],
      CH = [0, 0, 0];

    function vH(ee, ie, He, ye) {
      ! function(ee, ie, He) {
        const [ye, be, Me] = [ee[0], ee[1], ee[2]];
        let Ke, Ue, Fe;
        Math.abs(be) < .99 ? (Ke = Me, Ue = 0, Fe = -ye) : (Ke = -be, Ue = ye, Fe = 0);
        const Je = Math.hypot(Ke, Ue, Fe);
        ie[0] = Ke / Je, ie[1] = Ue / Je, ie[2] = Fe / Je, He[0] = be * ie[2] - Me * ie[1], He[1] = Me * ie[0] - ye * ie[2], He[2] = ye * ie[1] - be * ie[0]
      }(ye, LH, CH);
      const be = 1 / 32;
      for (const [Me, Ke] of [
          [0, LH],
          [4, CH]
        ]) {
        for (let He = 0; He < 3; He++) ee[ie + Me + He] = Ke[He] * be;
        ee[ie + Me + 3] = -(Ke[0] * He[0] + Ke[1] * He[1] + Ke[2] * He[2]) * be
      }
    }
    class uH {
      constructor() {
        this.words = new Uint32Array(cH), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      gR(ee, ie) {
        this.parts = 0, this.refs = 0, this.view = ee, this.viewAt = ie;
        const He = ee[ie + 1] * ee[ie + 6] - ee[ie + 2] * ee[ie + 5],
          ye = ee[ie + 2] * ee[ie + 4] - ee[ie] * ee[ie + 6],
          be = ee[ie] * ee[ie + 5] - ee[ie + 1] * ee[ie + 4],
          Me = Math.hypot(He, ye, be) || 1;
        this.light[0] = He / Me, this.light[1] = ye / Me, this.light[2] = be / Me
      }
      add(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= AH || ! function(ee, ie, He) {
            const ye = ee[ie],
              be = ee[ie + 1],
              Me = ee[ie + 2],
              Ke = ee[ie + 3],
              Ue = ee[ie + 4],
              Fe = ee[ie + 5],
              Je = ee[ie + 6],
              oe = ee[ie + 7],
              Re = ee[ie + 8],
              ke = ee[ie + 9],
              qe = ee[ie + 10],
              fe = ee[ie + 11],
              Te = ee[ie + 12],
              pe = ee[ie + 13],
              Xe = ee[ie + 14],
              ze = ee[ie + 15],
              Be = ye * Fe - be * Ue,
              Ee = ye * Je - Me * Ue,
              ge = ye * oe - Ke * Ue,
              Oe = be * Je - Me * Fe,
              de = be * oe - Ke * Fe,
              We = Me * oe - Ke * Je,
              te = Re * pe - ke * Te,
              Ze = Re * Xe - qe * Te,
              we = Re * ze - fe * Te,
              De = ke * Xe - qe * pe,
              Pe = ke * ze - fe * pe,
              Ae = qe * ze - fe * Xe,
              Ye = Be * Ae - Ee * Pe + ge * De + Oe * we - de * Ze + We * te;
            if (!(Math.abs(Ye) > 1e-12)) return !1;
            const Ve = 1 / Ye;
            return He[0] = (Fe * Ae - Je * Pe + oe * De) * Ve, He[1] = (Me * Pe - be * Ae - Ke * De) * Ve, He[2] = (pe * We - Xe * de + ze * Oe) * Ve, He[3] = (qe * de - ke * We - fe * Oe) * Ve, He[4] = (Je * we - Ue * Ae - oe * Ze) * Ve, He[5] = (ye * Ae - Me * we + Ke * Ze) * Ve, He[6] = (Xe * ge - Te * We - ze * Ee) * Ve, He[7] = (Re * We - qe * ge + fe * Ee) * Ve, He[8] = (Ue * Pe - Fe * we + oe * te) * Ve, He[9] = (be * we - ye * Pe - Ke * te) * Ve, He[10] = (Te * de - pe * ge + ze * Be) * Ve, He[11] = (ke * ge - Re * de - fe * Be) * Ve, He[12] = (Fe * Ze - Ue * De - Je * te) * Ve, He[13] = (ye * De - be * Ze + Me * te) * Ve, He[14] = (pe * Ee - Te * Oe - Xe * Be) * Ve, He[15] = (Re * Oe - ke * Ee + qe * Be) * Ve, !0
          }(ie, He, this.inverse)) return;
        const {
          view: ye,
          viewAt: be
        } = this, Me = He;
        let Ke = 1 / 0,
          Ue = 1 / 0,
          Fe = -1 / 0,
          Je = -1 / 0,
          oe = -1 / 0;
        const [Re, ke, qe] = this.light;
        for (let ge = 0; ge < 8; ge++) {
          const He = 1 & ge ? ee.hi[0] : ee.lo[0],
            fe = 2 & ge ? ee.hi[1] : ee.lo[1],
            Te = 4 & ge ? ee.hi[2] : ee.lo[2],
            pe = He * ie[Me] + fe * ie[Me + 4] + Te * ie[Me + 8] + ie[Me + 12],
            Xe = He * ie[Me + 1] + fe * ie[Me + 5] + Te * ie[Me + 9] + ie[Me + 13],
            ze = He * ie[Me + 2] + fe * ie[Me + 6] + Te * ie[Me + 10] + ie[Me + 14],
            Be = ye[be] * pe + ye[be + 1] * Xe + ye[be + 2] * ze + ye[be + 3],
            Ee = ye[be + 4] * pe + ye[be + 5] * Xe + ye[be + 6] * ze + ye[be + 7];
          Ke = Math.min(Ke, Be), Ue = Math.min(Ue, Ee), Fe = Math.max(Fe, Be), Je = Math.max(Je, Ee), oe = Math.max(oe, Re * pe + ke * Xe + qe * ze)
        }
        if (Fe < -1 || Je < -1 || Ke >= 1 || Ue >= 1) return;
        const fe = this.parts++,
          Te = this.rects;
        Te[4 * fe] = mH(Ke), Te[4 * fe + 1] = mH(Ue), Te[4 * fe + 2] = mH(Fe), Te[4 * fe + 3] = mH(Je);
        const pe = this.inverse,
          {
            cell: Xe,
            dims: ze,
            lo: Be
          } = ee,
          Ee = aH + fe * YH;
        for (let ge = 0; ge < 3; ge++) this.floats[Ee + 4 * ge] = pe[ge] / Xe, this.floats[Ee + 4 * ge + 1] = pe[4 + ge] / Xe, this.floats[Ee + 4 * ge + 2] = pe[8 + ge] / Xe, this.floats[Ee + 4 * ge + 3] = (pe[12 + ge] - Be[ge]) / Xe;
        this.words[Ee + 12] = ee.at, this.floats[Ee + 13] = oe + .001 * (1 + Math.abs(oe)), this.words[Ee + 14] = ze[0] | ze[1] << 8 | ze[2] << 16
      }
      finish() {
        const ee = PH,
          {
            counts: ie,
            rects: He,
            words: ye
          } = this;
        ie.fill(0);
        let be = 0,
          Me = 0;
        for (; Me < this.parts; Me++) {
          const ye = 4 * Me,
            Ke = (He[ye + 2] - He[ye] + 1) * (He[ye + 3] - He[ye + 1] + 1);
          if (be + Ke > 65536) break;
          be += Ke;
          for (let be = He[ye + 1]; be <= He[ye + 3]; be++)
            for (let Me = He[ye]; Me <= He[ye + 2]; Me++) ie[be * ee + Me]++
        }
        let Ke = 0;
        for (let Fe = 0; Fe < 16384; Fe++) ye[Fe] = Ke, Ke += ie[Fe], ie[Fe] = ye[Fe];
        ye[16384] = Ke;
        for (let Fe = 0; Fe < Me; Fe++) {
          const be = 4 * Fe;
          for (let Me = He[be + 1]; Me <= He[be + 3]; Me++)
            for (let Ke = He[be]; Ke <= He[be + 2]; Ke++) ye[VH + ie[Me * ee + Ke]++] = Fe
        }
        const Ue = this.floats;
        for (let Fe = 0; Fe < 16384; Fe++) {
          const ee = VH + ye[Fe],
            ie = ee + Math.min(ye[Fe + 1] - ye[Fe], 64);
          for (let He = ee + 1; He < ie; He++) {
            const ie = ye[He],
              be = Ue[81934 + ie * YH];
            let Me = He - 1;
            for (; Me >= ee && Ue[81934 + ye[Me] * YH] < be; Me--) ye[Me + 1] = ye[Me];
            ye[Me + 1] = ie
          }
        }
        this.refs = be
      }
    }

    function mH(ee) {
      return Math.min(127, Math.max(0, Math.floor((.5 * ee + .5) * PH)))
    }

    function lH(ee, ie, He, ye, be) {
      for (let Me = 0; Me < 4; Me++)
        for (let Ke = 0; Ke < 4; Ke++) be[4 * Me + Ke] = ee[ie + 4 * Me] * He[ye + Ke] + ee[ie + 4 * Me + 1] * He[ye + 4 + Ke] + ee[ie + 4 * Me + 2] * He[ye + 8 + Ke] + ee[ie + 4 * Me + 3] * He[ye + 12 + Ke]
    }

    function SH(ee, ie, He, ye, be) {
      const Me = ee[0] - ie,
        Ke = ee[1] - He,
        Ue = ee[2] - ye,
        Fe = ee[3] - ie,
        Je = ee[4] - He,
        oe = ee[5] - ye,
        Re = ee[6] - ie,
        ke = ee[7] - He,
        qe = ee[8] - ye;
      if (Math.min(Me, Fe, Re) > be || Math.max(Me, Fe, Re) < -be) return !1;
      if (Math.min(Ke, Je, ke) > be || Math.max(Ke, Je, ke) < -be) return !1;
      if (Math.min(Ue, oe, qe) > be || Math.max(Ue, oe, qe) < -be) return !1;
      const fe = Fe - Me,
        Te = Je - Ke,
        pe = oe - Ue,
        Xe = Re - Fe,
        ze = ke - Je,
        Be = qe - oe,
        Ee = Te * Be - pe * ze,
        ge = pe * Xe - fe * Be,
        Oe = fe * ze - Te * Xe;
      if (Math.abs(Ee * Me + ge * Ke + Oe * Ue) > be * (Math.abs(Ee) + Math.abs(ge) + Math.abs(Oe))) return !1;
      const de = [fe, Te, pe, Xe, ze, Be, Me - Re, Ke - ke, Ue - qe];
      for (let We = 0; We < 3; We++) {
        const ee = de[3 * We],
          ie = de[3 * We + 1],
          He = de[3 * We + 2];
        for (let ye = 0; ye < 3; ye++) {
          const fe = 0 === ye ? 0 : 1 === ye ? He : -ie,
            Te = 0 === ye ? -He : 1 === ye ? 0 : ee,
            pe = 0 === ye ? ie : 1 === ye ? -ee : 0,
            Xe = fe * Me + Te * Ke + pe * Ue,
            ze = fe * Fe + Te * Je + pe * oe,
            Be = fe * Re + Te * ke + pe * qe,
            Ee = be * (Math.abs(fe) + Math.abs(Te) + Math.abs(pe));
          if (Math.min(Xe, ze, Be) > Ee || Math.max(Xe, ze, Be) < -Ee) return !1
        }
      }
      return !0
    }
    const nH = new Float32Array(1);
    new Uint32Array(nH.buffer);
    var jH = He(39549);

    function sH(ee) {
      const [ie, He, ye] = jH.p;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${ee.group}) @binding(${ee.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${ie-1}, ${He-1}, ${ye-1});\n}\n`
    }

    function IH(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [be, Me, Ke] = HH, [Ue, Fe, Je] = iH, oe = Math.log2(eH), Re = ye ? "var<private> bloxdSpCrossed: bool;\n" : "", ke = ye ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${ee.group}) @binding(${ee.Uq}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${ee.group}) @binding(${ee.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${He?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Re}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${gH}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${OH}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${He?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${dH}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${be}, ${Me}, ${Ke});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${be} * (s.y + ${Me} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Ue}, ${Fe}, ${Je}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${oe}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${UH}u) {\n\t\treturn named && state == ${KH}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${oH}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${kH}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${ie?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${ie?`\t\tif (exits && step > 0 && step % ${GH} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${oe}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${bH}u || kind == ${MH}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${KH}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${oH}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${ke}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const hH = {
      group: 0,
      uniform: 0,
      Uq: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function NH() {
      const ee = hH;
      return `${sH(ee)}${IH(ee,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${jH.e}>,\n}\n@group(${ee.group}) @binding(${ee.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${ee.group}) @binding(${ee.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${jH.m})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${jH.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${jH.f}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const GH = 2;
    const rH = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function QH(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const ye = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${ie.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        be = "trace" === He || "lit" === He,
        Me = "maskEdge" === He ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Ke = be ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${ie.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${ie.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===He?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Me};\n`;
      return `${ye}${ee.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${be?function(){const[ee,ie,He]=jH.p;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${ee}.0, ${ie}.0, ${He}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Ke}}\n`:""}${ee.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${ie.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${ie.renderOffset});\n}\n`:""}`
    }
    const ey = "bloxdSpOwnTexture";

    function iy(ee) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${ee.texture}) - 1u)))`
    }
    const Hy = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Yi.e.map((ee=>{let[ie,He]=ee;return`\tbloxdSpOut.${ie} = (bloxdSpWord & ${He}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function yy(ee) {
      return `bloxdSpFlags(${ee})`
    }
    const by = `${ri.k}.eyePosition`;

    function My(ee, ie, He, ye, be) {
      const Me = ee.indexOf(ie);
      if (Me < 0 || ee.indexOf(ie, Me + 1) >= 0) throw new Error(`Lite's ${be} program changed at the shader pack ${ye} hook: ${Me<0?"no":"more than one"} anchor (lite/${be}ShaderPack.ts)`);
      return ee.slice(0, Me) + He + ee.slice(Me + ie.length)
    }

    function Ky(ee) {
      return ee.sunShadow || ee.airShadow
    }

    function Uy(ee, ie) {
      return ie && Ky(ee)
    }
    const Fy = {
      group: ri.f,
      ...ri.q
    };

    function Jy(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Ky(ee)) return "";
      if (ie) {
        const ie = Fy,
          be = "trace" === He || "lit" === He;
        let Me = "";
        ee.sunShadow && (Me = be ? `${IH(ie,!0,"lit"===He)}${ye=ie,`@group(${ye.group}) @binding(${ye.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${ye.group}) @binding(${ye.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(ee, ie, He) {
          const ye = `@group(${ee}) @binding(${ie}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return He ? `${ye}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${rH}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((ee=>`\t{\n\t\tlet o = vec2i(${ee});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : ye
        }(ie.group, ri.s, "maskEdge" === He));
        const Ke = {
          shadowDirection: `${ri.k}.shadowDirection`,
          renderOffset: `${ri.k}.renderOffset`,
          eyePosition: `${ri.k}.eyePosition`
        };
        return `${sH(ie)}${Me}${function(ee){const[ie,He,ye]=jH.p;return`@group(${ee.group}) @binding(${ee.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${ee.group}) @binding(${ee.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${ie}.0, ${He}.0, ${ye}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(ie)}${QH(ee,Ke,He)}`
      }
      var ye;
      return `${ee.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${ee.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function oy(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!ie) return "";
      const Me = (Ke = "fragmentInputs.vPositionW", Ue = ee.sunShadow ? {
        normal: He,
        flags: ye
      } : null, `\n\tbloxdSpShadowPosition = ${Ke};\n${Ue?`\tbloxdSpShadowNormal = normalize(${Ue.normal});\n\tbloxdSpShadowEmissive = (${Ue.flags} & ${Yi.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Ue.flags} & ${Yi.h}u) != 0u;\n`:""}`);
      var Ke, Ue;
      return ee.sunShadow && ("mask" === be || "maskEdge" === be) ? `${Me}${Fe="fragmentInputs.position",Je="maskEdge"===be,`\n\tbloxdSpShadowPixel = vec2i(${Fe}.xy);\n${Je?`\tbloxdSpShadowZ = ${Fe}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Fe}.z), dpdy(${Fe}.z));\n`:""}`}` : Me;
      var Fe, Je
    }
    const Ry = "bloxdSpTextureRotation",
      ky = "bloxdSpTextureLayers",
      qy = `@group(${ri.f}) @binding(${ri.u}) var<storage, read> ${ky}: array<u32>;\n`;

    function fy(ee) {
      return `\tvertexOutputs.vPackTexture = ${ky}[min(u32(${ee}), arrayLength(&${ky}) - 1u)];\n`
    }

    function Ty(ee) {
      return void 0 !== ee.uv
    }

    function py(ee) {
      if (!ee) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Ty(ee)) return function(ee) {
        const {
          texture: ie,
          cells: He,
          layers: ye
        } = ee, be = `textureDimensions(${ie}, bloxdSpLevel)`, Me = He ? `max(vec2u(vec2f(${be}) / ${He}), vec2u(1u))` : be, Ke = He ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Me};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${He}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${He}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${ie}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${be} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Me};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${ie}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Ue;
        if (He)
          if (1 === ye.length) Ue = `\treturn bloxdSpOwnTexel(${ye[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const ee = ye.length - 1;
            Ue = `\tvar bloxdSpColour = bloxdSpOwnTexel(${ye[ee]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let ie = ee - 1; ie >= 0; ie--) Ue += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${ye[ie]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Ue += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Ue = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${ee.id?`var<private> ${ey}: u32;\n`:""}${Ke}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${iy(ee)};\n\treturn ${Me};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${ee.id?ey:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${iy(ee)};\n${Ue}}\n`
      }(ee);
      const ie = ee,
        He = ee => {
          const He = ee > 0 ? `bloxdSpLayer - ${ie.layers*ee}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${ee}, ${ie.sampler}, bloxdSpTurned, ${He}, round(bloxdSpMipLevel));`
        };
      let ye = "";
      for (let Me = 0; Me < ie.count - 1; Me++) ye += `\tif (bloxdSpLayer < ${ie.layers*(Me+1)}u) {\n\t\t${He(Me)}\n\t}\n`;
      const be = ie.frame ? `${ie.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Ry}: u32;\n${qy}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Ry} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Ry} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Ry} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${be}${ye}\t${He(ie.count-1)}\n}\n`
    }

    function Xy(ee, ie, He) {
      return !!ee.surface && "bloxdDefaultSurface" !== ee.surface && function(ee, ie) {
        return "liquid" === ie || !ee
      }(ie, He)
    }

    function zy(ee, ie) {
      return ee.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${ie.vertexLocalPosition}, ${yy(ie.vertexFlags)});\n\t\tlet bloxdSpVertex = ${ee.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function By(ee, ie, He, ye, be) {
      if (!ee.surface) return "";
      const Me = (ee, ie) => `\n\tlet bloxdSpTexelUV = ${ee};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${ie}) - 1u));`;
      let Ke = "",
        Ue = "0u, 0u, vec2f(0.0), 0.0";
      const Fe = ye && Ty(ye) ? ye : null,
        Je = ye && !Ty(ye) ? ye : null;
      if (Fe) {
        Ke = `${Fe.id?`\n\tlet bloxdSpTexture = ${Fe.id};\n\t${ey} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Fe.uv};${Me(function(ee,ie){var He;return`${null!==(He=ee.levelUv)&&void 0!==He?He:ee.cells?`${ie} / ${ee.cells}`:ie} * vec2f(textureDimensions(${ee.texture}))`}(Fe,"bloxdSpUv"),Fe.texture)}`, Ue = (Fe.id ? `${ey}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Je && (Ke = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Ry} = bloxdSpTexture >> 16u;${Me(`fragmentInputs.vMainUV1 * ${(0,Ii.mb)(Je.width)}`,"textureAtlas0")}`, Ue = `bloxdSpTexture & 0xffffu, ${Ry}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const oe = be.overlayColour,
        Re = oe ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        ke = "bloxdDefaultSurface" !== ee.surface || oe ? `\n\tbaseColor = vec4f(${Re}, baseColor.a);` : "",
        qe = Xy(ee, ie, He) ? `\n\t${be.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Ke}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${be.alpha}, ${be.enchantTier}, ${be.enchantColour}, ${be.enchantSpeed}, ${null!==oe&&void 0!==oe?oe:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${be.normal}, ${be.localPosition}, ${yy(be.flags)}, ${Ue});\n\tlet bloxdSpSurface = ${ee.surface}(bloxdSpSurfaceIn);${ke}${qe}\n`
    }
    const Ey = "bloxdSpLightIn";

    function gy(ee, ie, He, ye) {
      if (!ee.light) return "";
      const be = ie ? `${Ii.k}.rgb, ${Ii.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Ii.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Me,
          diffuse: Ke,
          emissive: Ue,
          ambient: Fe,
          fogColour: Je,
          fogAlpha: oe,
          normal: Re
        } = ye;
      return `\tvar ${Ey} = BloxdLightIn(vec3f(0.0), ${He?Me:"0.0"}, ${Ke}, ${Ue}, ${Fe}, ${be}, ${Je}, ${oe}, fragmentInputs.vPositionW, ${Re}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Ey}.litColour = bloxdLitColour(bloxdSpSurface, ${Ey});\n`
    }

    function Oy(ee) {
      return ee.light ? `\n\t{\n\t\tlet bloxdSpLight = ${ee.light}(bloxdSpSurface, ${Ey});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const dy = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      Wy = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      ty = "\treturn color;\n}",
      Zy = {
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
    const wy = Object.freeze({});

    function Dy(ee) {
      var ie;
      return !(null === (ie = (0, Qi.c)(ee)) || void 0 === ie || !ie.sceneDepth)
    }

    function Py(ee) {
      const ie = (0, Qi.c)(ee);
      return !!ie && Xy(ie.hooks, ie.strict, ie.program)
    }

    function Ay(ee, ie, He, ye) {
      return My(ee, ie, He, ye, "terrain")
    }

    function Yy(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Me = function(ee) {
          return (0, Qi.b)(ee.packVariant, ee.liquid ? "liquid" : "terrain")
        }(ee),
        {
          hooks: Ke
        } = Me,
        Ue = Uy(Me, ye),
        Fe = "edge" === be ? "maskEdge" : "plain" === be ? "mask" : "trace",
        Je = zy(Ke, Zy);
      Je && (ie = Ay(ie, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Je}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const oe = "atlas" === ee.texture ? {
          count: ee.atlasCount,
          layers: ee.atlasLayers,
          width: ee.W4,
          sampler: "atlasSampler",
          frame: ee.animated ? He : null
        } : null,
        Re = `${Me.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${oy(Me,Ue,Zy.normal,Zy.flags,Fe)}${By(Ke,Me.strict,Me.program,oe,Zy)}`;
      Re && (ie = Ay(ie, dy, `${dy.slice(0,-1)}${Re}`, "surface"));
      const ke = Oy(Ke);
      return ke && (ie = Ay(ie, Wy, `${gy(Ke,ee.lighting,ee.dirLightCount>0,Zy)}${Wy}`, "light input"), ie = Ay(ie, ty, `${ke.slice(1)}${ty}`, "light")), `${(0,ri.z)()}${Me.sceneDepth?`@group(${ri.f}) @binding(${ri.p}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${by};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Jy(Me,Ue,Fe)}${py(oe)}${Hy}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Me.code}${ie}`
    }
    const Vy = Oe.b.WGSL;

    function ay(ee) {
      return void 0 !== ee.packVariant
    }
    const cy = {
        uMe: 0,
        mMe: 4,
        lMe: 8,
        SMe: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      xy = cy.aoLevels + 4,
      Ly = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      Cy = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      vy = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      uy = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      my = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      ly = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Sy = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      ny = 0,
      jy = 3,
      sy = 4,
      Iy = 5,
      hy = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Ni.d}, ${Ni.d}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Ni.d}, ${Ni.d}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      Ny = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((ee=>Gi.b>>ee&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const Gy = {
      YR: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: ee => `animDataPerTex[${ee}]`
    };

    function ry(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gy;
      return `\n\tlet atlasIdxIn = ${ee};\n\tlet animTick = ${He.YR};\n\tlet animTickStride = ${He.stride};\n\tlet numAnimTextures = ${He.count};\n\t${(0,de.g)(Oe.b.WGSL,He.perTexture)}\n\t${ie}animLayer;\n`
    }

    function Qy(ee) {
      const ie = (ie, He) => {
        const ye = ie > 0 ? `fragmentInputs.texAtlasIndex - ${ee.atlasLayers.toFixed(1)} * ${ie.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${He?"textureSampleLevel":"textureSample"}(textureAtlas${ie}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${ye}))${He?", atlasLod":""})`
      };
      if (1 === ee.atlasCount) return `baseColor = ${ie(0,!1)};`;
      let He = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Ii.mb)(ee.W4)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let ye = 0; ye < ee.atlasCount; ye++) {
        const be = ee.atlasLayers * (ye + 1) - .5;
        He += `${ye>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Ii.mb)(be)}) {\n\t\tbaseColor = ${ie(ye,!0)};\n\t}`
      }
      return He
    }

    function eb(ee) {
      return `terrain-${ee.texture}${"atlas"===ee.texture?ee.atlasCount:""}${ee.animated?"-anim":""}${ee.alphaTest?"-test":""}${ee.lighting?"-lit":""}-dir${ee.dirLightCount}${ee.packed?"-packed":""}${ay(ee)?`-sp${ee.packVariant}`:""}${ee.liquid?"-liquid":""}${ee.resting?"-rest":""}`
    }

    function ib(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const ye = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const He = "none" !== ee.texture,
          ye = "atlas" === ee.texture,
          be = ee.dirLightCount > 0,
          Me = ay(ee);
        if (ee.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${ee.dirLightCount}`);
        let Ke = 1,
          Ue = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (ye) {
          ee.animated && (Ue += `@group(2) @binding(${Ke++}) var<storage, read> animDataPerTex: array<f32>;\n`), Ue += `@group(2) @binding(${Ke++}) var atlasSampler: sampler;\n`;
          for (let ie = 0; ie < ee.atlasCount; ie++) Ue += `@group(2) @binding(${Ke++}) var textureAtlas${ie}: texture_2d_array<f32>;\n`
        } else "single" === ee.texture && (Ue += `@group(2) @binding(${Ke++}) var diffuseSamplerSampler: sampler;\n`, Ue += `@group(2) @binding(${Ke++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Fe = function(ee) {
            const ie = Sy,
              He = "none" !== ee.texture,
              ye = "atlas" === ee.texture,
              be = ay(ee);
            return ee.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${He?"uv: vec2f,":""}\n\t${ye?"texAtlasIndices: f32,":""}\n\t${ee.lighting?"aPackedLightLevels: f32,":""}\n\t${be?"blockFlagWords: vec2u,":""}\n}\n${hy}\n${Ny}\n${"single"===ee.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${He?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===ee.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${ye?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${ee.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${be?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${ie.position}) position: vec3f,\n\t@location(${ie.normal}) normal: vec4f,\n\t@location(${ie.color}) color: vec4f,\n\t${He?`@location(${ie.uv}) uv: vec2f,`:""}\n\t${ee.lighting?`@location(${ie.packedLight}) aPackedLightLevels: f32,`:""}\n\t${be?`@location(${ie.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(ee),
          Je = `\n${uy}\n${Cy}\n${vy}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Ue}\n${Xi}\n${Fe.declarations}\nstruct Varyings {\n\t${"none"===ie?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${ee.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${be?"@location(5) vTerrainLambert: f32,":""}\n\t${He?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${ye?"@location(7) texAtlasIndex: f32,":""}\n\t${ee.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Me?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Me&&ye?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${ee.resting?"":(0,Ii.q)(Vy)}\n${ly}\n\n@vertex\nfn mainVertex(${Fe.parameter}) -> Varyings {\n\t${Fe.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Me?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Yi.d.placed}u;`:""}\n\t${Me&&ye?fy("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${ee.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${He?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${ye?function(ee){return ee?ry("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(ee.animated):""}\n\t${"single"===ee.texture&&ee.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Ii._)(Vy)}\n\t${(0,Ii.E)(Vy,ee.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${ee.resting?"":my}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${ye?Qy(ee):""}\n\t${"single"===ee.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${He?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${ee.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${be?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Ti}));\n\t${ay(ee)?(0,Ii.jb)(Oe.b.WGSL):(0,Ii.O)(Vy)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          oe = new Set;
        ee.lighting && oe.add("BLOXD_LIGHTING");
        be && oe.add("BLOXD_TERRAIN_DIRECTIONAL");
        return ni(Je, new Map([...oe].map((ee => [ee, !0]))))
      }(ee, He);
      if (!ay(ee)) return ye;
      const be = Yy(ee, ye, ry, ie, He);
      return "none" === He ? be : `${be}${function(ee){const ie="none"!==ee.texture&&ee.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${ee.resting?"":my}\n\t${ee.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${ie&&"atlas"===ee.texture?Qy(ee):""}\n\t${ie&&"single"===ee.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ie?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Yi.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(ee)}`
    }
    const Hb = new Map([
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

    function yb(ee, ie) {
      const He = new Map;
      let ye = 0;
      const be = [],
        Me = [],
        Ke = [];
      for (const Je of ie) {
        var Ue, Fe;
        const ie = null !== (Ue = Je.type.trim().split(/\s+/).pop()) && void 0 !== Ue ? Ue : Je.type,
          oe = Hb.get(ie);
        if (!oe) throw new Error(`Lite: no uniform layout for ${Je.name}: ${Je.type}`);
        const Re = null !== (Fe = Je.arraySize) && void 0 !== Fe ? Fe : 0,
          ke = Re ? 4 : oe.align;
        ye = Math.ceil(ye / ke) * ke;
        const qe = Re ? 4 * Math.ceil(oe.floats / 4) : oe.floats;
        if (He.set(Je.name, {
            offset: ye,
            floats: oe.floats,
            arraySize: Re,
            stride: qe
          }), Re && oe.floats <= 2) {
          const ie = `${ee}_${Ke.length}_strided`;
          Me.push(`struct ${ie} {\n\t@size(16) el: ${oe.wgsl},\n}`), Ke.push(Je.name), be.push(`\t@align(16) ${Je.name}: array<${ie}, ${Re}>,`)
        } else Re ? be.push(`\t@align(16) ${Je.name}: array<${oe.wgsl}, ${Re}>,`) : be.push(`\t${Je.name}: ${oe.wgsl},`);
        ye += Re ? qe * Re : oe.floats
      }
      return {
        slots: He,
        floats: Math.max(4, 4 * Math.ceil(ye / 4)),
        wgsl: `${Me.join("\n")}\nstruct ${ee} {\n${be.join("\n")}\n}\n`,
        stridedArrays: Ke
      }
    }
    const bb = [{
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
      Mb = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      Kb = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Ub(ee, ie) {
      return `#if defined(${ee}) && ${ee}DIRECTUV == 0\nvarying v${ie}UV: vec2f;\n#endif`
    }

    function Fb(ee, ie, He) {
      return `#if defined(${ee}) && ${ee}DIRECTUV == 0\nif (uniforms.v${ie}Infos.x==0.)\n{vertexOutputs.v${ie}UV= (uniforms.${He}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${ie}UV= (uniforms.${He}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Jb(ee, ie, He) {
      return `#ifdef ${ee}\n#if ${ee}DIRECTUV == 1\n#define v${ie}UV vMainUV1\n#elif ${ee}DIRECTUV == 2\n#define v${ie}UV vMainUV2\n#else\nvarying v${ie}UV: vec2f;\n#endif\nvar ${He}SamplerSampler: sampler;\nvar ${He}Sampler: texture_2d<f32>;\n#endif`
    }
    const ob = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Rb = 256,
      kb = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      qb = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      fb = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      Tb = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      pb = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      Xb = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      zb = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Bb = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${qb}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Ub("OPACITY","Opacity")}\n${Ub("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${zb}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${fb}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Fb("OPACITY","Opacity","opacity")}\n${Fb("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Tb}\n#define CUSTOM_VERTEX_MAIN_END\n${pb}\n}\n`;
    const Eb = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Jb("OPACITY","Opacity","opacity")}\n${Jb("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${zb}\n${Xb}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((ee,ie)=>function(ee){const ie=`
    frame.lights[LITE_LIGHT$ {
        ee
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      ee
    }\
    nvar diffuse$ {
      ee
    }: vec4f = $ {
      ie
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      ee
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      ie
    }.vLightData, diffuse$ {
      ee
    }.rgb, $ {
      ie
    }.vLightSpecular.rgb, diffuse$ {
      ee
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(ie))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, gb = /^([gimus]+)!/, Ob = new Set;

    function db(ee) {
      Ob.has(ee) || (Ob.add(ee), console.warn(`Lite: no place for plugin code at ${ee} in the standard shader: it is left out`))
    }

    function Wb(ee, ie) {
      let He = ee;
      const ye = new Map;
      for (const [Me, Ke] of ie) {
        var be;
        ye.set(Me, `${null!==(be=ye.get(Me))&&void 0!==be?be:""}${Ke}\n`)
      }
      for (const [Me, Ke] of ye) {
        if (!Me.startsWith("!")) {
          const ee = `#define ${Me}`;
          if (!He.includes(ee)) {
            db(Me);
            continue
          }
          He = He.replace(ee, (() => `\n${Ke}\n${ee}`));
          continue
        }
        let ee = Me.substring(1),
          ie = "g";
        if (ee.startsWith("!")) ie = "", ee = ee.substring(1);
        else {
          const He = gb.exec(ee);
          He && (ie = He[1], ee = ee.substring(ie.length + 1))
        }
        const ye = new RegExp(ee, ie.includes("g") ? ie : `${ie}g`);
        let be = ye.exec(He);
        for (be || db(Me); be;) {
          const ee = be,
            ie = Ke.replace(/\$(\d+)/g, ((ie, He) => Number(He) < ee.length ? ee[Number(He)] : ""));
          He = He.substring(0, ee.index) + ie + He.substring(ee.index + ee[0].length), ye.lastIndex = ee.index + ie.length, be = ye.exec(He)
        }
      }
      return He
    }
    const tb = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Zb = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      wb = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Db(ee) {
      const ie = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let He = ee.replace(tb, ((ee, He, ye, be, Me, Ke) => ("attribute" === He ? ie.attributes.push({
        name: Me,
        type: Ke
      }) : void 0 === He ? ie.varyings.push({
        name: Me,
        type: Ke,
        interpolation: Ab(Ke, ye, be)
      }) : ie.uniforms.push({
        name: Me,
        type: Pb(Ke)
      }), "")));
      return He = He.replace(Zb, ((ee, He) => (ie.samplers.add(He), ""))), He = He.replace(wb, ((ee, He, ye) => (ie.textures.push({
        name: He,
        type: ye
      }), ""))), ie.body = He, ie
    }

    function Pb(ee) {
      const ie = ee.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        He = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(ie);
      if (!He) throw new Error(`Lite: unsupported uniform type ${ee}`);
      return He
    }

    function Ab(ee, ie, He) {
      return void 0 === ie && void 0 === He ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(ee.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === ie ? "@interpolate(flat) " : `@interpolate(${null!==ie&&void 0!==ie?ie:"perspective"}, ${null!==He&&void 0!==He?He:"center"}) `
    }

    function Yb(ee) {
      return xb({
        defines: ee.defines,
        vertex: Wb(Bb, ee.vertexCode),
        fragment: Wb(Eb, ee.fragmentCode),
        members: [...bb, ...ee.defines.has("OPACITY") ? Mb : [], ...ee.defines.has("EMISSIVE") ? Kb : [], ...ee.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Vb(ee) {
      const ie = ee.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (ie === ee) throw new Error("Lite: fragment main has no return");
      return ie
    }
    const ab = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${qb}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${fb}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${Tb}\n${pb}\n}\n`,
      cb = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Xb}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function xb(ee) {
      const ie = ee.defines,
        He = Db(ni(ee.vertex, ie)),
        ye = Db(ni(ee.fragment, ie)),
        be = new Map;
      for (const Be of [...He.varyings, ...ye.varyings]) be.has(Be.name) || be.set(Be.name, Be);
      const Me = [...be.values()].map(((ee, ie) => `\t@location(${ie}) ${ee.interpolation}${ee.name}: ${ee.type},`)),
        Ke = [...ee.members];
      for (const Be of [...He.uniforms, ...ye.uniforms]) Ke.some((ee => ee.name === Be.name)) || Ke.push(Be);
      const Ue = yb(ee.structName, Ke),
        Fe = [],
        Je = [];
      let oe = 1;
      const Re = new Set;
      for (const Be of [...He.textures, ...ye.textures]) {
        if (Re.has(Be.name)) continue;
        Re.add(Be.name);
        const ee = `${Be.name}Sampler`,
          ie = oe++,
          He = oe++,
          ye = Be.type.startsWith("texture_2d_array") ? "2d-array" : Be.type.startsWith("texture_cube") ? "cube" : "2d";
        Fe.push({
          name: Be.name,
          binding: ie,
          samplerBinding: He,
          dimension: ye
        }), Je.push(`@group(2) @binding(${ie}) var ${Be.name}: ${Be.type};`), Je.push(`@group(2) @binding(${He}) var ${ee}: sampler;`)
      }
      for (const Be of [...He.samplers, ...ye.samplers])
        if (!Re.has(Be.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Be} has no texture`);
      const ke = [uy, kb, Ue.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${ee.structName};`, ...Je].join("\n"),
        qe = He.attributes,
        fe = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...He.attributes.map(((ee, ie) => `\t@location(${ie}) ${ee.name}: ${ee.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Te = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Me, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        pe = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...ye.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Me, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Xi, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Ti}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Xe = ee => {
          for (const ie of Ue.stridedArrays) ee = ee.replace(new RegExp(`\\b${ie}\\s*\\[(.*?)\\]`, "g"), `${ie}[$1].el`);
          return ee
        };
      return {
        vertex: `${ke}\n${fe}\n${Te}\n${Xe(He.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${ke}\n${pe}\n${Vb((ze=Xe(ye.body),ze.includes("fragmentInputs.position")?ze.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):ze))}`,
        attributes: qe,
        material: Ue,
        textures: Fe
      };
      var ze
    }
    const Lb = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Cb = ee => ({
        name: ee,
        type: "vec3"
      }),
      vb = ee => ({
        name: ee,
        type: "float"
      }),
      ub = yb("EarthSkyUniforms", [Cb("viewFrom"), vb("exposureScale"), Cb("zenithOffset"), vb("fogOn"), Cb("up"), vb("ditherOn"), Cb("sun"), vb("turbidity"), Cb("tint"), vb("rayleigh"), Cb("sunDir"), vb("mieStrength"), Cb("inScatterR"), vb("mieFocus"), Cb("inScatterM"), vb("sunE"), Cb("extinctionBeta"), vb("sunsetMix"), vb("mieScale"), vb("mieBase"), vb("mieSlope"), vb("sunDiscE"), vb("exposure")]),
      mb = `${uy}\n${kb}\n${ub.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      lb = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Lb.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Sb = `\n${Xi}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(ui).map((ee=>{let[ie,He]=ee;return`const TONE_${ie}: f32 = ${He};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${mi};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Ti}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var nb = He(37913);
    const jb = new nb.rf,
      sb = new nb.rf,
      Ib = new nb.Quaternion,
      hb = new Float64Array(3),
      Nb = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Gb = new Float64Array(16);

    function rb(ee, ie, He) {
      const ye = He.worldMatrix;
      var be;
      ee.updateFloat3("viewFrom", ye[12], ye[13], ye[14]), ee.updateFloatsFrom("zenithOffset", ie.cameraOffset, 0, 3), ee.updateFloatsFrom("up", ie.up, 0, 3), ie.luminance > 0 && (ee.updateFloat("exposure", ie.luminance), ee.updateFloat("exposureScale", (be = ie.luminance, Math.log2(2 / Math.pow(be, 4))))), ee.updateFloat("turbidity", ie.turbidity), ee.updateFloat("rayleigh", ie.rayleigh), ee.updateFloat("mieStrength", ie.mieCoefficient), ee.updateFloat("mieFocus", ie.mieDirectionalG), ee.updateFloatsFrom("tint", ie.tint, 0, 3), ee.updateFloat("fogOn", ie.fog && He.fogEnabled && 0 !== He.fogMode ? 1 : 0), ee.updateFloat("ditherOn", ie.dithering ? 1 : 0);
      const Me = ie.sunPosition;
      if (jb.set(Me[0], Me[1], Me[2]), !ie.useSunPosition) {
        const ee = Math.PI * (ie.inclination - .5),
          He = 2 * Math.PI * (ie.azimuth - .5);
        jb.set(ie.distance * Math.cos(He) * Math.cos(ee), ie.distance * Math.sin(-ee), ie.distance * Math.sin(He) * Math.cos(ee)), nb.Quaternion.FromUnitVectorsToRef(nb.rf.UpReadOnly, sb.set(ie.up[0], ie.up[1], ie.up[2]), Ib), jb.rotateByQuaternionToRef(Ib, jb)
      }
      ee.updateVector3("sun", jb), hb[0] = jb.x, hb[1] = jb.y, hb[2] = jb.z;
      const Ke = vi(ie, hb, Nb);
      ee.updateFloatsFrom("sunDir", Ke.sunDir, 0, 3), ee.updateFloat("sunE", Ke.sunE), ee.updateFloatsFrom("inScatterR", Ke.inScatterR, 0, 3), ee.updateFloatsFrom("inScatterM", Ke.inScatterM, 0, 3), ee.updateFloatsFrom("extinctionBeta", Ke.extinctionBeta, 0, 3), ee.updateFloat("sunsetMix", Ke.sunsetMix), ee.updateFloat("sunDiscE", Ke.sunDiscE), ee.updateFloat("mieScale", Ke.mieScale), ee.updateFloat("mieBase", Ke.mieBase), ee.updateFloat("mieSlope", Ke.mieSlope)
    }

    function Qb(ee, ie) {
      const He = Gb;
      He[0] = ie.far, He[5] = ie.far, He[10] = ie.far, He[15] = 1;
      const ye = ee.infiniteDistance;
      for (let be = 0; be < 3; be++) He[12 + be] = ee.position[be] + (ye ? ie.worldMatrix[12 + be] : 0);
      return Gb
    }
    class eM {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(ee, ie, He, ye, be) {
        He !== this.pipeline && (ee.setPipeline(He), this.pipeline = He), ee.setBindGroup(1, ye, [be]);
        const Me = ie.material.bindGroup;
        Me !== this.materialGroup && (ee.setBindGroup(2, Me), this.materialGroup = Me);
        const Ke = ie.program.packGroup;
        Ke && Ke !== this.packGroup && (ee.setBindGroup(ri.f, Ke), this.packGroup = Ke);
        const {
          vertexBuffers: Ue,
          vertexOffsets: Fe
        } = this;
        for (let Je = 0; Je < ie.vertexBuffers.length; Je++) Ue[Je] === ie.vertexBuffers[Je] && Fe[Je] === ie.vertexOffsets[Je] || (ee.setVertexBuffer(Je, ie.vertexBuffers[Je], ie.vertexOffsets[Je]), Ue[Je] = ie.vertexBuffers[Je], Fe[Je] = ie.vertexOffsets[Je]);
        ie.indexBuffer && ie.indexBuffer !== this.indexBuffer && (ee.setIndexBuffer(ie.indexBuffer, ie.indexFormat), this.indexBuffer = ie.indexBuffer)
      }
    }
    class iM {
      constructor(ee, ie, He, ye) {
        this.modelMeshes = ee, this.Nee = ie, this.maker = He, this.warnOnce = ye, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (ee, ie) => {
          (ie < -1 || ie > 1) && this.warnOnce(`group:${ie}`, `rendering group ${ie} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(ee) {
        this.collectGroup(ee, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(ee, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(ee, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Nee.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(HM), this.transparentDraws.sort(yM)
      }
      collectGroup(ee, ie, He, ye, be) {
        const Me = this.modelMeshes.group(ie),
          Ke = this.Nee.group(ie),
          Ue = 0 === ie ? null === Ke || void 0 === Ke ? void 0 : Ke.opaque : void 0;
        this.collectList(ee, null === Me || void 0 === Me ? void 0 : Me.opaque, Ue || null === Ke || void 0 === Ke ? void 0 : Ke.opaque, ie, !1, He, be), Ue && (this.Nee.drawn += this.maker.bundleDraws(ee, Ue, ie)), this.collectList(ee, null === Me || void 0 === Me ? void 0 : Me.alphaTest, void 0, ie, !1, He, be), this.collectList(ee, null === Me || void 0 === Me ? void 0 : Me.transparent, null === Ke || void 0 === Ke ? void 0 : Ke.transparent, ie, !0, ye, be)
      }
      collectList(ee, ie, He, ye, be, Me, Ke) {
        var Ue;
        const Fe = Me.length;
        ie && this.maker.pushDraws(ee, ie.units, ie.units.length, ye, be, Me, ie.rows), He && (this.Nee.drawn += this.maker.pushDraws(ee, He, He.length, ye, be, Me));
        const Je = be ? null === (Ue = this.modelMeshes.group(ye)) || void 0 === Ue ? void 0 : Ue.text : void 0;
        Je && this.maker.pushDraws(ee, Je.units, Je.units.length, ye, !0, Me, Je.rows), Ke && bM(Me, Fe)
      }
    }

    function HM(ee, ie) {
      return ee.program.id - ie.program.id || ee.material.owner.uniqueId - ie.material.owner.uniqueId
    }

    function yM(ee, ie) {
      return ee.material.owner.uniqueId - ie.material.owner.uniqueId
    }

    function bM(ee, ie) {
      for (let He = ie + 1; He < ee.length; He++) {
        const ye = ee[He];
        let be = He - 1;
        for (; be >= ie && yM(ee[be], ye) > 0; be--) ee[be + 1] = ee[be];
        ee[be + 1] = ye
      }
    }
    const MM = {};

    function KM(ee) {
      return ee.hasThinInstances ? "thin" : ee.nMe || ee._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function UM(ee, ie, He) {
      return ee ? (He._needUVs = !0, ee.optimizeUVAllocation && (0, we.E)(ee.matrix) ? (He[`${ie}DIRECTUV`] = ee.uvSet + 1, He[`MAINUV${ee.uvSet+1}`] = !0) : He[`${ie}DIRECTUV`] = 0, !0) : (He[`${ie}DIRECTUV`] = 0, !1)
    }

    function FM(ee) {
      const ie = new Map;
      for (const He in ee) {
        if (95 === He.charCodeAt(0)) continue;
        const ye = ee[He],
          be = typeof ye;
        "number" === be || "string" === be ? ie.set(He, String(ye)) : ye && "function" !== be && ie.set(He, !0)
      }
      return ie
    }

    function JM(ee) {
      const ie = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: He
        }
        of ee.features)
        for (const ee in He) ie[ee] = He[ee];
      return ie
    }

    function oM(ee) {
      const ie = ee.parts.geometry;
      return null !== ie && void 0 !== ie && ie.live ? ie : null
    }

    function RM(ee) {
      var ie;
      return null !== (ie = oM(ee)) && void 0 !== ie ? ie : MM
    }
    class kM {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = ee, this.warnOnce = ie, this.programWithModel = He, this.packFailed = ye, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(ee, ie, He, ye, be) {
        const Me = ie.owner;
        let Ke = this.drawStates.get(ie);
        if (!Ke) {
          const ee = ie.parts.materials[ie.range];
          if (!ee) return this.warnOnce("model", `${He.name} on ${Me.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Ke = {
            defines: JM(ee),
            model: ee,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: be,
            groupId: ye,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(ie, Ke)
        }
        if (this.programCurrent(Ke, ie, be, ye)) return Ke.program;
        const {
          model: Ue
        } = Ke, Fe = RM(ie), Je = this.instanceLayout(Me, be), oe = this.definesBits(Me);
        if (!this.prepareModelDefines(ee, Me, Ue, Ke.defines, ye, be)) return null;
        Ke.instancing = be, Ke.groupId = ye, Ke.modelVersion = Ue.version, Ke.geometry = Fe, Ke.instanceLayout = Je, Ke.definesBits = oe;
        const Re = function(ee) {
          let ie = "";
          for (const [He, ye] of ee) ie += !0 === ye ? `${He};` : `${He}=${ye};`;
          return ie
        }(FM(Ke.defines));
        return Re === Ke.definesKey && Ke.packVariant === this.modelPackVariant && Ke.program && !this.packFailed(Ke.program) || (Ke.definesKey = Re, Ke.packVariant = this.modelPackVariant, Ke.program = this.programWithModel(Ue, Ke.defines, Re)), Ke.program
      }
      programCurrent(ee, ie, He, ye) {
        return null !== ee.program && !this.packFailed(ee.program) && ee.instancing === He && ee.groupId === ye && this.definesHold(ee, ie, He)
      }
      definesHold(ee, ie, He) {
        return ee.modelVersion === ee.model.version && ee.geometry === RM(ie) && ee.instanceLayout === this.instanceLayout(ie.owner, He) && ee.definesBits === this.definesBits(ie.owner) && ee.packVariant === this.modelPackVariant
      }
      modelPackKind(ee) {
        var ie;
        return 0 === this.modelPackVariant ? null : null !== (ie = (0, te.y)(ee, We.e.name)) && void 0 !== ie && ie.active ? "placed" : ee.item ? "item" : ee.lifeform ? "lifeform" : ee.box ? "box" : null
      }
      instanceLayout(ee, ie) {
        var He, ye, be;
        return "thin" === ie ? null !== (be = this.resources.Zee.get(ee)) && void 0 !== be ? be : null : "instanced" === ie && null !== (He = null === (ye = ee._userInstancedBuffersStorage) || void 0 === ye ? void 0 : ye.interleavedKinds) && void 0 !== He ? He : null
      }
      definesBits(ee) {
        const ie = this.view;
        return (ee.visibility < 1 ? 1 : 0) | (ee.hasVertexAlpha ? 2 : 0) | (ee.applyFog ? 4 : 0) | (ee.useVertexColors ? 8 : 0) | (ee.nonUniformScaling ? 16 : 0) | (ie.fogEnabled && 0 !== ie.fogMode ? 32 : 0) | (ie.lightsEnabled ? 64 : 0) | ie.lightCount << 7
      }
      prepareLightDefines(ee, ie, He) {
        let ye = 0;
        if (this.view.lightsEnabled && !ie) {
          const ie = Math.min(He, 4);
          for (; ye < this.view.lightCount && (ee[`LIGHT${ye}`] = !0, ee[`LITE_LIGHT${ye}_SLOT`] = ye, ye++, ee._needNormals = !0, ye !== ie););
        }
        for (let be = ye; be < 4; be++) ee[`LIGHT${be}`] = !1, ee[`LITE_LIGHT${be}_SLOT`] = void 0
      }
      prepareModelDefines(ee, ie, He, ye, be, Me) {
        const {
          features: Ke
        } = He;
        ye._needNormals = !1, ye._needUVs = !1;
        const Ue = this.view;
        this.prepareLightDefines(ye, He.disableLighting, He.maxSimultaneousLights), ye.MAINUV1 = !1, ye.MAINUV2 = !1;
        const Fe = He.diffuseTexture;
        Fe ? (ye._needUVs = !0, ye.DIFFUSE = !0, Fe.optimizeUVAllocation && (0, we.E)(Fe.matrix) ? (ye.DIFFUSEDIRECTUV = Fe.uvSet + 1, ye[`MAINUV${Fe.uvSet+1}`] = !0) : ye.DIFFUSEDIRECTUV = 0, Fe.uvSet > 1 && this.warnOnce(`uvset:${He.name}`, `${He.name} samples UV set ${Fe.uvSet+1}, which is not supported`)) : (ye.DIFFUSE = !1, ye.DIFFUSEDIRECTUV = 0);
        const Je = He.opacityTexture,
          oe = He.emissiveTexture;
        ye.OPACITY = UM(Je, "OPACITY", ye), ye.OPACITYRGB = null !== Je && Je.getAlphaFromRGB, ye.EMISSIVE = UM(oe, "EMISSIVE", ye), (Je && Je.uvSet > 1 || oe && oe.uvSet > 1) && this.warnOnce(`uvset:${He.name}`, `${He.name} samples a UV set past 2, which is not supported`);
        const Re = He.reflectionTexture,
          ke = null !== Re;
        if (ke) {
          if (!this.resources.boundTexture(Re)) return !1;
          ye._needNormals = !0
        }
        ye.REFLECTION = ke, ye.REFLECTIONMAP_3D = ke, ye.REFLECTIONMAP_SKYBOX = ke, ye.REFLECTIONMAP_OPPOSITEZ = ke && (ee.useRightHandedSystem ? !Re.invertZ : Re.invertZ), ye.ROUGHNESS = ke && He.roughness > 0, ye.REFLECTIONOVERALPHA = ke && He.useReflectionOverAlpha, ye.LITE_REFLECTION_LUMINANCE = ke && "cube" === Re.source.kind && Re.source.luminance, (ie.skeleton || ie.morphTargetManager) && this.warnOnce(`skin:${ie.name}`, `${ie.name} has bones or morph targets, which are not supported`), ye.FOG = He.fogEnabled && ie.applyFog && Ue.fogEnabled && 0 !== Ue.fogMode, ye.NONUNIFORMSCALING = ie.nonUniformScaling;
        const {
          visibility: qe,
          hasVertexAlpha: fe
        } = ie;
        ye.ALPHATEST = (0, te.O)(He, qe, fe), ye.ALPHAFROMDIFFUSE = (0, te.db)(He), ye.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== He.transparencyMode, ye.ALPHABLEND = null === He.transparencyMode || (0, te.M)(He, qe, fe), ye.PREMULTIPLYALPHA = 7 === He.alphaMode || 8 === He.alphaMode, ye.EMISSIVEASILLUMINATION = He.useEmissiveAsIllumination, ye.LINKEMISSIVEWITHDIFFUSE = He.linkEmissiveWithDiffuse, ye.TWOSIDEDLIGHTING = !He.backFaceCulling && He.twoSidedLighting, ye.INSTANCES = "none" !== Me, ye.THIN_INSTANCES = "thin" === Me, ye.LITE_FRONT_LAYER = be >= 1;
        for (const {
            feature: de,
            state: We,
            active: te
          }
          of Ke) {
          var Te, pe;
          if (te) null === (Te = (pe = (0, ai.e)(de)).prepareDefinesBeforeAttributes) || void 0 === Te || Te.call(pe, We, ye, ee, ie)
        }
        this.modelPackKind(He) && (ye._needNormals = !0), ye.NORMAL = ye._needNormals && ie.isVerticesDataPresent("normal"), ye.UV1 = ye._needUVs && ie.isVerticesDataPresent("uv"), ye.UV2 = ye._needUVs && ie.isVerticesDataPresent("uv2");
        const Xe = ie.useVertexColors && ie.isVerticesDataPresent("color");
        ye.VERTEXCOLOR = Xe, ye.VERTEXALPHA = ie.hasVertexAlpha && Xe, ye.INSTANCESCOLOR = "none" !== Me && ie.isVerticesDataPresent("instanceColor");
        for (const {
            feature: de,
            state: We,
            active: te
          }
          of Ke) {
          var ze, Be;
          if (te) null === (ze = (Be = (0, ai.e)(de)).prepareDefines) || void 0 === ze || ze.call(Be, We, ye, ee, ie, He)
        }
        const Ee = ee.Nf();
        for (const {
            feature: de,
            state: We,
            active: te
          }
          of Ke) {
          var ge, Oe;
          if (te && !1 === (null === (ge = (Oe = (0, ai.e)(de)).isReadyForSubMesh) || void 0 === ge ? void 0 : ge.call(Oe, We, ye, ee, Ee))) return !1
        }
        return !0
      }
    }

    function qM(ee, ie, He) {
      return ee.codeVersion !== ie.version && function(ee, ie) {
        const He = [],
          ye = [];
        for (const {
            feature: ke,
            state: qe,
            active: fe
          }
          of ie.features) {
          var be, Me, Ke, Ue;
          if (fe) fM(null === (be = (Me = (0, ai.e)(ke)).getCustomCode) || void 0 === be ? void 0 : be.call(Me, qe, "vertex", Oe.b.WGSL), He), fM(null === (Ke = (Ue = (0, ai.e)(ke)).getCustomCode) || void 0 === Ke ? void 0 : Ke.call(Ue, qe, "fragment", Oe.b.WGSL), ye)
        }
        const Fe = [];
        for (const {
            feature: ke,
            state: qe
          }
          of ie.features) {
          var Je, oe;
          const ee = null === (Je = (oe = (0, ai.e)(ke)).getUniforms) || void 0 === Je ? void 0 : Je.call(oe, qe, Oe.b.WGSL);
          for (const ie of null !== (Re = null === ee || void 0 === ee ? void 0 : ee.ubo) && void 0 !== Re ? Re : []) {
            var Re;
            ie.size && ie.type && Fe.push({
              name: ie.name,
              type: ie.type,
              arraySize: ie.arraySize
            })
          }
        }
        ee.vertexCode = He, ee.fragmentCode = ye, ee.pluginUniforms = Fe, ee.codeKey = JSON.stringify([He, ye, Fe]), ee.codeVersion = ie.version
      }(ee, ie), `${He}#${ee.codeKey}`
    }

    function fM(ee, ie) {
      if (ee)
        for (const He in ee) ee[He] && ie.push([He, ee[He]])
    }
    const TM = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class pM {
      constructor(ee) {
        this.warnOnce = ee, this.states = new Map
      }
      renderState(ee, ie, He, ye) {
        var be;
        let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Ke = null !== (be = ee.sideOrientation) && void 0 !== be ? be : ie.sideOrientation;
        ie._getWorldMatrixDeterminant() < 0 && (Ke = 0 === Ke ? 1 : 0);
        const Ue = "triangle-list" === Me,
          Fe = He ? ee.alphaMode : 0,
          Je = (!He || (0 === Fe || ee.forceDepthWrite)) && !ee.disableDepthWrite,
          oe = Ue && ee.backFaceCulling ? ee.cullBackFaces ? "back" : "front" : "none",
          Re = Ue && 0 !== Ke ? "ccw" : "cw",
          ke = ee.depthFunction,
          qe = Ue ? ee.zOffset : 0,
          fe = Ue ? ee.zOffsetUnits : 0,
          Te = !ee.disableColorWrite;
        return ye && ye.alphaMode === Fe && ye.depthWrite === Je && ye.depthFunction === ke && ye.cullMode === oe && ye.frontFace === Re && ye.zOffset === qe && ye.zOffsetUnits === fe && ye.colourWrite === Te && ye.topology === Me ? ye : this.stateFor(Fe, Je, ke, oe, Re, qe, fe, Te, Me)
      }
      stateFor(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = `${ee}|${ie}|${He}|${ye}|${be}|${Me}|${Ke}|${Ue}|${Fe}`;
        let oe = this.states.get(Je);
        if (!oe) {
          var Re;
          const ke = ee ? Mi(ee) : null;
          ee && !ke && this.warnOnce(`alpha:${ee}`, `alpha mode ${ee} is not supported`), oe = {
            key: Je,
            alphaMode: ee,
            depthFunction: He,
            zOffset: Me,
            zOffsetUnits: Ke,
            topology: Fe,
            blend: ke,
            depthWrite: ie,
            depthCompare: He && null !== (Re = TM.get(He)) && void 0 !== Re ? Re : null,
            cullMode: ye,
            frontFace: be,
            depthBias: -Ke,
            depthBiasSlopeScale: -Me,
            colourWrite: Ue
          }, this.states.set(Je, oe)
        }
        return oe
      }
    }
    var XM = He(38159);

    function zM(ee) {
      if (!ee.frozen) return -1;
      let ie = ee.version;
      for (const {
          feature: He,
          state: ye,
          active: be
        }
        of ee.features) {
        if (!be || !He.bind) continue;
        const ee = (0, ai.e)(He).uniformsVersion;
        if (!ee) return -1;
        ie += ee(ye)
      }
      return ie
    }
    class BM {
      constructor(ee, ie, He) {
        this.slots = ee, this.data = ie, this.textures = He, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(ee, ie) {
        this.write4(ee, ie, 0, 0, 0, 1)
      }
      updateFloat2(ee, ie, He) {
        this.write4(ee, ie, He, 0, 0, 2)
      }
      updateFloat3(ee, ie, He, ye) {
        this.write4(ee, ie, He, ye, 0, 3)
      }
      updateFloat4(ee, ie, He, ye, be) {
        this.write4(ee, ie, He, ye, be, 4)
      }
      updateVector3(ee, ie) {
        this.write4(ee, ie.x, ie.y, ie.z, 0, 3)
      }
      updateVector4(ee, ie) {
        this.write4(ee, ie.x, ie.y, ie.z, ie.w, 4)
      }
      updateColor3(ee, ie) {
        this.write4(ee, ie.r, ie.g, ie.b, 0, 3)
      }
      updateColor4(ee, ie, He) {
        this.write4(ee, ie.r, ie.g, ie.b, He, 4)
      }
      updateFloatsFrom(ee, ie, He, ye) {
        const be = this.slots.get(ee);
        if (!be) return;
        const Me = this.data,
          Ke = be.offset;
        for (let Ue = 0; Ue < ye; Ue++) Me[Ke + Ue] = ie[He + Ue]
      }
      updateFloat3TimesFloats(ee, ie, He, ye) {
        const be = this.slots.get(ee);
        if (!be) return;
        const Me = this.data,
          Ke = be.offset;
        Me[Ke] = ie[He] * ye[0], Me[Ke + 1] = ie[He + 1] * ye[1], Me[Ke + 2] = ie[He + 2] * ye[2]
      }
      oie(ee, ie) {
        const He = this.slots.get(ee);
        He && this.data.set(ie.m, He.offset)
      }
      updateMatrixFloats(ee, ie) {
        const He = this.slots.get(ee);
        He && this.data.set(ie, He.offset)
      }
      updateFloatArray(ee, ie) {
        const He = this.slots.get(ee);
        if (!He) return;
        if (!He.arraySize || He.stride === He.floats) return void this.data.set(ie, He.offset);
        const ye = Math.min(ie.length, He.floats * He.arraySize);
        for (let be = 0; be < ye; be++) this.data[He.offset + Math.floor(be / He.floats) * He.stride + be % He.floats] = ie[be]
      }
      updateArray(ee, ie) {
        this.updateFloatArray(ee, ie)
      }
      setTexture(ee, ie) {
        this.textures.set(ee, ie), this.expected.delete(ee)
      }
      expectTexture(ee) {
        this.textures.set(ee, null), this.expected.add(ee)
      }
      write4(ee, ie, He, ye, be, Me) {
        const Ke = this.slots.get(ee);
        if (!Ke) return;
        const Ue = this.data,
          Fe = Ke.offset;
        Ue[Fe] = ie, Me > 1 && (Ue[Fe + 1] = He), Me > 2 && (Ue[Fe + 2] = ye), Me > 3 && (Ue[Fe + 3] = be)
      }
    }

    function EM(ee, ie) {
      const He = ob,
        ye = XM.h,
        be = ee.lights,
        Me = Math.min(ee.lightCount, 8);
      for (let Ke = 0; Ke < Me; Ke++) {
        const ee = He.lights + Ke * He.lightStride,
          Me = Ke * XM.b;
        ie[ee] = be[Me + ye.vector], ie[ee + 1] = be[Me + ye.vector + 1], ie[ee + 2] = be[Me + ye.vector + 2], ie[ee + 3] = be[Me + ye.kind] === XM.f.directional ? 1 : 0, ie[ee + 4] = be[Me + ye.diffuse], ie[ee + 5] = be[Me + ye.diffuse + 1], ie[ee + 6] = be[Me + ye.diffuse + 2], ie[ee + 7] = be[Me + ye.range], ie[ee + 8] = be[Me + ye.specular], ie[ee + 9] = be[Me + ye.specular + 1], ie[ee + 10] = be[Me + ye.specular + 2], ie[ee + 11] = be[Me + ye.range]
      }
      ie[He.fogInfos] = ee.fogMode, ie[He.fogInfos + 1] = ee.fogStart, ie[He.fogInfos + 2] = ee.fogEnd, ie[He.fogInfos + 3] = ee.fogDensity, ie[He.fogColour] = ee.fogColour[0], ie[He.fogColour + 1] = ee.fogColour[1], ie[He.fogColour + 2] = ee.fogColour[2], ie[He.outputHeight] = ee.renderHeight, ie[He.animTick] = ee.animTick, ie[He.timeMs] = ee.timeMs
    }
    class gM {
      constructor(ee) {
        this.instancesOf = ee
      }
      refreshModelUniforms(ee, ie, He, ye) {
        const be = zM(He);
        if (be >= 0 && be === ie.heldVersion && ie.textures.get("diffuseSampler") === He.diffuseTexture && ie.textures.get("reflectionCubeSampler") === He.reflectionTexture && ie.textures.get("opacitySampler") === He.opacityTexture && ie.textures.get("emissiveSampler") === He.emissiveTexture) return !0;
        if (be < 0)
          for (const Me of this.instancesOf(He)) Me.heldVersion = -1;
        return this.writeModelUniforms(ee, ie, He, ye), ie.heldVersion = be, !1
      }
      writeModelUniforms(ee, ie, He, ye) {
        const {
          ubo: be
        } = ie, Me = He.diffuseTexture, Ke = He.diffuseColor;
        be.updateFloat4("vDiffuseColor", Ke[0], Ke[1], Ke[2], He.alpha), Me && (be.updateFloat2("vDiffuseInfos", Me.uvSet, Me.level), be.updateMatrixFloats("diffuseMatrix", Me.matrix)), be.updateFloat("alphaCutOff", He.alphaCutOff), be.updateFloatsFrom("vEmissiveColor", He.emissiveColor, 0, 3), be.updateFloat3TimesFloats("vAmbientColor", ye.ambientColour, 0, He.ambientColor);
        const Ue = He.specularColor;
        be.updateFloat4("vSpecularColor", Ue[0], Ue[1], Ue[2], He.specularPower), be.setTexture("diffuseSampler", Me);
        const Fe = He.opacityTexture;
        Fe && (be.updateFloat2("vOpacityInfos", Fe.uvSet, Fe.level), be.updateMatrixFloats("opacityMatrix", Fe.matrix)), be.setTexture("opacitySampler", Fe);
        const Je = He.emissiveTexture;
        Je && (be.updateFloat2("vEmissiveInfos", Je.uvSet, Je.level), be.updateMatrixFloats("emissiveMatrix", Je.matrix)), be.setTexture("emissiveSampler", Je);
        const oe = He.reflectionTexture;
        oe && be.updateMatrixFloats("reflectionMatrix", oe.matrix), be.updateFloat2("vReflectionInfos", oe ? oe.level * ee.iblIntensity : 0, He.roughness), be.setTexture("reflectionCubeSampler", oe);
        const Re = ee.Nf();
        for (const {
            feature: fe,
            state: Te,
            active: pe
          }
          of He.features) {
          var ke, qe;
          if (pe) null === (ke = (qe = (0, ai.e)(fe)).bind) || void 0 === ke || ke.call(qe, Te, be, ee, Re)
        }
      }
    }

    function OM(ee) {
      const ie = ee.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(ie) ? "u32" : /i32|^vec\di$/.test(ie) ? "i32" : "f32"
    }

    function dM(ee, ie) {
      const He = ee.getSize(),
        ye = OM(ie),
        be = ee => 4 === He ? `${ee}x4` : 2 === He ? `${ee}x2` : null;
      if ("f32" === ye) {
        if (5126 === ee.type) return 1 === He ? "float32" : He >= 2 && He <= 4 ? `float32x${He}` : null;
        if (!ee.normalized) return null;
        switch (ee.type) {
          case 5121:
            return be("unorm8");
          case 5120:
            return be("snorm8");
          case 5123:
            return be("unorm16");
          case 5122:
            return be("snorm16")
        }
        return null
      }
      const Me = "u32" === ye ? "uint" : "sint";
      switch (ee.type) {
        case 5125:
        case 5124:
          return 1 === He ? `${Me}32` : He <= 4 ? `${Me}32x${He}` : null;
        case 5121:
        case 5120:
          return be(`${Me}8`);
        case 5123:
        case 5122:
          return be(`${Me}16`)
      }
      return null
    }

    function WM(ee) {
      var ie;
      const He = /(8|16|32)(?:x(\d))?$/.exec(ee);
      return He ? Number(He[1]) / 8 * Number(null !== (ie = He[2]) && void 0 !== ie ? ie : 1) : 4
    }
    class tM {
      constructor(ee, ie, He) {
        this.resources = ee, this.limits = ie, this.warnOnce = He, this.layouts = new Map
      }
      resolveInputs(ee, ie, He, ye) {
        const be = [],
          Me = He.program.attributes,
          Ke = [];
        for (let oe = 0; oe < Me.length; oe++) {
          const He = Me[oe],
            Ue = He.optional ? null : this.resources.vertexInput(ee, He.name, ye);
          if (!Ue) {
            const ee = OM(He.type),
              ie = "u32" === ee ? "uint32x4" : "i32" === ee ? "sint32x4" : "float32x4";
            Ke.push(null);
            const ye = be.find((ee => null === ee.data));
            ye ? ye.attributes.push({
              shaderLocation: oe,
              offset: 0,
              format: ie
            }) : be.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: oe,
                offset: 0,
                format: ie
              }]
            });
            continue
          }
          const Fe = Ue.getBuffer();
          Ke.push(Ue);
          const Je = dM(Ue, He.type);
          if (!Je) return this.warnOnce(`format:${ie}:${He.name}`, `${ie}'s ${He.name} (type ${Ue.type}, size ${Ue.getSize()}) has no WebGPU vertex format`), null;
          const Re = Ue.getIsInstanced() ? "instance" : "vertex",
            ke = Ue.byteStride,
            qe = WM(Je),
            fe = be.find((ee => ee.data === Fe && ee.stride === ke && ee.step === Re && Ue.byteOffset >= ee.base && Ue.byteOffset - ee.base + qe <= ke));
          fe ? fe.attributes.push({
            shaderLocation: oe,
            offset: Ue.byteOffset - fe.base,
            format: Je
          }) : be.push({
            data: Fe,
            base: Ue.byteOffset,
            stride: ke,
            step: Re,
            attributes: [{
              shaderLocation: oe,
              offset: 0,
              format: Je
            }]
          })
        }
        if (be.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${ie}`, `${ie} needs ${be.length} vertex buffers`), null;
        let Ue = "";
        for (const oe of be) {
          Ue += `${oe.stride}${"instance"===oe.step?"i":"v"}`;
          for (const ee of oe.attributes) Ue += `,${ee.shaderLocation}:${ee.offset}:${ee.format}`;
          Ue += ";"
        }
        let Fe = this.layouts.get(Ue);
        Fe || (Fe = {
          key: Ue,
          buffers: be.map((ee => ({
            arrayStride: ee.stride,
            stepMode: ee.step,
            attributes: ee.attributes
          }))),
          instanceEnds: be.map((ee => {
            let ie = -1;
            if ("instance" === ee.step)
              for (const He of ee.attributes) ie = Math.max(ie, He.offset + WM(He.format));
            return ie
          }))
        }, this.layouts.set(Ue, Fe));
        const Je = be.map((ee => ee.base));
        return {
          program: He,
          sources: Ke,
          layout: Fe,
          slotData: be.map((ee => ee.data)),
          Qee: Je,
          buffers: [],
          offsets: Je,
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

    function ZM(ee, ie, He, ye) {
      const be = ie.program.program.attributes;
      for (let Me = 0; Me < be.length; Me++) {
        if ((be[Me].optional ? null : He.vertexInput(ee, be[Me].name, ye)) !== ie.sources[Me]) return !1
      }
      return !0
    }
    const wM = 64;
    class DM {
      constructor(ee, ie, He, ye) {
        this.device = ee, this.layout = ie, this.frameBuffer = He, this.label = ye, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(ee) {
        if (ee * wM <= this.data.length) return !1;
        let ie = 2 * this.data.length;
        for (; ee * wM > ie;) ie *= 2;
        const He = new Float32Array(ie);
        return He.set(this.data), this.data = He, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const be = this.data,
          Me = ee * wM;
        let Ke = be[Me + 16] !== He;
        for (let Ue = 0; Ue < 16 && !Ke; Ue++) Ke = be[Me + Ue] !== ie[ye + Ue];
        if (Ke) {
          for (let ee = 0; ee < 16; ee++) be[Me + ee] = ie[ye + ee];
          be[Me + 16] = He
        }
        return Ke
      }
      upload(ee, ie) {
        this.device.queue.writeBuffer(this.buffer, ee * Rb, this.data, ee * wM, (ie - ee) * wM)
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

    function PM(ee) {
      return ee.gpu[we.e.lite] ??= ee.materials.map(((ie, He) => ({
        parts: ee,
        range: He,
        owner: ee.owner
      })))
    }

    function AM(ee) {
      var ie, He, ye;
      return null !== (ie = null !== (He = null === (ye = ee.parts.materials[ee.range]) || void 0 === ye ? void 0 : ye.mirror) && void 0 !== He ? He : ee.owner.material) && void 0 !== ie ? ie : null
    }
    const YM = ["opaque", "alphaTest", "transparent", "text"];

    function VM(ee) {
      for (const ie of YM) ee[ie].units.length = 0, ee[ie].rows.length = 0
    }
    class aM {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Vi.b)("Lite: ")
      }
      attach(ee, ie) {
        this.model = ee, this.mirror = ie
      }
      get worlds() {
        return this.model.nodes.xR
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(ee) {
        return this.groups.get(ee)
      }
      forEachGroup(ee) {
        this.groups.forEach(ee)
      }
      forEachSelected(ee) {
        for (const [ie, He] of this.groups)
          for (const ye of YM)
            for (const be of He[ye].units) ee(be.owner, "text" === ye ? "transparent" : ye, ie)
      }
      select(ee, ie) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(VM);
        const {
          model: He,
          mirror: ye
        } = this;
        if (!He || !ye || !ee) return;
        this.rows.length < He.nodes.bk && (this.rows = new Int32Array(He.nodes.bk));
        const be = this.rows,
          Me = He.meshes;
        for (let Ue = 0; Ue < Me.looseCount; Ue++) {
          const ee = Me.loose[Ue],
            He = ye.nodes[ee];
          He && !He.isBlocked && He.isEnabled() && !He.wR.hasAZeroComponent && Me.selects(ee, ie.frustum) && (this.activate(He, ee), this.selectedCount++)
        }
        const Ke = Me.selectTextPlanes(ie.frustum, be);
        for (let Ue = 0; Ue < Ke; Ue++) {
          const ie = be[Ue],
            Me = ye.nodes[ie],
            Ke = He.meshes.parts[ie];
          if (!Me.isVisible || !(Me.visibility > 0) || 0 === (Me.layerMask & ee.layerMask) || !Ke) continue;
          const Fe = this.groupOf(He.meshes.layer[ie]).text;
          for (const ee of PM(Ke)) Fe.units.push(ee), Fe.rows.push(ie);
          this.selectedCount++
        }
      }
      instanceBatch(ee) {
        const ie = this.batchOf(ee);
        return ie.dispatched || (ie.dispatched = ie.renderSelf = !0, ie.row = this.rowOf(ee)), ie
      }
      rowOf(ee) {
        return ee.row
      }
      activate(ee, ie) {
        if (!ee.Zx) {
          const He = ee;
          if (He.nMe) {
            const ee = this.batchOf(He);
            ee.dispatched = !0, ee.renderSelf = !0, ee.row = ie
          }
          return void this.dispatch(He, ie, ie)
        }
        const He = ee,
          ye = He.jMe;
        if (ye._getWorldMatrixDeterminant() >= 0 !== He._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${ye.name}`, `A mirrored InstancedMesh of ${ye.name} is not drawn yet`);
        const be = this.batchOf(ye);
        be.instances.push(He), be.rows.push(ie), be.dispatched || (be.dispatched = !0, this.dispatch(ye, ie, this.rowOf(ye)))
      }
      batchOf(ee) {
        let ie = this.batches.get(ee);
        return ie || (ie = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(ee, ie)), ie.frame !== this.frame && (ie.frame = this.frame, ie.dispatched = !1, ie.renderSelf = !1, ie.instances.length = 0, ie.rows.length = 0), ie
      }
      dispatch(ee, ie, He) {
        const {
          layer: ye,
          parts: be
        } = this.model.meshes;
        if (!be[ie]) return;
        const Me = this.groupOf(ye[ie]),
          Ke = ee;
        for (const Ue of PM(be[ie])) {
          const ee = AM(Ue);
          if (!ee) continue;
          const ie = ee.needAlphaBlendingForMesh(Ke) ? Me.transparent : ee.needAlphaTestingForMesh(Ke) ? Me.alphaTest : Me.opaque;
          ie.units.push(Ue), ie.rows.push(He)
        }
      }
      groupOf(ee) {
        let ie = this.groups.get(ee);
        return ie || (ie = {
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
        }, this.groups.set(ee, ie)), ie
      }
    }

    function cM(ee) {
      ee.opaque.length = 0, ee.transparent.length = 0
    }
    class xM {
      constructor() {
        this.lJ = new Map, this.enabled = [], this.groups = new Map, this.KR = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(ee) {
        if (this.lJ.has(ee)) return;
        const ie = {
          mesh: ee,
          observer: ee.onEffectiveEnabledStateChangedObservable.add((ee => {
            this.JY(ie, ee)
          })),
          index: -1,
          steady: null
        };
        this.lJ.set(ee, ie), this.JY(ie, ee.isEnabled())
      }
      remove(ee) {
        const ie = this.lJ.get(ee);
        ie && (ie.observer.remove(!0), this.JY(ie, !1), this.lJ.delete(ee))
      }
      dropSteady() {
        for (const ee of this.lJ.values()) ee.steady = null
      }
      base(ee) {
        return this.lJ.get(ee)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          lJ: this.lJ.size
        }
      }
      forEachSelected(ee) {
        for (const [ie, He] of this.groups) {
          for (const ye of He.opaque) ee(ye.owner, "opaque", ie);
          for (const ye of He.transparent) ee(ye.owner, "transparent", ie)
        }
        for (const ie of this.KR) ee(ie.mesh, "opaque", 0)
      }
      group(ee) {
        return this.groups.get(ee)
      }
      forEachGroup(ee) {
        this.groups.forEach(ee)
      }
      select(ee, ie) {
        if (this.drawn = 0, this.selected = 0, this.KR.length = 0, this.groups.forEach(cM), !ee) return;
        const He = this.enabled;
        for (let ye = 0; ye < He.length; ye++) {
          const be = He[ye];
          if (be.steady && ie(be, ee)) {
            this.selected++, this.KR.push(be);
            continue
          }
          const Me = be.mesh;
          if (Me.isBlocked || Me.wR.hasAZeroComponent) continue;
          if (!Me.isVisible || Me.visibility <= 0 || 0 === (Me.layerMask & ee.layerMask)) continue;
          if (Me.nMe) {
            this.warned.has(Me.name) || (this.warned.add(Me.name), console.warn(`Lite: thin instance base ${Me.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Ke
          } = Me;
          if (!Ke) continue;
          Me.computeWorldMatrix(), this.selected++;
          const Ue = this.listsFor(Me.renderingGroupId);
          for (const ee of PM(Ke)) {
            const ie = AM(ee);
            ie && (ie.needAlphaBlendingForMesh(Me) ? Ue.transparent.push(ee) : Ue.opaque.push(ee))
          }
        }
      }
      JY(ee, ie) {
        if (ie === ee.index >= 0) return;
        ee.steady = null;
        const He = this.enabled;
        if (ie) ee.index = He.length, He.push(ee);
        else {
          const ie = He.pop();
          ie !== ee && (He[ee.index] = ie, ie.index = ee.index), ee.index = -1
        }
      }
      listsFor(ee) {
        let ie = this.groups.get(ee);
        return ie || (ie = {
          opaque: [],
          transparent: []
        }, this.groups.set(ee, ie)), ie
      }
    }
    var LM = He(40472);
    class CM {
      constructor() {
        this.bundle = null, this.stale = !0, this.lJ = new Set
      }
    }
    class vM {
      constructor(ee, ie, He) {
        this.device = ee, this.slots = ie, this.host = He, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new CM, this.oV = new CM, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new eM, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = ee => {
          ee.seen !== this.frame && (ee.draw && (ee.draw = null, this.args[5 * ee.slot + 1] = 0, this.argsDirty = !0, this.oV.stale ||= ee.oV), this.frame - ee.seen > 120 && (this.records.delete(ee.unit), this.freeSlots.push(ee.slot), ee.recorded && (this.bundleOf(ee).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(ee) {
          var ie, He;
          let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ie = null === (He = globalThis.navigator) || void 0 === He ? void 0 : He.userAgent) && void 0 !== ie ? ie : "";
          const be = ee.adapterInfo;
          return "intel" === (null === be || void 0 === be ? void 0 : be.vendor) && "gen-12lp" === be.architecture && ye.includes("Windows")
        }(ee), (0, LM.D)(this.direct)
      }
      LO() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, LM.D)(this.directThisFrame)
      }
      add(ee, ie, He, ye) {
        let be = this.records.get(ee);
        return be || (be = this.createRecord(ee), this.records.set(ee, be)), be.recorded && mM(be, ie) || (this.bundleOf(be).stale = !0), this.place(be, ie, He, ye), be
      }
      bundleOf(ee) {
        return ee.oV ? this.oV : this.main
      }
      addAgain(ee, ie, He, ye) {
        ee.recorded || (this.bundleOf(ee).stale = !0), this.place(ee, ie, He, ye)
      }
      place(ee, ie, He, ye) {
        ee.seen = this.frame, ee.oV && null === ee.draw && (this.oV.stale = !0), ee.draw = ie, this.drawn++, He && this.slots.write(ee.slot, He, ye) && (this.slotsFrom = Math.min(this.slotsFrom, ee.slot), this.slotsTo = Math.max(this.slotsTo, ee.slot));
        const be = this.args,
          Me = 5 * ee.slot;
        be[Me] === ie.count && be[Me + 1] === ie.instances && be[Me + 2] === ie.first || (be[Me] = ie.count, be[Me + 1] = ie.instances, be[Me + 2] = ie.first, this.argsDirty = !0, this.oV.stale ||= ee.oV)
      }
      ZR() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(ee) {
        for (const ie of this.records.values()) ie.draw && ie.seen === this.frame && !ie.oV && ee(ie.draw, this.slots.data, ie.slot * Rb / 4)
      }
      resourceDestroyed(ee) {
        this.main.stale ||= this.main.lJ.has(ee), this.oV.stale ||= this.oV.lJ.has(ee)
      }
      execute(ee, ie, He) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(ee, ie, He, "direct"), this.drawn;
        const ye = this.host.sceneGroup(ie);
        if (!ye) return this.main.bundle = null, this.oV.bundle = null, this.recordedSceneGroup = null, this.encode(ee, ie, He, "direct"), this.drawn;
        this.recordedTarget === He && this.recordedSceneGroup === ye || (this.recordedTarget = He, this.recordedSceneGroup = ye, this.main.stale = !0, this.oV.stale = !0);
        const be = this.main,
          Me = this.oV;
        let Ke = !1;
        !be.stale && be.bundle || (be.bundle = this.record(ie, He, ye, "indirect"), Ke = !0);
        const Ue = (0, LM.n)();
        return (Me.stale || this.rangedEpoch !== Ue) && (this.rangedEpoch = Ue, Me.bundle = this.drawsRanged() ? this.record(ie, He, ye, "oV") : this.noRangedBundle(), Ke = !0), Ke && (this.bundles = Me.bundle ? [be.bundle, Me.bundle] : [be.bundle]), ee.executeBundles(this.bundles), ee.setBindGroup(0, ye), this.drawn
      }
      record(ee, ie, He, ye) {
        const be = this.device.createRenderBundleEncoder({
          label: "oV" === ye ? "thin-bases-ranged" : "thin-bases",
          colorFormats: ee._colorFormat ? [ee._colorFormat] : [],
          depthStencilFormat: ee._depthStencilFormat,
          sampleCount: ee._sampleCount
        });
        return be.setBindGroup(0, He), this.encode(be, ee, ie, ye), be.finish()
      }
      noRangedBundle() {
        for (const ee of this.records.values()) ee.oV && (ee.recorded = !1);
        return this.oV.lJ.clear(), this.oV.stale = !1, null
      }
      drawsRanged() {
        for (const ee of this.records.values())
          if (ee.oV && ee.draw) return !0;
        return !1
      }
      encode(ee, ie, He, ye) {
        const be = [];
        for (const Fe of this.records.values()) "direct" !== ye && Fe.oV !== ("oV" === ye) || (Fe.recorded = !1, Fe.draw && be.push(Fe));
        be.sort(lM);
        const Me = "direct" === ye ? null : "oV" === ye ? this.oV : this.main;
        null === Me || void 0 === Me || Me.lJ.clear(), this.binder.reset();
        let Ke = !1;
        for (const Fe of be) {
          var Ue;
          const be = Fe.draw,
            Je = this.host.pipelineFor(be, ie, He);
          if (!Je) {
            this.host.pipelineCompiling(be, He) ? Ke = !0 : Me && this.keep(Fe, be, Me.lJ);
            continue
          }
          let oe;
          if (Fe.oV && "indirect" !== ye) {
            const ee = Fe.unit.owner;
            oe = "direct" === ye && (0, LM.w)(ee) || (0, LM.q)(ee) || void 0
          }
          if (Me && this.keep(Fe, be, Me.lJ), 0 === (null === (Ue = oe) || void 0 === Ue ? void 0 : Ue.count)) continue;
          this.binder.bind(ee, be, Je, this.slots.bindGroup, Fe.slot * Rb);
          const Re = 5 * Fe.slot;
          if ("indirect" === ye) {
            be.indexBuffer ? ee.drawIndexedIndirect(this.argsBuffer, 4 * Re) : ee.drawIndirect(this.argsBuffer, 4 * Re);
            continue
          }
          const ke = this.args;
          oe ? uM(ee, null !== be.indexBuffer, ke, Re, oe) : be.indexBuffer ? ee.drawIndexed(ke[Re], ke[Re + 1], ke[Re + 2], 0, 0) : ee.draw(ke[Re], ke[Re + 1], ke[Re + 2], 0)
        }
        Me && (Me.stale = Ke)
      }
      keep(ee, ie, He) {
        ee.recorded = !0, ee.pipelineKey = ie.pipelineKey, ee.materialGroup = ie.material.bindGroup, ee.vertexBuffers.length = 0, ee.vertexBuffers.push(...ie.vertexBuffers), ee.vertexOffsets = ie.vertexOffsets, ee.indexBuffer = ie.indexBuffer, ee.indexFormat = ie.indexFormat;
        for (const ye of ie.vertexBuffers) He.add(ye);
        ie.indexBuffer && He.add(ie.indexBuffer), He.add(ie.material.buffer);
        for (const ye of ie.material.bound) ye && He.add(ye)
      }
      createRecord(ee) {
        let ie = this.freeSlots.pop();
        return void 0 === ie && (ie = this.slotCount++, this.grow()), {
          unit: ee,
          slot: ie,
          oV: void 0 !== (0, LM.q)(ee.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.oV.stale = !0), 5 * this.slotCount > this.args.length) {
          const ee = new Uint32Array(2 * this.args.length);
          ee.set(this.args), this.args = ee, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function uM(ee, ie, He, ye, be) {
      const Me = He[ye + 1],
        Ke = be.data;
      for (let Ue = 0; Ue < be.count; Ue++) {
        const be = Math.min(Ke[2 * Ue], Me),
          Fe = Math.min(Ke[2 * Ue + 1], Me - be);
        0 !== Fe && (ie ? ee.drawIndexed(He[ye], Fe, He[ye + 2], 0, be) : ee.draw(He[ye], Fe, He[ye + 2], be))
      }
    }

    function mM(ee, ie) {
      if (ee.pipelineKey !== ie.pipelineKey || ee.materialGroup !== ie.material.bindGroup || ee.indexBuffer !== ie.indexBuffer || ee.indexFormat !== ie.indexFormat || ee.vertexOffsets !== ie.vertexOffsets || ee.vertexBuffers.length !== ie.vertexBuffers.length) return !1;
      for (let He = 0; He < ee.vertexBuffers.length; He++)
        if (ee.vertexBuffers[He] !== ie.vertexBuffers[He]) return !1;
      return !0
    }

    function lM(ee, ie) {
      return HM(ee.draw, ie.draw)
    }
    const SM = new WeakMap,
      nM = {
        depth: !1,
        sunShadow: !1
      };

    function jM(ee, ie) {
      let He = SM.get(ee);
      He || (He = new Map, SM.set(ee, He));
      const ye = `${ie.depth?"-depth":""}${ie.sunShadow?"-shadow":""}${ie.shadowMask?"-mask":""}`;
      let be = He.get(ye);
      if (!be) {
        const Me = [{
          binding: ri.d,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: ri.j
          }
        }, {
          binding: ri.u,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        ie.depth && Me.push({
          binding: ri.p,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), ie.sunShadow && Me.push(... function() {
          const ee = GPUShaderStage.FRAGMENT,
            ie = ri.q;
          return [{
            binding: ie.uniform,
            visibility: ee,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: ie.Uq,
            visibility: ee,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ie.special,
            visibility: ee,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ie.volume,
            visibility: ee,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: ie.sampler,
            visibility: ee,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: ie.entities,
            visibility: ee,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ie.entityGrids,
            visibility: ee,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), ie.shadowMask && Me.push({
          binding: ri.s,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), be = ee.createBindGroupLayout({
          label: `${ie.depth?"terrain-":""}shader-pack-inputs${ye}`,
          entries: Me
        }), He.set(ye, be)
      }
      return be
    }

    function sM(ee) {
      return jM(ee, nM)
    }

    function IM(ee, ie) {
      if (!ie) return !1;
      const He = (0, Qi.c)(ee);
      return !!He && Uy(He, ie)
    }

    function hM(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!ay(ie)) return [];
      return [jM(ee, {
        depth: Dy(ie.packVariant),
        sunShadow: IM(ie.packVariant, He),
        shadowMask: ye
      })]
    }
    class NM {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = ee, this.sunShadow = He, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(ri.j), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = ee.createBuffer({
          label: "shader-pack-inputs",
          size: ri.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const ye = (0, ri.x)(ie);
        this.textures = ee.createBuffer({
          label: "shader-pack-textures",
          size: ye.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), ee.queue.writeBuffer(this.textures, 0, ye), this.bindGroup = ee.createBindGroup({
          label: "shader-pack-inputs",
          layout: sM(ee),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: ri.d,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: ri.u,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(ee, ie, He) {
        (0, ri.C)(this.data, {
          seconds: ee.seconds(),
          lit: He,
          renderOffset: ee.renderOffset(),
          Sie: ee.Sie(),
          eyePosition: ie,
          shadowDirection: ee.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ye = ie ? this.sunShadow : null;
        if ((ie || He) && !ye) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!ee && !ye) return this.bindGroup;
        (ee && ee !== this.depthView || He && He !== this.maskView) && (this.depthView = null !== ee && void 0 !== ee ? ee : this.depthView, this.maskView = null !== He && void 0 !== He ? He : this.maskView, this.groups.clear());
        const be = (ee ? 1 : 0) | (ye ? 2 : 0) | (He ? 4 : 0);
        let Me = this.groups.get(be);
        if (!Me) {
          const ie = this.entries();
          ee && ie.push({
            binding: ri.p,
            resource: ee
          }), ye && ie.push(...ye.entries()), He && ie.push({
            binding: ri.s,
            resource: He
          }), Me = this.device.createBindGroup({
            label: `${ee||He?"terrain-":""}shader-pack-inputs${ee?"-depth":""}${ye?"-shadow":""}${He?"-mask":""}`,
            layout: jM(this.device, {
              depth: !!ee,
              sunShadow: !!ye,
              shadowMask: !!He
            }),
            entries: ie
          }), this.groups.set(be, Me)
        }
        return Me
      }
      bind(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        ee.setBindGroup(ri.f, this.bindGroupFor(ie, He, ye))
      }
    }

    function GM(ee, ie, He) {
      if (ee.gpuVersion === ie.gpuBuffersVersion) return !0;
      let ye;
      do {
        if (ye = ie.gpuBuffersVersion, !rM(ee, ie, He)) return !1
      } while (ie.gpuBuffersVersion !== ye);
      return ee.gpuVersion = ye, ee.fitInstances = 0, !0
    }

    function rM(ee, ie, He) {
      let ye = null;
      for (let Me = 0; Me < ee.slotData.length; Me++) {
        var be;
        const Ke = ee.slotData[Me],
          Ue = Ke ? ie.gpuBuffer(Ke) : He;
        if (!Ue) return !1;
        Ke && ee.layout.instanceEnds[Me] < 0 && ie.cover(Ke, Number.POSITIVE_INFINITY), ee.buffers[Me] = Ue;
        const Fe = ee.Qee[Me] + (Ke ? ie.gpuOffset(Ke) : 0);
        Fe !== (null !== (be = ye) && void 0 !== be ? be : ee.offsets)[Me] && (ye ??= ee.offsets.slice(), ye[Me] = Fe), ee.ends[Me] = Ke ? ie.gpuEnd(Ke) : Ue.size
      }
      return ye && (ee.offsets = ye), !0
    }

    function QM(ee, ie, He, ye) {
      if (ie <= ee.fitInstances) return null;
      const {
        layout: be,
        ends: Me,
        offsets: Ke,
        slotData: Ue,
        Qee: Fe
      } = ee;
      let Je = !1;
      for (let oe = 0; oe < be.buffers.length; oe++) {
        const ee = be.instanceEnds[oe];
        if (ee < 0) continue;
        const ye = (ie - 1) * be.buffers[oe].arrayStride + ee;
        if (Me[oe] - Ke[oe] < ye) return {
          index: oe,
          needed: ye
        };
        const Re = Ue[oe];
        Re && He.cover(Re, Fe[oe] + ye) && (Je = !0)
      }
      return Je && GM(ee, He, ye), ee.fitInstances = ie, null
    }
    var eK = He(38650),
      iK = He(38685);
    const HK = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      yK = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      bK = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      MK = `((vertexInputs.aPackedLightLevels >> 16u) | ${Yi.d.placed}u)`,
      KK = "u32(vertexInputs.aShaderPackItem.x)",
      UK = `${Yi.d.lifeform}u`;

    function FK(ee) {
      return "item" === ee.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const JK = "bloxdSpEnchant",
      oK = "floor(finalWorld[3].xyz)";

    function RK(ee, ie, He) {
      return "placed" === ie.kind && ee.reads[He].includes("bloxdFragmentBlockPosition")
    }

    function kK(ee, ie) {
      let [He, ye] = ee;
      return He === ie.point && ye === ie.code
    }

    function qK(ee, ie) {
      var He, ye, be;
      const Me = null === (He = ee.find((ee => ee.texture))) || void 0 === He ? void 0 : He.texture,
        Ke = null === (ye = ee.find((ee => ee.enchantTier))) || void 0 === ye ? void 0 : ye.enchantTier,
        Ue = null === (be = ee.find((ee => ee.overlay))) || void 0 === be ? void 0 : be.overlay,
        Fe = Ue ? ie.filter((ee => kK(ee, Ue))).length : 0;
      return Ue && 1 === Fe ? {
        texture: Me,
        overlay: Ue,
        enchantTier: Ke
      } : {
        texture: Me,
        enchantTier: Ke
      }
    }

    function fK(ee) {
      if ("item" === ee.kind) {
        return {
          vertexFlags: `(${KK} & 0xffffu)`,
          varying: "vPackItem",
          value: KK,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return ee.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: MK,
        varying: "vPackFlags",
        value: MK,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function TK(ee) {
      return "lifeform" === ee.kind ? UK : "0u"
    }

    function pK(ee) {
      return !!ee.BLOXD_PLUGIN_ENCHANTMENT
    }

    function XK(ee, ie) {
      const {
        enchantTier: He
      } = ie;
      return He && pK(ie.defines) && "lifeform" === ie.kind && dK(ee, "enchantTier") ? He : null
    }

    function zK(ee, ie) {
      return pK(ie.defines) && dK(ee, "enchantSpeed")
    }

    function BK(ee) {
      const {
        overlay: ie,
        defines: He
      } = ee;
      if (!ie || !He.DIFFUSE) return null;
      const ye = He.VERTEXCOLOR || He.INSTANCESCOLOR && He.INSTANCES;
      return `vec4f(${ie.colour}.rgb * uniforms.vDiffuseInfos.y${ye?" * fragmentInputs.vColor.rgb":""}, ${ie.colour}.a)`
    }
    const EK = "fragmentInputs.vPackTexture";

    function gK(ee) {
      const {
        atlas: ie,
        defines: He,
        texture: ye
      } = ee;
      if (ie || !He.DIFFUSE) return null;
      if (ye) return {
        texture: "diffuseSampler",
        ...ye
      };
      const be = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===He.DIFFUSEDIRECTUV?"vMainUV1":2===He.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== ee.kind) return be;
      if (!He.BLOXD_PLUGIN_ANIMATED) return {
        ...be,
        id: EK
      };
      const Me = Oe.b.WGSL,
        Ke = (0, Oe.zb)(Me, "uAnimStatesNum"),
        Ue = (0, Oe.bb)(Me, (0, eK.i)(Me), Ke),
        Fe = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Ke})`,
        layers: [Ue],
        uv: `vec2f(${Fe}.x, ${Fe}.y * ${Ke} - ${Ue})`,
        levelUv: Fe,
        id: EK
      }
    }

    function OK(ee, ie) {
      return "box" === ie.kind && !!ee.hooks.surface && null !== gK(ie)
    }

    function dK(ee, ie) {
      return ee.reads.fragment.includes(ie)
    }

    function WK(ee) {
      return !!ee.BLOXD_LIGHTING && !ee.BLOXD_UNLIT
    }

    function tK(ee, ie, He, ye) {
      const be = ee.filter((ee => {
        let [He, ye] = ee;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === He && ye === ie
      }));
      if (1 !== be.length) throw new Error(`A model program for shader packs has ${0===be.length?"no":"more than one"} ${ye} code before fog (lite/modelShaderPack.ts)`);
      return ee.map((ee => ee === be[0] ? [ee[0], He] : ee))
    }

    function ZK(ee, ie, He, ye) {
      const {
        hooks: be
      } = ee, {
        kind: Me,
        defines: Ke
      } = ie, Ue = [...He];
      var Fe;
      ie.atlas && be.surface && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", fy("atlasIdxIn")]), "item" === Me && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Oe.f)(Oe.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), OK(ee, ie) && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Oe.f)(Oe.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Fe = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${ky}[min(u32(${Fe}) - 1u, arrayLength(&${ky}) - 1u)], ${Fe} > 0.5);\n`)]);
      const Je = fK(ie);
      Je && (be.surface || be.light) && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Je.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Je.varying} = ${Je.value};`]);
      let oe = ye;
      if (RK(ee, ie, "fragment") && (Ue.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${oK});`]), oe = [...oe, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), dK(ee, "localPosition") && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${FK(ie)};`]), pK(Ke) && be.surface) {
        zK(ee, ie) && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const He = XK(ee, ie);
        He && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${He});`]);
        const ye = (0, Oe.mb)(Oe.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        oe = [...tK(oe, (0, iK.j)(Oe.b.WGSL), ye, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, iK.c)(JK)]]
      }
      const {
        overlay: Re
      } = ie;
      Re && BK(ie) && be.surface && (oe = oe.filter((ee => !kK(ee, Re))));
      const ke = be.light ? function(ee) {
        return "placed" === ee.kind ? {
          name: "terrain",
          engine: (0, Ii.O)(Oe.b.WGSL),
          pack: (0, Ii.jb)(Oe.b.WGSL)
        } : ee.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Ii.F)(Oe.b.WGSL),
          pack: (0, Ii.db)(Oe.b.WGSL)
        } : null
      }(ie) : null;
      if (ke && (oe = tK(oe, ke.engine, ke.pack, `${ke.name} light`), "placed" !== Me && WK(Ke))) {
        const ee = Ke.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, Oe.zb)(Oe.b.WGSL, "uEntityLightLevels") : (0, Oe.Fb)(Oe.b.WGSL, "aLightLevels");
        Ue.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Ii.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Ii.hb)(Oe.b.WGSL, ee)])
      }
      return {
        vertexCode: Ue,
        fragmentCode: oe
      }
    }

    function wK(ee, ie, He, ye) {
      return My(ee, ie, He, ye, "model")
    }
    const DK = "\t@builtin(position) position: vec4f,\n";

    function PK(ee, ie) {
      const He = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(ee)[0];
      return `${He}${ie}${ee.slice(He.length)}`
    }

    function AK(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: be
      } = ie, Me = Uy(ie, ye), {
        kind: Ke,
        defines: Ue
      } = He, Fe = function(ee, ie) {
        var He, ye, be;
        const {
          defines: Me
        } = ie, Ke = fK(ie), Ue = !!Me.FOG, Fe = pK(Me), Je = null !== (He = null === Ke || void 0 === Ke ? void 0 : Ke.enchantTier) && void 0 !== He ? He : XK(ee, ie) ? "fragmentInputs.vPackEnchantTier" : "0u", oe = "lifeform" === ie.kind && !Me.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.vertexFlags) && void 0 !== ye ? ye : TK(ie),
          vertexLocalPosition: FK(ie),
          flags: null !== (be = null === Ke || void 0 === Ke ? void 0 : Ke.flags) && void 0 !== be ? be : TK(ie),
          normal: "normalW",
          alpha: oe ? "alpha * baseColor.a" : "alpha",
          alphaOut: oe ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: Ue ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: Ue ? "1.0 - fog" : "0.0",
          enchantTier: Je,
          enchantColour: Fe ? `${JK}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: zK(ee, ie) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: dK(ee, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: BK(ie)
        }
      }(ie, He), Je = ee.textures.filter((ee => /^textureAtlas\d+$/.test(ee.name))).length, oe = He.atlas && Je > 0 ? {
        count: Je,
        layers: He.atlas.layers,
        width: He.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: ee.material.slots.has("uAnimDataPerTex") ? (ie, He) => ry(ie, He, function(ee) {
          const ie = ee.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            YR: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: ee => `uniforms.uAnimDataPerTex[${ee}]${ie}`
          }
        }(ee)) : null
      } : null, Re = "placed" === Ke ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", ke = null !== oe && void 0 !== oe ? oe : gK(He), qe = function(ee, He) {
        let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,ri.z)()}${Jy(ie,He)}${ye}${py(ee)}${Hy}${Re}${ie.code}`
      };
      let {
        vertex: fe,
        fragment: Te
      } = ee;
      const pe = zy(be, Fe);
      if (pe) {
        const ee = RK(ie, He, "vertex") ? `\tbloxdSpCell = ${oK};\n` : "";
        fe = wK(fe, HK, `${ee}${pe.slice(1)}${HK}`, "vertex")
      }
      const Xe = `${oy(ie,Me,function(ee,ie){return ie.TWOSIDEDLIGHTING?ee:`select(-(${ee}), ${ee}, fragmentInputs.frontFacing)`}(Fe.normal,Ue),Fe.flags)}${By(be,ie.strict,ie.program,ke,Fe)}`;
      Xe && (Te = wK(Te, yK, `${Xe.slice(1)}${yK}`, "surface")), Me && ie.sunShadow && !Ue.TWOSIDEDLIGHTING && (Te = wK(Te, DK, `${DK}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const ze = Oy(be);
      if (ze) {
        const ee = gy(be, WK(Ue), !0, Fe);
        Te = wK(Te, bK, `${ee}${ze.slice(1)}${bK}`, "light")
      }
      const Be = OK(ie, He) ? qy : "";
      return {
        ...ee,
        vertex: PK(fe, qe(oe, !1, Be)),
        fragment: PK(Te, qe(ke, Me))
      }
    }
    const YK = {
      name: "earthSky",
      uniqueId: -1
    };
    class VK {
      constructor(ee, ie) {
        this.resources = ee, this.epoch = ie, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const ee of this.instances.values()) ee.released = !0, this.resources.destroyBuffer(ee.buffer);
        this.instances.clear()
      }
    }

    function aK(ee) {
      return ee.failed && null !== ee.packGroup
    }
    class cK {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xM,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new aM;
        this.device = ee, this.resources = ie, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Nee = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new eM, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new gM((ee => this.modelSlot(ee).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Vi.b)("Lite: "), this.renderStates = new pM(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (ee, ie) => this.keepSteady(ee, ie), this.lists = void 0, this.slotCount = 0, this.Nee = ye, this.modelMeshes = be, this.lists = new iM(be, ye, this, this.warnOnce), this.drawDefines = new kM(ie, this.warnOnce, ((ee, ie, He) => this.programWithModel(ee, ie, He)), aK), this.vertexLayouts = new tM(ie, ee.limits, this.warnOnce), this.sceneLayout = Wi(ee), this.frameLayout = ee.createBindGroupLayout({
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
        }), this.frameBuffer = ee.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new DM(ee, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = ee.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new vM(ee, new DM(ee, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (ee, ie, He) => this.pipelineFor(ee, ie, He),
          pipelineCompiling: (ee, ie) => !ee.program.failed && !1 !== this.pipelines.get(`${ee.pipelineKey}|${ie}`),
          sceneGroup: ee => {
            const ie = He(ee);
            return ie || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), ie
          }
        }), ie.onDestroy = ee => {
          this.thinBundle.resourceDestroyed(ee)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const be = {
          order: ee,
          isTransparent: ie,
          _direct: !ie,
          bind: (ee, ie) => this.createBinding(be, ie, He, ye)
        };
        return be
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(ee, ie, He) {
        var ye;
        let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = ie, this.drawDefines.view = ie, this.thinBundle.LO(), this.writeFrameUniforms();
        const Me = null !== (ye = null === be || void 0 === be ? void 0 : be.defineFor("model")) && void 0 !== ye ? ye : 0;
        this.drawDefines.modelPackVariant = Me, be && 0 !== Me && (this.packInputs ??= new NM(this.device, be.textureLayers(), this.sunShadow), this.packInputs.write(be, ie.eye, be.GT())), this.lists.clear(), this.slotCount = 0;
        const Ke = ee.activeCamera;
        this.Nee.select(Ke, this.keepSteadyBase), this.modelMeshes.select(Ke, ie), He && this.pushEarthSky(He), this.lists.collect(ee), this.thinBundle.ZR(), this.uploadMeshSlots()
      }
      pushDraws(ee, ie, He, ye, be, Me) {
        let Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Ue = Me.length;
        for (let Fe = 0; Fe < He; Fe++) {
          const He = ie[Fe];
          let Ue = this.retainedDraw(ee, He, ye, be);
          if (void 0 === Ue && (Ue = this.drawFor(ee, He, ye, be), this.retain(He, Ue)), Ue) {
            const ee = He.owner,
              ie = Ke ? Ke[Fe] : -1;
            Ue.slotOffset = ie < 0 ? this.writeMeshSlot(ee.getWorldMatrix().m, ee.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[ie], 16 * ie), Me.push(Ue)
          }
        }
        return Me.length - Ue
      }
      bundleDraws(ee, ie, He) {
        let ye = 0;
        for (const be of ie) {
          let ie = this.retainedDraw(ee, be, He, !1);
          const Me = void 0 !== ie;
          if (void 0 === ie && (ie = this.drawFor(ee, be, He, !1), this.retain(be, ie)), ie) {
            const ee = be.owner,
              He = this.thinBundle.add(be, ie, ee.getWorldMatrix().m, ee.visibility);
            Me && this.steadyFrom(be, ie, He), ye++
          }
        }
        return ye
      }
      steadyFrom(ee, ie, He) {
        const ye = ee.owner,
          be = this.Nee.base(ye),
          Me = ye.material,
          {
            drawState: Ke,
            instance: Ue
          } = ie.inputs.retained;
        if (!be || !Me || 1 !== ee.parts.materials.length || AM(ee) !== Me) return;
        const Fe = be.steady ??= {
          unit: ee,
          material: Me,
          visibility: 1,
          draw: ie,
          record: He,
          drawState: Ke,
          instance: Ue,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Fe.unit = ee, Fe.material = Me, Fe.visibility = ye.visibility, Fe.draw = ie, Fe.record = He, Fe.drawState = Ke, Fe.instance = Ue, Fe.bindGroup = Ue.bindGroup, Fe.gpuVersion = this.resources.gpuBuffersVersion, Fe.fitInstances = ie.inputs.fitInstances, Fe.worldFlag = ye.getWorldMatrix().updateFlag, Fe.handedFrame = this.frame
      }
      keepSteady(ee, ie) {
        const He = ee.steady;
        if (He.handedFrame !== this.frame - 1 || (this.frame + He.phase) % 8 === 0) return !1;
        const ye = ee.mesh,
          {
            unit: be,
            draw: Me,
            instance: Ke,
            drawState: Ue
          } = He,
          Fe = ye.forcedInstanceCount || ye.Hie;
        if (!ye.isVisible || ye.nMe || ye.visibility !== He.visibility || 0 === (ye.layerMask & ie.layerMask) || ye.material !== He.material || 0 !== ye.renderingGroupId || ye.hasVertexAlpha || !this.drawDefines.definesHold(Ue, be, Ue.instancing) || He.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Me.inputs, be, Ue.instancing, Me.program) || Me.program.failed || Ke.released || Fe <= 0 || Fe > He.fitInstances) return !1;
        if (Ke.frame !== this.frame && this.bindMaterial(Ke, this.modelUniforms.refreshModelUniforms(ye.Xx(), Ke, Ke.model, this.view)), !Ke.bindable || Ke.bindGroup !== He.bindGroup) return !1;
        const Je = ye.computeWorldMatrix(),
          oe = Je.updateFlag !== He.worldFlag;
        return He.worldFlag = Je.updateFlag, Me.instances = Fe, this.thinBundle.addAgain(He.record, Me, oe ? Je.m : null, He.visibility), He.handedFrame = this.frame, this.Nee.drawn++, !0
      }
      retainedDraw(ee, ie, He, ye) {
        const be = this.inputs.get(ie),
          Me = null === be || void 0 === be ? void 0 : be.retained;
        if (!be || !Me) return;
        const {
          drawState: Ke,
          program: Ue,
          instance: Fe,
          instancing: Je
        } = Me, oe = ie.owner;
        if (KM(oe) !== Je) return;
        const Re = this.instanceCount(oe, Je);
        if (Re <= 0) return null;
        if (Fe.released || Ue.failed || Ke.program !== Ue || !this.drawDefines.programCurrent(Ke, ie, Je, He) || !this.inputsStamped(be, ie, Je, Ue) || oe.isUnIndexed !== Me.unIndexed || this.indexKey(ie) !== Me.indexData) return;
        if (Me.indexBuffer && Me.gpuVersion !== this.resources.gpuBuffersVersion) {
          const ee = this.resources.gpuBuffer(Me.indexData);
          if (!ee) return;
          Me.indexBuffer = ee, Me.gpuVersion = this.resources.gpuBuffersVersion
        }
        let ke = !1;
        if (Fe.frame !== this.frame && (ke = this.modelUniforms.refreshModelUniforms(ee, Fe, Fe.model, this.view)), !this.bindMaterial(Fe, ke) || !this.withGpuBuffers(be) || !this.instanceBuffersFit(oe.name, be, Re)) return null;
        const qe = this.makeDraw(Ue, be, this.renderStates.renderState(Ke.model, oe, ye, be.state), Fe, Re);
        return this.setRange(qe, ie, Me.indexBuffer, Me.indexData), qe
      }
      retain(ee, ie) {
        const He = this.drawDefines.drawStates.get(ee);
        if (!ie || !He || He.program !== ie.program) {
          const ie = this.inputs.get(ee);
          return void(ie && (ie.retained = null))
        }
        const ye = ee.owner,
          be = He.instancing,
          Me = this.indexKey(ee),
          Ke = ie.inputs.retained;
        Ke ? (Ke.drawState = He, Ke.instancing = be, Ke.program = ie.program, Ke.instance = ie.material, Ke.indexData = Me, Ke.unIndexed = ye.isUnIndexed, Ke.indexBuffer = ie.indexBuffer, Ke.gpuVersion = this.resources.gpuBuffersVersion) : ie.inputs.retained = {
          drawState: He,
          instancing: be,
          program: ie.program,
          instance: ie.material,
          indexData: Me,
          unIndexed: ye.isUnIndexed,
          indexBuffer: ie.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(ee, ie, He, ye) {
        const be = ie.owner,
          Me = AM(ie);
        if (!Me) return null;
        const Ke = Me.getClassName();
        let Ue = null;
        if (function(ee) {
            return "LinesMesh" === ee.getClassName()
          }(be)) {
          if (! function(ee) {
              return "ShaderMaterial" === ee.getClassName() && "color" === ee.shaderPath
            }(Me)) return this.warnOnce(`lines:${Ke}`, `A LinesMesh with a ${Ke} is not drawn yet (${Me.name})`), null;
          Ue = be
        } else if ("StandardMaterial" !== Ke && "LiteMaterial" !== Ke) return this.warnOnce(`class:${Ke}`, `${Ke} is not drawn yet (${Me.name})`), null;
        const Fe = KM(be),
          Je = this.instanceCount(be, Fe);
        if (Je <= 0) return null;
        const oe = Ue ? this.lineProgramFor(be, He, Fe) : this.drawDefines.programFor(ee, ie, Me, He, Fe);
        if (!oe || oe.failed) return null;
        const Re = Ue ? null : this.drawDefines.drawStates.get(ie).model,
          ke = Re ? this.modelInstance(Re, oe) : this.materialInstance(be, oe);
        let qe = !1;
        if (ke.frame !== this.frame && (Ue ? ze(ke.ubo, Ue) : qe = this.modelUniforms.refreshModelUniforms(ee, ke, ke.model, this.view)), !this.bindMaterial(ke, qe)) return null;
        const fe = this.meshInputs(ie, oe, Fe);
        if (!fe || !this.instanceBuffersFit(be.name, fe, Je)) return null;
        const Te = this.indexKey(ie);
        let pe = null;
        if (Te && !be.isUnIndexed && (pe = this.resources.gpuBuffer(Te), !pe)) return null;
        const Xe = this.renderStates.renderState(null !== Re && void 0 !== Re ? Re : Me, be, ye, fe.state, Ue ? "line-list" : "triangle-list"),
          Be = this.makeDraw(oe, fe, Xe, ke, Je);
        return this.setRange(Be, ie, pe, Te), Be
      }
      indexKey(ee) {
        const ie = oM(ee);
        return ie ? this.resources.modelIndex(ie) : null
      }
      setRange(ee, ie, He, ye) {
        He && (ee.indexBuffer = He, ee.indexFormat = this.resources.indexFormat(ye));
        const be = 4 * ie.range + (He ? 0 : 2);
        ee.unit = ie, ee.first = ie.parts.zp[be], ee.count = ie.parts.zp[be + 1]
      }
      makeDraw(ee, ie, He, ye, be) {
        ie.state !== He && (ie.state = He, ie.pipelineKey = `${ee.id}|${ie.layout.key}|${He.key}`, ie.pipeline = null);
        const Me = ie.draw ??= {
          program: ee,
          inputs: ie,
          pipelineKey: "",
          layout: ie.layout,
          state: He,
          material: ye,
          slotOffset: 0,
          vertexBuffers: ie.buffers,
          vertexOffsets: ie.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: be,
          unit: null
        };
        return Me.program = ee, Me.pipelineKey = ie.pipelineKey, Me.state = He, Me.material = ye, Me.vertexOffsets = ie.offsets, Me.indexBuffer = null, Me.instances = be, Me
      }
      instanceCount(ee, ie) {
        switch (ie) {
          case "thin":
            return ee.forcedInstanceCount || ee.Hie;
          case "instanced":
            return this.prepareInstances(ee);
          case "none":
            return 1
        }
      }
      prepareInstances(ee) {
        const ie = function(ee, ie) {
          const He = ie._userInstancedBuffersStorage,
            ye = ee.batchUploads.get(ie);
          if (ye) {
            var be;
            if (ye.layout === (null !== (be = null === He || void 0 === He ? void 0 : He.interleavedKinds) && void 0 !== be ? be : null)) return ye;
            ye.release()
          }
          return new qi(ee, ie, He)
        }(this.resources, ee);
        return ie.frame !== this.frame && ie.pack(ee, this.modelMeshes.instanceBatch(ee), this.modelMeshes.worlds, this.frame), ie.count
      }
      programWithModel(ee, ie, He) {
        const ye = this.modelSlot(ee),
          be = qM(ye, ee, He),
          Me = this.drawDefines.modelPackKind(ee),
          Ke = Me ? function(ee, ie, He, ye) {
            const be = (0, te.y)(ee, de.k.name),
              Me = [];
            for (const {
                feature: Fe,
                state: Je,
                active: oe
              }
              of ee.features) {
              var Ke, Ue;
              const ee = oe ? null === (Ke = (Ue = (0, ai.e)(Fe)).Zf) || void 0 === Ke ? void 0 : Ke.call(Ue, Je) : void 0;
              ee && Me.push(ee)
            }
            return {
              kind: ie,
              atlas: null !== be && void 0 !== be && be.active ? (0, de.e)(be.state) : null,
              defines: He,
              ...qK(Me, ye)
            }
          }(ee, Me, ie, ye.fragmentCode) : null;
        if (Ke && function(ee) {
            const ie = ee.defines;
            return (null === ee.atlas || !!ie.DIFFUSE && 1 === ie.DIFFUSEDIRECTUV) && !!ie.NORMAL && !ie.REFLECTION && !ie.EMISSIVEASILLUMINATION && !ie.LINKEMISSIVEWITHDIFFUSE
          }(Ke)) {
          const He = this.modelPackProgram(ee, ie, `${be}#${Me}#sp${this.drawDefines.modelPackVariant}`, ye, Ke);
          if (He && !He.failed) return He
        }
        const Ue = this.programs.get(be);
        if (Ue || this.unbuildable.has(be)) return null !== Ue && void 0 !== Ue ? Ue : null;
        let Fe;
        try {
          Fe = Yb({
            defines: FM(ie),
            vertexCode: ye.vertexCode,
            fragmentCode: ye.fragmentCode,
            pluginUniforms: ye.pluginUniforms
          })
        } catch (Je) {
          return this.unbuildable.add(be), this.warnOnce(`build:${be}`, `could not build a program for ${ee.name}: ${String(Je)}`), null
        }
        return this.createProgram(be, Fe, "standard")
      }
      modelPackProgram(ee, ie, He, ye, be) {
        const Me = this.programs.get(He);
        if (Me || this.unbuildable.has(He)) return null !== Me && void 0 !== Me ? Me : null;
        const Ke = this.drawDefines.modelPackVariant;
        let Ue;
        try {
          const ee = function(ee) {
              return (0, Qi.b)(ee, "model")
            }(Ke),
            He = ZK(ee, be, ye.vertexCode, ye.fragmentCode);
          Ue = AK(Yb({
            defines: FM(ie),
            ...He,
            pluginUniforms: ye.pluginUniforms
          }), ee, be, !!this.sunShadow)
        } catch (oe) {
          return this.unbuildable.add(He), this.warnOnce(`build:${He}`, `could not build a shader pack program for ${ee.name}, which draws without the pack: ${String(oe)}`), null
        }
        const Fe = IM(Ke, !!this.sunShadow),
          Je = {
            group: this.packInputs.bindGroupFor(null, Fe),
            layout: jM(this.device, {
              depth: !1,
              sunShadow: Fe
            })
          };
        return this.createProgram(He, Ue, function(ee) {
          return `standard-sp${ee}`
        }(Ke), Je)
      }
      lineProgramFor(ee, ie, He) {
        const ye = Xe(ee, He, ie, this.view);
        let be = this.linePrograms.get(ye);
        var Me;
        return be || (be = this.createProgram(`lines#${ye}`, (Me = function(ee) {
          const ie = new Map;
          for (let He = 0; He < Je.length; He++) ee & 1 << He && ie.set(Je[He], !0);
          return ie
        }(ye), xb({
          defines: Me,
          vertex: ab,
          fragment: cb,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(ye, be)), be
      }
      createProgram(ee, ie, He) {
        var ye;
        let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Me = this.nextProgramId++,
          Ke = `${He}-${Me}`,
          Ue = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Fe = [{
            binding: 0,
            visibility: Ue,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Re of ie.textures) Fe.push({
          binding: Re.binding,
          visibility: Ue,
          texture: {
            viewDimension: Re.dimension
          }
        }), Fe.push({
          binding: Re.samplerBinding,
          visibility: Ue,
          sampler: {}
        });
        const Je = this.device.createBindGroupLayout({
            label: Ke,
            entries: Fe
          }),
          oe = {
            key: ee,
            id: Me,
            kind: He,
            program: ie,
            vertex: this.device.createShaderModule({
              label: `${Ke}-vertex`,
              code: ie.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Ke}-fragment`,
              code: ie.fragment
            }),
            materialLayout: Je,
            pipelineLayout: this.device.createPipelineLayout({
              label: Ke,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Je, ...be ? [be.layout] : []]
            }),
            packGroup: null !== (ye = null === be || void 0 === be ? void 0 : be.group) && void 0 !== ye ? ye : null,
            failed: !1
          };
        return this.programs.set(ee, oe), oe
      }
      writeFrameUniforms() {
        const ee = this.frameUniforms;
        EM(this.view, ee), this.device.queue.writeBuffer(this.frameBuffer, 0, ee)
      }
      materialInstance(ee, ie) {
        let He = this.materials.get(ee);
        if (!He) {
          const ie = new Map;
          this.materials.set(ee, ie);
          const {
            resources: ye,
            materials: be
          } = this;
          ee.Bx.addOnce((() => {
            for (const ee of ie.values()) ee.released = !0, ye.destroyBuffer(ee.buffer);
            be.delete(ee)
          })), He = ie
        }
        let ye = He.get(ie.key);
        return ye || (ye = this.newMaterialInstance(ee, null, ie), He.set(ie.key, ye)), ye
      }
      modelInstance(ee, ie) {
        const He = this.modelSlot(ee);
        let ye = He.instances.get(ie.key);
        return ye || (ye = this.newMaterialInstance(ee, ee, ie), He.instances.set(ie.key, ye)), ye
      }
      modelSlot(ee) {
        var ie;
        let He = ee.gpu[we.e.lite];
        return (null === (ie = He) || void 0 === ie ? void 0 : ie.epoch) !== this.resources.epoch && (He = new VK(this.resources, this.resources.epoch), ee.gpu[we.e.lite] = He), He
      }
      newMaterialInstance(ee, ie, He) {
        const ye = He.program.material.floats,
          be = new Float32Array(ye),
          Me = new Map;
        return {
          owner: ee,
          model: ie,
          program: He,
          data: be,
          uploaded: new Float32Array(ye).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${ee.name}-uniforms`,
            size: Math.max(16, 4 * ye),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Me,
          ubo: new BM(He.program.material.slots, be, Me),
          bindGroup: null,
          bound: new Array(2 * He.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(ee) {
        var ie;
        const He = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: mb + lb,
            fragment: mb + Sb,
            attributes: [],
            material: ub,
            textures: []
          }, "earthSky"),
          ye = this.earthSkyUniforms ??= this.newMaterialInstance(YK, null, He);
        this.earthSkyFrom !== ee && (this.earthSkyFrom = ee, ye.data.fill(0)), rb(ye.ubo, ee, this.view);
        const be = this.vertexInputs(He, YK, "earthSky", He, null);
        if (He.failed || !be || !this.bindMaterial(ye, !1)) return;
        const Me = null !== (ie = be.state) && void 0 !== ie ? ie : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Ke = this.makeDraw(He, be, Me, ye, 1);
        Ke.count = Lb.length;
        const Ue = Qb(ee, this.view);
        Ke.slotOffset = this.writeMeshSlot(Ue, 1), this.lists.skyDraws.push(Ke)
      }
      uploadIfChanged(ee) {
        const {
          data: ie,
          uploaded: He
        } = ee;
        for (let ye = 0; ye < ie.length; ye++)
          if (ie[ye] !== He[ye]) return He.set(ie), void this.device.queue.writeBuffer(ee.buffer, 0, ie)
      }
      bindMaterial(ee, ie) {
        return ee.frame !== this.frame && (ee.frame = this.frame, ie || this.uploadIfChanged(ee), ee.bindable = this.bindTextures(ee)), ee.bindable
      }
      bindTextures(ee) {
        const {
          program: ie,
          bound: He
        } = ee, ye = ie.program.textures;
        let be = !ee.bindGroup,
          Me = !0;
        for (let Ke = 0; Ke < ye.length; Ke++) {
          const ie = ee.textures.get(ye[Ke].name),
            Ue = ie ? this.resources.boundTexture(ie) : null;
          Ue ? He[2 * Ke] === Ue.view && He[2 * Ke + 1] === Ue.sampler || (He[2 * Ke] = Ue.view, He[2 * Ke + 1] = Ue.sampler, be = !0) : (ie || ee.ubo.expected.has(ye[Ke].name) || this.warnOnce(`texture:${ee.owner.name}:${ye[Ke].name}`, `${ee.owner.name} has no ${ye[Ke].name}`), Me = !1)
        }
        if (!Me) return be && (ee.bindGroup = null), !1;
        if (be) {
          const be = [{
            binding: 0,
            resource: {
              buffer: ee.buffer
            }
          }];
          for (let ee = 0; ee < ye.length; ee++) be.push({
            binding: ye[ee].binding,
            resource: He[2 * ee]
          }), be.push({
            binding: ye[ee].samplerBinding,
            resource: He[2 * ee + 1]
          });
          ee.bindGroup = this.device.createBindGroup({
            label: `${ee.owner.name}-material`,
            layout: ie.materialLayout,
            entries: be
          })
        }
        return !0
      }
      writeMeshSlot(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, ee, ie, He), this.slotCount++ * Rb
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(ee, ie, He, ye, be) {
        let Me = this.inputs.get(ee);
        if (!Me || Me.program !== ye || !ZM(ie, Me, this.resources, be)) {
          var Ke;
          if (Me = null !== (Ke = this.vertexLayouts.resolveInputs(ie, He, ye, be)) && void 0 !== Ke ? Ke : void 0, !Me) return null;
          this.inputs.set(ee, Me)
        }
        return this.withGpuBuffers(Me)
      }
      meshInputs(ee, ie, He) {
        const ye = this.inputs.get(ee);
        if (ye && this.inputsStamped(ye, ee, He, ie)) return this.withGpuBuffers(ye);
        const be = ee.owner,
          Me = oM(ee),
          Ke = this.vertexInputs(ee, be, be.name, ie, Me);
        return Ke && (Ke.geometry = RM(ee), Ke.instanceLayout = this.drawDefines.instanceLayout(be, He)), Ke
      }
      inputsStamped(ee, ie, He, ye) {
        return function(ee, ie, He, ye) {
          return ee.program === He && ee.geometry === RM(ie) && ee.instanceLayout === ye
        }(ee, ie, ye, this.drawDefines.instanceLayout(ie.owner, He))
      }
      withGpuBuffers(ee) {
        return GM(ee, this.resources, this.zeroBuffer) ? ee : null
      }
      instanceBuffersFit(ee, ie, He) {
        const ye = QM(ie, He, this.resources, this.zeroBuffer);
        if (ye) {
          const be = ie.ends[ye.index] - ie.offsets[ye.index] + ie.Qee[ye.index];
          return this.warnOnce(`overrun:${ee}`, `${ee} draws ${He} instances from a ${be}-byte buffer (${ye.needed} needed)`), !1
        }
        return !0
      }
      createBinding(ee, ie, He, ye) {
        const be = `${ie._colorFormat}|${ie._depthStencilFormat}|${ie._depthCompare}|${ie._sampleCount}`,
          Me = Pi(this.device, ie);
        if (ee === this.skyLastRenderable) {
          let He = null;
          return {
            renderable: ee,
            pipeline: Me,
            draw: ee => He ? this.drawSky(ee, ie, be, He) : 0,
            update: ee => {
              He = ee
            }
          }
        }
        return {
          renderable: ee,
          pipeline: Me,
          draw: ee => (ye ? ye.execute(ee, ie, be) : 0) + this.drawList(ee, ie, be, He)
        }
      }
      drawSky(ee, ie, He, ye) {
        const be = this.lists.skyDraws,
          Me = be.length > 0;
        if (Me) {
          var Ke;
          const He = (null !== (Ke = ie._depthCompare) && void 0 !== Ke ? Ke : ti).startsWith("greater") ? 0 : 1;
          ee.setViewport(0, 0, ye.targetWidth, ye.targetHeight, He, He)
        }
        const Ue = this.drawList(ee, ie, He, be);
        return Me && ee.setViewport(0, 0, ye.targetWidth, ye.targetHeight, 0, 1), Ue
      }
      drawList(ee, ie, He, ye) {
        let be = 0;
        const Me = this.binder;
        Me.reset();
        for (const Ke of ye) {
          const ye = this.pipelineFor(Ke, ie, He);
          ye && (Me.bind(ee, Ke, ye, this.meshSlots.bindGroup, Ke.slotOffset), Ke.indexBuffer ? ee.drawIndexed(Ke.count, Ke.instances, Ke.first, 0, 0) : ee.draw(Ke.count, Ke.instances, Ke.first, 0), be++)
        }
        return be
      }
      pipelineFor(ee, ie, He) {
        var ye, be;
        if (ee.program.failed) return null;
        const Me = ee.inputs;
        if (Me.pipeline && Me.pipelineTarget === He) return Me.pipeline;
        const Ke = `${ee.pipelineKey}|${He}`,
          Ue = this.pipelines.get(Ke);
        if (void 0 !== Ue) return Ue && (Me.pipeline = Ue, Me.pipelineTarget = He), Ue || null;
        this.pipelines.set(Ke, null);
        const {
          program: Fe,
          layout: Je,
          state: oe
        } = ee, Re = {
          label: `standard-${Fe.id}`,
          layout: Fe.pipelineLayout,
          vertex: {
            module: Fe.vertex,
            entryPoint: "main",
            buffers: Je.buffers
          },
          fragment: Bi({
            module: Fe.fragment,
            entryPoint: "main"
          }, ie, oe.blend, oe.colourWrite),
          depthStencil: ie._depthStencilFormat ? {
            format: ie._depthStencilFormat,
            depthCompare: null !== (ye = null !== (be = oe.depthCompare) && void 0 !== be ? be : ie._depthCompare) && void 0 !== ye ? ye : ti,
            depthWriteEnabled: oe.depthWrite,
            depthBias: oe.depthBias,
            depthBiasSlopeScale: oe.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: ie._sampleCount
          },
          primitive: {
            topology: oe.topology,
            frontFace: oe.frontFace,
            cullMode: oe.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Re).then((ee => {
          this.compiling--, this.pipelines.set(Ke, ee)
        }), (ee => {
          this.compiling--, this.reportFailure(Fe, Ke, ee)
        })), null
      }
      forEachSunShadowCaster(ee) {
        const ie = this.caster,
          He = (He, ye, be) => {
            const Me = He.unit && function(ee) {
              const ie = ee.material.model;
              return null !== ie && (ie.lifeform || ie.item) && ie.castsSunShadow && "triangle-list" === ee.state.topology
            }(He) ? oM(He.unit) : null;
            if (!Me) return;
            const Ke = He.unit.owner;
            switch (ie.geometry = Me, ie.skip = Ke.noSunShadowVertices, ie.indexed = null !== He.indexBuffer, ie.first = He.first, ie.count = He.count, ie.xR = ye, ie.worldAt = be, ie.instances = null, ie.instanceCount = 1, ie.thin = !1, KM(Ke)) {
              case "thin": {
                const ee = Ke._thinInstanceDataStorage.matrixData;
                if (!ee) return;
                ie.instances = ee, ie.instanceCount = Math.min(He.instances, ee.length / 16), ie.thin = !0;
                break
              }
              case "instanced": {
                const ee = this.resources.batchUploads.get(Ke);
                if (!ee || ee.frame !== this.frame || !this.writeBatchCasters(ee)) return;
                break
              }
            }
            ee(ie)
          };
        for (const ye of this.lists.opaqueDraws) He(ye, this.meshSlots.data, ye.slotOffset / 4);
        this.thinBundle.forEachDrawn(He)
      }
      writeBatchCasters(ee) {
        const {
          caster: ie
        } = this, He = ee.packedMatrices, ye = ee.count;
        ie.instances = He, ie.instanceCount = ye;
        let be = -1;
        for (let Me = 0; Me < ye; Me++) {
          const ie = xK(ee.packedRowMesh(Me));
          ie && be < 0 ? (this.casterWorlds.length < 16 * ye && (this.casterWorlds = new Float32Array(He.length)), this.casterWorlds.set(He.subarray(0, 16 * Me)), be = Me) : !ie && be >= 0 && (this.casterWorlds.set(He.subarray(16 * Me, 16 * Me + 16), 16 * be), be++)
        }
        return be >= 0 && (ie.instances = this.casterWorlds, ie.instanceCount = be), ie.instanceCount > 0
      }
      async reportFailure(ee, ie, He) {
        const ye = [];
        let be = !0;
        for (const [Me, Ke] of [
            ["vertex", ee.vertex],
            ["fragment", ee.fragment]
          ]) {
          const ee = await Ke.getCompilationInfo();
          for (const ie of ee.messages) be &&= "error" !== ie.type, ye.push(`${Me}:${ie.lineNum}:${ie.linePos} ${ie.type}: ${ie.message}`)
        }
        if (be && !ee.packGroup) return this.pipelines.set(ie, !1), console.error(`Lite: pipeline ${ie} failed`, He), void oi(this.device, "mesh", ee.kind, He);
        ee.failed || (ee.failed = !0, console.error(`Lite: program ${ee.id} failed`, He, ye.join("\n"), {
          program: ee.program,
          key: ee.key
        }), oi(this.device, "mesh", ee.kind, He, be ? null : ye[0]))
      }
    }

    function xK(ee) {
      var ie, He;
      const ye = null === (ie = ee.pC) || void 0 === ie || null === (He = ie.aShaderPackItem) || void 0 === He ? void 0 : He.x;
      return void 0 !== ye && 0 !== (ye & Yi.h)
    }
    var LK = He(44873),
      CK = He(44880),
      vK = He(44882),
      uK = He(44842);
    const mK = [0, 3, 1, 4, 2, 5];

    function lK(ee, ie, He, ye, be) {
      const Me = He[0].width;
      try {
        return be ? function(ee, ie, He) {
          const ye = (0, uK.d)(ee, He, He, 6);
          for (let be = 0; be < 6; be++)(0, uK.g)(ee, ye, be, ie[mK[be]], {
            invertY: !1
          });
          return ye.texture
        }(ee, He, Me) : function(ee, ie, He, ye) {
          const be = ee.createTexture({
            label: "sink-cube",
            size: {
              width: He,
              height: He,
              depthOrArrayLayers: 6
            },
            format: ye,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Me = 0; Me < 6; Me++) ee.queue.copyExternalImageToTexture({
            source: ie[mK[Me]]
          }, {
            texture: be,
            origin: {
              x: 0,
              y: 0,
              z: Me
            }
          }, {
            width: He,
            height: He
          });
          return be
        }(ie, He, Me, 1 === ye ? "r8unorm" : "rgba8unorm")
      } finally {
        SK(He)
      }
    }

    function SK(ee) {
      for (const ie of null !== ee && void 0 !== ee ? ee : []) null === ie || void 0 === ie || ie.close()
    }
    async function nK(ee) {
      const ie = [],
        He = [];
      if (await Promise.all(ee.map(((ee, ye) => (ie[ye] = null, ee.then((ee => {
          ie[ye] = ee
        }), (ee => {
          He.push(ee)
        })))))), He.length > 0) throw SK(ie), He[0];
      return ie
    }
    class jK {
      constructor(ee) {
        this.bk = ee, this.starts = [], this.lengths = [], this.used = 0, ee > 0 && (this.starts.push(0), this.lengths.push(ee))
      }
      allocate(ee) {
        const {
          starts: ie,
          lengths: He
        } = this;
        for (let ye = 0; ye < ie.length; ye++) {
          if (He[ye] < ee) continue;
          const be = ie[ye];
          return He[ye] === ee ? (ie.splice(ye, 1), He.splice(ye, 1)) : (ie[ye] += ee, He[ye] -= ee), this.used += ee, be
        }
        return -1
      }
      free(ee, ie) {
        this.used -= ie;
        const He = Math.min(ee + ie, this.bk);
        He > ee && this.release(ee, He - ee)
      }
      grow(ee) {
        const ie = this.bk;
        this.bk = ee, this.release(ie, ee - ie)
      }
      truncate(ee) {
        const {
          starts: ie,
          lengths: He
        } = this;
        for (let ye = ie.length - 1; ye >= 0 && ie[ye] + He[ye] > ee; ye--) ie[ye] >= ee ? (ie.splice(ye, 1), He.splice(ye, 1)) : He[ye] = ee - ie[ye];
        this.bk = ee
      }
      release(ee, ie) {
        const {
          starts: He,
          lengths: ye
        } = this;
        let be = 0,
          Me = He.length;
        for (; be < Me;) {
          const ie = be + Me >> 1;
          He[ie] < ee ? be = ie + 1 : Me = ie
        }
        const Ke = be,
          Ue = Ke > 0 && He[Ke - 1] + ye[Ke - 1] === ee,
          Fe = Ke < He.length && ee + ie === He[Ke];
        Ue && Fe ? (ye[Ke - 1] += ie + ye[Ke], He.splice(Ke, 1), ye.splice(Ke, 1)) : Ue ? ye[Ke - 1] += ie : Fe ? (He[Ke] = ee, ye[Ke] += ie) : (He.splice(Ke, 0, ee), ye.splice(Ke, 0, ie))
      }
    }
    const sK = 256;
    class IK {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = ee, this.onReplaced = ie, this.mergeGap = He, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.zp = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const be = Math.max(sK, Math.ceil(ye / sK) * sK);
        this.bytes = new Uint8Array(be), this.words = new Uint32Array(this.bytes.buffer), this.zp = new jK(be / sK)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(ee) {
        return Math.max(1, Math.ceil(ee / sK)) * sK
      }
      allocate(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee;
        const ye = IK.slotBytes(ee),
          be = ye / sK;
        let Me = this.zp.allocate(be);
        Me < 0 && (this.grow(this.zp.bk + be), Me = this.zp.allocate(be));
        const Ke = Me * sK;
        return this.growTo(Ke + Math.max(He, ye)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Ke, Ke + ye), ie && this.bytes.set(new Uint8Array(ie.buffer, ie.byteOffset, Math.min(ie.byteLength, ye)), Ke), this.markDirty(Ke, Ke + ye), Ke
      }
      growTo(ee) {
        const ie = Math.ceil(ee / sK);
        ie > this.zp.bk && this.grow(ie)
      }
      free(ee, ie) {
        this.freed.push(ee, ie)
      }
      write(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (ye <= 0) return;
        ye <= 1024 && 0 === (3 & (ee | He | ye)) ? this.copyWords(ee >> 2, ie.buffer, He >> 2, ye >> 2) : this.bytes.set(new Uint8Array(ie.buffer, He, ye), ee);
        let Me = ee + ye;
        if (be) {
          const ie = ee + 4 * Math.ceil(ye / 4);
          this.bytes.fill(0, Me, ie), Me = ie
        }
        this.markDirty(ee, Me)
      }
      copyWords(ee, ie, He, ye) {
        let be = this.sourceWords.get(ie);
        be || (be = new Uint32Array(ie, 0, ie.byteLength >> 2), this.sourceWords.set(ie, be));
        const Me = this.words;
        for (let Ke = 0; Ke < ye; Ke++) Me[ee + Ke] = be[He + Ke]
      }
      move(ee, ie, He) {
        this.bytes.copyWithin(ie, ee, ee + He), this.markDirty(ie, ie + He)
      }
      flush() {
        for (const ie of this.retired) this.onReplaced(ie), ie.destroy();
        this.retired.length = 0;
        const ee = this.dirtyStarts.length;
        if (ee > 0) {
          const {
            dirtyStarts: ie,
            dirtyEnds: He,
            order: ye
          } = this;
          ye.length = ee;
          for (let Ue = 0; Ue < ee; Ue++) ye[Ue] = Ue;
          ee > 1 && ye.sort(((ee, He) => ie[ee] - ie[He]));
          const be = this.mergeGap;
          let Me = ie[ye[0]],
            Ke = He[ye[0]];
          for (let Ue = 1; Ue < ee; Ue++) {
            const ee = ye[Ue];
            ie[ee] - Ke <= be ? Ke = Math.max(Ke, He[ee]) : (this.send(Me, Ke), Me = ie[ee], Ke = He[ee])
          }
          this.send(Me, Ke), ie.length = 0, He.length = 0
        }
        this.holding = !1
      }
      ZR() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const ee = this.freed;
        for (let ie = 0; ie < ee.length; ie += 2) this.zp.free(ee[ie] / sK, ee[ie + 1] / sK);
        ee.length = 0
      }
      send(ee, ie) {
        this.device.queue.writeBuffer(this.gpu, ee, this.bytes.buffer, ee, ie - ee);
        for (const He of this.replaced) {
          const ye = Math.min(ie, He.size);
          ye > ee && this.device.queue.writeBuffer(He, ee, this.bytes.buffer, ee, ye - ee)
        }
      }
      markDirty(ee, ie) {
        ee &= -4, ie = ie + 3 & -4, this.holding ? (this.dirtyStarts.push(ee), this.dirtyEnds.push(ie)) : this.send(ee, ie)
      }
      grow(ee) {
        const ie = this.zp.bk,
          He = Math.max(2 * ie, ee),
          ye = new Uint8Array(He * sK);
        ye.set(this.bytes);
        const be = this.gpu;
        this.gpu = this.createGpu(ye.byteLength), this.bytes = ye, this.words = new Uint32Array(ye.buffer), this.zp.grow(He), be && (this.replaced.push(be), this.onReplaced(be)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, ie * sK)
      }
      createGpu(ee) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: ee,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function hK(ee) {
      return Array.isArray(ee) ? new Float32Array(ee) : ee
    }

    function NK(ee, ie, He, ye, be) {
      const Me = se(be),
        Ke = Math.min(be, ye.byteLength);
      if (Me === Ke && ye.byteOffset % 4 === 0) return void ee.queue.writeBuffer(ie, He, ye.buffer, ye.byteOffset, Me);
      const Ue = new Uint8Array(Me);
      Ue.set(new Uint8Array(ye.buffer, ye.byteOffset, Ke)), ee.queue.writeBuffer(ie, He, Ue)
    }

    function GK(ee, ie, He) {
      const ye = "linear",
        be = "nearest";
      let Me = be,
        Ke = be,
        Ue = "nearest",
        Fe = !ie;
      switch (ee) {
        case 11:
          Me = ye, Ke = ye;
          break;
        case 3:
          Me = ye, Ke = ye, Ue = ie ? "linear" : "nearest";
          break;
        case 8:
          Ue = ie ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Ke = ye;
          break;
        case 6:
          Ke = ye, Ue = ie ? "linear" : "nearest";
          break;
        case 7:
          Ke = ye, Fe = !0;
          break;
        case 9:
          Me = ye;
          break;
        case 10:
          Me = ye, Ue = ie ? "linear" : "nearest";
          break;
        case 2:
          Me = ye, Ke = ye, He > 1 ? (Ue = "linear", Fe = !1) : Fe = !0;
          break;
        case 12:
          Me = ye, Fe = !0;
          break;
        default:
          Fe = !0
      }
      return He > 1 && !Fe ? {
        magFilter: ye,
        minFilter: ye,
        mipmapFilter: "linear",
        maxAnisotropy: He
      } : {
        magFilter: Me,
        minFilter: Ke,
        mipmapFilter: Ue,
        ...Fe ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function rK(ee) {
      return 0 === ee ? "clamp-to-edge" : 2 === ee ? "mirror-repeat" : "repeat"
    }
    class QK {
      constructor(ee, ie) {
        let {
          vertexArena: He = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = ee, this.device = ie, this.buffers = new WeakMap, this.Zee = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = He ? this.createArena() : null
      }
      createArena() {
        return new IK(this.device, (ee => {
          var ie;
          null === (ie = this.onDestroy) || void 0 === ie || ie.call(this, ee), this.gpuBuffersVersion++
        }))
      }
      rebind(ee, ie) {
        this.engine = ee, this.device = ie, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const He of this.liveUploads) He.rebind();
        for (const He of this.rebindWaiters.splice(0)) He()
      }
      flushUploads() {
        var ee;
        null === (ee = this.arena) || void 0 === ee || ee.flush()
      }
      endUploadFrame() {
        var ee;
        null === (ee = this.arena) || void 0 === ee || ee.ZR()
      }
      vertexBufferCreated(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : He ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(ee);
        const be = hK(ie);
        ee.bk = be.byteLength, this.buffers.set(ee, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: He && null !== this.arena,
          pending: be,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: ye
        })
      }
      vertexBufferUpdated(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        const be = this.buffers.get(ee);
        if (!be) return;
        const Me = hK(ie),
          Ke = void 0 === ye ? Me.byteLength : Math.min(ye, Me.byteLength);
        this.update(be, Me, He, Ke)
      }
      vertexBufferFloatsUpdated(ee, ie, He, ye) {
        const be = this.buffers.get(ee);
        if (!be) return;
        const Me = He * Float32Array.BYTES_PER_ELEMENT,
          Ke = (ye - He) * Float32Array.BYTES_PER_ELEMENT;
        be.slot >= 0 && Ke > 0 && Me + Ke <= be.size ? this.writeSlot(be, Me, ie, ie.byteOffset + Me, Ke, !1) : be.gpu && Ke > 0 && Me + Ke <= be.gpu.size ? this.device.queue.writeBuffer(be.gpu, Me, ie.buffer, ie.byteOffset + Me, Ke) : this.update(be, ie.subarray(He, ye), Me, Ke)
      }
      indexBufferCreated(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(ee);
        const ye = function(ee) {
          if (ee instanceof Uint16Array || ee instanceof Uint32Array) return ee;
          for (let ie = 0; ie < ee.length; ie++)
            if (ee[ie] >= 65535) return new Uint32Array(ee);
          return new Uint16Array(ee)
        }(ie);
        ee.is32Bits = 4 === ye.BYTES_PER_ELEMENT, ee.bk = ye.byteLength, this.buffers.set(ee, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: ye,
          ownsPending: ye !== ie,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: He
        })
      }
      bufferDeleted(ee) {
        const ie = this.buffers.get(ee);
        null !== ie && void 0 !== ie && ie.gpu ? (this.destroyBuffer(ie.gpu), this.gpuBuffersVersion++) : ie && ie.slot >= 0 && (this.arena.free(ie.slot, ie.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(ee)
      }
      update(ee, ie, He, ye) {
        if (ee.slot >= 0) this.updateSlot(ee, ie, He, ye);
        else if (ee.gpu) {
          if (He + se(ye) > ee.gpu.size) {
            const ie = this.device.createBuffer({
                label: ee.label,
                size: se(Math.max(2 * ee.gpu.size, He + ye)),
                usage: ee.usage | GPUBufferUsage.COPY_SRC
              }),
              be = this.device.createCommandEncoder();
            be.copyBufferToBuffer(ee.gpu, 0, ie, 0, ee.gpu.size), this.device.queue.submit([be.finish()]), this.destroyBuffer(ee.gpu), this.gpuBuffersVersion++, ee.gpu = ie
          }
          NK(this.device, ee.gpu, He, ie, ye)
        } else {
          const Me = new Uint8Array(ie.buffer, ie.byteOffset, ye),
            Ke = ee.pending;
          if (Ke && ee.ownsPending && He + ye <= Ke.byteLength) new Uint8Array(Ke.buffer, Ke.byteOffset, Ke.byteLength).set(Me, He);
          else if (Ke && 0 === He && ye === Ke.byteLength && ie.byteLength === ye) ee.pending = ie, ee.ownsPending = !1;
          else {
            var be;
            const ie = new Uint8Array(Math.max(null !== (be = null === Ke || void 0 === Ke ? void 0 : Ke.byteLength) && void 0 !== be ? be : 0, He + ye));
            Ke && ie.set(new Uint8Array(Ke.buffer, Ke.byteOffset, Ke.byteLength)), ie.set(Me, He), ee.pending = ie, ee.ownsPending = !0
          }
        }
      }
      updateSlot(ee, ie, He, ye) {
        const be = this.arena;
        He + se(ye) > ee.size && (ee.size = se(Math.max(2 * ee.size, He + ye)), be.growTo(ee.slot + ee.size), this.gpuBuffersVersion++), 0 === ye ? this.writeSlot(ee, He, iU, 0, 4, !1) : this.writeSlot(ee, He, ie, ie.byteOffset, ye, !0)
      }
      writeSlot(ee, ie, He, ye, be, Me) {
        const Ke = ie + (Me ? se(be) : be);
        Ke > ee.slotBytes && this.moveSlot(ee, Ke), this.arena.write(ee.slot + ie, He, ye, be, Me)
      }
      moveSlot(ee, ie) {
        const He = this.arena,
          ye = IK.slotBytes(Math.max(ie, Math.min(2 * ee.slotBytes, ee.size))),
          be = He.allocate(ye, null, ee.size);
        He.move(ee.slot, be, ee.slotBytes), He.free(ee.slot, ee.slotBytes), ee.slot = be, ee.slotBytes = ye, this.gpuBuffersVersion++
      }
      cover(ee, ie) {
        const He = this.buffers.get(ee);
        if (!He || He.slot < 0) return !1;
        const ye = Math.min(ie, He.size);
        return !(ye <= He.slotBytes) && (this.moveSlot(He, ye), !0)
      }
      destroyBuffer(ee) {
        var ie;
        null === (ie = this.onDestroy) || void 0 === ie || ie.call(this, ee), ee.destroy()
      }
      gpuBuffer(ee) {
        const ie = this.buffers.get(ee);
        if (!ie) return null;
        if (ie.slot >= 0) return this.arena.buffer;
        if (ie.arena && ie.pending) {
          const ee = ie.pending,
            He = this.arena;
          return ie.size = se(ee.byteLength), ie.slotBytes = IK.slotBytes(function(ee) {
            const ie = new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength);
            let He = ie.length;
            if (ee.byteOffset % 4 === 0) {
              for (; He % 4 !== 0 && 0 === ie[He - 1];) He--;
              if (He % 4 === 0) {
                const ie = new Uint32Array(ee.buffer, ee.byteOffset, He / 4);
                let ye = ie.length;
                for (; ye > 0 && 0 === ie[ye - 1];) ye--;
                He = 4 * ye
              }
            }
            for (; He > 0 && 0 === ie[He - 1];) He--;
            return He
          }(ee)), ie.slot = He.allocate(ie.slotBytes, ee, ie.size), ie.pending = null, He.buffer
        }
        if (!ie.gpu && ie.pending) {
          const ee = ie.pending;
          ie.gpu = this.device.createBuffer({
            label: ie.label,
            size: se(ee.byteLength),
            usage: ie.usage
          }), NK(this.device, ie.gpu, 0, ee, ee.byteLength), ie.pending = null
        }
        return ie.gpu
      }
      gpuOffset(ee) {
        var ie, He;
        const ye = null !== (ie = null === (He = this.buffers.get(ee)) || void 0 === He ? void 0 : He.slot) && void 0 !== ie ? ie : -1;
        return ye < 0 ? 0 : ye
      }
      gpuEnd(ee) {
        var ie, He;
        const ye = this.buffers.get(ee);
        return ye ? ye.slot >= 0 ? ye.slot + ye.size : null !== (ie = null === (He = ye.gpu) || void 0 === He ? void 0 : He.size) && void 0 !== ie ? ie : 0 : 0
      }
      vertexInput(ee, ie, He) {
        var ye, be, Me, Ke;
        return null !== (ye = null !== (be = He && this.modelInput(He, ie)) && void 0 !== be ? be : null === (Me = null !== (Ke = this.Zee.get(ee)) && void 0 !== Ke ? Ke : this.batchUploads.get(ee)) || void 0 === Me ? void 0 : Me.inputs[ie]) && void 0 !== ye ? ye : null
      }
      modelInput(ee, ie) {
        const He = this.geometrySlot(ee);
        let ye = He.inputs.get(ie);
        if (void 0 === ye) {
          const be = ee.vertexAttributes.find((ee => ee.kind === ie));
          ye = be ? new fi(this.modelKey(He, be.data, !1), be.offset, be.stride, be.components, !1, be.glType, be.isNormalized) : null, He.inputs.set(ie, ye)
        }
        return ye
      }
      modelIndex(ee) {
        return ee.indexData && this.modelKey(this.geometrySlot(ee), ee.indexData, !0)
      }
      geometrySlot(ee) {
        var ie;
        let He = ee.gpu[we.e.lite];
        if ((null === (ie = He) || void 0 === ie ? void 0 : ie.epoch) !== this.epoch) {
          const ie = new Map,
            ye = () => {
              for (const ee of ie.values()) this.bufferDeleted(ee)
            },
            be = ee => {
              const He = ie.get(ee);
              He && this.vertexBufferUpdated(He, ee)
            };
          He = {
            keys: ie,
            inputs: new Map,
            release: ye,
            updated: be,
            epoch: this.epoch
          }, ee.gpu[we.e.lite] = He
        }
        return He
      }
      modelKey(ee, ie, He) {
        let ye = ee.keys.get(ie);
        if (!ye) {
          if (He) {
            const ee = {
              bk: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(ee, ie, "model-indices"), ye = ee
          } else ye = {
            bk: 0
          }, this.vertexBufferCreated(ye, ie, !1, "model-vertices");
          ee.keys.set(ie, ye)
        }
        return ye
      }
      indexFormat(ee) {
        return ee.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(ee, ie) {
        --ee.refs > 0 || (this.releaseTexture(ee), SK(ee.images), null !== ie && this.textures.delete(ie))
      }
      load(ee, ie) {
        const {
          epoch: He
        } = this, ye = ie.decoded = async function(ee) {
          if ("cube" === ee.kind) return async function(ee) {
            if (6 !== ee.length) throw new Error(`${ee.length} files where six faces were expected`);
            const ie = await nK(ee.map((ee => Qe(ee)))),
              He = ie[0].width;
            return nK(ie.map((async ee => {
              if (ee.width === He && ee.height === He) return ee;
              try {
                return await createImageBitmap(ee, {
                  ...Ge,
                  resizeWidth: He,
                  resizeHeight: He
                })
              } finally {
                ee.close()
              }
            })))
          }(ee.files);
          if ("data" === ee.kind && ee.data) return [await createImageBitmap(new Blob([ee.data]), Ge)];
          return [await Qe(eU(ee))]
        }(ee.source).then((ee => {
          0 === ie.refs || He !== this.epoch ? SK(ee) : ie.images = ee
        }));
        this.track(ie, eU(ee.source), ye, (() => {
          ie.wanted && !ie.failed && ie.refs > 0 && this.upload(ee, ie)
        }))
      }
      canvasUpdated(ee, ie, He) {
        const {
          state: ye
        } = this.textureSlot(ee);
        ye.dynamicSource = {
          invertY: ie,
          premultiplied: He
        }, ye.dynamic && this.pushDynamic(ee.source, ye)
      }
      async atlasArrays(ee) {
        const {
          device: ie,
          epoch: He
        } = this;
        let ye;
        try {
          ye = await ii(ie, ee)
        } catch (Me) {
          if (He === this.epoch) {
            if (!Ji(ie)) throw Me;
            await new Promise((ee => {
              this.rebindWaiters.push(ee)
            }))
          }
          return this.atlasArrays(ee)
        }
        if (ye.forEach(((ie, He) => {
            this.atlasSources.has(ie) || this.atlasSources.set(ie, {
              sources: ee,
              index: He,
              stride: ye[0].layers
            })
          })), He !== this.epoch) return ye;
        const be = (0, LK.b)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const Ke of ye) this.atlasBindings.has(Ke) || this.atlasBindings.set(Ke, {
          view: Ke.texture.createView({
            dimension: "2d-array"
          }),
          sampler: be
        });
        return ye
      }
      boundTexture(ee) {
        const ie = this.atlasBindings.get(ee);
        if (ie) return ie;
        const He = this.atlasSources.get(ee);
        if (He) return this.rebuildAtlas(ee, He), null;
        const ye = ee;
        if (ye.released) return null;
        const be = this.textureSlot(ye, !0),
          {
            state: Me
          } = be;
        if (!Me.view && (Me.wanted = !0, Me.loading || Me.failed || this.upload(ye, Me), !Me.view)) return null;
        const Ke = this.chosenSampler(ye, be),
          Ue = be.bound;
        return Ue && Ue.view === Me.view && Ue.sampler === Ke ? Ue : (be.bound = {
          view: Me.view,
          sampler: Ke
        }, be.bound)
      }
      rebuildAtlas(ee, ie) {
        let {
          sources: He,
          index: ye,
          stride: be
        } = ie;
        if (this.atlasRebuilds.has(ee)) return;
        this.atlasRebuilds.add(ee);
        const {
          epoch: Me
        } = this;
        this.atlasArrays(He).then((ie => {
          ie[0].layers === be && ie[ye] ? Me === this.epoch && this.atlasBindings.set(ee, this.atlasBindings.get(ie[ye])) : console.error(`Lite: the new device splits the atlas ${re(He.urls[0])} into other arrays than its materials read`)
        }), (ee => {
          console.error(`Lite: could not build the atlas ${re(He.urls[0])} again on a new device`, ee)
        }))
      }
      textureLoaded(ee) {
        var ie, He;
        return null !== (ie = null === (He = this.heldSlot(ee)) || void 0 === He ? void 0 : He.state.decoded) && void 0 !== ie ? ie : null
      }
      textureFailed(ee) {
        var ie;
        return !0 === (null === (ie = this.heldSlot(ee)) || void 0 === ie ? void 0 : ie.state.failed)
      }
      heldSlot(ee) {
        const ie = ee.gpu[we.e.lite];
        return (null === ie || void 0 === ie ? void 0 : ie.epoch) === this.epoch ? ie : void 0
      }
      chosenSampler(ee, ie) {
        const {
          samplingMode: He,
          wrapU: ye,
          wrapV: be
        } = ee.sampler, Me = ie.state.hasMips, Ke = function(ee, ie) {
          const {
            bilinear: He,
            trilinear: ye
          } = we.h;
          return !ie && ee !== He || 11 !== ee && ee !== ye && ee !== He ? 1 : 4
        }(He, Me), Ue = ie.sampler;
        if (Ue && Ue.samplingMode === He && Ue.hasMips === Me && Ue.anisotropy === Ke && Ue.wrapU === ye && Ue.wrapV === be) return Ue.sampler;
        const Fe = this.samplerFor(He, Me, Ke, ye, be);
        return ie.sampler = {
          samplingMode: He,
          hasMips: Me,
          anisotropy: Ke,
          wrapU: ye,
          wrapV: be,
          sampler: Fe
        }, Fe
      }
      releaseTexture(ee) {
        var ie, He;
        ee.view && (null === (He = this.onDestroy) || void 0 === He || He.call(this, ee.view));
        null === (ie = ee.destroy) || void 0 === ie || ie.call(ee)
      }
      textureSlot(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = ee.gpu[we.e.lite];
        if ((null === He || void 0 === He ? void 0 : He.epoch) === this.epoch) return He;
        const ye = function(ee) {
          let {
            source: ie,
            sampler: He
          } = ee;
          return "canvas" === ie.kind ? null : `${ie.kind}|${eU(ie)}|${He.noMipmap}|${He.samplingMode}|${He.invertY}`
        }(ee);
        let be = null === ye ? void 0 : this.textures.get(ye);
        var Me;
        be || (be = {
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
          dynamicSource: null !== (Me = null === He || void 0 === He ? void 0 : He.state.dynamicSource) && void 0 !== Me ? Me : null
        }, null !== ye && (this.textures.set(ye, be), this.load(ee, be), ie && !He && this.firstBindDecodes++));
        be.refs++;
        const Ke = be,
          {
            epoch: Ue
          } = this,
          Fe = {
            state: be,
            bound: null,
            sampler: null,
            release: () => {
              Ue === this.epoch && this.releaseSlot(Ke, ye)
            },
            epoch: Ue
          };
        return ee.gpu[we.e.lite] = Fe, Fe
      }
      samplerFor(ee, ie, He, ye, be) {
        const Me = `${ee}|${ie}|${He}|${ye}|${be}`;
        let Ke = this.samplers.get(Me);
        if (!Ke) {
          const Ue = {
            ...GK(ee, ie, He),
            addressModeU: rK(ye),
            addressModeV: rK(be)
          };
          Ke = (0, LK.b)(this.engine, Ue), this.samplers.set(Me, Ke)
        }
        return Ke
      }
      upload(ee, ie) {
        const {
          source: He,
          sampler: ye
        } = ee;
        ie.hasMips = !ye.noMipmap, "canvas" === He.kind ? this.createDynamic(He, ie) : "cube" === He.kind ? this.uploadCube(ie, He.luminance) : this.uploadImage(ie, !0 === ye.invertY, He.url)
      }
      uploadImage(ee, ie, He) {
        const [ye] = ee.images;
        ee.images = null;
        const {
          epoch: be
        } = this, Me = (0, CK.b)(this.engine, ye, {
          mipMaps: ee.hasMips,
          invertY: ie,
          srgb: !1
        }).then((ie => {
          ye.close(), 0 !== ee.refs && be === this.epoch ? (ee.view = ie.view, ee.destroy = ie.texture.destroy.bind(ie.texture)) : ie.texture.destroy()
        }));
        this.track(ee, He, Me)
      }
      track(ee, ie, He, ye) {
        const {
          epoch: be
        } = this;
        ee.loading = !0, this.pending++, He.catch((He => {
          be === this.epoch && (ee.failed = !0, console.warn(`Lite: could not load texture ${re(ie)}`, He))
        })).finally((() => {
          be === this.epoch && (ee.loading = !1, this.pending--, null === ye || void 0 === ye || ye())
        }))
      }
      uploadCube(ee, ie) {
        const He = ee.images;
        ee.images = null;
        const ye = lK(this.engine, this.device, He, (0, we.u)(ie), ee.hasMips);
        ee.view = ye.createView({
          dimension: "cube"
        }), ee.destroy = () => {
          ye.destroy()
        }
      }
      createDynamic(ee, ie) {
        const {
          canvas: He
        } = ee, ye = (0, vK.c)(this.engine, Math.max(1, He.width), Math.max(1, He.height), {
          mipMaps: ie.hasMips,
          srgb: !1
        });
        ie.dynamic = ye, ie.view = ye.view, ie.destroy = () => {
          ye.texture.destroy()
        }, this.pushDynamic(ee, ie)
      }
      pushDynamic(ee, ie) {
        const He = ie.dynamicSource,
          ye = ie.dynamic,
          {
            canvas: be
          } = ee;
        if (He && ye && 0 !== be.width && 0 !== be.height) return be.width !== ye.width || be.height !== ye.height ? (this.releaseTexture(ie), ie.dynamic = null, ie.view = null, void this.createDynamic(ee, ie)) : void(0, vK.d)(this.engine, ye, be, {
          invertY: He.invertY,
          premultiplyAlpha: He.premultiplied
        })
      }
    }

    function eU(ee) {
      return "cube" === ee.kind ? ee.rootUrl : "canvas" === ee.kind ? "canvas" : ee.url
    }
    const iU = new Uint8Array(4);
    var HU = He(39540);

    function yU(ee) {
      const ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      ee._colorAttachment.storeOp = ee._targetSignature._sampleCount > 1 ? ie : "store";
      const He = ee._renderPassDescriptor.depthStencilAttachment;
      He && (He.depthStoreOp = ie, He.stencilStoreOp && (He.stencilStoreOp = ie))
    }
    var bU = He(38590),
      MU = He(38657),
      KU = He(38185),
      UU = He(40477);
    const FU = new Float64Array([1, 1, 1]),
      JU = new Float64Array([0, 1, 0]),
      oU = new Float64Array(4),
      RU = new Float32Array(16),
      kU = new Float64Array(3),
      qU = new Float64Array(4);

    function fU(ee, ie, He) {
      ee.fov = ie.fov, ee.near = ie.near, ee.far = ie.far, ee.renderWidth = He.renderWidth, ee.renderHeight = He.renderHeight, (0, KU.p)(ie.holderRotation, 0, oU, 0), (0, KU.b)(FU, 0, oU, 0, ie.holderPosition, 0, RU);
      const ye = ie.Z8;
      kU[0] = ye[0], kU[1] = ye[1], kU[2] = ye[2] + 1;
      const be = ee.viewMatrix;
      (0, KU.i)(ye, kU, JU, be), (0, KU.g)(be, 0, be), (0, KU.k)(be, RU, 0, be), (0, KU.g)(be, 0, be);
      const Me = ee.worldMatrix;
      (0, KU.g)(be, 0, Me), ee.eye[0] = Me[12], ee.eye[1] = Me[13], ee.eye[2] = Me[14], qU[0] = ee.fov, qU[1] = ee.renderWidth / ee.renderHeight, qU[2] = ee.near, qU[3] = ee.far, (0, KU.m)(qU, ee.projectionMatrix), (0, KU.k)(be, ee.projectionMatrix, 0, ee.viewProjectionMatrix), (0, UU.e)(ee.viewProjectionMatrix, ee.frustum)
    }

    function TU(ee, ie) {
      let He = ee.frustumPlanes;
      He || (He = ee.frustumPlanes = Array.from({
        length: 6
      }, (() => new bU.c(0, 0, 0, 0))));
      for (let ye = 0; ye < 6; ye++) {
        const ee = He[ye].normal;
        ee._x = ie[4 * ye], ee._y = ie[4 * ye + 1], ee._z = ie[4 * ye + 2], ee._isDirty = !0, He[ye].d = ie[4 * ye + 3]
      }
    }

    function pU(ee, ie) {
      const He = ie.clearColor;
      ee.clearColour[0] = He.r, ee.clearColour[1] = He.g, ee.clearColour[2] = He.b, ee.clearColour[3] = He.a;
      const ye = ie.ambientColor;
      ee.ambientColour[0] = ye.r, ee.ambientColour[1] = ye.g, ee.ambientColour[2] = ye.b, ee.animationRatio = ie.animationRatio, ee.frameId = ie.frameId, ee.version++
    }

    function XU(ee) {
      const ie = ee.model.view;
      return ie.animTick = (0, MU.e)(), ie.timeMs = performance.now(), pU(ie, ee.yp), ee.model.update(ie.frameId), ie
    }

    function zU(ee) {
      const ie = ee.yp,
        {
          view: He,
          W8: ye
        } = ee.model;
      return fU(He, ye, ie.Nf()), ie.onBeforeRenderObservable.notifyObservers(ie), TU(ie, He.frustum), ie.onBeforeCameraRenderObservable.notifyObservers(ie.activeCamera), XU(ee)
    }
    var BU = He(38154),
      EU = He(38254),
      gU = He(38648);

    function OU(ee) {
      var ie, He;
      const ye = (0, te.V)(ee);
      if (!ye || ye.diffuseTexture && (0, gU.i)(ee)) return null;
      const be = null === (ie = (0, te.y)(ye, de.k.name)) || void 0 === ie ? void 0 : ie.state,
        Me = null === (He = (0, te.y)(ye, eK.e.name)) || void 0 === He ? void 0 : He.state,
        Ke = new Float32Array(16);
      return function(ee, ie, He, ye) {
        var be, Me;
        const Ke = Ly;
        ye.set(ee.diffuseColor, Ke.diffuse), ye[Ke.diffuse + 3] = ee.alpha, ye.set(ee.ambientColor, Ke.ambientAndCutoff), ye[Ke.ambientAndCutoff + 3] = ee.alphaCutOff, ye.set(ee.emissiveColor, Ke.emissiveAndLevel), ye[Ke.emissiveAndLevel + 3] = null !== (be = null === (Me = ee.diffuseTexture) || void 0 === Me ? void 0 : Me.level) && void 0 !== be ? be : 1, null !== ie && void 0 !== ie && ie.animDataPerTex ? (ye[Ke.anim + 1] = MU.b, ye[Ke.anim + 2] = ie.animDataPerTex.length / 3 - 1) : He && (ye[Ke.anim + 1] = He.numAnimStates, ye[Ke.anim + 2] = He.ticksPerAnimState)
      }(ye, be, Me, Ke), {
        model: ye,
        atlas: be,
        texture: be ? "atlas" : ye.diffuseTexture ? "single" : "none",
        animated: be ? !!be.animDataPerTex : !!Me,
        liquid: (0, gU.l)(ee),
        customRenderMat: (0, gU.i)(ee),
        uniformData: Ke
      }
    }
    var dU = He(3090);
    class WU {
      constructor(ee) {
        this.units = ee, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var ee;
        this.buffer.destroy(), null === (ee = this.twin) || void 0 === ee || ee.destroy()
      }
    }
    class tU {
      constructor(ee, ie) {
        this.arena = ee, this.zp = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.zp = new jK(ie);
        const He = new WU(ie);
        He.buffer = this.createBuffer(He, !1), this.backings.push(He), this.refresh()
      }
      get bk() {
        return this.zp.bk
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
        let ee = 0;
        for (const ie of this.backings) ee += ie.units * (this.arena.unitBytes + (ie.twin ? this.arena.twinUnitBytes : 0));
        return ee
      }
      holds(ee) {
        return ee.start + ee.length <= this.usable
      }
      lost(ee) {
        return this.dropped || ee.start + ee.length > this.bk
      }
      write(ee, ie) {
        const {
          device: He,
          unitBytes: ye
        } = this.arena;
        for (const be of this.backings) {
          const Me = (be.units - ee.start) * ye;
          Me > 0 && He.queue.writeBuffer(be.buffer, ee.start * ye, ie, 0, Math.min(ie.byteLength, Me))
        }
      }
      writeLight(ee, ie) {
        const {
          device: He,
          twinUnitBytes: ye,
          verticesPerUnit: be
        } = this.arena, {
          light: Me,
          count: Ke
        } = this.arena.twinLight(ie, Math.min(ie.length, ee.length * be));
        for (const Ue of this.backings) {
          Ue.twin || (Ue.twin = this.createBuffer(Ue, !0));
          const ie = (Ue.units - ee.start) * be;
          ie > 0 && He.queue.writeBuffer(Ue.twin, ee.start * ye, Me, 0, Math.min(Ke, ie))
        }
      }
      grow(ee) {
        this.arena.assertNotDrawing();
        const {
          device: ie,
          unitBytes: He,
          label: ye
        } = this.arena, be = this.backings[this.backings.length - 1], Me = new WU(ee), Ke = ie.createCommandEncoder({
          label: `${ye}-grow`
        });
        Me.buffer = this.createBuffer(Me, !1), Ke.copyBufferToBuffer(be.buffer, 0, Me.buffer, 0, be.units * He), be.twin && (Me.twin = this.createBuffer(Me, !0), Ke.copyBufferToBuffer(be.twin, 0, Me.twin, 0, be.units * this.arena.twinUnitBytes)), ie.queue.submit([Ke.finish()]), this.backings.push(Me), this.zp.grow(ee)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const ee of this.backings) ee.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(ee, ie) {
        const {
          device: He,
          unitBytes: ye,
          twinUnitBytes: be,
          usage: Me,
          label: Ke
        } = this.arena;
        He.pushErrorScope("out-of-memory");
        const Ue = He.createBuffer({
          label: ie ? `${Ke}-light` : Ke,
          size: ee.units * (ie ? be : ye),
          usage: (ie ? this.arena.twinUsage : Me) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, He.popErrorScope().then((He => {
          this.arena.awaitingVerdict--, this.settle(ee, ie, !He, !0)
        }), (He => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Ke} buffer, taken as failed: ${String(He)}`), this.settle(ee, ie, !1, !1)
        })), Ue
      }
      settle(ee, ie, He, ye) {
        const be = this.backings.indexOf(ee);
        if (!(this.dropped || be < 0)) {
          if (!He) {
            if (ye && this.arena.ranOutOfMemory(ee.units, ee.units * (ie ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === be) return void this.drop();
            for (const ee of this.backings.splice(be)) ee.destroy();
            return this.zp.truncate(this.backings[be - 1].units), this.growable = !1, void this.promote()
          }
          ie ? ee.twinReady = !0 : (ee.bufferReady = !0, this.arena.allocatedBuffer(ee.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: ee
        } = this;
        let ie = 0;
        for (; ie + 1 < ee.length && ee[ie].ready && ee[ie + 1].ready;) ie++;
        for (const He of ee.splice(0, ie)) He.destroy();
        this.refresh()
      }
      refresh() {
        const ee = this.backings[0];
        this.buffer = ee.buffer, this.twin = ee.twinReady ? ee.twin : null, this.usable = !this.dropped && ee.bufferReady ? ee.units : 0
      }
    }
    class ZU {
      constructor(ee, ie, He, ye) {
        let {
          verticesPerUnit: be = 1,
          twinUsage: Me = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = ee, this.unitBytes = ie, this.usage = He, this.label = ye, this.pages = [], this.tR = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Vi.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), ie % 4 !== 0) throw new Error(`${ye}: ${ie}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = be, this.twinUsage = Me, this.twinValueBytes = be > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * be
      }
      twinLight(ee, ie) {
        if (4 === this.twinValueBytes) return this.widened.length < ie && (this.widened = new Float32Array(Math.max(ie, 2 * this.widened.length))), this.widened.set(ee.subarray(0, ie)), {
          light: this.widened,
          count: ie
        };
        const He = ie % this.verticesPerUnit;
        if (0 === He) return {
          light: ee,
          count: ie
        };
        const ye = ie - He + this.verticesPerUnit;
        return this.padded.length < ye && (this.padded = new Uint16Array(Math.max(ye, 2 * this.padded.length))), this.padded.set(ee.subarray(0, ie)), this.padded.fill(0, ie, ye), {
          light: this.padded,
          count: ye
        }
      }
      allocate(ee) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), ee > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const be of this.pages) {
          const ie = be.zp.allocate(ee);
          if (ie >= 0) return {
            page: be,
            start: ie,
            length: ee
          }
        }
        const ie = this.pages[this.pages.length - 1];
        if (null !== ie && void 0 !== ie && ie.canGrow) {
          const He = Math.min(this.ceiling, Math.max(2 * ie.bk, ie.bk + ee));
          if (He - ie.bk >= ee) return ie.grow(He), {
            page: ie,
            start: ie.zp.allocate(ee),
            length: ee
          }
        }
        ie && ie !== this.pages[0] && 0 === ie.zp.used && ie.drop();
        const He = Math.floor(1048576 / this.unitBytes),
          ye = new tU(this, Math.max(ee, Math.min(this.ceiling, He)));
        return this.pages.push(ye), {
          page: ye,
          start: ye.zp.allocate(ee),
          length: ee
        }
      }
      free(ee) {
        this.assertNotDrawing();
        const {
          page: ie
        } = ee;
        ie.zp.free(ee.start, ee.length), 0 === ie.zp.used && ie !== this.pages[0] && ie !== this.pages[this.pages.length - 1] && ie.drop()
      }
      retire() {
        for (const ee of this.pages) ee.retire()
      }
      remove(ee) {
        const ie = this.pages.indexOf(ee);
        ie >= 0 && this.pages.splice(ie, 1)
      }
      ranOutOfMemory(ee, ie) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${ie}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, ee), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, ee) / 2));
        const He = performance.now();
        He >= this.shortageUntil && (this.forgetFailedAt = He + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = He + 1e3)
      }
      allocatedBuffer(ee) {
        ee >= this.failed && (this.failed = 1 / 0);
        const ie = Math.min(2 * ee, Math.floor((ee + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, ie))
      }
      stats() {
        let ee = 0,
          ie = 0,
          He = 0,
          ye = 0;
        for (const be of this.pages) ee += be.bk, ie += be.zp.used, He += be.hasTwin ? be.bk * this.twinUnitBytes : 0, ye += be.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: ee * this.unitBytes,
          usedBytes: ie * this.unitBytes,
          twinBytes: He,
          allocatedBytes: ye
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: ee,
          maxStorageBufferBindingSize: ie
        } = this.device.limits;
        let He = Math.floor(Math.min(67108864, ee) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (He = Math.min(He, Math.floor(ie / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (He = Math.min(He, Math.floor(ie / this.twinUnitBytes))), He
      }
    }
    const wU = 16383;

    function DU(ee, ie, He, ye, be) {
      let Me = 0;
      for (let Ke = He; Ke < ye; Ke += wU) ee.drawIndexed(6 * Math.min(wU, ye - Ke), 1, 0, ie + 4 * Ke, be), Me++;
      return Me
    }
    class PU {
      constructor(ee, ie) {
        this.recordsGroup = ie, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const He = Ni.f.strideWithoutAtlas;
        this.vertexArena = new ZU(ee, He, GPUBufferUsage.VERTEX, `terrain-vertices-${He}`), this.quadArena = new ZU(ee, EU.c, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const ye = (0, Gi.f)(new Uint16Array(98298), wU);
        this.quadPattern = ee.createBuffer({
          label: "terrain-quad-pattern",
          size: ye.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), ee.queue.writeBuffer(this.quadPattern, 0, ye)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(ee, ie) {
        const He = ie.packedVertices,
          ye = He ? this.quadArena.allocate(ee.faceCount) : this.vertexArena.allocate(ee.vertexCount);
        if (!ye) return !1;
        ee.vertices = ye;
        const be = He ? new Uint8Array(He.buffer, He.byteOffset, He.byteLength) : new Uint8Array(ie.vertices);
        return ye.page.write(ye, be), !0
      }
      setLight(ee, ie) {
        const {
          vertices: He
        } = ee;
        He && 0 !== ie.length && He.page.live && (ie.length < ee.vertexCount ? He.page.arena.warnOnce("shortLight", `a part's ${ie.length} light values are fewer than its ${ee.vertexCount} vertices, so its light is left as it was`) : (He.page.writeLight(He, ie), ee.lit = !0))
      }
      lightFullSky(ee, ie) {
        this.fullSky.length < ie && (this.fullSky = new Uint16Array(Math.max(ie, 4096)).fill(dU.h));
        for (const He of ee) {
          const ee = He.vertices;
          ee.page.live && (ee.page.writeLight(ee, this.fullSky), He.lit = !0)
        }
      }
      backed(ee) {
        const {
          vertices: ie
        } = ee;
        return !!ie && ie.page.holds(ie)
      }
      lost(ee) {
        const {
          vertices: ie
        } = ee;
        return !!ie && ie.page.lost(ie)
      }
      release(ee) {
        ee.vertices && ee.vertices.page.arena.free(ee.vertices), ee.vertices = null, ee.lit = !1
      }
      setDrawing(ee) {
        this.forgetBound()
      }
      draw(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ie.faceCount;
        const Me = ie.vertices,
          Ke = Me.page,
          Ue = He ? Ke.twin : null;
        if (!Ke.holds(Me) || He && !Ue) return 0;
        const {
          verticesPerUnit: Fe
        } = Ke.arena;
        let Je = Me.start * Fe;
        this.boundPattern || (ee.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const oe = ye + be;
        if (Fe > 1) return Ke.buffer === this.boundRecords && Ue === this.boundRecordsLight || (ee.setBindGroup(1, this.recordsGroup(Ke.buffer, Ue)), this.boundRecords = Ke.buffer, this.boundRecordsLight = Ue), DU(ee, Je, ye, oe, ie.slot);
        Ke.buffer !== this.boundVertices && (ee.setVertexBuffer(0, Ke.buffer), this.boundVertices = Ke.buffer), Ue && Ue !== this.boundLight && (ee.setVertexBuffer(1, Ue), this.boundLight = Ue);
        const Re = ie.faceCount;
        return oe <= Re ? DU(ee, Je, ye, oe, ie.slot) : DU(ee, Je, ye, Re, ie.slot) + DU(ee, Je, Math.max(ye, Re) - Re, oe - Re, ie.slot)
      }
      get buffersAwaitingVerdict() {
        let ee = 0;
        for (const ie of this.arenas()) ee += ie.awaitingVerdict;
        return ee
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class AU {
      constructor(ee, ie, He, ye) {
        this.device = ee, this.splitBefore = ie, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = ee.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const be = ee.createShaderModule({
          label: "scene-depth-copy",
          code: (Me = He._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Me?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Me;
        ee.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: be,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: be,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((ee => {
          this.pipeline = ee, this.building = !1
        }), (ee => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", ee)
        })), He._executeWithTransmission = () => this.execute(He, ye)
      }
      get compiling() {
        return this.building
      }
      setWanted(ee) {
        this.wanted = ee
      }
      setPlanes(ee, ie) {
        ee === this.near && ie === this.far || (this.near = ee, this.far = ie, this.unproject[0] = ee / (ie - ee), this.unproject[1] = ie * ee / (ie - ee), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var ee, ie;
        return null !== (ee = null === (ie = this.copy) || void 0 === ie ? void 0 : ie.view) && void 0 !== ee ? ee : null
      }
      execute(ee, ie) {
        var He;
        null === (He = this.retired) || void 0 === He || He.destroy(), this.retired = null;
        const ye = di(ie),
          be = ee._transparentBindings,
          Me = this.wanted && this.pipeline ? this.splitIndex(be) : -1,
          Ke = ee._colorAttachment,
          Ue = Ke.resolveTarget;
        Me >= 0 && (Ke.resolveTarget = void 0, yU(ee, !0));
        let Fe = ye.beginRenderPass(ee._renderPassDescriptor);
        Fe.setBindGroup(0, ee._sceneBG);
        let Je = this.drawList(Fe, ie, ee._opaqueBindings, 0, ee._opaqueBindings.length);
        if (Je += this.drawList(Fe, ie, ee._directBindings, 0, ee._directBindings.length), Je += this.drawList(Fe, ie, be, 0, Me >= 0 ? Me : be.length), Fe.end(), Me < 0) return Je;
        yU(ee);
        const oe = ee._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Re,
            stencilLoadOp: ke
          } = oe,
          qe = Ke.loadOp;
        Ke.resolveTarget = Ue;
        try {
          this.copyDepth(ye, ee), Ke.loadOp = "load", oe.depthLoadOp = "load", ke && (oe.stencilLoadOp = "load"), Fe = ye.beginRenderPass(ee._renderPassDescriptor), Fe.setBindGroup(0, ee._sceneBG), Je += this.drawList(Fe, ie, be, Me, be.length), Fe.end()
        } finally {
          Ke.loadOp = qe, oe.depthLoadOp = Re, oe.stencilLoadOp = ke
        }
        return Je
      }
      splitIndex(ee) {
        for (let ie = 0; ie < ee.length; ie++)
          if (ee[ie].renderable === this.splitBefore) return ie;
        return -1
      }
      drawList(ee, ie, He, ye, be) {
        let Me = null,
          Ke = 0;
        for (let Ue = ye; Ue < be; Ue++) {
          const ye = He[Ue],
            be = ye.renderable.mesh;
          be && !1 === be.visible || (ye.pipeline !== Me && (ee.setPipeline(ye.pipeline), Me = ye.pipeline), Ke += ye.draw(ee, ie))
        }
        return Ke
      }
      copyDepth(ee, ie) {
        var He, ye;
        const be = (null !== (He = ie._config.depth) && void 0 !== He ? He : ie._config.rt)._depthTexture,
          Me = (null === (ye = this.copy) || void 0 === ye ? void 0 : ye.source) === be ? this.copy : this.remakeCopy(be),
          Ke = ee.beginRenderPass(Me.pass);
        Ke.setPipeline(this.pipeline), Ke.setBindGroup(0, Me.bindGroup), Ke.draw(3), Ke.end()
      }
      remakeCopy(ee) {
        var ie, He;
        this.retired = null !== (ie = null === (He = this.copy) || void 0 === He ? void 0 : He.texture) && void 0 !== ie ? ie : null;
        const ye = this.device.createTexture({
            label: "scene-depth",
            size: [ee.width, ee.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          be = ye.createView(),
          Me = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: ee.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Ke = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: be,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: ee,
          texture: ye,
          view: be,
          bindGroup: Me,
          pass: Ke
        }, this.copy
      }
    }
    const YU = "rgba8unorm";

    function VU(ee) {
      return ee ? 15 : 1
    }
    class aU {
      constructor(ee, ie, He, ye) {
        this.device = ee, this.terrain = ye, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = ie._targetSignature._sampleCount > 1, this.cameraBuffer = ee.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = ee.createBindGroupLayout({
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
        const be = ee.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = ee.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: be,
          entries: []
        });
        const Me = ee.createShaderModule({
          label: "sun-shadow-mask",
          code: (Ke = this.edge, `${(0,ri.z)()}${Jy({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Ke?rH:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${VU(Ke)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Ke?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Ke;
        ee.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: ee.createPipelineLayout({
            bindGroupLayouts: [this.layout, be, be, jM(ee, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Me,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Me,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((ee => {
          this.pipeline = ee, this.building = !1
        }), (ee => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", ee)
        }));
        const Ue = ie._executeWithTransmission;
        ie._executeWithTransmission = ee => this.execute(ie, He, (() => Ue ? Ue(ee) : function(ee, ie) {
          const He = di(ie).beginRenderPass(ee._renderPassDescriptor);
          He.setBindGroup(0, ee._sceneBG);
          let ye = cU(He, ie, ee._opaqueBindings);
          return ye += cU(He, ie, ee._directBindings), ye += cU(He, ie, ee._transparentBindings), He.end(), ye
        }(ie, He)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var ee, ie;
        return null !== (ee = null === (ie = this.targets) || void 0 === ie ? void 0 : ie.maskView) && void 0 !== ee ? ee : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(ee) {
        ! function(ee, ie) {
          const He = ee.worldMatrix,
            ye = ee.projectionMatrix,
            be = 1 / ye[0],
            Me = 1 / ye[5],
            Ke = ee.far * ee.near / (ee.far - ee.near);
          ie[0] = ee.eye[0], ie[1] = ee.eye[1], ie[2] = ee.eye[2], ie[3] = 2 ** -23 / Ke, ie[4] = He[0] * be, ie[5] = He[1] * be, ie[6] = He[2] * be, ie[7] = Ke, ie[8] = He[4] * Me, ie[9] = He[5] * Me, ie[10] = He[6] * Me, ie[11] = ee.near / (ee.far - ee.near), ie[12] = He[8], ie[13] = He[9], ie[14] = He[10], ie[15] = 0
        }(ee, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(ee, ie, He) {
        if (this.retire(), !this.terrain.readsMask) return He();
        const ye = this.targetsFor(ee),
          be = di(ie),
          Me = ee._renderPassDescriptor.depthStencilAttachment;
        this.edge || (ye.prepass.depthStencilAttachment.view = Me.view);
        const Ke = this.terrain.drawPrepass(be, ye.prepass, ee._sceneBG);
        if (0 === Ke) return He();
        if (this.trace(be, ye), this.edge) return Ke + 1 + He();
        const {
          depthLoadOp: Ue,
          stencilLoadOp: Fe
        } = Me;
        Me.depthLoadOp = "load", Fe && (Me.stencilLoadOp = "load");
        try {
          return Ke + 1 + He()
        } finally {
          Me.depthLoadOp = Ue, Me.stencilLoadOp = Fe
        }
      }
      trace(ee, ie) {
        const He = this.terrain.sunShadowGroup(),
          ye = ee.beginRenderPass(ie.trace);
        this.pipeline && He && (ye.setPipeline(this.pipeline), ye.setBindGroup(0, ie.bindGroup), ye.setBindGroup(1, this.empty), ye.setBindGroup(2, this.empty), ye.setBindGroup(3, He), ye.draw(3)), ye.end()
      }
      retire() {
        const ee = this.retired;
        var ie;
        ee && (ee.mask.destroy(), ee.normals.destroy(), null === (ie = ee.depth) || void 0 === ie || ie.destroy(), this.retired = null)
      }
      targetsFor(ee) {
        var ie, He;
        const ye = (null !== (ie = ee._config.depth) && void 0 !== ie ? ie : ee._config.rt)._depthTexture;
        return (null === (He = this.targets) || void 0 === He ? void 0 : He.source) === ye ? this.targets : this.remake(ee, ye)
      }
      remake(ee, ie) {
        var He;
        this.retired = this.targets;
        const ye = [ie.width, ie.height],
          be = this.device.createTexture({
            label: "sun-shadow-mask",
            size: ye,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Me = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: ye,
            format: YU,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Ke = null !== (He = ee._targetSignature._depthStencilFormat) && void 0 !== He ? He : ie.format,
          Ue = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: ye,
            format: Ke,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Fe = ee._renderPassDescriptor.depthStencilAttachment,
          Je = Ke.includes("stencil"),
          oe = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Me.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Ue ? Ue.createView() : Fe.view,
              depthClearValue: Fe.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Je ? {
                stencilClearValue: Fe.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Re = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Ue && void 0 !== Ue ? Ue : ie).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Me.createView()
            }]
          }),
          ke = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: be.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [VU(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: ie,
          mask: be,
          maskView: be.createView(),
          normals: Me,
          depth: Ue,
          bindGroup: Re,
          prepass: oe,
          trace: ke
        }, this.targets
      }
    }

    function cU(ee, ie, He) {
      let ye = null,
        be = 0;
      for (const Me of He) {
        const He = Me.renderable.mesh;
        He && !1 === He.visible || (Me.pipeline !== ye && (ee.setPipeline(Me.pipeline), ye = Me.pipeline), be += Me.draw(ee, ie))
      }
      return be
    }
    const xU = 6e4,
      LU = {
        status: "ok"
      },
      CU = {
        status: "skipped"
      };
    async function vU(ee, ie) {
      const {
        isCancelled: He
      } = ee;
      if (He()) return {
        status: "Ce"
      };
      const {
        target: ye
      } = ie;
      if (!ye) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const be = [],
        Me = Promise.all(Array.from(new Set(ee.materials), (async He => {
          be.push(await async function(ee, ie, He, ye) {
            const be = {
              lighting: ee.lighting,
              dirLightCount: Math.min(ee.dirLightCount, 4),
              Zf: ee.runtime
            };
            try {
              const Me = ie.material(ye);
              return Me && ay(ie.programKey(Me, !1, be)) ? (await Me.ready, ee.isCancelled() ? LU : Me.bindGroupLayout ? await async function(ee, ie, He, ye) {
                const {
                  device: be
                } = ee;
                let Me, Ke;
                be.pushErrorScope("validation");
                try {
                  Me = ee.pipelineBuild(ie, He, ye)
                } finally {
                  Ke = be.popErrorScope().catch((() => null))
                }
                const [Ue, Fe] = await Promise.all([Ke, Me.built.then((() => null), (ee => null !== ee && void 0 !== ee ? ee : new Error("pipeline failed")))]);
                if (!Ue && !Fe) return LU;
                const Je = await uU(Me.module),
                  oe = Je.length > 0 ? Je.map((ee => `${Me.name} ${ee.lineNum}:${ee.linePos}: ${ee.message}`)).join("\n") : `${Me.name}: ${mU(null!==Fe&&void 0!==Fe?Fe:Ue)}`;
                return {
                  status: "failed",
                  material: ie.model.name,
                  message: oe
                }
              }(ie, Me, ie.programKey(Me, "none" !== Me.texture, be), He): (console.warn(`Shader pack: skipped the compile check for "${ye.name}", whose textures failed to load`), CU)) : LU
            } catch (Me) {
              return {
                status: "failed",
                material: ye.name,
                message: mU(Me)
              }
            }
          }(ee, ie, ye, He))
        }))),
        Ke = function(ee, ie) {
          let He, ye, be = !1;
          const Me = new Promise((Me => {
            var Ke;
            He = setTimeout((() => {
              Me("timeout")
            }), null !== (Ke = ie.timeoutMs) && void 0 !== Ke ? Ke : xU), ye = setInterval((() => {
              ie.isCancelled() && Me("Ce")
            }), 50), ee.lost.then((() => {
              be = !0, Me("lost")
            }))
          }));
          return {
            signal: Me,
            lost: () => be,
            dispose: () => {
              clearTimeout(He), clearInterval(ye)
            }
          }
        }(ie.device, ee);
      let Ue;
      try {
        Ue = await Promise.race([Me.then((() => "done")), Ke.signal])
      } finally {
        Ke.dispose()
      }
      if ("Ce" === Ue || He()) return {
        status: "Ce"
      };
      const Fe = be.find((ee => "failed" === ee.status));
      return Fe && "lost" !== Ue && !Ke.lost() && await new Promise((ee => {
        setTimeout(ee, 0)
      })), "lost" === Ue || Ke.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Fe ? {
        status: "failed",
        failure: {
          material: Fe.material,
          message: Fe.message
        }
      } : "timeout" === Ue ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Je=ee.timeoutMs)&&void 0!==Je?Je:xU)/1e3} s`), {
        status: "skipped"
      }) : be.some((ee => "skipped" === ee.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Je
    }
    async function uU(ee) {
      if (!ee) return [];
      try {
        return (await ee.getCompilationInfo()).messages.filter((ee => "error" === ee.type))
      } catch {
        return []
      }
    }

    function mU(ee) {
      var ie;
      return null !== (ie = null === ee || void 0 === ee ? void 0 : ee.message) && void 0 !== ie ? ie : String(ee)
    }

    function lU(ee, ie, He, ye, be) {
      ay(ie) ? uU(ye).then((ie => {
        const [ye] = ie;
        oi(ee, "terrain", He, be, ye ? `${ye.lineNum}:${ye.linePos} error: ${ye.message}` : null)
      })) : oi(ee, "terrain", He, be)
    }
    var SU = He(38258),
      nU = He(38273),
      jU = He(38284),
      sU = He(3084);

    function IU(ee, ie, He, ye, be) {
      const Me = Math.hypot(He[0], He[1], He[2]);
      if (!(Me > 0)) return;
      const Ke = [He[0] / Me, He[1] / Me, He[2] / Me],
        Ue = [Math.floor(ie[0]), Math.floor(ie[1]), Math.floor(ie[2])],
        Fe = [0, 0, 0],
        Je = [1 / 0, 1 / 0, 1 / 0],
        oe = [1 / 0, 1 / 0, 1 / 0];
      for (let qe = 0; qe < 3; qe++) Ke[qe] > 0 ? (Fe[qe] = 1, Je[qe] = (Ue[qe] + 1 - ie[qe]) / Ke[qe], oe[qe] = 1 / Ke[qe]) : Ke[qe] < 0 && (Fe[qe] = -1, Je[qe] = (Ue[qe] - ie[qe]) / Ke[qe], oe[qe] = -1 / Ke[qe]);
      const {
        BR: Re
      } = ee;
      let ke = ee.sG(Ue[0], Ue[1], Ue[2]);
      for (;;) {
        const ie = Je[0] < Je[1] ? Je[0] < Je[2] ? 0 : 2 : Je[1] < Je[2] ? 1 : 2;
        if (Je[ie] > ye) return;
        const He = Fe[ie] > 0 ? Ue[ie] + 1 : Ue[ie];
        Ue[ie] += Fe[ie], Je[ie] += oe[ie];
        const Me = ee.sG(Ue[0], Ue[1], Ue[2]),
          Ke = Me !== ke && !(ee.opaque[ke] && ee.opaque[Me]);
        if (Ke) {
          const ye = [Ue[0], Ue[1], Ue[2]];
          ye[ie] = He;
          const Me = Math.floor(ye[0] / Re),
            Ke = Math.floor(ye[1] / Re),
            Fe = Math.floor(ye[2] / Re);
          !ee.isDrawn(Me, Ke, Fe) && ee.hasParts(Me, Ke, Fe) && be.add(`${Me},${Ke},${Fe}`)
        }
        if (Ke && ee.occluders[Me]) return;
        ke = Me
      }
    }

    function hU(ee, ie) {
      return ee.group - ie.group || ee.nearest - ie.nearest
    }
    class NU {
      constructor(ee, ie) {
        this.device = ee, this.jB = ie, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var ee;
        const ie = null !== (ee = this.free.pop()) && void 0 !== ee ? ee : this.next++;
        if (8 * ie >= this.data.length) {
          const ee = new Float32Array(2 * this.data.length);
          ee.set(this.data), this.data = ee, this.words = new Uint32Array(ee.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.jB()
        }
        return ie
      }
      release(ee) {
        this.free.push(ee)
      }
      set(ee, ie, He, ye, be) {
        const Me = 8 * ee + ny;
        this.data[Me] = ie, this.data[Me + 1] = He, this.data[Me + 2] = ye, this.setVisibility(ee, be)
      }
      setVisibility(ee, ie) {
        this.data[8 * ee + jy] = ie, this.markDirty(ee, ee)
      }
      setFaces(ee, ie, He) {
        const ye = 8 * ee;
        this.words[ye + sy] = ie, this.words[ye + Iy] = He, this.markDirty(ee, ee)
      }
      markDirty(ee, ie) {
        this.dirtyMin = Math.min(this.dirtyMin, ee), this.dirtyMax = Math.max(this.dirtyMax, ie)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const GU = Sy,
      rU = !0;
    const QU = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: GU.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      eF = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class iF {
      constructor(ee) {
        this.device = ee, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(xy), this.dirLightUniforms = this.frameUniforms.subarray(cy.dirLights, cy.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Vi.b)(), this.faceGroups = !0, this.visibilityGraph = rU, this.visCull = rU, this.visCheck = !1, this.visCullMinDistance = jU.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new MF, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Zf = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new PU(ee, ((ee, ie) => this.recordsGroup(ee, ie))), this.slots = new NU(ee, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = Wi(ee), this.frameLayout = ee.createBindGroupLayout({
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
        }), this.frameBuffer = ee.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = ee.createSampler({
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
          bind: (ee, ie) => this.createBinding(this.opaqueRenderable, ie, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (ee, ie) => this.createBinding(this.transparentRenderable, ie, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(ee, ie) {
        this.sceneDepth = new AU(this.device, this.transparentRenderable, ee, ie)
      }
      createFrameBindGroup() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== ee && void 0 !== ee ? ee : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== ie && void 0 !== ie ? ie : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(ee, ie) {
        const He = null !== ie && void 0 !== ie ? ie : ee;
        let ye = this.recordsGroups.get(He);
        return ye || (ye = this.createFrameBindGroup(ee, ie), this.recordsGroups.set(He, ye)), ye
      }
      setChunkMesh(ee, ie, He) {
        var ye;
        let be = this.chunks.get(ee);
        be ? this.geometry.release(be) : (be = {
          mesh: ee,
          slot: this.slots.allocate(),
          origin: [He[0], He[1], He[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: ee.visibility,
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
        }, this.chunks.set(ee, be), this.writeSlot(be)), be.material = ee.material ? this.materialFor(ee.material) : null, be.packed = !!ie.packedVertices, be.vertexCount = (0, EU.g)(ie), be.faceCount = be.vertexCount / 4;
        const Me = null !== (ye = ie.faceGroups) && void 0 !== ye ? ye : null;
        if (be.faceGroups = Me, Me) {
          const ee = SU.n;
          be.planePX = Me[ee], be.planeNX = Me[ee + 1], be.planePY = Me[ee + 2], be.planeNY = Me[ee + 3], be.planePZ = Me[ee + 4], be.planeNZ = Me[ee + 5]
        }
        this.drawWhole(be), 0 !== be.faceCount && (this.geometry.set(be, ie) ? (be.packed && this.slots.setFaces(be.slot, be.vertices.start + be.faceCount, be.faceCount), ie.Pf && this.setChunkMeshLight(ee, ie.Pf)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${be.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(ee, ie) {
        const He = this.chunks.get(ee);
        He && this.geometry.setLight(He, ie)
      }
      drawStats() {
        let ee = this.transparent.length;
        for (const ie of this.opaqueBatches) ee += ie.meshes.length;
        return {
          drawn: ee,
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
      removeChunkMesh(ee) {
        const ie = this.chunks.get(ee);
        ie && (this.geometry.release(ie), this.slots.release(ie.slot), this.chunks.delete(ee))
      }
      remeshLost(ee, ie) {
        this.geometry.release(ie), ie.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** ie.lostRemeshes++);
        const He = ee.xR,
          [ye, be, Me] = He.ube(ie.origin[0], ie.origin[1], ie.origin[2]),
          Ke = He.aT.cT(ye, be, Me);
        Ke && (Ke.YT = !0, Ke.LT = !0, He.VT(Ke, !1))
      }
      chooseFaceRanges(ee, ie, He) {
        const ye = this.faceRanges;
        ee.faceMask = He, ee.rangeCount = (0, nU.n)(ie, He, ye), ee.first0 = ye[0], ee.count0 = ye[1], ee.first1 = ye[2], ee.count1 = ye[3]
      }
      drawWhole(ee) {
        ee.faceMask = -1, ee.faceEpoch = -1, ee.rangeCount = 1, ee.first0 = 0, ee.count0 = ee.faceCount
      }
      writeSlot(ee) {
        const [ie, He, ye] = this.originOffset;
        this.slots.set(ee.slot, ee.origin[0] - ie, ee.origin[1] - He, ee.origin[2] - ye, ee.visibility)
      }
      materialFor(ee) {
        const ie = this.materials.get(ee);
        if (ie) return ie;
        const He = OU(ee);
        if (!He) return this.warnOnce(`material:${ee.name}`, `Lite terrain cannot draw material "${ee.name}"; its chunks are skipped.`), null;
        const {
          model: ye,
          atlas: be,
          texture: Me,
          animated: Ke,
          uniformData: Ue
        } = He, Fe = {
          id: this.materials.size,
          model: ye,
          texture: Me,
          animated: Ke,
          uniformData: Ue,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${ee.name}`,
            size: Ue.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: He.liquid,
          customRenderMat: He.customRenderMat,
          atlasCount: 0,
          W4: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(ee, Fe), this.device.queue.writeBuffer(Fe.uniformBuffer, 0, Ue), Fe.ready = this.createMaterialBindGroup(Fe, be).catch((ie => {
          console.error(`Lite terrain failed to load the textures of material "${ee.name}"`, ie)
        })), Fe
      }
      materialLayout(ee) {
        const ie = function(ee) {
            const ie = ["uniforms"];
            if ("atlas" === ee.texture) {
              ee.animated && ie.push("animData"), ie.push("sampler");
              for (let He = 0; He < ee.atlasCount; He++) ie.push("textureArray")
            } else "single" === ee.texture && ie.push("sampler", "texture");
            return ie
          }(ee),
          He = ie.join(",");
        let ye = this.materialLayouts.get(He);
        if (!ye) {
          const ee = GPUShaderStage.FRAGMENT;
          ye = this.device.createBindGroupLayout({
            label: `terrain-material-${He}`,
            entries: ie.map(((ie, He) => {
              switch (ie) {
                case "uniforms":
                  return {
                    binding: He, visibility: GPUShaderStage.VERTEX | ee, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: He, visibility: GPUShaderStage.VERTEX | ee, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: He, visibility: ee, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: He, visibility: ee, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: He, visibility: ee, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(He, ye)
        }
        return ye
      }
      async createMaterialBindGroup(ee, ie) {
        const He = [{
          buffer: ee.uniformBuffer
        }];
        if (ie) {
          const ye = await ii(this.device, ie.sources);
          ee.atlasCount = ye.length, ee.W4 = ye[0].layerWidth, ee.atlasLayers = ye[0].layers, ie.animDataPerTex && He.push({
            buffer: Ie(this.device, Float32Array.from(ie.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), He.push(this.sampler);
          for (const ee of ye) He.push(ee.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === ee.texture) {
          const {
            url: ie
          } = ee.model.diffuseTexture.source, {
            pixels: ye,
            width: be,
            height: Me
          } = await ei(ie);
          He.push(this.sampler), He.push(Ne(this.device, ye, be, Me, 1, `terrain-${ie}`).createView({
            dimension: "2d"
          }))
        }
        const ye = this.materialLayout(this.programKey(ee, !1));
        ee.bindGroupLayout = ye, ee.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${ee.model.name}`,
          layout: ye,
          entries: He.map(((ee, ie) => ({
            binding: ie,
            resource: ee
          })))
        })
      }
      programKey(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ye = He ? He.lighting : this.lighting,
          be = He ? He.Zf : this.Zf,
          Me = {
            texture: ee.texture,
            atlasCount: ee.atlasCount,
            W4: ee.W4,
            atlasLayers: ee.atlasLayers,
            animated: ee.animated,
            alphaTest: ee.model.transparencyMode === te.s.alphaTest,
            lighting: ye,
            dirLightCount: He ? He.dirLightCount : this.dirLightCount,
            packed: ie
          };
        if (!be) return Me;
        const Ke = this.shaderPackFields(ee, be),
          Ue = "atlas" === ee.texture && ee.model.transparencyMode === te.s.opaque && Py(Ke.packVariant);
        return {
          ...Me,
          ...Ke,
          alphaTest: Me.alphaTest || Ue
        }
      }
      shaderPackFields(ee, ie) {
        const He = this.packVariant(ee, ie);
        return void 0 === He ? wy : {
          packVariant: He,
          liquid: ee.liquid
        }
      }
      packVariant(ee, ie) {
        return ee.customRenderMat ? void 0 : function(ee, ie) {
          const He = ee ? ee.defineFor(ie ? "liquid" : "terrain") : 0;
          return 0 === He ? void 0 : He
        }(ie, ee.liquid)
      }
      isBlended(ee) {
        return ee.model.transparencyMode === te.s.alphaBlend
      }
      shaderModule(ee, ie) {
        let He = this.modules.get(ee);
        return He || (He = this.device.createShaderModule({
          label: ie,
          code: ee
        }), this.modules.set(ee, He)), He
      }
      pipelineFor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ee.bindGroupLayout) return null;
        if (!ye) return this.pipelineOf(ee, ie, He);
        const be = this.pipelineIdNow(ee, ie, !0, He),
          Me = this.pipelines.get(be);
        if (Me) return Me;
        const Ke = this.pipelineOf(ee, ie, He);
        return Ke && void 0 === Me && this.startPipeline(be, ee, {
          ...this.programKey(ee, ie),
          resting: ye
        }, He), Ke
      }
      pipelineOf(ee, ie, He) {
        const ye = this.pipelineIdNow(ee, ie, !1, He),
          be = this.pipelines.get(ye);
        return void 0 !== be ? be : (this.startPipeline(ye, ee, this.programKey(ee, ie), He), null)
      }
      pipelineIdNow(ee, ie, He, ye) {
        const {
          lighting: be,
          dirLightCount: Me
        } = this, {
          transparencyMode: Ke,
          backFaceCulling: Ue
        } = ee.model, Fe = this.packVariant(ee, this.Zf), Je = (ie ? 2 : 0) + (He ? 1 : 0), oe = ee.pipelineIds[Je];
        if (null !== oe && oe.lighting === be && oe.dirLightCount === Me && oe.packVariant === Fe && oe.transparencyMode === Ke && oe.cull === Ue && oe.atlasCount === ee.atlasCount && oe.W4 === ee.W4 && oe.atlasLayers === ee.atlasLayers && oe.colorFormat === ye._colorFormat && oe.depthStencilFormat === ye._depthStencilFormat && oe.sampleCount === ye._sampleCount) return oe.id;
        const Re = this.programKey(ee, ie),
          ke = this.pipelineId(ee, He ? {
            ...Re,
            resting: He
          } : Re, ye);
        return ee.pipelineIds[Je] = {
          id: ke,
          lighting: be,
          dirLightCount: Me,
          packVariant: Fe,
          transparencyMode: Ke,
          cull: Ue,
          atlasCount: ee.atlasCount,
          W4: ee.W4,
          atlasLayers: ee.atlasLayers,
          colorFormat: ye._colorFormat,
          depthStencilFormat: ye._depthStencilFormat,
          sampleCount: ye._sampleCount
        }, ke
      }
      pipelineId(ee, ie, He) {
        return HF(ie, this.isBlended(ee), ee.model.backFaceCulling, He)
      }
      pipelineBuild(ee, ie, He) {
        var ye;
        const be = this.pipelineId(ee, ie, He);
        return null !== (ye = this.builds.get(be)) && void 0 !== ye ? ye : this.startPipeline(be, ee, ie, He)
      }
      startPipeline(ee, ie, He, ye) {
        var be;
        this.pipelines.set(ee, null);
        const Me = eb(He),
          Ke = this.isBlended(ie),
          Ue = this.shadowMask && ye._depthStencilFormat ? function(ee, ie, He, ye) {
            if (void 0 === ee.packVariant || ee.liquid || ie) return "none";
            const be = (0, Qi.c)(ee.packVariant);
            return null === be || void 0 === be || !be.sunShadow || !Uy(be, He) || be.discards || ee.alphaTest && Py(ee.packVariant) ? "none" : ye ? "edge" : "plain"
          }(He, Ke, !!this.sunShadow, ye._sampleCount > 1) : "none";
        let Fe;
        try {
          Fe = ib(He, !!this.sunShadow, Ue)
        } catch (pe) {
          if (!ay(He)) throw pe;
          return this.failedPackBuild(ee, He, Me, pe)
        }
        const Je = this.shaderModule(Fe, Me),
          oe = [];
        He.packed || (oe.push(function(ee, ie) {
          const He = [{
            shaderLocation: GU.position,
            offset: Ni.f.sM,
            format: "float32x3"
          }, {
            shaderLocation: GU.normal,
            offset: Ni.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: GU.color,
            offset: Ni.f.colorOffset,
            format: "unorm8x4"
          }];
          return ee && He.push({
            shaderLocation: GU.uv,
            offset: Ni.f.uvOffset,
            format: "float32x2"
          }), ie && He.push({
            shaderLocation: GU.blockFlagWords,
            offset: Ni.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Ni.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: He
          }
        }("none" !== He.texture, ay(He))), He.lighting && oe.push(QU));
        const Re = ie.model.backFaceCulling,
          ke = {
            label: Me,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, ie.bindGroupLayout, ...hM(this.device, He, !!this.sunShadow, "none" !== Ue)]
            }),
            vertex: {
              module: Je,
              entryPoint: "mainVertex",
              buffers: oe
            },
            fragment: Bi({
              module: Je,
              entryPoint: "mainFragment"
            }, ye, Ke ? eF : null),
            depthStencil: ye._depthStencilFormat ? {
              format: ye._depthStencilFormat,
              depthCompare: null !== (be = ye._depthCompare) && void 0 !== be ? be : ti,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: ye._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Re ? "back" : "none"
            }
          },
          qe = He.resting ? 0 : 1;
        this.compiling += qe;
        const fe = "none" === Ue ? this.device.createRenderPipelineAsync(ke) : this.startMaskPipelines(Je, ke, "edge" === Ue);
        fe.then((ie => {
          this.compiling -= qe, this.pipelines.set(ee, ie)
        }), (ee => {
          this.compiling -= qe, console.error(`Lite terrain pipeline ${Me} failed`, ee), lU(this.device, He, Me, Je, ee)
        }));
        const Te = {
          name: Me,
          module: Je,
          built: fe
        };
        return this.builds.set(ee, Te), Te
      }
      startMaskPipelines(ee, ie, He) {
        const ye = ie.depthStencil,
          be = this.device.createRenderPipelineAsync(He ? ie : {
            ...ie,
            depthStencil: {
              ...ye,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Me = this.device.createRenderPipelineAsync({
            ...ie,
            label: `${ie.label}-prepass`,
            fragment: {
              module: ee,
              entryPoint: "prepassFragment",
              targets: [{
                format: YU
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([be, Me]).then((ee => {
          let [ie, He] = ee;
          return this.prepassOf.set(ie, He), this.maskPipelines++, ie
        }))
      }
      failedPackBuild(ee, ie, He, ye) {
        console.error(`Lite terrain pipeline ${He} failed`, ye), lU(this.device, ie, He, null, ye);
        const be = Promise.reject(ye);
        be.catch((() => {}));
        const Me = {
          name: He,
          module: null,
          built: be
        };
        return this.builds.set(ee, Me), Me
      }
      checkShaderPack(ee) {
        return vU(ee, {
          device: this.device,
          target: this.target,
          material: ee => this.materialFor(ee),
          programKey: (ee, ie, He) => this.programKey(ee, ie, He),
          pipelineBuild: (ee, ie, He) => this.pipelineBuild(ee, ie, He)
        })
      }
      createBinding(ee, ie, He) {
        return this.target = ie, {
          renderable: ee,
          pipeline: Pi(this.device, ie),
          draw: ee => {
            this.geometry.setDrawing(!0);
            try {
              return He ? this.drawTransparent(ee, ie) : this.drawOpaque(ee, ie)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(ee, ie) {
        var He, ye, be, Me;
        const {
          uk: Ke
        } = ee;
        this.lighting = ee.GT;
        const Ue = (0, BU.x)(ie);
        this.dirLightCount = Math.min(Ue, 4), this.Zf = null !== (He = Ke.Zf) && void 0 !== He ? He : null, Ue > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(ee, ie), this.animateMaterials(ie.animTick);
        const Fe = Ke.yq,
          Je = Fe[0] !== this.originOffset[0] || Fe[1] !== this.originOffset[1] || Fe[2] !== this.originOffset[2];
        Je && (this.originOffset[0] = Fe[0], this.originOffset[1] = Fe[1], this.originOffset[2] = Fe[2]);
        const oe = ie.eye;
        this.eye[0] = oe[0], this.eye[1] = oe[1], this.eye[2] = oe[2], this.writeShaderPackInputs();
        const Re = ie.projectionMatrix,
          ke = 0 === Re[15];
        let qe = 0;
        (Je || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: fe
        } = this;
        Ai(this.transparentRenderable._worldCenter, ie, wi), this.resetBatches(ke), this.transparent.length = 0, this.unlit.length = 0;
        const Te = Ke.xR.ER,
          pe = Te / 2 * Math.sqrt(3);
        let Xe = 0;
        const ze = !!this.Zf && Dy(this.Zf.defineFor("liquid"));
        let Be = !1;
        const Ee = null !== (ye = null === (be = Ke.iW) || void 0 === be ? void 0 : be.visibility) && void 0 !== ye ? ye : null,
          ge = this.visCull && ke && 0 === this.compiling && null !== Ee && Ke.xR.KMe[0] >= this.visCullMinDistance ? this.target : null,
          Oe = this.visPassable,
          de = this.visCandidates,
          We = this.visCandidateBatches;
        Oe.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let te = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Ze = 0;
        const we = (ee, He) => {
          if (!He) return this.transparent.push(ee), void(Ze += 2 * ee.faceCount);
          if (null !== ee.faceGroups && He.faceCull) {
            if (0 === qe && (qe = (0, nU.c)(Re, ie.renderWidth, ie.renderHeight), qe !== this.faceFocalPx && (this.faceFocalPx = qe, fe = ++this.faceEpoch)), ee.faceEpoch !== fe) {
              ee.faceEpoch = fe;
              const ie = Math.sqrt(ee.distance) + pe,
                He = (0, nU.j)(ee.planePX, ee.planeNX, ee.planePY, ee.planeNY, ee.planePZ, ee.planeNZ, this.eye[0] - (ee.origin[0] - this.originOffset[0]), this.eye[1] - (ee.origin[1] - this.originOffset[1]), this.eye[2] - (ee.origin[2] - this.originOffset[2]), (0, nU.g)(ie, qe));
              He !== ee.faceMask && this.chooseFaceRanges(ee, ee.faceGroups, He)
            }
            if (0 === ee.rangeCount) return
          } else - 1 !== ee.faceMask && this.drawWhole(ee);
          He.meshes.push(ee), Ze += 2 * ((ee.rangeCount > 0 ? ee.count0 : 0) + (ee.rangeCount > 1 ? ee.count1 : 0))
        };
        for (const Pe of this.chunks.values()) {
          Je && this.writeSlot(Pe);
          const ee = Pe.mesh.visibility;
          ee !== Pe.visibility && (Pe.visibility = ee, this.slots.setVisibility(Pe.slot, ee));
          const {
            material: He
          } = Pe;
          this.geometry.lost(Pe) && performance.now() >= Pe.lostRetryAt && this.remeshLost(Ke, Pe);
          const ye = !(null === He || void 0 === He || !He.bindGroup) && this.geometry.backed(Pe),
            be = ye && this.lighting && !Pe.vertices.page.twin;
          if (ge && (Number.isNaN(Pe.key) && (Pe.ci = Math.floor(Pe.origin[0] / Te), Pe.cj = Math.floor(Pe.origin[1] / Te), Pe.ck = Math.floor(Pe.origin[2] / Te), Pe.key = (0, sU.f)(Pe.ci, Pe.cj, Pe.ck)), (!ye || ee < 1 || be || !this.batchDraws(He, Pe.packed, ge)) && this.visSeeThrough(Pe, ge) && Oe.add(Pe.key)), !ye) continue;
          be || (Pe.lostRemeshes = 0);
          const Me = Pe.origin[0] - this.originOffset[0],
            Ue = Pe.origin[1] - this.originOffset[1],
            Fe = Pe.origin[2] - this.originOffset[2];
          if (!(0, UU.b)(ie.frustum, Me, Ue, Fe, Te)) continue;
          const oe = Me + Te / 2 - this.eye[0],
            Re = Ue + Te / 2 - this.eye[1],
            qe = Fe + Te / 2 - this.eye[2];
          if (Pe.distance = oe * oe + Re * Re + qe * qe, this.lighting && !Pe.lit && (Xe = Math.max(Xe, Pe.vertexCount), this.unlit.push(Pe)), be) continue;
          const fe = this.isBlended(He) ? null : this.batchFor(He, Pe.packed, Pe.vertices.page, 1 === ee, ke);
          ge ? (de[te] = Pe, We[te++] = fe) : we(Pe, fe)
        }
        const De = ge ? this.sweepVisibility(ee, ie, Ee) : null;
        null === (Me = (0, LM.y)(Ke)) || void 0 === Me || Me.update(ie.frustum, this.originOffset, Te, De);
        for (let Pe = 0; Pe < te; Pe++) {
          const ee = de[Pe];
          !De || De.isDrawn(ee.ci, ee.cj, ee.ck) ? we(ee, We[Pe]) : (this.visCulledParts++, this.visCulledTriangles += 2 * ee.faceCount)
        }
        for (const Pe of this.transparent) Be ||= ze && Pe.material.liquid && !Pe.material.customRenderMat;
        this.submittedTriangles = Ze, De && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(ee, ie, De)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Be) : Be && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Xe > 0 && this.geometry.lightFullSky(this.unlit, Xe);
        for (const Pe of this.opaqueBatches) this.chunkSorter.sort(Pe.meshes, 1) || Pe.meshes.sort(yF);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(bF)
      }
      sweepVisibility(ee, ie, He) {
        const {
          xR: ye
        } = ee.uk, be = ye.ER, Me = this.visPassable, Ke = this.eye[0] + this.originOffset[0], Ue = this.eye[1] + this.originOffset[1], Fe = this.eye[2] + this.originOffset[2];
        if (!He.eyeClear(Ke, Ue, Fe, ie.near, ie.projectionMatrix, ye)) return null;
        const [Je, oe] = ye.KMe, Re = He.update(Ke, Ue, Fe, be, Je, oe, Me);
        return this.visSweeps = He.sweeps, Re ? He : null
      }
      visSeeThrough(ee, ie) {
        const {
          material: He
        } = ee;
        return (!He || !this.isBlended(He)) && (ee.mesh.visibility < 1 || !(null !== He && void 0 !== He && He.bindGroup) || ee.faceCount > 0 && (!this.geometry.backed(ee) || this.lighting && !ee.vertices.page.twin) || !this.batchDraws(He, ee.packed, ie))
      }
      batchDraws(ee, ie, He) {
        var ye;
        const be = ie ? 2 : 0;
        if (ee === this.visDrawsMaterial && function(ee, ie) {
            return 0 !== (ee & 1 << ie)
          }(this.visDrawsBits, be)) return 0 !== (this.visDrawsBits & 2 << be);
        let Me = null !== (ye = this.visBatchDraws.get(ee)) && void 0 !== ye ? ye : 0;
        if (!(Me & 1 << be)) {
          Me |= 1 << be | (!!ee.bindGroupLayout && this.canDraw(ee, ie) && !!this.pipelines.get(this.pipelineIdNow(ee, ie, !1, He)) ? 2 << be : 0), this.visBatchDraws.set(ee, Me)
        }
        return this.visDrawsMaterial = ee, this.visDrawsBits = Me, 0 !== (Me & 2 << be)
      }
      runVisCheck(ee, ie, He) {
        const {
          uk: ye
        } = ee, {
          xR: be
        } = ye, Me = be.ER, Ke = new Set;
        for (const qe of this.chunks.values()) Ke.add(qe.key);
        const Ue = nb.Matrix.FromArray(ie.viewProjectionMatrix).invert(),
          [Fe, Je, oe] = this.originOffset,
          Re = new nb.rf,
          ke = function(ee, ie, He, ye) {
            const be = new Set;
            for (let Me = 0; Me < 27; Me++)
              for (let Ke = 0; Ke < 48; Ke++) {
                const Ue = He((Ke + .5) / 48 * 2 - 1, (Me + .5) / 27 * 2 - 1);
                IU(ee, ie, [Ue[0] - ie[0], Ue[1] - ie[1], Ue[2] - ie[2]], ye, be)
              }
            return be
          }({
            sG: (ee, ie, He) => be.sG(ee, ie, He),
            occluders: He.occluders,
            opaque: He.opaque,
            BR: Me,
            isDrawn: (ee, ie, ye) => He.isDrawn(ee, ie, ye),
            hasParts: (ee, ie, He) => Ke.has((0, sU.f)(ee, ie, He))
          }, [this.eye[0] + Fe, this.eye[1] + Je, this.eye[2] + oe], ((ee, ie) => (nb.rf.TransformCoordinatesFromFloatsToRef(ee, ie, .5, Ue, Re), [Re.x + Fe, Re.y + Je, Re.z + oe])), (be.KMe[0] + 1) * Me);
        this.visViolations = ke.size;
        for (const qe of ke) this.warnOnce(`vis:${qe}`, `Lite terrain cave culling skipped chunk ${qe}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var ee;
        null !== (ee = this.Zf) && void 0 !== ee && ee.isRunning() && (this.shaderPackInputs ??= new NM(this.device, this.Zf.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Zf, this.eye, this.lighting))
      }
      bindShaderPackInputs(ee, ie, He) {
        var ye, be, Me, Ke;
        let Ue = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Fe = this.packVariant(ie, He);
        if (void 0 === Fe) return;
        this.shaderPackInputs || (this.shaderPackInputs = new NM(this.device, He.textureLayers(), this.sunShadow), this.shaderPackInputs.write(He, this.eye, this.lighting));
        const Je = Dy(Fe) ? null !== (ye = null === (be = this.sceneDepth) || void 0 === be ? void 0 : be.view) && void 0 !== ye ? ye : this.standIn() : null,
          oe = Ue ? null !== (Me = null === (Ke = this.shadowMask) || void 0 === Ke ? void 0 : Ke.view) && void 0 !== Me ? Me : this.standIn() : null;
        this.shaderPackInputs.bind(ee, Je, IM(Fe, !!this.sunShadow), oe)
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
        var ee, ie;
        return null !== (ee = null === (ie = this.shaderPackInputs) || void 0 === ie ? void 0 : ie.bindGroupFor(null, !0)) && void 0 !== ee ? ee : null
      }
      resetBatches(ee) {
        const ie = this.opaqueBatches;
        let He = 0;
        for (const ye of ie) ye.meshes.length > 0 && (ye.meshes.length = 0, ye.faceCull = this.batchFaceCull(ye.material, ee), ie[He++] = ye);
        ie.length = He
      }
      orderBatches() {
        const ee = this.opaqueBatches;
        for (let ie = 0; ie < ee.length; ie++) {
          const He = ee[ie];
          He.group = ie;
          for (let ye = 0; ye < ie; ye++) {
            const ie = ee[ye];
            if (ie.material === He.material && ie.packed === He.packed) {
              He.group = ie.group;
              break
            }
          }
          He.nearest = He.meshes.length > 0 ? He.meshes[0].distance : 1 / 0
        }
        ee.sort(hU)
      }
      batchFor(ee, ie, He, ye, be) {
        for (const Ke of this.opaqueBatches)
          if (Ke.material === ee && Ke.packed === ie && Ke.page === He && Ke.resting === ye) return Ke;
        const Me = {
          material: ee,
          packed: ie,
          page: He,
          resting: ye,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(ee, be)
        };
        return this.opaqueBatches.push(Me), Me
      }
      batchFaceCull(ee, ie) {
        return !(!ie || !(0, SU.v)(ee.model)) && (!this.Zf || ! function(ee) {
          var ie;
          return !(null === (ie = (0, Qi.c)(ee)) || void 0 === ie || !ie.movesVertices)
        }(this.packVariant(ee, this.Zf)))
      }
      writeFrameUniforms(ee, ie) {
        const He = this.frameUniforms,
          ye = cy;
        if ((0, BU.A)(ee, He), He[ye.fogInfos] = ie.fogEnabled ? ie.fogMode : 0, He[ye.fogInfos + 1] = ie.fogStart, He[ye.fogInfos + 2] = ie.fogEnd, He[ye.fogInfos + 3] = ie.fogDensity, He.set(ie.fogColour, ye.fogColour), He[ye.outputHeight] = ie.renderHeight, He.set(ie.ambientColour, ye.sceneAmbient), (0, BU.v)(ie, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const ie = (0, EU.i)(ee.XT, ee.Sf, ee.jf);
          for (let ee = 0; ee < 4; ee++) He[ye.aoLevels + ee] = ie[ee] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, He)
      }
      animateMaterials(ee) {
        const ie = Ly.anim;
        for (const He of this.materials.values()) He.animated && (He.uniformData[ie] = ee, this.device.queue.writeBuffer(He.uniformBuffer, 4 * ie, He.uniformData, ie, 1))
      }
      canDraw(ee, ie) {
        return !("atlas" === ee.texture && !ie) || (this.warnOnce(`stride:${ee.id}`, `Lite terrain: material "${ee.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(ee, ie) {
        let He = 0;
        ee.setBindGroup(1, this.frameBindGroup);
        for (const ye of this.opaqueBatches) {
          if (!ye.meshes.length || !this.canDraw(ye.material, ye.packed)) continue;
          const be = this.pipelineFor(ye.material, ye.packed, ie, ye.resting);
          be && (ee.setPipeline(be), ee.setBindGroup(2, ye.material.bindGroup), this.Zf && this.bindShaderPackInputs(ee, ye.material, this.Zf, this.prepassOf.has(be)), He += this.drawBatch(ee, ye))
        }
        return He
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(ee, ie, He) {
        const ye = this.target,
          be = this.Zf;
        if (!ye || !be || 0 === this.maskPipelines) return 0;
        let Me = 0,
          Ke = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Ue of this.opaqueBatches) {
            if (!Ue.meshes.length || !this.canDraw(Ue.material, Ue.packed)) continue;
            const Fe = this.pipelineFor(Ue.material, Ue.packed, ye, Ue.resting),
              Je = Fe && this.prepassOf.get(Fe);
            Je && (Ke || (Ke = ee.beginRenderPass(ie), Ke.setBindGroup(0, He), Ke.setBindGroup(1, this.frameBindGroup)), Ke.setPipeline(Je), Ke.setBindGroup(2, Ue.material.bindGroup), this.bindShaderPackInputs(Ke, Ue.material, be, !0), Me += this.drawBatch(Ke, Ue))
          }
        } finally {
          var Ue;
          null === (Ue = Ke) || void 0 === Ue || Ue.end(), this.geometry.setDrawing(!1)
        }
        return Me
      }
      drawBatch(ee, ie) {
        let He = 0;
        for (const ye of ie.meshes) {
          const {
            rangeCount: ie
          } = ye;
          ie > 0 && (He += this.geometry.draw(ee, ye, this.lighting, ye.first0, ye.count0), ie > 1 && (He += this.geometry.draw(ee, ye, this.lighting, ye.first1, ye.count1)))
        }
        return He
      }
      drawTransparent(ee, ie) {
        let He = 0,
          ye = null,
          be = null;
        ee.setBindGroup(1, this.frameBindGroup);
        for (const Me of this.transparent) {
          const Ke = Me.material;
          if (!this.canDraw(Ke, Me.packed)) continue;
          const Ue = this.pipelineFor(Ke, Me.packed, ie);
          Ue && (Ue !== ye && (ee.setPipeline(Ue), ye = Ue, this.Zf && this.bindShaderPackInputs(ee, Ke, this.Zf)), Ke !== be && (ee.setBindGroup(2, Ke.bindGroup), be = Ke), He += this.geometry.draw(ee, Me, this.lighting))
        }
        return He
      }
    }

    function HF(ee, ie, He, ye) {
      return `${eb(ee)}|${ee.atlasLayers}|${ee.W4}|${ie}|${He}|${ye._colorFormat}|${ye._depthStencilFormat}|${ye._sampleCount}`
    }

    function yF(ee, ie) {
      return ee.distance - ie.distance
    }

    function bF(ee, ie) {
      return ie.distance - ee.distance
    }
    class MF {
      constructor() {
        this.left = []
      }
      sort(ee, ie) {
        for (let He = 0; He < ee.length; He++) {
          const ie = ee[He].distance;
          if (ie - ie !== 0) return !1
        }
        return this.sortRange(ee, 0, ee.length, ie), !0
      }
      sortRange(ee, ie, He, ye) {
        if (He - ie <= 16) {
          for (let be = ie + 1; be < He; be++) {
            const He = ee[be],
              Me = ye * He.distance;
            let Ke = be - 1;
            for (; Ke >= ie && ye * ee[Ke].distance > Me; Ke--) ee[Ke + 1] = ee[Ke];
            ee[Ke + 1] = He
          }
          return
        }
        const be = ie + He >>> 1;
        if (this.sortRange(ee, ie, be, ye), this.sortRange(ee, be, He, ye), ye * ee[be - 1].distance <= ye * ee[be].distance) return;
        const {
          left: Me
        } = this, Ke = be - ie;
        for (let oe = 0; oe < Ke; oe++) Me[oe] = ee[ie + oe];
        let Ue = 0,
          Fe = be,
          Je = ie;
        for (; Ue < Ke && Fe < He;) ee[Je++] = ye * ee[Fe].distance < ye * Me[Ue].distance ? ee[Fe++] : Me[Ue++];
        for (; Ue < Ke;) ee[Je++] = Me[Ue++]
      }
    }
    const KF = Math.ceil(102);

    function UF(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ie;
      const Me = Math.min(ie, He),
        Ke = new Uint32Array(WH(ye));
      for (let Ue = 0; Ue < ye; Ue++) {
        const ie = Math.floor(Ue * Me / ye),
          He = Math.max(ie + 1, Math.floor((Ue + 1) * Me / ye));
        for (let Fe = 0; Fe < ye; Fe++) {
          const Je = Math.floor(Fe * Me / ye),
            oe = Math.max(Je + 1, Math.floor((Fe + 1) * Me / ye));
          let Re = 0;
          for (let ye = ie; ye < He; ye++)
            for (let ie = Je; ie < oe; ie++) ee[ye * be + ie] >= KF && Re++;
          if (2 * Re >= (He - ie) * (oe - Je)) {
            const ee = Fe + ye * Ue;
            Ke[ee >>> 5] |= 1 << (31 & ee)
          }
        }
      }
      return Ke
    }

    function FF(ee) {
      return Math.max(1, Math.min(16, ee))
    }
    class JF {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = ee, this.loadTexture = ie, this.warn = He, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(ee, ie) {
        return (ee.iN !== this.builtVersion || this.blockCaster.length !== ie) && (this.build(ee, ie), !0)
      }
      build(ee, ie) {
        this.builtVersion = ee.iN;
        const He = new Uint16Array(ie),
          ye = new Map;
        for (let be = 1; be < ie; be++) {
          const ie = this.classify(ee, be, ye);
          if (null === ie || ie === BH) {
            He[be] = null === ie ? 0 : BH;
            continue
          }
          let Me = this.byKey.get(ie.key);
          void 0 === Me && (Me = this.allocate(ie), this.byKey.set(ie.key, Me)), He[be] = Me
        }
        this.blockCaster = He, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(ee, ie) {
        const He = ee.Tee[ie];
        if ("function" !== typeof He) return He;
        try {
          return He()
        } catch (ye) {
          return this.warnOnce(`Sun shadows: no caster option for block ${ie}: ${ye instanceof Error?ye.message:String(ye)}`), null
        }
      }
      classify(ee, ie, He) {
        const ye = this.option(ee, ie);
        if ("none" === ye) return null;
        if (ye && ye.planes.length > 0) {
          const ee = ye.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(ee)}`,
            planes: ee
          }
        }
        if (ee.xq[ie]) return null;
        const be = ee.Cq[ie] ? ee.FN(ie) : null;
        if (be && be.length >= 6) {
          const ee = function(ee) {
            const ie = new Uint32Array(16);
            for (let He = 0; He + 6 <= ee.length; He += 6) {
              const ye = [0, 1, 2].map((ie => Math.max(0, Math.ceil(8 * ee[He + ie] - .5)))),
                be = [0, 1, 2].map((ie => Math.min(7, Math.floor(8 * ee[He + ie + 3] - .5))));
              for (let ee = ye[2]; ee <= be[2]; ee++)
                for (let He = ye[1]; He <= be[1]; He++)
                  for (let Me = ye[0]; Me <= be[0]; Me++) {
                    const ye = Me + 8 * (He + 8 * ee);
                    ie[ye >>> 5] |= 1 << (31 & ye)
                  }
            }
            return ie
          }(be);
          return function(ee) {
            return ee.every((ee => 4294967295 === ee))
          }(ee) ? BH : ee.every((ee => 0 === ee)) ? null : {
            kind: "shape",
            key: `shape:${ee.join(",")}`,
            mask: ee
          }
        }
        if (ee.Cw[ie] || !ee.zT[ie]) return null;
        const Me = [0, 1, 2, 3, 4, 5].map((ye => {
          const be = ee.BT[6 * ie + ye];
          let Me = He.get(be);
          return void 0 === Me && (Me = function(ee) {
            if (!ee || ee.PT) return null;
            const {
              O4: ie,
              W4: He,
              f4: ye
            } = ee;
            if (!ie || !He || !(He > 0) || void 0 === ye || !(ye >= 0)) return null;
            const be = ie[0],
              Me = He * He * 4;
            if (!be || be.byteLength < Me) return null;
            const Ke = Math.floor(be.byteLength / Me),
              Ue = ie[Math.floor(ye / Ke)];
            if (!Ue) return null;
            const Fe = new Uint8Array(Ue.buffer, Ue.byteOffset, Ue.byteLength),
              Je = ye % Ke * Me;
            if (Je + Me > Fe.length) return null;
            const oe = new Uint8Array(He * He);
            let Re = !1;
            for (let ke = 0; ke < oe.length; ke++) oe[ke] = Fe[Je + 4 * ke + 3], Re ||= oe[ke] < KF;
            return Re ? {
              alpha: oe,
              width: He
            } : null
          }(ee.DT(be)), He.set(be, Me)), Me
        }));
        if (Me.every((ee => null === ee))) return BH;
        const Ke = FF(Math.max(...Me.map((ee => {
            var ie;
            return null !== (ie = null === ee || void 0 === ee ? void 0 : ee.width) && void 0 !== ie ? ie : 1
          })))),
          Ue = new Uint32Array(WH(Ke)).fill(4294967295),
          Fe = Me.map((ee => null === ee ? Ue : UF(ee.alpha, ee.width, ee.width, Ke)));
        return {
          kind: "cutout",
          key: `cutout:${Ke}:${Fe.map((ee=>ee.join(","))).join("|")}`,
          size: Ke,
          faces: Fe
        }
      }
      allocate(ee) {
        if (this.nextCaster >= tH) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const ie = this.nextCaster++;
        if (this.writeCaster(ie, EH, 0, 0, 0), "shape" === ee.kind) {
          const He = this.allocateMask(ee.mask.length);
          He >= 0 && (this.sink(He, ee.mask), this.writeCaster(ie, gH, He, 0, 8))
        } else if ("cutout" === ee.kind) {
          const He = WH(ee.size),
            ye = this.allocateMask(6 * He);
          if (ye >= 0) {
            const be = new Uint32Array(6 * He);
            ee.faces.forEach(((ee, ie) => {
              be.set(ee, ie * He)
            })), this.sink(ye, be), this.writeCaster(ie, dH, ye, 0, ee.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(ie, ee.planes).finally((() => {
          this.planesLoading--
        })));
        return ie
      }
      async loadPlanes(ee, ie) {
        const He = await Promise.all(ie.map((ee => this.texture(ee.texture))));
        if (He.some((ee => null === ee))) return;
        const ye = He,
          be = FF(Math.max(...ye.map((ee => Math.min(ee.width, ee.height))))),
          Me = WH(be),
          Ke = this.allocateMask(ie.length * (4 + Me));
        if (Ke < 0) return;
        const Ue = new Uint32Array(ie.length * (4 + Me)),
          Fe = 4 * ie.length;
        ie.forEach(((ee, ie) => {
          const He = Ke + Fe + ie * Me;
          Ue.set(function(ee, ie) {
            const [He, ye] = ee.tangent, be = Math.hypot(He, ye) || 1, Me = He / be, Ke = ye / be, Ue = ee.centre[0] * Ke - ee.centre[1] * Me, Fe = new Uint32Array(4);
            return new Float32Array(Fe.buffer, 0, 3).set([Me, Ke, Ue]), Fe[3] = ie, Fe
          }(ee, He), 4 * ie), Ue.set(UF(ye[ie].alpha, ye[ie].width, ye[ie].height, be), Fe + ie * Me)
        })), this.sink(Ke, Ue), this.writeCaster(ee, OH, Ke, ie.length, be)
      }
      texture(ee) {
        let ie = this.textures.get(ee);
        return ie || (ie = this.loadTexture(ee).catch((ie => (this.warn(`Sun shadows: no mask for ${ee}: ${ie instanceof Error?ie.message:String(ie)}`), null))), this.textures.set(ee, ie)), ie
      }
      allocateMask(ee) {
        if (this.nextMaskWord + ee > ZH) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const ie = 32768 + this.nextMaskWord;
        return this.nextMaskWord += ee, ie
      }
      writeCaster(ee, ie, He, ye, be) {
        this.sink(0 + 4 * ee, Uint32Array.of(ie, He, ye, be))
      }
      warnOnce(ee) {
        this.warned.has(ee) || (this.warned.add(ee), this.warn(ee))
      }
    }
    var oF = He(3061);

    function RF(ee) {
      return !ee.YT && !ee.wZ && !ee.JT
    }

    function kF() {
      return {
        bricks: new Uint32Array(RH),
        cells: new Uint16Array(32768),
        special: new Uint8Array(JH)
      }
    }
    class qF {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = ee, this.writeVoxels = ie, this.writePool = He, this.warn = ye, this.eyeChunk = null, this.slotChunk = new Array(yH).fill(null), this.slotVersion = new Float64Array(yH).fill(-1), this.slotPool = new Array(yH).fill(null), this.starved = new Uint8Array(yH), this.queue = [], this.queued = new Uint8Array(yH), this.queueSorted = !0, this.freePool = new Uint32Array(wH), this.freeCount = wH, this.casterTable = null, this.warnedPool = !1, this.scratch = kF(), this.victimScratch = kF(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * yH), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let be = 0; be < wH; be++) this.freePool[be] = 65535 - be
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return wH - this.freeCount
      }
      chunkAdded(ee) {
        if (null === this.eyeChunk || !this.inRadius(ee.i, ee.j, ee.k)) return;
        const ie = pH(ee.i, ee.j, ee.k);
        this.slotChunk[ie] = ee, this.slotVersion[ie] = -1, this.enqueue(ie)
      }
      update(ee, ie, He) {
        const ye = this.casters.blockCaster;
        if (ye !== this.casterTable) {
          this.casterTable = ye;
          for (let ee = 0; ee < yH; ee++) this.slotVersion[ee] = -1, this.slotChunk[ee] && this.enqueue(ee)
        }
        const be = Math.floor(ee[0] / 32),
          Me = Math.floor(ee[1] / 32),
          Ke = Math.floor(ee[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== be || this.eyeChunk[1] !== Me || this.eyeChunk[2] !== Ke) && (this.eyeChunk = [be, Me, Ke], this.follow(ie), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Ue = 0; Ue < yH; Ue++) {
          const ee = this.slotChunk[Ue];
          ee && (ee.RZ || ee.kT !== this.slotVersion[Ue]) && this.enqueue(Ue)
        }
        this.drain(He), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(ee, ie) {
        this.records.set(ie, 4 * ee), this.windowTopStale = !0, this.writeVoxels(4 * ee, ie)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const ee = this.records;
        let ie = -1 / 0;
        for (let ye = 0; ye < ee.length; ye += 4) {
          const He = 255 & ee[ye + 3];
          He !== KH && He !== UH || !this.inRadius(ee[ye], ee[ye + 1], ee[ye + 2]) || (ie = Math.max(ie, ee[ye + 1] * eH + (ee[ye + 3] >>> 8)))
        }
        const He = ie === -1 / 0 ? 1 : ie + qH;
        He !== this.windowTop[0] && (this.windowTop[0] = He, this.writeVoxels(kH, this.windowTop))
      }
      follow(ee) {
        const ie = this.eyeChunk,
          [He, ye, be] = iH;
        for (let Ke = -be; Ke <= be; Ke++)
          for (let be = -ye; be <= ye; be++)
            for (let ye = -He; ye <= He; ye++) {
              var Me;
              const He = ie[0] + ye,
                Ue = ie[1] + be,
                Fe = ie[2] + Ke,
                Je = pH(He, Ue, Fe),
                oe = this.slotChunk[Je];
              if (oe && !oe.RZ && oe.i === He && oe.j === Ue && oe.k === Fe) continue;
              const Re = null !== (Me = ee(He, Ue, Fe)) && void 0 !== Me ? Me : null;
              oe && (oe.i !== He || oe.j !== Ue || oe.k !== Fe) && this.slotPool[Je] && (this.release(Je), this.record.fill(0), this.writeRecord(Je, this.record)), this.slotChunk[Je] = Re, this.slotVersion[Je] = -1, (Re || oe) && this.enqueue(Je)
            }
      }
      requeueStarved() {
        for (let ee = 0; ee < yH; ee++) this.starved[ee] && this.slotChunk[ee] && this.enqueue(ee)
      }
      enqueue(ee) {
        this.queued[ee] || (this.queued[ee] = 1, this.queue.push(ee), this.queueSorted = !1)
      }
      drain(ee) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const ee = new Map;
          for (const ie of this.queue) ee.set(ie, this.slotDistance(ie));
          this.queue.sort(((ie, He) => ee.get(He) - ee.get(ie))), this.queueSorted = !0
        }
        const ie = performance.now();
        let He = 0;
        const ye = [];
        for (; this.queue.length > 0 && (0 === He || performance.now() - ie < ee);) {
          const ee = this.queue.pop(),
            ie = this.slotChunk[ee];
          !ie || ie.RZ || RF(ie) ? (this.queued[ee] = 0, this.encodeSlot(ee), He++) : ye.push(ee)
        }
        for (let be = ye.length - 1; be >= 0; be--) this.queue.push(ye[be])
      }
      slotDistance(ee) {
        const ie = this.slotChunk[ee],
          He = this.eyeChunk;
        return ie ? Math.max(Math.abs(ie.i - He[0]), Math.abs(ie.j - He[1]), Math.abs(ie.k - He[2])) : 0
      }
      inRadius(ee, ie, He) {
        const ye = this.eyeChunk,
          [be, Me, Ke] = iH;
        return Math.abs(ee - ye[0]) <= be && Math.abs(ie - ye[1]) <= Me && Math.abs(He - ye[2]) <= Ke
      }
      release(ee) {
        const ie = this.slotPool[ee];
        if (ie) {
          for (let ee = ie.length - 1; ee >= 0; ee--) this.freePool[this.freeCount++] = ie[ee];
          this.slotPool[ee] = null
        }
      }
      encodeSlot(ee) {
        var ie, He, ye, be, Me;
        let Ke = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Ue = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Fe = null !== (ie = null === (He = this.slotPool[ee]) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : 0;
        this.release(ee), this.starved[ee] = 0;
        const Je = this.slotChunk[ee],
          oe = this.record;
        if (!Je || Je.RZ || !Je.Uq) return this.slotChunk[ee] = null, this.slotVersion[ee] = -1, oe.fill(0), this.writeRecord(ee, oe), void(Fe > 0 && this.requeueStarved());
        this.slotVersion[ee] = Je.kT;
        const Re = this.encodeBricks(Je, ee, Ke, Ue);
        oe[0] = Je.i, oe[1] = Je.j, oe[2] = Je.k, oe[3] = Re, this.writeRecord(ee, oe), null === (ye = this.encoded) || void 0 === ye || ye.call(this, Je), Ue && (null !== (be = null === (Me = this.slotPool[ee]) || void 0 === Me ? void 0 : Me.length) && void 0 !== be ? be : 0) < Fe && this.requeueStarved()
      }
      encodeBricks(ee, ie, He, ye) {
        if (ee.Yf) return MH;
        const be = this.casters.blockCaster,
          {
            data: Me,
            stride: Ke,
            offset: Ue
          } = ee.Uq,
          [Fe, Je, oe] = Ke,
          Re = eH,
          {
            bricks: ke,
            cells: qe,
            special: fe
          } = He;
        ke.fill(0), fe.fill(0);
        let Te = 0,
          pe = 0,
          Xe = 0;
        for (let ze = 0; ze < Re; ze++) {
          const ie = ze >> 2,
            He = 3 & ze,
            ye = ee.yf[ze],
            Ke = ye === oF.e ? -1 : ye < be.length ? be[ye] : 0;
          if (0 !== Ke)
            for (let ee = 0; ee < Re; ee++) {
              const ye = ee >> 2,
                Be = 3 & ee;
              let Ee = Ue + ee * Fe + ze * Je;
              for (let ee = 0; ee < Re; ee++, Ee += oe) {
                let Ue = Ke;
                if (Ue < 0) {
                  const ee = Me[Ee];
                  if (Ue = ee < be.length ? be[ee] : 0, 0 === Ue) continue
                }
                const Fe = XH(ye, ie, ee >> 2),
                  Je = zH(Be, He, 3 & ee);
                ke[3 * Fe + (Je >>> 5)] |= 1 << (31 & Je), qe[Fe * FH + Je] = Ue, Te++, Xe = ze, Ue === BH ? pe++ : fe[Fe] = 1
              }
            }
        }
        return 0 === Te ? MH : 32768 === pe ? KH | Xe << 8 : (this.writePoolEntries(ie, He, ye), this.writeVoxels(oH + ie * RH, ke), UH | Xe << 8)
      }
      writePoolEntries(ee, ie, He) {
        const {
          bricks: ye,
          cells: be,
          special: Me
        } = ie, Ke = this.entry;
        let Ue = 0;
        for (let oe = 0; oe < JH; oe++) Ue += Me[oe];
        if (0 === Ue) return;
        He && this.freeCount < Ue && this.evictBeyond(ee, Ue);
        const Fe = new Uint32Array(He ? Math.min(Ue, this.freeCount) : 0);
        let Je = 0;
        for (let oe = 0; oe < JH; oe++) {
          if (!Me[oe]) continue;
          const He = 3 * oe;
          if (Je === Fe.length) {
            this.dropSpecials(ie, oe), this.starved[ee] = 1;
            continue
          }
          const Ue = this.freePool[--this.freeCount];
          Fe[Je++] = Ue;
          for (let ee = 0; ee < FH; ee++) {
            const ie = ye[He + (ee >>> 5)] >>> (31 & ee) & 1 ? be[oe * FH + ee] : 0;
            1 & ee ? Ke[ee >> 1] |= ie << 16 : Ke[ee >> 1] = ie
          }
          ye[He + 2] = Ue + 1, this.writePool(DH + 32 * Ue, Ke)
        }
        Fe.length > 0 && (this.slotPool[ee] = Fe)
      }
      evictBeyond(ee, ie) {
        const He = this.slotDistance(ee),
          ye = [];
        for (let be = 0; be < yH; be++) be !== ee && this.slotPool[be] && this.slotDistance(be) > He && ye.push(be);
        ye.sort(((ee, ie) => this.slotDistance(ie) - this.slotDistance(ee)));
        for (const be of ye) {
          if (this.freeCount >= ie) return;
          const ee = this.slotChunk[be];
          ee && !ee.RZ && ee.Uq && (ee.kT === this.slotVersion[be] || RF(ee)) && this.encodeSlot(be, this.victimScratch, !1)
        }
      }
      dropSpecials(ee, ie) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const He = 3 * ie;
        for (let ye = 0; ye < FH; ye++) ee.cells[ie * FH + ye] !== BH && (ee.bricks[He + (ye >>> 5)] &= ~(1 << (31 & ye)))
      }
    }
    var fF = He(38195);
    class TF {
      constructor(ee) {
        this.device = ee, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new uH, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.xR = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = ee.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = ee.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(ee, ie, He) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: ye
        } = this;
        ye.gR(ee, ie), He.forEachSunShadowCaster((ee => {
          this.add(ee)
        })), ye.finish();
        const be = 0 === ye.parts;
        if (be && this.uploadedEmpty) return;
        this.uploadedEmpty = be;
        const {
          queue: Me
        } = this.device, {
          words: Ke
        } = ye;
        Me.writeBuffer(this.frameBuffer, 0, Ke, 0, 16385), ye.refs > 0 && Me.writeBuffer(this.frameBuffer, 65540, Ke, VH, ye.refs), be || Me.writeBuffer(this.frameBuffer, 327684, Ke, aH, ye.parts * YH)
      }
      add(ee) {
        const ie = this.gridFor(ee);
        if (!ie) return;
        const {
          frame: He
        } = this, {
          xR: ye,
          worldAt: be,
          instances: Me,
          instanceCount: Ke,
          thin: Ue
        } = ee;
        if (Me)
          for (let Fe = 0; Fe < Ke; Fe++) Ue ? (lH(Me, 16 * Fe, ye, be, this.xR), He.add(ie, this.xR)) : He.add(ie, Me, 16 * Fe);
        else He.add(ie, ye, be)
      }
      gridFor(ee) {
        let {
          geometry: ie,
          indexed: He,
          first: ye,
          count: be,
          skip: Me
        } = ee, Ke = this.grids.get(ie);
        Ke || (Ke = new Map, this.grids.set(ie, Ke));
        const Ue = `${He?ye:-1-ye}:${be}:${null!==Me&&void 0!==Me?Me:""}`;
        let Fe = Ke.get(Ue);
        if (void 0 !== Fe || this.gridsFull) return Fe;
        const Je = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Je + 2;
        else if (Je > this.bakeDeadline) return;
        return Fe = this.bake(ie, He, ye, be, Me), void 0 !== Fe && Ke.set(Ue, Fe), Fe
      }
      bake(ee, ie, He, ye, be) {
        const Me = ee.vertexAttributes.find((ee => "position" === ee.kind)),
          Ke = Me ? function(ee, ie, He, ye) {
            let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Me = ee => ie ? ie[He + ee] : He + ee,
              Ke = ee => null !== be && [0, 1, 2].some((ie => {
                const He = Me(ee + ie);
                return He >= be[0] && He < be[1]
              })),
              Ue = [1 / 0, 1 / 0, 1 / 0],
              Fe = [-1 / 0, -1 / 0, -1 / 0];
            for (let ze = 0; ze + 2 < ye; ze += 3)
              if (!Ke(ze))
                for (let ie = 0; ie < 3; ie++) {
                  const He = Me(ze + ie);
                  for (let ie = 0; ie < 3; ie++) Ue[ie] = Math.min(Ue[ie], ee[3 * He + ie]), Fe[ie] = Math.max(Fe[ie], ee[3 * He + ie])
                }
            const Je = Math.max(Fe[0] - Ue[0], Fe[1] - Ue[1], Fe[2] - Ue[2]);
            if (!(Je > 0)) return null;
            const oe = Je / 64,
              Re = [0, 0, 0],
              ke = [0, 0, 0],
              qe = [0, 0, 0];
            for (let ze = 0; ze < 3; ze++) Re[ze] = Math.min(65, Math.ceil((Fe[ze] - Ue[ze]) / oe) + 1), ke[ze] = Ue[ze] - oe / 2, qe[ze] = ke[ze] + Re[ze] * oe;
            const fe = new Uint32Array(Math.ceil(Re[0] * Re[1] * Re[2] / 32)),
              Te = new Float64Array(9),
              pe = [0, 0, 0],
              Xe = [0, 0, 0];
            for (let ze = 0; ze + 2 < ye; ze += 3)
              if (!Ke(ze)) {
                for (let ie = 0; ie < 3; ie++) {
                  const He = Me(ze + ie);
                  for (let ye = 0; ye < 3; ye++) Te[3 * ie + ye] = ee[3 * He + ye]
                }
                for (let ee = 0; ee < 3; ee++) {
                  const ie = Math.min(Te[ee], Te[3 + ee], Te[6 + ee]),
                    He = Math.max(Te[ee], Te[3 + ee], Te[6 + ee]);
                  pe[ee] = Math.max(0, Math.floor((ie - ke[ee]) / oe - 1e-6)), Xe[ee] = Math.min(Re[ee] - 1, Math.floor((He - ke[ee]) / oe + 1e-6))
                }
                for (let ee = pe[2]; ee <= Xe[2]; ee++)
                  for (let ie = pe[1]; ie <= Xe[1]; ie++)
                    for (let He = pe[0]; He <= Xe[0]; He++)
                      if (SH(Te, ke[0] + (He + .5) * oe, ke[1] + (ie + .5) * oe, ke[2] + (ee + .5) * oe, oe / 2)) {
                        const ye = He + Re[0] * (ie + Re[1] * ee);
                        fe[ye >>> 5] |= 1 << (31 & ye)
                      }
              } return {
              words: fe,
              lo: ke,
              hi: qe,
              cell: oe,
              dims: Re
            }
          }((0, fF.e)(Me, ee.vertexCount), ie ? ee.indexData : null, He, ye, be) : null;
        if (!Ke) return null;
        const {
          words: Ue,
          ...Fe
        } = Ke;
        if (this.gridTop + Ue.length > xH) return void(this.gridsFull = !0);
        const Je = this.gridTop;
        return this.gridTop += Ue.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Je, Ue), {
          ...Fe,
          at: Je
        }
      }
    }
    const pF = Math.cos(1 * Math.PI / 180);

    function XF(ee, ie) {
      return ee[0] * ie[0] + ee[1] * ie[1] + ee[2] * ie[2] < pF
    }
    async function zF(ee) {
      const {
        pixels: ie,
        width: He,
        height: ye
      } = await ei(ee), be = new Uint8Array(He * ye);
      for (let Me = 0; Me < be.length; Me++) be[Me] = ie[4 * Me + 3];
      return {
        width: He,
        height: ye,
        alpha: be
      }
    }
    class BF {
      constructor(ee, ie) {
        this.device = ee, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(jH.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = ee.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = ee.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * fH,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = ee.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [He, ye, be] = jH.p;
        this.volume = ee.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: He,
            height: ye,
            depthOrArrayLayers: be
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = ee.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = ee.createBuffer({
          label: "sun-shadow-volume-work",
          size: jH.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = ie ? new TF(ee) : null, this.entityStandIn = ie ? null : ee.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var ee;
        null === (ee = this.stopWindow) || void 0 === ee || ee.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var ee, ie;
        const He = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || He.push("Lite sun shadow volume pipeline compiling");
        const ye = null !== (ee = null === (ie = this.casters) || void 0 === ie ? void 0 : ie.planesLoading) && void 0 !== ee ? ee : 0;
        return ye > 0 && He.push(`${ye} Lite sun shadow plane casters loading their textures`), He
      }
      entries() {
        var ee, ie, He, ye;
        const be = ri.q;
        return [{
          binding: be.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: be.Uq,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: be.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: be.volume,
          resource: this.volumeView
        }, {
          binding: be.sampler,
          resource: this.volumeSampler
        }, {
          binding: be.entities,
          resource: {
            buffer: null !== (ee = null === (ie = this.entities) || void 0 === ie ? void 0 : ie.frameBuffer) && void 0 !== ee ? ee : this.entityStandIn
          }
        }, {
          binding: be.entityGrids,
          resource: {
            buffer: null !== (He = null === (ye = this.entities) || void 0 === ye ? void 0 : ye.gridBuffer) && void 0 !== He ? He : this.entityStandIn
          }
        }]
      }
      prepare(ee, ie, He) {
        var ye;
        this.entitiesThisFrame = !1;
        const be = null !== (ye = null === He || void 0 === He ? void 0 : He.sunShadowReach()) && void 0 !== ye ? ye : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!He || !be.sunShadow && !be.airShadow) return void(this.volumeHolds = null);
        if (ee.xR.ER !== eH) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${ee.xR.ER}; everything is lit.`)));
        const Me = this.start(ee);
        this.casters.update(ee.qR, ee.qR.Cq.length);
        const Ke = ee.yq;
        for (let ke = 0; ke < 3; ke++) this.eye[ke] = ie[ke] + Ke[ke];
        const Ue = (0, jH.y)(this.eye);
        this.staleNear = Ue;
        const Fe = ee.xR.aT;
        Me.update(this.eye, ((ee, ie, He) => Fe.cT(ee, ie, He)), 1);
        const Je = (0, jH.r)(He.Sie()),
          oe = Me.eyeChunk,
          Re = this.uniformInts;
        for (let ke = 0; ke < 3; ke++) Re[ke] = oe[ke], Re[4 + ke] = Ue[ke];
        this.entitiesThisFrame = null !== this.entities && be.sunShadow, this.entitiesThisFrame && vH(this.uniformFloats, 8, ie, Je), null !== this.volumeHolds && (this.castersWritten || XF(Je, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Ue, Je, oe)
      }
      markStale(ee) {
        const ie = this.staleNear,
          He = eH,
          ye = [ee.i * He, ee.j * He, ee.k * He];
        for (let Me = 0; Me < 3; Me++)
          if (ye[Me] + He <= ie[Me] - He || ye[Me] >= ie[Me] + jH.p[Me] + He) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const be = this.stale;
        for (let Me = 0; Me < be.length; Me += 4)
          if (be[Me] === ee.i && be[Me + 1] === ee.j && be[Me + 2] === ee.k) return void(be[Me + 3] = this.swept);
        if (16 === be.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        be.push(ee.i, ee.j, ee.k, this.swept)
      }
      writeStale() {
        const ee = this.swept,
          ie = this.stale;
        this.staleAll && ee - this.staleAllSwept >= jH.i && (this.staleAll = !1, ie.length = 0);
        let He = 0;
        for (let be = 0; be < ie.length; be += 4)
          if (ee - ie[be + 3] < jH.i) {
            for (let ee = 0; ee < 4; ee++) ie[He + ee] = ie[be + ee];
            He += 4
          } ie.length = He;
        const ye = this.uniformInts;
        ye[3] = this.staleAll ? 5 : He / 4;
        for (let be = 0; be < 4; be++)
          for (let ee = 0; ee < 3; ee++) ye[16 + 4 * be + ee] = 4 * be < He ? ie[4 * be + ee] * eH : 0
      }
      writeUniform() {
        const ee = this.uniformInts;
        let ie = this.uniformWritten;
        if (ie) {
          let He = !0;
          for (let ye = 0; ye < ee.length && He; ye++) He = ee[ye] === ie[ye];
          if (He) return
        }
        ie ??= this.uniformWritten = new Int32Array(ee.length), ie.set(ee), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(ee) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, ee)
      }
      computeVolume(ee, ie, He) {
        const ye = this.buildVolumePass();
        if (!ye) return void(this.volumeHolds = null);
        const be = (0, jH.u)(this.volumeHolds, ee);
        this.volumeHolds = ee;
        const Me = 1 === be.length && be[0].size.every(((ee, ie) => ee === jH.p[ie])),
          Ke = this.sweptChunk,
          Ue = this.sweptLight,
          Fe = ie[0] !== Ue[0] || ie[1] !== Ue[1] || ie[2] !== Ue[2],
          Je = He[0] !== Ke[0] || He[1] !== Ke[1] || He[2] !== Ke[2],
          oe = Fe && XF(ie, Ue);
        if ((Me || this.written || Je || oe) && (this.fastLeft = jH.i), Me || this.written || Fe || Je) {
          this.written = !1;
          for (let ee = 0; ee < 3; ee++) Ke[ee] = He[ee], Ue[ee] = ie[ee];
          this.sweepLeft = Me ? 0 : jH.i
        }
        if (Me ? this.swept += jH.i : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, be.push(...(0, jH.B)(ee, this.slice)), this.slice = (this.slice + 1) % jH.i, this.swept++), 0 === be.length) return;
        const Re = (0, jH.F)(this.workData, ie, be);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const ke = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          qe = ke.beginComputePass({
            label: "sun-shadow-volume"
          });
        qe.setPipeline(ye.pipeline), qe.setBindGroup(hH.group, ye.bindGroup), qe.dispatchWorkgroups(Math.ceil(Re / jH.m)), qe.end(), this.device.queue.submit([ke.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const ee = hH,
          ie = GPUShaderStage.COMPUTE,
          He = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: ee.uniform,
              visibility: ie,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: ee.Uq,
              visibility: ie,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: ee.special,
              visibility: ie,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: ee.work,
              visibility: ie,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: ee.volume,
              visibility: ie,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          ye = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: He,
            entries: [{
              binding: ee.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: ee.Uq,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: ee.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: ee.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: ee.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [He]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: NH()
            }),
            entryPoint: "main"
          }
        }).then((ee => {
          this.volumePass = {
            pipeline: ee,
            bindGroup: ye
          }
        }), (ee => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(ee)}`)
        })), null
      }
      start(ee) {
        if (this.window) return this.window;
        const ie = (ee, ie) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * ee, ie)
        };
        this.casters = new JF(((ee, He) => {
          this.castersWritten = !0, ie(ee, He)
        }), zF);
        const He = new qF(this.casters, ((ee, ie) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * ee, ie)
        }), ie);
        He.encoded = ee => {
          this.markStale(ee)
        };
        const ye = ee => {
          He.chunkAdded(ee)
        };
        return ee.xR.on("chunkAdded", ye), this.stopWindow = () => {
          ee.xR.removeListener("chunkAdded", ye)
        }, this.window = He, He
      }
    }
    var EF = He(39488),
      gF = He(39492);
    const OF = 0,
      dF = 3,
      WF = 4,
      tF = 5;

    function ZF(ee, ie, He, ye) {
      ee.drawOffset(ie, ye + OF), ie[ye + dF] = ee.drawTime(), He[ye + WF] = ee.ring.drawStart(), He[ye + tF] = ee.ring.drawCount()
    }
    const wF = `\n${uy}\n\nconst MAX_STOPS = ${gF.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${gF.b/4}>,\n\tcolor1: array<vec4f, ${gF.b}>,\n\tcolor2: array<vec4f, ${gF.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${gF.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${gF.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var DF = He(44799);
    class PF {
      constructor(ee, ie, He, ye) {
        this.device = ee, this.system = ie, this.frameIndex = He, this.bindings = ye, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, DF.g)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (ee, ie) => {
          this.device.queue.writeBuffer(this.ring, ee * gF.c * 4, this.system.ring.records, ee * gF.c, (ie - ee) * gF.c)
        };
        const {
          name: be
        } = ie;
        this.ring = ee.createBuffer({
          label: `particles-${be}`,
          size: ie.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = ee.createBuffer({
          label: `particles-uniforms-${be}`,
          size: 4 * gF.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(ee) {
        const ie = (0, DF.c)(this.system, this.uniformBits, ee);
        ie && (this.uniformBits = ie, this.device.queue.writeBuffer(this.uniforms, 0, ie))
      }
      bind() {
        const {
          system: ee
        } = this, ie = this.texture;
        (0, DF.l)(ee, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${ee.name}`,
          size: [gF.i, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * gF.i
        }, [gF.i, 1]));
        const He = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === ie.view && this.boundSampler === ie.sampler && this.boundRamp === He || (this.boundView = ie.view, this.boundSampler = ie.sampler, this.boundRamp = He, this.bindGroup = this.device.createBindGroup({
          label: `particles-${ee.name}`,
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
            resource: ie.sampler
          }, {
            binding: 3,
            resource: ie.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: He
          }]
        }))
      }
      destroy() {
        var ee;
        this.ring.destroy(), this.uniforms.destroy(), null === (ee = this.ramp) || void 0 === ee || ee.destroy()
      }
    }
    class AF {
      constructor(ee, ie) {
        this.device = ee, this.resources = ie, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Vi.b)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (ee, ie) => (this.bindTarget(ie), {
            renderable: this.renderable,
            pipeline: Pi(this.device, ie),
            draw: ee => ie === this.preparedTarget ? this.draw(ee) : 0
          })
        }
      }
      rebind(ee) {
        this.device = ee, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [ie, He] of this.systems) {
          const ye = new PF(ee, ie, He.frameIndex, this.bindings),
            be = ie.ring.drawCount();
          be > 0 && ye.upload(0, be), this.systems.set(ie, ye)
        }
      }
      build() {
        const {
          device: ee
        } = this, ie = ee.createBindGroupLayout({
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
        this.frameLayout = ee.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = ee.createPipelineLayout({
          bindGroupLayouts: [Wi(ee), ie, this.frameLayout]
        }), this.module = ee.createShaderModule({
          label: "particles",
          code: wF
        });
        const He = ee.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        ee.queue.writeTexture({
          texture: He
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: ie,
          rampSampler: ee.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: He.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get IMe() {
        return this.systems.size
      }
      reset() {
        for (const ee of this.systems.keys()) ee.reset()
      }
      describePendingWork() {
        return (0, EF.f)(this.systems.keys(), "Lite")
      }
      bC(ee, ie) {
        const He = new EF.d(ee, ie, this);
        return this.systems.set(He, new PF(this.device, He, this.allocateFrameIndex(), this.bindings)), He
      }
      Zie(ee, ie) {
        for (const He of this.systems.keys()) He.Zie(ee, ie)
      }
      canDraw(ee) {
        const ie = this.systems.get(ee),
          He = ee.texture ? this.resources.boundTexture(ee.texture) : null;
        if (!ie || !He || !this.targetPipelines) return !1;
        if (ie.texture = He, ie.pipelines.length = 0, !bi(ee.blendMode)) return this.warnOnce(`blend:${ee.blendMode}`, `particle blend mode ${ee.blendMode} is not drawn (${ee.name})`), !0;
        const ye = (0, je.p)(ee.blendMode);
        for (const be of ye) {
          const ee = this.pipelineFor(be);
          if (!1 === ee) return ie.pipelines.length = 0, !0;
          ee && ie.pipelines.push(ee)
        }
        return ie.pipelines.length === ye.length
      }
      disposeStopped(ee) {
        ee.dispose()
      }
      remove(ee) {
        const ie = this.systems.get(ee);
        ie && (this.systems.delete(ee), ie.destroy(), this.freeFrameIndices.push(ie.frameIndex))
      }
      prepare(ee) {
        const ie = ee.animationRatio || 1;
        Ai(this.renderable._worldCenter, ee, Zi), this.preparedTarget = this.target, this.draws.length = 0;
        let He = 0;
        for (const ye of this.systems.values()) {
          const ee = ye.system;
          if (!ee.animateIfActive(ie)) continue;
          if (ee.ring.takeUploads(ye.upload), !ee.hasLiveParticles() || 0 === ye.pipelines.length) continue;
          ye.writeUniforms(this.warnOnce), ye.bind();
          const be = 64 * ye.frameIndex;
          ye.count = ee.ring.drawCount(), ZF(ee, this.frameData, this.frameBits, be), He = Math.max(He, be + 64), this.draws.push(ye)
        }
        He > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, He)
      }
      draw(ee) {
        let ie = 0,
          He = null;
        for (const ye of this.draws) {
          ee.setBindGroup(1, ye.bindGroup), ee.setBindGroup(2, this.frameBindGroup, [256 * ye.frameIndex]);
          for (const be of ye.pipelines) be !== He && (ee.setPipeline(be), He = be), ee.draw(4, ye.count), ie++
        }
        return ie
      }
      bindTarget(ee) {
        this.target = ee;
        const ie = `${ee._colorFormat}|${ee._depthStencilFormat}|${ee._depthCompare}|${ee._sampleCount}`;
        let He = this.pipelines.get(ie);
        He || (He = new Map, this.pipelines.set(ie, He)), this.targetPipelines = He
      }
      pipelineFor(ee) {
        var ie;
        const He = this.targetPipelines,
          ye = He.get(ee);
        if (void 0 !== ye) return ye;
        He.set(ee, null);
        const be = this.target,
          Me = ee === je.d,
          Ke = null !== (ie = be._depthCompare) && void 0 !== ie ? ie : ti,
          {
            device: Ue
          } = this;
        return Ue.createRenderPipelineAsync({
          label: `particles-${ee}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Bi({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Me ? 1 : 0
            }
          }, be, Mi((0, je.l)(ee))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: be._depthStencilFormat ? {
            format: be._depthStencilFormat,
            depthCompare: Ke,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: be._sampleCount
          }
        }).then((ie => {
          He.set(ee, ie)
        }), (ie => {
          He.set(ee, !1), console.error("Lite particle pipeline failed", ie), oi(Ue, "particles", `blend-${ee}`, ie)
        })), null
      }
      allocateFrameIndex() {
        const ee = this.freeFrameIndices.pop();
        if (void 0 !== ee) return ee;
        const ie = this.nextFrameIndex++;
        if (64 * (ie + 1) > this.frameData.length) {
          const ee = new Float32Array(2 * this.frameData.length);
          ee.set(this.frameData), this.frameData = ee, this.frameBits = new Uint32Array(ee.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return ie
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
    class YF {
      constructor(ee, ie, He, ye, be) {
        this.lite = ee, this.canvas = ie, this.info = He, this.resources = be, this.Gbe = !1, this.needPOTTextures = !1, this.Eee = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = ie.width, this.renderHeight = ie.height, this.caps = {
          maxTextureSize: ye.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: ye.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(ee) {
        this.lite = ee, (0, ue.r)(ee, this.renderWidth, this.renderHeight)
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
      setSize(ee, ie) {
        if (this.renderWidth === ee && this.renderHeight === ie) return !1;
        const He = this.renderWidth,
          ye = this.renderHeight;
        this.renderWidth = ee, this.renderHeight = ie;
        const be = this.lite;
        if (null === be) return !0;
        try {
          (0, ue.r)(be, ee, ie)
        } catch (Me) {
          if (Me instanceof DOMException && "InvalidStateError" === Me.name) {
            this.renderWidth = He, this.renderHeight = ye;
            try {
              (0, ue.r)(be, He, ye)
            } catch {
              this.canvas.width = He, this.canvas.height = ye
            }
            return console.warn("WebGPU could not allocate render targets for resize", ee, ie, Me.message), !1
          }
          throw Me
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
      LO() {
        const ee = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : ee - this.lastFrameTime, this.lastFrameTime = ee
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(ee, ie) {
        const He = document.createElement("canvas");
        return He.width = ee, He.height = ie, He
      }
      Zee(ee, ie) {
        var He;
        return null !== (He = this.resources.Zee.get(ee)) && void 0 !== He ? He : new ki(this.resources, ee, ie)
      }
      atlasArrays(ee) {
        return this.resources.atlasArrays(ee)
      }
    }
    class VF {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(ee) {
        this.fov = ee.fov, this.nearPlane = ee.near, this.farPlane = ee.far;
        const ie = ee.worldMatrix;
        for (let He = 0; He < 16; He++)
          if (this.worldMatrix[He] !== ie[He]) return this.worldMatrix.set(ie), void this.worldMatrixVersion++
      }
    }
    class aF {
      constructor(ee, ie, He, ye) {
        this.canvas = ie, this.options = He, this.Dye = void 0, this.backendName = "WebGPU (Lite)", this.Nee = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new VF, this.lastFrameTime = 0, this.engine = void 0, this.yp = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.PR = null, this.firstTerrain = null, this.trialFrames = 0, this.install(ee);
        const {
          resources: be,
          meshes: Me
        } = ee;
        this.resources = be, this.particles = ee.particles, this.Dye = new YF(ee.engine, ie, ye, ee.device.limits, be), (0, we.D)({
          lJ: ee => {
            Ye(ee) && be.textureSlot(ee)
          },
          loaded: ee => Ye(ee) ? be.textureLoaded(ee) : null,
          canvasUpdated: (ee, ie, He) => {
            Ye(ee) && be.canvasUpdated(ee, ie, He)
          }
        }), this.Nee = Me.Nee, this.modelMeshes = Me.modelMeshes
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
      install(ee) {
        this.engine = ee.engine, this.yp = ee.yp, this.sceneTask = ee.sceneTask, this.device = ee.device, this.liteTerrain = ee.terrain, this.meshes = ee.meshes, this.sunShadow = ee.sunShadow;
        const ie = new Se(ee.device.lost);
        this.refusals = ie, ie.deviceLost.then((() => {
          var ie;
          ie = ee.device, Fi.add(ie)
        })), ee.yp.camera = this.camera
      }
      async rebuild() {
        var ee, ie, He, ye, be;
        const Me = await CF();
        this.halted = !0, this.liteTerrain.retire(), null === (ee = this.sunShadow) || void 0 === ee || ee.dispose(), this.Dye.detach();
        try {
          (0, me.d)(this.engine)
        } catch (oe) {
          console.warn("Lite: disposing the lost device's engine threw", oe)
        }
        const Ke = {
            width: this.Dye.renderWidth,
            height: this.Dye.renderHeight
          },
          Ue = await vF(this.canvas, this.options, Ke, Me),
          Fe = gi(Ue),
          Je = uF(Fe);
        try {
          this.resources.rebind(Ue, Fe), this.particles.rebind(Fe), this.Nee.dropSteady();
          const ee = {
              resources: this.resources,
              particles: this.particles,
              Nee: this.Nee,
              modelMeshes: this.modelMeshes
            },
            ie = await mF(Ue, Fe, this.options, ee),
            He = Je();
          if (null !== He) throw new Error(`WebGPU device lost while Lite was rebuilding (${He.reason}): ${He.message}`);
          const {
            r: ye,
            g: be,
            b: Me
          } = this.yp.clearColor;
          this.install(ie), this.setClearColour(ye, be, Me), this.Dye.rebind(Ue)
        } catch (oe) {
          throw Fe.destroy(), oe
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (ie = this.PR) || void 0 === ie || ie.resize(), null === (He = this.PR) || void 0 === He || null === (ye = He.uk) || void 0 === ye || null === (be = ye.iW) || void 0 === be || be.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((ee, ie) => {
          this.firstTerrain = {
            drawn: ee,
            failed: ie
          }
        }))
      }
      get castsEntitySunShadows() {
        var ee, ie;
        return null !== (ee = null === (ie = this.sunShadow) || void 0 === ie ? void 0 : ie.tracesEntities) && void 0 !== ee && ee
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(ee) {
        this.PR = ee, this.modelMeshes.attach(ee.model, ee.sceneMirror);
        const ie = ee.yp;
        this.setClearColour(ie.clearColor.r, ie.clearColor.g, ie.clearColor.b), ie.draw = () => {
          this.drawFrame(ee, ie)
        }
      }
      get tR() {
        return !this.refusals.lost && !this.halted
      }
      render(ee) {
        if (this.tR) {
          try {
            this.Dye.LO(), ee.yp.render()
          } catch (ie) {
            throw this.refusals.frameFailed(ie), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(ie), this.firstTerrain = null), ie
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var ee, ie, He, ye;
        const be = [...this.particles.describePendingWork(), ...null !== (ee = null === (ie = this.sunShadow) || void 0 === ie ? void 0 : ie.describePendingWork()) && void 0 !== ee ? ee : []],
          Me = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (He = this.terrain.sceneDepth) && void 0 !== He && He.compiling ? 1 : 0) + (null !== (ye = this.terrain.shadowMask) && void 0 !== ye && ye.compiling ? 1 : 0);
        Me > 0 && be.push(`${Me} Lite pipelines compiling`);
        const Ke = this.terrain.buffersAwaitingVerdict;
        Ke > 0 && be.push(`${Ke} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Ue = this.resources.texturesLoading;
        return Ue > 0 && be.push(`${Ue} Lite textures loading`), be
      }
      prepareTexture(ee) {
        return null !== this.resources.boundTexture(ee) || this.resources.textureFailed(ee)
      }
      drawFrame(ee, ie) {
        var He, ye, be, Me, Ke, Ue;
        const Fe = zU(ee);
        this.camera.copyFromView(Fe), this.setClearColour(Fe.clearColour[0], Fe.clearColour[1], Fe.clearColour[2]), null === (He = this.sunShadow) || void 0 === He || He.prepare(ee.uk, Fe.eye, null !== (ye = ee.uk.Zf) && void 0 !== ye ? ye : null), this.terrain.prepare(ee, Fe), null === (be = this.terrain.sceneDepth) || void 0 === be || be.setPlanes(Fe.near, Fe.far), null === (Me = this.terrain.shadowMask) || void 0 === Me || Me.prepare(Fe), yU(this.sceneTask), this.meshes.prepare(ie, Fe, ee.model.earthSky, null !== (Ke = ee.uk.Zf) && void 0 !== Ke ? Ke : null), this.particles.prepare(Fe);
        const Je = performance.now();
        this.resources.flushUploads(), null === (Ue = this.sunShadow) || void 0 === Ue || Ue.traceEntities(this.meshes);
        try {
          (0, ue.o)(this.engine, this.lastFrameTime > 0 ? Je - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Je, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(Je), this.firstTerrain = null)
      }
      setClearColour(ee, ie, He) {
        const ye = this.yp.clearColor;
        ye.r = ee, ye.g = ie, ye.b = He, ye.a = 1
      }
    }

    function cF(ee) {
      const ie = {};
      for (const He in ee.limits) {
        const ye = ee.limits[He];
        "number" === typeof ye && (ie[He] = ye)
      }
      return ie
    }
    const xF = "WebGPU device lost while Lite was starting";
    async function LF(ee, ie) {
      const He = await CF(),
        ye = He.info,
        be = {
          vendor: (null === ye || void 0 === ye ? void 0 : ye.vendor) || "unknown vendor",
          renderer: (null === ye || void 0 === ye ? void 0 : ye.architecture) || "unknown renderer",
          version: (null === ye || void 0 === ye ? void 0 : ye.description) || "unknown version"
        };
      ee.style.background = "black";
      const Me = await vF(ee, ie, ie.bufferSize, He),
        Ke = gi(Me),
        Ue = uF(Ke);
      try {
        const He = new aF(await mF(Me, Ke, ie, null), ee, ie, be),
          ye = Ue();
        if (null !== ye) {
          const {
            reason: ee,
            message: ie
          } = ye;
          throw Object.assign(new Error(`${xF} (${ee}): ${ie}`), {
            fallbackReason: xF
          })
        }
        return He
      } catch (Fe) {
        throw Ke.destroy(), null === Ue() ? Fe : (0, HU.e)(Fe, "device")
      }
    }
    async function CF() {
      const ee = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!ee) throw (0, HU.e)(new Error("No WebGPU adapter"), "no_adapter");
      return ee
    }
    async function vF(ee, ie, He, ye) {
      let be;
      try {
        be = await (0, ue.f)(ee, {
          msaaSamples: ie.Ube ? 4 : 1,
          requiredLimits: cF(ye),
          alphaMode: "premultiplied"
        })
      } catch (Ke) {
        throw (0, HU.e)(Ke, "#47" === (null === (Me = Ke) || void 0 === Me ? void 0 : Me.message) ? "no_adapter" : "device")
      }
      var Me;
      return null !== He && (0, ue.r)(be, He.width, He.height), be
    }

    function uF(ee) {
      let ie = null;
      return ee.lost.then((ee => {
        ie = ee, console.error(`WebGPU device lost (${ee.reason}): ${ee.message}`)
      })), () => ie
    }
    async function mF(ee, ie, He, ye) {
      var be, Me;
      let {
        sceneDepth: Ke,
        sunShadow: Ue
      } = He;
      const Fe = (0, le.b)(ee),
        Je = null !== (be = null === ye || void 0 === ye ? void 0 : ye.resources) && void 0 !== be ? be : new QK(ee, ie),
        oe = new iF(ie),
        Re = new cK(ie, Je, (ee => function(ee, ie) {
          for (const ye of Oi(ee)) {
            var He;
            if (ye._targetSignature === ie) return null !== (He = ye._sceneBG) && void 0 !== He ? He : null
          }
          return null
        }(Fe, ee)), null === ye || void 0 === ye ? void 0 : ye.Nee, null === ye || void 0 === ye ? void 0 : ye.modelMeshes),
        ke = null !== (Me = null === ye || void 0 === ye ? void 0 : ye.particles) && void 0 !== Me ? Me : new AF(ie, Je);
      for (const Te of function(ee, ie, He) {
          return [ie.opaqueRenderable, ee.opaqueRenderable, ee.skyLastRenderable, He.renderable, ie.transparentRenderable, ee.transparentRenderable, ee.frontRenderable]
        }(Re, oe, ke)) Ei(Fe, Te);
      const qe = function(ee) {
        for (const ie of Oi(ee))
          if ("yp" === ie.name) return ie;
        throw new Error("Lite: the scene has no render task named scene")
      }(Fe);
      Ke && oe.installSceneDepth(qe, ee);
      const fe = Ue ? new BF(ie, Ue.entities) : null;
      return oe.sunShadow = fe, fe && null !== Ue && void 0 !== Ue && Ue.entities && (oe.shadowMask = new aU(ie, qe, ee, oe)), Re.sunShadow = fe, await (0, le.d)(Fe), {
        engine: ee,
        yp: Fe,
        sceneTask: qe,
        device: ie,
        terrain: oe,
        meshes: Re,
        sunShadow: fe,
        resources: Je,
        particles: ke
      }
    }
  },
  41807: (ee, ie, He) => {
    He.d(ie, {
      C: () => fe,
      d: () => be,
      f: () => ye,
      j: () => ke,
      k: () => oe,
      n: () => pe,
      p: () => Me,
      q: () => Ue,
      s: () => Fe,
      u: () => Ke,
      x: () => Te,
      z: () => qe
    });
    const ye = 3,
      be = 0,
      Me = 1,
      Ke = 2,
      Ue = {
        uniform: 3,
        Uq: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Fe = 10,
      Je = "BloxdPackInputs",
      oe = "bloxdPackInputs",
      Re = [{
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
      ke = 80;

    function qe() {
      const ee = Re.map((ee => {
        let {
          name: ie,
          type: He
        } = ee;
        return `    ${ie}: ${He},\n`
      })).join("");
      return `struct ${Je} {\n${ee}}\n@group(${ye}) @binding(${be}) var<uniform> ${oe}: ${Je};\n`
    }

    function fe(ee, ie) {
      const He = new DataView(ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ke),
        [ye, be, Me, Ke, Ue, Fe] = Re;
      He.setFloat32(ye.offset, ie.seconds, !0), He.setUint32(be.offset, ie.lit ? 1 : 0, !0);
      for (let Je = 0; Je < 3; Je++) He.setInt32(Me.offset + 4 * Je, ie.renderOffset[Je], !0), He.setFloat32(Ke.offset + 4 * Je, ie.Sie[Je], !0), He.setFloat32(Ue.offset + 4 * Je, ie.eyePosition[Je], !0), He.setFloat32(Fe.offset + 4 * Je, ie.shadowDirection[Je], !0)
    }

    function Te(ee) {
      const ie = new Uint32Array(Math.max(1, ee.length));
      return ee.forEach(((ee, He) => {
        let {
          id: ye,
          rotation: be
        } = ee;
        ie[He] = 65535 & ye | (3 & be) << 16
      })), ie
    }
    const pe = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);