export const id = 154;
export const ids = [154];
export const modules = {
  40289: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      openMobLineupPreview: () => wY,
      openMobPreview: () => MY,
      openPetPreview: () => bY
    });
    var FY = DY(38965),
      AY = DY(39209),
      IY = DY(40295),
      RY = DY(36586),
      OY = DY(36518),
      gY = DY(39375),
      aY = DY(40314),
      vY = DY(37858),
      uY = DY(36931),
      sY = DY(36894),
      iY = DY(36914),
      yY = DY(37760),
      QY = DY(37753),
      oY = DY(37500),
      WY = DY(37545),
      EY = DY(37522),
      mY = DY(37123),
      VY = DY(2501),
      SY = DY(36885);
    DY(40316), DY(39602), DY(40323);
    const lY = 22,
      TY = 13,
      eY = Math.PI - Math.PI / 16,
      NY = 6,
      BY = Math.PI / 4;
    let cY = null;
    const KY = {},
      HY = new Map;

    function zY() {
      if (null !== cY) return cY;
      const YY = document.createElement("canvas");
      YY.classList.add("MobPreviewCanvas");
      const rY = new FY.c(YY, !0, {
        preserveDrawingBuffer: !0
      });
      rY.QDY = (0, VY.e)().sQ.engine.QDY;
      const DY = new AY.c(rY);
      DY.clearColor = new RY.c(0, 0, 0, 0), DY.ambientColor = new RY.Color3(1, 1, 1);
      const aY = new IY.e("Co", Math.PI / 2, Math.PI / 2, lY, OY.xy.Zero(), DY),
        vY = new gY.e("light", new OY.xy(-.1, 1, -.3), DY);
      return vY.diffuse = new RY.Color3(1, 1, 1), vY.specular = new RY.Color3(1, 1, 1), vY.groundColor = new RY.Color3(.5, .5, .5), cY = {
        engine: rY,
        LQ: DY,
        canvas: YY,
        camera: aY
      }, cY
    }

    function ZY(YY) {
      return KY[YY] ??= (0, oY.v)(YY, zY().LQ, !0).catch((rY => {
        throw delete KY[YY], rY
      })), KY[YY]
    }

    function CY(YY) {
      let rY = HY.get(YY);
      return rY || (rY = mY.C[YY].loadModel(zY().LQ, !1).then((YY => (YY.mV(!1), YY)), (rY => {
        throw HY.delete(YY), rY
      })), HY.set(YY, rY)), rY
    }

    function fY(YY) {
      var rY, DY, FY;
      let {
        mobType: AY,
        variation: IY,
        animation: RY
      } = YY, gY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, lY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const NY = null !== (rY = null === gY || void 0 === gY ? void 0 : gY.size) && void 0 !== rY ? rY : 1,
        BY = null !== (DY = null === gY || void 0 === gY ? void 0 : gY.cosmetics) && void 0 !== DY ? DY : [],
        cY = null !== (FY = null === gY || void 0 === gY ? void 0 : gY.RV) && void 0 !== FY ? FY : null;
      let KY = !1,
        HY = null,
        fY = null;
      const {
        engine: jY,
        LQ: hY
      } = zY(), dY = hY.onBeforeRenderObservable.add((() => {
        var YY;
        null === (YY = fY) || void 0 === YY || YY.render(jY.getDeltaTime())
      })), JY = null === cY ? null : CY(cY).catch((YY => (console.error(`Mob preview: could not load ${cY}`, YY), null)));
      return Promise.all([ZY(AY), JY]).then((YY => {
        var rY, DY, FY;
        let [gY, ZY] = YY;
        if (KY) return;
        const CY = (0, VY.e)().sQ.qT,
          {
            hitBoxDimensions: jY
          } = (0, vY.e)(AY),
          hY = TY / Math.max(jY.height, jY.width);
        if (HY = (0, oY.j)(AY, hY * NY, !0, !0), CY.setPosition(HY, lY, -jY.height * hY / 2, 0), CY.setRotationEulerY(HY, eY), gY.meshApi instanceof EY.e && BY.length > 0)
          for (const [AY, IY] of BY) gY.meshApi.updatePlayerCosmetic(null, HY, AY, IY, !0);
        else gY.meshApi.updateVariation(HY, AY, null !== IY && void 0 !== IY ? IY : "default");
        null !== cY && null !== ZY && function(YY, rY, DY, FY) {
          var AY;
          const IY = mY.C[YY],
            RY = (0, yY.l)();
          (0, yY.h)(IY, null === (AY = (0, WY.b)(DY).meshMetadata.heldItemPositionParams) || void 0 === AY ? void 0 : AY.itemOffset, RY);
          const gY = SY.e * RY.pa.y,
            vY = RY.usesQuaternion ? RY.quaternion : OY.Quaternion.FromEulerVector(RY.rotation),
            uY = new aY.e(`${rY.name}Hand`, zY().LQ);
          uY.position.brY((0, QY.e)(RY.position, vY, gY, IY.heldModelOffsetY())), uY.rotationQuaternion = vY, uY.pa.set(RY.pa.x, gY, RY.pa.z), rY.clone(`${rY.name}Held`, uY).mV(!0);
          const sY = (0, VY.e)().sQ.qT;
          sY.attachTransformNode(uY, FY, sY.getNamedNode(FY, "ArmRightMesh"))
        }(cY, ZY, AY, HY), CY.set(HY, "aOpacity", 1);
        const dY = null !== (rY = (0, WY.b)(AY).meshMetadata.lifeformTypeForModelOverride) && void 0 !== rY ? rY : AY;
        fY = new iY.AnimatorState, fY.thinInstMgr = CY, fY.pT = HY, fY.MrY = CY.oDY(HY, 0), fY.modelLifeformType = dY, fY.nodeNameAliases = null !== (DY = null === (FY = (0, uY.b)(dY)) || void 0 === FY ? void 0 : FY.nodeNameAliases) && void 0 !== DY ? DY : null, fY.startAnimation(RY, sY.d.Movement)
      })).catch((YY => {
        console.error(`Mob preview: could not load ${AY}`, YY)
      })), () => {
        KY = !0, hY.onBeforeRenderObservable.remove(dY), null !== HY && (0, VY.e)().sQ.qT.delete(HY)
      }
    }

    function jY(YY, rY) {
      return fY({
        mobType: "NPC",
        variation: null,
        animation: YY.animation
      }, YY, rY)
    }

    function hY(YY) {
      let {
        mobType: rY,
        variation: DY,
        metaInfo: FY,
        tamed: AY
      } = YY, IY = !1, RY = null, OY = 0;
      const gY = (0, VY.e)(),
        aY = gY.sQ.qT,
        vY = YY => {
          OY += BY * (YY / 1e3) % (2 * Math.PI), aY.setRotationEulerY(RY, OY)
        };
      return ZY(rY).then((YY => {
        if (IY) return;
        RY = (0, oY.j)(rY, NY, !0, !0), aY.setPosition(RY, 0, -NY, 0), YY.meshApi.updateVariation(RY, rY, DY);
        const OY = {
          wool: "Sheared" !== FY,
          saddle: "Saddled" === FY,
          antlers: "Antlers" === FY,
          collar: AY
        };
        for (const [rY, DY] of Object.entries(OY)) aY.hasGroup(RY, rY) && YY.meshApi.setMeshGroupVisibility(RY, rY, DY);
        aY.set(RY, "aOpacity", 1), gY.on("renderTickBegin", vY)
      })).catch((YY => {
        console.error(`Pet preview: could not load ${rY}`, YY)
      })), () => {
        IY = !0, gY.off("renderTickBegin", vY), null !== RY && aY.delete(RY)
      }
    }
    class dY {
      constructor(YY, rY) {
        this.place = rY, this.remove = null;
        const {
          engine: DY,
          LQ: FY,
          canvas: AY
        } = zY();
        YY.appendChild(AY), DY.resize(), DY.runRenderLoop((() => {
          FY.render()
        }))
      }
      show(YY) {
        var rY;
        null === (rY = this.remove) || void 0 === rY || rY.call(this), this.remove = this.place(YY)
      }
      resize(YY, rY) {
        const {
          engine: DY,
          canvas: FY
        } = zY();
        FY.width = YY, FY.height = rY, DY.resize()
      }
      close() {
        var YY;
        zY().engine.stopRenderLoop(), null === (YY = this.remove) || void 0 === YY || YY.call(this), this.remove = null
      }
    }
    class JY {
      constructor(YY) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new dY(YY, (() => () => {}))
      }
      show(YY) {
        YY.figures !== this.view.figures && this.preload(YY.figures), this.view = YY, this.place()
      }
      resize(YY, rY) {
        this.preview.resize(YY, rY), this.aspect = YY / rY, this.place()
      }
      close() {
        this.preview.close();
        for (const YY of this.placed) null === YY || void 0 === YY || YY.remove();
        this.placed = []
      }
      preload(YY) {
        const rY = () => {};
        ZY("NPC").catch(rY);
        for (const {
            RV: DY
          }
          of YY) null !== DY && CY(DY).catch(rY)
      }
      place() {
        const {
          figures: YY,
          shown: rY
        } = this.view, DY = YY.map(((DY, FY) => {
          var AY;
          const IY = null !== (AY = this.placed[FY]) && void 0 !== AY ? AY : null;
          if (!rY[FY]) return null === IY || void 0 === IY || IY.remove(), null;
          const RY = (OY = (FY + .5) / YY.length, gY = this.aspect, (.5 - OY) * (2 * lY * Math.tan(zY().camera.fov / 2)) * gY);
          var OY, gY;
          return null !== IY && IY.figure === DY && IY.x === RY ? IY : (null === IY || void 0 === IY || IY.remove(), {
            figure: DY,
            x: RY,
            remove: jY(DY, RY)
          })
        }));
        for (const FY of this.placed.slice(YY.length)) null === FY || void 0 === FY || FY.remove();
        this.placed = DY
      }
    }

    function MY(YY) {
      return new dY(YY, fY)
    }

    function wY(YY) {
      return new JY(YY)
    }

    function bY(YY) {
      return new dY(YY, hY)
    }
  },
  38154: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => sY
    });
    var FY = DY(36450),
      AY = DY(36460),
      IY = DY(36691),
      RY = DY(36465),
      OY = DY(36454);

    function gY(YY) {
      return `\n\t\t\t\t${(0,OY.z)(YY,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, OY.F)(YY, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, OY.F)(YY, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, OY.n)(YY, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function aY(YY, rY) {
      let DY = (0, OY.Ib)(YY, "skele" + (rY - 1));
      for (let AY = rY - 2; AY >= 0; AY--) DY = (0, OY.ub)(YY, `boneIdx == ${AY}`, (0, OY.Ib)(YY, `skele${AY}`), DY);
      const FY = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,OY.F)(YY,"int","boneIdx",(0,OY.Ab)(YY,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,OY.F)(YY,"vec3","bone",DY)}\n\t\t\t\t${(0,OY.F)(YY,"vec2","pivot",(0,OY.n)(YY,"vec2","0.0",`${(0,OY.Ob)(YY,"position")}.z`))}\n\t\t\t\t${(0,OY.db)(YY)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${FY}));`:`positionUpdated.yz += ${FY};`}\n\t\t`
    }

    function vY(YY) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,OY.n)(YY,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const uY = {
        x: 0,
        y: 0,
        z: 0,
        grY(YY, rY) {
          return this.x = YY[rY], this.y = YY[rY + 1], this.z = YY[rY + 2], this
        }
      },
      sY = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (YY, rY) => ({
          ...(0, FY.b)("CAPE"),
          BLOXD_CAPE_BONES: `${YY}`,
          BLOXD_CAPE_MAX_Y: (0, AY.lb)(rY)
        }),
        getUniforms(YY) {
          return (0, IY.e)(function(YY) {
            const rY = [];
            for (let DY = 0; DY < YY; DY++) rY.push({
              name: `skele${DY}`,
              type: "highp vec3"
            });
            return rY
          }(this.skeleLen), "vertex", YY)
        },
        bind(YY) {
          for (let rY = 0; rY < this.skeleLen; rY++) YY.updateVector3(`skele${rY}`, uY.grY(this.skele, 3 * rY))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(YY, rY) {
          return "vertex" !== YY ? null : {
            CUSTOM_VERTEX_DEFINITIONS: gY(rY),
            CUSTOM_VERTEX_UPDATE_POSITION: aY(rY, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: vY(rY)
          }
        }
      };
    (0, RY.l)(sY)
  },
  38050: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY,
      f: () => uY
    });
    var FY = DY(36450),
      AY = DY(36691),
      IY = DY(36454),
      RY = DY(36465);
    const OY = "bloxdTextLodBias",
      gY = [{
        name: OY,
        type: "float"
      }],
      aY = "bloxdTextSample",
      vY = {
        planes: -.5,
        boards: -.5
      },
      uY = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, FY.b)("TEXT_SAMPLER"),
        getUniforms: YY => (0, AY.e)(gY, "fragment", YY),
        bind(YY) {
          YY.updateFloat(OY, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(YY, rY) {
          if ("fragment" !== YY) return null;
          const DY = (0, IY.M)(rY, `vec4 ${aY}(sampler2D s, vec2 uv, float bias)`, `fn ${aY}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            FY = (0, IY.M)(rY, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            AY = `${(0,IY.U)(rY,"vDiffuseUV")} + uvOffset`,
            RY = (0, IY.M)(rY, `${aY}(diffuseSampler, ${AY}, ${(0,IY.Ib)(rY,OY)})`, `${aY}(diffuseSampler, diffuseSamplerSampler, ${AY}, ${(0,IY.Ib)(rY,OY)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${DY} {\n\t\t\t\t\t${(0,IY.F)(rY,"vec4","texel",FY)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,IY.n)(rY,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,IY.n)(rY,"vec3","0.0")}, ${(0,IY.n)(rY,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, IY.G)(rY)]: `baseColor = ${RY};`
          }
        }
      };
    (0, RY.l)(uY)
  },
  8236: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      f: () => OY,
      i: () => gY
    });
    var FY = DY(2091),
      AY = DY(1244),
      IY = DY(2099);
    const RY = ",";

    function OY(YY) {
      if (!YY) return [];
      const rY = new Set,
        DY = [];
      for (const FY of YY.split(RY)) {
        const YY = FY.trim();
        if ((0, IY.j)(YY) && !rY.has(YY) && (rY.add(YY), DY.push(YY), DY.length >= AY.m)) break
      }
      return DY
    }

    function gY(YY) {
      const rY = new Set,
        DY = [];
      for (const FY of YY)
        if ((0, IY.j)(FY) && !rY.has(FY) && (rY.add(FY), DY.push(FY), DY.length >= AY.m)) break;
      return DY.join(RY)
    }

    function aY() {
      return gY(IY.e)
    }

    function vY(YY) {
      var rY;
      return "emote" === YY ? aY() : null !== (rY = uY[YY][0]) && void 0 !== rY ? rY : sY[YY]
    }
    const uY = AY.u.reduce(((YY, rY) => {
        const DY = [];
        for (const IY in FY.g[rY]) {
          var AY;
          "default" === (null === (AY = (0, FY.n)(rY, IY)) || void 0 === AY ? void 0 : AY.cosmeticPack) && DY.push(IY)
        }
        return YY[rY] = DY, YY
      }), {}),
      sY = AY.u.reduce(((YY, rY) => (YY[rY] = Object.keys(FY.g[rY])[0], YY)), {})
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);