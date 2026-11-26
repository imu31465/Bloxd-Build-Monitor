export const id = 273;
export const ids = [273];
export const modules = {
  42416: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => YH,
      e: () => CH,
      h: () => XH,
      k: () => EH,
      m: () => GH
    });
    var AH = LH(1168),
      rH = LH(2339),
      SH = LH(38041),
      hH = LH(38378);
    class tH {
      constructor(HH, BH) {
        this.pose = HH, this.nodes = void 0, this.nodes = HH.boneNames.map((HH => BH.get(HH)))
      }
      write(HH) {
        this.pose.pose(HH), (0, hH.l)(this.pose, this.nodes)
      }
    }

    function zH(HH) {
      HH.unfreezeWorldMatrix();
      for (const BH of HH.getChildren()) zH(BH)
    }
    async function CH(HH, BH, LH, AH) {
      let {
        keepTransforms: rH,
        backFaceCulling: hH
      } = AH;
      const tH = await (0, SH.i)(BH, HH),
        CH = (0, SH.f)(null !== LH && void 0 !== LH ? LH : BH, HH, void 0, hH);
      (0, SH.l)(tH, CH, {
        keepTransforms: rH,
        backFaceCulling: hH,
        onProcessedMesh: BH => {
          HH.QrH(BH, !1), BH.isVisible = !1
        }
      });
      for (const SH of tH.rootNodes) zH(SH);
      return tH
    }

    function EH(HH, BH) {
      HH.isVisible = BH;
      for (const LH of HH.getChildMeshes()) LH.isVisible = BH
    }

    function XH(HH) {
      const BH = new Map;
      for (const LH of HH.getNodes()) BH.set(LH.name, LH);
      return BH
    }

    function GH(HH, BH, LH, AH) {
      EH(HH, !0), (0, SH.o)(HH, BH.overlayColour), LH.attachTransformNode(HH, AH, LH.getNamedNode(AH, BH.destNode))
    }
    class YH {
      constructor(HH, BH, LH) {
        this.NQ = HH, this.thinInstMgr = BH, this.kR = LH, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(HH, BH, LH) {
        const AH = (0, SH.g)(HH, BH);
        return AH in this.modelCache || (this.modelCache[AH] = (async () => {
          try {
            const AH = XH(await CH(this.NQ, HH, BH, {
                keepTransforms: void 0 !== LH,
                backFaceCulling: !1
              })),
              rH = void 0 === LH ? null : (0, hH.j)(LH, (HH => {
                const BH = AH.get(HH);
                return BH ? (0, hH.i)(BH) : null
              }));
            return {
              nodesByName: AH,
              bones: null === rH ? null : new tH(rH, AH)
            }
          } catch (rH) {
            throw delete this.modelCache[AH], console.error(`Failed to load preview attachment ${AH}:`, rH), rH
          }
        })()), this.modelCache[AH]
      }
      async update(HH, BH) {
        var LH;
        const {
          thinInstMgr: SH,
          kR: hH
        } = this;
        this.cosmeticNames[HH] = BH;
        const tH = this.attachmentsByType[HH];
        if (tH)
          for (const {
              mesh: rH,
              destNode: CH,
              bones: XH
            }
            of tH) {
            null !== XH && (0, AH.kb)(this.shownBones, XH), EH(rH, !1);
            const HH = SH.getNamedNode(hH, CH);
            SH.detachTransformNodeIfFound(rH, hH, HH)
          }
        this.attachmentsByType[HH] = [];
        const zH = (0, rH.h)(HH, BH);
        if (null !== zH && void 0 !== zH && null !== (LH = zH.attachments) && void 0 !== LH && LH.length)
          for (const AH of zH.attachments) {
            let LH;
            try {
              LH = await this.loadModel(AH.modelGlb, AH.texture, AH.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[HH] !== BH) return;
            const rH = LH.nodesByName.get(AH.modelNode);
            rH ? (GH(rH, AH, SH, hH), this.attachmentsByType[HH].push({
              mesh: rH,
              destNode: AH.destNode,
              bones: LH.bones
            }), null !== LH.bones && this.shownBones.push(LH.bones)) : console.error(`Preview attachment node ${AH.modelNode} not found in ${AH.modelGlb}`)
          }
      }
      writePoses(HH) {
        for (const BH of this.shownBones) BH.write(HH)
      }
    }
  },
  42386: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      openMobLineupPreview: () => ZH,
      openMobPreview: () => wH,
      openPetPreview: () => dH
    });
    var AH = LH(41106),
      rH = LH(41374),
      SH = LH(42390),
      hH = LH(38071),
      tH = LH(37961),
      zH = LH(41525),
      CH = LH(42414),
      EH = LH(39342),
      XH = LH(38035),
      GH = LH(38020),
      YH = LH(37952),
      uH = LH(39248),
      QH = LH(39246),
      WH = LH(38970),
      MH = LH(38041),
      xH = LH(3038),
      vH = LH(42416),
      PH = LH(2339);
    const TH = new Map;

    function UH(HH, BH) {
      const LH = function(HH) {
        return HH.flatMap((HH => {
          var BH;
          let [LH, AH] = HH;
          const rH = void 0 === AH || null === (BH = (0, PH.h)(LH, AH)) || void 0 === BH ? void 0 : BH.attachments;
          return null !== rH && void 0 !== rH ? rH : []
        }))
      }(BH).map((BH => function(HH, BH) {
        let {
          modelGlb: LH,
          texture: AH,
          animation: rH
        } = BH;
        const SH = void 0 !== rH,
          hH = `${(0,MH.g)(LH,AH)}|${SH}`;
        let tH = TH.get(hH);
        return tH || (tH = (0, vH.e)(HH, LH, AH, {
          keepTransforms: SH,
          backFaceCulling: !1
        }).then(vH.h, (HH => {
          throw TH.delete(hH), HH
        })), TH.set(hH, tH)), tH
      }(HH, BH).then((HH => ({
        attachment: BH,
        nodes: HH
      })), (HH => (console.error(`Mob preview: could not load ${BH.modelGlb}`, HH), null)))));
      return Promise.all(LH).then((HH => HH.filter((HH => null !== HH))))
    }
    var VH = LH(39035),
      OH = LH(39002),
      bH = LH(38646),
      kH = LH(38464);
    LH(42418), LH(41784), LH(42420);
    const mH = 22,
      oH = 13,
      IH = Math.PI - Math.PI / 16,
      fH = 6,
      lH = Math.PI / 4;
    let KH = null;
    const cH = {},
      eH = new Map;

    function qH() {
      if (null !== KH) return KH;
      const HH = document.createElement("canvas");
      HH.classList.add("MobPreviewCanvas");
      const BH = new AH.b(HH, !0, {
        preserveDrawingBuffer: !0
      });
      BH.WrH = (0, xH.c)().mX.engine.WrH;
      const LH = new rH.e(BH);
      LH.clearColor = new hH.d(0, 0, 0, 0), LH.ambientColor = new hH.Color3(1, 1, 1);
      const CH = new SH.e("wW", Math.PI / 2, Math.PI / 2, mH, tH.lu.Zero(), LH),
        EH = new zH.d("light", new tH.lu(-.1, 1, -.3), LH);
      return EH.diffuse = new hH.Color3(1, 1, 1), EH.specular = new hH.Color3(1, 1, 1), EH.groundColor = new hH.Color3(.5, .5, .5), KH = {
        engine: BH,
        NQ: LH,
        canvas: HH,
        camera: CH
      }, KH
    }

    function gH(HH) {
      return cH[HH] ??= (0, WH.u)(HH, qH().NQ, !0).catch((BH => {
        throw delete cH[HH], BH
      })), cH[HH]
    }

    function NH(HH) {
      let BH = eH.get(HH);
      return BH || (BH = bH.x[HH].loadModel(qH().NQ, !1).then((HH => (HH.vI(!1), HH)), (BH => {
        throw eH.delete(HH), BH
      })), eH.set(HH, BH)), BH
    }

    function RH(HH) {
      var BH, LH, AH;
      let {
        mobType: rH,
        variation: SH,
        animation: hH
      } = HH, zH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, PH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const TH = null !== (BH = null === zH || void 0 === zH ? void 0 : zH.size) && void 0 !== BH ? BH : 1,
        mH = null !== (LH = null === zH || void 0 === zH ? void 0 : zH.cosmetics) && void 0 !== LH ? LH : [],
        fH = null !== (AH = null === zH || void 0 === zH ? void 0 : zH.pU) && void 0 !== AH ? AH : null;
      let lH = !1,
        KH = null,
        cH = null;
      const {
        engine: eH,
        NQ: RH
      } = qH(), jH = RH.onBeforeRenderObservable.add((() => {
        var HH;
        null === (HH = cH) || void 0 === HH || HH.render(eH.getDeltaTime())
      })), nH = null === fH ? null : NH(fH).catch((HH => (console.error(`Mob preview: could not load ${fH}`, HH), null)));
      return Promise.all([gH(rH), nH, UH(qH().NQ, mH)]).then((HH => {
        var BH, LH, AH;
        let [zH, UH, eH] = HH;
        if (lH) return;
        const gH = (0, xH.c)().mX.bR,
          {
            hitBoxDimensions: NH
          } = (0, EH.d)(rH),
          RH = oH / Math.max(NH.height, NH.width);
        if (KH = (0, WH.m)(rH, RH * TH, !0, !0), gH.setPosition(KH, PH, -NH.height * RH / 2, 0), gH.setRotationEulerY(KH, IH), zH.meshApi instanceof OH.b && mH.length > 0) {
          for (const [HH, BH] of mH) zH.meshApi.updatePlayerCosmetic(null, KH, HH, BH, !0);
          ! function(HH, BH) {
            const LH = (0, xH.c)().mX.bR;
            for (const {
                attachment: AH,
                nodes: rH
              }
              of HH) {
              const HH = rH.get(AH.modelNode);
              HH ? (0, vH.m)((0, MH.c)(HH, `${HH.name}Worn`), AH, LH, BH) : console.error(`Mob preview: attachment node ${AH.modelNode} not found in ${AH.modelGlb}`)
            }
          }(eH, KH)
        } else zH.meshApi.updateVariation(KH, rH, null !== SH && void 0 !== SH ? SH : "default");
        null !== fH && null !== UH && function(HH, BH, LH, AH) {
          var rH;
          const SH = bH.x[HH],
            hH = (0, uH.k)();
          (0, uH.f)(SH, null === (rH = (0, VH.b)(LH).meshMetadata.heldItemPositionParams) || void 0 === rH ? void 0 : rH.itemOffset, hH);
          const zH = kH.d * hH.bX.y,
            EH = hH.usesQuaternion ? hH.quaternion : tH.Quaternion.FromEulerVector(hH.rotation),
            XH = new CH.c(`${BH.name}Hand`, qH().NQ);
          XH.position.Tm((0, QH.d)(hH.position, EH, zH, SH.heldModelOffsetY())), XH.rotationQuaternion = EH, XH.bX.set(hH.bX.x, zH, hH.bX.z), BH.clone(`${BH.name}Held`, XH).vI(!0);
          const GH = (0, xH.c)().mX.bR;
          GH.attachTransformNode(XH, AH, GH.getNamedNode(AH, "ArmRightMesh"))
        }(fH, UH, rH, KH), gH.set(KH, "aOpacity", 1);
        const jH = null !== (BH = (0, VH.b)(rH).meshMetadata.lifeformTypeForModelOverride) && void 0 !== BH ? BH : rH;
        cH = new YH.AnimatorState, cH.thinInstMgr = gH, cH.kR = KH, cH.NAH = gH.yAH(KH, 0), cH.modelLifeformType = jH, cH.nodeNameAliases = null !== (LH = null === (AH = (0, XH.e)(jH)) || void 0 === AH ? void 0 : AH.nodeNameAliases) && void 0 !== LH ? LH : null, cH.startAnimation(hH, GH.g.Movement)
      })).catch((HH => {
        console.error(`Mob preview: could not load ${rH}`, HH)
      })), () => {
        lH = !0, RH.onBeforeRenderObservable.remove(jH), null !== KH && (0, xH.c)().mX.bR.delete(KH)
      }
    }

    function jH(HH, BH) {
      return RH({
        mobType: "NPC",
        variation: null,
        animation: HH.animation
      }, HH, BH)
    }

    function nH(HH) {
      let {
        mobType: BH,
        variation: LH,
        metaInfo: AH,
        tamed: rH
      } = HH, SH = !1, hH = null, tH = 0;
      const zH = (0, xH.c)(),
        CH = zH.mX.bR,
        EH = HH => {
          tH += lH * (HH / 1e3) % (2 * Math.PI), CH.setRotationEulerY(hH, tH)
        };
      return gH(BH).then((HH => {
        if (SH) return;
        hH = (0, WH.m)(BH, fH, !0, !0), CH.setPosition(hH, 0, -fH, 0), HH.meshApi.updateVariation(hH, BH, LH);
        const tH = {
          wool: "Sheared" !== AH,
          saddle: "Saddled" === AH,
          antlers: "Antlers" === AH,
          collar: rH
        };
        for (const [BH, LH] of Object.entries(tH)) CH.hasGroup(hH, BH) && HH.meshApi.setMeshGroupVisibility(hH, BH, LH);
        CH.set(hH, "aOpacity", 1), zH.on("renderTickBegin", EH)
      })).catch((HH => {
        console.error(`Pet preview: could not load ${BH}`, HH)
      })), () => {
        SH = !0, zH.off("renderTickBegin", EH), null !== hH && CH.delete(hH)
      }
    }
    class FH {
      constructor(HH, BH) {
        this.place = BH, this.remove = null;
        const {
          engine: LH,
          NQ: AH,
          canvas: rH
        } = qH();
        HH.appendChild(rH), LH.resize(), LH.runRenderLoop((() => {
          AH.render()
        }))
      }
      show(HH) {
        var BH;
        null === (BH = this.remove) || void 0 === BH || BH.call(this), this.remove = this.place(HH)
      }
      resize(HH, BH) {
        const {
          engine: LH,
          canvas: AH
        } = qH();
        AH.width = HH, AH.height = BH, LH.resize()
      }
      close() {
        var HH;
        qH().engine.stopRenderLoop(), null === (HH = this.remove) || void 0 === HH || HH.call(this), this.remove = null
      }
    }
    class DH {
      constructor(HH) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new FH(HH, (() => () => {}))
      }
      show(HH) {
        HH.figures !== this.view.figures && this.preload(HH.figures), this.view = HH, this.place()
      }
      resize(HH, BH) {
        this.preview.resize(HH, BH), this.aspect = HH / BH, this.place()
      }
      close() {
        this.preview.close();
        for (const HH of this.placed) null === HH || void 0 === HH || HH.remove();
        this.placed = []
      }
      preload(HH) {
        const BH = () => {};
        gH("NPC").catch(BH);
        for (const {
            pU: LH,
            cosmetics: AH
          }
          of HH) null !== LH && NH(LH).catch(BH), UH(qH().NQ, AH).catch(BH)
      }
      place() {
        const {
          figures: HH,
          shown: BH
        } = this.view, LH = HH.map(((LH, AH) => {
          var rH;
          const SH = null !== (rH = this.placed[AH]) && void 0 !== rH ? rH : null;
          if (!BH[AH]) return null === SH || void 0 === SH || SH.remove(), null;
          const hH = (tH = (AH + .5) / HH.length, zH = this.aspect, (.5 - tH) * (2 * mH * Math.tan(qH().camera.fov / 2)) * zH);
          var tH, zH;
          return null !== SH && SH.figure === LH && SH.x === hH ? SH : (null === SH || void 0 === SH || SH.remove(), {
            figure: LH,
            x: hH,
            remove: jH(LH, hH)
          })
        }));
        for (const AH of this.placed.slice(HH.length)) null === AH || void 0 === AH || AH.remove();
        this.placed = LH
      }
    }

    function wH(HH) {
      return new FH(HH, RH)
    }

    function ZH(HH) {
      return new DH(HH)
    }

    function dH(HH) {
      return new FH(HH, nH)
    }
  },
  39726: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH
    });
    var AH = LH(38084),
      rH = LH(38183),
      SH = LH(38213),
      hH = LH(38098),
      tH = LH(38086);

    function zH(HH) {
      return `\n\t\t\t\t${(0,tH.x)(HH,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, tH.C)(HH, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, tH.C)(HH, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, tH.l)(HH, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function CH(HH, BH) {
      let LH = (0, tH.Cb)(HH, "skele" + (BH - 1));
      for (let rH = BH - 2; rH >= 0; rH--) LH = (0, tH.pb)(HH, `boneIdx == ${rH}`, (0, tH.Cb)(HH, `skele${rH}`), LH);
      const AH = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,tH.C)(HH,"int","boneIdx",(0,tH.ub)(HH,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,tH.C)(HH,"vec3","bone",LH)}\n\t\t\t\t${(0,tH.C)(HH,"vec2","pivot",(0,tH.l)(HH,"vec2","0.0",`${(0,tH.Lb)(HH,"position")}.z`))}\n\t\t\t\t${(0,tH.$)(HH)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${AH}));`:`positionUpdated.yz += ${AH};`}\n\t\t`
    }

    function EH(HH) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,tH.l)(HH,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const XH = {
        x: 0,
        y: 0,
        z: 0,
        SX(HH, BH) {
          return this.x = HH[BH], this.y = HH[BH + 1], this.z = HH[BH + 2], this
        }
      },
      GH = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (HH, BH) => ({
          ...(0, AH.e)("CAPE"),
          BLOXD_CAPE_BONES: `${HH}`,
          BLOXD_CAPE_MAX_Y: (0, rH.zb)(BH)
        }),
        getUniforms(HH) {
          return (0, SH.d)(function(HH) {
            const BH = [];
            for (let LH = 0; LH < HH; LH++) BH.push({
              name: `skele${LH}`,
              type: "highp vec3"
            });
            return BH
          }(this.skeleLen), "vertex", HH)
        },
        bind(HH) {
          for (let BH = 0; BH < this.skeleLen; BH++) HH.updateVector3(`skele${BH}`, XH.SX(this.skele, 3 * BH))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(HH, BH) {
          return "vertex" !== HH ? null : {
            CUSTOM_VERTEX_DEFINITIONS: zH(BH),
            CUSTOM_VERTEX_UPDATE_POSITION: CH(BH, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: EH(BH)
          }
        }
      };
    (0, hH.n)(GH)
  },
  39607: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      i: () => XH
    });
    var AH = LH(38084),
      rH = LH(38213),
      SH = LH(38086),
      hH = LH(38098);
    const tH = "bloxdTextLodBias",
      zH = [{
        name: tH,
        type: "float"
      }],
      CH = "bloxdTextSample",
      EH = {
        planes: -.5,
        boards: -.5
      },
      XH = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, AH.e)("TEXT_SAMPLER"),
        getUniforms: HH => (0, rH.d)(zH, "fragment", HH),
        bind(HH) {
          HH.updateFloat(tH, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(HH, BH) {
          if ("fragment" !== HH) return null;
          const LH = (0, SH.M)(BH, `vec4 ${CH}(sampler2D s, vec2 uv, float bias)`, `fn ${CH}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            AH = (0, SH.M)(BH, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            rH = `${(0,SH.U)(BH,"vDiffuseUV")} + uvOffset`,
            hH = (0, SH.M)(BH, `${CH}(diffuseSampler, ${rH}, ${(0,SH.Cb)(BH,tH)})`, `${CH}(diffuseSampler, diffuseSamplerSampler, ${rH}, ${(0,SH.Cb)(BH,tH)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${LH} {\n\t\t\t\t\t${(0,SH.C)(BH,"vec4","texel",AH)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,SH.l)(BH,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,SH.l)(BH,"vec3","0.0")}, ${(0,SH.l)(BH,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, SH.G)(BH)]: `baseColor = ${hH};`
          }
        }
      };
    (0, hH.n)(XH)
  },
  42420: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CapeMaterialPlugin: () => PH,
      HueTintMaterialPlugin: () => TH,
      LifeformMaterialPlugin: () => UH,
      OverlayMaterialPlugin: () => VH
    });
    var AH = LH(42424),
      rH = LH(38878);
    class SH extends((0, AH.f)(rH.e)) {}(0, AH.g)(rH.e, SH);
    var hH = LH(38176);
    class tH extends((0, AH.f)(hH.d)) {}(0, AH.g)(hH.d, tH);
    var zH = LH(38713);
    class CH extends((0, AH.f)(zH.h)) {}(0, AH.g)(zH.h, CH);
    var EH = LH(38194),
      XH = LH(41538),
      GH = LH(38192);
    class YH extends((0, AH.f)(GH.f)) {
      constructor(HH, BH, LH) {
        super(HH, BH, LH), (0, EH.k)(HH)
      }
      dispose(HH) {
        (0, EH.o)(this._material), super.dispose(HH)
      }
    }(0, AH.g)(GH.f, YH), (0, GH.h)({
      disableUnusedSpecularTerm: AH.d,
      isLightingDisabled: HH => HH instanceof XH.StandardMaterial && HH.disableLighting
    });
    var uH = LH(39607);
    class QH extends((0, AH.f)(uH.i)) {}(0, AH.g)(uH.i, QH);
    var WH = LH(39726),
      MH = LH(38077),
      xH = LH(39019),
      vH = LH(38190);
    class PH extends((0, AH.f)(WH.e)) {}(0, AH.g)(WH.e, PH);
    class TH extends((0, AH.f)(MH.e)) {}(0, AH.g)(MH.e, TH);
    class UH extends((0, AH.f)(xH.l)) {}(0, AH.g)(xH.l, UH);
    class VH extends((0, AH.f)(vH.d)) {}(0, AH.g)(vH.d, VH)
  },
  42424: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => nH,
      f: () => xH,
      g: () => aH
    });
    var AH = LH(41538),
      rH = LH(42427),
      SH = LH(42472),
      hH = LH(42434),
      tH = LH(38681),
      zH = LH(38687),
      CH = LH(38695),
      EH = LH(38697),
      XH = LH(38131),
      GH = LH(38135),
      YH = LH(42439),
      uH = LH(38098),
      QH = LH(38118),
      WH = LH(38086);

    function MH(HH, BH) {
      return Object.assign((function(HH, LH, AH, rH) {
        return BH(this.featureState, HH, LH, AH, rH)
      }), {
        EX: HH
      })
    }

    function xH(HH) {
      const BH = class extends YH.e {
          constructor(BH, LH) {
            const AH = (0, QH.V)(BH),
              rH = AH && (0, QH.s)(AH, HH.name);
            for (var SH = arguments.length, hH = new Array(SH > 2 ? SH - 2 : 0), tH = 2; tH < SH; tH++) hH[tH - 2] = arguments[tH];
            super(BH, HH.name, HH.priority, rH ? rH.defines : HH.defines(...hH), !1), this.featureState = void 0, this.featureState = LH, this._pluginManager._addPlugin(this), this._enable(!0), (0, QH.v)(this._material, HH, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return HH.className
          }
          isCompatible(HH) {
            return HH === WH.c.GLSL || HH === WH.c.WGSL
          }
        },
        LH = (0, uH.h)(HH);
      for (const [AH, rH] of Object.entries(uH.d)) {
        const SH = HH[AH];
        if (SH) {
          const HH = LH[AH];
          Object.defineProperty(BH.prototype, rH, {
            value: MH(SH, HH),
            writable: !0,
            configurable: !0
          })
        }
      }
      return BH
    }
    class vH extends(xH(tH.c)) {}
    var PH = LH(41106),
      TH = LH(42445),
      UH = LH(42449);

    function VH(HH, BH, LH) {
      return (0, UH.d)(LH, BH.urls, (() => async function(HH, BH, LH) {
        const {
          width: AH
        } = HH[0].getSize(), rH = HH.map(((HH, LH) => {
          var rH;
          const SH = Math.round(HH.getSize().height / AH),
            hH = null === BH || void 0 === BH ? void 0 : BH[LH];
          return {
            pixels: hH && hH.byteLength === AH * AH * SH * 4 ? hH : null !== (rH = OH.get(HH.getInternalTexture())) && void 0 !== rH ? rH : HH._readPixelsSync(),
            layers: SH
          }
        })), SH = Math.min(LH.Iu().getCaps().texture2DArrayMaxLayerCount, 256), tH = (0, UH.c)(rH, AH, SH).map((HH => {
          let {
            pixels: BH,
            layers: rH
          } = HH;
          return {
            atlas: new TH.c(BH, AH, AH, rH, PH.b.TEXTUREFORMAT_RGBA, LH, !0, !1, hH.d.NEAREST_NEAREST_MIPLINEAR),
            layers: rH
          }
        }));
        return HH.forEach(((HH, BH) => {
          const AH = HH.getInternalTexture();
          OH.has(AH) || (! function(HH, BH) {
            const LH = BH.createRawTexture(new Uint8Array(4), 1, 1, PH.b.TEXTUREFORMAT_RGBA, !1, !1, hH.d.NEAREST_SAMPLINGMODE);
            HH._hardwareTexture.release(), BH.unbindAllTextures(), LH._swapAndDie(HH, !1)
          }(AH, LH.Iu()), OH.set(AH, rH[BH].pixels))
        })), tH
      }(HH, BH.pixels, LH)))
    }
    const OH = new WeakMap;
    var bH = LH(38705);
    class kH extends(xH(zH.g)) {
      constructor(HH, BH) {
        super(HH, BH), this.loaded = new Set, this.mirrors = void 0, this.mirrors = BH.textures.map((HH => HH.mirror)), BH.useWebGL2 && !BH.imagesPerAtlas.length && BH.textureAtlases.splice(0, BH.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((HH, BH) => {
          HH.onLoadObservable.add((HH => {
            this.setTextureArrayData(HH, BH).catch((HH => {
              console.error(`Failed to build the texture arrays, at atlas ${BH}`, HH)
            }))
          }))
        })), (0, bH.l)(BH, HH.shaderLanguage)
      }
      async setTextureArrayData(HH, BH) {
        const LH = this.featureState,
          {
            width: AH,
            height: rH
          } = HH.getSize(),
          SH = this._material.shaderLanguage;
        if (!LH.useWebGL2) return void(0, bH.f)(this._material, LH, BH, AH, Math.round(rH / AH), SH);
        if (this.loaded.add(BH), this.loaded.size < this.mirrors.length) return;
        const hH = await VH(this.mirrors, LH.sources, this._material.yN());
        (0, bH.b)(this._material, LH, hH, AH, SH)
      }
    }
    var mH = LH(42455),
      oH = LH(41588),
      IH = LH(37961),
      fH = LH(42458),
      lH = LH(41703),
      KH = LH(41578),
      cH = LH(42414),
      eH = LH(38339),
      qH = LH(42463);
    class gH extends mH.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const NH = {
      Mesh: fH.c,
      TransformNode: cH.c,
      rX: mH.b,
      VertexBuffer: mH.e,
      BoundingInfo: oH.d,
      lu: IH.lu,
      ArenaBuffer: gH,
      SubMesh: KH.d,
      VertexData: lH.b,
      MirroredGeometry: qH.c,
      meshFromArrays: qH.f,
      plainMeshFromArrays: qH.g
    };
    (0, eH.d)(NH);
    var RH = LH(38194);
    class jH extends(xH(EH.h)) {
      constructor(HH, BH) {
        if (super(HH, BH), HH instanceof AH.StandardMaterial && BH.dirLightCount > 0) {
          const BH = HH,
            LH = BH._blockDirtyMechanism;
          BH._blockDirtyMechanism = !0, HH.disableLighting = !0, BH._blockDirtyMechanism = LH;
          const AH = (0, QH.V)(HH);
          AH && (AH.disableLighting = !0, (0, QH.T)(AH))
        }(0, RH.k)(HH)
      }
      dispose(HH) {
        (0, RH.o)(this._material), super.dispose(HH)
      }
    }

    function nH(HH, BH) {
      if (!(BH instanceof AH.StandardMaterial) || BH.specularTexture) return;
      const {
        r: LH,
        g: rH,
        b: SH
      } = BH.specularColor;
      0 === LH && 0 === rH && 0 === SH && (HH.SPECULARTERM = !1)
    }(0, EH.d)({
      disableUnusedSpecularTerm: nH
    });
    var FH = LH(38141),
      DH = LH(38353);
    const wH = new RegExp(`^#define ${CH.d}\\s*$`, "m");
    class ZH extends(xH(CH.j)) {
      constructor(HH, BH) {
        super(HH, BH), this.Mu = !1, BH.ditherOnlyWhileFading && (DH.c.add(HH), this.prewarmDitherTwins(HH))
      }
      prewarmDitherTwins(HH) {
        const BH = new WeakSet;
        HH.onEffectCreatedObservable.add((LH => {
          let {
            effect: AH,
            subMesh: rH
          } = LH;
          if (this.featureState.prewarmingDither || BH.has(AH)) return;
          BH.add(AH);
          const SH = null === rH || void 0 === rH ? void 0 : rH.getMesh();
          SH && !wH.test(AH.defines) && HH.yN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(SH) || BH.delete(AH)
          }))
        }))
      }
      prewarmDither(HH) {
        if (this.Mu || HH.mV()) return !1;
        const BH = new KH.d(0, 0, 0, 0, 0, HH, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(HH, BH)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== BH.effect
      }
      dispose(HH) {
        this.Mu = !0, super.dispose(HH)
      }
    }
    const dH = new Map;

    function aH(HH, BH) {
      dH.set(HH, BH)
    }
    aH(tH.c, vH), aH(zH.g, kH), aH(CH.j, ZH), aH(EH.h, jH), (0, XH.d)({
      create: (HH, BH) => {
        const LH = new AH.StandardMaterial(HH.name, BH);
        return (0, FH.m)(HH, LH), LH.detailMap._pluginDefineNames
      },
      write: (HH, BH, LH) => {
        (0, FH.P)(HH.mirror, BH, LH)
      },
      addFeature: (HH, BH, LH) => {
        const AH = dH.get(BH.feature);
        if (!AH) throw new Error(`${BH.feature.name} has no plugin class (registerPluginClass)`);
        new AH(HH.mirror, BH.state, ...LH)
      },
      texture: (HH, BH, LH) => {
        let {
          url: AH,
          noMipmap: rH,
          invertY: SH,
          samplingMode: tH,
          data: zH,
          sets: CH
        } = LH;
        if (!zH) {
          const LH = new hH.d(AH, BH, rH, SH, tH);
          return Object.assign(LH, CH), void(0, GH.H)(HH, LH)
        }
        const EH = {},
          XH = new Promise(((HH, BH) => {
            EH.onLoad = HH, EH.onError = (HH, LH) => {
              BH(new Error(`${zH.context}: ${(null===LH||void 0===LH?void 0:LH.message)||HH||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: YH,
            bytes: uH,
            label: QH
          } = zH,
          WH = {
            noMipmap: rH,
            invertY: !1,
            samplingMode: tH,
            ...EH,
            mimeType: YH,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          MH = new hH.d(null, BH, WH);
        FH.o.set(MH, XH), Object.assign(MH, CH), MH.updateURL(AH, uH);
        const xH = MH.getInternalTexture();
        xH && (xH.label = QH), HH.uvSet = MH.coordinatesIndex, HH.matrix.set((0, FH.K)(MH)), (0, GH.H)(HH, MH)
      },
      cube: (HH, BH, LH) => {
        let {
          rootUrl: AH,
          files: SH,
          noMipmap: tH,
          luminance: zH
        } = LH;
        const {
          samplingMode: CH
        } = HH.sampler, EH = CH === (0, GH.w)(tH) ? null : () => {
          (0, FH.G)(XH, CH)
        }, XH = new rH.e(AH, BH, null, tH, SH, EH, null, (0, GH.s)(zH));
        XH.coordinatesMode = hH.d.SKYBOX_MODE, (0, GH.H)(HH, XH)
      },
      canvas: (HH, BH, LH) => {
        let {
          width: AH,
          height: rH,
          mipmaps: tH,
          samplingMode: zH,
          hasAlpha: CH = !1,
          wrap: EH = hH.d.CLAMP_ADDRESSMODE
        } = LH;
        const XH = new SH.e(BH, {
          width: AH,
          height: rH
        }, HH, tH, zH);
        XH.hasAlpha = CH, XH.wrapU = EH, XH.wrapV = EH;
        const GH = (0, FH.x)(XH);
        return (0, FH.y)(GH, XH), GH
      }
    })
  },
  42463: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH,
      f: () => XH,
      g: () => GH
    });
    var AH = LH(42455),
      rH = LH(41356),
      SH = LH(41588),
      hH = LH(41706),
      tH = LH(42458),
      zH = LH(41703),
      CH = LH(38251);
    class EH extends hH.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (HH, BH) => {
          this.releaseUnlessInstanced(BH)
        }, this.onLinked = null
      }
      link(HH) {
        var BH;
        (0, CH.r)(HH), this.model = HH, null === (BH = this.onLinked) || void 0 === BH || BH.call(this, HH)
      }
      relink() {
        this.release();
        const HH = [];
        for (const rH of Object.values(this._vertexBuffers))
          if (!rH.getIsInstanced()) {
            const {
              byteOffset: BH,
              byteStride: LH,
              type: AH,
              normalized: SH
            } = rH;
            HH.push({
              kind: rH.getKind(),
              data: rH.getData(),
              offset: BH,
              stride: LH,
              components: rH.getSize(),
              glType: AH,
              isNormalized: SH
            })
          } const BH = this._indices.length ? this._indices : null,
          {
            minimum: LH,
            maximum: AH
          } = this.extend;
        this.link(new CH.h(HH, BH, this.getTotalVertices(), new Float64Array(LH.xrH()), new Float64Array(AH.xrH())))
      }
      copy(HH) {
        if (!this.model) return super.copy(HH);
        const BH = new EH(HH, this.yN()),
          LH = this.vrH(void 0, !0);
        LH && BH.setIndices(LH);
        let hH = !1;
        for (const SH in this._vertexBuffers) {
          const HH = this._vertexBuffers[SH],
            LH = HH.getData();
          if (!LH) continue;
          const tH = HH.getSize(),
            {
              type: zH,
              byteOffset: CH,
              byteStride: EH,
              normalized: XH
            } = HH;
          hH ||= HH.isUpdatable();
          const GH = HH.getIsInstanced() ? (LH instanceof Array ? 4 * LH.length : LH.byteLength) / EH : this.getTotalVertices(),
            YH = (0, rH.r)(LH, tH, zH, CH, EH, GH, !0),
            uH = {
              updatable: HH.isUpdatable(),
              stride: tH,
              type: zH,
              normalized: XH,
              takeBufferOwnership: !0,
              instanced: HH.getIsInstanced()
            };
          BH.setVerticesBuffer(new AH.e(this.Iu(), YH, SH, uH), GH)
        }
        return BH._updatable = hH, BH._boundingInfo = new SH.d(this.extend.minimum, this.extend.maximum), BH.relink(), BH
      }
      static mergeMeshes(HH, BH, LH, AH, rH, SH) {
        const zH = HH[0].yN(),
          CH = new tH.c(HH[0].name + "_merged", zH),
          XH = new EH(hH.d.RandomId(), zH, void 0, !1, CH);
        try {
          if (!tH.c.MergeMeshes(HH, BH, LH, CH, rH, SH)) return CH.dispose(), null
        } catch (GH) {
          throw CH.dispose(), GH
        }
        return XH.relink(), CH
      }
      removeVerticesData(HH) {
        this.releaseUnlessInstanced(HH), super.removeVerticesData(HH)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(HH) {
        var BH;
        HH && null !== (BH = this.getVertexBuffer(HH)) && void 0 !== BH && BH.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, CH.z)(this.model), this.model = null)
      }
    }

    function XH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new tH.c(HH, LH);
      const rH = (0, CH.p)(BH),
        {
          positions: SH,
          normals: XH,
          uvs: GH,
          indices: YH,
          named: uH = {}
        } = BH,
        QH = new zH.b;
      QH.positions = SH, QH.normals = null !== XH && void 0 !== XH ? XH : null, QH.uvs = null !== GH && void 0 !== GH ? GH : null, QH.indices = YH;
      const WH = new EH(hH.d.RandomId(), LH, QH, !1, AH);
      for (const {
          kind: hH,
          components: tH
        }
        of rH.vertexAttributes) hH in uH && AH.setVerticesData(hH, uH[hH], !1, tH);
      return WH.link(rH), AH
    }

    function GH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const rH = new tH.c(HH, LH),
        {
          positions: SH,
          normals: hH,
          uvs: CH,
          indices: EH
        } = BH;
      return Object.assign(new zH.b, {
        positions: SH,
        normals: hH,
        uvs: CH,
        indices: EH
      }).applyToMesh(rH, AH), rH
    }
  },
  42449: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      const AH = BH * BH * 4,
        rH = HH[0].layers,
        SH = rH * (HH.length - 1) + HH[HH.length - 1].layers,
        hH = new Uint8Array(SH * AH);
      HH.forEach(((BH, LH) => {
        const SH = LH + 1 < HH.length ? Math.min(BH.layers, rH) : BH.layers;
        hH.set(new Uint8Array(BH.pixels.buffer, BH.pixels.byteOffset, SH * AH), LH * rH * AH)
      }));
      const tH = Math.max(1, Math.min(SH, LH || SH));
      if (tH === SH) return [{
        pixels: hH,
        layers: SH
      }];
      const zH = [];
      for (let CH = 0; CH < SH; CH += tH) {
        const HH = Math.min(SH, CH + tH);
        zH.push({
          pixels: hH.slice(CH * AH, HH * AH),
          layers: HH - CH
        })
      }
      return zH
    }
    LH.d(BH, {
      c: () => AH,
      d: () => SH
    });
    const rH = new WeakMap;

    function SH(HH, BH, LH) {
      var AH, SH;
      const hH = null !== (AH = rH.get(HH)) && void 0 !== AH ? AH : new Map;
      rH.set(HH, hH);
      const tH = null !== (SH = hH.get(BH[0])) && void 0 !== SH ? SH : [];
      hH.set(BH[0], tH);
      const zH = tH.find((HH => HH.urls.length === BH.length && HH.urls.every(((HH, LH) => HH === BH[LH]))));
      if (zH) return zH.built;
      const CH = {
        urls: [...BH],
        built: LH()
      };
      return tH.push(CH), CH.built.catch((() => {
        tH.splice(tH.indexOf(CH), 1)
      })), CH.built
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);