export const id = 146;
export const ids = [146];
export const modules = {
  39946: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      openMobLineupPreview: () => NJ,
      openMobPreview: () => zJ,
      openPetPreview: () => OJ
    });
    var FJ = ZJ(38624),
      UJ = ZJ(38872),
      eJ = ZJ(39952),
      XJ = ZJ(36229),
      AJ = ZJ(36165),
      qJ = ZJ(39009),
      jJ = ZJ(39971),
      YJ = ZJ(37458),
      hJ = ZJ(36588),
      DJ = ZJ(36555),
      sJ = ZJ(36578),
      nJ = ZJ(37368),
      GJ = ZJ(37364),
      fJ = ZJ(37108),
      xJ = ZJ(37143),
      rJ = ZJ(37118),
      vJ = ZJ(36759),
      mJ = ZJ(2401),
      QJ = ZJ(36542);
    ZJ(39980), ZJ(39250), ZJ(39987);
    const EJ = 22,
      VJ = 13,
      KJ = Math.PI - Math.PI / 16,
      yJ = 6,
      SJ = Math.PI / 4;
    let IJ = null;
    const MJ = {},
      bJ = new Map;

    function wJ() {
      if (null !== IJ) return IJ;
      const JJ = document.createElement("canvas");
      JJ.classList.add("MobPreviewCanvas");
      const cJ = new FJ.e(JJ, !0, {
        preserveDrawingBuffer: !0
      });
      cJ.LZJ = (0, mJ.h)().XG.engine.LZJ;
      const ZJ = new UJ.b(cJ);
      ZJ.clearColor = new XJ.e(0, 0, 0, 0), ZJ.ambientColor = new XJ.Color3(1, 1, 1);
      const jJ = new eJ.b("yf", Math.PI / 2, Math.PI / 2, EJ, AJ.Pn.Zero(), ZJ),
        YJ = new qJ.b("light", new AJ.Pn(-.1, 1, -.3), ZJ);
      return YJ.diffuse = new XJ.Color3(1, 1, 1), YJ.specular = new XJ.Color3(1, 1, 1), YJ.groundColor = new XJ.Color3(.5, .5, .5), IJ = {
        engine: cJ,
        iG: ZJ,
        canvas: JJ,
        camera: jJ
      }, IJ
    }

    function WJ(JJ) {
      return MJ[JJ] ??= (0, fJ.r)(JJ, wJ().iG, !0).catch((cJ => {
        throw delete MJ[JJ], cJ
      })), MJ[JJ]
    }

    function gJ(JJ) {
      let cJ = bJ.get(JJ);
      return cJ || (cJ = vJ.A[JJ].loadModel(wJ().iG, !1).then((JJ => (JJ.GV(!1), JJ)), (cJ => {
        throw bJ.delete(JJ), cJ
      })), bJ.set(JJ, cJ)), cJ
    }

    function HJ(JJ) {
      var cJ, ZJ, FJ;
      let {
        mobType: UJ,
        variation: eJ,
        animation: XJ
      } = JJ, qJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, EJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const yJ = null !== (cJ = null === qJ || void 0 === qJ ? void 0 : qJ.size) && void 0 !== cJ ? cJ : 1,
        SJ = null !== (ZJ = null === qJ || void 0 === qJ ? void 0 : qJ.cosmetics) && void 0 !== ZJ ? ZJ : [],
        IJ = null !== (FJ = null === qJ || void 0 === qJ ? void 0 : qJ.cV) && void 0 !== FJ ? FJ : null;
      let MJ = !1,
        bJ = null,
        HJ = null;
      const {
        engine: PJ,
        iG: kJ
      } = wJ(), pJ = kJ.onBeforeRenderObservable.add((() => {
        var JJ;
        null === (JJ = HJ) || void 0 === JJ || JJ.render(PJ.getDeltaTime())
      })), dJ = null === IJ ? null : gJ(IJ).catch((JJ => (console.error(`Mob preview: could not load ${IJ}`, JJ), null)));
      return Promise.all([WJ(UJ), dJ]).then((JJ => {
        var cJ, ZJ, FJ;
        let [qJ, WJ] = JJ;
        if (MJ) return;
        const gJ = (0, mJ.h)().XG.Wy,
          {
            hitBoxDimensions: PJ
          } = (0, YJ.c)(UJ),
          kJ = VJ / Math.max(PJ.height, PJ.width);
        if (bJ = (0, fJ.k)(UJ, kJ * yJ, !0, !0), gJ.setPosition(bJ, EJ, -PJ.height * kJ / 2, 0), gJ.setRotationEulerY(bJ, KJ), qJ.meshApi instanceof rJ.e && SJ.length > 0)
          for (const [UJ, eJ] of SJ) qJ.meshApi.updatePlayerCosmetic(null, bJ, UJ, eJ, !0);
        else qJ.meshApi.updateVariation(bJ, UJ, null !== eJ && void 0 !== eJ ? eJ : "default");
        null !== IJ && null !== WJ && function(JJ, cJ, ZJ, FJ) {
          var UJ;
          const eJ = vJ.A[JJ],
            XJ = (0, nJ.h)();
          (0, nJ.e)(eJ, null === (UJ = (0, xJ.d)(ZJ).meshMetadata.heldItemPositionParams) || void 0 === UJ ? void 0 : UJ.itemOffset, XJ);
          const qJ = QJ.e * XJ.GA.y,
            YJ = XJ.usesQuaternion ? XJ.quaternion : AJ.Quaternion.FromEulerVector(XJ.rotation),
            hJ = new jJ.e(`${cJ.name}Hand`, wJ().iG);
          hJ.position.rZJ((0, GJ.b)(XJ.position, YJ, qJ, eJ.heldModelOffsetY())), hJ.rotationQuaternion = YJ, hJ.GA.set(XJ.GA.x, qJ, XJ.GA.z), cJ.clone(`${cJ.name}Held`, hJ).GV(!0);
          const DJ = (0, mJ.h)().XG.Wy;
          DJ.attachTransformNode(hJ, FJ, DJ.getNamedNode(FJ, "ArmRightMesh"))
        }(IJ, WJ, UJ, bJ), gJ.set(bJ, "aOpacity", 1);
        const pJ = null !== (cJ = (0, xJ.d)(UJ).meshMetadata.lifeformTypeForModelOverride) && void 0 !== cJ ? cJ : UJ;
        HJ = new sJ.AnimatorState, HJ.thinInstMgr = gJ, HJ.Py = bJ, HJ.fZJ = gJ.aZJ(bJ, 0), HJ.modelLifeformType = pJ, HJ.nodeNameAliases = null !== (ZJ = null === (FJ = (0, hJ.b)(pJ)) || void 0 === FJ ? void 0 : FJ.nodeNameAliases) && void 0 !== ZJ ? ZJ : null, HJ.startAnimation(XJ, DJ.f.Movement)
      })).catch((JJ => {
        console.error(`Mob preview: could not load ${UJ}`, JJ)
      })), () => {
        MJ = !0, kJ.onBeforeRenderObservable.remove(pJ), null !== bJ && (0, mJ.h)().XG.Wy.delete(bJ)
      }
    }

    function PJ(JJ, cJ) {
      return HJ({
        mobType: "NPC",
        variation: null,
        animation: JJ.animation
      }, JJ, cJ)
    }

    function kJ(JJ) {
      let {
        mobType: cJ,
        variation: ZJ,
        metaInfo: FJ,
        tamed: UJ
      } = JJ, eJ = !1, XJ = null, AJ = 0;
      const qJ = (0, mJ.h)(),
        jJ = qJ.XG.Wy,
        YJ = JJ => {
          AJ += SJ * (JJ / 1e3) % (2 * Math.PI), jJ.setRotationEulerY(XJ, AJ)
        };
      return WJ(cJ).then((JJ => {
        if (eJ) return;
        XJ = (0, fJ.k)(cJ, yJ, !0, !0), jJ.setPosition(XJ, 0, -yJ, 0), JJ.meshApi.updateVariation(XJ, cJ, ZJ);
        const AJ = {
          wool: "Sheared" !== FJ,
          saddle: "Saddled" === FJ,
          antlers: "Antlers" === FJ,
          collar: UJ
        };
        for (const [cJ, ZJ] of Object.entries(AJ)) jJ.hasGroup(XJ, cJ) && JJ.meshApi.setMeshGroupVisibility(XJ, cJ, ZJ);
        jJ.set(XJ, "aOpacity", 1), qJ.on("renderTickBegin", YJ)
      })).catch((JJ => {
        console.error(`Pet preview: could not load ${cJ}`, JJ)
      })), () => {
        eJ = !0, qJ.off("renderTickBegin", YJ), null !== XJ && jJ.delete(XJ)
      }
    }
    class pJ {
      constructor(JJ, cJ) {
        this.place = cJ, this.remove = null;
        const {
          engine: ZJ,
          iG: FJ,
          canvas: UJ
        } = wJ();
        JJ.appendChild(UJ), ZJ.resize(), ZJ.runRenderLoop((() => {
          FJ.render()
        }))
      }
      show(JJ) {
        var cJ;
        null === (cJ = this.remove) || void 0 === cJ || cJ.call(this), this.remove = this.place(JJ)
      }
      resize(JJ, cJ) {
        const {
          engine: ZJ,
          canvas: FJ
        } = wJ();
        FJ.width = JJ, FJ.height = cJ, ZJ.resize()
      }
      close() {
        var JJ;
        wJ().engine.stopRenderLoop(), null === (JJ = this.remove) || void 0 === JJ || JJ.call(this), this.remove = null
      }
    }
    class dJ {
      constructor(JJ) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new pJ(JJ, (() => () => {}))
      }
      show(JJ) {
        JJ.figures !== this.view.figures && this.preload(JJ.figures), this.view = JJ, this.place()
      }
      resize(JJ, cJ) {
        this.preview.resize(JJ, cJ), this.aspect = JJ / cJ, this.place()
      }
      close() {
        this.preview.close();
        for (const JJ of this.placed) null === JJ || void 0 === JJ || JJ.remove();
        this.placed = []
      }
      preload(JJ) {
        const cJ = () => {};
        WJ("NPC").catch(cJ);
        for (const {
            cV: ZJ
          }
          of JJ) null !== ZJ && gJ(ZJ).catch(cJ)
      }
      place() {
        const {
          figures: JJ,
          shown: cJ
        } = this.view, ZJ = JJ.map(((ZJ, FJ) => {
          var UJ;
          const eJ = null !== (UJ = this.placed[FJ]) && void 0 !== UJ ? UJ : null;
          if (!cJ[FJ]) return null === eJ || void 0 === eJ || eJ.remove(), null;
          const XJ = (AJ = (FJ + .5) / JJ.length, qJ = this.aspect, (.5 - AJ) * (2 * EJ * Math.tan(wJ().camera.fov / 2)) * qJ);
          var AJ, qJ;
          return null !== eJ && eJ.figure === ZJ && eJ.x === XJ ? eJ : (null === eJ || void 0 === eJ || eJ.remove(), {
            figure: ZJ,
            x: XJ,
            remove: PJ(ZJ, XJ)
          })
        }));
        for (const FJ of this.placed.slice(JJ.length)) null === FJ || void 0 === FJ || FJ.remove();
        this.placed = ZJ
      }
    }

    function zJ(JJ) {
      return new pJ(JJ, HJ)
    }

    function NJ(JJ) {
      return new dJ(JJ)
    }

    function OJ(JJ) {
      return new pJ(JJ, kJ)
    }
  },
  37754: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => DJ
    });
    var FJ = ZJ(36086),
      UJ = ZJ(36102),
      eJ = ZJ(36349),
      XJ = ZJ(36107),
      AJ = ZJ(36093);

    function qJ(JJ) {
      return `\n\t\t\t\t${(0,AJ.A)(JJ,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, AJ.H)(JJ, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, AJ.H)(JJ, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, AJ.p)(JJ, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function jJ(JJ, cJ) {
      let ZJ = (0, AJ.Hb)(JJ, "skele" + (cJ - 1));
      for (let UJ = cJ - 2; UJ >= 0; UJ--) ZJ = (0, AJ.zb)(JJ, `boneIdx == ${UJ}`, (0, AJ.Hb)(JJ, `skele${UJ}`), ZJ);
      const FJ = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,AJ.H)(JJ,"int","boneIdx",(0,AJ.Fb)(JJ,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,AJ.H)(JJ,"vec3","bone",ZJ)}\n\t\t\t\t${(0,AJ.H)(JJ,"vec2","pivot",(0,AJ.p)(JJ,"vec2","0.0",`${(0,AJ.Nb)(JJ,"position")}.z`))}\n\t\t\t\t${(0,AJ.gb)(JJ)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${FJ}));`:`positionUpdated.yz += ${FJ};`}\n\t\t`
    }

    function YJ(JJ) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,AJ.p)(JJ,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const hJ = {
        x: 0,
        y: 0,
        z: 0,
        zcJ(JJ, cJ) {
          return this.x = JJ[cJ], this.y = JJ[cJ + 1], this.z = JJ[cJ + 2], this
        }
      },
      DJ = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (JJ, cJ) => ({
          ...(0, FJ.b)("CAPE"),
          BLOXD_CAPE_BONES: `${JJ}`,
          BLOXD_CAPE_MAX_Y: (0, UJ.ib)(cJ)
        }),
        getUniforms(JJ) {
          return (0, eJ.d)(function(JJ) {
            const cJ = [];
            for (let ZJ = 0; ZJ < JJ; ZJ++) cJ.push({
              name: `skele${ZJ}`,
              type: "highp vec3"
            });
            return cJ
          }(this.skeleLen), "vertex", JJ)
        },
        bind(JJ) {
          for (let cJ = 0; cJ < this.skeleLen; cJ++) JJ.updateVector3(`skele${cJ}`, hJ.zcJ(this.skele, 3 * cJ))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(JJ, cJ) {
          return "vertex" !== JJ ? null : {
            CUSTOM_VERTEX_DEFINITIONS: qJ(cJ),
            CUSTOM_VERTEX_UPDATE_POSITION: jJ(cJ, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: YJ(cJ)
          }
        }
      };
    (0, XJ.p)(DJ)
  },
  37667: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => YJ,
      g: () => hJ
    });
    var FJ = ZJ(36086),
      UJ = ZJ(36349),
      eJ = ZJ(36093),
      XJ = ZJ(36107);
    const AJ = "bloxdTextLodBias",
      qJ = [{
        name: AJ,
        type: "float"
      }],
      jJ = "bloxdTextSample",
      YJ = {
        planes: -.5,
        boards: -.5
      },
      hJ = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, FJ.b)("TEXT_SAMPLER"),
        getUniforms: JJ => (0, UJ.d)(qJ, "fragment", JJ),
        bind(JJ) {
          JJ.updateFloat(AJ, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(JJ, cJ) {
          if ("fragment" !== JJ) return null;
          const ZJ = (0, eJ.Q)(cJ, `vec4 ${jJ}(sampler2D s, vec2 uv, float bias)`, `fn ${jJ}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            FJ = (0, eJ.Q)(cJ, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            UJ = `${(0,eJ.$)(cJ,"vDiffuseUV")} + uvOffset`,
            XJ = (0, eJ.Q)(cJ, `${jJ}(diffuseSampler, ${UJ}, ${(0,eJ.Hb)(cJ,AJ)})`, `${jJ}(diffuseSampler, diffuseSamplerSampler, ${UJ}, ${(0,eJ.Hb)(cJ,AJ)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZJ} {\n\t\t\t\t\t${(0,eJ.H)(cJ,"vec4","texel",FJ)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,eJ.p)(cJ,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,eJ.p)(cJ,"vec3","0.0")}, ${(0,eJ.p)(cJ,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, eJ.L)(cJ)]: `baseColor = ${XJ};`
          }
        }
      };
    (0, XJ.p)(hJ)
  },
  8114: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      i: () => AJ,
      j: () => qJ
    });
    var FJ = ZJ(1995),
      UJ = ZJ(1137),
      eJ = ZJ(2001);
    const XJ = ",";

    function AJ(JJ) {
      if (!JJ) return [];
      const cJ = new Set,
        ZJ = [];
      for (const FJ of JJ.split(XJ)) {
        const JJ = FJ.trim();
        if ((0, eJ.n)(JJ) && !cJ.has(JJ) && (cJ.add(JJ), ZJ.push(JJ), ZJ.length >= UJ.n)) break
      }
      return ZJ
    }

    function qJ(JJ) {
      const cJ = new Set,
        ZJ = [];
      for (const FJ of JJ)
        if ((0, eJ.n)(FJ) && !cJ.has(FJ) && (cJ.add(FJ), ZJ.push(FJ), ZJ.length >= UJ.n)) break;
      return ZJ.join(XJ)
    }

    function jJ() {
      return qJ(eJ.i)
    }

    function YJ(JJ) {
      var cJ;
      return "emote" === JJ ? jJ() : null !== (cJ = hJ[JJ][0]) && void 0 !== cJ ? cJ : DJ[JJ]
    }
    const hJ = UJ.s.reduce(((JJ, cJ) => {
        const ZJ = [];
        for (const eJ in FJ.g[cJ]) {
          var UJ;
          "default" === (null === (UJ = (0, FJ.i)(cJ, eJ)) || void 0 === UJ ? void 0 : UJ.cosmeticPack) && ZJ.push(eJ)
        }
        return JJ[cJ] = ZJ, JJ
      }), {}),
      DJ = UJ.s.reduce(((JJ, cJ) => (JJ[cJ] = Object.keys(FJ.g[cJ])[0], JJ)), {})
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);