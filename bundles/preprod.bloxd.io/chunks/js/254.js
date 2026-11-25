export const id = 254;
export const ids = [254];
export const modules = {
  39085: (QQ, WQ, XQ) => {
    var wQ = {
      "./cape_cow_cream.png": 28325,
      "./cape_cow_normal.png": 28327,
      "./cape_creator_level1.png": 28335,
      "./cape_creator_level2.png": 28337,
      "./cape_creator_level3.png": 28343,
      "./cape_none.png": 28352,
      "./cape_pig.png": 28358,
      "./cape_sheep.png": 28360,
      "./cape_super.png": 28368,
      "./cape_super_inverted.png": 28376,
      "./cape_youtuber.png": 28380
    };

    function qQ(QQ) {
      var WQ = TQ(QQ);
      return XQ(WQ)
    }

    function TQ(QQ) {
      if (!XQ.o(wQ, QQ)) {
        var WQ = new Error("Cannot find module '" + QQ + "'");
        throw WQ.code = "MODULE_NOT_FOUND", WQ
      }
      return wQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(wQ)
    }, qQ.resolve = TQ, QQ.exports = qQ, qQ.id = 39085
  },
  41401: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      openCharacterPreview: () => NQ
    });
    var wQ = XQ(38385),
      qQ = XQ(2997),
      TQ = XQ(646),
      zQ = XQ(37437),
      sQ = XQ(2318),
      FQ = XQ(37428),
      PQ = XQ(40089),
      gQ = XQ(40349),
      JQ = XQ(41298),
      rQ = XQ(37367),
      IQ = XQ(40517),
      jQ = XQ(37539),
      BQ = XQ(40530),
      yQ = XQ(41354),
      VQ = XQ(37358),
      DQ = XQ(1257),
      pQ = XQ(2313),
      GQ = XQ(37504),
      UQ = XQ(37608);
    class bQ {
      constructor(QQ, WQ) {
        this.pose = QQ, this.nodes = void 0, this.nodes = QQ.boneNames.map((QQ => WQ.get(QQ)))
      }
      write(QQ) {
        this.pose.pose(QQ);
        const {
          rotations: WQ
        } = this.pose;
        for (let XQ = 0; XQ < this.nodes.length; XQ++) {
          const QQ = 4 * XQ;
          this.nodes[XQ].rotationQuaternion.set(WQ[QQ], WQ[QQ + 1], WQ[QQ + 2], WQ[QQ + 3])
        }
      }
    }

    function vQ(QQ) {
      QQ.unfreezeWorldMatrix();
      for (const WQ of QQ.getChildren()) vQ(WQ)
    }

    function dQ(QQ, WQ) {
      QQ.isVisible = WQ;
      for (const XQ of QQ.getChildMeshes()) XQ.isVisible = WQ
    }
    class HQ {
      constructor(QQ, WQ, XQ) {
        this.cB = QQ, this.thinInstMgr = WQ, this.lE = XQ, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(QQ, WQ, XQ) {
        const wQ = (0, GQ.e)(QQ, WQ);
        return wQ in this.modelCache || (this.modelCache[wQ] = (async () => {
          try {
            const wQ = await (0, GQ.f)(QQ, this.cB),
              qQ = new Map;
            for (const QQ of wQ.getNodes()) qQ.set(QQ.name, QQ);
            const TQ = (0, GQ.d)(null !== WQ && void 0 !== WQ ? WQ : QQ, this.cB);
            (0, GQ.h)(wQ, TQ, {
              keepTransforms: void 0 !== XQ,
              onProcessedMesh: QQ => {
                (0, GQ.j)(QQ), this.cB.hwQ(QQ, !1), QQ.isVisible = !1
              }
            });
            for (const QQ of wQ.rootNodes) vQ(QQ);
            const zQ = void 0 === XQ ? null : (0, UQ.e)(XQ, (QQ => {
              var WQ, XQ;
              return null !== (WQ = null === (XQ = qQ.get(QQ)) || void 0 === XQ ? void 0 : XQ.rotationQuaternion) && void 0 !== WQ ? WQ : null
            }));
            return {
              nodesByName: qQ,
              bones: null === zQ ? null : new bQ(zQ, qQ)
            }
          } catch (qQ) {
            throw delete this.modelCache[wQ], console.error(`Failed to load preview attachment ${wQ}:`, qQ), qQ
          }
        })()), this.modelCache[wQ]
      }
      async update(QQ, WQ) {
        var XQ;
        const {
          thinInstMgr: wQ,
          lE: qQ
        } = this;
        this.cosmeticNames[QQ] = WQ;
        const TQ = this.attachmentsByType[QQ];
        if (TQ)
          for (const {
              mesh: sQ,
              destNode: FQ,
              bones: PQ
            }
            of TQ) {
            null !== PQ && (0, DQ.hb)(this.shownBones, PQ), dQ(sQ, !1);
            const QQ = wQ.getNamedNode(qQ, FQ);
            wQ.detachTransformNodeIfFound(sQ, qQ, QQ)
          }
        this.attachmentsByType[QQ] = [];
        const zQ = (0, pQ.j)(QQ, WQ);
        if (null !== zQ && void 0 !== zQ && null !== (XQ = zQ.attachments) && void 0 !== XQ && XQ.length)
          for (const sQ of zQ.attachments) {
            let XQ;
            try {
              XQ = await this.loadModel(sQ.modelGlb, sQ.texture, sQ.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[QQ] !== WQ) return;
            const TQ = XQ.nodesByName.get(sQ.modelNode);
            if (!TQ) {
              console.error(`Preview attachment node ${sQ.modelNode} not found in ${sQ.modelGlb}`);
              continue
            }
            dQ(TQ, !0), (0, GQ.l)(TQ, sQ.overlayColour);
            const zQ = wQ.getNamedNode(qQ, sQ.destNode);
            wQ.attachTransformNode(TQ, qQ, zQ), this.attachmentsByType[QQ].push({
              mesh: TQ,
              destNode: sQ.destNode,
              bones: XQ.bones
            }), null !== XQ.bones && this.shownBones.push(XQ.bones)
          }
      }
      writePoses(QQ) {
        for (const WQ of this.shownBones) WQ.write(QQ)
      }
    }
    var aQ = XQ(37451),
      lQ = (XQ(41326), XQ(40732), XQ(41335), XQ(34548)),
      hQ = XQ(41409);
    let iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ;
    const SQ = document.createElement("canvas");
    async function tQ() {
      await new Promise((QQ => {
        setTimeout((() => {
          QQ()
        }), 100)
      }))
    }
    SQ.classList.add("CharCustomisationPreviewCanvas");
    const oQ = {};

    function eQ(QQ, WQ) {
      const [XQ, wQ] = (0, hQ.e)(QQ, WQ, window.devicePixelRatio);
      iQ.setSize(Math.max(XQ, Math.floor(QQ)), Math.max(wQ, Math.floor(WQ)))
    }
    let nQ = 0;
    class xQ {
      constructor(QQ, WQ) {
        this.framing = WQ, this.ready = fQ, this.dev = {
          canvas: () => SQ,
          isolateHead(QQ) {
            const WQ = CQ.getNodeNames(uQ);
            for (let XQ = 0; XQ < WQ.length; XQ++) "HeadMesh" !== WQ[XQ] && "__root__" !== WQ[XQ] && "TorsoNode" !== WQ[XQ] && CQ.setNodeEnabled(uQ, XQ, !1);
            if (QQ) {
              const QQ = CQ.getNamedNode(uQ, "HeadMesh");
              CQ.setNodeDisableColorWrite(uQ, QQ, !0, (QQ => {
                const WQ = new BQ.StandardMaterial(`${QQ.name}_depthOnly`, QQ.sE());
                return WQ.disableColorWrite = !0, WQ
              }))
            }
            CQ.setPosition(uQ, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const XQ = QQ.getBoundingClientRect();
        eQ(XQ.width, XQ.height), nQ++, iQ.stopRenderLoop(), iQ.runRenderLoop((() => {
          var QQ, WQ;
          null === (QQ = LQ) || void 0 === QQ || QQ.render(iQ.getDeltaTime()), null === (WQ = kQ) || void 0 === WQ || WQ.writePoses(performance.now() / 1e3), AQ.render()
        }))
      }
      isReady() {
        return !!RQ
      }
      setCosmetic(QQ, WQ) {
        ! function(QQ, WQ) {
          if (!RQ) return;
          const zQ = (0, qQ.f)();
          zQ.Bl(!1), wQ.d.Player.meshApi.updatePlayerCosmetic(zQ.RC, uQ, QQ, WQ, !0), "cape" === QQ && (WQ === TQ.f ? EQ.UH(!1) : (EQ.UH(!0), EQ.material.diffuseTexture = new yQ.e(XQ(39085)(`./cape_${WQ}.png`), EQ.sE(), {
            invertY: !1,
            samplingMode: yQ.e.NEAREST_NEAREST_MIPLINEAR
          })));
          oQ[QQ] = kQ.update(QQ, WQ)
        }(QQ, WQ)
      }
      playEmote(QQ) {
        if (!LQ) return;
        if (!QQ) return void LQ.stopAnimation(FQ.g.Emote);
        const WQ = (0, zQ.f)((0, sQ.i)(QQ).animation);
        LQ.startAnimation(WQ, FQ.g.Emote, 0, sQ.d)
      }
      async untilDrawn(QQ) {
        if (await tQ(), "cape" === QQ && EQ) {
          const QQ = EQ.material,
            WQ = null === QQ || void 0 === QQ ? void 0 : QQ.diffuseTexture;
          WQ && !WQ.isReady() && (await new Promise((QQ => {
            WQ.onLoadObservable.addOnce((() => {
              QQ()
            }))
          })), await tQ())
        }
        oQ[QQ] && (await oQ[QQ], await tQ()), await AQ.whenReadyAsync(), await new Promise((QQ => {
          AQ.onAfterRenderObservable.addOnce((() => {
            QQ()
          }))
        }))
      }
      setOrbit(QQ) {
        YQ(QQ)
      }
      resetCamera() {
        cQ.inertialAlphaOffset = 0, cQ.inertialBetaOffset = 0, cQ.inertialRadiusOffset = 0, YQ(lQ.b[this.framing])
      }
      resize(QQ, WQ) {
        eQ(QQ, WQ)
      }
      close() {
        this.closed || (this.closed = !0, nQ--, 0 === nQ && iQ.stopRenderLoop())
      }
    }

    function YQ(QQ) {
      let {
        yaw: WQ,
        pitch: XQ,
        radius: wQ,
        target: qQ
      } = QQ;
      cQ.alpha = WQ, cQ.beta = XQ, wQ && (cQ.radius = wQ), qQ && cQ.target.set(qQ[0], qQ[1], qQ[2])
    }

    function NQ(QQ, WQ) {
      return QQ.appendChild(SQ), iQ || function() {
        iQ = new PQ.b(SQ, !0, {
          preserveDrawingBuffer: !0
        });
        const QQ = (0, qQ.f)();
        iQ.vwQ = QQ.nj.engine.vwQ, AQ = new gQ.c(iQ), AQ.clearColor = new jQ.d(0, 0, 0, 0), AQ.ambientColor = new jQ.Color3(1, 1, 1), cQ = new JQ.d("ky", 0, 0, 1, rQ.vj.Zero(), AQ), cQ.attachControl(SQ, !0), cQ.panningSensibility = 0, fQ = (0, wQ.x)("Player", AQ, !0).then((WQ => {
          RQ = WQ.meshApi, EQ = WQ.capeMesh, CQ = QQ.nj.aE;
          const XQ = 8.33;
          uQ = (0, wQ.l)("Player", XQ, !0, !0), CQ.setPosition(uQ, 0, -8.33, 0);
          const qQ = CQ.getNamedNode(uQ, "BodyMesh");
          CQ.attachTransformNode(EQ, uQ, qQ), CQ.set(uQ, "aOpacity", 1), CQ.fC(uQ, "aOpacity", 1), kQ = new HQ(AQ, CQ, uQ), LQ = new VQ.AnimatorState, LQ.KJ = QQ, LQ.thinInstMgr = CQ, LQ.lE = uQ, LQ.xXQ = CQ.dwQ(uQ, 0), LQ.modelLifeformType = "Player", LQ.nodeNameAliases = (0, aQ.d)("Player").nodeNameAliases;
          const TQ = EQ.uC().boundingBox;
          EQ.position.y = ((24 - TQ.maximum.y + TQ.minimum.y) / 2 - 1 / 32) / XQ, EQ.position.z = -1 / XQ, EQ.rotationQuaternion = null;
          const zQ = Math.PI / 18,
            sQ = TQ.maximum.y / XQ;
          EQ.rotation.x = zQ;
          const FQ = Math.cos(zQ),
            PQ = Math.sin(zQ);
          EQ.position.y += sQ * (1 - FQ) + 0 * PQ, EQ.position.z -= sQ * PQ + 0 * (1 - FQ);
          const gQ = new BQ.StandardMaterial("capeMaterial", EQ.sE());
          EQ.material = gQ;
          const JQ = new jQ.Color3(1, 1, 1);
          gQ.diffuseColor = new jQ.Color3, gQ.specularColor = new jQ.Color3, gQ.emissiveColor = new jQ.Color3, gQ.ambientColor = new jQ.Color3, JQ.scaleToRef(.43, gQ.diffuseColor), JQ.scaleToRef(1.75, gQ.ambientColor), gQ.freeze();
          const yQ = new IQ.c("light", new rQ.vj(-.1, 1, -.3), AQ);
          yQ.diffuse = new jQ.Color3(1, 1, 1), yQ.specular = new jQ.Color3(1, 1, 1), yQ.groundColor = new jQ.Color3(.5, .5, .5)
        }))
      }(), new xQ(QQ, WQ)
    }
  },
  39081: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => rQ
    });
    var wQ = XQ(37462),
      qQ = XQ(37472),
      TQ = XQ(37715),
      zQ = XQ(37477),
      sQ = XQ(37468);

    function FQ(QQ) {
      return `\n\t\t\t\t${(0,sQ.v)(QQ,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, sQ.A)(QQ, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, sQ.A)(QQ, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, sQ.l)(QQ, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function PQ(QQ, WQ) {
      let XQ = (0, sQ.Jb)(QQ, "skele" + (WQ - 1));
      for (let qQ = WQ - 2; qQ >= 0; qQ--) XQ = (0, sQ.wb)(QQ, `boneIdx == ${qQ}`, (0, sQ.Jb)(QQ, `skele${qQ}`), XQ);
      const wQ = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,sQ.A)(QQ,"int","boneIdx",(0,sQ.Eb)(QQ,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,sQ.A)(QQ,"vec3","bone",XQ)}\n\t\t\t\t${(0,sQ.A)(QQ,"vec2","pivot",(0,sQ.l)(QQ,"vec2","0.0",`${(0,sQ.Sb)(QQ,"position")}.z`))}\n\t\t\t\t${(0,sQ.$)(QQ)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${wQ}));`:`positionUpdated.yz += ${wQ};`}\n\t\t`
    }

    function gQ(QQ) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,sQ.l)(QQ,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const JQ = {
        x: 0,
        y: 0,
        z: 0,
        gXQ(QQ, WQ) {
          return this.x = QQ[WQ], this.y = QQ[WQ + 1], this.z = QQ[WQ + 2], this
        }
      },
      rQ = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (QQ, WQ) => ({
          ...(0, wQ.b)("CAPE"),
          BLOXD_CAPE_BONES: `${QQ}`,
          BLOXD_CAPE_MAX_Y: (0, qQ.ob)(WQ)
        }),
        getUniforms(QQ) {
          return (0, TQ.d)(function(QQ) {
            const WQ = [];
            for (let XQ = 0; XQ < QQ; XQ++) WQ.push({
              name: `skele${XQ}`,
              type: "highp vec3"
            });
            return WQ
          }(this.skeleLen), "vertex", QQ)
        },
        bind(QQ) {
          for (let WQ = 0; WQ < this.skeleLen; WQ++) QQ.updateVector3(`skele${WQ}`, JQ.gXQ(this.skele, 3 * WQ))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(QQ, WQ) {
          return "vertex" !== QQ ? null : {
            CUSTOM_VERTEX_DEFINITIONS: FQ(WQ),
            CUSTOM_VERTEX_UPDATE_POSITION: PQ(WQ, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: gQ(WQ)
          }
        }
      };
    (0, zQ.i)(rQ)
  },
  38966: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      e: () => JQ
    });
    var wQ = XQ(37462),
      qQ = XQ(37715),
      TQ = XQ(37468),
      zQ = XQ(37477);
    const sQ = "bloxdTextLodBias",
      FQ = [{
        name: sQ,
        type: "float"
      }],
      PQ = "bloxdTextSample",
      gQ = {
        planes: -.5,
        boards: -.5
      },
      JQ = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, wQ.b)("TEXT_SAMPLER"),
        getUniforms: QQ => (0, qQ.d)(FQ, "fragment", QQ),
        bind(QQ) {
          QQ.updateFloat(sQ, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(QQ, WQ) {
          if ("fragment" !== QQ) return null;
          const XQ = (0, TQ.H)(WQ, `vec4 ${PQ}(sampler2D s, vec2 uv, float bias)`, `fn ${PQ}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            wQ = (0, TQ.H)(WQ, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            qQ = `${(0,TQ.T)(WQ,"vDiffuseUV")} + uvOffset`,
            zQ = (0, TQ.H)(WQ, `${PQ}(diffuseSampler, ${qQ}, ${(0,TQ.Jb)(WQ,sQ)})`, `${PQ}(diffuseSampler, diffuseSamplerSampler, ${qQ}, ${(0,TQ.Jb)(WQ,sQ)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${XQ} {\n\t\t\t\t\t${(0,TQ.A)(WQ,"vec4","texel",wQ)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,TQ.l)(WQ,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,TQ.l)(WQ,"vec3","0.0")}, ${(0,TQ.l)(WQ,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, TQ.C)(WQ)]: `baseColor = ${zQ};`
          }
        }
      };
    (0, zQ.i)(JQ)
  },
  41335: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CapeMaterialPlugin: () => GQ,
      HueTintMaterialPlugin: () => UQ,
      LifeformMaterialPlugin: () => bQ,
      OverlayMaterialPlugin: () => vQ
    });
    var wQ = XQ(41344),
      qQ = XQ(38293);
    class TQ extends((0, wQ.i)(qQ.d)) {}(0, wQ.l)(qQ.d, TQ);
    var zQ = XQ(37456);
    class sQ extends((0, wQ.i)(zQ.e)) {}(0, wQ.l)(zQ.e, sQ);
    var FQ = XQ(38129);
    class PQ extends((0, wQ.i)(FQ.d)) {}(0, wQ.l)(FQ.d, PQ);
    var gQ = XQ(37698),
      JQ = XQ(40530),
      rQ = XQ(37696);
    class IQ extends((0, wQ.i)(rQ.h)) {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, XQ), (0, gQ.j)(QQ)
      }
      dispose(QQ) {
        (0, gQ.n)(this._material), super.dispose(QQ)
      }
    }(0, wQ.l)(rQ.h, IQ), (0, rQ.i)({
      disableUnusedSpecularTerm: wQ.e,
      isLightingDisabled: QQ => QQ instanceof JQ.StandardMaterial && QQ.disableLighting
    });
    var jQ = XQ(38966);
    class BQ extends((0, wQ.i)(jQ.e)) {}(0, wQ.l)(jQ.e, BQ);
    var yQ = XQ(39081),
      VQ = XQ(37555),
      DQ = XQ(38427),
      pQ = XQ(37500);
    class GQ extends((0, wQ.i)(yQ.c)) {}(0, wQ.l)(yQ.c, GQ);
    class UQ extends((0, wQ.i)(VQ.d)) {}(0, wQ.l)(VQ.d, UQ);
    class bQ extends((0, wQ.i)(DQ.m)) {}(0, wQ.l)(DQ.m, bQ);
    class vQ extends((0, wQ.i)(pQ.c)) {}(0, wQ.l)(pQ.c, vQ)
  },
  41409: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ
    });
    const wQ = 4e5,
      qQ = 2;

    function TQ(QQ, WQ, XQ) {
      let [TQ, zQ] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [QQ, WQ], sQ = Math.min(Number.isFinite(XQ) && XQ > 0 ? XQ : 1, qQ);
      const FQ = Math.max(0, TQ, QQ) * Math.max(0, zQ, WQ) * sQ * sQ;
      return FQ > wQ && (sQ *= Math.sqrt(wQ / FQ)), [Math.max(1, Math.floor(Math.max(0, QQ) * sQ)), Math.max(1, Math.floor(Math.max(0, WQ) * sQ))]
    }
  },
  41344: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => tQ,
      i: () => DQ,
      l: () => NQ
    });
    var wQ = XQ(40530),
      qQ = XQ(41348),
      TQ = XQ(41394),
      zQ = XQ(41354),
      sQ = XQ(38094),
      FQ = XQ(38107),
      PQ = XQ(38114),
      gQ = XQ(38116),
      JQ = XQ(37490),
      rQ = XQ(37492),
      IQ = XQ(41357),
      jQ = XQ(37477),
      BQ = XQ(37480),
      yQ = XQ(37468);

    function VQ(QQ, WQ) {
      return Object.assign((function(QQ, XQ, wQ, qQ) {
        return WQ(this.featureState, QQ, XQ, wQ, qQ)
      }), {
        NI: QQ
      })
    }

    function DQ(QQ) {
      const WQ = class extends IQ.b {
          constructor(WQ, XQ) {
            const wQ = (0, BQ._)(WQ),
              qQ = wQ && (0, BQ.u)(wQ, QQ.name);
            for (var TQ = arguments.length, zQ = new Array(TQ > 2 ? TQ - 2 : 0), sQ = 2; sQ < TQ; sQ++) zQ[sQ - 2] = arguments[sQ];
            super(WQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...zQ), !1), this.featureState = void 0, this.featureState = XQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, BQ.y)(this._material, QQ, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return QQ.className
          }
          isCompatible(QQ) {
            return QQ === yQ.b.GLSL || QQ === yQ.b.WGSL
          }
        },
        XQ = (0, jQ.g)(QQ);
      for (const [wQ, qQ] of Object.entries(jQ.d)) {
        const TQ = QQ[wQ];
        if (TQ) {
          const QQ = XQ[wQ];
          Object.defineProperty(WQ.prototype, qQ, {
            value: VQ(TQ, QQ),
            writable: !0,
            configurable: !0
          })
        }
      }
      return WQ
    }
    class pQ extends(DQ(sQ.d)) {}
    var GQ = XQ(40089),
      UQ = XQ(41364),
      bQ = XQ(41366);

    function vQ(QQ, WQ, XQ) {
      return (0, bQ.f)(XQ, WQ.urls, (() => async function(QQ, WQ, XQ) {
        const {
          width: wQ
        } = QQ[0].getSize(), qQ = QQ.map(((QQ, XQ) => {
          var qQ;
          const TQ = Math.round(QQ.getSize().height / wQ),
            zQ = null === WQ || void 0 === WQ ? void 0 : WQ[XQ];
          return {
            pixels: zQ && zQ.byteLength === wQ * wQ * TQ * 4 ? zQ : null !== (qQ = dQ.get(QQ.getInternalTexture())) && void 0 !== qQ ? qQ : QQ._readPixelsSync(),
            layers: TQ
          }
        })), TQ = XQ.Uj().getCaps().texture2DArrayMaxLayerCount, sQ = (0, bQ.b)(qQ, wQ, TQ).map((QQ => {
          let {
            pixels: WQ,
            layers: qQ
          } = QQ;
          return {
            atlas: new UQ.d(WQ, wQ, wQ, qQ, GQ.b.TEXTUREFORMAT_RGBA, XQ, !0, !1, zQ.e.NEAREST_NEAREST_MIPLINEAR),
            layers: qQ
          }
        }));
        return QQ.forEach(((QQ, WQ) => {
          const wQ = QQ.getInternalTexture();
          dQ.has(wQ) || (! function(QQ, WQ) {
            const XQ = WQ.createRawTexture(new Uint8Array(4), 1, 1, GQ.b.TEXTUREFORMAT_RGBA, !1, !1, zQ.e.NEAREST_SAMPLINGMODE);
            QQ._hardwareTexture.release(), WQ.unbindAllTextures(), XQ._swapAndDie(QQ, !1)
          }(wQ, XQ.Uj()), dQ.set(wQ, qQ[WQ].pixels))
        })), sQ
      }(QQ, WQ.pixels, XQ)))
    }
    const dQ = new WeakMap;
    var HQ = XQ(38125);
    class aQ extends(DQ(FQ.h)) {
      constructor(QQ, WQ) {
        super(QQ, WQ), this.loaded = new Set, this.mirrors = void 0, this.mirrors = WQ.textures.map((QQ => QQ.mirror)), this.mirrors.forEach(((QQ, WQ) => {
          QQ.onLoadObservable.add((QQ => {
            this.setTextureArrayData(QQ, WQ).catch((QQ => {
              console.error(`Failed to build the texture arrays, at atlas ${WQ}`, QQ)
            }))
          }))
        })), (0, HQ.j)(WQ, QQ.shaderLanguage)
      }
      async setTextureArrayData(QQ, WQ) {
        const XQ = this.featureState,
          {
            width: wQ,
            height: qQ
          } = QQ.getSize(),
          TQ = this._material.shaderLanguage;
        if (!XQ.useWebGL2) return void(0, HQ.g)(this._material, XQ, WQ, wQ, Math.round(qQ / wQ), TQ);
        if (this.loaded.add(WQ), this.loaded.size < this.mirrors.length) return;
        const zQ = await vQ(this.mirrors, XQ.sources, this._material.sE());
        (0, HQ.d)(this._material, XQ, zQ, wQ, TQ)
      }
    }
    var lQ = XQ(41373),
      hQ = XQ(40561),
      iQ = XQ(37367),
      cQ = XQ(41379),
      AQ = XQ(40661),
      RQ = XQ(40555),
      EQ = XQ(41320),
      CQ = XQ(37855),
      uQ = XQ(41386);
    class LQ extends lQ.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const kQ = {
      Mesh: cQ.b,
      TransformNode: EQ.b,
      Tj: lQ.b,
      VertexBuffer: lQ.f,
      BoundingInfo: hQ.e,
      vj: iQ.vj,
      ArenaBuffer: LQ,
      SubMesh: RQ.b,
      VertexData: AQ.e,
      MirroredGeometry: uQ.b,
      meshFromArrays: uQ.f,
      plainMeshFromArrays: uQ.h
    };
    (0, CQ.f)(kQ);
    var fQ = XQ(37698);
    class SQ extends(DQ(gQ.k)) {
      constructor(QQ, WQ) {
        if (super(QQ, WQ), QQ instanceof wQ.StandardMaterial && WQ.dirLightCount > 0) {
          const WQ = QQ,
            XQ = WQ._blockDirtyMechanism;
          WQ._blockDirtyMechanism = !0, QQ.disableLighting = !0, WQ._blockDirtyMechanism = XQ;
          const wQ = (0, BQ._)(QQ);
          wQ && (wQ.disableLighting = !0, (0, BQ.Z)(wQ))
        }(0, fQ.j)(QQ)
      }
      dispose(QQ) {
        (0, fQ.n)(this._material), super.dispose(QQ)
      }
    }

    function tQ(QQ, WQ) {
      if (!(WQ instanceof wQ.StandardMaterial) || WQ.specularTexture) return;
      const {
        r: XQ,
        g: qQ,
        b: TQ
      } = WQ.specularColor;
      0 === XQ && 0 === qQ && 0 === TQ && (QQ.SPECULARTERM = !1)
    }(0, gQ.i)({
      disableUnusedSpecularTerm: tQ
    });
    var oQ = XQ(37582),
      eQ = XQ(37866);
    const nQ = new RegExp(`^#define ${PQ.d}\\s*$`, "m");
    class xQ extends(DQ(PQ.i)) {
      constructor(QQ, WQ) {
        super(QQ, WQ), this.zj = !1, WQ.ditherOnlyWhileFading && (eQ.e.add(QQ), this.prewarmDitherTwins(QQ))
      }
      prewarmDitherTwins(QQ) {
        const WQ = new WeakSet;
        QQ.onEffectCreatedObservable.add((XQ => {
          let {
            effect: wQ,
            subMesh: qQ
          } = XQ;
          if (this.featureState.prewarmingDither || WQ.has(wQ)) return;
          WQ.add(wQ);
          const TQ = null === qQ || void 0 === qQ ? void 0 : qQ.getMesh();
          TQ && !nQ.test(wQ.defines) && QQ.sE().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(TQ) || WQ.delete(wQ)
          }))
        }))
      }
      prewarmDither(QQ) {
        if (this.zj || QQ.rG()) return !1;
        const WQ = new RQ.b(0, 0, 0, 0, 0, QQ, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(QQ, WQ)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== WQ.effect
      }
      dispose(QQ) {
        this.zj = !0, super.dispose(QQ)
      }
    }
    const YQ = new Map;

    function NQ(QQ, WQ) {
      YQ.set(QQ, WQ)
    }
    NQ(sQ.d, pQ), NQ(FQ.h, aQ), NQ(PQ.i, xQ), NQ(gQ.k, SQ), (0, JQ.e)({
      create: (QQ, WQ) => {
        const XQ = new wQ.StandardMaterial(QQ.name, WQ);
        return (0, oQ.r)(QQ, XQ), XQ.detailMap._pluginDefineNames
      },
      write: (QQ, WQ, XQ) => {
        (0, oQ._)(QQ.mirror, WQ, XQ)
      },
      addFeature: (QQ, WQ, XQ) => {
        const wQ = YQ.get(WQ.feature);
        if (!wQ) throw new Error(`${WQ.feature.name} has no plugin class (registerPluginClass)`);
        new wQ(QQ.mirror, WQ.state, ...XQ)
      },
      texture: (QQ, WQ, XQ) => {
        let {
          url: wQ,
          noMipmap: qQ,
          invertY: TQ,
          samplingMode: sQ,
          data: FQ,
          sets: PQ
        } = XQ;
        if (!FQ) {
          const XQ = new zQ.e(wQ, WQ, qQ, TQ, sQ);
          return Object.assign(XQ, PQ), void(0, rQ.N)(QQ, XQ)
        }
        const gQ = {},
          JQ = new Promise(((QQ, WQ) => {
            gQ.onLoad = QQ, gQ.onError = (QQ, XQ) => {
              WQ(new Error(`${FQ.context}: ${(null===XQ||void 0===XQ?void 0:XQ.message)||QQ||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: IQ,
            bytes: jQ,
            label: BQ
          } = FQ,
          yQ = {
            noMipmap: qQ,
            invertY: !1,
            samplingMode: sQ,
            ...gQ,
            mimeType: IQ,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          VQ = new zQ.e(null, WQ, yQ);
        oQ.u.set(VQ, JQ), Object.assign(VQ, PQ), VQ.updateURL(wQ, jQ);
        const DQ = VQ.getInternalTexture();
        DQ && (DQ.label = BQ), QQ.uvSet = VQ.coordinatesIndex, QQ.matrix.set((0, oQ.T)(VQ)), (0, rQ.N)(QQ, VQ)
      },
      cube: (QQ, WQ, XQ) => {
        let {
          rootUrl: wQ,
          files: TQ,
          noMipmap: sQ,
          luminance: FQ
        } = XQ;
        const {
          samplingMode: PQ
        } = QQ.sampler, gQ = PQ === (0, rQ.E)(sQ) ? null : () => {
          (0, oQ.S)(JQ, PQ)
        }, JQ = new qQ.b(wQ, WQ, null, sQ, TQ, gQ, null, (0, rQ.A)(FQ));
        JQ.coordinatesMode = zQ.e.SKYBOX_MODE, (0, rQ.N)(QQ, JQ)
      },
      canvas: (QQ, WQ, XQ) => {
        let {
          width: wQ,
          height: qQ,
          mipmaps: sQ,
          samplingMode: FQ,
          hasAlpha: PQ = !1,
          wrap: gQ = zQ.e.CLAMP_ADDRESSMODE
        } = XQ;
        const JQ = new TQ.b(WQ, {
          width: wQ,
          height: qQ
        }, QQ, sQ, FQ);
        JQ.hasAlpha = PQ, JQ.wrapU = gQ, JQ.wrapV = gQ;
        const rQ = (0, oQ.F)(JQ);
        return (0, oQ.J)(rQ, JQ), rQ
      }
    })
  },
  41386: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ,
      f: () => JQ,
      h: () => rQ
    });
    var wQ = XQ(41373),
      qQ = XQ(40331),
      TQ = XQ(40561),
      zQ = XQ(40670),
      sQ = XQ(41379),
      FQ = XQ(40661),
      PQ = XQ(37762);
    class gQ extends zQ.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (QQ, WQ) => {
          this.releaseUnlessInstanced(WQ)
        }, this.onLinked = null
      }
      link(QQ) {
        var WQ;
        (0, PQ.o)(QQ), this.model = QQ, null === (WQ = this.onLinked) || void 0 === WQ || WQ.call(this, QQ)
      }
      relink() {
        this.release();
        const QQ = [];
        for (const qQ of Object.values(this._vertexBuffers))
          if (!qQ.getIsInstanced()) {
            const {
              byteOffset: WQ,
              byteStride: XQ,
              type: wQ,
              normalized: TQ
            } = qQ;
            QQ.push({
              kind: qQ.getKind(),
              data: qQ.getData(),
              offset: WQ,
              stride: XQ,
              components: qQ.getSize(),
              glType: wQ,
              isNormalized: TQ
            })
          } const WQ = this._indices.length ? this._indices : null,
          {
            minimum: XQ,
            maximum: wQ
          } = this.extend;
        this.link(new PQ.g(QQ, WQ, this.getTotalVertices(), new Float64Array(XQ.awQ()), new Float64Array(wQ.awQ())))
      }
      copy(QQ) {
        if (!this.model) return super.copy(QQ);
        const WQ = new gQ(QQ, this.sE()),
          XQ = this.lwQ(void 0, !0);
        XQ && WQ.setIndices(XQ);
        let zQ = !1;
        for (const TQ in this._vertexBuffers) {
          const QQ = this._vertexBuffers[TQ],
            XQ = QQ.getData();
          if (!XQ) continue;
          const sQ = QQ.getSize(),
            {
              type: FQ,
              byteOffset: PQ,
              byteStride: gQ,
              normalized: JQ
            } = QQ;
          zQ ||= QQ.isUpdatable();
          const rQ = QQ.getIsInstanced() ? (XQ instanceof Array ? 4 * XQ.length : XQ.byteLength) / gQ : this.getTotalVertices(),
            IQ = (0, qQ.w)(XQ, sQ, FQ, PQ, gQ, rQ, !0),
            jQ = {
              updatable: QQ.isUpdatable(),
              stride: sQ,
              type: FQ,
              normalized: JQ,
              takeBufferOwnership: !0,
              instanced: QQ.getIsInstanced()
            };
          WQ.setVerticesBuffer(new wQ.f(this.Uj(), IQ, TQ, jQ), rQ)
        }
        return WQ._updatable = zQ, WQ._boundingInfo = new TQ.e(this.extend.minimum, this.extend.maximum), WQ.relink(), WQ
      }
      static mergeMeshes(QQ, WQ, XQ, wQ, qQ, TQ) {
        const FQ = QQ[0].sE(),
          PQ = new sQ.b(QQ[0].name + "_merged", FQ),
          JQ = new gQ(zQ.d.RandomId(), FQ, void 0, !1, PQ);
        try {
          if (!sQ.b.MergeMeshes(QQ, WQ, XQ, PQ, qQ, TQ)) return PQ.dispose(), null
        } catch (rQ) {
          throw PQ.dispose(), rQ
        }
        return JQ.relink(), PQ
      }
      removeVerticesData(QQ) {
        this.releaseUnlessInstanced(QQ), super.removeVerticesData(QQ)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(QQ) {
        var WQ;
        QQ && null !== (WQ = this.getVertexBuffer(QQ)) && void 0 !== WQ && WQ.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, PQ.u)(this.model), this.model = null)
      }
    }

    function JQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new sQ.b(QQ, XQ);
      const qQ = (0, PQ.m)(WQ),
        {
          positions: TQ,
          normals: JQ,
          uvs: rQ,
          indices: IQ,
          named: jQ = {}
        } = WQ,
        BQ = new FQ.e;
      BQ.positions = TQ, BQ.normals = null !== JQ && void 0 !== JQ ? JQ : null, BQ.uvs = null !== rQ && void 0 !== rQ ? rQ : null, BQ.indices = IQ;
      const yQ = new gQ(zQ.d.RandomId(), XQ, BQ, !1, wQ);
      for (const {
          kind: zQ,
          components: sQ
        }
        of qQ.vertexAttributes) zQ in jQ && wQ.setVerticesData(zQ, jQ[zQ], !1, sQ);
      return yQ.link(qQ), wQ
    }

    function rQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qQ = new sQ.b(QQ, XQ),
        {
          positions: TQ,
          normals: zQ,
          uvs: PQ,
          indices: gQ
        } = WQ;
      return Object.assign(new FQ.e, {
        positions: TQ,
        normals: zQ,
        uvs: PQ,
        indices: gQ
      }).applyToMesh(qQ, wQ), qQ
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
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);