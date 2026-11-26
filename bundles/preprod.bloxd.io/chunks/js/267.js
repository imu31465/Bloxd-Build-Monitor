export const id = 267;
export const ids = [267];
export const modules = {
  42213: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => IU,
      d: () => DU,
      g: () => YU,
      k: () => EU,
      n: () => NU
    });
    var cU = zU(1236),
      yU = zU(2334),
      QU = zU(37886),
      AU = zU(38258);
    class FU {
      constructor(UU, XU) {
        this.pose = UU, this.nodes = void 0, this.nodes = UU.boneNames.map((UU => XU.get(UU)))
      }
      write(UU) {
        this.pose.pose(UU), (0, AU.l)(this.pose, this.nodes)
      }
    }

    function oU(UU) {
      UU.unfreezeWorldMatrix();
      for (const XU of UU.getChildren()) oU(XU)
    }
    async function DU(UU, XU, zU, cU) {
      let {
        keepTransforms: yU,
        backFaceCulling: AU
      } = cU;
      const FU = await (0, QU.j)(XU, UU),
        DU = (0, QU.g)(null !== zU && void 0 !== zU ? zU : XU, UU, void 0, AU);
      (0, QU.m)(FU, DU, {
        keepTransforms: yU,
        backFaceCulling: AU,
        onProcessedMesh: XU => {
          UU.UyU(XU, !1), XU.isVisible = !1
        }
      });
      for (const QU of FU.rootNodes) oU(QU);
      return FU
    }

    function EU(UU, XU) {
      UU.isVisible = XU;
      for (const zU of UU.getChildMeshes()) zU.isVisible = XU
    }

    function YU(UU) {
      const XU = new Map;
      for (const zU of UU.getNodes()) XU.set(zU.name, zU);
      return XU
    }

    function NU(UU, XU, zU, cU) {
      EU(UU, !0), (0, QU.r)(UU, XU.overlayColour), zU.attachTransformNode(UU, cU, zU.getNamedNode(cU, XU.destNode))
    }
    class IU {
      constructor(UU, XU, zU) {
        this.sa = UU, this.thinInstMgr = XU, this.YH = zU, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(UU, XU, zU) {
        const cU = (0, QU.h)(UU, XU);
        return cU in this.modelCache || (this.modelCache[cU] = (async () => {
          try {
            const cU = YU(await DU(this.sa, UU, XU, {
                keepTransforms: void 0 !== zU,
                backFaceCulling: !1
              })),
              yU = void 0 === zU ? null : (0, AU.h)(zU, (UU => {
                const XU = cU.get(UU);
                return XU ? (0, AU.g)(XU) : null
              }));
            return {
              nodesByName: cU,
              bones: null === yU ? null : new FU(yU, cU)
            }
          } catch (yU) {
            throw delete this.modelCache[cU], console.error(`Failed to load preview attachment ${cU}:`, yU), yU
          }
        })()), this.modelCache[cU]
      }
      async update(UU, XU) {
        var zU;
        const {
          thinInstMgr: QU,
          YH: AU
        } = this;
        this.cosmeticNames[UU] = XU;
        const FU = this.attachmentsByType[UU];
        if (FU)
          for (const {
              mesh: yU,
              destNode: DU,
              bones: YU
            }
            of FU) {
            null !== YU && (0, cU.bb)(this.shownBones, YU), EU(yU, !1);
            const UU = QU.getNamedNode(AU, DU);
            QU.detachTransformNodeIfFound(yU, AU, UU)
          }
        this.attachmentsByType[UU] = [];
        const oU = (0, yU.g)(UU, XU);
        if (null !== oU && void 0 !== oU && null !== (zU = oU.attachments) && void 0 !== zU && zU.length)
          for (const cU of oU.attachments) {
            let zU;
            try {
              zU = await this.loadModel(cU.modelGlb, cU.texture, cU.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[UU] !== XU) return;
            const yU = zU.nodesByName.get(cU.modelNode);
            yU ? (NU(yU, cU, QU, AU), this.attachmentsByType[UU].push({
              mesh: yU,
              destNode: cU.destNode,
              bones: zU.bones
            }), null !== zU.bones && this.shownBones.push(zU.bones)) : console.error(`Preview attachment node ${cU.modelNode} not found in ${cU.modelGlb}`)
          }
      }
      writePoses(UU) {
        for (const XU of this.shownBones) XU.write(UU)
      }
    }
  },
  42180: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      openMobLineupPreview: () => lU,
      openMobPreview: () => mU,
      openPetPreview: () => xU
    });
    var cU = zU(40929),
      yU = zU(41199),
      QU = zU(42184),
      AU = zU(37919),
      FU = zU(37814),
      oU = zU(41331),
      DU = zU(42205),
      EU = zU(39250),
      YU = zU(37882),
      NU = zU(37870),
      IU = zU(37812),
      pU = zU(39152),
      aU = zU(39144),
      tU = zU(38849),
      gU = zU(37886),
      kU = zU(3043),
      GU = zU(42213),
      BU = zU(2334);
    const ZU = new Map;

    function RU(UU, XU) {
      const zU = function(UU) {
        return UU.flatMap((UU => {
          var XU;
          let [zU, cU] = UU;
          const yU = void 0 === cU || null === (XU = (0, BU.g)(zU, cU)) || void 0 === XU ? void 0 : XU.attachments;
          return null !== yU && void 0 !== yU ? yU : []
        }))
      }(XU).map((XU => function(UU, XU) {
        let {
          modelGlb: zU,
          texture: cU,
          animation: yU
        } = XU;
        const QU = void 0 !== yU,
          AU = `${(0,gU.h)(zU,cU)}|${QU}`;
        let FU = ZU.get(AU);
        return FU || (FU = (0, GU.d)(UU, zU, cU, {
          keepTransforms: QU,
          backFaceCulling: !1
        }).then(GU.g, (UU => {
          throw ZU.delete(AU), UU
        })), ZU.set(AU, FU)), FU
      }(UU, XU).then((UU => ({
        attachment: XU,
        nodes: UU
      })), (UU => (console.error(`Mob preview: could not load ${XU.modelGlb}`, UU), null)))));
      return Promise.all(zU).then((UU => UU.filter((UU => null !== UU))))
    }
    var PU = zU(38907),
      WU = zU(38876),
      dU = zU(38534),
      LU = zU(38356);
    zU(42215), zU(41563), zU(42221);
    const eU = 22,
      CU = 13,
      wU = Math.PI - Math.PI / 16,
      qU = 6,
      OU = Math.PI / 4;
    let SU = null;
    const rU = {},
      uU = new Map;

    function fU() {
      if (null !== SU) return SU;
      const UU = document.createElement("canvas");
      UU.classList.add("MobPreviewCanvas");
      const XU = new cU.c(UU, !0, {
        preserveDrawingBuffer: !0
      });
      XU.XyU = (0, kU.e)().WY.engine.XyU;
      const zU = new yU.e(XU);
      zU.clearColor = new AU.e(0, 0, 0, 0), zU.ambientColor = new AU.Color3(1, 1, 1);
      const DU = new QU.e("bt", Math.PI / 2, Math.PI / 2, eU, FU.Sp.Zero(), zU),
        EU = new oU.d("light", new FU.Sp(-.1, 1, -.3), zU);
      return EU.diffuse = new AU.Color3(1, 1, 1), EU.specular = new AU.Color3(1, 1, 1), EU.groundColor = new AU.Color3(.5, .5, .5), SU = {
        engine: XU,
        sa: zU,
        canvas: UU,
        camera: DU
      }, SU
    }

    function iU(UU) {
      return rU[UU] ??= (0, tU.w)(UU, fU().sa, !0).catch((XU => {
        throw delete rU[UU], XU
      })), rU[UU]
    }

    function HU(UU) {
      let XU = uU.get(UU);
      return XU || (XU = dU.r[UU].loadModel(fU().sa, !1).then((UU => (UU.YC(!1), UU)), (XU => {
        throw uU.delete(UU), XU
      })), uU.set(UU, XU)), XU
    }

    function MU(UU) {
      var XU, zU, cU;
      let {
        mobType: yU,
        variation: QU,
        animation: AU
      } = UU, oU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, BU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ZU = null !== (XU = null === oU || void 0 === oU ? void 0 : oU.size) && void 0 !== XU ? XU : 1,
        eU = null !== (zU = null === oU || void 0 === oU ? void 0 : oU.cosmetics) && void 0 !== zU ? zU : [],
        qU = null !== (cU = null === oU || void 0 === oU ? void 0 : oU.jB) && void 0 !== cU ? cU : null;
      let OU = !1,
        SU = null,
        rU = null;
      const {
        engine: uU,
        sa: MU
      } = fU(), vU = MU.onBeforeRenderObservable.add((() => {
        var UU;
        null === (UU = rU) || void 0 === UU || UU.render(uU.getDeltaTime())
      })), VU = null === qU ? null : HU(qU).catch((UU => (console.error(`Mob preview: could not load ${qU}`, UU), null)));
      return Promise.all([iU(yU), VU, RU(fU().sa, eU)]).then((UU => {
        var XU, zU, cU;
        let [oU, RU, uU] = UU;
        if (OU) return;
        const iU = (0, kU.e)().WY.DH,
          {
            hitBoxDimensions: HU
          } = (0, EU.b)(yU),
          MU = CU / Math.max(HU.height, HU.width);
        if (SU = (0, tU.o)(yU, MU * ZU, !0, !0), iU.setPosition(SU, BU, -HU.height * MU / 2, 0), iU.setRotationEulerY(SU, wU), oU.meshApi instanceof WU.b && eU.length > 0) {
          for (const [UU, XU] of eU) oU.meshApi.updatePlayerCosmetic(null, SU, UU, XU, !0);
          ! function(UU, XU) {
            const zU = (0, kU.e)().WY.DH;
            for (const {
                attachment: cU,
                nodes: yU
              }
              of UU) {
              const UU = yU.get(cU.modelNode);
              UU ? (0, GU.n)((0, gU.c)(UU, `${UU.name}Worn`), cU, zU, XU) : console.error(`Mob preview: attachment node ${cU.modelNode} not found in ${cU.modelGlb}`)
            }
          }(uU, SU)
        } else oU.meshApi.updateVariation(SU, yU, null !== QU && void 0 !== QU ? QU : "default");
        null !== qU && null !== RU && function(UU, XU, zU, cU) {
          var yU;
          const QU = dU.r[UU],
            AU = (0, pU.h)();
          (0, pU.e)(QU, null === (yU = (0, PU.d)(zU).meshMetadata.heldItemPositionParams) || void 0 === yU ? void 0 : yU.itemOffset, AU);
          const oU = LU.b * AU.RY.y,
            EU = AU.usesQuaternion ? AU.quaternion : FU.Quaternion.FromEulerVector(AU.rotation),
            YU = new DU.c(`${XU.name}Hand`, fU().sa);
          YU.position.YL((0, aU.b)(AU.position, EU, oU, QU.heldModelOffsetY())), YU.rotationQuaternion = EU, YU.RY.set(AU.RY.x, oU, AU.RY.z), XU.clone(`${XU.name}Held`, YU).YC(!0);
          const NU = (0, kU.e)().WY.DH;
          NU.attachTransformNode(YU, cU, NU.getNamedNode(cU, "ArmRightMesh"))
        }(qU, RU, yU, SU), iU.set(SU, "aOpacity", 1);
        const vU = null !== (XU = (0, PU.d)(yU).meshMetadata.lifeformTypeForModelOverride) && void 0 !== XU ? XU : yU;
        rU = new IU.AnimatorState, rU.thinInstMgr = iU, rU.YH = SU, rU.RcU = iU.icU(SU, 0), rU.modelLifeformType = vU, rU.nodeNameAliases = null !== (zU = null === (cU = (0, YU.e)(vU)) || void 0 === cU ? void 0 : cU.nodeNameAliases) && void 0 !== zU ? zU : null, rU.startAnimation(AU, NU.f.Movement)
      })).catch((UU => {
        console.error(`Mob preview: could not load ${yU}`, UU)
      })), () => {
        OU = !0, MU.onBeforeRenderObservable.remove(vU), null !== SU && (0, kU.e)().WY.DH.delete(SU)
      }
    }

    function vU(UU, XU) {
      return MU({
        mobType: "NPC",
        variation: null,
        animation: UU.animation
      }, UU, XU)
    }

    function VU(UU) {
      let {
        mobType: XU,
        variation: zU,
        metaInfo: cU,
        tamed: yU
      } = UU, QU = !1, AU = null, FU = 0;
      const oU = (0, kU.e)(),
        DU = oU.WY.DH,
        EU = UU => {
          FU += OU * (UU / 1e3) % (2 * Math.PI), DU.setRotationEulerY(AU, FU)
        };
      return iU(XU).then((UU => {
        if (QU) return;
        AU = (0, tU.o)(XU, qU, !0, !0), DU.setPosition(AU, 0, -qU, 0), UU.meshApi.updateVariation(AU, XU, zU);
        const FU = {
          wool: "Sheared" !== cU,
          saddle: "Saddled" === cU,
          antlers: "Antlers" === cU,
          collar: yU
        };
        for (const [XU, zU] of Object.entries(FU)) DU.hasGroup(AU, XU) && UU.meshApi.setMeshGroupVisibility(AU, XU, zU);
        DU.set(AU, "aOpacity", 1), oU.on("renderTickBegin", EU)
      })).catch((UU => {
        console.error(`Pet preview: could not load ${XU}`, UU)
      })), () => {
        QU = !0, oU.off("renderTickBegin", EU), null !== AU && DU.delete(AU)
      }
    }
    class sU {
      constructor(UU, XU) {
        this.place = XU, this.remove = null;
        const {
          engine: zU,
          sa: cU,
          canvas: yU
        } = fU();
        UU.appendChild(yU), zU.resize(), zU.runRenderLoop((() => {
          cU.render()
        }))
      }
      show(UU) {
        var XU;
        null === (XU = this.remove) || void 0 === XU || XU.call(this), this.remove = this.place(UU)
      }
      resize(UU, XU) {
        const {
          engine: zU,
          canvas: cU
        } = fU();
        cU.width = UU, cU.height = XU, zU.resize()
      }
      close() {
        var UU;
        fU().engine.stopRenderLoop(), null === (UU = this.remove) || void 0 === UU || UU.call(this), this.remove = null
      }
    }
    class nU {
      constructor(UU) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new sU(UU, (() => () => {}))
      }
      show(UU) {
        UU.figures !== this.view.figures && this.preload(UU.figures), this.view = UU, this.place()
      }
      resize(UU, XU) {
        this.preview.resize(UU, XU), this.aspect = UU / XU, this.place()
      }
      close() {
        this.preview.close();
        for (const UU of this.placed) null === UU || void 0 === UU || UU.remove();
        this.placed = []
      }
      preload(UU) {
        const XU = () => {};
        iU("NPC").catch(XU);
        for (const {
            jB: zU,
            cosmetics: cU
          }
          of UU) null !== zU && HU(zU).catch(XU), RU(fU().sa, cU).catch(XU)
      }
      place() {
        const {
          figures: UU,
          shown: XU
        } = this.view, zU = UU.map(((zU, cU) => {
          var yU;
          const QU = null !== (yU = this.placed[cU]) && void 0 !== yU ? yU : null;
          if (!XU[cU]) return null === QU || void 0 === QU || QU.remove(), null;
          const AU = (FU = (cU + .5) / UU.length, oU = this.aspect, (.5 - FU) * (2 * eU * Math.tan(fU().camera.fov / 2)) * oU);
          var FU, oU;
          return null !== QU && QU.figure === zU && QU.x === AU ? QU : (null === QU || void 0 === QU || QU.remove(), {
            figure: zU,
            x: AU,
            remove: vU(zU, AU)
          })
        }));
        for (const cU of this.placed.slice(UU.length)) null === cU || void 0 === cU || cU.remove();
        this.placed = zU
      }
    }

    function mU(UU) {
      return new sU(UU, MU)
    }

    function lU(UU) {
      return new nU(UU)
    }

    function xU(UU) {
      return new sU(UU, VU)
    }
  },
  39621: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU
    });
    var cU = zU(37940),
      yU = zU(38037),
      QU = zU(38077),
      AU = zU(37961),
      FU = zU(37946);

    function oU(UU) {
      return `\n\t\t\t\t${(0,FU.x)(UU,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, FU.C)(UU, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, FU.C)(UU, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, FU.k)(UU, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function DU(UU, XU) {
      let zU = (0, FU.xb)(UU, "skele" + (XU - 1));
      for (let yU = XU - 2; yU >= 0; yU--) zU = (0, FU.mb)(UU, `boneIdx == ${yU}`, (0, FU.xb)(UU, `skele${yU}`), zU);
      const cU = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,FU.C)(UU,"int","boneIdx",(0,FU.rb)(UU,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,FU.C)(UU,"vec3","bone",zU)}\n\t\t\t\t${(0,FU.C)(UU,"vec2","pivot",(0,FU.k)(UU,"vec2","0.0",`${(0,FU.Ib)(UU,"position")}.z`))}\n\t\t\t\t${(0,FU.V)(UU)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${cU}));`:`positionUpdated.yz += ${cU};`}\n\t\t`
    }

    function EU(UU) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,FU.k)(UU,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const YU = {
        x: 0,
        y: 0,
        z: 0,
        zY(UU, XU) {
          return this.x = UU[XU], this.y = UU[XU + 1], this.z = UU[XU + 2], this
        }
      },
      NU = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (UU, XU) => ({
          ...(0, cU.d)("CAPE"),
          BLOXD_CAPE_BONES: `${UU}`,
          BLOXD_CAPE_MAX_Y: (0, yU.Ab)(XU)
        }),
        getUniforms(UU) {
          return (0, QU.d)(function(UU) {
            const XU = [];
            for (let zU = 0; zU < UU; zU++) XU.push({
              name: `skele${zU}`,
              type: "highp vec3"
            });
            return XU
          }(this.skeleLen), "vertex", UU)
        },
        bind(UU) {
          for (let XU = 0; XU < this.skeleLen; XU++) UU.updateVector3(`skele${XU}`, YU.zY(this.skele, 3 * XU))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(UU, XU) {
          return "vertex" !== UU ? null : {
            CUSTOM_VERTEX_DEFINITIONS: oU(XU),
            CUSTOM_VERTEX_UPDATE_POSITION: DU(XU, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: EU(XU)
          }
        }
      };
    (0, AU.n)(NU)
  },
  39504: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => EU,
      g: () => YU
    });
    var cU = zU(37940),
      yU = zU(38077),
      QU = zU(37946),
      AU = zU(37961);
    const FU = "bloxdTextLodBias",
      oU = [{
        name: FU,
        type: "float"
      }],
      DU = "bloxdTextSample",
      EU = {
        planes: -.5,
        boards: -.5
      },
      YU = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, cU.d)("TEXT_SAMPLER"),
        getUniforms: UU => (0, yU.d)(oU, "fragment", UU),
        bind(UU) {
          UU.updateFloat(FU, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(UU, XU) {
          if ("fragment" !== UU) return null;
          const zU = (0, QU.L)(XU, `vec4 ${DU}(sampler2D s, vec2 uv, float bias)`, `fn ${DU}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            cU = (0, QU.L)(XU, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            yU = `${(0,QU.R)(XU,"vDiffuseUV")} + uvOffset`,
            AU = (0, QU.L)(XU, `${DU}(diffuseSampler, ${yU}, ${(0,QU.xb)(XU,FU)})`, `${DU}(diffuseSampler, diffuseSamplerSampler, ${yU}, ${(0,QU.xb)(XU,FU)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${zU} {\n\t\t\t\t\t${(0,QU.C)(XU,"vec4","texel",cU)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,QU.k)(XU,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,QU.k)(XU,"vec3","0.0")}, ${(0,QU.k)(XU,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, QU.F)(XU)]: `baseColor = ${AU};`
          }
        }
      };
    (0, AU.n)(YU)
  },
  42221: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CapeMaterialPlugin: () => BU,
      HueTintMaterialPlugin: () => ZU,
      LifeformMaterialPlugin: () => RU,
      OverlayMaterialPlugin: () => PU
    });
    var cU = zU(42229),
      yU = zU(38758);
    class QU extends((0, cU.i)(yU.e)) {}(0, cU.l)(yU.e, QU);
    var AU = zU(38034);
    class FU extends((0, cU.i)(AU.d)) {}(0, cU.l)(AU.d, FU);
    var oU = zU(38597);
    class DU extends((0, cU.i)(oU.e)) {}(0, cU.l)(oU.e, DU);
    var EU = zU(38057),
      YU = zU(41348),
      NU = zU(38053);
    class IU extends((0, cU.i)(NU.g)) {
      constructor(UU, XU, zU) {
        super(UU, XU, zU), (0, EU.h)(UU)
      }
      dispose(UU) {
        (0, EU.k)(this._material), super.dispose(UU)
      }
    }(0, cU.l)(NU.g, IU), (0, NU.i)({
      disableUnusedSpecularTerm: cU.e,
      isLightingDisabled: UU => UU instanceof YU.StandardMaterial && UU.disableLighting
    });
    var pU = zU(39504);
    class aU extends((0, cU.i)(pU.g)) {}(0, cU.l)(pU.g, aU);
    var tU = zU(39621),
      gU = zU(37932),
      kU = zU(38891),
      GU = zU(38046);
    class BU extends((0, cU.i)(tU.e)) {}(0, cU.l)(tU.e, BU);
    class ZU extends((0, cU.i)(gU.b)) {}(0, cU.l)(gU.b, ZU);
    class RU extends((0, cU.i)(kU.p)) {}(0, cU.l)(kU.p, RU);
    class PU extends((0, cU.i)(GU.d)) {}(0, cU.l)(GU.d, PU)
  },
  42229: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => VU,
      i: () => kU,
      l: () => JU
    });
    var cU = zU(41348),
      yU = zU(42233),
      QU = zU(42279),
      AU = zU(42242),
      FU = zU(38563),
      oU = zU(38573),
      DU = zU(38581),
      EU = zU(38589),
      YU = zU(37995),
      NU = zU(38004),
      IU = zU(42248),
      pU = zU(37961),
      aU = zU(37977),
      tU = zU(37946);

    function gU(UU, XU) {
      return Object.assign((function(UU, zU, cU, yU) {
        return XU(this.featureState, UU, zU, cU, yU)
      }), {
        FY: UU
      })
    }

    function kU(UU) {
      const XU = class extends IU.c {
          constructor(XU, zU) {
            const cU = (0, aU.V)(XU),
              yU = cU && (0, aU.v)(cU, UU.name);
            for (var QU = arguments.length, AU = new Array(QU > 2 ? QU - 2 : 0), FU = 2; FU < QU; FU++) AU[FU - 2] = arguments[FU];
            super(XU, UU.name, UU.priority, yU ? yU.defines : UU.defines(...AU), !1), this.featureState = void 0, this.featureState = zU, this._pluginManager._addPlugin(this), this._enable(!0), (0, aU.x)(this._material, UU, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return UU.className
          }
          isCompatible(UU) {
            return UU === tU.b.GLSL || UU === tU.b.WGSL
          }
        },
        zU = (0, pU.j)(UU);
      for (const [cU, yU] of Object.entries(pU.e)) {
        const QU = UU[cU];
        if (QU) {
          const UU = zU[cU];
          Object.defineProperty(XU.prototype, yU, {
            value: gU(QU, UU),
            writable: !0,
            configurable: !0
          })
        }
      }
      return XU
    }
    class GU extends(kU(FU.c)) {}
    var BU = zU(40929),
      ZU = zU(42257),
      RU = zU(42259);

    function PU(UU, XU, zU) {
      return (0, RU.g)(zU, XU.urls, (() => async function(UU, XU, zU) {
        const {
          width: cU
        } = UU[0].getSize(), yU = UU.map(((UU, zU) => {
          var yU;
          const QU = Math.round(UU.getSize().height / cU),
            AU = null === XU || void 0 === XU ? void 0 : XU[zU];
          return {
            pixels: AU && AU.byteLength === cU * cU * QU * 4 ? AU : null !== (yU = WU.get(UU.getInternalTexture())) && void 0 !== yU ? yU : UU._readPixelsSync(),
            layers: QU
          }
        })), QU = Math.min(zU.qp().getCaps().texture2DArrayMaxLayerCount, 256), FU = (0, RU.d)(yU, cU, QU).map((UU => {
          let {
            pixels: XU,
            layers: yU
          } = UU;
          return {
            atlas: new ZU.b(XU, cU, cU, yU, BU.c.TEXTUREFORMAT_RGBA, zU, !0, !1, AU.b.NEAREST_NEAREST_MIPLINEAR),
            layers: yU
          }
        }));
        return UU.forEach(((UU, XU) => {
          const cU = UU.getInternalTexture();
          WU.has(cU) || (! function(UU, XU) {
            const zU = XU.createRawTexture(new Uint8Array(4), 1, 1, BU.c.TEXTUREFORMAT_RGBA, !1, !1, AU.b.NEAREST_SAMPLINGMODE);
            UU._hardwareTexture.release(), XU.unbindAllTextures(), zU._swapAndDie(UU, !1)
          }(cU, zU.qp()), WU.set(cU, yU[XU].pixels))
        })), FU
      }(UU, XU.pixels, zU)))
    }
    const WU = new WeakMap;
    var dU = zU(38592);
    class LU extends(kU(oU.j)) {
      constructor(UU, XU) {
        super(UU, XU), this.loaded = new Set, this.mirrors = void 0, this.mirrors = XU.textures.map((UU => UU.mirror)), XU.useWebGL2 && !XU.imagesPerAtlas.length && XU.textureAtlases.splice(0, XU.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((UU, XU) => {
          UU.onLoadObservable.add((UU => {
            this.setTextureArrayData(UU, XU).catch((UU => {
              console.error(`Failed to build the texture arrays, at atlas ${XU}`, UU)
            }))
          }))
        })), (0, dU.h)(XU, UU.shaderLanguage)
      }
      async setTextureArrayData(UU, XU) {
        const zU = this.featureState,
          {
            width: cU,
            height: yU
          } = UU.getSize(),
          QU = this._material.shaderLanguage;
        if (!zU.useWebGL2) return void(0, dU.d)(this._material, zU, XU, cU, Math.round(yU / cU), QU);
        if (this.loaded.add(XU), this.loaded.size < this.mirrors.length) return;
        const AU = await PU(this.mirrors, zU.sources, this._material.nS());
        (0, dU.b)(this._material, zU, AU, cU, QU)
      }
    }
    var eU = zU(42261),
      CU = zU(41387),
      wU = zU(37814),
      qU = zU(42269),
      OU = zU(41493),
      SU = zU(41378),
      rU = zU(42205),
      uU = zU(38236),
      fU = zU(42273);
    class iU extends eU.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const HU = {
      Mesh: qU.d,
      TransformNode: rU.c,
      XY: eU.b,
      VertexBuffer: eU.e,
      BoundingInfo: CU.b,
      Sp: wU.Sp,
      ArenaBuffer: iU,
      SubMesh: SU.d,
      VertexData: OU.c,
      MirroredGeometry: fU.e,
      meshFromArrays: fU.f,
      plainMeshFromArrays: fU.i
    };
    (0, uU.d)(HU);
    var MU = zU(38057);
    class vU extends(kU(EU.h)) {
      constructor(UU, XU) {
        if (super(UU, XU), UU instanceof cU.StandardMaterial && XU.dirLightCount > 0) {
          const XU = UU,
            zU = XU._blockDirtyMechanism;
          XU._blockDirtyMechanism = !0, UU.disableLighting = !0, XU._blockDirtyMechanism = zU;
          const cU = (0, aU.V)(UU);
          cU && (cU.disableLighting = !0, (0, aU.T)(cU))
        }(0, MU.h)(UU)
      }
      dispose(UU) {
        (0, MU.k)(this._material), super.dispose(UU)
      }
    }

    function VU(UU, XU) {
      if (!(XU instanceof cU.StandardMaterial) || XU.specularTexture) return;
      const {
        r: zU,
        g: yU,
        b: QU
      } = XU.specularColor;
      0 === zU && 0 === yU && 0 === QU && (UU.SPECULARTERM = !1)
    }(0, EU.f)({
      disableUnusedSpecularTerm: VU
    });
    var sU = zU(38007),
      nU = zU(38243);
    const mU = new RegExp(`^#define ${DU.b}\\s*$`, "m");
    class lU extends(kU(DU.f)) {
      constructor(UU, XU) {
        super(UU, XU), this.kp = !1, XU.ditherOnlyWhileFading && (nU.e.add(UU), this.prewarmDitherTwins(UU))
      }
      prewarmDitherTwins(UU) {
        const XU = new WeakSet;
        UU.onEffectCreatedObservable.add((zU => {
          let {
            effect: cU,
            subMesh: yU
          } = zU;
          if (this.featureState.prewarmingDither || XU.has(cU)) return;
          XU.add(cU);
          const QU = null === yU || void 0 === yU ? void 0 : yU.getMesh();
          QU && !mU.test(cU.defines) && UU.nS().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(QU) || XU.delete(cU)
          }))
        }))
      }
      prewarmDither(UU) {
        if (this.kp || UU.oR()) return !1;
        const XU = new SU.d(0, 0, 0, 0, 0, UU, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(UU, XU)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== XU.effect
      }
      dispose(UU) {
        this.kp = !0, super.dispose(UU)
      }
    }
    const xU = new Map;

    function JU(UU, XU) {
      xU.set(UU, XU)
    }
    JU(FU.c, GU), JU(oU.j, LU), JU(DU.f, lU), JU(EU.h, vU), (0, YU.e)({
      create: (UU, XU) => {
        const zU = new cU.StandardMaterial(UU.name, XU);
        return (0, sU.m)(UU, zU), zU.detailMap._pluginDefineNames
      },
      write: (UU, XU, zU) => {
        (0, sU.S)(UU.mirror, XU, zU)
      },
      addFeature: (UU, XU, zU) => {
        const cU = xU.get(XU.feature);
        if (!cU) throw new Error(`${XU.feature.name} has no plugin class (registerPluginClass)`);
        new cU(UU.mirror, XU.state, ...zU)
      },
      texture: (UU, XU, zU) => {
        let {
          url: cU,
          noMipmap: yU,
          invertY: QU,
          samplingMode: FU,
          data: oU,
          sets: DU
        } = zU;
        if (!oU) {
          const zU = new AU.b(cU, XU, yU, QU, FU);
          return Object.assign(zU, DU), void(0, NU.I)(UU, zU)
        }
        const EU = {},
          YU = new Promise(((UU, XU) => {
            EU.onLoad = UU, EU.onError = (UU, zU) => {
              XU(new Error(`${oU.context}: ${(null===zU||void 0===zU?void 0:zU.message)||UU||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: IU,
            bytes: pU,
            label: aU
          } = oU,
          tU = {
            noMipmap: yU,
            invertY: !1,
            samplingMode: FU,
            ...EU,
            mimeType: IU,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          gU = new AU.b(null, XU, tU);
        sU.n.set(gU, YU), Object.assign(gU, DU), gU.updateURL(cU, pU);
        const kU = gU.getInternalTexture();
        kU && (kU.label = aU), UU.uvSet = gU.coordinatesIndex, UU.matrix.set((0, sU.J)(gU)), (0, NU.I)(UU, gU)
      },
      cube: (UU, XU, zU) => {
        let {
          rootUrl: cU,
          files: QU,
          noMipmap: FU,
          luminance: oU
        } = zU;
        const {
          samplingMode: DU
        } = UU.sampler, EU = DU === (0, NU.A)(FU) ? null : () => {
          (0, sU.F)(YU, DU)
        }, YU = new yU.b(cU, XU, null, FU, QU, EU, null, (0, NU.w)(oU));
        YU.coordinatesMode = AU.b.SKYBOX_MODE, (0, NU.I)(UU, YU)
      },
      canvas: (UU, XU, zU) => {
        let {
          width: cU,
          height: yU,
          mipmaps: FU,
          samplingMode: oU,
          hasAlpha: DU = !1,
          wrap: EU = AU.b.CLAMP_ADDRESSMODE
        } = zU;
        const YU = new QU.e(XU, {
          width: cU,
          height: yU
        }, UU, FU, oU);
        YU.hasAlpha = DU, YU.wrapU = EU, YU.wrapV = EU;
        const NU = (0, sU.v)(YU);
        return (0, sU.x)(NU, YU), NU
      }
    })
  },
  42273: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      f: () => YU,
      i: () => NU
    });
    var cU = zU(42261),
      yU = zU(41177),
      QU = zU(41387),
      AU = zU(41495),
      FU = zU(42269),
      oU = zU(41493),
      DU = zU(38121);
    class EU extends AU.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (UU, XU) => {
          this.releaseUnlessInstanced(XU)
        }, this.onLinked = null
      }
      link(UU) {
        var XU;
        (0, DU.p)(UU), this.model = UU, null === (XU = this.onLinked) || void 0 === XU || XU.call(this, UU)
      }
      relink() {
        this.release();
        const UU = [];
        for (const yU of Object.values(this._vertexBuffers))
          if (!yU.getIsInstanced()) {
            const {
              byteOffset: XU,
              byteStride: zU,
              type: cU,
              normalized: QU
            } = yU;
            UU.push({
              kind: yU.getKind(),
              data: yU.getData(),
              offset: XU,
              stride: zU,
              components: yU.getSize(),
              glType: cU,
              isNormalized: QU
            })
          } const XU = this._indices.length ? this._indices : null,
          {
            minimum: zU,
            maximum: cU
          } = this.extend;
        this.link(new DU.h(UU, XU, this.getTotalVertices(), new Float64Array(zU.cyU()), new Float64Array(cU.cyU())))
      }
      copy(UU) {
        if (!this.model) return super.copy(UU);
        const XU = new EU(UU, this.nS()),
          zU = this.yyU(void 0, !0);
        zU && XU.setIndices(zU);
        let AU = !1;
        for (const QU in this._vertexBuffers) {
          const UU = this._vertexBuffers[QU],
            zU = UU.getData();
          if (!zU) continue;
          const FU = UU.getSize(),
            {
              type: oU,
              byteOffset: DU,
              byteStride: EU,
              normalized: YU
            } = UU;
          AU ||= UU.isUpdatable();
          const NU = UU.getIsInstanced() ? (zU instanceof Array ? 4 * zU.length : zU.byteLength) / EU : this.getTotalVertices(),
            IU = (0, yU.s)(zU, FU, oU, DU, EU, NU, !0),
            pU = {
              updatable: UU.isUpdatable(),
              stride: FU,
              type: oU,
              normalized: YU,
              takeBufferOwnership: !0,
              instanced: UU.getIsInstanced()
            };
          XU.setVerticesBuffer(new cU.e(this.qp(), IU, QU, pU), NU)
        }
        return XU._updatable = AU, XU._boundingInfo = new QU.b(this.extend.minimum, this.extend.maximum), XU.relink(), XU
      }
      static mergeMeshes(UU, XU, zU, cU, yU, QU) {
        const oU = UU[0].nS(),
          DU = new FU.d(UU[0].name + "_merged", oU),
          YU = new EU(AU.d.RandomId(), oU, void 0, !1, DU);
        try {
          if (!FU.d.MergeMeshes(UU, XU, zU, DU, yU, QU)) return DU.dispose(), null
        } catch (NU) {
          throw DU.dispose(), NU
        }
        return YU.relink(), DU
      }
      removeVerticesData(UU) {
        this.releaseUnlessInstanced(UU), super.removeVerticesData(UU)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(UU) {
        var XU;
        UU && null !== (XU = this.getVertexBuffer(UU)) && void 0 !== XU && XU.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, DU.w)(this.model), this.model = null)
      }
    }

    function YU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new FU.d(UU, zU);
      const yU = (0, DU.l)(XU),
        {
          positions: QU,
          normals: YU,
          uvs: NU,
          indices: IU,
          named: pU = {}
        } = XU,
        aU = new oU.c;
      aU.positions = QU, aU.normals = null !== YU && void 0 !== YU ? YU : null, aU.uvs = null !== NU && void 0 !== NU ? NU : null, aU.indices = IU;
      const tU = new EU(AU.d.RandomId(), zU, aU, !1, cU);
      for (const {
          kind: AU,
          components: FU
        }
        of yU.vertexAttributes) AU in pU && cU.setVerticesData(AU, pU[AU], !1, FU);
      return tU.link(yU), cU
    }

    function NU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const yU = new FU.d(UU, zU),
        {
          positions: QU,
          normals: AU,
          uvs: DU,
          indices: EU
        } = XU;
      return Object.assign(new oU.c, {
        positions: QU,
        normals: AU,
        uvs: DU,
        indices: EU
      }).applyToMesh(yU, cU), yU
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
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);