export const id = 142;
export const ids = [142];
export const modules = {
  38676: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      openMobLineupPreview: () => xR,
      openMobPreview: () => mR,
      openPetPreview: () => vR
    });
    var wW = MW(37418),
      CW = MW(37670),
      zR = MW(38683),
      AW = MW(35373),
      bR = MW(35317),
      yR = MW(37821),
      NW = MW(38701),
      eW = MW(36537),
      BW = MW(35700),
      tR = MW(35669),
      TW = MW(35688),
      gR = MW(36459),
      iR = MW(36451),
      YW = MW(36189),
      JW = MW(36241),
      PW = MW(36211),
      IW = MW(35861),
      oW = MW(2154),
      lW = MW(35658);
    MW(38704), MW(38074), MW(38709);
    const FW = 22,
      fW = 13,
      QW = Math.PI - Math.PI / 16,
      rR = 6,
      cR = Math.PI / 4;
    let XW = null;
    const jR = {},
      kR = new Map;

    function aR() {
      if (null !== XW) return XW;
      const WW = document.createElement("canvas");
      WW.classList.add("MobPreviewCanvas");
      const RW = new wW.b(WW, !0, {
        preserveDrawingBuffer: !0
      });
      RW.BNW = (0, oW.e)().AC.engine.BNW;
      const MW = new CW.b(RW);
      MW.clearColor = new AW.d(0, 0, 0, 0), MW.ambientColor = new AW.Color3(1, 1, 1);
      const NW = new zR.e("OA", Math.PI / 2, Math.PI / 2, FW, bR.vC.Zero(), MW),
        eW = new yR.b("light", new bR.vC(-.1, 1, -.3), MW);
      return eW.diffuse = new AW.Color3(1, 1, 1), eW.specular = new AW.Color3(1, 1, 1), eW.groundColor = new AW.Color3(.5, .5, .5), XW = {
        engine: RW,
        LC: MW,
        canvas: WW,
        camera: NW
      }, XW
    }

    function sW(WW) {
      return jR[WW] ??= (0, YW.s)(WW, aR().LC, !0).catch((RW => {
        throw delete jR[WW], RW
      })), jR[WW]
    }

    function dW(WW) {
      let RW = kR.get(WW);
      return RW || (RW = IW.x[WW].loadModel(aR().LC, !1).then((WW => (WW.kMW(!1), WW)), (RW => {
        throw kR.delete(WW), RW
      })), kR.set(WW, RW)), RW
    }

    function pW(WW) {
      var RW, MW, wW;
      let {
        mobType: CW,
        variation: zR,
        animation: AW
      } = WW, yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, FW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const rR = null !== (RW = null === yR || void 0 === yR ? void 0 : yR.size) && void 0 !== RW ? RW : 1,
        cR = null !== (MW = null === yR || void 0 === yR ? void 0 : yR.cosmetics) && void 0 !== MW ? MW : [],
        XW = null !== (wW = null === yR || void 0 === yR ? void 0 : yR.WJ) && void 0 !== wW ? wW : null;
      let jR = !1,
        kR = null,
        pW = null;
      const {
        engine: hW,
        LC: UW
      } = aR(), EW = UW.onBeforeRenderObservable.add((() => {
        var WW;
        null === (WW = pW) || void 0 === WW || WW.render(hW.getDeltaTime())
      })), VW = null === XW ? null : dW(XW).catch((WW => (console.error(`Mob preview: could not load ${XW}`, WW), null)));
      return Promise.all([sW(CW), VW]).then((WW => {
        var RW, MW, wW;
        let [yR, sW] = WW;
        if (jR) return;
        const dW = (0, oW.e)().AC.XRW,
          {
            hitBoxDimensions: hW
          } = (0, eW.d)(CW),
          UW = fW / Math.max(hW.height, hW.width);
        if (kR = (0, YW.l)(CW, UW * rR, !0, !0), dW.setPosition(kR, FW, -hW.height * UW / 2, 0), dW.setRotationEulerY(kR, QW), yR.meshApi instanceof PW.b && cR.length > 0)
          for (const [CW, zR] of cR) yR.meshApi.updatePlayerCosmetic(null, kR, CW, zR, !0);
        else yR.meshApi.updateVariation(kR, CW, null !== zR && void 0 !== zR ? zR : "default");
        null !== XW && null !== sW && function(WW, RW, MW, wW) {
          var CW;
          const zR = IW.x[WW],
            AW = (0, gR.k)();
          (0, gR.g)(zR, null === (CW = (0, JW.b)(MW).meshMetadata.heldItemPositionParams) || void 0 === CW ? void 0 : CW.itemOffset, AW);
          const yR = lW.c * AW.NA.y,
            eW = AW.usesQuaternion ? AW.quaternion : bR.Quaternion.FromEulerVector(AW.rotation),
            BW = new NW.d(`${RW.name}Hand`, aR().LC);
          BW.position.hyW((0, iR.c)(AW.position, eW, yR, zR.heldModelOffsetY())), BW.rotationQuaternion = eW, BW.NA.set(AW.NA.x, yR, AW.NA.z), RW.clone(`${RW.name}Held`, BW).kMW(!0);
          const tR = (0, oW.e)().AC.XRW;
          tR.attachTransformNode(BW, wW, tR.getNamedNode(wW, "ArmRightMesh"))
        }(XW, sW, CW, kR), dW.set(kR, "aOpacity", 1);
        const EW = null !== (RW = (0, JW.b)(CW).meshMetadata.lifeformTypeForModelOverride) && void 0 !== RW ? RW : CW;
        pW = new TW.AnimatorState, pW.thinInstMgr = dW, pW.jMW = kR, pW.dyW = dW.teW(kR, 0), pW.modelLifeformType = EW, pW.nodeNameAliases = null !== (MW = null === (wW = (0, BW.c)(EW)) || void 0 === wW ? void 0 : wW.nodeNameAliases) && void 0 !== MW ? MW : null, pW.startAnimation(AW, tR.c.Movement)
      })).catch((WW => {
        console.error(`Mob preview: could not load ${CW}`, WW)
      })), () => {
        jR = !0, UW.onBeforeRenderObservable.remove(EW), null !== kR && (0, oW.e)().AC.XRW.delete(kR)
      }
    }

    function hW(WW, RW) {
      return pW({
        mobType: "NPC",
        variation: null,
        animation: WW.animation
      }, WW, RW)
    }

    function UW(WW) {
      let {
        mobType: RW,
        variation: MW,
        shownGroups: wW
      } = WW, CW = !1, zR = null, AW = 0;
      const bR = (0, oW.e)(),
        yR = bR.AC.XRW,
        NW = WW => {
          AW += cR * (WW / 1e3) % (2 * Math.PI), yR.setRotationEulerY(zR, AW)
        };
      return sW(RW).then((WW => {
        if (!CW) {
          zR = (0, YW.l)(RW, rR, !0, !0), yR.setPosition(zR, 0, -rR, 0), WW.meshApi.updateVariation(zR, RW, MW);
          for (const RW of Object.keys(wW)) yR.hasGroup(zR, RW) && WW.meshApi.setMeshGroupVisibility(zR, RW, wW[RW]);
          yR.set(zR, "aOpacity", 1), bR.on("renderTickBegin", NW)
        }
      })).catch((WW => {
        console.error(`Pet preview: could not load ${RW}`, WW)
      })), () => {
        CW = !0, bR.off("renderTickBegin", NW), null !== zR && yR.delete(zR)
      }
    }
    class EW {
      constructor(WW, RW) {
        this.place = RW, this.remove = null;
        const {
          engine: MW,
          LC: wW,
          canvas: CW
        } = aR();
        WW.appendChild(CW), MW.resize(), MW.runRenderLoop((() => {
          wW.render()
        }))
      }
      show(WW) {
        var RW;
        null === (RW = this.remove) || void 0 === RW || RW.call(this), this.remove = this.place(WW)
      }
      resize(WW, RW) {
        const {
          engine: MW,
          canvas: wW
        } = aR();
        wW.width = WW, wW.height = RW, MW.resize()
      }
      close() {
        var WW;
        aR().engine.stopRenderLoop(), null === (WW = this.remove) || void 0 === WW || WW.call(this), this.remove = null
      }
    }
    class VW {
      constructor(WW) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new EW(WW, (() => () => {}))
      }
      show(WW) {
        WW.figures !== this.view.figures && this.preload(WW.figures), this.view = WW, this.place()
      }
      resize(WW, RW) {
        this.preview.resize(WW, RW), this.aspect = WW / RW, this.place()
      }
      close() {
        this.preview.close();
        for (const WW of this.placed) null === WW || void 0 === WW || WW.remove();
        this.placed = []
      }
      preload(WW) {
        const RW = () => {};
        sW("NPC").catch(RW);
        for (const {
            WJ: MW
          }
          of WW) null !== MW && dW(MW).catch(RW)
      }
      place() {
        const {
          figures: WW,
          shown: RW
        } = this.view, MW = WW.map(((MW, wW) => {
          var CW;
          const zR = null !== (CW = this.placed[wW]) && void 0 !== CW ? CW : null;
          if (!RW[wW]) return null === zR || void 0 === zR || zR.remove(), null;
          const AW = (bR = (wW + .5) / WW.length, yR = this.aspect, (.5 - bR) * (2 * FW * Math.tan(aR().camera.fov / 2)) * yR);
          var bR, yR;
          return null !== zR && zR.figure === MW && zR.x === AW ? zR : (null === zR || void 0 === zR || zR.remove(), {
            figure: MW,
            x: AW,
            remove: hW(MW, AW)
          })
        }));
        for (const wW of this.placed.slice(WW.length)) null === wW || void 0 === wW || wW.remove();
        this.placed = MW
      }
    }

    function mR(WW) {
      return new EW(WW, pW)
    }

    function xR(WW) {
      return new VW(WW)
    }

    function vR(WW) {
      return new EW(WW, UW)
    }
  },
  36814: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR
    });
    var wW = MW(35242),
      CW = MW(35257),
      zR = MW(35470),
      AW = MW(35259),
      bR = MW(35248);

    function yR(WW) {
      return `\n\t\t\t\t${(0,bR.A)(WW,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, bR.G)(WW, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, bR.G)(WW, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, bR.s)(WW, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function NW(WW, RW) {
      let MW = (0, bR.Kb)(WW, "skele" + (RW - 1));
      for (let CW = RW - 2; CW >= 0; CW--) MW = (0, bR.xb)(WW, `boneIdx == ${CW}`, (0, bR.Kb)(WW, `skele${CW}`), MW);
      const wW = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,bR.G)(WW,"int","boneIdx",(0,bR.Db)(WW,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,bR.G)(WW,"vec3","bone",MW)}\n\t\t\t\t${(0,bR.G)(WW,"vec2","pivot",(0,bR.s)(WW,"vec2","0.0",`${(0,bR.Sb)(WW,"position")}.z`))}\n\t\t\t\t${(0,bR.eb)(WW)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${wW}));`:`positionUpdated.yz += ${wW};`}\n\t\t`
    }

    function eW(WW) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,bR.s)(WW,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const BW = {
        x: 0,
        y: 0,
        z: 0,
        MyW(WW, RW) {
          return this.x = WW[RW], this.y = WW[RW + 1], this.z = WW[RW + 2], this
        }
      },
      tR = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (WW, RW) => ({
          ...(0, wW.e)("CAPE"),
          BLOXD_CAPE_BONES: `${WW}`,
          BLOXD_CAPE_MAX_Y: (0, CW.kb)(RW)
        }),
        getUniforms(WW) {
          return (0, zR.c)(function(WW) {
            const RW = [];
            for (let MW = 0; MW < WW; MW++) RW.push({
              name: `skele${MW}`,
              type: "highp vec3"
            });
            return RW
          }(this.skeleLen), "vertex", WW)
        },
        bind(WW) {
          for (let RW = 0; RW < this.skeleLen; RW++) WW.updateVector3(`skele${RW}`, BW.MyW(this.skele, 3 * RW))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(WW, RW) {
          return "vertex" !== WW ? null : {
            CUSTOM_VERTEX_DEFINITIONS: yR(RW),
            CUSTOM_VERTEX_UPDATE_POSITION: NW(RW, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: eW(RW)
          }
        }
      };
    (0, AW.o)(tR)
  },
  36737: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => eW,
      h: () => BW
    });
    var wW = MW(35242),
      CW = MW(35470),
      zR = MW(35248),
      AW = MW(35259);
    const bR = "bloxdTextLodBias",
      yR = [{
        name: bR,
        type: "float"
      }],
      NW = "bloxdTextSample",
      eW = {
        planes: -.5,
        boards: -.5
      },
      BW = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, wW.e)("TEXT_SAMPLER"),
        getUniforms: WW => (0, CW.c)(yR, "fragment", WW),
        bind(WW) {
          WW.updateFloat(bR, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(WW, RW) {
          if ("fragment" !== WW) return null;
          const MW = (0, zR.O)(RW, `vec4 ${NW}(sampler2D s, vec2 uv, float bias)`, `fn ${NW}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            wW = (0, zR.O)(RW, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            CW = `${(0,zR.Z)(RW,"vDiffuseUV")} + uvOffset`,
            AW = (0, zR.O)(RW, `${NW}(diffuseSampler, ${CW}, ${(0,zR.Kb)(RW,bR)})`, `${NW}(diffuseSampler, diffuseSamplerSampler, ${CW}, ${(0,zR.Kb)(RW,bR)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${MW} {\n\t\t\t\t\t${(0,zR.G)(RW,"vec4","texel",wW)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,zR.s)(RW,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,zR.s)(RW,"vec3","0.0")}, ${(0,zR.s)(RW,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, zR.H)(RW)]: `baseColor = ${AW};`
          }
        }
      };
    (0, AW.o)(BW)
  },
  7714: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => eW,
      e: () => bR,
      h: () => yR
    });
    var wW = MW(1828),
      CW = MW(1066),
      zR = MW(1835);
    const AW = ",";

    function bR(WW) {
      if (!WW) return [];
      const RW = new Set,
        MW = [];
      for (const wW of WW.split(AW)) {
        const WW = wW.trim();
        if ((0, zR.k)(WW) && !RW.has(WW) && (RW.add(WW), MW.push(WW), MW.length >= CW.q)) break
      }
      return MW
    }

    function yR(WW) {
      const RW = new Set,
        MW = [];
      for (const wW of WW)
        if ((0, zR.k)(wW) && !RW.has(wW) && (RW.add(wW), MW.push(wW), MW.length >= CW.q)) break;
      return MW.join(AW)
    }

    function NW() {
      return yR(zR.g)
    }

    function eW(WW) {
      var RW;
      return "emote" === WW ? NW() : null !== (RW = BW[WW][0]) && void 0 !== RW ? RW : tR[WW]
    }
    const BW = CW.y.reduce(((WW, RW) => {
        const MW = [];
        for (const zR in wW.f[RW]) {
          var CW;
          "default" === (null === (CW = (0, wW.j)(RW, zR)) || void 0 === CW ? void 0 : CW.cosmeticPack) && MW.push(zR)
        }
        return WW[RW] = MW, WW
      }), {}),
      tR = CW.y.reduce(((WW, RW) => (WW[RW] = Object.keys(wW.f[RW])[0], WW)), {})
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);